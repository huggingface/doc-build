import{S as O_,i as L_,s as R_,e as a,k as g,w as D,t as r,M as C_,c as n,d as t,m as h,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as j,B as N,v as S_,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function M_(U){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function U_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function V_(U){let p,b,f,c,d;return c=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function z_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function W_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"create_commit"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function G_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function B_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function K_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function J_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),c=n(X,"UL",{});var ne=s(c);d=n(ne,"LI",{});var Be=s(d);l=n(Be,"A",{href:!0,rel:!0});var de=s(l);u=n(de,"CODE",{});var gt=s(u);P=i(gt,"HTTPError"),gt.forEach(t),de.forEach(t),v=i(Be,`
if the HuggingFace API returned an error`),Be.forEach(t),x=h(ne),w=n(ne,"LI",{});var Ke=s(w);y=n(Ke,"A",{href:!0,rel:!0});var ke=s(y);k=n(ke,"CODE",{});var ht=s(k);O=i(ht,"ValueError"),ht.forEach(t),ke.forEach(t),T=i(Ke,`
if some parameter value is invalid`),Ke.forEach(t),L=h(ne),_=n(ne,"LI",{});var dt=s(_);F=n(dt,"A",{href:!0});var ut=s(F);S=i(ut,"RepositoryNotFoundError"),ut.forEach(t),z=i(dt,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(dt,"CODE",{});var Xn=s(R);K=i(Xn,"private"),Xn.forEach(t),G=i(dt," and you do not have access."),dt.forEach(t),A=h(ne),M=n(ne,"LI",{});var ra=s(M);C=n(ra,"A",{href:!0});var ia=s(C);Y=i(ia,"RevisionNotFoundError"),ia.forEach(t),te=i(ra,`
If the revision to download from cannot be found.`),ra.forEach(t),Z=h(ne),J=n(ne,"LI",{});var Le=s(J);ee=n(Le,"A",{href:!0});var la=s(ee);ae=i(la,"EntryNotFoundError"),la.forEach(t),B=i(Le,`
If the file to download cannot be found.`),Le.forEach(t),ne.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function Q_(U){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function X_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Y_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Z_(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function eb(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function tb(U){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function ob(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ab(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function nb(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function sb(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function rb(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function ib(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function lb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function cb(U){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function pb(U){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function gb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function hb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function db(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var z=s(d);l=n(z,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(z,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(z," and you do not have access."),z.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function ub(U){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function fb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G,A,M,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=h(Z),c=n(Z,"UL",{});var ee=s(c);d=n(ee,"LI",{});var ae=s(d);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var ne=s(y);k=n(ne,"CODE",{});var Be=s(k);O=i(Be,"ValueError"),Be.forEach(t),ne.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),L=h(ee),_=n(ee,"LI",{});var de=s(_);F=n(de,"A",{href:!0});var gt=s(F);S=i(gt,"RepositoryNotFoundError"),gt.forEach(t),z=i(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(de,"CODE",{});var Ke=s(R);K=i(Ke,"private"),Ke.forEach(t),G=i(de," and you do not have access."),de.forEach(t),A=h(ee),M=n(ee,"LI",{});var ke=s(M);C=n(ke,"A",{href:!0});var ht=s(C);Y=i(ht,"RevisionNotFoundError"),ht.forEach(t),te=i(ke,`
If the revision to download from cannot be found.`),ke.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,z),e(_,R),e(R,K),e(_,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function mb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_file"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function _b(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function bb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(L){p=n(L,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=h(L),c=n(L,"UL",{});var F=s(c);d=n(F,"LI",{});var S=s(d);l=n(S,"A",{href:!0,rel:!0});var z=s(l);u=n(z,"CODE",{});var R=s(u);P=i(R,"HTTPError"),R.forEach(t),z.forEach(t),v=i(S,`
if the HuggingFace API returned an error`),S.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(L,_){$(L,p,_),e(p,b),$(L,f,_),$(L,c,_),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function vb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_folder"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function $b(U){let p,b,f,c,d;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function yb(U){let p,b,f,c,d;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function Eb(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function wb(U){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){j(p.$$.fragment,f),b=!1},d(f){N(p,f)}}}function kb(U){let p,b,f,c,d;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function Ab(U){let p,b,f,c,d;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function xb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,z,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B,X,oe,ne,Be,de,gt,Ke,ke,ht,dt,ut,Xn,ra,ia,Le,la,ft,Pt,qs,ca,uc,Is,fc,Ji,V,pa,mc,Ae,ga,_c,js,bc,vc,Ot,$c,Lt,yc,xe,ha,Ec,Ns,wc,kc,Rt,Ac,Ct,xc,Je,da,Dc,Fs,Hc,qc,St,Ic,le,ua,jc,Ts,Nc,Fc,fa,Tc,Ps,Pc,Oc,Lc,ma,Rc,Yn,Cc,Sc,Mc,Zn,Uc,es,Vc,zc,Mt,Wc,ce,_a,Gc,ba,Bc,Os,Kc,Jc,Qc,va,Xc,ts,Yc,Zc,ep,$a,tp,Ls,op,ap,np,os,sp,as,rp,ip,Ut,lp,Vt,ya,cp,Rs,pp,gp,zt,Ea,hp,Cs,dp,up,De,wa,fp,Ss,mp,_p,Ms,bp,vp,Wt,$p,Qe,ka,yp,Us,Ep,wp,Gt,kp,Xe,Aa,Ap,Vs,xp,Dp,Bt,Hp,Ye,xa,qp,zs,Ip,jp,Kt,Np,Jt,Da,Fp,Ws,Tp,Pp,He,Ha,Op,Gs,Lp,Rp,ns,Cp,ss,Sp,Mp,Qt,Up,Xt,qa,Vp,Bs,zp,Wp,Yt,Ia,Gp,Ks,Bp,Kp,be,ja,Jp,Js,Qp,Xp,Qs,Yp,Zp,Zt,eg,eo,tg,qe,Na,og,Xs,ag,ng,to,sg,oo,rg,Ie,Fa,ig,Ys,lg,cg,ao,pg,no,gg,so,Ta,hg,Zs,dg,ug,ve,Pa,fg,er,mg,_g,Oa,bg,rs,vg,$g,yg,ro,Eg,io,wg,lo,La,kg,tr,Ag,xg,co,Ra,Dg,or,Hg,qg,Ze,Ca,Ig,ar,jg,Ng,po,Fg,je,Sa,Tg,nr,Pg,Og,sr,Lg,Rg,go,Cg,Ne,Ma,Sg,rr,Mg,Ug,Ua,Vg,Va,zg,Wg,Gg,ho,Bg,Fe,za,Kg,ir,Jg,Qg,uo,Xg,fo,Yg,et,Wa,Zg,lr,eh,th,mo,oh,_o,Ga,ah,cr,nh,sh,Te,Ba,rh,pr,ih,lh,gr,ch,ph,bo,gh,vo,Ka,hh,hr,dh,uh,tt,Ja,fh,dr,mh,_h,$o,bh,$e,Qa,vh,ur,$h,yh,yo,Eh,Eo,wh,wo,kh,re,Xa,Ah,fr,xh,Dh,mr,Hh,qh,ue,Ih,_r,jh,Nh,br,Fh,Th,Ya,Ph,Oh,vr,Lh,Rh,$r,Ch,Sh,Mh,Za,Uh,yr,Vh,zh,Wh,ko,Gh,Ao,Bh,xo,Kh,Do,en,Jh,Er,Qh,Qi,mt,Ho,wr,tn,Xh,kr,Yh,Xi,_t,on,Zh,Ar,ed,Yi,bt,qo,xr,an,td,Dr,od,Zi,vt,nn,ad,Hr,nd,el,$t,Io,qr,sn,sd,Ir,rd,tl,Re,rn,id,jr,ld,cd,Nr,pd,ol,yt,jo,Fr,ln,gd,Tr,hd,al,Et,cn,dd,Pr,ud,nl,wt,No,Or,pn,fd,Lr,md,sl,Ce,gn,_d,Rr,bd,vd,hn,$d,is,yd,Ed,rl,kt,Fo,Cr,dn,wd,ls,Sr,kd,Ad,il,To,xd,Mr,Dd,Hd,ll,fe,un,qd,Ur,Id,jd,ye,fn,Nd,mn,Fd,Vr,Td,Pd,Od,_n,Ld,zr,Rd,Cd,Sd,bn,Md,Wr,Ud,Vd,zd,Po,Wd,ot,vn,Gd,cs,Bd,Gr,Kd,Jd,ps,Qd,Br,Xd,Yd,Pe,$n,Zd,yn,eu,Kr,tu,ou,au,At,at,nu,Jr,su,ru,Qr,iu,lu,Xr,cu,pu,En,gu,Yr,hu,du,uu,nt,fu,Zr,mu,_u,ei,bu,vu,ti,$u,yu,xt,Eu,oi,wu,ku,ai,Au,xu,cl,Dt,wn,Du,ni,Hu,pl,Ht,Oo,si,kn,qu,ri,Iu,gl,An,ii,ju,Nu,hl,Lo,Fu,gs,Tu,Pu,dl,we,xn,Ou,Ro,Dn,Lu,li,Ru,Cu,st,Hn,Su,ci,Mu,Uu,qn,Vu,pi,zu,Wu,Gu,Co,In,Bu,gi,Ku,ul,qt,So,hi,jn,Ju,di,Qu,fl,Mo,Xu,ui,Yu,Zu,ml,It,Uo,fi,Nn,ef,mi,tf,_l,Se,Fn,of,_i,af,nf,Vo,bl,jt,zo,bi,Tn,sf,vi,rf,vl,Me,Pn,lf,$i,cf,pf,Wo,$l,Nt,Go,yi,On,gf,Ei,hf,yl,Ue,Ln,df,wi,uf,ff,Bo,El,Ft,Ko,ki,Rn,mf,Ai,_f,wl,Ve,Cn,bf,xi,vf,$f,Jo,kl;return l=new Ee({}),C=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),Le=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi(
    endpoint="https://huggingface.co", # Can be a Private Hub endpoint.
    token="hf_xxx", # Token is not persisted on the machine.
)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi(
    endpoint=<span class="hljs-string">&quot;https://huggingface.co&quot;</span>, <span class="hljs-comment"># Can be a Private Hub endpoint.</span>
    token=<span class="hljs-string">&quot;hf_xxx&quot;</span>, <span class="hljs-comment"># Token is not persisted on the machine.</span>
)`}}),ca=new Ee({}),pa=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L641"}}),ga=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2963",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Ot=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[M_]},$$scope:{ctx:U}}}),Lt=new se({props:{$$slots:{default:[U_]},$$scope:{ctx:U}}}),ha=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2820",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Rt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[V_]},$$scope:{ctx:U}}}),Ct=new se({props:{$$slots:{default:[z_]},$$scope:{ctx:U}}}),da=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1790",returnDescription:`
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
`}}),St=new se({props:{warning:!0,$$slots:{default:[W_]},$$scope:{ctx:U}}}),ua=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2647"}}),Mt=new se({props:{$$slots:{default:[G_]},$$scope:{ctx:U}}}),_a=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2736"}}),Ut=new se({props:{$$slots:{default:[B_]},$$scope:{ctx:U}}}),ya=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1532",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ea=new Q({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2375",raiseDescription:`
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
`}}),wa=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1277",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Wt=new se({props:{$$slots:{default:[K_]},$$scope:{ctx:U}}}),ka=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2287"}}),Gt=new se({props:{$$slots:{default:[J_]},$$scope:{ctx:U}}}),Aa=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1612"}}),Bt=new se({props:{$$slots:{default:[Q_]},$$scope:{ctx:U}}}),xa=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3091",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Kt=new se({props:{$$slots:{default:[X_]},$$scope:{ctx:U}}}),Da=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L719"}}),Ha=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2562"}}),Qt=new se({props:{$$slots:{default:[Y_]},$$scope:{ctx:U}}}),qa=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
The Hugging Face authentication token`,name:"token"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2437",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ia=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L711"}}),ja=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2484",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Zt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[Z_]},$$scope:{ctx:U}}}),eo=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[eb]},$$scope:{ctx:U}}}),Na=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3148",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),to=new se({props:{warning:!0,$$slots:{default:[tb]},$$scope:{ctx:U}}}),oo=new se({props:{$$slots:{default:[ob]},$$scope:{ctx:U}}}),Fa=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L939"}}),ao=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[ab]},$$scope:{ctx:U}}}),no=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[nb]},$$scope:{ctx:U}}}),Ta=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1102",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Pa=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L729"}}),ro=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[sb]},$$scope:{ctx:U}}}),io=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[rb]},$$scope:{ctx:U}}}),La=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1484",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ra=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1115",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Ca=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3038",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),po=new se({props:{$$slots:{default:[ib]},$$scope:{ctx:U}}}),Sa=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1198",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),go=new se({props:{$$slots:{default:[lb]},$$scope:{ctx:U}}}),Ma=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1718"}}),ho=new se({props:{$$slots:{default:[cb]},$$scope:{ctx:U}}}),za=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2896",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),uo=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[pb]},$$scope:{ctx:U}}}),fo=new se({props:{$$slots:{default:[gb]},$$scope:{ctx:U}}}),Wa=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1415",returnDescription:`
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
`}}),mo=new se({props:{$$slots:{default:[hb]},$$scope:{ctx:U}}}),Ga=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L692"}}),Ba=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1346",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),bo=new se({props:{$$slots:{default:[db]},$$scope:{ctx:U}}}),Ka=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L704"}}),Ja=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1658",returnDescription:`
<p>The HTTP response in json.</p>
`}}),$o=new se({props:{$$slots:{default:[ub]},$$scope:{ctx:U}}}),Qa=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1978",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),yo=new se({props:{$$slots:{default:[fb]},$$scope:{ctx:U}}}),Eo=new se({props:{warning:!0,$$slots:{default:[mb]},$$scope:{ctx:U}}}),wo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[_b]},$$scope:{ctx:U}}}),Xa=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2127",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ko=new se({props:{$$slots:{default:[bb]},$$scope:{ctx:U}}}),Ao=new se({props:{warning:!0,$$slots:{default:[vb]},$$scope:{ctx:U}}}),xo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[$b]},$$scope:{ctx:U}}}),en=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L648"}}),tn=new Ee({}),on=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L249"}}),an=new Ee({}),nn=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L322"}}),sn=new Ee({}),rn=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L396"}}),ln=new Ee({}),cn=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L203"}}),pn=new Ee({}),gn=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L148"}}),dn=new Ee({}),un=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L45"}}),fn=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L117"}}),Po=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[yb]},$$scope:{ctx:U}}}),vn=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L152"}}),$n=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L67"}}),wn=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L30"}}),kn=new Ee({}),xn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),Dn=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),Hn=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),In=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),jn=new Ee({}),Nn=new Ee({}),Fn=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"languages",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),Vo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Eb]},$$scope:{ctx:U}}}),Tn=new Ee({}),Pn=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Wo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[wb]},$$scope:{ctx:U}}}),On=new Ee({}),Ln=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L521"}}),Bo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[kb]},$$scope:{ctx:U}}}),Rn=new Ee({}),Cn=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L483"}}),Jo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Ab]},$$scope:{ctx:U}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),_=a("p"),F=r("All methods from the "),S=a("code"),z=r("HfApi"),R=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),M=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),ne=a("p"),Be=r("Using the "),de=a("a"),gt=r("HfApi"),Ke=r(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),ke=a("code"),ht=r("huggingface-cli login"),dt=r(" or "),ut=a("a"),Xn=r("login()"),ra=r(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),ia=g(),D(Le.$$.fragment),la=g(),ft=a("h3"),Pt=a("a"),qs=a("span"),D(ca.$$.fragment),uc=g(),Is=a("span"),fc=r("HfApi"),Ji=g(),V=a("div"),D(pa.$$.fragment),mc=g(),Ae=a("div"),D(ga.$$.fragment),_c=g(),js=a("p"),bc=r("Closes or re-opens a Discussion or Pull Request."),vc=g(),D(Ot.$$.fragment),$c=g(),D(Lt.$$.fragment),yc=g(),xe=a("div"),D(ha.$$.fragment),Ec=g(),Ns=a("p"),wc=r("Creates a new comment on the given Discussion."),kc=g(),D(Rt.$$.fragment),Ac=g(),D(Ct.$$.fragment),xc=g(),Je=a("div"),D(da.$$.fragment),Dc=g(),Fs=a("p"),Hc=r("Creates a commit in the given repo, deleting & uploading files as needed."),qc=g(),D(St.$$.fragment),Ic=g(),le=a("div"),D(ua.$$.fragment),jc=g(),Ts=a("p"),Nc=r("Creates a Discussion or Pull Request."),Fc=g(),fa=a("p"),Tc=r("Pull Requests created programmatically will be in "),Ps=a("code"),Pc=r('"draft"'),Oc=r(" status."),Lc=g(),ma=a("p"),Rc=r("Creating a Pull Request with changes can also be done at once with "),Yn=a("a"),Cc=r("HfApi.create_commit()"),Sc=r("."),Mc=g(),Zn=a("p"),Uc=r("Returns: "),es=a("a"),Vc=r("DiscussionWithDetails"),zc=g(),D(Mt.$$.fragment),Wc=g(),ce=a("div"),D(_a.$$.fragment),Gc=g(),ba=a("p"),Bc=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Os=a("code"),Kc=r('"draft"'),Jc=r(" status."),Qc=g(),va=a("p"),Xc=r("Creating a Pull Request with changes can also be done at once with "),ts=a("a"),Yc=r("HfApi.create_commit()"),Zc=r(";"),ep=g(),$a=a("p"),tp=r("This is a wrapper around "),Ls=a("code"),op=r("HfApi.create_discusssion"),ap=r("."),np=g(),os=a("p"),sp=r("Returns: "),as=a("a"),rp=r("DiscussionWithDetails"),ip=g(),D(Ut.$$.fragment),lp=g(),Vt=a("div"),D(ya.$$.fragment),cp=g(),Rs=a("p"),pp=r("Create an empty repo on the HuggingFace Hub."),gp=g(),zt=a("div"),D(Ea.$$.fragment),hp=g(),Cs=a("p"),dp=r("Tag a given commit of a repo on the Hub."),up=g(),De=a("div"),D(wa.$$.fragment),fp=g(),Ss=a("p"),mp=r("Get info on one specific dataset on huggingface.co."),_p=g(),Ms=a("p"),bp=r("Dataset can be private if you pass an acceptable token."),vp=g(),D(Wt.$$.fragment),$p=g(),Qe=a("div"),D(ka.$$.fragment),yp=g(),Us=a("p"),Ep=r("Deletes a file in the given repo."),wp=g(),D(Gt.$$.fragment),kp=g(),Xe=a("div"),D(Aa.$$.fragment),Ap=g(),Vs=a("p"),xp=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Dp=g(),D(Bt.$$.fragment),Hp=g(),Ye=a("div"),D(xa.$$.fragment),qp=g(),zs=a("p"),Ip=r("Edits a comment on a Discussion / Pull Request."),jp=g(),D(Kt.$$.fragment),Np=g(),Jt=a("div"),D(Da.$$.fragment),Fp=g(),Ws=a("p"),Tp=r("Gets all valid dataset tags as a nested namespace object."),Pp=g(),He=a("div"),D(Ha.$$.fragment),Op=g(),Gs=a("p"),Lp=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Rp=g(),ns=a("p"),Cp=r("Returns: "),ss=a("a"),Sp=r("DiscussionWithDetails"),Mp=g(),D(Qt.$$.fragment),Up=g(),Xt=a("div"),D(qa.$$.fragment),Vp=g(),Bs=a("p"),zp=r(`Returns the repository name for a given model ID and optional
organization.`),Wp=g(),Yt=a("div"),D(Ia.$$.fragment),Gp=g(),Ks=a("p"),Bp=r("Gets all valid model tags as a nested namespace object"),Kp=g(),be=a("div"),D(ja.$$.fragment),Jp=g(),Js=a("p"),Qp=r("Fetches Discussions and Pull Requests for the given repo."),Xp=g(),Qs=a("p"),Yp=r("Example:"),Zp=g(),D(Zt.$$.fragment),eg=g(),D(eo.$$.fragment),tg=g(),qe=a("div"),D(Na.$$.fragment),og=g(),Xs=a("p"),ag=r("Hides a comment on a Discussion / Pull Request."),ng=g(),D(to.$$.fragment),sg=g(),D(oo.$$.fragment),rg=g(),Ie=a("div"),D(Fa.$$.fragment),ig=g(),Ys=a("p"),lg=r("Get the public list of all the datasets on huggingface.co"),cg=g(),D(ao.$$.fragment),pg=g(),D(no.$$.fragment),gg=g(),so=a("div"),D(Ta.$$.fragment),hg=g(),Zs=a("p"),dg=r("Get the public list of all the metrics on huggingface.co"),ug=g(),ve=a("div"),D(Pa.$$.fragment),fg=g(),er=a("p"),mg=r("Get the public list of all the models on huggingface.co"),_g=g(),Oa=a("p"),bg=r("Returns: List of "),rs=a("a"),vg=r("huggingface_hub.hf_api.ModelInfo"),$g=r(" objects"),yg=g(),D(ro.$$.fragment),Eg=g(),D(io.$$.fragment),wg=g(),lo=a("div"),D(La.$$.fragment),kg=g(),tr=a("p"),Ag=r("Get the list of files in a given repo."),xg=g(),co=a("div"),D(Ra.$$.fragment),Dg=g(),or=a("p"),Hg=r("Get the public list of all Spaces on huggingface.co"),qg=g(),Ze=a("div"),D(Ca.$$.fragment),Ig=g(),ar=a("p"),jg=r("Merges a Pull Request."),Ng=g(),D(po.$$.fragment),Fg=g(),je=a("div"),D(Sa.$$.fragment),Tg=g(),nr=a("p"),Pg=r("Get info on one specific model on huggingface.co"),Og=g(),sr=a("p"),Lg=r("Model can be private if you pass an acceptable token or are logged in."),Rg=g(),D(go.$$.fragment),Cg=g(),Ne=a("div"),D(Ma.$$.fragment),Sg=g(),rr=a("p"),Mg=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ug=g(),Ua=a("p"),Vg=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),Va=a("a"),zg=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Wg=r("."),Gg=g(),D(ho.$$.fragment),Bg=g(),Fe=a("div"),D(za.$$.fragment),Kg=g(),ir=a("p"),Jg=r("Renames a Discussion."),Qg=g(),D(uo.$$.fragment),Xg=g(),D(fo.$$.fragment),Yg=g(),et=a("div"),D(Wa.$$.fragment),Zg=g(),lr=a("p"),eh=r("Get the info object for a given repo of a given type."),th=g(),D(mo.$$.fragment),oh=g(),_o=a("div"),D(Ga.$$.fragment),ah=g(),cr=a("p"),nh=r(`Saves the passed access token so git can correctly authenticate the
user.`),sh=g(),Te=a("div"),D(Ba.$$.fragment),rh=g(),pr=a("p"),ih=r("Get info on one specific Space on huggingface.co."),lh=g(),gr=a("p"),ch=r("Space can be private if you pass an acceptable token."),ph=g(),D(bo.$$.fragment),gh=g(),vo=a("div"),D(Ka.$$.fragment),hh=g(),hr=a("p"),dh=r("Resets the user\u2019s access token."),uh=g(),tt=a("div"),D(Ja.$$.fragment),fh=g(),dr=a("p"),mh=r("Update the visibility setting of a repository."),_h=g(),D($o.$$.fragment),bh=g(),$e=a("div"),D(Qa.$$.fragment),vh=g(),ur=a("p"),$h=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),yh=g(),D(yo.$$.fragment),Eh=g(),D(Eo.$$.fragment),wh=g(),D(wo.$$.fragment),kh=g(),re=a("div"),D(Xa.$$.fragment),Ah=g(),fr=a("p"),xh=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Dh=g(),mr=a("p"),Hh=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),qh=g(),ue=a("p"),Ih=r("Use the "),_r=a("code"),jh=r("allow_patterns"),Nh=r(" and "),br=a("code"),Fh=r("ignore_patterns"),Th=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Ya=a("a"),Ph=r("here"),Oh=r(`. If both
`),vr=a("code"),Lh=r("allow_patterns"),Rh=r(" and "),$r=a("code"),Ch=r("ignore_patterns"),Sh=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Mh=g(),Za=a("p"),Uh=r("Uses "),yr=a("code"),Vh=r("HfApi.create_commit"),zh=r(" under the hood."),Wh=g(),D(ko.$$.fragment),Gh=g(),D(Ao.$$.fragment),Bh=g(),D(xo.$$.fragment),Kh=g(),Do=a("div"),D(en.$$.fragment),Jh=g(),Er=a("p"),Qh=r("Call HF API to know \u201Cwhoami\u201D."),Qi=g(),mt=a("h3"),Ho=a("a"),wr=a("span"),D(tn.$$.fragment),Xh=g(),kr=a("span"),Yh=r("ModelInfo"),Xi=g(),_t=a("div"),D(on.$$.fragment),Zh=g(),Ar=a("p"),ed=r("Info about a model accessible from huggingface.co"),Yi=g(),bt=a("h3"),qo=a("a"),xr=a("span"),D(an.$$.fragment),td=g(),Dr=a("span"),od=r("DatasetInfo"),Zi=g(),vt=a("div"),D(nn.$$.fragment),ad=g(),Hr=a("p"),nd=r("Info about a dataset accessible from huggingface.co"),el=g(),$t=a("h3"),Io=a("a"),qr=a("span"),D(sn.$$.fragment),sd=g(),Ir=a("span"),rd=r("SpaceInfo"),tl=g(),Re=a("div"),D(rn.$$.fragment),id=g(),jr=a("p"),ld=r("Info about a Space accessible from huggingface.co"),cd=g(),Nr=a("p"),pd=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),ol=g(),yt=a("h3"),jo=a("a"),Fr=a("span"),D(ln.$$.fragment),gd=g(),Tr=a("span"),hd=r("RepoFile"),al=g(),Et=a("div"),D(cn.$$.fragment),dd=g(),Pr=a("p"),ud=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),nl=g(),wt=a("h3"),No=a("a"),Or=a("span"),D(pn.$$.fragment),fd=g(),Lr=a("span"),md=r("CommitInfo"),sl=g(),Ce=a("div"),D(gn.$$.fragment),_d=g(),Rr=a("p"),bd=r("Data structure containing information about a newly created commit."),vd=g(),hn=a("p"),$d=r("Returned by "),is=a("a"),yd=r("create_commit()"),Ed=r("."),rl=g(),kt=a("h2"),Fo=a("a"),Cr=a("span"),D(dn.$$.fragment),wd=g(),ls=a("span"),Sr=a("code"),kd=r("create_commit"),Ad=r(" API"),il=g(),To=a("p"),xd=r("Below are the supported values for "),Mr=a("code"),Dd=r("CommitOperation()"),Hd=r(":"),ll=g(),fe=a("div"),D(un.$$.fragment),qd=g(),Ur=a("p"),Id=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),jd=g(),ye=a("div"),D(fn.$$.fragment),Nd=g(),mn=a("p"),Fd=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Vr=a("code"),Td=r("path_or_fileobj"),Pd=r("."),Od=g(),_n=a("p"),Ld=r("Triggers "),zr=a("code"),Rd=r("self.validate"),Cd=r("."),Sd=g(),bn=a("p"),Md=r("Raises: "),Wr=a("code"),Ud=r("ValueError"),Vd=r(" if self.validate fails"),zd=g(),D(Po.$$.fragment),Wd=g(),ot=a("div"),D(vn.$$.fragment),Gd=g(),cs=a("p"),Bd=r("The base64-encoded content of "),Gr=a("code"),Kd=r("path_or_fileobj"),Jd=g(),ps=a("p"),Qd=r("Returns: "),Br=a("code"),Xd=r("bytes"),Yd=g(),Pe=a("div"),D($n.$$.fragment),Zd=g(),yn=a("p"),eu=r("Ensures "),Kr=a("code"),tu=r("path_or_fileobj"),ou=r(" is valid:"),au=g(),At=a("ul"),at=a("li"),nu=r("Ensures it is either a "),Jr=a("code"),su=r("str"),ru=r(", "),Qr=a("code"),iu=r("bytes"),lu=r(" or an instance of "),Xr=a("code"),cu=r("io.BufferedIOBase"),pu=g(),En=a("li"),gu=r("If it is a "),Yr=a("code"),hu=r("str"),du=r(", ensure that it is a file path and that the file exists"),uu=g(),nt=a("li"),fu=r("If it is an instance of "),Zr=a("code"),mu=r("io.BufferedIOBase"),_u=r(", ensures it supports "),ei=a("code"),bu=r("seek()"),vu=r(" and "),ti=a("code"),$u=r("tell()"),yu=g(),xt=a("p"),Eu=r("Raises: "),oi=a("code"),wu=r("ValueError"),ku=r(" if "),ai=a("code"),Au=r("path_or_fileobj"),xu=r(" is not valid"),cl=g(),Dt=a("div"),D(wn.$$.fragment),Du=g(),ni=a("p"),Hu=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),pl=g(),Ht=a("h2"),Oo=a("a"),si=a("span"),D(kn.$$.fragment),qu=g(),ri=a("span"),Iu=r("Hugging Face local storage"),gl=g(),An=a("p"),ii=a("code"),ju=r("huggingface_hub"),Nu=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),hl=g(),Lo=a("p"),Fu=r("It does this using the "),gs=a("a"),Tu=r("HfFolder"),Pu=r(" utility, which saves data at the root of the user."),dl=g(),we=a("div"),D(xn.$$.fragment),Ou=g(),Ro=a("div"),D(Dn.$$.fragment),Lu=g(),li=a("p"),Ru=r("Deletes the token from storage. Does not fail if token does not exist."),Cu=g(),st=a("div"),D(Hn.$$.fragment),Su=g(),ci=a("p"),Mu=r("Get token or None if not existent."),Uu=g(),qn=a("p"),Vu=r(`Note that a token can be also provided using the
`),pi=a("code"),zu=r("HUGGING_FACE_HUB_TOKEN"),Wu=r(" environment variable."),Gu=g(),Co=a("div"),D(In.$$.fragment),Bu=g(),gi=a("p"),Ku=r("Save token, creating folder as needed."),ul=g(),qt=a("h2"),So=a("a"),hi=a("span"),D(jn.$$.fragment),Ju=g(),di=a("span"),Qu=r("Filtering helpers"),fl=g(),Mo=a("p"),Xu=r("Some helpers to filter repositories on the Hub are available in the "),ui=a("code"),Yu=r("huggingface_hub"),Zu=r(" package."),ml=g(),It=a("h3"),Uo=a("a"),fi=a("span"),D(Nn.$$.fragment),ef=g(),mi=a("span"),tf=r("DatasetFilter"),_l=g(),Se=a("div"),D(Fn.$$.fragment),of=g(),_i=a("p"),af=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),nf=g(),D(Vo.$$.fragment),bl=g(),jt=a("h3"),zo=a("a"),bi=a("span"),D(Tn.$$.fragment),sf=g(),vi=a("span"),rf=r("ModelFilter"),vl=g(),Me=a("div"),D(Pn.$$.fragment),lf=g(),$i=a("p"),cf=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),pf=g(),D(Wo.$$.fragment),$l=g(),Nt=a("h3"),Go=a("a"),yi=a("span"),D(On.$$.fragment),gf=g(),Ei=a("span"),hf=r("DatasetSearchArguments"),yl=g(),Ue=a("div"),D(Ln.$$.fragment),df=g(),wi=a("p"),uf=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ff=g(),D(Bo.$$.fragment),El=g(),Ft=a("h3"),Ko=a("a"),ki=a("span"),D(Rn.$$.fragment),mf=g(),Ai=a("span"),_f=r("ModelSearchArguments"),wl=g(),Ve=a("div"),D(Cn.$$.fragment),bf=g(),xi=a("p"),vf=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),$f=g(),D(Jo.$$.fragment),this.h()},l(o){const E=C_('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Sn=s(f);c=n(Sn,"A",{id:!0,class:!0,href:!0});var Di=s(c);d=n(Di,"SPAN",{});var Hi=s(d);H(l.$$.fragment,Hi),Hi.forEach(t),Di.forEach(t),u=h(Sn),P=n(Sn,"SPAN",{});var qi=s(P);v=i(qi,"Hugging Face Hub API"),qi.forEach(t),Sn.forEach(t),x=h(o),w=n(o,"P",{});var Mn=s(w);y=i(Mn,"Below is the documentation for the "),k=n(Mn,"CODE",{});var Ii=s(k);O=i(Ii,"HfApi"),Ii.forEach(t),T=i(Mn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Mn.forEach(t),L=h(o),_=n(o,"P",{});var Un=s(_);F=i(Un,"All methods from the "),S=n(Un,"CODE",{});var ji=s(S);z=i(ji,"HfApi"),ji.forEach(t),R=i(Un,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Un.forEach(t),K=h(o),G=n(o,"P",{});var Ni=s(G);A=i(Ni,"The following approach uses the method from the root of the package:"),Ni.forEach(t),M=h(o),H(C.$$.fragment,o),Y=h(o),te=n(o,"P",{});var Vn=s(te);Z=i(Vn,"The following approach uses the "),J=n(Vn,"CODE",{});var Fi=s(J);ee=i(Fi,"HfApi"),Fi.forEach(t),ae=i(Vn," class:"),Vn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var ze=s(ne);Be=i(ze,"Using the "),de=n(ze,"A",{href:!0});var Ti=s(de);gt=i(Ti,"HfApi"),Ti.forEach(t),Ke=i(ze,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),ke=n(ze,"CODE",{});var Pi=s(ke);ht=i(Pi,"huggingface-cli login"),Pi.forEach(t),dt=i(ze," or "),ut=n(ze,"A",{href:!0});var Oi=s(ut);Xn=i(Oi,"login()"),Oi.forEach(t),ra=i(ze,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),ze.forEach(t),ia=h(o),H(Le.$$.fragment,o),la=h(o),ft=n(o,"H3",{class:!0});var zn=s(ft);Pt=n(zn,"A",{id:!0,class:!0,href:!0});var Li=s(Pt);qs=n(Li,"SPAN",{});var Ri=s(qs);H(ca.$$.fragment,Ri),Ri.forEach(t),Li.forEach(t),uc=h(zn),Is=n(zn,"SPAN",{});var Ci=s(Is);fc=i(Ci,"HfApi"),Ci.forEach(t),zn.forEach(t),Ji=h(o),V=n(o,"DIV",{class:!0});var W=s(V);H(pa.$$.fragment,W),mc=h(W),Ae=n(W,"DIV",{class:!0});var We=s(Ae);H(ga.$$.fragment,We),_c=h(We),js=n(We,"P",{});var Si=s(js);bc=i(Si,"Closes or re-opens a Discussion or Pull Request."),Si.forEach(t),vc=h(We),H(Ot.$$.fragment,We),$c=h(We),H(Lt.$$.fragment,We),We.forEach(t),yc=h(W),xe=n(W,"DIV",{class:!0});var Ge=s(xe);H(ha.$$.fragment,Ge),Ec=h(Ge),Ns=n(Ge,"P",{});var Mi=s(Ns);wc=i(Mi,"Creates a new comment on the given Discussion."),Mi.forEach(t),kc=h(Ge),H(Rt.$$.fragment,Ge),Ac=h(Ge),H(Ct.$$.fragment,Ge),Ge.forEach(t),xc=h(W),Je=n(W,"DIV",{class:!0});var Tt=s(Je);H(da.$$.fragment,Tt),Dc=h(Tt),Fs=n(Tt,"P",{});var Ui=s(Fs);Hc=i(Ui,"Creates a commit in the given repo, deleting & uploading files as needed."),Ui.forEach(t),qc=h(Tt),H(St.$$.fragment,Tt),Tt.forEach(t),Ic=h(W),le=n(W,"DIV",{class:!0});var me=s(le);H(ua.$$.fragment,me),jc=h(me),Ts=n(me,"P",{});var Vi=s(Ts);Nc=i(Vi,"Creates a Discussion or Pull Request."),Vi.forEach(t),Fc=h(me),fa=n(me,"P",{});var Wn=s(fa);Tc=i(Wn,"Pull Requests created programmatically will be in "),Ps=n(Wn,"CODE",{});var zi=s(Ps);Pc=i(zi,'"draft"'),zi.forEach(t),Oc=i(Wn," status."),Wn.forEach(t),Lc=h(me),ma=n(me,"P",{});var Gn=s(ma);Rc=i(Gn,"Creating a Pull Request with changes can also be done at once with "),Yn=n(Gn,"A",{href:!0});var Wi=s(Yn);Cc=i(Wi,"HfApi.create_commit()"),Wi.forEach(t),Sc=i(Gn,"."),Gn.forEach(t),Mc=h(me),Zn=n(me,"P",{});var hs=s(Zn);Uc=i(hs,"Returns: "),es=n(hs,"A",{href:!0});var Gi=s(es);Vc=i(Gi,"DiscussionWithDetails"),Gi.forEach(t),hs.forEach(t),zc=h(me),H(Mt.$$.fragment,me),me.forEach(t),Wc=h(W),ce=n(W,"DIV",{class:!0});var _e=s(ce);H(_a.$$.fragment,_e),Gc=h(_e),ba=n(_e,"P",{});var Bn=s(ba);Bc=i(Bn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Os=n(Bn,"CODE",{});var Bi=s(Os);Kc=i(Bi,'"draft"'),Bi.forEach(t),Jc=i(Bn," status."),Bn.forEach(t),Qc=h(_e),va=n(_e,"P",{});var Kn=s(va);Xc=i(Kn,"Creating a Pull Request with changes can also be done at once with "),ts=n(Kn,"A",{href:!0});var Ki=s(ts);Yc=i(Ki,"HfApi.create_commit()"),Ki.forEach(t),Zc=i(Kn,";"),Kn.forEach(t),ep=h(_e),$a=n(_e,"P",{});var Al=s($a);tp=i(Al,"This is a wrapper around "),Ls=n(Al,"CODE",{});var Df=s(Ls);op=i(Df,"HfApi.create_discusssion"),Df.forEach(t),ap=i(Al,"."),Al.forEach(t),np=h(_e),os=n(_e,"P",{});var yf=s(os);sp=i(yf,"Returns: "),as=n(yf,"A",{href:!0});var Hf=s(as);rp=i(Hf,"DiscussionWithDetails"),Hf.forEach(t),yf.forEach(t),ip=h(_e),H(Ut.$$.fragment,_e),_e.forEach(t),lp=h(W),Vt=n(W,"DIV",{class:!0});var xl=s(Vt);H(ya.$$.fragment,xl),cp=h(xl),Rs=n(xl,"P",{});var qf=s(Rs);pp=i(qf,"Create an empty repo on the HuggingFace Hub."),qf.forEach(t),xl.forEach(t),gp=h(W),zt=n(W,"DIV",{class:!0});var Dl=s(zt);H(Ea.$$.fragment,Dl),hp=h(Dl),Cs=n(Dl,"P",{});var If=s(Cs);dp=i(If,"Tag a given commit of a repo on the Hub."),If.forEach(t),Dl.forEach(t),up=h(W),De=n(W,"DIV",{class:!0});var Qo=s(De);H(wa.$$.fragment,Qo),fp=h(Qo),Ss=n(Qo,"P",{});var jf=s(Ss);mp=i(jf,"Get info on one specific dataset on huggingface.co."),jf.forEach(t),_p=h(Qo),Ms=n(Qo,"P",{});var Nf=s(Ms);bp=i(Nf,"Dataset can be private if you pass an acceptable token."),Nf.forEach(t),vp=h(Qo),H(Wt.$$.fragment,Qo),Qo.forEach(t),$p=h(W),Qe=n(W,"DIV",{class:!0});var ds=s(Qe);H(ka.$$.fragment,ds),yp=h(ds),Us=n(ds,"P",{});var Ff=s(Us);Ep=i(Ff,"Deletes a file in the given repo."),Ff.forEach(t),wp=h(ds),H(Gt.$$.fragment,ds),ds.forEach(t),kp=h(W),Xe=n(W,"DIV",{class:!0});var us=s(Xe);H(Aa.$$.fragment,us),Ap=h(us),Vs=n(us,"P",{});var Tf=s(Vs);xp=i(Tf,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Tf.forEach(t),Dp=h(us),H(Bt.$$.fragment,us),us.forEach(t),Hp=h(W),Ye=n(W,"DIV",{class:!0});var fs=s(Ye);H(xa.$$.fragment,fs),qp=h(fs),zs=n(fs,"P",{});var Pf=s(zs);Ip=i(Pf,"Edits a comment on a Discussion / Pull Request."),Pf.forEach(t),jp=h(fs),H(Kt.$$.fragment,fs),fs.forEach(t),Np=h(W),Jt=n(W,"DIV",{class:!0});var Hl=s(Jt);H(Da.$$.fragment,Hl),Fp=h(Hl),Ws=n(Hl,"P",{});var Of=s(Ws);Tp=i(Of,"Gets all valid dataset tags as a nested namespace object."),Of.forEach(t),Hl.forEach(t),Pp=h(W),He=n(W,"DIV",{class:!0});var Xo=s(He);H(Ha.$$.fragment,Xo),Op=h(Xo),Gs=n(Xo,"P",{});var Lf=s(Gs);Lp=i(Lf,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Lf.forEach(t),Rp=h(Xo),ns=n(Xo,"P",{});var Ef=s(ns);Cp=i(Ef,"Returns: "),ss=n(Ef,"A",{href:!0});var Rf=s(ss);Sp=i(Rf,"DiscussionWithDetails"),Rf.forEach(t),Ef.forEach(t),Mp=h(Xo),H(Qt.$$.fragment,Xo),Xo.forEach(t),Up=h(W),Xt=n(W,"DIV",{class:!0});var ql=s(Xt);H(qa.$$.fragment,ql),Vp=h(ql),Bs=n(ql,"P",{});var Cf=s(Bs);zp=i(Cf,`Returns the repository name for a given model ID and optional
organization.`),Cf.forEach(t),ql.forEach(t),Wp=h(W),Yt=n(W,"DIV",{class:!0});var Il=s(Yt);H(Ia.$$.fragment,Il),Gp=h(Il),Ks=n(Il,"P",{});var Sf=s(Ks);Bp=i(Sf,"Gets all valid model tags as a nested namespace object"),Sf.forEach(t),Il.forEach(t),Kp=h(W),be=n(W,"DIV",{class:!0});var rt=s(be);H(ja.$$.fragment,rt),Jp=h(rt),Js=n(rt,"P",{});var Mf=s(Js);Qp=i(Mf,"Fetches Discussions and Pull Requests for the given repo."),Mf.forEach(t),Xp=h(rt),Qs=n(rt,"P",{});var Uf=s(Qs);Yp=i(Uf,"Example:"),Uf.forEach(t),Zp=h(rt),H(Zt.$$.fragment,rt),eg=h(rt),H(eo.$$.fragment,rt),rt.forEach(t),tg=h(W),qe=n(W,"DIV",{class:!0});var Yo=s(qe);H(Na.$$.fragment,Yo),og=h(Yo),Xs=n(Yo,"P",{});var Vf=s(Xs);ag=i(Vf,"Hides a comment on a Discussion / Pull Request."),Vf.forEach(t),ng=h(Yo),H(to.$$.fragment,Yo),sg=h(Yo),H(oo.$$.fragment,Yo),Yo.forEach(t),rg=h(W),Ie=n(W,"DIV",{class:!0});var Zo=s(Ie);H(Fa.$$.fragment,Zo),ig=h(Zo),Ys=n(Zo,"P",{});var zf=s(Ys);lg=i(zf,"Get the public list of all the datasets on huggingface.co"),zf.forEach(t),cg=h(Zo),H(ao.$$.fragment,Zo),pg=h(Zo),H(no.$$.fragment,Zo),Zo.forEach(t),gg=h(W),so=n(W,"DIV",{class:!0});var jl=s(so);H(Ta.$$.fragment,jl),hg=h(jl),Zs=n(jl,"P",{});var Wf=s(Zs);dg=i(Wf,"Get the public list of all the metrics on huggingface.co"),Wf.forEach(t),jl.forEach(t),ug=h(W),ve=n(W,"DIV",{class:!0});var it=s(ve);H(Pa.$$.fragment,it),fg=h(it),er=n(it,"P",{});var Gf=s(er);mg=i(Gf,"Get the public list of all the models on huggingface.co"),Gf.forEach(t),_g=h(it),Oa=n(it,"P",{});var Nl=s(Oa);bg=i(Nl,"Returns: List of "),rs=n(Nl,"A",{href:!0});var Bf=s(rs);vg=i(Bf,"huggingface_hub.hf_api.ModelInfo"),Bf.forEach(t),$g=i(Nl," objects"),Nl.forEach(t),yg=h(it),H(ro.$$.fragment,it),Eg=h(it),H(io.$$.fragment,it),it.forEach(t),wg=h(W),lo=n(W,"DIV",{class:!0});var Fl=s(lo);H(La.$$.fragment,Fl),kg=h(Fl),tr=n(Fl,"P",{});var Kf=s(tr);Ag=i(Kf,"Get the list of files in a given repo."),Kf.forEach(t),Fl.forEach(t),xg=h(W),co=n(W,"DIV",{class:!0});var Tl=s(co);H(Ra.$$.fragment,Tl),Dg=h(Tl),or=n(Tl,"P",{});var Jf=s(or);Hg=i(Jf,"Get the public list of all Spaces on huggingface.co"),Jf.forEach(t),Tl.forEach(t),qg=h(W),Ze=n(W,"DIV",{class:!0});var ms=s(Ze);H(Ca.$$.fragment,ms),Ig=h(ms),ar=n(ms,"P",{});var Qf=s(ar);jg=i(Qf,"Merges a Pull Request."),Qf.forEach(t),Ng=h(ms),H(po.$$.fragment,ms),ms.forEach(t),Fg=h(W),je=n(W,"DIV",{class:!0});var ea=s(je);H(Sa.$$.fragment,ea),Tg=h(ea),nr=n(ea,"P",{});var Xf=s(nr);Pg=i(Xf,"Get info on one specific model on huggingface.co"),Xf.forEach(t),Og=h(ea),sr=n(ea,"P",{});var Yf=s(sr);Lg=i(Yf,"Model can be private if you pass an acceptable token or are logged in."),Yf.forEach(t),Rg=h(ea),H(go.$$.fragment,ea),ea.forEach(t),Cg=h(W),Ne=n(W,"DIV",{class:!0});var ta=s(Ne);H(Ma.$$.fragment,ta),Sg=h(ta),rr=n(ta,"P",{});var Zf=s(rr);Mg=i(Zf,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Zf.forEach(t),Ug=h(ta),Ua=n(ta,"P",{});var Pl=s(Ua);Vg=i(Pl,`Note there are certain limitations. For more information about moving
repositories, please see
`),Va=n(Pl,"A",{href:!0,rel:!0});var em=s(Va);zg=i(em,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),em.forEach(t),Wg=i(Pl,"."),Pl.forEach(t),Gg=h(ta),H(ho.$$.fragment,ta),ta.forEach(t),Bg=h(W),Fe=n(W,"DIV",{class:!0});var oa=s(Fe);H(za.$$.fragment,oa),Kg=h(oa),ir=n(oa,"P",{});var tm=s(ir);Jg=i(tm,"Renames a Discussion."),tm.forEach(t),Qg=h(oa),H(uo.$$.fragment,oa),Xg=h(oa),H(fo.$$.fragment,oa),oa.forEach(t),Yg=h(W),et=n(W,"DIV",{class:!0});var _s=s(et);H(Wa.$$.fragment,_s),Zg=h(_s),lr=n(_s,"P",{});var om=s(lr);eh=i(om,"Get the info object for a given repo of a given type."),om.forEach(t),th=h(_s),H(mo.$$.fragment,_s),_s.forEach(t),oh=h(W),_o=n(W,"DIV",{class:!0});var Ol=s(_o);H(Ga.$$.fragment,Ol),ah=h(Ol),cr=n(Ol,"P",{});var am=s(cr);nh=i(am,`Saves the passed access token so git can correctly authenticate the
user.`),am.forEach(t),Ol.forEach(t),sh=h(W),Te=n(W,"DIV",{class:!0});var aa=s(Te);H(Ba.$$.fragment,aa),rh=h(aa),pr=n(aa,"P",{});var nm=s(pr);ih=i(nm,"Get info on one specific Space on huggingface.co."),nm.forEach(t),lh=h(aa),gr=n(aa,"P",{});var sm=s(gr);ch=i(sm,"Space can be private if you pass an acceptable token."),sm.forEach(t),ph=h(aa),H(bo.$$.fragment,aa),aa.forEach(t),gh=h(W),vo=n(W,"DIV",{class:!0});var Ll=s(vo);H(Ka.$$.fragment,Ll),hh=h(Ll),hr=n(Ll,"P",{});var rm=s(hr);dh=i(rm,"Resets the user\u2019s access token."),rm.forEach(t),Ll.forEach(t),uh=h(W),tt=n(W,"DIV",{class:!0});var bs=s(tt);H(Ja.$$.fragment,bs),fh=h(bs),dr=n(bs,"P",{});var im=s(dr);mh=i(im,"Update the visibility setting of a repository."),im.forEach(t),_h=h(bs),H($o.$$.fragment,bs),bs.forEach(t),bh=h(W),$e=n(W,"DIV",{class:!0});var lt=s($e);H(Qa.$$.fragment,lt),vh=h(lt),ur=n(lt,"P",{});var lm=s(ur);$h=i(lm,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),lm.forEach(t),yh=h(lt),H(yo.$$.fragment,lt),Eh=h(lt),H(Eo.$$.fragment,lt),wh=h(lt),H(wo.$$.fragment,lt),lt.forEach(t),kh=h(W),re=n(W,"DIV",{class:!0});var pe=s(re);H(Xa.$$.fragment,pe),Ah=h(pe),fr=n(pe,"P",{});var cm=s(fr);xh=i(cm,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),cm.forEach(t),Dh=h(pe),mr=n(pe,"P",{});var pm=s(mr);Hh=i(pm,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),pm.forEach(t),qh=h(pe),ue=n(pe,"P",{});var Oe=s(ue);Ih=i(Oe,"Use the "),_r=n(Oe,"CODE",{});var gm=s(_r);jh=i(gm,"allow_patterns"),gm.forEach(t),Nh=i(Oe," and "),br=n(Oe,"CODE",{});var hm=s(br);Fh=i(hm,"ignore_patterns"),hm.forEach(t),Th=i(Oe,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Ya=n(Oe,"A",{href:!0,rel:!0});var dm=s(Ya);Ph=i(dm,"here"),dm.forEach(t),Oh=i(Oe,`. If both
`),vr=n(Oe,"CODE",{});var um=s(vr);Lh=i(um,"allow_patterns"),um.forEach(t),Rh=i(Oe," and "),$r=n(Oe,"CODE",{});var fm=s($r);Ch=i(fm,"ignore_patterns"),fm.forEach(t),Sh=i(Oe,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Oe.forEach(t),Mh=h(pe),Za=n(pe,"P",{});var Rl=s(Za);Uh=i(Rl,"Uses "),yr=n(Rl,"CODE",{});var mm=s(yr);Vh=i(mm,"HfApi.create_commit"),mm.forEach(t),zh=i(Rl," under the hood."),Rl.forEach(t),Wh=h(pe),H(ko.$$.fragment,pe),Gh=h(pe),H(Ao.$$.fragment,pe),Bh=h(pe),H(xo.$$.fragment,pe),pe.forEach(t),Kh=h(W),Do=n(W,"DIV",{class:!0});var Cl=s(Do);H(en.$$.fragment,Cl),Jh=h(Cl),Er=n(Cl,"P",{});var _m=s(Er);Qh=i(_m,"Call HF API to know \u201Cwhoami\u201D."),_m.forEach(t),Cl.forEach(t),W.forEach(t),Qi=h(o),mt=n(o,"H3",{class:!0});var Sl=s(mt);Ho=n(Sl,"A",{id:!0,class:!0,href:!0});var bm=s(Ho);wr=n(bm,"SPAN",{});var vm=s(wr);H(tn.$$.fragment,vm),vm.forEach(t),bm.forEach(t),Xh=h(Sl),kr=n(Sl,"SPAN",{});var $m=s(kr);Yh=i($m,"ModelInfo"),$m.forEach(t),Sl.forEach(t),Xi=h(o),_t=n(o,"DIV",{class:!0});var Ml=s(_t);H(on.$$.fragment,Ml),Zh=h(Ml),Ar=n(Ml,"P",{});var ym=s(Ar);ed=i(ym,"Info about a model accessible from huggingface.co"),ym.forEach(t),Ml.forEach(t),Yi=h(o),bt=n(o,"H3",{class:!0});var Ul=s(bt);qo=n(Ul,"A",{id:!0,class:!0,href:!0});var Em=s(qo);xr=n(Em,"SPAN",{});var wm=s(xr);H(an.$$.fragment,wm),wm.forEach(t),Em.forEach(t),td=h(Ul),Dr=n(Ul,"SPAN",{});var km=s(Dr);od=i(km,"DatasetInfo"),km.forEach(t),Ul.forEach(t),Zi=h(o),vt=n(o,"DIV",{class:!0});var Vl=s(vt);H(nn.$$.fragment,Vl),ad=h(Vl),Hr=n(Vl,"P",{});var Am=s(Hr);nd=i(Am,"Info about a dataset accessible from huggingface.co"),Am.forEach(t),Vl.forEach(t),el=h(o),$t=n(o,"H3",{class:!0});var zl=s($t);Io=n(zl,"A",{id:!0,class:!0,href:!0});var xm=s(Io);qr=n(xm,"SPAN",{});var Dm=s(qr);H(sn.$$.fragment,Dm),Dm.forEach(t),xm.forEach(t),sd=h(zl),Ir=n(zl,"SPAN",{});var Hm=s(Ir);rd=i(Hm,"SpaceInfo"),Hm.forEach(t),zl.forEach(t),tl=h(o),Re=n(o,"DIV",{class:!0});var vs=s(Re);H(rn.$$.fragment,vs),id=h(vs),jr=n(vs,"P",{});var qm=s(jr);ld=i(qm,"Info about a Space accessible from huggingface.co"),qm.forEach(t),cd=h(vs),Nr=n(vs,"P",{});var Im=s(Nr);pd=i(Im,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Im.forEach(t),vs.forEach(t),ol=h(o),yt=n(o,"H3",{class:!0});var Wl=s(yt);jo=n(Wl,"A",{id:!0,class:!0,href:!0});var jm=s(jo);Fr=n(jm,"SPAN",{});var Nm=s(Fr);H(ln.$$.fragment,Nm),Nm.forEach(t),jm.forEach(t),gd=h(Wl),Tr=n(Wl,"SPAN",{});var Fm=s(Tr);hd=i(Fm,"RepoFile"),Fm.forEach(t),Wl.forEach(t),al=h(o),Et=n(o,"DIV",{class:!0});var Gl=s(Et);H(cn.$$.fragment,Gl),dd=h(Gl),Pr=n(Gl,"P",{});var Tm=s(Pr);ud=i(Tm,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Tm.forEach(t),Gl.forEach(t),nl=h(o),wt=n(o,"H3",{class:!0});var Bl=s(wt);No=n(Bl,"A",{id:!0,class:!0,href:!0});var Pm=s(No);Or=n(Pm,"SPAN",{});var Om=s(Or);H(pn.$$.fragment,Om),Om.forEach(t),Pm.forEach(t),fd=h(Bl),Lr=n(Bl,"SPAN",{});var Lm=s(Lr);md=i(Lm,"CommitInfo"),Lm.forEach(t),Bl.forEach(t),sl=h(o),Ce=n(o,"DIV",{class:!0});var $s=s(Ce);H(gn.$$.fragment,$s),_d=h($s),Rr=n($s,"P",{});var Rm=s(Rr);bd=i(Rm,"Data structure containing information about a newly created commit."),Rm.forEach(t),vd=h($s),hn=n($s,"P",{});var Kl=s(hn);$d=i(Kl,"Returned by "),is=n(Kl,"A",{href:!0});var Cm=s(is);yd=i(Cm,"create_commit()"),Cm.forEach(t),Ed=i(Kl,"."),Kl.forEach(t),$s.forEach(t),rl=h(o),kt=n(o,"H2",{class:!0});var Jl=s(kt);Fo=n(Jl,"A",{id:!0,class:!0,href:!0});var Sm=s(Fo);Cr=n(Sm,"SPAN",{});var Mm=s(Cr);H(dn.$$.fragment,Mm),Mm.forEach(t),Sm.forEach(t),wd=h(Jl),ls=n(Jl,"SPAN",{});var wf=s(ls);Sr=n(wf,"CODE",{});var Um=s(Sr);kd=i(Um,"create_commit"),Um.forEach(t),Ad=i(wf," API"),wf.forEach(t),Jl.forEach(t),il=h(o),To=n(o,"P",{});var Ql=s(To);xd=i(Ql,"Below are the supported values for "),Mr=n(Ql,"CODE",{});var Vm=s(Mr);Dd=i(Vm,"CommitOperation()"),Vm.forEach(t),Hd=i(Ql,":"),Ql.forEach(t),ll=h(o),fe=n(o,"DIV",{class:!0});var ct=s(fe);H(un.$$.fragment,ct),qd=h(ct),Ur=n(ct,"P",{});var zm=s(Ur);Id=i(zm,`Data structure holding necessary info to upload a file
to a repository on the Hub`),zm.forEach(t),jd=h(ct),ye=n(ct,"DIV",{class:!0});var pt=s(ye);H(fn.$$.fragment,pt),Nd=h(pt),mn=n(pt,"P",{});var Xl=s(mn);Fd=i(Xl,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Vr=n(Xl,"CODE",{});var Wm=s(Vr);Td=i(Wm,"path_or_fileobj"),Wm.forEach(t),Pd=i(Xl,"."),Xl.forEach(t),Od=h(pt),_n=n(pt,"P",{});var Yl=s(_n);Ld=i(Yl,"Triggers "),zr=n(Yl,"CODE",{});var Gm=s(zr);Rd=i(Gm,"self.validate"),Gm.forEach(t),Cd=i(Yl,"."),Yl.forEach(t),Sd=h(pt),bn=n(pt,"P",{});var Zl=s(bn);Md=i(Zl,"Raises: "),Wr=n(Zl,"CODE",{});var Bm=s(Wr);Ud=i(Bm,"ValueError"),Bm.forEach(t),Vd=i(Zl," if self.validate fails"),Zl.forEach(t),zd=h(pt),H(Po.$$.fragment,pt),pt.forEach(t),Wd=h(ct),ot=n(ct,"DIV",{class:!0});var ys=s(ot);H(vn.$$.fragment,ys),Gd=h(ys),cs=n(ys,"P",{});var kf=s(cs);Bd=i(kf,"The base64-encoded content of "),Gr=n(kf,"CODE",{});var Km=s(Gr);Kd=i(Km,"path_or_fileobj"),Km.forEach(t),kf.forEach(t),Jd=h(ys),ps=n(ys,"P",{});var Af=s(ps);Qd=i(Af,"Returns: "),Br=n(Af,"CODE",{});var Jm=s(Br);Xd=i(Jm,"bytes"),Jm.forEach(t),Af.forEach(t),ys.forEach(t),Yd=h(ct),Pe=n(ct,"DIV",{class:!0});var na=s(Pe);H($n.$$.fragment,na),Zd=h(na),yn=n(na,"P",{});var ec=s(yn);eu=i(ec,"Ensures "),Kr=n(ec,"CODE",{});var Qm=s(Kr);tu=i(Qm,"path_or_fileobj"),Qm.forEach(t),ou=i(ec," is valid:"),ec.forEach(t),au=h(na),At=n(na,"UL",{});var Es=s(At);at=n(Es,"LI",{});var Jn=s(at);nu=i(Jn,"Ensures it is either a "),Jr=n(Jn,"CODE",{});var Xm=s(Jr);su=i(Xm,"str"),Xm.forEach(t),ru=i(Jn,", "),Qr=n(Jn,"CODE",{});var Ym=s(Qr);iu=i(Ym,"bytes"),Ym.forEach(t),lu=i(Jn," or an instance of "),Xr=n(Jn,"CODE",{});var Zm=s(Xr);cu=i(Zm,"io.BufferedIOBase"),Zm.forEach(t),Jn.forEach(t),pu=h(Es),En=n(Es,"LI",{});var tc=s(En);gu=i(tc,"If it is a "),Yr=n(tc,"CODE",{});var e_=s(Yr);hu=i(e_,"str"),e_.forEach(t),du=i(tc,", ensure that it is a file path and that the file exists"),tc.forEach(t),uu=h(Es),nt=n(Es,"LI",{});var Qn=s(nt);fu=i(Qn,"If it is an instance of "),Zr=n(Qn,"CODE",{});var t_=s(Zr);mu=i(t_,"io.BufferedIOBase"),t_.forEach(t),_u=i(Qn,", ensures it supports "),ei=n(Qn,"CODE",{});var o_=s(ei);bu=i(o_,"seek()"),o_.forEach(t),vu=i(Qn," and "),ti=n(Qn,"CODE",{});var a_=s(ti);$u=i(a_,"tell()"),a_.forEach(t),Qn.forEach(t),Es.forEach(t),yu=h(na),xt=n(na,"P",{});var ws=s(xt);Eu=i(ws,"Raises: "),oi=n(ws,"CODE",{});var n_=s(oi);wu=i(n_,"ValueError"),n_.forEach(t),ku=i(ws," if "),ai=n(ws,"CODE",{});var s_=s(ai);Au=i(s_,"path_or_fileobj"),s_.forEach(t),xu=i(ws," is not valid"),ws.forEach(t),na.forEach(t),ct.forEach(t),cl=h(o),Dt=n(o,"DIV",{class:!0});var oc=s(Dt);H(wn.$$.fragment,oc),Du=h(oc),ni=n(oc,"P",{});var r_=s(ni);Hu=i(r_,`Data structure holding necessary info to delete
a file from a repository on the Hub`),r_.forEach(t),oc.forEach(t),pl=h(o),Ht=n(o,"H2",{class:!0});var ac=s(Ht);Oo=n(ac,"A",{id:!0,class:!0,href:!0});var i_=s(Oo);si=n(i_,"SPAN",{});var l_=s(si);H(kn.$$.fragment,l_),l_.forEach(t),i_.forEach(t),qu=h(ac),ri=n(ac,"SPAN",{});var c_=s(ri);Iu=i(c_,"Hugging Face local storage"),c_.forEach(t),ac.forEach(t),gl=h(o),An=n(o,"P",{});var xf=s(An);ii=n(xf,"CODE",{});var p_=s(ii);ju=i(p_,"huggingface_hub"),p_.forEach(t),Nu=i(xf,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),xf.forEach(t),hl=h(o),Lo=n(o,"P",{});var nc=s(Lo);Fu=i(nc,"It does this using the "),gs=n(nc,"A",{href:!0});var g_=s(gs);Tu=i(g_,"HfFolder"),g_.forEach(t),Pu=i(nc," utility, which saves data at the root of the user."),nc.forEach(t),dl=h(o),we=n(o,"DIV",{class:!0});var sa=s(we);H(xn.$$.fragment,sa),Ou=h(sa),Ro=n(sa,"DIV",{class:!0});var sc=s(Ro);H(Dn.$$.fragment,sc),Lu=h(sc),li=n(sc,"P",{});var h_=s(li);Ru=i(h_,"Deletes the token from storage. Does not fail if token does not exist."),h_.forEach(t),sc.forEach(t),Cu=h(sa),st=n(sa,"DIV",{class:!0});var ks=s(st);H(Hn.$$.fragment,ks),Su=h(ks),ci=n(ks,"P",{});var d_=s(ci);Mu=i(d_,"Get token or None if not existent."),d_.forEach(t),Uu=h(ks),qn=n(ks,"P",{});var rc=s(qn);Vu=i(rc,`Note that a token can be also provided using the
`),pi=n(rc,"CODE",{});var u_=s(pi);zu=i(u_,"HUGGING_FACE_HUB_TOKEN"),u_.forEach(t),Wu=i(rc," environment variable."),rc.forEach(t),ks.forEach(t),Gu=h(sa),Co=n(sa,"DIV",{class:!0});var ic=s(Co);H(In.$$.fragment,ic),Bu=h(ic),gi=n(ic,"P",{});var f_=s(gi);Ku=i(f_,"Save token, creating folder as needed."),f_.forEach(t),ic.forEach(t),sa.forEach(t),ul=h(o),qt=n(o,"H2",{class:!0});var lc=s(qt);So=n(lc,"A",{id:!0,class:!0,href:!0});var m_=s(So);hi=n(m_,"SPAN",{});var __=s(hi);H(jn.$$.fragment,__),__.forEach(t),m_.forEach(t),Ju=h(lc),di=n(lc,"SPAN",{});var b_=s(di);Qu=i(b_,"Filtering helpers"),b_.forEach(t),lc.forEach(t),fl=h(o),Mo=n(o,"P",{});var cc=s(Mo);Xu=i(cc,"Some helpers to filter repositories on the Hub are available in the "),ui=n(cc,"CODE",{});var v_=s(ui);Yu=i(v_,"huggingface_hub"),v_.forEach(t),Zu=i(cc," package."),cc.forEach(t),ml=h(o),It=n(o,"H3",{class:!0});var pc=s(It);Uo=n(pc,"A",{id:!0,class:!0,href:!0});var $_=s(Uo);fi=n($_,"SPAN",{});var y_=s(fi);H(Nn.$$.fragment,y_),y_.forEach(t),$_.forEach(t),ef=h(pc),mi=n(pc,"SPAN",{});var E_=s(mi);tf=i(E_,"DatasetFilter"),E_.forEach(t),pc.forEach(t),_l=h(o),Se=n(o,"DIV",{class:!0});var As=s(Se);H(Fn.$$.fragment,As),of=h(As),_i=n(As,"P",{});var w_=s(_i);af=i(w_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),w_.forEach(t),nf=h(As),H(Vo.$$.fragment,As),As.forEach(t),bl=h(o),jt=n(o,"H3",{class:!0});var gc=s(jt);zo=n(gc,"A",{id:!0,class:!0,href:!0});var k_=s(zo);bi=n(k_,"SPAN",{});var A_=s(bi);H(Tn.$$.fragment,A_),A_.forEach(t),k_.forEach(t),sf=h(gc),vi=n(gc,"SPAN",{});var x_=s(vi);rf=i(x_,"ModelFilter"),x_.forEach(t),gc.forEach(t),vl=h(o),Me=n(o,"DIV",{class:!0});var xs=s(Me);H(Pn.$$.fragment,xs),lf=h(xs),$i=n(xs,"P",{});var D_=s($i);cf=i(D_,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),D_.forEach(t),pf=h(xs),H(Wo.$$.fragment,xs),xs.forEach(t),$l=h(o),Nt=n(o,"H3",{class:!0});var hc=s(Nt);Go=n(hc,"A",{id:!0,class:!0,href:!0});var H_=s(Go);yi=n(H_,"SPAN",{});var q_=s(yi);H(On.$$.fragment,q_),q_.forEach(t),H_.forEach(t),gf=h(hc),Ei=n(hc,"SPAN",{});var I_=s(Ei);hf=i(I_,"DatasetSearchArguments"),I_.forEach(t),hc.forEach(t),yl=h(o),Ue=n(o,"DIV",{class:!0});var Ds=s(Ue);H(Ln.$$.fragment,Ds),df=h(Ds),wi=n(Ds,"P",{});var j_=s(wi);uf=i(j_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),j_.forEach(t),ff=h(Ds),H(Bo.$$.fragment,Ds),Ds.forEach(t),El=h(o),Ft=n(o,"H3",{class:!0});var dc=s(Ft);Ko=n(dc,"A",{id:!0,class:!0,href:!0});var N_=s(Ko);ki=n(N_,"SPAN",{});var F_=s(ki);H(Rn.$$.fragment,F_),F_.forEach(t),N_.forEach(t),mf=h(dc),Ai=n(dc,"SPAN",{});var T_=s(Ai);_f=i(T_,"ModelSearchArguments"),T_.forEach(t),dc.forEach(t),wl=h(o),Ve=n(o,"DIV",{class:!0});var Hs=s(Ve);H(Cn.$$.fragment,Hs),bf=h(Hs),xi=n(Hs,"P",{});var P_=s(xi);vf=i(P_,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),P_.forEach(t),$f=h(Hs),H(Jo.$$.fragment,Hs),Hs.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Db)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(ut,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Pt,"id","huggingface_hub.HfApi"),m(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pt,"href","#huggingface_hub.HfApi"),m(ft,"class","relative group"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(es,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ts,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(as,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ss,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),m(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Va,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Va,"rel","nofollow"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ya,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(Ya,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","huggingface_hub.hf_api.ModelInfo"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#huggingface_hub.hf_api.ModelInfo"),m(mt,"class","relative group"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"id","huggingface_hub.hf_api.DatasetInfo"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#huggingface_hub.hf_api.DatasetInfo"),m(bt,"class","relative group"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.hf_api.SpaceInfo"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.hf_api.SpaceInfo"),m($t,"class","relative group"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","huggingface_hub.hf_api.RepoFile"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#huggingface_hub.hf_api.RepoFile"),m(yt,"class","relative group"),m(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","huggingface_hub.CommitInfo"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#huggingface_hub.CommitInfo"),m(wt,"class","relative group"),m(is,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.CommitOperationAdd"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.CommitOperationAdd"),m(kt,"class","relative group"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"id","huggingface_hub.HfFolder"),m(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oo,"href","#huggingface_hub.HfFolder"),m(Ht,"class","relative group"),m(gs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"id","filtering-helpers"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#filtering-helpers"),m(qt,"class","relative group"),m(Uo,"id","huggingface_hub.DatasetFilter"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#huggingface_hub.DatasetFilter"),m(It,"class","relative group"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zo,"id","huggingface_hub.ModelFilter"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#huggingface_hub.ModelFilter"),m(jt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","huggingface_hub.DatasetSearchArguments"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#huggingface_hub.DatasetSearchArguments"),m(Nt,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"id","huggingface_hub.ModelSearchArguments"),m(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ko,"href","#huggingface_hub.ModelSearchArguments"),m(Ft,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,d),q(l,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,L,E),$(o,_,E),e(_,F),e(_,S),e(S,z),e(_,R),$(o,K,E),$(o,G,E),e(G,A),$(o,M,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Be),e(ne,de),e(de,gt),e(ne,Ke),e(ne,ke),e(ke,ht),e(ne,dt),e(ne,ut),e(ut,Xn),e(ne,ra),$(o,ia,E),q(Le,o,E),$(o,la,E),$(o,ft,E),e(ft,Pt),e(Pt,qs),q(ca,qs,null),e(ft,uc),e(ft,Is),e(Is,fc),$(o,Ji,E),$(o,V,E),q(pa,V,null),e(V,mc),e(V,Ae),q(ga,Ae,null),e(Ae,_c),e(Ae,js),e(js,bc),e(Ae,vc),q(Ot,Ae,null),e(Ae,$c),q(Lt,Ae,null),e(V,yc),e(V,xe),q(ha,xe,null),e(xe,Ec),e(xe,Ns),e(Ns,wc),e(xe,kc),q(Rt,xe,null),e(xe,Ac),q(Ct,xe,null),e(V,xc),e(V,Je),q(da,Je,null),e(Je,Dc),e(Je,Fs),e(Fs,Hc),e(Je,qc),q(St,Je,null),e(V,Ic),e(V,le),q(ua,le,null),e(le,jc),e(le,Ts),e(Ts,Nc),e(le,Fc),e(le,fa),e(fa,Tc),e(fa,Ps),e(Ps,Pc),e(fa,Oc),e(le,Lc),e(le,ma),e(ma,Rc),e(ma,Yn),e(Yn,Cc),e(ma,Sc),e(le,Mc),e(le,Zn),e(Zn,Uc),e(Zn,es),e(es,Vc),e(le,zc),q(Mt,le,null),e(V,Wc),e(V,ce),q(_a,ce,null),e(ce,Gc),e(ce,ba),e(ba,Bc),e(ba,Os),e(Os,Kc),e(ba,Jc),e(ce,Qc),e(ce,va),e(va,Xc),e(va,ts),e(ts,Yc),e(va,Zc),e(ce,ep),e(ce,$a),e($a,tp),e($a,Ls),e(Ls,op),e($a,ap),e(ce,np),e(ce,os),e(os,sp),e(os,as),e(as,rp),e(ce,ip),q(Ut,ce,null),e(V,lp),e(V,Vt),q(ya,Vt,null),e(Vt,cp),e(Vt,Rs),e(Rs,pp),e(V,gp),e(V,zt),q(Ea,zt,null),e(zt,hp),e(zt,Cs),e(Cs,dp),e(V,up),e(V,De),q(wa,De,null),e(De,fp),e(De,Ss),e(Ss,mp),e(De,_p),e(De,Ms),e(Ms,bp),e(De,vp),q(Wt,De,null),e(V,$p),e(V,Qe),q(ka,Qe,null),e(Qe,yp),e(Qe,Us),e(Us,Ep),e(Qe,wp),q(Gt,Qe,null),e(V,kp),e(V,Xe),q(Aa,Xe,null),e(Xe,Ap),e(Xe,Vs),e(Vs,xp),e(Xe,Dp),q(Bt,Xe,null),e(V,Hp),e(V,Ye),q(xa,Ye,null),e(Ye,qp),e(Ye,zs),e(zs,Ip),e(Ye,jp),q(Kt,Ye,null),e(V,Np),e(V,Jt),q(Da,Jt,null),e(Jt,Fp),e(Jt,Ws),e(Ws,Tp),e(V,Pp),e(V,He),q(Ha,He,null),e(He,Op),e(He,Gs),e(Gs,Lp),e(He,Rp),e(He,ns),e(ns,Cp),e(ns,ss),e(ss,Sp),e(He,Mp),q(Qt,He,null),e(V,Up),e(V,Xt),q(qa,Xt,null),e(Xt,Vp),e(Xt,Bs),e(Bs,zp),e(V,Wp),e(V,Yt),q(Ia,Yt,null),e(Yt,Gp),e(Yt,Ks),e(Ks,Bp),e(V,Kp),e(V,be),q(ja,be,null),e(be,Jp),e(be,Js),e(Js,Qp),e(be,Xp),e(be,Qs),e(Qs,Yp),e(be,Zp),q(Zt,be,null),e(be,eg),q(eo,be,null),e(V,tg),e(V,qe),q(Na,qe,null),e(qe,og),e(qe,Xs),e(Xs,ag),e(qe,ng),q(to,qe,null),e(qe,sg),q(oo,qe,null),e(V,rg),e(V,Ie),q(Fa,Ie,null),e(Ie,ig),e(Ie,Ys),e(Ys,lg),e(Ie,cg),q(ao,Ie,null),e(Ie,pg),q(no,Ie,null),e(V,gg),e(V,so),q(Ta,so,null),e(so,hg),e(so,Zs),e(Zs,dg),e(V,ug),e(V,ve),q(Pa,ve,null),e(ve,fg),e(ve,er),e(er,mg),e(ve,_g),e(ve,Oa),e(Oa,bg),e(Oa,rs),e(rs,vg),e(Oa,$g),e(ve,yg),q(ro,ve,null),e(ve,Eg),q(io,ve,null),e(V,wg),e(V,lo),q(La,lo,null),e(lo,kg),e(lo,tr),e(tr,Ag),e(V,xg),e(V,co),q(Ra,co,null),e(co,Dg),e(co,or),e(or,Hg),e(V,qg),e(V,Ze),q(Ca,Ze,null),e(Ze,Ig),e(Ze,ar),e(ar,jg),e(Ze,Ng),q(po,Ze,null),e(V,Fg),e(V,je),q(Sa,je,null),e(je,Tg),e(je,nr),e(nr,Pg),e(je,Og),e(je,sr),e(sr,Lg),e(je,Rg),q(go,je,null),e(V,Cg),e(V,Ne),q(Ma,Ne,null),e(Ne,Sg),e(Ne,rr),e(rr,Mg),e(Ne,Ug),e(Ne,Ua),e(Ua,Vg),e(Ua,Va),e(Va,zg),e(Ua,Wg),e(Ne,Gg),q(ho,Ne,null),e(V,Bg),e(V,Fe),q(za,Fe,null),e(Fe,Kg),e(Fe,ir),e(ir,Jg),e(Fe,Qg),q(uo,Fe,null),e(Fe,Xg),q(fo,Fe,null),e(V,Yg),e(V,et),q(Wa,et,null),e(et,Zg),e(et,lr),e(lr,eh),e(et,th),q(mo,et,null),e(V,oh),e(V,_o),q(Ga,_o,null),e(_o,ah),e(_o,cr),e(cr,nh),e(V,sh),e(V,Te),q(Ba,Te,null),e(Te,rh),e(Te,pr),e(pr,ih),e(Te,lh),e(Te,gr),e(gr,ch),e(Te,ph),q(bo,Te,null),e(V,gh),e(V,vo),q(Ka,vo,null),e(vo,hh),e(vo,hr),e(hr,dh),e(V,uh),e(V,tt),q(Ja,tt,null),e(tt,fh),e(tt,dr),e(dr,mh),e(tt,_h),q($o,tt,null),e(V,bh),e(V,$e),q(Qa,$e,null),e($e,vh),e($e,ur),e(ur,$h),e($e,yh),q(yo,$e,null),e($e,Eh),q(Eo,$e,null),e($e,wh),q(wo,$e,null),e(V,kh),e(V,re),q(Xa,re,null),e(re,Ah),e(re,fr),e(fr,xh),e(re,Dh),e(re,mr),e(mr,Hh),e(re,qh),e(re,ue),e(ue,Ih),e(ue,_r),e(_r,jh),e(ue,Nh),e(ue,br),e(br,Fh),e(ue,Th),e(ue,Ya),e(Ya,Ph),e(ue,Oh),e(ue,vr),e(vr,Lh),e(ue,Rh),e(ue,$r),e($r,Ch),e(ue,Sh),e(re,Mh),e(re,Za),e(Za,Uh),e(Za,yr),e(yr,Vh),e(Za,zh),e(re,Wh),q(ko,re,null),e(re,Gh),q(Ao,re,null),e(re,Bh),q(xo,re,null),e(V,Kh),e(V,Do),q(en,Do,null),e(Do,Jh),e(Do,Er),e(Er,Qh),$(o,Qi,E),$(o,mt,E),e(mt,Ho),e(Ho,wr),q(tn,wr,null),e(mt,Xh),e(mt,kr),e(kr,Yh),$(o,Xi,E),$(o,_t,E),q(on,_t,null),e(_t,Zh),e(_t,Ar),e(Ar,ed),$(o,Yi,E),$(o,bt,E),e(bt,qo),e(qo,xr),q(an,xr,null),e(bt,td),e(bt,Dr),e(Dr,od),$(o,Zi,E),$(o,vt,E),q(nn,vt,null),e(vt,ad),e(vt,Hr),e(Hr,nd),$(o,el,E),$(o,$t,E),e($t,Io),e(Io,qr),q(sn,qr,null),e($t,sd),e($t,Ir),e(Ir,rd),$(o,tl,E),$(o,Re,E),q(rn,Re,null),e(Re,id),e(Re,jr),e(jr,ld),e(Re,cd),e(Re,Nr),e(Nr,pd),$(o,ol,E),$(o,yt,E),e(yt,jo),e(jo,Fr),q(ln,Fr,null),e(yt,gd),e(yt,Tr),e(Tr,hd),$(o,al,E),$(o,Et,E),q(cn,Et,null),e(Et,dd),e(Et,Pr),e(Pr,ud),$(o,nl,E),$(o,wt,E),e(wt,No),e(No,Or),q(pn,Or,null),e(wt,fd),e(wt,Lr),e(Lr,md),$(o,sl,E),$(o,Ce,E),q(gn,Ce,null),e(Ce,_d),e(Ce,Rr),e(Rr,bd),e(Ce,vd),e(Ce,hn),e(hn,$d),e(hn,is),e(is,yd),e(hn,Ed),$(o,rl,E),$(o,kt,E),e(kt,Fo),e(Fo,Cr),q(dn,Cr,null),e(kt,wd),e(kt,ls),e(ls,Sr),e(Sr,kd),e(ls,Ad),$(o,il,E),$(o,To,E),e(To,xd),e(To,Mr),e(Mr,Dd),e(To,Hd),$(o,ll,E),$(o,fe,E),q(un,fe,null),e(fe,qd),e(fe,Ur),e(Ur,Id),e(fe,jd),e(fe,ye),q(fn,ye,null),e(ye,Nd),e(ye,mn),e(mn,Fd),e(mn,Vr),e(Vr,Td),e(mn,Pd),e(ye,Od),e(ye,_n),e(_n,Ld),e(_n,zr),e(zr,Rd),e(_n,Cd),e(ye,Sd),e(ye,bn),e(bn,Md),e(bn,Wr),e(Wr,Ud),e(bn,Vd),e(ye,zd),q(Po,ye,null),e(fe,Wd),e(fe,ot),q(vn,ot,null),e(ot,Gd),e(ot,cs),e(cs,Bd),e(cs,Gr),e(Gr,Kd),e(ot,Jd),e(ot,ps),e(ps,Qd),e(ps,Br),e(Br,Xd),e(fe,Yd),e(fe,Pe),q($n,Pe,null),e(Pe,Zd),e(Pe,yn),e(yn,eu),e(yn,Kr),e(Kr,tu),e(yn,ou),e(Pe,au),e(Pe,At),e(At,at),e(at,nu),e(at,Jr),e(Jr,su),e(at,ru),e(at,Qr),e(Qr,iu),e(at,lu),e(at,Xr),e(Xr,cu),e(At,pu),e(At,En),e(En,gu),e(En,Yr),e(Yr,hu),e(En,du),e(At,uu),e(At,nt),e(nt,fu),e(nt,Zr),e(Zr,mu),e(nt,_u),e(nt,ei),e(ei,bu),e(nt,vu),e(nt,ti),e(ti,$u),e(Pe,yu),e(Pe,xt),e(xt,Eu),e(xt,oi),e(oi,wu),e(xt,ku),e(xt,ai),e(ai,Au),e(xt,xu),$(o,cl,E),$(o,Dt,E),q(wn,Dt,null),e(Dt,Du),e(Dt,ni),e(ni,Hu),$(o,pl,E),$(o,Ht,E),e(Ht,Oo),e(Oo,si),q(kn,si,null),e(Ht,qu),e(Ht,ri),e(ri,Iu),$(o,gl,E),$(o,An,E),e(An,ii),e(ii,ju),e(An,Nu),$(o,hl,E),$(o,Lo,E),e(Lo,Fu),e(Lo,gs),e(gs,Tu),e(Lo,Pu),$(o,dl,E),$(o,we,E),q(xn,we,null),e(we,Ou),e(we,Ro),q(Dn,Ro,null),e(Ro,Lu),e(Ro,li),e(li,Ru),e(we,Cu),e(we,st),q(Hn,st,null),e(st,Su),e(st,ci),e(ci,Mu),e(st,Uu),e(st,qn),e(qn,Vu),e(qn,pi),e(pi,zu),e(qn,Wu),e(we,Gu),e(we,Co),q(In,Co,null),e(Co,Bu),e(Co,gi),e(gi,Ku),$(o,ul,E),$(o,qt,E),e(qt,So),e(So,hi),q(jn,hi,null),e(qt,Ju),e(qt,di),e(di,Qu),$(o,fl,E),$(o,Mo,E),e(Mo,Xu),e(Mo,ui),e(ui,Yu),e(Mo,Zu),$(o,ml,E),$(o,It,E),e(It,Uo),e(Uo,fi),q(Nn,fi,null),e(It,ef),e(It,mi),e(mi,tf),$(o,_l,E),$(o,Se,E),q(Fn,Se,null),e(Se,of),e(Se,_i),e(_i,af),e(Se,nf),q(Vo,Se,null),$(o,bl,E),$(o,jt,E),e(jt,zo),e(zo,bi),q(Tn,bi,null),e(jt,sf),e(jt,vi),e(vi,rf),$(o,vl,E),$(o,Me,E),q(Pn,Me,null),e(Me,lf),e(Me,$i),e($i,cf),e(Me,pf),q(Wo,Me,null),$(o,$l,E),$(o,Nt,E),e(Nt,Go),e(Go,yi),q(On,yi,null),e(Nt,gf),e(Nt,Ei),e(Ei,hf),$(o,yl,E),$(o,Ue,E),q(Ln,Ue,null),e(Ue,df),e(Ue,wi),e(wi,uf),e(Ue,ff),q(Bo,Ue,null),$(o,El,E),$(o,Ft,E),e(Ft,Ko),e(Ko,ki),q(Rn,ki,null),e(Ft,mf),e(Ft,Ai),e(Ai,_f),$(o,wl,E),$(o,Ve,E),q(Cn,Ve,null),e(Ve,bf),e(Ve,xi),e(xi,vf),e(Ve,$f),q(Jo,Ve,null),kl=!0},p(o,[E]){const Sn={};E&2&&(Sn.$$scope={dirty:E,ctx:o}),Ot.$set(Sn);const Di={};E&2&&(Di.$$scope={dirty:E,ctx:o}),Lt.$set(Di);const Hi={};E&2&&(Hi.$$scope={dirty:E,ctx:o}),Rt.$set(Hi);const qi={};E&2&&(qi.$$scope={dirty:E,ctx:o}),Ct.$set(qi);const Mn={};E&2&&(Mn.$$scope={dirty:E,ctx:o}),St.$set(Mn);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),Mt.$set(Ii);const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),Ut.$set(Un);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),Wt.$set(ji);const Ni={};E&2&&(Ni.$$scope={dirty:E,ctx:o}),Gt.$set(Ni);const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),Bt.$set(Vn);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),Kt.$set(Fi);const ze={};E&2&&(ze.$$scope={dirty:E,ctx:o}),Qt.$set(ze);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),Zt.$set(Ti);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),eo.$set(Pi);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),to.$set(Oi);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),oo.$set(zn);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),ao.$set(Li);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),no.$set(Ri);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),ro.$set(Ci);const W={};E&2&&(W.$$scope={dirty:E,ctx:o}),io.$set(W);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),po.$set(We);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),go.$set(Si);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),ho.$set(Ge);const Mi={};E&2&&(Mi.$$scope={dirty:E,ctx:o}),uo.$set(Mi);const Tt={};E&2&&(Tt.$$scope={dirty:E,ctx:o}),fo.$set(Tt);const Ui={};E&2&&(Ui.$$scope={dirty:E,ctx:o}),mo.$set(Ui);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),bo.$set(me);const Vi={};E&2&&(Vi.$$scope={dirty:E,ctx:o}),$o.$set(Vi);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),yo.$set(Wn);const zi={};E&2&&(zi.$$scope={dirty:E,ctx:o}),Eo.$set(zi);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),wo.$set(Gn);const Wi={};E&2&&(Wi.$$scope={dirty:E,ctx:o}),ko.$set(Wi);const hs={};E&2&&(hs.$$scope={dirty:E,ctx:o}),Ao.$set(hs);const Gi={};E&2&&(Gi.$$scope={dirty:E,ctx:o}),xo.$set(Gi);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),Po.$set(_e);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),Vo.$set(Bn);const Bi={};E&2&&(Bi.$$scope={dirty:E,ctx:o}),Wo.$set(Bi);const Kn={};E&2&&(Kn.$$scope={dirty:E,ctx:o}),Bo.$set(Kn);const Ki={};E&2&&(Ki.$$scope={dirty:E,ctx:o}),Jo.$set(Ki)},i(o){kl||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Le.$$.fragment,o),I(ca.$$.fragment,o),I(pa.$$.fragment,o),I(ga.$$.fragment,o),I(Ot.$$.fragment,o),I(Lt.$$.fragment,o),I(ha.$$.fragment,o),I(Rt.$$.fragment,o),I(Ct.$$.fragment,o),I(da.$$.fragment,o),I(St.$$.fragment,o),I(ua.$$.fragment,o),I(Mt.$$.fragment,o),I(_a.$$.fragment,o),I(Ut.$$.fragment,o),I(ya.$$.fragment,o),I(Ea.$$.fragment,o),I(wa.$$.fragment,o),I(Wt.$$.fragment,o),I(ka.$$.fragment,o),I(Gt.$$.fragment,o),I(Aa.$$.fragment,o),I(Bt.$$.fragment,o),I(xa.$$.fragment,o),I(Kt.$$.fragment,o),I(Da.$$.fragment,o),I(Ha.$$.fragment,o),I(Qt.$$.fragment,o),I(qa.$$.fragment,o),I(Ia.$$.fragment,o),I(ja.$$.fragment,o),I(Zt.$$.fragment,o),I(eo.$$.fragment,o),I(Na.$$.fragment,o),I(to.$$.fragment,o),I(oo.$$.fragment,o),I(Fa.$$.fragment,o),I(ao.$$.fragment,o),I(no.$$.fragment,o),I(Ta.$$.fragment,o),I(Pa.$$.fragment,o),I(ro.$$.fragment,o),I(io.$$.fragment,o),I(La.$$.fragment,o),I(Ra.$$.fragment,o),I(Ca.$$.fragment,o),I(po.$$.fragment,o),I(Sa.$$.fragment,o),I(go.$$.fragment,o),I(Ma.$$.fragment,o),I(ho.$$.fragment,o),I(za.$$.fragment,o),I(uo.$$.fragment,o),I(fo.$$.fragment,o),I(Wa.$$.fragment,o),I(mo.$$.fragment,o),I(Ga.$$.fragment,o),I(Ba.$$.fragment,o),I(bo.$$.fragment,o),I(Ka.$$.fragment,o),I(Ja.$$.fragment,o),I($o.$$.fragment,o),I(Qa.$$.fragment,o),I(yo.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(Xa.$$.fragment,o),I(ko.$$.fragment,o),I(Ao.$$.fragment,o),I(xo.$$.fragment,o),I(en.$$.fragment,o),I(tn.$$.fragment,o),I(on.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(cn.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(dn.$$.fragment,o),I(un.$$.fragment,o),I(fn.$$.fragment,o),I(Po.$$.fragment,o),I(vn.$$.fragment,o),I($n.$$.fragment,o),I(wn.$$.fragment,o),I(kn.$$.fragment,o),I(xn.$$.fragment,o),I(Dn.$$.fragment,o),I(Hn.$$.fragment,o),I(In.$$.fragment,o),I(jn.$$.fragment,o),I(Nn.$$.fragment,o),I(Fn.$$.fragment,o),I(Vo.$$.fragment,o),I(Tn.$$.fragment,o),I(Pn.$$.fragment,o),I(Wo.$$.fragment,o),I(On.$$.fragment,o),I(Ln.$$.fragment,o),I(Bo.$$.fragment,o),I(Rn.$$.fragment,o),I(Cn.$$.fragment,o),I(Jo.$$.fragment,o),kl=!0)},o(o){j(l.$$.fragment,o),j(C.$$.fragment,o),j(X.$$.fragment,o),j(Le.$$.fragment,o),j(ca.$$.fragment,o),j(pa.$$.fragment,o),j(ga.$$.fragment,o),j(Ot.$$.fragment,o),j(Lt.$$.fragment,o),j(ha.$$.fragment,o),j(Rt.$$.fragment,o),j(Ct.$$.fragment,o),j(da.$$.fragment,o),j(St.$$.fragment,o),j(ua.$$.fragment,o),j(Mt.$$.fragment,o),j(_a.$$.fragment,o),j(Ut.$$.fragment,o),j(ya.$$.fragment,o),j(Ea.$$.fragment,o),j(wa.$$.fragment,o),j(Wt.$$.fragment,o),j(ka.$$.fragment,o),j(Gt.$$.fragment,o),j(Aa.$$.fragment,o),j(Bt.$$.fragment,o),j(xa.$$.fragment,o),j(Kt.$$.fragment,o),j(Da.$$.fragment,o),j(Ha.$$.fragment,o),j(Qt.$$.fragment,o),j(qa.$$.fragment,o),j(Ia.$$.fragment,o),j(ja.$$.fragment,o),j(Zt.$$.fragment,o),j(eo.$$.fragment,o),j(Na.$$.fragment,o),j(to.$$.fragment,o),j(oo.$$.fragment,o),j(Fa.$$.fragment,o),j(ao.$$.fragment,o),j(no.$$.fragment,o),j(Ta.$$.fragment,o),j(Pa.$$.fragment,o),j(ro.$$.fragment,o),j(io.$$.fragment,o),j(La.$$.fragment,o),j(Ra.$$.fragment,o),j(Ca.$$.fragment,o),j(po.$$.fragment,o),j(Sa.$$.fragment,o),j(go.$$.fragment,o),j(Ma.$$.fragment,o),j(ho.$$.fragment,o),j(za.$$.fragment,o),j(uo.$$.fragment,o),j(fo.$$.fragment,o),j(Wa.$$.fragment,o),j(mo.$$.fragment,o),j(Ga.$$.fragment,o),j(Ba.$$.fragment,o),j(bo.$$.fragment,o),j(Ka.$$.fragment,o),j(Ja.$$.fragment,o),j($o.$$.fragment,o),j(Qa.$$.fragment,o),j(yo.$$.fragment,o),j(Eo.$$.fragment,o),j(wo.$$.fragment,o),j(Xa.$$.fragment,o),j(ko.$$.fragment,o),j(Ao.$$.fragment,o),j(xo.$$.fragment,o),j(en.$$.fragment,o),j(tn.$$.fragment,o),j(on.$$.fragment,o),j(an.$$.fragment,o),j(nn.$$.fragment,o),j(sn.$$.fragment,o),j(rn.$$.fragment,o),j(ln.$$.fragment,o),j(cn.$$.fragment,o),j(pn.$$.fragment,o),j(gn.$$.fragment,o),j(dn.$$.fragment,o),j(un.$$.fragment,o),j(fn.$$.fragment,o),j(Po.$$.fragment,o),j(vn.$$.fragment,o),j($n.$$.fragment,o),j(wn.$$.fragment,o),j(kn.$$.fragment,o),j(xn.$$.fragment,o),j(Dn.$$.fragment,o),j(Hn.$$.fragment,o),j(In.$$.fragment,o),j(jn.$$.fragment,o),j(Nn.$$.fragment,o),j(Fn.$$.fragment,o),j(Vo.$$.fragment,o),j(Tn.$$.fragment,o),j(Pn.$$.fragment,o),j(Wo.$$.fragment,o),j(On.$$.fragment,o),j(Ln.$$.fragment,o),j(Bo.$$.fragment,o),j(Rn.$$.fragment,o),j(Cn.$$.fragment,o),j(Jo.$$.fragment,o),kl=!1},d(o){t(p),o&&t(b),o&&t(f),N(l),o&&t(x),o&&t(w),o&&t(L),o&&t(_),o&&t(K),o&&t(G),o&&t(M),N(C,o),o&&t(Y),o&&t(te),o&&t(B),N(X,o),o&&t(oe),o&&t(ne),o&&t(ia),N(Le,o),o&&t(la),o&&t(ft),N(ca),o&&t(Ji),o&&t(V),N(pa),N(ga),N(Ot),N(Lt),N(ha),N(Rt),N(Ct),N(da),N(St),N(ua),N(Mt),N(_a),N(Ut),N(ya),N(Ea),N(wa),N(Wt),N(ka),N(Gt),N(Aa),N(Bt),N(xa),N(Kt),N(Da),N(Ha),N(Qt),N(qa),N(Ia),N(ja),N(Zt),N(eo),N(Na),N(to),N(oo),N(Fa),N(ao),N(no),N(Ta),N(Pa),N(ro),N(io),N(La),N(Ra),N(Ca),N(po),N(Sa),N(go),N(Ma),N(ho),N(za),N(uo),N(fo),N(Wa),N(mo),N(Ga),N(Ba),N(bo),N(Ka),N(Ja),N($o),N(Qa),N(yo),N(Eo),N(wo),N(Xa),N(ko),N(Ao),N(xo),N(en),o&&t(Qi),o&&t(mt),N(tn),o&&t(Xi),o&&t(_t),N(on),o&&t(Yi),o&&t(bt),N(an),o&&t(Zi),o&&t(vt),N(nn),o&&t(el),o&&t($t),N(sn),o&&t(tl),o&&t(Re),N(rn),o&&t(ol),o&&t(yt),N(ln),o&&t(al),o&&t(Et),N(cn),o&&t(nl),o&&t(wt),N(pn),o&&t(sl),o&&t(Ce),N(gn),o&&t(rl),o&&t(kt),N(dn),o&&t(il),o&&t(To),o&&t(ll),o&&t(fe),N(un),N(fn),N(Po),N(vn),N($n),o&&t(cl),o&&t(Dt),N(wn),o&&t(pl),o&&t(Ht),N(kn),o&&t(gl),o&&t(An),o&&t(hl),o&&t(Lo),o&&t(dl),o&&t(we),N(xn),N(Dn),N(Hn),N(In),o&&t(ul),o&&t(qt),N(jn),o&&t(fl),o&&t(Mo),o&&t(ml),o&&t(It),N(Nn),o&&t(_l),o&&t(Se),N(Fn),N(Vo),o&&t(bl),o&&t(jt),N(Tn),o&&t(vl),o&&t(Me),N(Pn),N(Wo),o&&t($l),o&&t(Nt),N(On),o&&t(yl),o&&t(Ue),N(Ln),N(Bo),o&&t(El),o&&t(Ft),N(Rn),o&&t(wl),o&&t(Ve),N(Cn),N(Jo)}}}const Db={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Hb(U){return S_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pb extends O_{constructor(p){super();L_(this,p,Hb,xb,R_,{})}}export{Pb as default,Db as metadata};
