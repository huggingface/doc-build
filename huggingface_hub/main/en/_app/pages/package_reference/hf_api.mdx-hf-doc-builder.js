import{S as x_,i as D_,s as H_,e as a,k as g,w as D,t as r,M as q_,c as n,d as t,m as d,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as j,B as N,v as I_,L as de}from"../../chunks/vendor-hf-doc-builder.js";import{T as ne}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ke}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function j_(U){let p,b,f,c,h;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
HfApi().rename_discussion(
    repo_id="username/repo_name",
    discussion_num=34
    new_title=new_title
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>new_title = <span class="hljs-string">&quot;New title, fixing a typo&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>HfApi().rename_discussion(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/repo_name&quot;</span>,
<span class="hljs-meta">... </span>    discussion_num=<span class="hljs-number">34</span>
<span class="hljs-meta">... </span>    new_title=new_title
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># DiscussionStatusChange(id=&#x27;deadbeef0000000&#x27;, type=&#x27;status-change&#x27;, ...)</span>
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function N_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function F_(U){let p,b,f,c,h;return c=new ie({props:{code:`
comment = """
Hello @otheruser!
# This is a title
**This is bold**, *this is italic* and ~this is strikethrough~
And [this](http://url) is a link
"""

HfApi().comment_discussion(
    repo_id="username/repo_name",
    discussion_num=34
    comment=comment
)
`,highlighted:`
<span class="hljs-meta">&gt;&gt;&gt; </span>comment = <span class="hljs-string">&quot;&quot;&quot;
<span class="hljs-meta">... </span>Hello @otheruser!
...
<span class="hljs-meta">... </span># This is a title
...
<span class="hljs-meta">... </span>**This is bold**, *this is italic* and ~this is strikethrough~
<span class="hljs-meta">... </span>And [this](http://url) is a link
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>HfApi().comment_discussion(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/repo_name&quot;</span>,
<span class="hljs-meta">... </span>    discussion_num=<span class="hljs-number">34</span>
<span class="hljs-meta">... </span>    comment=comment
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># DiscussionComment(id=&#x27;deadbeef0000000&#x27;, type=&#x27;comment&#x27;, ...)</span>
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function T_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function P_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"create_commit"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=n(T,"CODE",{});var _=s(h);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,h),e(h,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function O_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function L_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function R_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=d(_),c=n(_,"UL",{});var S=s(c);h=n(S,"LI",{});var z=s(h);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=d(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function C_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=d(X),c=n(X,"UL",{});var se=s(c);h=n(se,"LI",{});var Be=s(h);l=n(Be,"A",{href:!0,rel:!0});var be=s(l);u=n(be,"CODE",{});var dt=s(u);P=i(dt,"HTTPError"),dt.forEach(t),be.forEach(t),v=i(Be,`
if the HuggingFace API returned an error`),Be.forEach(t),x=d(se),w=n(se,"LI",{});var Ke=s(w);y=n(Ke,"A",{href:!0,rel:!0});var Re=s(y);k=n(Re,"CODE",{});var he=s(k);O=i(he,"ValueError"),he.forEach(t),Re.forEach(t),T=i(Ke,`
if some parameter value is invalid`),Ke.forEach(t),L=d(se),_=n(se,"LI",{});var ve=s(_);F=n(ve,"A",{href:!0});var Nt=s(F);S=i(Nt,"RepositoryNotFoundError"),Nt.forEach(t),z=i(ve,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(ve,"CODE",{});var Je=s(R);K=i(Je,"private"),Je.forEach(t),G=i(ve," and you do not have access."),ve.forEach(t),A=d(se),M=n(se,"LI",{});var na=s(M);C=n(na,"A",{href:!0});var Ft=s(C);Y=i(Ft,"RevisionNotFoundError"),Ft.forEach(t),te=i(na,`
If the revision to download from cannot be found.`),na.forEach(t),Z=d(se),J=n(se,"LI",{});var sa=s(J);ee=n(sa,"A",{href:!0});var ra=s(ee);ae=i(ra,"EntryNotFoundError"),ra.forEach(t),B=i(sa,`
If the file to download cannot be found.`),sa.forEach(t),se.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function S_(U){let p,b,f,c,h,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=d(y),c=n(y,"UL",{});var O=s(c);h=n(O,"LI",{});var T=s(h);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function M_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function U_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function V_(U){let p,b,f,c,h;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function z_(U){let p,b,f,c,h;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function W_(U){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function G_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function B_(U){let p,b,f,c,h,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets
api.list_datasets()

# Get all valid search arguments
args = DatasetSearchArguments()

# List only the text classification datasets
api.list_datasets(filter="task_categories:text-classification")
# Using the \`DatasetFilter\`
filt = DatasetFilter(task_categories="text-classification")
# With \`DatasetSearchArguments\`
filt = DatasetFilter(task=args.task_categories.text_classification)
api.list_models(filter=filt)

# List only the datasets in russian for language modeling
api.list_datasets(
    filter=("languages:ru", "task_ids:language-modeling")
)
# Using the \`DatasetFilter\`
filt = DatasetFilter(languages="ru", task_ids="language-modeling")
# With \`DatasetSearchArguments\`
filt = DatasetFilter(
    languages=args.languages.ru,
    task_ids=args.task_ids.language_modeling,
)
api.list_datasets(filter=filt)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get all valid search arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only the text classification datasets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=<span class="hljs-string">&quot;task_categories:text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`DatasetFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(task_categories=<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`DatasetSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(task=args.task_categories.text_classification)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only the datasets in russian for language modeling</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">filter</span>=(<span class="hljs-string">&quot;languages:ru&quot;</span>, <span class="hljs-string">&quot;task_ids:language-modeling&quot;</span>)
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`DatasetFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(languages=<span class="hljs-string">&quot;ru&quot;</span>, task_ids=<span class="hljs-string">&quot;language-modeling&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`DatasetSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(
<span class="hljs-meta">... </span>    languages=args.languages.ru,
<span class="hljs-meta">... </span>    task_ids=args.task_ids.language_modeling,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),h=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,h),$(v,l,x),q(u,v,x),P=!0},p:de,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function K_(U){let p,b,f,c,h,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),h=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,h),$(v,l,x),q(u,v,x),P=!0},p:de,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function J_(U){let p,b,f,c,h,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models
api.list_models()

# Get all valid search arguments
args = ModelSearchArguments()

# List only the text classification models
api.list_models(filter="text-classification")
# Using the \`ModelFilter\`
filt = ModelFilter(task="text-classification")
# With \`ModelSearchArguments\`
filt = ModelFilter(task=args.pipeline_tags.TextClassification)
api.list_models(filter=filt)

# Using \`ModelFilter\` and \`ModelSearchArguments\` to find text classification in both PyTorch and TensorFlow
filt = ModelFilter(
    task=args.pipeline_tags.TextClassification,
    library=[args.library.PyTorch, args.library.TensorFlow],
)
api.list_models(filter=filt)

# List only models from the AllenNLP library
api.list_models(filter="allennlp")
# Using \`ModelFilter\` and \`ModelSearchArguments\`
filt = ModelFilter(library=args.library.allennlp)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get all valid search arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only the text classification models</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`ModelFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(task=<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`ModelSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(task=args.pipeline_tags.TextClassification)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using \`ModelFilter\` and \`ModelSearchArguments\` to find text classification in both PyTorch and TensorFlow</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(
<span class="hljs-meta">... </span>    task=args.pipeline_tags.TextClassification,
<span class="hljs-meta">... </span>    library=[args.library.PyTorch, args.library.TensorFlow],
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only models from the AllenNLP library</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=<span class="hljs-string">&quot;allennlp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using \`ModelFilter\` and \`ModelSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),h=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,h),$(v,l,x),q(u,v,x),P=!0},p:de,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function Q_(U){let p,b,f,c,h,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),h=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,h),$(v,l,x),q(u,v,x),P=!0},p:de,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function X_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Y_(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=d(_),c=n(_,"UL",{});var S=s(c);h=n(S,"LI",{});var z=s(h);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=d(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Z_(U){let p,b,f,c,h,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=d(y),c=n(y,"UL",{});var O=s(c);h=n(O,"LI",{});var T=s(h);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function eb(U){let p,b,f,c,h;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
HfApi().rename_discussion(
    repo_id="username/repo_name",
    discussion_num=34
    new_title=new_title
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>new_title = <span class="hljs-string">&quot;New title, fixing a typo&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>HfApi().rename_discussion(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/repo_name&quot;</span>,
<span class="hljs-meta">... </span>    discussion_num=<span class="hljs-number">34</span>
<span class="hljs-meta">... </span>    new_title=new_title
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># DiscussionTitleChange(id=&#x27;deadbeef0000000&#x27;, type=&#x27;title-change&#x27;, ...)</span>
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function tb(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=n(A,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ob(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=d(_),c=n(_,"UL",{});var S=s(c);h=n(S,"LI",{});var z=s(h);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=d(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function ab(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=d(_),c=n(_,"UL",{});var S=s(c);h=n(S,"LI",{});var z=s(h);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=d(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function nb(U){let p,b,f,c,h,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=d(y),c=n(y,"UL",{});var O=s(c);h=n(O,"LI",{});var T=s(h);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,h),e(h,l),e(l,u),e(h,P),e(h,v),e(v,x),e(h,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function sb(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G,A,M,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=d(Z),c=n(Z,"UL",{});var ee=s(c);h=n(ee,"LI",{});var ae=s(h);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=d(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var se=s(y);k=n(se,"CODE",{});var Be=s(k);O=i(Be,"ValueError"),Be.forEach(t),se.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),L=d(ee),_=n(ee,"LI",{});var be=s(_);F=n(be,"A",{href:!0});var dt=s(F);S=i(dt,"RepositoryNotFoundError"),dt.forEach(t),z=i(be,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(be,"CODE",{});var Ke=s(R);K=i(Ke,"private"),Ke.forEach(t),G=i(be," and you do not have access."),be.forEach(t),A=d(ee),M=n(ee,"LI",{});var Re=s(M);C=n(Re,"A",{href:!0});var he=s(C);Y=i(he,"RevisionNotFoundError"),he.forEach(t),te=i(Re,`
If the revision to download from cannot be found.`),Re.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function rb(U){let p,b,f,c,h,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_file"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=n(T,"CODE",{});var _=s(h);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,h),e(h,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function ib(U){let p,b,f,c,h;return c=new ie({props:{code:`from huggingface_hub import upload_file

with open("./local/filepath", "rb") as fobj:
    upload_file(
        path_or_fileobj=fileobj,
        path_in_repo="remote/file/path.h5",
        repo_id="username/my-dataset",
        repo_type="datasets",
        token="my_token",
    )

upload_file(
    path_or_fileobj=".\\\\local\\\\file\\\\path",
    path_in_repo="remote/file/path.h5",
    repo_id="username/my-model",
    token="my_token",
)

upload_file(
    path_or_fileobj=".\\\\local\\\\file\\\\path",
    path_in_repo="remote/file/path.h5",
    repo_id="username/my-model",
    token="my_token",
    create_pr=True,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> upload_file

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;./local/filepath&quot;</span>, <span class="hljs-string">&quot;rb&quot;</span>) <span class="hljs-keyword">as</span> fobj:
<span class="hljs-meta">... </span>    upload_file(
<span class="hljs-meta">... </span>        path_or_fileobj=fileobj,
<span class="hljs-meta">... </span>        path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>        repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>        repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>        token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    )
<span class="hljs-string">&quot;https://huggingface.co/datasets/username/my-dataset/blob/main/remote/file/path.h5&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    path_or_fileobj=<span class="hljs-string">&quot;.\\\\local\\\\file\\\\path&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-model&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    path_or_fileobj=<span class="hljs-string">&quot;.\\\\local\\\\file\\\\path&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-model&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function lb(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(L){p=n(L,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=d(L),c=n(L,"UL",{});var F=s(c);h=n(F,"LI",{});var S=s(h);l=n(S,"A",{href:!0,rel:!0});var z=s(l);u=n(z,"CODE",{});var R=s(u);P=i(R,"HTTPError"),R.forEach(t),z.forEach(t),v=i(S,`
if the HuggingFace API returned an error`),S.forEach(t),x=d(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(L,_){$(L,p,_),e(p,b),$(L,f,_),$(L,c,_),e(c,h),e(h,l),e(l,u),e(u,P),e(h,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function cb(U){let p,b,f,c,h,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_folder"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=n(T,"CODE",{});var _=s(h);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,h),e(h,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function pb(U){let p,b,f,c,h;return c=new ie({props:{code:`upload_folder(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
    ignore_patterns="**/logs/*.txt",
)

upload_folder(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
    create_pr=True,
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>upload_folder(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    ignore_patterns=<span class="hljs-string">&quot;**/logs/*.txt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/main/remote/experiment/checkpoints&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_folder(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/refs%2Fpr%2F1/remote/experiment/checkpoints&quot;</span>
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function gb(U){let p,b,f,c,h;return c=new ie({props:{code:`operation = CommitOperationAdd(
       path_in_repo="remote/dir/weights.h5",
       path_or_fileobj="./local/weights.h5",
)

with operation.as_file() as file:
    content = file.read()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>operation = CommitOperationAdd(
<span class="hljs-meta">... </span>       path_in_repo=<span class="hljs-string">&quot;remote/dir/weights.h5&quot;</span>,
<span class="hljs-meta">... </span>       path_or_fileobj=<span class="hljs-string">&quot;./local/weights.h5&quot;</span>,
<span class="hljs-meta">... </span>)
CommitOperationAdd(path_in_repo=<span class="hljs-string">&#x27;remote/dir/weights.h5&#x27;</span>, path_or_fileobj=<span class="hljs-string">&#x27;./local/weights.h5&#x27;</span>, _upload_info=<span class="hljs-literal">None</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> operation.as_file() <span class="hljs-keyword">as</span> file:
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function db(U){let p,b,f,c,h;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

# Using author
new_filter = DatasetFilter(author="facebook")

# Using benchmark
new_filter = DatasetFilter(benchmark="raft")

# Using dataset_name
new_filter = DatasetFilter(dataset_name="wikineural")

# Using language_creator
new_filter = DatasetFilter(language_creator="crowdsourced")

# Using language
new_filter = DatasetFilter(language="en")

# Using multilinguality
new_filter = DatasetFilter(multilinguality="multilingual")

# Using size_categories
new_filter = DatasetFilter(size_categories="100K<n<1M")

# Using task_categories
new_filter = DatasetFilter(task_categories="audio_classification")

# Using task_ids
new_filter = DatasetFilter(task_ids="paraphrase")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> DatasetFilter

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using author</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(author=<span class="hljs-string">&quot;facebook&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using benchmark</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(benchmark=<span class="hljs-string">&quot;raft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using dataset_name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(dataset_name=<span class="hljs-string">&quot;wikineural&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using language_creator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(language_creator=<span class="hljs-string">&quot;crowdsourced&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(language=<span class="hljs-string">&quot;en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using multilinguality</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(multilinguality=<span class="hljs-string">&quot;multilingual&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using size_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(size_categories=<span class="hljs-string">&quot;100K&lt;n&lt;1M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_categories=<span class="hljs-string">&quot;audio_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function hb(U){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

# For the author_or_organization
new_filter = ModelFilter(author_or_organization="facebook")

# For the library
new_filter = ModelFilter(library="pytorch")

# For the language
new_filter = ModelFilter(language="french")

# For the model_name
new_filter = ModelFilter(model_name="bert")

# For the task
new_filter = ModelFilter(task="text-classification")

# Retrieving tags using the \`HfApi.get_model_tags\` method
from huggingface_hub import HfApi

api = HfApi()

api.get_model_tags()

api.get_dataset_tags()
new_filter = ModelFilter(tags="benchmark:raft")

# Related to the dataset
new_filter = ModelFilter(trained_dataset="common_voice")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelFilter

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the author_or_organization</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(author_or_organization=<span class="hljs-string">&quot;facebook&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the library</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(library=<span class="hljs-string">&quot;pytorch&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(language=<span class="hljs-string">&quot;french&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the model_name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(model_name=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the task</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(task=<span class="hljs-string">&quot;text-classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Retrieving tags using the \`HfApi.get_model_tags\` method</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-comment"># To list model tags</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>api.get_model_tags()
<span class="hljs-comment"># To list dataset tags</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>api.get_dataset_tags()
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(tags=<span class="hljs-string">&quot;benchmark:raft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Related to the dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:de,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){j(p.$$.fragment,f),b=!1},d(f){N(p,f)}}}function ub(U){let p,b,f,c,h;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function fb(U){let p,b,f,c,h;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=d(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),h=!0},p:de,i(l){h||(I(c.$$.fragment,l),h=!0)},o(l){j(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function mb(U){let p,b,f,c,h,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B,X,oe,se,Be,be,dt,Ke,Re,he,ve,Nt,Je,na,Ft,sa,ra,V,ia,ic,xe,la,lc,Ds,cc,pc,Tt,gc,Pt,dc,De,ca,hc,Hs,uc,fc,Ot,mc,Lt,_c,Qe,pa,bc,qs,vc,$c,Rt,yc,le,ga,Ec,Is,wc,kc,da,Ac,js,xc,Dc,Hc,ha,qc,Qn,Ic,jc,Nc,Xn,Fc,Yn,Tc,Pc,Ct,Oc,ce,ua,Lc,fa,Rc,Ns,Cc,Sc,Mc,ma,Uc,Zn,Vc,zc,Wc,_a,Gc,Fs,Bc,Kc,Jc,es,Qc,ts,Xc,Yc,St,Zc,Mt,ba,ep,Ts,tp,op,Ut,va,ap,Ps,np,sp,He,$a,rp,Os,ip,lp,Ls,cp,pp,Vt,gp,Xe,ya,dp,Rs,hp,up,zt,fp,Ye,Ea,mp,Cs,_p,bp,Wt,vp,Ze,wa,$p,Ss,yp,Ep,Gt,wp,Bt,ka,kp,Ms,Ap,xp,qe,Aa,Dp,Us,Hp,qp,os,Ip,as,jp,Np,Kt,Fp,Jt,xa,Tp,Vs,Pp,Op,Qt,Da,Lp,zs,Rp,Cp,$e,Ha,Sp,Ws,Mp,Up,Gs,Vp,zp,Xt,Wp,Yt,Gp,Ie,qa,Bp,Bs,Kp,Jp,Zt,Qp,eo,Xp,je,Ia,Yp,Ks,Zp,eg,to,tg,oo,og,ao,ja,ag,Js,ng,sg,ye,Na,rg,Qs,ig,lg,Fa,cg,ns,pg,gg,dg,no,hg,so,ug,ro,Ta,fg,Xs,mg,_g,io,Pa,bg,Ys,vg,$g,et,Oa,yg,Zs,Eg,wg,lo,kg,Ne,La,Ag,er,xg,Dg,tr,Hg,qg,co,Ig,Fe,Ra,jg,or,Ng,Fg,Ca,Tg,Sa,Pg,Og,Lg,po,Rg,Te,Ma,Cg,ar,Sg,Mg,go,Ug,ho,Vg,tt,Ua,zg,nr,Wg,Gg,uo,Bg,fo,Va,Kg,sr,Jg,Qg,Pe,za,Xg,rr,Yg,Zg,ir,ed,td,mo,od,_o,Wa,ad,lr,nd,sd,ot,Ga,rd,cr,id,ld,bo,cd,Ee,Ba,pd,pr,gd,dd,vo,hd,$o,ud,yo,fd,re,Ka,md,gr,_d,bd,dr,vd,$d,ue,yd,hr,Ed,wd,ur,kd,Ad,Ja,xd,Dd,fr,Hd,qd,mr,Id,jd,Nd,Qa,Fd,_r,Td,Pd,Od,Eo,Ld,wo,Rd,ko,Cd,Ao,Xa,Sd,br,Md,zi,ht,xo,vr,Ya,Ud,$r,Vd,Wi,ut,Za,zd,yr,Wd,Gi,ft,Do,Er,en,Gd,wr,Bd,Bi,mt,tn,Kd,kr,Jd,Ki,_t,Ho,Ar,on,Qd,xr,Xd,Ji,Ce,an,Yd,Dr,Zd,eh,Hr,th,Qi,bt,qo,qr,nn,oh,Ir,ah,Xi,vt,sn,nh,jr,sh,Yi,$t,Io,Nr,rn,rh,Fr,ih,Zi,Se,ln,lh,Tr,ch,ph,cn,gh,ss,dh,hh,el,yt,jo,Pr,pn,uh,rs,Or,fh,mh,tl,No,_h,Lr,bh,vh,ol,fe,gn,$h,Rr,yh,Eh,we,dn,wh,hn,kh,Cr,Ah,xh,Dh,un,Hh,Sr,qh,Ih,jh,fn,Nh,Mr,Fh,Th,Ph,Fo,Oh,at,mn,Lh,is,Rh,Ur,Ch,Sh,ls,Mh,Vr,Uh,Vh,Oe,_n,zh,bn,Wh,zr,Gh,Bh,Kh,Et,nt,Jh,Wr,Qh,Xh,Gr,Yh,Zh,Br,eu,tu,vn,ou,Kr,au,nu,su,st,ru,Jr,iu,lu,Qr,cu,pu,Xr,gu,du,wt,hu,Yr,uu,fu,Zr,mu,_u,al,kt,$n,bu,ei,vu,nl,At,To,ti,yn,$u,oi,yu,sl,En,ai,Eu,wu,rl,Po,ku,cs,Au,xu,il,Ae,wn,Du,Oo,kn,Hu,ni,qu,Iu,rt,An,ju,si,Nu,Fu,xn,Tu,ri,Pu,Ou,Lu,Lo,Dn,Ru,ii,Cu,ll,xt,Ro,li,Hn,Su,ci,Mu,cl,Co,Uu,pi,Vu,zu,pl,Dt,So,gi,qn,Wu,di,Gu,gl,Me,In,Bu,hi,Ku,Ju,Mo,dl,Ht,Uo,ui,jn,Qu,fi,Xu,hl,Ue,Nn,Yu,mi,Zu,ef,Vo,ul,qt,zo,_i,Fn,tf,bi,of,fl,Ve,Tn,af,vi,nf,sf,Wo,ml,It,Go,$i,Pn,rf,yi,lf,_l,ze,On,cf,Ei,pf,gf,Bo,bl;return l=new ke({}),C=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),Je=new ke({}),ia=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L661"}}),la=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3080",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Tt=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[j_]},$$scope:{ctx:U}}}),Pt=new ne({props:{$$slots:{default:[N_]},$$scope:{ctx:U}}}),ca=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2937",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ot=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[F_]},$$scope:{ctx:U}}}),Lt=new ne({props:{$$slots:{default:[T_]},$$scope:{ctx:U}}}),pa=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which the commit will be created, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<code>Iterable</code> of <code>CommitOperation()</code>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.CommitOperationAdd">CommitOperationAdd</a> to upload a file</li>
<li><a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.CommitOperationDelete">CommitOperationDelete</a> to delete a file</li>
</ul>`,name:"operations"},{anchor:"huggingface_hub.HfApi.create_commit.commit_message",description:`<strong>commit_message</strong> (<code>str</code>) &#x2014;
The summary (first line) of the commit that will be created.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.create_commit.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the commit that will be created`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.create_commit.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_commit.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_commit.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_commit.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>. If set to <code>True</code>, this function will return the URL
to the newly created Pull Request on the Hub.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.create_commit.num_threads",description:`<strong>num_threads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of concurrent threads for uploading files. Defaults to 5.
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"},{anchor:"huggingface_hub.HfApi.create_commit.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string.
Shorthands (7 first characters) are also supported.If specified and <code>create_pr</code> is <code>False</code>,
the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>. If specified and <code>create_pr</code>
is <code>True</code>, the pull request will be created from <code>parent_commit</code>. Specifying <code>parent_commit</code>
ensures the repo has not changed before committing the changes, and can be especially useful
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1896",returnDescription:`
<p>Instance of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.CommitInfo"
>CommitInfo</a> containing information about the newly
created commit (commit hash, commit url, pr url, commit message,\u2026).</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.CommitInfo"
>CommitInfo</a></p>
`,raiseDescription:`
<ul>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If commit message is empty.</li>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If parent commit is not a valid commit OID.</li>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If the Hub API returns an HTTP 400 error (bad request)</li>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If <code>create_pr</code> is <code>True</code> and revision is neither <code>None</code> nor <code>"main"</code>.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
</ul>
`,raiseType:`
<p><code>ValueError</code> or <a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a></p>
`}}),Rt=new ne({props:{warning:!0,$$slots:{default:[P_]},$$scope:{ctx:U}}}),ga=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str]"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_discussion.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_discussion.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the Pull Request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_discussion.pull_request",description:`<strong>pull_request</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to create a Pull Request or discussion. If <code>True</code>, creates a Pull Request.
If <code>False</code>, creates a discussion. Defaults to <code>False</code>.`,name:"pull_request"},{anchor:"huggingface_hub.HfApi.create_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2764"}}),Ct=new ne({props:{$$slots:{default:[O_]},$$scope:{ctx:U}}}),ua=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str]"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_pull_request.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_pull_request.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the Pull Request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2853"}}),St=new ne({props:{$$slots:{default:[L_]},$$scope:{ctx:U}}}),ba=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1548",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),va=new Q({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a commit will be tagged.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to create.`,name:"tag"},{anchor:"huggingface_hub.HfApi.create_tag.tag_message",description:`<strong>tag_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the tag to create.`,name:"tag_message"},{anchor:"huggingface_hub.HfApi.create_tag.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to tag. It can be a branch name or the OID/SHA of a
commit, as a hexadecimal string. Shorthands (7 first characters) are
also supported. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2492",raiseDescription:`
<ul>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If revision is not found (error 404) on the repo.</li>
</ul>
`,raiseType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a></p>
`}}),$a=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.dataset_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.dataset_info.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1293",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Vt=new ne({props:{$$slots:{default:[R_]},$$scope:{ctx:U}}}),ya=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Delete {path_in_repo} with huggingface_hub&quot;</code>.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.delete_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.delete_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with the changes.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.delete_file.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2404"}}),zt=new ne({props:{$$slots:{default:[C_]},$$scope:{ctx:U}}}),Ea=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1672"}}),Wt=new ne({props:{$$slots:{default:[S_]},$$scope:{ctx:U}}}),wa=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3208",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Gt=new ne({props:{$$slots:{default:[M_]},$$scope:{ctx:U}}}),ka=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L736"}}),Aa=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2679"}}),Kt=new ne({props:{$$slots:{default:[U_]},$$scope:{ctx:U}}}),xa=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
The Hugging Face authentication token`,name:"token"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2554",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Da=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L728"}}),Ha=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2601",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Xt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[V_]},$$scope:{ctx:U}}}),Yt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[z_]},$$scope:{ctx:U}}}),qa=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str]"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3265",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Zt=new ne({props:{warning:!0,$$slots:{default:[W_]},$$scope:{ctx:U}}}),eo=new ne({props:{$$slots:{default:[G_]},$$scope:{ctx:U}}}),Ia=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo">huggingface_hub.hf_api.DatasetInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_datasets.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of datasets fetched. Leaving this option
to <code>None</code> fetches all datasets.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_datasets.cardData",description:`<strong>cardData</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to grab the metadata for the dataset as well. Can
contain useful information such as the PapersWithCode ID.`,name:"cardData"},{anchor:"huggingface_hub.HfApi.list_datasets.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all dataset data, including the <code>lastModified</code>
and the <code>cardData</code>.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_datasets.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L954"}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[B_]},$$scope:{ctx:U}}}),oo=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[K_]},$$scope:{ctx:U}}}),ja=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1117",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Na=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_models.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author (user or organization) of the
returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_models.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models Example
usage:`,name:"search"},{anchor:"huggingface_hub.HfApi.list_models.emissions_thresholds",description:`<strong>emissions_thresholds</strong> (<code>Tuple</code>, <em>optional</em>) &#x2014;
A tuple of two ints or floats representing a minimum and maximum
carbon footprint to filter the resulting models with in grams.`,name:"emissions_thresholds"},{anchor:"huggingface_hub.HfApi.list_models.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting models. Possible values
are the properties of the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo">huggingface_hub.hf_api.ModelInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_models.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_models.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of models fetched. Leaving this option
to <code>None</code> fetches all models.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_models.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all model data, including the <code>lastModified</code>,
the <code>sha</code>, the files and the <code>tags</code>. This is set to <code>True</code> by
default when using a filter.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_models.cardData",description:`<strong>cardData</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to grab the metadata for the model as well. Can contain
useful information such as carbon emissions, metrics, and
datasets trained on.`,name:"cardData"},{anchor:"huggingface_hub.HfApi.list_models.fetch_config",description:`<strong>fetch_config</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch the model configs as well. This is not included
in <code>full</code> due to its size.`,name:"fetch_config"},{anchor:"huggingface_hub.HfApi.list_models.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L746"}}),no=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[J_]},$$scope:{ctx:U}}}),so=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Q_]},$$scope:{ctx:U}}}),Ta=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.list_repo_files.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1500",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Pa=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string tag or list of tags that can be used to identify Spaces on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_spaces.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned Spaces.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_spaces.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned Spaces.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_spaces.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting Spaces. Possible
values are the properties of the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo">huggingface_hub.hf_api.SpaceInfo</a>\` class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_spaces.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_spaces.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of Spaces fetched. Leaving this option
to <code>None</code> fetches all Spaces.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_spaces.datasets",description:`<strong>datasets</strong> (<code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
Whether to return Spaces that make use of a dataset.
The name of a specific dataset can be passed as a string.`,name:"datasets"},{anchor:"huggingface_hub.HfApi.list_spaces.models",description:`<strong>models</strong> (<code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
Whether to return Spaces that make use of a model.
The name of a specific model can be passed as a string.`,name:"models"},{anchor:"huggingface_hub.HfApi.list_spaces.linked",description:`<strong>linked</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return Spaces that make use of either a model or a dataset.`,name:"linked"},{anchor:"huggingface_hub.HfApi.list_spaces.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all Spaces data, including the <code>lastModified</code>
and the <code>cardData</code>.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_spaces.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1131",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Oa=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str]"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3155",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),lo=new ne({props:{$$slots:{default:[X_]},$$scope:{ctx:U}}}),La=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.model_info.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1214",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),co=new ne({props:{$$slots:{default:[Y_]},$$scope:{ctx:U}}}),Ra=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1824"}}),po=new ne({props:{$$slots:{default:[Z_]},$$scope:{ctx:U}}}),Ma=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3013",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),go=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[eb]},$$scope:{ctx:U}}}),ho=new ne({props:{$$slots:{default:[tb]},$$scope:{ctx:U}}}),Ua=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.repo_info.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1431",returnDescription:`
<p>The repository information, as a
<a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a>, <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a>
or <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> object.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),uo=new ne({props:{$$slots:{default:[ob]},$$scope:{ctx:U}}}),Va=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L709"}}),za=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.space_info.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1362",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),mo=new ne({props:{$$slots:{default:[ab]},$$scope:{ctx:U}}}),Wa=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L721"}}),Ga=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1757",returnDescription:`
<p>The HTTP response in json.</p>
`}}),bo=new ne({props:{$$slots:{default:[nb]},$$scope:{ctx:U}}}),Ba=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
Path to a file on the local machine or binary data stream /
fileobj / buffer.`,name:"path_or_fileobj"},{anchor:"huggingface_hub.HfApi.upload_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.upload_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository to which the file will be uploaded, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.upload_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.upload_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_file.identical_ok",description:`<strong>identical_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Deprecated: will be removed in 0.11.0.
Changing this value has no effect.`,name:"identical_ok"},{anchor:"huggingface_hub.HfApi.upload_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.upload_file.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2084",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),vo=new ne({props:{$$slots:{default:[sb]},$$scope:{ctx:U}}}),$o=new ne({props:{warning:!0,$$slots:{default:[rb]},$$scope:{ctx:U}}}),yo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[ib]},$$scope:{ctx:U}}}),Ka=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository to which the file will be uploaded, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_folder.folder_path",description:`<strong>folder_path</strong> (<code>str</code>) &#x2014;
Path to the folder to upload on the local file system`,name:"folder_path"},{anchor:"huggingface_hub.HfApi.upload_folder.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Relative path of the directory in the repo, for example:
<code>&quot;checkpoints/1fec34a/results&quot;</code>. Will default to the root folder of the repository.`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.upload_folder.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.upload_folder.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.upload_folder.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to:
<code>f&quot;Upload {path_in_repo} with huggingface_hub&quot;</code>`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_folder.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from the pushed changes. Defaults
to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.upload_folder.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"},{anchor:"huggingface_hub.HfApi.upload_folder.allow_patterns",description:`<strong>allow_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, only files matching at least one pattern are uploaded.`,name:"allow_patterns"},{anchor:"huggingface_hub.HfApi.upload_folder.ignore_patterns",description:`<strong>ignore_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2244",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Eo=new ne({props:{$$slots:{default:[lb]},$$scope:{ctx:U}}}),wo=new ne({props:{warning:!0,$$slots:{default:[cb]},$$scope:{ctx:U}}}),ko=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[pb]},$$scope:{ctx:U}}}),Xa=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L665"}}),Ya=new ke({}),Za=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.securityStatus",description:`<strong>securityStatus</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Security status of the model.
Example: <code>{&quot;containsInfected&quot;: False}</code>`,name:"securityStatus"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L277"}}),en=new ke({}),tn=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of dataset repository.`,name:"id"},{anchor:"huggingface_hub.hf_api.DatasetInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.DatasetInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.DatasetInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.DatasetInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a> objects that constitute the dataset.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.DatasetInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.DatasetInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.DatasetInfo.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Description of the dataset`,name:"description"},{anchor:"huggingface_hub.hf_api.DatasetInfo.citation",description:`<strong>citation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dataset citation`,name:"citation"},{anchor:"huggingface_hub.hf_api.DatasetInfo.cardData",description:`<strong>cardData</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Metadata of the model card as a dictionary.`,name:"cardData"},{anchor:"huggingface_hub.hf_api.DatasetInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L350"}}),on=new ke({}),an=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L424"}}),nn=new ke({}),sn=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L231"}}),rn=new ke({}),ln=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
Url where to find the commit.`,name:"commit_url"},{anchor:"huggingface_hub.CommitInfo.commit_message",description:`<strong>commit_message</strong> (<code>str</code>) &#x2014;
The summary (first line) of the commit that has been created.`,name:"commit_message"},{anchor:"huggingface_hub.CommitInfo.commit_description",description:`<strong>commit_description</strong> (<code>str</code>) &#x2014;
Description of the commit that has been created. Can be empty.`,name:"commit_description"},{anchor:"huggingface_hub.CommitInfo.oid",description:`<strong>oid</strong> (<code>str</code>) &#x2014;
Commit hash id. Example: <code>&quot;91c54ad1727ee830252e457677f467be0bfd8a57&quot;</code>.`,name:"oid"},{anchor:"huggingface_hub.CommitInfo.pr_url",description:`<strong>pr_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Url to the PR that has been created, if any. Populated when <code>create_pr=True</code>
is passed.`,name:"pr_url"},{anchor:"huggingface_hub.CommitInfo.pr_revision",description:`<strong>pr_revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Revision of the PR that has been created, if any. Populated when
<code>create_pr=True</code> is passed. Example: <code>&quot;refs/pr/1&quot;</code>.`,name:"pr_revision"},{anchor:"huggingface_hub.CommitInfo.pr_num",description:`<strong>pr_num</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of the PR discussion that has been created, if any. Populated when
<code>create_pr=True</code> is passed. Can be passed as <code>discussion_num</code> in
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L176"}}),pn=new ke({}),gn=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L43"}}),dn=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L115"}}),Fo=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[gb]},$$scope:{ctx:U}}}),mn=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L150"}}),_n=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L65"}}),$n=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L28"}}),yn=new ke({}),wn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),kn=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),An=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Dn=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),Hn=new ke({}),qn=new ke({}),In=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the original uploader (author or organization), such as
<code>facebook</code> or <code>huggingface</code>.`,name:"author"},{anchor:"huggingface_hub.DatasetFilter.benchmark",description:`<strong>benchmark</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by their official benchmark.`,name:"benchmark"},{anchor:"huggingface_hub.DatasetFilter.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by its name, such as <code>SQAC</code> or <code>wikineural</code>`,name:"dataset_name"},{anchor:"huggingface_hub.DatasetFilter.language_creators",description:`<strong>language_creators</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub with how the data was curated, such as <code>crowdsourced</code> or
<code>machine_generated</code>.`,name:"language_creators"},{anchor:"huggingface_hub.DatasetFilter.languages",description:`<strong>languages</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings representing a two-character language to
filter datasets by on the Hub.`,name:"languages"},{anchor:"huggingface_hub.DatasetFilter.multilinguality",description:`<strong>multilinguality</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings representing a filter for datasets that
contain multiple languages.`,name:"multilinguality"},{anchor:"huggingface_hub.DatasetFilter.size_categories",description:`<strong>size_categories</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the size of the dataset such as <code>100K&lt;n&lt;1M</code> or
<code>1M&lt;n&lt;10M</code>.`,name:"size_categories"},{anchor:"huggingface_hub.DatasetFilter.task_categories",description:`<strong>task_categories</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the designed task, such as <code>audio_classification</code> or
<code>named_entity_recognition</code>.`,name:"task_categories"},{anchor:"huggingface_hub.DatasetFilter.task_ids",description:`<strong>task_ids</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the specific task such as <code>speech_emotion_recognition</code> or
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),Mo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[db]},$$scope:{ctx:U}}}),jn=new ke({}),Nn=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that can be used to identify models on the Hub by the
original uploader (author or organization), such as <code>facebook</code> or
<code>huggingface</code>.`,name:"author"},{anchor:"huggingface_hub.ModelFilter.library",description:`<strong>library</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings of foundational libraries models were
originally trained from, such as pytorch, tensorflow, or allennlp.`,name:"library"},{anchor:"huggingface_hub.ModelFilter.language",description:`<strong>language</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings of languages, both by name and country
code, such as &#x201C;en&#x201D; or &#x201C;English&#x201D;`,name:"language"},{anchor:"huggingface_hub.ModelFilter.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that contain complete or partial names for models on the
Hub, such as &#x201C;bert&#x201D; or &#x201C;bert-base-cased&#x201D;`,name:"model_name"},{anchor:"huggingface_hub.ModelFilter.task",description:`<strong>task</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings of tasks models were designed for, such
as: &#x201C;fill-mask&#x201D; or &#x201C;automatic-speech-recognition&#x201D;`,name:"task"},{anchor:"huggingface_hub.ModelFilter.tags",description:`<strong>tags</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string tag or a list of tags to filter models on the Hub by, such
as <code>text-generation</code> or <code>spacy</code>.`,name:"tags"},{anchor:"huggingface_hub.ModelFilter.trained_dataset",description:`<strong>trained_dataset</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string tag or a list of string tags of the trained dataset for a
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Vo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[hb]},$$scope:{ctx:U}}}),Fn=new ke({}),Tn=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L549"}}),Wo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[ub]},$$scope:{ctx:U}}}),Pn=new ke({}),On=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L511"}}),Bo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[fb]},$$scope:{ctx:U}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),h=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),_=a("p"),F=r("All methods from the "),S=a("code"),z=r("HfApi"),R=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),M=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),se=a("p"),Be=r("Using the "),be=a("code"),dt=r("HfApi"),Ke=r(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Re=g(),he=a("h3"),ve=a("a"),Nt=a("span"),D(Je.$$.fragment),na=g(),Ft=a("span"),sa=r("HfApi"),ra=g(),V=a("div"),D(ia.$$.fragment),ic=g(),xe=a("div"),D(la.$$.fragment),lc=g(),Ds=a("p"),cc=r("Closes or re-opens a Discussion or Pull Request."),pc=g(),D(Tt.$$.fragment),gc=g(),D(Pt.$$.fragment),dc=g(),De=a("div"),D(ca.$$.fragment),hc=g(),Hs=a("p"),uc=r("Creates a new comment on the given Discussion."),fc=g(),D(Ot.$$.fragment),mc=g(),D(Lt.$$.fragment),_c=g(),Qe=a("div"),D(pa.$$.fragment),bc=g(),qs=a("p"),vc=r("Creates a commit in the given repo, deleting & uploading files as needed."),$c=g(),D(Rt.$$.fragment),yc=g(),le=a("div"),D(ga.$$.fragment),Ec=g(),Is=a("p"),wc=r("Creates a Discussion or Pull Request."),kc=g(),da=a("p"),Ac=r("Pull Requests created programmatically will be in "),js=a("code"),xc=r('"draft"'),Dc=r(" status."),Hc=g(),ha=a("p"),qc=r("Creating a Pull Request with changes can also be done at once with "),Qn=a("a"),Ic=r("HfApi.create_commit()"),jc=r("."),Nc=g(),Xn=a("p"),Fc=r("Returns: "),Yn=a("a"),Tc=r("DiscussionWithDetails"),Pc=g(),D(Ct.$$.fragment),Oc=g(),ce=a("div"),D(ua.$$.fragment),Lc=g(),fa=a("p"),Rc=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Ns=a("code"),Cc=r('"draft"'),Sc=r(" status."),Mc=g(),ma=a("p"),Uc=r("Creating a Pull Request with changes can also be done at once with "),Zn=a("a"),Vc=r("HfApi.create_commit()"),zc=r(";"),Wc=g(),_a=a("p"),Gc=r("This is a wrapper around "),Fs=a("code"),Bc=r("HfApi.create_discusssion"),Kc=r("."),Jc=g(),es=a("p"),Qc=r("Returns: "),ts=a("a"),Xc=r("DiscussionWithDetails"),Yc=g(),D(St.$$.fragment),Zc=g(),Mt=a("div"),D(ba.$$.fragment),ep=g(),Ts=a("p"),tp=r("Create an empty repo on the HuggingFace Hub."),op=g(),Ut=a("div"),D(va.$$.fragment),ap=g(),Ps=a("p"),np=r("Tag a given commit of a repo on the Hub."),sp=g(),He=a("div"),D($a.$$.fragment),rp=g(),Os=a("p"),ip=r("Get info on one specific dataset on huggingface.co."),lp=g(),Ls=a("p"),cp=r("Dataset can be private if you pass an acceptable token."),pp=g(),D(Vt.$$.fragment),gp=g(),Xe=a("div"),D(ya.$$.fragment),dp=g(),Rs=a("p"),hp=r("Deletes a file in the given repo."),up=g(),D(zt.$$.fragment),fp=g(),Ye=a("div"),D(Ea.$$.fragment),mp=g(),Cs=a("p"),_p=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),bp=g(),D(Wt.$$.fragment),vp=g(),Ze=a("div"),D(wa.$$.fragment),$p=g(),Ss=a("p"),yp=r("Edits a comment on a Discussion / Pull Request."),Ep=g(),D(Gt.$$.fragment),wp=g(),Bt=a("div"),D(ka.$$.fragment),kp=g(),Ms=a("p"),Ap=r("Gets all valid dataset tags as a nested namespace object."),xp=g(),qe=a("div"),D(Aa.$$.fragment),Dp=g(),Us=a("p"),Hp=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),qp=g(),os=a("p"),Ip=r("Returns: "),as=a("a"),jp=r("DiscussionWithDetails"),Np=g(),D(Kt.$$.fragment),Fp=g(),Jt=a("div"),D(xa.$$.fragment),Tp=g(),Vs=a("p"),Pp=r(`Returns the repository name for a given model ID and optional
organization.`),Op=g(),Qt=a("div"),D(Da.$$.fragment),Lp=g(),zs=a("p"),Rp=r("Gets all valid model tags as a nested namespace object"),Cp=g(),$e=a("div"),D(Ha.$$.fragment),Sp=g(),Ws=a("p"),Mp=r("Fetches Discussions and Pull Requests for the given repo."),Up=g(),Gs=a("p"),Vp=r("Example:"),zp=g(),D(Xt.$$.fragment),Wp=g(),D(Yt.$$.fragment),Gp=g(),Ie=a("div"),D(qa.$$.fragment),Bp=g(),Bs=a("p"),Kp=r("Hides a comment on a Discussion / Pull Request."),Jp=g(),D(Zt.$$.fragment),Qp=g(),D(eo.$$.fragment),Xp=g(),je=a("div"),D(Ia.$$.fragment),Yp=g(),Ks=a("p"),Zp=r("Get the public list of all the datasets on huggingface.co"),eg=g(),D(to.$$.fragment),tg=g(),D(oo.$$.fragment),og=g(),ao=a("div"),D(ja.$$.fragment),ag=g(),Js=a("p"),ng=r("Get the public list of all the metrics on huggingface.co"),sg=g(),ye=a("div"),D(Na.$$.fragment),rg=g(),Qs=a("p"),ig=r("Get the public list of all the models on huggingface.co"),lg=g(),Fa=a("p"),cg=r("Returns: List of "),ns=a("a"),pg=r("huggingface_hub.hf_api.ModelInfo"),gg=r(" objects"),dg=g(),D(no.$$.fragment),hg=g(),D(so.$$.fragment),ug=g(),ro=a("div"),D(Ta.$$.fragment),fg=g(),Xs=a("p"),mg=r("Get the list of files in a given repo."),_g=g(),io=a("div"),D(Pa.$$.fragment),bg=g(),Ys=a("p"),vg=r("Get the public list of all Spaces on huggingface.co"),$g=g(),et=a("div"),D(Oa.$$.fragment),yg=g(),Zs=a("p"),Eg=r("Merges a Pull Request."),wg=g(),D(lo.$$.fragment),kg=g(),Ne=a("div"),D(La.$$.fragment),Ag=g(),er=a("p"),xg=r("Get info on one specific model on huggingface.co"),Dg=g(),tr=a("p"),Hg=r("Model can be private if you pass an acceptable token or are logged in."),qg=g(),D(co.$$.fragment),Ig=g(),Fe=a("div"),D(Ra.$$.fragment),jg=g(),or=a("p"),Ng=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Fg=g(),Ca=a("p"),Tg=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),Sa=a("a"),Pg=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Og=r("."),Lg=g(),D(po.$$.fragment),Rg=g(),Te=a("div"),D(Ma.$$.fragment),Cg=g(),ar=a("p"),Sg=r("Renames a Discussion."),Mg=g(),D(go.$$.fragment),Ug=g(),D(ho.$$.fragment),Vg=g(),tt=a("div"),D(Ua.$$.fragment),zg=g(),nr=a("p"),Wg=r("Get the info object for a given repo of a given type."),Gg=g(),D(uo.$$.fragment),Bg=g(),fo=a("div"),D(Va.$$.fragment),Kg=g(),sr=a("p"),Jg=r(`Saves the passed access token so git can correctly authenticate the
user.`),Qg=g(),Pe=a("div"),D(za.$$.fragment),Xg=g(),rr=a("p"),Yg=r("Get info on one specific Space on huggingface.co."),Zg=g(),ir=a("p"),ed=r("Space can be private if you pass an acceptable token."),td=g(),D(mo.$$.fragment),od=g(),_o=a("div"),D(Wa.$$.fragment),ad=g(),lr=a("p"),nd=r("Resets the user\u2019s access token."),sd=g(),ot=a("div"),D(Ga.$$.fragment),rd=g(),cr=a("p"),id=r("Update the visibility setting of a repository."),ld=g(),D(bo.$$.fragment),cd=g(),Ee=a("div"),D(Ba.$$.fragment),pd=g(),pr=a("p"),gd=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),dd=g(),D(vo.$$.fragment),hd=g(),D($o.$$.fragment),ud=g(),D(yo.$$.fragment),fd=g(),re=a("div"),D(Ka.$$.fragment),md=g(),gr=a("p"),_d=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),bd=g(),dr=a("p"),vd=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),$d=g(),ue=a("p"),yd=r("Use the "),hr=a("code"),Ed=r("allow_patterns"),wd=r(" and "),ur=a("code"),kd=r("ignore_patterns"),Ad=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Ja=a("a"),xd=r("here"),Dd=r(`. If both
`),fr=a("code"),Hd=r("allow_patterns"),qd=r(" and "),mr=a("code"),Id=r("ignore_patterns"),jd=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Nd=g(),Qa=a("p"),Fd=r("Uses "),_r=a("code"),Td=r("HfApi.create_commit"),Pd=r(" under the hood."),Od=g(),D(Eo.$$.fragment),Ld=g(),D(wo.$$.fragment),Rd=g(),D(ko.$$.fragment),Cd=g(),Ao=a("div"),D(Xa.$$.fragment),Sd=g(),br=a("p"),Md=r("Call HF API to know \u201Cwhoami\u201D."),zi=g(),ht=a("h3"),xo=a("a"),vr=a("span"),D(Ya.$$.fragment),Ud=g(),$r=a("span"),Vd=r("ModelInfo"),Wi=g(),ut=a("div"),D(Za.$$.fragment),zd=g(),yr=a("p"),Wd=r("Info about a model accessible from huggingface.co"),Gi=g(),ft=a("h3"),Do=a("a"),Er=a("span"),D(en.$$.fragment),Gd=g(),wr=a("span"),Bd=r("DatasetInfo"),Bi=g(),mt=a("div"),D(tn.$$.fragment),Kd=g(),kr=a("p"),Jd=r("Info about a dataset accessible from huggingface.co"),Ki=g(),_t=a("h3"),Ho=a("a"),Ar=a("span"),D(on.$$.fragment),Qd=g(),xr=a("span"),Xd=r("SpaceInfo"),Ji=g(),Ce=a("div"),D(an.$$.fragment),Yd=g(),Dr=a("p"),Zd=r("Info about a Space accessible from huggingface.co"),eh=g(),Hr=a("p"),th=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Qi=g(),bt=a("h3"),qo=a("a"),qr=a("span"),D(nn.$$.fragment),oh=g(),Ir=a("span"),ah=r("RepoFile"),Xi=g(),vt=a("div"),D(sn.$$.fragment),nh=g(),jr=a("p"),sh=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Yi=g(),$t=a("h3"),Io=a("a"),Nr=a("span"),D(rn.$$.fragment),rh=g(),Fr=a("span"),ih=r("CommitInfo"),Zi=g(),Se=a("div"),D(ln.$$.fragment),lh=g(),Tr=a("p"),ch=r("Data structure containing information about a newly created commit."),ph=g(),cn=a("p"),gh=r("Returned by "),ss=a("a"),dh=r("create_commit()"),hh=r("."),el=g(),yt=a("h2"),jo=a("a"),Pr=a("span"),D(pn.$$.fragment),uh=g(),rs=a("span"),Or=a("code"),fh=r("create_commit"),mh=r(" API"),tl=g(),No=a("p"),_h=r("Below are the supported values for "),Lr=a("code"),bh=r("CommitOperation()"),vh=r(":"),ol=g(),fe=a("div"),D(gn.$$.fragment),$h=g(),Rr=a("p"),yh=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),Eh=g(),we=a("div"),D(dn.$$.fragment),wh=g(),hn=a("p"),kh=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Cr=a("code"),Ah=r("path_or_fileobj"),xh=r("."),Dh=g(),un=a("p"),Hh=r("Triggers "),Sr=a("code"),qh=r("self.validate"),Ih=r("."),jh=g(),fn=a("p"),Nh=r("Raises: "),Mr=a("code"),Fh=r("ValueError"),Th=r(" if self.validate fails"),Ph=g(),D(Fo.$$.fragment),Oh=g(),at=a("div"),D(mn.$$.fragment),Lh=g(),is=a("p"),Rh=r("The base64-encoded content of "),Ur=a("code"),Ch=r("path_or_fileobj"),Sh=g(),ls=a("p"),Mh=r("Returns: "),Vr=a("code"),Uh=r("bytes"),Vh=g(),Oe=a("div"),D(_n.$$.fragment),zh=g(),bn=a("p"),Wh=r("Ensures "),zr=a("code"),Gh=r("path_or_fileobj"),Bh=r(" is valid:"),Kh=g(),Et=a("ul"),nt=a("li"),Jh=r("Ensures it is either a "),Wr=a("code"),Qh=r("str"),Xh=r(", "),Gr=a("code"),Yh=r("bytes"),Zh=r(" or an instance of "),Br=a("code"),eu=r("io.BufferedIOBase"),tu=g(),vn=a("li"),ou=r("If it is a "),Kr=a("code"),au=r("str"),nu=r(", ensure that it is a file path and that the file exists"),su=g(),st=a("li"),ru=r("If it is an instance of "),Jr=a("code"),iu=r("io.BufferedIOBase"),lu=r(", ensures it supports "),Qr=a("code"),cu=r("seek()"),pu=r(" and "),Xr=a("code"),gu=r("tell()"),du=g(),wt=a("p"),hu=r("Raises: "),Yr=a("code"),uu=r("ValueError"),fu=r(" if "),Zr=a("code"),mu=r("path_or_fileobj"),_u=r(" is not valid"),al=g(),kt=a("div"),D($n.$$.fragment),bu=g(),ei=a("p"),vu=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),nl=g(),At=a("h2"),To=a("a"),ti=a("span"),D(yn.$$.fragment),$u=g(),oi=a("span"),yu=r("Hugging Face local storage"),sl=g(),En=a("p"),ai=a("code"),Eu=r("huggingface_hub"),wu=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),rl=g(),Po=a("p"),ku=r("It does this using the "),cs=a("a"),Au=r("HfFolder"),xu=r(" utility, which saves data at the root of the user."),il=g(),Ae=a("div"),D(wn.$$.fragment),Du=g(),Oo=a("div"),D(kn.$$.fragment),Hu=g(),ni=a("p"),qu=r("Deletes the token from storage. Does not fail if token does not exist."),Iu=g(),rt=a("div"),D(An.$$.fragment),ju=g(),si=a("p"),Nu=r("Get token or None if not existent."),Fu=g(),xn=a("p"),Tu=r(`Note that a token can be also provided using the
`),ri=a("code"),Pu=r("HUGGING_FACE_HUB_TOKEN"),Ou=r(" environment variable."),Lu=g(),Lo=a("div"),D(Dn.$$.fragment),Ru=g(),ii=a("p"),Cu=r("Save token, creating folder as needed."),ll=g(),xt=a("h2"),Ro=a("a"),li=a("span"),D(Hn.$$.fragment),Su=g(),ci=a("span"),Mu=r("Filtering helpers"),cl=g(),Co=a("p"),Uu=r("Some helpers to filter repositories on the Hub are available in the "),pi=a("code"),Vu=r("huggingface_hub"),zu=r(" package."),pl=g(),Dt=a("h3"),So=a("a"),gi=a("span"),D(qn.$$.fragment),Wu=g(),di=a("span"),Gu=r("DatasetFilter"),gl=g(),Me=a("div"),D(In.$$.fragment),Bu=g(),hi=a("p"),Ku=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ju=g(),D(Mo.$$.fragment),dl=g(),Ht=a("h3"),Uo=a("a"),ui=a("span"),D(jn.$$.fragment),Qu=g(),fi=a("span"),Xu=r("ModelFilter"),hl=g(),Ue=a("div"),D(Nn.$$.fragment),Yu=g(),mi=a("p"),Zu=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ef=g(),D(Vo.$$.fragment),ul=g(),qt=a("h3"),zo=a("a"),_i=a("span"),D(Fn.$$.fragment),tf=g(),bi=a("span"),of=r("DatasetSearchArguments"),fl=g(),Ve=a("div"),D(Tn.$$.fragment),af=g(),vi=a("p"),nf=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),sf=g(),D(Wo.$$.fragment),ml=g(),It=a("h3"),Go=a("a"),$i=a("span"),D(Pn.$$.fragment),rf=g(),yi=a("span"),lf=r("ModelSearchArguments"),_l=g(),ze=a("div"),D(On.$$.fragment),cf=g(),Ei=a("p"),pf=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),gf=g(),D(Bo.$$.fragment),this.h()},l(o){const E=q_('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=d(o),f=n(o,"H1",{class:!0});var Ln=s(f);c=n(Ln,"A",{id:!0,class:!0,href:!0});var wi=s(c);h=n(wi,"SPAN",{});var ki=s(h);H(l.$$.fragment,ki),ki.forEach(t),wi.forEach(t),u=d(Ln),P=n(Ln,"SPAN",{});var Ai=s(P);v=i(Ai,"Hugging Face Hub API"),Ai.forEach(t),Ln.forEach(t),x=d(o),w=n(o,"P",{});var Rn=s(w);y=i(Rn,"Below is the documentation for the "),k=n(Rn,"CODE",{});var xi=s(k);O=i(xi,"HfApi"),xi.forEach(t),T=i(Rn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Rn.forEach(t),L=d(o),_=n(o,"P",{});var Cn=s(_);F=i(Cn,"All methods from the "),S=n(Cn,"CODE",{});var Di=s(S);z=i(Di,"HfApi"),Di.forEach(t),R=i(Cn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Cn.forEach(t),K=d(o),G=n(o,"P",{});var Hi=s(G);A=i(Hi,"The following approach uses the method from the root of the package:"),Hi.forEach(t),M=d(o),H(C.$$.fragment,o),Y=d(o),te=n(o,"P",{});var Sn=s(te);Z=i(Sn,"The following approach uses the "),J=n(Sn,"CODE",{});var qi=s(J);ee=i(qi,"HfApi"),qi.forEach(t),ae=i(Sn," class:"),Sn.forEach(t),B=d(o),H(X.$$.fragment,o),oe=d(o),se=n(o,"P",{});var Mn=s(se);Be=i(Mn,"Using the "),be=n(Mn,"CODE",{});var Ii=s(be);dt=i(Ii,"HfApi"),Ii.forEach(t),Ke=i(Mn," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Mn.forEach(t),Re=d(o),he=n(o,"H3",{class:!0});var Un=s(he);ve=n(Un,"A",{id:!0,class:!0,href:!0});var ji=s(ve);Nt=n(ji,"SPAN",{});var Ni=s(Nt);H(Je.$$.fragment,Ni),Ni.forEach(t),ji.forEach(t),na=d(Un),Ft=n(Un,"SPAN",{});var Fi=s(Ft);sa=i(Fi,"HfApi"),Fi.forEach(t),Un.forEach(t),ra=d(o),V=n(o,"DIV",{class:!0});var W=s(V);H(ia.$$.fragment,W),ic=d(W),xe=n(W,"DIV",{class:!0});var We=s(xe);H(la.$$.fragment,We),lc=d(We),Ds=n(We,"P",{});var Ti=s(Ds);cc=i(Ti,"Closes or re-opens a Discussion or Pull Request."),Ti.forEach(t),pc=d(We),H(Tt.$$.fragment,We),gc=d(We),H(Pt.$$.fragment,We),We.forEach(t),dc=d(W),De=n(W,"DIV",{class:!0});var Ge=s(De);H(ca.$$.fragment,Ge),hc=d(Ge),Hs=n(Ge,"P",{});var Pi=s(Hs);uc=i(Pi,"Creates a new comment on the given Discussion."),Pi.forEach(t),fc=d(Ge),H(Ot.$$.fragment,Ge),mc=d(Ge),H(Lt.$$.fragment,Ge),Ge.forEach(t),_c=d(W),Qe=n(W,"DIV",{class:!0});var jt=s(Qe);H(pa.$$.fragment,jt),bc=d(jt),qs=n(jt,"P",{});var Oi=s(qs);vc=i(Oi,"Creates a commit in the given repo, deleting & uploading files as needed."),Oi.forEach(t),$c=d(jt),H(Rt.$$.fragment,jt),jt.forEach(t),yc=d(W),le=n(W,"DIV",{class:!0});var me=s(le);H(ga.$$.fragment,me),Ec=d(me),Is=n(me,"P",{});var Li=s(Is);wc=i(Li,"Creates a Discussion or Pull Request."),Li.forEach(t),kc=d(me),da=n(me,"P",{});var Vn=s(da);Ac=i(Vn,"Pull Requests created programmatically will be in "),js=n(Vn,"CODE",{});var Ri=s(js);xc=i(Ri,'"draft"'),Ri.forEach(t),Dc=i(Vn," status."),Vn.forEach(t),Hc=d(me),ha=n(me,"P",{});var zn=s(ha);qc=i(zn,"Creating a Pull Request with changes can also be done at once with "),Qn=n(zn,"A",{href:!0});var Ci=s(Qn);Ic=i(Ci,"HfApi.create_commit()"),Ci.forEach(t),jc=i(zn,"."),zn.forEach(t),Nc=d(me),Xn=n(me,"P",{});var ps=s(Xn);Fc=i(ps,"Returns: "),Yn=n(ps,"A",{href:!0});var Si=s(Yn);Tc=i(Si,"DiscussionWithDetails"),Si.forEach(t),ps.forEach(t),Pc=d(me),H(Ct.$$.fragment,me),me.forEach(t),Oc=d(W),ce=n(W,"DIV",{class:!0});var _e=s(ce);H(ua.$$.fragment,_e),Lc=d(_e),fa=n(_e,"P",{});var Wn=s(fa);Rc=i(Wn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Ns=n(Wn,"CODE",{});var Mi=s(Ns);Cc=i(Mi,'"draft"'),Mi.forEach(t),Sc=i(Wn," status."),Wn.forEach(t),Mc=d(_e),ma=n(_e,"P",{});var Gn=s(ma);Uc=i(Gn,"Creating a Pull Request with changes can also be done at once with "),Zn=n(Gn,"A",{href:!0});var Ui=s(Zn);Vc=i(Ui,"HfApi.create_commit()"),Ui.forEach(t),zc=i(Gn,";"),Gn.forEach(t),Wc=d(_e),_a=n(_e,"P",{});var Bn=s(_a);Gc=i(Bn,"This is a wrapper around "),Fs=n(Bn,"CODE",{});var Vi=s(Fs);Bc=i(Vi,"HfApi.create_discusssion"),Vi.forEach(t),Kc=i(Bn,"."),Bn.forEach(t),Jc=d(_e),es=n(_e,"P",{});var df=s(es);Qc=i(df,"Returns: "),ts=n(df,"A",{href:!0});var bf=s(ts);Xc=i(bf,"DiscussionWithDetails"),bf.forEach(t),df.forEach(t),Yc=d(_e),H(St.$$.fragment,_e),_e.forEach(t),Zc=d(W),Mt=n(W,"DIV",{class:!0});var vl=s(Mt);H(ba.$$.fragment,vl),ep=d(vl),Ts=n(vl,"P",{});var vf=s(Ts);tp=i(vf,"Create an empty repo on the HuggingFace Hub."),vf.forEach(t),vl.forEach(t),op=d(W),Ut=n(W,"DIV",{class:!0});var $l=s(Ut);H(va.$$.fragment,$l),ap=d($l),Ps=n($l,"P",{});var $f=s(Ps);np=i($f,"Tag a given commit of a repo on the Hub."),$f.forEach(t),$l.forEach(t),sp=d(W),He=n(W,"DIV",{class:!0});var Ko=s(He);H($a.$$.fragment,Ko),rp=d(Ko),Os=n(Ko,"P",{});var yf=s(Os);ip=i(yf,"Get info on one specific dataset on huggingface.co."),yf.forEach(t),lp=d(Ko),Ls=n(Ko,"P",{});var Ef=s(Ls);cp=i(Ef,"Dataset can be private if you pass an acceptable token."),Ef.forEach(t),pp=d(Ko),H(Vt.$$.fragment,Ko),Ko.forEach(t),gp=d(W),Xe=n(W,"DIV",{class:!0});var gs=s(Xe);H(ya.$$.fragment,gs),dp=d(gs),Rs=n(gs,"P",{});var wf=s(Rs);hp=i(wf,"Deletes a file in the given repo."),wf.forEach(t),up=d(gs),H(zt.$$.fragment,gs),gs.forEach(t),fp=d(W),Ye=n(W,"DIV",{class:!0});var ds=s(Ye);H(Ea.$$.fragment,ds),mp=d(ds),Cs=n(ds,"P",{});var kf=s(Cs);_p=i(kf,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),kf.forEach(t),bp=d(ds),H(Wt.$$.fragment,ds),ds.forEach(t),vp=d(W),Ze=n(W,"DIV",{class:!0});var hs=s(Ze);H(wa.$$.fragment,hs),$p=d(hs),Ss=n(hs,"P",{});var Af=s(Ss);yp=i(Af,"Edits a comment on a Discussion / Pull Request."),Af.forEach(t),Ep=d(hs),H(Gt.$$.fragment,hs),hs.forEach(t),wp=d(W),Bt=n(W,"DIV",{class:!0});var yl=s(Bt);H(ka.$$.fragment,yl),kp=d(yl),Ms=n(yl,"P",{});var xf=s(Ms);Ap=i(xf,"Gets all valid dataset tags as a nested namespace object."),xf.forEach(t),yl.forEach(t),xp=d(W),qe=n(W,"DIV",{class:!0});var Jo=s(qe);H(Aa.$$.fragment,Jo),Dp=d(Jo),Us=n(Jo,"P",{});var Df=s(Us);Hp=i(Df,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Df.forEach(t),qp=d(Jo),os=n(Jo,"P",{});var hf=s(os);Ip=i(hf,"Returns: "),as=n(hf,"A",{href:!0});var Hf=s(as);jp=i(Hf,"DiscussionWithDetails"),Hf.forEach(t),hf.forEach(t),Np=d(Jo),H(Kt.$$.fragment,Jo),Jo.forEach(t),Fp=d(W),Jt=n(W,"DIV",{class:!0});var El=s(Jt);H(xa.$$.fragment,El),Tp=d(El),Vs=n(El,"P",{});var qf=s(Vs);Pp=i(qf,`Returns the repository name for a given model ID and optional
organization.`),qf.forEach(t),El.forEach(t),Op=d(W),Qt=n(W,"DIV",{class:!0});var wl=s(Qt);H(Da.$$.fragment,wl),Lp=d(wl),zs=n(wl,"P",{});var If=s(zs);Rp=i(If,"Gets all valid model tags as a nested namespace object"),If.forEach(t),wl.forEach(t),Cp=d(W),$e=n(W,"DIV",{class:!0});var it=s($e);H(Ha.$$.fragment,it),Sp=d(it),Ws=n(it,"P",{});var jf=s(Ws);Mp=i(jf,"Fetches Discussions and Pull Requests for the given repo."),jf.forEach(t),Up=d(it),Gs=n(it,"P",{});var Nf=s(Gs);Vp=i(Nf,"Example:"),Nf.forEach(t),zp=d(it),H(Xt.$$.fragment,it),Wp=d(it),H(Yt.$$.fragment,it),it.forEach(t),Gp=d(W),Ie=n(W,"DIV",{class:!0});var Qo=s(Ie);H(qa.$$.fragment,Qo),Bp=d(Qo),Bs=n(Qo,"P",{});var Ff=s(Bs);Kp=i(Ff,"Hides a comment on a Discussion / Pull Request."),Ff.forEach(t),Jp=d(Qo),H(Zt.$$.fragment,Qo),Qp=d(Qo),H(eo.$$.fragment,Qo),Qo.forEach(t),Xp=d(W),je=n(W,"DIV",{class:!0});var Xo=s(je);H(Ia.$$.fragment,Xo),Yp=d(Xo),Ks=n(Xo,"P",{});var Tf=s(Ks);Zp=i(Tf,"Get the public list of all the datasets on huggingface.co"),Tf.forEach(t),eg=d(Xo),H(to.$$.fragment,Xo),tg=d(Xo),H(oo.$$.fragment,Xo),Xo.forEach(t),og=d(W),ao=n(W,"DIV",{class:!0});var kl=s(ao);H(ja.$$.fragment,kl),ag=d(kl),Js=n(kl,"P",{});var Pf=s(Js);ng=i(Pf,"Get the public list of all the metrics on huggingface.co"),Pf.forEach(t),kl.forEach(t),sg=d(W),ye=n(W,"DIV",{class:!0});var lt=s(ye);H(Na.$$.fragment,lt),rg=d(lt),Qs=n(lt,"P",{});var Of=s(Qs);ig=i(Of,"Get the public list of all the models on huggingface.co"),Of.forEach(t),lg=d(lt),Fa=n(lt,"P",{});var Al=s(Fa);cg=i(Al,"Returns: List of "),ns=n(Al,"A",{href:!0});var Lf=s(ns);pg=i(Lf,"huggingface_hub.hf_api.ModelInfo"),Lf.forEach(t),gg=i(Al," objects"),Al.forEach(t),dg=d(lt),H(no.$$.fragment,lt),hg=d(lt),H(so.$$.fragment,lt),lt.forEach(t),ug=d(W),ro=n(W,"DIV",{class:!0});var xl=s(ro);H(Ta.$$.fragment,xl),fg=d(xl),Xs=n(xl,"P",{});var Rf=s(Xs);mg=i(Rf,"Get the list of files in a given repo."),Rf.forEach(t),xl.forEach(t),_g=d(W),io=n(W,"DIV",{class:!0});var Dl=s(io);H(Pa.$$.fragment,Dl),bg=d(Dl),Ys=n(Dl,"P",{});var Cf=s(Ys);vg=i(Cf,"Get the public list of all Spaces on huggingface.co"),Cf.forEach(t),Dl.forEach(t),$g=d(W),et=n(W,"DIV",{class:!0});var us=s(et);H(Oa.$$.fragment,us),yg=d(us),Zs=n(us,"P",{});var Sf=s(Zs);Eg=i(Sf,"Merges a Pull Request."),Sf.forEach(t),wg=d(us),H(lo.$$.fragment,us),us.forEach(t),kg=d(W),Ne=n(W,"DIV",{class:!0});var Yo=s(Ne);H(La.$$.fragment,Yo),Ag=d(Yo),er=n(Yo,"P",{});var Mf=s(er);xg=i(Mf,"Get info on one specific model on huggingface.co"),Mf.forEach(t),Dg=d(Yo),tr=n(Yo,"P",{});var Uf=s(tr);Hg=i(Uf,"Model can be private if you pass an acceptable token or are logged in."),Uf.forEach(t),qg=d(Yo),H(co.$$.fragment,Yo),Yo.forEach(t),Ig=d(W),Fe=n(W,"DIV",{class:!0});var Zo=s(Fe);H(Ra.$$.fragment,Zo),jg=d(Zo),or=n(Zo,"P",{});var Vf=s(or);Ng=i(Vf,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Vf.forEach(t),Fg=d(Zo),Ca=n(Zo,"P",{});var Hl=s(Ca);Tg=i(Hl,`Note there are certain limitations. For more information about moving
repositories, please see
`),Sa=n(Hl,"A",{href:!0,rel:!0});var zf=s(Sa);Pg=i(zf,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),zf.forEach(t),Og=i(Hl,"."),Hl.forEach(t),Lg=d(Zo),H(po.$$.fragment,Zo),Zo.forEach(t),Rg=d(W),Te=n(W,"DIV",{class:!0});var ea=s(Te);H(Ma.$$.fragment,ea),Cg=d(ea),ar=n(ea,"P",{});var Wf=s(ar);Sg=i(Wf,"Renames a Discussion."),Wf.forEach(t),Mg=d(ea),H(go.$$.fragment,ea),Ug=d(ea),H(ho.$$.fragment,ea),ea.forEach(t),Vg=d(W),tt=n(W,"DIV",{class:!0});var fs=s(tt);H(Ua.$$.fragment,fs),zg=d(fs),nr=n(fs,"P",{});var Gf=s(nr);Wg=i(Gf,"Get the info object for a given repo of a given type."),Gf.forEach(t),Gg=d(fs),H(uo.$$.fragment,fs),fs.forEach(t),Bg=d(W),fo=n(W,"DIV",{class:!0});var ql=s(fo);H(Va.$$.fragment,ql),Kg=d(ql),sr=n(ql,"P",{});var Bf=s(sr);Jg=i(Bf,`Saves the passed access token so git can correctly authenticate the
user.`),Bf.forEach(t),ql.forEach(t),Qg=d(W),Pe=n(W,"DIV",{class:!0});var ta=s(Pe);H(za.$$.fragment,ta),Xg=d(ta),rr=n(ta,"P",{});var Kf=s(rr);Yg=i(Kf,"Get info on one specific Space on huggingface.co."),Kf.forEach(t),Zg=d(ta),ir=n(ta,"P",{});var Jf=s(ir);ed=i(Jf,"Space can be private if you pass an acceptable token."),Jf.forEach(t),td=d(ta),H(mo.$$.fragment,ta),ta.forEach(t),od=d(W),_o=n(W,"DIV",{class:!0});var Il=s(_o);H(Wa.$$.fragment,Il),ad=d(Il),lr=n(Il,"P",{});var Qf=s(lr);nd=i(Qf,"Resets the user\u2019s access token."),Qf.forEach(t),Il.forEach(t),sd=d(W),ot=n(W,"DIV",{class:!0});var ms=s(ot);H(Ga.$$.fragment,ms),rd=d(ms),cr=n(ms,"P",{});var Xf=s(cr);id=i(Xf,"Update the visibility setting of a repository."),Xf.forEach(t),ld=d(ms),H(bo.$$.fragment,ms),ms.forEach(t),cd=d(W),Ee=n(W,"DIV",{class:!0});var ct=s(Ee);H(Ba.$$.fragment,ct),pd=d(ct),pr=n(ct,"P",{});var Yf=s(pr);gd=i(Yf,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Yf.forEach(t),dd=d(ct),H(vo.$$.fragment,ct),hd=d(ct),H($o.$$.fragment,ct),ud=d(ct),H(yo.$$.fragment,ct),ct.forEach(t),fd=d(W),re=n(W,"DIV",{class:!0});var pe=s(re);H(Ka.$$.fragment,pe),md=d(pe),gr=n(pe,"P",{});var Zf=s(gr);_d=i(Zf,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Zf.forEach(t),bd=d(pe),dr=n(pe,"P",{});var em=s(dr);vd=i(em,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),em.forEach(t),$d=d(pe),ue=n(pe,"P",{});var Le=s(ue);yd=i(Le,"Use the "),hr=n(Le,"CODE",{});var tm=s(hr);Ed=i(tm,"allow_patterns"),tm.forEach(t),wd=i(Le," and "),ur=n(Le,"CODE",{});var om=s(ur);kd=i(om,"ignore_patterns"),om.forEach(t),Ad=i(Le,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Ja=n(Le,"A",{href:!0,rel:!0});var am=s(Ja);xd=i(am,"here"),am.forEach(t),Dd=i(Le,`. If both
`),fr=n(Le,"CODE",{});var nm=s(fr);Hd=i(nm,"allow_patterns"),nm.forEach(t),qd=i(Le," and "),mr=n(Le,"CODE",{});var sm=s(mr);Id=i(sm,"ignore_patterns"),sm.forEach(t),jd=i(Le,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Le.forEach(t),Nd=d(pe),Qa=n(pe,"P",{});var jl=s(Qa);Fd=i(jl,"Uses "),_r=n(jl,"CODE",{});var rm=s(_r);Td=i(rm,"HfApi.create_commit"),rm.forEach(t),Pd=i(jl," under the hood."),jl.forEach(t),Od=d(pe),H(Eo.$$.fragment,pe),Ld=d(pe),H(wo.$$.fragment,pe),Rd=d(pe),H(ko.$$.fragment,pe),pe.forEach(t),Cd=d(W),Ao=n(W,"DIV",{class:!0});var Nl=s(Ao);H(Xa.$$.fragment,Nl),Sd=d(Nl),br=n(Nl,"P",{});var im=s(br);Md=i(im,"Call HF API to know \u201Cwhoami\u201D."),im.forEach(t),Nl.forEach(t),W.forEach(t),zi=d(o),ht=n(o,"H3",{class:!0});var Fl=s(ht);xo=n(Fl,"A",{id:!0,class:!0,href:!0});var lm=s(xo);vr=n(lm,"SPAN",{});var cm=s(vr);H(Ya.$$.fragment,cm),cm.forEach(t),lm.forEach(t),Ud=d(Fl),$r=n(Fl,"SPAN",{});var pm=s($r);Vd=i(pm,"ModelInfo"),pm.forEach(t),Fl.forEach(t),Wi=d(o),ut=n(o,"DIV",{class:!0});var Tl=s(ut);H(Za.$$.fragment,Tl),zd=d(Tl),yr=n(Tl,"P",{});var gm=s(yr);Wd=i(gm,"Info about a model accessible from huggingface.co"),gm.forEach(t),Tl.forEach(t),Gi=d(o),ft=n(o,"H3",{class:!0});var Pl=s(ft);Do=n(Pl,"A",{id:!0,class:!0,href:!0});var dm=s(Do);Er=n(dm,"SPAN",{});var hm=s(Er);H(en.$$.fragment,hm),hm.forEach(t),dm.forEach(t),Gd=d(Pl),wr=n(Pl,"SPAN",{});var um=s(wr);Bd=i(um,"DatasetInfo"),um.forEach(t),Pl.forEach(t),Bi=d(o),mt=n(o,"DIV",{class:!0});var Ol=s(mt);H(tn.$$.fragment,Ol),Kd=d(Ol),kr=n(Ol,"P",{});var fm=s(kr);Jd=i(fm,"Info about a dataset accessible from huggingface.co"),fm.forEach(t),Ol.forEach(t),Ki=d(o),_t=n(o,"H3",{class:!0});var Ll=s(_t);Ho=n(Ll,"A",{id:!0,class:!0,href:!0});var mm=s(Ho);Ar=n(mm,"SPAN",{});var _m=s(Ar);H(on.$$.fragment,_m),_m.forEach(t),mm.forEach(t),Qd=d(Ll),xr=n(Ll,"SPAN",{});var bm=s(xr);Xd=i(bm,"SpaceInfo"),bm.forEach(t),Ll.forEach(t),Ji=d(o),Ce=n(o,"DIV",{class:!0});var _s=s(Ce);H(an.$$.fragment,_s),Yd=d(_s),Dr=n(_s,"P",{});var vm=s(Dr);Zd=i(vm,"Info about a Space accessible from huggingface.co"),vm.forEach(t),eh=d(_s),Hr=n(_s,"P",{});var $m=s(Hr);th=i($m,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),$m.forEach(t),_s.forEach(t),Qi=d(o),bt=n(o,"H3",{class:!0});var Rl=s(bt);qo=n(Rl,"A",{id:!0,class:!0,href:!0});var ym=s(qo);qr=n(ym,"SPAN",{});var Em=s(qr);H(nn.$$.fragment,Em),Em.forEach(t),ym.forEach(t),oh=d(Rl),Ir=n(Rl,"SPAN",{});var wm=s(Ir);ah=i(wm,"RepoFile"),wm.forEach(t),Rl.forEach(t),Xi=d(o),vt=n(o,"DIV",{class:!0});var Cl=s(vt);H(sn.$$.fragment,Cl),nh=d(Cl),jr=n(Cl,"P",{});var km=s(jr);sh=i(km,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),km.forEach(t),Cl.forEach(t),Yi=d(o),$t=n(o,"H3",{class:!0});var Sl=s($t);Io=n(Sl,"A",{id:!0,class:!0,href:!0});var Am=s(Io);Nr=n(Am,"SPAN",{});var xm=s(Nr);H(rn.$$.fragment,xm),xm.forEach(t),Am.forEach(t),rh=d(Sl),Fr=n(Sl,"SPAN",{});var Dm=s(Fr);ih=i(Dm,"CommitInfo"),Dm.forEach(t),Sl.forEach(t),Zi=d(o),Se=n(o,"DIV",{class:!0});var bs=s(Se);H(ln.$$.fragment,bs),lh=d(bs),Tr=n(bs,"P",{});var Hm=s(Tr);ch=i(Hm,"Data structure containing information about a newly created commit."),Hm.forEach(t),ph=d(bs),cn=n(bs,"P",{});var Ml=s(cn);gh=i(Ml,"Returned by "),ss=n(Ml,"A",{href:!0});var qm=s(ss);dh=i(qm,"create_commit()"),qm.forEach(t),hh=i(Ml,"."),Ml.forEach(t),bs.forEach(t),el=d(o),yt=n(o,"H2",{class:!0});var Ul=s(yt);jo=n(Ul,"A",{id:!0,class:!0,href:!0});var Im=s(jo);Pr=n(Im,"SPAN",{});var jm=s(Pr);H(pn.$$.fragment,jm),jm.forEach(t),Im.forEach(t),uh=d(Ul),rs=n(Ul,"SPAN",{});var uf=s(rs);Or=n(uf,"CODE",{});var Nm=s(Or);fh=i(Nm,"create_commit"),Nm.forEach(t),mh=i(uf," API"),uf.forEach(t),Ul.forEach(t),tl=d(o),No=n(o,"P",{});var Vl=s(No);_h=i(Vl,"Below are the supported values for "),Lr=n(Vl,"CODE",{});var Fm=s(Lr);bh=i(Fm,"CommitOperation()"),Fm.forEach(t),vh=i(Vl,":"),Vl.forEach(t),ol=d(o),fe=n(o,"DIV",{class:!0});var pt=s(fe);H(gn.$$.fragment,pt),$h=d(pt),Rr=n(pt,"P",{});var Tm=s(Rr);yh=i(Tm,`Data structure holding necessary info to upload a file
to a repository on the Hub`),Tm.forEach(t),Eh=d(pt),we=n(pt,"DIV",{class:!0});var gt=s(we);H(dn.$$.fragment,gt),wh=d(gt),hn=n(gt,"P",{});var zl=s(hn);kh=i(zl,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Cr=n(zl,"CODE",{});var Pm=s(Cr);Ah=i(Pm,"path_or_fileobj"),Pm.forEach(t),xh=i(zl,"."),zl.forEach(t),Dh=d(gt),un=n(gt,"P",{});var Wl=s(un);Hh=i(Wl,"Triggers "),Sr=n(Wl,"CODE",{});var Om=s(Sr);qh=i(Om,"self.validate"),Om.forEach(t),Ih=i(Wl,"."),Wl.forEach(t),jh=d(gt),fn=n(gt,"P",{});var Gl=s(fn);Nh=i(Gl,"Raises: "),Mr=n(Gl,"CODE",{});var Lm=s(Mr);Fh=i(Lm,"ValueError"),Lm.forEach(t),Th=i(Gl," if self.validate fails"),Gl.forEach(t),Ph=d(gt),H(Fo.$$.fragment,gt),gt.forEach(t),Oh=d(pt),at=n(pt,"DIV",{class:!0});var vs=s(at);H(mn.$$.fragment,vs),Lh=d(vs),is=n(vs,"P",{});var ff=s(is);Rh=i(ff,"The base64-encoded content of "),Ur=n(ff,"CODE",{});var Rm=s(Ur);Ch=i(Rm,"path_or_fileobj"),Rm.forEach(t),ff.forEach(t),Sh=d(vs),ls=n(vs,"P",{});var mf=s(ls);Mh=i(mf,"Returns: "),Vr=n(mf,"CODE",{});var Cm=s(Vr);Uh=i(Cm,"bytes"),Cm.forEach(t),mf.forEach(t),vs.forEach(t),Vh=d(pt),Oe=n(pt,"DIV",{class:!0});var oa=s(Oe);H(_n.$$.fragment,oa),zh=d(oa),bn=n(oa,"P",{});var Bl=s(bn);Wh=i(Bl,"Ensures "),zr=n(Bl,"CODE",{});var Sm=s(zr);Gh=i(Sm,"path_or_fileobj"),Sm.forEach(t),Bh=i(Bl," is valid:"),Bl.forEach(t),Kh=d(oa),Et=n(oa,"UL",{});var $s=s(Et);nt=n($s,"LI",{});var Kn=s(nt);Jh=i(Kn,"Ensures it is either a "),Wr=n(Kn,"CODE",{});var Mm=s(Wr);Qh=i(Mm,"str"),Mm.forEach(t),Xh=i(Kn,", "),Gr=n(Kn,"CODE",{});var Um=s(Gr);Yh=i(Um,"bytes"),Um.forEach(t),Zh=i(Kn," or an instance of "),Br=n(Kn,"CODE",{});var Vm=s(Br);eu=i(Vm,"io.BufferedIOBase"),Vm.forEach(t),Kn.forEach(t),tu=d($s),vn=n($s,"LI",{});var Kl=s(vn);ou=i(Kl,"If it is a "),Kr=n(Kl,"CODE",{});var zm=s(Kr);au=i(zm,"str"),zm.forEach(t),nu=i(Kl,", ensure that it is a file path and that the file exists"),Kl.forEach(t),su=d($s),st=n($s,"LI",{});var Jn=s(st);ru=i(Jn,"If it is an instance of "),Jr=n(Jn,"CODE",{});var Wm=s(Jr);iu=i(Wm,"io.BufferedIOBase"),Wm.forEach(t),lu=i(Jn,", ensures it supports "),Qr=n(Jn,"CODE",{});var Gm=s(Qr);cu=i(Gm,"seek()"),Gm.forEach(t),pu=i(Jn," and "),Xr=n(Jn,"CODE",{});var Bm=s(Xr);gu=i(Bm,"tell()"),Bm.forEach(t),Jn.forEach(t),$s.forEach(t),du=d(oa),wt=n(oa,"P",{});var ys=s(wt);hu=i(ys,"Raises: "),Yr=n(ys,"CODE",{});var Km=s(Yr);uu=i(Km,"ValueError"),Km.forEach(t),fu=i(ys," if "),Zr=n(ys,"CODE",{});var Jm=s(Zr);mu=i(Jm,"path_or_fileobj"),Jm.forEach(t),_u=i(ys," is not valid"),ys.forEach(t),oa.forEach(t),pt.forEach(t),al=d(o),kt=n(o,"DIV",{class:!0});var Jl=s(kt);H($n.$$.fragment,Jl),bu=d(Jl),ei=n(Jl,"P",{});var Qm=s(ei);vu=i(Qm,`Data structure holding necessary info to delete
a file from a repository on the Hub`),Qm.forEach(t),Jl.forEach(t),nl=d(o),At=n(o,"H2",{class:!0});var Ql=s(At);To=n(Ql,"A",{id:!0,class:!0,href:!0});var Xm=s(To);ti=n(Xm,"SPAN",{});var Ym=s(ti);H(yn.$$.fragment,Ym),Ym.forEach(t),Xm.forEach(t),$u=d(Ql),oi=n(Ql,"SPAN",{});var Zm=s(oi);yu=i(Zm,"Hugging Face local storage"),Zm.forEach(t),Ql.forEach(t),sl=d(o),En=n(o,"P",{});var _f=s(En);ai=n(_f,"CODE",{});var e_=s(ai);Eu=i(e_,"huggingface_hub"),e_.forEach(t),wu=i(_f,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),_f.forEach(t),rl=d(o),Po=n(o,"P",{});var Xl=s(Po);ku=i(Xl,"It does this using the "),cs=n(Xl,"A",{href:!0});var t_=s(cs);Au=i(t_,"HfFolder"),t_.forEach(t),xu=i(Xl," utility, which saves data at the root of the user."),Xl.forEach(t),il=d(o),Ae=n(o,"DIV",{class:!0});var aa=s(Ae);H(wn.$$.fragment,aa),Du=d(aa),Oo=n(aa,"DIV",{class:!0});var Yl=s(Oo);H(kn.$$.fragment,Yl),Hu=d(Yl),ni=n(Yl,"P",{});var o_=s(ni);qu=i(o_,"Deletes the token from storage. Does not fail if token does not exist."),o_.forEach(t),Yl.forEach(t),Iu=d(aa),rt=n(aa,"DIV",{class:!0});var Es=s(rt);H(An.$$.fragment,Es),ju=d(Es),si=n(Es,"P",{});var a_=s(si);Nu=i(a_,"Get token or None if not existent."),a_.forEach(t),Fu=d(Es),xn=n(Es,"P",{});var Zl=s(xn);Tu=i(Zl,`Note that a token can be also provided using the
`),ri=n(Zl,"CODE",{});var n_=s(ri);Pu=i(n_,"HUGGING_FACE_HUB_TOKEN"),n_.forEach(t),Ou=i(Zl," environment variable."),Zl.forEach(t),Es.forEach(t),Lu=d(aa),Lo=n(aa,"DIV",{class:!0});var ec=s(Lo);H(Dn.$$.fragment,ec),Ru=d(ec),ii=n(ec,"P",{});var s_=s(ii);Cu=i(s_,"Save token, creating folder as needed."),s_.forEach(t),ec.forEach(t),aa.forEach(t),ll=d(o),xt=n(o,"H2",{class:!0});var tc=s(xt);Ro=n(tc,"A",{id:!0,class:!0,href:!0});var r_=s(Ro);li=n(r_,"SPAN",{});var i_=s(li);H(Hn.$$.fragment,i_),i_.forEach(t),r_.forEach(t),Su=d(tc),ci=n(tc,"SPAN",{});var l_=s(ci);Mu=i(l_,"Filtering helpers"),l_.forEach(t),tc.forEach(t),cl=d(o),Co=n(o,"P",{});var oc=s(Co);Uu=i(oc,"Some helpers to filter repositories on the Hub are available in the "),pi=n(oc,"CODE",{});var c_=s(pi);Vu=i(c_,"huggingface_hub"),c_.forEach(t),zu=i(oc," package."),oc.forEach(t),pl=d(o),Dt=n(o,"H3",{class:!0});var ac=s(Dt);So=n(ac,"A",{id:!0,class:!0,href:!0});var p_=s(So);gi=n(p_,"SPAN",{});var g_=s(gi);H(qn.$$.fragment,g_),g_.forEach(t),p_.forEach(t),Wu=d(ac),di=n(ac,"SPAN",{});var d_=s(di);Gu=i(d_,"DatasetFilter"),d_.forEach(t),ac.forEach(t),gl=d(o),Me=n(o,"DIV",{class:!0});var ws=s(Me);H(In.$$.fragment,ws),Bu=d(ws),hi=n(ws,"P",{});var h_=s(hi);Ku=i(h_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),h_.forEach(t),Ju=d(ws),H(Mo.$$.fragment,ws),ws.forEach(t),dl=d(o),Ht=n(o,"H3",{class:!0});var nc=s(Ht);Uo=n(nc,"A",{id:!0,class:!0,href:!0});var u_=s(Uo);ui=n(u_,"SPAN",{});var f_=s(ui);H(jn.$$.fragment,f_),f_.forEach(t),u_.forEach(t),Qu=d(nc),fi=n(nc,"SPAN",{});var m_=s(fi);Xu=i(m_,"ModelFilter"),m_.forEach(t),nc.forEach(t),hl=d(o),Ue=n(o,"DIV",{class:!0});var ks=s(Ue);H(Nn.$$.fragment,ks),Yu=d(ks),mi=n(ks,"P",{});var __=s(mi);Zu=i(__,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),__.forEach(t),ef=d(ks),H(Vo.$$.fragment,ks),ks.forEach(t),ul=d(o),qt=n(o,"H3",{class:!0});var sc=s(qt);zo=n(sc,"A",{id:!0,class:!0,href:!0});var b_=s(zo);_i=n(b_,"SPAN",{});var v_=s(_i);H(Fn.$$.fragment,v_),v_.forEach(t),b_.forEach(t),tf=d(sc),bi=n(sc,"SPAN",{});var $_=s(bi);of=i($_,"DatasetSearchArguments"),$_.forEach(t),sc.forEach(t),fl=d(o),Ve=n(o,"DIV",{class:!0});var As=s(Ve);H(Tn.$$.fragment,As),af=d(As),vi=n(As,"P",{});var y_=s(vi);nf=i(y_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),y_.forEach(t),sf=d(As),H(Wo.$$.fragment,As),As.forEach(t),ml=d(o),It=n(o,"H3",{class:!0});var rc=s(It);Go=n(rc,"A",{id:!0,class:!0,href:!0});var E_=s(Go);$i=n(E_,"SPAN",{});var w_=s($i);H(Pn.$$.fragment,w_),w_.forEach(t),E_.forEach(t),rf=d(rc),yi=n(rc,"SPAN",{});var k_=s(yi);lf=i(k_,"ModelSearchArguments"),k_.forEach(t),rc.forEach(t),_l=d(o),ze=n(o,"DIV",{class:!0});var xs=s(ze);H(On.$$.fragment,xs),cf=d(xs),Ei=n(xs,"P",{});var A_=s(Ei);pf=i(A_,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),A_.forEach(t),gf=d(xs),H(Bo.$$.fragment,xs),xs.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(_b)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(ve,"id","huggingface_hub.HfApi"),m(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ve,"href","#huggingface_hub.HfApi"),m(he,"class","relative group"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Yn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(ts,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(as,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Sa,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Sa,"rel","nofollow"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ja,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(Ja,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","huggingface_hub.hf_api.ModelInfo"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#huggingface_hub.hf_api.ModelInfo"),m(ht,"class","relative group"),m(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","huggingface_hub.hf_api.DatasetInfo"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#huggingface_hub.hf_api.DatasetInfo"),m(ft,"class","relative group"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","huggingface_hub.hf_api.SpaceInfo"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#huggingface_hub.hf_api.SpaceInfo"),m(_t,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"id","huggingface_hub.hf_api.RepoFile"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#huggingface_hub.hf_api.RepoFile"),m(bt,"class","relative group"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.CommitInfo"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.CommitInfo"),m($t,"class","relative group"),m(ss,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","huggingface_hub.CommitOperationAdd"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#huggingface_hub.CommitOperationAdd"),m(yt,"class","relative group"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","huggingface_hub.HfFolder"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#huggingface_hub.HfFolder"),m(At,"class","relative group"),m(cs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"id","filtering-helpers"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#filtering-helpers"),m(xt,"class","relative group"),m(So,"id","huggingface_hub.DatasetFilter"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#huggingface_hub.DatasetFilter"),m(Dt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","huggingface_hub.ModelFilter"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#huggingface_hub.ModelFilter"),m(Ht,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zo,"id","huggingface_hub.DatasetSearchArguments"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#huggingface_hub.DatasetSearchArguments"),m(qt,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","huggingface_hub.ModelSearchArguments"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#huggingface_hub.ModelSearchArguments"),m(It,"class","relative group"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,h),q(l,h,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,L,E),$(o,_,E),e(_,F),e(_,S),e(S,z),e(_,R),$(o,K,E),$(o,G,E),e(G,A),$(o,M,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,se,E),e(se,Be),e(se,be),e(be,dt),e(se,Ke),$(o,Re,E),$(o,he,E),e(he,ve),e(ve,Nt),q(Je,Nt,null),e(he,na),e(he,Ft),e(Ft,sa),$(o,ra,E),$(o,V,E),q(ia,V,null),e(V,ic),e(V,xe),q(la,xe,null),e(xe,lc),e(xe,Ds),e(Ds,cc),e(xe,pc),q(Tt,xe,null),e(xe,gc),q(Pt,xe,null),e(V,dc),e(V,De),q(ca,De,null),e(De,hc),e(De,Hs),e(Hs,uc),e(De,fc),q(Ot,De,null),e(De,mc),q(Lt,De,null),e(V,_c),e(V,Qe),q(pa,Qe,null),e(Qe,bc),e(Qe,qs),e(qs,vc),e(Qe,$c),q(Rt,Qe,null),e(V,yc),e(V,le),q(ga,le,null),e(le,Ec),e(le,Is),e(Is,wc),e(le,kc),e(le,da),e(da,Ac),e(da,js),e(js,xc),e(da,Dc),e(le,Hc),e(le,ha),e(ha,qc),e(ha,Qn),e(Qn,Ic),e(ha,jc),e(le,Nc),e(le,Xn),e(Xn,Fc),e(Xn,Yn),e(Yn,Tc),e(le,Pc),q(Ct,le,null),e(V,Oc),e(V,ce),q(ua,ce,null),e(ce,Lc),e(ce,fa),e(fa,Rc),e(fa,Ns),e(Ns,Cc),e(fa,Sc),e(ce,Mc),e(ce,ma),e(ma,Uc),e(ma,Zn),e(Zn,Vc),e(ma,zc),e(ce,Wc),e(ce,_a),e(_a,Gc),e(_a,Fs),e(Fs,Bc),e(_a,Kc),e(ce,Jc),e(ce,es),e(es,Qc),e(es,ts),e(ts,Xc),e(ce,Yc),q(St,ce,null),e(V,Zc),e(V,Mt),q(ba,Mt,null),e(Mt,ep),e(Mt,Ts),e(Ts,tp),e(V,op),e(V,Ut),q(va,Ut,null),e(Ut,ap),e(Ut,Ps),e(Ps,np),e(V,sp),e(V,He),q($a,He,null),e(He,rp),e(He,Os),e(Os,ip),e(He,lp),e(He,Ls),e(Ls,cp),e(He,pp),q(Vt,He,null),e(V,gp),e(V,Xe),q(ya,Xe,null),e(Xe,dp),e(Xe,Rs),e(Rs,hp),e(Xe,up),q(zt,Xe,null),e(V,fp),e(V,Ye),q(Ea,Ye,null),e(Ye,mp),e(Ye,Cs),e(Cs,_p),e(Ye,bp),q(Wt,Ye,null),e(V,vp),e(V,Ze),q(wa,Ze,null),e(Ze,$p),e(Ze,Ss),e(Ss,yp),e(Ze,Ep),q(Gt,Ze,null),e(V,wp),e(V,Bt),q(ka,Bt,null),e(Bt,kp),e(Bt,Ms),e(Ms,Ap),e(V,xp),e(V,qe),q(Aa,qe,null),e(qe,Dp),e(qe,Us),e(Us,Hp),e(qe,qp),e(qe,os),e(os,Ip),e(os,as),e(as,jp),e(qe,Np),q(Kt,qe,null),e(V,Fp),e(V,Jt),q(xa,Jt,null),e(Jt,Tp),e(Jt,Vs),e(Vs,Pp),e(V,Op),e(V,Qt),q(Da,Qt,null),e(Qt,Lp),e(Qt,zs),e(zs,Rp),e(V,Cp),e(V,$e),q(Ha,$e,null),e($e,Sp),e($e,Ws),e(Ws,Mp),e($e,Up),e($e,Gs),e(Gs,Vp),e($e,zp),q(Xt,$e,null),e($e,Wp),q(Yt,$e,null),e(V,Gp),e(V,Ie),q(qa,Ie,null),e(Ie,Bp),e(Ie,Bs),e(Bs,Kp),e(Ie,Jp),q(Zt,Ie,null),e(Ie,Qp),q(eo,Ie,null),e(V,Xp),e(V,je),q(Ia,je,null),e(je,Yp),e(je,Ks),e(Ks,Zp),e(je,eg),q(to,je,null),e(je,tg),q(oo,je,null),e(V,og),e(V,ao),q(ja,ao,null),e(ao,ag),e(ao,Js),e(Js,ng),e(V,sg),e(V,ye),q(Na,ye,null),e(ye,rg),e(ye,Qs),e(Qs,ig),e(ye,lg),e(ye,Fa),e(Fa,cg),e(Fa,ns),e(ns,pg),e(Fa,gg),e(ye,dg),q(no,ye,null),e(ye,hg),q(so,ye,null),e(V,ug),e(V,ro),q(Ta,ro,null),e(ro,fg),e(ro,Xs),e(Xs,mg),e(V,_g),e(V,io),q(Pa,io,null),e(io,bg),e(io,Ys),e(Ys,vg),e(V,$g),e(V,et),q(Oa,et,null),e(et,yg),e(et,Zs),e(Zs,Eg),e(et,wg),q(lo,et,null),e(V,kg),e(V,Ne),q(La,Ne,null),e(Ne,Ag),e(Ne,er),e(er,xg),e(Ne,Dg),e(Ne,tr),e(tr,Hg),e(Ne,qg),q(co,Ne,null),e(V,Ig),e(V,Fe),q(Ra,Fe,null),e(Fe,jg),e(Fe,or),e(or,Ng),e(Fe,Fg),e(Fe,Ca),e(Ca,Tg),e(Ca,Sa),e(Sa,Pg),e(Ca,Og),e(Fe,Lg),q(po,Fe,null),e(V,Rg),e(V,Te),q(Ma,Te,null),e(Te,Cg),e(Te,ar),e(ar,Sg),e(Te,Mg),q(go,Te,null),e(Te,Ug),q(ho,Te,null),e(V,Vg),e(V,tt),q(Ua,tt,null),e(tt,zg),e(tt,nr),e(nr,Wg),e(tt,Gg),q(uo,tt,null),e(V,Bg),e(V,fo),q(Va,fo,null),e(fo,Kg),e(fo,sr),e(sr,Jg),e(V,Qg),e(V,Pe),q(za,Pe,null),e(Pe,Xg),e(Pe,rr),e(rr,Yg),e(Pe,Zg),e(Pe,ir),e(ir,ed),e(Pe,td),q(mo,Pe,null),e(V,od),e(V,_o),q(Wa,_o,null),e(_o,ad),e(_o,lr),e(lr,nd),e(V,sd),e(V,ot),q(Ga,ot,null),e(ot,rd),e(ot,cr),e(cr,id),e(ot,ld),q(bo,ot,null),e(V,cd),e(V,Ee),q(Ba,Ee,null),e(Ee,pd),e(Ee,pr),e(pr,gd),e(Ee,dd),q(vo,Ee,null),e(Ee,hd),q($o,Ee,null),e(Ee,ud),q(yo,Ee,null),e(V,fd),e(V,re),q(Ka,re,null),e(re,md),e(re,gr),e(gr,_d),e(re,bd),e(re,dr),e(dr,vd),e(re,$d),e(re,ue),e(ue,yd),e(ue,hr),e(hr,Ed),e(ue,wd),e(ue,ur),e(ur,kd),e(ue,Ad),e(ue,Ja),e(Ja,xd),e(ue,Dd),e(ue,fr),e(fr,Hd),e(ue,qd),e(ue,mr),e(mr,Id),e(ue,jd),e(re,Nd),e(re,Qa),e(Qa,Fd),e(Qa,_r),e(_r,Td),e(Qa,Pd),e(re,Od),q(Eo,re,null),e(re,Ld),q(wo,re,null),e(re,Rd),q(ko,re,null),e(V,Cd),e(V,Ao),q(Xa,Ao,null),e(Ao,Sd),e(Ao,br),e(br,Md),$(o,zi,E),$(o,ht,E),e(ht,xo),e(xo,vr),q(Ya,vr,null),e(ht,Ud),e(ht,$r),e($r,Vd),$(o,Wi,E),$(o,ut,E),q(Za,ut,null),e(ut,zd),e(ut,yr),e(yr,Wd),$(o,Gi,E),$(o,ft,E),e(ft,Do),e(Do,Er),q(en,Er,null),e(ft,Gd),e(ft,wr),e(wr,Bd),$(o,Bi,E),$(o,mt,E),q(tn,mt,null),e(mt,Kd),e(mt,kr),e(kr,Jd),$(o,Ki,E),$(o,_t,E),e(_t,Ho),e(Ho,Ar),q(on,Ar,null),e(_t,Qd),e(_t,xr),e(xr,Xd),$(o,Ji,E),$(o,Ce,E),q(an,Ce,null),e(Ce,Yd),e(Ce,Dr),e(Dr,Zd),e(Ce,eh),e(Ce,Hr),e(Hr,th),$(o,Qi,E),$(o,bt,E),e(bt,qo),e(qo,qr),q(nn,qr,null),e(bt,oh),e(bt,Ir),e(Ir,ah),$(o,Xi,E),$(o,vt,E),q(sn,vt,null),e(vt,nh),e(vt,jr),e(jr,sh),$(o,Yi,E),$(o,$t,E),e($t,Io),e(Io,Nr),q(rn,Nr,null),e($t,rh),e($t,Fr),e(Fr,ih),$(o,Zi,E),$(o,Se,E),q(ln,Se,null),e(Se,lh),e(Se,Tr),e(Tr,ch),e(Se,ph),e(Se,cn),e(cn,gh),e(cn,ss),e(ss,dh),e(cn,hh),$(o,el,E),$(o,yt,E),e(yt,jo),e(jo,Pr),q(pn,Pr,null),e(yt,uh),e(yt,rs),e(rs,Or),e(Or,fh),e(rs,mh),$(o,tl,E),$(o,No,E),e(No,_h),e(No,Lr),e(Lr,bh),e(No,vh),$(o,ol,E),$(o,fe,E),q(gn,fe,null),e(fe,$h),e(fe,Rr),e(Rr,yh),e(fe,Eh),e(fe,we),q(dn,we,null),e(we,wh),e(we,hn),e(hn,kh),e(hn,Cr),e(Cr,Ah),e(hn,xh),e(we,Dh),e(we,un),e(un,Hh),e(un,Sr),e(Sr,qh),e(un,Ih),e(we,jh),e(we,fn),e(fn,Nh),e(fn,Mr),e(Mr,Fh),e(fn,Th),e(we,Ph),q(Fo,we,null),e(fe,Oh),e(fe,at),q(mn,at,null),e(at,Lh),e(at,is),e(is,Rh),e(is,Ur),e(Ur,Ch),e(at,Sh),e(at,ls),e(ls,Mh),e(ls,Vr),e(Vr,Uh),e(fe,Vh),e(fe,Oe),q(_n,Oe,null),e(Oe,zh),e(Oe,bn),e(bn,Wh),e(bn,zr),e(zr,Gh),e(bn,Bh),e(Oe,Kh),e(Oe,Et),e(Et,nt),e(nt,Jh),e(nt,Wr),e(Wr,Qh),e(nt,Xh),e(nt,Gr),e(Gr,Yh),e(nt,Zh),e(nt,Br),e(Br,eu),e(Et,tu),e(Et,vn),e(vn,ou),e(vn,Kr),e(Kr,au),e(vn,nu),e(Et,su),e(Et,st),e(st,ru),e(st,Jr),e(Jr,iu),e(st,lu),e(st,Qr),e(Qr,cu),e(st,pu),e(st,Xr),e(Xr,gu),e(Oe,du),e(Oe,wt),e(wt,hu),e(wt,Yr),e(Yr,uu),e(wt,fu),e(wt,Zr),e(Zr,mu),e(wt,_u),$(o,al,E),$(o,kt,E),q($n,kt,null),e(kt,bu),e(kt,ei),e(ei,vu),$(o,nl,E),$(o,At,E),e(At,To),e(To,ti),q(yn,ti,null),e(At,$u),e(At,oi),e(oi,yu),$(o,sl,E),$(o,En,E),e(En,ai),e(ai,Eu),e(En,wu),$(o,rl,E),$(o,Po,E),e(Po,ku),e(Po,cs),e(cs,Au),e(Po,xu),$(o,il,E),$(o,Ae,E),q(wn,Ae,null),e(Ae,Du),e(Ae,Oo),q(kn,Oo,null),e(Oo,Hu),e(Oo,ni),e(ni,qu),e(Ae,Iu),e(Ae,rt),q(An,rt,null),e(rt,ju),e(rt,si),e(si,Nu),e(rt,Fu),e(rt,xn),e(xn,Tu),e(xn,ri),e(ri,Pu),e(xn,Ou),e(Ae,Lu),e(Ae,Lo),q(Dn,Lo,null),e(Lo,Ru),e(Lo,ii),e(ii,Cu),$(o,ll,E),$(o,xt,E),e(xt,Ro),e(Ro,li),q(Hn,li,null),e(xt,Su),e(xt,ci),e(ci,Mu),$(o,cl,E),$(o,Co,E),e(Co,Uu),e(Co,pi),e(pi,Vu),e(Co,zu),$(o,pl,E),$(o,Dt,E),e(Dt,So),e(So,gi),q(qn,gi,null),e(Dt,Wu),e(Dt,di),e(di,Gu),$(o,gl,E),$(o,Me,E),q(In,Me,null),e(Me,Bu),e(Me,hi),e(hi,Ku),e(Me,Ju),q(Mo,Me,null),$(o,dl,E),$(o,Ht,E),e(Ht,Uo),e(Uo,ui),q(jn,ui,null),e(Ht,Qu),e(Ht,fi),e(fi,Xu),$(o,hl,E),$(o,Ue,E),q(Nn,Ue,null),e(Ue,Yu),e(Ue,mi),e(mi,Zu),e(Ue,ef),q(Vo,Ue,null),$(o,ul,E),$(o,qt,E),e(qt,zo),e(zo,_i),q(Fn,_i,null),e(qt,tf),e(qt,bi),e(bi,of),$(o,fl,E),$(o,Ve,E),q(Tn,Ve,null),e(Ve,af),e(Ve,vi),e(vi,nf),e(Ve,sf),q(Wo,Ve,null),$(o,ml,E),$(o,It,E),e(It,Go),e(Go,$i),q(Pn,$i,null),e(It,rf),e(It,yi),e(yi,lf),$(o,_l,E),$(o,ze,E),q(On,ze,null),e(ze,cf),e(ze,Ei),e(Ei,pf),e(ze,gf),q(Bo,ze,null),bl=!0},p(o,[E]){const Ln={};E&2&&(Ln.$$scope={dirty:E,ctx:o}),Tt.$set(Ln);const wi={};E&2&&(wi.$$scope={dirty:E,ctx:o}),Pt.$set(wi);const ki={};E&2&&(ki.$$scope={dirty:E,ctx:o}),Ot.$set(ki);const Ai={};E&2&&(Ai.$$scope={dirty:E,ctx:o}),Lt.$set(Ai);const Rn={};E&2&&(Rn.$$scope={dirty:E,ctx:o}),Rt.$set(Rn);const xi={};E&2&&(xi.$$scope={dirty:E,ctx:o}),Ct.$set(xi);const Cn={};E&2&&(Cn.$$scope={dirty:E,ctx:o}),St.$set(Cn);const Di={};E&2&&(Di.$$scope={dirty:E,ctx:o}),Vt.$set(Di);const Hi={};E&2&&(Hi.$$scope={dirty:E,ctx:o}),zt.$set(Hi);const Sn={};E&2&&(Sn.$$scope={dirty:E,ctx:o}),Wt.$set(Sn);const qi={};E&2&&(qi.$$scope={dirty:E,ctx:o}),Gt.$set(qi);const Mn={};E&2&&(Mn.$$scope={dirty:E,ctx:o}),Kt.$set(Mn);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),Xt.$set(Ii);const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),Yt.$set(Un);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),Zt.$set(ji);const Ni={};E&2&&(Ni.$$scope={dirty:E,ctx:o}),eo.$set(Ni);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),to.$set(Fi);const W={};E&2&&(W.$$scope={dirty:E,ctx:o}),oo.$set(W);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),no.$set(We);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),so.$set(Ti);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),lo.$set(Ge);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),co.$set(Pi);const jt={};E&2&&(jt.$$scope={dirty:E,ctx:o}),po.$set(jt);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),go.$set(Oi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),ho.$set(me);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),uo.$set(Li);const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),mo.$set(Vn);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),bo.$set(Ri);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),vo.$set(zn);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),$o.$set(Ci);const ps={};E&2&&(ps.$$scope={dirty:E,ctx:o}),yo.$set(ps);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),Eo.$set(Si);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),wo.$set(_e);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),ko.$set(Wn);const Mi={};E&2&&(Mi.$$scope={dirty:E,ctx:o}),Fo.$set(Mi);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),Mo.$set(Gn);const Ui={};E&2&&(Ui.$$scope={dirty:E,ctx:o}),Vo.$set(Ui);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),Wo.$set(Bn);const Vi={};E&2&&(Vi.$$scope={dirty:E,ctx:o}),Bo.$set(Vi)},i(o){bl||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Je.$$.fragment,o),I(ia.$$.fragment,o),I(la.$$.fragment,o),I(Tt.$$.fragment,o),I(Pt.$$.fragment,o),I(ca.$$.fragment,o),I(Ot.$$.fragment,o),I(Lt.$$.fragment,o),I(pa.$$.fragment,o),I(Rt.$$.fragment,o),I(ga.$$.fragment,o),I(Ct.$$.fragment,o),I(ua.$$.fragment,o),I(St.$$.fragment,o),I(ba.$$.fragment,o),I(va.$$.fragment,o),I($a.$$.fragment,o),I(Vt.$$.fragment,o),I(ya.$$.fragment,o),I(zt.$$.fragment,o),I(Ea.$$.fragment,o),I(Wt.$$.fragment,o),I(wa.$$.fragment,o),I(Gt.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(Kt.$$.fragment,o),I(xa.$$.fragment,o),I(Da.$$.fragment,o),I(Ha.$$.fragment,o),I(Xt.$$.fragment,o),I(Yt.$$.fragment,o),I(qa.$$.fragment,o),I(Zt.$$.fragment,o),I(eo.$$.fragment,o),I(Ia.$$.fragment,o),I(to.$$.fragment,o),I(oo.$$.fragment,o),I(ja.$$.fragment,o),I(Na.$$.fragment,o),I(no.$$.fragment,o),I(so.$$.fragment,o),I(Ta.$$.fragment,o),I(Pa.$$.fragment,o),I(Oa.$$.fragment,o),I(lo.$$.fragment,o),I(La.$$.fragment,o),I(co.$$.fragment,o),I(Ra.$$.fragment,o),I(po.$$.fragment,o),I(Ma.$$.fragment,o),I(go.$$.fragment,o),I(ho.$$.fragment,o),I(Ua.$$.fragment,o),I(uo.$$.fragment,o),I(Va.$$.fragment,o),I(za.$$.fragment,o),I(mo.$$.fragment,o),I(Wa.$$.fragment,o),I(Ga.$$.fragment,o),I(bo.$$.fragment,o),I(Ba.$$.fragment,o),I(vo.$$.fragment,o),I($o.$$.fragment,o),I(yo.$$.fragment,o),I(Ka.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(ko.$$.fragment,o),I(Xa.$$.fragment,o),I(Ya.$$.fragment,o),I(Za.$$.fragment,o),I(en.$$.fragment,o),I(tn.$$.fragment,o),I(on.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(dn.$$.fragment,o),I(Fo.$$.fragment,o),I(mn.$$.fragment,o),I(_n.$$.fragment,o),I($n.$$.fragment,o),I(yn.$$.fragment,o),I(wn.$$.fragment,o),I(kn.$$.fragment,o),I(An.$$.fragment,o),I(Dn.$$.fragment,o),I(Hn.$$.fragment,o),I(qn.$$.fragment,o),I(In.$$.fragment,o),I(Mo.$$.fragment,o),I(jn.$$.fragment,o),I(Nn.$$.fragment,o),I(Vo.$$.fragment,o),I(Fn.$$.fragment,o),I(Tn.$$.fragment,o),I(Wo.$$.fragment,o),I(Pn.$$.fragment,o),I(On.$$.fragment,o),I(Bo.$$.fragment,o),bl=!0)},o(o){j(l.$$.fragment,o),j(C.$$.fragment,o),j(X.$$.fragment,o),j(Je.$$.fragment,o),j(ia.$$.fragment,o),j(la.$$.fragment,o),j(Tt.$$.fragment,o),j(Pt.$$.fragment,o),j(ca.$$.fragment,o),j(Ot.$$.fragment,o),j(Lt.$$.fragment,o),j(pa.$$.fragment,o),j(Rt.$$.fragment,o),j(ga.$$.fragment,o),j(Ct.$$.fragment,o),j(ua.$$.fragment,o),j(St.$$.fragment,o),j(ba.$$.fragment,o),j(va.$$.fragment,o),j($a.$$.fragment,o),j(Vt.$$.fragment,o),j(ya.$$.fragment,o),j(zt.$$.fragment,o),j(Ea.$$.fragment,o),j(Wt.$$.fragment,o),j(wa.$$.fragment,o),j(Gt.$$.fragment,o),j(ka.$$.fragment,o),j(Aa.$$.fragment,o),j(Kt.$$.fragment,o),j(xa.$$.fragment,o),j(Da.$$.fragment,o),j(Ha.$$.fragment,o),j(Xt.$$.fragment,o),j(Yt.$$.fragment,o),j(qa.$$.fragment,o),j(Zt.$$.fragment,o),j(eo.$$.fragment,o),j(Ia.$$.fragment,o),j(to.$$.fragment,o),j(oo.$$.fragment,o),j(ja.$$.fragment,o),j(Na.$$.fragment,o),j(no.$$.fragment,o),j(so.$$.fragment,o),j(Ta.$$.fragment,o),j(Pa.$$.fragment,o),j(Oa.$$.fragment,o),j(lo.$$.fragment,o),j(La.$$.fragment,o),j(co.$$.fragment,o),j(Ra.$$.fragment,o),j(po.$$.fragment,o),j(Ma.$$.fragment,o),j(go.$$.fragment,o),j(ho.$$.fragment,o),j(Ua.$$.fragment,o),j(uo.$$.fragment,o),j(Va.$$.fragment,o),j(za.$$.fragment,o),j(mo.$$.fragment,o),j(Wa.$$.fragment,o),j(Ga.$$.fragment,o),j(bo.$$.fragment,o),j(Ba.$$.fragment,o),j(vo.$$.fragment,o),j($o.$$.fragment,o),j(yo.$$.fragment,o),j(Ka.$$.fragment,o),j(Eo.$$.fragment,o),j(wo.$$.fragment,o),j(ko.$$.fragment,o),j(Xa.$$.fragment,o),j(Ya.$$.fragment,o),j(Za.$$.fragment,o),j(en.$$.fragment,o),j(tn.$$.fragment,o),j(on.$$.fragment,o),j(an.$$.fragment,o),j(nn.$$.fragment,o),j(sn.$$.fragment,o),j(rn.$$.fragment,o),j(ln.$$.fragment,o),j(pn.$$.fragment,o),j(gn.$$.fragment,o),j(dn.$$.fragment,o),j(Fo.$$.fragment,o),j(mn.$$.fragment,o),j(_n.$$.fragment,o),j($n.$$.fragment,o),j(yn.$$.fragment,o),j(wn.$$.fragment,o),j(kn.$$.fragment,o),j(An.$$.fragment,o),j(Dn.$$.fragment,o),j(Hn.$$.fragment,o),j(qn.$$.fragment,o),j(In.$$.fragment,o),j(Mo.$$.fragment,o),j(jn.$$.fragment,o),j(Nn.$$.fragment,o),j(Vo.$$.fragment,o),j(Fn.$$.fragment,o),j(Tn.$$.fragment,o),j(Wo.$$.fragment,o),j(Pn.$$.fragment,o),j(On.$$.fragment,o),j(Bo.$$.fragment,o),bl=!1},d(o){t(p),o&&t(b),o&&t(f),N(l),o&&t(x),o&&t(w),o&&t(L),o&&t(_),o&&t(K),o&&t(G),o&&t(M),N(C,o),o&&t(Y),o&&t(te),o&&t(B),N(X,o),o&&t(oe),o&&t(se),o&&t(Re),o&&t(he),N(Je),o&&t(ra),o&&t(V),N(ia),N(la),N(Tt),N(Pt),N(ca),N(Ot),N(Lt),N(pa),N(Rt),N(ga),N(Ct),N(ua),N(St),N(ba),N(va),N($a),N(Vt),N(ya),N(zt),N(Ea),N(Wt),N(wa),N(Gt),N(ka),N(Aa),N(Kt),N(xa),N(Da),N(Ha),N(Xt),N(Yt),N(qa),N(Zt),N(eo),N(Ia),N(to),N(oo),N(ja),N(Na),N(no),N(so),N(Ta),N(Pa),N(Oa),N(lo),N(La),N(co),N(Ra),N(po),N(Ma),N(go),N(ho),N(Ua),N(uo),N(Va),N(za),N(mo),N(Wa),N(Ga),N(bo),N(Ba),N(vo),N($o),N(yo),N(Ka),N(Eo),N(wo),N(ko),N(Xa),o&&t(zi),o&&t(ht),N(Ya),o&&t(Wi),o&&t(ut),N(Za),o&&t(Gi),o&&t(ft),N(en),o&&t(Bi),o&&t(mt),N(tn),o&&t(Ki),o&&t(_t),N(on),o&&t(Ji),o&&t(Ce),N(an),o&&t(Qi),o&&t(bt),N(nn),o&&t(Xi),o&&t(vt),N(sn),o&&t(Yi),o&&t($t),N(rn),o&&t(Zi),o&&t(Se),N(ln),o&&t(el),o&&t(yt),N(pn),o&&t(tl),o&&t(No),o&&t(ol),o&&t(fe),N(gn),N(dn),N(Fo),N(mn),N(_n),o&&t(al),o&&t(kt),N($n),o&&t(nl),o&&t(At),N(yn),o&&t(sl),o&&t(En),o&&t(rl),o&&t(Po),o&&t(il),o&&t(Ae),N(wn),N(kn),N(An),N(Dn),o&&t(ll),o&&t(xt),N(Hn),o&&t(cl),o&&t(Co),o&&t(pl),o&&t(Dt),N(qn),o&&t(gl),o&&t(Me),N(In),N(Mo),o&&t(dl),o&&t(Ht),N(jn),o&&t(hl),o&&t(Ue),N(Nn),N(Vo),o&&t(ul),o&&t(qt),N(Fn),o&&t(fl),o&&t(Ve),N(Tn),N(Wo),o&&t(ml),o&&t(It),N(Pn),o&&t(_l),o&&t(ze),N(On),N(Bo)}}}const _b={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function bb(U){return I_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ab extends x_{constructor(p){super();D_(this,p,bb,mb,H_,{})}}export{Ab as default,_b as metadata};
