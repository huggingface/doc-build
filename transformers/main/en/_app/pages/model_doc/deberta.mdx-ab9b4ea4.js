import{S as z_,i as M_,s as j_,e as a,k as l,w as k,t as n,M as x_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as m,y as w,q as v,o as y,B as D,v as C_}from"../../chunks/vendor-6b77c823.js";import{T as Ke}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-1088f2fb.js";import{C as De}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Re}from"../../chunks/IconCopyLink-7a11ce68.js";function P_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function R_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function A_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function L_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function B_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function I_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,x,ne,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,C,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),B=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),A=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),C=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);x=r(P,"LI",{});var Q=i(x);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),C=r(P,"LI",{});var we=i(C);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,x),e(x,ne),e(x,W),e(W,de),e(x,se),e(x,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,C),e(C,ke),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function S_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function O_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,x,ne,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,C,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),B=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),A=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),C=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);x=r(P,"LI",{});var Q=i(x);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),C=r(P,"LI",{});var we=i(C);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,x),e(x,ne),e(x,W),e(W,de),e(x,se),e(x,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,C),e(C,ke),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function N_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function W_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,x,ne,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,C,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),B=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),A=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),C=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);x=r(P,"LI",{});var Q=i(x);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),C=r(P,"LI",{});var we=i(C);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,x),e(x,ne),e(x,W),e(W,de),e(x,se),e(x,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,C),e(C,ke),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function H_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function U_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,x,ne,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,C,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),B=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),A=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),C=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);x=r(P,"LI",{});var Q=i(x);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),C=r(P,"LI",{});var we=i(C);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,x),e(x,ne),e(x,W),e(W,de),e(x,se),e(x,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,C),e(C,ke),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function Q_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function G_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,x,ne,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,C,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),B=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),A=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),C=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);x=r(P,"LI",{});var Q=i(x);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),C=r(P,"LI",{});var we=i(C);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,x),e(x,ne),e(x,W),e(W,de),e(x,se),e(x,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,C),e(C,ke),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function K_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function V_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,x,ne,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,C,ke,U,oe,p,E,V,Fe,qe,R,pe,Te,$e,P,Q,Ee,ze,O,re,ve,we,ie,Pl,Xs,Rl,Al,Ys,Ll,Bl,Ho,Il,Sl,Ol,Et,Nl,Zs,Wl,Hl,ea,Ul,Ql,Ti,Ft,ao,Pa,Uo,Gl,Ra,Kl,wi,je,Qo,Vl,Aa,Jl,Xl,gt,Go,Yl,La,Zl,ed,Ko,Ba,td,od,Ia,nd,sd,ro,Vo,ad,qt,rd,Sa,id,ld,Oa,dd,cd,pd,tt,Jo,hd,Na,md,fd,Xo,ud,zt,gd,Wa,_d,bd,Ha,kd,Td,wd,ta,Yo,vi,Mt,io,Ua,Zo,vd,Qa,yd,yi,Xe,en,Dd,tn,$d,Ga,Ed,Fd,qd,_t,on,zd,Ka,Md,jd,nn,Va,xd,Cd,Ja,Pd,Rd,ot,sn,Ad,Xa,Ld,Bd,an,Id,jt,Sd,Ya,Od,Nd,Za,Wd,Hd,Di,xt,lo,er,rn,Ud,tr,Qd,$i,Ye,ln,Gd,dn,Kd,cn,Vd,Jd,Xd,pn,Yd,hn,Zd,ec,tc,Ve,mn,oc,Ct,nc,oa,sc,ac,or,rc,ic,lc,co,dc,nr,cc,pc,fn,Ei,Pt,po,sr,un,hc,ar,mc,Fi,Rt,gn,fc,rr,uc,qi,At,ho,ir,_n,gc,lr,_c,zi,Ze,bn,bc,Lt,kc,dr,Tc,wc,kn,vc,yc,Dc,Tn,$c,wn,Ec,Fc,qc,Ae,vn,zc,Bt,Mc,na,jc,xc,cr,Cc,Pc,Rc,mo,Ac,pr,Lc,Bc,yn,Ic,Dn,Mi,It,fo,hr,$n,Sc,mr,Oc,ji,We,En,Nc,fr,Wc,Hc,Fn,Uc,qn,Qc,Gc,Kc,zn,Vc,Mn,Jc,Xc,Yc,ye,jn,Zc,St,ep,sa,tp,op,ur,np,sp,ap,uo,rp,gr,ip,lp,xn,dp,Cn,cp,_r,pp,hp,Pn,mp,Rn,xi,Ot,go,br,An,fp,kr,up,Ci,He,Ln,gp,Tr,_p,bp,Bn,kp,In,Tp,wp,vp,Sn,yp,On,Dp,$p,Ep,Le,Nn,Fp,Nt,qp,aa,zp,Mp,wr,jp,xp,Cp,_o,Pp,vr,Rp,Ap,Wn,Lp,Hn,Pi,Wt,bo,yr,Un,Bp,Dr,Ip,Ri,Ue,Qn,Sp,Ht,Op,$r,Np,Wp,Er,Hp,Up,Qp,Gn,Gp,Kn,Kp,Vp,Jp,Vn,Xp,Jn,Yp,Zp,eh,Be,Xn,th,Ut,oh,ra,nh,sh,Fr,ah,rh,ih,ko,lh,qr,dh,ch,Yn,ph,Zn,Ai,Qt,To,zr,es,hh,Mr,mh,Li,Qe,ts,fh,os,uh,ns,gh,_h,bh,ss,kh,as,Th,wh,vh,wo,yh,Je,rs,Dh,Gt,$h,ia,Eh,Fh,jr,qh,zh,Mh,vo,jh,xr,xh,Ch,is,Bi,Kt,yo,Cr,ls,Ph,Pr,Rh,Ii,ut,ds,Ah,Rr,Lh,Bh,nt,cs,Ih,Ar,Sh,Oh,ps,Nh,Lr,Wh,Hh,Uh,et,Qh,Br,Gh,Kh,Ir,Vh,Jh,Sr,Xh,Yh,Or,Zh,em,Si,Vt,Do,Nr,hs,tm,Wr,om,Oi,Ge,ms,nm,Jt,sm,Hr,am,rm,fs,im,lm,dm,us,cm,gs,pm,hm,mm,$o,fm,Ie,_s,um,Xt,gm,la,_m,bm,Ur,km,Tm,wm,Eo,vm,Qr,ym,Dm,bs,$m,ks,Ni,Yt,Fo,Gr,Ts,Em,Kr,Fm,Wi,xe,ws,qm,Vr,zm,Mm,vs,jm,ys,xm,Cm,Pm,Ds,Rm,$s,Am,Lm,Bm,qo,Im,Se,Es,Sm,Zt,Om,da,Nm,Wm,Jr,Hm,Um,Qm,zo,Gm,Xr,Km,Vm,Fs,Jm,qs,Hi,eo,Mo,Yr,zs,Xm,Zr,Ym,Ui,Ce,Ms,Zm,ei,ef,tf,js,of,xs,nf,sf,af,Cs,rf,Ps,lf,df,cf,jo,pf,Oe,Rs,hf,to,mf,ca,ff,uf,ti,gf,_f,bf,xo,kf,oi,Tf,wf,As,vf,Ls,Qi,oo,Co,ni,Bs,yf,si,Df,Gi,Pe,Is,$f,no,Ef,ai,Ff,qf,ri,zf,Mf,jf,Ss,xf,Os,Cf,Pf,Rf,Ns,Af,Ws,Lf,Bf,If,Po,Sf,Ne,Hs,Of,so,Nf,pa,Wf,Hf,ii,Uf,Qf,Gf,Ro,Kf,li,Vf,Jf,Us,Xf,Qs,Ki;return b=new Re({}),ee=new Re({}),P=new Re({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L33"}}),Uo=new Re({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L62"}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L133",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L158",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L185",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new J({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zo=new Re({}),en=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L63"}}),on=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),rn=new Re({}),ln=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L882"}}),mn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L906",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),co=new Ke({props:{$$slots:{default:[P_]},$$scope:{ctx:G}}}),fn=new De({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Re({}),gn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L787"}}),_n=new Re({}),bn=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L994"}}),vn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1013",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),mo=new Ke({props:{$$slots:{default:[R_]},$$scope:{ctx:G}}}),yn=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Dn=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),$n=new Re({}),En=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1129"}}),jn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),uo=new Ke({props:{$$slots:{default:[A_]},$$scope:{ctx:G}}}),xn=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Cn=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Pn=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Rn=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained(
    "microsoft/deberta-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),An=new Re({}),Ln=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1248"}}),Nn=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1262",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),_o=new Ke({props:{$$slots:{default:[L_]},$$scope:{ctx:G}}}),Wn=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

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
`}}),Hn=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Un=new Re({}),Qn=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1324"}}),Xn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1337",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),ko=new Ke({props:{$$slots:{default:[B_]},$$scope:{ctx:G}}}),Yn=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Zn=new De({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),es=new Re({}),ts=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1073"}}),wo=new Ke({props:{$$slots:{default:[I_]},$$scope:{ctx:G}}}),rs=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),vo=new Ke({props:{$$slots:{default:[S_]},$$scope:{ctx:G}}}),is=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ls=new Re({}),ds=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L978"}}),cs=new J({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),hs=new Re({}),ms=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1121"}}),$o=new Ke({props:{$$slots:{default:[O_]},$$scope:{ctx:G}}}),_s=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1137",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Eo=new Ke({props:{$$slots:{default:[N_]},$$scope:{ctx:G}}}),bs=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),ks=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),Ts=new Re({}),ws=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1204"}}),qo=new Ke({props:{$$slots:{default:[W_]},$$scope:{ctx:G}}}),Es=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1222",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),zo=new Ke({props:{$$slots:{default:[H_]},$$scope:{ctx:G}}}),Fs=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),qs=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),zs=new Re({}),Ms=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1292"}}),jo=new Ke({props:{$$slots:{default:[U_]},$$scope:{ctx:G}}}),Rs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1304",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),xo=new Ke({props:{$$slots:{default:[Q_]},$$scope:{ctx:G}}}),As=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Ls=new De({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Bs=new Re({}),Is=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1370"}}),Po=new Ke({props:{$$slots:{default:[G_]},$$scope:{ctx:G}}}),Hs=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1381",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Ro=new Ke({props:{$$slots:{default:[K_]},$$scope:{ctx:G}}}),Us=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Qs=new De({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){h=a("meta"),q=l(),u=a("h1"),g=a("a"),$=a("span"),k(b.$$.fragment),_=l(),F=a("span"),he=n("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),B=a("span"),k(ee.$$.fragment),me=l(),I=a("span"),fe=n("Overview"),le=l(),N=a("p"),A=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),x=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=l(),se=a("p"),H=n("The abstract from the paper is the following:"),ce=l(),ae=a("p"),j=a("em"),ue=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),S=l(),K=a("p"),be=n("This model was contributed by "),C=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),p=n("kamalkraj"),E=n(" . The original code can be found "),V=a("a"),Fe=n("here"),qe=n("."),R=l(),pe=a("h2"),Te=a("a"),$e=a("span"),k(P.$$.fragment),Q=l(),Ee=a("span"),ze=n("DebertaConfig"),O=l(),re=a("div"),k(ve.$$.fragment),we=l(),ie=a("p"),Pl=n("This is the configuration class to store the configuration of a "),Xs=a("a"),Rl=n("DebertaModel"),Al=n(" or a "),Ys=a("a"),Ll=n("TFDebertaModel"),Bl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a("a"),Il=n("microsoft/deberta-base"),Sl=n(" architecture."),Ol=l(),Et=a("p"),Nl=n("Configuration objects inherit from "),Zs=a("a"),Wl=n("PretrainedConfig"),Hl=n(` and can be used to control the model outputs. Read the
documentation from `),ea=a("a"),Ul=n("PretrainedConfig"),Ql=n(" for more information."),Ti=l(),Ft=a("h2"),ao=a("a"),Pa=a("span"),k(Uo.$$.fragment),Gl=l(),Ra=a("span"),Kl=n("DebertaTokenizer"),wi=l(),je=a("div"),k(Qo.$$.fragment),Vl=l(),Aa=a("p"),Jl=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Xl=l(),gt=a("div"),k(Go.$$.fragment),Yl=l(),La=a("p"),Zl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),ed=l(),Ko=a("ul"),Ba=a("li"),td=n("single sequence: [CLS] X [SEP]"),od=l(),Ia=a("li"),nd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),sd=l(),ro=a("div"),k(Vo.$$.fragment),ad=l(),qt=a("p"),rd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sa=a("code"),id=n("prepare_for_model"),ld=n(" or "),Oa=a("code"),dd=n("encode_plus"),cd=n(" methods."),pd=l(),tt=a("div"),k(Jo.$$.fragment),hd=l(),Na=a("p"),md=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),fd=l(),k(Xo.$$.fragment),ud=l(),zt=a("p"),gd=n("If "),Wa=a("code"),_d=n("token_ids_1"),bd=n(" is "),Ha=a("code"),kd=n("None"),Td=n(", this method only returns the first portion of the mask (0s)."),wd=l(),ta=a("div"),k(Yo.$$.fragment),vi=l(),Mt=a("h2"),io=a("a"),Ua=a("span"),k(Zo.$$.fragment),vd=l(),Qa=a("span"),yd=n("DebertaTokenizerFast"),yi=l(),Xe=a("div"),k(en.$$.fragment),Dd=l(),tn=a("p"),$d=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Ga=a("em"),Ed=n("tokenizers"),Fd=n(" library."),qd=l(),_t=a("div"),k(on.$$.fragment),zd=l(),Ka=a("p"),Md=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),jd=l(),nn=a("ul"),Va=a("li"),xd=n("single sequence: [CLS] X [SEP]"),Cd=l(),Ja=a("li"),Pd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Rd=l(),ot=a("div"),k(sn.$$.fragment),Ad=l(),Xa=a("p"),Ld=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Bd=l(),k(an.$$.fragment),Id=l(),jt=a("p"),Sd=n("If "),Ya=a("code"),Od=n("token_ids_1"),Nd=n(" is "),Za=a("code"),Wd=n("None"),Hd=n(", this method only returns the first portion of the mask (0s)."),Di=l(),xt=a("h2"),lo=a("a"),er=a("span"),k(rn.$$.fragment),Ud=l(),tr=a("span"),Qd=n("DebertaModel"),$i=l(),Ye=a("div"),k(ln.$$.fragment),Gd=l(),dn=a("p"),Kd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a("a"),Vd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xd=l(),pn=a("p"),Yd=n("This model is also a PyTorch "),hn=a("a"),Zd=n("torch.nn.Module"),ec=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),tc=l(),Ve=a("div"),k(mn.$$.fragment),oc=l(),Ct=a("p"),nc=n("The "),oa=a("a"),sc=n("DebertaModel"),ac=n(" forward method, overrides the "),or=a("code"),rc=n("__call__"),ic=n(" special method."),lc=l(),k(co.$$.fragment),dc=l(),nr=a("p"),cc=n("Example:"),pc=l(),k(fn.$$.fragment),Ei=l(),Pt=a("h2"),po=a("a"),sr=a("span"),k(un.$$.fragment),hc=l(),ar=a("span"),mc=n("DebertaPreTrainedModel"),Fi=l(),Rt=a("div"),k(gn.$$.fragment),fc=l(),rr=a("p"),uc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),qi=l(),At=a("h2"),ho=a("a"),ir=a("span"),k(_n.$$.fragment),gc=l(),lr=a("span"),_c=n("DebertaForMaskedLM"),zi=l(),Ze=a("div"),k(bn.$$.fragment),bc=l(),Lt=a("p"),kc=n("DeBERTa Model with a "),dr=a("code"),Tc=n("language modeling"),wc=n(` head on top.
The DeBERTa model was proposed in `),kn=a("a"),vc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dc=l(),Tn=a("p"),$c=n("This model is also a PyTorch "),wn=a("a"),Ec=n("torch.nn.Module"),Fc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),qc=l(),Ae=a("div"),k(vn.$$.fragment),zc=l(),Bt=a("p"),Mc=n("The "),na=a("a"),jc=n("DebertaForMaskedLM"),xc=n(" forward method, overrides the "),cr=a("code"),Cc=n("__call__"),Pc=n(" special method."),Rc=l(),k(mo.$$.fragment),Ac=l(),pr=a("p"),Lc=n("Example:"),Bc=l(),k(yn.$$.fragment),Ic=l(),k(Dn.$$.fragment),Mi=l(),It=a("h2"),fo=a("a"),hr=a("span"),k($n.$$.fragment),Sc=l(),mr=a("span"),Oc=n("DebertaForSequenceClassification"),ji=l(),We=a("div"),k(En.$$.fragment),Nc=l(),fr=a("p"),Wc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Hc=l(),Fn=a("p"),Uc=n("The DeBERTa model was proposed in "),qn=a("a"),Qc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kc=l(),zn=a("p"),Vc=n("This model is also a PyTorch "),Mn=a("a"),Jc=n("torch.nn.Module"),Xc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Yc=l(),ye=a("div"),k(jn.$$.fragment),Zc=l(),St=a("p"),ep=n("The "),sa=a("a"),tp=n("DebertaForSequenceClassification"),op=n(" forward method, overrides the "),ur=a("code"),np=n("__call__"),sp=n(" special method."),ap=l(),k(uo.$$.fragment),rp=l(),gr=a("p"),ip=n("Example of single-label classification:"),lp=l(),k(xn.$$.fragment),dp=l(),k(Cn.$$.fragment),cp=l(),_r=a("p"),pp=n("Example of multi-label classification:"),hp=l(),k(Pn.$$.fragment),mp=l(),k(Rn.$$.fragment),xi=l(),Ot=a("h2"),go=a("a"),br=a("span"),k(An.$$.fragment),fp=l(),kr=a("span"),up=n("DebertaForTokenClassification"),Ci=l(),He=a("div"),k(Ln.$$.fragment),gp=l(),Tr=a("p"),_p=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),bp=l(),Bn=a("p"),kp=n("The DeBERTa model was proposed in "),In=a("a"),Tp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vp=l(),Sn=a("p"),yp=n("This model is also a PyTorch "),On=a("a"),Dp=n("torch.nn.Module"),$p=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ep=l(),Le=a("div"),k(Nn.$$.fragment),Fp=l(),Nt=a("p"),qp=n("The "),aa=a("a"),zp=n("DebertaForTokenClassification"),Mp=n(" forward method, overrides the "),wr=a("code"),jp=n("__call__"),xp=n(" special method."),Cp=l(),k(_o.$$.fragment),Pp=l(),vr=a("p"),Rp=n("Example:"),Ap=l(),k(Wn.$$.fragment),Lp=l(),k(Hn.$$.fragment),Pi=l(),Wt=a("h2"),bo=a("a"),yr=a("span"),k(Un.$$.fragment),Bp=l(),Dr=a("span"),Ip=n("DebertaForQuestionAnswering"),Ri=l(),Ue=a("div"),k(Qn.$$.fragment),Sp=l(),Ht=a("p"),Op=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),$r=a("code"),Np=n("span start logits"),Wp=n(" and "),Er=a("code"),Hp=n("span end logits"),Up=n(")."),Qp=l(),Gn=a("p"),Gp=n("The DeBERTa model was proposed in "),Kn=a("a"),Kp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jp=l(),Vn=a("p"),Xp=n("This model is also a PyTorch "),Jn=a("a"),Yp=n("torch.nn.Module"),Zp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),eh=l(),Be=a("div"),k(Xn.$$.fragment),th=l(),Ut=a("p"),oh=n("The "),ra=a("a"),nh=n("DebertaForQuestionAnswering"),sh=n(" forward method, overrides the "),Fr=a("code"),ah=n("__call__"),rh=n(" special method."),ih=l(),k(ko.$$.fragment),lh=l(),qr=a("p"),dh=n("Example:"),ch=l(),k(Yn.$$.fragment),ph=l(),k(Zn.$$.fragment),Ai=l(),Qt=a("h2"),To=a("a"),zr=a("span"),k(es.$$.fragment),hh=l(),Mr=a("span"),mh=n("TFDebertaModel"),Li=l(),Qe=a("div"),k(ts.$$.fragment),fh=l(),os=a("p"),uh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ns=a("a"),gh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_h=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bh=l(),ss=a("p"),kh=n("This model is also a "),as=a("a"),Th=n("tf.keras.Model"),wh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vh=l(),k(wo.$$.fragment),yh=l(),Je=a("div"),k(rs.$$.fragment),Dh=l(),Gt=a("p"),$h=n("The "),ia=a("a"),Eh=n("TFDebertaModel"),Fh=n(" forward method, overrides the "),jr=a("code"),qh=n("__call__"),zh=n(" special method."),Mh=l(),k(vo.$$.fragment),jh=l(),xr=a("p"),xh=n("Example:"),Ch=l(),k(is.$$.fragment),Bi=l(),Kt=a("h2"),yo=a("a"),Cr=a("span"),k(ls.$$.fragment),Ph=l(),Pr=a("span"),Rh=n("TFDebertaPreTrainedModel"),Ii=l(),ut=a("div"),k(ds.$$.fragment),Ah=l(),Rr=a("p"),Lh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Bh=l(),nt=a("div"),k(cs.$$.fragment),Ih=l(),Ar=a("p"),Sh=n("Calls the model on new inputs and returns the outputs as tensors."),Oh=l(),ps=a("p"),Nh=n("In this case "),Lr=a("code"),Wh=n("call()"),Hh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Uh=l(),et=a("p"),Qh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Br=a("code"),Gh=n("tf.keras.Model"),Kh=n(`.
To call a model on an input, always use the `),Ir=a("code"),Vh=n("__call__()"),Jh=n(` method,
i.e. `),Sr=a("code"),Xh=n("model(inputs)"),Yh=n(", which relies on the underlying "),Or=a("code"),Zh=n("call()"),em=n(" method."),Si=l(),Vt=a("h2"),Do=a("a"),Nr=a("span"),k(hs.$$.fragment),tm=l(),Wr=a("span"),om=n("TFDebertaForMaskedLM"),Oi=l(),Ge=a("div"),k(ms.$$.fragment),nm=l(),Jt=a("p"),sm=n("DeBERTa Model with a "),Hr=a("code"),am=n("language modeling"),rm=n(` head on top.
The DeBERTa model was proposed in `),fs=a("a"),im=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dm=l(),us=a("p"),cm=n("This model is also a "),gs=a("a"),pm=n("tf.keras.Model"),hm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mm=l(),k($o.$$.fragment),fm=l(),Ie=a("div"),k(_s.$$.fragment),um=l(),Xt=a("p"),gm=n("The "),la=a("a"),_m=n("TFDebertaForMaskedLM"),bm=n(" forward method, overrides the "),Ur=a("code"),km=n("__call__"),Tm=n(" special method."),wm=l(),k(Eo.$$.fragment),vm=l(),Qr=a("p"),ym=n("Example:"),Dm=l(),k(bs.$$.fragment),$m=l(),k(ks.$$.fragment),Ni=l(),Yt=a("h2"),Fo=a("a"),Gr=a("span"),k(Ts.$$.fragment),Em=l(),Kr=a("span"),Fm=n("TFDebertaForSequenceClassification"),Wi=l(),xe=a("div"),k(ws.$$.fragment),qm=l(),Vr=a("p"),zm=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Mm=l(),vs=a("p"),jm=n("The DeBERTa model was proposed in "),ys=a("a"),xm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Cm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Pm=l(),Ds=a("p"),Rm=n("This model is also a "),$s=a("a"),Am=n("tf.keras.Model"),Lm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bm=l(),k(qo.$$.fragment),Im=l(),Se=a("div"),k(Es.$$.fragment),Sm=l(),Zt=a("p"),Om=n("The "),da=a("a"),Nm=n("TFDebertaForSequenceClassification"),Wm=n(" forward method, overrides the "),Jr=a("code"),Hm=n("__call__"),Um=n(" special method."),Qm=l(),k(zo.$$.fragment),Gm=l(),Xr=a("p"),Km=n("Example:"),Vm=l(),k(Fs.$$.fragment),Jm=l(),k(qs.$$.fragment),Hi=l(),eo=a("h2"),Mo=a("a"),Yr=a("span"),k(zs.$$.fragment),Xm=l(),Zr=a("span"),Ym=n("TFDebertaForTokenClassification"),Ui=l(),Ce=a("div"),k(Ms.$$.fragment),Zm=l(),ei=a("p"),ef=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tf=l(),js=a("p"),of=n("The DeBERTa model was proposed in "),xs=a("a"),nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),af=l(),Cs=a("p"),rf=n("This model is also a "),Ps=a("a"),lf=n("tf.keras.Model"),df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=l(),k(jo.$$.fragment),pf=l(),Oe=a("div"),k(Rs.$$.fragment),hf=l(),to=a("p"),mf=n("The "),ca=a("a"),ff=n("TFDebertaForTokenClassification"),uf=n(" forward method, overrides the "),ti=a("code"),gf=n("__call__"),_f=n(" special method."),bf=l(),k(xo.$$.fragment),kf=l(),oi=a("p"),Tf=n("Example:"),wf=l(),k(As.$$.fragment),vf=l(),k(Ls.$$.fragment),Qi=l(),oo=a("h2"),Co=a("a"),ni=a("span"),k(Bs.$$.fragment),yf=l(),si=a("span"),Df=n("TFDebertaForQuestionAnswering"),Gi=l(),Pe=a("div"),k(Is.$$.fragment),$f=l(),no=a("p"),Ef=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ai=a("code"),Ff=n("span start logits"),qf=n(" and "),ri=a("code"),zf=n("span end logits"),Mf=n(")."),jf=l(),Ss=a("p"),xf=n("The DeBERTa model was proposed in "),Os=a("a"),Cf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Pf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rf=l(),Ns=a("p"),Af=n("This model is also a "),Ws=a("a"),Lf=n("tf.keras.Model"),Bf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If=l(),k(Po.$$.fragment),Sf=l(),Ne=a("div"),k(Hs.$$.fragment),Of=l(),so=a("p"),Nf=n("The "),pa=a("a"),Wf=n("TFDebertaForQuestionAnswering"),Hf=n(" forward method, overrides the "),ii=a("code"),Uf=n("__call__"),Qf=n(" special method."),Gf=l(),k(Ro.$$.fragment),Kf=l(),li=a("p"),Vf=n("Example:"),Jf=l(),k(Us.$$.fragment),Xf=l(),k(Qs.$$.fragment),this.h()},l(o){const f=x_('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),q=d(o),u=r(o,"H1",{class:!0});var Gs=i(u);g=r(Gs,"A",{id:!0,class:!0,href:!0});var di=i(g);$=r(di,"SPAN",{});var ci=i($);T(b.$$.fragment,ci),ci.forEach(t),di.forEach(t),_=d(Gs),F=r(Gs,"SPAN",{});var pi=i(F);he=s(pi,"DeBERTa"),pi.forEach(t),Gs.forEach(t),X=d(o),z=r(o,"H2",{class:!0});var Ks=i(z);Y=r(Ks,"A",{id:!0,class:!0,href:!0});var hi=i(Y);B=r(hi,"SPAN",{});var mi=i(B);T(ee.$$.fragment,mi),mi.forEach(t),hi.forEach(t),me=d(Ks),I=r(Ks,"SPAN",{});var fi=i(I);fe=s(fi,"Overview"),fi.forEach(t),Ks.forEach(t),le=d(o),N=r(o,"P",{});var Vs=i(N);A=s(Vs,"The DeBERTa model was proposed in "),te=r(Vs,"A",{href:!0,rel:!0});var ui=i(te);Z=s(ui,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ui.forEach(t),M=s(Vs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Vs.forEach(t),x=d(o),ne=r(o,"P",{});var gi=i(ne);W=s(gi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),gi.forEach(t),de=d(o),se=r(o,"P",{});var _i=i(se);H=s(_i,"The abstract from the paper is the following:"),_i.forEach(t),ce=d(o),ae=r(o,"P",{});var bi=i(ae);j=r(bi,"EM",{});var Js=i(j);ue=s(Js,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=r(Js,"A",{href:!0,rel:!0});var ki=i(L);ge=s(ki,"https://github.com/microsoft/DeBERTa"),ki.forEach(t),_e=s(Js,"."),Js.forEach(t),bi.forEach(t),S=d(o),K=r(o,"P",{});var Ao=i(K);be=s(Ao,"This model was contributed by "),C=r(Ao,"A",{href:!0,rel:!0});var Yf=i(C);ke=s(Yf,"DeBERTa"),Yf.forEach(t),U=s(Ao,`. This model TF 2.0 implementation was
contributed by `),oe=r(Ao,"A",{href:!0,rel:!0});var Zf=i(oe);p=s(Zf,"kamalkraj"),Zf.forEach(t),E=s(Ao," . The original code can be found "),V=r(Ao,"A",{href:!0,rel:!0});var eu=i(V);Fe=s(eu,"here"),eu.forEach(t),qe=s(Ao,"."),Ao.forEach(t),R=d(o),pe=r(o,"H2",{class:!0});var Vi=i(pe);Te=r(Vi,"A",{id:!0,class:!0,href:!0});var tu=i(Te);$e=r(tu,"SPAN",{});var ou=i($e);T(P.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Q=d(Vi),Ee=r(Vi,"SPAN",{});var nu=i(Ee);ze=s(nu,"DebertaConfig"),nu.forEach(t),Vi.forEach(t),O=d(o),re=r(o,"DIV",{class:!0});var ha=i(re);T(ve.$$.fragment,ha),we=d(ha),ie=r(ha,"P",{});var Lo=i(ie);Pl=s(Lo,"This is the configuration class to store the configuration of a "),Xs=r(Lo,"A",{href:!0});var su=i(Xs);Rl=s(su,"DebertaModel"),su.forEach(t),Al=s(Lo," or a "),Ys=r(Lo,"A",{href:!0});var au=i(Ys);Ll=s(au,"TFDebertaModel"),au.forEach(t),Bl=s(Lo,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r(Lo,"A",{href:!0,rel:!0});var ru=i(Ho);Il=s(ru,"microsoft/deberta-base"),ru.forEach(t),Sl=s(Lo," architecture."),Lo.forEach(t),Ol=d(ha),Et=r(ha,"P",{});var ma=i(Et);Nl=s(ma,"Configuration objects inherit from "),Zs=r(ma,"A",{href:!0});var iu=i(Zs);Wl=s(iu,"PretrainedConfig"),iu.forEach(t),Hl=s(ma,` and can be used to control the model outputs. Read the
documentation from `),ea=r(ma,"A",{href:!0});var lu=i(ea);Ul=s(lu,"PretrainedConfig"),lu.forEach(t),Ql=s(ma," for more information."),ma.forEach(t),ha.forEach(t),Ti=d(o),Ft=r(o,"H2",{class:!0});var Ji=i(Ft);ao=r(Ji,"A",{id:!0,class:!0,href:!0});var du=i(ao);Pa=r(du,"SPAN",{});var cu=i(Pa);T(Uo.$$.fragment,cu),cu.forEach(t),du.forEach(t),Gl=d(Ji),Ra=r(Ji,"SPAN",{});var pu=i(Ra);Kl=s(pu,"DebertaTokenizer"),pu.forEach(t),Ji.forEach(t),wi=d(o),je=r(o,"DIV",{class:!0});var st=i(je);T(Qo.$$.fragment,st),Vl=d(st),Aa=r(st,"P",{});var hu=i(Aa);Jl=s(hu,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),hu.forEach(t),Xl=d(st),gt=r(st,"DIV",{class:!0});var fa=i(gt);T(Go.$$.fragment,fa),Yl=d(fa),La=r(fa,"P",{});var mu=i(La);Zl=s(mu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),mu.forEach(t),ed=d(fa),Ko=r(fa,"UL",{});var Xi=i(Ko);Ba=r(Xi,"LI",{});var fu=i(Ba);td=s(fu,"single sequence: [CLS] X [SEP]"),fu.forEach(t),od=d(Xi),Ia=r(Xi,"LI",{});var uu=i(Ia);nd=s(uu,"pair of sequences: [CLS] A [SEP] B [SEP]"),uu.forEach(t),Xi.forEach(t),fa.forEach(t),sd=d(st),ro=r(st,"DIV",{class:!0});var Yi=i(ro);T(Vo.$$.fragment,Yi),ad=d(Yi),qt=r(Yi,"P",{});var ua=i(qt);rd=s(ua,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sa=r(ua,"CODE",{});var gu=i(Sa);id=s(gu,"prepare_for_model"),gu.forEach(t),ld=s(ua," or "),Oa=r(ua,"CODE",{});var _u=i(Oa);dd=s(_u,"encode_plus"),_u.forEach(t),cd=s(ua," methods."),ua.forEach(t),Yi.forEach(t),pd=d(st),tt=r(st,"DIV",{class:!0});var Bo=i(tt);T(Jo.$$.fragment,Bo),hd=d(Bo),Na=r(Bo,"P",{});var bu=i(Na);md=s(bu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),bu.forEach(t),fd=d(Bo),T(Xo.$$.fragment,Bo),ud=d(Bo),zt=r(Bo,"P",{});var ga=i(zt);gd=s(ga,"If "),Wa=r(ga,"CODE",{});var ku=i(Wa);_d=s(ku,"token_ids_1"),ku.forEach(t),bd=s(ga," is "),Ha=r(ga,"CODE",{});var Tu=i(Ha);kd=s(Tu,"None"),Tu.forEach(t),Td=s(ga,", this method only returns the first portion of the mask (0s)."),ga.forEach(t),Bo.forEach(t),wd=d(st),ta=r(st,"DIV",{class:!0});var wu=i(ta);T(Yo.$$.fragment,wu),wu.forEach(t),st.forEach(t),vi=d(o),Mt=r(o,"H2",{class:!0});var Zi=i(Mt);io=r(Zi,"A",{id:!0,class:!0,href:!0});var vu=i(io);Ua=r(vu,"SPAN",{});var yu=i(Ua);T(Zo.$$.fragment,yu),yu.forEach(t),vu.forEach(t),vd=d(Zi),Qa=r(Zi,"SPAN",{});var Du=i(Qa);yd=s(Du,"DebertaTokenizerFast"),Du.forEach(t),Zi.forEach(t),yi=d(o),Xe=r(o,"DIV",{class:!0});var Io=i(Xe);T(en.$$.fragment,Io),Dd=d(Io),tn=r(Io,"P",{});var el=i(tn);$d=s(el,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Ga=r(el,"EM",{});var $u=i(Ga);Ed=s($u,"tokenizers"),$u.forEach(t),Fd=s(el," library."),el.forEach(t),qd=d(Io),_t=r(Io,"DIV",{class:!0});var _a=i(_t);T(on.$$.fragment,_a),zd=d(_a),Ka=r(_a,"P",{});var Eu=i(Ka);Md=s(Eu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Eu.forEach(t),jd=d(_a),nn=r(_a,"UL",{});var tl=i(nn);Va=r(tl,"LI",{});var Fu=i(Va);xd=s(Fu,"single sequence: [CLS] X [SEP]"),Fu.forEach(t),Cd=d(tl),Ja=r(tl,"LI",{});var qu=i(Ja);Pd=s(qu,"pair of sequences: [CLS] A [SEP] B [SEP]"),qu.forEach(t),tl.forEach(t),_a.forEach(t),Rd=d(Io),ot=r(Io,"DIV",{class:!0});var So=i(ot);T(sn.$$.fragment,So),Ad=d(So),Xa=r(So,"P",{});var zu=i(Xa);Ld=s(zu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),zu.forEach(t),Bd=d(So),T(an.$$.fragment,So),Id=d(So),jt=r(So,"P",{});var ba=i(jt);Sd=s(ba,"If "),Ya=r(ba,"CODE",{});var Mu=i(Ya);Od=s(Mu,"token_ids_1"),Mu.forEach(t),Nd=s(ba," is "),Za=r(ba,"CODE",{});var ju=i(Za);Wd=s(ju,"None"),ju.forEach(t),Hd=s(ba,", this method only returns the first portion of the mask (0s)."),ba.forEach(t),So.forEach(t),Io.forEach(t),Di=d(o),xt=r(o,"H2",{class:!0});var ol=i(xt);lo=r(ol,"A",{id:!0,class:!0,href:!0});var xu=i(lo);er=r(xu,"SPAN",{});var Cu=i(er);T(rn.$$.fragment,Cu),Cu.forEach(t),xu.forEach(t),Ud=d(ol),tr=r(ol,"SPAN",{});var Pu=i(tr);Qd=s(Pu,"DebertaModel"),Pu.forEach(t),ol.forEach(t),$i=d(o),Ye=r(o,"DIV",{class:!0});var Oo=i(Ye);T(ln.$$.fragment,Oo),Gd=d(Oo),dn=r(Oo,"P",{});var nl=i(dn);Kd=s(nl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r(nl,"A",{href:!0,rel:!0});var Ru=i(cn);Vd=s(Ru,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ru.forEach(t),Jd=s(nl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nl.forEach(t),Xd=d(Oo),pn=r(Oo,"P",{});var sl=i(pn);Yd=s(sl,"This model is also a PyTorch "),hn=r(sl,"A",{href:!0,rel:!0});var Au=i(hn);Zd=s(Au,"torch.nn.Module"),Au.forEach(t),ec=s(sl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sl.forEach(t),tc=d(Oo),Ve=r(Oo,"DIV",{class:!0});var bt=i(Ve);T(mn.$$.fragment,bt),oc=d(bt),Ct=r(bt,"P",{});var ka=i(Ct);nc=s(ka,"The "),oa=r(ka,"A",{href:!0});var Lu=i(oa);sc=s(Lu,"DebertaModel"),Lu.forEach(t),ac=s(ka," forward method, overrides the "),or=r(ka,"CODE",{});var Bu=i(or);rc=s(Bu,"__call__"),Bu.forEach(t),ic=s(ka," special method."),ka.forEach(t),lc=d(bt),T(co.$$.fragment,bt),dc=d(bt),nr=r(bt,"P",{});var Iu=i(nr);cc=s(Iu,"Example:"),Iu.forEach(t),pc=d(bt),T(fn.$$.fragment,bt),bt.forEach(t),Oo.forEach(t),Ei=d(o),Pt=r(o,"H2",{class:!0});var al=i(Pt);po=r(al,"A",{id:!0,class:!0,href:!0});var Su=i(po);sr=r(Su,"SPAN",{});var Ou=i(sr);T(un.$$.fragment,Ou),Ou.forEach(t),Su.forEach(t),hc=d(al),ar=r(al,"SPAN",{});var Nu=i(ar);mc=s(Nu,"DebertaPreTrainedModel"),Nu.forEach(t),al.forEach(t),Fi=d(o),Rt=r(o,"DIV",{class:!0});var rl=i(Rt);T(gn.$$.fragment,rl),fc=d(rl),rr=r(rl,"P",{});var Wu=i(rr);uc=s(Wu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Wu.forEach(t),rl.forEach(t),qi=d(o),At=r(o,"H2",{class:!0});var il=i(At);ho=r(il,"A",{id:!0,class:!0,href:!0});var Hu=i(ho);ir=r(Hu,"SPAN",{});var Uu=i(ir);T(_n.$$.fragment,Uu),Uu.forEach(t),Hu.forEach(t),gc=d(il),lr=r(il,"SPAN",{});var Qu=i(lr);_c=s(Qu,"DebertaForMaskedLM"),Qu.forEach(t),il.forEach(t),zi=d(o),Ze=r(o,"DIV",{class:!0});var No=i(Ze);T(bn.$$.fragment,No),bc=d(No),Lt=r(No,"P",{});var Ta=i(Lt);kc=s(Ta,"DeBERTa Model with a "),dr=r(Ta,"CODE",{});var Gu=i(dr);Tc=s(Gu,"language modeling"),Gu.forEach(t),wc=s(Ta,` head on top.
The DeBERTa model was proposed in `),kn=r(Ta,"A",{href:!0,rel:!0});var Ku=i(kn);vc=s(Ku,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ku.forEach(t),yc=s(Ta,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ta.forEach(t),Dc=d(No),Tn=r(No,"P",{});var ll=i(Tn);$c=s(ll,"This model is also a PyTorch "),wn=r(ll,"A",{href:!0,rel:!0});var Vu=i(wn);Ec=s(Vu,"torch.nn.Module"),Vu.forEach(t),Fc=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),qc=d(No),Ae=r(No,"DIV",{class:!0});var at=i(Ae);T(vn.$$.fragment,at),zc=d(at),Bt=r(at,"P",{});var wa=i(Bt);Mc=s(wa,"The "),na=r(wa,"A",{href:!0});var Ju=i(na);jc=s(Ju,"DebertaForMaskedLM"),Ju.forEach(t),xc=s(wa," forward method, overrides the "),cr=r(wa,"CODE",{});var Xu=i(cr);Cc=s(Xu,"__call__"),Xu.forEach(t),Pc=s(wa," special method."),wa.forEach(t),Rc=d(at),T(mo.$$.fragment,at),Ac=d(at),pr=r(at,"P",{});var Yu=i(pr);Lc=s(Yu,"Example:"),Yu.forEach(t),Bc=d(at),T(yn.$$.fragment,at),Ic=d(at),T(Dn.$$.fragment,at),at.forEach(t),No.forEach(t),Mi=d(o),It=r(o,"H2",{class:!0});var dl=i(It);fo=r(dl,"A",{id:!0,class:!0,href:!0});var Zu=i(fo);hr=r(Zu,"SPAN",{});var eg=i(hr);T($n.$$.fragment,eg),eg.forEach(t),Zu.forEach(t),Sc=d(dl),mr=r(dl,"SPAN",{});var tg=i(mr);Oc=s(tg,"DebertaForSequenceClassification"),tg.forEach(t),dl.forEach(t),ji=d(o),We=r(o,"DIV",{class:!0});var kt=i(We);T(En.$$.fragment,kt),Nc=d(kt),fr=r(kt,"P",{});var og=i(fr);Wc=s(og,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),og.forEach(t),Hc=d(kt),Fn=r(kt,"P",{});var cl=i(Fn);Uc=s(cl,"The DeBERTa model was proposed in "),qn=r(cl,"A",{href:!0,rel:!0});var ng=i(qn);Qc=s(ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ng.forEach(t),Gc=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),Kc=d(kt),zn=r(kt,"P",{});var pl=i(zn);Vc=s(pl,"This model is also a PyTorch "),Mn=r(pl,"A",{href:!0,rel:!0});var sg=i(Mn);Jc=s(sg,"torch.nn.Module"),sg.forEach(t),Xc=s(pl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),pl.forEach(t),Yc=d(kt),ye=r(kt,"DIV",{class:!0});var Me=i(ye);T(jn.$$.fragment,Me),Zc=d(Me),St=r(Me,"P",{});var va=i(St);ep=s(va,"The "),sa=r(va,"A",{href:!0});var ag=i(sa);tp=s(ag,"DebertaForSequenceClassification"),ag.forEach(t),op=s(va," forward method, overrides the "),ur=r(va,"CODE",{});var rg=i(ur);np=s(rg,"__call__"),rg.forEach(t),sp=s(va," special method."),va.forEach(t),ap=d(Me),T(uo.$$.fragment,Me),rp=d(Me),gr=r(Me,"P",{});var ig=i(gr);ip=s(ig,"Example of single-label classification:"),ig.forEach(t),lp=d(Me),T(xn.$$.fragment,Me),dp=d(Me),T(Cn.$$.fragment,Me),cp=d(Me),_r=r(Me,"P",{});var lg=i(_r);pp=s(lg,"Example of multi-label classification:"),lg.forEach(t),hp=d(Me),T(Pn.$$.fragment,Me),mp=d(Me),T(Rn.$$.fragment,Me),Me.forEach(t),kt.forEach(t),xi=d(o),Ot=r(o,"H2",{class:!0});var hl=i(Ot);go=r(hl,"A",{id:!0,class:!0,href:!0});var dg=i(go);br=r(dg,"SPAN",{});var cg=i(br);T(An.$$.fragment,cg),cg.forEach(t),dg.forEach(t),fp=d(hl),kr=r(hl,"SPAN",{});var pg=i(kr);up=s(pg,"DebertaForTokenClassification"),pg.forEach(t),hl.forEach(t),Ci=d(o),He=r(o,"DIV",{class:!0});var Tt=i(He);T(Ln.$$.fragment,Tt),gp=d(Tt),Tr=r(Tt,"P",{});var hg=i(Tr);_p=s(hg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hg.forEach(t),bp=d(Tt),Bn=r(Tt,"P",{});var ml=i(Bn);kp=s(ml,"The DeBERTa model was proposed in "),In=r(ml,"A",{href:!0,rel:!0});var mg=i(In);Tp=s(mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mg.forEach(t),wp=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),vp=d(Tt),Sn=r(Tt,"P",{});var fl=i(Sn);yp=s(fl,"This model is also a PyTorch "),On=r(fl,"A",{href:!0,rel:!0});var fg=i(On);Dp=s(fg,"torch.nn.Module"),fg.forEach(t),$p=s(fl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fl.forEach(t),Ep=d(Tt),Le=r(Tt,"DIV",{class:!0});var rt=i(Le);T(Nn.$$.fragment,rt),Fp=d(rt),Nt=r(rt,"P",{});var ya=i(Nt);qp=s(ya,"The "),aa=r(ya,"A",{href:!0});var ug=i(aa);zp=s(ug,"DebertaForTokenClassification"),ug.forEach(t),Mp=s(ya," forward method, overrides the "),wr=r(ya,"CODE",{});var gg=i(wr);jp=s(gg,"__call__"),gg.forEach(t),xp=s(ya," special method."),ya.forEach(t),Cp=d(rt),T(_o.$$.fragment,rt),Pp=d(rt),vr=r(rt,"P",{});var _g=i(vr);Rp=s(_g,"Example:"),_g.forEach(t),Ap=d(rt),T(Wn.$$.fragment,rt),Lp=d(rt),T(Hn.$$.fragment,rt),rt.forEach(t),Tt.forEach(t),Pi=d(o),Wt=r(o,"H2",{class:!0});var ul=i(Wt);bo=r(ul,"A",{id:!0,class:!0,href:!0});var bg=i(bo);yr=r(bg,"SPAN",{});var kg=i(yr);T(Un.$$.fragment,kg),kg.forEach(t),bg.forEach(t),Bp=d(ul),Dr=r(ul,"SPAN",{});var Tg=i(Dr);Ip=s(Tg,"DebertaForQuestionAnswering"),Tg.forEach(t),ul.forEach(t),Ri=d(o),Ue=r(o,"DIV",{class:!0});var wt=i(Ue);T(Qn.$$.fragment,wt),Sp=d(wt),Ht=r(wt,"P",{});var Da=i(Ht);Op=s(Da,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),$r=r(Da,"CODE",{});var wg=i($r);Np=s(wg,"span start logits"),wg.forEach(t),Wp=s(Da," and "),Er=r(Da,"CODE",{});var vg=i(Er);Hp=s(vg,"span end logits"),vg.forEach(t),Up=s(Da,")."),Da.forEach(t),Qp=d(wt),Gn=r(wt,"P",{});var gl=i(Gn);Gp=s(gl,"The DeBERTa model was proposed in "),Kn=r(gl,"A",{href:!0,rel:!0});var yg=i(Kn);Kp=s(yg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yg.forEach(t),Vp=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Jp=d(wt),Vn=r(wt,"P",{});var _l=i(Vn);Xp=s(_l,"This model is also a PyTorch "),Jn=r(_l,"A",{href:!0,rel:!0});var Dg=i(Jn);Yp=s(Dg,"torch.nn.Module"),Dg.forEach(t),Zp=s(_l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_l.forEach(t),eh=d(wt),Be=r(wt,"DIV",{class:!0});var it=i(Be);T(Xn.$$.fragment,it),th=d(it),Ut=r(it,"P",{});var $a=i(Ut);oh=s($a,"The "),ra=r($a,"A",{href:!0});var $g=i(ra);nh=s($g,"DebertaForQuestionAnswering"),$g.forEach(t),sh=s($a," forward method, overrides the "),Fr=r($a,"CODE",{});var Eg=i(Fr);ah=s(Eg,"__call__"),Eg.forEach(t),rh=s($a," special method."),$a.forEach(t),ih=d(it),T(ko.$$.fragment,it),lh=d(it),qr=r(it,"P",{});var Fg=i(qr);dh=s(Fg,"Example:"),Fg.forEach(t),ch=d(it),T(Yn.$$.fragment,it),ph=d(it),T(Zn.$$.fragment,it),it.forEach(t),wt.forEach(t),Ai=d(o),Qt=r(o,"H2",{class:!0});var bl=i(Qt);To=r(bl,"A",{id:!0,class:!0,href:!0});var qg=i(To);zr=r(qg,"SPAN",{});var zg=i(zr);T(es.$$.fragment,zg),zg.forEach(t),qg.forEach(t),hh=d(bl),Mr=r(bl,"SPAN",{});var Mg=i(Mr);mh=s(Mg,"TFDebertaModel"),Mg.forEach(t),bl.forEach(t),Li=d(o),Qe=r(o,"DIV",{class:!0});var vt=i(Qe);T(ts.$$.fragment,vt),fh=d(vt),os=r(vt,"P",{});var kl=i(os);uh=s(kl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ns=r(kl,"A",{href:!0,rel:!0});var jg=i(ns);gh=s(jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jg.forEach(t),_h=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),bh=d(vt),ss=r(vt,"P",{});var Tl=i(ss);kh=s(Tl,"This model is also a "),as=r(Tl,"A",{href:!0,rel:!0});var xg=i(as);Th=s(xg,"tf.keras.Model"),xg.forEach(t),wh=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),vh=d(vt),T(wo.$$.fragment,vt),yh=d(vt),Je=r(vt,"DIV",{class:!0});var yt=i(Je);T(rs.$$.fragment,yt),Dh=d(yt),Gt=r(yt,"P",{});var Ea=i(Gt);$h=s(Ea,"The "),ia=r(Ea,"A",{href:!0});var Cg=i(ia);Eh=s(Cg,"TFDebertaModel"),Cg.forEach(t),Fh=s(Ea," forward method, overrides the "),jr=r(Ea,"CODE",{});var Pg=i(jr);qh=s(Pg,"__call__"),Pg.forEach(t),zh=s(Ea," special method."),Ea.forEach(t),Mh=d(yt),T(vo.$$.fragment,yt),jh=d(yt),xr=r(yt,"P",{});var Rg=i(xr);xh=s(Rg,"Example:"),Rg.forEach(t),Ch=d(yt),T(is.$$.fragment,yt),yt.forEach(t),vt.forEach(t),Bi=d(o),Kt=r(o,"H2",{class:!0});var wl=i(Kt);yo=r(wl,"A",{id:!0,class:!0,href:!0});var Ag=i(yo);Cr=r(Ag,"SPAN",{});var Lg=i(Cr);T(ls.$$.fragment,Lg),Lg.forEach(t),Ag.forEach(t),Ph=d(wl),Pr=r(wl,"SPAN",{});var Bg=i(Pr);Rh=s(Bg,"TFDebertaPreTrainedModel"),Bg.forEach(t),wl.forEach(t),Ii=d(o),ut=r(o,"DIV",{class:!0});var Fa=i(ut);T(ds.$$.fragment,Fa),Ah=d(Fa),Rr=r(Fa,"P",{});var Ig=i(Rr);Lh=s(Ig,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ig.forEach(t),Bh=d(Fa),nt=r(Fa,"DIV",{class:!0});var Wo=i(nt);T(cs.$$.fragment,Wo),Ih=d(Wo),Ar=r(Wo,"P",{});var Sg=i(Ar);Sh=s(Sg,"Calls the model on new inputs and returns the outputs as tensors."),Sg.forEach(t),Oh=d(Wo),ps=r(Wo,"P",{});var vl=i(ps);Nh=s(vl,"In this case "),Lr=r(vl,"CODE",{});var Og=i(Lr);Wh=s(Og,"call()"),Og.forEach(t),Hh=s(vl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),vl.forEach(t),Uh=d(Wo),et=r(Wo,"P",{});var Dt=i(et);Qh=s(Dt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Br=r(Dt,"CODE",{});var Ng=i(Br);Gh=s(Ng,"tf.keras.Model"),Ng.forEach(t),Kh=s(Dt,`.
To call a model on an input, always use the `),Ir=r(Dt,"CODE",{});var Wg=i(Ir);Vh=s(Wg,"__call__()"),Wg.forEach(t),Jh=s(Dt,` method,
i.e. `),Sr=r(Dt,"CODE",{});var Hg=i(Sr);Xh=s(Hg,"model(inputs)"),Hg.forEach(t),Yh=s(Dt,", which relies on the underlying "),Or=r(Dt,"CODE",{});var Ug=i(Or);Zh=s(Ug,"call()"),Ug.forEach(t),em=s(Dt," method."),Dt.forEach(t),Wo.forEach(t),Fa.forEach(t),Si=d(o),Vt=r(o,"H2",{class:!0});var yl=i(Vt);Do=r(yl,"A",{id:!0,class:!0,href:!0});var Qg=i(Do);Nr=r(Qg,"SPAN",{});var Gg=i(Nr);T(hs.$$.fragment,Gg),Gg.forEach(t),Qg.forEach(t),tm=d(yl),Wr=r(yl,"SPAN",{});var Kg=i(Wr);om=s(Kg,"TFDebertaForMaskedLM"),Kg.forEach(t),yl.forEach(t),Oi=d(o),Ge=r(o,"DIV",{class:!0});var $t=i(Ge);T(ms.$$.fragment,$t),nm=d($t),Jt=r($t,"P",{});var qa=i(Jt);sm=s(qa,"DeBERTa Model with a "),Hr=r(qa,"CODE",{});var Vg=i(Hr);am=s(Vg,"language modeling"),Vg.forEach(t),rm=s(qa,` head on top.
The DeBERTa model was proposed in `),fs=r(qa,"A",{href:!0,rel:!0});var Jg=i(fs);im=s(Jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jg.forEach(t),lm=s(qa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qa.forEach(t),dm=d($t),us=r($t,"P",{});var Dl=i(us);cm=s(Dl,"This model is also a "),gs=r(Dl,"A",{href:!0,rel:!0});var Xg=i(gs);pm=s(Xg,"tf.keras.Model"),Xg.forEach(t),hm=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),mm=d($t),T($o.$$.fragment,$t),fm=d($t),Ie=r($t,"DIV",{class:!0});var lt=i(Ie);T(_s.$$.fragment,lt),um=d(lt),Xt=r(lt,"P",{});var za=i(Xt);gm=s(za,"The "),la=r(za,"A",{href:!0});var Yg=i(la);_m=s(Yg,"TFDebertaForMaskedLM"),Yg.forEach(t),bm=s(za," forward method, overrides the "),Ur=r(za,"CODE",{});var Zg=i(Ur);km=s(Zg,"__call__"),Zg.forEach(t),Tm=s(za," special method."),za.forEach(t),wm=d(lt),T(Eo.$$.fragment,lt),vm=d(lt),Qr=r(lt,"P",{});var e_=i(Qr);ym=s(e_,"Example:"),e_.forEach(t),Dm=d(lt),T(bs.$$.fragment,lt),$m=d(lt),T(ks.$$.fragment,lt),lt.forEach(t),$t.forEach(t),Ni=d(o),Yt=r(o,"H2",{class:!0});var $l=i(Yt);Fo=r($l,"A",{id:!0,class:!0,href:!0});var t_=i(Fo);Gr=r(t_,"SPAN",{});var o_=i(Gr);T(Ts.$$.fragment,o_),o_.forEach(t),t_.forEach(t),Em=d($l),Kr=r($l,"SPAN",{});var n_=i(Kr);Fm=s(n_,"TFDebertaForSequenceClassification"),n_.forEach(t),$l.forEach(t),Wi=d(o),xe=r(o,"DIV",{class:!0});var dt=i(xe);T(ws.$$.fragment,dt),qm=d(dt),Vr=r(dt,"P",{});var s_=i(Vr);zm=s(s_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),s_.forEach(t),Mm=d(dt),vs=r(dt,"P",{});var El=i(vs);jm=s(El,"The DeBERTa model was proposed in "),ys=r(El,"A",{href:!0,rel:!0});var a_=i(ys);xm=s(a_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),a_.forEach(t),Cm=s(El,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),El.forEach(t),Pm=d(dt),Ds=r(dt,"P",{});var Fl=i(Ds);Rm=s(Fl,"This model is also a "),$s=r(Fl,"A",{href:!0,rel:!0});var r_=i($s);Am=s(r_,"tf.keras.Model"),r_.forEach(t),Lm=s(Fl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fl.forEach(t),Bm=d(dt),T(qo.$$.fragment,dt),Im=d(dt),Se=r(dt,"DIV",{class:!0});var ct=i(Se);T(Es.$$.fragment,ct),Sm=d(ct),Zt=r(ct,"P",{});var Ma=i(Zt);Om=s(Ma,"The "),da=r(Ma,"A",{href:!0});var i_=i(da);Nm=s(i_,"TFDebertaForSequenceClassification"),i_.forEach(t),Wm=s(Ma," forward method, overrides the "),Jr=r(Ma,"CODE",{});var l_=i(Jr);Hm=s(l_,"__call__"),l_.forEach(t),Um=s(Ma," special method."),Ma.forEach(t),Qm=d(ct),T(zo.$$.fragment,ct),Gm=d(ct),Xr=r(ct,"P",{});var d_=i(Xr);Km=s(d_,"Example:"),d_.forEach(t),Vm=d(ct),T(Fs.$$.fragment,ct),Jm=d(ct),T(qs.$$.fragment,ct),ct.forEach(t),dt.forEach(t),Hi=d(o),eo=r(o,"H2",{class:!0});var ql=i(eo);Mo=r(ql,"A",{id:!0,class:!0,href:!0});var c_=i(Mo);Yr=r(c_,"SPAN",{});var p_=i(Yr);T(zs.$$.fragment,p_),p_.forEach(t),c_.forEach(t),Xm=d(ql),Zr=r(ql,"SPAN",{});var h_=i(Zr);Ym=s(h_,"TFDebertaForTokenClassification"),h_.forEach(t),ql.forEach(t),Ui=d(o),Ce=r(o,"DIV",{class:!0});var pt=i(Ce);T(Ms.$$.fragment,pt),Zm=d(pt),ei=r(pt,"P",{});var m_=i(ei);ef=s(m_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),m_.forEach(t),tf=d(pt),js=r(pt,"P",{});var zl=i(js);of=s(zl,"The DeBERTa model was proposed in "),xs=r(zl,"A",{href:!0,rel:!0});var f_=i(xs);nf=s(f_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),f_.forEach(t),sf=s(zl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zl.forEach(t),af=d(pt),Cs=r(pt,"P",{});var Ml=i(Cs);rf=s(Ml,"This model is also a "),Ps=r(Ml,"A",{href:!0,rel:!0});var u_=i(Ps);lf=s(u_,"tf.keras.Model"),u_.forEach(t),df=s(Ml,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ml.forEach(t),cf=d(pt),T(jo.$$.fragment,pt),pf=d(pt),Oe=r(pt,"DIV",{class:!0});var ht=i(Oe);T(Rs.$$.fragment,ht),hf=d(ht),to=r(ht,"P",{});var ja=i(to);mf=s(ja,"The "),ca=r(ja,"A",{href:!0});var g_=i(ca);ff=s(g_,"TFDebertaForTokenClassification"),g_.forEach(t),uf=s(ja," forward method, overrides the "),ti=r(ja,"CODE",{});var __=i(ti);gf=s(__,"__call__"),__.forEach(t),_f=s(ja," special method."),ja.forEach(t),bf=d(ht),T(xo.$$.fragment,ht),kf=d(ht),oi=r(ht,"P",{});var b_=i(oi);Tf=s(b_,"Example:"),b_.forEach(t),wf=d(ht),T(As.$$.fragment,ht),vf=d(ht),T(Ls.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Qi=d(o),oo=r(o,"H2",{class:!0});var jl=i(oo);Co=r(jl,"A",{id:!0,class:!0,href:!0});var k_=i(Co);ni=r(k_,"SPAN",{});var T_=i(ni);T(Bs.$$.fragment,T_),T_.forEach(t),k_.forEach(t),yf=d(jl),si=r(jl,"SPAN",{});var w_=i(si);Df=s(w_,"TFDebertaForQuestionAnswering"),w_.forEach(t),jl.forEach(t),Gi=d(o),Pe=r(o,"DIV",{class:!0});var mt=i(Pe);T(Is.$$.fragment,mt),$f=d(mt),no=r(mt,"P",{});var xa=i(no);Ef=s(xa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ai=r(xa,"CODE",{});var v_=i(ai);Ff=s(v_,"span start logits"),v_.forEach(t),qf=s(xa," and "),ri=r(xa,"CODE",{});var y_=i(ri);zf=s(y_,"span end logits"),y_.forEach(t),Mf=s(xa,")."),xa.forEach(t),jf=d(mt),Ss=r(mt,"P",{});var xl=i(Ss);xf=s(xl,"The DeBERTa model was proposed in "),Os=r(xl,"A",{href:!0,rel:!0});var D_=i(Os);Cf=s(D_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),D_.forEach(t),Pf=s(xl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xl.forEach(t),Rf=d(mt),Ns=r(mt,"P",{});var Cl=i(Ns);Af=s(Cl,"This model is also a "),Ws=r(Cl,"A",{href:!0,rel:!0});var $_=i(Ws);Lf=s($_,"tf.keras.Model"),$_.forEach(t),Bf=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),If=d(mt),T(Po.$$.fragment,mt),Sf=d(mt),Ne=r(mt,"DIV",{class:!0});var ft=i(Ne);T(Hs.$$.fragment,ft),Of=d(ft),so=r(ft,"P",{});var Ca=i(so);Nf=s(Ca,"The "),pa=r(Ca,"A",{href:!0});var E_=i(pa);Wf=s(E_,"TFDebertaForQuestionAnswering"),E_.forEach(t),Hf=s(Ca," forward method, overrides the "),ii=r(Ca,"CODE",{});var F_=i(ii);Uf=s(F_,"__call__"),F_.forEach(t),Qf=s(Ca," special method."),Ca.forEach(t),Gf=d(ft),T(Ro.$$.fragment,ft),Kf=d(ft),li=r(ft,"P",{});var q_=i(li);Vf=s(q_,"Example:"),q_.forEach(t),Jf=d(ft),T(Us.$$.fragment,ft),Xf=d(ft),T(Qs.$$.fragment,ft),ft.forEach(t),mt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(J_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(C,"href","https://huggingface.co/DeBERTa"),c(C,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Xs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ys,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Zs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ea,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.DebertaTokenizer"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(xt,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(Pt,"class","relative group"),c(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(At,"class","relative group"),c(kn,"href","https://arxiv.org/abs/2006.03654"),c(kn,"rel","nofollow"),c(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wn,"rel","nofollow"),c(na,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fo,"id","transformers.DebertaForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(qn,"href","https://arxiv.org/abs/2006.03654"),c(qn,"rel","nofollow"),c(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mn,"rel","nofollow"),c(sa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(Ot,"class","relative group"),c(In,"href","https://arxiv.org/abs/2006.03654"),c(In,"rel","nofollow"),c(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(On,"rel","nofollow"),c(aa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Kn,"href","https://arxiv.org/abs/2006.03654"),c(Kn,"rel","nofollow"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(ns,"href","https://arxiv.org/abs/2006.03654"),c(ns,"rel","nofollow"),c(as,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(as,"rel","nofollow"),c(ia,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(fs,"href","https://arxiv.org/abs/2006.03654"),c(fs,"rel","nofollow"),c(gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(gs,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(ys,"href","https://arxiv.org/abs/2006.03654"),c(ys,"rel","nofollow"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c(xs,"href","https://arxiv.org/abs/2006.03654"),c(xs,"rel","nofollow"),c(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ps,"rel","nofollow"),c(ca,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Co,"id","transformers.TFDebertaForQuestionAnswering"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Os,"href","https://arxiv.org/abs/2006.03654"),c(Os,"rel","nofollow"),c(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ws,"rel","nofollow"),c(pa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,h),m(o,q,f),m(o,u,f),e(u,g),e(g,$),w(b,$,null),e(u,_),e(u,F),e(F,he),m(o,X,f),m(o,z,f),e(z,Y),e(Y,B),w(ee,B,null),e(z,me),e(z,I),e(I,fe),m(o,le,f),m(o,N,f),e(N,A),e(N,te),e(te,Z),e(N,M),m(o,x,f),m(o,ne,f),e(ne,W),m(o,de,f),m(o,se,f),e(se,H),m(o,ce,f),m(o,ae,f),e(ae,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),m(o,S,f),m(o,K,f),e(K,be),e(K,C),e(C,ke),e(K,U),e(K,oe),e(oe,p),e(K,E),e(K,V),e(V,Fe),e(K,qe),m(o,R,f),m(o,pe,f),e(pe,Te),e(Te,$e),w(P,$e,null),e(pe,Q),e(pe,Ee),e(Ee,ze),m(o,O,f),m(o,re,f),w(ve,re,null),e(re,we),e(re,ie),e(ie,Pl),e(ie,Xs),e(Xs,Rl),e(ie,Al),e(ie,Ys),e(Ys,Ll),e(ie,Bl),e(ie,Ho),e(Ho,Il),e(ie,Sl),e(re,Ol),e(re,Et),e(Et,Nl),e(Et,Zs),e(Zs,Wl),e(Et,Hl),e(Et,ea),e(ea,Ul),e(Et,Ql),m(o,Ti,f),m(o,Ft,f),e(Ft,ao),e(ao,Pa),w(Uo,Pa,null),e(Ft,Gl),e(Ft,Ra),e(Ra,Kl),m(o,wi,f),m(o,je,f),w(Qo,je,null),e(je,Vl),e(je,Aa),e(Aa,Jl),e(je,Xl),e(je,gt),w(Go,gt,null),e(gt,Yl),e(gt,La),e(La,Zl),e(gt,ed),e(gt,Ko),e(Ko,Ba),e(Ba,td),e(Ko,od),e(Ko,Ia),e(Ia,nd),e(je,sd),e(je,ro),w(Vo,ro,null),e(ro,ad),e(ro,qt),e(qt,rd),e(qt,Sa),e(Sa,id),e(qt,ld),e(qt,Oa),e(Oa,dd),e(qt,cd),e(je,pd),e(je,tt),w(Jo,tt,null),e(tt,hd),e(tt,Na),e(Na,md),e(tt,fd),w(Xo,tt,null),e(tt,ud),e(tt,zt),e(zt,gd),e(zt,Wa),e(Wa,_d),e(zt,bd),e(zt,Ha),e(Ha,kd),e(zt,Td),e(je,wd),e(je,ta),w(Yo,ta,null),m(o,vi,f),m(o,Mt,f),e(Mt,io),e(io,Ua),w(Zo,Ua,null),e(Mt,vd),e(Mt,Qa),e(Qa,yd),m(o,yi,f),m(o,Xe,f),w(en,Xe,null),e(Xe,Dd),e(Xe,tn),e(tn,$d),e(tn,Ga),e(Ga,Ed),e(tn,Fd),e(Xe,qd),e(Xe,_t),w(on,_t,null),e(_t,zd),e(_t,Ka),e(Ka,Md),e(_t,jd),e(_t,nn),e(nn,Va),e(Va,xd),e(nn,Cd),e(nn,Ja),e(Ja,Pd),e(Xe,Rd),e(Xe,ot),w(sn,ot,null),e(ot,Ad),e(ot,Xa),e(Xa,Ld),e(ot,Bd),w(an,ot,null),e(ot,Id),e(ot,jt),e(jt,Sd),e(jt,Ya),e(Ya,Od),e(jt,Nd),e(jt,Za),e(Za,Wd),e(jt,Hd),m(o,Di,f),m(o,xt,f),e(xt,lo),e(lo,er),w(rn,er,null),e(xt,Ud),e(xt,tr),e(tr,Qd),m(o,$i,f),m(o,Ye,f),w(ln,Ye,null),e(Ye,Gd),e(Ye,dn),e(dn,Kd),e(dn,cn),e(cn,Vd),e(dn,Jd),e(Ye,Xd),e(Ye,pn),e(pn,Yd),e(pn,hn),e(hn,Zd),e(pn,ec),e(Ye,tc),e(Ye,Ve),w(mn,Ve,null),e(Ve,oc),e(Ve,Ct),e(Ct,nc),e(Ct,oa),e(oa,sc),e(Ct,ac),e(Ct,or),e(or,rc),e(Ct,ic),e(Ve,lc),w(co,Ve,null),e(Ve,dc),e(Ve,nr),e(nr,cc),e(Ve,pc),w(fn,Ve,null),m(o,Ei,f),m(o,Pt,f),e(Pt,po),e(po,sr),w(un,sr,null),e(Pt,hc),e(Pt,ar),e(ar,mc),m(o,Fi,f),m(o,Rt,f),w(gn,Rt,null),e(Rt,fc),e(Rt,rr),e(rr,uc),m(o,qi,f),m(o,At,f),e(At,ho),e(ho,ir),w(_n,ir,null),e(At,gc),e(At,lr),e(lr,_c),m(o,zi,f),m(o,Ze,f),w(bn,Ze,null),e(Ze,bc),e(Ze,Lt),e(Lt,kc),e(Lt,dr),e(dr,Tc),e(Lt,wc),e(Lt,kn),e(kn,vc),e(Lt,yc),e(Ze,Dc),e(Ze,Tn),e(Tn,$c),e(Tn,wn),e(wn,Ec),e(Tn,Fc),e(Ze,qc),e(Ze,Ae),w(vn,Ae,null),e(Ae,zc),e(Ae,Bt),e(Bt,Mc),e(Bt,na),e(na,jc),e(Bt,xc),e(Bt,cr),e(cr,Cc),e(Bt,Pc),e(Ae,Rc),w(mo,Ae,null),e(Ae,Ac),e(Ae,pr),e(pr,Lc),e(Ae,Bc),w(yn,Ae,null),e(Ae,Ic),w(Dn,Ae,null),m(o,Mi,f),m(o,It,f),e(It,fo),e(fo,hr),w($n,hr,null),e(It,Sc),e(It,mr),e(mr,Oc),m(o,ji,f),m(o,We,f),w(En,We,null),e(We,Nc),e(We,fr),e(fr,Wc),e(We,Hc),e(We,Fn),e(Fn,Uc),e(Fn,qn),e(qn,Qc),e(Fn,Gc),e(We,Kc),e(We,zn),e(zn,Vc),e(zn,Mn),e(Mn,Jc),e(zn,Xc),e(We,Yc),e(We,ye),w(jn,ye,null),e(ye,Zc),e(ye,St),e(St,ep),e(St,sa),e(sa,tp),e(St,op),e(St,ur),e(ur,np),e(St,sp),e(ye,ap),w(uo,ye,null),e(ye,rp),e(ye,gr),e(gr,ip),e(ye,lp),w(xn,ye,null),e(ye,dp),w(Cn,ye,null),e(ye,cp),e(ye,_r),e(_r,pp),e(ye,hp),w(Pn,ye,null),e(ye,mp),w(Rn,ye,null),m(o,xi,f),m(o,Ot,f),e(Ot,go),e(go,br),w(An,br,null),e(Ot,fp),e(Ot,kr),e(kr,up),m(o,Ci,f),m(o,He,f),w(Ln,He,null),e(He,gp),e(He,Tr),e(Tr,_p),e(He,bp),e(He,Bn),e(Bn,kp),e(Bn,In),e(In,Tp),e(Bn,wp),e(He,vp),e(He,Sn),e(Sn,yp),e(Sn,On),e(On,Dp),e(Sn,$p),e(He,Ep),e(He,Le),w(Nn,Le,null),e(Le,Fp),e(Le,Nt),e(Nt,qp),e(Nt,aa),e(aa,zp),e(Nt,Mp),e(Nt,wr),e(wr,jp),e(Nt,xp),e(Le,Cp),w(_o,Le,null),e(Le,Pp),e(Le,vr),e(vr,Rp),e(Le,Ap),w(Wn,Le,null),e(Le,Lp),w(Hn,Le,null),m(o,Pi,f),m(o,Wt,f),e(Wt,bo),e(bo,yr),w(Un,yr,null),e(Wt,Bp),e(Wt,Dr),e(Dr,Ip),m(o,Ri,f),m(o,Ue,f),w(Qn,Ue,null),e(Ue,Sp),e(Ue,Ht),e(Ht,Op),e(Ht,$r),e($r,Np),e(Ht,Wp),e(Ht,Er),e(Er,Hp),e(Ht,Up),e(Ue,Qp),e(Ue,Gn),e(Gn,Gp),e(Gn,Kn),e(Kn,Kp),e(Gn,Vp),e(Ue,Jp),e(Ue,Vn),e(Vn,Xp),e(Vn,Jn),e(Jn,Yp),e(Vn,Zp),e(Ue,eh),e(Ue,Be),w(Xn,Be,null),e(Be,th),e(Be,Ut),e(Ut,oh),e(Ut,ra),e(ra,nh),e(Ut,sh),e(Ut,Fr),e(Fr,ah),e(Ut,rh),e(Be,ih),w(ko,Be,null),e(Be,lh),e(Be,qr),e(qr,dh),e(Be,ch),w(Yn,Be,null),e(Be,ph),w(Zn,Be,null),m(o,Ai,f),m(o,Qt,f),e(Qt,To),e(To,zr),w(es,zr,null),e(Qt,hh),e(Qt,Mr),e(Mr,mh),m(o,Li,f),m(o,Qe,f),w(ts,Qe,null),e(Qe,fh),e(Qe,os),e(os,uh),e(os,ns),e(ns,gh),e(os,_h),e(Qe,bh),e(Qe,ss),e(ss,kh),e(ss,as),e(as,Th),e(ss,wh),e(Qe,vh),w(wo,Qe,null),e(Qe,yh),e(Qe,Je),w(rs,Je,null),e(Je,Dh),e(Je,Gt),e(Gt,$h),e(Gt,ia),e(ia,Eh),e(Gt,Fh),e(Gt,jr),e(jr,qh),e(Gt,zh),e(Je,Mh),w(vo,Je,null),e(Je,jh),e(Je,xr),e(xr,xh),e(Je,Ch),w(is,Je,null),m(o,Bi,f),m(o,Kt,f),e(Kt,yo),e(yo,Cr),w(ls,Cr,null),e(Kt,Ph),e(Kt,Pr),e(Pr,Rh),m(o,Ii,f),m(o,ut,f),w(ds,ut,null),e(ut,Ah),e(ut,Rr),e(Rr,Lh),e(ut,Bh),e(ut,nt),w(cs,nt,null),e(nt,Ih),e(nt,Ar),e(Ar,Sh),e(nt,Oh),e(nt,ps),e(ps,Nh),e(ps,Lr),e(Lr,Wh),e(ps,Hh),e(nt,Uh),e(nt,et),e(et,Qh),e(et,Br),e(Br,Gh),e(et,Kh),e(et,Ir),e(Ir,Vh),e(et,Jh),e(et,Sr),e(Sr,Xh),e(et,Yh),e(et,Or),e(Or,Zh),e(et,em),m(o,Si,f),m(o,Vt,f),e(Vt,Do),e(Do,Nr),w(hs,Nr,null),e(Vt,tm),e(Vt,Wr),e(Wr,om),m(o,Oi,f),m(o,Ge,f),w(ms,Ge,null),e(Ge,nm),e(Ge,Jt),e(Jt,sm),e(Jt,Hr),e(Hr,am),e(Jt,rm),e(Jt,fs),e(fs,im),e(Jt,lm),e(Ge,dm),e(Ge,us),e(us,cm),e(us,gs),e(gs,pm),e(us,hm),e(Ge,mm),w($o,Ge,null),e(Ge,fm),e(Ge,Ie),w(_s,Ie,null),e(Ie,um),e(Ie,Xt),e(Xt,gm),e(Xt,la),e(la,_m),e(Xt,bm),e(Xt,Ur),e(Ur,km),e(Xt,Tm),e(Ie,wm),w(Eo,Ie,null),e(Ie,vm),e(Ie,Qr),e(Qr,ym),e(Ie,Dm),w(bs,Ie,null),e(Ie,$m),w(ks,Ie,null),m(o,Ni,f),m(o,Yt,f),e(Yt,Fo),e(Fo,Gr),w(Ts,Gr,null),e(Yt,Em),e(Yt,Kr),e(Kr,Fm),m(o,Wi,f),m(o,xe,f),w(ws,xe,null),e(xe,qm),e(xe,Vr),e(Vr,zm),e(xe,Mm),e(xe,vs),e(vs,jm),e(vs,ys),e(ys,xm),e(vs,Cm),e(xe,Pm),e(xe,Ds),e(Ds,Rm),e(Ds,$s),e($s,Am),e(Ds,Lm),e(xe,Bm),w(qo,xe,null),e(xe,Im),e(xe,Se),w(Es,Se,null),e(Se,Sm),e(Se,Zt),e(Zt,Om),e(Zt,da),e(da,Nm),e(Zt,Wm),e(Zt,Jr),e(Jr,Hm),e(Zt,Um),e(Se,Qm),w(zo,Se,null),e(Se,Gm),e(Se,Xr),e(Xr,Km),e(Se,Vm),w(Fs,Se,null),e(Se,Jm),w(qs,Se,null),m(o,Hi,f),m(o,eo,f),e(eo,Mo),e(Mo,Yr),w(zs,Yr,null),e(eo,Xm),e(eo,Zr),e(Zr,Ym),m(o,Ui,f),m(o,Ce,f),w(Ms,Ce,null),e(Ce,Zm),e(Ce,ei),e(ei,ef),e(Ce,tf),e(Ce,js),e(js,of),e(js,xs),e(xs,nf),e(js,sf),e(Ce,af),e(Ce,Cs),e(Cs,rf),e(Cs,Ps),e(Ps,lf),e(Cs,df),e(Ce,cf),w(jo,Ce,null),e(Ce,pf),e(Ce,Oe),w(Rs,Oe,null),e(Oe,hf),e(Oe,to),e(to,mf),e(to,ca),e(ca,ff),e(to,uf),e(to,ti),e(ti,gf),e(to,_f),e(Oe,bf),w(xo,Oe,null),e(Oe,kf),e(Oe,oi),e(oi,Tf),e(Oe,wf),w(As,Oe,null),e(Oe,vf),w(Ls,Oe,null),m(o,Qi,f),m(o,oo,f),e(oo,Co),e(Co,ni),w(Bs,ni,null),e(oo,yf),e(oo,si),e(si,Df),m(o,Gi,f),m(o,Pe,f),w(Is,Pe,null),e(Pe,$f),e(Pe,no),e(no,Ef),e(no,ai),e(ai,Ff),e(no,qf),e(no,ri),e(ri,zf),e(no,Mf),e(Pe,jf),e(Pe,Ss),e(Ss,xf),e(Ss,Os),e(Os,Cf),e(Ss,Pf),e(Pe,Rf),e(Pe,Ns),e(Ns,Af),e(Ns,Ws),e(Ws,Lf),e(Ns,Bf),e(Pe,If),w(Po,Pe,null),e(Pe,Sf),e(Pe,Ne),w(Hs,Ne,null),e(Ne,Of),e(Ne,so),e(so,Nf),e(so,pa),e(pa,Wf),e(so,Hf),e(so,ii),e(ii,Uf),e(so,Qf),e(Ne,Gf),w(Ro,Ne,null),e(Ne,Kf),e(Ne,li),e(li,Vf),e(Ne,Jf),w(Us,Ne,null),e(Ne,Xf),w(Qs,Ne,null),Ki=!0},p(o,[f]){const Gs={};f&2&&(Gs.$$scope={dirty:f,ctx:o}),co.$set(Gs);const di={};f&2&&(di.$$scope={dirty:f,ctx:o}),mo.$set(di);const ci={};f&2&&(ci.$$scope={dirty:f,ctx:o}),uo.$set(ci);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:o}),_o.$set(pi);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),ko.$set(Ks);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:o}),wo.$set(hi);const mi={};f&2&&(mi.$$scope={dirty:f,ctx:o}),vo.$set(mi);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:o}),$o.$set(fi);const Vs={};f&2&&(Vs.$$scope={dirty:f,ctx:o}),Eo.$set(Vs);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:o}),qo.$set(ui);const gi={};f&2&&(gi.$$scope={dirty:f,ctx:o}),zo.$set(gi);const _i={};f&2&&(_i.$$scope={dirty:f,ctx:o}),jo.$set(_i);const bi={};f&2&&(bi.$$scope={dirty:f,ctx:o}),xo.$set(bi);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),Po.$set(Js);const ki={};f&2&&(ki.$$scope={dirty:f,ctx:o}),Ro.$set(ki)},i(o){Ki||(v(b.$$.fragment,o),v(ee.$$.fragment,o),v(P.$$.fragment,o),v(ve.$$.fragment,o),v(Uo.$$.fragment,o),v(Qo.$$.fragment,o),v(Go.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Xo.$$.fragment,o),v(Yo.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(on.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(ln.$$.fragment,o),v(mn.$$.fragment,o),v(co.$$.fragment,o),v(fn.$$.fragment,o),v(un.$$.fragment,o),v(gn.$$.fragment,o),v(_n.$$.fragment,o),v(bn.$$.fragment,o),v(vn.$$.fragment,o),v(mo.$$.fragment,o),v(yn.$$.fragment,o),v(Dn.$$.fragment,o),v($n.$$.fragment,o),v(En.$$.fragment,o),v(jn.$$.fragment,o),v(uo.$$.fragment,o),v(xn.$$.fragment,o),v(Cn.$$.fragment,o),v(Pn.$$.fragment,o),v(Rn.$$.fragment,o),v(An.$$.fragment,o),v(Ln.$$.fragment,o),v(Nn.$$.fragment,o),v(_o.$$.fragment,o),v(Wn.$$.fragment,o),v(Hn.$$.fragment,o),v(Un.$$.fragment,o),v(Qn.$$.fragment,o),v(Xn.$$.fragment,o),v(ko.$$.fragment,o),v(Yn.$$.fragment,o),v(Zn.$$.fragment,o),v(es.$$.fragment,o),v(ts.$$.fragment,o),v(wo.$$.fragment,o),v(rs.$$.fragment,o),v(vo.$$.fragment,o),v(is.$$.fragment,o),v(ls.$$.fragment,o),v(ds.$$.fragment,o),v(cs.$$.fragment,o),v(hs.$$.fragment,o),v(ms.$$.fragment,o),v($o.$$.fragment,o),v(_s.$$.fragment,o),v(Eo.$$.fragment,o),v(bs.$$.fragment,o),v(ks.$$.fragment,o),v(Ts.$$.fragment,o),v(ws.$$.fragment,o),v(qo.$$.fragment,o),v(Es.$$.fragment,o),v(zo.$$.fragment,o),v(Fs.$$.fragment,o),v(qs.$$.fragment,o),v(zs.$$.fragment,o),v(Ms.$$.fragment,o),v(jo.$$.fragment,o),v(Rs.$$.fragment,o),v(xo.$$.fragment,o),v(As.$$.fragment,o),v(Ls.$$.fragment,o),v(Bs.$$.fragment,o),v(Is.$$.fragment,o),v(Po.$$.fragment,o),v(Hs.$$.fragment,o),v(Ro.$$.fragment,o),v(Us.$$.fragment,o),v(Qs.$$.fragment,o),Ki=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(P.$$.fragment,o),y(ve.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(mn.$$.fragment,o),y(co.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y(mo.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(jn.$$.fragment,o),y(uo.$$.fragment,o),y(xn.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(Nn.$$.fragment,o),y(_o.$$.fragment,o),y(Wn.$$.fragment,o),y(Hn.$$.fragment,o),y(Un.$$.fragment,o),y(Qn.$$.fragment,o),y(Xn.$$.fragment,o),y(ko.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(wo.$$.fragment,o),y(rs.$$.fragment,o),y(vo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(hs.$$.fragment,o),y(ms.$$.fragment,o),y($o.$$.fragment,o),y(_s.$$.fragment,o),y(Eo.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y(qo.$$.fragment,o),y(Es.$$.fragment,o),y(zo.$$.fragment,o),y(Fs.$$.fragment,o),y(qs.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(jo.$$.fragment,o),y(Rs.$$.fragment,o),y(xo.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Bs.$$.fragment,o),y(Is.$$.fragment,o),y(Po.$$.fragment,o),y(Hs.$$.fragment,o),y(Ro.$$.fragment,o),y(Us.$$.fragment,o),y(Qs.$$.fragment,o),Ki=!1},d(o){t(h),o&&t(q),o&&t(u),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(N),o&&t(x),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(S),o&&t(K),o&&t(R),o&&t(pe),D(P),o&&t(O),o&&t(re),D(ve),o&&t(Ti),o&&t(Ft),D(Uo),o&&t(wi),o&&t(je),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),D(Yo),o&&t(vi),o&&t(Mt),D(Zo),o&&t(yi),o&&t(Xe),D(en),D(on),D(sn),D(an),o&&t(Di),o&&t(xt),D(rn),o&&t($i),o&&t(Ye),D(ln),D(mn),D(co),D(fn),o&&t(Ei),o&&t(Pt),D(un),o&&t(Fi),o&&t(Rt),D(gn),o&&t(qi),o&&t(At),D(_n),o&&t(zi),o&&t(Ze),D(bn),D(vn),D(mo),D(yn),D(Dn),o&&t(Mi),o&&t(It),D($n),o&&t(ji),o&&t(We),D(En),D(jn),D(uo),D(xn),D(Cn),D(Pn),D(Rn),o&&t(xi),o&&t(Ot),D(An),o&&t(Ci),o&&t(He),D(Ln),D(Nn),D(_o),D(Wn),D(Hn),o&&t(Pi),o&&t(Wt),D(Un),o&&t(Ri),o&&t(Ue),D(Qn),D(Xn),D(ko),D(Yn),D(Zn),o&&t(Ai),o&&t(Qt),D(es),o&&t(Li),o&&t(Qe),D(ts),D(wo),D(rs),D(vo),D(is),o&&t(Bi),o&&t(Kt),D(ls),o&&t(Ii),o&&t(ut),D(ds),D(cs),o&&t(Si),o&&t(Vt),D(hs),o&&t(Oi),o&&t(Ge),D(ms),D($o),D(_s),D(Eo),D(bs),D(ks),o&&t(Ni),o&&t(Yt),D(Ts),o&&t(Wi),o&&t(xe),D(ws),D(qo),D(Es),D(zo),D(Fs),D(qs),o&&t(Hi),o&&t(eo),D(zs),o&&t(Ui),o&&t(Ce),D(Ms),D(jo),D(Rs),D(xo),D(As),D(Ls),o&&t(Qi),o&&t(oo),D(Bs),o&&t(Gi),o&&t(Pe),D(Is),D(Po),D(Hs),D(Ro),D(Us),D(Qs)}}}const J_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function X_(G){return C_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class nb extends z_{constructor(h){super();M_(this,h,X_,V_,j_,{})}}export{nb as default,J_ as metadata};
