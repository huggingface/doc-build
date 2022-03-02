import{S as tm,i as om,s as nm,e as a,k as l,w as b,t as n,M as sm,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as h,y as P,q as y,o as I,B as A}from"../../chunks/vendor-4833417e.js";import{T as st}from"../../chunks/Tip-fffd6df1.js";import{D as ae}from"../../chunks/Docstring-7b52c3d4.js";import{C as it}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Xe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function am(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function rm(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function im(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function lm(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function dm(N){let f,O,m,g,v,T,_,$,he,J,G,X,j,Y,fe,x,ue,de,S,F,Z,ee,M,z,oe,W,ce,ne,H,me,pe,E,ge,L,Q,re,B,_e,te,C,ie,U,Te;return{c(){f=a("p"),O=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),F=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);O=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),j=r(q,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(q,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),S=d(p),F=r(p,"P",{});var ve=i(F);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ke=i(W);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var qe=i(H);me=s(qe,"model(inputs_ids)"),qe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Oe=i(L);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,f,k),e(f,O),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,fe),e(G,x),e(x,ue),e(G,de),h(p,S,k),h(p,F,k),e(F,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,W),e(W,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(F),p&&t(ee),p&&t(M)}}}function cm(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function pm(N){let f,O,m,g,v,T,_,$,he,J,G,X,j,Y,fe,x,ue,de,S,F,Z,ee,M,z,oe,W,ce,ne,H,me,pe,E,ge,L,Q,re,B,_e,te,C,ie,U,Te;return{c(){f=a("p"),O=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),F=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);O=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),j=r(q,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(q,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),S=d(p),F=r(p,"P",{});var ve=i(F);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ke=i(W);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var qe=i(H);me=s(qe,"model(inputs_ids)"),qe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Oe=i(L);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,f,k),e(f,O),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,fe),e(G,x),e(x,ue),e(G,de),h(p,S,k),h(p,F,k),e(F,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,W),e(W,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(F),p&&t(ee),p&&t(M)}}}function hm(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function fm(N){let f,O,m,g,v,T,_,$,he,J,G,X,j,Y,fe,x,ue,de,S,F,Z,ee,M,z,oe,W,ce,ne,H,me,pe,E,ge,L,Q,re,B,_e,te,C,ie,U,Te;return{c(){f=a("p"),O=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),F=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);O=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),j=r(q,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(q,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),S=d(p),F=r(p,"P",{});var ve=i(F);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ke=i(W);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var qe=i(H);me=s(qe,"model(inputs_ids)"),qe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Oe=i(L);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,f,k),e(f,O),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,fe),e(G,x),e(x,ue),e(G,de),h(p,S,k),h(p,F,k),e(F,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,W),e(W,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(F),p&&t(ee),p&&t(M)}}}function um(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function mm(N){let f,O,m,g,v,T,_,$,he,J,G,X,j,Y,fe,x,ue,de,S,F,Z,ee,M,z,oe,W,ce,ne,H,me,pe,E,ge,L,Q,re,B,_e,te,C,ie,U,Te;return{c(){f=a("p"),O=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),F=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);O=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),j=r(q,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(q,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),S=d(p),F=r(p,"P",{});var ve=i(F);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ke=i(W);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var qe=i(H);me=s(qe,"model(inputs_ids)"),qe.forEach(t),V.forEach(t),pe=d(D),E=r(D,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Oe=i(L);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,f,k),e(f,O),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,j),e(j,Y),e(G,fe),e(G,x),e(x,ue),e(G,de),h(p,S,k),h(p,F,k),e(F,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,W),e(W,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(F),p&&t(ee),p&&t(M)}}}function gm(N){let f,O,m,g,v;return{c(){f=a("p"),O=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);O=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,O),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function _m(N){let f,O,m,g,v,T,_,$,he,J,G,X,j,Y,fe,x,ue,de,S,F,Z,ee,M,z,oe,W,ce,ne,H,me,pe,E,ge,L,Q,re,B,_e,te,C,ie,U,Te,p,k,R,Me,Ee,q,se,ze,ve,D,V,ke,qe,K,Oe,we,be,$e,Ze,ui,Gs,mi,gi,Ms,_i,Ti,Es,vi,ki,nr,bo,sr,Le,bi,zs,wi,Pi,qs,yi,Ii,Rn,Ai,Oi,Fs,$i,Gi,ar,Pt,Rt,Cs,wo,Mi,Ds,Ei,rr,Fe,Po,zi,at,qi,Vn,Fi,Ci,Kn,Di,ji,yo,xi,Hi,Si,yt,Li,Jn,Ni,Wi,Xn,Bi,Ui,Ri,js,Vi,Ki,Io,ir,It,Vt,xs,Ao,Ji,Hs,Xi,lr,Ce,Oo,Qi,Ss,Yi,Zi,$o,Ls,el,tl,rt,ol,Ns,nl,sl,Ws,al,rl,Bs,il,ll,dl,Go,cl,Qn,pl,hl,fl,Yn,Mo,dr,At,Kt,Us,Eo,ul,Rs,ml,cr,Qe,zo,gl,qo,_l,Vs,Tl,vl,kl,Fo,Ks,bl,wl,Js,Pl,yl,Co,Il,Zn,Al,Ol,pr,Ot,Jt,Xs,Do,$l,Qs,Gl,hr,$t,jo,Ml,Ys,El,fr,Gt,xo,zl,Zs,ql,ur,Mt,Xt,ea,Ho,Fl,ta,Cl,mr,De,So,Dl,oa,jl,xl,Lo,Hl,es,Sl,Ll,Nl,No,Wl,Wo,Bl,Ul,Rl,Ne,Bo,Vl,Et,Kl,ts,Jl,Xl,na,Ql,Yl,Zl,Qt,ed,sa,td,od,Uo,gr,zt,Yt,aa,Ro,nd,ra,sd,_r,je,Vo,ad,ia,rd,id,Ko,ld,os,dd,cd,pd,Jo,hd,Xo,fd,ud,md,We,Qo,gd,qt,_d,ns,Td,vd,la,kd,bd,wd,Zt,Pd,da,yd,Id,Yo,Tr,Ft,eo,ca,Zo,Ad,pa,Od,vr,xe,en,$d,ha,Gd,Md,tn,Ed,ss,zd,qd,Fd,on,Cd,nn,Dd,jd,xd,Be,sn,Hd,Ct,Sd,as,Ld,Nd,fa,Wd,Bd,Ud,to,Rd,ua,Vd,Kd,an,kr,Dt,oo,ma,rn,Jd,ga,Xd,br,He,ln,Qd,Se,Yd,rs,Zd,ec,_a,tc,oc,Ta,nc,sc,va,ac,rc,ka,ic,lc,dc,dn,cc,is,pc,hc,fc,cn,uc,pn,mc,gc,_c,Pe,hn,Tc,jt,vc,ls,kc,bc,ba,wc,Pc,yc,no,Ic,wa,Ac,Oc,fn,$c,Pa,Gc,Mc,un,wr,xt,so,ya,mn,Ec,Ia,zc,Pr,ye,gn,qc,Aa,Fc,Cc,_n,Dc,ds,jc,xc,Hc,Tn,Sc,vn,Lc,Nc,Wc,ao,Bc,Ue,kn,Uc,Ht,Rc,cs,Vc,Kc,Oa,Jc,Xc,Qc,ro,Yc,$a,Zc,ep,bn,yr,St,io,Ga,wn,tp,Ma,op,Ir,Ie,Pn,np,Ea,sp,ap,yn,rp,ps,ip,lp,dp,In,cp,An,pp,hp,fp,lo,up,Re,On,mp,Lt,gp,hs,_p,Tp,za,vp,kp,bp,co,wp,qa,Pp,yp,$n,Ar,Nt,po,Fa,Gn,Ip,Ca,Ap,Or,Ae,Mn,Op,Da,$p,Gp,En,Mp,fs,Ep,zp,qp,zn,Fp,qn,Cp,Dp,jp,ho,xp,Ve,Fn,Hp,Wt,Sp,us,Lp,Np,ja,Wp,Bp,Up,fo,Rp,xa,Vp,Kp,Cn,$r,Bt,uo,Ha,Dn,Jp,Sa,Xp,Gr,le,jn,Qp,La,Yp,Zp,ms,gs,eh,th,oh,Ye,nh,Na,sh,ah,Wa,rh,ih,Ba,lh,dh,Ua,ch,ph,hh,xn,fh,_s,uh,mh,gh,Hn,_h,Sn,Th,vh,kh,mo,bh,Ke,Ln,wh,Ut,Ph,Ts,yh,Ih,Ra,Ah,Oh,$h,go,Gh,Va,Mh,Eh,Nn,Mr;return T=new Xe({}),Y=new Xe({}),bo=new it({props:{codee:`pip install spacy ftfy==4.4.3
python -m spacy download en,`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Xe({}),Po=new ae({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new it({props:{codee:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ao=new Xe({}),Oo=new ae({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Qt=new st({props:{$$slots:{default:[am]},$$scope:{ctx:N}}}),Uo=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
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
`}}),Zt=new st({props:{$$slots:{default:[rm]},$$scope:{ctx:N}}}),Yo=new it({props:{codee:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
`}}),to=new st({props:{$$slots:{default:[im]},$$scope:{ctx:N}}}),an=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
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
mc_logits = outputs.mc_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
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
`}}),no=new st({props:{$$slots:{default:[lm]},$$scope:{ctx:N}}}),fn=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),un=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
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
`}}),ro=new st({props:{$$slots:{default:[cm]},$$scope:{ctx:N}}}),bn=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),wn=new Xe({}),Pn=new ae({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L586",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new st({props:{$$slots:{default:[pm]},$$scope:{ctx:N}}}),On=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L597",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),co=new st({props:{$$slots:{default:[hm]},$$scope:{ctx:N}}}),$n=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new Xe({}),Mn=new ae({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L690",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new st({props:{$$slots:{default:[fm]},$$scope:{ctx:N}}}),Fn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/openai/modeling_tf_openai.py#L699",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),fo=new st({props:{$$slots:{default:[um]},$$scope:{ctx:N}}}),Cn=new it({props:{codee:`import tensorflow as tf
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
lm_prediction_scores, mc_prediction_scores = outputs[:2],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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
`}}),go=new st({props:{$$slots:{default:[gm]},$$scope:{ctx:N}}}),Nn=new it({props:{codee:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){f=a("meta"),O=l(),m=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),$=a("span"),he=n("OpenAI GPT"),J=l(),G=a("h2"),X=a("a"),j=a("span"),b(Y.$$.fragment),fe=l(),x=a("span"),ue=n("Overview"),de=l(),S=a("p"),F=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),W=n("The abstract from the paper is the following:"),ce=l(),ne=a("p"),H=a("em"),me=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),pe=l(),E=a("p"),ge=n("Tips:"),L=l(),Q=a("ul"),re=a("li"),B=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),_e=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=a("em"),U=n("run_generation.py"),Te=n(" example script."),p=l(),k=a("p"),R=a("a"),Me=n("Write With Transformer"),Ee=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),q=l(),se=a("p"),ze=n("This model was contributed by "),ve=a("a"),D=n("thomwolf"),V=n(". The original code can be found "),ke=a("a"),qe=n("here"),K=n("."),Oe=l(),we=a("p"),be=n("Note:"),$e=l(),Ze=a("p"),ui=n("If you want to reproduce the original tokenization process of the "),Gs=a("em"),mi=n("OpenAI GPT"),gi=n(" paper, you will need to install "),Ms=a("code"),_i=n("ftfy"),Ti=n(`
and `),Es=a("code"),vi=n("SpaCy"),ki=n(":"),nr=l(),b(bo.$$.fragment),sr=l(),Le=a("p"),bi=n("If you don\u2019t install "),zs=a("code"),wi=n("ftfy"),Pi=n(" and "),qs=a("code"),yi=n("SpaCy"),Ii=n(", the "),Rn=a("a"),Ai=n("OpenAIGPTTokenizer"),Oi=n(` will default to tokenize
using BERT\u2019s `),Fs=a("code"),$i=n("BasicTokenizer"),Gi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),ar=l(),Pt=a("h2"),Rt=a("a"),Cs=a("span"),b(wo.$$.fragment),Mi=l(),Ds=a("span"),Ei=n("OpenAIGPTConfig"),rr=l(),Fe=a("div"),b(Po.$$.fragment),zi=l(),at=a("p"),qi=n("This is the configuration class to store the configuration of a "),Vn=a("a"),Fi=n("OpenAIGPTModel"),Ci=n(" or a "),Kn=a("a"),Di=n("TFOpenAIGPTModel"),ji=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=a("a"),xi=n("GPT"),Hi=n(" architecture from OpenAI."),Si=l(),yt=a("p"),Li=n("Configuration objects inherit from "),Jn=a("a"),Ni=n("PretrainedConfig"),Wi=n(` and can be used to control the model outputs. Read the
documentation from `),Xn=a("a"),Bi=n("PretrainedConfig"),Ui=n(" for more information."),Ri=l(),js=a("p"),Vi=n("Examples:"),Ki=l(),b(Io.$$.fragment),ir=l(),It=a("h2"),Vt=a("a"),xs=a("span"),b(Ao.$$.fragment),Ji=l(),Hs=a("span"),Xi=n("OpenAIGPTTokenizer"),lr=l(),Ce=a("div"),b(Oo.$$.fragment),Qi=l(),Ss=a("p"),Yi=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Zi=l(),$o=a("ul"),Ls=a("li"),el=n("lowercases all inputs,"),tl=l(),rt=a("li"),ol=n("uses "),Ns=a("code"),nl=n("SpaCy"),sl=n(" tokenizer and "),Ws=a("code"),al=n("ftfy"),rl=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Bs=a("code"),il=n("BasicTokenizer"),ll=n(" if not."),dl=l(),Go=a("p"),cl=n("This tokenizer inherits from "),Qn=a("a"),pl=n("PreTrainedTokenizer"),hl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fl=l(),Yn=a("div"),b(Mo.$$.fragment),dr=l(),At=a("h2"),Kt=a("a"),Us=a("span"),b(Eo.$$.fragment),ul=l(),Rs=a("span"),ml=n("OpenAIGPTTokenizerFast"),cr=l(),Qe=a("div"),b(zo.$$.fragment),gl=l(),qo=a("p"),_l=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Vs=a("em"),Tl=n("tokenizers"),vl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),kl=l(),Fo=a("ul"),Ks=a("li"),bl=n("lower case all inputs"),wl=l(),Js=a("li"),Pl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),yl=l(),Co=a("p"),Il=n("This tokenizer inherits from "),Zn=a("a"),Al=n("PreTrainedTokenizerFast"),Ol=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),pr=l(),Ot=a("h2"),Jt=a("a"),Xs=a("span"),b(Do.$$.fragment),$l=l(),Qs=a("span"),Gl=n("OpenAI specific outputs"),hr=l(),$t=a("div"),b(jo.$$.fragment),Ml=l(),Ys=a("p"),El=n("Base class for outputs of models predicting if two sentences are consecutive or not."),fr=l(),Gt=a("div"),b(xo.$$.fragment),zl=l(),Zs=a("p"),ql=n("Base class for outputs of models predicting if two sentences are consecutive or not."),ur=l(),Mt=a("h2"),Xt=a("a"),ea=a("span"),b(Ho.$$.fragment),Fl=l(),ta=a("span"),Cl=n("OpenAIGPTModel"),mr=l(),De=a("div"),b(So.$$.fragment),Dl=l(),oa=a("p"),jl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),xl=l(),Lo=a("p"),Hl=n("This model inherits from "),es=a("a"),Sl=n("PreTrainedModel"),Ll=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),No=a("p"),Wl=n("This model is also a PyTorch "),Wo=a("a"),Bl=n("torch.nn.Module"),Ul=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rl=l(),Ne=a("div"),b(Bo.$$.fragment),Vl=l(),Et=a("p"),Kl=n("The "),ts=a("a"),Jl=n("OpenAIGPTModel"),Xl=n(" forward method, overrides the "),na=a("code"),Ql=n("__call__"),Yl=n(" special method."),Zl=l(),b(Qt.$$.fragment),ed=l(),sa=a("p"),td=n("Example:"),od=l(),b(Uo.$$.fragment),gr=l(),zt=a("h2"),Yt=a("a"),aa=a("span"),b(Ro.$$.fragment),nd=l(),ra=a("span"),sd=n("OpenAIGPTLMHeadModel"),_r=l(),je=a("div"),b(Vo.$$.fragment),ad=l(),ia=a("p"),rd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id=l(),Ko=a("p"),ld=n("This model inherits from "),os=a("a"),dd=n("PreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=l(),Jo=a("p"),hd=n("This model is also a PyTorch "),Xo=a("a"),fd=n("torch.nn.Module"),ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),md=l(),We=a("div"),b(Qo.$$.fragment),gd=l(),qt=a("p"),_d=n("The "),ns=a("a"),Td=n("OpenAIGPTLMHeadModel"),vd=n(" forward method, overrides the "),la=a("code"),kd=n("__call__"),bd=n(" special method."),wd=l(),b(Zt.$$.fragment),Pd=l(),da=a("p"),yd=n("Example:"),Id=l(),b(Yo.$$.fragment),Tr=l(),Ft=a("h2"),eo=a("a"),ca=a("span"),b(Zo.$$.fragment),Ad=l(),pa=a("span"),Od=n("OpenAIGPTDoubleHeadsModel"),vr=l(),xe=a("div"),b(en.$$.fragment),$d=l(),ha=a("p"),Gd=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Md=l(),tn=a("p"),Ed=n("This model inherits from "),ss=a("a"),zd=n("PreTrainedModel"),qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd=l(),on=a("p"),Cd=n("This model is also a PyTorch "),nn=a("a"),Dd=n("torch.nn.Module"),jd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=l(),Be=a("div"),b(sn.$$.fragment),Hd=l(),Ct=a("p"),Sd=n("The "),as=a("a"),Ld=n("OpenAIGPTDoubleHeadsModel"),Nd=n(" forward method, overrides the "),fa=a("code"),Wd=n("__call__"),Bd=n(" special method."),Ud=l(),b(to.$$.fragment),Rd=l(),ua=a("p"),Vd=n("Examples:"),Kd=l(),b(an.$$.fragment),kr=l(),Dt=a("h2"),oo=a("a"),ma=a("span"),b(rn.$$.fragment),Jd=l(),ga=a("span"),Xd=n("OpenAIGPTForSequenceClassification"),br=l(),He=a("div"),b(ln.$$.fragment),Qd=l(),Se=a("p"),Yd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),rs=a("a"),Zd=n("OpenAIGPTForSequenceClassification"),ec=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),_a=a("code"),tc=n("pad_token_id"),oc=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),Ta=a("code"),nc=n("pad_token_id"),sc=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),va=a("code"),ac=n("inputs_embeds"),rc=n(" are passed instead of "),ka=a("code"),ic=n("input_ids"),lc=n(`, it does the same (take
the last value in each row of the batch).`),dc=l(),dn=a("p"),cc=n("This model inherits from "),is=a("a"),pc=n("PreTrainedModel"),hc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fc=l(),cn=a("p"),uc=n("This model is also a PyTorch "),pn=a("a"),mc=n("torch.nn.Module"),gc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c=l(),Pe=a("div"),b(hn.$$.fragment),Tc=l(),jt=a("p"),vc=n("The "),ls=a("a"),kc=n("OpenAIGPTForSequenceClassification"),bc=n(" forward method, overrides the "),ba=a("code"),wc=n("__call__"),Pc=n(" special method."),yc=l(),b(no.$$.fragment),Ic=l(),wa=a("p"),Ac=n("Example of single-label classification:"),Oc=l(),b(fn.$$.fragment),$c=l(),Pa=a("p"),Gc=n("Example of multi-label classification:"),Mc=l(),b(un.$$.fragment),wr=l(),xt=a("h2"),so=a("a"),ya=a("span"),b(mn.$$.fragment),Ec=l(),Ia=a("span"),zc=n("TFOpenAIGPTModel"),Pr=l(),ye=a("div"),b(gn.$$.fragment),qc=l(),Aa=a("p"),Fc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Cc=l(),_n=a("p"),Dc=n("This model inherits from "),ds=a("a"),jc=n("TFPreTrainedModel"),xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc=l(),Tn=a("p"),Sc=n("This model is also a "),vn=a("a"),Lc=n("tf.keras.Model"),Nc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wc=l(),b(ao.$$.fragment),Bc=l(),Ue=a("div"),b(kn.$$.fragment),Uc=l(),Ht=a("p"),Rc=n("The "),cs=a("a"),Vc=n("TFOpenAIGPTModel"),Kc=n(" forward method, overrides the "),Oa=a("code"),Jc=n("__call__"),Xc=n(" special method."),Qc=l(),b(ro.$$.fragment),Yc=l(),$a=a("p"),Zc=n("Example:"),ep=l(),b(bn.$$.fragment),yr=l(),St=a("h2"),io=a("a"),Ga=a("span"),b(wn.$$.fragment),tp=l(),Ma=a("span"),op=n("TFOpenAIGPTLMHeadModel"),Ir=l(),Ie=a("div"),b(Pn.$$.fragment),np=l(),Ea=a("p"),sp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ap=l(),yn=a("p"),rp=n("This model inherits from "),ps=a("a"),ip=n("TFPreTrainedModel"),lp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp=l(),In=a("p"),cp=n("This model is also a "),An=a("a"),pp=n("tf.keras.Model"),hp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fp=l(),b(lo.$$.fragment),up=l(),Re=a("div"),b(On.$$.fragment),mp=l(),Lt=a("p"),gp=n("The "),hs=a("a"),_p=n("TFOpenAIGPTLMHeadModel"),Tp=n(" forward method, overrides the "),za=a("code"),vp=n("__call__"),kp=n(" special method."),bp=l(),b(co.$$.fragment),wp=l(),qa=a("p"),Pp=n("Example:"),yp=l(),b($n.$$.fragment),Ar=l(),Nt=a("h2"),po=a("a"),Fa=a("span"),b(Gn.$$.fragment),Ip=l(),Ca=a("span"),Ap=n("TFOpenAIGPTDoubleHeadsModel"),Or=l(),Ae=a("div"),b(Mn.$$.fragment),Op=l(),Da=a("p"),$p=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Gp=l(),En=a("p"),Mp=n("This model inherits from "),fs=a("a"),Ep=n("TFPreTrainedModel"),zp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp=l(),zn=a("p"),Fp=n("This model is also a "),qn=a("a"),Cp=n("tf.keras.Model"),Dp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jp=l(),b(ho.$$.fragment),xp=l(),Ve=a("div"),b(Fn.$$.fragment),Hp=l(),Wt=a("p"),Sp=n("The "),us=a("a"),Lp=n("TFOpenAIGPTDoubleHeadsModel"),Np=n(" forward method, overrides the "),ja=a("code"),Wp=n("__call__"),Bp=n(" special method."),Up=l(),b(fo.$$.fragment),Rp=l(),xa=a("p"),Vp=n("Examples:"),Kp=l(),b(Cn.$$.fragment),$r=l(),Bt=a("h2"),uo=a("a"),Ha=a("span"),b(Dn.$$.fragment),Jp=l(),Sa=a("span"),Xp=n("TFOpenAIGPTForSequenceClassification"),Gr=l(),le=a("div"),b(jn.$$.fragment),Qp=l(),La=a("p"),Yp=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Zp=l(),ms=a("p"),gs=a("a"),eh=n("TFOpenAIGPTForSequenceClassification"),th=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),oh=l(),Ye=a("p"),nh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=a("code"),sh=n("pad_token_id"),ah=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Wa=a("code"),rh=n("pad_token_id"),ih=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ba=a("code"),lh=n("inputs_embeds"),dh=n(" are passed instead of "),Ua=a("code"),ch=n("input_ids"),ph=n(`, it does the same (take the last value in
each row of the batch).`),hh=l(),xn=a("p"),fh=n("This model inherits from "),_s=a("a"),uh=n("TFPreTrainedModel"),mh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=l(),Hn=a("p"),_h=n("This model is also a "),Sn=a("a"),Th=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh=l(),b(mo.$$.fragment),bh=l(),Ke=a("div"),b(Ln.$$.fragment),wh=l(),Ut=a("p"),Ph=n("The "),Ts=a("a"),yh=n("TFOpenAIGPTForSequenceClassification"),Ih=n(" forward method, overrides the "),Ra=a("code"),Ah=n("__call__"),Oh=n(" special method."),$h=l(),b(go.$$.fragment),Gh=l(),Va=a("p"),Mh=n("Example:"),Eh=l(),b(Nn.$$.fragment),this.h()},l(o){const u=sm('[data-svelte="svelte-1phssyn"]',document.head);f=r(u,"META",{name:!0,content:!0}),u.forEach(t),O=d(o),m=r(o,"H1",{class:!0});var Wn=i(m);g=r(Wn,"A",{id:!0,class:!0,href:!0});var Ka=i(g);v=r(Ka,"SPAN",{});var Ja=i(v);w(T.$$.fragment,Ja),Ja.forEach(t),Ka.forEach(t),_=d(Wn),$=r(Wn,"SPAN",{});var Xa=i($);he=s(Xa,"OpenAI GPT"),Xa.forEach(t),Wn.forEach(t),J=d(o),G=r(o,"H2",{class:!0});var Bn=i(G);X=r(Bn,"A",{id:!0,class:!0,href:!0});var Qa=i(X);j=r(Qa,"SPAN",{});var Ya=i(j);w(Y.$$.fragment,Ya),Ya.forEach(t),Qa.forEach(t),fe=d(Bn),x=r(Bn,"SPAN",{});var Za=i(x);ue=s(Za,"Overview"),Za.forEach(t),Bn.forEach(t),de=d(o),S=r(o,"P",{});var Un=i(S);F=s(Un,"OpenAI GPT model was proposed in "),Z=r(Un,"A",{href:!0,rel:!0});var er=i(Z);ee=s(er,"Improving Language Understanding by Generative Pre-Training"),er.forEach(t),M=s(Un,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Un.forEach(t),z=d(o),oe=r(o,"P",{});var tr=i(oe);W=s(tr,"The abstract from the paper is the following:"),tr.forEach(t),ce=d(o),ne=r(o,"P",{});var or=i(ne);H=r(or,"EM",{});var Fh=i(H);me=s(Fh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),Fh.forEach(t),or.forEach(t),pe=d(o),E=r(o,"P",{});var Ch=i(E);ge=s(Ch,"Tips:"),Ch.forEach(t),L=d(o),Q=r(o,"UL",{});var Er=i(Q);re=r(Er,"LI",{});var Dh=i(re);B=s(Dh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Dh.forEach(t),_e=d(Er),te=r(Er,"LI",{});var zr=i(te);C=s(zr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=r(zr,"EM",{});var jh=i(ie);U=s(jh,"run_generation.py"),jh.forEach(t),Te=s(zr," example script."),zr.forEach(t),Er.forEach(t),p=d(o),k=r(o,"P",{});var zh=i(k);R=r(zh,"A",{href:!0,rel:!0});var xh=i(R);Me=s(xh,"Write With Transformer"),xh.forEach(t),Ee=s(zh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),zh.forEach(t),q=d(o),se=r(o,"P",{});var vs=i(se);ze=s(vs,"This model was contributed by "),ve=r(vs,"A",{href:!0,rel:!0});var Hh=i(ve);D=s(Hh,"thomwolf"),Hh.forEach(t),V=s(vs,". The original code can be found "),ke=r(vs,"A",{href:!0,rel:!0});var Sh=i(ke);qe=s(Sh,"here"),Sh.forEach(t),K=s(vs,"."),vs.forEach(t),Oe=d(o),we=r(o,"P",{});var Lh=i(we);be=s(Lh,"Note:"),Lh.forEach(t),$e=d(o),Ze=r(o,"P",{});var _o=i(Ze);ui=s(_o,"If you want to reproduce the original tokenization process of the "),Gs=r(_o,"EM",{});var Nh=i(Gs);mi=s(Nh,"OpenAI GPT"),Nh.forEach(t),gi=s(_o," paper, you will need to install "),Ms=r(_o,"CODE",{});var Wh=i(Ms);_i=s(Wh,"ftfy"),Wh.forEach(t),Ti=s(_o,`
and `),Es=r(_o,"CODE",{});var Bh=i(Es);vi=s(Bh,"SpaCy"),Bh.forEach(t),ki=s(_o,":"),_o.forEach(t),nr=d(o),w(bo.$$.fragment,o),sr=d(o),Le=r(o,"P",{});var lt=i(Le);bi=s(lt,"If you don\u2019t install "),zs=r(lt,"CODE",{});var Uh=i(zs);wi=s(Uh,"ftfy"),Uh.forEach(t),Pi=s(lt," and "),qs=r(lt,"CODE",{});var Rh=i(qs);yi=s(Rh,"SpaCy"),Rh.forEach(t),Ii=s(lt,", the "),Rn=r(lt,"A",{href:!0});var Vh=i(Rn);Ai=s(Vh,"OpenAIGPTTokenizer"),Vh.forEach(t),Oi=s(lt,` will default to tokenize
using BERT\u2019s `),Fs=r(lt,"CODE",{});var Kh=i(Fs);$i=s(Kh,"BasicTokenizer"),Kh.forEach(t),Gi=s(lt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lt.forEach(t),ar=d(o),Pt=r(o,"H2",{class:!0});var qr=i(Pt);Rt=r(qr,"A",{id:!0,class:!0,href:!0});var Jh=i(Rt);Cs=r(Jh,"SPAN",{});var Xh=i(Cs);w(wo.$$.fragment,Xh),Xh.forEach(t),Jh.forEach(t),Mi=d(qr),Ds=r(qr,"SPAN",{});var Qh=i(Ds);Ei=s(Qh,"OpenAIGPTConfig"),Qh.forEach(t),qr.forEach(t),rr=d(o),Fe=r(o,"DIV",{class:!0});var dt=i(Fe);w(Po.$$.fragment,dt),zi=d(dt),at=r(dt,"P",{});var To=i(at);qi=s(To,"This is the configuration class to store the configuration of a "),Vn=r(To,"A",{href:!0});var Yh=i(Vn);Fi=s(Yh,"OpenAIGPTModel"),Yh.forEach(t),Ci=s(To," or a "),Kn=r(To,"A",{href:!0});var Zh=i(Kn);Di=s(Zh,"TFOpenAIGPTModel"),Zh.forEach(t),ji=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=r(To,"A",{href:!0,rel:!0});var ef=i(yo);xi=s(ef,"GPT"),ef.forEach(t),Hi=s(To," architecture from OpenAI."),To.forEach(t),Si=d(dt),yt=r(dt,"P",{});var ks=i(yt);Li=s(ks,"Configuration objects inherit from "),Jn=r(ks,"A",{href:!0});var tf=i(Jn);Ni=s(tf,"PretrainedConfig"),tf.forEach(t),Wi=s(ks,` and can be used to control the model outputs. Read the
documentation from `),Xn=r(ks,"A",{href:!0});var of=i(Xn);Bi=s(of,"PretrainedConfig"),of.forEach(t),Ui=s(ks," for more information."),ks.forEach(t),Ri=d(dt),js=r(dt,"P",{});var nf=i(js);Vi=s(nf,"Examples:"),nf.forEach(t),Ki=d(dt),w(Io.$$.fragment,dt),dt.forEach(t),ir=d(o),It=r(o,"H2",{class:!0});var Fr=i(It);Vt=r(Fr,"A",{id:!0,class:!0,href:!0});var sf=i(Vt);xs=r(sf,"SPAN",{});var af=i(xs);w(Ao.$$.fragment,af),af.forEach(t),sf.forEach(t),Ji=d(Fr),Hs=r(Fr,"SPAN",{});var rf=i(Hs);Xi=s(rf,"OpenAIGPTTokenizer"),rf.forEach(t),Fr.forEach(t),lr=d(o),Ce=r(o,"DIV",{class:!0});var ct=i(Ce);w(Oo.$$.fragment,ct),Qi=d(ct),Ss=r(ct,"P",{});var lf=i(Ss);Yi=s(lf,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),lf.forEach(t),Zi=d(ct),$o=r(ct,"UL",{});var Cr=i($o);Ls=r(Cr,"LI",{});var df=i(Ls);el=s(df,"lowercases all inputs,"),df.forEach(t),tl=d(Cr),rt=r(Cr,"LI",{});var vo=i(rt);ol=s(vo,"uses "),Ns=r(vo,"CODE",{});var cf=i(Ns);nl=s(cf,"SpaCy"),cf.forEach(t),sl=s(vo," tokenizer and "),Ws=r(vo,"CODE",{});var pf=i(Ws);al=s(pf,"ftfy"),pf.forEach(t),rl=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Bs=r(vo,"CODE",{});var hf=i(Bs);il=s(hf,"BasicTokenizer"),hf.forEach(t),ll=s(vo," if not."),vo.forEach(t),Cr.forEach(t),dl=d(ct),Go=r(ct,"P",{});var Dr=i(Go);cl=s(Dr,"This tokenizer inherits from "),Qn=r(Dr,"A",{href:!0});var ff=i(Qn);pl=s(ff,"PreTrainedTokenizer"),ff.forEach(t),hl=s(Dr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dr.forEach(t),fl=d(ct),Yn=r(ct,"DIV",{class:!0});var uf=i(Yn);w(Mo.$$.fragment,uf),uf.forEach(t),ct.forEach(t),dr=d(o),At=r(o,"H2",{class:!0});var jr=i(At);Kt=r(jr,"A",{id:!0,class:!0,href:!0});var mf=i(Kt);Us=r(mf,"SPAN",{});var gf=i(Us);w(Eo.$$.fragment,gf),gf.forEach(t),mf.forEach(t),ul=d(jr),Rs=r(jr,"SPAN",{});var _f=i(Rs);ml=s(_f,"OpenAIGPTTokenizerFast"),_f.forEach(t),jr.forEach(t),cr=d(o),Qe=r(o,"DIV",{class:!0});var ko=i(Qe);w(zo.$$.fragment,ko),gl=d(ko),qo=r(ko,"P",{});var xr=i(qo);_l=s(xr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Vs=r(xr,"EM",{});var Tf=i(Vs);Tl=s(Tf,"tokenizers"),Tf.forEach(t),vl=s(xr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),xr.forEach(t),kl=d(ko),Fo=r(ko,"UL",{});var Hr=i(Fo);Ks=r(Hr,"LI",{});var vf=i(Ks);bl=s(vf,"lower case all inputs"),vf.forEach(t),wl=d(Hr),Js=r(Hr,"LI",{});var kf=i(Js);Pl=s(kf,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),kf.forEach(t),Hr.forEach(t),yl=d(ko),Co=r(ko,"P",{});var Sr=i(Co);Il=s(Sr,"This tokenizer inherits from "),Zn=r(Sr,"A",{href:!0});var bf=i(Zn);Al=s(bf,"PreTrainedTokenizerFast"),bf.forEach(t),Ol=s(Sr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Sr.forEach(t),ko.forEach(t),pr=d(o),Ot=r(o,"H2",{class:!0});var Lr=i(Ot);Jt=r(Lr,"A",{id:!0,class:!0,href:!0});var wf=i(Jt);Xs=r(wf,"SPAN",{});var Pf=i(Xs);w(Do.$$.fragment,Pf),Pf.forEach(t),wf.forEach(t),$l=d(Lr),Qs=r(Lr,"SPAN",{});var yf=i(Qs);Gl=s(yf,"OpenAI specific outputs"),yf.forEach(t),Lr.forEach(t),hr=d(o),$t=r(o,"DIV",{class:!0});var Nr=i($t);w(jo.$$.fragment,Nr),Ml=d(Nr),Ys=r(Nr,"P",{});var If=i(Ys);El=s(If,"Base class for outputs of models predicting if two sentences are consecutive or not."),If.forEach(t),Nr.forEach(t),fr=d(o),Gt=r(o,"DIV",{class:!0});var Wr=i(Gt);w(xo.$$.fragment,Wr),zl=d(Wr),Zs=r(Wr,"P",{});var Af=i(Zs);ql=s(Af,"Base class for outputs of models predicting if two sentences are consecutive or not."),Af.forEach(t),Wr.forEach(t),ur=d(o),Mt=r(o,"H2",{class:!0});var Br=i(Mt);Xt=r(Br,"A",{id:!0,class:!0,href:!0});var Of=i(Xt);ea=r(Of,"SPAN",{});var $f=i(ea);w(Ho.$$.fragment,$f),$f.forEach(t),Of.forEach(t),Fl=d(Br),ta=r(Br,"SPAN",{});var Gf=i(ta);Cl=s(Gf,"OpenAIGPTModel"),Gf.forEach(t),Br.forEach(t),mr=d(o),De=r(o,"DIV",{class:!0});var pt=i(De);w(So.$$.fragment,pt),Dl=d(pt),oa=r(pt,"P",{});var Mf=i(oa);jl=s(Mf,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Mf.forEach(t),xl=d(pt),Lo=r(pt,"P",{});var Ur=i(Lo);Hl=s(Ur,"This model inherits from "),es=r(Ur,"A",{href:!0});var Ef=i(es);Sl=s(Ef,"PreTrainedModel"),Ef.forEach(t),Ll=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),Nl=d(pt),No=r(pt,"P",{});var Rr=i(No);Wl=s(Rr,"This model is also a PyTorch "),Wo=r(Rr,"A",{href:!0,rel:!0});var zf=i(Wo);Bl=s(zf,"torch.nn.Module"),zf.forEach(t),Ul=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),Rl=d(pt),Ne=r(pt,"DIV",{class:!0});var ht=i(Ne);w(Bo.$$.fragment,ht),Vl=d(ht),Et=r(ht,"P",{});var bs=i(Et);Kl=s(bs,"The "),ts=r(bs,"A",{href:!0});var qf=i(ts);Jl=s(qf,"OpenAIGPTModel"),qf.forEach(t),Xl=s(bs," forward method, overrides the "),na=r(bs,"CODE",{});var Ff=i(na);Ql=s(Ff,"__call__"),Ff.forEach(t),Yl=s(bs," special method."),bs.forEach(t),Zl=d(ht),w(Qt.$$.fragment,ht),ed=d(ht),sa=r(ht,"P",{});var Cf=i(sa);td=s(Cf,"Example:"),Cf.forEach(t),od=d(ht),w(Uo.$$.fragment,ht),ht.forEach(t),pt.forEach(t),gr=d(o),zt=r(o,"H2",{class:!0});var Vr=i(zt);Yt=r(Vr,"A",{id:!0,class:!0,href:!0});var Df=i(Yt);aa=r(Df,"SPAN",{});var jf=i(aa);w(Ro.$$.fragment,jf),jf.forEach(t),Df.forEach(t),nd=d(Vr),ra=r(Vr,"SPAN",{});var xf=i(ra);sd=s(xf,"OpenAIGPTLMHeadModel"),xf.forEach(t),Vr.forEach(t),_r=d(o),je=r(o,"DIV",{class:!0});var ft=i(je);w(Vo.$$.fragment,ft),ad=d(ft),ia=r(ft,"P",{});var Hf=i(ia);rd=s(Hf,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Hf.forEach(t),id=d(ft),Ko=r(ft,"P",{});var Kr=i(Ko);ld=s(Kr,"This model inherits from "),os=r(Kr,"A",{href:!0});var Sf=i(os);dd=s(Sf,"PreTrainedModel"),Sf.forEach(t),cd=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),pd=d(ft),Jo=r(ft,"P",{});var Jr=i(Jo);hd=s(Jr,"This model is also a PyTorch "),Xo=r(Jr,"A",{href:!0,rel:!0});var Lf=i(Xo);fd=s(Lf,"torch.nn.Module"),Lf.forEach(t),ud=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),md=d(ft),We=r(ft,"DIV",{class:!0});var ut=i(We);w(Qo.$$.fragment,ut),gd=d(ut),qt=r(ut,"P",{});var ws=i(qt);_d=s(ws,"The "),ns=r(ws,"A",{href:!0});var Nf=i(ns);Td=s(Nf,"OpenAIGPTLMHeadModel"),Nf.forEach(t),vd=s(ws," forward method, overrides the "),la=r(ws,"CODE",{});var Wf=i(la);kd=s(Wf,"__call__"),Wf.forEach(t),bd=s(ws," special method."),ws.forEach(t),wd=d(ut),w(Zt.$$.fragment,ut),Pd=d(ut),da=r(ut,"P",{});var Bf=i(da);yd=s(Bf,"Example:"),Bf.forEach(t),Id=d(ut),w(Yo.$$.fragment,ut),ut.forEach(t),ft.forEach(t),Tr=d(o),Ft=r(o,"H2",{class:!0});var Xr=i(Ft);eo=r(Xr,"A",{id:!0,class:!0,href:!0});var Uf=i(eo);ca=r(Uf,"SPAN",{});var Rf=i(ca);w(Zo.$$.fragment,Rf),Rf.forEach(t),Uf.forEach(t),Ad=d(Xr),pa=r(Xr,"SPAN",{});var Vf=i(pa);Od=s(Vf,"OpenAIGPTDoubleHeadsModel"),Vf.forEach(t),Xr.forEach(t),vr=d(o),xe=r(o,"DIV",{class:!0});var mt=i(xe);w(en.$$.fragment,mt),$d=d(mt),ha=r(mt,"P",{});var Kf=i(ha);Gd=s(Kf,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Kf.forEach(t),Md=d(mt),tn=r(mt,"P",{});var Qr=i(tn);Ed=s(Qr,"This model inherits from "),ss=r(Qr,"A",{href:!0});var Jf=i(ss);zd=s(Jf,"PreTrainedModel"),Jf.forEach(t),qd=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),Fd=d(mt),on=r(mt,"P",{});var Yr=i(on);Cd=s(Yr,"This model is also a PyTorch "),nn=r(Yr,"A",{href:!0,rel:!0});var Xf=i(nn);Dd=s(Xf,"torch.nn.Module"),Xf.forEach(t),jd=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(t),xd=d(mt),Be=r(mt,"DIV",{class:!0});var gt=i(Be);w(sn.$$.fragment,gt),Hd=d(gt),Ct=r(gt,"P",{});var Ps=i(Ct);Sd=s(Ps,"The "),as=r(Ps,"A",{href:!0});var Qf=i(as);Ld=s(Qf,"OpenAIGPTDoubleHeadsModel"),Qf.forEach(t),Nd=s(Ps," forward method, overrides the "),fa=r(Ps,"CODE",{});var Yf=i(fa);Wd=s(Yf,"__call__"),Yf.forEach(t),Bd=s(Ps," special method."),Ps.forEach(t),Ud=d(gt),w(to.$$.fragment,gt),Rd=d(gt),ua=r(gt,"P",{});var Zf=i(ua);Vd=s(Zf,"Examples:"),Zf.forEach(t),Kd=d(gt),w(an.$$.fragment,gt),gt.forEach(t),mt.forEach(t),kr=d(o),Dt=r(o,"H2",{class:!0});var Zr=i(Dt);oo=r(Zr,"A",{id:!0,class:!0,href:!0});var eu=i(oo);ma=r(eu,"SPAN",{});var tu=i(ma);w(rn.$$.fragment,tu),tu.forEach(t),eu.forEach(t),Jd=d(Zr),ga=r(Zr,"SPAN",{});var ou=i(ga);Xd=s(ou,"OpenAIGPTForSequenceClassification"),ou.forEach(t),Zr.forEach(t),br=d(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(ln.$$.fragment,_t),Qd=d(_t),Se=r(_t,"P",{});var et=i(Se);Yd=s(et,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),rs=r(et,"A",{href:!0});var nu=i(rs);Zd=s(nu,"OpenAIGPTForSequenceClassification"),nu.forEach(t),ec=s(et,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),_a=r(et,"CODE",{});var su=i(_a);tc=s(su,"pad_token_id"),su.forEach(t),oc=s(et,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),Ta=r(et,"CODE",{});var au=i(Ta);nc=s(au,"pad_token_id"),au.forEach(t),sc=s(et,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),va=r(et,"CODE",{});var ru=i(va);ac=s(ru,"inputs_embeds"),ru.forEach(t),rc=s(et," are passed instead of "),ka=r(et,"CODE",{});var iu=i(ka);ic=s(iu,"input_ids"),iu.forEach(t),lc=s(et,`, it does the same (take
the last value in each row of the batch).`),et.forEach(t),dc=d(_t),dn=r(_t,"P",{});var ei=i(dn);cc=s(ei,"This model inherits from "),is=r(ei,"A",{href:!0});var lu=i(is);pc=s(lu,"PreTrainedModel"),lu.forEach(t),hc=s(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),fc=d(_t),cn=r(_t,"P",{});var ti=i(cn);uc=s(ti,"This model is also a PyTorch "),pn=r(ti,"A",{href:!0,rel:!0});var du=i(pn);mc=s(du,"torch.nn.Module"),du.forEach(t),gc=s(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),_c=d(_t),Pe=r(_t,"DIV",{class:!0});var Je=i(Pe);w(hn.$$.fragment,Je),Tc=d(Je),jt=r(Je,"P",{});var ys=i(jt);vc=s(ys,"The "),ls=r(ys,"A",{href:!0});var cu=i(ls);kc=s(cu,"OpenAIGPTForSequenceClassification"),cu.forEach(t),bc=s(ys," forward method, overrides the "),ba=r(ys,"CODE",{});var pu=i(ba);wc=s(pu,"__call__"),pu.forEach(t),Pc=s(ys," special method."),ys.forEach(t),yc=d(Je),w(no.$$.fragment,Je),Ic=d(Je),wa=r(Je,"P",{});var hu=i(wa);Ac=s(hu,"Example of single-label classification:"),hu.forEach(t),Oc=d(Je),w(fn.$$.fragment,Je),$c=d(Je),Pa=r(Je,"P",{});var fu=i(Pa);Gc=s(fu,"Example of multi-label classification:"),fu.forEach(t),Mc=d(Je),w(un.$$.fragment,Je),Je.forEach(t),_t.forEach(t),wr=d(o),xt=r(o,"H2",{class:!0});var oi=i(xt);so=r(oi,"A",{id:!0,class:!0,href:!0});var uu=i(so);ya=r(uu,"SPAN",{});var mu=i(ya);w(mn.$$.fragment,mu),mu.forEach(t),uu.forEach(t),Ec=d(oi),Ia=r(oi,"SPAN",{});var gu=i(Ia);zc=s(gu,"TFOpenAIGPTModel"),gu.forEach(t),oi.forEach(t),Pr=d(o),ye=r(o,"DIV",{class:!0});var tt=i(ye);w(gn.$$.fragment,tt),qc=d(tt),Aa=r(tt,"P",{});var _u=i(Aa);Fc=s(_u,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),_u.forEach(t),Cc=d(tt),_n=r(tt,"P",{});var ni=i(_n);Dc=s(ni,"This model inherits from "),ds=r(ni,"A",{href:!0});var Tu=i(ds);jc=s(Tu,"TFPreTrainedModel"),Tu.forEach(t),xc=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),Hc=d(tt),Tn=r(tt,"P",{});var si=i(Tn);Sc=s(si,"This model is also a "),vn=r(si,"A",{href:!0,rel:!0});var vu=i(vn);Lc=s(vu,"tf.keras.Model"),vu.forEach(t),Nc=s(si,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),si.forEach(t),Wc=d(tt),w(ao.$$.fragment,tt),Bc=d(tt),Ue=r(tt,"DIV",{class:!0});var Tt=i(Ue);w(kn.$$.fragment,Tt),Uc=d(Tt),Ht=r(Tt,"P",{});var Is=i(Ht);Rc=s(Is,"The "),cs=r(Is,"A",{href:!0});var ku=i(cs);Vc=s(ku,"TFOpenAIGPTModel"),ku.forEach(t),Kc=s(Is," forward method, overrides the "),Oa=r(Is,"CODE",{});var bu=i(Oa);Jc=s(bu,"__call__"),bu.forEach(t),Xc=s(Is," special method."),Is.forEach(t),Qc=d(Tt),w(ro.$$.fragment,Tt),Yc=d(Tt),$a=r(Tt,"P",{});var wu=i($a);Zc=s(wu,"Example:"),wu.forEach(t),ep=d(Tt),w(bn.$$.fragment,Tt),Tt.forEach(t),tt.forEach(t),yr=d(o),St=r(o,"H2",{class:!0});var ai=i(St);io=r(ai,"A",{id:!0,class:!0,href:!0});var Pu=i(io);Ga=r(Pu,"SPAN",{});var yu=i(Ga);w(wn.$$.fragment,yu),yu.forEach(t),Pu.forEach(t),tp=d(ai),Ma=r(ai,"SPAN",{});var Iu=i(Ma);op=s(Iu,"TFOpenAIGPTLMHeadModel"),Iu.forEach(t),ai.forEach(t),Ir=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);w(Pn.$$.fragment,ot),np=d(ot),Ea=r(ot,"P",{});var Au=i(Ea);sp=s(Au,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Au.forEach(t),ap=d(ot),yn=r(ot,"P",{});var ri=i(yn);rp=s(ri,"This model inherits from "),ps=r(ri,"A",{href:!0});var Ou=i(ps);ip=s(Ou,"TFPreTrainedModel"),Ou.forEach(t),lp=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),dp=d(ot),In=r(ot,"P",{});var ii=i(In);cp=s(ii,"This model is also a "),An=r(ii,"A",{href:!0,rel:!0});var $u=i(An);pp=s($u,"tf.keras.Model"),$u.forEach(t),hp=s(ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ii.forEach(t),fp=d(ot),w(lo.$$.fragment,ot),up=d(ot),Re=r(ot,"DIV",{class:!0});var vt=i(Re);w(On.$$.fragment,vt),mp=d(vt),Lt=r(vt,"P",{});var As=i(Lt);gp=s(As,"The "),hs=r(As,"A",{href:!0});var Gu=i(hs);_p=s(Gu,"TFOpenAIGPTLMHeadModel"),Gu.forEach(t),Tp=s(As," forward method, overrides the "),za=r(As,"CODE",{});var Mu=i(za);vp=s(Mu,"__call__"),Mu.forEach(t),kp=s(As," special method."),As.forEach(t),bp=d(vt),w(co.$$.fragment,vt),wp=d(vt),qa=r(vt,"P",{});var Eu=i(qa);Pp=s(Eu,"Example:"),Eu.forEach(t),yp=d(vt),w($n.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Ar=d(o),Nt=r(o,"H2",{class:!0});var li=i(Nt);po=r(li,"A",{id:!0,class:!0,href:!0});var zu=i(po);Fa=r(zu,"SPAN",{});var qu=i(Fa);w(Gn.$$.fragment,qu),qu.forEach(t),zu.forEach(t),Ip=d(li),Ca=r(li,"SPAN",{});var Fu=i(Ca);Ap=s(Fu,"TFOpenAIGPTDoubleHeadsModel"),Fu.forEach(t),li.forEach(t),Or=d(o),Ae=r(o,"DIV",{class:!0});var nt=i(Ae);w(Mn.$$.fragment,nt),Op=d(nt),Da=r(nt,"P",{});var Cu=i(Da);$p=s(Cu,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Cu.forEach(t),Gp=d(nt),En=r(nt,"P",{});var di=i(En);Mp=s(di,"This model inherits from "),fs=r(di,"A",{href:!0});var Du=i(fs);Ep=s(Du,"TFPreTrainedModel"),Du.forEach(t),zp=s(di,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di.forEach(t),qp=d(nt),zn=r(nt,"P",{});var ci=i(zn);Fp=s(ci,"This model is also a "),qn=r(ci,"A",{href:!0,rel:!0});var ju=i(qn);Cp=s(ju,"tf.keras.Model"),ju.forEach(t),Dp=s(ci,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ci.forEach(t),jp=d(nt),w(ho.$$.fragment,nt),xp=d(nt),Ve=r(nt,"DIV",{class:!0});var kt=i(Ve);w(Fn.$$.fragment,kt),Hp=d(kt),Wt=r(kt,"P",{});var Os=i(Wt);Sp=s(Os,"The "),us=r(Os,"A",{href:!0});var xu=i(us);Lp=s(xu,"TFOpenAIGPTDoubleHeadsModel"),xu.forEach(t),Np=s(Os," forward method, overrides the "),ja=r(Os,"CODE",{});var Hu=i(ja);Wp=s(Hu,"__call__"),Hu.forEach(t),Bp=s(Os," special method."),Os.forEach(t),Up=d(kt),w(fo.$$.fragment,kt),Rp=d(kt),xa=r(kt,"P",{});var Su=i(xa);Vp=s(Su,"Examples:"),Su.forEach(t),Kp=d(kt),w(Cn.$$.fragment,kt),kt.forEach(t),nt.forEach(t),$r=d(o),Bt=r(o,"H2",{class:!0});var pi=i(Bt);uo=r(pi,"A",{id:!0,class:!0,href:!0});var Lu=i(uo);Ha=r(Lu,"SPAN",{});var Nu=i(Ha);w(Dn.$$.fragment,Nu),Nu.forEach(t),Lu.forEach(t),Jp=d(pi),Sa=r(pi,"SPAN",{});var Wu=i(Sa);Xp=s(Wu,"TFOpenAIGPTForSequenceClassification"),Wu.forEach(t),pi.forEach(t),Gr=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);w(jn.$$.fragment,Ge),Qp=d(Ge),La=r(Ge,"P",{});var Bu=i(La);Yp=s(Bu,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Bu.forEach(t),Zp=d(Ge),ms=r(Ge,"P",{});var qh=i(ms);gs=r(qh,"A",{href:!0});var Uu=i(gs);eh=s(Uu,"TFOpenAIGPTForSequenceClassification"),Uu.forEach(t),th=s(qh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),qh.forEach(t),oh=d(Ge),Ye=r(Ge,"P",{});var bt=i(Ye);nh=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=r(bt,"CODE",{});var Ru=i(Na);sh=s(Ru,"pad_token_id"),Ru.forEach(t),ah=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Wa=r(bt,"CODE",{});var Vu=i(Wa);rh=s(Vu,"pad_token_id"),Vu.forEach(t),ih=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ba=r(bt,"CODE",{});var Ku=i(Ba);lh=s(Ku,"inputs_embeds"),Ku.forEach(t),dh=s(bt," are passed instead of "),Ua=r(bt,"CODE",{});var Ju=i(Ua);ch=s(Ju,"input_ids"),Ju.forEach(t),ph=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),hh=d(Ge),xn=r(Ge,"P",{});var hi=i(xn);fh=s(hi,"This model inherits from "),_s=r(hi,"A",{href:!0});var Xu=i(_s);uh=s(Xu,"TFPreTrainedModel"),Xu.forEach(t),mh=s(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),gh=d(Ge),Hn=r(Ge,"P",{});var fi=i(Hn);_h=s(fi,"This model is also a "),Sn=r(fi,"A",{href:!0,rel:!0});var Qu=i(Sn);Th=s(Qu,"tf.keras.Model"),Qu.forEach(t),vh=s(fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi.forEach(t),kh=d(Ge),w(mo.$$.fragment,Ge),bh=d(Ge),Ke=r(Ge,"DIV",{class:!0});var wt=i(Ke);w(Ln.$$.fragment,wt),wh=d(wt),Ut=r(wt,"P",{});var $s=i(Ut);Ph=s($s,"The "),Ts=r($s,"A",{href:!0});var Yu=i(Ts);yh=s(Yu,"TFOpenAIGPTForSequenceClassification"),Yu.forEach(t),Ih=s($s," forward method, overrides the "),Ra=r($s,"CODE",{});var Zu=i(Ra);Ah=s(Zu,"__call__"),Zu.forEach(t),Oh=s($s," special method."),$s.forEach(t),$h=d(wt),w(go.$$.fragment,wt),Gh=d(wt),Va=r(wt,"P",{});var em=i(Va);Mh=s(em,"Example:"),em.forEach(t),Eh=d(wt),w(Nn.$$.fragment,wt),wt.forEach(t),Ge.forEach(t),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(Tm)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(m,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(G,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(R,"href","https://transformer.huggingface.co/doc/gpt"),c(R,"rel","nofollow"),c(ve,"href","https://huggingface.co/thomwolf"),c(ve,"rel","nofollow"),c(ke,"href","https://github.com/openai/finetune-transformer-lm"),c(ke,"rel","nofollow"),c(Rn,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(Pt,"class","relative group"),c(Vn,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Kn,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(yo,"href","https://huggingface.co/openai-gpt"),c(yo,"rel","nofollow"),c(Jn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Xn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Fe,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(Qn,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Yn,"class","docstring"),c(Ce,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(At,"class","relative group"),c(Zn,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Qe,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Ot,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(es,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Wo,"rel","nofollow"),c(ts,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Ne,"class","docstring"),c(De,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(os,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(ns,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),c(We,"class","docstring"),c(je,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(Ft,"class","relative group"),c(ss,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(as,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(Be,"class","docstring"),c(xe,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(Dt,"class","relative group"),c(rs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(is,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(Pe,"class","docstring"),c(He,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(xt,"class","relative group"),c(ds,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(vn,"rel","nofollow"),c(cs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Ue,"class","docstring"),c(ye,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(ps,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(An,"rel","nofollow"),c(hs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Re,"class","docstring"),c(Ie,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(fs,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qn,"rel","nofollow"),c(us,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Ve,"class","docstring"),c(Ae,"class","docstring"),c(uo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Bt,"class","relative group"),c(gs,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(_s,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sn,"rel","nofollow"),c(Ts,"href","/docs/transformers/v4.17.0/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Ke,"class","docstring"),c(le,"class","docstring")},m(o,u){e(document.head,f),h(o,O,u),h(o,m,u),e(m,g),e(g,v),P(T,v,null),e(m,_),e(m,$),e($,he),h(o,J,u),h(o,G,u),e(G,X),e(X,j),P(Y,j,null),e(G,fe),e(G,x),e(x,ue),h(o,de,u),h(o,S,u),e(S,F),e(S,Z),e(Z,ee),e(S,M),h(o,z,u),h(o,oe,u),e(oe,W),h(o,ce,u),h(o,ne,u),e(ne,H),e(H,me),h(o,pe,u),h(o,E,u),e(E,ge),h(o,L,u),h(o,Q,u),e(Q,re),e(re,B),e(Q,_e),e(Q,te),e(te,C),e(te,ie),e(ie,U),e(te,Te),h(o,p,u),h(o,k,u),e(k,R),e(R,Me),e(k,Ee),h(o,q,u),h(o,se,u),e(se,ze),e(se,ve),e(ve,D),e(se,V),e(se,ke),e(ke,qe),e(se,K),h(o,Oe,u),h(o,we,u),e(we,be),h(o,$e,u),h(o,Ze,u),e(Ze,ui),e(Ze,Gs),e(Gs,mi),e(Ze,gi),e(Ze,Ms),e(Ms,_i),e(Ze,Ti),e(Ze,Es),e(Es,vi),e(Ze,ki),h(o,nr,u),P(bo,o,u),h(o,sr,u),h(o,Le,u),e(Le,bi),e(Le,zs),e(zs,wi),e(Le,Pi),e(Le,qs),e(qs,yi),e(Le,Ii),e(Le,Rn),e(Rn,Ai),e(Le,Oi),e(Le,Fs),e(Fs,$i),e(Le,Gi),h(o,ar,u),h(o,Pt,u),e(Pt,Rt),e(Rt,Cs),P(wo,Cs,null),e(Pt,Mi),e(Pt,Ds),e(Ds,Ei),h(o,rr,u),h(o,Fe,u),P(Po,Fe,null),e(Fe,zi),e(Fe,at),e(at,qi),e(at,Vn),e(Vn,Fi),e(at,Ci),e(at,Kn),e(Kn,Di),e(at,ji),e(at,yo),e(yo,xi),e(at,Hi),e(Fe,Si),e(Fe,yt),e(yt,Li),e(yt,Jn),e(Jn,Ni),e(yt,Wi),e(yt,Xn),e(Xn,Bi),e(yt,Ui),e(Fe,Ri),e(Fe,js),e(js,Vi),e(Fe,Ki),P(Io,Fe,null),h(o,ir,u),h(o,It,u),e(It,Vt),e(Vt,xs),P(Ao,xs,null),e(It,Ji),e(It,Hs),e(Hs,Xi),h(o,lr,u),h(o,Ce,u),P(Oo,Ce,null),e(Ce,Qi),e(Ce,Ss),e(Ss,Yi),e(Ce,Zi),e(Ce,$o),e($o,Ls),e(Ls,el),e($o,tl),e($o,rt),e(rt,ol),e(rt,Ns),e(Ns,nl),e(rt,sl),e(rt,Ws),e(Ws,al),e(rt,rl),e(rt,Bs),e(Bs,il),e(rt,ll),e(Ce,dl),e(Ce,Go),e(Go,cl),e(Go,Qn),e(Qn,pl),e(Go,hl),e(Ce,fl),e(Ce,Yn),P(Mo,Yn,null),h(o,dr,u),h(o,At,u),e(At,Kt),e(Kt,Us),P(Eo,Us,null),e(At,ul),e(At,Rs),e(Rs,ml),h(o,cr,u),h(o,Qe,u),P(zo,Qe,null),e(Qe,gl),e(Qe,qo),e(qo,_l),e(qo,Vs),e(Vs,Tl),e(qo,vl),e(Qe,kl),e(Qe,Fo),e(Fo,Ks),e(Ks,bl),e(Fo,wl),e(Fo,Js),e(Js,Pl),e(Qe,yl),e(Qe,Co),e(Co,Il),e(Co,Zn),e(Zn,Al),e(Co,Ol),h(o,pr,u),h(o,Ot,u),e(Ot,Jt),e(Jt,Xs),P(Do,Xs,null),e(Ot,$l),e(Ot,Qs),e(Qs,Gl),h(o,hr,u),h(o,$t,u),P(jo,$t,null),e($t,Ml),e($t,Ys),e(Ys,El),h(o,fr,u),h(o,Gt,u),P(xo,Gt,null),e(Gt,zl),e(Gt,Zs),e(Zs,ql),h(o,ur,u),h(o,Mt,u),e(Mt,Xt),e(Xt,ea),P(Ho,ea,null),e(Mt,Fl),e(Mt,ta),e(ta,Cl),h(o,mr,u),h(o,De,u),P(So,De,null),e(De,Dl),e(De,oa),e(oa,jl),e(De,xl),e(De,Lo),e(Lo,Hl),e(Lo,es),e(es,Sl),e(Lo,Ll),e(De,Nl),e(De,No),e(No,Wl),e(No,Wo),e(Wo,Bl),e(No,Ul),e(De,Rl),e(De,Ne),P(Bo,Ne,null),e(Ne,Vl),e(Ne,Et),e(Et,Kl),e(Et,ts),e(ts,Jl),e(Et,Xl),e(Et,na),e(na,Ql),e(Et,Yl),e(Ne,Zl),P(Qt,Ne,null),e(Ne,ed),e(Ne,sa),e(sa,td),e(Ne,od),P(Uo,Ne,null),h(o,gr,u),h(o,zt,u),e(zt,Yt),e(Yt,aa),P(Ro,aa,null),e(zt,nd),e(zt,ra),e(ra,sd),h(o,_r,u),h(o,je,u),P(Vo,je,null),e(je,ad),e(je,ia),e(ia,rd),e(je,id),e(je,Ko),e(Ko,ld),e(Ko,os),e(os,dd),e(Ko,cd),e(je,pd),e(je,Jo),e(Jo,hd),e(Jo,Xo),e(Xo,fd),e(Jo,ud),e(je,md),e(je,We),P(Qo,We,null),e(We,gd),e(We,qt),e(qt,_d),e(qt,ns),e(ns,Td),e(qt,vd),e(qt,la),e(la,kd),e(qt,bd),e(We,wd),P(Zt,We,null),e(We,Pd),e(We,da),e(da,yd),e(We,Id),P(Yo,We,null),h(o,Tr,u),h(o,Ft,u),e(Ft,eo),e(eo,ca),P(Zo,ca,null),e(Ft,Ad),e(Ft,pa),e(pa,Od),h(o,vr,u),h(o,xe,u),P(en,xe,null),e(xe,$d),e(xe,ha),e(ha,Gd),e(xe,Md),e(xe,tn),e(tn,Ed),e(tn,ss),e(ss,zd),e(tn,qd),e(xe,Fd),e(xe,on),e(on,Cd),e(on,nn),e(nn,Dd),e(on,jd),e(xe,xd),e(xe,Be),P(sn,Be,null),e(Be,Hd),e(Be,Ct),e(Ct,Sd),e(Ct,as),e(as,Ld),e(Ct,Nd),e(Ct,fa),e(fa,Wd),e(Ct,Bd),e(Be,Ud),P(to,Be,null),e(Be,Rd),e(Be,ua),e(ua,Vd),e(Be,Kd),P(an,Be,null),h(o,kr,u),h(o,Dt,u),e(Dt,oo),e(oo,ma),P(rn,ma,null),e(Dt,Jd),e(Dt,ga),e(ga,Xd),h(o,br,u),h(o,He,u),P(ln,He,null),e(He,Qd),e(He,Se),e(Se,Yd),e(Se,rs),e(rs,Zd),e(Se,ec),e(Se,_a),e(_a,tc),e(Se,oc),e(Se,Ta),e(Ta,nc),e(Se,sc),e(Se,va),e(va,ac),e(Se,rc),e(Se,ka),e(ka,ic),e(Se,lc),e(He,dc),e(He,dn),e(dn,cc),e(dn,is),e(is,pc),e(dn,hc),e(He,fc),e(He,cn),e(cn,uc),e(cn,pn),e(pn,mc),e(cn,gc),e(He,_c),e(He,Pe),P(hn,Pe,null),e(Pe,Tc),e(Pe,jt),e(jt,vc),e(jt,ls),e(ls,kc),e(jt,bc),e(jt,ba),e(ba,wc),e(jt,Pc),e(Pe,yc),P(no,Pe,null),e(Pe,Ic),e(Pe,wa),e(wa,Ac),e(Pe,Oc),P(fn,Pe,null),e(Pe,$c),e(Pe,Pa),e(Pa,Gc),e(Pe,Mc),P(un,Pe,null),h(o,wr,u),h(o,xt,u),e(xt,so),e(so,ya),P(mn,ya,null),e(xt,Ec),e(xt,Ia),e(Ia,zc),h(o,Pr,u),h(o,ye,u),P(gn,ye,null),e(ye,qc),e(ye,Aa),e(Aa,Fc),e(ye,Cc),e(ye,_n),e(_n,Dc),e(_n,ds),e(ds,jc),e(_n,xc),e(ye,Hc),e(ye,Tn),e(Tn,Sc),e(Tn,vn),e(vn,Lc),e(Tn,Nc),e(ye,Wc),P(ao,ye,null),e(ye,Bc),e(ye,Ue),P(kn,Ue,null),e(Ue,Uc),e(Ue,Ht),e(Ht,Rc),e(Ht,cs),e(cs,Vc),e(Ht,Kc),e(Ht,Oa),e(Oa,Jc),e(Ht,Xc),e(Ue,Qc),P(ro,Ue,null),e(Ue,Yc),e(Ue,$a),e($a,Zc),e(Ue,ep),P(bn,Ue,null),h(o,yr,u),h(o,St,u),e(St,io),e(io,Ga),P(wn,Ga,null),e(St,tp),e(St,Ma),e(Ma,op),h(o,Ir,u),h(o,Ie,u),P(Pn,Ie,null),e(Ie,np),e(Ie,Ea),e(Ea,sp),e(Ie,ap),e(Ie,yn),e(yn,rp),e(yn,ps),e(ps,ip),e(yn,lp),e(Ie,dp),e(Ie,In),e(In,cp),e(In,An),e(An,pp),e(In,hp),e(Ie,fp),P(lo,Ie,null),e(Ie,up),e(Ie,Re),P(On,Re,null),e(Re,mp),e(Re,Lt),e(Lt,gp),e(Lt,hs),e(hs,_p),e(Lt,Tp),e(Lt,za),e(za,vp),e(Lt,kp),e(Re,bp),P(co,Re,null),e(Re,wp),e(Re,qa),e(qa,Pp),e(Re,yp),P($n,Re,null),h(o,Ar,u),h(o,Nt,u),e(Nt,po),e(po,Fa),P(Gn,Fa,null),e(Nt,Ip),e(Nt,Ca),e(Ca,Ap),h(o,Or,u),h(o,Ae,u),P(Mn,Ae,null),e(Ae,Op),e(Ae,Da),e(Da,$p),e(Ae,Gp),e(Ae,En),e(En,Mp),e(En,fs),e(fs,Ep),e(En,zp),e(Ae,qp),e(Ae,zn),e(zn,Fp),e(zn,qn),e(qn,Cp),e(zn,Dp),e(Ae,jp),P(ho,Ae,null),e(Ae,xp),e(Ae,Ve),P(Fn,Ve,null),e(Ve,Hp),e(Ve,Wt),e(Wt,Sp),e(Wt,us),e(us,Lp),e(Wt,Np),e(Wt,ja),e(ja,Wp),e(Wt,Bp),e(Ve,Up),P(fo,Ve,null),e(Ve,Rp),e(Ve,xa),e(xa,Vp),e(Ve,Kp),P(Cn,Ve,null),h(o,$r,u),h(o,Bt,u),e(Bt,uo),e(uo,Ha),P(Dn,Ha,null),e(Bt,Jp),e(Bt,Sa),e(Sa,Xp),h(o,Gr,u),h(o,le,u),P(jn,le,null),e(le,Qp),e(le,La),e(La,Yp),e(le,Zp),e(le,ms),e(ms,gs),e(gs,eh),e(ms,th),e(le,oh),e(le,Ye),e(Ye,nh),e(Ye,Na),e(Na,sh),e(Ye,ah),e(Ye,Wa),e(Wa,rh),e(Ye,ih),e(Ye,Ba),e(Ba,lh),e(Ye,dh),e(Ye,Ua),e(Ua,ch),e(Ye,ph),e(le,hh),e(le,xn),e(xn,fh),e(xn,_s),e(_s,uh),e(xn,mh),e(le,gh),e(le,Hn),e(Hn,_h),e(Hn,Sn),e(Sn,Th),e(Hn,vh),e(le,kh),P(mo,le,null),e(le,bh),e(le,Ke),P(Ln,Ke,null),e(Ke,wh),e(Ke,Ut),e(Ut,Ph),e(Ut,Ts),e(Ts,yh),e(Ut,Ih),e(Ut,Ra),e(Ra,Ah),e(Ut,Oh),e(Ke,$h),P(go,Ke,null),e(Ke,Gh),e(Ke,Va),e(Va,Mh),e(Ke,Eh),P(Nn,Ke,null),Mr=!0},p(o,[u]){const Wn={};u&2&&(Wn.$$scope={dirty:u,ctx:o}),Qt.$set(Wn);const Ka={};u&2&&(Ka.$$scope={dirty:u,ctx:o}),Zt.$set(Ka);const Ja={};u&2&&(Ja.$$scope={dirty:u,ctx:o}),to.$set(Ja);const Xa={};u&2&&(Xa.$$scope={dirty:u,ctx:o}),no.$set(Xa);const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:o}),ao.$set(Bn);const Qa={};u&2&&(Qa.$$scope={dirty:u,ctx:o}),ro.$set(Qa);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:o}),lo.$set(Ya);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),co.$set(Za);const Un={};u&2&&(Un.$$scope={dirty:u,ctx:o}),ho.$set(Un);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),fo.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),mo.$set(tr);const or={};u&2&&(or.$$scope={dirty:u,ctx:o}),go.$set(or)},i(o){Mr||(y(T.$$.fragment,o),y(Y.$$.fragment,o),y(bo.$$.fragment,o),y(wo.$$.fragment,o),y(Po.$$.fragment,o),y(Io.$$.fragment,o),y(Ao.$$.fragment,o),y(Oo.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(zo.$$.fragment,o),y(Do.$$.fragment,o),y(jo.$$.fragment,o),y(xo.$$.fragment,o),y(Ho.$$.fragment,o),y(So.$$.fragment,o),y(Bo.$$.fragment,o),y(Qt.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Vo.$$.fragment,o),y(Qo.$$.fragment,o),y(Zt.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(sn.$$.fragment,o),y(to.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(hn.$$.fragment,o),y(no.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(gn.$$.fragment,o),y(ao.$$.fragment,o),y(kn.$$.fragment,o),y(ro.$$.fragment,o),y(bn.$$.fragment,o),y(wn.$$.fragment,o),y(Pn.$$.fragment,o),y(lo.$$.fragment,o),y(On.$$.fragment,o),y(co.$$.fragment,o),y($n.$$.fragment,o),y(Gn.$$.fragment,o),y(Mn.$$.fragment,o),y(ho.$$.fragment,o),y(Fn.$$.fragment,o),y(fo.$$.fragment,o),y(Cn.$$.fragment,o),y(Dn.$$.fragment,o),y(jn.$$.fragment,o),y(mo.$$.fragment,o),y(Ln.$$.fragment,o),y(go.$$.fragment,o),y(Nn.$$.fragment,o),Mr=!0)},o(o){I(T.$$.fragment,o),I(Y.$$.fragment,o),I(bo.$$.fragment,o),I(wo.$$.fragment,o),I(Po.$$.fragment,o),I(Io.$$.fragment,o),I(Ao.$$.fragment,o),I(Oo.$$.fragment,o),I(Mo.$$.fragment,o),I(Eo.$$.fragment,o),I(zo.$$.fragment,o),I(Do.$$.fragment,o),I(jo.$$.fragment,o),I(xo.$$.fragment,o),I(Ho.$$.fragment,o),I(So.$$.fragment,o),I(Bo.$$.fragment,o),I(Qt.$$.fragment,o),I(Uo.$$.fragment,o),I(Ro.$$.fragment,o),I(Vo.$$.fragment,o),I(Qo.$$.fragment,o),I(Zt.$$.fragment,o),I(Yo.$$.fragment,o),I(Zo.$$.fragment,o),I(en.$$.fragment,o),I(sn.$$.fragment,o),I(to.$$.fragment,o),I(an.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(hn.$$.fragment,o),I(no.$$.fragment,o),I(fn.$$.fragment,o),I(un.$$.fragment,o),I(mn.$$.fragment,o),I(gn.$$.fragment,o),I(ao.$$.fragment,o),I(kn.$$.fragment,o),I(ro.$$.fragment,o),I(bn.$$.fragment,o),I(wn.$$.fragment,o),I(Pn.$$.fragment,o),I(lo.$$.fragment,o),I(On.$$.fragment,o),I(co.$$.fragment,o),I($n.$$.fragment,o),I(Gn.$$.fragment,o),I(Mn.$$.fragment,o),I(ho.$$.fragment,o),I(Fn.$$.fragment,o),I(fo.$$.fragment,o),I(Cn.$$.fragment,o),I(Dn.$$.fragment,o),I(jn.$$.fragment,o),I(mo.$$.fragment,o),I(Ln.$$.fragment,o),I(go.$$.fragment,o),I(Nn.$$.fragment,o),Mr=!1},d(o){t(f),o&&t(O),o&&t(m),A(T),o&&t(J),o&&t(G),A(Y),o&&t(de),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(pe),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(k),o&&t(q),o&&t(se),o&&t(Oe),o&&t(we),o&&t($e),o&&t(Ze),o&&t(nr),A(bo,o),o&&t(sr),o&&t(Le),o&&t(ar),o&&t(Pt),A(wo),o&&t(rr),o&&t(Fe),A(Po),A(Io),o&&t(ir),o&&t(It),A(Ao),o&&t(lr),o&&t(Ce),A(Oo),A(Mo),o&&t(dr),o&&t(At),A(Eo),o&&t(cr),o&&t(Qe),A(zo),o&&t(pr),o&&t(Ot),A(Do),o&&t(hr),o&&t($t),A(jo),o&&t(fr),o&&t(Gt),A(xo),o&&t(ur),o&&t(Mt),A(Ho),o&&t(mr),o&&t(De),A(So),A(Bo),A(Qt),A(Uo),o&&t(gr),o&&t(zt),A(Ro),o&&t(_r),o&&t(je),A(Vo),A(Qo),A(Zt),A(Yo),o&&t(Tr),o&&t(Ft),A(Zo),o&&t(vr),o&&t(xe),A(en),A(sn),A(to),A(an),o&&t(kr),o&&t(Dt),A(rn),o&&t(br),o&&t(He),A(ln),A(hn),A(no),A(fn),A(un),o&&t(wr),o&&t(xt),A(mn),o&&t(Pr),o&&t(ye),A(gn),A(ao),A(kn),A(ro),A(bn),o&&t(yr),o&&t(St),A(wn),o&&t(Ir),o&&t(Ie),A(Pn),A(lo),A(On),A(co),A($n),o&&t(Ar),o&&t(Nt),A(Gn),o&&t(Or),o&&t(Ae),A(Mn),A(ho),A(Fn),A(fo),A(Cn),o&&t($r),o&&t(Bt),A(Dn),o&&t(Gr),o&&t(le),A(jn),A(mo),A(Ln),A(go),A(Nn)}}}const Tm={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function vm(N,f,O){let{fw:m}=f;return N.$$set=g=>{"fw"in g&&O(0,m=g.fw)},[m]}class Am extends tm{constructor(f){super();om(this,f,vm,_m,nm,{fw:0})}}export{Am as default,Tm as metadata};
