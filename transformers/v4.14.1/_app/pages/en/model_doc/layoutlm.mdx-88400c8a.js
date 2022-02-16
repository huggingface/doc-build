import{S as Dh,i as Ah,s as Oh,e as a,k as l,w as L,t as n,L as Uh,c as r,d as t,m as d,a as i,x as v,h as s,b as c,J as e,g as u,y as w,q as T,o as M,B as x}from"../../../chunks/vendor-b1433968.js";import{T as Qe}from"../../../chunks/Tip-c3840994.js";import{D as _e}from"../../../chunks/Docstring-ff504c58.js";import{C as tt}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as Ve}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Wh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Bh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Hh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Rh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Kh(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Vh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Xh(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Yh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Zh(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Gh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Jh(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Qh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=n("Module"),b=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function em(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe,p,k,X,je,Me,N,be,Fe,xe,S,K,$e,ye,C,ze,ke,ge,Ee,zs,Ur,Wr,Es,Br,Hr,fo,Rr,Kr,go,Vr,Xr,Na,_o,Sa,ot,Yr,qs,Zr,Gr,Cs,Jr,Qr,Ia,yo,Da,Xn,et,ei,Yn,ti,oi,bo,ni,si,ko,ai,ri,Aa,nt,ii,Lo,li,di,vo,ci,pi,Oa,ft,At,Ps,wo,ui,Ns,hi,Ua,qe,To,mi,gt,fi,Zn,gi,_i,Mo,yi,bi,ki,_t,Li,Gn,vi,wi,Jn,Ti,Mi,xi,Ss,$i,ji,xo,Wa,yt,Ot,Is,$o,Fi,Ds,zi,Ba,Be,jo,Ei,As,qi,Ci,Qn,Os,Pi,Ni,Si,Fo,Ii,es,Di,Ai,Ha,bt,Ut,Us,zo,Oi,Ws,Ui,Ra,He,Eo,Wi,Bs,Bi,Hi,Wt,ts,Ri,Ki,os,Vi,Xi,Yi,qo,Zi,ns,Gi,Ji,Ka,kt,Bt,Hs,Co,Qi,Rs,el,Va,Re,Po,tl,No,ol,So,nl,sl,al,Io,rl,Do,il,ll,dl,Ne,Ao,cl,Lt,pl,ss,ul,hl,Ks,ml,fl,gl,Ht,_l,Vs,yl,bl,Oo,Xa,vt,Rt,Xs,Uo,kl,Ys,Ll,Ya,Ke,Wo,vl,wt,wl,Zs,Tl,Ml,Bo,xl,$l,jl,Ho,Fl,Ro,zl,El,ql,Se,Ko,Cl,Tt,Pl,as,Nl,Sl,Gs,Il,Dl,Al,Kt,Ol,Js,Ul,Wl,Vo,Za,Mt,Vt,Qs,Xo,Bl,ea,Hl,Ga,Ce,Yo,Rl,Zo,Kl,Go,Vl,Xl,Yl,Jo,Zl,Qo,Gl,Jl,Ql,en,ed,tn,td,od,nd,Ie,on,sd,xt,ad,rs,rd,id,ta,ld,dd,cd,Xt,pd,oa,ud,hd,nn,Ja,$t,Yt,na,sn,md,sa,fd,Qa,Pe,an,gd,jt,_d,rn,yd,bd,ln,kd,Ld,vd,dn,wd,cn,Td,Md,xd,pn,$d,un,jd,Fd,zd,De,hn,Ed,Ft,qd,is,Cd,Pd,aa,Nd,Sd,Id,Zt,Dd,ra,Ad,Od,mn,er,zt,Gt,ia,fn,Ud,la,Wd,tr,Le,gn,Bd,da,Hd,Rd,_n,Kd,ls,Vd,Xd,Yd,yn,Zd,bn,Gd,Jd,Qd,Jt,ec,Ae,kn,tc,Et,oc,ds,nc,sc,ca,ac,rc,ic,Qt,lc,pa,dc,cc,Ln,or,qt,eo,ua,vn,pc,ha,uc,nr,ve,wn,hc,Tn,mc,ma,fc,gc,_c,Mn,yc,cs,bc,kc,Lc,xn,vc,$n,wc,Tc,Mc,to,xc,Oe,jn,$c,Ct,jc,ps,Fc,zc,fa,Ec,qc,Cc,oo,Pc,ga,Nc,Sc,Fn,sr,Pt,no,_a,zn,Ic,ya,Dc,ar,we,En,Ac,ba,Oc,Uc,qn,Wc,us,Bc,Hc,Rc,Cn,Kc,Pn,Vc,Xc,Yc,so,Zc,Ue,Nn,Gc,Nt,Jc,hs,Qc,ep,ka,tp,op,np,ao,sp,La,ap,rp,Sn,rr,St,ro,va,In,ip,wa,lp,ir,Te,Dn,dp,Ta,cp,pp,An,up,ms,hp,mp,fp,On,gp,Un,_p,yp,bp,io,kp,We,Wn,Lp,It,vp,fs,wp,Tp,Ma,Mp,xp,$p,lo,jp,xa,Fp,zp,Bn,lr;return y=new Ve({}),A=new Ve({}),_o=new tt({props:{code:`def normalize_bbox(bbox, width, height):
     return [
         int(1000 * (bbox[0] / width)),
         int(1000 * (bbox[1] / height)),
         int(1000 * (bbox[2] / width)),
         int(1000 * (bbox[3] / height)),
     ],`,highlighted:`def <span class="hljs-title function_">normalize_bbox</span>(bbox, <span class="hljs-built_in">width</span>, <span class="hljs-built_in">height</span>):
     <span class="hljs-keyword">return</span> [
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / <span class="hljs-built_in">width</span>)),
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / <span class="hljs-built_in">height</span>)),
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / <span class="hljs-built_in">width</span>)),
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / <span class="hljs-built_in">height</span>)),
     ]`}}),yo=new tt({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size,`,highlighted:`from PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),wo=new Ve({}),To=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/configuration_layoutlm.py#L35",parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}]}}),xo=new tt({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

# Initializing a LayoutLM configuration
configuration = LayoutLMConfig()

# Initializing a model from the configuration
model = LayoutLMModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMModel, LayoutLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$o=new Ve({}),jo=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/tokenization_layoutlm.py#L46"}}),zo=new Ve({}),Eo=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L51"}}),Co=new Ve({}),Po=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L708",parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ao=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L734",parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">transformers.LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned
tensors for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new Qe({props:{$$slots:{default:[Wh]},$$scope:{ctx:B}}}),Oo=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
import torch

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = LayoutLMModel.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Uo=new Ve({}),Wo=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L853",parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ko=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L872",parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">transformers.LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned
tensors for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Qe({props:{$$slots:{default:[Bh]},$$scope:{ctx:B}}}),Vo=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
import torch

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = LayoutLMForMaskedLM.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="pt")["input_ids"]

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
                labels=labels)

loss = outputs.loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),Xo=new Ve({}),Yo=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L976",parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),on=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L990",parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">transformers.LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned
tensors for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Xt=new Qe({props:{$$slots:{default:[Hh]},$$scope:{ctx:B}}}),nn=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = LayoutLMForSequenceClassification.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
sequence_label = torch.tensor([1])

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
                labels=sequence_label)

loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=sequence_label)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),sn=new Ve({}),an=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L1107",parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),hn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L1121",parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">transformers.LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned
tensors for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new Qe({props:{$$slots:{default:[Rh]},$$scope:{ctx:B}}}),mn=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = LayoutLMForTokenClassification.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
token_labels = torch.tensor([1,1,0,0]).unsqueeze(0) # batch size of 1

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
                labels=token_labels)

loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = torch.tensor([<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>]).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># batch size of 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=token_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fn=new Ve({}),gn=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L921",parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Jt=new Qe({props:{$$slots:{default:[Kh]},$$scope:{ctx:B}}}),kn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L927",parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMModel.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qt=new Qe({props:{$$slots:{default:[Vh]},$$scope:{ctx:B}}}),Ln=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = TFLayoutLMModel.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMModel.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new Ve({}),wn=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1036",parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),to=new Qe({props:{$$slots:{default:[Xh]},$$scope:{ctx:B}}}),jn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1064",parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oo=new Qe({props:{$$slots:{default:[Yh]},$$scope:{ctx:B}}}),Fn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = TFLayoutLMForMaskedLM.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="tf")["input_ids"]

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
                labels=labels)

loss = outputs.loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),zn=new Ve({}),En=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1182",parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),so=new Qe({props:{$$slots:{default:[Zh]},$$scope:{ctx:B}}}),Nn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1200",parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),ao=new Qe({props:{$$slots:{default:[Gh]},$$scope:{ctx:B}}}),Sn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = TFLayoutLMForSequenceClassification.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
sequence_label = tf.convert_to_tensor([1])

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
                labels=sequence_label)

loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = tf.convert_to_tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=sequence_label)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),In=new Ve({}),Dn=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1317",parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),io=new Qe({props:{$$slots:{default:[Jh]},$$scope:{ctx:B}}}),Wn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1341",parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>TFTokenClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lo=new Qe({props:{$$slots:{default:[Qh]},$$scope:{ctx:B}}}),Bn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForTokenClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained('microsoft/layoutlm-base-uncased')
model = TFLayoutLMForTokenClassification.from_pretrained('microsoft/layoutlm-base-uncased')

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(' '.join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
token_labels = tf.convert_to_tensor([1,1,0,0])

outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
                labels=token_labels)

loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;microsoft/layoutlm-base-uncased&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&#x27; &#x27;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = tf.convert_to_tensor([<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=token_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("meta"),$=l(),f=a("h1"),g=a("a"),b=a("span"),L(y.$$.fragment),_=l(),j=a("span"),re=n("LayoutLM"),Y=l(),z=a("a"),ae=l(),I=a("h2"),Z=a("a"),ne=a("span"),L(A.$$.fragment),ie=l(),se=a("span"),J=n("Overview"),D=l(),G=a("p"),Q=n("The LayoutLM model was proposed in the paper "),F=a("a"),E=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),le=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),W=l(),V=a("ul"),ee=a("li"),H=n("form understanding: the "),te=a("a"),de=n("FUNSD"),q=n(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ce=l(),O=a("li"),pe=n("receipt understanding: the "),oe=a("a"),R=n("SROIE"),ue=n(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),he=l(),P=a("li"),me=n("document image classification: the "),U=a("a"),fe=n("RVL-CDIP"),p=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),k=l(),X=a("p"),je=n("The abstract from the paper is the following:"),Me=l(),N=a("p"),be=a("em"),Fe=n(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),xe=l(),S=a("p"),K=n("Tips:"),$e=l(),ye=a("ul"),C=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),zs=a("code"),Ur=n("forward"),Wr=n(" also expects the input "),Es=a("code"),Br=n("bbox"),Hr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),fo=a("a"),Rr=n("Tesseract"),Kr=n(" (there\u2019s a "),go=a("a"),Vr=n("Python wrapper"),Xr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Na=l(),L(_o.$$.fragment),Sa=l(),ot=a("p"),Yr=n("Here, "),qs=a("code"),Zr=n("width"),Gr=n(" and "),Cs=a("code"),Jr=n("height"),Qr=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ia=l(),L(yo.$$.fragment),Da=l(),Xn=a("ul"),et=a("li"),ei=n("For a demo which shows how to fine-tune "),Yn=a("a"),ti=n("LayoutLMForTokenClassification"),oi=n(" on the "),bo=a("a"),ni=n("FUNSD dataset"),si=n(" (a collection of annotated forms), see "),ko=a("a"),ai=n("this notebook"),ri=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Aa=l(),nt=a("p"),ii=n("This model was contributed by "),Lo=a("a"),li=n("liminghao1630"),di=n(`. The original code can be found
`),vo=a("a"),ci=n("here"),pi=n("."),Oa=l(),ft=a("h2"),At=a("a"),Ps=a("span"),L(wo.$$.fragment),ui=l(),Ns=a("span"),hi=n("LayoutLMConfig"),Ua=l(),qe=a("div"),L(To.$$.fragment),mi=l(),gt=a("p"),fi=n("This is the configuration class to store the configuration of a "),Zn=a("a"),gi=n("LayoutLMModel"),_i=n(`. It is used to
instantiate a LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLM `),Mo=a("a"),yi=n("layoutlm-base-uncased"),bi=n(" architecture."),ki=l(),_t=a("p"),Li=n("Configuration objects inherit from "),Gn=a("a"),vi=n("BertConfig"),wi=n(` and can be used to control the model outputs.
Read the documentation from `),Jn=a("a"),Ti=n("BertConfig"),Mi=n(" for more information."),xi=l(),Ss=a("p"),$i=n("Examples:"),ji=l(),L(xo.$$.fragment),Wa=l(),yt=a("h2"),Ot=a("a"),Is=a("span"),L($o.$$.fragment),Fi=l(),Ds=a("span"),zi=n("LayoutLMTokenizer"),Ba=l(),Be=a("div"),L(jo.$$.fragment),Ei=l(),As=a("p"),qi=n("Constructs a LayoutLM tokenizer."),Ci=l(),Qn=a("p"),Os=a("code"),Pi=n("LayoutLMTokenizer is identical to :class:"),Ni=n("~transformers.BertTokenizer` and runs end-to-end\ntokenization: punctuation splitting + wordpiece."),Si=l(),Fo=a("p"),Ii=n("Refer to superclass "),es=a("a"),Di=n("BertTokenizer"),Ai=n(` for usage examples and documentation concerning
parameters.`),Ha=l(),bt=a("h2"),Ut=a("a"),Us=a("span"),L(zo.$$.fragment),Oi=l(),Ws=a("span"),Ui=n("LayoutLMTokenizerFast"),Ra=l(),He=a("div"),L(Eo.$$.fragment),Wi=l(),Bs=a("p"),Bi=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Hi=l(),Wt=a("p"),ts=a("a"),Ri=n("LayoutLMTokenizerFast"),Ki=n(" is identical to "),os=a("a"),Vi=n("BertTokenizerFast"),Xi=n(` and runs
end-to-end tokenization: punctuation splitting + wordpiece.`),Yi=l(),qo=a("p"),Zi=n("Refer to superclass "),ns=a("a"),Gi=n("BertTokenizerFast"),Ji=n(` for usage examples and documentation concerning
parameters.`),Ka=l(),kt=a("h2"),Bt=a("a"),Hs=a("span"),L(Co.$$.fragment),Qi=l(),Rs=a("span"),el=n("LayoutLMModel"),Va=l(),Re=a("div"),L(Po.$$.fragment),tl=l(),No=a("p"),ol=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),So=a("a"),nl=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),sl=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),al=l(),Io=a("p"),rl=n("This model is a PyTorch "),Do=a("a"),il=n("torch.nn.Module"),ll=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=l(),Ne=a("div"),L(Ao.$$.fragment),cl=l(),Lt=a("p"),pl=n("The "),ss=a("a"),ul=n("LayoutLMModel"),hl=n(" forward method, overrides the "),Ks=a("code"),ml=n("__call__"),fl=n(" special method."),gl=l(),L(Ht.$$.fragment),_l=l(),Vs=a("p"),yl=n("Examples:"),bl=l(),L(Oo.$$.fragment),Xa=l(),vt=a("h2"),Rt=a("a"),Xs=a("span"),L(Uo.$$.fragment),kl=l(),Ys=a("span"),Ll=n("LayoutLMForMaskedLM"),Ya=l(),Ke=a("div"),L(Wo.$$.fragment),vl=l(),wt=a("p"),wl=n("LayoutLM Model with a "),Zs=a("em"),Tl=n("language modeling"),Ml=n(` head on top.
The LayoutLM model was proposed in `),Bo=a("a"),xl=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),$l=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),jl=l(),Ho=a("p"),Fl=n("This model is a PyTorch "),Ro=a("a"),zl=n("torch.nn.Module"),El=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=l(),Se=a("div"),L(Ko.$$.fragment),Cl=l(),Tt=a("p"),Pl=n("The "),as=a("a"),Nl=n("LayoutLMForMaskedLM"),Sl=n(" forward method, overrides the "),Gs=a("code"),Il=n("__call__"),Dl=n(" special method."),Al=l(),L(Kt.$$.fragment),Ol=l(),Js=a("p"),Ul=n("Examples:"),Wl=l(),L(Vo.$$.fragment),Za=l(),Mt=a("h2"),Vt=a("a"),Qs=a("span"),L(Xo.$$.fragment),Bl=l(),ea=a("span"),Hl=n("LayoutLMForSequenceClassification"),Ga=l(),Ce=a("div"),L(Yo.$$.fragment),Rl=l(),Zo=a("p"),Kl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Go=a("a"),Vl=n("RVL-CDIP"),Xl=n(" dataset."),Yl=l(),Jo=a("p"),Zl=n("The LayoutLM model was proposed in "),Qo=a("a"),Gl=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Jl=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),Ql=l(),en=a("p"),ed=n("This model is a PyTorch "),tn=a("a"),td=n("torch.nn.Module"),od=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nd=l(),Ie=a("div"),L(on.$$.fragment),sd=l(),xt=a("p"),ad=n("The "),rs=a("a"),rd=n("LayoutLMForSequenceClassification"),id=n(" forward method, overrides the "),ta=a("code"),ld=n("__call__"),dd=n(" special method."),cd=l(),L(Xt.$$.fragment),pd=l(),oa=a("p"),ud=n("Examples:"),hd=l(),L(nn.$$.fragment),Ja=l(),$t=a("h2"),Yt=a("a"),na=a("span"),L(sn.$$.fragment),md=l(),sa=a("span"),fd=n("LayoutLMForTokenClassification"),Qa=l(),Pe=a("div"),L(an.$$.fragment),gd=l(),jt=a("p"),_d=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),rn=a("a"),yd=n("FUNSD"),bd=n(`
dataset and the `),ln=a("a"),kd=n("SROIE"),Ld=n(" dataset."),vd=l(),dn=a("p"),wd=n("The LayoutLM model was proposed in "),cn=a("a"),Td=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Md=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),xd=l(),pn=a("p"),$d=n("This model is a PyTorch "),un=a("a"),jd=n("torch.nn.Module"),Fd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zd=l(),De=a("div"),L(hn.$$.fragment),Ed=l(),Ft=a("p"),qd=n("The "),is=a("a"),Cd=n("LayoutLMForTokenClassification"),Pd=n(" forward method, overrides the "),aa=a("code"),Nd=n("__call__"),Sd=n(" special method."),Id=l(),L(Zt.$$.fragment),Dd=l(),ra=a("p"),Ad=n("Examples:"),Od=l(),L(mn.$$.fragment),er=l(),zt=a("h2"),Gt=a("a"),ia=a("span"),L(fn.$$.fragment),Ud=l(),la=a("span"),Wd=n("TFLayoutLMModel"),tr=l(),Le=a("div"),L(gn.$$.fragment),Bd=l(),da=a("p"),Hd=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Rd=l(),_n=a("p"),Kd=n("This model inherits from "),ls=a("a"),Vd=n("TFPreTrainedModel"),Xd=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Yd=l(),yn=a("p"),Zd=n("This model is also a "),bn=a("a"),Gd=n("tf.keras.Model"),Jd=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Qd=l(),L(Jt.$$.fragment),ec=l(),Ae=a("div"),L(kn.$$.fragment),tc=l(),Et=a("p"),oc=n("The "),ds=a("a"),nc=n("TFLayoutLMModel"),sc=n(" forward method, overrides the "),ca=a("code"),ac=n("__call__"),rc=n(" special method."),ic=l(),L(Qt.$$.fragment),lc=l(),pa=a("p"),dc=n("Examples:"),cc=l(),L(Ln.$$.fragment),or=l(),qt=a("h2"),eo=a("a"),ua=a("span"),L(vn.$$.fragment),pc=l(),ha=a("span"),uc=n("TFLayoutLMForMaskedLM"),nr=l(),ve=a("div"),L(wn.$$.fragment),hc=l(),Tn=a("p"),mc=n("LayoutLM Model with a "),ma=a("em"),fc=n("language modeling"),gc=n(" head on top."),_c=l(),Mn=a("p"),yc=n("This model inherits from "),cs=a("a"),bc=n("TFPreTrainedModel"),kc=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Lc=l(),xn=a("p"),vc=n("This model is also a "),$n=a("a"),wc=n("tf.keras.Model"),Tc=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Mc=l(),L(to.$$.fragment),xc=l(),Oe=a("div"),L(jn.$$.fragment),$c=l(),Ct=a("p"),jc=n("The "),ps=a("a"),Fc=n("TFLayoutLMForMaskedLM"),zc=n(" forward method, overrides the "),fa=a("code"),Ec=n("__call__"),qc=n(" special method."),Cc=l(),L(oo.$$.fragment),Pc=l(),ga=a("p"),Nc=n("Examples:"),Sc=l(),L(Fn.$$.fragment),sr=l(),Pt=a("h2"),no=a("a"),_a=a("span"),L(zn.$$.fragment),Ic=l(),ya=a("span"),Dc=n("TFLayoutLMForSequenceClassification"),ar=l(),we=a("div"),L(En.$$.fragment),Ac=l(),ba=a("p"),Oc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uc=l(),qn=a("p"),Wc=n("This model inherits from "),us=a("a"),Bc=n("TFPreTrainedModel"),Hc=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Rc=l(),Cn=a("p"),Kc=n("This model is also a "),Pn=a("a"),Vc=n("tf.keras.Model"),Xc=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Yc=l(),L(so.$$.fragment),Zc=l(),Ue=a("div"),L(Nn.$$.fragment),Gc=l(),Nt=a("p"),Jc=n("The "),hs=a("a"),Qc=n("TFLayoutLMForSequenceClassification"),ep=n(" forward method, overrides the "),ka=a("code"),tp=n("__call__"),op=n(" special method."),np=l(),L(ao.$$.fragment),sp=l(),La=a("p"),ap=n("Examples:"),rp=l(),L(Sn.$$.fragment),rr=l(),St=a("h2"),ro=a("a"),va=a("span"),L(In.$$.fragment),ip=l(),wa=a("span"),lp=n("TFLayoutLMForTokenClassification"),ir=l(),Te=a("div"),L(Dn.$$.fragment),dp=l(),Ta=a("p"),cp=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pp=l(),An=a("p"),up=n("This model inherits from "),ms=a("a"),hp=n("TFPreTrainedModel"),mp=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),fp=l(),On=a("p"),gp=n("This model is also a "),Un=a("a"),_p=n("tf.keras.Model"),yp=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),bp=l(),L(io.$$.fragment),kp=l(),We=a("div"),L(Wn.$$.fragment),Lp=l(),It=a("p"),vp=n("The "),fs=a("a"),wp=n("TFLayoutLMForTokenClassification"),Tp=n(" forward method, overrides the "),Ma=a("code"),Mp=n("__call__"),xp=n(" special method."),$p=l(),L(lo.$$.fragment),jp=l(),xa=a("p"),Fp=n("Examples:"),zp=l(),L(Bn.$$.fragment),this.h()},l(o){const m=Uh('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),$=d(o),f=r(o,"H1",{class:!0});var Hn=i(f);g=r(Hn,"A",{id:!0,class:!0,href:!0});var $a=i(g);b=r($a,"SPAN",{});var ja=i(b);v(y.$$.fragment,ja),ja.forEach(t),$a.forEach(t),_=d(Hn),j=r(Hn,"SPAN",{});var Fa=i(j);re=s(Fa,"LayoutLM"),Fa.forEach(t),Hn.forEach(t),Y=d(o),z=r(o,"A",{id:!0}),i(z).forEach(t),ae=d(o),I=r(o,"H2",{class:!0});var Rn=i(I);Z=r(Rn,"A",{id:!0,class:!0,href:!0});var za=i(Z);ne=r(za,"SPAN",{});var Ea=i(ne);v(A.$$.fragment,Ea),Ea.forEach(t),za.forEach(t),ie=d(Rn),se=r(Rn,"SPAN",{});var qa=i(se);J=s(qa,"Overview"),qa.forEach(t),Rn.forEach(t),D=d(o),G=r(o,"P",{});var Kn=i(G);Q=s(Kn,"The LayoutLM model was proposed in the paper "),F=r(Kn,"A",{href:!0,rel:!0});var Ca=i(F);E=s(Ca,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Ca.forEach(t),le=s(Kn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Kn.forEach(t),W=d(o),V=r(o,"UL",{});var Dt=i(V);ee=r(Dt,"LI",{});var Vn=i(ee);H=s(Vn,"form understanding: the "),te=r(Vn,"A",{href:!0,rel:!0});var qp=i(te);de=s(qp,"FUNSD"),qp.forEach(t),q=s(Vn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Vn.forEach(t),ce=d(Dt),O=r(Dt,"LI",{});var dr=i(O);pe=s(dr,"receipt understanding: the "),oe=r(dr,"A",{href:!0,rel:!0});var Cp=i(oe);R=s(Cp,"SROIE"),Cp.forEach(t),ue=s(dr,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),dr.forEach(t),he=d(Dt),P=r(Dt,"LI",{});var cr=i(P);me=s(cr,"document image classification: the "),U=r(cr,"A",{href:!0,rel:!0});var Pp=i(U);fe=s(Pp,"RVL-CDIP"),Pp.forEach(t),p=s(cr,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),cr.forEach(t),Dt.forEach(t),k=d(o),X=r(o,"P",{});var Np=i(X);je=s(Np,"The abstract from the paper is the following:"),Np.forEach(t),Me=d(o),N=r(o,"P",{});var Sp=i(N);be=r(Sp,"EM",{});var Ip=i(be);Fe=s(Ip,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Ip.forEach(t),Sp.forEach(t),xe=d(o),S=r(o,"P",{});var Dp=i(S);K=s(Dp,"Tips:"),Dp.forEach(t),$e=d(o),ye=r(o,"UL",{});var Ap=i(ye);C=r(Ap,"LI",{});var Xe=i(C);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var Op=i(ke);ge=s(Op,"input_ids"),Op.forEach(t),Ee=s(Xe,", "),zs=r(Xe,"CODE",{});var Up=i(zs);Ur=s(Up,"forward"),Up.forEach(t),Wr=s(Xe," also expects the input "),Es=r(Xe,"CODE",{});var Wp=i(Es);Br=s(Wp,"bbox"),Wp.forEach(t),Hr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),fo=r(Xe,"A",{href:!0,rel:!0});var Bp=i(fo);Rr=s(Bp,"Tesseract"),Bp.forEach(t),Kr=s(Xe," (there\u2019s a "),go=r(Xe,"A",{href:!0,rel:!0});var Hp=i(go);Vr=s(Hp,"Python wrapper"),Hp.forEach(t),Xr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(t),Ap.forEach(t),Na=d(o),v(_o.$$.fragment,o),Sa=d(o),ot=r(o,"P",{});var gs=i(ot);Yr=s(gs,"Here, "),qs=r(gs,"CODE",{});var Rp=i(qs);Zr=s(Rp,"width"),Rp.forEach(t),Gr=s(gs," and "),Cs=r(gs,"CODE",{});var Kp=i(Cs);Jr=s(Kp,"height"),Kp.forEach(t),Qr=s(gs,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),gs.forEach(t),Ia=d(o),v(yo.$$.fragment,o),Da=d(o),Xn=r(o,"UL",{});var Vp=i(Xn);et=r(Vp,"LI",{});var co=i(et);ei=s(co,"For a demo which shows how to fine-tune "),Yn=r(co,"A",{href:!0});var Xp=i(Yn);ti=s(Xp,"LayoutLMForTokenClassification"),Xp.forEach(t),oi=s(co," on the "),bo=r(co,"A",{href:!0,rel:!0});var Yp=i(bo);ni=s(Yp,"FUNSD dataset"),Yp.forEach(t),si=s(co," (a collection of annotated forms), see "),ko=r(co,"A",{href:!0,rel:!0});var Zp=i(ko);ai=s(Zp,"this notebook"),Zp.forEach(t),ri=s(co,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),co.forEach(t),Vp.forEach(t),Aa=d(o),nt=r(o,"P",{});var _s=i(nt);ii=s(_s,"This model was contributed by "),Lo=r(_s,"A",{href:!0,rel:!0});var Gp=i(Lo);li=s(Gp,"liminghao1630"),Gp.forEach(t),di=s(_s,`. The original code can be found
`),vo=r(_s,"A",{href:!0,rel:!0});var Jp=i(vo);ci=s(Jp,"here"),Jp.forEach(t),pi=s(_s,"."),_s.forEach(t),Oa=d(o),ft=r(o,"H2",{class:!0});var pr=i(ft);At=r(pr,"A",{id:!0,class:!0,href:!0});var Qp=i(At);Ps=r(Qp,"SPAN",{});var eu=i(Ps);v(wo.$$.fragment,eu),eu.forEach(t),Qp.forEach(t),ui=d(pr),Ns=r(pr,"SPAN",{});var tu=i(Ns);hi=s(tu,"LayoutLMConfig"),tu.forEach(t),pr.forEach(t),Ua=d(o),qe=r(o,"DIV",{class:!0});var st=i(qe);v(To.$$.fragment,st),mi=d(st),gt=r(st,"P",{});var ys=i(gt);fi=s(ys,"This is the configuration class to store the configuration of a "),Zn=r(ys,"A",{href:!0});var ou=i(Zn);gi=s(ou,"LayoutLMModel"),ou.forEach(t),_i=s(ys,`. It is used to
instantiate a LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLM `),Mo=r(ys,"A",{href:!0,rel:!0});var nu=i(Mo);yi=s(nu,"layoutlm-base-uncased"),nu.forEach(t),bi=s(ys," architecture."),ys.forEach(t),ki=d(st),_t=r(st,"P",{});var bs=i(_t);Li=s(bs,"Configuration objects inherit from "),Gn=r(bs,"A",{href:!0});var su=i(Gn);vi=s(su,"BertConfig"),su.forEach(t),wi=s(bs,` and can be used to control the model outputs.
Read the documentation from `),Jn=r(bs,"A",{href:!0});var au=i(Jn);Ti=s(au,"BertConfig"),au.forEach(t),Mi=s(bs," for more information."),bs.forEach(t),xi=d(st),Ss=r(st,"P",{});var ru=i(Ss);$i=s(ru,"Examples:"),ru.forEach(t),ji=d(st),v(xo.$$.fragment,st),st.forEach(t),Wa=d(o),yt=r(o,"H2",{class:!0});var ur=i(yt);Ot=r(ur,"A",{id:!0,class:!0,href:!0});var iu=i(Ot);Is=r(iu,"SPAN",{});var lu=i(Is);v($o.$$.fragment,lu),lu.forEach(t),iu.forEach(t),Fi=d(ur),Ds=r(ur,"SPAN",{});var du=i(Ds);zi=s(du,"LayoutLMTokenizer"),du.forEach(t),ur.forEach(t),Ba=d(o),Be=r(o,"DIV",{class:!0});var po=i(Be);v(jo.$$.fragment,po),Ei=d(po),As=r(po,"P",{});var cu=i(As);qi=s(cu,"Constructs a LayoutLM tokenizer."),cu.forEach(t),Ci=d(po),Qn=r(po,"P",{});var Ep=i(Qn);Os=r(Ep,"CODE",{});var pu=i(Os);Pi=s(pu,"LayoutLMTokenizer is identical to :class:"),pu.forEach(t),Ni=s(Ep,"~transformers.BertTokenizer` and runs end-to-end\ntokenization: punctuation splitting + wordpiece."),Ep.forEach(t),Si=d(po),Fo=r(po,"P",{});var hr=i(Fo);Ii=s(hr,"Refer to superclass "),es=r(hr,"A",{href:!0});var uu=i(es);Di=s(uu,"BertTokenizer"),uu.forEach(t),Ai=s(hr,` for usage examples and documentation concerning
parameters.`),hr.forEach(t),po.forEach(t),Ha=d(o),bt=r(o,"H2",{class:!0});var mr=i(bt);Ut=r(mr,"A",{id:!0,class:!0,href:!0});var hu=i(Ut);Us=r(hu,"SPAN",{});var mu=i(Us);v(zo.$$.fragment,mu),mu.forEach(t),hu.forEach(t),Oi=d(mr),Ws=r(mr,"SPAN",{});var fu=i(Ws);Ui=s(fu,"LayoutLMTokenizerFast"),fu.forEach(t),mr.forEach(t),Ra=d(o),He=r(o,"DIV",{class:!0});var uo=i(He);v(Eo.$$.fragment,uo),Wi=d(uo),Bs=r(uo,"P",{});var gu=i(Bs);Bi=s(gu,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),gu.forEach(t),Hi=d(uo),Wt=r(uo,"P",{});var Pa=i(Wt);ts=r(Pa,"A",{href:!0});var _u=i(ts);Ri=s(_u,"LayoutLMTokenizerFast"),_u.forEach(t),Ki=s(Pa," is identical to "),os=r(Pa,"A",{href:!0});var yu=i(os);Vi=s(yu,"BertTokenizerFast"),yu.forEach(t),Xi=s(Pa,` and runs
end-to-end tokenization: punctuation splitting + wordpiece.`),Pa.forEach(t),Yi=d(uo),qo=r(uo,"P",{});var fr=i(qo);Zi=s(fr,"Refer to superclass "),ns=r(fr,"A",{href:!0});var bu=i(ns);Gi=s(bu,"BertTokenizerFast"),bu.forEach(t),Ji=s(fr,` for usage examples and documentation concerning
parameters.`),fr.forEach(t),uo.forEach(t),Ka=d(o),kt=r(o,"H2",{class:!0});var gr=i(kt);Bt=r(gr,"A",{id:!0,class:!0,href:!0});var ku=i(Bt);Hs=r(ku,"SPAN",{});var Lu=i(Hs);v(Co.$$.fragment,Lu),Lu.forEach(t),ku.forEach(t),Qi=d(gr),Rs=r(gr,"SPAN",{});var vu=i(Rs);el=s(vu,"LayoutLMModel"),vu.forEach(t),gr.forEach(t),Va=d(o),Re=r(o,"DIV",{class:!0});var ho=i(Re);v(Po.$$.fragment,ho),tl=d(ho),No=r(ho,"P",{});var _r=i(No);ol=s(_r,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),So=r(_r,"A",{href:!0,rel:!0});var wu=i(So);nl=s(wu,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),wu.forEach(t),sl=s(_r," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),_r.forEach(t),al=d(ho),Io=r(ho,"P",{});var yr=i(Io);rl=s(yr,"This model is a PyTorch "),Do=r(yr,"A",{href:!0,rel:!0});var Tu=i(Do);il=s(Tu,"torch.nn.Module"),Tu.forEach(t),ll=s(yr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yr.forEach(t),dl=d(ho),Ne=r(ho,"DIV",{class:!0});var at=i(Ne);v(Ao.$$.fragment,at),cl=d(at),Lt=r(at,"P",{});var ks=i(Lt);pl=s(ks,"The "),ss=r(ks,"A",{href:!0});var Mu=i(ss);ul=s(Mu,"LayoutLMModel"),Mu.forEach(t),hl=s(ks," forward method, overrides the "),Ks=r(ks,"CODE",{});var xu=i(Ks);ml=s(xu,"__call__"),xu.forEach(t),fl=s(ks," special method."),ks.forEach(t),gl=d(at),v(Ht.$$.fragment,at),_l=d(at),Vs=r(at,"P",{});var $u=i(Vs);yl=s($u,"Examples:"),$u.forEach(t),bl=d(at),v(Oo.$$.fragment,at),at.forEach(t),ho.forEach(t),Xa=d(o),vt=r(o,"H2",{class:!0});var br=i(vt);Rt=r(br,"A",{id:!0,class:!0,href:!0});var ju=i(Rt);Xs=r(ju,"SPAN",{});var Fu=i(Xs);v(Uo.$$.fragment,Fu),Fu.forEach(t),ju.forEach(t),kl=d(br),Ys=r(br,"SPAN",{});var zu=i(Ys);Ll=s(zu,"LayoutLMForMaskedLM"),zu.forEach(t),br.forEach(t),Ya=d(o),Ke=r(o,"DIV",{class:!0});var mo=i(Ke);v(Wo.$$.fragment,mo),vl=d(mo),wt=r(mo,"P",{});var Ls=i(wt);wl=s(Ls,"LayoutLM Model with a "),Zs=r(Ls,"EM",{});var Eu=i(Zs);Tl=s(Eu,"language modeling"),Eu.forEach(t),Ml=s(Ls,` head on top.
The LayoutLM model was proposed in `),Bo=r(Ls,"A",{href:!0,rel:!0});var qu=i(Bo);xl=s(qu,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),qu.forEach(t),$l=s(Ls," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),Ls.forEach(t),jl=d(mo),Ho=r(mo,"P",{});var kr=i(Ho);Fl=s(kr,"This model is a PyTorch "),Ro=r(kr,"A",{href:!0,rel:!0});var Cu=i(Ro);zl=s(Cu,"torch.nn.Module"),Cu.forEach(t),El=s(kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(t),ql=d(mo),Se=r(mo,"DIV",{class:!0});var rt=i(Se);v(Ko.$$.fragment,rt),Cl=d(rt),Tt=r(rt,"P",{});var vs=i(Tt);Pl=s(vs,"The "),as=r(vs,"A",{href:!0});var Pu=i(as);Nl=s(Pu,"LayoutLMForMaskedLM"),Pu.forEach(t),Sl=s(vs," forward method, overrides the "),Gs=r(vs,"CODE",{});var Nu=i(Gs);Il=s(Nu,"__call__"),Nu.forEach(t),Dl=s(vs," special method."),vs.forEach(t),Al=d(rt),v(Kt.$$.fragment,rt),Ol=d(rt),Js=r(rt,"P",{});var Su=i(Js);Ul=s(Su,"Examples:"),Su.forEach(t),Wl=d(rt),v(Vo.$$.fragment,rt),rt.forEach(t),mo.forEach(t),Za=d(o),Mt=r(o,"H2",{class:!0});var Lr=i(Mt);Vt=r(Lr,"A",{id:!0,class:!0,href:!0});var Iu=i(Vt);Qs=r(Iu,"SPAN",{});var Du=i(Qs);v(Xo.$$.fragment,Du),Du.forEach(t),Iu.forEach(t),Bl=d(Lr),ea=r(Lr,"SPAN",{});var Au=i(ea);Hl=s(Au,"LayoutLMForSequenceClassification"),Au.forEach(t),Lr.forEach(t),Ga=d(o),Ce=r(o,"DIV",{class:!0});var it=i(Ce);v(Yo.$$.fragment,it),Rl=d(it),Zo=r(it,"P",{});var vr=i(Zo);Kl=s(vr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Go=r(vr,"A",{href:!0,rel:!0});var Ou=i(Go);Vl=s(Ou,"RVL-CDIP"),Ou.forEach(t),Xl=s(vr," dataset."),vr.forEach(t),Yl=d(it),Jo=r(it,"P",{});var wr=i(Jo);Zl=s(wr,"The LayoutLM model was proposed in "),Qo=r(wr,"A",{href:!0,rel:!0});var Uu=i(Qo);Gl=s(Uu,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Uu.forEach(t),Jl=s(wr," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),wr.forEach(t),Ql=d(it),en=r(it,"P",{});var Tr=i(en);ed=s(Tr,"This model is a PyTorch "),tn=r(Tr,"A",{href:!0,rel:!0});var Wu=i(tn);td=s(Wu,"torch.nn.Module"),Wu.forEach(t),od=s(Tr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tr.forEach(t),nd=d(it),Ie=r(it,"DIV",{class:!0});var lt=i(Ie);v(on.$$.fragment,lt),sd=d(lt),xt=r(lt,"P",{});var ws=i(xt);ad=s(ws,"The "),rs=r(ws,"A",{href:!0});var Bu=i(rs);rd=s(Bu,"LayoutLMForSequenceClassification"),Bu.forEach(t),id=s(ws," forward method, overrides the "),ta=r(ws,"CODE",{});var Hu=i(ta);ld=s(Hu,"__call__"),Hu.forEach(t),dd=s(ws," special method."),ws.forEach(t),cd=d(lt),v(Xt.$$.fragment,lt),pd=d(lt),oa=r(lt,"P",{});var Ru=i(oa);ud=s(Ru,"Examples:"),Ru.forEach(t),hd=d(lt),v(nn.$$.fragment,lt),lt.forEach(t),it.forEach(t),Ja=d(o),$t=r(o,"H2",{class:!0});var Mr=i($t);Yt=r(Mr,"A",{id:!0,class:!0,href:!0});var Ku=i(Yt);na=r(Ku,"SPAN",{});var Vu=i(na);v(sn.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),md=d(Mr),sa=r(Mr,"SPAN",{});var Xu=i(sa);fd=s(Xu,"LayoutLMForTokenClassification"),Xu.forEach(t),Mr.forEach(t),Qa=d(o),Pe=r(o,"DIV",{class:!0});var dt=i(Pe);v(an.$$.fragment,dt),gd=d(dt),jt=r(dt,"P",{});var Ts=i(jt);_d=s(Ts,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),rn=r(Ts,"A",{href:!0,rel:!0});var Yu=i(rn);yd=s(Yu,"FUNSD"),Yu.forEach(t),bd=s(Ts,`
dataset and the `),ln=r(Ts,"A",{href:!0,rel:!0});var Zu=i(ln);kd=s(Zu,"SROIE"),Zu.forEach(t),Ld=s(Ts," dataset."),Ts.forEach(t),vd=d(dt),dn=r(dt,"P",{});var xr=i(dn);wd=s(xr,"The LayoutLM model was proposed in "),cn=r(xr,"A",{href:!0,rel:!0});var Gu=i(cn);Td=s(Gu,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Gu.forEach(t),Md=s(xr," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),xr.forEach(t),xd=d(dt),pn=r(dt,"P",{});var $r=i(pn);$d=s($r,"This model is a PyTorch "),un=r($r,"A",{href:!0,rel:!0});var Ju=i(un);jd=s(Ju,"torch.nn.Module"),Ju.forEach(t),Fd=s($r,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(t),zd=d(dt),De=r(dt,"DIV",{class:!0});var ct=i(De);v(hn.$$.fragment,ct),Ed=d(ct),Ft=r(ct,"P",{});var Ms=i(Ft);qd=s(Ms,"The "),is=r(Ms,"A",{href:!0});var Qu=i(is);Cd=s(Qu,"LayoutLMForTokenClassification"),Qu.forEach(t),Pd=s(Ms," forward method, overrides the "),aa=r(Ms,"CODE",{});var eh=i(aa);Nd=s(eh,"__call__"),eh.forEach(t),Sd=s(Ms," special method."),Ms.forEach(t),Id=d(ct),v(Zt.$$.fragment,ct),Dd=d(ct),ra=r(ct,"P",{});var th=i(ra);Ad=s(th,"Examples:"),th.forEach(t),Od=d(ct),v(mn.$$.fragment,ct),ct.forEach(t),dt.forEach(t),er=d(o),zt=r(o,"H2",{class:!0});var jr=i(zt);Gt=r(jr,"A",{id:!0,class:!0,href:!0});var oh=i(Gt);ia=r(oh,"SPAN",{});var nh=i(ia);v(fn.$$.fragment,nh),nh.forEach(t),oh.forEach(t),Ud=d(jr),la=r(jr,"SPAN",{});var sh=i(la);Wd=s(sh,"TFLayoutLMModel"),sh.forEach(t),jr.forEach(t),tr=d(o),Le=r(o,"DIV",{class:!0});var Ye=i(Le);v(gn.$$.fragment,Ye),Bd=d(Ye),da=r(Ye,"P",{});var ah=i(da);Hd=s(ah,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),ah.forEach(t),Rd=d(Ye),_n=r(Ye,"P",{});var Fr=i(_n);Kd=s(Fr,"This model inherits from "),ls=r(Fr,"A",{href:!0});var rh=i(ls);Vd=s(rh,"TFPreTrainedModel"),rh.forEach(t),Xd=s(Fr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Fr.forEach(t),Yd=d(Ye),yn=r(Ye,"P",{});var zr=i(yn);Zd=s(zr,"This model is also a "),bn=r(zr,"A",{href:!0,rel:!0});var ih=i(bn);Gd=s(ih,"tf.keras.Model"),ih.forEach(t),Jd=s(zr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),zr.forEach(t),Qd=d(Ye),v(Jt.$$.fragment,Ye),ec=d(Ye),Ae=r(Ye,"DIV",{class:!0});var pt=i(Ae);v(kn.$$.fragment,pt),tc=d(pt),Et=r(pt,"P",{});var xs=i(Et);oc=s(xs,"The "),ds=r(xs,"A",{href:!0});var lh=i(ds);nc=s(lh,"TFLayoutLMModel"),lh.forEach(t),sc=s(xs," forward method, overrides the "),ca=r(xs,"CODE",{});var dh=i(ca);ac=s(dh,"__call__"),dh.forEach(t),rc=s(xs," special method."),xs.forEach(t),ic=d(pt),v(Qt.$$.fragment,pt),lc=d(pt),pa=r(pt,"P",{});var ch=i(pa);dc=s(ch,"Examples:"),ch.forEach(t),cc=d(pt),v(Ln.$$.fragment,pt),pt.forEach(t),Ye.forEach(t),or=d(o),qt=r(o,"H2",{class:!0});var Er=i(qt);eo=r(Er,"A",{id:!0,class:!0,href:!0});var ph=i(eo);ua=r(ph,"SPAN",{});var uh=i(ua);v(vn.$$.fragment,uh),uh.forEach(t),ph.forEach(t),pc=d(Er),ha=r(Er,"SPAN",{});var hh=i(ha);uc=s(hh,"TFLayoutLMForMaskedLM"),hh.forEach(t),Er.forEach(t),nr=d(o),ve=r(o,"DIV",{class:!0});var Ze=i(ve);v(wn.$$.fragment,Ze),hc=d(Ze),Tn=r(Ze,"P",{});var qr=i(Tn);mc=s(qr,"LayoutLM Model with a "),ma=r(qr,"EM",{});var mh=i(ma);fc=s(mh,"language modeling"),mh.forEach(t),gc=s(qr," head on top."),qr.forEach(t),_c=d(Ze),Mn=r(Ze,"P",{});var Cr=i(Mn);yc=s(Cr,"This model inherits from "),cs=r(Cr,"A",{href:!0});var fh=i(cs);bc=s(fh,"TFPreTrainedModel"),fh.forEach(t),kc=s(Cr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Cr.forEach(t),Lc=d(Ze),xn=r(Ze,"P",{});var Pr=i(xn);vc=s(Pr,"This model is also a "),$n=r(Pr,"A",{href:!0,rel:!0});var gh=i($n);wc=s(gh,"tf.keras.Model"),gh.forEach(t),Tc=s(Pr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Pr.forEach(t),Mc=d(Ze),v(to.$$.fragment,Ze),xc=d(Ze),Oe=r(Ze,"DIV",{class:!0});var ut=i(Oe);v(jn.$$.fragment,ut),$c=d(ut),Ct=r(ut,"P",{});var $s=i(Ct);jc=s($s,"The "),ps=r($s,"A",{href:!0});var _h=i(ps);Fc=s(_h,"TFLayoutLMForMaskedLM"),_h.forEach(t),zc=s($s," forward method, overrides the "),fa=r($s,"CODE",{});var yh=i(fa);Ec=s(yh,"__call__"),yh.forEach(t),qc=s($s," special method."),$s.forEach(t),Cc=d(ut),v(oo.$$.fragment,ut),Pc=d(ut),ga=r(ut,"P",{});var bh=i(ga);Nc=s(bh,"Examples:"),bh.forEach(t),Sc=d(ut),v(Fn.$$.fragment,ut),ut.forEach(t),Ze.forEach(t),sr=d(o),Pt=r(o,"H2",{class:!0});var Nr=i(Pt);no=r(Nr,"A",{id:!0,class:!0,href:!0});var kh=i(no);_a=r(kh,"SPAN",{});var Lh=i(_a);v(zn.$$.fragment,Lh),Lh.forEach(t),kh.forEach(t),Ic=d(Nr),ya=r(Nr,"SPAN",{});var vh=i(ya);Dc=s(vh,"TFLayoutLMForSequenceClassification"),vh.forEach(t),Nr.forEach(t),ar=d(o),we=r(o,"DIV",{class:!0});var Ge=i(we);v(En.$$.fragment,Ge),Ac=d(Ge),ba=r(Ge,"P",{});var wh=i(ba);Oc=s(wh,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wh.forEach(t),Uc=d(Ge),qn=r(Ge,"P",{});var Sr=i(qn);Wc=s(Sr,"This model inherits from "),us=r(Sr,"A",{href:!0});var Th=i(us);Bc=s(Th,"TFPreTrainedModel"),Th.forEach(t),Hc=s(Sr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Sr.forEach(t),Rc=d(Ge),Cn=r(Ge,"P",{});var Ir=i(Cn);Kc=s(Ir,"This model is also a "),Pn=r(Ir,"A",{href:!0,rel:!0});var Mh=i(Pn);Vc=s(Mh,"tf.keras.Model"),Mh.forEach(t),Xc=s(Ir,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ir.forEach(t),Yc=d(Ge),v(so.$$.fragment,Ge),Zc=d(Ge),Ue=r(Ge,"DIV",{class:!0});var ht=i(Ue);v(Nn.$$.fragment,ht),Gc=d(ht),Nt=r(ht,"P",{});var js=i(Nt);Jc=s(js,"The "),hs=r(js,"A",{href:!0});var xh=i(hs);Qc=s(xh,"TFLayoutLMForSequenceClassification"),xh.forEach(t),ep=s(js," forward method, overrides the "),ka=r(js,"CODE",{});var $h=i(ka);tp=s($h,"__call__"),$h.forEach(t),op=s(js," special method."),js.forEach(t),np=d(ht),v(ao.$$.fragment,ht),sp=d(ht),La=r(ht,"P",{});var jh=i(La);ap=s(jh,"Examples:"),jh.forEach(t),rp=d(ht),v(Sn.$$.fragment,ht),ht.forEach(t),Ge.forEach(t),rr=d(o),St=r(o,"H2",{class:!0});var Dr=i(St);ro=r(Dr,"A",{id:!0,class:!0,href:!0});var Fh=i(ro);va=r(Fh,"SPAN",{});var zh=i(va);v(In.$$.fragment,zh),zh.forEach(t),Fh.forEach(t),ip=d(Dr),wa=r(Dr,"SPAN",{});var Eh=i(wa);lp=s(Eh,"TFLayoutLMForTokenClassification"),Eh.forEach(t),Dr.forEach(t),ir=d(o),Te=r(o,"DIV",{class:!0});var Je=i(Te);v(Dn.$$.fragment,Je),dp=d(Je),Ta=r(Je,"P",{});var qh=i(Ta);cp=s(qh,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qh.forEach(t),pp=d(Je),An=r(Je,"P",{});var Ar=i(An);up=s(Ar,"This model inherits from "),ms=r(Ar,"A",{href:!0});var Ch=i(ms);hp=s(Ch,"TFPreTrainedModel"),Ch.forEach(t),mp=s(Ar,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ar.forEach(t),fp=d(Je),On=r(Je,"P",{});var Or=i(On);gp=s(Or,"This model is also a "),Un=r(Or,"A",{href:!0,rel:!0});var Ph=i(Un);_p=s(Ph,"tf.keras.Model"),Ph.forEach(t),yp=s(Or,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Or.forEach(t),bp=d(Je),v(io.$$.fragment,Je),kp=d(Je),We=r(Je,"DIV",{class:!0});var mt=i(We);v(Wn.$$.fragment,mt),Lp=d(mt),It=r(mt,"P",{});var Fs=i(It);vp=s(Fs,"The "),fs=r(Fs,"A",{href:!0});var Nh=i(fs);wp=s(Nh,"TFLayoutLMForTokenClassification"),Nh.forEach(t),Tp=s(Fs," forward method, overrides the "),Ma=r(Fs,"CODE",{});var Sh=i(Ma);Mp=s(Sh,"__call__"),Sh.forEach(t),xp=s(Fs," special method."),Fs.forEach(t),$p=d(mt),v(lo.$$.fragment,mt),jp=d(mt),xa=r(mt,"P",{});var Ih=i(xa);Fp=s(Ih,"Examples:"),Ih.forEach(t),zp=d(mt),v(Bn.$$.fragment,mt),mt.forEach(t),Je.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(tm)),c(g,"id","layoutlm"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#layoutlm"),c(f,"class","relative group"),c(z,"id","Overview"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(I,"class","relative group"),c(F,"href","https://arxiv.org/abs/1912.13318"),c(F,"rel","nofollow"),c(te,"href","https://guillaumejaume.github.io/FUNSD/"),c(te,"rel","nofollow"),c(oe,"href","https://rrc.cvc.uab.es/?ch=13"),c(oe,"rel","nofollow"),c(U,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(U,"rel","nofollow"),c(fo,"href","https://github.com/tesseract-ocr/tesseract"),c(fo,"rel","nofollow"),c(go,"href","https://pypi.org/project/pytesseract/"),c(go,"rel","nofollow"),c(Yn,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(bo,"href","https://guillaumejaume.github.io/FUNSD/"),c(bo,"rel","nofollow"),c(ko,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),c(ko,"rel","nofollow"),c(Lo,"href","https://huggingface.co/liminghao1630"),c(Lo,"rel","nofollow"),c(vo,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),c(vo,"rel","nofollow"),c(At,"id","transformers.LayoutLMConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.LayoutLMConfig"),c(ft,"class","relative group"),c(Zn,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(Mo,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),c(Mo,"rel","nofollow"),c(Gn,"href","/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertConfig"),c(Jn,"href","/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertConfig"),c(qe,"class","docstring"),c(Ot,"id","transformers.LayoutLMTokenizer"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.LayoutLMTokenizer"),c(yt,"class","relative group"),c(es,"href","/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizer"),c(Be,"class","docstring"),c(Ut,"id","transformers.LayoutLMTokenizerFast"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LayoutLMTokenizerFast"),c(bt,"class","relative group"),c(ts,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),c(os,"href","/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizerFast"),c(ns,"href","/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizerFast"),c(He,"class","docstring"),c(Bt,"id","transformers.LayoutLMModel"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.LayoutLMModel"),c(kt,"class","relative group"),c(So,"href","https://arxiv.org/abs/1912.13318"),c(So,"rel","nofollow"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(ss,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(Ne,"class","docstring"),c(Re,"class","docstring"),c(Rt,"id","transformers.LayoutLMForMaskedLM"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.LayoutLMForMaskedLM"),c(vt,"class","relative group"),c(Bo,"href","https://arxiv.org/abs/1912.13318"),c(Bo,"rel","nofollow"),c(Ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ro,"rel","nofollow"),c(as,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),c(Se,"class","docstring"),c(Ke,"class","docstring"),c(Vt,"id","transformers.LayoutLMForSequenceClassification"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.LayoutLMForSequenceClassification"),c(Mt,"class","relative group"),c(Go,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(Go,"rel","nofollow"),c(Qo,"href","https://arxiv.org/abs/1912.13318"),c(Qo,"rel","nofollow"),c(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(tn,"rel","nofollow"),c(rs,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),c(Ie,"class","docstring"),c(Ce,"class","docstring"),c(Yt,"id","transformers.LayoutLMForTokenClassification"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LayoutLMForTokenClassification"),c($t,"class","relative group"),c(rn,"href","https://guillaumejaume.github.io/FUNSD/"),c(rn,"rel","nofollow"),c(ln,"href","https://rrc.cvc.uab.es/?ch=13"),c(ln,"rel","nofollow"),c(cn,"href","https://arxiv.org/abs/1912.13318"),c(cn,"rel","nofollow"),c(un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(un,"rel","nofollow"),c(is,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(De,"class","docstring"),c(Pe,"class","docstring"),c(Gt,"id","transformers.TFLayoutLMModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFLayoutLMModel"),c(zt,"class","relative group"),c(ls,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bn,"rel","nofollow"),c(ds,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),c(Ae,"class","docstring"),c(Le,"class","docstring"),c(eo,"id","transformers.TFLayoutLMForMaskedLM"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.TFLayoutLMForMaskedLM"),c(qt,"class","relative group"),c(cs,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($n,"rel","nofollow"),c(ps,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),c(Oe,"class","docstring"),c(ve,"class","docstring"),c(no,"id","transformers.TFLayoutLMForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.TFLayoutLMForSequenceClassification"),c(Pt,"class","relative group"),c(us,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pn,"rel","nofollow"),c(hs,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),c(Ue,"class","docstring"),c(we,"class","docstring"),c(ro,"id","transformers.TFLayoutLMForTokenClassification"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.TFLayoutLMForTokenClassification"),c(St,"class","relative group"),c(ms,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Un,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Un,"rel","nofollow"),c(fs,"href","/docs/transformers/v4.14.1/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),c(We,"class","docstring"),c(Te,"class","docstring")},m(o,m){e(document.head,h),u(o,$,m),u(o,f,m),e(f,g),e(g,b),w(y,b,null),e(f,_),e(f,j),e(j,re),u(o,Y,m),u(o,z,m),u(o,ae,m),u(o,I,m),e(I,Z),e(Z,ne),w(A,ne,null),e(I,ie),e(I,se),e(se,J),u(o,D,m),u(o,G,m),e(G,Q),e(G,F),e(F,E),e(G,le),u(o,W,m),u(o,V,m),e(V,ee),e(ee,H),e(ee,te),e(te,de),e(ee,q),e(V,ce),e(V,O),e(O,pe),e(O,oe),e(oe,R),e(O,ue),e(V,he),e(V,P),e(P,me),e(P,U),e(U,fe),e(P,p),u(o,k,m),u(o,X,m),e(X,je),u(o,Me,m),u(o,N,m),e(N,be),e(be,Fe),u(o,xe,m),u(o,S,m),e(S,K),u(o,$e,m),u(o,ye,m),e(ye,C),e(C,ze),e(C,ke),e(ke,ge),e(C,Ee),e(C,zs),e(zs,Ur),e(C,Wr),e(C,Es),e(Es,Br),e(C,Hr),e(C,fo),e(fo,Rr),e(C,Kr),e(C,go),e(go,Vr),e(C,Xr),u(o,Na,m),w(_o,o,m),u(o,Sa,m),u(o,ot,m),e(ot,Yr),e(ot,qs),e(qs,Zr),e(ot,Gr),e(ot,Cs),e(Cs,Jr),e(ot,Qr),u(o,Ia,m),w(yo,o,m),u(o,Da,m),u(o,Xn,m),e(Xn,et),e(et,ei),e(et,Yn),e(Yn,ti),e(et,oi),e(et,bo),e(bo,ni),e(et,si),e(et,ko),e(ko,ai),e(et,ri),u(o,Aa,m),u(o,nt,m),e(nt,ii),e(nt,Lo),e(Lo,li),e(nt,di),e(nt,vo),e(vo,ci),e(nt,pi),u(o,Oa,m),u(o,ft,m),e(ft,At),e(At,Ps),w(wo,Ps,null),e(ft,ui),e(ft,Ns),e(Ns,hi),u(o,Ua,m),u(o,qe,m),w(To,qe,null),e(qe,mi),e(qe,gt),e(gt,fi),e(gt,Zn),e(Zn,gi),e(gt,_i),e(gt,Mo),e(Mo,yi),e(gt,bi),e(qe,ki),e(qe,_t),e(_t,Li),e(_t,Gn),e(Gn,vi),e(_t,wi),e(_t,Jn),e(Jn,Ti),e(_t,Mi),e(qe,xi),e(qe,Ss),e(Ss,$i),e(qe,ji),w(xo,qe,null),u(o,Wa,m),u(o,yt,m),e(yt,Ot),e(Ot,Is),w($o,Is,null),e(yt,Fi),e(yt,Ds),e(Ds,zi),u(o,Ba,m),u(o,Be,m),w(jo,Be,null),e(Be,Ei),e(Be,As),e(As,qi),e(Be,Ci),e(Be,Qn),e(Qn,Os),e(Os,Pi),e(Qn,Ni),e(Be,Si),e(Be,Fo),e(Fo,Ii),e(Fo,es),e(es,Di),e(Fo,Ai),u(o,Ha,m),u(o,bt,m),e(bt,Ut),e(Ut,Us),w(zo,Us,null),e(bt,Oi),e(bt,Ws),e(Ws,Ui),u(o,Ra,m),u(o,He,m),w(Eo,He,null),e(He,Wi),e(He,Bs),e(Bs,Bi),e(He,Hi),e(He,Wt),e(Wt,ts),e(ts,Ri),e(Wt,Ki),e(Wt,os),e(os,Vi),e(Wt,Xi),e(He,Yi),e(He,qo),e(qo,Zi),e(qo,ns),e(ns,Gi),e(qo,Ji),u(o,Ka,m),u(o,kt,m),e(kt,Bt),e(Bt,Hs),w(Co,Hs,null),e(kt,Qi),e(kt,Rs),e(Rs,el),u(o,Va,m),u(o,Re,m),w(Po,Re,null),e(Re,tl),e(Re,No),e(No,ol),e(No,So),e(So,nl),e(No,sl),e(Re,al),e(Re,Io),e(Io,rl),e(Io,Do),e(Do,il),e(Io,ll),e(Re,dl),e(Re,Ne),w(Ao,Ne,null),e(Ne,cl),e(Ne,Lt),e(Lt,pl),e(Lt,ss),e(ss,ul),e(Lt,hl),e(Lt,Ks),e(Ks,ml),e(Lt,fl),e(Ne,gl),w(Ht,Ne,null),e(Ne,_l),e(Ne,Vs),e(Vs,yl),e(Ne,bl),w(Oo,Ne,null),u(o,Xa,m),u(o,vt,m),e(vt,Rt),e(Rt,Xs),w(Uo,Xs,null),e(vt,kl),e(vt,Ys),e(Ys,Ll),u(o,Ya,m),u(o,Ke,m),w(Wo,Ke,null),e(Ke,vl),e(Ke,wt),e(wt,wl),e(wt,Zs),e(Zs,Tl),e(wt,Ml),e(wt,Bo),e(Bo,xl),e(wt,$l),e(Ke,jl),e(Ke,Ho),e(Ho,Fl),e(Ho,Ro),e(Ro,zl),e(Ho,El),e(Ke,ql),e(Ke,Se),w(Ko,Se,null),e(Se,Cl),e(Se,Tt),e(Tt,Pl),e(Tt,as),e(as,Nl),e(Tt,Sl),e(Tt,Gs),e(Gs,Il),e(Tt,Dl),e(Se,Al),w(Kt,Se,null),e(Se,Ol),e(Se,Js),e(Js,Ul),e(Se,Wl),w(Vo,Se,null),u(o,Za,m),u(o,Mt,m),e(Mt,Vt),e(Vt,Qs),w(Xo,Qs,null),e(Mt,Bl),e(Mt,ea),e(ea,Hl),u(o,Ga,m),u(o,Ce,m),w(Yo,Ce,null),e(Ce,Rl),e(Ce,Zo),e(Zo,Kl),e(Zo,Go),e(Go,Vl),e(Zo,Xl),e(Ce,Yl),e(Ce,Jo),e(Jo,Zl),e(Jo,Qo),e(Qo,Gl),e(Jo,Jl),e(Ce,Ql),e(Ce,en),e(en,ed),e(en,tn),e(tn,td),e(en,od),e(Ce,nd),e(Ce,Ie),w(on,Ie,null),e(Ie,sd),e(Ie,xt),e(xt,ad),e(xt,rs),e(rs,rd),e(xt,id),e(xt,ta),e(ta,ld),e(xt,dd),e(Ie,cd),w(Xt,Ie,null),e(Ie,pd),e(Ie,oa),e(oa,ud),e(Ie,hd),w(nn,Ie,null),u(o,Ja,m),u(o,$t,m),e($t,Yt),e(Yt,na),w(sn,na,null),e($t,md),e($t,sa),e(sa,fd),u(o,Qa,m),u(o,Pe,m),w(an,Pe,null),e(Pe,gd),e(Pe,jt),e(jt,_d),e(jt,rn),e(rn,yd),e(jt,bd),e(jt,ln),e(ln,kd),e(jt,Ld),e(Pe,vd),e(Pe,dn),e(dn,wd),e(dn,cn),e(cn,Td),e(dn,Md),e(Pe,xd),e(Pe,pn),e(pn,$d),e(pn,un),e(un,jd),e(pn,Fd),e(Pe,zd),e(Pe,De),w(hn,De,null),e(De,Ed),e(De,Ft),e(Ft,qd),e(Ft,is),e(is,Cd),e(Ft,Pd),e(Ft,aa),e(aa,Nd),e(Ft,Sd),e(De,Id),w(Zt,De,null),e(De,Dd),e(De,ra),e(ra,Ad),e(De,Od),w(mn,De,null),u(o,er,m),u(o,zt,m),e(zt,Gt),e(Gt,ia),w(fn,ia,null),e(zt,Ud),e(zt,la),e(la,Wd),u(o,tr,m),u(o,Le,m),w(gn,Le,null),e(Le,Bd),e(Le,da),e(da,Hd),e(Le,Rd),e(Le,_n),e(_n,Kd),e(_n,ls),e(ls,Vd),e(_n,Xd),e(Le,Yd),e(Le,yn),e(yn,Zd),e(yn,bn),e(bn,Gd),e(yn,Jd),e(Le,Qd),w(Jt,Le,null),e(Le,ec),e(Le,Ae),w(kn,Ae,null),e(Ae,tc),e(Ae,Et),e(Et,oc),e(Et,ds),e(ds,nc),e(Et,sc),e(Et,ca),e(ca,ac),e(Et,rc),e(Ae,ic),w(Qt,Ae,null),e(Ae,lc),e(Ae,pa),e(pa,dc),e(Ae,cc),w(Ln,Ae,null),u(o,or,m),u(o,qt,m),e(qt,eo),e(eo,ua),w(vn,ua,null),e(qt,pc),e(qt,ha),e(ha,uc),u(o,nr,m),u(o,ve,m),w(wn,ve,null),e(ve,hc),e(ve,Tn),e(Tn,mc),e(Tn,ma),e(ma,fc),e(Tn,gc),e(ve,_c),e(ve,Mn),e(Mn,yc),e(Mn,cs),e(cs,bc),e(Mn,kc),e(ve,Lc),e(ve,xn),e(xn,vc),e(xn,$n),e($n,wc),e(xn,Tc),e(ve,Mc),w(to,ve,null),e(ve,xc),e(ve,Oe),w(jn,Oe,null),e(Oe,$c),e(Oe,Ct),e(Ct,jc),e(Ct,ps),e(ps,Fc),e(Ct,zc),e(Ct,fa),e(fa,Ec),e(Ct,qc),e(Oe,Cc),w(oo,Oe,null),e(Oe,Pc),e(Oe,ga),e(ga,Nc),e(Oe,Sc),w(Fn,Oe,null),u(o,sr,m),u(o,Pt,m),e(Pt,no),e(no,_a),w(zn,_a,null),e(Pt,Ic),e(Pt,ya),e(ya,Dc),u(o,ar,m),u(o,we,m),w(En,we,null),e(we,Ac),e(we,ba),e(ba,Oc),e(we,Uc),e(we,qn),e(qn,Wc),e(qn,us),e(us,Bc),e(qn,Hc),e(we,Rc),e(we,Cn),e(Cn,Kc),e(Cn,Pn),e(Pn,Vc),e(Cn,Xc),e(we,Yc),w(so,we,null),e(we,Zc),e(we,Ue),w(Nn,Ue,null),e(Ue,Gc),e(Ue,Nt),e(Nt,Jc),e(Nt,hs),e(hs,Qc),e(Nt,ep),e(Nt,ka),e(ka,tp),e(Nt,op),e(Ue,np),w(ao,Ue,null),e(Ue,sp),e(Ue,La),e(La,ap),e(Ue,rp),w(Sn,Ue,null),u(o,rr,m),u(o,St,m),e(St,ro),e(ro,va),w(In,va,null),e(St,ip),e(St,wa),e(wa,lp),u(o,ir,m),u(o,Te,m),w(Dn,Te,null),e(Te,dp),e(Te,Ta),e(Ta,cp),e(Te,pp),e(Te,An),e(An,up),e(An,ms),e(ms,hp),e(An,mp),e(Te,fp),e(Te,On),e(On,gp),e(On,Un),e(Un,_p),e(On,yp),e(Te,bp),w(io,Te,null),e(Te,kp),e(Te,We),w(Wn,We,null),e(We,Lp),e(We,It),e(It,vp),e(It,fs),e(fs,wp),e(It,Tp),e(It,Ma),e(Ma,Mp),e(It,xp),e(We,$p),w(lo,We,null),e(We,jp),e(We,xa),e(xa,Fp),e(We,zp),w(Bn,We,null),lr=!0},p(o,[m]){const Hn={};m&2&&(Hn.$$scope={dirty:m,ctx:o}),Ht.$set(Hn);const $a={};m&2&&($a.$$scope={dirty:m,ctx:o}),Kt.$set($a);const ja={};m&2&&(ja.$$scope={dirty:m,ctx:o}),Xt.$set(ja);const Fa={};m&2&&(Fa.$$scope={dirty:m,ctx:o}),Zt.$set(Fa);const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:o}),Jt.$set(Rn);const za={};m&2&&(za.$$scope={dirty:m,ctx:o}),Qt.$set(za);const Ea={};m&2&&(Ea.$$scope={dirty:m,ctx:o}),to.$set(Ea);const qa={};m&2&&(qa.$$scope={dirty:m,ctx:o}),oo.$set(qa);const Kn={};m&2&&(Kn.$$scope={dirty:m,ctx:o}),so.$set(Kn);const Ca={};m&2&&(Ca.$$scope={dirty:m,ctx:o}),ao.$set(Ca);const Dt={};m&2&&(Dt.$$scope={dirty:m,ctx:o}),io.$set(Dt);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:o}),lo.$set(Vn)},i(o){lr||(T(y.$$.fragment,o),T(A.$$.fragment,o),T(_o.$$.fragment,o),T(yo.$$.fragment,o),T(wo.$$.fragment,o),T(To.$$.fragment,o),T(xo.$$.fragment,o),T($o.$$.fragment,o),T(jo.$$.fragment,o),T(zo.$$.fragment,o),T(Eo.$$.fragment,o),T(Co.$$.fragment,o),T(Po.$$.fragment,o),T(Ao.$$.fragment,o),T(Ht.$$.fragment,o),T(Oo.$$.fragment,o),T(Uo.$$.fragment,o),T(Wo.$$.fragment,o),T(Ko.$$.fragment,o),T(Kt.$$.fragment,o),T(Vo.$$.fragment,o),T(Xo.$$.fragment,o),T(Yo.$$.fragment,o),T(on.$$.fragment,o),T(Xt.$$.fragment,o),T(nn.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(hn.$$.fragment,o),T(Zt.$$.fragment,o),T(mn.$$.fragment,o),T(fn.$$.fragment,o),T(gn.$$.fragment,o),T(Jt.$$.fragment,o),T(kn.$$.fragment,o),T(Qt.$$.fragment,o),T(Ln.$$.fragment,o),T(vn.$$.fragment,o),T(wn.$$.fragment,o),T(to.$$.fragment,o),T(jn.$$.fragment,o),T(oo.$$.fragment,o),T(Fn.$$.fragment,o),T(zn.$$.fragment,o),T(En.$$.fragment,o),T(so.$$.fragment,o),T(Nn.$$.fragment,o),T(ao.$$.fragment,o),T(Sn.$$.fragment,o),T(In.$$.fragment,o),T(Dn.$$.fragment,o),T(io.$$.fragment,o),T(Wn.$$.fragment,o),T(lo.$$.fragment,o),T(Bn.$$.fragment,o),lr=!0)},o(o){M(y.$$.fragment,o),M(A.$$.fragment,o),M(_o.$$.fragment,o),M(yo.$$.fragment,o),M(wo.$$.fragment,o),M(To.$$.fragment,o),M(xo.$$.fragment,o),M($o.$$.fragment,o),M(jo.$$.fragment,o),M(zo.$$.fragment,o),M(Eo.$$.fragment,o),M(Co.$$.fragment,o),M(Po.$$.fragment,o),M(Ao.$$.fragment,o),M(Ht.$$.fragment,o),M(Oo.$$.fragment,o),M(Uo.$$.fragment,o),M(Wo.$$.fragment,o),M(Ko.$$.fragment,o),M(Kt.$$.fragment,o),M(Vo.$$.fragment,o),M(Xo.$$.fragment,o),M(Yo.$$.fragment,o),M(on.$$.fragment,o),M(Xt.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(an.$$.fragment,o),M(hn.$$.fragment,o),M(Zt.$$.fragment,o),M(mn.$$.fragment,o),M(fn.$$.fragment,o),M(gn.$$.fragment,o),M(Jt.$$.fragment,o),M(kn.$$.fragment,o),M(Qt.$$.fragment,o),M(Ln.$$.fragment,o),M(vn.$$.fragment,o),M(wn.$$.fragment,o),M(to.$$.fragment,o),M(jn.$$.fragment,o),M(oo.$$.fragment,o),M(Fn.$$.fragment,o),M(zn.$$.fragment,o),M(En.$$.fragment,o),M(so.$$.fragment,o),M(Nn.$$.fragment,o),M(ao.$$.fragment,o),M(Sn.$$.fragment,o),M(In.$$.fragment,o),M(Dn.$$.fragment,o),M(io.$$.fragment,o),M(Wn.$$.fragment,o),M(lo.$$.fragment,o),M(Bn.$$.fragment,o),lr=!1},d(o){t(h),o&&t($),o&&t(f),x(y),o&&t(Y),o&&t(z),o&&t(ae),o&&t(I),x(A),o&&t(D),o&&t(G),o&&t(W),o&&t(V),o&&t(k),o&&t(X),o&&t(Me),o&&t(N),o&&t(xe),o&&t(S),o&&t($e),o&&t(ye),o&&t(Na),x(_o,o),o&&t(Sa),o&&t(ot),o&&t(Ia),x(yo,o),o&&t(Da),o&&t(Xn),o&&t(Aa),o&&t(nt),o&&t(Oa),o&&t(ft),x(wo),o&&t(Ua),o&&t(qe),x(To),x(xo),o&&t(Wa),o&&t(yt),x($o),o&&t(Ba),o&&t(Be),x(jo),o&&t(Ha),o&&t(bt),x(zo),o&&t(Ra),o&&t(He),x(Eo),o&&t(Ka),o&&t(kt),x(Co),o&&t(Va),o&&t(Re),x(Po),x(Ao),x(Ht),x(Oo),o&&t(Xa),o&&t(vt),x(Uo),o&&t(Ya),o&&t(Ke),x(Wo),x(Ko),x(Kt),x(Vo),o&&t(Za),o&&t(Mt),x(Xo),o&&t(Ga),o&&t(Ce),x(Yo),x(on),x(Xt),x(nn),o&&t(Ja),o&&t($t),x(sn),o&&t(Qa),o&&t(Pe),x(an),x(hn),x(Zt),x(mn),o&&t(er),o&&t(zt),x(fn),o&&t(tr),o&&t(Le),x(gn),x(Jt),x(kn),x(Qt),x(Ln),o&&t(or),o&&t(qt),x(vn),o&&t(nr),o&&t(ve),x(wn),x(to),x(jn),x(oo),x(Fn),o&&t(sr),o&&t(Pt),x(zn),o&&t(ar),o&&t(we),x(En),x(so),x(Nn),x(ao),x(Sn),o&&t(rr),o&&t(St),x(In),o&&t(ir),o&&t(Te),x(Dn),x(io),x(Wn),x(lo),x(Bn)}}}const tm={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function om(B,h,$){let{fw:f}=h;return B.$$set=g=>{"fw"in g&&$(0,f=g.fw)},[f]}class dm extends Dh{constructor(h){super();Ah(this,h,om,em,Oh,{fw:0})}}export{dm as default,tm as metadata};
