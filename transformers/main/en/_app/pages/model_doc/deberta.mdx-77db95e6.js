import{S as w_,i as v_,s as y_,e as a,k as l,w as k,t as n,M as D_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as m,y as w,q as v,o as y,B as D,v as $_}from"../../chunks/vendor-6b77c823.js";import{T as He}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as Me}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Re}from"../../chunks/IconCopyLink-7a11ce68.js";function E_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function F_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function q_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function z_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function M_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function j_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,me,I,fe,le,N,B,te,Z,M,C,ne,W,de,se,H,ce,ae,j,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var De=i(B);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var $e=i(W);de=s($e,"input_ids"),$e.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var S=i(j);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,B,E),e(B,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,A),e(A,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function C_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function x_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,me,I,fe,le,N,B,te,Z,M,C,ne,W,de,se,H,ce,ae,j,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var De=i(B);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var $e=i(W);de=s($e,"input_ids"),$e.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var S=i(j);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,B,E),e(B,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,A),e(A,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function P_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function R_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,me,I,fe,le,N,B,te,Z,M,C,ne,W,de,se,H,ce,ae,j,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var De=i(B);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var $e=i(W);de=s($e,"input_ids"),$e.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var S=i(j);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,B,E),e(B,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,A),e(A,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function B_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function A_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,me,I,fe,le,N,B,te,Z,M,C,ne,W,de,se,H,ce,ae,j,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var De=i(B);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var $e=i(W);de=s($e,"input_ids"),$e.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var S=i(j);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,B,E),e(B,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,A),e(A,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function L_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function I_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,me,I,fe,le,N,B,te,Z,M,C,ne,W,de,se,H,ce,ae,j,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),me=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var De=i(B);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);C=r(P,"LI",{});var Q=i(C);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var $e=i(W);de=s($e,"input_ids"),$e.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),j=r(P,"LI",{});var S=i(j);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,q),m(p,u,E),m(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),m(p,X,E),m(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,me),e(z,I),e(I,fe),e(z,le),m(p,N,E),m(p,B,E),e(B,te),m(p,Z,E),m(p,M,E),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ce),e(M,ae),e(M,j),e(j,ue),e(j,A),e(A,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function O_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){m(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function S_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,me,I,fe,le,N,B,te,Z,M,C,ne,W,de,se,H,ce,ae,j,ue,A,ge,_e,O,K,be,x,ke,U,oe,p,E,V,Ee,Fe,R,pe,Te,De,P,Q,$e,qe,S,re,ve,we,ie,Ml,Gs,jl,Cl,Ks,xl,Pl,Ho,Rl,Bl,Al,Et,Ll,Vs,Il,Ol,Js,Sl,Nl,gi,Ft,ao,Ma,Uo,Wl,ja,Hl,_i,je,Qo,Ul,Ca,Ql,Gl,ht,Go,Kl,xa,Vl,Jl,Ko,Pa,Xl,Yl,Ra,Zl,ed,ro,Vo,td,qt,od,Ba,nd,sd,Aa,ad,rd,id,tt,Jo,ld,La,dd,cd,Xo,pd,zt,hd,Ia,md,fd,Oa,ud,gd,_d,Xs,Yo,bi,Mt,io,Sa,Zo,bd,Na,kd,ki,Xe,en,Td,tn,wd,Wa,vd,yd,Dd,mt,on,$d,Ha,Ed,Fd,nn,Ua,qd,zd,Qa,Md,jd,ot,sn,Cd,Ga,xd,Pd,an,Rd,jt,Bd,Ka,Ad,Ld,Va,Id,Od,Ti,Ct,lo,Ja,rn,Sd,Xa,Nd,wi,Ye,ln,Wd,dn,Hd,cn,Ud,Qd,Gd,pn,Kd,hn,Vd,Jd,Xd,Ue,mn,Yd,xt,Zd,Ys,ec,tc,Ya,oc,nc,sc,co,ac,Za,rc,ic,fn,vi,Pt,po,er,un,lc,tr,dc,yi,Rt,gn,cc,or,pc,Di,Bt,ho,nr,_n,hc,sr,mc,$i,Ze,bn,fc,At,uc,ar,gc,_c,kn,bc,kc,Tc,Tn,wc,wn,vc,yc,Dc,Be,vn,$c,Lt,Ec,Zs,Fc,qc,rr,zc,Mc,jc,mo,Cc,ir,xc,Pc,yn,Rc,Dn,Ei,It,fo,lr,$n,Bc,dr,Ac,Fi,Ie,En,Lc,cr,Ic,Oc,Fn,Sc,qn,Nc,Wc,Hc,zn,Uc,Mn,Qc,Gc,Kc,ye,jn,Vc,Ot,Jc,ea,Xc,Yc,pr,Zc,ep,tp,uo,op,hr,np,sp,Cn,ap,xn,rp,mr,ip,lp,Pn,dp,Rn,qi,St,go,fr,Bn,cp,ur,pp,zi,Oe,An,hp,gr,mp,fp,Ln,up,In,gp,_p,bp,On,kp,Sn,Tp,wp,vp,Ae,Nn,yp,Nt,Dp,ta,$p,Ep,_r,Fp,qp,zp,_o,Mp,br,jp,Cp,Wn,xp,Hn,Mi,Wt,bo,kr,Un,Pp,Tr,Rp,ji,Se,Qn,Bp,Ht,Ap,wr,Lp,Ip,vr,Op,Sp,Np,Gn,Wp,Kn,Hp,Up,Qp,Vn,Gp,Jn,Kp,Vp,Jp,Le,Xn,Xp,Ut,Yp,oa,Zp,eh,yr,th,oh,nh,ko,sh,Dr,ah,rh,Yn,ih,Zn,Ci,Qt,To,$r,es,lh,Er,dh,xi,Ne,ts,ch,os,ph,ns,hh,mh,fh,ss,uh,as,gh,_h,bh,wo,kh,Qe,rs,Th,Gt,wh,na,vh,yh,Fr,Dh,$h,Eh,vo,Fh,qr,qh,zh,is,Pi,Kt,yo,zr,ls,Mh,Mr,jh,Ri,pt,ds,Ch,jr,xh,Ph,nt,cs,Rh,Cr,Bh,Ah,ps,Lh,xr,Ih,Oh,Sh,et,Nh,Pr,Wh,Hh,Rr,Uh,Qh,Br,Gh,Kh,Ar,Vh,Jh,Bi,Vt,Do,Lr,hs,Xh,Ir,Yh,Ai,We,ms,Zh,Jt,em,Or,tm,om,fs,nm,sm,am,us,rm,gs,im,lm,dm,$o,cm,Ge,_s,pm,Xt,hm,sa,mm,fm,Sr,um,gm,_m,Eo,bm,Nr,km,Tm,bs,Li,Yt,Fo,Wr,ks,wm,Hr,vm,Ii,Ce,Ts,ym,Ur,Dm,$m,ws,Em,vs,Fm,qm,zm,ys,Mm,Ds,jm,Cm,xm,qo,Pm,Ke,$s,Rm,Zt,Bm,aa,Am,Lm,Qr,Im,Om,Sm,zo,Nm,Gr,Wm,Hm,Es,Oi,eo,Mo,Kr,Fs,Um,Vr,Qm,Si,xe,qs,Gm,Jr,Km,Vm,zs,Jm,Ms,Xm,Ym,Zm,js,ef,Cs,tf,of,nf,jo,sf,Ve,xs,af,to,rf,ra,lf,df,Xr,cf,pf,hf,Co,mf,Yr,ff,uf,Ps,Ni,oo,xo,Zr,Rs,gf,ei,_f,Wi,Pe,Bs,bf,no,kf,ti,Tf,wf,oi,vf,yf,Df,As,$f,Ls,Ef,Ff,qf,Is,zf,Os,Mf,jf,Cf,Po,xf,Je,Ss,Pf,so,Rf,ia,Bf,Af,ni,Lf,If,Of,Ro,Sf,si,Nf,Wf,Ns,Hi;return b=new Re({}),ee=new Re({}),P=new Re({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Re({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new Me({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new J({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zo=new Re({}),en=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),on=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new Me({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),rn=new Re({}),ln=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),co=new He({props:{$$slots:{default:[E_]},$$scope:{ctx:G}}}),fn=new Me({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Re({}),gn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L787"}}),_n=new Re({}),bn=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),mo=new He({props:{$$slots:{default:[F_]},$$scope:{ctx:G}}}),yn=new Me({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
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
`}}),Dn=new Me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),$n=new Re({}),En=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),uo=new He({props:{$$slots:{default:[q_]},$$scope:{ctx:G}}}),Cn=new Me({props:{code:`import torch
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
`}}),xn=new Me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),Pn=new Me({props:{code:`import torch
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
`}}),Rn=new Me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Bn=new Re({}),An=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nn=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),_o=new He({props:{$$slots:{default:[z_]},$$scope:{ctx:G}}}),Wn=new Me({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
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
`}}),Hn=new Me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Un=new Re({}),Qn=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1324",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1337",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ko=new He({props:{$$slots:{default:[M_]},$$scope:{ctx:G}}}),Yn=new Me({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
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
`}}),Zn=new Me({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),es=new Re({}),ts=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1074",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new He({props:{$$slots:{default:[j_]},$$scope:{ctx:G}}}),rs=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1080",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
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
`}}),vo=new He({props:{$$slots:{default:[C_]},$$scope:{ctx:G}}}),is=new Me({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ls=new Re({}),ds=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L979"}}),cs=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),hs=new Re({}),ms=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1123",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new He({props:{$$slots:{default:[x_]},$$scope:{ctx:G}}}),_s=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1139",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Eo=new He({props:{$$slots:{default:[P_]},$$scope:{ctx:G}}}),bs=new Me({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ks=new Re({}),Ts=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1207",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new He({props:{$$slots:{default:[R_]},$$scope:{ctx:G}}}),$s=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1225",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),zo=new He({props:{$$slots:{default:[B_]},$$scope:{ctx:G}}}),Es=new Me({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fs=new Re({}),qs=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1296",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new He({props:{$$slots:{default:[A_]},$$scope:{ctx:G}}}),xs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1308",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Co=new He({props:{$$slots:{default:[L_]},$$scope:{ctx:G}}}),Ps=new Me({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rs=new Re({}),Bs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1375",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new He({props:{$$slots:{default:[I_]},$$scope:{ctx:G}}}),Ss=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1386",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Ro=new He({props:{$$slots:{default:[O_]},$$scope:{ctx:G}}}),Ns=new Me({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),q=l(),u=a("h1"),g=a("a"),$=a("span"),k(b.$$.fragment),_=l(),F=a("span"),he=n("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),me=l(),I=a("span"),fe=n("Overview"),le=l(),N=a("p"),B=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
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
pre-trained models will be made publicly available at `),A=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),O=l(),K=a("p"),be=n("This model was contributed by "),x=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),p=n("kamalkraj"),E=n(" . The original code can be found "),V=a("a"),Ee=n("here"),Fe=n("."),R=l(),pe=a("h2"),Te=a("a"),De=a("span"),k(P.$$.fragment),Q=l(),$e=a("span"),qe=n("DebertaConfig"),S=l(),re=a("div"),k(ve.$$.fragment),we=l(),ie=a("p"),Ml=n("This is the configuration class to store the configuration of a "),Gs=a("a"),jl=n("DebertaModel"),Cl=n(" or a "),Ks=a("a"),xl=n("TFDebertaModel"),Pl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a("a"),Rl=n("microsoft/deberta-base"),Bl=n(" architecture."),Al=l(),Et=a("p"),Ll=n("Configuration objects inherit from "),Vs=a("a"),Il=n("PretrainedConfig"),Ol=n(` and can be used to control the model outputs. Read the
documentation from `),Js=a("a"),Sl=n("PretrainedConfig"),Nl=n(" for more information."),gi=l(),Ft=a("h2"),ao=a("a"),Ma=a("span"),k(Uo.$$.fragment),Wl=l(),ja=a("span"),Hl=n("DebertaTokenizer"),_i=l(),je=a("div"),k(Qo.$$.fragment),Ul=l(),Ca=a("p"),Ql=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Gl=l(),ht=a("div"),k(Go.$$.fragment),Kl=l(),xa=a("p"),Vl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Jl=l(),Ko=a("ul"),Pa=a("li"),Xl=n("single sequence: [CLS] X [SEP]"),Yl=l(),Ra=a("li"),Zl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),ed=l(),ro=a("div"),k(Vo.$$.fragment),td=l(),qt=a("p"),od=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ba=a("code"),nd=n("prepare_for_model"),sd=n(" or "),Aa=a("code"),ad=n("encode_plus"),rd=n(" methods."),id=l(),tt=a("div"),k(Jo.$$.fragment),ld=l(),La=a("p"),dd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),cd=l(),k(Xo.$$.fragment),pd=l(),zt=a("p"),hd=n("If "),Ia=a("code"),md=n("token_ids_1"),fd=n(" is "),Oa=a("code"),ud=n("None"),gd=n(", this method only returns the first portion of the mask (0s)."),_d=l(),Xs=a("div"),k(Yo.$$.fragment),bi=l(),Mt=a("h2"),io=a("a"),Sa=a("span"),k(Zo.$$.fragment),bd=l(),Na=a("span"),kd=n("DebertaTokenizerFast"),ki=l(),Xe=a("div"),k(en.$$.fragment),Td=l(),tn=a("p"),wd=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Wa=a("em"),vd=n("tokenizers"),yd=n(" library."),Dd=l(),mt=a("div"),k(on.$$.fragment),$d=l(),Ha=a("p"),Ed=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fd=l(),nn=a("ul"),Ua=a("li"),qd=n("single sequence: [CLS] X [SEP]"),zd=l(),Qa=a("li"),Md=n("pair of sequences: [CLS] A [SEP] B [SEP]"),jd=l(),ot=a("div"),k(sn.$$.fragment),Cd=l(),Ga=a("p"),xd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Pd=l(),k(an.$$.fragment),Rd=l(),jt=a("p"),Bd=n("If "),Ka=a("code"),Ad=n("token_ids_1"),Ld=n(" is "),Va=a("code"),Id=n("None"),Od=n(", this method only returns the first portion of the mask (0s)."),Ti=l(),Ct=a("h2"),lo=a("a"),Ja=a("span"),k(rn.$$.fragment),Sd=l(),Xa=a("span"),Nd=n("DebertaModel"),wi=l(),Ye=a("div"),k(ln.$$.fragment),Wd=l(),dn=a("p"),Hd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a("a"),Ud=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gd=l(),pn=a("p"),Kd=n("This model is also a PyTorch "),hn=a("a"),Vd=n("torch.nn.Module"),Jd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Xd=l(),Ue=a("div"),k(mn.$$.fragment),Yd=l(),xt=a("p"),Zd=n("The "),Ys=a("a"),ec=n("DebertaModel"),tc=n(" forward method, overrides the "),Ya=a("code"),oc=n("__call__"),nc=n(" special method."),sc=l(),k(co.$$.fragment),ac=l(),Za=a("p"),rc=n("Example:"),ic=l(),k(fn.$$.fragment),vi=l(),Pt=a("h2"),po=a("a"),er=a("span"),k(un.$$.fragment),lc=l(),tr=a("span"),dc=n("DebertaPreTrainedModel"),yi=l(),Rt=a("div"),k(gn.$$.fragment),cc=l(),or=a("p"),pc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Di=l(),Bt=a("h2"),ho=a("a"),nr=a("span"),k(_n.$$.fragment),hc=l(),sr=a("span"),mc=n("DebertaForMaskedLM"),$i=l(),Ze=a("div"),k(bn.$$.fragment),fc=l(),At=a("p"),uc=n("DeBERTa Model with a "),ar=a("code"),gc=n("language modeling"),_c=n(` head on top.
The DeBERTa model was proposed in `),kn=a("a"),bc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tc=l(),Tn=a("p"),wc=n("This model is also a PyTorch "),wn=a("a"),vc=n("torch.nn.Module"),yc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Dc=l(),Be=a("div"),k(vn.$$.fragment),$c=l(),Lt=a("p"),Ec=n("The "),Zs=a("a"),Fc=n("DebertaForMaskedLM"),qc=n(" forward method, overrides the "),rr=a("code"),zc=n("__call__"),Mc=n(" special method."),jc=l(),k(mo.$$.fragment),Cc=l(),ir=a("p"),xc=n("Example:"),Pc=l(),k(yn.$$.fragment),Rc=l(),k(Dn.$$.fragment),Ei=l(),It=a("h2"),fo=a("a"),lr=a("span"),k($n.$$.fragment),Bc=l(),dr=a("span"),Ac=n("DebertaForSequenceClassification"),Fi=l(),Ie=a("div"),k(En.$$.fragment),Lc=l(),cr=a("p"),Ic=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Oc=l(),Fn=a("p"),Sc=n("The DeBERTa model was proposed in "),qn=a("a"),Nc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Wc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hc=l(),zn=a("p"),Uc=n("This model is also a PyTorch "),Mn=a("a"),Qc=n("torch.nn.Module"),Gc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Kc=l(),ye=a("div"),k(jn.$$.fragment),Vc=l(),Ot=a("p"),Jc=n("The "),ea=a("a"),Xc=n("DebertaForSequenceClassification"),Yc=n(" forward method, overrides the "),pr=a("code"),Zc=n("__call__"),ep=n(" special method."),tp=l(),k(uo.$$.fragment),op=l(),hr=a("p"),np=n("Example of single-label classification:"),sp=l(),k(Cn.$$.fragment),ap=l(),k(xn.$$.fragment),rp=l(),mr=a("p"),ip=n("Example of multi-label classification:"),lp=l(),k(Pn.$$.fragment),dp=l(),k(Rn.$$.fragment),qi=l(),St=a("h2"),go=a("a"),fr=a("span"),k(Bn.$$.fragment),cp=l(),ur=a("span"),pp=n("DebertaForTokenClassification"),zi=l(),Oe=a("div"),k(An.$$.fragment),hp=l(),gr=a("p"),mp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fp=l(),Ln=a("p"),up=n("The DeBERTa model was proposed in "),In=a("a"),gp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_p=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bp=l(),On=a("p"),kp=n("This model is also a PyTorch "),Sn=a("a"),Tp=n("torch.nn.Module"),wp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),vp=l(),Ae=a("div"),k(Nn.$$.fragment),yp=l(),Nt=a("p"),Dp=n("The "),ta=a("a"),$p=n("DebertaForTokenClassification"),Ep=n(" forward method, overrides the "),_r=a("code"),Fp=n("__call__"),qp=n(" special method."),zp=l(),k(_o.$$.fragment),Mp=l(),br=a("p"),jp=n("Example:"),Cp=l(),k(Wn.$$.fragment),xp=l(),k(Hn.$$.fragment),Mi=l(),Wt=a("h2"),bo=a("a"),kr=a("span"),k(Un.$$.fragment),Pp=l(),Tr=a("span"),Rp=n("DebertaForQuestionAnswering"),ji=l(),Se=a("div"),k(Qn.$$.fragment),Bp=l(),Ht=a("p"),Ap=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wr=a("code"),Lp=n("span start logits"),Ip=n(" and "),vr=a("code"),Op=n("span end logits"),Sp=n(")."),Np=l(),Gn=a("p"),Wp=n("The DeBERTa model was proposed in "),Kn=a("a"),Hp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Up=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qp=l(),Vn=a("p"),Gp=n("This model is also a PyTorch "),Jn=a("a"),Kp=n("torch.nn.Module"),Vp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jp=l(),Le=a("div"),k(Xn.$$.fragment),Xp=l(),Ut=a("p"),Yp=n("The "),oa=a("a"),Zp=n("DebertaForQuestionAnswering"),eh=n(" forward method, overrides the "),yr=a("code"),th=n("__call__"),oh=n(" special method."),nh=l(),k(ko.$$.fragment),sh=l(),Dr=a("p"),ah=n("Example:"),rh=l(),k(Yn.$$.fragment),ih=l(),k(Zn.$$.fragment),Ci=l(),Qt=a("h2"),To=a("a"),$r=a("span"),k(es.$$.fragment),lh=l(),Er=a("span"),dh=n("TFDebertaModel"),xi=l(),Ne=a("div"),k(ts.$$.fragment),ch=l(),os=a("p"),ph=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ns=a("a"),hh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fh=l(),ss=a("p"),uh=n("This model is also a "),as=a("a"),gh=n("tf.keras.Model"),_h=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh=l(),k(wo.$$.fragment),kh=l(),Qe=a("div"),k(rs.$$.fragment),Th=l(),Gt=a("p"),wh=n("The "),na=a("a"),vh=n("TFDebertaModel"),yh=n(" forward method, overrides the "),Fr=a("code"),Dh=n("__call__"),$h=n(" special method."),Eh=l(),k(vo.$$.fragment),Fh=l(),qr=a("p"),qh=n("Example:"),zh=l(),k(is.$$.fragment),Pi=l(),Kt=a("h2"),yo=a("a"),zr=a("span"),k(ls.$$.fragment),Mh=l(),Mr=a("span"),jh=n("TFDebertaPreTrainedModel"),Ri=l(),pt=a("div"),k(ds.$$.fragment),Ch=l(),jr=a("p"),xh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ph=l(),nt=a("div"),k(cs.$$.fragment),Rh=l(),Cr=a("p"),Bh=n("Calls the model on new inputs and returns the outputs as tensors."),Ah=l(),ps=a("p"),Lh=n("In this case "),xr=a("code"),Ih=n("call()"),Oh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Sh=l(),et=a("p"),Nh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Pr=a("code"),Wh=n("tf.keras.Model"),Hh=n(`.
To call a model on an input, always use the `),Rr=a("code"),Uh=n("__call__()"),Qh=n(` method,
i.e. `),Br=a("code"),Gh=n("model(inputs)"),Kh=n(", which relies on the underlying "),Ar=a("code"),Vh=n("call()"),Jh=n(" method."),Bi=l(),Vt=a("h2"),Do=a("a"),Lr=a("span"),k(hs.$$.fragment),Xh=l(),Ir=a("span"),Yh=n("TFDebertaForMaskedLM"),Ai=l(),We=a("div"),k(ms.$$.fragment),Zh=l(),Jt=a("p"),em=n("DeBERTa Model with a "),Or=a("code"),tm=n("language modeling"),om=n(` head on top.
The DeBERTa model was proposed in `),fs=a("a"),nm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),am=l(),us=a("p"),rm=n("This model is also a "),gs=a("a"),im=n("tf.keras.Model"),lm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dm=l(),k($o.$$.fragment),cm=l(),Ge=a("div"),k(_s.$$.fragment),pm=l(),Xt=a("p"),hm=n("The "),sa=a("a"),mm=n("TFDebertaForMaskedLM"),fm=n(" forward method, overrides the "),Sr=a("code"),um=n("__call__"),gm=n(" special method."),_m=l(),k(Eo.$$.fragment),bm=l(),Nr=a("p"),km=n("Example:"),Tm=l(),k(bs.$$.fragment),Li=l(),Yt=a("h2"),Fo=a("a"),Wr=a("span"),k(ks.$$.fragment),wm=l(),Hr=a("span"),vm=n("TFDebertaForSequenceClassification"),Ii=l(),Ce=a("div"),k(Ts.$$.fragment),ym=l(),Ur=a("p"),Dm=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$m=l(),ws=a("p"),Em=n("The DeBERTa model was proposed in "),vs=a("a"),Fm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zm=l(),ys=a("p"),Mm=n("This model is also a "),Ds=a("a"),jm=n("tf.keras.Model"),Cm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xm=l(),k(qo.$$.fragment),Pm=l(),Ke=a("div"),k($s.$$.fragment),Rm=l(),Zt=a("p"),Bm=n("The "),aa=a("a"),Am=n("TFDebertaForSequenceClassification"),Lm=n(" forward method, overrides the "),Qr=a("code"),Im=n("__call__"),Om=n(" special method."),Sm=l(),k(zo.$$.fragment),Nm=l(),Gr=a("p"),Wm=n("Example:"),Hm=l(),k(Es.$$.fragment),Oi=l(),eo=a("h2"),Mo=a("a"),Kr=a("span"),k(Fs.$$.fragment),Um=l(),Vr=a("span"),Qm=n("TFDebertaForTokenClassification"),Si=l(),xe=a("div"),k(qs.$$.fragment),Gm=l(),Jr=a("p"),Km=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Vm=l(),zs=a("p"),Jm=n("The DeBERTa model was proposed in "),Ms=a("a"),Xm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ym=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zm=l(),js=a("p"),ef=n("This model is also a "),Cs=a("a"),tf=n("tf.keras.Model"),of=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=l(),k(jo.$$.fragment),sf=l(),Ve=a("div"),k(xs.$$.fragment),af=l(),to=a("p"),rf=n("The "),ra=a("a"),lf=n("TFDebertaForTokenClassification"),df=n(" forward method, overrides the "),Xr=a("code"),cf=n("__call__"),pf=n(" special method."),hf=l(),k(Co.$$.fragment),mf=l(),Yr=a("p"),ff=n("Example:"),uf=l(),k(Ps.$$.fragment),Ni=l(),oo=a("h2"),xo=a("a"),Zr=a("span"),k(Rs.$$.fragment),gf=l(),ei=a("span"),_f=n("TFDebertaForQuestionAnswering"),Wi=l(),Pe=a("div"),k(Bs.$$.fragment),bf=l(),no=a("p"),kf=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=a("code"),Tf=n("span start logits"),wf=n(" and "),oi=a("code"),vf=n("span end logits"),yf=n(")."),Df=l(),As=a("p"),$f=n("The DeBERTa model was proposed in "),Ls=a("a"),Ef=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ff=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qf=l(),Is=a("p"),zf=n("This model is also a "),Os=a("a"),Mf=n("tf.keras.Model"),jf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cf=l(),k(Po.$$.fragment),xf=l(),Je=a("div"),k(Ss.$$.fragment),Pf=l(),so=a("p"),Rf=n("The "),ia=a("a"),Bf=n("TFDebertaForQuestionAnswering"),Af=n(" forward method, overrides the "),ni=a("code"),Lf=n("__call__"),If=n(" special method."),Of=l(),k(Ro.$$.fragment),Sf=l(),si=a("p"),Nf=n("Example:"),Wf=l(),k(Ns.$$.fragment),this.h()},l(o){const f=D_('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),q=d(o),u=r(o,"H1",{class:!0});var Ws=i(u);g=r(Ws,"A",{id:!0,class:!0,href:!0});var ai=i(g);$=r(ai,"SPAN",{});var ri=i($);T(b.$$.fragment,ri),ri.forEach(t),ai.forEach(t),_=d(Ws),F=r(Ws,"SPAN",{});var ii=i(F);he=s(ii,"DeBERTa"),ii.forEach(t),Ws.forEach(t),X=d(o),z=r(o,"H2",{class:!0});var Hs=i(z);Y=r(Hs,"A",{id:!0,class:!0,href:!0});var li=i(Y);L=r(li,"SPAN",{});var di=i(L);T(ee.$$.fragment,di),di.forEach(t),li.forEach(t),me=d(Hs),I=r(Hs,"SPAN",{});var ci=i(I);fe=s(ci,"Overview"),ci.forEach(t),Hs.forEach(t),le=d(o),N=r(o,"P",{});var Us=i(N);B=s(Us,"The DeBERTa model was proposed in "),te=r(Us,"A",{href:!0,rel:!0});var pi=i(te);Z=s(pi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),pi.forEach(t),M=s(Us,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Us.forEach(t),C=d(o),ne=r(o,"P",{});var hi=i(ne);W=s(hi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),hi.forEach(t),de=d(o),se=r(o,"P",{});var mi=i(se);H=s(mi,"The abstract from the paper is the following:"),mi.forEach(t),ce=d(o),ae=r(o,"P",{});var fi=i(ae);j=r(fi,"EM",{});var Qs=i(j);ue=s(Qs,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(Qs,"A",{href:!0,rel:!0});var ui=i(A);ge=s(ui,"https://github.com/microsoft/DeBERTa"),ui.forEach(t),_e=s(Qs,"."),Qs.forEach(t),fi.forEach(t),O=d(o),K=r(o,"P",{});var Bo=i(K);be=s(Bo,"This model was contributed by "),x=r(Bo,"A",{href:!0,rel:!0});var Hf=i(x);ke=s(Hf,"DeBERTa"),Hf.forEach(t),U=s(Bo,`. This model TF 2.0 implementation was
contributed by `),oe=r(Bo,"A",{href:!0,rel:!0});var Uf=i(oe);p=s(Uf,"kamalkraj"),Uf.forEach(t),E=s(Bo," . The original code can be found "),V=r(Bo,"A",{href:!0,rel:!0});var Qf=i(V);Ee=s(Qf,"here"),Qf.forEach(t),Fe=s(Bo,"."),Bo.forEach(t),R=d(o),pe=r(o,"H2",{class:!0});var Ui=i(pe);Te=r(Ui,"A",{id:!0,class:!0,href:!0});var Gf=i(Te);De=r(Gf,"SPAN",{});var Kf=i(De);T(P.$$.fragment,Kf),Kf.forEach(t),Gf.forEach(t),Q=d(Ui),$e=r(Ui,"SPAN",{});var Vf=i($e);qe=s(Vf,"DebertaConfig"),Vf.forEach(t),Ui.forEach(t),S=d(o),re=r(o,"DIV",{class:!0});var la=i(re);T(ve.$$.fragment,la),we=d(la),ie=r(la,"P",{});var Ao=i(ie);Ml=s(Ao,"This is the configuration class to store the configuration of a "),Gs=r(Ao,"A",{href:!0});var Jf=i(Gs);jl=s(Jf,"DebertaModel"),Jf.forEach(t),Cl=s(Ao," or a "),Ks=r(Ao,"A",{href:!0});var Xf=i(Ks);xl=s(Xf,"TFDebertaModel"),Xf.forEach(t),Pl=s(Ao,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r(Ao,"A",{href:!0,rel:!0});var Yf=i(Ho);Rl=s(Yf,"microsoft/deberta-base"),Yf.forEach(t),Bl=s(Ao," architecture."),Ao.forEach(t),Al=d(la),Et=r(la,"P",{});var da=i(Et);Ll=s(da,"Configuration objects inherit from "),Vs=r(da,"A",{href:!0});var Zf=i(Vs);Il=s(Zf,"PretrainedConfig"),Zf.forEach(t),Ol=s(da,` and can be used to control the model outputs. Read the
documentation from `),Js=r(da,"A",{href:!0});var eu=i(Js);Sl=s(eu,"PretrainedConfig"),eu.forEach(t),Nl=s(da," for more information."),da.forEach(t),la.forEach(t),gi=d(o),Ft=r(o,"H2",{class:!0});var Qi=i(Ft);ao=r(Qi,"A",{id:!0,class:!0,href:!0});var tu=i(ao);Ma=r(tu,"SPAN",{});var ou=i(Ma);T(Uo.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Wl=d(Qi),ja=r(Qi,"SPAN",{});var nu=i(ja);Hl=s(nu,"DebertaTokenizer"),nu.forEach(t),Qi.forEach(t),_i=d(o),je=r(o,"DIV",{class:!0});var st=i(je);T(Qo.$$.fragment,st),Ul=d(st),Ca=r(st,"P",{});var su=i(Ca);Ql=s(su,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),su.forEach(t),Gl=d(st),ht=r(st,"DIV",{class:!0});var ca=i(ht);T(Go.$$.fragment,ca),Kl=d(ca),xa=r(ca,"P",{});var au=i(xa);Vl=s(au,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),au.forEach(t),Jl=d(ca),Ko=r(ca,"UL",{});var Gi=i(Ko);Pa=r(Gi,"LI",{});var ru=i(Pa);Xl=s(ru,"single sequence: [CLS] X [SEP]"),ru.forEach(t),Yl=d(Gi),Ra=r(Gi,"LI",{});var iu=i(Ra);Zl=s(iu,"pair of sequences: [CLS] A [SEP] B [SEP]"),iu.forEach(t),Gi.forEach(t),ca.forEach(t),ed=d(st),ro=r(st,"DIV",{class:!0});var Ki=i(ro);T(Vo.$$.fragment,Ki),td=d(Ki),qt=r(Ki,"P",{});var pa=i(qt);od=s(pa,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ba=r(pa,"CODE",{});var lu=i(Ba);nd=s(lu,"prepare_for_model"),lu.forEach(t),sd=s(pa," or "),Aa=r(pa,"CODE",{});var du=i(Aa);ad=s(du,"encode_plus"),du.forEach(t),rd=s(pa," methods."),pa.forEach(t),Ki.forEach(t),id=d(st),tt=r(st,"DIV",{class:!0});var Lo=i(tt);T(Jo.$$.fragment,Lo),ld=d(Lo),La=r(Lo,"P",{});var cu=i(La);dd=s(cu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),cu.forEach(t),cd=d(Lo),T(Xo.$$.fragment,Lo),pd=d(Lo),zt=r(Lo,"P",{});var ha=i(zt);hd=s(ha,"If "),Ia=r(ha,"CODE",{});var pu=i(Ia);md=s(pu,"token_ids_1"),pu.forEach(t),fd=s(ha," is "),Oa=r(ha,"CODE",{});var hu=i(Oa);ud=s(hu,"None"),hu.forEach(t),gd=s(ha,", this method only returns the first portion of the mask (0s)."),ha.forEach(t),Lo.forEach(t),_d=d(st),Xs=r(st,"DIV",{class:!0});var mu=i(Xs);T(Yo.$$.fragment,mu),mu.forEach(t),st.forEach(t),bi=d(o),Mt=r(o,"H2",{class:!0});var Vi=i(Mt);io=r(Vi,"A",{id:!0,class:!0,href:!0});var fu=i(io);Sa=r(fu,"SPAN",{});var uu=i(Sa);T(Zo.$$.fragment,uu),uu.forEach(t),fu.forEach(t),bd=d(Vi),Na=r(Vi,"SPAN",{});var gu=i(Na);kd=s(gu,"DebertaTokenizerFast"),gu.forEach(t),Vi.forEach(t),ki=d(o),Xe=r(o,"DIV",{class:!0});var Io=i(Xe);T(en.$$.fragment,Io),Td=d(Io),tn=r(Io,"P",{});var Ji=i(tn);wd=s(Ji,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Wa=r(Ji,"EM",{});var _u=i(Wa);vd=s(_u,"tokenizers"),_u.forEach(t),yd=s(Ji," library."),Ji.forEach(t),Dd=d(Io),mt=r(Io,"DIV",{class:!0});var ma=i(mt);T(on.$$.fragment,ma),$d=d(ma),Ha=r(ma,"P",{});var bu=i(Ha);Ed=s(bu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),bu.forEach(t),Fd=d(ma),nn=r(ma,"UL",{});var Xi=i(nn);Ua=r(Xi,"LI",{});var ku=i(Ua);qd=s(ku,"single sequence: [CLS] X [SEP]"),ku.forEach(t),zd=d(Xi),Qa=r(Xi,"LI",{});var Tu=i(Qa);Md=s(Tu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Tu.forEach(t),Xi.forEach(t),ma.forEach(t),jd=d(Io),ot=r(Io,"DIV",{class:!0});var Oo=i(ot);T(sn.$$.fragment,Oo),Cd=d(Oo),Ga=r(Oo,"P",{});var wu=i(Ga);xd=s(wu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),wu.forEach(t),Pd=d(Oo),T(an.$$.fragment,Oo),Rd=d(Oo),jt=r(Oo,"P",{});var fa=i(jt);Bd=s(fa,"If "),Ka=r(fa,"CODE",{});var vu=i(Ka);Ad=s(vu,"token_ids_1"),vu.forEach(t),Ld=s(fa," is "),Va=r(fa,"CODE",{});var yu=i(Va);Id=s(yu,"None"),yu.forEach(t),Od=s(fa,", this method only returns the first portion of the mask (0s)."),fa.forEach(t),Oo.forEach(t),Io.forEach(t),Ti=d(o),Ct=r(o,"H2",{class:!0});var Yi=i(Ct);lo=r(Yi,"A",{id:!0,class:!0,href:!0});var Du=i(lo);Ja=r(Du,"SPAN",{});var $u=i(Ja);T(rn.$$.fragment,$u),$u.forEach(t),Du.forEach(t),Sd=d(Yi),Xa=r(Yi,"SPAN",{});var Eu=i(Xa);Nd=s(Eu,"DebertaModel"),Eu.forEach(t),Yi.forEach(t),wi=d(o),Ye=r(o,"DIV",{class:!0});var So=i(Ye);T(ln.$$.fragment,So),Wd=d(So),dn=r(So,"P",{});var Zi=i(dn);Hd=s(Zi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r(Zi,"A",{href:!0,rel:!0});var Fu=i(cn);Ud=s(Fu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fu.forEach(t),Qd=s(Zi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zi.forEach(t),Gd=d(So),pn=r(So,"P",{});var el=i(pn);Kd=s(el,"This model is also a PyTorch "),hn=r(el,"A",{href:!0,rel:!0});var qu=i(hn);Vd=s(qu,"torch.nn.Module"),qu.forEach(t),Jd=s(el," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),el.forEach(t),Xd=d(So),Ue=r(So,"DIV",{class:!0});var ft=i(Ue);T(mn.$$.fragment,ft),Yd=d(ft),xt=r(ft,"P",{});var ua=i(xt);Zd=s(ua,"The "),Ys=r(ua,"A",{href:!0});var zu=i(Ys);ec=s(zu,"DebertaModel"),zu.forEach(t),tc=s(ua," forward method, overrides the "),Ya=r(ua,"CODE",{});var Mu=i(Ya);oc=s(Mu,"__call__"),Mu.forEach(t),nc=s(ua," special method."),ua.forEach(t),sc=d(ft),T(co.$$.fragment,ft),ac=d(ft),Za=r(ft,"P",{});var ju=i(Za);rc=s(ju,"Example:"),ju.forEach(t),ic=d(ft),T(fn.$$.fragment,ft),ft.forEach(t),So.forEach(t),vi=d(o),Pt=r(o,"H2",{class:!0});var tl=i(Pt);po=r(tl,"A",{id:!0,class:!0,href:!0});var Cu=i(po);er=r(Cu,"SPAN",{});var xu=i(er);T(un.$$.fragment,xu),xu.forEach(t),Cu.forEach(t),lc=d(tl),tr=r(tl,"SPAN",{});var Pu=i(tr);dc=s(Pu,"DebertaPreTrainedModel"),Pu.forEach(t),tl.forEach(t),yi=d(o),Rt=r(o,"DIV",{class:!0});var ol=i(Rt);T(gn.$$.fragment,ol),cc=d(ol),or=r(ol,"P",{});var Ru=i(or);pc=s(Ru,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ru.forEach(t),ol.forEach(t),Di=d(o),Bt=r(o,"H2",{class:!0});var nl=i(Bt);ho=r(nl,"A",{id:!0,class:!0,href:!0});var Bu=i(ho);nr=r(Bu,"SPAN",{});var Au=i(nr);T(_n.$$.fragment,Au),Au.forEach(t),Bu.forEach(t),hc=d(nl),sr=r(nl,"SPAN",{});var Lu=i(sr);mc=s(Lu,"DebertaForMaskedLM"),Lu.forEach(t),nl.forEach(t),$i=d(o),Ze=r(o,"DIV",{class:!0});var No=i(Ze);T(bn.$$.fragment,No),fc=d(No),At=r(No,"P",{});var ga=i(At);uc=s(ga,"DeBERTa Model with a "),ar=r(ga,"CODE",{});var Iu=i(ar);gc=s(Iu,"language modeling"),Iu.forEach(t),_c=s(ga,` head on top.
The DeBERTa model was proposed in `),kn=r(ga,"A",{href:!0,rel:!0});var Ou=i(kn);bc=s(Ou,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ou.forEach(t),kc=s(ga,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ga.forEach(t),Tc=d(No),Tn=r(No,"P",{});var sl=i(Tn);wc=s(sl,"This model is also a PyTorch "),wn=r(sl,"A",{href:!0,rel:!0});var Su=i(wn);vc=s(Su,"torch.nn.Module"),Su.forEach(t),yc=s(sl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sl.forEach(t),Dc=d(No),Be=r(No,"DIV",{class:!0});var at=i(Be);T(vn.$$.fragment,at),$c=d(at),Lt=r(at,"P",{});var _a=i(Lt);Ec=s(_a,"The "),Zs=r(_a,"A",{href:!0});var Nu=i(Zs);Fc=s(Nu,"DebertaForMaskedLM"),Nu.forEach(t),qc=s(_a," forward method, overrides the "),rr=r(_a,"CODE",{});var Wu=i(rr);zc=s(Wu,"__call__"),Wu.forEach(t),Mc=s(_a," special method."),_a.forEach(t),jc=d(at),T(mo.$$.fragment,at),Cc=d(at),ir=r(at,"P",{});var Hu=i(ir);xc=s(Hu,"Example:"),Hu.forEach(t),Pc=d(at),T(yn.$$.fragment,at),Rc=d(at),T(Dn.$$.fragment,at),at.forEach(t),No.forEach(t),Ei=d(o),It=r(o,"H2",{class:!0});var al=i(It);fo=r(al,"A",{id:!0,class:!0,href:!0});var Uu=i(fo);lr=r(Uu,"SPAN",{});var Qu=i(lr);T($n.$$.fragment,Qu),Qu.forEach(t),Uu.forEach(t),Bc=d(al),dr=r(al,"SPAN",{});var Gu=i(dr);Ac=s(Gu,"DebertaForSequenceClassification"),Gu.forEach(t),al.forEach(t),Fi=d(o),Ie=r(o,"DIV",{class:!0});var ut=i(Ie);T(En.$$.fragment,ut),Lc=d(ut),cr=r(ut,"P",{});var Ku=i(cr);Ic=s(Ku,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ku.forEach(t),Oc=d(ut),Fn=r(ut,"P",{});var rl=i(Fn);Sc=s(rl,"The DeBERTa model was proposed in "),qn=r(rl,"A",{href:!0,rel:!0});var Vu=i(qn);Nc=s(Vu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vu.forEach(t),Wc=s(rl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rl.forEach(t),Hc=d(ut),zn=r(ut,"P",{});var il=i(zn);Uc=s(il,"This model is also a PyTorch "),Mn=r(il,"A",{href:!0,rel:!0});var Ju=i(Mn);Qc=s(Ju,"torch.nn.Module"),Ju.forEach(t),Gc=s(il," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),il.forEach(t),Kc=d(ut),ye=r(ut,"DIV",{class:!0});var ze=i(ye);T(jn.$$.fragment,ze),Vc=d(ze),Ot=r(ze,"P",{});var ba=i(Ot);Jc=s(ba,"The "),ea=r(ba,"A",{href:!0});var Xu=i(ea);Xc=s(Xu,"DebertaForSequenceClassification"),Xu.forEach(t),Yc=s(ba," forward method, overrides the "),pr=r(ba,"CODE",{});var Yu=i(pr);Zc=s(Yu,"__call__"),Yu.forEach(t),ep=s(ba," special method."),ba.forEach(t),tp=d(ze),T(uo.$$.fragment,ze),op=d(ze),hr=r(ze,"P",{});var Zu=i(hr);np=s(Zu,"Example of single-label classification:"),Zu.forEach(t),sp=d(ze),T(Cn.$$.fragment,ze),ap=d(ze),T(xn.$$.fragment,ze),rp=d(ze),mr=r(ze,"P",{});var eg=i(mr);ip=s(eg,"Example of multi-label classification:"),eg.forEach(t),lp=d(ze),T(Pn.$$.fragment,ze),dp=d(ze),T(Rn.$$.fragment,ze),ze.forEach(t),ut.forEach(t),qi=d(o),St=r(o,"H2",{class:!0});var ll=i(St);go=r(ll,"A",{id:!0,class:!0,href:!0});var tg=i(go);fr=r(tg,"SPAN",{});var og=i(fr);T(Bn.$$.fragment,og),og.forEach(t),tg.forEach(t),cp=d(ll),ur=r(ll,"SPAN",{});var ng=i(ur);pp=s(ng,"DebertaForTokenClassification"),ng.forEach(t),ll.forEach(t),zi=d(o),Oe=r(o,"DIV",{class:!0});var gt=i(Oe);T(An.$$.fragment,gt),hp=d(gt),gr=r(gt,"P",{});var sg=i(gr);mp=s(sg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sg.forEach(t),fp=d(gt),Ln=r(gt,"P",{});var dl=i(Ln);up=s(dl,"The DeBERTa model was proposed in "),In=r(dl,"A",{href:!0,rel:!0});var ag=i(In);gp=s(ag,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ag.forEach(t),_p=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),bp=d(gt),On=r(gt,"P",{});var cl=i(On);kp=s(cl,"This model is also a PyTorch "),Sn=r(cl,"A",{href:!0,rel:!0});var rg=i(Sn);Tp=s(rg,"torch.nn.Module"),rg.forEach(t),wp=s(cl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),cl.forEach(t),vp=d(gt),Ae=r(gt,"DIV",{class:!0});var rt=i(Ae);T(Nn.$$.fragment,rt),yp=d(rt),Nt=r(rt,"P",{});var ka=i(Nt);Dp=s(ka,"The "),ta=r(ka,"A",{href:!0});var ig=i(ta);$p=s(ig,"DebertaForTokenClassification"),ig.forEach(t),Ep=s(ka," forward method, overrides the "),_r=r(ka,"CODE",{});var lg=i(_r);Fp=s(lg,"__call__"),lg.forEach(t),qp=s(ka," special method."),ka.forEach(t),zp=d(rt),T(_o.$$.fragment,rt),Mp=d(rt),br=r(rt,"P",{});var dg=i(br);jp=s(dg,"Example:"),dg.forEach(t),Cp=d(rt),T(Wn.$$.fragment,rt),xp=d(rt),T(Hn.$$.fragment,rt),rt.forEach(t),gt.forEach(t),Mi=d(o),Wt=r(o,"H2",{class:!0});var pl=i(Wt);bo=r(pl,"A",{id:!0,class:!0,href:!0});var cg=i(bo);kr=r(cg,"SPAN",{});var pg=i(kr);T(Un.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Pp=d(pl),Tr=r(pl,"SPAN",{});var hg=i(Tr);Rp=s(hg,"DebertaForQuestionAnswering"),hg.forEach(t),pl.forEach(t),ji=d(o),Se=r(o,"DIV",{class:!0});var _t=i(Se);T(Qn.$$.fragment,_t),Bp=d(_t),Ht=r(_t,"P",{});var Ta=i(Ht);Ap=s(Ta,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wr=r(Ta,"CODE",{});var mg=i(wr);Lp=s(mg,"span start logits"),mg.forEach(t),Ip=s(Ta," and "),vr=r(Ta,"CODE",{});var fg=i(vr);Op=s(fg,"span end logits"),fg.forEach(t),Sp=s(Ta,")."),Ta.forEach(t),Np=d(_t),Gn=r(_t,"P",{});var hl=i(Gn);Wp=s(hl,"The DeBERTa model was proposed in "),Kn=r(hl,"A",{href:!0,rel:!0});var ug=i(Kn);Hp=s(ug,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ug.forEach(t),Up=s(hl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hl.forEach(t),Qp=d(_t),Vn=r(_t,"P",{});var ml=i(Vn);Gp=s(ml,"This model is also a PyTorch "),Jn=r(ml,"A",{href:!0,rel:!0});var gg=i(Jn);Kp=s(gg,"torch.nn.Module"),gg.forEach(t),Vp=s(ml," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ml.forEach(t),Jp=d(_t),Le=r(_t,"DIV",{class:!0});var it=i(Le);T(Xn.$$.fragment,it),Xp=d(it),Ut=r(it,"P",{});var wa=i(Ut);Yp=s(wa,"The "),oa=r(wa,"A",{href:!0});var _g=i(oa);Zp=s(_g,"DebertaForQuestionAnswering"),_g.forEach(t),eh=s(wa," forward method, overrides the "),yr=r(wa,"CODE",{});var bg=i(yr);th=s(bg,"__call__"),bg.forEach(t),oh=s(wa," special method."),wa.forEach(t),nh=d(it),T(ko.$$.fragment,it),sh=d(it),Dr=r(it,"P",{});var kg=i(Dr);ah=s(kg,"Example:"),kg.forEach(t),rh=d(it),T(Yn.$$.fragment,it),ih=d(it),T(Zn.$$.fragment,it),it.forEach(t),_t.forEach(t),Ci=d(o),Qt=r(o,"H2",{class:!0});var fl=i(Qt);To=r(fl,"A",{id:!0,class:!0,href:!0});var Tg=i(To);$r=r(Tg,"SPAN",{});var wg=i($r);T(es.$$.fragment,wg),wg.forEach(t),Tg.forEach(t),lh=d(fl),Er=r(fl,"SPAN",{});var vg=i(Er);dh=s(vg,"TFDebertaModel"),vg.forEach(t),fl.forEach(t),xi=d(o),Ne=r(o,"DIV",{class:!0});var bt=i(Ne);T(ts.$$.fragment,bt),ch=d(bt),os=r(bt,"P",{});var ul=i(os);ph=s(ul,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ns=r(ul,"A",{href:!0,rel:!0});var yg=i(ns);hh=s(yg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yg.forEach(t),mh=s(ul,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ul.forEach(t),fh=d(bt),ss=r(bt,"P",{});var gl=i(ss);uh=s(gl,"This model is also a "),as=r(gl,"A",{href:!0,rel:!0});var Dg=i(as);gh=s(Dg,"tf.keras.Model"),Dg.forEach(t),_h=s(gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gl.forEach(t),bh=d(bt),T(wo.$$.fragment,bt),kh=d(bt),Qe=r(bt,"DIV",{class:!0});var kt=i(Qe);T(rs.$$.fragment,kt),Th=d(kt),Gt=r(kt,"P",{});var va=i(Gt);wh=s(va,"The "),na=r(va,"A",{href:!0});var $g=i(na);vh=s($g,"TFDebertaModel"),$g.forEach(t),yh=s(va," forward method, overrides the "),Fr=r(va,"CODE",{});var Eg=i(Fr);Dh=s(Eg,"__call__"),Eg.forEach(t),$h=s(va," special method."),va.forEach(t),Eh=d(kt),T(vo.$$.fragment,kt),Fh=d(kt),qr=r(kt,"P",{});var Fg=i(qr);qh=s(Fg,"Example:"),Fg.forEach(t),zh=d(kt),T(is.$$.fragment,kt),kt.forEach(t),bt.forEach(t),Pi=d(o),Kt=r(o,"H2",{class:!0});var _l=i(Kt);yo=r(_l,"A",{id:!0,class:!0,href:!0});var qg=i(yo);zr=r(qg,"SPAN",{});var zg=i(zr);T(ls.$$.fragment,zg),zg.forEach(t),qg.forEach(t),Mh=d(_l),Mr=r(_l,"SPAN",{});var Mg=i(Mr);jh=s(Mg,"TFDebertaPreTrainedModel"),Mg.forEach(t),_l.forEach(t),Ri=d(o),pt=r(o,"DIV",{class:!0});var ya=i(pt);T(ds.$$.fragment,ya),Ch=d(ya),jr=r(ya,"P",{});var jg=i(jr);xh=s(jg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),jg.forEach(t),Ph=d(ya),nt=r(ya,"DIV",{class:!0});var Wo=i(nt);T(cs.$$.fragment,Wo),Rh=d(Wo),Cr=r(Wo,"P",{});var Cg=i(Cr);Bh=s(Cg,"Calls the model on new inputs and returns the outputs as tensors."),Cg.forEach(t),Ah=d(Wo),ps=r(Wo,"P",{});var bl=i(ps);Lh=s(bl,"In this case "),xr=r(bl,"CODE",{});var xg=i(xr);Ih=s(xg,"call()"),xg.forEach(t),Oh=s(bl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),bl.forEach(t),Sh=d(Wo),et=r(Wo,"P",{});var Tt=i(et);Nh=s(Tt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Pr=r(Tt,"CODE",{});var Pg=i(Pr);Wh=s(Pg,"tf.keras.Model"),Pg.forEach(t),Hh=s(Tt,`.
To call a model on an input, always use the `),Rr=r(Tt,"CODE",{});var Rg=i(Rr);Uh=s(Rg,"__call__()"),Rg.forEach(t),Qh=s(Tt,` method,
i.e. `),Br=r(Tt,"CODE",{});var Bg=i(Br);Gh=s(Bg,"model(inputs)"),Bg.forEach(t),Kh=s(Tt,", which relies on the underlying "),Ar=r(Tt,"CODE",{});var Ag=i(Ar);Vh=s(Ag,"call()"),Ag.forEach(t),Jh=s(Tt," method."),Tt.forEach(t),Wo.forEach(t),ya.forEach(t),Bi=d(o),Vt=r(o,"H2",{class:!0});var kl=i(Vt);Do=r(kl,"A",{id:!0,class:!0,href:!0});var Lg=i(Do);Lr=r(Lg,"SPAN",{});var Ig=i(Lr);T(hs.$$.fragment,Ig),Ig.forEach(t),Lg.forEach(t),Xh=d(kl),Ir=r(kl,"SPAN",{});var Og=i(Ir);Yh=s(Og,"TFDebertaForMaskedLM"),Og.forEach(t),kl.forEach(t),Ai=d(o),We=r(o,"DIV",{class:!0});var wt=i(We);T(ms.$$.fragment,wt),Zh=d(wt),Jt=r(wt,"P",{});var Da=i(Jt);em=s(Da,"DeBERTa Model with a "),Or=r(Da,"CODE",{});var Sg=i(Or);tm=s(Sg,"language modeling"),Sg.forEach(t),om=s(Da,` head on top.
The DeBERTa model was proposed in `),fs=r(Da,"A",{href:!0,rel:!0});var Ng=i(fs);nm=s(Ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ng.forEach(t),sm=s(Da,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Da.forEach(t),am=d(wt),us=r(wt,"P",{});var Tl=i(us);rm=s(Tl,"This model is also a "),gs=r(Tl,"A",{href:!0,rel:!0});var Wg=i(gs);im=s(Wg,"tf.keras.Model"),Wg.forEach(t),lm=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),dm=d(wt),T($o.$$.fragment,wt),cm=d(wt),Ge=r(wt,"DIV",{class:!0});var vt=i(Ge);T(_s.$$.fragment,vt),pm=d(vt),Xt=r(vt,"P",{});var $a=i(Xt);hm=s($a,"The "),sa=r($a,"A",{href:!0});var Hg=i(sa);mm=s(Hg,"TFDebertaForMaskedLM"),Hg.forEach(t),fm=s($a," forward method, overrides the "),Sr=r($a,"CODE",{});var Ug=i(Sr);um=s(Ug,"__call__"),Ug.forEach(t),gm=s($a," special method."),$a.forEach(t),_m=d(vt),T(Eo.$$.fragment,vt),bm=d(vt),Nr=r(vt,"P",{});var Qg=i(Nr);km=s(Qg,"Example:"),Qg.forEach(t),Tm=d(vt),T(bs.$$.fragment,vt),vt.forEach(t),wt.forEach(t),Li=d(o),Yt=r(o,"H2",{class:!0});var wl=i(Yt);Fo=r(wl,"A",{id:!0,class:!0,href:!0});var Gg=i(Fo);Wr=r(Gg,"SPAN",{});var Kg=i(Wr);T(ks.$$.fragment,Kg),Kg.forEach(t),Gg.forEach(t),wm=d(wl),Hr=r(wl,"SPAN",{});var Vg=i(Hr);vm=s(Vg,"TFDebertaForSequenceClassification"),Vg.forEach(t),wl.forEach(t),Ii=d(o),Ce=r(o,"DIV",{class:!0});var lt=i(Ce);T(Ts.$$.fragment,lt),ym=d(lt),Ur=r(lt,"P",{});var Jg=i(Ur);Dm=s(Jg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jg.forEach(t),$m=d(lt),ws=r(lt,"P",{});var vl=i(ws);Em=s(vl,"The DeBERTa model was proposed in "),vs=r(vl,"A",{href:!0,rel:!0});var Xg=i(vs);Fm=s(Xg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xg.forEach(t),qm=s(vl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vl.forEach(t),zm=d(lt),ys=r(lt,"P",{});var yl=i(ys);Mm=s(yl,"This model is also a "),Ds=r(yl,"A",{href:!0,rel:!0});var Yg=i(Ds);jm=s(Yg,"tf.keras.Model"),Yg.forEach(t),Cm=s(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),xm=d(lt),T(qo.$$.fragment,lt),Pm=d(lt),Ke=r(lt,"DIV",{class:!0});var yt=i(Ke);T($s.$$.fragment,yt),Rm=d(yt),Zt=r(yt,"P",{});var Ea=i(Zt);Bm=s(Ea,"The "),aa=r(Ea,"A",{href:!0});var Zg=i(aa);Am=s(Zg,"TFDebertaForSequenceClassification"),Zg.forEach(t),Lm=s(Ea," forward method, overrides the "),Qr=r(Ea,"CODE",{});var e_=i(Qr);Im=s(e_,"__call__"),e_.forEach(t),Om=s(Ea," special method."),Ea.forEach(t),Sm=d(yt),T(zo.$$.fragment,yt),Nm=d(yt),Gr=r(yt,"P",{});var t_=i(Gr);Wm=s(t_,"Example:"),t_.forEach(t),Hm=d(yt),T(Es.$$.fragment,yt),yt.forEach(t),lt.forEach(t),Oi=d(o),eo=r(o,"H2",{class:!0});var Dl=i(eo);Mo=r(Dl,"A",{id:!0,class:!0,href:!0});var o_=i(Mo);Kr=r(o_,"SPAN",{});var n_=i(Kr);T(Fs.$$.fragment,n_),n_.forEach(t),o_.forEach(t),Um=d(Dl),Vr=r(Dl,"SPAN",{});var s_=i(Vr);Qm=s(s_,"TFDebertaForTokenClassification"),s_.forEach(t),Dl.forEach(t),Si=d(o),xe=r(o,"DIV",{class:!0});var dt=i(xe);T(qs.$$.fragment,dt),Gm=d(dt),Jr=r(dt,"P",{});var a_=i(Jr);Km=s(a_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a_.forEach(t),Vm=d(dt),zs=r(dt,"P",{});var $l=i(zs);Jm=s($l,"The DeBERTa model was proposed in "),Ms=r($l,"A",{href:!0,rel:!0});var r_=i(Ms);Xm=s(r_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),r_.forEach(t),Ym=s($l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),$l.forEach(t),Zm=d(dt),js=r(dt,"P",{});var El=i(js);ef=s(El,"This model is also a "),Cs=r(El,"A",{href:!0,rel:!0});var i_=i(Cs);tf=s(i_,"tf.keras.Model"),i_.forEach(t),of=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),nf=d(dt),T(jo.$$.fragment,dt),sf=d(dt),Ve=r(dt,"DIV",{class:!0});var Dt=i(Ve);T(xs.$$.fragment,Dt),af=d(Dt),to=r(Dt,"P",{});var Fa=i(to);rf=s(Fa,"The "),ra=r(Fa,"A",{href:!0});var l_=i(ra);lf=s(l_,"TFDebertaForTokenClassification"),l_.forEach(t),df=s(Fa," forward method, overrides the "),Xr=r(Fa,"CODE",{});var d_=i(Xr);cf=s(d_,"__call__"),d_.forEach(t),pf=s(Fa," special method."),Fa.forEach(t),hf=d(Dt),T(Co.$$.fragment,Dt),mf=d(Dt),Yr=r(Dt,"P",{});var c_=i(Yr);ff=s(c_,"Example:"),c_.forEach(t),uf=d(Dt),T(Ps.$$.fragment,Dt),Dt.forEach(t),dt.forEach(t),Ni=d(o),oo=r(o,"H2",{class:!0});var Fl=i(oo);xo=r(Fl,"A",{id:!0,class:!0,href:!0});var p_=i(xo);Zr=r(p_,"SPAN",{});var h_=i(Zr);T(Rs.$$.fragment,h_),h_.forEach(t),p_.forEach(t),gf=d(Fl),ei=r(Fl,"SPAN",{});var m_=i(ei);_f=s(m_,"TFDebertaForQuestionAnswering"),m_.forEach(t),Fl.forEach(t),Wi=d(o),Pe=r(o,"DIV",{class:!0});var ct=i(Pe);T(Bs.$$.fragment,ct),bf=d(ct),no=r(ct,"P",{});var qa=i(no);kf=s(qa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=r(qa,"CODE",{});var f_=i(ti);Tf=s(f_,"span start logits"),f_.forEach(t),wf=s(qa," and "),oi=r(qa,"CODE",{});var u_=i(oi);vf=s(u_,"span end logits"),u_.forEach(t),yf=s(qa,")."),qa.forEach(t),Df=d(ct),As=r(ct,"P",{});var ql=i(As);$f=s(ql,"The DeBERTa model was proposed in "),Ls=r(ql,"A",{href:!0,rel:!0});var g_=i(Ls);Ef=s(g_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),g_.forEach(t),Ff=s(ql,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ql.forEach(t),qf=d(ct),Is=r(ct,"P",{});var zl=i(Is);zf=s(zl,"This model is also a "),Os=r(zl,"A",{href:!0,rel:!0});var __=i(Os);Mf=s(__,"tf.keras.Model"),__.forEach(t),jf=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),Cf=d(ct),T(Po.$$.fragment,ct),xf=d(ct),Je=r(ct,"DIV",{class:!0});var $t=i(Je);T(Ss.$$.fragment,$t),Pf=d($t),so=r($t,"P",{});var za=i(so);Rf=s(za,"The "),ia=r(za,"A",{href:!0});var b_=i(ia);Bf=s(b_,"TFDebertaForQuestionAnswering"),b_.forEach(t),Af=s(za," forward method, overrides the "),ni=r(za,"CODE",{});var k_=i(ni);Lf=s(k_,"__call__"),k_.forEach(t),If=s(za," special method."),za.forEach(t),Of=d($t),T(Ro.$$.fragment,$t),Sf=d($t),si=r($t,"P",{});var T_=i(si);Nf=s(T_,"Example:"),T_.forEach(t),Wf=d($t),T(Ns.$$.fragment,$t),$t.forEach(t),ct.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(N_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(A,"href","https://github.com/microsoft/DeBERTa"),c(A,"rel","nofollow"),c(x,"href","https://huggingface.co/DeBERTa"),c(x,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Gs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ks,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Vs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Js,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(ao,"id","transformers.DebertaTokenizer"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(ht,"class","docstring"),c(ro,"class","docstring"),c(tt,"class","docstring"),c(Xs,"class","docstring"),c(je,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(mt,"class","docstring"),c(ot,"class","docstring"),c(Xe,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(Ct,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Ys,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ue,"class","docstring"),c(Ye,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(Pt,"class","relative group"),c(Rt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(Bt,"class","relative group"),c(kn,"href","https://arxiv.org/abs/2006.03654"),c(kn,"rel","nofollow"),c(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wn,"rel","nofollow"),c(Zs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Be,"class","docstring"),c(Ze,"class","docstring"),c(fo,"id","transformers.DebertaForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(qn,"href","https://arxiv.org/abs/2006.03654"),c(qn,"rel","nofollow"),c(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mn,"rel","nofollow"),c(ea,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(ye,"class","docstring"),c(Ie,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(St,"class","relative group"),c(In,"href","https://arxiv.org/abs/2006.03654"),c(In,"rel","nofollow"),c(Sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Sn,"rel","nofollow"),c(ta,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Ae,"class","docstring"),c(Oe,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Kn,"href","https://arxiv.org/abs/2006.03654"),c(Kn,"rel","nofollow"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(Le,"class","docstring"),c(Se,"class","docstring"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(ns,"href","https://arxiv.org/abs/2006.03654"),c(ns,"rel","nofollow"),c(as,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(as,"rel","nofollow"),c(na,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Qe,"class","docstring"),c(Ne,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(pt,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(fs,"href","https://arxiv.org/abs/2006.03654"),c(fs,"rel","nofollow"),c(gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(gs,"rel","nofollow"),c(sa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ge,"class","docstring"),c(We,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(vs,"href","https://arxiv.org/abs/2006.03654"),c(vs,"rel","nofollow"),c(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ds,"rel","nofollow"),c(aa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Ke,"class","docstring"),c(Ce,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c(Ms,"href","https://arxiv.org/abs/2006.03654"),c(Ms,"rel","nofollow"),c(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cs,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Ve,"class","docstring"),c(xe,"class","docstring"),c(xo,"id","transformers.TFDebertaForQuestionAnswering"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Ls,"href","https://arxiv.org/abs/2006.03654"),c(Ls,"rel","nofollow"),c(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Os,"rel","nofollow"),c(ia,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Je,"class","docstring"),c(Pe,"class","docstring")},m(o,f){e(document.head,h),m(o,q,f),m(o,u,f),e(u,g),e(g,$),w(b,$,null),e(u,_),e(u,F),e(F,he),m(o,X,f),m(o,z,f),e(z,Y),e(Y,L),w(ee,L,null),e(z,me),e(z,I),e(I,fe),m(o,le,f),m(o,N,f),e(N,B),e(N,te),e(te,Z),e(N,M),m(o,C,f),m(o,ne,f),e(ne,W),m(o,de,f),m(o,se,f),e(se,H),m(o,ce,f),m(o,ae,f),e(ae,j),e(j,ue),e(j,A),e(A,ge),e(j,_e),m(o,O,f),m(o,K,f),e(K,be),e(K,x),e(x,ke),e(K,U),e(K,oe),e(oe,p),e(K,E),e(K,V),e(V,Ee),e(K,Fe),m(o,R,f),m(o,pe,f),e(pe,Te),e(Te,De),w(P,De,null),e(pe,Q),e(pe,$e),e($e,qe),m(o,S,f),m(o,re,f),w(ve,re,null),e(re,we),e(re,ie),e(ie,Ml),e(ie,Gs),e(Gs,jl),e(ie,Cl),e(ie,Ks),e(Ks,xl),e(ie,Pl),e(ie,Ho),e(Ho,Rl),e(ie,Bl),e(re,Al),e(re,Et),e(Et,Ll),e(Et,Vs),e(Vs,Il),e(Et,Ol),e(Et,Js),e(Js,Sl),e(Et,Nl),m(o,gi,f),m(o,Ft,f),e(Ft,ao),e(ao,Ma),w(Uo,Ma,null),e(Ft,Wl),e(Ft,ja),e(ja,Hl),m(o,_i,f),m(o,je,f),w(Qo,je,null),e(je,Ul),e(je,Ca),e(Ca,Ql),e(je,Gl),e(je,ht),w(Go,ht,null),e(ht,Kl),e(ht,xa),e(xa,Vl),e(ht,Jl),e(ht,Ko),e(Ko,Pa),e(Pa,Xl),e(Ko,Yl),e(Ko,Ra),e(Ra,Zl),e(je,ed),e(je,ro),w(Vo,ro,null),e(ro,td),e(ro,qt),e(qt,od),e(qt,Ba),e(Ba,nd),e(qt,sd),e(qt,Aa),e(Aa,ad),e(qt,rd),e(je,id),e(je,tt),w(Jo,tt,null),e(tt,ld),e(tt,La),e(La,dd),e(tt,cd),w(Xo,tt,null),e(tt,pd),e(tt,zt),e(zt,hd),e(zt,Ia),e(Ia,md),e(zt,fd),e(zt,Oa),e(Oa,ud),e(zt,gd),e(je,_d),e(je,Xs),w(Yo,Xs,null),m(o,bi,f),m(o,Mt,f),e(Mt,io),e(io,Sa),w(Zo,Sa,null),e(Mt,bd),e(Mt,Na),e(Na,kd),m(o,ki,f),m(o,Xe,f),w(en,Xe,null),e(Xe,Td),e(Xe,tn),e(tn,wd),e(tn,Wa),e(Wa,vd),e(tn,yd),e(Xe,Dd),e(Xe,mt),w(on,mt,null),e(mt,$d),e(mt,Ha),e(Ha,Ed),e(mt,Fd),e(mt,nn),e(nn,Ua),e(Ua,qd),e(nn,zd),e(nn,Qa),e(Qa,Md),e(Xe,jd),e(Xe,ot),w(sn,ot,null),e(ot,Cd),e(ot,Ga),e(Ga,xd),e(ot,Pd),w(an,ot,null),e(ot,Rd),e(ot,jt),e(jt,Bd),e(jt,Ka),e(Ka,Ad),e(jt,Ld),e(jt,Va),e(Va,Id),e(jt,Od),m(o,Ti,f),m(o,Ct,f),e(Ct,lo),e(lo,Ja),w(rn,Ja,null),e(Ct,Sd),e(Ct,Xa),e(Xa,Nd),m(o,wi,f),m(o,Ye,f),w(ln,Ye,null),e(Ye,Wd),e(Ye,dn),e(dn,Hd),e(dn,cn),e(cn,Ud),e(dn,Qd),e(Ye,Gd),e(Ye,pn),e(pn,Kd),e(pn,hn),e(hn,Vd),e(pn,Jd),e(Ye,Xd),e(Ye,Ue),w(mn,Ue,null),e(Ue,Yd),e(Ue,xt),e(xt,Zd),e(xt,Ys),e(Ys,ec),e(xt,tc),e(xt,Ya),e(Ya,oc),e(xt,nc),e(Ue,sc),w(co,Ue,null),e(Ue,ac),e(Ue,Za),e(Za,rc),e(Ue,ic),w(fn,Ue,null),m(o,vi,f),m(o,Pt,f),e(Pt,po),e(po,er),w(un,er,null),e(Pt,lc),e(Pt,tr),e(tr,dc),m(o,yi,f),m(o,Rt,f),w(gn,Rt,null),e(Rt,cc),e(Rt,or),e(or,pc),m(o,Di,f),m(o,Bt,f),e(Bt,ho),e(ho,nr),w(_n,nr,null),e(Bt,hc),e(Bt,sr),e(sr,mc),m(o,$i,f),m(o,Ze,f),w(bn,Ze,null),e(Ze,fc),e(Ze,At),e(At,uc),e(At,ar),e(ar,gc),e(At,_c),e(At,kn),e(kn,bc),e(At,kc),e(Ze,Tc),e(Ze,Tn),e(Tn,wc),e(Tn,wn),e(wn,vc),e(Tn,yc),e(Ze,Dc),e(Ze,Be),w(vn,Be,null),e(Be,$c),e(Be,Lt),e(Lt,Ec),e(Lt,Zs),e(Zs,Fc),e(Lt,qc),e(Lt,rr),e(rr,zc),e(Lt,Mc),e(Be,jc),w(mo,Be,null),e(Be,Cc),e(Be,ir),e(ir,xc),e(Be,Pc),w(yn,Be,null),e(Be,Rc),w(Dn,Be,null),m(o,Ei,f),m(o,It,f),e(It,fo),e(fo,lr),w($n,lr,null),e(It,Bc),e(It,dr),e(dr,Ac),m(o,Fi,f),m(o,Ie,f),w(En,Ie,null),e(Ie,Lc),e(Ie,cr),e(cr,Ic),e(Ie,Oc),e(Ie,Fn),e(Fn,Sc),e(Fn,qn),e(qn,Nc),e(Fn,Wc),e(Ie,Hc),e(Ie,zn),e(zn,Uc),e(zn,Mn),e(Mn,Qc),e(zn,Gc),e(Ie,Kc),e(Ie,ye),w(jn,ye,null),e(ye,Vc),e(ye,Ot),e(Ot,Jc),e(Ot,ea),e(ea,Xc),e(Ot,Yc),e(Ot,pr),e(pr,Zc),e(Ot,ep),e(ye,tp),w(uo,ye,null),e(ye,op),e(ye,hr),e(hr,np),e(ye,sp),w(Cn,ye,null),e(ye,ap),w(xn,ye,null),e(ye,rp),e(ye,mr),e(mr,ip),e(ye,lp),w(Pn,ye,null),e(ye,dp),w(Rn,ye,null),m(o,qi,f),m(o,St,f),e(St,go),e(go,fr),w(Bn,fr,null),e(St,cp),e(St,ur),e(ur,pp),m(o,zi,f),m(o,Oe,f),w(An,Oe,null),e(Oe,hp),e(Oe,gr),e(gr,mp),e(Oe,fp),e(Oe,Ln),e(Ln,up),e(Ln,In),e(In,gp),e(Ln,_p),e(Oe,bp),e(Oe,On),e(On,kp),e(On,Sn),e(Sn,Tp),e(On,wp),e(Oe,vp),e(Oe,Ae),w(Nn,Ae,null),e(Ae,yp),e(Ae,Nt),e(Nt,Dp),e(Nt,ta),e(ta,$p),e(Nt,Ep),e(Nt,_r),e(_r,Fp),e(Nt,qp),e(Ae,zp),w(_o,Ae,null),e(Ae,Mp),e(Ae,br),e(br,jp),e(Ae,Cp),w(Wn,Ae,null),e(Ae,xp),w(Hn,Ae,null),m(o,Mi,f),m(o,Wt,f),e(Wt,bo),e(bo,kr),w(Un,kr,null),e(Wt,Pp),e(Wt,Tr),e(Tr,Rp),m(o,ji,f),m(o,Se,f),w(Qn,Se,null),e(Se,Bp),e(Se,Ht),e(Ht,Ap),e(Ht,wr),e(wr,Lp),e(Ht,Ip),e(Ht,vr),e(vr,Op),e(Ht,Sp),e(Se,Np),e(Se,Gn),e(Gn,Wp),e(Gn,Kn),e(Kn,Hp),e(Gn,Up),e(Se,Qp),e(Se,Vn),e(Vn,Gp),e(Vn,Jn),e(Jn,Kp),e(Vn,Vp),e(Se,Jp),e(Se,Le),w(Xn,Le,null),e(Le,Xp),e(Le,Ut),e(Ut,Yp),e(Ut,oa),e(oa,Zp),e(Ut,eh),e(Ut,yr),e(yr,th),e(Ut,oh),e(Le,nh),w(ko,Le,null),e(Le,sh),e(Le,Dr),e(Dr,ah),e(Le,rh),w(Yn,Le,null),e(Le,ih),w(Zn,Le,null),m(o,Ci,f),m(o,Qt,f),e(Qt,To),e(To,$r),w(es,$r,null),e(Qt,lh),e(Qt,Er),e(Er,dh),m(o,xi,f),m(o,Ne,f),w(ts,Ne,null),e(Ne,ch),e(Ne,os),e(os,ph),e(os,ns),e(ns,hh),e(os,mh),e(Ne,fh),e(Ne,ss),e(ss,uh),e(ss,as),e(as,gh),e(ss,_h),e(Ne,bh),w(wo,Ne,null),e(Ne,kh),e(Ne,Qe),w(rs,Qe,null),e(Qe,Th),e(Qe,Gt),e(Gt,wh),e(Gt,na),e(na,vh),e(Gt,yh),e(Gt,Fr),e(Fr,Dh),e(Gt,$h),e(Qe,Eh),w(vo,Qe,null),e(Qe,Fh),e(Qe,qr),e(qr,qh),e(Qe,zh),w(is,Qe,null),m(o,Pi,f),m(o,Kt,f),e(Kt,yo),e(yo,zr),w(ls,zr,null),e(Kt,Mh),e(Kt,Mr),e(Mr,jh),m(o,Ri,f),m(o,pt,f),w(ds,pt,null),e(pt,Ch),e(pt,jr),e(jr,xh),e(pt,Ph),e(pt,nt),w(cs,nt,null),e(nt,Rh),e(nt,Cr),e(Cr,Bh),e(nt,Ah),e(nt,ps),e(ps,Lh),e(ps,xr),e(xr,Ih),e(ps,Oh),e(nt,Sh),e(nt,et),e(et,Nh),e(et,Pr),e(Pr,Wh),e(et,Hh),e(et,Rr),e(Rr,Uh),e(et,Qh),e(et,Br),e(Br,Gh),e(et,Kh),e(et,Ar),e(Ar,Vh),e(et,Jh),m(o,Bi,f),m(o,Vt,f),e(Vt,Do),e(Do,Lr),w(hs,Lr,null),e(Vt,Xh),e(Vt,Ir),e(Ir,Yh),m(o,Ai,f),m(o,We,f),w(ms,We,null),e(We,Zh),e(We,Jt),e(Jt,em),e(Jt,Or),e(Or,tm),e(Jt,om),e(Jt,fs),e(fs,nm),e(Jt,sm),e(We,am),e(We,us),e(us,rm),e(us,gs),e(gs,im),e(us,lm),e(We,dm),w($o,We,null),e(We,cm),e(We,Ge),w(_s,Ge,null),e(Ge,pm),e(Ge,Xt),e(Xt,hm),e(Xt,sa),e(sa,mm),e(Xt,fm),e(Xt,Sr),e(Sr,um),e(Xt,gm),e(Ge,_m),w(Eo,Ge,null),e(Ge,bm),e(Ge,Nr),e(Nr,km),e(Ge,Tm),w(bs,Ge,null),m(o,Li,f),m(o,Yt,f),e(Yt,Fo),e(Fo,Wr),w(ks,Wr,null),e(Yt,wm),e(Yt,Hr),e(Hr,vm),m(o,Ii,f),m(o,Ce,f),w(Ts,Ce,null),e(Ce,ym),e(Ce,Ur),e(Ur,Dm),e(Ce,$m),e(Ce,ws),e(ws,Em),e(ws,vs),e(vs,Fm),e(ws,qm),e(Ce,zm),e(Ce,ys),e(ys,Mm),e(ys,Ds),e(Ds,jm),e(ys,Cm),e(Ce,xm),w(qo,Ce,null),e(Ce,Pm),e(Ce,Ke),w($s,Ke,null),e(Ke,Rm),e(Ke,Zt),e(Zt,Bm),e(Zt,aa),e(aa,Am),e(Zt,Lm),e(Zt,Qr),e(Qr,Im),e(Zt,Om),e(Ke,Sm),w(zo,Ke,null),e(Ke,Nm),e(Ke,Gr),e(Gr,Wm),e(Ke,Hm),w(Es,Ke,null),m(o,Oi,f),m(o,eo,f),e(eo,Mo),e(Mo,Kr),w(Fs,Kr,null),e(eo,Um),e(eo,Vr),e(Vr,Qm),m(o,Si,f),m(o,xe,f),w(qs,xe,null),e(xe,Gm),e(xe,Jr),e(Jr,Km),e(xe,Vm),e(xe,zs),e(zs,Jm),e(zs,Ms),e(Ms,Xm),e(zs,Ym),e(xe,Zm),e(xe,js),e(js,ef),e(js,Cs),e(Cs,tf),e(js,of),e(xe,nf),w(jo,xe,null),e(xe,sf),e(xe,Ve),w(xs,Ve,null),e(Ve,af),e(Ve,to),e(to,rf),e(to,ra),e(ra,lf),e(to,df),e(to,Xr),e(Xr,cf),e(to,pf),e(Ve,hf),w(Co,Ve,null),e(Ve,mf),e(Ve,Yr),e(Yr,ff),e(Ve,uf),w(Ps,Ve,null),m(o,Ni,f),m(o,oo,f),e(oo,xo),e(xo,Zr),w(Rs,Zr,null),e(oo,gf),e(oo,ei),e(ei,_f),m(o,Wi,f),m(o,Pe,f),w(Bs,Pe,null),e(Pe,bf),e(Pe,no),e(no,kf),e(no,ti),e(ti,Tf),e(no,wf),e(no,oi),e(oi,vf),e(no,yf),e(Pe,Df),e(Pe,As),e(As,$f),e(As,Ls),e(Ls,Ef),e(As,Ff),e(Pe,qf),e(Pe,Is),e(Is,zf),e(Is,Os),e(Os,Mf),e(Is,jf),e(Pe,Cf),w(Po,Pe,null),e(Pe,xf),e(Pe,Je),w(Ss,Je,null),e(Je,Pf),e(Je,so),e(so,Rf),e(so,ia),e(ia,Bf),e(so,Af),e(so,ni),e(ni,Lf),e(so,If),e(Je,Of),w(Ro,Je,null),e(Je,Sf),e(Je,si),e(si,Nf),e(Je,Wf),w(Ns,Je,null),Hi=!0},p(o,[f]){const Ws={};f&2&&(Ws.$$scope={dirty:f,ctx:o}),co.$set(Ws);const ai={};f&2&&(ai.$$scope={dirty:f,ctx:o}),mo.$set(ai);const ri={};f&2&&(ri.$$scope={dirty:f,ctx:o}),uo.$set(ri);const ii={};f&2&&(ii.$$scope={dirty:f,ctx:o}),_o.$set(ii);const Hs={};f&2&&(Hs.$$scope={dirty:f,ctx:o}),ko.$set(Hs);const li={};f&2&&(li.$$scope={dirty:f,ctx:o}),wo.$set(li);const di={};f&2&&(di.$$scope={dirty:f,ctx:o}),vo.$set(di);const ci={};f&2&&(ci.$$scope={dirty:f,ctx:o}),$o.$set(ci);const Us={};f&2&&(Us.$$scope={dirty:f,ctx:o}),Eo.$set(Us);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:o}),qo.$set(pi);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:o}),zo.$set(hi);const mi={};f&2&&(mi.$$scope={dirty:f,ctx:o}),jo.$set(mi);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:o}),Co.$set(fi);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:o}),Po.$set(Qs);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:o}),Ro.$set(ui)},i(o){Hi||(v(b.$$.fragment,o),v(ee.$$.fragment,o),v(P.$$.fragment,o),v(ve.$$.fragment,o),v(Uo.$$.fragment,o),v(Qo.$$.fragment,o),v(Go.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Xo.$$.fragment,o),v(Yo.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(on.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(ln.$$.fragment,o),v(mn.$$.fragment,o),v(co.$$.fragment,o),v(fn.$$.fragment,o),v(un.$$.fragment,o),v(gn.$$.fragment,o),v(_n.$$.fragment,o),v(bn.$$.fragment,o),v(vn.$$.fragment,o),v(mo.$$.fragment,o),v(yn.$$.fragment,o),v(Dn.$$.fragment,o),v($n.$$.fragment,o),v(En.$$.fragment,o),v(jn.$$.fragment,o),v(uo.$$.fragment,o),v(Cn.$$.fragment,o),v(xn.$$.fragment,o),v(Pn.$$.fragment,o),v(Rn.$$.fragment,o),v(Bn.$$.fragment,o),v(An.$$.fragment,o),v(Nn.$$.fragment,o),v(_o.$$.fragment,o),v(Wn.$$.fragment,o),v(Hn.$$.fragment,o),v(Un.$$.fragment,o),v(Qn.$$.fragment,o),v(Xn.$$.fragment,o),v(ko.$$.fragment,o),v(Yn.$$.fragment,o),v(Zn.$$.fragment,o),v(es.$$.fragment,o),v(ts.$$.fragment,o),v(wo.$$.fragment,o),v(rs.$$.fragment,o),v(vo.$$.fragment,o),v(is.$$.fragment,o),v(ls.$$.fragment,o),v(ds.$$.fragment,o),v(cs.$$.fragment,o),v(hs.$$.fragment,o),v(ms.$$.fragment,o),v($o.$$.fragment,o),v(_s.$$.fragment,o),v(Eo.$$.fragment,o),v(bs.$$.fragment,o),v(ks.$$.fragment,o),v(Ts.$$.fragment,o),v(qo.$$.fragment,o),v($s.$$.fragment,o),v(zo.$$.fragment,o),v(Es.$$.fragment,o),v(Fs.$$.fragment,o),v(qs.$$.fragment,o),v(jo.$$.fragment,o),v(xs.$$.fragment,o),v(Co.$$.fragment,o),v(Ps.$$.fragment,o),v(Rs.$$.fragment,o),v(Bs.$$.fragment,o),v(Po.$$.fragment,o),v(Ss.$$.fragment,o),v(Ro.$$.fragment,o),v(Ns.$$.fragment,o),Hi=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(P.$$.fragment,o),y(ve.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(mn.$$.fragment,o),y(co.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y(mo.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(jn.$$.fragment,o),y(uo.$$.fragment,o),y(Cn.$$.fragment,o),y(xn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(Bn.$$.fragment,o),y(An.$$.fragment,o),y(Nn.$$.fragment,o),y(_o.$$.fragment,o),y(Wn.$$.fragment,o),y(Hn.$$.fragment,o),y(Un.$$.fragment,o),y(Qn.$$.fragment,o),y(Xn.$$.fragment,o),y(ko.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(wo.$$.fragment,o),y(rs.$$.fragment,o),y(vo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(hs.$$.fragment,o),y(ms.$$.fragment,o),y($o.$$.fragment,o),y(_s.$$.fragment,o),y(Eo.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(qo.$$.fragment,o),y($s.$$.fragment,o),y(zo.$$.fragment,o),y(Es.$$.fragment,o),y(Fs.$$.fragment,o),y(qs.$$.fragment,o),y(jo.$$.fragment,o),y(xs.$$.fragment,o),y(Co.$$.fragment,o),y(Ps.$$.fragment,o),y(Rs.$$.fragment,o),y(Bs.$$.fragment,o),y(Po.$$.fragment,o),y(Ss.$$.fragment,o),y(Ro.$$.fragment,o),y(Ns.$$.fragment,o),Hi=!1},d(o){t(h),o&&t(q),o&&t(u),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(N),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(O),o&&t(K),o&&t(R),o&&t(pe),D(P),o&&t(S),o&&t(re),D(ve),o&&t(gi),o&&t(Ft),D(Uo),o&&t(_i),o&&t(je),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),D(Yo),o&&t(bi),o&&t(Mt),D(Zo),o&&t(ki),o&&t(Xe),D(en),D(on),D(sn),D(an),o&&t(Ti),o&&t(Ct),D(rn),o&&t(wi),o&&t(Ye),D(ln),D(mn),D(co),D(fn),o&&t(vi),o&&t(Pt),D(un),o&&t(yi),o&&t(Rt),D(gn),o&&t(Di),o&&t(Bt),D(_n),o&&t($i),o&&t(Ze),D(bn),D(vn),D(mo),D(yn),D(Dn),o&&t(Ei),o&&t(It),D($n),o&&t(Fi),o&&t(Ie),D(En),D(jn),D(uo),D(Cn),D(xn),D(Pn),D(Rn),o&&t(qi),o&&t(St),D(Bn),o&&t(zi),o&&t(Oe),D(An),D(Nn),D(_o),D(Wn),D(Hn),o&&t(Mi),o&&t(Wt),D(Un),o&&t(ji),o&&t(Se),D(Qn),D(Xn),D(ko),D(Yn),D(Zn),o&&t(Ci),o&&t(Qt),D(es),o&&t(xi),o&&t(Ne),D(ts),D(wo),D(rs),D(vo),D(is),o&&t(Pi),o&&t(Kt),D(ls),o&&t(Ri),o&&t(pt),D(ds),D(cs),o&&t(Bi),o&&t(Vt),D(hs),o&&t(Ai),o&&t(We),D(ms),D($o),D(_s),D(Eo),D(bs),o&&t(Li),o&&t(Yt),D(ks),o&&t(Ii),o&&t(Ce),D(Ts),D(qo),D($s),D(zo),D(Es),o&&t(Oi),o&&t(eo),D(Fs),o&&t(Si),o&&t(xe),D(qs),D(jo),D(xs),D(Co),D(Ps),o&&t(Ni),o&&t(oo),D(Rs),o&&t(Wi),o&&t(Pe),D(Bs),D(Po),D(Ss),D(Ro),D(Ns)}}}const N_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function W_(G){return $_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class V_ extends w_{constructor(h){super();v_(this,h,W_,S_,y_,{})}}export{V_ as default,N_ as metadata};
