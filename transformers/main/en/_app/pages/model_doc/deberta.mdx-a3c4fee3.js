import{S as p_,i as h_,s as f_,e as a,k as l,w as k,t as n,M as m_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as f,y as v,q as w,o as y,B as D,v as u_}from"../../chunks/vendor-6b77c823.js";import{T as Ie}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as et}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Pe}from"../../chunks/IconCopyLink-7a11ce68.js";function g_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function __(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function b_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function k_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function T_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function v_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,x,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,P,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),x=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var B=i(z);Y=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(B,"."),B.forEach(t),N=d(p),x=r(p,"P",{});var ye=i(x);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var R=i(M);j=r(R,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(R),C=r(R,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),S.forEach(t),be=d(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,x,E),e(x,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(x),p&&t(Z),p&&t(M)}}}function w_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function y_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,x,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,P,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),x=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var B=i(z);Y=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(B,"."),B.forEach(t),N=d(p),x=r(p,"P",{});var ye=i(x);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var R=i(M);j=r(R,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(R),C=r(R,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),S.forEach(t),be=d(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,x,E),e(x,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(x),p&&t(Z),p&&t(M)}}}function D_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function $_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,x,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,P,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),x=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var B=i(z);Y=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(B,"."),B.forEach(t),N=d(p),x=r(p,"P",{});var ye=i(x);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var R=i(M);j=r(R,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(R),C=r(R,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),S.forEach(t),be=d(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,x,E),e(x,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(x),p&&t(Z),p&&t(M)}}}function E_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function F_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,x,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,P,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),x=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var B=i(z);Y=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(B,"."),B.forEach(t),N=d(p),x=r(p,"P",{});var ye=i(x);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var R=i(M);j=r(R,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(R),C=r(R,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),S.forEach(t),be=d(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,x,E),e(x,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(x),p&&t(Z),p&&t(M)}}}function q_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function z_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,x,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,P,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),x=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var B=i(z);Y=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(B,"."),B.forEach(t),N=d(p),x=r(p,"P",{});var ye=i(x);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var R=i(M);j=r(R,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(R),C=r(R,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),S.forEach(t),be=d(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,x,E),e(x,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(x),p&&t(Z),p&&t(M)}}}function M_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function C_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,x,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,P,ke,U,oe,p,E,V,$e,Ee,B,pe,Te,ye,R,Q,De,Fe,S,re,we,ve,ie,$l,Ns,El,Fl,Ws,ql,zl,Ho,Ml,Cl,jl,Et,Pl,Hs,Rl,Bl,Us,xl,Ll,pi,Ft,ao,$a,Uo,Al,Ea,Il,hi,ze,Qo,Ol,Fa,Sl,Nl,dt,Go,Wl,qa,Hl,Ul,Ko,za,Ql,Gl,Ma,Kl,Vl,ro,Vo,Jl,qt,Xl,Ca,Yl,Zl,ja,ed,td,od,tt,Jo,nd,Pa,sd,ad,Xo,rd,zt,id,Ra,ld,dd,Ba,cd,pd,hd,Qs,Yo,fi,Mt,io,xa,Zo,fd,La,md,mi,Je,en,ud,tn,gd,Aa,_d,bd,kd,ct,on,Td,Ia,vd,wd,nn,Oa,yd,Dd,Sa,$d,Ed,ot,sn,Fd,Na,qd,zd,an,Md,Ct,Cd,Wa,jd,Pd,Ha,Rd,Bd,ui,jt,lo,Ua,rn,xd,Qa,Ld,gi,Xe,ln,Ad,dn,Id,cn,Od,Sd,Nd,pn,Wd,hn,Hd,Ud,Qd,Oe,fn,Gd,Pt,Kd,Gs,Vd,Jd,Ga,Xd,Yd,Zd,co,ec,Ka,tc,oc,mn,_i,Rt,po,Va,un,nc,Ja,sc,bi,Bt,gn,ac,Xa,rc,ki,xt,ho,Ya,_n,ic,Za,lc,Ti,Ye,bn,dc,Lt,cc,er,pc,hc,kn,fc,mc,uc,Tn,gc,vn,_c,bc,kc,Se,wn,Tc,At,vc,Ks,wc,yc,tr,Dc,$c,Ec,fo,Fc,or,qc,zc,yn,vi,It,mo,nr,Dn,Mc,sr,Cc,wi,Re,$n,jc,ar,Pc,Rc,En,Bc,Fn,xc,Lc,Ac,qn,Ic,zn,Oc,Sc,Nc,qe,Mn,Wc,Ot,Hc,Vs,Uc,Qc,rr,Gc,Kc,Vc,uo,Jc,ir,Xc,Yc,Cn,Zc,lr,ep,tp,jn,yi,St,go,dr,Pn,op,cr,np,Di,Be,Rn,sp,pr,ap,rp,Bn,ip,xn,lp,dp,cp,Ln,pp,An,hp,fp,mp,Ne,In,up,Nt,gp,Js,_p,bp,hr,kp,Tp,vp,_o,wp,fr,yp,Dp,On,$i,Wt,bo,mr,Sn,$p,ur,Ep,Ei,xe,Nn,Fp,Ht,qp,gr,zp,Mp,_r,Cp,jp,Pp,Wn,Rp,Hn,Bp,xp,Lp,Un,Ap,Qn,Ip,Op,Sp,We,Gn,Np,Ut,Wp,Xs,Hp,Up,br,Qp,Gp,Kp,ko,Vp,kr,Jp,Xp,Kn,Fi,Qt,To,Tr,Vn,Yp,vr,Zp,qi,Le,Jn,eh,Xn,th,Yn,oh,nh,sh,Zn,ah,es,rh,ih,lh,vo,dh,He,ts,ch,Gt,ph,Ys,hh,fh,wr,mh,uh,gh,wo,_h,yr,bh,kh,os,zi,Kt,yo,Dr,ns,Th,$r,vh,Mi,lt,ss,wh,Er,yh,Dh,nt,as,$h,Fr,Eh,Fh,rs,qh,qr,zh,Mh,Ch,Ze,jh,zr,Ph,Rh,Mr,Bh,xh,Cr,Lh,Ah,jr,Ih,Oh,Ci,Vt,Do,Pr,is,Sh,Rr,Nh,ji,Ae,ls,Wh,Jt,Hh,Br,Uh,Qh,ds,Gh,Kh,Vh,cs,Jh,ps,Xh,Yh,Zh,$o,ef,Ue,hs,tf,Xt,of,Zs,nf,sf,xr,af,rf,lf,Eo,df,Lr,cf,pf,fs,Pi,Yt,Fo,Ar,ms,hf,Ir,ff,Ri,Me,us,mf,Or,uf,gf,gs,_f,_s,bf,kf,Tf,bs,vf,ks,wf,yf,Df,qo,$f,Qe,Ts,Ef,Zt,Ff,ea,qf,zf,Sr,Mf,Cf,jf,zo,Pf,Nr,Rf,Bf,vs,Bi,eo,Mo,Wr,ws,xf,Hr,Lf,xi,Ce,ys,Af,Ur,If,Of,Ds,Sf,$s,Nf,Wf,Hf,Es,Uf,Fs,Qf,Gf,Kf,Co,Vf,Ge,qs,Jf,to,Xf,ta,Yf,Zf,Qr,em,tm,om,jo,nm,Gr,sm,am,zs,Li,oo,Po,Kr,Ms,rm,Vr,im,Ai,je,Cs,lm,no,dm,Jr,cm,pm,Xr,hm,fm,mm,js,um,Ps,gm,_m,bm,Rs,km,Bs,Tm,vm,wm,Ro,ym,Ke,xs,Dm,so,$m,oa,Em,Fm,Yr,qm,zm,Mm,Bo,Cm,Zr,jm,Pm,Ls,Ii;return b=new Pe({}),ee=new Pe({}),R=new Pe({}),we=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Pe({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),Xo=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new J({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zo=new Pe({}),en=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),an=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),rn=new Pe({}),ln=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L883",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L907",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),co=new Ie({props:{$$slots:{default:[g_]},$$scope:{ctx:G}}}),mn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Pe({}),gn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L788"}}),_n=new Pe({}),bn=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L995",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1014",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),fo=new Ie({props:{$$slots:{default:[__]},$$scope:{ctx:G}}}),yn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dn=new Pe({}),$n=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1130",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1155",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),uo=new Ie({props:{$$slots:{default:[b_]},$$scope:{ctx:G}}}),Cn=new et({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

torch.manual_seed(0)
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),jn=new et({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

torch.manual_seed(0)
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),Pn=new Pe({}),Rn=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1249",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),In=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1263",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),_o=new Ie({props:{$$slots:{default:[k_]},$$scope:{ctx:G}}}),On=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sn=new Pe({}),Nn=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1325",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1338",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),ko=new Ie({props:{$$slots:{default:[T_]},$$scope:{ctx:G}}}),Kn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

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
`}}),Vn=new Pe({}),Jn=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1075",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new Ie({props:{$$slots:{default:[v_]},$$scope:{ctx:G}}}),ts=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1081",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),wo=new Ie({props:{$$slots:{default:[w_]},$$scope:{ctx:G}}}),os=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ns=new Pe({}),ss=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L980"}}),as=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),is=new Pe({}),ls=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1124",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new Ie({props:{$$slots:{default:[y_]},$$scope:{ctx:G}}}),hs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1140",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Eo=new Ie({props:{$$slots:{default:[D_]},$$scope:{ctx:G}}}),fs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ms=new Pe({}),us=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1208",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new Ie({props:{$$slots:{default:[$_]},$$scope:{ctx:G}}}),Ts=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1226",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),zo=new Ie({props:{$$slots:{default:[E_]},$$scope:{ctx:G}}}),vs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ws=new Pe({}),ys=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1297",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ie({props:{$$slots:{default:[F_]},$$scope:{ctx:G}}}),qs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1309",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),jo=new Ie({props:{$$slots:{default:[q_]},$$scope:{ctx:G}}}),zs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ms=new Pe({}),Cs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1376",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new Ie({props:{$$slots:{default:[z_]},$$scope:{ctx:G}}}),xs=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1387",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Bo=new Ie({props:{$$slots:{default:[M_]},$$scope:{ctx:G}}}),Ls=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),q=l(),u=a("h1"),g=a("a"),$=a("span"),k(b.$$.fragment),_=l(),F=a("span"),he=n("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),A=a("span"),k(ee.$$.fragment),fe=l(),I=a("span"),me=n("Overview"),le=l(),N=a("p"),x=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=l(),se=a("p"),H=n("The abstract from the paper is the following:"),ce=l(),ae=a("p"),C=a("em"),ue=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),O=l(),K=a("p"),be=n("This model was contributed by "),P=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),p=n("kamalkraj"),E=n(" . The original code can be found "),V=a("a"),$e=n("here"),Ee=n("."),B=l(),pe=a("h2"),Te=a("a"),ye=a("span"),k(R.$$.fragment),Q=l(),De=a("span"),Fe=n("DebertaConfig"),S=l(),re=a("div"),k(we.$$.fragment),ve=l(),ie=a("p"),$l=n("This is the configuration class to store the configuration of a "),Ns=a("a"),El=n("DebertaModel"),Fl=n(" or a "),Ws=a("a"),ql=n("TFDebertaModel"),zl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a("a"),Ml=n("microsoft/deberta-base"),Cl=n(" architecture."),jl=l(),Et=a("p"),Pl=n("Configuration objects inherit from "),Hs=a("a"),Rl=n("PretrainedConfig"),Bl=n(` and can be used to control the model outputs. Read the
documentation from `),Us=a("a"),xl=n("PretrainedConfig"),Ll=n(" for more information."),pi=l(),Ft=a("h2"),ao=a("a"),$a=a("span"),k(Uo.$$.fragment),Al=l(),Ea=a("span"),Il=n("DebertaTokenizer"),hi=l(),ze=a("div"),k(Qo.$$.fragment),Ol=l(),Fa=a("p"),Sl=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Nl=l(),dt=a("div"),k(Go.$$.fragment),Wl=l(),qa=a("p"),Hl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ul=l(),Ko=a("ul"),za=a("li"),Ql=n("single sequence: [CLS] X [SEP]"),Gl=l(),Ma=a("li"),Kl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Vl=l(),ro=a("div"),k(Vo.$$.fragment),Jl=l(),qt=a("p"),Xl=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ca=a("code"),Yl=n("prepare_for_model"),Zl=n(" or "),ja=a("code"),ed=n("encode_plus"),td=n(" methods."),od=l(),tt=a("div"),k(Jo.$$.fragment),nd=l(),Pa=a("p"),sd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),ad=l(),k(Xo.$$.fragment),rd=l(),zt=a("p"),id=n("If "),Ra=a("code"),ld=n("token_ids_1"),dd=n(" is "),Ba=a("code"),cd=n("None"),pd=n(", this method only returns the first portion of the mask (0s)."),hd=l(),Qs=a("div"),k(Yo.$$.fragment),fi=l(),Mt=a("h2"),io=a("a"),xa=a("span"),k(Zo.$$.fragment),fd=l(),La=a("span"),md=n("DebertaTokenizerFast"),mi=l(),Je=a("div"),k(en.$$.fragment),ud=l(),tn=a("p"),gd=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Aa=a("em"),_d=n("tokenizers"),bd=n(" library."),kd=l(),ct=a("div"),k(on.$$.fragment),Td=l(),Ia=a("p"),vd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),wd=l(),nn=a("ul"),Oa=a("li"),yd=n("single sequence: [CLS] X [SEP]"),Dd=l(),Sa=a("li"),$d=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ed=l(),ot=a("div"),k(sn.$$.fragment),Fd=l(),Na=a("p"),qd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),zd=l(),k(an.$$.fragment),Md=l(),Ct=a("p"),Cd=n("If "),Wa=a("code"),jd=n("token_ids_1"),Pd=n(" is "),Ha=a("code"),Rd=n("None"),Bd=n(", this method only returns the first portion of the mask (0s)."),ui=l(),jt=a("h2"),lo=a("a"),Ua=a("span"),k(rn.$$.fragment),xd=l(),Qa=a("span"),Ld=n("DebertaModel"),gi=l(),Xe=a("div"),k(ln.$$.fragment),Ad=l(),dn=a("p"),Id=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a("a"),Od=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nd=l(),pn=a("p"),Wd=n("This model is also a PyTorch "),hn=a("a"),Hd=n("torch.nn.Module"),Ud=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Qd=l(),Oe=a("div"),k(fn.$$.fragment),Gd=l(),Pt=a("p"),Kd=n("The "),Gs=a("a"),Vd=n("DebertaModel"),Jd=n(" forward method, overrides the "),Ga=a("code"),Xd=n("__call__"),Yd=n(" special method."),Zd=l(),k(co.$$.fragment),ec=l(),Ka=a("p"),tc=n("Example:"),oc=l(),k(mn.$$.fragment),_i=l(),Rt=a("h2"),po=a("a"),Va=a("span"),k(un.$$.fragment),nc=l(),Ja=a("span"),sc=n("DebertaPreTrainedModel"),bi=l(),Bt=a("div"),k(gn.$$.fragment),ac=l(),Xa=a("p"),rc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ki=l(),xt=a("h2"),ho=a("a"),Ya=a("span"),k(_n.$$.fragment),ic=l(),Za=a("span"),lc=n("DebertaForMaskedLM"),Ti=l(),Ye=a("div"),k(bn.$$.fragment),dc=l(),Lt=a("p"),cc=n("DeBERTa Model with a "),er=a("code"),pc=n("language modeling"),hc=n(` head on top.
The DeBERTa model was proposed in `),kn=a("a"),fc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),uc=l(),Tn=a("p"),gc=n("This model is also a PyTorch "),vn=a("a"),_c=n("torch.nn.Module"),bc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),kc=l(),Se=a("div"),k(wn.$$.fragment),Tc=l(),At=a("p"),vc=n("The "),Ks=a("a"),wc=n("DebertaForMaskedLM"),yc=n(" forward method, overrides the "),tr=a("code"),Dc=n("__call__"),$c=n(" special method."),Ec=l(),k(fo.$$.fragment),Fc=l(),or=a("p"),qc=n("Example:"),zc=l(),k(yn.$$.fragment),vi=l(),It=a("h2"),mo=a("a"),nr=a("span"),k(Dn.$$.fragment),Mc=l(),sr=a("span"),Cc=n("DebertaForSequenceClassification"),wi=l(),Re=a("div"),k($n.$$.fragment),jc=l(),ar=a("p"),Pc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rc=l(),En=a("p"),Bc=n("The DeBERTa model was proposed in "),Fn=a("a"),xc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ac=l(),qn=a("p"),Ic=n("This model is also a PyTorch "),zn=a("a"),Oc=n("torch.nn.Module"),Sc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Nc=l(),qe=a("div"),k(Mn.$$.fragment),Wc=l(),Ot=a("p"),Hc=n("The "),Vs=a("a"),Uc=n("DebertaForSequenceClassification"),Qc=n(" forward method, overrides the "),rr=a("code"),Gc=n("__call__"),Kc=n(" special method."),Vc=l(),k(uo.$$.fragment),Jc=l(),ir=a("p"),Xc=n("Example of single-label classification:"),Yc=l(),k(Cn.$$.fragment),Zc=l(),lr=a("p"),ep=n("Example of multi-label classification:"),tp=l(),k(jn.$$.fragment),yi=l(),St=a("h2"),go=a("a"),dr=a("span"),k(Pn.$$.fragment),op=l(),cr=a("span"),np=n("DebertaForTokenClassification"),Di=l(),Be=a("div"),k(Rn.$$.fragment),sp=l(),pr=a("p"),ap=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rp=l(),Bn=a("p"),ip=n("The DeBERTa model was proposed in "),xn=a("a"),lp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),dp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cp=l(),Ln=a("p"),pp=n("This model is also a PyTorch "),An=a("a"),hp=n("torch.nn.Module"),fp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),mp=l(),Ne=a("div"),k(In.$$.fragment),up=l(),Nt=a("p"),gp=n("The "),Js=a("a"),_p=n("DebertaForTokenClassification"),bp=n(" forward method, overrides the "),hr=a("code"),kp=n("__call__"),Tp=n(" special method."),vp=l(),k(_o.$$.fragment),wp=l(),fr=a("p"),yp=n("Example:"),Dp=l(),k(On.$$.fragment),$i=l(),Wt=a("h2"),bo=a("a"),mr=a("span"),k(Sn.$$.fragment),$p=l(),ur=a("span"),Ep=n("DebertaForQuestionAnswering"),Ei=l(),xe=a("div"),k(Nn.$$.fragment),Fp=l(),Ht=a("p"),qp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gr=a("code"),zp=n("span start logits"),Mp=n(" and "),_r=a("code"),Cp=n("span end logits"),jp=n(")."),Pp=l(),Wn=a("p"),Rp=n("The DeBERTa model was proposed in "),Hn=a("a"),Bp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lp=l(),Un=a("p"),Ap=n("This model is also a PyTorch "),Qn=a("a"),Ip=n("torch.nn.Module"),Op=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Sp=l(),We=a("div"),k(Gn.$$.fragment),Np=l(),Ut=a("p"),Wp=n("The "),Xs=a("a"),Hp=n("DebertaForQuestionAnswering"),Up=n(" forward method, overrides the "),br=a("code"),Qp=n("__call__"),Gp=n(" special method."),Kp=l(),k(ko.$$.fragment),Vp=l(),kr=a("p"),Jp=n("Example:"),Xp=l(),k(Kn.$$.fragment),Fi=l(),Qt=a("h2"),To=a("a"),Tr=a("span"),k(Vn.$$.fragment),Yp=l(),vr=a("span"),Zp=n("TFDebertaModel"),qi=l(),Le=a("div"),k(Jn.$$.fragment),eh=l(),Xn=a("p"),th=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=a("a"),oh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),nh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sh=l(),Zn=a("p"),ah=n("This model is also a "),es=a("a"),rh=n("tf.keras.Model"),ih=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh=l(),k(vo.$$.fragment),dh=l(),He=a("div"),k(ts.$$.fragment),ch=l(),Gt=a("p"),ph=n("The "),Ys=a("a"),hh=n("TFDebertaModel"),fh=n(" forward method, overrides the "),wr=a("code"),mh=n("__call__"),uh=n(" special method."),gh=l(),k(wo.$$.fragment),_h=l(),yr=a("p"),bh=n("Example:"),kh=l(),k(os.$$.fragment),zi=l(),Kt=a("h2"),yo=a("a"),Dr=a("span"),k(ns.$$.fragment),Th=l(),$r=a("span"),vh=n("TFDebertaPreTrainedModel"),Mi=l(),lt=a("div"),k(ss.$$.fragment),wh=l(),Er=a("p"),yh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Dh=l(),nt=a("div"),k(as.$$.fragment),$h=l(),Fr=a("p"),Eh=n("Calls the model on new inputs and returns the outputs as tensors."),Fh=l(),rs=a("p"),qh=n("In this case "),qr=a("code"),zh=n("call()"),Mh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Ch=l(),Ze=a("p"),jh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),zr=a("code"),Ph=n("tf.keras.Model"),Rh=n(`.
To call a model on an input, always use the `),Mr=a("code"),Bh=n("__call__()"),xh=n(` method,
i.e. `),Cr=a("code"),Lh=n("model(inputs)"),Ah=n(", which relies on the underlying "),jr=a("code"),Ih=n("call()"),Oh=n(" method."),Ci=l(),Vt=a("h2"),Do=a("a"),Pr=a("span"),k(is.$$.fragment),Sh=l(),Rr=a("span"),Nh=n("TFDebertaForMaskedLM"),ji=l(),Ae=a("div"),k(ls.$$.fragment),Wh=l(),Jt=a("p"),Hh=n("DeBERTa Model with a "),Br=a("code"),Uh=n("language modeling"),Qh=n(` head on top.
The DeBERTa model was proposed in `),ds=a("a"),Gh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vh=l(),cs=a("p"),Jh=n("This model is also a "),ps=a("a"),Xh=n("tf.keras.Model"),Yh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zh=l(),k($o.$$.fragment),ef=l(),Ue=a("div"),k(hs.$$.fragment),tf=l(),Xt=a("p"),of=n("The "),Zs=a("a"),nf=n("TFDebertaForMaskedLM"),sf=n(" forward method, overrides the "),xr=a("code"),af=n("__call__"),rf=n(" special method."),lf=l(),k(Eo.$$.fragment),df=l(),Lr=a("p"),cf=n("Example:"),pf=l(),k(fs.$$.fragment),Pi=l(),Yt=a("h2"),Fo=a("a"),Ar=a("span"),k(ms.$$.fragment),hf=l(),Ir=a("span"),ff=n("TFDebertaForSequenceClassification"),Ri=l(),Me=a("div"),k(us.$$.fragment),mf=l(),Or=a("p"),uf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),gf=l(),gs=a("p"),_f=n("The DeBERTa model was proposed in "),_s=a("a"),bf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tf=l(),bs=a("p"),vf=n("This model is also a "),ks=a("a"),wf=n("tf.keras.Model"),yf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df=l(),k(qo.$$.fragment),$f=l(),Qe=a("div"),k(Ts.$$.fragment),Ef=l(),Zt=a("p"),Ff=n("The "),ea=a("a"),qf=n("TFDebertaForSequenceClassification"),zf=n(" forward method, overrides the "),Sr=a("code"),Mf=n("__call__"),Cf=n(" special method."),jf=l(),k(zo.$$.fragment),Pf=l(),Nr=a("p"),Rf=n("Example:"),Bf=l(),k(vs.$$.fragment),Bi=l(),eo=a("h2"),Mo=a("a"),Wr=a("span"),k(ws.$$.fragment),xf=l(),Hr=a("span"),Lf=n("TFDebertaForTokenClassification"),xi=l(),Ce=a("div"),k(ys.$$.fragment),Af=l(),Ur=a("p"),If=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Of=l(),Ds=a("p"),Sf=n("The DeBERTa model was proposed in "),$s=a("a"),Nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Wf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hf=l(),Es=a("p"),Uf=n("This model is also a "),Fs=a("a"),Qf=n("tf.keras.Model"),Gf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kf=l(),k(Co.$$.fragment),Vf=l(),Ge=a("div"),k(qs.$$.fragment),Jf=l(),to=a("p"),Xf=n("The "),ta=a("a"),Yf=n("TFDebertaForTokenClassification"),Zf=n(" forward method, overrides the "),Qr=a("code"),em=n("__call__"),tm=n(" special method."),om=l(),k(jo.$$.fragment),nm=l(),Gr=a("p"),sm=n("Example:"),am=l(),k(zs.$$.fragment),Li=l(),oo=a("h2"),Po=a("a"),Kr=a("span"),k(Ms.$$.fragment),rm=l(),Vr=a("span"),im=n("TFDebertaForQuestionAnswering"),Ai=l(),je=a("div"),k(Cs.$$.fragment),lm=l(),no=a("p"),dm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jr=a("code"),cm=n("span start logits"),pm=n(" and "),Xr=a("code"),hm=n("span end logits"),fm=n(")."),mm=l(),js=a("p"),um=n("The DeBERTa model was proposed in "),Ps=a("a"),gm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_m=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bm=l(),Rs=a("p"),km=n("This model is also a "),Bs=a("a"),Tm=n("tf.keras.Model"),vm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wm=l(),k(Ro.$$.fragment),ym=l(),Ke=a("div"),k(xs.$$.fragment),Dm=l(),so=a("p"),$m=n("The "),oa=a("a"),Em=n("TFDebertaForQuestionAnswering"),Fm=n(" forward method, overrides the "),Yr=a("code"),qm=n("__call__"),zm=n(" special method."),Mm=l(),k(Bo.$$.fragment),Cm=l(),Zr=a("p"),jm=n("Example:"),Pm=l(),k(Ls.$$.fragment),this.h()},l(o){const m=m_('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),q=d(o),u=r(o,"H1",{class:!0});var As=i(u);g=r(As,"A",{id:!0,class:!0,href:!0});var ei=i(g);$=r(ei,"SPAN",{});var ti=i($);T(b.$$.fragment,ti),ti.forEach(t),ei.forEach(t),_=d(As),F=r(As,"SPAN",{});var oi=i(F);he=s(oi,"DeBERTa"),oi.forEach(t),As.forEach(t),X=d(o),z=r(o,"H2",{class:!0});var Is=i(z);Y=r(Is,"A",{id:!0,class:!0,href:!0});var ni=i(Y);A=r(ni,"SPAN",{});var si=i(A);T(ee.$$.fragment,si),si.forEach(t),ni.forEach(t),fe=d(Is),I=r(Is,"SPAN",{});var ai=i(I);me=s(ai,"Overview"),ai.forEach(t),Is.forEach(t),le=d(o),N=r(o,"P",{});var Os=i(N);x=s(Os,"The DeBERTa model was proposed in "),te=r(Os,"A",{href:!0,rel:!0});var ri=i(te);Z=s(ri,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ri.forEach(t),M=s(Os,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Os.forEach(t),j=d(o),ne=r(o,"P",{});var ii=i(ne);W=s(ii,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ii.forEach(t),de=d(o),se=r(o,"P",{});var li=i(se);H=s(li,"The abstract from the paper is the following:"),li.forEach(t),ce=d(o),ae=r(o,"P",{});var di=i(ae);C=r(di,"EM",{});var Ss=i(C);ue=s(Ss,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=r(Ss,"A",{href:!0,rel:!0});var ci=i(L);ge=s(ci,"https://github.com/microsoft/DeBERTa"),ci.forEach(t),_e=s(Ss,"."),Ss.forEach(t),di.forEach(t),O=d(o),K=r(o,"P",{});var xo=i(K);be=s(xo,"This model was contributed by "),P=r(xo,"A",{href:!0,rel:!0});var Rm=i(P);ke=s(Rm,"DeBERTa"),Rm.forEach(t),U=s(xo,`. This model TF 2.0 implementation was
contributed by `),oe=r(xo,"A",{href:!0,rel:!0});var Bm=i(oe);p=s(Bm,"kamalkraj"),Bm.forEach(t),E=s(xo," . The original code can be found "),V=r(xo,"A",{href:!0,rel:!0});var xm=i(V);$e=s(xm,"here"),xm.forEach(t),Ee=s(xo,"."),xo.forEach(t),B=d(o),pe=r(o,"H2",{class:!0});var Oi=i(pe);Te=r(Oi,"A",{id:!0,class:!0,href:!0});var Lm=i(Te);ye=r(Lm,"SPAN",{});var Am=i(ye);T(R.$$.fragment,Am),Am.forEach(t),Lm.forEach(t),Q=d(Oi),De=r(Oi,"SPAN",{});var Im=i(De);Fe=s(Im,"DebertaConfig"),Im.forEach(t),Oi.forEach(t),S=d(o),re=r(o,"DIV",{class:!0});var na=i(re);T(we.$$.fragment,na),ve=d(na),ie=r(na,"P",{});var Lo=i(ie);$l=s(Lo,"This is the configuration class to store the configuration of a "),Ns=r(Lo,"A",{href:!0});var Om=i(Ns);El=s(Om,"DebertaModel"),Om.forEach(t),Fl=s(Lo," or a "),Ws=r(Lo,"A",{href:!0});var Sm=i(Ws);ql=s(Sm,"TFDebertaModel"),Sm.forEach(t),zl=s(Lo,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r(Lo,"A",{href:!0,rel:!0});var Nm=i(Ho);Ml=s(Nm,"microsoft/deberta-base"),Nm.forEach(t),Cl=s(Lo," architecture."),Lo.forEach(t),jl=d(na),Et=r(na,"P",{});var sa=i(Et);Pl=s(sa,"Configuration objects inherit from "),Hs=r(sa,"A",{href:!0});var Wm=i(Hs);Rl=s(Wm,"PretrainedConfig"),Wm.forEach(t),Bl=s(sa,` and can be used to control the model outputs. Read the
documentation from `),Us=r(sa,"A",{href:!0});var Hm=i(Us);xl=s(Hm,"PretrainedConfig"),Hm.forEach(t),Ll=s(sa," for more information."),sa.forEach(t),na.forEach(t),pi=d(o),Ft=r(o,"H2",{class:!0});var Si=i(Ft);ao=r(Si,"A",{id:!0,class:!0,href:!0});var Um=i(ao);$a=r(Um,"SPAN",{});var Qm=i($a);T(Uo.$$.fragment,Qm),Qm.forEach(t),Um.forEach(t),Al=d(Si),Ea=r(Si,"SPAN",{});var Gm=i(Ea);Il=s(Gm,"DebertaTokenizer"),Gm.forEach(t),Si.forEach(t),hi=d(o),ze=r(o,"DIV",{class:!0});var st=i(ze);T(Qo.$$.fragment,st),Ol=d(st),Fa=r(st,"P",{});var Km=i(Fa);Sl=s(Km,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Km.forEach(t),Nl=d(st),dt=r(st,"DIV",{class:!0});var aa=i(dt);T(Go.$$.fragment,aa),Wl=d(aa),qa=r(aa,"P",{});var Vm=i(qa);Hl=s(Vm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vm.forEach(t),Ul=d(aa),Ko=r(aa,"UL",{});var Ni=i(Ko);za=r(Ni,"LI",{});var Jm=i(za);Ql=s(Jm,"single sequence: [CLS] X [SEP]"),Jm.forEach(t),Gl=d(Ni),Ma=r(Ni,"LI",{});var Xm=i(Ma);Kl=s(Xm,"pair of sequences: [CLS] A [SEP] B [SEP]"),Xm.forEach(t),Ni.forEach(t),aa.forEach(t),Vl=d(st),ro=r(st,"DIV",{class:!0});var Wi=i(ro);T(Vo.$$.fragment,Wi),Jl=d(Wi),qt=r(Wi,"P",{});var ra=i(qt);Xl=s(ra,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ca=r(ra,"CODE",{});var Ym=i(Ca);Yl=s(Ym,"prepare_for_model"),Ym.forEach(t),Zl=s(ra," or "),ja=r(ra,"CODE",{});var Zm=i(ja);ed=s(Zm,"encode_plus"),Zm.forEach(t),td=s(ra," methods."),ra.forEach(t),Wi.forEach(t),od=d(st),tt=r(st,"DIV",{class:!0});var Ao=i(tt);T(Jo.$$.fragment,Ao),nd=d(Ao),Pa=r(Ao,"P",{});var eu=i(Pa);sd=s(eu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),eu.forEach(t),ad=d(Ao),T(Xo.$$.fragment,Ao),rd=d(Ao),zt=r(Ao,"P",{});var ia=i(zt);id=s(ia,"If "),Ra=r(ia,"CODE",{});var tu=i(Ra);ld=s(tu,"token_ids_1"),tu.forEach(t),dd=s(ia," is "),Ba=r(ia,"CODE",{});var ou=i(Ba);cd=s(ou,"None"),ou.forEach(t),pd=s(ia,", this method only returns the first portion of the mask (0s)."),ia.forEach(t),Ao.forEach(t),hd=d(st),Qs=r(st,"DIV",{class:!0});var nu=i(Qs);T(Yo.$$.fragment,nu),nu.forEach(t),st.forEach(t),fi=d(o),Mt=r(o,"H2",{class:!0});var Hi=i(Mt);io=r(Hi,"A",{id:!0,class:!0,href:!0});var su=i(io);xa=r(su,"SPAN",{});var au=i(xa);T(Zo.$$.fragment,au),au.forEach(t),su.forEach(t),fd=d(Hi),La=r(Hi,"SPAN",{});var ru=i(La);md=s(ru,"DebertaTokenizerFast"),ru.forEach(t),Hi.forEach(t),mi=d(o),Je=r(o,"DIV",{class:!0});var Io=i(Je);T(en.$$.fragment,Io),ud=d(Io),tn=r(Io,"P",{});var Ui=i(tn);gd=s(Ui,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Aa=r(Ui,"EM",{});var iu=i(Aa);_d=s(iu,"tokenizers"),iu.forEach(t),bd=s(Ui," library."),Ui.forEach(t),kd=d(Io),ct=r(Io,"DIV",{class:!0});var la=i(ct);T(on.$$.fragment,la),Td=d(la),Ia=r(la,"P",{});var lu=i(Ia);vd=s(lu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),lu.forEach(t),wd=d(la),nn=r(la,"UL",{});var Qi=i(nn);Oa=r(Qi,"LI",{});var du=i(Oa);yd=s(du,"single sequence: [CLS] X [SEP]"),du.forEach(t),Dd=d(Qi),Sa=r(Qi,"LI",{});var cu=i(Sa);$d=s(cu,"pair of sequences: [CLS] A [SEP] B [SEP]"),cu.forEach(t),Qi.forEach(t),la.forEach(t),Ed=d(Io),ot=r(Io,"DIV",{class:!0});var Oo=i(ot);T(sn.$$.fragment,Oo),Fd=d(Oo),Na=r(Oo,"P",{});var pu=i(Na);qd=s(pu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),pu.forEach(t),zd=d(Oo),T(an.$$.fragment,Oo),Md=d(Oo),Ct=r(Oo,"P",{});var da=i(Ct);Cd=s(da,"If "),Wa=r(da,"CODE",{});var hu=i(Wa);jd=s(hu,"token_ids_1"),hu.forEach(t),Pd=s(da," is "),Ha=r(da,"CODE",{});var fu=i(Ha);Rd=s(fu,"None"),fu.forEach(t),Bd=s(da,", this method only returns the first portion of the mask (0s)."),da.forEach(t),Oo.forEach(t),Io.forEach(t),ui=d(o),jt=r(o,"H2",{class:!0});var Gi=i(jt);lo=r(Gi,"A",{id:!0,class:!0,href:!0});var mu=i(lo);Ua=r(mu,"SPAN",{});var uu=i(Ua);T(rn.$$.fragment,uu),uu.forEach(t),mu.forEach(t),xd=d(Gi),Qa=r(Gi,"SPAN",{});var gu=i(Qa);Ld=s(gu,"DebertaModel"),gu.forEach(t),Gi.forEach(t),gi=d(o),Xe=r(o,"DIV",{class:!0});var So=i(Xe);T(ln.$$.fragment,So),Ad=d(So),dn=r(So,"P",{});var Ki=i(dn);Id=s(Ki,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r(Ki,"A",{href:!0,rel:!0});var _u=i(cn);Od=s(_u,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_u.forEach(t),Sd=s(Ki,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ki.forEach(t),Nd=d(So),pn=r(So,"P",{});var Vi=i(pn);Wd=s(Vi,"This model is also a PyTorch "),hn=r(Vi,"A",{href:!0,rel:!0});var bu=i(hn);Hd=s(bu,"torch.nn.Module"),bu.forEach(t),Ud=s(Vi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vi.forEach(t),Qd=d(So),Oe=r(So,"DIV",{class:!0});var pt=i(Oe);T(fn.$$.fragment,pt),Gd=d(pt),Pt=r(pt,"P",{});var ca=i(Pt);Kd=s(ca,"The "),Gs=r(ca,"A",{href:!0});var ku=i(Gs);Vd=s(ku,"DebertaModel"),ku.forEach(t),Jd=s(ca," forward method, overrides the "),Ga=r(ca,"CODE",{});var Tu=i(Ga);Xd=s(Tu,"__call__"),Tu.forEach(t),Yd=s(ca," special method."),ca.forEach(t),Zd=d(pt),T(co.$$.fragment,pt),ec=d(pt),Ka=r(pt,"P",{});var vu=i(Ka);tc=s(vu,"Example:"),vu.forEach(t),oc=d(pt),T(mn.$$.fragment,pt),pt.forEach(t),So.forEach(t),_i=d(o),Rt=r(o,"H2",{class:!0});var Ji=i(Rt);po=r(Ji,"A",{id:!0,class:!0,href:!0});var wu=i(po);Va=r(wu,"SPAN",{});var yu=i(Va);T(un.$$.fragment,yu),yu.forEach(t),wu.forEach(t),nc=d(Ji),Ja=r(Ji,"SPAN",{});var Du=i(Ja);sc=s(Du,"DebertaPreTrainedModel"),Du.forEach(t),Ji.forEach(t),bi=d(o),Bt=r(o,"DIV",{class:!0});var Xi=i(Bt);T(gn.$$.fragment,Xi),ac=d(Xi),Xa=r(Xi,"P",{});var $u=i(Xa);rc=s($u,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),$u.forEach(t),Xi.forEach(t),ki=d(o),xt=r(o,"H2",{class:!0});var Yi=i(xt);ho=r(Yi,"A",{id:!0,class:!0,href:!0});var Eu=i(ho);Ya=r(Eu,"SPAN",{});var Fu=i(Ya);T(_n.$$.fragment,Fu),Fu.forEach(t),Eu.forEach(t),ic=d(Yi),Za=r(Yi,"SPAN",{});var qu=i(Za);lc=s(qu,"DebertaForMaskedLM"),qu.forEach(t),Yi.forEach(t),Ti=d(o),Ye=r(o,"DIV",{class:!0});var No=i(Ye);T(bn.$$.fragment,No),dc=d(No),Lt=r(No,"P",{});var pa=i(Lt);cc=s(pa,"DeBERTa Model with a "),er=r(pa,"CODE",{});var zu=i(er);pc=s(zu,"language modeling"),zu.forEach(t),hc=s(pa,` head on top.
The DeBERTa model was proposed in `),kn=r(pa,"A",{href:!0,rel:!0});var Mu=i(kn);fc=s(Mu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mu.forEach(t),mc=s(pa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pa.forEach(t),uc=d(No),Tn=r(No,"P",{});var Zi=i(Tn);gc=s(Zi,"This model is also a PyTorch "),vn=r(Zi,"A",{href:!0,rel:!0});var Cu=i(vn);_c=s(Cu,"torch.nn.Module"),Cu.forEach(t),bc=s(Zi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Zi.forEach(t),kc=d(No),Se=r(No,"DIV",{class:!0});var ht=i(Se);T(wn.$$.fragment,ht),Tc=d(ht),At=r(ht,"P",{});var ha=i(At);vc=s(ha,"The "),Ks=r(ha,"A",{href:!0});var ju=i(Ks);wc=s(ju,"DebertaForMaskedLM"),ju.forEach(t),yc=s(ha," forward method, overrides the "),tr=r(ha,"CODE",{});var Pu=i(tr);Dc=s(Pu,"__call__"),Pu.forEach(t),$c=s(ha," special method."),ha.forEach(t),Ec=d(ht),T(fo.$$.fragment,ht),Fc=d(ht),or=r(ht,"P",{});var Ru=i(or);qc=s(Ru,"Example:"),Ru.forEach(t),zc=d(ht),T(yn.$$.fragment,ht),ht.forEach(t),No.forEach(t),vi=d(o),It=r(o,"H2",{class:!0});var el=i(It);mo=r(el,"A",{id:!0,class:!0,href:!0});var Bu=i(mo);nr=r(Bu,"SPAN",{});var xu=i(nr);T(Dn.$$.fragment,xu),xu.forEach(t),Bu.forEach(t),Mc=d(el),sr=r(el,"SPAN",{});var Lu=i(sr);Cc=s(Lu,"DebertaForSequenceClassification"),Lu.forEach(t),el.forEach(t),wi=d(o),Re=r(o,"DIV",{class:!0});var ft=i(Re);T($n.$$.fragment,ft),jc=d(ft),ar=r(ft,"P",{});var Au=i(ar);Pc=s(Au,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Au.forEach(t),Rc=d(ft),En=r(ft,"P",{});var tl=i(En);Bc=s(tl,"The DeBERTa model was proposed in "),Fn=r(tl,"A",{href:!0,rel:!0});var Iu=i(Fn);xc=s(Iu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Iu.forEach(t),Lc=s(tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tl.forEach(t),Ac=d(ft),qn=r(ft,"P",{});var ol=i(qn);Ic=s(ol,"This model is also a PyTorch "),zn=r(ol,"A",{href:!0,rel:!0});var Ou=i(zn);Oc=s(Ou,"torch.nn.Module"),Ou.forEach(t),Sc=s(ol," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ol.forEach(t),Nc=d(ft),qe=r(ft,"DIV",{class:!0});var Ve=i(qe);T(Mn.$$.fragment,Ve),Wc=d(Ve),Ot=r(Ve,"P",{});var fa=i(Ot);Hc=s(fa,"The "),Vs=r(fa,"A",{href:!0});var Su=i(Vs);Uc=s(Su,"DebertaForSequenceClassification"),Su.forEach(t),Qc=s(fa," forward method, overrides the "),rr=r(fa,"CODE",{});var Nu=i(rr);Gc=s(Nu,"__call__"),Nu.forEach(t),Kc=s(fa," special method."),fa.forEach(t),Vc=d(Ve),T(uo.$$.fragment,Ve),Jc=d(Ve),ir=r(Ve,"P",{});var Wu=i(ir);Xc=s(Wu,"Example of single-label classification:"),Wu.forEach(t),Yc=d(Ve),T(Cn.$$.fragment,Ve),Zc=d(Ve),lr=r(Ve,"P",{});var Hu=i(lr);ep=s(Hu,"Example of multi-label classification:"),Hu.forEach(t),tp=d(Ve),T(jn.$$.fragment,Ve),Ve.forEach(t),ft.forEach(t),yi=d(o),St=r(o,"H2",{class:!0});var nl=i(St);go=r(nl,"A",{id:!0,class:!0,href:!0});var Uu=i(go);dr=r(Uu,"SPAN",{});var Qu=i(dr);T(Pn.$$.fragment,Qu),Qu.forEach(t),Uu.forEach(t),op=d(nl),cr=r(nl,"SPAN",{});var Gu=i(cr);np=s(Gu,"DebertaForTokenClassification"),Gu.forEach(t),nl.forEach(t),Di=d(o),Be=r(o,"DIV",{class:!0});var mt=i(Be);T(Rn.$$.fragment,mt),sp=d(mt),pr=r(mt,"P",{});var Ku=i(pr);ap=s(Ku,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ku.forEach(t),rp=d(mt),Bn=r(mt,"P",{});var sl=i(Bn);ip=s(sl,"The DeBERTa model was proposed in "),xn=r(sl,"A",{href:!0,rel:!0});var Vu=i(xn);lp=s(Vu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vu.forEach(t),dp=s(sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sl.forEach(t),cp=d(mt),Ln=r(mt,"P",{});var al=i(Ln);pp=s(al,"This model is also a PyTorch "),An=r(al,"A",{href:!0,rel:!0});var Ju=i(An);hp=s(Ju,"torch.nn.Module"),Ju.forEach(t),fp=s(al," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),al.forEach(t),mp=d(mt),Ne=r(mt,"DIV",{class:!0});var ut=i(Ne);T(In.$$.fragment,ut),up=d(ut),Nt=r(ut,"P",{});var ma=i(Nt);gp=s(ma,"The "),Js=r(ma,"A",{href:!0});var Xu=i(Js);_p=s(Xu,"DebertaForTokenClassification"),Xu.forEach(t),bp=s(ma," forward method, overrides the "),hr=r(ma,"CODE",{});var Yu=i(hr);kp=s(Yu,"__call__"),Yu.forEach(t),Tp=s(ma," special method."),ma.forEach(t),vp=d(ut),T(_o.$$.fragment,ut),wp=d(ut),fr=r(ut,"P",{});var Zu=i(fr);yp=s(Zu,"Example:"),Zu.forEach(t),Dp=d(ut),T(On.$$.fragment,ut),ut.forEach(t),mt.forEach(t),$i=d(o),Wt=r(o,"H2",{class:!0});var rl=i(Wt);bo=r(rl,"A",{id:!0,class:!0,href:!0});var eg=i(bo);mr=r(eg,"SPAN",{});var tg=i(mr);T(Sn.$$.fragment,tg),tg.forEach(t),eg.forEach(t),$p=d(rl),ur=r(rl,"SPAN",{});var og=i(ur);Ep=s(og,"DebertaForQuestionAnswering"),og.forEach(t),rl.forEach(t),Ei=d(o),xe=r(o,"DIV",{class:!0});var gt=i(xe);T(Nn.$$.fragment,gt),Fp=d(gt),Ht=r(gt,"P",{});var ua=i(Ht);qp=s(ua,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gr=r(ua,"CODE",{});var ng=i(gr);zp=s(ng,"span start logits"),ng.forEach(t),Mp=s(ua," and "),_r=r(ua,"CODE",{});var sg=i(_r);Cp=s(sg,"span end logits"),sg.forEach(t),jp=s(ua,")."),ua.forEach(t),Pp=d(gt),Wn=r(gt,"P",{});var il=i(Wn);Rp=s(il,"The DeBERTa model was proposed in "),Hn=r(il,"A",{href:!0,rel:!0});var ag=i(Hn);Bp=s(ag,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ag.forEach(t),xp=s(il,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),il.forEach(t),Lp=d(gt),Un=r(gt,"P",{});var ll=i(Un);Ap=s(ll,"This model is also a PyTorch "),Qn=r(ll,"A",{href:!0,rel:!0});var rg=i(Qn);Ip=s(rg,"torch.nn.Module"),rg.forEach(t),Op=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),Sp=d(gt),We=r(gt,"DIV",{class:!0});var _t=i(We);T(Gn.$$.fragment,_t),Np=d(_t),Ut=r(_t,"P",{});var ga=i(Ut);Wp=s(ga,"The "),Xs=r(ga,"A",{href:!0});var ig=i(Xs);Hp=s(ig,"DebertaForQuestionAnswering"),ig.forEach(t),Up=s(ga," forward method, overrides the "),br=r(ga,"CODE",{});var lg=i(br);Qp=s(lg,"__call__"),lg.forEach(t),Gp=s(ga," special method."),ga.forEach(t),Kp=d(_t),T(ko.$$.fragment,_t),Vp=d(_t),kr=r(_t,"P",{});var dg=i(kr);Jp=s(dg,"Example:"),dg.forEach(t),Xp=d(_t),T(Kn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Fi=d(o),Qt=r(o,"H2",{class:!0});var dl=i(Qt);To=r(dl,"A",{id:!0,class:!0,href:!0});var cg=i(To);Tr=r(cg,"SPAN",{});var pg=i(Tr);T(Vn.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Yp=d(dl),vr=r(dl,"SPAN",{});var hg=i(vr);Zp=s(hg,"TFDebertaModel"),hg.forEach(t),dl.forEach(t),qi=d(o),Le=r(o,"DIV",{class:!0});var bt=i(Le);T(Jn.$$.fragment,bt),eh=d(bt),Xn=r(bt,"P",{});var cl=i(Xn);th=s(cl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=r(cl,"A",{href:!0,rel:!0});var fg=i(Yn);oh=s(fg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fg.forEach(t),nh=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),sh=d(bt),Zn=r(bt,"P",{});var pl=i(Zn);ah=s(pl,"This model is also a "),es=r(pl,"A",{href:!0,rel:!0});var mg=i(es);rh=s(mg,"tf.keras.Model"),mg.forEach(t),ih=s(pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pl.forEach(t),lh=d(bt),T(vo.$$.fragment,bt),dh=d(bt),He=r(bt,"DIV",{class:!0});var kt=i(He);T(ts.$$.fragment,kt),ch=d(kt),Gt=r(kt,"P",{});var _a=i(Gt);ph=s(_a,"The "),Ys=r(_a,"A",{href:!0});var ug=i(Ys);hh=s(ug,"TFDebertaModel"),ug.forEach(t),fh=s(_a," forward method, overrides the "),wr=r(_a,"CODE",{});var gg=i(wr);mh=s(gg,"__call__"),gg.forEach(t),uh=s(_a," special method."),_a.forEach(t),gh=d(kt),T(wo.$$.fragment,kt),_h=d(kt),yr=r(kt,"P",{});var _g=i(yr);bh=s(_g,"Example:"),_g.forEach(t),kh=d(kt),T(os.$$.fragment,kt),kt.forEach(t),bt.forEach(t),zi=d(o),Kt=r(o,"H2",{class:!0});var hl=i(Kt);yo=r(hl,"A",{id:!0,class:!0,href:!0});var bg=i(yo);Dr=r(bg,"SPAN",{});var kg=i(Dr);T(ns.$$.fragment,kg),kg.forEach(t),bg.forEach(t),Th=d(hl),$r=r(hl,"SPAN",{});var Tg=i($r);vh=s(Tg,"TFDebertaPreTrainedModel"),Tg.forEach(t),hl.forEach(t),Mi=d(o),lt=r(o,"DIV",{class:!0});var ba=i(lt);T(ss.$$.fragment,ba),wh=d(ba),Er=r(ba,"P",{});var vg=i(Er);yh=s(vg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),vg.forEach(t),Dh=d(ba),nt=r(ba,"DIV",{class:!0});var Wo=i(nt);T(as.$$.fragment,Wo),$h=d(Wo),Fr=r(Wo,"P",{});var wg=i(Fr);Eh=s(wg,"Calls the model on new inputs and returns the outputs as tensors."),wg.forEach(t),Fh=d(Wo),rs=r(Wo,"P",{});var fl=i(rs);qh=s(fl,"In this case "),qr=r(fl,"CODE",{});var yg=i(qr);zh=s(yg,"call()"),yg.forEach(t),Mh=s(fl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),fl.forEach(t),Ch=d(Wo),Ze=r(Wo,"P",{});var Tt=i(Ze);jh=s(Tt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),zr=r(Tt,"CODE",{});var Dg=i(zr);Ph=s(Dg,"tf.keras.Model"),Dg.forEach(t),Rh=s(Tt,`.
To call a model on an input, always use the `),Mr=r(Tt,"CODE",{});var $g=i(Mr);Bh=s($g,"__call__()"),$g.forEach(t),xh=s(Tt,` method,
i.e. `),Cr=r(Tt,"CODE",{});var Eg=i(Cr);Lh=s(Eg,"model(inputs)"),Eg.forEach(t),Ah=s(Tt,", which relies on the underlying "),jr=r(Tt,"CODE",{});var Fg=i(jr);Ih=s(Fg,"call()"),Fg.forEach(t),Oh=s(Tt," method."),Tt.forEach(t),Wo.forEach(t),ba.forEach(t),Ci=d(o),Vt=r(o,"H2",{class:!0});var ml=i(Vt);Do=r(ml,"A",{id:!0,class:!0,href:!0});var qg=i(Do);Pr=r(qg,"SPAN",{});var zg=i(Pr);T(is.$$.fragment,zg),zg.forEach(t),qg.forEach(t),Sh=d(ml),Rr=r(ml,"SPAN",{});var Mg=i(Rr);Nh=s(Mg,"TFDebertaForMaskedLM"),Mg.forEach(t),ml.forEach(t),ji=d(o),Ae=r(o,"DIV",{class:!0});var vt=i(Ae);T(ls.$$.fragment,vt),Wh=d(vt),Jt=r(vt,"P",{});var ka=i(Jt);Hh=s(ka,"DeBERTa Model with a "),Br=r(ka,"CODE",{});var Cg=i(Br);Uh=s(Cg,"language modeling"),Cg.forEach(t),Qh=s(ka,` head on top.
The DeBERTa model was proposed in `),ds=r(ka,"A",{href:!0,rel:!0});var jg=i(ds);Gh=s(jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jg.forEach(t),Kh=s(ka,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ka.forEach(t),Vh=d(vt),cs=r(vt,"P",{});var ul=i(cs);Jh=s(ul,"This model is also a "),ps=r(ul,"A",{href:!0,rel:!0});var Pg=i(ps);Xh=s(Pg,"tf.keras.Model"),Pg.forEach(t),Yh=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),Zh=d(vt),T($o.$$.fragment,vt),ef=d(vt),Ue=r(vt,"DIV",{class:!0});var wt=i(Ue);T(hs.$$.fragment,wt),tf=d(wt),Xt=r(wt,"P",{});var Ta=i(Xt);of=s(Ta,"The "),Zs=r(Ta,"A",{href:!0});var Rg=i(Zs);nf=s(Rg,"TFDebertaForMaskedLM"),Rg.forEach(t),sf=s(Ta," forward method, overrides the "),xr=r(Ta,"CODE",{});var Bg=i(xr);af=s(Bg,"__call__"),Bg.forEach(t),rf=s(Ta," special method."),Ta.forEach(t),lf=d(wt),T(Eo.$$.fragment,wt),df=d(wt),Lr=r(wt,"P",{});var xg=i(Lr);cf=s(xg,"Example:"),xg.forEach(t),pf=d(wt),T(fs.$$.fragment,wt),wt.forEach(t),vt.forEach(t),Pi=d(o),Yt=r(o,"H2",{class:!0});var gl=i(Yt);Fo=r(gl,"A",{id:!0,class:!0,href:!0});var Lg=i(Fo);Ar=r(Lg,"SPAN",{});var Ag=i(Ar);T(ms.$$.fragment,Ag),Ag.forEach(t),Lg.forEach(t),hf=d(gl),Ir=r(gl,"SPAN",{});var Ig=i(Ir);ff=s(Ig,"TFDebertaForSequenceClassification"),Ig.forEach(t),gl.forEach(t),Ri=d(o),Me=r(o,"DIV",{class:!0});var at=i(Me);T(us.$$.fragment,at),mf=d(at),Or=r(at,"P",{});var Og=i(Or);uf=s(Og,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Og.forEach(t),gf=d(at),gs=r(at,"P",{});var _l=i(gs);_f=s(_l,"The DeBERTa model was proposed in "),_s=r(_l,"A",{href:!0,rel:!0});var Sg=i(_s);bf=s(Sg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sg.forEach(t),kf=s(_l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_l.forEach(t),Tf=d(at),bs=r(at,"P",{});var bl=i(bs);vf=s(bl,"This model is also a "),ks=r(bl,"A",{href:!0,rel:!0});var Ng=i(ks);wf=s(Ng,"tf.keras.Model"),Ng.forEach(t),yf=s(bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bl.forEach(t),Df=d(at),T(qo.$$.fragment,at),$f=d(at),Qe=r(at,"DIV",{class:!0});var yt=i(Qe);T(Ts.$$.fragment,yt),Ef=d(yt),Zt=r(yt,"P",{});var va=i(Zt);Ff=s(va,"The "),ea=r(va,"A",{href:!0});var Wg=i(ea);qf=s(Wg,"TFDebertaForSequenceClassification"),Wg.forEach(t),zf=s(va," forward method, overrides the "),Sr=r(va,"CODE",{});var Hg=i(Sr);Mf=s(Hg,"__call__"),Hg.forEach(t),Cf=s(va," special method."),va.forEach(t),jf=d(yt),T(zo.$$.fragment,yt),Pf=d(yt),Nr=r(yt,"P",{});var Ug=i(Nr);Rf=s(Ug,"Example:"),Ug.forEach(t),Bf=d(yt),T(vs.$$.fragment,yt),yt.forEach(t),at.forEach(t),Bi=d(o),eo=r(o,"H2",{class:!0});var kl=i(eo);Mo=r(kl,"A",{id:!0,class:!0,href:!0});var Qg=i(Mo);Wr=r(Qg,"SPAN",{});var Gg=i(Wr);T(ws.$$.fragment,Gg),Gg.forEach(t),Qg.forEach(t),xf=d(kl),Hr=r(kl,"SPAN",{});var Kg=i(Hr);Lf=s(Kg,"TFDebertaForTokenClassification"),Kg.forEach(t),kl.forEach(t),xi=d(o),Ce=r(o,"DIV",{class:!0});var rt=i(Ce);T(ys.$$.fragment,rt),Af=d(rt),Ur=r(rt,"P",{});var Vg=i(Ur);If=s(Vg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Vg.forEach(t),Of=d(rt),Ds=r(rt,"P",{});var Tl=i(Ds);Sf=s(Tl,"The DeBERTa model was proposed in "),$s=r(Tl,"A",{href:!0,rel:!0});var Jg=i($s);Nf=s(Jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jg.forEach(t),Wf=s(Tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tl.forEach(t),Hf=d(rt),Es=r(rt,"P",{});var vl=i(Es);Uf=s(vl,"This model is also a "),Fs=r(vl,"A",{href:!0,rel:!0});var Xg=i(Fs);Qf=s(Xg,"tf.keras.Model"),Xg.forEach(t),Gf=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),Kf=d(rt),T(Co.$$.fragment,rt),Vf=d(rt),Ge=r(rt,"DIV",{class:!0});var Dt=i(Ge);T(qs.$$.fragment,Dt),Jf=d(Dt),to=r(Dt,"P",{});var wa=i(to);Xf=s(wa,"The "),ta=r(wa,"A",{href:!0});var Yg=i(ta);Yf=s(Yg,"TFDebertaForTokenClassification"),Yg.forEach(t),Zf=s(wa," forward method, overrides the "),Qr=r(wa,"CODE",{});var Zg=i(Qr);em=s(Zg,"__call__"),Zg.forEach(t),tm=s(wa," special method."),wa.forEach(t),om=d(Dt),T(jo.$$.fragment,Dt),nm=d(Dt),Gr=r(Dt,"P",{});var e_=i(Gr);sm=s(e_,"Example:"),e_.forEach(t),am=d(Dt),T(zs.$$.fragment,Dt),Dt.forEach(t),rt.forEach(t),Li=d(o),oo=r(o,"H2",{class:!0});var wl=i(oo);Po=r(wl,"A",{id:!0,class:!0,href:!0});var t_=i(Po);Kr=r(t_,"SPAN",{});var o_=i(Kr);T(Ms.$$.fragment,o_),o_.forEach(t),t_.forEach(t),rm=d(wl),Vr=r(wl,"SPAN",{});var n_=i(Vr);im=s(n_,"TFDebertaForQuestionAnswering"),n_.forEach(t),wl.forEach(t),Ai=d(o),je=r(o,"DIV",{class:!0});var it=i(je);T(Cs.$$.fragment,it),lm=d(it),no=r(it,"P",{});var ya=i(no);dm=s(ya,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jr=r(ya,"CODE",{});var s_=i(Jr);cm=s(s_,"span start logits"),s_.forEach(t),pm=s(ya," and "),Xr=r(ya,"CODE",{});var a_=i(Xr);hm=s(a_,"span end logits"),a_.forEach(t),fm=s(ya,")."),ya.forEach(t),mm=d(it),js=r(it,"P",{});var yl=i(js);um=s(yl,"The DeBERTa model was proposed in "),Ps=r(yl,"A",{href:!0,rel:!0});var r_=i(Ps);gm=s(r_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),r_.forEach(t),_m=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),bm=d(it),Rs=r(it,"P",{});var Dl=i(Rs);km=s(Dl,"This model is also a "),Bs=r(Dl,"A",{href:!0,rel:!0});var i_=i(Bs);Tm=s(i_,"tf.keras.Model"),i_.forEach(t),vm=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),wm=d(it),T(Ro.$$.fragment,it),ym=d(it),Ke=r(it,"DIV",{class:!0});var $t=i(Ke);T(xs.$$.fragment,$t),Dm=d($t),so=r($t,"P",{});var Da=i(so);$m=s(Da,"The "),oa=r(Da,"A",{href:!0});var l_=i(oa);Em=s(l_,"TFDebertaForQuestionAnswering"),l_.forEach(t),Fm=s(Da," forward method, overrides the "),Yr=r(Da,"CODE",{});var d_=i(Yr);qm=s(d_,"__call__"),d_.forEach(t),zm=s(Da," special method."),Da.forEach(t),Mm=d($t),T(Bo.$$.fragment,$t),Cm=d($t),Zr=r($t,"P",{});var c_=i(Zr);jm=s(c_,"Example:"),c_.forEach(t),Pm=d($t),T(Ls.$$.fragment,$t),$t.forEach(t),it.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(j_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(P,"href","https://huggingface.co/DeBERTa"),c(P,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Ns,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Ws,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Hs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Us,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(ao,"id","transformers.DebertaTokenizer"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(dt,"class","docstring"),c(ro,"class","docstring"),c(tt,"class","docstring"),c(Qs,"class","docstring"),c(ze,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(ct,"class","docstring"),c(ot,"class","docstring"),c(Je,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(jt,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Gs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),c(Oe,"class","docstring"),c(Xe,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(Rt,"class","relative group"),c(Bt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(xt,"class","relative group"),c(kn,"href","https://arxiv.org/abs/2006.03654"),c(kn,"rel","nofollow"),c(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vn,"rel","nofollow"),c(Ks,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Se,"class","docstring"),c(Ye,"class","docstring"),c(mo,"id","transformers.DebertaForSequenceClassification"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(Fn,"href","https://arxiv.org/abs/2006.03654"),c(Fn,"rel","nofollow"),c(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zn,"rel","nofollow"),c(Vs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(qe,"class","docstring"),c(Re,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(St,"class","relative group"),c(xn,"href","https://arxiv.org/abs/2006.03654"),c(xn,"rel","nofollow"),c(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(An,"rel","nofollow"),c(Js,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Ne,"class","docstring"),c(Be,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Hn,"href","https://arxiv.org/abs/2006.03654"),c(Hn,"rel","nofollow"),c(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qn,"rel","nofollow"),c(Xs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(We,"class","docstring"),c(xe,"class","docstring"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(Yn,"href","https://arxiv.org/abs/2006.03654"),c(Yn,"rel","nofollow"),c(es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(es,"rel","nofollow"),c(Ys,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),c(He,"class","docstring"),c(Le,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(lt,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(ds,"href","https://arxiv.org/abs/2006.03654"),c(ds,"rel","nofollow"),c(ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ps,"rel","nofollow"),c(Zs,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(_s,"href","https://arxiv.org/abs/2006.03654"),c(_s,"rel","nofollow"),c(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ks,"rel","nofollow"),c(ea,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c($s,"href","https://arxiv.org/abs/2006.03654"),c($s,"rel","nofollow"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(ta,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Ge,"class","docstring"),c(Ce,"class","docstring"),c(Po,"id","transformers.TFDebertaForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Ps,"href","https://arxiv.org/abs/2006.03654"),c(Ps,"rel","nofollow"),c(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bs,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ke,"class","docstring"),c(je,"class","docstring")},m(o,m){e(document.head,h),f(o,q,m),f(o,u,m),e(u,g),e(g,$),v(b,$,null),e(u,_),e(u,F),e(F,he),f(o,X,m),f(o,z,m),e(z,Y),e(Y,A),v(ee,A,null),e(z,fe),e(z,I),e(I,me),f(o,le,m),f(o,N,m),e(N,x),e(N,te),e(te,Z),e(N,M),f(o,j,m),f(o,ne,m),e(ne,W),f(o,de,m),f(o,se,m),e(se,H),f(o,ce,m),f(o,ae,m),e(ae,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),f(o,O,m),f(o,K,m),e(K,be),e(K,P),e(P,ke),e(K,U),e(K,oe),e(oe,p),e(K,E),e(K,V),e(V,$e),e(K,Ee),f(o,B,m),f(o,pe,m),e(pe,Te),e(Te,ye),v(R,ye,null),e(pe,Q),e(pe,De),e(De,Fe),f(o,S,m),f(o,re,m),v(we,re,null),e(re,ve),e(re,ie),e(ie,$l),e(ie,Ns),e(Ns,El),e(ie,Fl),e(ie,Ws),e(Ws,ql),e(ie,zl),e(ie,Ho),e(Ho,Ml),e(ie,Cl),e(re,jl),e(re,Et),e(Et,Pl),e(Et,Hs),e(Hs,Rl),e(Et,Bl),e(Et,Us),e(Us,xl),e(Et,Ll),f(o,pi,m),f(o,Ft,m),e(Ft,ao),e(ao,$a),v(Uo,$a,null),e(Ft,Al),e(Ft,Ea),e(Ea,Il),f(o,hi,m),f(o,ze,m),v(Qo,ze,null),e(ze,Ol),e(ze,Fa),e(Fa,Sl),e(ze,Nl),e(ze,dt),v(Go,dt,null),e(dt,Wl),e(dt,qa),e(qa,Hl),e(dt,Ul),e(dt,Ko),e(Ko,za),e(za,Ql),e(Ko,Gl),e(Ko,Ma),e(Ma,Kl),e(ze,Vl),e(ze,ro),v(Vo,ro,null),e(ro,Jl),e(ro,qt),e(qt,Xl),e(qt,Ca),e(Ca,Yl),e(qt,Zl),e(qt,ja),e(ja,ed),e(qt,td),e(ze,od),e(ze,tt),v(Jo,tt,null),e(tt,nd),e(tt,Pa),e(Pa,sd),e(tt,ad),v(Xo,tt,null),e(tt,rd),e(tt,zt),e(zt,id),e(zt,Ra),e(Ra,ld),e(zt,dd),e(zt,Ba),e(Ba,cd),e(zt,pd),e(ze,hd),e(ze,Qs),v(Yo,Qs,null),f(o,fi,m),f(o,Mt,m),e(Mt,io),e(io,xa),v(Zo,xa,null),e(Mt,fd),e(Mt,La),e(La,md),f(o,mi,m),f(o,Je,m),v(en,Je,null),e(Je,ud),e(Je,tn),e(tn,gd),e(tn,Aa),e(Aa,_d),e(tn,bd),e(Je,kd),e(Je,ct),v(on,ct,null),e(ct,Td),e(ct,Ia),e(Ia,vd),e(ct,wd),e(ct,nn),e(nn,Oa),e(Oa,yd),e(nn,Dd),e(nn,Sa),e(Sa,$d),e(Je,Ed),e(Je,ot),v(sn,ot,null),e(ot,Fd),e(ot,Na),e(Na,qd),e(ot,zd),v(an,ot,null),e(ot,Md),e(ot,Ct),e(Ct,Cd),e(Ct,Wa),e(Wa,jd),e(Ct,Pd),e(Ct,Ha),e(Ha,Rd),e(Ct,Bd),f(o,ui,m),f(o,jt,m),e(jt,lo),e(lo,Ua),v(rn,Ua,null),e(jt,xd),e(jt,Qa),e(Qa,Ld),f(o,gi,m),f(o,Xe,m),v(ln,Xe,null),e(Xe,Ad),e(Xe,dn),e(dn,Id),e(dn,cn),e(cn,Od),e(dn,Sd),e(Xe,Nd),e(Xe,pn),e(pn,Wd),e(pn,hn),e(hn,Hd),e(pn,Ud),e(Xe,Qd),e(Xe,Oe),v(fn,Oe,null),e(Oe,Gd),e(Oe,Pt),e(Pt,Kd),e(Pt,Gs),e(Gs,Vd),e(Pt,Jd),e(Pt,Ga),e(Ga,Xd),e(Pt,Yd),e(Oe,Zd),v(co,Oe,null),e(Oe,ec),e(Oe,Ka),e(Ka,tc),e(Oe,oc),v(mn,Oe,null),f(o,_i,m),f(o,Rt,m),e(Rt,po),e(po,Va),v(un,Va,null),e(Rt,nc),e(Rt,Ja),e(Ja,sc),f(o,bi,m),f(o,Bt,m),v(gn,Bt,null),e(Bt,ac),e(Bt,Xa),e(Xa,rc),f(o,ki,m),f(o,xt,m),e(xt,ho),e(ho,Ya),v(_n,Ya,null),e(xt,ic),e(xt,Za),e(Za,lc),f(o,Ti,m),f(o,Ye,m),v(bn,Ye,null),e(Ye,dc),e(Ye,Lt),e(Lt,cc),e(Lt,er),e(er,pc),e(Lt,hc),e(Lt,kn),e(kn,fc),e(Lt,mc),e(Ye,uc),e(Ye,Tn),e(Tn,gc),e(Tn,vn),e(vn,_c),e(Tn,bc),e(Ye,kc),e(Ye,Se),v(wn,Se,null),e(Se,Tc),e(Se,At),e(At,vc),e(At,Ks),e(Ks,wc),e(At,yc),e(At,tr),e(tr,Dc),e(At,$c),e(Se,Ec),v(fo,Se,null),e(Se,Fc),e(Se,or),e(or,qc),e(Se,zc),v(yn,Se,null),f(o,vi,m),f(o,It,m),e(It,mo),e(mo,nr),v(Dn,nr,null),e(It,Mc),e(It,sr),e(sr,Cc),f(o,wi,m),f(o,Re,m),v($n,Re,null),e(Re,jc),e(Re,ar),e(ar,Pc),e(Re,Rc),e(Re,En),e(En,Bc),e(En,Fn),e(Fn,xc),e(En,Lc),e(Re,Ac),e(Re,qn),e(qn,Ic),e(qn,zn),e(zn,Oc),e(qn,Sc),e(Re,Nc),e(Re,qe),v(Mn,qe,null),e(qe,Wc),e(qe,Ot),e(Ot,Hc),e(Ot,Vs),e(Vs,Uc),e(Ot,Qc),e(Ot,rr),e(rr,Gc),e(Ot,Kc),e(qe,Vc),v(uo,qe,null),e(qe,Jc),e(qe,ir),e(ir,Xc),e(qe,Yc),v(Cn,qe,null),e(qe,Zc),e(qe,lr),e(lr,ep),e(qe,tp),v(jn,qe,null),f(o,yi,m),f(o,St,m),e(St,go),e(go,dr),v(Pn,dr,null),e(St,op),e(St,cr),e(cr,np),f(o,Di,m),f(o,Be,m),v(Rn,Be,null),e(Be,sp),e(Be,pr),e(pr,ap),e(Be,rp),e(Be,Bn),e(Bn,ip),e(Bn,xn),e(xn,lp),e(Bn,dp),e(Be,cp),e(Be,Ln),e(Ln,pp),e(Ln,An),e(An,hp),e(Ln,fp),e(Be,mp),e(Be,Ne),v(In,Ne,null),e(Ne,up),e(Ne,Nt),e(Nt,gp),e(Nt,Js),e(Js,_p),e(Nt,bp),e(Nt,hr),e(hr,kp),e(Nt,Tp),e(Ne,vp),v(_o,Ne,null),e(Ne,wp),e(Ne,fr),e(fr,yp),e(Ne,Dp),v(On,Ne,null),f(o,$i,m),f(o,Wt,m),e(Wt,bo),e(bo,mr),v(Sn,mr,null),e(Wt,$p),e(Wt,ur),e(ur,Ep),f(o,Ei,m),f(o,xe,m),v(Nn,xe,null),e(xe,Fp),e(xe,Ht),e(Ht,qp),e(Ht,gr),e(gr,zp),e(Ht,Mp),e(Ht,_r),e(_r,Cp),e(Ht,jp),e(xe,Pp),e(xe,Wn),e(Wn,Rp),e(Wn,Hn),e(Hn,Bp),e(Wn,xp),e(xe,Lp),e(xe,Un),e(Un,Ap),e(Un,Qn),e(Qn,Ip),e(Un,Op),e(xe,Sp),e(xe,We),v(Gn,We,null),e(We,Np),e(We,Ut),e(Ut,Wp),e(Ut,Xs),e(Xs,Hp),e(Ut,Up),e(Ut,br),e(br,Qp),e(Ut,Gp),e(We,Kp),v(ko,We,null),e(We,Vp),e(We,kr),e(kr,Jp),e(We,Xp),v(Kn,We,null),f(o,Fi,m),f(o,Qt,m),e(Qt,To),e(To,Tr),v(Vn,Tr,null),e(Qt,Yp),e(Qt,vr),e(vr,Zp),f(o,qi,m),f(o,Le,m),v(Jn,Le,null),e(Le,eh),e(Le,Xn),e(Xn,th),e(Xn,Yn),e(Yn,oh),e(Xn,nh),e(Le,sh),e(Le,Zn),e(Zn,ah),e(Zn,es),e(es,rh),e(Zn,ih),e(Le,lh),v(vo,Le,null),e(Le,dh),e(Le,He),v(ts,He,null),e(He,ch),e(He,Gt),e(Gt,ph),e(Gt,Ys),e(Ys,hh),e(Gt,fh),e(Gt,wr),e(wr,mh),e(Gt,uh),e(He,gh),v(wo,He,null),e(He,_h),e(He,yr),e(yr,bh),e(He,kh),v(os,He,null),f(o,zi,m),f(o,Kt,m),e(Kt,yo),e(yo,Dr),v(ns,Dr,null),e(Kt,Th),e(Kt,$r),e($r,vh),f(o,Mi,m),f(o,lt,m),v(ss,lt,null),e(lt,wh),e(lt,Er),e(Er,yh),e(lt,Dh),e(lt,nt),v(as,nt,null),e(nt,$h),e(nt,Fr),e(Fr,Eh),e(nt,Fh),e(nt,rs),e(rs,qh),e(rs,qr),e(qr,zh),e(rs,Mh),e(nt,Ch),e(nt,Ze),e(Ze,jh),e(Ze,zr),e(zr,Ph),e(Ze,Rh),e(Ze,Mr),e(Mr,Bh),e(Ze,xh),e(Ze,Cr),e(Cr,Lh),e(Ze,Ah),e(Ze,jr),e(jr,Ih),e(Ze,Oh),f(o,Ci,m),f(o,Vt,m),e(Vt,Do),e(Do,Pr),v(is,Pr,null),e(Vt,Sh),e(Vt,Rr),e(Rr,Nh),f(o,ji,m),f(o,Ae,m),v(ls,Ae,null),e(Ae,Wh),e(Ae,Jt),e(Jt,Hh),e(Jt,Br),e(Br,Uh),e(Jt,Qh),e(Jt,ds),e(ds,Gh),e(Jt,Kh),e(Ae,Vh),e(Ae,cs),e(cs,Jh),e(cs,ps),e(ps,Xh),e(cs,Yh),e(Ae,Zh),v($o,Ae,null),e(Ae,ef),e(Ae,Ue),v(hs,Ue,null),e(Ue,tf),e(Ue,Xt),e(Xt,of),e(Xt,Zs),e(Zs,nf),e(Xt,sf),e(Xt,xr),e(xr,af),e(Xt,rf),e(Ue,lf),v(Eo,Ue,null),e(Ue,df),e(Ue,Lr),e(Lr,cf),e(Ue,pf),v(fs,Ue,null),f(o,Pi,m),f(o,Yt,m),e(Yt,Fo),e(Fo,Ar),v(ms,Ar,null),e(Yt,hf),e(Yt,Ir),e(Ir,ff),f(o,Ri,m),f(o,Me,m),v(us,Me,null),e(Me,mf),e(Me,Or),e(Or,uf),e(Me,gf),e(Me,gs),e(gs,_f),e(gs,_s),e(_s,bf),e(gs,kf),e(Me,Tf),e(Me,bs),e(bs,vf),e(bs,ks),e(ks,wf),e(bs,yf),e(Me,Df),v(qo,Me,null),e(Me,$f),e(Me,Qe),v(Ts,Qe,null),e(Qe,Ef),e(Qe,Zt),e(Zt,Ff),e(Zt,ea),e(ea,qf),e(Zt,zf),e(Zt,Sr),e(Sr,Mf),e(Zt,Cf),e(Qe,jf),v(zo,Qe,null),e(Qe,Pf),e(Qe,Nr),e(Nr,Rf),e(Qe,Bf),v(vs,Qe,null),f(o,Bi,m),f(o,eo,m),e(eo,Mo),e(Mo,Wr),v(ws,Wr,null),e(eo,xf),e(eo,Hr),e(Hr,Lf),f(o,xi,m),f(o,Ce,m),v(ys,Ce,null),e(Ce,Af),e(Ce,Ur),e(Ur,If),e(Ce,Of),e(Ce,Ds),e(Ds,Sf),e(Ds,$s),e($s,Nf),e(Ds,Wf),e(Ce,Hf),e(Ce,Es),e(Es,Uf),e(Es,Fs),e(Fs,Qf),e(Es,Gf),e(Ce,Kf),v(Co,Ce,null),e(Ce,Vf),e(Ce,Ge),v(qs,Ge,null),e(Ge,Jf),e(Ge,to),e(to,Xf),e(to,ta),e(ta,Yf),e(to,Zf),e(to,Qr),e(Qr,em),e(to,tm),e(Ge,om),v(jo,Ge,null),e(Ge,nm),e(Ge,Gr),e(Gr,sm),e(Ge,am),v(zs,Ge,null),f(o,Li,m),f(o,oo,m),e(oo,Po),e(Po,Kr),v(Ms,Kr,null),e(oo,rm),e(oo,Vr),e(Vr,im),f(o,Ai,m),f(o,je,m),v(Cs,je,null),e(je,lm),e(je,no),e(no,dm),e(no,Jr),e(Jr,cm),e(no,pm),e(no,Xr),e(Xr,hm),e(no,fm),e(je,mm),e(je,js),e(js,um),e(js,Ps),e(Ps,gm),e(js,_m),e(je,bm),e(je,Rs),e(Rs,km),e(Rs,Bs),e(Bs,Tm),e(Rs,vm),e(je,wm),v(Ro,je,null),e(je,ym),e(je,Ke),v(xs,Ke,null),e(Ke,Dm),e(Ke,so),e(so,$m),e(so,oa),e(oa,Em),e(so,Fm),e(so,Yr),e(Yr,qm),e(so,zm),e(Ke,Mm),v(Bo,Ke,null),e(Ke,Cm),e(Ke,Zr),e(Zr,jm),e(Ke,Pm),v(Ls,Ke,null),Ii=!0},p(o,[m]){const As={};m&2&&(As.$$scope={dirty:m,ctx:o}),co.$set(As);const ei={};m&2&&(ei.$$scope={dirty:m,ctx:o}),fo.$set(ei);const ti={};m&2&&(ti.$$scope={dirty:m,ctx:o}),uo.$set(ti);const oi={};m&2&&(oi.$$scope={dirty:m,ctx:o}),_o.$set(oi);const Is={};m&2&&(Is.$$scope={dirty:m,ctx:o}),ko.$set(Is);const ni={};m&2&&(ni.$$scope={dirty:m,ctx:o}),vo.$set(ni);const si={};m&2&&(si.$$scope={dirty:m,ctx:o}),wo.$set(si);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),$o.$set(ai);const Os={};m&2&&(Os.$$scope={dirty:m,ctx:o}),Eo.$set(Os);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),qo.$set(ri);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),zo.$set(ii);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),Co.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),jo.$set(di);const Ss={};m&2&&(Ss.$$scope={dirty:m,ctx:o}),Ro.$set(Ss);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),Bo.$set(ci)},i(o){Ii||(w(b.$$.fragment,o),w(ee.$$.fragment,o),w(R.$$.fragment,o),w(we.$$.fragment,o),w(Uo.$$.fragment,o),w(Qo.$$.fragment,o),w(Go.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(on.$$.fragment,o),w(sn.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(fn.$$.fragment,o),w(co.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(bn.$$.fragment,o),w(wn.$$.fragment,o),w(fo.$$.fragment,o),w(yn.$$.fragment,o),w(Dn.$$.fragment,o),w($n.$$.fragment,o),w(Mn.$$.fragment,o),w(uo.$$.fragment,o),w(Cn.$$.fragment,o),w(jn.$$.fragment,o),w(Pn.$$.fragment,o),w(Rn.$$.fragment,o),w(In.$$.fragment,o),w(_o.$$.fragment,o),w(On.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(Gn.$$.fragment,o),w(ko.$$.fragment,o),w(Kn.$$.fragment,o),w(Vn.$$.fragment,o),w(Jn.$$.fragment,o),w(vo.$$.fragment,o),w(ts.$$.fragment,o),w(wo.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(is.$$.fragment,o),w(ls.$$.fragment,o),w($o.$$.fragment,o),w(hs.$$.fragment,o),w(Eo.$$.fragment,o),w(fs.$$.fragment,o),w(ms.$$.fragment,o),w(us.$$.fragment,o),w(qo.$$.fragment,o),w(Ts.$$.fragment,o),w(zo.$$.fragment,o),w(vs.$$.fragment,o),w(ws.$$.fragment,o),w(ys.$$.fragment,o),w(Co.$$.fragment,o),w(qs.$$.fragment,o),w(jo.$$.fragment,o),w(zs.$$.fragment,o),w(Ms.$$.fragment,o),w(Cs.$$.fragment,o),w(Ro.$$.fragment,o),w(xs.$$.fragment,o),w(Bo.$$.fragment,o),w(Ls.$$.fragment,o),Ii=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(R.$$.fragment,o),y(we.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(fn.$$.fragment,o),y(co.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(wn.$$.fragment,o),y(fo.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(uo.$$.fragment,o),y(Cn.$$.fragment,o),y(jn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(In.$$.fragment,o),y(_o.$$.fragment,o),y(On.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(Gn.$$.fragment,o),y(ko.$$.fragment,o),y(Kn.$$.fragment,o),y(Vn.$$.fragment,o),y(Jn.$$.fragment,o),y(vo.$$.fragment,o),y(ts.$$.fragment,o),y(wo.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y($o.$$.fragment,o),y(hs.$$.fragment,o),y(Eo.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(us.$$.fragment,o),y(qo.$$.fragment,o),y(Ts.$$.fragment,o),y(zo.$$.fragment,o),y(vs.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(Co.$$.fragment,o),y(qs.$$.fragment,o),y(jo.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(Ro.$$.fragment,o),y(xs.$$.fragment,o),y(Bo.$$.fragment,o),y(Ls.$$.fragment,o),Ii=!1},d(o){t(h),o&&t(q),o&&t(u),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(N),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(O),o&&t(K),o&&t(B),o&&t(pe),D(R),o&&t(S),o&&t(re),D(we),o&&t(pi),o&&t(Ft),D(Uo),o&&t(hi),o&&t(ze),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),D(Yo),o&&t(fi),o&&t(Mt),D(Zo),o&&t(mi),o&&t(Je),D(en),D(on),D(sn),D(an),o&&t(ui),o&&t(jt),D(rn),o&&t(gi),o&&t(Xe),D(ln),D(fn),D(co),D(mn),o&&t(_i),o&&t(Rt),D(un),o&&t(bi),o&&t(Bt),D(gn),o&&t(ki),o&&t(xt),D(_n),o&&t(Ti),o&&t(Ye),D(bn),D(wn),D(fo),D(yn),o&&t(vi),o&&t(It),D(Dn),o&&t(wi),o&&t(Re),D($n),D(Mn),D(uo),D(Cn),D(jn),o&&t(yi),o&&t(St),D(Pn),o&&t(Di),o&&t(Be),D(Rn),D(In),D(_o),D(On),o&&t($i),o&&t(Wt),D(Sn),o&&t(Ei),o&&t(xe),D(Nn),D(Gn),D(ko),D(Kn),o&&t(Fi),o&&t(Qt),D(Vn),o&&t(qi),o&&t(Le),D(Jn),D(vo),D(ts),D(wo),D(os),o&&t(zi),o&&t(Kt),D(ns),o&&t(Mi),o&&t(lt),D(ss),D(as),o&&t(Ci),o&&t(Vt),D(is),o&&t(ji),o&&t(Ae),D(ls),D($o),D(hs),D(Eo),D(fs),o&&t(Pi),o&&t(Yt),D(ms),o&&t(Ri),o&&t(Me),D(us),D(qo),D(Ts),D(zo),D(vs),o&&t(Bi),o&&t(eo),D(ws),o&&t(xi),o&&t(Ce),D(ys),D(Co),D(qs),D(jo),D(zs),o&&t(Li),o&&t(oo),D(Ms),o&&t(Ai),o&&t(je),D(Cs),D(Ro),D(xs),D(Bo),D(Ls)}}}const j_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function P_(G){return u_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class I_ extends p_{constructor(h){super();h_(this,h,P_,C_,f_,{})}}export{I_ as default,j_ as metadata};
