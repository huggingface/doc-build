import{S as Dm,i as qm,s as Im,e as a,k as g,w as H,t as i,M as Nm,c as n,d as t,m as h,a as s,x as D,h as c,b as m,G as e,g as $,y as q,q as I,o as N,B as j,v as jm,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fm(C){let p,b,f,l,d;return l=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Examples:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function Tm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Pm(C){let p,b,f,l,d;return l=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Examples:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function Om(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Rm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=i("create_commit"),l=i(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),r=i("repo_id"),u=i(` and
`),P=a("code"),v=i("repo_type"),x=i(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=i("create_repo()"),k=i("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=c(R,"create_commit"),R.forEach(t),l=c(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);r=c(_,"repo_id"),_.forEach(t),u=c(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=c(F,"repo_type"),F.forEach(t),x=c(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=c(M,"create_repo()"),M.forEach(t),k=c(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,l),e(p,d),e(d,r),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function Lm(C){let p,b,f,l;return{c(){p=a("p"),b=a("code"),f=i("create_commit"),l=i(" is limited to 25k LFS files and a 1GB payload for regular files.")},l(d){p=n(d,"P",{});var r=s(p);b=n(r,"CODE",{});var u=s(b);f=c(u,"create_commit"),u.forEach(t),l=c(r," is limited to 25k LFS files and a 1GB payload for regular files."),r.forEach(t)},m(d,r){$(d,p,r),e(p,b),e(b,f),e(p,l)},d(d){d&&t(p)}}}function Sm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Cm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Mm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var M=s(l);d=n(M,"LI",{});var W=s(d);r=n(W,"A",{href:!0});var L=s(r);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function Um(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,S,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),A=g(),U=a("li"),S=a("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=i("EntryNotFoundError"),B=i(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=c(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),l=n(X,"UL",{});var ne=s(l);d=n(ne,"LI",{});var Be=s(d);r=n(Be,"A",{href:!0,rel:!0});var de=s(r);u=n(de,"CODE",{});var it=s(u);P=c(it,"HTTPError"),it.forEach(t),de.forEach(t),v=c(Be,`
if the HuggingFace API returned an error`),Be.forEach(t),x=h(ne),w=n(ne,"LI",{});var Ke=s(w);y=n(Ke,"A",{href:!0,rel:!0});var Ee=s(y);k=n(Ee,"CODE",{});var ct=s(k);O=c(ct,"ValueError"),ct.forEach(t),Ee.forEach(t),T=c(Ke,`
if some parameter value is invalid`),Ke.forEach(t),R=h(ne),_=n(ne,"LI",{});var lt=s(_);F=n(lt,"A",{href:!0});var pt=s(F);M=c(pt,"RepositoryNotFoundError"),pt.forEach(t),W=c(lt,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(lt,"CODE",{});var Vn=s(L);K=c(Vn,"private"),Vn.forEach(t),G=c(lt," and you do not have access."),lt.forEach(t),A=h(ne),U=n(ne,"LI",{});var oa=s(U);S=n(oa,"A",{href:!0});var aa=s(S);Y=c(aa,"RevisionNotFoundError"),aa.forEach(t),te=c(oa,`
If the revision to download from cannot be found.`),oa.forEach(t),Z=h(ne),J=n(ne,"LI",{});var Oe=s(J);ee=n(Oe,"A",{href:!0});var na=s(ee);ae=c(na,"EntryNotFoundError"),na.forEach(t),B=c(Oe,`
If the file to download cannot be found.`),Oe.forEach(t),ne.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,l,oe),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(l,A),e(l,U),e(U,S),e(S,Y),e(U,te),e(l,Z),e(l,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(l)}}}function Vm(C){let p,b,f,l,d,r,u,P,v,x,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=c(k,"Raises the following errors:"),k.forEach(t),f=h(y),l=n(y,"UL",{});var O=s(l);d=n(O,"LI",{});var T=s(d);r=n(T,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),P=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=c(_,"private"),_.forEach(t),w=c(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,l,k),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(l)}}}function zm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Wm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Gm(C){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=i("Collecting all discussions of a repo in a list:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function Bm(C){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=i("Iterating over discussions of a repo:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function Km(C){let p;return{c(){p=i("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=c(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function Jm(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function Qm(C){let p,b,f,l,d,r,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
    filter=("language:ru", "task_ids:language-modeling")
)
# Using the \`DatasetFilter\`
filt = DatasetFilter(language="ru", task_ids="language-modeling")
# With \`DatasetSearchArguments\`
filt = DatasetFilter(
    language=args.language.ru,
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
<span class="hljs-meta">... </span>    <span class="hljs-built_in">filter</span>=(<span class="hljs-string">&quot;language:ru&quot;</span>, <span class="hljs-string">&quot;task_ids:language-modeling&quot;</span>)
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`DatasetFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(language=<span class="hljs-string">&quot;ru&quot;</span>, task_ids=<span class="hljs-string">&quot;language-modeling&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`DatasetSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(
<span class="hljs-meta">... </span>    language=args.language.ru,
<span class="hljs-meta">... </span>    task_ids=args.task_ids.language_modeling,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("filter"),d=i(" argument:"),r=g(),H(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=c(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);l=c(w,"filter"),w.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(v),D(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,l),e(p,d),$(v,r,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(r),j(u,v)}}}function Xm(C){let p,b,f,l,d,r,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("search"),d=i(" argument:"),r=g(),H(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=c(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);l=c(w,"search"),w.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(v),D(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,l),e(p,d),$(v,r,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(r),j(u,v)}}}function Ym(C){let p,b,f,l,d,r,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("filter"),d=i(" argument:"),r=g(),H(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=c(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);l=c(w,"filter"),w.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(v),D(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,l),e(p,d),$(v,r,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(r),j(u,v)}}}function Zm(C){let p,b,f,l,d,r,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("search"),d=i(" argument:"),r=g(),H(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=c(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);l=c(w,"search"),w.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(v),D(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,l),e(p,d),$(v,r,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){N(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(r),j(u,v)}}}function e_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function t_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var M=s(l);d=n(M,"LI",{});var W=s(d);r=n(W,"A",{href:!0});var L=s(r);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function o_(C){let p,b,f,l,d,r,u,P,v,x,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=c(k,"Raises the following errors:"),k.forEach(t),f=h(y),l=n(y,"UL",{});var O=s(l);d=n(O,"LI",{});var T=s(d);r=n(T,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),P=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=c(_,"private"),_.forEach(t),w=c(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,l,k),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(l)}}}function a_(C){let p,b,f,l,d;return l=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Examples:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function n_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var U=s(p);b=c(U,"Raises the following errors:"),U.forEach(t),f=h(A),l=n(A,"UL",{});var S=s(l);d=n(S,"LI",{});var Y=s(d);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(S),w=n(S,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(S),_=n(S,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);M=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=s(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,U){$(A,p,U),e(p,b),$(A,f,U),$(A,l,U),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function s_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var M=s(l);d=n(M,"LI",{});var W=s(d);r=n(W,"A",{href:!0});var L=s(r);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function r_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var M=s(l);d=n(M,"LI",{});var W=s(d);r=n(W,"A",{href:!0});var L=s(r);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=s(v);x=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(M),k=n(M,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),M.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function i_(C){let p,b,f,l,d,r,u,P,v,x,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=c(k,"Raises the following errors:"),k.forEach(t),f=h(y),l=n(y,"UL",{});var O=s(l);d=n(O,"LI",{});var T=s(d);r=n(T,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),P=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=c(_,"private"),_.forEach(t),w=c(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,l,k),e(l,d),e(d,r),e(r,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(l)}}}function c_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,S,Y,te;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),M=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),A=g(),U=a("li"),S=a("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=c(J,"Raises the following errors:"),J.forEach(t),f=h(Z),l=n(Z,"UL",{});var ee=s(l);d=n(ee,"LI",{});var ae=s(d);r=n(ae,"A",{href:!0,rel:!0});var B=s(r);u=n(B,"CODE",{});var X=s(u);P=c(X,"HTTPError"),X.forEach(t),B.forEach(t),v=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var ne=s(y);k=n(ne,"CODE",{});var Be=s(k);O=c(Be,"ValueError"),Be.forEach(t),ne.forEach(t),T=c(oe,`
if some parameter value is invalid`),oe.forEach(t),R=h(ee),_=n(ee,"LI",{});var de=s(_);F=n(de,"A",{href:!0});var it=s(F);M=c(it,"RepositoryNotFoundError"),it.forEach(t),W=c(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(de,"CODE",{});var Ke=s(L);K=c(Ke,"private"),Ke.forEach(t),G=c(de," and you do not have access."),de.forEach(t),A=h(ee),U=n(ee,"LI",{});var Ee=s(U);S=n(Ee,"A",{href:!0});var ct=s(S);Y=c(ct,"RevisionNotFoundError"),ct.forEach(t),te=c(Ee,`
If the revision to download from cannot be found.`),Ee.forEach(t),ee.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,l,J),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,M),e(_,W),e(_,L),e(L,K),e(_,G),e(l,A),e(l,U),e(U,S),e(S,Y),e(U,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(l)}}}function l_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=i("upload_file"),l=i(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),r=i("repo_id"),u=i(` and
`),P=a("code"),v=i("repo_type"),x=i(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=i("create_repo()"),k=i("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=c(R,"upload_file"),R.forEach(t),l=c(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);r=c(_,"repo_id"),_.forEach(t),u=c(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=c(F,"repo_type"),F.forEach(t),x=c(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=c(M,"create_repo()"),M.forEach(t),k=c(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,l),e(p,d),e(d,r),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function p_(C){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Example:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function g_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),r=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),this.h()},l(R){p=n(R,"P",{});var _=s(p);b=c(_,"Raises the following errors:"),_.forEach(t),f=h(R),l=n(R,"UL",{});var F=s(l);d=n(F,"LI",{});var M=s(d);r=n(M,"A",{href:!0,rel:!0});var W=s(r);u=n(W,"CODE",{});var L=s(u);P=c(L,"HTTPError"),L.forEach(t),W.forEach(t),v=c(M,`
if the HuggingFace API returned an error`),M.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=c(A,"ValueError"),A.forEach(t),G.forEach(t),T=c(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(r,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(R,_){$(R,p,_),e(p,b),$(R,f,_),$(R,l,_),e(l,d),e(d,r),e(r,u),e(u,P),e(d,v),e(l,x),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(R){R&&t(p),R&&t(f),R&&t(l)}}}function h_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=i("upload_folder"),l=i(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),r=i("repo_id"),u=i(` and
`),P=a("code"),v=i("repo_type"),x=i(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=i("create_repo()"),k=i("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var R=s(b);f=c(R,"upload_folder"),R.forEach(t),l=c(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);r=c(_,"repo_id"),_.forEach(t),u=c(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=c(F,"repo_type"),F.forEach(t),x=c(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var M=s(w);y=c(M,"create_repo()"),M.forEach(t),k=c(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,l),e(p,d),e(d,r),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function d_(C){let p,b,f,l,d;return l=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Example:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function u_(C){let p,b,f,l,d;return l=new ie({props:{code:`operation = CommitOperationAdd(
       path_in_repo="remote/dir/weights.h5",
       path_or_fileobj="./local/weights.h5",
)

with operation.as_file() as file:
    content = file.read()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>operation = CommitOperationAdd(
<span class="hljs-meta">... </span>       path_in_repo=<span class="hljs-string">&quot;remote/dir/weights.h5&quot;</span>,
<span class="hljs-meta">... </span>       path_or_fileobj=<span class="hljs-string">&quot;./local/weights.h5&quot;</span>,
<span class="hljs-meta">... </span>)
CommitOperationAdd(path_in_repo=<span class="hljs-string">&#x27;remote/dir/weights.h5&#x27;</span>, path_or_fileobj=<span class="hljs-string">&#x27;./local/weights.h5&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> operation.as_file() <span class="hljs-keyword">as</span> file:
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Example:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function f_(C){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Examples:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function m_(C){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){H(p.$$.fragment)},l(f){D(p.$$.fragment,f)},m(f,l){q(p,f,l),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){N(p.$$.fragment,f),b=!1},d(f){j(p,f)}}}function __(C){let p,b,f,l,d;return l=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Example:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function b_(C){let p,b,f,l,d;return l=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(l.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=c(u,"Example:"),u.forEach(t),f=h(r),D(l.$$.fragment,r)},m(r,u){$(r,p,u),e(p,b),$(r,f,u),q(l,r,u),d=!0},p:he,i(r){d||(I(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),j(l,r)}}}function v_(C){let p,b,f,l,d,r,u,P,v,x,w,y,k,O,T,R,_,F,M,W,L,K,G,A,U,S,Y,te,Z,J,ee,ae,B,X,oe,ne,Be,de,it,Ke,Ee,ct,lt,pt,Vn,oa,aa,Oe,na,gt,Dt,ys,sa,Gc,Es,Bc,Ni,V,ra,Kc,we,ia,Jc,ws,Qc,Xc,qt,Yc,It,Zc,ke,ca,el,ks,tl,ol,Nt,al,jt,nl,Ae,la,sl,As,rl,il,Ft,cl,Tt,ll,ce,pa,pl,xs,gl,hl,ga,dl,Hs,ul,fl,ml,ha,_l,zn,bl,vl,$l,Wn,yl,Gn,El,wl,Pt,kl,le,da,Al,ua,xl,Ds,Hl,Dl,ql,fa,Il,Bn,Nl,jl,Fl,ma,Tl,qs,Pl,Ol,Rl,Kn,Ll,Jn,Sl,Cl,Ot,Ml,Rt,_a,Ul,Is,Vl,zl,Lt,ba,Wl,Ns,Gl,Bl,xe,va,Kl,js,Jl,Ql,Fs,Xl,Yl,St,Zl,Je,$a,ep,Ts,tp,op,Ct,ap,Qe,ya,np,Ps,sp,rp,Ea,ip,Qn,cp,lp,pp,Xe,wa,gp,Os,hp,dp,Mt,up,Ut,ka,fp,Rs,mp,_p,Ye,Aa,bp,Ls,vp,$p,Vt,yp,zt,xa,Ep,Ss,wp,kp,He,Ha,Ap,Cs,xp,Hp,Xn,Dp,Yn,qp,Ip,Wt,Np,Gt,Da,jp,Ms,Fp,Tp,Bt,qa,Pp,Us,Op,Rp,_e,Ia,Lp,Vs,Sp,Cp,zs,Mp,Up,Kt,Vp,Jt,zp,De,Na,Wp,Ws,Gp,Bp,Qt,Kp,Xt,Jp,qe,ja,Qp,Gs,Xp,Yp,Yt,Zp,Zt,eg,eo,Fa,tg,Bs,og,ag,Ie,Ta,ng,Ks,sg,rg,to,ig,oo,cg,ao,Pa,lg,Js,pg,gg,no,Oa,hg,Qs,dg,ug,Ze,Ra,fg,Xs,mg,_g,so,bg,Ne,La,vg,Ys,$g,yg,Zs,Eg,wg,ro,kg,je,Sa,Ag,er,xg,Hg,Ca,Dg,Ma,qg,Ig,Ng,io,jg,Fe,Ua,Fg,tr,Tg,Pg,co,Og,lo,Rg,et,Va,Lg,or,Sg,Cg,po,Mg,go,za,Ug,ar,Vg,zg,Te,Wa,Wg,nr,Gg,Bg,sr,Kg,Jg,ho,Qg,uo,Ga,Xg,rr,Yg,Zg,tt,Ba,eh,ir,th,oh,fo,ah,be,Ka,nh,cr,sh,rh,mo,ih,_o,ch,bo,lh,re,Ja,ph,lr,gh,hh,pr,dh,uh,ue,fh,gr,mh,_h,hr,bh,vh,Qa,$h,yh,dr,Eh,wh,ur,kh,Ah,xh,Xa,Hh,fr,Dh,qh,Ih,vo,Nh,$o,jh,yo,Fh,Eo,Ya,Th,mr,Ph,ji,ht,wo,_r,Za,Oh,br,Rh,Fi,dt,en,Lh,vr,Sh,Ti,ut,ko,$r,tn,Ch,yr,Mh,Pi,ft,on,Uh,Er,Vh,Oi,mt,Ao,wr,an,zh,kr,Wh,Ri,Re,nn,Gh,Ar,Bh,Kh,xr,Jh,Li,_t,xo,Hr,sn,Qh,Dr,Xh,Si,bt,rn,Yh,qr,Zh,Ci,vt,Ho,Ir,cn,ed,Nr,td,Mi,Le,ln,od,jr,ad,nd,pn,sd,Zn,rd,id,Ui,$t,Do,Fr,gn,cd,es,Tr,ld,pd,Vi,qo,gd,Pr,hd,dd,zi,$e,hn,ud,Or,fd,md,ot,dn,_d,un,bd,Rr,vd,$d,yd,Io,Ed,at,fn,wd,ts,kd,Lr,Ad,xd,os,Hd,Sr,Dd,Wi,yt,mn,qd,Cr,Id,Gi,Et,No,Mr,_n,Nd,Ur,jd,Bi,bn,Vr,Fd,Td,Ki,jo,Pd,as,Od,Rd,Ji,ye,vn,Ld,Fo,$n,Sd,zr,Cd,Md,nt,yn,Ud,Wr,Vd,zd,En,Wd,Gr,Gd,Bd,Kd,To,wn,Jd,Br,Qd,Qi,wt,Po,Kr,kn,Xd,Jr,Yd,Xi,Oo,Zd,Qr,eu,tu,Yi,kt,Ro,Xr,An,ou,Yr,au,Zi,Se,xn,nu,Zr,su,ru,Lo,ec,At,So,ei,Hn,iu,ti,cu,tc,Ce,Dn,lu,oi,pu,gu,Co,oc,xt,Mo,ai,qn,hu,ni,du,ac,Me,In,uu,si,fu,mu,Uo,nc,Ht,Vo,ri,Nn,_u,ii,bu,sc,Ue,jn,vu,ci,$u,yu,zo,rc;return r=new ve({}),S=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),Oe=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi(
    endpoint="https://huggingface.co", # Can be a Private Hub endpoint.
    token="hf_xxx", # Token is not persisted on the machine.
)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi(
    endpoint=<span class="hljs-string">&quot;https://huggingface.co&quot;</span>, <span class="hljs-comment"># Can be a Private Hub endpoint.</span>
    token=<span class="hljs-string">&quot;hf_xxx&quot;</span>, <span class="hljs-comment"># Token is not persisted on the machine.</span>
)`}}),sa=new ve({}),ra=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L569"}}),ia=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3054",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),qt=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Fm]},$$scope:{ctx:C}}}),It=new se({props:{$$slots:{default:[Tm]},$$scope:{ctx:C}}}),ca=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2911",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Nt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Pm]},$$scope:{ctx:C}}}),jt=new se({props:{$$slots:{default:[Om]},$$scope:{ctx:C}}}),la=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_commit.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with that commit. Defaults to <code>False</code>.
If <code>revision</code> is not set, PR is opened against the <code>&quot;main&quot;</code> branch. If
<code>revision</code> is set and is a branch, PR is opened against this branch. If
<code>revision</code> is set and is not a branch name (example: a commit oid), an
<code>RevisionNotFoundError</code> is returned by the server.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.create_commit.num_threads",description:`<strong>num_threads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of concurrent threads for uploading files. Defaults to 5.
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"},{anchor:"huggingface_hub.HfApi.create_commit.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string.
Shorthands (7 first characters) are also supported.If specified and <code>create_pr</code> is <code>False</code>,
the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>. If specified and <code>create_pr</code>
is <code>True</code>, the pull request will be created from <code>parent_commit</code>. Specifying <code>parent_commit</code>
ensures the repo has not changed before committing the changes, and can be especially useful
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1745",returnDescription:`
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
`}}),Ft=new se({props:{warning:!0,$$slots:{default:[Rm]},$$scope:{ctx:C}}}),Tt=new se({props:{warning:!0,$$slots:{default:[Lm]},$$scope:{ctx:C}}}),pa=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2738"}}),Pt=new se({props:{$$slots:{default:[Sm]},$$scope:{ctx:C}}}),da=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2827"}}),Ot=new se({props:{$$slots:{default:[Cm]},$$scope:{ctx:C}}}),_a=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1491",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ba=new Q({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2428",raiseDescription:`
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
`}}),va=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1252",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),St=new se({props:{$$slots:{default:[Mm]},$$scope:{ctx:C}}}),$a=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Delete {path_in_repo} with huggingface_hub&quot;</code>.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.delete_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.delete_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with that commit. Defaults to <code>False</code>.
If <code>revision</code> is not set, PR is opened against the <code>&quot;main&quot;</code> branch. If
<code>revision</code> is set and is a branch, PR is opened against this branch. If
<code>revision</code> is set and is not a branch name (example: a commit oid), an
<code>RevisionNotFoundError</code> is returned by the server.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.delete_file.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2269"}}),Ct=new se({props:{$$slots:{default:[Um]},$$scope:{ctx:C}}}),ya=new Q({props:{name:"delete_folder",anchor:"huggingface_hub.HfApi.delete_folder",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_folder.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative folder path in the repo, for example: <code>&quot;checkpoints/1fec34a&quot;</code>.`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the folder will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_folder.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will default
to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_folder.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the folder is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_folder.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_folder.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Delete folder {path_in_repo} with huggingface_hub&quot;</code>.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.delete_folder.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit.`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.delete_folder.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with that commit. Defaults to <code>False</code>.
If <code>revision</code> is not set, PR is opened against the <code>&quot;main&quot;</code> branch. If
<code>revision</code> is set and is a branch, PR is opened against this branch. If
<code>revision</code> is set and is not a branch name (example: a commit oid), an
<code>RevisionNotFoundError</code> is returned by the server.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.delete_folder.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2359"}}),wa=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1571"}}),Mt=new se({props:{$$slots:{default:[Vm]},$$scope:{ctx:C}}}),ka=new Q({props:{name:"delete_tag",anchor:"huggingface_hub.HfApi.delete_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a commit will be deleted.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to delete.`,name:"tag"},{anchor:"huggingface_hub.HfApi.delete_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if tagging a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2490",raiseDescription:`
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
`}}),Aa=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3182",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Vt=new se({props:{$$slots:{default:[zm]},$$scope:{ctx:C}}}),xa=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L661"}}),Ha=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2653"}}),Wt=new se({props:{$$slots:{default:[Wm]},$$scope:{ctx:C}}}),Da=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2537",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),qa=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L653"}}),Ia=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2575",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Kt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[Gm]},$$scope:{ctx:C}}}),Jt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[Bm]},$$scope:{ctx:C}}}),Na=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3239",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Qt=new se({props:{warning:!0,$$slots:{default:[Km]},$$scope:{ctx:C}}}),Xt=new se({props:{$$slots:{default:[Jm]},$$scope:{ctx:C}}}),ja=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L894",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[DatasetInfo]</code></p>
`}}),Yt=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Qm]},$$scope:{ctx:C}}}),Zt=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Xm]},$$scope:{ctx:C}}}),Fa=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1071",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ta=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": bool = False"},{name:"fetch_config",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L671",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[ModelInfo]</code></p>
`}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Ym]},$$scope:{ctx:C}}}),oo=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Zm]},$$scope:{ctx:C}}}),Pa=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1447",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Oa=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": bool = False"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1084",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects.
To anticipate future pagination, please consider the return value to be a
simple iterator.</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Ra=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3129",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),so=new se({props:{$$slots:{default:[e_]},$$scope:{ctx:C}}}),La=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1177",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),ro=new se({props:{$$slots:{default:[t_]},$$scope:{ctx:C}}}),Sa=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1677"}}),io=new se({props:{$$slots:{default:[o_]},$$scope:{ctx:C}}}),Ua=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2987",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),co=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[a_]},$$scope:{ctx:C}}}),lo=new se({props:{$$slots:{default:[n_]},$$scope:{ctx:C}}}),Va=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1382",returnDescription:`
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
`}}),po=new se({props:{$$slots:{default:[s_]},$$scope:{ctx:C}}}),za=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L620"}}),Wa=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1317",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),ho=new se({props:{$$slots:{default:[r_]},$$scope:{ctx:C}}}),Ga=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L639"}}),Ba=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1617",returnDescription:`
<p>The HTTP response in json.</p>
`}}),fo=new se({props:{$$slots:{default:[i_]},$$scope:{ctx:C}}}),Ka=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with that commit. Defaults to <code>False</code>.
If <code>revision</code> is not set, PR is opened against the <code>&quot;main&quot;</code> branch. If
<code>revision</code> is set and is a branch, PR is opened against this branch. If
<code>revision</code> is set and is not a branch name (example: a commit oid), an
<code>RevisionNotFoundError</code> is returned by the server.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.upload_file.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1956",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),mo=new se({props:{$$slots:{default:[c_]},$$scope:{ctx:C}}}),_o=new se({props:{warning:!0,$$slots:{default:[l_]},$$scope:{ctx:C}}}),bo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[p_]},$$scope:{ctx:C}}}),Ja=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to:
<code>f&quot;Upload {path_in_repo} with huggingface_hub&quot;</code>`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_folder.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with that commit. Defaults to <code>False</code>.
If <code>revision</code> is not set, PR is opened against the <code>&quot;main&quot;</code> branch. If
<code>revision</code> is set and is a branch, PR is opened against this branch. If
<code>revision</code> is set and is not a branch name (example: a commit oid), an
<code>RevisionNotFoundError</code> is returned by the server.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.upload_folder.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"},{anchor:"huggingface_hub.HfApi.upload_folder.allow_patterns",description:`<strong>allow_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, only files matching at least one pattern are uploaded.`,name:"allow_patterns"},{anchor:"huggingface_hub.HfApi.upload_folder.ignore_patterns",description:`<strong>ignore_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2107",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),vo=new se({props:{$$slots:{default:[g_]},$$scope:{ctx:C}}}),$o=new se({props:{warning:!0,$$slots:{default:[h_]},$$scope:{ctx:C}}}),yo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[d_]},$$scope:{ctx:C}}}),Ya=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L576"}}),Za=new ve({}),en=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L259"}}),tn=new ve({}),on=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L332"}}),an=new ve({}),nn=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L406"}}),sn=new ve({}),rn=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L213"}}),cn=new ve({}),ln=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L158"}}),gn=new ve({}),hn=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example: <code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L68",raiseDescription:`
<ul>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If <code>path_or_fileobj</code> is not one of <code>str</code>, <code>bytes</code> or <code>io.BufferedIOBase</code>.</li>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If <code>path_or_fileobj</code> is a <code>str</code> but not a path to an existing file.</li>
<li><a
  href="https://docs.python.org/3/library/exceptions.html#ValueError"
  rel="nofollow"
><code>ValueError</code></a> \u2014
If <code>path_or_fileobj</code> is a <code>io.BufferedIOBase</code> but it doesn\u2019t support both
<code>seek()</code> and <code>tell()</code>.</li>
</ul>
`,raiseType:`
<p><code>ValueError</code></p>
`}}),dn=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L141"}}),Io=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[u_]},$$scope:{ctx:C}}}),fn=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L171"}}),mn=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"},{name:"is_folder",val:": typing.Union[bool, typing.Literal['auto']] = 'auto'"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example: <code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>
for a file or <code>&quot;checkpoints/1fec34a/&quot;</code> for a folder.`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationDelete.is_folder",description:`<strong>is_folder</strong> (<code>bool</code> or <code>Literal[&quot;auto&quot;]</code>, <em>optional</em>) &#x2014;
Whether the Delete Operation applies to a folder or not. If &#x201C;auto&#x201D;, the path
type (file or folder) is guessed automatically by looking if path ends with
a &#x201D;/&#x201D; (folder) or not (file). To explicitly set the path type, you can set
<code>is_folder=True</code> or <code>is_folder=False</code>.`,name:"is_folder"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L38"}}),_n=new ve({}),vn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),$n=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),yn=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),wn=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),kn=new ve({}),An=new ve({}),xn=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the original uploader (author or organization), such as
<code>facebook</code> or <code>huggingface</code>.`,name:"author"},{anchor:"huggingface_hub.DatasetFilter.benchmark",description:`<strong>benchmark</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by their official benchmark.`,name:"benchmark"},{anchor:"huggingface_hub.DatasetFilter.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by its name, such as <code>SQAC</code> or <code>wikineural</code>`,name:"dataset_name"},{anchor:"huggingface_hub.DatasetFilter.language_creators",description:`<strong>language_creators</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub with how the data was curated, such as <code>crowdsourced</code> or
<code>machine_generated</code>.`,name:"language_creators"},{anchor:"huggingface_hub.DatasetFilter.language",description:`<strong>language</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings representing a two-character language to
filter datasets by on the Hub.`,name:"language"},{anchor:"huggingface_hub.DatasetFilter.multilinguality",description:`<strong>multilinguality</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),Lo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[f_]},$$scope:{ctx:C}}}),Hn=new ve({}),Dn=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Co=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[m_]},$$scope:{ctx:C}}}),qn=new ve({}),In=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[{name:"api",val:": typing.Optional[ForwardRef('HfApi')] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L531"}}),Uo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[__]},$$scope:{ctx:C}}}),Nn=new ve({}),jn=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[{name:"api",val:": typing.Optional[ForwardRef('HfApi')] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L493"}}),zo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[b_]},$$scope:{ctx:C}}}),{c(){p=a("meta"),b=g(),f=a("h1"),l=a("a"),d=a("span"),H(r.$$.fragment),u=g(),P=a("span"),v=i("Hugging Face Hub API"),x=g(),w=a("p"),y=i("Below is the documentation for the "),k=a("code"),O=i("HfApi"),T=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=g(),_=a("p"),F=i("All methods from the "),M=a("code"),W=i("HfApi"),L=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=i("The following approach uses the method from the root of the package:"),U=g(),H(S.$$.fragment),Y=g(),te=a("p"),Z=i("The following approach uses the "),J=a("code"),ee=i("HfApi"),ae=i(" class:"),B=g(),H(X.$$.fragment),oe=g(),ne=a("p"),Be=i("Using the "),de=a("a"),it=i("HfApi"),Ke=i(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),Ee=a("code"),ct=i("huggingface-cli login"),lt=i(" or "),pt=a("a"),Vn=i("login()"),oa=i(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),aa=g(),H(Oe.$$.fragment),na=g(),gt=a("h3"),Dt=a("a"),ys=a("span"),H(sa.$$.fragment),Gc=g(),Es=a("span"),Bc=i("HfApi"),Ni=g(),V=a("div"),H(ra.$$.fragment),Kc=g(),we=a("div"),H(ia.$$.fragment),Jc=g(),ws=a("p"),Qc=i("Closes or re-opens a Discussion or Pull Request."),Xc=g(),H(qt.$$.fragment),Yc=g(),H(It.$$.fragment),Zc=g(),ke=a("div"),H(ca.$$.fragment),el=g(),ks=a("p"),tl=i("Creates a new comment on the given Discussion."),ol=g(),H(Nt.$$.fragment),al=g(),H(jt.$$.fragment),nl=g(),Ae=a("div"),H(la.$$.fragment),sl=g(),As=a("p"),rl=i("Creates a commit in the given repo, deleting & uploading files as needed."),il=g(),H(Ft.$$.fragment),cl=g(),H(Tt.$$.fragment),ll=g(),ce=a("div"),H(pa.$$.fragment),pl=g(),xs=a("p"),gl=i("Creates a Discussion or Pull Request."),hl=g(),ga=a("p"),dl=i("Pull Requests created programmatically will be in "),Hs=a("code"),ul=i('"draft"'),fl=i(" status."),ml=g(),ha=a("p"),_l=i("Creating a Pull Request with changes can also be done at once with "),zn=a("a"),bl=i("HfApi.create_commit()"),vl=i("."),$l=g(),Wn=a("p"),yl=i("Returns: "),Gn=a("a"),El=i("DiscussionWithDetails"),wl=g(),H(Pt.$$.fragment),kl=g(),le=a("div"),H(da.$$.fragment),Al=g(),ua=a("p"),xl=i("Creates a Pull Request . Pull Requests created programmatically will be in "),Ds=a("code"),Hl=i('"draft"'),Dl=i(" status."),ql=g(),fa=a("p"),Il=i("Creating a Pull Request with changes can also be done at once with "),Bn=a("a"),Nl=i("HfApi.create_commit()"),jl=i(";"),Fl=g(),ma=a("p"),Tl=i("This is a wrapper around "),qs=a("code"),Pl=i("HfApi.create_discusssion"),Ol=i("."),Rl=g(),Kn=a("p"),Ll=i("Returns: "),Jn=a("a"),Sl=i("DiscussionWithDetails"),Cl=g(),H(Ot.$$.fragment),Ml=g(),Rt=a("div"),H(_a.$$.fragment),Ul=g(),Is=a("p"),Vl=i("Create an empty repo on the HuggingFace Hub."),zl=g(),Lt=a("div"),H(ba.$$.fragment),Wl=g(),Ns=a("p"),Gl=i("Tag a given commit of a repo on the Hub."),Bl=g(),xe=a("div"),H(va.$$.fragment),Kl=g(),js=a("p"),Jl=i("Get info on one specific dataset on huggingface.co."),Ql=g(),Fs=a("p"),Xl=i("Dataset can be private if you pass an acceptable token."),Yl=g(),H(St.$$.fragment),Zl=g(),Je=a("div"),H($a.$$.fragment),ep=g(),Ts=a("p"),tp=i("Deletes a file in the given repo."),op=g(),H(Ct.$$.fragment),ap=g(),Qe=a("div"),H(ya.$$.fragment),np=g(),Ps=a("p"),sp=i("Deletes a folder in the given repo."),rp=g(),Ea=a("p"),ip=i("Simple wrapper around "),Qn=a("a"),cp=i("create_commit()"),lp=i(" method."),pp=g(),Xe=a("div"),H(wa.$$.fragment),gp=g(),Os=a("p"),hp=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),dp=g(),H(Mt.$$.fragment),up=g(),Ut=a("div"),H(ka.$$.fragment),fp=g(),Rs=a("p"),mp=i("Delete a tag from a repo on the Hub."),_p=g(),Ye=a("div"),H(Aa.$$.fragment),bp=g(),Ls=a("p"),vp=i("Edits a comment on a Discussion / Pull Request."),$p=g(),H(Vt.$$.fragment),yp=g(),zt=a("div"),H(xa.$$.fragment),Ep=g(),Ss=a("p"),wp=i("Gets all valid dataset tags as a nested namespace object."),kp=g(),He=a("div"),H(Ha.$$.fragment),Ap=g(),Cs=a("p"),xp=i("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Hp=g(),Xn=a("p"),Dp=i("Returns: "),Yn=a("a"),qp=i("DiscussionWithDetails"),Ip=g(),H(Wt.$$.fragment),Np=g(),Gt=a("div"),H(Da.$$.fragment),jp=g(),Ms=a("p"),Fp=i(`Returns the repository name for a given model ID and optional
organization.`),Tp=g(),Bt=a("div"),H(qa.$$.fragment),Pp=g(),Us=a("p"),Op=i("Gets all valid model tags as a nested namespace object"),Rp=g(),_e=a("div"),H(Ia.$$.fragment),Lp=g(),Vs=a("p"),Sp=i("Fetches Discussions and Pull Requests for the given repo."),Cp=g(),zs=a("p"),Mp=i("Example:"),Up=g(),H(Kt.$$.fragment),Vp=g(),H(Jt.$$.fragment),zp=g(),De=a("div"),H(Na.$$.fragment),Wp=g(),Ws=a("p"),Gp=i("Hides a comment on a Discussion / Pull Request."),Bp=g(),H(Qt.$$.fragment),Kp=g(),H(Xt.$$.fragment),Jp=g(),qe=a("div"),H(ja.$$.fragment),Qp=g(),Gs=a("p"),Xp=i("Get the list of all the datasets on huggingface.co"),Yp=g(),H(Yt.$$.fragment),Zp=g(),H(Zt.$$.fragment),eg=g(),eo=a("div"),H(Fa.$$.fragment),tg=g(),Bs=a("p"),og=i("Get the public list of all the metrics on huggingface.co"),ag=g(),Ie=a("div"),H(Ta.$$.fragment),ng=g(),Ks=a("p"),sg=i("Get the list of all the models on huggingface.co"),rg=g(),H(to.$$.fragment),ig=g(),H(oo.$$.fragment),cg=g(),ao=a("div"),H(Pa.$$.fragment),lg=g(),Js=a("p"),pg=i("Get the list of files in a given repo."),gg=g(),no=a("div"),H(Oa.$$.fragment),hg=g(),Qs=a("p"),dg=i("Get the public list of all Spaces on huggingface.co"),ug=g(),Ze=a("div"),H(Ra.$$.fragment),fg=g(),Xs=a("p"),mg=i("Merges a Pull Request."),_g=g(),H(so.$$.fragment),bg=g(),Ne=a("div"),H(La.$$.fragment),vg=g(),Ys=a("p"),$g=i("Get info on one specific model on huggingface.co"),yg=g(),Zs=a("p"),Eg=i("Model can be private if you pass an acceptable token or are logged in."),wg=g(),H(ro.$$.fragment),kg=g(),je=a("div"),H(Sa.$$.fragment),Ag=g(),er=a("p"),xg=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Hg=g(),Ca=a("p"),Dg=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ma=a("a"),qg=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Ig=i("."),Ng=g(),H(io.$$.fragment),jg=g(),Fe=a("div"),H(Ua.$$.fragment),Fg=g(),tr=a("p"),Tg=i("Renames a Discussion."),Pg=g(),H(co.$$.fragment),Og=g(),H(lo.$$.fragment),Rg=g(),et=a("div"),H(Va.$$.fragment),Lg=g(),or=a("p"),Sg=i("Get the info object for a given repo of a given type."),Cg=g(),H(po.$$.fragment),Mg=g(),go=a("div"),H(za.$$.fragment),Ug=g(),ar=a("p"),Vg=i(`Saves the passed access token so git can correctly authenticate the
user.`),zg=g(),Te=a("div"),H(Wa.$$.fragment),Wg=g(),nr=a("p"),Gg=i("Get info on one specific Space on huggingface.co."),Bg=g(),sr=a("p"),Kg=i("Space can be private if you pass an acceptable token."),Jg=g(),H(ho.$$.fragment),Qg=g(),uo=a("div"),H(Ga.$$.fragment),Xg=g(),rr=a("p"),Yg=i("Resets the user\u2019s access token."),Zg=g(),tt=a("div"),H(Ba.$$.fragment),eh=g(),ir=a("p"),th=i("Update the visibility setting of a repository."),oh=g(),H(fo.$$.fragment),ah=g(),be=a("div"),H(Ka.$$.fragment),nh=g(),cr=a("p"),sh=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),rh=g(),H(mo.$$.fragment),ih=g(),H(_o.$$.fragment),ch=g(),H(bo.$$.fragment),lh=g(),re=a("div"),H(Ja.$$.fragment),ph=g(),lr=a("p"),gh=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),hh=g(),pr=a("p"),dh=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),uh=g(),ue=a("p"),fh=i("Use the "),gr=a("code"),mh=i("allow_patterns"),_h=i(" and "),hr=a("code"),bh=i("ignore_patterns"),vh=i(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Qa=a("a"),$h=i("here"),yh=i(`. If both
`),dr=a("code"),Eh=i("allow_patterns"),wh=i(" and "),ur=a("code"),kh=i("ignore_patterns"),Ah=i(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),xh=g(),Xa=a("p"),Hh=i("Uses "),fr=a("code"),Dh=i("HfApi.create_commit"),qh=i(" under the hood."),Ih=g(),H(vo.$$.fragment),Nh=g(),H($o.$$.fragment),jh=g(),H(yo.$$.fragment),Fh=g(),Eo=a("div"),H(Ya.$$.fragment),Th=g(),mr=a("p"),Ph=i("Call HF API to know \u201Cwhoami\u201D."),ji=g(),ht=a("h3"),wo=a("a"),_r=a("span"),H(Za.$$.fragment),Oh=g(),br=a("span"),Rh=i("ModelInfo"),Fi=g(),dt=a("div"),H(en.$$.fragment),Lh=g(),vr=a("p"),Sh=i("Info about a model accessible from huggingface.co"),Ti=g(),ut=a("h3"),ko=a("a"),$r=a("span"),H(tn.$$.fragment),Ch=g(),yr=a("span"),Mh=i("DatasetInfo"),Pi=g(),ft=a("div"),H(on.$$.fragment),Uh=g(),Er=a("p"),Vh=i("Info about a dataset accessible from huggingface.co"),Oi=g(),mt=a("h3"),Ao=a("a"),wr=a("span"),H(an.$$.fragment),zh=g(),kr=a("span"),Wh=i("SpaceInfo"),Ri=g(),Re=a("div"),H(nn.$$.fragment),Gh=g(),Ar=a("p"),Bh=i("Info about a Space accessible from huggingface.co"),Kh=g(),xr=a("p"),Jh=i(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Li=g(),_t=a("h3"),xo=a("a"),Hr=a("span"),H(sn.$$.fragment),Qh=g(),Dr=a("span"),Xh=i("RepoFile"),Si=g(),bt=a("div"),H(rn.$$.fragment),Yh=g(),qr=a("p"),Zh=i(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Ci=g(),vt=a("h3"),Ho=a("a"),Ir=a("span"),H(cn.$$.fragment),ed=g(),Nr=a("span"),td=i("CommitInfo"),Mi=g(),Le=a("div"),H(ln.$$.fragment),od=g(),jr=a("p"),ad=i("Data structure containing information about a newly created commit."),nd=g(),pn=a("p"),sd=i("Returned by "),Zn=a("a"),rd=i("create_commit()"),id=i("."),Ui=g(),$t=a("h2"),Do=a("a"),Fr=a("span"),H(gn.$$.fragment),cd=g(),es=a("span"),Tr=a("code"),ld=i("create_commit"),pd=i(" API"),Vi=g(),qo=a("p"),gd=i("Below are the supported values for "),Pr=a("code"),hd=i("CommitOperation()"),dd=i(":"),zi=g(),$e=a("div"),H(hn.$$.fragment),ud=g(),Or=a("p"),fd=i("Data structure holding necessary info to upload a file to a repository on the Hub."),md=g(),ot=a("div"),H(dn.$$.fragment),_d=g(),un=a("p"),bd=i(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Rr=a("code"),vd=i("path_or_fileobj"),$d=i("."),yd=g(),H(Io.$$.fragment),Ed=g(),at=a("div"),H(fn.$$.fragment),wd=g(),ts=a("p"),kd=i("The base64-encoded content of "),Lr=a("code"),Ad=i("path_or_fileobj"),xd=g(),os=a("p"),Hd=i("Returns: "),Sr=a("code"),Dd=i("bytes"),Wi=g(),yt=a("div"),H(mn.$$.fragment),qd=g(),Cr=a("p"),Id=i(`Data structure holding necessary info to delete a file or a folder from a repository
on the Hub.`),Gi=g(),Et=a("h2"),No=a("a"),Mr=a("span"),H(_n.$$.fragment),Nd=g(),Ur=a("span"),jd=i("Hugging Face local storage"),Bi=g(),bn=a("p"),Vr=a("code"),Fd=i("huggingface_hub"),Td=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ki=g(),jo=a("p"),Pd=i("It does this using the "),as=a("a"),Od=i("HfFolder"),Rd=i(" utility, which saves data at the root of the user."),Ji=g(),ye=a("div"),H(vn.$$.fragment),Ld=g(),Fo=a("div"),H($n.$$.fragment),Sd=g(),zr=a("p"),Cd=i("Deletes the token from storage. Does not fail if token does not exist."),Md=g(),nt=a("div"),H(yn.$$.fragment),Ud=g(),Wr=a("p"),Vd=i("Get token or None if not existent."),zd=g(),En=a("p"),Wd=i(`Note that a token can be also provided using the
`),Gr=a("code"),Gd=i("HUGGING_FACE_HUB_TOKEN"),Bd=i(" environment variable."),Kd=g(),To=a("div"),H(wn.$$.fragment),Jd=g(),Br=a("p"),Qd=i("Save token, creating folder as needed."),Qi=g(),wt=a("h2"),Po=a("a"),Kr=a("span"),H(kn.$$.fragment),Xd=g(),Jr=a("span"),Yd=i("Filtering helpers"),Xi=g(),Oo=a("p"),Zd=i("Some helpers to filter repositories on the Hub are available in the "),Qr=a("code"),eu=i("huggingface_hub"),tu=i(" package."),Yi=g(),kt=a("h3"),Ro=a("a"),Xr=a("span"),H(An.$$.fragment),ou=g(),Yr=a("span"),au=i("DatasetFilter"),Zi=g(),Se=a("div"),H(xn.$$.fragment),nu=g(),Zr=a("p"),su=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ru=g(),H(Lo.$$.fragment),ec=g(),At=a("h3"),So=a("a"),ei=a("span"),H(Hn.$$.fragment),iu=g(),ti=a("span"),cu=i("ModelFilter"),tc=g(),Ce=a("div"),H(Dn.$$.fragment),lu=g(),oi=a("p"),pu=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),gu=g(),H(Co.$$.fragment),oc=g(),xt=a("h3"),Mo=a("a"),ai=a("span"),H(qn.$$.fragment),hu=g(),ni=a("span"),du=i("DatasetSearchArguments"),ac=g(),Me=a("div"),H(In.$$.fragment),uu=g(),si=a("p"),fu=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),mu=g(),H(Uo.$$.fragment),nc=g(),Ht=a("h3"),Vo=a("a"),ri=a("span"),H(Nn.$$.fragment),_u=g(),ii=a("span"),bu=i("ModelSearchArguments"),sc=g(),Ue=a("div"),H(jn.$$.fragment),vu=g(),ci=a("p"),$u=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),yu=g(),H(zo.$$.fragment),this.h()},l(o){const E=Nm('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Fn=s(f);l=n(Fn,"A",{id:!0,class:!0,href:!0});var li=s(l);d=n(li,"SPAN",{});var pi=s(d);D(r.$$.fragment,pi),pi.forEach(t),li.forEach(t),u=h(Fn),P=n(Fn,"SPAN",{});var gi=s(P);v=c(gi,"Hugging Face Hub API"),gi.forEach(t),Fn.forEach(t),x=h(o),w=n(o,"P",{});var Tn=s(w);y=c(Tn,"Below is the documentation for the "),k=n(Tn,"CODE",{});var hi=s(k);O=c(hi,"HfApi"),hi.forEach(t),T=c(Tn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Tn.forEach(t),R=h(o),_=n(o,"P",{});var Pn=s(_);F=c(Pn,"All methods from the "),M=n(Pn,"CODE",{});var di=s(M);W=c(di,"HfApi"),di.forEach(t),L=c(Pn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Pn.forEach(t),K=h(o),G=n(o,"P",{});var ui=s(G);A=c(ui,"The following approach uses the method from the root of the package:"),ui.forEach(t),U=h(o),D(S.$$.fragment,o),Y=h(o),te=n(o,"P",{});var On=s(te);Z=c(On,"The following approach uses the "),J=n(On,"CODE",{});var fi=s(J);ee=c(fi,"HfApi"),fi.forEach(t),ae=c(On," class:"),On.forEach(t),B=h(o),D(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var Ve=s(ne);Be=c(Ve,"Using the "),de=n(Ve,"A",{href:!0});var mi=s(de);it=c(mi,"HfApi"),mi.forEach(t),Ke=c(Ve,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),Ee=n(Ve,"CODE",{});var _i=s(Ee);ct=c(_i,"huggingface-cli login"),_i.forEach(t),lt=c(Ve," or "),pt=n(Ve,"A",{href:!0});var bi=s(pt);Vn=c(bi,"login()"),bi.forEach(t),oa=c(Ve,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),Ve.forEach(t),aa=h(o),D(Oe.$$.fragment,o),na=h(o),gt=n(o,"H3",{class:!0});var Rn=s(gt);Dt=n(Rn,"A",{id:!0,class:!0,href:!0});var vi=s(Dt);ys=n(vi,"SPAN",{});var $i=s(ys);D(sa.$$.fragment,$i),$i.forEach(t),vi.forEach(t),Gc=h(Rn),Es=n(Rn,"SPAN",{});var yi=s(Es);Bc=c(yi,"HfApi"),yi.forEach(t),Rn.forEach(t),Ni=h(o),V=n(o,"DIV",{class:!0});var z=s(V);D(ra.$$.fragment,z),Kc=h(z),we=n(z,"DIV",{class:!0});var ze=s(we);D(ia.$$.fragment,ze),Jc=h(ze),ws=n(ze,"P",{});var Ei=s(ws);Qc=c(Ei,"Closes or re-opens a Discussion or Pull Request."),Ei.forEach(t),Xc=h(ze),D(qt.$$.fragment,ze),Yc=h(ze),D(It.$$.fragment,ze),ze.forEach(t),Zc=h(z),ke=n(z,"DIV",{class:!0});var We=s(ke);D(ca.$$.fragment,We),el=h(We),ks=n(We,"P",{});var wi=s(ks);tl=c(wi,"Creates a new comment on the given Discussion."),wi.forEach(t),ol=h(We),D(Nt.$$.fragment,We),al=h(We),D(jt.$$.fragment,We),We.forEach(t),nl=h(z),Ae=n(z,"DIV",{class:!0});var Ge=s(Ae);D(la.$$.fragment,Ge),sl=h(Ge),As=n(Ge,"P",{});var ki=s(As);rl=c(ki,"Creates a commit in the given repo, deleting & uploading files as needed."),ki.forEach(t),il=h(Ge),D(Ft.$$.fragment,Ge),cl=h(Ge),D(Tt.$$.fragment,Ge),Ge.forEach(t),ll=h(z),ce=n(z,"DIV",{class:!0});var fe=s(ce);D(pa.$$.fragment,fe),pl=h(fe),xs=n(fe,"P",{});var Ai=s(xs);gl=c(Ai,"Creates a Discussion or Pull Request."),Ai.forEach(t),hl=h(fe),ga=n(fe,"P",{});var Ln=s(ga);dl=c(Ln,"Pull Requests created programmatically will be in "),Hs=n(Ln,"CODE",{});var xi=s(Hs);ul=c(xi,'"draft"'),xi.forEach(t),fl=c(Ln," status."),Ln.forEach(t),ml=h(fe),ha=n(fe,"P",{});var Sn=s(ha);_l=c(Sn,"Creating a Pull Request with changes can also be done at once with "),zn=n(Sn,"A",{href:!0});var Hi=s(zn);bl=c(Hi,"HfApi.create_commit()"),Hi.forEach(t),vl=c(Sn,"."),Sn.forEach(t),$l=h(fe),Wn=n(fe,"P",{});var ns=s(Wn);yl=c(ns,"Returns: "),Gn=n(ns,"A",{href:!0});var Di=s(Gn);El=c(Di,"DiscussionWithDetails"),Di.forEach(t),ns.forEach(t),wl=h(fe),D(Pt.$$.fragment,fe),fe.forEach(t),kl=h(z),le=n(z,"DIV",{class:!0});var me=s(le);D(da.$$.fragment,me),Al=h(me),ua=n(me,"P",{});var Cn=s(ua);xl=c(Cn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Ds=n(Cn,"CODE",{});var qi=s(Ds);Hl=c(qi,'"draft"'),qi.forEach(t),Dl=c(Cn," status."),Cn.forEach(t),ql=h(me),fa=n(me,"P",{});var Mn=s(fa);Il=c(Mn,"Creating a Pull Request with changes can also be done at once with "),Bn=n(Mn,"A",{href:!0});var Ii=s(Bn);Nl=c(Ii,"HfApi.create_commit()"),Ii.forEach(t),jl=c(Mn,";"),Mn.forEach(t),Fl=h(me),ma=n(me,"P",{});var Un=s(ma);Tl=c(Un,"This is a wrapper around "),qs=n(Un,"CODE",{});var Du=s(qs);Pl=c(Du,"HfApi.create_discusssion"),Du.forEach(t),Ol=c(Un,"."),Un.forEach(t),Rl=h(me),Kn=n(me,"P",{});var Eu=s(Kn);Ll=c(Eu,"Returns: "),Jn=n(Eu,"A",{href:!0});var qu=s(Jn);Sl=c(qu,"DiscussionWithDetails"),qu.forEach(t),Eu.forEach(t),Cl=h(me),D(Ot.$$.fragment,me),me.forEach(t),Ml=h(z),Rt=n(z,"DIV",{class:!0});var ic=s(Rt);D(_a.$$.fragment,ic),Ul=h(ic),Is=n(ic,"P",{});var Iu=s(Is);Vl=c(Iu,"Create an empty repo on the HuggingFace Hub."),Iu.forEach(t),ic.forEach(t),zl=h(z),Lt=n(z,"DIV",{class:!0});var cc=s(Lt);D(ba.$$.fragment,cc),Wl=h(cc),Ns=n(cc,"P",{});var Nu=s(Ns);Gl=c(Nu,"Tag a given commit of a repo on the Hub."),Nu.forEach(t),cc.forEach(t),Bl=h(z),xe=n(z,"DIV",{class:!0});var Wo=s(xe);D(va.$$.fragment,Wo),Kl=h(Wo),js=n(Wo,"P",{});var ju=s(js);Jl=c(ju,"Get info on one specific dataset on huggingface.co."),ju.forEach(t),Ql=h(Wo),Fs=n(Wo,"P",{});var Fu=s(Fs);Xl=c(Fu,"Dataset can be private if you pass an acceptable token."),Fu.forEach(t),Yl=h(Wo),D(St.$$.fragment,Wo),Wo.forEach(t),Zl=h(z),Je=n(z,"DIV",{class:!0});var ss=s(Je);D($a.$$.fragment,ss),ep=h(ss),Ts=n(ss,"P",{});var Tu=s(Ts);tp=c(Tu,"Deletes a file in the given repo."),Tu.forEach(t),op=h(ss),D(Ct.$$.fragment,ss),ss.forEach(t),ap=h(z),Qe=n(z,"DIV",{class:!0});var rs=s(Qe);D(ya.$$.fragment,rs),np=h(rs),Ps=n(rs,"P",{});var Pu=s(Ps);sp=c(Pu,"Deletes a folder in the given repo."),Pu.forEach(t),rp=h(rs),Ea=n(rs,"P",{});var lc=s(Ea);ip=c(lc,"Simple wrapper around "),Qn=n(lc,"A",{href:!0});var Ou=s(Qn);cp=c(Ou,"create_commit()"),Ou.forEach(t),lp=c(lc," method."),lc.forEach(t),rs.forEach(t),pp=h(z),Xe=n(z,"DIV",{class:!0});var is=s(Xe);D(wa.$$.fragment,is),gp=h(is),Os=n(is,"P",{});var Ru=s(Os);hp=c(Ru,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ru.forEach(t),dp=h(is),D(Mt.$$.fragment,is),is.forEach(t),up=h(z),Ut=n(z,"DIV",{class:!0});var pc=s(Ut);D(ka.$$.fragment,pc),fp=h(pc),Rs=n(pc,"P",{});var Lu=s(Rs);mp=c(Lu,"Delete a tag from a repo on the Hub."),Lu.forEach(t),pc.forEach(t),_p=h(z),Ye=n(z,"DIV",{class:!0});var cs=s(Ye);D(Aa.$$.fragment,cs),bp=h(cs),Ls=n(cs,"P",{});var Su=s(Ls);vp=c(Su,"Edits a comment on a Discussion / Pull Request."),Su.forEach(t),$p=h(cs),D(Vt.$$.fragment,cs),cs.forEach(t),yp=h(z),zt=n(z,"DIV",{class:!0});var gc=s(zt);D(xa.$$.fragment,gc),Ep=h(gc),Ss=n(gc,"P",{});var Cu=s(Ss);wp=c(Cu,"Gets all valid dataset tags as a nested namespace object."),Cu.forEach(t),gc.forEach(t),kp=h(z),He=n(z,"DIV",{class:!0});var Go=s(He);D(Ha.$$.fragment,Go),Ap=h(Go),Cs=n(Go,"P",{});var Mu=s(Cs);xp=c(Mu,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Mu.forEach(t),Hp=h(Go),Xn=n(Go,"P",{});var wu=s(Xn);Dp=c(wu,"Returns: "),Yn=n(wu,"A",{href:!0});var Uu=s(Yn);qp=c(Uu,"DiscussionWithDetails"),Uu.forEach(t),wu.forEach(t),Ip=h(Go),D(Wt.$$.fragment,Go),Go.forEach(t),Np=h(z),Gt=n(z,"DIV",{class:!0});var hc=s(Gt);D(Da.$$.fragment,hc),jp=h(hc),Ms=n(hc,"P",{});var Vu=s(Ms);Fp=c(Vu,`Returns the repository name for a given model ID and optional
organization.`),Vu.forEach(t),hc.forEach(t),Tp=h(z),Bt=n(z,"DIV",{class:!0});var dc=s(Bt);D(qa.$$.fragment,dc),Pp=h(dc),Us=n(dc,"P",{});var zu=s(Us);Op=c(zu,"Gets all valid model tags as a nested namespace object"),zu.forEach(t),dc.forEach(t),Rp=h(z),_e=n(z,"DIV",{class:!0});var st=s(_e);D(Ia.$$.fragment,st),Lp=h(st),Vs=n(st,"P",{});var Wu=s(Vs);Sp=c(Wu,"Fetches Discussions and Pull Requests for the given repo."),Wu.forEach(t),Cp=h(st),zs=n(st,"P",{});var Gu=s(zs);Mp=c(Gu,"Example:"),Gu.forEach(t),Up=h(st),D(Kt.$$.fragment,st),Vp=h(st),D(Jt.$$.fragment,st),st.forEach(t),zp=h(z),De=n(z,"DIV",{class:!0});var Bo=s(De);D(Na.$$.fragment,Bo),Wp=h(Bo),Ws=n(Bo,"P",{});var Bu=s(Ws);Gp=c(Bu,"Hides a comment on a Discussion / Pull Request."),Bu.forEach(t),Bp=h(Bo),D(Qt.$$.fragment,Bo),Kp=h(Bo),D(Xt.$$.fragment,Bo),Bo.forEach(t),Jp=h(z),qe=n(z,"DIV",{class:!0});var Ko=s(qe);D(ja.$$.fragment,Ko),Qp=h(Ko),Gs=n(Ko,"P",{});var Ku=s(Gs);Xp=c(Ku,"Get the list of all the datasets on huggingface.co"),Ku.forEach(t),Yp=h(Ko),D(Yt.$$.fragment,Ko),Zp=h(Ko),D(Zt.$$.fragment,Ko),Ko.forEach(t),eg=h(z),eo=n(z,"DIV",{class:!0});var uc=s(eo);D(Fa.$$.fragment,uc),tg=h(uc),Bs=n(uc,"P",{});var Ju=s(Bs);og=c(Ju,"Get the public list of all the metrics on huggingface.co"),Ju.forEach(t),uc.forEach(t),ag=h(z),Ie=n(z,"DIV",{class:!0});var Jo=s(Ie);D(Ta.$$.fragment,Jo),ng=h(Jo),Ks=n(Jo,"P",{});var Qu=s(Ks);sg=c(Qu,"Get the list of all the models on huggingface.co"),Qu.forEach(t),rg=h(Jo),D(to.$$.fragment,Jo),ig=h(Jo),D(oo.$$.fragment,Jo),Jo.forEach(t),cg=h(z),ao=n(z,"DIV",{class:!0});var fc=s(ao);D(Pa.$$.fragment,fc),lg=h(fc),Js=n(fc,"P",{});var Xu=s(Js);pg=c(Xu,"Get the list of files in a given repo."),Xu.forEach(t),fc.forEach(t),gg=h(z),no=n(z,"DIV",{class:!0});var mc=s(no);D(Oa.$$.fragment,mc),hg=h(mc),Qs=n(mc,"P",{});var Yu=s(Qs);dg=c(Yu,"Get the public list of all Spaces on huggingface.co"),Yu.forEach(t),mc.forEach(t),ug=h(z),Ze=n(z,"DIV",{class:!0});var ls=s(Ze);D(Ra.$$.fragment,ls),fg=h(ls),Xs=n(ls,"P",{});var Zu=s(Xs);mg=c(Zu,"Merges a Pull Request."),Zu.forEach(t),_g=h(ls),D(so.$$.fragment,ls),ls.forEach(t),bg=h(z),Ne=n(z,"DIV",{class:!0});var Qo=s(Ne);D(La.$$.fragment,Qo),vg=h(Qo),Ys=n(Qo,"P",{});var ef=s(Ys);$g=c(ef,"Get info on one specific model on huggingface.co"),ef.forEach(t),yg=h(Qo),Zs=n(Qo,"P",{});var tf=s(Zs);Eg=c(tf,"Model can be private if you pass an acceptable token or are logged in."),tf.forEach(t),wg=h(Qo),D(ro.$$.fragment,Qo),Qo.forEach(t),kg=h(z),je=n(z,"DIV",{class:!0});var Xo=s(je);D(Sa.$$.fragment,Xo),Ag=h(Xo),er=n(Xo,"P",{});var of=s(er);xg=c(of,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),of.forEach(t),Hg=h(Xo),Ca=n(Xo,"P",{});var _c=s(Ca);Dg=c(_c,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ma=n(_c,"A",{href:!0,rel:!0});var af=s(Ma);qg=c(af,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),af.forEach(t),Ig=c(_c,"."),_c.forEach(t),Ng=h(Xo),D(io.$$.fragment,Xo),Xo.forEach(t),jg=h(z),Fe=n(z,"DIV",{class:!0});var Yo=s(Fe);D(Ua.$$.fragment,Yo),Fg=h(Yo),tr=n(Yo,"P",{});var nf=s(tr);Tg=c(nf,"Renames a Discussion."),nf.forEach(t),Pg=h(Yo),D(co.$$.fragment,Yo),Og=h(Yo),D(lo.$$.fragment,Yo),Yo.forEach(t),Rg=h(z),et=n(z,"DIV",{class:!0});var ps=s(et);D(Va.$$.fragment,ps),Lg=h(ps),or=n(ps,"P",{});var sf=s(or);Sg=c(sf,"Get the info object for a given repo of a given type."),sf.forEach(t),Cg=h(ps),D(po.$$.fragment,ps),ps.forEach(t),Mg=h(z),go=n(z,"DIV",{class:!0});var bc=s(go);D(za.$$.fragment,bc),Ug=h(bc),ar=n(bc,"P",{});var rf=s(ar);Vg=c(rf,`Saves the passed access token so git can correctly authenticate the
user.`),rf.forEach(t),bc.forEach(t),zg=h(z),Te=n(z,"DIV",{class:!0});var Zo=s(Te);D(Wa.$$.fragment,Zo),Wg=h(Zo),nr=n(Zo,"P",{});var cf=s(nr);Gg=c(cf,"Get info on one specific Space on huggingface.co."),cf.forEach(t),Bg=h(Zo),sr=n(Zo,"P",{});var lf=s(sr);Kg=c(lf,"Space can be private if you pass an acceptable token."),lf.forEach(t),Jg=h(Zo),D(ho.$$.fragment,Zo),Zo.forEach(t),Qg=h(z),uo=n(z,"DIV",{class:!0});var vc=s(uo);D(Ga.$$.fragment,vc),Xg=h(vc),rr=n(vc,"P",{});var pf=s(rr);Yg=c(pf,"Resets the user\u2019s access token."),pf.forEach(t),vc.forEach(t),Zg=h(z),tt=n(z,"DIV",{class:!0});var gs=s(tt);D(Ba.$$.fragment,gs),eh=h(gs),ir=n(gs,"P",{});var gf=s(ir);th=c(gf,"Update the visibility setting of a repository."),gf.forEach(t),oh=h(gs),D(fo.$$.fragment,gs),gs.forEach(t),ah=h(z),be=n(z,"DIV",{class:!0});var rt=s(be);D(Ka.$$.fragment,rt),nh=h(rt),cr=n(rt,"P",{});var hf=s(cr);sh=c(hf,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),hf.forEach(t),rh=h(rt),D(mo.$$.fragment,rt),ih=h(rt),D(_o.$$.fragment,rt),ch=h(rt),D(bo.$$.fragment,rt),rt.forEach(t),lh=h(z),re=n(z,"DIV",{class:!0});var pe=s(re);D(Ja.$$.fragment,pe),ph=h(pe),lr=n(pe,"P",{});var df=s(lr);gh=c(df,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),df.forEach(t),hh=h(pe),pr=n(pe,"P",{});var uf=s(pr);dh=c(uf,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),uf.forEach(t),uh=h(pe),ue=n(pe,"P",{});var Pe=s(ue);fh=c(Pe,"Use the "),gr=n(Pe,"CODE",{});var ff=s(gr);mh=c(ff,"allow_patterns"),ff.forEach(t),_h=c(Pe," and "),hr=n(Pe,"CODE",{});var mf=s(hr);bh=c(mf,"ignore_patterns"),mf.forEach(t),vh=c(Pe,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Qa=n(Pe,"A",{href:!0,rel:!0});var _f=s(Qa);$h=c(_f,"here"),_f.forEach(t),yh=c(Pe,`. If both
`),dr=n(Pe,"CODE",{});var bf=s(dr);Eh=c(bf,"allow_patterns"),bf.forEach(t),wh=c(Pe," and "),ur=n(Pe,"CODE",{});var vf=s(ur);kh=c(vf,"ignore_patterns"),vf.forEach(t),Ah=c(Pe,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Pe.forEach(t),xh=h(pe),Xa=n(pe,"P",{});var $c=s(Xa);Hh=c($c,"Uses "),fr=n($c,"CODE",{});var $f=s(fr);Dh=c($f,"HfApi.create_commit"),$f.forEach(t),qh=c($c," under the hood."),$c.forEach(t),Ih=h(pe),D(vo.$$.fragment,pe),Nh=h(pe),D($o.$$.fragment,pe),jh=h(pe),D(yo.$$.fragment,pe),pe.forEach(t),Fh=h(z),Eo=n(z,"DIV",{class:!0});var yc=s(Eo);D(Ya.$$.fragment,yc),Th=h(yc),mr=n(yc,"P",{});var yf=s(mr);Ph=c(yf,"Call HF API to know \u201Cwhoami\u201D."),yf.forEach(t),yc.forEach(t),z.forEach(t),ji=h(o),ht=n(o,"H3",{class:!0});var Ec=s(ht);wo=n(Ec,"A",{id:!0,class:!0,href:!0});var Ef=s(wo);_r=n(Ef,"SPAN",{});var wf=s(_r);D(Za.$$.fragment,wf),wf.forEach(t),Ef.forEach(t),Oh=h(Ec),br=n(Ec,"SPAN",{});var kf=s(br);Rh=c(kf,"ModelInfo"),kf.forEach(t),Ec.forEach(t),Fi=h(o),dt=n(o,"DIV",{class:!0});var wc=s(dt);D(en.$$.fragment,wc),Lh=h(wc),vr=n(wc,"P",{});var Af=s(vr);Sh=c(Af,"Info about a model accessible from huggingface.co"),Af.forEach(t),wc.forEach(t),Ti=h(o),ut=n(o,"H3",{class:!0});var kc=s(ut);ko=n(kc,"A",{id:!0,class:!0,href:!0});var xf=s(ko);$r=n(xf,"SPAN",{});var Hf=s($r);D(tn.$$.fragment,Hf),Hf.forEach(t),xf.forEach(t),Ch=h(kc),yr=n(kc,"SPAN",{});var Df=s(yr);Mh=c(Df,"DatasetInfo"),Df.forEach(t),kc.forEach(t),Pi=h(o),ft=n(o,"DIV",{class:!0});var Ac=s(ft);D(on.$$.fragment,Ac),Uh=h(Ac),Er=n(Ac,"P",{});var qf=s(Er);Vh=c(qf,"Info about a dataset accessible from huggingface.co"),qf.forEach(t),Ac.forEach(t),Oi=h(o),mt=n(o,"H3",{class:!0});var xc=s(mt);Ao=n(xc,"A",{id:!0,class:!0,href:!0});var If=s(Ao);wr=n(If,"SPAN",{});var Nf=s(wr);D(an.$$.fragment,Nf),Nf.forEach(t),If.forEach(t),zh=h(xc),kr=n(xc,"SPAN",{});var jf=s(kr);Wh=c(jf,"SpaceInfo"),jf.forEach(t),xc.forEach(t),Ri=h(o),Re=n(o,"DIV",{class:!0});var hs=s(Re);D(nn.$$.fragment,hs),Gh=h(hs),Ar=n(hs,"P",{});var Ff=s(Ar);Bh=c(Ff,"Info about a Space accessible from huggingface.co"),Ff.forEach(t),Kh=h(hs),xr=n(hs,"P",{});var Tf=s(xr);Jh=c(Tf,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Tf.forEach(t),hs.forEach(t),Li=h(o),_t=n(o,"H3",{class:!0});var Hc=s(_t);xo=n(Hc,"A",{id:!0,class:!0,href:!0});var Pf=s(xo);Hr=n(Pf,"SPAN",{});var Of=s(Hr);D(sn.$$.fragment,Of),Of.forEach(t),Pf.forEach(t),Qh=h(Hc),Dr=n(Hc,"SPAN",{});var Rf=s(Dr);Xh=c(Rf,"RepoFile"),Rf.forEach(t),Hc.forEach(t),Si=h(o),bt=n(o,"DIV",{class:!0});var Dc=s(bt);D(rn.$$.fragment,Dc),Yh=h(Dc),qr=n(Dc,"P",{});var Lf=s(qr);Zh=c(Lf,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Lf.forEach(t),Dc.forEach(t),Ci=h(o),vt=n(o,"H3",{class:!0});var qc=s(vt);Ho=n(qc,"A",{id:!0,class:!0,href:!0});var Sf=s(Ho);Ir=n(Sf,"SPAN",{});var Cf=s(Ir);D(cn.$$.fragment,Cf),Cf.forEach(t),Sf.forEach(t),ed=h(qc),Nr=n(qc,"SPAN",{});var Mf=s(Nr);td=c(Mf,"CommitInfo"),Mf.forEach(t),qc.forEach(t),Mi=h(o),Le=n(o,"DIV",{class:!0});var ds=s(Le);D(ln.$$.fragment,ds),od=h(ds),jr=n(ds,"P",{});var Uf=s(jr);ad=c(Uf,"Data structure containing information about a newly created commit."),Uf.forEach(t),nd=h(ds),pn=n(ds,"P",{});var Ic=s(pn);sd=c(Ic,"Returned by "),Zn=n(Ic,"A",{href:!0});var Vf=s(Zn);rd=c(Vf,"create_commit()"),Vf.forEach(t),id=c(Ic,"."),Ic.forEach(t),ds.forEach(t),Ui=h(o),$t=n(o,"H2",{class:!0});var Nc=s($t);Do=n(Nc,"A",{id:!0,class:!0,href:!0});var zf=s(Do);Fr=n(zf,"SPAN",{});var Wf=s(Fr);D(gn.$$.fragment,Wf),Wf.forEach(t),zf.forEach(t),cd=h(Nc),es=n(Nc,"SPAN",{});var ku=s(es);Tr=n(ku,"CODE",{});var Gf=s(Tr);ld=c(Gf,"create_commit"),Gf.forEach(t),pd=c(ku," API"),ku.forEach(t),Nc.forEach(t),Vi=h(o),qo=n(o,"P",{});var jc=s(qo);gd=c(jc,"Below are the supported values for "),Pr=n(jc,"CODE",{});var Bf=s(Pr);hd=c(Bf,"CommitOperation()"),Bf.forEach(t),dd=c(jc,":"),jc.forEach(t),zi=h(o),$e=n(o,"DIV",{class:!0});var ea=s($e);D(hn.$$.fragment,ea),ud=h(ea),Or=n(ea,"P",{});var Kf=s(Or);fd=c(Kf,"Data structure holding necessary info to upload a file to a repository on the Hub."),Kf.forEach(t),md=h(ea),ot=n(ea,"DIV",{class:!0});var us=s(ot);D(dn.$$.fragment,us),_d=h(us),un=n(us,"P",{});var Fc=s(un);bd=c(Fc,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Rr=n(Fc,"CODE",{});var Jf=s(Rr);vd=c(Jf,"path_or_fileobj"),Jf.forEach(t),$d=c(Fc,"."),Fc.forEach(t),yd=h(us),D(Io.$$.fragment,us),us.forEach(t),Ed=h(ea),at=n(ea,"DIV",{class:!0});var fs=s(at);D(fn.$$.fragment,fs),wd=h(fs),ts=n(fs,"P",{});var Au=s(ts);kd=c(Au,"The base64-encoded content of "),Lr=n(Au,"CODE",{});var Qf=s(Lr);Ad=c(Qf,"path_or_fileobj"),Qf.forEach(t),Au.forEach(t),xd=h(fs),os=n(fs,"P",{});var xu=s(os);Hd=c(xu,"Returns: "),Sr=n(xu,"CODE",{});var Xf=s(Sr);Dd=c(Xf,"bytes"),Xf.forEach(t),xu.forEach(t),fs.forEach(t),ea.forEach(t),Wi=h(o),yt=n(o,"DIV",{class:!0});var Tc=s(yt);D(mn.$$.fragment,Tc),qd=h(Tc),Cr=n(Tc,"P",{});var Yf=s(Cr);Id=c(Yf,`Data structure holding necessary info to delete a file or a folder from a repository
on the Hub.`),Yf.forEach(t),Tc.forEach(t),Gi=h(o),Et=n(o,"H2",{class:!0});var Pc=s(Et);No=n(Pc,"A",{id:!0,class:!0,href:!0});var Zf=s(No);Mr=n(Zf,"SPAN",{});var em=s(Mr);D(_n.$$.fragment,em),em.forEach(t),Zf.forEach(t),Nd=h(Pc),Ur=n(Pc,"SPAN",{});var tm=s(Ur);jd=c(tm,"Hugging Face local storage"),tm.forEach(t),Pc.forEach(t),Bi=h(o),bn=n(o,"P",{});var Hu=s(bn);Vr=n(Hu,"CODE",{});var om=s(Vr);Fd=c(om,"huggingface_hub"),om.forEach(t),Td=c(Hu,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Hu.forEach(t),Ki=h(o),jo=n(o,"P",{});var Oc=s(jo);Pd=c(Oc,"It does this using the "),as=n(Oc,"A",{href:!0});var am=s(as);Od=c(am,"HfFolder"),am.forEach(t),Rd=c(Oc," utility, which saves data at the root of the user."),Oc.forEach(t),Ji=h(o),ye=n(o,"DIV",{class:!0});var ta=s(ye);D(vn.$$.fragment,ta),Ld=h(ta),Fo=n(ta,"DIV",{class:!0});var Rc=s(Fo);D($n.$$.fragment,Rc),Sd=h(Rc),zr=n(Rc,"P",{});var nm=s(zr);Cd=c(nm,"Deletes the token from storage. Does not fail if token does not exist."),nm.forEach(t),Rc.forEach(t),Md=h(ta),nt=n(ta,"DIV",{class:!0});var ms=s(nt);D(yn.$$.fragment,ms),Ud=h(ms),Wr=n(ms,"P",{});var sm=s(Wr);Vd=c(sm,"Get token or None if not existent."),sm.forEach(t),zd=h(ms),En=n(ms,"P",{});var Lc=s(En);Wd=c(Lc,`Note that a token can be also provided using the
`),Gr=n(Lc,"CODE",{});var rm=s(Gr);Gd=c(rm,"HUGGING_FACE_HUB_TOKEN"),rm.forEach(t),Bd=c(Lc," environment variable."),Lc.forEach(t),ms.forEach(t),Kd=h(ta),To=n(ta,"DIV",{class:!0});var Sc=s(To);D(wn.$$.fragment,Sc),Jd=h(Sc),Br=n(Sc,"P",{});var im=s(Br);Qd=c(im,"Save token, creating folder as needed."),im.forEach(t),Sc.forEach(t),ta.forEach(t),Qi=h(o),wt=n(o,"H2",{class:!0});var Cc=s(wt);Po=n(Cc,"A",{id:!0,class:!0,href:!0});var cm=s(Po);Kr=n(cm,"SPAN",{});var lm=s(Kr);D(kn.$$.fragment,lm),lm.forEach(t),cm.forEach(t),Xd=h(Cc),Jr=n(Cc,"SPAN",{});var pm=s(Jr);Yd=c(pm,"Filtering helpers"),pm.forEach(t),Cc.forEach(t),Xi=h(o),Oo=n(o,"P",{});var Mc=s(Oo);Zd=c(Mc,"Some helpers to filter repositories on the Hub are available in the "),Qr=n(Mc,"CODE",{});var gm=s(Qr);eu=c(gm,"huggingface_hub"),gm.forEach(t),tu=c(Mc," package."),Mc.forEach(t),Yi=h(o),kt=n(o,"H3",{class:!0});var Uc=s(kt);Ro=n(Uc,"A",{id:!0,class:!0,href:!0});var hm=s(Ro);Xr=n(hm,"SPAN",{});var dm=s(Xr);D(An.$$.fragment,dm),dm.forEach(t),hm.forEach(t),ou=h(Uc),Yr=n(Uc,"SPAN",{});var um=s(Yr);au=c(um,"DatasetFilter"),um.forEach(t),Uc.forEach(t),Zi=h(o),Se=n(o,"DIV",{class:!0});var _s=s(Se);D(xn.$$.fragment,_s),nu=h(_s),Zr=n(_s,"P",{});var fm=s(Zr);su=c(fm,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),fm.forEach(t),ru=h(_s),D(Lo.$$.fragment,_s),_s.forEach(t),ec=h(o),At=n(o,"H3",{class:!0});var Vc=s(At);So=n(Vc,"A",{id:!0,class:!0,href:!0});var mm=s(So);ei=n(mm,"SPAN",{});var _m=s(ei);D(Hn.$$.fragment,_m),_m.forEach(t),mm.forEach(t),iu=h(Vc),ti=n(Vc,"SPAN",{});var bm=s(ti);cu=c(bm,"ModelFilter"),bm.forEach(t),Vc.forEach(t),tc=h(o),Ce=n(o,"DIV",{class:!0});var bs=s(Ce);D(Dn.$$.fragment,bs),lu=h(bs),oi=n(bs,"P",{});var vm=s(oi);pu=c(vm,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),vm.forEach(t),gu=h(bs),D(Co.$$.fragment,bs),bs.forEach(t),oc=h(o),xt=n(o,"H3",{class:!0});var zc=s(xt);Mo=n(zc,"A",{id:!0,class:!0,href:!0});var $m=s(Mo);ai=n($m,"SPAN",{});var ym=s(ai);D(qn.$$.fragment,ym),ym.forEach(t),$m.forEach(t),hu=h(zc),ni=n(zc,"SPAN",{});var Em=s(ni);du=c(Em,"DatasetSearchArguments"),Em.forEach(t),zc.forEach(t),ac=h(o),Me=n(o,"DIV",{class:!0});var vs=s(Me);D(In.$$.fragment,vs),uu=h(vs),si=n(vs,"P",{});var wm=s(si);fu=c(wm,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),wm.forEach(t),mu=h(vs),D(Uo.$$.fragment,vs),vs.forEach(t),nc=h(o),Ht=n(o,"H3",{class:!0});var Wc=s(Ht);Vo=n(Wc,"A",{id:!0,class:!0,href:!0});var km=s(Vo);ri=n(km,"SPAN",{});var Am=s(ri);D(Nn.$$.fragment,Am),Am.forEach(t),km.forEach(t),_u=h(Wc),ii=n(Wc,"SPAN",{});var xm=s(ii);bu=c(xm,"ModelSearchArguments"),xm.forEach(t),Wc.forEach(t),sc=h(o),Ue=n(o,"DIV",{class:!0});var $s=s(Ue);D(jn.$$.fragment,$s),vu=h($s),ci=n($s,"P",{});var Hm=s(ci);$u=c(Hm,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Hm.forEach(t),yu=h($s),D(zo.$$.fragment,$s),$s.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify($_)),m(l,"id","hugging-face-hub-api"),m(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(l,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(pt,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Dt,"id","huggingface_hub.HfApi"),m(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Dt,"href","#huggingface_hub.HfApi"),m(gt,"class","relative group"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Gn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Jn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ma,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Ma,"rel","nofollow"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qa,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(Qa,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wo,"id","huggingface_hub.hf_api.ModelInfo"),m(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(wo,"href","#huggingface_hub.hf_api.ModelInfo"),m(ht,"class","relative group"),m(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ko,"id","huggingface_hub.hf_api.DatasetInfo"),m(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ko,"href","#huggingface_hub.hf_api.DatasetInfo"),m(ut,"class","relative group"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ao,"id","huggingface_hub.hf_api.SpaceInfo"),m(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ao,"href","#huggingface_hub.hf_api.SpaceInfo"),m(mt,"class","relative group"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","huggingface_hub.hf_api.RepoFile"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#huggingface_hub.hf_api.RepoFile"),m(_t,"class","relative group"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","huggingface_hub.CommitInfo"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#huggingface_hub.CommitInfo"),m(vt,"class","relative group"),m(Zn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","huggingface_hub.CommitOperationAdd"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#huggingface_hub.CommitOperationAdd"),m($t,"class","relative group"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","huggingface_hub.HfFolder"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#huggingface_hub.HfFolder"),m(Et,"class","relative group"),m(as,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Po,"id","filtering-helpers"),m(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Po,"href","#filtering-helpers"),m(wt,"class","relative group"),m(Ro,"id","huggingface_hub.DatasetFilter"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#huggingface_hub.DatasetFilter"),m(kt,"class","relative group"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"id","huggingface_hub.ModelFilter"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#huggingface_hub.ModelFilter"),m(At,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"id","huggingface_hub.DatasetSearchArguments"),m(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Mo,"href","#huggingface_hub.DatasetSearchArguments"),m(xt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","huggingface_hub.ModelSearchArguments"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#huggingface_hub.ModelSearchArguments"),m(Ht,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,l),e(l,d),q(r,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,R,E),$(o,_,E),e(_,F),e(_,M),e(M,W),e(_,L),$(o,K,E),$(o,G,E),e(G,A),$(o,U,E),q(S,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Be),e(ne,de),e(de,it),e(ne,Ke),e(ne,Ee),e(Ee,ct),e(ne,lt),e(ne,pt),e(pt,Vn),e(ne,oa),$(o,aa,E),q(Oe,o,E),$(o,na,E),$(o,gt,E),e(gt,Dt),e(Dt,ys),q(sa,ys,null),e(gt,Gc),e(gt,Es),e(Es,Bc),$(o,Ni,E),$(o,V,E),q(ra,V,null),e(V,Kc),e(V,we),q(ia,we,null),e(we,Jc),e(we,ws),e(ws,Qc),e(we,Xc),q(qt,we,null),e(we,Yc),q(It,we,null),e(V,Zc),e(V,ke),q(ca,ke,null),e(ke,el),e(ke,ks),e(ks,tl),e(ke,ol),q(Nt,ke,null),e(ke,al),q(jt,ke,null),e(V,nl),e(V,Ae),q(la,Ae,null),e(Ae,sl),e(Ae,As),e(As,rl),e(Ae,il),q(Ft,Ae,null),e(Ae,cl),q(Tt,Ae,null),e(V,ll),e(V,ce),q(pa,ce,null),e(ce,pl),e(ce,xs),e(xs,gl),e(ce,hl),e(ce,ga),e(ga,dl),e(ga,Hs),e(Hs,ul),e(ga,fl),e(ce,ml),e(ce,ha),e(ha,_l),e(ha,zn),e(zn,bl),e(ha,vl),e(ce,$l),e(ce,Wn),e(Wn,yl),e(Wn,Gn),e(Gn,El),e(ce,wl),q(Pt,ce,null),e(V,kl),e(V,le),q(da,le,null),e(le,Al),e(le,ua),e(ua,xl),e(ua,Ds),e(Ds,Hl),e(ua,Dl),e(le,ql),e(le,fa),e(fa,Il),e(fa,Bn),e(Bn,Nl),e(fa,jl),e(le,Fl),e(le,ma),e(ma,Tl),e(ma,qs),e(qs,Pl),e(ma,Ol),e(le,Rl),e(le,Kn),e(Kn,Ll),e(Kn,Jn),e(Jn,Sl),e(le,Cl),q(Ot,le,null),e(V,Ml),e(V,Rt),q(_a,Rt,null),e(Rt,Ul),e(Rt,Is),e(Is,Vl),e(V,zl),e(V,Lt),q(ba,Lt,null),e(Lt,Wl),e(Lt,Ns),e(Ns,Gl),e(V,Bl),e(V,xe),q(va,xe,null),e(xe,Kl),e(xe,js),e(js,Jl),e(xe,Ql),e(xe,Fs),e(Fs,Xl),e(xe,Yl),q(St,xe,null),e(V,Zl),e(V,Je),q($a,Je,null),e(Je,ep),e(Je,Ts),e(Ts,tp),e(Je,op),q(Ct,Je,null),e(V,ap),e(V,Qe),q(ya,Qe,null),e(Qe,np),e(Qe,Ps),e(Ps,sp),e(Qe,rp),e(Qe,Ea),e(Ea,ip),e(Ea,Qn),e(Qn,cp),e(Ea,lp),e(V,pp),e(V,Xe),q(wa,Xe,null),e(Xe,gp),e(Xe,Os),e(Os,hp),e(Xe,dp),q(Mt,Xe,null),e(V,up),e(V,Ut),q(ka,Ut,null),e(Ut,fp),e(Ut,Rs),e(Rs,mp),e(V,_p),e(V,Ye),q(Aa,Ye,null),e(Ye,bp),e(Ye,Ls),e(Ls,vp),e(Ye,$p),q(Vt,Ye,null),e(V,yp),e(V,zt),q(xa,zt,null),e(zt,Ep),e(zt,Ss),e(Ss,wp),e(V,kp),e(V,He),q(Ha,He,null),e(He,Ap),e(He,Cs),e(Cs,xp),e(He,Hp),e(He,Xn),e(Xn,Dp),e(Xn,Yn),e(Yn,qp),e(He,Ip),q(Wt,He,null),e(V,Np),e(V,Gt),q(Da,Gt,null),e(Gt,jp),e(Gt,Ms),e(Ms,Fp),e(V,Tp),e(V,Bt),q(qa,Bt,null),e(Bt,Pp),e(Bt,Us),e(Us,Op),e(V,Rp),e(V,_e),q(Ia,_e,null),e(_e,Lp),e(_e,Vs),e(Vs,Sp),e(_e,Cp),e(_e,zs),e(zs,Mp),e(_e,Up),q(Kt,_e,null),e(_e,Vp),q(Jt,_e,null),e(V,zp),e(V,De),q(Na,De,null),e(De,Wp),e(De,Ws),e(Ws,Gp),e(De,Bp),q(Qt,De,null),e(De,Kp),q(Xt,De,null),e(V,Jp),e(V,qe),q(ja,qe,null),e(qe,Qp),e(qe,Gs),e(Gs,Xp),e(qe,Yp),q(Yt,qe,null),e(qe,Zp),q(Zt,qe,null),e(V,eg),e(V,eo),q(Fa,eo,null),e(eo,tg),e(eo,Bs),e(Bs,og),e(V,ag),e(V,Ie),q(Ta,Ie,null),e(Ie,ng),e(Ie,Ks),e(Ks,sg),e(Ie,rg),q(to,Ie,null),e(Ie,ig),q(oo,Ie,null),e(V,cg),e(V,ao),q(Pa,ao,null),e(ao,lg),e(ao,Js),e(Js,pg),e(V,gg),e(V,no),q(Oa,no,null),e(no,hg),e(no,Qs),e(Qs,dg),e(V,ug),e(V,Ze),q(Ra,Ze,null),e(Ze,fg),e(Ze,Xs),e(Xs,mg),e(Ze,_g),q(so,Ze,null),e(V,bg),e(V,Ne),q(La,Ne,null),e(Ne,vg),e(Ne,Ys),e(Ys,$g),e(Ne,yg),e(Ne,Zs),e(Zs,Eg),e(Ne,wg),q(ro,Ne,null),e(V,kg),e(V,je),q(Sa,je,null),e(je,Ag),e(je,er),e(er,xg),e(je,Hg),e(je,Ca),e(Ca,Dg),e(Ca,Ma),e(Ma,qg),e(Ca,Ig),e(je,Ng),q(io,je,null),e(V,jg),e(V,Fe),q(Ua,Fe,null),e(Fe,Fg),e(Fe,tr),e(tr,Tg),e(Fe,Pg),q(co,Fe,null),e(Fe,Og),q(lo,Fe,null),e(V,Rg),e(V,et),q(Va,et,null),e(et,Lg),e(et,or),e(or,Sg),e(et,Cg),q(po,et,null),e(V,Mg),e(V,go),q(za,go,null),e(go,Ug),e(go,ar),e(ar,Vg),e(V,zg),e(V,Te),q(Wa,Te,null),e(Te,Wg),e(Te,nr),e(nr,Gg),e(Te,Bg),e(Te,sr),e(sr,Kg),e(Te,Jg),q(ho,Te,null),e(V,Qg),e(V,uo),q(Ga,uo,null),e(uo,Xg),e(uo,rr),e(rr,Yg),e(V,Zg),e(V,tt),q(Ba,tt,null),e(tt,eh),e(tt,ir),e(ir,th),e(tt,oh),q(fo,tt,null),e(V,ah),e(V,be),q(Ka,be,null),e(be,nh),e(be,cr),e(cr,sh),e(be,rh),q(mo,be,null),e(be,ih),q(_o,be,null),e(be,ch),q(bo,be,null),e(V,lh),e(V,re),q(Ja,re,null),e(re,ph),e(re,lr),e(lr,gh),e(re,hh),e(re,pr),e(pr,dh),e(re,uh),e(re,ue),e(ue,fh),e(ue,gr),e(gr,mh),e(ue,_h),e(ue,hr),e(hr,bh),e(ue,vh),e(ue,Qa),e(Qa,$h),e(ue,yh),e(ue,dr),e(dr,Eh),e(ue,wh),e(ue,ur),e(ur,kh),e(ue,Ah),e(re,xh),e(re,Xa),e(Xa,Hh),e(Xa,fr),e(fr,Dh),e(Xa,qh),e(re,Ih),q(vo,re,null),e(re,Nh),q($o,re,null),e(re,jh),q(yo,re,null),e(V,Fh),e(V,Eo),q(Ya,Eo,null),e(Eo,Th),e(Eo,mr),e(mr,Ph),$(o,ji,E),$(o,ht,E),e(ht,wo),e(wo,_r),q(Za,_r,null),e(ht,Oh),e(ht,br),e(br,Rh),$(o,Fi,E),$(o,dt,E),q(en,dt,null),e(dt,Lh),e(dt,vr),e(vr,Sh),$(o,Ti,E),$(o,ut,E),e(ut,ko),e(ko,$r),q(tn,$r,null),e(ut,Ch),e(ut,yr),e(yr,Mh),$(o,Pi,E),$(o,ft,E),q(on,ft,null),e(ft,Uh),e(ft,Er),e(Er,Vh),$(o,Oi,E),$(o,mt,E),e(mt,Ao),e(Ao,wr),q(an,wr,null),e(mt,zh),e(mt,kr),e(kr,Wh),$(o,Ri,E),$(o,Re,E),q(nn,Re,null),e(Re,Gh),e(Re,Ar),e(Ar,Bh),e(Re,Kh),e(Re,xr),e(xr,Jh),$(o,Li,E),$(o,_t,E),e(_t,xo),e(xo,Hr),q(sn,Hr,null),e(_t,Qh),e(_t,Dr),e(Dr,Xh),$(o,Si,E),$(o,bt,E),q(rn,bt,null),e(bt,Yh),e(bt,qr),e(qr,Zh),$(o,Ci,E),$(o,vt,E),e(vt,Ho),e(Ho,Ir),q(cn,Ir,null),e(vt,ed),e(vt,Nr),e(Nr,td),$(o,Mi,E),$(o,Le,E),q(ln,Le,null),e(Le,od),e(Le,jr),e(jr,ad),e(Le,nd),e(Le,pn),e(pn,sd),e(pn,Zn),e(Zn,rd),e(pn,id),$(o,Ui,E),$(o,$t,E),e($t,Do),e(Do,Fr),q(gn,Fr,null),e($t,cd),e($t,es),e(es,Tr),e(Tr,ld),e(es,pd),$(o,Vi,E),$(o,qo,E),e(qo,gd),e(qo,Pr),e(Pr,hd),e(qo,dd),$(o,zi,E),$(o,$e,E),q(hn,$e,null),e($e,ud),e($e,Or),e(Or,fd),e($e,md),e($e,ot),q(dn,ot,null),e(ot,_d),e(ot,un),e(un,bd),e(un,Rr),e(Rr,vd),e(un,$d),e(ot,yd),q(Io,ot,null),e($e,Ed),e($e,at),q(fn,at,null),e(at,wd),e(at,ts),e(ts,kd),e(ts,Lr),e(Lr,Ad),e(at,xd),e(at,os),e(os,Hd),e(os,Sr),e(Sr,Dd),$(o,Wi,E),$(o,yt,E),q(mn,yt,null),e(yt,qd),e(yt,Cr),e(Cr,Id),$(o,Gi,E),$(o,Et,E),e(Et,No),e(No,Mr),q(_n,Mr,null),e(Et,Nd),e(Et,Ur),e(Ur,jd),$(o,Bi,E),$(o,bn,E),e(bn,Vr),e(Vr,Fd),e(bn,Td),$(o,Ki,E),$(o,jo,E),e(jo,Pd),e(jo,as),e(as,Od),e(jo,Rd),$(o,Ji,E),$(o,ye,E),q(vn,ye,null),e(ye,Ld),e(ye,Fo),q($n,Fo,null),e(Fo,Sd),e(Fo,zr),e(zr,Cd),e(ye,Md),e(ye,nt),q(yn,nt,null),e(nt,Ud),e(nt,Wr),e(Wr,Vd),e(nt,zd),e(nt,En),e(En,Wd),e(En,Gr),e(Gr,Gd),e(En,Bd),e(ye,Kd),e(ye,To),q(wn,To,null),e(To,Jd),e(To,Br),e(Br,Qd),$(o,Qi,E),$(o,wt,E),e(wt,Po),e(Po,Kr),q(kn,Kr,null),e(wt,Xd),e(wt,Jr),e(Jr,Yd),$(o,Xi,E),$(o,Oo,E),e(Oo,Zd),e(Oo,Qr),e(Qr,eu),e(Oo,tu),$(o,Yi,E),$(o,kt,E),e(kt,Ro),e(Ro,Xr),q(An,Xr,null),e(kt,ou),e(kt,Yr),e(Yr,au),$(o,Zi,E),$(o,Se,E),q(xn,Se,null),e(Se,nu),e(Se,Zr),e(Zr,su),e(Se,ru),q(Lo,Se,null),$(o,ec,E),$(o,At,E),e(At,So),e(So,ei),q(Hn,ei,null),e(At,iu),e(At,ti),e(ti,cu),$(o,tc,E),$(o,Ce,E),q(Dn,Ce,null),e(Ce,lu),e(Ce,oi),e(oi,pu),e(Ce,gu),q(Co,Ce,null),$(o,oc,E),$(o,xt,E),e(xt,Mo),e(Mo,ai),q(qn,ai,null),e(xt,hu),e(xt,ni),e(ni,du),$(o,ac,E),$(o,Me,E),q(In,Me,null),e(Me,uu),e(Me,si),e(si,fu),e(Me,mu),q(Uo,Me,null),$(o,nc,E),$(o,Ht,E),e(Ht,Vo),e(Vo,ri),q(Nn,ri,null),e(Ht,_u),e(Ht,ii),e(ii,bu),$(o,sc,E),$(o,Ue,E),q(jn,Ue,null),e(Ue,vu),e(Ue,ci),e(ci,$u),e(Ue,yu),q(zo,Ue,null),rc=!0},p(o,[E]){const Fn={};E&2&&(Fn.$$scope={dirty:E,ctx:o}),qt.$set(Fn);const li={};E&2&&(li.$$scope={dirty:E,ctx:o}),It.$set(li);const pi={};E&2&&(pi.$$scope={dirty:E,ctx:o}),Nt.$set(pi);const gi={};E&2&&(gi.$$scope={dirty:E,ctx:o}),jt.$set(gi);const Tn={};E&2&&(Tn.$$scope={dirty:E,ctx:o}),Ft.$set(Tn);const hi={};E&2&&(hi.$$scope={dirty:E,ctx:o}),Tt.$set(hi);const Pn={};E&2&&(Pn.$$scope={dirty:E,ctx:o}),Pt.$set(Pn);const di={};E&2&&(di.$$scope={dirty:E,ctx:o}),Ot.$set(di);const ui={};E&2&&(ui.$$scope={dirty:E,ctx:o}),St.$set(ui);const On={};E&2&&(On.$$scope={dirty:E,ctx:o}),Ct.$set(On);const fi={};E&2&&(fi.$$scope={dirty:E,ctx:o}),Mt.$set(fi);const Ve={};E&2&&(Ve.$$scope={dirty:E,ctx:o}),Vt.$set(Ve);const mi={};E&2&&(mi.$$scope={dirty:E,ctx:o}),Wt.$set(mi);const _i={};E&2&&(_i.$$scope={dirty:E,ctx:o}),Kt.$set(_i);const bi={};E&2&&(bi.$$scope={dirty:E,ctx:o}),Jt.$set(bi);const Rn={};E&2&&(Rn.$$scope={dirty:E,ctx:o}),Qt.$set(Rn);const vi={};E&2&&(vi.$$scope={dirty:E,ctx:o}),Xt.$set(vi);const $i={};E&2&&($i.$$scope={dirty:E,ctx:o}),Yt.$set($i);const yi={};E&2&&(yi.$$scope={dirty:E,ctx:o}),Zt.$set(yi);const z={};E&2&&(z.$$scope={dirty:E,ctx:o}),to.$set(z);const ze={};E&2&&(ze.$$scope={dirty:E,ctx:o}),oo.$set(ze);const Ei={};E&2&&(Ei.$$scope={dirty:E,ctx:o}),so.$set(Ei);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),ro.$set(We);const wi={};E&2&&(wi.$$scope={dirty:E,ctx:o}),io.$set(wi);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),co.$set(Ge);const ki={};E&2&&(ki.$$scope={dirty:E,ctx:o}),lo.$set(ki);const fe={};E&2&&(fe.$$scope={dirty:E,ctx:o}),po.$set(fe);const Ai={};E&2&&(Ai.$$scope={dirty:E,ctx:o}),ho.$set(Ai);const Ln={};E&2&&(Ln.$$scope={dirty:E,ctx:o}),fo.$set(Ln);const xi={};E&2&&(xi.$$scope={dirty:E,ctx:o}),mo.$set(xi);const Sn={};E&2&&(Sn.$$scope={dirty:E,ctx:o}),_o.$set(Sn);const Hi={};E&2&&(Hi.$$scope={dirty:E,ctx:o}),bo.$set(Hi);const ns={};E&2&&(ns.$$scope={dirty:E,ctx:o}),vo.$set(ns);const Di={};E&2&&(Di.$$scope={dirty:E,ctx:o}),$o.$set(Di);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),yo.$set(me);const Cn={};E&2&&(Cn.$$scope={dirty:E,ctx:o}),Io.$set(Cn);const qi={};E&2&&(qi.$$scope={dirty:E,ctx:o}),Lo.$set(qi);const Mn={};E&2&&(Mn.$$scope={dirty:E,ctx:o}),Co.$set(Mn);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),Uo.$set(Ii);const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),zo.$set(Un)},i(o){rc||(I(r.$$.fragment,o),I(S.$$.fragment,o),I(X.$$.fragment,o),I(Oe.$$.fragment,o),I(sa.$$.fragment,o),I(ra.$$.fragment,o),I(ia.$$.fragment,o),I(qt.$$.fragment,o),I(It.$$.fragment,o),I(ca.$$.fragment,o),I(Nt.$$.fragment,o),I(jt.$$.fragment,o),I(la.$$.fragment,o),I(Ft.$$.fragment,o),I(Tt.$$.fragment,o),I(pa.$$.fragment,o),I(Pt.$$.fragment,o),I(da.$$.fragment,o),I(Ot.$$.fragment,o),I(_a.$$.fragment,o),I(ba.$$.fragment,o),I(va.$$.fragment,o),I(St.$$.fragment,o),I($a.$$.fragment,o),I(Ct.$$.fragment,o),I(ya.$$.fragment,o),I(wa.$$.fragment,o),I(Mt.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(Vt.$$.fragment,o),I(xa.$$.fragment,o),I(Ha.$$.fragment,o),I(Wt.$$.fragment,o),I(Da.$$.fragment,o),I(qa.$$.fragment,o),I(Ia.$$.fragment,o),I(Kt.$$.fragment,o),I(Jt.$$.fragment,o),I(Na.$$.fragment,o),I(Qt.$$.fragment,o),I(Xt.$$.fragment,o),I(ja.$$.fragment,o),I(Yt.$$.fragment,o),I(Zt.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(to.$$.fragment,o),I(oo.$$.fragment,o),I(Pa.$$.fragment,o),I(Oa.$$.fragment,o),I(Ra.$$.fragment,o),I(so.$$.fragment,o),I(La.$$.fragment,o),I(ro.$$.fragment,o),I(Sa.$$.fragment,o),I(io.$$.fragment,o),I(Ua.$$.fragment,o),I(co.$$.fragment,o),I(lo.$$.fragment,o),I(Va.$$.fragment,o),I(po.$$.fragment,o),I(za.$$.fragment,o),I(Wa.$$.fragment,o),I(ho.$$.fragment,o),I(Ga.$$.fragment,o),I(Ba.$$.fragment,o),I(fo.$$.fragment,o),I(Ka.$$.fragment,o),I(mo.$$.fragment,o),I(_o.$$.fragment,o),I(bo.$$.fragment,o),I(Ja.$$.fragment,o),I(vo.$$.fragment,o),I($o.$$.fragment,o),I(yo.$$.fragment,o),I(Ya.$$.fragment,o),I(Za.$$.fragment,o),I(en.$$.fragment,o),I(tn.$$.fragment,o),I(on.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(rn.$$.fragment,o),I(cn.$$.fragment,o),I(ln.$$.fragment,o),I(gn.$$.fragment,o),I(hn.$$.fragment,o),I(dn.$$.fragment,o),I(Io.$$.fragment,o),I(fn.$$.fragment,o),I(mn.$$.fragment,o),I(_n.$$.fragment,o),I(vn.$$.fragment,o),I($n.$$.fragment,o),I(yn.$$.fragment,o),I(wn.$$.fragment,o),I(kn.$$.fragment,o),I(An.$$.fragment,o),I(xn.$$.fragment,o),I(Lo.$$.fragment,o),I(Hn.$$.fragment,o),I(Dn.$$.fragment,o),I(Co.$$.fragment,o),I(qn.$$.fragment,o),I(In.$$.fragment,o),I(Uo.$$.fragment,o),I(Nn.$$.fragment,o),I(jn.$$.fragment,o),I(zo.$$.fragment,o),rc=!0)},o(o){N(r.$$.fragment,o),N(S.$$.fragment,o),N(X.$$.fragment,o),N(Oe.$$.fragment,o),N(sa.$$.fragment,o),N(ra.$$.fragment,o),N(ia.$$.fragment,o),N(qt.$$.fragment,o),N(It.$$.fragment,o),N(ca.$$.fragment,o),N(Nt.$$.fragment,o),N(jt.$$.fragment,o),N(la.$$.fragment,o),N(Ft.$$.fragment,o),N(Tt.$$.fragment,o),N(pa.$$.fragment,o),N(Pt.$$.fragment,o),N(da.$$.fragment,o),N(Ot.$$.fragment,o),N(_a.$$.fragment,o),N(ba.$$.fragment,o),N(va.$$.fragment,o),N(St.$$.fragment,o),N($a.$$.fragment,o),N(Ct.$$.fragment,o),N(ya.$$.fragment,o),N(wa.$$.fragment,o),N(Mt.$$.fragment,o),N(ka.$$.fragment,o),N(Aa.$$.fragment,o),N(Vt.$$.fragment,o),N(xa.$$.fragment,o),N(Ha.$$.fragment,o),N(Wt.$$.fragment,o),N(Da.$$.fragment,o),N(qa.$$.fragment,o),N(Ia.$$.fragment,o),N(Kt.$$.fragment,o),N(Jt.$$.fragment,o),N(Na.$$.fragment,o),N(Qt.$$.fragment,o),N(Xt.$$.fragment,o),N(ja.$$.fragment,o),N(Yt.$$.fragment,o),N(Zt.$$.fragment,o),N(Fa.$$.fragment,o),N(Ta.$$.fragment,o),N(to.$$.fragment,o),N(oo.$$.fragment,o),N(Pa.$$.fragment,o),N(Oa.$$.fragment,o),N(Ra.$$.fragment,o),N(so.$$.fragment,o),N(La.$$.fragment,o),N(ro.$$.fragment,o),N(Sa.$$.fragment,o),N(io.$$.fragment,o),N(Ua.$$.fragment,o),N(co.$$.fragment,o),N(lo.$$.fragment,o),N(Va.$$.fragment,o),N(po.$$.fragment,o),N(za.$$.fragment,o),N(Wa.$$.fragment,o),N(ho.$$.fragment,o),N(Ga.$$.fragment,o),N(Ba.$$.fragment,o),N(fo.$$.fragment,o),N(Ka.$$.fragment,o),N(mo.$$.fragment,o),N(_o.$$.fragment,o),N(bo.$$.fragment,o),N(Ja.$$.fragment,o),N(vo.$$.fragment,o),N($o.$$.fragment,o),N(yo.$$.fragment,o),N(Ya.$$.fragment,o),N(Za.$$.fragment,o),N(en.$$.fragment,o),N(tn.$$.fragment,o),N(on.$$.fragment,o),N(an.$$.fragment,o),N(nn.$$.fragment,o),N(sn.$$.fragment,o),N(rn.$$.fragment,o),N(cn.$$.fragment,o),N(ln.$$.fragment,o),N(gn.$$.fragment,o),N(hn.$$.fragment,o),N(dn.$$.fragment,o),N(Io.$$.fragment,o),N(fn.$$.fragment,o),N(mn.$$.fragment,o),N(_n.$$.fragment,o),N(vn.$$.fragment,o),N($n.$$.fragment,o),N(yn.$$.fragment,o),N(wn.$$.fragment,o),N(kn.$$.fragment,o),N(An.$$.fragment,o),N(xn.$$.fragment,o),N(Lo.$$.fragment,o),N(Hn.$$.fragment,o),N(Dn.$$.fragment,o),N(Co.$$.fragment,o),N(qn.$$.fragment,o),N(In.$$.fragment,o),N(Uo.$$.fragment,o),N(Nn.$$.fragment,o),N(jn.$$.fragment,o),N(zo.$$.fragment,o),rc=!1},d(o){t(p),o&&t(b),o&&t(f),j(r),o&&t(x),o&&t(w),o&&t(R),o&&t(_),o&&t(K),o&&t(G),o&&t(U),j(S,o),o&&t(Y),o&&t(te),o&&t(B),j(X,o),o&&t(oe),o&&t(ne),o&&t(aa),j(Oe,o),o&&t(na),o&&t(gt),j(sa),o&&t(Ni),o&&t(V),j(ra),j(ia),j(qt),j(It),j(ca),j(Nt),j(jt),j(la),j(Ft),j(Tt),j(pa),j(Pt),j(da),j(Ot),j(_a),j(ba),j(va),j(St),j($a),j(Ct),j(ya),j(wa),j(Mt),j(ka),j(Aa),j(Vt),j(xa),j(Ha),j(Wt),j(Da),j(qa),j(Ia),j(Kt),j(Jt),j(Na),j(Qt),j(Xt),j(ja),j(Yt),j(Zt),j(Fa),j(Ta),j(to),j(oo),j(Pa),j(Oa),j(Ra),j(so),j(La),j(ro),j(Sa),j(io),j(Ua),j(co),j(lo),j(Va),j(po),j(za),j(Wa),j(ho),j(Ga),j(Ba),j(fo),j(Ka),j(mo),j(_o),j(bo),j(Ja),j(vo),j($o),j(yo),j(Ya),o&&t(ji),o&&t(ht),j(Za),o&&t(Fi),o&&t(dt),j(en),o&&t(Ti),o&&t(ut),j(tn),o&&t(Pi),o&&t(ft),j(on),o&&t(Oi),o&&t(mt),j(an),o&&t(Ri),o&&t(Re),j(nn),o&&t(Li),o&&t(_t),j(sn),o&&t(Si),o&&t(bt),j(rn),o&&t(Ci),o&&t(vt),j(cn),o&&t(Mi),o&&t(Le),j(ln),o&&t(Ui),o&&t($t),j(gn),o&&t(Vi),o&&t(qo),o&&t(zi),o&&t($e),j(hn),j(dn),j(Io),j(fn),o&&t(Wi),o&&t(yt),j(mn),o&&t(Gi),o&&t(Et),j(_n),o&&t(Bi),o&&t(bn),o&&t(Ki),o&&t(jo),o&&t(Ji),o&&t(ye),j(vn),j($n),j(yn),j(wn),o&&t(Qi),o&&t(wt),j(kn),o&&t(Xi),o&&t(Oo),o&&t(Yi),o&&t(kt),j(An),o&&t(Zi),o&&t(Se),j(xn),j(Lo),o&&t(ec),o&&t(At),j(Hn),o&&t(tc),o&&t(Ce),j(Dn),j(Co),o&&t(oc),o&&t(xt),j(qn),o&&t(ac),o&&t(Me),j(In),j(Uo),o&&t(nc),o&&t(Ht),j(Nn),o&&t(sc),o&&t(Ue),j(jn),j(zo)}}}const $_={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function y_(C){return jm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class D_ extends Dm{constructor(p){super();qm(this,p,y_,v_,Im,{})}}export{D_ as default,$_ as metadata};
