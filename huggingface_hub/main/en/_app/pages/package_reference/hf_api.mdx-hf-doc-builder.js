import{S as R_,i as C_,s as S_,e as a,k as g,w as D,t as r,M as M_,c as n,d as t,m as h,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as j,B as N,v as U_,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function V_(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function z_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function W_(S){let p,b,f,c,d;return c=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function G_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function B_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"create_commit"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function K_(S){let p,b,f,c;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(" is limited to 25k LFS files and a 1GB payload for regular files.")},l(d){p=n(d,"P",{});var l=s(p);b=n(l,"CODE",{});var u=s(b);f=i(u,"create_commit"),u.forEach(t),c=i(l," is limited to 25k LFS files and a 1GB payload for regular files."),l.forEach(t)},m(d,l){$(d,p,l),e(p,b),e(b,f),e(p,c)},d(d){d&&t(p)}}}function J_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Q_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function X_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Y_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G,A,U,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),c=n(X,"UL",{});var ne=s(c);d=n(ne,"LI",{});var Je=s(d);l=n(Je,"A",{href:!0,rel:!0});var de=s(l);u=n(de,"CODE",{});var ht=s(u);P=i(ht,"HTTPError"),ht.forEach(t),de.forEach(t),v=i(Je,`
if the HuggingFace API returned an error`),Je.forEach(t),x=h(ne),w=n(ne,"LI",{});var Qe=s(w);y=n(Qe,"A",{href:!0,rel:!0});var ke=s(y);k=n(ke,"CODE",{});var dt=s(k);O=i(dt,"ValueError"),dt.forEach(t),ke.forEach(t),T=i(Qe,`
if some parameter value is invalid`),Qe.forEach(t),L=h(ne),_=n(ne,"LI",{});var ut=s(_);F=n(ut,"A",{href:!0});var ft=s(F);M=i(ft,"RepositoryNotFoundError"),ft.forEach(t),z=i(ut,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(ut,"CODE",{});var Zn=s(R);K=i(Zn,"private"),Zn.forEach(t),G=i(ut," and you do not have access."),ut.forEach(t),A=h(ne),U=n(ne,"LI",{});var ia=s(U);C=n(ia,"A",{href:!0});var la=s(C);Y=i(la,"RevisionNotFoundError"),la.forEach(t),te=i(ia,`
If the revision to download from cannot be found.`),ia.forEach(t),Z=h(ne),J=n(ne,"LI",{});var Re=s(J);ee=n(Re,"A",{href:!0});var ca=s(ee);ae=i(ca,"EntryNotFoundError"),ca.forEach(t),B=i(Re,`
If the file to download cannot be found.`),Re.forEach(t),ne.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function Z_(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function eb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function tb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ob(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function ab(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function nb(S){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function sb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function rb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function ib(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function lb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function cb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function pb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function gb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function hb(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function db(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function ub(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function fb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function mb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function _b(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function bb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G,A,U,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=h(Z),c=n(Z,"UL",{});var ee=s(c);d=n(ee,"LI",{});var ae=s(d);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var ne=s(y);k=n(ne,"CODE",{});var Je=s(k);O=i(Je,"ValueError"),Je.forEach(t),ne.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),L=h(ee),_=n(ee,"LI",{});var de=s(_);F=n(de,"A",{href:!0});var ht=s(F);M=i(ht,"RepositoryNotFoundError"),ht.forEach(t),z=i(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(de,"CODE",{});var Qe=s(R);K=i(Qe,"private"),Qe.forEach(t),G=i(de," and you do not have access."),de.forEach(t),A=h(ee),U=n(ee,"LI",{});var ke=s(U);C=n(ke,"A",{href:!0});var dt=s(C);Y=i(dt,"RevisionNotFoundError"),dt.forEach(t),te=i(ke,`
If the revision to download from cannot be found.`),ke.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,M),e(_,z),e(_,R),e(R,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function vb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_file"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function $b(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import upload_file

with open("./local/filepath", "rb") as fobj:
    upload_file(
        path_or_fileobj=fileobj,
        path_in_repo="remote/file/path.h5",
        repo_id="username/my-dataset",
        repo_type="dataset",
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
<span class="hljs-meta">... </span>        repo_type=<span class="hljs-string">&quot;dataset&quot;</span>,
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function yb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(L){p=n(L,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=h(L),c=n(L,"UL",{});var F=s(c);d=n(F,"LI",{});var M=s(d);l=n(M,"A",{href:!0,rel:!0});var z=s(l);u=n(z,"CODE",{});var R=s(u);P=i(R,"HTTPError"),R.forEach(t),z.forEach(t),v=i(M,`
if the HuggingFace API returned an error`),M.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(L,_){$(L,p,_),e(p,b),$(L,f,_),$(L,c,_),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function Eb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_folder"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function wb(S){let p,b,f,c,d;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function kb(S){let p,b,f,c,d;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function Ab(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function xb(S){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){j(p.$$.fragment,f),b=!1},d(f){N(p,f)}}}function Db(S){let p,b,f,c,d;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function Hb(S){let p,b,f,c,d;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function qb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,M,z,R,K,G,A,U,C,Y,te,Z,J,ee,ae,B,X,oe,ne,Je,de,ht,Qe,ke,dt,ut,ft,Zn,ia,la,Re,ca,mt,Pt,js,pa,fc,Ns,mc,Xi,V,ga,_c,Ae,ha,bc,Fs,vc,$c,Ot,yc,Lt,Ec,xe,da,wc,Ts,kc,Ac,Rt,xc,Ct,Dc,De,ua,Hc,Ps,qc,Ic,St,jc,Mt,Nc,le,fa,Fc,Os,Tc,Pc,ma,Oc,Ls,Lc,Rc,Cc,_a,Sc,es,Mc,Uc,Vc,ts,zc,os,Wc,Gc,Ut,Bc,ce,ba,Kc,va,Jc,Rs,Qc,Xc,Yc,$a,Zc,as,ep,tp,op,ya,ap,Cs,np,sp,rp,ns,ip,ss,lp,cp,Vt,pp,zt,Ea,gp,Ss,hp,dp,Wt,wa,up,Ms,fp,mp,He,ka,_p,Us,bp,vp,Vs,$p,yp,Gt,Ep,Xe,Aa,wp,zs,kp,Ap,Bt,xp,Ye,xa,Dp,Ws,Hp,qp,Kt,Ip,Ze,Da,jp,Gs,Np,Fp,Jt,Tp,Qt,Ha,Pp,Bs,Op,Lp,qe,qa,Rp,Ks,Cp,Sp,rs,Mp,is,Up,Vp,Xt,zp,Yt,Ia,Wp,Js,Gp,Bp,Zt,ja,Kp,Qs,Jp,Qp,be,Na,Xp,Xs,Yp,Zp,Ys,eg,tg,eo,og,to,ag,Ie,Fa,ng,Zs,sg,rg,oo,ig,ao,lg,je,Ta,cg,er,pg,gg,no,hg,so,dg,ro,Pa,ug,tr,fg,mg,ve,Oa,_g,or,bg,vg,La,$g,ls,yg,Eg,wg,io,kg,lo,Ag,co,Ra,xg,ar,Dg,Hg,po,Ca,qg,nr,Ig,jg,et,Sa,Ng,sr,Fg,Tg,go,Pg,Ne,Ma,Og,rr,Lg,Rg,ir,Cg,Sg,ho,Mg,Fe,Ua,Ug,lr,Vg,zg,Va,Wg,za,Gg,Bg,Kg,uo,Jg,Te,Wa,Qg,cr,Xg,Yg,fo,Zg,mo,eh,tt,Ga,th,pr,oh,ah,_o,nh,bo,Ba,sh,gr,rh,ih,Pe,Ka,lh,hr,ch,ph,dr,gh,hh,vo,dh,$o,Ja,uh,ur,fh,mh,ot,Qa,_h,fr,bh,vh,yo,$h,$e,Xa,yh,mr,Eh,wh,Eo,kh,wo,Ah,ko,xh,re,Ya,Dh,_r,Hh,qh,br,Ih,jh,ue,Nh,vr,Fh,Th,$r,Ph,Oh,Za,Lh,Rh,yr,Ch,Sh,Er,Mh,Uh,Vh,en,zh,wr,Wh,Gh,Bh,Ao,Kh,xo,Jh,Do,Qh,Ho,tn,Xh,kr,Yh,Yi,_t,qo,Ar,on,Zh,xr,ed,Zi,bt,an,td,Dr,od,el,vt,Io,Hr,nn,ad,qr,nd,tl,$t,sn,sd,Ir,rd,ol,yt,jo,jr,rn,id,Nr,ld,al,Ce,ln,cd,Fr,pd,gd,Tr,hd,nl,Et,No,Pr,cn,dd,Or,ud,sl,wt,pn,fd,Lr,md,rl,kt,Fo,Rr,gn,_d,Cr,bd,il,Se,hn,vd,Sr,$d,yd,dn,Ed,cs,wd,kd,ll,At,To,Mr,un,Ad,ps,Ur,xd,Dd,cl,Po,Hd,Vr,qd,Id,pl,fe,fn,jd,zr,Nd,Fd,ye,mn,Td,_n,Pd,Wr,Od,Ld,Rd,bn,Cd,Gr,Sd,Md,Ud,vn,Vd,Br,zd,Wd,Gd,Oo,Bd,at,$n,Kd,gs,Jd,Kr,Qd,Xd,hs,Yd,Jr,Zd,eu,Oe,yn,tu,En,ou,Qr,au,nu,su,xt,nt,ru,Xr,iu,lu,Yr,cu,pu,Zr,gu,hu,wn,du,ei,uu,fu,mu,st,_u,ti,bu,vu,oi,$u,yu,ai,Eu,wu,Dt,ku,ni,Au,xu,si,Du,Hu,gl,Ht,kn,qu,ri,Iu,hl,qt,Lo,ii,An,ju,li,Nu,dl,xn,ci,Fu,Tu,ul,Ro,Pu,ds,Ou,Lu,fl,we,Dn,Ru,Co,Hn,Cu,pi,Su,Mu,rt,qn,Uu,gi,Vu,zu,In,Wu,hi,Gu,Bu,Ku,So,jn,Ju,di,Qu,ml,It,Mo,ui,Nn,Xu,fi,Yu,_l,Uo,Zu,mi,ef,tf,bl,jt,Vo,_i,Fn,of,bi,af,vl,Me,Tn,nf,vi,sf,rf,zo,$l,Nt,Wo,$i,Pn,lf,yi,cf,yl,Ue,On,pf,Ei,gf,hf,Go,El,Ft,Bo,wi,Ln,df,ki,uf,wl,Ve,Rn,ff,Ai,mf,_f,Ko,kl,Tt,Jo,xi,Cn,bf,Di,vf,Al,ze,Sn,$f,Hi,yf,Ef,Qo,xl;return l=new Ee({}),C=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),Re=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi(
    endpoint="https://huggingface.co", # Can be a Private Hub endpoint.
    token="hf_xxx", # Token is not persisted on the machine.
)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi(
    endpoint=<span class="hljs-string">&quot;https://huggingface.co&quot;</span>, <span class="hljs-comment"># Can be a Private Hub endpoint.</span>
    token=<span class="hljs-string">&quot;hf_xxx&quot;</span>, <span class="hljs-comment"># Token is not persisted on the machine.</span>
)`}}),pa=new Ee({}),ga=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L642"}}),ha=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2986",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Ot=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[V_]},$$scope:{ctx:S}}}),Lt=new se({props:{$$slots:{default:[z_]},$$scope:{ctx:S}}}),da=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2843",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Rt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[W_]},$$scope:{ctx:S}}}),Ct=new se({props:{$$slots:{default:[G_]},$$scope:{ctx:S}}}),ua=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1791",returnDescription:`
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
`}}),St=new se({props:{warning:!0,$$slots:{default:[B_]},$$scope:{ctx:S}}}),Mt=new se({props:{warning:!0,$$slots:{default:[K_]},$$scope:{ctx:S}}}),fa=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2670"}}),Ut=new se({props:{$$slots:{default:[J_]},$$scope:{ctx:S}}}),ba=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2759"}}),Vt=new se({props:{$$slots:{default:[Q_]},$$scope:{ctx:S}}}),Ea=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1533",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),wa=new Q({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2398",raiseDescription:`
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
`}}),ka=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1278",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Gt=new se({props:{$$slots:{default:[X_]},$$scope:{ctx:S}}}),Aa=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2310"}}),Bt=new se({props:{$$slots:{default:[Y_]},$$scope:{ctx:S}}}),xa=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1613"}}),Kt=new se({props:{$$slots:{default:[Z_]},$$scope:{ctx:S}}}),Da=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3114",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Jt=new se({props:{$$slots:{default:[eb]},$$scope:{ctx:S}}}),Ha=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L720"}}),qa=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2585"}}),Xt=new se({props:{$$slots:{default:[tb]},$$scope:{ctx:S}}}),Ia=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
The Hugging Face authentication token`,name:"token"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2460",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ja=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L712"}}),Na=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2507",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),eo=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[ob]},$$scope:{ctx:S}}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[ab]},$$scope:{ctx:S}}}),Fa=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3171",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),oo=new se({props:{warning:!0,$$slots:{default:[nb]},$$scope:{ctx:S}}}),ao=new se({props:{$$slots:{default:[sb]},$$scope:{ctx:S}}}),Ta=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned datasets.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned datasets.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L940"}}),no=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[rb]},$$scope:{ctx:S}}}),so=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[ib]},$$scope:{ctx:S}}}),Pa=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1103",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Oa=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L730"}}),io=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[lb]},$$scope:{ctx:S}}}),lo=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[cb]},$$scope:{ctx:S}}}),Ra=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1485",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ca=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1116",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Sa=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3061",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),go=new se({props:{$$slots:{default:[pb]},$$scope:{ctx:S}}}),Ma=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1199",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),ho=new se({props:{$$slots:{default:[gb]},$$scope:{ctx:S}}}),Ua=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1719"}}),uo=new se({props:{$$slots:{default:[hb]},$$scope:{ctx:S}}}),Wa=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2919",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),fo=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[db]},$$scope:{ctx:S}}}),mo=new se({props:{$$slots:{default:[ub]},$$scope:{ctx:S}}}),Ga=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1416",returnDescription:`
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
`}}),_o=new se({props:{$$slots:{default:[fb]},$$scope:{ctx:S}}}),Ba=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L693"}}),Ka=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1347",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),vo=new se({props:{$$slots:{default:[mb]},$$scope:{ctx:S}}}),Ja=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L705"}}),Qa=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1659",returnDescription:`
<p>The HTTP response in json.</p>
`}}),yo=new se({props:{$$slots:{default:[_b]},$$scope:{ctx:S}}}),Xa=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.upload_file.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2001",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Eo=new se({props:{$$slots:{default:[bb]},$$scope:{ctx:S}}}),wo=new se({props:{warning:!0,$$slots:{default:[vb]},$$scope:{ctx:S}}}),ko=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[$b]},$$scope:{ctx:S}}}),Ya=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository to which the file will be uploaded, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_folder.folder_path",description:`<strong>folder_path</strong> (<code>str</code> or <code>Path</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2150",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ao=new se({props:{$$slots:{default:[yb]},$$scope:{ctx:S}}}),xo=new se({props:{warning:!0,$$slots:{default:[Eb]},$$scope:{ctx:S}}}),Do=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[wb]},$$scope:{ctx:S}}}),tn=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L649"}}),on=new Ee({}),an=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L250"}}),nn=new Ee({}),sn=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L323"}}),rn=new Ee({}),ln=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L397"}}),cn=new Ee({}),pn=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L204"}}),gn=new Ee({}),hn=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L149"}}),un=new Ee({}),fn=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L51"}}),mn=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L123"}}),Oo=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[kb]},$$scope:{ctx:S}}}),$n=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L158"}}),yn=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L73"}}),kn=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L36"}}),An=new Ee({}),Dn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),Hn=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),qn=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),jn=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),Nn=new Ee({}),Fn=new Ee({}),Tn=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"languages",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),zo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Ab]},$$scope:{ctx:S}}}),Pn=new Ee({}),On=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Go=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[xb]},$$scope:{ctx:S}}}),Ln=new Ee({}),Rn=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L522"}}),Ko=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Db]},$$scope:{ctx:S}}}),Cn=new Ee({}),Sn=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L484"}}),Qo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Hb]},$$scope:{ctx:S}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),_=a("p"),F=r("All methods from the "),M=a("code"),z=r("HfApi"),R=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),U=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),ne=a("p"),Je=r("Using the "),de=a("a"),ht=r("HfApi"),Qe=r(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),ke=a("code"),dt=r("huggingface-cli login"),ut=r(" or "),ft=a("a"),Zn=r("login()"),ia=r(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),la=g(),D(Re.$$.fragment),ca=g(),mt=a("h3"),Pt=a("a"),js=a("span"),D(pa.$$.fragment),fc=g(),Ns=a("span"),mc=r("HfApi"),Xi=g(),V=a("div"),D(ga.$$.fragment),_c=g(),Ae=a("div"),D(ha.$$.fragment),bc=g(),Fs=a("p"),vc=r("Closes or re-opens a Discussion or Pull Request."),$c=g(),D(Ot.$$.fragment),yc=g(),D(Lt.$$.fragment),Ec=g(),xe=a("div"),D(da.$$.fragment),wc=g(),Ts=a("p"),kc=r("Creates a new comment on the given Discussion."),Ac=g(),D(Rt.$$.fragment),xc=g(),D(Ct.$$.fragment),Dc=g(),De=a("div"),D(ua.$$.fragment),Hc=g(),Ps=a("p"),qc=r("Creates a commit in the given repo, deleting & uploading files as needed."),Ic=g(),D(St.$$.fragment),jc=g(),D(Mt.$$.fragment),Nc=g(),le=a("div"),D(fa.$$.fragment),Fc=g(),Os=a("p"),Tc=r("Creates a Discussion or Pull Request."),Pc=g(),ma=a("p"),Oc=r("Pull Requests created programmatically will be in "),Ls=a("code"),Lc=r('"draft"'),Rc=r(" status."),Cc=g(),_a=a("p"),Sc=r("Creating a Pull Request with changes can also be done at once with "),es=a("a"),Mc=r("HfApi.create_commit()"),Uc=r("."),Vc=g(),ts=a("p"),zc=r("Returns: "),os=a("a"),Wc=r("DiscussionWithDetails"),Gc=g(),D(Ut.$$.fragment),Bc=g(),ce=a("div"),D(ba.$$.fragment),Kc=g(),va=a("p"),Jc=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Rs=a("code"),Qc=r('"draft"'),Xc=r(" status."),Yc=g(),$a=a("p"),Zc=r("Creating a Pull Request with changes can also be done at once with "),as=a("a"),ep=r("HfApi.create_commit()"),tp=r(";"),op=g(),ya=a("p"),ap=r("This is a wrapper around "),Cs=a("code"),np=r("HfApi.create_discusssion"),sp=r("."),rp=g(),ns=a("p"),ip=r("Returns: "),ss=a("a"),lp=r("DiscussionWithDetails"),cp=g(),D(Vt.$$.fragment),pp=g(),zt=a("div"),D(Ea.$$.fragment),gp=g(),Ss=a("p"),hp=r("Create an empty repo on the HuggingFace Hub."),dp=g(),Wt=a("div"),D(wa.$$.fragment),up=g(),Ms=a("p"),fp=r("Tag a given commit of a repo on the Hub."),mp=g(),He=a("div"),D(ka.$$.fragment),_p=g(),Us=a("p"),bp=r("Get info on one specific dataset on huggingface.co."),vp=g(),Vs=a("p"),$p=r("Dataset can be private if you pass an acceptable token."),yp=g(),D(Gt.$$.fragment),Ep=g(),Xe=a("div"),D(Aa.$$.fragment),wp=g(),zs=a("p"),kp=r("Deletes a file in the given repo."),Ap=g(),D(Bt.$$.fragment),xp=g(),Ye=a("div"),D(xa.$$.fragment),Dp=g(),Ws=a("p"),Hp=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),qp=g(),D(Kt.$$.fragment),Ip=g(),Ze=a("div"),D(Da.$$.fragment),jp=g(),Gs=a("p"),Np=r("Edits a comment on a Discussion / Pull Request."),Fp=g(),D(Jt.$$.fragment),Tp=g(),Qt=a("div"),D(Ha.$$.fragment),Pp=g(),Bs=a("p"),Op=r("Gets all valid dataset tags as a nested namespace object."),Lp=g(),qe=a("div"),D(qa.$$.fragment),Rp=g(),Ks=a("p"),Cp=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Sp=g(),rs=a("p"),Mp=r("Returns: "),is=a("a"),Up=r("DiscussionWithDetails"),Vp=g(),D(Xt.$$.fragment),zp=g(),Yt=a("div"),D(Ia.$$.fragment),Wp=g(),Js=a("p"),Gp=r(`Returns the repository name for a given model ID and optional
organization.`),Bp=g(),Zt=a("div"),D(ja.$$.fragment),Kp=g(),Qs=a("p"),Jp=r("Gets all valid model tags as a nested namespace object"),Qp=g(),be=a("div"),D(Na.$$.fragment),Xp=g(),Xs=a("p"),Yp=r("Fetches Discussions and Pull Requests for the given repo."),Zp=g(),Ys=a("p"),eg=r("Example:"),tg=g(),D(eo.$$.fragment),og=g(),D(to.$$.fragment),ag=g(),Ie=a("div"),D(Fa.$$.fragment),ng=g(),Zs=a("p"),sg=r("Hides a comment on a Discussion / Pull Request."),rg=g(),D(oo.$$.fragment),ig=g(),D(ao.$$.fragment),lg=g(),je=a("div"),D(Ta.$$.fragment),cg=g(),er=a("p"),pg=r("Get the public list of all the datasets on huggingface.co"),gg=g(),D(no.$$.fragment),hg=g(),D(so.$$.fragment),dg=g(),ro=a("div"),D(Pa.$$.fragment),ug=g(),tr=a("p"),fg=r("Get the public list of all the metrics on huggingface.co"),mg=g(),ve=a("div"),D(Oa.$$.fragment),_g=g(),or=a("p"),bg=r("Get the public list of all the models on huggingface.co"),vg=g(),La=a("p"),$g=r("Returns: List of "),ls=a("a"),yg=r("huggingface_hub.hf_api.ModelInfo"),Eg=r(" objects"),wg=g(),D(io.$$.fragment),kg=g(),D(lo.$$.fragment),Ag=g(),co=a("div"),D(Ra.$$.fragment),xg=g(),ar=a("p"),Dg=r("Get the list of files in a given repo."),Hg=g(),po=a("div"),D(Ca.$$.fragment),qg=g(),nr=a("p"),Ig=r("Get the public list of all Spaces on huggingface.co"),jg=g(),et=a("div"),D(Sa.$$.fragment),Ng=g(),sr=a("p"),Fg=r("Merges a Pull Request."),Tg=g(),D(go.$$.fragment),Pg=g(),Ne=a("div"),D(Ma.$$.fragment),Og=g(),rr=a("p"),Lg=r("Get info on one specific model on huggingface.co"),Rg=g(),ir=a("p"),Cg=r("Model can be private if you pass an acceptable token or are logged in."),Sg=g(),D(ho.$$.fragment),Mg=g(),Fe=a("div"),D(Ua.$$.fragment),Ug=g(),lr=a("p"),Vg=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),zg=g(),Va=a("p"),Wg=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),za=a("a"),Gg=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Bg=r("."),Kg=g(),D(uo.$$.fragment),Jg=g(),Te=a("div"),D(Wa.$$.fragment),Qg=g(),cr=a("p"),Xg=r("Renames a Discussion."),Yg=g(),D(fo.$$.fragment),Zg=g(),D(mo.$$.fragment),eh=g(),tt=a("div"),D(Ga.$$.fragment),th=g(),pr=a("p"),oh=r("Get the info object for a given repo of a given type."),ah=g(),D(_o.$$.fragment),nh=g(),bo=a("div"),D(Ba.$$.fragment),sh=g(),gr=a("p"),rh=r(`Saves the passed access token so git can correctly authenticate the
user.`),ih=g(),Pe=a("div"),D(Ka.$$.fragment),lh=g(),hr=a("p"),ch=r("Get info on one specific Space on huggingface.co."),ph=g(),dr=a("p"),gh=r("Space can be private if you pass an acceptable token."),hh=g(),D(vo.$$.fragment),dh=g(),$o=a("div"),D(Ja.$$.fragment),uh=g(),ur=a("p"),fh=r("Resets the user\u2019s access token."),mh=g(),ot=a("div"),D(Qa.$$.fragment),_h=g(),fr=a("p"),bh=r("Update the visibility setting of a repository."),vh=g(),D(yo.$$.fragment),$h=g(),$e=a("div"),D(Xa.$$.fragment),yh=g(),mr=a("p"),Eh=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),wh=g(),D(Eo.$$.fragment),kh=g(),D(wo.$$.fragment),Ah=g(),D(ko.$$.fragment),xh=g(),re=a("div"),D(Ya.$$.fragment),Dh=g(),_r=a("p"),Hh=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),qh=g(),br=a("p"),Ih=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),jh=g(),ue=a("p"),Nh=r("Use the "),vr=a("code"),Fh=r("allow_patterns"),Th=r(" and "),$r=a("code"),Ph=r("ignore_patterns"),Oh=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Za=a("a"),Lh=r("here"),Rh=r(`. If both
`),yr=a("code"),Ch=r("allow_patterns"),Sh=r(" and "),Er=a("code"),Mh=r("ignore_patterns"),Uh=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Vh=g(),en=a("p"),zh=r("Uses "),wr=a("code"),Wh=r("HfApi.create_commit"),Gh=r(" under the hood."),Bh=g(),D(Ao.$$.fragment),Kh=g(),D(xo.$$.fragment),Jh=g(),D(Do.$$.fragment),Qh=g(),Ho=a("div"),D(tn.$$.fragment),Xh=g(),kr=a("p"),Yh=r("Call HF API to know \u201Cwhoami\u201D."),Yi=g(),_t=a("h3"),qo=a("a"),Ar=a("span"),D(on.$$.fragment),Zh=g(),xr=a("span"),ed=r("ModelInfo"),Zi=g(),bt=a("div"),D(an.$$.fragment),td=g(),Dr=a("p"),od=r("Info about a model accessible from huggingface.co"),el=g(),vt=a("h3"),Io=a("a"),Hr=a("span"),D(nn.$$.fragment),ad=g(),qr=a("span"),nd=r("DatasetInfo"),tl=g(),$t=a("div"),D(sn.$$.fragment),sd=g(),Ir=a("p"),rd=r("Info about a dataset accessible from huggingface.co"),ol=g(),yt=a("h3"),jo=a("a"),jr=a("span"),D(rn.$$.fragment),id=g(),Nr=a("span"),ld=r("SpaceInfo"),al=g(),Ce=a("div"),D(ln.$$.fragment),cd=g(),Fr=a("p"),pd=r("Info about a Space accessible from huggingface.co"),gd=g(),Tr=a("p"),hd=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),nl=g(),Et=a("h3"),No=a("a"),Pr=a("span"),D(cn.$$.fragment),dd=g(),Or=a("span"),ud=r("RepoFile"),sl=g(),wt=a("div"),D(pn.$$.fragment),fd=g(),Lr=a("p"),md=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),rl=g(),kt=a("h3"),Fo=a("a"),Rr=a("span"),D(gn.$$.fragment),_d=g(),Cr=a("span"),bd=r("CommitInfo"),il=g(),Se=a("div"),D(hn.$$.fragment),vd=g(),Sr=a("p"),$d=r("Data structure containing information about a newly created commit."),yd=g(),dn=a("p"),Ed=r("Returned by "),cs=a("a"),wd=r("create_commit()"),kd=r("."),ll=g(),At=a("h2"),To=a("a"),Mr=a("span"),D(un.$$.fragment),Ad=g(),ps=a("span"),Ur=a("code"),xd=r("create_commit"),Dd=r(" API"),cl=g(),Po=a("p"),Hd=r("Below are the supported values for "),Vr=a("code"),qd=r("CommitOperation()"),Id=r(":"),pl=g(),fe=a("div"),D(fn.$$.fragment),jd=g(),zr=a("p"),Nd=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),Fd=g(),ye=a("div"),D(mn.$$.fragment),Td=g(),_n=a("p"),Pd=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Wr=a("code"),Od=r("path_or_fileobj"),Ld=r("."),Rd=g(),bn=a("p"),Cd=r("Triggers "),Gr=a("code"),Sd=r("self.validate"),Md=r("."),Ud=g(),vn=a("p"),Vd=r("Raises: "),Br=a("code"),zd=r("ValueError"),Wd=r(" if self.validate fails"),Gd=g(),D(Oo.$$.fragment),Bd=g(),at=a("div"),D($n.$$.fragment),Kd=g(),gs=a("p"),Jd=r("The base64-encoded content of "),Kr=a("code"),Qd=r("path_or_fileobj"),Xd=g(),hs=a("p"),Yd=r("Returns: "),Jr=a("code"),Zd=r("bytes"),eu=g(),Oe=a("div"),D(yn.$$.fragment),tu=g(),En=a("p"),ou=r("Ensures "),Qr=a("code"),au=r("path_or_fileobj"),nu=r(" is valid:"),su=g(),xt=a("ul"),nt=a("li"),ru=r("Ensures it is either a "),Xr=a("code"),iu=r("str"),lu=r(", "),Yr=a("code"),cu=r("bytes"),pu=r(" or an instance of "),Zr=a("code"),gu=r("io.BufferedIOBase"),hu=g(),wn=a("li"),du=r("If it is a "),ei=a("code"),uu=r("str"),fu=r(", ensure that it is a file path and that the file exists"),mu=g(),st=a("li"),_u=r("If it is an instance of "),ti=a("code"),bu=r("io.BufferedIOBase"),vu=r(", ensures it supports "),oi=a("code"),$u=r("seek()"),yu=r(" and "),ai=a("code"),Eu=r("tell()"),wu=g(),Dt=a("p"),ku=r("Raises: "),ni=a("code"),Au=r("ValueError"),xu=r(" if "),si=a("code"),Du=r("path_or_fileobj"),Hu=r(" is not valid"),gl=g(),Ht=a("div"),D(kn.$$.fragment),qu=g(),ri=a("p"),Iu=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),hl=g(),qt=a("h2"),Lo=a("a"),ii=a("span"),D(An.$$.fragment),ju=g(),li=a("span"),Nu=r("Hugging Face local storage"),dl=g(),xn=a("p"),ci=a("code"),Fu=r("huggingface_hub"),Tu=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),ul=g(),Ro=a("p"),Pu=r("It does this using the "),ds=a("a"),Ou=r("HfFolder"),Lu=r(" utility, which saves data at the root of the user."),fl=g(),we=a("div"),D(Dn.$$.fragment),Ru=g(),Co=a("div"),D(Hn.$$.fragment),Cu=g(),pi=a("p"),Su=r("Deletes the token from storage. Does not fail if token does not exist."),Mu=g(),rt=a("div"),D(qn.$$.fragment),Uu=g(),gi=a("p"),Vu=r("Get token or None if not existent."),zu=g(),In=a("p"),Wu=r(`Note that a token can be also provided using the
`),hi=a("code"),Gu=r("HUGGING_FACE_HUB_TOKEN"),Bu=r(" environment variable."),Ku=g(),So=a("div"),D(jn.$$.fragment),Ju=g(),di=a("p"),Qu=r("Save token, creating folder as needed."),ml=g(),It=a("h2"),Mo=a("a"),ui=a("span"),D(Nn.$$.fragment),Xu=g(),fi=a("span"),Yu=r("Filtering helpers"),_l=g(),Uo=a("p"),Zu=r("Some helpers to filter repositories on the Hub are available in the "),mi=a("code"),ef=r("huggingface_hub"),tf=r(" package."),bl=g(),jt=a("h3"),Vo=a("a"),_i=a("span"),D(Fn.$$.fragment),of=g(),bi=a("span"),af=r("DatasetFilter"),vl=g(),Me=a("div"),D(Tn.$$.fragment),nf=g(),vi=a("p"),sf=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),rf=g(),D(zo.$$.fragment),$l=g(),Nt=a("h3"),Wo=a("a"),$i=a("span"),D(Pn.$$.fragment),lf=g(),yi=a("span"),cf=r("ModelFilter"),yl=g(),Ue=a("div"),D(On.$$.fragment),pf=g(),Ei=a("p"),gf=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),hf=g(),D(Go.$$.fragment),El=g(),Ft=a("h3"),Bo=a("a"),wi=a("span"),D(Ln.$$.fragment),df=g(),ki=a("span"),uf=r("DatasetSearchArguments"),wl=g(),Ve=a("div"),D(Rn.$$.fragment),ff=g(),Ai=a("p"),mf=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),_f=g(),D(Ko.$$.fragment),kl=g(),Tt=a("h3"),Jo=a("a"),xi=a("span"),D(Cn.$$.fragment),bf=g(),Di=a("span"),vf=r("ModelSearchArguments"),Al=g(),ze=a("div"),D(Sn.$$.fragment),$f=g(),Hi=a("p"),yf=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ef=g(),D(Qo.$$.fragment),this.h()},l(o){const E=M_('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Mn=s(f);c=n(Mn,"A",{id:!0,class:!0,href:!0});var qi=s(c);d=n(qi,"SPAN",{});var Ii=s(d);H(l.$$.fragment,Ii),Ii.forEach(t),qi.forEach(t),u=h(Mn),P=n(Mn,"SPAN",{});var ji=s(P);v=i(ji,"Hugging Face Hub API"),ji.forEach(t),Mn.forEach(t),x=h(o),w=n(o,"P",{});var Un=s(w);y=i(Un,"Below is the documentation for the "),k=n(Un,"CODE",{});var Ni=s(k);O=i(Ni,"HfApi"),Ni.forEach(t),T=i(Un,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Un.forEach(t),L=h(o),_=n(o,"P",{});var Vn=s(_);F=i(Vn,"All methods from the "),M=n(Vn,"CODE",{});var Fi=s(M);z=i(Fi,"HfApi"),Fi.forEach(t),R=i(Vn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Vn.forEach(t),K=h(o),G=n(o,"P",{});var Ti=s(G);A=i(Ti,"The following approach uses the method from the root of the package:"),Ti.forEach(t),U=h(o),H(C.$$.fragment,o),Y=h(o),te=n(o,"P",{});var zn=s(te);Z=i(zn,"The following approach uses the "),J=n(zn,"CODE",{});var Pi=s(J);ee=i(Pi,"HfApi"),Pi.forEach(t),ae=i(zn," class:"),zn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var We=s(ne);Je=i(We,"Using the "),de=n(We,"A",{href:!0});var Oi=s(de);ht=i(Oi,"HfApi"),Oi.forEach(t),Qe=i(We,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),ke=n(We,"CODE",{});var Li=s(ke);dt=i(Li,"huggingface-cli login"),Li.forEach(t),ut=i(We," or "),ft=n(We,"A",{href:!0});var Ri=s(ft);Zn=i(Ri,"login()"),Ri.forEach(t),ia=i(We,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),We.forEach(t),la=h(o),H(Re.$$.fragment,o),ca=h(o),mt=n(o,"H3",{class:!0});var Wn=s(mt);Pt=n(Wn,"A",{id:!0,class:!0,href:!0});var Ci=s(Pt);js=n(Ci,"SPAN",{});var Si=s(js);H(pa.$$.fragment,Si),Si.forEach(t),Ci.forEach(t),fc=h(Wn),Ns=n(Wn,"SPAN",{});var Mi=s(Ns);mc=i(Mi,"HfApi"),Mi.forEach(t),Wn.forEach(t),Xi=h(o),V=n(o,"DIV",{class:!0});var W=s(V);H(ga.$$.fragment,W),_c=h(W),Ae=n(W,"DIV",{class:!0});var Ge=s(Ae);H(ha.$$.fragment,Ge),bc=h(Ge),Fs=n(Ge,"P",{});var Ui=s(Fs);vc=i(Ui,"Closes or re-opens a Discussion or Pull Request."),Ui.forEach(t),$c=h(Ge),H(Ot.$$.fragment,Ge),yc=h(Ge),H(Lt.$$.fragment,Ge),Ge.forEach(t),Ec=h(W),xe=n(W,"DIV",{class:!0});var Be=s(xe);H(da.$$.fragment,Be),wc=h(Be),Ts=n(Be,"P",{});var Vi=s(Ts);kc=i(Vi,"Creates a new comment on the given Discussion."),Vi.forEach(t),Ac=h(Be),H(Rt.$$.fragment,Be),xc=h(Be),H(Ct.$$.fragment,Be),Be.forEach(t),Dc=h(W),De=n(W,"DIV",{class:!0});var Ke=s(De);H(ua.$$.fragment,Ke),Hc=h(Ke),Ps=n(Ke,"P",{});var zi=s(Ps);qc=i(zi,"Creates a commit in the given repo, deleting & uploading files as needed."),zi.forEach(t),Ic=h(Ke),H(St.$$.fragment,Ke),jc=h(Ke),H(Mt.$$.fragment,Ke),Ke.forEach(t),Nc=h(W),le=n(W,"DIV",{class:!0});var me=s(le);H(fa.$$.fragment,me),Fc=h(me),Os=n(me,"P",{});var Wi=s(Os);Tc=i(Wi,"Creates a Discussion or Pull Request."),Wi.forEach(t),Pc=h(me),ma=n(me,"P",{});var Gn=s(ma);Oc=i(Gn,"Pull Requests created programmatically will be in "),Ls=n(Gn,"CODE",{});var Gi=s(Ls);Lc=i(Gi,'"draft"'),Gi.forEach(t),Rc=i(Gn," status."),Gn.forEach(t),Cc=h(me),_a=n(me,"P",{});var Bn=s(_a);Sc=i(Bn,"Creating a Pull Request with changes can also be done at once with "),es=n(Bn,"A",{href:!0});var Bi=s(es);Mc=i(Bi,"HfApi.create_commit()"),Bi.forEach(t),Uc=i(Bn,"."),Bn.forEach(t),Vc=h(me),ts=n(me,"P",{});var us=s(ts);zc=i(us,"Returns: "),os=n(us,"A",{href:!0});var Ki=s(os);Wc=i(Ki,"DiscussionWithDetails"),Ki.forEach(t),us.forEach(t),Gc=h(me),H(Ut.$$.fragment,me),me.forEach(t),Bc=h(W),ce=n(W,"DIV",{class:!0});var _e=s(ce);H(ba.$$.fragment,_e),Kc=h(_e),va=n(_e,"P",{});var Kn=s(va);Jc=i(Kn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Rs=n(Kn,"CODE",{});var Ji=s(Rs);Qc=i(Ji,'"draft"'),Ji.forEach(t),Xc=i(Kn," status."),Kn.forEach(t),Yc=h(_e),$a=n(_e,"P",{});var Jn=s($a);Zc=i(Jn,"Creating a Pull Request with changes can also be done at once with "),as=n(Jn,"A",{href:!0});var Qi=s(as);ep=i(Qi,"HfApi.create_commit()"),Qi.forEach(t),tp=i(Jn,";"),Jn.forEach(t),op=h(_e),ya=n(_e,"P",{});var Qn=s(ya);ap=i(Qn,"This is a wrapper around "),Cs=n(Qn,"CODE",{});var qf=s(Cs);np=i(qf,"HfApi.create_discusssion"),qf.forEach(t),sp=i(Qn,"."),Qn.forEach(t),rp=h(_e),ns=n(_e,"P",{});var wf=s(ns);ip=i(wf,"Returns: "),ss=n(wf,"A",{href:!0});var If=s(ss);lp=i(If,"DiscussionWithDetails"),If.forEach(t),wf.forEach(t),cp=h(_e),H(Vt.$$.fragment,_e),_e.forEach(t),pp=h(W),zt=n(W,"DIV",{class:!0});var Dl=s(zt);H(Ea.$$.fragment,Dl),gp=h(Dl),Ss=n(Dl,"P",{});var jf=s(Ss);hp=i(jf,"Create an empty repo on the HuggingFace Hub."),jf.forEach(t),Dl.forEach(t),dp=h(W),Wt=n(W,"DIV",{class:!0});var Hl=s(Wt);H(wa.$$.fragment,Hl),up=h(Hl),Ms=n(Hl,"P",{});var Nf=s(Ms);fp=i(Nf,"Tag a given commit of a repo on the Hub."),Nf.forEach(t),Hl.forEach(t),mp=h(W),He=n(W,"DIV",{class:!0});var Xo=s(He);H(ka.$$.fragment,Xo),_p=h(Xo),Us=n(Xo,"P",{});var Ff=s(Us);bp=i(Ff,"Get info on one specific dataset on huggingface.co."),Ff.forEach(t),vp=h(Xo),Vs=n(Xo,"P",{});var Tf=s(Vs);$p=i(Tf,"Dataset can be private if you pass an acceptable token."),Tf.forEach(t),yp=h(Xo),H(Gt.$$.fragment,Xo),Xo.forEach(t),Ep=h(W),Xe=n(W,"DIV",{class:!0});var fs=s(Xe);H(Aa.$$.fragment,fs),wp=h(fs),zs=n(fs,"P",{});var Pf=s(zs);kp=i(Pf,"Deletes a file in the given repo."),Pf.forEach(t),Ap=h(fs),H(Bt.$$.fragment,fs),fs.forEach(t),xp=h(W),Ye=n(W,"DIV",{class:!0});var ms=s(Ye);H(xa.$$.fragment,ms),Dp=h(ms),Ws=n(ms,"P",{});var Of=s(Ws);Hp=i(Of,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Of.forEach(t),qp=h(ms),H(Kt.$$.fragment,ms),ms.forEach(t),Ip=h(W),Ze=n(W,"DIV",{class:!0});var _s=s(Ze);H(Da.$$.fragment,_s),jp=h(_s),Gs=n(_s,"P",{});var Lf=s(Gs);Np=i(Lf,"Edits a comment on a Discussion / Pull Request."),Lf.forEach(t),Fp=h(_s),H(Jt.$$.fragment,_s),_s.forEach(t),Tp=h(W),Qt=n(W,"DIV",{class:!0});var ql=s(Qt);H(Ha.$$.fragment,ql),Pp=h(ql),Bs=n(ql,"P",{});var Rf=s(Bs);Op=i(Rf,"Gets all valid dataset tags as a nested namespace object."),Rf.forEach(t),ql.forEach(t),Lp=h(W),qe=n(W,"DIV",{class:!0});var Yo=s(qe);H(qa.$$.fragment,Yo),Rp=h(Yo),Ks=n(Yo,"P",{});var Cf=s(Ks);Cp=i(Cf,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Cf.forEach(t),Sp=h(Yo),rs=n(Yo,"P",{});var kf=s(rs);Mp=i(kf,"Returns: "),is=n(kf,"A",{href:!0});var Sf=s(is);Up=i(Sf,"DiscussionWithDetails"),Sf.forEach(t),kf.forEach(t),Vp=h(Yo),H(Xt.$$.fragment,Yo),Yo.forEach(t),zp=h(W),Yt=n(W,"DIV",{class:!0});var Il=s(Yt);H(Ia.$$.fragment,Il),Wp=h(Il),Js=n(Il,"P",{});var Mf=s(Js);Gp=i(Mf,`Returns the repository name for a given model ID and optional
organization.`),Mf.forEach(t),Il.forEach(t),Bp=h(W),Zt=n(W,"DIV",{class:!0});var jl=s(Zt);H(ja.$$.fragment,jl),Kp=h(jl),Qs=n(jl,"P",{});var Uf=s(Qs);Jp=i(Uf,"Gets all valid model tags as a nested namespace object"),Uf.forEach(t),jl.forEach(t),Qp=h(W),be=n(W,"DIV",{class:!0});var it=s(be);H(Na.$$.fragment,it),Xp=h(it),Xs=n(it,"P",{});var Vf=s(Xs);Yp=i(Vf,"Fetches Discussions and Pull Requests for the given repo."),Vf.forEach(t),Zp=h(it),Ys=n(it,"P",{});var zf=s(Ys);eg=i(zf,"Example:"),zf.forEach(t),tg=h(it),H(eo.$$.fragment,it),og=h(it),H(to.$$.fragment,it),it.forEach(t),ag=h(W),Ie=n(W,"DIV",{class:!0});var Zo=s(Ie);H(Fa.$$.fragment,Zo),ng=h(Zo),Zs=n(Zo,"P",{});var Wf=s(Zs);sg=i(Wf,"Hides a comment on a Discussion / Pull Request."),Wf.forEach(t),rg=h(Zo),H(oo.$$.fragment,Zo),ig=h(Zo),H(ao.$$.fragment,Zo),Zo.forEach(t),lg=h(W),je=n(W,"DIV",{class:!0});var ea=s(je);H(Ta.$$.fragment,ea),cg=h(ea),er=n(ea,"P",{});var Gf=s(er);pg=i(Gf,"Get the public list of all the datasets on huggingface.co"),Gf.forEach(t),gg=h(ea),H(no.$$.fragment,ea),hg=h(ea),H(so.$$.fragment,ea),ea.forEach(t),dg=h(W),ro=n(W,"DIV",{class:!0});var Nl=s(ro);H(Pa.$$.fragment,Nl),ug=h(Nl),tr=n(Nl,"P",{});var Bf=s(tr);fg=i(Bf,"Get the public list of all the metrics on huggingface.co"),Bf.forEach(t),Nl.forEach(t),mg=h(W),ve=n(W,"DIV",{class:!0});var lt=s(ve);H(Oa.$$.fragment,lt),_g=h(lt),or=n(lt,"P",{});var Kf=s(or);bg=i(Kf,"Get the public list of all the models on huggingface.co"),Kf.forEach(t),vg=h(lt),La=n(lt,"P",{});var Fl=s(La);$g=i(Fl,"Returns: List of "),ls=n(Fl,"A",{href:!0});var Jf=s(ls);yg=i(Jf,"huggingface_hub.hf_api.ModelInfo"),Jf.forEach(t),Eg=i(Fl," objects"),Fl.forEach(t),wg=h(lt),H(io.$$.fragment,lt),kg=h(lt),H(lo.$$.fragment,lt),lt.forEach(t),Ag=h(W),co=n(W,"DIV",{class:!0});var Tl=s(co);H(Ra.$$.fragment,Tl),xg=h(Tl),ar=n(Tl,"P",{});var Qf=s(ar);Dg=i(Qf,"Get the list of files in a given repo."),Qf.forEach(t),Tl.forEach(t),Hg=h(W),po=n(W,"DIV",{class:!0});var Pl=s(po);H(Ca.$$.fragment,Pl),qg=h(Pl),nr=n(Pl,"P",{});var Xf=s(nr);Ig=i(Xf,"Get the public list of all Spaces on huggingface.co"),Xf.forEach(t),Pl.forEach(t),jg=h(W),et=n(W,"DIV",{class:!0});var bs=s(et);H(Sa.$$.fragment,bs),Ng=h(bs),sr=n(bs,"P",{});var Yf=s(sr);Fg=i(Yf,"Merges a Pull Request."),Yf.forEach(t),Tg=h(bs),H(go.$$.fragment,bs),bs.forEach(t),Pg=h(W),Ne=n(W,"DIV",{class:!0});var ta=s(Ne);H(Ma.$$.fragment,ta),Og=h(ta),rr=n(ta,"P",{});var Zf=s(rr);Lg=i(Zf,"Get info on one specific model on huggingface.co"),Zf.forEach(t),Rg=h(ta),ir=n(ta,"P",{});var em=s(ir);Cg=i(em,"Model can be private if you pass an acceptable token or are logged in."),em.forEach(t),Sg=h(ta),H(ho.$$.fragment,ta),ta.forEach(t),Mg=h(W),Fe=n(W,"DIV",{class:!0});var oa=s(Fe);H(Ua.$$.fragment,oa),Ug=h(oa),lr=n(oa,"P",{});var tm=s(lr);Vg=i(tm,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),tm.forEach(t),zg=h(oa),Va=n(oa,"P",{});var Ol=s(Va);Wg=i(Ol,`Note there are certain limitations. For more information about moving
repositories, please see
`),za=n(Ol,"A",{href:!0,rel:!0});var om=s(za);Gg=i(om,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),om.forEach(t),Bg=i(Ol,"."),Ol.forEach(t),Kg=h(oa),H(uo.$$.fragment,oa),oa.forEach(t),Jg=h(W),Te=n(W,"DIV",{class:!0});var aa=s(Te);H(Wa.$$.fragment,aa),Qg=h(aa),cr=n(aa,"P",{});var am=s(cr);Xg=i(am,"Renames a Discussion."),am.forEach(t),Yg=h(aa),H(fo.$$.fragment,aa),Zg=h(aa),H(mo.$$.fragment,aa),aa.forEach(t),eh=h(W),tt=n(W,"DIV",{class:!0});var vs=s(tt);H(Ga.$$.fragment,vs),th=h(vs),pr=n(vs,"P",{});var nm=s(pr);oh=i(nm,"Get the info object for a given repo of a given type."),nm.forEach(t),ah=h(vs),H(_o.$$.fragment,vs),vs.forEach(t),nh=h(W),bo=n(W,"DIV",{class:!0});var Ll=s(bo);H(Ba.$$.fragment,Ll),sh=h(Ll),gr=n(Ll,"P",{});var sm=s(gr);rh=i(sm,`Saves the passed access token so git can correctly authenticate the
user.`),sm.forEach(t),Ll.forEach(t),ih=h(W),Pe=n(W,"DIV",{class:!0});var na=s(Pe);H(Ka.$$.fragment,na),lh=h(na),hr=n(na,"P",{});var rm=s(hr);ch=i(rm,"Get info on one specific Space on huggingface.co."),rm.forEach(t),ph=h(na),dr=n(na,"P",{});var im=s(dr);gh=i(im,"Space can be private if you pass an acceptable token."),im.forEach(t),hh=h(na),H(vo.$$.fragment,na),na.forEach(t),dh=h(W),$o=n(W,"DIV",{class:!0});var Rl=s($o);H(Ja.$$.fragment,Rl),uh=h(Rl),ur=n(Rl,"P",{});var lm=s(ur);fh=i(lm,"Resets the user\u2019s access token."),lm.forEach(t),Rl.forEach(t),mh=h(W),ot=n(W,"DIV",{class:!0});var $s=s(ot);H(Qa.$$.fragment,$s),_h=h($s),fr=n($s,"P",{});var cm=s(fr);bh=i(cm,"Update the visibility setting of a repository."),cm.forEach(t),vh=h($s),H(yo.$$.fragment,$s),$s.forEach(t),$h=h(W),$e=n(W,"DIV",{class:!0});var ct=s($e);H(Xa.$$.fragment,ct),yh=h(ct),mr=n(ct,"P",{});var pm=s(mr);Eh=i(pm,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),pm.forEach(t),wh=h(ct),H(Eo.$$.fragment,ct),kh=h(ct),H(wo.$$.fragment,ct),Ah=h(ct),H(ko.$$.fragment,ct),ct.forEach(t),xh=h(W),re=n(W,"DIV",{class:!0});var pe=s(re);H(Ya.$$.fragment,pe),Dh=h(pe),_r=n(pe,"P",{});var gm=s(_r);Hh=i(gm,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),gm.forEach(t),qh=h(pe),br=n(pe,"P",{});var hm=s(br);Ih=i(hm,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),hm.forEach(t),jh=h(pe),ue=n(pe,"P",{});var Le=s(ue);Nh=i(Le,"Use the "),vr=n(Le,"CODE",{});var dm=s(vr);Fh=i(dm,"allow_patterns"),dm.forEach(t),Th=i(Le," and "),$r=n(Le,"CODE",{});var um=s($r);Ph=i(um,"ignore_patterns"),um.forEach(t),Oh=i(Le,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Za=n(Le,"A",{href:!0,rel:!0});var fm=s(Za);Lh=i(fm,"here"),fm.forEach(t),Rh=i(Le,`. If both
`),yr=n(Le,"CODE",{});var mm=s(yr);Ch=i(mm,"allow_patterns"),mm.forEach(t),Sh=i(Le," and "),Er=n(Le,"CODE",{});var _m=s(Er);Mh=i(_m,"ignore_patterns"),_m.forEach(t),Uh=i(Le,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Le.forEach(t),Vh=h(pe),en=n(pe,"P",{});var Cl=s(en);zh=i(Cl,"Uses "),wr=n(Cl,"CODE",{});var bm=s(wr);Wh=i(bm,"HfApi.create_commit"),bm.forEach(t),Gh=i(Cl," under the hood."),Cl.forEach(t),Bh=h(pe),H(Ao.$$.fragment,pe),Kh=h(pe),H(xo.$$.fragment,pe),Jh=h(pe),H(Do.$$.fragment,pe),pe.forEach(t),Qh=h(W),Ho=n(W,"DIV",{class:!0});var Sl=s(Ho);H(tn.$$.fragment,Sl),Xh=h(Sl),kr=n(Sl,"P",{});var vm=s(kr);Yh=i(vm,"Call HF API to know \u201Cwhoami\u201D."),vm.forEach(t),Sl.forEach(t),W.forEach(t),Yi=h(o),_t=n(o,"H3",{class:!0});var Ml=s(_t);qo=n(Ml,"A",{id:!0,class:!0,href:!0});var $m=s(qo);Ar=n($m,"SPAN",{});var ym=s(Ar);H(on.$$.fragment,ym),ym.forEach(t),$m.forEach(t),Zh=h(Ml),xr=n(Ml,"SPAN",{});var Em=s(xr);ed=i(Em,"ModelInfo"),Em.forEach(t),Ml.forEach(t),Zi=h(o),bt=n(o,"DIV",{class:!0});var Ul=s(bt);H(an.$$.fragment,Ul),td=h(Ul),Dr=n(Ul,"P",{});var wm=s(Dr);od=i(wm,"Info about a model accessible from huggingface.co"),wm.forEach(t),Ul.forEach(t),el=h(o),vt=n(o,"H3",{class:!0});var Vl=s(vt);Io=n(Vl,"A",{id:!0,class:!0,href:!0});var km=s(Io);Hr=n(km,"SPAN",{});var Am=s(Hr);H(nn.$$.fragment,Am),Am.forEach(t),km.forEach(t),ad=h(Vl),qr=n(Vl,"SPAN",{});var xm=s(qr);nd=i(xm,"DatasetInfo"),xm.forEach(t),Vl.forEach(t),tl=h(o),$t=n(o,"DIV",{class:!0});var zl=s($t);H(sn.$$.fragment,zl),sd=h(zl),Ir=n(zl,"P",{});var Dm=s(Ir);rd=i(Dm,"Info about a dataset accessible from huggingface.co"),Dm.forEach(t),zl.forEach(t),ol=h(o),yt=n(o,"H3",{class:!0});var Wl=s(yt);jo=n(Wl,"A",{id:!0,class:!0,href:!0});var Hm=s(jo);jr=n(Hm,"SPAN",{});var qm=s(jr);H(rn.$$.fragment,qm),qm.forEach(t),Hm.forEach(t),id=h(Wl),Nr=n(Wl,"SPAN",{});var Im=s(Nr);ld=i(Im,"SpaceInfo"),Im.forEach(t),Wl.forEach(t),al=h(o),Ce=n(o,"DIV",{class:!0});var ys=s(Ce);H(ln.$$.fragment,ys),cd=h(ys),Fr=n(ys,"P",{});var jm=s(Fr);pd=i(jm,"Info about a Space accessible from huggingface.co"),jm.forEach(t),gd=h(ys),Tr=n(ys,"P",{});var Nm=s(Tr);hd=i(Nm,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Nm.forEach(t),ys.forEach(t),nl=h(o),Et=n(o,"H3",{class:!0});var Gl=s(Et);No=n(Gl,"A",{id:!0,class:!0,href:!0});var Fm=s(No);Pr=n(Fm,"SPAN",{});var Tm=s(Pr);H(cn.$$.fragment,Tm),Tm.forEach(t),Fm.forEach(t),dd=h(Gl),Or=n(Gl,"SPAN",{});var Pm=s(Or);ud=i(Pm,"RepoFile"),Pm.forEach(t),Gl.forEach(t),sl=h(o),wt=n(o,"DIV",{class:!0});var Bl=s(wt);H(pn.$$.fragment,Bl),fd=h(Bl),Lr=n(Bl,"P",{});var Om=s(Lr);md=i(Om,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Om.forEach(t),Bl.forEach(t),rl=h(o),kt=n(o,"H3",{class:!0});var Kl=s(kt);Fo=n(Kl,"A",{id:!0,class:!0,href:!0});var Lm=s(Fo);Rr=n(Lm,"SPAN",{});var Rm=s(Rr);H(gn.$$.fragment,Rm),Rm.forEach(t),Lm.forEach(t),_d=h(Kl),Cr=n(Kl,"SPAN",{});var Cm=s(Cr);bd=i(Cm,"CommitInfo"),Cm.forEach(t),Kl.forEach(t),il=h(o),Se=n(o,"DIV",{class:!0});var Es=s(Se);H(hn.$$.fragment,Es),vd=h(Es),Sr=n(Es,"P",{});var Sm=s(Sr);$d=i(Sm,"Data structure containing information about a newly created commit."),Sm.forEach(t),yd=h(Es),dn=n(Es,"P",{});var Jl=s(dn);Ed=i(Jl,"Returned by "),cs=n(Jl,"A",{href:!0});var Mm=s(cs);wd=i(Mm,"create_commit()"),Mm.forEach(t),kd=i(Jl,"."),Jl.forEach(t),Es.forEach(t),ll=h(o),At=n(o,"H2",{class:!0});var Ql=s(At);To=n(Ql,"A",{id:!0,class:!0,href:!0});var Um=s(To);Mr=n(Um,"SPAN",{});var Vm=s(Mr);H(un.$$.fragment,Vm),Vm.forEach(t),Um.forEach(t),Ad=h(Ql),ps=n(Ql,"SPAN",{});var Af=s(ps);Ur=n(Af,"CODE",{});var zm=s(Ur);xd=i(zm,"create_commit"),zm.forEach(t),Dd=i(Af," API"),Af.forEach(t),Ql.forEach(t),cl=h(o),Po=n(o,"P",{});var Xl=s(Po);Hd=i(Xl,"Below are the supported values for "),Vr=n(Xl,"CODE",{});var Wm=s(Vr);qd=i(Wm,"CommitOperation()"),Wm.forEach(t),Id=i(Xl,":"),Xl.forEach(t),pl=h(o),fe=n(o,"DIV",{class:!0});var pt=s(fe);H(fn.$$.fragment,pt),jd=h(pt),zr=n(pt,"P",{});var Gm=s(zr);Nd=i(Gm,`Data structure holding necessary info to upload a file
to a repository on the Hub`),Gm.forEach(t),Fd=h(pt),ye=n(pt,"DIV",{class:!0});var gt=s(ye);H(mn.$$.fragment,gt),Td=h(gt),_n=n(gt,"P",{});var Yl=s(_n);Pd=i(Yl,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Wr=n(Yl,"CODE",{});var Bm=s(Wr);Od=i(Bm,"path_or_fileobj"),Bm.forEach(t),Ld=i(Yl,"."),Yl.forEach(t),Rd=h(gt),bn=n(gt,"P",{});var Zl=s(bn);Cd=i(Zl,"Triggers "),Gr=n(Zl,"CODE",{});var Km=s(Gr);Sd=i(Km,"self.validate"),Km.forEach(t),Md=i(Zl,"."),Zl.forEach(t),Ud=h(gt),vn=n(gt,"P",{});var ec=s(vn);Vd=i(ec,"Raises: "),Br=n(ec,"CODE",{});var Jm=s(Br);zd=i(Jm,"ValueError"),Jm.forEach(t),Wd=i(ec," if self.validate fails"),ec.forEach(t),Gd=h(gt),H(Oo.$$.fragment,gt),gt.forEach(t),Bd=h(pt),at=n(pt,"DIV",{class:!0});var ws=s(at);H($n.$$.fragment,ws),Kd=h(ws),gs=n(ws,"P",{});var xf=s(gs);Jd=i(xf,"The base64-encoded content of "),Kr=n(xf,"CODE",{});var Qm=s(Kr);Qd=i(Qm,"path_or_fileobj"),Qm.forEach(t),xf.forEach(t),Xd=h(ws),hs=n(ws,"P",{});var Df=s(hs);Yd=i(Df,"Returns: "),Jr=n(Df,"CODE",{});var Xm=s(Jr);Zd=i(Xm,"bytes"),Xm.forEach(t),Df.forEach(t),ws.forEach(t),eu=h(pt),Oe=n(pt,"DIV",{class:!0});var sa=s(Oe);H(yn.$$.fragment,sa),tu=h(sa),En=n(sa,"P",{});var tc=s(En);ou=i(tc,"Ensures "),Qr=n(tc,"CODE",{});var Ym=s(Qr);au=i(Ym,"path_or_fileobj"),Ym.forEach(t),nu=i(tc," is valid:"),tc.forEach(t),su=h(sa),xt=n(sa,"UL",{});var ks=s(xt);nt=n(ks,"LI",{});var Xn=s(nt);ru=i(Xn,"Ensures it is either a "),Xr=n(Xn,"CODE",{});var Zm=s(Xr);iu=i(Zm,"str"),Zm.forEach(t),lu=i(Xn,", "),Yr=n(Xn,"CODE",{});var e_=s(Yr);cu=i(e_,"bytes"),e_.forEach(t),pu=i(Xn," or an instance of "),Zr=n(Xn,"CODE",{});var t_=s(Zr);gu=i(t_,"io.BufferedIOBase"),t_.forEach(t),Xn.forEach(t),hu=h(ks),wn=n(ks,"LI",{});var oc=s(wn);du=i(oc,"If it is a "),ei=n(oc,"CODE",{});var o_=s(ei);uu=i(o_,"str"),o_.forEach(t),fu=i(oc,", ensure that it is a file path and that the file exists"),oc.forEach(t),mu=h(ks),st=n(ks,"LI",{});var Yn=s(st);_u=i(Yn,"If it is an instance of "),ti=n(Yn,"CODE",{});var a_=s(ti);bu=i(a_,"io.BufferedIOBase"),a_.forEach(t),vu=i(Yn,", ensures it supports "),oi=n(Yn,"CODE",{});var n_=s(oi);$u=i(n_,"seek()"),n_.forEach(t),yu=i(Yn," and "),ai=n(Yn,"CODE",{});var s_=s(ai);Eu=i(s_,"tell()"),s_.forEach(t),Yn.forEach(t),ks.forEach(t),wu=h(sa),Dt=n(sa,"P",{});var As=s(Dt);ku=i(As,"Raises: "),ni=n(As,"CODE",{});var r_=s(ni);Au=i(r_,"ValueError"),r_.forEach(t),xu=i(As," if "),si=n(As,"CODE",{});var i_=s(si);Du=i(i_,"path_or_fileobj"),i_.forEach(t),Hu=i(As," is not valid"),As.forEach(t),sa.forEach(t),pt.forEach(t),gl=h(o),Ht=n(o,"DIV",{class:!0});var ac=s(Ht);H(kn.$$.fragment,ac),qu=h(ac),ri=n(ac,"P",{});var l_=s(ri);Iu=i(l_,`Data structure holding necessary info to delete
a file from a repository on the Hub`),l_.forEach(t),ac.forEach(t),hl=h(o),qt=n(o,"H2",{class:!0});var nc=s(qt);Lo=n(nc,"A",{id:!0,class:!0,href:!0});var c_=s(Lo);ii=n(c_,"SPAN",{});var p_=s(ii);H(An.$$.fragment,p_),p_.forEach(t),c_.forEach(t),ju=h(nc),li=n(nc,"SPAN",{});var g_=s(li);Nu=i(g_,"Hugging Face local storage"),g_.forEach(t),nc.forEach(t),dl=h(o),xn=n(o,"P",{});var Hf=s(xn);ci=n(Hf,"CODE",{});var h_=s(ci);Fu=i(h_,"huggingface_hub"),h_.forEach(t),Tu=i(Hf,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Hf.forEach(t),ul=h(o),Ro=n(o,"P",{});var sc=s(Ro);Pu=i(sc,"It does this using the "),ds=n(sc,"A",{href:!0});var d_=s(ds);Ou=i(d_,"HfFolder"),d_.forEach(t),Lu=i(sc," utility, which saves data at the root of the user."),sc.forEach(t),fl=h(o),we=n(o,"DIV",{class:!0});var ra=s(we);H(Dn.$$.fragment,ra),Ru=h(ra),Co=n(ra,"DIV",{class:!0});var rc=s(Co);H(Hn.$$.fragment,rc),Cu=h(rc),pi=n(rc,"P",{});var u_=s(pi);Su=i(u_,"Deletes the token from storage. Does not fail if token does not exist."),u_.forEach(t),rc.forEach(t),Mu=h(ra),rt=n(ra,"DIV",{class:!0});var xs=s(rt);H(qn.$$.fragment,xs),Uu=h(xs),gi=n(xs,"P",{});var f_=s(gi);Vu=i(f_,"Get token or None if not existent."),f_.forEach(t),zu=h(xs),In=n(xs,"P",{});var ic=s(In);Wu=i(ic,`Note that a token can be also provided using the
`),hi=n(ic,"CODE",{});var m_=s(hi);Gu=i(m_,"HUGGING_FACE_HUB_TOKEN"),m_.forEach(t),Bu=i(ic," environment variable."),ic.forEach(t),xs.forEach(t),Ku=h(ra),So=n(ra,"DIV",{class:!0});var lc=s(So);H(jn.$$.fragment,lc),Ju=h(lc),di=n(lc,"P",{});var __=s(di);Qu=i(__,"Save token, creating folder as needed."),__.forEach(t),lc.forEach(t),ra.forEach(t),ml=h(o),It=n(o,"H2",{class:!0});var cc=s(It);Mo=n(cc,"A",{id:!0,class:!0,href:!0});var b_=s(Mo);ui=n(b_,"SPAN",{});var v_=s(ui);H(Nn.$$.fragment,v_),v_.forEach(t),b_.forEach(t),Xu=h(cc),fi=n(cc,"SPAN",{});var $_=s(fi);Yu=i($_,"Filtering helpers"),$_.forEach(t),cc.forEach(t),_l=h(o),Uo=n(o,"P",{});var pc=s(Uo);Zu=i(pc,"Some helpers to filter repositories on the Hub are available in the "),mi=n(pc,"CODE",{});var y_=s(mi);ef=i(y_,"huggingface_hub"),y_.forEach(t),tf=i(pc," package."),pc.forEach(t),bl=h(o),jt=n(o,"H3",{class:!0});var gc=s(jt);Vo=n(gc,"A",{id:!0,class:!0,href:!0});var E_=s(Vo);_i=n(E_,"SPAN",{});var w_=s(_i);H(Fn.$$.fragment,w_),w_.forEach(t),E_.forEach(t),of=h(gc),bi=n(gc,"SPAN",{});var k_=s(bi);af=i(k_,"DatasetFilter"),k_.forEach(t),gc.forEach(t),vl=h(o),Me=n(o,"DIV",{class:!0});var Ds=s(Me);H(Tn.$$.fragment,Ds),nf=h(Ds),vi=n(Ds,"P",{});var A_=s(vi);sf=i(A_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),A_.forEach(t),rf=h(Ds),H(zo.$$.fragment,Ds),Ds.forEach(t),$l=h(o),Nt=n(o,"H3",{class:!0});var hc=s(Nt);Wo=n(hc,"A",{id:!0,class:!0,href:!0});var x_=s(Wo);$i=n(x_,"SPAN",{});var D_=s($i);H(Pn.$$.fragment,D_),D_.forEach(t),x_.forEach(t),lf=h(hc),yi=n(hc,"SPAN",{});var H_=s(yi);cf=i(H_,"ModelFilter"),H_.forEach(t),hc.forEach(t),yl=h(o),Ue=n(o,"DIV",{class:!0});var Hs=s(Ue);H(On.$$.fragment,Hs),pf=h(Hs),Ei=n(Hs,"P",{});var q_=s(Ei);gf=i(q_,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),q_.forEach(t),hf=h(Hs),H(Go.$$.fragment,Hs),Hs.forEach(t),El=h(o),Ft=n(o,"H3",{class:!0});var dc=s(Ft);Bo=n(dc,"A",{id:!0,class:!0,href:!0});var I_=s(Bo);wi=n(I_,"SPAN",{});var j_=s(wi);H(Ln.$$.fragment,j_),j_.forEach(t),I_.forEach(t),df=h(dc),ki=n(dc,"SPAN",{});var N_=s(ki);uf=i(N_,"DatasetSearchArguments"),N_.forEach(t),dc.forEach(t),wl=h(o),Ve=n(o,"DIV",{class:!0});var qs=s(Ve);H(Rn.$$.fragment,qs),ff=h(qs),Ai=n(qs,"P",{});var F_=s(Ai);mf=i(F_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),F_.forEach(t),_f=h(qs),H(Ko.$$.fragment,qs),qs.forEach(t),kl=h(o),Tt=n(o,"H3",{class:!0});var uc=s(Tt);Jo=n(uc,"A",{id:!0,class:!0,href:!0});var T_=s(Jo);xi=n(T_,"SPAN",{});var P_=s(xi);H(Cn.$$.fragment,P_),P_.forEach(t),T_.forEach(t),bf=h(uc),Di=n(uc,"SPAN",{});var O_=s(Di);vf=i(O_,"ModelSearchArguments"),O_.forEach(t),uc.forEach(t),Al=h(o),ze=n(o,"DIV",{class:!0});var Is=s(ze);H(Sn.$$.fragment,Is),$f=h(Is),Hi=n(Is,"P",{});var L_=s(Hi);yf=i(L_,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),L_.forEach(t),Ef=h(Is),H(Qo.$$.fragment,Is),Is.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Ib)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(ft,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Pt,"id","huggingface_hub.HfApi"),m(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pt,"href","#huggingface_hub.HfApi"),m(mt,"class","relative group"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(es,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(os,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(as,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(ss,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(is,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ls,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),m(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(za,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(za,"rel","nofollow"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Za,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(Za,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"id","huggingface_hub.hf_api.ModelInfo"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#huggingface_hub.hf_api.ModelInfo"),m(_t,"class","relative group"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.hf_api.DatasetInfo"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.hf_api.DatasetInfo"),m(vt,"class","relative group"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","huggingface_hub.hf_api.SpaceInfo"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#huggingface_hub.hf_api.SpaceInfo"),m(yt,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","huggingface_hub.hf_api.RepoFile"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#huggingface_hub.hf_api.RepoFile"),m(Et,"class","relative group"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.CommitInfo"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.CommitInfo"),m(kt,"class","relative group"),m(cs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","huggingface_hub.CommitOperationAdd"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#huggingface_hub.CommitOperationAdd"),m(At,"class","relative group"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","huggingface_hub.HfFolder"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#huggingface_hub.HfFolder"),m(qt,"class","relative group"),m(ds,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"id","filtering-helpers"),m(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Mo,"href","#filtering-helpers"),m(It,"class","relative group"),m(Vo,"id","huggingface_hub.DatasetFilter"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#huggingface_hub.DatasetFilter"),m(jt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","huggingface_hub.ModelFilter"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#huggingface_hub.ModelFilter"),m(Nt,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bo,"id","huggingface_hub.DatasetSearchArguments"),m(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bo,"href","#huggingface_hub.DatasetSearchArguments"),m(Ft,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jo,"id","huggingface_hub.ModelSearchArguments"),m(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Jo,"href","#huggingface_hub.ModelSearchArguments"),m(Tt,"class","relative group"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,d),q(l,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,L,E),$(o,_,E),e(_,F),e(_,M),e(M,z),e(_,R),$(o,K,E),$(o,G,E),e(G,A),$(o,U,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Je),e(ne,de),e(de,ht),e(ne,Qe),e(ne,ke),e(ke,dt),e(ne,ut),e(ne,ft),e(ft,Zn),e(ne,ia),$(o,la,E),q(Re,o,E),$(o,ca,E),$(o,mt,E),e(mt,Pt),e(Pt,js),q(pa,js,null),e(mt,fc),e(mt,Ns),e(Ns,mc),$(o,Xi,E),$(o,V,E),q(ga,V,null),e(V,_c),e(V,Ae),q(ha,Ae,null),e(Ae,bc),e(Ae,Fs),e(Fs,vc),e(Ae,$c),q(Ot,Ae,null),e(Ae,yc),q(Lt,Ae,null),e(V,Ec),e(V,xe),q(da,xe,null),e(xe,wc),e(xe,Ts),e(Ts,kc),e(xe,Ac),q(Rt,xe,null),e(xe,xc),q(Ct,xe,null),e(V,Dc),e(V,De),q(ua,De,null),e(De,Hc),e(De,Ps),e(Ps,qc),e(De,Ic),q(St,De,null),e(De,jc),q(Mt,De,null),e(V,Nc),e(V,le),q(fa,le,null),e(le,Fc),e(le,Os),e(Os,Tc),e(le,Pc),e(le,ma),e(ma,Oc),e(ma,Ls),e(Ls,Lc),e(ma,Rc),e(le,Cc),e(le,_a),e(_a,Sc),e(_a,es),e(es,Mc),e(_a,Uc),e(le,Vc),e(le,ts),e(ts,zc),e(ts,os),e(os,Wc),e(le,Gc),q(Ut,le,null),e(V,Bc),e(V,ce),q(ba,ce,null),e(ce,Kc),e(ce,va),e(va,Jc),e(va,Rs),e(Rs,Qc),e(va,Xc),e(ce,Yc),e(ce,$a),e($a,Zc),e($a,as),e(as,ep),e($a,tp),e(ce,op),e(ce,ya),e(ya,ap),e(ya,Cs),e(Cs,np),e(ya,sp),e(ce,rp),e(ce,ns),e(ns,ip),e(ns,ss),e(ss,lp),e(ce,cp),q(Vt,ce,null),e(V,pp),e(V,zt),q(Ea,zt,null),e(zt,gp),e(zt,Ss),e(Ss,hp),e(V,dp),e(V,Wt),q(wa,Wt,null),e(Wt,up),e(Wt,Ms),e(Ms,fp),e(V,mp),e(V,He),q(ka,He,null),e(He,_p),e(He,Us),e(Us,bp),e(He,vp),e(He,Vs),e(Vs,$p),e(He,yp),q(Gt,He,null),e(V,Ep),e(V,Xe),q(Aa,Xe,null),e(Xe,wp),e(Xe,zs),e(zs,kp),e(Xe,Ap),q(Bt,Xe,null),e(V,xp),e(V,Ye),q(xa,Ye,null),e(Ye,Dp),e(Ye,Ws),e(Ws,Hp),e(Ye,qp),q(Kt,Ye,null),e(V,Ip),e(V,Ze),q(Da,Ze,null),e(Ze,jp),e(Ze,Gs),e(Gs,Np),e(Ze,Fp),q(Jt,Ze,null),e(V,Tp),e(V,Qt),q(Ha,Qt,null),e(Qt,Pp),e(Qt,Bs),e(Bs,Op),e(V,Lp),e(V,qe),q(qa,qe,null),e(qe,Rp),e(qe,Ks),e(Ks,Cp),e(qe,Sp),e(qe,rs),e(rs,Mp),e(rs,is),e(is,Up),e(qe,Vp),q(Xt,qe,null),e(V,zp),e(V,Yt),q(Ia,Yt,null),e(Yt,Wp),e(Yt,Js),e(Js,Gp),e(V,Bp),e(V,Zt),q(ja,Zt,null),e(Zt,Kp),e(Zt,Qs),e(Qs,Jp),e(V,Qp),e(V,be),q(Na,be,null),e(be,Xp),e(be,Xs),e(Xs,Yp),e(be,Zp),e(be,Ys),e(Ys,eg),e(be,tg),q(eo,be,null),e(be,og),q(to,be,null),e(V,ag),e(V,Ie),q(Fa,Ie,null),e(Ie,ng),e(Ie,Zs),e(Zs,sg),e(Ie,rg),q(oo,Ie,null),e(Ie,ig),q(ao,Ie,null),e(V,lg),e(V,je),q(Ta,je,null),e(je,cg),e(je,er),e(er,pg),e(je,gg),q(no,je,null),e(je,hg),q(so,je,null),e(V,dg),e(V,ro),q(Pa,ro,null),e(ro,ug),e(ro,tr),e(tr,fg),e(V,mg),e(V,ve),q(Oa,ve,null),e(ve,_g),e(ve,or),e(or,bg),e(ve,vg),e(ve,La),e(La,$g),e(La,ls),e(ls,yg),e(La,Eg),e(ve,wg),q(io,ve,null),e(ve,kg),q(lo,ve,null),e(V,Ag),e(V,co),q(Ra,co,null),e(co,xg),e(co,ar),e(ar,Dg),e(V,Hg),e(V,po),q(Ca,po,null),e(po,qg),e(po,nr),e(nr,Ig),e(V,jg),e(V,et),q(Sa,et,null),e(et,Ng),e(et,sr),e(sr,Fg),e(et,Tg),q(go,et,null),e(V,Pg),e(V,Ne),q(Ma,Ne,null),e(Ne,Og),e(Ne,rr),e(rr,Lg),e(Ne,Rg),e(Ne,ir),e(ir,Cg),e(Ne,Sg),q(ho,Ne,null),e(V,Mg),e(V,Fe),q(Ua,Fe,null),e(Fe,Ug),e(Fe,lr),e(lr,Vg),e(Fe,zg),e(Fe,Va),e(Va,Wg),e(Va,za),e(za,Gg),e(Va,Bg),e(Fe,Kg),q(uo,Fe,null),e(V,Jg),e(V,Te),q(Wa,Te,null),e(Te,Qg),e(Te,cr),e(cr,Xg),e(Te,Yg),q(fo,Te,null),e(Te,Zg),q(mo,Te,null),e(V,eh),e(V,tt),q(Ga,tt,null),e(tt,th),e(tt,pr),e(pr,oh),e(tt,ah),q(_o,tt,null),e(V,nh),e(V,bo),q(Ba,bo,null),e(bo,sh),e(bo,gr),e(gr,rh),e(V,ih),e(V,Pe),q(Ka,Pe,null),e(Pe,lh),e(Pe,hr),e(hr,ch),e(Pe,ph),e(Pe,dr),e(dr,gh),e(Pe,hh),q(vo,Pe,null),e(V,dh),e(V,$o),q(Ja,$o,null),e($o,uh),e($o,ur),e(ur,fh),e(V,mh),e(V,ot),q(Qa,ot,null),e(ot,_h),e(ot,fr),e(fr,bh),e(ot,vh),q(yo,ot,null),e(V,$h),e(V,$e),q(Xa,$e,null),e($e,yh),e($e,mr),e(mr,Eh),e($e,wh),q(Eo,$e,null),e($e,kh),q(wo,$e,null),e($e,Ah),q(ko,$e,null),e(V,xh),e(V,re),q(Ya,re,null),e(re,Dh),e(re,_r),e(_r,Hh),e(re,qh),e(re,br),e(br,Ih),e(re,jh),e(re,ue),e(ue,Nh),e(ue,vr),e(vr,Fh),e(ue,Th),e(ue,$r),e($r,Ph),e(ue,Oh),e(ue,Za),e(Za,Lh),e(ue,Rh),e(ue,yr),e(yr,Ch),e(ue,Sh),e(ue,Er),e(Er,Mh),e(ue,Uh),e(re,Vh),e(re,en),e(en,zh),e(en,wr),e(wr,Wh),e(en,Gh),e(re,Bh),q(Ao,re,null),e(re,Kh),q(xo,re,null),e(re,Jh),q(Do,re,null),e(V,Qh),e(V,Ho),q(tn,Ho,null),e(Ho,Xh),e(Ho,kr),e(kr,Yh),$(o,Yi,E),$(o,_t,E),e(_t,qo),e(qo,Ar),q(on,Ar,null),e(_t,Zh),e(_t,xr),e(xr,ed),$(o,Zi,E),$(o,bt,E),q(an,bt,null),e(bt,td),e(bt,Dr),e(Dr,od),$(o,el,E),$(o,vt,E),e(vt,Io),e(Io,Hr),q(nn,Hr,null),e(vt,ad),e(vt,qr),e(qr,nd),$(o,tl,E),$(o,$t,E),q(sn,$t,null),e($t,sd),e($t,Ir),e(Ir,rd),$(o,ol,E),$(o,yt,E),e(yt,jo),e(jo,jr),q(rn,jr,null),e(yt,id),e(yt,Nr),e(Nr,ld),$(o,al,E),$(o,Ce,E),q(ln,Ce,null),e(Ce,cd),e(Ce,Fr),e(Fr,pd),e(Ce,gd),e(Ce,Tr),e(Tr,hd),$(o,nl,E),$(o,Et,E),e(Et,No),e(No,Pr),q(cn,Pr,null),e(Et,dd),e(Et,Or),e(Or,ud),$(o,sl,E),$(o,wt,E),q(pn,wt,null),e(wt,fd),e(wt,Lr),e(Lr,md),$(o,rl,E),$(o,kt,E),e(kt,Fo),e(Fo,Rr),q(gn,Rr,null),e(kt,_d),e(kt,Cr),e(Cr,bd),$(o,il,E),$(o,Se,E),q(hn,Se,null),e(Se,vd),e(Se,Sr),e(Sr,$d),e(Se,yd),e(Se,dn),e(dn,Ed),e(dn,cs),e(cs,wd),e(dn,kd),$(o,ll,E),$(o,At,E),e(At,To),e(To,Mr),q(un,Mr,null),e(At,Ad),e(At,ps),e(ps,Ur),e(Ur,xd),e(ps,Dd),$(o,cl,E),$(o,Po,E),e(Po,Hd),e(Po,Vr),e(Vr,qd),e(Po,Id),$(o,pl,E),$(o,fe,E),q(fn,fe,null),e(fe,jd),e(fe,zr),e(zr,Nd),e(fe,Fd),e(fe,ye),q(mn,ye,null),e(ye,Td),e(ye,_n),e(_n,Pd),e(_n,Wr),e(Wr,Od),e(_n,Ld),e(ye,Rd),e(ye,bn),e(bn,Cd),e(bn,Gr),e(Gr,Sd),e(bn,Md),e(ye,Ud),e(ye,vn),e(vn,Vd),e(vn,Br),e(Br,zd),e(vn,Wd),e(ye,Gd),q(Oo,ye,null),e(fe,Bd),e(fe,at),q($n,at,null),e(at,Kd),e(at,gs),e(gs,Jd),e(gs,Kr),e(Kr,Qd),e(at,Xd),e(at,hs),e(hs,Yd),e(hs,Jr),e(Jr,Zd),e(fe,eu),e(fe,Oe),q(yn,Oe,null),e(Oe,tu),e(Oe,En),e(En,ou),e(En,Qr),e(Qr,au),e(En,nu),e(Oe,su),e(Oe,xt),e(xt,nt),e(nt,ru),e(nt,Xr),e(Xr,iu),e(nt,lu),e(nt,Yr),e(Yr,cu),e(nt,pu),e(nt,Zr),e(Zr,gu),e(xt,hu),e(xt,wn),e(wn,du),e(wn,ei),e(ei,uu),e(wn,fu),e(xt,mu),e(xt,st),e(st,_u),e(st,ti),e(ti,bu),e(st,vu),e(st,oi),e(oi,$u),e(st,yu),e(st,ai),e(ai,Eu),e(Oe,wu),e(Oe,Dt),e(Dt,ku),e(Dt,ni),e(ni,Au),e(Dt,xu),e(Dt,si),e(si,Du),e(Dt,Hu),$(o,gl,E),$(o,Ht,E),q(kn,Ht,null),e(Ht,qu),e(Ht,ri),e(ri,Iu),$(o,hl,E),$(o,qt,E),e(qt,Lo),e(Lo,ii),q(An,ii,null),e(qt,ju),e(qt,li),e(li,Nu),$(o,dl,E),$(o,xn,E),e(xn,ci),e(ci,Fu),e(xn,Tu),$(o,ul,E),$(o,Ro,E),e(Ro,Pu),e(Ro,ds),e(ds,Ou),e(Ro,Lu),$(o,fl,E),$(o,we,E),q(Dn,we,null),e(we,Ru),e(we,Co),q(Hn,Co,null),e(Co,Cu),e(Co,pi),e(pi,Su),e(we,Mu),e(we,rt),q(qn,rt,null),e(rt,Uu),e(rt,gi),e(gi,Vu),e(rt,zu),e(rt,In),e(In,Wu),e(In,hi),e(hi,Gu),e(In,Bu),e(we,Ku),e(we,So),q(jn,So,null),e(So,Ju),e(So,di),e(di,Qu),$(o,ml,E),$(o,It,E),e(It,Mo),e(Mo,ui),q(Nn,ui,null),e(It,Xu),e(It,fi),e(fi,Yu),$(o,_l,E),$(o,Uo,E),e(Uo,Zu),e(Uo,mi),e(mi,ef),e(Uo,tf),$(o,bl,E),$(o,jt,E),e(jt,Vo),e(Vo,_i),q(Fn,_i,null),e(jt,of),e(jt,bi),e(bi,af),$(o,vl,E),$(o,Me,E),q(Tn,Me,null),e(Me,nf),e(Me,vi),e(vi,sf),e(Me,rf),q(zo,Me,null),$(o,$l,E),$(o,Nt,E),e(Nt,Wo),e(Wo,$i),q(Pn,$i,null),e(Nt,lf),e(Nt,yi),e(yi,cf),$(o,yl,E),$(o,Ue,E),q(On,Ue,null),e(Ue,pf),e(Ue,Ei),e(Ei,gf),e(Ue,hf),q(Go,Ue,null),$(o,El,E),$(o,Ft,E),e(Ft,Bo),e(Bo,wi),q(Ln,wi,null),e(Ft,df),e(Ft,ki),e(ki,uf),$(o,wl,E),$(o,Ve,E),q(Rn,Ve,null),e(Ve,ff),e(Ve,Ai),e(Ai,mf),e(Ve,_f),q(Ko,Ve,null),$(o,kl,E),$(o,Tt,E),e(Tt,Jo),e(Jo,xi),q(Cn,xi,null),e(Tt,bf),e(Tt,Di),e(Di,vf),$(o,Al,E),$(o,ze,E),q(Sn,ze,null),e(ze,$f),e(ze,Hi),e(Hi,yf),e(ze,Ef),q(Qo,ze,null),xl=!0},p(o,[E]){const Mn={};E&2&&(Mn.$$scope={dirty:E,ctx:o}),Ot.$set(Mn);const qi={};E&2&&(qi.$$scope={dirty:E,ctx:o}),Lt.$set(qi);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),Rt.$set(Ii);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),Ct.$set(ji);const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),St.$set(Un);const Ni={};E&2&&(Ni.$$scope={dirty:E,ctx:o}),Mt.$set(Ni);const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),Ut.$set(Vn);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),Vt.$set(Fi);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),Gt.$set(Ti);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),Bt.$set(zn);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),Kt.$set(Pi);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),Jt.$set(We);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),Xt.$set(Oi);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),eo.$set(Li);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),to.$set(Ri);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),oo.$set(Wn);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),ao.$set(Ci);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),no.$set(Si);const Mi={};E&2&&(Mi.$$scope={dirty:E,ctx:o}),so.$set(Mi);const W={};E&2&&(W.$$scope={dirty:E,ctx:o}),io.$set(W);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),lo.$set(Ge);const Ui={};E&2&&(Ui.$$scope={dirty:E,ctx:o}),go.$set(Ui);const Be={};E&2&&(Be.$$scope={dirty:E,ctx:o}),ho.$set(Be);const Vi={};E&2&&(Vi.$$scope={dirty:E,ctx:o}),uo.$set(Vi);const Ke={};E&2&&(Ke.$$scope={dirty:E,ctx:o}),fo.$set(Ke);const zi={};E&2&&(zi.$$scope={dirty:E,ctx:o}),mo.$set(zi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),_o.$set(me);const Wi={};E&2&&(Wi.$$scope={dirty:E,ctx:o}),vo.$set(Wi);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),yo.$set(Gn);const Gi={};E&2&&(Gi.$$scope={dirty:E,ctx:o}),Eo.$set(Gi);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),wo.$set(Bn);const Bi={};E&2&&(Bi.$$scope={dirty:E,ctx:o}),ko.$set(Bi);const us={};E&2&&(us.$$scope={dirty:E,ctx:o}),Ao.$set(us);const Ki={};E&2&&(Ki.$$scope={dirty:E,ctx:o}),xo.$set(Ki);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),Do.$set(_e);const Kn={};E&2&&(Kn.$$scope={dirty:E,ctx:o}),Oo.$set(Kn);const Ji={};E&2&&(Ji.$$scope={dirty:E,ctx:o}),zo.$set(Ji);const Jn={};E&2&&(Jn.$$scope={dirty:E,ctx:o}),Go.$set(Jn);const Qi={};E&2&&(Qi.$$scope={dirty:E,ctx:o}),Ko.$set(Qi);const Qn={};E&2&&(Qn.$$scope={dirty:E,ctx:o}),Qo.$set(Qn)},i(o){xl||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Re.$$.fragment,o),I(pa.$$.fragment,o),I(ga.$$.fragment,o),I(ha.$$.fragment,o),I(Ot.$$.fragment,o),I(Lt.$$.fragment,o),I(da.$$.fragment,o),I(Rt.$$.fragment,o),I(Ct.$$.fragment,o),I(ua.$$.fragment,o),I(St.$$.fragment,o),I(Mt.$$.fragment,o),I(fa.$$.fragment,o),I(Ut.$$.fragment,o),I(ba.$$.fragment,o),I(Vt.$$.fragment,o),I(Ea.$$.fragment,o),I(wa.$$.fragment,o),I(ka.$$.fragment,o),I(Gt.$$.fragment,o),I(Aa.$$.fragment,o),I(Bt.$$.fragment,o),I(xa.$$.fragment,o),I(Kt.$$.fragment,o),I(Da.$$.fragment,o),I(Jt.$$.fragment,o),I(Ha.$$.fragment,o),I(qa.$$.fragment,o),I(Xt.$$.fragment,o),I(Ia.$$.fragment,o),I(ja.$$.fragment,o),I(Na.$$.fragment,o),I(eo.$$.fragment,o),I(to.$$.fragment,o),I(Fa.$$.fragment,o),I(oo.$$.fragment,o),I(ao.$$.fragment,o),I(Ta.$$.fragment,o),I(no.$$.fragment,o),I(so.$$.fragment,o),I(Pa.$$.fragment,o),I(Oa.$$.fragment,o),I(io.$$.fragment,o),I(lo.$$.fragment,o),I(Ra.$$.fragment,o),I(Ca.$$.fragment,o),I(Sa.$$.fragment,o),I(go.$$.fragment,o),I(Ma.$$.fragment,o),I(ho.$$.fragment,o),I(Ua.$$.fragment,o),I(uo.$$.fragment,o),I(Wa.$$.fragment,o),I(fo.$$.fragment,o),I(mo.$$.fragment,o),I(Ga.$$.fragment,o),I(_o.$$.fragment,o),I(Ba.$$.fragment,o),I(Ka.$$.fragment,o),I(vo.$$.fragment,o),I(Ja.$$.fragment,o),I(Qa.$$.fragment,o),I(yo.$$.fragment,o),I(Xa.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(ko.$$.fragment,o),I(Ya.$$.fragment,o),I(Ao.$$.fragment,o),I(xo.$$.fragment,o),I(Do.$$.fragment,o),I(tn.$$.fragment,o),I(on.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(cn.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(hn.$$.fragment,o),I(un.$$.fragment,o),I(fn.$$.fragment,o),I(mn.$$.fragment,o),I(Oo.$$.fragment,o),I($n.$$.fragment,o),I(yn.$$.fragment,o),I(kn.$$.fragment,o),I(An.$$.fragment,o),I(Dn.$$.fragment,o),I(Hn.$$.fragment,o),I(qn.$$.fragment,o),I(jn.$$.fragment,o),I(Nn.$$.fragment,o),I(Fn.$$.fragment,o),I(Tn.$$.fragment,o),I(zo.$$.fragment,o),I(Pn.$$.fragment,o),I(On.$$.fragment,o),I(Go.$$.fragment,o),I(Ln.$$.fragment,o),I(Rn.$$.fragment,o),I(Ko.$$.fragment,o),I(Cn.$$.fragment,o),I(Sn.$$.fragment,o),I(Qo.$$.fragment,o),xl=!0)},o(o){j(l.$$.fragment,o),j(C.$$.fragment,o),j(X.$$.fragment,o),j(Re.$$.fragment,o),j(pa.$$.fragment,o),j(ga.$$.fragment,o),j(ha.$$.fragment,o),j(Ot.$$.fragment,o),j(Lt.$$.fragment,o),j(da.$$.fragment,o),j(Rt.$$.fragment,o),j(Ct.$$.fragment,o),j(ua.$$.fragment,o),j(St.$$.fragment,o),j(Mt.$$.fragment,o),j(fa.$$.fragment,o),j(Ut.$$.fragment,o),j(ba.$$.fragment,o),j(Vt.$$.fragment,o),j(Ea.$$.fragment,o),j(wa.$$.fragment,o),j(ka.$$.fragment,o),j(Gt.$$.fragment,o),j(Aa.$$.fragment,o),j(Bt.$$.fragment,o),j(xa.$$.fragment,o),j(Kt.$$.fragment,o),j(Da.$$.fragment,o),j(Jt.$$.fragment,o),j(Ha.$$.fragment,o),j(qa.$$.fragment,o),j(Xt.$$.fragment,o),j(Ia.$$.fragment,o),j(ja.$$.fragment,o),j(Na.$$.fragment,o),j(eo.$$.fragment,o),j(to.$$.fragment,o),j(Fa.$$.fragment,o),j(oo.$$.fragment,o),j(ao.$$.fragment,o),j(Ta.$$.fragment,o),j(no.$$.fragment,o),j(so.$$.fragment,o),j(Pa.$$.fragment,o),j(Oa.$$.fragment,o),j(io.$$.fragment,o),j(lo.$$.fragment,o),j(Ra.$$.fragment,o),j(Ca.$$.fragment,o),j(Sa.$$.fragment,o),j(go.$$.fragment,o),j(Ma.$$.fragment,o),j(ho.$$.fragment,o),j(Ua.$$.fragment,o),j(uo.$$.fragment,o),j(Wa.$$.fragment,o),j(fo.$$.fragment,o),j(mo.$$.fragment,o),j(Ga.$$.fragment,o),j(_o.$$.fragment,o),j(Ba.$$.fragment,o),j(Ka.$$.fragment,o),j(vo.$$.fragment,o),j(Ja.$$.fragment,o),j(Qa.$$.fragment,o),j(yo.$$.fragment,o),j(Xa.$$.fragment,o),j(Eo.$$.fragment,o),j(wo.$$.fragment,o),j(ko.$$.fragment,o),j(Ya.$$.fragment,o),j(Ao.$$.fragment,o),j(xo.$$.fragment,o),j(Do.$$.fragment,o),j(tn.$$.fragment,o),j(on.$$.fragment,o),j(an.$$.fragment,o),j(nn.$$.fragment,o),j(sn.$$.fragment,o),j(rn.$$.fragment,o),j(ln.$$.fragment,o),j(cn.$$.fragment,o),j(pn.$$.fragment,o),j(gn.$$.fragment,o),j(hn.$$.fragment,o),j(un.$$.fragment,o),j(fn.$$.fragment,o),j(mn.$$.fragment,o),j(Oo.$$.fragment,o),j($n.$$.fragment,o),j(yn.$$.fragment,o),j(kn.$$.fragment,o),j(An.$$.fragment,o),j(Dn.$$.fragment,o),j(Hn.$$.fragment,o),j(qn.$$.fragment,o),j(jn.$$.fragment,o),j(Nn.$$.fragment,o),j(Fn.$$.fragment,o),j(Tn.$$.fragment,o),j(zo.$$.fragment,o),j(Pn.$$.fragment,o),j(On.$$.fragment,o),j(Go.$$.fragment,o),j(Ln.$$.fragment,o),j(Rn.$$.fragment,o),j(Ko.$$.fragment,o),j(Cn.$$.fragment,o),j(Sn.$$.fragment,o),j(Qo.$$.fragment,o),xl=!1},d(o){t(p),o&&t(b),o&&t(f),N(l),o&&t(x),o&&t(w),o&&t(L),o&&t(_),o&&t(K),o&&t(G),o&&t(U),N(C,o),o&&t(Y),o&&t(te),o&&t(B),N(X,o),o&&t(oe),o&&t(ne),o&&t(la),N(Re,o),o&&t(ca),o&&t(mt),N(pa),o&&t(Xi),o&&t(V),N(ga),N(ha),N(Ot),N(Lt),N(da),N(Rt),N(Ct),N(ua),N(St),N(Mt),N(fa),N(Ut),N(ba),N(Vt),N(Ea),N(wa),N(ka),N(Gt),N(Aa),N(Bt),N(xa),N(Kt),N(Da),N(Jt),N(Ha),N(qa),N(Xt),N(Ia),N(ja),N(Na),N(eo),N(to),N(Fa),N(oo),N(ao),N(Ta),N(no),N(so),N(Pa),N(Oa),N(io),N(lo),N(Ra),N(Ca),N(Sa),N(go),N(Ma),N(ho),N(Ua),N(uo),N(Wa),N(fo),N(mo),N(Ga),N(_o),N(Ba),N(Ka),N(vo),N(Ja),N(Qa),N(yo),N(Xa),N(Eo),N(wo),N(ko),N(Ya),N(Ao),N(xo),N(Do),N(tn),o&&t(Yi),o&&t(_t),N(on),o&&t(Zi),o&&t(bt),N(an),o&&t(el),o&&t(vt),N(nn),o&&t(tl),o&&t($t),N(sn),o&&t(ol),o&&t(yt),N(rn),o&&t(al),o&&t(Ce),N(ln),o&&t(nl),o&&t(Et),N(cn),o&&t(sl),o&&t(wt),N(pn),o&&t(rl),o&&t(kt),N(gn),o&&t(il),o&&t(Se),N(hn),o&&t(ll),o&&t(At),N(un),o&&t(cl),o&&t(Po),o&&t(pl),o&&t(fe),N(fn),N(mn),N(Oo),N($n),N(yn),o&&t(gl),o&&t(Ht),N(kn),o&&t(hl),o&&t(qt),N(An),o&&t(dl),o&&t(xn),o&&t(ul),o&&t(Ro),o&&t(fl),o&&t(we),N(Dn),N(Hn),N(qn),N(jn),o&&t(ml),o&&t(It),N(Nn),o&&t(_l),o&&t(Uo),o&&t(bl),o&&t(jt),N(Fn),o&&t(vl),o&&t(Me),N(Tn),N(zo),o&&t($l),o&&t(Nt),N(Pn),o&&t(yl),o&&t(Ue),N(On),N(Go),o&&t(El),o&&t(Ft),N(Ln),o&&t(wl),o&&t(Ve),N(Rn),N(Ko),o&&t(kl),o&&t(Tt),N(Cn),o&&t(Al),o&&t(ze),N(Sn),N(Qo)}}}const Ib={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function jb(S){return U_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rb extends R_{constructor(p){super();C_(this,p,jb,qb,S_,{})}}export{Rb as default,Ib as metadata};
