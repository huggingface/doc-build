import{S as z_,i as E_,s as q_,e as n,k as l,w as M,t as a,L as C_,c as s,d as t,m as d,a as r,x as b,h as i,b as h,J as e,g as m,y as w,q as P,o as N,B as $}from"../../../chunks/vendor-b1433968.js";import{T as Ne}from"../../../chunks/Tip-c3840994.js";import{D as ne}from"../../../chunks/Docstring-ff504c58.js";import{C as Ye}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as xe}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function x_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function j_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function L_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function A_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function I_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function D_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function S_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me;return{c(){p=n("p"),y=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),k=n("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),J=a("This second option is useful when using "),S=n("code"),X=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=a("model(inputs)"),se=a("."),R=l(),A=n("p"),G=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Y=a("a single Tensor with "),B=n("code"),re=a("input_ids"),Z=a(" only and nothing else: "),H=n("code"),ae=a("model(inputs_ids)"),ee=l(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),te=a("model([input_ids, attention_mask])"),he=l(),j=n("li"),oe=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=r(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=r(g);k=s(K,"LI",{});var _e=r(k);v=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ke=r(F);le=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=r(z);J=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=r(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=r(A);G=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=r(E);q=s(L,"LI",{});var D=r(q);Y=i(D,"a single Tensor with "),B=s(D,"CODE",{});var be=r(B);re=i(be,"input_ids"),be.forEach(t),Z=i(D," only and nothing else: "),H=s(D,"CODE",{});var ge=r(H);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),ee=d(L),C=s(L,"LI",{});var ue=r(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=r(W);te=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=r(j);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=r(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,k),e(k,v),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,J),e(z,S),e(S,X),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,G),m(c,V,T),m(c,E,T),e(E,q),e(q,Y),e(q,B),e(B,re),e(q,Z),e(q,H),e(H,ae),e(E,ee),e(E,C),e(C,pe),e(C,W),e(W,te),e(E,he),e(E,j),e(j,oe),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function O_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function W_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me;return{c(){p=n("p"),y=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),k=n("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),J=a("This second option is useful when using "),S=n("code"),X=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=a("model(inputs)"),se=a("."),R=l(),A=n("p"),G=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Y=a("a single Tensor with "),B=n("code"),re=a("input_ids"),Z=a(" only and nothing else: "),H=n("code"),ae=a("model(inputs_ids)"),ee=l(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),te=a("model([input_ids, attention_mask])"),he=l(),j=n("li"),oe=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=r(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=r(g);k=s(K,"LI",{});var _e=r(k);v=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ke=r(F);le=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=r(z);J=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=r(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=r(A);G=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=r(E);q=s(L,"LI",{});var D=r(q);Y=i(D,"a single Tensor with "),B=s(D,"CODE",{});var be=r(B);re=i(be,"input_ids"),be.forEach(t),Z=i(D," only and nothing else: "),H=s(D,"CODE",{});var ge=r(H);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),ee=d(L),C=s(L,"LI",{});var ue=r(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=r(W);te=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=r(j);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=r(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,k),e(k,v),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,J),e(z,S),e(S,X),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,G),m(c,V,T),m(c,E,T),e(E,q),e(q,Y),e(q,B),e(B,re),e(q,Z),e(q,H),e(H,ae),e(E,ee),e(E,C),e(C,pe),e(C,W),e(W,te),e(E,he),e(E,j),e(j,oe),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function Q_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function B_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me;return{c(){p=n("p"),y=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),k=n("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),J=a("This second option is useful when using "),S=n("code"),X=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=a("model(inputs)"),se=a("."),R=l(),A=n("p"),G=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Y=a("a single Tensor with "),B=n("code"),re=a("input_ids"),Z=a(" only and nothing else: "),H=n("code"),ae=a("model(inputs_ids)"),ee=l(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),te=a("model([input_ids, attention_mask])"),he=l(),j=n("li"),oe=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=r(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=r(g);k=s(K,"LI",{});var _e=r(k);v=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ke=r(F);le=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=r(z);J=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=r(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=r(A);G=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=r(E);q=s(L,"LI",{});var D=r(q);Y=i(D,"a single Tensor with "),B=s(D,"CODE",{});var be=r(B);re=i(be,"input_ids"),be.forEach(t),Z=i(D," only and nothing else: "),H=s(D,"CODE",{});var ge=r(H);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),ee=d(L),C=s(L,"LI",{});var ue=r(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=r(W);te=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=r(j);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=r(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,k),e(k,v),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,J),e(z,S),e(S,X),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,G),m(c,V,T),m(c,E,T),e(E,q),e(q,Y),e(q,B),e(B,re),e(q,Z),e(q,H),e(H,ae),e(E,ee),e(E,C),e(C,pe),e(C,W),e(W,te),e(E,he),e(E,j),e(j,oe),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function H_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function R_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me;return{c(){p=n("p"),y=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),k=n("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),J=a("This second option is useful when using "),S=n("code"),X=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=a("model(inputs)"),se=a("."),R=l(),A=n("p"),G=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Y=a("a single Tensor with "),B=n("code"),re=a("input_ids"),Z=a(" only and nothing else: "),H=n("code"),ae=a("model(inputs_ids)"),ee=l(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),te=a("model([input_ids, attention_mask])"),he=l(),j=n("li"),oe=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=r(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=r(g);k=s(K,"LI",{});var _e=r(k);v=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ke=r(F);le=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=r(z);J=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=r(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=r(A);G=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=r(E);q=s(L,"LI",{});var D=r(q);Y=i(D,"a single Tensor with "),B=s(D,"CODE",{});var be=r(B);re=i(be,"input_ids"),be.forEach(t),Z=i(D," only and nothing else: "),H=s(D,"CODE",{});var ge=r(H);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),ee=d(L),C=s(L,"LI",{});var ue=r(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=r(W);te=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=r(j);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=r(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,k),e(k,v),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,J),e(z,S),e(S,X),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,G),m(c,V,T),m(c,E,T),e(E,q),e(q,Y),e(q,B),e(B,re),e(q,Z),e(q,H),e(H,ae),e(E,ee),e(E,C),e(C,pe),e(C,W),e(W,te),e(E,he),e(E,j),e(j,oe),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function U_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function V_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me;return{c(){p=n("p"),y=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),k=n("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),J=a("This second option is useful when using "),S=n("code"),X=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=a("model(inputs)"),se=a("."),R=l(),A=n("p"),G=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Y=a("a single Tensor with "),B=n("code"),re=a("input_ids"),Z=a(" only and nothing else: "),H=n("code"),ae=a("model(inputs_ids)"),ee=l(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),te=a("model([input_ids, attention_mask])"),he=l(),j=n("li"),oe=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=r(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=r(g);k=s(K,"LI",{});var _e=r(k);v=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ke=r(F);le=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=r(z);J=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=r(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=r(A);G=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=r(E);q=s(L,"LI",{});var D=r(q);Y=i(D,"a single Tensor with "),B=s(D,"CODE",{});var be=r(B);re=i(be,"input_ids"),be.forEach(t),Z=i(D," only and nothing else: "),H=s(D,"CODE",{});var ge=r(H);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),ee=d(L),C=s(L,"LI",{});var ue=r(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=r(W);te=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=r(j);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=r(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,k),e(k,v),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,J),e(z,S),e(S,X),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,G),m(c,V,T),m(c,E,T),e(E,q),e(q,Y),e(q,B),e(B,re),e(q,Z),e(q,H),e(H,ae),e(E,ee),e(E,C),e(C,pe),e(C,W),e(W,te),e(E,he),e(E,j),e(j,oe),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function K_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function J_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me;return{c(){p=n("p"),y=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),k=n("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),J=a("This second option is useful when using "),S=n("code"),X=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=a("model(inputs)"),se=a("."),R=l(),A=n("p"),G=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Y=a("a single Tensor with "),B=n("code"),re=a("input_ids"),Z=a(" only and nothing else: "),H=n("code"),ae=a("model(inputs_ids)"),ee=l(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),te=a("model([input_ids, attention_mask])"),he=l(),j=n("li"),oe=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=r(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=r(g);k=s(K,"LI",{});var _e=r(k);v=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ke=r(F);le=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=r(z);J=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=r(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=r(A);G=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=r(E);q=s(L,"LI",{});var D=r(q);Y=i(D,"a single Tensor with "),B=s(D,"CODE",{});var be=r(B);re=i(be,"input_ids"),be.forEach(t),Z=i(D," only and nothing else: "),H=s(D,"CODE",{});var ge=r(H);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),ee=d(L),C=s(L,"LI",{});var ue=r(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=r(W);te=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=r(j);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=r(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,k),e(k,v),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,J),e(z,S),e(S,X),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,G),m(c,V,T),m(c,E,T),e(E,q),e(q,Y),e(q,B),e(B,re),e(q,Z),e(q,H),e(H,ae),e(E,ee),e(E,C),e(C,pe),e(C,W),e(W,te),e(E,he),e(E,j),e(j,oe),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function X_(Q){let p,y,f,g,k;return{c(){p=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=s(v,"P",{});var _=r(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,y),e(p,f),e(f,g),e(p,k)},d(v){v&&t(p)}}}function G_(Q){let p,y,f,g,k,v,_,F,le,U,z,J,S,X,de,O,ce,se,R,A,G,V,E,q,Y,B,re,Z,H,ae,ee,C,pe,W,te,he,j,oe,x,me,c,T,K,_e,ke,I,ve,Te,Me,L,D,be,ge,ue,we,ie,fe,oo,Er,Wo,Al,qr,Il,mi,je,Qo,Dl,it,Sl,Is,Ol,Wl,Ds,Ql,Bl,Bo,Hl,Rl,Ul,yt,Vl,Ss,Kl,Jl,Os,Xl,Gl,Yl,Cr,Zl,ed,Ho,ui,Ft,no,xr,Ro,td,jr,od,fi,$e,Uo,nd,Vo,sd,Ws,rd,ad,id,dt,Ko,ld,Lr,dd,cd,Jo,Qs,pd,Ar,hd,md,Bs,ud,Ir,fd,gd,so,Xo,_d,Go,vd,Dr,kd,Td,Md,ro,Yo,bd,Sr,wd,Pd,Or,gi,zt,ao,Wr,Zo,Nd,Qr,$d,_i,Ze,en,yd,tn,Fd,Br,zd,Ed,qd,on,Cd,Hs,xd,jd,Ld,io,nn,Ad,Hr,Id,vi,Et,lo,Rr,sn,Dd,Ur,Sd,ki,Le,rn,Od,Vr,Wd,Qd,an,Bd,Rs,Hd,Rd,Ud,ln,Vd,dn,Kd,Jd,Xd,Oe,cn,Gd,qt,Yd,Us,Zd,ec,Kr,tc,oc,nc,co,sc,Jr,rc,ac,pn,Ti,Ct,po,Xr,hn,ic,Gr,lc,Mi,mn,We,un,dc,xt,cc,Vs,pc,hc,Yr,mc,uc,fc,ho,gc,Zr,_c,vc,fn,bi,jt,mo,ea,gn,kc,ta,Tc,wi,Ae,_n,Mc,oa,bc,wc,vn,Pc,Ks,Nc,$c,yc,kn,Fc,Tn,zc,Ec,qc,Pe,Mn,Cc,Lt,xc,Js,jc,Lc,na,Ac,Ic,Dc,uo,Sc,sa,Oc,Wc,bn,Qc,ra,Bc,Hc,wn,Pi,At,fo,aa,Pn,Rc,ia,Uc,Ni,Ie,Nn,Vc,la,Kc,Jc,$n,Xc,Xs,Gc,Yc,Zc,yn,ep,Fn,tp,op,np,Qe,zn,sp,It,rp,Gs,ap,ip,da,lp,dp,cp,go,pp,ca,hp,mp,En,$i,Dt,_o,pa,qn,up,ha,fp,yi,De,Cn,gp,ma,_p,vp,xn,kp,Ys,Tp,Mp,bp,jn,wp,Ln,Pp,Np,$p,Be,An,yp,St,Fp,Zs,zp,Ep,ua,qp,Cp,xp,vo,jp,fa,Lp,Ap,In,Fi,Ot,ko,ga,Dn,Ip,_a,Dp,zi,Se,Sn,Sp,Wt,Op,va,Wp,Qp,ka,Bp,Hp,Rp,On,Up,er,Vp,Kp,Jp,Wn,Xp,Qn,Gp,Yp,Zp,He,Bn,eh,Qt,th,tr,oh,nh,Ta,sh,rh,ah,To,ih,Ma,lh,dh,Hn,Ei,Bt,Mo,ba,Rn,ch,wa,ph,qi,ye,Un,hh,Pa,mh,uh,Vn,fh,or,gh,_h,vh,Kn,kh,Jn,Th,Mh,bh,bo,wh,Re,Xn,Ph,Ht,Nh,nr,$h,yh,Na,Fh,zh,Eh,wo,qh,$a,Ch,xh,Gn,Ci,Rt,Po,ya,Yn,jh,Fa,Lh,xi,Fe,Zn,Ah,es,Ih,za,Dh,Sh,Oh,ts,Wh,sr,Qh,Bh,Hh,os,Rh,ns,Uh,Vh,Kh,No,Jh,Ue,ss,Xh,Ut,Gh,rr,Yh,Zh,Ea,em,tm,om,$o,nm,qa,sm,rm,rs,ji,Vt,yo,Ca,as,am,xa,im,Li,ze,is,lm,ja,dm,cm,ls,pm,ar,hm,mm,um,ds,fm,cs,gm,_m,vm,Fo,km,Ve,ps,Tm,Kt,Mm,ir,bm,wm,La,Pm,Nm,$m,zo,ym,Aa,Fm,zm,hs,Ai,Jt,Eo,Ia,ms,Em,Da,qm,Ii,Ee,us,Cm,Sa,xm,jm,fs,Lm,lr,Am,Im,Dm,gs,Sm,_s,Om,Wm,Qm,qo,Bm,Ke,vs,Hm,Xt,Rm,dr,Um,Vm,Oa,Km,Jm,Xm,Co,Gm,Wa,Ym,Zm,ks,Di,Gt,xo,Qa,Ts,eu,Ba,tu,Si,qe,Ms,ou,Ha,nu,su,bs,ru,cr,au,iu,lu,ws,du,Ps,cu,pu,hu,jo,mu,Je,Ns,uu,Yt,fu,pr,gu,_u,Ra,vu,ku,Tu,Lo,Mu,Ua,bu,wu,$s,Oi,Zt,Ao,Va,ys,Pu,Ka,Nu,Wi,Ce,Fs,$u,eo,yu,Ja,Fu,zu,Xa,Eu,qu,Cu,zs,xu,hr,ju,Lu,Au,Es,Iu,qs,Du,Su,Ou,Io,Wu,Xe,Cs,Qu,to,Bu,mr,Hu,Ru,Ga,Uu,Vu,Ku,Do,Ju,Ya,Xu,Gu,xs,Qi;return v=new xe({}),X=new xe({}),Wo=new xe({}),Qo=new ne({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/configuration_mpnet.py#L29",parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MPNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MPNetConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MPNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MPNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MPNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MPNetConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MPNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MPNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MPNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MPNetConfig.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}]}}),Ho=new Ye({props:{code:`from transformers import MPNetModel, MPNetConfig

# Initializing a MPNet mpnet-base style configuration
configuration = MPNetConfig()

# Initializing a model from the mpnet-base style configuration
model = MPNetModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetModel, MPNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MPNet mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MPNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ro=new xe({}),Uo=new ne({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/tokenization_mpnet.py#L66",parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.MPNetTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.MPNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Ko=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/tokenization_mpnet.py#L231",parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/tokenization_mpnet.py#L256",parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yo=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/tokenization_mpnet.py#L283",parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zo=new xe({}),en=new ne({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),nn=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L190",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new xe({}),rn=new ne({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L482",parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new ne({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L511",parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Ne({props:{$$slots:{default:[x_]},$$scope:{ctx:Q}}}),pn=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetModel
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),hn=new xe({}),un=new ne({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L594",parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new Ne({props:{$$slots:{default:[j_]},$$scope:{ctx:Q}}}),fn=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gn=new xe({}),_n=new ne({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L684",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mn=new ne({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L697",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Ne({props:{$$slots:{default:[L_]},$$scope:{ctx:Q}}}),bn=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetForSequenceClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wn=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetForSequenceClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new xe({}),Nn=new ne({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L779",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new ne({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L792",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new Ne({props:{$$slots:{default:[A_]},$$scope:{ctx:Q}}}),En=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qn=new xe({}),Cn=new ne({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L870",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),An=new ne({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L885",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Ne({props:{$$slots:{default:[I_]},$$scope:{ctx:Q}}}),In=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dn=new xe({}),Sn=new ne({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L979",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bn=new ne({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_mpnet.py#L993",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Ne({props:{$$slots:{default:[D_]},$$scope:{ctx:Q}}}),Hn=new Ye({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Rn=new xe({}),Un=new ne({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L678",parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bo=new Ne({props:{$$slots:{default:[S_]},$$scope:{ctx:Q}}}),Xn=new ne({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L683",parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new Ne({props:{$$slots:{default:[O_]},$$scope:{ctx:Q}}}),Gn=new Ye({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Yn=new xe({}),Zn=new ne({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L795",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new Ne({props:{$$slots:{default:[W_]},$$scope:{ctx:Q}}}),ss=new ne({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L812",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new Ne({props:{$$slots:{default:[Q_]},$$scope:{ctx:Q}}}),rs=new Ye({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),as=new xe({}),is=new ne({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L922",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new Ne({props:{$$slots:{default:[B_]},$$scope:{ctx:Q}}}),ps=new ne({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L933",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Ne({props:{$$slots:{default:[H_]},$$scope:{ctx:Q}}}),hs=new Ye({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ms=new xe({}),us=new ne({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1019",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new Ne({props:{$$slots:{default:[R_]},$$scope:{ctx:Q}}}),vs=new ne({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1039",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new Ne({props:{$$slots:{default:[U_]},$$scope:{ctx:Q}}}),ks=new Ye({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ts=new xe({}),Ms=new ne({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1156",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Ne({props:{$$slots:{default:[V_]},$$scope:{ctx:Q}}}),Ns=new ne({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1170",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Lo=new Ne({props:{$$slots:{default:[K_]},$$scope:{ctx:Q}}}),$s=new Ye({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new xe({}),Fs=new ne({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1255",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Io=new Ne({props:{$$slots:{default:[J_]},$$scope:{ctx:Q}}}),Cs=new ne({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1268",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Ne({props:{$$slots:{default:[X_]},$$scope:{ctx:Q}}}),xs=new Ye({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){p=n("meta"),y=l(),f=n("h1"),g=n("a"),k=n("span"),M(v.$$.fragment),_=l(),F=n("span"),le=a("MPNet"),U=l(),z=n("h2"),J=n("a"),S=n("span"),M(X.$$.fragment),de=l(),O=n("span"),ce=a("Overview"),se=l(),R=n("p"),A=a("The MPNet model was proposed in "),G=n("a"),V=a("MPNet: Masked and Permuted Pre-training for Language Understanding"),E=a(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),q=l(),Y=n("p"),B=a(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),re=l(),Z=n("p"),H=a("The abstract from the paper is the following:"),ae=l(),ee=n("p"),C=n("em"),pe=a(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),W=l(),te=n("p"),he=a("Tips:"),j=l(),oe=n("ul"),x=n("li"),me=a("MPNet doesn\u2019t have "),c=n("code"),T=a("token_type_ids"),K=a(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=n("code"),ke=a("tokenizer.sep_token"),I=a(" (or "),ve=n("code"),Te=a("[sep]"),Me=a(")."),L=l(),D=n("p"),be=a("The original code can be found "),ge=n("a"),ue=a("here"),we=a("."),ie=l(),fe=n("h2"),oo=n("a"),Er=n("span"),M(Wo.$$.fragment),Al=l(),qr=n("span"),Il=a("MPNetConfig"),mi=l(),je=n("div"),M(Qo.$$.fragment),Dl=l(),it=n("p"),Sl=a("This is the configuration class to store the configuration of a "),Is=n("a"),Ol=a("MPNetModel"),Wl=a(" or a "),Ds=n("a"),Ql=a("TFMPNetModel"),Bl=a(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Bo=n("a"),Hl=a("mpnet-base"),Rl=a(" architecture."),Ul=l(),yt=n("p"),Vl=a("Configuration objects inherit from "),Ss=n("a"),Kl=a("PretrainedConfig"),Jl=a(` and can be used to control the model outputs. Read the
documentation from `),Os=n("a"),Xl=a("PretrainedConfig"),Gl=a(" for more information."),Yl=l(),Cr=n("p"),Zl=a("Examples:"),ed=l(),M(Ho.$$.fragment),ui=l(),Ft=n("h2"),no=n("a"),xr=n("span"),M(Ro.$$.fragment),td=l(),jr=n("span"),od=a("MPNetTokenizer"),fi=l(),$e=n("div"),M(Uo.$$.fragment),nd=l(),Vo=n("p"),sd=a("This tokenizer inherits from "),Ws=n("a"),rd=a("BertTokenizer"),ad=a(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),id=l(),dt=n("div"),M(Ko.$$.fragment),ld=l(),Lr=n("p"),dd=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),cd=l(),Jo=n("ul"),Qs=n("li"),pd=a("single sequence: "),Ar=n("code"),hd=a("<s> X </s>"),md=l(),Bs=n("li"),ud=a("pair of sequences: "),Ir=n("code"),fd=a("<s> A </s></s> B </s>"),gd=l(),so=n("div"),M(Xo.$$.fragment),_d=l(),Go=n("p"),vd=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Dr=n("code"),kd=a("prepare_for_model"),Td=a(" methods."),Md=l(),ro=n("div"),M(Yo.$$.fragment),bd=l(),Sr=n("p"),wd=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Pd=l(),Or=n("div"),gi=l(),zt=n("h2"),ao=n("a"),Wr=n("span"),M(Zo.$$.fragment),Nd=l(),Qr=n("span"),$d=a("MPNetTokenizerFast"),_i=l(),Ze=n("div"),M(en.$$.fragment),yd=l(),tn=n("p"),Fd=a("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),Br=n("em"),zd=a("tokenizers"),Ed=a(" library). Based on WordPiece."),qd=l(),on=n("p"),Cd=a("This tokenizer inherits from "),Hs=n("a"),xd=a("PreTrainedTokenizerFast"),jd=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ld=l(),io=n("div"),M(nn.$$.fragment),Ad=l(),Hr=n("p"),Id=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),vi=l(),Et=n("h2"),lo=n("a"),Rr=n("span"),M(sn.$$.fragment),Dd=l(),Ur=n("span"),Sd=a("MPNetModel"),ki=l(),Le=n("div"),M(rn.$$.fragment),Od=l(),Vr=n("p"),Wd=a("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),Qd=l(),an=n("p"),Bd=a("This model inherits from "),Rs=n("a"),Hd=a("PreTrainedModel"),Rd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud=l(),ln=n("p"),Vd=a("This model is also a PyTorch "),dn=n("a"),Kd=a("torch.nn.Module"),Jd=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xd=l(),Oe=n("div"),M(cn.$$.fragment),Gd=l(),qt=n("p"),Yd=a("The "),Us=n("a"),Zd=a("MPNetModel"),ec=a(" forward method, overrides the "),Kr=n("code"),tc=a("__call__"),oc=a(" special method."),nc=l(),M(co.$$.fragment),sc=l(),Jr=n("p"),rc=a("Example:"),ac=l(),M(pn.$$.fragment),Ti=l(),Ct=n("h2"),po=n("a"),Xr=n("span"),M(hn.$$.fragment),ic=l(),Gr=n("span"),lc=a("MPNetForMaskedLM"),Mi=l(),mn=n("div"),We=n("div"),M(un.$$.fragment),dc=l(),xt=n("p"),cc=a("The "),Vs=n("a"),pc=a("MPNetForMaskedLM"),hc=a(" forward method, overrides the "),Yr=n("code"),mc=a("__call__"),uc=a(" special method."),fc=l(),M(ho.$$.fragment),gc=l(),Zr=n("p"),_c=a("Example:"),vc=l(),M(fn.$$.fragment),bi=l(),jt=n("h2"),mo=n("a"),ea=n("span"),M(gn.$$.fragment),kc=l(),ta=n("span"),Tc=a("MPNetForSequenceClassification"),wi=l(),Ae=n("div"),M(_n.$$.fragment),Mc=l(),oa=n("p"),bc=a(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wc=l(),vn=n("p"),Pc=a("This model inherits from "),Ks=n("a"),Nc=a("PreTrainedModel"),$c=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc=l(),kn=n("p"),Fc=a("This model is also a PyTorch "),Tn=n("a"),zc=a("torch.nn.Module"),Ec=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qc=l(),Pe=n("div"),M(Mn.$$.fragment),Cc=l(),Lt=n("p"),xc=a("The "),Js=n("a"),jc=a("MPNetForSequenceClassification"),Lc=a(" forward method, overrides the "),na=n("code"),Ac=a("__call__"),Ic=a(" special method."),Dc=l(),M(uo.$$.fragment),Sc=l(),sa=n("p"),Oc=a("Example of single-label classification:"),Wc=l(),M(bn.$$.fragment),Qc=l(),ra=n("p"),Bc=a("Example of multi-label classification:"),Hc=l(),M(wn.$$.fragment),Pi=l(),At=n("h2"),fo=n("a"),aa=n("span"),M(Pn.$$.fragment),Rc=l(),ia=n("span"),Uc=a("MPNetForMultipleChoice"),Ni=l(),Ie=n("div"),M(Nn.$$.fragment),Vc=l(),la=n("p"),Kc=a(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Jc=l(),$n=n("p"),Xc=a("This model inherits from "),Xs=n("a"),Gc=a("PreTrainedModel"),Yc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zc=l(),yn=n("p"),ep=a("This model is also a PyTorch "),Fn=n("a"),tp=a("torch.nn.Module"),op=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),np=l(),Qe=n("div"),M(zn.$$.fragment),sp=l(),It=n("p"),rp=a("The "),Gs=n("a"),ap=a("MPNetForMultipleChoice"),ip=a(" forward method, overrides the "),da=n("code"),lp=a("__call__"),dp=a(" special method."),cp=l(),M(go.$$.fragment),pp=l(),ca=n("p"),hp=a("Example:"),mp=l(),M(En.$$.fragment),$i=l(),Dt=n("h2"),_o=n("a"),pa=n("span"),M(qn.$$.fragment),up=l(),ha=n("span"),fp=a("MPNetForTokenClassification"),yi=l(),De=n("div"),M(Cn.$$.fragment),gp=l(),ma=n("p"),_p=a(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vp=l(),xn=n("p"),kp=a("This model inherits from "),Ys=n("a"),Tp=a("PreTrainedModel"),Mp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp=l(),jn=n("p"),wp=a("This model is also a PyTorch "),Ln=n("a"),Pp=a("torch.nn.Module"),Np=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$p=l(),Be=n("div"),M(An.$$.fragment),yp=l(),St=n("p"),Fp=a("The "),Zs=n("a"),zp=a("MPNetForTokenClassification"),Ep=a(" forward method, overrides the "),ua=n("code"),qp=a("__call__"),Cp=a(" special method."),xp=l(),M(vo.$$.fragment),jp=l(),fa=n("p"),Lp=a("Example:"),Ap=l(),M(In.$$.fragment),Fi=l(),Ot=n("h2"),ko=n("a"),ga=n("span"),M(Dn.$$.fragment),Ip=l(),_a=n("span"),Dp=a("MPNetForQuestionAnswering"),zi=l(),Se=n("div"),M(Sn.$$.fragment),Sp=l(),Wt=n("p"),Op=a(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),va=n("code"),Wp=a("span start logits"),Qp=a(" and "),ka=n("code"),Bp=a("span end logits"),Hp=a(")."),Rp=l(),On=n("p"),Up=a("This model inherits from "),er=n("a"),Vp=a("PreTrainedModel"),Kp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=l(),Wn=n("p"),Xp=a("This model is also a PyTorch "),Qn=n("a"),Gp=a("torch.nn.Module"),Yp=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zp=l(),He=n("div"),M(Bn.$$.fragment),eh=l(),Qt=n("p"),th=a("The "),tr=n("a"),oh=a("MPNetForQuestionAnswering"),nh=a(" forward method, overrides the "),Ta=n("code"),sh=a("__call__"),rh=a(" special method."),ah=l(),M(To.$$.fragment),ih=l(),Ma=n("p"),lh=a("Example:"),dh=l(),M(Hn.$$.fragment),Ei=l(),Bt=n("h2"),Mo=n("a"),ba=n("span"),M(Rn.$$.fragment),ch=l(),wa=n("span"),ph=a("TFMPNetModel"),qi=l(),ye=n("div"),M(Un.$$.fragment),hh=l(),Pa=n("p"),mh=a("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),uh=l(),Vn=n("p"),fh=a("This model inherits from "),or=n("a"),gh=a("TFPreTrainedModel"),_h=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh=l(),Kn=n("p"),kh=a("This model is also a "),Jn=n("a"),Th=a("tf.keras.Model"),Mh=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh=l(),M(bo.$$.fragment),wh=l(),Re=n("div"),M(Xn.$$.fragment),Ph=l(),Ht=n("p"),Nh=a("The "),nr=n("a"),$h=a("TFMPNetModel"),yh=a(" forward method, overrides the "),Na=n("code"),Fh=a("__call__"),zh=a(" special method."),Eh=l(),M(wo.$$.fragment),qh=l(),$a=n("p"),Ch=a("Example:"),xh=l(),M(Gn.$$.fragment),Ci=l(),Rt=n("h2"),Po=n("a"),ya=n("span"),M(Yn.$$.fragment),jh=l(),Fa=n("span"),Lh=a("TFMPNetForMaskedLM"),xi=l(),Fe=n("div"),M(Zn.$$.fragment),Ah=l(),es=n("p"),Ih=a("MPNet Model with a "),za=n("code"),Dh=a("language modeling"),Sh=a(" head on top."),Oh=l(),ts=n("p"),Wh=a("This model inherits from "),sr=n("a"),Qh=a("TFPreTrainedModel"),Bh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=l(),os=n("p"),Rh=a("This model is also a "),ns=n("a"),Uh=a("tf.keras.Model"),Vh=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kh=l(),M(No.$$.fragment),Jh=l(),Ue=n("div"),M(ss.$$.fragment),Xh=l(),Ut=n("p"),Gh=a("The "),rr=n("a"),Yh=a("TFMPNetForMaskedLM"),Zh=a(" forward method, overrides the "),Ea=n("code"),em=a("__call__"),tm=a(" special method."),om=l(),M($o.$$.fragment),nm=l(),qa=n("p"),sm=a("Example:"),rm=l(),M(rs.$$.fragment),ji=l(),Vt=n("h2"),yo=n("a"),Ca=n("span"),M(as.$$.fragment),am=l(),xa=n("span"),im=a("TFMPNetForSequenceClassification"),Li=l(),ze=n("div"),M(is.$$.fragment),lm=l(),ja=n("p"),dm=a(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),cm=l(),ls=n("p"),pm=a("This model inherits from "),ar=n("a"),hm=a("TFPreTrainedModel"),mm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),um=l(),ds=n("p"),fm=a("This model is also a "),cs=n("a"),gm=a("tf.keras.Model"),_m=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vm=l(),M(Fo.$$.fragment),km=l(),Ve=n("div"),M(ps.$$.fragment),Tm=l(),Kt=n("p"),Mm=a("The "),ir=n("a"),bm=a("TFMPNetForSequenceClassification"),wm=a(" forward method, overrides the "),La=n("code"),Pm=a("__call__"),Nm=a(" special method."),$m=l(),M(zo.$$.fragment),ym=l(),Aa=n("p"),Fm=a("Example:"),zm=l(),M(hs.$$.fragment),Ai=l(),Jt=n("h2"),Eo=n("a"),Ia=n("span"),M(ms.$$.fragment),Em=l(),Da=n("span"),qm=a("TFMPNetForMultipleChoice"),Ii=l(),Ee=n("div"),M(us.$$.fragment),Cm=l(),Sa=n("p"),xm=a(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jm=l(),fs=n("p"),Lm=a("This model inherits from "),lr=n("a"),Am=a("TFPreTrainedModel"),Im=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm=l(),gs=n("p"),Sm=a("This model is also a "),_s=n("a"),Om=a("tf.keras.Model"),Wm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qm=l(),M(qo.$$.fragment),Bm=l(),Ke=n("div"),M(vs.$$.fragment),Hm=l(),Xt=n("p"),Rm=a("The "),dr=n("a"),Um=a("TFMPNetForMultipleChoice"),Vm=a(" forward method, overrides the "),Oa=n("code"),Km=a("__call__"),Jm=a(" special method."),Xm=l(),M(Co.$$.fragment),Gm=l(),Wa=n("p"),Ym=a("Example:"),Zm=l(),M(ks.$$.fragment),Di=l(),Gt=n("h2"),xo=n("a"),Qa=n("span"),M(Ts.$$.fragment),eu=l(),Ba=n("span"),tu=a("TFMPNetForTokenClassification"),Si=l(),qe=n("div"),M(Ms.$$.fragment),ou=l(),Ha=n("p"),nu=a(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),su=l(),bs=n("p"),ru=a("This model inherits from "),cr=n("a"),au=a("TFPreTrainedModel"),iu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu=l(),ws=n("p"),du=a("This model is also a "),Ps=n("a"),cu=a("tf.keras.Model"),pu=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hu=l(),M(jo.$$.fragment),mu=l(),Je=n("div"),M(Ns.$$.fragment),uu=l(),Yt=n("p"),fu=a("The "),pr=n("a"),gu=a("TFMPNetForTokenClassification"),_u=a(" forward method, overrides the "),Ra=n("code"),vu=a("__call__"),ku=a(" special method."),Tu=l(),M(Lo.$$.fragment),Mu=l(),Ua=n("p"),bu=a("Example:"),wu=l(),M($s.$$.fragment),Oi=l(),Zt=n("h2"),Ao=n("a"),Va=n("span"),M(ys.$$.fragment),Pu=l(),Ka=n("span"),Nu=a("TFMPNetForQuestionAnswering"),Wi=l(),Ce=n("div"),M(Fs.$$.fragment),$u=l(),eo=n("p"),yu=a(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ja=n("code"),Fu=a("span start logits"),zu=a(" and "),Xa=n("code"),Eu=a("span end logits"),qu=a(")."),Cu=l(),zs=n("p"),xu=a("This model inherits from "),hr=n("a"),ju=a("TFPreTrainedModel"),Lu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au=l(),Es=n("p"),Iu=a("This model is also a "),qs=n("a"),Du=a("tf.keras.Model"),Su=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou=l(),M(Io.$$.fragment),Wu=l(),Xe=n("div"),M(Cs.$$.fragment),Qu=l(),to=n("p"),Bu=a("The "),mr=n("a"),Hu=a("TFMPNetForQuestionAnswering"),Ru=a(" forward method, overrides the "),Ga=n("code"),Uu=a("__call__"),Vu=a(" special method."),Ku=l(),M(Do.$$.fragment),Ju=l(),Ya=n("p"),Xu=a("Example:"),Gu=l(),M(xs.$$.fragment),this.h()},l(o){const u=C_('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),y=d(o),f=s(o,"H1",{class:!0});var js=r(f);g=s(js,"A",{id:!0,class:!0,href:!0});var Za=r(g);k=s(Za,"SPAN",{});var ei=r(k);b(v.$$.fragment,ei),ei.forEach(t),Za.forEach(t),_=d(js),F=s(js,"SPAN",{});var ti=r(F);le=i(ti,"MPNet"),ti.forEach(t),js.forEach(t),U=d(o),z=s(o,"H2",{class:!0});var Ls=r(z);J=s(Ls,"A",{id:!0,class:!0,href:!0});var oi=r(J);S=s(oi,"SPAN",{});var ni=r(S);b(X.$$.fragment,ni),ni.forEach(t),oi.forEach(t),de=d(Ls),O=s(Ls,"SPAN",{});var si=r(O);ce=i(si,"Overview"),si.forEach(t),Ls.forEach(t),se=d(o),R=s(o,"P",{});var As=r(R);A=i(As,"The MPNet model was proposed in "),G=s(As,"A",{href:!0,rel:!0});var ri=r(G);V=i(ri,"MPNet: Masked and Permuted Pre-training for Language Understanding"),ri.forEach(t),E=i(As," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),As.forEach(t),q=d(o),Y=s(o,"P",{});var ai=r(Y);B=i(ai,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),ai.forEach(t),re=d(o),Z=s(o,"P",{});var ii=r(Z);H=i(ii,"The abstract from the paper is the following:"),ii.forEach(t),ae=d(o),ee=s(o,"P",{});var li=r(ee);C=s(li,"EM",{});var di=r(C);pe=i(di,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),di.forEach(t),li.forEach(t),W=d(o),te=s(o,"P",{});var ci=r(te);he=i(ci,"Tips:"),ci.forEach(t),j=d(o),oe=s(o,"UL",{});var pi=r(oe);x=s(pi,"LI",{});var lt=r(x);me=i(lt,"MPNet doesn\u2019t have "),c=s(lt,"CODE",{});var hi=r(c);T=i(hi,"token_type_ids"),hi.forEach(t),K=i(lt,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=s(lt,"CODE",{});var ef=r(_e);ke=i(ef,"tokenizer.sep_token"),ef.forEach(t),I=i(lt," (or "),ve=s(lt,"CODE",{});var tf=r(ve);Te=i(tf,"[sep]"),tf.forEach(t),Me=i(lt,")."),lt.forEach(t),pi.forEach(t),L=d(o),D=s(o,"P",{});var Bi=r(D);be=i(Bi,"The original code can be found "),ge=s(Bi,"A",{href:!0,rel:!0});var of=r(ge);ue=i(of,"here"),of.forEach(t),we=i(Bi,"."),Bi.forEach(t),ie=d(o),fe=s(o,"H2",{class:!0});var Hi=r(fe);oo=s(Hi,"A",{id:!0,class:!0,href:!0});var nf=r(oo);Er=s(nf,"SPAN",{});var sf=r(Er);b(Wo.$$.fragment,sf),sf.forEach(t),nf.forEach(t),Al=d(Hi),qr=s(Hi,"SPAN",{});var rf=r(qr);Il=i(rf,"MPNetConfig"),rf.forEach(t),Hi.forEach(t),mi=d(o),je=s(o,"DIV",{class:!0});var ct=r(je);b(Qo.$$.fragment,ct),Dl=d(ct),it=s(ct,"P",{});var So=r(it);Sl=i(So,"This is the configuration class to store the configuration of a "),Is=s(So,"A",{href:!0});var af=r(Is);Ol=i(af,"MPNetModel"),af.forEach(t),Wl=i(So," or a "),Ds=s(So,"A",{href:!0});var lf=r(Ds);Ql=i(lf,"TFMPNetModel"),lf.forEach(t),Bl=i(So,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Bo=s(So,"A",{href:!0,rel:!0});var df=r(Bo);Hl=i(df,"mpnet-base"),df.forEach(t),Rl=i(So," architecture."),So.forEach(t),Ul=d(ct),yt=s(ct,"P",{});var ur=r(yt);Vl=i(ur,"Configuration objects inherit from "),Ss=s(ur,"A",{href:!0});var cf=r(Ss);Kl=i(cf,"PretrainedConfig"),cf.forEach(t),Jl=i(ur,` and can be used to control the model outputs. Read the
documentation from `),Os=s(ur,"A",{href:!0});var pf=r(Os);Xl=i(pf,"PretrainedConfig"),pf.forEach(t),Gl=i(ur," for more information."),ur.forEach(t),Yl=d(ct),Cr=s(ct,"P",{});var hf=r(Cr);Zl=i(hf,"Examples:"),hf.forEach(t),ed=d(ct),b(Ho.$$.fragment,ct),ct.forEach(t),ui=d(o),Ft=s(o,"H2",{class:!0});var Ri=r(Ft);no=s(Ri,"A",{id:!0,class:!0,href:!0});var mf=r(no);xr=s(mf,"SPAN",{});var uf=r(xr);b(Ro.$$.fragment,uf),uf.forEach(t),mf.forEach(t),td=d(Ri),jr=s(Ri,"SPAN",{});var ff=r(jr);od=i(ff,"MPNetTokenizer"),ff.forEach(t),Ri.forEach(t),fi=d(o),$e=s(o,"DIV",{class:!0});var et=r($e);b(Uo.$$.fragment,et),nd=d(et),Vo=s(et,"P",{});var Ui=r(Vo);sd=i(Ui,"This tokenizer inherits from "),Ws=s(Ui,"A",{href:!0});var gf=r(Ws);rd=i(gf,"BertTokenizer"),gf.forEach(t),ad=i(Ui,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),Ui.forEach(t),id=d(et),dt=s(et,"DIV",{class:!0});var fr=r(dt);b(Ko.$$.fragment,fr),ld=d(fr),Lr=s(fr,"P",{});var _f=r(Lr);dd=i(_f,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),_f.forEach(t),cd=d(fr),Jo=s(fr,"UL",{});var Vi=r(Jo);Qs=s(Vi,"LI",{});var Yu=r(Qs);pd=i(Yu,"single sequence: "),Ar=s(Yu,"CODE",{});var vf=r(Ar);hd=i(vf,"<s> X </s>"),vf.forEach(t),Yu.forEach(t),md=d(Vi),Bs=s(Vi,"LI",{});var Zu=r(Bs);ud=i(Zu,"pair of sequences: "),Ir=s(Zu,"CODE",{});var kf=r(Ir);fd=i(kf,"<s> A </s></s> B </s>"),kf.forEach(t),Zu.forEach(t),Vi.forEach(t),fr.forEach(t),gd=d(et),so=s(et,"DIV",{class:!0});var Ki=r(so);b(Xo.$$.fragment,Ki),_d=d(Ki),Go=s(Ki,"P",{});var Ji=r(Go);vd=i(Ji,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Dr=s(Ji,"CODE",{});var Tf=r(Dr);kd=i(Tf,"prepare_for_model"),Tf.forEach(t),Td=i(Ji," methods."),Ji.forEach(t),Ki.forEach(t),Md=d(et),ro=s(et,"DIV",{class:!0});var Xi=r(ro);b(Yo.$$.fragment,Xi),bd=d(Xi),Sr=s(Xi,"P",{});var Mf=r(Sr);wd=i(Mf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Mf.forEach(t),Xi.forEach(t),Pd=d(et),Or=s(et,"DIV",{class:!0}),r(Or).forEach(t),et.forEach(t),gi=d(o),zt=s(o,"H2",{class:!0});var Gi=r(zt);ao=s(Gi,"A",{id:!0,class:!0,href:!0});var bf=r(ao);Wr=s(bf,"SPAN",{});var wf=r(Wr);b(Zo.$$.fragment,wf),wf.forEach(t),bf.forEach(t),Nd=d(Gi),Qr=s(Gi,"SPAN",{});var Pf=r(Qr);$d=i(Pf,"MPNetTokenizerFast"),Pf.forEach(t),Gi.forEach(t),_i=d(o),Ze=s(o,"DIV",{class:!0});var Oo=r(Ze);b(en.$$.fragment,Oo),yd=d(Oo),tn=s(Oo,"P",{});var Yi=r(tn);Fd=i(Yi,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),Br=s(Yi,"EM",{});var Nf=r(Br);zd=i(Nf,"tokenizers"),Nf.forEach(t),Ed=i(Yi," library). Based on WordPiece."),Yi.forEach(t),qd=d(Oo),on=s(Oo,"P",{});var Zi=r(on);Cd=i(Zi,"This tokenizer inherits from "),Hs=s(Zi,"A",{href:!0});var $f=r(Hs);xd=i($f,"PreTrainedTokenizerFast"),$f.forEach(t),jd=i(Zi,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zi.forEach(t),Ld=d(Oo),io=s(Oo,"DIV",{class:!0});var el=r(io);b(nn.$$.fragment,el),Ad=d(el),Hr=s(el,"P",{});var yf=r(Hr);Id=i(yf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),yf.forEach(t),el.forEach(t),Oo.forEach(t),vi=d(o),Et=s(o,"H2",{class:!0});var tl=r(Et);lo=s(tl,"A",{id:!0,class:!0,href:!0});var Ff=r(lo);Rr=s(Ff,"SPAN",{});var zf=r(Rr);b(sn.$$.fragment,zf),zf.forEach(t),Ff.forEach(t),Dd=d(tl),Ur=s(tl,"SPAN",{});var Ef=r(Ur);Sd=i(Ef,"MPNetModel"),Ef.forEach(t),tl.forEach(t),ki=d(o),Le=s(o,"DIV",{class:!0});var pt=r(Le);b(rn.$$.fragment,pt),Od=d(pt),Vr=s(pt,"P",{});var qf=r(Vr);Wd=i(qf,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),qf.forEach(t),Qd=d(pt),an=s(pt,"P",{});var ol=r(an);Bd=i(ol,"This model inherits from "),Rs=s(ol,"A",{href:!0});var Cf=r(Rs);Hd=i(Cf,"PreTrainedModel"),Cf.forEach(t),Rd=i(ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ol.forEach(t),Ud=d(pt),ln=s(pt,"P",{});var nl=r(ln);Vd=i(nl,"This model is also a PyTorch "),dn=s(nl,"A",{href:!0,rel:!0});var xf=r(dn);Kd=i(xf,"torch.nn.Module"),xf.forEach(t),Jd=i(nl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nl.forEach(t),Xd=d(pt),Oe=s(pt,"DIV",{class:!0});var ht=r(Oe);b(cn.$$.fragment,ht),Gd=d(ht),qt=s(ht,"P",{});var gr=r(qt);Yd=i(gr,"The "),Us=s(gr,"A",{href:!0});var jf=r(Us);Zd=i(jf,"MPNetModel"),jf.forEach(t),ec=i(gr," forward method, overrides the "),Kr=s(gr,"CODE",{});var Lf=r(Kr);tc=i(Lf,"__call__"),Lf.forEach(t),oc=i(gr," special method."),gr.forEach(t),nc=d(ht),b(co.$$.fragment,ht),sc=d(ht),Jr=s(ht,"P",{});var Af=r(Jr);rc=i(Af,"Example:"),Af.forEach(t),ac=d(ht),b(pn.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Ti=d(o),Ct=s(o,"H2",{class:!0});var sl=r(Ct);po=s(sl,"A",{id:!0,class:!0,href:!0});var If=r(po);Xr=s(If,"SPAN",{});var Df=r(Xr);b(hn.$$.fragment,Df),Df.forEach(t),If.forEach(t),ic=d(sl),Gr=s(sl,"SPAN",{});var Sf=r(Gr);lc=i(Sf,"MPNetForMaskedLM"),Sf.forEach(t),sl.forEach(t),Mi=d(o),mn=s(o,"DIV",{class:!0});var Of=r(mn);We=s(Of,"DIV",{class:!0});var mt=r(We);b(un.$$.fragment,mt),dc=d(mt),xt=s(mt,"P",{});var _r=r(xt);cc=i(_r,"The "),Vs=s(_r,"A",{href:!0});var Wf=r(Vs);pc=i(Wf,"MPNetForMaskedLM"),Wf.forEach(t),hc=i(_r," forward method, overrides the "),Yr=s(_r,"CODE",{});var Qf=r(Yr);mc=i(Qf,"__call__"),Qf.forEach(t),uc=i(_r," special method."),_r.forEach(t),fc=d(mt),b(ho.$$.fragment,mt),gc=d(mt),Zr=s(mt,"P",{});var Bf=r(Zr);_c=i(Bf,"Example:"),Bf.forEach(t),vc=d(mt),b(fn.$$.fragment,mt),mt.forEach(t),Of.forEach(t),bi=d(o),jt=s(o,"H2",{class:!0});var rl=r(jt);mo=s(rl,"A",{id:!0,class:!0,href:!0});var Hf=r(mo);ea=s(Hf,"SPAN",{});var Rf=r(ea);b(gn.$$.fragment,Rf),Rf.forEach(t),Hf.forEach(t),kc=d(rl),ta=s(rl,"SPAN",{});var Uf=r(ta);Tc=i(Uf,"MPNetForSequenceClassification"),Uf.forEach(t),rl.forEach(t),wi=d(o),Ae=s(o,"DIV",{class:!0});var ut=r(Ae);b(_n.$$.fragment,ut),Mc=d(ut),oa=s(ut,"P",{});var Vf=r(oa);bc=i(Vf,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Vf.forEach(t),wc=d(ut),vn=s(ut,"P",{});var al=r(vn);Pc=i(al,"This model inherits from "),Ks=s(al,"A",{href:!0});var Kf=r(Ks);Nc=i(Kf,"PreTrainedModel"),Kf.forEach(t),$c=i(al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),al.forEach(t),yc=d(ut),kn=s(ut,"P",{});var il=r(kn);Fc=i(il,"This model is also a PyTorch "),Tn=s(il,"A",{href:!0,rel:!0});var Jf=r(Tn);zc=i(Jf,"torch.nn.Module"),Jf.forEach(t),Ec=i(il,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),il.forEach(t),qc=d(ut),Pe=s(ut,"DIV",{class:!0});var Ge=r(Pe);b(Mn.$$.fragment,Ge),Cc=d(Ge),Lt=s(Ge,"P",{});var vr=r(Lt);xc=i(vr,"The "),Js=s(vr,"A",{href:!0});var Xf=r(Js);jc=i(Xf,"MPNetForSequenceClassification"),Xf.forEach(t),Lc=i(vr," forward method, overrides the "),na=s(vr,"CODE",{});var Gf=r(na);Ac=i(Gf,"__call__"),Gf.forEach(t),Ic=i(vr," special method."),vr.forEach(t),Dc=d(Ge),b(uo.$$.fragment,Ge),Sc=d(Ge),sa=s(Ge,"P",{});var Yf=r(sa);Oc=i(Yf,"Example of single-label classification:"),Yf.forEach(t),Wc=d(Ge),b(bn.$$.fragment,Ge),Qc=d(Ge),ra=s(Ge,"P",{});var Zf=r(ra);Bc=i(Zf,"Example of multi-label classification:"),Zf.forEach(t),Hc=d(Ge),b(wn.$$.fragment,Ge),Ge.forEach(t),ut.forEach(t),Pi=d(o),At=s(o,"H2",{class:!0});var ll=r(At);fo=s(ll,"A",{id:!0,class:!0,href:!0});var eg=r(fo);aa=s(eg,"SPAN",{});var tg=r(aa);b(Pn.$$.fragment,tg),tg.forEach(t),eg.forEach(t),Rc=d(ll),ia=s(ll,"SPAN",{});var og=r(ia);Uc=i(og,"MPNetForMultipleChoice"),og.forEach(t),ll.forEach(t),Ni=d(o),Ie=s(o,"DIV",{class:!0});var ft=r(Ie);b(Nn.$$.fragment,ft),Vc=d(ft),la=s(ft,"P",{});var ng=r(la);Kc=i(ng,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ng.forEach(t),Jc=d(ft),$n=s(ft,"P",{});var dl=r($n);Xc=i(dl,"This model inherits from "),Xs=s(dl,"A",{href:!0});var sg=r(Xs);Gc=i(sg,"PreTrainedModel"),sg.forEach(t),Yc=i(dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl.forEach(t),Zc=d(ft),yn=s(ft,"P",{});var cl=r(yn);ep=i(cl,"This model is also a PyTorch "),Fn=s(cl,"A",{href:!0,rel:!0});var rg=r(Fn);tp=i(rg,"torch.nn.Module"),rg.forEach(t),op=i(cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cl.forEach(t),np=d(ft),Qe=s(ft,"DIV",{class:!0});var gt=r(Qe);b(zn.$$.fragment,gt),sp=d(gt),It=s(gt,"P",{});var kr=r(It);rp=i(kr,"The "),Gs=s(kr,"A",{href:!0});var ag=r(Gs);ap=i(ag,"MPNetForMultipleChoice"),ag.forEach(t),ip=i(kr," forward method, overrides the "),da=s(kr,"CODE",{});var ig=r(da);lp=i(ig,"__call__"),ig.forEach(t),dp=i(kr," special method."),kr.forEach(t),cp=d(gt),b(go.$$.fragment,gt),pp=d(gt),ca=s(gt,"P",{});var lg=r(ca);hp=i(lg,"Example:"),lg.forEach(t),mp=d(gt),b(En.$$.fragment,gt),gt.forEach(t),ft.forEach(t),$i=d(o),Dt=s(o,"H2",{class:!0});var pl=r(Dt);_o=s(pl,"A",{id:!0,class:!0,href:!0});var dg=r(_o);pa=s(dg,"SPAN",{});var cg=r(pa);b(qn.$$.fragment,cg),cg.forEach(t),dg.forEach(t),up=d(pl),ha=s(pl,"SPAN",{});var pg=r(ha);fp=i(pg,"MPNetForTokenClassification"),pg.forEach(t),pl.forEach(t),yi=d(o),De=s(o,"DIV",{class:!0});var _t=r(De);b(Cn.$$.fragment,_t),gp=d(_t),ma=s(_t,"P",{});var hg=r(ma);_p=i(hg,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hg.forEach(t),vp=d(_t),xn=s(_t,"P",{});var hl=r(xn);kp=i(hl,"This model inherits from "),Ys=s(hl,"A",{href:!0});var mg=r(Ys);Tp=i(mg,"PreTrainedModel"),mg.forEach(t),Mp=i(hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl.forEach(t),bp=d(_t),jn=s(_t,"P",{});var ml=r(jn);wp=i(ml,"This model is also a PyTorch "),Ln=s(ml,"A",{href:!0,rel:!0});var ug=r(Ln);Pp=i(ug,"torch.nn.Module"),ug.forEach(t),Np=i(ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ml.forEach(t),$p=d(_t),Be=s(_t,"DIV",{class:!0});var vt=r(Be);b(An.$$.fragment,vt),yp=d(vt),St=s(vt,"P",{});var Tr=r(St);Fp=i(Tr,"The "),Zs=s(Tr,"A",{href:!0});var fg=r(Zs);zp=i(fg,"MPNetForTokenClassification"),fg.forEach(t),Ep=i(Tr," forward method, overrides the "),ua=s(Tr,"CODE",{});var gg=r(ua);qp=i(gg,"__call__"),gg.forEach(t),Cp=i(Tr," special method."),Tr.forEach(t),xp=d(vt),b(vo.$$.fragment,vt),jp=d(vt),fa=s(vt,"P",{});var _g=r(fa);Lp=i(_g,"Example:"),_g.forEach(t),Ap=d(vt),b(In.$$.fragment,vt),vt.forEach(t),_t.forEach(t),Fi=d(o),Ot=s(o,"H2",{class:!0});var ul=r(Ot);ko=s(ul,"A",{id:!0,class:!0,href:!0});var vg=r(ko);ga=s(vg,"SPAN",{});var kg=r(ga);b(Dn.$$.fragment,kg),kg.forEach(t),vg.forEach(t),Ip=d(ul),_a=s(ul,"SPAN",{});var Tg=r(_a);Dp=i(Tg,"MPNetForQuestionAnswering"),Tg.forEach(t),ul.forEach(t),zi=d(o),Se=s(o,"DIV",{class:!0});var kt=r(Se);b(Sn.$$.fragment,kt),Sp=d(kt),Wt=s(kt,"P",{});var Mr=r(Wt);Op=i(Mr,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),va=s(Mr,"CODE",{});var Mg=r(va);Wp=i(Mg,"span start logits"),Mg.forEach(t),Qp=i(Mr," and "),ka=s(Mr,"CODE",{});var bg=r(ka);Bp=i(bg,"span end logits"),bg.forEach(t),Hp=i(Mr,")."),Mr.forEach(t),Rp=d(kt),On=s(kt,"P",{});var fl=r(On);Up=i(fl,"This model inherits from "),er=s(fl,"A",{href:!0});var wg=r(er);Vp=i(wg,"PreTrainedModel"),wg.forEach(t),Kp=i(fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl.forEach(t),Jp=d(kt),Wn=s(kt,"P",{});var gl=r(Wn);Xp=i(gl,"This model is also a PyTorch "),Qn=s(gl,"A",{href:!0,rel:!0});var Pg=r(Qn);Gp=i(Pg,"torch.nn.Module"),Pg.forEach(t),Yp=i(gl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gl.forEach(t),Zp=d(kt),He=s(kt,"DIV",{class:!0});var Tt=r(He);b(Bn.$$.fragment,Tt),eh=d(Tt),Qt=s(Tt,"P",{});var br=r(Qt);th=i(br,"The "),tr=s(br,"A",{href:!0});var Ng=r(tr);oh=i(Ng,"MPNetForQuestionAnswering"),Ng.forEach(t),nh=i(br," forward method, overrides the "),Ta=s(br,"CODE",{});var $g=r(Ta);sh=i($g,"__call__"),$g.forEach(t),rh=i(br," special method."),br.forEach(t),ah=d(Tt),b(To.$$.fragment,Tt),ih=d(Tt),Ma=s(Tt,"P",{});var yg=r(Ma);lh=i(yg,"Example:"),yg.forEach(t),dh=d(Tt),b(Hn.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Ei=d(o),Bt=s(o,"H2",{class:!0});var _l=r(Bt);Mo=s(_l,"A",{id:!0,class:!0,href:!0});var Fg=r(Mo);ba=s(Fg,"SPAN",{});var zg=r(ba);b(Rn.$$.fragment,zg),zg.forEach(t),Fg.forEach(t),ch=d(_l),wa=s(_l,"SPAN",{});var Eg=r(wa);ph=i(Eg,"TFMPNetModel"),Eg.forEach(t),_l.forEach(t),qi=d(o),ye=s(o,"DIV",{class:!0});var tt=r(ye);b(Un.$$.fragment,tt),hh=d(tt),Pa=s(tt,"P",{});var qg=r(Pa);mh=i(qg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),qg.forEach(t),uh=d(tt),Vn=s(tt,"P",{});var vl=r(Vn);fh=i(vl,"This model inherits from "),or=s(vl,"A",{href:!0});var Cg=r(or);gh=i(Cg,"TFPreTrainedModel"),Cg.forEach(t),_h=i(vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vl.forEach(t),vh=d(tt),Kn=s(tt,"P",{});var kl=r(Kn);kh=i(kl,"This model is also a "),Jn=s(kl,"A",{href:!0,rel:!0});var xg=r(Jn);Th=i(xg,"tf.keras.Model"),xg.forEach(t),Mh=i(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),bh=d(tt),b(bo.$$.fragment,tt),wh=d(tt),Re=s(tt,"DIV",{class:!0});var Mt=r(Re);b(Xn.$$.fragment,Mt),Ph=d(Mt),Ht=s(Mt,"P",{});var wr=r(Ht);Nh=i(wr,"The "),nr=s(wr,"A",{href:!0});var jg=r(nr);$h=i(jg,"TFMPNetModel"),jg.forEach(t),yh=i(wr," forward method, overrides the "),Na=s(wr,"CODE",{});var Lg=r(Na);Fh=i(Lg,"__call__"),Lg.forEach(t),zh=i(wr," special method."),wr.forEach(t),Eh=d(Mt),b(wo.$$.fragment,Mt),qh=d(Mt),$a=s(Mt,"P",{});var Ag=r($a);Ch=i(Ag,"Example:"),Ag.forEach(t),xh=d(Mt),b(Gn.$$.fragment,Mt),Mt.forEach(t),tt.forEach(t),Ci=d(o),Rt=s(o,"H2",{class:!0});var Tl=r(Rt);Po=s(Tl,"A",{id:!0,class:!0,href:!0});var Ig=r(Po);ya=s(Ig,"SPAN",{});var Dg=r(ya);b(Yn.$$.fragment,Dg),Dg.forEach(t),Ig.forEach(t),jh=d(Tl),Fa=s(Tl,"SPAN",{});var Sg=r(Fa);Lh=i(Sg,"TFMPNetForMaskedLM"),Sg.forEach(t),Tl.forEach(t),xi=d(o),Fe=s(o,"DIV",{class:!0});var ot=r(Fe);b(Zn.$$.fragment,ot),Ah=d(ot),es=s(ot,"P",{});var Ml=r(es);Ih=i(Ml,"MPNet Model with a "),za=s(Ml,"CODE",{});var Og=r(za);Dh=i(Og,"language modeling"),Og.forEach(t),Sh=i(Ml," head on top."),Ml.forEach(t),Oh=d(ot),ts=s(ot,"P",{});var bl=r(ts);Wh=i(bl,"This model inherits from "),sr=s(bl,"A",{href:!0});var Wg=r(sr);Qh=i(Wg,"TFPreTrainedModel"),Wg.forEach(t),Bh=i(bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl.forEach(t),Hh=d(ot),os=s(ot,"P",{});var wl=r(os);Rh=i(wl,"This model is also a "),ns=s(wl,"A",{href:!0,rel:!0});var Qg=r(ns);Uh=i(Qg,"tf.keras.Model"),Qg.forEach(t),Vh=i(wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wl.forEach(t),Kh=d(ot),b(No.$$.fragment,ot),Jh=d(ot),Ue=s(ot,"DIV",{class:!0});var bt=r(Ue);b(ss.$$.fragment,bt),Xh=d(bt),Ut=s(bt,"P",{});var Pr=r(Ut);Gh=i(Pr,"The "),rr=s(Pr,"A",{href:!0});var Bg=r(rr);Yh=i(Bg,"TFMPNetForMaskedLM"),Bg.forEach(t),Zh=i(Pr," forward method, overrides the "),Ea=s(Pr,"CODE",{});var Hg=r(Ea);em=i(Hg,"__call__"),Hg.forEach(t),tm=i(Pr," special method."),Pr.forEach(t),om=d(bt),b($o.$$.fragment,bt),nm=d(bt),qa=s(bt,"P",{});var Rg=r(qa);sm=i(Rg,"Example:"),Rg.forEach(t),rm=d(bt),b(rs.$$.fragment,bt),bt.forEach(t),ot.forEach(t),ji=d(o),Vt=s(o,"H2",{class:!0});var Pl=r(Vt);yo=s(Pl,"A",{id:!0,class:!0,href:!0});var Ug=r(yo);Ca=s(Ug,"SPAN",{});var Vg=r(Ca);b(as.$$.fragment,Vg),Vg.forEach(t),Ug.forEach(t),am=d(Pl),xa=s(Pl,"SPAN",{});var Kg=r(xa);im=i(Kg,"TFMPNetForSequenceClassification"),Kg.forEach(t),Pl.forEach(t),Li=d(o),ze=s(o,"DIV",{class:!0});var nt=r(ze);b(is.$$.fragment,nt),lm=d(nt),ja=s(nt,"P",{});var Jg=r(ja);dm=i(Jg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Jg.forEach(t),cm=d(nt),ls=s(nt,"P",{});var Nl=r(ls);pm=i(Nl,"This model inherits from "),ar=s(Nl,"A",{href:!0});var Xg=r(ar);hm=i(Xg,"TFPreTrainedModel"),Xg.forEach(t),mm=i(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),um=d(nt),ds=s(nt,"P",{});var $l=r(ds);fm=i($l,"This model is also a "),cs=s($l,"A",{href:!0,rel:!0});var Gg=r(cs);gm=i(Gg,"tf.keras.Model"),Gg.forEach(t),_m=i($l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$l.forEach(t),vm=d(nt),b(Fo.$$.fragment,nt),km=d(nt),Ve=s(nt,"DIV",{class:!0});var wt=r(Ve);b(ps.$$.fragment,wt),Tm=d(wt),Kt=s(wt,"P",{});var Nr=r(Kt);Mm=i(Nr,"The "),ir=s(Nr,"A",{href:!0});var Yg=r(ir);bm=i(Yg,"TFMPNetForSequenceClassification"),Yg.forEach(t),wm=i(Nr," forward method, overrides the "),La=s(Nr,"CODE",{});var Zg=r(La);Pm=i(Zg,"__call__"),Zg.forEach(t),Nm=i(Nr," special method."),Nr.forEach(t),$m=d(wt),b(zo.$$.fragment,wt),ym=d(wt),Aa=s(wt,"P",{});var e_=r(Aa);Fm=i(e_,"Example:"),e_.forEach(t),zm=d(wt),b(hs.$$.fragment,wt),wt.forEach(t),nt.forEach(t),Ai=d(o),Jt=s(o,"H2",{class:!0});var yl=r(Jt);Eo=s(yl,"A",{id:!0,class:!0,href:!0});var t_=r(Eo);Ia=s(t_,"SPAN",{});var o_=r(Ia);b(ms.$$.fragment,o_),o_.forEach(t),t_.forEach(t),Em=d(yl),Da=s(yl,"SPAN",{});var n_=r(Da);qm=i(n_,"TFMPNetForMultipleChoice"),n_.forEach(t),yl.forEach(t),Ii=d(o),Ee=s(o,"DIV",{class:!0});var st=r(Ee);b(us.$$.fragment,st),Cm=d(st),Sa=s(st,"P",{});var s_=r(Sa);xm=i(s_,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s_.forEach(t),jm=d(st),fs=s(st,"P",{});var Fl=r(fs);Lm=i(Fl,"This model inherits from "),lr=s(Fl,"A",{href:!0});var r_=r(lr);Am=i(r_,"TFPreTrainedModel"),r_.forEach(t),Im=i(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),Dm=d(st),gs=s(st,"P",{});var zl=r(gs);Sm=i(zl,"This model is also a "),_s=s(zl,"A",{href:!0,rel:!0});var a_=r(_s);Om=i(a_,"tf.keras.Model"),a_.forEach(t),Wm=i(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),Qm=d(st),b(qo.$$.fragment,st),Bm=d(st),Ke=s(st,"DIV",{class:!0});var Pt=r(Ke);b(vs.$$.fragment,Pt),Hm=d(Pt),Xt=s(Pt,"P",{});var $r=r(Xt);Rm=i($r,"The "),dr=s($r,"A",{href:!0});var i_=r(dr);Um=i(i_,"TFMPNetForMultipleChoice"),i_.forEach(t),Vm=i($r," forward method, overrides the "),Oa=s($r,"CODE",{});var l_=r(Oa);Km=i(l_,"__call__"),l_.forEach(t),Jm=i($r," special method."),$r.forEach(t),Xm=d(Pt),b(Co.$$.fragment,Pt),Gm=d(Pt),Wa=s(Pt,"P",{});var d_=r(Wa);Ym=i(d_,"Example:"),d_.forEach(t),Zm=d(Pt),b(ks.$$.fragment,Pt),Pt.forEach(t),st.forEach(t),Di=d(o),Gt=s(o,"H2",{class:!0});var El=r(Gt);xo=s(El,"A",{id:!0,class:!0,href:!0});var c_=r(xo);Qa=s(c_,"SPAN",{});var p_=r(Qa);b(Ts.$$.fragment,p_),p_.forEach(t),c_.forEach(t),eu=d(El),Ba=s(El,"SPAN",{});var h_=r(Ba);tu=i(h_,"TFMPNetForTokenClassification"),h_.forEach(t),El.forEach(t),Si=d(o),qe=s(o,"DIV",{class:!0});var rt=r(qe);b(Ms.$$.fragment,rt),ou=d(rt),Ha=s(rt,"P",{});var m_=r(Ha);nu=i(m_,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),m_.forEach(t),su=d(rt),bs=s(rt,"P",{});var ql=r(bs);ru=i(ql,"This model inherits from "),cr=s(ql,"A",{href:!0});var u_=r(cr);au=i(u_,"TFPreTrainedModel"),u_.forEach(t),iu=i(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),lu=d(rt),ws=s(rt,"P",{});var Cl=r(ws);du=i(Cl,"This model is also a "),Ps=s(Cl,"A",{href:!0,rel:!0});var f_=r(Ps);cu=i(f_,"tf.keras.Model"),f_.forEach(t),pu=i(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),hu=d(rt),b(jo.$$.fragment,rt),mu=d(rt),Je=s(rt,"DIV",{class:!0});var Nt=r(Je);b(Ns.$$.fragment,Nt),uu=d(Nt),Yt=s(Nt,"P",{});var yr=r(Yt);fu=i(yr,"The "),pr=s(yr,"A",{href:!0});var g_=r(pr);gu=i(g_,"TFMPNetForTokenClassification"),g_.forEach(t),_u=i(yr," forward method, overrides the "),Ra=s(yr,"CODE",{});var __=r(Ra);vu=i(__,"__call__"),__.forEach(t),ku=i(yr," special method."),yr.forEach(t),Tu=d(Nt),b(Lo.$$.fragment,Nt),Mu=d(Nt),Ua=s(Nt,"P",{});var v_=r(Ua);bu=i(v_,"Example:"),v_.forEach(t),wu=d(Nt),b($s.$$.fragment,Nt),Nt.forEach(t),rt.forEach(t),Oi=d(o),Zt=s(o,"H2",{class:!0});var xl=r(Zt);Ao=s(xl,"A",{id:!0,class:!0,href:!0});var k_=r(Ao);Va=s(k_,"SPAN",{});var T_=r(Va);b(ys.$$.fragment,T_),T_.forEach(t),k_.forEach(t),Pu=d(xl),Ka=s(xl,"SPAN",{});var M_=r(Ka);Nu=i(M_,"TFMPNetForQuestionAnswering"),M_.forEach(t),xl.forEach(t),Wi=d(o),Ce=s(o,"DIV",{class:!0});var at=r(Ce);b(Fs.$$.fragment,at),$u=d(at),eo=s(at,"P",{});var Fr=r(eo);yu=i(Fr,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ja=s(Fr,"CODE",{});var b_=r(Ja);Fu=i(b_,"span start logits"),b_.forEach(t),zu=i(Fr," and "),Xa=s(Fr,"CODE",{});var w_=r(Xa);Eu=i(w_,"span end logits"),w_.forEach(t),qu=i(Fr,")."),Fr.forEach(t),Cu=d(at),zs=s(at,"P",{});var jl=r(zs);xu=i(jl,"This model inherits from "),hr=s(jl,"A",{href:!0});var P_=r(hr);ju=i(P_,"TFPreTrainedModel"),P_.forEach(t),Lu=i(jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl.forEach(t),Au=d(at),Es=s(at,"P",{});var Ll=r(Es);Iu=i(Ll,"This model is also a "),qs=s(Ll,"A",{href:!0,rel:!0});var N_=r(qs);Du=i(N_,"tf.keras.Model"),N_.forEach(t),Su=i(Ll,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ll.forEach(t),Ou=d(at),b(Io.$$.fragment,at),Wu=d(at),Xe=s(at,"DIV",{class:!0});var $t=r(Xe);b(Cs.$$.fragment,$t),Qu=d($t),to=s($t,"P",{});var zr=r(to);Bu=i(zr,"The "),mr=s(zr,"A",{href:!0});var $_=r(mr);Hu=i($_,"TFMPNetForQuestionAnswering"),$_.forEach(t),Ru=i(zr," forward method, overrides the "),Ga=s(zr,"CODE",{});var y_=r(Ga);Uu=i(y_,"__call__"),y_.forEach(t),Vu=i(zr," special method."),zr.forEach(t),Ku=d($t),b(Do.$$.fragment,$t),Ju=d($t),Ya=s($t,"P",{});var F_=r(Ya);Xu=i(F_,"Example:"),F_.forEach(t),Gu=d($t),b(xs.$$.fragment,$t),$t.forEach(t),at.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Y_)),h(g,"id","mpnet"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#mpnet"),h(f,"class","relative group"),h(J,"id","overview"),h(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(J,"href","#overview"),h(z,"class","relative group"),h(G,"href","https://arxiv.org/abs/2004.09297"),h(G,"rel","nofollow"),h(ge,"href","https://github.com/microsoft/MPNet"),h(ge,"rel","nofollow"),h(oo,"id","transformers.MPNetConfig"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.MPNetConfig"),h(fe,"class","relative group"),h(Is,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetModel"),h(Ds,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Bo,"href","https://huggingface.co/mpnet-base"),h(Bo,"rel","nofollow"),h(Ss,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(Os,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(je,"class","docstring"),h(no,"id","transformers.MPNetTokenizer"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.MPNetTokenizer"),h(Ft,"class","relative group"),h(Ws,"href","/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer"),h(dt,"class","docstring"),h(so,"class","docstring"),h(ro,"class","docstring"),h(Or,"class","docstring"),h($e,"class","docstring"),h(ao,"id","transformers.MPNetTokenizerFast"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.MPNetTokenizerFast"),h(zt,"class","relative group"),h(Hs,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(io,"class","docstring"),h(Ze,"class","docstring"),h(lo,"id","transformers.MPNetModel"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.MPNetModel"),h(Et,"class","relative group"),h(Rs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),h(dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(dn,"rel","nofollow"),h(Us,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetModel"),h(Oe,"class","docstring"),h(Le,"class","docstring"),h(po,"id","transformers.MPNetForMaskedLM"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.MPNetForMaskedLM"),h(Ct,"class","relative group"),h(Vs,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),h(We,"class","docstring"),h(mn,"class","docstring"),h(mo,"id","transformers.MPNetForSequenceClassification"),h(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mo,"href","#transformers.MPNetForSequenceClassification"),h(jt,"class","relative group"),h(Ks,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),h(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Tn,"rel","nofollow"),h(Js,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),h(Pe,"class","docstring"),h(Ae,"class","docstring"),h(fo,"id","transformers.MPNetForMultipleChoice"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.MPNetForMultipleChoice"),h(At,"class","relative group"),h(Xs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),h(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fn,"rel","nofollow"),h(Gs,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),h(Qe,"class","docstring"),h(Ie,"class","docstring"),h(_o,"id","transformers.MPNetForTokenClassification"),h(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_o,"href","#transformers.MPNetForTokenClassification"),h(Dt,"class","relative group"),h(Ys,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),h(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ln,"rel","nofollow"),h(Zs,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),h(Be,"class","docstring"),h(De,"class","docstring"),h(ko,"id","transformers.MPNetForQuestionAnswering"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.MPNetForQuestionAnswering"),h(Ot,"class","relative group"),h(er,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),h(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Qn,"rel","nofollow"),h(tr,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),h(He,"class","docstring"),h(Se,"class","docstring"),h(Mo,"id","transformers.TFMPNetModel"),h(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mo,"href","#transformers.TFMPNetModel"),h(Bt,"class","relative group"),h(or,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(Jn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Jn,"rel","nofollow"),h(nr,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Re,"class","docstring"),h(ye,"class","docstring"),h(Po,"id","transformers.TFMPNetForMaskedLM"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.TFMPNetForMaskedLM"),h(Rt,"class","relative group"),h(sr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ns,"rel","nofollow"),h(rr,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),h(Ue,"class","docstring"),h(Fe,"class","docstring"),h(yo,"id","transformers.TFMPNetForSequenceClassification"),h(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yo,"href","#transformers.TFMPNetForSequenceClassification"),h(Vt,"class","relative group"),h(ar,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(cs,"rel","nofollow"),h(ir,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),h(Ve,"class","docstring"),h(ze,"class","docstring"),h(Eo,"id","transformers.TFMPNetForMultipleChoice"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.TFMPNetForMultipleChoice"),h(Jt,"class","relative group"),h(lr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(_s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(_s,"rel","nofollow"),h(dr,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),h(Ke,"class","docstring"),h(Ee,"class","docstring"),h(xo,"id","transformers.TFMPNetForTokenClassification"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.TFMPNetForTokenClassification"),h(Gt,"class","relative group"),h(cr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ps,"rel","nofollow"),h(pr,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),h(Je,"class","docstring"),h(qe,"class","docstring"),h(Ao,"id","transformers.TFMPNetForQuestionAnswering"),h(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ao,"href","#transformers.TFMPNetForQuestionAnswering"),h(Zt,"class","relative group"),h(hr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(qs,"rel","nofollow"),h(mr,"href","/docs/transformers/v4.16.2/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),h(Xe,"class","docstring"),h(Ce,"class","docstring")},m(o,u){e(document.head,p),m(o,y,u),m(o,f,u),e(f,g),e(g,k),w(v,k,null),e(f,_),e(f,F),e(F,le),m(o,U,u),m(o,z,u),e(z,J),e(J,S),w(X,S,null),e(z,de),e(z,O),e(O,ce),m(o,se,u),m(o,R,u),e(R,A),e(R,G),e(G,V),e(R,E),m(o,q,u),m(o,Y,u),e(Y,B),m(o,re,u),m(o,Z,u),e(Z,H),m(o,ae,u),m(o,ee,u),e(ee,C),e(C,pe),m(o,W,u),m(o,te,u),e(te,he),m(o,j,u),m(o,oe,u),e(oe,x),e(x,me),e(x,c),e(c,T),e(x,K),e(x,_e),e(_e,ke),e(x,I),e(x,ve),e(ve,Te),e(x,Me),m(o,L,u),m(o,D,u),e(D,be),e(D,ge),e(ge,ue),e(D,we),m(o,ie,u),m(o,fe,u),e(fe,oo),e(oo,Er),w(Wo,Er,null),e(fe,Al),e(fe,qr),e(qr,Il),m(o,mi,u),m(o,je,u),w(Qo,je,null),e(je,Dl),e(je,it),e(it,Sl),e(it,Is),e(Is,Ol),e(it,Wl),e(it,Ds),e(Ds,Ql),e(it,Bl),e(it,Bo),e(Bo,Hl),e(it,Rl),e(je,Ul),e(je,yt),e(yt,Vl),e(yt,Ss),e(Ss,Kl),e(yt,Jl),e(yt,Os),e(Os,Xl),e(yt,Gl),e(je,Yl),e(je,Cr),e(Cr,Zl),e(je,ed),w(Ho,je,null),m(o,ui,u),m(o,Ft,u),e(Ft,no),e(no,xr),w(Ro,xr,null),e(Ft,td),e(Ft,jr),e(jr,od),m(o,fi,u),m(o,$e,u),w(Uo,$e,null),e($e,nd),e($e,Vo),e(Vo,sd),e(Vo,Ws),e(Ws,rd),e(Vo,ad),e($e,id),e($e,dt),w(Ko,dt,null),e(dt,ld),e(dt,Lr),e(Lr,dd),e(dt,cd),e(dt,Jo),e(Jo,Qs),e(Qs,pd),e(Qs,Ar),e(Ar,hd),e(Jo,md),e(Jo,Bs),e(Bs,ud),e(Bs,Ir),e(Ir,fd),e($e,gd),e($e,so),w(Xo,so,null),e(so,_d),e(so,Go),e(Go,vd),e(Go,Dr),e(Dr,kd),e(Go,Td),e($e,Md),e($e,ro),w(Yo,ro,null),e(ro,bd),e(ro,Sr),e(Sr,wd),e($e,Pd),e($e,Or),m(o,gi,u),m(o,zt,u),e(zt,ao),e(ao,Wr),w(Zo,Wr,null),e(zt,Nd),e(zt,Qr),e(Qr,$d),m(o,_i,u),m(o,Ze,u),w(en,Ze,null),e(Ze,yd),e(Ze,tn),e(tn,Fd),e(tn,Br),e(Br,zd),e(tn,Ed),e(Ze,qd),e(Ze,on),e(on,Cd),e(on,Hs),e(Hs,xd),e(on,jd),e(Ze,Ld),e(Ze,io),w(nn,io,null),e(io,Ad),e(io,Hr),e(Hr,Id),m(o,vi,u),m(o,Et,u),e(Et,lo),e(lo,Rr),w(sn,Rr,null),e(Et,Dd),e(Et,Ur),e(Ur,Sd),m(o,ki,u),m(o,Le,u),w(rn,Le,null),e(Le,Od),e(Le,Vr),e(Vr,Wd),e(Le,Qd),e(Le,an),e(an,Bd),e(an,Rs),e(Rs,Hd),e(an,Rd),e(Le,Ud),e(Le,ln),e(ln,Vd),e(ln,dn),e(dn,Kd),e(ln,Jd),e(Le,Xd),e(Le,Oe),w(cn,Oe,null),e(Oe,Gd),e(Oe,qt),e(qt,Yd),e(qt,Us),e(Us,Zd),e(qt,ec),e(qt,Kr),e(Kr,tc),e(qt,oc),e(Oe,nc),w(co,Oe,null),e(Oe,sc),e(Oe,Jr),e(Jr,rc),e(Oe,ac),w(pn,Oe,null),m(o,Ti,u),m(o,Ct,u),e(Ct,po),e(po,Xr),w(hn,Xr,null),e(Ct,ic),e(Ct,Gr),e(Gr,lc),m(o,Mi,u),m(o,mn,u),e(mn,We),w(un,We,null),e(We,dc),e(We,xt),e(xt,cc),e(xt,Vs),e(Vs,pc),e(xt,hc),e(xt,Yr),e(Yr,mc),e(xt,uc),e(We,fc),w(ho,We,null),e(We,gc),e(We,Zr),e(Zr,_c),e(We,vc),w(fn,We,null),m(o,bi,u),m(o,jt,u),e(jt,mo),e(mo,ea),w(gn,ea,null),e(jt,kc),e(jt,ta),e(ta,Tc),m(o,wi,u),m(o,Ae,u),w(_n,Ae,null),e(Ae,Mc),e(Ae,oa),e(oa,bc),e(Ae,wc),e(Ae,vn),e(vn,Pc),e(vn,Ks),e(Ks,Nc),e(vn,$c),e(Ae,yc),e(Ae,kn),e(kn,Fc),e(kn,Tn),e(Tn,zc),e(kn,Ec),e(Ae,qc),e(Ae,Pe),w(Mn,Pe,null),e(Pe,Cc),e(Pe,Lt),e(Lt,xc),e(Lt,Js),e(Js,jc),e(Lt,Lc),e(Lt,na),e(na,Ac),e(Lt,Ic),e(Pe,Dc),w(uo,Pe,null),e(Pe,Sc),e(Pe,sa),e(sa,Oc),e(Pe,Wc),w(bn,Pe,null),e(Pe,Qc),e(Pe,ra),e(ra,Bc),e(Pe,Hc),w(wn,Pe,null),m(o,Pi,u),m(o,At,u),e(At,fo),e(fo,aa),w(Pn,aa,null),e(At,Rc),e(At,ia),e(ia,Uc),m(o,Ni,u),m(o,Ie,u),w(Nn,Ie,null),e(Ie,Vc),e(Ie,la),e(la,Kc),e(Ie,Jc),e(Ie,$n),e($n,Xc),e($n,Xs),e(Xs,Gc),e($n,Yc),e(Ie,Zc),e(Ie,yn),e(yn,ep),e(yn,Fn),e(Fn,tp),e(yn,op),e(Ie,np),e(Ie,Qe),w(zn,Qe,null),e(Qe,sp),e(Qe,It),e(It,rp),e(It,Gs),e(Gs,ap),e(It,ip),e(It,da),e(da,lp),e(It,dp),e(Qe,cp),w(go,Qe,null),e(Qe,pp),e(Qe,ca),e(ca,hp),e(Qe,mp),w(En,Qe,null),m(o,$i,u),m(o,Dt,u),e(Dt,_o),e(_o,pa),w(qn,pa,null),e(Dt,up),e(Dt,ha),e(ha,fp),m(o,yi,u),m(o,De,u),w(Cn,De,null),e(De,gp),e(De,ma),e(ma,_p),e(De,vp),e(De,xn),e(xn,kp),e(xn,Ys),e(Ys,Tp),e(xn,Mp),e(De,bp),e(De,jn),e(jn,wp),e(jn,Ln),e(Ln,Pp),e(jn,Np),e(De,$p),e(De,Be),w(An,Be,null),e(Be,yp),e(Be,St),e(St,Fp),e(St,Zs),e(Zs,zp),e(St,Ep),e(St,ua),e(ua,qp),e(St,Cp),e(Be,xp),w(vo,Be,null),e(Be,jp),e(Be,fa),e(fa,Lp),e(Be,Ap),w(In,Be,null),m(o,Fi,u),m(o,Ot,u),e(Ot,ko),e(ko,ga),w(Dn,ga,null),e(Ot,Ip),e(Ot,_a),e(_a,Dp),m(o,zi,u),m(o,Se,u),w(Sn,Se,null),e(Se,Sp),e(Se,Wt),e(Wt,Op),e(Wt,va),e(va,Wp),e(Wt,Qp),e(Wt,ka),e(ka,Bp),e(Wt,Hp),e(Se,Rp),e(Se,On),e(On,Up),e(On,er),e(er,Vp),e(On,Kp),e(Se,Jp),e(Se,Wn),e(Wn,Xp),e(Wn,Qn),e(Qn,Gp),e(Wn,Yp),e(Se,Zp),e(Se,He),w(Bn,He,null),e(He,eh),e(He,Qt),e(Qt,th),e(Qt,tr),e(tr,oh),e(Qt,nh),e(Qt,Ta),e(Ta,sh),e(Qt,rh),e(He,ah),w(To,He,null),e(He,ih),e(He,Ma),e(Ma,lh),e(He,dh),w(Hn,He,null),m(o,Ei,u),m(o,Bt,u),e(Bt,Mo),e(Mo,ba),w(Rn,ba,null),e(Bt,ch),e(Bt,wa),e(wa,ph),m(o,qi,u),m(o,ye,u),w(Un,ye,null),e(ye,hh),e(ye,Pa),e(Pa,mh),e(ye,uh),e(ye,Vn),e(Vn,fh),e(Vn,or),e(or,gh),e(Vn,_h),e(ye,vh),e(ye,Kn),e(Kn,kh),e(Kn,Jn),e(Jn,Th),e(Kn,Mh),e(ye,bh),w(bo,ye,null),e(ye,wh),e(ye,Re),w(Xn,Re,null),e(Re,Ph),e(Re,Ht),e(Ht,Nh),e(Ht,nr),e(nr,$h),e(Ht,yh),e(Ht,Na),e(Na,Fh),e(Ht,zh),e(Re,Eh),w(wo,Re,null),e(Re,qh),e(Re,$a),e($a,Ch),e(Re,xh),w(Gn,Re,null),m(o,Ci,u),m(o,Rt,u),e(Rt,Po),e(Po,ya),w(Yn,ya,null),e(Rt,jh),e(Rt,Fa),e(Fa,Lh),m(o,xi,u),m(o,Fe,u),w(Zn,Fe,null),e(Fe,Ah),e(Fe,es),e(es,Ih),e(es,za),e(za,Dh),e(es,Sh),e(Fe,Oh),e(Fe,ts),e(ts,Wh),e(ts,sr),e(sr,Qh),e(ts,Bh),e(Fe,Hh),e(Fe,os),e(os,Rh),e(os,ns),e(ns,Uh),e(os,Vh),e(Fe,Kh),w(No,Fe,null),e(Fe,Jh),e(Fe,Ue),w(ss,Ue,null),e(Ue,Xh),e(Ue,Ut),e(Ut,Gh),e(Ut,rr),e(rr,Yh),e(Ut,Zh),e(Ut,Ea),e(Ea,em),e(Ut,tm),e(Ue,om),w($o,Ue,null),e(Ue,nm),e(Ue,qa),e(qa,sm),e(Ue,rm),w(rs,Ue,null),m(o,ji,u),m(o,Vt,u),e(Vt,yo),e(yo,Ca),w(as,Ca,null),e(Vt,am),e(Vt,xa),e(xa,im),m(o,Li,u),m(o,ze,u),w(is,ze,null),e(ze,lm),e(ze,ja),e(ja,dm),e(ze,cm),e(ze,ls),e(ls,pm),e(ls,ar),e(ar,hm),e(ls,mm),e(ze,um),e(ze,ds),e(ds,fm),e(ds,cs),e(cs,gm),e(ds,_m),e(ze,vm),w(Fo,ze,null),e(ze,km),e(ze,Ve),w(ps,Ve,null),e(Ve,Tm),e(Ve,Kt),e(Kt,Mm),e(Kt,ir),e(ir,bm),e(Kt,wm),e(Kt,La),e(La,Pm),e(Kt,Nm),e(Ve,$m),w(zo,Ve,null),e(Ve,ym),e(Ve,Aa),e(Aa,Fm),e(Ve,zm),w(hs,Ve,null),m(o,Ai,u),m(o,Jt,u),e(Jt,Eo),e(Eo,Ia),w(ms,Ia,null),e(Jt,Em),e(Jt,Da),e(Da,qm),m(o,Ii,u),m(o,Ee,u),w(us,Ee,null),e(Ee,Cm),e(Ee,Sa),e(Sa,xm),e(Ee,jm),e(Ee,fs),e(fs,Lm),e(fs,lr),e(lr,Am),e(fs,Im),e(Ee,Dm),e(Ee,gs),e(gs,Sm),e(gs,_s),e(_s,Om),e(gs,Wm),e(Ee,Qm),w(qo,Ee,null),e(Ee,Bm),e(Ee,Ke),w(vs,Ke,null),e(Ke,Hm),e(Ke,Xt),e(Xt,Rm),e(Xt,dr),e(dr,Um),e(Xt,Vm),e(Xt,Oa),e(Oa,Km),e(Xt,Jm),e(Ke,Xm),w(Co,Ke,null),e(Ke,Gm),e(Ke,Wa),e(Wa,Ym),e(Ke,Zm),w(ks,Ke,null),m(o,Di,u),m(o,Gt,u),e(Gt,xo),e(xo,Qa),w(Ts,Qa,null),e(Gt,eu),e(Gt,Ba),e(Ba,tu),m(o,Si,u),m(o,qe,u),w(Ms,qe,null),e(qe,ou),e(qe,Ha),e(Ha,nu),e(qe,su),e(qe,bs),e(bs,ru),e(bs,cr),e(cr,au),e(bs,iu),e(qe,lu),e(qe,ws),e(ws,du),e(ws,Ps),e(Ps,cu),e(ws,pu),e(qe,hu),w(jo,qe,null),e(qe,mu),e(qe,Je),w(Ns,Je,null),e(Je,uu),e(Je,Yt),e(Yt,fu),e(Yt,pr),e(pr,gu),e(Yt,_u),e(Yt,Ra),e(Ra,vu),e(Yt,ku),e(Je,Tu),w(Lo,Je,null),e(Je,Mu),e(Je,Ua),e(Ua,bu),e(Je,wu),w($s,Je,null),m(o,Oi,u),m(o,Zt,u),e(Zt,Ao),e(Ao,Va),w(ys,Va,null),e(Zt,Pu),e(Zt,Ka),e(Ka,Nu),m(o,Wi,u),m(o,Ce,u),w(Fs,Ce,null),e(Ce,$u),e(Ce,eo),e(eo,yu),e(eo,Ja),e(Ja,Fu),e(eo,zu),e(eo,Xa),e(Xa,Eu),e(eo,qu),e(Ce,Cu),e(Ce,zs),e(zs,xu),e(zs,hr),e(hr,ju),e(zs,Lu),e(Ce,Au),e(Ce,Es),e(Es,Iu),e(Es,qs),e(qs,Du),e(Es,Su),e(Ce,Ou),w(Io,Ce,null),e(Ce,Wu),e(Ce,Xe),w(Cs,Xe,null),e(Xe,Qu),e(Xe,to),e(to,Bu),e(to,mr),e(mr,Hu),e(to,Ru),e(to,Ga),e(Ga,Uu),e(to,Vu),e(Xe,Ku),w(Do,Xe,null),e(Xe,Ju),e(Xe,Ya),e(Ya,Xu),e(Xe,Gu),w(xs,Xe,null),Qi=!0},p(o,[u]){const js={};u&2&&(js.$$scope={dirty:u,ctx:o}),co.$set(js);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),ho.$set(Za);const ei={};u&2&&(ei.$$scope={dirty:u,ctx:o}),uo.$set(ei);const ti={};u&2&&(ti.$$scope={dirty:u,ctx:o}),go.$set(ti);const Ls={};u&2&&(Ls.$$scope={dirty:u,ctx:o}),vo.$set(Ls);const oi={};u&2&&(oi.$$scope={dirty:u,ctx:o}),To.$set(oi);const ni={};u&2&&(ni.$$scope={dirty:u,ctx:o}),bo.$set(ni);const si={};u&2&&(si.$$scope={dirty:u,ctx:o}),wo.$set(si);const As={};u&2&&(As.$$scope={dirty:u,ctx:o}),No.$set(As);const ri={};u&2&&(ri.$$scope={dirty:u,ctx:o}),$o.$set(ri);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:o}),Fo.$set(ai);const ii={};u&2&&(ii.$$scope={dirty:u,ctx:o}),zo.$set(ii);const li={};u&2&&(li.$$scope={dirty:u,ctx:o}),qo.$set(li);const di={};u&2&&(di.$$scope={dirty:u,ctx:o}),Co.$set(di);const ci={};u&2&&(ci.$$scope={dirty:u,ctx:o}),jo.$set(ci);const pi={};u&2&&(pi.$$scope={dirty:u,ctx:o}),Lo.$set(pi);const lt={};u&2&&(lt.$$scope={dirty:u,ctx:o}),Io.$set(lt);const hi={};u&2&&(hi.$$scope={dirty:u,ctx:o}),Do.$set(hi)},i(o){Qi||(P(v.$$.fragment,o),P(X.$$.fragment,o),P(Wo.$$.fragment,o),P(Qo.$$.fragment,o),P(Ho.$$.fragment,o),P(Ro.$$.fragment,o),P(Uo.$$.fragment,o),P(Ko.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(nn.$$.fragment,o),P(sn.$$.fragment,o),P(rn.$$.fragment,o),P(cn.$$.fragment,o),P(co.$$.fragment,o),P(pn.$$.fragment,o),P(hn.$$.fragment,o),P(un.$$.fragment,o),P(ho.$$.fragment,o),P(fn.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(Mn.$$.fragment,o),P(uo.$$.fragment,o),P(bn.$$.fragment,o),P(wn.$$.fragment,o),P(Pn.$$.fragment,o),P(Nn.$$.fragment,o),P(zn.$$.fragment,o),P(go.$$.fragment,o),P(En.$$.fragment,o),P(qn.$$.fragment,o),P(Cn.$$.fragment,o),P(An.$$.fragment,o),P(vo.$$.fragment,o),P(In.$$.fragment,o),P(Dn.$$.fragment,o),P(Sn.$$.fragment,o),P(Bn.$$.fragment,o),P(To.$$.fragment,o),P(Hn.$$.fragment,o),P(Rn.$$.fragment,o),P(Un.$$.fragment,o),P(bo.$$.fragment,o),P(Xn.$$.fragment,o),P(wo.$$.fragment,o),P(Gn.$$.fragment,o),P(Yn.$$.fragment,o),P(Zn.$$.fragment,o),P(No.$$.fragment,o),P(ss.$$.fragment,o),P($o.$$.fragment,o),P(rs.$$.fragment,o),P(as.$$.fragment,o),P(is.$$.fragment,o),P(Fo.$$.fragment,o),P(ps.$$.fragment,o),P(zo.$$.fragment,o),P(hs.$$.fragment,o),P(ms.$$.fragment,o),P(us.$$.fragment,o),P(qo.$$.fragment,o),P(vs.$$.fragment,o),P(Co.$$.fragment,o),P(ks.$$.fragment,o),P(Ts.$$.fragment,o),P(Ms.$$.fragment,o),P(jo.$$.fragment,o),P(Ns.$$.fragment,o),P(Lo.$$.fragment,o),P($s.$$.fragment,o),P(ys.$$.fragment,o),P(Fs.$$.fragment,o),P(Io.$$.fragment,o),P(Cs.$$.fragment,o),P(Do.$$.fragment,o),P(xs.$$.fragment,o),Qi=!0)},o(o){N(v.$$.fragment,o),N(X.$$.fragment,o),N(Wo.$$.fragment,o),N(Qo.$$.fragment,o),N(Ho.$$.fragment,o),N(Ro.$$.fragment,o),N(Uo.$$.fragment,o),N(Ko.$$.fragment,o),N(Xo.$$.fragment,o),N(Yo.$$.fragment,o),N(Zo.$$.fragment,o),N(en.$$.fragment,o),N(nn.$$.fragment,o),N(sn.$$.fragment,o),N(rn.$$.fragment,o),N(cn.$$.fragment,o),N(co.$$.fragment,o),N(pn.$$.fragment,o),N(hn.$$.fragment,o),N(un.$$.fragment,o),N(ho.$$.fragment,o),N(fn.$$.fragment,o),N(gn.$$.fragment,o),N(_n.$$.fragment,o),N(Mn.$$.fragment,o),N(uo.$$.fragment,o),N(bn.$$.fragment,o),N(wn.$$.fragment,o),N(Pn.$$.fragment,o),N(Nn.$$.fragment,o),N(zn.$$.fragment,o),N(go.$$.fragment,o),N(En.$$.fragment,o),N(qn.$$.fragment,o),N(Cn.$$.fragment,o),N(An.$$.fragment,o),N(vo.$$.fragment,o),N(In.$$.fragment,o),N(Dn.$$.fragment,o),N(Sn.$$.fragment,o),N(Bn.$$.fragment,o),N(To.$$.fragment,o),N(Hn.$$.fragment,o),N(Rn.$$.fragment,o),N(Un.$$.fragment,o),N(bo.$$.fragment,o),N(Xn.$$.fragment,o),N(wo.$$.fragment,o),N(Gn.$$.fragment,o),N(Yn.$$.fragment,o),N(Zn.$$.fragment,o),N(No.$$.fragment,o),N(ss.$$.fragment,o),N($o.$$.fragment,o),N(rs.$$.fragment,o),N(as.$$.fragment,o),N(is.$$.fragment,o),N(Fo.$$.fragment,o),N(ps.$$.fragment,o),N(zo.$$.fragment,o),N(hs.$$.fragment,o),N(ms.$$.fragment,o),N(us.$$.fragment,o),N(qo.$$.fragment,o),N(vs.$$.fragment,o),N(Co.$$.fragment,o),N(ks.$$.fragment,o),N(Ts.$$.fragment,o),N(Ms.$$.fragment,o),N(jo.$$.fragment,o),N(Ns.$$.fragment,o),N(Lo.$$.fragment,o),N($s.$$.fragment,o),N(ys.$$.fragment,o),N(Fs.$$.fragment,o),N(Io.$$.fragment,o),N(Cs.$$.fragment,o),N(Do.$$.fragment,o),N(xs.$$.fragment,o),Qi=!1},d(o){t(p),o&&t(y),o&&t(f),$(v),o&&t(U),o&&t(z),$(X),o&&t(se),o&&t(R),o&&t(q),o&&t(Y),o&&t(re),o&&t(Z),o&&t(ae),o&&t(ee),o&&t(W),o&&t(te),o&&t(j),o&&t(oe),o&&t(L),o&&t(D),o&&t(ie),o&&t(fe),$(Wo),o&&t(mi),o&&t(je),$(Qo),$(Ho),o&&t(ui),o&&t(Ft),$(Ro),o&&t(fi),o&&t($e),$(Uo),$(Ko),$(Xo),$(Yo),o&&t(gi),o&&t(zt),$(Zo),o&&t(_i),o&&t(Ze),$(en),$(nn),o&&t(vi),o&&t(Et),$(sn),o&&t(ki),o&&t(Le),$(rn),$(cn),$(co),$(pn),o&&t(Ti),o&&t(Ct),$(hn),o&&t(Mi),o&&t(mn),$(un),$(ho),$(fn),o&&t(bi),o&&t(jt),$(gn),o&&t(wi),o&&t(Ae),$(_n),$(Mn),$(uo),$(bn),$(wn),o&&t(Pi),o&&t(At),$(Pn),o&&t(Ni),o&&t(Ie),$(Nn),$(zn),$(go),$(En),o&&t($i),o&&t(Dt),$(qn),o&&t(yi),o&&t(De),$(Cn),$(An),$(vo),$(In),o&&t(Fi),o&&t(Ot),$(Dn),o&&t(zi),o&&t(Se),$(Sn),$(Bn),$(To),$(Hn),o&&t(Ei),o&&t(Bt),$(Rn),o&&t(qi),o&&t(ye),$(Un),$(bo),$(Xn),$(wo),$(Gn),o&&t(Ci),o&&t(Rt),$(Yn),o&&t(xi),o&&t(Fe),$(Zn),$(No),$(ss),$($o),$(rs),o&&t(ji),o&&t(Vt),$(as),o&&t(Li),o&&t(ze),$(is),$(Fo),$(ps),$(zo),$(hs),o&&t(Ai),o&&t(Jt),$(ms),o&&t(Ii),o&&t(Ee),$(us),$(qo),$(vs),$(Co),$(ks),o&&t(Di),o&&t(Gt),$(Ts),o&&t(Si),o&&t(qe),$(Ms),$(jo),$(Ns),$(Lo),$($s),o&&t(Oi),o&&t(Zt),$(ys),o&&t(Wi),o&&t(Ce),$(Fs),$(Io),$(Cs),$(Do),$(xs)}}}const Y_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function Z_(Q,p,y){let{fw:f}=p;return Q.$$set=g=>{"fw"in g&&y(0,f=g.fw)},[f]}class av extends z_{constructor(p){super();E_(this,p,Z_,G_,q_,{fw:0})}}export{av as default,Y_ as metadata};
