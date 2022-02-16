import{S as Zu,i as em,s as tm,e as a,k as l,w as b,t as n,L as om,c as r,d as t,m as d,a as i,x as w,h as s,b as c,J as e,g as h,y as P,q as y,o as I,B as O}from"../../../chunks/vendor-b1433968.js";import{T as st}from"../../../chunks/Tip-c3840994.js";import{D as le}from"../../../chunks/Docstring-ff504c58.js";import{C as it}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as Xe}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function nm(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function sm(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function am(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function rm(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function im(N){let f,A,m,g,v,T,_,$,he,J,G,X,D,Y,fe,j,ue,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,ae,W,_e,te,C,re,U,Te;return{c(){f=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),j=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ae=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all
the tensors in the first argument of the model call function: `),j=r(F,"CODE",{});var ze=i(j);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var x=i(M);z=r(x,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(x),E=r(x,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ae=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(x),C=r(x,"LI",{});var be=i(C);re=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),x.forEach(t)},m(p,k){h(p,f,k),e(f,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,D),e(D,Y),e(G,fe),e(G,j),e(j,ue),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,ae),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,re),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function lm(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function dm(N){let f,A,m,g,v,T,_,$,he,J,G,X,D,Y,fe,j,ue,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,ae,W,_e,te,C,re,U,Te;return{c(){f=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),j=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ae=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all
the tensors in the first argument of the model call function: `),j=r(F,"CODE",{});var ze=i(j);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var x=i(M);z=r(x,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(x),E=r(x,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ae=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(x),C=r(x,"LI",{});var be=i(C);re=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),x.forEach(t)},m(p,k){h(p,f,k),e(f,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,D),e(D,Y),e(G,fe),e(G,j),e(j,ue),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,ae),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,re),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function cm(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function pm(N){let f,A,m,g,v,T,_,$,he,J,G,X,D,Y,fe,j,ue,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,ae,W,_e,te,C,re,U,Te;return{c(){f=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),j=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ae=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all
the tensors in the first argument of the model call function: `),j=r(F,"CODE",{});var ze=i(j);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var x=i(M);z=r(x,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(x),E=r(x,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ae=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(x),C=r(x,"LI",{});var be=i(C);re=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),x.forEach(t)},m(p,k){h(p,f,k),e(f,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,D),e(D,Y),e(G,fe),e(G,j),e(j,ue),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,ae),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,re),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function hm(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function fm(N){let f,A,m,g,v,T,_,$,he,J,G,X,D,Y,fe,j,ue,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,ae,W,_e,te,C,re,U,Te;return{c(){f=a("p"),A=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),j=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),B=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),me=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ae=n(" or "),W=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){f=r(p,"P",{});var k=i(f);A=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var R=i(g);v=r(R,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(R),$=r(R,"LI",{});var Ee=i($);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=d(p),G=r(p,"P",{});var F=i(G);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all
the tensors in the first argument of the model call function: `),j=r(F,"CODE",{});var ze=i(j);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var x=i(M);z=r(x,"LI",{});var V=i(z);oe=s(V,"a single Tensor with "),B=r(V,"CODE",{});var ke=i(B);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(V," only and nothing else: "),H=r(V,"CODE",{});var Fe=i(H);me=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=d(x),E=r(x,"LI",{});var K=i(E);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(K,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ae=s(K," or "),W=r(K,"CODE",{});var we=i(W);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=d(x),C=r(x,"LI",{});var be=i(C);re=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var $e=i(U);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),x.forEach(t)},m(p,k){h(p,f,k),e(f,A),h(p,m,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,$),e($,he),h(p,J,k),h(p,G,k),e(G,X),e(G,D),e(D,Y),e(G,fe),e(G,j),e(j,ue),e(G,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,B),e(B,ce),e(z,ne),e(z,H),e(H,me),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,ae),e(E,W),e(W,_e),e(M,te),e(M,C),e(C,re),e(C,U),e(U,Te)},d(p){p&&t(f),p&&t(m),p&&t(g),p&&t(J),p&&t(G),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function um(N){let f,A,m,g,v;return{c(){f=a("p"),A=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),g=n("Module"),v=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){f=r(T,"P",{});var _=i(f);A=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(_,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),v=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,f,_),e(f,A),e(f,m),e(m,g),e(f,v)},d(T){T&&t(f)}}}function mm(N){let f,A,m,g,v,T,_,$,he,J,G,X,D,Y,fe,j,ue,de,S,q,Z,ee,M,z,oe,B,ce,ne,H,me,pe,E,ge,L,Q,ae,W,_e,te,C,re,U,Te,p,k,R,Me,Ee,F,se,ze,ve,x,V,ke,Fe,K,Ae,we,be,$e,Ze,fi,As,ui,mi,$s,gi,_i,Gs,Ti,vi,or,bo,nr,Le,ki,Ms,bi,wi,Es,Pi,yi,Un,Ii,Oi,zs,Ai,$i,sr,Pt,Rt,Fs,wo,Gi,qs,Mi,ar,qe,Po,Ei,at,zi,Rn,Fi,qi,Vn,Ci,xi,yo,Di,ji,Hi,yt,Si,Kn,Li,Ni,Jn,Bi,Wi,Ui,Cs,Ri,Vi,Io,rr,It,Vt,xs,Oo,Ki,Ds,Ji,ir,Ce,Ao,Xi,js,Qi,Yi,$o,Hs,Zi,el,rt,tl,Ss,ol,nl,Ls,sl,al,Ns,rl,il,ll,Go,dl,Xn,cl,pl,hl,Bs,lr,Ot,Kt,Ws,Mo,fl,Us,ul,dr,Qe,Eo,ml,zo,gl,Rs,_l,Tl,vl,Fo,Vs,kl,bl,Ks,wl,Pl,qo,yl,Qn,Il,Ol,cr,At,Jt,Js,Co,Al,Xs,$l,pr,$t,xo,Gl,Qs,Ml,hr,Gt,Do,El,Ys,zl,fr,Mt,Xt,Zs,jo,Fl,ea,ql,ur,xe,Ho,Cl,ta,xl,Dl,So,jl,Yn,Hl,Sl,Ll,Lo,Nl,No,Bl,Wl,Ul,Ne,Bo,Rl,Et,Vl,Zn,Kl,Jl,oa,Xl,Ql,Yl,Qt,Zl,na,ed,td,Wo,mr,zt,Yt,sa,Uo,od,aa,nd,gr,De,Ro,sd,ra,ad,rd,Vo,id,es,ld,dd,cd,Ko,pd,Jo,hd,fd,ud,Be,Xo,md,Ft,gd,ts,_d,Td,ia,vd,kd,bd,Zt,wd,la,Pd,yd,Qo,_r,qt,eo,da,Yo,Id,ca,Od,Tr,je,Zo,Ad,pa,$d,Gd,en,Md,os,Ed,zd,Fd,tn,qd,on,Cd,xd,Dd,We,nn,jd,Ct,Hd,ns,Sd,Ld,ha,Nd,Bd,Wd,to,Ud,fa,Rd,Vd,sn,vr,xt,oo,ua,an,Kd,ma,Jd,kr,He,rn,Xd,Se,Qd,ss,Yd,Zd,ga,ec,tc,_a,oc,nc,Ta,sc,ac,va,rc,ic,lc,ln,dc,as,cc,pc,hc,dn,fc,cn,uc,mc,gc,Pe,pn,_c,Dt,Tc,rs,vc,kc,ka,bc,wc,Pc,no,yc,ba,Ic,Oc,hn,Ac,wa,$c,Gc,fn,br,jt,so,Pa,un,Mc,ya,Ec,wr,ye,mn,zc,Ia,Fc,qc,gn,Cc,is,xc,Dc,jc,_n,Hc,Tn,Sc,Lc,Nc,ao,Bc,Ue,vn,Wc,Ht,Uc,ls,Rc,Vc,Oa,Kc,Jc,Xc,ro,Qc,Aa,Yc,Zc,kn,Pr,St,io,$a,bn,ep,Ga,tp,yr,Ie,wn,op,Ma,np,sp,Pn,ap,ds,rp,ip,lp,yn,dp,In,cp,pp,hp,lo,fp,Re,On,up,Lt,mp,cs,gp,_p,Ea,Tp,vp,kp,co,bp,za,wp,Pp,An,Ir,Nt,po,Fa,$n,yp,qa,Ip,Or,Oe,Gn,Op,Ca,Ap,$p,Mn,Gp,ps,Mp,Ep,zp,En,Fp,zn,qp,Cp,xp,ho,Dp,Ve,Fn,jp,Bt,Hp,hs,Sp,Lp,xa,Np,Bp,Wp,fo,Up,Da,Rp,Vp,qn,Ar,Wt,uo,ja,Cn,Kp,Ha,Jp,$r,ie,xn,Xp,Sa,Qp,Yp,fs,us,Zp,eh,th,Ye,oh,La,nh,sh,Na,ah,rh,Ba,ih,lh,Wa,dh,ch,ph,Dn,hh,ms,fh,uh,mh,jn,gh,Hn,_h,Th,vh,mo,kh,Ke,Sn,bh,Ut,wh,gs,Ph,yh,Ua,Ih,Oh,Ah,go,$h,Ra,Gh,Mh,Ln,Gr;return T=new Xe({}),Y=new Xe({}),bo=new it({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en,`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Xe({}),Po=new le({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or
<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models
<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models
<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models
<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models
<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models
<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new it({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Oo=new Xe({}),Ao=new le({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new Xe({}),Eo=new le({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Co=new Xe({}),xo=new le({props:{name:"class transformers.models.openai.modeling\\_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Do=new le({props:{name:"class transformers.models.openai.modeling\\_tf\\_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L391",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),jo=new Xe({}),Ho=new le({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L407",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Bo=new le({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L433",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new st({props:{$$slots:{default:[nm]},$$scope:{ctx:N}}}),Wo=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = OpenAIGPTModel.from_pretrained('openai-gpt')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Uo=new Xe({}),Ro=new le({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L538",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Xo=new le({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L553",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new st({props:{$$slots:{default:[sm]},$$scope:{ctx:N}}}),Qo=new it({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = OpenAIGPTLMHeadModel.from_pretrained('openai-gpt')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Yo=new Xe({}),Zo=new le({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L625",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),nn=new le({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L643",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"mc_labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new st({props:{$$slots:{default:[am]},$$scope:{ctx:N}}}),sn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = OpenAIGPTDoubleHeadsModel.from_pretrained('openai-gpt')
tokenizer.add_special_tokens({'cls_token': '[CLS]'})  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1)-1, input_ids.size(-1)-1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.lm_logits
mc_logits = outputs.mc_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&#x27;cls_token&#x27;</span>: <span class="hljs-string">&#x27;[CLS]&#x27;</span>})  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>)-<span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>)-<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.lm_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),an=new Xe({}),rn=new le({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),pn=new le({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new st({props:{$$slots:{default:[rm]},$$scope:{ctx:N}}}),hn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = OpenAIGPTForSequenceClassification.from_pretrained('openai-gpt')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = OpenAIGPTForSequenceClassification.from_pretrained('openai-gpt', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),un=new Xe({}),mn=new le({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L517",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ao=new st({props:{$$slots:{default:[im]},$$scope:{ctx:N}}}),vn=new le({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L522",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new st({props:{$$slots:{default:[lm]},$$scope:{ctx:N}}}),kn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = TFOpenAIGPTModel.from_pretrained('openai-gpt')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new Xe({}),wn=new le({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L587",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),lo=new st({props:{$$slots:{default:[dm]},$$scope:{ctx:N}}}),On=new le({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L598",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>TFCausalLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new st({props:{$$slots:{default:[cm]},$$scope:{ctx:N}}}),An=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = TFOpenAIGPTLMHeadModel.from_pretrained('openai-gpt')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new Xe({}),Gn=new le({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L691",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ho=new st({props:{$$slots:{default:[pm]},$$scope:{ctx:N}}}),Fn=new le({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L700",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fo=new st({props:{$$slots:{default:[hm]},$$scope:{ctx:N}}}),qn=new it({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained('openai-gpt')

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({'cls_token': '[CLS]'})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"]= tf.constant([inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1])[None, :]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&#x27;cls_token&#x27;</span>: <span class="hljs-string">&#x27;[CLS]&#x27;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>]= tf.constant([inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>])[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),Cn=new Xe({}),xn=new le({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L844",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),mo=new st({props:{$$slots:{default:[fm]},$$scope:{ctx:N}}}),Sn=new le({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/openai/modeling_tf_openai.py#L856",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new st({props:{$$slots:{default:[um]},$$scope:{ctx:N}}}),Ln=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained('openai-gpt')
model = TFOpenAIGPTForSequenceClassification.from_pretrained('openai-gpt')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;openai-gpt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){f=a("meta"),A=l(),m=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),$=a("span"),he=n("OpenAI GPT"),J=l(),G=a("h2"),X=a("a"),D=a("span"),b(Y.$$.fragment),fe=l(),j=a("span"),ue=n("Overview"),de=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
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
the state of the art in 9 out of the 12 tasks studied.`),pe=l(),E=a("p"),ge=n("Tips:"),L=l(),Q=a("ul"),ae=a("li"),W=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),_e=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),re=a("em"),U=n("run_generation.py"),Te=n(" example script."),p=l(),k=a("p"),R=a("a"),Me=n("Write With Transformer"),Ee=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),ze=n("This model was contributed by "),ve=a("a"),x=n("thomwolf"),V=n(". The original code can be found "),ke=a("a"),Fe=n("here"),K=n("."),Ae=l(),we=a("p"),be=n("Note:"),$e=l(),Ze=a("p"),fi=n("If you want to reproduce the original tokenization process of the "),As=a("em"),ui=n("OpenAI GPT"),mi=n(" paper, you will need to install "),$s=a("code"),gi=n("ftfy"),_i=n(`
and `),Gs=a("code"),Ti=n("SpaCy"),vi=n(":"),or=l(),b(bo.$$.fragment),nr=l(),Le=a("p"),ki=n("If you don\u2019t install "),Ms=a("code"),bi=n("ftfy"),wi=n(" and "),Es=a("code"),Pi=n("SpaCy"),yi=n(", the "),Un=a("a"),Ii=n("OpenAIGPTTokenizer"),Oi=n(` will default to tokenize
using BERT\u2019s `),zs=a("code"),Ai=n("BasicTokenizer"),$i=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),sr=l(),Pt=a("h2"),Rt=a("a"),Fs=a("span"),b(wo.$$.fragment),Gi=l(),qs=a("span"),Mi=n("OpenAIGPTConfig"),ar=l(),qe=a("div"),b(Po.$$.fragment),Ei=l(),at=a("p"),zi=n("This is the configuration class to store the configuration of a "),Rn=a("a"),Fi=n("OpenAIGPTModel"),qi=n(` or a
`),Vn=a("a"),Ci=n("TFOpenAIGPTModel"),xi=n(`. It is used to instantiate a GPT model according to the specified
arguments, defining the model architecture. Instantiating a configuration with the defaults will yield a similar
configuration to that of the `),yo=a("a"),Di=n("GPT"),ji=n(" architecture from OpenAI."),Hi=l(),yt=a("p"),Si=n("Configuration objects inherit from "),Kn=a("a"),Li=n("PretrainedConfig"),Ni=n(` and can be used to control the model
outputs. Read the documentation from `),Jn=a("a"),Bi=n("PretrainedConfig"),Wi=n(" for more information."),Ui=l(),Cs=a("p"),Ri=n("Examples:"),Vi=l(),b(Io.$$.fragment),rr=l(),It=a("h2"),Vt=a("a"),xs=a("span"),b(Oo.$$.fragment),Ki=l(),Ds=a("span"),Ji=n("OpenAIGPTTokenizer"),ir=l(),Ce=a("div"),b(Ao.$$.fragment),Xi=l(),js=a("p"),Qi=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Yi=l(),$o=a("ul"),Hs=a("li"),Zi=n("lowercases all inputs,"),el=l(),rt=a("li"),tl=n("uses "),Ss=a("code"),ol=n("SpaCy"),nl=n(" tokenizer and "),Ls=a("code"),sl=n("ftfy"),al=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Ns=a("code"),rl=n("BasicTokenizer"),il=n(" if not."),ll=l(),Go=a("p"),dl=n("This tokenizer inherits from "),Xn=a("a"),cl=n("PreTrainedTokenizer"),pl=n(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),hl=l(),Bs=a("div"),lr=l(),Ot=a("h2"),Kt=a("a"),Ws=a("span"),b(Mo.$$.fragment),fl=l(),Us=a("span"),ul=n("OpenAIGPTTokenizerFast"),dr=l(),Qe=a("div"),b(Eo.$$.fragment),ml=l(),zo=a("p"),gl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Rs=a("em"),_l=n("tokenizers"),Tl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),vl=l(),Fo=a("ul"),Vs=a("li"),kl=n("lower case all inputs"),bl=l(),Ks=a("li"),wl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Pl=l(),qo=a("p"),yl=n("This tokenizer inherits from "),Qn=a("a"),Il=n("PreTrainedTokenizerFast"),Ol=n(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),cr=l(),At=a("h2"),Jt=a("a"),Js=a("span"),b(Co.$$.fragment),Al=l(),Xs=a("span"),$l=n("OpenAI specific outputs"),pr=l(),$t=a("div"),b(xo.$$.fragment),Gl=l(),Qs=a("p"),Ml=n("Base class for outputs of models predicting if two sentences are consecutive or not."),hr=l(),Gt=a("div"),b(Do.$$.fragment),El=l(),Ys=a("p"),zl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),fr=l(),Mt=a("h2"),Xt=a("a"),Zs=a("span"),b(jo.$$.fragment),Fl=l(),ea=a("span"),ql=n("OpenAIGPTModel"),ur=l(),xe=a("div"),b(Ho.$$.fragment),Cl=l(),ta=a("p"),xl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Dl=l(),So=a("p"),jl=n("This model inherits from "),Yn=a("a"),Hl=n("PreTrainedModel"),Sl=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ll=l(),Lo=a("p"),Nl=n("This model is also a PyTorch "),No=a("a"),Bl=n("torch.nn.Module"),Wl=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ul=l(),Ne=a("div"),b(Bo.$$.fragment),Rl=l(),Et=a("p"),Vl=n("The "),Zn=a("a"),Kl=n("OpenAIGPTModel"),Jl=n(" forward method, overrides the "),oa=a("code"),Xl=n("__call__"),Ql=n(" special method."),Yl=l(),b(Qt.$$.fragment),Zl=l(),na=a("p"),ed=n("Example:"),td=l(),b(Wo.$$.fragment),mr=l(),zt=a("h2"),Yt=a("a"),sa=a("span"),b(Uo.$$.fragment),od=l(),aa=a("span"),nd=n("OpenAIGPTLMHeadModel"),gr=l(),De=a("div"),b(Ro.$$.fragment),sd=l(),ra=a("p"),ad=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),rd=l(),Vo=a("p"),id=n("This model inherits from "),es=a("a"),ld=n("PreTrainedModel"),dd=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),cd=l(),Ko=a("p"),pd=n("This model is also a PyTorch "),Jo=a("a"),hd=n("torch.nn.Module"),fd=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ud=l(),Be=a("div"),b(Xo.$$.fragment),md=l(),Ft=a("p"),gd=n("The "),ts=a("a"),_d=n("OpenAIGPTLMHeadModel"),Td=n(" forward method, overrides the "),ia=a("code"),vd=n("__call__"),kd=n(" special method."),bd=l(),b(Zt.$$.fragment),wd=l(),la=a("p"),Pd=n("Example:"),yd=l(),b(Qo.$$.fragment),_r=l(),qt=a("h2"),eo=a("a"),da=a("span"),b(Yo.$$.fragment),Id=l(),ca=a("span"),Od=n("OpenAIGPTDoubleHeadsModel"),Tr=l(),je=a("div"),b(Zo.$$.fragment),Ad=l(),pa=a("p"),$d=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Gd=l(),en=a("p"),Md=n("This model inherits from "),os=a("a"),Ed=n("PreTrainedModel"),zd=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Fd=l(),tn=a("p"),qd=n("This model is also a PyTorch "),on=a("a"),Cd=n("torch.nn.Module"),xd=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Dd=l(),We=a("div"),b(nn.$$.fragment),jd=l(),Ct=a("p"),Hd=n("The "),ns=a("a"),Sd=n("OpenAIGPTDoubleHeadsModel"),Ld=n(" forward method, overrides the "),ha=a("code"),Nd=n("__call__"),Bd=n(" special method."),Wd=l(),b(to.$$.fragment),Ud=l(),fa=a("p"),Rd=n("Examples:"),Vd=l(),b(sn.$$.fragment),vr=l(),xt=a("h2"),oo=a("a"),ua=a("span"),b(an.$$.fragment),Kd=l(),ma=a("span"),Jd=n("OpenAIGPTForSequenceClassification"),kr=l(),He=a("div"),b(rn.$$.fragment),Xd=l(),Se=a("p"),Qd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ss=a("a"),Yd=n("OpenAIGPTForSequenceClassification"),Zd=n(` uses the last token in order to do the classification, as
other causal models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the
position of the last token. If a `),ga=a("code"),ec=n("pad_token_id"),tc=n(` is defined in the configuration, it finds the last token that
is not a padding token in each row. If no `),_a=a("code"),oc=n("pad_token_id"),nc=n(` is defined, it simply takes the last value in each
row of the batch. Since it cannot guess the padding tokens when `),Ta=a("code"),sc=n("inputs_embeds"),ac=n(` are passed instead of
`),va=a("code"),rc=n("input_ids"),ic=n(", it does the same (take the last value in each row of the batch)."),lc=l(),ln=a("p"),dc=n("This model inherits from "),as=a("a"),cc=n("PreTrainedModel"),pc=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),hc=l(),dn=a("p"),fc=n("This model is also a PyTorch "),cn=a("a"),uc=n("torch.nn.Module"),mc=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),gc=l(),Pe=a("div"),b(pn.$$.fragment),_c=l(),Dt=a("p"),Tc=n("The "),rs=a("a"),vc=n("OpenAIGPTForSequenceClassification"),kc=n(" forward method, overrides the "),ka=a("code"),bc=n("__call__"),wc=n(" special method."),Pc=l(),b(no.$$.fragment),yc=l(),ba=a("p"),Ic=n("Example of single-label classification:"),Oc=l(),b(hn.$$.fragment),Ac=l(),wa=a("p"),$c=n("Example of multi-label classification:"),Gc=l(),b(fn.$$.fragment),br=l(),jt=a("h2"),so=a("a"),Pa=a("span"),b(un.$$.fragment),Mc=l(),ya=a("span"),Ec=n("TFOpenAIGPTModel"),wr=l(),ye=a("div"),b(mn.$$.fragment),zc=l(),Ia=a("p"),Fc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),qc=l(),gn=a("p"),Cc=n("This model inherits from "),is=a("a"),xc=n("TFPreTrainedModel"),Dc=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),jc=l(),_n=a("p"),Hc=n("This model is also a "),Tn=a("a"),Sc=n("tf.keras.Model"),Lc=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Nc=l(),b(ao.$$.fragment),Bc=l(),Ue=a("div"),b(vn.$$.fragment),Wc=l(),Ht=a("p"),Uc=n("The "),ls=a("a"),Rc=n("TFOpenAIGPTModel"),Vc=n(" forward method, overrides the "),Oa=a("code"),Kc=n("__call__"),Jc=n(" special method."),Xc=l(),b(ro.$$.fragment),Qc=l(),Aa=a("p"),Yc=n("Example:"),Zc=l(),b(kn.$$.fragment),Pr=l(),St=a("h2"),io=a("a"),$a=a("span"),b(bn.$$.fragment),ep=l(),Ga=a("span"),tp=n("TFOpenAIGPTLMHeadModel"),yr=l(),Ie=a("div"),b(wn.$$.fragment),op=l(),Ma=a("p"),np=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sp=l(),Pn=a("p"),ap=n("This model inherits from "),ds=a("a"),rp=n("TFPreTrainedModel"),ip=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),lp=l(),yn=a("p"),dp=n("This model is also a "),In=a("a"),cp=n("tf.keras.Model"),pp=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hp=l(),b(lo.$$.fragment),fp=l(),Re=a("div"),b(On.$$.fragment),up=l(),Lt=a("p"),mp=n("The "),cs=a("a"),gp=n("TFOpenAIGPTLMHeadModel"),_p=n(" forward method, overrides the "),Ea=a("code"),Tp=n("__call__"),vp=n(" special method."),kp=l(),b(co.$$.fragment),bp=l(),za=a("p"),wp=n("Example:"),Pp=l(),b(An.$$.fragment),Ir=l(),Nt=a("h2"),po=a("a"),Fa=a("span"),b($n.$$.fragment),yp=l(),qa=a("span"),Ip=n("TFOpenAIGPTDoubleHeadsModel"),Or=l(),Oe=a("div"),b(Gn.$$.fragment),Op=l(),Ca=a("p"),Ap=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),$p=l(),Mn=a("p"),Gp=n("This model inherits from "),ps=a("a"),Mp=n("TFPreTrainedModel"),Ep=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),zp=l(),En=a("p"),Fp=n("This model is also a "),zn=a("a"),qp=n("tf.keras.Model"),Cp=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),xp=l(),b(ho.$$.fragment),Dp=l(),Ve=a("div"),b(Fn.$$.fragment),jp=l(),Bt=a("p"),Hp=n("The "),hs=a("a"),Sp=n("TFOpenAIGPTDoubleHeadsModel"),Lp=n(" forward method, overrides the "),xa=a("code"),Np=n("__call__"),Bp=n(" special method."),Wp=l(),b(fo.$$.fragment),Up=l(),Da=a("p"),Rp=n("Examples:"),Vp=l(),b(qn.$$.fragment),Ar=l(),Wt=a("h2"),uo=a("a"),ja=a("span"),b(Cn.$$.fragment),Kp=l(),Ha=a("span"),Jp=n("TFOpenAIGPTForSequenceClassification"),$r=l(),ie=a("div"),b(xn.$$.fragment),Xp=l(),Sa=a("p"),Qp=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Yp=l(),fs=a("p"),us=a("a"),Zp=n("TFOpenAIGPTForSequenceClassification"),eh=n(` uses the last token in order to do the classification,
as other causal models (e.g. GPT-2) do.`),th=l(),Ye=a("p"),oh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),La=a("code"),nh=n("pad_token_id"),sh=n(` is defined in the configuration, it finds the last token that is not a padding token in each
row. If no `),Na=a("code"),ah=n("pad_token_id"),rh=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Ba=a("code"),ih=n("inputs_embeds"),lh=n(" are passed instead of "),Wa=a("code"),dh=n("input_ids"),ch=n(`, it does the same (take
the last value in each row of the batch).`),ph=l(),Dn=a("p"),hh=n("This model inherits from "),ms=a("a"),fh=n("TFPreTrainedModel"),uh=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),mh=l(),jn=a("p"),gh=n("This model is also a "),Hn=a("a"),_h=n("tf.keras.Model"),Th=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),vh=l(),b(mo.$$.fragment),kh=l(),Ke=a("div"),b(Sn.$$.fragment),bh=l(),Ut=a("p"),wh=n("The "),gs=a("a"),Ph=n("TFOpenAIGPTForSequenceClassification"),yh=n(" forward method, overrides the "),Ua=a("code"),Ih=n("__call__"),Oh=n(" special method."),Ah=l(),b(go.$$.fragment),$h=l(),Ra=a("p"),Gh=n("Example:"),Mh=l(),b(Ln.$$.fragment),this.h()},l(o){const u=om('[data-svelte="svelte-1phssyn"]',document.head);f=r(u,"META",{name:!0,content:!0}),u.forEach(t),A=d(o),m=r(o,"H1",{class:!0});var Nn=i(m);g=r(Nn,"A",{id:!0,class:!0,href:!0});var Va=i(g);v=r(Va,"SPAN",{});var Ka=i(v);w(T.$$.fragment,Ka),Ka.forEach(t),Va.forEach(t),_=d(Nn),$=r(Nn,"SPAN",{});var Ja=i($);he=s(Ja,"OpenAI GPT"),Ja.forEach(t),Nn.forEach(t),J=d(o),G=r(o,"H2",{class:!0});var Bn=i(G);X=r(Bn,"A",{id:!0,class:!0,href:!0});var Xa=i(X);D=r(Xa,"SPAN",{});var Qa=i(D);w(Y.$$.fragment,Qa),Qa.forEach(t),Xa.forEach(t),fe=d(Bn),j=r(Bn,"SPAN",{});var Ya=i(j);ue=s(Ya,"Overview"),Ya.forEach(t),Bn.forEach(t),de=d(o),S=r(o,"P",{});var Wn=i(S);q=s(Wn,"OpenAI GPT model was proposed in "),Z=r(Wn,"A",{href:!0,rel:!0});var Za=i(Z);ee=s(Za,"Improving Language Understanding by Generative Pre-Training"),Za.forEach(t),M=s(Wn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Wn.forEach(t),z=d(o),oe=r(o,"P",{});var er=i(oe);B=s(er,"The abstract from the paper is the following:"),er.forEach(t),ce=d(o),ne=r(o,"P",{});var tr=i(ne);H=r(tr,"EM",{});var Fh=i(H);me=s(Fh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),Fh.forEach(t),tr.forEach(t),pe=d(o),E=r(o,"P",{});var qh=i(E);ge=s(qh,"Tips:"),qh.forEach(t),L=d(o),Q=r(o,"UL",{});var Mr=i(Q);ae=r(Mr,"LI",{});var Ch=i(ae);W=s(Ch,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ch.forEach(t),_e=d(Mr),te=r(Mr,"LI",{});var Er=i(te);C=s(Er,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),re=r(Er,"EM",{});var xh=i(re);U=s(xh,"run_generation.py"),xh.forEach(t),Te=s(Er," example script."),Er.forEach(t),Mr.forEach(t),p=d(o),k=r(o,"P",{});var Eh=i(k);R=r(Eh,"A",{href:!0,rel:!0});var Dh=i(R);Me=s(Dh,"Write With Transformer"),Dh.forEach(t),Ee=s(Eh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),Eh.forEach(t),F=d(o),se=r(o,"P",{});var _s=i(se);ze=s(_s,"This model was contributed by "),ve=r(_s,"A",{href:!0,rel:!0});var jh=i(ve);x=s(jh,"thomwolf"),jh.forEach(t),V=s(_s,". The original code can be found "),ke=r(_s,"A",{href:!0,rel:!0});var Hh=i(ke);Fe=s(Hh,"here"),Hh.forEach(t),K=s(_s,"."),_s.forEach(t),Ae=d(o),we=r(o,"P",{});var Sh=i(we);be=s(Sh,"Note:"),Sh.forEach(t),$e=d(o),Ze=r(o,"P",{});var _o=i(Ze);fi=s(_o,"If you want to reproduce the original tokenization process of the "),As=r(_o,"EM",{});var Lh=i(As);ui=s(Lh,"OpenAI GPT"),Lh.forEach(t),mi=s(_o," paper, you will need to install "),$s=r(_o,"CODE",{});var Nh=i($s);gi=s(Nh,"ftfy"),Nh.forEach(t),_i=s(_o,`
and `),Gs=r(_o,"CODE",{});var Bh=i(Gs);Ti=s(Bh,"SpaCy"),Bh.forEach(t),vi=s(_o,":"),_o.forEach(t),or=d(o),w(bo.$$.fragment,o),nr=d(o),Le=r(o,"P",{});var lt=i(Le);ki=s(lt,"If you don\u2019t install "),Ms=r(lt,"CODE",{});var Wh=i(Ms);bi=s(Wh,"ftfy"),Wh.forEach(t),wi=s(lt," and "),Es=r(lt,"CODE",{});var Uh=i(Es);Pi=s(Uh,"SpaCy"),Uh.forEach(t),yi=s(lt,", the "),Un=r(lt,"A",{href:!0});var Rh=i(Un);Ii=s(Rh,"OpenAIGPTTokenizer"),Rh.forEach(t),Oi=s(lt,` will default to tokenize
using BERT\u2019s `),zs=r(lt,"CODE",{});var Vh=i(zs);Ai=s(Vh,"BasicTokenizer"),Vh.forEach(t),$i=s(lt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lt.forEach(t),sr=d(o),Pt=r(o,"H2",{class:!0});var zr=i(Pt);Rt=r(zr,"A",{id:!0,class:!0,href:!0});var Kh=i(Rt);Fs=r(Kh,"SPAN",{});var Jh=i(Fs);w(wo.$$.fragment,Jh),Jh.forEach(t),Kh.forEach(t),Gi=d(zr),qs=r(zr,"SPAN",{});var Xh=i(qs);Mi=s(Xh,"OpenAIGPTConfig"),Xh.forEach(t),zr.forEach(t),ar=d(o),qe=r(o,"DIV",{class:!0});var dt=i(qe);w(Po.$$.fragment,dt),Ei=d(dt),at=r(dt,"P",{});var To=i(at);zi=s(To,"This is the configuration class to store the configuration of a "),Rn=r(To,"A",{href:!0});var Qh=i(Rn);Fi=s(Qh,"OpenAIGPTModel"),Qh.forEach(t),qi=s(To,` or a
`),Vn=r(To,"A",{href:!0});var Yh=i(Vn);Ci=s(Yh,"TFOpenAIGPTModel"),Yh.forEach(t),xi=s(To,`. It is used to instantiate a GPT model according to the specified
arguments, defining the model architecture. Instantiating a configuration with the defaults will yield a similar
configuration to that of the `),yo=r(To,"A",{href:!0,rel:!0});var Zh=i(yo);Di=s(Zh,"GPT"),Zh.forEach(t),ji=s(To," architecture from OpenAI."),To.forEach(t),Hi=d(dt),yt=r(dt,"P",{});var Ts=i(yt);Si=s(Ts,"Configuration objects inherit from "),Kn=r(Ts,"A",{href:!0});var ef=i(Kn);Li=s(ef,"PretrainedConfig"),ef.forEach(t),Ni=s(Ts,` and can be used to control the model
outputs. Read the documentation from `),Jn=r(Ts,"A",{href:!0});var tf=i(Jn);Bi=s(tf,"PretrainedConfig"),tf.forEach(t),Wi=s(Ts," for more information."),Ts.forEach(t),Ui=d(dt),Cs=r(dt,"P",{});var of=i(Cs);Ri=s(of,"Examples:"),of.forEach(t),Vi=d(dt),w(Io.$$.fragment,dt),dt.forEach(t),rr=d(o),It=r(o,"H2",{class:!0});var Fr=i(It);Vt=r(Fr,"A",{id:!0,class:!0,href:!0});var nf=i(Vt);xs=r(nf,"SPAN",{});var sf=i(xs);w(Oo.$$.fragment,sf),sf.forEach(t),nf.forEach(t),Ki=d(Fr),Ds=r(Fr,"SPAN",{});var af=i(Ds);Ji=s(af,"OpenAIGPTTokenizer"),af.forEach(t),Fr.forEach(t),ir=d(o),Ce=r(o,"DIV",{class:!0});var ct=i(Ce);w(Ao.$$.fragment,ct),Xi=d(ct),js=r(ct,"P",{});var rf=i(js);Qi=s(rf,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),rf.forEach(t),Yi=d(ct),$o=r(ct,"UL",{});var qr=i($o);Hs=r(qr,"LI",{});var lf=i(Hs);Zi=s(lf,"lowercases all inputs,"),lf.forEach(t),el=d(qr),rt=r(qr,"LI",{});var vo=i(rt);tl=s(vo,"uses "),Ss=r(vo,"CODE",{});var df=i(Ss);ol=s(df,"SpaCy"),df.forEach(t),nl=s(vo," tokenizer and "),Ls=r(vo,"CODE",{});var cf=i(Ls);sl=s(cf,"ftfy"),cf.forEach(t),al=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Ns=r(vo,"CODE",{});var pf=i(Ns);rl=s(pf,"BasicTokenizer"),pf.forEach(t),il=s(vo," if not."),vo.forEach(t),qr.forEach(t),ll=d(ct),Go=r(ct,"P",{});var Cr=i(Go);dl=s(Cr,"This tokenizer inherits from "),Xn=r(Cr,"A",{href:!0});var hf=i(Xn);cl=s(hf,"PreTrainedTokenizer"),hf.forEach(t),pl=s(Cr,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Cr.forEach(t),hl=d(ct),Bs=r(ct,"DIV",{class:!0}),i(Bs).forEach(t),ct.forEach(t),lr=d(o),Ot=r(o,"H2",{class:!0});var xr=i(Ot);Kt=r(xr,"A",{id:!0,class:!0,href:!0});var ff=i(Kt);Ws=r(ff,"SPAN",{});var uf=i(Ws);w(Mo.$$.fragment,uf),uf.forEach(t),ff.forEach(t),fl=d(xr),Us=r(xr,"SPAN",{});var mf=i(Us);ul=s(mf,"OpenAIGPTTokenizerFast"),mf.forEach(t),xr.forEach(t),dr=d(o),Qe=r(o,"DIV",{class:!0});var ko=i(Qe);w(Eo.$$.fragment,ko),ml=d(ko),zo=r(ko,"P",{});var Dr=i(zo);gl=s(Dr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Rs=r(Dr,"EM",{});var gf=i(Rs);_l=s(gf,"tokenizers"),gf.forEach(t),Tl=s(Dr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Dr.forEach(t),vl=d(ko),Fo=r(ko,"UL",{});var jr=i(Fo);Vs=r(jr,"LI",{});var _f=i(Vs);kl=s(_f,"lower case all inputs"),_f.forEach(t),bl=d(jr),Ks=r(jr,"LI",{});var Tf=i(Ks);wl=s(Tf,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Tf.forEach(t),jr.forEach(t),Pl=d(ko),qo=r(ko,"P",{});var Hr=i(qo);yl=s(Hr,"This tokenizer inherits from "),Qn=r(Hr,"A",{href:!0});var vf=i(Qn);Il=s(vf,"PreTrainedTokenizerFast"),vf.forEach(t),Ol=s(Hr,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),Hr.forEach(t),ko.forEach(t),cr=d(o),At=r(o,"H2",{class:!0});var Sr=i(At);Jt=r(Sr,"A",{id:!0,class:!0,href:!0});var kf=i(Jt);Js=r(kf,"SPAN",{});var bf=i(Js);w(Co.$$.fragment,bf),bf.forEach(t),kf.forEach(t),Al=d(Sr),Xs=r(Sr,"SPAN",{});var wf=i(Xs);$l=s(wf,"OpenAI specific outputs"),wf.forEach(t),Sr.forEach(t),pr=d(o),$t=r(o,"DIV",{class:!0});var Lr=i($t);w(xo.$$.fragment,Lr),Gl=d(Lr),Qs=r(Lr,"P",{});var Pf=i(Qs);Ml=s(Pf,"Base class for outputs of models predicting if two sentences are consecutive or not."),Pf.forEach(t),Lr.forEach(t),hr=d(o),Gt=r(o,"DIV",{class:!0});var Nr=i(Gt);w(Do.$$.fragment,Nr),El=d(Nr),Ys=r(Nr,"P",{});var yf=i(Ys);zl=s(yf,"Base class for outputs of models predicting if two sentences are consecutive or not."),yf.forEach(t),Nr.forEach(t),fr=d(o),Mt=r(o,"H2",{class:!0});var Br=i(Mt);Xt=r(Br,"A",{id:!0,class:!0,href:!0});var If=i(Xt);Zs=r(If,"SPAN",{});var Of=i(Zs);w(jo.$$.fragment,Of),Of.forEach(t),If.forEach(t),Fl=d(Br),ea=r(Br,"SPAN",{});var Af=i(ea);ql=s(Af,"OpenAIGPTModel"),Af.forEach(t),Br.forEach(t),ur=d(o),xe=r(o,"DIV",{class:!0});var pt=i(xe);w(Ho.$$.fragment,pt),Cl=d(pt),ta=r(pt,"P",{});var $f=i(ta);xl=s($f,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),$f.forEach(t),Dl=d(pt),So=r(pt,"P",{});var Wr=i(So);jl=s(Wr,"This model inherits from "),Yn=r(Wr,"A",{href:!0});var Gf=i(Yn);Hl=s(Gf,"PreTrainedModel"),Gf.forEach(t),Sl=s(Wr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Wr.forEach(t),Ll=d(pt),Lo=r(pt,"P",{});var Ur=i(Lo);Nl=s(Ur,"This model is also a PyTorch "),No=r(Ur,"A",{href:!0,rel:!0});var Mf=i(No);Bl=s(Mf,"torch.nn.Module"),Mf.forEach(t),Wl=s(Ur,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ur.forEach(t),Ul=d(pt),Ne=r(pt,"DIV",{class:!0});var ht=i(Ne);w(Bo.$$.fragment,ht),Rl=d(ht),Et=r(ht,"P",{});var vs=i(Et);Vl=s(vs,"The "),Zn=r(vs,"A",{href:!0});var Ef=i(Zn);Kl=s(Ef,"OpenAIGPTModel"),Ef.forEach(t),Jl=s(vs," forward method, overrides the "),oa=r(vs,"CODE",{});var zf=i(oa);Xl=s(zf,"__call__"),zf.forEach(t),Ql=s(vs," special method."),vs.forEach(t),Yl=d(ht),w(Qt.$$.fragment,ht),Zl=d(ht),na=r(ht,"P",{});var Ff=i(na);ed=s(Ff,"Example:"),Ff.forEach(t),td=d(ht),w(Wo.$$.fragment,ht),ht.forEach(t),pt.forEach(t),mr=d(o),zt=r(o,"H2",{class:!0});var Rr=i(zt);Yt=r(Rr,"A",{id:!0,class:!0,href:!0});var qf=i(Yt);sa=r(qf,"SPAN",{});var Cf=i(sa);w(Uo.$$.fragment,Cf),Cf.forEach(t),qf.forEach(t),od=d(Rr),aa=r(Rr,"SPAN",{});var xf=i(aa);nd=s(xf,"OpenAIGPTLMHeadModel"),xf.forEach(t),Rr.forEach(t),gr=d(o),De=r(o,"DIV",{class:!0});var ft=i(De);w(Ro.$$.fragment,ft),sd=d(ft),ra=r(ft,"P",{});var Df=i(ra);ad=s(Df,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Df.forEach(t),rd=d(ft),Vo=r(ft,"P",{});var Vr=i(Vo);id=s(Vr,"This model inherits from "),es=r(Vr,"A",{href:!0});var jf=i(es);ld=s(jf,"PreTrainedModel"),jf.forEach(t),dd=s(Vr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Vr.forEach(t),cd=d(ft),Ko=r(ft,"P",{});var Kr=i(Ko);pd=s(Kr,"This model is also a PyTorch "),Jo=r(Kr,"A",{href:!0,rel:!0});var Hf=i(Jo);hd=s(Hf,"torch.nn.Module"),Hf.forEach(t),fd=s(Kr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Kr.forEach(t),ud=d(ft),Be=r(ft,"DIV",{class:!0});var ut=i(Be);w(Xo.$$.fragment,ut),md=d(ut),Ft=r(ut,"P",{});var ks=i(Ft);gd=s(ks,"The "),ts=r(ks,"A",{href:!0});var Sf=i(ts);_d=s(Sf,"OpenAIGPTLMHeadModel"),Sf.forEach(t),Td=s(ks," forward method, overrides the "),ia=r(ks,"CODE",{});var Lf=i(ia);vd=s(Lf,"__call__"),Lf.forEach(t),kd=s(ks," special method."),ks.forEach(t),bd=d(ut),w(Zt.$$.fragment,ut),wd=d(ut),la=r(ut,"P",{});var Nf=i(la);Pd=s(Nf,"Example:"),Nf.forEach(t),yd=d(ut),w(Qo.$$.fragment,ut),ut.forEach(t),ft.forEach(t),_r=d(o),qt=r(o,"H2",{class:!0});var Jr=i(qt);eo=r(Jr,"A",{id:!0,class:!0,href:!0});var Bf=i(eo);da=r(Bf,"SPAN",{});var Wf=i(da);w(Yo.$$.fragment,Wf),Wf.forEach(t),Bf.forEach(t),Id=d(Jr),ca=r(Jr,"SPAN",{});var Uf=i(ca);Od=s(Uf,"OpenAIGPTDoubleHeadsModel"),Uf.forEach(t),Jr.forEach(t),Tr=d(o),je=r(o,"DIV",{class:!0});var mt=i(je);w(Zo.$$.fragment,mt),Ad=d(mt),pa=r(mt,"P",{});var Rf=i(pa);$d=s(Rf,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Rf.forEach(t),Gd=d(mt),en=r(mt,"P",{});var Xr=i(en);Md=s(Xr,"This model inherits from "),os=r(Xr,"A",{href:!0});var Vf=i(os);Ed=s(Vf,"PreTrainedModel"),Vf.forEach(t),zd=s(Xr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Xr.forEach(t),Fd=d(mt),tn=r(mt,"P",{});var Qr=i(tn);qd=s(Qr,"This model is also a PyTorch "),on=r(Qr,"A",{href:!0,rel:!0});var Kf=i(on);Cd=s(Kf,"torch.nn.Module"),Kf.forEach(t),xd=s(Qr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Qr.forEach(t),Dd=d(mt),We=r(mt,"DIV",{class:!0});var gt=i(We);w(nn.$$.fragment,gt),jd=d(gt),Ct=r(gt,"P",{});var bs=i(Ct);Hd=s(bs,"The "),ns=r(bs,"A",{href:!0});var Jf=i(ns);Sd=s(Jf,"OpenAIGPTDoubleHeadsModel"),Jf.forEach(t),Ld=s(bs," forward method, overrides the "),ha=r(bs,"CODE",{});var Xf=i(ha);Nd=s(Xf,"__call__"),Xf.forEach(t),Bd=s(bs," special method."),bs.forEach(t),Wd=d(gt),w(to.$$.fragment,gt),Ud=d(gt),fa=r(gt,"P",{});var Qf=i(fa);Rd=s(Qf,"Examples:"),Qf.forEach(t),Vd=d(gt),w(sn.$$.fragment,gt),gt.forEach(t),mt.forEach(t),vr=d(o),xt=r(o,"H2",{class:!0});var Yr=i(xt);oo=r(Yr,"A",{id:!0,class:!0,href:!0});var Yf=i(oo);ua=r(Yf,"SPAN",{});var Zf=i(ua);w(an.$$.fragment,Zf),Zf.forEach(t),Yf.forEach(t),Kd=d(Yr),ma=r(Yr,"SPAN",{});var eu=i(ma);Jd=s(eu,"OpenAIGPTForSequenceClassification"),eu.forEach(t),Yr.forEach(t),kr=d(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(rn.$$.fragment,_t),Xd=d(_t),Se=r(_t,"P",{});var et=i(Se);Qd=s(et,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ss=r(et,"A",{href:!0});var tu=i(ss);Yd=s(tu,"OpenAIGPTForSequenceClassification"),tu.forEach(t),Zd=s(et,` uses the last token in order to do the classification, as
other causal models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the
position of the last token. If a `),ga=r(et,"CODE",{});var ou=i(ga);ec=s(ou,"pad_token_id"),ou.forEach(t),tc=s(et,` is defined in the configuration, it finds the last token that
is not a padding token in each row. If no `),_a=r(et,"CODE",{});var nu=i(_a);oc=s(nu,"pad_token_id"),nu.forEach(t),nc=s(et,` is defined, it simply takes the last value in each
row of the batch. Since it cannot guess the padding tokens when `),Ta=r(et,"CODE",{});var su=i(Ta);sc=s(su,"inputs_embeds"),su.forEach(t),ac=s(et,` are passed instead of
`),va=r(et,"CODE",{});var au=i(va);rc=s(au,"input_ids"),au.forEach(t),ic=s(et,", it does the same (take the last value in each row of the batch)."),et.forEach(t),lc=d(_t),ln=r(_t,"P",{});var Zr=i(ln);dc=s(Zr,"This model inherits from "),as=r(Zr,"A",{href:!0});var ru=i(as);cc=s(ru,"PreTrainedModel"),ru.forEach(t),pc=s(Zr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zr.forEach(t),hc=d(_t),dn=r(_t,"P",{});var ei=i(dn);fc=s(ei,"This model is also a PyTorch "),cn=r(ei,"A",{href:!0,rel:!0});var iu=i(cn);uc=s(iu,"torch.nn.Module"),iu.forEach(t),mc=s(ei,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ei.forEach(t),gc=d(_t),Pe=r(_t,"DIV",{class:!0});var Je=i(Pe);w(pn.$$.fragment,Je),_c=d(Je),Dt=r(Je,"P",{});var ws=i(Dt);Tc=s(ws,"The "),rs=r(ws,"A",{href:!0});var lu=i(rs);vc=s(lu,"OpenAIGPTForSequenceClassification"),lu.forEach(t),kc=s(ws," forward method, overrides the "),ka=r(ws,"CODE",{});var du=i(ka);bc=s(du,"__call__"),du.forEach(t),wc=s(ws," special method."),ws.forEach(t),Pc=d(Je),w(no.$$.fragment,Je),yc=d(Je),ba=r(Je,"P",{});var cu=i(ba);Ic=s(cu,"Example of single-label classification:"),cu.forEach(t),Oc=d(Je),w(hn.$$.fragment,Je),Ac=d(Je),wa=r(Je,"P",{});var pu=i(wa);$c=s(pu,"Example of multi-label classification:"),pu.forEach(t),Gc=d(Je),w(fn.$$.fragment,Je),Je.forEach(t),_t.forEach(t),br=d(o),jt=r(o,"H2",{class:!0});var ti=i(jt);so=r(ti,"A",{id:!0,class:!0,href:!0});var hu=i(so);Pa=r(hu,"SPAN",{});var fu=i(Pa);w(un.$$.fragment,fu),fu.forEach(t),hu.forEach(t),Mc=d(ti),ya=r(ti,"SPAN",{});var uu=i(ya);Ec=s(uu,"TFOpenAIGPTModel"),uu.forEach(t),ti.forEach(t),wr=d(o),ye=r(o,"DIV",{class:!0});var tt=i(ye);w(mn.$$.fragment,tt),zc=d(tt),Ia=r(tt,"P",{});var mu=i(Ia);Fc=s(mu,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),mu.forEach(t),qc=d(tt),gn=r(tt,"P",{});var oi=i(gn);Cc=s(oi,"This model inherits from "),is=r(oi,"A",{href:!0});var gu=i(is);xc=s(gu,"TFPreTrainedModel"),gu.forEach(t),Dc=s(oi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),oi.forEach(t),jc=d(tt),_n=r(tt,"P",{});var ni=i(_n);Hc=s(ni,"This model is also a "),Tn=r(ni,"A",{href:!0,rel:!0});var _u=i(Tn);Sc=s(_u,"tf.keras.Model"),_u.forEach(t),Lc=s(ni,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ni.forEach(t),Nc=d(tt),w(ao.$$.fragment,tt),Bc=d(tt),Ue=r(tt,"DIV",{class:!0});var Tt=i(Ue);w(vn.$$.fragment,Tt),Wc=d(Tt),Ht=r(Tt,"P",{});var Ps=i(Ht);Uc=s(Ps,"The "),ls=r(Ps,"A",{href:!0});var Tu=i(ls);Rc=s(Tu,"TFOpenAIGPTModel"),Tu.forEach(t),Vc=s(Ps," forward method, overrides the "),Oa=r(Ps,"CODE",{});var vu=i(Oa);Kc=s(vu,"__call__"),vu.forEach(t),Jc=s(Ps," special method."),Ps.forEach(t),Xc=d(Tt),w(ro.$$.fragment,Tt),Qc=d(Tt),Aa=r(Tt,"P",{});var ku=i(Aa);Yc=s(ku,"Example:"),ku.forEach(t),Zc=d(Tt),w(kn.$$.fragment,Tt),Tt.forEach(t),tt.forEach(t),Pr=d(o),St=r(o,"H2",{class:!0});var si=i(St);io=r(si,"A",{id:!0,class:!0,href:!0});var bu=i(io);$a=r(bu,"SPAN",{});var wu=i($a);w(bn.$$.fragment,wu),wu.forEach(t),bu.forEach(t),ep=d(si),Ga=r(si,"SPAN",{});var Pu=i(Ga);tp=s(Pu,"TFOpenAIGPTLMHeadModel"),Pu.forEach(t),si.forEach(t),yr=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);w(wn.$$.fragment,ot),op=d(ot),Ma=r(ot,"P",{});var yu=i(Ma);np=s(yu,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yu.forEach(t),sp=d(ot),Pn=r(ot,"P",{});var ai=i(Pn);ap=s(ai,"This model inherits from "),ds=r(ai,"A",{href:!0});var Iu=i(ds);rp=s(Iu,"TFPreTrainedModel"),Iu.forEach(t),ip=s(ai,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ai.forEach(t),lp=d(ot),yn=r(ot,"P",{});var ri=i(yn);dp=s(ri,"This model is also a "),In=r(ri,"A",{href:!0,rel:!0});var Ou=i(In);cp=s(Ou,"tf.keras.Model"),Ou.forEach(t),pp=s(ri,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ri.forEach(t),hp=d(ot),w(lo.$$.fragment,ot),fp=d(ot),Re=r(ot,"DIV",{class:!0});var vt=i(Re);w(On.$$.fragment,vt),up=d(vt),Lt=r(vt,"P",{});var ys=i(Lt);mp=s(ys,"The "),cs=r(ys,"A",{href:!0});var Au=i(cs);gp=s(Au,"TFOpenAIGPTLMHeadModel"),Au.forEach(t),_p=s(ys," forward method, overrides the "),Ea=r(ys,"CODE",{});var $u=i(Ea);Tp=s($u,"__call__"),$u.forEach(t),vp=s(ys," special method."),ys.forEach(t),kp=d(vt),w(co.$$.fragment,vt),bp=d(vt),za=r(vt,"P",{});var Gu=i(za);wp=s(Gu,"Example:"),Gu.forEach(t),Pp=d(vt),w(An.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Ir=d(o),Nt=r(o,"H2",{class:!0});var ii=i(Nt);po=r(ii,"A",{id:!0,class:!0,href:!0});var Mu=i(po);Fa=r(Mu,"SPAN",{});var Eu=i(Fa);w($n.$$.fragment,Eu),Eu.forEach(t),Mu.forEach(t),yp=d(ii),qa=r(ii,"SPAN",{});var zu=i(qa);Ip=s(zu,"TFOpenAIGPTDoubleHeadsModel"),zu.forEach(t),ii.forEach(t),Or=d(o),Oe=r(o,"DIV",{class:!0});var nt=i(Oe);w(Gn.$$.fragment,nt),Op=d(nt),Ca=r(nt,"P",{});var Fu=i(Ca);Ap=s(Fu,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Fu.forEach(t),$p=d(nt),Mn=r(nt,"P",{});var li=i(Mn);Gp=s(li,"This model inherits from "),ps=r(li,"A",{href:!0});var qu=i(ps);Mp=s(qu,"TFPreTrainedModel"),qu.forEach(t),Ep=s(li,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),li.forEach(t),zp=d(nt),En=r(nt,"P",{});var di=i(En);Fp=s(di,"This model is also a "),zn=r(di,"A",{href:!0,rel:!0});var Cu=i(zn);qp=s(Cu,"tf.keras.Model"),Cu.forEach(t),Cp=s(di,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),di.forEach(t),xp=d(nt),w(ho.$$.fragment,nt),Dp=d(nt),Ve=r(nt,"DIV",{class:!0});var kt=i(Ve);w(Fn.$$.fragment,kt),jp=d(kt),Bt=r(kt,"P",{});var Is=i(Bt);Hp=s(Is,"The "),hs=r(Is,"A",{href:!0});var xu=i(hs);Sp=s(xu,"TFOpenAIGPTDoubleHeadsModel"),xu.forEach(t),Lp=s(Is," forward method, overrides the "),xa=r(Is,"CODE",{});var Du=i(xa);Np=s(Du,"__call__"),Du.forEach(t),Bp=s(Is," special method."),Is.forEach(t),Wp=d(kt),w(fo.$$.fragment,kt),Up=d(kt),Da=r(kt,"P",{});var ju=i(Da);Rp=s(ju,"Examples:"),ju.forEach(t),Vp=d(kt),w(qn.$$.fragment,kt),kt.forEach(t),nt.forEach(t),Ar=d(o),Wt=r(o,"H2",{class:!0});var ci=i(Wt);uo=r(ci,"A",{id:!0,class:!0,href:!0});var Hu=i(uo);ja=r(Hu,"SPAN",{});var Su=i(ja);w(Cn.$$.fragment,Su),Su.forEach(t),Hu.forEach(t),Kp=d(ci),Ha=r(ci,"SPAN",{});var Lu=i(Ha);Jp=s(Lu,"TFOpenAIGPTForSequenceClassification"),Lu.forEach(t),ci.forEach(t),$r=d(o),ie=r(o,"DIV",{class:!0});var Ge=i(ie);w(xn.$$.fragment,Ge),Xp=d(Ge),Sa=r(Ge,"P",{});var Nu=i(Sa);Qp=s(Nu,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Nu.forEach(t),Yp=d(Ge),fs=r(Ge,"P",{});var zh=i(fs);us=r(zh,"A",{href:!0});var Bu=i(us);Zp=s(Bu,"TFOpenAIGPTForSequenceClassification"),Bu.forEach(t),eh=s(zh,` uses the last token in order to do the classification,
as other causal models (e.g. GPT-2) do.`),zh.forEach(t),th=d(Ge),Ye=r(Ge,"P",{});var bt=i(Ye);oh=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),La=r(bt,"CODE",{});var Wu=i(La);nh=s(Wu,"pad_token_id"),Wu.forEach(t),sh=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each
row. If no `),Na=r(bt,"CODE",{});var Uu=i(Na);ah=s(Uu,"pad_token_id"),Uu.forEach(t),rh=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Ba=r(bt,"CODE",{});var Ru=i(Ba);ih=s(Ru,"inputs_embeds"),Ru.forEach(t),lh=s(bt," are passed instead of "),Wa=r(bt,"CODE",{});var Vu=i(Wa);dh=s(Vu,"input_ids"),Vu.forEach(t),ch=s(bt,`, it does the same (take
the last value in each row of the batch).`),bt.forEach(t),ph=d(Ge),Dn=r(Ge,"P",{});var pi=i(Dn);hh=s(pi,"This model inherits from "),ms=r(pi,"A",{href:!0});var Ku=i(ms);fh=s(Ku,"TFPreTrainedModel"),Ku.forEach(t),uh=s(pi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pi.forEach(t),mh=d(Ge),jn=r(Ge,"P",{});var hi=i(jn);gh=s(hi,"This model is also a "),Hn=r(hi,"A",{href:!0,rel:!0});var Ju=i(Hn);_h=s(Ju,"tf.keras.Model"),Ju.forEach(t),Th=s(hi,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hi.forEach(t),vh=d(Ge),w(mo.$$.fragment,Ge),kh=d(Ge),Ke=r(Ge,"DIV",{class:!0});var wt=i(Ke);w(Sn.$$.fragment,wt),bh=d(wt),Ut=r(wt,"P",{});var Os=i(Ut);wh=s(Os,"The "),gs=r(Os,"A",{href:!0});var Xu=i(gs);Ph=s(Xu,"TFOpenAIGPTForSequenceClassification"),Xu.forEach(t),yh=s(Os," forward method, overrides the "),Ua=r(Os,"CODE",{});var Qu=i(Ua);Ih=s(Qu,"__call__"),Qu.forEach(t),Oh=s(Os," special method."),Os.forEach(t),Ah=d(wt),w(go.$$.fragment,wt),$h=d(wt),Ra=r(wt,"P",{});var Yu=i(Ra);Gh=s(Yu,"Example:"),Yu.forEach(t),Mh=d(wt),w(Ln.$$.fragment,wt),wt.forEach(t),Ge.forEach(t),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(gm)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(m,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(G,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(R,"href","https://transformer.huggingface.co/doc/gpt"),c(R,"rel","nofollow"),c(ve,"href","https://huggingface.co/thomwolf"),c(ve,"rel","nofollow"),c(ke,"href","https://github.com/openai/finetune-transformer-lm"),c(ke,"rel","nofollow"),c(Un,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(Pt,"class","relative group"),c(Rn,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTModel"),c(Vn,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTModel"),c(yo,"href","https://huggingface.co/openai-gpt"),c(yo,"rel","nofollow"),c(Kn,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jn,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(Xn,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Bs,"class","docstring"),c(Ce,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(Ot,"class","relative group"),c(Qn,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Qe,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(At,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(Yn,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(No,"rel","nofollow"),c(Zn,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTModel"),c(Ne,"class","docstring"),c(xe,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(es,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jo,"rel","nofollow"),c(ts,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTLMHeadModel"),c(Be,"class","docstring"),c(De,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(qt,"class","relative group"),c(os,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(on,"rel","nofollow"),c(ns,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(We,"class","docstring"),c(je,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(xt,"class","relative group"),c(ss,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTForSequenceClassification"),c(as,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cn,"rel","nofollow"),c(rs,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.OpenAIGPTForSequenceClassification"),c(Pe,"class","docstring"),c(He,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(jt,"class","relative group"),c(is,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Tn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Tn,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTModel"),c(Ue,"class","docstring"),c(ye,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(ds,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(In,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(In,"rel","nofollow"),c(cs,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Re,"class","docstring"),c(Ie,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(ps,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zn,"rel","nofollow"),c(hs,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(uo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Wt,"class","relative group"),c(us,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(ms,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hn,"rel","nofollow"),c(gs,"href","/docs/transformers/v4.14.1/en/model_doc/gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Ke,"class","docstring"),c(ie,"class","docstring")},m(o,u){e(document.head,f),h(o,A,u),h(o,m,u),e(m,g),e(g,v),P(T,v,null),e(m,_),e(m,$),e($,he),h(o,J,u),h(o,G,u),e(G,X),e(X,D),P(Y,D,null),e(G,fe),e(G,j),e(j,ue),h(o,de,u),h(o,S,u),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,u),h(o,oe,u),e(oe,B),h(o,ce,u),h(o,ne,u),e(ne,H),e(H,me),h(o,pe,u),h(o,E,u),e(E,ge),h(o,L,u),h(o,Q,u),e(Q,ae),e(ae,W),e(Q,_e),e(Q,te),e(te,C),e(te,re),e(re,U),e(te,Te),h(o,p,u),h(o,k,u),e(k,R),e(R,Me),e(k,Ee),h(o,F,u),h(o,se,u),e(se,ze),e(se,ve),e(ve,x),e(se,V),e(se,ke),e(ke,Fe),e(se,K),h(o,Ae,u),h(o,we,u),e(we,be),h(o,$e,u),h(o,Ze,u),e(Ze,fi),e(Ze,As),e(As,ui),e(Ze,mi),e(Ze,$s),e($s,gi),e(Ze,_i),e(Ze,Gs),e(Gs,Ti),e(Ze,vi),h(o,or,u),P(bo,o,u),h(o,nr,u),h(o,Le,u),e(Le,ki),e(Le,Ms),e(Ms,bi),e(Le,wi),e(Le,Es),e(Es,Pi),e(Le,yi),e(Le,Un),e(Un,Ii),e(Le,Oi),e(Le,zs),e(zs,Ai),e(Le,$i),h(o,sr,u),h(o,Pt,u),e(Pt,Rt),e(Rt,Fs),P(wo,Fs,null),e(Pt,Gi),e(Pt,qs),e(qs,Mi),h(o,ar,u),h(o,qe,u),P(Po,qe,null),e(qe,Ei),e(qe,at),e(at,zi),e(at,Rn),e(Rn,Fi),e(at,qi),e(at,Vn),e(Vn,Ci),e(at,xi),e(at,yo),e(yo,Di),e(at,ji),e(qe,Hi),e(qe,yt),e(yt,Si),e(yt,Kn),e(Kn,Li),e(yt,Ni),e(yt,Jn),e(Jn,Bi),e(yt,Wi),e(qe,Ui),e(qe,Cs),e(Cs,Ri),e(qe,Vi),P(Io,qe,null),h(o,rr,u),h(o,It,u),e(It,Vt),e(Vt,xs),P(Oo,xs,null),e(It,Ki),e(It,Ds),e(Ds,Ji),h(o,ir,u),h(o,Ce,u),P(Ao,Ce,null),e(Ce,Xi),e(Ce,js),e(js,Qi),e(Ce,Yi),e(Ce,$o),e($o,Hs),e(Hs,Zi),e($o,el),e($o,rt),e(rt,tl),e(rt,Ss),e(Ss,ol),e(rt,nl),e(rt,Ls),e(Ls,sl),e(rt,al),e(rt,Ns),e(Ns,rl),e(rt,il),e(Ce,ll),e(Ce,Go),e(Go,dl),e(Go,Xn),e(Xn,cl),e(Go,pl),e(Ce,hl),e(Ce,Bs),h(o,lr,u),h(o,Ot,u),e(Ot,Kt),e(Kt,Ws),P(Mo,Ws,null),e(Ot,fl),e(Ot,Us),e(Us,ul),h(o,dr,u),h(o,Qe,u),P(Eo,Qe,null),e(Qe,ml),e(Qe,zo),e(zo,gl),e(zo,Rs),e(Rs,_l),e(zo,Tl),e(Qe,vl),e(Qe,Fo),e(Fo,Vs),e(Vs,kl),e(Fo,bl),e(Fo,Ks),e(Ks,wl),e(Qe,Pl),e(Qe,qo),e(qo,yl),e(qo,Qn),e(Qn,Il),e(qo,Ol),h(o,cr,u),h(o,At,u),e(At,Jt),e(Jt,Js),P(Co,Js,null),e(At,Al),e(At,Xs),e(Xs,$l),h(o,pr,u),h(o,$t,u),P(xo,$t,null),e($t,Gl),e($t,Qs),e(Qs,Ml),h(o,hr,u),h(o,Gt,u),P(Do,Gt,null),e(Gt,El),e(Gt,Ys),e(Ys,zl),h(o,fr,u),h(o,Mt,u),e(Mt,Xt),e(Xt,Zs),P(jo,Zs,null),e(Mt,Fl),e(Mt,ea),e(ea,ql),h(o,ur,u),h(o,xe,u),P(Ho,xe,null),e(xe,Cl),e(xe,ta),e(ta,xl),e(xe,Dl),e(xe,So),e(So,jl),e(So,Yn),e(Yn,Hl),e(So,Sl),e(xe,Ll),e(xe,Lo),e(Lo,Nl),e(Lo,No),e(No,Bl),e(Lo,Wl),e(xe,Ul),e(xe,Ne),P(Bo,Ne,null),e(Ne,Rl),e(Ne,Et),e(Et,Vl),e(Et,Zn),e(Zn,Kl),e(Et,Jl),e(Et,oa),e(oa,Xl),e(Et,Ql),e(Ne,Yl),P(Qt,Ne,null),e(Ne,Zl),e(Ne,na),e(na,ed),e(Ne,td),P(Wo,Ne,null),h(o,mr,u),h(o,zt,u),e(zt,Yt),e(Yt,sa),P(Uo,sa,null),e(zt,od),e(zt,aa),e(aa,nd),h(o,gr,u),h(o,De,u),P(Ro,De,null),e(De,sd),e(De,ra),e(ra,ad),e(De,rd),e(De,Vo),e(Vo,id),e(Vo,es),e(es,ld),e(Vo,dd),e(De,cd),e(De,Ko),e(Ko,pd),e(Ko,Jo),e(Jo,hd),e(Ko,fd),e(De,ud),e(De,Be),P(Xo,Be,null),e(Be,md),e(Be,Ft),e(Ft,gd),e(Ft,ts),e(ts,_d),e(Ft,Td),e(Ft,ia),e(ia,vd),e(Ft,kd),e(Be,bd),P(Zt,Be,null),e(Be,wd),e(Be,la),e(la,Pd),e(Be,yd),P(Qo,Be,null),h(o,_r,u),h(o,qt,u),e(qt,eo),e(eo,da),P(Yo,da,null),e(qt,Id),e(qt,ca),e(ca,Od),h(o,Tr,u),h(o,je,u),P(Zo,je,null),e(je,Ad),e(je,pa),e(pa,$d),e(je,Gd),e(je,en),e(en,Md),e(en,os),e(os,Ed),e(en,zd),e(je,Fd),e(je,tn),e(tn,qd),e(tn,on),e(on,Cd),e(tn,xd),e(je,Dd),e(je,We),P(nn,We,null),e(We,jd),e(We,Ct),e(Ct,Hd),e(Ct,ns),e(ns,Sd),e(Ct,Ld),e(Ct,ha),e(ha,Nd),e(Ct,Bd),e(We,Wd),P(to,We,null),e(We,Ud),e(We,fa),e(fa,Rd),e(We,Vd),P(sn,We,null),h(o,vr,u),h(o,xt,u),e(xt,oo),e(oo,ua),P(an,ua,null),e(xt,Kd),e(xt,ma),e(ma,Jd),h(o,kr,u),h(o,He,u),P(rn,He,null),e(He,Xd),e(He,Se),e(Se,Qd),e(Se,ss),e(ss,Yd),e(Se,Zd),e(Se,ga),e(ga,ec),e(Se,tc),e(Se,_a),e(_a,oc),e(Se,nc),e(Se,Ta),e(Ta,sc),e(Se,ac),e(Se,va),e(va,rc),e(Se,ic),e(He,lc),e(He,ln),e(ln,dc),e(ln,as),e(as,cc),e(ln,pc),e(He,hc),e(He,dn),e(dn,fc),e(dn,cn),e(cn,uc),e(dn,mc),e(He,gc),e(He,Pe),P(pn,Pe,null),e(Pe,_c),e(Pe,Dt),e(Dt,Tc),e(Dt,rs),e(rs,vc),e(Dt,kc),e(Dt,ka),e(ka,bc),e(Dt,wc),e(Pe,Pc),P(no,Pe,null),e(Pe,yc),e(Pe,ba),e(ba,Ic),e(Pe,Oc),P(hn,Pe,null),e(Pe,Ac),e(Pe,wa),e(wa,$c),e(Pe,Gc),P(fn,Pe,null),h(o,br,u),h(o,jt,u),e(jt,so),e(so,Pa),P(un,Pa,null),e(jt,Mc),e(jt,ya),e(ya,Ec),h(o,wr,u),h(o,ye,u),P(mn,ye,null),e(ye,zc),e(ye,Ia),e(Ia,Fc),e(ye,qc),e(ye,gn),e(gn,Cc),e(gn,is),e(is,xc),e(gn,Dc),e(ye,jc),e(ye,_n),e(_n,Hc),e(_n,Tn),e(Tn,Sc),e(_n,Lc),e(ye,Nc),P(ao,ye,null),e(ye,Bc),e(ye,Ue),P(vn,Ue,null),e(Ue,Wc),e(Ue,Ht),e(Ht,Uc),e(Ht,ls),e(ls,Rc),e(Ht,Vc),e(Ht,Oa),e(Oa,Kc),e(Ht,Jc),e(Ue,Xc),P(ro,Ue,null),e(Ue,Qc),e(Ue,Aa),e(Aa,Yc),e(Ue,Zc),P(kn,Ue,null),h(o,Pr,u),h(o,St,u),e(St,io),e(io,$a),P(bn,$a,null),e(St,ep),e(St,Ga),e(Ga,tp),h(o,yr,u),h(o,Ie,u),P(wn,Ie,null),e(Ie,op),e(Ie,Ma),e(Ma,np),e(Ie,sp),e(Ie,Pn),e(Pn,ap),e(Pn,ds),e(ds,rp),e(Pn,ip),e(Ie,lp),e(Ie,yn),e(yn,dp),e(yn,In),e(In,cp),e(yn,pp),e(Ie,hp),P(lo,Ie,null),e(Ie,fp),e(Ie,Re),P(On,Re,null),e(Re,up),e(Re,Lt),e(Lt,mp),e(Lt,cs),e(cs,gp),e(Lt,_p),e(Lt,Ea),e(Ea,Tp),e(Lt,vp),e(Re,kp),P(co,Re,null),e(Re,bp),e(Re,za),e(za,wp),e(Re,Pp),P(An,Re,null),h(o,Ir,u),h(o,Nt,u),e(Nt,po),e(po,Fa),P($n,Fa,null),e(Nt,yp),e(Nt,qa),e(qa,Ip),h(o,Or,u),h(o,Oe,u),P(Gn,Oe,null),e(Oe,Op),e(Oe,Ca),e(Ca,Ap),e(Oe,$p),e(Oe,Mn),e(Mn,Gp),e(Mn,ps),e(ps,Mp),e(Mn,Ep),e(Oe,zp),e(Oe,En),e(En,Fp),e(En,zn),e(zn,qp),e(En,Cp),e(Oe,xp),P(ho,Oe,null),e(Oe,Dp),e(Oe,Ve),P(Fn,Ve,null),e(Ve,jp),e(Ve,Bt),e(Bt,Hp),e(Bt,hs),e(hs,Sp),e(Bt,Lp),e(Bt,xa),e(xa,Np),e(Bt,Bp),e(Ve,Wp),P(fo,Ve,null),e(Ve,Up),e(Ve,Da),e(Da,Rp),e(Ve,Vp),P(qn,Ve,null),h(o,Ar,u),h(o,Wt,u),e(Wt,uo),e(uo,ja),P(Cn,ja,null),e(Wt,Kp),e(Wt,Ha),e(Ha,Jp),h(o,$r,u),h(o,ie,u),P(xn,ie,null),e(ie,Xp),e(ie,Sa),e(Sa,Qp),e(ie,Yp),e(ie,fs),e(fs,us),e(us,Zp),e(fs,eh),e(ie,th),e(ie,Ye),e(Ye,oh),e(Ye,La),e(La,nh),e(Ye,sh),e(Ye,Na),e(Na,ah),e(Ye,rh),e(Ye,Ba),e(Ba,ih),e(Ye,lh),e(Ye,Wa),e(Wa,dh),e(Ye,ch),e(ie,ph),e(ie,Dn),e(Dn,hh),e(Dn,ms),e(ms,fh),e(Dn,uh),e(ie,mh),e(ie,jn),e(jn,gh),e(jn,Hn),e(Hn,_h),e(jn,Th),e(ie,vh),P(mo,ie,null),e(ie,kh),e(ie,Ke),P(Sn,Ke,null),e(Ke,bh),e(Ke,Ut),e(Ut,wh),e(Ut,gs),e(gs,Ph),e(Ut,yh),e(Ut,Ua),e(Ua,Ih),e(Ut,Oh),e(Ke,Ah),P(go,Ke,null),e(Ke,$h),e(Ke,Ra),e(Ra,Gh),e(Ke,Mh),P(Ln,Ke,null),Gr=!0},p(o,[u]){const Nn={};u&2&&(Nn.$$scope={dirty:u,ctx:o}),Qt.$set(Nn);const Va={};u&2&&(Va.$$scope={dirty:u,ctx:o}),Zt.$set(Va);const Ka={};u&2&&(Ka.$$scope={dirty:u,ctx:o}),to.$set(Ka);const Ja={};u&2&&(Ja.$$scope={dirty:u,ctx:o}),no.$set(Ja);const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:o}),ao.$set(Bn);const Xa={};u&2&&(Xa.$$scope={dirty:u,ctx:o}),ro.$set(Xa);const Qa={};u&2&&(Qa.$$scope={dirty:u,ctx:o}),lo.$set(Qa);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:o}),co.$set(Ya);const Wn={};u&2&&(Wn.$$scope={dirty:u,ctx:o}),ho.$set(Wn);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),fo.$set(Za);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),mo.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),go.$set(tr)},i(o){Gr||(y(T.$$.fragment,o),y(Y.$$.fragment,o),y(bo.$$.fragment,o),y(wo.$$.fragment,o),y(Po.$$.fragment,o),y(Io.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(Co.$$.fragment,o),y(xo.$$.fragment,o),y(Do.$$.fragment,o),y(jo.$$.fragment,o),y(Ho.$$.fragment,o),y(Bo.$$.fragment,o),y(Qt.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Xo.$$.fragment,o),y(Zt.$$.fragment,o),y(Qo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(nn.$$.fragment,o),y(to.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(pn.$$.fragment,o),y(no.$$.fragment,o),y(hn.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(ao.$$.fragment,o),y(vn.$$.fragment,o),y(ro.$$.fragment,o),y(kn.$$.fragment,o),y(bn.$$.fragment,o),y(wn.$$.fragment,o),y(lo.$$.fragment,o),y(On.$$.fragment,o),y(co.$$.fragment,o),y(An.$$.fragment,o),y($n.$$.fragment,o),y(Gn.$$.fragment,o),y(ho.$$.fragment,o),y(Fn.$$.fragment,o),y(fo.$$.fragment,o),y(qn.$$.fragment,o),y(Cn.$$.fragment,o),y(xn.$$.fragment,o),y(mo.$$.fragment,o),y(Sn.$$.fragment,o),y(go.$$.fragment,o),y(Ln.$$.fragment,o),Gr=!0)},o(o){I(T.$$.fragment,o),I(Y.$$.fragment,o),I(bo.$$.fragment,o),I(wo.$$.fragment,o),I(Po.$$.fragment,o),I(Io.$$.fragment,o),I(Oo.$$.fragment,o),I(Ao.$$.fragment,o),I(Mo.$$.fragment,o),I(Eo.$$.fragment,o),I(Co.$$.fragment,o),I(xo.$$.fragment,o),I(Do.$$.fragment,o),I(jo.$$.fragment,o),I(Ho.$$.fragment,o),I(Bo.$$.fragment,o),I(Qt.$$.fragment,o),I(Wo.$$.fragment,o),I(Uo.$$.fragment,o),I(Ro.$$.fragment,o),I(Xo.$$.fragment,o),I(Zt.$$.fragment,o),I(Qo.$$.fragment,o),I(Yo.$$.fragment,o),I(Zo.$$.fragment,o),I(nn.$$.fragment,o),I(to.$$.fragment,o),I(sn.$$.fragment,o),I(an.$$.fragment,o),I(rn.$$.fragment,o),I(pn.$$.fragment,o),I(no.$$.fragment,o),I(hn.$$.fragment,o),I(fn.$$.fragment,o),I(un.$$.fragment,o),I(mn.$$.fragment,o),I(ao.$$.fragment,o),I(vn.$$.fragment,o),I(ro.$$.fragment,o),I(kn.$$.fragment,o),I(bn.$$.fragment,o),I(wn.$$.fragment,o),I(lo.$$.fragment,o),I(On.$$.fragment,o),I(co.$$.fragment,o),I(An.$$.fragment,o),I($n.$$.fragment,o),I(Gn.$$.fragment,o),I(ho.$$.fragment,o),I(Fn.$$.fragment,o),I(fo.$$.fragment,o),I(qn.$$.fragment,o),I(Cn.$$.fragment,o),I(xn.$$.fragment,o),I(mo.$$.fragment,o),I(Sn.$$.fragment,o),I(go.$$.fragment,o),I(Ln.$$.fragment,o),Gr=!1},d(o){t(f),o&&t(A),o&&t(m),O(T),o&&t(J),o&&t(G),O(Y),o&&t(de),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(pe),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(k),o&&t(F),o&&t(se),o&&t(Ae),o&&t(we),o&&t($e),o&&t(Ze),o&&t(or),O(bo,o),o&&t(nr),o&&t(Le),o&&t(sr),o&&t(Pt),O(wo),o&&t(ar),o&&t(qe),O(Po),O(Io),o&&t(rr),o&&t(It),O(Oo),o&&t(ir),o&&t(Ce),O(Ao),o&&t(lr),o&&t(Ot),O(Mo),o&&t(dr),o&&t(Qe),O(Eo),o&&t(cr),o&&t(At),O(Co),o&&t(pr),o&&t($t),O(xo),o&&t(hr),o&&t(Gt),O(Do),o&&t(fr),o&&t(Mt),O(jo),o&&t(ur),o&&t(xe),O(Ho),O(Bo),O(Qt),O(Wo),o&&t(mr),o&&t(zt),O(Uo),o&&t(gr),o&&t(De),O(Ro),O(Xo),O(Zt),O(Qo),o&&t(_r),o&&t(qt),O(Yo),o&&t(Tr),o&&t(je),O(Zo),O(nn),O(to),O(sn),o&&t(vr),o&&t(xt),O(an),o&&t(kr),o&&t(He),O(rn),O(pn),O(no),O(hn),O(fn),o&&t(br),o&&t(jt),O(un),o&&t(wr),o&&t(ye),O(mn),O(ao),O(vn),O(ro),O(kn),o&&t(Pr),o&&t(St),O(bn),o&&t(yr),o&&t(Ie),O(wn),O(lo),O(On),O(co),O(An),o&&t(Ir),o&&t(Nt),O($n),o&&t(Or),o&&t(Oe),O(Gn),O(ho),O(Fn),O(fo),O(qn),o&&t(Ar),o&&t(Wt),O(Cn),o&&t($r),o&&t(ie),O(xn),O(mo),O(Sn),O(go),O(Ln)}}}const gm={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function _m(N,f,A){let{fw:m}=f;return N.$$set=g=>{"fw"in g&&A(0,m=g.fw)},[m]}class ym extends Zu{constructor(f){super();em(this,f,_m,mm,tm,{fw:0})}}export{ym as default,gm as metadata};
