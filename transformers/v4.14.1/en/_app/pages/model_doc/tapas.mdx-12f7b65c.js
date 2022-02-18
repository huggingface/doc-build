import{S as ty,i as sy,s as ay,e as o,k as l,w as k,t as a,L as ny,c as r,d as t,m as p,a as i,x as y,h as n,b as d,M as oy,J as e,g as c,y as j,q as x,o as q,B as E}from"../../chunks/vendor-b1433968.js";import{T as Ls}from"../../chunks/Tip-c3840994.js";import{D as lt}from"../../chunks/Docstring-ff504c58.js";import{C as Ml}from"../../chunks/CodeBlock-a320dbd7.js";import{C as Co}from"../../chunks/CodeBlockFw-e3b92d56.js";import{I as Je}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function ry(fe){let m,C,g,f,A,v,b,F,ge,V,T,K,L,X,_e,I,Te,pe,W,Q,Z,ee,w,z,ne,U,de,G,N,te,ve,$,be,O,se,we,H,ke,oe,D,ye,R,ce;return{c(){m=o("p"),C=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),A=o("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),b=l(),F=o("li"),ge=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),T=o("p"),K=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),Te=a("model(inputs)"),pe=a("."),W=l(),Q=o("p"),Z=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),w=o("ul"),z=o("li"),ne=a("a single Tensor with "),U=o("code"),de=a("input_ids"),G=a(" only and nothing else: "),N=o("code"),te=a("model(inputs_ids)"),ve=l(),$=o("li"),be=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=o("code"),se=a("model([input_ids, attention_mask])"),we=a(" or "),H=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),oe=l(),D=o("li"),ye=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),ce=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var _=i(m);C=n(_,"TF 2.0 models accepts two formats as inputs:"),_.forEach(t),g=p(u),f=r(u,"UL",{});var Y=i(f);A=r(Y,"LI",{});var qe=i(A);v=n(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),b=p(Y),F=r(Y,"LI",{});var He=i(F);ge=n(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),Y.forEach(t),V=p(u),T=r(u,"P",{});var P=i(T);K=n(P,"This second option is useful when using "),L=r(P,"CODE",{});var Ee=i(L);X=n(Ee,"tf.keras.Model.fit"),Ee.forEach(t),_e=n(P,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var ze=i(I);Te=n(ze,"model(inputs)"),ze.forEach(t),pe=n(P,"."),P.forEach(t),W=p(u),Q=r(u,"P",{});var Re=i(Q);Z=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(t),ee=p(u),w=r(u,"UL",{});var M=i(w);z=r(M,"LI",{});var S=i(z);ne=n(S,"a single Tensor with "),U=r(S,"CODE",{});var Be=i(U);de=n(Be,"input_ids"),Be.forEach(t),G=n(S," only and nothing else: "),N=r(S,"CODE",{});var $e=i(N);te=n($e,"model(inputs_ids)"),$e.forEach(t),S.forEach(t),ve=p(M),$=r(M,"LI",{});var B=i($);be=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(B,"CODE",{});var Ge=i(O);se=n(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),we=n(B," or "),H=r(B,"CODE",{});var je=i(H);ke=n(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),oe=p(M),D=r(M,"LI",{});var xe=i(D);ye=n(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(xe,"CODE",{});var Ve=i(R);ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),xe.forEach(t),M.forEach(t)},m(u,_){c(u,m,_),e(m,C),c(u,g,_),c(u,f,_),e(f,A),e(A,v),e(f,b),e(f,F),e(F,ge),c(u,V,_),c(u,T,_),e(T,K),e(T,L),e(L,X),e(T,_e),e(T,I),e(I,Te),e(T,pe),c(u,W,_),c(u,Q,_),e(Q,Z),c(u,ee,_),c(u,w,_),e(w,z),e(z,ne),e(z,U),e(U,de),e(z,G),e(z,N),e(N,te),e(w,ve),e(w,$),e($,be),e($,O),e(O,se),e($,we),e($,H),e(H,ke),e(w,oe),e(w,D),e(D,ye),e(D,R),e(R,ce)},d(u){u&&t(m),u&&t(g),u&&t(f),u&&t(V),u&&t(T),u&&t(W),u&&t(Q),u&&t(ee),u&&t(w)}}}function iy(fe){let m,C,g,f,A;return{c(){m=o("p"),C=a(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=a("Module"),A=a(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){m=r(v,"P",{});var b=i(m);C=n(b,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(b,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(t),A=n(b,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),b.forEach(t)},m(v,b){c(v,m,b),e(m,C),e(m,g),e(g,f),e(m,A)},d(v){v&&t(m)}}}function ly(fe){let m,C,g,f,A,v,b,F,ge,V,T,K,L,X,_e,I,Te,pe,W,Q,Z,ee,w,z,ne,U,de,G,N,te,ve,$,be,O,se,we,H,ke,oe,D,ye,R,ce;return{c(){m=o("p"),C=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),A=o("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),b=l(),F=o("li"),ge=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),T=o("p"),K=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),Te=a("model(inputs)"),pe=a("."),W=l(),Q=o("p"),Z=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),w=o("ul"),z=o("li"),ne=a("a single Tensor with "),U=o("code"),de=a("input_ids"),G=a(" only and nothing else: "),N=o("code"),te=a("model(inputs_ids)"),ve=l(),$=o("li"),be=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=o("code"),se=a("model([input_ids, attention_mask])"),we=a(" or "),H=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),oe=l(),D=o("li"),ye=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),ce=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var _=i(m);C=n(_,"TF 2.0 models accepts two formats as inputs:"),_.forEach(t),g=p(u),f=r(u,"UL",{});var Y=i(f);A=r(Y,"LI",{});var qe=i(A);v=n(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),b=p(Y),F=r(Y,"LI",{});var He=i(F);ge=n(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),Y.forEach(t),V=p(u),T=r(u,"P",{});var P=i(T);K=n(P,"This second option is useful when using "),L=r(P,"CODE",{});var Ee=i(L);X=n(Ee,"tf.keras.Model.fit"),Ee.forEach(t),_e=n(P,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var ze=i(I);Te=n(ze,"model(inputs)"),ze.forEach(t),pe=n(P,"."),P.forEach(t),W=p(u),Q=r(u,"P",{});var Re=i(Q);Z=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(t),ee=p(u),w=r(u,"UL",{});var M=i(w);z=r(M,"LI",{});var S=i(z);ne=n(S,"a single Tensor with "),U=r(S,"CODE",{});var Be=i(U);de=n(Be,"input_ids"),Be.forEach(t),G=n(S," only and nothing else: "),N=r(S,"CODE",{});var $e=i(N);te=n($e,"model(inputs_ids)"),$e.forEach(t),S.forEach(t),ve=p(M),$=r(M,"LI",{});var B=i($);be=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(B,"CODE",{});var Ge=i(O);se=n(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),we=n(B," or "),H=r(B,"CODE",{});var je=i(H);ke=n(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),oe=p(M),D=r(M,"LI",{});var xe=i(D);ye=n(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(xe,"CODE",{});var Ve=i(R);ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),xe.forEach(t),M.forEach(t)},m(u,_){c(u,m,_),e(m,C),c(u,g,_),c(u,f,_),e(f,A),e(A,v),e(f,b),e(f,F),e(F,ge),c(u,V,_),c(u,T,_),e(T,K),e(T,L),e(L,X),e(T,_e),e(T,I),e(I,Te),e(T,pe),c(u,W,_),c(u,Q,_),e(Q,Z),c(u,ee,_),c(u,w,_),e(w,z),e(z,ne),e(z,U),e(U,de),e(z,G),e(z,N),e(N,te),e(w,ve),e(w,$),e($,be),e($,O),e(O,se),e($,we),e($,H),e(H,ke),e(w,oe),e(w,D),e(D,ye),e(D,R),e(R,ce)},d(u){u&&t(m),u&&t(g),u&&t(f),u&&t(V),u&&t(T),u&&t(W),u&&t(Q),u&&t(ee),u&&t(w)}}}function py(fe){let m,C,g,f,A;return{c(){m=o("p"),C=a(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=a("Module"),A=a(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){m=r(v,"P",{});var b=i(m);C=n(b,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(b,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(t),A=n(b,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),b.forEach(t)},m(v,b){c(v,m,b),e(m,C),e(m,g),e(g,f),e(m,A)},d(v){v&&t(m)}}}function dy(fe){let m,C,g,f,A,v,b,F,ge,V,T,K,L,X,_e,I,Te,pe,W,Q,Z,ee,w,z,ne,U,de,G,N,te,ve,$,be,O,se,we,H,ke,oe,D,ye,R,ce;return{c(){m=o("p"),C=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),A=o("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),b=l(),F=o("li"),ge=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),T=o("p"),K=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),Te=a("model(inputs)"),pe=a("."),W=l(),Q=o("p"),Z=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),w=o("ul"),z=o("li"),ne=a("a single Tensor with "),U=o("code"),de=a("input_ids"),G=a(" only and nothing else: "),N=o("code"),te=a("model(inputs_ids)"),ve=l(),$=o("li"),be=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=o("code"),se=a("model([input_ids, attention_mask])"),we=a(" or "),H=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),oe=l(),D=o("li"),ye=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),ce=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var _=i(m);C=n(_,"TF 2.0 models accepts two formats as inputs:"),_.forEach(t),g=p(u),f=r(u,"UL",{});var Y=i(f);A=r(Y,"LI",{});var qe=i(A);v=n(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),b=p(Y),F=r(Y,"LI",{});var He=i(F);ge=n(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),Y.forEach(t),V=p(u),T=r(u,"P",{});var P=i(T);K=n(P,"This second option is useful when using "),L=r(P,"CODE",{});var Ee=i(L);X=n(Ee,"tf.keras.Model.fit"),Ee.forEach(t),_e=n(P,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var ze=i(I);Te=n(ze,"model(inputs)"),ze.forEach(t),pe=n(P,"."),P.forEach(t),W=p(u),Q=r(u,"P",{});var Re=i(Q);Z=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(t),ee=p(u),w=r(u,"UL",{});var M=i(w);z=r(M,"LI",{});var S=i(z);ne=n(S,"a single Tensor with "),U=r(S,"CODE",{});var Be=i(U);de=n(Be,"input_ids"),Be.forEach(t),G=n(S," only and nothing else: "),N=r(S,"CODE",{});var $e=i(N);te=n($e,"model(inputs_ids)"),$e.forEach(t),S.forEach(t),ve=p(M),$=r(M,"LI",{});var B=i($);be=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(B,"CODE",{});var Ge=i(O);se=n(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),we=n(B," or "),H=r(B,"CODE",{});var je=i(H);ke=n(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),oe=p(M),D=r(M,"LI",{});var xe=i(D);ye=n(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(xe,"CODE",{});var Ve=i(R);ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),xe.forEach(t),M.forEach(t)},m(u,_){c(u,m,_),e(m,C),c(u,g,_),c(u,f,_),e(f,A),e(A,v),e(f,b),e(f,F),e(F,ge),c(u,V,_),c(u,T,_),e(T,K),e(T,L),e(L,X),e(T,_e),e(T,I),e(I,Te),e(T,pe),c(u,W,_),c(u,Q,_),e(Q,Z),c(u,ee,_),c(u,w,_),e(w,z),e(z,ne),e(z,U),e(U,de),e(z,G),e(z,N),e(N,te),e(w,ve),e(w,$),e($,be),e($,O),e(O,se),e($,we),e($,H),e(H,ke),e(w,oe),e(w,D),e(D,ye),e(D,R),e(R,ce)},d(u){u&&t(m),u&&t(g),u&&t(f),u&&t(V),u&&t(T),u&&t(W),u&&t(Q),u&&t(ee),u&&t(w)}}}function cy(fe){let m,C,g,f,A;return{c(){m=o("p"),C=a(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=a("Module"),A=a(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){m=r(v,"P",{});var b=i(m);C=n(b,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(b,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(t),A=n(b,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),b.forEach(t)},m(v,b){c(v,m,b),e(m,C),e(m,g),e(g,f),e(m,A)},d(v){v&&t(m)}}}function hy(fe){let m,C,g,f,A,v,b,F,ge,V,T,K,L,X,_e,I,Te,pe,W,Q,Z,ee,w,z,ne,U,de,G,N,te,ve,$,be,O,se,we,H,ke,oe,D,ye,R,ce;return{c(){m=o("p"),C=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),A=o("li"),v=a("having all inputs as keyword arguments (like PyTorch models), or"),b=l(),F=o("li"),ge=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),T=o("p"),K=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),Te=a("model(inputs)"),pe=a("."),W=l(),Q=o("p"),Z=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ee=l(),w=o("ul"),z=o("li"),ne=a("a single Tensor with "),U=o("code"),de=a("input_ids"),G=a(" only and nothing else: "),N=o("code"),te=a("model(inputs_ids)"),ve=l(),$=o("li"),be=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=o("code"),se=a("model([input_ids, attention_mask])"),we=a(" or "),H=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),oe=l(),D=o("li"),ye=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),ce=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var _=i(m);C=n(_,"TF 2.0 models accepts two formats as inputs:"),_.forEach(t),g=p(u),f=r(u,"UL",{});var Y=i(f);A=r(Y,"LI",{});var qe=i(A);v=n(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),b=p(Y),F=r(Y,"LI",{});var He=i(F);ge=n(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),Y.forEach(t),V=p(u),T=r(u,"P",{});var P=i(T);K=n(P,"This second option is useful when using "),L=r(P,"CODE",{});var Ee=i(L);X=n(Ee,"tf.keras.Model.fit"),Ee.forEach(t),_e=n(P,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var ze=i(I);Te=n(ze,"model(inputs)"),ze.forEach(t),pe=n(P,"."),P.forEach(t),W=p(u),Q=r(u,"P",{});var Re=i(Q);Z=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(t),ee=p(u),w=r(u,"UL",{});var M=i(w);z=r(M,"LI",{});var S=i(z);ne=n(S,"a single Tensor with "),U=r(S,"CODE",{});var Be=i(U);de=n(Be,"input_ids"),Be.forEach(t),G=n(S," only and nothing else: "),N=r(S,"CODE",{});var $e=i(N);te=n($e,"model(inputs_ids)"),$e.forEach(t),S.forEach(t),ve=p(M),$=r(M,"LI",{});var B=i($);be=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(B,"CODE",{});var Ge=i(O);se=n(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),we=n(B," or "),H=r(B,"CODE",{});var je=i(H);ke=n(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),oe=p(M),D=r(M,"LI",{});var xe=i(D);ye=n(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(xe,"CODE",{});var Ve=i(R);ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),xe.forEach(t),M.forEach(t)},m(u,_){c(u,m,_),e(m,C),c(u,g,_),c(u,f,_),e(f,A),e(A,v),e(f,b),e(f,F),e(F,ge),c(u,V,_),c(u,T,_),e(T,K),e(T,L),e(L,X),e(T,_e),e(T,I),e(I,Te),e(T,pe),c(u,W,_),c(u,Q,_),e(Q,Z),c(u,ee,_),c(u,w,_),e(w,z),e(z,ne),e(z,U),e(U,de),e(z,G),e(z,N),e(N,te),e(w,ve),e(w,$),e($,be),e($,O),e(O,se),e($,we),e($,H),e(H,ke),e(w,oe),e(w,D),e(D,ye),e(D,R),e(R,ce)},d(u){u&&t(m),u&&t(g),u&&t(f),u&&t(V),u&&t(T),u&&t(W),u&&t(Q),u&&t(ee),u&&t(w)}}}function uy(fe){let m,C,g,f,A;return{c(){m=o("p"),C=a(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=a("Module"),A=a(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){m=r(v,"P",{});var b=i(m);C=n(b,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(b,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(t),A=n(b,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),b.forEach(t)},m(v,b){c(v,m,b),e(m,C),e(m,g),e(g,f),e(m,A)},d(v){v&&t(m)}}}function my(fe){let m,C,g,f,A,v,b,F,ge,V,T,K,L,X,_e,I,Te,pe,W,Q,Z,ee,w,z,ne,U,de,G,N,te,ve,$,be,O,se,we,H,ke,oe,D,ye,R,ce,u,_,Y,qe,He,P,Ee,ze,Re,M,S,Be,$e,B,Ge,je,xe,Ve,Is,Sd,Dd,Ql,ns,Ev,Nl,vn,Pd,Ol,pt,Md,Ws,Qd,Nd,Us,Od,Ld,Hs,Id,Wd,Ll,bn,Ud,Il,dt,Ce,Hd,So,Rd,Bd,wn,Gd,Vd,Do,Kd,Yd,Rs,Jd,Xd,Po,Zd,ec,Mo,tc,sc,ac,Ke,nc,Qo,oc,rc,No,ic,lc,Oo,pc,dc,Lo,cc,hc,Bs,uc,mc,fc,Ct,gc,Io,_c,Tc,Wo,vc,bc,wc,Uo,kc,Wl,St,os,Ho,Gs,yc,Ro,jc,Ul,rs,xc,kn,qc,Ec,Hl,yn,Bo,Ac,Rl,is,Fc,jn,zc,$c,Bl,bt,Go,Cc,Sc,Vs,Dc,Vo,Pc,Mc,Qc,Ks,Nc,Ko,Oc,Lc,Gl,xn,Ic,Vl,ls,Yo,Dt,Jo,Xo,Wc,Uc,Zo,er,Hc,Rc,tr,sr,Bc,Gc,Pt,Mt,ar,Vc,Kc,nr,Yc,Jc,or,Xc,Zc,Qt,rr,eh,th,ir,sh,ah,lr,nh,oh,Nt,pr,rh,ih,dr,lh,ph,cr,dh,Kl,wt,ch,Ys,hh,uh,Js,mh,fh,Yl,Xs,Jl,kt,gh,qn,_h,Th,En,vh,bh,Xl,Zs,Zl,ps,wh,ea,kh,yh,ep,ds,jh,ta,xh,qh,tp,An,hr,Eh,sp,cs,Ah,sa,Fh,zh,ap,re,Fn,ur,$h,Ch,Sh,zn,mr,Dh,Ph,Mh,$n,fr,Qh,Nh,Oh,Cn,gr,Lh,Ih,Wh,Sn,_r,Uh,Hh,Rh,Dn,Tr,Bh,Gh,Vh,Pn,vr,Kh,Yh,Jh,Mn,br,Xh,Zh,eu,Qn,wr,tu,su,np,Le,au,aa,nu,ou,na,ru,iu,kr,lu,pu,yr,du,cu,jr,hu,uu,op,Nn,xr,mu,rp,Ae,fu,On,gu,_u,qr,Tu,vu,Er,bu,wu,Ar,ku,yu,Ln,ju,xu,In,qu,Eu,ip,hs,Fr,oa,zr,$r,Au,Fu,Cr,Sr,zu,$u,Ot,ra,Dr,Cu,Su,vt,Pr,Du,Pu,Mr,Mu,Qu,Qr,Nu,Ou,Nr,Lu,Iu,ia,Or,Wu,Uu,Se,Lr,Hu,Ru,Ir,Bu,Gu,Wr,Vu,Ku,Ur,Yu,Ju,Hr,Xu,Zu,Rr,em,tm,Br,sm,am,la,Gr,nm,om,rt,Vr,rm,im,Kr,lm,pm,Yr,dm,cm,Jr,hm,um,Xr,mm,lp,ie,Wn,fm,gm,Zr,_m,Tm,ei,vm,bm,ti,wm,km,si,ym,jm,ai,xm,qm,ni,Em,Am,oi,Fm,zm,pp,pa,dp,ct,$m,Un,Cm,Sm,ri,Dm,Pm,ii,Mm,Qm,cp,da,hp,J,Nm,li,Om,Lm,pi,Im,Wm,di,Um,Hm,ci,Rm,Bm,hi,Gm,Vm,ui,Km,Ym,Hn,Jm,Xm,ca,Zm,ef,ha,tf,sf,up,Rn,mi,af,mp,yt,nf,Bn,of,rf,Gn,lf,pf,fp,ua,gp,Lt,us,fi,ma,df,gi,cf,_p,he,hf,Vn,uf,mf,Kn,ff,gf,_i,_f,Tf,Ti,vf,bf,vi,wf,kf,Yn,yf,jf,bi,xf,qf,Tp,ms,Ef,wi,Af,Ff,vp,fa,bp,Ie,zf,ki,$f,Cf,yi,Sf,Df,ji,Pf,Mf,ga,Qf,Nf,_a,Of,Lf,wp,It,fs,xi,Ta,If,qi,Wf,kp,Wt,va,Uf,ba,Hf,Jn,Rf,Bf,yp,Ut,gs,Ei,wa,Gf,Ai,Vf,jp,Ye,ka,Kf,it,Yf,Xn,Jf,Xf,Fi,Zf,eg,zi,tg,sg,Zn,ag,ng,og,ya,rg,ja,ig,lg,pg,$i,dg,cg,xa,xp,Ht,_s,Ci,qa,hg,Si,ug,qp,le,Ea,mg,Di,fg,gg,ae,_g,eo,Tg,vg,to,bg,wg,Pi,kg,yg,Mi,jg,xg,Qi,qg,Eg,Ni,Ag,Fg,Oi,zg,$g,Li,Cg,Sg,Ii,Dg,Pg,Mg,De,Wi,Qg,Ng,Ui,Og,Lg,Hi,Ig,Wg,Ri,Ug,Hg,Bi,Rg,Bg,Gi,Gg,Vg,Vi,Kg,Yg,so,ao,Jg,Xg,Zg,Ts,Aa,e_,Ki,t_,s_,jt,Fa,a_,za,n_,no,o_,r_,i_,$a,l_,Ca,p_,d_,c_,Yi,Ep,Rt,vs,Ji,Sa,h_,Xi,u_,Ap,Da,Zi,Fp,Bt,bs,el,Pa,m_,tl,f_,zp,Ma,sl,$p,Gt,ws,al,Qa,g_,nl,__,Cp,Na,ol,Sp,Vt,ks,rl,Oa,T_,il,v_,Dp,La,ll,Pp,Kt,ys,pl,Ia,b_,dl,w_,Mp,Pe,Wa,k_,cl,y_,j_,Ua,x_,oo,q_,E_,A_,Ha,F_,Ra,z_,$_,C_,js,S_,Xe,Ba,D_,Yt,P_,ro,M_,Q_,hl,N_,O_,L_,xs,I_,ul,W_,U_,Ga,Qp,Jt,qs,ml,Va,H_,fl,R_,Np,Me,Ka,B_,Ya,G_,gl,V_,K_,Y_,Ja,J_,io,X_,Z_,eT,Xa,tT,Za,sT,aT,nT,Es,oT,Ze,en,rT,Xt,iT,lo,lT,pT,_l,dT,cT,hT,As,uT,Tl,mT,fT,tn,Op,Zt,Fs,vl,sn,gT,bl,_T,Lp,Qe,an,TT,wl,vT,bT,nn,wT,po,kT,yT,jT,on,xT,rn,qT,ET,AT,zs,FT,et,ln,zT,es,$T,co,CT,ST,kl,DT,PT,MT,$s,QT,yl,NT,OT,pn,Ip,ts,Cs,jl,dn,LT,xl,IT,Wp,Ne,cn,WT,ss,UT,ql,HT,RT,El,BT,GT,VT,hn,KT,ho,YT,JT,XT,un,ZT,mn,ev,tv,sv,Ss,av,tt,fn,nv,as,ov,uo,rv,iv,Al,lv,pv,dv,Ds,cv,Fl,hv,uv,gn,Up;return v=new Je({}),X=new Je({}),Gs=new Je({}),Xs=new Co({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base')

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained('google/tapas-base-finetuned-wtq')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig('google-base-finetuned-wikisql-supervised')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&#x27;google-base-finetuned-wikisql-supervised&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base')

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained('google/tapas-base-finetuned-wtq')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig('google-base-finetuned-wikisql-supervised')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&#x27;google-base-finetuned-wikisql-supervised&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`}}}),Zs=new Co({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`}}}),pa=new Co({props:{pt:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = 'google/tapas-base'
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding='max_length', return_tensors='pt')
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`},tf:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = 'google/tapas-base'
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding='max_length', return_tensors='tf')
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}}),da=new Co({props:{pt:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"

class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer
    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(str) # be sure to make your table data text only
        encoding = self.tokenizer(table=table, 
                                  queries=item.question, 
                                  answer_coordinates=item.answer_coordinates, 
                                  answer_text=item.answer_text,
                                  truncation=True,
                                  padding="max_length",
                                  return_tensors="pt"
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer) 
        return encoding
    def __len__(self):
       return len(self.data)

data = pd.read_csv(tsv_path, sep='\\t')
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(<span class="hljs-built_in">str</span>) <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(table=table, 
<span class="hljs-meta">... </span>                                  queries=item.question, 
<span class="hljs-meta">... </span>                                  answer_coordinates=item.answer_coordinates, 
<span class="hljs-meta">... </span>                                  answer_text=item.answer_text,
<span class="hljs-meta">... </span>                                  truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                                  padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                                  return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer) 
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>       <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&#x27;\\t&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`},tf:{code:`import tensorflow as tf
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"

class TableDataset:
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer
    def __iter__(self):
        for idx in range(self.__len__()):
            item = self.data.iloc[idx]
            table = pd.read_csv(table_csv_path + item.table_file).astype(str) # be sure to make your table data text only
            encoding = self.tokenizer(table=table, 
                                  queries=item.question, 
                                  answer_coordinates=item.answer_coordinates, 
                                  answer_text=item.answer_text,
                                  truncation=True,
                                  padding="max_length",
                                  return_tensors="tf"
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val,0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer,dtype=tf.float32)
            yield encoding['input_ids'], encoding['attention_mask'], encoding['numeric_values'], \\
                  encoding['numeric_values_scale'], encoding['token_type_ids'], encoding['labels'], \\
                  encoding['float_answer']
    def __len__(self):
       return len(self.data)

data = pd.read_csv(tsv_path, sep='\\t')
train_dataset = TableDataset(data, tokenizer)
output_signature = (
tf.TensorSpec(shape=(512,), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.float32),
tf.TensorSpec(shape=(512,), dtype=tf.float32),
tf.TensorSpec(shape=(512,7), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.float32))
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(<span class="hljs-built_in">str</span>) <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(table=table, 
<span class="hljs-meta">... </span>                                  queries=item.question, 
<span class="hljs-meta">... </span>                                  answer_coordinates=item.answer_coordinates, 
<span class="hljs-meta">... </span>                                  answer_text=item.answer_text,
<span class="hljs-meta">... </span>                                  truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                                  padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                                  return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val,<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer,dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&#x27;input_ids&#x27;</span>], encoding[<span class="hljs-string">&#x27;attention_mask&#x27;</span>], encoding[<span class="hljs-string">&#x27;numeric_values&#x27;</span>], \\
<span class="hljs-meta">... </span>                  encoding[<span class="hljs-string">&#x27;numeric_values_scale&#x27;</span>], encoding[<span class="hljs-string">&#x27;token_type_ids&#x27;</span>], encoding[<span class="hljs-string">&#x27;labels&#x27;</span>], \\
<span class="hljs-meta">... </span>                  encoding[<span class="hljs-string">&#x27;float_answer&#x27;</span>]
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>       <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&#x27;\\t&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,<span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32))
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}}),ua=new Co({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
           num_aggregation_labels = 4,
           use_answer_as_supervision = True,
           answer_loss_cutoff = 0.664694,
           cell_selection_preference = 0.207951,
           huber_loss_delta = 0.121194,
           init_cell_selection_weights_to_zero = True,
           select_one_column = True,
           allow_empty_column_selection = False,
           temperature = 0.0352513,
)
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(2):  # loop over the dataset multiple times
   for batch in train_dataloader:
        # get the inputs; 
        input_ids = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        token_type_ids = batch["token_type_ids"]
        labels = batch["labels"]
        numeric_values = batch["numeric_values"]
        numeric_values_scale = batch["numeric_values_scale"]
        float_answer = batch["float_answer"]

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
                       float_answer=float_answer)
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>           num_aggregation_labels = <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>           use_answer_as_supervision = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           answer_loss_cutoff = <span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>           cell_selection_preference = <span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>           huber_loss_delta = <span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>           init_cell_selection_weights_to_zero = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           select_one_column = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           allow_empty_column_selection = <span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>           temperature = <span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>   <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs; </span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">... </span>        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># zero the parameter gradients</span>
<span class="hljs-meta">... </span>        optimizer.zero_grad()

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
<span class="hljs-meta">... </span>                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
<span class="hljs-meta">... </span>                       float_answer=float_answer)
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`},tf:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
           num_aggregation_labels = 4,
           use_answer_as_supervision = True,
           answer_loss_cutoff = 0.664694,
           cell_selection_preference = 0.207951,
           huber_loss_delta = 0.121194,
           init_cell_selection_weights_to_zero = True,
           select_one_column = True,
           allow_empty_column_selection = False,
           temperature = 0.0352513,
)
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = tf.keras.optimizers.Adam(learning_rate=5e-5)

for epoch in range(2):  # loop over the dataset multiple times
   for batch in train_dataloader:
        # get the inputs; 
        input_ids = batch[0]
        attention_mask = batch[1]
        token_type_ids = batch[4]
        labels = batch[-1]
        numeric_values = batch[2]
        numeric_values_scale = batch[3]
        float_answer = batch[6]

        # forward + backward + optimize
        with tf.GradientTape() as tape:
             outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
                       float_answer=float_answer )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>           num_aggregation_labels = <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>           use_answer_as_supervision = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           answer_loss_cutoff = <span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>           cell_selection_preference = <span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>           huber_loss_delta = <span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>           init_cell_selection_weights_to_zero = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           select_one_column = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           allow_empty_column_selection = <span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>           temperature = <span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>   <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs; </span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>             outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
<span class="hljs-meta">... </span>                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
<span class="hljs-meta">... </span>                       float_answer=float_answer )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}}),ma=new Je({}),fa=new Co({props:{pt:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd 

model_name = 'google/tapas-base-finetuned-wtq'
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding='max_length', return_tensors="pt") 
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
        inputs, 
        outputs.logits.detach(), 
        outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3:"COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
  if len(coordinates) == 1:
    # only a single cell:
    answers.append(table.iat[coordinates[0]])
  else:
    # multiple cells
    cell_values = []
    for coordinate in coordinates:
       cell_values.append(table.iat[coordinate])
    answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
  print(query)
  if predicted_agg == "NONE":
    print("Predicted answer: " + answer)
  else:
    print("Predicted answer: " + predicted_agg + " > " + answer)    `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd 

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>        inputs, 
<span class="hljs-meta">... </span>        outputs.logits.detach(), 
<span class="hljs-meta">... </span>        outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>:<span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>    answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>    cell_values = []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>       cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>    answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>  <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)    
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`},tf:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd 

model_name = 'google/tapas-base-finetuned-wtq'
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding='max_length', return_tensors="tf") 
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
        inputs, 
        outputs.logits, 
        outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3:"COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
  if len(coordinates) == 1:
    # only a single cell:
    answers.append(table.iat[coordinates[0]])
  else:
    # multiple cells
    cell_values = []
    for coordinate in coordinates:
       cell_values.append(table.iat[coordinate])
    answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
  print(query)
  if predicted_agg == "NONE":
    print("Predicted answer: " + answer)
  else:
    print("Predicted answer: " + predicted_agg + " > " + answer)    `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd 

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>        inputs, 
<span class="hljs-meta">... </span>        outputs.logits, 
<span class="hljs-meta">... </span>        outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>:<span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>    answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>    cell_values = []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>       cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>    answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>  <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)    
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}}),Ta=new Je({}),va=new lt({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of
each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the
weighted average in the self-attention heads.`,name:"attentions"}]}}),wa=new Je({}),ka=new lt({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TapasConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TapasConfig.positive_label_weight",description:`<strong>positive_label_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Weight for positive labels.`,name:"positive_label_weight"},{anchor:"transformers.TapasConfig.num_aggregation_labels",description:`<strong>num_aggregation_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of aggregation operators to predict.`,name:"num_aggregation_labels"},{anchor:"transformers.TapasConfig.aggregation_loss_weight",description:`<strong>aggregation_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the aggregation loss.`,name:"aggregation_loss_weight"},{anchor:"transformers.TapasConfig.use_answer_as_supervision",description:`<strong>use_answer_as_supervision</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to use the answer as the only supervision for aggregation examples.`,name:"use_answer_as_supervision"},{anchor:"transformers.TapasConfig.answer_loss_importance",description:`<strong>answer_loss_importance</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the regression loss.`,name:"answer_loss_importance"},{anchor:"transformers.TapasConfig.use_normalized_answer_loss",description:`<strong>use_normalized_answer_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the answer loss by the maximum of the predicted and expected value.`,name:"use_normalized_answer_loss"},{anchor:"transformers.TapasConfig.huber_loss_delta",description:`<strong>huber_loss_delta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Delta parameter used to calculate the regression loss.`,name:"huber_loss_delta"},{anchor:"transformers.TapasConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Value used to control (OR change) the skewness of cell logits probabilities.`,name:"temperature"},{anchor:"transformers.TapasConfig.aggregation_temperature",description:`<strong>aggregation_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Scales aggregation logits to control the skewness of probabilities.`,name:"aggregation_temperature"},{anchor:"transformers.TapasConfig.use_gumbel_for_cells",description:`<strong>use_gumbel_for_cells</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to cell selection.`,name:"use_gumbel_for_cells"},{anchor:"transformers.TapasConfig.use_gumbel_for_aggregation",description:`<strong>use_gumbel_for_aggregation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to aggregation selection.`,name:"use_gumbel_for_aggregation"},{anchor:"transformers.TapasConfig.average_approximation_function",description:`<strong>average_approximation_function</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;ratio&quot;</code>) &#x2014;
Method to calculate the expected average of cells in the weak supervision case. One of <code>&quot;ratio&quot;</code>,
<code>&quot;first_order&quot;</code> or <code>&quot;second_order&quot;</code>.`,name:"average_approximation_function"},{anchor:"transformers.TapasConfig.cell_selection_preference",description:`<strong>cell_selection_preference</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Preference for cell selection in ambiguous cases. Only applicable in case of weak supervision for
aggregation (WTQ, WikiSQL). If the total mass of the aggregation probabilities (excluding the &#x201C;NONE&#x201D;
operator) is higher than this hyperparameter, then aggregation is predicted for an example.`,name:"cell_selection_preference"},{anchor:"transformers.TapasConfig.answer_loss_cutoff",description:`<strong>answer_loss_cutoff</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Ignore examples with answer loss larger than cutoff.`,name:"answer_loss_cutoff"},{anchor:"transformers.TapasConfig.max_num_rows",description:`<strong>max_num_rows</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum number of rows.`,name:"max_num_rows"},{anchor:"transformers.TapasConfig.max_num_columns",description:`<strong>max_num_columns</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Maximum number of columns.`,name:"max_num_columns"},{anchor:"transformers.TapasConfig.average_logits_per_cell",description:`<strong>average_logits_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to average logits per cell.`,name:"average_logits_per_cell"},{anchor:"transformers.TapasConfig.select_one_column",description:`<strong>select_one_column</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to constrain the model to only select cells from a single column.`,name:"select_one_column"},{anchor:"transformers.TapasConfig.allow_empty_column_selection",description:`<strong>allow_empty_column_selection</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to allow not to select any column.`,name:"allow_empty_column_selection"},{anchor:"transformers.TapasConfig.init_cell_selection_weights_to_zero",description:`<strong>init_cell_selection_weights_to_zero</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to initialize cell selection weights to 0 so that the initial probabilities are 50%.`,name:"init_cell_selection_weights_to_zero"},{anchor:"transformers.TapasConfig.reset_position_index_per_cell",description:`<strong>reset_position_index_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to restart position indexes at every cell (i.e. use relative position embeddings).`,name:"reset_position_index_per_cell"},{anchor:"transformers.TapasConfig.disable_per_token_loss",description:`<strong>disable_per_token_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to disable any (strong or weak) supervision on cells.`,name:"disable_per_token_loss"},{anchor:"transformers.TapasConfig.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>Dict[int, label]</code>, <em>optional</em>) &#x2014;
The aggregation labels used to aggregate the results. For example, the WTQ models have the following
aggregation labels: <code>{0: &quot;NONE&quot;, 1: &quot;SUM&quot;, 2: &quot;AVERAGE&quot;, 3: &quot;COUNT&quot;}</code>`,name:"aggregation_labels"},{anchor:"transformers.TapasConfig.no_aggregation_label_index",description:`<strong>no_aggregation_label_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If the aggregation labels are defined and one of these labels represents &#x201C;No aggregation&#x201D;, this should be
set to its index. For example, the WTQ models have the &#x201C;NONE&#x201D; aggregation label at index 0, so that value
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),xa=new Ml({props:{code:`from transformers import TapasModel, TapasConfig
# Initializing a default (SQA) Tapas configuration
configuration = TapasConfig()
# Initializing a model from the configuration
model = TapasModel(configuration)
# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasModel, TapasConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default (SQA) Tapas configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TapasConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),qa=new Je({}),Ea=new lt({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/tokenization_tapas.py#L190",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.TapasTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapasTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.TapasTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.TapasTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapasTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapasTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapasTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapasTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapasTokenizer.empty_token",description:`<strong>empty_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[EMPTY]&quot;</code>) &#x2014;
The token used for empty cell values in a table. Empty cell values include &quot;&quot;, &#x201C;n/a&#x201D;, &#x201C;nan&#x201D; and &#x201D;?&#x201C;.`,name:"empty_token"},{anchor:"transformers.TapasTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip<em>accents &#x2014; (<code>bool</code>, _optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),Aa=new lt({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/tokenization_tapas.py#L531",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
Table containing tabular data. Note that all cell values must be text. Use <em>.astype(str)</em> on a Pandas
dataframe to convert it to string.`,name:"table"},{anchor:"transformers.TapasTokenizer.__call__.queries",description:`<strong>queries</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
Question or batch of questions related to a table to be encoded. Note that in case of a batch, all
questions must refer to the <strong>same</strong> table.`,name:"queries"},{anchor:"transformers.TapasTokenizer.__call__.answer_coordinates",description:`<strong>answer_coordinates</strong> (<code>List[Tuple]</code> or <code>List[List[Tuple]]</code>, <em>optional</em>) &#x2014;
Answer coordinates of each table-question pair in the batch. In case only a single table-question pair
is provided, then the answer_coordinates must be a single list of one or more tuples. Each tuple must
be a (row_index, column_index) pair. The first data row (not the column header row) has index 0. The
first column has index 0. In case a batch of table-question pairs is provided, then the
answer_coordinates must be a list of lists of tuples (each list corresponding to a single
table-question pair).`,name:"answer_coordinates"},{anchor:"transformers.TapasTokenizer.__call__.answer_text",description:`<strong>answer_text</strong> (<code>List[str]</code> or <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
Answer text of each table-question pair in the batch. In case only a single table-question pair is
provided, then the answer_text must be a single list of one or more strings. Each string must be the
answer text of a corresponding answer coordinate. In case a batch of table-question pairs is provided,
then the answer_coordinates must be a list of lists of strings (each list corresponding to a single
table-question pair).`,name:"answer_text"},{anchor:"transformers.TapasTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.14.1/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a
single sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of
different lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument
<code>max_length</code> or to the maximum acceptable input length for the model if that argument is not
provided. This will truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with
sequence lengths greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum
length is required by one of the truncation/padding parameters. If the model has no specific maximum
input length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.14.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),Fa=new lt({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/tokenization_tapas.py#L1888",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using
<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer
coordinates as a list of lists of tuples. Each element in the list contains the predicted answer
coordinates of a single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index,
column index).</li>
<li>predicted<em>aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, _optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Sa=new Je({}),Pa=new Je({}),Qa=new Je({}),Oa=new Je({}),Ia=new Je({}),Wa=new lt({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L976",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),js=new Ls({props:{$$slots:{default:[ry]},$$scope:{ctx:fe}}}),Ba=new lt({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L982",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).</p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasModel
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base&#x2019;)
model = TapasModel.from_pretrained(&#x2018;google/tapas-base&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)
queries = [&#x201C;How many movies has George Clooney played in?&#x201D;, &#x201C;How old is Brad Pitt?&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=queries, padding=&#x201C;max_length&#x201D;, return_tensors=&#x201C;tf&#x201D;)
outputs = model(**inputs)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>last_hidden_states = outputs.last_hidden_state</p>
</blockquote>
</blockquote>
</blockquote>`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),xs=new Ls({props:{$$slots:{default:[iy]},$$scope:{ctx:fe}}}),Ga=new Ml({props:{code:`from transformers import TapasTokenizer, TFTapasModel
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasModel.from_pretrained('google/tapas-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasModel.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Va=new Je({}),Ka=new lt({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L1069",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Es=new Ls({props:{$$slots:{default:[ly]},$$scope:{ctx:fe}}}),en=new lt({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L1085",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code></p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base&#x2019;)
model = TapasForMaskedLM.from_pretrained(&#x2018;google/tapas-base&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=&#x201C;How many [MASK] has George [MASK] played in?&#x201D;, return_tensors=&#x201C;tf&#x201D;)
labels = tokenizer(table=table, queries=&#x201C;How many movies has George Clooney played in?&#x201D;, return_tensors=&#x201C;tf&#x201D;)[&#x201C;input_ids&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>outputs = model(**inputs, labels=labels)
logits = outputs.logits</p>
</blockquote>
</blockquote>
</blockquote>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
>TFMaskedLMOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),As=new Ls({props:{$$slots:{default:[py]},$$scope:{ctx:fe}}}),tn=new Ml({props:{code:`from transformers import TapasTokenizer, TFTapasForMaskedLM
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasForMaskedLM.from_pretrained('google/tapas-base')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),sn=new Je({}),an=new lt({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L1652",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),zs=new Ls({props:{$$slots:{default:[dy]},$$scope:{ctx:fe}}}),ln=new lt({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L1663",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.</p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base-finetuned-tabfact&#x2019;)
model = TapasForSequenceClassification.from_pretrained(&#x2018;google/tapas-base-finetuned-tabfact&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)
queries = [&#x201C;There is only one actor who is 45 years old&#x201D;, &#x201C;There are 3 actors which played in more than 60 movies&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=queries, padding=&#x201C;max_length&#x201D;, return_tensors=&#x201C;tf&#x201D;)
labels = tf.convert_to_tensor([1, 0]) # 1 means entailed, 0 means refuted</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits</p>
</blockquote>
</blockquote>
</blockquote>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
>TFSequenceClassifierOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),$s=new Ls({props:{$$slots:{default:[cy]},$$scope:{ctx:fe}}}),pn=new Ml({props:{code:`from transformers import TapasTokenizer, TFTapasForSequenceClassification
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasForSequenceClassification.from_pretrained('google/tapas-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),dn=new Je({}),cn=new lt({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L1292",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ss=new Ls({props:{$$slots:{default:[hy]},$$scope:{ctx:fe}}}),fn=new lt({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/tapas/modeling_tf_tapas.py#L1314",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong
supervision for aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to
calculate the regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.
Only required in case of weak supervision for aggregation (WTQ) to calculate the regression loss.</p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base-finetuned-wtq&#x2019;)
model = TapasForQuestionAnswering.from_pretrained(&#x2018;google/tapas-base-finetuned-wtq&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)
queries = [&#x201C;How many movies has George Clooney played in?&#x201D;, &#x201C;How old is Brad Pitt?&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=queries, padding=&#x201C;max_length&#x201D;, return_tensors=&#x201C;tf&#x201D;)
outputs = model(**inputs)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>logits = outputs.logits
logits_aggregation = outputs.logits_aggregation</p>
</blockquote>
</blockquote>
</blockquote>`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>TFTableQuestionAnsweringOutput</code> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>TFTableQuestionAnsweringOutput</code> or \`tuple(tf.Tensor)\u201C</p>
`}}),Ds=new Ls({props:{$$slots:{default:[uy]},$$scope:{ctx:fe}}}),gn=new Ml({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors='tf')
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = ' '.join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0]+1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&#x27; &#x27;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]+<span class="hljs-number">1</span>])`}}),{c(){m=o("meta"),C=l(),g=o("h1"),f=o("a"),A=o("span"),k(v.$$.fragment),b=l(),F=o("span"),ge=a("TAPAS"),V=l(),T=o("h2"),K=o("a"),L=o("span"),k(X.$$.fragment),_e=l(),I=o("span"),Te=a("Overview"),pe=l(),W=o("p"),Q=a("The TAPAS model was proposed in "),Z=o("a"),ee=a("TAPAS: Weakly Supervised Table Parsing via Pre-training"),w=a(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),z=l(),ne=o("p"),U=a("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),de=l(),G=o("ul"),N=o("li"),te=o("a"),ve=a("SQA"),$=a(" (Sequential Question Answering by Microsoft)"),be=l(),O=o("li"),se=o("a"),we=a("WTQ"),H=a(" (Wiki Table Questions by Stanford University)"),ke=l(),oe=o("li"),D=o("a"),ye=a("WikiSQL"),R=a(" (by Salesforce)."),ce=l(),u=o("p"),_=a("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Y=l(),qe=o("p"),He=a("The abstract from the paper is the following:"),P=l(),Ee=o("p"),ze=o("em"),Re=a("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),M=l(),S=o("p"),Be=a("In addition, the authors have further pre-trained TAPAS to recognize "),$e=o("strong"),B=a("table entailment"),Ge=a(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),je=o("a"),xe=a("TabFact"),Ve=a(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Is=o("a"),Sd=a("Understanding tables with intermediate pre-training"),Dd=a(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),Ql=l(),ns=o("img"),Nl=l(),vn=o("small"),Pd=a("TAPAS architecture. Taken from the [official blog post](https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html)."),Ol=l(),pt=o("p"),Md=a("This model was contributed by "),Ws=o("a"),Qd=a("nielsr"),Nd=a(". The Tensorflow version of this model was contributed by "),Us=o("a"),Od=a("kamalkraj"),Ld=a(". The original code can be found "),Hs=o("a"),Id=a("here"),Wd=a("."),Ll=l(),bn=o("p"),Ud=a("Tips:"),Il=l(),dt=o("ul"),Ce=o("li"),Hd=a("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),So=o("code"),Rd=a("reset_position_index_per_cell"),Bd=a(" parameter of "),wn=o("a"),Gd=a("TapasConfig"),Vd=a(", which is set to "),Do=o("code"),Kd=a("True"),Yd=a(" by default. The default versions of the models available on the "),Rs=o("a"),Jd=a("hub"),Xd=a(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Po=o("code"),Zd=a('revision="no_reset"'),ec=a(" when calling the "),Mo=o("code"),tc=a("from_pretrained()"),sc=a(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ac=l(),Ke=o("li"),nc=a("TAPAS is based on BERT, so "),Qo=o("code"),oc=a("TAPAS-base"),rc=a(" for example corresponds to a "),No=o("code"),ic=a("BERT-base"),lc=a(" architecture. Of course, "),Oo=o("code"),pc=a("TAPAS-large"),dc=a(" will result in the best performance (the results reported in the paper are from "),Lo=o("code"),cc=a("TAPAS-large"),hc=a("). Results of the various sized models are shown on the "),Bs=o("a"),uc=a("original Github repository"),mc=a("."),fc=l(),Ct=o("li"),gc=a("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),Io=o("code"),_c=a("prev_labels"),Tc=a(" token type ids can be overwritten by the predicted "),Wo=o("code"),vc=a("labels"),bc=a(" of the model to the previous question. See \u201CUsage\u201D section for more info."),wc=l(),Uo=o("li"),kc=a("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),Wl=l(),St=o("h2"),os=o("a"),Ho=o("span"),k(Gs.$$.fragment),yc=l(),Ro=o("span"),jc=a("Usage: fine-tuning"),Ul=l(),rs=o("p"),xc=a("Here we explain how you can fine-tune "),kn=o("a"),qc=a("TapasForQuestionAnswering"),Ec=a(" on your own dataset."),Hl=l(),yn=o("p"),Bo=o("strong"),Ac=a("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Rl=l(),is=o("p"),Fc=a("Basically, there are 3 different ways in which one can fine-tune "),jn=o("a"),zc=a("TapasForQuestionAnswering"),$c=a(", corresponding to the different datasets on which Tapas was fine-tuned:"),Bl=l(),bt=o("ol"),Go=o("li"),Cc=a("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Sc=l(),Vs=o("li"),Dc=a("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),Vo=o("strong"),Pc=a("weak supervision"),Mc=a(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Qc=l(),Ks=o("li"),Nc=a("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),Ko=o("strong"),Oc=a("strong supervision"),Lc=a(". Here, learning the appropriate aggregation operator is much easier."),Gl=l(),xn=o("p"),Ic=a("To summarize:"),Vl=l(),ls=o("table"),Yo=o("thead"),Dt=o("tr"),Jo=o("th"),Xo=o("strong"),Wc=a("Task"),Uc=l(),Zo=o("th"),er=o("strong"),Hc=a("Example dataset"),Rc=l(),tr=o("th"),sr=o("strong"),Bc=a("Description"),Gc=l(),Pt=o("tbody"),Mt=o("tr"),ar=o("td"),Vc=a("Conversational"),Kc=l(),nr=o("td"),Yc=a("SQA"),Jc=l(),or=o("td"),Xc=a("Conversational, only cell selection questions"),Zc=l(),Qt=o("tr"),rr=o("td"),eh=a("Weak supervision for aggregation"),th=l(),ir=o("td"),sh=a("WTQ"),ah=l(),lr=o("td"),nh=a("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),oh=l(),Nt=o("tr"),pr=o("td"),rh=a("Strong supervision for aggregation"),ih=l(),dr=o("td"),lh=a("WikiSQL-supervised"),ph=l(),cr=o("td"),dh=a("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Kl=l(),wt=o("p"),ch=a(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),Ys=o("a"),hh=a("torch-scatter"),uh=a(" dependency for your environment in case you\u2019re using PyTorch, or the "),Js=o("a"),mh=a("tensorflow_probability"),fh=a(`
dependency in case you\u2019re using Tensorflow:`),Yl=l(),k(Xs.$$.fragment),Jl=l(),kt=o("p"),gh=a("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),qn=o("a"),_h=a("TapasConfig"),Th=a(", and then create a "),En=o("a"),vh=a("TapasForQuestionAnswering"),bh=a(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),Xl=l(),k(Zs.$$.fragment),Zl=l(),ps=o("p"),wh=a("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),ea=o("a"),kh=a("here"),yh=a(" for more info."),ep=l(),ds=o("p"),jh=a("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),ta=o("a"),xh=a("here"),qh=a("."),tp=l(),An=o("p"),hr=o("strong"),Eh=a("STEP 2: Prepare your data in the SQA format"),sp=l(),cs=o("p"),Ah=a("Second, no matter what you picked above, you should prepare your dataset in the "),sa=o("a"),Fh=a("SQA"),zh=a(" format. This format is a TSV/CSV file with the following columns:"),ap=l(),re=o("ul"),Fn=o("li"),ur=o("code"),$h=a("id"),Ch=a(": optional, id of the table-question pair, for bookkeeping purposes."),Sh=l(),zn=o("li"),mr=o("code"),Dh=a("annotator"),Ph=a(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),Mh=l(),$n=o("li"),fr=o("code"),Qh=a("position"),Nh=a(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),Oh=l(),Cn=o("li"),gr=o("code"),Lh=a("question"),Ih=a(": string"),Wh=l(),Sn=o("li"),_r=o("code"),Uh=a("table_file"),Hh=a(": string, name of a csv file containing the tabular data"),Rh=l(),Dn=o("li"),Tr=o("code"),Bh=a("answer_coordinates"),Gh=a(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Vh=l(),Pn=o("li"),vr=o("code"),Kh=a("answer_text"),Yh=a(": list of one or more strings (each string being a cell value that is part of the answer)"),Jh=l(),Mn=o("li"),br=o("code"),Xh=a("aggregation_label"),Zh=a(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),eu=l(),Qn=o("li"),wr=o("code"),tu=a("float_answer"),su=a(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),np=l(),Le=o("p"),au=a("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),aa=o("a"),nu=a("here"),ou=a(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),na=o("a"),ru=a("here"),iu=a(". Interestingly, these conversion scripts are not perfect (the "),kr=o("code"),lu=a("answer_coordinates"),pu=a(" and "),yr=o("code"),du=a("float_answer"),cu=a(" fields are populated based on the "),jr=o("code"),hu=a("answer_text"),uu=a("), meaning that WTQ and WikiSQL results could actually be improved."),op=l(),Nn=o("p"),xr=o("strong"),mu=a("STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),rp=l(),Ae=o("p"),fu=a("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),On=o("a"),gu=a("TapasTokenizer"),_u=a(" to convert table-question pairs into "),qr=o("code"),Tu=a("input_ids"),vu=a(", "),Er=o("code"),bu=a("attention_mask"),wu=a(", "),Ar=o("code"),ku=a("token_type_ids"),yu=a(" and so on. Again, based on which of the three cases you picked above, "),Ln=o("a"),ju=a("TapasForQuestionAnswering"),xu=a("/"),In=o("a"),qu=a("TFTapasForQuestionAnswering"),Eu=a(` requires different
inputs to be fine-tuned:`),ip=l(),hs=o("table"),Fr=o("thead"),oa=o("tr"),zr=o("th"),$r=o("strong"),Au=a("Task"),Fu=l(),Cr=o("th"),Sr=o("strong"),zu=a("Required inputs"),$u=l(),Ot=o("tbody"),ra=o("tr"),Dr=o("td"),Cu=a("Conversational"),Su=l(),vt=o("td"),Pr=o("code"),Du=a("input_ids"),Pu=a(", "),Mr=o("code"),Mu=a("attention_mask"),Qu=a(", "),Qr=o("code"),Nu=a("token_type_ids"),Ou=a(", "),Nr=o("code"),Lu=a("labels"),Iu=l(),ia=o("tr"),Or=o("td"),Wu=a("Weak supervision for aggregation"),Uu=l(),Se=o("td"),Lr=o("code"),Hu=a("input_ids"),Ru=a(", "),Ir=o("code"),Bu=a("attention_mask"),Gu=a(", "),Wr=o("code"),Vu=a("token_type_ids"),Ku=a(", "),Ur=o("code"),Yu=a("labels"),Ju=a(", "),Hr=o("code"),Xu=a("numeric_values"),Zu=a(", "),Rr=o("code"),em=a("numeric_values_scale"),tm=a(", "),Br=o("code"),sm=a("float_answer"),am=l(),la=o("tr"),Gr=o("td"),nm=a("Strong supervision for aggregation"),om=l(),rt=o("td"),Vr=o("code"),rm=a("input ids"),im=a(", "),Kr=o("code"),lm=a("attention mask"),pm=a(", "),Yr=o("code"),dm=a("token type ids"),cm=a(", "),Jr=o("code"),hm=a("labels"),um=a(", "),Xr=o("code"),mm=a("aggregation_labels"),lp=l(),ie=o("p"),Wn=o("a"),fm=a("TapasTokenizer"),gm=a(" creates the "),Zr=o("code"),_m=a("labels"),Tm=a(", "),ei=o("code"),vm=a("numeric_values"),bm=a(" and "),ti=o("code"),wm=a("numeric_values_scale"),km=a(" based on the "),si=o("code"),ym=a("answer_coordinates"),jm=a(" and "),ai=o("code"),xm=a("answer_text"),qm=a(" columns of the TSV file. The "),ni=o("code"),Em=a("float_answer"),Am=a(" and "),oi=o("code"),Fm=a("aggregation_labels"),zm=a(" are already in the TSV file of step 2. Here\u2019s an example:"),pp=l(),k(pa.$$.fragment),dp=l(),ct=o("p"),$m=a("Note that "),Un=o("a"),Cm=a("TapasTokenizer"),Sm=a(" expects the data of the table to be "),ri=o("strong"),Dm=a("text-only"),Pm=a(". You can use "),ii=o("code"),Mm=a(".astype(str)"),Qm=a(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),cp=l(),k(da.$$.fragment),hp=l(),J=o("p"),Nm=a("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),li=o("strong"),Om=a("not conversational"),Lm=a(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),pi=o("code"),Im=a("queries"),Wm=a(", "),di=o("code"),Um=a("answer_coordinates"),Hm=a(" and "),ci=o("code"),Rm=a("answer_text"),Bm=a(" per table (in the order of their "),hi=o("code"),Gm=a("position"),Vm=a(`
index) and batch encode each table with its questions. This will make sure that the `),ui=o("code"),Km=a("prev_labels"),Ym=a(" token types (see docs of "),Hn=o("a"),Jm=a("TapasTokenizer"),Xm=a(") are set correctly. See "),ca=o("a"),Zm=a("this notebook"),ef=a(" for more info. See "),ha=o("a"),tf=a("this notebook"),sf=a(" for more info regarding using the TensorFlow model."),up=l(),Rn=o("p"),mi=o("strong"),af=a("STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),mp=l(),yt=o("p"),nf=a("You can then fine-tune "),Bn=o("a"),of=a("TapasForQuestionAnswering"),rf=a(" or "),Gn=o("a"),lf=a("TFTapasForQuestionAnswering"),pf=a(" as follows (shown here for the weak supervision for aggregation case):"),fp=l(),k(ua.$$.fragment),gp=l(),Lt=o("h2"),us=o("a"),fi=o("span"),k(ma.$$.fragment),df=l(),gi=o("span"),cf=a("Usage: inference"),_p=l(),he=o("p"),hf=a("Here we explain how you can use "),Vn=o("a"),uf=a("TapasForQuestionAnswering"),mf=a(" or "),Kn=o("a"),ff=a("TFTapasForQuestionAnswering"),gf=a(" for inference (i.e. making predictions on new data). For inference, only "),_i=o("code"),_f=a("input_ids"),Tf=a(", "),Ti=o("code"),vf=a("attention_mask"),bf=a(" and "),vi=o("code"),wf=a("token_type_ids"),kf=a(" (which you can obtain using "),Yn=o("a"),yf=a("TapasTokenizer"),jf=a(") have to be provided to the model to obtain the logits. Next, you can use the handy "),bi=o("code"),xf=a("convert_logits_to_predictions"),qf=a(" method to convert these into predicted coordinates and optional aggregation indices."),Tp=l(),ms=o("p"),Ef=a("However, note that inference is "),wi=o("strong"),Af=a("different"),Ff=a(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),vp=l(),k(fa.$$.fragment),bp=l(),Ie=o("p"),zf=a("In case of a conversational set-up, then each table-question pair must be provided "),ki=o("strong"),$f=a("sequentially"),Cf=a(" to the model, such that the "),yi=o("code"),Sf=a("prev_labels"),Df=a(" token types can be overwritten by the predicted "),ji=o("code"),Pf=a("labels"),Mf=a(" of the previous table-question pair. Again, more info can be found in "),ga=o("a"),Qf=a("this notebook"),Nf=a(" (for PyTorch) and "),_a=o("a"),Of=a("this notebook"),Lf=a(" (for TensorFlow)."),wp=l(),It=o("h2"),fs=o("a"),xi=o("span"),k(Ta.$$.fragment),If=l(),qi=o("span"),Wf=a("TAPAS specific outputs"),kp=l(),Wt=o("div"),k(va.$$.fragment),Uf=l(),ba=o("p"),Hf=a("Output type of "),Jn=o("a"),Rf=a("TapasForQuestionAnswering"),Bf=a("."),yp=l(),Ut=o("h2"),gs=o("a"),Ei=o("span"),k(wa.$$.fragment),Gf=l(),Ai=o("span"),Vf=a("TapasConfig"),jp=l(),Ye=o("div"),k(ka.$$.fragment),Kf=l(),it=o("p"),Yf=a("This is the configuration class to store the configuration of a "),Xn=o("a"),Jf=a("TapasModel"),Xf=a(`. It is used to
instantiate a TAPAS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the TAPAS `),Fi=o("em"),Zf=a("tapas-base-finetuned-sqa"),eg=a(`
architecture. Configuration objects inherit from `),zi=o("code"),tg=a("PreTrainedConfig"),sg=a(` and can be used to control
the model outputs. Read the documentation from `),Zn=o("a"),ag=a("PretrainedConfig"),ng=a(" for more information."),og=l(),ya=o("p"),rg=a(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),ja=o("a"),ig=a("https://github.com/google-research/tapas/tree/master"),lg=a("."),pg=l(),$i=o("p"),dg=a("Example:"),cg=l(),k(xa.$$.fragment),xp=l(),Ht=o("h2"),_s=o("a"),Ci=o("span"),k(qa.$$.fragment),hg=l(),Si=o("span"),ug=a("TapasTokenizer"),qp=l(),le=o("div"),k(Ea.$$.fragment),mg=l(),Di=o("p"),fg=a(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),gg=l(),ae=o("p"),_g=a("This tokenizer inherits from "),eo=o("a"),Tg=a("PreTrainedTokenizer"),vg=a(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.
`),to=o("a"),bg=a("TapasTokenizer"),wg=a(` creates several token type ids to encode tabular structure. To be more
precise, it adds 7 token type ids, in the following order: `),Pi=o("code"),kg=a("segment_ids"),yg=a(", "),Mi=o("code"),jg=a("column_ids"),xg=a(", "),Qi=o("code"),qg=a("row_ids"),Eg=a(`,
`),Ni=o("code"),Ag=a("prev_labels"),Fg=a(", "),Oi=o("code"),zg=a("column_ranks"),$g=a(", "),Li=o("code"),Cg=a("inv_column_ranks"),Sg=a(" and "),Ii=o("code"),Dg=a("numeric_relations"),Pg=a(":"),Mg=l(),De=o("ul"),Wi=o("li"),Qg=a(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Ng=l(),Ui=o("li"),Og=a(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Lg=l(),Hi=o("li"),Ig=a(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Wg=l(),Ri=o("li"),Ug=a(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Hg=l(),Bi=o("li"),Rg=a(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Bg=l(),Gi=o("li"),Gg=a(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Vg=l(),Vi=o("li"),Kg=a(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Yg=l(),so=o("p"),ao=o("a"),Jg=a("TapasTokenizer"),Xg=a(` runs end-to-end tokenization on a table and associated sentences: punctuation
splitting and wordpiece.`),Zg=l(),Ts=o("div"),k(Aa.$$.fragment),e_=l(),Ki=o("p"),t_=a("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),s_=l(),jt=o("div"),k(Fa.$$.fragment),a_=l(),za=o("p"),n_=a("Converts logits of "),no=o("a"),o_=a("TapasForQuestionAnswering"),r_=a(` to actual predicted answer coordinates and
optional aggregation indices.`),i_=l(),$a=o("p"),l_=a("The original implementation, on which this function is based, can be found "),Ca=o("a"),p_=a("here"),d_=a("."),c_=l(),Yi=o("div"),Ep=l(),Rt=o("h2"),vs=o("a"),Ji=o("span"),k(Sa.$$.fragment),h_=l(),Xi=o("span"),u_=a("TapasModel"),Ap=l(),Da=o("div"),Zi=o("div"),Fp=l(),Bt=o("h2"),bs=o("a"),el=o("span"),k(Pa.$$.fragment),m_=l(),tl=o("span"),f_=a("TapasForMaskedLM"),zp=l(),Ma=o("div"),sl=o("div"),$p=l(),Gt=o("h2"),ws=o("a"),al=o("span"),k(Qa.$$.fragment),g_=l(),nl=o("span"),__=a("TapasForSequenceClassification"),Cp=l(),Na=o("div"),ol=o("div"),Sp=l(),Vt=o("h2"),ks=o("a"),rl=o("span"),k(Oa.$$.fragment),T_=l(),il=o("span"),v_=a("TapasForQuestionAnswering"),Dp=l(),La=o("div"),ll=o("div"),Pp=l(),Kt=o("h2"),ys=o("a"),pl=o("span"),k(Ia.$$.fragment),b_=l(),dl=o("span"),w_=a("TFTapasModel"),Mp=l(),Pe=o("div"),k(Wa.$$.fragment),k_=l(),cl=o("p"),y_=a("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),j_=l(),Ua=o("p"),x_=a("This model inherits from "),oo=o("a"),q_=a("TFPreTrainedModel"),E_=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),A_=l(),Ha=o("p"),F_=a("This model is also a "),Ra=o("a"),z_=a("tf.keras.Model"),$_=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),C_=l(),k(js.$$.fragment),S_=l(),Xe=o("div"),k(Ba.$$.fragment),D_=l(),Yt=o("p"),P_=a("The "),ro=o("a"),M_=a("TFTapasModel"),Q_=a(" forward method, overrides the "),hl=o("code"),N_=a("__call__"),O_=a(" special method."),L_=l(),k(xs.$$.fragment),I_=l(),ul=o("p"),W_=a("Example:"),U_=l(),k(Ga.$$.fragment),Qp=l(),Jt=o("h2"),qs=o("a"),ml=o("span"),k(Va.$$.fragment),H_=l(),fl=o("span"),R_=a("TFTapasForMaskedLM"),Np=l(),Me=o("div"),k(Ka.$$.fragment),B_=l(),Ya=o("p"),G_=a("Tapas Model with a "),gl=o("em"),V_=a("language modeling"),K_=a(" head on top."),Y_=l(),Ja=o("p"),J_=a("This model inherits from "),io=o("a"),X_=a("TFPreTrainedModel"),Z_=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),eT=l(),Xa=o("p"),tT=a("This model is also a "),Za=o("a"),sT=a("tf.keras.Model"),aT=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),nT=l(),k(Es.$$.fragment),oT=l(),Ze=o("div"),k(en.$$.fragment),rT=l(),Xt=o("p"),iT=a("The "),lo=o("a"),lT=a("TFTapasForMaskedLM"),pT=a(" forward method, overrides the "),_l=o("code"),dT=a("__call__"),cT=a(" special method."),hT=l(),k(As.$$.fragment),uT=l(),Tl=o("p"),mT=a("Example:"),fT=l(),k(tn.$$.fragment),Op=l(),Zt=o("h2"),Fs=o("a"),vl=o("span"),k(sn.$$.fragment),gT=l(),bl=o("span"),_T=a("TFTapasForSequenceClassification"),Lp=l(),Qe=o("div"),k(an.$$.fragment),TT=l(),wl=o("p"),vT=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),bT=l(),nn=o("p"),wT=a("This model inherits from "),po=o("a"),kT=a("TFPreTrainedModel"),yT=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),jT=l(),on=o("p"),xT=a("This model is also a "),rn=o("a"),qT=a("tf.keras.Model"),ET=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),AT=l(),k(zs.$$.fragment),FT=l(),et=o("div"),k(ln.$$.fragment),zT=l(),es=o("p"),$T=a("The "),co=o("a"),CT=a("TFTapasForSequenceClassification"),ST=a(" forward method, overrides the "),kl=o("code"),DT=a("__call__"),PT=a(" special method."),MT=l(),k($s.$$.fragment),QT=l(),yl=o("p"),NT=a("Example:"),OT=l(),k(pn.$$.fragment),Ip=l(),ts=o("h2"),Cs=o("a"),jl=o("span"),k(dn.$$.fragment),LT=l(),xl=o("span"),IT=a("TFTapasForQuestionAnswering"),Wp=l(),Ne=o("div"),k(cn.$$.fragment),WT=l(),ss=o("p"),UT=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),ql=o("em"),HT=a("logits"),RT=a(" and optional "),El=o("em"),BT=a("logits_aggregation"),GT=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),VT=l(),hn=o("p"),KT=a("This model inherits from "),ho=o("a"),YT=a("TFPreTrainedModel"),JT=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),XT=l(),un=o("p"),ZT=a("This model is also a "),mn=o("a"),ev=a("tf.keras.Model"),tv=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),sv=l(),k(Ss.$$.fragment),av=l(),tt=o("div"),k(fn.$$.fragment),nv=l(),as=o("p"),ov=a("The "),uo=o("a"),rv=a("TFTapasForQuestionAnswering"),iv=a(" forward method, overrides the "),Al=o("code"),lv=a("__call__"),pv=a(" special method."),dv=l(),k(Ds.$$.fragment),cv=l(),Fl=o("p"),hv=a("Example:"),uv=l(),k(gn.$$.fragment),this.h()},l(s){const h=ny('[data-svelte="svelte-1phssyn"]',document.head);m=r(h,"META",{name:!0,content:!0}),h.forEach(t),C=p(s),g=r(s,"H1",{class:!0});var _n=i(g);f=r(_n,"A",{id:!0,class:!0,href:!0});var zl=i(f);A=r(zl,"SPAN",{});var $l=i(A);y(v.$$.fragment,$l),$l.forEach(t),zl.forEach(t),b=p(_n),F=r(_n,"SPAN",{});var Cl=i(F);ge=n(Cl,"TAPAS"),Cl.forEach(t),_n.forEach(t),V=p(s),T=r(s,"H2",{class:!0});var Tn=i(T);K=r(Tn,"A",{id:!0,class:!0,href:!0});var Sl=i(K);L=r(Sl,"SPAN",{});var Dl=i(L);y(X.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),_e=p(Tn),I=r(Tn,"SPAN",{});var Pl=i(I);Te=n(Pl,"Overview"),Pl.forEach(t),Tn.forEach(t),pe=p(s),W=r(s,"P",{});var Hp=i(W);Q=n(Hp,"The TAPAS model was proposed in "),Z=r(Hp,"A",{href:!0,rel:!0});var Av=i(Z);ee=n(Av,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Av.forEach(t),w=n(Hp,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Hp.forEach(t),z=p(s),ne=r(s,"P",{});var Fv=i(ne);U=n(Fv,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Fv.forEach(t),de=p(s),G=r(s,"UL",{});var mo=i(G);N=r(mo,"LI",{});var mv=i(N);te=r(mv,"A",{href:!0,rel:!0});var zv=i(te);ve=n(zv,"SQA"),zv.forEach(t),$=n(mv," (Sequential Question Answering by Microsoft)"),mv.forEach(t),be=p(mo),O=r(mo,"LI",{});var fv=i(O);se=r(fv,"A",{href:!0,rel:!0});var $v=i(se);we=n($v,"WTQ"),$v.forEach(t),H=n(fv," (Wiki Table Questions by Stanford University)"),fv.forEach(t),ke=p(mo),oe=r(mo,"LI",{});var gv=i(oe);D=r(gv,"A",{href:!0,rel:!0});var Cv=i(D);ye=n(Cv,"WikiSQL"),Cv.forEach(t),R=n(gv," (by Salesforce)."),gv.forEach(t),mo.forEach(t),ce=p(s),u=r(s,"P",{});var Sv=i(u);_=n(Sv,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Sv.forEach(t),Y=p(s),qe=r(s,"P",{});var Dv=i(qe);He=n(Dv,"The abstract from the paper is the following:"),Dv.forEach(t),P=p(s),Ee=r(s,"P",{});var Pv=i(Ee);ze=r(Pv,"EM",{});var Mv=i(ze);Re=n(Mv,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),Mv.forEach(t),Pv.forEach(t),M=p(s),S=r(s,"P",{});var Ps=i(S);Be=n(Ps,"In addition, the authors have further pre-trained TAPAS to recognize "),$e=r(Ps,"STRONG",{});var Qv=i($e);B=n(Qv,"table entailment"),Qv.forEach(t),Ge=n(Ps,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),je=r(Ps,"A",{href:!0,rel:!0});var Nv=i(je);xe=n(Nv,"TabFact"),Nv.forEach(t),Ve=n(Ps,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Is=r(Ps,"A",{href:!0,rel:!0});var Ov=i(Is);Sd=n(Ov,"Understanding tables with intermediate pre-training"),Ov.forEach(t),Dd=n(Ps," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),Ps.forEach(t),Ql=p(s),ns=r(s,"IMG",{src:!0,alt:!0,width:!0}),Nl=p(s),vn=r(s,"SMALL",{});var Lv=i(vn);Pd=n(Lv,"TAPAS architecture. Taken from the [official blog post](https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html)."),Lv.forEach(t),Ol=p(s),pt=r(s,"P",{});var Ms=i(pt);Md=n(Ms,"This model was contributed by "),Ws=r(Ms,"A",{href:!0,rel:!0});var Iv=i(Ws);Qd=n(Iv,"nielsr"),Iv.forEach(t),Nd=n(Ms,". The Tensorflow version of this model was contributed by "),Us=r(Ms,"A",{href:!0,rel:!0});var Wv=i(Us);Od=n(Wv,"kamalkraj"),Wv.forEach(t),Ld=n(Ms,". The original code can be found "),Hs=r(Ms,"A",{href:!0,rel:!0});var Uv=i(Hs);Id=n(Uv,"here"),Uv.forEach(t),Wd=n(Ms,"."),Ms.forEach(t),Ll=p(s),bn=r(s,"P",{});var Hv=i(bn);Ud=n(Hv,"Tips:"),Hv.forEach(t),Il=p(s),dt=r(s,"UL",{});var Qs=i(dt);Ce=r(Qs,"LI",{});var st=i(Ce);Hd=n(st,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),So=r(st,"CODE",{});var Rv=i(So);Rd=n(Rv,"reset_position_index_per_cell"),Rv.forEach(t),Bd=n(st," parameter of "),wn=r(st,"A",{href:!0});var Bv=i(wn);Gd=n(Bv,"TapasConfig"),Bv.forEach(t),Vd=n(st,", which is set to "),Do=r(st,"CODE",{});var Gv=i(Do);Kd=n(Gv,"True"),Gv.forEach(t),Yd=n(st," by default. The default versions of the models available on the "),Rs=r(st,"A",{href:!0,rel:!0});var Vv=i(Rs);Jd=n(Vv,"hub"),Vv.forEach(t),Xd=n(st," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Po=r(st,"CODE",{});var Kv=i(Po);Zd=n(Kv,'revision="no_reset"'),Kv.forEach(t),ec=n(st," when calling the "),Mo=r(st,"CODE",{});var Yv=i(Mo);tc=n(Yv,"from_pretrained()"),Yv.forEach(t),sc=n(st," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),st.forEach(t),ac=p(Qs),Ke=r(Qs,"LI",{});var ht=i(Ke);nc=n(ht,"TAPAS is based on BERT, so "),Qo=r(ht,"CODE",{});var Jv=i(Qo);oc=n(Jv,"TAPAS-base"),Jv.forEach(t),rc=n(ht," for example corresponds to a "),No=r(ht,"CODE",{});var Xv=i(No);ic=n(Xv,"BERT-base"),Xv.forEach(t),lc=n(ht," architecture. Of course, "),Oo=r(ht,"CODE",{});var Zv=i(Oo);pc=n(Zv,"TAPAS-large"),Zv.forEach(t),dc=n(ht," will result in the best performance (the results reported in the paper are from "),Lo=r(ht,"CODE",{});var eb=i(Lo);cc=n(eb,"TAPAS-large"),eb.forEach(t),hc=n(ht,"). Results of the various sized models are shown on the "),Bs=r(ht,"A",{href:!0,rel:!0});var tb=i(Bs);uc=n(tb,"original Github repository"),tb.forEach(t),mc=n(ht,"."),ht.forEach(t),fc=p(Qs),Ct=r(Qs,"LI",{});var fo=i(Ct);gc=n(fo,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),Io=r(fo,"CODE",{});var sb=i(Io);_c=n(sb,"prev_labels"),sb.forEach(t),Tc=n(fo," token type ids can be overwritten by the predicted "),Wo=r(fo,"CODE",{});var ab=i(Wo);vc=n(ab,"labels"),ab.forEach(t),bc=n(fo," of the model to the previous question. See \u201CUsage\u201D section for more info."),fo.forEach(t),wc=p(Qs),Uo=r(Qs,"LI",{});var nb=i(Uo);kc=n(nb,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),nb.forEach(t),Qs.forEach(t),Wl=p(s),St=r(s,"H2",{class:!0});var Rp=i(St);os=r(Rp,"A",{id:!0,class:!0,href:!0});var ob=i(os);Ho=r(ob,"SPAN",{});var rb=i(Ho);y(Gs.$$.fragment,rb),rb.forEach(t),ob.forEach(t),yc=p(Rp),Ro=r(Rp,"SPAN",{});var ib=i(Ro);jc=n(ib,"Usage: fine-tuning"),ib.forEach(t),Rp.forEach(t),Ul=p(s),rs=r(s,"P",{});var Bp=i(rs);xc=n(Bp,"Here we explain how you can fine-tune "),kn=r(Bp,"A",{href:!0});var lb=i(kn);qc=n(lb,"TapasForQuestionAnswering"),lb.forEach(t),Ec=n(Bp," on your own dataset."),Bp.forEach(t),Hl=p(s),yn=r(s,"P",{});var pb=i(yn);Bo=r(pb,"STRONG",{});var db=i(Bo);Ac=n(db,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),db.forEach(t),pb.forEach(t),Rl=p(s),is=r(s,"P",{});var Gp=i(is);Fc=n(Gp,"Basically, there are 3 different ways in which one can fine-tune "),jn=r(Gp,"A",{href:!0});var cb=i(jn);zc=n(cb,"TapasForQuestionAnswering"),cb.forEach(t),$c=n(Gp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Gp.forEach(t),Bl=p(s),bt=r(s,"OL",{});var go=i(bt);Go=r(go,"LI",{});var hb=i(Go);Cc=n(hb,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),hb.forEach(t),Sc=p(go),Vs=r(go,"LI",{});var Vp=i(Vs);Dc=n(Vp,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),Vo=r(Vp,"STRONG",{});var ub=i(Vo);Pc=n(ub,"weak supervision"),ub.forEach(t),Mc=n(Vp,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Vp.forEach(t),Qc=p(go),Ks=r(go,"LI",{});var Kp=i(Ks);Nc=n(Kp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),Ko=r(Kp,"STRONG",{});var mb=i(Ko);Oc=n(mb,"strong supervision"),mb.forEach(t),Lc=n(Kp,". Here, learning the appropriate aggregation operator is much easier."),Kp.forEach(t),go.forEach(t),Gl=p(s),xn=r(s,"P",{});var fb=i(xn);Ic=n(fb,"To summarize:"),fb.forEach(t),Vl=p(s),ls=r(s,"TABLE",{});var Yp=i(ls);Yo=r(Yp,"THEAD",{});var gb=i(Yo);Dt=r(gb,"TR",{});var _o=i(Dt);Jo=r(_o,"TH",{});var _b=i(Jo);Xo=r(_b,"STRONG",{});var Tb=i(Xo);Wc=n(Tb,"Task"),Tb.forEach(t),_b.forEach(t),Uc=p(_o),Zo=r(_o,"TH",{});var vb=i(Zo);er=r(vb,"STRONG",{});var bb=i(er);Hc=n(bb,"Example dataset"),bb.forEach(t),vb.forEach(t),Rc=p(_o),tr=r(_o,"TH",{});var wb=i(tr);sr=r(wb,"STRONG",{});var kb=i(sr);Bc=n(kb,"Description"),kb.forEach(t),wb.forEach(t),_o.forEach(t),gb.forEach(t),Gc=p(Yp),Pt=r(Yp,"TBODY",{});var To=i(Pt);Mt=r(To,"TR",{});var vo=i(Mt);ar=r(vo,"TD",{});var yb=i(ar);Vc=n(yb,"Conversational"),yb.forEach(t),Kc=p(vo),nr=r(vo,"TD",{});var jb=i(nr);Yc=n(jb,"SQA"),jb.forEach(t),Jc=p(vo),or=r(vo,"TD",{});var xb=i(or);Xc=n(xb,"Conversational, only cell selection questions"),xb.forEach(t),vo.forEach(t),Zc=p(To),Qt=r(To,"TR",{});var bo=i(Qt);rr=r(bo,"TD",{});var qb=i(rr);eh=n(qb,"Weak supervision for aggregation"),qb.forEach(t),th=p(bo),ir=r(bo,"TD",{});var Eb=i(ir);sh=n(Eb,"WTQ"),Eb.forEach(t),ah=p(bo),lr=r(bo,"TD",{});var Ab=i(lr);nh=n(Ab,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Ab.forEach(t),bo.forEach(t),oh=p(To),Nt=r(To,"TR",{});var wo=i(Nt);pr=r(wo,"TD",{});var Fb=i(pr);rh=n(Fb,"Strong supervision for aggregation"),Fb.forEach(t),ih=p(wo),dr=r(wo,"TD",{});var zb=i(dr);lh=n(zb,"WikiSQL-supervised"),zb.forEach(t),ph=p(wo),cr=r(wo,"TD",{});var $b=i(cr);dh=n($b,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),$b.forEach(t),wo.forEach(t),To.forEach(t),Yp.forEach(t),Kl=p(s),wt=r(s,"P",{});var ko=i(wt);ch=n(ko,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),Ys=r(ko,"A",{href:!0,rel:!0});var Cb=i(Ys);hh=n(Cb,"torch-scatter"),Cb.forEach(t),uh=n(ko," dependency for your environment in case you\u2019re using PyTorch, or the "),Js=r(ko,"A",{href:!0,rel:!0});var Sb=i(Js);mh=n(Sb,"tensorflow_probability"),Sb.forEach(t),fh=n(ko,`
dependency in case you\u2019re using Tensorflow:`),ko.forEach(t),Yl=p(s),y(Xs.$$.fragment,s),Jl=p(s),kt=r(s,"P",{});var yo=i(kt);gh=n(yo,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),qn=r(yo,"A",{href:!0});var Db=i(qn);_h=n(Db,"TapasConfig"),Db.forEach(t),Th=n(yo,", and then create a "),En=r(yo,"A",{href:!0});var Pb=i(En);vh=n(Pb,"TapasForQuestionAnswering"),Pb.forEach(t),bh=n(yo," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),yo.forEach(t),Xl=p(s),y(Zs.$$.fragment,s),Zl=p(s),ps=r(s,"P",{});var Jp=i(ps);wh=n(Jp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),ea=r(Jp,"A",{href:!0,rel:!0});var Mb=i(ea);kh=n(Mb,"here"),Mb.forEach(t),yh=n(Jp," for more info."),Jp.forEach(t),ep=p(s),ds=r(s,"P",{});var Xp=i(ds);jh=n(Xp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),ta=r(Xp,"A",{href:!0,rel:!0});var Qb=i(ta);xh=n(Qb,"here"),Qb.forEach(t),qh=n(Xp,"."),Xp.forEach(t),tp=p(s),An=r(s,"P",{});var Nb=i(An);hr=r(Nb,"STRONG",{});var Ob=i(hr);Eh=n(Ob,"STEP 2: Prepare your data in the SQA format"),Ob.forEach(t),Nb.forEach(t),sp=p(s),cs=r(s,"P",{});var Zp=i(cs);Ah=n(Zp,"Second, no matter what you picked above, you should prepare your dataset in the "),sa=r(Zp,"A",{href:!0,rel:!0});var Lb=i(sa);Fh=n(Lb,"SQA"),Lb.forEach(t),zh=n(Zp," format. This format is a TSV/CSV file with the following columns:"),Zp.forEach(t),ap=p(s),re=r(s,"UL",{});var Fe=i(re);Fn=r(Fe,"LI",{});var _v=i(Fn);ur=r(_v,"CODE",{});var Ib=i(ur);$h=n(Ib,"id"),Ib.forEach(t),Ch=n(_v,": optional, id of the table-question pair, for bookkeeping purposes."),_v.forEach(t),Sh=p(Fe),zn=r(Fe,"LI",{});var Tv=i(zn);mr=r(Tv,"CODE",{});var Wb=i(mr);Dh=n(Wb,"annotator"),Wb.forEach(t),Ph=n(Tv,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),Tv.forEach(t),Mh=p(Fe),$n=r(Fe,"LI",{});var vv=i($n);fr=r(vv,"CODE",{});var Ub=i(fr);Qh=n(Ub,"position"),Ub.forEach(t),Nh=n(vv,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),vv.forEach(t),Oh=p(Fe),Cn=r(Fe,"LI",{});var bv=i(Cn);gr=r(bv,"CODE",{});var Hb=i(gr);Lh=n(Hb,"question"),Hb.forEach(t),Ih=n(bv,": string"),bv.forEach(t),Wh=p(Fe),Sn=r(Fe,"LI",{});var wv=i(Sn);_r=r(wv,"CODE",{});var Rb=i(_r);Uh=n(Rb,"table_file"),Rb.forEach(t),Hh=n(wv,": string, name of a csv file containing the tabular data"),wv.forEach(t),Rh=p(Fe),Dn=r(Fe,"LI",{});var kv=i(Dn);Tr=r(kv,"CODE",{});var Bb=i(Tr);Bh=n(Bb,"answer_coordinates"),Bb.forEach(t),Gh=n(kv,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),kv.forEach(t),Vh=p(Fe),Pn=r(Fe,"LI",{});var yv=i(Pn);vr=r(yv,"CODE",{});var Gb=i(vr);Kh=n(Gb,"answer_text"),Gb.forEach(t),Yh=n(yv,": list of one or more strings (each string being a cell value that is part of the answer)"),yv.forEach(t),Jh=p(Fe),Mn=r(Fe,"LI",{});var jv=i(Mn);br=r(jv,"CODE",{});var Vb=i(br);Xh=n(Vb,"aggregation_label"),Vb.forEach(t),Zh=n(jv,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),jv.forEach(t),eu=p(Fe),Qn=r(Fe,"LI",{});var xv=i(Qn);wr=r(xv,"CODE",{});var Kb=i(wr);tu=n(Kb,"float_answer"),Kb.forEach(t),su=n(xv,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),xv.forEach(t),Fe.forEach(t),np=p(s),Le=r(s,"P",{});var ut=i(Le);au=n(ut,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),aa=r(ut,"A",{href:!0,rel:!0});var Yb=i(aa);nu=n(Yb,"here"),Yb.forEach(t),ou=n(ut,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),na=r(ut,"A",{href:!0,rel:!0});var Jb=i(na);ru=n(Jb,"here"),Jb.forEach(t),iu=n(ut,". Interestingly, these conversion scripts are not perfect (the "),kr=r(ut,"CODE",{});var Xb=i(kr);lu=n(Xb,"answer_coordinates"),Xb.forEach(t),pu=n(ut," and "),yr=r(ut,"CODE",{});var Zb=i(yr);du=n(Zb,"float_answer"),Zb.forEach(t),cu=n(ut," fields are populated based on the "),jr=r(ut,"CODE",{});var ew=i(jr);hu=n(ew,"answer_text"),ew.forEach(t),uu=n(ut,"), meaning that WTQ and WikiSQL results could actually be improved."),ut.forEach(t),op=p(s),Nn=r(s,"P",{});var tw=i(Nn);xr=r(tw,"STRONG",{});var sw=i(xr);mu=n(sw,"STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),sw.forEach(t),tw.forEach(t),rp=p(s),Ae=r(s,"P",{});var at=i(Ae);fu=n(at,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),On=r(at,"A",{href:!0});var aw=i(On);gu=n(aw,"TapasTokenizer"),aw.forEach(t),_u=n(at," to convert table-question pairs into "),qr=r(at,"CODE",{});var nw=i(qr);Tu=n(nw,"input_ids"),nw.forEach(t),vu=n(at,", "),Er=r(at,"CODE",{});var ow=i(Er);bu=n(ow,"attention_mask"),ow.forEach(t),wu=n(at,", "),Ar=r(at,"CODE",{});var rw=i(Ar);ku=n(rw,"token_type_ids"),rw.forEach(t),yu=n(at," and so on. Again, based on which of the three cases you picked above, "),Ln=r(at,"A",{href:!0});var iw=i(Ln);ju=n(iw,"TapasForQuestionAnswering"),iw.forEach(t),xu=n(at,"/"),In=r(at,"A",{href:!0});var lw=i(In);qu=n(lw,"TFTapasForQuestionAnswering"),lw.forEach(t),Eu=n(at,` requires different
inputs to be fine-tuned:`),at.forEach(t),ip=p(s),hs=r(s,"TABLE",{});var ed=i(hs);Fr=r(ed,"THEAD",{});var pw=i(Fr);oa=r(pw,"TR",{});var td=i(oa);zr=r(td,"TH",{});var dw=i(zr);$r=r(dw,"STRONG",{});var cw=i($r);Au=n(cw,"Task"),cw.forEach(t),dw.forEach(t),Fu=p(td),Cr=r(td,"TH",{});var hw=i(Cr);Sr=r(hw,"STRONG",{});var uw=i(Sr);zu=n(uw,"Required inputs"),uw.forEach(t),hw.forEach(t),td.forEach(t),pw.forEach(t),$u=p(ed),Ot=r(ed,"TBODY",{});var jo=i(Ot);ra=r(jo,"TR",{});var sd=i(ra);Dr=r(sd,"TD",{});var mw=i(Dr);Cu=n(mw,"Conversational"),mw.forEach(t),Su=p(sd),vt=r(sd,"TD",{});var Ns=i(vt);Pr=r(Ns,"CODE",{});var fw=i(Pr);Du=n(fw,"input_ids"),fw.forEach(t),Pu=n(Ns,", "),Mr=r(Ns,"CODE",{});var gw=i(Mr);Mu=n(gw,"attention_mask"),gw.forEach(t),Qu=n(Ns,", "),Qr=r(Ns,"CODE",{});var _w=i(Qr);Nu=n(_w,"token_type_ids"),_w.forEach(t),Ou=n(Ns,", "),Nr=r(Ns,"CODE",{});var Tw=i(Nr);Lu=n(Tw,"labels"),Tw.forEach(t),Ns.forEach(t),sd.forEach(t),Iu=p(jo),ia=r(jo,"TR",{});var ad=i(ia);Or=r(ad,"TD",{});var vw=i(Or);Wu=n(vw,"Weak supervision for aggregation"),vw.forEach(t),Uu=p(ad),Se=r(ad,"TD",{});var nt=i(Se);Lr=r(nt,"CODE",{});var bw=i(Lr);Hu=n(bw,"input_ids"),bw.forEach(t),Ru=n(nt,", "),Ir=r(nt,"CODE",{});var ww=i(Ir);Bu=n(ww,"attention_mask"),ww.forEach(t),Gu=n(nt,", "),Wr=r(nt,"CODE",{});var kw=i(Wr);Vu=n(kw,"token_type_ids"),kw.forEach(t),Ku=n(nt,", "),Ur=r(nt,"CODE",{});var yw=i(Ur);Yu=n(yw,"labels"),yw.forEach(t),Ju=n(nt,", "),Hr=r(nt,"CODE",{});var jw=i(Hr);Xu=n(jw,"numeric_values"),jw.forEach(t),Zu=n(nt,", "),Rr=r(nt,"CODE",{});var xw=i(Rr);em=n(xw,"numeric_values_scale"),xw.forEach(t),tm=n(nt,", "),Br=r(nt,"CODE",{});var qw=i(Br);sm=n(qw,"float_answer"),qw.forEach(t),nt.forEach(t),ad.forEach(t),am=p(jo),la=r(jo,"TR",{});var nd=i(la);Gr=r(nd,"TD",{});var Ew=i(Gr);nm=n(Ew,"Strong supervision for aggregation"),Ew.forEach(t),om=p(nd),rt=r(nd,"TD",{});var xt=i(rt);Vr=r(xt,"CODE",{});var Aw=i(Vr);rm=n(Aw,"input ids"),Aw.forEach(t),im=n(xt,", "),Kr=r(xt,"CODE",{});var Fw=i(Kr);lm=n(Fw,"attention mask"),Fw.forEach(t),pm=n(xt,", "),Yr=r(xt,"CODE",{});var zw=i(Yr);dm=n(zw,"token type ids"),zw.forEach(t),cm=n(xt,", "),Jr=r(xt,"CODE",{});var $w=i(Jr);hm=n($w,"labels"),$w.forEach(t),um=n(xt,", "),Xr=r(xt,"CODE",{});var Cw=i(Xr);mm=n(Cw,"aggregation_labels"),Cw.forEach(t),xt.forEach(t),nd.forEach(t),jo.forEach(t),ed.forEach(t),lp=p(s),ie=r(s,"P",{});var Oe=i(ie);Wn=r(Oe,"A",{href:!0});var Sw=i(Wn);fm=n(Sw,"TapasTokenizer"),Sw.forEach(t),gm=n(Oe," creates the "),Zr=r(Oe,"CODE",{});var Dw=i(Zr);_m=n(Dw,"labels"),Dw.forEach(t),Tm=n(Oe,", "),ei=r(Oe,"CODE",{});var Pw=i(ei);vm=n(Pw,"numeric_values"),Pw.forEach(t),bm=n(Oe," and "),ti=r(Oe,"CODE",{});var Mw=i(ti);wm=n(Mw,"numeric_values_scale"),Mw.forEach(t),km=n(Oe," based on the "),si=r(Oe,"CODE",{});var Qw=i(si);ym=n(Qw,"answer_coordinates"),Qw.forEach(t),jm=n(Oe," and "),ai=r(Oe,"CODE",{});var Nw=i(ai);xm=n(Nw,"answer_text"),Nw.forEach(t),qm=n(Oe," columns of the TSV file. The "),ni=r(Oe,"CODE",{});var Ow=i(ni);Em=n(Ow,"float_answer"),Ow.forEach(t),Am=n(Oe," and "),oi=r(Oe,"CODE",{});var Lw=i(oi);Fm=n(Lw,"aggregation_labels"),Lw.forEach(t),zm=n(Oe," are already in the TSV file of step 2. Here\u2019s an example:"),Oe.forEach(t),pp=p(s),y(pa.$$.fragment,s),dp=p(s),ct=r(s,"P",{});var Os=i(ct);$m=n(Os,"Note that "),Un=r(Os,"A",{href:!0});var Iw=i(Un);Cm=n(Iw,"TapasTokenizer"),Iw.forEach(t),Sm=n(Os," expects the data of the table to be "),ri=r(Os,"STRONG",{});var Ww=i(ri);Dm=n(Ww,"text-only"),Ww.forEach(t),Pm=n(Os,". You can use "),ii=r(Os,"CODE",{});var Uw=i(ii);Mm=n(Uw,".astype(str)"),Uw.forEach(t),Qm=n(Os,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Os.forEach(t),cp=p(s),y(da.$$.fragment,s),hp=p(s),J=r(s,"P",{});var ue=i(J);Nm=n(ue,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),li=r(ue,"STRONG",{});var Hw=i(li);Om=n(Hw,"not conversational"),Hw.forEach(t),Lm=n(ue,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),pi=r(ue,"CODE",{});var Rw=i(pi);Im=n(Rw,"queries"),Rw.forEach(t),Wm=n(ue,", "),di=r(ue,"CODE",{});var Bw=i(di);Um=n(Bw,"answer_coordinates"),Bw.forEach(t),Hm=n(ue," and "),ci=r(ue,"CODE",{});var Gw=i(ci);Rm=n(Gw,"answer_text"),Gw.forEach(t),Bm=n(ue," per table (in the order of their "),hi=r(ue,"CODE",{});var Vw=i(hi);Gm=n(Vw,"position"),Vw.forEach(t),Vm=n(ue,`
index) and batch encode each table with its questions. This will make sure that the `),ui=r(ue,"CODE",{});var Kw=i(ui);Km=n(Kw,"prev_labels"),Kw.forEach(t),Ym=n(ue," token types (see docs of "),Hn=r(ue,"A",{href:!0});var Yw=i(Hn);Jm=n(Yw,"TapasTokenizer"),Yw.forEach(t),Xm=n(ue,") are set correctly. See "),ca=r(ue,"A",{href:!0,rel:!0});var Jw=i(ca);Zm=n(Jw,"this notebook"),Jw.forEach(t),ef=n(ue," for more info. See "),ha=r(ue,"A",{href:!0,rel:!0});var Xw=i(ha);tf=n(Xw,"this notebook"),Xw.forEach(t),sf=n(ue," for more info regarding using the TensorFlow model."),ue.forEach(t),up=p(s),Rn=r(s,"P",{});var Zw=i(Rn);mi=r(Zw,"STRONG",{});var ek=i(mi);af=n(ek,"STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),ek.forEach(t),Zw.forEach(t),mp=p(s),yt=r(s,"P",{});var xo=i(yt);nf=n(xo,"You can then fine-tune "),Bn=r(xo,"A",{href:!0});var tk=i(Bn);of=n(tk,"TapasForQuestionAnswering"),tk.forEach(t),rf=n(xo," or "),Gn=r(xo,"A",{href:!0});var sk=i(Gn);lf=n(sk,"TFTapasForQuestionAnswering"),sk.forEach(t),pf=n(xo," as follows (shown here for the weak supervision for aggregation case):"),xo.forEach(t),fp=p(s),y(ua.$$.fragment,s),gp=p(s),Lt=r(s,"H2",{class:!0});var od=i(Lt);us=r(od,"A",{id:!0,class:!0,href:!0});var ak=i(us);fi=r(ak,"SPAN",{});var nk=i(fi);y(ma.$$.fragment,nk),nk.forEach(t),ak.forEach(t),df=p(od),gi=r(od,"SPAN",{});var ok=i(gi);cf=n(ok,"Usage: inference"),ok.forEach(t),od.forEach(t),_p=p(s),he=r(s,"P",{});var We=i(he);hf=n(We,"Here we explain how you can use "),Vn=r(We,"A",{href:!0});var rk=i(Vn);uf=n(rk,"TapasForQuestionAnswering"),rk.forEach(t),mf=n(We," or "),Kn=r(We,"A",{href:!0});var ik=i(Kn);ff=n(ik,"TFTapasForQuestionAnswering"),ik.forEach(t),gf=n(We," for inference (i.e. making predictions on new data). For inference, only "),_i=r(We,"CODE",{});var lk=i(_i);_f=n(lk,"input_ids"),lk.forEach(t),Tf=n(We,", "),Ti=r(We,"CODE",{});var pk=i(Ti);vf=n(pk,"attention_mask"),pk.forEach(t),bf=n(We," and "),vi=r(We,"CODE",{});var dk=i(vi);wf=n(dk,"token_type_ids"),dk.forEach(t),kf=n(We," (which you can obtain using "),Yn=r(We,"A",{href:!0});var ck=i(Yn);yf=n(ck,"TapasTokenizer"),ck.forEach(t),jf=n(We,") have to be provided to the model to obtain the logits. Next, you can use the handy "),bi=r(We,"CODE",{});var hk=i(bi);xf=n(hk,"convert_logits_to_predictions"),hk.forEach(t),qf=n(We," method to convert these into predicted coordinates and optional aggregation indices."),We.forEach(t),Tp=p(s),ms=r(s,"P",{});var rd=i(ms);Ef=n(rd,"However, note that inference is "),wi=r(rd,"STRONG",{});var uk=i(wi);Af=n(uk,"different"),uk.forEach(t),Ff=n(rd," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),rd.forEach(t),vp=p(s),y(fa.$$.fragment,s),bp=p(s),Ie=r(s,"P",{});var mt=i(Ie);zf=n(mt,"In case of a conversational set-up, then each table-question pair must be provided "),ki=r(mt,"STRONG",{});var mk=i(ki);$f=n(mk,"sequentially"),mk.forEach(t),Cf=n(mt," to the model, such that the "),yi=r(mt,"CODE",{});var fk=i(yi);Sf=n(fk,"prev_labels"),fk.forEach(t),Df=n(mt," token types can be overwritten by the predicted "),ji=r(mt,"CODE",{});var gk=i(ji);Pf=n(gk,"labels"),gk.forEach(t),Mf=n(mt," of the previous table-question pair. Again, more info can be found in "),ga=r(mt,"A",{href:!0,rel:!0});var _k=i(ga);Qf=n(_k,"this notebook"),_k.forEach(t),Nf=n(mt," (for PyTorch) and "),_a=r(mt,"A",{href:!0,rel:!0});var Tk=i(_a);Of=n(Tk,"this notebook"),Tk.forEach(t),Lf=n(mt," (for TensorFlow)."),mt.forEach(t),wp=p(s),It=r(s,"H2",{class:!0});var id=i(It);fs=r(id,"A",{id:!0,class:!0,href:!0});var vk=i(fs);xi=r(vk,"SPAN",{});var bk=i(xi);y(Ta.$$.fragment,bk),bk.forEach(t),vk.forEach(t),If=p(id),qi=r(id,"SPAN",{});var wk=i(qi);Wf=n(wk,"TAPAS specific outputs"),wk.forEach(t),id.forEach(t),kp=p(s),Wt=r(s,"DIV",{class:!0});var ld=i(Wt);y(va.$$.fragment,ld),Uf=p(ld),ba=r(ld,"P",{});var pd=i(ba);Hf=n(pd,"Output type of "),Jn=r(pd,"A",{href:!0});var kk=i(Jn);Rf=n(kk,"TapasForQuestionAnswering"),kk.forEach(t),Bf=n(pd,"."),pd.forEach(t),ld.forEach(t),yp=p(s),Ut=r(s,"H2",{class:!0});var dd=i(Ut);gs=r(dd,"A",{id:!0,class:!0,href:!0});var yk=i(gs);Ei=r(yk,"SPAN",{});var jk=i(Ei);y(wa.$$.fragment,jk),jk.forEach(t),yk.forEach(t),Gf=p(dd),Ai=r(dd,"SPAN",{});var xk=i(Ai);Vf=n(xk,"TapasConfig"),xk.forEach(t),dd.forEach(t),jp=p(s),Ye=r(s,"DIV",{class:!0});var qt=i(Ye);y(ka.$$.fragment,qt),Kf=p(qt),it=r(qt,"P",{});var Et=i(it);Yf=n(Et,"This is the configuration class to store the configuration of a "),Xn=r(Et,"A",{href:!0});var qk=i(Xn);Jf=n(qk,"TapasModel"),qk.forEach(t),Xf=n(Et,`. It is used to
instantiate a TAPAS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the TAPAS `),Fi=r(Et,"EM",{});var Ek=i(Fi);Zf=n(Ek,"tapas-base-finetuned-sqa"),Ek.forEach(t),eg=n(Et,`
architecture. Configuration objects inherit from `),zi=r(Et,"CODE",{});var Ak=i(zi);tg=n(Ak,"PreTrainedConfig"),Ak.forEach(t),sg=n(Et,` and can be used to control
the model outputs. Read the documentation from `),Zn=r(Et,"A",{href:!0});var Fk=i(Zn);ag=n(Fk,"PretrainedConfig"),Fk.forEach(t),ng=n(Et," for more information."),Et.forEach(t),og=p(qt),ya=r(qt,"P",{});var cd=i(ya);rg=n(cd,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),ja=r(cd,"A",{href:!0,rel:!0});var zk=i(ja);ig=n(zk,"https://github.com/google-research/tapas/tree/master"),zk.forEach(t),lg=n(cd,"."),cd.forEach(t),pg=p(qt),$i=r(qt,"P",{});var $k=i($i);dg=n($k,"Example:"),$k.forEach(t),cg=p(qt),y(xa.$$.fragment,qt),qt.forEach(t),xp=p(s),Ht=r(s,"H2",{class:!0});var hd=i(Ht);_s=r(hd,"A",{id:!0,class:!0,href:!0});var Ck=i(_s);Ci=r(Ck,"SPAN",{});var Sk=i(Ci);y(qa.$$.fragment,Sk),Sk.forEach(t),Ck.forEach(t),hg=p(hd),Si=r(hd,"SPAN",{});var Dk=i(Si);ug=n(Dk,"TapasTokenizer"),Dk.forEach(t),hd.forEach(t),qp=p(s),le=r(s,"DIV",{class:!0});var Ue=i(le);y(Ea.$$.fragment,Ue),mg=p(Ue),Di=r(Ue,"P",{});var Pk=i(Di);fg=n(Pk,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),Pk.forEach(t),gg=p(Ue),ae=r(Ue,"P",{});var me=i(ae);_g=n(me,"This tokenizer inherits from "),eo=r(me,"A",{href:!0});var Mk=i(eo);Tg=n(Mk,"PreTrainedTokenizer"),Mk.forEach(t),vg=n(me,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.
`),to=r(me,"A",{href:!0});var Qk=i(to);bg=n(Qk,"TapasTokenizer"),Qk.forEach(t),wg=n(me,` creates several token type ids to encode tabular structure. To be more
precise, it adds 7 token type ids, in the following order: `),Pi=r(me,"CODE",{});var Nk=i(Pi);kg=n(Nk,"segment_ids"),Nk.forEach(t),yg=n(me,", "),Mi=r(me,"CODE",{});var Ok=i(Mi);jg=n(Ok,"column_ids"),Ok.forEach(t),xg=n(me,", "),Qi=r(me,"CODE",{});var Lk=i(Qi);qg=n(Lk,"row_ids"),Lk.forEach(t),Eg=n(me,`,
`),Ni=r(me,"CODE",{});var Ik=i(Ni);Ag=n(Ik,"prev_labels"),Ik.forEach(t),Fg=n(me,", "),Oi=r(me,"CODE",{});var Wk=i(Oi);zg=n(Wk,"column_ranks"),Wk.forEach(t),$g=n(me,", "),Li=r(me,"CODE",{});var Uk=i(Li);Cg=n(Uk,"inv_column_ranks"),Uk.forEach(t),Sg=n(me," and "),Ii=r(me,"CODE",{});var Hk=i(Ii);Dg=n(Hk,"numeric_relations"),Hk.forEach(t),Pg=n(me,":"),me.forEach(t),Mg=p(Ue),De=r(Ue,"UL",{});var ot=i(De);Wi=r(ot,"LI",{});var Rk=i(Wi);Qg=n(Rk,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Rk.forEach(t),Ng=p(ot),Ui=r(ot,"LI",{});var Bk=i(Ui);Og=n(Bk,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Bk.forEach(t),Lg=p(ot),Hi=r(ot,"LI",{});var Gk=i(Hi);Ig=n(Gk,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Gk.forEach(t),Wg=p(ot),Ri=r(ot,"LI",{});var Vk=i(Ri);Ug=n(Vk,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Vk.forEach(t),Hg=p(ot),Bi=r(ot,"LI",{});var Kk=i(Bi);Rg=n(Kk,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Kk.forEach(t),Bg=p(ot),Gi=r(ot,"LI",{});var Yk=i(Gi);Gg=n(Yk,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Yk.forEach(t),Vg=p(ot),Vi=r(ot,"LI",{});var Jk=i(Vi);Kg=n(Jk,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Jk.forEach(t),ot.forEach(t),Yg=p(Ue),so=r(Ue,"P",{});var qv=i(so);ao=r(qv,"A",{href:!0});var Xk=i(ao);Jg=n(Xk,"TapasTokenizer"),Xk.forEach(t),Xg=n(qv,` runs end-to-end tokenization on a table and associated sentences: punctuation
splitting and wordpiece.`),qv.forEach(t),Zg=p(Ue),Ts=r(Ue,"DIV",{class:!0});var ud=i(Ts);y(Aa.$$.fragment,ud),e_=p(ud),Ki=r(ud,"P",{});var Zk=i(Ki);t_=n(Zk,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Zk.forEach(t),ud.forEach(t),s_=p(Ue),jt=r(Ue,"DIV",{class:!0});var qo=i(jt);y(Fa.$$.fragment,qo),a_=p(qo),za=r(qo,"P",{});var md=i(za);n_=n(md,"Converts logits of "),no=r(md,"A",{href:!0});var e1=i(no);o_=n(e1,"TapasForQuestionAnswering"),e1.forEach(t),r_=n(md,` to actual predicted answer coordinates and
optional aggregation indices.`),md.forEach(t),i_=p(qo),$a=r(qo,"P",{});var fd=i($a);l_=n(fd,"The original implementation, on which this function is based, can be found "),Ca=r(fd,"A",{href:!0,rel:!0});var t1=i(Ca);p_=n(t1,"here"),t1.forEach(t),d_=n(fd,"."),fd.forEach(t),qo.forEach(t),c_=p(Ue),Yi=r(Ue,"DIV",{class:!0}),i(Yi).forEach(t),Ue.forEach(t),Ep=p(s),Rt=r(s,"H2",{class:!0});var gd=i(Rt);vs=r(gd,"A",{id:!0,class:!0,href:!0});var s1=i(vs);Ji=r(s1,"SPAN",{});var a1=i(Ji);y(Sa.$$.fragment,a1),a1.forEach(t),s1.forEach(t),h_=p(gd),Xi=r(gd,"SPAN",{});var n1=i(Xi);u_=n(n1,"TapasModel"),n1.forEach(t),gd.forEach(t),Ap=p(s),Da=r(s,"DIV",{class:!0});var o1=i(Da);Zi=r(o1,"DIV",{class:!0}),i(Zi).forEach(t),o1.forEach(t),Fp=p(s),Bt=r(s,"H2",{class:!0});var _d=i(Bt);bs=r(_d,"A",{id:!0,class:!0,href:!0});var r1=i(bs);el=r(r1,"SPAN",{});var i1=i(el);y(Pa.$$.fragment,i1),i1.forEach(t),r1.forEach(t),m_=p(_d),tl=r(_d,"SPAN",{});var l1=i(tl);f_=n(l1,"TapasForMaskedLM"),l1.forEach(t),_d.forEach(t),zp=p(s),Ma=r(s,"DIV",{class:!0});var p1=i(Ma);sl=r(p1,"DIV",{class:!0}),i(sl).forEach(t),p1.forEach(t),$p=p(s),Gt=r(s,"H2",{class:!0});var Td=i(Gt);ws=r(Td,"A",{id:!0,class:!0,href:!0});var d1=i(ws);al=r(d1,"SPAN",{});var c1=i(al);y(Qa.$$.fragment,c1),c1.forEach(t),d1.forEach(t),g_=p(Td),nl=r(Td,"SPAN",{});var h1=i(nl);__=n(h1,"TapasForSequenceClassification"),h1.forEach(t),Td.forEach(t),Cp=p(s),Na=r(s,"DIV",{class:!0});var u1=i(Na);ol=r(u1,"DIV",{class:!0}),i(ol).forEach(t),u1.forEach(t),Sp=p(s),Vt=r(s,"H2",{class:!0});var vd=i(Vt);ks=r(vd,"A",{id:!0,class:!0,href:!0});var m1=i(ks);rl=r(m1,"SPAN",{});var f1=i(rl);y(Oa.$$.fragment,f1),f1.forEach(t),m1.forEach(t),T_=p(vd),il=r(vd,"SPAN",{});var g1=i(il);v_=n(g1,"TapasForQuestionAnswering"),g1.forEach(t),vd.forEach(t),Dp=p(s),La=r(s,"DIV",{class:!0});var _1=i(La);ll=r(_1,"DIV",{class:!0}),i(ll).forEach(t),_1.forEach(t),Pp=p(s),Kt=r(s,"H2",{class:!0});var bd=i(Kt);ys=r(bd,"A",{id:!0,class:!0,href:!0});var T1=i(ys);pl=r(T1,"SPAN",{});var v1=i(pl);y(Ia.$$.fragment,v1),v1.forEach(t),T1.forEach(t),b_=p(bd),dl=r(bd,"SPAN",{});var b1=i(dl);w_=n(b1,"TFTapasModel"),b1.forEach(t),bd.forEach(t),Mp=p(s),Pe=r(s,"DIV",{class:!0});var ft=i(Pe);y(Wa.$$.fragment,ft),k_=p(ft),cl=r(ft,"P",{});var w1=i(cl);y_=n(w1,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),w1.forEach(t),j_=p(ft),Ua=r(ft,"P",{});var wd=i(Ua);x_=n(wd,"This model inherits from "),oo=r(wd,"A",{href:!0});var k1=i(oo);q_=n(k1,"TFPreTrainedModel"),k1.forEach(t),E_=n(wd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),wd.forEach(t),A_=p(ft),Ha=r(ft,"P",{});var kd=i(Ha);F_=n(kd,"This model is also a "),Ra=r(kd,"A",{href:!0,rel:!0});var y1=i(Ra);z_=n(y1,"tf.keras.Model"),y1.forEach(t),$_=n(kd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),kd.forEach(t),C_=p(ft),y(js.$$.fragment,ft),S_=p(ft),Xe=r(ft,"DIV",{class:!0});var At=i(Xe);y(Ba.$$.fragment,At),D_=p(At),Yt=r(At,"P",{});var Eo=i(Yt);P_=n(Eo,"The "),ro=r(Eo,"A",{href:!0});var j1=i(ro);M_=n(j1,"TFTapasModel"),j1.forEach(t),Q_=n(Eo," forward method, overrides the "),hl=r(Eo,"CODE",{});var x1=i(hl);N_=n(x1,"__call__"),x1.forEach(t),O_=n(Eo," special method."),Eo.forEach(t),L_=p(At),y(xs.$$.fragment,At),I_=p(At),ul=r(At,"P",{});var q1=i(ul);W_=n(q1,"Example:"),q1.forEach(t),U_=p(At),y(Ga.$$.fragment,At),At.forEach(t),ft.forEach(t),Qp=p(s),Jt=r(s,"H2",{class:!0});var yd=i(Jt);qs=r(yd,"A",{id:!0,class:!0,href:!0});var E1=i(qs);ml=r(E1,"SPAN",{});var A1=i(ml);y(Va.$$.fragment,A1),A1.forEach(t),E1.forEach(t),H_=p(yd),fl=r(yd,"SPAN",{});var F1=i(fl);R_=n(F1,"TFTapasForMaskedLM"),F1.forEach(t),yd.forEach(t),Np=p(s),Me=r(s,"DIV",{class:!0});var gt=i(Me);y(Ka.$$.fragment,gt),B_=p(gt),Ya=r(gt,"P",{});var jd=i(Ya);G_=n(jd,"Tapas Model with a "),gl=r(jd,"EM",{});var z1=i(gl);V_=n(z1,"language modeling"),z1.forEach(t),K_=n(jd," head on top."),jd.forEach(t),Y_=p(gt),Ja=r(gt,"P",{});var xd=i(Ja);J_=n(xd,"This model inherits from "),io=r(xd,"A",{href:!0});var $1=i(io);X_=n($1,"TFPreTrainedModel"),$1.forEach(t),Z_=n(xd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),xd.forEach(t),eT=p(gt),Xa=r(gt,"P",{});var qd=i(Xa);tT=n(qd,"This model is also a "),Za=r(qd,"A",{href:!0,rel:!0});var C1=i(Za);sT=n(C1,"tf.keras.Model"),C1.forEach(t),aT=n(qd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),qd.forEach(t),nT=p(gt),y(Es.$$.fragment,gt),oT=p(gt),Ze=r(gt,"DIV",{class:!0});var Ft=i(Ze);y(en.$$.fragment,Ft),rT=p(Ft),Xt=r(Ft,"P",{});var Ao=i(Xt);iT=n(Ao,"The "),lo=r(Ao,"A",{href:!0});var S1=i(lo);lT=n(S1,"TFTapasForMaskedLM"),S1.forEach(t),pT=n(Ao," forward method, overrides the "),_l=r(Ao,"CODE",{});var D1=i(_l);dT=n(D1,"__call__"),D1.forEach(t),cT=n(Ao," special method."),Ao.forEach(t),hT=p(Ft),y(As.$$.fragment,Ft),uT=p(Ft),Tl=r(Ft,"P",{});var P1=i(Tl);mT=n(P1,"Example:"),P1.forEach(t),fT=p(Ft),y(tn.$$.fragment,Ft),Ft.forEach(t),gt.forEach(t),Op=p(s),Zt=r(s,"H2",{class:!0});var Ed=i(Zt);Fs=r(Ed,"A",{id:!0,class:!0,href:!0});var M1=i(Fs);vl=r(M1,"SPAN",{});var Q1=i(vl);y(sn.$$.fragment,Q1),Q1.forEach(t),M1.forEach(t),gT=p(Ed),bl=r(Ed,"SPAN",{});var N1=i(bl);_T=n(N1,"TFTapasForSequenceClassification"),N1.forEach(t),Ed.forEach(t),Lp=p(s),Qe=r(s,"DIV",{class:!0});var _t=i(Qe);y(an.$$.fragment,_t),TT=p(_t),wl=r(_t,"P",{});var O1=i(wl);vT=n(O1,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),O1.forEach(t),bT=p(_t),nn=r(_t,"P",{});var Ad=i(nn);wT=n(Ad,"This model inherits from "),po=r(Ad,"A",{href:!0});var L1=i(po);kT=n(L1,"TFPreTrainedModel"),L1.forEach(t),yT=n(Ad,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ad.forEach(t),jT=p(_t),on=r(_t,"P",{});var Fd=i(on);xT=n(Fd,"This model is also a "),rn=r(Fd,"A",{href:!0,rel:!0});var I1=i(rn);qT=n(I1,"tf.keras.Model"),I1.forEach(t),ET=n(Fd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Fd.forEach(t),AT=p(_t),y(zs.$$.fragment,_t),FT=p(_t),et=r(_t,"DIV",{class:!0});var zt=i(et);y(ln.$$.fragment,zt),zT=p(zt),es=r(zt,"P",{});var Fo=i(es);$T=n(Fo,"The "),co=r(Fo,"A",{href:!0});var W1=i(co);CT=n(W1,"TFTapasForSequenceClassification"),W1.forEach(t),ST=n(Fo," forward method, overrides the "),kl=r(Fo,"CODE",{});var U1=i(kl);DT=n(U1,"__call__"),U1.forEach(t),PT=n(Fo," special method."),Fo.forEach(t),MT=p(zt),y($s.$$.fragment,zt),QT=p(zt),yl=r(zt,"P",{});var H1=i(yl);NT=n(H1,"Example:"),H1.forEach(t),OT=p(zt),y(pn.$$.fragment,zt),zt.forEach(t),_t.forEach(t),Ip=p(s),ts=r(s,"H2",{class:!0});var zd=i(ts);Cs=r(zd,"A",{id:!0,class:!0,href:!0});var R1=i(Cs);jl=r(R1,"SPAN",{});var B1=i(jl);y(dn.$$.fragment,B1),B1.forEach(t),R1.forEach(t),LT=p(zd),xl=r(zd,"SPAN",{});var G1=i(xl);IT=n(G1,"TFTapasForQuestionAnswering"),G1.forEach(t),zd.forEach(t),Wp=p(s),Ne=r(s,"DIV",{class:!0});var Tt=i(Ne);y(cn.$$.fragment,Tt),WT=p(Tt),ss=r(Tt,"P",{});var zo=i(ss);UT=n(zo,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),ql=r(zo,"EM",{});var V1=i(ql);HT=n(V1,"logits"),V1.forEach(t),RT=n(zo," and optional "),El=r(zo,"EM",{});var K1=i(El);BT=n(K1,"logits_aggregation"),K1.forEach(t),GT=n(zo,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),zo.forEach(t),VT=p(Tt),hn=r(Tt,"P",{});var $d=i(hn);KT=n($d,"This model inherits from "),ho=r($d,"A",{href:!0});var Y1=i(ho);YT=n(Y1,"TFPreTrainedModel"),Y1.forEach(t),JT=n($d,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),$d.forEach(t),XT=p(Tt),un=r(Tt,"P",{});var Cd=i(un);ZT=n(Cd,"This model is also a "),mn=r(Cd,"A",{href:!0,rel:!0});var J1=i(mn);ev=n(J1,"tf.keras.Model"),J1.forEach(t),tv=n(Cd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Cd.forEach(t),sv=p(Tt),y(Ss.$$.fragment,Tt),av=p(Tt),tt=r(Tt,"DIV",{class:!0});var $t=i(tt);y(fn.$$.fragment,$t),nv=p($t),as=r($t,"P",{});var $o=i(as);ov=n($o,"The "),uo=r($o,"A",{href:!0});var X1=i(uo);rv=n(X1,"TFTapasForQuestionAnswering"),X1.forEach(t),iv=n($o," forward method, overrides the "),Al=r($o,"CODE",{});var Z1=i(Al);lv=n(Z1,"__call__"),Z1.forEach(t),pv=n($o," special method."),$o.forEach(t),dv=p($t),y(Ds.$$.fragment,$t),cv=p($t),Fl=r($t,"P",{});var ey=i(Fl);hv=n(ey,"Example:"),ey.forEach(t),uv=p($t),y(gn.$$.fragment,$t),$t.forEach(t),Tt.forEach(t),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(fy)),d(f,"id","tapas"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#tapas"),d(g,"class","relative group"),d(K,"id","overview"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#overview"),d(T,"class","relative group"),d(Z,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),d(Z,"rel","nofollow"),d(te,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),d(te,"rel","nofollow"),d(se,"href","https://github.com/ppasupat/WikiTableQuestions"),d(se,"rel","nofollow"),d(D,"href","https://github.com/salesforce/WikiSQL"),d(D,"rel","nofollow"),d(je,"href","https://github.com/wenhuchen/Table-Fact-Checking"),d(je,"rel","nofollow"),d(Is,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),d(Is,"rel","nofollow"),oy(ns.src,Ev="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||d(ns,"src",Ev),d(ns,"alt","drawing"),d(ns,"width","600"),d(Ws,"href","https://huggingface.co/nielsr"),d(Ws,"rel","nofollow"),d(Us,"href","https://huggingface.co/kamalkraj"),d(Us,"rel","nofollow"),d(Hs,"href","https://github.com/google-research/tapas"),d(Hs,"rel","nofollow"),d(wn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig"),d(Rs,"href","https://huggingface.co/models?search=tapas"),d(Rs,"rel","nofollow"),d(Bs,"href","https://github.com/google-research/tapas%3E"),d(Bs,"rel","nofollow"),d(os,"id","usage-finetuning"),d(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(os,"href","#usage-finetuning"),d(St,"class","relative group"),d(kn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(jn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Ys,"href","https://github.com/rusty1s/pytorch_scatter"),d(Ys,"rel","nofollow"),d(Js,"href","https://github.com/tensorflow/probability"),d(Js,"rel","nofollow"),d(qn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasConfig"),d(En,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(ea,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),d(ea,"rel","nofollow"),d(ta,"href","https://huggingface.co/models?search=tapas"),d(ta,"rel","nofollow"),d(sa,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),d(sa,"rel","nofollow"),d(aa,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),d(aa,"rel","nofollow"),d(na,"href","https://github.com/NielsRogge/tapas_utils"),d(na,"rel","nofollow"),d(On,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ln,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(In,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Wn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(Un,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(Hn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(ca,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(ca,"rel","nofollow"),d(ha,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(ha,"rel","nofollow"),d(Bn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Gn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(us,"id","usage-inference"),d(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(us,"href","#usage-inference"),d(Lt,"class","relative group"),d(Vn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Kn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Yn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(ga,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(ga,"rel","nofollow"),d(_a,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(_a,"rel","nofollow"),d(fs,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),d(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fs,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),d(It,"class","relative group"),d(Jn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Wt,"class","docstring"),d(gs,"id","transformers.TapasConfig"),d(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(gs,"href","#transformers.TapasConfig"),d(Ut,"class","relative group"),d(Xn,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasModel"),d(Zn,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(ja,"href","https://github.com/google-research/tapas/tree/master"),d(ja,"rel","nofollow"),d(Ye,"class","docstring"),d(_s,"id","transformers.TapasTokenizer"),d(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_s,"href","#transformers.TapasTokenizer"),d(Ht,"class","relative group"),d(eo,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(to,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(ao,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ts,"class","docstring"),d(no,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Ca,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),d(Ca,"rel","nofollow"),d(jt,"class","docstring"),d(Yi,"class","docstring"),d(le,"class","docstring"),d(vs,"id","transformers.TapasModel"),d(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(vs,"href","#transformers.TapasModel"),d(Rt,"class","relative group"),d(Zi,"class","docstring"),d(Da,"class","docstring"),d(bs,"id","transformers.TapasForMaskedLM"),d(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(bs,"href","#transformers.TapasForMaskedLM"),d(Bt,"class","relative group"),d(sl,"class","docstring"),d(Ma,"class","docstring"),d(ws,"id","transformers.TapasForSequenceClassification"),d(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ws,"href","#transformers.TapasForSequenceClassification"),d(Gt,"class","relative group"),d(ol,"class","docstring"),d(Na,"class","docstring"),d(ks,"id","transformers.TapasForQuestionAnswering"),d(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ks,"href","#transformers.TapasForQuestionAnswering"),d(Vt,"class","relative group"),d(ll,"class","docstring"),d(La,"class","docstring"),d(ys,"id","transformers.TFTapasModel"),d(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ys,"href","#transformers.TFTapasModel"),d(Kt,"class","relative group"),d(oo,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Ra,"rel","nofollow"),d(ro,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasModel"),d(Xe,"class","docstring"),d(Pe,"class","docstring"),d(qs,"id","transformers.TFTapasForMaskedLM"),d(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qs,"href","#transformers.TFTapasForMaskedLM"),d(Jt,"class","relative group"),d(io,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Za,"rel","nofollow"),d(lo,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),d(Ze,"class","docstring"),d(Me,"class","docstring"),d(Fs,"id","transformers.TFTapasForSequenceClassification"),d(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fs,"href","#transformers.TFTapasForSequenceClassification"),d(Zt,"class","relative group"),d(po,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(rn,"rel","nofollow"),d(co,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),d(et,"class","docstring"),d(Qe,"class","docstring"),d(Cs,"id","transformers.TFTapasForQuestionAnswering"),d(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Cs,"href","#transformers.TFTapasForQuestionAnswering"),d(ts,"class","relative group"),d(ho,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(mn,"rel","nofollow"),d(uo,"href","/docs/transformers/v4.14.1/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(tt,"class","docstring"),d(Ne,"class","docstring")},m(s,h){e(document.head,m),c(s,C,h),c(s,g,h),e(g,f),e(f,A),j(v,A,null),e(g,b),e(g,F),e(F,ge),c(s,V,h),c(s,T,h),e(T,K),e(K,L),j(X,L,null),e(T,_e),e(T,I),e(I,Te),c(s,pe,h),c(s,W,h),e(W,Q),e(W,Z),e(Z,ee),e(W,w),c(s,z,h),c(s,ne,h),e(ne,U),c(s,de,h),c(s,G,h),e(G,N),e(N,te),e(te,ve),e(N,$),e(G,be),e(G,O),e(O,se),e(se,we),e(O,H),e(G,ke),e(G,oe),e(oe,D),e(D,ye),e(oe,R),c(s,ce,h),c(s,u,h),e(u,_),c(s,Y,h),c(s,qe,h),e(qe,He),c(s,P,h),c(s,Ee,h),e(Ee,ze),e(ze,Re),c(s,M,h),c(s,S,h),e(S,Be),e(S,$e),e($e,B),e(S,Ge),e(S,je),e(je,xe),e(S,Ve),e(S,Is),e(Is,Sd),e(S,Dd),c(s,Ql,h),c(s,ns,h),c(s,Nl,h),c(s,vn,h),e(vn,Pd),c(s,Ol,h),c(s,pt,h),e(pt,Md),e(pt,Ws),e(Ws,Qd),e(pt,Nd),e(pt,Us),e(Us,Od),e(pt,Ld),e(pt,Hs),e(Hs,Id),e(pt,Wd),c(s,Ll,h),c(s,bn,h),e(bn,Ud),c(s,Il,h),c(s,dt,h),e(dt,Ce),e(Ce,Hd),e(Ce,So),e(So,Rd),e(Ce,Bd),e(Ce,wn),e(wn,Gd),e(Ce,Vd),e(Ce,Do),e(Do,Kd),e(Ce,Yd),e(Ce,Rs),e(Rs,Jd),e(Ce,Xd),e(Ce,Po),e(Po,Zd),e(Ce,ec),e(Ce,Mo),e(Mo,tc),e(Ce,sc),e(dt,ac),e(dt,Ke),e(Ke,nc),e(Ke,Qo),e(Qo,oc),e(Ke,rc),e(Ke,No),e(No,ic),e(Ke,lc),e(Ke,Oo),e(Oo,pc),e(Ke,dc),e(Ke,Lo),e(Lo,cc),e(Ke,hc),e(Ke,Bs),e(Bs,uc),e(Ke,mc),e(dt,fc),e(dt,Ct),e(Ct,gc),e(Ct,Io),e(Io,_c),e(Ct,Tc),e(Ct,Wo),e(Wo,vc),e(Ct,bc),e(dt,wc),e(dt,Uo),e(Uo,kc),c(s,Wl,h),c(s,St,h),e(St,os),e(os,Ho),j(Gs,Ho,null),e(St,yc),e(St,Ro),e(Ro,jc),c(s,Ul,h),c(s,rs,h),e(rs,xc),e(rs,kn),e(kn,qc),e(rs,Ec),c(s,Hl,h),c(s,yn,h),e(yn,Bo),e(Bo,Ac),c(s,Rl,h),c(s,is,h),e(is,Fc),e(is,jn),e(jn,zc),e(is,$c),c(s,Bl,h),c(s,bt,h),e(bt,Go),e(Go,Cc),e(bt,Sc),e(bt,Vs),e(Vs,Dc),e(Vs,Vo),e(Vo,Pc),e(Vs,Mc),e(bt,Qc),e(bt,Ks),e(Ks,Nc),e(Ks,Ko),e(Ko,Oc),e(Ks,Lc),c(s,Gl,h),c(s,xn,h),e(xn,Ic),c(s,Vl,h),c(s,ls,h),e(ls,Yo),e(Yo,Dt),e(Dt,Jo),e(Jo,Xo),e(Xo,Wc),e(Dt,Uc),e(Dt,Zo),e(Zo,er),e(er,Hc),e(Dt,Rc),e(Dt,tr),e(tr,sr),e(sr,Bc),e(ls,Gc),e(ls,Pt),e(Pt,Mt),e(Mt,ar),e(ar,Vc),e(Mt,Kc),e(Mt,nr),e(nr,Yc),e(Mt,Jc),e(Mt,or),e(or,Xc),e(Pt,Zc),e(Pt,Qt),e(Qt,rr),e(rr,eh),e(Qt,th),e(Qt,ir),e(ir,sh),e(Qt,ah),e(Qt,lr),e(lr,nh),e(Pt,oh),e(Pt,Nt),e(Nt,pr),e(pr,rh),e(Nt,ih),e(Nt,dr),e(dr,lh),e(Nt,ph),e(Nt,cr),e(cr,dh),c(s,Kl,h),c(s,wt,h),e(wt,ch),e(wt,Ys),e(Ys,hh),e(wt,uh),e(wt,Js),e(Js,mh),e(wt,fh),c(s,Yl,h),j(Xs,s,h),c(s,Jl,h),c(s,kt,h),e(kt,gh),e(kt,qn),e(qn,_h),e(kt,Th),e(kt,En),e(En,vh),e(kt,bh),c(s,Xl,h),j(Zs,s,h),c(s,Zl,h),c(s,ps,h),e(ps,wh),e(ps,ea),e(ea,kh),e(ps,yh),c(s,ep,h),c(s,ds,h),e(ds,jh),e(ds,ta),e(ta,xh),e(ds,qh),c(s,tp,h),c(s,An,h),e(An,hr),e(hr,Eh),c(s,sp,h),c(s,cs,h),e(cs,Ah),e(cs,sa),e(sa,Fh),e(cs,zh),c(s,ap,h),c(s,re,h),e(re,Fn),e(Fn,ur),e(ur,$h),e(Fn,Ch),e(re,Sh),e(re,zn),e(zn,mr),e(mr,Dh),e(zn,Ph),e(re,Mh),e(re,$n),e($n,fr),e(fr,Qh),e($n,Nh),e(re,Oh),e(re,Cn),e(Cn,gr),e(gr,Lh),e(Cn,Ih),e(re,Wh),e(re,Sn),e(Sn,_r),e(_r,Uh),e(Sn,Hh),e(re,Rh),e(re,Dn),e(Dn,Tr),e(Tr,Bh),e(Dn,Gh),e(re,Vh),e(re,Pn),e(Pn,vr),e(vr,Kh),e(Pn,Yh),e(re,Jh),e(re,Mn),e(Mn,br),e(br,Xh),e(Mn,Zh),e(re,eu),e(re,Qn),e(Qn,wr),e(wr,tu),e(Qn,su),c(s,np,h),c(s,Le,h),e(Le,au),e(Le,aa),e(aa,nu),e(Le,ou),e(Le,na),e(na,ru),e(Le,iu),e(Le,kr),e(kr,lu),e(Le,pu),e(Le,yr),e(yr,du),e(Le,cu),e(Le,jr),e(jr,hu),e(Le,uu),c(s,op,h),c(s,Nn,h),e(Nn,xr),e(xr,mu),c(s,rp,h),c(s,Ae,h),e(Ae,fu),e(Ae,On),e(On,gu),e(Ae,_u),e(Ae,qr),e(qr,Tu),e(Ae,vu),e(Ae,Er),e(Er,bu),e(Ae,wu),e(Ae,Ar),e(Ar,ku),e(Ae,yu),e(Ae,Ln),e(Ln,ju),e(Ae,xu),e(Ae,In),e(In,qu),e(Ae,Eu),c(s,ip,h),c(s,hs,h),e(hs,Fr),e(Fr,oa),e(oa,zr),e(zr,$r),e($r,Au),e(oa,Fu),e(oa,Cr),e(Cr,Sr),e(Sr,zu),e(hs,$u),e(hs,Ot),e(Ot,ra),e(ra,Dr),e(Dr,Cu),e(ra,Su),e(ra,vt),e(vt,Pr),e(Pr,Du),e(vt,Pu),e(vt,Mr),e(Mr,Mu),e(vt,Qu),e(vt,Qr),e(Qr,Nu),e(vt,Ou),e(vt,Nr),e(Nr,Lu),e(Ot,Iu),e(Ot,ia),e(ia,Or),e(Or,Wu),e(ia,Uu),e(ia,Se),e(Se,Lr),e(Lr,Hu),e(Se,Ru),e(Se,Ir),e(Ir,Bu),e(Se,Gu),e(Se,Wr),e(Wr,Vu),e(Se,Ku),e(Se,Ur),e(Ur,Yu),e(Se,Ju),e(Se,Hr),e(Hr,Xu),e(Se,Zu),e(Se,Rr),e(Rr,em),e(Se,tm),e(Se,Br),e(Br,sm),e(Ot,am),e(Ot,la),e(la,Gr),e(Gr,nm),e(la,om),e(la,rt),e(rt,Vr),e(Vr,rm),e(rt,im),e(rt,Kr),e(Kr,lm),e(rt,pm),e(rt,Yr),e(Yr,dm),e(rt,cm),e(rt,Jr),e(Jr,hm),e(rt,um),e(rt,Xr),e(Xr,mm),c(s,lp,h),c(s,ie,h),e(ie,Wn),e(Wn,fm),e(ie,gm),e(ie,Zr),e(Zr,_m),e(ie,Tm),e(ie,ei),e(ei,vm),e(ie,bm),e(ie,ti),e(ti,wm),e(ie,km),e(ie,si),e(si,ym),e(ie,jm),e(ie,ai),e(ai,xm),e(ie,qm),e(ie,ni),e(ni,Em),e(ie,Am),e(ie,oi),e(oi,Fm),e(ie,zm),c(s,pp,h),j(pa,s,h),c(s,dp,h),c(s,ct,h),e(ct,$m),e(ct,Un),e(Un,Cm),e(ct,Sm),e(ct,ri),e(ri,Dm),e(ct,Pm),e(ct,ii),e(ii,Mm),e(ct,Qm),c(s,cp,h),j(da,s,h),c(s,hp,h),c(s,J,h),e(J,Nm),e(J,li),e(li,Om),e(J,Lm),e(J,pi),e(pi,Im),e(J,Wm),e(J,di),e(di,Um),e(J,Hm),e(J,ci),e(ci,Rm),e(J,Bm),e(J,hi),e(hi,Gm),e(J,Vm),e(J,ui),e(ui,Km),e(J,Ym),e(J,Hn),e(Hn,Jm),e(J,Xm),e(J,ca),e(ca,Zm),e(J,ef),e(J,ha),e(ha,tf),e(J,sf),c(s,up,h),c(s,Rn,h),e(Rn,mi),e(mi,af),c(s,mp,h),c(s,yt,h),e(yt,nf),e(yt,Bn),e(Bn,of),e(yt,rf),e(yt,Gn),e(Gn,lf),e(yt,pf),c(s,fp,h),j(ua,s,h),c(s,gp,h),c(s,Lt,h),e(Lt,us),e(us,fi),j(ma,fi,null),e(Lt,df),e(Lt,gi),e(gi,cf),c(s,_p,h),c(s,he,h),e(he,hf),e(he,Vn),e(Vn,uf),e(he,mf),e(he,Kn),e(Kn,ff),e(he,gf),e(he,_i),e(_i,_f),e(he,Tf),e(he,Ti),e(Ti,vf),e(he,bf),e(he,vi),e(vi,wf),e(he,kf),e(he,Yn),e(Yn,yf),e(he,jf),e(he,bi),e(bi,xf),e(he,qf),c(s,Tp,h),c(s,ms,h),e(ms,Ef),e(ms,wi),e(wi,Af),e(ms,Ff),c(s,vp,h),j(fa,s,h),c(s,bp,h),c(s,Ie,h),e(Ie,zf),e(Ie,ki),e(ki,$f),e(Ie,Cf),e(Ie,yi),e(yi,Sf),e(Ie,Df),e(Ie,ji),e(ji,Pf),e(Ie,Mf),e(Ie,ga),e(ga,Qf),e(Ie,Nf),e(Ie,_a),e(_a,Of),e(Ie,Lf),c(s,wp,h),c(s,It,h),e(It,fs),e(fs,xi),j(Ta,xi,null),e(It,If),e(It,qi),e(qi,Wf),c(s,kp,h),c(s,Wt,h),j(va,Wt,null),e(Wt,Uf),e(Wt,ba),e(ba,Hf),e(ba,Jn),e(Jn,Rf),e(ba,Bf),c(s,yp,h),c(s,Ut,h),e(Ut,gs),e(gs,Ei),j(wa,Ei,null),e(Ut,Gf),e(Ut,Ai),e(Ai,Vf),c(s,jp,h),c(s,Ye,h),j(ka,Ye,null),e(Ye,Kf),e(Ye,it),e(it,Yf),e(it,Xn),e(Xn,Jf),e(it,Xf),e(it,Fi),e(Fi,Zf),e(it,eg),e(it,zi),e(zi,tg),e(it,sg),e(it,Zn),e(Zn,ag),e(it,ng),e(Ye,og),e(Ye,ya),e(ya,rg),e(ya,ja),e(ja,ig),e(ya,lg),e(Ye,pg),e(Ye,$i),e($i,dg),e(Ye,cg),j(xa,Ye,null),c(s,xp,h),c(s,Ht,h),e(Ht,_s),e(_s,Ci),j(qa,Ci,null),e(Ht,hg),e(Ht,Si),e(Si,ug),c(s,qp,h),c(s,le,h),j(Ea,le,null),e(le,mg),e(le,Di),e(Di,fg),e(le,gg),e(le,ae),e(ae,_g),e(ae,eo),e(eo,Tg),e(ae,vg),e(ae,to),e(to,bg),e(ae,wg),e(ae,Pi),e(Pi,kg),e(ae,yg),e(ae,Mi),e(Mi,jg),e(ae,xg),e(ae,Qi),e(Qi,qg),e(ae,Eg),e(ae,Ni),e(Ni,Ag),e(ae,Fg),e(ae,Oi),e(Oi,zg),e(ae,$g),e(ae,Li),e(Li,Cg),e(ae,Sg),e(ae,Ii),e(Ii,Dg),e(ae,Pg),e(le,Mg),e(le,De),e(De,Wi),e(Wi,Qg),e(De,Ng),e(De,Ui),e(Ui,Og),e(De,Lg),e(De,Hi),e(Hi,Ig),e(De,Wg),e(De,Ri),e(Ri,Ug),e(De,Hg),e(De,Bi),e(Bi,Rg),e(De,Bg),e(De,Gi),e(Gi,Gg),e(De,Vg),e(De,Vi),e(Vi,Kg),e(le,Yg),e(le,so),e(so,ao),e(ao,Jg),e(so,Xg),e(le,Zg),e(le,Ts),j(Aa,Ts,null),e(Ts,e_),e(Ts,Ki),e(Ki,t_),e(le,s_),e(le,jt),j(Fa,jt,null),e(jt,a_),e(jt,za),e(za,n_),e(za,no),e(no,o_),e(za,r_),e(jt,i_),e(jt,$a),e($a,l_),e($a,Ca),e(Ca,p_),e($a,d_),e(le,c_),e(le,Yi),c(s,Ep,h),c(s,Rt,h),e(Rt,vs),e(vs,Ji),j(Sa,Ji,null),e(Rt,h_),e(Rt,Xi),e(Xi,u_),c(s,Ap,h),c(s,Da,h),e(Da,Zi),c(s,Fp,h),c(s,Bt,h),e(Bt,bs),e(bs,el),j(Pa,el,null),e(Bt,m_),e(Bt,tl),e(tl,f_),c(s,zp,h),c(s,Ma,h),e(Ma,sl),c(s,$p,h),c(s,Gt,h),e(Gt,ws),e(ws,al),j(Qa,al,null),e(Gt,g_),e(Gt,nl),e(nl,__),c(s,Cp,h),c(s,Na,h),e(Na,ol),c(s,Sp,h),c(s,Vt,h),e(Vt,ks),e(ks,rl),j(Oa,rl,null),e(Vt,T_),e(Vt,il),e(il,v_),c(s,Dp,h),c(s,La,h),e(La,ll),c(s,Pp,h),c(s,Kt,h),e(Kt,ys),e(ys,pl),j(Ia,pl,null),e(Kt,b_),e(Kt,dl),e(dl,w_),c(s,Mp,h),c(s,Pe,h),j(Wa,Pe,null),e(Pe,k_),e(Pe,cl),e(cl,y_),e(Pe,j_),e(Pe,Ua),e(Ua,x_),e(Ua,oo),e(oo,q_),e(Ua,E_),e(Pe,A_),e(Pe,Ha),e(Ha,F_),e(Ha,Ra),e(Ra,z_),e(Ha,$_),e(Pe,C_),j(js,Pe,null),e(Pe,S_),e(Pe,Xe),j(Ba,Xe,null),e(Xe,D_),e(Xe,Yt),e(Yt,P_),e(Yt,ro),e(ro,M_),e(Yt,Q_),e(Yt,hl),e(hl,N_),e(Yt,O_),e(Xe,L_),j(xs,Xe,null),e(Xe,I_),e(Xe,ul),e(ul,W_),e(Xe,U_),j(Ga,Xe,null),c(s,Qp,h),c(s,Jt,h),e(Jt,qs),e(qs,ml),j(Va,ml,null),e(Jt,H_),e(Jt,fl),e(fl,R_),c(s,Np,h),c(s,Me,h),j(Ka,Me,null),e(Me,B_),e(Me,Ya),e(Ya,G_),e(Ya,gl),e(gl,V_),e(Ya,K_),e(Me,Y_),e(Me,Ja),e(Ja,J_),e(Ja,io),e(io,X_),e(Ja,Z_),e(Me,eT),e(Me,Xa),e(Xa,tT),e(Xa,Za),e(Za,sT),e(Xa,aT),e(Me,nT),j(Es,Me,null),e(Me,oT),e(Me,Ze),j(en,Ze,null),e(Ze,rT),e(Ze,Xt),e(Xt,iT),e(Xt,lo),e(lo,lT),e(Xt,pT),e(Xt,_l),e(_l,dT),e(Xt,cT),e(Ze,hT),j(As,Ze,null),e(Ze,uT),e(Ze,Tl),e(Tl,mT),e(Ze,fT),j(tn,Ze,null),c(s,Op,h),c(s,Zt,h),e(Zt,Fs),e(Fs,vl),j(sn,vl,null),e(Zt,gT),e(Zt,bl),e(bl,_T),c(s,Lp,h),c(s,Qe,h),j(an,Qe,null),e(Qe,TT),e(Qe,wl),e(wl,vT),e(Qe,bT),e(Qe,nn),e(nn,wT),e(nn,po),e(po,kT),e(nn,yT),e(Qe,jT),e(Qe,on),e(on,xT),e(on,rn),e(rn,qT),e(on,ET),e(Qe,AT),j(zs,Qe,null),e(Qe,FT),e(Qe,et),j(ln,et,null),e(et,zT),e(et,es),e(es,$T),e(es,co),e(co,CT),e(es,ST),e(es,kl),e(kl,DT),e(es,PT),e(et,MT),j($s,et,null),e(et,QT),e(et,yl),e(yl,NT),e(et,OT),j(pn,et,null),c(s,Ip,h),c(s,ts,h),e(ts,Cs),e(Cs,jl),j(dn,jl,null),e(ts,LT),e(ts,xl),e(xl,IT),c(s,Wp,h),c(s,Ne,h),j(cn,Ne,null),e(Ne,WT),e(Ne,ss),e(ss,UT),e(ss,ql),e(ql,HT),e(ss,RT),e(ss,El),e(El,BT),e(ss,GT),e(Ne,VT),e(Ne,hn),e(hn,KT),e(hn,ho),e(ho,YT),e(hn,JT),e(Ne,XT),e(Ne,un),e(un,ZT),e(un,mn),e(mn,ev),e(un,tv),e(Ne,sv),j(Ss,Ne,null),e(Ne,av),e(Ne,tt),j(fn,tt,null),e(tt,nv),e(tt,as),e(as,ov),e(as,uo),e(uo,rv),e(as,iv),e(as,Al),e(Al,lv),e(as,pv),e(tt,dv),j(Ds,tt,null),e(tt,cv),e(tt,Fl),e(Fl,hv),e(tt,uv),j(gn,tt,null),Up=!0},p(s,[h]){const _n={};h&2&&(_n.$$scope={dirty:h,ctx:s}),js.$set(_n);const zl={};h&2&&(zl.$$scope={dirty:h,ctx:s}),xs.$set(zl);const $l={};h&2&&($l.$$scope={dirty:h,ctx:s}),Es.$set($l);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:s}),As.$set(Cl);const Tn={};h&2&&(Tn.$$scope={dirty:h,ctx:s}),zs.$set(Tn);const Sl={};h&2&&(Sl.$$scope={dirty:h,ctx:s}),$s.$set(Sl);const Dl={};h&2&&(Dl.$$scope={dirty:h,ctx:s}),Ss.$set(Dl);const Pl={};h&2&&(Pl.$$scope={dirty:h,ctx:s}),Ds.$set(Pl)},i(s){Up||(x(v.$$.fragment,s),x(X.$$.fragment,s),x(Gs.$$.fragment,s),x(Xs.$$.fragment,s),x(Zs.$$.fragment,s),x(pa.$$.fragment,s),x(da.$$.fragment,s),x(ua.$$.fragment,s),x(ma.$$.fragment,s),x(fa.$$.fragment,s),x(Ta.$$.fragment,s),x(va.$$.fragment,s),x(wa.$$.fragment,s),x(ka.$$.fragment,s),x(xa.$$.fragment,s),x(qa.$$.fragment,s),x(Ea.$$.fragment,s),x(Aa.$$.fragment,s),x(Fa.$$.fragment,s),x(Sa.$$.fragment,s),x(Pa.$$.fragment,s),x(Qa.$$.fragment,s),x(Oa.$$.fragment,s),x(Ia.$$.fragment,s),x(Wa.$$.fragment,s),x(js.$$.fragment,s),x(Ba.$$.fragment,s),x(xs.$$.fragment,s),x(Ga.$$.fragment,s),x(Va.$$.fragment,s),x(Ka.$$.fragment,s),x(Es.$$.fragment,s),x(en.$$.fragment,s),x(As.$$.fragment,s),x(tn.$$.fragment,s),x(sn.$$.fragment,s),x(an.$$.fragment,s),x(zs.$$.fragment,s),x(ln.$$.fragment,s),x($s.$$.fragment,s),x(pn.$$.fragment,s),x(dn.$$.fragment,s),x(cn.$$.fragment,s),x(Ss.$$.fragment,s),x(fn.$$.fragment,s),x(Ds.$$.fragment,s),x(gn.$$.fragment,s),Up=!0)},o(s){q(v.$$.fragment,s),q(X.$$.fragment,s),q(Gs.$$.fragment,s),q(Xs.$$.fragment,s),q(Zs.$$.fragment,s),q(pa.$$.fragment,s),q(da.$$.fragment,s),q(ua.$$.fragment,s),q(ma.$$.fragment,s),q(fa.$$.fragment,s),q(Ta.$$.fragment,s),q(va.$$.fragment,s),q(wa.$$.fragment,s),q(ka.$$.fragment,s),q(xa.$$.fragment,s),q(qa.$$.fragment,s),q(Ea.$$.fragment,s),q(Aa.$$.fragment,s),q(Fa.$$.fragment,s),q(Sa.$$.fragment,s),q(Pa.$$.fragment,s),q(Qa.$$.fragment,s),q(Oa.$$.fragment,s),q(Ia.$$.fragment,s),q(Wa.$$.fragment,s),q(js.$$.fragment,s),q(Ba.$$.fragment,s),q(xs.$$.fragment,s),q(Ga.$$.fragment,s),q(Va.$$.fragment,s),q(Ka.$$.fragment,s),q(Es.$$.fragment,s),q(en.$$.fragment,s),q(As.$$.fragment,s),q(tn.$$.fragment,s),q(sn.$$.fragment,s),q(an.$$.fragment,s),q(zs.$$.fragment,s),q(ln.$$.fragment,s),q($s.$$.fragment,s),q(pn.$$.fragment,s),q(dn.$$.fragment,s),q(cn.$$.fragment,s),q(Ss.$$.fragment,s),q(fn.$$.fragment,s),q(Ds.$$.fragment,s),q(gn.$$.fragment,s),Up=!1},d(s){t(m),s&&t(C),s&&t(g),E(v),s&&t(V),s&&t(T),E(X),s&&t(pe),s&&t(W),s&&t(z),s&&t(ne),s&&t(de),s&&t(G),s&&t(ce),s&&t(u),s&&t(Y),s&&t(qe),s&&t(P),s&&t(Ee),s&&t(M),s&&t(S),s&&t(Ql),s&&t(ns),s&&t(Nl),s&&t(vn),s&&t(Ol),s&&t(pt),s&&t(Ll),s&&t(bn),s&&t(Il),s&&t(dt),s&&t(Wl),s&&t(St),E(Gs),s&&t(Ul),s&&t(rs),s&&t(Hl),s&&t(yn),s&&t(Rl),s&&t(is),s&&t(Bl),s&&t(bt),s&&t(Gl),s&&t(xn),s&&t(Vl),s&&t(ls),s&&t(Kl),s&&t(wt),s&&t(Yl),E(Xs,s),s&&t(Jl),s&&t(kt),s&&t(Xl),E(Zs,s),s&&t(Zl),s&&t(ps),s&&t(ep),s&&t(ds),s&&t(tp),s&&t(An),s&&t(sp),s&&t(cs),s&&t(ap),s&&t(re),s&&t(np),s&&t(Le),s&&t(op),s&&t(Nn),s&&t(rp),s&&t(Ae),s&&t(ip),s&&t(hs),s&&t(lp),s&&t(ie),s&&t(pp),E(pa,s),s&&t(dp),s&&t(ct),s&&t(cp),E(da,s),s&&t(hp),s&&t(J),s&&t(up),s&&t(Rn),s&&t(mp),s&&t(yt),s&&t(fp),E(ua,s),s&&t(gp),s&&t(Lt),E(ma),s&&t(_p),s&&t(he),s&&t(Tp),s&&t(ms),s&&t(vp),E(fa,s),s&&t(bp),s&&t(Ie),s&&t(wp),s&&t(It),E(Ta),s&&t(kp),s&&t(Wt),E(va),s&&t(yp),s&&t(Ut),E(wa),s&&t(jp),s&&t(Ye),E(ka),E(xa),s&&t(xp),s&&t(Ht),E(qa),s&&t(qp),s&&t(le),E(Ea),E(Aa),E(Fa),s&&t(Ep),s&&t(Rt),E(Sa),s&&t(Ap),s&&t(Da),s&&t(Fp),s&&t(Bt),E(Pa),s&&t(zp),s&&t(Ma),s&&t($p),s&&t(Gt),E(Qa),s&&t(Cp),s&&t(Na),s&&t(Sp),s&&t(Vt),E(Oa),s&&t(Dp),s&&t(La),s&&t(Pp),s&&t(Kt),E(Ia),s&&t(Mp),s&&t(Pe),E(Wa),E(js),E(Ba),E(xs),E(Ga),s&&t(Qp),s&&t(Jt),E(Va),s&&t(Np),s&&t(Me),E(Ka),E(Es),E(en),E(As),E(tn),s&&t(Op),s&&t(Zt),E(sn),s&&t(Lp),s&&t(Qe),E(an),E(zs),E(ln),E($s),E(pn),s&&t(Ip),s&&t(ts),E(dn),s&&t(Wp),s&&t(Ne),E(cn),E(Ss),E(fn),E(Ds),E(gn)}}}const fy={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function gy(fe,m,C){let{fw:g}=m;return fe.$$set=f=>{"fw"in f&&C(0,g=f.fw)},[g]}class jy extends ty{constructor(m){super();sy(this,m,gy,my,ay,{fw:0})}}export{jy as default,fy as metadata};
