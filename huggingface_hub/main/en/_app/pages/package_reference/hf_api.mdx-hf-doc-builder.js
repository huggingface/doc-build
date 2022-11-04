import{S as L_,i as C_,s as S_,e as a,k as g,w as D,t as r,M as M_,c as n,d as t,m as h,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as N,B as j,v as U_,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function V_(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function z_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function W_(S){let p,b,f,c,d;return c=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function G_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function B_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"create_commit"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function K_(S){let p,b,f,c;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(" is limited to 25k LFS files and a 1GB payload for regular files.")},l(d){p=n(d,"P",{});var l=s(p);b=n(l,"CODE",{});var u=s(b);f=i(u,"create_commit"),u.forEach(t),c=i(l," is limited to 25k LFS files and a 1GB payload for regular files."),l.forEach(t)},m(d,l){$(d,p,l),e(p,b),e(b,f),e(p,c)},d(d){d&&t(p)}}}function J_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Q_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function X_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Y_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),c=n(X,"UL",{});var ne=s(c);d=n(ne,"LI",{});var Je=s(d);l=n(Je,"A",{href:!0,rel:!0});var de=s(l);u=n(de,"CODE",{});var gt=s(u);P=i(gt,"HTTPError"),gt.forEach(t),de.forEach(t),v=i(Je,`
if the HuggingFace API returned an error`),Je.forEach(t),x=h(ne),w=n(ne,"LI",{});var Qe=s(w);y=n(Qe,"A",{href:!0,rel:!0});var we=s(y);k=n(we,"CODE",{});var ht=s(k);O=i(ht,"ValueError"),ht.forEach(t),we.forEach(t),T=i(Qe,`
if some parameter value is invalid`),Qe.forEach(t),R=h(ne),_=n(ne,"LI",{});var dt=s(_);F=n(dt,"A",{href:!0});var ut=s(F);M=i(ut,"RepositoryNotFoundError"),ut.forEach(t),W=i(dt,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(dt,"CODE",{});var es=s(L);K=i(es,"private"),es.forEach(t),G=i(dt," and you do not have access."),dt.forEach(t),A=h(ne),U=n(ne,"LI",{});var la=s(U);C=n(la,"A",{href:!0});var ca=s(C);Y=i(ca,"RevisionNotFoundError"),ca.forEach(t),te=i(la,`
If the revision to download from cannot be found.`),la.forEach(t),Z=h(ne),J=n(ne,"LI",{});var Le=s(J);ee=n(Le,"A",{href:!0});var pa=s(ee);ae=i(pa,"EntryNotFoundError"),pa.forEach(t),B=i(Le,`
If the file to download cannot be found.`),Le.forEach(t),ne.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function Z_(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function eb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function tb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ob(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function ab(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function nb(S){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function sb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function rb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function ib(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function lb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function cb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function pb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function gb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function hb(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function ub(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function fb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function mb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function _b(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function bb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=h(Z),c=n(Z,"UL",{});var ee=s(c);d=n(ee,"LI",{});var ae=s(d);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var ne=s(y);k=n(ne,"CODE",{});var Je=s(k);O=i(Je,"ValueError"),Je.forEach(t),ne.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),R=h(ee),_=n(ee,"LI",{});var de=s(_);F=n(de,"A",{href:!0});var gt=s(F);M=i(gt,"RepositoryNotFoundError"),gt.forEach(t),W=i(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(de,"CODE",{});var Qe=s(L);K=i(Qe,"private"),Qe.forEach(t),G=i(de," and you do not have access."),de.forEach(t),A=h(ee),U=n(ee,"LI",{});var we=s(U);C=n(we,"A",{href:!0});var ht=s(C);Y=i(ht,"RevisionNotFoundError"),ht.forEach(t),te=i(we,`
If the revision to download from cannot be found.`),we.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function vb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"upload_file"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function yb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(R){p=n(R,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=h(R),c=n(R,"UL",{});var F=s(c);d=n(F,"LI",{});var M=s(d);l=n(M,"A",{href:!0,rel:!0});var W=s(l);u=n(W,"CODE",{});var L=s(u);P=i(L,"HTTPError"),L.forEach(t),W.forEach(t),v=i(M,`
if the HuggingFace API returned an error`),M.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(R,_){$(R,p,_),e(p,b),$(R,f,_),$(R,c,_),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(R){R&&t(p),R&&t(f),R&&t(c)}}}function Eb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"upload_folder"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
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
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function kb(S){let p,b,f,c,d;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Ab(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function xb(S){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){N(p.$$.fragment,f),b=!1},d(f){j(p,f)}}}function Db(S){let p,b,f,c,d;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Hb(S){let p,b,f,c,d;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function qb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te,Z,J,ee,ae,B,X,oe,ne,Je,de,gt,Qe,we,ht,dt,ut,es,la,ca,Le,pa,ft,Tt,Ns,ga,mc,js,_c,Yi,V,ha,bc,ke,da,vc,Fs,$c,yc,Pt,Ec,Ot,wc,Ae,ua,kc,Ts,Ac,xc,Rt,Dc,Lt,Hc,xe,fa,qc,Ps,Ic,Nc,Ct,jc,St,Fc,le,ma,Tc,Os,Pc,Oc,_a,Rc,Rs,Lc,Cc,Sc,ba,Mc,ts,Uc,Vc,zc,os,Wc,as,Gc,Bc,Mt,Kc,ce,va,Jc,$a,Qc,Ls,Xc,Yc,Zc,ya,ep,ns,tp,op,ap,Ea,np,Cs,sp,rp,ip,ss,lp,rs,cp,pp,Ut,gp,Vt,wa,hp,Ss,dp,up,zt,ka,fp,Ms,mp,_p,De,Aa,bp,Us,vp,$p,Vs,yp,Ep,Wt,wp,Xe,xa,kp,zs,Ap,xp,Gt,Dp,Ye,Da,Hp,Ws,qp,Ip,Bt,Np,Kt,Ha,jp,Gs,Fp,Tp,Ze,qa,Pp,Bs,Op,Rp,Jt,Lp,Qt,Ia,Cp,Ks,Sp,Mp,He,Na,Up,Js,Vp,zp,is,Wp,ls,Gp,Bp,Xt,Kp,Yt,ja,Jp,Qs,Qp,Xp,Zt,Fa,Yp,Xs,Zp,eg,be,Ta,tg,Ys,og,ag,Zs,ng,sg,eo,rg,to,ig,qe,Pa,lg,er,cg,pg,oo,gg,ao,hg,Ie,Oa,dg,tr,ug,fg,no,mg,so,_g,ro,Ra,bg,or,vg,$g,Ne,La,yg,ar,Eg,wg,io,kg,lo,Ag,co,Ca,xg,nr,Dg,Hg,po,Sa,qg,sr,Ig,Ng,et,Ma,jg,rr,Fg,Tg,go,Pg,je,Ua,Og,ir,Rg,Lg,lr,Cg,Sg,ho,Mg,Fe,Va,Ug,cr,Vg,zg,za,Wg,Wa,Gg,Bg,Kg,uo,Jg,Te,Ga,Qg,pr,Xg,Yg,fo,Zg,mo,eh,tt,Ba,th,gr,oh,ah,_o,nh,bo,Ka,sh,hr,rh,ih,Pe,Ja,lh,dr,ch,ph,ur,gh,hh,vo,dh,$o,Qa,uh,fr,fh,mh,ot,Xa,_h,mr,bh,vh,yo,$h,ve,Ya,yh,_r,Eh,wh,Eo,kh,wo,Ah,ko,xh,re,Za,Dh,br,Hh,qh,vr,Ih,Nh,ue,jh,$r,Fh,Th,yr,Ph,Oh,en,Rh,Lh,Er,Ch,Sh,wr,Mh,Uh,Vh,tn,zh,kr,Wh,Gh,Bh,Ao,Kh,xo,Jh,Do,Qh,Ho,on,Xh,Ar,Yh,Zi,mt,qo,xr,an,Zh,Dr,ed,el,_t,nn,td,Hr,od,tl,bt,Io,qr,sn,ad,Ir,nd,ol,vt,rn,sd,Nr,rd,al,$t,No,jr,ln,id,Fr,ld,nl,Ce,cn,cd,Tr,pd,gd,Pr,hd,sl,yt,jo,Or,pn,dd,Rr,ud,rl,Et,gn,fd,Lr,md,il,wt,Fo,Cr,hn,_d,Sr,bd,ll,Se,dn,vd,Mr,$d,yd,un,Ed,cs,wd,kd,cl,kt,To,Ur,fn,Ad,ps,Vr,xd,Dd,pl,Po,Hd,zr,qd,Id,gl,fe,mn,Nd,Wr,jd,Fd,$e,_n,Td,bn,Pd,Gr,Od,Rd,Ld,vn,Cd,Br,Sd,Md,Ud,$n,Vd,Kr,zd,Wd,Gd,Oo,Bd,at,yn,Kd,gs,Jd,Jr,Qd,Xd,hs,Yd,Qr,Zd,eu,Oe,En,tu,wn,ou,Xr,au,nu,su,At,nt,ru,Yr,iu,lu,Zr,cu,pu,ei,gu,hu,kn,du,ti,uu,fu,mu,st,_u,oi,bu,vu,ai,$u,yu,ni,Eu,wu,xt,ku,si,Au,xu,ri,Du,Hu,hl,Dt,An,qu,ii,Iu,dl,Ht,Ro,li,xn,Nu,ci,ju,ul,Dn,pi,Fu,Tu,fl,Lo,Pu,ds,Ou,Ru,ml,Ee,Hn,Lu,Co,qn,Cu,gi,Su,Mu,rt,In,Uu,hi,Vu,zu,Nn,Wu,di,Gu,Bu,Ku,So,jn,Ju,ui,Qu,_l,qt,Mo,fi,Fn,Xu,mi,Yu,bl,Uo,Zu,_i,ef,tf,vl,It,Vo,bi,Tn,of,vi,af,$l,Me,Pn,nf,$i,sf,rf,zo,yl,Nt,Wo,yi,On,lf,Ei,cf,El,Ue,Rn,pf,wi,gf,hf,Go,wl,jt,Bo,ki,Ln,df,Ai,uf,kl,Ve,Cn,ff,xi,mf,_f,Ko,Al,Ft,Jo,Di,Sn,bf,Hi,vf,xl,ze,Mn,$f,qi,yf,Ef,Qo,Dl;return l=new ye({}),C=new ie({props:{code:`from huggingface_hub import list_models

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
)`}}),ga=new ye({}),ha=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L567"}}),da=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2958",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Pt=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[V_]},$$scope:{ctx:S}}}),Ot=new se({props:{$$slots:{default:[z_]},$$scope:{ctx:S}}}),ua=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2815",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Rt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[W_]},$$scope:{ctx:S}}}),Lt=new se({props:{$$slots:{default:[G_]},$$scope:{ctx:S}}}),fa=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1725",returnDescription:`
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
`}}),Ct=new se({props:{warning:!0,$$slots:{default:[B_]},$$scope:{ctx:S}}}),St=new se({props:{warning:!0,$$slots:{default:[K_]},$$scope:{ctx:S}}}),ma=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2642"}}),Mt=new se({props:{$$slots:{default:[J_]},$$scope:{ctx:S}}}),va=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2731"}}),Ut=new se({props:{$$slots:{default:[Q_]},$$scope:{ctx:S}}}),wa=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1471",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ka=new Q({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a commit will be tagged.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to create.`,name:"tag"},{anchor:"huggingface_hub.HfApi.create_tag.tag_message",description:`<strong>tag_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the tag to create.`,name:"tag_message"},{anchor:"huggingface_hub.HfApi.create_tag.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to tag. It can be a branch name or the OID/SHA of a
commit, as a hexadecimal string. Shorthands (7 first characters) are
also supported. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if tagging a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2332",raiseDescription:`
<ul>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"
>RevisionNotFoundError</a> \u2014
If revision is not found (error 404) on the repo.</li>
</ul>
`,raiseType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> or <a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"
>RevisionNotFoundError</a></p>
`}}),Aa=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.dataset_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1232",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Wt=new se({props:{$$slots:{default:[X_]},$$scope:{ctx:S}}}),xa=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2244"}}),Gt=new se({props:{$$slots:{default:[Y_]},$$scope:{ctx:S}}}),Da=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1551"}}),Bt=new se({props:{$$slots:{default:[Z_]},$$scope:{ctx:S}}}),Ha=new Q({props:{name:"delete_tag",anchor:"huggingface_hub.HfApi.delete_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a commit will be deleted.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to delete.`,name:"tag"},{anchor:"huggingface_hub.HfApi.delete_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if tagging a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2394",raiseDescription:`
<ul>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"
>RevisionNotFoundError</a> \u2014
If tag is not found.</li>
</ul>
`,raiseType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> or <a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"
>RevisionNotFoundError</a></p>
`}}),qa=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3086",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Jt=new se({props:{$$slots:{default:[eb]},$$scope:{ctx:S}}}),Ia=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L659"}}),Na=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2557"}}),Xt=new se({props:{$$slots:{default:[tb]},$$scope:{ctx:S}}}),ja=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2441",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Fa=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L651"}}),Ta=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2479",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),eo=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[ob]},$$scope:{ctx:S}}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[ab]},$$scope:{ctx:S}}}),Pa=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3143",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),oo=new se({props:{warning:!0,$$slots:{default:[nb]},$$scope:{ctx:S}}}),ao=new se({props:{$$slots:{default:[sb]},$$scope:{ctx:S}}}),Oa=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
and the <code>cardData</code>.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_datasets.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L885",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[DatasetInfo]</code></p>
`}}),no=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[rb]},$$scope:{ctx:S}}}),so=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[ib]},$$scope:{ctx:S}}}),Ra=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1056",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),La=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
in <code>full</code> due to its size.`,name:"fetch_config"},{anchor:"huggingface_hub.HfApi.list_models.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L669",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[ModelInfo]</code></p>
`}}),io=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[lb]},$$scope:{ctx:S}}}),lo=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[cb]},$$scope:{ctx:S}}}),Ca=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1427",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Sa=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
and the <code>cardData</code>.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_spaces.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1069",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Ma=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3033",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),go=new se({props:{$$slots:{default:[pb]},$$scope:{ctx:S}}}),Ua=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1157",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),ho=new se({props:{$$slots:{default:[gb]},$$scope:{ctx:S}}}),Va=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1657"}}),uo=new se({props:{$$slots:{default:[hb]},$$scope:{ctx:S}}}),Ga=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2891",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),fo=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[db]},$$scope:{ctx:S}}}),mo=new se({props:{$$slots:{default:[ub]},$$scope:{ctx:S}}}),Ba=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1362",returnDescription:`
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
`}}),_o=new se({props:{$$slots:{default:[fb]},$$scope:{ctx:S}}}),Ka=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L618"}}),Ja=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1297",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),vo=new se({props:{$$slots:{default:[mb]},$$scope:{ctx:S}}}),Qa=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L637"}}),Xa=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1597",returnDescription:`
<p>The HTTP response in json.</p>
`}}),yo=new se({props:{$$slots:{default:[_b]},$$scope:{ctx:S}}}),Ya=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1935",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Eo=new se({props:{$$slots:{default:[bb]},$$scope:{ctx:S}}}),wo=new se({props:{warning:!0,$$slots:{default:[vb]},$$scope:{ctx:S}}}),ko=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[$b]},$$scope:{ctx:S}}}),Za=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2084",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ao=new se({props:{$$slots:{default:[yb]},$$scope:{ctx:S}}}),xo=new se({props:{warning:!0,$$slots:{default:[Eb]},$$scope:{ctx:S}}}),Do=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[wb]},$$scope:{ctx:S}}}),on=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L574"}}),an=new ye({}),nn=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L257"}}),sn=new ye({}),rn=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L330"}}),ln=new ye({}),cn=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L404"}}),pn=new ye({}),gn=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L211"}}),hn=new ye({}),dn=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L156"}}),fn=new ye({}),mn=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L51"}}),_n=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L123"}}),Oo=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[kb]},$$scope:{ctx:S}}}),yn=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L158"}}),En=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L73"}}),An=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L36"}}),xn=new ye({}),Hn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),qn=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),In=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),jn=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),Fn=new ye({}),Tn=new ye({}),Pn=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"languages",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),zo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Ab]},$$scope:{ctx:S}}}),On=new ye({}),Rn=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Go=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[xb]},$$scope:{ctx:S}}}),Ln=new ye({}),Cn=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L529"}}),Ko=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Db]},$$scope:{ctx:S}}}),Sn=new ye({}),Mn=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L491"}}),Qo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Hb]},$$scope:{ctx:S}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=g(),_=a("p"),F=r("All methods from the "),M=a("code"),W=r("HfApi"),L=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),U=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),ne=a("p"),Je=r("Using the "),de=a("a"),gt=r("HfApi"),Qe=r(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),we=a("code"),ht=r("huggingface-cli login"),dt=r(" or "),ut=a("a"),es=r("login()"),la=r(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),ca=g(),D(Le.$$.fragment),pa=g(),ft=a("h3"),Tt=a("a"),Ns=a("span"),D(ga.$$.fragment),mc=g(),js=a("span"),_c=r("HfApi"),Yi=g(),V=a("div"),D(ha.$$.fragment),bc=g(),ke=a("div"),D(da.$$.fragment),vc=g(),Fs=a("p"),$c=r("Closes or re-opens a Discussion or Pull Request."),yc=g(),D(Pt.$$.fragment),Ec=g(),D(Ot.$$.fragment),wc=g(),Ae=a("div"),D(ua.$$.fragment),kc=g(),Ts=a("p"),Ac=r("Creates a new comment on the given Discussion."),xc=g(),D(Rt.$$.fragment),Dc=g(),D(Lt.$$.fragment),Hc=g(),xe=a("div"),D(fa.$$.fragment),qc=g(),Ps=a("p"),Ic=r("Creates a commit in the given repo, deleting & uploading files as needed."),Nc=g(),D(Ct.$$.fragment),jc=g(),D(St.$$.fragment),Fc=g(),le=a("div"),D(ma.$$.fragment),Tc=g(),Os=a("p"),Pc=r("Creates a Discussion or Pull Request."),Oc=g(),_a=a("p"),Rc=r("Pull Requests created programmatically will be in "),Rs=a("code"),Lc=r('"draft"'),Cc=r(" status."),Sc=g(),ba=a("p"),Mc=r("Creating a Pull Request with changes can also be done at once with "),ts=a("a"),Uc=r("HfApi.create_commit()"),Vc=r("."),zc=g(),os=a("p"),Wc=r("Returns: "),as=a("a"),Gc=r("DiscussionWithDetails"),Bc=g(),D(Mt.$$.fragment),Kc=g(),ce=a("div"),D(va.$$.fragment),Jc=g(),$a=a("p"),Qc=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Ls=a("code"),Xc=r('"draft"'),Yc=r(" status."),Zc=g(),ya=a("p"),ep=r("Creating a Pull Request with changes can also be done at once with "),ns=a("a"),tp=r("HfApi.create_commit()"),op=r(";"),ap=g(),Ea=a("p"),np=r("This is a wrapper around "),Cs=a("code"),sp=r("HfApi.create_discusssion"),rp=r("."),ip=g(),ss=a("p"),lp=r("Returns: "),rs=a("a"),cp=r("DiscussionWithDetails"),pp=g(),D(Ut.$$.fragment),gp=g(),Vt=a("div"),D(wa.$$.fragment),hp=g(),Ss=a("p"),dp=r("Create an empty repo on the HuggingFace Hub."),up=g(),zt=a("div"),D(ka.$$.fragment),fp=g(),Ms=a("p"),mp=r("Tag a given commit of a repo on the Hub."),_p=g(),De=a("div"),D(Aa.$$.fragment),bp=g(),Us=a("p"),vp=r("Get info on one specific dataset on huggingface.co."),$p=g(),Vs=a("p"),yp=r("Dataset can be private if you pass an acceptable token."),Ep=g(),D(Wt.$$.fragment),wp=g(),Xe=a("div"),D(xa.$$.fragment),kp=g(),zs=a("p"),Ap=r("Deletes a file in the given repo."),xp=g(),D(Gt.$$.fragment),Dp=g(),Ye=a("div"),D(Da.$$.fragment),Hp=g(),Ws=a("p"),qp=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ip=g(),D(Bt.$$.fragment),Np=g(),Kt=a("div"),D(Ha.$$.fragment),jp=g(),Gs=a("p"),Fp=r("Delete a tag from a repo on the Hub."),Tp=g(),Ze=a("div"),D(qa.$$.fragment),Pp=g(),Bs=a("p"),Op=r("Edits a comment on a Discussion / Pull Request."),Rp=g(),D(Jt.$$.fragment),Lp=g(),Qt=a("div"),D(Ia.$$.fragment),Cp=g(),Ks=a("p"),Sp=r("Gets all valid dataset tags as a nested namespace object."),Mp=g(),He=a("div"),D(Na.$$.fragment),Up=g(),Js=a("p"),Vp=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),zp=g(),is=a("p"),Wp=r("Returns: "),ls=a("a"),Gp=r("DiscussionWithDetails"),Bp=g(),D(Xt.$$.fragment),Kp=g(),Yt=a("div"),D(ja.$$.fragment),Jp=g(),Qs=a("p"),Qp=r(`Returns the repository name for a given model ID and optional
organization.`),Xp=g(),Zt=a("div"),D(Fa.$$.fragment),Yp=g(),Xs=a("p"),Zp=r("Gets all valid model tags as a nested namespace object"),eg=g(),be=a("div"),D(Ta.$$.fragment),tg=g(),Ys=a("p"),og=r("Fetches Discussions and Pull Requests for the given repo."),ag=g(),Zs=a("p"),ng=r("Example:"),sg=g(),D(eo.$$.fragment),rg=g(),D(to.$$.fragment),ig=g(),qe=a("div"),D(Pa.$$.fragment),lg=g(),er=a("p"),cg=r("Hides a comment on a Discussion / Pull Request."),pg=g(),D(oo.$$.fragment),gg=g(),D(ao.$$.fragment),hg=g(),Ie=a("div"),D(Oa.$$.fragment),dg=g(),tr=a("p"),ug=r("Get the list of all the datasets on huggingface.co"),fg=g(),D(no.$$.fragment),mg=g(),D(so.$$.fragment),_g=g(),ro=a("div"),D(Ra.$$.fragment),bg=g(),or=a("p"),vg=r("Get the public list of all the metrics on huggingface.co"),$g=g(),Ne=a("div"),D(La.$$.fragment),yg=g(),ar=a("p"),Eg=r("Get the list of all the models on huggingface.co"),wg=g(),D(io.$$.fragment),kg=g(),D(lo.$$.fragment),Ag=g(),co=a("div"),D(Ca.$$.fragment),xg=g(),nr=a("p"),Dg=r("Get the list of files in a given repo."),Hg=g(),po=a("div"),D(Sa.$$.fragment),qg=g(),sr=a("p"),Ig=r("Get the public list of all Spaces on huggingface.co"),Ng=g(),et=a("div"),D(Ma.$$.fragment),jg=g(),rr=a("p"),Fg=r("Merges a Pull Request."),Tg=g(),D(go.$$.fragment),Pg=g(),je=a("div"),D(Ua.$$.fragment),Og=g(),ir=a("p"),Rg=r("Get info on one specific model on huggingface.co"),Lg=g(),lr=a("p"),Cg=r("Model can be private if you pass an acceptable token or are logged in."),Sg=g(),D(ho.$$.fragment),Mg=g(),Fe=a("div"),D(Va.$$.fragment),Ug=g(),cr=a("p"),Vg=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),zg=g(),za=a("p"),Wg=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),Wa=a("a"),Gg=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Bg=r("."),Kg=g(),D(uo.$$.fragment),Jg=g(),Te=a("div"),D(Ga.$$.fragment),Qg=g(),pr=a("p"),Xg=r("Renames a Discussion."),Yg=g(),D(fo.$$.fragment),Zg=g(),D(mo.$$.fragment),eh=g(),tt=a("div"),D(Ba.$$.fragment),th=g(),gr=a("p"),oh=r("Get the info object for a given repo of a given type."),ah=g(),D(_o.$$.fragment),nh=g(),bo=a("div"),D(Ka.$$.fragment),sh=g(),hr=a("p"),rh=r(`Saves the passed access token so git can correctly authenticate the
user.`),ih=g(),Pe=a("div"),D(Ja.$$.fragment),lh=g(),dr=a("p"),ch=r("Get info on one specific Space on huggingface.co."),ph=g(),ur=a("p"),gh=r("Space can be private if you pass an acceptable token."),hh=g(),D(vo.$$.fragment),dh=g(),$o=a("div"),D(Qa.$$.fragment),uh=g(),fr=a("p"),fh=r("Resets the user\u2019s access token."),mh=g(),ot=a("div"),D(Xa.$$.fragment),_h=g(),mr=a("p"),bh=r("Update the visibility setting of a repository."),vh=g(),D(yo.$$.fragment),$h=g(),ve=a("div"),D(Ya.$$.fragment),yh=g(),_r=a("p"),Eh=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),wh=g(),D(Eo.$$.fragment),kh=g(),D(wo.$$.fragment),Ah=g(),D(ko.$$.fragment),xh=g(),re=a("div"),D(Za.$$.fragment),Dh=g(),br=a("p"),Hh=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),qh=g(),vr=a("p"),Ih=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Nh=g(),ue=a("p"),jh=r("Use the "),$r=a("code"),Fh=r("allow_patterns"),Th=r(" and "),yr=a("code"),Ph=r("ignore_patterns"),Oh=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),en=a("a"),Rh=r("here"),Lh=r(`. If both
`),Er=a("code"),Ch=r("allow_patterns"),Sh=r(" and "),wr=a("code"),Mh=r("ignore_patterns"),Uh=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Vh=g(),tn=a("p"),zh=r("Uses "),kr=a("code"),Wh=r("HfApi.create_commit"),Gh=r(" under the hood."),Bh=g(),D(Ao.$$.fragment),Kh=g(),D(xo.$$.fragment),Jh=g(),D(Do.$$.fragment),Qh=g(),Ho=a("div"),D(on.$$.fragment),Xh=g(),Ar=a("p"),Yh=r("Call HF API to know \u201Cwhoami\u201D."),Zi=g(),mt=a("h3"),qo=a("a"),xr=a("span"),D(an.$$.fragment),Zh=g(),Dr=a("span"),ed=r("ModelInfo"),el=g(),_t=a("div"),D(nn.$$.fragment),td=g(),Hr=a("p"),od=r("Info about a model accessible from huggingface.co"),tl=g(),bt=a("h3"),Io=a("a"),qr=a("span"),D(sn.$$.fragment),ad=g(),Ir=a("span"),nd=r("DatasetInfo"),ol=g(),vt=a("div"),D(rn.$$.fragment),sd=g(),Nr=a("p"),rd=r("Info about a dataset accessible from huggingface.co"),al=g(),$t=a("h3"),No=a("a"),jr=a("span"),D(ln.$$.fragment),id=g(),Fr=a("span"),ld=r("SpaceInfo"),nl=g(),Ce=a("div"),D(cn.$$.fragment),cd=g(),Tr=a("p"),pd=r("Info about a Space accessible from huggingface.co"),gd=g(),Pr=a("p"),hd=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),sl=g(),yt=a("h3"),jo=a("a"),Or=a("span"),D(pn.$$.fragment),dd=g(),Rr=a("span"),ud=r("RepoFile"),rl=g(),Et=a("div"),D(gn.$$.fragment),fd=g(),Lr=a("p"),md=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),il=g(),wt=a("h3"),Fo=a("a"),Cr=a("span"),D(hn.$$.fragment),_d=g(),Sr=a("span"),bd=r("CommitInfo"),ll=g(),Se=a("div"),D(dn.$$.fragment),vd=g(),Mr=a("p"),$d=r("Data structure containing information about a newly created commit."),yd=g(),un=a("p"),Ed=r("Returned by "),cs=a("a"),wd=r("create_commit()"),kd=r("."),cl=g(),kt=a("h2"),To=a("a"),Ur=a("span"),D(fn.$$.fragment),Ad=g(),ps=a("span"),Vr=a("code"),xd=r("create_commit"),Dd=r(" API"),pl=g(),Po=a("p"),Hd=r("Below are the supported values for "),zr=a("code"),qd=r("CommitOperation()"),Id=r(":"),gl=g(),fe=a("div"),D(mn.$$.fragment),Nd=g(),Wr=a("p"),jd=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),Fd=g(),$e=a("div"),D(_n.$$.fragment),Td=g(),bn=a("p"),Pd=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Gr=a("code"),Od=r("path_or_fileobj"),Rd=r("."),Ld=g(),vn=a("p"),Cd=r("Triggers "),Br=a("code"),Sd=r("self.validate"),Md=r("."),Ud=g(),$n=a("p"),Vd=r("Raises: "),Kr=a("code"),zd=r("ValueError"),Wd=r(" if self.validate fails"),Gd=g(),D(Oo.$$.fragment),Bd=g(),at=a("div"),D(yn.$$.fragment),Kd=g(),gs=a("p"),Jd=r("The base64-encoded content of "),Jr=a("code"),Qd=r("path_or_fileobj"),Xd=g(),hs=a("p"),Yd=r("Returns: "),Qr=a("code"),Zd=r("bytes"),eu=g(),Oe=a("div"),D(En.$$.fragment),tu=g(),wn=a("p"),ou=r("Ensures "),Xr=a("code"),au=r("path_or_fileobj"),nu=r(" is valid:"),su=g(),At=a("ul"),nt=a("li"),ru=r("Ensures it is either a "),Yr=a("code"),iu=r("str"),lu=r(", "),Zr=a("code"),cu=r("bytes"),pu=r(" or an instance of "),ei=a("code"),gu=r("io.BufferedIOBase"),hu=g(),kn=a("li"),du=r("If it is a "),ti=a("code"),uu=r("str"),fu=r(", ensure that it is a file path and that the file exists"),mu=g(),st=a("li"),_u=r("If it is an instance of "),oi=a("code"),bu=r("io.BufferedIOBase"),vu=r(", ensures it supports "),ai=a("code"),$u=r("seek()"),yu=r(" and "),ni=a("code"),Eu=r("tell()"),wu=g(),xt=a("p"),ku=r("Raises: "),si=a("code"),Au=r("ValueError"),xu=r(" if "),ri=a("code"),Du=r("path_or_fileobj"),Hu=r(" is not valid"),hl=g(),Dt=a("div"),D(An.$$.fragment),qu=g(),ii=a("p"),Iu=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),dl=g(),Ht=a("h2"),Ro=a("a"),li=a("span"),D(xn.$$.fragment),Nu=g(),ci=a("span"),ju=r("Hugging Face local storage"),ul=g(),Dn=a("p"),pi=a("code"),Fu=r("huggingface_hub"),Tu=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),fl=g(),Lo=a("p"),Pu=r("It does this using the "),ds=a("a"),Ou=r("HfFolder"),Ru=r(" utility, which saves data at the root of the user."),ml=g(),Ee=a("div"),D(Hn.$$.fragment),Lu=g(),Co=a("div"),D(qn.$$.fragment),Cu=g(),gi=a("p"),Su=r("Deletes the token from storage. Does not fail if token does not exist."),Mu=g(),rt=a("div"),D(In.$$.fragment),Uu=g(),hi=a("p"),Vu=r("Get token or None if not existent."),zu=g(),Nn=a("p"),Wu=r(`Note that a token can be also provided using the
`),di=a("code"),Gu=r("HUGGING_FACE_HUB_TOKEN"),Bu=r(" environment variable."),Ku=g(),So=a("div"),D(jn.$$.fragment),Ju=g(),ui=a("p"),Qu=r("Save token, creating folder as needed."),_l=g(),qt=a("h2"),Mo=a("a"),fi=a("span"),D(Fn.$$.fragment),Xu=g(),mi=a("span"),Yu=r("Filtering helpers"),bl=g(),Uo=a("p"),Zu=r("Some helpers to filter repositories on the Hub are available in the "),_i=a("code"),ef=r("huggingface_hub"),tf=r(" package."),vl=g(),It=a("h3"),Vo=a("a"),bi=a("span"),D(Tn.$$.fragment),of=g(),vi=a("span"),af=r("DatasetFilter"),$l=g(),Me=a("div"),D(Pn.$$.fragment),nf=g(),$i=a("p"),sf=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),rf=g(),D(zo.$$.fragment),yl=g(),Nt=a("h3"),Wo=a("a"),yi=a("span"),D(On.$$.fragment),lf=g(),Ei=a("span"),cf=r("ModelFilter"),El=g(),Ue=a("div"),D(Rn.$$.fragment),pf=g(),wi=a("p"),gf=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),hf=g(),D(Go.$$.fragment),wl=g(),jt=a("h3"),Bo=a("a"),ki=a("span"),D(Ln.$$.fragment),df=g(),Ai=a("span"),uf=r("DatasetSearchArguments"),kl=g(),Ve=a("div"),D(Cn.$$.fragment),ff=g(),xi=a("p"),mf=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),_f=g(),D(Ko.$$.fragment),Al=g(),Ft=a("h3"),Jo=a("a"),Di=a("span"),D(Sn.$$.fragment),bf=g(),Hi=a("span"),vf=r("ModelSearchArguments"),xl=g(),ze=a("div"),D(Mn.$$.fragment),$f=g(),qi=a("p"),yf=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ef=g(),D(Qo.$$.fragment),this.h()},l(o){const E=M_('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Un=s(f);c=n(Un,"A",{id:!0,class:!0,href:!0});var Ii=s(c);d=n(Ii,"SPAN",{});var Ni=s(d);H(l.$$.fragment,Ni),Ni.forEach(t),Ii.forEach(t),u=h(Un),P=n(Un,"SPAN",{});var ji=s(P);v=i(ji,"Hugging Face Hub API"),ji.forEach(t),Un.forEach(t),x=h(o),w=n(o,"P",{});var Vn=s(w);y=i(Vn,"Below is the documentation for the "),k=n(Vn,"CODE",{});var Fi=s(k);O=i(Fi,"HfApi"),Fi.forEach(t),T=i(Vn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Vn.forEach(t),R=h(o),_=n(o,"P",{});var zn=s(_);F=i(zn,"All methods from the "),M=n(zn,"CODE",{});var Ti=s(M);W=i(Ti,"HfApi"),Ti.forEach(t),L=i(zn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),zn.forEach(t),K=h(o),G=n(o,"P",{});var Pi=s(G);A=i(Pi,"The following approach uses the method from the root of the package:"),Pi.forEach(t),U=h(o),H(C.$$.fragment,o),Y=h(o),te=n(o,"P",{});var Wn=s(te);Z=i(Wn,"The following approach uses the "),J=n(Wn,"CODE",{});var Oi=s(J);ee=i(Oi,"HfApi"),Oi.forEach(t),ae=i(Wn," class:"),Wn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var We=s(ne);Je=i(We,"Using the "),de=n(We,"A",{href:!0});var Ri=s(de);gt=i(Ri,"HfApi"),Ri.forEach(t),Qe=i(We,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),we=n(We,"CODE",{});var Li=s(we);ht=i(Li,"huggingface-cli login"),Li.forEach(t),dt=i(We," or "),ut=n(We,"A",{href:!0});var Ci=s(ut);es=i(Ci,"login()"),Ci.forEach(t),la=i(We,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),We.forEach(t),ca=h(o),H(Le.$$.fragment,o),pa=h(o),ft=n(o,"H3",{class:!0});var Gn=s(ft);Tt=n(Gn,"A",{id:!0,class:!0,href:!0});var Si=s(Tt);Ns=n(Si,"SPAN",{});var Mi=s(Ns);H(ga.$$.fragment,Mi),Mi.forEach(t),Si.forEach(t),mc=h(Gn),js=n(Gn,"SPAN",{});var Ui=s(js);_c=i(Ui,"HfApi"),Ui.forEach(t),Gn.forEach(t),Yi=h(o),V=n(o,"DIV",{class:!0});var z=s(V);H(ha.$$.fragment,z),bc=h(z),ke=n(z,"DIV",{class:!0});var Ge=s(ke);H(da.$$.fragment,Ge),vc=h(Ge),Fs=n(Ge,"P",{});var Vi=s(Fs);$c=i(Vi,"Closes or re-opens a Discussion or Pull Request."),Vi.forEach(t),yc=h(Ge),H(Pt.$$.fragment,Ge),Ec=h(Ge),H(Ot.$$.fragment,Ge),Ge.forEach(t),wc=h(z),Ae=n(z,"DIV",{class:!0});var Be=s(Ae);H(ua.$$.fragment,Be),kc=h(Be),Ts=n(Be,"P",{});var zi=s(Ts);Ac=i(zi,"Creates a new comment on the given Discussion."),zi.forEach(t),xc=h(Be),H(Rt.$$.fragment,Be),Dc=h(Be),H(Lt.$$.fragment,Be),Be.forEach(t),Hc=h(z),xe=n(z,"DIV",{class:!0});var Ke=s(xe);H(fa.$$.fragment,Ke),qc=h(Ke),Ps=n(Ke,"P",{});var Wi=s(Ps);Ic=i(Wi,"Creates a commit in the given repo, deleting & uploading files as needed."),Wi.forEach(t),Nc=h(Ke),H(Ct.$$.fragment,Ke),jc=h(Ke),H(St.$$.fragment,Ke),Ke.forEach(t),Fc=h(z),le=n(z,"DIV",{class:!0});var me=s(le);H(ma.$$.fragment,me),Tc=h(me),Os=n(me,"P",{});var Gi=s(Os);Pc=i(Gi,"Creates a Discussion or Pull Request."),Gi.forEach(t),Oc=h(me),_a=n(me,"P",{});var Bn=s(_a);Rc=i(Bn,"Pull Requests created programmatically will be in "),Rs=n(Bn,"CODE",{});var Bi=s(Rs);Lc=i(Bi,'"draft"'),Bi.forEach(t),Cc=i(Bn," status."),Bn.forEach(t),Sc=h(me),ba=n(me,"P",{});var Kn=s(ba);Mc=i(Kn,"Creating a Pull Request with changes can also be done at once with "),ts=n(Kn,"A",{href:!0});var Ki=s(ts);Uc=i(Ki,"HfApi.create_commit()"),Ki.forEach(t),Vc=i(Kn,"."),Kn.forEach(t),zc=h(me),os=n(me,"P",{});var us=s(os);Wc=i(us,"Returns: "),as=n(us,"A",{href:!0});var Ji=s(as);Gc=i(Ji,"DiscussionWithDetails"),Ji.forEach(t),us.forEach(t),Bc=h(me),H(Mt.$$.fragment,me),me.forEach(t),Kc=h(z),ce=n(z,"DIV",{class:!0});var _e=s(ce);H(va.$$.fragment,_e),Jc=h(_e),$a=n(_e,"P",{});var Jn=s($a);Qc=i(Jn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Ls=n(Jn,"CODE",{});var Qi=s(Ls);Xc=i(Qi,'"draft"'),Qi.forEach(t),Yc=i(Jn," status."),Jn.forEach(t),Zc=h(_e),ya=n(_e,"P",{});var Qn=s(ya);ep=i(Qn,"Creating a Pull Request with changes can also be done at once with "),ns=n(Qn,"A",{href:!0});var Xi=s(ns);tp=i(Xi,"HfApi.create_commit()"),Xi.forEach(t),op=i(Qn,";"),Qn.forEach(t),ap=h(_e),Ea=n(_e,"P",{});var Xn=s(Ea);np=i(Xn,"This is a wrapper around "),Cs=n(Xn,"CODE",{});var qf=s(Cs);sp=i(qf,"HfApi.create_discusssion"),qf.forEach(t),rp=i(Xn,"."),Xn.forEach(t),ip=h(_e),ss=n(_e,"P",{});var wf=s(ss);lp=i(wf,"Returns: "),rs=n(wf,"A",{href:!0});var If=s(rs);cp=i(If,"DiscussionWithDetails"),If.forEach(t),wf.forEach(t),pp=h(_e),H(Ut.$$.fragment,_e),_e.forEach(t),gp=h(z),Vt=n(z,"DIV",{class:!0});var Hl=s(Vt);H(wa.$$.fragment,Hl),hp=h(Hl),Ss=n(Hl,"P",{});var Nf=s(Ss);dp=i(Nf,"Create an empty repo on the HuggingFace Hub."),Nf.forEach(t),Hl.forEach(t),up=h(z),zt=n(z,"DIV",{class:!0});var ql=s(zt);H(ka.$$.fragment,ql),fp=h(ql),Ms=n(ql,"P",{});var jf=s(Ms);mp=i(jf,"Tag a given commit of a repo on the Hub."),jf.forEach(t),ql.forEach(t),_p=h(z),De=n(z,"DIV",{class:!0});var Xo=s(De);H(Aa.$$.fragment,Xo),bp=h(Xo),Us=n(Xo,"P",{});var Ff=s(Us);vp=i(Ff,"Get info on one specific dataset on huggingface.co."),Ff.forEach(t),$p=h(Xo),Vs=n(Xo,"P",{});var Tf=s(Vs);yp=i(Tf,"Dataset can be private if you pass an acceptable token."),Tf.forEach(t),Ep=h(Xo),H(Wt.$$.fragment,Xo),Xo.forEach(t),wp=h(z),Xe=n(z,"DIV",{class:!0});var fs=s(Xe);H(xa.$$.fragment,fs),kp=h(fs),zs=n(fs,"P",{});var Pf=s(zs);Ap=i(Pf,"Deletes a file in the given repo."),Pf.forEach(t),xp=h(fs),H(Gt.$$.fragment,fs),fs.forEach(t),Dp=h(z),Ye=n(z,"DIV",{class:!0});var ms=s(Ye);H(Da.$$.fragment,ms),Hp=h(ms),Ws=n(ms,"P",{});var Of=s(Ws);qp=i(Of,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Of.forEach(t),Ip=h(ms),H(Bt.$$.fragment,ms),ms.forEach(t),Np=h(z),Kt=n(z,"DIV",{class:!0});var Il=s(Kt);H(Ha.$$.fragment,Il),jp=h(Il),Gs=n(Il,"P",{});var Rf=s(Gs);Fp=i(Rf,"Delete a tag from a repo on the Hub."),Rf.forEach(t),Il.forEach(t),Tp=h(z),Ze=n(z,"DIV",{class:!0});var _s=s(Ze);H(qa.$$.fragment,_s),Pp=h(_s),Bs=n(_s,"P",{});var Lf=s(Bs);Op=i(Lf,"Edits a comment on a Discussion / Pull Request."),Lf.forEach(t),Rp=h(_s),H(Jt.$$.fragment,_s),_s.forEach(t),Lp=h(z),Qt=n(z,"DIV",{class:!0});var Nl=s(Qt);H(Ia.$$.fragment,Nl),Cp=h(Nl),Ks=n(Nl,"P",{});var Cf=s(Ks);Sp=i(Cf,"Gets all valid dataset tags as a nested namespace object."),Cf.forEach(t),Nl.forEach(t),Mp=h(z),He=n(z,"DIV",{class:!0});var Yo=s(He);H(Na.$$.fragment,Yo),Up=h(Yo),Js=n(Yo,"P",{});var Sf=s(Js);Vp=i(Sf,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Sf.forEach(t),zp=h(Yo),is=n(Yo,"P",{});var kf=s(is);Wp=i(kf,"Returns: "),ls=n(kf,"A",{href:!0});var Mf=s(ls);Gp=i(Mf,"DiscussionWithDetails"),Mf.forEach(t),kf.forEach(t),Bp=h(Yo),H(Xt.$$.fragment,Yo),Yo.forEach(t),Kp=h(z),Yt=n(z,"DIV",{class:!0});var jl=s(Yt);H(ja.$$.fragment,jl),Jp=h(jl),Qs=n(jl,"P",{});var Uf=s(Qs);Qp=i(Uf,`Returns the repository name for a given model ID and optional
organization.`),Uf.forEach(t),jl.forEach(t),Xp=h(z),Zt=n(z,"DIV",{class:!0});var Fl=s(Zt);H(Fa.$$.fragment,Fl),Yp=h(Fl),Xs=n(Fl,"P",{});var Vf=s(Xs);Zp=i(Vf,"Gets all valid model tags as a nested namespace object"),Vf.forEach(t),Fl.forEach(t),eg=h(z),be=n(z,"DIV",{class:!0});var it=s(be);H(Ta.$$.fragment,it),tg=h(it),Ys=n(it,"P",{});var zf=s(Ys);og=i(zf,"Fetches Discussions and Pull Requests for the given repo."),zf.forEach(t),ag=h(it),Zs=n(it,"P",{});var Wf=s(Zs);ng=i(Wf,"Example:"),Wf.forEach(t),sg=h(it),H(eo.$$.fragment,it),rg=h(it),H(to.$$.fragment,it),it.forEach(t),ig=h(z),qe=n(z,"DIV",{class:!0});var Zo=s(qe);H(Pa.$$.fragment,Zo),lg=h(Zo),er=n(Zo,"P",{});var Gf=s(er);cg=i(Gf,"Hides a comment on a Discussion / Pull Request."),Gf.forEach(t),pg=h(Zo),H(oo.$$.fragment,Zo),gg=h(Zo),H(ao.$$.fragment,Zo),Zo.forEach(t),hg=h(z),Ie=n(z,"DIV",{class:!0});var ea=s(Ie);H(Oa.$$.fragment,ea),dg=h(ea),tr=n(ea,"P",{});var Bf=s(tr);ug=i(Bf,"Get the list of all the datasets on huggingface.co"),Bf.forEach(t),fg=h(ea),H(no.$$.fragment,ea),mg=h(ea),H(so.$$.fragment,ea),ea.forEach(t),_g=h(z),ro=n(z,"DIV",{class:!0});var Tl=s(ro);H(Ra.$$.fragment,Tl),bg=h(Tl),or=n(Tl,"P",{});var Kf=s(or);vg=i(Kf,"Get the public list of all the metrics on huggingface.co"),Kf.forEach(t),Tl.forEach(t),$g=h(z),Ne=n(z,"DIV",{class:!0});var ta=s(Ne);H(La.$$.fragment,ta),yg=h(ta),ar=n(ta,"P",{});var Jf=s(ar);Eg=i(Jf,"Get the list of all the models on huggingface.co"),Jf.forEach(t),wg=h(ta),H(io.$$.fragment,ta),kg=h(ta),H(lo.$$.fragment,ta),ta.forEach(t),Ag=h(z),co=n(z,"DIV",{class:!0});var Pl=s(co);H(Ca.$$.fragment,Pl),xg=h(Pl),nr=n(Pl,"P",{});var Qf=s(nr);Dg=i(Qf,"Get the list of files in a given repo."),Qf.forEach(t),Pl.forEach(t),Hg=h(z),po=n(z,"DIV",{class:!0});var Ol=s(po);H(Sa.$$.fragment,Ol),qg=h(Ol),sr=n(Ol,"P",{});var Xf=s(sr);Ig=i(Xf,"Get the public list of all Spaces on huggingface.co"),Xf.forEach(t),Ol.forEach(t),Ng=h(z),et=n(z,"DIV",{class:!0});var bs=s(et);H(Ma.$$.fragment,bs),jg=h(bs),rr=n(bs,"P",{});var Yf=s(rr);Fg=i(Yf,"Merges a Pull Request."),Yf.forEach(t),Tg=h(bs),H(go.$$.fragment,bs),bs.forEach(t),Pg=h(z),je=n(z,"DIV",{class:!0});var oa=s(je);H(Ua.$$.fragment,oa),Og=h(oa),ir=n(oa,"P",{});var Zf=s(ir);Rg=i(Zf,"Get info on one specific model on huggingface.co"),Zf.forEach(t),Lg=h(oa),lr=n(oa,"P",{});var em=s(lr);Cg=i(em,"Model can be private if you pass an acceptable token or are logged in."),em.forEach(t),Sg=h(oa),H(ho.$$.fragment,oa),oa.forEach(t),Mg=h(z),Fe=n(z,"DIV",{class:!0});var aa=s(Fe);H(Va.$$.fragment,aa),Ug=h(aa),cr=n(aa,"P",{});var tm=s(cr);Vg=i(tm,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),tm.forEach(t),zg=h(aa),za=n(aa,"P",{});var Rl=s(za);Wg=i(Rl,`Note there are certain limitations. For more information about moving
repositories, please see
`),Wa=n(Rl,"A",{href:!0,rel:!0});var om=s(Wa);Gg=i(om,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),om.forEach(t),Bg=i(Rl,"."),Rl.forEach(t),Kg=h(aa),H(uo.$$.fragment,aa),aa.forEach(t),Jg=h(z),Te=n(z,"DIV",{class:!0});var na=s(Te);H(Ga.$$.fragment,na),Qg=h(na),pr=n(na,"P",{});var am=s(pr);Xg=i(am,"Renames a Discussion."),am.forEach(t),Yg=h(na),H(fo.$$.fragment,na),Zg=h(na),H(mo.$$.fragment,na),na.forEach(t),eh=h(z),tt=n(z,"DIV",{class:!0});var vs=s(tt);H(Ba.$$.fragment,vs),th=h(vs),gr=n(vs,"P",{});var nm=s(gr);oh=i(nm,"Get the info object for a given repo of a given type."),nm.forEach(t),ah=h(vs),H(_o.$$.fragment,vs),vs.forEach(t),nh=h(z),bo=n(z,"DIV",{class:!0});var Ll=s(bo);H(Ka.$$.fragment,Ll),sh=h(Ll),hr=n(Ll,"P",{});var sm=s(hr);rh=i(sm,`Saves the passed access token so git can correctly authenticate the
user.`),sm.forEach(t),Ll.forEach(t),ih=h(z),Pe=n(z,"DIV",{class:!0});var sa=s(Pe);H(Ja.$$.fragment,sa),lh=h(sa),dr=n(sa,"P",{});var rm=s(dr);ch=i(rm,"Get info on one specific Space on huggingface.co."),rm.forEach(t),ph=h(sa),ur=n(sa,"P",{});var im=s(ur);gh=i(im,"Space can be private if you pass an acceptable token."),im.forEach(t),hh=h(sa),H(vo.$$.fragment,sa),sa.forEach(t),dh=h(z),$o=n(z,"DIV",{class:!0});var Cl=s($o);H(Qa.$$.fragment,Cl),uh=h(Cl),fr=n(Cl,"P",{});var lm=s(fr);fh=i(lm,"Resets the user\u2019s access token."),lm.forEach(t),Cl.forEach(t),mh=h(z),ot=n(z,"DIV",{class:!0});var $s=s(ot);H(Xa.$$.fragment,$s),_h=h($s),mr=n($s,"P",{});var cm=s(mr);bh=i(cm,"Update the visibility setting of a repository."),cm.forEach(t),vh=h($s),H(yo.$$.fragment,$s),$s.forEach(t),$h=h(z),ve=n(z,"DIV",{class:!0});var lt=s(ve);H(Ya.$$.fragment,lt),yh=h(lt),_r=n(lt,"P",{});var pm=s(_r);Eh=i(pm,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),pm.forEach(t),wh=h(lt),H(Eo.$$.fragment,lt),kh=h(lt),H(wo.$$.fragment,lt),Ah=h(lt),H(ko.$$.fragment,lt),lt.forEach(t),xh=h(z),re=n(z,"DIV",{class:!0});var pe=s(re);H(Za.$$.fragment,pe),Dh=h(pe),br=n(pe,"P",{});var gm=s(br);Hh=i(gm,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),gm.forEach(t),qh=h(pe),vr=n(pe,"P",{});var hm=s(vr);Ih=i(hm,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),hm.forEach(t),Nh=h(pe),ue=n(pe,"P",{});var Re=s(ue);jh=i(Re,"Use the "),$r=n(Re,"CODE",{});var dm=s($r);Fh=i(dm,"allow_patterns"),dm.forEach(t),Th=i(Re," and "),yr=n(Re,"CODE",{});var um=s(yr);Ph=i(um,"ignore_patterns"),um.forEach(t),Oh=i(Re,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),en=n(Re,"A",{href:!0,rel:!0});var fm=s(en);Rh=i(fm,"here"),fm.forEach(t),Lh=i(Re,`. If both
`),Er=n(Re,"CODE",{});var mm=s(Er);Ch=i(mm,"allow_patterns"),mm.forEach(t),Sh=i(Re," and "),wr=n(Re,"CODE",{});var _m=s(wr);Mh=i(_m,"ignore_patterns"),_m.forEach(t),Uh=i(Re,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Re.forEach(t),Vh=h(pe),tn=n(pe,"P",{});var Sl=s(tn);zh=i(Sl,"Uses "),kr=n(Sl,"CODE",{});var bm=s(kr);Wh=i(bm,"HfApi.create_commit"),bm.forEach(t),Gh=i(Sl," under the hood."),Sl.forEach(t),Bh=h(pe),H(Ao.$$.fragment,pe),Kh=h(pe),H(xo.$$.fragment,pe),Jh=h(pe),H(Do.$$.fragment,pe),pe.forEach(t),Qh=h(z),Ho=n(z,"DIV",{class:!0});var Ml=s(Ho);H(on.$$.fragment,Ml),Xh=h(Ml),Ar=n(Ml,"P",{});var vm=s(Ar);Yh=i(vm,"Call HF API to know \u201Cwhoami\u201D."),vm.forEach(t),Ml.forEach(t),z.forEach(t),Zi=h(o),mt=n(o,"H3",{class:!0});var Ul=s(mt);qo=n(Ul,"A",{id:!0,class:!0,href:!0});var $m=s(qo);xr=n($m,"SPAN",{});var ym=s(xr);H(an.$$.fragment,ym),ym.forEach(t),$m.forEach(t),Zh=h(Ul),Dr=n(Ul,"SPAN",{});var Em=s(Dr);ed=i(Em,"ModelInfo"),Em.forEach(t),Ul.forEach(t),el=h(o),_t=n(o,"DIV",{class:!0});var Vl=s(_t);H(nn.$$.fragment,Vl),td=h(Vl),Hr=n(Vl,"P",{});var wm=s(Hr);od=i(wm,"Info about a model accessible from huggingface.co"),wm.forEach(t),Vl.forEach(t),tl=h(o),bt=n(o,"H3",{class:!0});var zl=s(bt);Io=n(zl,"A",{id:!0,class:!0,href:!0});var km=s(Io);qr=n(km,"SPAN",{});var Am=s(qr);H(sn.$$.fragment,Am),Am.forEach(t),km.forEach(t),ad=h(zl),Ir=n(zl,"SPAN",{});var xm=s(Ir);nd=i(xm,"DatasetInfo"),xm.forEach(t),zl.forEach(t),ol=h(o),vt=n(o,"DIV",{class:!0});var Wl=s(vt);H(rn.$$.fragment,Wl),sd=h(Wl),Nr=n(Wl,"P",{});var Dm=s(Nr);rd=i(Dm,"Info about a dataset accessible from huggingface.co"),Dm.forEach(t),Wl.forEach(t),al=h(o),$t=n(o,"H3",{class:!0});var Gl=s($t);No=n(Gl,"A",{id:!0,class:!0,href:!0});var Hm=s(No);jr=n(Hm,"SPAN",{});var qm=s(jr);H(ln.$$.fragment,qm),qm.forEach(t),Hm.forEach(t),id=h(Gl),Fr=n(Gl,"SPAN",{});var Im=s(Fr);ld=i(Im,"SpaceInfo"),Im.forEach(t),Gl.forEach(t),nl=h(o),Ce=n(o,"DIV",{class:!0});var ys=s(Ce);H(cn.$$.fragment,ys),cd=h(ys),Tr=n(ys,"P",{});var Nm=s(Tr);pd=i(Nm,"Info about a Space accessible from huggingface.co"),Nm.forEach(t),gd=h(ys),Pr=n(ys,"P",{});var jm=s(Pr);hd=i(jm,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),jm.forEach(t),ys.forEach(t),sl=h(o),yt=n(o,"H3",{class:!0});var Bl=s(yt);jo=n(Bl,"A",{id:!0,class:!0,href:!0});var Fm=s(jo);Or=n(Fm,"SPAN",{});var Tm=s(Or);H(pn.$$.fragment,Tm),Tm.forEach(t),Fm.forEach(t),dd=h(Bl),Rr=n(Bl,"SPAN",{});var Pm=s(Rr);ud=i(Pm,"RepoFile"),Pm.forEach(t),Bl.forEach(t),rl=h(o),Et=n(o,"DIV",{class:!0});var Kl=s(Et);H(gn.$$.fragment,Kl),fd=h(Kl),Lr=n(Kl,"P",{});var Om=s(Lr);md=i(Om,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Om.forEach(t),Kl.forEach(t),il=h(o),wt=n(o,"H3",{class:!0});var Jl=s(wt);Fo=n(Jl,"A",{id:!0,class:!0,href:!0});var Rm=s(Fo);Cr=n(Rm,"SPAN",{});var Lm=s(Cr);H(hn.$$.fragment,Lm),Lm.forEach(t),Rm.forEach(t),_d=h(Jl),Sr=n(Jl,"SPAN",{});var Cm=s(Sr);bd=i(Cm,"CommitInfo"),Cm.forEach(t),Jl.forEach(t),ll=h(o),Se=n(o,"DIV",{class:!0});var Es=s(Se);H(dn.$$.fragment,Es),vd=h(Es),Mr=n(Es,"P",{});var Sm=s(Mr);$d=i(Sm,"Data structure containing information about a newly created commit."),Sm.forEach(t),yd=h(Es),un=n(Es,"P",{});var Ql=s(un);Ed=i(Ql,"Returned by "),cs=n(Ql,"A",{href:!0});var Mm=s(cs);wd=i(Mm,"create_commit()"),Mm.forEach(t),kd=i(Ql,"."),Ql.forEach(t),Es.forEach(t),cl=h(o),kt=n(o,"H2",{class:!0});var Xl=s(kt);To=n(Xl,"A",{id:!0,class:!0,href:!0});var Um=s(To);Ur=n(Um,"SPAN",{});var Vm=s(Ur);H(fn.$$.fragment,Vm),Vm.forEach(t),Um.forEach(t),Ad=h(Xl),ps=n(Xl,"SPAN",{});var Af=s(ps);Vr=n(Af,"CODE",{});var zm=s(Vr);xd=i(zm,"create_commit"),zm.forEach(t),Dd=i(Af," API"),Af.forEach(t),Xl.forEach(t),pl=h(o),Po=n(o,"P",{});var Yl=s(Po);Hd=i(Yl,"Below are the supported values for "),zr=n(Yl,"CODE",{});var Wm=s(zr);qd=i(Wm,"CommitOperation()"),Wm.forEach(t),Id=i(Yl,":"),Yl.forEach(t),gl=h(o),fe=n(o,"DIV",{class:!0});var ct=s(fe);H(mn.$$.fragment,ct),Nd=h(ct),Wr=n(ct,"P",{});var Gm=s(Wr);jd=i(Gm,`Data structure holding necessary info to upload a file
to a repository on the Hub`),Gm.forEach(t),Fd=h(ct),$e=n(ct,"DIV",{class:!0});var pt=s($e);H(_n.$$.fragment,pt),Td=h(pt),bn=n(pt,"P",{});var Zl=s(bn);Pd=i(Zl,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Gr=n(Zl,"CODE",{});var Bm=s(Gr);Od=i(Bm,"path_or_fileobj"),Bm.forEach(t),Rd=i(Zl,"."),Zl.forEach(t),Ld=h(pt),vn=n(pt,"P",{});var ec=s(vn);Cd=i(ec,"Triggers "),Br=n(ec,"CODE",{});var Km=s(Br);Sd=i(Km,"self.validate"),Km.forEach(t),Md=i(ec,"."),ec.forEach(t),Ud=h(pt),$n=n(pt,"P",{});var tc=s($n);Vd=i(tc,"Raises: "),Kr=n(tc,"CODE",{});var Jm=s(Kr);zd=i(Jm,"ValueError"),Jm.forEach(t),Wd=i(tc," if self.validate fails"),tc.forEach(t),Gd=h(pt),H(Oo.$$.fragment,pt),pt.forEach(t),Bd=h(ct),at=n(ct,"DIV",{class:!0});var ws=s(at);H(yn.$$.fragment,ws),Kd=h(ws),gs=n(ws,"P",{});var xf=s(gs);Jd=i(xf,"The base64-encoded content of "),Jr=n(xf,"CODE",{});var Qm=s(Jr);Qd=i(Qm,"path_or_fileobj"),Qm.forEach(t),xf.forEach(t),Xd=h(ws),hs=n(ws,"P",{});var Df=s(hs);Yd=i(Df,"Returns: "),Qr=n(Df,"CODE",{});var Xm=s(Qr);Zd=i(Xm,"bytes"),Xm.forEach(t),Df.forEach(t),ws.forEach(t),eu=h(ct),Oe=n(ct,"DIV",{class:!0});var ra=s(Oe);H(En.$$.fragment,ra),tu=h(ra),wn=n(ra,"P",{});var oc=s(wn);ou=i(oc,"Ensures "),Xr=n(oc,"CODE",{});var Ym=s(Xr);au=i(Ym,"path_or_fileobj"),Ym.forEach(t),nu=i(oc," is valid:"),oc.forEach(t),su=h(ra),At=n(ra,"UL",{});var ks=s(At);nt=n(ks,"LI",{});var Yn=s(nt);ru=i(Yn,"Ensures it is either a "),Yr=n(Yn,"CODE",{});var Zm=s(Yr);iu=i(Zm,"str"),Zm.forEach(t),lu=i(Yn,", "),Zr=n(Yn,"CODE",{});var e_=s(Zr);cu=i(e_,"bytes"),e_.forEach(t),pu=i(Yn," or an instance of "),ei=n(Yn,"CODE",{});var t_=s(ei);gu=i(t_,"io.BufferedIOBase"),t_.forEach(t),Yn.forEach(t),hu=h(ks),kn=n(ks,"LI",{});var ac=s(kn);du=i(ac,"If it is a "),ti=n(ac,"CODE",{});var o_=s(ti);uu=i(o_,"str"),o_.forEach(t),fu=i(ac,", ensure that it is a file path and that the file exists"),ac.forEach(t),mu=h(ks),st=n(ks,"LI",{});var Zn=s(st);_u=i(Zn,"If it is an instance of "),oi=n(Zn,"CODE",{});var a_=s(oi);bu=i(a_,"io.BufferedIOBase"),a_.forEach(t),vu=i(Zn,", ensures it supports "),ai=n(Zn,"CODE",{});var n_=s(ai);$u=i(n_,"seek()"),n_.forEach(t),yu=i(Zn," and "),ni=n(Zn,"CODE",{});var s_=s(ni);Eu=i(s_,"tell()"),s_.forEach(t),Zn.forEach(t),ks.forEach(t),wu=h(ra),xt=n(ra,"P",{});var As=s(xt);ku=i(As,"Raises: "),si=n(As,"CODE",{});var r_=s(si);Au=i(r_,"ValueError"),r_.forEach(t),xu=i(As," if "),ri=n(As,"CODE",{});var i_=s(ri);Du=i(i_,"path_or_fileobj"),i_.forEach(t),Hu=i(As," is not valid"),As.forEach(t),ra.forEach(t),ct.forEach(t),hl=h(o),Dt=n(o,"DIV",{class:!0});var nc=s(Dt);H(An.$$.fragment,nc),qu=h(nc),ii=n(nc,"P",{});var l_=s(ii);Iu=i(l_,`Data structure holding necessary info to delete
a file from a repository on the Hub`),l_.forEach(t),nc.forEach(t),dl=h(o),Ht=n(o,"H2",{class:!0});var sc=s(Ht);Ro=n(sc,"A",{id:!0,class:!0,href:!0});var c_=s(Ro);li=n(c_,"SPAN",{});var p_=s(li);H(xn.$$.fragment,p_),p_.forEach(t),c_.forEach(t),Nu=h(sc),ci=n(sc,"SPAN",{});var g_=s(ci);ju=i(g_,"Hugging Face local storage"),g_.forEach(t),sc.forEach(t),ul=h(o),Dn=n(o,"P",{});var Hf=s(Dn);pi=n(Hf,"CODE",{});var h_=s(pi);Fu=i(h_,"huggingface_hub"),h_.forEach(t),Tu=i(Hf,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Hf.forEach(t),fl=h(o),Lo=n(o,"P",{});var rc=s(Lo);Pu=i(rc,"It does this using the "),ds=n(rc,"A",{href:!0});var d_=s(ds);Ou=i(d_,"HfFolder"),d_.forEach(t),Ru=i(rc," utility, which saves data at the root of the user."),rc.forEach(t),ml=h(o),Ee=n(o,"DIV",{class:!0});var ia=s(Ee);H(Hn.$$.fragment,ia),Lu=h(ia),Co=n(ia,"DIV",{class:!0});var ic=s(Co);H(qn.$$.fragment,ic),Cu=h(ic),gi=n(ic,"P",{});var u_=s(gi);Su=i(u_,"Deletes the token from storage. Does not fail if token does not exist."),u_.forEach(t),ic.forEach(t),Mu=h(ia),rt=n(ia,"DIV",{class:!0});var xs=s(rt);H(In.$$.fragment,xs),Uu=h(xs),hi=n(xs,"P",{});var f_=s(hi);Vu=i(f_,"Get token or None if not existent."),f_.forEach(t),zu=h(xs),Nn=n(xs,"P",{});var lc=s(Nn);Wu=i(lc,`Note that a token can be also provided using the
`),di=n(lc,"CODE",{});var m_=s(di);Gu=i(m_,"HUGGING_FACE_HUB_TOKEN"),m_.forEach(t),Bu=i(lc," environment variable."),lc.forEach(t),xs.forEach(t),Ku=h(ia),So=n(ia,"DIV",{class:!0});var cc=s(So);H(jn.$$.fragment,cc),Ju=h(cc),ui=n(cc,"P",{});var __=s(ui);Qu=i(__,"Save token, creating folder as needed."),__.forEach(t),cc.forEach(t),ia.forEach(t),_l=h(o),qt=n(o,"H2",{class:!0});var pc=s(qt);Mo=n(pc,"A",{id:!0,class:!0,href:!0});var b_=s(Mo);fi=n(b_,"SPAN",{});var v_=s(fi);H(Fn.$$.fragment,v_),v_.forEach(t),b_.forEach(t),Xu=h(pc),mi=n(pc,"SPAN",{});var $_=s(mi);Yu=i($_,"Filtering helpers"),$_.forEach(t),pc.forEach(t),bl=h(o),Uo=n(o,"P",{});var gc=s(Uo);Zu=i(gc,"Some helpers to filter repositories on the Hub are available in the "),_i=n(gc,"CODE",{});var y_=s(_i);ef=i(y_,"huggingface_hub"),y_.forEach(t),tf=i(gc," package."),gc.forEach(t),vl=h(o),It=n(o,"H3",{class:!0});var hc=s(It);Vo=n(hc,"A",{id:!0,class:!0,href:!0});var E_=s(Vo);bi=n(E_,"SPAN",{});var w_=s(bi);H(Tn.$$.fragment,w_),w_.forEach(t),E_.forEach(t),of=h(hc),vi=n(hc,"SPAN",{});var k_=s(vi);af=i(k_,"DatasetFilter"),k_.forEach(t),hc.forEach(t),$l=h(o),Me=n(o,"DIV",{class:!0});var Ds=s(Me);H(Pn.$$.fragment,Ds),nf=h(Ds),$i=n(Ds,"P",{});var A_=s($i);sf=i(A_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),A_.forEach(t),rf=h(Ds),H(zo.$$.fragment,Ds),Ds.forEach(t),yl=h(o),Nt=n(o,"H3",{class:!0});var dc=s(Nt);Wo=n(dc,"A",{id:!0,class:!0,href:!0});var x_=s(Wo);yi=n(x_,"SPAN",{});var D_=s(yi);H(On.$$.fragment,D_),D_.forEach(t),x_.forEach(t),lf=h(dc),Ei=n(dc,"SPAN",{});var H_=s(Ei);cf=i(H_,"ModelFilter"),H_.forEach(t),dc.forEach(t),El=h(o),Ue=n(o,"DIV",{class:!0});var Hs=s(Ue);H(Rn.$$.fragment,Hs),pf=h(Hs),wi=n(Hs,"P",{});var q_=s(wi);gf=i(q_,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),q_.forEach(t),hf=h(Hs),H(Go.$$.fragment,Hs),Hs.forEach(t),wl=h(o),jt=n(o,"H3",{class:!0});var uc=s(jt);Bo=n(uc,"A",{id:!0,class:!0,href:!0});var I_=s(Bo);ki=n(I_,"SPAN",{});var N_=s(ki);H(Ln.$$.fragment,N_),N_.forEach(t),I_.forEach(t),df=h(uc),Ai=n(uc,"SPAN",{});var j_=s(Ai);uf=i(j_,"DatasetSearchArguments"),j_.forEach(t),uc.forEach(t),kl=h(o),Ve=n(o,"DIV",{class:!0});var qs=s(Ve);H(Cn.$$.fragment,qs),ff=h(qs),xi=n(qs,"P",{});var F_=s(xi);mf=i(F_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),F_.forEach(t),_f=h(qs),H(Ko.$$.fragment,qs),qs.forEach(t),Al=h(o),Ft=n(o,"H3",{class:!0});var fc=s(Ft);Jo=n(fc,"A",{id:!0,class:!0,href:!0});var T_=s(Jo);Di=n(T_,"SPAN",{});var P_=s(Di);H(Sn.$$.fragment,P_),P_.forEach(t),T_.forEach(t),bf=h(fc),Hi=n(fc,"SPAN",{});var O_=s(Hi);vf=i(O_,"ModelSearchArguments"),O_.forEach(t),fc.forEach(t),xl=h(o),ze=n(o,"DIV",{class:!0});var Is=s(ze);H(Mn.$$.fragment,Is),$f=h(Is),qi=n(Is,"P",{});var R_=s(qi);yf=i(R_,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),R_.forEach(t),Ef=h(Is),H(Qo.$$.fragment,Is),Is.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Ib)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(ut,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Tt,"id","huggingface_hub.HfApi"),m(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Tt,"href","#huggingface_hub.HfApi"),m(ft,"class","relative group"),m(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ts,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(as,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(rs,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ls,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wa,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Wa,"rel","nofollow"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(en,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(en,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"id","huggingface_hub.hf_api.ModelInfo"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#huggingface_hub.hf_api.ModelInfo"),m(mt,"class","relative group"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.hf_api.DatasetInfo"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.hf_api.DatasetInfo"),m(bt,"class","relative group"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","huggingface_hub.hf_api.SpaceInfo"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#huggingface_hub.hf_api.SpaceInfo"),m($t,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","huggingface_hub.hf_api.RepoFile"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#huggingface_hub.hf_api.RepoFile"),m(yt,"class","relative group"),m(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.CommitInfo"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.CommitInfo"),m(wt,"class","relative group"),m(cs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","huggingface_hub.CommitOperationAdd"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#huggingface_hub.CommitOperationAdd"),m(kt,"class","relative group"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"id","huggingface_hub.HfFolder"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#huggingface_hub.HfFolder"),m(Ht,"class","relative group"),m(ds,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"id","filtering-helpers"),m(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Mo,"href","#filtering-helpers"),m(qt,"class","relative group"),m(Vo,"id","huggingface_hub.DatasetFilter"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#huggingface_hub.DatasetFilter"),m(It,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","huggingface_hub.ModelFilter"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#huggingface_hub.ModelFilter"),m(Nt,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bo,"id","huggingface_hub.DatasetSearchArguments"),m(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bo,"href","#huggingface_hub.DatasetSearchArguments"),m(jt,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jo,"id","huggingface_hub.ModelSearchArguments"),m(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Jo,"href","#huggingface_hub.ModelSearchArguments"),m(Ft,"class","relative group"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,d),q(l,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,R,E),$(o,_,E),e(_,F),e(_,M),e(M,W),e(_,L),$(o,K,E),$(o,G,E),e(G,A),$(o,U,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Je),e(ne,de),e(de,gt),e(ne,Qe),e(ne,we),e(we,ht),e(ne,dt),e(ne,ut),e(ut,es),e(ne,la),$(o,ca,E),q(Le,o,E),$(o,pa,E),$(o,ft,E),e(ft,Tt),e(Tt,Ns),q(ga,Ns,null),e(ft,mc),e(ft,js),e(js,_c),$(o,Yi,E),$(o,V,E),q(ha,V,null),e(V,bc),e(V,ke),q(da,ke,null),e(ke,vc),e(ke,Fs),e(Fs,$c),e(ke,yc),q(Pt,ke,null),e(ke,Ec),q(Ot,ke,null),e(V,wc),e(V,Ae),q(ua,Ae,null),e(Ae,kc),e(Ae,Ts),e(Ts,Ac),e(Ae,xc),q(Rt,Ae,null),e(Ae,Dc),q(Lt,Ae,null),e(V,Hc),e(V,xe),q(fa,xe,null),e(xe,qc),e(xe,Ps),e(Ps,Ic),e(xe,Nc),q(Ct,xe,null),e(xe,jc),q(St,xe,null),e(V,Fc),e(V,le),q(ma,le,null),e(le,Tc),e(le,Os),e(Os,Pc),e(le,Oc),e(le,_a),e(_a,Rc),e(_a,Rs),e(Rs,Lc),e(_a,Cc),e(le,Sc),e(le,ba),e(ba,Mc),e(ba,ts),e(ts,Uc),e(ba,Vc),e(le,zc),e(le,os),e(os,Wc),e(os,as),e(as,Gc),e(le,Bc),q(Mt,le,null),e(V,Kc),e(V,ce),q(va,ce,null),e(ce,Jc),e(ce,$a),e($a,Qc),e($a,Ls),e(Ls,Xc),e($a,Yc),e(ce,Zc),e(ce,ya),e(ya,ep),e(ya,ns),e(ns,tp),e(ya,op),e(ce,ap),e(ce,Ea),e(Ea,np),e(Ea,Cs),e(Cs,sp),e(Ea,rp),e(ce,ip),e(ce,ss),e(ss,lp),e(ss,rs),e(rs,cp),e(ce,pp),q(Ut,ce,null),e(V,gp),e(V,Vt),q(wa,Vt,null),e(Vt,hp),e(Vt,Ss),e(Ss,dp),e(V,up),e(V,zt),q(ka,zt,null),e(zt,fp),e(zt,Ms),e(Ms,mp),e(V,_p),e(V,De),q(Aa,De,null),e(De,bp),e(De,Us),e(Us,vp),e(De,$p),e(De,Vs),e(Vs,yp),e(De,Ep),q(Wt,De,null),e(V,wp),e(V,Xe),q(xa,Xe,null),e(Xe,kp),e(Xe,zs),e(zs,Ap),e(Xe,xp),q(Gt,Xe,null),e(V,Dp),e(V,Ye),q(Da,Ye,null),e(Ye,Hp),e(Ye,Ws),e(Ws,qp),e(Ye,Ip),q(Bt,Ye,null),e(V,Np),e(V,Kt),q(Ha,Kt,null),e(Kt,jp),e(Kt,Gs),e(Gs,Fp),e(V,Tp),e(V,Ze),q(qa,Ze,null),e(Ze,Pp),e(Ze,Bs),e(Bs,Op),e(Ze,Rp),q(Jt,Ze,null),e(V,Lp),e(V,Qt),q(Ia,Qt,null),e(Qt,Cp),e(Qt,Ks),e(Ks,Sp),e(V,Mp),e(V,He),q(Na,He,null),e(He,Up),e(He,Js),e(Js,Vp),e(He,zp),e(He,is),e(is,Wp),e(is,ls),e(ls,Gp),e(He,Bp),q(Xt,He,null),e(V,Kp),e(V,Yt),q(ja,Yt,null),e(Yt,Jp),e(Yt,Qs),e(Qs,Qp),e(V,Xp),e(V,Zt),q(Fa,Zt,null),e(Zt,Yp),e(Zt,Xs),e(Xs,Zp),e(V,eg),e(V,be),q(Ta,be,null),e(be,tg),e(be,Ys),e(Ys,og),e(be,ag),e(be,Zs),e(Zs,ng),e(be,sg),q(eo,be,null),e(be,rg),q(to,be,null),e(V,ig),e(V,qe),q(Pa,qe,null),e(qe,lg),e(qe,er),e(er,cg),e(qe,pg),q(oo,qe,null),e(qe,gg),q(ao,qe,null),e(V,hg),e(V,Ie),q(Oa,Ie,null),e(Ie,dg),e(Ie,tr),e(tr,ug),e(Ie,fg),q(no,Ie,null),e(Ie,mg),q(so,Ie,null),e(V,_g),e(V,ro),q(Ra,ro,null),e(ro,bg),e(ro,or),e(or,vg),e(V,$g),e(V,Ne),q(La,Ne,null),e(Ne,yg),e(Ne,ar),e(ar,Eg),e(Ne,wg),q(io,Ne,null),e(Ne,kg),q(lo,Ne,null),e(V,Ag),e(V,co),q(Ca,co,null),e(co,xg),e(co,nr),e(nr,Dg),e(V,Hg),e(V,po),q(Sa,po,null),e(po,qg),e(po,sr),e(sr,Ig),e(V,Ng),e(V,et),q(Ma,et,null),e(et,jg),e(et,rr),e(rr,Fg),e(et,Tg),q(go,et,null),e(V,Pg),e(V,je),q(Ua,je,null),e(je,Og),e(je,ir),e(ir,Rg),e(je,Lg),e(je,lr),e(lr,Cg),e(je,Sg),q(ho,je,null),e(V,Mg),e(V,Fe),q(Va,Fe,null),e(Fe,Ug),e(Fe,cr),e(cr,Vg),e(Fe,zg),e(Fe,za),e(za,Wg),e(za,Wa),e(Wa,Gg),e(za,Bg),e(Fe,Kg),q(uo,Fe,null),e(V,Jg),e(V,Te),q(Ga,Te,null),e(Te,Qg),e(Te,pr),e(pr,Xg),e(Te,Yg),q(fo,Te,null),e(Te,Zg),q(mo,Te,null),e(V,eh),e(V,tt),q(Ba,tt,null),e(tt,th),e(tt,gr),e(gr,oh),e(tt,ah),q(_o,tt,null),e(V,nh),e(V,bo),q(Ka,bo,null),e(bo,sh),e(bo,hr),e(hr,rh),e(V,ih),e(V,Pe),q(Ja,Pe,null),e(Pe,lh),e(Pe,dr),e(dr,ch),e(Pe,ph),e(Pe,ur),e(ur,gh),e(Pe,hh),q(vo,Pe,null),e(V,dh),e(V,$o),q(Qa,$o,null),e($o,uh),e($o,fr),e(fr,fh),e(V,mh),e(V,ot),q(Xa,ot,null),e(ot,_h),e(ot,mr),e(mr,bh),e(ot,vh),q(yo,ot,null),e(V,$h),e(V,ve),q(Ya,ve,null),e(ve,yh),e(ve,_r),e(_r,Eh),e(ve,wh),q(Eo,ve,null),e(ve,kh),q(wo,ve,null),e(ve,Ah),q(ko,ve,null),e(V,xh),e(V,re),q(Za,re,null),e(re,Dh),e(re,br),e(br,Hh),e(re,qh),e(re,vr),e(vr,Ih),e(re,Nh),e(re,ue),e(ue,jh),e(ue,$r),e($r,Fh),e(ue,Th),e(ue,yr),e(yr,Ph),e(ue,Oh),e(ue,en),e(en,Rh),e(ue,Lh),e(ue,Er),e(Er,Ch),e(ue,Sh),e(ue,wr),e(wr,Mh),e(ue,Uh),e(re,Vh),e(re,tn),e(tn,zh),e(tn,kr),e(kr,Wh),e(tn,Gh),e(re,Bh),q(Ao,re,null),e(re,Kh),q(xo,re,null),e(re,Jh),q(Do,re,null),e(V,Qh),e(V,Ho),q(on,Ho,null),e(Ho,Xh),e(Ho,Ar),e(Ar,Yh),$(o,Zi,E),$(o,mt,E),e(mt,qo),e(qo,xr),q(an,xr,null),e(mt,Zh),e(mt,Dr),e(Dr,ed),$(o,el,E),$(o,_t,E),q(nn,_t,null),e(_t,td),e(_t,Hr),e(Hr,od),$(o,tl,E),$(o,bt,E),e(bt,Io),e(Io,qr),q(sn,qr,null),e(bt,ad),e(bt,Ir),e(Ir,nd),$(o,ol,E),$(o,vt,E),q(rn,vt,null),e(vt,sd),e(vt,Nr),e(Nr,rd),$(o,al,E),$(o,$t,E),e($t,No),e(No,jr),q(ln,jr,null),e($t,id),e($t,Fr),e(Fr,ld),$(o,nl,E),$(o,Ce,E),q(cn,Ce,null),e(Ce,cd),e(Ce,Tr),e(Tr,pd),e(Ce,gd),e(Ce,Pr),e(Pr,hd),$(o,sl,E),$(o,yt,E),e(yt,jo),e(jo,Or),q(pn,Or,null),e(yt,dd),e(yt,Rr),e(Rr,ud),$(o,rl,E),$(o,Et,E),q(gn,Et,null),e(Et,fd),e(Et,Lr),e(Lr,md),$(o,il,E),$(o,wt,E),e(wt,Fo),e(Fo,Cr),q(hn,Cr,null),e(wt,_d),e(wt,Sr),e(Sr,bd),$(o,ll,E),$(o,Se,E),q(dn,Se,null),e(Se,vd),e(Se,Mr),e(Mr,$d),e(Se,yd),e(Se,un),e(un,Ed),e(un,cs),e(cs,wd),e(un,kd),$(o,cl,E),$(o,kt,E),e(kt,To),e(To,Ur),q(fn,Ur,null),e(kt,Ad),e(kt,ps),e(ps,Vr),e(Vr,xd),e(ps,Dd),$(o,pl,E),$(o,Po,E),e(Po,Hd),e(Po,zr),e(zr,qd),e(Po,Id),$(o,gl,E),$(o,fe,E),q(mn,fe,null),e(fe,Nd),e(fe,Wr),e(Wr,jd),e(fe,Fd),e(fe,$e),q(_n,$e,null),e($e,Td),e($e,bn),e(bn,Pd),e(bn,Gr),e(Gr,Od),e(bn,Rd),e($e,Ld),e($e,vn),e(vn,Cd),e(vn,Br),e(Br,Sd),e(vn,Md),e($e,Ud),e($e,$n),e($n,Vd),e($n,Kr),e(Kr,zd),e($n,Wd),e($e,Gd),q(Oo,$e,null),e(fe,Bd),e(fe,at),q(yn,at,null),e(at,Kd),e(at,gs),e(gs,Jd),e(gs,Jr),e(Jr,Qd),e(at,Xd),e(at,hs),e(hs,Yd),e(hs,Qr),e(Qr,Zd),e(fe,eu),e(fe,Oe),q(En,Oe,null),e(Oe,tu),e(Oe,wn),e(wn,ou),e(wn,Xr),e(Xr,au),e(wn,nu),e(Oe,su),e(Oe,At),e(At,nt),e(nt,ru),e(nt,Yr),e(Yr,iu),e(nt,lu),e(nt,Zr),e(Zr,cu),e(nt,pu),e(nt,ei),e(ei,gu),e(At,hu),e(At,kn),e(kn,du),e(kn,ti),e(ti,uu),e(kn,fu),e(At,mu),e(At,st),e(st,_u),e(st,oi),e(oi,bu),e(st,vu),e(st,ai),e(ai,$u),e(st,yu),e(st,ni),e(ni,Eu),e(Oe,wu),e(Oe,xt),e(xt,ku),e(xt,si),e(si,Au),e(xt,xu),e(xt,ri),e(ri,Du),e(xt,Hu),$(o,hl,E),$(o,Dt,E),q(An,Dt,null),e(Dt,qu),e(Dt,ii),e(ii,Iu),$(o,dl,E),$(o,Ht,E),e(Ht,Ro),e(Ro,li),q(xn,li,null),e(Ht,Nu),e(Ht,ci),e(ci,ju),$(o,ul,E),$(o,Dn,E),e(Dn,pi),e(pi,Fu),e(Dn,Tu),$(o,fl,E),$(o,Lo,E),e(Lo,Pu),e(Lo,ds),e(ds,Ou),e(Lo,Ru),$(o,ml,E),$(o,Ee,E),q(Hn,Ee,null),e(Ee,Lu),e(Ee,Co),q(qn,Co,null),e(Co,Cu),e(Co,gi),e(gi,Su),e(Ee,Mu),e(Ee,rt),q(In,rt,null),e(rt,Uu),e(rt,hi),e(hi,Vu),e(rt,zu),e(rt,Nn),e(Nn,Wu),e(Nn,di),e(di,Gu),e(Nn,Bu),e(Ee,Ku),e(Ee,So),q(jn,So,null),e(So,Ju),e(So,ui),e(ui,Qu),$(o,_l,E),$(o,qt,E),e(qt,Mo),e(Mo,fi),q(Fn,fi,null),e(qt,Xu),e(qt,mi),e(mi,Yu),$(o,bl,E),$(o,Uo,E),e(Uo,Zu),e(Uo,_i),e(_i,ef),e(Uo,tf),$(o,vl,E),$(o,It,E),e(It,Vo),e(Vo,bi),q(Tn,bi,null),e(It,of),e(It,vi),e(vi,af),$(o,$l,E),$(o,Me,E),q(Pn,Me,null),e(Me,nf),e(Me,$i),e($i,sf),e(Me,rf),q(zo,Me,null),$(o,yl,E),$(o,Nt,E),e(Nt,Wo),e(Wo,yi),q(On,yi,null),e(Nt,lf),e(Nt,Ei),e(Ei,cf),$(o,El,E),$(o,Ue,E),q(Rn,Ue,null),e(Ue,pf),e(Ue,wi),e(wi,gf),e(Ue,hf),q(Go,Ue,null),$(o,wl,E),$(o,jt,E),e(jt,Bo),e(Bo,ki),q(Ln,ki,null),e(jt,df),e(jt,Ai),e(Ai,uf),$(o,kl,E),$(o,Ve,E),q(Cn,Ve,null),e(Ve,ff),e(Ve,xi),e(xi,mf),e(Ve,_f),q(Ko,Ve,null),$(o,Al,E),$(o,Ft,E),e(Ft,Jo),e(Jo,Di),q(Sn,Di,null),e(Ft,bf),e(Ft,Hi),e(Hi,vf),$(o,xl,E),$(o,ze,E),q(Mn,ze,null),e(ze,$f),e(ze,qi),e(qi,yf),e(ze,Ef),q(Qo,ze,null),Dl=!0},p(o,[E]){const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),Pt.$set(Un);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),Ot.$set(Ii);const Ni={};E&2&&(Ni.$$scope={dirty:E,ctx:o}),Rt.$set(Ni);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),Lt.$set(ji);const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),Ct.$set(Vn);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),St.$set(Fi);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),Mt.$set(zn);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),Ut.$set(Ti);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),Wt.$set(Pi);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),Gt.$set(Wn);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),Bt.$set(Oi);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),Jt.$set(We);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),Xt.$set(Ri);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),eo.$set(Li);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),to.$set(Ci);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),oo.$set(Gn);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),ao.$set(Si);const Mi={};E&2&&(Mi.$$scope={dirty:E,ctx:o}),no.$set(Mi);const Ui={};E&2&&(Ui.$$scope={dirty:E,ctx:o}),so.$set(Ui);const z={};E&2&&(z.$$scope={dirty:E,ctx:o}),io.$set(z);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),lo.$set(Ge);const Vi={};E&2&&(Vi.$$scope={dirty:E,ctx:o}),go.$set(Vi);const Be={};E&2&&(Be.$$scope={dirty:E,ctx:o}),ho.$set(Be);const zi={};E&2&&(zi.$$scope={dirty:E,ctx:o}),uo.$set(zi);const Ke={};E&2&&(Ke.$$scope={dirty:E,ctx:o}),fo.$set(Ke);const Wi={};E&2&&(Wi.$$scope={dirty:E,ctx:o}),mo.$set(Wi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),_o.$set(me);const Gi={};E&2&&(Gi.$$scope={dirty:E,ctx:o}),vo.$set(Gi);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),yo.$set(Bn);const Bi={};E&2&&(Bi.$$scope={dirty:E,ctx:o}),Eo.$set(Bi);const Kn={};E&2&&(Kn.$$scope={dirty:E,ctx:o}),wo.$set(Kn);const Ki={};E&2&&(Ki.$$scope={dirty:E,ctx:o}),ko.$set(Ki);const us={};E&2&&(us.$$scope={dirty:E,ctx:o}),Ao.$set(us);const Ji={};E&2&&(Ji.$$scope={dirty:E,ctx:o}),xo.$set(Ji);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),Do.$set(_e);const Jn={};E&2&&(Jn.$$scope={dirty:E,ctx:o}),Oo.$set(Jn);const Qi={};E&2&&(Qi.$$scope={dirty:E,ctx:o}),zo.$set(Qi);const Qn={};E&2&&(Qn.$$scope={dirty:E,ctx:o}),Go.$set(Qn);const Xi={};E&2&&(Xi.$$scope={dirty:E,ctx:o}),Ko.$set(Xi);const Xn={};E&2&&(Xn.$$scope={dirty:E,ctx:o}),Qo.$set(Xn)},i(o){Dl||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Le.$$.fragment,o),I(ga.$$.fragment,o),I(ha.$$.fragment,o),I(da.$$.fragment,o),I(Pt.$$.fragment,o),I(Ot.$$.fragment,o),I(ua.$$.fragment,o),I(Rt.$$.fragment,o),I(Lt.$$.fragment,o),I(fa.$$.fragment,o),I(Ct.$$.fragment,o),I(St.$$.fragment,o),I(ma.$$.fragment,o),I(Mt.$$.fragment,o),I(va.$$.fragment,o),I(Ut.$$.fragment,o),I(wa.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(Wt.$$.fragment,o),I(xa.$$.fragment,o),I(Gt.$$.fragment,o),I(Da.$$.fragment,o),I(Bt.$$.fragment,o),I(Ha.$$.fragment,o),I(qa.$$.fragment,o),I(Jt.$$.fragment,o),I(Ia.$$.fragment,o),I(Na.$$.fragment,o),I(Xt.$$.fragment,o),I(ja.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(eo.$$.fragment,o),I(to.$$.fragment,o),I(Pa.$$.fragment,o),I(oo.$$.fragment,o),I(ao.$$.fragment,o),I(Oa.$$.fragment,o),I(no.$$.fragment,o),I(so.$$.fragment,o),I(Ra.$$.fragment,o),I(La.$$.fragment,o),I(io.$$.fragment,o),I(lo.$$.fragment,o),I(Ca.$$.fragment,o),I(Sa.$$.fragment,o),I(Ma.$$.fragment,o),I(go.$$.fragment,o),I(Ua.$$.fragment,o),I(ho.$$.fragment,o),I(Va.$$.fragment,o),I(uo.$$.fragment,o),I(Ga.$$.fragment,o),I(fo.$$.fragment,o),I(mo.$$.fragment,o),I(Ba.$$.fragment,o),I(_o.$$.fragment,o),I(Ka.$$.fragment,o),I(Ja.$$.fragment,o),I(vo.$$.fragment,o),I(Qa.$$.fragment,o),I(Xa.$$.fragment,o),I(yo.$$.fragment,o),I(Ya.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(ko.$$.fragment,o),I(Za.$$.fragment,o),I(Ao.$$.fragment,o),I(xo.$$.fragment,o),I(Do.$$.fragment,o),I(on.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(cn.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(hn.$$.fragment,o),I(dn.$$.fragment,o),I(fn.$$.fragment,o),I(mn.$$.fragment,o),I(_n.$$.fragment,o),I(Oo.$$.fragment,o),I(yn.$$.fragment,o),I(En.$$.fragment,o),I(An.$$.fragment,o),I(xn.$$.fragment,o),I(Hn.$$.fragment,o),I(qn.$$.fragment,o),I(In.$$.fragment,o),I(jn.$$.fragment,o),I(Fn.$$.fragment,o),I(Tn.$$.fragment,o),I(Pn.$$.fragment,o),I(zo.$$.fragment,o),I(On.$$.fragment,o),I(Rn.$$.fragment,o),I(Go.$$.fragment,o),I(Ln.$$.fragment,o),I(Cn.$$.fragment,o),I(Ko.$$.fragment,o),I(Sn.$$.fragment,o),I(Mn.$$.fragment,o),I(Qo.$$.fragment,o),Dl=!0)},o(o){N(l.$$.fragment,o),N(C.$$.fragment,o),N(X.$$.fragment,o),N(Le.$$.fragment,o),N(ga.$$.fragment,o),N(ha.$$.fragment,o),N(da.$$.fragment,o),N(Pt.$$.fragment,o),N(Ot.$$.fragment,o),N(ua.$$.fragment,o),N(Rt.$$.fragment,o),N(Lt.$$.fragment,o),N(fa.$$.fragment,o),N(Ct.$$.fragment,o),N(St.$$.fragment,o),N(ma.$$.fragment,o),N(Mt.$$.fragment,o),N(va.$$.fragment,o),N(Ut.$$.fragment,o),N(wa.$$.fragment,o),N(ka.$$.fragment,o),N(Aa.$$.fragment,o),N(Wt.$$.fragment,o),N(xa.$$.fragment,o),N(Gt.$$.fragment,o),N(Da.$$.fragment,o),N(Bt.$$.fragment,o),N(Ha.$$.fragment,o),N(qa.$$.fragment,o),N(Jt.$$.fragment,o),N(Ia.$$.fragment,o),N(Na.$$.fragment,o),N(Xt.$$.fragment,o),N(ja.$$.fragment,o),N(Fa.$$.fragment,o),N(Ta.$$.fragment,o),N(eo.$$.fragment,o),N(to.$$.fragment,o),N(Pa.$$.fragment,o),N(oo.$$.fragment,o),N(ao.$$.fragment,o),N(Oa.$$.fragment,o),N(no.$$.fragment,o),N(so.$$.fragment,o),N(Ra.$$.fragment,o),N(La.$$.fragment,o),N(io.$$.fragment,o),N(lo.$$.fragment,o),N(Ca.$$.fragment,o),N(Sa.$$.fragment,o),N(Ma.$$.fragment,o),N(go.$$.fragment,o),N(Ua.$$.fragment,o),N(ho.$$.fragment,o),N(Va.$$.fragment,o),N(uo.$$.fragment,o),N(Ga.$$.fragment,o),N(fo.$$.fragment,o),N(mo.$$.fragment,o),N(Ba.$$.fragment,o),N(_o.$$.fragment,o),N(Ka.$$.fragment,o),N(Ja.$$.fragment,o),N(vo.$$.fragment,o),N(Qa.$$.fragment,o),N(Xa.$$.fragment,o),N(yo.$$.fragment,o),N(Ya.$$.fragment,o),N(Eo.$$.fragment,o),N(wo.$$.fragment,o),N(ko.$$.fragment,o),N(Za.$$.fragment,o),N(Ao.$$.fragment,o),N(xo.$$.fragment,o),N(Do.$$.fragment,o),N(on.$$.fragment,o),N(an.$$.fragment,o),N(nn.$$.fragment,o),N(sn.$$.fragment,o),N(rn.$$.fragment,o),N(ln.$$.fragment,o),N(cn.$$.fragment,o),N(pn.$$.fragment,o),N(gn.$$.fragment,o),N(hn.$$.fragment,o),N(dn.$$.fragment,o),N(fn.$$.fragment,o),N(mn.$$.fragment,o),N(_n.$$.fragment,o),N(Oo.$$.fragment,o),N(yn.$$.fragment,o),N(En.$$.fragment,o),N(An.$$.fragment,o),N(xn.$$.fragment,o),N(Hn.$$.fragment,o),N(qn.$$.fragment,o),N(In.$$.fragment,o),N(jn.$$.fragment,o),N(Fn.$$.fragment,o),N(Tn.$$.fragment,o),N(Pn.$$.fragment,o),N(zo.$$.fragment,o),N(On.$$.fragment,o),N(Rn.$$.fragment,o),N(Go.$$.fragment,o),N(Ln.$$.fragment,o),N(Cn.$$.fragment,o),N(Ko.$$.fragment,o),N(Sn.$$.fragment,o),N(Mn.$$.fragment,o),N(Qo.$$.fragment,o),Dl=!1},d(o){t(p),o&&t(b),o&&t(f),j(l),o&&t(x),o&&t(w),o&&t(R),o&&t(_),o&&t(K),o&&t(G),o&&t(U),j(C,o),o&&t(Y),o&&t(te),o&&t(B),j(X,o),o&&t(oe),o&&t(ne),o&&t(ca),j(Le,o),o&&t(pa),o&&t(ft),j(ga),o&&t(Yi),o&&t(V),j(ha),j(da),j(Pt),j(Ot),j(ua),j(Rt),j(Lt),j(fa),j(Ct),j(St),j(ma),j(Mt),j(va),j(Ut),j(wa),j(ka),j(Aa),j(Wt),j(xa),j(Gt),j(Da),j(Bt),j(Ha),j(qa),j(Jt),j(Ia),j(Na),j(Xt),j(ja),j(Fa),j(Ta),j(eo),j(to),j(Pa),j(oo),j(ao),j(Oa),j(no),j(so),j(Ra),j(La),j(io),j(lo),j(Ca),j(Sa),j(Ma),j(go),j(Ua),j(ho),j(Va),j(uo),j(Ga),j(fo),j(mo),j(Ba),j(_o),j(Ka),j(Ja),j(vo),j(Qa),j(Xa),j(yo),j(Ya),j(Eo),j(wo),j(ko),j(Za),j(Ao),j(xo),j(Do),j(on),o&&t(Zi),o&&t(mt),j(an),o&&t(el),o&&t(_t),j(nn),o&&t(tl),o&&t(bt),j(sn),o&&t(ol),o&&t(vt),j(rn),o&&t(al),o&&t($t),j(ln),o&&t(nl),o&&t(Ce),j(cn),o&&t(sl),o&&t(yt),j(pn),o&&t(rl),o&&t(Et),j(gn),o&&t(il),o&&t(wt),j(hn),o&&t(ll),o&&t(Se),j(dn),o&&t(cl),o&&t(kt),j(fn),o&&t(pl),o&&t(Po),o&&t(gl),o&&t(fe),j(mn),j(_n),j(Oo),j(yn),j(En),o&&t(hl),o&&t(Dt),j(An),o&&t(dl),o&&t(Ht),j(xn),o&&t(ul),o&&t(Dn),o&&t(fl),o&&t(Lo),o&&t(ml),o&&t(Ee),j(Hn),j(qn),j(In),j(jn),o&&t(_l),o&&t(qt),j(Fn),o&&t(bl),o&&t(Uo),o&&t(vl),o&&t(It),j(Tn),o&&t($l),o&&t(Me),j(Pn),j(zo),o&&t(yl),o&&t(Nt),j(On),o&&t(El),o&&t(Ue),j(Rn),j(Go),o&&t(wl),o&&t(jt),j(Ln),o&&t(kl),o&&t(Ve),j(Cn),j(Ko),o&&t(Al),o&&t(Ft),j(Sn),o&&t(xl),o&&t(ze),j(Mn),j(Qo)}}}const Ib={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Nb(S){return U_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Lb extends L_{constructor(p){super();C_(this,p,Nb,qb,S_,{})}}export{Lb as default,Ib as metadata};
