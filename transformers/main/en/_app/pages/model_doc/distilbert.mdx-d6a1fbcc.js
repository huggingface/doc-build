import{S as r2,i as a2,s as i2,e as n,k as l,w as b,t as a,M as l2,c as s,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as w,q as y,o as $,B as D,v as d2}from"../../chunks/vendor-6b77c823.js";import{T as fe}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as Fe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function c2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function p2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function h2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function u2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function m2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function f2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function g2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),I=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),m=d(K),B=s(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=s(O,"CODE",{});var _e=r(I);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=s(h,"UL",{});var j=r(x);z=s(j,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var ye=r(R);ae=i(ye,"model(inputs_ids)"),ye.forEach(t),H.forEach(t),ee=d(j),A=s(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s(Z,"CODE",{});var $e=r(L);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),Z.forEach(t),me=d(j),P=s(j,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var De=r(U);le=i(De,'model({"input_ids": input_ids})'),De.forEach(t),se.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function _2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function v2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),I=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),m=d(K),B=s(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=s(O,"CODE",{});var _e=r(I);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=s(h,"UL",{});var j=r(x);z=s(j,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var ye=r(R);ae=i(ye,"model(inputs_ids)"),ye.forEach(t),H.forEach(t),ee=d(j),A=s(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s(Z,"CODE",{});var $e=r(L);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),Z.forEach(t),me=d(j),P=s(j,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var De=r(U);le=i(De,'model({"input_ids": input_ids})'),De.forEach(t),se.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function T2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function b2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),I=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),m=d(K),B=s(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=s(O,"CODE",{});var _e=r(I);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=s(h,"UL",{});var j=r(x);z=s(j,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var ye=r(R);ae=i(ye,"model(inputs_ids)"),ye.forEach(t),H.forEach(t),ee=d(j),A=s(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s(Z,"CODE",{});var $e=r(L);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),Z.forEach(t),me=d(j),P=s(j,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var De=r(U);le=i(De,'model({"input_ids": input_ids})'),De.forEach(t),se.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function k2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function w2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),I=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),m=d(K),B=s(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=s(O,"CODE",{});var _e=r(I);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=s(h,"UL",{});var j=r(x);z=s(j,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var ye=r(R);ae=i(ye,"model(inputs_ids)"),ye.forEach(t),H.forEach(t),ee=d(j),A=s(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s(Z,"CODE",{});var $e=r(L);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),Z.forEach(t),me=d(j),P=s(j,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var De=r(U);le=i(De,'model({"input_ids": input_ids})'),De.forEach(t),se.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function y2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),I=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),m=d(K),B=s(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=s(O,"CODE",{});var _e=r(I);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=s(h,"UL",{});var j=r(x);z=s(j,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var ye=r(R);ae=i(ye,"model(inputs_ids)"),ye.forEach(t),H.forEach(t),ee=d(j),A=s(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s(Z,"CODE",{});var $e=r(L);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),Z.forEach(t),me=d(j),P=s(j,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var De=r(U);le=i(De,'model({"input_ids": input_ids})'),De.forEach(t),se.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function D2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function F2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),I=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),m=d(K),B=s(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=s(O,"CODE",{});var _e=r(I);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=s(h,"UL",{});var j=r(x);z=s(j,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var ye=r(R);ae=i(ye,"model(inputs_ids)"),ye.forEach(t),H.forEach(t),ee=d(j),A=s(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s(Z,"CODE",{});var $e=r(L);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),Z.forEach(t),me=d(j),P=s(j,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var De=r(U);le=i(De,'model({"input_ids": input_ids})'),De.forEach(t),se.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function B2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function M2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function E2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function x2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function z2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function C2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function j2(C){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function P2(C){let p,F,g,v,T,_,m,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,ne,me,P,te,U,le,h,M,K,ge,Te,O,_e,be,ke,j,H,we,ye,Z,$e,se,De,hu,up,Tt,uu,Zn,mu,fu,es,gu,_u,ts,vu,Tu,mp,ao,Go,_l,os,bu,vl,ku,fp,Ie,ns,wu,Ft,yu,di,$u,Du,ci,Fu,Bu,ss,Mu,Eu,xu,io,zu,pi,Cu,ju,hi,Pu,qu,Au,Tl,Ou,Nu,rs,gp,lo,Xo,bl,as,Lu,kl,Iu,_p,_t,is,Su,wl,Wu,Ru,Yo,ui,Uu,Hu,mi,Qu,Vu,Ju,ls,Ku,fi,Gu,Xu,vp,co,Zo,yl,ds,Yu,$l,Zu,Tp,vt,cs,em,ps,tm,Dl,om,nm,sm,en,gi,rm,am,_i,im,lm,dm,hs,cm,vi,pm,hm,bp,po,tn,Fl,us,um,Bl,mm,kp,Se,ms,fm,Ml,gm,_m,fs,vm,Ti,Tm,bm,km,gs,wm,_s,ym,$m,Dm,Ve,vs,Fm,ho,Bm,bi,Mm,Em,El,xm,zm,Cm,on,jm,xl,Pm,qm,Ts,wp,uo,nn,zl,bs,Am,Cl,Om,yp,We,ks,Nm,ws,Lm,jl,Im,Sm,Wm,ys,Rm,ki,Um,Hm,Qm,$s,Vm,Ds,Jm,Km,Gm,Je,Fs,Xm,mo,Ym,wi,Zm,ef,Pl,tf,of,nf,sn,sf,ql,rf,af,Bs,$p,fo,rn,Al,Ms,lf,Ol,df,Dp,Re,Es,cf,Nl,pf,hf,xs,uf,yi,mf,ff,gf,zs,_f,Cs,vf,Tf,bf,je,js,kf,go,wf,$i,yf,$f,Ll,Df,Ff,Bf,an,Mf,Il,Ef,xf,Ps,zf,Sl,Cf,jf,qs,Fp,_o,ln,Wl,As,Pf,Rl,qf,Bp,Ue,Os,Af,Ul,Of,Nf,Ns,Lf,Di,If,Sf,Wf,Ls,Rf,Is,Uf,Hf,Qf,Ke,Ss,Vf,vo,Jf,Fi,Kf,Gf,Hl,Xf,Yf,Zf,dn,eg,Ql,tg,og,Ws,Mp,To,cn,Vl,Rs,ng,Jl,sg,Ep,He,Us,rg,Kl,ag,ig,Hs,lg,Bi,dg,cg,pg,Qs,hg,Vs,ug,mg,fg,Ge,Js,gg,bo,_g,Mi,vg,Tg,Gl,bg,kg,wg,pn,yg,Xl,$g,Dg,Ks,xp,ko,hn,Yl,Gs,Fg,Zl,Bg,zp,Qe,Xs,Mg,wo,Eg,ed,xg,zg,td,Cg,jg,Pg,Ys,qg,Ei,Ag,Og,Ng,Zs,Lg,er,Ig,Sg,Wg,Xe,tr,Rg,yo,Ug,xi,Hg,Qg,od,Vg,Jg,Kg,un,Gg,nd,Xg,Yg,or,Cp,$o,mn,sd,nr,Zg,rd,e_,jp,Pe,sr,t_,ad,o_,n_,rr,s_,zi,r_,a_,i_,ar,l_,ir,d_,c_,p_,fn,h_,Ye,lr,u_,Do,m_,Ci,f_,g_,id,__,v_,T_,gn,b_,ld,k_,w_,dr,Pp,Fo,_n,dd,cr,y_,cd,$_,qp,qe,pr,D_,hr,F_,pd,B_,M_,E_,ur,x_,ji,z_,C_,j_,mr,P_,fr,q_,A_,O_,vn,N_,Ze,gr,L_,Bo,I_,Pi,S_,W_,hd,R_,U_,H_,Tn,Q_,ud,V_,J_,_r,Ap,Mo,bn,md,vr,K_,fd,G_,Op,Ae,Tr,X_,gd,Y_,Z_,br,ev,qi,tv,ov,nv,kr,sv,wr,rv,av,iv,kn,lv,et,yr,dv,Eo,cv,Ai,pv,hv,_d,uv,mv,fv,wn,gv,vd,_v,vv,$r,Np,xo,yn,Td,Dr,Tv,bd,bv,Lp,Oe,Fr,kv,kd,wv,yv,Br,$v,Oi,Dv,Fv,Bv,Mr,Mv,Er,Ev,xv,zv,$n,Cv,tt,xr,jv,zo,Pv,Ni,qv,Av,wd,Ov,Nv,Lv,Dn,Iv,yd,Sv,Wv,zr,Ip,Co,Fn,$d,Cr,Rv,Dd,Uv,Sp,Ne,jr,Hv,Fd,Qv,Vv,Pr,Jv,Li,Kv,Gv,Xv,qr,Yv,Ar,Zv,eT,tT,Bn,oT,ot,Or,nT,jo,sT,Ii,rT,aT,Bd,iT,lT,dT,Mn,cT,Md,pT,hT,Nr,Wp,Po,En,Ed,Lr,uT,xd,mT,Rp,Le,Ir,fT,qo,gT,zd,_T,vT,Cd,TT,bT,kT,Sr,wT,Si,yT,$T,DT,Wr,FT,Rr,BT,MT,ET,xn,xT,nt,Ur,zT,Ao,CT,Wi,jT,PT,jd,qT,AT,OT,zn,NT,Pd,LT,IT,Hr,Up,Oo,Cn,qd,Qr,ST,Ad,WT,Hp,Be,Vr,RT,Od,UT,HT,Jr,QT,Ri,VT,JT,KT,Kr,GT,Gr,XT,YT,ZT,Nd,eb,tb,Bt,Ld,Xr,ob,nb,Id,Yr,sb,rb,Sd,Zr,ab,ib,Wd,ea,lb,db,st,ta,cb,No,pb,Rd,hb,ub,Ud,mb,fb,gb,jn,_b,Hd,vb,Tb,oa,Qp,Lo,Pn,Qd,na,bb,Vd,kb,Vp,Me,sa,wb,ra,yb,Jd,$b,Db,Fb,aa,Bb,Ui,Mb,Eb,xb,ia,zb,la,Cb,jb,Pb,Kd,qb,Ab,Mt,Gd,da,Ob,Nb,Xd,ca,Lb,Ib,Yd,pa,Sb,Wb,Zd,ha,Rb,Ub,rt,ua,Hb,Io,Qb,ec,Vb,Jb,tc,Kb,Gb,Xb,qn,Yb,oc,Zb,ek,ma,Jp,So,An,nc,fa,tk,sc,ok,Kp,Ee,ga,nk,rc,sk,rk,_a,ak,Hi,ik,lk,dk,va,ck,Ta,pk,hk,uk,ac,mk,fk,Et,ic,ba,gk,_k,lc,ka,vk,Tk,dc,wa,bk,kk,cc,ya,wk,yk,at,$a,$k,Wo,Dk,pc,Fk,Bk,hc,Mk,Ek,xk,On,zk,uc,Ck,jk,Da,Gp,Ro,Nn,mc,Fa,Pk,fc,qk,Xp,xe,Ba,Ak,gc,Ok,Nk,Ma,Lk,Qi,Ik,Sk,Wk,Ea,Rk,xa,Uk,Hk,Qk,_c,Vk,Jk,xt,vc,za,Kk,Gk,Tc,Ca,Xk,Yk,bc,ja,Zk,ew,kc,Pa,tw,ow,it,qa,nw,Uo,sw,wc,rw,aw,yc,iw,lw,dw,Ln,cw,$c,pw,hw,Aa,Yp,Ho,In,Dc,Oa,uw,Fc,mw,Zp,ze,Na,fw,Bc,gw,_w,La,vw,Vi,Tw,bw,kw,Ia,ww,Sa,yw,$w,Dw,Mc,Fw,Bw,zt,Ec,Wa,Mw,Ew,xc,Ra,xw,zw,zc,Ua,Cw,jw,Cc,Ha,Pw,qw,lt,Qa,Aw,Qo,Ow,jc,Nw,Lw,Pc,Iw,Sw,Ww,Sn,Rw,qc,Uw,Hw,Va,eh,Vo,Wn,Ac,Ja,Qw,Oc,Vw,th,Ce,Ka,Jw,Jo,Kw,Nc,Gw,Xw,Lc,Yw,Zw,ey,Ga,ty,Ji,oy,ny,sy,Xa,ry,Ya,ay,iy,ly,Ic,dy,cy,Ct,Sc,Za,py,hy,Wc,ei,uy,my,Rc,ti,fy,gy,Uc,oi,_y,vy,dt,ni,Ty,Ko,by,Hc,ky,wy,Qc,yy,$y,Dy,Rn,Fy,Vc,By,My,si,oh;return _=new ve({}),X=new ve({}),os=new ve({}),ns=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DistilBertConfig.sinusoidal_pos_embds",description:`<strong>sinusoidal_pos_embds</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use sinusoidal positional embeddings.`,name:"sinusoidal_pos_embds"},{anchor:"transformers.DistilBertConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.DistilBertConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.DistilBertConfig.dim",description:`<strong>dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"dim"},{anchor:"transformers.DistilBertConfig.hidden_dim",description:`<strong>hidden_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
The size of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"hidden_dim"},{anchor:"transformers.DistilBertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.DistilBertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.DistilBertConfig.activation",description:`<strong>activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation"},{anchor:"transformers.DistilBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DistilBertConfig.qa_dropout",description:`<strong>qa_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilities used in the question answering model <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),rs=new Fe({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),as=new ve({}),is=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),ds=new ve({}),cs=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),us=new ve({}),ms=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vs=new Q({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new fe({props:{$$slots:{default:[c2]},$$scope:{ctx:C}}}),Ts=new Fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bs=new ve({}),ks=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fs=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),sn=new fe({props:{$$slots:{default:[p2]},$$scope:{ctx:C}}}),Bs=new Fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ms=new ve({}),Es=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),js=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),an=new fe({props:{$$slots:{default:[h2]},$$scope:{ctx:C}}}),Ps=new Fe({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

torch.manual_seed(0)
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),qs=new Fe({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

torch.manual_seed(0)
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),As=new ve({}),Os=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ss=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),dn=new fe({props:{$$slots:{default:[u2]},$$scope:{ctx:C}}}),Ws=new Fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-cased")
model = DistilBertForMultipleChoice.from_pretrained("distilbert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rs=new ve({}),Us=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Js=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),pn=new fe({props:{$$slots:{default:[m2]},$$scope:{ctx:C}}}),Ks=new Fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gs=new ve({}),Xs=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),un=new fe({props:{$$slots:{default:[f2]},$$scope:{ctx:C}}}),or=new Fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),nr=new ve({}),sr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new fe({props:{$$slots:{default:[g2]},$$scope:{ctx:C}}}),lr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),gn=new fe({props:{$$slots:{default:[_2]},$$scope:{ctx:C}}}),dr=new Fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cr=new ve({}),pr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new fe({props:{$$slots:{default:[v2]},$$scope:{ctx:C}}}),gr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Tn=new fe({props:{$$slots:{default:[T2]},$$scope:{ctx:C}}}),_r=new Fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new ve({}),Tr=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L742",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new fe({props:{$$slots:{default:[b2]},$$scope:{ctx:C}}}),yr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L759",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),wn=new fe({props:{$$slots:{default:[k2]},$$scope:{ctx:C}}}),$r=new Fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dr=new ve({}),Fr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L933",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$n=new fe({props:{$$slots:{default:[w2]},$$scope:{ctx:C}}}),xr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L959",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Dn=new fe({props:{$$slots:{default:[y2]},$$scope:{ctx:C}}}),zr=new Fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cr=new ve({}),jr=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L843",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bn=new fe({props:{$$slots:{default:[$2]},$$scope:{ctx:C}}}),Or=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L854",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Mn=new fe({props:{$$slots:{default:[D2]},$$scope:{ctx:C}}}),Nr=new Fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lr=new ve({}),Ir=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1075",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xn=new fe({props:{$$slots:{default:[F2]},$$scope:{ctx:C}}}),Ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1086",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),zn=new fe({props:{$$slots:{default:[B2]},$$scope:{ctx:C}}}),Hr=new Fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Qr=new ve({}),Vr=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L524",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ta=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),jn=new fe({props:{$$slots:{default:[M2]},$$scope:{ctx:C}}}),oa=new Fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),na=new ve({}),sa=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L597",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ua=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new fe({props:{$$slots:{default:[E2]},$$scope:{ctx:C}}}),ma=new Fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fa=new ve({}),ga=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L666",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$a=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new fe({props:{$$slots:{default:[x2]},$$scope:{ctx:C}}}),Da=new Fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fa=new ve({}),Ba=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L746",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new fe({props:{$$slots:{default:[z2]},$$scope:{ctx:C}}}),Aa=new Fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Oa=new ve({}),Na=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L812",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new fe({props:{$$slots:{default:[C2]},$$scope:{ctx:C}}}),Va=new Fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ja=new ve({}),Ka=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L882",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ni=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new fe({props:{$$slots:{default:[j2]},$$scope:{ctx:C}}}),si=new Fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=n("meta"),F=l(),g=n("h1"),v=n("a"),T=n("span"),b(_.$$.fragment),m=l(),B=n("span"),de=a("DistilBERT"),V=l(),E=n("h2"),G=n("a"),I=n("span"),b(X.$$.fragment),ce=l(),S=n("span"),pe=a("Overview"),re=l(),N=n("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=n("a"),J=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=n("a"),he=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=n("p"),A=a("The abstract from the paper is the following:"),ie=l(),L=n("p"),ne=n("em"),me=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=n("p"),U=a("Tips:"),le=l(),h=n("ul"),M=n("li"),K=a("DistilBERT doesn\u2019t have "),ge=n("code"),Te=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=n("code"),be=a("tokenizer.sep_token"),ke=a(" (or "),j=n("code"),H=a("[SEP]"),we=a(")."),ye=l(),Z=n("li"),$e=a("DistilBERT doesn\u2019t have options to select the input positions ("),se=n("code"),De=a("position_ids"),hu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),up=l(),Tt=n("p"),uu=a("This model was contributed by "),Zn=n("a"),mu=a("victorsanh"),fu=a(`. This model jax version was
contributed by `),es=n("a"),gu=a("kamalkraj"),_u=a(". The original code can be found "),ts=n("a"),vu=a("here"),Tu=a("."),mp=l(),ao=n("h2"),Go=n("a"),_l=n("span"),b(os.$$.fragment),bu=l(),vl=n("span"),ku=a("DistilBertConfig"),fp=l(),Ie=n("div"),b(ns.$$.fragment),wu=l(),Ft=n("p"),yu=a("This is the configuration class to store the configuration of a "),di=n("a"),$u=a("DistilBertModel"),Du=a(" or a "),ci=n("a"),Fu=a("TFDistilBertModel"),Bu=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),ss=n("a"),Mu=a("distilbert-base-uncased"),Eu=a(" architecture."),xu=l(),io=n("p"),zu=a("Configuration objects inherit from "),pi=n("a"),Cu=a("PretrainedConfig"),ju=a(` and can be used to control the model outputs. Read the
documentation from `),hi=n("a"),Pu=a("PretrainedConfig"),qu=a(" for more information."),Au=l(),Tl=n("p"),Ou=a("Examples:"),Nu=l(),b(rs.$$.fragment),gp=l(),lo=n("h2"),Xo=n("a"),bl=n("span"),b(as.$$.fragment),Lu=l(),kl=n("span"),Iu=a("DistilBertTokenizer"),_p=l(),_t=n("div"),b(is.$$.fragment),Su=l(),wl=n("p"),Wu=a("Construct a DistilBERT tokenizer."),Ru=l(),Yo=n("p"),ui=n("a"),Uu=a("DistilBertTokenizer"),Hu=a(" is identical to "),mi=n("a"),Qu=a("BertTokenizer"),Vu=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Ju=l(),ls=n("p"),Ku=a("Refer to superclass "),fi=n("a"),Gu=a("BertTokenizer"),Xu=a(" for usage examples and documentation concerning parameters."),vp=l(),co=n("h2"),Zo=n("a"),yl=n("span"),b(ds.$$.fragment),Yu=l(),$l=n("span"),Zu=a("DistilBertTokenizerFast"),Tp=l(),vt=n("div"),b(cs.$$.fragment),em=l(),ps=n("p"),tm=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Dl=n("em"),om=a("tokenizers"),nm=a(" library)."),sm=l(),en=n("p"),gi=n("a"),rm=a("DistilBertTokenizerFast"),am=a(" is identical to "),_i=n("a"),im=a("BertTokenizerFast"),lm=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),dm=l(),hs=n("p"),cm=a("Refer to superclass "),vi=n("a"),pm=a("BertTokenizerFast"),hm=a(" for usage examples and documentation concerning parameters."),bp=l(),po=n("h2"),tn=n("a"),Fl=n("span"),b(us.$$.fragment),um=l(),Bl=n("span"),mm=a("DistilBertModel"),kp=l(),Se=n("div"),b(ms.$$.fragment),fm=l(),Ml=n("p"),gm=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_m=l(),fs=n("p"),vm=a("This model inherits from "),Ti=n("a"),Tm=a("PreTrainedModel"),bm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),km=l(),gs=n("p"),wm=a("This model is also a PyTorch "),_s=n("a"),ym=a("torch.nn.Module"),$m=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dm=l(),Ve=n("div"),b(vs.$$.fragment),Fm=l(),ho=n("p"),Bm=a("The "),bi=n("a"),Mm=a("DistilBertModel"),Em=a(" forward method, overrides the "),El=n("code"),xm=a("__call__"),zm=a(" special method."),Cm=l(),b(on.$$.fragment),jm=l(),xl=n("p"),Pm=a("Example:"),qm=l(),b(Ts.$$.fragment),wp=l(),uo=n("h2"),nn=n("a"),zl=n("span"),b(bs.$$.fragment),Am=l(),Cl=n("span"),Om=a("DistilBertForMaskedLM"),yp=l(),We=n("div"),b(ks.$$.fragment),Nm=l(),ws=n("p"),Lm=a("DistilBert Model with a "),jl=n("code"),Im=a("masked language modeling"),Sm=a(" head on top."),Wm=l(),ys=n("p"),Rm=a("This model inherits from "),ki=n("a"),Um=a("PreTrainedModel"),Hm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qm=l(),$s=n("p"),Vm=a("This model is also a PyTorch "),Ds=n("a"),Jm=a("torch.nn.Module"),Km=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gm=l(),Je=n("div"),b(Fs.$$.fragment),Xm=l(),mo=n("p"),Ym=a("The "),wi=n("a"),Zm=a("DistilBertForMaskedLM"),ef=a(" forward method, overrides the "),Pl=n("code"),tf=a("__call__"),of=a(" special method."),nf=l(),b(sn.$$.fragment),sf=l(),ql=n("p"),rf=a("Example:"),af=l(),b(Bs.$$.fragment),$p=l(),fo=n("h2"),rn=n("a"),Al=n("span"),b(Ms.$$.fragment),lf=l(),Ol=n("span"),df=a("DistilBertForSequenceClassification"),Dp=l(),Re=n("div"),b(Es.$$.fragment),cf=l(),Nl=n("p"),pf=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),hf=l(),xs=n("p"),uf=a("This model inherits from "),yi=n("a"),mf=a("PreTrainedModel"),ff=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gf=l(),zs=n("p"),_f=a("This model is also a PyTorch "),Cs=n("a"),vf=a("torch.nn.Module"),Tf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bf=l(),je=n("div"),b(js.$$.fragment),kf=l(),go=n("p"),wf=a("The "),$i=n("a"),yf=a("DistilBertForSequenceClassification"),$f=a(" forward method, overrides the "),Ll=n("code"),Df=a("__call__"),Ff=a(" special method."),Bf=l(),b(an.$$.fragment),Mf=l(),Il=n("p"),Ef=a("Example of single-label classification:"),xf=l(),b(Ps.$$.fragment),zf=l(),Sl=n("p"),Cf=a("Example of multi-label classification:"),jf=l(),b(qs.$$.fragment),Fp=l(),_o=n("h2"),ln=n("a"),Wl=n("span"),b(As.$$.fragment),Pf=l(),Rl=n("span"),qf=a("DistilBertForMultipleChoice"),Bp=l(),Ue=n("div"),b(Os.$$.fragment),Af=l(),Ul=n("p"),Of=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Nf=l(),Ns=n("p"),Lf=a("This model inherits from "),Di=n("a"),If=a("PreTrainedModel"),Sf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf=l(),Ls=n("p"),Rf=a("This model is also a PyTorch "),Is=n("a"),Uf=a("torch.nn.Module"),Hf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qf=l(),Ke=n("div"),b(Ss.$$.fragment),Vf=l(),vo=n("p"),Jf=a("The "),Fi=n("a"),Kf=a("DistilBertForMultipleChoice"),Gf=a(" forward method, overrides the "),Hl=n("code"),Xf=a("__call__"),Yf=a(" special method."),Zf=l(),b(dn.$$.fragment),eg=l(),Ql=n("p"),tg=a("Examples:"),og=l(),b(Ws.$$.fragment),Mp=l(),To=n("h2"),cn=n("a"),Vl=n("span"),b(Rs.$$.fragment),ng=l(),Jl=n("span"),sg=a("DistilBertForTokenClassification"),Ep=l(),He=n("div"),b(Us.$$.fragment),rg=l(),Kl=n("p"),ag=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ig=l(),Hs=n("p"),lg=a("This model inherits from "),Bi=n("a"),dg=a("PreTrainedModel"),cg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=l(),Qs=n("p"),hg=a("This model is also a PyTorch "),Vs=n("a"),ug=a("torch.nn.Module"),mg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fg=l(),Ge=n("div"),b(Js.$$.fragment),gg=l(),bo=n("p"),_g=a("The "),Mi=n("a"),vg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),Gl=n("code"),bg=a("__call__"),kg=a(" special method."),wg=l(),b(pn.$$.fragment),yg=l(),Xl=n("p"),$g=a("Example:"),Dg=l(),b(Ks.$$.fragment),xp=l(),ko=n("h2"),hn=n("a"),Yl=n("span"),b(Gs.$$.fragment),Fg=l(),Zl=n("span"),Bg=a("DistilBertForQuestionAnswering"),zp=l(),Qe=n("div"),b(Xs.$$.fragment),Mg=l(),wo=n("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=n("code"),xg=a("span start logits"),zg=a(" and "),td=n("code"),Cg=a("span end logits"),jg=a(")."),Pg=l(),Ys=n("p"),qg=a("This model inherits from "),Ei=n("a"),Ag=a("PreTrainedModel"),Og=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=l(),Zs=n("p"),Lg=a("This model is also a PyTorch "),er=n("a"),Ig=a("torch.nn.Module"),Sg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=l(),Xe=n("div"),b(tr.$$.fragment),Rg=l(),yo=n("p"),Ug=a("The "),xi=n("a"),Hg=a("DistilBertForQuestionAnswering"),Qg=a(" forward method, overrides the "),od=n("code"),Vg=a("__call__"),Jg=a(" special method."),Kg=l(),b(un.$$.fragment),Gg=l(),nd=n("p"),Xg=a("Example:"),Yg=l(),b(or.$$.fragment),Cp=l(),$o=n("h2"),mn=n("a"),sd=n("span"),b(nr.$$.fragment),Zg=l(),rd=n("span"),e_=a("TFDistilBertModel"),jp=l(),Pe=n("div"),b(sr.$$.fragment),t_=l(),ad=n("p"),o_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),n_=l(),rr=n("p"),s_=a("This model inherits from "),zi=n("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=l(),ar=n("p"),l_=a("This model is also a "),ir=n("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=l(),b(fn.$$.fragment),h_=l(),Ye=n("div"),b(lr.$$.fragment),u_=l(),Do=n("p"),m_=a("The "),Ci=n("a"),f_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),id=n("code"),__=a("__call__"),v_=a(" special method."),T_=l(),b(gn.$$.fragment),b_=l(),ld=n("p"),k_=a("Example:"),w_=l(),b(dr.$$.fragment),Pp=l(),Fo=n("h2"),_n=n("a"),dd=n("span"),b(cr.$$.fragment),y_=l(),cd=n("span"),$_=a("TFDistilBertForMaskedLM"),qp=l(),qe=n("div"),b(pr.$$.fragment),D_=l(),hr=n("p"),F_=a("DistilBert Model with a "),pd=n("code"),B_=a("masked language modeling"),M_=a(" head on top."),E_=l(),ur=n("p"),x_=a("This model inherits from "),ji=n("a"),z_=a("TFPreTrainedModel"),C_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=l(),mr=n("p"),P_=a("This model is also a "),fr=n("a"),q_=a("tf.keras.Model"),A_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O_=l(),b(vn.$$.fragment),N_=l(),Ze=n("div"),b(gr.$$.fragment),L_=l(),Bo=n("p"),I_=a("The "),Pi=n("a"),S_=a("TFDistilBertForMaskedLM"),W_=a(" forward method, overrides the "),hd=n("code"),R_=a("__call__"),U_=a(" special method."),H_=l(),b(Tn.$$.fragment),Q_=l(),ud=n("p"),V_=a("Example:"),J_=l(),b(_r.$$.fragment),Ap=l(),Mo=n("h2"),bn=n("a"),md=n("span"),b(vr.$$.fragment),K_=l(),fd=n("span"),G_=a("TFDistilBertForSequenceClassification"),Op=l(),Ae=n("div"),b(Tr.$$.fragment),X_=l(),gd=n("p"),Y_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Z_=l(),br=n("p"),ev=a("This model inherits from "),qi=n("a"),tv=a("TFPreTrainedModel"),ov=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nv=l(),kr=n("p"),sv=a("This model is also a "),wr=n("a"),rv=a("tf.keras.Model"),av=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iv=l(),b(kn.$$.fragment),lv=l(),et=n("div"),b(yr.$$.fragment),dv=l(),Eo=n("p"),cv=a("The "),Ai=n("a"),pv=a("TFDistilBertForSequenceClassification"),hv=a(" forward method, overrides the "),_d=n("code"),uv=a("__call__"),mv=a(" special method."),fv=l(),b(wn.$$.fragment),gv=l(),vd=n("p"),_v=a("Example:"),vv=l(),b($r.$$.fragment),Np=l(),xo=n("h2"),yn=n("a"),Td=n("span"),b(Dr.$$.fragment),Tv=l(),bd=n("span"),bv=a("TFDistilBertForMultipleChoice"),Lp=l(),Oe=n("div"),b(Fr.$$.fragment),kv=l(),kd=n("p"),wv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yv=l(),Br=n("p"),$v=a("This model inherits from "),Oi=n("a"),Dv=a("TFPreTrainedModel"),Fv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bv=l(),Mr=n("p"),Mv=a("This model is also a "),Er=n("a"),Ev=a("tf.keras.Model"),xv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zv=l(),b($n.$$.fragment),Cv=l(),tt=n("div"),b(xr.$$.fragment),jv=l(),zo=n("p"),Pv=a("The "),Ni=n("a"),qv=a("TFDistilBertForMultipleChoice"),Av=a(" forward method, overrides the "),wd=n("code"),Ov=a("__call__"),Nv=a(" special method."),Lv=l(),b(Dn.$$.fragment),Iv=l(),yd=n("p"),Sv=a("Example:"),Wv=l(),b(zr.$$.fragment),Ip=l(),Co=n("h2"),Fn=n("a"),$d=n("span"),b(Cr.$$.fragment),Rv=l(),Dd=n("span"),Uv=a("TFDistilBertForTokenClassification"),Sp=l(),Ne=n("div"),b(jr.$$.fragment),Hv=l(),Fd=n("p"),Qv=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Vv=l(),Pr=n("p"),Jv=a("This model inherits from "),Li=n("a"),Kv=a("TFPreTrainedModel"),Gv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv=l(),qr=n("p"),Yv=a("This model is also a "),Ar=n("a"),Zv=a("tf.keras.Model"),eT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tT=l(),b(Bn.$$.fragment),oT=l(),ot=n("div"),b(Or.$$.fragment),nT=l(),jo=n("p"),sT=a("The "),Ii=n("a"),rT=a("TFDistilBertForTokenClassification"),aT=a(" forward method, overrides the "),Bd=n("code"),iT=a("__call__"),lT=a(" special method."),dT=l(),b(Mn.$$.fragment),cT=l(),Md=n("p"),pT=a("Example:"),hT=l(),b(Nr.$$.fragment),Wp=l(),Po=n("h2"),En=n("a"),Ed=n("span"),b(Lr.$$.fragment),uT=l(),xd=n("span"),mT=a("TFDistilBertForQuestionAnswering"),Rp=l(),Le=n("div"),b(Ir.$$.fragment),fT=l(),qo=n("p"),gT=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=n("code"),_T=a("span start logits"),vT=a(" and "),Cd=n("code"),TT=a("span end logits"),bT=a(")."),kT=l(),Sr=n("p"),wT=a("This model inherits from "),Si=n("a"),yT=a("TFPreTrainedModel"),$T=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),DT=l(),Wr=n("p"),FT=a("This model is also a "),Rr=n("a"),BT=a("tf.keras.Model"),MT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ET=l(),b(xn.$$.fragment),xT=l(),nt=n("div"),b(Ur.$$.fragment),zT=l(),Ao=n("p"),CT=a("The "),Wi=n("a"),jT=a("TFDistilBertForQuestionAnswering"),PT=a(" forward method, overrides the "),jd=n("code"),qT=a("__call__"),AT=a(" special method."),OT=l(),b(zn.$$.fragment),NT=l(),Pd=n("p"),LT=a("Example:"),IT=l(),b(Hr.$$.fragment),Up=l(),Oo=n("h2"),Cn=n("a"),qd=n("span"),b(Qr.$$.fragment),ST=l(),Ad=n("span"),WT=a("FlaxDistilBertModel"),Hp=l(),Be=n("div"),b(Vr.$$.fragment),RT=l(),Od=n("p"),UT=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),HT=l(),Jr=n("p"),QT=a("This model inherits from "),Ri=n("a"),VT=a("FlaxPreTrainedModel"),JT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),KT=l(),Kr=n("p"),GT=a("This model is also a Flax Linen "),Gr=n("a"),XT=a("flax.linen.Module"),YT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZT=l(),Nd=n("p"),eb=a("Finally, this model supports inherent JAX features such as:"),tb=l(),Bt=n("ul"),Ld=n("li"),Xr=n("a"),ob=a("Just-In-Time (JIT) compilation"),nb=l(),Id=n("li"),Yr=n("a"),sb=a("Automatic Differentiation"),rb=l(),Sd=n("li"),Zr=n("a"),ab=a("Vectorization"),ib=l(),Wd=n("li"),ea=n("a"),lb=a("Parallelization"),db=l(),st=n("div"),b(ta.$$.fragment),cb=l(),No=n("p"),pb=a("The "),Rd=n("code"),hb=a("FlaxDistilBertPreTrainedModel"),ub=a("forward method, overrides the "),Ud=n("code"),mb=a("__call__"),fb=a(" special method."),gb=l(),b(jn.$$.fragment),_b=l(),Hd=n("p"),vb=a("Example:"),Tb=l(),b(oa.$$.fragment),Qp=l(),Lo=n("h2"),Pn=n("a"),Qd=n("span"),b(na.$$.fragment),bb=l(),Vd=n("span"),kb=a("FlaxDistilBertForMaskedLM"),Vp=l(),Me=n("div"),b(sa.$$.fragment),wb=l(),ra=n("p"),yb=a("DistilBert Model with a "),Jd=n("code"),$b=a("language modeling"),Db=a(" head on top."),Fb=l(),aa=n("p"),Bb=a("This model inherits from "),Ui=n("a"),Mb=a("FlaxPreTrainedModel"),Eb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xb=l(),ia=n("p"),zb=a("This model is also a Flax Linen "),la=n("a"),Cb=a("flax.linen.Module"),jb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pb=l(),Kd=n("p"),qb=a("Finally, this model supports inherent JAX features such as:"),Ab=l(),Mt=n("ul"),Gd=n("li"),da=n("a"),Ob=a("Just-In-Time (JIT) compilation"),Nb=l(),Xd=n("li"),ca=n("a"),Lb=a("Automatic Differentiation"),Ib=l(),Yd=n("li"),pa=n("a"),Sb=a("Vectorization"),Wb=l(),Zd=n("li"),ha=n("a"),Rb=a("Parallelization"),Ub=l(),rt=n("div"),b(ua.$$.fragment),Hb=l(),Io=n("p"),Qb=a("The "),ec=n("code"),Vb=a("FlaxDistilBertPreTrainedModel"),Jb=a("forward method, overrides the "),tc=n("code"),Kb=a("__call__"),Gb=a(" special method."),Xb=l(),b(qn.$$.fragment),Yb=l(),oc=n("p"),Zb=a("Example:"),ek=l(),b(ma.$$.fragment),Jp=l(),So=n("h2"),An=n("a"),nc=n("span"),b(fa.$$.fragment),tk=l(),sc=n("span"),ok=a("FlaxDistilBertForSequenceClassification"),Kp=l(),Ee=n("div"),b(ga.$$.fragment),nk=l(),rc=n("p"),sk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rk=l(),_a=n("p"),ak=a("This model inherits from "),Hi=n("a"),ik=a("FlaxPreTrainedModel"),lk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dk=l(),va=n("p"),ck=a("This model is also a Flax Linen "),Ta=n("a"),pk=a("flax.linen.Module"),hk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uk=l(),ac=n("p"),mk=a("Finally, this model supports inherent JAX features such as:"),fk=l(),Et=n("ul"),ic=n("li"),ba=n("a"),gk=a("Just-In-Time (JIT) compilation"),_k=l(),lc=n("li"),ka=n("a"),vk=a("Automatic Differentiation"),Tk=l(),dc=n("li"),wa=n("a"),bk=a("Vectorization"),kk=l(),cc=n("li"),ya=n("a"),wk=a("Parallelization"),yk=l(),at=n("div"),b($a.$$.fragment),$k=l(),Wo=n("p"),Dk=a("The "),pc=n("code"),Fk=a("FlaxDistilBertPreTrainedModel"),Bk=a("forward method, overrides the "),hc=n("code"),Mk=a("__call__"),Ek=a(" special method."),xk=l(),b(On.$$.fragment),zk=l(),uc=n("p"),Ck=a("Example:"),jk=l(),b(Da.$$.fragment),Gp=l(),Ro=n("h2"),Nn=n("a"),mc=n("span"),b(Fa.$$.fragment),Pk=l(),fc=n("span"),qk=a("FlaxDistilBertForMultipleChoice"),Xp=l(),xe=n("div"),b(Ba.$$.fragment),Ak=l(),gc=n("p"),Ok=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Nk=l(),Ma=n("p"),Lk=a("This model inherits from "),Qi=n("a"),Ik=a("FlaxPreTrainedModel"),Sk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wk=l(),Ea=n("p"),Rk=a("This model is also a Flax Linen "),xa=n("a"),Uk=a("flax.linen.Module"),Hk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qk=l(),_c=n("p"),Vk=a("Finally, this model supports inherent JAX features such as:"),Jk=l(),xt=n("ul"),vc=n("li"),za=n("a"),Kk=a("Just-In-Time (JIT) compilation"),Gk=l(),Tc=n("li"),Ca=n("a"),Xk=a("Automatic Differentiation"),Yk=l(),bc=n("li"),ja=n("a"),Zk=a("Vectorization"),ew=l(),kc=n("li"),Pa=n("a"),tw=a("Parallelization"),ow=l(),it=n("div"),b(qa.$$.fragment),nw=l(),Uo=n("p"),sw=a("The "),wc=n("code"),rw=a("FlaxDistilBertPreTrainedModel"),aw=a("forward method, overrides the "),yc=n("code"),iw=a("__call__"),lw=a(" special method."),dw=l(),b(Ln.$$.fragment),cw=l(),$c=n("p"),pw=a("Example:"),hw=l(),b(Aa.$$.fragment),Yp=l(),Ho=n("h2"),In=n("a"),Dc=n("span"),b(Oa.$$.fragment),uw=l(),Fc=n("span"),mw=a("FlaxDistilBertForTokenClassification"),Zp=l(),ze=n("div"),b(Na.$$.fragment),fw=l(),Bc=n("p"),gw=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),_w=l(),La=n("p"),vw=a("This model inherits from "),Vi=n("a"),Tw=a("FlaxPreTrainedModel"),bw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kw=l(),Ia=n("p"),ww=a("This model is also a Flax Linen "),Sa=n("a"),yw=a("flax.linen.Module"),$w=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dw=l(),Mc=n("p"),Fw=a("Finally, this model supports inherent JAX features such as:"),Bw=l(),zt=n("ul"),Ec=n("li"),Wa=n("a"),Mw=a("Just-In-Time (JIT) compilation"),Ew=l(),xc=n("li"),Ra=n("a"),xw=a("Automatic Differentiation"),zw=l(),zc=n("li"),Ua=n("a"),Cw=a("Vectorization"),jw=l(),Cc=n("li"),Ha=n("a"),Pw=a("Parallelization"),qw=l(),lt=n("div"),b(Qa.$$.fragment),Aw=l(),Qo=n("p"),Ow=a("The "),jc=n("code"),Nw=a("FlaxDistilBertPreTrainedModel"),Lw=a("forward method, overrides the "),Pc=n("code"),Iw=a("__call__"),Sw=a(" special method."),Ww=l(),b(Sn.$$.fragment),Rw=l(),qc=n("p"),Uw=a("Example:"),Hw=l(),b(Va.$$.fragment),eh=l(),Vo=n("h2"),Wn=n("a"),Ac=n("span"),b(Ja.$$.fragment),Qw=l(),Oc=n("span"),Vw=a("FlaxDistilBertForQuestionAnswering"),th=l(),Ce=n("div"),b(Ka.$$.fragment),Jw=l(),Jo=n("p"),Kw=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Nc=n("code"),Gw=a("span start logits"),Xw=a(" and "),Lc=n("code"),Yw=a("span end logits"),Zw=a(")."),ey=l(),Ga=n("p"),ty=a("This model inherits from "),Ji=n("a"),oy=a("FlaxPreTrainedModel"),ny=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sy=l(),Xa=n("p"),ry=a("This model is also a Flax Linen "),Ya=n("a"),ay=a("flax.linen.Module"),iy=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ly=l(),Ic=n("p"),dy=a("Finally, this model supports inherent JAX features such as:"),cy=l(),Ct=n("ul"),Sc=n("li"),Za=n("a"),py=a("Just-In-Time (JIT) compilation"),hy=l(),Wc=n("li"),ei=n("a"),uy=a("Automatic Differentiation"),my=l(),Rc=n("li"),ti=n("a"),fy=a("Vectorization"),gy=l(),Uc=n("li"),oi=n("a"),_y=a("Parallelization"),vy=l(),dt=n("div"),b(ni.$$.fragment),Ty=l(),Ko=n("p"),by=a("The "),Hc=n("code"),ky=a("FlaxDistilBertPreTrainedModel"),wy=a("forward method, overrides the "),Qc=n("code"),yy=a("__call__"),$y=a(" special method."),Dy=l(),b(Rn.$$.fragment),Fy=l(),Vc=n("p"),By=a("Example:"),My=l(),b(si.$$.fragment),this.h()},l(o){const f=l2('[data-svelte="svelte-1phssyn"]',document.head);p=s(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),g=s(o,"H1",{class:!0});var ri=r(g);v=s(ri,"A",{id:!0,class:!0,href:!0});var Jc=r(v);T=s(Jc,"SPAN",{});var Kc=r(T);k(_.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),m=d(ri),B=s(ri,"SPAN",{});var Gc=r(B);de=i(Gc,"DistilBERT"),Gc.forEach(t),ri.forEach(t),V=d(o),E=s(o,"H2",{class:!0});var ai=r(E);G=s(ai,"A",{id:!0,class:!0,href:!0});var Xc=r(G);I=s(Xc,"SPAN",{});var Yc=r(I);k(X.$$.fragment,Yc),Yc.forEach(t),Xc.forEach(t),ce=d(ai),S=s(ai,"SPAN",{});var Zc=r(S);pe=i(Zc,"Overview"),Zc.forEach(t),ai.forEach(t),re=d(o),N=s(o,"P",{});var jt=r(N);q=i(jt,"The DistilBERT model was proposed in the blog post "),Y=s(jt,"A",{href:!0,rel:!0});var ep=r(Y);J=i(ep,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),ep.forEach(t),x=i(jt,", and the paper "),z=s(jt,"A",{href:!0,rel:!0});var tp=r(z);he=i(tp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),tp.forEach(t),W=i(jt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=s(jt,"EM",{});var op=r(oe);ue=i(op,"bert-base-uncased"),op.forEach(t),R=i(jt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),jt.forEach(t),ae=d(o),ee=s(o,"P",{});var np=r(ee);A=i(np,"The abstract from the paper is the following:"),np.forEach(t),ie=d(o),L=s(o,"P",{});var sp=r(L);ne=s(sp,"EM",{});var rp=r(ne);me=i(rp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),rp.forEach(t),sp.forEach(t),P=d(o),te=s(o,"P",{});var ap=r(te);U=i(ap,"Tips:"),ap.forEach(t),le=d(o),h=s(o,"UL",{});var ii=r(h);M=s(ii,"LI",{});var Pt=r(M);K=i(Pt,"DistilBERT doesn\u2019t have "),ge=s(Pt,"CODE",{});var ip=r(ge);Te=i(ip,"token_type_ids"),ip.forEach(t),O=i(Pt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=s(Pt,"CODE",{});var lp=r(_e);be=i(lp,"tokenizer.sep_token"),lp.forEach(t),ke=i(Pt," (or "),j=s(Pt,"CODE",{});var dp=r(j);H=i(dp,"[SEP]"),dp.forEach(t),we=i(Pt,")."),Pt.forEach(t),ye=d(ii),Z=s(ii,"LI",{});var li=r(Z);$e=i(li,"DistilBERT doesn\u2019t have options to select the input positions ("),se=s(li,"CODE",{});var cp=r(se);De=i(cp,"position_ids"),cp.forEach(t),hu=i(li,` input). This could be added if
necessary though, just let us know if you need this option.`),li.forEach(t),ii.forEach(t),up=d(o),Tt=s(o,"P",{});var qt=r(Tt);uu=i(qt,"This model was contributed by "),Zn=s(qt,"A",{href:!0,rel:!0});var Ey=r(Zn);mu=i(Ey,"victorsanh"),Ey.forEach(t),fu=i(qt,`. This model jax version was
contributed by `),es=s(qt,"A",{href:!0,rel:!0});var xy=r(es);gu=i(xy,"kamalkraj"),xy.forEach(t),_u=i(qt,". The original code can be found "),ts=s(qt,"A",{href:!0,rel:!0});var zy=r(ts);vu=i(zy,"here"),zy.forEach(t),Tu=i(qt,"."),qt.forEach(t),mp=d(o),ao=s(o,"H2",{class:!0});var nh=r(ao);Go=s(nh,"A",{id:!0,class:!0,href:!0});var Cy=r(Go);_l=s(Cy,"SPAN",{});var jy=r(_l);k(os.$$.fragment,jy),jy.forEach(t),Cy.forEach(t),bu=d(nh),vl=s(nh,"SPAN",{});var Py=r(vl);ku=i(Py,"DistilBertConfig"),Py.forEach(t),nh.forEach(t),fp=d(o),Ie=s(o,"DIV",{class:!0});var At=r(Ie);k(ns.$$.fragment,At),wu=d(At),Ft=s(At,"P",{});var Un=r(Ft);yu=i(Un,"This is the configuration class to store the configuration of a "),di=s(Un,"A",{href:!0});var qy=r(di);$u=i(qy,"DistilBertModel"),qy.forEach(t),Du=i(Un," or a "),ci=s(Un,"A",{href:!0});var Ay=r(ci);Fu=i(Ay,"TFDistilBertModel"),Ay.forEach(t),Bu=i(Un,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),ss=s(Un,"A",{href:!0,rel:!0});var Oy=r(ss);Mu=i(Oy,"distilbert-base-uncased"),Oy.forEach(t),Eu=i(Un," architecture."),Un.forEach(t),xu=d(At),io=s(At,"P",{});var Ki=r(io);zu=i(Ki,"Configuration objects inherit from "),pi=s(Ki,"A",{href:!0});var Ny=r(pi);Cu=i(Ny,"PretrainedConfig"),Ny.forEach(t),ju=i(Ki,` and can be used to control the model outputs. Read the
documentation from `),hi=s(Ki,"A",{href:!0});var Ly=r(hi);Pu=i(Ly,"PretrainedConfig"),Ly.forEach(t),qu=i(Ki," for more information."),Ki.forEach(t),Au=d(At),Tl=s(At,"P",{});var Iy=r(Tl);Ou=i(Iy,"Examples:"),Iy.forEach(t),Nu=d(At),k(rs.$$.fragment,At),At.forEach(t),gp=d(o),lo=s(o,"H2",{class:!0});var sh=r(lo);Xo=s(sh,"A",{id:!0,class:!0,href:!0});var Sy=r(Xo);bl=s(Sy,"SPAN",{});var Wy=r(bl);k(as.$$.fragment,Wy),Wy.forEach(t),Sy.forEach(t),Lu=d(sh),kl=s(sh,"SPAN",{});var Ry=r(kl);Iu=i(Ry,"DistilBertTokenizer"),Ry.forEach(t),sh.forEach(t),_p=d(o),_t=s(o,"DIV",{class:!0});var Hn=r(_t);k(is.$$.fragment,Hn),Su=d(Hn),wl=s(Hn,"P",{});var Uy=r(wl);Wu=i(Uy,"Construct a DistilBERT tokenizer."),Uy.forEach(t),Ru=d(Hn),Yo=s(Hn,"P",{});var pp=r(Yo);ui=s(pp,"A",{href:!0});var Hy=r(ui);Uu=i(Hy,"DistilBertTokenizer"),Hy.forEach(t),Hu=i(pp," is identical to "),mi=s(pp,"A",{href:!0});var Qy=r(mi);Qu=i(Qy,"BertTokenizer"),Qy.forEach(t),Vu=i(pp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),pp.forEach(t),Ju=d(Hn),ls=s(Hn,"P",{});var rh=r(ls);Ku=i(rh,"Refer to superclass "),fi=s(rh,"A",{href:!0});var Vy=r(fi);Gu=i(Vy,"BertTokenizer"),Vy.forEach(t),Xu=i(rh," for usage examples and documentation concerning parameters."),rh.forEach(t),Hn.forEach(t),vp=d(o),co=s(o,"H2",{class:!0});var ah=r(co);Zo=s(ah,"A",{id:!0,class:!0,href:!0});var Jy=r(Zo);yl=s(Jy,"SPAN",{});var Ky=r(yl);k(ds.$$.fragment,Ky),Ky.forEach(t),Jy.forEach(t),Yu=d(ah),$l=s(ah,"SPAN",{});var Gy=r($l);Zu=i(Gy,"DistilBertTokenizerFast"),Gy.forEach(t),ah.forEach(t),Tp=d(o),vt=s(o,"DIV",{class:!0});var Qn=r(vt);k(cs.$$.fragment,Qn),em=d(Qn),ps=s(Qn,"P",{});var ih=r(ps);tm=i(ih,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Dl=s(ih,"EM",{});var Xy=r(Dl);om=i(Xy,"tokenizers"),Xy.forEach(t),nm=i(ih," library)."),ih.forEach(t),sm=d(Qn),en=s(Qn,"P",{});var hp=r(en);gi=s(hp,"A",{href:!0});var Yy=r(gi);rm=i(Yy,"DistilBertTokenizerFast"),Yy.forEach(t),am=i(hp," is identical to "),_i=s(hp,"A",{href:!0});var Zy=r(_i);im=i(Zy,"BertTokenizerFast"),Zy.forEach(t),lm=i(hp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),hp.forEach(t),dm=d(Qn),hs=s(Qn,"P",{});var lh=r(hs);cm=i(lh,"Refer to superclass "),vi=s(lh,"A",{href:!0});var e1=r(vi);pm=i(e1,"BertTokenizerFast"),e1.forEach(t),hm=i(lh," for usage examples and documentation concerning parameters."),lh.forEach(t),Qn.forEach(t),bp=d(o),po=s(o,"H2",{class:!0});var dh=r(po);tn=s(dh,"A",{id:!0,class:!0,href:!0});var t1=r(tn);Fl=s(t1,"SPAN",{});var o1=r(Fl);k(us.$$.fragment,o1),o1.forEach(t),t1.forEach(t),um=d(dh),Bl=s(dh,"SPAN",{});var n1=r(Bl);mm=i(n1,"DistilBertModel"),n1.forEach(t),dh.forEach(t),kp=d(o),Se=s(o,"DIV",{class:!0});var Ot=r(Se);k(ms.$$.fragment,Ot),fm=d(Ot),Ml=s(Ot,"P",{});var s1=r(Ml);gm=i(s1,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),s1.forEach(t),_m=d(Ot),fs=s(Ot,"P",{});var ch=r(fs);vm=i(ch,"This model inherits from "),Ti=s(ch,"A",{href:!0});var r1=r(Ti);Tm=i(r1,"PreTrainedModel"),r1.forEach(t),bm=i(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),km=d(Ot),gs=s(Ot,"P",{});var ph=r(gs);wm=i(ph,"This model is also a PyTorch "),_s=s(ph,"A",{href:!0,rel:!0});var a1=r(_s);ym=i(a1,"torch.nn.Module"),a1.forEach(t),$m=i(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),Dm=d(Ot),Ve=s(Ot,"DIV",{class:!0});var Nt=r(Ve);k(vs.$$.fragment,Nt),Fm=d(Nt),ho=s(Nt,"P",{});var Gi=r(ho);Bm=i(Gi,"The "),bi=s(Gi,"A",{href:!0});var i1=r(bi);Mm=i(i1,"DistilBertModel"),i1.forEach(t),Em=i(Gi," forward method, overrides the "),El=s(Gi,"CODE",{});var l1=r(El);xm=i(l1,"__call__"),l1.forEach(t),zm=i(Gi," special method."),Gi.forEach(t),Cm=d(Nt),k(on.$$.fragment,Nt),jm=d(Nt),xl=s(Nt,"P",{});var d1=r(xl);Pm=i(d1,"Example:"),d1.forEach(t),qm=d(Nt),k(Ts.$$.fragment,Nt),Nt.forEach(t),Ot.forEach(t),wp=d(o),uo=s(o,"H2",{class:!0});var hh=r(uo);nn=s(hh,"A",{id:!0,class:!0,href:!0});var c1=r(nn);zl=s(c1,"SPAN",{});var p1=r(zl);k(bs.$$.fragment,p1),p1.forEach(t),c1.forEach(t),Am=d(hh),Cl=s(hh,"SPAN",{});var h1=r(Cl);Om=i(h1,"DistilBertForMaskedLM"),h1.forEach(t),hh.forEach(t),yp=d(o),We=s(o,"DIV",{class:!0});var Lt=r(We);k(ks.$$.fragment,Lt),Nm=d(Lt),ws=s(Lt,"P",{});var uh=r(ws);Lm=i(uh,"DistilBert Model with a "),jl=s(uh,"CODE",{});var u1=r(jl);Im=i(u1,"masked language modeling"),u1.forEach(t),Sm=i(uh," head on top."),uh.forEach(t),Wm=d(Lt),ys=s(Lt,"P",{});var mh=r(ys);Rm=i(mh,"This model inherits from "),ki=s(mh,"A",{href:!0});var m1=r(ki);Um=i(m1,"PreTrainedModel"),m1.forEach(t),Hm=i(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh.forEach(t),Qm=d(Lt),$s=s(Lt,"P",{});var fh=r($s);Vm=i(fh,"This model is also a PyTorch "),Ds=s(fh,"A",{href:!0,rel:!0});var f1=r(Ds);Jm=i(f1,"torch.nn.Module"),f1.forEach(t),Km=i(fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fh.forEach(t),Gm=d(Lt),Je=s(Lt,"DIV",{class:!0});var It=r(Je);k(Fs.$$.fragment,It),Xm=d(It),mo=s(It,"P",{});var Xi=r(mo);Ym=i(Xi,"The "),wi=s(Xi,"A",{href:!0});var g1=r(wi);Zm=i(g1,"DistilBertForMaskedLM"),g1.forEach(t),ef=i(Xi," forward method, overrides the "),Pl=s(Xi,"CODE",{});var _1=r(Pl);tf=i(_1,"__call__"),_1.forEach(t),of=i(Xi," special method."),Xi.forEach(t),nf=d(It),k(sn.$$.fragment,It),sf=d(It),ql=s(It,"P",{});var v1=r(ql);rf=i(v1,"Example:"),v1.forEach(t),af=d(It),k(Bs.$$.fragment,It),It.forEach(t),Lt.forEach(t),$p=d(o),fo=s(o,"H2",{class:!0});var gh=r(fo);rn=s(gh,"A",{id:!0,class:!0,href:!0});var T1=r(rn);Al=s(T1,"SPAN",{});var b1=r(Al);k(Ms.$$.fragment,b1),b1.forEach(t),T1.forEach(t),lf=d(gh),Ol=s(gh,"SPAN",{});var k1=r(Ol);df=i(k1,"DistilBertForSequenceClassification"),k1.forEach(t),gh.forEach(t),Dp=d(o),Re=s(o,"DIV",{class:!0});var St=r(Re);k(Es.$$.fragment,St),cf=d(St),Nl=s(St,"P",{});var w1=r(Nl);pf=i(w1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),w1.forEach(t),hf=d(St),xs=s(St,"P",{});var _h=r(xs);uf=i(_h,"This model inherits from "),yi=s(_h,"A",{href:!0});var y1=r(yi);mf=i(y1,"PreTrainedModel"),y1.forEach(t),ff=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),gf=d(St),zs=s(St,"P",{});var vh=r(zs);_f=i(vh,"This model is also a PyTorch "),Cs=s(vh,"A",{href:!0,rel:!0});var $1=r(Cs);vf=i($1,"torch.nn.Module"),$1.forEach(t),Tf=i(vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vh.forEach(t),bf=d(St),je=s(St,"DIV",{class:!0});var ct=r(je);k(js.$$.fragment,ct),kf=d(ct),go=s(ct,"P",{});var Yi=r(go);wf=i(Yi,"The "),$i=s(Yi,"A",{href:!0});var D1=r($i);yf=i(D1,"DistilBertForSequenceClassification"),D1.forEach(t),$f=i(Yi," forward method, overrides the "),Ll=s(Yi,"CODE",{});var F1=r(Ll);Df=i(F1,"__call__"),F1.forEach(t),Ff=i(Yi," special method."),Yi.forEach(t),Bf=d(ct),k(an.$$.fragment,ct),Mf=d(ct),Il=s(ct,"P",{});var B1=r(Il);Ef=i(B1,"Example of single-label classification:"),B1.forEach(t),xf=d(ct),k(Ps.$$.fragment,ct),zf=d(ct),Sl=s(ct,"P",{});var M1=r(Sl);Cf=i(M1,"Example of multi-label classification:"),M1.forEach(t),jf=d(ct),k(qs.$$.fragment,ct),ct.forEach(t),St.forEach(t),Fp=d(o),_o=s(o,"H2",{class:!0});var Th=r(_o);ln=s(Th,"A",{id:!0,class:!0,href:!0});var E1=r(ln);Wl=s(E1,"SPAN",{});var x1=r(Wl);k(As.$$.fragment,x1),x1.forEach(t),E1.forEach(t),Pf=d(Th),Rl=s(Th,"SPAN",{});var z1=r(Rl);qf=i(z1,"DistilBertForMultipleChoice"),z1.forEach(t),Th.forEach(t),Bp=d(o),Ue=s(o,"DIV",{class:!0});var Wt=r(Ue);k(Os.$$.fragment,Wt),Af=d(Wt),Ul=s(Wt,"P",{});var C1=r(Ul);Of=i(C1,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),C1.forEach(t),Nf=d(Wt),Ns=s(Wt,"P",{});var bh=r(Ns);Lf=i(bh,"This model inherits from "),Di=s(bh,"A",{href:!0});var j1=r(Di);If=i(j1,"PreTrainedModel"),j1.forEach(t),Sf=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),Wf=d(Wt),Ls=s(Wt,"P",{});var kh=r(Ls);Rf=i(kh,"This model is also a PyTorch "),Is=s(kh,"A",{href:!0,rel:!0});var P1=r(Is);Uf=i(P1,"torch.nn.Module"),P1.forEach(t),Hf=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),Qf=d(Wt),Ke=s(Wt,"DIV",{class:!0});var Rt=r(Ke);k(Ss.$$.fragment,Rt),Vf=d(Rt),vo=s(Rt,"P",{});var Zi=r(vo);Jf=i(Zi,"The "),Fi=s(Zi,"A",{href:!0});var q1=r(Fi);Kf=i(q1,"DistilBertForMultipleChoice"),q1.forEach(t),Gf=i(Zi," forward method, overrides the "),Hl=s(Zi,"CODE",{});var A1=r(Hl);Xf=i(A1,"__call__"),A1.forEach(t),Yf=i(Zi," special method."),Zi.forEach(t),Zf=d(Rt),k(dn.$$.fragment,Rt),eg=d(Rt),Ql=s(Rt,"P",{});var O1=r(Ql);tg=i(O1,"Examples:"),O1.forEach(t),og=d(Rt),k(Ws.$$.fragment,Rt),Rt.forEach(t),Wt.forEach(t),Mp=d(o),To=s(o,"H2",{class:!0});var wh=r(To);cn=s(wh,"A",{id:!0,class:!0,href:!0});var N1=r(cn);Vl=s(N1,"SPAN",{});var L1=r(Vl);k(Rs.$$.fragment,L1),L1.forEach(t),N1.forEach(t),ng=d(wh),Jl=s(wh,"SPAN",{});var I1=r(Jl);sg=i(I1,"DistilBertForTokenClassification"),I1.forEach(t),wh.forEach(t),Ep=d(o),He=s(o,"DIV",{class:!0});var Ut=r(He);k(Us.$$.fragment,Ut),rg=d(Ut),Kl=s(Ut,"P",{});var S1=r(Kl);ag=i(S1,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),S1.forEach(t),ig=d(Ut),Hs=s(Ut,"P",{});var yh=r(Hs);lg=i(yh,"This model inherits from "),Bi=s(yh,"A",{href:!0});var W1=r(Bi);dg=i(W1,"PreTrainedModel"),W1.forEach(t),cg=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),pg=d(Ut),Qs=s(Ut,"P",{});var $h=r(Qs);hg=i($h,"This model is also a PyTorch "),Vs=s($h,"A",{href:!0,rel:!0});var R1=r(Vs);ug=i(R1,"torch.nn.Module"),R1.forEach(t),mg=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),fg=d(Ut),Ge=s(Ut,"DIV",{class:!0});var Ht=r(Ge);k(Js.$$.fragment,Ht),gg=d(Ht),bo=s(Ht,"P",{});var el=r(bo);_g=i(el,"The "),Mi=s(el,"A",{href:!0});var U1=r(Mi);vg=i(U1,"DistilBertForTokenClassification"),U1.forEach(t),Tg=i(el," forward method, overrides the "),Gl=s(el,"CODE",{});var H1=r(Gl);bg=i(H1,"__call__"),H1.forEach(t),kg=i(el," special method."),el.forEach(t),wg=d(Ht),k(pn.$$.fragment,Ht),yg=d(Ht),Xl=s(Ht,"P",{});var Q1=r(Xl);$g=i(Q1,"Example:"),Q1.forEach(t),Dg=d(Ht),k(Ks.$$.fragment,Ht),Ht.forEach(t),Ut.forEach(t),xp=d(o),ko=s(o,"H2",{class:!0});var Dh=r(ko);hn=s(Dh,"A",{id:!0,class:!0,href:!0});var V1=r(hn);Yl=s(V1,"SPAN",{});var J1=r(Yl);k(Gs.$$.fragment,J1),J1.forEach(t),V1.forEach(t),Fg=d(Dh),Zl=s(Dh,"SPAN",{});var K1=r(Zl);Bg=i(K1,"DistilBertForQuestionAnswering"),K1.forEach(t),Dh.forEach(t),zp=d(o),Qe=s(o,"DIV",{class:!0});var Qt=r(Qe);k(Xs.$$.fragment,Qt),Mg=d(Qt),wo=s(Qt,"P",{});var tl=r(wo);Eg=i(tl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=s(tl,"CODE",{});var G1=r(ed);xg=i(G1,"span start logits"),G1.forEach(t),zg=i(tl," and "),td=s(tl,"CODE",{});var X1=r(td);Cg=i(X1,"span end logits"),X1.forEach(t),jg=i(tl,")."),tl.forEach(t),Pg=d(Qt),Ys=s(Qt,"P",{});var Fh=r(Ys);qg=i(Fh,"This model inherits from "),Ei=s(Fh,"A",{href:!0});var Y1=r(Ei);Ag=i(Y1,"PreTrainedModel"),Y1.forEach(t),Og=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),Ng=d(Qt),Zs=s(Qt,"P",{});var Bh=r(Zs);Lg=i(Bh,"This model is also a PyTorch "),er=s(Bh,"A",{href:!0,rel:!0});var Z1=r(er);Ig=i(Z1,"torch.nn.Module"),Z1.forEach(t),Sg=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),Wg=d(Qt),Xe=s(Qt,"DIV",{class:!0});var Vt=r(Xe);k(tr.$$.fragment,Vt),Rg=d(Vt),yo=s(Vt,"P",{});var ol=r(yo);Ug=i(ol,"The "),xi=s(ol,"A",{href:!0});var e$=r(xi);Hg=i(e$,"DistilBertForQuestionAnswering"),e$.forEach(t),Qg=i(ol," forward method, overrides the "),od=s(ol,"CODE",{});var t$=r(od);Vg=i(t$,"__call__"),t$.forEach(t),Jg=i(ol," special method."),ol.forEach(t),Kg=d(Vt),k(un.$$.fragment,Vt),Gg=d(Vt),nd=s(Vt,"P",{});var o$=r(nd);Xg=i(o$,"Example:"),o$.forEach(t),Yg=d(Vt),k(or.$$.fragment,Vt),Vt.forEach(t),Qt.forEach(t),Cp=d(o),$o=s(o,"H2",{class:!0});var Mh=r($o);mn=s(Mh,"A",{id:!0,class:!0,href:!0});var n$=r(mn);sd=s(n$,"SPAN",{});var s$=r(sd);k(nr.$$.fragment,s$),s$.forEach(t),n$.forEach(t),Zg=d(Mh),rd=s(Mh,"SPAN",{});var r$=r(rd);e_=i(r$,"TFDistilBertModel"),r$.forEach(t),Mh.forEach(t),jp=d(o),Pe=s(o,"DIV",{class:!0});var bt=r(Pe);k(sr.$$.fragment,bt),t_=d(bt),ad=s(bt,"P",{});var a$=r(ad);o_=i(a$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),a$.forEach(t),n_=d(bt),rr=s(bt,"P",{});var Eh=r(rr);s_=i(Eh,"This model inherits from "),zi=s(Eh,"A",{href:!0});var i$=r(zi);r_=i(i$,"TFPreTrainedModel"),i$.forEach(t),a_=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),i_=d(bt),ar=s(bt,"P",{});var xh=r(ar);l_=i(xh,"This model is also a "),ir=s(xh,"A",{href:!0,rel:!0});var l$=r(ir);d_=i(l$,"tf.keras.Model"),l$.forEach(t),c_=i(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(t),p_=d(bt),k(fn.$$.fragment,bt),h_=d(bt),Ye=s(bt,"DIV",{class:!0});var Jt=r(Ye);k(lr.$$.fragment,Jt),u_=d(Jt),Do=s(Jt,"P",{});var nl=r(Do);m_=i(nl,"The "),Ci=s(nl,"A",{href:!0});var d$=r(Ci);f_=i(d$,"TFDistilBertModel"),d$.forEach(t),g_=i(nl," forward method, overrides the "),id=s(nl,"CODE",{});var c$=r(id);__=i(c$,"__call__"),c$.forEach(t),v_=i(nl," special method."),nl.forEach(t),T_=d(Jt),k(gn.$$.fragment,Jt),b_=d(Jt),ld=s(Jt,"P",{});var p$=r(ld);k_=i(p$,"Example:"),p$.forEach(t),w_=d(Jt),k(dr.$$.fragment,Jt),Jt.forEach(t),bt.forEach(t),Pp=d(o),Fo=s(o,"H2",{class:!0});var zh=r(Fo);_n=s(zh,"A",{id:!0,class:!0,href:!0});var h$=r(_n);dd=s(h$,"SPAN",{});var u$=r(dd);k(cr.$$.fragment,u$),u$.forEach(t),h$.forEach(t),y_=d(zh),cd=s(zh,"SPAN",{});var m$=r(cd);$_=i(m$,"TFDistilBertForMaskedLM"),m$.forEach(t),zh.forEach(t),qp=d(o),qe=s(o,"DIV",{class:!0});var kt=r(qe);k(pr.$$.fragment,kt),D_=d(kt),hr=s(kt,"P",{});var Ch=r(hr);F_=i(Ch,"DistilBert Model with a "),pd=s(Ch,"CODE",{});var f$=r(pd);B_=i(f$,"masked language modeling"),f$.forEach(t),M_=i(Ch," head on top."),Ch.forEach(t),E_=d(kt),ur=s(kt,"P",{});var jh=r(ur);x_=i(jh,"This model inherits from "),ji=s(jh,"A",{href:!0});var g$=r(ji);z_=i(g$,"TFPreTrainedModel"),g$.forEach(t),C_=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),j_=d(kt),mr=s(kt,"P",{});var Ph=r(mr);P_=i(Ph,"This model is also a "),fr=s(Ph,"A",{href:!0,rel:!0});var _$=r(fr);q_=i(_$,"tf.keras.Model"),_$.forEach(t),A_=i(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),O_=d(kt),k(vn.$$.fragment,kt),N_=d(kt),Ze=s(kt,"DIV",{class:!0});var Kt=r(Ze);k(gr.$$.fragment,Kt),L_=d(Kt),Bo=s(Kt,"P",{});var sl=r(Bo);I_=i(sl,"The "),Pi=s(sl,"A",{href:!0});var v$=r(Pi);S_=i(v$,"TFDistilBertForMaskedLM"),v$.forEach(t),W_=i(sl," forward method, overrides the "),hd=s(sl,"CODE",{});var T$=r(hd);R_=i(T$,"__call__"),T$.forEach(t),U_=i(sl," special method."),sl.forEach(t),H_=d(Kt),k(Tn.$$.fragment,Kt),Q_=d(Kt),ud=s(Kt,"P",{});var b$=r(ud);V_=i(b$,"Example:"),b$.forEach(t),J_=d(Kt),k(_r.$$.fragment,Kt),Kt.forEach(t),kt.forEach(t),Ap=d(o),Mo=s(o,"H2",{class:!0});var qh=r(Mo);bn=s(qh,"A",{id:!0,class:!0,href:!0});var k$=r(bn);md=s(k$,"SPAN",{});var w$=r(md);k(vr.$$.fragment,w$),w$.forEach(t),k$.forEach(t),K_=d(qh),fd=s(qh,"SPAN",{});var y$=r(fd);G_=i(y$,"TFDistilBertForSequenceClassification"),y$.forEach(t),qh.forEach(t),Op=d(o),Ae=s(o,"DIV",{class:!0});var wt=r(Ae);k(Tr.$$.fragment,wt),X_=d(wt),gd=s(wt,"P",{});var $$=r(gd);Y_=i($$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$$.forEach(t),Z_=d(wt),br=s(wt,"P",{});var Ah=r(br);ev=i(Ah,"This model inherits from "),qi=s(Ah,"A",{href:!0});var D$=r(qi);tv=i(D$,"TFPreTrainedModel"),D$.forEach(t),ov=i(Ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah.forEach(t),nv=d(wt),kr=s(wt,"P",{});var Oh=r(kr);sv=i(Oh,"This model is also a "),wr=s(Oh,"A",{href:!0,rel:!0});var F$=r(wr);rv=i(F$,"tf.keras.Model"),F$.forEach(t),av=i(Oh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh.forEach(t),iv=d(wt),k(kn.$$.fragment,wt),lv=d(wt),et=s(wt,"DIV",{class:!0});var Gt=r(et);k(yr.$$.fragment,Gt),dv=d(Gt),Eo=s(Gt,"P",{});var rl=r(Eo);cv=i(rl,"The "),Ai=s(rl,"A",{href:!0});var B$=r(Ai);pv=i(B$,"TFDistilBertForSequenceClassification"),B$.forEach(t),hv=i(rl," forward method, overrides the "),_d=s(rl,"CODE",{});var M$=r(_d);uv=i(M$,"__call__"),M$.forEach(t),mv=i(rl," special method."),rl.forEach(t),fv=d(Gt),k(wn.$$.fragment,Gt),gv=d(Gt),vd=s(Gt,"P",{});var E$=r(vd);_v=i(E$,"Example:"),E$.forEach(t),vv=d(Gt),k($r.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Np=d(o),xo=s(o,"H2",{class:!0});var Nh=r(xo);yn=s(Nh,"A",{id:!0,class:!0,href:!0});var x$=r(yn);Td=s(x$,"SPAN",{});var z$=r(Td);k(Dr.$$.fragment,z$),z$.forEach(t),x$.forEach(t),Tv=d(Nh),bd=s(Nh,"SPAN",{});var C$=r(bd);bv=i(C$,"TFDistilBertForMultipleChoice"),C$.forEach(t),Nh.forEach(t),Lp=d(o),Oe=s(o,"DIV",{class:!0});var yt=r(Oe);k(Fr.$$.fragment,yt),kv=d(yt),kd=s(yt,"P",{});var j$=r(kd);wv=i(j$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),j$.forEach(t),yv=d(yt),Br=s(yt,"P",{});var Lh=r(Br);$v=i(Lh,"This model inherits from "),Oi=s(Lh,"A",{href:!0});var P$=r(Oi);Dv=i(P$,"TFPreTrainedModel"),P$.forEach(t),Fv=i(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),Bv=d(yt),Mr=s(yt,"P",{});var Ih=r(Mr);Mv=i(Ih,"This model is also a "),Er=s(Ih,"A",{href:!0,rel:!0});var q$=r(Er);Ev=i(q$,"tf.keras.Model"),q$.forEach(t),xv=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),zv=d(yt),k($n.$$.fragment,yt),Cv=d(yt),tt=s(yt,"DIV",{class:!0});var Xt=r(tt);k(xr.$$.fragment,Xt),jv=d(Xt),zo=s(Xt,"P",{});var al=r(zo);Pv=i(al,"The "),Ni=s(al,"A",{href:!0});var A$=r(Ni);qv=i(A$,"TFDistilBertForMultipleChoice"),A$.forEach(t),Av=i(al," forward method, overrides the "),wd=s(al,"CODE",{});var O$=r(wd);Ov=i(O$,"__call__"),O$.forEach(t),Nv=i(al," special method."),al.forEach(t),Lv=d(Xt),k(Dn.$$.fragment,Xt),Iv=d(Xt),yd=s(Xt,"P",{});var N$=r(yd);Sv=i(N$,"Example:"),N$.forEach(t),Wv=d(Xt),k(zr.$$.fragment,Xt),Xt.forEach(t),yt.forEach(t),Ip=d(o),Co=s(o,"H2",{class:!0});var Sh=r(Co);Fn=s(Sh,"A",{id:!0,class:!0,href:!0});var L$=r(Fn);$d=s(L$,"SPAN",{});var I$=r($d);k(Cr.$$.fragment,I$),I$.forEach(t),L$.forEach(t),Rv=d(Sh),Dd=s(Sh,"SPAN",{});var S$=r(Dd);Uv=i(S$,"TFDistilBertForTokenClassification"),S$.forEach(t),Sh.forEach(t),Sp=d(o),Ne=s(o,"DIV",{class:!0});var $t=r(Ne);k(jr.$$.fragment,$t),Hv=d($t),Fd=s($t,"P",{});var W$=r(Fd);Qv=i(W$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),W$.forEach(t),Vv=d($t),Pr=s($t,"P",{});var Wh=r(Pr);Jv=i(Wh,"This model inherits from "),Li=s(Wh,"A",{href:!0});var R$=r(Li);Kv=i(R$,"TFPreTrainedModel"),R$.forEach(t),Gv=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),Xv=d($t),qr=s($t,"P",{});var Rh=r(qr);Yv=i(Rh,"This model is also a "),Ar=s(Rh,"A",{href:!0,rel:!0});var U$=r(Ar);Zv=i(U$,"tf.keras.Model"),U$.forEach(t),eT=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),tT=d($t),k(Bn.$$.fragment,$t),oT=d($t),ot=s($t,"DIV",{class:!0});var Yt=r(ot);k(Or.$$.fragment,Yt),nT=d(Yt),jo=s(Yt,"P",{});var il=r(jo);sT=i(il,"The "),Ii=s(il,"A",{href:!0});var H$=r(Ii);rT=i(H$,"TFDistilBertForTokenClassification"),H$.forEach(t),aT=i(il," forward method, overrides the "),Bd=s(il,"CODE",{});var Q$=r(Bd);iT=i(Q$,"__call__"),Q$.forEach(t),lT=i(il," special method."),il.forEach(t),dT=d(Yt),k(Mn.$$.fragment,Yt),cT=d(Yt),Md=s(Yt,"P",{});var V$=r(Md);pT=i(V$,"Example:"),V$.forEach(t),hT=d(Yt),k(Nr.$$.fragment,Yt),Yt.forEach(t),$t.forEach(t),Wp=d(o),Po=s(o,"H2",{class:!0});var Uh=r(Po);En=s(Uh,"A",{id:!0,class:!0,href:!0});var J$=r(En);Ed=s(J$,"SPAN",{});var K$=r(Ed);k(Lr.$$.fragment,K$),K$.forEach(t),J$.forEach(t),uT=d(Uh),xd=s(Uh,"SPAN",{});var G$=r(xd);mT=i(G$,"TFDistilBertForQuestionAnswering"),G$.forEach(t),Uh.forEach(t),Rp=d(o),Le=s(o,"DIV",{class:!0});var Dt=r(Le);k(Ir.$$.fragment,Dt),fT=d(Dt),qo=s(Dt,"P",{});var ll=r(qo);gT=i(ll,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=s(ll,"CODE",{});var X$=r(zd);_T=i(X$,"span start logits"),X$.forEach(t),vT=i(ll," and "),Cd=s(ll,"CODE",{});var Y$=r(Cd);TT=i(Y$,"span end logits"),Y$.forEach(t),bT=i(ll,")."),ll.forEach(t),kT=d(Dt),Sr=s(Dt,"P",{});var Hh=r(Sr);wT=i(Hh,"This model inherits from "),Si=s(Hh,"A",{href:!0});var Z$=r(Si);yT=i(Z$,"TFPreTrainedModel"),Z$.forEach(t),$T=i(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh.forEach(t),DT=d(Dt),Wr=s(Dt,"P",{});var Qh=r(Wr);FT=i(Qh,"This model is also a "),Rr=s(Qh,"A",{href:!0,rel:!0});var eD=r(Rr);BT=i(eD,"tf.keras.Model"),eD.forEach(t),MT=i(Qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qh.forEach(t),ET=d(Dt),k(xn.$$.fragment,Dt),xT=d(Dt),nt=s(Dt,"DIV",{class:!0});var Zt=r(nt);k(Ur.$$.fragment,Zt),zT=d(Zt),Ao=s(Zt,"P",{});var dl=r(Ao);CT=i(dl,"The "),Wi=s(dl,"A",{href:!0});var tD=r(Wi);jT=i(tD,"TFDistilBertForQuestionAnswering"),tD.forEach(t),PT=i(dl," forward method, overrides the "),jd=s(dl,"CODE",{});var oD=r(jd);qT=i(oD,"__call__"),oD.forEach(t),AT=i(dl," special method."),dl.forEach(t),OT=d(Zt),k(zn.$$.fragment,Zt),NT=d(Zt),Pd=s(Zt,"P",{});var nD=r(Pd);LT=i(nD,"Example:"),nD.forEach(t),IT=d(Zt),k(Hr.$$.fragment,Zt),Zt.forEach(t),Dt.forEach(t),Up=d(o),Oo=s(o,"H2",{class:!0});var Vh=r(Oo);Cn=s(Vh,"A",{id:!0,class:!0,href:!0});var sD=r(Cn);qd=s(sD,"SPAN",{});var rD=r(qd);k(Qr.$$.fragment,rD),rD.forEach(t),sD.forEach(t),ST=d(Vh),Ad=s(Vh,"SPAN",{});var aD=r(Ad);WT=i(aD,"FlaxDistilBertModel"),aD.forEach(t),Vh.forEach(t),Hp=d(o),Be=s(o,"DIV",{class:!0});var pt=r(Be);k(Vr.$$.fragment,pt),RT=d(pt),Od=s(pt,"P",{});var iD=r(Od);UT=i(iD,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),iD.forEach(t),HT=d(pt),Jr=s(pt,"P",{});var Jh=r(Jr);QT=i(Jh,"This model inherits from "),Ri=s(Jh,"A",{href:!0});var lD=r(Ri);VT=i(lD,"FlaxPreTrainedModel"),lD.forEach(t),JT=i(Jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jh.forEach(t),KT=d(pt),Kr=s(pt,"P",{});var Kh=r(Kr);GT=i(Kh,"This model is also a Flax Linen "),Gr=s(Kh,"A",{href:!0,rel:!0});var dD=r(Gr);XT=i(dD,"flax.linen.Module"),dD.forEach(t),YT=i(Kh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kh.forEach(t),ZT=d(pt),Nd=s(pt,"P",{});var cD=r(Nd);eb=i(cD,"Finally, this model supports inherent JAX features such as:"),cD.forEach(t),tb=d(pt),Bt=s(pt,"UL",{});var Vn=r(Bt);Ld=s(Vn,"LI",{});var pD=r(Ld);Xr=s(pD,"A",{href:!0,rel:!0});var hD=r(Xr);ob=i(hD,"Just-In-Time (JIT) compilation"),hD.forEach(t),pD.forEach(t),nb=d(Vn),Id=s(Vn,"LI",{});var uD=r(Id);Yr=s(uD,"A",{href:!0,rel:!0});var mD=r(Yr);sb=i(mD,"Automatic Differentiation"),mD.forEach(t),uD.forEach(t),rb=d(Vn),Sd=s(Vn,"LI",{});var fD=r(Sd);Zr=s(fD,"A",{href:!0,rel:!0});var gD=r(Zr);ab=i(gD,"Vectorization"),gD.forEach(t),fD.forEach(t),ib=d(Vn),Wd=s(Vn,"LI",{});var _D=r(Wd);ea=s(_D,"A",{href:!0,rel:!0});var vD=r(ea);lb=i(vD,"Parallelization"),vD.forEach(t),_D.forEach(t),Vn.forEach(t),db=d(pt),st=s(pt,"DIV",{class:!0});var eo=r(st);k(ta.$$.fragment,eo),cb=d(eo),No=s(eo,"P",{});var cl=r(No);pb=i(cl,"The "),Rd=s(cl,"CODE",{});var TD=r(Rd);hb=i(TD,"FlaxDistilBertPreTrainedModel"),TD.forEach(t),ub=i(cl,"forward method, overrides the "),Ud=s(cl,"CODE",{});var bD=r(Ud);mb=i(bD,"__call__"),bD.forEach(t),fb=i(cl," special method."),cl.forEach(t),gb=d(eo),k(jn.$$.fragment,eo),_b=d(eo),Hd=s(eo,"P",{});var kD=r(Hd);vb=i(kD,"Example:"),kD.forEach(t),Tb=d(eo),k(oa.$$.fragment,eo),eo.forEach(t),pt.forEach(t),Qp=d(o),Lo=s(o,"H2",{class:!0});var Gh=r(Lo);Pn=s(Gh,"A",{id:!0,class:!0,href:!0});var wD=r(Pn);Qd=s(wD,"SPAN",{});var yD=r(Qd);k(na.$$.fragment,yD),yD.forEach(t),wD.forEach(t),bb=d(Gh),Vd=s(Gh,"SPAN",{});var $D=r(Vd);kb=i($D,"FlaxDistilBertForMaskedLM"),$D.forEach(t),Gh.forEach(t),Vp=d(o),Me=s(o,"DIV",{class:!0});var ht=r(Me);k(sa.$$.fragment,ht),wb=d(ht),ra=s(ht,"P",{});var Xh=r(ra);yb=i(Xh,"DistilBert Model with a "),Jd=s(Xh,"CODE",{});var DD=r(Jd);$b=i(DD,"language modeling"),DD.forEach(t),Db=i(Xh," head on top."),Xh.forEach(t),Fb=d(ht),aa=s(ht,"P",{});var Yh=r(aa);Bb=i(Yh,"This model inherits from "),Ui=s(Yh,"A",{href:!0});var FD=r(Ui);Mb=i(FD,"FlaxPreTrainedModel"),FD.forEach(t),Eb=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yh.forEach(t),xb=d(ht),ia=s(ht,"P",{});var Zh=r(ia);zb=i(Zh,"This model is also a Flax Linen "),la=s(Zh,"A",{href:!0,rel:!0});var BD=r(la);Cb=i(BD,"flax.linen.Module"),BD.forEach(t),jb=i(Zh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zh.forEach(t),Pb=d(ht),Kd=s(ht,"P",{});var MD=r(Kd);qb=i(MD,"Finally, this model supports inherent JAX features such as:"),MD.forEach(t),Ab=d(ht),Mt=s(ht,"UL",{});var Jn=r(Mt);Gd=s(Jn,"LI",{});var ED=r(Gd);da=s(ED,"A",{href:!0,rel:!0});var xD=r(da);Ob=i(xD,"Just-In-Time (JIT) compilation"),xD.forEach(t),ED.forEach(t),Nb=d(Jn),Xd=s(Jn,"LI",{});var zD=r(Xd);ca=s(zD,"A",{href:!0,rel:!0});var CD=r(ca);Lb=i(CD,"Automatic Differentiation"),CD.forEach(t),zD.forEach(t),Ib=d(Jn),Yd=s(Jn,"LI",{});var jD=r(Yd);pa=s(jD,"A",{href:!0,rel:!0});var PD=r(pa);Sb=i(PD,"Vectorization"),PD.forEach(t),jD.forEach(t),Wb=d(Jn),Zd=s(Jn,"LI",{});var qD=r(Zd);ha=s(qD,"A",{href:!0,rel:!0});var AD=r(ha);Rb=i(AD,"Parallelization"),AD.forEach(t),qD.forEach(t),Jn.forEach(t),Ub=d(ht),rt=s(ht,"DIV",{class:!0});var to=r(rt);k(ua.$$.fragment,to),Hb=d(to),Io=s(to,"P",{});var pl=r(Io);Qb=i(pl,"The "),ec=s(pl,"CODE",{});var OD=r(ec);Vb=i(OD,"FlaxDistilBertPreTrainedModel"),OD.forEach(t),Jb=i(pl,"forward method, overrides the "),tc=s(pl,"CODE",{});var ND=r(tc);Kb=i(ND,"__call__"),ND.forEach(t),Gb=i(pl," special method."),pl.forEach(t),Xb=d(to),k(qn.$$.fragment,to),Yb=d(to),oc=s(to,"P",{});var LD=r(oc);Zb=i(LD,"Example:"),LD.forEach(t),ek=d(to),k(ma.$$.fragment,to),to.forEach(t),ht.forEach(t),Jp=d(o),So=s(o,"H2",{class:!0});var eu=r(So);An=s(eu,"A",{id:!0,class:!0,href:!0});var ID=r(An);nc=s(ID,"SPAN",{});var SD=r(nc);k(fa.$$.fragment,SD),SD.forEach(t),ID.forEach(t),tk=d(eu),sc=s(eu,"SPAN",{});var WD=r(sc);ok=i(WD,"FlaxDistilBertForSequenceClassification"),WD.forEach(t),eu.forEach(t),Kp=d(o),Ee=s(o,"DIV",{class:!0});var ut=r(Ee);k(ga.$$.fragment,ut),nk=d(ut),rc=s(ut,"P",{});var RD=r(rc);sk=i(RD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),RD.forEach(t),rk=d(ut),_a=s(ut,"P",{});var tu=r(_a);ak=i(tu,"This model inherits from "),Hi=s(tu,"A",{href:!0});var UD=r(Hi);ik=i(UD,"FlaxPreTrainedModel"),UD.forEach(t),lk=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tu.forEach(t),dk=d(ut),va=s(ut,"P",{});var ou=r(va);ck=i(ou,"This model is also a Flax Linen "),Ta=s(ou,"A",{href:!0,rel:!0});var HD=r(Ta);pk=i(HD,"flax.linen.Module"),HD.forEach(t),hk=i(ou,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ou.forEach(t),uk=d(ut),ac=s(ut,"P",{});var QD=r(ac);mk=i(QD,"Finally, this model supports inherent JAX features such as:"),QD.forEach(t),fk=d(ut),Et=s(ut,"UL",{});var Kn=r(Et);ic=s(Kn,"LI",{});var VD=r(ic);ba=s(VD,"A",{href:!0,rel:!0});var JD=r(ba);gk=i(JD,"Just-In-Time (JIT) compilation"),JD.forEach(t),VD.forEach(t),_k=d(Kn),lc=s(Kn,"LI",{});var KD=r(lc);ka=s(KD,"A",{href:!0,rel:!0});var GD=r(ka);vk=i(GD,"Automatic Differentiation"),GD.forEach(t),KD.forEach(t),Tk=d(Kn),dc=s(Kn,"LI",{});var XD=r(dc);wa=s(XD,"A",{href:!0,rel:!0});var YD=r(wa);bk=i(YD,"Vectorization"),YD.forEach(t),XD.forEach(t),kk=d(Kn),cc=s(Kn,"LI",{});var ZD=r(cc);ya=s(ZD,"A",{href:!0,rel:!0});var eF=r(ya);wk=i(eF,"Parallelization"),eF.forEach(t),ZD.forEach(t),Kn.forEach(t),yk=d(ut),at=s(ut,"DIV",{class:!0});var oo=r(at);k($a.$$.fragment,oo),$k=d(oo),Wo=s(oo,"P",{});var hl=r(Wo);Dk=i(hl,"The "),pc=s(hl,"CODE",{});var tF=r(pc);Fk=i(tF,"FlaxDistilBertPreTrainedModel"),tF.forEach(t),Bk=i(hl,"forward method, overrides the "),hc=s(hl,"CODE",{});var oF=r(hc);Mk=i(oF,"__call__"),oF.forEach(t),Ek=i(hl," special method."),hl.forEach(t),xk=d(oo),k(On.$$.fragment,oo),zk=d(oo),uc=s(oo,"P",{});var nF=r(uc);Ck=i(nF,"Example:"),nF.forEach(t),jk=d(oo),k(Da.$$.fragment,oo),oo.forEach(t),ut.forEach(t),Gp=d(o),Ro=s(o,"H2",{class:!0});var nu=r(Ro);Nn=s(nu,"A",{id:!0,class:!0,href:!0});var sF=r(Nn);mc=s(sF,"SPAN",{});var rF=r(mc);k(Fa.$$.fragment,rF),rF.forEach(t),sF.forEach(t),Pk=d(nu),fc=s(nu,"SPAN",{});var aF=r(fc);qk=i(aF,"FlaxDistilBertForMultipleChoice"),aF.forEach(t),nu.forEach(t),Xp=d(o),xe=s(o,"DIV",{class:!0});var mt=r(xe);k(Ba.$$.fragment,mt),Ak=d(mt),gc=s(mt,"P",{});var iF=r(gc);Ok=i(iF,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),iF.forEach(t),Nk=d(mt),Ma=s(mt,"P",{});var su=r(Ma);Lk=i(su,"This model inherits from "),Qi=s(su,"A",{href:!0});var lF=r(Qi);Ik=i(lF,"FlaxPreTrainedModel"),lF.forEach(t),Sk=i(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),su.forEach(t),Wk=d(mt),Ea=s(mt,"P",{});var ru=r(Ea);Rk=i(ru,"This model is also a Flax Linen "),xa=s(ru,"A",{href:!0,rel:!0});var dF=r(xa);Uk=i(dF,"flax.linen.Module"),dF.forEach(t),Hk=i(ru,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ru.forEach(t),Qk=d(mt),_c=s(mt,"P",{});var cF=r(_c);Vk=i(cF,"Finally, this model supports inherent JAX features such as:"),cF.forEach(t),Jk=d(mt),xt=s(mt,"UL",{});var Gn=r(xt);vc=s(Gn,"LI",{});var pF=r(vc);za=s(pF,"A",{href:!0,rel:!0});var hF=r(za);Kk=i(hF,"Just-In-Time (JIT) compilation"),hF.forEach(t),pF.forEach(t),Gk=d(Gn),Tc=s(Gn,"LI",{});var uF=r(Tc);Ca=s(uF,"A",{href:!0,rel:!0});var mF=r(Ca);Xk=i(mF,"Automatic Differentiation"),mF.forEach(t),uF.forEach(t),Yk=d(Gn),bc=s(Gn,"LI",{});var fF=r(bc);ja=s(fF,"A",{href:!0,rel:!0});var gF=r(ja);Zk=i(gF,"Vectorization"),gF.forEach(t),fF.forEach(t),ew=d(Gn),kc=s(Gn,"LI",{});var _F=r(kc);Pa=s(_F,"A",{href:!0,rel:!0});var vF=r(Pa);tw=i(vF,"Parallelization"),vF.forEach(t),_F.forEach(t),Gn.forEach(t),ow=d(mt),it=s(mt,"DIV",{class:!0});var no=r(it);k(qa.$$.fragment,no),nw=d(no),Uo=s(no,"P",{});var ul=r(Uo);sw=i(ul,"The "),wc=s(ul,"CODE",{});var TF=r(wc);rw=i(TF,"FlaxDistilBertPreTrainedModel"),TF.forEach(t),aw=i(ul,"forward method, overrides the "),yc=s(ul,"CODE",{});var bF=r(yc);iw=i(bF,"__call__"),bF.forEach(t),lw=i(ul," special method."),ul.forEach(t),dw=d(no),k(Ln.$$.fragment,no),cw=d(no),$c=s(no,"P",{});var kF=r($c);pw=i(kF,"Example:"),kF.forEach(t),hw=d(no),k(Aa.$$.fragment,no),no.forEach(t),mt.forEach(t),Yp=d(o),Ho=s(o,"H2",{class:!0});var au=r(Ho);In=s(au,"A",{id:!0,class:!0,href:!0});var wF=r(In);Dc=s(wF,"SPAN",{});var yF=r(Dc);k(Oa.$$.fragment,yF),yF.forEach(t),wF.forEach(t),uw=d(au),Fc=s(au,"SPAN",{});var $F=r(Fc);mw=i($F,"FlaxDistilBertForTokenClassification"),$F.forEach(t),au.forEach(t),Zp=d(o),ze=s(o,"DIV",{class:!0});var ft=r(ze);k(Na.$$.fragment,ft),fw=d(ft),Bc=s(ft,"P",{});var DF=r(Bc);gw=i(DF,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),DF.forEach(t),_w=d(ft),La=s(ft,"P",{});var iu=r(La);vw=i(iu,"This model inherits from "),Vi=s(iu,"A",{href:!0});var FF=r(Vi);Tw=i(FF,"FlaxPreTrainedModel"),FF.forEach(t),bw=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),kw=d(ft),Ia=s(ft,"P",{});var lu=r(Ia);ww=i(lu,"This model is also a Flax Linen "),Sa=s(lu,"A",{href:!0,rel:!0});var BF=r(Sa);yw=i(BF,"flax.linen.Module"),BF.forEach(t),$w=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Dw=d(ft),Mc=s(ft,"P",{});var MF=r(Mc);Fw=i(MF,"Finally, this model supports inherent JAX features such as:"),MF.forEach(t),Bw=d(ft),zt=s(ft,"UL",{});var Xn=r(zt);Ec=s(Xn,"LI",{});var EF=r(Ec);Wa=s(EF,"A",{href:!0,rel:!0});var xF=r(Wa);Mw=i(xF,"Just-In-Time (JIT) compilation"),xF.forEach(t),EF.forEach(t),Ew=d(Xn),xc=s(Xn,"LI",{});var zF=r(xc);Ra=s(zF,"A",{href:!0,rel:!0});var CF=r(Ra);xw=i(CF,"Automatic Differentiation"),CF.forEach(t),zF.forEach(t),zw=d(Xn),zc=s(Xn,"LI",{});var jF=r(zc);Ua=s(jF,"A",{href:!0,rel:!0});var PF=r(Ua);Cw=i(PF,"Vectorization"),PF.forEach(t),jF.forEach(t),jw=d(Xn),Cc=s(Xn,"LI",{});var qF=r(Cc);Ha=s(qF,"A",{href:!0,rel:!0});var AF=r(Ha);Pw=i(AF,"Parallelization"),AF.forEach(t),qF.forEach(t),Xn.forEach(t),qw=d(ft),lt=s(ft,"DIV",{class:!0});var so=r(lt);k(Qa.$$.fragment,so),Aw=d(so),Qo=s(so,"P",{});var ml=r(Qo);Ow=i(ml,"The "),jc=s(ml,"CODE",{});var OF=r(jc);Nw=i(OF,"FlaxDistilBertPreTrainedModel"),OF.forEach(t),Lw=i(ml,"forward method, overrides the "),Pc=s(ml,"CODE",{});var NF=r(Pc);Iw=i(NF,"__call__"),NF.forEach(t),Sw=i(ml," special method."),ml.forEach(t),Ww=d(so),k(Sn.$$.fragment,so),Rw=d(so),qc=s(so,"P",{});var LF=r(qc);Uw=i(LF,"Example:"),LF.forEach(t),Hw=d(so),k(Va.$$.fragment,so),so.forEach(t),ft.forEach(t),eh=d(o),Vo=s(o,"H2",{class:!0});var du=r(Vo);Wn=s(du,"A",{id:!0,class:!0,href:!0});var IF=r(Wn);Ac=s(IF,"SPAN",{});var SF=r(Ac);k(Ja.$$.fragment,SF),SF.forEach(t),IF.forEach(t),Qw=d(du),Oc=s(du,"SPAN",{});var WF=r(Oc);Vw=i(WF,"FlaxDistilBertForQuestionAnswering"),WF.forEach(t),du.forEach(t),th=d(o),Ce=s(o,"DIV",{class:!0});var gt=r(Ce);k(Ka.$$.fragment,gt),Jw=d(gt),Jo=s(gt,"P",{});var fl=r(Jo);Kw=i(fl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Nc=s(fl,"CODE",{});var RF=r(Nc);Gw=i(RF,"span start logits"),RF.forEach(t),Xw=i(fl," and "),Lc=s(fl,"CODE",{});var UF=r(Lc);Yw=i(UF,"span end logits"),UF.forEach(t),Zw=i(fl,")."),fl.forEach(t),ey=d(gt),Ga=s(gt,"P",{});var cu=r(Ga);ty=i(cu,"This model inherits from "),Ji=s(cu,"A",{href:!0});var HF=r(Ji);oy=i(HF,"FlaxPreTrainedModel"),HF.forEach(t),ny=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),sy=d(gt),Xa=s(gt,"P",{});var pu=r(Xa);ry=i(pu,"This model is also a Flax Linen "),Ya=s(pu,"A",{href:!0,rel:!0});var QF=r(Ya);ay=i(QF,"flax.linen.Module"),QF.forEach(t),iy=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),ly=d(gt),Ic=s(gt,"P",{});var VF=r(Ic);dy=i(VF,"Finally, this model supports inherent JAX features such as:"),VF.forEach(t),cy=d(gt),Ct=s(gt,"UL",{});var Yn=r(Ct);Sc=s(Yn,"LI",{});var JF=r(Sc);Za=s(JF,"A",{href:!0,rel:!0});var KF=r(Za);py=i(KF,"Just-In-Time (JIT) compilation"),KF.forEach(t),JF.forEach(t),hy=d(Yn),Wc=s(Yn,"LI",{});var GF=r(Wc);ei=s(GF,"A",{href:!0,rel:!0});var XF=r(ei);uy=i(XF,"Automatic Differentiation"),XF.forEach(t),GF.forEach(t),my=d(Yn),Rc=s(Yn,"LI",{});var YF=r(Rc);ti=s(YF,"A",{href:!0,rel:!0});var ZF=r(ti);fy=i(ZF,"Vectorization"),ZF.forEach(t),YF.forEach(t),gy=d(Yn),Uc=s(Yn,"LI",{});var e2=r(Uc);oi=s(e2,"A",{href:!0,rel:!0});var t2=r(oi);_y=i(t2,"Parallelization"),t2.forEach(t),e2.forEach(t),Yn.forEach(t),vy=d(gt),dt=s(gt,"DIV",{class:!0});var ro=r(dt);k(ni.$$.fragment,ro),Ty=d(ro),Ko=s(ro,"P",{});var gl=r(Ko);by=i(gl,"The "),Hc=s(gl,"CODE",{});var o2=r(Hc);ky=i(o2,"FlaxDistilBertPreTrainedModel"),o2.forEach(t),wy=i(gl,"forward method, overrides the "),Qc=s(gl,"CODE",{});var n2=r(Qc);yy=i(n2,"__call__"),n2.forEach(t),$y=i(gl," special method."),gl.forEach(t),Dy=d(ro),k(Rn.$$.fragment,ro),Fy=d(ro),Vc=s(ro,"P",{});var s2=r(Vc);By=i(s2,"Example:"),s2.forEach(t),My=d(ro),k(si.$$.fragment,ro),ro.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(q2)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Zn,"href","https://huggingface.co/victorsanh"),c(Zn,"rel","nofollow"),c(es,"href","https://huggingface.co/kamalkraj"),c(es,"rel","nofollow"),c(ts,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(ts,"rel","nofollow"),c(Go,"id","transformers.DistilBertConfig"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.DistilBertConfig"),c(ao,"class","relative group"),c(di,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),c(ci,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ss,"href","https://huggingface.co/distilbert-base-uncased"),c(ss,"rel","nofollow"),c(pi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(hi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ie,"class","docstring"),c(Xo,"id","transformers.DistilBertTokenizer"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.DistilBertTokenizer"),c(lo,"class","relative group"),c(ui,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(mi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(fi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Zo,"id","transformers.DistilBertTokenizerFast"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.DistilBertTokenizerFast"),c(co,"class","relative group"),c(gi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(_i,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(vi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(tn,"id","transformers.DistilBertModel"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.DistilBertModel"),c(po,"class","relative group"),c(Ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_s,"rel","nofollow"),c(bi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),c(Ve,"class","docstring"),c(Se,"class","docstring"),c(nn,"id","transformers.DistilBertForMaskedLM"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.DistilBertForMaskedLM"),c(uo,"class","relative group"),c(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ds,"rel","nofollow"),c(wi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Je,"class","docstring"),c(We,"class","docstring"),c(rn,"id","transformers.DistilBertForSequenceClassification"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.DistilBertForSequenceClassification"),c(fo,"class","relative group"),c(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cs,"rel","nofollow"),c($i,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(je,"class","docstring"),c(Re,"class","docstring"),c(ln,"id","transformers.DistilBertForMultipleChoice"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.DistilBertForMultipleChoice"),c(_o,"class","relative group"),c(Di,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Is,"rel","nofollow"),c(Fi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ke,"class","docstring"),c(Ue,"class","docstring"),c(cn,"id","transformers.DistilBertForTokenClassification"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.DistilBertForTokenClassification"),c(To,"class","relative group"),c(Bi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vs,"rel","nofollow"),c(Mi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(Ge,"class","docstring"),c(He,"class","docstring"),c(hn,"id","transformers.DistilBertForQuestionAnswering"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.DistilBertForQuestionAnswering"),c(ko,"class","relative group"),c(Ei,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(er,"rel","nofollow"),c(xi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Xe,"class","docstring"),c(Qe,"class","docstring"),c(mn,"id","transformers.TFDistilBertModel"),c(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mn,"href","#transformers.TFDistilBertModel"),c($o,"class","relative group"),c(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(Ci,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ye,"class","docstring"),c(Pe,"class","docstring"),c(_n,"id","transformers.TFDistilBertForMaskedLM"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.TFDistilBertForMaskedLM"),c(Fo,"class","relative group"),c(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fr,"rel","nofollow"),c(Pi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ze,"class","docstring"),c(qe,"class","docstring"),c(bn,"id","transformers.TFDistilBertForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.TFDistilBertForSequenceClassification"),c(Mo,"class","relative group"),c(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wr,"rel","nofollow"),c(Ai,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(yn,"id","transformers.TFDistilBertForMultipleChoice"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.TFDistilBertForMultipleChoice"),c(xo,"class","relative group"),c(Oi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Er,"rel","nofollow"),c(Ni,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(tt,"class","docstring"),c(Oe,"class","docstring"),c(Fn,"id","transformers.TFDistilBertForTokenClassification"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#transformers.TFDistilBertForTokenClassification"),c(Co,"class","relative group"),c(Li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Ii,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(ot,"class","docstring"),c(Ne,"class","docstring"),c(En,"id","transformers.TFDistilBertForQuestionAnswering"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Po,"class","relative group"),c(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Wi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(nt,"class","docstring"),c(Le,"class","docstring"),c(Cn,"id","transformers.FlaxDistilBertModel"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#transformers.FlaxDistilBertModel"),c(Oo,"class","relative group"),c(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gr,"rel","nofollow"),c(Xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xr,"rel","nofollow"),c(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Yr,"rel","nofollow"),c(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zr,"rel","nofollow"),c(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ea,"rel","nofollow"),c(st,"class","docstring"),c(Be,"class","docstring"),c(Pn,"id","transformers.FlaxDistilBertForMaskedLM"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Lo,"class","relative group"),c(Ui,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(la,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(da,"rel","nofollow"),c(ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ca,"rel","nofollow"),c(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ha,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(An,"id","transformers.FlaxDistilBertForSequenceClassification"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(So,"class","relative group"),c(Hi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ta,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ka,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(wa,"rel","nofollow"),c(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ya,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(Nn,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nn,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ro,"class","relative group"),c(Qi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(za,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ja,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Pa,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(In,"id","transformers.FlaxDistilBertForTokenClassification"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Ho,"class","relative group"),c(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Sa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Sa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ra,"rel","nofollow"),c(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ua,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ha,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Wn,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Vo,"class","relative group"),c(Ji,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ya,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ei,"rel","nofollow"),c(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ti,"rel","nofollow"),c(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(oi,"rel","nofollow"),c(dt,"class","docstring"),c(Ce,"class","docstring")},m(o,f){e(document.head,p),u(o,F,f),u(o,g,f),e(g,v),e(v,T),w(_,T,null),e(g,m),e(g,B),e(B,de),u(o,V,f),u(o,E,f),e(E,G),e(G,I),w(X,I,null),e(E,ce),e(E,S),e(S,pe),u(o,re,f),u(o,N,f),e(N,q),e(N,Y),e(Y,J),e(N,x),e(N,z),e(z,he),e(N,W),e(N,oe),e(oe,ue),e(N,R),u(o,ae,f),u(o,ee,f),e(ee,A),u(o,ie,f),u(o,L,f),e(L,ne),e(ne,me),u(o,P,f),u(o,te,f),e(te,U),u(o,le,f),u(o,h,f),e(h,M),e(M,K),e(M,ge),e(ge,Te),e(M,O),e(M,_e),e(_e,be),e(M,ke),e(M,j),e(j,H),e(M,we),e(h,ye),e(h,Z),e(Z,$e),e(Z,se),e(se,De),e(Z,hu),u(o,up,f),u(o,Tt,f),e(Tt,uu),e(Tt,Zn),e(Zn,mu),e(Tt,fu),e(Tt,es),e(es,gu),e(Tt,_u),e(Tt,ts),e(ts,vu),e(Tt,Tu),u(o,mp,f),u(o,ao,f),e(ao,Go),e(Go,_l),w(os,_l,null),e(ao,bu),e(ao,vl),e(vl,ku),u(o,fp,f),u(o,Ie,f),w(ns,Ie,null),e(Ie,wu),e(Ie,Ft),e(Ft,yu),e(Ft,di),e(di,$u),e(Ft,Du),e(Ft,ci),e(ci,Fu),e(Ft,Bu),e(Ft,ss),e(ss,Mu),e(Ft,Eu),e(Ie,xu),e(Ie,io),e(io,zu),e(io,pi),e(pi,Cu),e(io,ju),e(io,hi),e(hi,Pu),e(io,qu),e(Ie,Au),e(Ie,Tl),e(Tl,Ou),e(Ie,Nu),w(rs,Ie,null),u(o,gp,f),u(o,lo,f),e(lo,Xo),e(Xo,bl),w(as,bl,null),e(lo,Lu),e(lo,kl),e(kl,Iu),u(o,_p,f),u(o,_t,f),w(is,_t,null),e(_t,Su),e(_t,wl),e(wl,Wu),e(_t,Ru),e(_t,Yo),e(Yo,ui),e(ui,Uu),e(Yo,Hu),e(Yo,mi),e(mi,Qu),e(Yo,Vu),e(_t,Ju),e(_t,ls),e(ls,Ku),e(ls,fi),e(fi,Gu),e(ls,Xu),u(o,vp,f),u(o,co,f),e(co,Zo),e(Zo,yl),w(ds,yl,null),e(co,Yu),e(co,$l),e($l,Zu),u(o,Tp,f),u(o,vt,f),w(cs,vt,null),e(vt,em),e(vt,ps),e(ps,tm),e(ps,Dl),e(Dl,om),e(ps,nm),e(vt,sm),e(vt,en),e(en,gi),e(gi,rm),e(en,am),e(en,_i),e(_i,im),e(en,lm),e(vt,dm),e(vt,hs),e(hs,cm),e(hs,vi),e(vi,pm),e(hs,hm),u(o,bp,f),u(o,po,f),e(po,tn),e(tn,Fl),w(us,Fl,null),e(po,um),e(po,Bl),e(Bl,mm),u(o,kp,f),u(o,Se,f),w(ms,Se,null),e(Se,fm),e(Se,Ml),e(Ml,gm),e(Se,_m),e(Se,fs),e(fs,vm),e(fs,Ti),e(Ti,Tm),e(fs,bm),e(Se,km),e(Se,gs),e(gs,wm),e(gs,_s),e(_s,ym),e(gs,$m),e(Se,Dm),e(Se,Ve),w(vs,Ve,null),e(Ve,Fm),e(Ve,ho),e(ho,Bm),e(ho,bi),e(bi,Mm),e(ho,Em),e(ho,El),e(El,xm),e(ho,zm),e(Ve,Cm),w(on,Ve,null),e(Ve,jm),e(Ve,xl),e(xl,Pm),e(Ve,qm),w(Ts,Ve,null),u(o,wp,f),u(o,uo,f),e(uo,nn),e(nn,zl),w(bs,zl,null),e(uo,Am),e(uo,Cl),e(Cl,Om),u(o,yp,f),u(o,We,f),w(ks,We,null),e(We,Nm),e(We,ws),e(ws,Lm),e(ws,jl),e(jl,Im),e(ws,Sm),e(We,Wm),e(We,ys),e(ys,Rm),e(ys,ki),e(ki,Um),e(ys,Hm),e(We,Qm),e(We,$s),e($s,Vm),e($s,Ds),e(Ds,Jm),e($s,Km),e(We,Gm),e(We,Je),w(Fs,Je,null),e(Je,Xm),e(Je,mo),e(mo,Ym),e(mo,wi),e(wi,Zm),e(mo,ef),e(mo,Pl),e(Pl,tf),e(mo,of),e(Je,nf),w(sn,Je,null),e(Je,sf),e(Je,ql),e(ql,rf),e(Je,af),w(Bs,Je,null),u(o,$p,f),u(o,fo,f),e(fo,rn),e(rn,Al),w(Ms,Al,null),e(fo,lf),e(fo,Ol),e(Ol,df),u(o,Dp,f),u(o,Re,f),w(Es,Re,null),e(Re,cf),e(Re,Nl),e(Nl,pf),e(Re,hf),e(Re,xs),e(xs,uf),e(xs,yi),e(yi,mf),e(xs,ff),e(Re,gf),e(Re,zs),e(zs,_f),e(zs,Cs),e(Cs,vf),e(zs,Tf),e(Re,bf),e(Re,je),w(js,je,null),e(je,kf),e(je,go),e(go,wf),e(go,$i),e($i,yf),e(go,$f),e(go,Ll),e(Ll,Df),e(go,Ff),e(je,Bf),w(an,je,null),e(je,Mf),e(je,Il),e(Il,Ef),e(je,xf),w(Ps,je,null),e(je,zf),e(je,Sl),e(Sl,Cf),e(je,jf),w(qs,je,null),u(o,Fp,f),u(o,_o,f),e(_o,ln),e(ln,Wl),w(As,Wl,null),e(_o,Pf),e(_o,Rl),e(Rl,qf),u(o,Bp,f),u(o,Ue,f),w(Os,Ue,null),e(Ue,Af),e(Ue,Ul),e(Ul,Of),e(Ue,Nf),e(Ue,Ns),e(Ns,Lf),e(Ns,Di),e(Di,If),e(Ns,Sf),e(Ue,Wf),e(Ue,Ls),e(Ls,Rf),e(Ls,Is),e(Is,Uf),e(Ls,Hf),e(Ue,Qf),e(Ue,Ke),w(Ss,Ke,null),e(Ke,Vf),e(Ke,vo),e(vo,Jf),e(vo,Fi),e(Fi,Kf),e(vo,Gf),e(vo,Hl),e(Hl,Xf),e(vo,Yf),e(Ke,Zf),w(dn,Ke,null),e(Ke,eg),e(Ke,Ql),e(Ql,tg),e(Ke,og),w(Ws,Ke,null),u(o,Mp,f),u(o,To,f),e(To,cn),e(cn,Vl),w(Rs,Vl,null),e(To,ng),e(To,Jl),e(Jl,sg),u(o,Ep,f),u(o,He,f),w(Us,He,null),e(He,rg),e(He,Kl),e(Kl,ag),e(He,ig),e(He,Hs),e(Hs,lg),e(Hs,Bi),e(Bi,dg),e(Hs,cg),e(He,pg),e(He,Qs),e(Qs,hg),e(Qs,Vs),e(Vs,ug),e(Qs,mg),e(He,fg),e(He,Ge),w(Js,Ge,null),e(Ge,gg),e(Ge,bo),e(bo,_g),e(bo,Mi),e(Mi,vg),e(bo,Tg),e(bo,Gl),e(Gl,bg),e(bo,kg),e(Ge,wg),w(pn,Ge,null),e(Ge,yg),e(Ge,Xl),e(Xl,$g),e(Ge,Dg),w(Ks,Ge,null),u(o,xp,f),u(o,ko,f),e(ko,hn),e(hn,Yl),w(Gs,Yl,null),e(ko,Fg),e(ko,Zl),e(Zl,Bg),u(o,zp,f),u(o,Qe,f),w(Xs,Qe,null),e(Qe,Mg),e(Qe,wo),e(wo,Eg),e(wo,ed),e(ed,xg),e(wo,zg),e(wo,td),e(td,Cg),e(wo,jg),e(Qe,Pg),e(Qe,Ys),e(Ys,qg),e(Ys,Ei),e(Ei,Ag),e(Ys,Og),e(Qe,Ng),e(Qe,Zs),e(Zs,Lg),e(Zs,er),e(er,Ig),e(Zs,Sg),e(Qe,Wg),e(Qe,Xe),w(tr,Xe,null),e(Xe,Rg),e(Xe,yo),e(yo,Ug),e(yo,xi),e(xi,Hg),e(yo,Qg),e(yo,od),e(od,Vg),e(yo,Jg),e(Xe,Kg),w(un,Xe,null),e(Xe,Gg),e(Xe,nd),e(nd,Xg),e(Xe,Yg),w(or,Xe,null),u(o,Cp,f),u(o,$o,f),e($o,mn),e(mn,sd),w(nr,sd,null),e($o,Zg),e($o,rd),e(rd,e_),u(o,jp,f),u(o,Pe,f),w(sr,Pe,null),e(Pe,t_),e(Pe,ad),e(ad,o_),e(Pe,n_),e(Pe,rr),e(rr,s_),e(rr,zi),e(zi,r_),e(rr,a_),e(Pe,i_),e(Pe,ar),e(ar,l_),e(ar,ir),e(ir,d_),e(ar,c_),e(Pe,p_),w(fn,Pe,null),e(Pe,h_),e(Pe,Ye),w(lr,Ye,null),e(Ye,u_),e(Ye,Do),e(Do,m_),e(Do,Ci),e(Ci,f_),e(Do,g_),e(Do,id),e(id,__),e(Do,v_),e(Ye,T_),w(gn,Ye,null),e(Ye,b_),e(Ye,ld),e(ld,k_),e(Ye,w_),w(dr,Ye,null),u(o,Pp,f),u(o,Fo,f),e(Fo,_n),e(_n,dd),w(cr,dd,null),e(Fo,y_),e(Fo,cd),e(cd,$_),u(o,qp,f),u(o,qe,f),w(pr,qe,null),e(qe,D_),e(qe,hr),e(hr,F_),e(hr,pd),e(pd,B_),e(hr,M_),e(qe,E_),e(qe,ur),e(ur,x_),e(ur,ji),e(ji,z_),e(ur,C_),e(qe,j_),e(qe,mr),e(mr,P_),e(mr,fr),e(fr,q_),e(mr,A_),e(qe,O_),w(vn,qe,null),e(qe,N_),e(qe,Ze),w(gr,Ze,null),e(Ze,L_),e(Ze,Bo),e(Bo,I_),e(Bo,Pi),e(Pi,S_),e(Bo,W_),e(Bo,hd),e(hd,R_),e(Bo,U_),e(Ze,H_),w(Tn,Ze,null),e(Ze,Q_),e(Ze,ud),e(ud,V_),e(Ze,J_),w(_r,Ze,null),u(o,Ap,f),u(o,Mo,f),e(Mo,bn),e(bn,md),w(vr,md,null),e(Mo,K_),e(Mo,fd),e(fd,G_),u(o,Op,f),u(o,Ae,f),w(Tr,Ae,null),e(Ae,X_),e(Ae,gd),e(gd,Y_),e(Ae,Z_),e(Ae,br),e(br,ev),e(br,qi),e(qi,tv),e(br,ov),e(Ae,nv),e(Ae,kr),e(kr,sv),e(kr,wr),e(wr,rv),e(kr,av),e(Ae,iv),w(kn,Ae,null),e(Ae,lv),e(Ae,et),w(yr,et,null),e(et,dv),e(et,Eo),e(Eo,cv),e(Eo,Ai),e(Ai,pv),e(Eo,hv),e(Eo,_d),e(_d,uv),e(Eo,mv),e(et,fv),w(wn,et,null),e(et,gv),e(et,vd),e(vd,_v),e(et,vv),w($r,et,null),u(o,Np,f),u(o,xo,f),e(xo,yn),e(yn,Td),w(Dr,Td,null),e(xo,Tv),e(xo,bd),e(bd,bv),u(o,Lp,f),u(o,Oe,f),w(Fr,Oe,null),e(Oe,kv),e(Oe,kd),e(kd,wv),e(Oe,yv),e(Oe,Br),e(Br,$v),e(Br,Oi),e(Oi,Dv),e(Br,Fv),e(Oe,Bv),e(Oe,Mr),e(Mr,Mv),e(Mr,Er),e(Er,Ev),e(Mr,xv),e(Oe,zv),w($n,Oe,null),e(Oe,Cv),e(Oe,tt),w(xr,tt,null),e(tt,jv),e(tt,zo),e(zo,Pv),e(zo,Ni),e(Ni,qv),e(zo,Av),e(zo,wd),e(wd,Ov),e(zo,Nv),e(tt,Lv),w(Dn,tt,null),e(tt,Iv),e(tt,yd),e(yd,Sv),e(tt,Wv),w(zr,tt,null),u(o,Ip,f),u(o,Co,f),e(Co,Fn),e(Fn,$d),w(Cr,$d,null),e(Co,Rv),e(Co,Dd),e(Dd,Uv),u(o,Sp,f),u(o,Ne,f),w(jr,Ne,null),e(Ne,Hv),e(Ne,Fd),e(Fd,Qv),e(Ne,Vv),e(Ne,Pr),e(Pr,Jv),e(Pr,Li),e(Li,Kv),e(Pr,Gv),e(Ne,Xv),e(Ne,qr),e(qr,Yv),e(qr,Ar),e(Ar,Zv),e(qr,eT),e(Ne,tT),w(Bn,Ne,null),e(Ne,oT),e(Ne,ot),w(Or,ot,null),e(ot,nT),e(ot,jo),e(jo,sT),e(jo,Ii),e(Ii,rT),e(jo,aT),e(jo,Bd),e(Bd,iT),e(jo,lT),e(ot,dT),w(Mn,ot,null),e(ot,cT),e(ot,Md),e(Md,pT),e(ot,hT),w(Nr,ot,null),u(o,Wp,f),u(o,Po,f),e(Po,En),e(En,Ed),w(Lr,Ed,null),e(Po,uT),e(Po,xd),e(xd,mT),u(o,Rp,f),u(o,Le,f),w(Ir,Le,null),e(Le,fT),e(Le,qo),e(qo,gT),e(qo,zd),e(zd,_T),e(qo,vT),e(qo,Cd),e(Cd,TT),e(qo,bT),e(Le,kT),e(Le,Sr),e(Sr,wT),e(Sr,Si),e(Si,yT),e(Sr,$T),e(Le,DT),e(Le,Wr),e(Wr,FT),e(Wr,Rr),e(Rr,BT),e(Wr,MT),e(Le,ET),w(xn,Le,null),e(Le,xT),e(Le,nt),w(Ur,nt,null),e(nt,zT),e(nt,Ao),e(Ao,CT),e(Ao,Wi),e(Wi,jT),e(Ao,PT),e(Ao,jd),e(jd,qT),e(Ao,AT),e(nt,OT),w(zn,nt,null),e(nt,NT),e(nt,Pd),e(Pd,LT),e(nt,IT),w(Hr,nt,null),u(o,Up,f),u(o,Oo,f),e(Oo,Cn),e(Cn,qd),w(Qr,qd,null),e(Oo,ST),e(Oo,Ad),e(Ad,WT),u(o,Hp,f),u(o,Be,f),w(Vr,Be,null),e(Be,RT),e(Be,Od),e(Od,UT),e(Be,HT),e(Be,Jr),e(Jr,QT),e(Jr,Ri),e(Ri,VT),e(Jr,JT),e(Be,KT),e(Be,Kr),e(Kr,GT),e(Kr,Gr),e(Gr,XT),e(Kr,YT),e(Be,ZT),e(Be,Nd),e(Nd,eb),e(Be,tb),e(Be,Bt),e(Bt,Ld),e(Ld,Xr),e(Xr,ob),e(Bt,nb),e(Bt,Id),e(Id,Yr),e(Yr,sb),e(Bt,rb),e(Bt,Sd),e(Sd,Zr),e(Zr,ab),e(Bt,ib),e(Bt,Wd),e(Wd,ea),e(ea,lb),e(Be,db),e(Be,st),w(ta,st,null),e(st,cb),e(st,No),e(No,pb),e(No,Rd),e(Rd,hb),e(No,ub),e(No,Ud),e(Ud,mb),e(No,fb),e(st,gb),w(jn,st,null),e(st,_b),e(st,Hd),e(Hd,vb),e(st,Tb),w(oa,st,null),u(o,Qp,f),u(o,Lo,f),e(Lo,Pn),e(Pn,Qd),w(na,Qd,null),e(Lo,bb),e(Lo,Vd),e(Vd,kb),u(o,Vp,f),u(o,Me,f),w(sa,Me,null),e(Me,wb),e(Me,ra),e(ra,yb),e(ra,Jd),e(Jd,$b),e(ra,Db),e(Me,Fb),e(Me,aa),e(aa,Bb),e(aa,Ui),e(Ui,Mb),e(aa,Eb),e(Me,xb),e(Me,ia),e(ia,zb),e(ia,la),e(la,Cb),e(ia,jb),e(Me,Pb),e(Me,Kd),e(Kd,qb),e(Me,Ab),e(Me,Mt),e(Mt,Gd),e(Gd,da),e(da,Ob),e(Mt,Nb),e(Mt,Xd),e(Xd,ca),e(ca,Lb),e(Mt,Ib),e(Mt,Yd),e(Yd,pa),e(pa,Sb),e(Mt,Wb),e(Mt,Zd),e(Zd,ha),e(ha,Rb),e(Me,Ub),e(Me,rt),w(ua,rt,null),e(rt,Hb),e(rt,Io),e(Io,Qb),e(Io,ec),e(ec,Vb),e(Io,Jb),e(Io,tc),e(tc,Kb),e(Io,Gb),e(rt,Xb),w(qn,rt,null),e(rt,Yb),e(rt,oc),e(oc,Zb),e(rt,ek),w(ma,rt,null),u(o,Jp,f),u(o,So,f),e(So,An),e(An,nc),w(fa,nc,null),e(So,tk),e(So,sc),e(sc,ok),u(o,Kp,f),u(o,Ee,f),w(ga,Ee,null),e(Ee,nk),e(Ee,rc),e(rc,sk),e(Ee,rk),e(Ee,_a),e(_a,ak),e(_a,Hi),e(Hi,ik),e(_a,lk),e(Ee,dk),e(Ee,va),e(va,ck),e(va,Ta),e(Ta,pk),e(va,hk),e(Ee,uk),e(Ee,ac),e(ac,mk),e(Ee,fk),e(Ee,Et),e(Et,ic),e(ic,ba),e(ba,gk),e(Et,_k),e(Et,lc),e(lc,ka),e(ka,vk),e(Et,Tk),e(Et,dc),e(dc,wa),e(wa,bk),e(Et,kk),e(Et,cc),e(cc,ya),e(ya,wk),e(Ee,yk),e(Ee,at),w($a,at,null),e(at,$k),e(at,Wo),e(Wo,Dk),e(Wo,pc),e(pc,Fk),e(Wo,Bk),e(Wo,hc),e(hc,Mk),e(Wo,Ek),e(at,xk),w(On,at,null),e(at,zk),e(at,uc),e(uc,Ck),e(at,jk),w(Da,at,null),u(o,Gp,f),u(o,Ro,f),e(Ro,Nn),e(Nn,mc),w(Fa,mc,null),e(Ro,Pk),e(Ro,fc),e(fc,qk),u(o,Xp,f),u(o,xe,f),w(Ba,xe,null),e(xe,Ak),e(xe,gc),e(gc,Ok),e(xe,Nk),e(xe,Ma),e(Ma,Lk),e(Ma,Qi),e(Qi,Ik),e(Ma,Sk),e(xe,Wk),e(xe,Ea),e(Ea,Rk),e(Ea,xa),e(xa,Uk),e(Ea,Hk),e(xe,Qk),e(xe,_c),e(_c,Vk),e(xe,Jk),e(xe,xt),e(xt,vc),e(vc,za),e(za,Kk),e(xt,Gk),e(xt,Tc),e(Tc,Ca),e(Ca,Xk),e(xt,Yk),e(xt,bc),e(bc,ja),e(ja,Zk),e(xt,ew),e(xt,kc),e(kc,Pa),e(Pa,tw),e(xe,ow),e(xe,it),w(qa,it,null),e(it,nw),e(it,Uo),e(Uo,sw),e(Uo,wc),e(wc,rw),e(Uo,aw),e(Uo,yc),e(yc,iw),e(Uo,lw),e(it,dw),w(Ln,it,null),e(it,cw),e(it,$c),e($c,pw),e(it,hw),w(Aa,it,null),u(o,Yp,f),u(o,Ho,f),e(Ho,In),e(In,Dc),w(Oa,Dc,null),e(Ho,uw),e(Ho,Fc),e(Fc,mw),u(o,Zp,f),u(o,ze,f),w(Na,ze,null),e(ze,fw),e(ze,Bc),e(Bc,gw),e(ze,_w),e(ze,La),e(La,vw),e(La,Vi),e(Vi,Tw),e(La,bw),e(ze,kw),e(ze,Ia),e(Ia,ww),e(Ia,Sa),e(Sa,yw),e(Ia,$w),e(ze,Dw),e(ze,Mc),e(Mc,Fw),e(ze,Bw),e(ze,zt),e(zt,Ec),e(Ec,Wa),e(Wa,Mw),e(zt,Ew),e(zt,xc),e(xc,Ra),e(Ra,xw),e(zt,zw),e(zt,zc),e(zc,Ua),e(Ua,Cw),e(zt,jw),e(zt,Cc),e(Cc,Ha),e(Ha,Pw),e(ze,qw),e(ze,lt),w(Qa,lt,null),e(lt,Aw),e(lt,Qo),e(Qo,Ow),e(Qo,jc),e(jc,Nw),e(Qo,Lw),e(Qo,Pc),e(Pc,Iw),e(Qo,Sw),e(lt,Ww),w(Sn,lt,null),e(lt,Rw),e(lt,qc),e(qc,Uw),e(lt,Hw),w(Va,lt,null),u(o,eh,f),u(o,Vo,f),e(Vo,Wn),e(Wn,Ac),w(Ja,Ac,null),e(Vo,Qw),e(Vo,Oc),e(Oc,Vw),u(o,th,f),u(o,Ce,f),w(Ka,Ce,null),e(Ce,Jw),e(Ce,Jo),e(Jo,Kw),e(Jo,Nc),e(Nc,Gw),e(Jo,Xw),e(Jo,Lc),e(Lc,Yw),e(Jo,Zw),e(Ce,ey),e(Ce,Ga),e(Ga,ty),e(Ga,Ji),e(Ji,oy),e(Ga,ny),e(Ce,sy),e(Ce,Xa),e(Xa,ry),e(Xa,Ya),e(Ya,ay),e(Xa,iy),e(Ce,ly),e(Ce,Ic),e(Ic,dy),e(Ce,cy),e(Ce,Ct),e(Ct,Sc),e(Sc,Za),e(Za,py),e(Ct,hy),e(Ct,Wc),e(Wc,ei),e(ei,uy),e(Ct,my),e(Ct,Rc),e(Rc,ti),e(ti,fy),e(Ct,gy),e(Ct,Uc),e(Uc,oi),e(oi,_y),e(Ce,vy),e(Ce,dt),w(ni,dt,null),e(dt,Ty),e(dt,Ko),e(Ko,by),e(Ko,Hc),e(Hc,ky),e(Ko,wy),e(Ko,Qc),e(Qc,yy),e(Ko,$y),e(dt,Dy),w(Rn,dt,null),e(dt,Fy),e(dt,Vc),e(Vc,By),e(dt,My),w(si,dt,null),oh=!0},p(o,[f]){const ri={};f&2&&(ri.$$scope={dirty:f,ctx:o}),on.$set(ri);const Jc={};f&2&&(Jc.$$scope={dirty:f,ctx:o}),sn.$set(Jc);const Kc={};f&2&&(Kc.$$scope={dirty:f,ctx:o}),an.$set(Kc);const Gc={};f&2&&(Gc.$$scope={dirty:f,ctx:o}),dn.$set(Gc);const ai={};f&2&&(ai.$$scope={dirty:f,ctx:o}),pn.$set(ai);const Xc={};f&2&&(Xc.$$scope={dirty:f,ctx:o}),un.$set(Xc);const Yc={};f&2&&(Yc.$$scope={dirty:f,ctx:o}),fn.$set(Yc);const Zc={};f&2&&(Zc.$$scope={dirty:f,ctx:o}),gn.$set(Zc);const jt={};f&2&&(jt.$$scope={dirty:f,ctx:o}),vn.$set(jt);const ep={};f&2&&(ep.$$scope={dirty:f,ctx:o}),Tn.$set(ep);const tp={};f&2&&(tp.$$scope={dirty:f,ctx:o}),kn.$set(tp);const op={};f&2&&(op.$$scope={dirty:f,ctx:o}),wn.$set(op);const np={};f&2&&(np.$$scope={dirty:f,ctx:o}),$n.$set(np);const sp={};f&2&&(sp.$$scope={dirty:f,ctx:o}),Dn.$set(sp);const rp={};f&2&&(rp.$$scope={dirty:f,ctx:o}),Bn.$set(rp);const ap={};f&2&&(ap.$$scope={dirty:f,ctx:o}),Mn.$set(ap);const ii={};f&2&&(ii.$$scope={dirty:f,ctx:o}),xn.$set(ii);const Pt={};f&2&&(Pt.$$scope={dirty:f,ctx:o}),zn.$set(Pt);const ip={};f&2&&(ip.$$scope={dirty:f,ctx:o}),jn.$set(ip);const lp={};f&2&&(lp.$$scope={dirty:f,ctx:o}),qn.$set(lp);const dp={};f&2&&(dp.$$scope={dirty:f,ctx:o}),On.$set(dp);const li={};f&2&&(li.$$scope={dirty:f,ctx:o}),Ln.$set(li);const cp={};f&2&&(cp.$$scope={dirty:f,ctx:o}),Sn.$set(cp);const qt={};f&2&&(qt.$$scope={dirty:f,ctx:o}),Rn.$set(qt)},i(o){oh||(y(_.$$.fragment,o),y(X.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(us.$$.fragment,o),y(ms.$$.fragment,o),y(vs.$$.fragment,o),y(on.$$.fragment,o),y(Ts.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(Fs.$$.fragment,o),y(sn.$$.fragment,o),y(Bs.$$.fragment,o),y(Ms.$$.fragment,o),y(Es.$$.fragment,o),y(js.$$.fragment,o),y(an.$$.fragment,o),y(Ps.$$.fragment,o),y(qs.$$.fragment,o),y(As.$$.fragment,o),y(Os.$$.fragment,o),y(Ss.$$.fragment,o),y(dn.$$.fragment,o),y(Ws.$$.fragment,o),y(Rs.$$.fragment,o),y(Us.$$.fragment,o),y(Js.$$.fragment,o),y(pn.$$.fragment,o),y(Ks.$$.fragment,o),y(Gs.$$.fragment,o),y(Xs.$$.fragment,o),y(tr.$$.fragment,o),y(un.$$.fragment,o),y(or.$$.fragment,o),y(nr.$$.fragment,o),y(sr.$$.fragment,o),y(fn.$$.fragment,o),y(lr.$$.fragment,o),y(gn.$$.fragment,o),y(dr.$$.fragment,o),y(cr.$$.fragment,o),y(pr.$$.fragment,o),y(vn.$$.fragment,o),y(gr.$$.fragment,o),y(Tn.$$.fragment,o),y(_r.$$.fragment,o),y(vr.$$.fragment,o),y(Tr.$$.fragment,o),y(kn.$$.fragment,o),y(yr.$$.fragment,o),y(wn.$$.fragment,o),y($r.$$.fragment,o),y(Dr.$$.fragment,o),y(Fr.$$.fragment,o),y($n.$$.fragment,o),y(xr.$$.fragment,o),y(Dn.$$.fragment,o),y(zr.$$.fragment,o),y(Cr.$$.fragment,o),y(jr.$$.fragment,o),y(Bn.$$.fragment,o),y(Or.$$.fragment,o),y(Mn.$$.fragment,o),y(Nr.$$.fragment,o),y(Lr.$$.fragment,o),y(Ir.$$.fragment,o),y(xn.$$.fragment,o),y(Ur.$$.fragment,o),y(zn.$$.fragment,o),y(Hr.$$.fragment,o),y(Qr.$$.fragment,o),y(Vr.$$.fragment,o),y(ta.$$.fragment,o),y(jn.$$.fragment,o),y(oa.$$.fragment,o),y(na.$$.fragment,o),y(sa.$$.fragment,o),y(ua.$$.fragment,o),y(qn.$$.fragment,o),y(ma.$$.fragment,o),y(fa.$$.fragment,o),y(ga.$$.fragment,o),y($a.$$.fragment,o),y(On.$$.fragment,o),y(Da.$$.fragment,o),y(Fa.$$.fragment,o),y(Ba.$$.fragment,o),y(qa.$$.fragment,o),y(Ln.$$.fragment,o),y(Aa.$$.fragment,o),y(Oa.$$.fragment,o),y(Na.$$.fragment,o),y(Qa.$$.fragment,o),y(Sn.$$.fragment,o),y(Va.$$.fragment,o),y(Ja.$$.fragment,o),y(Ka.$$.fragment,o),y(ni.$$.fragment,o),y(Rn.$$.fragment,o),y(si.$$.fragment,o),oh=!0)},o(o){$(_.$$.fragment,o),$(X.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(us.$$.fragment,o),$(ms.$$.fragment,o),$(vs.$$.fragment,o),$(on.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(Fs.$$.fragment,o),$(sn.$$.fragment,o),$(Bs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(js.$$.fragment,o),$(an.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(As.$$.fragment,o),$(Os.$$.fragment,o),$(Ss.$$.fragment,o),$(dn.$$.fragment,o),$(Ws.$$.fragment,o),$(Rs.$$.fragment,o),$(Us.$$.fragment,o),$(Js.$$.fragment,o),$(pn.$$.fragment,o),$(Ks.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(tr.$$.fragment,o),$(un.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(fn.$$.fragment,o),$(lr.$$.fragment,o),$(gn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(vn.$$.fragment,o),$(gr.$$.fragment,o),$(Tn.$$.fragment,o),$(_r.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(kn.$$.fragment,o),$(yr.$$.fragment,o),$(wn.$$.fragment,o),$($r.$$.fragment,o),$(Dr.$$.fragment,o),$(Fr.$$.fragment,o),$($n.$$.fragment,o),$(xr.$$.fragment,o),$(Dn.$$.fragment,o),$(zr.$$.fragment,o),$(Cr.$$.fragment,o),$(jr.$$.fragment,o),$(Bn.$$.fragment,o),$(Or.$$.fragment,o),$(Mn.$$.fragment,o),$(Nr.$$.fragment,o),$(Lr.$$.fragment,o),$(Ir.$$.fragment,o),$(xn.$$.fragment,o),$(Ur.$$.fragment,o),$(zn.$$.fragment,o),$(Hr.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(ta.$$.fragment,o),$(jn.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(ua.$$.fragment,o),$(qn.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),$($a.$$.fragment,o),$(On.$$.fragment,o),$(Da.$$.fragment,o),$(Fa.$$.fragment,o),$(Ba.$$.fragment,o),$(qa.$$.fragment,o),$(Ln.$$.fragment,o),$(Aa.$$.fragment,o),$(Oa.$$.fragment,o),$(Na.$$.fragment,o),$(Qa.$$.fragment,o),$(Sn.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Ka.$$.fragment,o),$(ni.$$.fragment,o),$(Rn.$$.fragment,o),$(si.$$.fragment,o),oh=!1},d(o){t(p),o&&t(F),o&&t(g),D(_),o&&t(V),o&&t(E),D(X),o&&t(re),o&&t(N),o&&t(ae),o&&t(ee),o&&t(ie),o&&t(L),o&&t(P),o&&t(te),o&&t(le),o&&t(h),o&&t(up),o&&t(Tt),o&&t(mp),o&&t(ao),D(os),o&&t(fp),o&&t(Ie),D(ns),D(rs),o&&t(gp),o&&t(lo),D(as),o&&t(_p),o&&t(_t),D(is),o&&t(vp),o&&t(co),D(ds),o&&t(Tp),o&&t(vt),D(cs),o&&t(bp),o&&t(po),D(us),o&&t(kp),o&&t(Se),D(ms),D(vs),D(on),D(Ts),o&&t(wp),o&&t(uo),D(bs),o&&t(yp),o&&t(We),D(ks),D(Fs),D(sn),D(Bs),o&&t($p),o&&t(fo),D(Ms),o&&t(Dp),o&&t(Re),D(Es),D(js),D(an),D(Ps),D(qs),o&&t(Fp),o&&t(_o),D(As),o&&t(Bp),o&&t(Ue),D(Os),D(Ss),D(dn),D(Ws),o&&t(Mp),o&&t(To),D(Rs),o&&t(Ep),o&&t(He),D(Us),D(Js),D(pn),D(Ks),o&&t(xp),o&&t(ko),D(Gs),o&&t(zp),o&&t(Qe),D(Xs),D(tr),D(un),D(or),o&&t(Cp),o&&t($o),D(nr),o&&t(jp),o&&t(Pe),D(sr),D(fn),D(lr),D(gn),D(dr),o&&t(Pp),o&&t(Fo),D(cr),o&&t(qp),o&&t(qe),D(pr),D(vn),D(gr),D(Tn),D(_r),o&&t(Ap),o&&t(Mo),D(vr),o&&t(Op),o&&t(Ae),D(Tr),D(kn),D(yr),D(wn),D($r),o&&t(Np),o&&t(xo),D(Dr),o&&t(Lp),o&&t(Oe),D(Fr),D($n),D(xr),D(Dn),D(zr),o&&t(Ip),o&&t(Co),D(Cr),o&&t(Sp),o&&t(Ne),D(jr),D(Bn),D(Or),D(Mn),D(Nr),o&&t(Wp),o&&t(Po),D(Lr),o&&t(Rp),o&&t(Le),D(Ir),D(xn),D(Ur),D(zn),D(Hr),o&&t(Up),o&&t(Oo),D(Qr),o&&t(Hp),o&&t(Be),D(Vr),D(ta),D(jn),D(oa),o&&t(Qp),o&&t(Lo),D(na),o&&t(Vp),o&&t(Me),D(sa),D(ua),D(qn),D(ma),o&&t(Jp),o&&t(So),D(fa),o&&t(Kp),o&&t(Ee),D(ga),D($a),D(On),D(Da),o&&t(Gp),o&&t(Ro),D(Fa),o&&t(Xp),o&&t(xe),D(Ba),D(qa),D(Ln),D(Aa),o&&t(Yp),o&&t(Ho),D(Oa),o&&t(Zp),o&&t(ze),D(Na),D(Qa),D(Sn),D(Va),o&&t(eh),o&&t(Vo),D(Ja),o&&t(th),o&&t(Ce),D(Ka),D(ni),D(Rn),D(si)}}}const q2={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function A2(C){return d2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W2 extends r2{constructor(p){super();a2(this,p,A2,P2,i2,{})}}export{W2 as default,q2 as metadata};
