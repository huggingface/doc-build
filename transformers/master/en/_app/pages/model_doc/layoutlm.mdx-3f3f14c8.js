import{S as Wh,i as Bh,s as Hh,e as a,k as l,w as L,t as n,M as Rh,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as u,y as v,q as T,o as M,B as x}from"../../chunks/vendor-4833417e.js";import{T as Qe}from"../../chunks/Tip-fffd6df1.js";import{D as _e}from"../../chunks/Docstring-7b52c3d4.js";import{C as tt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Ve}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Kh(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Vh(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Xh(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Yh(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Zh(B){let h,j,f,g,b,y,_,$,re,Y,z,ae,S,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),j=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),S=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);j=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(X),$=r(X,"LI",{});var Me=i($);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),S=r(N,"CODE",{});var be=i(S);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var I=i(F);E=r(I,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(I),q=r(I,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(I),P=r(I,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(p,k){u(p,h,k),e(h,j),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,$),e($,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,S),e(S,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Gh(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function Jh(B){let h,j,f,g,b,y,_,$,re,Y,z,ae,S,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),j=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),S=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);j=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(X),$=r(X,"LI",{});var Me=i($);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),S=r(N,"CODE",{});var be=i(S);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var I=i(F);E=r(I,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(I),q=r(I,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(I),P=r(I,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(p,k){u(p,h,k),e(h,j),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,$),e($,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,S),e(S,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function Qh(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function em(B){let h,j,f,g,b,y,_,$,re,Y,z,ae,S,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),j=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),S=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);j=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(X),$=r(X,"LI",{});var Me=i($);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),S=r(N,"CODE",{});var be=i(S);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var I=i(F);E=r(I,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(I),q=r(I,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(I),P=r(I,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(p,k){u(p,h,k),e(h,j),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,$),e($,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,S),e(S,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function tm(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function om(B){let h,j,f,g,b,y,_,$,re,Y,z,ae,S,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe;return{c(){h=a("p"),j=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),$=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),S=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);j=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(X),$=r(X,"LI",{});var Me=i($);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),S=r(N,"CODE",{});var be=i(S);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(N,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(N,"."),N.forEach(t),J=d(p),D=r(p,"P",{});var xe=i(D);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),Q=d(p),F=r(p,"UL",{});var I=i(F);E=r(I,"LI",{});var K=i(E);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=d(I),q=r(I,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(C,"CODE",{});var ze=i(O);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(C," or "),R=r(C,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),C.forEach(t),he=d(I),P=r(I,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(p,k){u(p,h,k),e(h,j),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,$),e($,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,S),e(S,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),u(p,J,k),u(p,D,k),e(D,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,te),e(F,de),e(F,q),e(q,ce),e(q,O),e(O,pe),e(q,oe),e(q,R),e(R,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(z),p&&t(J),p&&t(D),p&&t(Q),p&&t(F)}}}function nm(B){let h,j,f,g,b;return{c(){h=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);j=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(y,_){u(y,h,_),e(h,j),e(h,f),e(f,g),e(h,b)},d(y){y&&t(h)}}}function sm(B){let h,j,f,g,b,y,_,$,re,Y,z,ae,S,Z,ne,A,ie,se,J,D,G,Q,F,E,le,W,V,ee,H,te,de,q,ce,O,pe,oe,R,ue,he,P,me,U,fe,p,k,X,$e,Me,N,be,Fe,xe,I,K,je,ye,C,ze,ke,ge,Ee,Yn,Br,Hr,Cs,Rr,Kr,go,Vr,Xr,_o,Yr,Zr,Sa,yo,Da,ot,Gr,Ps,Jr,Qr,Ns,ei,ti,Aa,bo,Oa,Zn,et,oi,Gn,ni,si,ko,ai,ri,Lo,ii,li,Ua,nt,di,wo,ci,pi,vo,ui,hi,Wa,ft,At,Is,To,mi,Ss,fi,Ba,qe,Mo,gi,gt,_i,Jn,yi,bi,xo,ki,Li,wi,_t,vi,Qn,Ti,Mi,es,xi,ji,$i,Ds,Fi,zi,jo,Ha,yt,Ot,As,$o,Ei,Os,qi,Ra,Be,Fo,Ci,Us,Pi,Ni,Ut,ts,Ii,Si,os,Di,Ai,Oi,zo,Ui,ns,Wi,Bi,Ka,bt,Wt,Ws,Eo,Hi,Bs,Ri,Va,He,qo,Ki,Hs,Vi,Xi,Bt,ss,Yi,Zi,as,Gi,Ji,Qi,Co,el,rs,tl,ol,Xa,kt,Ht,Rs,Po,nl,Ks,sl,Ya,Re,No,al,Io,rl,So,il,ll,dl,Do,cl,Ao,pl,ul,hl,Ne,Oo,ml,Lt,fl,is,gl,_l,Vs,yl,bl,kl,Rt,Ll,Xs,wl,vl,Uo,Za,wt,Kt,Ys,Wo,Tl,Zs,Ml,Ga,Ke,Bo,xl,vt,jl,Gs,$l,Fl,Ho,zl,El,ql,Ro,Cl,Ko,Pl,Nl,Il,Ie,Vo,Sl,Tt,Dl,ls,Al,Ol,Js,Ul,Wl,Bl,Vt,Hl,Qs,Rl,Kl,Xo,Ja,Mt,Xt,ea,Yo,Vl,ta,Xl,Qa,Ce,Zo,Yl,Go,Zl,Jo,Gl,Jl,Ql,Qo,ed,en,td,od,nd,tn,sd,on,ad,rd,id,Se,nn,ld,xt,dd,ds,cd,pd,oa,ud,hd,md,Yt,fd,na,gd,_d,sn,er,jt,Zt,sa,an,yd,aa,bd,tr,Pe,rn,kd,$t,Ld,ln,wd,vd,dn,Td,Md,xd,cn,jd,pn,$d,Fd,zd,un,Ed,hn,qd,Cd,Pd,De,mn,Nd,Ft,Id,cs,Sd,Dd,ra,Ad,Od,Ud,Gt,Wd,ia,Bd,Hd,fn,or,zt,Jt,la,gn,Rd,da,Kd,nr,Le,_n,Vd,ca,Xd,Yd,yn,Zd,ps,Gd,Jd,Qd,bn,ec,kn,tc,oc,nc,Qt,sc,Ae,Ln,ac,Et,rc,us,ic,lc,pa,dc,cc,pc,eo,uc,ua,hc,mc,wn,sr,qt,to,ha,vn,fc,ma,gc,ar,we,Tn,_c,Mn,yc,fa,bc,kc,Lc,xn,wc,hs,vc,Tc,Mc,jn,xc,$n,jc,$c,Fc,oo,zc,Oe,Fn,Ec,Ct,qc,ms,Cc,Pc,ga,Nc,Ic,Sc,no,Dc,_a,Ac,Oc,zn,rr,Pt,so,ya,En,Uc,ba,Wc,ir,ve,qn,Bc,ka,Hc,Rc,Cn,Kc,fs,Vc,Xc,Yc,Pn,Zc,Nn,Gc,Jc,Qc,ao,ep,Ue,In,tp,Nt,op,gs,np,sp,La,ap,rp,ip,ro,lp,wa,dp,cp,Sn,lr,It,io,va,Dn,pp,Ta,up,dr,Te,An,hp,Ma,mp,fp,On,gp,_s,_p,yp,bp,Un,kp,Wn,Lp,wp,vp,lo,Tp,We,Bn,Mp,St,xp,ys,jp,$p,xa,Fp,zp,Ep,co,qp,ja,Cp,Pp,Hn,cr;return y=new Ve({}),A=new Ve({}),yo=new tt({props:{code:`def normalize_bbox(bbox, width, height):
    return [
        int(1000 * (bbox[0] / width)),
        int(1000 * (bbox[1] / height)),
        int(1000 * (bbox[2] / width)),
        int(1000 * (bbox[3] / height)),
    ]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`}}),bo=new tt({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),To=new Ve({}),Mo=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/configuration_layoutlm.py#L35",parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}]}}),jo=new tt({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

# Initializing a LayoutLM configuration
configuration = LayoutLMConfig()

# Initializing a model from the configuration
model = LayoutLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMModel, LayoutLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$o=new Ve({}),Fo=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/tokenization_layoutlm.py#L46"}}),Eo=new Ve({}),qo=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L51"}}),Po=new Ve({}),No=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L706",parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L732",parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`}}),Rt=new Qe({props:{$$slots:{default:[Kh]},$$scope:{ctx:B}}}),Uo=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMModel.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

outputs = model(
    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Wo=new Ve({}),Bo=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L854",parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vo=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L873",parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Vt=new Qe({props:{$$slots:{default:[Vh]},$$scope:{ctx:B}}}),Xo=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForMaskedLM.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="pt")["input_ids"]

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=labels,
)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),Yo=new Ve({}),Zo=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L983",parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L997",parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Yt=new Qe({props:{$$slots:{default:[Xh]},$$scope:{ctx:B}}}),sn=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForSequenceClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
sequence_label = torch.tensor([1])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=sequence_label,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=sequence_label,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),an=new Ve({}),rn=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L1120",parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_layoutlm.py#L1134",parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Gt=new Qe({props:{$$slots:{default:[Yh]},$$scope:{ctx:B}}}),fn=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForTokenClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
token_labels = torch.tensor([1, 1, 0, 0]).unsqueeze(0)  # batch size of 1

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=token_labels,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch size of 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=token_labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gn=new Ve({}),_n=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L921",parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qt=new Qe({props:{$$slots:{default:[Zh]},$$scope:{ctx:B}}}),Ln=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L927",parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
`}}),eo=new Qe({props:{$$slots:{default:[Gh]},$$scope:{ctx:B}}}),wn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMModel.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

outputs = model(
    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new Ve({}),Tn=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1039",parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new Qe({props:{$$slots:{default:[Jh]},$$scope:{ctx:B}}}),Fn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1067",parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),no=new Qe({props:{$$slots:{default:[Qh]},$$scope:{ctx:B}}}),zn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForMaskedLM.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="tf")["input_ids"]

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=labels,
)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),En=new Ve({}),qn=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1193",parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new Qe({props:{$$slots:{default:[em]},$$scope:{ctx:B}}}),In=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1211",parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),ro=new Qe({props:{$$slots:{default:[tm]},$$scope:{ctx:B}}}),Sn=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForSequenceClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
sequence_label = tf.convert_to_tensor([1])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=sequence_label,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = tf.convert_to_tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=sequence_label,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dn=new Ve({}),An=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1334",parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Qe({props:{$$slots:{default:[om]},$$scope:{ctx:B}}}),Bn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1358",parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),co=new Qe({props:{$$slots:{default:[nm]},$$scope:{ctx:B}}}),Hn=new tt({props:{code:`import tensorflow as tf
from transformers import LayoutLMTokenizer, TFLayoutLMForTokenClassification

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForTokenClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
token_labels = tf.convert_to_tensor([1, 1, 0, 0])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=token_labels,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=token_labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("meta"),j=l(),f=a("h1"),g=a("a"),b=a("span"),L(y.$$.fragment),_=l(),$=a("span"),re=n("LayoutLM"),Y=l(),z=a("a"),ae=l(),S=a("h2"),Z=a("a"),ne=a("span"),L(A.$$.fragment),ie=l(),se=a("span"),J=n("Overview"),D=l(),G=a("p"),Q=n("The LayoutLM model was proposed in the paper "),F=a("a"),E=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),le=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),W=l(),V=a("ul"),ee=a("li"),H=n("form understanding: the "),te=a("a"),de=n("FUNSD"),q=n(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ce=l(),O=a("li"),pe=n("receipt understanding: the "),oe=a("a"),R=n("SROIE"),ue=n(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),he=l(),P=a("li"),me=n("document image classification: the "),U=a("a"),fe=n("RVL-CDIP"),p=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),k=l(),X=a("p"),$e=n("The abstract from the paper is the following:"),Me=l(),N=a("p"),be=a("em"),Fe=n(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),xe=l(),I=a("p"),K=n("Tips:"),je=l(),ye=a("ul"),C=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),Yn=a("a"),Br=n("forward()"),Hr=n(" also expects the input "),Cs=a("code"),Rr=n("bbox"),Kr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),go=a("a"),Vr=n("Tesseract"),Xr=n(" (there\u2019s a "),_o=a("a"),Yr=n("Python wrapper"),Zr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Sa=l(),L(yo.$$.fragment),Da=l(),ot=a("p"),Gr=n("Here, "),Ps=a("code"),Jr=n("width"),Qr=n(" and "),Ns=a("code"),ei=n("height"),ti=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Aa=l(),L(bo.$$.fragment),Oa=l(),Zn=a("ul"),et=a("li"),oi=n("For a demo which shows how to fine-tune "),Gn=a("a"),ni=n("LayoutLMForTokenClassification"),si=n(" on the "),ko=a("a"),ai=n("FUNSD dataset"),ri=n(" (a collection of annotated forms), see "),Lo=a("a"),ii=n("this notebook"),li=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Ua=l(),nt=a("p"),di=n("This model was contributed by "),wo=a("a"),ci=n("liminghao1630"),pi=n(`. The original code can be found
`),vo=a("a"),ui=n("here"),hi=n("."),Wa=l(),ft=a("h2"),At=a("a"),Is=a("span"),L(To.$$.fragment),mi=l(),Ss=a("span"),fi=n("LayoutLMConfig"),Ba=l(),qe=a("div"),L(Mo.$$.fragment),gi=l(),gt=a("p"),_i=n("This is the configuration class to store the configuration of a "),Jn=a("a"),yi=n("LayoutLMModel"),bi=n(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),xo=a("a"),ki=n("layoutlm-base-uncased"),Li=n(" architecture."),wi=l(),_t=a("p"),vi=n("Configuration objects inherit from "),Qn=a("a"),Ti=n("BertConfig"),Mi=n(` and can be used to control the model outputs. Read the
documentation from `),es=a("a"),xi=n("BertConfig"),ji=n(" for more information."),$i=l(),Ds=a("p"),Fi=n("Examples:"),zi=l(),L(jo.$$.fragment),Ha=l(),yt=a("h2"),Ot=a("a"),As=a("span"),L($o.$$.fragment),Ei=l(),Os=a("span"),qi=n("LayoutLMTokenizer"),Ra=l(),Be=a("div"),L(Fo.$$.fragment),Ci=l(),Us=a("p"),Pi=n("Constructs a LayoutLM tokenizer."),Ni=l(),Ut=a("p"),ts=a("a"),Ii=n("LayoutLMTokenizer"),Si=n(" is identical to "),os=a("a"),Di=n("BertTokenizer"),Ai=n(` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Oi=l(),zo=a("p"),Ui=n("Refer to superclass "),ns=a("a"),Wi=n("BertTokenizer"),Bi=n(" for usage examples and documentation concerning parameters."),Ka=l(),bt=a("h2"),Wt=a("a"),Ws=a("span"),L(Eo.$$.fragment),Hi=l(),Bs=a("span"),Ri=n("LayoutLMTokenizerFast"),Va=l(),He=a("div"),L(qo.$$.fragment),Ki=l(),Hs=a("p"),Vi=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Xi=l(),Bt=a("p"),ss=a("a"),Yi=n("LayoutLMTokenizerFast"),Zi=n(" is identical to "),as=a("a"),Gi=n("BertTokenizerFast"),Ji=n(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Qi=l(),Co=a("p"),el=n("Refer to superclass "),rs=a("a"),tl=n("BertTokenizerFast"),ol=n(" for usage examples and documentation concerning parameters."),Xa=l(),kt=a("h2"),Ht=a("a"),Rs=a("span"),L(Po.$$.fragment),nl=l(),Ks=a("span"),sl=n("LayoutLMModel"),Ya=l(),Re=a("div"),L(No.$$.fragment),al=l(),Io=a("p"),rl=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),So=a("a"),il=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),ll=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),dl=l(),Do=a("p"),cl=n("This model is a PyTorch "),Ao=a("a"),pl=n("torch.nn.Module"),ul=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hl=l(),Ne=a("div"),L(Oo.$$.fragment),ml=l(),Lt=a("p"),fl=n("The "),is=a("a"),gl=n("LayoutLMModel"),_l=n(" forward method, overrides the "),Vs=a("code"),yl=n("__call__"),bl=n(" special method."),kl=l(),L(Rt.$$.fragment),Ll=l(),Xs=a("p"),wl=n("Examples:"),vl=l(),L(Uo.$$.fragment),Za=l(),wt=a("h2"),Kt=a("a"),Ys=a("span"),L(Wo.$$.fragment),Tl=l(),Zs=a("span"),Ml=n("LayoutLMForMaskedLM"),Ga=l(),Ke=a("div"),L(Bo.$$.fragment),xl=l(),vt=a("p"),jl=n("LayoutLM Model with a "),Gs=a("code"),$l=n("language modeling"),Fl=n(` head on top.
The LayoutLM model was proposed in `),Ho=a("a"),zl=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),El=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),ql=l(),Ro=a("p"),Cl=n("This model is a PyTorch "),Ko=a("a"),Pl=n("torch.nn.Module"),Nl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Il=l(),Ie=a("div"),L(Vo.$$.fragment),Sl=l(),Tt=a("p"),Dl=n("The "),ls=a("a"),Al=n("LayoutLMForMaskedLM"),Ol=n(" forward method, overrides the "),Js=a("code"),Ul=n("__call__"),Wl=n(" special method."),Bl=l(),L(Vt.$$.fragment),Hl=l(),Qs=a("p"),Rl=n("Examples:"),Kl=l(),L(Xo.$$.fragment),Ja=l(),Mt=a("h2"),Xt=a("a"),ea=a("span"),L(Yo.$$.fragment),Vl=l(),ta=a("span"),Xl=n("LayoutLMForSequenceClassification"),Qa=l(),Ce=a("div"),L(Zo.$$.fragment),Yl=l(),Go=a("p"),Zl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Jo=a("a"),Gl=n("RVL-CDIP"),Jl=n(" dataset."),Ql=l(),Qo=a("p"),ed=n("The LayoutLM model was proposed in "),en=a("a"),td=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),od=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),nd=l(),tn=a("p"),sd=n("This model is a PyTorch "),on=a("a"),ad=n("torch.nn.Module"),rd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),id=l(),Se=a("div"),L(nn.$$.fragment),ld=l(),xt=a("p"),dd=n("The "),ds=a("a"),cd=n("LayoutLMForSequenceClassification"),pd=n(" forward method, overrides the "),oa=a("code"),ud=n("__call__"),hd=n(" special method."),md=l(),L(Yt.$$.fragment),fd=l(),na=a("p"),gd=n("Examples:"),_d=l(),L(sn.$$.fragment),er=l(),jt=a("h2"),Zt=a("a"),sa=a("span"),L(an.$$.fragment),yd=l(),aa=a("span"),bd=n("LayoutLMForTokenClassification"),tr=l(),Pe=a("div"),L(rn.$$.fragment),kd=l(),$t=a("p"),Ld=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),ln=a("a"),wd=n("FUNSD"),vd=n(`
dataset and the `),dn=a("a"),Td=n("SROIE"),Md=n(" dataset."),xd=l(),cn=a("p"),jd=n("The LayoutLM model was proposed in "),pn=a("a"),$d=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Fd=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),zd=l(),un=a("p"),Ed=n("This model is a PyTorch "),hn=a("a"),qd=n("torch.nn.Module"),Cd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pd=l(),De=a("div"),L(mn.$$.fragment),Nd=l(),Ft=a("p"),Id=n("The "),cs=a("a"),Sd=n("LayoutLMForTokenClassification"),Dd=n(" forward method, overrides the "),ra=a("code"),Ad=n("__call__"),Od=n(" special method."),Ud=l(),L(Gt.$$.fragment),Wd=l(),ia=a("p"),Bd=n("Examples:"),Hd=l(),L(fn.$$.fragment),or=l(),zt=a("h2"),Jt=a("a"),la=a("span"),L(gn.$$.fragment),Rd=l(),da=a("span"),Kd=n("TFLayoutLMModel"),nr=l(),Le=a("div"),L(_n.$$.fragment),Vd=l(),ca=a("p"),Xd=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Yd=l(),yn=a("p"),Zd=n("This model inherits from "),ps=a("a"),Gd=n("TFPreTrainedModel"),Jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd=l(),bn=a("p"),ec=n("This model is also a "),kn=a("a"),tc=n("tf.keras.Model"),oc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc=l(),L(Qt.$$.fragment),sc=l(),Ae=a("div"),L(Ln.$$.fragment),ac=l(),Et=a("p"),rc=n("The "),us=a("a"),ic=n("TFLayoutLMModel"),lc=n(" forward method, overrides the "),pa=a("code"),dc=n("__call__"),cc=n(" special method."),pc=l(),L(eo.$$.fragment),uc=l(),ua=a("p"),hc=n("Examples:"),mc=l(),L(wn.$$.fragment),sr=l(),qt=a("h2"),to=a("a"),ha=a("span"),L(vn.$$.fragment),fc=l(),ma=a("span"),gc=n("TFLayoutLMForMaskedLM"),ar=l(),we=a("div"),L(Tn.$$.fragment),_c=l(),Mn=a("p"),yc=n("LayoutLM Model with a "),fa=a("code"),bc=n("language modeling"),kc=n(" head on top."),Lc=l(),xn=a("p"),wc=n("This model inherits from "),hs=a("a"),vc=n("TFPreTrainedModel"),Tc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mc=l(),jn=a("p"),xc=n("This model is also a "),$n=a("a"),jc=n("tf.keras.Model"),$c=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc=l(),L(oo.$$.fragment),zc=l(),Oe=a("div"),L(Fn.$$.fragment),Ec=l(),Ct=a("p"),qc=n("The "),ms=a("a"),Cc=n("TFLayoutLMForMaskedLM"),Pc=n(" forward method, overrides the "),ga=a("code"),Nc=n("__call__"),Ic=n(" special method."),Sc=l(),L(no.$$.fragment),Dc=l(),_a=a("p"),Ac=n("Examples:"),Oc=l(),L(zn.$$.fragment),rr=l(),Pt=a("h2"),so=a("a"),ya=a("span"),L(En.$$.fragment),Uc=l(),ba=a("span"),Wc=n("TFLayoutLMForSequenceClassification"),ir=l(),ve=a("div"),L(qn.$$.fragment),Bc=l(),ka=a("p"),Hc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rc=l(),Cn=a("p"),Kc=n("This model inherits from "),fs=a("a"),Vc=n("TFPreTrainedModel"),Xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc=l(),Pn=a("p"),Zc=n("This model is also a "),Nn=a("a"),Gc=n("tf.keras.Model"),Jc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qc=l(),L(ao.$$.fragment),ep=l(),Ue=a("div"),L(In.$$.fragment),tp=l(),Nt=a("p"),op=n("The "),gs=a("a"),np=n("TFLayoutLMForSequenceClassification"),sp=n(" forward method, overrides the "),La=a("code"),ap=n("__call__"),rp=n(" special method."),ip=l(),L(ro.$$.fragment),lp=l(),wa=a("p"),dp=n("Examples:"),cp=l(),L(Sn.$$.fragment),lr=l(),It=a("h2"),io=a("a"),va=a("span"),L(Dn.$$.fragment),pp=l(),Ta=a("span"),up=n("TFLayoutLMForTokenClassification"),dr=l(),Te=a("div"),L(An.$$.fragment),hp=l(),Ma=a("p"),mp=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fp=l(),On=a("p"),gp=n("This model inherits from "),_s=a("a"),_p=n("TFPreTrainedModel"),yp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp=l(),Un=a("p"),kp=n("This model is also a "),Wn=a("a"),Lp=n("tf.keras.Model"),wp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp=l(),L(lo.$$.fragment),Tp=l(),We=a("div"),L(Bn.$$.fragment),Mp=l(),St=a("p"),xp=n("The "),ys=a("a"),jp=n("TFLayoutLMForTokenClassification"),$p=n(" forward method, overrides the "),xa=a("code"),Fp=n("__call__"),zp=n(" special method."),Ep=l(),L(co.$$.fragment),qp=l(),ja=a("p"),Cp=n("Examples:"),Pp=l(),L(Hn.$$.fragment),this.h()},l(o){const m=Rh('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),j=d(o),f=r(o,"H1",{class:!0});var Rn=i(f);g=r(Rn,"A",{id:!0,class:!0,href:!0});var $a=i(g);b=r($a,"SPAN",{});var Fa=i(b);w(y.$$.fragment,Fa),Fa.forEach(t),$a.forEach(t),_=d(Rn),$=r(Rn,"SPAN",{});var za=i($);re=s(za,"LayoutLM"),za.forEach(t),Rn.forEach(t),Y=d(o),z=r(o,"A",{id:!0}),i(z).forEach(t),ae=d(o),S=r(o,"H2",{class:!0});var Kn=i(S);Z=r(Kn,"A",{id:!0,class:!0,href:!0});var Ea=i(Z);ne=r(Ea,"SPAN",{});var qa=i(ne);w(A.$$.fragment,qa),qa.forEach(t),Ea.forEach(t),ie=d(Kn),se=r(Kn,"SPAN",{});var Ca=i(se);J=s(Ca,"Overview"),Ca.forEach(t),Kn.forEach(t),D=d(o),G=r(o,"P",{});var Vn=i(G);Q=s(Vn,"The LayoutLM model was proposed in the paper "),F=r(Vn,"A",{href:!0,rel:!0});var Pa=i(F);E=s(Pa,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Pa.forEach(t),le=s(Vn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Vn.forEach(t),W=d(o),V=r(o,"UL",{});var Dt=i(V);ee=r(Dt,"LI",{});var Xn=i(ee);H=s(Xn,"form understanding: the "),te=r(Xn,"A",{href:!0,rel:!0});var Np=i(te);de=s(Np,"FUNSD"),Np.forEach(t),q=s(Xn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Xn.forEach(t),ce=d(Dt),O=r(Dt,"LI",{});var pr=i(O);pe=s(pr,"receipt understanding: the "),oe=r(pr,"A",{href:!0,rel:!0});var Ip=i(oe);R=s(Ip,"SROIE"),Ip.forEach(t),ue=s(pr,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),pr.forEach(t),he=d(Dt),P=r(Dt,"LI",{});var ur=i(P);me=s(ur,"document image classification: the "),U=r(ur,"A",{href:!0,rel:!0});var Sp=i(U);fe=s(Sp,"RVL-CDIP"),Sp.forEach(t),p=s(ur,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ur.forEach(t),Dt.forEach(t),k=d(o),X=r(o,"P",{});var Dp=i(X);$e=s(Dp,"The abstract from the paper is the following:"),Dp.forEach(t),Me=d(o),N=r(o,"P",{});var Ap=i(N);be=r(Ap,"EM",{});var Op=i(be);Fe=s(Op,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Op.forEach(t),Ap.forEach(t),xe=d(o),I=r(o,"P",{});var Up=i(I);K=s(Up,"Tips:"),Up.forEach(t),je=d(o),ye=r(o,"UL",{});var Wp=i(ye);C=r(Wp,"LI",{});var Xe=i(C);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var Bp=i(ke);ge=s(Bp,"input_ids"),Bp.forEach(t),Ee=s(Xe,", "),Yn=r(Xe,"A",{href:!0});var Hp=i(Yn);Br=s(Hp,"forward()"),Hp.forEach(t),Hr=s(Xe," also expects the input "),Cs=r(Xe,"CODE",{});var Rp=i(Cs);Rr=s(Rp,"bbox"),Rp.forEach(t),Kr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),go=r(Xe,"A",{href:!0,rel:!0});var Kp=i(go);Vr=s(Kp,"Tesseract"),Kp.forEach(t),Xr=s(Xe," (there\u2019s a "),_o=r(Xe,"A",{href:!0,rel:!0});var Vp=i(_o);Yr=s(Vp,"Python wrapper"),Vp.forEach(t),Zr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(t),Wp.forEach(t),Sa=d(o),w(yo.$$.fragment,o),Da=d(o),ot=r(o,"P",{});var bs=i(ot);Gr=s(bs,"Here, "),Ps=r(bs,"CODE",{});var Xp=i(Ps);Jr=s(Xp,"width"),Xp.forEach(t),Qr=s(bs," and "),Ns=r(bs,"CODE",{});var Yp=i(Ns);ei=s(Yp,"height"),Yp.forEach(t),ti=s(bs,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),bs.forEach(t),Aa=d(o),w(bo.$$.fragment,o),Oa=d(o),Zn=r(o,"UL",{});var Zp=i(Zn);et=r(Zp,"LI",{});var po=i(et);oi=s(po,"For a demo which shows how to fine-tune "),Gn=r(po,"A",{href:!0});var Gp=i(Gn);ni=s(Gp,"LayoutLMForTokenClassification"),Gp.forEach(t),si=s(po," on the "),ko=r(po,"A",{href:!0,rel:!0});var Jp=i(ko);ai=s(Jp,"FUNSD dataset"),Jp.forEach(t),ri=s(po," (a collection of annotated forms), see "),Lo=r(po,"A",{href:!0,rel:!0});var Qp=i(Lo);ii=s(Qp,"this notebook"),Qp.forEach(t),li=s(po,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),po.forEach(t),Zp.forEach(t),Ua=d(o),nt=r(o,"P",{});var ks=i(nt);di=s(ks,"This model was contributed by "),wo=r(ks,"A",{href:!0,rel:!0});var eu=i(wo);ci=s(eu,"liminghao1630"),eu.forEach(t),pi=s(ks,`. The original code can be found
`),vo=r(ks,"A",{href:!0,rel:!0});var tu=i(vo);ui=s(tu,"here"),tu.forEach(t),hi=s(ks,"."),ks.forEach(t),Wa=d(o),ft=r(o,"H2",{class:!0});var hr=i(ft);At=r(hr,"A",{id:!0,class:!0,href:!0});var ou=i(At);Is=r(ou,"SPAN",{});var nu=i(Is);w(To.$$.fragment,nu),nu.forEach(t),ou.forEach(t),mi=d(hr),Ss=r(hr,"SPAN",{});var su=i(Ss);fi=s(su,"LayoutLMConfig"),su.forEach(t),hr.forEach(t),Ba=d(o),qe=r(o,"DIV",{class:!0});var st=i(qe);w(Mo.$$.fragment,st),gi=d(st),gt=r(st,"P",{});var Ls=i(gt);_i=s(Ls,"This is the configuration class to store the configuration of a "),Jn=r(Ls,"A",{href:!0});var au=i(Jn);yi=s(au,"LayoutLMModel"),au.forEach(t),bi=s(Ls,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),xo=r(Ls,"A",{href:!0,rel:!0});var ru=i(xo);ki=s(ru,"layoutlm-base-uncased"),ru.forEach(t),Li=s(Ls," architecture."),Ls.forEach(t),wi=d(st),_t=r(st,"P",{});var ws=i(_t);vi=s(ws,"Configuration objects inherit from "),Qn=r(ws,"A",{href:!0});var iu=i(Qn);Ti=s(iu,"BertConfig"),iu.forEach(t),Mi=s(ws,` and can be used to control the model outputs. Read the
documentation from `),es=r(ws,"A",{href:!0});var lu=i(es);xi=s(lu,"BertConfig"),lu.forEach(t),ji=s(ws," for more information."),ws.forEach(t),$i=d(st),Ds=r(st,"P",{});var du=i(Ds);Fi=s(du,"Examples:"),du.forEach(t),zi=d(st),w(jo.$$.fragment,st),st.forEach(t),Ha=d(o),yt=r(o,"H2",{class:!0});var mr=i(yt);Ot=r(mr,"A",{id:!0,class:!0,href:!0});var cu=i(Ot);As=r(cu,"SPAN",{});var pu=i(As);w($o.$$.fragment,pu),pu.forEach(t),cu.forEach(t),Ei=d(mr),Os=r(mr,"SPAN",{});var uu=i(Os);qi=s(uu,"LayoutLMTokenizer"),uu.forEach(t),mr.forEach(t),Ra=d(o),Be=r(o,"DIV",{class:!0});var uo=i(Be);w(Fo.$$.fragment,uo),Ci=d(uo),Us=r(uo,"P",{});var hu=i(Us);Pi=s(hu,"Constructs a LayoutLM tokenizer."),hu.forEach(t),Ni=d(uo),Ut=r(uo,"P",{});var Na=i(Ut);ts=r(Na,"A",{href:!0});var mu=i(ts);Ii=s(mu,"LayoutLMTokenizer"),mu.forEach(t),Si=s(Na," is identical to "),os=r(Na,"A",{href:!0});var fu=i(os);Di=s(fu,"BertTokenizer"),fu.forEach(t),Ai=s(Na,` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Na.forEach(t),Oi=d(uo),zo=r(uo,"P",{});var fr=i(zo);Ui=s(fr,"Refer to superclass "),ns=r(fr,"A",{href:!0});var gu=i(ns);Wi=s(gu,"BertTokenizer"),gu.forEach(t),Bi=s(fr," for usage examples and documentation concerning parameters."),fr.forEach(t),uo.forEach(t),Ka=d(o),bt=r(o,"H2",{class:!0});var gr=i(bt);Wt=r(gr,"A",{id:!0,class:!0,href:!0});var _u=i(Wt);Ws=r(_u,"SPAN",{});var yu=i(Ws);w(Eo.$$.fragment,yu),yu.forEach(t),_u.forEach(t),Hi=d(gr),Bs=r(gr,"SPAN",{});var bu=i(Bs);Ri=s(bu,"LayoutLMTokenizerFast"),bu.forEach(t),gr.forEach(t),Va=d(o),He=r(o,"DIV",{class:!0});var ho=i(He);w(qo.$$.fragment,ho),Ki=d(ho),Hs=r(ho,"P",{});var ku=i(Hs);Vi=s(ku,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),ku.forEach(t),Xi=d(ho),Bt=r(ho,"P",{});var Ia=i(Bt);ss=r(Ia,"A",{href:!0});var Lu=i(ss);Yi=s(Lu,"LayoutLMTokenizerFast"),Lu.forEach(t),Zi=s(Ia," is identical to "),as=r(Ia,"A",{href:!0});var wu=i(as);Gi=s(wu,"BertTokenizerFast"),wu.forEach(t),Ji=s(Ia,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Ia.forEach(t),Qi=d(ho),Co=r(ho,"P",{});var _r=i(Co);el=s(_r,"Refer to superclass "),rs=r(_r,"A",{href:!0});var vu=i(rs);tl=s(vu,"BertTokenizerFast"),vu.forEach(t),ol=s(_r," for usage examples and documentation concerning parameters."),_r.forEach(t),ho.forEach(t),Xa=d(o),kt=r(o,"H2",{class:!0});var yr=i(kt);Ht=r(yr,"A",{id:!0,class:!0,href:!0});var Tu=i(Ht);Rs=r(Tu,"SPAN",{});var Mu=i(Rs);w(Po.$$.fragment,Mu),Mu.forEach(t),Tu.forEach(t),nl=d(yr),Ks=r(yr,"SPAN",{});var xu=i(Ks);sl=s(xu,"LayoutLMModel"),xu.forEach(t),yr.forEach(t),Ya=d(o),Re=r(o,"DIV",{class:!0});var mo=i(Re);w(No.$$.fragment,mo),al=d(mo),Io=r(mo,"P",{});var br=i(Io);rl=s(br,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),So=r(br,"A",{href:!0,rel:!0});var ju=i(So);il=s(ju,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),ju.forEach(t),ll=s(br,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),br.forEach(t),dl=d(mo),Do=r(mo,"P",{});var kr=i(Do);cl=s(kr,"This model is a PyTorch "),Ao=r(kr,"A",{href:!0,rel:!0});var $u=i(Ao);pl=s($u,"torch.nn.Module"),$u.forEach(t),ul=s(kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(t),hl=d(mo),Ne=r(mo,"DIV",{class:!0});var at=i(Ne);w(Oo.$$.fragment,at),ml=d(at),Lt=r(at,"P",{});var vs=i(Lt);fl=s(vs,"The "),is=r(vs,"A",{href:!0});var Fu=i(is);gl=s(Fu,"LayoutLMModel"),Fu.forEach(t),_l=s(vs," forward method, overrides the "),Vs=r(vs,"CODE",{});var zu=i(Vs);yl=s(zu,"__call__"),zu.forEach(t),bl=s(vs," special method."),vs.forEach(t),kl=d(at),w(Rt.$$.fragment,at),Ll=d(at),Xs=r(at,"P",{});var Eu=i(Xs);wl=s(Eu,"Examples:"),Eu.forEach(t),vl=d(at),w(Uo.$$.fragment,at),at.forEach(t),mo.forEach(t),Za=d(o),wt=r(o,"H2",{class:!0});var Lr=i(wt);Kt=r(Lr,"A",{id:!0,class:!0,href:!0});var qu=i(Kt);Ys=r(qu,"SPAN",{});var Cu=i(Ys);w(Wo.$$.fragment,Cu),Cu.forEach(t),qu.forEach(t),Tl=d(Lr),Zs=r(Lr,"SPAN",{});var Pu=i(Zs);Ml=s(Pu,"LayoutLMForMaskedLM"),Pu.forEach(t),Lr.forEach(t),Ga=d(o),Ke=r(o,"DIV",{class:!0});var fo=i(Ke);w(Bo.$$.fragment,fo),xl=d(fo),vt=r(fo,"P",{});var Ts=i(vt);jl=s(Ts,"LayoutLM Model with a "),Gs=r(Ts,"CODE",{});var Nu=i(Gs);$l=s(Nu,"language modeling"),Nu.forEach(t),Fl=s(Ts,` head on top.
The LayoutLM model was proposed in `),Ho=r(Ts,"A",{href:!0,rel:!0});var Iu=i(Ho);zl=s(Iu,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Iu.forEach(t),El=s(Ts,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Ts.forEach(t),ql=d(fo),Ro=r(fo,"P",{});var wr=i(Ro);Cl=s(wr,"This model is a PyTorch "),Ko=r(wr,"A",{href:!0,rel:!0});var Su=i(Ko);Pl=s(Su,"torch.nn.Module"),Su.forEach(t),Nl=s(wr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wr.forEach(t),Il=d(fo),Ie=r(fo,"DIV",{class:!0});var rt=i(Ie);w(Vo.$$.fragment,rt),Sl=d(rt),Tt=r(rt,"P",{});var Ms=i(Tt);Dl=s(Ms,"The "),ls=r(Ms,"A",{href:!0});var Du=i(ls);Al=s(Du,"LayoutLMForMaskedLM"),Du.forEach(t),Ol=s(Ms," forward method, overrides the "),Js=r(Ms,"CODE",{});var Au=i(Js);Ul=s(Au,"__call__"),Au.forEach(t),Wl=s(Ms," special method."),Ms.forEach(t),Bl=d(rt),w(Vt.$$.fragment,rt),Hl=d(rt),Qs=r(rt,"P",{});var Ou=i(Qs);Rl=s(Ou,"Examples:"),Ou.forEach(t),Kl=d(rt),w(Xo.$$.fragment,rt),rt.forEach(t),fo.forEach(t),Ja=d(o),Mt=r(o,"H2",{class:!0});var vr=i(Mt);Xt=r(vr,"A",{id:!0,class:!0,href:!0});var Uu=i(Xt);ea=r(Uu,"SPAN",{});var Wu=i(ea);w(Yo.$$.fragment,Wu),Wu.forEach(t),Uu.forEach(t),Vl=d(vr),ta=r(vr,"SPAN",{});var Bu=i(ta);Xl=s(Bu,"LayoutLMForSequenceClassification"),Bu.forEach(t),vr.forEach(t),Qa=d(o),Ce=r(o,"DIV",{class:!0});var it=i(Ce);w(Zo.$$.fragment,it),Yl=d(it),Go=r(it,"P",{});var Tr=i(Go);Zl=s(Tr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Jo=r(Tr,"A",{href:!0,rel:!0});var Hu=i(Jo);Gl=s(Hu,"RVL-CDIP"),Hu.forEach(t),Jl=s(Tr," dataset."),Tr.forEach(t),Ql=d(it),Qo=r(it,"P",{});var Mr=i(Qo);ed=s(Mr,"The LayoutLM model was proposed in "),en=r(Mr,"A",{href:!0,rel:!0});var Ru=i(en);td=s(Ru,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Ru.forEach(t),od=s(Mr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Mr.forEach(t),nd=d(it),tn=r(it,"P",{});var xr=i(tn);sd=s(xr,"This model is a PyTorch "),on=r(xr,"A",{href:!0,rel:!0});var Ku=i(on);ad=s(Ku,"torch.nn.Module"),Ku.forEach(t),rd=s(xr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xr.forEach(t),id=d(it),Se=r(it,"DIV",{class:!0});var lt=i(Se);w(nn.$$.fragment,lt),ld=d(lt),xt=r(lt,"P",{});var xs=i(xt);dd=s(xs,"The "),ds=r(xs,"A",{href:!0});var Vu=i(ds);cd=s(Vu,"LayoutLMForSequenceClassification"),Vu.forEach(t),pd=s(xs," forward method, overrides the "),oa=r(xs,"CODE",{});var Xu=i(oa);ud=s(Xu,"__call__"),Xu.forEach(t),hd=s(xs," special method."),xs.forEach(t),md=d(lt),w(Yt.$$.fragment,lt),fd=d(lt),na=r(lt,"P",{});var Yu=i(na);gd=s(Yu,"Examples:"),Yu.forEach(t),_d=d(lt),w(sn.$$.fragment,lt),lt.forEach(t),it.forEach(t),er=d(o),jt=r(o,"H2",{class:!0});var jr=i(jt);Zt=r(jr,"A",{id:!0,class:!0,href:!0});var Zu=i(Zt);sa=r(Zu,"SPAN",{});var Gu=i(sa);w(an.$$.fragment,Gu),Gu.forEach(t),Zu.forEach(t),yd=d(jr),aa=r(jr,"SPAN",{});var Ju=i(aa);bd=s(Ju,"LayoutLMForTokenClassification"),Ju.forEach(t),jr.forEach(t),tr=d(o),Pe=r(o,"DIV",{class:!0});var dt=i(Pe);w(rn.$$.fragment,dt),kd=d(dt),$t=r(dt,"P",{});var js=i($t);Ld=s(js,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),ln=r(js,"A",{href:!0,rel:!0});var Qu=i(ln);wd=s(Qu,"FUNSD"),Qu.forEach(t),vd=s(js,`
dataset and the `),dn=r(js,"A",{href:!0,rel:!0});var eh=i(dn);Td=s(eh,"SROIE"),eh.forEach(t),Md=s(js," dataset."),js.forEach(t),xd=d(dt),cn=r(dt,"P",{});var $r=i(cn);jd=s($r,"The LayoutLM model was proposed in "),pn=r($r,"A",{href:!0,rel:!0});var th=i(pn);$d=s(th,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),th.forEach(t),Fd=s($r,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),$r.forEach(t),zd=d(dt),un=r(dt,"P",{});var Fr=i(un);Ed=s(Fr,"This model is a PyTorch "),hn=r(Fr,"A",{href:!0,rel:!0});var oh=i(hn);qd=s(oh,"torch.nn.Module"),oh.forEach(t),Cd=s(Fr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fr.forEach(t),Pd=d(dt),De=r(dt,"DIV",{class:!0});var ct=i(De);w(mn.$$.fragment,ct),Nd=d(ct),Ft=r(ct,"P",{});var $s=i(Ft);Id=s($s,"The "),cs=r($s,"A",{href:!0});var nh=i(cs);Sd=s(nh,"LayoutLMForTokenClassification"),nh.forEach(t),Dd=s($s," forward method, overrides the "),ra=r($s,"CODE",{});var sh=i(ra);Ad=s(sh,"__call__"),sh.forEach(t),Od=s($s," special method."),$s.forEach(t),Ud=d(ct),w(Gt.$$.fragment,ct),Wd=d(ct),ia=r(ct,"P",{});var ah=i(ia);Bd=s(ah,"Examples:"),ah.forEach(t),Hd=d(ct),w(fn.$$.fragment,ct),ct.forEach(t),dt.forEach(t),or=d(o),zt=r(o,"H2",{class:!0});var zr=i(zt);Jt=r(zr,"A",{id:!0,class:!0,href:!0});var rh=i(Jt);la=r(rh,"SPAN",{});var ih=i(la);w(gn.$$.fragment,ih),ih.forEach(t),rh.forEach(t),Rd=d(zr),da=r(zr,"SPAN",{});var lh=i(da);Kd=s(lh,"TFLayoutLMModel"),lh.forEach(t),zr.forEach(t),nr=d(o),Le=r(o,"DIV",{class:!0});var Ye=i(Le);w(_n.$$.fragment,Ye),Vd=d(Ye),ca=r(Ye,"P",{});var dh=i(ca);Xd=s(dh,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),dh.forEach(t),Yd=d(Ye),yn=r(Ye,"P",{});var Er=i(yn);Zd=s(Er,"This model inherits from "),ps=r(Er,"A",{href:!0});var ch=i(ps);Gd=s(ch,"TFPreTrainedModel"),ch.forEach(t),Jd=s(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(t),Qd=d(Ye),bn=r(Ye,"P",{});var qr=i(bn);ec=s(qr,"This model is also a "),kn=r(qr,"A",{href:!0,rel:!0});var ph=i(kn);tc=s(ph,"tf.keras.Model"),ph.forEach(t),oc=s(qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qr.forEach(t),nc=d(Ye),w(Qt.$$.fragment,Ye),sc=d(Ye),Ae=r(Ye,"DIV",{class:!0});var pt=i(Ae);w(Ln.$$.fragment,pt),ac=d(pt),Et=r(pt,"P",{});var Fs=i(Et);rc=s(Fs,"The "),us=r(Fs,"A",{href:!0});var uh=i(us);ic=s(uh,"TFLayoutLMModel"),uh.forEach(t),lc=s(Fs," forward method, overrides the "),pa=r(Fs,"CODE",{});var hh=i(pa);dc=s(hh,"__call__"),hh.forEach(t),cc=s(Fs," special method."),Fs.forEach(t),pc=d(pt),w(eo.$$.fragment,pt),uc=d(pt),ua=r(pt,"P",{});var mh=i(ua);hc=s(mh,"Examples:"),mh.forEach(t),mc=d(pt),w(wn.$$.fragment,pt),pt.forEach(t),Ye.forEach(t),sr=d(o),qt=r(o,"H2",{class:!0});var Cr=i(qt);to=r(Cr,"A",{id:!0,class:!0,href:!0});var fh=i(to);ha=r(fh,"SPAN",{});var gh=i(ha);w(vn.$$.fragment,gh),gh.forEach(t),fh.forEach(t),fc=d(Cr),ma=r(Cr,"SPAN",{});var _h=i(ma);gc=s(_h,"TFLayoutLMForMaskedLM"),_h.forEach(t),Cr.forEach(t),ar=d(o),we=r(o,"DIV",{class:!0});var Ze=i(we);w(Tn.$$.fragment,Ze),_c=d(Ze),Mn=r(Ze,"P",{});var Pr=i(Mn);yc=s(Pr,"LayoutLM Model with a "),fa=r(Pr,"CODE",{});var yh=i(fa);bc=s(yh,"language modeling"),yh.forEach(t),kc=s(Pr," head on top."),Pr.forEach(t),Lc=d(Ze),xn=r(Ze,"P",{});var Nr=i(xn);wc=s(Nr,"This model inherits from "),hs=r(Nr,"A",{href:!0});var bh=i(hs);vc=s(bh,"TFPreTrainedModel"),bh.forEach(t),Tc=s(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(t),Mc=d(Ze),jn=r(Ze,"P",{});var Ir=i(jn);xc=s(Ir,"This model is also a "),$n=r(Ir,"A",{href:!0,rel:!0});var kh=i($n);jc=s(kh,"tf.keras.Model"),kh.forEach(t),$c=s(Ir,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ir.forEach(t),Fc=d(Ze),w(oo.$$.fragment,Ze),zc=d(Ze),Oe=r(Ze,"DIV",{class:!0});var ut=i(Oe);w(Fn.$$.fragment,ut),Ec=d(ut),Ct=r(ut,"P",{});var zs=i(Ct);qc=s(zs,"The "),ms=r(zs,"A",{href:!0});var Lh=i(ms);Cc=s(Lh,"TFLayoutLMForMaskedLM"),Lh.forEach(t),Pc=s(zs," forward method, overrides the "),ga=r(zs,"CODE",{});var wh=i(ga);Nc=s(wh,"__call__"),wh.forEach(t),Ic=s(zs," special method."),zs.forEach(t),Sc=d(ut),w(no.$$.fragment,ut),Dc=d(ut),_a=r(ut,"P",{});var vh=i(_a);Ac=s(vh,"Examples:"),vh.forEach(t),Oc=d(ut),w(zn.$$.fragment,ut),ut.forEach(t),Ze.forEach(t),rr=d(o),Pt=r(o,"H2",{class:!0});var Sr=i(Pt);so=r(Sr,"A",{id:!0,class:!0,href:!0});var Th=i(so);ya=r(Th,"SPAN",{});var Mh=i(ya);w(En.$$.fragment,Mh),Mh.forEach(t),Th.forEach(t),Uc=d(Sr),ba=r(Sr,"SPAN",{});var xh=i(ba);Wc=s(xh,"TFLayoutLMForSequenceClassification"),xh.forEach(t),Sr.forEach(t),ir=d(o),ve=r(o,"DIV",{class:!0});var Ge=i(ve);w(qn.$$.fragment,Ge),Bc=d(Ge),ka=r(Ge,"P",{});var jh=i(ka);Hc=s(jh,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jh.forEach(t),Rc=d(Ge),Cn=r(Ge,"P",{});var Dr=i(Cn);Kc=s(Dr,"This model inherits from "),fs=r(Dr,"A",{href:!0});var $h=i(fs);Vc=s($h,"TFPreTrainedModel"),$h.forEach(t),Xc=s(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(t),Yc=d(Ge),Pn=r(Ge,"P",{});var Ar=i(Pn);Zc=s(Ar,"This model is also a "),Nn=r(Ar,"A",{href:!0,rel:!0});var Fh=i(Nn);Gc=s(Fh,"tf.keras.Model"),Fh.forEach(t),Jc=s(Ar,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ar.forEach(t),Qc=d(Ge),w(ao.$$.fragment,Ge),ep=d(Ge),Ue=r(Ge,"DIV",{class:!0});var ht=i(Ue);w(In.$$.fragment,ht),tp=d(ht),Nt=r(ht,"P",{});var Es=i(Nt);op=s(Es,"The "),gs=r(Es,"A",{href:!0});var zh=i(gs);np=s(zh,"TFLayoutLMForSequenceClassification"),zh.forEach(t),sp=s(Es," forward method, overrides the "),La=r(Es,"CODE",{});var Eh=i(La);ap=s(Eh,"__call__"),Eh.forEach(t),rp=s(Es," special method."),Es.forEach(t),ip=d(ht),w(ro.$$.fragment,ht),lp=d(ht),wa=r(ht,"P",{});var qh=i(wa);dp=s(qh,"Examples:"),qh.forEach(t),cp=d(ht),w(Sn.$$.fragment,ht),ht.forEach(t),Ge.forEach(t),lr=d(o),It=r(o,"H2",{class:!0});var Or=i(It);io=r(Or,"A",{id:!0,class:!0,href:!0});var Ch=i(io);va=r(Ch,"SPAN",{});var Ph=i(va);w(Dn.$$.fragment,Ph),Ph.forEach(t),Ch.forEach(t),pp=d(Or),Ta=r(Or,"SPAN",{});var Nh=i(Ta);up=s(Nh,"TFLayoutLMForTokenClassification"),Nh.forEach(t),Or.forEach(t),dr=d(o),Te=r(o,"DIV",{class:!0});var Je=i(Te);w(An.$$.fragment,Je),hp=d(Je),Ma=r(Je,"P",{});var Ih=i(Ma);mp=s(Ih,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ih.forEach(t),fp=d(Je),On=r(Je,"P",{});var Ur=i(On);gp=s(Ur,"This model inherits from "),_s=r(Ur,"A",{href:!0});var Sh=i(_s);_p=s(Sh,"TFPreTrainedModel"),Sh.forEach(t),yp=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),bp=d(Je),Un=r(Je,"P",{});var Wr=i(Un);kp=s(Wr,"This model is also a "),Wn=r(Wr,"A",{href:!0,rel:!0});var Dh=i(Wn);Lp=s(Dh,"tf.keras.Model"),Dh.forEach(t),wp=s(Wr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wr.forEach(t),vp=d(Je),w(lo.$$.fragment,Je),Tp=d(Je),We=r(Je,"DIV",{class:!0});var mt=i(We);w(Bn.$$.fragment,mt),Mp=d(mt),St=r(mt,"P",{});var qs=i(St);xp=s(qs,"The "),ys=r(qs,"A",{href:!0});var Ah=i(ys);jp=s(Ah,"TFLayoutLMForTokenClassification"),Ah.forEach(t),$p=s(qs," forward method, overrides the "),xa=r(qs,"CODE",{});var Oh=i(xa);Fp=s(Oh,"__call__"),Oh.forEach(t),zp=s(qs," special method."),qs.forEach(t),Ep=d(mt),w(co.$$.fragment,mt),qp=d(mt),ja=r(mt,"P",{});var Uh=i(ja);Cp=s(Uh,"Examples:"),Uh.forEach(t),Pp=d(mt),w(Hn.$$.fragment,mt),mt.forEach(t),Je.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(am)),c(g,"id","layoutlm"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#layoutlm"),c(f,"class","relative group"),c(z,"id","Overview"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(S,"class","relative group"),c(F,"href","https://arxiv.org/abs/1912.13318"),c(F,"rel","nofollow"),c(te,"href","https://guillaumejaume.github.io/FUNSD/"),c(te,"rel","nofollow"),c(oe,"href","https://rrc.cvc.uab.es/?ch=13"),c(oe,"rel","nofollow"),c(U,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(U,"rel","nofollow"),c(Yn,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),c(go,"href","https://github.com/tesseract-ocr/tesseract"),c(go,"rel","nofollow"),c(_o,"href","https://pypi.org/project/pytesseract/"),c(_o,"rel","nofollow"),c(Gn,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(ko,"href","https://guillaumejaume.github.io/FUNSD/"),c(ko,"rel","nofollow"),c(Lo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),c(Lo,"rel","nofollow"),c(wo,"href","https://huggingface.co/liminghao1630"),c(wo,"rel","nofollow"),c(vo,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),c(vo,"rel","nofollow"),c(At,"id","transformers.LayoutLMConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.LayoutLMConfig"),c(ft,"class","relative group"),c(Jn,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(xo,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),c(xo,"rel","nofollow"),c(Qn,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"),c(es,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"),c(qe,"class","docstring"),c(Ot,"id","transformers.LayoutLMTokenizer"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.LayoutLMTokenizer"),c(yt,"class","relative group"),c(ts,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),c(os,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),c(ns,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),c(Be,"class","docstring"),c(Wt,"id","transformers.LayoutLMTokenizerFast"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.LayoutLMTokenizerFast"),c(bt,"class","relative group"),c(ss,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),c(as,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizerFast"),c(rs,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizerFast"),c(He,"class","docstring"),c(Ht,"id","transformers.LayoutLMModel"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.LayoutLMModel"),c(kt,"class","relative group"),c(So,"href","https://arxiv.org/abs/1912.13318"),c(So,"rel","nofollow"),c(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ao,"rel","nofollow"),c(is,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(Ne,"class","docstring"),c(Re,"class","docstring"),c(Kt,"id","transformers.LayoutLMForMaskedLM"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.LayoutLMForMaskedLM"),c(wt,"class","relative group"),c(Ho,"href","https://arxiv.org/abs/1912.13318"),c(Ho,"rel","nofollow"),c(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ko,"rel","nofollow"),c(ls,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),c(Ie,"class","docstring"),c(Ke,"class","docstring"),c(Xt,"id","transformers.LayoutLMForSequenceClassification"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LayoutLMForSequenceClassification"),c(Mt,"class","relative group"),c(Jo,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(Jo,"rel","nofollow"),c(en,"href","https://arxiv.org/abs/1912.13318"),c(en,"rel","nofollow"),c(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(on,"rel","nofollow"),c(ds,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),c(Se,"class","docstring"),c(Ce,"class","docstring"),c(Zt,"id","transformers.LayoutLMForTokenClassification"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.LayoutLMForTokenClassification"),c(jt,"class","relative group"),c(ln,"href","https://guillaumejaume.github.io/FUNSD/"),c(ln,"rel","nofollow"),c(dn,"href","https://rrc.cvc.uab.es/?ch=13"),c(dn,"rel","nofollow"),c(pn,"href","https://arxiv.org/abs/1912.13318"),c(pn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(cs,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(De,"class","docstring"),c(Pe,"class","docstring"),c(Jt,"id","transformers.TFLayoutLMModel"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.TFLayoutLMModel"),c(zt,"class","relative group"),c(ps,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kn,"rel","nofollow"),c(us,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),c(Ae,"class","docstring"),c(Le,"class","docstring"),c(to,"id","transformers.TFLayoutLMForMaskedLM"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.TFLayoutLMForMaskedLM"),c(qt,"class","relative group"),c(hs,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($n,"rel","nofollow"),c(ms,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),c(Oe,"class","docstring"),c(we,"class","docstring"),c(so,"id","transformers.TFLayoutLMForSequenceClassification"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFLayoutLMForSequenceClassification"),c(Pt,"class","relative group"),c(fs,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nn,"rel","nofollow"),c(gs,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),c(Ue,"class","docstring"),c(ve,"class","docstring"),c(io,"id","transformers.TFLayoutLMForTokenClassification"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLayoutLMForTokenClassification"),c(It,"class","relative group"),c(_s,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wn,"rel","nofollow"),c(ys,"href","/docs/transformers/master/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),c(We,"class","docstring"),c(Te,"class","docstring")},m(o,m){e(document.head,h),u(o,j,m),u(o,f,m),e(f,g),e(g,b),v(y,b,null),e(f,_),e(f,$),e($,re),u(o,Y,m),u(o,z,m),u(o,ae,m),u(o,S,m),e(S,Z),e(Z,ne),v(A,ne,null),e(S,ie),e(S,se),e(se,J),u(o,D,m),u(o,G,m),e(G,Q),e(G,F),e(F,E),e(G,le),u(o,W,m),u(o,V,m),e(V,ee),e(ee,H),e(ee,te),e(te,de),e(ee,q),e(V,ce),e(V,O),e(O,pe),e(O,oe),e(oe,R),e(O,ue),e(V,he),e(V,P),e(P,me),e(P,U),e(U,fe),e(P,p),u(o,k,m),u(o,X,m),e(X,$e),u(o,Me,m),u(o,N,m),e(N,be),e(be,Fe),u(o,xe,m),u(o,I,m),e(I,K),u(o,je,m),u(o,ye,m),e(ye,C),e(C,ze),e(C,ke),e(ke,ge),e(C,Ee),e(C,Yn),e(Yn,Br),e(C,Hr),e(C,Cs),e(Cs,Rr),e(C,Kr),e(C,go),e(go,Vr),e(C,Xr),e(C,_o),e(_o,Yr),e(C,Zr),u(o,Sa,m),v(yo,o,m),u(o,Da,m),u(o,ot,m),e(ot,Gr),e(ot,Ps),e(Ps,Jr),e(ot,Qr),e(ot,Ns),e(Ns,ei),e(ot,ti),u(o,Aa,m),v(bo,o,m),u(o,Oa,m),u(o,Zn,m),e(Zn,et),e(et,oi),e(et,Gn),e(Gn,ni),e(et,si),e(et,ko),e(ko,ai),e(et,ri),e(et,Lo),e(Lo,ii),e(et,li),u(o,Ua,m),u(o,nt,m),e(nt,di),e(nt,wo),e(wo,ci),e(nt,pi),e(nt,vo),e(vo,ui),e(nt,hi),u(o,Wa,m),u(o,ft,m),e(ft,At),e(At,Is),v(To,Is,null),e(ft,mi),e(ft,Ss),e(Ss,fi),u(o,Ba,m),u(o,qe,m),v(Mo,qe,null),e(qe,gi),e(qe,gt),e(gt,_i),e(gt,Jn),e(Jn,yi),e(gt,bi),e(gt,xo),e(xo,ki),e(gt,Li),e(qe,wi),e(qe,_t),e(_t,vi),e(_t,Qn),e(Qn,Ti),e(_t,Mi),e(_t,es),e(es,xi),e(_t,ji),e(qe,$i),e(qe,Ds),e(Ds,Fi),e(qe,zi),v(jo,qe,null),u(o,Ha,m),u(o,yt,m),e(yt,Ot),e(Ot,As),v($o,As,null),e(yt,Ei),e(yt,Os),e(Os,qi),u(o,Ra,m),u(o,Be,m),v(Fo,Be,null),e(Be,Ci),e(Be,Us),e(Us,Pi),e(Be,Ni),e(Be,Ut),e(Ut,ts),e(ts,Ii),e(Ut,Si),e(Ut,os),e(os,Di),e(Ut,Ai),e(Be,Oi),e(Be,zo),e(zo,Ui),e(zo,ns),e(ns,Wi),e(zo,Bi),u(o,Ka,m),u(o,bt,m),e(bt,Wt),e(Wt,Ws),v(Eo,Ws,null),e(bt,Hi),e(bt,Bs),e(Bs,Ri),u(o,Va,m),u(o,He,m),v(qo,He,null),e(He,Ki),e(He,Hs),e(Hs,Vi),e(He,Xi),e(He,Bt),e(Bt,ss),e(ss,Yi),e(Bt,Zi),e(Bt,as),e(as,Gi),e(Bt,Ji),e(He,Qi),e(He,Co),e(Co,el),e(Co,rs),e(rs,tl),e(Co,ol),u(o,Xa,m),u(o,kt,m),e(kt,Ht),e(Ht,Rs),v(Po,Rs,null),e(kt,nl),e(kt,Ks),e(Ks,sl),u(o,Ya,m),u(o,Re,m),v(No,Re,null),e(Re,al),e(Re,Io),e(Io,rl),e(Io,So),e(So,il),e(Io,ll),e(Re,dl),e(Re,Do),e(Do,cl),e(Do,Ao),e(Ao,pl),e(Do,ul),e(Re,hl),e(Re,Ne),v(Oo,Ne,null),e(Ne,ml),e(Ne,Lt),e(Lt,fl),e(Lt,is),e(is,gl),e(Lt,_l),e(Lt,Vs),e(Vs,yl),e(Lt,bl),e(Ne,kl),v(Rt,Ne,null),e(Ne,Ll),e(Ne,Xs),e(Xs,wl),e(Ne,vl),v(Uo,Ne,null),u(o,Za,m),u(o,wt,m),e(wt,Kt),e(Kt,Ys),v(Wo,Ys,null),e(wt,Tl),e(wt,Zs),e(Zs,Ml),u(o,Ga,m),u(o,Ke,m),v(Bo,Ke,null),e(Ke,xl),e(Ke,vt),e(vt,jl),e(vt,Gs),e(Gs,$l),e(vt,Fl),e(vt,Ho),e(Ho,zl),e(vt,El),e(Ke,ql),e(Ke,Ro),e(Ro,Cl),e(Ro,Ko),e(Ko,Pl),e(Ro,Nl),e(Ke,Il),e(Ke,Ie),v(Vo,Ie,null),e(Ie,Sl),e(Ie,Tt),e(Tt,Dl),e(Tt,ls),e(ls,Al),e(Tt,Ol),e(Tt,Js),e(Js,Ul),e(Tt,Wl),e(Ie,Bl),v(Vt,Ie,null),e(Ie,Hl),e(Ie,Qs),e(Qs,Rl),e(Ie,Kl),v(Xo,Ie,null),u(o,Ja,m),u(o,Mt,m),e(Mt,Xt),e(Xt,ea),v(Yo,ea,null),e(Mt,Vl),e(Mt,ta),e(ta,Xl),u(o,Qa,m),u(o,Ce,m),v(Zo,Ce,null),e(Ce,Yl),e(Ce,Go),e(Go,Zl),e(Go,Jo),e(Jo,Gl),e(Go,Jl),e(Ce,Ql),e(Ce,Qo),e(Qo,ed),e(Qo,en),e(en,td),e(Qo,od),e(Ce,nd),e(Ce,tn),e(tn,sd),e(tn,on),e(on,ad),e(tn,rd),e(Ce,id),e(Ce,Se),v(nn,Se,null),e(Se,ld),e(Se,xt),e(xt,dd),e(xt,ds),e(ds,cd),e(xt,pd),e(xt,oa),e(oa,ud),e(xt,hd),e(Se,md),v(Yt,Se,null),e(Se,fd),e(Se,na),e(na,gd),e(Se,_d),v(sn,Se,null),u(o,er,m),u(o,jt,m),e(jt,Zt),e(Zt,sa),v(an,sa,null),e(jt,yd),e(jt,aa),e(aa,bd),u(o,tr,m),u(o,Pe,m),v(rn,Pe,null),e(Pe,kd),e(Pe,$t),e($t,Ld),e($t,ln),e(ln,wd),e($t,vd),e($t,dn),e(dn,Td),e($t,Md),e(Pe,xd),e(Pe,cn),e(cn,jd),e(cn,pn),e(pn,$d),e(cn,Fd),e(Pe,zd),e(Pe,un),e(un,Ed),e(un,hn),e(hn,qd),e(un,Cd),e(Pe,Pd),e(Pe,De),v(mn,De,null),e(De,Nd),e(De,Ft),e(Ft,Id),e(Ft,cs),e(cs,Sd),e(Ft,Dd),e(Ft,ra),e(ra,Ad),e(Ft,Od),e(De,Ud),v(Gt,De,null),e(De,Wd),e(De,ia),e(ia,Bd),e(De,Hd),v(fn,De,null),u(o,or,m),u(o,zt,m),e(zt,Jt),e(Jt,la),v(gn,la,null),e(zt,Rd),e(zt,da),e(da,Kd),u(o,nr,m),u(o,Le,m),v(_n,Le,null),e(Le,Vd),e(Le,ca),e(ca,Xd),e(Le,Yd),e(Le,yn),e(yn,Zd),e(yn,ps),e(ps,Gd),e(yn,Jd),e(Le,Qd),e(Le,bn),e(bn,ec),e(bn,kn),e(kn,tc),e(bn,oc),e(Le,nc),v(Qt,Le,null),e(Le,sc),e(Le,Ae),v(Ln,Ae,null),e(Ae,ac),e(Ae,Et),e(Et,rc),e(Et,us),e(us,ic),e(Et,lc),e(Et,pa),e(pa,dc),e(Et,cc),e(Ae,pc),v(eo,Ae,null),e(Ae,uc),e(Ae,ua),e(ua,hc),e(Ae,mc),v(wn,Ae,null),u(o,sr,m),u(o,qt,m),e(qt,to),e(to,ha),v(vn,ha,null),e(qt,fc),e(qt,ma),e(ma,gc),u(o,ar,m),u(o,we,m),v(Tn,we,null),e(we,_c),e(we,Mn),e(Mn,yc),e(Mn,fa),e(fa,bc),e(Mn,kc),e(we,Lc),e(we,xn),e(xn,wc),e(xn,hs),e(hs,vc),e(xn,Tc),e(we,Mc),e(we,jn),e(jn,xc),e(jn,$n),e($n,jc),e(jn,$c),e(we,Fc),v(oo,we,null),e(we,zc),e(we,Oe),v(Fn,Oe,null),e(Oe,Ec),e(Oe,Ct),e(Ct,qc),e(Ct,ms),e(ms,Cc),e(Ct,Pc),e(Ct,ga),e(ga,Nc),e(Ct,Ic),e(Oe,Sc),v(no,Oe,null),e(Oe,Dc),e(Oe,_a),e(_a,Ac),e(Oe,Oc),v(zn,Oe,null),u(o,rr,m),u(o,Pt,m),e(Pt,so),e(so,ya),v(En,ya,null),e(Pt,Uc),e(Pt,ba),e(ba,Wc),u(o,ir,m),u(o,ve,m),v(qn,ve,null),e(ve,Bc),e(ve,ka),e(ka,Hc),e(ve,Rc),e(ve,Cn),e(Cn,Kc),e(Cn,fs),e(fs,Vc),e(Cn,Xc),e(ve,Yc),e(ve,Pn),e(Pn,Zc),e(Pn,Nn),e(Nn,Gc),e(Pn,Jc),e(ve,Qc),v(ao,ve,null),e(ve,ep),e(ve,Ue),v(In,Ue,null),e(Ue,tp),e(Ue,Nt),e(Nt,op),e(Nt,gs),e(gs,np),e(Nt,sp),e(Nt,La),e(La,ap),e(Nt,rp),e(Ue,ip),v(ro,Ue,null),e(Ue,lp),e(Ue,wa),e(wa,dp),e(Ue,cp),v(Sn,Ue,null),u(o,lr,m),u(o,It,m),e(It,io),e(io,va),v(Dn,va,null),e(It,pp),e(It,Ta),e(Ta,up),u(o,dr,m),u(o,Te,m),v(An,Te,null),e(Te,hp),e(Te,Ma),e(Ma,mp),e(Te,fp),e(Te,On),e(On,gp),e(On,_s),e(_s,_p),e(On,yp),e(Te,bp),e(Te,Un),e(Un,kp),e(Un,Wn),e(Wn,Lp),e(Un,wp),e(Te,vp),v(lo,Te,null),e(Te,Tp),e(Te,We),v(Bn,We,null),e(We,Mp),e(We,St),e(St,xp),e(St,ys),e(ys,jp),e(St,$p),e(St,xa),e(xa,Fp),e(St,zp),e(We,Ep),v(co,We,null),e(We,qp),e(We,ja),e(ja,Cp),e(We,Pp),v(Hn,We,null),cr=!0},p(o,[m]){const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:o}),Rt.$set(Rn);const $a={};m&2&&($a.$$scope={dirty:m,ctx:o}),Vt.$set($a);const Fa={};m&2&&(Fa.$$scope={dirty:m,ctx:o}),Yt.$set(Fa);const za={};m&2&&(za.$$scope={dirty:m,ctx:o}),Gt.$set(za);const Kn={};m&2&&(Kn.$$scope={dirty:m,ctx:o}),Qt.$set(Kn);const Ea={};m&2&&(Ea.$$scope={dirty:m,ctx:o}),eo.$set(Ea);const qa={};m&2&&(qa.$$scope={dirty:m,ctx:o}),oo.$set(qa);const Ca={};m&2&&(Ca.$$scope={dirty:m,ctx:o}),no.$set(Ca);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:o}),ao.$set(Vn);const Pa={};m&2&&(Pa.$$scope={dirty:m,ctx:o}),ro.$set(Pa);const Dt={};m&2&&(Dt.$$scope={dirty:m,ctx:o}),lo.$set(Dt);const Xn={};m&2&&(Xn.$$scope={dirty:m,ctx:o}),co.$set(Xn)},i(o){cr||(T(y.$$.fragment,o),T(A.$$.fragment,o),T(yo.$$.fragment,o),T(bo.$$.fragment,o),T(To.$$.fragment,o),T(Mo.$$.fragment,o),T(jo.$$.fragment,o),T($o.$$.fragment,o),T(Fo.$$.fragment,o),T(Eo.$$.fragment,o),T(qo.$$.fragment,o),T(Po.$$.fragment,o),T(No.$$.fragment,o),T(Oo.$$.fragment,o),T(Rt.$$.fragment,o),T(Uo.$$.fragment,o),T(Wo.$$.fragment,o),T(Bo.$$.fragment,o),T(Vo.$$.fragment,o),T(Vt.$$.fragment,o),T(Xo.$$.fragment,o),T(Yo.$$.fragment,o),T(Zo.$$.fragment,o),T(nn.$$.fragment,o),T(Yt.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(mn.$$.fragment,o),T(Gt.$$.fragment,o),T(fn.$$.fragment,o),T(gn.$$.fragment,o),T(_n.$$.fragment,o),T(Qt.$$.fragment,o),T(Ln.$$.fragment,o),T(eo.$$.fragment,o),T(wn.$$.fragment,o),T(vn.$$.fragment,o),T(Tn.$$.fragment,o),T(oo.$$.fragment,o),T(Fn.$$.fragment,o),T(no.$$.fragment,o),T(zn.$$.fragment,o),T(En.$$.fragment,o),T(qn.$$.fragment,o),T(ao.$$.fragment,o),T(In.$$.fragment,o),T(ro.$$.fragment,o),T(Sn.$$.fragment,o),T(Dn.$$.fragment,o),T(An.$$.fragment,o),T(lo.$$.fragment,o),T(Bn.$$.fragment,o),T(co.$$.fragment,o),T(Hn.$$.fragment,o),cr=!0)},o(o){M(y.$$.fragment,o),M(A.$$.fragment,o),M(yo.$$.fragment,o),M(bo.$$.fragment,o),M(To.$$.fragment,o),M(Mo.$$.fragment,o),M(jo.$$.fragment,o),M($o.$$.fragment,o),M(Fo.$$.fragment,o),M(Eo.$$.fragment,o),M(qo.$$.fragment,o),M(Po.$$.fragment,o),M(No.$$.fragment,o),M(Oo.$$.fragment,o),M(Rt.$$.fragment,o),M(Uo.$$.fragment,o),M(Wo.$$.fragment,o),M(Bo.$$.fragment,o),M(Vo.$$.fragment,o),M(Vt.$$.fragment,o),M(Xo.$$.fragment,o),M(Yo.$$.fragment,o),M(Zo.$$.fragment,o),M(nn.$$.fragment,o),M(Yt.$$.fragment,o),M(sn.$$.fragment,o),M(an.$$.fragment,o),M(rn.$$.fragment,o),M(mn.$$.fragment,o),M(Gt.$$.fragment,o),M(fn.$$.fragment,o),M(gn.$$.fragment,o),M(_n.$$.fragment,o),M(Qt.$$.fragment,o),M(Ln.$$.fragment,o),M(eo.$$.fragment,o),M(wn.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(oo.$$.fragment,o),M(Fn.$$.fragment,o),M(no.$$.fragment,o),M(zn.$$.fragment,o),M(En.$$.fragment,o),M(qn.$$.fragment,o),M(ao.$$.fragment,o),M(In.$$.fragment,o),M(ro.$$.fragment,o),M(Sn.$$.fragment,o),M(Dn.$$.fragment,o),M(An.$$.fragment,o),M(lo.$$.fragment,o),M(Bn.$$.fragment,o),M(co.$$.fragment,o),M(Hn.$$.fragment,o),cr=!1},d(o){t(h),o&&t(j),o&&t(f),x(y),o&&t(Y),o&&t(z),o&&t(ae),o&&t(S),x(A),o&&t(D),o&&t(G),o&&t(W),o&&t(V),o&&t(k),o&&t(X),o&&t(Me),o&&t(N),o&&t(xe),o&&t(I),o&&t(je),o&&t(ye),o&&t(Sa),x(yo,o),o&&t(Da),o&&t(ot),o&&t(Aa),x(bo,o),o&&t(Oa),o&&t(Zn),o&&t(Ua),o&&t(nt),o&&t(Wa),o&&t(ft),x(To),o&&t(Ba),o&&t(qe),x(Mo),x(jo),o&&t(Ha),o&&t(yt),x($o),o&&t(Ra),o&&t(Be),x(Fo),o&&t(Ka),o&&t(bt),x(Eo),o&&t(Va),o&&t(He),x(qo),o&&t(Xa),o&&t(kt),x(Po),o&&t(Ya),o&&t(Re),x(No),x(Oo),x(Rt),x(Uo),o&&t(Za),o&&t(wt),x(Wo),o&&t(Ga),o&&t(Ke),x(Bo),x(Vo),x(Vt),x(Xo),o&&t(Ja),o&&t(Mt),x(Yo),o&&t(Qa),o&&t(Ce),x(Zo),x(nn),x(Yt),x(sn),o&&t(er),o&&t(jt),x(an),o&&t(tr),o&&t(Pe),x(rn),x(mn),x(Gt),x(fn),o&&t(or),o&&t(zt),x(gn),o&&t(nr),o&&t(Le),x(_n),x(Qt),x(Ln),x(eo),x(wn),o&&t(sr),o&&t(qt),x(vn),o&&t(ar),o&&t(we),x(Tn),x(oo),x(Fn),x(no),x(zn),o&&t(rr),o&&t(Pt),x(En),o&&t(ir),o&&t(ve),x(qn),x(ao),x(In),x(ro),x(Sn),o&&t(lr),o&&t(It),x(Dn),o&&t(dr),o&&t(Te),x(An),x(lo),x(Bn),x(co),x(Hn)}}}const am={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function rm(B,h,j){let{fw:f}=h;return B.$$set=g=>{"fw"in g&&j(0,f=g.fw)},[f]}class hm extends Wh{constructor(h){super();Bh(this,h,rm,sm,Hh,{fw:0})}}export{hm as default,am as metadata};
