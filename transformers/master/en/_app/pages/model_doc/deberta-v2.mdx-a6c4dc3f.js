import{S as __,i as b_,s as v_,e as a,k as l,w as k,t as n,M as k_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as f,y as w,q as y,o as D,B as E}from"../../chunks/vendor-4833417e.js";import{T as xe}from"../../chunks/Tip-fffd6df1.js";import{D as K}from"../../chunks/Docstring-7b52c3d4.js";import{C as it}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Re}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function T_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function w_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a("code"),g=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function y_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function D_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function E_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function $_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function F_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,re,O,P,te,Z,z,C,ne,W,ie,se,H,le,ae,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),O=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=r(p,"UL",{});var G=i(g);v=r(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=r(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=r(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(x,"."),x.forEach(t),O=d(p),P=r(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=r(p,"UL",{});var B=i(z);C=r(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),ae=d(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=r(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=r(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function V_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function q_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,re,O,P,te,Z,z,C,ne,W,ie,se,H,le,ae,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),O=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=r(p,"UL",{});var G=i(g);v=r(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=r(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=r(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(x,"."),x.forEach(t),O=d(p),P=r(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=r(p,"UL",{});var B=i(z);C=r(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),ae=d(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=r(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=r(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function z_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function M_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,re,O,P,te,Z,z,C,ne,W,ie,se,H,le,ae,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),O=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=r(p,"UL",{});var G=i(g);v=r(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=r(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=r(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(x,"."),x.forEach(t),O=d(p),P=r(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=r(p,"UL",{});var B=i(z);C=r(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),ae=d(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=r(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=r(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function C_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function x_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,re,O,P,te,Z,z,C,ne,W,ie,se,H,le,ae,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),O=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=r(p,"UL",{});var G=i(g);v=r(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=r(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=r(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(x,"."),x.forEach(t),O=d(p),P=r(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=r(p,"UL",{});var B=i(z);C=r(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),ae=d(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=r(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=r(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function R_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function P_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,re,O,P,te,Z,z,C,ne,W,ie,se,H,le,ae,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),O=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=r(p,"UL",{});var G=i(g);v=r(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=r(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=r(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(x,"."),x.forEach(t),O=d(p),P=r(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=r(p,"UL",{});var B=i(z);C=r(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),ae=d(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=r(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=r(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function B_(L){let h,$,u,g,v;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function j_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,re,O,P,te,Z,z,C,ne,W,ie,se,H,le,ae,M,he,j,fe,me,N,X,ue,R,ge,U,oe,p,F,G,ye,we,x,_e,ke,De,B,A,Ee,$e,Q,ve,Te,be,Fe,El,Ws,qa,$l,Fl,Vl,Hs,za,ql,zl,Ml,Us,Ma,Cl,xl,fi,Ze,Rl,Ho,Pl,Bl,Uo,jl,Al,Qo,Ll,Il,mi,Vt,ro,Ca,Go,Sl,xa,Nl,ui,lt,Ko,Ol,qt,Wl,Qs,Hl,Ul,Jo,Ql,Gl,Kl,zt,Jl,Gs,Xl,Yl,Ks,Zl,ed,gi,Mt,io,Ra,Xo,td,Pa,od,_i,qe,Yo,nd,Zo,sd,en,ad,rd,id,pt,tn,ld,Ba,dd,cd,on,ja,pd,hd,Aa,fd,md,lo,nn,ud,Ct,gd,La,_d,bd,Ia,vd,kd,Td,et,sn,wd,Sa,yd,Dd,an,Ed,xt,$d,Na,Fd,Vd,Oa,qd,zd,Md,Js,rn,bi,Rt,co,Wa,ln,Cd,Ha,xd,vi,Je,dn,Rd,cn,Pd,pn,Bd,jd,Ad,hn,Ld,fn,Id,Sd,Nd,Ie,mn,Od,Pt,Wd,Xs,Hd,Ud,Ua,Qd,Gd,Kd,po,Jd,Qa,Xd,Yd,un,ki,Bt,ho,Ga,gn,Zd,Ka,ec,Ti,dt,_n,tc,Ja,oc,nc,tt,bn,sc,Xa,ac,rc,Ya,ic,lc,fo,wi,jt,mo,Za,vn,dc,er,cc,yi,Xe,kn,pc,At,hc,tr,fc,mc,Tn,uc,gc,_c,wn,bc,yn,vc,kc,Tc,Se,Dn,wc,Lt,yc,Ys,Dc,Ec,or,$c,Fc,Vc,uo,qc,nr,zc,Mc,En,Di,It,go,sr,$n,Cc,ar,xc,Ei,Pe,Fn,Rc,rr,Pc,Bc,Vn,jc,qn,Ac,Lc,Ic,zn,Sc,Mn,Nc,Oc,Wc,Ve,Cn,Hc,St,Uc,Zs,Qc,Gc,ir,Kc,Jc,Xc,_o,Yc,lr,Zc,ep,xn,tp,dr,op,np,Rn,$i,Nt,bo,cr,Pn,sp,pr,ap,Fi,Be,Bn,rp,hr,ip,lp,jn,dp,An,cp,pp,hp,Ln,fp,In,mp,up,gp,Ne,Sn,_p,Ot,bp,ea,vp,kp,fr,Tp,wp,yp,vo,Dp,mr,Ep,$p,Nn,Vi,Wt,ko,ur,On,Fp,gr,Vp,qi,je,Wn,qp,Ht,zp,_r,Mp,Cp,br,xp,Rp,Pp,Hn,Bp,Un,jp,Ap,Lp,Qn,Ip,Gn,Sp,Np,Op,Oe,Kn,Wp,Ut,Hp,ta,Up,Qp,vr,Gp,Kp,Jp,To,Xp,kr,Yp,Zp,Jn,zi,Qt,wo,Tr,Xn,eh,wr,th,Mi,Ae,Yn,oh,Zn,nh,es,sh,ah,rh,ts,ih,os,lh,dh,ch,yo,ph,We,ns,hh,Gt,fh,oa,mh,uh,yr,gh,_h,bh,Do,vh,Dr,kh,Th,ss,Ci,Kt,Eo,Er,as,wh,$r,yh,xi,ct,rs,Dh,Fr,Eh,$h,ot,is,Fh,Vr,Vh,qh,ls,zh,qr,Mh,Ch,xh,Ye,Rh,zr,Ph,Bh,Mr,jh,Ah,Cr,Lh,Ih,xr,Sh,Nh,Ri,Jt,$o,Rr,ds,Oh,Pr,Wh,Pi,Le,cs,Hh,Xt,Uh,Br,Qh,Gh,ps,Kh,Jh,Xh,hs,Yh,fs,Zh,ef,tf,Fo,of,He,ms,nf,Yt,sf,na,af,rf,jr,lf,df,cf,Vo,pf,Ar,hf,ff,us,Bi,Zt,qo,Lr,gs,mf,Ir,uf,ji,ze,_s,gf,Sr,_f,bf,bs,vf,vs,kf,Tf,wf,ks,yf,Ts,Df,Ef,$f,zo,Ff,Ue,ws,Vf,eo,qf,sa,zf,Mf,Nr,Cf,xf,Rf,Mo,Pf,Or,Bf,jf,ys,Ai,to,Co,Wr,Ds,Af,Hr,Lf,Li,Me,Es,If,Ur,Sf,Nf,$s,Of,Fs,Wf,Hf,Uf,Vs,Qf,qs,Gf,Kf,Jf,xo,Xf,Qe,zs,Yf,oo,Zf,aa,em,tm,Qr,om,nm,sm,Ro,am,Gr,rm,im,Ms,Ii,no,Po,Kr,Cs,lm,Jr,dm,Si,Ce,xs,cm,so,pm,Xr,hm,fm,Yr,mm,um,gm,Rs,_m,Ps,bm,vm,km,Bs,Tm,js,wm,ym,Dm,Bo,Em,Ge,As,$m,ao,Fm,ra,Vm,qm,Zr,zm,Mm,Cm,jo,xm,ei,Rm,Pm,Ls,Ni;return b=new Re({}),ee=new Re({}),Go=new Re({}),Ko=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/master/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;, &quot;p2p&quot;]</code>, e.g.
<code>[&quot;p2c&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;, &apos;p2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xo=new Re({}),Yo=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
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
</ul>`,name:"sp_model_kwargs"}]}}),tn=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new it({props:{codee:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),rn=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),ln=new Re({}),dn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L994",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1018",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),po=new xe({props:{$$slots:{default:[T_]},$$scope:{ctx:L}}}),un=new it({props:{codee:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gn=new Re({}),_n=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L898"}}),bn=new K({props:{name:"_forward_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/master/src/torch/nn/modules/module.py#L190"}}),fo=new xe({props:{$$slots:{default:[w_]},$$scope:{ctx:L}}}),vn=new Re({}),kn=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1107",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1126",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),uo=new xe({props:{$$slots:{default:[y_]},$$scope:{ctx:L}}}),En=new it({props:{codee:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new Re({}),Fn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1243",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1268",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),_o=new xe({props:{$$slots:{default:[D_]},$$scope:{ctx:L}}}),xn=new it({props:{codee:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new it({props:{codee:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new Re({}),Bn=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1363",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Sn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1377",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),vo=new xe({props:{$$slots:{default:[E_]},$$scope:{ctx:L}}}),Nn=new it({props:{codee:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),On=new Re({}),Wn=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1440",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1453",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),To=new xe({props:{$$slots:{default:[$_]},$$scope:{ctx:L}}}),Jn=new it({props:{codee:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Xn=new Re({}),Yn=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1213",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new xe({props:{$$slots:{default:[F_]},$$scope:{ctx:L}}}),ns=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1219",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Do=new xe({props:{$$slots:{default:[V_]},$$scope:{ctx:L}}}),ss=new it({props:{codee:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),as=new Re({}),rs=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1117"}}),is=new K({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ds=new Re({}),cs=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1276",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new xe({props:{$$slots:{default:[q_]},$$scope:{ctx:L}}}),ms=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1292",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Vo=new xe({props:{$$slots:{default:[z_]},$$scope:{ctx:L}}}),us=new it({props:{codee:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gs=new Re({}),_s=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1379",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new xe({props:{$$slots:{default:[M_]},$$scope:{ctx:L}}}),ws=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Mo=new xe({props:{$$slots:{default:[C_]},$$scope:{ctx:L}}}),ys=new it({props:{codee:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ds=new Re({}),Es=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1483",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xo=new xe({props:{$$slots:{default:[x_]},$$scope:{ctx:L}}}),zs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1495",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Ro=new xe({props:{$$slots:{default:[R_]},$$scope:{ctx:L}}}),Ms=new it({props:{codee:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cs=new Re({}),xs=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1577",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new xe({props:{$$slots:{default:[P_]},$$scope:{ctx:L}}}),As=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1588",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),jo=new xe({props:{$$slots:{default:[B_]},$$scope:{ctx:L}}}),Ls=new it({props:{codee:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),$=l(),u=a("h1"),g=a("a"),v=a("span"),k(b.$$.fragment),_=l(),V=a("span"),de=n("DeBERTa-v2"),J=l(),q=a("h2"),Y=a("a"),I=a("span"),k(ee.$$.fragment),ce=l(),S=a("span"),pe=n("Overview"),re=l(),O=a("p"),P=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=a("p"),H=n("The abstract from the paper is the following:"),le=l(),ae=a("p"),M=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=a("a"),fe=n("https://github.com/microsoft/DeBERTa"),me=n("."),N=l(),X=a("p"),ue=n("The following information is visible directly on the "),R=a("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),p=n("blog"),F=l(),G=a("p"),ye=n("New in v2:"),we=l(),x=a("ul"),_e=a("li"),ke=a("strong"),De=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a("a"),Ee=n("sentencepiece-based"),$e=n(" tokenizer."),Q=l(),ve=a("li"),Te=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),Fe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),El=l(),Ws=a("li"),qa=a("strong"),$l=n("Sharing position projection matrix with content projection matrix in attention layer"),Fl=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Vl=l(),Hs=a("li"),za=a("strong"),ql=n("Apply bucket to encode relative positions"),zl=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Ml=l(),Us=a("li"),Ma=a("strong"),Cl=n("900M model & 1.5B model"),xl=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),fi=l(),Ze=a("p"),Rl=n("This model was contributed by "),Ho=a("a"),Pl=n("DeBERTa"),Bl=n(`. This model TF 2.0 implementation was
contributed by `),Uo=a("a"),jl=n("kamalkraj"),Al=n(". The original code can be found "),Qo=a("a"),Ll=n("here"),Il=n("."),mi=l(),Vt=a("h2"),ro=a("a"),Ca=a("span"),k(Go.$$.fragment),Sl=l(),xa=a("span"),Nl=n("DebertaV2Config"),ui=l(),lt=a("div"),k(Ko.$$.fragment),Ol=l(),qt=a("p"),Wl=n("This is the configuration class to store the configuration of a "),Qs=a("a"),Hl=n("DebertaV2Model"),Ul=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=a("a"),Ql=n("microsoft/deberta-v2-xlarge"),Gl=n(" architecture."),Kl=l(),zt=a("p"),Jl=n("Configuration objects inherit from "),Gs=a("a"),Xl=n("PretrainedConfig"),Yl=n(` and can be used to control the model outputs. Read the
documentation from `),Ks=a("a"),Zl=n("PretrainedConfig"),ed=n(" for more information."),gi=l(),Mt=a("h2"),io=a("a"),Ra=a("span"),k(Xo.$$.fragment),td=l(),Pa=a("span"),od=n("DebertaV2Tokenizer"),_i=l(),qe=a("div"),k(Yo.$$.fragment),nd=l(),Zo=a("p"),sd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),en=a("a"),ad=n("SentencePiece"),rd=n("."),id=l(),pt=a("div"),k(tn.$$.fragment),ld=l(),Ba=a("p"),dd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),cd=l(),on=a("ul"),ja=a("li"),pd=n("single sequence: [CLS] X [SEP]"),hd=l(),Aa=a("li"),fd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),md=l(),lo=a("div"),k(nn.$$.fragment),ud=l(),Ct=a("p"),gd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),La=a("code"),_d=n("prepare_for_model"),bd=n(" or "),Ia=a("code"),vd=n("encode_plus"),kd=n(" methods."),Td=l(),et=a("div"),k(sn.$$.fragment),wd=l(),Sa=a("p"),yd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Dd=l(),k(an.$$.fragment),Ed=l(),xt=a("p"),$d=n("If "),Na=a("code"),Fd=n("token_ids_1"),Vd=n(" is "),Oa=a("code"),qd=n("None"),zd=n(", this method only returns the first portion of the mask (0s)."),Md=l(),Js=a("div"),k(rn.$$.fragment),bi=l(),Rt=a("h2"),co=a("a"),Wa=a("span"),k(ln.$$.fragment),Cd=l(),Ha=a("span"),xd=n("DebertaV2Model"),vi=l(),Je=a("div"),k(dn.$$.fragment),Rd=l(),cn=a("p"),Pd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=a("a"),Bd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ad=l(),hn=a("p"),Ld=n("This model is also a PyTorch "),fn=a("a"),Id=n("torch.nn.Module"),Sd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Nd=l(),Ie=a("div"),k(mn.$$.fragment),Od=l(),Pt=a("p"),Wd=n("The "),Xs=a("a"),Hd=n("DebertaV2Model"),Ud=n(" forward method, overrides the "),Ua=a("code"),Qd=n("__call__"),Gd=n(" special method."),Kd=l(),k(po.$$.fragment),Jd=l(),Qa=a("p"),Xd=n("Example:"),Yd=l(),k(un.$$.fragment),ki=l(),Bt=a("h2"),ho=a("a"),Ga=a("span"),k(gn.$$.fragment),Zd=l(),Ka=a("span"),ec=n("DebertaV2PreTrainedModel"),Ti=l(),dt=a("div"),k(_n.$$.fragment),tc=l(),Ja=a("p"),oc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),nc=l(),tt=a("div"),k(bn.$$.fragment),sc=l(),Xa=a("p"),ac=n("Defines the computation performed at every call."),rc=l(),Ya=a("p"),ic=n("Should be overridden by all subclasses."),lc=l(),k(fo.$$.fragment),wi=l(),jt=a("h2"),mo=a("a"),Za=a("span"),k(vn.$$.fragment),dc=l(),er=a("span"),cc=n("DebertaV2ForMaskedLM"),yi=l(),Xe=a("div"),k(kn.$$.fragment),pc=l(),At=a("p"),hc=n("DeBERTa Model with a "),tr=a("code"),fc=n("language modeling"),mc=n(` head on top.
The DeBERTa model was proposed in `),Tn=a("a"),uc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_c=l(),wn=a("p"),bc=n("This model is also a PyTorch "),yn=a("a"),vc=n("torch.nn.Module"),kc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Tc=l(),Se=a("div"),k(Dn.$$.fragment),wc=l(),Lt=a("p"),yc=n("The "),Ys=a("a"),Dc=n("DebertaV2ForMaskedLM"),Ec=n(" forward method, overrides the "),or=a("code"),$c=n("__call__"),Fc=n(" special method."),Vc=l(),k(uo.$$.fragment),qc=l(),nr=a("p"),zc=n("Example:"),Mc=l(),k(En.$$.fragment),Di=l(),It=a("h2"),go=a("a"),sr=a("span"),k($n.$$.fragment),Cc=l(),ar=a("span"),xc=n("DebertaV2ForSequenceClassification"),Ei=l(),Pe=a("div"),k(Fn.$$.fragment),Rc=l(),rr=a("p"),Pc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bc=l(),Vn=a("p"),jc=n("The DeBERTa model was proposed in "),qn=a("a"),Ac=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ic=l(),zn=a("p"),Sc=n("This model is also a PyTorch "),Mn=a("a"),Nc=n("torch.nn.Module"),Oc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Wc=l(),Ve=a("div"),k(Cn.$$.fragment),Hc=l(),St=a("p"),Uc=n("The "),Zs=a("a"),Qc=n("DebertaV2ForSequenceClassification"),Gc=n(" forward method, overrides the "),ir=a("code"),Kc=n("__call__"),Jc=n(" special method."),Xc=l(),k(_o.$$.fragment),Yc=l(),lr=a("p"),Zc=n("Example of single-label classification:"),ep=l(),k(xn.$$.fragment),tp=l(),dr=a("p"),op=n("Example of multi-label classification:"),np=l(),k(Rn.$$.fragment),$i=l(),Nt=a("h2"),bo=a("a"),cr=a("span"),k(Pn.$$.fragment),sp=l(),pr=a("span"),ap=n("DebertaV2ForTokenClassification"),Fi=l(),Be=a("div"),k(Bn.$$.fragment),rp=l(),hr=a("p"),ip=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),lp=l(),jn=a("p"),dp=n("The DeBERTa model was proposed in "),An=a("a"),cp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hp=l(),Ln=a("p"),fp=n("This model is also a PyTorch "),In=a("a"),mp=n("torch.nn.Module"),up=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),gp=l(),Ne=a("div"),k(Sn.$$.fragment),_p=l(),Ot=a("p"),bp=n("The "),ea=a("a"),vp=n("DebertaV2ForTokenClassification"),kp=n(" forward method, overrides the "),fr=a("code"),Tp=n("__call__"),wp=n(" special method."),yp=l(),k(vo.$$.fragment),Dp=l(),mr=a("p"),Ep=n("Example:"),$p=l(),k(Nn.$$.fragment),Vi=l(),Wt=a("h2"),ko=a("a"),ur=a("span"),k(On.$$.fragment),Fp=l(),gr=a("span"),Vp=n("DebertaV2ForQuestionAnswering"),qi=l(),je=a("div"),k(Wn.$$.fragment),qp=l(),Ht=a("p"),zp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_r=a("code"),Mp=n("span start logits"),Cp=n(" and "),br=a("code"),xp=n("span end logits"),Rp=n(")."),Pp=l(),Hn=a("p"),Bp=n("The DeBERTa model was proposed in "),Un=a("a"),jp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ap=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lp=l(),Qn=a("p"),Ip=n("This model is also a PyTorch "),Gn=a("a"),Sp=n("torch.nn.Module"),Np=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Op=l(),Oe=a("div"),k(Kn.$$.fragment),Wp=l(),Ut=a("p"),Hp=n("The "),ta=a("a"),Up=n("DebertaV2ForQuestionAnswering"),Qp=n(" forward method, overrides the "),vr=a("code"),Gp=n("__call__"),Kp=n(" special method."),Jp=l(),k(To.$$.fragment),Xp=l(),kr=a("p"),Yp=n("Example:"),Zp=l(),k(Jn.$$.fragment),zi=l(),Qt=a("h2"),wo=a("a"),Tr=a("span"),k(Xn.$$.fragment),eh=l(),wr=a("span"),th=n("TFDebertaV2Model"),Mi=l(),Ae=a("div"),k(Yn.$$.fragment),oh=l(),Zn=a("p"),nh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),es=a("a"),sh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ah=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rh=l(),ts=a("p"),ih=n("This model is also a "),os=a("a"),lh=n("tf.keras.Model"),dh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ch=l(),k(yo.$$.fragment),ph=l(),We=a("div"),k(ns.$$.fragment),hh=l(),Gt=a("p"),fh=n("The "),oa=a("a"),mh=n("TFDebertaV2Model"),uh=n(" forward method, overrides the "),yr=a("code"),gh=n("__call__"),_h=n(" special method."),bh=l(),k(Do.$$.fragment),vh=l(),Dr=a("p"),kh=n("Example:"),Th=l(),k(ss.$$.fragment),Ci=l(),Kt=a("h2"),Eo=a("a"),Er=a("span"),k(as.$$.fragment),wh=l(),$r=a("span"),yh=n("TFDebertaV2PreTrainedModel"),xi=l(),ct=a("div"),k(rs.$$.fragment),Dh=l(),Fr=a("p"),Eh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),$h=l(),ot=a("div"),k(is.$$.fragment),Fh=l(),Vr=a("p"),Vh=n("Calls the model on new inputs and returns the outputs as tensors."),qh=l(),ls=a("p"),zh=n("In this case "),qr=a("code"),Mh=n("call()"),Ch=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),xh=l(),Ye=a("p"),Rh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),zr=a("code"),Ph=n("tf.keras.Model"),Bh=n(`.
To call a model on an input, always use the `),Mr=a("code"),jh=n("__call__()"),Ah=n(` method,
i.e. `),Cr=a("code"),Lh=n("model(inputs)"),Ih=n(", which relies on the underlying "),xr=a("code"),Sh=n("call()"),Nh=n(" method."),Ri=l(),Jt=a("h2"),$o=a("a"),Rr=a("span"),k(ds.$$.fragment),Oh=l(),Pr=a("span"),Wh=n("TFDebertaV2ForMaskedLM"),Pi=l(),Le=a("div"),k(cs.$$.fragment),Hh=l(),Xt=a("p"),Uh=n("DeBERTa Model with a "),Br=a("code"),Qh=n("language modeling"),Gh=n(` head on top.
The DeBERTa model was proposed in `),ps=a("a"),Kh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xh=l(),hs=a("p"),Yh=n("This model is also a "),fs=a("a"),Zh=n("tf.keras.Model"),ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tf=l(),k(Fo.$$.fragment),of=l(),He=a("div"),k(ms.$$.fragment),nf=l(),Yt=a("p"),sf=n("The "),na=a("a"),af=n("TFDebertaV2ForMaskedLM"),rf=n(" forward method, overrides the "),jr=a("code"),lf=n("__call__"),df=n(" special method."),cf=l(),k(Vo.$$.fragment),pf=l(),Ar=a("p"),hf=n("Example:"),ff=l(),k(us.$$.fragment),Bi=l(),Zt=a("h2"),qo=a("a"),Lr=a("span"),k(gs.$$.fragment),mf=l(),Ir=a("span"),uf=n("TFDebertaV2ForSequenceClassification"),ji=l(),ze=a("div"),k(_s.$$.fragment),gf=l(),Sr=a("p"),_f=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=l(),bs=a("p"),vf=n("The DeBERTa model was proposed in "),vs=a("a"),kf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wf=l(),ks=a("p"),yf=n("This model is also a "),Ts=a("a"),Df=n("tf.keras.Model"),Ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f=l(),k(zo.$$.fragment),Ff=l(),Ue=a("div"),k(ws.$$.fragment),Vf=l(),eo=a("p"),qf=n("The "),sa=a("a"),zf=n("TFDebertaV2ForSequenceClassification"),Mf=n(" forward method, overrides the "),Nr=a("code"),Cf=n("__call__"),xf=n(" special method."),Rf=l(),k(Mo.$$.fragment),Pf=l(),Or=a("p"),Bf=n("Example:"),jf=l(),k(ys.$$.fragment),Ai=l(),to=a("h2"),Co=a("a"),Wr=a("span"),k(Ds.$$.fragment),Af=l(),Hr=a("span"),Lf=n("TFDebertaV2ForTokenClassification"),Li=l(),Me=a("div"),k(Es.$$.fragment),If=l(),Ur=a("p"),Sf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Nf=l(),$s=a("p"),Of=n("The DeBERTa model was proposed in "),Fs=a("a"),Wf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Uf=l(),Vs=a("p"),Qf=n("This model is also a "),qs=a("a"),Gf=n("tf.keras.Model"),Kf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jf=l(),k(xo.$$.fragment),Xf=l(),Qe=a("div"),k(zs.$$.fragment),Yf=l(),oo=a("p"),Zf=n("The "),aa=a("a"),em=n("TFDebertaV2ForTokenClassification"),tm=n(" forward method, overrides the "),Qr=a("code"),om=n("__call__"),nm=n(" special method."),sm=l(),k(Ro.$$.fragment),am=l(),Gr=a("p"),rm=n("Example:"),im=l(),k(Ms.$$.fragment),Ii=l(),no=a("h2"),Po=a("a"),Kr=a("span"),k(Cs.$$.fragment),lm=l(),Jr=a("span"),dm=n("TFDebertaV2ForQuestionAnswering"),Si=l(),Ce=a("div"),k(xs.$$.fragment),cm=l(),so=a("p"),pm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xr=a("code"),hm=n("span start logits"),fm=n(" and "),Yr=a("code"),mm=n("span end logits"),um=n(")."),gm=l(),Rs=a("p"),_m=n("The DeBERTa model was proposed in "),Ps=a("a"),bm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),km=l(),Bs=a("p"),Tm=n("This model is also a "),js=a("a"),wm=n("tf.keras.Model"),ym=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dm=l(),k(Bo.$$.fragment),Em=l(),Ge=a("div"),k(As.$$.fragment),$m=l(),ao=a("p"),Fm=n("The "),ra=a("a"),Vm=n("TFDebertaV2ForQuestionAnswering"),qm=n(" forward method, overrides the "),Zr=a("code"),zm=n("__call__"),Mm=n(" special method."),Cm=l(),k(jo.$$.fragment),xm=l(),ei=a("p"),Rm=n("Example:"),Pm=l(),k(Ls.$$.fragment),this.h()},l(o){const m=k_('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),$=d(o),u=r(o,"H1",{class:!0});var Is=i(u);g=r(Is,"A",{id:!0,class:!0,href:!0});var ti=i(g);v=r(ti,"SPAN",{});var oi=i(v);T(b.$$.fragment,oi),oi.forEach(t),ti.forEach(t),_=d(Is),V=r(Is,"SPAN",{});var ni=i(V);de=s(ni,"DeBERTa-v2"),ni.forEach(t),Is.forEach(t),J=d(o),q=r(o,"H2",{class:!0});var Ss=i(q);Y=r(Ss,"A",{id:!0,class:!0,href:!0});var si=i(Y);I=r(si,"SPAN",{});var ai=i(I);T(ee.$$.fragment,ai),ai.forEach(t),si.forEach(t),ce=d(Ss),S=r(Ss,"SPAN",{});var ri=i(S);pe=s(ri,"Overview"),ri.forEach(t),Ss.forEach(t),re=d(o),O=r(o,"P",{});var Ns=i(O);P=s(Ns,"The DeBERTa model was proposed in "),te=r(Ns,"A",{href:!0,rel:!0});var ii=i(te);Z=s(ii,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ii.forEach(t),z=s(Ns,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Ns.forEach(t),C=d(o),ne=r(o,"P",{});var li=i(ne);W=s(li,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),li.forEach(t),ie=d(o),se=r(o,"P",{});var di=i(se);H=s(di,"The abstract from the paper is the following:"),di.forEach(t),le=d(o),ae=r(o,"P",{});var ci=i(ae);M=r(ci,"EM",{});var Os=i(M);he=s(Os,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=r(Os,"A",{href:!0,rel:!0});var pi=i(j);fe=s(pi,"https://github.com/microsoft/DeBERTa"),pi.forEach(t),me=s(Os,"."),Os.forEach(t),ci.forEach(t),N=d(o),X=r(o,"P",{});var Ao=i(X);ue=s(Ao,"The following information is visible directly on the "),R=r(Ao,"A",{href:!0,rel:!0});var Im=i(R);ge=s(Im,`original implementation
repository`),Im.forEach(t),U=s(Ao,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(Ao,"A",{href:!0,rel:!0});var Sm=i(oe);p=s(Sm,"blog"),Sm.forEach(t),Ao.forEach(t),F=d(o),G=r(o,"P",{});var Nm=i(G);ye=s(Nm,"New in v2:"),Nm.forEach(t),we=d(o),x=r(o,"UL",{});var ht=i(x);_e=r(ht,"LI",{});var hi=i(_e);ke=r(hi,"STRONG",{});var Om=i(ke);De=s(Om,"Vocabulary"),Om.forEach(t),B=s(hi,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r(hi,"A",{href:!0,rel:!0});var Wm=i(A);Ee=s(Wm,"sentencepiece-based"),Wm.forEach(t),$e=s(hi," tokenizer."),hi.forEach(t),Q=d(ht),ve=r(ht,"LI",{});var Bm=i(ve);Te=r(Bm,"STRONG",{});var Hm=i(Te);be=s(Hm,"nGiE(nGram Induced Input Encoding)"),Hm.forEach(t),Fe=s(Bm,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Bm.forEach(t),El=d(ht),Ws=r(ht,"LI",{});var jm=i(Ws);qa=r(jm,"STRONG",{});var Um=i(qa);$l=s(Um,"Sharing position projection matrix with content projection matrix in attention layer"),Um.forEach(t),Fl=s(jm,` Based on previous
experiments, this can save parameters without affecting the performance.`),jm.forEach(t),Vl=d(ht),Hs=r(ht,"LI",{});var Am=i(Hs);za=r(Am,"STRONG",{});var Qm=i(za);ql=s(Qm,"Apply bucket to encode relative positions"),Qm.forEach(t),zl=s(Am,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Am.forEach(t),Ml=d(ht),Us=r(ht,"LI",{});var Lm=i(Us);Ma=r(Lm,"STRONG",{});var Gm=i(Ma);Cl=s(Gm,"900M model & 1.5B model"),Gm.forEach(t),xl=s(Lm,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Lm.forEach(t),ht.forEach(t),fi=d(o),Ze=r(o,"P",{});var Lo=i(Ze);Rl=s(Lo,"This model was contributed by "),Ho=r(Lo,"A",{href:!0,rel:!0});var Km=i(Ho);Pl=s(Km,"DeBERTa"),Km.forEach(t),Bl=s(Lo,`. This model TF 2.0 implementation was
contributed by `),Uo=r(Lo,"A",{href:!0,rel:!0});var Jm=i(Uo);jl=s(Jm,"kamalkraj"),Jm.forEach(t),Al=s(Lo,". The original code can be found "),Qo=r(Lo,"A",{href:!0,rel:!0});var Xm=i(Qo);Ll=s(Xm,"here"),Xm.forEach(t),Il=s(Lo,"."),Lo.forEach(t),mi=d(o),Vt=r(o,"H2",{class:!0});var Oi=i(Vt);ro=r(Oi,"A",{id:!0,class:!0,href:!0});var Ym=i(ro);Ca=r(Ym,"SPAN",{});var Zm=i(Ca);T(Go.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),Sl=d(Oi),xa=r(Oi,"SPAN",{});var eu=i(xa);Nl=s(eu,"DebertaV2Config"),eu.forEach(t),Oi.forEach(t),ui=d(o),lt=r(o,"DIV",{class:!0});var ia=i(lt);T(Ko.$$.fragment,ia),Ol=d(ia),qt=r(ia,"P",{});var la=i(qt);Wl=s(la,"This is the configuration class to store the configuration of a "),Qs=r(la,"A",{href:!0});var tu=i(Qs);Hl=s(tu,"DebertaV2Model"),tu.forEach(t),Ul=s(la,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=r(la,"A",{href:!0,rel:!0});var ou=i(Jo);Ql=s(ou,"microsoft/deberta-v2-xlarge"),ou.forEach(t),Gl=s(la," architecture."),la.forEach(t),Kl=d(ia),zt=r(ia,"P",{});var da=i(zt);Jl=s(da,"Configuration objects inherit from "),Gs=r(da,"A",{href:!0});var nu=i(Gs);Xl=s(nu,"PretrainedConfig"),nu.forEach(t),Yl=s(da,` and can be used to control the model outputs. Read the
documentation from `),Ks=r(da,"A",{href:!0});var su=i(Ks);Zl=s(su,"PretrainedConfig"),su.forEach(t),ed=s(da," for more information."),da.forEach(t),ia.forEach(t),gi=d(o),Mt=r(o,"H2",{class:!0});var Wi=i(Mt);io=r(Wi,"A",{id:!0,class:!0,href:!0});var au=i(io);Ra=r(au,"SPAN",{});var ru=i(Ra);T(Xo.$$.fragment,ru),ru.forEach(t),au.forEach(t),td=d(Wi),Pa=r(Wi,"SPAN",{});var iu=i(Pa);od=s(iu,"DebertaV2Tokenizer"),iu.forEach(t),Wi.forEach(t),_i=d(o),qe=r(o,"DIV",{class:!0});var nt=i(qe);T(Yo.$$.fragment,nt),nd=d(nt),Zo=r(nt,"P",{});var Hi=i(Zo);sd=s(Hi,"Constructs a DeBERTa-v2 tokenizer. Based on "),en=r(Hi,"A",{href:!0,rel:!0});var lu=i(en);ad=s(lu,"SentencePiece"),lu.forEach(t),rd=s(Hi,"."),Hi.forEach(t),id=d(nt),pt=r(nt,"DIV",{class:!0});var ca=i(pt);T(tn.$$.fragment,ca),ld=d(ca),Ba=r(ca,"P",{});var du=i(Ba);dd=s(du,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),du.forEach(t),cd=d(ca),on=r(ca,"UL",{});var Ui=i(on);ja=r(Ui,"LI",{});var cu=i(ja);pd=s(cu,"single sequence: [CLS] X [SEP]"),cu.forEach(t),hd=d(Ui),Aa=r(Ui,"LI",{});var pu=i(Aa);fd=s(pu,"pair of sequences: [CLS] A [SEP] B [SEP]"),pu.forEach(t),Ui.forEach(t),ca.forEach(t),md=d(nt),lo=r(nt,"DIV",{class:!0});var Qi=i(lo);T(nn.$$.fragment,Qi),ud=d(Qi),Ct=r(Qi,"P",{});var pa=i(Ct);gd=s(pa,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),La=r(pa,"CODE",{});var hu=i(La);_d=s(hu,"prepare_for_model"),hu.forEach(t),bd=s(pa," or "),Ia=r(pa,"CODE",{});var fu=i(Ia);vd=s(fu,"encode_plus"),fu.forEach(t),kd=s(pa," methods."),pa.forEach(t),Qi.forEach(t),Td=d(nt),et=r(nt,"DIV",{class:!0});var Io=i(et);T(sn.$$.fragment,Io),wd=d(Io),Sa=r(Io,"P",{});var mu=i(Sa);yd=s(mu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),mu.forEach(t),Dd=d(Io),T(an.$$.fragment,Io),Ed=d(Io),xt=r(Io,"P",{});var ha=i(xt);$d=s(ha,"If "),Na=r(ha,"CODE",{});var uu=i(Na);Fd=s(uu,"token_ids_1"),uu.forEach(t),Vd=s(ha," is "),Oa=r(ha,"CODE",{});var gu=i(Oa);qd=s(gu,"None"),gu.forEach(t),zd=s(ha,", this method only returns the first portion of the mask (0s)."),ha.forEach(t),Io.forEach(t),Md=d(nt),Js=r(nt,"DIV",{class:!0});var _u=i(Js);T(rn.$$.fragment,_u),_u.forEach(t),nt.forEach(t),bi=d(o),Rt=r(o,"H2",{class:!0});var Gi=i(Rt);co=r(Gi,"A",{id:!0,class:!0,href:!0});var bu=i(co);Wa=r(bu,"SPAN",{});var vu=i(Wa);T(ln.$$.fragment,vu),vu.forEach(t),bu.forEach(t),Cd=d(Gi),Ha=r(Gi,"SPAN",{});var ku=i(Ha);xd=s(ku,"DebertaV2Model"),ku.forEach(t),Gi.forEach(t),vi=d(o),Je=r(o,"DIV",{class:!0});var So=i(Je);T(dn.$$.fragment,So),Rd=d(So),cn=r(So,"P",{});var Ki=i(cn);Pd=s(Ki,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=r(Ki,"A",{href:!0,rel:!0});var Tu=i(pn);Bd=s(Tu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tu.forEach(t),jd=s(Ki,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ki.forEach(t),Ad=d(So),hn=r(So,"P",{});var Ji=i(hn);Ld=s(Ji,"This model is also a PyTorch "),fn=r(Ji,"A",{href:!0,rel:!0});var wu=i(fn);Id=s(wu,"torch.nn.Module"),wu.forEach(t),Sd=s(Ji," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ji.forEach(t),Nd=d(So),Ie=r(So,"DIV",{class:!0});var ft=i(Ie);T(mn.$$.fragment,ft),Od=d(ft),Pt=r(ft,"P",{});var fa=i(Pt);Wd=s(fa,"The "),Xs=r(fa,"A",{href:!0});var yu=i(Xs);Hd=s(yu,"DebertaV2Model"),yu.forEach(t),Ud=s(fa," forward method, overrides the "),Ua=r(fa,"CODE",{});var Du=i(Ua);Qd=s(Du,"__call__"),Du.forEach(t),Gd=s(fa," special method."),fa.forEach(t),Kd=d(ft),T(po.$$.fragment,ft),Jd=d(ft),Qa=r(ft,"P",{});var Eu=i(Qa);Xd=s(Eu,"Example:"),Eu.forEach(t),Yd=d(ft),T(un.$$.fragment,ft),ft.forEach(t),So.forEach(t),ki=d(o),Bt=r(o,"H2",{class:!0});var Xi=i(Bt);ho=r(Xi,"A",{id:!0,class:!0,href:!0});var $u=i(ho);Ga=r($u,"SPAN",{});var Fu=i(Ga);T(gn.$$.fragment,Fu),Fu.forEach(t),$u.forEach(t),Zd=d(Xi),Ka=r(Xi,"SPAN",{});var Vu=i(Ka);ec=s(Vu,"DebertaV2PreTrainedModel"),Vu.forEach(t),Xi.forEach(t),Ti=d(o),dt=r(o,"DIV",{class:!0});var ma=i(dt);T(_n.$$.fragment,ma),tc=d(ma),Ja=r(ma,"P",{});var qu=i(Ja);oc=s(qu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),qu.forEach(t),nc=d(ma),tt=r(ma,"DIV",{class:!0});var No=i(tt);T(bn.$$.fragment,No),sc=d(No),Xa=r(No,"P",{});var zu=i(Xa);ac=s(zu,"Defines the computation performed at every call."),zu.forEach(t),rc=d(No),Ya=r(No,"P",{});var Mu=i(Ya);ic=s(Mu,"Should be overridden by all subclasses."),Mu.forEach(t),lc=d(No),T(fo.$$.fragment,No),No.forEach(t),ma.forEach(t),wi=d(o),jt=r(o,"H2",{class:!0});var Yi=i(jt);mo=r(Yi,"A",{id:!0,class:!0,href:!0});var Cu=i(mo);Za=r(Cu,"SPAN",{});var xu=i(Za);T(vn.$$.fragment,xu),xu.forEach(t),Cu.forEach(t),dc=d(Yi),er=r(Yi,"SPAN",{});var Ru=i(er);cc=s(Ru,"DebertaV2ForMaskedLM"),Ru.forEach(t),Yi.forEach(t),yi=d(o),Xe=r(o,"DIV",{class:!0});var Oo=i(Xe);T(kn.$$.fragment,Oo),pc=d(Oo),At=r(Oo,"P",{});var ua=i(At);hc=s(ua,"DeBERTa Model with a "),tr=r(ua,"CODE",{});var Pu=i(tr);fc=s(Pu,"language modeling"),Pu.forEach(t),mc=s(ua,` head on top.
The DeBERTa model was proposed in `),Tn=r(ua,"A",{href:!0,rel:!0});var Bu=i(Tn);uc=s(Bu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bu.forEach(t),gc=s(ua,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ua.forEach(t),_c=d(Oo),wn=r(Oo,"P",{});var Zi=i(wn);bc=s(Zi,"This model is also a PyTorch "),yn=r(Zi,"A",{href:!0,rel:!0});var ju=i(yn);vc=s(ju,"torch.nn.Module"),ju.forEach(t),kc=s(Zi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Zi.forEach(t),Tc=d(Oo),Se=r(Oo,"DIV",{class:!0});var mt=i(Se);T(Dn.$$.fragment,mt),wc=d(mt),Lt=r(mt,"P",{});var ga=i(Lt);yc=s(ga,"The "),Ys=r(ga,"A",{href:!0});var Au=i(Ys);Dc=s(Au,"DebertaV2ForMaskedLM"),Au.forEach(t),Ec=s(ga," forward method, overrides the "),or=r(ga,"CODE",{});var Lu=i(or);$c=s(Lu,"__call__"),Lu.forEach(t),Fc=s(ga," special method."),ga.forEach(t),Vc=d(mt),T(uo.$$.fragment,mt),qc=d(mt),nr=r(mt,"P",{});var Iu=i(nr);zc=s(Iu,"Example:"),Iu.forEach(t),Mc=d(mt),T(En.$$.fragment,mt),mt.forEach(t),Oo.forEach(t),Di=d(o),It=r(o,"H2",{class:!0});var el=i(It);go=r(el,"A",{id:!0,class:!0,href:!0});var Su=i(go);sr=r(Su,"SPAN",{});var Nu=i(sr);T($n.$$.fragment,Nu),Nu.forEach(t),Su.forEach(t),Cc=d(el),ar=r(el,"SPAN",{});var Ou=i(ar);xc=s(Ou,"DebertaV2ForSequenceClassification"),Ou.forEach(t),el.forEach(t),Ei=d(o),Pe=r(o,"DIV",{class:!0});var ut=i(Pe);T(Fn.$$.fragment,ut),Rc=d(ut),rr=r(ut,"P",{});var Wu=i(rr);Pc=s(Wu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wu.forEach(t),Bc=d(ut),Vn=r(ut,"P",{});var tl=i(Vn);jc=s(tl,"The DeBERTa model was proposed in "),qn=r(tl,"A",{href:!0,rel:!0});var Hu=i(qn);Ac=s(Hu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hu.forEach(t),Lc=s(tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tl.forEach(t),Ic=d(ut),zn=r(ut,"P",{});var ol=i(zn);Sc=s(ol,"This model is also a PyTorch "),Mn=r(ol,"A",{href:!0,rel:!0});var Uu=i(Mn);Nc=s(Uu,"torch.nn.Module"),Uu.forEach(t),Oc=s(ol," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ol.forEach(t),Wc=d(ut),Ve=r(ut,"DIV",{class:!0});var Ke=i(Ve);T(Cn.$$.fragment,Ke),Hc=d(Ke),St=r(Ke,"P",{});var _a=i(St);Uc=s(_a,"The "),Zs=r(_a,"A",{href:!0});var Qu=i(Zs);Qc=s(Qu,"DebertaV2ForSequenceClassification"),Qu.forEach(t),Gc=s(_a," forward method, overrides the "),ir=r(_a,"CODE",{});var Gu=i(ir);Kc=s(Gu,"__call__"),Gu.forEach(t),Jc=s(_a," special method."),_a.forEach(t),Xc=d(Ke),T(_o.$$.fragment,Ke),Yc=d(Ke),lr=r(Ke,"P",{});var Ku=i(lr);Zc=s(Ku,"Example of single-label classification:"),Ku.forEach(t),ep=d(Ke),T(xn.$$.fragment,Ke),tp=d(Ke),dr=r(Ke,"P",{});var Ju=i(dr);op=s(Ju,"Example of multi-label classification:"),Ju.forEach(t),np=d(Ke),T(Rn.$$.fragment,Ke),Ke.forEach(t),ut.forEach(t),$i=d(o),Nt=r(o,"H2",{class:!0});var nl=i(Nt);bo=r(nl,"A",{id:!0,class:!0,href:!0});var Xu=i(bo);cr=r(Xu,"SPAN",{});var Yu=i(cr);T(Pn.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),sp=d(nl),pr=r(nl,"SPAN",{});var Zu=i(pr);ap=s(Zu,"DebertaV2ForTokenClassification"),Zu.forEach(t),nl.forEach(t),Fi=d(o),Be=r(o,"DIV",{class:!0});var gt=i(Be);T(Bn.$$.fragment,gt),rp=d(gt),hr=r(gt,"P",{});var eg=i(hr);ip=s(eg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),eg.forEach(t),lp=d(gt),jn=r(gt,"P",{});var sl=i(jn);dp=s(sl,"The DeBERTa model was proposed in "),An=r(sl,"A",{href:!0,rel:!0});var tg=i(An);cp=s(tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tg.forEach(t),pp=s(sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sl.forEach(t),hp=d(gt),Ln=r(gt,"P",{});var al=i(Ln);fp=s(al,"This model is also a PyTorch "),In=r(al,"A",{href:!0,rel:!0});var og=i(In);mp=s(og,"torch.nn.Module"),og.forEach(t),up=s(al," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),al.forEach(t),gp=d(gt),Ne=r(gt,"DIV",{class:!0});var _t=i(Ne);T(Sn.$$.fragment,_t),_p=d(_t),Ot=r(_t,"P",{});var ba=i(Ot);bp=s(ba,"The "),ea=r(ba,"A",{href:!0});var ng=i(ea);vp=s(ng,"DebertaV2ForTokenClassification"),ng.forEach(t),kp=s(ba," forward method, overrides the "),fr=r(ba,"CODE",{});var sg=i(fr);Tp=s(sg,"__call__"),sg.forEach(t),wp=s(ba," special method."),ba.forEach(t),yp=d(_t),T(vo.$$.fragment,_t),Dp=d(_t),mr=r(_t,"P",{});var ag=i(mr);Ep=s(ag,"Example:"),ag.forEach(t),$p=d(_t),T(Nn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Vi=d(o),Wt=r(o,"H2",{class:!0});var rl=i(Wt);ko=r(rl,"A",{id:!0,class:!0,href:!0});var rg=i(ko);ur=r(rg,"SPAN",{});var ig=i(ur);T(On.$$.fragment,ig),ig.forEach(t),rg.forEach(t),Fp=d(rl),gr=r(rl,"SPAN",{});var lg=i(gr);Vp=s(lg,"DebertaV2ForQuestionAnswering"),lg.forEach(t),rl.forEach(t),qi=d(o),je=r(o,"DIV",{class:!0});var bt=i(je);T(Wn.$$.fragment,bt),qp=d(bt),Ht=r(bt,"P",{});var va=i(Ht);zp=s(va,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_r=r(va,"CODE",{});var dg=i(_r);Mp=s(dg,"span start logits"),dg.forEach(t),Cp=s(va," and "),br=r(va,"CODE",{});var cg=i(br);xp=s(cg,"span end logits"),cg.forEach(t),Rp=s(va,")."),va.forEach(t),Pp=d(bt),Hn=r(bt,"P",{});var il=i(Hn);Bp=s(il,"The DeBERTa model was proposed in "),Un=r(il,"A",{href:!0,rel:!0});var pg=i(Un);jp=s(pg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pg.forEach(t),Ap=s(il,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),il.forEach(t),Lp=d(bt),Qn=r(bt,"P",{});var ll=i(Qn);Ip=s(ll,"This model is also a PyTorch "),Gn=r(ll,"A",{href:!0,rel:!0});var hg=i(Gn);Sp=s(hg,"torch.nn.Module"),hg.forEach(t),Np=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),Op=d(bt),Oe=r(bt,"DIV",{class:!0});var vt=i(Oe);T(Kn.$$.fragment,vt),Wp=d(vt),Ut=r(vt,"P",{});var ka=i(Ut);Hp=s(ka,"The "),ta=r(ka,"A",{href:!0});var fg=i(ta);Up=s(fg,"DebertaV2ForQuestionAnswering"),fg.forEach(t),Qp=s(ka," forward method, overrides the "),vr=r(ka,"CODE",{});var mg=i(vr);Gp=s(mg,"__call__"),mg.forEach(t),Kp=s(ka," special method."),ka.forEach(t),Jp=d(vt),T(To.$$.fragment,vt),Xp=d(vt),kr=r(vt,"P",{});var ug=i(kr);Yp=s(ug,"Example:"),ug.forEach(t),Zp=d(vt),T(Jn.$$.fragment,vt),vt.forEach(t),bt.forEach(t),zi=d(o),Qt=r(o,"H2",{class:!0});var dl=i(Qt);wo=r(dl,"A",{id:!0,class:!0,href:!0});var gg=i(wo);Tr=r(gg,"SPAN",{});var _g=i(Tr);T(Xn.$$.fragment,_g),_g.forEach(t),gg.forEach(t),eh=d(dl),wr=r(dl,"SPAN",{});var bg=i(wr);th=s(bg,"TFDebertaV2Model"),bg.forEach(t),dl.forEach(t),Mi=d(o),Ae=r(o,"DIV",{class:!0});var kt=i(Ae);T(Yn.$$.fragment,kt),oh=d(kt),Zn=r(kt,"P",{});var cl=i(Zn);nh=s(cl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),es=r(cl,"A",{href:!0,rel:!0});var vg=i(es);sh=s(vg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vg.forEach(t),ah=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),rh=d(kt),ts=r(kt,"P",{});var pl=i(ts);ih=s(pl,"This model is also a "),os=r(pl,"A",{href:!0,rel:!0});var kg=i(os);lh=s(kg,"tf.keras.Model"),kg.forEach(t),dh=s(pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pl.forEach(t),ch=d(kt),T(yo.$$.fragment,kt),ph=d(kt),We=r(kt,"DIV",{class:!0});var Tt=i(We);T(ns.$$.fragment,Tt),hh=d(Tt),Gt=r(Tt,"P",{});var Ta=i(Gt);fh=s(Ta,"The "),oa=r(Ta,"A",{href:!0});var Tg=i(oa);mh=s(Tg,"TFDebertaV2Model"),Tg.forEach(t),uh=s(Ta," forward method, overrides the "),yr=r(Ta,"CODE",{});var wg=i(yr);gh=s(wg,"__call__"),wg.forEach(t),_h=s(Ta," special method."),Ta.forEach(t),bh=d(Tt),T(Do.$$.fragment,Tt),vh=d(Tt),Dr=r(Tt,"P",{});var yg=i(Dr);kh=s(yg,"Example:"),yg.forEach(t),Th=d(Tt),T(ss.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Ci=d(o),Kt=r(o,"H2",{class:!0});var hl=i(Kt);Eo=r(hl,"A",{id:!0,class:!0,href:!0});var Dg=i(Eo);Er=r(Dg,"SPAN",{});var Eg=i(Er);T(as.$$.fragment,Eg),Eg.forEach(t),Dg.forEach(t),wh=d(hl),$r=r(hl,"SPAN",{});var $g=i($r);yh=s($g,"TFDebertaV2PreTrainedModel"),$g.forEach(t),hl.forEach(t),xi=d(o),ct=r(o,"DIV",{class:!0});var wa=i(ct);T(rs.$$.fragment,wa),Dh=d(wa),Fr=r(wa,"P",{});var Fg=i(Fr);Eh=s(Fg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Fg.forEach(t),$h=d(wa),ot=r(wa,"DIV",{class:!0});var Wo=i(ot);T(is.$$.fragment,Wo),Fh=d(Wo),Vr=r(Wo,"P",{});var Vg=i(Vr);Vh=s(Vg,"Calls the model on new inputs and returns the outputs as tensors."),Vg.forEach(t),qh=d(Wo),ls=r(Wo,"P",{});var fl=i(ls);zh=s(fl,"In this case "),qr=r(fl,"CODE",{});var qg=i(qr);Mh=s(qg,"call()"),qg.forEach(t),Ch=s(fl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),fl.forEach(t),xh=d(Wo),Ye=r(Wo,"P",{});var wt=i(Ye);Rh=s(wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),zr=r(wt,"CODE",{});var zg=i(zr);Ph=s(zg,"tf.keras.Model"),zg.forEach(t),Bh=s(wt,`.
To call a model on an input, always use the `),Mr=r(wt,"CODE",{});var Mg=i(Mr);jh=s(Mg,"__call__()"),Mg.forEach(t),Ah=s(wt,` method,
i.e. `),Cr=r(wt,"CODE",{});var Cg=i(Cr);Lh=s(Cg,"model(inputs)"),Cg.forEach(t),Ih=s(wt,", which relies on the underlying "),xr=r(wt,"CODE",{});var xg=i(xr);Sh=s(xg,"call()"),xg.forEach(t),Nh=s(wt," method."),wt.forEach(t),Wo.forEach(t),wa.forEach(t),Ri=d(o),Jt=r(o,"H2",{class:!0});var ml=i(Jt);$o=r(ml,"A",{id:!0,class:!0,href:!0});var Rg=i($o);Rr=r(Rg,"SPAN",{});var Pg=i(Rr);T(ds.$$.fragment,Pg),Pg.forEach(t),Rg.forEach(t),Oh=d(ml),Pr=r(ml,"SPAN",{});var Bg=i(Pr);Wh=s(Bg,"TFDebertaV2ForMaskedLM"),Bg.forEach(t),ml.forEach(t),Pi=d(o),Le=r(o,"DIV",{class:!0});var yt=i(Le);T(cs.$$.fragment,yt),Hh=d(yt),Xt=r(yt,"P",{});var ya=i(Xt);Uh=s(ya,"DeBERTa Model with a "),Br=r(ya,"CODE",{});var jg=i(Br);Qh=s(jg,"language modeling"),jg.forEach(t),Gh=s(ya,` head on top.
The DeBERTa model was proposed in `),ps=r(ya,"A",{href:!0,rel:!0});var Ag=i(ps);Kh=s(Ag,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ag.forEach(t),Jh=s(ya,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ya.forEach(t),Xh=d(yt),hs=r(yt,"P",{});var ul=i(hs);Yh=s(ul,"This model is also a "),fs=r(ul,"A",{href:!0,rel:!0});var Lg=i(fs);Zh=s(Lg,"tf.keras.Model"),Lg.forEach(t),ef=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),tf=d(yt),T(Fo.$$.fragment,yt),of=d(yt),He=r(yt,"DIV",{class:!0});var Dt=i(He);T(ms.$$.fragment,Dt),nf=d(Dt),Yt=r(Dt,"P",{});var Da=i(Yt);sf=s(Da,"The "),na=r(Da,"A",{href:!0});var Ig=i(na);af=s(Ig,"TFDebertaV2ForMaskedLM"),Ig.forEach(t),rf=s(Da," forward method, overrides the "),jr=r(Da,"CODE",{});var Sg=i(jr);lf=s(Sg,"__call__"),Sg.forEach(t),df=s(Da," special method."),Da.forEach(t),cf=d(Dt),T(Vo.$$.fragment,Dt),pf=d(Dt),Ar=r(Dt,"P",{});var Ng=i(Ar);hf=s(Ng,"Example:"),Ng.forEach(t),ff=d(Dt),T(us.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),Bi=d(o),Zt=r(o,"H2",{class:!0});var gl=i(Zt);qo=r(gl,"A",{id:!0,class:!0,href:!0});var Og=i(qo);Lr=r(Og,"SPAN",{});var Wg=i(Lr);T(gs.$$.fragment,Wg),Wg.forEach(t),Og.forEach(t),mf=d(gl),Ir=r(gl,"SPAN",{});var Hg=i(Ir);uf=s(Hg,"TFDebertaV2ForSequenceClassification"),Hg.forEach(t),gl.forEach(t),ji=d(o),ze=r(o,"DIV",{class:!0});var st=i(ze);T(_s.$$.fragment,st),gf=d(st),Sr=r(st,"P",{});var Ug=i(Sr);_f=s(Ug,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ug.forEach(t),bf=d(st),bs=r(st,"P",{});var _l=i(bs);vf=s(_l,"The DeBERTa model was proposed in "),vs=r(_l,"A",{href:!0,rel:!0});var Qg=i(vs);kf=s(Qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qg.forEach(t),Tf=s(_l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_l.forEach(t),wf=d(st),ks=r(st,"P",{});var bl=i(ks);yf=s(bl,"This model is also a "),Ts=r(bl,"A",{href:!0,rel:!0});var Gg=i(Ts);Df=s(Gg,"tf.keras.Model"),Gg.forEach(t),Ef=s(bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bl.forEach(t),$f=d(st),T(zo.$$.fragment,st),Ff=d(st),Ue=r(st,"DIV",{class:!0});var Et=i(Ue);T(ws.$$.fragment,Et),Vf=d(Et),eo=r(Et,"P",{});var Ea=i(eo);qf=s(Ea,"The "),sa=r(Ea,"A",{href:!0});var Kg=i(sa);zf=s(Kg,"TFDebertaV2ForSequenceClassification"),Kg.forEach(t),Mf=s(Ea," forward method, overrides the "),Nr=r(Ea,"CODE",{});var Jg=i(Nr);Cf=s(Jg,"__call__"),Jg.forEach(t),xf=s(Ea," special method."),Ea.forEach(t),Rf=d(Et),T(Mo.$$.fragment,Et),Pf=d(Et),Or=r(Et,"P",{});var Xg=i(Or);Bf=s(Xg,"Example:"),Xg.forEach(t),jf=d(Et),T(ys.$$.fragment,Et),Et.forEach(t),st.forEach(t),Ai=d(o),to=r(o,"H2",{class:!0});var vl=i(to);Co=r(vl,"A",{id:!0,class:!0,href:!0});var Yg=i(Co);Wr=r(Yg,"SPAN",{});var Zg=i(Wr);T(Ds.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),Af=d(vl),Hr=r(vl,"SPAN",{});var e_=i(Hr);Lf=s(e_,"TFDebertaV2ForTokenClassification"),e_.forEach(t),vl.forEach(t),Li=d(o),Me=r(o,"DIV",{class:!0});var at=i(Me);T(Es.$$.fragment,at),If=d(at),Ur=r(at,"P",{});var t_=i(Ur);Sf=s(t_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),t_.forEach(t),Nf=d(at),$s=r(at,"P",{});var kl=i($s);Of=s(kl,"The DeBERTa model was proposed in "),Fs=r(kl,"A",{href:!0,rel:!0});var o_=i(Fs);Wf=s(o_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),o_.forEach(t),Hf=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Uf=d(at),Vs=r(at,"P",{});var Tl=i(Vs);Qf=s(Tl,"This model is also a "),qs=r(Tl,"A",{href:!0,rel:!0});var n_=i(qs);Gf=s(n_,"tf.keras.Model"),n_.forEach(t),Kf=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),Jf=d(at),T(xo.$$.fragment,at),Xf=d(at),Qe=r(at,"DIV",{class:!0});var $t=i(Qe);T(zs.$$.fragment,$t),Yf=d($t),oo=r($t,"P",{});var $a=i(oo);Zf=s($a,"The "),aa=r($a,"A",{href:!0});var s_=i(aa);em=s(s_,"TFDebertaV2ForTokenClassification"),s_.forEach(t),tm=s($a," forward method, overrides the "),Qr=r($a,"CODE",{});var a_=i(Qr);om=s(a_,"__call__"),a_.forEach(t),nm=s($a," special method."),$a.forEach(t),sm=d($t),T(Ro.$$.fragment,$t),am=d($t),Gr=r($t,"P",{});var r_=i(Gr);rm=s(r_,"Example:"),r_.forEach(t),im=d($t),T(Ms.$$.fragment,$t),$t.forEach(t),at.forEach(t),Ii=d(o),no=r(o,"H2",{class:!0});var wl=i(no);Po=r(wl,"A",{id:!0,class:!0,href:!0});var i_=i(Po);Kr=r(i_,"SPAN",{});var l_=i(Kr);T(Cs.$$.fragment,l_),l_.forEach(t),i_.forEach(t),lm=d(wl),Jr=r(wl,"SPAN",{});var d_=i(Jr);dm=s(d_,"TFDebertaV2ForQuestionAnswering"),d_.forEach(t),wl.forEach(t),Si=d(o),Ce=r(o,"DIV",{class:!0});var rt=i(Ce);T(xs.$$.fragment,rt),cm=d(rt),so=r(rt,"P",{});var Fa=i(so);pm=s(Fa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xr=r(Fa,"CODE",{});var c_=i(Xr);hm=s(c_,"span start logits"),c_.forEach(t),fm=s(Fa," and "),Yr=r(Fa,"CODE",{});var p_=i(Yr);mm=s(p_,"span end logits"),p_.forEach(t),um=s(Fa,")."),Fa.forEach(t),gm=d(rt),Rs=r(rt,"P",{});var yl=i(Rs);_m=s(yl,"The DeBERTa model was proposed in "),Ps=r(yl,"A",{href:!0,rel:!0});var h_=i(Ps);bm=s(h_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),h_.forEach(t),vm=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),km=d(rt),Bs=r(rt,"P",{});var Dl=i(Bs);Tm=s(Dl,"This model is also a "),js=r(Dl,"A",{href:!0,rel:!0});var f_=i(js);wm=s(f_,"tf.keras.Model"),f_.forEach(t),ym=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),Dm=d(rt),T(Bo.$$.fragment,rt),Em=d(rt),Ge=r(rt,"DIV",{class:!0});var Ft=i(Ge);T(As.$$.fragment,Ft),$m=d(Ft),ao=r(Ft,"P",{});var Va=i(ao);Fm=s(Va,"The "),ra=r(Va,"A",{href:!0});var m_=i(ra);Vm=s(m_,"TFDebertaV2ForQuestionAnswering"),m_.forEach(t),qm=s(Va," forward method, overrides the "),Zr=r(Va,"CODE",{});var u_=i(Zr);zm=s(u_,"__call__"),u_.forEach(t),Mm=s(Va," special method."),Va.forEach(t),Cm=d(Ft),T(jo.$$.fragment,Ft),xm=d(Ft),ei=r(Ft,"P",{});var g_=i(ei);Rm=s(g_,"Example:"),g_.forEach(t),Pm=d(Ft),T(Ls.$$.fragment,Ft),Ft.forEach(t),rt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(A_)),c(g,"id","debertav2"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(j,"href","https://github.com/microsoft/DeBERTa"),c(j,"rel","nofollow"),c(R,"href","https://github.com/microsoft/DeBERTa"),c(R,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Ho,"href","https://huggingface.co/DeBERTa"),c(Ho,"rel","nofollow"),c(Uo,"href","https://huggingface.co/kamalkraj"),c(Uo,"rel","nofollow"),c(Qo,"href","https://github.com/microsoft/DeBERTa"),c(Qo,"rel","nofollow"),c(ro,"id","transformers.DebertaV2Config"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(Qs,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Jo,"href","https://huggingface.co/microsoft/deberta-base"),c(Jo,"rel","nofollow"),c(Gs,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ks,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(lt,"class","docstring"),c(io,"id","transformers.DebertaV2Tokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaV2Tokenizer"),c(Mt,"class","relative group"),c(en,"href","https://github.com/google/sentencepiece"),c(en,"rel","nofollow"),c(pt,"class","docstring"),c(lo,"class","docstring"),c(et,"class","docstring"),c(Js,"class","docstring"),c(qe,"class","docstring"),c(co,"id","transformers.DebertaV2Model"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.DebertaV2Model"),c(Rt,"class","relative group"),c(pn,"href","https://arxiv.org/abs/2006.03654"),c(pn,"rel","nofollow"),c(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fn,"rel","nofollow"),c(Xs,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Ie,"class","docstring"),c(Je,"class","docstring"),c(ho,"id","transformers.DebertaV2PreTrainedModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2PreTrainedModel"),c(Bt,"class","relative group"),c(tt,"class","docstring"),c(dt,"class","docstring"),c(mo,"id","transformers.DebertaV2ForMaskedLM"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaV2ForMaskedLM"),c(jt,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2006.03654"),c(Tn,"rel","nofollow"),c(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yn,"rel","nofollow"),c(Ys,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Se,"class","docstring"),c(Xe,"class","docstring"),c(go,"id","transformers.DebertaV2ForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(qn,"href","https://arxiv.org/abs/2006.03654"),c(qn,"rel","nofollow"),c(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mn,"rel","nofollow"),c(Zs,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(Ve,"class","docstring"),c(Pe,"class","docstring"),c(bo,"id","transformers.DebertaV2ForTokenClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2ForTokenClassification"),c(Nt,"class","relative group"),c(An,"href","https://arxiv.org/abs/2006.03654"),c(An,"rel","nofollow"),c(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(In,"rel","nofollow"),c(ea,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Ne,"class","docstring"),c(Be,"class","docstring"),c(ko,"id","transformers.DebertaV2ForQuestionAnswering"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Un,"href","https://arxiv.org/abs/2006.03654"),c(Un,"rel","nofollow"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(ta,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Oe,"class","docstring"),c(je,"class","docstring"),c(wo,"id","transformers.TFDebertaV2Model"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(es,"href","https://arxiv.org/abs/2006.03654"),c(es,"rel","nofollow"),c(os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(os,"rel","nofollow"),c(oa,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(We,"class","docstring"),c(Ae,"class","docstring"),c(Eo,"id","transformers.TFDebertaV2PreTrainedModel"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(ot,"class","docstring"),c(ct,"class","docstring"),c($o,"id","transformers.TFDebertaV2ForMaskedLM"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(ps,"href","https://arxiv.org/abs/2006.03654"),c(ps,"rel","nofollow"),c(fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fs,"rel","nofollow"),c(na,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(He,"class","docstring"),c(Le,"class","docstring"),c(qo,"id","transformers.TFDebertaV2ForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c(vs,"href","https://arxiv.org/abs/2006.03654"),c(vs,"rel","nofollow"),c(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ts,"rel","nofollow"),c(sa,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Ue,"class","docstring"),c(ze,"class","docstring"),c(Co,"id","transformers.TFDebertaV2ForTokenClassification"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.TFDebertaV2ForTokenClassification"),c(to,"class","relative group"),c(Fs,"href","https://arxiv.org/abs/2006.03654"),c(Fs,"rel","nofollow"),c(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qs,"rel","nofollow"),c(aa,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(Po,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(no,"class","relative group"),c(Ps,"href","https://arxiv.org/abs/2006.03654"),c(Ps,"rel","nofollow"),c(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(js,"rel","nofollow"),c(ra,"href","/docs/transformers/master/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Ge,"class","docstring"),c(Ce,"class","docstring")},m(o,m){e(document.head,h),f(o,$,m),f(o,u,m),e(u,g),e(g,v),w(b,v,null),e(u,_),e(u,V),e(V,de),f(o,J,m),f(o,q,m),e(q,Y),e(Y,I),w(ee,I,null),e(q,ce),e(q,S),e(S,pe),f(o,re,m),f(o,O,m),e(O,P),e(O,te),e(te,Z),e(O,z),f(o,C,m),f(o,ne,m),e(ne,W),f(o,ie,m),f(o,se,m),e(se,H),f(o,le,m),f(o,ae,m),e(ae,M),e(M,he),e(M,j),e(j,fe),e(M,me),f(o,N,m),f(o,X,m),e(X,ue),e(X,R),e(R,ge),e(X,U),e(X,oe),e(oe,p),f(o,F,m),f(o,G,m),e(G,ye),f(o,we,m),f(o,x,m),e(x,_e),e(_e,ke),e(ke,De),e(_e,B),e(_e,A),e(A,Ee),e(_e,$e),e(x,Q),e(x,ve),e(ve,Te),e(Te,be),e(ve,Fe),e(x,El),e(x,Ws),e(Ws,qa),e(qa,$l),e(Ws,Fl),e(x,Vl),e(x,Hs),e(Hs,za),e(za,ql),e(Hs,zl),e(x,Ml),e(x,Us),e(Us,Ma),e(Ma,Cl),e(Us,xl),f(o,fi,m),f(o,Ze,m),e(Ze,Rl),e(Ze,Ho),e(Ho,Pl),e(Ze,Bl),e(Ze,Uo),e(Uo,jl),e(Ze,Al),e(Ze,Qo),e(Qo,Ll),e(Ze,Il),f(o,mi,m),f(o,Vt,m),e(Vt,ro),e(ro,Ca),w(Go,Ca,null),e(Vt,Sl),e(Vt,xa),e(xa,Nl),f(o,ui,m),f(o,lt,m),w(Ko,lt,null),e(lt,Ol),e(lt,qt),e(qt,Wl),e(qt,Qs),e(Qs,Hl),e(qt,Ul),e(qt,Jo),e(Jo,Ql),e(qt,Gl),e(lt,Kl),e(lt,zt),e(zt,Jl),e(zt,Gs),e(Gs,Xl),e(zt,Yl),e(zt,Ks),e(Ks,Zl),e(zt,ed),f(o,gi,m),f(o,Mt,m),e(Mt,io),e(io,Ra),w(Xo,Ra,null),e(Mt,td),e(Mt,Pa),e(Pa,od),f(o,_i,m),f(o,qe,m),w(Yo,qe,null),e(qe,nd),e(qe,Zo),e(Zo,sd),e(Zo,en),e(en,ad),e(Zo,rd),e(qe,id),e(qe,pt),w(tn,pt,null),e(pt,ld),e(pt,Ba),e(Ba,dd),e(pt,cd),e(pt,on),e(on,ja),e(ja,pd),e(on,hd),e(on,Aa),e(Aa,fd),e(qe,md),e(qe,lo),w(nn,lo,null),e(lo,ud),e(lo,Ct),e(Ct,gd),e(Ct,La),e(La,_d),e(Ct,bd),e(Ct,Ia),e(Ia,vd),e(Ct,kd),e(qe,Td),e(qe,et),w(sn,et,null),e(et,wd),e(et,Sa),e(Sa,yd),e(et,Dd),w(an,et,null),e(et,Ed),e(et,xt),e(xt,$d),e(xt,Na),e(Na,Fd),e(xt,Vd),e(xt,Oa),e(Oa,qd),e(xt,zd),e(qe,Md),e(qe,Js),w(rn,Js,null),f(o,bi,m),f(o,Rt,m),e(Rt,co),e(co,Wa),w(ln,Wa,null),e(Rt,Cd),e(Rt,Ha),e(Ha,xd),f(o,vi,m),f(o,Je,m),w(dn,Je,null),e(Je,Rd),e(Je,cn),e(cn,Pd),e(cn,pn),e(pn,Bd),e(cn,jd),e(Je,Ad),e(Je,hn),e(hn,Ld),e(hn,fn),e(fn,Id),e(hn,Sd),e(Je,Nd),e(Je,Ie),w(mn,Ie,null),e(Ie,Od),e(Ie,Pt),e(Pt,Wd),e(Pt,Xs),e(Xs,Hd),e(Pt,Ud),e(Pt,Ua),e(Ua,Qd),e(Pt,Gd),e(Ie,Kd),w(po,Ie,null),e(Ie,Jd),e(Ie,Qa),e(Qa,Xd),e(Ie,Yd),w(un,Ie,null),f(o,ki,m),f(o,Bt,m),e(Bt,ho),e(ho,Ga),w(gn,Ga,null),e(Bt,Zd),e(Bt,Ka),e(Ka,ec),f(o,Ti,m),f(o,dt,m),w(_n,dt,null),e(dt,tc),e(dt,Ja),e(Ja,oc),e(dt,nc),e(dt,tt),w(bn,tt,null),e(tt,sc),e(tt,Xa),e(Xa,ac),e(tt,rc),e(tt,Ya),e(Ya,ic),e(tt,lc),w(fo,tt,null),f(o,wi,m),f(o,jt,m),e(jt,mo),e(mo,Za),w(vn,Za,null),e(jt,dc),e(jt,er),e(er,cc),f(o,yi,m),f(o,Xe,m),w(kn,Xe,null),e(Xe,pc),e(Xe,At),e(At,hc),e(At,tr),e(tr,fc),e(At,mc),e(At,Tn),e(Tn,uc),e(At,gc),e(Xe,_c),e(Xe,wn),e(wn,bc),e(wn,yn),e(yn,vc),e(wn,kc),e(Xe,Tc),e(Xe,Se),w(Dn,Se,null),e(Se,wc),e(Se,Lt),e(Lt,yc),e(Lt,Ys),e(Ys,Dc),e(Lt,Ec),e(Lt,or),e(or,$c),e(Lt,Fc),e(Se,Vc),w(uo,Se,null),e(Se,qc),e(Se,nr),e(nr,zc),e(Se,Mc),w(En,Se,null),f(o,Di,m),f(o,It,m),e(It,go),e(go,sr),w($n,sr,null),e(It,Cc),e(It,ar),e(ar,xc),f(o,Ei,m),f(o,Pe,m),w(Fn,Pe,null),e(Pe,Rc),e(Pe,rr),e(rr,Pc),e(Pe,Bc),e(Pe,Vn),e(Vn,jc),e(Vn,qn),e(qn,Ac),e(Vn,Lc),e(Pe,Ic),e(Pe,zn),e(zn,Sc),e(zn,Mn),e(Mn,Nc),e(zn,Oc),e(Pe,Wc),e(Pe,Ve),w(Cn,Ve,null),e(Ve,Hc),e(Ve,St),e(St,Uc),e(St,Zs),e(Zs,Qc),e(St,Gc),e(St,ir),e(ir,Kc),e(St,Jc),e(Ve,Xc),w(_o,Ve,null),e(Ve,Yc),e(Ve,lr),e(lr,Zc),e(Ve,ep),w(xn,Ve,null),e(Ve,tp),e(Ve,dr),e(dr,op),e(Ve,np),w(Rn,Ve,null),f(o,$i,m),f(o,Nt,m),e(Nt,bo),e(bo,cr),w(Pn,cr,null),e(Nt,sp),e(Nt,pr),e(pr,ap),f(o,Fi,m),f(o,Be,m),w(Bn,Be,null),e(Be,rp),e(Be,hr),e(hr,ip),e(Be,lp),e(Be,jn),e(jn,dp),e(jn,An),e(An,cp),e(jn,pp),e(Be,hp),e(Be,Ln),e(Ln,fp),e(Ln,In),e(In,mp),e(Ln,up),e(Be,gp),e(Be,Ne),w(Sn,Ne,null),e(Ne,_p),e(Ne,Ot),e(Ot,bp),e(Ot,ea),e(ea,vp),e(Ot,kp),e(Ot,fr),e(fr,Tp),e(Ot,wp),e(Ne,yp),w(vo,Ne,null),e(Ne,Dp),e(Ne,mr),e(mr,Ep),e(Ne,$p),w(Nn,Ne,null),f(o,Vi,m),f(o,Wt,m),e(Wt,ko),e(ko,ur),w(On,ur,null),e(Wt,Fp),e(Wt,gr),e(gr,Vp),f(o,qi,m),f(o,je,m),w(Wn,je,null),e(je,qp),e(je,Ht),e(Ht,zp),e(Ht,_r),e(_r,Mp),e(Ht,Cp),e(Ht,br),e(br,xp),e(Ht,Rp),e(je,Pp),e(je,Hn),e(Hn,Bp),e(Hn,Un),e(Un,jp),e(Hn,Ap),e(je,Lp),e(je,Qn),e(Qn,Ip),e(Qn,Gn),e(Gn,Sp),e(Qn,Np),e(je,Op),e(je,Oe),w(Kn,Oe,null),e(Oe,Wp),e(Oe,Ut),e(Ut,Hp),e(Ut,ta),e(ta,Up),e(Ut,Qp),e(Ut,vr),e(vr,Gp),e(Ut,Kp),e(Oe,Jp),w(To,Oe,null),e(Oe,Xp),e(Oe,kr),e(kr,Yp),e(Oe,Zp),w(Jn,Oe,null),f(o,zi,m),f(o,Qt,m),e(Qt,wo),e(wo,Tr),w(Xn,Tr,null),e(Qt,eh),e(Qt,wr),e(wr,th),f(o,Mi,m),f(o,Ae,m),w(Yn,Ae,null),e(Ae,oh),e(Ae,Zn),e(Zn,nh),e(Zn,es),e(es,sh),e(Zn,ah),e(Ae,rh),e(Ae,ts),e(ts,ih),e(ts,os),e(os,lh),e(ts,dh),e(Ae,ch),w(yo,Ae,null),e(Ae,ph),e(Ae,We),w(ns,We,null),e(We,hh),e(We,Gt),e(Gt,fh),e(Gt,oa),e(oa,mh),e(Gt,uh),e(Gt,yr),e(yr,gh),e(Gt,_h),e(We,bh),w(Do,We,null),e(We,vh),e(We,Dr),e(Dr,kh),e(We,Th),w(ss,We,null),f(o,Ci,m),f(o,Kt,m),e(Kt,Eo),e(Eo,Er),w(as,Er,null),e(Kt,wh),e(Kt,$r),e($r,yh),f(o,xi,m),f(o,ct,m),w(rs,ct,null),e(ct,Dh),e(ct,Fr),e(Fr,Eh),e(ct,$h),e(ct,ot),w(is,ot,null),e(ot,Fh),e(ot,Vr),e(Vr,Vh),e(ot,qh),e(ot,ls),e(ls,zh),e(ls,qr),e(qr,Mh),e(ls,Ch),e(ot,xh),e(ot,Ye),e(Ye,Rh),e(Ye,zr),e(zr,Ph),e(Ye,Bh),e(Ye,Mr),e(Mr,jh),e(Ye,Ah),e(Ye,Cr),e(Cr,Lh),e(Ye,Ih),e(Ye,xr),e(xr,Sh),e(Ye,Nh),f(o,Ri,m),f(o,Jt,m),e(Jt,$o),e($o,Rr),w(ds,Rr,null),e(Jt,Oh),e(Jt,Pr),e(Pr,Wh),f(o,Pi,m),f(o,Le,m),w(cs,Le,null),e(Le,Hh),e(Le,Xt),e(Xt,Uh),e(Xt,Br),e(Br,Qh),e(Xt,Gh),e(Xt,ps),e(ps,Kh),e(Xt,Jh),e(Le,Xh),e(Le,hs),e(hs,Yh),e(hs,fs),e(fs,Zh),e(hs,ef),e(Le,tf),w(Fo,Le,null),e(Le,of),e(Le,He),w(ms,He,null),e(He,nf),e(He,Yt),e(Yt,sf),e(Yt,na),e(na,af),e(Yt,rf),e(Yt,jr),e(jr,lf),e(Yt,df),e(He,cf),w(Vo,He,null),e(He,pf),e(He,Ar),e(Ar,hf),e(He,ff),w(us,He,null),f(o,Bi,m),f(o,Zt,m),e(Zt,qo),e(qo,Lr),w(gs,Lr,null),e(Zt,mf),e(Zt,Ir),e(Ir,uf),f(o,ji,m),f(o,ze,m),w(_s,ze,null),e(ze,gf),e(ze,Sr),e(Sr,_f),e(ze,bf),e(ze,bs),e(bs,vf),e(bs,vs),e(vs,kf),e(bs,Tf),e(ze,wf),e(ze,ks),e(ks,yf),e(ks,Ts),e(Ts,Df),e(ks,Ef),e(ze,$f),w(zo,ze,null),e(ze,Ff),e(ze,Ue),w(ws,Ue,null),e(Ue,Vf),e(Ue,eo),e(eo,qf),e(eo,sa),e(sa,zf),e(eo,Mf),e(eo,Nr),e(Nr,Cf),e(eo,xf),e(Ue,Rf),w(Mo,Ue,null),e(Ue,Pf),e(Ue,Or),e(Or,Bf),e(Ue,jf),w(ys,Ue,null),f(o,Ai,m),f(o,to,m),e(to,Co),e(Co,Wr),w(Ds,Wr,null),e(to,Af),e(to,Hr),e(Hr,Lf),f(o,Li,m),f(o,Me,m),w(Es,Me,null),e(Me,If),e(Me,Ur),e(Ur,Sf),e(Me,Nf),e(Me,$s),e($s,Of),e($s,Fs),e(Fs,Wf),e($s,Hf),e(Me,Uf),e(Me,Vs),e(Vs,Qf),e(Vs,qs),e(qs,Gf),e(Vs,Kf),e(Me,Jf),w(xo,Me,null),e(Me,Xf),e(Me,Qe),w(zs,Qe,null),e(Qe,Yf),e(Qe,oo),e(oo,Zf),e(oo,aa),e(aa,em),e(oo,tm),e(oo,Qr),e(Qr,om),e(oo,nm),e(Qe,sm),w(Ro,Qe,null),e(Qe,am),e(Qe,Gr),e(Gr,rm),e(Qe,im),w(Ms,Qe,null),f(o,Ii,m),f(o,no,m),e(no,Po),e(Po,Kr),w(Cs,Kr,null),e(no,lm),e(no,Jr),e(Jr,dm),f(o,Si,m),f(o,Ce,m),w(xs,Ce,null),e(Ce,cm),e(Ce,so),e(so,pm),e(so,Xr),e(Xr,hm),e(so,fm),e(so,Yr),e(Yr,mm),e(so,um),e(Ce,gm),e(Ce,Rs),e(Rs,_m),e(Rs,Ps),e(Ps,bm),e(Rs,vm),e(Ce,km),e(Ce,Bs),e(Bs,Tm),e(Bs,js),e(js,wm),e(Bs,ym),e(Ce,Dm),w(Bo,Ce,null),e(Ce,Em),e(Ce,Ge),w(As,Ge,null),e(Ge,$m),e(Ge,ao),e(ao,Fm),e(ao,ra),e(ra,Vm),e(ao,qm),e(ao,Zr),e(Zr,zm),e(ao,Mm),e(Ge,Cm),w(jo,Ge,null),e(Ge,xm),e(Ge,ei),e(ei,Rm),e(Ge,Pm),w(Ls,Ge,null),Ni=!0},p(o,[m]){const Is={};m&2&&(Is.$$scope={dirty:m,ctx:o}),po.$set(Is);const ti={};m&2&&(ti.$$scope={dirty:m,ctx:o}),fo.$set(ti);const oi={};m&2&&(oi.$$scope={dirty:m,ctx:o}),uo.$set(oi);const ni={};m&2&&(ni.$$scope={dirty:m,ctx:o}),_o.$set(ni);const Ss={};m&2&&(Ss.$$scope={dirty:m,ctx:o}),vo.$set(Ss);const si={};m&2&&(si.$$scope={dirty:m,ctx:o}),To.$set(si);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),yo.$set(ai);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),Do.$set(ri);const Ns={};m&2&&(Ns.$$scope={dirty:m,ctx:o}),Fo.$set(Ns);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),Vo.$set(ii);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),zo.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),Mo.$set(di);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),xo.$set(ci);const Os={};m&2&&(Os.$$scope={dirty:m,ctx:o}),Ro.$set(Os);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),Bo.$set(pi);const Ao={};m&2&&(Ao.$$scope={dirty:m,ctx:o}),jo.$set(Ao)},i(o){Ni||(y(b.$$.fragment,o),y(ee.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(mn.$$.fragment,o),y(po.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(fo.$$.fragment,o),y(vn.$$.fragment,o),y(kn.$$.fragment,o),y(Dn.$$.fragment,o),y(uo.$$.fragment,o),y(En.$$.fragment,o),y($n.$$.fragment,o),y(Fn.$$.fragment,o),y(Cn.$$.fragment,o),y(_o.$$.fragment,o),y(xn.$$.fragment,o),y(Rn.$$.fragment,o),y(Pn.$$.fragment,o),y(Bn.$$.fragment,o),y(Sn.$$.fragment,o),y(vo.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Wn.$$.fragment,o),y(Kn.$$.fragment,o),y(To.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(yo.$$.fragment,o),y(ns.$$.fragment,o),y(Do.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(Fo.$$.fragment,o),y(ms.$$.fragment,o),y(Vo.$$.fragment,o),y(us.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(zo.$$.fragment,o),y(ws.$$.fragment,o),y(Mo.$$.fragment,o),y(ys.$$.fragment,o),y(Ds.$$.fragment,o),y(Es.$$.fragment,o),y(xo.$$.fragment,o),y(zs.$$.fragment,o),y(Ro.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(xs.$$.fragment,o),y(Bo.$$.fragment,o),y(As.$$.fragment,o),y(jo.$$.fragment,o),y(Ls.$$.fragment,o),Ni=!0)},o(o){D(b.$$.fragment,o),D(ee.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(tn.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(dn.$$.fragment,o),D(mn.$$.fragment,o),D(po.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(fo.$$.fragment,o),D(vn.$$.fragment,o),D(kn.$$.fragment,o),D(Dn.$$.fragment,o),D(uo.$$.fragment,o),D(En.$$.fragment,o),D($n.$$.fragment,o),D(Fn.$$.fragment,o),D(Cn.$$.fragment,o),D(_o.$$.fragment,o),D(xn.$$.fragment,o),D(Rn.$$.fragment,o),D(Pn.$$.fragment,o),D(Bn.$$.fragment,o),D(Sn.$$.fragment,o),D(vo.$$.fragment,o),D(Nn.$$.fragment,o),D(On.$$.fragment,o),D(Wn.$$.fragment,o),D(Kn.$$.fragment,o),D(To.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(Yn.$$.fragment,o),D(yo.$$.fragment,o),D(ns.$$.fragment,o),D(Do.$$.fragment,o),D(ss.$$.fragment,o),D(as.$$.fragment,o),D(rs.$$.fragment,o),D(is.$$.fragment,o),D(ds.$$.fragment,o),D(cs.$$.fragment,o),D(Fo.$$.fragment,o),D(ms.$$.fragment,o),D(Vo.$$.fragment,o),D(us.$$.fragment,o),D(gs.$$.fragment,o),D(_s.$$.fragment,o),D(zo.$$.fragment,o),D(ws.$$.fragment,o),D(Mo.$$.fragment,o),D(ys.$$.fragment,o),D(Ds.$$.fragment,o),D(Es.$$.fragment,o),D(xo.$$.fragment,o),D(zs.$$.fragment,o),D(Ro.$$.fragment,o),D(Ms.$$.fragment,o),D(Cs.$$.fragment,o),D(xs.$$.fragment,o),D(Bo.$$.fragment,o),D(As.$$.fragment,o),D(jo.$$.fragment,o),D(Ls.$$.fragment,o),Ni=!1},d(o){t(h),o&&t($),o&&t(u),E(b),o&&t(J),o&&t(q),E(ee),o&&t(re),o&&t(O),o&&t(C),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(N),o&&t(X),o&&t(F),o&&t(G),o&&t(we),o&&t(x),o&&t(fi),o&&t(Ze),o&&t(mi),o&&t(Vt),E(Go),o&&t(ui),o&&t(lt),E(Ko),o&&t(gi),o&&t(Mt),E(Xo),o&&t(_i),o&&t(qe),E(Yo),E(tn),E(nn),E(sn),E(an),E(rn),o&&t(bi),o&&t(Rt),E(ln),o&&t(vi),o&&t(Je),E(dn),E(mn),E(po),E(un),o&&t(ki),o&&t(Bt),E(gn),o&&t(Ti),o&&t(dt),E(_n),E(bn),E(fo),o&&t(wi),o&&t(jt),E(vn),o&&t(yi),o&&t(Xe),E(kn),E(Dn),E(uo),E(En),o&&t(Di),o&&t(It),E($n),o&&t(Ei),o&&t(Pe),E(Fn),E(Cn),E(_o),E(xn),E(Rn),o&&t($i),o&&t(Nt),E(Pn),o&&t(Fi),o&&t(Be),E(Bn),E(Sn),E(vo),E(Nn),o&&t(Vi),o&&t(Wt),E(On),o&&t(qi),o&&t(je),E(Wn),E(Kn),E(To),E(Jn),o&&t(zi),o&&t(Qt),E(Xn),o&&t(Mi),o&&t(Ae),E(Yn),E(yo),E(ns),E(Do),E(ss),o&&t(Ci),o&&t(Kt),E(as),o&&t(xi),o&&t(ct),E(rs),E(is),o&&t(Ri),o&&t(Jt),E(ds),o&&t(Pi),o&&t(Le),E(cs),E(Fo),E(ms),E(Vo),E(us),o&&t(Bi),o&&t(Zt),E(gs),o&&t(ji),o&&t(ze),E(_s),E(zo),E(ws),E(Mo),E(ys),o&&t(Ai),o&&t(to),E(Ds),o&&t(Li),o&&t(Me),E(Es),E(xo),E(zs),E(Ro),E(Ms),o&&t(Ii),o&&t(no),E(Cs),o&&t(Si),o&&t(Ce),E(xs),E(Bo),E(As),E(jo),E(Ls)}}}const A_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function L_(L,h,$){let{fw:u}=h;return L.$$set=g=>{"fw"in g&&$(0,u=g.fw)},[u]}class U_ extends __{constructor(h){super();b_(this,h,L_,j_,v_,{fw:0})}}export{U_ as default,A_ as metadata};
