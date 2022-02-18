import{S as rF,i as aF,s as iF,e as o,k as l,w as b,t as a,L as lF,c as n,d as t,m as d,a as r,x as k,h as i,b as c,J as e,g as u,y as w,q as $,o as D,B as F}from"../../chunks/vendor-b1433968.js";import{T as me}from"../../chunks/Tip-c3840994.js";import{D as U}from"../../chunks/Docstring-ff504c58.js";import{C as ye}from"../../chunks/CodeBlock-a320dbd7.js";import{I as ve}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function dF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function cF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function hF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function pF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function uF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function fF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function mF(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){h=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),O=o("code"),he=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),V=l(),x=o("ul"),z=o("li"),pe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(p){h=n(p,"P",{});var M=r(h);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(p),v=n(p,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(p),E=n(p,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);he=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(p),q=n(p,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ke.forEach(t),V=d(p),x=n(p,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);pe=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(p,M){u(p,h,M),e(h,y),u(p,g,M),u(p,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(p,J,M),u(p,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,he),e(E,re),u(p,L,M),u(p,q,M),e(q,Y),u(p,V,M),u(p,x,M),e(x,z),e(z,pe),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(p){p&&t(h),p&&t(g),p&&t(v),p&&t(J),p&&t(E),p&&t(L),p&&t(q),p&&t(V),p&&t(x)}}}function gF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function _F(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){h=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),O=o("code"),he=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),V=l(),x=o("ul"),z=o("li"),pe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(p){h=n(p,"P",{});var M=r(h);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(p),v=n(p,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(p),E=n(p,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);he=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(p),q=n(p,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ke.forEach(t),V=d(p),x=n(p,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);pe=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(p,M){u(p,h,M),e(h,y),u(p,g,M),u(p,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(p,J,M),u(p,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,he),e(E,re),u(p,L,M),u(p,q,M),e(q,Y),u(p,V,M),u(p,x,M),e(x,z),e(z,pe),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(p){p&&t(h),p&&t(g),p&&t(v),p&&t(J),p&&t(E),p&&t(L),p&&t(q),p&&t(V),p&&t(x)}}}function vF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function TF(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){h=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),O=o("code"),he=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),V=l(),x=o("ul"),z=o("li"),pe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(p){h=n(p,"P",{});var M=r(h);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(p),v=n(p,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(p),E=n(p,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);he=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(p),q=n(p,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ke.forEach(t),V=d(p),x=n(p,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);pe=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(p,M){u(p,h,M),e(h,y),u(p,g,M),u(p,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(p,J,M),u(p,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,he),e(E,re),u(p,L,M),u(p,q,M),e(q,Y),u(p,V,M),u(p,x,M),e(x,z),e(z,pe),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(p){p&&t(h),p&&t(g),p&&t(v),p&&t(J),p&&t(E),p&&t(L),p&&t(q),p&&t(V),p&&t(x)}}}function bF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function kF(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){h=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),O=o("code"),he=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),V=l(),x=o("ul"),z=o("li"),pe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(p){h=n(p,"P",{});var M=r(h);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(p),v=n(p,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(p),E=n(p,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);he=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(p),q=n(p,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ke.forEach(t),V=d(p),x=n(p,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);pe=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(p,M){u(p,h,M),e(h,y),u(p,g,M),u(p,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(p,J,M),u(p,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,he),e(E,re),u(p,L,M),u(p,q,M),e(q,Y),u(p,V,M),u(p,x,M),e(x,z),e(z,pe),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(p){p&&t(h),p&&t(g),p&&t(v),p&&t(J),p&&t(E),p&&t(L),p&&t(q),p&&t(V),p&&t(x)}}}function wF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function $F(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){h=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),O=o("code"),he=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),V=l(),x=o("ul"),z=o("li"),pe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(p){h=n(p,"P",{});var M=r(h);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(p),v=n(p,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(p),E=n(p,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);he=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(p),q=n(p,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ke.forEach(t),V=d(p),x=n(p,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);pe=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(p,M){u(p,h,M),e(h,y),u(p,g,M),u(p,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(p,J,M),u(p,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,he),e(E,re),u(p,L,M),u(p,q,M),e(q,Y),u(p,V,M),u(p,x,M),e(x,z),e(z,pe),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(p){p&&t(h),p&&t(g),p&&t(v),p&&t(J),p&&t(E),p&&t(L),p&&t(q),p&&t(V),p&&t(x)}}}function DF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function FF(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){h=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),O=o("code"),he=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),V=l(),x=o("ul"),z=o("li"),pe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(p){h=n(p,"P",{});var M=r(h);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(p),v=n(p,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(p),E=n(p,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);he=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(p),q=n(p,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ke.forEach(t),V=d(p),x=n(p,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);pe=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(p,M){u(p,h,M),e(h,y),u(p,g,M),u(p,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(p,J,M),u(p,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,he),e(E,re),u(p,L,M),u(p,q,M),e(q,Y),u(p,V,M),u(p,x,M),e(x,z),e(z,pe),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(p){p&&t(h),p&&t(g),p&&t(v),p&&t(J),p&&t(E),p&&t(L),p&&t(q),p&&t(V),p&&t(x)}}}function yF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function BF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function MF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function EF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function xF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function zF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function CF(C){let h,y,g,v,T;return{c(){h=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=n(_,"P",{});var f=r(h);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,h,f),e(h,y),e(h,g),e(g,v),e(h,T)},d(_){_&&t(h)}}}function jF(C){let h,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,he,re,L,q,Y,V,x,z,pe,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le,p,M,K,ge,Te,I,_e,be,ke,j,Q,we,$e,Z,De,ne,Fe,pu,uh,Tt,uu,Yo,fu,mu,Zo,gu,_u,en,vu,Tu,fh,as,Ks,_l,tn,bu,vl,ku,mh,Ne,sn,wu,yt,$u,di,Du,Fu,ci,yu,Bu,on,Mu,Eu,xu,is,zu,hi,Cu,ju,pi,Pu,qu,Au,Tl,Iu,Lu,nn,gh,ls,Gs,bl,rn,Su,kl,Nu,_h,_t,an,Ou,wl,Wu,Ru,Xs,ui,Hu,Qu,fi,Uu,Ju,Vu,ln,Ku,mi,Gu,Xu,vh,ds,Ys,$l,dn,Yu,Dl,Zu,Th,vt,cn,ef,hn,tf,Fl,sf,of,nf,Zs,gi,rf,af,_i,lf,df,cf,pn,hf,vi,pf,uf,bh,cs,eo,yl,un,ff,Bl,mf,kh,Oe,fn,gf,Ml,_f,vf,mn,Tf,Ti,bf,kf,wf,gn,$f,_n,Df,Ff,yf,Je,vn,Bf,hs,Mf,bi,Ef,xf,El,zf,Cf,jf,to,Pf,xl,qf,Af,Tn,wh,ps,so,zl,bn,If,Cl,Lf,$h,We,kn,Sf,wn,Nf,jl,Of,Wf,Rf,$n,Hf,ki,Qf,Uf,Jf,Dn,Vf,Fn,Kf,Gf,Xf,Ve,yn,Yf,us,Zf,wi,em,tm,Pl,sm,om,nm,oo,rm,ql,am,im,Bn,Dh,fs,no,Al,Mn,lm,Il,dm,Fh,Re,En,cm,Ll,hm,pm,xn,um,$i,fm,mm,gm,zn,_m,Cn,vm,Tm,bm,je,jn,km,ms,wm,Di,$m,Dm,Sl,Fm,ym,Bm,ro,Mm,Nl,Em,xm,Pn,zm,Ol,Cm,jm,qn,yh,gs,ao,Wl,An,Pm,Rl,qm,Bh,He,In,Am,Hl,Im,Lm,Ln,Sm,Fi,Nm,Om,Wm,Sn,Rm,Nn,Hm,Qm,Um,Ke,On,Jm,_s,Vm,yi,Km,Gm,Ql,Xm,Ym,Zm,io,eg,Ul,tg,sg,Wn,Mh,vs,lo,Jl,Rn,og,Vl,ng,Eh,Qe,Hn,rg,Kl,ag,ig,Qn,lg,Bi,dg,cg,hg,Un,pg,Jn,ug,fg,mg,Ge,Vn,gg,Ts,_g,Mi,vg,Tg,Gl,bg,kg,wg,co,$g,Xl,Dg,Fg,Kn,xh,bs,ho,Yl,Gn,yg,Zl,Bg,zh,Ue,Xn,Mg,ks,Eg,ed,xg,zg,td,Cg,jg,Pg,Yn,qg,Ei,Ag,Ig,Lg,Zn,Sg,er,Ng,Og,Wg,Xe,tr,Rg,ws,Hg,xi,Qg,Ug,sd,Jg,Vg,Kg,po,Gg,od,Xg,Yg,sr,Ch,$s,uo,nd,or,Zg,rd,e_,jh,Pe,nr,t_,ad,s_,o_,rr,n_,zi,r_,a_,i_,ar,l_,ir,d_,c_,h_,fo,p_,Ye,lr,u_,Ds,f_,Ci,m_,g_,id,__,v_,T_,mo,b_,ld,k_,w_,dr,Ph,Fs,go,dd,cr,$_,cd,D_,qh,qe,hr,F_,pr,y_,hd,B_,M_,E_,ur,x_,ji,z_,C_,j_,fr,P_,mr,q_,A_,I_,_o,L_,Ze,gr,S_,ys,N_,Pi,O_,W_,pd,R_,H_,Q_,vo,U_,ud,J_,V_,_r,Ah,Bs,To,fd,vr,K_,md,G_,Ih,Ae,Tr,X_,gd,Y_,Z_,br,ev,qi,tv,sv,ov,kr,nv,wr,rv,av,iv,bo,lv,et,$r,dv,Ms,cv,Ai,hv,pv,_d,uv,fv,mv,ko,gv,vd,_v,vv,Dr,Lh,Es,wo,Td,Fr,Tv,bd,bv,Sh,Ie,yr,kv,kd,wv,$v,Br,Dv,Ii,Fv,yv,Bv,Mr,Mv,Er,Ev,xv,zv,$o,Cv,tt,xr,jv,xs,Pv,Li,qv,Av,wd,Iv,Lv,Sv,Do,Nv,$d,Ov,Wv,zr,Nh,zs,Fo,Dd,Cr,Rv,Fd,Hv,Oh,Le,jr,Qv,yd,Uv,Jv,Pr,Vv,Si,Kv,Gv,Xv,qr,Yv,Ar,Zv,eT,tT,yo,sT,st,Ir,oT,Cs,nT,Ni,rT,aT,Bd,iT,lT,dT,Bo,cT,Md,hT,pT,Lr,Wh,js,Mo,Ed,Sr,uT,xd,fT,Rh,Se,Nr,mT,Ps,gT,zd,_T,vT,Cd,TT,bT,kT,Or,wT,Oi,$T,DT,FT,Wr,yT,Rr,BT,MT,ET,Eo,xT,ot,Hr,zT,qs,CT,Wi,jT,PT,jd,qT,AT,IT,xo,LT,Pd,ST,NT,Qr,Hh,As,zo,qd,Ur,OT,Ad,WT,Qh,Be,Jr,RT,Id,HT,QT,Vr,UT,Ri,JT,VT,KT,Kr,GT,Gr,XT,YT,ZT,Ld,eb,tb,Bt,Sd,Xr,sb,ob,Nd,Yr,nb,rb,Od,Zr,ab,ib,Wd,ea,lb,db,nt,ta,cb,Is,hb,Rd,pb,ub,Hd,fb,mb,gb,Co,_b,Qd,vb,Tb,sa,Uh,Ls,jo,Ud,oa,bb,Jd,kb,Jh,Me,na,wb,ra,$b,Vd,Db,Fb,yb,aa,Bb,Hi,Mb,Eb,xb,ia,zb,la,Cb,jb,Pb,Kd,qb,Ab,Mt,Gd,da,Ib,Lb,Xd,ca,Sb,Nb,Yd,ha,Ob,Wb,Zd,pa,Rb,Hb,rt,ua,Qb,Ss,Ub,ec,Jb,Vb,tc,Kb,Gb,Xb,Po,Yb,sc,Zb,e1,fa,Vh,Ns,qo,oc,ma,t1,nc,s1,Kh,Ee,ga,o1,rc,n1,r1,_a,a1,Qi,i1,l1,d1,va,c1,Ta,h1,p1,u1,ac,f1,m1,Et,ic,ba,g1,_1,lc,ka,v1,T1,dc,wa,b1,k1,cc,$a,w1,$1,at,Da,D1,Os,F1,hc,y1,B1,pc,M1,E1,x1,Ao,z1,uc,C1,j1,Fa,Gh,Ws,Io,fc,ya,P1,mc,q1,Xh,xe,Ba,A1,gc,I1,L1,Ma,S1,Ui,N1,O1,W1,Ea,R1,xa,H1,Q1,U1,_c,J1,V1,xt,vc,za,K1,G1,Tc,Ca,X1,Y1,bc,ja,Z1,ek,kc,Pa,tk,sk,it,qa,ok,Rs,nk,wc,rk,ak,$c,ik,lk,dk,Lo,ck,Dc,hk,pk,Aa,Yh,Hs,So,Fc,Ia,uk,yc,fk,Zh,ze,La,mk,Bc,gk,_k,Sa,vk,Ji,Tk,bk,kk,Na,wk,Oa,$k,Dk,Fk,Mc,yk,Bk,zt,Ec,Wa,Mk,Ek,xc,Ra,xk,zk,zc,Ha,Ck,jk,Cc,Qa,Pk,qk,lt,Ua,Ak,Qs,Ik,jc,Lk,Sk,Pc,Nk,Ok,Wk,No,Rk,qc,Hk,Qk,Ja,ep,Us,Oo,Ac,Va,Uk,Ic,Jk,tp,Ce,Ka,Vk,Js,Kk,Lc,Gk,Xk,Sc,Yk,Zk,ew,Ga,tw,Vi,sw,ow,nw,Xa,rw,Ya,aw,iw,lw,Nc,dw,cw,Ct,Oc,Za,hw,pw,Wc,ei,uw,fw,Rc,ti,mw,gw,Hc,si,_w,vw,dt,oi,Tw,Vs,bw,Qc,kw,ww,Uc,$w,Dw,Fw,Wo,yw,Jc,Bw,Mw,ni,sp;return _=new ve({}),X=new ve({}),tn=new ve({}),sn=new U({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DistilBertConfig.sinusoidal_pos_embds",description:`<strong>sinusoidal_pos_embds</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use sinusoidal positional embeddings.`,name:"sinusoidal_pos_embds"},{anchor:"transformers.DistilBertConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.DistilBertConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.DistilBertConfig.dim",description:`<strong>dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"dim"},{anchor:"transformers.DistilBertConfig.hidden_dim",description:`<strong>hidden_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
The size of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"hidden_dim"},{anchor:"transformers.DistilBertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.DistilBertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.DistilBertConfig.activation",description:`<strong>activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation"},{anchor:"transformers.DistilBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DistilBertConfig.qa_dropout",description:`<strong>qa_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilities used in the question answering model
<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new ye({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new ve({}),an=new U({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new ve({}),cn=new U({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new ve({}),fn=new U({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L437",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),vn=new U({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L509",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new me({props:{$$slots:{default:[dF]},$$scope:{ctx:C}}}),Tn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = DistilBertModel.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new ve({}),kn=new U({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L565",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),yn=new U({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L605",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),oo=new me({props:{$$slots:{default:[cF]},$$scope:{ctx:C}}}),Bn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = DistilBertForMaskedLM.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new ve({}),En=new U({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L668",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),jn=new U({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L702",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),ro=new me({props:{$$slots:{default:[hF]},$$scope:{ctx:C}}}),Pn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0) # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),An=new ve({}),In=new U({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L1006",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),On=new U({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L1038",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new me({props:{$$slots:{default:[pF]},$$scope:{ctx:C}}}),Wn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-cased')
model = DistilBertForMultipleChoice.from_pretrained('distilbert-base-cased')

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors='pt', padding=True)
outputs = model(**{k: v.unsqueeze(0) for k,v in encoding.items()}, labels=labels) # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-cased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-cased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k,v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels) <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new ve({}),Hn=new U({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L902",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Vn=new U({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L934",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new me({props:{$$slots:{default:[uF]},$$scope:{ctx:C}}}),Kn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = DistilBertForTokenClassification.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0) # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new ve({}),Xn=new U({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L785",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),tr=new U({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_distilbert.py#L817",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new me({props:{$$slots:{default:[fF]},$$scope:{ctx:C}}}),sr=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = DistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),or=new ve({}),nr=new U({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),fo=new me({props:{$$slots:{default:[mF]},$$scope:{ctx:C}}}),lr=new U({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new me({props:{$$slots:{default:[gF]},$$scope:{ctx:C}}}),dr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = TFDistilBertModel.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cr=new ve({}),hr=new U({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),_o=new me({props:{$$slots:{default:[_F]},$$scope:{ctx:C}}}),gr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),vo=new me({props:{$$slots:{default:[vF]},$$scope:{ctx:C}}}),_r=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = TFDistilBertForMaskedLM.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new ve({}),Tr=new U({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L741",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),bo=new me({props:{$$slots:{default:[TF]},$$scope:{ctx:C}}}),$r=new U({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L758",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),ko=new me({props:{$$slots:{default:[bF]},$$scope:{ctx:C}}}),Dr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = TFDistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fr=new ve({}),yr=new U({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L931",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),$o=new me({props:{$$slots:{default:[kF]},$$scope:{ctx:C}}}),xr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L957",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new me({props:{$$slots:{default:[wF]},$$scope:{ctx:C}}}),zr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = TFDistilBertForMultipleChoice.from_pretrained('distilbert-base-uncased')

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors='tf', padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs) # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs) <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cr=new ve({}),jr=new U({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L841",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),yo=new me({props:{$$slots:{default:[$F]},$$scope:{ctx:C}}}),Ir=new U({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L852",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new me({props:{$$slots:{default:[DF]},$$scope:{ctx:C}}}),Lr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = TFDistilBertForTokenClassification.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sr=new ve({}),Nr=new U({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1073",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Eo=new me({props:{$$slots:{default:[FF]},$$scope:{ctx:C}}}),Hr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1084",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new me({props:{$$slots:{default:[yF]},$$scope:{ctx:C}}}),Qr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = TFDistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors='tf')
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = ' '.join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0]+1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&#x27; &#x27;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]+<span class="hljs-number">1</span>])`}}),Ur=new ve({}),Jr=new U({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L529",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ta=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L452",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),Co=new me({props:{$$slots:{default:[BF]},$$scope:{ctx:C}}}),sa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = FlaxDistilBertModel.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),oa=new ve({}),na=new U({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L602",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ua=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L452",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new me({props:{$$slots:{default:[MF]},$$scope:{ctx:C}}}),fa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = FlaxDistilBertForMaskedLM.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("The capital of France is [MASK].", return_tensors='jax')

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ma=new ve({}),ga=new U({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L671",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Da=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L452",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new me({props:{$$slots:{default:[EF]},$$scope:{ctx:C}}}),Fa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = FlaxDistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ya=new ve({}),Ba=new U({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L751",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),qa=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L452",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new me({props:{$$slots:{default:[xF]},$$scope:{ctx:C}}}),Aa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = FlaxDistilBertForMultipleChoice.from_pretrained('distilbert-base-uncased')

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors='jax', padding=True)
outputs = model(**{k: v[None, :] for k,v in encoding.items()})

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k,v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ia=new ve({}),La=new U({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L817",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ua=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L452",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new me({props:{$$slots:{default:[zF]},$$scope:{ctx:C}}}),Ja=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = FlaxDistilBertForTokenClassification.from_pretrained('distilbert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Va=new ve({}),Ka=new U({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L887",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),oi=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/distilbert/modeling_flax_distilbert.py#L452",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new me({props:{$$slots:{default:[CF]},$$scope:{ctx:C}}}),ni=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
model = FlaxDistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='jax')

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;distilbert-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){h=o("meta"),y=l(),g=o("h1"),v=o("a"),T=o("span"),b(_.$$.fragment),f=l(),B=o("span"),de=a("DistilBERT"),J=l(),E=o("h2"),G=o("a"),N=o("span"),b(X.$$.fragment),ce=l(),O=o("span"),he=a("Overview"),re=l(),L=o("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),V=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=o("a"),pe=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=o("p"),A=a("The abstract from the paper is the following:"),ie=l(),S=o("p"),oe=o("em"),fe=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=o("p"),H=a("Tips:"),le=l(),p=o("ul"),M=o("li"),K=a("DistilBERT doesn\u2019t have "),ge=o("code"),Te=a("token_type_ids"),I=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=o("code"),be=a("tokenizer.sep_token"),ke=a(" (or "),j=o("code"),Q=a("[SEP]"),we=a(")."),$e=l(),Z=o("li"),De=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Fe=a("position_ids"),pu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),uh=l(),Tt=o("p"),uu=a("This model was contributed by "),Yo=o("a"),fu=a("victorsanh"),mu=a(`. This model jax version was
contributed by `),Zo=o("a"),gu=a("kamalkraj"),_u=a(". The original code can be found "),en=o("a"),vu=a("here"),Tu=a("."),fh=l(),as=o("h2"),Ks=o("a"),_l=o("span"),b(tn.$$.fragment),bu=l(),vl=o("span"),ku=a("DistilBertConfig"),mh=l(),Ne=o("div"),b(sn.$$.fragment),wu=l(),yt=o("p"),$u=a("This is the configuration class to store the configuration of a "),di=o("a"),Du=a("DistilBertModel"),Fu=a(` or a
`),ci=o("a"),yu=a("TFDistilBertModel"),Bu=a(`. It is used to instantiate a DistilBERT model according to the specified
arguments, defining the model architecture. Instantiating a configuration with the defaults will yield a similar
configuration to that of the DistilBERT `),on=o("a"),Mu=a("distilbert-base-uncased"),Eu=a(" architecture."),xu=l(),is=o("p"),zu=a("Configuration objects inherit from "),hi=o("a"),Cu=a("PretrainedConfig"),ju=a(` and can be used to control the model
outputs. Read the documentation from `),pi=o("a"),Pu=a("PretrainedConfig"),qu=a(" for more information."),Au=l(),Tl=o("p"),Iu=a("Examples:"),Lu=l(),b(nn.$$.fragment),gh=l(),ls=o("h2"),Gs=o("a"),bl=o("span"),b(rn.$$.fragment),Su=l(),kl=o("span"),Nu=a("DistilBertTokenizer"),_h=l(),_t=o("div"),b(an.$$.fragment),Ou=l(),wl=o("p"),Wu=a("Construct a DistilBERT tokenizer."),Ru=l(),Xs=o("p"),ui=o("a"),Hu=a("DistilBertTokenizer"),Qu=a(" is identical to "),fi=o("a"),Uu=a("BertTokenizer"),Ju=a(` and runs end-to-end
tokenization: punctuation splitting and wordpiece.`),Vu=l(),ln=o("p"),Ku=a("Refer to superclass "),mi=o("a"),Gu=a("BertTokenizer"),Xu=a(` for usage examples and documentation concerning
parameters.`),vh=l(),ds=o("h2"),Ys=o("a"),$l=o("span"),b(dn.$$.fragment),Yu=l(),Dl=o("span"),Zu=a("DistilBertTokenizerFast"),Th=l(),vt=o("div"),b(cn.$$.fragment),ef=l(),hn=o("p"),tf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Fl=o("em"),sf=a("tokenizers"),of=a(" library)."),nf=l(),Zs=o("p"),gi=o("a"),rf=a("DistilBertTokenizerFast"),af=a(" is identical to "),_i=o("a"),lf=a("BertTokenizerFast"),df=a(` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),cf=l(),pn=o("p"),hf=a("Refer to superclass "),vi=o("a"),pf=a("BertTokenizerFast"),uf=a(` for usage examples and documentation concerning
parameters.`),bh=l(),cs=o("h2"),eo=o("a"),yl=o("span"),b(un.$$.fragment),ff=l(),Bl=o("span"),mf=a("DistilBertModel"),kh=l(),Oe=o("div"),b(fn.$$.fragment),gf=l(),Ml=o("p"),_f=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),vf=l(),mn=o("p"),Tf=a("This model inherits from "),Ti=o("a"),bf=a("PreTrainedModel"),kf=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),wf=l(),gn=o("p"),$f=a("This model is also a PyTorch "),_n=o("a"),Df=a("torch.nn.Module"),Ff=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),yf=l(),Je=o("div"),b(vn.$$.fragment),Bf=l(),hs=o("p"),Mf=a("The "),bi=o("a"),Ef=a("DistilBertModel"),xf=a(" forward method, overrides the "),El=o("code"),zf=a("__call__"),Cf=a(" special method."),jf=l(),b(to.$$.fragment),Pf=l(),xl=o("p"),qf=a("Example:"),Af=l(),b(Tn.$$.fragment),wh=l(),ps=o("h2"),so=o("a"),zl=o("span"),b(bn.$$.fragment),If=l(),Cl=o("span"),Lf=a("DistilBertForMaskedLM"),$h=l(),We=o("div"),b(kn.$$.fragment),Sf=l(),wn=o("p"),Nf=a("DistilBert Model with a "),jl=o("code"),Of=a("masked language modeling"),Wf=a(" head on top."),Rf=l(),$n=o("p"),Hf=a("This model inherits from "),ki=o("a"),Qf=a("PreTrainedModel"),Uf=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Jf=l(),Dn=o("p"),Vf=a("This model is also a PyTorch "),Fn=o("a"),Kf=a("torch.nn.Module"),Gf=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Xf=l(),Ve=o("div"),b(yn.$$.fragment),Yf=l(),us=o("p"),Zf=a("The "),wi=o("a"),em=a("DistilBertForMaskedLM"),tm=a(" forward method, overrides the "),Pl=o("code"),sm=a("__call__"),om=a(" special method."),nm=l(),b(oo.$$.fragment),rm=l(),ql=o("p"),am=a("Example:"),im=l(),b(Bn.$$.fragment),Dh=l(),fs=o("h2"),no=o("a"),Al=o("span"),b(Mn.$$.fragment),lm=l(),Il=o("span"),dm=a("DistilBertForSequenceClassification"),Fh=l(),Re=o("div"),b(En.$$.fragment),cm=l(),Ll=o("p"),hm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),pm=l(),xn=o("p"),um=a("This model inherits from "),$i=o("a"),fm=a("PreTrainedModel"),mm=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),gm=l(),zn=o("p"),_m=a("This model is also a PyTorch "),Cn=o("a"),vm=a("torch.nn.Module"),Tm=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),bm=l(),je=o("div"),b(jn.$$.fragment),km=l(),ms=o("p"),wm=a("The "),Di=o("a"),$m=a("DistilBertForSequenceClassification"),Dm=a(" forward method, overrides the "),Sl=o("code"),Fm=a("__call__"),ym=a(" special method."),Bm=l(),b(ro.$$.fragment),Mm=l(),Nl=o("p"),Em=a("Example of single-label classification:"),xm=l(),b(Pn.$$.fragment),zm=l(),Ol=o("p"),Cm=a("Example of multi-label classification:"),jm=l(),b(qn.$$.fragment),yh=l(),gs=o("h2"),ao=o("a"),Wl=o("span"),b(An.$$.fragment),Pm=l(),Rl=o("span"),qm=a("DistilBertForMultipleChoice"),Bh=l(),He=o("div"),b(In.$$.fragment),Am=l(),Hl=o("p"),Im=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lm=l(),Ln=o("p"),Sm=a("This model inherits from "),Fi=o("a"),Nm=a("PreTrainedModel"),Om=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Wm=l(),Sn=o("p"),Rm=a("This model is also a PyTorch "),Nn=o("a"),Hm=a("torch.nn.Module"),Qm=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Um=l(),Ke=o("div"),b(On.$$.fragment),Jm=l(),_s=o("p"),Vm=a("The "),yi=o("a"),Km=a("DistilBertForMultipleChoice"),Gm=a(" forward method, overrides the "),Ql=o("code"),Xm=a("__call__"),Ym=a(" special method."),Zm=l(),b(io.$$.fragment),eg=l(),Ul=o("p"),tg=a("Examples:"),sg=l(),b(Wn.$$.fragment),Mh=l(),vs=o("h2"),lo=o("a"),Jl=o("span"),b(Rn.$$.fragment),og=l(),Vl=o("span"),ng=a("DistilBertForTokenClassification"),Eh=l(),Qe=o("div"),b(Hn.$$.fragment),rg=l(),Kl=o("p"),ag=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ig=l(),Qn=o("p"),lg=a("This model inherits from "),Bi=o("a"),dg=a("PreTrainedModel"),cg=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),hg=l(),Un=o("p"),pg=a("This model is also a PyTorch "),Jn=o("a"),ug=a("torch.nn.Module"),fg=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),mg=l(),Ge=o("div"),b(Vn.$$.fragment),gg=l(),Ts=o("p"),_g=a("The "),Mi=o("a"),vg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),Gl=o("code"),bg=a("__call__"),kg=a(" special method."),wg=l(),b(co.$$.fragment),$g=l(),Xl=o("p"),Dg=a("Example:"),Fg=l(),b(Kn.$$.fragment),xh=l(),bs=o("h2"),ho=o("a"),Yl=o("span"),b(Gn.$$.fragment),yg=l(),Zl=o("span"),Bg=a("DistilBertForQuestionAnswering"),zh=l(),Ue=o("div"),b(Xn.$$.fragment),Mg=l(),ks=o("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=o("code"),xg=a("span start logits"),zg=a(" and "),td=o("code"),Cg=a("span end logits"),jg=a(")."),Pg=l(),Yn=o("p"),qg=a("This model inherits from "),Ei=o("a"),Ag=a("PreTrainedModel"),Ig=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Lg=l(),Zn=o("p"),Sg=a("This model is also a PyTorch "),er=o("a"),Ng=a("torch.nn.Module"),Og=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Wg=l(),Xe=o("div"),b(tr.$$.fragment),Rg=l(),ws=o("p"),Hg=a("The "),xi=o("a"),Qg=a("DistilBertForQuestionAnswering"),Ug=a(" forward method, overrides the "),sd=o("code"),Jg=a("__call__"),Vg=a(" special method."),Kg=l(),b(po.$$.fragment),Gg=l(),od=o("p"),Xg=a("Example:"),Yg=l(),b(sr.$$.fragment),Ch=l(),$s=o("h2"),uo=o("a"),nd=o("span"),b(or.$$.fragment),Zg=l(),rd=o("span"),e_=a("TFDistilBertModel"),jh=l(),Pe=o("div"),b(nr.$$.fragment),t_=l(),ad=o("p"),s_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),o_=l(),rr=o("p"),n_=a("This model inherits from "),zi=o("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),i_=l(),ar=o("p"),l_=a("This model is also a "),ir=o("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),h_=l(),b(fo.$$.fragment),p_=l(),Ye=o("div"),b(lr.$$.fragment),u_=l(),Ds=o("p"),f_=a("The "),Ci=o("a"),m_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),id=o("code"),__=a("__call__"),v_=a(" special method."),T_=l(),b(mo.$$.fragment),b_=l(),ld=o("p"),k_=a("Example:"),w_=l(),b(dr.$$.fragment),Ph=l(),Fs=o("h2"),go=o("a"),dd=o("span"),b(cr.$$.fragment),$_=l(),cd=o("span"),D_=a("TFDistilBertForMaskedLM"),qh=l(),qe=o("div"),b(hr.$$.fragment),F_=l(),pr=o("p"),y_=a("DistilBert Model with a "),hd=o("code"),B_=a("masked language modeling"),M_=a(" head on top."),E_=l(),ur=o("p"),x_=a("This model inherits from "),ji=o("a"),z_=a("TFPreTrainedModel"),C_=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),j_=l(),fr=o("p"),P_=a("This model is also a "),mr=o("a"),q_=a("tf.keras.Model"),A_=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),I_=l(),b(_o.$$.fragment),L_=l(),Ze=o("div"),b(gr.$$.fragment),S_=l(),ys=o("p"),N_=a("The "),Pi=o("a"),O_=a("TFDistilBertForMaskedLM"),W_=a(" forward method, overrides the "),pd=o("code"),R_=a("__call__"),H_=a(" special method."),Q_=l(),b(vo.$$.fragment),U_=l(),ud=o("p"),J_=a("Example:"),V_=l(),b(_r.$$.fragment),Ah=l(),Bs=o("h2"),To=o("a"),fd=o("span"),b(vr.$$.fragment),K_=l(),md=o("span"),G_=a("TFDistilBertForSequenceClassification"),Ih=l(),Ae=o("div"),b(Tr.$$.fragment),X_=l(),gd=o("p"),Y_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Z_=l(),br=o("p"),ev=a("This model inherits from "),qi=o("a"),tv=a("TFPreTrainedModel"),sv=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ov=l(),kr=o("p"),nv=a("This model is also a "),wr=o("a"),rv=a("tf.keras.Model"),av=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),iv=l(),b(bo.$$.fragment),lv=l(),et=o("div"),b($r.$$.fragment),dv=l(),Ms=o("p"),cv=a("The "),Ai=o("a"),hv=a("TFDistilBertForSequenceClassification"),pv=a(" forward method, overrides the "),_d=o("code"),uv=a("__call__"),fv=a(" special method."),mv=l(),b(ko.$$.fragment),gv=l(),vd=o("p"),_v=a("Example:"),vv=l(),b(Dr.$$.fragment),Lh=l(),Es=o("h2"),wo=o("a"),Td=o("span"),b(Fr.$$.fragment),Tv=l(),bd=o("span"),bv=a("TFDistilBertForMultipleChoice"),Sh=l(),Ie=o("div"),b(yr.$$.fragment),kv=l(),kd=o("p"),wv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),$v=l(),Br=o("p"),Dv=a("This model inherits from "),Ii=o("a"),Fv=a("TFPreTrainedModel"),yv=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Bv=l(),Mr=o("p"),Mv=a("This model is also a "),Er=o("a"),Ev=a("tf.keras.Model"),xv=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),zv=l(),b($o.$$.fragment),Cv=l(),tt=o("div"),b(xr.$$.fragment),jv=l(),xs=o("p"),Pv=a("The "),Li=o("a"),qv=a("TFDistilBertForMultipleChoice"),Av=a(" forward method, overrides the "),wd=o("code"),Iv=a("__call__"),Lv=a(" special method."),Sv=l(),b(Do.$$.fragment),Nv=l(),$d=o("p"),Ov=a("Example:"),Wv=l(),b(zr.$$.fragment),Nh=l(),zs=o("h2"),Fo=o("a"),Dd=o("span"),b(Cr.$$.fragment),Rv=l(),Fd=o("span"),Hv=a("TFDistilBertForTokenClassification"),Oh=l(),Le=o("div"),b(jr.$$.fragment),Qv=l(),yd=o("p"),Uv=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Jv=l(),Pr=o("p"),Vv=a("This model inherits from "),Si=o("a"),Kv=a("TFPreTrainedModel"),Gv=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Xv=l(),qr=o("p"),Yv=a("This model is also a "),Ar=o("a"),Zv=a("tf.keras.Model"),eT=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),tT=l(),b(yo.$$.fragment),sT=l(),st=o("div"),b(Ir.$$.fragment),oT=l(),Cs=o("p"),nT=a("The "),Ni=o("a"),rT=a("TFDistilBertForTokenClassification"),aT=a(" forward method, overrides the "),Bd=o("code"),iT=a("__call__"),lT=a(" special method."),dT=l(),b(Bo.$$.fragment),cT=l(),Md=o("p"),hT=a("Example:"),pT=l(),b(Lr.$$.fragment),Wh=l(),js=o("h2"),Mo=o("a"),Ed=o("span"),b(Sr.$$.fragment),uT=l(),xd=o("span"),fT=a("TFDistilBertForQuestionAnswering"),Rh=l(),Se=o("div"),b(Nr.$$.fragment),mT=l(),Ps=o("p"),gT=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=o("code"),_T=a("span start logits"),vT=a(" and "),Cd=o("code"),TT=a("span end logits"),bT=a(")."),kT=l(),Or=o("p"),wT=a("This model inherits from "),Oi=o("a"),$T=a("TFPreTrainedModel"),DT=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),FT=l(),Wr=o("p"),yT=a("This model is also a "),Rr=o("a"),BT=a("tf.keras.Model"),MT=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ET=l(),b(Eo.$$.fragment),xT=l(),ot=o("div"),b(Hr.$$.fragment),zT=l(),qs=o("p"),CT=a("The "),Wi=o("a"),jT=a("TFDistilBertForQuestionAnswering"),PT=a(" forward method, overrides the "),jd=o("code"),qT=a("__call__"),AT=a(" special method."),IT=l(),b(xo.$$.fragment),LT=l(),Pd=o("p"),ST=a("Example:"),NT=l(),b(Qr.$$.fragment),Hh=l(),As=o("h2"),zo=o("a"),qd=o("span"),b(Ur.$$.fragment),OT=l(),Ad=o("span"),WT=a("FlaxDistilBertModel"),Qh=l(),Be=o("div"),b(Jr.$$.fragment),RT=l(),Id=o("p"),HT=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),QT=l(),Vr=o("p"),UT=a("This model inherits from "),Ri=o("a"),JT=a("FlaxPreTrainedModel"),VT=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),KT=l(),Kr=o("p"),GT=a("This model is also a Flax Linen "),Gr=o("a"),XT=a("flax.linen.Module"),YT=a(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),ZT=l(),Ld=o("p"),eb=a("Finally, this model supports inherent JAX features such as:"),tb=l(),Bt=o("ul"),Sd=o("li"),Xr=o("a"),sb=a("Just-In-Time (JIT) compilation"),ob=l(),Nd=o("li"),Yr=o("a"),nb=a("Automatic Differentiation"),rb=l(),Od=o("li"),Zr=o("a"),ab=a("Vectorization"),ib=l(),Wd=o("li"),ea=o("a"),lb=a("Parallelization"),db=l(),nt=o("div"),b(ta.$$.fragment),cb=l(),Is=o("p"),hb=a("The "),Rd=o("code"),pb=a("FlaxDistilBertPreTrainedModel"),ub=a(" forward method, overrides the "),Hd=o("code"),fb=a("__call__"),mb=a(" special method."),gb=l(),b(Co.$$.fragment),_b=l(),Qd=o("p"),vb=a("Example:"),Tb=l(),b(sa.$$.fragment),Uh=l(),Ls=o("h2"),jo=o("a"),Ud=o("span"),b(oa.$$.fragment),bb=l(),Jd=o("span"),kb=a("FlaxDistilBertForMaskedLM"),Jh=l(),Me=o("div"),b(na.$$.fragment),wb=l(),ra=o("p"),$b=a("DistilBert Model with a "),Vd=o("code"),Db=a("language modeling"),Fb=a(" head on top."),yb=l(),aa=o("p"),Bb=a("This model inherits from "),Hi=o("a"),Mb=a("FlaxPreTrainedModel"),Eb=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),xb=l(),ia=o("p"),zb=a("This model is also a Flax Linen "),la=o("a"),Cb=a("flax.linen.Module"),jb=a(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Pb=l(),Kd=o("p"),qb=a("Finally, this model supports inherent JAX features such as:"),Ab=l(),Mt=o("ul"),Gd=o("li"),da=o("a"),Ib=a("Just-In-Time (JIT) compilation"),Lb=l(),Xd=o("li"),ca=o("a"),Sb=a("Automatic Differentiation"),Nb=l(),Yd=o("li"),ha=o("a"),Ob=a("Vectorization"),Wb=l(),Zd=o("li"),pa=o("a"),Rb=a("Parallelization"),Hb=l(),rt=o("div"),b(ua.$$.fragment),Qb=l(),Ss=o("p"),Ub=a("The "),ec=o("code"),Jb=a("FlaxDistilBertPreTrainedModel"),Vb=a(" forward method, overrides the "),tc=o("code"),Kb=a("__call__"),Gb=a(" special method."),Xb=l(),b(Po.$$.fragment),Yb=l(),sc=o("p"),Zb=a("Example:"),e1=l(),b(fa.$$.fragment),Vh=l(),Ns=o("h2"),qo=o("a"),oc=o("span"),b(ma.$$.fragment),t1=l(),nc=o("span"),s1=a("FlaxDistilBertForSequenceClassification"),Kh=l(),Ee=o("div"),b(ga.$$.fragment),o1=l(),rc=o("p"),n1=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),r1=l(),_a=o("p"),a1=a("This model inherits from "),Qi=o("a"),i1=a("FlaxPreTrainedModel"),l1=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),d1=l(),va=o("p"),c1=a("This model is also a Flax Linen "),Ta=o("a"),h1=a("flax.linen.Module"),p1=a(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),u1=l(),ac=o("p"),f1=a("Finally, this model supports inherent JAX features such as:"),m1=l(),Et=o("ul"),ic=o("li"),ba=o("a"),g1=a("Just-In-Time (JIT) compilation"),_1=l(),lc=o("li"),ka=o("a"),v1=a("Automatic Differentiation"),T1=l(),dc=o("li"),wa=o("a"),b1=a("Vectorization"),k1=l(),cc=o("li"),$a=o("a"),w1=a("Parallelization"),$1=l(),at=o("div"),b(Da.$$.fragment),D1=l(),Os=o("p"),F1=a("The "),hc=o("code"),y1=a("FlaxDistilBertPreTrainedModel"),B1=a(" forward method, overrides the "),pc=o("code"),M1=a("__call__"),E1=a(" special method."),x1=l(),b(Ao.$$.fragment),z1=l(),uc=o("p"),C1=a("Example:"),j1=l(),b(Fa.$$.fragment),Gh=l(),Ws=o("h2"),Io=o("a"),fc=o("span"),b(ya.$$.fragment),P1=l(),mc=o("span"),q1=a("FlaxDistilBertForMultipleChoice"),Xh=l(),xe=o("div"),b(Ba.$$.fragment),A1=l(),gc=o("p"),I1=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),L1=l(),Ma=o("p"),S1=a("This model inherits from "),Ui=o("a"),N1=a("FlaxPreTrainedModel"),O1=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),W1=l(),Ea=o("p"),R1=a("This model is also a Flax Linen "),xa=o("a"),H1=a("flax.linen.Module"),Q1=a(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),U1=l(),_c=o("p"),J1=a("Finally, this model supports inherent JAX features such as:"),V1=l(),xt=o("ul"),vc=o("li"),za=o("a"),K1=a("Just-In-Time (JIT) compilation"),G1=l(),Tc=o("li"),Ca=o("a"),X1=a("Automatic Differentiation"),Y1=l(),bc=o("li"),ja=o("a"),Z1=a("Vectorization"),ek=l(),kc=o("li"),Pa=o("a"),tk=a("Parallelization"),sk=l(),it=o("div"),b(qa.$$.fragment),ok=l(),Rs=o("p"),nk=a("The "),wc=o("code"),rk=a("FlaxDistilBertPreTrainedModel"),ak=a(" forward method, overrides the "),$c=o("code"),ik=a("__call__"),lk=a(" special method."),dk=l(),b(Lo.$$.fragment),ck=l(),Dc=o("p"),hk=a("Example:"),pk=l(),b(Aa.$$.fragment),Yh=l(),Hs=o("h2"),So=o("a"),Fc=o("span"),b(Ia.$$.fragment),uk=l(),yc=o("span"),fk=a("FlaxDistilBertForTokenClassification"),Zh=l(),ze=o("div"),b(La.$$.fragment),mk=l(),Bc=o("p"),gk=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),_k=l(),Sa=o("p"),vk=a("This model inherits from "),Ji=o("a"),Tk=a("FlaxPreTrainedModel"),bk=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),kk=l(),Na=o("p"),wk=a("This model is also a Flax Linen "),Oa=o("a"),$k=a("flax.linen.Module"),Dk=a(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Fk=l(),Mc=o("p"),yk=a("Finally, this model supports inherent JAX features such as:"),Bk=l(),zt=o("ul"),Ec=o("li"),Wa=o("a"),Mk=a("Just-In-Time (JIT) compilation"),Ek=l(),xc=o("li"),Ra=o("a"),xk=a("Automatic Differentiation"),zk=l(),zc=o("li"),Ha=o("a"),Ck=a("Vectorization"),jk=l(),Cc=o("li"),Qa=o("a"),Pk=a("Parallelization"),qk=l(),lt=o("div"),b(Ua.$$.fragment),Ak=l(),Qs=o("p"),Ik=a("The "),jc=o("code"),Lk=a("FlaxDistilBertPreTrainedModel"),Sk=a(" forward method, overrides the "),Pc=o("code"),Nk=a("__call__"),Ok=a(" special method."),Wk=l(),b(No.$$.fragment),Rk=l(),qc=o("p"),Hk=a("Example:"),Qk=l(),b(Ja.$$.fragment),ep=l(),Us=o("h2"),Oo=o("a"),Ac=o("span"),b(Va.$$.fragment),Uk=l(),Ic=o("span"),Jk=a("FlaxDistilBertForQuestionAnswering"),tp=l(),Ce=o("div"),b(Ka.$$.fragment),Vk=l(),Js=o("p"),Kk=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Lc=o("code"),Gk=a("span start logits"),Xk=a(" and "),Sc=o("code"),Yk=a("span end logits"),Zk=a(")."),ew=l(),Ga=o("p"),tw=a("This model inherits from "),Vi=o("a"),sw=a("FlaxPreTrainedModel"),ow=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),nw=l(),Xa=o("p"),rw=a("This model is also a Flax Linen "),Ya=o("a"),aw=a("flax.linen.Module"),iw=a(` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),lw=l(),Nc=o("p"),dw=a("Finally, this model supports inherent JAX features such as:"),cw=l(),Ct=o("ul"),Oc=o("li"),Za=o("a"),hw=a("Just-In-Time (JIT) compilation"),pw=l(),Wc=o("li"),ei=o("a"),uw=a("Automatic Differentiation"),fw=l(),Rc=o("li"),ti=o("a"),mw=a("Vectorization"),gw=l(),Hc=o("li"),si=o("a"),_w=a("Parallelization"),vw=l(),dt=o("div"),b(oi.$$.fragment),Tw=l(),Vs=o("p"),bw=a("The "),Qc=o("code"),kw=a("FlaxDistilBertPreTrainedModel"),ww=a(" forward method, overrides the "),Uc=o("code"),$w=a("__call__"),Dw=a(" special method."),Fw=l(),b(Wo.$$.fragment),yw=l(),Jc=o("p"),Bw=a("Example:"),Mw=l(),b(ni.$$.fragment),this.h()},l(s){const m=lF('[data-svelte="svelte-1phssyn"]',document.head);h=n(m,"META",{name:!0,content:!0}),m.forEach(t),y=d(s),g=n(s,"H1",{class:!0});var ri=r(g);v=n(ri,"A",{id:!0,class:!0,href:!0});var Vc=r(v);T=n(Vc,"SPAN",{});var Kc=r(T);k(_.$$.fragment,Kc),Kc.forEach(t),Vc.forEach(t),f=d(ri),B=n(ri,"SPAN",{});var Gc=r(B);de=i(Gc,"DistilBERT"),Gc.forEach(t),ri.forEach(t),J=d(s),E=n(s,"H2",{class:!0});var ai=r(E);G=n(ai,"A",{id:!0,class:!0,href:!0});var Xc=r(G);N=n(Xc,"SPAN",{});var Yc=r(N);k(X.$$.fragment,Yc),Yc.forEach(t),Xc.forEach(t),ce=d(ai),O=n(ai,"SPAN",{});var Zc=r(O);he=i(Zc,"Overview"),Zc.forEach(t),ai.forEach(t),re=d(s),L=n(s,"P",{});var jt=r(L);q=i(jt,"The DistilBERT model was proposed in the blog post "),Y=n(jt,"A",{href:!0,rel:!0});var eh=r(Y);V=i(eh,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),eh.forEach(t),x=i(jt,", and the paper "),z=n(jt,"A",{href:!0,rel:!0});var th=r(z);pe=i(th,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),th.forEach(t),W=i(jt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(jt,"EM",{});var sh=r(se);ue=i(sh,"bert-base-uncased"),sh.forEach(t),R=i(jt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),jt.forEach(t),ae=d(s),ee=n(s,"P",{});var oh=r(ee);A=i(oh,"The abstract from the paper is the following:"),oh.forEach(t),ie=d(s),S=n(s,"P",{});var nh=r(S);oe=n(nh,"EM",{});var rh=r(oe);fe=i(rh,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),rh.forEach(t),nh.forEach(t),P=d(s),te=n(s,"P",{});var ah=r(te);H=i(ah,"Tips:"),ah.forEach(t),le=d(s),p=n(s,"UL",{});var ii=r(p);M=n(ii,"LI",{});var Pt=r(M);K=i(Pt,"DistilBERT doesn\u2019t have "),ge=n(Pt,"CODE",{});var ih=r(ge);Te=i(ih,"token_type_ids"),ih.forEach(t),I=i(Pt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=n(Pt,"CODE",{});var lh=r(_e);be=i(lh,"tokenizer.sep_token"),lh.forEach(t),ke=i(Pt," (or "),j=n(Pt,"CODE",{});var dh=r(j);Q=i(dh,"[SEP]"),dh.forEach(t),we=i(Pt,")."),Pt.forEach(t),$e=d(ii),Z=n(ii,"LI",{});var li=r(Z);De=i(li,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(li,"CODE",{});var ch=r(ne);Fe=i(ch,"position_ids"),ch.forEach(t),pu=i(li,` input). This could be added if
necessary though, just let us know if you need this option.`),li.forEach(t),ii.forEach(t),uh=d(s),Tt=n(s,"P",{});var qt=r(Tt);uu=i(qt,"This model was contributed by "),Yo=n(qt,"A",{href:!0,rel:!0});var Ew=r(Yo);fu=i(Ew,"victorsanh"),Ew.forEach(t),mu=i(qt,`. This model jax version was
contributed by `),Zo=n(qt,"A",{href:!0,rel:!0});var xw=r(Zo);gu=i(xw,"kamalkraj"),xw.forEach(t),_u=i(qt,". The original code can be found "),en=n(qt,"A",{href:!0,rel:!0});var zw=r(en);vu=i(zw,"here"),zw.forEach(t),Tu=i(qt,"."),qt.forEach(t),fh=d(s),as=n(s,"H2",{class:!0});var op=r(as);Ks=n(op,"A",{id:!0,class:!0,href:!0});var Cw=r(Ks);_l=n(Cw,"SPAN",{});var jw=r(_l);k(tn.$$.fragment,jw),jw.forEach(t),Cw.forEach(t),bu=d(op),vl=n(op,"SPAN",{});var Pw=r(vl);ku=i(Pw,"DistilBertConfig"),Pw.forEach(t),op.forEach(t),mh=d(s),Ne=n(s,"DIV",{class:!0});var At=r(Ne);k(sn.$$.fragment,At),wu=d(At),yt=n(At,"P",{});var Ro=r(yt);$u=i(Ro,"This is the configuration class to store the configuration of a "),di=n(Ro,"A",{href:!0});var qw=r(di);Du=i(qw,"DistilBertModel"),qw.forEach(t),Fu=i(Ro,` or a
`),ci=n(Ro,"A",{href:!0});var Aw=r(ci);yu=i(Aw,"TFDistilBertModel"),Aw.forEach(t),Bu=i(Ro,`. It is used to instantiate a DistilBERT model according to the specified
arguments, defining the model architecture. Instantiating a configuration with the defaults will yield a similar
configuration to that of the DistilBERT `),on=n(Ro,"A",{href:!0,rel:!0});var Iw=r(on);Mu=i(Iw,"distilbert-base-uncased"),Iw.forEach(t),Eu=i(Ro," architecture."),Ro.forEach(t),xu=d(At),is=n(At,"P",{});var Ki=r(is);zu=i(Ki,"Configuration objects inherit from "),hi=n(Ki,"A",{href:!0});var Lw=r(hi);Cu=i(Lw,"PretrainedConfig"),Lw.forEach(t),ju=i(Ki,` and can be used to control the model
outputs. Read the documentation from `),pi=n(Ki,"A",{href:!0});var Sw=r(pi);Pu=i(Sw,"PretrainedConfig"),Sw.forEach(t),qu=i(Ki," for more information."),Ki.forEach(t),Au=d(At),Tl=n(At,"P",{});var Nw=r(Tl);Iu=i(Nw,"Examples:"),Nw.forEach(t),Lu=d(At),k(nn.$$.fragment,At),At.forEach(t),gh=d(s),ls=n(s,"H2",{class:!0});var np=r(ls);Gs=n(np,"A",{id:!0,class:!0,href:!0});var Ow=r(Gs);bl=n(Ow,"SPAN",{});var Ww=r(bl);k(rn.$$.fragment,Ww),Ww.forEach(t),Ow.forEach(t),Su=d(np),kl=n(np,"SPAN",{});var Rw=r(kl);Nu=i(Rw,"DistilBertTokenizer"),Rw.forEach(t),np.forEach(t),_h=d(s),_t=n(s,"DIV",{class:!0});var Ho=r(_t);k(an.$$.fragment,Ho),Ou=d(Ho),wl=n(Ho,"P",{});var Hw=r(wl);Wu=i(Hw,"Construct a DistilBERT tokenizer."),Hw.forEach(t),Ru=d(Ho),Xs=n(Ho,"P",{});var hh=r(Xs);ui=n(hh,"A",{href:!0});var Qw=r(ui);Hu=i(Qw,"DistilBertTokenizer"),Qw.forEach(t),Qu=i(hh," is identical to "),fi=n(hh,"A",{href:!0});var Uw=r(fi);Uu=i(Uw,"BertTokenizer"),Uw.forEach(t),Ju=i(hh,` and runs end-to-end
tokenization: punctuation splitting and wordpiece.`),hh.forEach(t),Vu=d(Ho),ln=n(Ho,"P",{});var rp=r(ln);Ku=i(rp,"Refer to superclass "),mi=n(rp,"A",{href:!0});var Jw=r(mi);Gu=i(Jw,"BertTokenizer"),Jw.forEach(t),Xu=i(rp,` for usage examples and documentation concerning
parameters.`),rp.forEach(t),Ho.forEach(t),vh=d(s),ds=n(s,"H2",{class:!0});var ap=r(ds);Ys=n(ap,"A",{id:!0,class:!0,href:!0});var Vw=r(Ys);$l=n(Vw,"SPAN",{});var Kw=r($l);k(dn.$$.fragment,Kw),Kw.forEach(t),Vw.forEach(t),Yu=d(ap),Dl=n(ap,"SPAN",{});var Gw=r(Dl);Zu=i(Gw,"DistilBertTokenizerFast"),Gw.forEach(t),ap.forEach(t),Th=d(s),vt=n(s,"DIV",{class:!0});var Qo=r(vt);k(cn.$$.fragment,Qo),ef=d(Qo),hn=n(Qo,"P",{});var ip=r(hn);tf=i(ip,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Fl=n(ip,"EM",{});var Xw=r(Fl);sf=i(Xw,"tokenizers"),Xw.forEach(t),of=i(ip," library)."),ip.forEach(t),nf=d(Qo),Zs=n(Qo,"P",{});var ph=r(Zs);gi=n(ph,"A",{href:!0});var Yw=r(gi);rf=i(Yw,"DistilBertTokenizerFast"),Yw.forEach(t),af=i(ph," is identical to "),_i=n(ph,"A",{href:!0});var Zw=r(_i);lf=i(Zw,"BertTokenizerFast"),Zw.forEach(t),df=i(ph,` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),ph.forEach(t),cf=d(Qo),pn=n(Qo,"P",{});var lp=r(pn);hf=i(lp,"Refer to superclass "),vi=n(lp,"A",{href:!0});var e0=r(vi);pf=i(e0,"BertTokenizerFast"),e0.forEach(t),uf=i(lp,` for usage examples and documentation concerning
parameters.`),lp.forEach(t),Qo.forEach(t),bh=d(s),cs=n(s,"H2",{class:!0});var dp=r(cs);eo=n(dp,"A",{id:!0,class:!0,href:!0});var t0=r(eo);yl=n(t0,"SPAN",{});var s0=r(yl);k(un.$$.fragment,s0),s0.forEach(t),t0.forEach(t),ff=d(dp),Bl=n(dp,"SPAN",{});var o0=r(Bl);mf=i(o0,"DistilBertModel"),o0.forEach(t),dp.forEach(t),kh=d(s),Oe=n(s,"DIV",{class:!0});var It=r(Oe);k(fn.$$.fragment,It),gf=d(It),Ml=n(It,"P",{});var n0=r(Ml);_f=i(n0,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),n0.forEach(t),vf=d(It),mn=n(It,"P",{});var cp=r(mn);Tf=i(cp,"This model inherits from "),Ti=n(cp,"A",{href:!0});var r0=r(Ti);bf=i(r0,"PreTrainedModel"),r0.forEach(t),kf=i(cp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),cp.forEach(t),wf=d(It),gn=n(It,"P",{});var hp=r(gn);$f=i(hp,"This model is also a PyTorch "),_n=n(hp,"A",{href:!0,rel:!0});var a0=r(_n);Df=i(a0,"torch.nn.Module"),a0.forEach(t),Ff=i(hp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),hp.forEach(t),yf=d(It),Je=n(It,"DIV",{class:!0});var Lt=r(Je);k(vn.$$.fragment,Lt),Bf=d(Lt),hs=n(Lt,"P",{});var Gi=r(hs);Mf=i(Gi,"The "),bi=n(Gi,"A",{href:!0});var i0=r(bi);Ef=i(i0,"DistilBertModel"),i0.forEach(t),xf=i(Gi," forward method, overrides the "),El=n(Gi,"CODE",{});var l0=r(El);zf=i(l0,"__call__"),l0.forEach(t),Cf=i(Gi," special method."),Gi.forEach(t),jf=d(Lt),k(to.$$.fragment,Lt),Pf=d(Lt),xl=n(Lt,"P",{});var d0=r(xl);qf=i(d0,"Example:"),d0.forEach(t),Af=d(Lt),k(Tn.$$.fragment,Lt),Lt.forEach(t),It.forEach(t),wh=d(s),ps=n(s,"H2",{class:!0});var pp=r(ps);so=n(pp,"A",{id:!0,class:!0,href:!0});var c0=r(so);zl=n(c0,"SPAN",{});var h0=r(zl);k(bn.$$.fragment,h0),h0.forEach(t),c0.forEach(t),If=d(pp),Cl=n(pp,"SPAN",{});var p0=r(Cl);Lf=i(p0,"DistilBertForMaskedLM"),p0.forEach(t),pp.forEach(t),$h=d(s),We=n(s,"DIV",{class:!0});var St=r(We);k(kn.$$.fragment,St),Sf=d(St),wn=n(St,"P",{});var up=r(wn);Nf=i(up,"DistilBert Model with a "),jl=n(up,"CODE",{});var u0=r(jl);Of=i(u0,"masked language modeling"),u0.forEach(t),Wf=i(up," head on top."),up.forEach(t),Rf=d(St),$n=n(St,"P",{});var fp=r($n);Hf=i(fp,"This model inherits from "),ki=n(fp,"A",{href:!0});var f0=r(ki);Qf=i(f0,"PreTrainedModel"),f0.forEach(t),Uf=i(fp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),fp.forEach(t),Jf=d(St),Dn=n(St,"P",{});var mp=r(Dn);Vf=i(mp,"This model is also a PyTorch "),Fn=n(mp,"A",{href:!0,rel:!0});var m0=r(Fn);Kf=i(m0,"torch.nn.Module"),m0.forEach(t),Gf=i(mp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),mp.forEach(t),Xf=d(St),Ve=n(St,"DIV",{class:!0});var Nt=r(Ve);k(yn.$$.fragment,Nt),Yf=d(Nt),us=n(Nt,"P",{});var Xi=r(us);Zf=i(Xi,"The "),wi=n(Xi,"A",{href:!0});var g0=r(wi);em=i(g0,"DistilBertForMaskedLM"),g0.forEach(t),tm=i(Xi," forward method, overrides the "),Pl=n(Xi,"CODE",{});var _0=r(Pl);sm=i(_0,"__call__"),_0.forEach(t),om=i(Xi," special method."),Xi.forEach(t),nm=d(Nt),k(oo.$$.fragment,Nt),rm=d(Nt),ql=n(Nt,"P",{});var v0=r(ql);am=i(v0,"Example:"),v0.forEach(t),im=d(Nt),k(Bn.$$.fragment,Nt),Nt.forEach(t),St.forEach(t),Dh=d(s),fs=n(s,"H2",{class:!0});var gp=r(fs);no=n(gp,"A",{id:!0,class:!0,href:!0});var T0=r(no);Al=n(T0,"SPAN",{});var b0=r(Al);k(Mn.$$.fragment,b0),b0.forEach(t),T0.forEach(t),lm=d(gp),Il=n(gp,"SPAN",{});var k0=r(Il);dm=i(k0,"DistilBertForSequenceClassification"),k0.forEach(t),gp.forEach(t),Fh=d(s),Re=n(s,"DIV",{class:!0});var Ot=r(Re);k(En.$$.fragment,Ot),cm=d(Ot),Ll=n(Ot,"P",{});var w0=r(Ll);hm=i(w0,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),w0.forEach(t),pm=d(Ot),xn=n(Ot,"P",{});var _p=r(xn);um=i(_p,"This model inherits from "),$i=n(_p,"A",{href:!0});var $0=r($i);fm=i($0,"PreTrainedModel"),$0.forEach(t),mm=i(_p,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),_p.forEach(t),gm=d(Ot),zn=n(Ot,"P",{});var vp=r(zn);_m=i(vp,"This model is also a PyTorch "),Cn=n(vp,"A",{href:!0,rel:!0});var D0=r(Cn);vm=i(D0,"torch.nn.Module"),D0.forEach(t),Tm=i(vp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),vp.forEach(t),bm=d(Ot),je=n(Ot,"DIV",{class:!0});var ct=r(je);k(jn.$$.fragment,ct),km=d(ct),ms=n(ct,"P",{});var Yi=r(ms);wm=i(Yi,"The "),Di=n(Yi,"A",{href:!0});var F0=r(Di);$m=i(F0,"DistilBertForSequenceClassification"),F0.forEach(t),Dm=i(Yi," forward method, overrides the "),Sl=n(Yi,"CODE",{});var y0=r(Sl);Fm=i(y0,"__call__"),y0.forEach(t),ym=i(Yi," special method."),Yi.forEach(t),Bm=d(ct),k(ro.$$.fragment,ct),Mm=d(ct),Nl=n(ct,"P",{});var B0=r(Nl);Em=i(B0,"Example of single-label classification:"),B0.forEach(t),xm=d(ct),k(Pn.$$.fragment,ct),zm=d(ct),Ol=n(ct,"P",{});var M0=r(Ol);Cm=i(M0,"Example of multi-label classification:"),M0.forEach(t),jm=d(ct),k(qn.$$.fragment,ct),ct.forEach(t),Ot.forEach(t),yh=d(s),gs=n(s,"H2",{class:!0});var Tp=r(gs);ao=n(Tp,"A",{id:!0,class:!0,href:!0});var E0=r(ao);Wl=n(E0,"SPAN",{});var x0=r(Wl);k(An.$$.fragment,x0),x0.forEach(t),E0.forEach(t),Pm=d(Tp),Rl=n(Tp,"SPAN",{});var z0=r(Rl);qm=i(z0,"DistilBertForMultipleChoice"),z0.forEach(t),Tp.forEach(t),Bh=d(s),He=n(s,"DIV",{class:!0});var Wt=r(He);k(In.$$.fragment,Wt),Am=d(Wt),Hl=n(Wt,"P",{});var C0=r(Hl);Im=i(C0,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),C0.forEach(t),Lm=d(Wt),Ln=n(Wt,"P",{});var bp=r(Ln);Sm=i(bp,"This model inherits from "),Fi=n(bp,"A",{href:!0});var j0=r(Fi);Nm=i(j0,"PreTrainedModel"),j0.forEach(t),Om=i(bp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),bp.forEach(t),Wm=d(Wt),Sn=n(Wt,"P",{});var kp=r(Sn);Rm=i(kp,"This model is also a PyTorch "),Nn=n(kp,"A",{href:!0,rel:!0});var P0=r(Nn);Hm=i(P0,"torch.nn.Module"),P0.forEach(t),Qm=i(kp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),kp.forEach(t),Um=d(Wt),Ke=n(Wt,"DIV",{class:!0});var Rt=r(Ke);k(On.$$.fragment,Rt),Jm=d(Rt),_s=n(Rt,"P",{});var Zi=r(_s);Vm=i(Zi,"The "),yi=n(Zi,"A",{href:!0});var q0=r(yi);Km=i(q0,"DistilBertForMultipleChoice"),q0.forEach(t),Gm=i(Zi," forward method, overrides the "),Ql=n(Zi,"CODE",{});var A0=r(Ql);Xm=i(A0,"__call__"),A0.forEach(t),Ym=i(Zi," special method."),Zi.forEach(t),Zm=d(Rt),k(io.$$.fragment,Rt),eg=d(Rt),Ul=n(Rt,"P",{});var I0=r(Ul);tg=i(I0,"Examples:"),I0.forEach(t),sg=d(Rt),k(Wn.$$.fragment,Rt),Rt.forEach(t),Wt.forEach(t),Mh=d(s),vs=n(s,"H2",{class:!0});var wp=r(vs);lo=n(wp,"A",{id:!0,class:!0,href:!0});var L0=r(lo);Jl=n(L0,"SPAN",{});var S0=r(Jl);k(Rn.$$.fragment,S0),S0.forEach(t),L0.forEach(t),og=d(wp),Vl=n(wp,"SPAN",{});var N0=r(Vl);ng=i(N0,"DistilBertForTokenClassification"),N0.forEach(t),wp.forEach(t),Eh=d(s),Qe=n(s,"DIV",{class:!0});var Ht=r(Qe);k(Hn.$$.fragment,Ht),rg=d(Ht),Kl=n(Ht,"P",{});var O0=r(Kl);ag=i(O0,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),O0.forEach(t),ig=d(Ht),Qn=n(Ht,"P",{});var $p=r(Qn);lg=i($p,"This model inherits from "),Bi=n($p,"A",{href:!0});var W0=r(Bi);dg=i(W0,"PreTrainedModel"),W0.forEach(t),cg=i($p,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),$p.forEach(t),hg=d(Ht),Un=n(Ht,"P",{});var Dp=r(Un);pg=i(Dp,"This model is also a PyTorch "),Jn=n(Dp,"A",{href:!0,rel:!0});var R0=r(Jn);ug=i(R0,"torch.nn.Module"),R0.forEach(t),fg=i(Dp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Dp.forEach(t),mg=d(Ht),Ge=n(Ht,"DIV",{class:!0});var Qt=r(Ge);k(Vn.$$.fragment,Qt),gg=d(Qt),Ts=n(Qt,"P",{});var el=r(Ts);_g=i(el,"The "),Mi=n(el,"A",{href:!0});var H0=r(Mi);vg=i(H0,"DistilBertForTokenClassification"),H0.forEach(t),Tg=i(el," forward method, overrides the "),Gl=n(el,"CODE",{});var Q0=r(Gl);bg=i(Q0,"__call__"),Q0.forEach(t),kg=i(el," special method."),el.forEach(t),wg=d(Qt),k(co.$$.fragment,Qt),$g=d(Qt),Xl=n(Qt,"P",{});var U0=r(Xl);Dg=i(U0,"Example:"),U0.forEach(t),Fg=d(Qt),k(Kn.$$.fragment,Qt),Qt.forEach(t),Ht.forEach(t),xh=d(s),bs=n(s,"H2",{class:!0});var Fp=r(bs);ho=n(Fp,"A",{id:!0,class:!0,href:!0});var J0=r(ho);Yl=n(J0,"SPAN",{});var V0=r(Yl);k(Gn.$$.fragment,V0),V0.forEach(t),J0.forEach(t),yg=d(Fp),Zl=n(Fp,"SPAN",{});var K0=r(Zl);Bg=i(K0,"DistilBertForQuestionAnswering"),K0.forEach(t),Fp.forEach(t),zh=d(s),Ue=n(s,"DIV",{class:!0});var Ut=r(Ue);k(Xn.$$.fragment,Ut),Mg=d(Ut),ks=n(Ut,"P",{});var tl=r(ks);Eg=i(tl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=n(tl,"CODE",{});var G0=r(ed);xg=i(G0,"span start logits"),G0.forEach(t),zg=i(tl," and "),td=n(tl,"CODE",{});var X0=r(td);Cg=i(X0,"span end logits"),X0.forEach(t),jg=i(tl,")."),tl.forEach(t),Pg=d(Ut),Yn=n(Ut,"P",{});var yp=r(Yn);qg=i(yp,"This model inherits from "),Ei=n(yp,"A",{href:!0});var Y0=r(Ei);Ag=i(Y0,"PreTrainedModel"),Y0.forEach(t),Ig=i(yp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),yp.forEach(t),Lg=d(Ut),Zn=n(Ut,"P",{});var Bp=r(Zn);Sg=i(Bp,"This model is also a PyTorch "),er=n(Bp,"A",{href:!0,rel:!0});var Z0=r(er);Ng=i(Z0,"torch.nn.Module"),Z0.forEach(t),Og=i(Bp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Bp.forEach(t),Wg=d(Ut),Xe=n(Ut,"DIV",{class:!0});var Jt=r(Xe);k(tr.$$.fragment,Jt),Rg=d(Jt),ws=n(Jt,"P",{});var sl=r(ws);Hg=i(sl,"The "),xi=n(sl,"A",{href:!0});var e2=r(xi);Qg=i(e2,"DistilBertForQuestionAnswering"),e2.forEach(t),Ug=i(sl," forward method, overrides the "),sd=n(sl,"CODE",{});var t2=r(sd);Jg=i(t2,"__call__"),t2.forEach(t),Vg=i(sl," special method."),sl.forEach(t),Kg=d(Jt),k(po.$$.fragment,Jt),Gg=d(Jt),od=n(Jt,"P",{});var s2=r(od);Xg=i(s2,"Example:"),s2.forEach(t),Yg=d(Jt),k(sr.$$.fragment,Jt),Jt.forEach(t),Ut.forEach(t),Ch=d(s),$s=n(s,"H2",{class:!0});var Mp=r($s);uo=n(Mp,"A",{id:!0,class:!0,href:!0});var o2=r(uo);nd=n(o2,"SPAN",{});var n2=r(nd);k(or.$$.fragment,n2),n2.forEach(t),o2.forEach(t),Zg=d(Mp),rd=n(Mp,"SPAN",{});var r2=r(rd);e_=i(r2,"TFDistilBertModel"),r2.forEach(t),Mp.forEach(t),jh=d(s),Pe=n(s,"DIV",{class:!0});var bt=r(Pe);k(nr.$$.fragment,bt),t_=d(bt),ad=n(bt,"P",{});var a2=r(ad);s_=i(a2,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),a2.forEach(t),o_=d(bt),rr=n(bt,"P",{});var Ep=r(rr);n_=i(Ep,"This model inherits from "),zi=n(Ep,"A",{href:!0});var i2=r(zi);r_=i(i2,"TFPreTrainedModel"),i2.forEach(t),a_=i(Ep,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ep.forEach(t),i_=d(bt),ar=n(bt,"P",{});var xp=r(ar);l_=i(xp,"This model is also a "),ir=n(xp,"A",{href:!0,rel:!0});var l2=r(ir);d_=i(l2,"tf.keras.Model"),l2.forEach(t),c_=i(xp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),xp.forEach(t),h_=d(bt),k(fo.$$.fragment,bt),p_=d(bt),Ye=n(bt,"DIV",{class:!0});var Vt=r(Ye);k(lr.$$.fragment,Vt),u_=d(Vt),Ds=n(Vt,"P",{});var ol=r(Ds);f_=i(ol,"The "),Ci=n(ol,"A",{href:!0});var d2=r(Ci);m_=i(d2,"TFDistilBertModel"),d2.forEach(t),g_=i(ol," forward method, overrides the "),id=n(ol,"CODE",{});var c2=r(id);__=i(c2,"__call__"),c2.forEach(t),v_=i(ol," special method."),ol.forEach(t),T_=d(Vt),k(mo.$$.fragment,Vt),b_=d(Vt),ld=n(Vt,"P",{});var h2=r(ld);k_=i(h2,"Example:"),h2.forEach(t),w_=d(Vt),k(dr.$$.fragment,Vt),Vt.forEach(t),bt.forEach(t),Ph=d(s),Fs=n(s,"H2",{class:!0});var zp=r(Fs);go=n(zp,"A",{id:!0,class:!0,href:!0});var p2=r(go);dd=n(p2,"SPAN",{});var u2=r(dd);k(cr.$$.fragment,u2),u2.forEach(t),p2.forEach(t),$_=d(zp),cd=n(zp,"SPAN",{});var f2=r(cd);D_=i(f2,"TFDistilBertForMaskedLM"),f2.forEach(t),zp.forEach(t),qh=d(s),qe=n(s,"DIV",{class:!0});var kt=r(qe);k(hr.$$.fragment,kt),F_=d(kt),pr=n(kt,"P",{});var Cp=r(pr);y_=i(Cp,"DistilBert Model with a "),hd=n(Cp,"CODE",{});var m2=r(hd);B_=i(m2,"masked language modeling"),m2.forEach(t),M_=i(Cp," head on top."),Cp.forEach(t),E_=d(kt),ur=n(kt,"P",{});var jp=r(ur);x_=i(jp,"This model inherits from "),ji=n(jp,"A",{href:!0});var g2=r(ji);z_=i(g2,"TFPreTrainedModel"),g2.forEach(t),C_=i(jp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),jp.forEach(t),j_=d(kt),fr=n(kt,"P",{});var Pp=r(fr);P_=i(Pp,"This model is also a "),mr=n(Pp,"A",{href:!0,rel:!0});var _2=r(mr);q_=i(_2,"tf.keras.Model"),_2.forEach(t),A_=i(Pp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Pp.forEach(t),I_=d(kt),k(_o.$$.fragment,kt),L_=d(kt),Ze=n(kt,"DIV",{class:!0});var Kt=r(Ze);k(gr.$$.fragment,Kt),S_=d(Kt),ys=n(Kt,"P",{});var nl=r(ys);N_=i(nl,"The "),Pi=n(nl,"A",{href:!0});var v2=r(Pi);O_=i(v2,"TFDistilBertForMaskedLM"),v2.forEach(t),W_=i(nl," forward method, overrides the "),pd=n(nl,"CODE",{});var T2=r(pd);R_=i(T2,"__call__"),T2.forEach(t),H_=i(nl," special method."),nl.forEach(t),Q_=d(Kt),k(vo.$$.fragment,Kt),U_=d(Kt),ud=n(Kt,"P",{});var b2=r(ud);J_=i(b2,"Example:"),b2.forEach(t),V_=d(Kt),k(_r.$$.fragment,Kt),Kt.forEach(t),kt.forEach(t),Ah=d(s),Bs=n(s,"H2",{class:!0});var qp=r(Bs);To=n(qp,"A",{id:!0,class:!0,href:!0});var k2=r(To);fd=n(k2,"SPAN",{});var w2=r(fd);k(vr.$$.fragment,w2),w2.forEach(t),k2.forEach(t),K_=d(qp),md=n(qp,"SPAN",{});var $2=r(md);G_=i($2,"TFDistilBertForSequenceClassification"),$2.forEach(t),qp.forEach(t),Ih=d(s),Ae=n(s,"DIV",{class:!0});var wt=r(Ae);k(Tr.$$.fragment,wt),X_=d(wt),gd=n(wt,"P",{});var D2=r(gd);Y_=i(D2,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),D2.forEach(t),Z_=d(wt),br=n(wt,"P",{});var Ap=r(br);ev=i(Ap,"This model inherits from "),qi=n(Ap,"A",{href:!0});var F2=r(qi);tv=i(F2,"TFPreTrainedModel"),F2.forEach(t),sv=i(Ap,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ap.forEach(t),ov=d(wt),kr=n(wt,"P",{});var Ip=r(kr);nv=i(Ip,"This model is also a "),wr=n(Ip,"A",{href:!0,rel:!0});var y2=r(wr);rv=i(y2,"tf.keras.Model"),y2.forEach(t),av=i(Ip,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ip.forEach(t),iv=d(wt),k(bo.$$.fragment,wt),lv=d(wt),et=n(wt,"DIV",{class:!0});var Gt=r(et);k($r.$$.fragment,Gt),dv=d(Gt),Ms=n(Gt,"P",{});var rl=r(Ms);cv=i(rl,"The "),Ai=n(rl,"A",{href:!0});var B2=r(Ai);hv=i(B2,"TFDistilBertForSequenceClassification"),B2.forEach(t),pv=i(rl," forward method, overrides the "),_d=n(rl,"CODE",{});var M2=r(_d);uv=i(M2,"__call__"),M2.forEach(t),fv=i(rl," special method."),rl.forEach(t),mv=d(Gt),k(ko.$$.fragment,Gt),gv=d(Gt),vd=n(Gt,"P",{});var E2=r(vd);_v=i(E2,"Example:"),E2.forEach(t),vv=d(Gt),k(Dr.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Lh=d(s),Es=n(s,"H2",{class:!0});var Lp=r(Es);wo=n(Lp,"A",{id:!0,class:!0,href:!0});var x2=r(wo);Td=n(x2,"SPAN",{});var z2=r(Td);k(Fr.$$.fragment,z2),z2.forEach(t),x2.forEach(t),Tv=d(Lp),bd=n(Lp,"SPAN",{});var C2=r(bd);bv=i(C2,"TFDistilBertForMultipleChoice"),C2.forEach(t),Lp.forEach(t),Sh=d(s),Ie=n(s,"DIV",{class:!0});var $t=r(Ie);k(yr.$$.fragment,$t),kv=d($t),kd=n($t,"P",{});var j2=r(kd);wv=i(j2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),j2.forEach(t),$v=d($t),Br=n($t,"P",{});var Sp=r(Br);Dv=i(Sp,"This model inherits from "),Ii=n(Sp,"A",{href:!0});var P2=r(Ii);Fv=i(P2,"TFPreTrainedModel"),P2.forEach(t),yv=i(Sp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Sp.forEach(t),Bv=d($t),Mr=n($t,"P",{});var Np=r(Mr);Mv=i(Np,"This model is also a "),Er=n(Np,"A",{href:!0,rel:!0});var q2=r(Er);Ev=i(q2,"tf.keras.Model"),q2.forEach(t),xv=i(Np,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Np.forEach(t),zv=d($t),k($o.$$.fragment,$t),Cv=d($t),tt=n($t,"DIV",{class:!0});var Xt=r(tt);k(xr.$$.fragment,Xt),jv=d(Xt),xs=n(Xt,"P",{});var al=r(xs);Pv=i(al,"The "),Li=n(al,"A",{href:!0});var A2=r(Li);qv=i(A2,"TFDistilBertForMultipleChoice"),A2.forEach(t),Av=i(al," forward method, overrides the "),wd=n(al,"CODE",{});var I2=r(wd);Iv=i(I2,"__call__"),I2.forEach(t),Lv=i(al," special method."),al.forEach(t),Sv=d(Xt),k(Do.$$.fragment,Xt),Nv=d(Xt),$d=n(Xt,"P",{});var L2=r($d);Ov=i(L2,"Example:"),L2.forEach(t),Wv=d(Xt),k(zr.$$.fragment,Xt),Xt.forEach(t),$t.forEach(t),Nh=d(s),zs=n(s,"H2",{class:!0});var Op=r(zs);Fo=n(Op,"A",{id:!0,class:!0,href:!0});var S2=r(Fo);Dd=n(S2,"SPAN",{});var N2=r(Dd);k(Cr.$$.fragment,N2),N2.forEach(t),S2.forEach(t),Rv=d(Op),Fd=n(Op,"SPAN",{});var O2=r(Fd);Hv=i(O2,"TFDistilBertForTokenClassification"),O2.forEach(t),Op.forEach(t),Oh=d(s),Le=n(s,"DIV",{class:!0});var Dt=r(Le);k(jr.$$.fragment,Dt),Qv=d(Dt),yd=n(Dt,"P",{});var W2=r(yd);Uv=i(W2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),W2.forEach(t),Jv=d(Dt),Pr=n(Dt,"P",{});var Wp=r(Pr);Vv=i(Wp,"This model inherits from "),Si=n(Wp,"A",{href:!0});var R2=r(Si);Kv=i(R2,"TFPreTrainedModel"),R2.forEach(t),Gv=i(Wp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wp.forEach(t),Xv=d(Dt),qr=n(Dt,"P",{});var Rp=r(qr);Yv=i(Rp,"This model is also a "),Ar=n(Rp,"A",{href:!0,rel:!0});var H2=r(Ar);Zv=i(H2,"tf.keras.Model"),H2.forEach(t),eT=i(Rp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Rp.forEach(t),tT=d(Dt),k(yo.$$.fragment,Dt),sT=d(Dt),st=n(Dt,"DIV",{class:!0});var Yt=r(st);k(Ir.$$.fragment,Yt),oT=d(Yt),Cs=n(Yt,"P",{});var il=r(Cs);nT=i(il,"The "),Ni=n(il,"A",{href:!0});var Q2=r(Ni);rT=i(Q2,"TFDistilBertForTokenClassification"),Q2.forEach(t),aT=i(il," forward method, overrides the "),Bd=n(il,"CODE",{});var U2=r(Bd);iT=i(U2,"__call__"),U2.forEach(t),lT=i(il," special method."),il.forEach(t),dT=d(Yt),k(Bo.$$.fragment,Yt),cT=d(Yt),Md=n(Yt,"P",{});var J2=r(Md);hT=i(J2,"Example:"),J2.forEach(t),pT=d(Yt),k(Lr.$$.fragment,Yt),Yt.forEach(t),Dt.forEach(t),Wh=d(s),js=n(s,"H2",{class:!0});var Hp=r(js);Mo=n(Hp,"A",{id:!0,class:!0,href:!0});var V2=r(Mo);Ed=n(V2,"SPAN",{});var K2=r(Ed);k(Sr.$$.fragment,K2),K2.forEach(t),V2.forEach(t),uT=d(Hp),xd=n(Hp,"SPAN",{});var G2=r(xd);fT=i(G2,"TFDistilBertForQuestionAnswering"),G2.forEach(t),Hp.forEach(t),Rh=d(s),Se=n(s,"DIV",{class:!0});var Ft=r(Se);k(Nr.$$.fragment,Ft),mT=d(Ft),Ps=n(Ft,"P",{});var ll=r(Ps);gT=i(ll,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=n(ll,"CODE",{});var X2=r(zd);_T=i(X2,"span start logits"),X2.forEach(t),vT=i(ll," and "),Cd=n(ll,"CODE",{});var Y2=r(Cd);TT=i(Y2,"span end logits"),Y2.forEach(t),bT=i(ll,")."),ll.forEach(t),kT=d(Ft),Or=n(Ft,"P",{});var Qp=r(Or);wT=i(Qp,"This model inherits from "),Oi=n(Qp,"A",{href:!0});var Z2=r(Oi);$T=i(Z2,"TFPreTrainedModel"),Z2.forEach(t),DT=i(Qp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Qp.forEach(t),FT=d(Ft),Wr=n(Ft,"P",{});var Up=r(Wr);yT=i(Up,"This model is also a "),Rr=n(Up,"A",{href:!0,rel:!0});var e$=r(Rr);BT=i(e$,"tf.keras.Model"),e$.forEach(t),MT=i(Up,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Up.forEach(t),ET=d(Ft),k(Eo.$$.fragment,Ft),xT=d(Ft),ot=n(Ft,"DIV",{class:!0});var Zt=r(ot);k(Hr.$$.fragment,Zt),zT=d(Zt),qs=n(Zt,"P",{});var dl=r(qs);CT=i(dl,"The "),Wi=n(dl,"A",{href:!0});var t$=r(Wi);jT=i(t$,"TFDistilBertForQuestionAnswering"),t$.forEach(t),PT=i(dl," forward method, overrides the "),jd=n(dl,"CODE",{});var s$=r(jd);qT=i(s$,"__call__"),s$.forEach(t),AT=i(dl," special method."),dl.forEach(t),IT=d(Zt),k(xo.$$.fragment,Zt),LT=d(Zt),Pd=n(Zt,"P",{});var o$=r(Pd);ST=i(o$,"Example:"),o$.forEach(t),NT=d(Zt),k(Qr.$$.fragment,Zt),Zt.forEach(t),Ft.forEach(t),Hh=d(s),As=n(s,"H2",{class:!0});var Jp=r(As);zo=n(Jp,"A",{id:!0,class:!0,href:!0});var n$=r(zo);qd=n(n$,"SPAN",{});var r$=r(qd);k(Ur.$$.fragment,r$),r$.forEach(t),n$.forEach(t),OT=d(Jp),Ad=n(Jp,"SPAN",{});var a$=r(Ad);WT=i(a$,"FlaxDistilBertModel"),a$.forEach(t),Jp.forEach(t),Qh=d(s),Be=n(s,"DIV",{class:!0});var ht=r(Be);k(Jr.$$.fragment,ht),RT=d(ht),Id=n(ht,"P",{});var i$=r(Id);HT=i(i$,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),i$.forEach(t),QT=d(ht),Vr=n(ht,"P",{});var Vp=r(Vr);UT=i(Vp,"This model inherits from "),Ri=n(Vp,"A",{href:!0});var l$=r(Ri);JT=i(l$,"FlaxPreTrainedModel"),l$.forEach(t),VT=i(Vp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),Vp.forEach(t),KT=d(ht),Kr=n(ht,"P",{});var Kp=r(Kr);GT=i(Kp,"This model is also a Flax Linen "),Gr=n(Kp,"A",{href:!0,rel:!0});var d$=r(Gr);XT=i(d$,"flax.linen.Module"),d$.forEach(t),YT=i(Kp,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Kp.forEach(t),ZT=d(ht),Ld=n(ht,"P",{});var c$=r(Ld);eb=i(c$,"Finally, this model supports inherent JAX features such as:"),c$.forEach(t),tb=d(ht),Bt=n(ht,"UL",{});var Uo=r(Bt);Sd=n(Uo,"LI",{});var h$=r(Sd);Xr=n(h$,"A",{href:!0,rel:!0});var p$=r(Xr);sb=i(p$,"Just-In-Time (JIT) compilation"),p$.forEach(t),h$.forEach(t),ob=d(Uo),Nd=n(Uo,"LI",{});var u$=r(Nd);Yr=n(u$,"A",{href:!0,rel:!0});var f$=r(Yr);nb=i(f$,"Automatic Differentiation"),f$.forEach(t),u$.forEach(t),rb=d(Uo),Od=n(Uo,"LI",{});var m$=r(Od);Zr=n(m$,"A",{href:!0,rel:!0});var g$=r(Zr);ab=i(g$,"Vectorization"),g$.forEach(t),m$.forEach(t),ib=d(Uo),Wd=n(Uo,"LI",{});var _$=r(Wd);ea=n(_$,"A",{href:!0,rel:!0});var v$=r(ea);lb=i(v$,"Parallelization"),v$.forEach(t),_$.forEach(t),Uo.forEach(t),db=d(ht),nt=n(ht,"DIV",{class:!0});var es=r(nt);k(ta.$$.fragment,es),cb=d(es),Is=n(es,"P",{});var cl=r(Is);hb=i(cl,"The "),Rd=n(cl,"CODE",{});var T$=r(Rd);pb=i(T$,"FlaxDistilBertPreTrainedModel"),T$.forEach(t),ub=i(cl," forward method, overrides the "),Hd=n(cl,"CODE",{});var b$=r(Hd);fb=i(b$,"__call__"),b$.forEach(t),mb=i(cl," special method."),cl.forEach(t),gb=d(es),k(Co.$$.fragment,es),_b=d(es),Qd=n(es,"P",{});var k$=r(Qd);vb=i(k$,"Example:"),k$.forEach(t),Tb=d(es),k(sa.$$.fragment,es),es.forEach(t),ht.forEach(t),Uh=d(s),Ls=n(s,"H2",{class:!0});var Gp=r(Ls);jo=n(Gp,"A",{id:!0,class:!0,href:!0});var w$=r(jo);Ud=n(w$,"SPAN",{});var $$=r(Ud);k(oa.$$.fragment,$$),$$.forEach(t),w$.forEach(t),bb=d(Gp),Jd=n(Gp,"SPAN",{});var D$=r(Jd);kb=i(D$,"FlaxDistilBertForMaskedLM"),D$.forEach(t),Gp.forEach(t),Jh=d(s),Me=n(s,"DIV",{class:!0});var pt=r(Me);k(na.$$.fragment,pt),wb=d(pt),ra=n(pt,"P",{});var Xp=r(ra);$b=i(Xp,"DistilBert Model with a "),Vd=n(Xp,"CODE",{});var F$=r(Vd);Db=i(F$,"language modeling"),F$.forEach(t),Fb=i(Xp," head on top."),Xp.forEach(t),yb=d(pt),aa=n(pt,"P",{});var Yp=r(aa);Bb=i(Yp,"This model inherits from "),Hi=n(Yp,"A",{href:!0});var y$=r(Hi);Mb=i(y$,"FlaxPreTrainedModel"),y$.forEach(t),Eb=i(Yp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),Yp.forEach(t),xb=d(pt),ia=n(pt,"P",{});var Zp=r(ia);zb=i(Zp,"This model is also a Flax Linen "),la=n(Zp,"A",{href:!0,rel:!0});var B$=r(la);Cb=i(B$,"flax.linen.Module"),B$.forEach(t),jb=i(Zp,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),Zp.forEach(t),Pb=d(pt),Kd=n(pt,"P",{});var M$=r(Kd);qb=i(M$,"Finally, this model supports inherent JAX features such as:"),M$.forEach(t),Ab=d(pt),Mt=n(pt,"UL",{});var Jo=r(Mt);Gd=n(Jo,"LI",{});var E$=r(Gd);da=n(E$,"A",{href:!0,rel:!0});var x$=r(da);Ib=i(x$,"Just-In-Time (JIT) compilation"),x$.forEach(t),E$.forEach(t),Lb=d(Jo),Xd=n(Jo,"LI",{});var z$=r(Xd);ca=n(z$,"A",{href:!0,rel:!0});var C$=r(ca);Sb=i(C$,"Automatic Differentiation"),C$.forEach(t),z$.forEach(t),Nb=d(Jo),Yd=n(Jo,"LI",{});var j$=r(Yd);ha=n(j$,"A",{href:!0,rel:!0});var P$=r(ha);Ob=i(P$,"Vectorization"),P$.forEach(t),j$.forEach(t),Wb=d(Jo),Zd=n(Jo,"LI",{});var q$=r(Zd);pa=n(q$,"A",{href:!0,rel:!0});var A$=r(pa);Rb=i(A$,"Parallelization"),A$.forEach(t),q$.forEach(t),Jo.forEach(t),Hb=d(pt),rt=n(pt,"DIV",{class:!0});var ts=r(rt);k(ua.$$.fragment,ts),Qb=d(ts),Ss=n(ts,"P",{});var hl=r(Ss);Ub=i(hl,"The "),ec=n(hl,"CODE",{});var I$=r(ec);Jb=i(I$,"FlaxDistilBertPreTrainedModel"),I$.forEach(t),Vb=i(hl," forward method, overrides the "),tc=n(hl,"CODE",{});var L$=r(tc);Kb=i(L$,"__call__"),L$.forEach(t),Gb=i(hl," special method."),hl.forEach(t),Xb=d(ts),k(Po.$$.fragment,ts),Yb=d(ts),sc=n(ts,"P",{});var S$=r(sc);Zb=i(S$,"Example:"),S$.forEach(t),e1=d(ts),k(fa.$$.fragment,ts),ts.forEach(t),pt.forEach(t),Vh=d(s),Ns=n(s,"H2",{class:!0});var eu=r(Ns);qo=n(eu,"A",{id:!0,class:!0,href:!0});var N$=r(qo);oc=n(N$,"SPAN",{});var O$=r(oc);k(ma.$$.fragment,O$),O$.forEach(t),N$.forEach(t),t1=d(eu),nc=n(eu,"SPAN",{});var W$=r(nc);s1=i(W$,"FlaxDistilBertForSequenceClassification"),W$.forEach(t),eu.forEach(t),Kh=d(s),Ee=n(s,"DIV",{class:!0});var ut=r(Ee);k(ga.$$.fragment,ut),o1=d(ut),rc=n(ut,"P",{});var R$=r(rc);n1=i(R$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),R$.forEach(t),r1=d(ut),_a=n(ut,"P",{});var tu=r(_a);a1=i(tu,"This model inherits from "),Qi=n(tu,"A",{href:!0});var H$=r(Qi);i1=i(H$,"FlaxPreTrainedModel"),H$.forEach(t),l1=i(tu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),tu.forEach(t),d1=d(ut),va=n(ut,"P",{});var su=r(va);c1=i(su,"This model is also a Flax Linen "),Ta=n(su,"A",{href:!0,rel:!0});var Q$=r(Ta);h1=i(Q$,"flax.linen.Module"),Q$.forEach(t),p1=i(su,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),su.forEach(t),u1=d(ut),ac=n(ut,"P",{});var U$=r(ac);f1=i(U$,"Finally, this model supports inherent JAX features such as:"),U$.forEach(t),m1=d(ut),Et=n(ut,"UL",{});var Vo=r(Et);ic=n(Vo,"LI",{});var J$=r(ic);ba=n(J$,"A",{href:!0,rel:!0});var V$=r(ba);g1=i(V$,"Just-In-Time (JIT) compilation"),V$.forEach(t),J$.forEach(t),_1=d(Vo),lc=n(Vo,"LI",{});var K$=r(lc);ka=n(K$,"A",{href:!0,rel:!0});var G$=r(ka);v1=i(G$,"Automatic Differentiation"),G$.forEach(t),K$.forEach(t),T1=d(Vo),dc=n(Vo,"LI",{});var X$=r(dc);wa=n(X$,"A",{href:!0,rel:!0});var Y$=r(wa);b1=i(Y$,"Vectorization"),Y$.forEach(t),X$.forEach(t),k1=d(Vo),cc=n(Vo,"LI",{});var Z$=r(cc);$a=n(Z$,"A",{href:!0,rel:!0});var eD=r($a);w1=i(eD,"Parallelization"),eD.forEach(t),Z$.forEach(t),Vo.forEach(t),$1=d(ut),at=n(ut,"DIV",{class:!0});var ss=r(at);k(Da.$$.fragment,ss),D1=d(ss),Os=n(ss,"P",{});var pl=r(Os);F1=i(pl,"The "),hc=n(pl,"CODE",{});var tD=r(hc);y1=i(tD,"FlaxDistilBertPreTrainedModel"),tD.forEach(t),B1=i(pl," forward method, overrides the "),pc=n(pl,"CODE",{});var sD=r(pc);M1=i(sD,"__call__"),sD.forEach(t),E1=i(pl," special method."),pl.forEach(t),x1=d(ss),k(Ao.$$.fragment,ss),z1=d(ss),uc=n(ss,"P",{});var oD=r(uc);C1=i(oD,"Example:"),oD.forEach(t),j1=d(ss),k(Fa.$$.fragment,ss),ss.forEach(t),ut.forEach(t),Gh=d(s),Ws=n(s,"H2",{class:!0});var ou=r(Ws);Io=n(ou,"A",{id:!0,class:!0,href:!0});var nD=r(Io);fc=n(nD,"SPAN",{});var rD=r(fc);k(ya.$$.fragment,rD),rD.forEach(t),nD.forEach(t),P1=d(ou),mc=n(ou,"SPAN",{});var aD=r(mc);q1=i(aD,"FlaxDistilBertForMultipleChoice"),aD.forEach(t),ou.forEach(t),Xh=d(s),xe=n(s,"DIV",{class:!0});var ft=r(xe);k(Ba.$$.fragment,ft),A1=d(ft),gc=n(ft,"P",{});var iD=r(gc);I1=i(iD,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),iD.forEach(t),L1=d(ft),Ma=n(ft,"P",{});var nu=r(Ma);S1=i(nu,"This model inherits from "),Ui=n(nu,"A",{href:!0});var lD=r(Ui);N1=i(lD,"FlaxPreTrainedModel"),lD.forEach(t),O1=i(nu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),nu.forEach(t),W1=d(ft),Ea=n(ft,"P",{});var ru=r(Ea);R1=i(ru,"This model is also a Flax Linen "),xa=n(ru,"A",{href:!0,rel:!0});var dD=r(xa);H1=i(dD,"flax.linen.Module"),dD.forEach(t),Q1=i(ru,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),ru.forEach(t),U1=d(ft),_c=n(ft,"P",{});var cD=r(_c);J1=i(cD,"Finally, this model supports inherent JAX features such as:"),cD.forEach(t),V1=d(ft),xt=n(ft,"UL",{});var Ko=r(xt);vc=n(Ko,"LI",{});var hD=r(vc);za=n(hD,"A",{href:!0,rel:!0});var pD=r(za);K1=i(pD,"Just-In-Time (JIT) compilation"),pD.forEach(t),hD.forEach(t),G1=d(Ko),Tc=n(Ko,"LI",{});var uD=r(Tc);Ca=n(uD,"A",{href:!0,rel:!0});var fD=r(Ca);X1=i(fD,"Automatic Differentiation"),fD.forEach(t),uD.forEach(t),Y1=d(Ko),bc=n(Ko,"LI",{});var mD=r(bc);ja=n(mD,"A",{href:!0,rel:!0});var gD=r(ja);Z1=i(gD,"Vectorization"),gD.forEach(t),mD.forEach(t),ek=d(Ko),kc=n(Ko,"LI",{});var _D=r(kc);Pa=n(_D,"A",{href:!0,rel:!0});var vD=r(Pa);tk=i(vD,"Parallelization"),vD.forEach(t),_D.forEach(t),Ko.forEach(t),sk=d(ft),it=n(ft,"DIV",{class:!0});var os=r(it);k(qa.$$.fragment,os),ok=d(os),Rs=n(os,"P",{});var ul=r(Rs);nk=i(ul,"The "),wc=n(ul,"CODE",{});var TD=r(wc);rk=i(TD,"FlaxDistilBertPreTrainedModel"),TD.forEach(t),ak=i(ul," forward method, overrides the "),$c=n(ul,"CODE",{});var bD=r($c);ik=i(bD,"__call__"),bD.forEach(t),lk=i(ul," special method."),ul.forEach(t),dk=d(os),k(Lo.$$.fragment,os),ck=d(os),Dc=n(os,"P",{});var kD=r(Dc);hk=i(kD,"Example:"),kD.forEach(t),pk=d(os),k(Aa.$$.fragment,os),os.forEach(t),ft.forEach(t),Yh=d(s),Hs=n(s,"H2",{class:!0});var au=r(Hs);So=n(au,"A",{id:!0,class:!0,href:!0});var wD=r(So);Fc=n(wD,"SPAN",{});var $D=r(Fc);k(Ia.$$.fragment,$D),$D.forEach(t),wD.forEach(t),uk=d(au),yc=n(au,"SPAN",{});var DD=r(yc);fk=i(DD,"FlaxDistilBertForTokenClassification"),DD.forEach(t),au.forEach(t),Zh=d(s),ze=n(s,"DIV",{class:!0});var mt=r(ze);k(La.$$.fragment,mt),mk=d(mt),Bc=n(mt,"P",{});var FD=r(Bc);gk=i(FD,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),FD.forEach(t),_k=d(mt),Sa=n(mt,"P",{});var iu=r(Sa);vk=i(iu,"This model inherits from "),Ji=n(iu,"A",{href:!0});var yD=r(Ji);Tk=i(yD,"FlaxPreTrainedModel"),yD.forEach(t),bk=i(iu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),iu.forEach(t),kk=d(mt),Na=n(mt,"P",{});var lu=r(Na);wk=i(lu,"This model is also a Flax Linen "),Oa=n(lu,"A",{href:!0,rel:!0});var BD=r(Oa);$k=i(BD,"flax.linen.Module"),BD.forEach(t),Dk=i(lu,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),lu.forEach(t),Fk=d(mt),Mc=n(mt,"P",{});var MD=r(Mc);yk=i(MD,"Finally, this model supports inherent JAX features such as:"),MD.forEach(t),Bk=d(mt),zt=n(mt,"UL",{});var Go=r(zt);Ec=n(Go,"LI",{});var ED=r(Ec);Wa=n(ED,"A",{href:!0,rel:!0});var xD=r(Wa);Mk=i(xD,"Just-In-Time (JIT) compilation"),xD.forEach(t),ED.forEach(t),Ek=d(Go),xc=n(Go,"LI",{});var zD=r(xc);Ra=n(zD,"A",{href:!0,rel:!0});var CD=r(Ra);xk=i(CD,"Automatic Differentiation"),CD.forEach(t),zD.forEach(t),zk=d(Go),zc=n(Go,"LI",{});var jD=r(zc);Ha=n(jD,"A",{href:!0,rel:!0});var PD=r(Ha);Ck=i(PD,"Vectorization"),PD.forEach(t),jD.forEach(t),jk=d(Go),Cc=n(Go,"LI",{});var qD=r(Cc);Qa=n(qD,"A",{href:!0,rel:!0});var AD=r(Qa);Pk=i(AD,"Parallelization"),AD.forEach(t),qD.forEach(t),Go.forEach(t),qk=d(mt),lt=n(mt,"DIV",{class:!0});var ns=r(lt);k(Ua.$$.fragment,ns),Ak=d(ns),Qs=n(ns,"P",{});var fl=r(Qs);Ik=i(fl,"The "),jc=n(fl,"CODE",{});var ID=r(jc);Lk=i(ID,"FlaxDistilBertPreTrainedModel"),ID.forEach(t),Sk=i(fl," forward method, overrides the "),Pc=n(fl,"CODE",{});var LD=r(Pc);Nk=i(LD,"__call__"),LD.forEach(t),Ok=i(fl," special method."),fl.forEach(t),Wk=d(ns),k(No.$$.fragment,ns),Rk=d(ns),qc=n(ns,"P",{});var SD=r(qc);Hk=i(SD,"Example:"),SD.forEach(t),Qk=d(ns),k(Ja.$$.fragment,ns),ns.forEach(t),mt.forEach(t),ep=d(s),Us=n(s,"H2",{class:!0});var du=r(Us);Oo=n(du,"A",{id:!0,class:!0,href:!0});var ND=r(Oo);Ac=n(ND,"SPAN",{});var OD=r(Ac);k(Va.$$.fragment,OD),OD.forEach(t),ND.forEach(t),Uk=d(du),Ic=n(du,"SPAN",{});var WD=r(Ic);Jk=i(WD,"FlaxDistilBertForQuestionAnswering"),WD.forEach(t),du.forEach(t),tp=d(s),Ce=n(s,"DIV",{class:!0});var gt=r(Ce);k(Ka.$$.fragment,gt),Vk=d(gt),Js=n(gt,"P",{});var ml=r(Js);Kk=i(ml,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Lc=n(ml,"CODE",{});var RD=r(Lc);Gk=i(RD,"span start logits"),RD.forEach(t),Xk=i(ml," and "),Sc=n(ml,"CODE",{});var HD=r(Sc);Yk=i(HD,"span end logits"),HD.forEach(t),Zk=i(ml,")."),ml.forEach(t),ew=d(gt),Ga=n(gt,"P",{});var cu=r(Ga);tw=i(cu,"This model inherits from "),Vi=n(cu,"A",{href:!0});var QD=r(Vi);sw=i(QD,"FlaxPreTrainedModel"),QD.forEach(t),ow=i(cu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading, saving and converting weights from
PyTorch models)`),cu.forEach(t),nw=d(gt),Xa=n(gt,"P",{});var hu=r(Xa);rw=i(hu,"This model is also a Flax Linen "),Ya=n(hu,"A",{href:!0,rel:!0});var UD=r(Ya);aw=i(UD,"flax.linen.Module"),UD.forEach(t),iw=i(hu,` subclass. Use it as a regular Flax linen Module
and refer to the Flax documentation for all matter related to general usage and behavior.`),hu.forEach(t),lw=d(gt),Nc=n(gt,"P",{});var JD=r(Nc);dw=i(JD,"Finally, this model supports inherent JAX features such as:"),JD.forEach(t),cw=d(gt),Ct=n(gt,"UL",{});var Xo=r(Ct);Oc=n(Xo,"LI",{});var VD=r(Oc);Za=n(VD,"A",{href:!0,rel:!0});var KD=r(Za);hw=i(KD,"Just-In-Time (JIT) compilation"),KD.forEach(t),VD.forEach(t),pw=d(Xo),Wc=n(Xo,"LI",{});var GD=r(Wc);ei=n(GD,"A",{href:!0,rel:!0});var XD=r(ei);uw=i(XD,"Automatic Differentiation"),XD.forEach(t),GD.forEach(t),fw=d(Xo),Rc=n(Xo,"LI",{});var YD=r(Rc);ti=n(YD,"A",{href:!0,rel:!0});var ZD=r(ti);mw=i(ZD,"Vectorization"),ZD.forEach(t),YD.forEach(t),gw=d(Xo),Hc=n(Xo,"LI",{});var eF=r(Hc);si=n(eF,"A",{href:!0,rel:!0});var tF=r(si);_w=i(tF,"Parallelization"),tF.forEach(t),eF.forEach(t),Xo.forEach(t),vw=d(gt),dt=n(gt,"DIV",{class:!0});var rs=r(dt);k(oi.$$.fragment,rs),Tw=d(rs),Vs=n(rs,"P",{});var gl=r(Vs);bw=i(gl,"The "),Qc=n(gl,"CODE",{});var sF=r(Qc);kw=i(sF,"FlaxDistilBertPreTrainedModel"),sF.forEach(t),ww=i(gl," forward method, overrides the "),Uc=n(gl,"CODE",{});var oF=r(Uc);$w=i(oF,"__call__"),oF.forEach(t),Dw=i(gl," special method."),gl.forEach(t),Fw=d(rs),k(Wo.$$.fragment,rs),yw=d(rs),Jc=n(rs,"P",{});var nF=r(Jc);Bw=i(nF,"Example:"),nF.forEach(t),Mw=d(rs),k(ni.$$.fragment,rs),rs.forEach(t),gt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(PF)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Yo,"href","https://huggingface.co/victorsanh"),c(Yo,"rel","nofollow"),c(Zo,"href","https://huggingface.co/kamalkraj"),c(Zo,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Ks,"id","transformers.DistilBertConfig"),c(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ks,"href","#transformers.DistilBertConfig"),c(as,"class","relative group"),c(di,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertModel"),c(ci,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(on,"href","https://huggingface.co/distilbert-base-uncased"),c(on,"rel","nofollow"),c(hi,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(pi,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ne,"class","docstring"),c(Gs,"id","transformers.DistilBertTokenizer"),c(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gs,"href","#transformers.DistilBertTokenizer"),c(ls,"class","relative group"),c(ui,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(fi,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer"),c(mi,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Ys,"id","transformers.DistilBertTokenizerFast"),c(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ys,"href","#transformers.DistilBertTokenizerFast"),c(ds,"class","relative group"),c(gi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(_i,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizerFast"),c(vi,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(eo,"id","transformers.DistilBertModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.DistilBertModel"),c(cs,"class","relative group"),c(Ti,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(bi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertModel"),c(Je,"class","docstring"),c(Oe,"class","docstring"),c(so,"id","transformers.DistilBertForMaskedLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.DistilBertForMaskedLM"),c(ps,"class","relative group"),c(ki,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fn,"rel","nofollow"),c(wi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Ve,"class","docstring"),c(We,"class","docstring"),c(no,"id","transformers.DistilBertForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.DistilBertForSequenceClassification"),c(fs,"class","relative group"),c($i,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Di,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(je,"class","docstring"),c(Re,"class","docstring"),c(ao,"id","transformers.DistilBertForMultipleChoice"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DistilBertForMultipleChoice"),c(gs,"class","relative group"),c(Fi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nn,"rel","nofollow"),c(yi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ke,"class","docstring"),c(He,"class","docstring"),c(lo,"id","transformers.DistilBertForTokenClassification"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DistilBertForTokenClassification"),c(vs,"class","relative group"),c(Bi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(Mi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(Ge,"class","docstring"),c(Qe,"class","docstring"),c(ho,"id","transformers.DistilBertForQuestionAnswering"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DistilBertForQuestionAnswering"),c(bs,"class","relative group"),c(Ei,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(er,"rel","nofollow"),c(xi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Xe,"class","docstring"),c(Ue,"class","docstring"),c(uo,"id","transformers.TFDistilBertModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFDistilBertModel"),c($s,"class","relative group"),c(zi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(Ci,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ye,"class","docstring"),c(Pe,"class","docstring"),c(go,"id","transformers.TFDistilBertForMaskedLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.TFDistilBertForMaskedLM"),c(Fs,"class","relative group"),c(ji,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(mr,"rel","nofollow"),c(Pi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ze,"class","docstring"),c(qe,"class","docstring"),c(To,"id","transformers.TFDistilBertForSequenceClassification"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDistilBertForSequenceClassification"),c(Bs,"class","relative group"),c(qi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wr,"rel","nofollow"),c(Ai,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(wo,"id","transformers.TFDistilBertForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDistilBertForMultipleChoice"),c(Es,"class","relative group"),c(Ii,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Er,"rel","nofollow"),c(Li,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(tt,"class","docstring"),c(Ie,"class","docstring"),c(Fo,"id","transformers.TFDistilBertForTokenClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDistilBertForTokenClassification"),c(zs,"class","relative group"),c(Si,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Ni,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(st,"class","docstring"),c(Le,"class","docstring"),c(Mo,"id","transformers.TFDistilBertForQuestionAnswering"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDistilBertForQuestionAnswering"),c(js,"class","relative group"),c(Oi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Wi,"href","/docs/transformers/v4.15.0/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(ot,"class","docstring"),c(Se,"class","docstring"),c(zo,"id","transformers.FlaxDistilBertModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxDistilBertModel"),c(As,"class","relative group"),c(Ri,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gr,"rel","nofollow"),c(Xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xr,"rel","nofollow"),c(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Yr,"rel","nofollow"),c(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zr,"rel","nofollow"),c(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ea,"rel","nofollow"),c(nt,"class","docstring"),c(Be,"class","docstring"),c(jo,"id","transformers.FlaxDistilBertForMaskedLM"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Ls,"class","relative group"),c(Hi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(la,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(da,"rel","nofollow"),c(ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ca,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ha,"rel","nofollow"),c(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(pa,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(qo,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Ns,"class","relative group"),c(Qi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ta,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ka,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(wa,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($a,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(Io,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ws,"class","relative group"),c(Ui,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(za,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ja,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Pa,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(So,"id","transformers.FlaxDistilBertForTokenClassification"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Hs,"class","relative group"),c(Ji,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Oa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ra,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ha,"rel","nofollow"),c(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qa,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Oo,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Us,"class","relative group"),c(Vi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ya,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ei,"rel","nofollow"),c(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ti,"rel","nofollow"),c(si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(si,"rel","nofollow"),c(dt,"class","docstring"),c(Ce,"class","docstring")},m(s,m){e(document.head,h),u(s,y,m),u(s,g,m),e(g,v),e(v,T),w(_,T,null),e(g,f),e(g,B),e(B,de),u(s,J,m),u(s,E,m),e(E,G),e(G,N),w(X,N,null),e(E,ce),e(E,O),e(O,he),u(s,re,m),u(s,L,m),e(L,q),e(L,Y),e(Y,V),e(L,x),e(L,z),e(z,pe),e(L,W),e(L,se),e(se,ue),e(L,R),u(s,ae,m),u(s,ee,m),e(ee,A),u(s,ie,m),u(s,S,m),e(S,oe),e(oe,fe),u(s,P,m),u(s,te,m),e(te,H),u(s,le,m),u(s,p,m),e(p,M),e(M,K),e(M,ge),e(ge,Te),e(M,I),e(M,_e),e(_e,be),e(M,ke),e(M,j),e(j,Q),e(M,we),e(p,$e),e(p,Z),e(Z,De),e(Z,ne),e(ne,Fe),e(Z,pu),u(s,uh,m),u(s,Tt,m),e(Tt,uu),e(Tt,Yo),e(Yo,fu),e(Tt,mu),e(Tt,Zo),e(Zo,gu),e(Tt,_u),e(Tt,en),e(en,vu),e(Tt,Tu),u(s,fh,m),u(s,as,m),e(as,Ks),e(Ks,_l),w(tn,_l,null),e(as,bu),e(as,vl),e(vl,ku),u(s,mh,m),u(s,Ne,m),w(sn,Ne,null),e(Ne,wu),e(Ne,yt),e(yt,$u),e(yt,di),e(di,Du),e(yt,Fu),e(yt,ci),e(ci,yu),e(yt,Bu),e(yt,on),e(on,Mu),e(yt,Eu),e(Ne,xu),e(Ne,is),e(is,zu),e(is,hi),e(hi,Cu),e(is,ju),e(is,pi),e(pi,Pu),e(is,qu),e(Ne,Au),e(Ne,Tl),e(Tl,Iu),e(Ne,Lu),w(nn,Ne,null),u(s,gh,m),u(s,ls,m),e(ls,Gs),e(Gs,bl),w(rn,bl,null),e(ls,Su),e(ls,kl),e(kl,Nu),u(s,_h,m),u(s,_t,m),w(an,_t,null),e(_t,Ou),e(_t,wl),e(wl,Wu),e(_t,Ru),e(_t,Xs),e(Xs,ui),e(ui,Hu),e(Xs,Qu),e(Xs,fi),e(fi,Uu),e(Xs,Ju),e(_t,Vu),e(_t,ln),e(ln,Ku),e(ln,mi),e(mi,Gu),e(ln,Xu),u(s,vh,m),u(s,ds,m),e(ds,Ys),e(Ys,$l),w(dn,$l,null),e(ds,Yu),e(ds,Dl),e(Dl,Zu),u(s,Th,m),u(s,vt,m),w(cn,vt,null),e(vt,ef),e(vt,hn),e(hn,tf),e(hn,Fl),e(Fl,sf),e(hn,of),e(vt,nf),e(vt,Zs),e(Zs,gi),e(gi,rf),e(Zs,af),e(Zs,_i),e(_i,lf),e(Zs,df),e(vt,cf),e(vt,pn),e(pn,hf),e(pn,vi),e(vi,pf),e(pn,uf),u(s,bh,m),u(s,cs,m),e(cs,eo),e(eo,yl),w(un,yl,null),e(cs,ff),e(cs,Bl),e(Bl,mf),u(s,kh,m),u(s,Oe,m),w(fn,Oe,null),e(Oe,gf),e(Oe,Ml),e(Ml,_f),e(Oe,vf),e(Oe,mn),e(mn,Tf),e(mn,Ti),e(Ti,bf),e(mn,kf),e(Oe,wf),e(Oe,gn),e(gn,$f),e(gn,_n),e(_n,Df),e(gn,Ff),e(Oe,yf),e(Oe,Je),w(vn,Je,null),e(Je,Bf),e(Je,hs),e(hs,Mf),e(hs,bi),e(bi,Ef),e(hs,xf),e(hs,El),e(El,zf),e(hs,Cf),e(Je,jf),w(to,Je,null),e(Je,Pf),e(Je,xl),e(xl,qf),e(Je,Af),w(Tn,Je,null),u(s,wh,m),u(s,ps,m),e(ps,so),e(so,zl),w(bn,zl,null),e(ps,If),e(ps,Cl),e(Cl,Lf),u(s,$h,m),u(s,We,m),w(kn,We,null),e(We,Sf),e(We,wn),e(wn,Nf),e(wn,jl),e(jl,Of),e(wn,Wf),e(We,Rf),e(We,$n),e($n,Hf),e($n,ki),e(ki,Qf),e($n,Uf),e(We,Jf),e(We,Dn),e(Dn,Vf),e(Dn,Fn),e(Fn,Kf),e(Dn,Gf),e(We,Xf),e(We,Ve),w(yn,Ve,null),e(Ve,Yf),e(Ve,us),e(us,Zf),e(us,wi),e(wi,em),e(us,tm),e(us,Pl),e(Pl,sm),e(us,om),e(Ve,nm),w(oo,Ve,null),e(Ve,rm),e(Ve,ql),e(ql,am),e(Ve,im),w(Bn,Ve,null),u(s,Dh,m),u(s,fs,m),e(fs,no),e(no,Al),w(Mn,Al,null),e(fs,lm),e(fs,Il),e(Il,dm),u(s,Fh,m),u(s,Re,m),w(En,Re,null),e(Re,cm),e(Re,Ll),e(Ll,hm),e(Re,pm),e(Re,xn),e(xn,um),e(xn,$i),e($i,fm),e(xn,mm),e(Re,gm),e(Re,zn),e(zn,_m),e(zn,Cn),e(Cn,vm),e(zn,Tm),e(Re,bm),e(Re,je),w(jn,je,null),e(je,km),e(je,ms),e(ms,wm),e(ms,Di),e(Di,$m),e(ms,Dm),e(ms,Sl),e(Sl,Fm),e(ms,ym),e(je,Bm),w(ro,je,null),e(je,Mm),e(je,Nl),e(Nl,Em),e(je,xm),w(Pn,je,null),e(je,zm),e(je,Ol),e(Ol,Cm),e(je,jm),w(qn,je,null),u(s,yh,m),u(s,gs,m),e(gs,ao),e(ao,Wl),w(An,Wl,null),e(gs,Pm),e(gs,Rl),e(Rl,qm),u(s,Bh,m),u(s,He,m),w(In,He,null),e(He,Am),e(He,Hl),e(Hl,Im),e(He,Lm),e(He,Ln),e(Ln,Sm),e(Ln,Fi),e(Fi,Nm),e(Ln,Om),e(He,Wm),e(He,Sn),e(Sn,Rm),e(Sn,Nn),e(Nn,Hm),e(Sn,Qm),e(He,Um),e(He,Ke),w(On,Ke,null),e(Ke,Jm),e(Ke,_s),e(_s,Vm),e(_s,yi),e(yi,Km),e(_s,Gm),e(_s,Ql),e(Ql,Xm),e(_s,Ym),e(Ke,Zm),w(io,Ke,null),e(Ke,eg),e(Ke,Ul),e(Ul,tg),e(Ke,sg),w(Wn,Ke,null),u(s,Mh,m),u(s,vs,m),e(vs,lo),e(lo,Jl),w(Rn,Jl,null),e(vs,og),e(vs,Vl),e(Vl,ng),u(s,Eh,m),u(s,Qe,m),w(Hn,Qe,null),e(Qe,rg),e(Qe,Kl),e(Kl,ag),e(Qe,ig),e(Qe,Qn),e(Qn,lg),e(Qn,Bi),e(Bi,dg),e(Qn,cg),e(Qe,hg),e(Qe,Un),e(Un,pg),e(Un,Jn),e(Jn,ug),e(Un,fg),e(Qe,mg),e(Qe,Ge),w(Vn,Ge,null),e(Ge,gg),e(Ge,Ts),e(Ts,_g),e(Ts,Mi),e(Mi,vg),e(Ts,Tg),e(Ts,Gl),e(Gl,bg),e(Ts,kg),e(Ge,wg),w(co,Ge,null),e(Ge,$g),e(Ge,Xl),e(Xl,Dg),e(Ge,Fg),w(Kn,Ge,null),u(s,xh,m),u(s,bs,m),e(bs,ho),e(ho,Yl),w(Gn,Yl,null),e(bs,yg),e(bs,Zl),e(Zl,Bg),u(s,zh,m),u(s,Ue,m),w(Xn,Ue,null),e(Ue,Mg),e(Ue,ks),e(ks,Eg),e(ks,ed),e(ed,xg),e(ks,zg),e(ks,td),e(td,Cg),e(ks,jg),e(Ue,Pg),e(Ue,Yn),e(Yn,qg),e(Yn,Ei),e(Ei,Ag),e(Yn,Ig),e(Ue,Lg),e(Ue,Zn),e(Zn,Sg),e(Zn,er),e(er,Ng),e(Zn,Og),e(Ue,Wg),e(Ue,Xe),w(tr,Xe,null),e(Xe,Rg),e(Xe,ws),e(ws,Hg),e(ws,xi),e(xi,Qg),e(ws,Ug),e(ws,sd),e(sd,Jg),e(ws,Vg),e(Xe,Kg),w(po,Xe,null),e(Xe,Gg),e(Xe,od),e(od,Xg),e(Xe,Yg),w(sr,Xe,null),u(s,Ch,m),u(s,$s,m),e($s,uo),e(uo,nd),w(or,nd,null),e($s,Zg),e($s,rd),e(rd,e_),u(s,jh,m),u(s,Pe,m),w(nr,Pe,null),e(Pe,t_),e(Pe,ad),e(ad,s_),e(Pe,o_),e(Pe,rr),e(rr,n_),e(rr,zi),e(zi,r_),e(rr,a_),e(Pe,i_),e(Pe,ar),e(ar,l_),e(ar,ir),e(ir,d_),e(ar,c_),e(Pe,h_),w(fo,Pe,null),e(Pe,p_),e(Pe,Ye),w(lr,Ye,null),e(Ye,u_),e(Ye,Ds),e(Ds,f_),e(Ds,Ci),e(Ci,m_),e(Ds,g_),e(Ds,id),e(id,__),e(Ds,v_),e(Ye,T_),w(mo,Ye,null),e(Ye,b_),e(Ye,ld),e(ld,k_),e(Ye,w_),w(dr,Ye,null),u(s,Ph,m),u(s,Fs,m),e(Fs,go),e(go,dd),w(cr,dd,null),e(Fs,$_),e(Fs,cd),e(cd,D_),u(s,qh,m),u(s,qe,m),w(hr,qe,null),e(qe,F_),e(qe,pr),e(pr,y_),e(pr,hd),e(hd,B_),e(pr,M_),e(qe,E_),e(qe,ur),e(ur,x_),e(ur,ji),e(ji,z_),e(ur,C_),e(qe,j_),e(qe,fr),e(fr,P_),e(fr,mr),e(mr,q_),e(fr,A_),e(qe,I_),w(_o,qe,null),e(qe,L_),e(qe,Ze),w(gr,Ze,null),e(Ze,S_),e(Ze,ys),e(ys,N_),e(ys,Pi),e(Pi,O_),e(ys,W_),e(ys,pd),e(pd,R_),e(ys,H_),e(Ze,Q_),w(vo,Ze,null),e(Ze,U_),e(Ze,ud),e(ud,J_),e(Ze,V_),w(_r,Ze,null),u(s,Ah,m),u(s,Bs,m),e(Bs,To),e(To,fd),w(vr,fd,null),e(Bs,K_),e(Bs,md),e(md,G_),u(s,Ih,m),u(s,Ae,m),w(Tr,Ae,null),e(Ae,X_),e(Ae,gd),e(gd,Y_),e(Ae,Z_),e(Ae,br),e(br,ev),e(br,qi),e(qi,tv),e(br,sv),e(Ae,ov),e(Ae,kr),e(kr,nv),e(kr,wr),e(wr,rv),e(kr,av),e(Ae,iv),w(bo,Ae,null),e(Ae,lv),e(Ae,et),w($r,et,null),e(et,dv),e(et,Ms),e(Ms,cv),e(Ms,Ai),e(Ai,hv),e(Ms,pv),e(Ms,_d),e(_d,uv),e(Ms,fv),e(et,mv),w(ko,et,null),e(et,gv),e(et,vd),e(vd,_v),e(et,vv),w(Dr,et,null),u(s,Lh,m),u(s,Es,m),e(Es,wo),e(wo,Td),w(Fr,Td,null),e(Es,Tv),e(Es,bd),e(bd,bv),u(s,Sh,m),u(s,Ie,m),w(yr,Ie,null),e(Ie,kv),e(Ie,kd),e(kd,wv),e(Ie,$v),e(Ie,Br),e(Br,Dv),e(Br,Ii),e(Ii,Fv),e(Br,yv),e(Ie,Bv),e(Ie,Mr),e(Mr,Mv),e(Mr,Er),e(Er,Ev),e(Mr,xv),e(Ie,zv),w($o,Ie,null),e(Ie,Cv),e(Ie,tt),w(xr,tt,null),e(tt,jv),e(tt,xs),e(xs,Pv),e(xs,Li),e(Li,qv),e(xs,Av),e(xs,wd),e(wd,Iv),e(xs,Lv),e(tt,Sv),w(Do,tt,null),e(tt,Nv),e(tt,$d),e($d,Ov),e(tt,Wv),w(zr,tt,null),u(s,Nh,m),u(s,zs,m),e(zs,Fo),e(Fo,Dd),w(Cr,Dd,null),e(zs,Rv),e(zs,Fd),e(Fd,Hv),u(s,Oh,m),u(s,Le,m),w(jr,Le,null),e(Le,Qv),e(Le,yd),e(yd,Uv),e(Le,Jv),e(Le,Pr),e(Pr,Vv),e(Pr,Si),e(Si,Kv),e(Pr,Gv),e(Le,Xv),e(Le,qr),e(qr,Yv),e(qr,Ar),e(Ar,Zv),e(qr,eT),e(Le,tT),w(yo,Le,null),e(Le,sT),e(Le,st),w(Ir,st,null),e(st,oT),e(st,Cs),e(Cs,nT),e(Cs,Ni),e(Ni,rT),e(Cs,aT),e(Cs,Bd),e(Bd,iT),e(Cs,lT),e(st,dT),w(Bo,st,null),e(st,cT),e(st,Md),e(Md,hT),e(st,pT),w(Lr,st,null),u(s,Wh,m),u(s,js,m),e(js,Mo),e(Mo,Ed),w(Sr,Ed,null),e(js,uT),e(js,xd),e(xd,fT),u(s,Rh,m),u(s,Se,m),w(Nr,Se,null),e(Se,mT),e(Se,Ps),e(Ps,gT),e(Ps,zd),e(zd,_T),e(Ps,vT),e(Ps,Cd),e(Cd,TT),e(Ps,bT),e(Se,kT),e(Se,Or),e(Or,wT),e(Or,Oi),e(Oi,$T),e(Or,DT),e(Se,FT),e(Se,Wr),e(Wr,yT),e(Wr,Rr),e(Rr,BT),e(Wr,MT),e(Se,ET),w(Eo,Se,null),e(Se,xT),e(Se,ot),w(Hr,ot,null),e(ot,zT),e(ot,qs),e(qs,CT),e(qs,Wi),e(Wi,jT),e(qs,PT),e(qs,jd),e(jd,qT),e(qs,AT),e(ot,IT),w(xo,ot,null),e(ot,LT),e(ot,Pd),e(Pd,ST),e(ot,NT),w(Qr,ot,null),u(s,Hh,m),u(s,As,m),e(As,zo),e(zo,qd),w(Ur,qd,null),e(As,OT),e(As,Ad),e(Ad,WT),u(s,Qh,m),u(s,Be,m),w(Jr,Be,null),e(Be,RT),e(Be,Id),e(Id,HT),e(Be,QT),e(Be,Vr),e(Vr,UT),e(Vr,Ri),e(Ri,JT),e(Vr,VT),e(Be,KT),e(Be,Kr),e(Kr,GT),e(Kr,Gr),e(Gr,XT),e(Kr,YT),e(Be,ZT),e(Be,Ld),e(Ld,eb),e(Be,tb),e(Be,Bt),e(Bt,Sd),e(Sd,Xr),e(Xr,sb),e(Bt,ob),e(Bt,Nd),e(Nd,Yr),e(Yr,nb),e(Bt,rb),e(Bt,Od),e(Od,Zr),e(Zr,ab),e(Bt,ib),e(Bt,Wd),e(Wd,ea),e(ea,lb),e(Be,db),e(Be,nt),w(ta,nt,null),e(nt,cb),e(nt,Is),e(Is,hb),e(Is,Rd),e(Rd,pb),e(Is,ub),e(Is,Hd),e(Hd,fb),e(Is,mb),e(nt,gb),w(Co,nt,null),e(nt,_b),e(nt,Qd),e(Qd,vb),e(nt,Tb),w(sa,nt,null),u(s,Uh,m),u(s,Ls,m),e(Ls,jo),e(jo,Ud),w(oa,Ud,null),e(Ls,bb),e(Ls,Jd),e(Jd,kb),u(s,Jh,m),u(s,Me,m),w(na,Me,null),e(Me,wb),e(Me,ra),e(ra,$b),e(ra,Vd),e(Vd,Db),e(ra,Fb),e(Me,yb),e(Me,aa),e(aa,Bb),e(aa,Hi),e(Hi,Mb),e(aa,Eb),e(Me,xb),e(Me,ia),e(ia,zb),e(ia,la),e(la,Cb),e(ia,jb),e(Me,Pb),e(Me,Kd),e(Kd,qb),e(Me,Ab),e(Me,Mt),e(Mt,Gd),e(Gd,da),e(da,Ib),e(Mt,Lb),e(Mt,Xd),e(Xd,ca),e(ca,Sb),e(Mt,Nb),e(Mt,Yd),e(Yd,ha),e(ha,Ob),e(Mt,Wb),e(Mt,Zd),e(Zd,pa),e(pa,Rb),e(Me,Hb),e(Me,rt),w(ua,rt,null),e(rt,Qb),e(rt,Ss),e(Ss,Ub),e(Ss,ec),e(ec,Jb),e(Ss,Vb),e(Ss,tc),e(tc,Kb),e(Ss,Gb),e(rt,Xb),w(Po,rt,null),e(rt,Yb),e(rt,sc),e(sc,Zb),e(rt,e1),w(fa,rt,null),u(s,Vh,m),u(s,Ns,m),e(Ns,qo),e(qo,oc),w(ma,oc,null),e(Ns,t1),e(Ns,nc),e(nc,s1),u(s,Kh,m),u(s,Ee,m),w(ga,Ee,null),e(Ee,o1),e(Ee,rc),e(rc,n1),e(Ee,r1),e(Ee,_a),e(_a,a1),e(_a,Qi),e(Qi,i1),e(_a,l1),e(Ee,d1),e(Ee,va),e(va,c1),e(va,Ta),e(Ta,h1),e(va,p1),e(Ee,u1),e(Ee,ac),e(ac,f1),e(Ee,m1),e(Ee,Et),e(Et,ic),e(ic,ba),e(ba,g1),e(Et,_1),e(Et,lc),e(lc,ka),e(ka,v1),e(Et,T1),e(Et,dc),e(dc,wa),e(wa,b1),e(Et,k1),e(Et,cc),e(cc,$a),e($a,w1),e(Ee,$1),e(Ee,at),w(Da,at,null),e(at,D1),e(at,Os),e(Os,F1),e(Os,hc),e(hc,y1),e(Os,B1),e(Os,pc),e(pc,M1),e(Os,E1),e(at,x1),w(Ao,at,null),e(at,z1),e(at,uc),e(uc,C1),e(at,j1),w(Fa,at,null),u(s,Gh,m),u(s,Ws,m),e(Ws,Io),e(Io,fc),w(ya,fc,null),e(Ws,P1),e(Ws,mc),e(mc,q1),u(s,Xh,m),u(s,xe,m),w(Ba,xe,null),e(xe,A1),e(xe,gc),e(gc,I1),e(xe,L1),e(xe,Ma),e(Ma,S1),e(Ma,Ui),e(Ui,N1),e(Ma,O1),e(xe,W1),e(xe,Ea),e(Ea,R1),e(Ea,xa),e(xa,H1),e(Ea,Q1),e(xe,U1),e(xe,_c),e(_c,J1),e(xe,V1),e(xe,xt),e(xt,vc),e(vc,za),e(za,K1),e(xt,G1),e(xt,Tc),e(Tc,Ca),e(Ca,X1),e(xt,Y1),e(xt,bc),e(bc,ja),e(ja,Z1),e(xt,ek),e(xt,kc),e(kc,Pa),e(Pa,tk),e(xe,sk),e(xe,it),w(qa,it,null),e(it,ok),e(it,Rs),e(Rs,nk),e(Rs,wc),e(wc,rk),e(Rs,ak),e(Rs,$c),e($c,ik),e(Rs,lk),e(it,dk),w(Lo,it,null),e(it,ck),e(it,Dc),e(Dc,hk),e(it,pk),w(Aa,it,null),u(s,Yh,m),u(s,Hs,m),e(Hs,So),e(So,Fc),w(Ia,Fc,null),e(Hs,uk),e(Hs,yc),e(yc,fk),u(s,Zh,m),u(s,ze,m),w(La,ze,null),e(ze,mk),e(ze,Bc),e(Bc,gk),e(ze,_k),e(ze,Sa),e(Sa,vk),e(Sa,Ji),e(Ji,Tk),e(Sa,bk),e(ze,kk),e(ze,Na),e(Na,wk),e(Na,Oa),e(Oa,$k),e(Na,Dk),e(ze,Fk),e(ze,Mc),e(Mc,yk),e(ze,Bk),e(ze,zt),e(zt,Ec),e(Ec,Wa),e(Wa,Mk),e(zt,Ek),e(zt,xc),e(xc,Ra),e(Ra,xk),e(zt,zk),e(zt,zc),e(zc,Ha),e(Ha,Ck),e(zt,jk),e(zt,Cc),e(Cc,Qa),e(Qa,Pk),e(ze,qk),e(ze,lt),w(Ua,lt,null),e(lt,Ak),e(lt,Qs),e(Qs,Ik),e(Qs,jc),e(jc,Lk),e(Qs,Sk),e(Qs,Pc),e(Pc,Nk),e(Qs,Ok),e(lt,Wk),w(No,lt,null),e(lt,Rk),e(lt,qc),e(qc,Hk),e(lt,Qk),w(Ja,lt,null),u(s,ep,m),u(s,Us,m),e(Us,Oo),e(Oo,Ac),w(Va,Ac,null),e(Us,Uk),e(Us,Ic),e(Ic,Jk),u(s,tp,m),u(s,Ce,m),w(Ka,Ce,null),e(Ce,Vk),e(Ce,Js),e(Js,Kk),e(Js,Lc),e(Lc,Gk),e(Js,Xk),e(Js,Sc),e(Sc,Yk),e(Js,Zk),e(Ce,ew),e(Ce,Ga),e(Ga,tw),e(Ga,Vi),e(Vi,sw),e(Ga,ow),e(Ce,nw),e(Ce,Xa),e(Xa,rw),e(Xa,Ya),e(Ya,aw),e(Xa,iw),e(Ce,lw),e(Ce,Nc),e(Nc,dw),e(Ce,cw),e(Ce,Ct),e(Ct,Oc),e(Oc,Za),e(Za,hw),e(Ct,pw),e(Ct,Wc),e(Wc,ei),e(ei,uw),e(Ct,fw),e(Ct,Rc),e(Rc,ti),e(ti,mw),e(Ct,gw),e(Ct,Hc),e(Hc,si),e(si,_w),e(Ce,vw),e(Ce,dt),w(oi,dt,null),e(dt,Tw),e(dt,Vs),e(Vs,bw),e(Vs,Qc),e(Qc,kw),e(Vs,ww),e(Vs,Uc),e(Uc,$w),e(Vs,Dw),e(dt,Fw),w(Wo,dt,null),e(dt,yw),e(dt,Jc),e(Jc,Bw),e(dt,Mw),w(ni,dt,null),sp=!0},p(s,[m]){const ri={};m&2&&(ri.$$scope={dirty:m,ctx:s}),to.$set(ri);const Vc={};m&2&&(Vc.$$scope={dirty:m,ctx:s}),oo.$set(Vc);const Kc={};m&2&&(Kc.$$scope={dirty:m,ctx:s}),ro.$set(Kc);const Gc={};m&2&&(Gc.$$scope={dirty:m,ctx:s}),io.$set(Gc);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:s}),co.$set(ai);const Xc={};m&2&&(Xc.$$scope={dirty:m,ctx:s}),po.$set(Xc);const Yc={};m&2&&(Yc.$$scope={dirty:m,ctx:s}),fo.$set(Yc);const Zc={};m&2&&(Zc.$$scope={dirty:m,ctx:s}),mo.$set(Zc);const jt={};m&2&&(jt.$$scope={dirty:m,ctx:s}),_o.$set(jt);const eh={};m&2&&(eh.$$scope={dirty:m,ctx:s}),vo.$set(eh);const th={};m&2&&(th.$$scope={dirty:m,ctx:s}),bo.$set(th);const sh={};m&2&&(sh.$$scope={dirty:m,ctx:s}),ko.$set(sh);const oh={};m&2&&(oh.$$scope={dirty:m,ctx:s}),$o.$set(oh);const nh={};m&2&&(nh.$$scope={dirty:m,ctx:s}),Do.$set(nh);const rh={};m&2&&(rh.$$scope={dirty:m,ctx:s}),yo.$set(rh);const ah={};m&2&&(ah.$$scope={dirty:m,ctx:s}),Bo.$set(ah);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:s}),Eo.$set(ii);const Pt={};m&2&&(Pt.$$scope={dirty:m,ctx:s}),xo.$set(Pt);const ih={};m&2&&(ih.$$scope={dirty:m,ctx:s}),Co.$set(ih);const lh={};m&2&&(lh.$$scope={dirty:m,ctx:s}),Po.$set(lh);const dh={};m&2&&(dh.$$scope={dirty:m,ctx:s}),Ao.$set(dh);const li={};m&2&&(li.$$scope={dirty:m,ctx:s}),Lo.$set(li);const ch={};m&2&&(ch.$$scope={dirty:m,ctx:s}),No.$set(ch);const qt={};m&2&&(qt.$$scope={dirty:m,ctx:s}),Wo.$set(qt)},i(s){sp||($(_.$$.fragment,s),$(X.$$.fragment,s),$(tn.$$.fragment,s),$(sn.$$.fragment,s),$(nn.$$.fragment,s),$(rn.$$.fragment,s),$(an.$$.fragment,s),$(dn.$$.fragment,s),$(cn.$$.fragment,s),$(un.$$.fragment,s),$(fn.$$.fragment,s),$(vn.$$.fragment,s),$(to.$$.fragment,s),$(Tn.$$.fragment,s),$(bn.$$.fragment,s),$(kn.$$.fragment,s),$(yn.$$.fragment,s),$(oo.$$.fragment,s),$(Bn.$$.fragment,s),$(Mn.$$.fragment,s),$(En.$$.fragment,s),$(jn.$$.fragment,s),$(ro.$$.fragment,s),$(Pn.$$.fragment,s),$(qn.$$.fragment,s),$(An.$$.fragment,s),$(In.$$.fragment,s),$(On.$$.fragment,s),$(io.$$.fragment,s),$(Wn.$$.fragment,s),$(Rn.$$.fragment,s),$(Hn.$$.fragment,s),$(Vn.$$.fragment,s),$(co.$$.fragment,s),$(Kn.$$.fragment,s),$(Gn.$$.fragment,s),$(Xn.$$.fragment,s),$(tr.$$.fragment,s),$(po.$$.fragment,s),$(sr.$$.fragment,s),$(or.$$.fragment,s),$(nr.$$.fragment,s),$(fo.$$.fragment,s),$(lr.$$.fragment,s),$(mo.$$.fragment,s),$(dr.$$.fragment,s),$(cr.$$.fragment,s),$(hr.$$.fragment,s),$(_o.$$.fragment,s),$(gr.$$.fragment,s),$(vo.$$.fragment,s),$(_r.$$.fragment,s),$(vr.$$.fragment,s),$(Tr.$$.fragment,s),$(bo.$$.fragment,s),$($r.$$.fragment,s),$(ko.$$.fragment,s),$(Dr.$$.fragment,s),$(Fr.$$.fragment,s),$(yr.$$.fragment,s),$($o.$$.fragment,s),$(xr.$$.fragment,s),$(Do.$$.fragment,s),$(zr.$$.fragment,s),$(Cr.$$.fragment,s),$(jr.$$.fragment,s),$(yo.$$.fragment,s),$(Ir.$$.fragment,s),$(Bo.$$.fragment,s),$(Lr.$$.fragment,s),$(Sr.$$.fragment,s),$(Nr.$$.fragment,s),$(Eo.$$.fragment,s),$(Hr.$$.fragment,s),$(xo.$$.fragment,s),$(Qr.$$.fragment,s),$(Ur.$$.fragment,s),$(Jr.$$.fragment,s),$(ta.$$.fragment,s),$(Co.$$.fragment,s),$(sa.$$.fragment,s),$(oa.$$.fragment,s),$(na.$$.fragment,s),$(ua.$$.fragment,s),$(Po.$$.fragment,s),$(fa.$$.fragment,s),$(ma.$$.fragment,s),$(ga.$$.fragment,s),$(Da.$$.fragment,s),$(Ao.$$.fragment,s),$(Fa.$$.fragment,s),$(ya.$$.fragment,s),$(Ba.$$.fragment,s),$(qa.$$.fragment,s),$(Lo.$$.fragment,s),$(Aa.$$.fragment,s),$(Ia.$$.fragment,s),$(La.$$.fragment,s),$(Ua.$$.fragment,s),$(No.$$.fragment,s),$(Ja.$$.fragment,s),$(Va.$$.fragment,s),$(Ka.$$.fragment,s),$(oi.$$.fragment,s),$(Wo.$$.fragment,s),$(ni.$$.fragment,s),sp=!0)},o(s){D(_.$$.fragment,s),D(X.$$.fragment,s),D(tn.$$.fragment,s),D(sn.$$.fragment,s),D(nn.$$.fragment,s),D(rn.$$.fragment,s),D(an.$$.fragment,s),D(dn.$$.fragment,s),D(cn.$$.fragment,s),D(un.$$.fragment,s),D(fn.$$.fragment,s),D(vn.$$.fragment,s),D(to.$$.fragment,s),D(Tn.$$.fragment,s),D(bn.$$.fragment,s),D(kn.$$.fragment,s),D(yn.$$.fragment,s),D(oo.$$.fragment,s),D(Bn.$$.fragment,s),D(Mn.$$.fragment,s),D(En.$$.fragment,s),D(jn.$$.fragment,s),D(ro.$$.fragment,s),D(Pn.$$.fragment,s),D(qn.$$.fragment,s),D(An.$$.fragment,s),D(In.$$.fragment,s),D(On.$$.fragment,s),D(io.$$.fragment,s),D(Wn.$$.fragment,s),D(Rn.$$.fragment,s),D(Hn.$$.fragment,s),D(Vn.$$.fragment,s),D(co.$$.fragment,s),D(Kn.$$.fragment,s),D(Gn.$$.fragment,s),D(Xn.$$.fragment,s),D(tr.$$.fragment,s),D(po.$$.fragment,s),D(sr.$$.fragment,s),D(or.$$.fragment,s),D(nr.$$.fragment,s),D(fo.$$.fragment,s),D(lr.$$.fragment,s),D(mo.$$.fragment,s),D(dr.$$.fragment,s),D(cr.$$.fragment,s),D(hr.$$.fragment,s),D(_o.$$.fragment,s),D(gr.$$.fragment,s),D(vo.$$.fragment,s),D(_r.$$.fragment,s),D(vr.$$.fragment,s),D(Tr.$$.fragment,s),D(bo.$$.fragment,s),D($r.$$.fragment,s),D(ko.$$.fragment,s),D(Dr.$$.fragment,s),D(Fr.$$.fragment,s),D(yr.$$.fragment,s),D($o.$$.fragment,s),D(xr.$$.fragment,s),D(Do.$$.fragment,s),D(zr.$$.fragment,s),D(Cr.$$.fragment,s),D(jr.$$.fragment,s),D(yo.$$.fragment,s),D(Ir.$$.fragment,s),D(Bo.$$.fragment,s),D(Lr.$$.fragment,s),D(Sr.$$.fragment,s),D(Nr.$$.fragment,s),D(Eo.$$.fragment,s),D(Hr.$$.fragment,s),D(xo.$$.fragment,s),D(Qr.$$.fragment,s),D(Ur.$$.fragment,s),D(Jr.$$.fragment,s),D(ta.$$.fragment,s),D(Co.$$.fragment,s),D(sa.$$.fragment,s),D(oa.$$.fragment,s),D(na.$$.fragment,s),D(ua.$$.fragment,s),D(Po.$$.fragment,s),D(fa.$$.fragment,s),D(ma.$$.fragment,s),D(ga.$$.fragment,s),D(Da.$$.fragment,s),D(Ao.$$.fragment,s),D(Fa.$$.fragment,s),D(ya.$$.fragment,s),D(Ba.$$.fragment,s),D(qa.$$.fragment,s),D(Lo.$$.fragment,s),D(Aa.$$.fragment,s),D(Ia.$$.fragment,s),D(La.$$.fragment,s),D(Ua.$$.fragment,s),D(No.$$.fragment,s),D(Ja.$$.fragment,s),D(Va.$$.fragment,s),D(Ka.$$.fragment,s),D(oi.$$.fragment,s),D(Wo.$$.fragment,s),D(ni.$$.fragment,s),sp=!1},d(s){t(h),s&&t(y),s&&t(g),F(_),s&&t(J),s&&t(E),F(X),s&&t(re),s&&t(L),s&&t(ae),s&&t(ee),s&&t(ie),s&&t(S),s&&t(P),s&&t(te),s&&t(le),s&&t(p),s&&t(uh),s&&t(Tt),s&&t(fh),s&&t(as),F(tn),s&&t(mh),s&&t(Ne),F(sn),F(nn),s&&t(gh),s&&t(ls),F(rn),s&&t(_h),s&&t(_t),F(an),s&&t(vh),s&&t(ds),F(dn),s&&t(Th),s&&t(vt),F(cn),s&&t(bh),s&&t(cs),F(un),s&&t(kh),s&&t(Oe),F(fn),F(vn),F(to),F(Tn),s&&t(wh),s&&t(ps),F(bn),s&&t($h),s&&t(We),F(kn),F(yn),F(oo),F(Bn),s&&t(Dh),s&&t(fs),F(Mn),s&&t(Fh),s&&t(Re),F(En),F(jn),F(ro),F(Pn),F(qn),s&&t(yh),s&&t(gs),F(An),s&&t(Bh),s&&t(He),F(In),F(On),F(io),F(Wn),s&&t(Mh),s&&t(vs),F(Rn),s&&t(Eh),s&&t(Qe),F(Hn),F(Vn),F(co),F(Kn),s&&t(xh),s&&t(bs),F(Gn),s&&t(zh),s&&t(Ue),F(Xn),F(tr),F(po),F(sr),s&&t(Ch),s&&t($s),F(or),s&&t(jh),s&&t(Pe),F(nr),F(fo),F(lr),F(mo),F(dr),s&&t(Ph),s&&t(Fs),F(cr),s&&t(qh),s&&t(qe),F(hr),F(_o),F(gr),F(vo),F(_r),s&&t(Ah),s&&t(Bs),F(vr),s&&t(Ih),s&&t(Ae),F(Tr),F(bo),F($r),F(ko),F(Dr),s&&t(Lh),s&&t(Es),F(Fr),s&&t(Sh),s&&t(Ie),F(yr),F($o),F(xr),F(Do),F(zr),s&&t(Nh),s&&t(zs),F(Cr),s&&t(Oh),s&&t(Le),F(jr),F(yo),F(Ir),F(Bo),F(Lr),s&&t(Wh),s&&t(js),F(Sr),s&&t(Rh),s&&t(Se),F(Nr),F(Eo),F(Hr),F(xo),F(Qr),s&&t(Hh),s&&t(As),F(Ur),s&&t(Qh),s&&t(Be),F(Jr),F(ta),F(Co),F(sa),s&&t(Uh),s&&t(Ls),F(oa),s&&t(Jh),s&&t(Me),F(na),F(ua),F(Po),F(fa),s&&t(Vh),s&&t(Ns),F(ma),s&&t(Kh),s&&t(Ee),F(ga),F(Da),F(Ao),F(Fa),s&&t(Gh),s&&t(Ws),F(ya),s&&t(Xh),s&&t(xe),F(Ba),F(qa),F(Lo),F(Aa),s&&t(Yh),s&&t(Hs),F(Ia),s&&t(Zh),s&&t(ze),F(La),F(Ua),F(No),F(Ja),s&&t(ep),s&&t(Us),F(Va),s&&t(tp),s&&t(Ce),F(Ka),F(oi),F(Wo),F(ni)}}}const PF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function qF(C,h,y){let{fw:g}=h;return C.$$set=v=>{"fw"in v&&y(0,g=v.fw)},[g]}class WF extends rF{constructor(h){super();aF(this,h,qF,jF,iF,{fw:0})}}export{WF as default,PF as metadata};
