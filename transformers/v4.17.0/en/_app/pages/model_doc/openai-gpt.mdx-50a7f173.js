import{S as tm,i as om,s as nm,e as a,k as l,w as b,t as n,M as sm,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as h,y,q as P,o as I,B as O}from"../../chunks/vendor-4833417e.js";import{T as st}from"../../chunks/Tip-fffd6df1.js";import{D as ae}from"../../chunks/Docstring-4f315ed9.js";import{C as it}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Xe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function am(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function rm(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function im(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function lm(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function dm(N){let u,A,m,g,v,T,_,$,he,J,G,X,j,Y,ue,x,fe,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,re,W,_e,te,C,ie,U,Te;return{c(){u=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var k=i(u);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,u,k),e(u,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,ue),e(G,x),e(x,fe),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(u),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function cm(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function pm(N){let u,A,m,g,v,T,_,$,he,J,G,X,j,Y,ue,x,fe,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,re,W,_e,te,C,ie,U,Te;return{c(){u=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var k=i(u);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,u,k),e(u,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,ue),e(G,x),e(x,fe),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(u),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function hm(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function um(N){let u,A,m,g,v,T,_,$,he,J,G,X,j,Y,ue,x,fe,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,re,W,_e,te,C,ie,U,Te;return{c(){u=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var k=i(u);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,u,k),e(u,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,ue),e(G,x),e(x,fe),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(u),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function fm(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function mm(N){let u,A,m,g,v,T,_,$,he,J,G,X,j,Y,ue,x,fe,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,re,W,_e,te,C,ie,U,Te;return{c(){u=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var k=i(u);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,u,k),e(u,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,ue),e(G,x),e(x,fe),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(u),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function gm(N){let u,A,m,g,v;return{c(){u=a("p"),A=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);A=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,A),e(u,m),e(m,g),e(u,v)},d(T){T&&t(u)}}}function _m(N){let u,A,m,g,v,T,_,$,he,J,G,X,j,Y,ue,x,fe,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,re,W,_e,te,C,ie,U,Te,p,k,R,Me,Ee,F,se,ze,ve,D,V,ke,Fe,K,Ae,we,be,$e,Ze,fi,Gs,mi,gi,Ms,_i,Ti,Es,vi,ki,nr,bo,sr,Le,bi,zs,wi,yi,Fs,Pi,Ii,Rn,Oi,Ai,qs,$i,Gi,ar,yt,Rt,Cs,wo,Mi,Ds,Ei,rr,qe,yo,zi,at,Fi,Vn,qi,Ci,Kn,Di,ji,Po,xi,Hi,Si,Pt,Li,Jn,Ni,Bi,Xn,Wi,Ui,Ri,js,Vi,Ki,Io,ir,It,Vt,xs,Oo,Ji,Hs,Xi,lr,Ce,Ao,Qi,Ss,Yi,Zi,$o,Ls,el,tl,rt,ol,Ns,nl,sl,Bs,al,rl,Ws,il,ll,dl,Go,cl,Qn,pl,hl,ul,Yn,Mo,dr,Ot,Kt,Us,Eo,fl,Rs,ml,cr,Qe,zo,gl,Fo,_l,Vs,Tl,vl,kl,qo,Ks,bl,wl,Js,yl,Pl,Co,Il,Zn,Ol,Al,pr,At,Jt,Xs,Do,$l,Qs,Gl,hr,$t,jo,Ml,Ys,El,ur,Gt,xo,zl,Zs,Fl,fr,Mt,Xt,ea,Ho,ql,ta,Cl,mr,De,So,Dl,oa,jl,xl,Lo,Hl,es,Sl,Ll,Nl,No,Bl,Bo,Wl,Ul,Rl,Ne,Wo,Vl,Et,Kl,ts,Jl,Xl,na,Ql,Yl,Zl,Qt,ed,sa,td,od,Uo,gr,zt,Yt,aa,Ro,nd,ra,sd,_r,je,Vo,ad,ia,rd,id,Ko,ld,os,dd,cd,pd,Jo,hd,Xo,ud,fd,md,Be,Qo,gd,Ft,_d,ns,Td,vd,la,kd,bd,wd,Zt,yd,da,Pd,Id,Yo,Tr,qt,eo,ca,Zo,Od,pa,Ad,vr,xe,en,$d,ha,Gd,Md,tn,Ed,ss,zd,Fd,qd,on,Cd,nn,Dd,jd,xd,We,sn,Hd,Ct,Sd,as,Ld,Nd,ua,Bd,Wd,Ud,to,Rd,fa,Vd,Kd,an,kr,Dt,oo,ma,rn,Jd,ga,Xd,br,He,ln,Qd,Se,Yd,rs,Zd,ec,_a,tc,oc,Ta,nc,sc,va,ac,rc,ka,ic,lc,dc,dn,cc,is,pc,hc,uc,cn,fc,pn,mc,gc,_c,ye,hn,Tc,jt,vc,ls,kc,bc,ba,wc,yc,Pc,no,Ic,wa,Oc,Ac,un,$c,ya,Gc,Mc,fn,wr,xt,so,Pa,mn,Ec,Ia,zc,yr,Pe,gn,Fc,Oa,qc,Cc,_n,Dc,ds,jc,xc,Hc,Tn,Sc,vn,Lc,Nc,Bc,ao,Wc,Ue,kn,Uc,Ht,Rc,cs,Vc,Kc,Aa,Jc,Xc,Qc,ro,Yc,$a,Zc,ep,bn,Pr,St,io,Ga,wn,tp,Ma,op,Ir,Ie,yn,np,Ea,sp,ap,Pn,rp,ps,ip,lp,dp,In,cp,On,pp,hp,up,lo,fp,Re,An,mp,Lt,gp,hs,_p,Tp,za,vp,kp,bp,co,wp,Fa,yp,Pp,$n,Or,Nt,po,qa,Gn,Ip,Ca,Op,Ar,Oe,Mn,Ap,Da,$p,Gp,En,Mp,us,Ep,zp,Fp,zn,qp,Fn,Cp,Dp,jp,ho,xp,Ve,qn,Hp,Bt,Sp,fs,Lp,Np,ja,Bp,Wp,Up,uo,Rp,xa,Vp,Kp,Cn,$r,Wt,fo,Ha,Dn,Jp,Sa,Xp,Gr,le,jn,Qp,La,Yp,Zp,ms,gs,eh,th,oh,Ye,nh,Na,sh,ah,Ba,rh,ih,Wa,lh,dh,Ua,ch,ph,hh,xn,uh,_s,fh,mh,gh,Hn,_h,Sn,Th,vh,kh,mo,bh,Ke,Ln,wh,Ut,yh,Ts,Ph,Ih,Ra,Oh,Ah,$h,go,Gh,Va,Mh,Eh,Nn,Mr;return T=new Xe({}),Y=new Xe({}),bo=new it({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Xe({}),yo=new ae({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new it({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Oo=new Xe({}),Ao=new ae({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new ae({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Xe({}),zo=new ae({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Do=new Xe({}),jo=new ae({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),xo=new ae({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L391",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Ho=new Xe({}),So=new ae({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L405",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new st({props:{$$slots:{default:[am]},$$scope:{ctx:N}}}),Uo=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Xe({}),Vo=new ae({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L536",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L551",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new st({props:{$$slots:{default:[rm]},$$scope:{ctx:N}}}),Yo=new it({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Xe({}),en=new ae({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L623",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L641",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new st({props:{$$slots:{default:[im]},$$scope:{ctx:N}}}),an=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")
tokenizer.add_special_tokens(
    {"cls_token": "[CLS]"}
)  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1) - 1, input_ids.size(-1) - 1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens(
<span class="hljs-meta">... </span>    {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Xe({}),ln=new ae({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new st({props:{$$slots:{default:[lm]},$$scope:{ctx:N}}}),un=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),mn=new Xe({}),gn=new ae({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L516",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new st({props:{$$slots:{default:[dm]},$$scope:{ctx:N}}}),kn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L521",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new st({props:{$$slots:{default:[cm]},$$scope:{ctx:N}}}),bn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),wn=new Xe({}),yn=new ae({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L586",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new st({props:{$$slots:{default:[pm]},$$scope:{ctx:N}}}),An=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L597",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new st({props:{$$slots:{default:[hm]},$$scope:{ctx:N}}}),$n=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new Xe({}),Mn=new ae({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L690",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new st({props:{$$slots:{default:[um]},$$scope:{ctx:N}}}),qn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L699",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new st({props:{$$slots:{default:[fm]},$$scope:{ctx:N}}}),Cn=new it({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({"cls_token": "[CLS]"})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"] = tf.constant(
    [inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1]
)[
    None, :
]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>] = tf.constant(
<span class="hljs-meta">... </span>    [inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),Dn=new Xe({}),jn=new ae({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L848",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mo=new st({props:{$$slots:{default:[mm]},$$scope:{ctx:N}}}),Ln=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L860",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new st({props:{$$slots:{default:[gm]},$$scope:{ctx:N}}}),Nn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=a("meta"),A=l(),m=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),$=a("span"),he=n("OpenAI GPT"),J=l(),G=a("h2"),X=a("a"),j=a("span"),b(Y.$$.fragment),ue=l(),x=a("span"),fe=n("Overview"),de=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),B=n("The abstract from the paper is the following:"),ce=l(),ne=a("p"),H=a("em"),me=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),pe=l(),E=a("p"),ge=n("Tips:"),L=l(),Q=a("ul"),re=a("li"),W=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),_e=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=a("em"),U=n("run_generation.py"),Te=n(" example script."),p=l(),k=a("p"),R=a("a"),Me=n("Write With Transformer"),Ee=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),ze=n("This model was contributed by "),ve=a("a"),D=n("thomwolf"),V=n(". The original code can be found "),ke=a("a"),Fe=n("here"),K=n("."),Ae=l(),we=a("p"),be=n("Note:"),$e=l(),Ze=a("p"),fi=n("If you want to reproduce the original tokenization process of the "),Gs=a("em"),mi=n("OpenAI GPT"),gi=n(" paper, you will need to install "),Ms=a("code"),_i=n("ftfy"),Ti=n(`
and `),Es=a("code"),vi=n("SpaCy"),ki=n(":"),nr=l(),b(bo.$$.fragment),sr=l(),Le=a("p"),bi=n("If you don\u2019t install "),zs=a("code"),wi=n("ftfy"),yi=n(" and "),Fs=a("code"),Pi=n("SpaCy"),Ii=n(", the "),Rn=a("a"),Oi=n("OpenAIGPTTokenizer"),Ai=n(` will default to tokenize
using BERT\u2019s `),qs=a("code"),$i=n("BasicTokenizer"),Gi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),ar=l(),yt=a("h2"),Rt=a("a"),Cs=a("span"),b(wo.$$.fragment),Mi=l(),Ds=a("span"),Ei=n("OpenAIGPTConfig"),rr=l(),qe=a("div"),b(yo.$$.fragment),zi=l(),at=a("p"),Fi=n("This is the configuration class to store the configuration of a "),Vn=a("a"),qi=n("OpenAIGPTModel"),Ci=n(" or a "),Kn=a("a"),Di=n("TFOpenAIGPTModel"),ji=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=a("a"),xi=n("GPT"),Hi=n(" architecture from OpenAI."),Si=l(),Pt=a("p"),Li=n("Configuration objects inherit from "),Jn=a("a"),Ni=n("PretrainedConfig"),Bi=n(` and can be used to control the model outputs. Read the
documentation from `),Xn=a("a"),Wi=n("PretrainedConfig"),Ui=n(" for more information."),Ri=l(),js=a("p"),Vi=n("Examples:"),Ki=l(),b(Io.$$.fragment),ir=l(),It=a("h2"),Vt=a("a"),xs=a("span"),b(Oo.$$.fragment),Ji=l(),Hs=a("span"),Xi=n("OpenAIGPTTokenizer"),lr=l(),Ce=a("div"),b(Ao.$$.fragment),Qi=l(),Ss=a("p"),Yi=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Zi=l(),$o=a("ul"),Ls=a("li"),el=n("lowercases all inputs,"),tl=l(),rt=a("li"),ol=n("uses "),Ns=a("code"),nl=n("SpaCy"),sl=n(" tokenizer and "),Bs=a("code"),al=n("ftfy"),rl=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Ws=a("code"),il=n("BasicTokenizer"),ll=n(" if not."),dl=l(),Go=a("p"),cl=n("This tokenizer inherits from "),Qn=a("a"),pl=n("PreTrainedTokenizer"),hl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ul=l(),Yn=a("div"),b(Mo.$$.fragment),dr=l(),Ot=a("h2"),Kt=a("a"),Us=a("span"),b(Eo.$$.fragment),fl=l(),Rs=a("span"),ml=n("OpenAIGPTTokenizerFast"),cr=l(),Qe=a("div"),b(zo.$$.fragment),gl=l(),Fo=a("p"),_l=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Vs=a("em"),Tl=n("tokenizers"),vl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),kl=l(),qo=a("ul"),Ks=a("li"),bl=n("lower case all inputs"),wl=l(),Js=a("li"),yl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Pl=l(),Co=a("p"),Il=n("This tokenizer inherits from "),Zn=a("a"),Ol=n("PreTrainedTokenizerFast"),Al=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),pr=l(),At=a("h2"),Jt=a("a"),Xs=a("span"),b(Do.$$.fragment),$l=l(),Qs=a("span"),Gl=n("OpenAI specific outputs"),hr=l(),$t=a("div"),b(jo.$$.fragment),Ml=l(),Ys=a("p"),El=n("Base class for outputs of models predicting if two sentences are consecutive or not."),ur=l(),Gt=a("div"),b(xo.$$.fragment),zl=l(),Zs=a("p"),Fl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),fr=l(),Mt=a("h2"),Xt=a("a"),ea=a("span"),b(Ho.$$.fragment),ql=l(),ta=a("span"),Cl=n("OpenAIGPTModel"),mr=l(),De=a("div"),b(So.$$.fragment),Dl=l(),oa=a("p"),jl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),xl=l(),Lo=a("p"),Hl=n("This model inherits from "),es=a("a"),Sl=n("PreTrainedModel"),Ll=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),No=a("p"),Bl=n("This model is also a PyTorch "),Bo=a("a"),Wl=n("torch.nn.Module"),Ul=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rl=l(),Ne=a("div"),b(Wo.$$.fragment),Vl=l(),Et=a("p"),Kl=n("The "),ts=a("a"),Jl=n("OpenAIGPTModel"),Xl=n(" forward method, overrides the "),na=a("code"),Ql=n("__call__"),Yl=n(" special method."),Zl=l(),b(Qt.$$.fragment),ed=l(),sa=a("p"),td=n("Example:"),od=l(),b(Uo.$$.fragment),gr=l(),zt=a("h2"),Yt=a("a"),aa=a("span"),b(Ro.$$.fragment),nd=l(),ra=a("span"),sd=n("OpenAIGPTLMHeadModel"),_r=l(),je=a("div"),b(Vo.$$.fragment),ad=l(),ia=a("p"),rd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id=l(),Ko=a("p"),ld=n("This model inherits from "),os=a("a"),dd=n("PreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=l(),Jo=a("p"),hd=n("This model is also a PyTorch "),Xo=a("a"),ud=n("torch.nn.Module"),fd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),md=l(),Be=a("div"),b(Qo.$$.fragment),gd=l(),Ft=a("p"),_d=n("The "),ns=a("a"),Td=n("OpenAIGPTLMHeadModel"),vd=n(" forward method, overrides the "),la=a("code"),kd=n("__call__"),bd=n(" special method."),wd=l(),b(Zt.$$.fragment),yd=l(),da=a("p"),Pd=n("Example:"),Id=l(),b(Yo.$$.fragment),Tr=l(),qt=a("h2"),eo=a("a"),ca=a("span"),b(Zo.$$.fragment),Od=l(),pa=a("span"),Ad=n("OpenAIGPTDoubleHeadsModel"),vr=l(),xe=a("div"),b(en.$$.fragment),$d=l(),ha=a("p"),Gd=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Md=l(),tn=a("p"),Ed=n("This model inherits from "),ss=a("a"),zd=n("PreTrainedModel"),Fd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd=l(),on=a("p"),Cd=n("This model is also a PyTorch "),nn=a("a"),Dd=n("torch.nn.Module"),jd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=l(),We=a("div"),b(sn.$$.fragment),Hd=l(),Ct=a("p"),Sd=n("The "),as=a("a"),Ld=n("OpenAIGPTDoubleHeadsModel"),Nd=n(" forward method, overrides the "),ua=a("code"),Bd=n("__call__"),Wd=n(" special method."),Ud=l(),b(to.$$.fragment),Rd=l(),fa=a("p"),Vd=n("Examples:"),Kd=l(),b(an.$$.fragment),kr=l(),Dt=a("h2"),oo=a("a"),ma=a("span"),b(rn.$$.fragment),Jd=l(),ga=a("span"),Xd=n("OpenAIGPTForSequenceClassification"),br=l(),He=a("div"),b(ln.$$.fragment),Qd=l(),Se=a("p"),Yd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),rs=a("a"),Zd=n("OpenAIGPTForSequenceClassification"),ec=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),_a=a("code"),tc=n("pad_token_id"),oc=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),Ta=a("code"),nc=n("pad_token_id"),sc=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),va=a("code"),ac=n("inputs_embeds"),rc=n(" are passed instead of "),ka=a("code"),ic=n("input_ids"),lc=n(`, it does the same (take
the last value in each row of the batch).`),dc=l(),dn=a("p"),cc=n("This model inherits from "),is=a("a"),pc=n("PreTrainedModel"),hc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc=l(),cn=a("p"),fc=n("This model is also a PyTorch "),pn=a("a"),mc=n("torch.nn.Module"),gc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c=l(),ye=a("div"),b(hn.$$.fragment),Tc=l(),jt=a("p"),vc=n("The "),ls=a("a"),kc=n("OpenAIGPTForSequenceClassification"),bc=n(" forward method, overrides the "),ba=a("code"),wc=n("__call__"),yc=n(" special method."),Pc=l(),b(no.$$.fragment),Ic=l(),wa=a("p"),Oc=n("Example of single-label classification:"),Ac=l(),b(un.$$.fragment),$c=l(),ya=a("p"),Gc=n("Example of multi-label classification:"),Mc=l(),b(fn.$$.fragment),wr=l(),xt=a("h2"),so=a("a"),Pa=a("span"),b(mn.$$.fragment),Ec=l(),Ia=a("span"),zc=n("TFOpenAIGPTModel"),yr=l(),Pe=a("div"),b(gn.$$.fragment),Fc=l(),Oa=a("p"),qc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Cc=l(),_n=a("p"),Dc=n("This model inherits from "),ds=a("a"),jc=n("TFPreTrainedModel"),xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc=l(),Tn=a("p"),Sc=n("This model is also a "),vn=a("a"),Lc=n("tf.keras.Model"),Nc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bc=l(),b(ao.$$.fragment),Wc=l(),Ue=a("div"),b(kn.$$.fragment),Uc=l(),Ht=a("p"),Rc=n("The "),cs=a("a"),Vc=n("TFOpenAIGPTModel"),Kc=n(" forward method, overrides the "),Aa=a("code"),Jc=n("__call__"),Xc=n(" special method."),Qc=l(),b(ro.$$.fragment),Yc=l(),$a=a("p"),Zc=n("Example:"),ep=l(),b(bn.$$.fragment),Pr=l(),St=a("h2"),io=a("a"),Ga=a("span"),b(wn.$$.fragment),tp=l(),Ma=a("span"),op=n("TFOpenAIGPTLMHeadModel"),Ir=l(),Ie=a("div"),b(yn.$$.fragment),np=l(),Ea=a("p"),sp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ap=l(),Pn=a("p"),rp=n("This model inherits from "),ps=a("a"),ip=n("TFPreTrainedModel"),lp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp=l(),In=a("p"),cp=n("This model is also a "),On=a("a"),pp=n("tf.keras.Model"),hp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up=l(),b(lo.$$.fragment),fp=l(),Re=a("div"),b(An.$$.fragment),mp=l(),Lt=a("p"),gp=n("The "),hs=a("a"),_p=n("TFOpenAIGPTLMHeadModel"),Tp=n(" forward method, overrides the "),za=a("code"),vp=n("__call__"),kp=n(" special method."),bp=l(),b(co.$$.fragment),wp=l(),Fa=a("p"),yp=n("Example:"),Pp=l(),b($n.$$.fragment),Or=l(),Nt=a("h2"),po=a("a"),qa=a("span"),b(Gn.$$.fragment),Ip=l(),Ca=a("span"),Op=n("TFOpenAIGPTDoubleHeadsModel"),Ar=l(),Oe=a("div"),b(Mn.$$.fragment),Ap=l(),Da=a("p"),$p=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Gp=l(),En=a("p"),Mp=n("This model inherits from "),us=a("a"),Ep=n("TFPreTrainedModel"),zp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp=l(),zn=a("p"),qp=n("This model is also a "),Fn=a("a"),Cp=n("tf.keras.Model"),Dp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jp=l(),b(ho.$$.fragment),xp=l(),Ve=a("div"),b(qn.$$.fragment),Hp=l(),Bt=a("p"),Sp=n("The "),fs=a("a"),Lp=n("TFOpenAIGPTDoubleHeadsModel"),Np=n(" forward method, overrides the "),ja=a("code"),Bp=n("__call__"),Wp=n(" special method."),Up=l(),b(uo.$$.fragment),Rp=l(),xa=a("p"),Vp=n("Examples:"),Kp=l(),b(Cn.$$.fragment),$r=l(),Wt=a("h2"),fo=a("a"),Ha=a("span"),b(Dn.$$.fragment),Jp=l(),Sa=a("span"),Xp=n("TFOpenAIGPTForSequenceClassification"),Gr=l(),le=a("div"),b(jn.$$.fragment),Qp=l(),La=a("p"),Yp=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Zp=l(),ms=a("p"),gs=a("a"),eh=n("TFOpenAIGPTForSequenceClassification"),th=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),oh=l(),Ye=a("p"),nh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=a("code"),sh=n("pad_token_id"),ah=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=a("code"),rh=n("pad_token_id"),ih=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=a("code"),lh=n("inputs_embeds"),dh=n(" are passed instead of "),Ua=a("code"),ch=n("input_ids"),ph=n(`, it does the same (take the last value in
each row of the batch).`),hh=l(),xn=a("p"),uh=n("This model inherits from "),_s=a("a"),fh=n("TFPreTrainedModel"),mh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=l(),Hn=a("p"),_h=n("This model is also a "),Sn=a("a"),Th=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh=l(),b(mo.$$.fragment),bh=l(),Ke=a("div"),b(Ln.$$.fragment),wh=l(),Ut=a("p"),yh=n("The "),Ts=a("a"),Ph=n("TFOpenAIGPTForSequenceClassification"),Ih=n(" forward method, overrides the "),Ra=a("code"),Oh=n("__call__"),Ah=n(" special method."),$h=l(),b(go.$$.fragment),Gh=l(),Va=a("p"),Mh=n("Example:"),Eh=l(),b(Nn.$$.fragment),this.h()},l(o){const f=sm('[data-svelte="svelte-1phssyn"]',document.head);u=r(f,"META",{name:!0,content:!0}),f.forEach(t),A=d(o),m=r(o,"H1",{class:!0});var Bn=i(m);g=r(Bn,"A",{id:!0,class:!0,href:!0});var Ka=i(g);v=r(Ka,"SPAN",{});var Ja=i(v);w(T.$$.fragment,Ja),Ja.forEach(t),Ka.forEach(t),_=d(Bn),$=r(Bn,"SPAN",{});var Xa=i($);he=s(Xa,"OpenAI GPT"),Xa.forEach(t),Bn.forEach(t),J=d(o),G=r(o,"H2",{class:!0});var Wn=i(G);X=r(Wn,"A",{id:!0,class:!0,href:!0});var Qa=i(X);j=r(Qa,"SPAN",{});var Ya=i(j);w(Y.$$.fragment,Ya),Ya.forEach(t),Qa.forEach(t),ue=d(Wn),x=r(Wn,"SPAN",{});var Za=i(x);fe=s(Za,"Overview"),Za.forEach(t),Wn.forEach(t),de=d(o),S=r(o,"P",{});var Un=i(S);q=s(Un,"OpenAI GPT model was proposed in "),Z=r(Un,"A",{href:!0,rel:!0});var er=i(Z);ee=s(er,"Improving Language Understanding by Generative Pre-Training"),er.forEach(t),M=s(Un,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Un.forEach(t),z=d(o),oe=r(o,"P",{});var tr=i(oe);B=s(tr,"The abstract from the paper is the following:"),tr.forEach(t),ce=d(o),ne=r(o,"P",{});var or=i(ne);H=r(or,"EM",{});var qh=i(H);me=s(qh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),qh.forEach(t),or.forEach(t),pe=d(o),E=r(o,"P",{});var Ch=i(E);ge=s(Ch,"Tips:"),Ch.forEach(t),L=d(o),Q=r(o,"UL",{});var Er=i(Q);re=r(Er,"LI",{});var Dh=i(re);W=s(Dh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Dh.forEach(t),_e=d(Er),te=r(Er,"LI",{});var zr=i(te);C=s(zr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=r(zr,"EM",{});var jh=i(ie);U=s(jh,"run_generation.py"),jh.forEach(t),Te=s(zr," example script."),zr.forEach(t),Er.forEach(t),p=d(o),k=r(o,"P",{});var zh=i(k);R=r(zh,"A",{href:!0,rel:!0});var xh=i(R);Me=s(xh,"Write With Transformer"),xh.forEach(t),Ee=s(zh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),zh.forEach(t),F=d(o),se=r(o,"P",{});var vs=i(se);ze=s(vs,"This model was contributed by "),ve=r(vs,"A",{href:!0,rel:!0});var Hh=i(ve);D=s(Hh,"thomwolf"),Hh.forEach(t),V=s(vs,". The original code can be found "),ke=r(vs,"A",{href:!0,rel:!0});var Sh=i(ke);Fe=s(Sh,"here"),Sh.forEach(t),K=s(vs,"."),vs.forEach(t),Ae=d(o),we=r(o,"P",{});var Lh=i(we);be=s(Lh,"Note:"),Lh.forEach(t),$e=d(o),Ze=r(o,"P",{});var _o=i(Ze);fi=s(_o,"If you want to reproduce the original tokenization process of the "),Gs=r(_o,"EM",{});var Nh=i(Gs);mi=s(Nh,"OpenAI GPT"),Nh.forEach(t),gi=s(_o," paper, you will need to install "),Ms=r(_o,"CODE",{});var Bh=i(Ms);_i=s(Bh,"ftfy"),Bh.forEach(t),Ti=s(_o,`
and `),Es=r(_o,"CODE",{});var Wh=i(Es);vi=s(Wh,"SpaCy"),Wh.forEach(t),ki=s(_o,":"),_o.forEach(t),nr=d(o),w(bo.$$.fragment,o),sr=d(o),Le=r(o,"P",{});var lt=i(Le);bi=s(lt,"If you don\u2019t install "),zs=r(lt,"CODE",{});var Uh=i(zs);wi=s(Uh,"ftfy"),Uh.forEach(t),yi=s(lt," and "),Fs=r(lt,"CODE",{});var Rh=i(Fs);Pi=s(Rh,"SpaCy"),Rh.forEach(t),Ii=s(lt,", the "),Rn=r(lt,"A",{href:!0});var Vh=i(Rn);Oi=s(Vh,"OpenAIGPTTokenizer"),Vh.forEach(t),Ai=s(lt,` will default to tokenize
using BERT\u2019s `),qs=r(lt,"CODE",{});var Kh=i(qs);$i=s(Kh,"BasicTokenizer"),Kh.forEach(t),Gi=s(lt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lt.forEach(t),ar=d(o),yt=r(o,"H2",{class:!0});var Fr=i(yt);Rt=r(Fr,"A",{id:!0,class:!0,href:!0});var Jh=i(Rt);Cs=r(Jh,"SPAN",{});var Xh=i(Cs);w(wo.$$.fragment,Xh),Xh.forEach(t),Jh.forEach(t),Mi=d(Fr),Ds=r(Fr,"SPAN",{});var Qh=i(Ds);Ei=s(Qh,"OpenAIGPTConfig"),Qh.forEach(t),Fr.forEach(t),rr=d(o),qe=r(o,"DIV",{class:!0});var dt=i(qe);w(yo.$$.fragment,dt),zi=d(dt),at=r(dt,"P",{});var To=i(at);Fi=s(To,"This is the configuration class to store the configuration of a "),Vn=r(To,"A",{href:!0});var Yh=i(Vn);qi=s(Yh,"OpenAIGPTModel"),Yh.forEach(t),Ci=s(To," or a "),Kn=r(To,"A",{href:!0});var Zh=i(Kn);Di=s(Zh,"TFOpenAIGPTModel"),Zh.forEach(t),ji=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=r(To,"A",{href:!0,rel:!0});var eu=i(Po);xi=s(eu,"GPT"),eu.forEach(t),Hi=s(To," architecture from OpenAI."),To.forEach(t),Si=d(dt),Pt=r(dt,"P",{});var ks=i(Pt);Li=s(ks,"Configuration objects inherit from "),Jn=r(ks,"A",{href:!0});var tu=i(Jn);Ni=s(tu,"PretrainedConfig"),tu.forEach(t),Bi=s(ks,` and can be used to control the model outputs. Read the
documentation from `),Xn=r(ks,"A",{href:!0});var ou=i(Xn);Wi=s(ou,"PretrainedConfig"),ou.forEach(t),Ui=s(ks," for more information."),ks.forEach(t),Ri=d(dt),js=r(dt,"P",{});var nu=i(js);Vi=s(nu,"Examples:"),nu.forEach(t),Ki=d(dt),w(Io.$$.fragment,dt),dt.forEach(t),ir=d(o),It=r(o,"H2",{class:!0});var qr=i(It);Vt=r(qr,"A",{id:!0,class:!0,href:!0});var su=i(Vt);xs=r(su,"SPAN",{});var au=i(xs);w(Oo.$$.fragment,au),au.forEach(t),su.forEach(t),Ji=d(qr),Hs=r(qr,"SPAN",{});var ru=i(Hs);Xi=s(ru,"OpenAIGPTTokenizer"),ru.forEach(t),qr.forEach(t),lr=d(o),Ce=r(o,"DIV",{class:!0});var ct=i(Ce);w(Ao.$$.fragment,ct),Qi=d(ct),Ss=r(ct,"P",{});var iu=i(Ss);Yi=s(iu,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),iu.forEach(t),Zi=d(ct),$o=r(ct,"UL",{});var Cr=i($o);Ls=r(Cr,"LI",{});var lu=i(Ls);el=s(lu,"lowercases all inputs,"),lu.forEach(t),tl=d(Cr),rt=r(Cr,"LI",{});var vo=i(rt);ol=s(vo,"uses "),Ns=r(vo,"CODE",{});var du=i(Ns);nl=s(du,"SpaCy"),du.forEach(t),sl=s(vo," tokenizer and "),Bs=r(vo,"CODE",{});var cu=i(Bs);al=s(cu,"ftfy"),cu.forEach(t),rl=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Ws=r(vo,"CODE",{});var pu=i(Ws);il=s(pu,"BasicTokenizer"),pu.forEach(t),ll=s(vo," if not."),vo.forEach(t),Cr.forEach(t),dl=d(ct),Go=r(ct,"P",{});var Dr=i(Go);cl=s(Dr,"This tokenizer inherits from "),Qn=r(Dr,"A",{href:!0});var hu=i(Qn);pl=s(hu,"PreTrainedTokenizer"),hu.forEach(t),hl=s(Dr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dr.forEach(t),ul=d(ct),Yn=r(ct,"DIV",{class:!0});var uu=i(Yn);w(Mo.$$.fragment,uu),uu.forEach(t),ct.forEach(t),dr=d(o),Ot=r(o,"H2",{class:!0});var jr=i(Ot);Kt=r(jr,"A",{id:!0,class:!0,href:!0});var fu=i(Kt);Us=r(fu,"SPAN",{});var mu=i(Us);w(Eo.$$.fragment,mu),mu.forEach(t),fu.forEach(t),fl=d(jr),Rs=r(jr,"SPAN",{});var gu=i(Rs);ml=s(gu,"OpenAIGPTTokenizerFast"),gu.forEach(t),jr.forEach(t),cr=d(o),Qe=r(o,"DIV",{class:!0});var ko=i(Qe);w(zo.$$.fragment,ko),gl=d(ko),Fo=r(ko,"P",{});var xr=i(Fo);_l=s(xr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Vs=r(xr,"EM",{});var _u=i(Vs);Tl=s(_u,"tokenizers"),_u.forEach(t),vl=s(xr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),xr.forEach(t),kl=d(ko),qo=r(ko,"UL",{});var Hr=i(qo);Ks=r(Hr,"LI",{});var Tu=i(Ks);bl=s(Tu,"lower case all inputs"),Tu.forEach(t),wl=d(Hr),Js=r(Hr,"LI",{});var vu=i(Js);yl=s(vu,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),vu.forEach(t),Hr.forEach(t),Pl=d(ko),Co=r(ko,"P",{});var Sr=i(Co);Il=s(Sr,"This tokenizer inherits from "),Zn=r(Sr,"A",{href:!0});var ku=i(Zn);Ol=s(ku,"PreTrainedTokenizerFast"),ku.forEach(t),Al=s(Sr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Sr.forEach(t),ko.forEach(t),pr=d(o),At=r(o,"H2",{class:!0});var Lr=i(At);Jt=r(Lr,"A",{id:!0,class:!0,href:!0});var bu=i(Jt);Xs=r(bu,"SPAN",{});var wu=i(Xs);w(Do.$$.fragment,wu),wu.forEach(t),bu.forEach(t),$l=d(Lr),Qs=r(Lr,"SPAN",{});var yu=i(Qs);Gl=s(yu,"OpenAI specific outputs"),yu.forEach(t),Lr.forEach(t),hr=d(o),$t=r(o,"DIV",{class:!0});var Nr=i($t);w(jo.$$.fragment,Nr),Ml=d(Nr),Ys=r(Nr,"P",{});var Pu=i(Ys);El=s(Pu,"Base class for outputs of models predicting if two sentences are consecutive or not."),Pu.forEach(t),Nr.forEach(t),ur=d(o),Gt=r(o,"DIV",{class:!0});var Br=i(Gt);w(xo.$$.fragment,Br),zl=d(Br),Zs=r(Br,"P",{});var Iu=i(Zs);Fl=s(Iu,"Base class for outputs of models predicting if two sentences are consecutive or not."),Iu.forEach(t),Br.forEach(t),fr=d(o),Mt=r(o,"H2",{class:!0});var Wr=i(Mt);Xt=r(Wr,"A",{id:!0,class:!0,href:!0});var Ou=i(Xt);ea=r(Ou,"SPAN",{});var Au=i(ea);w(Ho.$$.fragment,Au),Au.forEach(t),Ou.forEach(t),ql=d(Wr),ta=r(Wr,"SPAN",{});var $u=i(ta);Cl=s($u,"OpenAIGPTModel"),$u.forEach(t),Wr.forEach(t),mr=d(o),De=r(o,"DIV",{class:!0});var pt=i(De);w(So.$$.fragment,pt),Dl=d(pt),oa=r(pt,"P",{});var Gu=i(oa);jl=s(Gu,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Gu.forEach(t),xl=d(pt),Lo=r(pt,"P",{});var Ur=i(Lo);Hl=s(Ur,"This model inherits from "),es=r(Ur,"A",{href:!0});var Mu=i(es);Sl=s(Mu,"PreTrainedModel"),Mu.forEach(t),Ll=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),Nl=d(pt),No=r(pt,"P",{});var Rr=i(No);Bl=s(Rr,"This model is also a PyTorch "),Bo=r(Rr,"A",{href:!0,rel:!0});var Eu=i(Bo);Wl=s(Eu,"torch.nn.Module"),Eu.forEach(t),Ul=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),Rl=d(pt),Ne=r(pt,"DIV",{class:!0});var ht=i(Ne);w(Wo.$$.fragment,ht),Vl=d(ht),Et=r(ht,"P",{});var bs=i(Et);Kl=s(bs,"The "),ts=r(bs,"A",{href:!0});var zu=i(ts);Jl=s(zu,"OpenAIGPTModel"),zu.forEach(t),Xl=s(bs," forward method, overrides the "),na=r(bs,"CODE",{});var Fu=i(na);Ql=s(Fu,"__call__"),Fu.forEach(t),Yl=s(bs," special method."),bs.forEach(t),Zl=d(ht),w(Qt.$$.fragment,ht),ed=d(ht),sa=r(ht,"P",{});var qu=i(sa);td=s(qu,"Example:"),qu.forEach(t),od=d(ht),w(Uo.$$.fragment,ht),ht.forEach(t),pt.forEach(t),gr=d(o),zt=r(o,"H2",{class:!0});var Vr=i(zt);Yt=r(Vr,"A",{id:!0,class:!0,href:!0});var Cu=i(Yt);aa=r(Cu,"SPAN",{});var Du=i(aa);w(Ro.$$.fragment,Du),Du.forEach(t),Cu.forEach(t),nd=d(Vr),ra=r(Vr,"SPAN",{});var ju=i(ra);sd=s(ju,"OpenAIGPTLMHeadModel"),ju.forEach(t),Vr.forEach(t),_r=d(o),je=r(o,"DIV",{class:!0});var ut=i(je);w(Vo.$$.fragment,ut),ad=d(ut),ia=r(ut,"P",{});var xu=i(ia);rd=s(xu,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),xu.forEach(t),id=d(ut),Ko=r(ut,"P",{});var Kr=i(Ko);ld=s(Kr,"This model inherits from "),os=r(Kr,"A",{href:!0});var Hu=i(os);dd=s(Hu,"PreTrainedModel"),Hu.forEach(t),cd=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),pd=d(ut),Jo=r(ut,"P",{});var Jr=i(Jo);hd=s(Jr,"This model is also a PyTorch "),Xo=r(Jr,"A",{href:!0,rel:!0});var Su=i(Xo);ud=s(Su,"torch.nn.Module"),Su.forEach(t),fd=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),md=d(ut),Be=r(ut,"DIV",{class:!0});var ft=i(Be);w(Qo.$$.fragment,ft),gd=d(ft),Ft=r(ft,"P",{});var ws=i(Ft);_d=s(ws,"The "),ns=r(ws,"A",{href:!0});var Lu=i(ns);Td=s(Lu,"OpenAIGPTLMHeadModel"),Lu.forEach(t),vd=s(ws," forward method, overrides the "),la=r(ws,"CODE",{});var Nu=i(la);kd=s(Nu,"__call__"),Nu.forEach(t),bd=s(ws," special method."),ws.forEach(t),wd=d(ft),w(Zt.$$.fragment,ft),yd=d(ft),da=r(ft,"P",{});var Bu=i(da);Pd=s(Bu,"Example:"),Bu.forEach(t),Id=d(ft),w(Yo.$$.fragment,ft),ft.forEach(t),ut.forEach(t),Tr=d(o),qt=r(o,"H2",{class:!0});var Xr=i(qt);eo=r(Xr,"A",{id:!0,class:!0,href:!0});var Wu=i(eo);ca=r(Wu,"SPAN",{});var Uu=i(ca);w(Zo.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),Od=d(Xr),pa=r(Xr,"SPAN",{});var Ru=i(pa);Ad=s(Ru,"OpenAIGPTDoubleHeadsModel"),Ru.forEach(t),Xr.forEach(t),vr=d(o),xe=r(o,"DIV",{class:!0});var mt=i(xe);w(en.$$.fragment,mt),$d=d(mt),ha=r(mt,"P",{});var Vu=i(ha);Gd=s(Vu,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Vu.forEach(t),Md=d(mt),tn=r(mt,"P",{});var Qr=i(tn);Ed=s(Qr,"This model inherits from "),ss=r(Qr,"A",{href:!0});var Ku=i(ss);zd=s(Ku,"PreTrainedModel"),Ku.forEach(t),Fd=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),qd=d(mt),on=r(mt,"P",{});var Yr=i(on);Cd=s(Yr,"This model is also a PyTorch "),nn=r(Yr,"A",{href:!0,rel:!0});var Ju=i(nn);Dd=s(Ju,"torch.nn.Module"),Ju.forEach(t),jd=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(t),xd=d(mt),We=r(mt,"DIV",{class:!0});var gt=i(We);w(sn.$$.fragment,gt),Hd=d(gt),Ct=r(gt,"P",{});var ys=i(Ct);Sd=s(ys,"The "),as=r(ys,"A",{href:!0});var Xu=i(as);Ld=s(Xu,"OpenAIGPTDoubleHeadsModel"),Xu.forEach(t),Nd=s(ys," forward method, overrides the "),ua=r(ys,"CODE",{});var Qu=i(ua);Bd=s(Qu,"__call__"),Qu.forEach(t),Wd=s(ys," special method."),ys.forEach(t),Ud=d(gt),w(to.$$.fragment,gt),Rd=d(gt),fa=r(gt,"P",{});var Yu=i(fa);Vd=s(Yu,"Examples:"),Yu.forEach(t),Kd=d(gt),w(an.$$.fragment,gt),gt.forEach(t),mt.forEach(t),kr=d(o),Dt=r(o,"H2",{class:!0});var Zr=i(Dt);oo=r(Zr,"A",{id:!0,class:!0,href:!0});var Zu=i(oo);ma=r(Zu,"SPAN",{});var ef=i(ma);w(rn.$$.fragment,ef),ef.forEach(t),Zu.forEach(t),Jd=d(Zr),ga=r(Zr,"SPAN",{});var tf=i(ga);Xd=s(tf,"OpenAIGPTForSequenceClassification"),tf.forEach(t),Zr.forEach(t),br=d(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(ln.$$.fragment,_t),Qd=d(_t),Se=r(_t,"P",{});var et=i(Se);Yd=s(et,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),rs=r(et,"A",{href:!0});var of=i(rs);Zd=s(of,"OpenAIGPTForSequenceClassification"),of.forEach(t),ec=s(et,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),_a=r(et,"CODE",{});var nf=i(_a);tc=s(nf,"pad_token_id"),nf.forEach(t),oc=s(et,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),Ta=r(et,"CODE",{});var sf=i(Ta);nc=s(sf,"pad_token_id"),sf.forEach(t),sc=s(et,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),va=r(et,"CODE",{});var af=i(va);ac=s(af,"inputs_embeds"),af.forEach(t),rc=s(et," are passed instead of "),ka=r(et,"CODE",{});var rf=i(ka);ic=s(rf,"input_ids"),rf.forEach(t),lc=s(et,`, it does the same (take
the last value in each row of the batch).`),et.forEach(t),dc=d(_t),dn=r(_t,"P",{});var ei=i(dn);cc=s(ei,"This model inherits from "),is=r(ei,"A",{href:!0});var lf=i(is);pc=s(lf,"PreTrainedModel"),lf.forEach(t),hc=s(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),uc=d(_t),cn=r(_t,"P",{});var ti=i(cn);fc=s(ti,"This model is also a PyTorch "),pn=r(ti,"A",{href:!0,rel:!0});var df=i(pn);mc=s(df,"torch.nn.Module"),df.forEach(t),gc=s(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),_c=d(_t),ye=r(_t,"DIV",{class:!0});var Je=i(ye);w(hn.$$.fragment,Je),Tc=d(Je),jt=r(Je,"P",{});var Ps=i(jt);vc=s(Ps,"The "),ls=r(Ps,"A",{href:!0});var cf=i(ls);kc=s(cf,"OpenAIGPTForSequenceClassification"),cf.forEach(t),bc=s(Ps," forward method, overrides the "),ba=r(Ps,"CODE",{});var pf=i(ba);wc=s(pf,"__call__"),pf.forEach(t),yc=s(Ps," special method."),Ps.forEach(t),Pc=d(Je),w(no.$$.fragment,Je),Ic=d(Je),wa=r(Je,"P",{});var hf=i(wa);Oc=s(hf,"Example of single-label classification:"),hf.forEach(t),Ac=d(Je),w(un.$$.fragment,Je),$c=d(Je),ya=r(Je,"P",{});var uf=i(ya);Gc=s(uf,"Example of multi-label classification:"),uf.forEach(t),Mc=d(Je),w(fn.$$.fragment,Je),Je.forEach(t),_t.forEach(t),wr=d(o),xt=r(o,"H2",{class:!0});var oi=i(xt);so=r(oi,"A",{id:!0,class:!0,href:!0});var ff=i(so);Pa=r(ff,"SPAN",{});var mf=i(Pa);w(mn.$$.fragment,mf),mf.forEach(t),ff.forEach(t),Ec=d(oi),Ia=r(oi,"SPAN",{});var gf=i(Ia);zc=s(gf,"TFOpenAIGPTModel"),gf.forEach(t),oi.forEach(t),yr=d(o),Pe=r(o,"DIV",{class:!0});var tt=i(Pe);w(gn.$$.fragment,tt),Fc=d(tt),Oa=r(tt,"P",{});var _f=i(Oa);qc=s(_f,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),_f.forEach(t),Cc=d(tt),_n=r(tt,"P",{});var ni=i(_n);Dc=s(ni,"This model inherits from "),ds=r(ni,"A",{href:!0});var Tf=i(ds);jc=s(Tf,"TFPreTrainedModel"),Tf.forEach(t),xc=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),Hc=d(tt),Tn=r(tt,"P",{});var si=i(Tn);Sc=s(si,"This model is also a "),vn=r(si,"A",{href:!0,rel:!0});var vf=i(vn);Lc=s(vf,"tf.keras.Model"),vf.forEach(t),Nc=s(si,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),si.forEach(t),Bc=d(tt),w(ao.$$.fragment,tt),Wc=d(tt),Ue=r(tt,"DIV",{class:!0});var Tt=i(Ue);w(kn.$$.fragment,Tt),Uc=d(Tt),Ht=r(Tt,"P",{});var Is=i(Ht);Rc=s(Is,"The "),cs=r(Is,"A",{href:!0});var kf=i(cs);Vc=s(kf,"TFOpenAIGPTModel"),kf.forEach(t),Kc=s(Is," forward method, overrides the "),Aa=r(Is,"CODE",{});var bf=i(Aa);Jc=s(bf,"__call__"),bf.forEach(t),Xc=s(Is," special method."),Is.forEach(t),Qc=d(Tt),w(ro.$$.fragment,Tt),Yc=d(Tt),$a=r(Tt,"P",{});var wf=i($a);Zc=s(wf,"Example:"),wf.forEach(t),ep=d(Tt),w(bn.$$.fragment,Tt),Tt.forEach(t),tt.forEach(t),Pr=d(o),St=r(o,"H2",{class:!0});var ai=i(St);io=r(ai,"A",{id:!0,class:!0,href:!0});var yf=i(io);Ga=r(yf,"SPAN",{});var Pf=i(Ga);w(wn.$$.fragment,Pf),Pf.forEach(t),yf.forEach(t),tp=d(ai),Ma=r(ai,"SPAN",{});var If=i(Ma);op=s(If,"TFOpenAIGPTLMHeadModel"),If.forEach(t),ai.forEach(t),Ir=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);w(yn.$$.fragment,ot),np=d(ot),Ea=r(ot,"P",{});var Of=i(Ea);sp=s(Of,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Of.forEach(t),ap=d(ot),Pn=r(ot,"P",{});var ri=i(Pn);rp=s(ri,"This model inherits from "),ps=r(ri,"A",{href:!0});var Af=i(ps);ip=s(Af,"TFPreTrainedModel"),Af.forEach(t),lp=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),dp=d(ot),In=r(ot,"P",{});var ii=i(In);cp=s(ii,"This model is also a "),On=r(ii,"A",{href:!0,rel:!0});var $f=i(On);pp=s($f,"tf.keras.Model"),$f.forEach(t),hp=s(ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ii.forEach(t),up=d(ot),w(lo.$$.fragment,ot),fp=d(ot),Re=r(ot,"DIV",{class:!0});var vt=i(Re);w(An.$$.fragment,vt),mp=d(vt),Lt=r(vt,"P",{});var Os=i(Lt);gp=s(Os,"The "),hs=r(Os,"A",{href:!0});var Gf=i(hs);_p=s(Gf,"TFOpenAIGPTLMHeadModel"),Gf.forEach(t),Tp=s(Os," forward method, overrides the "),za=r(Os,"CODE",{});var Mf=i(za);vp=s(Mf,"__call__"),Mf.forEach(t),kp=s(Os," special method."),Os.forEach(t),bp=d(vt),w(co.$$.fragment,vt),wp=d(vt),Fa=r(vt,"P",{});var Ef=i(Fa);yp=s(Ef,"Example:"),Ef.forEach(t),Pp=d(vt),w($n.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Or=d(o),Nt=r(o,"H2",{class:!0});var li=i(Nt);po=r(li,"A",{id:!0,class:!0,href:!0});var zf=i(po);qa=r(zf,"SPAN",{});var Ff=i(qa);w(Gn.$$.fragment,Ff),Ff.forEach(t),zf.forEach(t),Ip=d(li),Ca=r(li,"SPAN",{});var qf=i(Ca);Op=s(qf,"TFOpenAIGPTDoubleHeadsModel"),qf.forEach(t),li.forEach(t),Ar=d(o),Oe=r(o,"DIV",{class:!0});var nt=i(Oe);w(Mn.$$.fragment,nt),Ap=d(nt),Da=r(nt,"P",{});var Cf=i(Da);$p=s(Cf,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Cf.forEach(t),Gp=d(nt),En=r(nt,"P",{});var di=i(En);Mp=s(di,"This model inherits from "),us=r(di,"A",{href:!0});var Df=i(us);Ep=s(Df,"TFPreTrainedModel"),Df.forEach(t),zp=s(di,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di.forEach(t),Fp=d(nt),zn=r(nt,"P",{});var ci=i(zn);qp=s(ci,"This model is also a "),Fn=r(ci,"A",{href:!0,rel:!0});var jf=i(Fn);Cp=s(jf,"tf.keras.Model"),jf.forEach(t),Dp=s(ci,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ci.forEach(t),jp=d(nt),w(ho.$$.fragment,nt),xp=d(nt),Ve=r(nt,"DIV",{class:!0});var kt=i(Ve);w(qn.$$.fragment,kt),Hp=d(kt),Bt=r(kt,"P",{});var As=i(Bt);Sp=s(As,"The "),fs=r(As,"A",{href:!0});var xf=i(fs);Lp=s(xf,"TFOpenAIGPTDoubleHeadsModel"),xf.forEach(t),Np=s(As," forward method, overrides the "),ja=r(As,"CODE",{});var Hf=i(ja);Bp=s(Hf,"__call__"),Hf.forEach(t),Wp=s(As," special method."),As.forEach(t),Up=d(kt),w(uo.$$.fragment,kt),Rp=d(kt),xa=r(kt,"P",{});var Sf=i(xa);Vp=s(Sf,"Examples:"),Sf.forEach(t),Kp=d(kt),w(Cn.$$.fragment,kt),kt.forEach(t),nt.forEach(t),$r=d(o),Wt=r(o,"H2",{class:!0});var pi=i(Wt);fo=r(pi,"A",{id:!0,class:!0,href:!0});var Lf=i(fo);Ha=r(Lf,"SPAN",{});var Nf=i(Ha);w(Dn.$$.fragment,Nf),Nf.forEach(t),Lf.forEach(t),Jp=d(pi),Sa=r(pi,"SPAN",{});var Bf=i(Sa);Xp=s(Bf,"TFOpenAIGPTForSequenceClassification"),Bf.forEach(t),pi.forEach(t),Gr=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);w(jn.$$.fragment,Ge),Qp=d(Ge),La=r(Ge,"P",{});var Wf=i(La);Yp=s(Wf,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Wf.forEach(t),Zp=d(Ge),ms=r(Ge,"P",{});var Fh=i(ms);gs=r(Fh,"A",{href:!0});var Uf=i(gs);eh=s(Uf,"TFOpenAIGPTForSequenceClassification"),Uf.forEach(t),th=s(Fh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Fh.forEach(t),oh=d(Ge),Ye=r(Ge,"P",{});var bt=i(Ye);nh=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=r(bt,"CODE",{});var Rf=i(Na);sh=s(Rf,"pad_token_id"),Rf.forEach(t),ah=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=r(bt,"CODE",{});var Vf=i(Ba);rh=s(Vf,"pad_token_id"),Vf.forEach(t),ih=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=r(bt,"CODE",{});var Kf=i(Wa);lh=s(Kf,"inputs_embeds"),Kf.forEach(t),dh=s(bt," are passed instead of "),Ua=r(bt,"CODE",{});var Jf=i(Ua);ch=s(Jf,"input_ids"),Jf.forEach(t),ph=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),hh=d(Ge),xn=r(Ge,"P",{});var hi=i(xn);uh=s(hi,"This model inherits from "),_s=r(hi,"A",{href:!0});var Xf=i(_s);fh=s(Xf,"TFPreTrainedModel"),Xf.forEach(t),mh=s(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),gh=d(Ge),Hn=r(Ge,"P",{});var ui=i(Hn);_h=s(ui,"This model is also a "),Sn=r(ui,"A",{href:!0,rel:!0});var Qf=i(Sn);Th=s(Qf,"tf.keras.Model"),Qf.forEach(t),vh=s(ui,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ui.forEach(t),kh=d(Ge),w(mo.$$.fragment,Ge),bh=d(Ge),Ke=r(Ge,"DIV",{class:!0});var wt=i(Ke);w(Ln.$$.fragment,wt),wh=d(wt),Ut=r(wt,"P",{});var $s=i(Ut);yh=s($s,"The "),Ts=r($s,"A",{href:!0});var Yf=i(Ts);Ph=s(Yf,"TFOpenAIGPTForSequenceClassification"),Yf.forEach(t),Ih=s($s," forward method, overrides the "),Ra=r($s,"CODE",{});var Zf=i(Ra);Oh=s(Zf,"__call__"),Zf.forEach(t),Ah=s($s," special method."),$s.forEach(t),$h=d(wt),w(go.$$.fragment,wt),Gh=d(wt),Va=r(wt,"P",{});var em=i(Va);Mh=s(em,"Example:"),em.forEach(t),Eh=d(wt),w(Nn.$$.fragment,wt),wt.forEach(t),Ge.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Tm)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(m,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(G,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(R,"href","https://transformer.huggingface.co/doc/gpt"),c(R,"rel","nofollow"),c(ve,"href","https://huggingface.co/thomwolf"),c(ve,"rel","nofollow"),c(ke,"href","https://github.com/openai/finetune-transformer-lm"),c(ke,"rel","nofollow"),c(Rn,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(yt,"class","relative group"),c(Vn,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Kn,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Po,"href","https://huggingface.co/openai-gpt"),c(Po,"rel","nofollow"),c(Jn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Xn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(Qn,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Yn,"class","docstring"),c(Ce,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(Ot,"class","relative group"),c(Zn,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Qe,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(At,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(es,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bo,"rel","nofollow"),c(ts,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Ne,"class","docstring"),c(De,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(os,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(ns,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),c(Be,"class","docstring"),c(je,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(qt,"class","relative group"),c(ss,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(as,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(We,"class","docstring"),c(xe,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(Dt,"class","relative group"),c(rs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(is,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(ye,"class","docstring"),c(He,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(xt,"class","relative group"),c(ds,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(vn,"rel","nofollow"),c(cs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Ue,"class","docstring"),c(Pe,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(ps,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(On,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(On,"rel","nofollow"),c(hs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Re,"class","docstring"),c(Ie,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(us,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fn,"rel","nofollow"),c(fs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(fo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Wt,"class","relative group"),c(gs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(_s,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sn,"rel","nofollow"),c(Ts,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Ke,"class","docstring"),c(le,"class","docstring")},m(o,f){e(document.head,u),h(o,A,f),h(o,m,f),e(m,g),e(g,v),y(T,v,null),e(m,_),e(m,$),e($,he),h(o,J,f),h(o,G,f),e(G,X),e(X,j),y(Y,j,null),e(G,ue),e(G,x),e(x,fe),h(o,de,f),h(o,S,f),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,f),h(o,oe,f),e(oe,B),h(o,ce,f),h(o,ne,f),e(ne,H),e(H,me),h(o,pe,f),h(o,E,f),e(E,ge),h(o,L,f),h(o,Q,f),e(Q,re),e(re,W),e(Q,_e),e(Q,te),e(te,C),e(te,ie),e(ie,U),e(te,Te),h(o,p,f),h(o,k,f),e(k,R),e(R,Me),e(k,Ee),h(o,F,f),h(o,se,f),e(se,ze),e(se,ve),e(ve,D),e(se,V),e(se,ke),e(ke,Fe),e(se,K),h(o,Ae,f),h(o,we,f),e(we,be),h(o,$e,f),h(o,Ze,f),e(Ze,fi),e(Ze,Gs),e(Gs,mi),e(Ze,gi),e(Ze,Ms),e(Ms,_i),e(Ze,Ti),e(Ze,Es),e(Es,vi),e(Ze,ki),h(o,nr,f),y(bo,o,f),h(o,sr,f),h(o,Le,f),e(Le,bi),e(Le,zs),e(zs,wi),e(Le,yi),e(Le,Fs),e(Fs,Pi),e(Le,Ii),e(Le,Rn),e(Rn,Oi),e(Le,Ai),e(Le,qs),e(qs,$i),e(Le,Gi),h(o,ar,f),h(o,yt,f),e(yt,Rt),e(Rt,Cs),y(wo,Cs,null),e(yt,Mi),e(yt,Ds),e(Ds,Ei),h(o,rr,f),h(o,qe,f),y(yo,qe,null),e(qe,zi),e(qe,at),e(at,Fi),e(at,Vn),e(Vn,qi),e(at,Ci),e(at,Kn),e(Kn,Di),e(at,ji),e(at,Po),e(Po,xi),e(at,Hi),e(qe,Si),e(qe,Pt),e(Pt,Li),e(Pt,Jn),e(Jn,Ni),e(Pt,Bi),e(Pt,Xn),e(Xn,Wi),e(Pt,Ui),e(qe,Ri),e(qe,js),e(js,Vi),e(qe,Ki),y(Io,qe,null),h(o,ir,f),h(o,It,f),e(It,Vt),e(Vt,xs),y(Oo,xs,null),e(It,Ji),e(It,Hs),e(Hs,Xi),h(o,lr,f),h(o,Ce,f),y(Ao,Ce,null),e(Ce,Qi),e(Ce,Ss),e(Ss,Yi),e(Ce,Zi),e(Ce,$o),e($o,Ls),e(Ls,el),e($o,tl),e($o,rt),e(rt,ol),e(rt,Ns),e(Ns,nl),e(rt,sl),e(rt,Bs),e(Bs,al),e(rt,rl),e(rt,Ws),e(Ws,il),e(rt,ll),e(Ce,dl),e(Ce,Go),e(Go,cl),e(Go,Qn),e(Qn,pl),e(Go,hl),e(Ce,ul),e(Ce,Yn),y(Mo,Yn,null),h(o,dr,f),h(o,Ot,f),e(Ot,Kt),e(Kt,Us),y(Eo,Us,null),e(Ot,fl),e(Ot,Rs),e(Rs,ml),h(o,cr,f),h(o,Qe,f),y(zo,Qe,null),e(Qe,gl),e(Qe,Fo),e(Fo,_l),e(Fo,Vs),e(Vs,Tl),e(Fo,vl),e(Qe,kl),e(Qe,qo),e(qo,Ks),e(Ks,bl),e(qo,wl),e(qo,Js),e(Js,yl),e(Qe,Pl),e(Qe,Co),e(Co,Il),e(Co,Zn),e(Zn,Ol),e(Co,Al),h(o,pr,f),h(o,At,f),e(At,Jt),e(Jt,Xs),y(Do,Xs,null),e(At,$l),e(At,Qs),e(Qs,Gl),h(o,hr,f),h(o,$t,f),y(jo,$t,null),e($t,Ml),e($t,Ys),e(Ys,El),h(o,ur,f),h(o,Gt,f),y(xo,Gt,null),e(Gt,zl),e(Gt,Zs),e(Zs,Fl),h(o,fr,f),h(o,Mt,f),e(Mt,Xt),e(Xt,ea),y(Ho,ea,null),e(Mt,ql),e(Mt,ta),e(ta,Cl),h(o,mr,f),h(o,De,f),y(So,De,null),e(De,Dl),e(De,oa),e(oa,jl),e(De,xl),e(De,Lo),e(Lo,Hl),e(Lo,es),e(es,Sl),e(Lo,Ll),e(De,Nl),e(De,No),e(No,Bl),e(No,Bo),e(Bo,Wl),e(No,Ul),e(De,Rl),e(De,Ne),y(Wo,Ne,null),e(Ne,Vl),e(Ne,Et),e(Et,Kl),e(Et,ts),e(ts,Jl),e(Et,Xl),e(Et,na),e(na,Ql),e(Et,Yl),e(Ne,Zl),y(Qt,Ne,null),e(Ne,ed),e(Ne,sa),e(sa,td),e(Ne,od),y(Uo,Ne,null),h(o,gr,f),h(o,zt,f),e(zt,Yt),e(Yt,aa),y(Ro,aa,null),e(zt,nd),e(zt,ra),e(ra,sd),h(o,_r,f),h(o,je,f),y(Vo,je,null),e(je,ad),e(je,ia),e(ia,rd),e(je,id),e(je,Ko),e(Ko,ld),e(Ko,os),e(os,dd),e(Ko,cd),e(je,pd),e(je,Jo),e(Jo,hd),e(Jo,Xo),e(Xo,ud),e(Jo,fd),e(je,md),e(je,Be),y(Qo,Be,null),e(Be,gd),e(Be,Ft),e(Ft,_d),e(Ft,ns),e(ns,Td),e(Ft,vd),e(Ft,la),e(la,kd),e(Ft,bd),e(Be,wd),y(Zt,Be,null),e(Be,yd),e(Be,da),e(da,Pd),e(Be,Id),y(Yo,Be,null),h(o,Tr,f),h(o,qt,f),e(qt,eo),e(eo,ca),y(Zo,ca,null),e(qt,Od),e(qt,pa),e(pa,Ad),h(o,vr,f),h(o,xe,f),y(en,xe,null),e(xe,$d),e(xe,ha),e(ha,Gd),e(xe,Md),e(xe,tn),e(tn,Ed),e(tn,ss),e(ss,zd),e(tn,Fd),e(xe,qd),e(xe,on),e(on,Cd),e(on,nn),e(nn,Dd),e(on,jd),e(xe,xd),e(xe,We),y(sn,We,null),e(We,Hd),e(We,Ct),e(Ct,Sd),e(Ct,as),e(as,Ld),e(Ct,Nd),e(Ct,ua),e(ua,Bd),e(Ct,Wd),e(We,Ud),y(to,We,null),e(We,Rd),e(We,fa),e(fa,Vd),e(We,Kd),y(an,We,null),h(o,kr,f),h(o,Dt,f),e(Dt,oo),e(oo,ma),y(rn,ma,null),e(Dt,Jd),e(Dt,ga),e(ga,Xd),h(o,br,f),h(o,He,f),y(ln,He,null),e(He,Qd),e(He,Se),e(Se,Yd),e(Se,rs),e(rs,Zd),e(Se,ec),e(Se,_a),e(_a,tc),e(Se,oc),e(Se,Ta),e(Ta,nc),e(Se,sc),e(Se,va),e(va,ac),e(Se,rc),e(Se,ka),e(ka,ic),e(Se,lc),e(He,dc),e(He,dn),e(dn,cc),e(dn,is),e(is,pc),e(dn,hc),e(He,uc),e(He,cn),e(cn,fc),e(cn,pn),e(pn,mc),e(cn,gc),e(He,_c),e(He,ye),y(hn,ye,null),e(ye,Tc),e(ye,jt),e(jt,vc),e(jt,ls),e(ls,kc),e(jt,bc),e(jt,ba),e(ba,wc),e(jt,yc),e(ye,Pc),y(no,ye,null),e(ye,Ic),e(ye,wa),e(wa,Oc),e(ye,Ac),y(un,ye,null),e(ye,$c),e(ye,ya),e(ya,Gc),e(ye,Mc),y(fn,ye,null),h(o,wr,f),h(o,xt,f),e(xt,so),e(so,Pa),y(mn,Pa,null),e(xt,Ec),e(xt,Ia),e(Ia,zc),h(o,yr,f),h(o,Pe,f),y(gn,Pe,null),e(Pe,Fc),e(Pe,Oa),e(Oa,qc),e(Pe,Cc),e(Pe,_n),e(_n,Dc),e(_n,ds),e(ds,jc),e(_n,xc),e(Pe,Hc),e(Pe,Tn),e(Tn,Sc),e(Tn,vn),e(vn,Lc),e(Tn,Nc),e(Pe,Bc),y(ao,Pe,null),e(Pe,Wc),e(Pe,Ue),y(kn,Ue,null),e(Ue,Uc),e(Ue,Ht),e(Ht,Rc),e(Ht,cs),e(cs,Vc),e(Ht,Kc),e(Ht,Aa),e(Aa,Jc),e(Ht,Xc),e(Ue,Qc),y(ro,Ue,null),e(Ue,Yc),e(Ue,$a),e($a,Zc),e(Ue,ep),y(bn,Ue,null),h(o,Pr,f),h(o,St,f),e(St,io),e(io,Ga),y(wn,Ga,null),e(St,tp),e(St,Ma),e(Ma,op),h(o,Ir,f),h(o,Ie,f),y(yn,Ie,null),e(Ie,np),e(Ie,Ea),e(Ea,sp),e(Ie,ap),e(Ie,Pn),e(Pn,rp),e(Pn,ps),e(ps,ip),e(Pn,lp),e(Ie,dp),e(Ie,In),e(In,cp),e(In,On),e(On,pp),e(In,hp),e(Ie,up),y(lo,Ie,null),e(Ie,fp),e(Ie,Re),y(An,Re,null),e(Re,mp),e(Re,Lt),e(Lt,gp),e(Lt,hs),e(hs,_p),e(Lt,Tp),e(Lt,za),e(za,vp),e(Lt,kp),e(Re,bp),y(co,Re,null),e(Re,wp),e(Re,Fa),e(Fa,yp),e(Re,Pp),y($n,Re,null),h(o,Or,f),h(o,Nt,f),e(Nt,po),e(po,qa),y(Gn,qa,null),e(Nt,Ip),e(Nt,Ca),e(Ca,Op),h(o,Ar,f),h(o,Oe,f),y(Mn,Oe,null),e(Oe,Ap),e(Oe,Da),e(Da,$p),e(Oe,Gp),e(Oe,En),e(En,Mp),e(En,us),e(us,Ep),e(En,zp),e(Oe,Fp),e(Oe,zn),e(zn,qp),e(zn,Fn),e(Fn,Cp),e(zn,Dp),e(Oe,jp),y(ho,Oe,null),e(Oe,xp),e(Oe,Ve),y(qn,Ve,null),e(Ve,Hp),e(Ve,Bt),e(Bt,Sp),e(Bt,fs),e(fs,Lp),e(Bt,Np),e(Bt,ja),e(ja,Bp),e(Bt,Wp),e(Ve,Up),y(uo,Ve,null),e(Ve,Rp),e(Ve,xa),e(xa,Vp),e(Ve,Kp),y(Cn,Ve,null),h(o,$r,f),h(o,Wt,f),e(Wt,fo),e(fo,Ha),y(Dn,Ha,null),e(Wt,Jp),e(Wt,Sa),e(Sa,Xp),h(o,Gr,f),h(o,le,f),y(jn,le,null),e(le,Qp),e(le,La),e(La,Yp),e(le,Zp),e(le,ms),e(ms,gs),e(gs,eh),e(ms,th),e(le,oh),e(le,Ye),e(Ye,nh),e(Ye,Na),e(Na,sh),e(Ye,ah),e(Ye,Ba),e(Ba,rh),e(Ye,ih),e(Ye,Wa),e(Wa,lh),e(Ye,dh),e(Ye,Ua),e(Ua,ch),e(Ye,ph),e(le,hh),e(le,xn),e(xn,uh),e(xn,_s),e(_s,fh),e(xn,mh),e(le,gh),e(le,Hn),e(Hn,_h),e(Hn,Sn),e(Sn,Th),e(Hn,vh),e(le,kh),y(mo,le,null),e(le,bh),e(le,Ke),y(Ln,Ke,null),e(Ke,wh),e(Ke,Ut),e(Ut,yh),e(Ut,Ts),e(Ts,Ph),e(Ut,Ih),e(Ut,Ra),e(Ra,Oh),e(Ut,Ah),e(Ke,$h),y(go,Ke,null),e(Ke,Gh),e(Ke,Va),e(Va,Mh),e(Ke,Eh),y(Nn,Ke,null),Mr=!0},p(o,[f]){const Bn={};f&2&&(Bn.$$scope={dirty:f,ctx:o}),Qt.$set(Bn);const Ka={};f&2&&(Ka.$$scope={dirty:f,ctx:o}),Zt.$set(Ka);const Ja={};f&2&&(Ja.$$scope={dirty:f,ctx:o}),to.$set(Ja);const Xa={};f&2&&(Xa.$$scope={dirty:f,ctx:o}),no.$set(Xa);const Wn={};f&2&&(Wn.$$scope={dirty:f,ctx:o}),ao.$set(Wn);const Qa={};f&2&&(Qa.$$scope={dirty:f,ctx:o}),ro.$set(Qa);const Ya={};f&2&&(Ya.$$scope={dirty:f,ctx:o}),lo.$set(Ya);const Za={};f&2&&(Za.$$scope={dirty:f,ctx:o}),co.$set(Za);const Un={};f&2&&(Un.$$scope={dirty:f,ctx:o}),ho.$set(Un);const er={};f&2&&(er.$$scope={dirty:f,ctx:o}),uo.$set(er);const tr={};f&2&&(tr.$$scope={dirty:f,ctx:o}),mo.$set(tr);const or={};f&2&&(or.$$scope={dirty:f,ctx:o}),go.$set(or)},i(o){Mr||(P(T.$$.fragment,o),P(Y.$$.fragment,o),P(bo.$$.fragment,o),P(wo.$$.fragment,o),P(yo.$$.fragment,o),P(Io.$$.fragment,o),P(Oo.$$.fragment,o),P(Ao.$$.fragment,o),P(Mo.$$.fragment,o),P(Eo.$$.fragment,o),P(zo.$$.fragment,o),P(Do.$$.fragment,o),P(jo.$$.fragment,o),P(xo.$$.fragment,o),P(Ho.$$.fragment,o),P(So.$$.fragment,o),P(Wo.$$.fragment,o),P(Qt.$$.fragment,o),P(Uo.$$.fragment,o),P(Ro.$$.fragment,o),P(Vo.$$.fragment,o),P(Qo.$$.fragment,o),P(Zt.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(sn.$$.fragment,o),P(to.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(hn.$$.fragment,o),P(no.$$.fragment,o),P(un.$$.fragment,o),P(fn.$$.fragment,o),P(mn.$$.fragment,o),P(gn.$$.fragment,o),P(ao.$$.fragment,o),P(kn.$$.fragment,o),P(ro.$$.fragment,o),P(bn.$$.fragment,o),P(wn.$$.fragment,o),P(yn.$$.fragment,o),P(lo.$$.fragment,o),P(An.$$.fragment,o),P(co.$$.fragment,o),P($n.$$.fragment,o),P(Gn.$$.fragment,o),P(Mn.$$.fragment,o),P(ho.$$.fragment,o),P(qn.$$.fragment,o),P(uo.$$.fragment,o),P(Cn.$$.fragment,o),P(Dn.$$.fragment,o),P(jn.$$.fragment,o),P(mo.$$.fragment,o),P(Ln.$$.fragment,o),P(go.$$.fragment,o),P(Nn.$$.fragment,o),Mr=!0)},o(o){I(T.$$.fragment,o),I(Y.$$.fragment,o),I(bo.$$.fragment,o),I(wo.$$.fragment,o),I(yo.$$.fragment,o),I(Io.$$.fragment,o),I(Oo.$$.fragment,o),I(Ao.$$.fragment,o),I(Mo.$$.fragment,o),I(Eo.$$.fragment,o),I(zo.$$.fragment,o),I(Do.$$.fragment,o),I(jo.$$.fragment,o),I(xo.$$.fragment,o),I(Ho.$$.fragment,o),I(So.$$.fragment,o),I(Wo.$$.fragment,o),I(Qt.$$.fragment,o),I(Uo.$$.fragment,o),I(Ro.$$.fragment,o),I(Vo.$$.fragment,o),I(Qo.$$.fragment,o),I(Zt.$$.fragment,o),I(Yo.$$.fragment,o),I(Zo.$$.fragment,o),I(en.$$.fragment,o),I(sn.$$.fragment,o),I(to.$$.fragment,o),I(an.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(hn.$$.fragment,o),I(no.$$.fragment,o),I(un.$$.fragment,o),I(fn.$$.fragment,o),I(mn.$$.fragment,o),I(gn.$$.fragment,o),I(ao.$$.fragment,o),I(kn.$$.fragment,o),I(ro.$$.fragment,o),I(bn.$$.fragment,o),I(wn.$$.fragment,o),I(yn.$$.fragment,o),I(lo.$$.fragment,o),I(An.$$.fragment,o),I(co.$$.fragment,o),I($n.$$.fragment,o),I(Gn.$$.fragment,o),I(Mn.$$.fragment,o),I(ho.$$.fragment,o),I(qn.$$.fragment,o),I(uo.$$.fragment,o),I(Cn.$$.fragment,o),I(Dn.$$.fragment,o),I(jn.$$.fragment,o),I(mo.$$.fragment,o),I(Ln.$$.fragment,o),I(go.$$.fragment,o),I(Nn.$$.fragment,o),Mr=!1},d(o){t(u),o&&t(A),o&&t(m),O(T),o&&t(J),o&&t(G),O(Y),o&&t(de),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(pe),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(k),o&&t(F),o&&t(se),o&&t(Ae),o&&t(we),o&&t($e),o&&t(Ze),o&&t(nr),O(bo,o),o&&t(sr),o&&t(Le),o&&t(ar),o&&t(yt),O(wo),o&&t(rr),o&&t(qe),O(yo),O(Io),o&&t(ir),o&&t(It),O(Oo),o&&t(lr),o&&t(Ce),O(Ao),O(Mo),o&&t(dr),o&&t(Ot),O(Eo),o&&t(cr),o&&t(Qe),O(zo),o&&t(pr),o&&t(At),O(Do),o&&t(hr),o&&t($t),O(jo),o&&t(ur),o&&t(Gt),O(xo),o&&t(fr),o&&t(Mt),O(Ho),o&&t(mr),o&&t(De),O(So),O(Wo),O(Qt),O(Uo),o&&t(gr),o&&t(zt),O(Ro),o&&t(_r),o&&t(je),O(Vo),O(Qo),O(Zt),O(Yo),o&&t(Tr),o&&t(qt),O(Zo),o&&t(vr),o&&t(xe),O(en),O(sn),O(to),O(an),o&&t(kr),o&&t(Dt),O(rn),o&&t(br),o&&t(He),O(ln),O(hn),O(no),O(un),O(fn),o&&t(wr),o&&t(xt),O(mn),o&&t(yr),o&&t(Pe),O(gn),O(ao),O(kn),O(ro),O(bn),o&&t(Pr),o&&t(St),O(wn),o&&t(Ir),o&&t(Ie),O(yn),O(lo),O(An),O(co),O($n),o&&t(Or),o&&t(Nt),O(Gn),o&&t(Ar),o&&t(Oe),O(Mn),O(ho),O(qn),O(uo),O(Cn),o&&t($r),o&&t(Wt),O(Dn),o&&t(Gr),o&&t(le),O(jn),O(mo),O(Ln),O(go),O(Nn)}}}const Tm={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function vm(N,u,A){let{fw:m}=u;return N.$$set=g=>{"fw"in g&&A(0,m=g.fw)},[m]}class Om extends tm{constructor(u){super();om(this,u,vm,_m,nm,{fw:0})}}export{Om as default,Tm as metadata};
