import{S as Wh,i as Hh,s as Bh,e as a,k as l,w as L,t as n,M as Rh,c as r,d as o,m as d,a as i,x as w,h as s,b as c,F as e,g as u,y as T,q as v,o as M,B as x,v as Kh}from"../../chunks/vendor-6b77c823.js";import{T as Qe}from"../../chunks/Tip-39098574.js";import{D as _e}from"../../chunks/Docstring-53452dc4.js";import{C as oo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ve}from"../../chunks/IconCopyLink-7a11ce68.js";function Vh(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function Xh(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function Yh(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function Zh(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function Gh(K){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,D,ie,se,J,O,G,Q,F,E,le,W,V,ee,H,oe,de,q,ce,A,pe,te,B,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),O=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),B=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(o),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(o),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(N,"CODE",{});var Fe=i(D);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(N,"."),N.forEach(o),J=d(p),O=r(p,"P",{});var xe=i(O);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var R=i(E);le=s(R,"a single Tensor with "),W=r(R,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(o),ee=s(R," only and nothing else: "),H=r(R,"CODE",{});var ye=i(H);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),R.forEach(o),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(C,"CODE",{});var ze=i(A);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(C," or "),B=r(C,"CODE",{});var ke=i(B);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),C.forEach(o),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),S.forEach(o)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,D),e(D,ie),e(z,se),u(p,J,k),u(p,O,k),e(O,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,oe),e(F,de),e(F,q),e(q,ce),e(q,A),e(A,pe),e(q,te),e(q,B),e(B,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&o(h),p&&o(f),p&&o(g),p&&o(Y),p&&o(z),p&&o(J),p&&o(O),p&&o(Q),p&&o(F)}}}function Jh(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function Qh(K){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,D,ie,se,J,O,G,Q,F,E,le,W,V,ee,H,oe,de,q,ce,A,pe,te,B,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),O=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),B=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(o),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(o),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(N,"CODE",{});var Fe=i(D);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(N,"."),N.forEach(o),J=d(p),O=r(p,"P",{});var xe=i(O);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var R=i(E);le=s(R,"a single Tensor with "),W=r(R,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(o),ee=s(R," only and nothing else: "),H=r(R,"CODE",{});var ye=i(H);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),R.forEach(o),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(C,"CODE",{});var ze=i(A);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(C," or "),B=r(C,"CODE",{});var ke=i(B);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),C.forEach(o),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),S.forEach(o)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,D),e(D,ie),e(z,se),u(p,J,k),u(p,O,k),e(O,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,oe),e(F,de),e(F,q),e(q,ce),e(q,A),e(A,pe),e(q,te),e(q,B),e(B,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&o(h),p&&o(f),p&&o(g),p&&o(Y),p&&o(z),p&&o(J),p&&o(O),p&&o(Q),p&&o(F)}}}function em(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function om(K){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,D,ie,se,J,O,G,Q,F,E,le,W,V,ee,H,oe,de,q,ce,A,pe,te,B,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),O=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),B=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(o),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(o),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(N,"CODE",{});var Fe=i(D);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(N,"."),N.forEach(o),J=d(p),O=r(p,"P",{});var xe=i(O);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var R=i(E);le=s(R,"a single Tensor with "),W=r(R,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(o),ee=s(R," only and nothing else: "),H=r(R,"CODE",{});var ye=i(H);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),R.forEach(o),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(C,"CODE",{});var ze=i(A);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(C," or "),B=r(C,"CODE",{});var ke=i(B);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),C.forEach(o),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),S.forEach(o)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,D),e(D,ie),e(z,se),u(p,J,k),u(p,O,k),e(O,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,oe),e(F,de),e(F,q),e(q,ce),e(q,A),e(A,pe),e(q,te),e(q,B),e(B,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&o(h),p&&o(f),p&&o(g),p&&o(Y),p&&o(z),p&&o(J),p&&o(O),p&&o(Q),p&&o(F)}}}function tm(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function nm(K){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,D,ie,se,J,O,G,Q,F,E,le,W,V,ee,H,oe,de,q,ce,A,pe,te,B,ue,he,P,me,U,fe;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),b=a("li"),y=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),z=a("p"),ae=n("This second option is useful when using "),I=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),ie=n("model(inputs)"),se=n("."),J=l(),O=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=l(),F=a("ul"),E=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),de=l(),q=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),B=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=l(),P=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);$=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(o),f=d(p),g=r(p,"UL",{});var X=i(g);b=r(X,"LI",{});var $e=i(b);y=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(o),_=d(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=d(p),z=r(p,"P",{});var N=i(z);ae=s(N,"This second option is useful when using "),I=r(N,"CODE",{});var be=i(I);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(N,"CODE",{});var Fe=i(D);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(N,"."),N.forEach(o),J=d(p),O=r(p,"P",{});var xe=i(O);G=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),Q=d(p),F=r(p,"UL",{});var S=i(F);E=r(S,"LI",{});var R=i(E);le=s(R,"a single Tensor with "),W=r(R,"CODE",{});var je=i(W);V=s(je,"input_ids"),je.forEach(o),ee=s(R," only and nothing else: "),H=r(R,"CODE",{});var ye=i(H);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),R.forEach(o),de=d(S),q=r(S,"LI",{});var C=i(q);ce=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(C,"CODE",{});var ze=i(A);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(C," or "),B=r(C,"CODE",{});var ke=i(B);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),C.forEach(o),he=d(S),P=r(S,"LI",{});var ge=i(P);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ge,"CODE",{});var Ee=i(U);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),S.forEach(o)},m(p,k){u(p,h,k),e(h,$),u(p,f,k),u(p,g,k),e(g,b),e(b,y),e(g,_),e(g,j),e(j,re),u(p,Y,k),u(p,z,k),e(z,ae),e(z,I),e(I,Z),e(z,ne),e(z,D),e(D,ie),e(z,se),u(p,J,k),u(p,O,k),e(O,G),u(p,Q,k),u(p,F,k),e(F,E),e(E,le),e(E,W),e(W,V),e(E,ee),e(E,H),e(H,oe),e(F,de),e(F,q),e(q,ce),e(q,A),e(A,pe),e(q,te),e(q,B),e(B,ue),e(F,he),e(F,P),e(P,me),e(P,U),e(U,fe)},d(p){p&&o(h),p&&o(f),p&&o(g),p&&o(Y),p&&o(z),p&&o(J),p&&o(O),p&&o(Q),p&&o(F)}}}function sm(K){let h,$,f,g,b;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){h=r(y,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var j=i(f);g=s(j,"Module"),j.forEach(o),b=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(y,_){u(y,h,_),e(h,$),e(h,f),e(f,g),e(h,b)},d(y){y&&o(h)}}}function am(K){let h,$,f,g,b,y,_,j,re,Y,z,ae,I,Z,ne,D,ie,se,J,O,G,Q,F,E,le,W,V,ee,H,oe,de,q,ce,A,pe,te,B,ue,he,P,me,U,fe,p,k,X,$e,Me,N,be,Fe,xe,S,R,je,ye,C,ze,ke,ge,Ee,Yn,Hr,Br,Cs,Rr,Kr,gt,Vr,Xr,_t,Yr,Zr,Ia,yt,Oa,to,Gr,Ps,Jr,Qr,Ns,ei,oi,Da,bt,Aa,Zn,eo,ti,Gn,ni,si,kt,ai,ri,Lt,ii,li,Ua,no,di,wt,ci,pi,Tt,ui,hi,Wa,go,Ao,Ss,vt,mi,Is,fi,Ha,qe,Mt,gi,_o,_i,Jn,yi,bi,xt,ki,Li,wi,yo,Ti,Qn,vi,Mi,es,xi,ji,$i,Os,Fi,zi,jt,Ba,bo,Uo,Ds,$t,Ei,As,qi,Ra,He,Ft,Ci,Us,Pi,Ni,Wo,os,Si,Ii,ts,Oi,Di,Ai,zt,Ui,ns,Wi,Hi,Ka,ko,Ho,Ws,Et,Bi,Hs,Ri,Va,Be,qt,Ki,Bs,Vi,Xi,Bo,ss,Yi,Zi,as,Gi,Ji,Qi,Ct,el,rs,ol,tl,Xa,Lo,Ro,Rs,Pt,nl,Ks,sl,Ya,Re,Nt,al,St,rl,It,il,ll,dl,Ot,cl,Dt,pl,ul,hl,Ne,At,ml,wo,fl,is,gl,_l,Vs,yl,bl,kl,Ko,Ll,Xs,wl,Tl,Ut,Za,To,Vo,Ys,Wt,vl,Zs,Ml,Ga,Ke,Ht,xl,vo,jl,Gs,$l,Fl,Bt,zl,El,ql,Rt,Cl,Kt,Pl,Nl,Sl,Se,Vt,Il,Mo,Ol,ls,Dl,Al,Js,Ul,Wl,Hl,Xo,Bl,Qs,Rl,Kl,Xt,Ja,xo,Yo,ea,Yt,Vl,oa,Xl,Qa,Ce,Zt,Yl,Gt,Zl,Jt,Gl,Jl,Ql,Qt,ed,en,od,td,nd,on,sd,tn,ad,rd,id,Ie,nn,ld,jo,dd,ds,cd,pd,ta,ud,hd,md,Zo,fd,na,gd,_d,sn,er,$o,Go,sa,an,yd,aa,bd,or,Pe,rn,kd,Fo,Ld,ln,wd,Td,dn,vd,Md,xd,cn,jd,pn,$d,Fd,zd,un,Ed,hn,qd,Cd,Pd,Oe,mn,Nd,zo,Sd,cs,Id,Od,ra,Dd,Ad,Ud,Jo,Wd,ia,Hd,Bd,fn,tr,Eo,Qo,la,gn,Rd,da,Kd,nr,Le,_n,Vd,ca,Xd,Yd,yn,Zd,ps,Gd,Jd,Qd,bn,ec,kn,oc,tc,nc,et,sc,De,Ln,ac,qo,rc,us,ic,lc,pa,dc,cc,pc,ot,uc,ua,hc,mc,wn,sr,Co,tt,ha,Tn,fc,ma,gc,ar,we,vn,_c,Mn,yc,fa,bc,kc,Lc,xn,wc,hs,Tc,vc,Mc,jn,xc,$n,jc,$c,Fc,nt,zc,Ae,Fn,Ec,Po,qc,ms,Cc,Pc,ga,Nc,Sc,Ic,st,Oc,_a,Dc,Ac,zn,rr,No,at,ya,En,Uc,ba,Wc,ir,Te,qn,Hc,ka,Bc,Rc,Cn,Kc,fs,Vc,Xc,Yc,Pn,Zc,Nn,Gc,Jc,Qc,rt,ep,Ue,Sn,op,So,tp,gs,np,sp,La,ap,rp,ip,it,lp,wa,dp,cp,In,lr,Io,lt,Ta,On,pp,va,up,dr,ve,Dn,hp,Ma,mp,fp,An,gp,_s,_p,yp,bp,Un,kp,Wn,Lp,wp,Tp,dt,vp,We,Hn,Mp,Oo,xp,ys,jp,$p,xa,Fp,zp,Ep,ct,qp,ja,Cp,Pp,Bn,cr;return y=new Ve({}),D=new Ve({}),yt=new oo({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),bt=new oo({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),vt=new Ve({}),Mt=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/configuration_layoutlm.py#L35"}}),jt=new oo({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$t=new Ve({}),Ft=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm.py#L46"}}),Et=new Ve({}),qt=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L51"}}),Pt=new Ve({}),Nt=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L702"}}),At=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L728",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new Qe({props:{$$slots:{default:[Vh]},$$scope:{ctx:K}}}),Ut=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Wt=new Ve({}),Ht=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L850"}}),Vt=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L869",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Xo=new Qe({props:{$$slots:{default:[Xh]},$$scope:{ctx:K}}}),Xt=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),Yt=new Ve({}),Zt=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L979"}}),nn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L993",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Zo=new Qe({props:{$$slots:{default:[Yh]},$$scope:{ctx:K}}}),sn=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),an=new Ve({}),rn=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1116"}}),mn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Jo=new Qe({props:{$$slots:{default:[Zh]},$$scope:{ctx:K}}}),fn=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gn=new Ve({}),_n=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L904"}}),et=new Qe({props:{$$slots:{default:[Gh]},$$scope:{ctx:K}}}),Ln=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L910",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ot=new Qe({props:{$$slots:{default:[Jh]},$$scope:{ctx:K}}}),wn=new oo({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tn=new Ve({}),vn=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1004"}}),nt=new Qe({props:{$$slots:{default:[Qh]},$$scope:{ctx:K}}}),Fn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1032",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),st=new Qe({props:{$$slots:{default:[em]},$$scope:{ctx:K}}}),zn=new oo({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),En=new Ve({}),qn=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1137"}}),rt=new Qe({props:{$$slots:{default:[om]},$$scope:{ctx:K}}}),Sn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1155",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new Qe({props:{$$slots:{default:[tm]},$$scope:{ctx:K}}}),In=new oo({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),On=new Ve({}),Dn=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1261"}}),dt=new Qe({props:{$$slots:{default:[nm]},$$scope:{ctx:K}}}),Hn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1285",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ct=new Qe({props:{$$slots:{default:[sm]},$$scope:{ctx:K}}}),Bn=new oo({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("meta"),$=l(),f=a("h1"),g=a("a"),b=a("span"),L(y.$$.fragment),_=l(),j=a("span"),re=n("LayoutLM"),Y=l(),z=a("a"),ae=l(),I=a("h2"),Z=a("a"),ne=a("span"),L(D.$$.fragment),ie=l(),se=a("span"),J=n("Overview"),O=l(),G=a("p"),Q=n("The LayoutLM model was proposed in the paper "),F=a("a"),E=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),le=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),W=l(),V=a("ul"),ee=a("li"),H=n("form understanding: the "),oe=a("a"),de=n("FUNSD"),q=n(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ce=l(),A=a("li"),pe=n("receipt understanding: the "),te=a("a"),B=n("SROIE"),ue=n(` dataset (a collection of 626 receipts for
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
(from 93.07 to 94.42).`),xe=l(),S=a("p"),R=n("Tips:"),je=l(),ye=a("ul"),C=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),Yn=a("a"),Hr=n("forward()"),Br=n(" also expects the input "),Cs=a("code"),Rr=n("bbox"),Kr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),gt=a("a"),Vr=n("Tesseract"),Xr=n(" (there\u2019s a "),_t=a("a"),Yr=n("Python wrapper"),Zr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Ia=l(),L(yt.$$.fragment),Oa=l(),to=a("p"),Gr=n("Here, "),Ps=a("code"),Jr=n("width"),Qr=n(" and "),Ns=a("code"),ei=n("height"),oi=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Da=l(),L(bt.$$.fragment),Aa=l(),Zn=a("ul"),eo=a("li"),ti=n("For a demo which shows how to fine-tune "),Gn=a("a"),ni=n("LayoutLMForTokenClassification"),si=n(" on the "),kt=a("a"),ai=n("FUNSD dataset"),ri=n(" (a collection of annotated forms), see "),Lt=a("a"),ii=n("this notebook"),li=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Ua=l(),no=a("p"),di=n("This model was contributed by "),wt=a("a"),ci=n("liminghao1630"),pi=n(`. The original code can be found
`),Tt=a("a"),ui=n("here"),hi=n("."),Wa=l(),go=a("h2"),Ao=a("a"),Ss=a("span"),L(vt.$$.fragment),mi=l(),Is=a("span"),fi=n("LayoutLMConfig"),Ha=l(),qe=a("div"),L(Mt.$$.fragment),gi=l(),_o=a("p"),_i=n("This is the configuration class to store the configuration of a "),Jn=a("a"),yi=n("LayoutLMModel"),bi=n(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),xt=a("a"),ki=n("layoutlm-base-uncased"),Li=n(" architecture."),wi=l(),yo=a("p"),Ti=n("Configuration objects inherit from "),Qn=a("a"),vi=n("BertConfig"),Mi=n(` and can be used to control the model outputs. Read the
documentation from `),es=a("a"),xi=n("BertConfig"),ji=n(" for more information."),$i=l(),Os=a("p"),Fi=n("Examples:"),zi=l(),L(jt.$$.fragment),Ba=l(),bo=a("h2"),Uo=a("a"),Ds=a("span"),L($t.$$.fragment),Ei=l(),As=a("span"),qi=n("LayoutLMTokenizer"),Ra=l(),He=a("div"),L(Ft.$$.fragment),Ci=l(),Us=a("p"),Pi=n("Constructs a LayoutLM tokenizer."),Ni=l(),Wo=a("p"),os=a("a"),Si=n("LayoutLMTokenizer"),Ii=n(" is identical to "),ts=a("a"),Oi=n("BertTokenizer"),Di=n(` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Ai=l(),zt=a("p"),Ui=n("Refer to superclass "),ns=a("a"),Wi=n("BertTokenizer"),Hi=n(" for usage examples and documentation concerning parameters."),Ka=l(),ko=a("h2"),Ho=a("a"),Ws=a("span"),L(Et.$$.fragment),Bi=l(),Hs=a("span"),Ri=n("LayoutLMTokenizerFast"),Va=l(),Be=a("div"),L(qt.$$.fragment),Ki=l(),Bs=a("p"),Vi=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Xi=l(),Bo=a("p"),ss=a("a"),Yi=n("LayoutLMTokenizerFast"),Zi=n(" is identical to "),as=a("a"),Gi=n("BertTokenizerFast"),Ji=n(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Qi=l(),Ct=a("p"),el=n("Refer to superclass "),rs=a("a"),ol=n("BertTokenizerFast"),tl=n(" for usage examples and documentation concerning parameters."),Xa=l(),Lo=a("h2"),Ro=a("a"),Rs=a("span"),L(Pt.$$.fragment),nl=l(),Ks=a("span"),sl=n("LayoutLMModel"),Ya=l(),Re=a("div"),L(Nt.$$.fragment),al=l(),St=a("p"),rl=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),It=a("a"),il=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),ll=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),dl=l(),Ot=a("p"),cl=n("This model is a PyTorch "),Dt=a("a"),pl=n("torch.nn.Module"),ul=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hl=l(),Ne=a("div"),L(At.$$.fragment),ml=l(),wo=a("p"),fl=n("The "),is=a("a"),gl=n("LayoutLMModel"),_l=n(" forward method, overrides the "),Vs=a("code"),yl=n("__call__"),bl=n(" special method."),kl=l(),L(Ko.$$.fragment),Ll=l(),Xs=a("p"),wl=n("Examples:"),Tl=l(),L(Ut.$$.fragment),Za=l(),To=a("h2"),Vo=a("a"),Ys=a("span"),L(Wt.$$.fragment),vl=l(),Zs=a("span"),Ml=n("LayoutLMForMaskedLM"),Ga=l(),Ke=a("div"),L(Ht.$$.fragment),xl=l(),vo=a("p"),jl=n("LayoutLM Model with a "),Gs=a("code"),$l=n("language modeling"),Fl=n(` head on top.
The LayoutLM model was proposed in `),Bt=a("a"),zl=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),El=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),ql=l(),Rt=a("p"),Cl=n("This model is a PyTorch "),Kt=a("a"),Pl=n("torch.nn.Module"),Nl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sl=l(),Se=a("div"),L(Vt.$$.fragment),Il=l(),Mo=a("p"),Ol=n("The "),ls=a("a"),Dl=n("LayoutLMForMaskedLM"),Al=n(" forward method, overrides the "),Js=a("code"),Ul=n("__call__"),Wl=n(" special method."),Hl=l(),L(Xo.$$.fragment),Bl=l(),Qs=a("p"),Rl=n("Examples:"),Kl=l(),L(Xt.$$.fragment),Ja=l(),xo=a("h2"),Yo=a("a"),ea=a("span"),L(Yt.$$.fragment),Vl=l(),oa=a("span"),Xl=n("LayoutLMForSequenceClassification"),Qa=l(),Ce=a("div"),L(Zt.$$.fragment),Yl=l(),Gt=a("p"),Zl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Jt=a("a"),Gl=n("RVL-CDIP"),Jl=n(" dataset."),Ql=l(),Qt=a("p"),ed=n("The LayoutLM model was proposed in "),en=a("a"),od=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),td=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),nd=l(),on=a("p"),sd=n("This model is a PyTorch "),tn=a("a"),ad=n("torch.nn.Module"),rd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),id=l(),Ie=a("div"),L(nn.$$.fragment),ld=l(),jo=a("p"),dd=n("The "),ds=a("a"),cd=n("LayoutLMForSequenceClassification"),pd=n(" forward method, overrides the "),ta=a("code"),ud=n("__call__"),hd=n(" special method."),md=l(),L(Zo.$$.fragment),fd=l(),na=a("p"),gd=n("Examples:"),_d=l(),L(sn.$$.fragment),er=l(),$o=a("h2"),Go=a("a"),sa=a("span"),L(an.$$.fragment),yd=l(),aa=a("span"),bd=n("LayoutLMForTokenClassification"),or=l(),Pe=a("div"),L(rn.$$.fragment),kd=l(),Fo=a("p"),Ld=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),ln=a("a"),wd=n("FUNSD"),Td=n(`
dataset and the `),dn=a("a"),vd=n("SROIE"),Md=n(" dataset."),xd=l(),cn=a("p"),jd=n("The LayoutLM model was proposed in "),pn=a("a"),$d=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Fd=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),zd=l(),un=a("p"),Ed=n("This model is a PyTorch "),hn=a("a"),qd=n("torch.nn.Module"),Cd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pd=l(),Oe=a("div"),L(mn.$$.fragment),Nd=l(),zo=a("p"),Sd=n("The "),cs=a("a"),Id=n("LayoutLMForTokenClassification"),Od=n(" forward method, overrides the "),ra=a("code"),Dd=n("__call__"),Ad=n(" special method."),Ud=l(),L(Jo.$$.fragment),Wd=l(),ia=a("p"),Hd=n("Examples:"),Bd=l(),L(fn.$$.fragment),tr=l(),Eo=a("h2"),Qo=a("a"),la=a("span"),L(gn.$$.fragment),Rd=l(),da=a("span"),Kd=n("TFLayoutLMModel"),nr=l(),Le=a("div"),L(_n.$$.fragment),Vd=l(),ca=a("p"),Xd=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Yd=l(),yn=a("p"),Zd=n("This model inherits from "),ps=a("a"),Gd=n("TFPreTrainedModel"),Jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd=l(),bn=a("p"),ec=n("This model is also a "),kn=a("a"),oc=n("tf.keras.Model"),tc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc=l(),L(et.$$.fragment),sc=l(),De=a("div"),L(Ln.$$.fragment),ac=l(),qo=a("p"),rc=n("The "),us=a("a"),ic=n("TFLayoutLMModel"),lc=n(" forward method, overrides the "),pa=a("code"),dc=n("__call__"),cc=n(" special method."),pc=l(),L(ot.$$.fragment),uc=l(),ua=a("p"),hc=n("Examples:"),mc=l(),L(wn.$$.fragment),sr=l(),Co=a("h2"),tt=a("a"),ha=a("span"),L(Tn.$$.fragment),fc=l(),ma=a("span"),gc=n("TFLayoutLMForMaskedLM"),ar=l(),we=a("div"),L(vn.$$.fragment),_c=l(),Mn=a("p"),yc=n("LayoutLM Model with a "),fa=a("code"),bc=n("language modeling"),kc=n(" head on top."),Lc=l(),xn=a("p"),wc=n("This model inherits from "),hs=a("a"),Tc=n("TFPreTrainedModel"),vc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mc=l(),jn=a("p"),xc=n("This model is also a "),$n=a("a"),jc=n("tf.keras.Model"),$c=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc=l(),L(nt.$$.fragment),zc=l(),Ae=a("div"),L(Fn.$$.fragment),Ec=l(),Po=a("p"),qc=n("The "),ms=a("a"),Cc=n("TFLayoutLMForMaskedLM"),Pc=n(" forward method, overrides the "),ga=a("code"),Nc=n("__call__"),Sc=n(" special method."),Ic=l(),L(st.$$.fragment),Oc=l(),_a=a("p"),Dc=n("Examples:"),Ac=l(),L(zn.$$.fragment),rr=l(),No=a("h2"),at=a("a"),ya=a("span"),L(En.$$.fragment),Uc=l(),ba=a("span"),Wc=n("TFLayoutLMForSequenceClassification"),ir=l(),Te=a("div"),L(qn.$$.fragment),Hc=l(),ka=a("p"),Bc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rc=l(),Cn=a("p"),Kc=n("This model inherits from "),fs=a("a"),Vc=n("TFPreTrainedModel"),Xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc=l(),Pn=a("p"),Zc=n("This model is also a "),Nn=a("a"),Gc=n("tf.keras.Model"),Jc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qc=l(),L(rt.$$.fragment),ep=l(),Ue=a("div"),L(Sn.$$.fragment),op=l(),So=a("p"),tp=n("The "),gs=a("a"),np=n("TFLayoutLMForSequenceClassification"),sp=n(" forward method, overrides the "),La=a("code"),ap=n("__call__"),rp=n(" special method."),ip=l(),L(it.$$.fragment),lp=l(),wa=a("p"),dp=n("Examples:"),cp=l(),L(In.$$.fragment),lr=l(),Io=a("h2"),lt=a("a"),Ta=a("span"),L(On.$$.fragment),pp=l(),va=a("span"),up=n("TFLayoutLMForTokenClassification"),dr=l(),ve=a("div"),L(Dn.$$.fragment),hp=l(),Ma=a("p"),mp=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fp=l(),An=a("p"),gp=n("This model inherits from "),_s=a("a"),_p=n("TFPreTrainedModel"),yp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp=l(),Un=a("p"),kp=n("This model is also a "),Wn=a("a"),Lp=n("tf.keras.Model"),wp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp=l(),L(dt.$$.fragment),vp=l(),We=a("div"),L(Hn.$$.fragment),Mp=l(),Oo=a("p"),xp=n("The "),ys=a("a"),jp=n("TFLayoutLMForTokenClassification"),$p=n(" forward method, overrides the "),xa=a("code"),Fp=n("__call__"),zp=n(" special method."),Ep=l(),L(ct.$$.fragment),qp=l(),ja=a("p"),Cp=n("Examples:"),Pp=l(),L(Bn.$$.fragment),this.h()},l(t){const m=Rh('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(o),$=d(t),f=r(t,"H1",{class:!0});var Rn=i(f);g=r(Rn,"A",{id:!0,class:!0,href:!0});var $a=i(g);b=r($a,"SPAN",{});var Fa=i(b);w(y.$$.fragment,Fa),Fa.forEach(o),$a.forEach(o),_=d(Rn),j=r(Rn,"SPAN",{});var za=i(j);re=s(za,"LayoutLM"),za.forEach(o),Rn.forEach(o),Y=d(t),z=r(t,"A",{id:!0}),i(z).forEach(o),ae=d(t),I=r(t,"H2",{class:!0});var Kn=i(I);Z=r(Kn,"A",{id:!0,class:!0,href:!0});var Ea=i(Z);ne=r(Ea,"SPAN",{});var qa=i(ne);w(D.$$.fragment,qa),qa.forEach(o),Ea.forEach(o),ie=d(Kn),se=r(Kn,"SPAN",{});var Ca=i(se);J=s(Ca,"Overview"),Ca.forEach(o),Kn.forEach(o),O=d(t),G=r(t,"P",{});var Vn=i(G);Q=s(Vn,"The LayoutLM model was proposed in the paper "),F=r(Vn,"A",{href:!0,rel:!0});var Pa=i(F);E=s(Pa,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Pa.forEach(o),le=s(Vn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Vn.forEach(o),W=d(t),V=r(t,"UL",{});var Do=i(V);ee=r(Do,"LI",{});var Xn=i(ee);H=s(Xn,"form understanding: the "),oe=r(Xn,"A",{href:!0,rel:!0});var Np=i(oe);de=s(Np,"FUNSD"),Np.forEach(o),q=s(Xn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Xn.forEach(o),ce=d(Do),A=r(Do,"LI",{});var pr=i(A);pe=s(pr,"receipt understanding: the "),te=r(pr,"A",{href:!0,rel:!0});var Sp=i(te);B=s(Sp,"SROIE"),Sp.forEach(o),ue=s(pr,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),pr.forEach(o),he=d(Do),P=r(Do,"LI",{});var ur=i(P);me=s(ur,"document image classification: the "),U=r(ur,"A",{href:!0,rel:!0});var Ip=i(U);fe=s(Ip,"RVL-CDIP"),Ip.forEach(o),p=s(ur,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ur.forEach(o),Do.forEach(o),k=d(t),X=r(t,"P",{});var Op=i(X);$e=s(Op,"The abstract from the paper is the following:"),Op.forEach(o),Me=d(t),N=r(t,"P",{});var Dp=i(N);be=r(Dp,"EM",{});var Ap=i(be);Fe=s(Ap,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Ap.forEach(o),Dp.forEach(o),xe=d(t),S=r(t,"P",{});var Up=i(S);R=s(Up,"Tips:"),Up.forEach(o),je=d(t),ye=r(t,"UL",{});var Wp=i(ye);C=r(Wp,"LI",{});var Xe=i(C);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var Hp=i(ke);ge=s(Hp,"input_ids"),Hp.forEach(o),Ee=s(Xe,", "),Yn=r(Xe,"A",{href:!0});var Bp=i(Yn);Hr=s(Bp,"forward()"),Bp.forEach(o),Br=s(Xe," also expects the input "),Cs=r(Xe,"CODE",{});var Rp=i(Cs);Rr=s(Rp,"bbox"),Rp.forEach(o),Kr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),gt=r(Xe,"A",{href:!0,rel:!0});var Kp=i(gt);Vr=s(Kp,"Tesseract"),Kp.forEach(o),Xr=s(Xe," (there\u2019s a "),_t=r(Xe,"A",{href:!0,rel:!0});var Vp=i(_t);Yr=s(Vp,"Python wrapper"),Vp.forEach(o),Zr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(o),Wp.forEach(o),Ia=d(t),w(yt.$$.fragment,t),Oa=d(t),to=r(t,"P",{});var bs=i(to);Gr=s(bs,"Here, "),Ps=r(bs,"CODE",{});var Xp=i(Ps);Jr=s(Xp,"width"),Xp.forEach(o),Qr=s(bs," and "),Ns=r(bs,"CODE",{});var Yp=i(Ns);ei=s(Yp,"height"),Yp.forEach(o),oi=s(bs,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),bs.forEach(o),Da=d(t),w(bt.$$.fragment,t),Aa=d(t),Zn=r(t,"UL",{});var Zp=i(Zn);eo=r(Zp,"LI",{});var pt=i(eo);ti=s(pt,"For a demo which shows how to fine-tune "),Gn=r(pt,"A",{href:!0});var Gp=i(Gn);ni=s(Gp,"LayoutLMForTokenClassification"),Gp.forEach(o),si=s(pt," on the "),kt=r(pt,"A",{href:!0,rel:!0});var Jp=i(kt);ai=s(Jp,"FUNSD dataset"),Jp.forEach(o),ri=s(pt," (a collection of annotated forms), see "),Lt=r(pt,"A",{href:!0,rel:!0});var Qp=i(Lt);ii=s(Qp,"this notebook"),Qp.forEach(o),li=s(pt,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),pt.forEach(o),Zp.forEach(o),Ua=d(t),no=r(t,"P",{});var ks=i(no);di=s(ks,"This model was contributed by "),wt=r(ks,"A",{href:!0,rel:!0});var eu=i(wt);ci=s(eu,"liminghao1630"),eu.forEach(o),pi=s(ks,`. The original code can be found
`),Tt=r(ks,"A",{href:!0,rel:!0});var ou=i(Tt);ui=s(ou,"here"),ou.forEach(o),hi=s(ks,"."),ks.forEach(o),Wa=d(t),go=r(t,"H2",{class:!0});var hr=i(go);Ao=r(hr,"A",{id:!0,class:!0,href:!0});var tu=i(Ao);Ss=r(tu,"SPAN",{});var nu=i(Ss);w(vt.$$.fragment,nu),nu.forEach(o),tu.forEach(o),mi=d(hr),Is=r(hr,"SPAN",{});var su=i(Is);fi=s(su,"LayoutLMConfig"),su.forEach(o),hr.forEach(o),Ha=d(t),qe=r(t,"DIV",{class:!0});var so=i(qe);w(Mt.$$.fragment,so),gi=d(so),_o=r(so,"P",{});var Ls=i(_o);_i=s(Ls,"This is the configuration class to store the configuration of a "),Jn=r(Ls,"A",{href:!0});var au=i(Jn);yi=s(au,"LayoutLMModel"),au.forEach(o),bi=s(Ls,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),xt=r(Ls,"A",{href:!0,rel:!0});var ru=i(xt);ki=s(ru,"layoutlm-base-uncased"),ru.forEach(o),Li=s(Ls," architecture."),Ls.forEach(o),wi=d(so),yo=r(so,"P",{});var ws=i(yo);Ti=s(ws,"Configuration objects inherit from "),Qn=r(ws,"A",{href:!0});var iu=i(Qn);vi=s(iu,"BertConfig"),iu.forEach(o),Mi=s(ws,` and can be used to control the model outputs. Read the
documentation from `),es=r(ws,"A",{href:!0});var lu=i(es);xi=s(lu,"BertConfig"),lu.forEach(o),ji=s(ws," for more information."),ws.forEach(o),$i=d(so),Os=r(so,"P",{});var du=i(Os);Fi=s(du,"Examples:"),du.forEach(o),zi=d(so),w(jt.$$.fragment,so),so.forEach(o),Ba=d(t),bo=r(t,"H2",{class:!0});var mr=i(bo);Uo=r(mr,"A",{id:!0,class:!0,href:!0});var cu=i(Uo);Ds=r(cu,"SPAN",{});var pu=i(Ds);w($t.$$.fragment,pu),pu.forEach(o),cu.forEach(o),Ei=d(mr),As=r(mr,"SPAN",{});var uu=i(As);qi=s(uu,"LayoutLMTokenizer"),uu.forEach(o),mr.forEach(o),Ra=d(t),He=r(t,"DIV",{class:!0});var ut=i(He);w(Ft.$$.fragment,ut),Ci=d(ut),Us=r(ut,"P",{});var hu=i(Us);Pi=s(hu,"Constructs a LayoutLM tokenizer."),hu.forEach(o),Ni=d(ut),Wo=r(ut,"P",{});var Na=i(Wo);os=r(Na,"A",{href:!0});var mu=i(os);Si=s(mu,"LayoutLMTokenizer"),mu.forEach(o),Ii=s(Na," is identical to "),ts=r(Na,"A",{href:!0});var fu=i(ts);Oi=s(fu,"BertTokenizer"),fu.forEach(o),Di=s(Na,` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Na.forEach(o),Ai=d(ut),zt=r(ut,"P",{});var fr=i(zt);Ui=s(fr,"Refer to superclass "),ns=r(fr,"A",{href:!0});var gu=i(ns);Wi=s(gu,"BertTokenizer"),gu.forEach(o),Hi=s(fr," for usage examples and documentation concerning parameters."),fr.forEach(o),ut.forEach(o),Ka=d(t),ko=r(t,"H2",{class:!0});var gr=i(ko);Ho=r(gr,"A",{id:!0,class:!0,href:!0});var _u=i(Ho);Ws=r(_u,"SPAN",{});var yu=i(Ws);w(Et.$$.fragment,yu),yu.forEach(o),_u.forEach(o),Bi=d(gr),Hs=r(gr,"SPAN",{});var bu=i(Hs);Ri=s(bu,"LayoutLMTokenizerFast"),bu.forEach(o),gr.forEach(o),Va=d(t),Be=r(t,"DIV",{class:!0});var ht=i(Be);w(qt.$$.fragment,ht),Ki=d(ht),Bs=r(ht,"P",{});var ku=i(Bs);Vi=s(ku,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),ku.forEach(o),Xi=d(ht),Bo=r(ht,"P",{});var Sa=i(Bo);ss=r(Sa,"A",{href:!0});var Lu=i(ss);Yi=s(Lu,"LayoutLMTokenizerFast"),Lu.forEach(o),Zi=s(Sa," is identical to "),as=r(Sa,"A",{href:!0});var wu=i(as);Gi=s(wu,"BertTokenizerFast"),wu.forEach(o),Ji=s(Sa,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Sa.forEach(o),Qi=d(ht),Ct=r(ht,"P",{});var _r=i(Ct);el=s(_r,"Refer to superclass "),rs=r(_r,"A",{href:!0});var Tu=i(rs);ol=s(Tu,"BertTokenizerFast"),Tu.forEach(o),tl=s(_r," for usage examples and documentation concerning parameters."),_r.forEach(o),ht.forEach(o),Xa=d(t),Lo=r(t,"H2",{class:!0});var yr=i(Lo);Ro=r(yr,"A",{id:!0,class:!0,href:!0});var vu=i(Ro);Rs=r(vu,"SPAN",{});var Mu=i(Rs);w(Pt.$$.fragment,Mu),Mu.forEach(o),vu.forEach(o),nl=d(yr),Ks=r(yr,"SPAN",{});var xu=i(Ks);sl=s(xu,"LayoutLMModel"),xu.forEach(o),yr.forEach(o),Ya=d(t),Re=r(t,"DIV",{class:!0});var mt=i(Re);w(Nt.$$.fragment,mt),al=d(mt),St=r(mt,"P",{});var br=i(St);rl=s(br,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),It=r(br,"A",{href:!0,rel:!0});var ju=i(It);il=s(ju,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),ju.forEach(o),ll=s(br,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),br.forEach(o),dl=d(mt),Ot=r(mt,"P",{});var kr=i(Ot);cl=s(kr,"This model is a PyTorch "),Dt=r(kr,"A",{href:!0,rel:!0});var $u=i(Dt);pl=s($u,"torch.nn.Module"),$u.forEach(o),ul=s(kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(o),hl=d(mt),Ne=r(mt,"DIV",{class:!0});var ao=i(Ne);w(At.$$.fragment,ao),ml=d(ao),wo=r(ao,"P",{});var Ts=i(wo);fl=s(Ts,"The "),is=r(Ts,"A",{href:!0});var Fu=i(is);gl=s(Fu,"LayoutLMModel"),Fu.forEach(o),_l=s(Ts," forward method, overrides the "),Vs=r(Ts,"CODE",{});var zu=i(Vs);yl=s(zu,"__call__"),zu.forEach(o),bl=s(Ts," special method."),Ts.forEach(o),kl=d(ao),w(Ko.$$.fragment,ao),Ll=d(ao),Xs=r(ao,"P",{});var Eu=i(Xs);wl=s(Eu,"Examples:"),Eu.forEach(o),Tl=d(ao),w(Ut.$$.fragment,ao),ao.forEach(o),mt.forEach(o),Za=d(t),To=r(t,"H2",{class:!0});var Lr=i(To);Vo=r(Lr,"A",{id:!0,class:!0,href:!0});var qu=i(Vo);Ys=r(qu,"SPAN",{});var Cu=i(Ys);w(Wt.$$.fragment,Cu),Cu.forEach(o),qu.forEach(o),vl=d(Lr),Zs=r(Lr,"SPAN",{});var Pu=i(Zs);Ml=s(Pu,"LayoutLMForMaskedLM"),Pu.forEach(o),Lr.forEach(o),Ga=d(t),Ke=r(t,"DIV",{class:!0});var ft=i(Ke);w(Ht.$$.fragment,ft),xl=d(ft),vo=r(ft,"P",{});var vs=i(vo);jl=s(vs,"LayoutLM Model with a "),Gs=r(vs,"CODE",{});var Nu=i(Gs);$l=s(Nu,"language modeling"),Nu.forEach(o),Fl=s(vs,` head on top.
The LayoutLM model was proposed in `),Bt=r(vs,"A",{href:!0,rel:!0});var Su=i(Bt);zl=s(Su,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Su.forEach(o),El=s(vs,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),vs.forEach(o),ql=d(ft),Rt=r(ft,"P",{});var wr=i(Rt);Cl=s(wr,"This model is a PyTorch "),Kt=r(wr,"A",{href:!0,rel:!0});var Iu=i(Kt);Pl=s(Iu,"torch.nn.Module"),Iu.forEach(o),Nl=s(wr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wr.forEach(o),Sl=d(ft),Se=r(ft,"DIV",{class:!0});var ro=i(Se);w(Vt.$$.fragment,ro),Il=d(ro),Mo=r(ro,"P",{});var Ms=i(Mo);Ol=s(Ms,"The "),ls=r(Ms,"A",{href:!0});var Ou=i(ls);Dl=s(Ou,"LayoutLMForMaskedLM"),Ou.forEach(o),Al=s(Ms," forward method, overrides the "),Js=r(Ms,"CODE",{});var Du=i(Js);Ul=s(Du,"__call__"),Du.forEach(o),Wl=s(Ms," special method."),Ms.forEach(o),Hl=d(ro),w(Xo.$$.fragment,ro),Bl=d(ro),Qs=r(ro,"P",{});var Au=i(Qs);Rl=s(Au,"Examples:"),Au.forEach(o),Kl=d(ro),w(Xt.$$.fragment,ro),ro.forEach(o),ft.forEach(o),Ja=d(t),xo=r(t,"H2",{class:!0});var Tr=i(xo);Yo=r(Tr,"A",{id:!0,class:!0,href:!0});var Uu=i(Yo);ea=r(Uu,"SPAN",{});var Wu=i(ea);w(Yt.$$.fragment,Wu),Wu.forEach(o),Uu.forEach(o),Vl=d(Tr),oa=r(Tr,"SPAN",{});var Hu=i(oa);Xl=s(Hu,"LayoutLMForSequenceClassification"),Hu.forEach(o),Tr.forEach(o),Qa=d(t),Ce=r(t,"DIV",{class:!0});var io=i(Ce);w(Zt.$$.fragment,io),Yl=d(io),Gt=r(io,"P",{});var vr=i(Gt);Zl=s(vr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Jt=r(vr,"A",{href:!0,rel:!0});var Bu=i(Jt);Gl=s(Bu,"RVL-CDIP"),Bu.forEach(o),Jl=s(vr," dataset."),vr.forEach(o),Ql=d(io),Qt=r(io,"P",{});var Mr=i(Qt);ed=s(Mr,"The LayoutLM model was proposed in "),en=r(Mr,"A",{href:!0,rel:!0});var Ru=i(en);od=s(Ru,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Ru.forEach(o),td=s(Mr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Mr.forEach(o),nd=d(io),on=r(io,"P",{});var xr=i(on);sd=s(xr,"This model is a PyTorch "),tn=r(xr,"A",{href:!0,rel:!0});var Ku=i(tn);ad=s(Ku,"torch.nn.Module"),Ku.forEach(o),rd=s(xr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xr.forEach(o),id=d(io),Ie=r(io,"DIV",{class:!0});var lo=i(Ie);w(nn.$$.fragment,lo),ld=d(lo),jo=r(lo,"P",{});var xs=i(jo);dd=s(xs,"The "),ds=r(xs,"A",{href:!0});var Vu=i(ds);cd=s(Vu,"LayoutLMForSequenceClassification"),Vu.forEach(o),pd=s(xs," forward method, overrides the "),ta=r(xs,"CODE",{});var Xu=i(ta);ud=s(Xu,"__call__"),Xu.forEach(o),hd=s(xs," special method."),xs.forEach(o),md=d(lo),w(Zo.$$.fragment,lo),fd=d(lo),na=r(lo,"P",{});var Yu=i(na);gd=s(Yu,"Examples:"),Yu.forEach(o),_d=d(lo),w(sn.$$.fragment,lo),lo.forEach(o),io.forEach(o),er=d(t),$o=r(t,"H2",{class:!0});var jr=i($o);Go=r(jr,"A",{id:!0,class:!0,href:!0});var Zu=i(Go);sa=r(Zu,"SPAN",{});var Gu=i(sa);w(an.$$.fragment,Gu),Gu.forEach(o),Zu.forEach(o),yd=d(jr),aa=r(jr,"SPAN",{});var Ju=i(aa);bd=s(Ju,"LayoutLMForTokenClassification"),Ju.forEach(o),jr.forEach(o),or=d(t),Pe=r(t,"DIV",{class:!0});var co=i(Pe);w(rn.$$.fragment,co),kd=d(co),Fo=r(co,"P",{});var js=i(Fo);Ld=s(js,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),ln=r(js,"A",{href:!0,rel:!0});var Qu=i(ln);wd=s(Qu,"FUNSD"),Qu.forEach(o),Td=s(js,`
dataset and the `),dn=r(js,"A",{href:!0,rel:!0});var eh=i(dn);vd=s(eh,"SROIE"),eh.forEach(o),Md=s(js," dataset."),js.forEach(o),xd=d(co),cn=r(co,"P",{});var $r=i(cn);jd=s($r,"The LayoutLM model was proposed in "),pn=r($r,"A",{href:!0,rel:!0});var oh=i(pn);$d=s(oh,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),oh.forEach(o),Fd=s($r,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),$r.forEach(o),zd=d(co),un=r(co,"P",{});var Fr=i(un);Ed=s(Fr,"This model is a PyTorch "),hn=r(Fr,"A",{href:!0,rel:!0});var th=i(hn);qd=s(th,"torch.nn.Module"),th.forEach(o),Cd=s(Fr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fr.forEach(o),Pd=d(co),Oe=r(co,"DIV",{class:!0});var po=i(Oe);w(mn.$$.fragment,po),Nd=d(po),zo=r(po,"P",{});var $s=i(zo);Sd=s($s,"The "),cs=r($s,"A",{href:!0});var nh=i(cs);Id=s(nh,"LayoutLMForTokenClassification"),nh.forEach(o),Od=s($s," forward method, overrides the "),ra=r($s,"CODE",{});var sh=i(ra);Dd=s(sh,"__call__"),sh.forEach(o),Ad=s($s," special method."),$s.forEach(o),Ud=d(po),w(Jo.$$.fragment,po),Wd=d(po),ia=r(po,"P",{});var ah=i(ia);Hd=s(ah,"Examples:"),ah.forEach(o),Bd=d(po),w(fn.$$.fragment,po),po.forEach(o),co.forEach(o),tr=d(t),Eo=r(t,"H2",{class:!0});var zr=i(Eo);Qo=r(zr,"A",{id:!0,class:!0,href:!0});var rh=i(Qo);la=r(rh,"SPAN",{});var ih=i(la);w(gn.$$.fragment,ih),ih.forEach(o),rh.forEach(o),Rd=d(zr),da=r(zr,"SPAN",{});var lh=i(da);Kd=s(lh,"TFLayoutLMModel"),lh.forEach(o),zr.forEach(o),nr=d(t),Le=r(t,"DIV",{class:!0});var Ye=i(Le);w(_n.$$.fragment,Ye),Vd=d(Ye),ca=r(Ye,"P",{});var dh=i(ca);Xd=s(dh,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),dh.forEach(o),Yd=d(Ye),yn=r(Ye,"P",{});var Er=i(yn);Zd=s(Er,"This model inherits from "),ps=r(Er,"A",{href:!0});var ch=i(ps);Gd=s(ch,"TFPreTrainedModel"),ch.forEach(o),Jd=s(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(o),Qd=d(Ye),bn=r(Ye,"P",{});var qr=i(bn);ec=s(qr,"This model is also a "),kn=r(qr,"A",{href:!0,rel:!0});var ph=i(kn);oc=s(ph,"tf.keras.Model"),ph.forEach(o),tc=s(qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qr.forEach(o),nc=d(Ye),w(et.$$.fragment,Ye),sc=d(Ye),De=r(Ye,"DIV",{class:!0});var uo=i(De);w(Ln.$$.fragment,uo),ac=d(uo),qo=r(uo,"P",{});var Fs=i(qo);rc=s(Fs,"The "),us=r(Fs,"A",{href:!0});var uh=i(us);ic=s(uh,"TFLayoutLMModel"),uh.forEach(o),lc=s(Fs," forward method, overrides the "),pa=r(Fs,"CODE",{});var hh=i(pa);dc=s(hh,"__call__"),hh.forEach(o),cc=s(Fs," special method."),Fs.forEach(o),pc=d(uo),w(ot.$$.fragment,uo),uc=d(uo),ua=r(uo,"P",{});var mh=i(ua);hc=s(mh,"Examples:"),mh.forEach(o),mc=d(uo),w(wn.$$.fragment,uo),uo.forEach(o),Ye.forEach(o),sr=d(t),Co=r(t,"H2",{class:!0});var Cr=i(Co);tt=r(Cr,"A",{id:!0,class:!0,href:!0});var fh=i(tt);ha=r(fh,"SPAN",{});var gh=i(ha);w(Tn.$$.fragment,gh),gh.forEach(o),fh.forEach(o),fc=d(Cr),ma=r(Cr,"SPAN",{});var _h=i(ma);gc=s(_h,"TFLayoutLMForMaskedLM"),_h.forEach(o),Cr.forEach(o),ar=d(t),we=r(t,"DIV",{class:!0});var Ze=i(we);w(vn.$$.fragment,Ze),_c=d(Ze),Mn=r(Ze,"P",{});var Pr=i(Mn);yc=s(Pr,"LayoutLM Model with a "),fa=r(Pr,"CODE",{});var yh=i(fa);bc=s(yh,"language modeling"),yh.forEach(o),kc=s(Pr," head on top."),Pr.forEach(o),Lc=d(Ze),xn=r(Ze,"P",{});var Nr=i(xn);wc=s(Nr,"This model inherits from "),hs=r(Nr,"A",{href:!0});var bh=i(hs);Tc=s(bh,"TFPreTrainedModel"),bh.forEach(o),vc=s(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(o),Mc=d(Ze),jn=r(Ze,"P",{});var Sr=i(jn);xc=s(Sr,"This model is also a "),$n=r(Sr,"A",{href:!0,rel:!0});var kh=i($n);jc=s(kh,"tf.keras.Model"),kh.forEach(o),$c=s(Sr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sr.forEach(o),Fc=d(Ze),w(nt.$$.fragment,Ze),zc=d(Ze),Ae=r(Ze,"DIV",{class:!0});var ho=i(Ae);w(Fn.$$.fragment,ho),Ec=d(ho),Po=r(ho,"P",{});var zs=i(Po);qc=s(zs,"The "),ms=r(zs,"A",{href:!0});var Lh=i(ms);Cc=s(Lh,"TFLayoutLMForMaskedLM"),Lh.forEach(o),Pc=s(zs," forward method, overrides the "),ga=r(zs,"CODE",{});var wh=i(ga);Nc=s(wh,"__call__"),wh.forEach(o),Sc=s(zs," special method."),zs.forEach(o),Ic=d(ho),w(st.$$.fragment,ho),Oc=d(ho),_a=r(ho,"P",{});var Th=i(_a);Dc=s(Th,"Examples:"),Th.forEach(o),Ac=d(ho),w(zn.$$.fragment,ho),ho.forEach(o),Ze.forEach(o),rr=d(t),No=r(t,"H2",{class:!0});var Ir=i(No);at=r(Ir,"A",{id:!0,class:!0,href:!0});var vh=i(at);ya=r(vh,"SPAN",{});var Mh=i(ya);w(En.$$.fragment,Mh),Mh.forEach(o),vh.forEach(o),Uc=d(Ir),ba=r(Ir,"SPAN",{});var xh=i(ba);Wc=s(xh,"TFLayoutLMForSequenceClassification"),xh.forEach(o),Ir.forEach(o),ir=d(t),Te=r(t,"DIV",{class:!0});var Ge=i(Te);w(qn.$$.fragment,Ge),Hc=d(Ge),ka=r(Ge,"P",{});var jh=i(ka);Bc=s(jh,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jh.forEach(o),Rc=d(Ge),Cn=r(Ge,"P",{});var Or=i(Cn);Kc=s(Or,"This model inherits from "),fs=r(Or,"A",{href:!0});var $h=i(fs);Vc=s($h,"TFPreTrainedModel"),$h.forEach(o),Xc=s(Or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or.forEach(o),Yc=d(Ge),Pn=r(Ge,"P",{});var Dr=i(Pn);Zc=s(Dr,"This model is also a "),Nn=r(Dr,"A",{href:!0,rel:!0});var Fh=i(Nn);Gc=s(Fh,"tf.keras.Model"),Fh.forEach(o),Jc=s(Dr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dr.forEach(o),Qc=d(Ge),w(rt.$$.fragment,Ge),ep=d(Ge),Ue=r(Ge,"DIV",{class:!0});var mo=i(Ue);w(Sn.$$.fragment,mo),op=d(mo),So=r(mo,"P",{});var Es=i(So);tp=s(Es,"The "),gs=r(Es,"A",{href:!0});var zh=i(gs);np=s(zh,"TFLayoutLMForSequenceClassification"),zh.forEach(o),sp=s(Es," forward method, overrides the "),La=r(Es,"CODE",{});var Eh=i(La);ap=s(Eh,"__call__"),Eh.forEach(o),rp=s(Es," special method."),Es.forEach(o),ip=d(mo),w(it.$$.fragment,mo),lp=d(mo),wa=r(mo,"P",{});var qh=i(wa);dp=s(qh,"Examples:"),qh.forEach(o),cp=d(mo),w(In.$$.fragment,mo),mo.forEach(o),Ge.forEach(o),lr=d(t),Io=r(t,"H2",{class:!0});var Ar=i(Io);lt=r(Ar,"A",{id:!0,class:!0,href:!0});var Ch=i(lt);Ta=r(Ch,"SPAN",{});var Ph=i(Ta);w(On.$$.fragment,Ph),Ph.forEach(o),Ch.forEach(o),pp=d(Ar),va=r(Ar,"SPAN",{});var Nh=i(va);up=s(Nh,"TFLayoutLMForTokenClassification"),Nh.forEach(o),Ar.forEach(o),dr=d(t),ve=r(t,"DIV",{class:!0});var Je=i(ve);w(Dn.$$.fragment,Je),hp=d(Je),Ma=r(Je,"P",{});var Sh=i(Ma);mp=s(Sh,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sh.forEach(o),fp=d(Je),An=r(Je,"P",{});var Ur=i(An);gp=s(Ur,"This model inherits from "),_s=r(Ur,"A",{href:!0});var Ih=i(_s);_p=s(Ih,"TFPreTrainedModel"),Ih.forEach(o),yp=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(o),bp=d(Je),Un=r(Je,"P",{});var Wr=i(Un);kp=s(Wr,"This model is also a "),Wn=r(Wr,"A",{href:!0,rel:!0});var Oh=i(Wn);Lp=s(Oh,"tf.keras.Model"),Oh.forEach(o),wp=s(Wr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wr.forEach(o),Tp=d(Je),w(dt.$$.fragment,Je),vp=d(Je),We=r(Je,"DIV",{class:!0});var fo=i(We);w(Hn.$$.fragment,fo),Mp=d(fo),Oo=r(fo,"P",{});var qs=i(Oo);xp=s(qs,"The "),ys=r(qs,"A",{href:!0});var Dh=i(ys);jp=s(Dh,"TFLayoutLMForTokenClassification"),Dh.forEach(o),$p=s(qs," forward method, overrides the "),xa=r(qs,"CODE",{});var Ah=i(xa);Fp=s(Ah,"__call__"),Ah.forEach(o),zp=s(qs," special method."),qs.forEach(o),Ep=d(fo),w(ct.$$.fragment,fo),qp=d(fo),ja=r(fo,"P",{});var Uh=i(ja);Cp=s(Uh,"Examples:"),Uh.forEach(o),Pp=d(fo),w(Bn.$$.fragment,fo),fo.forEach(o),Je.forEach(o),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(rm)),c(g,"id","layoutlm"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#layoutlm"),c(f,"class","relative group"),c(z,"id","Overview"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(I,"class","relative group"),c(F,"href","https://arxiv.org/abs/1912.13318"),c(F,"rel","nofollow"),c(oe,"href","https://guillaumejaume.github.io/FUNSD/"),c(oe,"rel","nofollow"),c(te,"href","https://rrc.cvc.uab.es/?ch=13"),c(te,"rel","nofollow"),c(U,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(U,"rel","nofollow"),c(Yn,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),c(gt,"href","https://github.com/tesseract-ocr/tesseract"),c(gt,"rel","nofollow"),c(_t,"href","https://pypi.org/project/pytesseract/"),c(_t,"rel","nofollow"),c(Gn,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(kt,"href","https://guillaumejaume.github.io/FUNSD/"),c(kt,"rel","nofollow"),c(Lt,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),c(Lt,"rel","nofollow"),c(wt,"href","https://huggingface.co/liminghao1630"),c(wt,"rel","nofollow"),c(Tt,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),c(Tt,"rel","nofollow"),c(Ao,"id","transformers.LayoutLMConfig"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.LayoutLMConfig"),c(go,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(xt,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),c(xt,"rel","nofollow"),c(Qn,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),c(es,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Uo,"id","transformers.LayoutLMTokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.LayoutLMTokenizer"),c(bo,"class","relative group"),c(os,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),c(ts,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(ns,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ho,"id","transformers.LayoutLMTokenizerFast"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.LayoutLMTokenizerFast"),c(ko,"class","relative group"),c(ss,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),c(as,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(rs,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ro,"id","transformers.LayoutLMModel"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.LayoutLMModel"),c(Lo,"class","relative group"),c(It,"href","https://arxiv.org/abs/1912.13318"),c(It,"rel","nofollow"),c(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dt,"rel","nofollow"),c(is,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.LayoutLMForMaskedLM"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.LayoutLMForMaskedLM"),c(To,"class","relative group"),c(Bt,"href","https://arxiv.org/abs/1912.13318"),c(Bt,"rel","nofollow"),c(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Kt,"rel","nofollow"),c(ls,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yo,"id","transformers.LayoutLMForSequenceClassification"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.LayoutLMForSequenceClassification"),c(xo,"class","relative group"),c(Jt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),c(Jt,"rel","nofollow"),c(en,"href","https://arxiv.org/abs/1912.13318"),c(en,"rel","nofollow"),c(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(tn,"rel","nofollow"),c(ds,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Go,"id","transformers.LayoutLMForTokenClassification"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.LayoutLMForTokenClassification"),c($o,"class","relative group"),c(ln,"href","https://guillaumejaume.github.io/FUNSD/"),c(ln,"rel","nofollow"),c(dn,"href","https://rrc.cvc.uab.es/?ch=13"),c(dn,"rel","nofollow"),c(pn,"href","https://arxiv.org/abs/1912.13318"),c(pn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qo,"id","transformers.TFLayoutLMModel"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.TFLayoutLMModel"),c(Eo,"class","relative group"),c(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kn,"rel","nofollow"),c(us,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(tt,"id","transformers.TFLayoutLMForMaskedLM"),c(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tt,"href","#transformers.TFLayoutLMForMaskedLM"),c(Co,"class","relative group"),c(hs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($n,"rel","nofollow"),c(ms,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(at,"id","transformers.TFLayoutLMForSequenceClassification"),c(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(at,"href","#transformers.TFLayoutLMForSequenceClassification"),c(No,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nn,"rel","nofollow"),c(gs,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(lt,"id","transformers.TFLayoutLMForTokenClassification"),c(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lt,"href","#transformers.TFLayoutLMForTokenClassification"),c(Io,"class","relative group"),c(_s,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wn,"rel","nofollow"),c(ys,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,h),u(t,$,m),u(t,f,m),e(f,g),e(g,b),T(y,b,null),e(f,_),e(f,j),e(j,re),u(t,Y,m),u(t,z,m),u(t,ae,m),u(t,I,m),e(I,Z),e(Z,ne),T(D,ne,null),e(I,ie),e(I,se),e(se,J),u(t,O,m),u(t,G,m),e(G,Q),e(G,F),e(F,E),e(G,le),u(t,W,m),u(t,V,m),e(V,ee),e(ee,H),e(ee,oe),e(oe,de),e(ee,q),e(V,ce),e(V,A),e(A,pe),e(A,te),e(te,B),e(A,ue),e(V,he),e(V,P),e(P,me),e(P,U),e(U,fe),e(P,p),u(t,k,m),u(t,X,m),e(X,$e),u(t,Me,m),u(t,N,m),e(N,be),e(be,Fe),u(t,xe,m),u(t,S,m),e(S,R),u(t,je,m),u(t,ye,m),e(ye,C),e(C,ze),e(C,ke),e(ke,ge),e(C,Ee),e(C,Yn),e(Yn,Hr),e(C,Br),e(C,Cs),e(Cs,Rr),e(C,Kr),e(C,gt),e(gt,Vr),e(C,Xr),e(C,_t),e(_t,Yr),e(C,Zr),u(t,Ia,m),T(yt,t,m),u(t,Oa,m),u(t,to,m),e(to,Gr),e(to,Ps),e(Ps,Jr),e(to,Qr),e(to,Ns),e(Ns,ei),e(to,oi),u(t,Da,m),T(bt,t,m),u(t,Aa,m),u(t,Zn,m),e(Zn,eo),e(eo,ti),e(eo,Gn),e(Gn,ni),e(eo,si),e(eo,kt),e(kt,ai),e(eo,ri),e(eo,Lt),e(Lt,ii),e(eo,li),u(t,Ua,m),u(t,no,m),e(no,di),e(no,wt),e(wt,ci),e(no,pi),e(no,Tt),e(Tt,ui),e(no,hi),u(t,Wa,m),u(t,go,m),e(go,Ao),e(Ao,Ss),T(vt,Ss,null),e(go,mi),e(go,Is),e(Is,fi),u(t,Ha,m),u(t,qe,m),T(Mt,qe,null),e(qe,gi),e(qe,_o),e(_o,_i),e(_o,Jn),e(Jn,yi),e(_o,bi),e(_o,xt),e(xt,ki),e(_o,Li),e(qe,wi),e(qe,yo),e(yo,Ti),e(yo,Qn),e(Qn,vi),e(yo,Mi),e(yo,es),e(es,xi),e(yo,ji),e(qe,$i),e(qe,Os),e(Os,Fi),e(qe,zi),T(jt,qe,null),u(t,Ba,m),u(t,bo,m),e(bo,Uo),e(Uo,Ds),T($t,Ds,null),e(bo,Ei),e(bo,As),e(As,qi),u(t,Ra,m),u(t,He,m),T(Ft,He,null),e(He,Ci),e(He,Us),e(Us,Pi),e(He,Ni),e(He,Wo),e(Wo,os),e(os,Si),e(Wo,Ii),e(Wo,ts),e(ts,Oi),e(Wo,Di),e(He,Ai),e(He,zt),e(zt,Ui),e(zt,ns),e(ns,Wi),e(zt,Hi),u(t,Ka,m),u(t,ko,m),e(ko,Ho),e(Ho,Ws),T(Et,Ws,null),e(ko,Bi),e(ko,Hs),e(Hs,Ri),u(t,Va,m),u(t,Be,m),T(qt,Be,null),e(Be,Ki),e(Be,Bs),e(Bs,Vi),e(Be,Xi),e(Be,Bo),e(Bo,ss),e(ss,Yi),e(Bo,Zi),e(Bo,as),e(as,Gi),e(Bo,Ji),e(Be,Qi),e(Be,Ct),e(Ct,el),e(Ct,rs),e(rs,ol),e(Ct,tl),u(t,Xa,m),u(t,Lo,m),e(Lo,Ro),e(Ro,Rs),T(Pt,Rs,null),e(Lo,nl),e(Lo,Ks),e(Ks,sl),u(t,Ya,m),u(t,Re,m),T(Nt,Re,null),e(Re,al),e(Re,St),e(St,rl),e(St,It),e(It,il),e(St,ll),e(Re,dl),e(Re,Ot),e(Ot,cl),e(Ot,Dt),e(Dt,pl),e(Ot,ul),e(Re,hl),e(Re,Ne),T(At,Ne,null),e(Ne,ml),e(Ne,wo),e(wo,fl),e(wo,is),e(is,gl),e(wo,_l),e(wo,Vs),e(Vs,yl),e(wo,bl),e(Ne,kl),T(Ko,Ne,null),e(Ne,Ll),e(Ne,Xs),e(Xs,wl),e(Ne,Tl),T(Ut,Ne,null),u(t,Za,m),u(t,To,m),e(To,Vo),e(Vo,Ys),T(Wt,Ys,null),e(To,vl),e(To,Zs),e(Zs,Ml),u(t,Ga,m),u(t,Ke,m),T(Ht,Ke,null),e(Ke,xl),e(Ke,vo),e(vo,jl),e(vo,Gs),e(Gs,$l),e(vo,Fl),e(vo,Bt),e(Bt,zl),e(vo,El),e(Ke,ql),e(Ke,Rt),e(Rt,Cl),e(Rt,Kt),e(Kt,Pl),e(Rt,Nl),e(Ke,Sl),e(Ke,Se),T(Vt,Se,null),e(Se,Il),e(Se,Mo),e(Mo,Ol),e(Mo,ls),e(ls,Dl),e(Mo,Al),e(Mo,Js),e(Js,Ul),e(Mo,Wl),e(Se,Hl),T(Xo,Se,null),e(Se,Bl),e(Se,Qs),e(Qs,Rl),e(Se,Kl),T(Xt,Se,null),u(t,Ja,m),u(t,xo,m),e(xo,Yo),e(Yo,ea),T(Yt,ea,null),e(xo,Vl),e(xo,oa),e(oa,Xl),u(t,Qa,m),u(t,Ce,m),T(Zt,Ce,null),e(Ce,Yl),e(Ce,Gt),e(Gt,Zl),e(Gt,Jt),e(Jt,Gl),e(Gt,Jl),e(Ce,Ql),e(Ce,Qt),e(Qt,ed),e(Qt,en),e(en,od),e(Qt,td),e(Ce,nd),e(Ce,on),e(on,sd),e(on,tn),e(tn,ad),e(on,rd),e(Ce,id),e(Ce,Ie),T(nn,Ie,null),e(Ie,ld),e(Ie,jo),e(jo,dd),e(jo,ds),e(ds,cd),e(jo,pd),e(jo,ta),e(ta,ud),e(jo,hd),e(Ie,md),T(Zo,Ie,null),e(Ie,fd),e(Ie,na),e(na,gd),e(Ie,_d),T(sn,Ie,null),u(t,er,m),u(t,$o,m),e($o,Go),e(Go,sa),T(an,sa,null),e($o,yd),e($o,aa),e(aa,bd),u(t,or,m),u(t,Pe,m),T(rn,Pe,null),e(Pe,kd),e(Pe,Fo),e(Fo,Ld),e(Fo,ln),e(ln,wd),e(Fo,Td),e(Fo,dn),e(dn,vd),e(Fo,Md),e(Pe,xd),e(Pe,cn),e(cn,jd),e(cn,pn),e(pn,$d),e(cn,Fd),e(Pe,zd),e(Pe,un),e(un,Ed),e(un,hn),e(hn,qd),e(un,Cd),e(Pe,Pd),e(Pe,Oe),T(mn,Oe,null),e(Oe,Nd),e(Oe,zo),e(zo,Sd),e(zo,cs),e(cs,Id),e(zo,Od),e(zo,ra),e(ra,Dd),e(zo,Ad),e(Oe,Ud),T(Jo,Oe,null),e(Oe,Wd),e(Oe,ia),e(ia,Hd),e(Oe,Bd),T(fn,Oe,null),u(t,tr,m),u(t,Eo,m),e(Eo,Qo),e(Qo,la),T(gn,la,null),e(Eo,Rd),e(Eo,da),e(da,Kd),u(t,nr,m),u(t,Le,m),T(_n,Le,null),e(Le,Vd),e(Le,ca),e(ca,Xd),e(Le,Yd),e(Le,yn),e(yn,Zd),e(yn,ps),e(ps,Gd),e(yn,Jd),e(Le,Qd),e(Le,bn),e(bn,ec),e(bn,kn),e(kn,oc),e(bn,tc),e(Le,nc),T(et,Le,null),e(Le,sc),e(Le,De),T(Ln,De,null),e(De,ac),e(De,qo),e(qo,rc),e(qo,us),e(us,ic),e(qo,lc),e(qo,pa),e(pa,dc),e(qo,cc),e(De,pc),T(ot,De,null),e(De,uc),e(De,ua),e(ua,hc),e(De,mc),T(wn,De,null),u(t,sr,m),u(t,Co,m),e(Co,tt),e(tt,ha),T(Tn,ha,null),e(Co,fc),e(Co,ma),e(ma,gc),u(t,ar,m),u(t,we,m),T(vn,we,null),e(we,_c),e(we,Mn),e(Mn,yc),e(Mn,fa),e(fa,bc),e(Mn,kc),e(we,Lc),e(we,xn),e(xn,wc),e(xn,hs),e(hs,Tc),e(xn,vc),e(we,Mc),e(we,jn),e(jn,xc),e(jn,$n),e($n,jc),e(jn,$c),e(we,Fc),T(nt,we,null),e(we,zc),e(we,Ae),T(Fn,Ae,null),e(Ae,Ec),e(Ae,Po),e(Po,qc),e(Po,ms),e(ms,Cc),e(Po,Pc),e(Po,ga),e(ga,Nc),e(Po,Sc),e(Ae,Ic),T(st,Ae,null),e(Ae,Oc),e(Ae,_a),e(_a,Dc),e(Ae,Ac),T(zn,Ae,null),u(t,rr,m),u(t,No,m),e(No,at),e(at,ya),T(En,ya,null),e(No,Uc),e(No,ba),e(ba,Wc),u(t,ir,m),u(t,Te,m),T(qn,Te,null),e(Te,Hc),e(Te,ka),e(ka,Bc),e(Te,Rc),e(Te,Cn),e(Cn,Kc),e(Cn,fs),e(fs,Vc),e(Cn,Xc),e(Te,Yc),e(Te,Pn),e(Pn,Zc),e(Pn,Nn),e(Nn,Gc),e(Pn,Jc),e(Te,Qc),T(rt,Te,null),e(Te,ep),e(Te,Ue),T(Sn,Ue,null),e(Ue,op),e(Ue,So),e(So,tp),e(So,gs),e(gs,np),e(So,sp),e(So,La),e(La,ap),e(So,rp),e(Ue,ip),T(it,Ue,null),e(Ue,lp),e(Ue,wa),e(wa,dp),e(Ue,cp),T(In,Ue,null),u(t,lr,m),u(t,Io,m),e(Io,lt),e(lt,Ta),T(On,Ta,null),e(Io,pp),e(Io,va),e(va,up),u(t,dr,m),u(t,ve,m),T(Dn,ve,null),e(ve,hp),e(ve,Ma),e(Ma,mp),e(ve,fp),e(ve,An),e(An,gp),e(An,_s),e(_s,_p),e(An,yp),e(ve,bp),e(ve,Un),e(Un,kp),e(Un,Wn),e(Wn,Lp),e(Un,wp),e(ve,Tp),T(dt,ve,null),e(ve,vp),e(ve,We),T(Hn,We,null),e(We,Mp),e(We,Oo),e(Oo,xp),e(Oo,ys),e(ys,jp),e(Oo,$p),e(Oo,xa),e(xa,Fp),e(Oo,zp),e(We,Ep),T(ct,We,null),e(We,qp),e(We,ja),e(ja,Cp),e(We,Pp),T(Bn,We,null),cr=!0},p(t,[m]){const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:t}),Ko.$set(Rn);const $a={};m&2&&($a.$$scope={dirty:m,ctx:t}),Xo.$set($a);const Fa={};m&2&&(Fa.$$scope={dirty:m,ctx:t}),Zo.$set(Fa);const za={};m&2&&(za.$$scope={dirty:m,ctx:t}),Jo.$set(za);const Kn={};m&2&&(Kn.$$scope={dirty:m,ctx:t}),et.$set(Kn);const Ea={};m&2&&(Ea.$$scope={dirty:m,ctx:t}),ot.$set(Ea);const qa={};m&2&&(qa.$$scope={dirty:m,ctx:t}),nt.$set(qa);const Ca={};m&2&&(Ca.$$scope={dirty:m,ctx:t}),st.$set(Ca);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:t}),rt.$set(Vn);const Pa={};m&2&&(Pa.$$scope={dirty:m,ctx:t}),it.$set(Pa);const Do={};m&2&&(Do.$$scope={dirty:m,ctx:t}),dt.$set(Do);const Xn={};m&2&&(Xn.$$scope={dirty:m,ctx:t}),ct.$set(Xn)},i(t){cr||(v(y.$$.fragment,t),v(D.$$.fragment,t),v(yt.$$.fragment,t),v(bt.$$.fragment,t),v(vt.$$.fragment,t),v(Mt.$$.fragment,t),v(jt.$$.fragment,t),v($t.$$.fragment,t),v(Ft.$$.fragment,t),v(Et.$$.fragment,t),v(qt.$$.fragment,t),v(Pt.$$.fragment,t),v(Nt.$$.fragment,t),v(At.$$.fragment,t),v(Ko.$$.fragment,t),v(Ut.$$.fragment,t),v(Wt.$$.fragment,t),v(Ht.$$.fragment,t),v(Vt.$$.fragment,t),v(Xo.$$.fragment,t),v(Xt.$$.fragment,t),v(Yt.$$.fragment,t),v(Zt.$$.fragment,t),v(nn.$$.fragment,t),v(Zo.$$.fragment,t),v(sn.$$.fragment,t),v(an.$$.fragment,t),v(rn.$$.fragment,t),v(mn.$$.fragment,t),v(Jo.$$.fragment,t),v(fn.$$.fragment,t),v(gn.$$.fragment,t),v(_n.$$.fragment,t),v(et.$$.fragment,t),v(Ln.$$.fragment,t),v(ot.$$.fragment,t),v(wn.$$.fragment,t),v(Tn.$$.fragment,t),v(vn.$$.fragment,t),v(nt.$$.fragment,t),v(Fn.$$.fragment,t),v(st.$$.fragment,t),v(zn.$$.fragment,t),v(En.$$.fragment,t),v(qn.$$.fragment,t),v(rt.$$.fragment,t),v(Sn.$$.fragment,t),v(it.$$.fragment,t),v(In.$$.fragment,t),v(On.$$.fragment,t),v(Dn.$$.fragment,t),v(dt.$$.fragment,t),v(Hn.$$.fragment,t),v(ct.$$.fragment,t),v(Bn.$$.fragment,t),cr=!0)},o(t){M(y.$$.fragment,t),M(D.$$.fragment,t),M(yt.$$.fragment,t),M(bt.$$.fragment,t),M(vt.$$.fragment,t),M(Mt.$$.fragment,t),M(jt.$$.fragment,t),M($t.$$.fragment,t),M(Ft.$$.fragment,t),M(Et.$$.fragment,t),M(qt.$$.fragment,t),M(Pt.$$.fragment,t),M(Nt.$$.fragment,t),M(At.$$.fragment,t),M(Ko.$$.fragment,t),M(Ut.$$.fragment,t),M(Wt.$$.fragment,t),M(Ht.$$.fragment,t),M(Vt.$$.fragment,t),M(Xo.$$.fragment,t),M(Xt.$$.fragment,t),M(Yt.$$.fragment,t),M(Zt.$$.fragment,t),M(nn.$$.fragment,t),M(Zo.$$.fragment,t),M(sn.$$.fragment,t),M(an.$$.fragment,t),M(rn.$$.fragment,t),M(mn.$$.fragment,t),M(Jo.$$.fragment,t),M(fn.$$.fragment,t),M(gn.$$.fragment,t),M(_n.$$.fragment,t),M(et.$$.fragment,t),M(Ln.$$.fragment,t),M(ot.$$.fragment,t),M(wn.$$.fragment,t),M(Tn.$$.fragment,t),M(vn.$$.fragment,t),M(nt.$$.fragment,t),M(Fn.$$.fragment,t),M(st.$$.fragment,t),M(zn.$$.fragment,t),M(En.$$.fragment,t),M(qn.$$.fragment,t),M(rt.$$.fragment,t),M(Sn.$$.fragment,t),M(it.$$.fragment,t),M(In.$$.fragment,t),M(On.$$.fragment,t),M(Dn.$$.fragment,t),M(dt.$$.fragment,t),M(Hn.$$.fragment,t),M(ct.$$.fragment,t),M(Bn.$$.fragment,t),cr=!1},d(t){o(h),t&&o($),t&&o(f),x(y),t&&o(Y),t&&o(z),t&&o(ae),t&&o(I),x(D),t&&o(O),t&&o(G),t&&o(W),t&&o(V),t&&o(k),t&&o(X),t&&o(Me),t&&o(N),t&&o(xe),t&&o(S),t&&o(je),t&&o(ye),t&&o(Ia),x(yt,t),t&&o(Oa),t&&o(to),t&&o(Da),x(bt,t),t&&o(Aa),t&&o(Zn),t&&o(Ua),t&&o(no),t&&o(Wa),t&&o(go),x(vt),t&&o(Ha),t&&o(qe),x(Mt),x(jt),t&&o(Ba),t&&o(bo),x($t),t&&o(Ra),t&&o(He),x(Ft),t&&o(Ka),t&&o(ko),x(Et),t&&o(Va),t&&o(Be),x(qt),t&&o(Xa),t&&o(Lo),x(Pt),t&&o(Ya),t&&o(Re),x(Nt),x(At),x(Ko),x(Ut),t&&o(Za),t&&o(To),x(Wt),t&&o(Ga),t&&o(Ke),x(Ht),x(Vt),x(Xo),x(Xt),t&&o(Ja),t&&o(xo),x(Yt),t&&o(Qa),t&&o(Ce),x(Zt),x(nn),x(Zo),x(sn),t&&o(er),t&&o($o),x(an),t&&o(or),t&&o(Pe),x(rn),x(mn),x(Jo),x(fn),t&&o(tr),t&&o(Eo),x(gn),t&&o(nr),t&&o(Le),x(_n),x(et),x(Ln),x(ot),x(wn),t&&o(sr),t&&o(Co),x(Tn),t&&o(ar),t&&o(we),x(vn),x(nt),x(Fn),x(st),x(zn),t&&o(rr),t&&o(No),x(En),t&&o(ir),t&&o(Te),x(qn),x(rt),x(Sn),x(it),x(In),t&&o(lr),t&&o(Io),x(On),t&&o(dr),t&&o(ve),x(Dn),x(dt),x(Hn),x(ct),x(Bn)}}}const rm={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function im(K){return Kh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hm extends Wh{constructor(h){super();Hh(this,h,im,am,Bh,{})}}export{hm as default,rm as metadata};
