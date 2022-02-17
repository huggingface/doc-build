import{S as Hh,i as Rh,s as Kh,e as a,k as l,w as L,t as n,L as Vh,c as r,d as t,m as d,a as i,x as v,h as s,b as c,J as e,g as u,y as w,q as T,o as M,B as x}from"../../../chunks/vendor-b1433968.js";import{T as Qe}from"../../../chunks/Tip-c3840994.js";import{D as _e}from"../../../chunks/Docstring-ff504c58.js";import{C as tt}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as Ve}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Xh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Yh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Zh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Gh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Jh(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Qh(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function em(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function tm(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function om(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function nm(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function sm(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var je=i(b);y=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var $e=i(W);V=s($e,"input_ids"),$e.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),S.forEach(t)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function am(B){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function rm(B){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe,p,k,X,je,Me,N,be,Fe,xe,S,K,$e,ye,C,ze,ke,ge,Ee,Kn,Hr,Rr,zs,Kr,Vr,go,Xr,Yr,_o,Zr,Gr,Da,yo,Aa,ot,Jr,Es,Qr,ei,qs,ti,oi,Oa,bo,Ua,Vn,et,ni,Xn,si,ai,ko,ri,ii,Lo,li,di,Wa,nt,ci,vo,pi,ui,wo,hi,mi,Ba,ft,Dt,Cs,To,fi,Ps,gi,Ha,qe,Mo,_i,gt,yi,Yn,bi,ki,xo,Li,vi,wi,_t,Ti,Zn,Mi,xi,Gn,$i,ji,Fi,Ns,zi,Ei,$o,Ra,yt,At,Ss,jo,qi,Is,Ci,Ka,Be,Fo,Pi,Ds,Ni,Si,Ot,Jn,Ii,Di,Qn,Ai,Oi,Ui,zo,Wi,es,Bi,Hi,Va,bt,Ut,As,Eo,Ri,Os,Ki,Xa,He,qo,Vi,Us,Xi,Yi,Wt,ts,Zi,Gi,os,Ji,Qi,el,Co,tl,ns,ol,nl,Ya,kt,Bt,Ws,Po,sl,Bs,al,Za,Re,No,rl,So,il,Io,ll,dl,cl,Do,pl,Ao,ul,hl,ml,Ne,Oo,fl,Lt,gl,ss,_l,yl,Hs,bl,kl,Ll,Ht,vl,Rs,wl,Tl,Uo,Ga,vt,Rt,Ks,Wo,Ml,Vs,xl,Ja,Ke,Bo,$l,wt,jl,Xs,Fl,zl,Ho,El,ql,Cl,Ro,Pl,Ko,Nl,Sl,Il,Se,Vo,Dl,Tt,Al,as,Ol,Ul,Ys,Wl,Bl,Hl,Kt,Rl,Zs,Kl,Vl,Xo,Qa,Mt,Vt,Gs,Yo,Xl,Js,Yl,er,Ce,Zo,Zl,Go,Gl,Qs,Jl,Ql,ed,Jo,td,Qo,od,nd,sd,en,ad,tn,rd,id,ld,Ie,on,dd,xt,cd,rs,pd,ud,ea,hd,md,fd,Xt,gd,ta,_d,yd,nn,tr,$t,Yt,oa,sn,bd,na,kd,or,Pe,an,Ld,Zt,vd,sa,wd,is,Td,aa,Md,xd,$d,rn,jd,ln,Fd,zd,Ed,dn,qd,cn,Cd,Pd,Nd,De,pn,Sd,jt,Id,ls,Dd,Ad,ra,Od,Ud,Wd,Gt,Bd,ia,Hd,Rd,un,nr,Ft,Jt,la,hn,Kd,da,Vd,sr,Le,mn,Xd,ca,Yd,Zd,fn,Gd,ds,Jd,Qd,ec,gn,tc,_n,oc,nc,sc,Qt,ac,Ae,yn,rc,zt,ic,cs,lc,dc,pa,cc,pc,uc,eo,hc,ua,mc,fc,bn,ar,Et,to,ha,kn,gc,ma,_c,rr,ve,Ln,yc,vn,bc,fa,kc,Lc,vc,wn,wc,ps,Tc,Mc,xc,Tn,$c,Mn,jc,Fc,zc,oo,Ec,Oe,xn,qc,qt,Cc,us,Pc,Nc,ga,Sc,Ic,Dc,no,Ac,_a,Oc,Uc,$n,ir,Ct,so,ya,jn,Wc,ba,Bc,lr,we,Fn,Hc,ka,Rc,Kc,zn,Vc,hs,Xc,Yc,Zc,En,Gc,qn,Jc,Qc,ep,ao,tp,Ue,Cn,op,Pt,np,ms,sp,ap,La,rp,ip,lp,ro,dp,va,cp,pp,Pn,dr,Nt,io,wa,Nn,up,Ta,hp,cr,Te,Sn,mp,Ma,fp,gp,In,_p,fs,yp,bp,kp,Dn,Lp,An,vp,wp,Tp,lo,Mp,We,On,xp,St,$p,gs,jp,Fp,xa,zp,Ep,qp,co,Cp,$a,Pp,Np,Un,pr;return y=new Ve({}),A=new Ve({}),yo=new tt({props:{code:`def normalize_bbox(bbox, width, height):
     return [
         int(1000 * (bbox[0] / width)),
         int(1000 * (bbox[1] / height)),
         int(1000 * (bbox[2] / width)),
         int(1000 * (bbox[3] / height)),
     ],`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
     <span class="hljs-keyword">return</span> [
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
         <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
     ]`}}),bo=new tt({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size,`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),To=new Ve({}),Mo=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/configuration_layoutlm.py#L35",parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}]}}),$o=new tt({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),jo=new Ve({}),Fo=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/tokenization_layoutlm.py#L46"}}),Eo=new Ve({}),qo=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L51"}}),Po=new Ve({}),No=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L704",parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Oo=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L730",parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new Qe({props:{$$slots:{default:[Xh]},$$scope:{ctx:B}}}),Uo=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Wo=new Ve({}),Bo=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L850",parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Vo=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L869",parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Qe({props:{$$slots:{default:[Yh]},$$scope:{ctx:B}}}),Xo=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),Yo=new Ve({}),Zo=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L973",parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),on=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L987",parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new Qe({props:{$$slots:{default:[Zh]},$$scope:{ctx:B}}}),nn=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),sn=new Ve({}),an=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L1104",parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),pn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_layoutlm.py#L1118",parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1,
y1) format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and
(x1, y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a
plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new Qe({props:{$$slots:{default:[Gh]},$$scope:{ctx:B}}}),un=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),hn=new Ve({}),mn=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L920",parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Qt=new Qe({props:{$$slots:{default:[Jh]},$$scope:{ctx:B}}}),yn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L926",parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),eo=new Qe({props:{$$slots:{default:[Qh]},$$scope:{ctx:B}}}),bn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new Ve({}),Ln=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1036",parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),oo=new Qe({props:{$$slots:{default:[em]},$$scope:{ctx:B}}}),xn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1064",parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),no=new Qe({props:{$$slots:{default:[tm]},$$scope:{ctx:B}}}),$n=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),jn=new Ve({}),Fn=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1182",parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),ao=new Qe({props:{$$slots:{default:[om]},$$scope:{ctx:B}}}),Cn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1200",parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new Qe({props:{$$slots:{default:[nm]},$$scope:{ctx:B}}}),Pn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Nn=new Ve({}),Sn=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1317",parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),lo=new Qe({props:{$$slots:{default:[sm]},$$scope:{ctx:B}}}),On=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1341",parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new Qe({props:{$$slots:{default:[am]},$$scope:{ctx:B}}}),Un=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForTokenClassification
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
(from 93.07 to 94.42).`),xe=l(),S=a("p"),K=n("Tips:"),$e=l(),ye=a("ul"),C=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),Kn=a("a"),Hr=n("forward()"),Rr=n(" also expects the input "),zs=a("code"),Kr=n("bbox"),Vr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),go=a("a"),Xr=n("Tesseract"),Yr=n(" (there\u2019s a "),_o=a("a"),Zr=n("Python wrapper"),Gr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Da=l(),L(yo.$$.fragment),Aa=l(),ot=a("p"),Jr=n("Here, "),Es=a("code"),Qr=n("width"),ei=n(" and "),qs=a("code"),ti=n("height"),oi=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Oa=l(),L(bo.$$.fragment),Ua=l(),Vn=a("ul"),et=a("li"),ni=n("For a demo which shows how to fine-tune "),Xn=a("a"),si=n("LayoutLMForTokenClassification"),ai=n(" on the "),ko=a("a"),ri=n("FUNSD dataset"),ii=n(" (a collection of annotated forms), see "),Lo=a("a"),li=n("this notebook"),di=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Wa=l(),nt=a("p"),ci=n("This model was contributed by "),vo=a("a"),pi=n("liminghao1630"),ui=n(`. The original code can be found
`),wo=a("a"),hi=n("here"),mi=n("."),Ba=l(),ft=a("h2"),Dt=a("a"),Cs=a("span"),L(To.$$.fragment),fi=l(),Ps=a("span"),gi=n("LayoutLMConfig"),Ha=l(),qe=a("div"),L(Mo.$$.fragment),_i=l(),gt=a("p"),yi=n("This is the configuration class to store the configuration of a "),Yn=a("a"),bi=n("LayoutLMModel"),ki=n(`. It is used to
instantiate a LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLM `),xo=a("a"),Li=n("layoutlm-base-uncased"),vi=n(" architecture."),wi=l(),_t=a("p"),Ti=n("Configuration objects inherit from "),Zn=a("a"),Mi=n("BertConfig"),xi=n(` and can be used to control the model outputs.
Read the documentation from `),Gn=a("a"),$i=n("BertConfig"),ji=n(" for more information."),Fi=l(),Ns=a("p"),zi=n("Examples:"),Ei=l(),L($o.$$.fragment),Ra=l(),yt=a("h2"),At=a("a"),Ss=a("span"),L(jo.$$.fragment),qi=l(),Is=a("span"),Ci=n("LayoutLMTokenizer"),Ka=l(),Be=a("div"),L(Fo.$$.fragment),Pi=l(),Ds=a("p"),Ni=n("Constructs a LayoutLM tokenizer."),Si=l(),Ot=a("p"),Jn=a("a"),Ii=n("LayoutLMTokenizer"),Di=n(" is identical to "),Qn=a("a"),Ai=n("BertTokenizer"),Oi=n(` and runs end-to-end
tokenization: punctuation splitting + wordpiece.`),Ui=l(),zo=a("p"),Wi=n("Refer to superclass "),es=a("a"),Bi=n("BertTokenizer"),Hi=n(` for usage examples and documentation concerning
parameters.`),Va=l(),bt=a("h2"),Ut=a("a"),As=a("span"),L(Eo.$$.fragment),Ri=l(),Os=a("span"),Ki=n("LayoutLMTokenizerFast"),Xa=l(),He=a("div"),L(qo.$$.fragment),Vi=l(),Us=a("p"),Xi=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Yi=l(),Wt=a("p"),ts=a("a"),Zi=n("LayoutLMTokenizerFast"),Gi=n(" is identical to "),os=a("a"),Ji=n("BertTokenizerFast"),Qi=n(` and runs
end-to-end tokenization: punctuation splitting + wordpiece.`),el=l(),Co=a("p"),tl=n("Refer to superclass "),ns=a("a"),ol=n("BertTokenizerFast"),nl=n(` for usage examples and documentation concerning
parameters.`),Ya=l(),kt=a("h2"),Bt=a("a"),Ws=a("span"),L(Po.$$.fragment),sl=l(),Bs=a("span"),al=n("LayoutLMModel"),Za=l(),Re=a("div"),L(No.$$.fragment),rl=l(),So=a("p"),il=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Io=a("a"),ll=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),dl=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),cl=l(),Do=a("p"),pl=n("This model is a PyTorch "),Ao=a("a"),ul=n("torch.nn.Module"),hl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ml=l(),Ne=a("div"),L(Oo.$$.fragment),fl=l(),Lt=a("p"),gl=n("The "),ss=a("a"),_l=n("LayoutLMModel"),yl=n(" forward method, overrides the "),Hs=a("code"),bl=n("__call__"),kl=n(" special method."),Ll=l(),L(Ht.$$.fragment),vl=l(),Rs=a("p"),wl=n("Examples:"),Tl=l(),L(Uo.$$.fragment),Ga=l(),vt=a("h2"),Rt=a("a"),Ks=a("span"),L(Wo.$$.fragment),Ml=l(),Vs=a("span"),xl=n("LayoutLMForMaskedLM"),Ja=l(),Ke=a("div"),L(Bo.$$.fragment),$l=l(),wt=a("p"),jl=n("LayoutLM Model with a "),Xs=a("code"),Fl=n("language modeling"),zl=n(` head on top.
The LayoutLM model was proposed in `),Ho=a("a"),El=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),ql=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),Cl=l(),Ro=a("p"),Pl=n("This model is a PyTorch "),Ko=a("a"),Nl=n("torch.nn.Module"),Sl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Il=l(),Se=a("div"),L(Vo.$$.fragment),Dl=l(),Tt=a("p"),Al=n("The "),as=a("a"),Ol=n("LayoutLMForMaskedLM"),Ul=n(" forward method, overrides the "),Ys=a("code"),Wl=n("__call__"),Bl=n(" special method."),Hl=l(),L(Kt.$$.fragment),Rl=l(),Zs=a("p"),Kl=n("Examples:"),Vl=l(),L(Xo.$$.fragment),Qa=l(),Mt=a("h2"),Vt=a("a"),Gs=a("span"),L(Yo.$$.fragment),Xl=l(),Js=a("span"),Yl=n("LayoutLMForSequenceClassification"),er=l(),Ce=a("div"),L(Zo.$$.fragment),Zl=l(),Go=a("p"),Gl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Qs=a("code"),Jl=n("RVL-CDIP <https://www.cs.cmu.edu/~aharley/rvl-cdip/>"),Ql=n("__ dataset."),ed=l(),Jo=a("p"),td=n("The LayoutLM model was proposed in "),Qo=a("a"),od=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),nd=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),sd=l(),en=a("p"),ad=n("This model is a PyTorch "),tn=a("a"),rd=n("torch.nn.Module"),id=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ld=l(),Ie=a("div"),L(on.$$.fragment),dd=l(),xt=a("p"),cd=n("The "),rs=a("a"),pd=n("LayoutLMForSequenceClassification"),ud=n(" forward method, overrides the "),ea=a("code"),hd=n("__call__"),md=n(" special method."),fd=l(),L(Xt.$$.fragment),gd=l(),ta=a("p"),_d=n("Examples:"),yd=l(),L(nn.$$.fragment),tr=l(),$t=a("h2"),Yt=a("a"),oa=a("span"),L(sn.$$.fragment),bd=l(),na=a("span"),kd=n("LayoutLMForTokenClassification"),or=l(),Pe=a("div"),L(an.$$.fragment),Ld=l(),Zt=a("p"),vd=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),sa=a("code"),wd=n("FUNSD <https://guillaumejaume.github.io/FUNSD/>"),is=a("strong"),Td=n("dataset and the "),aa=a("code"),Md=n("SROIE <https://rrc.cvc.uab.es/?ch=13>"),xd=n(" dataset."),$d=l(),rn=a("p"),jd=n("The LayoutLM model was proposed in "),ln=a("a"),Fd=n("LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),zd=n(" by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),Ed=l(),dn=a("p"),qd=n("This model is a PyTorch "),cn=a("a"),Cd=n("torch.nn.Module"),Pd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nd=l(),De=a("div"),L(pn.$$.fragment),Sd=l(),jt=a("p"),Id=n("The "),ls=a("a"),Dd=n("LayoutLMForTokenClassification"),Ad=n(" forward method, overrides the "),ra=a("code"),Od=n("__call__"),Ud=n(" special method."),Wd=l(),L(Gt.$$.fragment),Bd=l(),ia=a("p"),Hd=n("Examples:"),Rd=l(),L(un.$$.fragment),nr=l(),Ft=a("h2"),Jt=a("a"),la=a("span"),L(hn.$$.fragment),Kd=l(),da=a("span"),Vd=n("TFLayoutLMModel"),sr=l(),Le=a("div"),L(mn.$$.fragment),Xd=l(),ca=a("p"),Yd=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Zd=l(),fn=a("p"),Gd=n("This model inherits from "),ds=a("a"),Jd=n("TFPreTrainedModel"),Qd=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ec=l(),gn=a("p"),tc=n("This model is also a "),_n=a("a"),oc=n("tf.keras.Model"),nc=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),sc=l(),L(Qt.$$.fragment),ac=l(),Ae=a("div"),L(yn.$$.fragment),rc=l(),zt=a("p"),ic=n("The "),cs=a("a"),lc=n("TFLayoutLMModel"),dc=n(" forward method, overrides the "),pa=a("code"),cc=n("__call__"),pc=n(" special method."),uc=l(),L(eo.$$.fragment),hc=l(),ua=a("p"),mc=n("Examples:"),fc=l(),L(bn.$$.fragment),ar=l(),Et=a("h2"),to=a("a"),ha=a("span"),L(kn.$$.fragment),gc=l(),ma=a("span"),_c=n("TFLayoutLMForMaskedLM"),rr=l(),ve=a("div"),L(Ln.$$.fragment),yc=l(),vn=a("p"),bc=n("LayoutLM Model with a "),fa=a("code"),kc=n("language modeling"),Lc=n(" head on top."),vc=l(),wn=a("p"),wc=n("This model inherits from "),ps=a("a"),Tc=n("TFPreTrainedModel"),Mc=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),xc=l(),Tn=a("p"),$c=n("This model is also a "),Mn=a("a"),jc=n("tf.keras.Model"),Fc=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),zc=l(),L(oo.$$.fragment),Ec=l(),Oe=a("div"),L(xn.$$.fragment),qc=l(),qt=a("p"),Cc=n("The "),us=a("a"),Pc=n("TFLayoutLMForMaskedLM"),Nc=n(" forward method, overrides the "),ga=a("code"),Sc=n("__call__"),Ic=n(" special method."),Dc=l(),L(no.$$.fragment),Ac=l(),_a=a("p"),Oc=n("Examples:"),Uc=l(),L($n.$$.fragment),ir=l(),Ct=a("h2"),so=a("a"),ya=a("span"),L(jn.$$.fragment),Wc=l(),ba=a("span"),Bc=n("TFLayoutLMForSequenceClassification"),lr=l(),we=a("div"),L(Fn.$$.fragment),Hc=l(),ka=a("p"),Rc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Kc=l(),zn=a("p"),Vc=n("This model inherits from "),hs=a("a"),Xc=n("TFPreTrainedModel"),Yc=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Zc=l(),En=a("p"),Gc=n("This model is also a "),qn=a("a"),Jc=n("tf.keras.Model"),Qc=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ep=l(),L(ao.$$.fragment),tp=l(),Ue=a("div"),L(Cn.$$.fragment),op=l(),Pt=a("p"),np=n("The "),ms=a("a"),sp=n("TFLayoutLMForSequenceClassification"),ap=n(" forward method, overrides the "),La=a("code"),rp=n("__call__"),ip=n(" special method."),lp=l(),L(ro.$$.fragment),dp=l(),va=a("p"),cp=n("Examples:"),pp=l(),L(Pn.$$.fragment),dr=l(),Nt=a("h2"),io=a("a"),wa=a("span"),L(Nn.$$.fragment),up=l(),Ta=a("span"),hp=n("TFLayoutLMForTokenClassification"),cr=l(),Te=a("div"),L(Sn.$$.fragment),mp=l(),Ma=a("p"),fp=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gp=l(),In=a("p"),_p=n("This model inherits from "),fs=a("a"),yp=n("TFPreTrainedModel"),bp=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),kp=l(),Dn=a("p"),Lp=n("This model is also a "),An=a("a"),vp=n("tf.keras.Model"),wp=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Tp=l(),L(lo.$$.fragment),Mp=l(),We=a("div"),L(On.$$.fragment),xp=l(),St=a("p"),$p=n("The "),gs=a("a"),jp=n("TFLayoutLMForTokenClassification"),Fp=n(" forward method, overrides the "),xa=a("code"),zp=n("__call__"),Ep=n(" special method."),qp=l(),L(co.$$.fragment),Cp=l(),$a=a("p"),Pp=n("Examples:"),Np=l(),L(Un.$$.fragment),this.h()},l(o){const m=Vh('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),$=d(o),f=r(o,"H1",{class:!0});var Wn=i(f);g=r(Wn,"A",{id:!0,class:!0,href:!0});var ja=i(g);b=r(ja,"SPAN",{});var Fa=i(b);v(y.$$.fragment,Fa),Fa.forEach(t),ja.forEach(t),_=d(Wn),j=r(Wn,"SPAN",{});var za=i(j);re=s(za,"LayoutLM"),za.forEach(t),Wn.forEach(t),Y=d(o),z=r(o,"A",{id:!0}),i(z).forEach(t),ae=d(o),I=r(o,"H2",{class:!0});var Bn=i(I);Z=r(Bn,"A",{id:!0,class:!0,href:!0});var Ea=i(Z);ne=r(Ea,"SPAN",{});var qa=i(ne);v(A.$$.fragment,qa),qa.forEach(t),Ea.forEach(t),ie=d(Bn),se=r(Bn,"SPAN",{});var Ca=i(se);J=s(Ca,"Overview"),Ca.forEach(t),Bn.forEach(t),D=d(o),G=r(o,"P",{});var Hn=i(G);Q=s(Hn,"The LayoutLM model was proposed in the paper "),F=r(Hn,"A",{href:!0,rel:!0});var Pa=i(F);E=s(Pa,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Pa.forEach(t),le=s(Hn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Hn.forEach(t),W=d(o),V=r(o,"UL",{});var It=i(V);ee=r(It,"LI",{});var Rn=i(ee);H=s(Rn,"form understanding: the "),te=r(Rn,"A",{href:!0,rel:!0});var Ip=i(te);de=s(Ip,"FUNSD"),Ip.forEach(t),q=s(Rn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Rn.forEach(t),ce=d(It),O=r(It,"LI",{});var ur=i(O);pe=s(ur,"receipt understanding: the "),oe=r(ur,"A",{href:!0,rel:!0});var Dp=i(oe);R=s(Dp,"SROIE"),Dp.forEach(t),ue=s(ur,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),ur.forEach(t),he=d(It),P=r(It,"LI",{});var hr=i(P);me=s(hr,"document image classification: the "),U=r(hr,"A",{href:!0,rel:!0});var Ap=i(U);fe=s(Ap,"RVL-CDIP"),Ap.forEach(t),p=s(hr,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),hr.forEach(t),It.forEach(t),k=d(o),X=r(o,"P",{});var Op=i(X);je=s(Op,"The abstract from the paper is the following:"),Op.forEach(t),Me=d(o),N=r(o,"P",{});var Up=i(N);be=r(Up,"EM",{});var Wp=i(be);Fe=s(Wp,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Wp.forEach(t),Up.forEach(t),xe=d(o),S=r(o,"P",{});var Bp=i(S);K=s(Bp,"Tips:"),Bp.forEach(t),$e=d(o),ye=r(o,"UL",{});var Hp=i(ye);C=r(Hp,"LI",{});var Xe=i(C);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var Rp=i(ke);ge=s(Rp,"input_ids"),Rp.forEach(t),Ee=s(Xe,", "),Kn=r(Xe,"A",{href:!0});var Kp=i(Kn);Hr=s(Kp,"forward()"),Kp.forEach(t),Rr=s(Xe," also expects the input "),zs=r(Xe,"CODE",{});var Vp=i(zs);Kr=s(Vp,"bbox"),Vp.forEach(t),Vr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),go=r(Xe,"A",{href:!0,rel:!0});var Xp=i(go);Xr=s(Xp,"Tesseract"),Xp.forEach(t),Yr=s(Xe," (there\u2019s a "),_o=r(Xe,"A",{href:!0,rel:!0});var Yp=i(_o);Zr=s(Yp,"Python wrapper"),Yp.forEach(t),Gr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(t),Hp.forEach(t),Da=d(o),v(yo.$$.fragment,o),Aa=d(o),ot=r(o,"P",{});var _s=i(ot);Jr=s(_s,"Here, "),Es=r(_s,"CODE",{});var Zp=i(Es);Qr=s(Zp,"width"),Zp.forEach(t),ei=s(_s," and "),qs=r(_s,"CODE",{});var Gp=i(qs);ti=s(Gp,"height"),Gp.forEach(t),oi=s(_s,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),_s.forEach(t),Oa=d(o),v(bo.$$.fragment,o),Ua=d(o),Vn=r(o,"UL",{});var Jp=i(Vn);et=r(Jp,"LI",{});var po=i(et);ni=s(po,"For a demo which shows how to fine-tune "),Xn=r(po,"A",{href:!0});var Qp=i(Xn);si=s(Qp,"LayoutLMForTokenClassification"),Qp.forEach(t),ai=s(po," on the "),ko=r(po,"A",{href:!0,rel:!0});var eu=i(ko);ri=s(eu,"FUNSD dataset"),eu.forEach(t),ii=s(po," (a collection of annotated forms), see "),Lo=r(po,"A",{href:!0,rel:!0});var tu=i(Lo);li=s(tu,"this notebook"),tu.forEach(t),di=s(po,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),po.forEach(t),Jp.forEach(t),Wa=d(o),nt=r(o,"P",{});var ys=i(nt);ci=s(ys,"This model was contributed by "),vo=r(ys,"A",{href:!0,rel:!0});var ou=i(vo);pi=s(ou,"liminghao1630"),ou.forEach(t),ui=s(ys,`. The original code can be found
`),wo=r(ys,"A",{href:!0,rel:!0});var nu=i(wo);hi=s(nu,"here"),nu.forEach(t),mi=s(ys,"."),ys.forEach(t),Ba=d(o),ft=r(o,"H2",{class:!0});var mr=i(ft);Dt=r(mr,"A",{id:!0,class:!0,href:!0});var su=i(Dt);Cs=r(su,"SPAN",{});var au=i(Cs);v(To.$$.fragment,au),au.forEach(t),su.forEach(t),fi=d(mr),Ps=r(mr,"SPAN",{});var ru=i(Ps);gi=s(ru,"LayoutLMConfig"),ru.forEach(t),mr.forEach(t),Ha=d(o),qe=r(o,"DIV",{class:!0});var st=i(qe);v(Mo.$$.fragment,st),_i=d(st),gt=r(st,"P",{});var bs=i(gt);yi=s(bs,"This is the configuration class to store the configuration of a "),Yn=r(bs,"A",{href:!0});var iu=i(Yn);bi=s(iu,"LayoutLMModel"),iu.forEach(t),ki=s(bs,`. It is used to
instantiate a LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLM `),xo=r(bs,"A",{href:!0,rel:!0});var lu=i(xo);Li=s(lu,"layoutlm-base-uncased"),lu.forEach(t),vi=s(bs," architecture."),bs.forEach(t),wi=d(st),_t=r(st,"P",{});var ks=i(_t);Ti=s(ks,"Configuration objects inherit from "),Zn=r(ks,"A",{href:!0});var du=i(Zn);Mi=s(du,"BertConfig"),du.forEach(t),xi=s(ks,` and can be used to control the model outputs.
Read the documentation from `),Gn=r(ks,"A",{href:!0});var cu=i(Gn);$i=s(cu,"BertConfig"),cu.forEach(t),ji=s(ks," for more information."),ks.forEach(t),Fi=d(st),Ns=r(st,"P",{});var pu=i(Ns);zi=s(pu,"Examples:"),pu.forEach(t),Ei=d(st),v($o.$$.fragment,st),st.forEach(t),Ra=d(o),yt=r(o,"H2",{class:!0});var fr=i(yt);At=r(fr,"A",{id:!0,class:!0,href:!0});var uu=i(At);Ss=r(uu,"SPAN",{});var hu=i(Ss);v(jo.$$.fragment,hu),hu.forEach(t),uu.forEach(t),qi=d(fr),Is=r(fr,"SPAN",{});var mu=i(Is);Ci=s(mu,"LayoutLMTokenizer"),mu.forEach(t),fr.forEach(t),Ka=d(o),Be=r(o,"DIV",{class:!0});var uo=i(Be);v(Fo.$$.fragment,uo),Pi=d(uo),Ds=r(uo,"P",{});var fu=i(Ds);Ni=s(fu,"Constructs a LayoutLM tokenizer."),fu.forEach(t),Si=d(uo),Ot=r(uo,"P",{});var Na=i(Ot);Jn=r(Na,"A",{href:!0});var gu=i(Jn);Ii=s(gu,"LayoutLMTokenizer"),gu.forEach(t),Di=s(Na," is identical to "),Qn=r(Na,"A",{href:!0});var _u=i(Qn);Ai=s(_u,"BertTokenizer"),_u.forEach(t),Oi=s(Na,` and runs end-to-end
tokenization: punctuation splitting + wordpiece.`),Na.forEach(t),Ui=d(uo),zo=r(uo,"P",{});var gr=i(zo);Wi=s(gr,"Refer to superclass "),es=r(gr,"A",{href:!0});var yu=i(es);Bi=s(yu,"BertTokenizer"),yu.forEach(t),Hi=s(gr,` for usage examples and documentation concerning
parameters.`),gr.forEach(t),uo.forEach(t),Va=d(o),bt=r(o,"H2",{class:!0});var _r=i(bt);Ut=r(_r,"A",{id:!0,class:!0,href:!0});var bu=i(Ut);As=r(bu,"SPAN",{});var ku=i(As);v(Eo.$$.fragment,ku),ku.forEach(t),bu.forEach(t),Ri=d(_r),Os=r(_r,"SPAN",{});var Lu=i(Os);Ki=s(Lu,"LayoutLMTokenizerFast"),Lu.forEach(t),_r.forEach(t),Xa=d(o),He=r(o,"DIV",{class:!0});var ho=i(He);v(qo.$$.fragment,ho),Vi=d(ho),Us=r(ho,"P",{});var vu=i(Us);Xi=s(vu,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),vu.forEach(t),Yi=d(ho),Wt=r(ho,"P",{});var Sa=i(Wt);ts=r(Sa,"A",{href:!0});var wu=i(ts);Zi=s(wu,"LayoutLMTokenizerFast"),wu.forEach(t),Gi=s(Sa," is identical to "),os=r(Sa,"A",{href:!0});var Tu=i(os);Ji=s(Tu,"BertTokenizerFast"),Tu.forEach(t),Qi=s(Sa,` and runs
end-to-end tokenization: punctuation splitting + wordpiece.`),Sa.forEach(t),el=d(ho),Co=r(ho,"P",{});var yr=i(Co);tl=s(yr,"Refer to superclass "),ns=r(yr,"A",{href:!0});var Mu=i(ns);ol=s(Mu,"BertTokenizerFast"),Mu.forEach(t),nl=s(yr,` for usage examples and documentation concerning
parameters.`),yr.forEach(t),ho.forEach(t),Ya=d(o),kt=r(o,"H2",{class:!0});var br=i(kt);Bt=r(br,"A",{id:!0,class:!0,href:!0});var xu=i(Bt);Ws=r(xu,"SPAN",{});var $u=i(Ws);v(Po.$$.fragment,$u),$u.forEach(t),xu.forEach(t),sl=d(br),Bs=r(br,"SPAN",{});var ju=i(Bs);al=s(ju,"LayoutLMModel"),ju.forEach(t),br.forEach(t),Za=d(o),Re=r(o,"DIV",{class:!0});var mo=i(Re);v(No.$$.fragment,mo),rl=d(mo),So=r(mo,"P",{});var kr=i(So);il=s(kr,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Io=r(kr,"A",{href:!0,rel:!0});var Fu=i(Io);ll=s(Fu,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Fu.forEach(t),dl=s(kr," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),kr.forEach(t),cl=d(mo),Do=r(mo,"P",{});var Lr=i(Do);pl=s(Lr,"This model is a PyTorch "),Ao=r(Lr,"A",{href:!0,rel:!0});var zu=i(Ao);ul=s(zu,"torch.nn.Module"),zu.forEach(t),hl=s(Lr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lr.forEach(t),ml=d(mo),Ne=r(mo,"DIV",{class:!0});var at=i(Ne);v(Oo.$$.fragment,at),fl=d(at),Lt=r(at,"P",{});var Ls=i(Lt);gl=s(Ls,"The "),ss=r(Ls,"A",{href:!0});var Eu=i(ss);_l=s(Eu,"LayoutLMModel"),Eu.forEach(t),yl=s(Ls," forward method, overrides the "),Hs=r(Ls,"CODE",{});var qu=i(Hs);bl=s(qu,"__call__"),qu.forEach(t),kl=s(Ls," special method."),Ls.forEach(t),Ll=d(at),v(Ht.$$.fragment,at),vl=d(at),Rs=r(at,"P",{});var Cu=i(Rs);wl=s(Cu,"Examples:"),Cu.forEach(t),Tl=d(at),v(Uo.$$.fragment,at),at.forEach(t),mo.forEach(t),Ga=d(o),vt=r(o,"H2",{class:!0});var vr=i(vt);Rt=r(vr,"A",{id:!0,class:!0,href:!0});var Pu=i(Rt);Ks=r(Pu,"SPAN",{});var Nu=i(Ks);v(Wo.$$.fragment,Nu),Nu.forEach(t),Pu.forEach(t),Ml=d(vr),Vs=r(vr,"SPAN",{});var Su=i(Vs);xl=s(Su,"LayoutLMForMaskedLM"),Su.forEach(t),vr.forEach(t),Ja=d(o),Ke=r(o,"DIV",{class:!0});var fo=i(Ke);v(Bo.$$.fragment,fo),$l=d(fo),wt=r(fo,"P",{});var vs=i(wt);jl=s(vs,"LayoutLM Model with a "),Xs=r(vs,"CODE",{});var Iu=i(Xs);Fl=s(Iu,"language modeling"),Iu.forEach(t),zl=s(vs,` head on top.
The LayoutLM model was proposed in `),Ho=r(vs,"A",{href:!0,rel:!0});var Du=i(Ho);El=s(Du,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Du.forEach(t),ql=s(vs," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),vs.forEach(t),Cl=d(fo),Ro=r(fo,"P",{});var wr=i(Ro);Pl=s(wr,"This model is a PyTorch "),Ko=r(wr,"A",{href:!0,rel:!0});var Au=i(Ko);Nl=s(Au,"torch.nn.Module"),Au.forEach(t),Sl=s(wr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wr.forEach(t),Il=d(fo),Se=r(fo,"DIV",{class:!0});var rt=i(Se);v(Vo.$$.fragment,rt),Dl=d(rt),Tt=r(rt,"P",{});var ws=i(Tt);Al=s(ws,"The "),as=r(ws,"A",{href:!0});var Ou=i(as);Ol=s(Ou,"LayoutLMForMaskedLM"),Ou.forEach(t),Ul=s(ws," forward method, overrides the "),Ys=r(ws,"CODE",{});var Uu=i(Ys);Wl=s(Uu,"__call__"),Uu.forEach(t),Bl=s(ws," special method."),ws.forEach(t),Hl=d(rt),v(Kt.$$.fragment,rt),Rl=d(rt),Zs=r(rt,"P",{});var Wu=i(Zs);Kl=s(Wu,"Examples:"),Wu.forEach(t),Vl=d(rt),v(Xo.$$.fragment,rt),rt.forEach(t),fo.forEach(t),Qa=d(o),Mt=r(o,"H2",{class:!0});var Tr=i(Mt);Vt=r(Tr,"A",{id:!0,class:!0,href:!0});var Bu=i(Vt);Gs=r(Bu,"SPAN",{});var Hu=i(Gs);v(Yo.$$.fragment,Hu),Hu.forEach(t),Bu.forEach(t),Xl=d(Tr),Js=r(Tr,"SPAN",{});var Ru=i(Js);Yl=s(Ru,"LayoutLMForSequenceClassification"),Ru.forEach(t),Tr.forEach(t),er=d(o),Ce=r(o,"DIV",{class:!0});var it=i(Ce);v(Zo.$$.fragment,it),Zl=d(it),Go=r(it,"P",{});var Mr=i(Go);Gl=s(Mr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Qs=r(Mr,"CODE",{});var Ku=i(Qs);Jl=s(Ku,"RVL-CDIP <https://www.cs.cmu.edu/~aharley/rvl-cdip/>"),Ku.forEach(t),Ql=s(Mr,"__ dataset."),Mr.forEach(t),ed=d(it),Jo=r(it,"P",{});var xr=i(Jo);td=s(xr,"The LayoutLM model was proposed in "),Qo=r(xr,"A",{href:!0,rel:!0});var Vu=i(Qo);od=s(Vu,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),Vu.forEach(t),nd=s(xr," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),xr.forEach(t),sd=d(it),en=r(it,"P",{});var $r=i(en);ad=s($r,"This model is a PyTorch "),tn=r($r,"A",{href:!0,rel:!0});var Xu=i(tn);rd=s(Xu,"torch.nn.Module"),Xu.forEach(t),id=s($r,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(t),ld=d(it),Ie=r(it,"DIV",{class:!0});var lt=i(Ie);v(on.$$.fragment,lt),dd=d(lt),xt=r(lt,"P",{});var Ts=i(xt);cd=s(Ts,"The "),rs=r(Ts,"A",{href:!0});var Yu=i(rs);pd=s(Yu,"LayoutLMForSequenceClassification"),Yu.forEach(t),ud=s(Ts," forward method, overrides the "),ea=r(Ts,"CODE",{});var Zu=i(ea);hd=s(Zu,"__call__"),Zu.forEach(t),md=s(Ts," special method."),Ts.forEach(t),fd=d(lt),v(Xt.$$.fragment,lt),gd=d(lt),ta=r(lt,"P",{});var Gu=i(ta);_d=s(Gu,"Examples:"),Gu.forEach(t),yd=d(lt),v(nn.$$.fragment,lt),lt.forEach(t),it.forEach(t),tr=d(o),$t=r(o,"H2",{class:!0});var jr=i($t);Yt=r(jr,"A",{id:!0,class:!0,href:!0});var Ju=i(Yt);oa=r(Ju,"SPAN",{});var Qu=i(oa);v(sn.$$.fragment,Qu),Qu.forEach(t),Ju.forEach(t),bd=d(jr),na=r(jr,"SPAN",{});var eh=i(na);kd=s(eh,"LayoutLMForTokenClassification"),eh.forEach(t),jr.forEach(t),or=d(o),Pe=r(o,"DIV",{class:!0});var dt=i(Pe);v(an.$$.fragment,dt),Ld=d(dt),Zt=r(dt,"P",{});var Ia=i(Zt);vd=s(Ia,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),sa=r(Ia,"CODE",{});var th=i(sa);wd=s(th,"FUNSD <https://guillaumejaume.github.io/FUNSD/>"),th.forEach(t),is=r(Ia,"STRONG",{});var Sp=i(is);Td=s(Sp,"dataset and the "),aa=r(Sp,"CODE",{});var oh=i(aa);Md=s(oh,"SROIE <https://rrc.cvc.uab.es/?ch=13>"),oh.forEach(t),Sp.forEach(t),xd=s(Ia," dataset."),Ia.forEach(t),$d=d(dt),rn=r(dt,"P",{});var Fr=i(rn);jd=s(Fr,"The LayoutLM model was proposed in "),ln=r(Fr,"A",{href:!0,rel:!0});var nh=i(ln);Fd=s(nh,"LayoutLM: Pre-training of Text and Layout for Document Image Understanding"),nh.forEach(t),zd=s(Fr," by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and Ming Zhou."),Fr.forEach(t),Ed=d(dt),dn=r(dt,"P",{});var zr=i(dn);qd=s(zr,"This model is a PyTorch "),cn=r(zr,"A",{href:!0,rel:!0});var sh=i(cn);Cd=s(sh,"torch.nn.Module"),sh.forEach(t),Pd=s(zr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zr.forEach(t),Nd=d(dt),De=r(dt,"DIV",{class:!0});var ct=i(De);v(pn.$$.fragment,ct),Sd=d(ct),jt=r(ct,"P",{});var Ms=i(jt);Id=s(Ms,"The "),ls=r(Ms,"A",{href:!0});var ah=i(ls);Dd=s(ah,"LayoutLMForTokenClassification"),ah.forEach(t),Ad=s(Ms," forward method, overrides the "),ra=r(Ms,"CODE",{});var rh=i(ra);Od=s(rh,"__call__"),rh.forEach(t),Ud=s(Ms," special method."),Ms.forEach(t),Wd=d(ct),v(Gt.$$.fragment,ct),Bd=d(ct),ia=r(ct,"P",{});var ih=i(ia);Hd=s(ih,"Examples:"),ih.forEach(t),Rd=d(ct),v(un.$$.fragment,ct),ct.forEach(t),dt.forEach(t),nr=d(o),Ft=r(o,"H2",{class:!0});var Er=i(Ft);Jt=r(Er,"A",{id:!0,class:!0,href:!0});var lh=i(Jt);la=r(lh,"SPAN",{});var dh=i(la);v(hn.$$.fragment,dh),dh.forEach(t),lh.forEach(t),Kd=d(Er),da=r(Er,"SPAN",{});var ch=i(da);Vd=s(ch,"TFLayoutLMModel"),ch.forEach(t),Er.forEach(t),sr=d(o),Le=r(o,"DIV",{class:!0});var Ye=i(Le);v(mn.$$.fragment,Ye),Xd=d(Ye),ca=r(Ye,"P",{});var ph=i(ca);Yd=s(ph,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),ph.forEach(t),Zd=d(Ye),fn=r(Ye,"P",{});var qr=i(fn);Gd=s(qr,"This model inherits from "),ds=r(qr,"A",{href:!0});var uh=i(ds);Jd=s(uh,"TFPreTrainedModel"),uh.forEach(t),Qd=s(qr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),qr.forEach(t),ec=d(Ye),gn=r(Ye,"P",{});var Cr=i(gn);tc=s(Cr,"This model is also a "),_n=r(Cr,"A",{href:!0,rel:!0});var hh=i(_n);oc=s(hh,"tf.keras.Model"),hh.forEach(t),nc=s(Cr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Cr.forEach(t),sc=d(Ye),v(Qt.$$.fragment,Ye),ac=d(Ye),Ae=r(Ye,"DIV",{class:!0});var pt=i(Ae);v(yn.$$.fragment,pt),rc=d(pt),zt=r(pt,"P",{});var xs=i(zt);ic=s(xs,"The "),cs=r(xs,"A",{href:!0});var mh=i(cs);lc=s(mh,"TFLayoutLMModel"),mh.forEach(t),dc=s(xs," forward method, overrides the "),pa=r(xs,"CODE",{});var fh=i(pa);cc=s(fh,"__call__"),fh.forEach(t),pc=s(xs," special method."),xs.forEach(t),uc=d(pt),v(eo.$$.fragment,pt),hc=d(pt),ua=r(pt,"P",{});var gh=i(ua);mc=s(gh,"Examples:"),gh.forEach(t),fc=d(pt),v(bn.$$.fragment,pt),pt.forEach(t),Ye.forEach(t),ar=d(o),Et=r(o,"H2",{class:!0});var Pr=i(Et);to=r(Pr,"A",{id:!0,class:!0,href:!0});var _h=i(to);ha=r(_h,"SPAN",{});var yh=i(ha);v(kn.$$.fragment,yh),yh.forEach(t),_h.forEach(t),gc=d(Pr),ma=r(Pr,"SPAN",{});var bh=i(ma);_c=s(bh,"TFLayoutLMForMaskedLM"),bh.forEach(t),Pr.forEach(t),rr=d(o),ve=r(o,"DIV",{class:!0});var Ze=i(ve);v(Ln.$$.fragment,Ze),yc=d(Ze),vn=r(Ze,"P",{});var Nr=i(vn);bc=s(Nr,"LayoutLM Model with a "),fa=r(Nr,"CODE",{});var kh=i(fa);kc=s(kh,"language modeling"),kh.forEach(t),Lc=s(Nr," head on top."),Nr.forEach(t),vc=d(Ze),wn=r(Ze,"P",{});var Sr=i(wn);wc=s(Sr,"This model inherits from "),ps=r(Sr,"A",{href:!0});var Lh=i(ps);Tc=s(Lh,"TFPreTrainedModel"),Lh.forEach(t),Mc=s(Sr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Sr.forEach(t),xc=d(Ze),Tn=r(Ze,"P",{});var Ir=i(Tn);$c=s(Ir,"This model is also a "),Mn=r(Ir,"A",{href:!0,rel:!0});var vh=i(Mn);jc=s(vh,"tf.keras.Model"),vh.forEach(t),Fc=s(Ir,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ir.forEach(t),zc=d(Ze),v(oo.$$.fragment,Ze),Ec=d(Ze),Oe=r(Ze,"DIV",{class:!0});var ut=i(Oe);v(xn.$$.fragment,ut),qc=d(ut),qt=r(ut,"P",{});var $s=i(qt);Cc=s($s,"The "),us=r($s,"A",{href:!0});var wh=i(us);Pc=s(wh,"TFLayoutLMForMaskedLM"),wh.forEach(t),Nc=s($s," forward method, overrides the "),ga=r($s,"CODE",{});var Th=i(ga);Sc=s(Th,"__call__"),Th.forEach(t),Ic=s($s," special method."),$s.forEach(t),Dc=d(ut),v(no.$$.fragment,ut),Ac=d(ut),_a=r(ut,"P",{});var Mh=i(_a);Oc=s(Mh,"Examples:"),Mh.forEach(t),Uc=d(ut),v($n.$$.fragment,ut),ut.forEach(t),Ze.forEach(t),ir=d(o),Ct=r(o,"H2",{class:!0});var Dr=i(Ct);so=r(Dr,"A",{id:!0,class:!0,href:!0});var xh=i(so);ya=r(xh,"SPAN",{});var $h=i(ya);v(jn.$$.fragment,$h),$h.forEach(t),xh.forEach(t),Wc=d(Dr),ba=r(Dr,"SPAN",{});var jh=i(ba);Bc=s(jh,"TFLayoutLMForSequenceClassification"),jh.forEach(t),Dr.forEach(t),lr=d(o),we=r(o,"DIV",{class:!0});var Ge=i(we);v(Fn.$$.fragment,Ge),Hc=d(Ge),ka=r(Ge,"P",{});var Fh=i(ka);Rc=s(Fh,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Fh.forEach(t),Kc=d(Ge),zn=r(Ge,"P",{});var Ar=i(zn);Vc=s(Ar,"This model inherits from "),hs=r(Ar,"A",{href:!0});var zh=i(hs);Xc=s(zh,"TFPreTrainedModel"),zh.forEach(t),Yc=s(Ar,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ar.forEach(t),Zc=d(Ge),En=r(Ge,"P",{});var Or=i(En);Gc=s(Or,"This model is also a "),qn=r(Or,"A",{href:!0,rel:!0});var Eh=i(qn);Jc=s(Eh,"tf.keras.Model"),Eh.forEach(t),Qc=s(Or,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Or.forEach(t),ep=d(Ge),v(ao.$$.fragment,Ge),tp=d(Ge),Ue=r(Ge,"DIV",{class:!0});var ht=i(Ue);v(Cn.$$.fragment,ht),op=d(ht),Pt=r(ht,"P",{});var js=i(Pt);np=s(js,"The "),ms=r(js,"A",{href:!0});var qh=i(ms);sp=s(qh,"TFLayoutLMForSequenceClassification"),qh.forEach(t),ap=s(js," forward method, overrides the "),La=r(js,"CODE",{});var Ch=i(La);rp=s(Ch,"__call__"),Ch.forEach(t),ip=s(js," special method."),js.forEach(t),lp=d(ht),v(ro.$$.fragment,ht),dp=d(ht),va=r(ht,"P",{});var Ph=i(va);cp=s(Ph,"Examples:"),Ph.forEach(t),pp=d(ht),v(Pn.$$.fragment,ht),ht.forEach(t),Ge.forEach(t),dr=d(o),Nt=r(o,"H2",{class:!0});var Ur=i(Nt);io=r(Ur,"A",{id:!0,class:!0,href:!0});var Nh=i(io);wa=r(Nh,"SPAN",{});var Sh=i(wa);v(Nn.$$.fragment,Sh),Sh.forEach(t),Nh.forEach(t),up=d(Ur),Ta=r(Ur,"SPAN",{});var Ih=i(Ta);hp=s(Ih,"TFLayoutLMForTokenClassification"),Ih.forEach(t),Ur.forEach(t),cr=d(o),Te=r(o,"DIV",{class:!0});var Je=i(Te);v(Sn.$$.fragment,Je),mp=d(Je),Ma=r(Je,"P",{});var Dh=i(Ma);fp=s(Dh,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dh.forEach(t),gp=d(Je),In=r(Je,"P",{});var Wr=i(In);_p=s(Wr,"This model inherits from "),fs=r(Wr,"A",{href:!0});var Ah=i(fs);yp=s(Ah,"TFPreTrainedModel"),Ah.forEach(t),bp=s(Wr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wr.forEach(t),kp=d(Je),Dn=r(Je,"P",{});var Br=i(Dn);Lp=s(Br,"This model is also a "),An=r(Br,"A",{href:!0,rel:!0});var Oh=i(An);vp=s(Oh,"tf.keras.Model"),Oh.forEach(t),wp=s(Br,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Br.forEach(t),Tp=d(Je),v(lo.$$.fragment,Je),Mp=d(Je),We=r(Je,"DIV",{class:!0});var mt=i(We);v(On.$$.fragment,mt),xp=d(mt),St=r(mt,"P",{});var Fs=i(St);$p=s(Fs,"The "),gs=r(Fs,"A",{href:!0});var Uh=i(gs);jp=s(Uh,"TFLayoutLMForTokenClassification"),Uh.forEach(t),Fp=s(Fs," forward method, overrides the "),xa=r(Fs,"CODE",{});var Wh=i(xa);zp=s(Wh,"__call__"),Wh.forEach(t),Ep=s(Fs," special method."),Fs.forEach(t),qp=d(mt),v(co.$$.fragment,mt),Cp=d(mt),$a=r(mt,"P",{});var Bh=i($a);Pp=s(Bh,"Examples:"),Bh.forEach(t),Np=d(mt),v(Un.$$.fragment,mt),mt.forEach(t),Je.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(im)),c(g,"id","layoutlm"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#layoutlm"),c(f,"class","relative group"),c(z,"id","Overview"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(I,"class","relative group"),c(F,"href","https://arxiv.org/abs/1912.13318"),c(F,"rel","nofollow"),c(te,"href","https://guillaumejaume.github.io/FUNSD/"),c(te,"rel","nofollow"),c(oe,"href","https://rrc.cvc.uab.es/?ch=13"),c(oe,"rel","nofollow"),c(U,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(U,"rel","nofollow"),c(Kn,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),c(go,"href","https://github.com/tesseract-ocr/tesseract"),c(go,"rel","nofollow"),c(_o,"href","https://pypi.org/project/pytesseract/"),c(_o,"rel","nofollow"),c(Xn,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(ko,"href","https://guillaumejaume.github.io/FUNSD/"),c(ko,"rel","nofollow"),c(Lo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),c(Lo,"rel","nofollow"),c(vo,"href","https://huggingface.co/liminghao1630"),c(vo,"rel","nofollow"),c(wo,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),c(wo,"rel","nofollow"),c(Dt,"id","transformers.LayoutLMConfig"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.LayoutLMConfig"),c(ft,"class","relative group"),c(Yn,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(xo,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),c(xo,"rel","nofollow"),c(Zn,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertConfig"),c(Gn,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertConfig"),c(qe,"class","docstring"),c(At,"id","transformers.LayoutLMTokenizer"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.LayoutLMTokenizer"),c(yt,"class","relative group"),c(Jn,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),c(Qn,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer"),c(es,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer"),c(Be,"class","docstring"),c(Ut,"id","transformers.LayoutLMTokenizerFast"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LayoutLMTokenizerFast"),c(bt,"class","relative group"),c(ts,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),c(os,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizerFast"),c(ns,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizerFast"),c(He,"class","docstring"),c(Bt,"id","transformers.LayoutLMModel"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.LayoutLMModel"),c(kt,"class","relative group"),c(Io,"href","https://arxiv.org/abs/1912.13318"),c(Io,"rel","nofollow"),c(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ao,"rel","nofollow"),c(ss,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(Ne,"class","docstring"),c(Re,"class","docstring"),c(Rt,"id","transformers.LayoutLMForMaskedLM"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.LayoutLMForMaskedLM"),c(vt,"class","relative group"),c(Ho,"href","https://arxiv.org/abs/1912.13318"),c(Ho,"rel","nofollow"),c(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ko,"rel","nofollow"),c(as,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),c(Se,"class","docstring"),c(Ke,"class","docstring"),c(Vt,"id","transformers.LayoutLMForSequenceClassification"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.LayoutLMForSequenceClassification"),c(Mt,"class","relative group"),c(Qo,"href","https://arxiv.org/abs/1912.13318"),c(Qo,"rel","nofollow"),c(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(tn,"rel","nofollow"),c(rs,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),c(Ie,"class","docstring"),c(Ce,"class","docstring"),c(Yt,"id","transformers.LayoutLMForTokenClassification"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LayoutLMForTokenClassification"),c($t,"class","relative group"),c(ln,"href","https://arxiv.org/abs/1912.13318"),c(ln,"rel","nofollow"),c(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cn,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(De,"class","docstring"),c(Pe,"class","docstring"),c(Jt,"id","transformers.TFLayoutLMModel"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.TFLayoutLMModel"),c(Ft,"class","relative group"),c(ds,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(_n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_n,"rel","nofollow"),c(cs,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),c(Ae,"class","docstring"),c(Le,"class","docstring"),c(to,"id","transformers.TFLayoutLMForMaskedLM"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.TFLayoutLMForMaskedLM"),c(Et,"class","relative group"),c(ps,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mn,"rel","nofollow"),c(us,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),c(Oe,"class","docstring"),c(ve,"class","docstring"),c(so,"id","transformers.TFLayoutLMForSequenceClassification"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFLayoutLMForSequenceClassification"),c(Ct,"class","relative group"),c(hs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qn,"rel","nofollow"),c(ms,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),c(Ue,"class","docstring"),c(we,"class","docstring"),c(io,"id","transformers.TFLayoutLMForTokenClassification"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLayoutLMForTokenClassification"),c(Nt,"class","relative group"),c(fs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(An,"rel","nofollow"),c(gs,"href","/docs/transformers/v4.15.0/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),c(We,"class","docstring"),c(Te,"class","docstring")},m(o,m){e(document.head,h),u(o,$,m),u(o,f,m),e(f,g),e(g,b),w(y,b,null),e(f,_),e(f,j),e(j,re),u(o,Y,m),u(o,z,m),u(o,ae,m),u(o,I,m),e(I,Z),e(Z,ne),w(A,ne,null),e(I,ie),e(I,se),e(se,J),u(o,D,m),u(o,G,m),e(G,Q),e(G,F),e(F,E),e(G,le),u(o,W,m),u(o,V,m),e(V,ee),e(ee,H),e(ee,te),e(te,de),e(ee,q),e(V,ce),e(V,O),e(O,pe),e(O,oe),e(oe,R),e(O,ue),e(V,he),e(V,P),e(P,me),e(P,U),e(U,fe),e(P,p),u(o,k,m),u(o,X,m),e(X,je),u(o,Me,m),u(o,N,m),e(N,be),e(be,Fe),u(o,xe,m),u(o,S,m),e(S,K),u(o,$e,m),u(o,ye,m),e(ye,C),e(C,ze),e(C,ke),e(ke,ge),e(C,Ee),e(C,Kn),e(Kn,Hr),e(C,Rr),e(C,zs),e(zs,Kr),e(C,Vr),e(C,go),e(go,Xr),e(C,Yr),e(C,_o),e(_o,Zr),e(C,Gr),u(o,Da,m),w(yo,o,m),u(o,Aa,m),u(o,ot,m),e(ot,Jr),e(ot,Es),e(Es,Qr),e(ot,ei),e(ot,qs),e(qs,ti),e(ot,oi),u(o,Oa,m),w(bo,o,m),u(o,Ua,m),u(o,Vn,m),e(Vn,et),e(et,ni),e(et,Xn),e(Xn,si),e(et,ai),e(et,ko),e(ko,ri),e(et,ii),e(et,Lo),e(Lo,li),e(et,di),u(o,Wa,m),u(o,nt,m),e(nt,ci),e(nt,vo),e(vo,pi),e(nt,ui),e(nt,wo),e(wo,hi),e(nt,mi),u(o,Ba,m),u(o,ft,m),e(ft,Dt),e(Dt,Cs),w(To,Cs,null),e(ft,fi),e(ft,Ps),e(Ps,gi),u(o,Ha,m),u(o,qe,m),w(Mo,qe,null),e(qe,_i),e(qe,gt),e(gt,yi),e(gt,Yn),e(Yn,bi),e(gt,ki),e(gt,xo),e(xo,Li),e(gt,vi),e(qe,wi),e(qe,_t),e(_t,Ti),e(_t,Zn),e(Zn,Mi),e(_t,xi),e(_t,Gn),e(Gn,$i),e(_t,ji),e(qe,Fi),e(qe,Ns),e(Ns,zi),e(qe,Ei),w($o,qe,null),u(o,Ra,m),u(o,yt,m),e(yt,At),e(At,Ss),w(jo,Ss,null),e(yt,qi),e(yt,Is),e(Is,Ci),u(o,Ka,m),u(o,Be,m),w(Fo,Be,null),e(Be,Pi),e(Be,Ds),e(Ds,Ni),e(Be,Si),e(Be,Ot),e(Ot,Jn),e(Jn,Ii),e(Ot,Di),e(Ot,Qn),e(Qn,Ai),e(Ot,Oi),e(Be,Ui),e(Be,zo),e(zo,Wi),e(zo,es),e(es,Bi),e(zo,Hi),u(o,Va,m),u(o,bt,m),e(bt,Ut),e(Ut,As),w(Eo,As,null),e(bt,Ri),e(bt,Os),e(Os,Ki),u(o,Xa,m),u(o,He,m),w(qo,He,null),e(He,Vi),e(He,Us),e(Us,Xi),e(He,Yi),e(He,Wt),e(Wt,ts),e(ts,Zi),e(Wt,Gi),e(Wt,os),e(os,Ji),e(Wt,Qi),e(He,el),e(He,Co),e(Co,tl),e(Co,ns),e(ns,ol),e(Co,nl),u(o,Ya,m),u(o,kt,m),e(kt,Bt),e(Bt,Ws),w(Po,Ws,null),e(kt,sl),e(kt,Bs),e(Bs,al),u(o,Za,m),u(o,Re,m),w(No,Re,null),e(Re,rl),e(Re,So),e(So,il),e(So,Io),e(Io,ll),e(So,dl),e(Re,cl),e(Re,Do),e(Do,pl),e(Do,Ao),e(Ao,ul),e(Do,hl),e(Re,ml),e(Re,Ne),w(Oo,Ne,null),e(Ne,fl),e(Ne,Lt),e(Lt,gl),e(Lt,ss),e(ss,_l),e(Lt,yl),e(Lt,Hs),e(Hs,bl),e(Lt,kl),e(Ne,Ll),w(Ht,Ne,null),e(Ne,vl),e(Ne,Rs),e(Rs,wl),e(Ne,Tl),w(Uo,Ne,null),u(o,Ga,m),u(o,vt,m),e(vt,Rt),e(Rt,Ks),w(Wo,Ks,null),e(vt,Ml),e(vt,Vs),e(Vs,xl),u(o,Ja,m),u(o,Ke,m),w(Bo,Ke,null),e(Ke,$l),e(Ke,wt),e(wt,jl),e(wt,Xs),e(Xs,Fl),e(wt,zl),e(wt,Ho),e(Ho,El),e(wt,ql),e(Ke,Cl),e(Ke,Ro),e(Ro,Pl),e(Ro,Ko),e(Ko,Nl),e(Ro,Sl),e(Ke,Il),e(Ke,Se),w(Vo,Se,null),e(Se,Dl),e(Se,Tt),e(Tt,Al),e(Tt,as),e(as,Ol),e(Tt,Ul),e(Tt,Ys),e(Ys,Wl),e(Tt,Bl),e(Se,Hl),w(Kt,Se,null),e(Se,Rl),e(Se,Zs),e(Zs,Kl),e(Se,Vl),w(Xo,Se,null),u(o,Qa,m),u(o,Mt,m),e(Mt,Vt),e(Vt,Gs),w(Yo,Gs,null),e(Mt,Xl),e(Mt,Js),e(Js,Yl),u(o,er,m),u(o,Ce,m),w(Zo,Ce,null),e(Ce,Zl),e(Ce,Go),e(Go,Gl),e(Go,Qs),e(Qs,Jl),e(Go,Ql),e(Ce,ed),e(Ce,Jo),e(Jo,td),e(Jo,Qo),e(Qo,od),e(Jo,nd),e(Ce,sd),e(Ce,en),e(en,ad),e(en,tn),e(tn,rd),e(en,id),e(Ce,ld),e(Ce,Ie),w(on,Ie,null),e(Ie,dd),e(Ie,xt),e(xt,cd),e(xt,rs),e(rs,pd),e(xt,ud),e(xt,ea),e(ea,hd),e(xt,md),e(Ie,fd),w(Xt,Ie,null),e(Ie,gd),e(Ie,ta),e(ta,_d),e(Ie,yd),w(nn,Ie,null),u(o,tr,m),u(o,$t,m),e($t,Yt),e(Yt,oa),w(sn,oa,null),e($t,bd),e($t,na),e(na,kd),u(o,or,m),u(o,Pe,m),w(an,Pe,null),e(Pe,Ld),e(Pe,Zt),e(Zt,vd),e(Zt,sa),e(sa,wd),e(Zt,is),e(is,Td),e(is,aa),e(aa,Md),e(Zt,xd),e(Pe,$d),e(Pe,rn),e(rn,jd),e(rn,ln),e(ln,Fd),e(rn,zd),e(Pe,Ed),e(Pe,dn),e(dn,qd),e(dn,cn),e(cn,Cd),e(dn,Pd),e(Pe,Nd),e(Pe,De),w(pn,De,null),e(De,Sd),e(De,jt),e(jt,Id),e(jt,ls),e(ls,Dd),e(jt,Ad),e(jt,ra),e(ra,Od),e(jt,Ud),e(De,Wd),w(Gt,De,null),e(De,Bd),e(De,ia),e(ia,Hd),e(De,Rd),w(un,De,null),u(o,nr,m),u(o,Ft,m),e(Ft,Jt),e(Jt,la),w(hn,la,null),e(Ft,Kd),e(Ft,da),e(da,Vd),u(o,sr,m),u(o,Le,m),w(mn,Le,null),e(Le,Xd),e(Le,ca),e(ca,Yd),e(Le,Zd),e(Le,fn),e(fn,Gd),e(fn,ds),e(ds,Jd),e(fn,Qd),e(Le,ec),e(Le,gn),e(gn,tc),e(gn,_n),e(_n,oc),e(gn,nc),e(Le,sc),w(Qt,Le,null),e(Le,ac),e(Le,Ae),w(yn,Ae,null),e(Ae,rc),e(Ae,zt),e(zt,ic),e(zt,cs),e(cs,lc),e(zt,dc),e(zt,pa),e(pa,cc),e(zt,pc),e(Ae,uc),w(eo,Ae,null),e(Ae,hc),e(Ae,ua),e(ua,mc),e(Ae,fc),w(bn,Ae,null),u(o,ar,m),u(o,Et,m),e(Et,to),e(to,ha),w(kn,ha,null),e(Et,gc),e(Et,ma),e(ma,_c),u(o,rr,m),u(o,ve,m),w(Ln,ve,null),e(ve,yc),e(ve,vn),e(vn,bc),e(vn,fa),e(fa,kc),e(vn,Lc),e(ve,vc),e(ve,wn),e(wn,wc),e(wn,ps),e(ps,Tc),e(wn,Mc),e(ve,xc),e(ve,Tn),e(Tn,$c),e(Tn,Mn),e(Mn,jc),e(Tn,Fc),e(ve,zc),w(oo,ve,null),e(ve,Ec),e(ve,Oe),w(xn,Oe,null),e(Oe,qc),e(Oe,qt),e(qt,Cc),e(qt,us),e(us,Pc),e(qt,Nc),e(qt,ga),e(ga,Sc),e(qt,Ic),e(Oe,Dc),w(no,Oe,null),e(Oe,Ac),e(Oe,_a),e(_a,Oc),e(Oe,Uc),w($n,Oe,null),u(o,ir,m),u(o,Ct,m),e(Ct,so),e(so,ya),w(jn,ya,null),e(Ct,Wc),e(Ct,ba),e(ba,Bc),u(o,lr,m),u(o,we,m),w(Fn,we,null),e(we,Hc),e(we,ka),e(ka,Rc),e(we,Kc),e(we,zn),e(zn,Vc),e(zn,hs),e(hs,Xc),e(zn,Yc),e(we,Zc),e(we,En),e(En,Gc),e(En,qn),e(qn,Jc),e(En,Qc),e(we,ep),w(ao,we,null),e(we,tp),e(we,Ue),w(Cn,Ue,null),e(Ue,op),e(Ue,Pt),e(Pt,np),e(Pt,ms),e(ms,sp),e(Pt,ap),e(Pt,La),e(La,rp),e(Pt,ip),e(Ue,lp),w(ro,Ue,null),e(Ue,dp),e(Ue,va),e(va,cp),e(Ue,pp),w(Pn,Ue,null),u(o,dr,m),u(o,Nt,m),e(Nt,io),e(io,wa),w(Nn,wa,null),e(Nt,up),e(Nt,Ta),e(Ta,hp),u(o,cr,m),u(o,Te,m),w(Sn,Te,null),e(Te,mp),e(Te,Ma),e(Ma,fp),e(Te,gp),e(Te,In),e(In,_p),e(In,fs),e(fs,yp),e(In,bp),e(Te,kp),e(Te,Dn),e(Dn,Lp),e(Dn,An),e(An,vp),e(Dn,wp),e(Te,Tp),w(lo,Te,null),e(Te,Mp),e(Te,We),w(On,We,null),e(We,xp),e(We,St),e(St,$p),e(St,gs),e(gs,jp),e(St,Fp),e(St,xa),e(xa,zp),e(St,Ep),e(We,qp),w(co,We,null),e(We,Cp),e(We,$a),e($a,Pp),e(We,Np),w(Un,We,null),pr=!0},p(o,[m]){const Wn={};m&2&&(Wn.$$scope={dirty:m,ctx:o}),Ht.$set(Wn);const ja={};m&2&&(ja.$$scope={dirty:m,ctx:o}),Kt.$set(ja);const Fa={};m&2&&(Fa.$$scope={dirty:m,ctx:o}),Xt.$set(Fa);const za={};m&2&&(za.$$scope={dirty:m,ctx:o}),Gt.$set(za);const Bn={};m&2&&(Bn.$$scope={dirty:m,ctx:o}),Qt.$set(Bn);const Ea={};m&2&&(Ea.$$scope={dirty:m,ctx:o}),eo.$set(Ea);const qa={};m&2&&(qa.$$scope={dirty:m,ctx:o}),oo.$set(qa);const Ca={};m&2&&(Ca.$$scope={dirty:m,ctx:o}),no.$set(Ca);const Hn={};m&2&&(Hn.$$scope={dirty:m,ctx:o}),ao.$set(Hn);const Pa={};m&2&&(Pa.$$scope={dirty:m,ctx:o}),ro.$set(Pa);const It={};m&2&&(It.$$scope={dirty:m,ctx:o}),lo.$set(It);const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:o}),co.$set(Rn)},i(o){pr||(T(y.$$.fragment,o),T(A.$$.fragment,o),T(yo.$$.fragment,o),T(bo.$$.fragment,o),T(To.$$.fragment,o),T(Mo.$$.fragment,o),T($o.$$.fragment,o),T(jo.$$.fragment,o),T(Fo.$$.fragment,o),T(Eo.$$.fragment,o),T(qo.$$.fragment,o),T(Po.$$.fragment,o),T(No.$$.fragment,o),T(Oo.$$.fragment,o),T(Ht.$$.fragment,o),T(Uo.$$.fragment,o),T(Wo.$$.fragment,o),T(Bo.$$.fragment,o),T(Vo.$$.fragment,o),T(Kt.$$.fragment,o),T(Xo.$$.fragment,o),T(Yo.$$.fragment,o),T(Zo.$$.fragment,o),T(on.$$.fragment,o),T(Xt.$$.fragment,o),T(nn.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(pn.$$.fragment,o),T(Gt.$$.fragment,o),T(un.$$.fragment,o),T(hn.$$.fragment,o),T(mn.$$.fragment,o),T(Qt.$$.fragment,o),T(yn.$$.fragment,o),T(eo.$$.fragment,o),T(bn.$$.fragment,o),T(kn.$$.fragment,o),T(Ln.$$.fragment,o),T(oo.$$.fragment,o),T(xn.$$.fragment,o),T(no.$$.fragment,o),T($n.$$.fragment,o),T(jn.$$.fragment,o),T(Fn.$$.fragment,o),T(ao.$$.fragment,o),T(Cn.$$.fragment,o),T(ro.$$.fragment,o),T(Pn.$$.fragment,o),T(Nn.$$.fragment,o),T(Sn.$$.fragment,o),T(lo.$$.fragment,o),T(On.$$.fragment,o),T(co.$$.fragment,o),T(Un.$$.fragment,o),pr=!0)},o(o){M(y.$$.fragment,o),M(A.$$.fragment,o),M(yo.$$.fragment,o),M(bo.$$.fragment,o),M(To.$$.fragment,o),M(Mo.$$.fragment,o),M($o.$$.fragment,o),M(jo.$$.fragment,o),M(Fo.$$.fragment,o),M(Eo.$$.fragment,o),M(qo.$$.fragment,o),M(Po.$$.fragment,o),M(No.$$.fragment,o),M(Oo.$$.fragment,o),M(Ht.$$.fragment,o),M(Uo.$$.fragment,o),M(Wo.$$.fragment,o),M(Bo.$$.fragment,o),M(Vo.$$.fragment,o),M(Kt.$$.fragment,o),M(Xo.$$.fragment,o),M(Yo.$$.fragment,o),M(Zo.$$.fragment,o),M(on.$$.fragment,o),M(Xt.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(an.$$.fragment,o),M(pn.$$.fragment,o),M(Gt.$$.fragment,o),M(un.$$.fragment,o),M(hn.$$.fragment,o),M(mn.$$.fragment,o),M(Qt.$$.fragment,o),M(yn.$$.fragment,o),M(eo.$$.fragment,o),M(bn.$$.fragment,o),M(kn.$$.fragment,o),M(Ln.$$.fragment,o),M(oo.$$.fragment,o),M(xn.$$.fragment,o),M(no.$$.fragment,o),M($n.$$.fragment,o),M(jn.$$.fragment,o),M(Fn.$$.fragment,o),M(ao.$$.fragment,o),M(Cn.$$.fragment,o),M(ro.$$.fragment,o),M(Pn.$$.fragment,o),M(Nn.$$.fragment,o),M(Sn.$$.fragment,o),M(lo.$$.fragment,o),M(On.$$.fragment,o),M(co.$$.fragment,o),M(Un.$$.fragment,o),pr=!1},d(o){t(h),o&&t($),o&&t(f),x(y),o&&t(Y),o&&t(z),o&&t(ae),o&&t(I),x(A),o&&t(D),o&&t(G),o&&t(W),o&&t(V),o&&t(k),o&&t(X),o&&t(Me),o&&t(N),o&&t(xe),o&&t(S),o&&t($e),o&&t(ye),o&&t(Da),x(yo,o),o&&t(Aa),o&&t(ot),o&&t(Oa),x(bo,o),o&&t(Ua),o&&t(Vn),o&&t(Wa),o&&t(nt),o&&t(Ba),o&&t(ft),x(To),o&&t(Ha),o&&t(qe),x(Mo),x($o),o&&t(Ra),o&&t(yt),x(jo),o&&t(Ka),o&&t(Be),x(Fo),o&&t(Va),o&&t(bt),x(Eo),o&&t(Xa),o&&t(He),x(qo),o&&t(Ya),o&&t(kt),x(Po),o&&t(Za),o&&t(Re),x(No),x(Oo),x(Ht),x(Uo),o&&t(Ga),o&&t(vt),x(Wo),o&&t(Ja),o&&t(Ke),x(Bo),x(Vo),x(Kt),x(Xo),o&&t(Qa),o&&t(Mt),x(Yo),o&&t(er),o&&t(Ce),x(Zo),x(on),x(Xt),x(nn),o&&t(tr),o&&t($t),x(sn),o&&t(or),o&&t(Pe),x(an),x(pn),x(Gt),x(un),o&&t(nr),o&&t(Ft),x(hn),o&&t(sr),o&&t(Le),x(mn),x(Qt),x(yn),x(eo),x(bn),o&&t(ar),o&&t(Et),x(kn),o&&t(rr),o&&t(ve),x(Ln),x(oo),x(xn),x(no),x($n),o&&t(ir),o&&t(Ct),x(jn),o&&t(lr),o&&t(we),x(Fn),x(ao),x(Cn),x(ro),x(Pn),o&&t(dr),o&&t(Nt),x(Nn),o&&t(cr),o&&t(Te),x(Sn),x(lo),x(On),x(co),x(Un)}}}const im={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function lm(B,h,$){let{fw:f}=h;return B.$$set=g=>{"fw"in g&&$(0,f=g.fw)},[f]}class fm extends Hh{constructor(h){super();Rh(this,h,lm,rm,Kh,{fw:0})}}export{fm as default,im as metadata};
