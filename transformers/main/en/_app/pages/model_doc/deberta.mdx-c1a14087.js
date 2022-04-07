import{S as z_,i as M_,s as j_,e as a,k as l,w as k,t as o,M as C_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as m,y as w,q as v,o as y,B as D,v as x_}from"../../chunks/vendor-6b77c823.js";import{T as Ke}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as De}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Re}from"../../chunks/IconCopyLink-7a11ce68.js";function P_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function R_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function A_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function L_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function B_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function I_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,C,oe,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,x,ke,U,ne;return{c(){h=a("p"),q=o("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=o("This second option is useful when using "),B=a("code"),ee=o("tf.keras.Model.fit"),me=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),N=l(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),oe=o("a single Tensor with "),W=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),ce=o("model(inputs_ids)"),ae=l(),j=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),S=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);oe=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,oe),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function S_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function O_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,C,oe,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,x,ke,U,ne;return{c(){h=a("p"),q=o("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=o("This second option is useful when using "),B=a("code"),ee=o("tf.keras.Model.fit"),me=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),N=l(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),oe=o("a single Tensor with "),W=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),ce=o("model(inputs_ids)"),ae=l(),j=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),S=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);oe=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,oe),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function N_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function W_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,C,oe,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,x,ke,U,ne;return{c(){h=a("p"),q=o("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=o("This second option is useful when using "),B=a("code"),ee=o("tf.keras.Model.fit"),me=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),N=l(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),oe=o("a single Tensor with "),W=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),ce=o("model(inputs_ids)"),ae=l(),j=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),S=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);oe=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,oe),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function H_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function U_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,C,oe,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,x,ke,U,ne;return{c(){h=a("p"),q=o("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=o("This second option is useful when using "),B=a("code"),ee=o("tf.keras.Model.fit"),me=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),N=l(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),oe=o("a single Tensor with "),W=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),ce=o("model(inputs_ids)"),ae=l(),j=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),S=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);oe=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,oe),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function Q_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function G_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,C,oe,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,x,ke,U,ne;return{c(){h=a("p"),q=o("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=o("This second option is useful when using "),B=a("code"),ee=o("tf.keras.Model.fit"),me=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),N=l(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),oe=o("a single Tensor with "),W=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),ce=o("model(inputs_ids)"),ae=l(),j=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),S=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Fe=i($);b=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),_=d(V),F=r(V,"LI",{});var qe=i(F);he=s(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),B=r(R,"CODE",{});var pe=i(B);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),A=r(p,"P",{});var $e=i(A);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);oe=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var Ee=i(W);de=s(Ee,"input_ids"),Ee.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var ze=i(H);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var O=i(j);ue=s(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(O,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(O," or "),S=r(O,"CODE",{});var ve=i(S);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),O.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,B),e(B,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,A,E),e(A,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,oe),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),e(j,S),e(S,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(A),p&&t(Z),p&&t(M)}}}function K_(G){let h,q,u,g,$;return{c(){h=a("p"),q=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function V_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,B,ee,me,I,fe,le,N,A,te,Z,M,C,oe,W,de,se,H,ce,ae,j,ue,L,ge,_e,S,K,be,x,ke,U,ne,p,E,V,Fe,qe,R,pe,Te,$e,P,Q,Ee,ze,O,re,ve,we,ie,Pl,Xs,Rl,Al,Ys,Ll,Bl,Hn,Il,Sl,Ol,Et,Nl,Zs,Wl,Hl,ea,Ul,Ql,Ti,Ft,an,Pa,Un,Gl,Ra,Kl,wi,je,Qn,Vl,Aa,Jl,Xl,gt,Gn,Yl,La,Zl,ed,Kn,Ba,td,nd,Ia,od,sd,rn,Vn,ad,qt,rd,Sa,id,ld,Oa,dd,cd,pd,tt,Jn,hd,Na,md,fd,Xn,ud,zt,gd,Wa,_d,bd,Ha,kd,Td,wd,ta,Yn,vi,Mt,ln,Ua,Zn,vd,Qa,yd,yi,Xe,eo,Dd,to,$d,Ga,Ed,Fd,qd,_t,no,zd,Ka,Md,jd,oo,Va,Cd,xd,Ja,Pd,Rd,nt,so,Ad,Xa,Ld,Bd,ao,Id,jt,Sd,Ya,Od,Nd,Za,Wd,Hd,Di,Ct,dn,er,ro,Ud,tr,Qd,$i,Ye,io,Gd,lo,Kd,co,Vd,Jd,Xd,po,Yd,ho,Zd,ec,tc,Ve,mo,nc,xt,oc,na,sc,ac,nr,rc,ic,lc,cn,dc,or,cc,pc,fo,Ei,Pt,pn,sr,uo,hc,ar,mc,Fi,Rt,go,fc,rr,uc,qi,At,hn,ir,_o,gc,lr,_c,zi,Ze,bo,bc,Lt,kc,dr,Tc,wc,ko,vc,yc,Dc,To,$c,wo,Ec,Fc,qc,Ae,vo,zc,Bt,Mc,oa,jc,Cc,cr,xc,Pc,Rc,mn,Ac,pr,Lc,Bc,yo,Ic,Do,Mi,It,fn,hr,$o,Sc,mr,Oc,ji,We,Eo,Nc,fr,Wc,Hc,Fo,Uc,qo,Qc,Gc,Kc,zo,Vc,Mo,Jc,Xc,Yc,ye,jo,Zc,St,ep,sa,tp,np,ur,op,sp,ap,un,rp,gr,ip,lp,Co,dp,xo,cp,_r,pp,hp,Po,mp,Ro,Ci,Ot,gn,br,Ao,fp,kr,up,xi,He,Lo,gp,Tr,_p,bp,Bo,kp,Io,Tp,wp,vp,So,yp,Oo,Dp,$p,Ep,Le,No,Fp,Nt,qp,aa,zp,Mp,wr,jp,Cp,xp,_n,Pp,vr,Rp,Ap,Wo,Lp,Ho,Pi,Wt,bn,yr,Uo,Bp,Dr,Ip,Ri,Ue,Qo,Sp,Ht,Op,$r,Np,Wp,Er,Hp,Up,Qp,Go,Gp,Ko,Kp,Vp,Jp,Vo,Xp,Jo,Yp,Zp,eh,Be,Xo,th,Ut,nh,ra,oh,sh,Fr,ah,rh,ih,kn,lh,qr,dh,ch,Yo,ph,Zo,Ai,Qt,Tn,zr,es,hh,Mr,mh,Li,Qe,ts,fh,ns,uh,os,gh,_h,bh,ss,kh,as,Th,wh,vh,wn,yh,Je,rs,Dh,Gt,$h,ia,Eh,Fh,jr,qh,zh,Mh,vn,jh,Cr,Ch,xh,is,Bi,Kt,yn,xr,ls,Ph,Pr,Rh,Ii,ut,ds,Ah,Rr,Lh,Bh,ot,cs,Ih,Ar,Sh,Oh,ps,Nh,Lr,Wh,Hh,Uh,et,Qh,Br,Gh,Kh,Ir,Vh,Jh,Sr,Xh,Yh,Or,Zh,em,Si,Vt,Dn,Nr,hs,tm,Wr,nm,Oi,Ge,ms,om,Jt,sm,Hr,am,rm,fs,im,lm,dm,us,cm,gs,pm,hm,mm,$n,fm,Ie,_s,um,Xt,gm,la,_m,bm,Ur,km,Tm,wm,En,vm,Qr,ym,Dm,bs,$m,ks,Ni,Yt,Fn,Gr,Ts,Em,Kr,Fm,Wi,Ce,ws,qm,Vr,zm,Mm,vs,jm,ys,Cm,xm,Pm,Ds,Rm,$s,Am,Lm,Bm,qn,Im,Se,Es,Sm,Zt,Om,da,Nm,Wm,Jr,Hm,Um,Qm,zn,Gm,Xr,Km,Vm,Fs,Jm,qs,Hi,en,Mn,Yr,zs,Xm,Zr,Ym,Ui,xe,Ms,Zm,ei,ef,tf,js,nf,Cs,of,sf,af,xs,rf,Ps,lf,df,cf,jn,pf,Oe,Rs,hf,tn,mf,ca,ff,uf,ti,gf,_f,bf,Cn,kf,ni,Tf,wf,As,vf,Ls,Qi,nn,xn,oi,Bs,yf,si,Df,Gi,Pe,Is,$f,on,Ef,ai,Ff,qf,ri,zf,Mf,jf,Ss,Cf,Os,xf,Pf,Rf,Ns,Af,Ws,Lf,Bf,If,Pn,Sf,Ne,Hs,Of,sn,Nf,pa,Wf,Hf,ii,Uf,Qf,Gf,Rn,Kf,li,Vf,Jf,Us,Xf,Qs,Ki;return b=new Re({}),ee=new Re({}),P=new Re({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Un=new Re({}),Qn=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Gn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yn=new J({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zn=new Re({}),eo=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),no=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),so=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ao=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),ro=new Re({}),io=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mo=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),cn=new Ke({props:{$$slots:{default:[P_]},$$scope:{ctx:G}}}),fo=new De({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),uo=new Re({}),go=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L787"}}),_o=new Re({}),bo=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
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
`}}),mn=new Ke({props:{$$slots:{default:[R_]},$$scope:{ctx:G}}}),yo=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
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
`}}),Do=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),$o=new Re({}),Eo=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
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
`}}),un=new Ke({props:{$$slots:{default:[A_]},$$scope:{ctx:G}}}),Co=new De({props:{code:`import torch
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
`}}),xo=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),Po=new De({props:{code:`import torch
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
`}}),Ro=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Ao=new Re({}),Lo=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
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
`}}),_n=new Ke({props:{$$slots:{default:[L_]},$$scope:{ctx:G}}}),Wo=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
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
`}}),Ho=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Uo=new Re({}),Qo=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1324",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xo=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1337",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
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
`}}),kn=new Ke({props:{$$slots:{default:[B_]},$$scope:{ctx:G}}}),Yo=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
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
`}}),Zo=new De({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),es=new Re({}),ts=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1073",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new Ke({props:{$$slots:{default:[I_]},$$scope:{ctx:G}}}),rs=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1079",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
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
`}}),vn=new Ke({props:{$$slots:{default:[S_]},$$scope:{ctx:G}}}),is=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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
`}}),hs=new Re({}),ms=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1121",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$n=new Ke({props:{$$slots:{default:[O_]},$$scope:{ctx:G}}}),_s=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1137",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
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
`}}),En=new Ke({props:{$$slots:{default:[N_]},$$scope:{ctx:G}}}),bs=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
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
`}}),Ts=new Re({}),ws=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1204",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qn=new Ke({props:{$$slots:{default:[W_]},$$scope:{ctx:G}}}),Es=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1222",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
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
`}}),zn=new Ke({props:{$$slots:{default:[H_]},$$scope:{ctx:G}}}),Fs=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
`}}),zs=new Re({}),Ms=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1292",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new Ke({props:{$$slots:{default:[U_]},$$scope:{ctx:G}}}),Rs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1304",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
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
`}}),Cn=new Ke({props:{$$slots:{default:[Q_]},$$scope:{ctx:G}}}),As=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
`}}),Bs=new Re({}),Is=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1370",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new Ke({props:{$$slots:{default:[G_]},$$scope:{ctx:G}}}),Hs=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1381",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
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
`}}),Rn=new Ke({props:{$$slots:{default:[K_]},$$scope:{ctx:G}}}),Us=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){h=a("meta"),q=l(),u=a("h1"),g=a("a"),$=a("span"),k(b.$$.fragment),_=l(),F=a("span"),he=o("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),B=a("span"),k(ee.$$.fragment),me=l(),I=a("span"),fe=o("Overview"),le=l(),N=a("p"),A=o("The DeBERTa model was proposed in "),te=a("a"),Z=o("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=l(),oe=a("p"),W=o(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=l(),se=a("p"),H=o("The abstract from the paper is the following:"),ce=l(),ae=a("p"),j=a("em"),ue=o(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a("a"),ge=o("https://github.com/microsoft/DeBERTa"),_e=o("."),S=l(),K=a("p"),be=o("This model was contributed by "),x=a("a"),ke=o("DeBERTa"),U=o(`. This model TF 2.0 implementation was
contributed by `),ne=a("a"),p=o("kamalkraj"),E=o(" . The original code can be found "),V=a("a"),Fe=o("here"),qe=o("."),R=l(),pe=a("h2"),Te=a("a"),$e=a("span"),k(P.$$.fragment),Q=l(),Ee=a("span"),ze=o("DebertaConfig"),O=l(),re=a("div"),k(ve.$$.fragment),we=l(),ie=a("p"),Pl=o("This is the configuration class to store the configuration of a "),Xs=a("a"),Rl=o("DebertaModel"),Al=o(" or a "),Ys=a("a"),Ll=o("TFDebertaModel"),Bl=o(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Hn=a("a"),Il=o("microsoft/deberta-base"),Sl=o(" architecture."),Ol=l(),Et=a("p"),Nl=o("Configuration objects inherit from "),Zs=a("a"),Wl=o("PretrainedConfig"),Hl=o(` and can be used to control the model outputs. Read the
documentation from `),ea=a("a"),Ul=o("PretrainedConfig"),Ql=o(" for more information."),Ti=l(),Ft=a("h2"),an=a("a"),Pa=a("span"),k(Un.$$.fragment),Gl=l(),Ra=a("span"),Kl=o("DebertaTokenizer"),wi=l(),je=a("div"),k(Qn.$$.fragment),Vl=l(),Aa=a("p"),Jl=o("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Xl=l(),gt=a("div"),k(Gn.$$.fragment),Yl=l(),La=a("p"),Zl=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),ed=l(),Kn=a("ul"),Ba=a("li"),td=o("single sequence: [CLS] X [SEP]"),nd=l(),Ia=a("li"),od=o("pair of sequences: [CLS] A [SEP] B [SEP]"),sd=l(),rn=a("div"),k(Vn.$$.fragment),ad=l(),qt=a("p"),rd=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sa=a("code"),id=o("prepare_for_model"),ld=o(" or "),Oa=a("code"),dd=o("encode_plus"),cd=o(" methods."),pd=l(),tt=a("div"),k(Jn.$$.fragment),hd=l(),Na=a("p"),md=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),fd=l(),k(Xn.$$.fragment),ud=l(),zt=a("p"),gd=o("If "),Wa=a("code"),_d=o("token_ids_1"),bd=o(" is "),Ha=a("code"),kd=o("None"),Td=o(", this method only returns the first portion of the mask (0s)."),wd=l(),ta=a("div"),k(Yn.$$.fragment),vi=l(),Mt=a("h2"),ln=a("a"),Ua=a("span"),k(Zn.$$.fragment),vd=l(),Qa=a("span"),yd=o("DebertaTokenizerFast"),yi=l(),Xe=a("div"),k(eo.$$.fragment),Dd=l(),to=a("p"),$d=o(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Ga=a("em"),Ed=o("tokenizers"),Fd=o(" library."),qd=l(),_t=a("div"),k(no.$$.fragment),zd=l(),Ka=a("p"),Md=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),jd=l(),oo=a("ul"),Va=a("li"),Cd=o("single sequence: [CLS] X [SEP]"),xd=l(),Ja=a("li"),Pd=o("pair of sequences: [CLS] A [SEP] B [SEP]"),Rd=l(),nt=a("div"),k(so.$$.fragment),Ad=l(),Xa=a("p"),Ld=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Bd=l(),k(ao.$$.fragment),Id=l(),jt=a("p"),Sd=o("If "),Ya=a("code"),Od=o("token_ids_1"),Nd=o(" is "),Za=a("code"),Wd=o("None"),Hd=o(", this method only returns the first portion of the mask (0s)."),Di=l(),Ct=a("h2"),dn=a("a"),er=a("span"),k(ro.$$.fragment),Ud=l(),tr=a("span"),Qd=o("DebertaModel"),$i=l(),Ye=a("div"),k(io.$$.fragment),Gd=l(),lo=a("p"),Kd=o(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),co=a("a"),Vd=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jd=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xd=l(),po=a("p"),Yd=o("This model is also a PyTorch "),ho=a("a"),Zd=o("torch.nn.Module"),ec=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),tc=l(),Ve=a("div"),k(mo.$$.fragment),nc=l(),xt=a("p"),oc=o("The "),na=a("a"),sc=o("DebertaModel"),ac=o(" forward method, overrides the "),nr=a("code"),rc=o("__call__"),ic=o(" special method."),lc=l(),k(cn.$$.fragment),dc=l(),or=a("p"),cc=o("Example:"),pc=l(),k(fo.$$.fragment),Ei=l(),Pt=a("h2"),pn=a("a"),sr=a("span"),k(uo.$$.fragment),hc=l(),ar=a("span"),mc=o("DebertaPreTrainedModel"),Fi=l(),Rt=a("div"),k(go.$$.fragment),fc=l(),rr=a("p"),uc=o(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),qi=l(),At=a("h2"),hn=a("a"),ir=a("span"),k(_o.$$.fragment),gc=l(),lr=a("span"),_c=o("DebertaForMaskedLM"),zi=l(),Ze=a("div"),k(bo.$$.fragment),bc=l(),Lt=a("p"),kc=o("DeBERTa Model with a "),dr=a("code"),Tc=o("language modeling"),wc=o(` head on top.
The DeBERTa model was proposed in `),ko=a("a"),vc=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yc=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dc=l(),To=a("p"),$c=o("This model is also a PyTorch "),wo=a("a"),Ec=o("torch.nn.Module"),Fc=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),qc=l(),Ae=a("div"),k(vo.$$.fragment),zc=l(),Bt=a("p"),Mc=o("The "),oa=a("a"),jc=o("DebertaForMaskedLM"),Cc=o(" forward method, overrides the "),cr=a("code"),xc=o("__call__"),Pc=o(" special method."),Rc=l(),k(mn.$$.fragment),Ac=l(),pr=a("p"),Lc=o("Example:"),Bc=l(),k(yo.$$.fragment),Ic=l(),k(Do.$$.fragment),Mi=l(),It=a("h2"),fn=a("a"),hr=a("span"),k($o.$$.fragment),Sc=l(),mr=a("span"),Oc=o("DebertaForSequenceClassification"),ji=l(),We=a("div"),k(Eo.$$.fragment),Nc=l(),fr=a("p"),Wc=o(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Hc=l(),Fo=a("p"),Uc=o("The DeBERTa model was proposed in "),qo=a("a"),Qc=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gc=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kc=l(),zo=a("p"),Vc=o("This model is also a PyTorch "),Mo=a("a"),Jc=o("torch.nn.Module"),Xc=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Yc=l(),ye=a("div"),k(jo.$$.fragment),Zc=l(),St=a("p"),ep=o("The "),sa=a("a"),tp=o("DebertaForSequenceClassification"),np=o(" forward method, overrides the "),ur=a("code"),op=o("__call__"),sp=o(" special method."),ap=l(),k(un.$$.fragment),rp=l(),gr=a("p"),ip=o("Example of single-label classification:"),lp=l(),k(Co.$$.fragment),dp=l(),k(xo.$$.fragment),cp=l(),_r=a("p"),pp=o("Example of multi-label classification:"),hp=l(),k(Po.$$.fragment),mp=l(),k(Ro.$$.fragment),Ci=l(),Ot=a("h2"),gn=a("a"),br=a("span"),k(Ao.$$.fragment),fp=l(),kr=a("span"),up=o("DebertaForTokenClassification"),xi=l(),He=a("div"),k(Lo.$$.fragment),gp=l(),Tr=a("p"),_p=o(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),bp=l(),Bo=a("p"),kp=o("The DeBERTa model was proposed in "),Io=a("a"),Tp=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wp=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vp=l(),So=a("p"),yp=o("This model is also a PyTorch "),Oo=a("a"),Dp=o("torch.nn.Module"),$p=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ep=l(),Le=a("div"),k(No.$$.fragment),Fp=l(),Nt=a("p"),qp=o("The "),aa=a("a"),zp=o("DebertaForTokenClassification"),Mp=o(" forward method, overrides the "),wr=a("code"),jp=o("__call__"),Cp=o(" special method."),xp=l(),k(_n.$$.fragment),Pp=l(),vr=a("p"),Rp=o("Example:"),Ap=l(),k(Wo.$$.fragment),Lp=l(),k(Ho.$$.fragment),Pi=l(),Wt=a("h2"),bn=a("a"),yr=a("span"),k(Uo.$$.fragment),Bp=l(),Dr=a("span"),Ip=o("DebertaForQuestionAnswering"),Ri=l(),Ue=a("div"),k(Qo.$$.fragment),Sp=l(),Ht=a("p"),Op=o(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),$r=a("code"),Np=o("span start logits"),Wp=o(" and "),Er=a("code"),Hp=o("span end logits"),Up=o(")."),Qp=l(),Go=a("p"),Gp=o("The DeBERTa model was proposed in "),Ko=a("a"),Kp=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vp=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jp=l(),Vo=a("p"),Xp=o("This model is also a PyTorch "),Jo=a("a"),Yp=o("torch.nn.Module"),Zp=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),eh=l(),Be=a("div"),k(Xo.$$.fragment),th=l(),Ut=a("p"),nh=o("The "),ra=a("a"),oh=o("DebertaForQuestionAnswering"),sh=o(" forward method, overrides the "),Fr=a("code"),ah=o("__call__"),rh=o(" special method."),ih=l(),k(kn.$$.fragment),lh=l(),qr=a("p"),dh=o("Example:"),ch=l(),k(Yo.$$.fragment),ph=l(),k(Zo.$$.fragment),Ai=l(),Qt=a("h2"),Tn=a("a"),zr=a("span"),k(es.$$.fragment),hh=l(),Mr=a("span"),mh=o("TFDebertaModel"),Li=l(),Qe=a("div"),k(ts.$$.fragment),fh=l(),ns=a("p"),uh=o(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),os=a("a"),gh=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_h=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bh=l(),ss=a("p"),kh=o("This model is also a "),as=a("a"),Th=o("tf.keras.Model"),wh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vh=l(),k(wn.$$.fragment),yh=l(),Je=a("div"),k(rs.$$.fragment),Dh=l(),Gt=a("p"),$h=o("The "),ia=a("a"),Eh=o("TFDebertaModel"),Fh=o(" forward method, overrides the "),jr=a("code"),qh=o("__call__"),zh=o(" special method."),Mh=l(),k(vn.$$.fragment),jh=l(),Cr=a("p"),Ch=o("Example:"),xh=l(),k(is.$$.fragment),Bi=l(),Kt=a("h2"),yn=a("a"),xr=a("span"),k(ls.$$.fragment),Ph=l(),Pr=a("span"),Rh=o("TFDebertaPreTrainedModel"),Ii=l(),ut=a("div"),k(ds.$$.fragment),Ah=l(),Rr=a("p"),Lh=o(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Bh=l(),ot=a("div"),k(cs.$$.fragment),Ih=l(),Ar=a("p"),Sh=o("Calls the model on new inputs and returns the outputs as tensors."),Oh=l(),ps=a("p"),Nh=o("In this case "),Lr=a("code"),Wh=o("call()"),Hh=o(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Uh=l(),et=a("p"),Qh=o(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Br=a("code"),Gh=o("tf.keras.Model"),Kh=o(`.
To call a model on an input, always use the `),Ir=a("code"),Vh=o("__call__()"),Jh=o(` method,
i.e. `),Sr=a("code"),Xh=o("model(inputs)"),Yh=o(", which relies on the underlying "),Or=a("code"),Zh=o("call()"),em=o(" method."),Si=l(),Vt=a("h2"),Dn=a("a"),Nr=a("span"),k(hs.$$.fragment),tm=l(),Wr=a("span"),nm=o("TFDebertaForMaskedLM"),Oi=l(),Ge=a("div"),k(ms.$$.fragment),om=l(),Jt=a("p"),sm=o("DeBERTa Model with a "),Hr=a("code"),am=o("language modeling"),rm=o(` head on top.
The DeBERTa model was proposed in `),fs=a("a"),im=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lm=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dm=l(),us=a("p"),cm=o("This model is also a "),gs=a("a"),pm=o("tf.keras.Model"),hm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mm=l(),k($n.$$.fragment),fm=l(),Ie=a("div"),k(_s.$$.fragment),um=l(),Xt=a("p"),gm=o("The "),la=a("a"),_m=o("TFDebertaForMaskedLM"),bm=o(" forward method, overrides the "),Ur=a("code"),km=o("__call__"),Tm=o(" special method."),wm=l(),k(En.$$.fragment),vm=l(),Qr=a("p"),ym=o("Example:"),Dm=l(),k(bs.$$.fragment),$m=l(),k(ks.$$.fragment),Ni=l(),Yt=a("h2"),Fn=a("a"),Gr=a("span"),k(Ts.$$.fragment),Em=l(),Kr=a("span"),Fm=o("TFDebertaForSequenceClassification"),Wi=l(),Ce=a("div"),k(ws.$$.fragment),qm=l(),Vr=a("p"),zm=o(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Mm=l(),vs=a("p"),jm=o("The DeBERTa model was proposed in "),ys=a("a"),Cm=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xm=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Pm=l(),Ds=a("p"),Rm=o("This model is also a "),$s=a("a"),Am=o("tf.keras.Model"),Lm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bm=l(),k(qn.$$.fragment),Im=l(),Se=a("div"),k(Es.$$.fragment),Sm=l(),Zt=a("p"),Om=o("The "),da=a("a"),Nm=o("TFDebertaForSequenceClassification"),Wm=o(" forward method, overrides the "),Jr=a("code"),Hm=o("__call__"),Um=o(" special method."),Qm=l(),k(zn.$$.fragment),Gm=l(),Xr=a("p"),Km=o("Example:"),Vm=l(),k(Fs.$$.fragment),Jm=l(),k(qs.$$.fragment),Hi=l(),en=a("h2"),Mn=a("a"),Yr=a("span"),k(zs.$$.fragment),Xm=l(),Zr=a("span"),Ym=o("TFDebertaForTokenClassification"),Ui=l(),xe=a("div"),k(Ms.$$.fragment),Zm=l(),ei=a("p"),ef=o(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tf=l(),js=a("p"),nf=o("The DeBERTa model was proposed in "),Cs=a("a"),of=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sf=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),af=l(),xs=a("p"),rf=o("This model is also a "),Ps=a("a"),lf=o("tf.keras.Model"),df=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=l(),k(jn.$$.fragment),pf=l(),Oe=a("div"),k(Rs.$$.fragment),hf=l(),tn=a("p"),mf=o("The "),ca=a("a"),ff=o("TFDebertaForTokenClassification"),uf=o(" forward method, overrides the "),ti=a("code"),gf=o("__call__"),_f=o(" special method."),bf=l(),k(Cn.$$.fragment),kf=l(),ni=a("p"),Tf=o("Example:"),wf=l(),k(As.$$.fragment),vf=l(),k(Ls.$$.fragment),Qi=l(),nn=a("h2"),xn=a("a"),oi=a("span"),k(Bs.$$.fragment),yf=l(),si=a("span"),Df=o("TFDebertaForQuestionAnswering"),Gi=l(),Pe=a("div"),k(Is.$$.fragment),$f=l(),on=a("p"),Ef=o(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ai=a("code"),Ff=o("span start logits"),qf=o(" and "),ri=a("code"),zf=o("span end logits"),Mf=o(")."),jf=l(),Ss=a("p"),Cf=o("The DeBERTa model was proposed in "),Os=a("a"),xf=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Pf=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rf=l(),Ns=a("p"),Af=o("This model is also a "),Ws=a("a"),Lf=o("tf.keras.Model"),Bf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If=l(),k(Pn.$$.fragment),Sf=l(),Ne=a("div"),k(Hs.$$.fragment),Of=l(),sn=a("p"),Nf=o("The "),pa=a("a"),Wf=o("TFDebertaForQuestionAnswering"),Hf=o(" forward method, overrides the "),ii=a("code"),Uf=o("__call__"),Qf=o(" special method."),Gf=l(),k(Rn.$$.fragment),Kf=l(),li=a("p"),Vf=o("Example:"),Jf=l(),k(Us.$$.fragment),Xf=l(),k(Qs.$$.fragment),this.h()},l(n){const f=C_('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),q=d(n),u=r(n,"H1",{class:!0});var Gs=i(u);g=r(Gs,"A",{id:!0,class:!0,href:!0});var di=i(g);$=r(di,"SPAN",{});var ci=i($);T(b.$$.fragment,ci),ci.forEach(t),di.forEach(t),_=d(Gs),F=r(Gs,"SPAN",{});var pi=i(F);he=s(pi,"DeBERTa"),pi.forEach(t),Gs.forEach(t),X=d(n),z=r(n,"H2",{class:!0});var Ks=i(z);Y=r(Ks,"A",{id:!0,class:!0,href:!0});var hi=i(Y);B=r(hi,"SPAN",{});var mi=i(B);T(ee.$$.fragment,mi),mi.forEach(t),hi.forEach(t),me=d(Ks),I=r(Ks,"SPAN",{});var fi=i(I);fe=s(fi,"Overview"),fi.forEach(t),Ks.forEach(t),le=d(n),N=r(n,"P",{});var Vs=i(N);A=s(Vs,"The DeBERTa model was proposed in "),te=r(Vs,"A",{href:!0,rel:!0});var ui=i(te);Z=s(ui,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ui.forEach(t),M=s(Vs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Vs.forEach(t),C=d(n),oe=r(n,"P",{});var gi=i(oe);W=s(gi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),gi.forEach(t),de=d(n),se=r(n,"P",{});var _i=i(se);H=s(_i,"The abstract from the paper is the following:"),_i.forEach(t),ce=d(n),ae=r(n,"P",{});var bi=i(ae);j=r(bi,"EM",{});var Js=i(j);ue=s(Js,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=r(Js,"A",{href:!0,rel:!0});var ki=i(L);ge=s(ki,"https://github.com/microsoft/DeBERTa"),ki.forEach(t),_e=s(Js,"."),Js.forEach(t),bi.forEach(t),S=d(n),K=r(n,"P",{});var An=i(K);be=s(An,"This model was contributed by "),x=r(An,"A",{href:!0,rel:!0});var Yf=i(x);ke=s(Yf,"DeBERTa"),Yf.forEach(t),U=s(An,`. This model TF 2.0 implementation was
contributed by `),ne=r(An,"A",{href:!0,rel:!0});var Zf=i(ne);p=s(Zf,"kamalkraj"),Zf.forEach(t),E=s(An," . The original code can be found "),V=r(An,"A",{href:!0,rel:!0});var eu=i(V);Fe=s(eu,"here"),eu.forEach(t),qe=s(An,"."),An.forEach(t),R=d(n),pe=r(n,"H2",{class:!0});var Vi=i(pe);Te=r(Vi,"A",{id:!0,class:!0,href:!0});var tu=i(Te);$e=r(tu,"SPAN",{});var nu=i($e);T(P.$$.fragment,nu),nu.forEach(t),tu.forEach(t),Q=d(Vi),Ee=r(Vi,"SPAN",{});var ou=i(Ee);ze=s(ou,"DebertaConfig"),ou.forEach(t),Vi.forEach(t),O=d(n),re=r(n,"DIV",{class:!0});var ha=i(re);T(ve.$$.fragment,ha),we=d(ha),ie=r(ha,"P",{});var Ln=i(ie);Pl=s(Ln,"This is the configuration class to store the configuration of a "),Xs=r(Ln,"A",{href:!0});var su=i(Xs);Rl=s(su,"DebertaModel"),su.forEach(t),Al=s(Ln," or a "),Ys=r(Ln,"A",{href:!0});var au=i(Ys);Ll=s(au,"TFDebertaModel"),au.forEach(t),Bl=s(Ln,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Hn=r(Ln,"A",{href:!0,rel:!0});var ru=i(Hn);Il=s(ru,"microsoft/deberta-base"),ru.forEach(t),Sl=s(Ln," architecture."),Ln.forEach(t),Ol=d(ha),Et=r(ha,"P",{});var ma=i(Et);Nl=s(ma,"Configuration objects inherit from "),Zs=r(ma,"A",{href:!0});var iu=i(Zs);Wl=s(iu,"PretrainedConfig"),iu.forEach(t),Hl=s(ma,` and can be used to control the model outputs. Read the
documentation from `),ea=r(ma,"A",{href:!0});var lu=i(ea);Ul=s(lu,"PretrainedConfig"),lu.forEach(t),Ql=s(ma," for more information."),ma.forEach(t),ha.forEach(t),Ti=d(n),Ft=r(n,"H2",{class:!0});var Ji=i(Ft);an=r(Ji,"A",{id:!0,class:!0,href:!0});var du=i(an);Pa=r(du,"SPAN",{});var cu=i(Pa);T(Un.$$.fragment,cu),cu.forEach(t),du.forEach(t),Gl=d(Ji),Ra=r(Ji,"SPAN",{});var pu=i(Ra);Kl=s(pu,"DebertaTokenizer"),pu.forEach(t),Ji.forEach(t),wi=d(n),je=r(n,"DIV",{class:!0});var st=i(je);T(Qn.$$.fragment,st),Vl=d(st),Aa=r(st,"P",{});var hu=i(Aa);Jl=s(hu,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),hu.forEach(t),Xl=d(st),gt=r(st,"DIV",{class:!0});var fa=i(gt);T(Gn.$$.fragment,fa),Yl=d(fa),La=r(fa,"P",{});var mu=i(La);Zl=s(mu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),mu.forEach(t),ed=d(fa),Kn=r(fa,"UL",{});var Xi=i(Kn);Ba=r(Xi,"LI",{});var fu=i(Ba);td=s(fu,"single sequence: [CLS] X [SEP]"),fu.forEach(t),nd=d(Xi),Ia=r(Xi,"LI",{});var uu=i(Ia);od=s(uu,"pair of sequences: [CLS] A [SEP] B [SEP]"),uu.forEach(t),Xi.forEach(t),fa.forEach(t),sd=d(st),rn=r(st,"DIV",{class:!0});var Yi=i(rn);T(Vn.$$.fragment,Yi),ad=d(Yi),qt=r(Yi,"P",{});var ua=i(qt);rd=s(ua,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sa=r(ua,"CODE",{});var gu=i(Sa);id=s(gu,"prepare_for_model"),gu.forEach(t),ld=s(ua," or "),Oa=r(ua,"CODE",{});var _u=i(Oa);dd=s(_u,"encode_plus"),_u.forEach(t),cd=s(ua," methods."),ua.forEach(t),Yi.forEach(t),pd=d(st),tt=r(st,"DIV",{class:!0});var Bn=i(tt);T(Jn.$$.fragment,Bn),hd=d(Bn),Na=r(Bn,"P",{});var bu=i(Na);md=s(bu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),bu.forEach(t),fd=d(Bn),T(Xn.$$.fragment,Bn),ud=d(Bn),zt=r(Bn,"P",{});var ga=i(zt);gd=s(ga,"If "),Wa=r(ga,"CODE",{});var ku=i(Wa);_d=s(ku,"token_ids_1"),ku.forEach(t),bd=s(ga," is "),Ha=r(ga,"CODE",{});var Tu=i(Ha);kd=s(Tu,"None"),Tu.forEach(t),Td=s(ga,", this method only returns the first portion of the mask (0s)."),ga.forEach(t),Bn.forEach(t),wd=d(st),ta=r(st,"DIV",{class:!0});var wu=i(ta);T(Yn.$$.fragment,wu),wu.forEach(t),st.forEach(t),vi=d(n),Mt=r(n,"H2",{class:!0});var Zi=i(Mt);ln=r(Zi,"A",{id:!0,class:!0,href:!0});var vu=i(ln);Ua=r(vu,"SPAN",{});var yu=i(Ua);T(Zn.$$.fragment,yu),yu.forEach(t),vu.forEach(t),vd=d(Zi),Qa=r(Zi,"SPAN",{});var Du=i(Qa);yd=s(Du,"DebertaTokenizerFast"),Du.forEach(t),Zi.forEach(t),yi=d(n),Xe=r(n,"DIV",{class:!0});var In=i(Xe);T(eo.$$.fragment,In),Dd=d(In),to=r(In,"P",{});var el=i(to);$d=s(el,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Ga=r(el,"EM",{});var $u=i(Ga);Ed=s($u,"tokenizers"),$u.forEach(t),Fd=s(el," library."),el.forEach(t),qd=d(In),_t=r(In,"DIV",{class:!0});var _a=i(_t);T(no.$$.fragment,_a),zd=d(_a),Ka=r(_a,"P",{});var Eu=i(Ka);Md=s(Eu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Eu.forEach(t),jd=d(_a),oo=r(_a,"UL",{});var tl=i(oo);Va=r(tl,"LI",{});var Fu=i(Va);Cd=s(Fu,"single sequence: [CLS] X [SEP]"),Fu.forEach(t),xd=d(tl),Ja=r(tl,"LI",{});var qu=i(Ja);Pd=s(qu,"pair of sequences: [CLS] A [SEP] B [SEP]"),qu.forEach(t),tl.forEach(t),_a.forEach(t),Rd=d(In),nt=r(In,"DIV",{class:!0});var Sn=i(nt);T(so.$$.fragment,Sn),Ad=d(Sn),Xa=r(Sn,"P",{});var zu=i(Xa);Ld=s(zu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),zu.forEach(t),Bd=d(Sn),T(ao.$$.fragment,Sn),Id=d(Sn),jt=r(Sn,"P",{});var ba=i(jt);Sd=s(ba,"If "),Ya=r(ba,"CODE",{});var Mu=i(Ya);Od=s(Mu,"token_ids_1"),Mu.forEach(t),Nd=s(ba," is "),Za=r(ba,"CODE",{});var ju=i(Za);Wd=s(ju,"None"),ju.forEach(t),Hd=s(ba,", this method only returns the first portion of the mask (0s)."),ba.forEach(t),Sn.forEach(t),In.forEach(t),Di=d(n),Ct=r(n,"H2",{class:!0});var nl=i(Ct);dn=r(nl,"A",{id:!0,class:!0,href:!0});var Cu=i(dn);er=r(Cu,"SPAN",{});var xu=i(er);T(ro.$$.fragment,xu),xu.forEach(t),Cu.forEach(t),Ud=d(nl),tr=r(nl,"SPAN",{});var Pu=i(tr);Qd=s(Pu,"DebertaModel"),Pu.forEach(t),nl.forEach(t),$i=d(n),Ye=r(n,"DIV",{class:!0});var On=i(Ye);T(io.$$.fragment,On),Gd=d(On),lo=r(On,"P",{});var ol=i(lo);Kd=s(ol,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),co=r(ol,"A",{href:!0,rel:!0});var Ru=i(co);Vd=s(Ru,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ru.forEach(t),Jd=s(ol,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ol.forEach(t),Xd=d(On),po=r(On,"P",{});var sl=i(po);Yd=s(sl,"This model is also a PyTorch "),ho=r(sl,"A",{href:!0,rel:!0});var Au=i(ho);Zd=s(Au,"torch.nn.Module"),Au.forEach(t),ec=s(sl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sl.forEach(t),tc=d(On),Ve=r(On,"DIV",{class:!0});var bt=i(Ve);T(mo.$$.fragment,bt),nc=d(bt),xt=r(bt,"P",{});var ka=i(xt);oc=s(ka,"The "),na=r(ka,"A",{href:!0});var Lu=i(na);sc=s(Lu,"DebertaModel"),Lu.forEach(t),ac=s(ka," forward method, overrides the "),nr=r(ka,"CODE",{});var Bu=i(nr);rc=s(Bu,"__call__"),Bu.forEach(t),ic=s(ka," special method."),ka.forEach(t),lc=d(bt),T(cn.$$.fragment,bt),dc=d(bt),or=r(bt,"P",{});var Iu=i(or);cc=s(Iu,"Example:"),Iu.forEach(t),pc=d(bt),T(fo.$$.fragment,bt),bt.forEach(t),On.forEach(t),Ei=d(n),Pt=r(n,"H2",{class:!0});var al=i(Pt);pn=r(al,"A",{id:!0,class:!0,href:!0});var Su=i(pn);sr=r(Su,"SPAN",{});var Ou=i(sr);T(uo.$$.fragment,Ou),Ou.forEach(t),Su.forEach(t),hc=d(al),ar=r(al,"SPAN",{});var Nu=i(ar);mc=s(Nu,"DebertaPreTrainedModel"),Nu.forEach(t),al.forEach(t),Fi=d(n),Rt=r(n,"DIV",{class:!0});var rl=i(Rt);T(go.$$.fragment,rl),fc=d(rl),rr=r(rl,"P",{});var Wu=i(rr);uc=s(Wu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Wu.forEach(t),rl.forEach(t),qi=d(n),At=r(n,"H2",{class:!0});var il=i(At);hn=r(il,"A",{id:!0,class:!0,href:!0});var Hu=i(hn);ir=r(Hu,"SPAN",{});var Uu=i(ir);T(_o.$$.fragment,Uu),Uu.forEach(t),Hu.forEach(t),gc=d(il),lr=r(il,"SPAN",{});var Qu=i(lr);_c=s(Qu,"DebertaForMaskedLM"),Qu.forEach(t),il.forEach(t),zi=d(n),Ze=r(n,"DIV",{class:!0});var Nn=i(Ze);T(bo.$$.fragment,Nn),bc=d(Nn),Lt=r(Nn,"P",{});var Ta=i(Lt);kc=s(Ta,"DeBERTa Model with a "),dr=r(Ta,"CODE",{});var Gu=i(dr);Tc=s(Gu,"language modeling"),Gu.forEach(t),wc=s(Ta,` head on top.
The DeBERTa model was proposed in `),ko=r(Ta,"A",{href:!0,rel:!0});var Ku=i(ko);vc=s(Ku,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ku.forEach(t),yc=s(Ta,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ta.forEach(t),Dc=d(Nn),To=r(Nn,"P",{});var ll=i(To);$c=s(ll,"This model is also a PyTorch "),wo=r(ll,"A",{href:!0,rel:!0});var Vu=i(wo);Ec=s(Vu,"torch.nn.Module"),Vu.forEach(t),Fc=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),qc=d(Nn),Ae=r(Nn,"DIV",{class:!0});var at=i(Ae);T(vo.$$.fragment,at),zc=d(at),Bt=r(at,"P",{});var wa=i(Bt);Mc=s(wa,"The "),oa=r(wa,"A",{href:!0});var Ju=i(oa);jc=s(Ju,"DebertaForMaskedLM"),Ju.forEach(t),Cc=s(wa," forward method, overrides the "),cr=r(wa,"CODE",{});var Xu=i(cr);xc=s(Xu,"__call__"),Xu.forEach(t),Pc=s(wa," special method."),wa.forEach(t),Rc=d(at),T(mn.$$.fragment,at),Ac=d(at),pr=r(at,"P",{});var Yu=i(pr);Lc=s(Yu,"Example:"),Yu.forEach(t),Bc=d(at),T(yo.$$.fragment,at),Ic=d(at),T(Do.$$.fragment,at),at.forEach(t),Nn.forEach(t),Mi=d(n),It=r(n,"H2",{class:!0});var dl=i(It);fn=r(dl,"A",{id:!0,class:!0,href:!0});var Zu=i(fn);hr=r(Zu,"SPAN",{});var eg=i(hr);T($o.$$.fragment,eg),eg.forEach(t),Zu.forEach(t),Sc=d(dl),mr=r(dl,"SPAN",{});var tg=i(mr);Oc=s(tg,"DebertaForSequenceClassification"),tg.forEach(t),dl.forEach(t),ji=d(n),We=r(n,"DIV",{class:!0});var kt=i(We);T(Eo.$$.fragment,kt),Nc=d(kt),fr=r(kt,"P",{});var ng=i(fr);Wc=s(ng,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ng.forEach(t),Hc=d(kt),Fo=r(kt,"P",{});var cl=i(Fo);Uc=s(cl,"The DeBERTa model was proposed in "),qo=r(cl,"A",{href:!0,rel:!0});var og=i(qo);Qc=s(og,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),og.forEach(t),Gc=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),Kc=d(kt),zo=r(kt,"P",{});var pl=i(zo);Vc=s(pl,"This model is also a PyTorch "),Mo=r(pl,"A",{href:!0,rel:!0});var sg=i(Mo);Jc=s(sg,"torch.nn.Module"),sg.forEach(t),Xc=s(pl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),pl.forEach(t),Yc=d(kt),ye=r(kt,"DIV",{class:!0});var Me=i(ye);T(jo.$$.fragment,Me),Zc=d(Me),St=r(Me,"P",{});var va=i(St);ep=s(va,"The "),sa=r(va,"A",{href:!0});var ag=i(sa);tp=s(ag,"DebertaForSequenceClassification"),ag.forEach(t),np=s(va," forward method, overrides the "),ur=r(va,"CODE",{});var rg=i(ur);op=s(rg,"__call__"),rg.forEach(t),sp=s(va," special method."),va.forEach(t),ap=d(Me),T(un.$$.fragment,Me),rp=d(Me),gr=r(Me,"P",{});var ig=i(gr);ip=s(ig,"Example of single-label classification:"),ig.forEach(t),lp=d(Me),T(Co.$$.fragment,Me),dp=d(Me),T(xo.$$.fragment,Me),cp=d(Me),_r=r(Me,"P",{});var lg=i(_r);pp=s(lg,"Example of multi-label classification:"),lg.forEach(t),hp=d(Me),T(Po.$$.fragment,Me),mp=d(Me),T(Ro.$$.fragment,Me),Me.forEach(t),kt.forEach(t),Ci=d(n),Ot=r(n,"H2",{class:!0});var hl=i(Ot);gn=r(hl,"A",{id:!0,class:!0,href:!0});var dg=i(gn);br=r(dg,"SPAN",{});var cg=i(br);T(Ao.$$.fragment,cg),cg.forEach(t),dg.forEach(t),fp=d(hl),kr=r(hl,"SPAN",{});var pg=i(kr);up=s(pg,"DebertaForTokenClassification"),pg.forEach(t),hl.forEach(t),xi=d(n),He=r(n,"DIV",{class:!0});var Tt=i(He);T(Lo.$$.fragment,Tt),gp=d(Tt),Tr=r(Tt,"P",{});var hg=i(Tr);_p=s(hg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hg.forEach(t),bp=d(Tt),Bo=r(Tt,"P",{});var ml=i(Bo);kp=s(ml,"The DeBERTa model was proposed in "),Io=r(ml,"A",{href:!0,rel:!0});var mg=i(Io);Tp=s(mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mg.forEach(t),wp=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),vp=d(Tt),So=r(Tt,"P",{});var fl=i(So);yp=s(fl,"This model is also a PyTorch "),Oo=r(fl,"A",{href:!0,rel:!0});var fg=i(Oo);Dp=s(fg,"torch.nn.Module"),fg.forEach(t),$p=s(fl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fl.forEach(t),Ep=d(Tt),Le=r(Tt,"DIV",{class:!0});var rt=i(Le);T(No.$$.fragment,rt),Fp=d(rt),Nt=r(rt,"P",{});var ya=i(Nt);qp=s(ya,"The "),aa=r(ya,"A",{href:!0});var ug=i(aa);zp=s(ug,"DebertaForTokenClassification"),ug.forEach(t),Mp=s(ya," forward method, overrides the "),wr=r(ya,"CODE",{});var gg=i(wr);jp=s(gg,"__call__"),gg.forEach(t),Cp=s(ya," special method."),ya.forEach(t),xp=d(rt),T(_n.$$.fragment,rt),Pp=d(rt),vr=r(rt,"P",{});var _g=i(vr);Rp=s(_g,"Example:"),_g.forEach(t),Ap=d(rt),T(Wo.$$.fragment,rt),Lp=d(rt),T(Ho.$$.fragment,rt),rt.forEach(t),Tt.forEach(t),Pi=d(n),Wt=r(n,"H2",{class:!0});var ul=i(Wt);bn=r(ul,"A",{id:!0,class:!0,href:!0});var bg=i(bn);yr=r(bg,"SPAN",{});var kg=i(yr);T(Uo.$$.fragment,kg),kg.forEach(t),bg.forEach(t),Bp=d(ul),Dr=r(ul,"SPAN",{});var Tg=i(Dr);Ip=s(Tg,"DebertaForQuestionAnswering"),Tg.forEach(t),ul.forEach(t),Ri=d(n),Ue=r(n,"DIV",{class:!0});var wt=i(Ue);T(Qo.$$.fragment,wt),Sp=d(wt),Ht=r(wt,"P",{});var Da=i(Ht);Op=s(Da,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),$r=r(Da,"CODE",{});var wg=i($r);Np=s(wg,"span start logits"),wg.forEach(t),Wp=s(Da," and "),Er=r(Da,"CODE",{});var vg=i(Er);Hp=s(vg,"span end logits"),vg.forEach(t),Up=s(Da,")."),Da.forEach(t),Qp=d(wt),Go=r(wt,"P",{});var gl=i(Go);Gp=s(gl,"The DeBERTa model was proposed in "),Ko=r(gl,"A",{href:!0,rel:!0});var yg=i(Ko);Kp=s(yg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yg.forEach(t),Vp=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Jp=d(wt),Vo=r(wt,"P",{});var _l=i(Vo);Xp=s(_l,"This model is also a PyTorch "),Jo=r(_l,"A",{href:!0,rel:!0});var Dg=i(Jo);Yp=s(Dg,"torch.nn.Module"),Dg.forEach(t),Zp=s(_l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_l.forEach(t),eh=d(wt),Be=r(wt,"DIV",{class:!0});var it=i(Be);T(Xo.$$.fragment,it),th=d(it),Ut=r(it,"P",{});var $a=i(Ut);nh=s($a,"The "),ra=r($a,"A",{href:!0});var $g=i(ra);oh=s($g,"DebertaForQuestionAnswering"),$g.forEach(t),sh=s($a," forward method, overrides the "),Fr=r($a,"CODE",{});var Eg=i(Fr);ah=s(Eg,"__call__"),Eg.forEach(t),rh=s($a," special method."),$a.forEach(t),ih=d(it),T(kn.$$.fragment,it),lh=d(it),qr=r(it,"P",{});var Fg=i(qr);dh=s(Fg,"Example:"),Fg.forEach(t),ch=d(it),T(Yo.$$.fragment,it),ph=d(it),T(Zo.$$.fragment,it),it.forEach(t),wt.forEach(t),Ai=d(n),Qt=r(n,"H2",{class:!0});var bl=i(Qt);Tn=r(bl,"A",{id:!0,class:!0,href:!0});var qg=i(Tn);zr=r(qg,"SPAN",{});var zg=i(zr);T(es.$$.fragment,zg),zg.forEach(t),qg.forEach(t),hh=d(bl),Mr=r(bl,"SPAN",{});var Mg=i(Mr);mh=s(Mg,"TFDebertaModel"),Mg.forEach(t),bl.forEach(t),Li=d(n),Qe=r(n,"DIV",{class:!0});var vt=i(Qe);T(ts.$$.fragment,vt),fh=d(vt),ns=r(vt,"P",{});var kl=i(ns);uh=s(kl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),os=r(kl,"A",{href:!0,rel:!0});var jg=i(os);gh=s(jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jg.forEach(t),_h=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),bh=d(vt),ss=r(vt,"P",{});var Tl=i(ss);kh=s(Tl,"This model is also a "),as=r(Tl,"A",{href:!0,rel:!0});var Cg=i(as);Th=s(Cg,"tf.keras.Model"),Cg.forEach(t),wh=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),vh=d(vt),T(wn.$$.fragment,vt),yh=d(vt),Je=r(vt,"DIV",{class:!0});var yt=i(Je);T(rs.$$.fragment,yt),Dh=d(yt),Gt=r(yt,"P",{});var Ea=i(Gt);$h=s(Ea,"The "),ia=r(Ea,"A",{href:!0});var xg=i(ia);Eh=s(xg,"TFDebertaModel"),xg.forEach(t),Fh=s(Ea," forward method, overrides the "),jr=r(Ea,"CODE",{});var Pg=i(jr);qh=s(Pg,"__call__"),Pg.forEach(t),zh=s(Ea," special method."),Ea.forEach(t),Mh=d(yt),T(vn.$$.fragment,yt),jh=d(yt),Cr=r(yt,"P",{});var Rg=i(Cr);Ch=s(Rg,"Example:"),Rg.forEach(t),xh=d(yt),T(is.$$.fragment,yt),yt.forEach(t),vt.forEach(t),Bi=d(n),Kt=r(n,"H2",{class:!0});var wl=i(Kt);yn=r(wl,"A",{id:!0,class:!0,href:!0});var Ag=i(yn);xr=r(Ag,"SPAN",{});var Lg=i(xr);T(ls.$$.fragment,Lg),Lg.forEach(t),Ag.forEach(t),Ph=d(wl),Pr=r(wl,"SPAN",{});var Bg=i(Pr);Rh=s(Bg,"TFDebertaPreTrainedModel"),Bg.forEach(t),wl.forEach(t),Ii=d(n),ut=r(n,"DIV",{class:!0});var Fa=i(ut);T(ds.$$.fragment,Fa),Ah=d(Fa),Rr=r(Fa,"P",{});var Ig=i(Rr);Lh=s(Ig,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ig.forEach(t),Bh=d(Fa),ot=r(Fa,"DIV",{class:!0});var Wn=i(ot);T(cs.$$.fragment,Wn),Ih=d(Wn),Ar=r(Wn,"P",{});var Sg=i(Ar);Sh=s(Sg,"Calls the model on new inputs and returns the outputs as tensors."),Sg.forEach(t),Oh=d(Wn),ps=r(Wn,"P",{});var vl=i(ps);Nh=s(vl,"In this case "),Lr=r(vl,"CODE",{});var Og=i(Lr);Wh=s(Og,"call()"),Og.forEach(t),Hh=s(vl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),vl.forEach(t),Uh=d(Wn),et=r(Wn,"P",{});var Dt=i(et);Qh=s(Dt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Br=r(Dt,"CODE",{});var Ng=i(Br);Gh=s(Ng,"tf.keras.Model"),Ng.forEach(t),Kh=s(Dt,`.
To call a model on an input, always use the `),Ir=r(Dt,"CODE",{});var Wg=i(Ir);Vh=s(Wg,"__call__()"),Wg.forEach(t),Jh=s(Dt,` method,
i.e. `),Sr=r(Dt,"CODE",{});var Hg=i(Sr);Xh=s(Hg,"model(inputs)"),Hg.forEach(t),Yh=s(Dt,", which relies on the underlying "),Or=r(Dt,"CODE",{});var Ug=i(Or);Zh=s(Ug,"call()"),Ug.forEach(t),em=s(Dt," method."),Dt.forEach(t),Wn.forEach(t),Fa.forEach(t),Si=d(n),Vt=r(n,"H2",{class:!0});var yl=i(Vt);Dn=r(yl,"A",{id:!0,class:!0,href:!0});var Qg=i(Dn);Nr=r(Qg,"SPAN",{});var Gg=i(Nr);T(hs.$$.fragment,Gg),Gg.forEach(t),Qg.forEach(t),tm=d(yl),Wr=r(yl,"SPAN",{});var Kg=i(Wr);nm=s(Kg,"TFDebertaForMaskedLM"),Kg.forEach(t),yl.forEach(t),Oi=d(n),Ge=r(n,"DIV",{class:!0});var $t=i(Ge);T(ms.$$.fragment,$t),om=d($t),Jt=r($t,"P",{});var qa=i(Jt);sm=s(qa,"DeBERTa Model with a "),Hr=r(qa,"CODE",{});var Vg=i(Hr);am=s(Vg,"language modeling"),Vg.forEach(t),rm=s(qa,` head on top.
The DeBERTa model was proposed in `),fs=r(qa,"A",{href:!0,rel:!0});var Jg=i(fs);im=s(Jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jg.forEach(t),lm=s(qa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qa.forEach(t),dm=d($t),us=r($t,"P",{});var Dl=i(us);cm=s(Dl,"This model is also a "),gs=r(Dl,"A",{href:!0,rel:!0});var Xg=i(gs);pm=s(Xg,"tf.keras.Model"),Xg.forEach(t),hm=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),mm=d($t),T($n.$$.fragment,$t),fm=d($t),Ie=r($t,"DIV",{class:!0});var lt=i(Ie);T(_s.$$.fragment,lt),um=d(lt),Xt=r(lt,"P",{});var za=i(Xt);gm=s(za,"The "),la=r(za,"A",{href:!0});var Yg=i(la);_m=s(Yg,"TFDebertaForMaskedLM"),Yg.forEach(t),bm=s(za," forward method, overrides the "),Ur=r(za,"CODE",{});var Zg=i(Ur);km=s(Zg,"__call__"),Zg.forEach(t),Tm=s(za," special method."),za.forEach(t),wm=d(lt),T(En.$$.fragment,lt),vm=d(lt),Qr=r(lt,"P",{});var e_=i(Qr);ym=s(e_,"Example:"),e_.forEach(t),Dm=d(lt),T(bs.$$.fragment,lt),$m=d(lt),T(ks.$$.fragment,lt),lt.forEach(t),$t.forEach(t),Ni=d(n),Yt=r(n,"H2",{class:!0});var $l=i(Yt);Fn=r($l,"A",{id:!0,class:!0,href:!0});var t_=i(Fn);Gr=r(t_,"SPAN",{});var n_=i(Gr);T(Ts.$$.fragment,n_),n_.forEach(t),t_.forEach(t),Em=d($l),Kr=r($l,"SPAN",{});var o_=i(Kr);Fm=s(o_,"TFDebertaForSequenceClassification"),o_.forEach(t),$l.forEach(t),Wi=d(n),Ce=r(n,"DIV",{class:!0});var dt=i(Ce);T(ws.$$.fragment,dt),qm=d(dt),Vr=r(dt,"P",{});var s_=i(Vr);zm=s(s_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),s_.forEach(t),Mm=d(dt),vs=r(dt,"P",{});var El=i(vs);jm=s(El,"The DeBERTa model was proposed in "),ys=r(El,"A",{href:!0,rel:!0});var a_=i(ys);Cm=s(a_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),a_.forEach(t),xm=s(El,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),El.forEach(t),Pm=d(dt),Ds=r(dt,"P",{});var Fl=i(Ds);Rm=s(Fl,"This model is also a "),$s=r(Fl,"A",{href:!0,rel:!0});var r_=i($s);Am=s(r_,"tf.keras.Model"),r_.forEach(t),Lm=s(Fl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fl.forEach(t),Bm=d(dt),T(qn.$$.fragment,dt),Im=d(dt),Se=r(dt,"DIV",{class:!0});var ct=i(Se);T(Es.$$.fragment,ct),Sm=d(ct),Zt=r(ct,"P",{});var Ma=i(Zt);Om=s(Ma,"The "),da=r(Ma,"A",{href:!0});var i_=i(da);Nm=s(i_,"TFDebertaForSequenceClassification"),i_.forEach(t),Wm=s(Ma," forward method, overrides the "),Jr=r(Ma,"CODE",{});var l_=i(Jr);Hm=s(l_,"__call__"),l_.forEach(t),Um=s(Ma," special method."),Ma.forEach(t),Qm=d(ct),T(zn.$$.fragment,ct),Gm=d(ct),Xr=r(ct,"P",{});var d_=i(Xr);Km=s(d_,"Example:"),d_.forEach(t),Vm=d(ct),T(Fs.$$.fragment,ct),Jm=d(ct),T(qs.$$.fragment,ct),ct.forEach(t),dt.forEach(t),Hi=d(n),en=r(n,"H2",{class:!0});var ql=i(en);Mn=r(ql,"A",{id:!0,class:!0,href:!0});var c_=i(Mn);Yr=r(c_,"SPAN",{});var p_=i(Yr);T(zs.$$.fragment,p_),p_.forEach(t),c_.forEach(t),Xm=d(ql),Zr=r(ql,"SPAN",{});var h_=i(Zr);Ym=s(h_,"TFDebertaForTokenClassification"),h_.forEach(t),ql.forEach(t),Ui=d(n),xe=r(n,"DIV",{class:!0});var pt=i(xe);T(Ms.$$.fragment,pt),Zm=d(pt),ei=r(pt,"P",{});var m_=i(ei);ef=s(m_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),m_.forEach(t),tf=d(pt),js=r(pt,"P",{});var zl=i(js);nf=s(zl,"The DeBERTa model was proposed in "),Cs=r(zl,"A",{href:!0,rel:!0});var f_=i(Cs);of=s(f_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),f_.forEach(t),sf=s(zl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zl.forEach(t),af=d(pt),xs=r(pt,"P",{});var Ml=i(xs);rf=s(Ml,"This model is also a "),Ps=r(Ml,"A",{href:!0,rel:!0});var u_=i(Ps);lf=s(u_,"tf.keras.Model"),u_.forEach(t),df=s(Ml,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ml.forEach(t),cf=d(pt),T(jn.$$.fragment,pt),pf=d(pt),Oe=r(pt,"DIV",{class:!0});var ht=i(Oe);T(Rs.$$.fragment,ht),hf=d(ht),tn=r(ht,"P",{});var ja=i(tn);mf=s(ja,"The "),ca=r(ja,"A",{href:!0});var g_=i(ca);ff=s(g_,"TFDebertaForTokenClassification"),g_.forEach(t),uf=s(ja," forward method, overrides the "),ti=r(ja,"CODE",{});var __=i(ti);gf=s(__,"__call__"),__.forEach(t),_f=s(ja," special method."),ja.forEach(t),bf=d(ht),T(Cn.$$.fragment,ht),kf=d(ht),ni=r(ht,"P",{});var b_=i(ni);Tf=s(b_,"Example:"),b_.forEach(t),wf=d(ht),T(As.$$.fragment,ht),vf=d(ht),T(Ls.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Qi=d(n),nn=r(n,"H2",{class:!0});var jl=i(nn);xn=r(jl,"A",{id:!0,class:!0,href:!0});var k_=i(xn);oi=r(k_,"SPAN",{});var T_=i(oi);T(Bs.$$.fragment,T_),T_.forEach(t),k_.forEach(t),yf=d(jl),si=r(jl,"SPAN",{});var w_=i(si);Df=s(w_,"TFDebertaForQuestionAnswering"),w_.forEach(t),jl.forEach(t),Gi=d(n),Pe=r(n,"DIV",{class:!0});var mt=i(Pe);T(Is.$$.fragment,mt),$f=d(mt),on=r(mt,"P",{});var Ca=i(on);Ef=s(Ca,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ai=r(Ca,"CODE",{});var v_=i(ai);Ff=s(v_,"span start logits"),v_.forEach(t),qf=s(Ca," and "),ri=r(Ca,"CODE",{});var y_=i(ri);zf=s(y_,"span end logits"),y_.forEach(t),Mf=s(Ca,")."),Ca.forEach(t),jf=d(mt),Ss=r(mt,"P",{});var Cl=i(Ss);Cf=s(Cl,"The DeBERTa model was proposed in "),Os=r(Cl,"A",{href:!0,rel:!0});var D_=i(Os);xf=s(D_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),D_.forEach(t),Pf=s(Cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Cl.forEach(t),Rf=d(mt),Ns=r(mt,"P",{});var xl=i(Ns);Af=s(xl,"This model is also a "),Ws=r(xl,"A",{href:!0,rel:!0});var $_=i(Ws);Lf=s($_,"tf.keras.Model"),$_.forEach(t),Bf=s(xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xl.forEach(t),If=d(mt),T(Pn.$$.fragment,mt),Sf=d(mt),Ne=r(mt,"DIV",{class:!0});var ft=i(Ne);T(Hs.$$.fragment,ft),Of=d(ft),sn=r(ft,"P",{});var xa=i(sn);Nf=s(xa,"The "),pa=r(xa,"A",{href:!0});var E_=i(pa);Wf=s(E_,"TFDebertaForQuestionAnswering"),E_.forEach(t),Hf=s(xa," forward method, overrides the "),ii=r(xa,"CODE",{});var F_=i(ii);Uf=s(F_,"__call__"),F_.forEach(t),Qf=s(xa," special method."),xa.forEach(t),Gf=d(ft),T(Rn.$$.fragment,ft),Kf=d(ft),li=r(ft,"P",{});var q_=i(li);Vf=s(q_,"Example:"),q_.forEach(t),Jf=d(ft),T(Us.$$.fragment,ft),Xf=d(ft),T(Qs.$$.fragment,ft),ft.forEach(t),mt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(J_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(x,"href","https://huggingface.co/DeBERTa"),c(x,"rel","nofollow"),c(ne,"href","https://huggingface.co/kamalkraj"),c(ne,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Xs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ys,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Hn,"href","https://huggingface.co/microsoft/deberta-base"),c(Hn,"rel","nofollow"),c(Zs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ea,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(an,"id","transformers.DebertaTokenizer"),c(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(an,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(gt,"class","docstring"),c(rn,"class","docstring"),c(tt,"class","docstring"),c(ta,"class","docstring"),c(je,"class","docstring"),c(ln,"id","transformers.DebertaTokenizerFast"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(_t,"class","docstring"),c(nt,"class","docstring"),c(Xe,"class","docstring"),c(dn,"id","transformers.DebertaModel"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.DebertaModel"),c(Ct,"class","relative group"),c(co,"href","https://arxiv.org/abs/2006.03654"),c(co,"rel","nofollow"),c(ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ho,"rel","nofollow"),c(na,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ve,"class","docstring"),c(Ye,"class","docstring"),c(pn,"id","transformers.DebertaPreTrainedModel"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.DebertaPreTrainedModel"),c(Pt,"class","relative group"),c(Rt,"class","docstring"),c(hn,"id","transformers.DebertaForMaskedLM"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.DebertaForMaskedLM"),c(At,"class","relative group"),c(ko,"href","https://arxiv.org/abs/2006.03654"),c(ko,"rel","nofollow"),c(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wo,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Ae,"class","docstring"),c(Ze,"class","docstring"),c(fn,"id","transformers.DebertaForSequenceClassification"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(qo,"href","https://arxiv.org/abs/2006.03654"),c(qo,"rel","nofollow"),c(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mo,"rel","nofollow"),c(sa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(ye,"class","docstring"),c(We,"class","docstring"),c(gn,"id","transformers.DebertaForTokenClassification"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.DebertaForTokenClassification"),c(Ot,"class","relative group"),c(Io,"href","https://arxiv.org/abs/2006.03654"),c(Io,"rel","nofollow"),c(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Oo,"rel","nofollow"),c(aa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Le,"class","docstring"),c(He,"class","docstring"),c(bn,"id","transformers.DebertaForQuestionAnswering"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Ko,"href","https://arxiv.org/abs/2006.03654"),c(Ko,"rel","nofollow"),c(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jo,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(Be,"class","docstring"),c(Ue,"class","docstring"),c(Tn,"id","transformers.TFDebertaModel"),c(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Tn,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(os,"href","https://arxiv.org/abs/2006.03654"),c(os,"rel","nofollow"),c(as,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(as,"rel","nofollow"),c(ia,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Je,"class","docstring"),c(Qe,"class","docstring"),c(yn,"id","transformers.TFDebertaPreTrainedModel"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(ot,"class","docstring"),c(ut,"class","docstring"),c(Dn,"id","transformers.TFDebertaForMaskedLM"),c(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dn,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(fs,"href","https://arxiv.org/abs/2006.03654"),c(fs,"rel","nofollow"),c(gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(gs,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ie,"class","docstring"),c(Ge,"class","docstring"),c(Fn,"id","transformers.TFDebertaForSequenceClassification"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(ys,"href","https://arxiv.org/abs/2006.03654"),c(ys,"rel","nofollow"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Se,"class","docstring"),c(Ce,"class","docstring"),c(Mn,"id","transformers.TFDebertaForTokenClassification"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#transformers.TFDebertaForTokenClassification"),c(en,"class","relative group"),c(Cs,"href","https://arxiv.org/abs/2006.03654"),c(Cs,"rel","nofollow"),c(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ps,"rel","nofollow"),c(ca,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Oe,"class","docstring"),c(xe,"class","docstring"),c(xn,"id","transformers.TFDebertaForQuestionAnswering"),c(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xn,"href","#transformers.TFDebertaForQuestionAnswering"),c(nn,"class","relative group"),c(Os,"href","https://arxiv.org/abs/2006.03654"),c(Os,"rel","nofollow"),c(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ws,"rel","nofollow"),c(pa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ne,"class","docstring"),c(Pe,"class","docstring")},m(n,f){e(document.head,h),m(n,q,f),m(n,u,f),e(u,g),e(g,$),w(b,$,null),e(u,_),e(u,F),e(F,he),m(n,X,f),m(n,z,f),e(z,Y),e(Y,B),w(ee,B,null),e(z,me),e(z,I),e(I,fe),m(n,le,f),m(n,N,f),e(N,A),e(N,te),e(te,Z),e(N,M),m(n,C,f),m(n,oe,f),e(oe,W),m(n,de,f),m(n,se,f),e(se,H),m(n,ce,f),m(n,ae,f),e(ae,j),e(j,ue),e(j,L),e(L,ge),e(j,_e),m(n,S,f),m(n,K,f),e(K,be),e(K,x),e(x,ke),e(K,U),e(K,ne),e(ne,p),e(K,E),e(K,V),e(V,Fe),e(K,qe),m(n,R,f),m(n,pe,f),e(pe,Te),e(Te,$e),w(P,$e,null),e(pe,Q),e(pe,Ee),e(Ee,ze),m(n,O,f),m(n,re,f),w(ve,re,null),e(re,we),e(re,ie),e(ie,Pl),e(ie,Xs),e(Xs,Rl),e(ie,Al),e(ie,Ys),e(Ys,Ll),e(ie,Bl),e(ie,Hn),e(Hn,Il),e(ie,Sl),e(re,Ol),e(re,Et),e(Et,Nl),e(Et,Zs),e(Zs,Wl),e(Et,Hl),e(Et,ea),e(ea,Ul),e(Et,Ql),m(n,Ti,f),m(n,Ft,f),e(Ft,an),e(an,Pa),w(Un,Pa,null),e(Ft,Gl),e(Ft,Ra),e(Ra,Kl),m(n,wi,f),m(n,je,f),w(Qn,je,null),e(je,Vl),e(je,Aa),e(Aa,Jl),e(je,Xl),e(je,gt),w(Gn,gt,null),e(gt,Yl),e(gt,La),e(La,Zl),e(gt,ed),e(gt,Kn),e(Kn,Ba),e(Ba,td),e(Kn,nd),e(Kn,Ia),e(Ia,od),e(je,sd),e(je,rn),w(Vn,rn,null),e(rn,ad),e(rn,qt),e(qt,rd),e(qt,Sa),e(Sa,id),e(qt,ld),e(qt,Oa),e(Oa,dd),e(qt,cd),e(je,pd),e(je,tt),w(Jn,tt,null),e(tt,hd),e(tt,Na),e(Na,md),e(tt,fd),w(Xn,tt,null),e(tt,ud),e(tt,zt),e(zt,gd),e(zt,Wa),e(Wa,_d),e(zt,bd),e(zt,Ha),e(Ha,kd),e(zt,Td),e(je,wd),e(je,ta),w(Yn,ta,null),m(n,vi,f),m(n,Mt,f),e(Mt,ln),e(ln,Ua),w(Zn,Ua,null),e(Mt,vd),e(Mt,Qa),e(Qa,yd),m(n,yi,f),m(n,Xe,f),w(eo,Xe,null),e(Xe,Dd),e(Xe,to),e(to,$d),e(to,Ga),e(Ga,Ed),e(to,Fd),e(Xe,qd),e(Xe,_t),w(no,_t,null),e(_t,zd),e(_t,Ka),e(Ka,Md),e(_t,jd),e(_t,oo),e(oo,Va),e(Va,Cd),e(oo,xd),e(oo,Ja),e(Ja,Pd),e(Xe,Rd),e(Xe,nt),w(so,nt,null),e(nt,Ad),e(nt,Xa),e(Xa,Ld),e(nt,Bd),w(ao,nt,null),e(nt,Id),e(nt,jt),e(jt,Sd),e(jt,Ya),e(Ya,Od),e(jt,Nd),e(jt,Za),e(Za,Wd),e(jt,Hd),m(n,Di,f),m(n,Ct,f),e(Ct,dn),e(dn,er),w(ro,er,null),e(Ct,Ud),e(Ct,tr),e(tr,Qd),m(n,$i,f),m(n,Ye,f),w(io,Ye,null),e(Ye,Gd),e(Ye,lo),e(lo,Kd),e(lo,co),e(co,Vd),e(lo,Jd),e(Ye,Xd),e(Ye,po),e(po,Yd),e(po,ho),e(ho,Zd),e(po,ec),e(Ye,tc),e(Ye,Ve),w(mo,Ve,null),e(Ve,nc),e(Ve,xt),e(xt,oc),e(xt,na),e(na,sc),e(xt,ac),e(xt,nr),e(nr,rc),e(xt,ic),e(Ve,lc),w(cn,Ve,null),e(Ve,dc),e(Ve,or),e(or,cc),e(Ve,pc),w(fo,Ve,null),m(n,Ei,f),m(n,Pt,f),e(Pt,pn),e(pn,sr),w(uo,sr,null),e(Pt,hc),e(Pt,ar),e(ar,mc),m(n,Fi,f),m(n,Rt,f),w(go,Rt,null),e(Rt,fc),e(Rt,rr),e(rr,uc),m(n,qi,f),m(n,At,f),e(At,hn),e(hn,ir),w(_o,ir,null),e(At,gc),e(At,lr),e(lr,_c),m(n,zi,f),m(n,Ze,f),w(bo,Ze,null),e(Ze,bc),e(Ze,Lt),e(Lt,kc),e(Lt,dr),e(dr,Tc),e(Lt,wc),e(Lt,ko),e(ko,vc),e(Lt,yc),e(Ze,Dc),e(Ze,To),e(To,$c),e(To,wo),e(wo,Ec),e(To,Fc),e(Ze,qc),e(Ze,Ae),w(vo,Ae,null),e(Ae,zc),e(Ae,Bt),e(Bt,Mc),e(Bt,oa),e(oa,jc),e(Bt,Cc),e(Bt,cr),e(cr,xc),e(Bt,Pc),e(Ae,Rc),w(mn,Ae,null),e(Ae,Ac),e(Ae,pr),e(pr,Lc),e(Ae,Bc),w(yo,Ae,null),e(Ae,Ic),w(Do,Ae,null),m(n,Mi,f),m(n,It,f),e(It,fn),e(fn,hr),w($o,hr,null),e(It,Sc),e(It,mr),e(mr,Oc),m(n,ji,f),m(n,We,f),w(Eo,We,null),e(We,Nc),e(We,fr),e(fr,Wc),e(We,Hc),e(We,Fo),e(Fo,Uc),e(Fo,qo),e(qo,Qc),e(Fo,Gc),e(We,Kc),e(We,zo),e(zo,Vc),e(zo,Mo),e(Mo,Jc),e(zo,Xc),e(We,Yc),e(We,ye),w(jo,ye,null),e(ye,Zc),e(ye,St),e(St,ep),e(St,sa),e(sa,tp),e(St,np),e(St,ur),e(ur,op),e(St,sp),e(ye,ap),w(un,ye,null),e(ye,rp),e(ye,gr),e(gr,ip),e(ye,lp),w(Co,ye,null),e(ye,dp),w(xo,ye,null),e(ye,cp),e(ye,_r),e(_r,pp),e(ye,hp),w(Po,ye,null),e(ye,mp),w(Ro,ye,null),m(n,Ci,f),m(n,Ot,f),e(Ot,gn),e(gn,br),w(Ao,br,null),e(Ot,fp),e(Ot,kr),e(kr,up),m(n,xi,f),m(n,He,f),w(Lo,He,null),e(He,gp),e(He,Tr),e(Tr,_p),e(He,bp),e(He,Bo),e(Bo,kp),e(Bo,Io),e(Io,Tp),e(Bo,wp),e(He,vp),e(He,So),e(So,yp),e(So,Oo),e(Oo,Dp),e(So,$p),e(He,Ep),e(He,Le),w(No,Le,null),e(Le,Fp),e(Le,Nt),e(Nt,qp),e(Nt,aa),e(aa,zp),e(Nt,Mp),e(Nt,wr),e(wr,jp),e(Nt,Cp),e(Le,xp),w(_n,Le,null),e(Le,Pp),e(Le,vr),e(vr,Rp),e(Le,Ap),w(Wo,Le,null),e(Le,Lp),w(Ho,Le,null),m(n,Pi,f),m(n,Wt,f),e(Wt,bn),e(bn,yr),w(Uo,yr,null),e(Wt,Bp),e(Wt,Dr),e(Dr,Ip),m(n,Ri,f),m(n,Ue,f),w(Qo,Ue,null),e(Ue,Sp),e(Ue,Ht),e(Ht,Op),e(Ht,$r),e($r,Np),e(Ht,Wp),e(Ht,Er),e(Er,Hp),e(Ht,Up),e(Ue,Qp),e(Ue,Go),e(Go,Gp),e(Go,Ko),e(Ko,Kp),e(Go,Vp),e(Ue,Jp),e(Ue,Vo),e(Vo,Xp),e(Vo,Jo),e(Jo,Yp),e(Vo,Zp),e(Ue,eh),e(Ue,Be),w(Xo,Be,null),e(Be,th),e(Be,Ut),e(Ut,nh),e(Ut,ra),e(ra,oh),e(Ut,sh),e(Ut,Fr),e(Fr,ah),e(Ut,rh),e(Be,ih),w(kn,Be,null),e(Be,lh),e(Be,qr),e(qr,dh),e(Be,ch),w(Yo,Be,null),e(Be,ph),w(Zo,Be,null),m(n,Ai,f),m(n,Qt,f),e(Qt,Tn),e(Tn,zr),w(es,zr,null),e(Qt,hh),e(Qt,Mr),e(Mr,mh),m(n,Li,f),m(n,Qe,f),w(ts,Qe,null),e(Qe,fh),e(Qe,ns),e(ns,uh),e(ns,os),e(os,gh),e(ns,_h),e(Qe,bh),e(Qe,ss),e(ss,kh),e(ss,as),e(as,Th),e(ss,wh),e(Qe,vh),w(wn,Qe,null),e(Qe,yh),e(Qe,Je),w(rs,Je,null),e(Je,Dh),e(Je,Gt),e(Gt,$h),e(Gt,ia),e(ia,Eh),e(Gt,Fh),e(Gt,jr),e(jr,qh),e(Gt,zh),e(Je,Mh),w(vn,Je,null),e(Je,jh),e(Je,Cr),e(Cr,Ch),e(Je,xh),w(is,Je,null),m(n,Bi,f),m(n,Kt,f),e(Kt,yn),e(yn,xr),w(ls,xr,null),e(Kt,Ph),e(Kt,Pr),e(Pr,Rh),m(n,Ii,f),m(n,ut,f),w(ds,ut,null),e(ut,Ah),e(ut,Rr),e(Rr,Lh),e(ut,Bh),e(ut,ot),w(cs,ot,null),e(ot,Ih),e(ot,Ar),e(Ar,Sh),e(ot,Oh),e(ot,ps),e(ps,Nh),e(ps,Lr),e(Lr,Wh),e(ps,Hh),e(ot,Uh),e(ot,et),e(et,Qh),e(et,Br),e(Br,Gh),e(et,Kh),e(et,Ir),e(Ir,Vh),e(et,Jh),e(et,Sr),e(Sr,Xh),e(et,Yh),e(et,Or),e(Or,Zh),e(et,em),m(n,Si,f),m(n,Vt,f),e(Vt,Dn),e(Dn,Nr),w(hs,Nr,null),e(Vt,tm),e(Vt,Wr),e(Wr,nm),m(n,Oi,f),m(n,Ge,f),w(ms,Ge,null),e(Ge,om),e(Ge,Jt),e(Jt,sm),e(Jt,Hr),e(Hr,am),e(Jt,rm),e(Jt,fs),e(fs,im),e(Jt,lm),e(Ge,dm),e(Ge,us),e(us,cm),e(us,gs),e(gs,pm),e(us,hm),e(Ge,mm),w($n,Ge,null),e(Ge,fm),e(Ge,Ie),w(_s,Ie,null),e(Ie,um),e(Ie,Xt),e(Xt,gm),e(Xt,la),e(la,_m),e(Xt,bm),e(Xt,Ur),e(Ur,km),e(Xt,Tm),e(Ie,wm),w(En,Ie,null),e(Ie,vm),e(Ie,Qr),e(Qr,ym),e(Ie,Dm),w(bs,Ie,null),e(Ie,$m),w(ks,Ie,null),m(n,Ni,f),m(n,Yt,f),e(Yt,Fn),e(Fn,Gr),w(Ts,Gr,null),e(Yt,Em),e(Yt,Kr),e(Kr,Fm),m(n,Wi,f),m(n,Ce,f),w(ws,Ce,null),e(Ce,qm),e(Ce,Vr),e(Vr,zm),e(Ce,Mm),e(Ce,vs),e(vs,jm),e(vs,ys),e(ys,Cm),e(vs,xm),e(Ce,Pm),e(Ce,Ds),e(Ds,Rm),e(Ds,$s),e($s,Am),e(Ds,Lm),e(Ce,Bm),w(qn,Ce,null),e(Ce,Im),e(Ce,Se),w(Es,Se,null),e(Se,Sm),e(Se,Zt),e(Zt,Om),e(Zt,da),e(da,Nm),e(Zt,Wm),e(Zt,Jr),e(Jr,Hm),e(Zt,Um),e(Se,Qm),w(zn,Se,null),e(Se,Gm),e(Se,Xr),e(Xr,Km),e(Se,Vm),w(Fs,Se,null),e(Se,Jm),w(qs,Se,null),m(n,Hi,f),m(n,en,f),e(en,Mn),e(Mn,Yr),w(zs,Yr,null),e(en,Xm),e(en,Zr),e(Zr,Ym),m(n,Ui,f),m(n,xe,f),w(Ms,xe,null),e(xe,Zm),e(xe,ei),e(ei,ef),e(xe,tf),e(xe,js),e(js,nf),e(js,Cs),e(Cs,of),e(js,sf),e(xe,af),e(xe,xs),e(xs,rf),e(xs,Ps),e(Ps,lf),e(xs,df),e(xe,cf),w(jn,xe,null),e(xe,pf),e(xe,Oe),w(Rs,Oe,null),e(Oe,hf),e(Oe,tn),e(tn,mf),e(tn,ca),e(ca,ff),e(tn,uf),e(tn,ti),e(ti,gf),e(tn,_f),e(Oe,bf),w(Cn,Oe,null),e(Oe,kf),e(Oe,ni),e(ni,Tf),e(Oe,wf),w(As,Oe,null),e(Oe,vf),w(Ls,Oe,null),m(n,Qi,f),m(n,nn,f),e(nn,xn),e(xn,oi),w(Bs,oi,null),e(nn,yf),e(nn,si),e(si,Df),m(n,Gi,f),m(n,Pe,f),w(Is,Pe,null),e(Pe,$f),e(Pe,on),e(on,Ef),e(on,ai),e(ai,Ff),e(on,qf),e(on,ri),e(ri,zf),e(on,Mf),e(Pe,jf),e(Pe,Ss),e(Ss,Cf),e(Ss,Os),e(Os,xf),e(Ss,Pf),e(Pe,Rf),e(Pe,Ns),e(Ns,Af),e(Ns,Ws),e(Ws,Lf),e(Ns,Bf),e(Pe,If),w(Pn,Pe,null),e(Pe,Sf),e(Pe,Ne),w(Hs,Ne,null),e(Ne,Of),e(Ne,sn),e(sn,Nf),e(sn,pa),e(pa,Wf),e(sn,Hf),e(sn,ii),e(ii,Uf),e(sn,Qf),e(Ne,Gf),w(Rn,Ne,null),e(Ne,Kf),e(Ne,li),e(li,Vf),e(Ne,Jf),w(Us,Ne,null),e(Ne,Xf),w(Qs,Ne,null),Ki=!0},p(n,[f]){const Gs={};f&2&&(Gs.$$scope={dirty:f,ctx:n}),cn.$set(Gs);const di={};f&2&&(di.$$scope={dirty:f,ctx:n}),mn.$set(di);const ci={};f&2&&(ci.$$scope={dirty:f,ctx:n}),un.$set(ci);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:n}),_n.$set(pi);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:n}),kn.$set(Ks);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:n}),wn.$set(hi);const mi={};f&2&&(mi.$$scope={dirty:f,ctx:n}),vn.$set(mi);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:n}),$n.$set(fi);const Vs={};f&2&&(Vs.$$scope={dirty:f,ctx:n}),En.$set(Vs);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:n}),qn.$set(ui);const gi={};f&2&&(gi.$$scope={dirty:f,ctx:n}),zn.$set(gi);const _i={};f&2&&(_i.$$scope={dirty:f,ctx:n}),jn.$set(_i);const bi={};f&2&&(bi.$$scope={dirty:f,ctx:n}),Cn.$set(bi);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:n}),Pn.$set(Js);const ki={};f&2&&(ki.$$scope={dirty:f,ctx:n}),Rn.$set(ki)},i(n){Ki||(v(b.$$.fragment,n),v(ee.$$.fragment,n),v(P.$$.fragment,n),v(ve.$$.fragment,n),v(Un.$$.fragment,n),v(Qn.$$.fragment,n),v(Gn.$$.fragment,n),v(Vn.$$.fragment,n),v(Jn.$$.fragment,n),v(Xn.$$.fragment,n),v(Yn.$$.fragment,n),v(Zn.$$.fragment,n),v(eo.$$.fragment,n),v(no.$$.fragment,n),v(so.$$.fragment,n),v(ao.$$.fragment,n),v(ro.$$.fragment,n),v(io.$$.fragment,n),v(mo.$$.fragment,n),v(cn.$$.fragment,n),v(fo.$$.fragment,n),v(uo.$$.fragment,n),v(go.$$.fragment,n),v(_o.$$.fragment,n),v(bo.$$.fragment,n),v(vo.$$.fragment,n),v(mn.$$.fragment,n),v(yo.$$.fragment,n),v(Do.$$.fragment,n),v($o.$$.fragment,n),v(Eo.$$.fragment,n),v(jo.$$.fragment,n),v(un.$$.fragment,n),v(Co.$$.fragment,n),v(xo.$$.fragment,n),v(Po.$$.fragment,n),v(Ro.$$.fragment,n),v(Ao.$$.fragment,n),v(Lo.$$.fragment,n),v(No.$$.fragment,n),v(_n.$$.fragment,n),v(Wo.$$.fragment,n),v(Ho.$$.fragment,n),v(Uo.$$.fragment,n),v(Qo.$$.fragment,n),v(Xo.$$.fragment,n),v(kn.$$.fragment,n),v(Yo.$$.fragment,n),v(Zo.$$.fragment,n),v(es.$$.fragment,n),v(ts.$$.fragment,n),v(wn.$$.fragment,n),v(rs.$$.fragment,n),v(vn.$$.fragment,n),v(is.$$.fragment,n),v(ls.$$.fragment,n),v(ds.$$.fragment,n),v(cs.$$.fragment,n),v(hs.$$.fragment,n),v(ms.$$.fragment,n),v($n.$$.fragment,n),v(_s.$$.fragment,n),v(En.$$.fragment,n),v(bs.$$.fragment,n),v(ks.$$.fragment,n),v(Ts.$$.fragment,n),v(ws.$$.fragment,n),v(qn.$$.fragment,n),v(Es.$$.fragment,n),v(zn.$$.fragment,n),v(Fs.$$.fragment,n),v(qs.$$.fragment,n),v(zs.$$.fragment,n),v(Ms.$$.fragment,n),v(jn.$$.fragment,n),v(Rs.$$.fragment,n),v(Cn.$$.fragment,n),v(As.$$.fragment,n),v(Ls.$$.fragment,n),v(Bs.$$.fragment,n),v(Is.$$.fragment,n),v(Pn.$$.fragment,n),v(Hs.$$.fragment,n),v(Rn.$$.fragment,n),v(Us.$$.fragment,n),v(Qs.$$.fragment,n),Ki=!0)},o(n){y(b.$$.fragment,n),y(ee.$$.fragment,n),y(P.$$.fragment,n),y(ve.$$.fragment,n),y(Un.$$.fragment,n),y(Qn.$$.fragment,n),y(Gn.$$.fragment,n),y(Vn.$$.fragment,n),y(Jn.$$.fragment,n),y(Xn.$$.fragment,n),y(Yn.$$.fragment,n),y(Zn.$$.fragment,n),y(eo.$$.fragment,n),y(no.$$.fragment,n),y(so.$$.fragment,n),y(ao.$$.fragment,n),y(ro.$$.fragment,n),y(io.$$.fragment,n),y(mo.$$.fragment,n),y(cn.$$.fragment,n),y(fo.$$.fragment,n),y(uo.$$.fragment,n),y(go.$$.fragment,n),y(_o.$$.fragment,n),y(bo.$$.fragment,n),y(vo.$$.fragment,n),y(mn.$$.fragment,n),y(yo.$$.fragment,n),y(Do.$$.fragment,n),y($o.$$.fragment,n),y(Eo.$$.fragment,n),y(jo.$$.fragment,n),y(un.$$.fragment,n),y(Co.$$.fragment,n),y(xo.$$.fragment,n),y(Po.$$.fragment,n),y(Ro.$$.fragment,n),y(Ao.$$.fragment,n),y(Lo.$$.fragment,n),y(No.$$.fragment,n),y(_n.$$.fragment,n),y(Wo.$$.fragment,n),y(Ho.$$.fragment,n),y(Uo.$$.fragment,n),y(Qo.$$.fragment,n),y(Xo.$$.fragment,n),y(kn.$$.fragment,n),y(Yo.$$.fragment,n),y(Zo.$$.fragment,n),y(es.$$.fragment,n),y(ts.$$.fragment,n),y(wn.$$.fragment,n),y(rs.$$.fragment,n),y(vn.$$.fragment,n),y(is.$$.fragment,n),y(ls.$$.fragment,n),y(ds.$$.fragment,n),y(cs.$$.fragment,n),y(hs.$$.fragment,n),y(ms.$$.fragment,n),y($n.$$.fragment,n),y(_s.$$.fragment,n),y(En.$$.fragment,n),y(bs.$$.fragment,n),y(ks.$$.fragment,n),y(Ts.$$.fragment,n),y(ws.$$.fragment,n),y(qn.$$.fragment,n),y(Es.$$.fragment,n),y(zn.$$.fragment,n),y(Fs.$$.fragment,n),y(qs.$$.fragment,n),y(zs.$$.fragment,n),y(Ms.$$.fragment,n),y(jn.$$.fragment,n),y(Rs.$$.fragment,n),y(Cn.$$.fragment,n),y(As.$$.fragment,n),y(Ls.$$.fragment,n),y(Bs.$$.fragment,n),y(Is.$$.fragment,n),y(Pn.$$.fragment,n),y(Hs.$$.fragment,n),y(Rn.$$.fragment,n),y(Us.$$.fragment,n),y(Qs.$$.fragment,n),Ki=!1},d(n){t(h),n&&t(q),n&&t(u),D(b),n&&t(X),n&&t(z),D(ee),n&&t(le),n&&t(N),n&&t(C),n&&t(oe),n&&t(de),n&&t(se),n&&t(ce),n&&t(ae),n&&t(S),n&&t(K),n&&t(R),n&&t(pe),D(P),n&&t(O),n&&t(re),D(ve),n&&t(Ti),n&&t(Ft),D(Un),n&&t(wi),n&&t(je),D(Qn),D(Gn),D(Vn),D(Jn),D(Xn),D(Yn),n&&t(vi),n&&t(Mt),D(Zn),n&&t(yi),n&&t(Xe),D(eo),D(no),D(so),D(ao),n&&t(Di),n&&t(Ct),D(ro),n&&t($i),n&&t(Ye),D(io),D(mo),D(cn),D(fo),n&&t(Ei),n&&t(Pt),D(uo),n&&t(Fi),n&&t(Rt),D(go),n&&t(qi),n&&t(At),D(_o),n&&t(zi),n&&t(Ze),D(bo),D(vo),D(mn),D(yo),D(Do),n&&t(Mi),n&&t(It),D($o),n&&t(ji),n&&t(We),D(Eo),D(jo),D(un),D(Co),D(xo),D(Po),D(Ro),n&&t(Ci),n&&t(Ot),D(Ao),n&&t(xi),n&&t(He),D(Lo),D(No),D(_n),D(Wo),D(Ho),n&&t(Pi),n&&t(Wt),D(Uo),n&&t(Ri),n&&t(Ue),D(Qo),D(Xo),D(kn),D(Yo),D(Zo),n&&t(Ai),n&&t(Qt),D(es),n&&t(Li),n&&t(Qe),D(ts),D(wn),D(rs),D(vn),D(is),n&&t(Bi),n&&t(Kt),D(ls),n&&t(Ii),n&&t(ut),D(ds),D(cs),n&&t(Si),n&&t(Vt),D(hs),n&&t(Oi),n&&t(Ge),D(ms),D($n),D(_s),D(En),D(bs),D(ks),n&&t(Ni),n&&t(Yt),D(Ts),n&&t(Wi),n&&t(Ce),D(ws),D(qn),D(Es),D(zn),D(Fs),D(qs),n&&t(Hi),n&&t(en),D(zs),n&&t(Ui),n&&t(xe),D(Ms),D(jn),D(Rs),D(Cn),D(As),D(Ls),n&&t(Qi),n&&t(nn),D(Bs),n&&t(Gi),n&&t(Pe),D(Is),D(Pn),D(Hs),D(Rn),D(Us),D(Qs)}}}const J_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function X_(G){return x_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ob extends z_{constructor(h){super();M_(this,h,X_,V_,j_,{})}}export{ob as default,J_ as metadata};
