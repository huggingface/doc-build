import{S as G_,i as B_,s as K_,e as a,k as g,w as D,t as r,M as J_,c as n,d as t,m as h,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as N,B as j,v as Q_,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function X_(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Y_(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Z_(S){let p,b,f,c,d;return c=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function eb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function tb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"create_commit"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function ob(S){let p,b,f,c;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(" is limited to 25k LFS files and a 1GB payload for regular files.")},l(d){p=n(d,"P",{});var l=s(p);b=n(l,"CODE",{});var u=s(b);f=i(u,"create_commit"),u.forEach(t),c=i(l," is limited to 25k LFS files and a 1GB payload for regular files."),l.forEach(t)},m(d,l){$(d,p,l),e(p,b),e(b,f),e(p,c)},d(d){d&&t(p)}}}function ab(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function nb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function sb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function rb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),c=n(X,"UL",{});var ne=s(c);d=n(ne,"LI",{});var Je=s(d);l=n(Je,"A",{href:!0,rel:!0});var de=s(l);u=n(de,"CODE",{});var ht=s(u);P=i(ht,"HTTPError"),ht.forEach(t),de.forEach(t),v=i(Je,`
if the HuggingFace API returned an error`),Je.forEach(t),x=h(ne),w=n(ne,"LI",{});var Qe=s(w);y=n(Qe,"A",{href:!0,rel:!0});var ke=s(y);k=n(ke,"CODE",{});var dt=s(k);O=i(dt,"ValueError"),dt.forEach(t),ke.forEach(t),T=i(Qe,`
if some parameter value is invalid`),Qe.forEach(t),R=h(ne),_=n(ne,"LI",{});var ut=s(_);F=n(ut,"A",{href:!0});var ft=s(F);M=i(ft,"RepositoryNotFoundError"),ft.forEach(t),W=i(ut,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(ut,"CODE",{});var ts=s(L);K=i(ts,"private"),ts.forEach(t),G=i(ut," and you do not have access."),ut.forEach(t),A=h(ne),U=n(ne,"LI",{});var la=s(U);C=n(la,"A",{href:!0});var ca=s(C);Y=i(ca,"RevisionNotFoundError"),ca.forEach(t),te=i(la,`
If the revision to download from cannot be found.`),la.forEach(t),Z=h(ne),J=n(ne,"LI",{});var Le=s(J);ee=n(Le,"A",{href:!0});var pa=s(ee);ae=i(pa,"EntryNotFoundError"),pa.forEach(t),B=i(Le,`
If the file to download cannot be found.`),Le.forEach(t),ne.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function ib(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function lb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function cb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function pb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function gb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function hb(S){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function db(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ub(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function fb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function mb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function _b(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function bb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function vb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function $b(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function yb(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Eb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function wb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function kb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Ab(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function xb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=h(Z),c=n(Z,"UL",{});var ee=s(c);d=n(ee,"LI",{});var ae=s(d);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var ne=s(y);k=n(ne,"CODE",{});var Je=s(k);O=i(Je,"ValueError"),Je.forEach(t),ne.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),R=h(ee),_=n(ee,"LI",{});var de=s(_);F=n(de,"A",{href:!0});var ht=s(F);M=i(ht,"RepositoryNotFoundError"),ht.forEach(t),W=i(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(de,"CODE",{});var Qe=s(L);K=i(Qe,"private"),Qe.forEach(t),G=i(de," and you do not have access."),de.forEach(t),A=h(ee),U=n(ee,"LI",{});var ke=s(U);C=n(ke,"A",{href:!0});var dt=s(C);Y=i(dt,"RevisionNotFoundError"),dt.forEach(t),te=i(ke,`
If the revision to download from cannot be found.`),ke.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function Db(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"upload_file"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function Hb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function qb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(R){p=n(R,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=h(R),c=n(R,"UL",{});var F=s(c);d=n(F,"LI",{});var M=s(d);l=n(M,"A",{href:!0,rel:!0});var W=s(l);u=n(W,"CODE",{});var L=s(u);P=i(L,"HTTPError"),L.forEach(t),W.forEach(t),v=i(M,`
if the HuggingFace API returned an error`),M.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(R,_){$(R,p,_),e(p,b),$(R,f,_),$(R,c,_),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(R){R&&t(p),R&&t(f),R&&t(c)}}}function Ib(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"upload_folder"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function Nb(S){let p,b,f,c,d;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function jb(S){let p,b,f,c,d;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Fb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Tb(S){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){N(p.$$.fragment,f),b=!1},d(f){j(p,f)}}}function Pb(S){let p,b,f,c,d;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Ob(S){let p,b,f,c,d;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Rb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te,Z,J,ee,ae,B,X,oe,ne,Je,de,ht,Qe,ke,dt,ut,ft,ts,la,ca,Le,pa,mt,Pt,Fs,ga,vc,Ts,$c,el,V,ha,yc,Ae,da,Ec,Ps,wc,kc,Ot,Ac,Rt,xc,xe,ua,Dc,Os,Hc,qc,Lt,Ic,Ct,Nc,De,fa,jc,Rs,Fc,Tc,St,Pc,Mt,Oc,le,ma,Rc,Ls,Lc,Cc,_a,Sc,Cs,Mc,Uc,Vc,ba,zc,os,Wc,Gc,Bc,as,Kc,ns,Jc,Qc,Ut,Xc,ce,va,Yc,$a,Zc,Ss,ep,tp,op,ya,ap,ss,np,sp,rp,Ea,ip,Ms,lp,cp,pp,rs,gp,is,hp,dp,Vt,up,zt,wa,fp,Us,mp,_p,Wt,ka,bp,Vs,vp,$p,He,Aa,yp,zs,Ep,wp,Ws,kp,Ap,Gt,xp,Xe,xa,Dp,Gs,Hp,qp,Bt,Ip,Ye,Da,Np,Bs,jp,Fp,Kt,Tp,Jt,Ha,Pp,Ks,Op,Rp,Ze,qa,Lp,Js,Cp,Sp,Qt,Mp,Xt,Ia,Up,Qs,Vp,zp,qe,Na,Wp,Xs,Gp,Bp,ls,Kp,cs,Jp,Qp,Yt,Xp,Zt,ja,Yp,Ys,Zp,eg,eo,Fa,tg,Zs,og,ag,be,Ta,ng,er,sg,rg,tr,ig,lg,to,cg,oo,pg,Ie,Pa,gg,or,hg,dg,ao,ug,no,fg,Ne,Oa,mg,ar,_g,bg,so,vg,ro,$g,io,Ra,yg,nr,Eg,wg,ve,La,kg,sr,Ag,xg,Ca,Dg,ps,Hg,qg,Ig,lo,Ng,co,jg,po,Sa,Fg,rr,Tg,Pg,go,Ma,Og,ir,Rg,Lg,et,Ua,Cg,lr,Sg,Mg,ho,Ug,je,Va,Vg,cr,zg,Wg,pr,Gg,Bg,uo,Kg,Fe,za,Jg,gr,Qg,Xg,Wa,Yg,Ga,Zg,eh,th,fo,oh,Te,Ba,ah,hr,nh,sh,mo,rh,_o,ih,tt,Ka,lh,dr,ch,ph,bo,gh,vo,Ja,hh,ur,dh,uh,Pe,Qa,fh,fr,mh,_h,mr,bh,vh,$o,$h,yo,Xa,yh,_r,Eh,wh,ot,Ya,kh,br,Ah,xh,Eo,Dh,$e,Za,Hh,vr,qh,Ih,wo,Nh,ko,jh,Ao,Fh,re,en,Th,$r,Ph,Oh,yr,Rh,Lh,ue,Ch,Er,Sh,Mh,wr,Uh,Vh,tn,zh,Wh,kr,Gh,Bh,Ar,Kh,Jh,Qh,on,Xh,xr,Yh,Zh,ed,xo,td,Do,od,Ho,ad,qo,an,nd,Dr,sd,tl,_t,Io,Hr,nn,rd,qr,id,ol,bt,sn,ld,Ir,cd,al,vt,No,Nr,rn,pd,jr,gd,nl,$t,ln,hd,Fr,dd,sl,yt,jo,Tr,cn,ud,Pr,fd,rl,Ce,pn,md,Or,_d,bd,Rr,vd,il,Et,Fo,Lr,gn,$d,Cr,yd,ll,wt,hn,Ed,Sr,wd,cl,kt,To,Mr,dn,kd,Ur,Ad,pl,Se,un,xd,Vr,Dd,Hd,fn,qd,gs,Id,Nd,gl,At,Po,zr,mn,jd,hs,Wr,Fd,Td,hl,Oo,Pd,Gr,Od,Rd,dl,fe,_n,Ld,Br,Cd,Sd,ye,bn,Md,vn,Ud,Kr,Vd,zd,Wd,$n,Gd,Jr,Bd,Kd,Jd,yn,Qd,Qr,Xd,Yd,Zd,Ro,eu,at,En,tu,ds,ou,Xr,au,nu,us,su,Yr,ru,iu,Oe,wn,lu,kn,cu,Zr,pu,gu,hu,xt,nt,du,ei,uu,fu,ti,mu,_u,oi,bu,vu,An,$u,ai,yu,Eu,wu,st,ku,ni,Au,xu,si,Du,Hu,ri,qu,Iu,Dt,Nu,ii,ju,Fu,li,Tu,Pu,ul,Ht,xn,Ou,ci,Ru,fl,qt,Lo,pi,Dn,Lu,gi,Cu,ml,Hn,hi,Su,Mu,_l,Co,Uu,fs,Vu,zu,bl,we,qn,Wu,So,In,Gu,di,Bu,Ku,rt,Nn,Ju,ui,Qu,Xu,jn,Yu,fi,Zu,ef,tf,Mo,Fn,of,mi,af,vl,It,Uo,_i,Tn,nf,bi,sf,$l,Vo,rf,vi,lf,cf,yl,Nt,zo,$i,Pn,pf,yi,gf,El,Me,On,hf,Ei,df,uf,Wo,wl,jt,Go,wi,Rn,ff,ki,mf,kl,Ue,Ln,_f,Ai,bf,vf,Bo,Al,Ft,Ko,xi,Cn,$f,Di,yf,xl,Ve,Sn,Ef,Hi,wf,kf,Jo,Dl,Tt,Qo,qi,Mn,Af,Ii,xf,Hl,ze,Un,Df,Ni,Hf,qf,Xo,ql;return l=new Ee({}),C=new ie({props:{code:`from huggingface_hub import list_models

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
)`}}),ga=new Ee({}),ha=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L563"}}),da=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2941",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Ot=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[X_]},$$scope:{ctx:S}}}),Rt=new se({props:{$$slots:{default:[Y_]},$$scope:{ctx:S}}}),ua=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2798",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Lt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Z_]},$$scope:{ctx:S}}}),Ct=new se({props:{$$slots:{default:[eb]},$$scope:{ctx:S}}}),fa=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1708",returnDescription:`
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
`}}),St=new se({props:{warning:!0,$$slots:{default:[tb]},$$scope:{ctx:S}}}),Mt=new se({props:{warning:!0,$$slots:{default:[ob]},$$scope:{ctx:S}}}),ma=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2625"}}),Ut=new se({props:{$$slots:{default:[ab]},$$scope:{ctx:S}}}),va=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2714"}}),Vt=new se({props:{$$slots:{default:[nb]},$$scope:{ctx:S}}}),wa=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1454",returnDescription:`
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2315",raiseDescription:`
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1215",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Gt=new se({props:{$$slots:{default:[sb]},$$scope:{ctx:S}}}),xa=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2227"}}),Bt=new se({props:{$$slots:{default:[rb]},$$scope:{ctx:S}}}),Da=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1534"}}),Kt=new se({props:{$$slots:{default:[ib]},$$scope:{ctx:S}}}),Ha=new Q({props:{name:"delete_tag",anchor:"huggingface_hub.HfApi.delete_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a commit will be deleted.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to delete.`,name:"tag"},{anchor:"huggingface_hub.HfApi.delete_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if tagging a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2377",raiseDescription:`
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
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3069",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Qt=new se({props:{$$slots:{default:[lb]},$$scope:{ctx:S}}}),Ia=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L655"}}),Na=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2540"}}),Yt=new se({props:{$$slots:{default:[cb]},$$scope:{ctx:S}}}),ja=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2424",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Fa=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L647"}}),Ta=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2462",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[pb]},$$scope:{ctx:S}}}),oo=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[gb]},$$scope:{ctx:S}}}),Pa=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3126",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),ao=new se({props:{warning:!0,$$slots:{default:[hb]},$$scope:{ctx:S}}}),no=new se({props:{$$slots:{default:[db]},$$scope:{ctx:S}}}),Oa=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L877"}}),so=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[ub]},$$scope:{ctx:S}}}),ro=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[fb]},$$scope:{ctx:S}}}),Ra=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1042",returnDescription:`
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L665"}}),lo=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[mb]},$$scope:{ctx:S}}}),co=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[_b]},$$scope:{ctx:S}}}),Sa=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1410",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ma=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1055",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Ua=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3016",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),ho=new se({props:{$$slots:{default:[bb]},$$scope:{ctx:S}}}),Va=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1140",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),uo=new se({props:{$$slots:{default:[vb]},$$scope:{ctx:S}}}),za=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1640"}}),fo=new se({props:{$$slots:{default:[$b]},$$scope:{ctx:S}}}),Ba=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2874",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),mo=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[yb]},$$scope:{ctx:S}}}),_o=new se({props:{$$slots:{default:[Eb]},$$scope:{ctx:S}}}),Ka=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1345",returnDescription:`
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
`}}),bo=new se({props:{$$slots:{default:[wb]},$$scope:{ctx:S}}}),Ja=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L614"}}),Qa=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1280",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),$o=new se({props:{$$slots:{default:[kb]},$$scope:{ctx:S}}}),Xa=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L633"}}),Ya=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1580",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Eo=new se({props:{$$slots:{default:[Ab]},$$scope:{ctx:S}}}),Za=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1918",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),wo=new se({props:{$$slots:{default:[xb]},$$scope:{ctx:S}}}),ko=new se({props:{warning:!0,$$slots:{default:[Db]},$$scope:{ctx:S}}}),Ao=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Hb]},$$scope:{ctx:S}}}),en=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2067",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),xo=new se({props:{$$slots:{default:[qb]},$$scope:{ctx:S}}}),Do=new se({props:{warning:!0,$$slots:{default:[Ib]},$$scope:{ctx:S}}}),Ho=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Nb]},$$scope:{ctx:S}}}),an=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L570"}}),nn=new Ee({}),sn=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L253"}}),rn=new Ee({}),ln=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L326"}}),cn=new Ee({}),pn=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L400"}}),gn=new Ee({}),hn=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L207"}}),dn=new Ee({}),un=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L152"}}),mn=new Ee({}),_n=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L51"}}),bn=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L123"}}),Ro=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[jb]},$$scope:{ctx:S}}}),En=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L158"}}),wn=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L73"}}),xn=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L36"}}),Dn=new Ee({}),qn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),In=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),Nn=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Fn=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),Tn=new Ee({}),Pn=new Ee({}),On=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"languages",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),Wo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Fb]},$$scope:{ctx:S}}}),Rn=new Ee({}),Ln=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Bo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Tb]},$$scope:{ctx:S}}}),Cn=new Ee({}),Sn=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L525"}}),Jo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Pb]},$$scope:{ctx:S}}}),Mn=new Ee({}),Un=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L487"}}),Xo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Ob]},$$scope:{ctx:S}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=g(),_=a("p"),F=r("All methods from the "),M=a("code"),W=r("HfApi"),L=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),U=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),ne=a("p"),Je=r("Using the "),de=a("a"),ht=r("HfApi"),Qe=r(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),ke=a("code"),dt=r("huggingface-cli login"),ut=r(" or "),ft=a("a"),ts=r("login()"),la=r(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),ca=g(),D(Le.$$.fragment),pa=g(),mt=a("h3"),Pt=a("a"),Fs=a("span"),D(ga.$$.fragment),vc=g(),Ts=a("span"),$c=r("HfApi"),el=g(),V=a("div"),D(ha.$$.fragment),yc=g(),Ae=a("div"),D(da.$$.fragment),Ec=g(),Ps=a("p"),wc=r("Closes or re-opens a Discussion or Pull Request."),kc=g(),D(Ot.$$.fragment),Ac=g(),D(Rt.$$.fragment),xc=g(),xe=a("div"),D(ua.$$.fragment),Dc=g(),Os=a("p"),Hc=r("Creates a new comment on the given Discussion."),qc=g(),D(Lt.$$.fragment),Ic=g(),D(Ct.$$.fragment),Nc=g(),De=a("div"),D(fa.$$.fragment),jc=g(),Rs=a("p"),Fc=r("Creates a commit in the given repo, deleting & uploading files as needed."),Tc=g(),D(St.$$.fragment),Pc=g(),D(Mt.$$.fragment),Oc=g(),le=a("div"),D(ma.$$.fragment),Rc=g(),Ls=a("p"),Lc=r("Creates a Discussion or Pull Request."),Cc=g(),_a=a("p"),Sc=r("Pull Requests created programmatically will be in "),Cs=a("code"),Mc=r('"draft"'),Uc=r(" status."),Vc=g(),ba=a("p"),zc=r("Creating a Pull Request with changes can also be done at once with "),os=a("a"),Wc=r("HfApi.create_commit()"),Gc=r("."),Bc=g(),as=a("p"),Kc=r("Returns: "),ns=a("a"),Jc=r("DiscussionWithDetails"),Qc=g(),D(Ut.$$.fragment),Xc=g(),ce=a("div"),D(va.$$.fragment),Yc=g(),$a=a("p"),Zc=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Ss=a("code"),ep=r('"draft"'),tp=r(" status."),op=g(),ya=a("p"),ap=r("Creating a Pull Request with changes can also be done at once with "),ss=a("a"),np=r("HfApi.create_commit()"),sp=r(";"),rp=g(),Ea=a("p"),ip=r("This is a wrapper around "),Ms=a("code"),lp=r("HfApi.create_discusssion"),cp=r("."),pp=g(),rs=a("p"),gp=r("Returns: "),is=a("a"),hp=r("DiscussionWithDetails"),dp=g(),D(Vt.$$.fragment),up=g(),zt=a("div"),D(wa.$$.fragment),fp=g(),Us=a("p"),mp=r("Create an empty repo on the HuggingFace Hub."),_p=g(),Wt=a("div"),D(ka.$$.fragment),bp=g(),Vs=a("p"),vp=r("Tag a given commit of a repo on the Hub."),$p=g(),He=a("div"),D(Aa.$$.fragment),yp=g(),zs=a("p"),Ep=r("Get info on one specific dataset on huggingface.co."),wp=g(),Ws=a("p"),kp=r("Dataset can be private if you pass an acceptable token."),Ap=g(),D(Gt.$$.fragment),xp=g(),Xe=a("div"),D(xa.$$.fragment),Dp=g(),Gs=a("p"),Hp=r("Deletes a file in the given repo."),qp=g(),D(Bt.$$.fragment),Ip=g(),Ye=a("div"),D(Da.$$.fragment),Np=g(),Bs=a("p"),jp=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Fp=g(),D(Kt.$$.fragment),Tp=g(),Jt=a("div"),D(Ha.$$.fragment),Pp=g(),Ks=a("p"),Op=r("Delete a tag from a repo on the Hub."),Rp=g(),Ze=a("div"),D(qa.$$.fragment),Lp=g(),Js=a("p"),Cp=r("Edits a comment on a Discussion / Pull Request."),Sp=g(),D(Qt.$$.fragment),Mp=g(),Xt=a("div"),D(Ia.$$.fragment),Up=g(),Qs=a("p"),Vp=r("Gets all valid dataset tags as a nested namespace object."),zp=g(),qe=a("div"),D(Na.$$.fragment),Wp=g(),Xs=a("p"),Gp=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Bp=g(),ls=a("p"),Kp=r("Returns: "),cs=a("a"),Jp=r("DiscussionWithDetails"),Qp=g(),D(Yt.$$.fragment),Xp=g(),Zt=a("div"),D(ja.$$.fragment),Yp=g(),Ys=a("p"),Zp=r(`Returns the repository name for a given model ID and optional
organization.`),eg=g(),eo=a("div"),D(Fa.$$.fragment),tg=g(),Zs=a("p"),og=r("Gets all valid model tags as a nested namespace object"),ag=g(),be=a("div"),D(Ta.$$.fragment),ng=g(),er=a("p"),sg=r("Fetches Discussions and Pull Requests for the given repo."),rg=g(),tr=a("p"),ig=r("Example:"),lg=g(),D(to.$$.fragment),cg=g(),D(oo.$$.fragment),pg=g(),Ie=a("div"),D(Pa.$$.fragment),gg=g(),or=a("p"),hg=r("Hides a comment on a Discussion / Pull Request."),dg=g(),D(ao.$$.fragment),ug=g(),D(no.$$.fragment),fg=g(),Ne=a("div"),D(Oa.$$.fragment),mg=g(),ar=a("p"),_g=r("Get the public list of all the datasets on huggingface.co"),bg=g(),D(so.$$.fragment),vg=g(),D(ro.$$.fragment),$g=g(),io=a("div"),D(Ra.$$.fragment),yg=g(),nr=a("p"),Eg=r("Get the public list of all the metrics on huggingface.co"),wg=g(),ve=a("div"),D(La.$$.fragment),kg=g(),sr=a("p"),Ag=r("Get the public list of all the models on huggingface.co"),xg=g(),Ca=a("p"),Dg=r("Returns: List of "),ps=a("a"),Hg=r("huggingface_hub.hf_api.ModelInfo"),qg=r(" objects"),Ig=g(),D(lo.$$.fragment),Ng=g(),D(co.$$.fragment),jg=g(),po=a("div"),D(Sa.$$.fragment),Fg=g(),rr=a("p"),Tg=r("Get the list of files in a given repo."),Pg=g(),go=a("div"),D(Ma.$$.fragment),Og=g(),ir=a("p"),Rg=r("Get the public list of all Spaces on huggingface.co"),Lg=g(),et=a("div"),D(Ua.$$.fragment),Cg=g(),lr=a("p"),Sg=r("Merges a Pull Request."),Mg=g(),D(ho.$$.fragment),Ug=g(),je=a("div"),D(Va.$$.fragment),Vg=g(),cr=a("p"),zg=r("Get info on one specific model on huggingface.co"),Wg=g(),pr=a("p"),Gg=r("Model can be private if you pass an acceptable token or are logged in."),Bg=g(),D(uo.$$.fragment),Kg=g(),Fe=a("div"),D(za.$$.fragment),Jg=g(),gr=a("p"),Qg=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Xg=g(),Wa=a("p"),Yg=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ga=a("a"),Zg=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),eh=r("."),th=g(),D(fo.$$.fragment),oh=g(),Te=a("div"),D(Ba.$$.fragment),ah=g(),hr=a("p"),nh=r("Renames a Discussion."),sh=g(),D(mo.$$.fragment),rh=g(),D(_o.$$.fragment),ih=g(),tt=a("div"),D(Ka.$$.fragment),lh=g(),dr=a("p"),ch=r("Get the info object for a given repo of a given type."),ph=g(),D(bo.$$.fragment),gh=g(),vo=a("div"),D(Ja.$$.fragment),hh=g(),ur=a("p"),dh=r(`Saves the passed access token so git can correctly authenticate the
user.`),uh=g(),Pe=a("div"),D(Qa.$$.fragment),fh=g(),fr=a("p"),mh=r("Get info on one specific Space on huggingface.co."),_h=g(),mr=a("p"),bh=r("Space can be private if you pass an acceptable token."),vh=g(),D($o.$$.fragment),$h=g(),yo=a("div"),D(Xa.$$.fragment),yh=g(),_r=a("p"),Eh=r("Resets the user\u2019s access token."),wh=g(),ot=a("div"),D(Ya.$$.fragment),kh=g(),br=a("p"),Ah=r("Update the visibility setting of a repository."),xh=g(),D(Eo.$$.fragment),Dh=g(),$e=a("div"),D(Za.$$.fragment),Hh=g(),vr=a("p"),qh=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ih=g(),D(wo.$$.fragment),Nh=g(),D(ko.$$.fragment),jh=g(),D(Ao.$$.fragment),Fh=g(),re=a("div"),D(en.$$.fragment),Th=g(),$r=a("p"),Ph=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Oh=g(),yr=a("p"),Rh=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Lh=g(),ue=a("p"),Ch=r("Use the "),Er=a("code"),Sh=r("allow_patterns"),Mh=r(" and "),wr=a("code"),Uh=r("ignore_patterns"),Vh=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),tn=a("a"),zh=r("here"),Wh=r(`. If both
`),kr=a("code"),Gh=r("allow_patterns"),Bh=r(" and "),Ar=a("code"),Kh=r("ignore_patterns"),Jh=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Qh=g(),on=a("p"),Xh=r("Uses "),xr=a("code"),Yh=r("HfApi.create_commit"),Zh=r(" under the hood."),ed=g(),D(xo.$$.fragment),td=g(),D(Do.$$.fragment),od=g(),D(Ho.$$.fragment),ad=g(),qo=a("div"),D(an.$$.fragment),nd=g(),Dr=a("p"),sd=r("Call HF API to know \u201Cwhoami\u201D."),tl=g(),_t=a("h3"),Io=a("a"),Hr=a("span"),D(nn.$$.fragment),rd=g(),qr=a("span"),id=r("ModelInfo"),ol=g(),bt=a("div"),D(sn.$$.fragment),ld=g(),Ir=a("p"),cd=r("Info about a model accessible from huggingface.co"),al=g(),vt=a("h3"),No=a("a"),Nr=a("span"),D(rn.$$.fragment),pd=g(),jr=a("span"),gd=r("DatasetInfo"),nl=g(),$t=a("div"),D(ln.$$.fragment),hd=g(),Fr=a("p"),dd=r("Info about a dataset accessible from huggingface.co"),sl=g(),yt=a("h3"),jo=a("a"),Tr=a("span"),D(cn.$$.fragment),ud=g(),Pr=a("span"),fd=r("SpaceInfo"),rl=g(),Ce=a("div"),D(pn.$$.fragment),md=g(),Or=a("p"),_d=r("Info about a Space accessible from huggingface.co"),bd=g(),Rr=a("p"),vd=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),il=g(),Et=a("h3"),Fo=a("a"),Lr=a("span"),D(gn.$$.fragment),$d=g(),Cr=a("span"),yd=r("RepoFile"),ll=g(),wt=a("div"),D(hn.$$.fragment),Ed=g(),Sr=a("p"),wd=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),cl=g(),kt=a("h3"),To=a("a"),Mr=a("span"),D(dn.$$.fragment),kd=g(),Ur=a("span"),Ad=r("CommitInfo"),pl=g(),Se=a("div"),D(un.$$.fragment),xd=g(),Vr=a("p"),Dd=r("Data structure containing information about a newly created commit."),Hd=g(),fn=a("p"),qd=r("Returned by "),gs=a("a"),Id=r("create_commit()"),Nd=r("."),gl=g(),At=a("h2"),Po=a("a"),zr=a("span"),D(mn.$$.fragment),jd=g(),hs=a("span"),Wr=a("code"),Fd=r("create_commit"),Td=r(" API"),hl=g(),Oo=a("p"),Pd=r("Below are the supported values for "),Gr=a("code"),Od=r("CommitOperation()"),Rd=r(":"),dl=g(),fe=a("div"),D(_n.$$.fragment),Ld=g(),Br=a("p"),Cd=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),Sd=g(),ye=a("div"),D(bn.$$.fragment),Md=g(),vn=a("p"),Ud=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Kr=a("code"),Vd=r("path_or_fileobj"),zd=r("."),Wd=g(),$n=a("p"),Gd=r("Triggers "),Jr=a("code"),Bd=r("self.validate"),Kd=r("."),Jd=g(),yn=a("p"),Qd=r("Raises: "),Qr=a("code"),Xd=r("ValueError"),Yd=r(" if self.validate fails"),Zd=g(),D(Ro.$$.fragment),eu=g(),at=a("div"),D(En.$$.fragment),tu=g(),ds=a("p"),ou=r("The base64-encoded content of "),Xr=a("code"),au=r("path_or_fileobj"),nu=g(),us=a("p"),su=r("Returns: "),Yr=a("code"),ru=r("bytes"),iu=g(),Oe=a("div"),D(wn.$$.fragment),lu=g(),kn=a("p"),cu=r("Ensures "),Zr=a("code"),pu=r("path_or_fileobj"),gu=r(" is valid:"),hu=g(),xt=a("ul"),nt=a("li"),du=r("Ensures it is either a "),ei=a("code"),uu=r("str"),fu=r(", "),ti=a("code"),mu=r("bytes"),_u=r(" or an instance of "),oi=a("code"),bu=r("io.BufferedIOBase"),vu=g(),An=a("li"),$u=r("If it is a "),ai=a("code"),yu=r("str"),Eu=r(", ensure that it is a file path and that the file exists"),wu=g(),st=a("li"),ku=r("If it is an instance of "),ni=a("code"),Au=r("io.BufferedIOBase"),xu=r(", ensures it supports "),si=a("code"),Du=r("seek()"),Hu=r(" and "),ri=a("code"),qu=r("tell()"),Iu=g(),Dt=a("p"),Nu=r("Raises: "),ii=a("code"),ju=r("ValueError"),Fu=r(" if "),li=a("code"),Tu=r("path_or_fileobj"),Pu=r(" is not valid"),ul=g(),Ht=a("div"),D(xn.$$.fragment),Ou=g(),ci=a("p"),Ru=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),fl=g(),qt=a("h2"),Lo=a("a"),pi=a("span"),D(Dn.$$.fragment),Lu=g(),gi=a("span"),Cu=r("Hugging Face local storage"),ml=g(),Hn=a("p"),hi=a("code"),Su=r("huggingface_hub"),Mu=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),_l=g(),Co=a("p"),Uu=r("It does this using the "),fs=a("a"),Vu=r("HfFolder"),zu=r(" utility, which saves data at the root of the user."),bl=g(),we=a("div"),D(qn.$$.fragment),Wu=g(),So=a("div"),D(In.$$.fragment),Gu=g(),di=a("p"),Bu=r("Deletes the token from storage. Does not fail if token does not exist."),Ku=g(),rt=a("div"),D(Nn.$$.fragment),Ju=g(),ui=a("p"),Qu=r("Get token or None if not existent."),Xu=g(),jn=a("p"),Yu=r(`Note that a token can be also provided using the
`),fi=a("code"),Zu=r("HUGGING_FACE_HUB_TOKEN"),ef=r(" environment variable."),tf=g(),Mo=a("div"),D(Fn.$$.fragment),of=g(),mi=a("p"),af=r("Save token, creating folder as needed."),vl=g(),It=a("h2"),Uo=a("a"),_i=a("span"),D(Tn.$$.fragment),nf=g(),bi=a("span"),sf=r("Filtering helpers"),$l=g(),Vo=a("p"),rf=r("Some helpers to filter repositories on the Hub are available in the "),vi=a("code"),lf=r("huggingface_hub"),cf=r(" package."),yl=g(),Nt=a("h3"),zo=a("a"),$i=a("span"),D(Pn.$$.fragment),pf=g(),yi=a("span"),gf=r("DatasetFilter"),El=g(),Me=a("div"),D(On.$$.fragment),hf=g(),Ei=a("p"),df=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),uf=g(),D(Wo.$$.fragment),wl=g(),jt=a("h3"),Go=a("a"),wi=a("span"),D(Rn.$$.fragment),ff=g(),ki=a("span"),mf=r("ModelFilter"),kl=g(),Ue=a("div"),D(Ln.$$.fragment),_f=g(),Ai=a("p"),bf=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),vf=g(),D(Bo.$$.fragment),Al=g(),Ft=a("h3"),Ko=a("a"),xi=a("span"),D(Cn.$$.fragment),$f=g(),Di=a("span"),yf=r("DatasetSearchArguments"),xl=g(),Ve=a("div"),D(Sn.$$.fragment),Ef=g(),Hi=a("p"),wf=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),kf=g(),D(Jo.$$.fragment),Dl=g(),Tt=a("h3"),Qo=a("a"),qi=a("span"),D(Mn.$$.fragment),Af=g(),Ii=a("span"),xf=r("ModelSearchArguments"),Hl=g(),ze=a("div"),D(Un.$$.fragment),Df=g(),Ni=a("p"),Hf=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),qf=g(),D(Xo.$$.fragment),this.h()},l(o){const E=J_('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Vn=s(f);c=n(Vn,"A",{id:!0,class:!0,href:!0});var ji=s(c);d=n(ji,"SPAN",{});var Fi=s(d);H(l.$$.fragment,Fi),Fi.forEach(t),ji.forEach(t),u=h(Vn),P=n(Vn,"SPAN",{});var Ti=s(P);v=i(Ti,"Hugging Face Hub API"),Ti.forEach(t),Vn.forEach(t),x=h(o),w=n(o,"P",{});var zn=s(w);y=i(zn,"Below is the documentation for the "),k=n(zn,"CODE",{});var Pi=s(k);O=i(Pi,"HfApi"),Pi.forEach(t),T=i(zn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),zn.forEach(t),R=h(o),_=n(o,"P",{});var Wn=s(_);F=i(Wn,"All methods from the "),M=n(Wn,"CODE",{});var Oi=s(M);W=i(Oi,"HfApi"),Oi.forEach(t),L=i(Wn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Wn.forEach(t),K=h(o),G=n(o,"P",{});var Ri=s(G);A=i(Ri,"The following approach uses the method from the root of the package:"),Ri.forEach(t),U=h(o),H(C.$$.fragment,o),Y=h(o),te=n(o,"P",{});var Gn=s(te);Z=i(Gn,"The following approach uses the "),J=n(Gn,"CODE",{});var Li=s(J);ee=i(Li,"HfApi"),Li.forEach(t),ae=i(Gn," class:"),Gn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var We=s(ne);Je=i(We,"Using the "),de=n(We,"A",{href:!0});var Ci=s(de);ht=i(Ci,"HfApi"),Ci.forEach(t),Qe=i(We,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),ke=n(We,"CODE",{});var Si=s(ke);dt=i(Si,"huggingface-cli login"),Si.forEach(t),ut=i(We," or "),ft=n(We,"A",{href:!0});var Mi=s(ft);ts=i(Mi,"login()"),Mi.forEach(t),la=i(We,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),We.forEach(t),ca=h(o),H(Le.$$.fragment,o),pa=h(o),mt=n(o,"H3",{class:!0});var Bn=s(mt);Pt=n(Bn,"A",{id:!0,class:!0,href:!0});var Ui=s(Pt);Fs=n(Ui,"SPAN",{});var Vi=s(Fs);H(ga.$$.fragment,Vi),Vi.forEach(t),Ui.forEach(t),vc=h(Bn),Ts=n(Bn,"SPAN",{});var zi=s(Ts);$c=i(zi,"HfApi"),zi.forEach(t),Bn.forEach(t),el=h(o),V=n(o,"DIV",{class:!0});var z=s(V);H(ha.$$.fragment,z),yc=h(z),Ae=n(z,"DIV",{class:!0});var Ge=s(Ae);H(da.$$.fragment,Ge),Ec=h(Ge),Ps=n(Ge,"P",{});var Wi=s(Ps);wc=i(Wi,"Closes or re-opens a Discussion or Pull Request."),Wi.forEach(t),kc=h(Ge),H(Ot.$$.fragment,Ge),Ac=h(Ge),H(Rt.$$.fragment,Ge),Ge.forEach(t),xc=h(z),xe=n(z,"DIV",{class:!0});var Be=s(xe);H(ua.$$.fragment,Be),Dc=h(Be),Os=n(Be,"P",{});var Gi=s(Os);Hc=i(Gi,"Creates a new comment on the given Discussion."),Gi.forEach(t),qc=h(Be),H(Lt.$$.fragment,Be),Ic=h(Be),H(Ct.$$.fragment,Be),Be.forEach(t),Nc=h(z),De=n(z,"DIV",{class:!0});var Ke=s(De);H(fa.$$.fragment,Ke),jc=h(Ke),Rs=n(Ke,"P",{});var Bi=s(Rs);Fc=i(Bi,"Creates a commit in the given repo, deleting & uploading files as needed."),Bi.forEach(t),Tc=h(Ke),H(St.$$.fragment,Ke),Pc=h(Ke),H(Mt.$$.fragment,Ke),Ke.forEach(t),Oc=h(z),le=n(z,"DIV",{class:!0});var me=s(le);H(ma.$$.fragment,me),Rc=h(me),Ls=n(me,"P",{});var Ki=s(Ls);Lc=i(Ki,"Creates a Discussion or Pull Request."),Ki.forEach(t),Cc=h(me),_a=n(me,"P",{});var Kn=s(_a);Sc=i(Kn,"Pull Requests created programmatically will be in "),Cs=n(Kn,"CODE",{});var Ji=s(Cs);Mc=i(Ji,'"draft"'),Ji.forEach(t),Uc=i(Kn," status."),Kn.forEach(t),Vc=h(me),ba=n(me,"P",{});var Jn=s(ba);zc=i(Jn,"Creating a Pull Request with changes can also be done at once with "),os=n(Jn,"A",{href:!0});var Qi=s(os);Wc=i(Qi,"HfApi.create_commit()"),Qi.forEach(t),Gc=i(Jn,"."),Jn.forEach(t),Bc=h(me),as=n(me,"P",{});var ms=s(as);Kc=i(ms,"Returns: "),ns=n(ms,"A",{href:!0});var Xi=s(ns);Jc=i(Xi,"DiscussionWithDetails"),Xi.forEach(t),ms.forEach(t),Qc=h(me),H(Ut.$$.fragment,me),me.forEach(t),Xc=h(z),ce=n(z,"DIV",{class:!0});var _e=s(ce);H(va.$$.fragment,_e),Yc=h(_e),$a=n(_e,"P",{});var Qn=s($a);Zc=i(Qn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Ss=n(Qn,"CODE",{});var Yi=s(Ss);ep=i(Yi,'"draft"'),Yi.forEach(t),tp=i(Qn," status."),Qn.forEach(t),op=h(_e),ya=n(_e,"P",{});var Xn=s(ya);ap=i(Xn,"Creating a Pull Request with changes can also be done at once with "),ss=n(Xn,"A",{href:!0});var Zi=s(ss);np=i(Zi,"HfApi.create_commit()"),Zi.forEach(t),sp=i(Xn,";"),Xn.forEach(t),rp=h(_e),Ea=n(_e,"P",{});var Yn=s(Ea);ip=i(Yn,"This is a wrapper around "),Ms=n(Yn,"CODE",{});var Of=s(Ms);lp=i(Of,"HfApi.create_discusssion"),Of.forEach(t),cp=i(Yn,"."),Yn.forEach(t),pp=h(_e),rs=n(_e,"P",{});var If=s(rs);gp=i(If,"Returns: "),is=n(If,"A",{href:!0});var Rf=s(is);hp=i(Rf,"DiscussionWithDetails"),Rf.forEach(t),If.forEach(t),dp=h(_e),H(Vt.$$.fragment,_e),_e.forEach(t),up=h(z),zt=n(z,"DIV",{class:!0});var Il=s(zt);H(wa.$$.fragment,Il),fp=h(Il),Us=n(Il,"P",{});var Lf=s(Us);mp=i(Lf,"Create an empty repo on the HuggingFace Hub."),Lf.forEach(t),Il.forEach(t),_p=h(z),Wt=n(z,"DIV",{class:!0});var Nl=s(Wt);H(ka.$$.fragment,Nl),bp=h(Nl),Vs=n(Nl,"P",{});var Cf=s(Vs);vp=i(Cf,"Tag a given commit of a repo on the Hub."),Cf.forEach(t),Nl.forEach(t),$p=h(z),He=n(z,"DIV",{class:!0});var Yo=s(He);H(Aa.$$.fragment,Yo),yp=h(Yo),zs=n(Yo,"P",{});var Sf=s(zs);Ep=i(Sf,"Get info on one specific dataset on huggingface.co."),Sf.forEach(t),wp=h(Yo),Ws=n(Yo,"P",{});var Mf=s(Ws);kp=i(Mf,"Dataset can be private if you pass an acceptable token."),Mf.forEach(t),Ap=h(Yo),H(Gt.$$.fragment,Yo),Yo.forEach(t),xp=h(z),Xe=n(z,"DIV",{class:!0});var _s=s(Xe);H(xa.$$.fragment,_s),Dp=h(_s),Gs=n(_s,"P",{});var Uf=s(Gs);Hp=i(Uf,"Deletes a file in the given repo."),Uf.forEach(t),qp=h(_s),H(Bt.$$.fragment,_s),_s.forEach(t),Ip=h(z),Ye=n(z,"DIV",{class:!0});var bs=s(Ye);H(Da.$$.fragment,bs),Np=h(bs),Bs=n(bs,"P",{});var Vf=s(Bs);jp=i(Vf,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Vf.forEach(t),Fp=h(bs),H(Kt.$$.fragment,bs),bs.forEach(t),Tp=h(z),Jt=n(z,"DIV",{class:!0});var jl=s(Jt);H(Ha.$$.fragment,jl),Pp=h(jl),Ks=n(jl,"P",{});var zf=s(Ks);Op=i(zf,"Delete a tag from a repo on the Hub."),zf.forEach(t),jl.forEach(t),Rp=h(z),Ze=n(z,"DIV",{class:!0});var vs=s(Ze);H(qa.$$.fragment,vs),Lp=h(vs),Js=n(vs,"P",{});var Wf=s(Js);Cp=i(Wf,"Edits a comment on a Discussion / Pull Request."),Wf.forEach(t),Sp=h(vs),H(Qt.$$.fragment,vs),vs.forEach(t),Mp=h(z),Xt=n(z,"DIV",{class:!0});var Fl=s(Xt);H(Ia.$$.fragment,Fl),Up=h(Fl),Qs=n(Fl,"P",{});var Gf=s(Qs);Vp=i(Gf,"Gets all valid dataset tags as a nested namespace object."),Gf.forEach(t),Fl.forEach(t),zp=h(z),qe=n(z,"DIV",{class:!0});var Zo=s(qe);H(Na.$$.fragment,Zo),Wp=h(Zo),Xs=n(Zo,"P",{});var Bf=s(Xs);Gp=i(Bf,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Bf.forEach(t),Bp=h(Zo),ls=n(Zo,"P",{});var Nf=s(ls);Kp=i(Nf,"Returns: "),cs=n(Nf,"A",{href:!0});var Kf=s(cs);Jp=i(Kf,"DiscussionWithDetails"),Kf.forEach(t),Nf.forEach(t),Qp=h(Zo),H(Yt.$$.fragment,Zo),Zo.forEach(t),Xp=h(z),Zt=n(z,"DIV",{class:!0});var Tl=s(Zt);H(ja.$$.fragment,Tl),Yp=h(Tl),Ys=n(Tl,"P",{});var Jf=s(Ys);Zp=i(Jf,`Returns the repository name for a given model ID and optional
organization.`),Jf.forEach(t),Tl.forEach(t),eg=h(z),eo=n(z,"DIV",{class:!0});var Pl=s(eo);H(Fa.$$.fragment,Pl),tg=h(Pl),Zs=n(Pl,"P",{});var Qf=s(Zs);og=i(Qf,"Gets all valid model tags as a nested namespace object"),Qf.forEach(t),Pl.forEach(t),ag=h(z),be=n(z,"DIV",{class:!0});var it=s(be);H(Ta.$$.fragment,it),ng=h(it),er=n(it,"P",{});var Xf=s(er);sg=i(Xf,"Fetches Discussions and Pull Requests for the given repo."),Xf.forEach(t),rg=h(it),tr=n(it,"P",{});var Yf=s(tr);ig=i(Yf,"Example:"),Yf.forEach(t),lg=h(it),H(to.$$.fragment,it),cg=h(it),H(oo.$$.fragment,it),it.forEach(t),pg=h(z),Ie=n(z,"DIV",{class:!0});var ea=s(Ie);H(Pa.$$.fragment,ea),gg=h(ea),or=n(ea,"P",{});var Zf=s(or);hg=i(Zf,"Hides a comment on a Discussion / Pull Request."),Zf.forEach(t),dg=h(ea),H(ao.$$.fragment,ea),ug=h(ea),H(no.$$.fragment,ea),ea.forEach(t),fg=h(z),Ne=n(z,"DIV",{class:!0});var ta=s(Ne);H(Oa.$$.fragment,ta),mg=h(ta),ar=n(ta,"P",{});var em=s(ar);_g=i(em,"Get the public list of all the datasets on huggingface.co"),em.forEach(t),bg=h(ta),H(so.$$.fragment,ta),vg=h(ta),H(ro.$$.fragment,ta),ta.forEach(t),$g=h(z),io=n(z,"DIV",{class:!0});var Ol=s(io);H(Ra.$$.fragment,Ol),yg=h(Ol),nr=n(Ol,"P",{});var tm=s(nr);Eg=i(tm,"Get the public list of all the metrics on huggingface.co"),tm.forEach(t),Ol.forEach(t),wg=h(z),ve=n(z,"DIV",{class:!0});var lt=s(ve);H(La.$$.fragment,lt),kg=h(lt),sr=n(lt,"P",{});var om=s(sr);Ag=i(om,"Get the public list of all the models on huggingface.co"),om.forEach(t),xg=h(lt),Ca=n(lt,"P",{});var Rl=s(Ca);Dg=i(Rl,"Returns: List of "),ps=n(Rl,"A",{href:!0});var am=s(ps);Hg=i(am,"huggingface_hub.hf_api.ModelInfo"),am.forEach(t),qg=i(Rl," objects"),Rl.forEach(t),Ig=h(lt),H(lo.$$.fragment,lt),Ng=h(lt),H(co.$$.fragment,lt),lt.forEach(t),jg=h(z),po=n(z,"DIV",{class:!0});var Ll=s(po);H(Sa.$$.fragment,Ll),Fg=h(Ll),rr=n(Ll,"P",{});var nm=s(rr);Tg=i(nm,"Get the list of files in a given repo."),nm.forEach(t),Ll.forEach(t),Pg=h(z),go=n(z,"DIV",{class:!0});var Cl=s(go);H(Ma.$$.fragment,Cl),Og=h(Cl),ir=n(Cl,"P",{});var sm=s(ir);Rg=i(sm,"Get the public list of all Spaces on huggingface.co"),sm.forEach(t),Cl.forEach(t),Lg=h(z),et=n(z,"DIV",{class:!0});var $s=s(et);H(Ua.$$.fragment,$s),Cg=h($s),lr=n($s,"P",{});var rm=s(lr);Sg=i(rm,"Merges a Pull Request."),rm.forEach(t),Mg=h($s),H(ho.$$.fragment,$s),$s.forEach(t),Ug=h(z),je=n(z,"DIV",{class:!0});var oa=s(je);H(Va.$$.fragment,oa),Vg=h(oa),cr=n(oa,"P",{});var im=s(cr);zg=i(im,"Get info on one specific model on huggingface.co"),im.forEach(t),Wg=h(oa),pr=n(oa,"P",{});var lm=s(pr);Gg=i(lm,"Model can be private if you pass an acceptable token or are logged in."),lm.forEach(t),Bg=h(oa),H(uo.$$.fragment,oa),oa.forEach(t),Kg=h(z),Fe=n(z,"DIV",{class:!0});var aa=s(Fe);H(za.$$.fragment,aa),Jg=h(aa),gr=n(aa,"P",{});var cm=s(gr);Qg=i(cm,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),cm.forEach(t),Xg=h(aa),Wa=n(aa,"P",{});var Sl=s(Wa);Yg=i(Sl,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ga=n(Sl,"A",{href:!0,rel:!0});var pm=s(Ga);Zg=i(pm,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),pm.forEach(t),eh=i(Sl,"."),Sl.forEach(t),th=h(aa),H(fo.$$.fragment,aa),aa.forEach(t),oh=h(z),Te=n(z,"DIV",{class:!0});var na=s(Te);H(Ba.$$.fragment,na),ah=h(na),hr=n(na,"P",{});var gm=s(hr);nh=i(gm,"Renames a Discussion."),gm.forEach(t),sh=h(na),H(mo.$$.fragment,na),rh=h(na),H(_o.$$.fragment,na),na.forEach(t),ih=h(z),tt=n(z,"DIV",{class:!0});var ys=s(tt);H(Ka.$$.fragment,ys),lh=h(ys),dr=n(ys,"P",{});var hm=s(dr);ch=i(hm,"Get the info object for a given repo of a given type."),hm.forEach(t),ph=h(ys),H(bo.$$.fragment,ys),ys.forEach(t),gh=h(z),vo=n(z,"DIV",{class:!0});var Ml=s(vo);H(Ja.$$.fragment,Ml),hh=h(Ml),ur=n(Ml,"P",{});var dm=s(ur);dh=i(dm,`Saves the passed access token so git can correctly authenticate the
user.`),dm.forEach(t),Ml.forEach(t),uh=h(z),Pe=n(z,"DIV",{class:!0});var sa=s(Pe);H(Qa.$$.fragment,sa),fh=h(sa),fr=n(sa,"P",{});var um=s(fr);mh=i(um,"Get info on one specific Space on huggingface.co."),um.forEach(t),_h=h(sa),mr=n(sa,"P",{});var fm=s(mr);bh=i(fm,"Space can be private if you pass an acceptable token."),fm.forEach(t),vh=h(sa),H($o.$$.fragment,sa),sa.forEach(t),$h=h(z),yo=n(z,"DIV",{class:!0});var Ul=s(yo);H(Xa.$$.fragment,Ul),yh=h(Ul),_r=n(Ul,"P",{});var mm=s(_r);Eh=i(mm,"Resets the user\u2019s access token."),mm.forEach(t),Ul.forEach(t),wh=h(z),ot=n(z,"DIV",{class:!0});var Es=s(ot);H(Ya.$$.fragment,Es),kh=h(Es),br=n(Es,"P",{});var _m=s(br);Ah=i(_m,"Update the visibility setting of a repository."),_m.forEach(t),xh=h(Es),H(Eo.$$.fragment,Es),Es.forEach(t),Dh=h(z),$e=n(z,"DIV",{class:!0});var ct=s($e);H(Za.$$.fragment,ct),Hh=h(ct),vr=n(ct,"P",{});var bm=s(vr);qh=i(bm,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),bm.forEach(t),Ih=h(ct),H(wo.$$.fragment,ct),Nh=h(ct),H(ko.$$.fragment,ct),jh=h(ct),H(Ao.$$.fragment,ct),ct.forEach(t),Fh=h(z),re=n(z,"DIV",{class:!0});var pe=s(re);H(en.$$.fragment,pe),Th=h(pe),$r=n(pe,"P",{});var vm=s($r);Ph=i(vm,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),vm.forEach(t),Oh=h(pe),yr=n(pe,"P",{});var $m=s(yr);Rh=i($m,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),$m.forEach(t),Lh=h(pe),ue=n(pe,"P",{});var Re=s(ue);Ch=i(Re,"Use the "),Er=n(Re,"CODE",{});var ym=s(Er);Sh=i(ym,"allow_patterns"),ym.forEach(t),Mh=i(Re," and "),wr=n(Re,"CODE",{});var Em=s(wr);Uh=i(Em,"ignore_patterns"),Em.forEach(t),Vh=i(Re,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),tn=n(Re,"A",{href:!0,rel:!0});var wm=s(tn);zh=i(wm,"here"),wm.forEach(t),Wh=i(Re,`. If both
`),kr=n(Re,"CODE",{});var km=s(kr);Gh=i(km,"allow_patterns"),km.forEach(t),Bh=i(Re," and "),Ar=n(Re,"CODE",{});var Am=s(Ar);Kh=i(Am,"ignore_patterns"),Am.forEach(t),Jh=i(Re,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Re.forEach(t),Qh=h(pe),on=n(pe,"P",{});var Vl=s(on);Xh=i(Vl,"Uses "),xr=n(Vl,"CODE",{});var xm=s(xr);Yh=i(xm,"HfApi.create_commit"),xm.forEach(t),Zh=i(Vl," under the hood."),Vl.forEach(t),ed=h(pe),H(xo.$$.fragment,pe),td=h(pe),H(Do.$$.fragment,pe),od=h(pe),H(Ho.$$.fragment,pe),pe.forEach(t),ad=h(z),qo=n(z,"DIV",{class:!0});var zl=s(qo);H(an.$$.fragment,zl),nd=h(zl),Dr=n(zl,"P",{});var Dm=s(Dr);sd=i(Dm,"Call HF API to know \u201Cwhoami\u201D."),Dm.forEach(t),zl.forEach(t),z.forEach(t),tl=h(o),_t=n(o,"H3",{class:!0});var Wl=s(_t);Io=n(Wl,"A",{id:!0,class:!0,href:!0});var Hm=s(Io);Hr=n(Hm,"SPAN",{});var qm=s(Hr);H(nn.$$.fragment,qm),qm.forEach(t),Hm.forEach(t),rd=h(Wl),qr=n(Wl,"SPAN",{});var Im=s(qr);id=i(Im,"ModelInfo"),Im.forEach(t),Wl.forEach(t),ol=h(o),bt=n(o,"DIV",{class:!0});var Gl=s(bt);H(sn.$$.fragment,Gl),ld=h(Gl),Ir=n(Gl,"P",{});var Nm=s(Ir);cd=i(Nm,"Info about a model accessible from huggingface.co"),Nm.forEach(t),Gl.forEach(t),al=h(o),vt=n(o,"H3",{class:!0});var Bl=s(vt);No=n(Bl,"A",{id:!0,class:!0,href:!0});var jm=s(No);Nr=n(jm,"SPAN",{});var Fm=s(Nr);H(rn.$$.fragment,Fm),Fm.forEach(t),jm.forEach(t),pd=h(Bl),jr=n(Bl,"SPAN",{});var Tm=s(jr);gd=i(Tm,"DatasetInfo"),Tm.forEach(t),Bl.forEach(t),nl=h(o),$t=n(o,"DIV",{class:!0});var Kl=s($t);H(ln.$$.fragment,Kl),hd=h(Kl),Fr=n(Kl,"P",{});var Pm=s(Fr);dd=i(Pm,"Info about a dataset accessible from huggingface.co"),Pm.forEach(t),Kl.forEach(t),sl=h(o),yt=n(o,"H3",{class:!0});var Jl=s(yt);jo=n(Jl,"A",{id:!0,class:!0,href:!0});var Om=s(jo);Tr=n(Om,"SPAN",{});var Rm=s(Tr);H(cn.$$.fragment,Rm),Rm.forEach(t),Om.forEach(t),ud=h(Jl),Pr=n(Jl,"SPAN",{});var Lm=s(Pr);fd=i(Lm,"SpaceInfo"),Lm.forEach(t),Jl.forEach(t),rl=h(o),Ce=n(o,"DIV",{class:!0});var ws=s(Ce);H(pn.$$.fragment,ws),md=h(ws),Or=n(ws,"P",{});var Cm=s(Or);_d=i(Cm,"Info about a Space accessible from huggingface.co"),Cm.forEach(t),bd=h(ws),Rr=n(ws,"P",{});var Sm=s(Rr);vd=i(Sm,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Sm.forEach(t),ws.forEach(t),il=h(o),Et=n(o,"H3",{class:!0});var Ql=s(Et);Fo=n(Ql,"A",{id:!0,class:!0,href:!0});var Mm=s(Fo);Lr=n(Mm,"SPAN",{});var Um=s(Lr);H(gn.$$.fragment,Um),Um.forEach(t),Mm.forEach(t),$d=h(Ql),Cr=n(Ql,"SPAN",{});var Vm=s(Cr);yd=i(Vm,"RepoFile"),Vm.forEach(t),Ql.forEach(t),ll=h(o),wt=n(o,"DIV",{class:!0});var Xl=s(wt);H(hn.$$.fragment,Xl),Ed=h(Xl),Sr=n(Xl,"P",{});var zm=s(Sr);wd=i(zm,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),zm.forEach(t),Xl.forEach(t),cl=h(o),kt=n(o,"H3",{class:!0});var Yl=s(kt);To=n(Yl,"A",{id:!0,class:!0,href:!0});var Wm=s(To);Mr=n(Wm,"SPAN",{});var Gm=s(Mr);H(dn.$$.fragment,Gm),Gm.forEach(t),Wm.forEach(t),kd=h(Yl),Ur=n(Yl,"SPAN",{});var Bm=s(Ur);Ad=i(Bm,"CommitInfo"),Bm.forEach(t),Yl.forEach(t),pl=h(o),Se=n(o,"DIV",{class:!0});var ks=s(Se);H(un.$$.fragment,ks),xd=h(ks),Vr=n(ks,"P",{});var Km=s(Vr);Dd=i(Km,"Data structure containing information about a newly created commit."),Km.forEach(t),Hd=h(ks),fn=n(ks,"P",{});var Zl=s(fn);qd=i(Zl,"Returned by "),gs=n(Zl,"A",{href:!0});var Jm=s(gs);Id=i(Jm,"create_commit()"),Jm.forEach(t),Nd=i(Zl,"."),Zl.forEach(t),ks.forEach(t),gl=h(o),At=n(o,"H2",{class:!0});var ec=s(At);Po=n(ec,"A",{id:!0,class:!0,href:!0});var Qm=s(Po);zr=n(Qm,"SPAN",{});var Xm=s(zr);H(mn.$$.fragment,Xm),Xm.forEach(t),Qm.forEach(t),jd=h(ec),hs=n(ec,"SPAN",{});var jf=s(hs);Wr=n(jf,"CODE",{});var Ym=s(Wr);Fd=i(Ym,"create_commit"),Ym.forEach(t),Td=i(jf," API"),jf.forEach(t),ec.forEach(t),hl=h(o),Oo=n(o,"P",{});var tc=s(Oo);Pd=i(tc,"Below are the supported values for "),Gr=n(tc,"CODE",{});var Zm=s(Gr);Od=i(Zm,"CommitOperation()"),Zm.forEach(t),Rd=i(tc,":"),tc.forEach(t),dl=h(o),fe=n(o,"DIV",{class:!0});var pt=s(fe);H(_n.$$.fragment,pt),Ld=h(pt),Br=n(pt,"P",{});var e_=s(Br);Cd=i(e_,`Data structure holding necessary info to upload a file
to a repository on the Hub`),e_.forEach(t),Sd=h(pt),ye=n(pt,"DIV",{class:!0});var gt=s(ye);H(bn.$$.fragment,gt),Md=h(gt),vn=n(gt,"P",{});var oc=s(vn);Ud=i(oc,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Kr=n(oc,"CODE",{});var t_=s(Kr);Vd=i(t_,"path_or_fileobj"),t_.forEach(t),zd=i(oc,"."),oc.forEach(t),Wd=h(gt),$n=n(gt,"P",{});var ac=s($n);Gd=i(ac,"Triggers "),Jr=n(ac,"CODE",{});var o_=s(Jr);Bd=i(o_,"self.validate"),o_.forEach(t),Kd=i(ac,"."),ac.forEach(t),Jd=h(gt),yn=n(gt,"P",{});var nc=s(yn);Qd=i(nc,"Raises: "),Qr=n(nc,"CODE",{});var a_=s(Qr);Xd=i(a_,"ValueError"),a_.forEach(t),Yd=i(nc," if self.validate fails"),nc.forEach(t),Zd=h(gt),H(Ro.$$.fragment,gt),gt.forEach(t),eu=h(pt),at=n(pt,"DIV",{class:!0});var As=s(at);H(En.$$.fragment,As),tu=h(As),ds=n(As,"P",{});var Ff=s(ds);ou=i(Ff,"The base64-encoded content of "),Xr=n(Ff,"CODE",{});var n_=s(Xr);au=i(n_,"path_or_fileobj"),n_.forEach(t),Ff.forEach(t),nu=h(As),us=n(As,"P",{});var Tf=s(us);su=i(Tf,"Returns: "),Yr=n(Tf,"CODE",{});var s_=s(Yr);ru=i(s_,"bytes"),s_.forEach(t),Tf.forEach(t),As.forEach(t),iu=h(pt),Oe=n(pt,"DIV",{class:!0});var ra=s(Oe);H(wn.$$.fragment,ra),lu=h(ra),kn=n(ra,"P",{});var sc=s(kn);cu=i(sc,"Ensures "),Zr=n(sc,"CODE",{});var r_=s(Zr);pu=i(r_,"path_or_fileobj"),r_.forEach(t),gu=i(sc," is valid:"),sc.forEach(t),hu=h(ra),xt=n(ra,"UL",{});var xs=s(xt);nt=n(xs,"LI",{});var Zn=s(nt);du=i(Zn,"Ensures it is either a "),ei=n(Zn,"CODE",{});var i_=s(ei);uu=i(i_,"str"),i_.forEach(t),fu=i(Zn,", "),ti=n(Zn,"CODE",{});var l_=s(ti);mu=i(l_,"bytes"),l_.forEach(t),_u=i(Zn," or an instance of "),oi=n(Zn,"CODE",{});var c_=s(oi);bu=i(c_,"io.BufferedIOBase"),c_.forEach(t),Zn.forEach(t),vu=h(xs),An=n(xs,"LI",{});var rc=s(An);$u=i(rc,"If it is a "),ai=n(rc,"CODE",{});var p_=s(ai);yu=i(p_,"str"),p_.forEach(t),Eu=i(rc,", ensure that it is a file path and that the file exists"),rc.forEach(t),wu=h(xs),st=n(xs,"LI",{});var es=s(st);ku=i(es,"If it is an instance of "),ni=n(es,"CODE",{});var g_=s(ni);Au=i(g_,"io.BufferedIOBase"),g_.forEach(t),xu=i(es,", ensures it supports "),si=n(es,"CODE",{});var h_=s(si);Du=i(h_,"seek()"),h_.forEach(t),Hu=i(es," and "),ri=n(es,"CODE",{});var d_=s(ri);qu=i(d_,"tell()"),d_.forEach(t),es.forEach(t),xs.forEach(t),Iu=h(ra),Dt=n(ra,"P",{});var Ds=s(Dt);Nu=i(Ds,"Raises: "),ii=n(Ds,"CODE",{});var u_=s(ii);ju=i(u_,"ValueError"),u_.forEach(t),Fu=i(Ds," if "),li=n(Ds,"CODE",{});var f_=s(li);Tu=i(f_,"path_or_fileobj"),f_.forEach(t),Pu=i(Ds," is not valid"),Ds.forEach(t),ra.forEach(t),pt.forEach(t),ul=h(o),Ht=n(o,"DIV",{class:!0});var ic=s(Ht);H(xn.$$.fragment,ic),Ou=h(ic),ci=n(ic,"P",{});var m_=s(ci);Ru=i(m_,`Data structure holding necessary info to delete
a file from a repository on the Hub`),m_.forEach(t),ic.forEach(t),fl=h(o),qt=n(o,"H2",{class:!0});var lc=s(qt);Lo=n(lc,"A",{id:!0,class:!0,href:!0});var __=s(Lo);pi=n(__,"SPAN",{});var b_=s(pi);H(Dn.$$.fragment,b_),b_.forEach(t),__.forEach(t),Lu=h(lc),gi=n(lc,"SPAN",{});var v_=s(gi);Cu=i(v_,"Hugging Face local storage"),v_.forEach(t),lc.forEach(t),ml=h(o),Hn=n(o,"P",{});var Pf=s(Hn);hi=n(Pf,"CODE",{});var $_=s(hi);Su=i($_,"huggingface_hub"),$_.forEach(t),Mu=i(Pf,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Pf.forEach(t),_l=h(o),Co=n(o,"P",{});var cc=s(Co);Uu=i(cc,"It does this using the "),fs=n(cc,"A",{href:!0});var y_=s(fs);Vu=i(y_,"HfFolder"),y_.forEach(t),zu=i(cc," utility, which saves data at the root of the user."),cc.forEach(t),bl=h(o),we=n(o,"DIV",{class:!0});var ia=s(we);H(qn.$$.fragment,ia),Wu=h(ia),So=n(ia,"DIV",{class:!0});var pc=s(So);H(In.$$.fragment,pc),Gu=h(pc),di=n(pc,"P",{});var E_=s(di);Bu=i(E_,"Deletes the token from storage. Does not fail if token does not exist."),E_.forEach(t),pc.forEach(t),Ku=h(ia),rt=n(ia,"DIV",{class:!0});var Hs=s(rt);H(Nn.$$.fragment,Hs),Ju=h(Hs),ui=n(Hs,"P",{});var w_=s(ui);Qu=i(w_,"Get token or None if not existent."),w_.forEach(t),Xu=h(Hs),jn=n(Hs,"P",{});var gc=s(jn);Yu=i(gc,`Note that a token can be also provided using the
`),fi=n(gc,"CODE",{});var k_=s(fi);Zu=i(k_,"HUGGING_FACE_HUB_TOKEN"),k_.forEach(t),ef=i(gc," environment variable."),gc.forEach(t),Hs.forEach(t),tf=h(ia),Mo=n(ia,"DIV",{class:!0});var hc=s(Mo);H(Fn.$$.fragment,hc),of=h(hc),mi=n(hc,"P",{});var A_=s(mi);af=i(A_,"Save token, creating folder as needed."),A_.forEach(t),hc.forEach(t),ia.forEach(t),vl=h(o),It=n(o,"H2",{class:!0});var dc=s(It);Uo=n(dc,"A",{id:!0,class:!0,href:!0});var x_=s(Uo);_i=n(x_,"SPAN",{});var D_=s(_i);H(Tn.$$.fragment,D_),D_.forEach(t),x_.forEach(t),nf=h(dc),bi=n(dc,"SPAN",{});var H_=s(bi);sf=i(H_,"Filtering helpers"),H_.forEach(t),dc.forEach(t),$l=h(o),Vo=n(o,"P",{});var uc=s(Vo);rf=i(uc,"Some helpers to filter repositories on the Hub are available in the "),vi=n(uc,"CODE",{});var q_=s(vi);lf=i(q_,"huggingface_hub"),q_.forEach(t),cf=i(uc," package."),uc.forEach(t),yl=h(o),Nt=n(o,"H3",{class:!0});var fc=s(Nt);zo=n(fc,"A",{id:!0,class:!0,href:!0});var I_=s(zo);$i=n(I_,"SPAN",{});var N_=s($i);H(Pn.$$.fragment,N_),N_.forEach(t),I_.forEach(t),pf=h(fc),yi=n(fc,"SPAN",{});var j_=s(yi);gf=i(j_,"DatasetFilter"),j_.forEach(t),fc.forEach(t),El=h(o),Me=n(o,"DIV",{class:!0});var qs=s(Me);H(On.$$.fragment,qs),hf=h(qs),Ei=n(qs,"P",{});var F_=s(Ei);df=i(F_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),F_.forEach(t),uf=h(qs),H(Wo.$$.fragment,qs),qs.forEach(t),wl=h(o),jt=n(o,"H3",{class:!0});var mc=s(jt);Go=n(mc,"A",{id:!0,class:!0,href:!0});var T_=s(Go);wi=n(T_,"SPAN",{});var P_=s(wi);H(Rn.$$.fragment,P_),P_.forEach(t),T_.forEach(t),ff=h(mc),ki=n(mc,"SPAN",{});var O_=s(ki);mf=i(O_,"ModelFilter"),O_.forEach(t),mc.forEach(t),kl=h(o),Ue=n(o,"DIV",{class:!0});var Is=s(Ue);H(Ln.$$.fragment,Is),_f=h(Is),Ai=n(Is,"P",{});var R_=s(Ai);bf=i(R_,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),R_.forEach(t),vf=h(Is),H(Bo.$$.fragment,Is),Is.forEach(t),Al=h(o),Ft=n(o,"H3",{class:!0});var _c=s(Ft);Ko=n(_c,"A",{id:!0,class:!0,href:!0});var L_=s(Ko);xi=n(L_,"SPAN",{});var C_=s(xi);H(Cn.$$.fragment,C_),C_.forEach(t),L_.forEach(t),$f=h(_c),Di=n(_c,"SPAN",{});var S_=s(Di);yf=i(S_,"DatasetSearchArguments"),S_.forEach(t),_c.forEach(t),xl=h(o),Ve=n(o,"DIV",{class:!0});var Ns=s(Ve);H(Sn.$$.fragment,Ns),Ef=h(Ns),Hi=n(Ns,"P",{});var M_=s(Hi);wf=i(M_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),M_.forEach(t),kf=h(Ns),H(Jo.$$.fragment,Ns),Ns.forEach(t),Dl=h(o),Tt=n(o,"H3",{class:!0});var bc=s(Tt);Qo=n(bc,"A",{id:!0,class:!0,href:!0});var U_=s(Qo);qi=n(U_,"SPAN",{});var V_=s(qi);H(Mn.$$.fragment,V_),V_.forEach(t),U_.forEach(t),Af=h(bc),Ii=n(bc,"SPAN",{});var z_=s(Ii);xf=i(z_,"ModelSearchArguments"),z_.forEach(t),bc.forEach(t),Hl=h(o),ze=n(o,"DIV",{class:!0});var js=s(ze);H(Un.$$.fragment,js),Df=h(js),Ni=n(js,"P",{});var W_=s(Ni);Hf=i(W_,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),W_.forEach(t),qf=h(js),H(Xo.$$.fragment,js),js.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Lb)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(ft,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Pt,"id","huggingface_hub.HfApi"),m(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pt,"href","#huggingface_hub.HfApi"),m(mt,"class","relative group"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(os,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(ns,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ss,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(is,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(cs,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ps,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),m(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ga,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Ga,"rel","nofollow"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(tn,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.hf_api.ModelInfo"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.hf_api.ModelInfo"),m(_t,"class","relative group"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","huggingface_hub.hf_api.DatasetInfo"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#huggingface_hub.hf_api.DatasetInfo"),m(vt,"class","relative group"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","huggingface_hub.hf_api.SpaceInfo"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#huggingface_hub.hf_api.SpaceInfo"),m(yt,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.hf_api.RepoFile"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.hf_api.RepoFile"),m(Et,"class","relative group"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","huggingface_hub.CommitInfo"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#huggingface_hub.CommitInfo"),m(kt,"class","relative group"),m(gs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Po,"id","huggingface_hub.CommitOperationAdd"),m(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Po,"href","#huggingface_hub.CommitOperationAdd"),m(At,"class","relative group"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","huggingface_hub.HfFolder"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#huggingface_hub.HfFolder"),m(qt,"class","relative group"),m(fs,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","filtering-helpers"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#filtering-helpers"),m(It,"class","relative group"),m(zo,"id","huggingface_hub.DatasetFilter"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#huggingface_hub.DatasetFilter"),m(Nt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","huggingface_hub.ModelFilter"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#huggingface_hub.ModelFilter"),m(jt,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"id","huggingface_hub.DatasetSearchArguments"),m(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ko,"href","#huggingface_hub.DatasetSearchArguments"),m(Ft,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","huggingface_hub.ModelSearchArguments"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#huggingface_hub.ModelSearchArguments"),m(Tt,"class","relative group"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,d),q(l,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,R,E),$(o,_,E),e(_,F),e(_,M),e(M,W),e(_,L),$(o,K,E),$(o,G,E),e(G,A),$(o,U,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Je),e(ne,de),e(de,ht),e(ne,Qe),e(ne,ke),e(ke,dt),e(ne,ut),e(ne,ft),e(ft,ts),e(ne,la),$(o,ca,E),q(Le,o,E),$(o,pa,E),$(o,mt,E),e(mt,Pt),e(Pt,Fs),q(ga,Fs,null),e(mt,vc),e(mt,Ts),e(Ts,$c),$(o,el,E),$(o,V,E),q(ha,V,null),e(V,yc),e(V,Ae),q(da,Ae,null),e(Ae,Ec),e(Ae,Ps),e(Ps,wc),e(Ae,kc),q(Ot,Ae,null),e(Ae,Ac),q(Rt,Ae,null),e(V,xc),e(V,xe),q(ua,xe,null),e(xe,Dc),e(xe,Os),e(Os,Hc),e(xe,qc),q(Lt,xe,null),e(xe,Ic),q(Ct,xe,null),e(V,Nc),e(V,De),q(fa,De,null),e(De,jc),e(De,Rs),e(Rs,Fc),e(De,Tc),q(St,De,null),e(De,Pc),q(Mt,De,null),e(V,Oc),e(V,le),q(ma,le,null),e(le,Rc),e(le,Ls),e(Ls,Lc),e(le,Cc),e(le,_a),e(_a,Sc),e(_a,Cs),e(Cs,Mc),e(_a,Uc),e(le,Vc),e(le,ba),e(ba,zc),e(ba,os),e(os,Wc),e(ba,Gc),e(le,Bc),e(le,as),e(as,Kc),e(as,ns),e(ns,Jc),e(le,Qc),q(Ut,le,null),e(V,Xc),e(V,ce),q(va,ce,null),e(ce,Yc),e(ce,$a),e($a,Zc),e($a,Ss),e(Ss,ep),e($a,tp),e(ce,op),e(ce,ya),e(ya,ap),e(ya,ss),e(ss,np),e(ya,sp),e(ce,rp),e(ce,Ea),e(Ea,ip),e(Ea,Ms),e(Ms,lp),e(Ea,cp),e(ce,pp),e(ce,rs),e(rs,gp),e(rs,is),e(is,hp),e(ce,dp),q(Vt,ce,null),e(V,up),e(V,zt),q(wa,zt,null),e(zt,fp),e(zt,Us),e(Us,mp),e(V,_p),e(V,Wt),q(ka,Wt,null),e(Wt,bp),e(Wt,Vs),e(Vs,vp),e(V,$p),e(V,He),q(Aa,He,null),e(He,yp),e(He,zs),e(zs,Ep),e(He,wp),e(He,Ws),e(Ws,kp),e(He,Ap),q(Gt,He,null),e(V,xp),e(V,Xe),q(xa,Xe,null),e(Xe,Dp),e(Xe,Gs),e(Gs,Hp),e(Xe,qp),q(Bt,Xe,null),e(V,Ip),e(V,Ye),q(Da,Ye,null),e(Ye,Np),e(Ye,Bs),e(Bs,jp),e(Ye,Fp),q(Kt,Ye,null),e(V,Tp),e(V,Jt),q(Ha,Jt,null),e(Jt,Pp),e(Jt,Ks),e(Ks,Op),e(V,Rp),e(V,Ze),q(qa,Ze,null),e(Ze,Lp),e(Ze,Js),e(Js,Cp),e(Ze,Sp),q(Qt,Ze,null),e(V,Mp),e(V,Xt),q(Ia,Xt,null),e(Xt,Up),e(Xt,Qs),e(Qs,Vp),e(V,zp),e(V,qe),q(Na,qe,null),e(qe,Wp),e(qe,Xs),e(Xs,Gp),e(qe,Bp),e(qe,ls),e(ls,Kp),e(ls,cs),e(cs,Jp),e(qe,Qp),q(Yt,qe,null),e(V,Xp),e(V,Zt),q(ja,Zt,null),e(Zt,Yp),e(Zt,Ys),e(Ys,Zp),e(V,eg),e(V,eo),q(Fa,eo,null),e(eo,tg),e(eo,Zs),e(Zs,og),e(V,ag),e(V,be),q(Ta,be,null),e(be,ng),e(be,er),e(er,sg),e(be,rg),e(be,tr),e(tr,ig),e(be,lg),q(to,be,null),e(be,cg),q(oo,be,null),e(V,pg),e(V,Ie),q(Pa,Ie,null),e(Ie,gg),e(Ie,or),e(or,hg),e(Ie,dg),q(ao,Ie,null),e(Ie,ug),q(no,Ie,null),e(V,fg),e(V,Ne),q(Oa,Ne,null),e(Ne,mg),e(Ne,ar),e(ar,_g),e(Ne,bg),q(so,Ne,null),e(Ne,vg),q(ro,Ne,null),e(V,$g),e(V,io),q(Ra,io,null),e(io,yg),e(io,nr),e(nr,Eg),e(V,wg),e(V,ve),q(La,ve,null),e(ve,kg),e(ve,sr),e(sr,Ag),e(ve,xg),e(ve,Ca),e(Ca,Dg),e(Ca,ps),e(ps,Hg),e(Ca,qg),e(ve,Ig),q(lo,ve,null),e(ve,Ng),q(co,ve,null),e(V,jg),e(V,po),q(Sa,po,null),e(po,Fg),e(po,rr),e(rr,Tg),e(V,Pg),e(V,go),q(Ma,go,null),e(go,Og),e(go,ir),e(ir,Rg),e(V,Lg),e(V,et),q(Ua,et,null),e(et,Cg),e(et,lr),e(lr,Sg),e(et,Mg),q(ho,et,null),e(V,Ug),e(V,je),q(Va,je,null),e(je,Vg),e(je,cr),e(cr,zg),e(je,Wg),e(je,pr),e(pr,Gg),e(je,Bg),q(uo,je,null),e(V,Kg),e(V,Fe),q(za,Fe,null),e(Fe,Jg),e(Fe,gr),e(gr,Qg),e(Fe,Xg),e(Fe,Wa),e(Wa,Yg),e(Wa,Ga),e(Ga,Zg),e(Wa,eh),e(Fe,th),q(fo,Fe,null),e(V,oh),e(V,Te),q(Ba,Te,null),e(Te,ah),e(Te,hr),e(hr,nh),e(Te,sh),q(mo,Te,null),e(Te,rh),q(_o,Te,null),e(V,ih),e(V,tt),q(Ka,tt,null),e(tt,lh),e(tt,dr),e(dr,ch),e(tt,ph),q(bo,tt,null),e(V,gh),e(V,vo),q(Ja,vo,null),e(vo,hh),e(vo,ur),e(ur,dh),e(V,uh),e(V,Pe),q(Qa,Pe,null),e(Pe,fh),e(Pe,fr),e(fr,mh),e(Pe,_h),e(Pe,mr),e(mr,bh),e(Pe,vh),q($o,Pe,null),e(V,$h),e(V,yo),q(Xa,yo,null),e(yo,yh),e(yo,_r),e(_r,Eh),e(V,wh),e(V,ot),q(Ya,ot,null),e(ot,kh),e(ot,br),e(br,Ah),e(ot,xh),q(Eo,ot,null),e(V,Dh),e(V,$e),q(Za,$e,null),e($e,Hh),e($e,vr),e(vr,qh),e($e,Ih),q(wo,$e,null),e($e,Nh),q(ko,$e,null),e($e,jh),q(Ao,$e,null),e(V,Fh),e(V,re),q(en,re,null),e(re,Th),e(re,$r),e($r,Ph),e(re,Oh),e(re,yr),e(yr,Rh),e(re,Lh),e(re,ue),e(ue,Ch),e(ue,Er),e(Er,Sh),e(ue,Mh),e(ue,wr),e(wr,Uh),e(ue,Vh),e(ue,tn),e(tn,zh),e(ue,Wh),e(ue,kr),e(kr,Gh),e(ue,Bh),e(ue,Ar),e(Ar,Kh),e(ue,Jh),e(re,Qh),e(re,on),e(on,Xh),e(on,xr),e(xr,Yh),e(on,Zh),e(re,ed),q(xo,re,null),e(re,td),q(Do,re,null),e(re,od),q(Ho,re,null),e(V,ad),e(V,qo),q(an,qo,null),e(qo,nd),e(qo,Dr),e(Dr,sd),$(o,tl,E),$(o,_t,E),e(_t,Io),e(Io,Hr),q(nn,Hr,null),e(_t,rd),e(_t,qr),e(qr,id),$(o,ol,E),$(o,bt,E),q(sn,bt,null),e(bt,ld),e(bt,Ir),e(Ir,cd),$(o,al,E),$(o,vt,E),e(vt,No),e(No,Nr),q(rn,Nr,null),e(vt,pd),e(vt,jr),e(jr,gd),$(o,nl,E),$(o,$t,E),q(ln,$t,null),e($t,hd),e($t,Fr),e(Fr,dd),$(o,sl,E),$(o,yt,E),e(yt,jo),e(jo,Tr),q(cn,Tr,null),e(yt,ud),e(yt,Pr),e(Pr,fd),$(o,rl,E),$(o,Ce,E),q(pn,Ce,null),e(Ce,md),e(Ce,Or),e(Or,_d),e(Ce,bd),e(Ce,Rr),e(Rr,vd),$(o,il,E),$(o,Et,E),e(Et,Fo),e(Fo,Lr),q(gn,Lr,null),e(Et,$d),e(Et,Cr),e(Cr,yd),$(o,ll,E),$(o,wt,E),q(hn,wt,null),e(wt,Ed),e(wt,Sr),e(Sr,wd),$(o,cl,E),$(o,kt,E),e(kt,To),e(To,Mr),q(dn,Mr,null),e(kt,kd),e(kt,Ur),e(Ur,Ad),$(o,pl,E),$(o,Se,E),q(un,Se,null),e(Se,xd),e(Se,Vr),e(Vr,Dd),e(Se,Hd),e(Se,fn),e(fn,qd),e(fn,gs),e(gs,Id),e(fn,Nd),$(o,gl,E),$(o,At,E),e(At,Po),e(Po,zr),q(mn,zr,null),e(At,jd),e(At,hs),e(hs,Wr),e(Wr,Fd),e(hs,Td),$(o,hl,E),$(o,Oo,E),e(Oo,Pd),e(Oo,Gr),e(Gr,Od),e(Oo,Rd),$(o,dl,E),$(o,fe,E),q(_n,fe,null),e(fe,Ld),e(fe,Br),e(Br,Cd),e(fe,Sd),e(fe,ye),q(bn,ye,null),e(ye,Md),e(ye,vn),e(vn,Ud),e(vn,Kr),e(Kr,Vd),e(vn,zd),e(ye,Wd),e(ye,$n),e($n,Gd),e($n,Jr),e(Jr,Bd),e($n,Kd),e(ye,Jd),e(ye,yn),e(yn,Qd),e(yn,Qr),e(Qr,Xd),e(yn,Yd),e(ye,Zd),q(Ro,ye,null),e(fe,eu),e(fe,at),q(En,at,null),e(at,tu),e(at,ds),e(ds,ou),e(ds,Xr),e(Xr,au),e(at,nu),e(at,us),e(us,su),e(us,Yr),e(Yr,ru),e(fe,iu),e(fe,Oe),q(wn,Oe,null),e(Oe,lu),e(Oe,kn),e(kn,cu),e(kn,Zr),e(Zr,pu),e(kn,gu),e(Oe,hu),e(Oe,xt),e(xt,nt),e(nt,du),e(nt,ei),e(ei,uu),e(nt,fu),e(nt,ti),e(ti,mu),e(nt,_u),e(nt,oi),e(oi,bu),e(xt,vu),e(xt,An),e(An,$u),e(An,ai),e(ai,yu),e(An,Eu),e(xt,wu),e(xt,st),e(st,ku),e(st,ni),e(ni,Au),e(st,xu),e(st,si),e(si,Du),e(st,Hu),e(st,ri),e(ri,qu),e(Oe,Iu),e(Oe,Dt),e(Dt,Nu),e(Dt,ii),e(ii,ju),e(Dt,Fu),e(Dt,li),e(li,Tu),e(Dt,Pu),$(o,ul,E),$(o,Ht,E),q(xn,Ht,null),e(Ht,Ou),e(Ht,ci),e(ci,Ru),$(o,fl,E),$(o,qt,E),e(qt,Lo),e(Lo,pi),q(Dn,pi,null),e(qt,Lu),e(qt,gi),e(gi,Cu),$(o,ml,E),$(o,Hn,E),e(Hn,hi),e(hi,Su),e(Hn,Mu),$(o,_l,E),$(o,Co,E),e(Co,Uu),e(Co,fs),e(fs,Vu),e(Co,zu),$(o,bl,E),$(o,we,E),q(qn,we,null),e(we,Wu),e(we,So),q(In,So,null),e(So,Gu),e(So,di),e(di,Bu),e(we,Ku),e(we,rt),q(Nn,rt,null),e(rt,Ju),e(rt,ui),e(ui,Qu),e(rt,Xu),e(rt,jn),e(jn,Yu),e(jn,fi),e(fi,Zu),e(jn,ef),e(we,tf),e(we,Mo),q(Fn,Mo,null),e(Mo,of),e(Mo,mi),e(mi,af),$(o,vl,E),$(o,It,E),e(It,Uo),e(Uo,_i),q(Tn,_i,null),e(It,nf),e(It,bi),e(bi,sf),$(o,$l,E),$(o,Vo,E),e(Vo,rf),e(Vo,vi),e(vi,lf),e(Vo,cf),$(o,yl,E),$(o,Nt,E),e(Nt,zo),e(zo,$i),q(Pn,$i,null),e(Nt,pf),e(Nt,yi),e(yi,gf),$(o,El,E),$(o,Me,E),q(On,Me,null),e(Me,hf),e(Me,Ei),e(Ei,df),e(Me,uf),q(Wo,Me,null),$(o,wl,E),$(o,jt,E),e(jt,Go),e(Go,wi),q(Rn,wi,null),e(jt,ff),e(jt,ki),e(ki,mf),$(o,kl,E),$(o,Ue,E),q(Ln,Ue,null),e(Ue,_f),e(Ue,Ai),e(Ai,bf),e(Ue,vf),q(Bo,Ue,null),$(o,Al,E),$(o,Ft,E),e(Ft,Ko),e(Ko,xi),q(Cn,xi,null),e(Ft,$f),e(Ft,Di),e(Di,yf),$(o,xl,E),$(o,Ve,E),q(Sn,Ve,null),e(Ve,Ef),e(Ve,Hi),e(Hi,wf),e(Ve,kf),q(Jo,Ve,null),$(o,Dl,E),$(o,Tt,E),e(Tt,Qo),e(Qo,qi),q(Mn,qi,null),e(Tt,Af),e(Tt,Ii),e(Ii,xf),$(o,Hl,E),$(o,ze,E),q(Un,ze,null),e(ze,Df),e(ze,Ni),e(Ni,Hf),e(ze,qf),q(Xo,ze,null),ql=!0},p(o,[E]){const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),Ot.$set(Vn);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),Rt.$set(ji);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),Lt.$set(Fi);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),Ct.$set(Ti);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),St.$set(zn);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),Mt.$set(Pi);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),Ut.$set(Wn);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),Vt.$set(Oi);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),Gt.$set(Ri);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),Bt.$set(Gn);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),Kt.$set(Li);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),Qt.$set(We);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),Yt.$set(Ci);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),to.$set(Si);const Mi={};E&2&&(Mi.$$scope={dirty:E,ctx:o}),oo.$set(Mi);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),ao.$set(Bn);const Ui={};E&2&&(Ui.$$scope={dirty:E,ctx:o}),no.$set(Ui);const Vi={};E&2&&(Vi.$$scope={dirty:E,ctx:o}),so.$set(Vi);const zi={};E&2&&(zi.$$scope={dirty:E,ctx:o}),ro.$set(zi);const z={};E&2&&(z.$$scope={dirty:E,ctx:o}),lo.$set(z);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),co.$set(Ge);const Wi={};E&2&&(Wi.$$scope={dirty:E,ctx:o}),ho.$set(Wi);const Be={};E&2&&(Be.$$scope={dirty:E,ctx:o}),uo.$set(Be);const Gi={};E&2&&(Gi.$$scope={dirty:E,ctx:o}),fo.$set(Gi);const Ke={};E&2&&(Ke.$$scope={dirty:E,ctx:o}),mo.$set(Ke);const Bi={};E&2&&(Bi.$$scope={dirty:E,ctx:o}),_o.$set(Bi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),bo.$set(me);const Ki={};E&2&&(Ki.$$scope={dirty:E,ctx:o}),$o.$set(Ki);const Kn={};E&2&&(Kn.$$scope={dirty:E,ctx:o}),Eo.$set(Kn);const Ji={};E&2&&(Ji.$$scope={dirty:E,ctx:o}),wo.$set(Ji);const Jn={};E&2&&(Jn.$$scope={dirty:E,ctx:o}),ko.$set(Jn);const Qi={};E&2&&(Qi.$$scope={dirty:E,ctx:o}),Ao.$set(Qi);const ms={};E&2&&(ms.$$scope={dirty:E,ctx:o}),xo.$set(ms);const Xi={};E&2&&(Xi.$$scope={dirty:E,ctx:o}),Do.$set(Xi);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),Ho.$set(_e);const Qn={};E&2&&(Qn.$$scope={dirty:E,ctx:o}),Ro.$set(Qn);const Yi={};E&2&&(Yi.$$scope={dirty:E,ctx:o}),Wo.$set(Yi);const Xn={};E&2&&(Xn.$$scope={dirty:E,ctx:o}),Bo.$set(Xn);const Zi={};E&2&&(Zi.$$scope={dirty:E,ctx:o}),Jo.$set(Zi);const Yn={};E&2&&(Yn.$$scope={dirty:E,ctx:o}),Xo.$set(Yn)},i(o){ql||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Le.$$.fragment,o),I(ga.$$.fragment,o),I(ha.$$.fragment,o),I(da.$$.fragment,o),I(Ot.$$.fragment,o),I(Rt.$$.fragment,o),I(ua.$$.fragment,o),I(Lt.$$.fragment,o),I(Ct.$$.fragment,o),I(fa.$$.fragment,o),I(St.$$.fragment,o),I(Mt.$$.fragment,o),I(ma.$$.fragment,o),I(Ut.$$.fragment,o),I(va.$$.fragment,o),I(Vt.$$.fragment,o),I(wa.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(Gt.$$.fragment,o),I(xa.$$.fragment,o),I(Bt.$$.fragment,o),I(Da.$$.fragment,o),I(Kt.$$.fragment,o),I(Ha.$$.fragment,o),I(qa.$$.fragment,o),I(Qt.$$.fragment,o),I(Ia.$$.fragment,o),I(Na.$$.fragment,o),I(Yt.$$.fragment,o),I(ja.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(to.$$.fragment,o),I(oo.$$.fragment,o),I(Pa.$$.fragment,o),I(ao.$$.fragment,o),I(no.$$.fragment,o),I(Oa.$$.fragment,o),I(so.$$.fragment,o),I(ro.$$.fragment,o),I(Ra.$$.fragment,o),I(La.$$.fragment,o),I(lo.$$.fragment,o),I(co.$$.fragment,o),I(Sa.$$.fragment,o),I(Ma.$$.fragment,o),I(Ua.$$.fragment,o),I(ho.$$.fragment,o),I(Va.$$.fragment,o),I(uo.$$.fragment,o),I(za.$$.fragment,o),I(fo.$$.fragment,o),I(Ba.$$.fragment,o),I(mo.$$.fragment,o),I(_o.$$.fragment,o),I(Ka.$$.fragment,o),I(bo.$$.fragment,o),I(Ja.$$.fragment,o),I(Qa.$$.fragment,o),I($o.$$.fragment,o),I(Xa.$$.fragment,o),I(Ya.$$.fragment,o),I(Eo.$$.fragment,o),I(Za.$$.fragment,o),I(wo.$$.fragment,o),I(ko.$$.fragment,o),I(Ao.$$.fragment,o),I(en.$$.fragment,o),I(xo.$$.fragment,o),I(Do.$$.fragment,o),I(Ho.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(cn.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(hn.$$.fragment,o),I(dn.$$.fragment,o),I(un.$$.fragment,o),I(mn.$$.fragment,o),I(_n.$$.fragment,o),I(bn.$$.fragment,o),I(Ro.$$.fragment,o),I(En.$$.fragment,o),I(wn.$$.fragment,o),I(xn.$$.fragment,o),I(Dn.$$.fragment,o),I(qn.$$.fragment,o),I(In.$$.fragment,o),I(Nn.$$.fragment,o),I(Fn.$$.fragment,o),I(Tn.$$.fragment,o),I(Pn.$$.fragment,o),I(On.$$.fragment,o),I(Wo.$$.fragment,o),I(Rn.$$.fragment,o),I(Ln.$$.fragment,o),I(Bo.$$.fragment,o),I(Cn.$$.fragment,o),I(Sn.$$.fragment,o),I(Jo.$$.fragment,o),I(Mn.$$.fragment,o),I(Un.$$.fragment,o),I(Xo.$$.fragment,o),ql=!0)},o(o){N(l.$$.fragment,o),N(C.$$.fragment,o),N(X.$$.fragment,o),N(Le.$$.fragment,o),N(ga.$$.fragment,o),N(ha.$$.fragment,o),N(da.$$.fragment,o),N(Ot.$$.fragment,o),N(Rt.$$.fragment,o),N(ua.$$.fragment,o),N(Lt.$$.fragment,o),N(Ct.$$.fragment,o),N(fa.$$.fragment,o),N(St.$$.fragment,o),N(Mt.$$.fragment,o),N(ma.$$.fragment,o),N(Ut.$$.fragment,o),N(va.$$.fragment,o),N(Vt.$$.fragment,o),N(wa.$$.fragment,o),N(ka.$$.fragment,o),N(Aa.$$.fragment,o),N(Gt.$$.fragment,o),N(xa.$$.fragment,o),N(Bt.$$.fragment,o),N(Da.$$.fragment,o),N(Kt.$$.fragment,o),N(Ha.$$.fragment,o),N(qa.$$.fragment,o),N(Qt.$$.fragment,o),N(Ia.$$.fragment,o),N(Na.$$.fragment,o),N(Yt.$$.fragment,o),N(ja.$$.fragment,o),N(Fa.$$.fragment,o),N(Ta.$$.fragment,o),N(to.$$.fragment,o),N(oo.$$.fragment,o),N(Pa.$$.fragment,o),N(ao.$$.fragment,o),N(no.$$.fragment,o),N(Oa.$$.fragment,o),N(so.$$.fragment,o),N(ro.$$.fragment,o),N(Ra.$$.fragment,o),N(La.$$.fragment,o),N(lo.$$.fragment,o),N(co.$$.fragment,o),N(Sa.$$.fragment,o),N(Ma.$$.fragment,o),N(Ua.$$.fragment,o),N(ho.$$.fragment,o),N(Va.$$.fragment,o),N(uo.$$.fragment,o),N(za.$$.fragment,o),N(fo.$$.fragment,o),N(Ba.$$.fragment,o),N(mo.$$.fragment,o),N(_o.$$.fragment,o),N(Ka.$$.fragment,o),N(bo.$$.fragment,o),N(Ja.$$.fragment,o),N(Qa.$$.fragment,o),N($o.$$.fragment,o),N(Xa.$$.fragment,o),N(Ya.$$.fragment,o),N(Eo.$$.fragment,o),N(Za.$$.fragment,o),N(wo.$$.fragment,o),N(ko.$$.fragment,o),N(Ao.$$.fragment,o),N(en.$$.fragment,o),N(xo.$$.fragment,o),N(Do.$$.fragment,o),N(Ho.$$.fragment,o),N(an.$$.fragment,o),N(nn.$$.fragment,o),N(sn.$$.fragment,o),N(rn.$$.fragment,o),N(ln.$$.fragment,o),N(cn.$$.fragment,o),N(pn.$$.fragment,o),N(gn.$$.fragment,o),N(hn.$$.fragment,o),N(dn.$$.fragment,o),N(un.$$.fragment,o),N(mn.$$.fragment,o),N(_n.$$.fragment,o),N(bn.$$.fragment,o),N(Ro.$$.fragment,o),N(En.$$.fragment,o),N(wn.$$.fragment,o),N(xn.$$.fragment,o),N(Dn.$$.fragment,o),N(qn.$$.fragment,o),N(In.$$.fragment,o),N(Nn.$$.fragment,o),N(Fn.$$.fragment,o),N(Tn.$$.fragment,o),N(Pn.$$.fragment,o),N(On.$$.fragment,o),N(Wo.$$.fragment,o),N(Rn.$$.fragment,o),N(Ln.$$.fragment,o),N(Bo.$$.fragment,o),N(Cn.$$.fragment,o),N(Sn.$$.fragment,o),N(Jo.$$.fragment,o),N(Mn.$$.fragment,o),N(Un.$$.fragment,o),N(Xo.$$.fragment,o),ql=!1},d(o){t(p),o&&t(b),o&&t(f),j(l),o&&t(x),o&&t(w),o&&t(R),o&&t(_),o&&t(K),o&&t(G),o&&t(U),j(C,o),o&&t(Y),o&&t(te),o&&t(B),j(X,o),o&&t(oe),o&&t(ne),o&&t(ca),j(Le,o),o&&t(pa),o&&t(mt),j(ga),o&&t(el),o&&t(V),j(ha),j(da),j(Ot),j(Rt),j(ua),j(Lt),j(Ct),j(fa),j(St),j(Mt),j(ma),j(Ut),j(va),j(Vt),j(wa),j(ka),j(Aa),j(Gt),j(xa),j(Bt),j(Da),j(Kt),j(Ha),j(qa),j(Qt),j(Ia),j(Na),j(Yt),j(ja),j(Fa),j(Ta),j(to),j(oo),j(Pa),j(ao),j(no),j(Oa),j(so),j(ro),j(Ra),j(La),j(lo),j(co),j(Sa),j(Ma),j(Ua),j(ho),j(Va),j(uo),j(za),j(fo),j(Ba),j(mo),j(_o),j(Ka),j(bo),j(Ja),j(Qa),j($o),j(Xa),j(Ya),j(Eo),j(Za),j(wo),j(ko),j(Ao),j(en),j(xo),j(Do),j(Ho),j(an),o&&t(tl),o&&t(_t),j(nn),o&&t(ol),o&&t(bt),j(sn),o&&t(al),o&&t(vt),j(rn),o&&t(nl),o&&t($t),j(ln),o&&t(sl),o&&t(yt),j(cn),o&&t(rl),o&&t(Ce),j(pn),o&&t(il),o&&t(Et),j(gn),o&&t(ll),o&&t(wt),j(hn),o&&t(cl),o&&t(kt),j(dn),o&&t(pl),o&&t(Se),j(un),o&&t(gl),o&&t(At),j(mn),o&&t(hl),o&&t(Oo),o&&t(dl),o&&t(fe),j(_n),j(bn),j(Ro),j(En),j(wn),o&&t(ul),o&&t(Ht),j(xn),o&&t(fl),o&&t(qt),j(Dn),o&&t(ml),o&&t(Hn),o&&t(_l),o&&t(Co),o&&t(bl),o&&t(we),j(qn),j(In),j(Nn),j(Fn),o&&t(vl),o&&t(It),j(Tn),o&&t($l),o&&t(Vo),o&&t(yl),o&&t(Nt),j(Pn),o&&t(El),o&&t(Me),j(On),j(Wo),o&&t(wl),o&&t(jt),j(Rn),o&&t(kl),o&&t(Ue),j(Ln),j(Bo),o&&t(Al),o&&t(Ft),j(Cn),o&&t(xl),o&&t(Ve),j(Sn),j(Jo),o&&t(Dl),o&&t(Tt),j(Mn),o&&t(Hl),o&&t(ze),j(Un),j(Xo)}}}const Lb={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Cb(S){return Q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gb extends G_{constructor(p){super();B_(this,p,Cb,Rb,K_,{})}}export{Gb as default,Lb as metadata};
