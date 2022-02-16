import{S as u_,i as g_,s as __,e as r,k as l,w as T,t as n,L as b_,c as a,d as t,m as d,a as i,x as k,h as s,b as c,J as e,g as f,y as w,q as y,o as D,B as E}from"../../../chunks/vendor-e859c359.js";import{T as Ce}from"../../../chunks/Tip-edc75249.js";import{D as X}from"../../../chunks/Docstring-ade913b3.js";import{C as it}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as Re}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function v_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function T_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r("code"),g=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function k_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function w_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function y_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function D_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function E_(L){let h,$,u,g,v,b,_,V,de,K,z,Y,I,ee,ce,S,pe,ae,O,P,te,Z,M,x,ne,W,ie,se,H,le,re,q,he,j,fe,me,N,J,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=r("ul"),x=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),J=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),K=d(p),z=a(p,"P",{});var C=i(z);Y=s(C,"This second option is useful when using "),I=a(C,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),S=a(C,"CODE",{});var Te=i(S);pe=s(Te,"model(inputs)"),Te.forEach(t),ae=s(C,"."),C.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),De.forEach(t),Z=d(p),M=a(p,"UL",{});var B=i(M);x=a(B,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),q=a(B,"LI",{});var Q=i(q);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var ke=i(N);J=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,K,F),f(p,z,F),e(z,Y),e(z,I),e(I,ee),e(z,ce),e(z,S),e(S,pe),e(z,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,M,F),e(M,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(M,re),e(M,q),e(q,he),e(q,j),e(j,fe),e(q,me),e(q,N),e(N,J),e(M,ue),e(M,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(K),p&&t(z),p&&t(O),p&&t(P),p&&t(Z),p&&t(M)}}}function $_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function F_(L){let h,$,u,g,v,b,_,V,de,K,z,Y,I,ee,ce,S,pe,ae,O,P,te,Z,M,x,ne,W,ie,se,H,le,re,q,he,j,fe,me,N,J,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=r("ul"),x=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),J=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),K=d(p),z=a(p,"P",{});var C=i(z);Y=s(C,"This second option is useful when using "),I=a(C,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),S=a(C,"CODE",{});var Te=i(S);pe=s(Te,"model(inputs)"),Te.forEach(t),ae=s(C,"."),C.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),De.forEach(t),Z=d(p),M=a(p,"UL",{});var B=i(M);x=a(B,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),q=a(B,"LI",{});var Q=i(q);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var ke=i(N);J=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,K,F),f(p,z,F),e(z,Y),e(z,I),e(I,ee),e(z,ce),e(z,S),e(S,pe),e(z,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,M,F),e(M,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(M,re),e(M,q),e(q,he),e(q,j),e(j,fe),e(q,me),e(q,N),e(N,J),e(M,ue),e(M,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(K),p&&t(z),p&&t(O),p&&t(P),p&&t(Z),p&&t(M)}}}function V_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function z_(L){let h,$,u,g,v,b,_,V,de,K,z,Y,I,ee,ce,S,pe,ae,O,P,te,Z,M,x,ne,W,ie,se,H,le,re,q,he,j,fe,me,N,J,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=r("ul"),x=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),J=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),K=d(p),z=a(p,"P",{});var C=i(z);Y=s(C,"This second option is useful when using "),I=a(C,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),S=a(C,"CODE",{});var Te=i(S);pe=s(Te,"model(inputs)"),Te.forEach(t),ae=s(C,"."),C.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),De.forEach(t),Z=d(p),M=a(p,"UL",{});var B=i(M);x=a(B,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),q=a(B,"LI",{});var Q=i(q);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var ke=i(N);J=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,K,F),f(p,z,F),e(z,Y),e(z,I),e(I,ee),e(z,ce),e(z,S),e(S,pe),e(z,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,M,F),e(M,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(M,re),e(M,q),e(q,he),e(q,j),e(j,fe),e(q,me),e(q,N),e(N,J),e(M,ue),e(M,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(K),p&&t(z),p&&t(O),p&&t(P),p&&t(Z),p&&t(M)}}}function M_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function q_(L){let h,$,u,g,v,b,_,V,de,K,z,Y,I,ee,ce,S,pe,ae,O,P,te,Z,M,x,ne,W,ie,se,H,le,re,q,he,j,fe,me,N,J,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=r("ul"),x=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),J=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),K=d(p),z=a(p,"P",{});var C=i(z);Y=s(C,"This second option is useful when using "),I=a(C,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),S=a(C,"CODE",{});var Te=i(S);pe=s(Te,"model(inputs)"),Te.forEach(t),ae=s(C,"."),C.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),De.forEach(t),Z=d(p),M=a(p,"UL",{});var B=i(M);x=a(B,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),q=a(B,"LI",{});var Q=i(q);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var ke=i(N);J=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,K,F),f(p,z,F),e(z,Y),e(z,I),e(I,ee),e(z,ce),e(z,S),e(S,pe),e(z,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,M,F),e(M,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(M,re),e(M,q),e(q,he),e(q,j),e(j,fe),e(q,me),e(q,N),e(N,J),e(M,ue),e(M,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(K),p&&t(z),p&&t(O),p&&t(P),p&&t(Z),p&&t(M)}}}function x_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function C_(L){let h,$,u,g,v,b,_,V,de,K,z,Y,I,ee,ce,S,pe,ae,O,P,te,Z,M,x,ne,W,ie,se,H,le,re,q,he,j,fe,me,N,J,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=r("ul"),x=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),J=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),K=d(p),z=a(p,"P",{});var C=i(z);Y=s(C,"This second option is useful when using "),I=a(C,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),S=a(C,"CODE",{});var Te=i(S);pe=s(Te,"model(inputs)"),Te.forEach(t),ae=s(C,"."),C.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),De.forEach(t),Z=d(p),M=a(p,"UL",{});var B=i(M);x=a(B,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),q=a(B,"LI",{});var Q=i(q);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var ke=i(N);J=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,K,F),f(p,z,F),e(z,Y),e(z,I),e(I,ee),e(z,ce),e(z,S),e(S,pe),e(z,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,M,F),e(M,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(M,re),e(M,q),e(q,he),e(q,j),e(j,fe),e(q,me),e(q,N),e(N,J),e(M,ue),e(M,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(K),p&&t(z),p&&t(O),p&&t(P),p&&t(Z),p&&t(M)}}}function R_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=r("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function P_(L){let h,$,u,g,v,b,_,V,de,K,z,Y,I,ee,ce,S,pe,ae,O,P,te,Z,M,x,ne,W,ie,se,H,le,re,q,he,j,fe,me,N,J,ue,R,ge,U,oe,p,F,G,ye,we,C,_e,Te,De,B,A,Ee,$e,Q,ve,ke,be,Fe,Dl,Os,Fr,El,$l,Fl,Ws,Vr,Vl,zl,Ml,Hs,zr,ql,xl,hi,Ze,Cl,Ho,Rl,Pl,Uo,Bl,jl,Qo,Al,Ll,fi,Vt,ao,Mr,Go,Il,qr,Sl,mi,lt,Ko,Nl,zt,Ol,Us,Wl,Hl,Jo,Ul,Ql,Gl,Mt,Kl,Qs,Jl,Xl,Gs,Yl,Zl,ui,qt,io,xr,Xo,ed,Cr,td,gi,ze,Yo,od,Zo,nd,en,sd,rd,ad,pt,tn,id,Rr,ld,dd,on,Pr,cd,pd,Br,hd,fd,lo,nn,md,xt,ud,jr,gd,_d,Ar,bd,vd,Td,et,sn,kd,Lr,wd,yd,rn,Dd,Ct,Ed,Ir,$d,Fd,Sr,Vd,zd,Md,Nr,_i,Rt,co,Or,an,qd,Wr,xd,bi,Je,ln,Cd,dn,Rd,cn,Pd,Bd,jd,pn,Ad,hn,Ld,Id,Sd,Ie,fn,Nd,Pt,Od,Ks,Wd,Hd,Hr,Ud,Qd,Gd,po,Kd,Ur,Jd,Xd,mn,vi,Bt,ho,Qr,un,Yd,Gr,Zd,Ti,dt,gn,ec,Kr,tc,oc,tt,_n,nc,Jr,sc,rc,Xr,ac,ic,fo,ki,jt,mo,Yr,bn,lc,Zr,dc,wi,Xe,vn,cc,At,pc,ea,hc,fc,Tn,mc,uc,gc,kn,_c,wn,bc,vc,Tc,Se,yn,kc,Lt,wc,Js,yc,Dc,ta,Ec,$c,Fc,uo,Vc,oa,zc,Mc,Dn,yi,It,go,na,En,qc,sa,xc,Di,Pe,$n,Cc,ra,Rc,Pc,Fn,Bc,Vn,jc,Ac,Lc,zn,Ic,Mn,Sc,Nc,Oc,Ve,qn,Wc,St,Hc,Xs,Uc,Qc,aa,Gc,Kc,Jc,_o,Xc,ia,Yc,Zc,xn,ep,la,tp,op,Cn,Ei,Nt,bo,da,Rn,np,ca,sp,$i,Be,Pn,rp,pa,ap,ip,Bn,lp,jn,dp,cp,pp,An,hp,Ln,fp,mp,up,Ne,In,gp,Ot,_p,Ys,bp,vp,ha,Tp,kp,wp,vo,yp,fa,Dp,Ep,Sn,Fi,Wt,To,ma,Nn,$p,ua,Fp,Vi,je,On,Vp,Ht,zp,ga,Mp,qp,_a,xp,Cp,Rp,Wn,Pp,Hn,Bp,jp,Ap,Un,Lp,Qn,Ip,Sp,Np,Oe,Gn,Op,Ut,Wp,Zs,Hp,Up,ba,Qp,Gp,Kp,ko,Jp,va,Xp,Yp,Kn,zi,Qt,wo,Ta,Jn,Zp,ka,eh,Mi,Ae,Xn,th,Yn,oh,Zn,nh,sh,rh,es,ah,ts,ih,lh,dh,yo,ch,We,os,ph,Gt,hh,er,fh,mh,wa,uh,gh,_h,Do,bh,ya,vh,Th,ns,qi,Kt,Eo,Da,ss,kh,Ea,wh,xi,ct,rs,yh,$a,Dh,Eh,ot,as,$h,Fa,Fh,Vh,is,zh,Va,Mh,qh,xh,Ye,Ch,za,Rh,Ph,Ma,Bh,jh,qa,Ah,Lh,xa,Ih,Sh,Ci,Jt,$o,Ca,ls,Nh,Ra,Oh,Ri,Le,ds,Wh,Xt,Hh,Pa,Uh,Qh,cs,Gh,Kh,Jh,ps,Xh,hs,Yh,Zh,ef,Fo,tf,He,fs,of,Yt,nf,tr,sf,rf,Ba,af,lf,df,Vo,cf,ja,pf,hf,ms,Pi,Zt,zo,Aa,us,ff,La,mf,Bi,Me,gs,uf,Ia,gf,_f,_s,bf,bs,vf,Tf,kf,vs,wf,Ts,yf,Df,Ef,Mo,$f,Ue,ks,Ff,eo,Vf,or,zf,Mf,Sa,qf,xf,Cf,qo,Rf,Na,Pf,Bf,ws,ji,to,xo,Oa,ys,jf,Wa,Af,Ai,qe,Ds,Lf,Ha,If,Sf,Es,Nf,$s,Of,Wf,Hf,Fs,Uf,Vs,Qf,Gf,Kf,Co,Jf,Qe,zs,Xf,oo,Yf,nr,Zf,em,Ua,tm,om,nm,Ro,sm,Qa,rm,am,Ms,Li,no,Po,Ga,qs,im,Ka,lm,Ii,xe,xs,dm,so,cm,Ja,pm,hm,Xa,fm,mm,um,Cs,gm,Rs,_m,bm,vm,Ps,Tm,Bs,km,wm,ym,Bo,Dm,Ge,js,Em,ro,$m,sr,Fm,Vm,Ya,zm,Mm,qm,jo,xm,Za,Cm,Rm,As,Si;return b=new Re({}),ee=new Re({}),Go=new Re({}),Ko=new X({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>,
<code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or
<a href="/docs/transformers/master/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same
value as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;, &quot;p2p&quot;]</code>, e.g.
<code>[&quot;p2c&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;, &apos;p2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xo=new Re({}),Yo=new X({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[CLS]&#x201D;) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[SEP]&#x201D;) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for SentencePiece</a> can be used, among other things, to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),tn=new X({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L177",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new X({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L201",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new X({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L227",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given
sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new it({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),an=new Re({}),ln=new X({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L991",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),fn=new X({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1015",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),po=new Ce({props:{$$slots:{default:[v_]},$$scope:{ctx:L}}}),mn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained('microsoft/deberta-v2-xlarge')
model = DebertaV2Model.from_pretrained('microsoft/deberta-v2-xlarge')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Re({}),gn=new X({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L893"}}),_n=new X({props:{name:"\\_forward\\_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/master/src/torch/nn/modules/module.py#L190"}}),fo=new Ce({props:{$$slots:{default:[T_]},$$scope:{ctx:L}}}),bn=new Re({}),vn=new X({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1104",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),yn=new X({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1123",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),uo=new Ce({props:{$$slots:{default:[k_]},$$scope:{ctx:L}}}),Dn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained('microsoft/deberta-v2-xlarge')
model = DebertaV2ForMaskedLM.from_pretrained('microsoft/deberta-v2-xlarge')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new Re({}),$n=new X({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1240",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),qn=new X({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1265",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),_o=new Ce({props:{$$slots:{default:[w_]},$$scope:{ctx:L}}}),xn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained('microsoft/deberta-v2-xlarge')
model = DebertaV2ForSequenceClassification.from_pretrained('microsoft/deberta-v2-xlarge')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained('microsoft/deberta-v2-xlarge')
model = DebertaV2ForSequenceClassification.from_pretrained('microsoft/deberta-v2-xlarge', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new Re({}),Pn=new X({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),In=new X({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1374",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),vo=new Ce({props:{$$slots:{default:[y_]},$$scope:{ctx:L}}}),Sn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained('microsoft/deberta-v2-xlarge')
model = DebertaV2ForTokenClassification.from_pretrained('microsoft/deberta-v2-xlarge')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Nn=new Re({}),On=new X({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1447",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Gn=new X({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1460",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),ko=new Ce({props:{$$slots:{default:[D_]},$$scope:{ctx:L}}}),Kn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained('microsoft/deberta-v2-xlarge')
model = DebertaV2ForQuestionAnswering.from_pretrained('microsoft/deberta-v2-xlarge')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;microsoft/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Jn=new Re({}),Xn=new X({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1218",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),yo=new Ce({props:{$$slots:{default:[E_]},$$scope:{ctx:L}}}),os=new X({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1224",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
>TFBaseModelOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),Do=new Ce({props:{$$slots:{default:[$_]},$$scope:{ctx:L}}}),ns=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained('kamalkraj/deberta-v2-xlarge')
model = TFDebertaV2Model.from_pretrained('kamalkraj/deberta-v2-xlarge')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ss=new Re({}),rs=new X({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1120"}}),as=new X({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ls=new Re({}),ds=new X({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1281",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Fo=new Ce({props:{$$slots:{default:[F_]},$$scope:{ctx:L}}}),fs=new X({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1297",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Vo=new Ce({props:{$$slots:{default:[V_]},$$scope:{ctx:L}}}),ms=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained('kamalkraj/deberta-v2-xlarge')
model = TFDebertaV2ForMaskedLM.from_pretrained('kamalkraj/deberta-v2-xlarge')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),us=new Re({}),gs=new X({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1382",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Mo=new Ce({props:{$$slots:{default:[z_]},$$scope:{ctx:L}}}),ks=new X({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1400",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),qo=new Ce({props:{$$slots:{default:[M_]},$$scope:{ctx:L}}}),ws=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained('kamalkraj/deberta-v2-xlarge')
model = TFDebertaV2ForSequenceClassification.from_pretrained('kamalkraj/deberta-v2-xlarge')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new Re({}),Ds=new X({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1486",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Co=new Ce({props:{$$slots:{default:[q_]},$$scope:{ctx:L}}}),zs=new X({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1498",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>TFTokenClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
>TFTokenClassifierOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),Ro=new Ce({props:{$$slots:{default:[x_]},$$scope:{ctx:L}}}),Ms=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained('kamalkraj/deberta-v2-xlarge')
model = TFDebertaV2ForTokenClassification.from_pretrained('kamalkraj/deberta-v2-xlarge')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qs=new Re({}),xs=new X({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1581",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Bo=new Ce({props:{$$slots:{default:[C_]},$$scope:{ctx:L}}}),js=new X({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1592",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Tokenizer">transformers.DebertaV2Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>TFQuestionAnsweringModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
>TFQuestionAnsweringModelOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),jo=new Ce({props:{$$slots:{default:[R_]},$$scope:{ctx:L}}}),As=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained('kamalkraj/deberta-v2-xlarge')
model = TFDebertaV2ForQuestionAnswering.from_pretrained('kamalkraj/deberta-v2-xlarge')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors='tf')
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = ' '.join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0]+1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;kamalkraj/deberta-v2-xlarge&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&#x27; &#x27;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]+<span class="hljs-number">1</span>])`}}),{c(){h=r("meta"),$=l(),u=r("h1"),g=r("a"),v=r("span"),T(b.$$.fragment),_=l(),V=r("span"),de=n("DeBERTa-v2"),K=l(),z=r("h2"),Y=r("a"),I=r("span"),T(ee.$$.fragment),ce=l(),S=r("span"),pe=n("Overview"),ae=l(),O=r("p"),P=n("The DeBERTa model was proposed in "),te=r("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),x=l(),ne=r("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=r("p"),H=n("The abstract from the paper is the following:"),le=l(),re=r("p"),q=r("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=r("a"),fe=n("https://github.com/microsoft/DeBERTa"),me=n("."),N=l(),J=r("p"),ue=n("The following information is visible directly on the "),R=r("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r("a"),p=n("blog"),F=l(),G=r("p"),ye=n("New in v2:"),we=l(),C=r("ul"),_e=r("li"),Te=r("strong"),De=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r("a"),Ee=n("sentencepiece-based"),$e=n(" tokenizer."),Q=l(),ve=r("li"),ke=r("strong"),be=n("nGiE(nGram Induced Input Encoding)"),Fe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Dl=l(),Os=r("li"),Fr=r("strong"),El=n("Sharing position projection matrix with content projection matrix in attention layer"),$l=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Fl=l(),Ws=r("li"),Vr=r("strong"),Vl=n("Apply bucket to encode relative positions"),zl=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Ml=l(),Hs=r("li"),zr=r("strong"),ql=n("900M model & 1.5B model"),xl=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),hi=l(),Ze=r("p"),Cl=n("This model was contributed by "),Ho=r("a"),Rl=n("DeBERTa"),Pl=n(`. This model TF 2.0 implementation was
contributed by `),Uo=r("a"),Bl=n("kamalkraj"),jl=n(". The original code can be found "),Qo=r("a"),Al=n("here"),Ll=n("."),fi=l(),Vt=r("h2"),ao=r("a"),Mr=r("span"),T(Go.$$.fragment),Il=l(),qr=r("span"),Sl=n("DebertaV2Config"),mi=l(),lt=r("div"),T(Ko.$$.fragment),Nl=l(),zt=r("p"),Ol=n("This is the configuration class to store the configuration of a "),Us=r("a"),Wl=n("DebertaV2Model"),Hl=n(`. It is used
to instantiate a DeBERTa-v2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=r("a"),Ul=n("microsoft/deberta-v2-xlarge"),Ql=n(" architecture."),Gl=l(),Mt=r("p"),Kl=n("Configuration objects inherit from "),Qs=r("a"),Jl=n("PretrainedConfig"),Xl=n(` and can be used to control the model
outputs. Read the documentation from `),Gs=r("a"),Yl=n("PretrainedConfig"),Zl=n(" for more information."),ui=l(),qt=r("h2"),io=r("a"),xr=r("span"),T(Xo.$$.fragment),ed=l(),Cr=r("span"),td=n("DebertaV2Tokenizer"),gi=l(),ze=r("div"),T(Yo.$$.fragment),od=l(),Zo=r("p"),nd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),en=r("a"),sd=n("SentencePiece"),rd=n("."),ad=l(),pt=r("div"),T(tn.$$.fragment),id=l(),Rr=r("p"),ld=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),dd=l(),on=r("ul"),Pr=r("li"),cd=n("single sequence: [CLS] X [SEP]"),pd=l(),Br=r("li"),hd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),fd=l(),lo=r("div"),T(nn.$$.fragment),md=l(),xt=r("p"),ud=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),jr=r("code"),gd=n("prepare_for_model"),_d=n(" or "),Ar=r("code"),bd=n("encode_plus"),vd=n(" methods."),Td=l(),et=r("div"),T(sn.$$.fragment),kd=l(),Lr=r("p"),wd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),yd=l(),T(rn.$$.fragment),Dd=l(),Ct=r("p"),Ed=n("If "),Ir=r("code"),$d=n("token_ids_1"),Fd=n(" is "),Sr=r("code"),Vd=n("None"),zd=n(", this method only returns the first portion of the mask (0s)."),Md=l(),Nr=r("div"),_i=l(),Rt=r("h2"),co=r("a"),Or=r("span"),T(an.$$.fragment),qd=l(),Wr=r("span"),xd=n("DebertaV2Model"),bi=l(),Je=r("div"),T(ln.$$.fragment),Cd=l(),dn=r("p"),Rd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r("a"),Pd=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Bd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),jd=l(),pn=r("p"),Ad=n("This model is also a PyTorch "),hn=r("a"),Ld=n("torch.nn.Module"),Id=n("\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),Sd=l(),Ie=r("div"),T(fn.$$.fragment),Nd=l(),Pt=r("p"),Od=n("The "),Ks=r("a"),Wd=n("DebertaV2Model"),Hd=n(" forward method, overrides the "),Hr=r("code"),Ud=n("__call__"),Qd=n(" special method."),Gd=l(),T(po.$$.fragment),Kd=l(),Ur=r("p"),Jd=n("Example:"),Xd=l(),T(mn.$$.fragment),vi=l(),Bt=r("h2"),ho=r("a"),Qr=r("span"),T(un.$$.fragment),Yd=l(),Gr=r("span"),Zd=n("DebertaV2PreTrainedModel"),Ti=l(),dt=r("div"),T(gn.$$.fragment),ec=l(),Kr=r("p"),tc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),oc=l(),tt=r("div"),T(_n.$$.fragment),nc=l(),Jr=r("p"),sc=n("Defines the computation performed at every call."),rc=l(),Xr=r("p"),ac=n("Should be overridden by all subclasses."),ic=l(),T(fo.$$.fragment),ki=l(),jt=r("h2"),mo=r("a"),Yr=r("span"),T(bn.$$.fragment),lc=l(),Zr=r("span"),dc=n("DebertaV2ForMaskedLM"),wi=l(),Xe=r("div"),T(vn.$$.fragment),cc=l(),At=r("p"),pc=n("DeBERTa Model with a "),ea=r("em"),hc=n("language modeling"),fc=n(` head on top.
The DeBERTa model was proposed in `),Tn=r("a"),mc=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),uc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gc=l(),kn=r("p"),_c=n("This model is also a PyTorch "),wn=r("a"),bc=n("torch.nn.Module"),vc=n("\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),Tc=l(),Se=r("div"),T(yn.$$.fragment),kc=l(),Lt=r("p"),wc=n("The "),Js=r("a"),yc=n("DebertaV2ForMaskedLM"),Dc=n(" forward method, overrides the "),ta=r("code"),Ec=n("__call__"),$c=n(" special method."),Fc=l(),T(uo.$$.fragment),Vc=l(),oa=r("p"),zc=n("Example:"),Mc=l(),T(Dn.$$.fragment),yi=l(),It=r("h2"),go=r("a"),na=r("span"),T(En.$$.fragment),qc=l(),sa=r("span"),xc=n("DebertaV2ForSequenceClassification"),Di=l(),Pe=r("div"),T($n.$$.fragment),Cc=l(),ra=r("p"),Rc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Pc=l(),Fn=r("p"),Bc=n("The DeBERTa model was proposed in "),Vn=r("a"),jc=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Ac=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lc=l(),zn=r("p"),Ic=n("This model is also a PyTorch "),Mn=r("a"),Sc=n("torch.nn.Module"),Nc=n("\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),Oc=l(),Ve=r("div"),T(qn.$$.fragment),Wc=l(),St=r("p"),Hc=n("The "),Xs=r("a"),Uc=n("DebertaV2ForSequenceClassification"),Qc=n(" forward method, overrides the "),aa=r("code"),Gc=n("__call__"),Kc=n(" special method."),Jc=l(),T(_o.$$.fragment),Xc=l(),ia=r("p"),Yc=n("Example of single-label classification:"),Zc=l(),T(xn.$$.fragment),ep=l(),la=r("p"),tp=n("Example of multi-label classification:"),op=l(),T(Cn.$$.fragment),Ei=l(),Nt=r("h2"),bo=r("a"),da=r("span"),T(Rn.$$.fragment),np=l(),ca=r("span"),sp=n("DebertaV2ForTokenClassification"),$i=l(),Be=r("div"),T(Pn.$$.fragment),rp=l(),pa=r("p"),ap=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ip=l(),Bn=r("p"),lp=n("The DeBERTa model was proposed in "),jn=r("a"),dp=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),cp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pp=l(),An=r("p"),hp=n("This model is also a PyTorch "),Ln=r("a"),fp=n("torch.nn.Module"),mp=n("\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),up=l(),Ne=r("div"),T(In.$$.fragment),gp=l(),Ot=r("p"),_p=n("The "),Ys=r("a"),bp=n("DebertaV2ForTokenClassification"),vp=n(" forward method, overrides the "),ha=r("code"),Tp=n("__call__"),kp=n(" special method."),wp=l(),T(vo.$$.fragment),yp=l(),fa=r("p"),Dp=n("Example:"),Ep=l(),T(Sn.$$.fragment),Fi=l(),Wt=r("h2"),To=r("a"),ma=r("span"),T(Nn.$$.fragment),$p=l(),ua=r("span"),Fp=n("DebertaV2ForQuestionAnswering"),Vi=l(),je=r("div"),T(On.$$.fragment),Vp=l(),Ht=r("p"),zp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ga=r("em"),Mp=n("span start logits"),qp=n(" and "),_a=r("em"),xp=n("span end logits"),Cp=n(")."),Rp=l(),Wn=r("p"),Pp=n("The DeBERTa model was proposed in "),Hn=r("a"),Bp=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),jp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ap=l(),Un=r("p"),Lp=n("This model is also a PyTorch "),Qn=r("a"),Ip=n("torch.nn.Module"),Sp=n("\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),Np=l(),Oe=r("div"),T(Gn.$$.fragment),Op=l(),Ut=r("p"),Wp=n("The "),Zs=r("a"),Hp=n("DebertaV2ForQuestionAnswering"),Up=n(" forward method, overrides the "),ba=r("code"),Qp=n("__call__"),Gp=n(" special method."),Kp=l(),T(ko.$$.fragment),Jp=l(),va=r("p"),Xp=n("Example:"),Yp=l(),T(Kn.$$.fragment),zi=l(),Qt=r("h2"),wo=r("a"),Ta=r("span"),T(Jn.$$.fragment),Zp=l(),ka=r("span"),eh=n("TFDebertaV2Model"),Mi=l(),Ae=r("div"),T(Xn.$$.fragment),th=l(),Yn=r("p"),oh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Zn=r("a"),nh=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),sh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rh=l(),es=r("p"),ah=n("This model is also a "),ts=r("a"),ih=n("tf.keras.Model"),lh=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),dh=l(),T(yo.$$.fragment),ch=l(),We=r("div"),T(os.$$.fragment),ph=l(),Gt=r("p"),hh=n("The "),er=r("a"),fh=n("TFDebertaV2Model"),mh=n(" forward method, overrides the "),wa=r("code"),uh=n("__call__"),gh=n(" special method."),_h=l(),T(Do.$$.fragment),bh=l(),ya=r("p"),vh=n("Example:"),Th=l(),T(ns.$$.fragment),qi=l(),Kt=r("h2"),Eo=r("a"),Da=r("span"),T(ss.$$.fragment),kh=l(),Ea=r("span"),wh=n("TFDebertaV2PreTrainedModel"),xi=l(),ct=r("div"),T(rs.$$.fragment),yh=l(),$a=r("p"),Dh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Eh=l(),ot=r("div"),T(as.$$.fragment),$h=l(),Fa=r("p"),Fh=n("Calls the model on new inputs and returns the outputs as tensors."),Vh=l(),is=r("p"),zh=n("In this case "),Va=r("code"),Mh=n("call()"),qh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),xh=l(),Ye=r("p"),Ch=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),za=r("code"),Rh=n("tf.keras.Model"),Ph=n(`.
To call a model on an input, always use the `),Ma=r("code"),Bh=n("__call__()"),jh=n(` method,
i.e. `),qa=r("code"),Ah=n("model(inputs)"),Lh=n(", which relies on the underlying "),xa=r("code"),Ih=n("call()"),Sh=n(" method."),Ci=l(),Jt=r("h2"),$o=r("a"),Ca=r("span"),T(ls.$$.fragment),Nh=l(),Ra=r("span"),Oh=n("TFDebertaV2ForMaskedLM"),Ri=l(),Le=r("div"),T(ds.$$.fragment),Wh=l(),Xt=r("p"),Hh=n("DeBERTa Model with a "),Pa=r("em"),Uh=n("language modeling"),Qh=n(` head on top.
The DeBERTa model was proposed in `),cs=r("a"),Gh=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Kh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jh=l(),ps=r("p"),Xh=n("This model is also a "),hs=r("a"),Yh=n("tf.keras.Model"),Zh=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ef=l(),T(Fo.$$.fragment),tf=l(),He=r("div"),T(fs.$$.fragment),of=l(),Yt=r("p"),nf=n("The "),tr=r("a"),sf=n("TFDebertaV2ForMaskedLM"),rf=n(" forward method, overrides the "),Ba=r("code"),af=n("__call__"),lf=n(" special method."),df=l(),T(Vo.$$.fragment),cf=l(),ja=r("p"),pf=n("Example:"),hf=l(),T(ms.$$.fragment),Pi=l(),Zt=r("h2"),zo=r("a"),Aa=r("span"),T(us.$$.fragment),ff=l(),La=r("span"),mf=n("TFDebertaV2ForSequenceClassification"),Bi=l(),Me=r("div"),T(gs.$$.fragment),uf=l(),Ia=r("p"),gf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_f=l(),_s=r("p"),bf=n("The DeBERTa model was proposed in "),bs=r("a"),vf=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Tf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kf=l(),vs=r("p"),wf=n("This model is also a "),Ts=r("a"),yf=n("tf.keras.Model"),Df=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ef=l(),T(Mo.$$.fragment),$f=l(),Ue=r("div"),T(ks.$$.fragment),Ff=l(),eo=r("p"),Vf=n("The "),or=r("a"),zf=n("TFDebertaV2ForSequenceClassification"),Mf=n(" forward method, overrides the "),Sa=r("code"),qf=n("__call__"),xf=n(" special method."),Cf=l(),T(qo.$$.fragment),Rf=l(),Na=r("p"),Pf=n("Example:"),Bf=l(),T(ws.$$.fragment),ji=l(),to=r("h2"),xo=r("a"),Oa=r("span"),T(ys.$$.fragment),jf=l(),Wa=r("span"),Af=n("TFDebertaV2ForTokenClassification"),Ai=l(),qe=r("div"),T(Ds.$$.fragment),Lf=l(),Ha=r("p"),If=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sf=l(),Es=r("p"),Nf=n("The DeBERTa model was proposed in "),$s=r("a"),Of=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Wf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hf=l(),Fs=r("p"),Uf=n("This model is also a "),Vs=r("a"),Qf=n("tf.keras.Model"),Gf=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Kf=l(),T(Co.$$.fragment),Jf=l(),Qe=r("div"),T(zs.$$.fragment),Xf=l(),oo=r("p"),Yf=n("The "),nr=r("a"),Zf=n("TFDebertaV2ForTokenClassification"),em=n(" forward method, overrides the "),Ua=r("code"),tm=n("__call__"),om=n(" special method."),nm=l(),T(Ro.$$.fragment),sm=l(),Qa=r("p"),rm=n("Example:"),am=l(),T(Ms.$$.fragment),Li=l(),no=r("h2"),Po=r("a"),Ga=r("span"),T(qs.$$.fragment),im=l(),Ka=r("span"),lm=n("TFDebertaV2ForQuestionAnswering"),Ii=l(),xe=r("div"),T(xs.$$.fragment),dm=l(),so=r("p"),cm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ja=r("em"),pm=n("span start logits"),hm=n(" and "),Xa=r("em"),fm=n("span end logits"),mm=n(")."),um=l(),Cs=r("p"),gm=n("The DeBERTa model was proposed in "),Rs=r("a"),_m=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),bm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vm=l(),Ps=r("p"),Tm=n("This model is also a "),Bs=r("a"),km=n("tf.keras.Model"),wm=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ym=l(),T(Bo.$$.fragment),Dm=l(),Ge=r("div"),T(js.$$.fragment),Em=l(),ro=r("p"),$m=n("The "),sr=r("a"),Fm=n("TFDebertaV2ForQuestionAnswering"),Vm=n(" forward method, overrides the "),Ya=r("code"),zm=n("__call__"),Mm=n(" special method."),qm=l(),T(jo.$$.fragment),xm=l(),Za=r("p"),Cm=n("Example:"),Rm=l(),T(As.$$.fragment),this.h()},l(o){const m=b_('[data-svelte="svelte-1phssyn"]',document.head);h=a(m,"META",{name:!0,content:!0}),m.forEach(t),$=d(o),u=a(o,"H1",{class:!0});var Ls=i(u);g=a(Ls,"A",{id:!0,class:!0,href:!0});var ei=i(g);v=a(ei,"SPAN",{});var ti=i(v);k(b.$$.fragment,ti),ti.forEach(t),ei.forEach(t),_=d(Ls),V=a(Ls,"SPAN",{});var oi=i(V);de=s(oi,"DeBERTa-v2"),oi.forEach(t),Ls.forEach(t),K=d(o),z=a(o,"H2",{class:!0});var Is=i(z);Y=a(Is,"A",{id:!0,class:!0,href:!0});var ni=i(Y);I=a(ni,"SPAN",{});var si=i(I);k(ee.$$.fragment,si),si.forEach(t),ni.forEach(t),ce=d(Is),S=a(Is,"SPAN",{});var ri=i(S);pe=s(ri,"Overview"),ri.forEach(t),Is.forEach(t),ae=d(o),O=a(o,"P",{});var Ss=i(O);P=s(Ss,"The DeBERTa model was proposed in "),te=a(Ss,"A",{href:!0,rel:!0});var ai=i(te);Z=s(ai,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ai.forEach(t),M=s(Ss,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Ss.forEach(t),x=d(o),ne=a(o,"P",{});var ii=i(ne);W=s(ii,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ii.forEach(t),ie=d(o),se=a(o,"P",{});var li=i(se);H=s(li,"The abstract from the paper is the following:"),li.forEach(t),le=d(o),re=a(o,"P",{});var di=i(re);q=a(di,"EM",{});var Ns=i(q);he=s(Ns,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=a(Ns,"A",{href:!0,rel:!0});var ci=i(j);fe=s(ci,"https://github.com/microsoft/DeBERTa"),ci.forEach(t),me=s(Ns,"."),Ns.forEach(t),di.forEach(t),N=d(o),J=a(o,"P",{});var Ao=i(J);ue=s(Ao,"The following information is visible directly on the "),R=a(Ao,"A",{href:!0,rel:!0});var Lm=i(R);ge=s(Lm,`original implementation
repository`),Lm.forEach(t),U=s(Ao,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a(Ao,"A",{href:!0,rel:!0});var Im=i(oe);p=s(Im,"blog"),Im.forEach(t),Ao.forEach(t),F=d(o),G=a(o,"P",{});var Sm=i(G);ye=s(Sm,"New in v2:"),Sm.forEach(t),we=d(o),C=a(o,"UL",{});var ht=i(C);_e=a(ht,"LI",{});var pi=i(_e);Te=a(pi,"STRONG",{});var Nm=i(Te);De=s(Nm,"Vocabulary"),Nm.forEach(t),B=s(pi,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a(pi,"A",{href:!0,rel:!0});var Om=i(A);Ee=s(Om,"sentencepiece-based"),Om.forEach(t),$e=s(pi," tokenizer."),pi.forEach(t),Q=d(ht),ve=a(ht,"LI",{});var Pm=i(ve);ke=a(Pm,"STRONG",{});var Wm=i(ke);be=s(Wm,"nGiE(nGram Induced Input Encoding)"),Wm.forEach(t),Fe=s(Pm,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Pm.forEach(t),Dl=d(ht),Os=a(ht,"LI",{});var Bm=i(Os);Fr=a(Bm,"STRONG",{});var Hm=i(Fr);El=s(Hm,"Sharing position projection matrix with content projection matrix in attention layer"),Hm.forEach(t),$l=s(Bm,` Based on previous
experiments, this can save parameters without affecting the performance.`),Bm.forEach(t),Fl=d(ht),Ws=a(ht,"LI",{});var jm=i(Ws);Vr=a(jm,"STRONG",{});var Um=i(Vr);Vl=s(Um,"Apply bucket to encode relative positions"),Um.forEach(t),zl=s(jm,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),jm.forEach(t),Ml=d(ht),Hs=a(ht,"LI",{});var Am=i(Hs);zr=a(Am,"STRONG",{});var Qm=i(zr);ql=s(Qm,"900M model & 1.5B model"),Qm.forEach(t),xl=s(Am,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Am.forEach(t),ht.forEach(t),hi=d(o),Ze=a(o,"P",{});var Lo=i(Ze);Cl=s(Lo,"This model was contributed by "),Ho=a(Lo,"A",{href:!0,rel:!0});var Gm=i(Ho);Rl=s(Gm,"DeBERTa"),Gm.forEach(t),Pl=s(Lo,`. This model TF 2.0 implementation was
contributed by `),Uo=a(Lo,"A",{href:!0,rel:!0});var Km=i(Uo);Bl=s(Km,"kamalkraj"),Km.forEach(t),jl=s(Lo,". The original code can be found "),Qo=a(Lo,"A",{href:!0,rel:!0});var Jm=i(Qo);Al=s(Jm,"here"),Jm.forEach(t),Ll=s(Lo,"."),Lo.forEach(t),fi=d(o),Vt=a(o,"H2",{class:!0});var Ni=i(Vt);ao=a(Ni,"A",{id:!0,class:!0,href:!0});var Xm=i(ao);Mr=a(Xm,"SPAN",{});var Ym=i(Mr);k(Go.$$.fragment,Ym),Ym.forEach(t),Xm.forEach(t),Il=d(Ni),qr=a(Ni,"SPAN",{});var Zm=i(qr);Sl=s(Zm,"DebertaV2Config"),Zm.forEach(t),Ni.forEach(t),mi=d(o),lt=a(o,"DIV",{class:!0});var rr=i(lt);k(Ko.$$.fragment,rr),Nl=d(rr),zt=a(rr,"P",{});var ar=i(zt);Ol=s(ar,"This is the configuration class to store the configuration of a "),Us=a(ar,"A",{href:!0});var eu=i(Us);Wl=s(eu,"DebertaV2Model"),eu.forEach(t),Hl=s(ar,`. It is used
to instantiate a DeBERTa-v2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=a(ar,"A",{href:!0,rel:!0});var tu=i(Jo);Ul=s(tu,"microsoft/deberta-v2-xlarge"),tu.forEach(t),Ql=s(ar," architecture."),ar.forEach(t),Gl=d(rr),Mt=a(rr,"P",{});var ir=i(Mt);Kl=s(ir,"Configuration objects inherit from "),Qs=a(ir,"A",{href:!0});var ou=i(Qs);Jl=s(ou,"PretrainedConfig"),ou.forEach(t),Xl=s(ir,` and can be used to control the model
outputs. Read the documentation from `),Gs=a(ir,"A",{href:!0});var nu=i(Gs);Yl=s(nu,"PretrainedConfig"),nu.forEach(t),Zl=s(ir," for more information."),ir.forEach(t),rr.forEach(t),ui=d(o),qt=a(o,"H2",{class:!0});var Oi=i(qt);io=a(Oi,"A",{id:!0,class:!0,href:!0});var su=i(io);xr=a(su,"SPAN",{});var ru=i(xr);k(Xo.$$.fragment,ru),ru.forEach(t),su.forEach(t),ed=d(Oi),Cr=a(Oi,"SPAN",{});var au=i(Cr);td=s(au,"DebertaV2Tokenizer"),au.forEach(t),Oi.forEach(t),gi=d(o),ze=a(o,"DIV",{class:!0});var nt=i(ze);k(Yo.$$.fragment,nt),od=d(nt),Zo=a(nt,"P",{});var Wi=i(Zo);nd=s(Wi,"Constructs a DeBERTa-v2 tokenizer. Based on "),en=a(Wi,"A",{href:!0,rel:!0});var iu=i(en);sd=s(iu,"SentencePiece"),iu.forEach(t),rd=s(Wi,"."),Wi.forEach(t),ad=d(nt),pt=a(nt,"DIV",{class:!0});var lr=i(pt);k(tn.$$.fragment,lr),id=d(lr),Rr=a(lr,"P",{});var lu=i(Rr);ld=s(lu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),lu.forEach(t),dd=d(lr),on=a(lr,"UL",{});var Hi=i(on);Pr=a(Hi,"LI",{});var du=i(Pr);cd=s(du,"single sequence: [CLS] X [SEP]"),du.forEach(t),pd=d(Hi),Br=a(Hi,"LI",{});var cu=i(Br);hd=s(cu,"pair of sequences: [CLS] A [SEP] B [SEP]"),cu.forEach(t),Hi.forEach(t),lr.forEach(t),fd=d(nt),lo=a(nt,"DIV",{class:!0});var Ui=i(lo);k(nn.$$.fragment,Ui),md=d(Ui),xt=a(Ui,"P",{});var dr=i(xt);ud=s(dr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),jr=a(dr,"CODE",{});var pu=i(jr);gd=s(pu,"prepare_for_model"),pu.forEach(t),_d=s(dr," or "),Ar=a(dr,"CODE",{});var hu=i(Ar);bd=s(hu,"encode_plus"),hu.forEach(t),vd=s(dr," methods."),dr.forEach(t),Ui.forEach(t),Td=d(nt),et=a(nt,"DIV",{class:!0});var Io=i(et);k(sn.$$.fragment,Io),kd=d(Io),Lr=a(Io,"P",{});var fu=i(Lr);wd=s(fu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),fu.forEach(t),yd=d(Io),k(rn.$$.fragment,Io),Dd=d(Io),Ct=a(Io,"P",{});var cr=i(Ct);Ed=s(cr,"If "),Ir=a(cr,"CODE",{});var mu=i(Ir);$d=s(mu,"token_ids_1"),mu.forEach(t),Fd=s(cr," is "),Sr=a(cr,"CODE",{});var uu=i(Sr);Vd=s(uu,"None"),uu.forEach(t),zd=s(cr,", this method only returns the first portion of the mask (0s)."),cr.forEach(t),Io.forEach(t),Md=d(nt),Nr=a(nt,"DIV",{class:!0}),i(Nr).forEach(t),nt.forEach(t),_i=d(o),Rt=a(o,"H2",{class:!0});var Qi=i(Rt);co=a(Qi,"A",{id:!0,class:!0,href:!0});var gu=i(co);Or=a(gu,"SPAN",{});var _u=i(Or);k(an.$$.fragment,_u),_u.forEach(t),gu.forEach(t),qd=d(Qi),Wr=a(Qi,"SPAN",{});var bu=i(Wr);xd=s(bu,"DebertaV2Model"),bu.forEach(t),Qi.forEach(t),bi=d(o),Je=a(o,"DIV",{class:!0});var So=i(Je);k(ln.$$.fragment,So),Cd=d(So),dn=a(So,"P",{});var Gi=i(dn);Rd=s(Gi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a(Gi,"A",{href:!0,rel:!0});var vu=i(cn);Pd=s(vu,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),vu.forEach(t),Bd=s(Gi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gi.forEach(t),jd=d(So),pn=a(So,"P",{});var Ki=i(pn);Ad=s(Ki,"This model is also a PyTorch "),hn=a(Ki,"A",{href:!0,rel:!0});var Tu=i(hn);Ld=s(Tu,"torch.nn.Module"),Tu.forEach(t),Id=s(Ki,"\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),Ki.forEach(t),Sd=d(So),Ie=a(So,"DIV",{class:!0});var ft=i(Ie);k(fn.$$.fragment,ft),Nd=d(ft),Pt=a(ft,"P",{});var pr=i(Pt);Od=s(pr,"The "),Ks=a(pr,"A",{href:!0});var ku=i(Ks);Wd=s(ku,"DebertaV2Model"),ku.forEach(t),Hd=s(pr," forward method, overrides the "),Hr=a(pr,"CODE",{});var wu=i(Hr);Ud=s(wu,"__call__"),wu.forEach(t),Qd=s(pr," special method."),pr.forEach(t),Gd=d(ft),k(po.$$.fragment,ft),Kd=d(ft),Ur=a(ft,"P",{});var yu=i(Ur);Jd=s(yu,"Example:"),yu.forEach(t),Xd=d(ft),k(mn.$$.fragment,ft),ft.forEach(t),So.forEach(t),vi=d(o),Bt=a(o,"H2",{class:!0});var Ji=i(Bt);ho=a(Ji,"A",{id:!0,class:!0,href:!0});var Du=i(ho);Qr=a(Du,"SPAN",{});var Eu=i(Qr);k(un.$$.fragment,Eu),Eu.forEach(t),Du.forEach(t),Yd=d(Ji),Gr=a(Ji,"SPAN",{});var $u=i(Gr);Zd=s($u,"DebertaV2PreTrainedModel"),$u.forEach(t),Ji.forEach(t),Ti=d(o),dt=a(o,"DIV",{class:!0});var hr=i(dt);k(gn.$$.fragment,hr),ec=d(hr),Kr=a(hr,"P",{});var Fu=i(Kr);tc=s(Fu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Fu.forEach(t),oc=d(hr),tt=a(hr,"DIV",{class:!0});var No=i(tt);k(_n.$$.fragment,No),nc=d(No),Jr=a(No,"P",{});var Vu=i(Jr);sc=s(Vu,"Defines the computation performed at every call."),Vu.forEach(t),rc=d(No),Xr=a(No,"P",{});var zu=i(Xr);ac=s(zu,"Should be overridden by all subclasses."),zu.forEach(t),ic=d(No),k(fo.$$.fragment,No),No.forEach(t),hr.forEach(t),ki=d(o),jt=a(o,"H2",{class:!0});var Xi=i(jt);mo=a(Xi,"A",{id:!0,class:!0,href:!0});var Mu=i(mo);Yr=a(Mu,"SPAN",{});var qu=i(Yr);k(bn.$$.fragment,qu),qu.forEach(t),Mu.forEach(t),lc=d(Xi),Zr=a(Xi,"SPAN",{});var xu=i(Zr);dc=s(xu,"DebertaV2ForMaskedLM"),xu.forEach(t),Xi.forEach(t),wi=d(o),Xe=a(o,"DIV",{class:!0});var Oo=i(Xe);k(vn.$$.fragment,Oo),cc=d(Oo),At=a(Oo,"P",{});var fr=i(At);pc=s(fr,"DeBERTa Model with a "),ea=a(fr,"EM",{});var Cu=i(ea);hc=s(Cu,"language modeling"),Cu.forEach(t),fc=s(fr,` head on top.
The DeBERTa model was proposed in `),Tn=a(fr,"A",{href:!0,rel:!0});var Ru=i(Tn);mc=s(Ru,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Ru.forEach(t),uc=s(fr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fr.forEach(t),gc=d(Oo),kn=a(Oo,"P",{});var Yi=i(kn);_c=s(Yi,"This model is also a PyTorch "),wn=a(Yi,"A",{href:!0,rel:!0});var Pu=i(wn);bc=s(Pu,"torch.nn.Module"),Pu.forEach(t),vc=s(Yi,"\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),Yi.forEach(t),Tc=d(Oo),Se=a(Oo,"DIV",{class:!0});var mt=i(Se);k(yn.$$.fragment,mt),kc=d(mt),Lt=a(mt,"P",{});var mr=i(Lt);wc=s(mr,"The "),Js=a(mr,"A",{href:!0});var Bu=i(Js);yc=s(Bu,"DebertaV2ForMaskedLM"),Bu.forEach(t),Dc=s(mr," forward method, overrides the "),ta=a(mr,"CODE",{});var ju=i(ta);Ec=s(ju,"__call__"),ju.forEach(t),$c=s(mr," special method."),mr.forEach(t),Fc=d(mt),k(uo.$$.fragment,mt),Vc=d(mt),oa=a(mt,"P",{});var Au=i(oa);zc=s(Au,"Example:"),Au.forEach(t),Mc=d(mt),k(Dn.$$.fragment,mt),mt.forEach(t),Oo.forEach(t),yi=d(o),It=a(o,"H2",{class:!0});var Zi=i(It);go=a(Zi,"A",{id:!0,class:!0,href:!0});var Lu=i(go);na=a(Lu,"SPAN",{});var Iu=i(na);k(En.$$.fragment,Iu),Iu.forEach(t),Lu.forEach(t),qc=d(Zi),sa=a(Zi,"SPAN",{});var Su=i(sa);xc=s(Su,"DebertaV2ForSequenceClassification"),Su.forEach(t),Zi.forEach(t),Di=d(o),Pe=a(o,"DIV",{class:!0});var ut=i(Pe);k($n.$$.fragment,ut),Cc=d(ut),ra=a(ut,"P",{});var Nu=i(ra);Rc=s(Nu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Nu.forEach(t),Pc=d(ut),Fn=a(ut,"P",{});var el=i(Fn);Bc=s(el,"The DeBERTa model was proposed in "),Vn=a(el,"A",{href:!0,rel:!0});var Ou=i(Vn);jc=s(Ou,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Ou.forEach(t),Ac=s(el,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),el.forEach(t),Lc=d(ut),zn=a(ut,"P",{});var tl=i(zn);Ic=s(tl,"This model is also a PyTorch "),Mn=a(tl,"A",{href:!0,rel:!0});var Wu=i(Mn);Sc=s(Wu,"torch.nn.Module"),Wu.forEach(t),Nc=s(tl,"\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),tl.forEach(t),Oc=d(ut),Ve=a(ut,"DIV",{class:!0});var Ke=i(Ve);k(qn.$$.fragment,Ke),Wc=d(Ke),St=a(Ke,"P",{});var ur=i(St);Hc=s(ur,"The "),Xs=a(ur,"A",{href:!0});var Hu=i(Xs);Uc=s(Hu,"DebertaV2ForSequenceClassification"),Hu.forEach(t),Qc=s(ur," forward method, overrides the "),aa=a(ur,"CODE",{});var Uu=i(aa);Gc=s(Uu,"__call__"),Uu.forEach(t),Kc=s(ur," special method."),ur.forEach(t),Jc=d(Ke),k(_o.$$.fragment,Ke),Xc=d(Ke),ia=a(Ke,"P",{});var Qu=i(ia);Yc=s(Qu,"Example of single-label classification:"),Qu.forEach(t),Zc=d(Ke),k(xn.$$.fragment,Ke),ep=d(Ke),la=a(Ke,"P",{});var Gu=i(la);tp=s(Gu,"Example of multi-label classification:"),Gu.forEach(t),op=d(Ke),k(Cn.$$.fragment,Ke),Ke.forEach(t),ut.forEach(t),Ei=d(o),Nt=a(o,"H2",{class:!0});var ol=i(Nt);bo=a(ol,"A",{id:!0,class:!0,href:!0});var Ku=i(bo);da=a(Ku,"SPAN",{});var Ju=i(da);k(Rn.$$.fragment,Ju),Ju.forEach(t),Ku.forEach(t),np=d(ol),ca=a(ol,"SPAN",{});var Xu=i(ca);sp=s(Xu,"DebertaV2ForTokenClassification"),Xu.forEach(t),ol.forEach(t),$i=d(o),Be=a(o,"DIV",{class:!0});var gt=i(Be);k(Pn.$$.fragment,gt),rp=d(gt),pa=a(gt,"P",{});var Yu=i(pa);ap=s(Yu,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Yu.forEach(t),ip=d(gt),Bn=a(gt,"P",{});var nl=i(Bn);lp=s(nl,"The DeBERTa model was proposed in "),jn=a(nl,"A",{href:!0,rel:!0});var Zu=i(jn);dp=s(Zu,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Zu.forEach(t),cp=s(nl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nl.forEach(t),pp=d(gt),An=a(gt,"P",{});var sl=i(An);hp=s(sl,"This model is also a PyTorch "),Ln=a(sl,"A",{href:!0,rel:!0});var eg=i(Ln);fp=s(eg,"torch.nn.Module"),eg.forEach(t),mp=s(sl,"\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),sl.forEach(t),up=d(gt),Ne=a(gt,"DIV",{class:!0});var _t=i(Ne);k(In.$$.fragment,_t),gp=d(_t),Ot=a(_t,"P",{});var gr=i(Ot);_p=s(gr,"The "),Ys=a(gr,"A",{href:!0});var tg=i(Ys);bp=s(tg,"DebertaV2ForTokenClassification"),tg.forEach(t),vp=s(gr," forward method, overrides the "),ha=a(gr,"CODE",{});var og=i(ha);Tp=s(og,"__call__"),og.forEach(t),kp=s(gr," special method."),gr.forEach(t),wp=d(_t),k(vo.$$.fragment,_t),yp=d(_t),fa=a(_t,"P",{});var ng=i(fa);Dp=s(ng,"Example:"),ng.forEach(t),Ep=d(_t),k(Sn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Fi=d(o),Wt=a(o,"H2",{class:!0});var rl=i(Wt);To=a(rl,"A",{id:!0,class:!0,href:!0});var sg=i(To);ma=a(sg,"SPAN",{});var rg=i(ma);k(Nn.$$.fragment,rg),rg.forEach(t),sg.forEach(t),$p=d(rl),ua=a(rl,"SPAN",{});var ag=i(ua);Fp=s(ag,"DebertaV2ForQuestionAnswering"),ag.forEach(t),rl.forEach(t),Vi=d(o),je=a(o,"DIV",{class:!0});var bt=i(je);k(On.$$.fragment,bt),Vp=d(bt),Ht=a(bt,"P",{});var _r=i(Ht);zp=s(_r,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ga=a(_r,"EM",{});var ig=i(ga);Mp=s(ig,"span start logits"),ig.forEach(t),qp=s(_r," and "),_a=a(_r,"EM",{});var lg=i(_a);xp=s(lg,"span end logits"),lg.forEach(t),Cp=s(_r,")."),_r.forEach(t),Rp=d(bt),Wn=a(bt,"P",{});var al=i(Wn);Pp=s(al,"The DeBERTa model was proposed in "),Hn=a(al,"A",{href:!0,rel:!0});var dg=i(Hn);Bp=s(dg,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),dg.forEach(t),jp=s(al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),al.forEach(t),Ap=d(bt),Un=a(bt,"P",{});var il=i(Un);Lp=s(il,"This model is also a PyTorch "),Qn=a(il,"A",{href:!0,rel:!0});var cg=i(Qn);Ip=s(cg,"torch.nn.Module"),cg.forEach(t),Sp=s(il,"\nsubclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to\ngeneral usage and behavior.```"),il.forEach(t),Np=d(bt),Oe=a(bt,"DIV",{class:!0});var vt=i(Oe);k(Gn.$$.fragment,vt),Op=d(vt),Ut=a(vt,"P",{});var br=i(Ut);Wp=s(br,"The "),Zs=a(br,"A",{href:!0});var pg=i(Zs);Hp=s(pg,"DebertaV2ForQuestionAnswering"),pg.forEach(t),Up=s(br," forward method, overrides the "),ba=a(br,"CODE",{});var hg=i(ba);Qp=s(hg,"__call__"),hg.forEach(t),Gp=s(br," special method."),br.forEach(t),Kp=d(vt),k(ko.$$.fragment,vt),Jp=d(vt),va=a(vt,"P",{});var fg=i(va);Xp=s(fg,"Example:"),fg.forEach(t),Yp=d(vt),k(Kn.$$.fragment,vt),vt.forEach(t),bt.forEach(t),zi=d(o),Qt=a(o,"H2",{class:!0});var ll=i(Qt);wo=a(ll,"A",{id:!0,class:!0,href:!0});var mg=i(wo);Ta=a(mg,"SPAN",{});var ug=i(Ta);k(Jn.$$.fragment,ug),ug.forEach(t),mg.forEach(t),Zp=d(ll),ka=a(ll,"SPAN",{});var gg=i(ka);eh=s(gg,"TFDebertaV2Model"),gg.forEach(t),ll.forEach(t),Mi=d(o),Ae=a(o,"DIV",{class:!0});var Tt=i(Ae);k(Xn.$$.fragment,Tt),th=d(Tt),Yn=a(Tt,"P",{});var dl=i(Yn);oh=s(dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Zn=a(dl,"A",{href:!0,rel:!0});var _g=i(Zn);nh=s(_g,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),_g.forEach(t),sh=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),rh=d(Tt),es=a(Tt,"P",{});var cl=i(es);ah=s(cl,"This model is also a "),ts=a(cl,"A",{href:!0,rel:!0});var bg=i(ts);ih=s(bg,"tf.keras.Model"),bg.forEach(t),lh=s(cl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),cl.forEach(t),dh=d(Tt),k(yo.$$.fragment,Tt),ch=d(Tt),We=a(Tt,"DIV",{class:!0});var kt=i(We);k(os.$$.fragment,kt),ph=d(kt),Gt=a(kt,"P",{});var vr=i(Gt);hh=s(vr,"The "),er=a(vr,"A",{href:!0});var vg=i(er);fh=s(vg,"TFDebertaV2Model"),vg.forEach(t),mh=s(vr," forward method, overrides the "),wa=a(vr,"CODE",{});var Tg=i(wa);uh=s(Tg,"__call__"),Tg.forEach(t),gh=s(vr," special method."),vr.forEach(t),_h=d(kt),k(Do.$$.fragment,kt),bh=d(kt),ya=a(kt,"P",{});var kg=i(ya);vh=s(kg,"Example:"),kg.forEach(t),Th=d(kt),k(ns.$$.fragment,kt),kt.forEach(t),Tt.forEach(t),qi=d(o),Kt=a(o,"H2",{class:!0});var pl=i(Kt);Eo=a(pl,"A",{id:!0,class:!0,href:!0});var wg=i(Eo);Da=a(wg,"SPAN",{});var yg=i(Da);k(ss.$$.fragment,yg),yg.forEach(t),wg.forEach(t),kh=d(pl),Ea=a(pl,"SPAN",{});var Dg=i(Ea);wh=s(Dg,"TFDebertaV2PreTrainedModel"),Dg.forEach(t),pl.forEach(t),xi=d(o),ct=a(o,"DIV",{class:!0});var Tr=i(ct);k(rs.$$.fragment,Tr),yh=d(Tr),$a=a(Tr,"P",{});var Eg=i($a);Dh=s(Eg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Eg.forEach(t),Eh=d(Tr),ot=a(Tr,"DIV",{class:!0});var Wo=i(ot);k(as.$$.fragment,Wo),$h=d(Wo),Fa=a(Wo,"P",{});var $g=i(Fa);Fh=s($g,"Calls the model on new inputs and returns the outputs as tensors."),$g.forEach(t),Vh=d(Wo),is=a(Wo,"P",{});var hl=i(is);zh=s(hl,"In this case "),Va=a(hl,"CODE",{});var Fg=i(Va);Mh=s(Fg,"call()"),Fg.forEach(t),qh=s(hl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),hl.forEach(t),xh=d(Wo),Ye=a(Wo,"P",{});var wt=i(Ye);Ch=s(wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),za=a(wt,"CODE",{});var Vg=i(za);Rh=s(Vg,"tf.keras.Model"),Vg.forEach(t),Ph=s(wt,`.
To call a model on an input, always use the `),Ma=a(wt,"CODE",{});var zg=i(Ma);Bh=s(zg,"__call__()"),zg.forEach(t),jh=s(wt,` method,
i.e. `),qa=a(wt,"CODE",{});var Mg=i(qa);Ah=s(Mg,"model(inputs)"),Mg.forEach(t),Lh=s(wt,", which relies on the underlying "),xa=a(wt,"CODE",{});var qg=i(xa);Ih=s(qg,"call()"),qg.forEach(t),Sh=s(wt," method."),wt.forEach(t),Wo.forEach(t),Tr.forEach(t),Ci=d(o),Jt=a(o,"H2",{class:!0});var fl=i(Jt);$o=a(fl,"A",{id:!0,class:!0,href:!0});var xg=i($o);Ca=a(xg,"SPAN",{});var Cg=i(Ca);k(ls.$$.fragment,Cg),Cg.forEach(t),xg.forEach(t),Nh=d(fl),Ra=a(fl,"SPAN",{});var Rg=i(Ra);Oh=s(Rg,"TFDebertaV2ForMaskedLM"),Rg.forEach(t),fl.forEach(t),Ri=d(o),Le=a(o,"DIV",{class:!0});var yt=i(Le);k(ds.$$.fragment,yt),Wh=d(yt),Xt=a(yt,"P",{});var kr=i(Xt);Hh=s(kr,"DeBERTa Model with a "),Pa=a(kr,"EM",{});var Pg=i(Pa);Uh=s(Pg,"language modeling"),Pg.forEach(t),Qh=s(kr,` head on top.
The DeBERTa model was proposed in `),cs=a(kr,"A",{href:!0,rel:!0});var Bg=i(cs);Gh=s(Bg,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Bg.forEach(t),Kh=s(kr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kr.forEach(t),Jh=d(yt),ps=a(yt,"P",{});var ml=i(ps);Xh=s(ml,"This model is also a "),hs=a(ml,"A",{href:!0,rel:!0});var jg=i(hs);Yh=s(jg,"tf.keras.Model"),jg.forEach(t),Zh=s(ml,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ml.forEach(t),ef=d(yt),k(Fo.$$.fragment,yt),tf=d(yt),He=a(yt,"DIV",{class:!0});var Dt=i(He);k(fs.$$.fragment,Dt),of=d(Dt),Yt=a(Dt,"P",{});var wr=i(Yt);nf=s(wr,"The "),tr=a(wr,"A",{href:!0});var Ag=i(tr);sf=s(Ag,"TFDebertaV2ForMaskedLM"),Ag.forEach(t),rf=s(wr," forward method, overrides the "),Ba=a(wr,"CODE",{});var Lg=i(Ba);af=s(Lg,"__call__"),Lg.forEach(t),lf=s(wr," special method."),wr.forEach(t),df=d(Dt),k(Vo.$$.fragment,Dt),cf=d(Dt),ja=a(Dt,"P",{});var Ig=i(ja);pf=s(Ig,"Example:"),Ig.forEach(t),hf=d(Dt),k(ms.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),Pi=d(o),Zt=a(o,"H2",{class:!0});var ul=i(Zt);zo=a(ul,"A",{id:!0,class:!0,href:!0});var Sg=i(zo);Aa=a(Sg,"SPAN",{});var Ng=i(Aa);k(us.$$.fragment,Ng),Ng.forEach(t),Sg.forEach(t),ff=d(ul),La=a(ul,"SPAN",{});var Og=i(La);mf=s(Og,"TFDebertaV2ForSequenceClassification"),Og.forEach(t),ul.forEach(t),Bi=d(o),Me=a(o,"DIV",{class:!0});var st=i(Me);k(gs.$$.fragment,st),uf=d(st),Ia=a(st,"P",{});var Wg=i(Ia);gf=s(Wg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wg.forEach(t),_f=d(st),_s=a(st,"P",{});var gl=i(_s);bf=s(gl,"The DeBERTa model was proposed in "),bs=a(gl,"A",{href:!0,rel:!0});var Hg=i(bs);vf=s(Hg,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Hg.forEach(t),Tf=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),kf=d(st),vs=a(st,"P",{});var _l=i(vs);wf=s(_l,"This model is also a "),Ts=a(_l,"A",{href:!0,rel:!0});var Ug=i(Ts);yf=s(Ug,"tf.keras.Model"),Ug.forEach(t),Df=s(_l,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),_l.forEach(t),Ef=d(st),k(Mo.$$.fragment,st),$f=d(st),Ue=a(st,"DIV",{class:!0});var Et=i(Ue);k(ks.$$.fragment,Et),Ff=d(Et),eo=a(Et,"P",{});var yr=i(eo);Vf=s(yr,"The "),or=a(yr,"A",{href:!0});var Qg=i(or);zf=s(Qg,"TFDebertaV2ForSequenceClassification"),Qg.forEach(t),Mf=s(yr," forward method, overrides the "),Sa=a(yr,"CODE",{});var Gg=i(Sa);qf=s(Gg,"__call__"),Gg.forEach(t),xf=s(yr," special method."),yr.forEach(t),Cf=d(Et),k(qo.$$.fragment,Et),Rf=d(Et),Na=a(Et,"P",{});var Kg=i(Na);Pf=s(Kg,"Example:"),Kg.forEach(t),Bf=d(Et),k(ws.$$.fragment,Et),Et.forEach(t),st.forEach(t),ji=d(o),to=a(o,"H2",{class:!0});var bl=i(to);xo=a(bl,"A",{id:!0,class:!0,href:!0});var Jg=i(xo);Oa=a(Jg,"SPAN",{});var Xg=i(Oa);k(ys.$$.fragment,Xg),Xg.forEach(t),Jg.forEach(t),jf=d(bl),Wa=a(bl,"SPAN",{});var Yg=i(Wa);Af=s(Yg,"TFDebertaV2ForTokenClassification"),Yg.forEach(t),bl.forEach(t),Ai=d(o),qe=a(o,"DIV",{class:!0});var rt=i(qe);k(Ds.$$.fragment,rt),Lf=d(rt),Ha=a(rt,"P",{});var Zg=i(Ha);If=s(Zg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Zg.forEach(t),Sf=d(rt),Es=a(rt,"P",{});var vl=i(Es);Nf=s(vl,"The DeBERTa model was proposed in "),$s=a(vl,"A",{href:!0,rel:!0});var e_=i($s);Of=s(e_,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),e_.forEach(t),Wf=s(vl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vl.forEach(t),Hf=d(rt),Fs=a(rt,"P",{});var Tl=i(Fs);Uf=s(Tl,"This model is also a "),Vs=a(Tl,"A",{href:!0,rel:!0});var t_=i(Vs);Qf=s(t_,"tf.keras.Model"),t_.forEach(t),Gf=s(Tl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Tl.forEach(t),Kf=d(rt),k(Co.$$.fragment,rt),Jf=d(rt),Qe=a(rt,"DIV",{class:!0});var $t=i(Qe);k(zs.$$.fragment,$t),Xf=d($t),oo=a($t,"P",{});var Dr=i(oo);Yf=s(Dr,"The "),nr=a(Dr,"A",{href:!0});var o_=i(nr);Zf=s(o_,"TFDebertaV2ForTokenClassification"),o_.forEach(t),em=s(Dr," forward method, overrides the "),Ua=a(Dr,"CODE",{});var n_=i(Ua);tm=s(n_,"__call__"),n_.forEach(t),om=s(Dr," special method."),Dr.forEach(t),nm=d($t),k(Ro.$$.fragment,$t),sm=d($t),Qa=a($t,"P",{});var s_=i(Qa);rm=s(s_,"Example:"),s_.forEach(t),am=d($t),k(Ms.$$.fragment,$t),$t.forEach(t),rt.forEach(t),Li=d(o),no=a(o,"H2",{class:!0});var kl=i(no);Po=a(kl,"A",{id:!0,class:!0,href:!0});var r_=i(Po);Ga=a(r_,"SPAN",{});var a_=i(Ga);k(qs.$$.fragment,a_),a_.forEach(t),r_.forEach(t),im=d(kl),Ka=a(kl,"SPAN",{});var i_=i(Ka);lm=s(i_,"TFDebertaV2ForQuestionAnswering"),i_.forEach(t),kl.forEach(t),Ii=d(o),xe=a(o,"DIV",{class:!0});var at=i(xe);k(xs.$$.fragment,at),dm=d(at),so=a(at,"P",{});var Er=i(so);cm=s(Er,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ja=a(Er,"EM",{});var l_=i(Ja);pm=s(l_,"span start logits"),l_.forEach(t),hm=s(Er," and "),Xa=a(Er,"EM",{});var d_=i(Xa);fm=s(d_,"span end logits"),d_.forEach(t),mm=s(Er,")."),Er.forEach(t),um=d(at),Cs=a(at,"P",{});var wl=i(Cs);gm=s(wl,"The DeBERTa model was proposed in "),Rs=a(wl,"A",{href:!0,rel:!0});var c_=i(Rs);_m=s(c_,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),c_.forEach(t),bm=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build on top of
BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),vm=d(at),Ps=a(at,"P",{});var yl=i(Ps);Tm=s(yl,"This model is also a "),Bs=a(yl,"A",{href:!0,rel:!0});var p_=i(Bs);km=s(p_,"tf.keras.Model"),p_.forEach(t),wm=s(yl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),yl.forEach(t),ym=d(at),k(Bo.$$.fragment,at),Dm=d(at),Ge=a(at,"DIV",{class:!0});var Ft=i(Ge);k(js.$$.fragment,Ft),Em=d(Ft),ro=a(Ft,"P",{});var $r=i(ro);$m=s($r,"The "),sr=a($r,"A",{href:!0});var h_=i(sr);Fm=s(h_,"TFDebertaV2ForQuestionAnswering"),h_.forEach(t),Vm=s($r," forward method, overrides the "),Ya=a($r,"CODE",{});var f_=i(Ya);zm=s(f_,"__call__"),f_.forEach(t),Mm=s($r," special method."),$r.forEach(t),qm=d(Ft),k(jo.$$.fragment,Ft),xm=d(Ft),Za=a(Ft,"P",{});var m_=i(Za);Cm=s(m_,"Example:"),m_.forEach(t),Rm=d(Ft),k(As.$$.fragment,Ft),Ft.forEach(t),at.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(B_)),c(g,"id","debertav2"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(j,"href","https://github.com/microsoft/DeBERTa"),c(j,"rel","nofollow"),c(R,"href","https://github.com/microsoft/DeBERTa"),c(R,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Ho,"href","https://huggingface.co/DeBERTa"),c(Ho,"rel","nofollow"),c(Uo,"href","https://huggingface.co/kamalkraj"),c(Uo,"rel","nofollow"),c(Qo,"href","https://github.com/microsoft/DeBERTa"),c(Qo,"rel","nofollow"),c(ao,"id","transformers.DebertaV2Config"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(Us,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Model"),c(Jo,"href","https://huggingface.co/microsoft/deberta-base"),c(Jo,"rel","nofollow"),c(Qs,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Gs,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(lt,"class","docstring"),c(io,"id","transformers.DebertaV2Tokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaV2Tokenizer"),c(qt,"class","relative group"),c(en,"href","https://github.com/google/sentencepiece"),c(en,"rel","nofollow"),c(pt,"class","docstring"),c(lo,"class","docstring"),c(et,"class","docstring"),c(Nr,"class","docstring"),c(ze,"class","docstring"),c(co,"id","transformers.DebertaV2Model"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.DebertaV2Model"),c(Rt,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Ks,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2Model"),c(Ie,"class","docstring"),c(Je,"class","docstring"),c(ho,"id","transformers.DebertaV2PreTrainedModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2PreTrainedModel"),c(Bt,"class","relative group"),c(tt,"class","docstring"),c(dt,"class","docstring"),c(mo,"id","transformers.DebertaV2ForMaskedLM"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaV2ForMaskedLM"),c(jt,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2006.03654"),c(Tn,"rel","nofollow"),c(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wn,"rel","nofollow"),c(Js,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2ForMaskedLM"),c(Se,"class","docstring"),c(Xe,"class","docstring"),c(go,"id","transformers.DebertaV2ForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(Vn,"href","https://arxiv.org/abs/2006.03654"),c(Vn,"rel","nofollow"),c(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mn,"rel","nofollow"),c(Xs,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2ForSequenceClassification"),c(Ve,"class","docstring"),c(Pe,"class","docstring"),c(bo,"id","transformers.DebertaV2ForTokenClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2ForTokenClassification"),c(Nt,"class","relative group"),c(jn,"href","https://arxiv.org/abs/2006.03654"),c(jn,"rel","nofollow"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(Ys,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2ForTokenClassification"),c(Ne,"class","docstring"),c(Be,"class","docstring"),c(To,"id","transformers.DebertaV2ForQuestionAnswering"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Hn,"href","https://arxiv.org/abs/2006.03654"),c(Hn,"rel","nofollow"),c(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qn,"rel","nofollow"),c(Zs,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.DebertaV2ForQuestionAnswering"),c(Oe,"class","docstring"),c(je,"class","docstring"),c(wo,"id","transformers.TFDebertaV2Model"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(Zn,"href","https://arxiv.org/abs/2006.03654"),c(Zn,"rel","nofollow"),c(ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ts,"rel","nofollow"),c(er,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.TFDebertaV2Model"),c(We,"class","docstring"),c(Ae,"class","docstring"),c(Eo,"id","transformers.TFDebertaV2PreTrainedModel"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(ot,"class","docstring"),c(ct,"class","docstring"),c($o,"id","transformers.TFDebertaV2ForMaskedLM"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(cs,"href","https://arxiv.org/abs/2006.03654"),c(cs,"rel","nofollow"),c(hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hs,"rel","nofollow"),c(tr,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.TFDebertaV2ForMaskedLM"),c(He,"class","docstring"),c(Le,"class","docstring"),c(zo,"id","transformers.TFDebertaV2ForSequenceClassification"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c(bs,"href","https://arxiv.org/abs/2006.03654"),c(bs,"rel","nofollow"),c(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ts,"rel","nofollow"),c(or,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.TFDebertaV2ForSequenceClassification"),c(Ue,"class","docstring"),c(Me,"class","docstring"),c(xo,"id","transformers.TFDebertaV2ForTokenClassification"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaV2ForTokenClassification"),c(to,"class","relative group"),c($s,"href","https://arxiv.org/abs/2006.03654"),c($s,"rel","nofollow"),c(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vs,"rel","nofollow"),c(nr,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.TFDebertaV2ForTokenClassification"),c(Qe,"class","docstring"),c(qe,"class","docstring"),c(Po,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(no,"class","relative group"),c(Rs,"href","https://arxiv.org/abs/2006.03654"),c(Rs,"rel","nofollow"),c(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bs,"rel","nofollow"),c(sr,"href","/docs/transformers/master/en/model_doc/deberta_v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Ge,"class","docstring"),c(xe,"class","docstring")},m(o,m){e(document.head,h),f(o,$,m),f(o,u,m),e(u,g),e(g,v),w(b,v,null),e(u,_),e(u,V),e(V,de),f(o,K,m),f(o,z,m),e(z,Y),e(Y,I),w(ee,I,null),e(z,ce),e(z,S),e(S,pe),f(o,ae,m),f(o,O,m),e(O,P),e(O,te),e(te,Z),e(O,M),f(o,x,m),f(o,ne,m),e(ne,W),f(o,ie,m),f(o,se,m),e(se,H),f(o,le,m),f(o,re,m),e(re,q),e(q,he),e(q,j),e(j,fe),e(q,me),f(o,N,m),f(o,J,m),e(J,ue),e(J,R),e(R,ge),e(J,U),e(J,oe),e(oe,p),f(o,F,m),f(o,G,m),e(G,ye),f(o,we,m),f(o,C,m),e(C,_e),e(_e,Te),e(Te,De),e(_e,B),e(_e,A),e(A,Ee),e(_e,$e),e(C,Q),e(C,ve),e(ve,ke),e(ke,be),e(ve,Fe),e(C,Dl),e(C,Os),e(Os,Fr),e(Fr,El),e(Os,$l),e(C,Fl),e(C,Ws),e(Ws,Vr),e(Vr,Vl),e(Ws,zl),e(C,Ml),e(C,Hs),e(Hs,zr),e(zr,ql),e(Hs,xl),f(o,hi,m),f(o,Ze,m),e(Ze,Cl),e(Ze,Ho),e(Ho,Rl),e(Ze,Pl),e(Ze,Uo),e(Uo,Bl),e(Ze,jl),e(Ze,Qo),e(Qo,Al),e(Ze,Ll),f(o,fi,m),f(o,Vt,m),e(Vt,ao),e(ao,Mr),w(Go,Mr,null),e(Vt,Il),e(Vt,qr),e(qr,Sl),f(o,mi,m),f(o,lt,m),w(Ko,lt,null),e(lt,Nl),e(lt,zt),e(zt,Ol),e(zt,Us),e(Us,Wl),e(zt,Hl),e(zt,Jo),e(Jo,Ul),e(zt,Ql),e(lt,Gl),e(lt,Mt),e(Mt,Kl),e(Mt,Qs),e(Qs,Jl),e(Mt,Xl),e(Mt,Gs),e(Gs,Yl),e(Mt,Zl),f(o,ui,m),f(o,qt,m),e(qt,io),e(io,xr),w(Xo,xr,null),e(qt,ed),e(qt,Cr),e(Cr,td),f(o,gi,m),f(o,ze,m),w(Yo,ze,null),e(ze,od),e(ze,Zo),e(Zo,nd),e(Zo,en),e(en,sd),e(Zo,rd),e(ze,ad),e(ze,pt),w(tn,pt,null),e(pt,id),e(pt,Rr),e(Rr,ld),e(pt,dd),e(pt,on),e(on,Pr),e(Pr,cd),e(on,pd),e(on,Br),e(Br,hd),e(ze,fd),e(ze,lo),w(nn,lo,null),e(lo,md),e(lo,xt),e(xt,ud),e(xt,jr),e(jr,gd),e(xt,_d),e(xt,Ar),e(Ar,bd),e(xt,vd),e(ze,Td),e(ze,et),w(sn,et,null),e(et,kd),e(et,Lr),e(Lr,wd),e(et,yd),w(rn,et,null),e(et,Dd),e(et,Ct),e(Ct,Ed),e(Ct,Ir),e(Ir,$d),e(Ct,Fd),e(Ct,Sr),e(Sr,Vd),e(Ct,zd),e(ze,Md),e(ze,Nr),f(o,_i,m),f(o,Rt,m),e(Rt,co),e(co,Or),w(an,Or,null),e(Rt,qd),e(Rt,Wr),e(Wr,xd),f(o,bi,m),f(o,Je,m),w(ln,Je,null),e(Je,Cd),e(Je,dn),e(dn,Rd),e(dn,cn),e(cn,Pd),e(dn,Bd),e(Je,jd),e(Je,pn),e(pn,Ad),e(pn,hn),e(hn,Ld),e(pn,Id),e(Je,Sd),e(Je,Ie),w(fn,Ie,null),e(Ie,Nd),e(Ie,Pt),e(Pt,Od),e(Pt,Ks),e(Ks,Wd),e(Pt,Hd),e(Pt,Hr),e(Hr,Ud),e(Pt,Qd),e(Ie,Gd),w(po,Ie,null),e(Ie,Kd),e(Ie,Ur),e(Ur,Jd),e(Ie,Xd),w(mn,Ie,null),f(o,vi,m),f(o,Bt,m),e(Bt,ho),e(ho,Qr),w(un,Qr,null),e(Bt,Yd),e(Bt,Gr),e(Gr,Zd),f(o,Ti,m),f(o,dt,m),w(gn,dt,null),e(dt,ec),e(dt,Kr),e(Kr,tc),e(dt,oc),e(dt,tt),w(_n,tt,null),e(tt,nc),e(tt,Jr),e(Jr,sc),e(tt,rc),e(tt,Xr),e(Xr,ac),e(tt,ic),w(fo,tt,null),f(o,ki,m),f(o,jt,m),e(jt,mo),e(mo,Yr),w(bn,Yr,null),e(jt,lc),e(jt,Zr),e(Zr,dc),f(o,wi,m),f(o,Xe,m),w(vn,Xe,null),e(Xe,cc),e(Xe,At),e(At,pc),e(At,ea),e(ea,hc),e(At,fc),e(At,Tn),e(Tn,mc),e(At,uc),e(Xe,gc),e(Xe,kn),e(kn,_c),e(kn,wn),e(wn,bc),e(kn,vc),e(Xe,Tc),e(Xe,Se),w(yn,Se,null),e(Se,kc),e(Se,Lt),e(Lt,wc),e(Lt,Js),e(Js,yc),e(Lt,Dc),e(Lt,ta),e(ta,Ec),e(Lt,$c),e(Se,Fc),w(uo,Se,null),e(Se,Vc),e(Se,oa),e(oa,zc),e(Se,Mc),w(Dn,Se,null),f(o,yi,m),f(o,It,m),e(It,go),e(go,na),w(En,na,null),e(It,qc),e(It,sa),e(sa,xc),f(o,Di,m),f(o,Pe,m),w($n,Pe,null),e(Pe,Cc),e(Pe,ra),e(ra,Rc),e(Pe,Pc),e(Pe,Fn),e(Fn,Bc),e(Fn,Vn),e(Vn,jc),e(Fn,Ac),e(Pe,Lc),e(Pe,zn),e(zn,Ic),e(zn,Mn),e(Mn,Sc),e(zn,Nc),e(Pe,Oc),e(Pe,Ve),w(qn,Ve,null),e(Ve,Wc),e(Ve,St),e(St,Hc),e(St,Xs),e(Xs,Uc),e(St,Qc),e(St,aa),e(aa,Gc),e(St,Kc),e(Ve,Jc),w(_o,Ve,null),e(Ve,Xc),e(Ve,ia),e(ia,Yc),e(Ve,Zc),w(xn,Ve,null),e(Ve,ep),e(Ve,la),e(la,tp),e(Ve,op),w(Cn,Ve,null),f(o,Ei,m),f(o,Nt,m),e(Nt,bo),e(bo,da),w(Rn,da,null),e(Nt,np),e(Nt,ca),e(ca,sp),f(o,$i,m),f(o,Be,m),w(Pn,Be,null),e(Be,rp),e(Be,pa),e(pa,ap),e(Be,ip),e(Be,Bn),e(Bn,lp),e(Bn,jn),e(jn,dp),e(Bn,cp),e(Be,pp),e(Be,An),e(An,hp),e(An,Ln),e(Ln,fp),e(An,mp),e(Be,up),e(Be,Ne),w(In,Ne,null),e(Ne,gp),e(Ne,Ot),e(Ot,_p),e(Ot,Ys),e(Ys,bp),e(Ot,vp),e(Ot,ha),e(ha,Tp),e(Ot,kp),e(Ne,wp),w(vo,Ne,null),e(Ne,yp),e(Ne,fa),e(fa,Dp),e(Ne,Ep),w(Sn,Ne,null),f(o,Fi,m),f(o,Wt,m),e(Wt,To),e(To,ma),w(Nn,ma,null),e(Wt,$p),e(Wt,ua),e(ua,Fp),f(o,Vi,m),f(o,je,m),w(On,je,null),e(je,Vp),e(je,Ht),e(Ht,zp),e(Ht,ga),e(ga,Mp),e(Ht,qp),e(Ht,_a),e(_a,xp),e(Ht,Cp),e(je,Rp),e(je,Wn),e(Wn,Pp),e(Wn,Hn),e(Hn,Bp),e(Wn,jp),e(je,Ap),e(je,Un),e(Un,Lp),e(Un,Qn),e(Qn,Ip),e(Un,Sp),e(je,Np),e(je,Oe),w(Gn,Oe,null),e(Oe,Op),e(Oe,Ut),e(Ut,Wp),e(Ut,Zs),e(Zs,Hp),e(Ut,Up),e(Ut,ba),e(ba,Qp),e(Ut,Gp),e(Oe,Kp),w(ko,Oe,null),e(Oe,Jp),e(Oe,va),e(va,Xp),e(Oe,Yp),w(Kn,Oe,null),f(o,zi,m),f(o,Qt,m),e(Qt,wo),e(wo,Ta),w(Jn,Ta,null),e(Qt,Zp),e(Qt,ka),e(ka,eh),f(o,Mi,m),f(o,Ae,m),w(Xn,Ae,null),e(Ae,th),e(Ae,Yn),e(Yn,oh),e(Yn,Zn),e(Zn,nh),e(Yn,sh),e(Ae,rh),e(Ae,es),e(es,ah),e(es,ts),e(ts,ih),e(es,lh),e(Ae,dh),w(yo,Ae,null),e(Ae,ch),e(Ae,We),w(os,We,null),e(We,ph),e(We,Gt),e(Gt,hh),e(Gt,er),e(er,fh),e(Gt,mh),e(Gt,wa),e(wa,uh),e(Gt,gh),e(We,_h),w(Do,We,null),e(We,bh),e(We,ya),e(ya,vh),e(We,Th),w(ns,We,null),f(o,qi,m),f(o,Kt,m),e(Kt,Eo),e(Eo,Da),w(ss,Da,null),e(Kt,kh),e(Kt,Ea),e(Ea,wh),f(o,xi,m),f(o,ct,m),w(rs,ct,null),e(ct,yh),e(ct,$a),e($a,Dh),e(ct,Eh),e(ct,ot),w(as,ot,null),e(ot,$h),e(ot,Fa),e(Fa,Fh),e(ot,Vh),e(ot,is),e(is,zh),e(is,Va),e(Va,Mh),e(is,qh),e(ot,xh),e(ot,Ye),e(Ye,Ch),e(Ye,za),e(za,Rh),e(Ye,Ph),e(Ye,Ma),e(Ma,Bh),e(Ye,jh),e(Ye,qa),e(qa,Ah),e(Ye,Lh),e(Ye,xa),e(xa,Ih),e(Ye,Sh),f(o,Ci,m),f(o,Jt,m),e(Jt,$o),e($o,Ca),w(ls,Ca,null),e(Jt,Nh),e(Jt,Ra),e(Ra,Oh),f(o,Ri,m),f(o,Le,m),w(ds,Le,null),e(Le,Wh),e(Le,Xt),e(Xt,Hh),e(Xt,Pa),e(Pa,Uh),e(Xt,Qh),e(Xt,cs),e(cs,Gh),e(Xt,Kh),e(Le,Jh),e(Le,ps),e(ps,Xh),e(ps,hs),e(hs,Yh),e(ps,Zh),e(Le,ef),w(Fo,Le,null),e(Le,tf),e(Le,He),w(fs,He,null),e(He,of),e(He,Yt),e(Yt,nf),e(Yt,tr),e(tr,sf),e(Yt,rf),e(Yt,Ba),e(Ba,af),e(Yt,lf),e(He,df),w(Vo,He,null),e(He,cf),e(He,ja),e(ja,pf),e(He,hf),w(ms,He,null),f(o,Pi,m),f(o,Zt,m),e(Zt,zo),e(zo,Aa),w(us,Aa,null),e(Zt,ff),e(Zt,La),e(La,mf),f(o,Bi,m),f(o,Me,m),w(gs,Me,null),e(Me,uf),e(Me,Ia),e(Ia,gf),e(Me,_f),e(Me,_s),e(_s,bf),e(_s,bs),e(bs,vf),e(_s,Tf),e(Me,kf),e(Me,vs),e(vs,wf),e(vs,Ts),e(Ts,yf),e(vs,Df),e(Me,Ef),w(Mo,Me,null),e(Me,$f),e(Me,Ue),w(ks,Ue,null),e(Ue,Ff),e(Ue,eo),e(eo,Vf),e(eo,or),e(or,zf),e(eo,Mf),e(eo,Sa),e(Sa,qf),e(eo,xf),e(Ue,Cf),w(qo,Ue,null),e(Ue,Rf),e(Ue,Na),e(Na,Pf),e(Ue,Bf),w(ws,Ue,null),f(o,ji,m),f(o,to,m),e(to,xo),e(xo,Oa),w(ys,Oa,null),e(to,jf),e(to,Wa),e(Wa,Af),f(o,Ai,m),f(o,qe,m),w(Ds,qe,null),e(qe,Lf),e(qe,Ha),e(Ha,If),e(qe,Sf),e(qe,Es),e(Es,Nf),e(Es,$s),e($s,Of),e(Es,Wf),e(qe,Hf),e(qe,Fs),e(Fs,Uf),e(Fs,Vs),e(Vs,Qf),e(Fs,Gf),e(qe,Kf),w(Co,qe,null),e(qe,Jf),e(qe,Qe),w(zs,Qe,null),e(Qe,Xf),e(Qe,oo),e(oo,Yf),e(oo,nr),e(nr,Zf),e(oo,em),e(oo,Ua),e(Ua,tm),e(oo,om),e(Qe,nm),w(Ro,Qe,null),e(Qe,sm),e(Qe,Qa),e(Qa,rm),e(Qe,am),w(Ms,Qe,null),f(o,Li,m),f(o,no,m),e(no,Po),e(Po,Ga),w(qs,Ga,null),e(no,im),e(no,Ka),e(Ka,lm),f(o,Ii,m),f(o,xe,m),w(xs,xe,null),e(xe,dm),e(xe,so),e(so,cm),e(so,Ja),e(Ja,pm),e(so,hm),e(so,Xa),e(Xa,fm),e(so,mm),e(xe,um),e(xe,Cs),e(Cs,gm),e(Cs,Rs),e(Rs,_m),e(Cs,bm),e(xe,vm),e(xe,Ps),e(Ps,Tm),e(Ps,Bs),e(Bs,km),e(Ps,wm),e(xe,ym),w(Bo,xe,null),e(xe,Dm),e(xe,Ge),w(js,Ge,null),e(Ge,Em),e(Ge,ro),e(ro,$m),e(ro,sr),e(sr,Fm),e(ro,Vm),e(ro,Ya),e(Ya,zm),e(ro,Mm),e(Ge,qm),w(jo,Ge,null),e(Ge,xm),e(Ge,Za),e(Za,Cm),e(Ge,Rm),w(As,Ge,null),Si=!0},p(o,[m]){const Ls={};m&2&&(Ls.$$scope={dirty:m,ctx:o}),po.$set(Ls);const ei={};m&2&&(ei.$$scope={dirty:m,ctx:o}),fo.$set(ei);const ti={};m&2&&(ti.$$scope={dirty:m,ctx:o}),uo.$set(ti);const oi={};m&2&&(oi.$$scope={dirty:m,ctx:o}),_o.$set(oi);const Is={};m&2&&(Is.$$scope={dirty:m,ctx:o}),vo.$set(Is);const ni={};m&2&&(ni.$$scope={dirty:m,ctx:o}),ko.$set(ni);const si={};m&2&&(si.$$scope={dirty:m,ctx:o}),yo.$set(si);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),Do.$set(ri);const Ss={};m&2&&(Ss.$$scope={dirty:m,ctx:o}),Fo.$set(Ss);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),Vo.$set(ai);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),Mo.$set(ii);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),qo.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),Co.$set(di);const Ns={};m&2&&(Ns.$$scope={dirty:m,ctx:o}),Ro.$set(Ns);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),Bo.$set(ci);const Ao={};m&2&&(Ao.$$scope={dirty:m,ctx:o}),jo.$set(Ao)},i(o){Si||(y(b.$$.fragment,o),y(ee.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(ln.$$.fragment,o),y(fn.$$.fragment,o),y(po.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(fo.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y(yn.$$.fragment,o),y(uo.$$.fragment,o),y(Dn.$$.fragment,o),y(En.$$.fragment,o),y($n.$$.fragment,o),y(qn.$$.fragment,o),y(_o.$$.fragment,o),y(xn.$$.fragment,o),y(Cn.$$.fragment,o),y(Rn.$$.fragment,o),y(Pn.$$.fragment,o),y(In.$$.fragment,o),y(vo.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Gn.$$.fragment,o),y(ko.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(yo.$$.fragment,o),y(os.$$.fragment,o),y(Do.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(Fo.$$.fragment,o),y(fs.$$.fragment,o),y(Vo.$$.fragment,o),y(ms.$$.fragment,o),y(us.$$.fragment,o),y(gs.$$.fragment,o),y(Mo.$$.fragment,o),y(ks.$$.fragment,o),y(qo.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(Ds.$$.fragment,o),y(Co.$$.fragment,o),y(zs.$$.fragment,o),y(Ro.$$.fragment,o),y(Ms.$$.fragment,o),y(qs.$$.fragment,o),y(xs.$$.fragment,o),y(Bo.$$.fragment,o),y(js.$$.fragment,o),y(jo.$$.fragment,o),y(As.$$.fragment,o),Si=!0)},o(o){D(b.$$.fragment,o),D(ee.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(tn.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(rn.$$.fragment,o),D(an.$$.fragment,o),D(ln.$$.fragment,o),D(fn.$$.fragment,o),D(po.$$.fragment,o),D(mn.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(fo.$$.fragment,o),D(bn.$$.fragment,o),D(vn.$$.fragment,o),D(yn.$$.fragment,o),D(uo.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D($n.$$.fragment,o),D(qn.$$.fragment,o),D(_o.$$.fragment,o),D(xn.$$.fragment,o),D(Cn.$$.fragment,o),D(Rn.$$.fragment,o),D(Pn.$$.fragment,o),D(In.$$.fragment,o),D(vo.$$.fragment,o),D(Sn.$$.fragment,o),D(Nn.$$.fragment,o),D(On.$$.fragment,o),D(Gn.$$.fragment,o),D(ko.$$.fragment,o),D(Kn.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(yo.$$.fragment,o),D(os.$$.fragment,o),D(Do.$$.fragment,o),D(ns.$$.fragment,o),D(ss.$$.fragment,o),D(rs.$$.fragment,o),D(as.$$.fragment,o),D(ls.$$.fragment,o),D(ds.$$.fragment,o),D(Fo.$$.fragment,o),D(fs.$$.fragment,o),D(Vo.$$.fragment,o),D(ms.$$.fragment,o),D(us.$$.fragment,o),D(gs.$$.fragment,o),D(Mo.$$.fragment,o),D(ks.$$.fragment,o),D(qo.$$.fragment,o),D(ws.$$.fragment,o),D(ys.$$.fragment,o),D(Ds.$$.fragment,o),D(Co.$$.fragment,o),D(zs.$$.fragment,o),D(Ro.$$.fragment,o),D(Ms.$$.fragment,o),D(qs.$$.fragment,o),D(xs.$$.fragment,o),D(Bo.$$.fragment,o),D(js.$$.fragment,o),D(jo.$$.fragment,o),D(As.$$.fragment,o),Si=!1},d(o){t(h),o&&t($),o&&t(u),E(b),o&&t(K),o&&t(z),E(ee),o&&t(ae),o&&t(O),o&&t(x),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(re),o&&t(N),o&&t(J),o&&t(F),o&&t(G),o&&t(we),o&&t(C),o&&t(hi),o&&t(Ze),o&&t(fi),o&&t(Vt),E(Go),o&&t(mi),o&&t(lt),E(Ko),o&&t(ui),o&&t(qt),E(Xo),o&&t(gi),o&&t(ze),E(Yo),E(tn),E(nn),E(sn),E(rn),o&&t(_i),o&&t(Rt),E(an),o&&t(bi),o&&t(Je),E(ln),E(fn),E(po),E(mn),o&&t(vi),o&&t(Bt),E(un),o&&t(Ti),o&&t(dt),E(gn),E(_n),E(fo),o&&t(ki),o&&t(jt),E(bn),o&&t(wi),o&&t(Xe),E(vn),E(yn),E(uo),E(Dn),o&&t(yi),o&&t(It),E(En),o&&t(Di),o&&t(Pe),E($n),E(qn),E(_o),E(xn),E(Cn),o&&t(Ei),o&&t(Nt),E(Rn),o&&t($i),o&&t(Be),E(Pn),E(In),E(vo),E(Sn),o&&t(Fi),o&&t(Wt),E(Nn),o&&t(Vi),o&&t(je),E(On),E(Gn),E(ko),E(Kn),o&&t(zi),o&&t(Qt),E(Jn),o&&t(Mi),o&&t(Ae),E(Xn),E(yo),E(os),E(Do),E(ns),o&&t(qi),o&&t(Kt),E(ss),o&&t(xi),o&&t(ct),E(rs),E(as),o&&t(Ci),o&&t(Jt),E(ls),o&&t(Ri),o&&t(Le),E(ds),E(Fo),E(fs),E(Vo),E(ms),o&&t(Pi),o&&t(Zt),E(us),o&&t(Bi),o&&t(Me),E(gs),E(Mo),E(ks),E(qo),E(ws),o&&t(ji),o&&t(to),E(ys),o&&t(Ai),o&&t(qe),E(Ds),E(Co),E(zs),E(Ro),E(Ms),o&&t(Li),o&&t(no),E(qs),o&&t(Ii),o&&t(xe),E(xs),E(Bo),E(js),E(jo),E(As)}}}const B_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function j_(L,h,$){let{fw:u}=h;return L.$$set=g=>{"fw"in g&&$(0,u=g.fw)},[u]}class W_ extends u_{constructor(h){super();g_(this,h,j_,P_,__,{fw:0})}}export{W_ as default,B_ as metadata};
