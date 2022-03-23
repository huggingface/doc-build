import{S as fF,i as gF,s as _F,e as n,k as l,w as b,t as a,M as vF,c as s,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as w,q as y,o as $,B as D,v as TF}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as fe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function bF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function kF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function wF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function yF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $F(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function DF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function FF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),L=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(K),B=s(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=s(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=s(h,"UL",{});var C=r(x);z=s(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=s(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s(Z,"CODE",{});var Fe=r(I);ne=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=s(C,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),se.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function BF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function MF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),L=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(K),B=s(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=s(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=s(h,"UL",{});var C=r(x);z=s(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=s(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s(Z,"CODE",{});var Fe=r(I);ne=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=s(C,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),se.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function EF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function xF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),L=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(K),B=s(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=s(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=s(h,"UL",{});var C=r(x);z=s(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=s(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s(Z,"CODE",{});var Fe=r(I);ne=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=s(C,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),se.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function zF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function jF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),L=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(K),B=s(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=s(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=s(h,"UL",{});var C=r(x);z=s(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=s(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s(Z,"CODE",{});var Fe=r(I);ne=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=s(C,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),se.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function CF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function PF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),L=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(K),B=s(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=s(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=s(h,"UL",{});var C=r(x);z=s(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=s(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s(Z,"CODE",{});var Fe=r(I);ne=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=s(C,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),se.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function qF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function AF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le;return{c(){p=n("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=n("ul"),T=n("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=n("p"),G=a("This second option is useful when using "),L=n("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=n("ul"),z=n("li"),he=a("a single Tensor with "),W=n("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),ee=l(),A=n("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n("code"),ne=a("model([input_ids, attention_mask])"),me=l(),P=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),le=a('model({"input_ids": input_ids})')},l(h){p=s(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=s(h,"UL",{});var K=r(v);T=s(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(K),B=s(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=s(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=s(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=s(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=s(h,"UL",{});var C=r(x);z=s(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=s(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=s(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=s(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s(Z,"CODE",{});var Fe=r(I);ne=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=s(C,"LI",{});var se=r(P);te=i(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(se,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),se.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,m),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,ne),e(x,me),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function OF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function NF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function IF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function LF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function SF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function WF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function RF(j){let p,F,g,v,T;return{c(){p=n("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var m=r(p);F=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function UF(j){let p,F,g,v,T,_,m,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,ne,me,P,te,U,le,h,M,K,_e,ke,O,ve,we,ye,C,H,$e,De,Z,Fe,se,Be,_u,vp,Tt,vu,Zn,Tu,bu,es,ku,wu,ts,yu,$u,Tp,ao,Go,wl,os,Du,yl,Fu,bp,Ue,ns,Bu,Et,Mu,mi,Eu,xu,fi,zu,ju,ss,Cu,Pu,qu,io,Au,gi,Ou,Nu,_i,Iu,Lu,Su,$l,Wu,Ru,rs,kp,lo,Xo,Dl,as,Uu,Fl,Hu,wp,_t,is,Qu,Bl,Vu,Ju,Yo,vi,Ku,Gu,Ti,Xu,Yu,Zu,ls,em,bi,tm,om,yp,co,Zo,Ml,ds,nm,El,sm,$p,vt,cs,rm,ps,am,xl,im,lm,dm,en,ki,cm,pm,wi,hm,um,mm,hs,fm,yi,gm,_m,Dp,po,tn,zl,us,vm,jl,Tm,Fp,He,ms,bm,Cl,km,wm,fs,ym,$i,$m,Dm,Fm,gs,Bm,_s,Mm,Em,xm,Xe,vs,zm,ho,jm,Di,Cm,Pm,Pl,qm,Am,Om,on,Nm,ql,Im,Lm,Ts,Bp,uo,nn,Al,bs,Sm,Ol,Wm,Mp,Qe,ks,Rm,ws,Um,Nl,Hm,Qm,Vm,ys,Jm,Fi,Km,Gm,Xm,$s,Ym,Ds,Zm,ef,tf,Se,Fs,of,mo,nf,Bi,sf,rf,Il,af,lf,df,sn,cf,Ll,pf,hf,Bs,uf,Ms,Ep,fo,rn,Sl,Es,mf,Wl,ff,xp,Ve,xs,gf,Rl,_f,vf,zs,Tf,Mi,bf,kf,wf,js,yf,Cs,$f,Df,Ff,be,Ps,Bf,go,Mf,Ei,Ef,xf,Ul,zf,jf,Cf,an,Pf,Hl,qf,Af,qs,Of,As,Nf,Ql,If,Lf,Os,Sf,Ns,zp,_o,ln,Vl,Is,Wf,Jl,Rf,jp,Je,Ls,Uf,Kl,Hf,Qf,Ss,Vf,xi,Jf,Kf,Gf,Ws,Xf,Rs,Yf,Zf,eg,Ye,Us,tg,vo,og,zi,ng,sg,Gl,rg,ag,ig,dn,lg,Xl,dg,cg,Hs,Cp,To,cn,Yl,Qs,pg,Zl,hg,Pp,Ke,Vs,ug,ed,mg,fg,Js,gg,ji,_g,vg,Tg,Ks,bg,Gs,kg,wg,yg,We,Xs,$g,bo,Dg,Ci,Fg,Bg,td,Mg,Eg,xg,pn,zg,od,jg,Cg,Ys,Pg,Zs,qp,ko,hn,nd,er,qg,sd,Ag,Ap,Ge,tr,Og,wo,Ng,rd,Ig,Lg,ad,Sg,Wg,Rg,or,Ug,Pi,Hg,Qg,Vg,nr,Jg,sr,Kg,Gg,Xg,Re,rr,Yg,yo,Zg,qi,e_,t_,id,o_,n_,s_,un,r_,ld,a_,i_,ar,l_,ir,Op,$o,mn,dd,lr,d_,cd,c_,Np,qe,dr,p_,pd,h_,u_,cr,m_,Ai,f_,g_,__,pr,v_,hr,T_,b_,k_,fn,w_,Ze,ur,y_,Do,$_,Oi,D_,F_,hd,B_,M_,E_,gn,x_,ud,z_,j_,mr,Ip,Fo,_n,md,fr,C_,fd,P_,Lp,Ae,gr,q_,_r,A_,gd,O_,N_,I_,vr,L_,Ni,S_,W_,R_,Tr,U_,br,H_,Q_,V_,vn,J_,et,kr,K_,Bo,G_,Ii,X_,Y_,_d,Z_,ev,tv,Tn,ov,vd,nv,sv,wr,Sp,Mo,bn,Td,yr,rv,bd,av,Wp,Oe,$r,iv,kd,lv,dv,Dr,cv,Li,pv,hv,uv,Fr,mv,Br,fv,gv,_v,kn,vv,tt,Mr,Tv,Eo,bv,Si,kv,wv,wd,yv,$v,Dv,wn,Fv,yd,Bv,Mv,Er,Rp,xo,yn,$d,xr,Ev,Dd,xv,Up,Ne,zr,zv,Fd,jv,Cv,jr,Pv,Wi,qv,Av,Ov,Cr,Nv,Pr,Iv,Lv,Sv,$n,Wv,ot,qr,Rv,zo,Uv,Ri,Hv,Qv,Bd,Vv,Jv,Kv,Dn,Gv,Md,Xv,Yv,Ar,Hp,jo,Fn,Ed,Or,Zv,xd,eT,Qp,Ie,Nr,tT,zd,oT,nT,Ir,sT,Ui,rT,aT,iT,Lr,lT,Sr,dT,cT,pT,Bn,hT,nt,Wr,uT,Co,mT,Hi,fT,gT,jd,_T,vT,TT,Mn,bT,Cd,kT,wT,Rr,Vp,Po,En,Pd,Ur,yT,qd,$T,Jp,Le,Hr,DT,qo,FT,Ad,BT,MT,Od,ET,xT,zT,Qr,jT,Qi,CT,PT,qT,Vr,AT,Jr,OT,NT,IT,xn,LT,st,Kr,ST,Ao,WT,Vi,RT,UT,Nd,HT,QT,VT,zn,JT,Id,KT,GT,Gr,Kp,Oo,jn,Ld,Xr,XT,Sd,YT,Gp,Me,Yr,ZT,Wd,eb,tb,Zr,ob,Ji,nb,sb,rb,ea,ab,ta,ib,lb,db,Rd,cb,pb,xt,Ud,oa,hb,ub,Hd,na,mb,fb,Qd,sa,gb,_b,Vd,ra,vb,Tb,rt,aa,bb,No,kb,Jd,wb,yb,Kd,$b,Db,Fb,Cn,Bb,Gd,Mb,Eb,ia,Xp,Io,Pn,Xd,la,xb,Yd,zb,Yp,Ee,da,jb,ca,Cb,Zd,Pb,qb,Ab,pa,Ob,Ki,Nb,Ib,Lb,ha,Sb,ua,Wb,Rb,Ub,ec,Hb,Qb,zt,tc,ma,Vb,Jb,oc,fa,Kb,Gb,nc,ga,Xb,Yb,sc,_a,Zb,ek,at,va,tk,Lo,ok,rc,nk,sk,ac,rk,ak,ik,qn,lk,ic,dk,ck,Ta,Zp,So,An,lc,ba,pk,dc,hk,eh,xe,ka,uk,cc,mk,fk,wa,gk,Gi,_k,vk,Tk,ya,bk,$a,kk,wk,yk,pc,$k,Dk,jt,hc,Da,Fk,Bk,uc,Fa,Mk,Ek,mc,Ba,xk,zk,fc,Ma,jk,Ck,it,Ea,Pk,Wo,qk,gc,Ak,Ok,_c,Nk,Ik,Lk,On,Sk,vc,Wk,Rk,xa,th,Ro,Nn,Tc,za,Uk,bc,Hk,oh,ze,ja,Qk,kc,Vk,Jk,Ca,Kk,Xi,Gk,Xk,Yk,Pa,Zk,qa,ew,tw,ow,wc,nw,sw,Ct,yc,Aa,rw,aw,$c,Oa,iw,lw,Dc,Na,dw,cw,Fc,Ia,pw,hw,lt,La,uw,Uo,mw,Bc,fw,gw,Mc,_w,vw,Tw,In,bw,Ec,kw,ww,Sa,nh,Ho,Ln,xc,Wa,yw,zc,$w,sh,je,Ra,Dw,jc,Fw,Bw,Ua,Mw,Yi,Ew,xw,zw,Ha,jw,Qa,Cw,Pw,qw,Cc,Aw,Ow,Pt,Pc,Va,Nw,Iw,qc,Ja,Lw,Sw,Ac,Ka,Ww,Rw,Oc,Ga,Uw,Hw,dt,Xa,Qw,Qo,Vw,Nc,Jw,Kw,Ic,Gw,Xw,Yw,Sn,Zw,Lc,ey,ty,Ya,rh,Vo,Wn,Sc,Za,oy,Wc,ny,ah,Ce,ei,sy,Jo,ry,Rc,ay,iy,Uc,ly,dy,cy,ti,py,Zi,hy,uy,my,oi,fy,ni,gy,_y,vy,Hc,Ty,by,qt,Qc,si,ky,wy,Vc,ri,yy,$y,Jc,ai,Dy,Fy,Kc,ii,By,My,ct,li,Ey,Ko,xy,Gc,zy,jy,Xc,Cy,Py,qy,Rn,Ay,Yc,Oy,Ny,di,ih;return _=new Te({}),X=new Te({}),os=new Te({}),ns=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),rs=new fe({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),as=new Te({}),is=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),ds=new Te({}),cs=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),us=new Te({}),ms=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),on=new ge({props:{$$slots:{default:[bF]},$$scope:{ctx:j}}}),Ts=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bs=new Te({}),ks=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),sn=new ge({props:{$$slots:{default:[kF]},$$scope:{ctx:j}}}),Bs=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Ms=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),Es=new Te({}),xs=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ps=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),an=new ge({props:{$$slots:{default:[wF]},$$scope:{ctx:j}}}),qs=new fe({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),As=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Os=new fe({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Ns=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Is=new Te({}),Ls=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Us=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),dn=new ge({props:{$$slots:{default:[yF]},$$scope:{ctx:j}}}),Hs=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qs=new Te({}),Vs=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xs=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),pn=new ge({props:{$$slots:{default:[$F]},$$scope:{ctx:j}}}),Ys=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Zs=new fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),er=new Te({}),tr=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),un=new ge({props:{$$slots:{default:[DF]},$$scope:{ctx:j}}}),ar=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),ir=new fe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),lr=new Te({}),dr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new ge({props:{$$slots:{default:[FF]},$$scope:{ctx:j}}}),ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
`}}),gn=new ge({props:{$$slots:{default:[BF]},$$scope:{ctx:j}}}),mr=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),fr=new Te({}),gr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new ge({props:{$$slots:{default:[MF]},$$scope:{ctx:j}}}),kr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
`}}),Tn=new ge({props:{$$slots:{default:[EF]},$$scope:{ctx:j}}}),wr=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yr=new Te({}),$r=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L742",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new ge({props:{$$slots:{default:[xF]},$$scope:{ctx:j}}}),Mr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L759",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
`}}),wn=new ge({props:{$$slots:{default:[zF]},$$scope:{ctx:j}}}),Er=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xr=new Te({}),zr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L933",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$n=new ge({props:{$$slots:{default:[jF]},$$scope:{ctx:j}}}),qr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L959",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
`}}),Dn=new ge({props:{$$slots:{default:[CF]},$$scope:{ctx:j}}}),Ar=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Or=new Te({}),Nr=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L843",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bn=new ge({props:{$$slots:{default:[PF]},$$scope:{ctx:j}}}),Wr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L854",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
`}}),Mn=new ge({props:{$$slots:{default:[qF]},$$scope:{ctx:j}}}),Rr=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ur=new Te({}),Hr=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1075",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xn=new ge({props:{$$slots:{default:[AF]},$$scope:{ctx:j}}}),Kr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1086",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
`}}),zn=new ge({props:{$$slots:{default:[OF]},$$scope:{ctx:j}}}),Gr=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Xr=new Te({}),Yr=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),aa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),Cn=new ge({props:{$$slots:{default:[NF]},$$scope:{ctx:j}}}),ia=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),la=new Te({}),da=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),va=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),qn=new ge({props:{$$slots:{default:[IF]},$$scope:{ctx:j}}}),Ta=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ba=new Te({}),ka=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ea=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),On=new ge({props:{$$slots:{default:[LF]},$$scope:{ctx:j}}}),xa=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),za=new Te({}),ja=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),La=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),In=new ge({props:{$$slots:{default:[SF]},$$scope:{ctx:j}}}),Sa=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Wa=new Te({}),Ra=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),Sn=new ge({props:{$$slots:{default:[WF]},$$scope:{ctx:j}}}),Ya=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Za=new Te({}),ei=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),li=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),Rn=new ge({props:{$$slots:{default:[RF]},$$scope:{ctx:j}}}),di=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=n("meta"),F=l(),g=n("h1"),v=n("a"),T=n("span"),b(_.$$.fragment),m=l(),B=n("span"),de=a("DistilBERT"),V=l(),E=n("h2"),G=n("a"),L=n("span"),b(X.$$.fragment),ce=l(),S=n("span"),pe=a("Overview"),re=l(),N=n("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=n("a"),J=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=n("a"),he=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=n("p"),A=a("The abstract from the paper is the following:"),ie=l(),I=n("p"),ne=n("em"),me=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=n("p"),U=a("Tips:"),le=l(),h=n("ul"),M=n("li"),K=a("DistilBERT doesn\u2019t have "),_e=n("code"),ke=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=n("code"),H=a("[SEP]"),$e=a(")."),De=l(),Z=n("li"),Fe=a("DistilBERT doesn\u2019t have options to select the input positions ("),se=n("code"),Be=a("position_ids"),_u=a(` input). This could be added if
necessary though, just let us know if you need this option.`),vp=l(),Tt=n("p"),vu=a("This model was contributed by "),Zn=n("a"),Tu=a("victorsanh"),bu=a(`. This model jax version was
contributed by `),es=n("a"),ku=a("kamalkraj"),wu=a(". The original code can be found "),ts=n("a"),yu=a("here"),$u=a("."),Tp=l(),ao=n("h2"),Go=n("a"),wl=n("span"),b(os.$$.fragment),Du=l(),yl=n("span"),Fu=a("DistilBertConfig"),bp=l(),Ue=n("div"),b(ns.$$.fragment),Bu=l(),Et=n("p"),Mu=a("This is the configuration class to store the configuration of a "),mi=n("a"),Eu=a("DistilBertModel"),xu=a(" or a "),fi=n("a"),zu=a("TFDistilBertModel"),ju=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),ss=n("a"),Cu=a("distilbert-base-uncased"),Pu=a(" architecture."),qu=l(),io=n("p"),Au=a("Configuration objects inherit from "),gi=n("a"),Ou=a("PretrainedConfig"),Nu=a(` and can be used to control the model outputs. Read the
documentation from `),_i=n("a"),Iu=a("PretrainedConfig"),Lu=a(" for more information."),Su=l(),$l=n("p"),Wu=a("Examples:"),Ru=l(),b(rs.$$.fragment),kp=l(),lo=n("h2"),Xo=n("a"),Dl=n("span"),b(as.$$.fragment),Uu=l(),Fl=n("span"),Hu=a("DistilBertTokenizer"),wp=l(),_t=n("div"),b(is.$$.fragment),Qu=l(),Bl=n("p"),Vu=a("Construct a DistilBERT tokenizer."),Ju=l(),Yo=n("p"),vi=n("a"),Ku=a("DistilBertTokenizer"),Gu=a(" is identical to "),Ti=n("a"),Xu=a("BertTokenizer"),Yu=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Zu=l(),ls=n("p"),em=a("Refer to superclass "),bi=n("a"),tm=a("BertTokenizer"),om=a(" for usage examples and documentation concerning parameters."),yp=l(),co=n("h2"),Zo=n("a"),Ml=n("span"),b(ds.$$.fragment),nm=l(),El=n("span"),sm=a("DistilBertTokenizerFast"),$p=l(),vt=n("div"),b(cs.$$.fragment),rm=l(),ps=n("p"),am=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),xl=n("em"),im=a("tokenizers"),lm=a(" library)."),dm=l(),en=n("p"),ki=n("a"),cm=a("DistilBertTokenizerFast"),pm=a(" is identical to "),wi=n("a"),hm=a("BertTokenizerFast"),um=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),mm=l(),hs=n("p"),fm=a("Refer to superclass "),yi=n("a"),gm=a("BertTokenizerFast"),_m=a(" for usage examples and documentation concerning parameters."),Dp=l(),po=n("h2"),tn=n("a"),zl=n("span"),b(us.$$.fragment),vm=l(),jl=n("span"),Tm=a("DistilBertModel"),Fp=l(),He=n("div"),b(ms.$$.fragment),bm=l(),Cl=n("p"),km=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),wm=l(),fs=n("p"),ym=a("This model inherits from "),$i=n("a"),$m=a("PreTrainedModel"),Dm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fm=l(),gs=n("p"),Bm=a("This model is also a PyTorch "),_s=n("a"),Mm=a("torch.nn.Module"),Em=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xm=l(),Xe=n("div"),b(vs.$$.fragment),zm=l(),ho=n("p"),jm=a("The "),Di=n("a"),Cm=a("DistilBertModel"),Pm=a(" forward method, overrides the "),Pl=n("code"),qm=a("__call__"),Am=a(" special method."),Om=l(),b(on.$$.fragment),Nm=l(),ql=n("p"),Im=a("Example:"),Lm=l(),b(Ts.$$.fragment),Bp=l(),uo=n("h2"),nn=n("a"),Al=n("span"),b(bs.$$.fragment),Sm=l(),Ol=n("span"),Wm=a("DistilBertForMaskedLM"),Mp=l(),Qe=n("div"),b(ks.$$.fragment),Rm=l(),ws=n("p"),Um=a("DistilBert Model with a "),Nl=n("code"),Hm=a("masked language modeling"),Qm=a(" head on top."),Vm=l(),ys=n("p"),Jm=a("This model inherits from "),Fi=n("a"),Km=a("PreTrainedModel"),Gm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xm=l(),$s=n("p"),Ym=a("This model is also a PyTorch "),Ds=n("a"),Zm=a("torch.nn.Module"),ef=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tf=l(),Se=n("div"),b(Fs.$$.fragment),of=l(),mo=n("p"),nf=a("The "),Bi=n("a"),sf=a("DistilBertForMaskedLM"),rf=a(" forward method, overrides the "),Il=n("code"),af=a("__call__"),lf=a(" special method."),df=l(),b(sn.$$.fragment),cf=l(),Ll=n("p"),pf=a("Example:"),hf=l(),b(Bs.$$.fragment),uf=l(),b(Ms.$$.fragment),Ep=l(),fo=n("h2"),rn=n("a"),Sl=n("span"),b(Es.$$.fragment),mf=l(),Wl=n("span"),ff=a("DistilBertForSequenceClassification"),xp=l(),Ve=n("div"),b(xs.$$.fragment),gf=l(),Rl=n("p"),_f=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vf=l(),zs=n("p"),Tf=a("This model inherits from "),Mi=n("a"),bf=a("PreTrainedModel"),kf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wf=l(),js=n("p"),yf=a("This model is also a PyTorch "),Cs=n("a"),$f=a("torch.nn.Module"),Df=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff=l(),be=n("div"),b(Ps.$$.fragment),Bf=l(),go=n("p"),Mf=a("The "),Ei=n("a"),Ef=a("DistilBertForSequenceClassification"),xf=a(" forward method, overrides the "),Ul=n("code"),zf=a("__call__"),jf=a(" special method."),Cf=l(),b(an.$$.fragment),Pf=l(),Hl=n("p"),qf=a("Example of single-label classification:"),Af=l(),b(qs.$$.fragment),Of=l(),b(As.$$.fragment),Nf=l(),Ql=n("p"),If=a("Example of multi-label classification:"),Lf=l(),b(Os.$$.fragment),Sf=l(),b(Ns.$$.fragment),zp=l(),_o=n("h2"),ln=n("a"),Vl=n("span"),b(Is.$$.fragment),Wf=l(),Jl=n("span"),Rf=a("DistilBertForMultipleChoice"),jp=l(),Je=n("div"),b(Ls.$$.fragment),Uf=l(),Kl=n("p"),Hf=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Qf=l(),Ss=n("p"),Vf=a("This model inherits from "),xi=n("a"),Jf=a("PreTrainedModel"),Kf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf=l(),Ws=n("p"),Xf=a("This model is also a PyTorch "),Rs=n("a"),Yf=a("torch.nn.Module"),Zf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg=l(),Ye=n("div"),b(Us.$$.fragment),tg=l(),vo=n("p"),og=a("The "),zi=n("a"),ng=a("DistilBertForMultipleChoice"),sg=a(" forward method, overrides the "),Gl=n("code"),rg=a("__call__"),ag=a(" special method."),ig=l(),b(dn.$$.fragment),lg=l(),Xl=n("p"),dg=a("Examples:"),cg=l(),b(Hs.$$.fragment),Cp=l(),To=n("h2"),cn=n("a"),Yl=n("span"),b(Qs.$$.fragment),pg=l(),Zl=n("span"),hg=a("DistilBertForTokenClassification"),Pp=l(),Ke=n("div"),b(Vs.$$.fragment),ug=l(),ed=n("p"),mg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),fg=l(),Js=n("p"),gg=a("This model inherits from "),ji=n("a"),_g=a("PreTrainedModel"),vg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg=l(),Ks=n("p"),bg=a("This model is also a PyTorch "),Gs=n("a"),kg=a("torch.nn.Module"),wg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yg=l(),We=n("div"),b(Xs.$$.fragment),$g=l(),bo=n("p"),Dg=a("The "),Ci=n("a"),Fg=a("DistilBertForTokenClassification"),Bg=a(" forward method, overrides the "),td=n("code"),Mg=a("__call__"),Eg=a(" special method."),xg=l(),b(pn.$$.fragment),zg=l(),od=n("p"),jg=a("Example:"),Cg=l(),b(Ys.$$.fragment),Pg=l(),b(Zs.$$.fragment),qp=l(),ko=n("h2"),hn=n("a"),nd=n("span"),b(er.$$.fragment),qg=l(),sd=n("span"),Ag=a("DistilBertForQuestionAnswering"),Ap=l(),Ge=n("div"),b(tr.$$.fragment),Og=l(),wo=n("p"),Ng=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),rd=n("code"),Ig=a("span start logits"),Lg=a(" and "),ad=n("code"),Sg=a("span end logits"),Wg=a(")."),Rg=l(),or=n("p"),Ug=a("This model inherits from "),Pi=n("a"),Hg=a("PreTrainedModel"),Qg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vg=l(),nr=n("p"),Jg=a("This model is also a PyTorch "),sr=n("a"),Kg=a("torch.nn.Module"),Gg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xg=l(),Re=n("div"),b(rr.$$.fragment),Yg=l(),yo=n("p"),Zg=a("The "),qi=n("a"),e_=a("DistilBertForQuestionAnswering"),t_=a(" forward method, overrides the "),id=n("code"),o_=a("__call__"),n_=a(" special method."),s_=l(),b(un.$$.fragment),r_=l(),ld=n("p"),a_=a("Example:"),i_=l(),b(ar.$$.fragment),l_=l(),b(ir.$$.fragment),Op=l(),$o=n("h2"),mn=n("a"),dd=n("span"),b(lr.$$.fragment),d_=l(),cd=n("span"),c_=a("TFDistilBertModel"),Np=l(),qe=n("div"),b(dr.$$.fragment),p_=l(),pd=n("p"),h_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),u_=l(),cr=n("p"),m_=a("This model inherits from "),Ai=n("a"),f_=a("TFPreTrainedModel"),g_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),__=l(),pr=n("p"),v_=a("This model is also a "),hr=n("a"),T_=a("tf.keras.Model"),b_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),k_=l(),b(fn.$$.fragment),w_=l(),Ze=n("div"),b(ur.$$.fragment),y_=l(),Do=n("p"),$_=a("The "),Oi=n("a"),D_=a("TFDistilBertModel"),F_=a(" forward method, overrides the "),hd=n("code"),B_=a("__call__"),M_=a(" special method."),E_=l(),b(gn.$$.fragment),x_=l(),ud=n("p"),z_=a("Example:"),j_=l(),b(mr.$$.fragment),Ip=l(),Fo=n("h2"),_n=n("a"),md=n("span"),b(fr.$$.fragment),C_=l(),fd=n("span"),P_=a("TFDistilBertForMaskedLM"),Lp=l(),Ae=n("div"),b(gr.$$.fragment),q_=l(),_r=n("p"),A_=a("DistilBert Model with a "),gd=n("code"),O_=a("masked language modeling"),N_=a(" head on top."),I_=l(),vr=n("p"),L_=a("This model inherits from "),Ni=n("a"),S_=a("TFPreTrainedModel"),W_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),R_=l(),Tr=n("p"),U_=a("This model is also a "),br=n("a"),H_=a("tf.keras.Model"),Q_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V_=l(),b(vn.$$.fragment),J_=l(),et=n("div"),b(kr.$$.fragment),K_=l(),Bo=n("p"),G_=a("The "),Ii=n("a"),X_=a("TFDistilBertForMaskedLM"),Y_=a(" forward method, overrides the "),_d=n("code"),Z_=a("__call__"),ev=a(" special method."),tv=l(),b(Tn.$$.fragment),ov=l(),vd=n("p"),nv=a("Example:"),sv=l(),b(wr.$$.fragment),Sp=l(),Mo=n("h2"),bn=n("a"),Td=n("span"),b(yr.$$.fragment),rv=l(),bd=n("span"),av=a("TFDistilBertForSequenceClassification"),Wp=l(),Oe=n("div"),b($r.$$.fragment),iv=l(),kd=n("p"),lv=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),dv=l(),Dr=n("p"),cv=a("This model inherits from "),Li=n("a"),pv=a("TFPreTrainedModel"),hv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=l(),Fr=n("p"),mv=a("This model is also a "),Br=n("a"),fv=a("tf.keras.Model"),gv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_v=l(),b(kn.$$.fragment),vv=l(),tt=n("div"),b(Mr.$$.fragment),Tv=l(),Eo=n("p"),bv=a("The "),Si=n("a"),kv=a("TFDistilBertForSequenceClassification"),wv=a(" forward method, overrides the "),wd=n("code"),yv=a("__call__"),$v=a(" special method."),Dv=l(),b(wn.$$.fragment),Fv=l(),yd=n("p"),Bv=a("Example:"),Mv=l(),b(Er.$$.fragment),Rp=l(),xo=n("h2"),yn=n("a"),$d=n("span"),b(xr.$$.fragment),Ev=l(),Dd=n("span"),xv=a("TFDistilBertForMultipleChoice"),Up=l(),Ne=n("div"),b(zr.$$.fragment),zv=l(),Fd=n("p"),jv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cv=l(),jr=n("p"),Pv=a("This model inherits from "),Wi=n("a"),qv=a("TFPreTrainedModel"),Av=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov=l(),Cr=n("p"),Nv=a("This model is also a "),Pr=n("a"),Iv=a("tf.keras.Model"),Lv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sv=l(),b($n.$$.fragment),Wv=l(),ot=n("div"),b(qr.$$.fragment),Rv=l(),zo=n("p"),Uv=a("The "),Ri=n("a"),Hv=a("TFDistilBertForMultipleChoice"),Qv=a(" forward method, overrides the "),Bd=n("code"),Vv=a("__call__"),Jv=a(" special method."),Kv=l(),b(Dn.$$.fragment),Gv=l(),Md=n("p"),Xv=a("Example:"),Yv=l(),b(Ar.$$.fragment),Hp=l(),jo=n("h2"),Fn=n("a"),Ed=n("span"),b(Or.$$.fragment),Zv=l(),xd=n("span"),eT=a("TFDistilBertForTokenClassification"),Qp=l(),Ie=n("div"),b(Nr.$$.fragment),tT=l(),zd=n("p"),oT=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),nT=l(),Ir=n("p"),sT=a("This model inherits from "),Ui=n("a"),rT=a("TFPreTrainedModel"),aT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT=l(),Lr=n("p"),lT=a("This model is also a "),Sr=n("a"),dT=a("tf.keras.Model"),cT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pT=l(),b(Bn.$$.fragment),hT=l(),nt=n("div"),b(Wr.$$.fragment),uT=l(),Co=n("p"),mT=a("The "),Hi=n("a"),fT=a("TFDistilBertForTokenClassification"),gT=a(" forward method, overrides the "),jd=n("code"),_T=a("__call__"),vT=a(" special method."),TT=l(),b(Mn.$$.fragment),bT=l(),Cd=n("p"),kT=a("Example:"),wT=l(),b(Rr.$$.fragment),Vp=l(),Po=n("h2"),En=n("a"),Pd=n("span"),b(Ur.$$.fragment),yT=l(),qd=n("span"),$T=a("TFDistilBertForQuestionAnswering"),Jp=l(),Le=n("div"),b(Hr.$$.fragment),DT=l(),qo=n("p"),FT=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ad=n("code"),BT=a("span start logits"),MT=a(" and "),Od=n("code"),ET=a("span end logits"),xT=a(")."),zT=l(),Qr=n("p"),jT=a("This model inherits from "),Qi=n("a"),CT=a("TFPreTrainedModel"),PT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qT=l(),Vr=n("p"),AT=a("This model is also a "),Jr=n("a"),OT=a("tf.keras.Model"),NT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),IT=l(),b(xn.$$.fragment),LT=l(),st=n("div"),b(Kr.$$.fragment),ST=l(),Ao=n("p"),WT=a("The "),Vi=n("a"),RT=a("TFDistilBertForQuestionAnswering"),UT=a(" forward method, overrides the "),Nd=n("code"),HT=a("__call__"),QT=a(" special method."),VT=l(),b(zn.$$.fragment),JT=l(),Id=n("p"),KT=a("Example:"),GT=l(),b(Gr.$$.fragment),Kp=l(),Oo=n("h2"),jn=n("a"),Ld=n("span"),b(Xr.$$.fragment),XT=l(),Sd=n("span"),YT=a("FlaxDistilBertModel"),Gp=l(),Me=n("div"),b(Yr.$$.fragment),ZT=l(),Wd=n("p"),eb=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),tb=l(),Zr=n("p"),ob=a("This model inherits from "),Ji=n("a"),nb=a("FlaxPreTrainedModel"),sb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rb=l(),ea=n("p"),ab=a("This model is also a Flax Linen "),ta=n("a"),ib=a("flax.linen.Module"),lb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),db=l(),Rd=n("p"),cb=a("Finally, this model supports inherent JAX features such as:"),pb=l(),xt=n("ul"),Ud=n("li"),oa=n("a"),hb=a("Just-In-Time (JIT) compilation"),ub=l(),Hd=n("li"),na=n("a"),mb=a("Automatic Differentiation"),fb=l(),Qd=n("li"),sa=n("a"),gb=a("Vectorization"),_b=l(),Vd=n("li"),ra=n("a"),vb=a("Parallelization"),Tb=l(),rt=n("div"),b(aa.$$.fragment),bb=l(),No=n("p"),kb=a("The "),Jd=n("code"),wb=a("FlaxDistilBertPreTrainedModel"),yb=a("forward method, overrides the "),Kd=n("code"),$b=a("__call__"),Db=a(" special method."),Fb=l(),b(Cn.$$.fragment),Bb=l(),Gd=n("p"),Mb=a("Example:"),Eb=l(),b(ia.$$.fragment),Xp=l(),Io=n("h2"),Pn=n("a"),Xd=n("span"),b(la.$$.fragment),xb=l(),Yd=n("span"),zb=a("FlaxDistilBertForMaskedLM"),Yp=l(),Ee=n("div"),b(da.$$.fragment),jb=l(),ca=n("p"),Cb=a("DistilBert Model with a "),Zd=n("code"),Pb=a("language modeling"),qb=a(" head on top."),Ab=l(),pa=n("p"),Ob=a("This model inherits from "),Ki=n("a"),Nb=a("FlaxPreTrainedModel"),Ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lb=l(),ha=n("p"),Sb=a("This model is also a Flax Linen "),ua=n("a"),Wb=a("flax.linen.Module"),Rb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ub=l(),ec=n("p"),Hb=a("Finally, this model supports inherent JAX features such as:"),Qb=l(),zt=n("ul"),tc=n("li"),ma=n("a"),Vb=a("Just-In-Time (JIT) compilation"),Jb=l(),oc=n("li"),fa=n("a"),Kb=a("Automatic Differentiation"),Gb=l(),nc=n("li"),ga=n("a"),Xb=a("Vectorization"),Yb=l(),sc=n("li"),_a=n("a"),Zb=a("Parallelization"),ek=l(),at=n("div"),b(va.$$.fragment),tk=l(),Lo=n("p"),ok=a("The "),rc=n("code"),nk=a("FlaxDistilBertPreTrainedModel"),sk=a("forward method, overrides the "),ac=n("code"),rk=a("__call__"),ak=a(" special method."),ik=l(),b(qn.$$.fragment),lk=l(),ic=n("p"),dk=a("Example:"),ck=l(),b(Ta.$$.fragment),Zp=l(),So=n("h2"),An=n("a"),lc=n("span"),b(ba.$$.fragment),pk=l(),dc=n("span"),hk=a("FlaxDistilBertForSequenceClassification"),eh=l(),xe=n("div"),b(ka.$$.fragment),uk=l(),cc=n("p"),mk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fk=l(),wa=n("p"),gk=a("This model inherits from "),Gi=n("a"),_k=a("FlaxPreTrainedModel"),vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tk=l(),ya=n("p"),bk=a("This model is also a Flax Linen "),$a=n("a"),kk=a("flax.linen.Module"),wk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yk=l(),pc=n("p"),$k=a("Finally, this model supports inherent JAX features such as:"),Dk=l(),jt=n("ul"),hc=n("li"),Da=n("a"),Fk=a("Just-In-Time (JIT) compilation"),Bk=l(),uc=n("li"),Fa=n("a"),Mk=a("Automatic Differentiation"),Ek=l(),mc=n("li"),Ba=n("a"),xk=a("Vectorization"),zk=l(),fc=n("li"),Ma=n("a"),jk=a("Parallelization"),Ck=l(),it=n("div"),b(Ea.$$.fragment),Pk=l(),Wo=n("p"),qk=a("The "),gc=n("code"),Ak=a("FlaxDistilBertPreTrainedModel"),Ok=a("forward method, overrides the "),_c=n("code"),Nk=a("__call__"),Ik=a(" special method."),Lk=l(),b(On.$$.fragment),Sk=l(),vc=n("p"),Wk=a("Example:"),Rk=l(),b(xa.$$.fragment),th=l(),Ro=n("h2"),Nn=n("a"),Tc=n("span"),b(za.$$.fragment),Uk=l(),bc=n("span"),Hk=a("FlaxDistilBertForMultipleChoice"),oh=l(),ze=n("div"),b(ja.$$.fragment),Qk=l(),kc=n("p"),Vk=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Jk=l(),Ca=n("p"),Kk=a("This model inherits from "),Xi=n("a"),Gk=a("FlaxPreTrainedModel"),Xk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yk=l(),Pa=n("p"),Zk=a("This model is also a Flax Linen "),qa=n("a"),ew=a("flax.linen.Module"),tw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ow=l(),wc=n("p"),nw=a("Finally, this model supports inherent JAX features such as:"),sw=l(),Ct=n("ul"),yc=n("li"),Aa=n("a"),rw=a("Just-In-Time (JIT) compilation"),aw=l(),$c=n("li"),Oa=n("a"),iw=a("Automatic Differentiation"),lw=l(),Dc=n("li"),Na=n("a"),dw=a("Vectorization"),cw=l(),Fc=n("li"),Ia=n("a"),pw=a("Parallelization"),hw=l(),lt=n("div"),b(La.$$.fragment),uw=l(),Uo=n("p"),mw=a("The "),Bc=n("code"),fw=a("FlaxDistilBertPreTrainedModel"),gw=a("forward method, overrides the "),Mc=n("code"),_w=a("__call__"),vw=a(" special method."),Tw=l(),b(In.$$.fragment),bw=l(),Ec=n("p"),kw=a("Example:"),ww=l(),b(Sa.$$.fragment),nh=l(),Ho=n("h2"),Ln=n("a"),xc=n("span"),b(Wa.$$.fragment),yw=l(),zc=n("span"),$w=a("FlaxDistilBertForTokenClassification"),sh=l(),je=n("div"),b(Ra.$$.fragment),Dw=l(),jc=n("p"),Fw=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Bw=l(),Ua=n("p"),Mw=a("This model inherits from "),Yi=n("a"),Ew=a("FlaxPreTrainedModel"),xw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zw=l(),Ha=n("p"),jw=a("This model is also a Flax Linen "),Qa=n("a"),Cw=a("flax.linen.Module"),Pw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qw=l(),Cc=n("p"),Aw=a("Finally, this model supports inherent JAX features such as:"),Ow=l(),Pt=n("ul"),Pc=n("li"),Va=n("a"),Nw=a("Just-In-Time (JIT) compilation"),Iw=l(),qc=n("li"),Ja=n("a"),Lw=a("Automatic Differentiation"),Sw=l(),Ac=n("li"),Ka=n("a"),Ww=a("Vectorization"),Rw=l(),Oc=n("li"),Ga=n("a"),Uw=a("Parallelization"),Hw=l(),dt=n("div"),b(Xa.$$.fragment),Qw=l(),Qo=n("p"),Vw=a("The "),Nc=n("code"),Jw=a("FlaxDistilBertPreTrainedModel"),Kw=a("forward method, overrides the "),Ic=n("code"),Gw=a("__call__"),Xw=a(" special method."),Yw=l(),b(Sn.$$.fragment),Zw=l(),Lc=n("p"),ey=a("Example:"),ty=l(),b(Ya.$$.fragment),rh=l(),Vo=n("h2"),Wn=n("a"),Sc=n("span"),b(Za.$$.fragment),oy=l(),Wc=n("span"),ny=a("FlaxDistilBertForQuestionAnswering"),ah=l(),Ce=n("div"),b(ei.$$.fragment),sy=l(),Jo=n("p"),ry=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rc=n("code"),ay=a("span start logits"),iy=a(" and "),Uc=n("code"),ly=a("span end logits"),dy=a(")."),cy=l(),ti=n("p"),py=a("This model inherits from "),Zi=n("a"),hy=a("FlaxPreTrainedModel"),uy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),my=l(),oi=n("p"),fy=a("This model is also a Flax Linen "),ni=n("a"),gy=a("flax.linen.Module"),_y=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vy=l(),Hc=n("p"),Ty=a("Finally, this model supports inherent JAX features such as:"),by=l(),qt=n("ul"),Qc=n("li"),si=n("a"),ky=a("Just-In-Time (JIT) compilation"),wy=l(),Vc=n("li"),ri=n("a"),yy=a("Automatic Differentiation"),$y=l(),Jc=n("li"),ai=n("a"),Dy=a("Vectorization"),Fy=l(),Kc=n("li"),ii=n("a"),By=a("Parallelization"),My=l(),ct=n("div"),b(li.$$.fragment),Ey=l(),Ko=n("p"),xy=a("The "),Gc=n("code"),zy=a("FlaxDistilBertPreTrainedModel"),jy=a("forward method, overrides the "),Xc=n("code"),Cy=a("__call__"),Py=a(" special method."),qy=l(),b(Rn.$$.fragment),Ay=l(),Yc=n("p"),Oy=a("Example:"),Ny=l(),b(di.$$.fragment),this.h()},l(o){const f=vF('[data-svelte="svelte-1phssyn"]',document.head);p=s(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),g=s(o,"H1",{class:!0});var ci=r(g);v=s(ci,"A",{id:!0,class:!0,href:!0});var Zc=r(v);T=s(Zc,"SPAN",{});var ep=r(T);k(_.$$.fragment,ep),ep.forEach(t),Zc.forEach(t),m=d(ci),B=s(ci,"SPAN",{});var tp=r(B);de=i(tp,"DistilBERT"),tp.forEach(t),ci.forEach(t),V=d(o),E=s(o,"H2",{class:!0});var pi=r(E);G=s(pi,"A",{id:!0,class:!0,href:!0});var op=r(G);L=s(op,"SPAN",{});var np=r(L);k(X.$$.fragment,np),np.forEach(t),op.forEach(t),ce=d(pi),S=s(pi,"SPAN",{});var sp=r(S);pe=i(sp,"Overview"),sp.forEach(t),pi.forEach(t),re=d(o),N=s(o,"P",{});var At=r(N);q=i(At,"The DistilBERT model was proposed in the blog post "),Y=s(At,"A",{href:!0,rel:!0});var rp=r(Y);J=i(rp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),rp.forEach(t),x=i(At,", and the paper "),z=s(At,"A",{href:!0,rel:!0});var ap=r(z);he=i(ap,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),ap.forEach(t),W=i(At,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=s(At,"EM",{});var ip=r(oe);ue=i(ip,"bert-base-uncased"),ip.forEach(t),R=i(At,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),At.forEach(t),ae=d(o),ee=s(o,"P",{});var lp=r(ee);A=i(lp,"The abstract from the paper is the following:"),lp.forEach(t),ie=d(o),I=s(o,"P",{});var dp=r(I);ne=s(dp,"EM",{});var cp=r(ne);me=i(cp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),cp.forEach(t),dp.forEach(t),P=d(o),te=s(o,"P",{});var pp=r(te);U=i(pp,"Tips:"),pp.forEach(t),le=d(o),h=s(o,"UL",{});var hi=r(h);M=s(hi,"LI",{});var Ot=r(M);K=i(Ot,"DistilBERT doesn\u2019t have "),_e=s(Ot,"CODE",{});var hp=r(_e);ke=i(hp,"token_type_ids"),hp.forEach(t),O=i(Ot,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=s(Ot,"CODE",{});var up=r(ve);we=i(up,"tokenizer.sep_token"),up.forEach(t),ye=i(Ot," (or "),C=s(Ot,"CODE",{});var mp=r(C);H=i(mp,"[SEP]"),mp.forEach(t),$e=i(Ot,")."),Ot.forEach(t),De=d(hi),Z=s(hi,"LI",{});var ui=r(Z);Fe=i(ui,"DistilBERT doesn\u2019t have options to select the input positions ("),se=s(ui,"CODE",{});var fp=r(se);Be=i(fp,"position_ids"),fp.forEach(t),_u=i(ui,` input). This could be added if
necessary though, just let us know if you need this option.`),ui.forEach(t),hi.forEach(t),vp=d(o),Tt=s(o,"P",{});var Nt=r(Tt);vu=i(Nt,"This model was contributed by "),Zn=s(Nt,"A",{href:!0,rel:!0});var Iy=r(Zn);Tu=i(Iy,"victorsanh"),Iy.forEach(t),bu=i(Nt,`. This model jax version was
contributed by `),es=s(Nt,"A",{href:!0,rel:!0});var Ly=r(es);ku=i(Ly,"kamalkraj"),Ly.forEach(t),wu=i(Nt,". The original code can be found "),ts=s(Nt,"A",{href:!0,rel:!0});var Sy=r(ts);yu=i(Sy,"here"),Sy.forEach(t),$u=i(Nt,"."),Nt.forEach(t),Tp=d(o),ao=s(o,"H2",{class:!0});var lh=r(ao);Go=s(lh,"A",{id:!0,class:!0,href:!0});var Wy=r(Go);wl=s(Wy,"SPAN",{});var Ry=r(wl);k(os.$$.fragment,Ry),Ry.forEach(t),Wy.forEach(t),Du=d(lh),yl=s(lh,"SPAN",{});var Uy=r(yl);Fu=i(Uy,"DistilBertConfig"),Uy.forEach(t),lh.forEach(t),bp=d(o),Ue=s(o,"DIV",{class:!0});var It=r(Ue);k(ns.$$.fragment,It),Bu=d(It),Et=s(It,"P",{});var Un=r(Et);Mu=i(Un,"This is the configuration class to store the configuration of a "),mi=s(Un,"A",{href:!0});var Hy=r(mi);Eu=i(Hy,"DistilBertModel"),Hy.forEach(t),xu=i(Un," or a "),fi=s(Un,"A",{href:!0});var Qy=r(fi);zu=i(Qy,"TFDistilBertModel"),Qy.forEach(t),ju=i(Un,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),ss=s(Un,"A",{href:!0,rel:!0});var Vy=r(ss);Cu=i(Vy,"distilbert-base-uncased"),Vy.forEach(t),Pu=i(Un," architecture."),Un.forEach(t),qu=d(It),io=s(It,"P",{});var el=r(io);Au=i(el,"Configuration objects inherit from "),gi=s(el,"A",{href:!0});var Jy=r(gi);Ou=i(Jy,"PretrainedConfig"),Jy.forEach(t),Nu=i(el,` and can be used to control the model outputs. Read the
documentation from `),_i=s(el,"A",{href:!0});var Ky=r(_i);Iu=i(Ky,"PretrainedConfig"),Ky.forEach(t),Lu=i(el," for more information."),el.forEach(t),Su=d(It),$l=s(It,"P",{});var Gy=r($l);Wu=i(Gy,"Examples:"),Gy.forEach(t),Ru=d(It),k(rs.$$.fragment,It),It.forEach(t),kp=d(o),lo=s(o,"H2",{class:!0});var dh=r(lo);Xo=s(dh,"A",{id:!0,class:!0,href:!0});var Xy=r(Xo);Dl=s(Xy,"SPAN",{});var Yy=r(Dl);k(as.$$.fragment,Yy),Yy.forEach(t),Xy.forEach(t),Uu=d(dh),Fl=s(dh,"SPAN",{});var Zy=r(Fl);Hu=i(Zy,"DistilBertTokenizer"),Zy.forEach(t),dh.forEach(t),wp=d(o),_t=s(o,"DIV",{class:!0});var Hn=r(_t);k(is.$$.fragment,Hn),Qu=d(Hn),Bl=s(Hn,"P",{});var e1=r(Bl);Vu=i(e1,"Construct a DistilBERT tokenizer."),e1.forEach(t),Ju=d(Hn),Yo=s(Hn,"P",{});var gp=r(Yo);vi=s(gp,"A",{href:!0});var t1=r(vi);Ku=i(t1,"DistilBertTokenizer"),t1.forEach(t),Gu=i(gp," is identical to "),Ti=s(gp,"A",{href:!0});var o1=r(Ti);Xu=i(o1,"BertTokenizer"),o1.forEach(t),Yu=i(gp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),gp.forEach(t),Zu=d(Hn),ls=s(Hn,"P",{});var ch=r(ls);em=i(ch,"Refer to superclass "),bi=s(ch,"A",{href:!0});var n1=r(bi);tm=i(n1,"BertTokenizer"),n1.forEach(t),om=i(ch," for usage examples and documentation concerning parameters."),ch.forEach(t),Hn.forEach(t),yp=d(o),co=s(o,"H2",{class:!0});var ph=r(co);Zo=s(ph,"A",{id:!0,class:!0,href:!0});var s1=r(Zo);Ml=s(s1,"SPAN",{});var r1=r(Ml);k(ds.$$.fragment,r1),r1.forEach(t),s1.forEach(t),nm=d(ph),El=s(ph,"SPAN",{});var a1=r(El);sm=i(a1,"DistilBertTokenizerFast"),a1.forEach(t),ph.forEach(t),$p=d(o),vt=s(o,"DIV",{class:!0});var Qn=r(vt);k(cs.$$.fragment,Qn),rm=d(Qn),ps=s(Qn,"P",{});var hh=r(ps);am=i(hh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),xl=s(hh,"EM",{});var i1=r(xl);im=i(i1,"tokenizers"),i1.forEach(t),lm=i(hh," library)."),hh.forEach(t),dm=d(Qn),en=s(Qn,"P",{});var _p=r(en);ki=s(_p,"A",{href:!0});var l1=r(ki);cm=i(l1,"DistilBertTokenizerFast"),l1.forEach(t),pm=i(_p," is identical to "),wi=s(_p,"A",{href:!0});var d1=r(wi);hm=i(d1,"BertTokenizerFast"),d1.forEach(t),um=i(_p,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),_p.forEach(t),mm=d(Qn),hs=s(Qn,"P",{});var uh=r(hs);fm=i(uh,"Refer to superclass "),yi=s(uh,"A",{href:!0});var c1=r(yi);gm=i(c1,"BertTokenizerFast"),c1.forEach(t),_m=i(uh," for usage examples and documentation concerning parameters."),uh.forEach(t),Qn.forEach(t),Dp=d(o),po=s(o,"H2",{class:!0});var mh=r(po);tn=s(mh,"A",{id:!0,class:!0,href:!0});var p1=r(tn);zl=s(p1,"SPAN",{});var h1=r(zl);k(us.$$.fragment,h1),h1.forEach(t),p1.forEach(t),vm=d(mh),jl=s(mh,"SPAN",{});var u1=r(jl);Tm=i(u1,"DistilBertModel"),u1.forEach(t),mh.forEach(t),Fp=d(o),He=s(o,"DIV",{class:!0});var Lt=r(He);k(ms.$$.fragment,Lt),bm=d(Lt),Cl=s(Lt,"P",{});var m1=r(Cl);km=i(m1,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),m1.forEach(t),wm=d(Lt),fs=s(Lt,"P",{});var fh=r(fs);ym=i(fh,"This model inherits from "),$i=s(fh,"A",{href:!0});var f1=r($i);$m=i(f1,"PreTrainedModel"),f1.forEach(t),Dm=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Fm=d(Lt),gs=s(Lt,"P",{});var gh=r(gs);Bm=i(gh,"This model is also a PyTorch "),_s=s(gh,"A",{href:!0,rel:!0});var g1=r(_s);Mm=i(g1,"torch.nn.Module"),g1.forEach(t),Em=i(gh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gh.forEach(t),xm=d(Lt),Xe=s(Lt,"DIV",{class:!0});var St=r(Xe);k(vs.$$.fragment,St),zm=d(St),ho=s(St,"P",{});var tl=r(ho);jm=i(tl,"The "),Di=s(tl,"A",{href:!0});var _1=r(Di);Cm=i(_1,"DistilBertModel"),_1.forEach(t),Pm=i(tl," forward method, overrides the "),Pl=s(tl,"CODE",{});var v1=r(Pl);qm=i(v1,"__call__"),v1.forEach(t),Am=i(tl," special method."),tl.forEach(t),Om=d(St),k(on.$$.fragment,St),Nm=d(St),ql=s(St,"P",{});var T1=r(ql);Im=i(T1,"Example:"),T1.forEach(t),Lm=d(St),k(Ts.$$.fragment,St),St.forEach(t),Lt.forEach(t),Bp=d(o),uo=s(o,"H2",{class:!0});var _h=r(uo);nn=s(_h,"A",{id:!0,class:!0,href:!0});var b1=r(nn);Al=s(b1,"SPAN",{});var k1=r(Al);k(bs.$$.fragment,k1),k1.forEach(t),b1.forEach(t),Sm=d(_h),Ol=s(_h,"SPAN",{});var w1=r(Ol);Wm=i(w1,"DistilBertForMaskedLM"),w1.forEach(t),_h.forEach(t),Mp=d(o),Qe=s(o,"DIV",{class:!0});var Wt=r(Qe);k(ks.$$.fragment,Wt),Rm=d(Wt),ws=s(Wt,"P",{});var vh=r(ws);Um=i(vh,"DistilBert Model with a "),Nl=s(vh,"CODE",{});var y1=r(Nl);Hm=i(y1,"masked language modeling"),y1.forEach(t),Qm=i(vh," head on top."),vh.forEach(t),Vm=d(Wt),ys=s(Wt,"P",{});var Th=r(ys);Jm=i(Th,"This model inherits from "),Fi=s(Th,"A",{href:!0});var $1=r(Fi);Km=i($1,"PreTrainedModel"),$1.forEach(t),Gm=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Xm=d(Wt),$s=s(Wt,"P",{});var bh=r($s);Ym=i(bh,"This model is also a PyTorch "),Ds=s(bh,"A",{href:!0,rel:!0});var D1=r(Ds);Zm=i(D1,"torch.nn.Module"),D1.forEach(t),ef=i(bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bh.forEach(t),tf=d(Wt),Se=s(Wt,"DIV",{class:!0});var bt=r(Se);k(Fs.$$.fragment,bt),of=d(bt),mo=s(bt,"P",{});var ol=r(mo);nf=i(ol,"The "),Bi=s(ol,"A",{href:!0});var F1=r(Bi);sf=i(F1,"DistilBertForMaskedLM"),F1.forEach(t),rf=i(ol," forward method, overrides the "),Il=s(ol,"CODE",{});var B1=r(Il);af=i(B1,"__call__"),B1.forEach(t),lf=i(ol," special method."),ol.forEach(t),df=d(bt),k(sn.$$.fragment,bt),cf=d(bt),Ll=s(bt,"P",{});var M1=r(Ll);pf=i(M1,"Example:"),M1.forEach(t),hf=d(bt),k(Bs.$$.fragment,bt),uf=d(bt),k(Ms.$$.fragment,bt),bt.forEach(t),Wt.forEach(t),Ep=d(o),fo=s(o,"H2",{class:!0});var kh=r(fo);rn=s(kh,"A",{id:!0,class:!0,href:!0});var E1=r(rn);Sl=s(E1,"SPAN",{});var x1=r(Sl);k(Es.$$.fragment,x1),x1.forEach(t),E1.forEach(t),mf=d(kh),Wl=s(kh,"SPAN",{});var z1=r(Wl);ff=i(z1,"DistilBertForSequenceClassification"),z1.forEach(t),kh.forEach(t),xp=d(o),Ve=s(o,"DIV",{class:!0});var Rt=r(Ve);k(xs.$$.fragment,Rt),gf=d(Rt),Rl=s(Rt,"P",{});var j1=r(Rl);_f=i(j1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),j1.forEach(t),vf=d(Rt),zs=s(Rt,"P",{});var wh=r(zs);Tf=i(wh,"This model inherits from "),Mi=s(wh,"A",{href:!0});var C1=r(Mi);bf=i(C1,"PreTrainedModel"),C1.forEach(t),kf=i(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),wf=d(Rt),js=s(Rt,"P",{});var yh=r(js);yf=i(yh,"This model is also a PyTorch "),Cs=s(yh,"A",{href:!0,rel:!0});var P1=r(Cs);$f=i(P1,"torch.nn.Module"),P1.forEach(t),Df=i(yh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yh.forEach(t),Ff=d(Rt),be=s(Rt,"DIV",{class:!0});var Pe=r(be);k(Ps.$$.fragment,Pe),Bf=d(Pe),go=s(Pe,"P",{});var nl=r(go);Mf=i(nl,"The "),Ei=s(nl,"A",{href:!0});var q1=r(Ei);Ef=i(q1,"DistilBertForSequenceClassification"),q1.forEach(t),xf=i(nl," forward method, overrides the "),Ul=s(nl,"CODE",{});var A1=r(Ul);zf=i(A1,"__call__"),A1.forEach(t),jf=i(nl," special method."),nl.forEach(t),Cf=d(Pe),k(an.$$.fragment,Pe),Pf=d(Pe),Hl=s(Pe,"P",{});var O1=r(Hl);qf=i(O1,"Example of single-label classification:"),O1.forEach(t),Af=d(Pe),k(qs.$$.fragment,Pe),Of=d(Pe),k(As.$$.fragment,Pe),Nf=d(Pe),Ql=s(Pe,"P",{});var N1=r(Ql);If=i(N1,"Example of multi-label classification:"),N1.forEach(t),Lf=d(Pe),k(Os.$$.fragment,Pe),Sf=d(Pe),k(Ns.$$.fragment,Pe),Pe.forEach(t),Rt.forEach(t),zp=d(o),_o=s(o,"H2",{class:!0});var $h=r(_o);ln=s($h,"A",{id:!0,class:!0,href:!0});var I1=r(ln);Vl=s(I1,"SPAN",{});var L1=r(Vl);k(Is.$$.fragment,L1),L1.forEach(t),I1.forEach(t),Wf=d($h),Jl=s($h,"SPAN",{});var S1=r(Jl);Rf=i(S1,"DistilBertForMultipleChoice"),S1.forEach(t),$h.forEach(t),jp=d(o),Je=s(o,"DIV",{class:!0});var Ut=r(Je);k(Ls.$$.fragment,Ut),Uf=d(Ut),Kl=s(Ut,"P",{});var W1=r(Kl);Hf=i(W1,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),W1.forEach(t),Qf=d(Ut),Ss=s(Ut,"P",{});var Dh=r(Ss);Vf=i(Dh,"This model inherits from "),xi=s(Dh,"A",{href:!0});var R1=r(xi);Jf=i(R1,"PreTrainedModel"),R1.forEach(t),Kf=i(Dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh.forEach(t),Gf=d(Ut),Ws=s(Ut,"P",{});var Fh=r(Ws);Xf=i(Fh,"This model is also a PyTorch "),Rs=s(Fh,"A",{href:!0,rel:!0});var U1=r(Rs);Yf=i(U1,"torch.nn.Module"),U1.forEach(t),Zf=i(Fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh.forEach(t),eg=d(Ut),Ye=s(Ut,"DIV",{class:!0});var Ht=r(Ye);k(Us.$$.fragment,Ht),tg=d(Ht),vo=s(Ht,"P",{});var sl=r(vo);og=i(sl,"The "),zi=s(sl,"A",{href:!0});var H1=r(zi);ng=i(H1,"DistilBertForMultipleChoice"),H1.forEach(t),sg=i(sl," forward method, overrides the "),Gl=s(sl,"CODE",{});var Q1=r(Gl);rg=i(Q1,"__call__"),Q1.forEach(t),ag=i(sl," special method."),sl.forEach(t),ig=d(Ht),k(dn.$$.fragment,Ht),lg=d(Ht),Xl=s(Ht,"P",{});var V1=r(Xl);dg=i(V1,"Examples:"),V1.forEach(t),cg=d(Ht),k(Hs.$$.fragment,Ht),Ht.forEach(t),Ut.forEach(t),Cp=d(o),To=s(o,"H2",{class:!0});var Bh=r(To);cn=s(Bh,"A",{id:!0,class:!0,href:!0});var J1=r(cn);Yl=s(J1,"SPAN",{});var K1=r(Yl);k(Qs.$$.fragment,K1),K1.forEach(t),J1.forEach(t),pg=d(Bh),Zl=s(Bh,"SPAN",{});var G1=r(Zl);hg=i(G1,"DistilBertForTokenClassification"),G1.forEach(t),Bh.forEach(t),Pp=d(o),Ke=s(o,"DIV",{class:!0});var Qt=r(Ke);k(Vs.$$.fragment,Qt),ug=d(Qt),ed=s(Qt,"P",{});var X1=r(ed);mg=i(X1,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),X1.forEach(t),fg=d(Qt),Js=s(Qt,"P",{});var Mh=r(Js);gg=i(Mh,"This model inherits from "),ji=s(Mh,"A",{href:!0});var Y1=r(ji);_g=i(Y1,"PreTrainedModel"),Y1.forEach(t),vg=i(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mh.forEach(t),Tg=d(Qt),Ks=s(Qt,"P",{});var Eh=r(Ks);bg=i(Eh,"This model is also a PyTorch "),Gs=s(Eh,"A",{href:!0,rel:!0});var Z1=r(Gs);kg=i(Z1,"torch.nn.Module"),Z1.forEach(t),wg=i(Eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eh.forEach(t),yg=d(Qt),We=s(Qt,"DIV",{class:!0});var kt=r(We);k(Xs.$$.fragment,kt),$g=d(kt),bo=s(kt,"P",{});var rl=r(bo);Dg=i(rl,"The "),Ci=s(rl,"A",{href:!0});var e$=r(Ci);Fg=i(e$,"DistilBertForTokenClassification"),e$.forEach(t),Bg=i(rl," forward method, overrides the "),td=s(rl,"CODE",{});var t$=r(td);Mg=i(t$,"__call__"),t$.forEach(t),Eg=i(rl," special method."),rl.forEach(t),xg=d(kt),k(pn.$$.fragment,kt),zg=d(kt),od=s(kt,"P",{});var o$=r(od);jg=i(o$,"Example:"),o$.forEach(t),Cg=d(kt),k(Ys.$$.fragment,kt),Pg=d(kt),k(Zs.$$.fragment,kt),kt.forEach(t),Qt.forEach(t),qp=d(o),ko=s(o,"H2",{class:!0});var xh=r(ko);hn=s(xh,"A",{id:!0,class:!0,href:!0});var n$=r(hn);nd=s(n$,"SPAN",{});var s$=r(nd);k(er.$$.fragment,s$),s$.forEach(t),n$.forEach(t),qg=d(xh),sd=s(xh,"SPAN",{});var r$=r(sd);Ag=i(r$,"DistilBertForQuestionAnswering"),r$.forEach(t),xh.forEach(t),Ap=d(o),Ge=s(o,"DIV",{class:!0});var Vt=r(Ge);k(tr.$$.fragment,Vt),Og=d(Vt),wo=s(Vt,"P",{});var al=r(wo);Ng=i(al,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),rd=s(al,"CODE",{});var a$=r(rd);Ig=i(a$,"span start logits"),a$.forEach(t),Lg=i(al," and "),ad=s(al,"CODE",{});var i$=r(ad);Sg=i(i$,"span end logits"),i$.forEach(t),Wg=i(al,")."),al.forEach(t),Rg=d(Vt),or=s(Vt,"P",{});var zh=r(or);Ug=i(zh,"This model inherits from "),Pi=s(zh,"A",{href:!0});var l$=r(Pi);Hg=i(l$,"PreTrainedModel"),l$.forEach(t),Qg=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Vg=d(Vt),nr=s(Vt,"P",{});var jh=r(nr);Jg=i(jh,"This model is also a PyTorch "),sr=s(jh,"A",{href:!0,rel:!0});var d$=r(sr);Kg=i(d$,"torch.nn.Module"),d$.forEach(t),Gg=i(jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh.forEach(t),Xg=d(Vt),Re=s(Vt,"DIV",{class:!0});var wt=r(Re);k(rr.$$.fragment,wt),Yg=d(wt),yo=s(wt,"P",{});var il=r(yo);Zg=i(il,"The "),qi=s(il,"A",{href:!0});var c$=r(qi);e_=i(c$,"DistilBertForQuestionAnswering"),c$.forEach(t),t_=i(il," forward method, overrides the "),id=s(il,"CODE",{});var p$=r(id);o_=i(p$,"__call__"),p$.forEach(t),n_=i(il," special method."),il.forEach(t),s_=d(wt),k(un.$$.fragment,wt),r_=d(wt),ld=s(wt,"P",{});var h$=r(ld);a_=i(h$,"Example:"),h$.forEach(t),i_=d(wt),k(ar.$$.fragment,wt),l_=d(wt),k(ir.$$.fragment,wt),wt.forEach(t),Vt.forEach(t),Op=d(o),$o=s(o,"H2",{class:!0});var Ch=r($o);mn=s(Ch,"A",{id:!0,class:!0,href:!0});var u$=r(mn);dd=s(u$,"SPAN",{});var m$=r(dd);k(lr.$$.fragment,m$),m$.forEach(t),u$.forEach(t),d_=d(Ch),cd=s(Ch,"SPAN",{});var f$=r(cd);c_=i(f$,"TFDistilBertModel"),f$.forEach(t),Ch.forEach(t),Np=d(o),qe=s(o,"DIV",{class:!0});var yt=r(qe);k(dr.$$.fragment,yt),p_=d(yt),pd=s(yt,"P",{});var g$=r(pd);h_=i(g$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),g$.forEach(t),u_=d(yt),cr=s(yt,"P",{});var Ph=r(cr);m_=i(Ph,"This model inherits from "),Ai=s(Ph,"A",{href:!0});var _$=r(Ai);f_=i(_$,"TFPreTrainedModel"),_$.forEach(t),g_=i(Ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ph.forEach(t),__=d(yt),pr=s(yt,"P",{});var qh=r(pr);v_=i(qh,"This model is also a "),hr=s(qh,"A",{href:!0,rel:!0});var v$=r(hr);T_=i(v$,"tf.keras.Model"),v$.forEach(t),b_=i(qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qh.forEach(t),k_=d(yt),k(fn.$$.fragment,yt),w_=d(yt),Ze=s(yt,"DIV",{class:!0});var Jt=r(Ze);k(ur.$$.fragment,Jt),y_=d(Jt),Do=s(Jt,"P",{});var ll=r(Do);$_=i(ll,"The "),Oi=s(ll,"A",{href:!0});var T$=r(Oi);D_=i(T$,"TFDistilBertModel"),T$.forEach(t),F_=i(ll," forward method, overrides the "),hd=s(ll,"CODE",{});var b$=r(hd);B_=i(b$,"__call__"),b$.forEach(t),M_=i(ll," special method."),ll.forEach(t),E_=d(Jt),k(gn.$$.fragment,Jt),x_=d(Jt),ud=s(Jt,"P",{});var k$=r(ud);z_=i(k$,"Example:"),k$.forEach(t),j_=d(Jt),k(mr.$$.fragment,Jt),Jt.forEach(t),yt.forEach(t),Ip=d(o),Fo=s(o,"H2",{class:!0});var Ah=r(Fo);_n=s(Ah,"A",{id:!0,class:!0,href:!0});var w$=r(_n);md=s(w$,"SPAN",{});var y$=r(md);k(fr.$$.fragment,y$),y$.forEach(t),w$.forEach(t),C_=d(Ah),fd=s(Ah,"SPAN",{});var $$=r(fd);P_=i($$,"TFDistilBertForMaskedLM"),$$.forEach(t),Ah.forEach(t),Lp=d(o),Ae=s(o,"DIV",{class:!0});var $t=r(Ae);k(gr.$$.fragment,$t),q_=d($t),_r=s($t,"P",{});var Oh=r(_r);A_=i(Oh,"DistilBert Model with a "),gd=s(Oh,"CODE",{});var D$=r(gd);O_=i(D$,"masked language modeling"),D$.forEach(t),N_=i(Oh," head on top."),Oh.forEach(t),I_=d($t),vr=s($t,"P",{});var Nh=r(vr);L_=i(Nh,"This model inherits from "),Ni=s(Nh,"A",{href:!0});var F$=r(Ni);S_=i(F$,"TFPreTrainedModel"),F$.forEach(t),W_=i(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),R_=d($t),Tr=s($t,"P",{});var Ih=r(Tr);U_=i(Ih,"This model is also a "),br=s(Ih,"A",{href:!0,rel:!0});var B$=r(br);H_=i(B$,"tf.keras.Model"),B$.forEach(t),Q_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),V_=d($t),k(vn.$$.fragment,$t),J_=d($t),et=s($t,"DIV",{class:!0});var Kt=r(et);k(kr.$$.fragment,Kt),K_=d(Kt),Bo=s(Kt,"P",{});var dl=r(Bo);G_=i(dl,"The "),Ii=s(dl,"A",{href:!0});var M$=r(Ii);X_=i(M$,"TFDistilBertForMaskedLM"),M$.forEach(t),Y_=i(dl," forward method, overrides the "),_d=s(dl,"CODE",{});var E$=r(_d);Z_=i(E$,"__call__"),E$.forEach(t),ev=i(dl," special method."),dl.forEach(t),tv=d(Kt),k(Tn.$$.fragment,Kt),ov=d(Kt),vd=s(Kt,"P",{});var x$=r(vd);nv=i(x$,"Example:"),x$.forEach(t),sv=d(Kt),k(wr.$$.fragment,Kt),Kt.forEach(t),$t.forEach(t),Sp=d(o),Mo=s(o,"H2",{class:!0});var Lh=r(Mo);bn=s(Lh,"A",{id:!0,class:!0,href:!0});var z$=r(bn);Td=s(z$,"SPAN",{});var j$=r(Td);k(yr.$$.fragment,j$),j$.forEach(t),z$.forEach(t),rv=d(Lh),bd=s(Lh,"SPAN",{});var C$=r(bd);av=i(C$,"TFDistilBertForSequenceClassification"),C$.forEach(t),Lh.forEach(t),Wp=d(o),Oe=s(o,"DIV",{class:!0});var Dt=r(Oe);k($r.$$.fragment,Dt),iv=d(Dt),kd=s(Dt,"P",{});var P$=r(kd);lv=i(P$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),P$.forEach(t),dv=d(Dt),Dr=s(Dt,"P",{});var Sh=r(Dr);cv=i(Sh,"This model inherits from "),Li=s(Sh,"A",{href:!0});var q$=r(Li);pv=i(q$,"TFPreTrainedModel"),q$.forEach(t),hv=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),uv=d(Dt),Fr=s(Dt,"P",{});var Wh=r(Fr);mv=i(Wh,"This model is also a "),Br=s(Wh,"A",{href:!0,rel:!0});var A$=r(Br);fv=i(A$,"tf.keras.Model"),A$.forEach(t),gv=i(Wh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wh.forEach(t),_v=d(Dt),k(kn.$$.fragment,Dt),vv=d(Dt),tt=s(Dt,"DIV",{class:!0});var Gt=r(tt);k(Mr.$$.fragment,Gt),Tv=d(Gt),Eo=s(Gt,"P",{});var cl=r(Eo);bv=i(cl,"The "),Si=s(cl,"A",{href:!0});var O$=r(Si);kv=i(O$,"TFDistilBertForSequenceClassification"),O$.forEach(t),wv=i(cl," forward method, overrides the "),wd=s(cl,"CODE",{});var N$=r(wd);yv=i(N$,"__call__"),N$.forEach(t),$v=i(cl," special method."),cl.forEach(t),Dv=d(Gt),k(wn.$$.fragment,Gt),Fv=d(Gt),yd=s(Gt,"P",{});var I$=r(yd);Bv=i(I$,"Example:"),I$.forEach(t),Mv=d(Gt),k(Er.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),Rp=d(o),xo=s(o,"H2",{class:!0});var Rh=r(xo);yn=s(Rh,"A",{id:!0,class:!0,href:!0});var L$=r(yn);$d=s(L$,"SPAN",{});var S$=r($d);k(xr.$$.fragment,S$),S$.forEach(t),L$.forEach(t),Ev=d(Rh),Dd=s(Rh,"SPAN",{});var W$=r(Dd);xv=i(W$,"TFDistilBertForMultipleChoice"),W$.forEach(t),Rh.forEach(t),Up=d(o),Ne=s(o,"DIV",{class:!0});var Ft=r(Ne);k(zr.$$.fragment,Ft),zv=d(Ft),Fd=s(Ft,"P",{});var R$=r(Fd);jv=i(R$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),R$.forEach(t),Cv=d(Ft),jr=s(Ft,"P",{});var Uh=r(jr);Pv=i(Uh,"This model inherits from "),Wi=s(Uh,"A",{href:!0});var U$=r(Wi);qv=i(U$,"TFPreTrainedModel"),U$.forEach(t),Av=i(Uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uh.forEach(t),Ov=d(Ft),Cr=s(Ft,"P",{});var Hh=r(Cr);Nv=i(Hh,"This model is also a "),Pr=s(Hh,"A",{href:!0,rel:!0});var H$=r(Pr);Iv=i(H$,"tf.keras.Model"),H$.forEach(t),Lv=i(Hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh.forEach(t),Sv=d(Ft),k($n.$$.fragment,Ft),Wv=d(Ft),ot=s(Ft,"DIV",{class:!0});var Xt=r(ot);k(qr.$$.fragment,Xt),Rv=d(Xt),zo=s(Xt,"P",{});var pl=r(zo);Uv=i(pl,"The "),Ri=s(pl,"A",{href:!0});var Q$=r(Ri);Hv=i(Q$,"TFDistilBertForMultipleChoice"),Q$.forEach(t),Qv=i(pl," forward method, overrides the "),Bd=s(pl,"CODE",{});var V$=r(Bd);Vv=i(V$,"__call__"),V$.forEach(t),Jv=i(pl," special method."),pl.forEach(t),Kv=d(Xt),k(Dn.$$.fragment,Xt),Gv=d(Xt),Md=s(Xt,"P",{});var J$=r(Md);Xv=i(J$,"Example:"),J$.forEach(t),Yv=d(Xt),k(Ar.$$.fragment,Xt),Xt.forEach(t),Ft.forEach(t),Hp=d(o),jo=s(o,"H2",{class:!0});var Qh=r(jo);Fn=s(Qh,"A",{id:!0,class:!0,href:!0});var K$=r(Fn);Ed=s(K$,"SPAN",{});var G$=r(Ed);k(Or.$$.fragment,G$),G$.forEach(t),K$.forEach(t),Zv=d(Qh),xd=s(Qh,"SPAN",{});var X$=r(xd);eT=i(X$,"TFDistilBertForTokenClassification"),X$.forEach(t),Qh.forEach(t),Qp=d(o),Ie=s(o,"DIV",{class:!0});var Bt=r(Ie);k(Nr.$$.fragment,Bt),tT=d(Bt),zd=s(Bt,"P",{});var Y$=r(zd);oT=i(Y$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Y$.forEach(t),nT=d(Bt),Ir=s(Bt,"P",{});var Vh=r(Ir);sT=i(Vh,"This model inherits from "),Ui=s(Vh,"A",{href:!0});var Z$=r(Ui);rT=i(Z$,"TFPreTrainedModel"),Z$.forEach(t),aT=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),iT=d(Bt),Lr=s(Bt,"P",{});var Jh=r(Lr);lT=i(Jh,"This model is also a "),Sr=s(Jh,"A",{href:!0,rel:!0});var eD=r(Sr);dT=i(eD,"tf.keras.Model"),eD.forEach(t),cT=i(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),pT=d(Bt),k(Bn.$$.fragment,Bt),hT=d(Bt),nt=s(Bt,"DIV",{class:!0});var Yt=r(nt);k(Wr.$$.fragment,Yt),uT=d(Yt),Co=s(Yt,"P",{});var hl=r(Co);mT=i(hl,"The "),Hi=s(hl,"A",{href:!0});var tD=r(Hi);fT=i(tD,"TFDistilBertForTokenClassification"),tD.forEach(t),gT=i(hl," forward method, overrides the "),jd=s(hl,"CODE",{});var oD=r(jd);_T=i(oD,"__call__"),oD.forEach(t),vT=i(hl," special method."),hl.forEach(t),TT=d(Yt),k(Mn.$$.fragment,Yt),bT=d(Yt),Cd=s(Yt,"P",{});var nD=r(Cd);kT=i(nD,"Example:"),nD.forEach(t),wT=d(Yt),k(Rr.$$.fragment,Yt),Yt.forEach(t),Bt.forEach(t),Vp=d(o),Po=s(o,"H2",{class:!0});var Kh=r(Po);En=s(Kh,"A",{id:!0,class:!0,href:!0});var sD=r(En);Pd=s(sD,"SPAN",{});var rD=r(Pd);k(Ur.$$.fragment,rD),rD.forEach(t),sD.forEach(t),yT=d(Kh),qd=s(Kh,"SPAN",{});var aD=r(qd);$T=i(aD,"TFDistilBertForQuestionAnswering"),aD.forEach(t),Kh.forEach(t),Jp=d(o),Le=s(o,"DIV",{class:!0});var Mt=r(Le);k(Hr.$$.fragment,Mt),DT=d(Mt),qo=s(Mt,"P",{});var ul=r(qo);FT=i(ul,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ad=s(ul,"CODE",{});var iD=r(Ad);BT=i(iD,"span start logits"),iD.forEach(t),MT=i(ul," and "),Od=s(ul,"CODE",{});var lD=r(Od);ET=i(lD,"span end logits"),lD.forEach(t),xT=i(ul,")."),ul.forEach(t),zT=d(Mt),Qr=s(Mt,"P",{});var Gh=r(Qr);jT=i(Gh,"This model inherits from "),Qi=s(Gh,"A",{href:!0});var dD=r(Qi);CT=i(dD,"TFPreTrainedModel"),dD.forEach(t),PT=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),qT=d(Mt),Vr=s(Mt,"P",{});var Xh=r(Vr);AT=i(Xh,"This model is also a "),Jr=s(Xh,"A",{href:!0,rel:!0});var cD=r(Jr);OT=i(cD,"tf.keras.Model"),cD.forEach(t),NT=i(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),IT=d(Mt),k(xn.$$.fragment,Mt),LT=d(Mt),st=s(Mt,"DIV",{class:!0});var Zt=r(st);k(Kr.$$.fragment,Zt),ST=d(Zt),Ao=s(Zt,"P",{});var ml=r(Ao);WT=i(ml,"The "),Vi=s(ml,"A",{href:!0});var pD=r(Vi);RT=i(pD,"TFDistilBertForQuestionAnswering"),pD.forEach(t),UT=i(ml," forward method, overrides the "),Nd=s(ml,"CODE",{});var hD=r(Nd);HT=i(hD,"__call__"),hD.forEach(t),QT=i(ml," special method."),ml.forEach(t),VT=d(Zt),k(zn.$$.fragment,Zt),JT=d(Zt),Id=s(Zt,"P",{});var uD=r(Id);KT=i(uD,"Example:"),uD.forEach(t),GT=d(Zt),k(Gr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Kp=d(o),Oo=s(o,"H2",{class:!0});var Yh=r(Oo);jn=s(Yh,"A",{id:!0,class:!0,href:!0});var mD=r(jn);Ld=s(mD,"SPAN",{});var fD=r(Ld);k(Xr.$$.fragment,fD),fD.forEach(t),mD.forEach(t),XT=d(Yh),Sd=s(Yh,"SPAN",{});var gD=r(Sd);YT=i(gD,"FlaxDistilBertModel"),gD.forEach(t),Yh.forEach(t),Gp=d(o),Me=s(o,"DIV",{class:!0});var pt=r(Me);k(Yr.$$.fragment,pt),ZT=d(pt),Wd=s(pt,"P",{});var _D=r(Wd);eb=i(_D,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),_D.forEach(t),tb=d(pt),Zr=s(pt,"P",{});var Zh=r(Zr);ob=i(Zh,"This model inherits from "),Ji=s(Zh,"A",{href:!0});var vD=r(Ji);nb=i(vD,"FlaxPreTrainedModel"),vD.forEach(t),sb=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zh.forEach(t),rb=d(pt),ea=s(pt,"P",{});var eu=r(ea);ab=i(eu,"This model is also a Flax Linen "),ta=s(eu,"A",{href:!0,rel:!0});var TD=r(ta);ib=i(TD,"flax.linen.Module"),TD.forEach(t),lb=i(eu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eu.forEach(t),db=d(pt),Rd=s(pt,"P",{});var bD=r(Rd);cb=i(bD,"Finally, this model supports inherent JAX features such as:"),bD.forEach(t),pb=d(pt),xt=s(pt,"UL",{});var Vn=r(xt);Ud=s(Vn,"LI",{});var kD=r(Ud);oa=s(kD,"A",{href:!0,rel:!0});var wD=r(oa);hb=i(wD,"Just-In-Time (JIT) compilation"),wD.forEach(t),kD.forEach(t),ub=d(Vn),Hd=s(Vn,"LI",{});var yD=r(Hd);na=s(yD,"A",{href:!0,rel:!0});var $D=r(na);mb=i($D,"Automatic Differentiation"),$D.forEach(t),yD.forEach(t),fb=d(Vn),Qd=s(Vn,"LI",{});var DD=r(Qd);sa=s(DD,"A",{href:!0,rel:!0});var FD=r(sa);gb=i(FD,"Vectorization"),FD.forEach(t),DD.forEach(t),_b=d(Vn),Vd=s(Vn,"LI",{});var BD=r(Vd);ra=s(BD,"A",{href:!0,rel:!0});var MD=r(ra);vb=i(MD,"Parallelization"),MD.forEach(t),BD.forEach(t),Vn.forEach(t),Tb=d(pt),rt=s(pt,"DIV",{class:!0});var eo=r(rt);k(aa.$$.fragment,eo),bb=d(eo),No=s(eo,"P",{});var fl=r(No);kb=i(fl,"The "),Jd=s(fl,"CODE",{});var ED=r(Jd);wb=i(ED,"FlaxDistilBertPreTrainedModel"),ED.forEach(t),yb=i(fl,"forward method, overrides the "),Kd=s(fl,"CODE",{});var xD=r(Kd);$b=i(xD,"__call__"),xD.forEach(t),Db=i(fl," special method."),fl.forEach(t),Fb=d(eo),k(Cn.$$.fragment,eo),Bb=d(eo),Gd=s(eo,"P",{});var zD=r(Gd);Mb=i(zD,"Example:"),zD.forEach(t),Eb=d(eo),k(ia.$$.fragment,eo),eo.forEach(t),pt.forEach(t),Xp=d(o),Io=s(o,"H2",{class:!0});var tu=r(Io);Pn=s(tu,"A",{id:!0,class:!0,href:!0});var jD=r(Pn);Xd=s(jD,"SPAN",{});var CD=r(Xd);k(la.$$.fragment,CD),CD.forEach(t),jD.forEach(t),xb=d(tu),Yd=s(tu,"SPAN",{});var PD=r(Yd);zb=i(PD,"FlaxDistilBertForMaskedLM"),PD.forEach(t),tu.forEach(t),Yp=d(o),Ee=s(o,"DIV",{class:!0});var ht=r(Ee);k(da.$$.fragment,ht),jb=d(ht),ca=s(ht,"P",{});var ou=r(ca);Cb=i(ou,"DistilBert Model with a "),Zd=s(ou,"CODE",{});var qD=r(Zd);Pb=i(qD,"language modeling"),qD.forEach(t),qb=i(ou," head on top."),ou.forEach(t),Ab=d(ht),pa=s(ht,"P",{});var nu=r(pa);Ob=i(nu,"This model inherits from "),Ki=s(nu,"A",{href:!0});var AD=r(Ki);Nb=i(AD,"FlaxPreTrainedModel"),AD.forEach(t),Ib=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nu.forEach(t),Lb=d(ht),ha=s(ht,"P",{});var su=r(ha);Sb=i(su,"This model is also a Flax Linen "),ua=s(su,"A",{href:!0,rel:!0});var OD=r(ua);Wb=i(OD,"flax.linen.Module"),OD.forEach(t),Rb=i(su,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su.forEach(t),Ub=d(ht),ec=s(ht,"P",{});var ND=r(ec);Hb=i(ND,"Finally, this model supports inherent JAX features such as:"),ND.forEach(t),Qb=d(ht),zt=s(ht,"UL",{});var Jn=r(zt);tc=s(Jn,"LI",{});var ID=r(tc);ma=s(ID,"A",{href:!0,rel:!0});var LD=r(ma);Vb=i(LD,"Just-In-Time (JIT) compilation"),LD.forEach(t),ID.forEach(t),Jb=d(Jn),oc=s(Jn,"LI",{});var SD=r(oc);fa=s(SD,"A",{href:!0,rel:!0});var WD=r(fa);Kb=i(WD,"Automatic Differentiation"),WD.forEach(t),SD.forEach(t),Gb=d(Jn),nc=s(Jn,"LI",{});var RD=r(nc);ga=s(RD,"A",{href:!0,rel:!0});var UD=r(ga);Xb=i(UD,"Vectorization"),UD.forEach(t),RD.forEach(t),Yb=d(Jn),sc=s(Jn,"LI",{});var HD=r(sc);_a=s(HD,"A",{href:!0,rel:!0});var QD=r(_a);Zb=i(QD,"Parallelization"),QD.forEach(t),HD.forEach(t),Jn.forEach(t),ek=d(ht),at=s(ht,"DIV",{class:!0});var to=r(at);k(va.$$.fragment,to),tk=d(to),Lo=s(to,"P",{});var gl=r(Lo);ok=i(gl,"The "),rc=s(gl,"CODE",{});var VD=r(rc);nk=i(VD,"FlaxDistilBertPreTrainedModel"),VD.forEach(t),sk=i(gl,"forward method, overrides the "),ac=s(gl,"CODE",{});var JD=r(ac);rk=i(JD,"__call__"),JD.forEach(t),ak=i(gl," special method."),gl.forEach(t),ik=d(to),k(qn.$$.fragment,to),lk=d(to),ic=s(to,"P",{});var KD=r(ic);dk=i(KD,"Example:"),KD.forEach(t),ck=d(to),k(Ta.$$.fragment,to),to.forEach(t),ht.forEach(t),Zp=d(o),So=s(o,"H2",{class:!0});var ru=r(So);An=s(ru,"A",{id:!0,class:!0,href:!0});var GD=r(An);lc=s(GD,"SPAN",{});var XD=r(lc);k(ba.$$.fragment,XD),XD.forEach(t),GD.forEach(t),pk=d(ru),dc=s(ru,"SPAN",{});var YD=r(dc);hk=i(YD,"FlaxDistilBertForSequenceClassification"),YD.forEach(t),ru.forEach(t),eh=d(o),xe=s(o,"DIV",{class:!0});var ut=r(xe);k(ka.$$.fragment,ut),uk=d(ut),cc=s(ut,"P",{});var ZD=r(cc);mk=i(ZD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ZD.forEach(t),fk=d(ut),wa=s(ut,"P",{});var au=r(wa);gk=i(au,"This model inherits from "),Gi=s(au,"A",{href:!0});var e2=r(Gi);_k=i(e2,"FlaxPreTrainedModel"),e2.forEach(t),vk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),au.forEach(t),Tk=d(ut),ya=s(ut,"P",{});var iu=r(ya);bk=i(iu,"This model is also a Flax Linen "),$a=s(iu,"A",{href:!0,rel:!0});var t2=r($a);kk=i(t2,"flax.linen.Module"),t2.forEach(t),wk=i(iu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iu.forEach(t),yk=d(ut),pc=s(ut,"P",{});var o2=r(pc);$k=i(o2,"Finally, this model supports inherent JAX features such as:"),o2.forEach(t),Dk=d(ut),jt=s(ut,"UL",{});var Kn=r(jt);hc=s(Kn,"LI",{});var n2=r(hc);Da=s(n2,"A",{href:!0,rel:!0});var s2=r(Da);Fk=i(s2,"Just-In-Time (JIT) compilation"),s2.forEach(t),n2.forEach(t),Bk=d(Kn),uc=s(Kn,"LI",{});var r2=r(uc);Fa=s(r2,"A",{href:!0,rel:!0});var a2=r(Fa);Mk=i(a2,"Automatic Differentiation"),a2.forEach(t),r2.forEach(t),Ek=d(Kn),mc=s(Kn,"LI",{});var i2=r(mc);Ba=s(i2,"A",{href:!0,rel:!0});var l2=r(Ba);xk=i(l2,"Vectorization"),l2.forEach(t),i2.forEach(t),zk=d(Kn),fc=s(Kn,"LI",{});var d2=r(fc);Ma=s(d2,"A",{href:!0,rel:!0});var c2=r(Ma);jk=i(c2,"Parallelization"),c2.forEach(t),d2.forEach(t),Kn.forEach(t),Ck=d(ut),it=s(ut,"DIV",{class:!0});var oo=r(it);k(Ea.$$.fragment,oo),Pk=d(oo),Wo=s(oo,"P",{});var _l=r(Wo);qk=i(_l,"The "),gc=s(_l,"CODE",{});var p2=r(gc);Ak=i(p2,"FlaxDistilBertPreTrainedModel"),p2.forEach(t),Ok=i(_l,"forward method, overrides the "),_c=s(_l,"CODE",{});var h2=r(_c);Nk=i(h2,"__call__"),h2.forEach(t),Ik=i(_l," special method."),_l.forEach(t),Lk=d(oo),k(On.$$.fragment,oo),Sk=d(oo),vc=s(oo,"P",{});var u2=r(vc);Wk=i(u2,"Example:"),u2.forEach(t),Rk=d(oo),k(xa.$$.fragment,oo),oo.forEach(t),ut.forEach(t),th=d(o),Ro=s(o,"H2",{class:!0});var lu=r(Ro);Nn=s(lu,"A",{id:!0,class:!0,href:!0});var m2=r(Nn);Tc=s(m2,"SPAN",{});var f2=r(Tc);k(za.$$.fragment,f2),f2.forEach(t),m2.forEach(t),Uk=d(lu),bc=s(lu,"SPAN",{});var g2=r(bc);Hk=i(g2,"FlaxDistilBertForMultipleChoice"),g2.forEach(t),lu.forEach(t),oh=d(o),ze=s(o,"DIV",{class:!0});var mt=r(ze);k(ja.$$.fragment,mt),Qk=d(mt),kc=s(mt,"P",{});var _2=r(kc);Vk=i(_2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_2.forEach(t),Jk=d(mt),Ca=s(mt,"P",{});var du=r(Ca);Kk=i(du,"This model inherits from "),Xi=s(du,"A",{href:!0});var v2=r(Xi);Gk=i(v2,"FlaxPreTrainedModel"),v2.forEach(t),Xk=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),du.forEach(t),Yk=d(mt),Pa=s(mt,"P",{});var cu=r(Pa);Zk=i(cu,"This model is also a Flax Linen "),qa=s(cu,"A",{href:!0,rel:!0});var T2=r(qa);ew=i(T2,"flax.linen.Module"),T2.forEach(t),tw=i(cu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cu.forEach(t),ow=d(mt),wc=s(mt,"P",{});var b2=r(wc);nw=i(b2,"Finally, this model supports inherent JAX features such as:"),b2.forEach(t),sw=d(mt),Ct=s(mt,"UL",{});var Gn=r(Ct);yc=s(Gn,"LI",{});var k2=r(yc);Aa=s(k2,"A",{href:!0,rel:!0});var w2=r(Aa);rw=i(w2,"Just-In-Time (JIT) compilation"),w2.forEach(t),k2.forEach(t),aw=d(Gn),$c=s(Gn,"LI",{});var y2=r($c);Oa=s(y2,"A",{href:!0,rel:!0});var $2=r(Oa);iw=i($2,"Automatic Differentiation"),$2.forEach(t),y2.forEach(t),lw=d(Gn),Dc=s(Gn,"LI",{});var D2=r(Dc);Na=s(D2,"A",{href:!0,rel:!0});var F2=r(Na);dw=i(F2,"Vectorization"),F2.forEach(t),D2.forEach(t),cw=d(Gn),Fc=s(Gn,"LI",{});var B2=r(Fc);Ia=s(B2,"A",{href:!0,rel:!0});var M2=r(Ia);pw=i(M2,"Parallelization"),M2.forEach(t),B2.forEach(t),Gn.forEach(t),hw=d(mt),lt=s(mt,"DIV",{class:!0});var no=r(lt);k(La.$$.fragment,no),uw=d(no),Uo=s(no,"P",{});var vl=r(Uo);mw=i(vl,"The "),Bc=s(vl,"CODE",{});var E2=r(Bc);fw=i(E2,"FlaxDistilBertPreTrainedModel"),E2.forEach(t),gw=i(vl,"forward method, overrides the "),Mc=s(vl,"CODE",{});var x2=r(Mc);_w=i(x2,"__call__"),x2.forEach(t),vw=i(vl," special method."),vl.forEach(t),Tw=d(no),k(In.$$.fragment,no),bw=d(no),Ec=s(no,"P",{});var z2=r(Ec);kw=i(z2,"Example:"),z2.forEach(t),ww=d(no),k(Sa.$$.fragment,no),no.forEach(t),mt.forEach(t),nh=d(o),Ho=s(o,"H2",{class:!0});var pu=r(Ho);Ln=s(pu,"A",{id:!0,class:!0,href:!0});var j2=r(Ln);xc=s(j2,"SPAN",{});var C2=r(xc);k(Wa.$$.fragment,C2),C2.forEach(t),j2.forEach(t),yw=d(pu),zc=s(pu,"SPAN",{});var P2=r(zc);$w=i(P2,"FlaxDistilBertForTokenClassification"),P2.forEach(t),pu.forEach(t),sh=d(o),je=s(o,"DIV",{class:!0});var ft=r(je);k(Ra.$$.fragment,ft),Dw=d(ft),jc=s(ft,"P",{});var q2=r(jc);Fw=i(q2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),q2.forEach(t),Bw=d(ft),Ua=s(ft,"P",{});var hu=r(Ua);Mw=i(hu,"This model inherits from "),Yi=s(hu,"A",{href:!0});var A2=r(Yi);Ew=i(A2,"FlaxPreTrainedModel"),A2.forEach(t),xw=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hu.forEach(t),zw=d(ft),Ha=s(ft,"P",{});var uu=r(Ha);jw=i(uu,"This model is also a Flax Linen "),Qa=s(uu,"A",{href:!0,rel:!0});var O2=r(Qa);Cw=i(O2,"flax.linen.Module"),O2.forEach(t),Pw=i(uu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uu.forEach(t),qw=d(ft),Cc=s(ft,"P",{});var N2=r(Cc);Aw=i(N2,"Finally, this model supports inherent JAX features such as:"),N2.forEach(t),Ow=d(ft),Pt=s(ft,"UL",{});var Xn=r(Pt);Pc=s(Xn,"LI",{});var I2=r(Pc);Va=s(I2,"A",{href:!0,rel:!0});var L2=r(Va);Nw=i(L2,"Just-In-Time (JIT) compilation"),L2.forEach(t),I2.forEach(t),Iw=d(Xn),qc=s(Xn,"LI",{});var S2=r(qc);Ja=s(S2,"A",{href:!0,rel:!0});var W2=r(Ja);Lw=i(W2,"Automatic Differentiation"),W2.forEach(t),S2.forEach(t),Sw=d(Xn),Ac=s(Xn,"LI",{});var R2=r(Ac);Ka=s(R2,"A",{href:!0,rel:!0});var U2=r(Ka);Ww=i(U2,"Vectorization"),U2.forEach(t),R2.forEach(t),Rw=d(Xn),Oc=s(Xn,"LI",{});var H2=r(Oc);Ga=s(H2,"A",{href:!0,rel:!0});var Q2=r(Ga);Uw=i(Q2,"Parallelization"),Q2.forEach(t),H2.forEach(t),Xn.forEach(t),Hw=d(ft),dt=s(ft,"DIV",{class:!0});var so=r(dt);k(Xa.$$.fragment,so),Qw=d(so),Qo=s(so,"P",{});var Tl=r(Qo);Vw=i(Tl,"The "),Nc=s(Tl,"CODE",{});var V2=r(Nc);Jw=i(V2,"FlaxDistilBertPreTrainedModel"),V2.forEach(t),Kw=i(Tl,"forward method, overrides the "),Ic=s(Tl,"CODE",{});var J2=r(Ic);Gw=i(J2,"__call__"),J2.forEach(t),Xw=i(Tl," special method."),Tl.forEach(t),Yw=d(so),k(Sn.$$.fragment,so),Zw=d(so),Lc=s(so,"P",{});var K2=r(Lc);ey=i(K2,"Example:"),K2.forEach(t),ty=d(so),k(Ya.$$.fragment,so),so.forEach(t),ft.forEach(t),rh=d(o),Vo=s(o,"H2",{class:!0});var mu=r(Vo);Wn=s(mu,"A",{id:!0,class:!0,href:!0});var G2=r(Wn);Sc=s(G2,"SPAN",{});var X2=r(Sc);k(Za.$$.fragment,X2),X2.forEach(t),G2.forEach(t),oy=d(mu),Wc=s(mu,"SPAN",{});var Y2=r(Wc);ny=i(Y2,"FlaxDistilBertForQuestionAnswering"),Y2.forEach(t),mu.forEach(t),ah=d(o),Ce=s(o,"DIV",{class:!0});var gt=r(Ce);k(ei.$$.fragment,gt),sy=d(gt),Jo=s(gt,"P",{});var bl=r(Jo);ry=i(bl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rc=s(bl,"CODE",{});var Z2=r(Rc);ay=i(Z2,"span start logits"),Z2.forEach(t),iy=i(bl," and "),Uc=s(bl,"CODE",{});var eF=r(Uc);ly=i(eF,"span end logits"),eF.forEach(t),dy=i(bl,")."),bl.forEach(t),cy=d(gt),ti=s(gt,"P",{});var fu=r(ti);py=i(fu,"This model inherits from "),Zi=s(fu,"A",{href:!0});var tF=r(Zi);hy=i(tF,"FlaxPreTrainedModel"),tF.forEach(t),uy=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fu.forEach(t),my=d(gt),oi=s(gt,"P",{});var gu=r(oi);fy=i(gu,"This model is also a Flax Linen "),ni=s(gu,"A",{href:!0,rel:!0});var oF=r(ni);gy=i(oF,"flax.linen.Module"),oF.forEach(t),_y=i(gu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gu.forEach(t),vy=d(gt),Hc=s(gt,"P",{});var nF=r(Hc);Ty=i(nF,"Finally, this model supports inherent JAX features such as:"),nF.forEach(t),by=d(gt),qt=s(gt,"UL",{});var Yn=r(qt);Qc=s(Yn,"LI",{});var sF=r(Qc);si=s(sF,"A",{href:!0,rel:!0});var rF=r(si);ky=i(rF,"Just-In-Time (JIT) compilation"),rF.forEach(t),sF.forEach(t),wy=d(Yn),Vc=s(Yn,"LI",{});var aF=r(Vc);ri=s(aF,"A",{href:!0,rel:!0});var iF=r(ri);yy=i(iF,"Automatic Differentiation"),iF.forEach(t),aF.forEach(t),$y=d(Yn),Jc=s(Yn,"LI",{});var lF=r(Jc);ai=s(lF,"A",{href:!0,rel:!0});var dF=r(ai);Dy=i(dF,"Vectorization"),dF.forEach(t),lF.forEach(t),Fy=d(Yn),Kc=s(Yn,"LI",{});var cF=r(Kc);ii=s(cF,"A",{href:!0,rel:!0});var pF=r(ii);By=i(pF,"Parallelization"),pF.forEach(t),cF.forEach(t),Yn.forEach(t),My=d(gt),ct=s(gt,"DIV",{class:!0});var ro=r(ct);k(li.$$.fragment,ro),Ey=d(ro),Ko=s(ro,"P",{});var kl=r(Ko);xy=i(kl,"The "),Gc=s(kl,"CODE",{});var hF=r(Gc);zy=i(hF,"FlaxDistilBertPreTrainedModel"),hF.forEach(t),jy=i(kl,"forward method, overrides the "),Xc=s(kl,"CODE",{});var uF=r(Xc);Cy=i(uF,"__call__"),uF.forEach(t),Py=i(kl," special method."),kl.forEach(t),qy=d(ro),k(Rn.$$.fragment,ro),Ay=d(ro),Yc=s(ro,"P",{});var mF=r(Yc);Oy=i(mF,"Example:"),mF.forEach(t),Ny=d(ro),k(di.$$.fragment,ro),ro.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(HF)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Zn,"href","https://huggingface.co/victorsanh"),c(Zn,"rel","nofollow"),c(es,"href","https://huggingface.co/kamalkraj"),c(es,"rel","nofollow"),c(ts,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(ts,"rel","nofollow"),c(Go,"id","transformers.DistilBertConfig"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.DistilBertConfig"),c(ao,"class","relative group"),c(mi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),c(fi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ss,"href","https://huggingface.co/distilbert-base-uncased"),c(ss,"rel","nofollow"),c(gi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(_i,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ue,"class","docstring"),c(Xo,"id","transformers.DistilBertTokenizer"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.DistilBertTokenizer"),c(lo,"class","relative group"),c(vi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(Ti,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(bi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Zo,"id","transformers.DistilBertTokenizerFast"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.DistilBertTokenizerFast"),c(co,"class","relative group"),c(ki,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(wi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(yi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(tn,"id","transformers.DistilBertModel"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.DistilBertModel"),c(po,"class","relative group"),c($i,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_s,"rel","nofollow"),c(Di,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),c(Xe,"class","docstring"),c(He,"class","docstring"),c(nn,"id","transformers.DistilBertForMaskedLM"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.DistilBertForMaskedLM"),c(uo,"class","relative group"),c(Fi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ds,"rel","nofollow"),c(Bi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Se,"class","docstring"),c(Qe,"class","docstring"),c(rn,"id","transformers.DistilBertForSequenceClassification"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.DistilBertForSequenceClassification"),c(fo,"class","relative group"),c(Mi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cs,"rel","nofollow"),c(Ei,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(be,"class","docstring"),c(Ve,"class","docstring"),c(ln,"id","transformers.DistilBertForMultipleChoice"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.DistilBertForMultipleChoice"),c(_o,"class","relative group"),c(xi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rs,"rel","nofollow"),c(zi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ye,"class","docstring"),c(Je,"class","docstring"),c(cn,"id","transformers.DistilBertForTokenClassification"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.DistilBertForTokenClassification"),c(To,"class","relative group"),c(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gs,"rel","nofollow"),c(Ci,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(We,"class","docstring"),c(Ke,"class","docstring"),c(hn,"id","transformers.DistilBertForQuestionAnswering"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.DistilBertForQuestionAnswering"),c(ko,"class","relative group"),c(Pi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(sr,"rel","nofollow"),c(qi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Re,"class","docstring"),c(Ge,"class","docstring"),c(mn,"id","transformers.TFDistilBertModel"),c(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mn,"href","#transformers.TFDistilBertModel"),c($o,"class","relative group"),c(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(Oi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ze,"class","docstring"),c(qe,"class","docstring"),c(_n,"id","transformers.TFDistilBertForMaskedLM"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.TFDistilBertForMaskedLM"),c(Fo,"class","relative group"),c(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(br,"rel","nofollow"),c(Ii,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(bn,"id","transformers.TFDistilBertForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.TFDistilBertForSequenceClassification"),c(Mo,"class","relative group"),c(Li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Br,"rel","nofollow"),c(Si,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(tt,"class","docstring"),c(Oe,"class","docstring"),c(yn,"id","transformers.TFDistilBertForMultipleChoice"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.TFDistilBertForMultipleChoice"),c(xo,"class","relative group"),c(Wi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pr,"rel","nofollow"),c(Ri,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(ot,"class","docstring"),c(Ne,"class","docstring"),c(Fn,"id","transformers.TFDistilBertForTokenClassification"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#transformers.TFDistilBertForTokenClassification"),c(jo,"class","relative group"),c(Ui,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sr,"rel","nofollow"),c(Hi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(nt,"class","docstring"),c(Ie,"class","docstring"),c(En,"id","transformers.TFDistilBertForQuestionAnswering"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Po,"class","relative group"),c(Qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Jr,"rel","nofollow"),c(Vi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(st,"class","docstring"),c(Le,"class","docstring"),c(jn,"id","transformers.FlaxDistilBertModel"),c(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jn,"href","#transformers.FlaxDistilBertModel"),c(Oo,"class","relative group"),c(Ji,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ra,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(Pn,"id","transformers.FlaxDistilBertForMaskedLM"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Io,"class","relative group"),c(Ki,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ua,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ua,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ma,"rel","nofollow"),c(fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fa,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ga,"rel","nofollow"),c(_a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_a,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(An,"id","transformers.FlaxDistilBertForSequenceClassification"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(So,"class","relative group"),c(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c($a,"rel","nofollow"),c(Da,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Da,"rel","nofollow"),c(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fa,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ba,"rel","nofollow"),c(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ma,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Nn,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nn,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ro,"class","relative group"),c(Xi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(qa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(qa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Aa,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Oa,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Na,"rel","nofollow"),c(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ia,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Ln,"id","transformers.FlaxDistilBertForTokenClassification"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Ho,"class","relative group"),c(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Qa,"rel","nofollow"),c(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Va,"rel","nofollow"),c(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ja,"rel","nofollow"),c(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ka,"rel","nofollow"),c(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ga,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring"),c(Wn,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Vo,"class","relative group"),c(Zi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ni,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ni,"rel","nofollow"),c(si,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(si,"rel","nofollow"),c(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ri,"rel","nofollow"),c(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ai,"rel","nofollow"),c(ii,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ii,"rel","nofollow"),c(ct,"class","docstring"),c(Ce,"class","docstring")},m(o,f){e(document.head,p),u(o,F,f),u(o,g,f),e(g,v),e(v,T),w(_,T,null),e(g,m),e(g,B),e(B,de),u(o,V,f),u(o,E,f),e(E,G),e(G,L),w(X,L,null),e(E,ce),e(E,S),e(S,pe),u(o,re,f),u(o,N,f),e(N,q),e(N,Y),e(Y,J),e(N,x),e(N,z),e(z,he),e(N,W),e(N,oe),e(oe,ue),e(N,R),u(o,ae,f),u(o,ee,f),e(ee,A),u(o,ie,f),u(o,I,f),e(I,ne),e(ne,me),u(o,P,f),u(o,te,f),e(te,U),u(o,le,f),u(o,h,f),e(h,M),e(M,K),e(M,_e),e(_e,ke),e(M,O),e(M,ve),e(ve,we),e(M,ye),e(M,C),e(C,H),e(M,$e),e(h,De),e(h,Z),e(Z,Fe),e(Z,se),e(se,Be),e(Z,_u),u(o,vp,f),u(o,Tt,f),e(Tt,vu),e(Tt,Zn),e(Zn,Tu),e(Tt,bu),e(Tt,es),e(es,ku),e(Tt,wu),e(Tt,ts),e(ts,yu),e(Tt,$u),u(o,Tp,f),u(o,ao,f),e(ao,Go),e(Go,wl),w(os,wl,null),e(ao,Du),e(ao,yl),e(yl,Fu),u(o,bp,f),u(o,Ue,f),w(ns,Ue,null),e(Ue,Bu),e(Ue,Et),e(Et,Mu),e(Et,mi),e(mi,Eu),e(Et,xu),e(Et,fi),e(fi,zu),e(Et,ju),e(Et,ss),e(ss,Cu),e(Et,Pu),e(Ue,qu),e(Ue,io),e(io,Au),e(io,gi),e(gi,Ou),e(io,Nu),e(io,_i),e(_i,Iu),e(io,Lu),e(Ue,Su),e(Ue,$l),e($l,Wu),e(Ue,Ru),w(rs,Ue,null),u(o,kp,f),u(o,lo,f),e(lo,Xo),e(Xo,Dl),w(as,Dl,null),e(lo,Uu),e(lo,Fl),e(Fl,Hu),u(o,wp,f),u(o,_t,f),w(is,_t,null),e(_t,Qu),e(_t,Bl),e(Bl,Vu),e(_t,Ju),e(_t,Yo),e(Yo,vi),e(vi,Ku),e(Yo,Gu),e(Yo,Ti),e(Ti,Xu),e(Yo,Yu),e(_t,Zu),e(_t,ls),e(ls,em),e(ls,bi),e(bi,tm),e(ls,om),u(o,yp,f),u(o,co,f),e(co,Zo),e(Zo,Ml),w(ds,Ml,null),e(co,nm),e(co,El),e(El,sm),u(o,$p,f),u(o,vt,f),w(cs,vt,null),e(vt,rm),e(vt,ps),e(ps,am),e(ps,xl),e(xl,im),e(ps,lm),e(vt,dm),e(vt,en),e(en,ki),e(ki,cm),e(en,pm),e(en,wi),e(wi,hm),e(en,um),e(vt,mm),e(vt,hs),e(hs,fm),e(hs,yi),e(yi,gm),e(hs,_m),u(o,Dp,f),u(o,po,f),e(po,tn),e(tn,zl),w(us,zl,null),e(po,vm),e(po,jl),e(jl,Tm),u(o,Fp,f),u(o,He,f),w(ms,He,null),e(He,bm),e(He,Cl),e(Cl,km),e(He,wm),e(He,fs),e(fs,ym),e(fs,$i),e($i,$m),e(fs,Dm),e(He,Fm),e(He,gs),e(gs,Bm),e(gs,_s),e(_s,Mm),e(gs,Em),e(He,xm),e(He,Xe),w(vs,Xe,null),e(Xe,zm),e(Xe,ho),e(ho,jm),e(ho,Di),e(Di,Cm),e(ho,Pm),e(ho,Pl),e(Pl,qm),e(ho,Am),e(Xe,Om),w(on,Xe,null),e(Xe,Nm),e(Xe,ql),e(ql,Im),e(Xe,Lm),w(Ts,Xe,null),u(o,Bp,f),u(o,uo,f),e(uo,nn),e(nn,Al),w(bs,Al,null),e(uo,Sm),e(uo,Ol),e(Ol,Wm),u(o,Mp,f),u(o,Qe,f),w(ks,Qe,null),e(Qe,Rm),e(Qe,ws),e(ws,Um),e(ws,Nl),e(Nl,Hm),e(ws,Qm),e(Qe,Vm),e(Qe,ys),e(ys,Jm),e(ys,Fi),e(Fi,Km),e(ys,Gm),e(Qe,Xm),e(Qe,$s),e($s,Ym),e($s,Ds),e(Ds,Zm),e($s,ef),e(Qe,tf),e(Qe,Se),w(Fs,Se,null),e(Se,of),e(Se,mo),e(mo,nf),e(mo,Bi),e(Bi,sf),e(mo,rf),e(mo,Il),e(Il,af),e(mo,lf),e(Se,df),w(sn,Se,null),e(Se,cf),e(Se,Ll),e(Ll,pf),e(Se,hf),w(Bs,Se,null),e(Se,uf),w(Ms,Se,null),u(o,Ep,f),u(o,fo,f),e(fo,rn),e(rn,Sl),w(Es,Sl,null),e(fo,mf),e(fo,Wl),e(Wl,ff),u(o,xp,f),u(o,Ve,f),w(xs,Ve,null),e(Ve,gf),e(Ve,Rl),e(Rl,_f),e(Ve,vf),e(Ve,zs),e(zs,Tf),e(zs,Mi),e(Mi,bf),e(zs,kf),e(Ve,wf),e(Ve,js),e(js,yf),e(js,Cs),e(Cs,$f),e(js,Df),e(Ve,Ff),e(Ve,be),w(Ps,be,null),e(be,Bf),e(be,go),e(go,Mf),e(go,Ei),e(Ei,Ef),e(go,xf),e(go,Ul),e(Ul,zf),e(go,jf),e(be,Cf),w(an,be,null),e(be,Pf),e(be,Hl),e(Hl,qf),e(be,Af),w(qs,be,null),e(be,Of),w(As,be,null),e(be,Nf),e(be,Ql),e(Ql,If),e(be,Lf),w(Os,be,null),e(be,Sf),w(Ns,be,null),u(o,zp,f),u(o,_o,f),e(_o,ln),e(ln,Vl),w(Is,Vl,null),e(_o,Wf),e(_o,Jl),e(Jl,Rf),u(o,jp,f),u(o,Je,f),w(Ls,Je,null),e(Je,Uf),e(Je,Kl),e(Kl,Hf),e(Je,Qf),e(Je,Ss),e(Ss,Vf),e(Ss,xi),e(xi,Jf),e(Ss,Kf),e(Je,Gf),e(Je,Ws),e(Ws,Xf),e(Ws,Rs),e(Rs,Yf),e(Ws,Zf),e(Je,eg),e(Je,Ye),w(Us,Ye,null),e(Ye,tg),e(Ye,vo),e(vo,og),e(vo,zi),e(zi,ng),e(vo,sg),e(vo,Gl),e(Gl,rg),e(vo,ag),e(Ye,ig),w(dn,Ye,null),e(Ye,lg),e(Ye,Xl),e(Xl,dg),e(Ye,cg),w(Hs,Ye,null),u(o,Cp,f),u(o,To,f),e(To,cn),e(cn,Yl),w(Qs,Yl,null),e(To,pg),e(To,Zl),e(Zl,hg),u(o,Pp,f),u(o,Ke,f),w(Vs,Ke,null),e(Ke,ug),e(Ke,ed),e(ed,mg),e(Ke,fg),e(Ke,Js),e(Js,gg),e(Js,ji),e(ji,_g),e(Js,vg),e(Ke,Tg),e(Ke,Ks),e(Ks,bg),e(Ks,Gs),e(Gs,kg),e(Ks,wg),e(Ke,yg),e(Ke,We),w(Xs,We,null),e(We,$g),e(We,bo),e(bo,Dg),e(bo,Ci),e(Ci,Fg),e(bo,Bg),e(bo,td),e(td,Mg),e(bo,Eg),e(We,xg),w(pn,We,null),e(We,zg),e(We,od),e(od,jg),e(We,Cg),w(Ys,We,null),e(We,Pg),w(Zs,We,null),u(o,qp,f),u(o,ko,f),e(ko,hn),e(hn,nd),w(er,nd,null),e(ko,qg),e(ko,sd),e(sd,Ag),u(o,Ap,f),u(o,Ge,f),w(tr,Ge,null),e(Ge,Og),e(Ge,wo),e(wo,Ng),e(wo,rd),e(rd,Ig),e(wo,Lg),e(wo,ad),e(ad,Sg),e(wo,Wg),e(Ge,Rg),e(Ge,or),e(or,Ug),e(or,Pi),e(Pi,Hg),e(or,Qg),e(Ge,Vg),e(Ge,nr),e(nr,Jg),e(nr,sr),e(sr,Kg),e(nr,Gg),e(Ge,Xg),e(Ge,Re),w(rr,Re,null),e(Re,Yg),e(Re,yo),e(yo,Zg),e(yo,qi),e(qi,e_),e(yo,t_),e(yo,id),e(id,o_),e(yo,n_),e(Re,s_),w(un,Re,null),e(Re,r_),e(Re,ld),e(ld,a_),e(Re,i_),w(ar,Re,null),e(Re,l_),w(ir,Re,null),u(o,Op,f),u(o,$o,f),e($o,mn),e(mn,dd),w(lr,dd,null),e($o,d_),e($o,cd),e(cd,c_),u(o,Np,f),u(o,qe,f),w(dr,qe,null),e(qe,p_),e(qe,pd),e(pd,h_),e(qe,u_),e(qe,cr),e(cr,m_),e(cr,Ai),e(Ai,f_),e(cr,g_),e(qe,__),e(qe,pr),e(pr,v_),e(pr,hr),e(hr,T_),e(pr,b_),e(qe,k_),w(fn,qe,null),e(qe,w_),e(qe,Ze),w(ur,Ze,null),e(Ze,y_),e(Ze,Do),e(Do,$_),e(Do,Oi),e(Oi,D_),e(Do,F_),e(Do,hd),e(hd,B_),e(Do,M_),e(Ze,E_),w(gn,Ze,null),e(Ze,x_),e(Ze,ud),e(ud,z_),e(Ze,j_),w(mr,Ze,null),u(o,Ip,f),u(o,Fo,f),e(Fo,_n),e(_n,md),w(fr,md,null),e(Fo,C_),e(Fo,fd),e(fd,P_),u(o,Lp,f),u(o,Ae,f),w(gr,Ae,null),e(Ae,q_),e(Ae,_r),e(_r,A_),e(_r,gd),e(gd,O_),e(_r,N_),e(Ae,I_),e(Ae,vr),e(vr,L_),e(vr,Ni),e(Ni,S_),e(vr,W_),e(Ae,R_),e(Ae,Tr),e(Tr,U_),e(Tr,br),e(br,H_),e(Tr,Q_),e(Ae,V_),w(vn,Ae,null),e(Ae,J_),e(Ae,et),w(kr,et,null),e(et,K_),e(et,Bo),e(Bo,G_),e(Bo,Ii),e(Ii,X_),e(Bo,Y_),e(Bo,_d),e(_d,Z_),e(Bo,ev),e(et,tv),w(Tn,et,null),e(et,ov),e(et,vd),e(vd,nv),e(et,sv),w(wr,et,null),u(o,Sp,f),u(o,Mo,f),e(Mo,bn),e(bn,Td),w(yr,Td,null),e(Mo,rv),e(Mo,bd),e(bd,av),u(o,Wp,f),u(o,Oe,f),w($r,Oe,null),e(Oe,iv),e(Oe,kd),e(kd,lv),e(Oe,dv),e(Oe,Dr),e(Dr,cv),e(Dr,Li),e(Li,pv),e(Dr,hv),e(Oe,uv),e(Oe,Fr),e(Fr,mv),e(Fr,Br),e(Br,fv),e(Fr,gv),e(Oe,_v),w(kn,Oe,null),e(Oe,vv),e(Oe,tt),w(Mr,tt,null),e(tt,Tv),e(tt,Eo),e(Eo,bv),e(Eo,Si),e(Si,kv),e(Eo,wv),e(Eo,wd),e(wd,yv),e(Eo,$v),e(tt,Dv),w(wn,tt,null),e(tt,Fv),e(tt,yd),e(yd,Bv),e(tt,Mv),w(Er,tt,null),u(o,Rp,f),u(o,xo,f),e(xo,yn),e(yn,$d),w(xr,$d,null),e(xo,Ev),e(xo,Dd),e(Dd,xv),u(o,Up,f),u(o,Ne,f),w(zr,Ne,null),e(Ne,zv),e(Ne,Fd),e(Fd,jv),e(Ne,Cv),e(Ne,jr),e(jr,Pv),e(jr,Wi),e(Wi,qv),e(jr,Av),e(Ne,Ov),e(Ne,Cr),e(Cr,Nv),e(Cr,Pr),e(Pr,Iv),e(Cr,Lv),e(Ne,Sv),w($n,Ne,null),e(Ne,Wv),e(Ne,ot),w(qr,ot,null),e(ot,Rv),e(ot,zo),e(zo,Uv),e(zo,Ri),e(Ri,Hv),e(zo,Qv),e(zo,Bd),e(Bd,Vv),e(zo,Jv),e(ot,Kv),w(Dn,ot,null),e(ot,Gv),e(ot,Md),e(Md,Xv),e(ot,Yv),w(Ar,ot,null),u(o,Hp,f),u(o,jo,f),e(jo,Fn),e(Fn,Ed),w(Or,Ed,null),e(jo,Zv),e(jo,xd),e(xd,eT),u(o,Qp,f),u(o,Ie,f),w(Nr,Ie,null),e(Ie,tT),e(Ie,zd),e(zd,oT),e(Ie,nT),e(Ie,Ir),e(Ir,sT),e(Ir,Ui),e(Ui,rT),e(Ir,aT),e(Ie,iT),e(Ie,Lr),e(Lr,lT),e(Lr,Sr),e(Sr,dT),e(Lr,cT),e(Ie,pT),w(Bn,Ie,null),e(Ie,hT),e(Ie,nt),w(Wr,nt,null),e(nt,uT),e(nt,Co),e(Co,mT),e(Co,Hi),e(Hi,fT),e(Co,gT),e(Co,jd),e(jd,_T),e(Co,vT),e(nt,TT),w(Mn,nt,null),e(nt,bT),e(nt,Cd),e(Cd,kT),e(nt,wT),w(Rr,nt,null),u(o,Vp,f),u(o,Po,f),e(Po,En),e(En,Pd),w(Ur,Pd,null),e(Po,yT),e(Po,qd),e(qd,$T),u(o,Jp,f),u(o,Le,f),w(Hr,Le,null),e(Le,DT),e(Le,qo),e(qo,FT),e(qo,Ad),e(Ad,BT),e(qo,MT),e(qo,Od),e(Od,ET),e(qo,xT),e(Le,zT),e(Le,Qr),e(Qr,jT),e(Qr,Qi),e(Qi,CT),e(Qr,PT),e(Le,qT),e(Le,Vr),e(Vr,AT),e(Vr,Jr),e(Jr,OT),e(Vr,NT),e(Le,IT),w(xn,Le,null),e(Le,LT),e(Le,st),w(Kr,st,null),e(st,ST),e(st,Ao),e(Ao,WT),e(Ao,Vi),e(Vi,RT),e(Ao,UT),e(Ao,Nd),e(Nd,HT),e(Ao,QT),e(st,VT),w(zn,st,null),e(st,JT),e(st,Id),e(Id,KT),e(st,GT),w(Gr,st,null),u(o,Kp,f),u(o,Oo,f),e(Oo,jn),e(jn,Ld),w(Xr,Ld,null),e(Oo,XT),e(Oo,Sd),e(Sd,YT),u(o,Gp,f),u(o,Me,f),w(Yr,Me,null),e(Me,ZT),e(Me,Wd),e(Wd,eb),e(Me,tb),e(Me,Zr),e(Zr,ob),e(Zr,Ji),e(Ji,nb),e(Zr,sb),e(Me,rb),e(Me,ea),e(ea,ab),e(ea,ta),e(ta,ib),e(ea,lb),e(Me,db),e(Me,Rd),e(Rd,cb),e(Me,pb),e(Me,xt),e(xt,Ud),e(Ud,oa),e(oa,hb),e(xt,ub),e(xt,Hd),e(Hd,na),e(na,mb),e(xt,fb),e(xt,Qd),e(Qd,sa),e(sa,gb),e(xt,_b),e(xt,Vd),e(Vd,ra),e(ra,vb),e(Me,Tb),e(Me,rt),w(aa,rt,null),e(rt,bb),e(rt,No),e(No,kb),e(No,Jd),e(Jd,wb),e(No,yb),e(No,Kd),e(Kd,$b),e(No,Db),e(rt,Fb),w(Cn,rt,null),e(rt,Bb),e(rt,Gd),e(Gd,Mb),e(rt,Eb),w(ia,rt,null),u(o,Xp,f),u(o,Io,f),e(Io,Pn),e(Pn,Xd),w(la,Xd,null),e(Io,xb),e(Io,Yd),e(Yd,zb),u(o,Yp,f),u(o,Ee,f),w(da,Ee,null),e(Ee,jb),e(Ee,ca),e(ca,Cb),e(ca,Zd),e(Zd,Pb),e(ca,qb),e(Ee,Ab),e(Ee,pa),e(pa,Ob),e(pa,Ki),e(Ki,Nb),e(pa,Ib),e(Ee,Lb),e(Ee,ha),e(ha,Sb),e(ha,ua),e(ua,Wb),e(ha,Rb),e(Ee,Ub),e(Ee,ec),e(ec,Hb),e(Ee,Qb),e(Ee,zt),e(zt,tc),e(tc,ma),e(ma,Vb),e(zt,Jb),e(zt,oc),e(oc,fa),e(fa,Kb),e(zt,Gb),e(zt,nc),e(nc,ga),e(ga,Xb),e(zt,Yb),e(zt,sc),e(sc,_a),e(_a,Zb),e(Ee,ek),e(Ee,at),w(va,at,null),e(at,tk),e(at,Lo),e(Lo,ok),e(Lo,rc),e(rc,nk),e(Lo,sk),e(Lo,ac),e(ac,rk),e(Lo,ak),e(at,ik),w(qn,at,null),e(at,lk),e(at,ic),e(ic,dk),e(at,ck),w(Ta,at,null),u(o,Zp,f),u(o,So,f),e(So,An),e(An,lc),w(ba,lc,null),e(So,pk),e(So,dc),e(dc,hk),u(o,eh,f),u(o,xe,f),w(ka,xe,null),e(xe,uk),e(xe,cc),e(cc,mk),e(xe,fk),e(xe,wa),e(wa,gk),e(wa,Gi),e(Gi,_k),e(wa,vk),e(xe,Tk),e(xe,ya),e(ya,bk),e(ya,$a),e($a,kk),e(ya,wk),e(xe,yk),e(xe,pc),e(pc,$k),e(xe,Dk),e(xe,jt),e(jt,hc),e(hc,Da),e(Da,Fk),e(jt,Bk),e(jt,uc),e(uc,Fa),e(Fa,Mk),e(jt,Ek),e(jt,mc),e(mc,Ba),e(Ba,xk),e(jt,zk),e(jt,fc),e(fc,Ma),e(Ma,jk),e(xe,Ck),e(xe,it),w(Ea,it,null),e(it,Pk),e(it,Wo),e(Wo,qk),e(Wo,gc),e(gc,Ak),e(Wo,Ok),e(Wo,_c),e(_c,Nk),e(Wo,Ik),e(it,Lk),w(On,it,null),e(it,Sk),e(it,vc),e(vc,Wk),e(it,Rk),w(xa,it,null),u(o,th,f),u(o,Ro,f),e(Ro,Nn),e(Nn,Tc),w(za,Tc,null),e(Ro,Uk),e(Ro,bc),e(bc,Hk),u(o,oh,f),u(o,ze,f),w(ja,ze,null),e(ze,Qk),e(ze,kc),e(kc,Vk),e(ze,Jk),e(ze,Ca),e(Ca,Kk),e(Ca,Xi),e(Xi,Gk),e(Ca,Xk),e(ze,Yk),e(ze,Pa),e(Pa,Zk),e(Pa,qa),e(qa,ew),e(Pa,tw),e(ze,ow),e(ze,wc),e(wc,nw),e(ze,sw),e(ze,Ct),e(Ct,yc),e(yc,Aa),e(Aa,rw),e(Ct,aw),e(Ct,$c),e($c,Oa),e(Oa,iw),e(Ct,lw),e(Ct,Dc),e(Dc,Na),e(Na,dw),e(Ct,cw),e(Ct,Fc),e(Fc,Ia),e(Ia,pw),e(ze,hw),e(ze,lt),w(La,lt,null),e(lt,uw),e(lt,Uo),e(Uo,mw),e(Uo,Bc),e(Bc,fw),e(Uo,gw),e(Uo,Mc),e(Mc,_w),e(Uo,vw),e(lt,Tw),w(In,lt,null),e(lt,bw),e(lt,Ec),e(Ec,kw),e(lt,ww),w(Sa,lt,null),u(o,nh,f),u(o,Ho,f),e(Ho,Ln),e(Ln,xc),w(Wa,xc,null),e(Ho,yw),e(Ho,zc),e(zc,$w),u(o,sh,f),u(o,je,f),w(Ra,je,null),e(je,Dw),e(je,jc),e(jc,Fw),e(je,Bw),e(je,Ua),e(Ua,Mw),e(Ua,Yi),e(Yi,Ew),e(Ua,xw),e(je,zw),e(je,Ha),e(Ha,jw),e(Ha,Qa),e(Qa,Cw),e(Ha,Pw),e(je,qw),e(je,Cc),e(Cc,Aw),e(je,Ow),e(je,Pt),e(Pt,Pc),e(Pc,Va),e(Va,Nw),e(Pt,Iw),e(Pt,qc),e(qc,Ja),e(Ja,Lw),e(Pt,Sw),e(Pt,Ac),e(Ac,Ka),e(Ka,Ww),e(Pt,Rw),e(Pt,Oc),e(Oc,Ga),e(Ga,Uw),e(je,Hw),e(je,dt),w(Xa,dt,null),e(dt,Qw),e(dt,Qo),e(Qo,Vw),e(Qo,Nc),e(Nc,Jw),e(Qo,Kw),e(Qo,Ic),e(Ic,Gw),e(Qo,Xw),e(dt,Yw),w(Sn,dt,null),e(dt,Zw),e(dt,Lc),e(Lc,ey),e(dt,ty),w(Ya,dt,null),u(o,rh,f),u(o,Vo,f),e(Vo,Wn),e(Wn,Sc),w(Za,Sc,null),e(Vo,oy),e(Vo,Wc),e(Wc,ny),u(o,ah,f),u(o,Ce,f),w(ei,Ce,null),e(Ce,sy),e(Ce,Jo),e(Jo,ry),e(Jo,Rc),e(Rc,ay),e(Jo,iy),e(Jo,Uc),e(Uc,ly),e(Jo,dy),e(Ce,cy),e(Ce,ti),e(ti,py),e(ti,Zi),e(Zi,hy),e(ti,uy),e(Ce,my),e(Ce,oi),e(oi,fy),e(oi,ni),e(ni,gy),e(oi,_y),e(Ce,vy),e(Ce,Hc),e(Hc,Ty),e(Ce,by),e(Ce,qt),e(qt,Qc),e(Qc,si),e(si,ky),e(qt,wy),e(qt,Vc),e(Vc,ri),e(ri,yy),e(qt,$y),e(qt,Jc),e(Jc,ai),e(ai,Dy),e(qt,Fy),e(qt,Kc),e(Kc,ii),e(ii,By),e(Ce,My),e(Ce,ct),w(li,ct,null),e(ct,Ey),e(ct,Ko),e(Ko,xy),e(Ko,Gc),e(Gc,zy),e(Ko,jy),e(Ko,Xc),e(Xc,Cy),e(Ko,Py),e(ct,qy),w(Rn,ct,null),e(ct,Ay),e(ct,Yc),e(Yc,Oy),e(ct,Ny),w(di,ct,null),ih=!0},p(o,[f]){const ci={};f&2&&(ci.$$scope={dirty:f,ctx:o}),on.$set(ci);const Zc={};f&2&&(Zc.$$scope={dirty:f,ctx:o}),sn.$set(Zc);const ep={};f&2&&(ep.$$scope={dirty:f,ctx:o}),an.$set(ep);const tp={};f&2&&(tp.$$scope={dirty:f,ctx:o}),dn.$set(tp);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:o}),pn.$set(pi);const op={};f&2&&(op.$$scope={dirty:f,ctx:o}),un.$set(op);const np={};f&2&&(np.$$scope={dirty:f,ctx:o}),fn.$set(np);const sp={};f&2&&(sp.$$scope={dirty:f,ctx:o}),gn.$set(sp);const At={};f&2&&(At.$$scope={dirty:f,ctx:o}),vn.$set(At);const rp={};f&2&&(rp.$$scope={dirty:f,ctx:o}),Tn.$set(rp);const ap={};f&2&&(ap.$$scope={dirty:f,ctx:o}),kn.$set(ap);const ip={};f&2&&(ip.$$scope={dirty:f,ctx:o}),wn.$set(ip);const lp={};f&2&&(lp.$$scope={dirty:f,ctx:o}),$n.$set(lp);const dp={};f&2&&(dp.$$scope={dirty:f,ctx:o}),Dn.$set(dp);const cp={};f&2&&(cp.$$scope={dirty:f,ctx:o}),Bn.$set(cp);const pp={};f&2&&(pp.$$scope={dirty:f,ctx:o}),Mn.$set(pp);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:o}),xn.$set(hi);const Ot={};f&2&&(Ot.$$scope={dirty:f,ctx:o}),zn.$set(Ot);const hp={};f&2&&(hp.$$scope={dirty:f,ctx:o}),Cn.$set(hp);const up={};f&2&&(up.$$scope={dirty:f,ctx:o}),qn.$set(up);const mp={};f&2&&(mp.$$scope={dirty:f,ctx:o}),On.$set(mp);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:o}),In.$set(ui);const fp={};f&2&&(fp.$$scope={dirty:f,ctx:o}),Sn.$set(fp);const Nt={};f&2&&(Nt.$$scope={dirty:f,ctx:o}),Rn.$set(Nt)},i(o){ih||(y(_.$$.fragment,o),y(X.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(us.$$.fragment,o),y(ms.$$.fragment,o),y(vs.$$.fragment,o),y(on.$$.fragment,o),y(Ts.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(Fs.$$.fragment,o),y(sn.$$.fragment,o),y(Bs.$$.fragment,o),y(Ms.$$.fragment,o),y(Es.$$.fragment,o),y(xs.$$.fragment,o),y(Ps.$$.fragment,o),y(an.$$.fragment,o),y(qs.$$.fragment,o),y(As.$$.fragment,o),y(Os.$$.fragment,o),y(Ns.$$.fragment,o),y(Is.$$.fragment,o),y(Ls.$$.fragment,o),y(Us.$$.fragment,o),y(dn.$$.fragment,o),y(Hs.$$.fragment,o),y(Qs.$$.fragment,o),y(Vs.$$.fragment,o),y(Xs.$$.fragment,o),y(pn.$$.fragment,o),y(Ys.$$.fragment,o),y(Zs.$$.fragment,o),y(er.$$.fragment,o),y(tr.$$.fragment,o),y(rr.$$.fragment,o),y(un.$$.fragment,o),y(ar.$$.fragment,o),y(ir.$$.fragment,o),y(lr.$$.fragment,o),y(dr.$$.fragment,o),y(fn.$$.fragment,o),y(ur.$$.fragment,o),y(gn.$$.fragment,o),y(mr.$$.fragment,o),y(fr.$$.fragment,o),y(gr.$$.fragment,o),y(vn.$$.fragment,o),y(kr.$$.fragment,o),y(Tn.$$.fragment,o),y(wr.$$.fragment,o),y(yr.$$.fragment,o),y($r.$$.fragment,o),y(kn.$$.fragment,o),y(Mr.$$.fragment,o),y(wn.$$.fragment,o),y(Er.$$.fragment,o),y(xr.$$.fragment,o),y(zr.$$.fragment,o),y($n.$$.fragment,o),y(qr.$$.fragment,o),y(Dn.$$.fragment,o),y(Ar.$$.fragment,o),y(Or.$$.fragment,o),y(Nr.$$.fragment,o),y(Bn.$$.fragment,o),y(Wr.$$.fragment,o),y(Mn.$$.fragment,o),y(Rr.$$.fragment,o),y(Ur.$$.fragment,o),y(Hr.$$.fragment,o),y(xn.$$.fragment,o),y(Kr.$$.fragment,o),y(zn.$$.fragment,o),y(Gr.$$.fragment,o),y(Xr.$$.fragment,o),y(Yr.$$.fragment,o),y(aa.$$.fragment,o),y(Cn.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(da.$$.fragment,o),y(va.$$.fragment,o),y(qn.$$.fragment,o),y(Ta.$$.fragment,o),y(ba.$$.fragment,o),y(ka.$$.fragment,o),y(Ea.$$.fragment,o),y(On.$$.fragment,o),y(xa.$$.fragment,o),y(za.$$.fragment,o),y(ja.$$.fragment,o),y(La.$$.fragment,o),y(In.$$.fragment,o),y(Sa.$$.fragment,o),y(Wa.$$.fragment,o),y(Ra.$$.fragment,o),y(Xa.$$.fragment,o),y(Sn.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(ei.$$.fragment,o),y(li.$$.fragment,o),y(Rn.$$.fragment,o),y(di.$$.fragment,o),ih=!0)},o(o){$(_.$$.fragment,o),$(X.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(us.$$.fragment,o),$(ms.$$.fragment,o),$(vs.$$.fragment,o),$(on.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(Fs.$$.fragment,o),$(sn.$$.fragment,o),$(Bs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(xs.$$.fragment,o),$(Ps.$$.fragment,o),$(an.$$.fragment,o),$(qs.$$.fragment,o),$(As.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(Ls.$$.fragment,o),$(Us.$$.fragment,o),$(dn.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(Xs.$$.fragment,o),$(pn.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(rr.$$.fragment,o),$(un.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(fn.$$.fragment,o),$(ur.$$.fragment,o),$(gn.$$.fragment,o),$(mr.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(vn.$$.fragment,o),$(kr.$$.fragment,o),$(Tn.$$.fragment,o),$(wr.$$.fragment,o),$(yr.$$.fragment,o),$($r.$$.fragment,o),$(kn.$$.fragment,o),$(Mr.$$.fragment,o),$(wn.$$.fragment,o),$(Er.$$.fragment,o),$(xr.$$.fragment,o),$(zr.$$.fragment,o),$($n.$$.fragment,o),$(qr.$$.fragment,o),$(Dn.$$.fragment,o),$(Ar.$$.fragment,o),$(Or.$$.fragment,o),$(Nr.$$.fragment,o),$(Bn.$$.fragment,o),$(Wr.$$.fragment,o),$(Mn.$$.fragment,o),$(Rr.$$.fragment,o),$(Ur.$$.fragment,o),$(Hr.$$.fragment,o),$(xn.$$.fragment,o),$(Kr.$$.fragment,o),$(zn.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(aa.$$.fragment,o),$(Cn.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$(va.$$.fragment,o),$(qn.$$.fragment,o),$(Ta.$$.fragment,o),$(ba.$$.fragment,o),$(ka.$$.fragment,o),$(Ea.$$.fragment,o),$(On.$$.fragment,o),$(xa.$$.fragment,o),$(za.$$.fragment,o),$(ja.$$.fragment,o),$(La.$$.fragment,o),$(In.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Xa.$$.fragment,o),$(Sn.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ei.$$.fragment,o),$(li.$$.fragment,o),$(Rn.$$.fragment,o),$(di.$$.fragment,o),ih=!1},d(o){t(p),o&&t(F),o&&t(g),D(_),o&&t(V),o&&t(E),D(X),o&&t(re),o&&t(N),o&&t(ae),o&&t(ee),o&&t(ie),o&&t(I),o&&t(P),o&&t(te),o&&t(le),o&&t(h),o&&t(vp),o&&t(Tt),o&&t(Tp),o&&t(ao),D(os),o&&t(bp),o&&t(Ue),D(ns),D(rs),o&&t(kp),o&&t(lo),D(as),o&&t(wp),o&&t(_t),D(is),o&&t(yp),o&&t(co),D(ds),o&&t($p),o&&t(vt),D(cs),o&&t(Dp),o&&t(po),D(us),o&&t(Fp),o&&t(He),D(ms),D(vs),D(on),D(Ts),o&&t(Bp),o&&t(uo),D(bs),o&&t(Mp),o&&t(Qe),D(ks),D(Fs),D(sn),D(Bs),D(Ms),o&&t(Ep),o&&t(fo),D(Es),o&&t(xp),o&&t(Ve),D(xs),D(Ps),D(an),D(qs),D(As),D(Os),D(Ns),o&&t(zp),o&&t(_o),D(Is),o&&t(jp),o&&t(Je),D(Ls),D(Us),D(dn),D(Hs),o&&t(Cp),o&&t(To),D(Qs),o&&t(Pp),o&&t(Ke),D(Vs),D(Xs),D(pn),D(Ys),D(Zs),o&&t(qp),o&&t(ko),D(er),o&&t(Ap),o&&t(Ge),D(tr),D(rr),D(un),D(ar),D(ir),o&&t(Op),o&&t($o),D(lr),o&&t(Np),o&&t(qe),D(dr),D(fn),D(ur),D(gn),D(mr),o&&t(Ip),o&&t(Fo),D(fr),o&&t(Lp),o&&t(Ae),D(gr),D(vn),D(kr),D(Tn),D(wr),o&&t(Sp),o&&t(Mo),D(yr),o&&t(Wp),o&&t(Oe),D($r),D(kn),D(Mr),D(wn),D(Er),o&&t(Rp),o&&t(xo),D(xr),o&&t(Up),o&&t(Ne),D(zr),D($n),D(qr),D(Dn),D(Ar),o&&t(Hp),o&&t(jo),D(Or),o&&t(Qp),o&&t(Ie),D(Nr),D(Bn),D(Wr),D(Mn),D(Rr),o&&t(Vp),o&&t(Po),D(Ur),o&&t(Jp),o&&t(Le),D(Hr),D(xn),D(Kr),D(zn),D(Gr),o&&t(Kp),o&&t(Oo),D(Xr),o&&t(Gp),o&&t(Me),D(Yr),D(aa),D(Cn),D(ia),o&&t(Xp),o&&t(Io),D(la),o&&t(Yp),o&&t(Ee),D(da),D(va),D(qn),D(Ta),o&&t(Zp),o&&t(So),D(ba),o&&t(eh),o&&t(xe),D(ka),D(Ea),D(On),D(xa),o&&t(th),o&&t(Ro),D(za),o&&t(oh),o&&t(ze),D(ja),D(La),D(In),D(Sa),o&&t(nh),o&&t(Ho),D(Wa),o&&t(sh),o&&t(je),D(Ra),D(Xa),D(Sn),D(Ya),o&&t(rh),o&&t(Vo),D(Za),o&&t(ah),o&&t(Ce),D(ei),D(li),D(Rn),D(di)}}}const HF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function QF(j){return TF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class YF extends fF{constructor(p){super();gF(this,p,QF,UF,_F,{})}}export{YF as default,HF as metadata};
