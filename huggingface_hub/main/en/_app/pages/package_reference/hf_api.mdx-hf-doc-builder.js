import{S as eb,i as tb,s as ob,e as a,k as g,w as D,t as r,M as ab,c as n,d as t,m as h,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as N,B as j,v as nb,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function sb(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function rb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ib(S){let p,b,f,c,d;return c=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function lb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function cb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"create_commit"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function pb(S){let p,b,f,c;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(" is limited to 25k LFS files and a 1GB payload for regular files.")},l(d){p=n(d,"P",{});var l=s(p);b=n(l,"CODE",{});var u=s(b);f=i(u,"create_commit"),u.forEach(t),c=i(l," is limited to 25k LFS files and a 1GB payload for regular files."),l.forEach(t)},m(d,l){$(d,p,l),e(p,b),e(b,f),e(p,c)},d(d){d&&t(p)}}}function gb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function hb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function db(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function ub(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),c=n(X,"UL",{});var ne=s(c);d=n(ne,"LI",{});var Je=s(d);l=n(Je,"A",{href:!0,rel:!0});var de=s(l);u=n(de,"CODE",{});var ht=s(u);P=i(ht,"HTTPError"),ht.forEach(t),de.forEach(t),v=i(Je,`
if the HuggingFace API returned an error`),Je.forEach(t),x=h(ne),w=n(ne,"LI",{});var Qe=s(w);y=n(Qe,"A",{href:!0,rel:!0});var we=s(y);k=n(we,"CODE",{});var dt=s(k);O=i(dt,"ValueError"),dt.forEach(t),we.forEach(t),T=i(Qe,`
if some parameter value is invalid`),Qe.forEach(t),R=h(ne),_=n(ne,"LI",{});var ut=s(_);F=n(ut,"A",{href:!0});var ft=s(F);M=i(ft,"RepositoryNotFoundError"),ft.forEach(t),W=i(ut,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(ut,"CODE",{});var as=s(L);K=i(as,"private"),as.forEach(t),G=i(ut," and you do not have access."),ut.forEach(t),A=h(ne),U=n(ne,"LI",{});var ca=s(U);C=n(ca,"A",{href:!0});var pa=s(C);Y=i(pa,"RevisionNotFoundError"),pa.forEach(t),te=i(ca,`
If the revision to download from cannot be found.`),ca.forEach(t),Z=h(ne),J=n(ne,"LI",{});var Le=s(J);ee=n(Le,"A",{href:!0});var ga=s(ee);ae=i(ga,"EntryNotFoundError"),ga.forEach(t),B=i(Le,`
If the file to download cannot be found.`),Le.forEach(t),ne.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function fb(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function mb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function _b(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function bb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function vb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function $b(S){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function yb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Eb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function wb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function kb(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function Ab(S){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),j(u,v)}}}function xb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Db(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Hb(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function qb(S){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Ib(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=i(U,"Raises the following errors:"),U.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=i(X,"RepositoryNotFoundError"),X.forEach(t),W=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,c,U),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Nb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function jb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),R=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var M=s(c);d=n(M,"LI",{});var W=s(d);l=n(W,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),R=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Fb(S){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function Tb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=r("RepositoryNotFoundError"),W=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),U=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=h(Z),c=n(Z,"UL",{});var ee=s(c);d=n(ee,"LI",{});var ae=s(d);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var ne=s(y);k=n(ne,"CODE",{});var Je=s(k);O=i(Je,"ValueError"),Je.forEach(t),ne.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),R=h(ee),_=n(ee,"LI",{});var de=s(_);F=n(de,"A",{href:!0});var ht=s(F);M=i(ht,"RepositoryNotFoundError"),ht.forEach(t),W=i(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(de,"CODE",{});var Qe=s(L);K=i(Qe,"private"),Qe.forEach(t),G=i(de," and you do not have access."),de.forEach(t),A=h(ee),U=n(ee,"LI",{});var we=s(U);C=n(we,"A",{href:!0});var dt=s(C);Y=i(dt,"RevisionNotFoundError"),dt.forEach(t),te=i(we,`
If the revision to download from cannot be found.`),we.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,R),e(c,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(c,A),e(c,U),e(U,C),e(C,Y),e(U,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function Pb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"upload_file"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function Ob(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Rb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(R){p=n(R,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=h(R),c=n(R,"UL",{});var F=s(c);d=n(F,"LI",{});var M=s(d);l=n(M,"A",{href:!0,rel:!0});var W=s(l);u=n(W,"CODE",{});var L=s(u);P=i(L,"HTTPError"),L.forEach(t),W.forEach(t),v=i(M,`
if the HuggingFace API returned an error`),M.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(R,_){$(R,p,_),e(p,b),$(R,f,_),$(R,c,_),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(R){R&&t(p),R&&t(f),R&&t(c)}}}function Lb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=i(R,"upload_folder"),R.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=i(M,"create_repo()"),M.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function Cb(S){let p,b,f,c,d;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Sb(S){let p,b,f,c,d;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Mb(S){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Ub(S){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){N(p.$$.fragment,f),b=!1},d(f){j(p,f)}}}function Vb(S){let p,b,f,c,d;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function zb(S){let p,b,f,c,d;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){N(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),j(c,l)}}}function Wb(S){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,C,Y,te,Z,J,ee,ae,B,X,oe,ne,Je,de,ht,Qe,we,dt,ut,ft,as,ca,pa,Le,ga,mt,Pt,Os,ha,wc,Rs,kc,nl,V,da,Ac,ke,ua,xc,Ls,Dc,Hc,Ot,qc,Rt,Ic,Ae,fa,Nc,Cs,jc,Fc,Lt,Tc,Ct,Pc,xe,ma,Oc,Ss,Rc,Lc,St,Cc,Mt,Sc,le,_a,Mc,Ms,Uc,Vc,ba,zc,Us,Wc,Gc,Bc,va,Kc,ns,Jc,Qc,Xc,ss,Yc,rs,Zc,ep,Ut,tp,ce,$a,op,ya,ap,Vs,np,sp,rp,Ea,ip,is,lp,cp,pp,wa,gp,zs,hp,dp,up,ls,fp,cs,mp,_p,Vt,bp,zt,ka,vp,Ws,$p,yp,Wt,Aa,Ep,Gs,wp,kp,De,xa,Ap,Bs,xp,Dp,Ks,Hp,qp,Gt,Ip,Xe,Da,Np,Js,jp,Fp,Bt,Tp,Ye,Ha,Pp,Qs,Op,Rp,qa,Lp,ps,Cp,Sp,Mp,Ze,Ia,Up,Xs,Vp,zp,Kt,Wp,Jt,Na,Gp,Ys,Bp,Kp,et,ja,Jp,Zs,Qp,Xp,Qt,Yp,Xt,Fa,Zp,er,eg,tg,He,Ta,og,tr,ag,ng,gs,sg,hs,rg,ig,Yt,lg,Zt,Pa,cg,or,pg,gg,eo,Oa,hg,ar,dg,ug,be,Ra,fg,nr,mg,_g,sr,bg,vg,to,$g,oo,yg,qe,La,Eg,rr,wg,kg,ao,Ag,no,xg,Ie,Ca,Dg,ir,Hg,qg,so,Ig,ro,Ng,io,Sa,jg,lr,Fg,Tg,Ne,Ma,Pg,cr,Og,Rg,lo,Lg,co,Cg,po,Ua,Sg,pr,Mg,Ug,go,Va,Vg,gr,zg,Wg,tt,za,Gg,hr,Bg,Kg,ho,Jg,je,Wa,Qg,dr,Xg,Yg,ur,Zg,eh,uo,th,Fe,Ga,oh,fr,ah,nh,Ba,sh,Ka,rh,ih,lh,fo,ch,Te,Ja,ph,mr,gh,hh,mo,dh,_o,uh,ot,Qa,fh,_r,mh,_h,bo,bh,vo,Xa,vh,br,$h,yh,Pe,Ya,Eh,vr,wh,kh,$r,Ah,xh,$o,Dh,yo,Za,Hh,yr,qh,Ih,at,en,Nh,Er,jh,Fh,Eo,Th,ve,tn,Ph,wr,Oh,Rh,wo,Lh,ko,Ch,Ao,Sh,re,on,Mh,kr,Uh,Vh,Ar,zh,Wh,ue,Gh,xr,Bh,Kh,Dr,Jh,Qh,an,Xh,Yh,Hr,Zh,ed,qr,td,od,ad,nn,nd,Ir,sd,rd,id,xo,ld,Do,cd,Ho,pd,qo,sn,gd,Nr,hd,sl,_t,Io,jr,rn,dd,Fr,ud,rl,bt,ln,fd,Tr,md,il,vt,No,Pr,cn,_d,Or,bd,ll,$t,pn,vd,Rr,$d,cl,yt,jo,Lr,gn,yd,Cr,Ed,pl,Ce,hn,wd,Sr,kd,Ad,Mr,xd,gl,Et,Fo,Ur,dn,Dd,Vr,Hd,hl,wt,un,qd,zr,Id,dl,kt,To,Wr,fn,Nd,Gr,jd,ul,Se,mn,Fd,Br,Td,Pd,_n,Od,ds,Rd,Ld,fl,At,Po,Kr,bn,Cd,us,Jr,Sd,Md,ml,Oo,Ud,Qr,Vd,zd,_l,fe,vn,Wd,Xr,Gd,Bd,$e,$n,Kd,yn,Jd,Yr,Qd,Xd,Yd,En,Zd,Zr,eu,tu,ou,wn,au,ei,nu,su,ru,Ro,iu,nt,kn,lu,fs,cu,ti,pu,gu,ms,hu,oi,du,uu,Oe,An,fu,xn,mu,ai,_u,bu,vu,xt,st,$u,ni,yu,Eu,si,wu,ku,ri,Au,xu,Dn,Du,ii,Hu,qu,Iu,rt,Nu,li,ju,Fu,ci,Tu,Pu,pi,Ou,Ru,Dt,Lu,gi,Cu,Su,hi,Mu,Uu,bl,Ht,Hn,Vu,di,zu,vl,qt,Lo,ui,qn,Wu,fi,Gu,$l,In,mi,Bu,Ku,yl,Co,Ju,_s,Qu,Xu,El,Ee,Nn,Yu,So,jn,Zu,_i,ef,tf,it,Fn,of,bi,af,nf,Tn,sf,vi,rf,lf,cf,Mo,Pn,pf,$i,gf,wl,It,Uo,yi,On,hf,Ei,df,kl,Vo,uf,wi,ff,mf,Al,Nt,zo,ki,Rn,_f,Ai,bf,xl,Me,Ln,vf,xi,$f,yf,Wo,Dl,jt,Go,Di,Cn,Ef,Hi,wf,Hl,Ue,Sn,kf,qi,Af,xf,Bo,ql,Ft,Ko,Ii,Mn,Df,Ni,Hf,Il,Ve,Un,qf,ji,If,Nf,Jo,Nl,Tt,Qo,Fi,Vn,jf,Ti,Ff,jl,ze,zn,Tf,Pi,Pf,Of,Xo,Fl;return l=new ye({}),C=new ie({props:{code:`from huggingface_hub import list_models

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
)`}}),ha=new ye({}),da=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L568"}}),ua=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3030",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Ot=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[sb]},$$scope:{ctx:S}}}),Rt=new se({props:{$$slots:{default:[rb]},$$scope:{ctx:S}}}),fa=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2887",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Lt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[ib]},$$scope:{ctx:S}}}),Ct=new se({props:{$$slots:{default:[lb]},$$scope:{ctx:S}}}),ma=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1723",returnDescription:`
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
`}}),St=new se({props:{warning:!0,$$slots:{default:[cb]},$$scope:{ctx:S}}}),Mt=new se({props:{warning:!0,$$slots:{default:[pb]},$$scope:{ctx:S}}}),_a=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2714"}}),Ut=new se({props:{$$slots:{default:[gb]},$$scope:{ctx:S}}}),$a=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2803"}}),Vt=new se({props:{$$slots:{default:[hb]},$$scope:{ctx:S}}}),ka=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1469",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Aa=new Q({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2404",raiseDescription:`
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
`}}),xa=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1230",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Gt=new se({props:{$$slots:{default:[db]},$$scope:{ctx:S}}}),Da=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2249"}}),Bt=new se({props:{$$slots:{default:[ub]},$$scope:{ctx:S}}}),Ha=new Q({props:{name:"delete_folder",anchor:"huggingface_hub.HfApi.delete_folder",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_folder.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative folder path in the repo, for example: <code>&quot;checkpoints/1fec34a&quot;</code>.`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the folder will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_folder.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will default
to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_folder.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the folder is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_folder.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code>
branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_folder.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Delete folder {path_in_repo} with huggingface_hub&quot;</code>.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.delete_folder.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit.`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.delete_folder.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with the changes.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.delete_folder.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2337"}}),Ia=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1549"}}),Kt=new se({props:{$$slots:{default:[fb]},$$scope:{ctx:S}}}),Na=new Q({props:{name:"delete_tag",anchor:"huggingface_hub.HfApi.delete_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a commit will be deleted.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to delete.`,name:"tag"},{anchor:"huggingface_hub.HfApi.delete_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if tagging a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2466",raiseDescription:`
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
`}}),ja=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3158",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Qt=new se({props:{$$slots:{default:[mb]},$$scope:{ctx:S}}}),Fa=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L660"}}),Ta=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2629"}}),Yt=new se({props:{$$slots:{default:[_b]},$$scope:{ctx:S}}}),Pa=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2513",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Oa=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L652"}}),Ra=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2551",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[bb]},$$scope:{ctx:S}}}),oo=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[vb]},$$scope:{ctx:S}}}),La=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3215",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),ao=new se({props:{warning:!0,$$slots:{default:[$b]},$$scope:{ctx:S}}}),no=new se({props:{$$slots:{default:[yb]},$$scope:{ctx:S}}}),Ca=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned datasets.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned datasets.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo">huggingface_hub.hf_api.DatasetInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_datasets.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of datasets fetched. Leaving this option
to <code>None</code> fetches all datasets.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_datasets.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all dataset data, including the <code>lastModified</code>
and the <code>cardData</code>. Can contain useful information such as the
PapersWithCode ID.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_datasets.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L886",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[DatasetInfo]</code></p>
`}}),so=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Eb]},$$scope:{ctx:S}}}),ro=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[wb]},$$scope:{ctx:S}}}),Sa=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1056",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ma=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": bool = False"},{name:"fetch_config",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L670",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[ModelInfo]</code></p>
`}}),lo=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[kb]},$$scope:{ctx:S}}}),co=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Ab]},$$scope:{ctx:S}}}),Ua=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1425",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Va=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": bool = False"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
`}}),za=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3105",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),ho=new se({props:{$$slots:{default:[xb]},$$scope:{ctx:S}}}),Wa=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1155",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),uo=new se({props:{$$slots:{default:[Db]},$$scope:{ctx:S}}}),Ga=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1655"}}),fo=new se({props:{$$slots:{default:[Hb]},$$scope:{ctx:S}}}),Ja=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2963",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),mo=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[qb]},$$scope:{ctx:S}}}),_o=new se({props:{$$slots:{default:[Ib]},$$scope:{ctx:S}}}),Qa=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1360",returnDescription:`
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
`}}),bo=new se({props:{$$slots:{default:[Nb]},$$scope:{ctx:S}}}),Xa=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L619"}}),Ya=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1295",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),$o=new se({props:{$$slots:{default:[jb]},$$scope:{ctx:S}}}),Za=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L638"}}),en=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1595",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Eo=new se({props:{$$slots:{default:[Fb]},$$scope:{ctx:S}}}),tn=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1940",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),wo=new se({props:{$$slots:{default:[Tb]},$$scope:{ctx:S}}}),ko=new se({props:{warning:!0,$$slots:{default:[Pb]},$$scope:{ctx:S}}}),Ao=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Ob]},$$scope:{ctx:S}}}),on=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2089",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),xo=new se({props:{$$slots:{default:[Rb]},$$scope:{ctx:S}}}),Do=new se({props:{warning:!0,$$slots:{default:[Lb]},$$scope:{ctx:S}}}),Ho=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Cb]},$$scope:{ctx:S}}}),sn=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L575"}}),rn=new ye({}),ln=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L258"}}),cn=new ye({}),pn=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L331"}}),gn=new ye({}),hn=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L405"}}),dn=new ye({}),un=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L212"}}),fn=new ye({}),mn=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L157"}}),bn=new ye({}),vn=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L66"}}),$n=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L138"}}),Ro=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[Sb]},$$scope:{ctx:S}}}),kn=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L173"}}),An=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L88"}}),Hn=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"},{name:"is_folder",val:": typing.Union[bool, typing.Literal['auto']] = 'auto'"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example: <code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>
for a file or <code>&quot;checkpoints/1fec34a/&quot;</code> for a folder.`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationDelete.is_folder",description:`<strong>is_folder</strong> (<code>bool</code> or <code>Literal[&quot;auto&quot;]</code>, <em>optional</em>) &#x2014;
Whether the Delete Operation applies to a folder or not. If &#x201C;auto&#x201D;, the path
type (file or folder) is guessed automatically by looking if path ends with
a &#x201D;/&#x201D; (folder) or not (file). To explicitly set the path type, you can set
<code>is_folder=True</code> or <code>is_folder=False</code>.`,name:"is_folder"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L36"}}),qn=new ye({}),Nn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),jn=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),Fn=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Pn=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),On=new ye({}),Rn=new ye({}),Ln=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"languages",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),Wo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Mb]},$$scope:{ctx:S}}}),Cn=new ye({}),Sn=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Bo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Ub]},$$scope:{ctx:S}}}),Mn=new ye({}),Un=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L530"}}),Jo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Vb]},$$scope:{ctx:S}}}),Vn=new ye({}),zn=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L492"}}),Xo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[zb]},$$scope:{ctx:S}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=g(),_=a("p"),F=r("All methods from the "),M=a("code"),W=r("HfApi"),L=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),U=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),ne=a("p"),Je=r("Using the "),de=a("a"),ht=r("HfApi"),Qe=r(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),we=a("code"),dt=r("huggingface-cli login"),ut=r(" or "),ft=a("a"),as=r("login()"),ca=r(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),pa=g(),D(Le.$$.fragment),ga=g(),mt=a("h3"),Pt=a("a"),Os=a("span"),D(ha.$$.fragment),wc=g(),Rs=a("span"),kc=r("HfApi"),nl=g(),V=a("div"),D(da.$$.fragment),Ac=g(),ke=a("div"),D(ua.$$.fragment),xc=g(),Ls=a("p"),Dc=r("Closes or re-opens a Discussion or Pull Request."),Hc=g(),D(Ot.$$.fragment),qc=g(),D(Rt.$$.fragment),Ic=g(),Ae=a("div"),D(fa.$$.fragment),Nc=g(),Cs=a("p"),jc=r("Creates a new comment on the given Discussion."),Fc=g(),D(Lt.$$.fragment),Tc=g(),D(Ct.$$.fragment),Pc=g(),xe=a("div"),D(ma.$$.fragment),Oc=g(),Ss=a("p"),Rc=r("Creates a commit in the given repo, deleting & uploading files as needed."),Lc=g(),D(St.$$.fragment),Cc=g(),D(Mt.$$.fragment),Sc=g(),le=a("div"),D(_a.$$.fragment),Mc=g(),Ms=a("p"),Uc=r("Creates a Discussion or Pull Request."),Vc=g(),ba=a("p"),zc=r("Pull Requests created programmatically will be in "),Us=a("code"),Wc=r('"draft"'),Gc=r(" status."),Bc=g(),va=a("p"),Kc=r("Creating a Pull Request with changes can also be done at once with "),ns=a("a"),Jc=r("HfApi.create_commit()"),Qc=r("."),Xc=g(),ss=a("p"),Yc=r("Returns: "),rs=a("a"),Zc=r("DiscussionWithDetails"),ep=g(),D(Ut.$$.fragment),tp=g(),ce=a("div"),D($a.$$.fragment),op=g(),ya=a("p"),ap=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Vs=a("code"),np=r('"draft"'),sp=r(" status."),rp=g(),Ea=a("p"),ip=r("Creating a Pull Request with changes can also be done at once with "),is=a("a"),lp=r("HfApi.create_commit()"),cp=r(";"),pp=g(),wa=a("p"),gp=r("This is a wrapper around "),zs=a("code"),hp=r("HfApi.create_discusssion"),dp=r("."),up=g(),ls=a("p"),fp=r("Returns: "),cs=a("a"),mp=r("DiscussionWithDetails"),_p=g(),D(Vt.$$.fragment),bp=g(),zt=a("div"),D(ka.$$.fragment),vp=g(),Ws=a("p"),$p=r("Create an empty repo on the HuggingFace Hub."),yp=g(),Wt=a("div"),D(Aa.$$.fragment),Ep=g(),Gs=a("p"),wp=r("Tag a given commit of a repo on the Hub."),kp=g(),De=a("div"),D(xa.$$.fragment),Ap=g(),Bs=a("p"),xp=r("Get info on one specific dataset on huggingface.co."),Dp=g(),Ks=a("p"),Hp=r("Dataset can be private if you pass an acceptable token."),qp=g(),D(Gt.$$.fragment),Ip=g(),Xe=a("div"),D(Da.$$.fragment),Np=g(),Js=a("p"),jp=r("Deletes a file in the given repo."),Fp=g(),D(Bt.$$.fragment),Tp=g(),Ye=a("div"),D(Ha.$$.fragment),Pp=g(),Qs=a("p"),Op=r("Deletes a folder in the given repo."),Rp=g(),qa=a("p"),Lp=r("Simple wrapper around "),ps=a("a"),Cp=r("create_commit()"),Sp=r(" method."),Mp=g(),Ze=a("div"),D(Ia.$$.fragment),Up=g(),Xs=a("p"),Vp=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),zp=g(),D(Kt.$$.fragment),Wp=g(),Jt=a("div"),D(Na.$$.fragment),Gp=g(),Ys=a("p"),Bp=r("Delete a tag from a repo on the Hub."),Kp=g(),et=a("div"),D(ja.$$.fragment),Jp=g(),Zs=a("p"),Qp=r("Edits a comment on a Discussion / Pull Request."),Xp=g(),D(Qt.$$.fragment),Yp=g(),Xt=a("div"),D(Fa.$$.fragment),Zp=g(),er=a("p"),eg=r("Gets all valid dataset tags as a nested namespace object."),tg=g(),He=a("div"),D(Ta.$$.fragment),og=g(),tr=a("p"),ag=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),ng=g(),gs=a("p"),sg=r("Returns: "),hs=a("a"),rg=r("DiscussionWithDetails"),ig=g(),D(Yt.$$.fragment),lg=g(),Zt=a("div"),D(Pa.$$.fragment),cg=g(),or=a("p"),pg=r(`Returns the repository name for a given model ID and optional
organization.`),gg=g(),eo=a("div"),D(Oa.$$.fragment),hg=g(),ar=a("p"),dg=r("Gets all valid model tags as a nested namespace object"),ug=g(),be=a("div"),D(Ra.$$.fragment),fg=g(),nr=a("p"),mg=r("Fetches Discussions and Pull Requests for the given repo."),_g=g(),sr=a("p"),bg=r("Example:"),vg=g(),D(to.$$.fragment),$g=g(),D(oo.$$.fragment),yg=g(),qe=a("div"),D(La.$$.fragment),Eg=g(),rr=a("p"),wg=r("Hides a comment on a Discussion / Pull Request."),kg=g(),D(ao.$$.fragment),Ag=g(),D(no.$$.fragment),xg=g(),Ie=a("div"),D(Ca.$$.fragment),Dg=g(),ir=a("p"),Hg=r("Get the list of all the datasets on huggingface.co"),qg=g(),D(so.$$.fragment),Ig=g(),D(ro.$$.fragment),Ng=g(),io=a("div"),D(Sa.$$.fragment),jg=g(),lr=a("p"),Fg=r("Get the public list of all the metrics on huggingface.co"),Tg=g(),Ne=a("div"),D(Ma.$$.fragment),Pg=g(),cr=a("p"),Og=r("Get the list of all the models on huggingface.co"),Rg=g(),D(lo.$$.fragment),Lg=g(),D(co.$$.fragment),Cg=g(),po=a("div"),D(Ua.$$.fragment),Sg=g(),pr=a("p"),Mg=r("Get the list of files in a given repo."),Ug=g(),go=a("div"),D(Va.$$.fragment),Vg=g(),gr=a("p"),zg=r("Get the public list of all Spaces on huggingface.co"),Wg=g(),tt=a("div"),D(za.$$.fragment),Gg=g(),hr=a("p"),Bg=r("Merges a Pull Request."),Kg=g(),D(ho.$$.fragment),Jg=g(),je=a("div"),D(Wa.$$.fragment),Qg=g(),dr=a("p"),Xg=r("Get info on one specific model on huggingface.co"),Yg=g(),ur=a("p"),Zg=r("Model can be private if you pass an acceptable token or are logged in."),eh=g(),D(uo.$$.fragment),th=g(),Fe=a("div"),D(Ga.$$.fragment),oh=g(),fr=a("p"),ah=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),nh=g(),Ba=a("p"),sh=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ka=a("a"),rh=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ih=r("."),lh=g(),D(fo.$$.fragment),ch=g(),Te=a("div"),D(Ja.$$.fragment),ph=g(),mr=a("p"),gh=r("Renames a Discussion."),hh=g(),D(mo.$$.fragment),dh=g(),D(_o.$$.fragment),uh=g(),ot=a("div"),D(Qa.$$.fragment),fh=g(),_r=a("p"),mh=r("Get the info object for a given repo of a given type."),_h=g(),D(bo.$$.fragment),bh=g(),vo=a("div"),D(Xa.$$.fragment),vh=g(),br=a("p"),$h=r(`Saves the passed access token so git can correctly authenticate the
user.`),yh=g(),Pe=a("div"),D(Ya.$$.fragment),Eh=g(),vr=a("p"),wh=r("Get info on one specific Space on huggingface.co."),kh=g(),$r=a("p"),Ah=r("Space can be private if you pass an acceptable token."),xh=g(),D($o.$$.fragment),Dh=g(),yo=a("div"),D(Za.$$.fragment),Hh=g(),yr=a("p"),qh=r("Resets the user\u2019s access token."),Ih=g(),at=a("div"),D(en.$$.fragment),Nh=g(),Er=a("p"),jh=r("Update the visibility setting of a repository."),Fh=g(),D(Eo.$$.fragment),Th=g(),ve=a("div"),D(tn.$$.fragment),Ph=g(),wr=a("p"),Oh=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Rh=g(),D(wo.$$.fragment),Lh=g(),D(ko.$$.fragment),Ch=g(),D(Ao.$$.fragment),Sh=g(),re=a("div"),D(on.$$.fragment),Mh=g(),kr=a("p"),Uh=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Vh=g(),Ar=a("p"),zh=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Wh=g(),ue=a("p"),Gh=r("Use the "),xr=a("code"),Bh=r("allow_patterns"),Kh=r(" and "),Dr=a("code"),Jh=r("ignore_patterns"),Qh=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),an=a("a"),Xh=r("here"),Yh=r(`. If both
`),Hr=a("code"),Zh=r("allow_patterns"),ed=r(" and "),qr=a("code"),td=r("ignore_patterns"),od=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),ad=g(),nn=a("p"),nd=r("Uses "),Ir=a("code"),sd=r("HfApi.create_commit"),rd=r(" under the hood."),id=g(),D(xo.$$.fragment),ld=g(),D(Do.$$.fragment),cd=g(),D(Ho.$$.fragment),pd=g(),qo=a("div"),D(sn.$$.fragment),gd=g(),Nr=a("p"),hd=r("Call HF API to know \u201Cwhoami\u201D."),sl=g(),_t=a("h3"),Io=a("a"),jr=a("span"),D(rn.$$.fragment),dd=g(),Fr=a("span"),ud=r("ModelInfo"),rl=g(),bt=a("div"),D(ln.$$.fragment),fd=g(),Tr=a("p"),md=r("Info about a model accessible from huggingface.co"),il=g(),vt=a("h3"),No=a("a"),Pr=a("span"),D(cn.$$.fragment),_d=g(),Or=a("span"),bd=r("DatasetInfo"),ll=g(),$t=a("div"),D(pn.$$.fragment),vd=g(),Rr=a("p"),$d=r("Info about a dataset accessible from huggingface.co"),cl=g(),yt=a("h3"),jo=a("a"),Lr=a("span"),D(gn.$$.fragment),yd=g(),Cr=a("span"),Ed=r("SpaceInfo"),pl=g(),Ce=a("div"),D(hn.$$.fragment),wd=g(),Sr=a("p"),kd=r("Info about a Space accessible from huggingface.co"),Ad=g(),Mr=a("p"),xd=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),gl=g(),Et=a("h3"),Fo=a("a"),Ur=a("span"),D(dn.$$.fragment),Dd=g(),Vr=a("span"),Hd=r("RepoFile"),hl=g(),wt=a("div"),D(un.$$.fragment),qd=g(),zr=a("p"),Id=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),dl=g(),kt=a("h3"),To=a("a"),Wr=a("span"),D(fn.$$.fragment),Nd=g(),Gr=a("span"),jd=r("CommitInfo"),ul=g(),Se=a("div"),D(mn.$$.fragment),Fd=g(),Br=a("p"),Td=r("Data structure containing information about a newly created commit."),Pd=g(),_n=a("p"),Od=r("Returned by "),ds=a("a"),Rd=r("create_commit()"),Ld=r("."),fl=g(),At=a("h2"),Po=a("a"),Kr=a("span"),D(bn.$$.fragment),Cd=g(),us=a("span"),Jr=a("code"),Sd=r("create_commit"),Md=r(" API"),ml=g(),Oo=a("p"),Ud=r("Below are the supported values for "),Qr=a("code"),Vd=r("CommitOperation()"),zd=r(":"),_l=g(),fe=a("div"),D(vn.$$.fragment),Wd=g(),Xr=a("p"),Gd=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),Bd=g(),$e=a("div"),D($n.$$.fragment),Kd=g(),yn=a("p"),Jd=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Yr=a("code"),Qd=r("path_or_fileobj"),Xd=r("."),Yd=g(),En=a("p"),Zd=r("Triggers "),Zr=a("code"),eu=r("self.validate"),tu=r("."),ou=g(),wn=a("p"),au=r("Raises: "),ei=a("code"),nu=r("ValueError"),su=r(" if self.validate fails"),ru=g(),D(Ro.$$.fragment),iu=g(),nt=a("div"),D(kn.$$.fragment),lu=g(),fs=a("p"),cu=r("The base64-encoded content of "),ti=a("code"),pu=r("path_or_fileobj"),gu=g(),ms=a("p"),hu=r("Returns: "),oi=a("code"),du=r("bytes"),uu=g(),Oe=a("div"),D(An.$$.fragment),fu=g(),xn=a("p"),mu=r("Ensures "),ai=a("code"),_u=r("path_or_fileobj"),bu=r(" is valid:"),vu=g(),xt=a("ul"),st=a("li"),$u=r("Ensures it is either a "),ni=a("code"),yu=r("str"),Eu=r(", "),si=a("code"),wu=r("bytes"),ku=r(" or an instance of "),ri=a("code"),Au=r("io.BufferedIOBase"),xu=g(),Dn=a("li"),Du=r("If it is a "),ii=a("code"),Hu=r("str"),qu=r(", ensure that it is a file path and that the file exists"),Iu=g(),rt=a("li"),Nu=r("If it is an instance of "),li=a("code"),ju=r("io.BufferedIOBase"),Fu=r(", ensures it supports "),ci=a("code"),Tu=r("seek()"),Pu=r(" and "),pi=a("code"),Ou=r("tell()"),Ru=g(),Dt=a("p"),Lu=r("Raises: "),gi=a("code"),Cu=r("ValueError"),Su=r(" if "),hi=a("code"),Mu=r("path_or_fileobj"),Uu=r(" is not valid"),bl=g(),Ht=a("div"),D(Hn.$$.fragment),Vu=g(),di=a("p"),zu=r(`Data structure holding necessary info to delete a file or a folder from a repository
on the Hub.`),vl=g(),qt=a("h2"),Lo=a("a"),ui=a("span"),D(qn.$$.fragment),Wu=g(),fi=a("span"),Gu=r("Hugging Face local storage"),$l=g(),In=a("p"),mi=a("code"),Bu=r("huggingface_hub"),Ku=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),yl=g(),Co=a("p"),Ju=r("It does this using the "),_s=a("a"),Qu=r("HfFolder"),Xu=r(" utility, which saves data at the root of the user."),El=g(),Ee=a("div"),D(Nn.$$.fragment),Yu=g(),So=a("div"),D(jn.$$.fragment),Zu=g(),_i=a("p"),ef=r("Deletes the token from storage. Does not fail if token does not exist."),tf=g(),it=a("div"),D(Fn.$$.fragment),of=g(),bi=a("p"),af=r("Get token or None if not existent."),nf=g(),Tn=a("p"),sf=r(`Note that a token can be also provided using the
`),vi=a("code"),rf=r("HUGGING_FACE_HUB_TOKEN"),lf=r(" environment variable."),cf=g(),Mo=a("div"),D(Pn.$$.fragment),pf=g(),$i=a("p"),gf=r("Save token, creating folder as needed."),wl=g(),It=a("h2"),Uo=a("a"),yi=a("span"),D(On.$$.fragment),hf=g(),Ei=a("span"),df=r("Filtering helpers"),kl=g(),Vo=a("p"),uf=r("Some helpers to filter repositories on the Hub are available in the "),wi=a("code"),ff=r("huggingface_hub"),mf=r(" package."),Al=g(),Nt=a("h3"),zo=a("a"),ki=a("span"),D(Rn.$$.fragment),_f=g(),Ai=a("span"),bf=r("DatasetFilter"),xl=g(),Me=a("div"),D(Ln.$$.fragment),vf=g(),xi=a("p"),$f=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yf=g(),D(Wo.$$.fragment),Dl=g(),jt=a("h3"),Go=a("a"),Di=a("span"),D(Cn.$$.fragment),Ef=g(),Hi=a("span"),wf=r("ModelFilter"),Hl=g(),Ue=a("div"),D(Sn.$$.fragment),kf=g(),qi=a("p"),Af=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),xf=g(),D(Bo.$$.fragment),ql=g(),Ft=a("h3"),Ko=a("a"),Ii=a("span"),D(Mn.$$.fragment),Df=g(),Ni=a("span"),Hf=r("DatasetSearchArguments"),Il=g(),Ve=a("div"),D(Un.$$.fragment),qf=g(),ji=a("p"),If=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Nf=g(),D(Jo.$$.fragment),Nl=g(),Tt=a("h3"),Qo=a("a"),Fi=a("span"),D(Vn.$$.fragment),jf=g(),Ti=a("span"),Ff=r("ModelSearchArguments"),jl=g(),ze=a("div"),D(zn.$$.fragment),Tf=g(),Pi=a("p"),Pf=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Of=g(),D(Xo.$$.fragment),this.h()},l(o){const E=ab('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Wn=s(f);c=n(Wn,"A",{id:!0,class:!0,href:!0});var Oi=s(c);d=n(Oi,"SPAN",{});var Ri=s(d);H(l.$$.fragment,Ri),Ri.forEach(t),Oi.forEach(t),u=h(Wn),P=n(Wn,"SPAN",{});var Li=s(P);v=i(Li,"Hugging Face Hub API"),Li.forEach(t),Wn.forEach(t),x=h(o),w=n(o,"P",{});var Gn=s(w);y=i(Gn,"Below is the documentation for the "),k=n(Gn,"CODE",{});var Ci=s(k);O=i(Ci,"HfApi"),Ci.forEach(t),T=i(Gn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Gn.forEach(t),R=h(o),_=n(o,"P",{});var Bn=s(_);F=i(Bn,"All methods from the "),M=n(Bn,"CODE",{});var Si=s(M);W=i(Si,"HfApi"),Si.forEach(t),L=i(Bn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Bn.forEach(t),K=h(o),G=n(o,"P",{});var Mi=s(G);A=i(Mi,"The following approach uses the method from the root of the package:"),Mi.forEach(t),U=h(o),H(C.$$.fragment,o),Y=h(o),te=n(o,"P",{});var Kn=s(te);Z=i(Kn,"The following approach uses the "),J=n(Kn,"CODE",{});var Ui=s(J);ee=i(Ui,"HfApi"),Ui.forEach(t),ae=i(Kn," class:"),Kn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var We=s(ne);Je=i(We,"Using the "),de=n(We,"A",{href:!0});var Vi=s(de);ht=i(Vi,"HfApi"),Vi.forEach(t),Qe=i(We,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),we=n(We,"CODE",{});var zi=s(we);dt=i(zi,"huggingface-cli login"),zi.forEach(t),ut=i(We," or "),ft=n(We,"A",{href:!0});var Wi=s(ft);as=i(Wi,"login()"),Wi.forEach(t),ca=i(We,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),We.forEach(t),pa=h(o),H(Le.$$.fragment,o),ga=h(o),mt=n(o,"H3",{class:!0});var Jn=s(mt);Pt=n(Jn,"A",{id:!0,class:!0,href:!0});var Gi=s(Pt);Os=n(Gi,"SPAN",{});var Bi=s(Os);H(ha.$$.fragment,Bi),Bi.forEach(t),Gi.forEach(t),wc=h(Jn),Rs=n(Jn,"SPAN",{});var Ki=s(Rs);kc=i(Ki,"HfApi"),Ki.forEach(t),Jn.forEach(t),nl=h(o),V=n(o,"DIV",{class:!0});var z=s(V);H(da.$$.fragment,z),Ac=h(z),ke=n(z,"DIV",{class:!0});var Ge=s(ke);H(ua.$$.fragment,Ge),xc=h(Ge),Ls=n(Ge,"P",{});var Ji=s(Ls);Dc=i(Ji,"Closes or re-opens a Discussion or Pull Request."),Ji.forEach(t),Hc=h(Ge),H(Ot.$$.fragment,Ge),qc=h(Ge),H(Rt.$$.fragment,Ge),Ge.forEach(t),Ic=h(z),Ae=n(z,"DIV",{class:!0});var Be=s(Ae);H(fa.$$.fragment,Be),Nc=h(Be),Cs=n(Be,"P",{});var Qi=s(Cs);jc=i(Qi,"Creates a new comment on the given Discussion."),Qi.forEach(t),Fc=h(Be),H(Lt.$$.fragment,Be),Tc=h(Be),H(Ct.$$.fragment,Be),Be.forEach(t),Pc=h(z),xe=n(z,"DIV",{class:!0});var Ke=s(xe);H(ma.$$.fragment,Ke),Oc=h(Ke),Ss=n(Ke,"P",{});var Xi=s(Ss);Rc=i(Xi,"Creates a commit in the given repo, deleting & uploading files as needed."),Xi.forEach(t),Lc=h(Ke),H(St.$$.fragment,Ke),Cc=h(Ke),H(Mt.$$.fragment,Ke),Ke.forEach(t),Sc=h(z),le=n(z,"DIV",{class:!0});var me=s(le);H(_a.$$.fragment,me),Mc=h(me),Ms=n(me,"P",{});var Yi=s(Ms);Uc=i(Yi,"Creates a Discussion or Pull Request."),Yi.forEach(t),Vc=h(me),ba=n(me,"P",{});var Qn=s(ba);zc=i(Qn,"Pull Requests created programmatically will be in "),Us=n(Qn,"CODE",{});var Zi=s(Us);Wc=i(Zi,'"draft"'),Zi.forEach(t),Gc=i(Qn," status."),Qn.forEach(t),Bc=h(me),va=n(me,"P",{});var Xn=s(va);Kc=i(Xn,"Creating a Pull Request with changes can also be done at once with "),ns=n(Xn,"A",{href:!0});var el=s(ns);Jc=i(el,"HfApi.create_commit()"),el.forEach(t),Qc=i(Xn,"."),Xn.forEach(t),Xc=h(me),ss=n(me,"P",{});var bs=s(ss);Yc=i(bs,"Returns: "),rs=n(bs,"A",{href:!0});var tl=s(rs);Zc=i(tl,"DiscussionWithDetails"),tl.forEach(t),bs.forEach(t),ep=h(me),H(Ut.$$.fragment,me),me.forEach(t),tp=h(z),ce=n(z,"DIV",{class:!0});var _e=s(ce);H($a.$$.fragment,_e),op=h(_e),ya=n(_e,"P",{});var Yn=s(ya);ap=i(Yn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Vs=n(Yn,"CODE",{});var ol=s(Vs);np=i(ol,'"draft"'),ol.forEach(t),sp=i(Yn," status."),Yn.forEach(t),rp=h(_e),Ea=n(_e,"P",{});var Zn=s(Ea);ip=i(Zn,"Creating a Pull Request with changes can also be done at once with "),is=n(Zn,"A",{href:!0});var al=s(is);lp=i(al,"HfApi.create_commit()"),al.forEach(t),cp=i(Zn,";"),Zn.forEach(t),pp=h(_e),wa=n(_e,"P",{});var es=s(wa);gp=i(es,"This is a wrapper around "),zs=n(es,"CODE",{});var Vf=s(zs);hp=i(Vf,"HfApi.create_discusssion"),Vf.forEach(t),dp=i(es,"."),es.forEach(t),up=h(_e),ls=n(_e,"P",{});var Rf=s(ls);fp=i(Rf,"Returns: "),cs=n(Rf,"A",{href:!0});var zf=s(cs);mp=i(zf,"DiscussionWithDetails"),zf.forEach(t),Rf.forEach(t),_p=h(_e),H(Vt.$$.fragment,_e),_e.forEach(t),bp=h(z),zt=n(z,"DIV",{class:!0});var Tl=s(zt);H(ka.$$.fragment,Tl),vp=h(Tl),Ws=n(Tl,"P",{});var Wf=s(Ws);$p=i(Wf,"Create an empty repo on the HuggingFace Hub."),Wf.forEach(t),Tl.forEach(t),yp=h(z),Wt=n(z,"DIV",{class:!0});var Pl=s(Wt);H(Aa.$$.fragment,Pl),Ep=h(Pl),Gs=n(Pl,"P",{});var Gf=s(Gs);wp=i(Gf,"Tag a given commit of a repo on the Hub."),Gf.forEach(t),Pl.forEach(t),kp=h(z),De=n(z,"DIV",{class:!0});var Yo=s(De);H(xa.$$.fragment,Yo),Ap=h(Yo),Bs=n(Yo,"P",{});var Bf=s(Bs);xp=i(Bf,"Get info on one specific dataset on huggingface.co."),Bf.forEach(t),Dp=h(Yo),Ks=n(Yo,"P",{});var Kf=s(Ks);Hp=i(Kf,"Dataset can be private if you pass an acceptable token."),Kf.forEach(t),qp=h(Yo),H(Gt.$$.fragment,Yo),Yo.forEach(t),Ip=h(z),Xe=n(z,"DIV",{class:!0});var vs=s(Xe);H(Da.$$.fragment,vs),Np=h(vs),Js=n(vs,"P",{});var Jf=s(Js);jp=i(Jf,"Deletes a file in the given repo."),Jf.forEach(t),Fp=h(vs),H(Bt.$$.fragment,vs),vs.forEach(t),Tp=h(z),Ye=n(z,"DIV",{class:!0});var $s=s(Ye);H(Ha.$$.fragment,$s),Pp=h($s),Qs=n($s,"P",{});var Qf=s(Qs);Op=i(Qf,"Deletes a folder in the given repo."),Qf.forEach(t),Rp=h($s),qa=n($s,"P",{});var Ol=s(qa);Lp=i(Ol,"Simple wrapper around "),ps=n(Ol,"A",{href:!0});var Xf=s(ps);Cp=i(Xf,"create_commit()"),Xf.forEach(t),Sp=i(Ol," method."),Ol.forEach(t),$s.forEach(t),Mp=h(z),Ze=n(z,"DIV",{class:!0});var ys=s(Ze);H(Ia.$$.fragment,ys),Up=h(ys),Xs=n(ys,"P",{});var Yf=s(Xs);Vp=i(Yf,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Yf.forEach(t),zp=h(ys),H(Kt.$$.fragment,ys),ys.forEach(t),Wp=h(z),Jt=n(z,"DIV",{class:!0});var Rl=s(Jt);H(Na.$$.fragment,Rl),Gp=h(Rl),Ys=n(Rl,"P",{});var Zf=s(Ys);Bp=i(Zf,"Delete a tag from a repo on the Hub."),Zf.forEach(t),Rl.forEach(t),Kp=h(z),et=n(z,"DIV",{class:!0});var Es=s(et);H(ja.$$.fragment,Es),Jp=h(Es),Zs=n(Es,"P",{});var em=s(Zs);Qp=i(em,"Edits a comment on a Discussion / Pull Request."),em.forEach(t),Xp=h(Es),H(Qt.$$.fragment,Es),Es.forEach(t),Yp=h(z),Xt=n(z,"DIV",{class:!0});var Ll=s(Xt);H(Fa.$$.fragment,Ll),Zp=h(Ll),er=n(Ll,"P",{});var tm=s(er);eg=i(tm,"Gets all valid dataset tags as a nested namespace object."),tm.forEach(t),Ll.forEach(t),tg=h(z),He=n(z,"DIV",{class:!0});var Zo=s(He);H(Ta.$$.fragment,Zo),og=h(Zo),tr=n(Zo,"P",{});var om=s(tr);ag=i(om,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),om.forEach(t),ng=h(Zo),gs=n(Zo,"P",{});var Lf=s(gs);sg=i(Lf,"Returns: "),hs=n(Lf,"A",{href:!0});var am=s(hs);rg=i(am,"DiscussionWithDetails"),am.forEach(t),Lf.forEach(t),ig=h(Zo),H(Yt.$$.fragment,Zo),Zo.forEach(t),lg=h(z),Zt=n(z,"DIV",{class:!0});var Cl=s(Zt);H(Pa.$$.fragment,Cl),cg=h(Cl),or=n(Cl,"P",{});var nm=s(or);pg=i(nm,`Returns the repository name for a given model ID and optional
organization.`),nm.forEach(t),Cl.forEach(t),gg=h(z),eo=n(z,"DIV",{class:!0});var Sl=s(eo);H(Oa.$$.fragment,Sl),hg=h(Sl),ar=n(Sl,"P",{});var sm=s(ar);dg=i(sm,"Gets all valid model tags as a nested namespace object"),sm.forEach(t),Sl.forEach(t),ug=h(z),be=n(z,"DIV",{class:!0});var lt=s(be);H(Ra.$$.fragment,lt),fg=h(lt),nr=n(lt,"P",{});var rm=s(nr);mg=i(rm,"Fetches Discussions and Pull Requests for the given repo."),rm.forEach(t),_g=h(lt),sr=n(lt,"P",{});var im=s(sr);bg=i(im,"Example:"),im.forEach(t),vg=h(lt),H(to.$$.fragment,lt),$g=h(lt),H(oo.$$.fragment,lt),lt.forEach(t),yg=h(z),qe=n(z,"DIV",{class:!0});var ea=s(qe);H(La.$$.fragment,ea),Eg=h(ea),rr=n(ea,"P",{});var lm=s(rr);wg=i(lm,"Hides a comment on a Discussion / Pull Request."),lm.forEach(t),kg=h(ea),H(ao.$$.fragment,ea),Ag=h(ea),H(no.$$.fragment,ea),ea.forEach(t),xg=h(z),Ie=n(z,"DIV",{class:!0});var ta=s(Ie);H(Ca.$$.fragment,ta),Dg=h(ta),ir=n(ta,"P",{});var cm=s(ir);Hg=i(cm,"Get the list of all the datasets on huggingface.co"),cm.forEach(t),qg=h(ta),H(so.$$.fragment,ta),Ig=h(ta),H(ro.$$.fragment,ta),ta.forEach(t),Ng=h(z),io=n(z,"DIV",{class:!0});var Ml=s(io);H(Sa.$$.fragment,Ml),jg=h(Ml),lr=n(Ml,"P",{});var pm=s(lr);Fg=i(pm,"Get the public list of all the metrics on huggingface.co"),pm.forEach(t),Ml.forEach(t),Tg=h(z),Ne=n(z,"DIV",{class:!0});var oa=s(Ne);H(Ma.$$.fragment,oa),Pg=h(oa),cr=n(oa,"P",{});var gm=s(cr);Og=i(gm,"Get the list of all the models on huggingface.co"),gm.forEach(t),Rg=h(oa),H(lo.$$.fragment,oa),Lg=h(oa),H(co.$$.fragment,oa),oa.forEach(t),Cg=h(z),po=n(z,"DIV",{class:!0});var Ul=s(po);H(Ua.$$.fragment,Ul),Sg=h(Ul),pr=n(Ul,"P",{});var hm=s(pr);Mg=i(hm,"Get the list of files in a given repo."),hm.forEach(t),Ul.forEach(t),Ug=h(z),go=n(z,"DIV",{class:!0});var Vl=s(go);H(Va.$$.fragment,Vl),Vg=h(Vl),gr=n(Vl,"P",{});var dm=s(gr);zg=i(dm,"Get the public list of all Spaces on huggingface.co"),dm.forEach(t),Vl.forEach(t),Wg=h(z),tt=n(z,"DIV",{class:!0});var ws=s(tt);H(za.$$.fragment,ws),Gg=h(ws),hr=n(ws,"P",{});var um=s(hr);Bg=i(um,"Merges a Pull Request."),um.forEach(t),Kg=h(ws),H(ho.$$.fragment,ws),ws.forEach(t),Jg=h(z),je=n(z,"DIV",{class:!0});var aa=s(je);H(Wa.$$.fragment,aa),Qg=h(aa),dr=n(aa,"P",{});var fm=s(dr);Xg=i(fm,"Get info on one specific model on huggingface.co"),fm.forEach(t),Yg=h(aa),ur=n(aa,"P",{});var mm=s(ur);Zg=i(mm,"Model can be private if you pass an acceptable token or are logged in."),mm.forEach(t),eh=h(aa),H(uo.$$.fragment,aa),aa.forEach(t),th=h(z),Fe=n(z,"DIV",{class:!0});var na=s(Fe);H(Ga.$$.fragment,na),oh=h(na),fr=n(na,"P",{});var _m=s(fr);ah=i(_m,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),_m.forEach(t),nh=h(na),Ba=n(na,"P",{});var zl=s(Ba);sh=i(zl,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ka=n(zl,"A",{href:!0,rel:!0});var bm=s(Ka);rh=i(bm,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),bm.forEach(t),ih=i(zl,"."),zl.forEach(t),lh=h(na),H(fo.$$.fragment,na),na.forEach(t),ch=h(z),Te=n(z,"DIV",{class:!0});var sa=s(Te);H(Ja.$$.fragment,sa),ph=h(sa),mr=n(sa,"P",{});var vm=s(mr);gh=i(vm,"Renames a Discussion."),vm.forEach(t),hh=h(sa),H(mo.$$.fragment,sa),dh=h(sa),H(_o.$$.fragment,sa),sa.forEach(t),uh=h(z),ot=n(z,"DIV",{class:!0});var ks=s(ot);H(Qa.$$.fragment,ks),fh=h(ks),_r=n(ks,"P",{});var $m=s(_r);mh=i($m,"Get the info object for a given repo of a given type."),$m.forEach(t),_h=h(ks),H(bo.$$.fragment,ks),ks.forEach(t),bh=h(z),vo=n(z,"DIV",{class:!0});var Wl=s(vo);H(Xa.$$.fragment,Wl),vh=h(Wl),br=n(Wl,"P",{});var ym=s(br);$h=i(ym,`Saves the passed access token so git can correctly authenticate the
user.`),ym.forEach(t),Wl.forEach(t),yh=h(z),Pe=n(z,"DIV",{class:!0});var ra=s(Pe);H(Ya.$$.fragment,ra),Eh=h(ra),vr=n(ra,"P",{});var Em=s(vr);wh=i(Em,"Get info on one specific Space on huggingface.co."),Em.forEach(t),kh=h(ra),$r=n(ra,"P",{});var wm=s($r);Ah=i(wm,"Space can be private if you pass an acceptable token."),wm.forEach(t),xh=h(ra),H($o.$$.fragment,ra),ra.forEach(t),Dh=h(z),yo=n(z,"DIV",{class:!0});var Gl=s(yo);H(Za.$$.fragment,Gl),Hh=h(Gl),yr=n(Gl,"P",{});var km=s(yr);qh=i(km,"Resets the user\u2019s access token."),km.forEach(t),Gl.forEach(t),Ih=h(z),at=n(z,"DIV",{class:!0});var As=s(at);H(en.$$.fragment,As),Nh=h(As),Er=n(As,"P",{});var Am=s(Er);jh=i(Am,"Update the visibility setting of a repository."),Am.forEach(t),Fh=h(As),H(Eo.$$.fragment,As),As.forEach(t),Th=h(z),ve=n(z,"DIV",{class:!0});var ct=s(ve);H(tn.$$.fragment,ct),Ph=h(ct),wr=n(ct,"P",{});var xm=s(wr);Oh=i(xm,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),xm.forEach(t),Rh=h(ct),H(wo.$$.fragment,ct),Lh=h(ct),H(ko.$$.fragment,ct),Ch=h(ct),H(Ao.$$.fragment,ct),ct.forEach(t),Sh=h(z),re=n(z,"DIV",{class:!0});var pe=s(re);H(on.$$.fragment,pe),Mh=h(pe),kr=n(pe,"P",{});var Dm=s(kr);Uh=i(Dm,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Dm.forEach(t),Vh=h(pe),Ar=n(pe,"P",{});var Hm=s(Ar);zh=i(Hm,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Hm.forEach(t),Wh=h(pe),ue=n(pe,"P",{});var Re=s(ue);Gh=i(Re,"Use the "),xr=n(Re,"CODE",{});var qm=s(xr);Bh=i(qm,"allow_patterns"),qm.forEach(t),Kh=i(Re," and "),Dr=n(Re,"CODE",{});var Im=s(Dr);Jh=i(Im,"ignore_patterns"),Im.forEach(t),Qh=i(Re,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),an=n(Re,"A",{href:!0,rel:!0});var Nm=s(an);Xh=i(Nm,"here"),Nm.forEach(t),Yh=i(Re,`. If both
`),Hr=n(Re,"CODE",{});var jm=s(Hr);Zh=i(jm,"allow_patterns"),jm.forEach(t),ed=i(Re," and "),qr=n(Re,"CODE",{});var Fm=s(qr);td=i(Fm,"ignore_patterns"),Fm.forEach(t),od=i(Re,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Re.forEach(t),ad=h(pe),nn=n(pe,"P",{});var Bl=s(nn);nd=i(Bl,"Uses "),Ir=n(Bl,"CODE",{});var Tm=s(Ir);sd=i(Tm,"HfApi.create_commit"),Tm.forEach(t),rd=i(Bl," under the hood."),Bl.forEach(t),id=h(pe),H(xo.$$.fragment,pe),ld=h(pe),H(Do.$$.fragment,pe),cd=h(pe),H(Ho.$$.fragment,pe),pe.forEach(t),pd=h(z),qo=n(z,"DIV",{class:!0});var Kl=s(qo);H(sn.$$.fragment,Kl),gd=h(Kl),Nr=n(Kl,"P",{});var Pm=s(Nr);hd=i(Pm,"Call HF API to know \u201Cwhoami\u201D."),Pm.forEach(t),Kl.forEach(t),z.forEach(t),sl=h(o),_t=n(o,"H3",{class:!0});var Jl=s(_t);Io=n(Jl,"A",{id:!0,class:!0,href:!0});var Om=s(Io);jr=n(Om,"SPAN",{});var Rm=s(jr);H(rn.$$.fragment,Rm),Rm.forEach(t),Om.forEach(t),dd=h(Jl),Fr=n(Jl,"SPAN",{});var Lm=s(Fr);ud=i(Lm,"ModelInfo"),Lm.forEach(t),Jl.forEach(t),rl=h(o),bt=n(o,"DIV",{class:!0});var Ql=s(bt);H(ln.$$.fragment,Ql),fd=h(Ql),Tr=n(Ql,"P",{});var Cm=s(Tr);md=i(Cm,"Info about a model accessible from huggingface.co"),Cm.forEach(t),Ql.forEach(t),il=h(o),vt=n(o,"H3",{class:!0});var Xl=s(vt);No=n(Xl,"A",{id:!0,class:!0,href:!0});var Sm=s(No);Pr=n(Sm,"SPAN",{});var Mm=s(Pr);H(cn.$$.fragment,Mm),Mm.forEach(t),Sm.forEach(t),_d=h(Xl),Or=n(Xl,"SPAN",{});var Um=s(Or);bd=i(Um,"DatasetInfo"),Um.forEach(t),Xl.forEach(t),ll=h(o),$t=n(o,"DIV",{class:!0});var Yl=s($t);H(pn.$$.fragment,Yl),vd=h(Yl),Rr=n(Yl,"P",{});var Vm=s(Rr);$d=i(Vm,"Info about a dataset accessible from huggingface.co"),Vm.forEach(t),Yl.forEach(t),cl=h(o),yt=n(o,"H3",{class:!0});var Zl=s(yt);jo=n(Zl,"A",{id:!0,class:!0,href:!0});var zm=s(jo);Lr=n(zm,"SPAN",{});var Wm=s(Lr);H(gn.$$.fragment,Wm),Wm.forEach(t),zm.forEach(t),yd=h(Zl),Cr=n(Zl,"SPAN",{});var Gm=s(Cr);Ed=i(Gm,"SpaceInfo"),Gm.forEach(t),Zl.forEach(t),pl=h(o),Ce=n(o,"DIV",{class:!0});var xs=s(Ce);H(hn.$$.fragment,xs),wd=h(xs),Sr=n(xs,"P",{});var Bm=s(Sr);kd=i(Bm,"Info about a Space accessible from huggingface.co"),Bm.forEach(t),Ad=h(xs),Mr=n(xs,"P",{});var Km=s(Mr);xd=i(Km,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Km.forEach(t),xs.forEach(t),gl=h(o),Et=n(o,"H3",{class:!0});var ec=s(Et);Fo=n(ec,"A",{id:!0,class:!0,href:!0});var Jm=s(Fo);Ur=n(Jm,"SPAN",{});var Qm=s(Ur);H(dn.$$.fragment,Qm),Qm.forEach(t),Jm.forEach(t),Dd=h(ec),Vr=n(ec,"SPAN",{});var Xm=s(Vr);Hd=i(Xm,"RepoFile"),Xm.forEach(t),ec.forEach(t),hl=h(o),wt=n(o,"DIV",{class:!0});var tc=s(wt);H(un.$$.fragment,tc),qd=h(tc),zr=n(tc,"P",{});var Ym=s(zr);Id=i(Ym,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Ym.forEach(t),tc.forEach(t),dl=h(o),kt=n(o,"H3",{class:!0});var oc=s(kt);To=n(oc,"A",{id:!0,class:!0,href:!0});var Zm=s(To);Wr=n(Zm,"SPAN",{});var e_=s(Wr);H(fn.$$.fragment,e_),e_.forEach(t),Zm.forEach(t),Nd=h(oc),Gr=n(oc,"SPAN",{});var t_=s(Gr);jd=i(t_,"CommitInfo"),t_.forEach(t),oc.forEach(t),ul=h(o),Se=n(o,"DIV",{class:!0});var Ds=s(Se);H(mn.$$.fragment,Ds),Fd=h(Ds),Br=n(Ds,"P",{});var o_=s(Br);Td=i(o_,"Data structure containing information about a newly created commit."),o_.forEach(t),Pd=h(Ds),_n=n(Ds,"P",{});var ac=s(_n);Od=i(ac,"Returned by "),ds=n(ac,"A",{href:!0});var a_=s(ds);Rd=i(a_,"create_commit()"),a_.forEach(t),Ld=i(ac,"."),ac.forEach(t),Ds.forEach(t),fl=h(o),At=n(o,"H2",{class:!0});var nc=s(At);Po=n(nc,"A",{id:!0,class:!0,href:!0});var n_=s(Po);Kr=n(n_,"SPAN",{});var s_=s(Kr);H(bn.$$.fragment,s_),s_.forEach(t),n_.forEach(t),Cd=h(nc),us=n(nc,"SPAN",{});var Cf=s(us);Jr=n(Cf,"CODE",{});var r_=s(Jr);Sd=i(r_,"create_commit"),r_.forEach(t),Md=i(Cf," API"),Cf.forEach(t),nc.forEach(t),ml=h(o),Oo=n(o,"P",{});var sc=s(Oo);Ud=i(sc,"Below are the supported values for "),Qr=n(sc,"CODE",{});var i_=s(Qr);Vd=i(i_,"CommitOperation()"),i_.forEach(t),zd=i(sc,":"),sc.forEach(t),_l=h(o),fe=n(o,"DIV",{class:!0});var pt=s(fe);H(vn.$$.fragment,pt),Wd=h(pt),Xr=n(pt,"P",{});var l_=s(Xr);Gd=i(l_,`Data structure holding necessary info to upload a file
to a repository on the Hub`),l_.forEach(t),Bd=h(pt),$e=n(pt,"DIV",{class:!0});var gt=s($e);H($n.$$.fragment,gt),Kd=h(gt),yn=n(gt,"P",{});var rc=s(yn);Jd=i(rc,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Yr=n(rc,"CODE",{});var c_=s(Yr);Qd=i(c_,"path_or_fileobj"),c_.forEach(t),Xd=i(rc,"."),rc.forEach(t),Yd=h(gt),En=n(gt,"P",{});var ic=s(En);Zd=i(ic,"Triggers "),Zr=n(ic,"CODE",{});var p_=s(Zr);eu=i(p_,"self.validate"),p_.forEach(t),tu=i(ic,"."),ic.forEach(t),ou=h(gt),wn=n(gt,"P",{});var lc=s(wn);au=i(lc,"Raises: "),ei=n(lc,"CODE",{});var g_=s(ei);nu=i(g_,"ValueError"),g_.forEach(t),su=i(lc," if self.validate fails"),lc.forEach(t),ru=h(gt),H(Ro.$$.fragment,gt),gt.forEach(t),iu=h(pt),nt=n(pt,"DIV",{class:!0});var Hs=s(nt);H(kn.$$.fragment,Hs),lu=h(Hs),fs=n(Hs,"P",{});var Sf=s(fs);cu=i(Sf,"The base64-encoded content of "),ti=n(Sf,"CODE",{});var h_=s(ti);pu=i(h_,"path_or_fileobj"),h_.forEach(t),Sf.forEach(t),gu=h(Hs),ms=n(Hs,"P",{});var Mf=s(ms);hu=i(Mf,"Returns: "),oi=n(Mf,"CODE",{});var d_=s(oi);du=i(d_,"bytes"),d_.forEach(t),Mf.forEach(t),Hs.forEach(t),uu=h(pt),Oe=n(pt,"DIV",{class:!0});var ia=s(Oe);H(An.$$.fragment,ia),fu=h(ia),xn=n(ia,"P",{});var cc=s(xn);mu=i(cc,"Ensures "),ai=n(cc,"CODE",{});var u_=s(ai);_u=i(u_,"path_or_fileobj"),u_.forEach(t),bu=i(cc," is valid:"),cc.forEach(t),vu=h(ia),xt=n(ia,"UL",{});var qs=s(xt);st=n(qs,"LI",{});var ts=s(st);$u=i(ts,"Ensures it is either a "),ni=n(ts,"CODE",{});var f_=s(ni);yu=i(f_,"str"),f_.forEach(t),Eu=i(ts,", "),si=n(ts,"CODE",{});var m_=s(si);wu=i(m_,"bytes"),m_.forEach(t),ku=i(ts," or an instance of "),ri=n(ts,"CODE",{});var __=s(ri);Au=i(__,"io.BufferedIOBase"),__.forEach(t),ts.forEach(t),xu=h(qs),Dn=n(qs,"LI",{});var pc=s(Dn);Du=i(pc,"If it is a "),ii=n(pc,"CODE",{});var b_=s(ii);Hu=i(b_,"str"),b_.forEach(t),qu=i(pc,", ensure that it is a file path and that the file exists"),pc.forEach(t),Iu=h(qs),rt=n(qs,"LI",{});var os=s(rt);Nu=i(os,"If it is an instance of "),li=n(os,"CODE",{});var v_=s(li);ju=i(v_,"io.BufferedIOBase"),v_.forEach(t),Fu=i(os,", ensures it supports "),ci=n(os,"CODE",{});var $_=s(ci);Tu=i($_,"seek()"),$_.forEach(t),Pu=i(os," and "),pi=n(os,"CODE",{});var y_=s(pi);Ou=i(y_,"tell()"),y_.forEach(t),os.forEach(t),qs.forEach(t),Ru=h(ia),Dt=n(ia,"P",{});var Is=s(Dt);Lu=i(Is,"Raises: "),gi=n(Is,"CODE",{});var E_=s(gi);Cu=i(E_,"ValueError"),E_.forEach(t),Su=i(Is," if "),hi=n(Is,"CODE",{});var w_=s(hi);Mu=i(w_,"path_or_fileobj"),w_.forEach(t),Uu=i(Is," is not valid"),Is.forEach(t),ia.forEach(t),pt.forEach(t),bl=h(o),Ht=n(o,"DIV",{class:!0});var gc=s(Ht);H(Hn.$$.fragment,gc),Vu=h(gc),di=n(gc,"P",{});var k_=s(di);zu=i(k_,`Data structure holding necessary info to delete a file or a folder from a repository
on the Hub.`),k_.forEach(t),gc.forEach(t),vl=h(o),qt=n(o,"H2",{class:!0});var hc=s(qt);Lo=n(hc,"A",{id:!0,class:!0,href:!0});var A_=s(Lo);ui=n(A_,"SPAN",{});var x_=s(ui);H(qn.$$.fragment,x_),x_.forEach(t),A_.forEach(t),Wu=h(hc),fi=n(hc,"SPAN",{});var D_=s(fi);Gu=i(D_,"Hugging Face local storage"),D_.forEach(t),hc.forEach(t),$l=h(o),In=n(o,"P",{});var Uf=s(In);mi=n(Uf,"CODE",{});var H_=s(mi);Bu=i(H_,"huggingface_hub"),H_.forEach(t),Ku=i(Uf,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Uf.forEach(t),yl=h(o),Co=n(o,"P",{});var dc=s(Co);Ju=i(dc,"It does this using the "),_s=n(dc,"A",{href:!0});var q_=s(_s);Qu=i(q_,"HfFolder"),q_.forEach(t),Xu=i(dc," utility, which saves data at the root of the user."),dc.forEach(t),El=h(o),Ee=n(o,"DIV",{class:!0});var la=s(Ee);H(Nn.$$.fragment,la),Yu=h(la),So=n(la,"DIV",{class:!0});var uc=s(So);H(jn.$$.fragment,uc),Zu=h(uc),_i=n(uc,"P",{});var I_=s(_i);ef=i(I_,"Deletes the token from storage. Does not fail if token does not exist."),I_.forEach(t),uc.forEach(t),tf=h(la),it=n(la,"DIV",{class:!0});var Ns=s(it);H(Fn.$$.fragment,Ns),of=h(Ns),bi=n(Ns,"P",{});var N_=s(bi);af=i(N_,"Get token or None if not existent."),N_.forEach(t),nf=h(Ns),Tn=n(Ns,"P",{});var fc=s(Tn);sf=i(fc,`Note that a token can be also provided using the
`),vi=n(fc,"CODE",{});var j_=s(vi);rf=i(j_,"HUGGING_FACE_HUB_TOKEN"),j_.forEach(t),lf=i(fc," environment variable."),fc.forEach(t),Ns.forEach(t),cf=h(la),Mo=n(la,"DIV",{class:!0});var mc=s(Mo);H(Pn.$$.fragment,mc),pf=h(mc),$i=n(mc,"P",{});var F_=s($i);gf=i(F_,"Save token, creating folder as needed."),F_.forEach(t),mc.forEach(t),la.forEach(t),wl=h(o),It=n(o,"H2",{class:!0});var _c=s(It);Uo=n(_c,"A",{id:!0,class:!0,href:!0});var T_=s(Uo);yi=n(T_,"SPAN",{});var P_=s(yi);H(On.$$.fragment,P_),P_.forEach(t),T_.forEach(t),hf=h(_c),Ei=n(_c,"SPAN",{});var O_=s(Ei);df=i(O_,"Filtering helpers"),O_.forEach(t),_c.forEach(t),kl=h(o),Vo=n(o,"P",{});var bc=s(Vo);uf=i(bc,"Some helpers to filter repositories on the Hub are available in the "),wi=n(bc,"CODE",{});var R_=s(wi);ff=i(R_,"huggingface_hub"),R_.forEach(t),mf=i(bc," package."),bc.forEach(t),Al=h(o),Nt=n(o,"H3",{class:!0});var vc=s(Nt);zo=n(vc,"A",{id:!0,class:!0,href:!0});var L_=s(zo);ki=n(L_,"SPAN",{});var C_=s(ki);H(Rn.$$.fragment,C_),C_.forEach(t),L_.forEach(t),_f=h(vc),Ai=n(vc,"SPAN",{});var S_=s(Ai);bf=i(S_,"DatasetFilter"),S_.forEach(t),vc.forEach(t),xl=h(o),Me=n(o,"DIV",{class:!0});var js=s(Me);H(Ln.$$.fragment,js),vf=h(js),xi=n(js,"P",{});var M_=s(xi);$f=i(M_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),M_.forEach(t),yf=h(js),H(Wo.$$.fragment,js),js.forEach(t),Dl=h(o),jt=n(o,"H3",{class:!0});var $c=s(jt);Go=n($c,"A",{id:!0,class:!0,href:!0});var U_=s(Go);Di=n(U_,"SPAN",{});var V_=s(Di);H(Cn.$$.fragment,V_),V_.forEach(t),U_.forEach(t),Ef=h($c),Hi=n($c,"SPAN",{});var z_=s(Hi);wf=i(z_,"ModelFilter"),z_.forEach(t),$c.forEach(t),Hl=h(o),Ue=n(o,"DIV",{class:!0});var Fs=s(Ue);H(Sn.$$.fragment,Fs),kf=h(Fs),qi=n(Fs,"P",{});var W_=s(qi);Af=i(W_,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),W_.forEach(t),xf=h(Fs),H(Bo.$$.fragment,Fs),Fs.forEach(t),ql=h(o),Ft=n(o,"H3",{class:!0});var yc=s(Ft);Ko=n(yc,"A",{id:!0,class:!0,href:!0});var G_=s(Ko);Ii=n(G_,"SPAN",{});var B_=s(Ii);H(Mn.$$.fragment,B_),B_.forEach(t),G_.forEach(t),Df=h(yc),Ni=n(yc,"SPAN",{});var K_=s(Ni);Hf=i(K_,"DatasetSearchArguments"),K_.forEach(t),yc.forEach(t),Il=h(o),Ve=n(o,"DIV",{class:!0});var Ts=s(Ve);H(Un.$$.fragment,Ts),qf=h(Ts),ji=n(Ts,"P",{});var J_=s(ji);If=i(J_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),J_.forEach(t),Nf=h(Ts),H(Jo.$$.fragment,Ts),Ts.forEach(t),Nl=h(o),Tt=n(o,"H3",{class:!0});var Ec=s(Tt);Qo=n(Ec,"A",{id:!0,class:!0,href:!0});var Q_=s(Qo);Fi=n(Q_,"SPAN",{});var X_=s(Fi);H(Vn.$$.fragment,X_),X_.forEach(t),Q_.forEach(t),jf=h(Ec),Ti=n(Ec,"SPAN",{});var Y_=s(Ti);Ff=i(Y_,"ModelSearchArguments"),Y_.forEach(t),Ec.forEach(t),jl=h(o),ze=n(o,"DIV",{class:!0});var Ps=s(ze);H(zn.$$.fragment,Ps),Tf=h(Ps),Pi=n(Ps,"P",{});var Z_=s(Pi);Pf=i(Z_,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Z_.forEach(t),Of=h(Ps),H(Xo.$$.fragment,Ps),Ps.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Gb)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(ft,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Pt,"id","huggingface_hub.HfApi"),m(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pt,"href","#huggingface_hub.HfApi"),m(mt,"class","relative group"),m(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(rs,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(is,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(cs,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ps,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hs,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ka,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Ka,"rel","nofollow"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(an,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.hf_api.ModelInfo"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.hf_api.ModelInfo"),m(_t,"class","relative group"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","huggingface_hub.hf_api.DatasetInfo"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#huggingface_hub.hf_api.DatasetInfo"),m(vt,"class","relative group"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","huggingface_hub.hf_api.SpaceInfo"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#huggingface_hub.hf_api.SpaceInfo"),m(yt,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.hf_api.RepoFile"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.hf_api.RepoFile"),m(Et,"class","relative group"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","huggingface_hub.CommitInfo"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#huggingface_hub.CommitInfo"),m(kt,"class","relative group"),m(ds,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Po,"id","huggingface_hub.CommitOperationAdd"),m(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Po,"href","#huggingface_hub.CommitOperationAdd"),m(At,"class","relative group"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","huggingface_hub.HfFolder"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#huggingface_hub.HfFolder"),m(qt,"class","relative group"),m(_s,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","filtering-helpers"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#filtering-helpers"),m(It,"class","relative group"),m(zo,"id","huggingface_hub.DatasetFilter"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#huggingface_hub.DatasetFilter"),m(Nt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","huggingface_hub.ModelFilter"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#huggingface_hub.ModelFilter"),m(jt,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"id","huggingface_hub.DatasetSearchArguments"),m(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ko,"href","#huggingface_hub.DatasetSearchArguments"),m(Ft,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","huggingface_hub.ModelSearchArguments"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#huggingface_hub.ModelSearchArguments"),m(Tt,"class","relative group"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,d),q(l,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,R,E),$(o,_,E),e(_,F),e(_,M),e(M,W),e(_,L),$(o,K,E),$(o,G,E),e(G,A),$(o,U,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Je),e(ne,de),e(de,ht),e(ne,Qe),e(ne,we),e(we,dt),e(ne,ut),e(ne,ft),e(ft,as),e(ne,ca),$(o,pa,E),q(Le,o,E),$(o,ga,E),$(o,mt,E),e(mt,Pt),e(Pt,Os),q(ha,Os,null),e(mt,wc),e(mt,Rs),e(Rs,kc),$(o,nl,E),$(o,V,E),q(da,V,null),e(V,Ac),e(V,ke),q(ua,ke,null),e(ke,xc),e(ke,Ls),e(Ls,Dc),e(ke,Hc),q(Ot,ke,null),e(ke,qc),q(Rt,ke,null),e(V,Ic),e(V,Ae),q(fa,Ae,null),e(Ae,Nc),e(Ae,Cs),e(Cs,jc),e(Ae,Fc),q(Lt,Ae,null),e(Ae,Tc),q(Ct,Ae,null),e(V,Pc),e(V,xe),q(ma,xe,null),e(xe,Oc),e(xe,Ss),e(Ss,Rc),e(xe,Lc),q(St,xe,null),e(xe,Cc),q(Mt,xe,null),e(V,Sc),e(V,le),q(_a,le,null),e(le,Mc),e(le,Ms),e(Ms,Uc),e(le,Vc),e(le,ba),e(ba,zc),e(ba,Us),e(Us,Wc),e(ba,Gc),e(le,Bc),e(le,va),e(va,Kc),e(va,ns),e(ns,Jc),e(va,Qc),e(le,Xc),e(le,ss),e(ss,Yc),e(ss,rs),e(rs,Zc),e(le,ep),q(Ut,le,null),e(V,tp),e(V,ce),q($a,ce,null),e(ce,op),e(ce,ya),e(ya,ap),e(ya,Vs),e(Vs,np),e(ya,sp),e(ce,rp),e(ce,Ea),e(Ea,ip),e(Ea,is),e(is,lp),e(Ea,cp),e(ce,pp),e(ce,wa),e(wa,gp),e(wa,zs),e(zs,hp),e(wa,dp),e(ce,up),e(ce,ls),e(ls,fp),e(ls,cs),e(cs,mp),e(ce,_p),q(Vt,ce,null),e(V,bp),e(V,zt),q(ka,zt,null),e(zt,vp),e(zt,Ws),e(Ws,$p),e(V,yp),e(V,Wt),q(Aa,Wt,null),e(Wt,Ep),e(Wt,Gs),e(Gs,wp),e(V,kp),e(V,De),q(xa,De,null),e(De,Ap),e(De,Bs),e(Bs,xp),e(De,Dp),e(De,Ks),e(Ks,Hp),e(De,qp),q(Gt,De,null),e(V,Ip),e(V,Xe),q(Da,Xe,null),e(Xe,Np),e(Xe,Js),e(Js,jp),e(Xe,Fp),q(Bt,Xe,null),e(V,Tp),e(V,Ye),q(Ha,Ye,null),e(Ye,Pp),e(Ye,Qs),e(Qs,Op),e(Ye,Rp),e(Ye,qa),e(qa,Lp),e(qa,ps),e(ps,Cp),e(qa,Sp),e(V,Mp),e(V,Ze),q(Ia,Ze,null),e(Ze,Up),e(Ze,Xs),e(Xs,Vp),e(Ze,zp),q(Kt,Ze,null),e(V,Wp),e(V,Jt),q(Na,Jt,null),e(Jt,Gp),e(Jt,Ys),e(Ys,Bp),e(V,Kp),e(V,et),q(ja,et,null),e(et,Jp),e(et,Zs),e(Zs,Qp),e(et,Xp),q(Qt,et,null),e(V,Yp),e(V,Xt),q(Fa,Xt,null),e(Xt,Zp),e(Xt,er),e(er,eg),e(V,tg),e(V,He),q(Ta,He,null),e(He,og),e(He,tr),e(tr,ag),e(He,ng),e(He,gs),e(gs,sg),e(gs,hs),e(hs,rg),e(He,ig),q(Yt,He,null),e(V,lg),e(V,Zt),q(Pa,Zt,null),e(Zt,cg),e(Zt,or),e(or,pg),e(V,gg),e(V,eo),q(Oa,eo,null),e(eo,hg),e(eo,ar),e(ar,dg),e(V,ug),e(V,be),q(Ra,be,null),e(be,fg),e(be,nr),e(nr,mg),e(be,_g),e(be,sr),e(sr,bg),e(be,vg),q(to,be,null),e(be,$g),q(oo,be,null),e(V,yg),e(V,qe),q(La,qe,null),e(qe,Eg),e(qe,rr),e(rr,wg),e(qe,kg),q(ao,qe,null),e(qe,Ag),q(no,qe,null),e(V,xg),e(V,Ie),q(Ca,Ie,null),e(Ie,Dg),e(Ie,ir),e(ir,Hg),e(Ie,qg),q(so,Ie,null),e(Ie,Ig),q(ro,Ie,null),e(V,Ng),e(V,io),q(Sa,io,null),e(io,jg),e(io,lr),e(lr,Fg),e(V,Tg),e(V,Ne),q(Ma,Ne,null),e(Ne,Pg),e(Ne,cr),e(cr,Og),e(Ne,Rg),q(lo,Ne,null),e(Ne,Lg),q(co,Ne,null),e(V,Cg),e(V,po),q(Ua,po,null),e(po,Sg),e(po,pr),e(pr,Mg),e(V,Ug),e(V,go),q(Va,go,null),e(go,Vg),e(go,gr),e(gr,zg),e(V,Wg),e(V,tt),q(za,tt,null),e(tt,Gg),e(tt,hr),e(hr,Bg),e(tt,Kg),q(ho,tt,null),e(V,Jg),e(V,je),q(Wa,je,null),e(je,Qg),e(je,dr),e(dr,Xg),e(je,Yg),e(je,ur),e(ur,Zg),e(je,eh),q(uo,je,null),e(V,th),e(V,Fe),q(Ga,Fe,null),e(Fe,oh),e(Fe,fr),e(fr,ah),e(Fe,nh),e(Fe,Ba),e(Ba,sh),e(Ba,Ka),e(Ka,rh),e(Ba,ih),e(Fe,lh),q(fo,Fe,null),e(V,ch),e(V,Te),q(Ja,Te,null),e(Te,ph),e(Te,mr),e(mr,gh),e(Te,hh),q(mo,Te,null),e(Te,dh),q(_o,Te,null),e(V,uh),e(V,ot),q(Qa,ot,null),e(ot,fh),e(ot,_r),e(_r,mh),e(ot,_h),q(bo,ot,null),e(V,bh),e(V,vo),q(Xa,vo,null),e(vo,vh),e(vo,br),e(br,$h),e(V,yh),e(V,Pe),q(Ya,Pe,null),e(Pe,Eh),e(Pe,vr),e(vr,wh),e(Pe,kh),e(Pe,$r),e($r,Ah),e(Pe,xh),q($o,Pe,null),e(V,Dh),e(V,yo),q(Za,yo,null),e(yo,Hh),e(yo,yr),e(yr,qh),e(V,Ih),e(V,at),q(en,at,null),e(at,Nh),e(at,Er),e(Er,jh),e(at,Fh),q(Eo,at,null),e(V,Th),e(V,ve),q(tn,ve,null),e(ve,Ph),e(ve,wr),e(wr,Oh),e(ve,Rh),q(wo,ve,null),e(ve,Lh),q(ko,ve,null),e(ve,Ch),q(Ao,ve,null),e(V,Sh),e(V,re),q(on,re,null),e(re,Mh),e(re,kr),e(kr,Uh),e(re,Vh),e(re,Ar),e(Ar,zh),e(re,Wh),e(re,ue),e(ue,Gh),e(ue,xr),e(xr,Bh),e(ue,Kh),e(ue,Dr),e(Dr,Jh),e(ue,Qh),e(ue,an),e(an,Xh),e(ue,Yh),e(ue,Hr),e(Hr,Zh),e(ue,ed),e(ue,qr),e(qr,td),e(ue,od),e(re,ad),e(re,nn),e(nn,nd),e(nn,Ir),e(Ir,sd),e(nn,rd),e(re,id),q(xo,re,null),e(re,ld),q(Do,re,null),e(re,cd),q(Ho,re,null),e(V,pd),e(V,qo),q(sn,qo,null),e(qo,gd),e(qo,Nr),e(Nr,hd),$(o,sl,E),$(o,_t,E),e(_t,Io),e(Io,jr),q(rn,jr,null),e(_t,dd),e(_t,Fr),e(Fr,ud),$(o,rl,E),$(o,bt,E),q(ln,bt,null),e(bt,fd),e(bt,Tr),e(Tr,md),$(o,il,E),$(o,vt,E),e(vt,No),e(No,Pr),q(cn,Pr,null),e(vt,_d),e(vt,Or),e(Or,bd),$(o,ll,E),$(o,$t,E),q(pn,$t,null),e($t,vd),e($t,Rr),e(Rr,$d),$(o,cl,E),$(o,yt,E),e(yt,jo),e(jo,Lr),q(gn,Lr,null),e(yt,yd),e(yt,Cr),e(Cr,Ed),$(o,pl,E),$(o,Ce,E),q(hn,Ce,null),e(Ce,wd),e(Ce,Sr),e(Sr,kd),e(Ce,Ad),e(Ce,Mr),e(Mr,xd),$(o,gl,E),$(o,Et,E),e(Et,Fo),e(Fo,Ur),q(dn,Ur,null),e(Et,Dd),e(Et,Vr),e(Vr,Hd),$(o,hl,E),$(o,wt,E),q(un,wt,null),e(wt,qd),e(wt,zr),e(zr,Id),$(o,dl,E),$(o,kt,E),e(kt,To),e(To,Wr),q(fn,Wr,null),e(kt,Nd),e(kt,Gr),e(Gr,jd),$(o,ul,E),$(o,Se,E),q(mn,Se,null),e(Se,Fd),e(Se,Br),e(Br,Td),e(Se,Pd),e(Se,_n),e(_n,Od),e(_n,ds),e(ds,Rd),e(_n,Ld),$(o,fl,E),$(o,At,E),e(At,Po),e(Po,Kr),q(bn,Kr,null),e(At,Cd),e(At,us),e(us,Jr),e(Jr,Sd),e(us,Md),$(o,ml,E),$(o,Oo,E),e(Oo,Ud),e(Oo,Qr),e(Qr,Vd),e(Oo,zd),$(o,_l,E),$(o,fe,E),q(vn,fe,null),e(fe,Wd),e(fe,Xr),e(Xr,Gd),e(fe,Bd),e(fe,$e),q($n,$e,null),e($e,Kd),e($e,yn),e(yn,Jd),e(yn,Yr),e(Yr,Qd),e(yn,Xd),e($e,Yd),e($e,En),e(En,Zd),e(En,Zr),e(Zr,eu),e(En,tu),e($e,ou),e($e,wn),e(wn,au),e(wn,ei),e(ei,nu),e(wn,su),e($e,ru),q(Ro,$e,null),e(fe,iu),e(fe,nt),q(kn,nt,null),e(nt,lu),e(nt,fs),e(fs,cu),e(fs,ti),e(ti,pu),e(nt,gu),e(nt,ms),e(ms,hu),e(ms,oi),e(oi,du),e(fe,uu),e(fe,Oe),q(An,Oe,null),e(Oe,fu),e(Oe,xn),e(xn,mu),e(xn,ai),e(ai,_u),e(xn,bu),e(Oe,vu),e(Oe,xt),e(xt,st),e(st,$u),e(st,ni),e(ni,yu),e(st,Eu),e(st,si),e(si,wu),e(st,ku),e(st,ri),e(ri,Au),e(xt,xu),e(xt,Dn),e(Dn,Du),e(Dn,ii),e(ii,Hu),e(Dn,qu),e(xt,Iu),e(xt,rt),e(rt,Nu),e(rt,li),e(li,ju),e(rt,Fu),e(rt,ci),e(ci,Tu),e(rt,Pu),e(rt,pi),e(pi,Ou),e(Oe,Ru),e(Oe,Dt),e(Dt,Lu),e(Dt,gi),e(gi,Cu),e(Dt,Su),e(Dt,hi),e(hi,Mu),e(Dt,Uu),$(o,bl,E),$(o,Ht,E),q(Hn,Ht,null),e(Ht,Vu),e(Ht,di),e(di,zu),$(o,vl,E),$(o,qt,E),e(qt,Lo),e(Lo,ui),q(qn,ui,null),e(qt,Wu),e(qt,fi),e(fi,Gu),$(o,$l,E),$(o,In,E),e(In,mi),e(mi,Bu),e(In,Ku),$(o,yl,E),$(o,Co,E),e(Co,Ju),e(Co,_s),e(_s,Qu),e(Co,Xu),$(o,El,E),$(o,Ee,E),q(Nn,Ee,null),e(Ee,Yu),e(Ee,So),q(jn,So,null),e(So,Zu),e(So,_i),e(_i,ef),e(Ee,tf),e(Ee,it),q(Fn,it,null),e(it,of),e(it,bi),e(bi,af),e(it,nf),e(it,Tn),e(Tn,sf),e(Tn,vi),e(vi,rf),e(Tn,lf),e(Ee,cf),e(Ee,Mo),q(Pn,Mo,null),e(Mo,pf),e(Mo,$i),e($i,gf),$(o,wl,E),$(o,It,E),e(It,Uo),e(Uo,yi),q(On,yi,null),e(It,hf),e(It,Ei),e(Ei,df),$(o,kl,E),$(o,Vo,E),e(Vo,uf),e(Vo,wi),e(wi,ff),e(Vo,mf),$(o,Al,E),$(o,Nt,E),e(Nt,zo),e(zo,ki),q(Rn,ki,null),e(Nt,_f),e(Nt,Ai),e(Ai,bf),$(o,xl,E),$(o,Me,E),q(Ln,Me,null),e(Me,vf),e(Me,xi),e(xi,$f),e(Me,yf),q(Wo,Me,null),$(o,Dl,E),$(o,jt,E),e(jt,Go),e(Go,Di),q(Cn,Di,null),e(jt,Ef),e(jt,Hi),e(Hi,wf),$(o,Hl,E),$(o,Ue,E),q(Sn,Ue,null),e(Ue,kf),e(Ue,qi),e(qi,Af),e(Ue,xf),q(Bo,Ue,null),$(o,ql,E),$(o,Ft,E),e(Ft,Ko),e(Ko,Ii),q(Mn,Ii,null),e(Ft,Df),e(Ft,Ni),e(Ni,Hf),$(o,Il,E),$(o,Ve,E),q(Un,Ve,null),e(Ve,qf),e(Ve,ji),e(ji,If),e(Ve,Nf),q(Jo,Ve,null),$(o,Nl,E),$(o,Tt,E),e(Tt,Qo),e(Qo,Fi),q(Vn,Fi,null),e(Tt,jf),e(Tt,Ti),e(Ti,Ff),$(o,jl,E),$(o,ze,E),q(zn,ze,null),e(ze,Tf),e(ze,Pi),e(Pi,Pf),e(ze,Of),q(Xo,ze,null),Fl=!0},p(o,[E]){const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),Ot.$set(Wn);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),Rt.$set(Oi);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),Lt.$set(Ri);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),Ct.$set(Li);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),St.$set(Gn);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),Mt.$set(Ci);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),Ut.$set(Bn);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),Vt.$set(Si);const Mi={};E&2&&(Mi.$$scope={dirty:E,ctx:o}),Gt.$set(Mi);const Kn={};E&2&&(Kn.$$scope={dirty:E,ctx:o}),Bt.$set(Kn);const Ui={};E&2&&(Ui.$$scope={dirty:E,ctx:o}),Kt.$set(Ui);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),Qt.$set(We);const Vi={};E&2&&(Vi.$$scope={dirty:E,ctx:o}),Yt.$set(Vi);const zi={};E&2&&(zi.$$scope={dirty:E,ctx:o}),to.$set(zi);const Wi={};E&2&&(Wi.$$scope={dirty:E,ctx:o}),oo.$set(Wi);const Jn={};E&2&&(Jn.$$scope={dirty:E,ctx:o}),ao.$set(Jn);const Gi={};E&2&&(Gi.$$scope={dirty:E,ctx:o}),no.$set(Gi);const Bi={};E&2&&(Bi.$$scope={dirty:E,ctx:o}),so.$set(Bi);const Ki={};E&2&&(Ki.$$scope={dirty:E,ctx:o}),ro.$set(Ki);const z={};E&2&&(z.$$scope={dirty:E,ctx:o}),lo.$set(z);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),co.$set(Ge);const Ji={};E&2&&(Ji.$$scope={dirty:E,ctx:o}),ho.$set(Ji);const Be={};E&2&&(Be.$$scope={dirty:E,ctx:o}),uo.$set(Be);const Qi={};E&2&&(Qi.$$scope={dirty:E,ctx:o}),fo.$set(Qi);const Ke={};E&2&&(Ke.$$scope={dirty:E,ctx:o}),mo.$set(Ke);const Xi={};E&2&&(Xi.$$scope={dirty:E,ctx:o}),_o.$set(Xi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),bo.$set(me);const Yi={};E&2&&(Yi.$$scope={dirty:E,ctx:o}),$o.$set(Yi);const Qn={};E&2&&(Qn.$$scope={dirty:E,ctx:o}),Eo.$set(Qn);const Zi={};E&2&&(Zi.$$scope={dirty:E,ctx:o}),wo.$set(Zi);const Xn={};E&2&&(Xn.$$scope={dirty:E,ctx:o}),ko.$set(Xn);const el={};E&2&&(el.$$scope={dirty:E,ctx:o}),Ao.$set(el);const bs={};E&2&&(bs.$$scope={dirty:E,ctx:o}),xo.$set(bs);const tl={};E&2&&(tl.$$scope={dirty:E,ctx:o}),Do.$set(tl);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),Ho.$set(_e);const Yn={};E&2&&(Yn.$$scope={dirty:E,ctx:o}),Ro.$set(Yn);const ol={};E&2&&(ol.$$scope={dirty:E,ctx:o}),Wo.$set(ol);const Zn={};E&2&&(Zn.$$scope={dirty:E,ctx:o}),Bo.$set(Zn);const al={};E&2&&(al.$$scope={dirty:E,ctx:o}),Jo.$set(al);const es={};E&2&&(es.$$scope={dirty:E,ctx:o}),Xo.$set(es)},i(o){Fl||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Le.$$.fragment,o),I(ha.$$.fragment,o),I(da.$$.fragment,o),I(ua.$$.fragment,o),I(Ot.$$.fragment,o),I(Rt.$$.fragment,o),I(fa.$$.fragment,o),I(Lt.$$.fragment,o),I(Ct.$$.fragment,o),I(ma.$$.fragment,o),I(St.$$.fragment,o),I(Mt.$$.fragment,o),I(_a.$$.fragment,o),I(Ut.$$.fragment,o),I($a.$$.fragment,o),I(Vt.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(xa.$$.fragment,o),I(Gt.$$.fragment,o),I(Da.$$.fragment,o),I(Bt.$$.fragment,o),I(Ha.$$.fragment,o),I(Ia.$$.fragment,o),I(Kt.$$.fragment,o),I(Na.$$.fragment,o),I(ja.$$.fragment,o),I(Qt.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(Yt.$$.fragment,o),I(Pa.$$.fragment,o),I(Oa.$$.fragment,o),I(Ra.$$.fragment,o),I(to.$$.fragment,o),I(oo.$$.fragment,o),I(La.$$.fragment,o),I(ao.$$.fragment,o),I(no.$$.fragment,o),I(Ca.$$.fragment,o),I(so.$$.fragment,o),I(ro.$$.fragment,o),I(Sa.$$.fragment,o),I(Ma.$$.fragment,o),I(lo.$$.fragment,o),I(co.$$.fragment,o),I(Ua.$$.fragment,o),I(Va.$$.fragment,o),I(za.$$.fragment,o),I(ho.$$.fragment,o),I(Wa.$$.fragment,o),I(uo.$$.fragment,o),I(Ga.$$.fragment,o),I(fo.$$.fragment,o),I(Ja.$$.fragment,o),I(mo.$$.fragment,o),I(_o.$$.fragment,o),I(Qa.$$.fragment,o),I(bo.$$.fragment,o),I(Xa.$$.fragment,o),I(Ya.$$.fragment,o),I($o.$$.fragment,o),I(Za.$$.fragment,o),I(en.$$.fragment,o),I(Eo.$$.fragment,o),I(tn.$$.fragment,o),I(wo.$$.fragment,o),I(ko.$$.fragment,o),I(Ao.$$.fragment,o),I(on.$$.fragment,o),I(xo.$$.fragment,o),I(Do.$$.fragment,o),I(Ho.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(cn.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(hn.$$.fragment,o),I(dn.$$.fragment,o),I(un.$$.fragment,o),I(fn.$$.fragment,o),I(mn.$$.fragment,o),I(bn.$$.fragment,o),I(vn.$$.fragment,o),I($n.$$.fragment,o),I(Ro.$$.fragment,o),I(kn.$$.fragment,o),I(An.$$.fragment,o),I(Hn.$$.fragment,o),I(qn.$$.fragment,o),I(Nn.$$.fragment,o),I(jn.$$.fragment,o),I(Fn.$$.fragment,o),I(Pn.$$.fragment,o),I(On.$$.fragment,o),I(Rn.$$.fragment,o),I(Ln.$$.fragment,o),I(Wo.$$.fragment,o),I(Cn.$$.fragment,o),I(Sn.$$.fragment,o),I(Bo.$$.fragment,o),I(Mn.$$.fragment,o),I(Un.$$.fragment,o),I(Jo.$$.fragment,o),I(Vn.$$.fragment,o),I(zn.$$.fragment,o),I(Xo.$$.fragment,o),Fl=!0)},o(o){N(l.$$.fragment,o),N(C.$$.fragment,o),N(X.$$.fragment,o),N(Le.$$.fragment,o),N(ha.$$.fragment,o),N(da.$$.fragment,o),N(ua.$$.fragment,o),N(Ot.$$.fragment,o),N(Rt.$$.fragment,o),N(fa.$$.fragment,o),N(Lt.$$.fragment,o),N(Ct.$$.fragment,o),N(ma.$$.fragment,o),N(St.$$.fragment,o),N(Mt.$$.fragment,o),N(_a.$$.fragment,o),N(Ut.$$.fragment,o),N($a.$$.fragment,o),N(Vt.$$.fragment,o),N(ka.$$.fragment,o),N(Aa.$$.fragment,o),N(xa.$$.fragment,o),N(Gt.$$.fragment,o),N(Da.$$.fragment,o),N(Bt.$$.fragment,o),N(Ha.$$.fragment,o),N(Ia.$$.fragment,o),N(Kt.$$.fragment,o),N(Na.$$.fragment,o),N(ja.$$.fragment,o),N(Qt.$$.fragment,o),N(Fa.$$.fragment,o),N(Ta.$$.fragment,o),N(Yt.$$.fragment,o),N(Pa.$$.fragment,o),N(Oa.$$.fragment,o),N(Ra.$$.fragment,o),N(to.$$.fragment,o),N(oo.$$.fragment,o),N(La.$$.fragment,o),N(ao.$$.fragment,o),N(no.$$.fragment,o),N(Ca.$$.fragment,o),N(so.$$.fragment,o),N(ro.$$.fragment,o),N(Sa.$$.fragment,o),N(Ma.$$.fragment,o),N(lo.$$.fragment,o),N(co.$$.fragment,o),N(Ua.$$.fragment,o),N(Va.$$.fragment,o),N(za.$$.fragment,o),N(ho.$$.fragment,o),N(Wa.$$.fragment,o),N(uo.$$.fragment,o),N(Ga.$$.fragment,o),N(fo.$$.fragment,o),N(Ja.$$.fragment,o),N(mo.$$.fragment,o),N(_o.$$.fragment,o),N(Qa.$$.fragment,o),N(bo.$$.fragment,o),N(Xa.$$.fragment,o),N(Ya.$$.fragment,o),N($o.$$.fragment,o),N(Za.$$.fragment,o),N(en.$$.fragment,o),N(Eo.$$.fragment,o),N(tn.$$.fragment,o),N(wo.$$.fragment,o),N(ko.$$.fragment,o),N(Ao.$$.fragment,o),N(on.$$.fragment,o),N(xo.$$.fragment,o),N(Do.$$.fragment,o),N(Ho.$$.fragment,o),N(sn.$$.fragment,o),N(rn.$$.fragment,o),N(ln.$$.fragment,o),N(cn.$$.fragment,o),N(pn.$$.fragment,o),N(gn.$$.fragment,o),N(hn.$$.fragment,o),N(dn.$$.fragment,o),N(un.$$.fragment,o),N(fn.$$.fragment,o),N(mn.$$.fragment,o),N(bn.$$.fragment,o),N(vn.$$.fragment,o),N($n.$$.fragment,o),N(Ro.$$.fragment,o),N(kn.$$.fragment,o),N(An.$$.fragment,o),N(Hn.$$.fragment,o),N(qn.$$.fragment,o),N(Nn.$$.fragment,o),N(jn.$$.fragment,o),N(Fn.$$.fragment,o),N(Pn.$$.fragment,o),N(On.$$.fragment,o),N(Rn.$$.fragment,o),N(Ln.$$.fragment,o),N(Wo.$$.fragment,o),N(Cn.$$.fragment,o),N(Sn.$$.fragment,o),N(Bo.$$.fragment,o),N(Mn.$$.fragment,o),N(Un.$$.fragment,o),N(Jo.$$.fragment,o),N(Vn.$$.fragment,o),N(zn.$$.fragment,o),N(Xo.$$.fragment,o),Fl=!1},d(o){t(p),o&&t(b),o&&t(f),j(l),o&&t(x),o&&t(w),o&&t(R),o&&t(_),o&&t(K),o&&t(G),o&&t(U),j(C,o),o&&t(Y),o&&t(te),o&&t(B),j(X,o),o&&t(oe),o&&t(ne),o&&t(pa),j(Le,o),o&&t(ga),o&&t(mt),j(ha),o&&t(nl),o&&t(V),j(da),j(ua),j(Ot),j(Rt),j(fa),j(Lt),j(Ct),j(ma),j(St),j(Mt),j(_a),j(Ut),j($a),j(Vt),j(ka),j(Aa),j(xa),j(Gt),j(Da),j(Bt),j(Ha),j(Ia),j(Kt),j(Na),j(ja),j(Qt),j(Fa),j(Ta),j(Yt),j(Pa),j(Oa),j(Ra),j(to),j(oo),j(La),j(ao),j(no),j(Ca),j(so),j(ro),j(Sa),j(Ma),j(lo),j(co),j(Ua),j(Va),j(za),j(ho),j(Wa),j(uo),j(Ga),j(fo),j(Ja),j(mo),j(_o),j(Qa),j(bo),j(Xa),j(Ya),j($o),j(Za),j(en),j(Eo),j(tn),j(wo),j(ko),j(Ao),j(on),j(xo),j(Do),j(Ho),j(sn),o&&t(sl),o&&t(_t),j(rn),o&&t(rl),o&&t(bt),j(ln),o&&t(il),o&&t(vt),j(cn),o&&t(ll),o&&t($t),j(pn),o&&t(cl),o&&t(yt),j(gn),o&&t(pl),o&&t(Ce),j(hn),o&&t(gl),o&&t(Et),j(dn),o&&t(hl),o&&t(wt),j(un),o&&t(dl),o&&t(kt),j(fn),o&&t(ul),o&&t(Se),j(mn),o&&t(fl),o&&t(At),j(bn),o&&t(ml),o&&t(Oo),o&&t(_l),o&&t(fe),j(vn),j($n),j(Ro),j(kn),j(An),o&&t(bl),o&&t(Ht),j(Hn),o&&t(vl),o&&t(qt),j(qn),o&&t($l),o&&t(In),o&&t(yl),o&&t(Co),o&&t(El),o&&t(Ee),j(Nn),j(jn),j(Fn),j(Pn),o&&t(wl),o&&t(It),j(On),o&&t(kl),o&&t(Vo),o&&t(Al),o&&t(Nt),j(Rn),o&&t(xl),o&&t(Me),j(Ln),j(Wo),o&&t(Dl),o&&t(jt),j(Cn),o&&t(Hl),o&&t(Ue),j(Sn),j(Bo),o&&t(ql),o&&t(Ft),j(Mn),o&&t(Il),o&&t(Ve),j(Un),j(Jo),o&&t(Nl),o&&t(Tt),j(Vn),o&&t(jl),o&&t(ze),j(zn),j(Xo)}}}const Gb={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Bb(S){return nb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ev extends eb{constructor(p){super();tb(this,p,Bb,Wb,ob,{})}}export{ev as default,Gb as metadata};
