import{S as Km,i as Jm,s as Qm,e as a,k as g,w as x,t as i,M as Xm,c as n,d as t,m as h,a as r,x as H,h as c,b as m,G as e,g as $,y as D,q,o as I,B as N,v as Ym,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as re}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Zm(M){let p,b,f,l,d;return l=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Examples:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function e_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function t_(M){let p,b,f,l,d;return l=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Examples:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function o_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function a_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k;return{c(){p=a("p"),b=a("code"),f=i("create_commit"),l=i(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),s=i("repo_id"),u=i(` and
`),P=a("code"),v=i("repo_type"),j=i(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=i("create_repo()"),k=i("."),this.h()},l(O){p=n(O,"P",{});var T=r(p);b=n(T,"CODE",{});var R=r(b);f=c(R,"create_commit"),R.forEach(t),l=c(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=r(d);s=c(_,"repo_id"),_.forEach(t),u=c(T,` and
`),P=n(T,"CODE",{});var F=r(P);v=c(F,"repo_type"),F.forEach(t),j=c(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var U=r(w);y=c(U,"create_repo()"),U.forEach(t),k=c(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,l),e(p,d),e(d,s),e(p,u),e(p,P),e(P,v),e(p,j),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function n_(M){let p,b,f,l;return{c(){p=a("p"),b=a("code"),f=i("create_commit"),l=i(" is limited to 25k LFS files and a 1GB payload for regular files.")},l(d){p=n(d,"P",{});var s=r(p);b=n(s,"CODE",{});var u=r(b);f=c(u,"create_commit"),u.forEach(t),l=c(s," is limited to 25k LFS files and a 1GB payload for regular files."),s.forEach(t)},m(d,s){$(d,p,s),e(p,b),e(b,f),e(p,l)},d(d){d&&t(p)}}}function r_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function s_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function i_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=r(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var U=r(l);d=n(U,"LI",{});var W=r(d);s=n(W,"A",{href:!0});var L=r(s);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=r(v);j=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(U),k=n(U,"LI",{});var G=r(k);O=n(G,"A",{href:!0});var A=r(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),U.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function c_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G,A,V,S,Y,te,Z,Q,ee,ae,B;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),A=g(),V=a("li"),S=a("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),Z=g(),Q=a("li"),ee=a("a"),ae=i("EntryNotFoundError"),B=i(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=r(p);b=c(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),l=n(X,"UL",{});var ne=r(l);d=n(ne,"LI",{});var Be=r(d);s=n(Be,"A",{href:!0,rel:!0});var de=r(s);u=n(de,"CODE",{});var it=r(u);P=c(it,"HTTPError"),it.forEach(t),de.forEach(t),v=c(Be,`
if the HuggingFace API returned an error`),Be.forEach(t),j=h(ne),w=n(ne,"LI",{});var Ke=r(w);y=n(Ke,"A",{href:!0,rel:!0});var Ee=r(y);k=n(Ee,"CODE",{});var ct=r(k);O=c(ct,"ValueError"),ct.forEach(t),Ee.forEach(t),T=c(Ke,`
if some parameter value is invalid`),Ke.forEach(t),R=h(ne),_=n(ne,"LI",{});var lt=r(_);F=n(lt,"A",{href:!0});var pt=r(F);U=c(pt,"RepositoryNotFoundError"),pt.forEach(t),W=c(lt,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(lt,"CODE",{});var Kn=r(L);K=c(Kn,"private"),Kn.forEach(t),G=c(lt," and you do not have access."),lt.forEach(t),A=h(ne),V=n(ne,"LI",{});var na=r(V);S=n(na,"A",{href:!0});var ra=r(S);Y=c(ra,"RevisionNotFoundError"),ra.forEach(t),te=c(na,`
If the revision to download from cannot be found.`),na.forEach(t),Z=h(ne),Q=n(ne,"LI",{});var Oe=r(Q);ee=n(Oe,"A",{href:!0});var sa=r(ee);ae=c(sa,"EntryNotFoundError"),sa.forEach(t),B=c(Oe,`
If the file to download cannot be found.`),Oe.forEach(t),ne.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,l,oe),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G),e(l,A),e(l,V),e(V,S),e(S,Y),e(V,te),e(l,Z),e(l,Q),e(Q,ee),e(ee,ae),e(Q,B)},d(X){X&&t(p),X&&t(f),X&&t(l)}}}function l_(M){let p,b,f,l,d,s,u,P,v,j,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=r(p);b=c(k,"Raises the following errors:"),k.forEach(t),f=h(y),l=n(y,"UL",{});var O=r(l);d=n(O,"LI",{});var T=r(d);s=n(T,"A",{href:!0});var R=r(s);u=c(R,"RepositoryNotFoundError"),R.forEach(t),P=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=r(v);j=c(_,"private"),_.forEach(t),w=c(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,l,k),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(l)}}}function p_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function g_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function h_(M){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=i("Collecting all discussions of a repo in a list:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function d_(M){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=i("Iterating over discussions of a repo:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function u_(M){let p;return{c(){p=i("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=c(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function f_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function m_(M){let p,b,f,l,d,s,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("filter"),d=i(" argument:"),s=g(),x(u.$$.fragment)},l(v){p=n(v,"P",{});var j=r(p);b=c(j,"Example usage with the "),f=n(j,"CODE",{});var w=r(f);l=c(w,"filter"),w.forEach(t),d=c(j," argument:"),j.forEach(t),s=h(v),H(u.$$.fragment,v)},m(v,j){$(v,p,j),e(p,b),e(p,f),e(f,l),e(p,d),$(v,s,j),D(u,v,j),P=!0},p:he,i(v){P||(q(u.$$.fragment,v),P=!0)},o(v){I(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(s),N(u,v)}}}function __(M){let p,b,f,l,d,s,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("search"),d=i(" argument:"),s=g(),x(u.$$.fragment)},l(v){p=n(v,"P",{});var j=r(p);b=c(j,"Example usage with the "),f=n(j,"CODE",{});var w=r(f);l=c(w,"search"),w.forEach(t),d=c(j," argument:"),j.forEach(t),s=h(v),H(u.$$.fragment,v)},m(v,j){$(v,p,j),e(p,b),e(p,f),e(f,l),e(p,d),$(v,s,j),D(u,v,j),P=!0},p:he,i(v){P||(q(u.$$.fragment,v),P=!0)},o(v){I(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(s),N(u,v)}}}function b_(M){let p,b,f,l,d,s,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("filter"),d=i(" argument:"),s=g(),x(u.$$.fragment)},l(v){p=n(v,"P",{});var j=r(p);b=c(j,"Example usage with the "),f=n(j,"CODE",{});var w=r(f);l=c(w,"filter"),w.forEach(t),d=c(j," argument:"),j.forEach(t),s=h(v),H(u.$$.fragment,v)},m(v,j){$(v,p,j),e(p,b),e(p,f),e(f,l),e(p,d),$(v,s,j),D(u,v,j),P=!0},p:he,i(v){P||(q(u.$$.fragment,v),P=!0)},o(v){I(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(s),N(u,v)}}}function v_(M){let p,b,f,l,d,s,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),l=i("search"),d=i(" argument:"),s=g(),x(u.$$.fragment)},l(v){p=n(v,"P",{});var j=r(p);b=c(j,"Example usage with the "),f=n(j,"CODE",{});var w=r(f);l=c(w,"search"),w.forEach(t),d=c(j," argument:"),j.forEach(t),s=h(v),H(u.$$.fragment,v)},m(v,j){$(v,p,j),e(p,b),e(p,f),e(f,l),e(p,d),$(v,s,j),D(u,v,j),P=!0},p:he,i(v){P||(q(u.$$.fragment,v),P=!0)},o(v){I(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(s),N(u,v)}}}function $_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function y_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=r(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var U=r(l);d=n(U,"LI",{});var W=r(d);s=n(W,"A",{href:!0});var L=r(s);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=r(v);j=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(U),k=n(U,"LI",{});var G=r(k);O=n(G,"A",{href:!0});var A=r(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),U.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function E_(M){let p,b,f,l,d,s,u,P,v,j,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=r(p);b=c(k,"Raises the following errors:"),k.forEach(t),f=h(y),l=n(y,"UL",{});var O=r(l);d=n(O,"LI",{});var T=r(d);s=n(T,"A",{href:!0});var R=r(s);u=c(R,"RepositoryNotFoundError"),R.forEach(t),P=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=r(v);j=c(_,"private"),_.forEach(t),w=c(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,l,k),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(l)}}}function w_(M){let p,b,f,l,d;return l=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Examples:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function k_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var V=r(p);b=c(V,"Raises the following errors:"),V.forEach(t),f=h(A),l=n(A,"UL",{});var S=r(l);d=n(S,"LI",{});var Y=r(d);s=n(Y,"A",{href:!0,rel:!0});var te=r(s);u=n(te,"CODE",{});var Z=r(u);P=c(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=c(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),j=h(S),w=n(S,"LI",{});var Q=r(w);y=n(Q,"A",{href:!0,rel:!0});var ee=r(y);k=n(ee,"CODE",{});var ae=r(k);O=c(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=c(Q,`
if some parameter value is invalid`),Q.forEach(t),R=h(S),_=n(S,"LI",{});var B=r(_);F=n(B,"A",{href:!0});var X=r(F);U=c(X,"RepositoryNotFoundError"),X.forEach(t),W=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(B,"CODE",{});var oe=r(L);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,V){$(A,p,V),e(p,b),$(A,f,V),$(A,l,V),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(l)}}}function A_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=r(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var U=r(l);d=n(U,"LI",{});var W=r(d);s=n(W,"A",{href:!0});var L=r(s);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=r(v);j=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(U),k=n(U,"LI",{});var G=r(k);O=n(G,"A",{href:!0});var A=r(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),U.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function x_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=i("RevisionNotFoundError"),R=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=r(p);b=c(F,"Raises the following errors:"),F.forEach(t),f=h(_),l=n(_,"UL",{});var U=r(l);d=n(U,"LI",{});var W=r(d);s=n(W,"A",{href:!0});var L=r(s);u=c(L,"RepositoryNotFoundError"),L.forEach(t),P=c(W,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(W,"CODE",{});var K=r(v);j=c(K,"private"),K.forEach(t),w=c(W," and you do not have access."),W.forEach(t),y=h(U),k=n(U,"LI",{});var G=r(k);O=n(G,"A",{href:!0});var A=r(O);T=c(A,"RevisionNotFoundError"),A.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),U.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,l,F),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w),e(l,y),e(l,k),e(k,O),e(O,T),e(k,R)},d(_){_&&t(p),_&&t(f),_&&t(l)}}}function H_(M){let p,b,f,l,d,s,u,P,v,j,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=i("RepositoryNotFoundError"),P=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),j=i("private"),w=i(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=r(p);b=c(k,"Raises the following errors:"),k.forEach(t),f=h(y),l=n(y,"UL",{});var O=r(l);d=n(O,"LI",{});var T=r(d);s=n(T,"A",{href:!0});var R=r(s);u=c(R,"RepositoryNotFoundError"),R.forEach(t),P=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=r(v);j=c(_,"private"),_.forEach(t),w=c(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(s,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,l,k),e(l,d),e(d,s),e(s,u),e(d,P),e(d,v),e(v,j),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(l)}}}function D_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G,A,V,S,Y,te;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),R=g(),_=a("li"),F=a("a"),U=i("RepositoryNotFoundError"),W=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=a("code"),K=i("private"),G=i(" and you do not have access."),A=g(),V=a("li"),S=a("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var Q=r(p);b=c(Q,"Raises the following errors:"),Q.forEach(t),f=h(Z),l=n(Z,"UL",{});var ee=r(l);d=n(ee,"LI",{});var ae=r(d);s=n(ae,"A",{href:!0,rel:!0});var B=r(s);u=n(B,"CODE",{});var X=r(u);P=c(X,"HTTPError"),X.forEach(t),B.forEach(t),v=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),j=h(ee),w=n(ee,"LI",{});var oe=r(w);y=n(oe,"A",{href:!0,rel:!0});var ne=r(y);k=n(ne,"CODE",{});var Be=r(k);O=c(Be,"ValueError"),Be.forEach(t),ne.forEach(t),T=c(oe,`
if some parameter value is invalid`),oe.forEach(t),R=h(ee),_=n(ee,"LI",{});var de=r(_);F=n(de,"A",{href:!0});var it=r(F);U=c(it,"RepositoryNotFoundError"),it.forEach(t),W=c(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),L=n(de,"CODE",{});var Ke=r(L);K=c(Ke,"private"),Ke.forEach(t),G=c(de," and you do not have access."),de.forEach(t),A=h(ee),V=n(ee,"LI",{});var Ee=r(V);S=n(Ee,"A",{href:!0});var ct=r(S);Y=c(ct,"RevisionNotFoundError"),ct.forEach(t),te=c(Ee,`
If the revision to download from cannot be found.`),Ee.forEach(t),ee.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,Q){$(Z,p,Q),e(p,b),$(Z,f,Q),$(Z,l,Q),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T),e(l,R),e(l,_),e(_,F),e(F,U),e(_,W),e(_,L),e(L,K),e(_,G),e(l,A),e(l,V),e(V,S),e(S,Y),e(V,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(l)}}}function q_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k;return{c(){p=a("p"),b=a("code"),f=i("upload_file"),l=i(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),s=i("repo_id"),u=i(` and
`),P=a("code"),v=i("repo_type"),j=i(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=i("create_repo()"),k=i("."),this.h()},l(O){p=n(O,"P",{});var T=r(p);b=n(T,"CODE",{});var R=r(b);f=c(R,"upload_file"),R.forEach(t),l=c(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=r(d);s=c(_,"repo_id"),_.forEach(t),u=c(T,` and
`),P=n(T,"CODE",{});var F=r(P);v=c(F,"repo_type"),F.forEach(t),j=c(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var U=r(w);y=c(U,"create_repo()"),U.forEach(t),k=c(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,l),e(p,d),e(d,s),e(p,u),e(p,P),e(P,v),e(p,j),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function I_(M){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=i("Example:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Example:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function N_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),l=a("ul"),d=a("li"),s=a("a"),u=a("code"),P=i("HTTPError"),v=i(`
if the HuggingFace API returned an error`),j=g(),w=a("li"),y=a("a"),k=a("code"),O=i("ValueError"),T=i(`
if some parameter value is invalid`),this.h()},l(R){p=n(R,"P",{});var _=r(p);b=c(_,"Raises the following errors:"),_.forEach(t),f=h(R),l=n(R,"UL",{});var F=r(l);d=n(F,"LI",{});var U=r(d);s=n(U,"A",{href:!0,rel:!0});var W=r(s);u=n(W,"CODE",{});var L=r(u);P=c(L,"HTTPError"),L.forEach(t),W.forEach(t),v=c(U,`
if the HuggingFace API returned an error`),U.forEach(t),j=h(F),w=n(F,"LI",{});var K=r(w);y=n(K,"A",{href:!0,rel:!0});var G=r(y);k=n(G,"CODE",{});var A=r(k);O=c(A,"ValueError"),A.forEach(t),G.forEach(t),T=c(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(s,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(s,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(R,_){$(R,p,_),e(p,b),$(R,f,_),$(R,l,_),e(l,d),e(d,s),e(s,u),e(u,P),e(d,v),e(l,j),e(l,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(R){R&&t(p),R&&t(f),R&&t(l)}}}function j_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k;return{c(){p=a("p"),b=a("code"),f=i("upload_folder"),l=i(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),s=i("repo_id"),u=i(` and
`),P=a("code"),v=i("repo_type"),j=i(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=i("create_repo()"),k=i("."),this.h()},l(O){p=n(O,"P",{});var T=r(p);b=n(T,"CODE",{});var R=r(b);f=c(R,"upload_folder"),R.forEach(t),l=c(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=r(d);s=c(_,"repo_id"),_.forEach(t),u=c(T,` and
`),P=n(T,"CODE",{});var F=r(P);v=c(F,"repo_type"),F.forEach(t),j=c(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var U=r(w);y=c(U,"create_repo()"),U.forEach(t),k=c(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,l),e(p,d),e(d,s),e(p,u),e(p,P),e(P,v),e(p,j),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function F_(M){let p,b,f,l,d;return l=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=i("Example:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Example:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function T_(M){let p,b,f,l,d;return l=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=i("Example:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Example:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function P_(M){let p,b,f,l,d;return l=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Examples:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function O_(M){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){x(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,l){D(p,f,l),b=!0},p:he,i(f){b||(q(p.$$.fragment,f),b=!0)},o(f){I(p.$$.fragment,f),b=!1},d(f){N(p,f)}}}function R_(M){let p,b,f,l,d;return l=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Example:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function L_(M){let p,b,f,l,d;return l=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),x(l.$$.fragment)},l(s){p=n(s,"P",{});var u=r(p);b=c(u,"Example:"),u.forEach(t),f=h(s),H(l.$$.fragment,s)},m(s,u){$(s,p,u),e(p,b),$(s,f,u),D(l,s,u),d=!0},p:he,i(s){d||(q(l.$$.fragment,s),d=!0)},o(s){I(l.$$.fragment,s),d=!1},d(s){s&&t(p),s&&t(f),N(l,s)}}}function S_(M){let p,b,f,l,d,s,u,P,v,j,w,y,k,O,T,R,_,F,U,W,L,K,G,A,V,S,Y,te,Z,Q,ee,ae,B,X,oe,ne,Be,de,it,Ke,Ee,ct,lt,pt,Kn,na,ra,Oe,sa,gt,Dt,xr,ia,ol,Hr,al,Li,C,ca,nl,we,la,rl,Dr,sl,il,qt,cl,It,ll,ke,pa,pl,qr,gl,hl,Nt,dl,jt,ul,Ft,ga,fl,ha,ml,Ir,_l,bl,vl,Ae,da,$l,Nr,yl,El,Tt,wl,Pt,kl,ce,ua,Al,jr,xl,Hl,fa,Dl,Fr,ql,Il,Nl,ma,jl,Jn,Fl,Tl,Pl,Qn,Ol,Xn,Rl,Ll,Ot,Sl,le,_a,Cl,ba,Ml,Tr,Ul,Vl,zl,va,Wl,Yn,Gl,Bl,Kl,$a,Jl,Pr,Ql,Xl,Yl,Zn,Zl,er,ep,tp,Rt,op,Lt,ya,ap,Or,np,rp,St,Ea,sp,Rr,ip,cp,xe,wa,lp,Lr,pp,gp,Sr,hp,dp,Ct,up,Mt,ka,fp,Cr,mp,_p,Je,Aa,bp,Mr,vp,$p,Ut,yp,Qe,xa,Ep,Ur,wp,kp,Ha,Ap,tr,xp,Hp,Dp,Xe,Da,qp,Vr,Ip,Np,Vt,jp,zt,qa,Fp,zr,Tp,Pp,Ye,Ia,Op,Wr,Rp,Lp,Wt,Sp,Gt,Na,Cp,Gr,Mp,Up,He,ja,Vp,Br,zp,Wp,or,Gp,ar,Bp,Kp,Bt,Jp,Kt,Fa,Qp,Kr,Xp,Yp,Jt,Ta,Zp,Jr,eg,tg,_e,Pa,og,Qr,ag,ng,Xr,rg,sg,Qt,ig,Xt,cg,De,Oa,lg,Yr,pg,gg,Yt,hg,Zt,dg,qe,Ra,ug,Zr,fg,mg,eo,_g,to,bg,oo,La,vg,es,$g,yg,Ie,Sa,Eg,ts,wg,kg,ao,Ag,no,xg,ro,Ca,Hg,os,Dg,qg,so,Ma,Ig,as,Ng,jg,Ze,Ua,Fg,ns,Tg,Pg,io,Og,Ne,Va,Rg,rs,Lg,Sg,ss,Cg,Mg,co,Ug,je,za,Vg,is,zg,Wg,Wa,Gg,Ga,Bg,Kg,Jg,lo,Qg,Fe,Ba,Xg,cs,Yg,Zg,po,eh,go,th,et,Ka,oh,ls,ah,nh,ho,rh,uo,Ja,sh,ps,ih,ch,Te,Qa,lh,gs,ph,gh,hs,hh,dh,fo,uh,mo,Xa,fh,ds,mh,_h,tt,Ya,bh,us,vh,$h,_o,yh,be,Za,Eh,fs,wh,kh,bo,Ah,vo,xh,$o,Hh,se,en,Dh,ms,qh,Ih,_s,Nh,jh,ue,Fh,bs,Th,Ph,vs,Oh,Rh,tn,Lh,Sh,$s,Ch,Mh,ys,Uh,Vh,zh,on,Wh,Es,Gh,Bh,Kh,yo,Jh,Eo,Qh,wo,Xh,ko,an,Yh,ws,Zh,Si,ht,Ao,ks,nn,ed,As,td,Ci,dt,rn,od,xs,ad,Mi,ut,xo,Hs,sn,nd,Ds,rd,Ui,ft,cn,sd,qs,id,Vi,mt,Ho,Is,ln,cd,Ns,ld,zi,Re,pn,pd,js,gd,hd,Fs,dd,Wi,_t,Do,Ts,gn,ud,Ps,fd,Gi,bt,hn,md,Os,_d,Bi,vt,qo,Rs,dn,bd,Ls,vd,Ki,Le,un,$d,Ss,yd,Ed,fn,wd,nr,kd,Ad,Ji,$t,Io,Cs,mn,xd,rr,Ms,Hd,Dd,Qi,No,qd,Us,Id,Nd,Xi,$e,_n,jd,Vs,Fd,Td,ot,bn,Pd,vn,Od,zs,Rd,Ld,Sd,jo,Cd,at,$n,Md,sr,Ud,Ws,Vd,zd,ir,Wd,Gs,Gd,Yi,yt,yn,Bd,Bs,Kd,Zi,Et,Fo,Ks,En,Jd,Js,Qd,ec,wn,Qs,Xd,Yd,tc,To,Zd,cr,eu,tu,oc,ye,kn,ou,Po,An,au,Xs,nu,ru,nt,xn,su,Ys,iu,cu,Hn,lu,Zs,pu,gu,hu,Oo,Dn,du,ei,uu,ac,wt,Ro,ti,qn,fu,oi,mu,nc,Lo,_u,ai,bu,vu,rc,kt,So,ni,In,$u,ri,yu,sc,Se,Nn,Eu,si,wu,ku,Co,ic,At,Mo,ii,jn,Au,ci,xu,cc,Ce,Fn,Hu,li,Du,qu,Uo,lc,xt,Vo,pi,Tn,Iu,gi,Nu,pc,Me,Pn,ju,hi,Fu,Tu,zo,gc,Ht,Wo,di,On,Pu,ui,Ou,hc,Ue,Rn,Ru,fi,Lu,Su,Go,dc;return s=new ve({}),S=new ie({props:{code:`from huggingface_hub import list_models

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
)`}}),ia=new ve({}),ca=new J({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L569"}}),la=new J({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3150",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),qt=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Zm]},$$scope:{ctx:M}}}),It=new re({props:{$$slots:{default:[e_]},$$scope:{ctx:M}}}),pa=new J({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3007",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Nt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[t_]},$$scope:{ctx:M}}}),jt=new re({props:{$$slots:{default:[o_]},$$scope:{ctx:M}}}),ga=new J({props:{name:"create_branch",anchor:"huggingface_hub.HfApi.create_branch",parameters:[{name:"repo_id",val:": str"},{name:"branch",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_branch.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which the branch will be created.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_branch.branch",description:`<strong>branch</strong> (<code>str</code>) &#x2014;
The name of the branch to create.`,name:"branch"},{anchor:"huggingface_hub.HfApi.create_branch.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_branch.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if creating a branch on a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is <code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2428",raiseDescription:`
<ul>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.BadRequestError"
>BadRequestError</a> \u2014
If invalid reference for a branch. Ex: <code>refs/pr/5</code> or \u2018refs/foo/bar\u2019.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.HfHubHTTPError"
>HfHubHTTPError</a> \u2014
If the branch already exists on the repo (error 409).</li>
</ul>
`,raiseType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> or <a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.BadRequestError"
>BadRequestError</a> or <a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.HfHubHTTPError"
>HfHubHTTPError</a></p>
`}}),da=new J({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Tt=new re({props:{warning:!0,$$slots:{default:[a_]},$$scope:{ctx:M}}}),Pt=new re({props:{warning:!0,$$slots:{default:[n_]},$$scope:{ctx:M}}}),ua=new J({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2834"}}),Ot=new re({props:{$$slots:{default:[r_]},$$scope:{ctx:M}}}),_a=new J({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2923"}}),Rt=new re({props:{$$slots:{default:[s_]},$$scope:{ctx:M}}}),ya=new J({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": bool = False"},{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Ea=new J({props:{name:"create_tag",anchor:"huggingface_hub.HfApi.create_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"tag_message",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2525",raiseDescription:`
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
`}}),wa=new J({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Ct=new re({props:{$$slots:{default:[i_]},$$scope:{ctx:M}}}),ka=new J({props:{name:"delete_branch",anchor:"huggingface_hub.HfApi.delete_branch",parameters:[{name:"repo_id",val:": str"},{name:"branch",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_branch.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a branch will be deleted.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_branch.branch",description:`<strong>branch</strong> (<code>str</code>) &#x2014;
The name of the branch to delete.`,name:"branch"},{anchor:"huggingface_hub.HfApi.delete_branch.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_branch.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if creating a branch on a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if tagging a model. Default is <code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2476",raiseDescription:`
<ul>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.HfHubHTTPError"
>HfHubHTTPError</a> \u2014
If trying to delete a protected branch. Ex: <code>main</code> cannot be deleted.</li>
<li><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.HfHubHTTPError"
>HfHubHTTPError</a> \u2014
If trying to delete a branch that does not exist.</li>
</ul>
`,raiseType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> or <a
  href="/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.HfHubHTTPError"
>HfHubHTTPError</a></p>
`}}),Aa=new J({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2269"}}),Ut=new re({props:{$$slots:{default:[c_]},$$scope:{ctx:M}}}),xa=new J({props:{name:"delete_folder",anchor:"huggingface_hub.HfApi.delete_folder",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_folder.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2359"}}),Da=new J({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1571"}}),Vt=new re({props:{$$slots:{default:[l_]},$$scope:{ctx:M}}}),qa=new J({props:{name:"delete_tag",anchor:"huggingface_hub.HfApi.delete_tag",parameters:[{name:"repo_id",val:": str"},{name:"tag",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_tag.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which a tag will be deleted.
Example: <code>&quot;user/my-cool-model&quot;</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_tag.tag",description:`<strong>tag</strong> (<code>str</code>) &#x2014;
The name of the tag to delete.`,name:"tag"},{anchor:"huggingface_hub.HfApi.delete_tag.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token. Will default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_tag.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if tagging a dataset or space, <code>None</code> or
<code>&quot;model&quot;</code> if tagging a model. Default is <code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2587",raiseDescription:`
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
`}}),Ia=new J({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3278",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Wt=new re({props:{$$slots:{default:[p_]},$$scope:{ctx:M}}}),Na=new J({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L661"}}),ja=new J({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2749"}}),Bt=new re({props:{$$slots:{default:[g_]},$$scope:{ctx:M}}}),Fa=new J({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
A valid authentication token (see <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).
If <code>None</code> or <code>True</code> and machine is logged in (through <code>huggingface-cli login</code>
or <a href="/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login">login()</a>), token will be retrieved from the cache.
If <code>False</code>, token is not sent in the request header.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2633",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ta=new J({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L653"}}),Pa=new J({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2671",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Qt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[h_]},$$scope:{ctx:M}}}),Xt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[d_]},$$scope:{ctx:M}}}),Oa=new J({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3335",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Yt=new re({props:{warning:!0,$$slots:{default:[u_]},$$scope:{ctx:M}}}),Zt=new re({props:{$$slots:{default:[f_]},$$scope:{ctx:M}}}),Ra=new J({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
`}}),eo=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[m_]},$$scope:{ctx:M}}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[__]},$$scope:{ctx:M}}}),La=new J({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1071",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Sa=new J({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": bool = False"},{name:"fetch_config",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
`}}),ao=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[b_]},$$scope:{ctx:M}}}),no=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[v_]},$$scope:{ctx:M}}}),Ca=new J({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Ma=new J({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": bool = False"},{name:"full",val:": typing.Optional[bool] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
`}}),Ua=new J({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3225",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),io=new re({props:{$$slots:{default:[$_]},$$scope:{ctx:M}}}),Va=new J({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),co=new re({props:{$$slots:{default:[y_]},$$scope:{ctx:M}}}),za=new J({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1677"}}),lo=new re({props:{$$slots:{default:[E_]},$$scope:{ctx:M}}}),Ba=new J({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3083",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),po=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[w_]},$$scope:{ctx:M}}}),go=new re({props:{$$slots:{default:[k_]},$$scope:{ctx:M}}}),Ka=new J({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),ho=new re({props:{$$slots:{default:[A_]},$$scope:{ctx:M}}}),Ja=new J({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L620"}}),Qa=new J({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),fo=new re({props:{$$slots:{default:[x_]},$$scope:{ctx:M}}}),Xa=new J({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L639"}}),Ya=new J({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1617",returnDescription:`
<p>The HTTP response in json.</p>
`}}),_o=new re({props:{$$slots:{default:[H_]},$$scope:{ctx:M}}}),Za=new J({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
`}}),bo=new re({props:{$$slots:{default:[D_]},$$scope:{ctx:M}}}),vo=new re({props:{warning:!0,$$slots:{default:[q_]},$$scope:{ctx:M}}}),$o=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[I_]},$$scope:{ctx:M}}}),en=new J({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": typing.Union[str, pathlib.Path]"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),yo=new re({props:{$$slots:{default:[N_]},$$scope:{ctx:M}}}),Eo=new re({props:{warning:!0,$$slots:{default:[j_]},$$scope:{ctx:M}}}),wo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[F_]},$$scope:{ctx:M}}}),an=new J({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L576"}}),nn=new ve({}),rn=new J({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L259"}}),sn=new ve({}),cn=new J({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L332"}}),ln=new ve({}),pn=new J({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L406"}}),gn=new ve({}),hn=new J({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L213"}}),dn=new ve({}),un=new J({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L158"}}),mn=new ve({}),_n=new J({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
`}}),bn=new J({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L141"}}),jo=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[T_]},$$scope:{ctx:M}}}),$n=new J({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L171"}}),yn=new J({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"},{name:"is_folder",val:": typing.Union[bool, typing.Literal['auto']] = 'auto'"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example: <code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>
for a file or <code>&quot;checkpoints/1fec34a/&quot;</code> for a folder.`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationDelete.is_folder",description:`<strong>is_folder</strong> (<code>bool</code> or <code>Literal[&quot;auto&quot;]</code>, <em>optional</em>) &#x2014;
Whether the Delete Operation applies to a folder or not. If &#x201C;auto&#x201D;, the path
type (file or folder) is guessed automatically by looking if path ends with
a &#x201D;/&#x201D; (folder) or not (file). To explicitly set the path type, you can set
<code>is_folder=True</code> or <code>is_folder=False</code>.`,name:"is_folder"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L38"}}),En=new ve({}),kn=new J({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L21"}}),An=new J({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L56"}}),xn=new J({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Dn=new J({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/_hf_folder.py#L24"}}),qn=new ve({}),In=new ve({}),Nn=new J({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"benchmark",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"dataset_name",val:": typing.Optional[str] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),Co=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[P_]},$$scope:{ctx:M}}}),jn=new ve({}),Fn=new J({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": typing.Optional[str] = None"},{name:"library",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"task",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"trained_dataset",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"tags",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Uo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[O_]},$$scope:{ctx:M}}}),Tn=new ve({}),Pn=new J({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[{name:"api",val:": typing.Optional[ForwardRef('HfApi')] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L531"}}),zo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[R_]},$$scope:{ctx:M}}}),On=new ve({}),Rn=new J({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[{name:"api",val:": typing.Optional[ForwardRef('HfApi')] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L493"}}),Go=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[L_]},$$scope:{ctx:M}}}),{c(){p=a("meta"),b=g(),f=a("h1"),l=a("a"),d=a("span"),x(s.$$.fragment),u=g(),P=a("span"),v=i("Hugging Face Hub API"),j=g(),w=a("p"),y=i("Below is the documentation for the "),k=a("code"),O=i("HfApi"),T=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=g(),_=a("p"),F=i("All methods from the "),U=a("code"),W=i("HfApi"),L=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=i("The following approach uses the method from the root of the package:"),V=g(),x(S.$$.fragment),Y=g(),te=a("p"),Z=i("The following approach uses the "),Q=a("code"),ee=i("HfApi"),ae=i(" class:"),B=g(),x(X.$$.fragment),oe=g(),ne=a("p"),Be=i("Using the "),de=a("a"),it=i("HfApi"),Ke=i(` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),Ee=a("code"),ct=i("huggingface-cli login"),lt=i(" or "),pt=a("a"),Kn=i("login()"),na=i(` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),ra=g(),x(Oe.$$.fragment),sa=g(),gt=a("h3"),Dt=a("a"),xr=a("span"),x(ia.$$.fragment),ol=g(),Hr=a("span"),al=i("HfApi"),Li=g(),C=a("div"),x(ca.$$.fragment),nl=g(),we=a("div"),x(la.$$.fragment),rl=g(),Dr=a("p"),sl=i("Closes or re-opens a Discussion or Pull Request."),il=g(),x(qt.$$.fragment),cl=g(),x(It.$$.fragment),ll=g(),ke=a("div"),x(pa.$$.fragment),pl=g(),qr=a("p"),gl=i("Creates a new comment on the given Discussion."),hl=g(),x(Nt.$$.fragment),dl=g(),x(jt.$$.fragment),ul=g(),Ft=a("div"),x(ga.$$.fragment),fl=g(),ha=a("p"),ml=i("Create a new branch from "),Ir=a("code"),_l=i("main"),bl=i(" on a repo on the Hub."),vl=g(),Ae=a("div"),x(da.$$.fragment),$l=g(),Nr=a("p"),yl=i("Creates a commit in the given repo, deleting & uploading files as needed."),El=g(),x(Tt.$$.fragment),wl=g(),x(Pt.$$.fragment),kl=g(),ce=a("div"),x(ua.$$.fragment),Al=g(),jr=a("p"),xl=i("Creates a Discussion or Pull Request."),Hl=g(),fa=a("p"),Dl=i("Pull Requests created programmatically will be in "),Fr=a("code"),ql=i('"draft"'),Il=i(" status."),Nl=g(),ma=a("p"),jl=i("Creating a Pull Request with changes can also be done at once with "),Jn=a("a"),Fl=i("HfApi.create_commit()"),Tl=i("."),Pl=g(),Qn=a("p"),Ol=i("Returns: "),Xn=a("a"),Rl=i("DiscussionWithDetails"),Ll=g(),x(Ot.$$.fragment),Sl=g(),le=a("div"),x(_a.$$.fragment),Cl=g(),ba=a("p"),Ml=i("Creates a Pull Request . Pull Requests created programmatically will be in "),Tr=a("code"),Ul=i('"draft"'),Vl=i(" status."),zl=g(),va=a("p"),Wl=i("Creating a Pull Request with changes can also be done at once with "),Yn=a("a"),Gl=i("HfApi.create_commit()"),Bl=i(";"),Kl=g(),$a=a("p"),Jl=i("This is a wrapper around "),Pr=a("code"),Ql=i("HfApi.create_discusssion"),Xl=i("."),Yl=g(),Zn=a("p"),Zl=i("Returns: "),er=a("a"),ep=i("DiscussionWithDetails"),tp=g(),x(Rt.$$.fragment),op=g(),Lt=a("div"),x(ya.$$.fragment),ap=g(),Or=a("p"),np=i("Create an empty repo on the HuggingFace Hub."),rp=g(),St=a("div"),x(Ea.$$.fragment),sp=g(),Rr=a("p"),ip=i("Tag a given commit of a repo on the Hub."),cp=g(),xe=a("div"),x(wa.$$.fragment),lp=g(),Lr=a("p"),pp=i("Get info on one specific dataset on huggingface.co."),gp=g(),Sr=a("p"),hp=i("Dataset can be private if you pass an acceptable token."),dp=g(),x(Ct.$$.fragment),up=g(),Mt=a("div"),x(ka.$$.fragment),fp=g(),Cr=a("p"),mp=i("Delete a branch from a repo on the Hub."),_p=g(),Je=a("div"),x(Aa.$$.fragment),bp=g(),Mr=a("p"),vp=i("Deletes a file in the given repo."),$p=g(),x(Ut.$$.fragment),yp=g(),Qe=a("div"),x(xa.$$.fragment),Ep=g(),Ur=a("p"),wp=i("Deletes a folder in the given repo."),kp=g(),Ha=a("p"),Ap=i("Simple wrapper around "),tr=a("a"),xp=i("create_commit()"),Hp=i(" method."),Dp=g(),Xe=a("div"),x(Da.$$.fragment),qp=g(),Vr=a("p"),Ip=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Np=g(),x(Vt.$$.fragment),jp=g(),zt=a("div"),x(qa.$$.fragment),Fp=g(),zr=a("p"),Tp=i("Delete a tag from a repo on the Hub."),Pp=g(),Ye=a("div"),x(Ia.$$.fragment),Op=g(),Wr=a("p"),Rp=i("Edits a comment on a Discussion / Pull Request."),Lp=g(),x(Wt.$$.fragment),Sp=g(),Gt=a("div"),x(Na.$$.fragment),Cp=g(),Gr=a("p"),Mp=i("Gets all valid dataset tags as a nested namespace object."),Up=g(),He=a("div"),x(ja.$$.fragment),Vp=g(),Br=a("p"),zp=i("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Wp=g(),or=a("p"),Gp=i("Returns: "),ar=a("a"),Bp=i("DiscussionWithDetails"),Kp=g(),x(Bt.$$.fragment),Jp=g(),Kt=a("div"),x(Fa.$$.fragment),Qp=g(),Kr=a("p"),Xp=i(`Returns the repository name for a given model ID and optional
organization.`),Yp=g(),Jt=a("div"),x(Ta.$$.fragment),Zp=g(),Jr=a("p"),eg=i("Gets all valid model tags as a nested namespace object"),tg=g(),_e=a("div"),x(Pa.$$.fragment),og=g(),Qr=a("p"),ag=i("Fetches Discussions and Pull Requests for the given repo."),ng=g(),Xr=a("p"),rg=i("Example:"),sg=g(),x(Qt.$$.fragment),ig=g(),x(Xt.$$.fragment),cg=g(),De=a("div"),x(Oa.$$.fragment),lg=g(),Yr=a("p"),pg=i("Hides a comment on a Discussion / Pull Request."),gg=g(),x(Yt.$$.fragment),hg=g(),x(Zt.$$.fragment),dg=g(),qe=a("div"),x(Ra.$$.fragment),ug=g(),Zr=a("p"),fg=i("Get the list of all the datasets on huggingface.co"),mg=g(),x(eo.$$.fragment),_g=g(),x(to.$$.fragment),bg=g(),oo=a("div"),x(La.$$.fragment),vg=g(),es=a("p"),$g=i("Get the public list of all the metrics on huggingface.co"),yg=g(),Ie=a("div"),x(Sa.$$.fragment),Eg=g(),ts=a("p"),wg=i("Get the list of all the models on huggingface.co"),kg=g(),x(ao.$$.fragment),Ag=g(),x(no.$$.fragment),xg=g(),ro=a("div"),x(Ca.$$.fragment),Hg=g(),os=a("p"),Dg=i("Get the list of files in a given repo."),qg=g(),so=a("div"),x(Ma.$$.fragment),Ig=g(),as=a("p"),Ng=i("Get the public list of all Spaces on huggingface.co"),jg=g(),Ze=a("div"),x(Ua.$$.fragment),Fg=g(),ns=a("p"),Tg=i("Merges a Pull Request."),Pg=g(),x(io.$$.fragment),Og=g(),Ne=a("div"),x(Va.$$.fragment),Rg=g(),rs=a("p"),Lg=i("Get info on one specific model on huggingface.co"),Sg=g(),ss=a("p"),Cg=i("Model can be private if you pass an acceptable token or are logged in."),Mg=g(),x(co.$$.fragment),Ug=g(),je=a("div"),x(za.$$.fragment),Vg=g(),is=a("p"),zg=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Wg=g(),Wa=a("p"),Gg=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ga=a("a"),Bg=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Kg=i("."),Jg=g(),x(lo.$$.fragment),Qg=g(),Fe=a("div"),x(Ba.$$.fragment),Xg=g(),cs=a("p"),Yg=i("Renames a Discussion."),Zg=g(),x(po.$$.fragment),eh=g(),x(go.$$.fragment),th=g(),et=a("div"),x(Ka.$$.fragment),oh=g(),ls=a("p"),ah=i("Get the info object for a given repo of a given type."),nh=g(),x(ho.$$.fragment),rh=g(),uo=a("div"),x(Ja.$$.fragment),sh=g(),ps=a("p"),ih=i(`Saves the passed access token so git can correctly authenticate the
user.`),ch=g(),Te=a("div"),x(Qa.$$.fragment),lh=g(),gs=a("p"),ph=i("Get info on one specific Space on huggingface.co."),gh=g(),hs=a("p"),hh=i("Space can be private if you pass an acceptable token."),dh=g(),x(fo.$$.fragment),uh=g(),mo=a("div"),x(Xa.$$.fragment),fh=g(),ds=a("p"),mh=i("Resets the user\u2019s access token."),_h=g(),tt=a("div"),x(Ya.$$.fragment),bh=g(),us=a("p"),vh=i("Update the visibility setting of a repository."),$h=g(),x(_o.$$.fragment),yh=g(),be=a("div"),x(Za.$$.fragment),Eh=g(),fs=a("p"),wh=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),kh=g(),x(bo.$$.fragment),Ah=g(),x(vo.$$.fragment),xh=g(),x($o.$$.fragment),Hh=g(),se=a("div"),x(en.$$.fragment),Dh=g(),ms=a("p"),qh=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ih=g(),_s=a("p"),Nh=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),jh=g(),ue=a("p"),Fh=i("Use the "),bs=a("code"),Th=i("allow_patterns"),Ph=i(" and "),vs=a("code"),Oh=i("ignore_patterns"),Rh=i(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),tn=a("a"),Lh=i("here"),Sh=i(`. If both
`),$s=a("code"),Ch=i("allow_patterns"),Mh=i(" and "),ys=a("code"),Uh=i("ignore_patterns"),Vh=i(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),zh=g(),on=a("p"),Wh=i("Uses "),Es=a("code"),Gh=i("HfApi.create_commit"),Bh=i(" under the hood."),Kh=g(),x(yo.$$.fragment),Jh=g(),x(Eo.$$.fragment),Qh=g(),x(wo.$$.fragment),Xh=g(),ko=a("div"),x(an.$$.fragment),Yh=g(),ws=a("p"),Zh=i("Call HF API to know \u201Cwhoami\u201D."),Si=g(),ht=a("h3"),Ao=a("a"),ks=a("span"),x(nn.$$.fragment),ed=g(),As=a("span"),td=i("ModelInfo"),Ci=g(),dt=a("div"),x(rn.$$.fragment),od=g(),xs=a("p"),ad=i("Info about a model accessible from huggingface.co"),Mi=g(),ut=a("h3"),xo=a("a"),Hs=a("span"),x(sn.$$.fragment),nd=g(),Ds=a("span"),rd=i("DatasetInfo"),Ui=g(),ft=a("div"),x(cn.$$.fragment),sd=g(),qs=a("p"),id=i("Info about a dataset accessible from huggingface.co"),Vi=g(),mt=a("h3"),Ho=a("a"),Is=a("span"),x(ln.$$.fragment),cd=g(),Ns=a("span"),ld=i("SpaceInfo"),zi=g(),Re=a("div"),x(pn.$$.fragment),pd=g(),js=a("p"),gd=i("Info about a Space accessible from huggingface.co"),hd=g(),Fs=a("p"),dd=i(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Wi=g(),_t=a("h3"),Do=a("a"),Ts=a("span"),x(gn.$$.fragment),ud=g(),Ps=a("span"),fd=i("RepoFile"),Gi=g(),bt=a("div"),x(hn.$$.fragment),md=g(),Os=a("p"),_d=i(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Bi=g(),vt=a("h3"),qo=a("a"),Rs=a("span"),x(dn.$$.fragment),bd=g(),Ls=a("span"),vd=i("CommitInfo"),Ki=g(),Le=a("div"),x(un.$$.fragment),$d=g(),Ss=a("p"),yd=i("Data structure containing information about a newly created commit."),Ed=g(),fn=a("p"),wd=i("Returned by "),nr=a("a"),kd=i("create_commit()"),Ad=i("."),Ji=g(),$t=a("h2"),Io=a("a"),Cs=a("span"),x(mn.$$.fragment),xd=g(),rr=a("span"),Ms=a("code"),Hd=i("create_commit"),Dd=i(" API"),Qi=g(),No=a("p"),qd=i("Below are the supported values for "),Us=a("code"),Id=i("CommitOperation()"),Nd=i(":"),Xi=g(),$e=a("div"),x(_n.$$.fragment),jd=g(),Vs=a("p"),Fd=i("Data structure holding necessary info to upload a file to a repository on the Hub."),Td=g(),ot=a("div"),x(bn.$$.fragment),Pd=g(),vn=a("p"),Od=i(`A context manager that yields a file-like object allowing to read the underlying
data behind `),zs=a("code"),Rd=i("path_or_fileobj"),Ld=i("."),Sd=g(),x(jo.$$.fragment),Cd=g(),at=a("div"),x($n.$$.fragment),Md=g(),sr=a("p"),Ud=i("The base64-encoded content of "),Ws=a("code"),Vd=i("path_or_fileobj"),zd=g(),ir=a("p"),Wd=i("Returns: "),Gs=a("code"),Gd=i("bytes"),Yi=g(),yt=a("div"),x(yn.$$.fragment),Bd=g(),Bs=a("p"),Kd=i(`Data structure holding necessary info to delete a file or a folder from a repository
on the Hub.`),Zi=g(),Et=a("h2"),Fo=a("a"),Ks=a("span"),x(En.$$.fragment),Jd=g(),Js=a("span"),Qd=i("Hugging Face local storage"),ec=g(),wn=a("p"),Qs=a("code"),Xd=i("huggingface_hub"),Yd=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),tc=g(),To=a("p"),Zd=i("It does this using the "),cr=a("a"),eu=i("HfFolder"),tu=i(" utility, which saves data at the root of the user."),oc=g(),ye=a("div"),x(kn.$$.fragment),ou=g(),Po=a("div"),x(An.$$.fragment),au=g(),Xs=a("p"),nu=i("Deletes the token from storage. Does not fail if token does not exist."),ru=g(),nt=a("div"),x(xn.$$.fragment),su=g(),Ys=a("p"),iu=i("Get token or None if not existent."),cu=g(),Hn=a("p"),lu=i(`Note that a token can be also provided using the
`),Zs=a("code"),pu=i("HUGGING_FACE_HUB_TOKEN"),gu=i(" environment variable."),hu=g(),Oo=a("div"),x(Dn.$$.fragment),du=g(),ei=a("p"),uu=i("Save token, creating folder as needed."),ac=g(),wt=a("h2"),Ro=a("a"),ti=a("span"),x(qn.$$.fragment),fu=g(),oi=a("span"),mu=i("Filtering helpers"),nc=g(),Lo=a("p"),_u=i("Some helpers to filter repositories on the Hub are available in the "),ai=a("code"),bu=i("huggingface_hub"),vu=i(" package."),rc=g(),kt=a("h3"),So=a("a"),ni=a("span"),x(In.$$.fragment),$u=g(),ri=a("span"),yu=i("DatasetFilter"),sc=g(),Se=a("div"),x(Nn.$$.fragment),Eu=g(),si=a("p"),wu=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ku=g(),x(Co.$$.fragment),ic=g(),At=a("h3"),Mo=a("a"),ii=a("span"),x(jn.$$.fragment),Au=g(),ci=a("span"),xu=i("ModelFilter"),cc=g(),Ce=a("div"),x(Fn.$$.fragment),Hu=g(),li=a("p"),Du=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),qu=g(),x(Uo.$$.fragment),lc=g(),xt=a("h3"),Vo=a("a"),pi=a("span"),x(Tn.$$.fragment),Iu=g(),gi=a("span"),Nu=i("DatasetSearchArguments"),pc=g(),Me=a("div"),x(Pn.$$.fragment),ju=g(),hi=a("p"),Fu=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Tu=g(),x(zo.$$.fragment),gc=g(),Ht=a("h3"),Wo=a("a"),di=a("span"),x(On.$$.fragment),Pu=g(),ui=a("span"),Ou=i("ModelSearchArguments"),hc=g(),Ue=a("div"),x(Rn.$$.fragment),Ru=g(),fi=a("p"),Lu=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Su=g(),x(Go.$$.fragment),this.h()},l(o){const E=Xm('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Ln=r(f);l=n(Ln,"A",{id:!0,class:!0,href:!0});var mi=r(l);d=n(mi,"SPAN",{});var _i=r(d);H(s.$$.fragment,_i),_i.forEach(t),mi.forEach(t),u=h(Ln),P=n(Ln,"SPAN",{});var bi=r(P);v=c(bi,"Hugging Face Hub API"),bi.forEach(t),Ln.forEach(t),j=h(o),w=n(o,"P",{});var Sn=r(w);y=c(Sn,"Below is the documentation for the "),k=n(Sn,"CODE",{});var vi=r(k);O=c(vi,"HfApi"),vi.forEach(t),T=c(Sn,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Sn.forEach(t),R=h(o),_=n(o,"P",{});var Cn=r(_);F=c(Cn,"All methods from the "),U=n(Cn,"CODE",{});var $i=r(U);W=c($i,"HfApi"),$i.forEach(t),L=c(Cn,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Cn.forEach(t),K=h(o),G=n(o,"P",{});var yi=r(G);A=c(yi,"The following approach uses the method from the root of the package:"),yi.forEach(t),V=h(o),H(S.$$.fragment,o),Y=h(o),te=n(o,"P",{});var Mn=r(te);Z=c(Mn,"The following approach uses the "),Q=n(Mn,"CODE",{});var Ei=r(Q);ee=c(Ei,"HfApi"),Ei.forEach(t),ae=c(Mn," class:"),Mn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var Ve=r(ne);Be=c(Ve,"Using the "),de=n(Ve,"A",{href:!0});var wi=r(de);it=c(wi,"HfApi"),wi.forEach(t),Ke=c(Ve,` class directly enables you to configure the client. In particular, a
token can be passed to be authenticated in all API calls. This is different than
`),Ee=n(Ve,"CODE",{});var ki=r(Ee);ct=c(ki,"huggingface-cli login"),ki.forEach(t),lt=c(Ve," or "),pt=n(Ve,"A",{href:!0});var Ai=r(pt);Kn=c(Ai,"login()"),Ai.forEach(t),na=c(Ve,` as the token is not persisted on the machine. One
can also specify a different endpoint than the Hugging Face\u2019s Hub (for example to interact
with a Private Hub).`),Ve.forEach(t),ra=h(o),H(Oe.$$.fragment,o),sa=h(o),gt=n(o,"H3",{class:!0});var Un=r(gt);Dt=n(Un,"A",{id:!0,class:!0,href:!0});var xi=r(Dt);xr=n(xi,"SPAN",{});var Hi=r(xr);H(ia.$$.fragment,Hi),Hi.forEach(t),xi.forEach(t),ol=h(Un),Hr=n(Un,"SPAN",{});var Di=r(Hr);al=c(Di,"HfApi"),Di.forEach(t),Un.forEach(t),Li=h(o),C=n(o,"DIV",{class:!0});var z=r(C);H(ca.$$.fragment,z),nl=h(z),we=n(z,"DIV",{class:!0});var ze=r(we);H(la.$$.fragment,ze),rl=h(ze),Dr=n(ze,"P",{});var qi=r(Dr);sl=c(qi,"Closes or re-opens a Discussion or Pull Request."),qi.forEach(t),il=h(ze),H(qt.$$.fragment,ze),cl=h(ze),H(It.$$.fragment,ze),ze.forEach(t),ll=h(z),ke=n(z,"DIV",{class:!0});var We=r(ke);H(pa.$$.fragment,We),pl=h(We),qr=n(We,"P",{});var Ii=r(qr);gl=c(Ii,"Creates a new comment on the given Discussion."),Ii.forEach(t),hl=h(We),H(Nt.$$.fragment,We),dl=h(We),H(jt.$$.fragment,We),We.forEach(t),ul=h(z),Ft=n(z,"DIV",{class:!0});var Vn=r(Ft);H(ga.$$.fragment,Vn),fl=h(Vn),ha=n(Vn,"P",{});var zn=r(ha);ml=c(zn,"Create a new branch from "),Ir=n(zn,"CODE",{});var Ni=r(Ir);_l=c(Ni,"main"),Ni.forEach(t),bl=c(zn," on a repo on the Hub."),zn.forEach(t),Vn.forEach(t),vl=h(z),Ae=n(z,"DIV",{class:!0});var Ge=r(Ae);H(da.$$.fragment,Ge),$l=h(Ge),Nr=n(Ge,"P",{});var ji=r(Nr);yl=c(ji,"Creates a commit in the given repo, deleting & uploading files as needed."),ji.forEach(t),El=h(Ge),H(Tt.$$.fragment,Ge),wl=h(Ge),H(Pt.$$.fragment,Ge),Ge.forEach(t),kl=h(z),ce=n(z,"DIV",{class:!0});var fe=r(ce);H(ua.$$.fragment,fe),Al=h(fe),jr=n(fe,"P",{});var Fi=r(jr);xl=c(Fi,"Creates a Discussion or Pull Request."),Fi.forEach(t),Hl=h(fe),fa=n(fe,"P",{});var Wn=r(fa);Dl=c(Wn,"Pull Requests created programmatically will be in "),Fr=n(Wn,"CODE",{});var Ti=r(Fr);ql=c(Ti,'"draft"'),Ti.forEach(t),Il=c(Wn," status."),Wn.forEach(t),Nl=h(fe),ma=n(fe,"P",{});var Gn=r(ma);jl=c(Gn,"Creating a Pull Request with changes can also be done at once with "),Jn=n(Gn,"A",{href:!0});var Pi=r(Jn);Fl=c(Pi,"HfApi.create_commit()"),Pi.forEach(t),Tl=c(Gn,"."),Gn.forEach(t),Pl=h(fe),Qn=n(fe,"P",{});var lr=r(Qn);Ol=c(lr,"Returns: "),Xn=n(lr,"A",{href:!0});var Oi=r(Xn);Rl=c(Oi,"DiscussionWithDetails"),Oi.forEach(t),lr.forEach(t),Ll=h(fe),H(Ot.$$.fragment,fe),fe.forEach(t),Sl=h(z),le=n(z,"DIV",{class:!0});var me=r(le);H(_a.$$.fragment,me),Cl=h(me),ba=n(me,"P",{});var Bn=r(ba);Ml=c(Bn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Tr=n(Bn,"CODE",{});var Ri=r(Tr);Ul=c(Ri,'"draft"'),Ri.forEach(t),Vl=c(Bn," status."),Bn.forEach(t),zl=h(me),va=n(me,"P",{});var uc=r(va);Wl=c(uc,"Creating a Pull Request with changes can also be done at once with "),Yn=n(uc,"A",{href:!0});var Gu=r(Yn);Gl=c(Gu,"HfApi.create_commit()"),Gu.forEach(t),Bl=c(uc,";"),uc.forEach(t),Kl=h(me),$a=n(me,"P",{});var fc=r($a);Jl=c(fc,"This is a wrapper around "),Pr=n(fc,"CODE",{});var Bu=r(Pr);Ql=c(Bu,"HfApi.create_discusssion"),Bu.forEach(t),Xl=c(fc,"."),fc.forEach(t),Yl=h(me),Zn=n(me,"P",{});var Cu=r(Zn);Zl=c(Cu,"Returns: "),er=n(Cu,"A",{href:!0});var Ku=r(er);ep=c(Ku,"DiscussionWithDetails"),Ku.forEach(t),Cu.forEach(t),tp=h(me),H(Rt.$$.fragment,me),me.forEach(t),op=h(z),Lt=n(z,"DIV",{class:!0});var mc=r(Lt);H(ya.$$.fragment,mc),ap=h(mc),Or=n(mc,"P",{});var Ju=r(Or);np=c(Ju,"Create an empty repo on the HuggingFace Hub."),Ju.forEach(t),mc.forEach(t),rp=h(z),St=n(z,"DIV",{class:!0});var _c=r(St);H(Ea.$$.fragment,_c),sp=h(_c),Rr=n(_c,"P",{});var Qu=r(Rr);ip=c(Qu,"Tag a given commit of a repo on the Hub."),Qu.forEach(t),_c.forEach(t),cp=h(z),xe=n(z,"DIV",{class:!0});var Bo=r(xe);H(wa.$$.fragment,Bo),lp=h(Bo),Lr=n(Bo,"P",{});var Xu=r(Lr);pp=c(Xu,"Get info on one specific dataset on huggingface.co."),Xu.forEach(t),gp=h(Bo),Sr=n(Bo,"P",{});var Yu=r(Sr);hp=c(Yu,"Dataset can be private if you pass an acceptable token."),Yu.forEach(t),dp=h(Bo),H(Ct.$$.fragment,Bo),Bo.forEach(t),up=h(z),Mt=n(z,"DIV",{class:!0});var bc=r(Mt);H(ka.$$.fragment,bc),fp=h(bc),Cr=n(bc,"P",{});var Zu=r(Cr);mp=c(Zu,"Delete a branch from a repo on the Hub."),Zu.forEach(t),bc.forEach(t),_p=h(z),Je=n(z,"DIV",{class:!0});var pr=r(Je);H(Aa.$$.fragment,pr),bp=h(pr),Mr=n(pr,"P",{});var ef=r(Mr);vp=c(ef,"Deletes a file in the given repo."),ef.forEach(t),$p=h(pr),H(Ut.$$.fragment,pr),pr.forEach(t),yp=h(z),Qe=n(z,"DIV",{class:!0});var gr=r(Qe);H(xa.$$.fragment,gr),Ep=h(gr),Ur=n(gr,"P",{});var tf=r(Ur);wp=c(tf,"Deletes a folder in the given repo."),tf.forEach(t),kp=h(gr),Ha=n(gr,"P",{});var vc=r(Ha);Ap=c(vc,"Simple wrapper around "),tr=n(vc,"A",{href:!0});var of=r(tr);xp=c(of,"create_commit()"),of.forEach(t),Hp=c(vc," method."),vc.forEach(t),gr.forEach(t),Dp=h(z),Xe=n(z,"DIV",{class:!0});var hr=r(Xe);H(Da.$$.fragment,hr),qp=h(hr),Vr=n(hr,"P",{});var af=r(Vr);Ip=c(af,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),af.forEach(t),Np=h(hr),H(Vt.$$.fragment,hr),hr.forEach(t),jp=h(z),zt=n(z,"DIV",{class:!0});var $c=r(zt);H(qa.$$.fragment,$c),Fp=h($c),zr=n($c,"P",{});var nf=r(zr);Tp=c(nf,"Delete a tag from a repo on the Hub."),nf.forEach(t),$c.forEach(t),Pp=h(z),Ye=n(z,"DIV",{class:!0});var dr=r(Ye);H(Ia.$$.fragment,dr),Op=h(dr),Wr=n(dr,"P",{});var rf=r(Wr);Rp=c(rf,"Edits a comment on a Discussion / Pull Request."),rf.forEach(t),Lp=h(dr),H(Wt.$$.fragment,dr),dr.forEach(t),Sp=h(z),Gt=n(z,"DIV",{class:!0});var yc=r(Gt);H(Na.$$.fragment,yc),Cp=h(yc),Gr=n(yc,"P",{});var sf=r(Gr);Mp=c(sf,"Gets all valid dataset tags as a nested namespace object."),sf.forEach(t),yc.forEach(t),Up=h(z),He=n(z,"DIV",{class:!0});var Ko=r(He);H(ja.$$.fragment,Ko),Vp=h(Ko),Br=n(Ko,"P",{});var cf=r(Br);zp=c(cf,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),cf.forEach(t),Wp=h(Ko),or=n(Ko,"P",{});var Mu=r(or);Gp=c(Mu,"Returns: "),ar=n(Mu,"A",{href:!0});var lf=r(ar);Bp=c(lf,"DiscussionWithDetails"),lf.forEach(t),Mu.forEach(t),Kp=h(Ko),H(Bt.$$.fragment,Ko),Ko.forEach(t),Jp=h(z),Kt=n(z,"DIV",{class:!0});var Ec=r(Kt);H(Fa.$$.fragment,Ec),Qp=h(Ec),Kr=n(Ec,"P",{});var pf=r(Kr);Xp=c(pf,`Returns the repository name for a given model ID and optional
organization.`),pf.forEach(t),Ec.forEach(t),Yp=h(z),Jt=n(z,"DIV",{class:!0});var wc=r(Jt);H(Ta.$$.fragment,wc),Zp=h(wc),Jr=n(wc,"P",{});var gf=r(Jr);eg=c(gf,"Gets all valid model tags as a nested namespace object"),gf.forEach(t),wc.forEach(t),tg=h(z),_e=n(z,"DIV",{class:!0});var rt=r(_e);H(Pa.$$.fragment,rt),og=h(rt),Qr=n(rt,"P",{});var hf=r(Qr);ag=c(hf,"Fetches Discussions and Pull Requests for the given repo."),hf.forEach(t),ng=h(rt),Xr=n(rt,"P",{});var df=r(Xr);rg=c(df,"Example:"),df.forEach(t),sg=h(rt),H(Qt.$$.fragment,rt),ig=h(rt),H(Xt.$$.fragment,rt),rt.forEach(t),cg=h(z),De=n(z,"DIV",{class:!0});var Jo=r(De);H(Oa.$$.fragment,Jo),lg=h(Jo),Yr=n(Jo,"P",{});var uf=r(Yr);pg=c(uf,"Hides a comment on a Discussion / Pull Request."),uf.forEach(t),gg=h(Jo),H(Yt.$$.fragment,Jo),hg=h(Jo),H(Zt.$$.fragment,Jo),Jo.forEach(t),dg=h(z),qe=n(z,"DIV",{class:!0});var Qo=r(qe);H(Ra.$$.fragment,Qo),ug=h(Qo),Zr=n(Qo,"P",{});var ff=r(Zr);fg=c(ff,"Get the list of all the datasets on huggingface.co"),ff.forEach(t),mg=h(Qo),H(eo.$$.fragment,Qo),_g=h(Qo),H(to.$$.fragment,Qo),Qo.forEach(t),bg=h(z),oo=n(z,"DIV",{class:!0});var kc=r(oo);H(La.$$.fragment,kc),vg=h(kc),es=n(kc,"P",{});var mf=r(es);$g=c(mf,"Get the public list of all the metrics on huggingface.co"),mf.forEach(t),kc.forEach(t),yg=h(z),Ie=n(z,"DIV",{class:!0});var Xo=r(Ie);H(Sa.$$.fragment,Xo),Eg=h(Xo),ts=n(Xo,"P",{});var _f=r(ts);wg=c(_f,"Get the list of all the models on huggingface.co"),_f.forEach(t),kg=h(Xo),H(ao.$$.fragment,Xo),Ag=h(Xo),H(no.$$.fragment,Xo),Xo.forEach(t),xg=h(z),ro=n(z,"DIV",{class:!0});var Ac=r(ro);H(Ca.$$.fragment,Ac),Hg=h(Ac),os=n(Ac,"P",{});var bf=r(os);Dg=c(bf,"Get the list of files in a given repo."),bf.forEach(t),Ac.forEach(t),qg=h(z),so=n(z,"DIV",{class:!0});var xc=r(so);H(Ma.$$.fragment,xc),Ig=h(xc),as=n(xc,"P",{});var vf=r(as);Ng=c(vf,"Get the public list of all Spaces on huggingface.co"),vf.forEach(t),xc.forEach(t),jg=h(z),Ze=n(z,"DIV",{class:!0});var ur=r(Ze);H(Ua.$$.fragment,ur),Fg=h(ur),ns=n(ur,"P",{});var $f=r(ns);Tg=c($f,"Merges a Pull Request."),$f.forEach(t),Pg=h(ur),H(io.$$.fragment,ur),ur.forEach(t),Og=h(z),Ne=n(z,"DIV",{class:!0});var Yo=r(Ne);H(Va.$$.fragment,Yo),Rg=h(Yo),rs=n(Yo,"P",{});var yf=r(rs);Lg=c(yf,"Get info on one specific model on huggingface.co"),yf.forEach(t),Sg=h(Yo),ss=n(Yo,"P",{});var Ef=r(ss);Cg=c(Ef,"Model can be private if you pass an acceptable token or are logged in."),Ef.forEach(t),Mg=h(Yo),H(co.$$.fragment,Yo),Yo.forEach(t),Ug=h(z),je=n(z,"DIV",{class:!0});var Zo=r(je);H(za.$$.fragment,Zo),Vg=h(Zo),is=n(Zo,"P",{});var wf=r(is);zg=c(wf,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),wf.forEach(t),Wg=h(Zo),Wa=n(Zo,"P",{});var Hc=r(Wa);Gg=c(Hc,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ga=n(Hc,"A",{href:!0,rel:!0});var kf=r(Ga);Bg=c(kf,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),kf.forEach(t),Kg=c(Hc,"."),Hc.forEach(t),Jg=h(Zo),H(lo.$$.fragment,Zo),Zo.forEach(t),Qg=h(z),Fe=n(z,"DIV",{class:!0});var ea=r(Fe);H(Ba.$$.fragment,ea),Xg=h(ea),cs=n(ea,"P",{});var Af=r(cs);Yg=c(Af,"Renames a Discussion."),Af.forEach(t),Zg=h(ea),H(po.$$.fragment,ea),eh=h(ea),H(go.$$.fragment,ea),ea.forEach(t),th=h(z),et=n(z,"DIV",{class:!0});var fr=r(et);H(Ka.$$.fragment,fr),oh=h(fr),ls=n(fr,"P",{});var xf=r(ls);ah=c(xf,"Get the info object for a given repo of a given type."),xf.forEach(t),nh=h(fr),H(ho.$$.fragment,fr),fr.forEach(t),rh=h(z),uo=n(z,"DIV",{class:!0});var Dc=r(uo);H(Ja.$$.fragment,Dc),sh=h(Dc),ps=n(Dc,"P",{});var Hf=r(ps);ih=c(Hf,`Saves the passed access token so git can correctly authenticate the
user.`),Hf.forEach(t),Dc.forEach(t),ch=h(z),Te=n(z,"DIV",{class:!0});var ta=r(Te);H(Qa.$$.fragment,ta),lh=h(ta),gs=n(ta,"P",{});var Df=r(gs);ph=c(Df,"Get info on one specific Space on huggingface.co."),Df.forEach(t),gh=h(ta),hs=n(ta,"P",{});var qf=r(hs);hh=c(qf,"Space can be private if you pass an acceptable token."),qf.forEach(t),dh=h(ta),H(fo.$$.fragment,ta),ta.forEach(t),uh=h(z),mo=n(z,"DIV",{class:!0});var qc=r(mo);H(Xa.$$.fragment,qc),fh=h(qc),ds=n(qc,"P",{});var If=r(ds);mh=c(If,"Resets the user\u2019s access token."),If.forEach(t),qc.forEach(t),_h=h(z),tt=n(z,"DIV",{class:!0});var mr=r(tt);H(Ya.$$.fragment,mr),bh=h(mr),us=n(mr,"P",{});var Nf=r(us);vh=c(Nf,"Update the visibility setting of a repository."),Nf.forEach(t),$h=h(mr),H(_o.$$.fragment,mr),mr.forEach(t),yh=h(z),be=n(z,"DIV",{class:!0});var st=r(be);H(Za.$$.fragment,st),Eh=h(st),fs=n(st,"P",{});var jf=r(fs);wh=c(jf,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),jf.forEach(t),kh=h(st),H(bo.$$.fragment,st),Ah=h(st),H(vo.$$.fragment,st),xh=h(st),H($o.$$.fragment,st),st.forEach(t),Hh=h(z),se=n(z,"DIV",{class:!0});var pe=r(se);H(en.$$.fragment,pe),Dh=h(pe),ms=n(pe,"P",{});var Ff=r(ms);qh=c(Ff,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ff.forEach(t),Ih=h(pe),_s=n(pe,"P",{});var Tf=r(_s);Nh=c(Tf,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Tf.forEach(t),jh=h(pe),ue=n(pe,"P",{});var Pe=r(ue);Fh=c(Pe,"Use the "),bs=n(Pe,"CODE",{});var Pf=r(bs);Th=c(Pf,"allow_patterns"),Pf.forEach(t),Ph=c(Pe," and "),vs=n(Pe,"CODE",{});var Of=r(vs);Oh=c(Of,"ignore_patterns"),Of.forEach(t),Rh=c(Pe,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),tn=n(Pe,"A",{href:!0,rel:!0});var Rf=r(tn);Lh=c(Rf,"here"),Rf.forEach(t),Sh=c(Pe,`. If both
`),$s=n(Pe,"CODE",{});var Lf=r($s);Ch=c(Lf,"allow_patterns"),Lf.forEach(t),Mh=c(Pe," and "),ys=n(Pe,"CODE",{});var Sf=r(ys);Uh=c(Sf,"ignore_patterns"),Sf.forEach(t),Vh=c(Pe,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Pe.forEach(t),zh=h(pe),on=n(pe,"P",{});var Ic=r(on);Wh=c(Ic,"Uses "),Es=n(Ic,"CODE",{});var Cf=r(Es);Gh=c(Cf,"HfApi.create_commit"),Cf.forEach(t),Bh=c(Ic," under the hood."),Ic.forEach(t),Kh=h(pe),H(yo.$$.fragment,pe),Jh=h(pe),H(Eo.$$.fragment,pe),Qh=h(pe),H(wo.$$.fragment,pe),pe.forEach(t),Xh=h(z),ko=n(z,"DIV",{class:!0});var Nc=r(ko);H(an.$$.fragment,Nc),Yh=h(Nc),ws=n(Nc,"P",{});var Mf=r(ws);Zh=c(Mf,"Call HF API to know \u201Cwhoami\u201D."),Mf.forEach(t),Nc.forEach(t),z.forEach(t),Si=h(o),ht=n(o,"H3",{class:!0});var jc=r(ht);Ao=n(jc,"A",{id:!0,class:!0,href:!0});var Uf=r(Ao);ks=n(Uf,"SPAN",{});var Vf=r(ks);H(nn.$$.fragment,Vf),Vf.forEach(t),Uf.forEach(t),ed=h(jc),As=n(jc,"SPAN",{});var zf=r(As);td=c(zf,"ModelInfo"),zf.forEach(t),jc.forEach(t),Ci=h(o),dt=n(o,"DIV",{class:!0});var Fc=r(dt);H(rn.$$.fragment,Fc),od=h(Fc),xs=n(Fc,"P",{});var Wf=r(xs);ad=c(Wf,"Info about a model accessible from huggingface.co"),Wf.forEach(t),Fc.forEach(t),Mi=h(o),ut=n(o,"H3",{class:!0});var Tc=r(ut);xo=n(Tc,"A",{id:!0,class:!0,href:!0});var Gf=r(xo);Hs=n(Gf,"SPAN",{});var Bf=r(Hs);H(sn.$$.fragment,Bf),Bf.forEach(t),Gf.forEach(t),nd=h(Tc),Ds=n(Tc,"SPAN",{});var Kf=r(Ds);rd=c(Kf,"DatasetInfo"),Kf.forEach(t),Tc.forEach(t),Ui=h(o),ft=n(o,"DIV",{class:!0});var Pc=r(ft);H(cn.$$.fragment,Pc),sd=h(Pc),qs=n(Pc,"P",{});var Jf=r(qs);id=c(Jf,"Info about a dataset accessible from huggingface.co"),Jf.forEach(t),Pc.forEach(t),Vi=h(o),mt=n(o,"H3",{class:!0});var Oc=r(mt);Ho=n(Oc,"A",{id:!0,class:!0,href:!0});var Qf=r(Ho);Is=n(Qf,"SPAN",{});var Xf=r(Is);H(ln.$$.fragment,Xf),Xf.forEach(t),Qf.forEach(t),cd=h(Oc),Ns=n(Oc,"SPAN",{});var Yf=r(Ns);ld=c(Yf,"SpaceInfo"),Yf.forEach(t),Oc.forEach(t),zi=h(o),Re=n(o,"DIV",{class:!0});var _r=r(Re);H(pn.$$.fragment,_r),pd=h(_r),js=n(_r,"P",{});var Zf=r(js);gd=c(Zf,"Info about a Space accessible from huggingface.co"),Zf.forEach(t),hd=h(_r),Fs=n(_r,"P",{});var em=r(Fs);dd=c(em,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),em.forEach(t),_r.forEach(t),Wi=h(o),_t=n(o,"H3",{class:!0});var Rc=r(_t);Do=n(Rc,"A",{id:!0,class:!0,href:!0});var tm=r(Do);Ts=n(tm,"SPAN",{});var om=r(Ts);H(gn.$$.fragment,om),om.forEach(t),tm.forEach(t),ud=h(Rc),Ps=n(Rc,"SPAN",{});var am=r(Ps);fd=c(am,"RepoFile"),am.forEach(t),Rc.forEach(t),Gi=h(o),bt=n(o,"DIV",{class:!0});var Lc=r(bt);H(hn.$$.fragment,Lc),md=h(Lc),Os=n(Lc,"P",{});var nm=r(Os);_d=c(nm,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),nm.forEach(t),Lc.forEach(t),Bi=h(o),vt=n(o,"H3",{class:!0});var Sc=r(vt);qo=n(Sc,"A",{id:!0,class:!0,href:!0});var rm=r(qo);Rs=n(rm,"SPAN",{});var sm=r(Rs);H(dn.$$.fragment,sm),sm.forEach(t),rm.forEach(t),bd=h(Sc),Ls=n(Sc,"SPAN",{});var im=r(Ls);vd=c(im,"CommitInfo"),im.forEach(t),Sc.forEach(t),Ki=h(o),Le=n(o,"DIV",{class:!0});var br=r(Le);H(un.$$.fragment,br),$d=h(br),Ss=n(br,"P",{});var cm=r(Ss);yd=c(cm,"Data structure containing information about a newly created commit."),cm.forEach(t),Ed=h(br),fn=n(br,"P",{});var Cc=r(fn);wd=c(Cc,"Returned by "),nr=n(Cc,"A",{href:!0});var lm=r(nr);kd=c(lm,"create_commit()"),lm.forEach(t),Ad=c(Cc,"."),Cc.forEach(t),br.forEach(t),Ji=h(o),$t=n(o,"H2",{class:!0});var Mc=r($t);Io=n(Mc,"A",{id:!0,class:!0,href:!0});var pm=r(Io);Cs=n(pm,"SPAN",{});var gm=r(Cs);H(mn.$$.fragment,gm),gm.forEach(t),pm.forEach(t),xd=h(Mc),rr=n(Mc,"SPAN",{});var Uu=r(rr);Ms=n(Uu,"CODE",{});var hm=r(Ms);Hd=c(hm,"create_commit"),hm.forEach(t),Dd=c(Uu," API"),Uu.forEach(t),Mc.forEach(t),Qi=h(o),No=n(o,"P",{});var Uc=r(No);qd=c(Uc,"Below are the supported values for "),Us=n(Uc,"CODE",{});var dm=r(Us);Id=c(dm,"CommitOperation()"),dm.forEach(t),Nd=c(Uc,":"),Uc.forEach(t),Xi=h(o),$e=n(o,"DIV",{class:!0});var oa=r($e);H(_n.$$.fragment,oa),jd=h(oa),Vs=n(oa,"P",{});var um=r(Vs);Fd=c(um,"Data structure holding necessary info to upload a file to a repository on the Hub."),um.forEach(t),Td=h(oa),ot=n(oa,"DIV",{class:!0});var vr=r(ot);H(bn.$$.fragment,vr),Pd=h(vr),vn=n(vr,"P",{});var Vc=r(vn);Od=c(Vc,`A context manager that yields a file-like object allowing to read the underlying
data behind `),zs=n(Vc,"CODE",{});var fm=r(zs);Rd=c(fm,"path_or_fileobj"),fm.forEach(t),Ld=c(Vc,"."),Vc.forEach(t),Sd=h(vr),H(jo.$$.fragment,vr),vr.forEach(t),Cd=h(oa),at=n(oa,"DIV",{class:!0});var $r=r(at);H($n.$$.fragment,$r),Md=h($r),sr=n($r,"P",{});var Vu=r(sr);Ud=c(Vu,"The base64-encoded content of "),Ws=n(Vu,"CODE",{});var mm=r(Ws);Vd=c(mm,"path_or_fileobj"),mm.forEach(t),Vu.forEach(t),zd=h($r),ir=n($r,"P",{});var zu=r(ir);Wd=c(zu,"Returns: "),Gs=n(zu,"CODE",{});var _m=r(Gs);Gd=c(_m,"bytes"),_m.forEach(t),zu.forEach(t),$r.forEach(t),oa.forEach(t),Yi=h(o),yt=n(o,"DIV",{class:!0});var zc=r(yt);H(yn.$$.fragment,zc),Bd=h(zc),Bs=n(zc,"P",{});var bm=r(Bs);Kd=c(bm,`Data structure holding necessary info to delete a file or a folder from a repository
on the Hub.`),bm.forEach(t),zc.forEach(t),Zi=h(o),Et=n(o,"H2",{class:!0});var Wc=r(Et);Fo=n(Wc,"A",{id:!0,class:!0,href:!0});var vm=r(Fo);Ks=n(vm,"SPAN",{});var $m=r(Ks);H(En.$$.fragment,$m),$m.forEach(t),vm.forEach(t),Jd=h(Wc),Js=n(Wc,"SPAN",{});var ym=r(Js);Qd=c(ym,"Hugging Face local storage"),ym.forEach(t),Wc.forEach(t),ec=h(o),wn=n(o,"P",{});var Wu=r(wn);Qs=n(Wu,"CODE",{});var Em=r(Qs);Xd=c(Em,"huggingface_hub"),Em.forEach(t),Yd=c(Wu,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Wu.forEach(t),tc=h(o),To=n(o,"P",{});var Gc=r(To);Zd=c(Gc,"It does this using the "),cr=n(Gc,"A",{href:!0});var wm=r(cr);eu=c(wm,"HfFolder"),wm.forEach(t),tu=c(Gc," utility, which saves data at the root of the user."),Gc.forEach(t),oc=h(o),ye=n(o,"DIV",{class:!0});var aa=r(ye);H(kn.$$.fragment,aa),ou=h(aa),Po=n(aa,"DIV",{class:!0});var Bc=r(Po);H(An.$$.fragment,Bc),au=h(Bc),Xs=n(Bc,"P",{});var km=r(Xs);nu=c(km,"Deletes the token from storage. Does not fail if token does not exist."),km.forEach(t),Bc.forEach(t),ru=h(aa),nt=n(aa,"DIV",{class:!0});var yr=r(nt);H(xn.$$.fragment,yr),su=h(yr),Ys=n(yr,"P",{});var Am=r(Ys);iu=c(Am,"Get token or None if not existent."),Am.forEach(t),cu=h(yr),Hn=n(yr,"P",{});var Kc=r(Hn);lu=c(Kc,`Note that a token can be also provided using the
`),Zs=n(Kc,"CODE",{});var xm=r(Zs);pu=c(xm,"HUGGING_FACE_HUB_TOKEN"),xm.forEach(t),gu=c(Kc," environment variable."),Kc.forEach(t),yr.forEach(t),hu=h(aa),Oo=n(aa,"DIV",{class:!0});var Jc=r(Oo);H(Dn.$$.fragment,Jc),du=h(Jc),ei=n(Jc,"P",{});var Hm=r(ei);uu=c(Hm,"Save token, creating folder as needed."),Hm.forEach(t),Jc.forEach(t),aa.forEach(t),ac=h(o),wt=n(o,"H2",{class:!0});var Qc=r(wt);Ro=n(Qc,"A",{id:!0,class:!0,href:!0});var Dm=r(Ro);ti=n(Dm,"SPAN",{});var qm=r(ti);H(qn.$$.fragment,qm),qm.forEach(t),Dm.forEach(t),fu=h(Qc),oi=n(Qc,"SPAN",{});var Im=r(oi);mu=c(Im,"Filtering helpers"),Im.forEach(t),Qc.forEach(t),nc=h(o),Lo=n(o,"P",{});var Xc=r(Lo);_u=c(Xc,"Some helpers to filter repositories on the Hub are available in the "),ai=n(Xc,"CODE",{});var Nm=r(ai);bu=c(Nm,"huggingface_hub"),Nm.forEach(t),vu=c(Xc," package."),Xc.forEach(t),rc=h(o),kt=n(o,"H3",{class:!0});var Yc=r(kt);So=n(Yc,"A",{id:!0,class:!0,href:!0});var jm=r(So);ni=n(jm,"SPAN",{});var Fm=r(ni);H(In.$$.fragment,Fm),Fm.forEach(t),jm.forEach(t),$u=h(Yc),ri=n(Yc,"SPAN",{});var Tm=r(ri);yu=c(Tm,"DatasetFilter"),Tm.forEach(t),Yc.forEach(t),sc=h(o),Se=n(o,"DIV",{class:!0});var Er=r(Se);H(Nn.$$.fragment,Er),Eu=h(Er),si=n(Er,"P",{});var Pm=r(si);wu=c(Pm,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Pm.forEach(t),ku=h(Er),H(Co.$$.fragment,Er),Er.forEach(t),ic=h(o),At=n(o,"H3",{class:!0});var Zc=r(At);Mo=n(Zc,"A",{id:!0,class:!0,href:!0});var Om=r(Mo);ii=n(Om,"SPAN",{});var Rm=r(ii);H(jn.$$.fragment,Rm),Rm.forEach(t),Om.forEach(t),Au=h(Zc),ci=n(Zc,"SPAN",{});var Lm=r(ci);xu=c(Lm,"ModelFilter"),Lm.forEach(t),Zc.forEach(t),cc=h(o),Ce=n(o,"DIV",{class:!0});var wr=r(Ce);H(Fn.$$.fragment,wr),Hu=h(wr),li=n(wr,"P",{});var Sm=r(li);Du=c(Sm,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Sm.forEach(t),qu=h(wr),H(Uo.$$.fragment,wr),wr.forEach(t),lc=h(o),xt=n(o,"H3",{class:!0});var el=r(xt);Vo=n(el,"A",{id:!0,class:!0,href:!0});var Cm=r(Vo);pi=n(Cm,"SPAN",{});var Mm=r(pi);H(Tn.$$.fragment,Mm),Mm.forEach(t),Cm.forEach(t),Iu=h(el),gi=n(el,"SPAN",{});var Um=r(gi);Nu=c(Um,"DatasetSearchArguments"),Um.forEach(t),el.forEach(t),pc=h(o),Me=n(o,"DIV",{class:!0});var kr=r(Me);H(Pn.$$.fragment,kr),ju=h(kr),hi=n(kr,"P",{});var Vm=r(hi);Fu=c(Vm,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Vm.forEach(t),Tu=h(kr),H(zo.$$.fragment,kr),kr.forEach(t),gc=h(o),Ht=n(o,"H3",{class:!0});var tl=r(Ht);Wo=n(tl,"A",{id:!0,class:!0,href:!0});var zm=r(Wo);di=n(zm,"SPAN",{});var Wm=r(di);H(On.$$.fragment,Wm),Wm.forEach(t),zm.forEach(t),Pu=h(tl),ui=n(tl,"SPAN",{});var Gm=r(ui);Ou=c(Gm,"ModelSearchArguments"),Gm.forEach(t),tl.forEach(t),hc=h(o),Ue=n(o,"DIV",{class:!0});var Ar=r(Ue);H(Rn.$$.fragment,Ar),Ru=h(Ar),fi=n(Ar,"P",{});var Bm=r(fi);Lu=c(Bm,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Bm.forEach(t),Su=h(Ar),H(Go.$$.fragment,Ar),Ar.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(C_)),m(l,"id","hugging-face-hub-api"),m(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(l,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(de,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),m(pt,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),m(Dt,"id","huggingface_hub.HfApi"),m(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Dt,"href","#huggingface_hub.HfApi"),m(gt,"class","relative group"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Xn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(er,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tr,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ar,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ga,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Ga,"rel","nofollow"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(tn,"rel","nofollow"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ao,"id","huggingface_hub.hf_api.ModelInfo"),m(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ao,"href","#huggingface_hub.hf_api.ModelInfo"),m(ht,"class","relative group"),m(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","huggingface_hub.hf_api.DatasetInfo"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#huggingface_hub.hf_api.DatasetInfo"),m(ut,"class","relative group"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","huggingface_hub.hf_api.SpaceInfo"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#huggingface_hub.hf_api.SpaceInfo"),m(mt,"class","relative group"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","huggingface_hub.hf_api.RepoFile"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#huggingface_hub.hf_api.RepoFile"),m(_t,"class","relative group"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"id","huggingface_hub.CommitInfo"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#huggingface_hub.CommitInfo"),m(vt,"class","relative group"),m(nr,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.CommitOperationAdd"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.CommitOperationAdd"),m($t,"class","relative group"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.HfFolder"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.HfFolder"),m(Et,"class","relative group"),m(cr,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"id","filtering-helpers"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#filtering-helpers"),m(wt,"class","relative group"),m(So,"id","huggingface_hub.DatasetFilter"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#huggingface_hub.DatasetFilter"),m(kt,"class","relative group"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"id","huggingface_hub.ModelFilter"),m(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Mo,"href","#huggingface_hub.ModelFilter"),m(At,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","huggingface_hub.DatasetSearchArguments"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#huggingface_hub.DatasetSearchArguments"),m(xt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","huggingface_hub.ModelSearchArguments"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#huggingface_hub.ModelSearchArguments"),m(Ht,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,l),e(l,d),D(s,d,null),e(f,u),e(f,P),e(P,v),$(o,j,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,R,E),$(o,_,E),e(_,F),e(_,U),e(U,W),e(_,L),$(o,K,E),$(o,G,E),e(G,A),$(o,V,E),D(S,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,Q),e(Q,ee),e(te,ae),$(o,B,E),D(X,o,E),$(o,oe,E),$(o,ne,E),e(ne,Be),e(ne,de),e(de,it),e(ne,Ke),e(ne,Ee),e(Ee,ct),e(ne,lt),e(ne,pt),e(pt,Kn),e(ne,na),$(o,ra,E),D(Oe,o,E),$(o,sa,E),$(o,gt,E),e(gt,Dt),e(Dt,xr),D(ia,xr,null),e(gt,ol),e(gt,Hr),e(Hr,al),$(o,Li,E),$(o,C,E),D(ca,C,null),e(C,nl),e(C,we),D(la,we,null),e(we,rl),e(we,Dr),e(Dr,sl),e(we,il),D(qt,we,null),e(we,cl),D(It,we,null),e(C,ll),e(C,ke),D(pa,ke,null),e(ke,pl),e(ke,qr),e(qr,gl),e(ke,hl),D(Nt,ke,null),e(ke,dl),D(jt,ke,null),e(C,ul),e(C,Ft),D(ga,Ft,null),e(Ft,fl),e(Ft,ha),e(ha,ml),e(ha,Ir),e(Ir,_l),e(ha,bl),e(C,vl),e(C,Ae),D(da,Ae,null),e(Ae,$l),e(Ae,Nr),e(Nr,yl),e(Ae,El),D(Tt,Ae,null),e(Ae,wl),D(Pt,Ae,null),e(C,kl),e(C,ce),D(ua,ce,null),e(ce,Al),e(ce,jr),e(jr,xl),e(ce,Hl),e(ce,fa),e(fa,Dl),e(fa,Fr),e(Fr,ql),e(fa,Il),e(ce,Nl),e(ce,ma),e(ma,jl),e(ma,Jn),e(Jn,Fl),e(ma,Tl),e(ce,Pl),e(ce,Qn),e(Qn,Ol),e(Qn,Xn),e(Xn,Rl),e(ce,Ll),D(Ot,ce,null),e(C,Sl),e(C,le),D(_a,le,null),e(le,Cl),e(le,ba),e(ba,Ml),e(ba,Tr),e(Tr,Ul),e(ba,Vl),e(le,zl),e(le,va),e(va,Wl),e(va,Yn),e(Yn,Gl),e(va,Bl),e(le,Kl),e(le,$a),e($a,Jl),e($a,Pr),e(Pr,Ql),e($a,Xl),e(le,Yl),e(le,Zn),e(Zn,Zl),e(Zn,er),e(er,ep),e(le,tp),D(Rt,le,null),e(C,op),e(C,Lt),D(ya,Lt,null),e(Lt,ap),e(Lt,Or),e(Or,np),e(C,rp),e(C,St),D(Ea,St,null),e(St,sp),e(St,Rr),e(Rr,ip),e(C,cp),e(C,xe),D(wa,xe,null),e(xe,lp),e(xe,Lr),e(Lr,pp),e(xe,gp),e(xe,Sr),e(Sr,hp),e(xe,dp),D(Ct,xe,null),e(C,up),e(C,Mt),D(ka,Mt,null),e(Mt,fp),e(Mt,Cr),e(Cr,mp),e(C,_p),e(C,Je),D(Aa,Je,null),e(Je,bp),e(Je,Mr),e(Mr,vp),e(Je,$p),D(Ut,Je,null),e(C,yp),e(C,Qe),D(xa,Qe,null),e(Qe,Ep),e(Qe,Ur),e(Ur,wp),e(Qe,kp),e(Qe,Ha),e(Ha,Ap),e(Ha,tr),e(tr,xp),e(Ha,Hp),e(C,Dp),e(C,Xe),D(Da,Xe,null),e(Xe,qp),e(Xe,Vr),e(Vr,Ip),e(Xe,Np),D(Vt,Xe,null),e(C,jp),e(C,zt),D(qa,zt,null),e(zt,Fp),e(zt,zr),e(zr,Tp),e(C,Pp),e(C,Ye),D(Ia,Ye,null),e(Ye,Op),e(Ye,Wr),e(Wr,Rp),e(Ye,Lp),D(Wt,Ye,null),e(C,Sp),e(C,Gt),D(Na,Gt,null),e(Gt,Cp),e(Gt,Gr),e(Gr,Mp),e(C,Up),e(C,He),D(ja,He,null),e(He,Vp),e(He,Br),e(Br,zp),e(He,Wp),e(He,or),e(or,Gp),e(or,ar),e(ar,Bp),e(He,Kp),D(Bt,He,null),e(C,Jp),e(C,Kt),D(Fa,Kt,null),e(Kt,Qp),e(Kt,Kr),e(Kr,Xp),e(C,Yp),e(C,Jt),D(Ta,Jt,null),e(Jt,Zp),e(Jt,Jr),e(Jr,eg),e(C,tg),e(C,_e),D(Pa,_e,null),e(_e,og),e(_e,Qr),e(Qr,ag),e(_e,ng),e(_e,Xr),e(Xr,rg),e(_e,sg),D(Qt,_e,null),e(_e,ig),D(Xt,_e,null),e(C,cg),e(C,De),D(Oa,De,null),e(De,lg),e(De,Yr),e(Yr,pg),e(De,gg),D(Yt,De,null),e(De,hg),D(Zt,De,null),e(C,dg),e(C,qe),D(Ra,qe,null),e(qe,ug),e(qe,Zr),e(Zr,fg),e(qe,mg),D(eo,qe,null),e(qe,_g),D(to,qe,null),e(C,bg),e(C,oo),D(La,oo,null),e(oo,vg),e(oo,es),e(es,$g),e(C,yg),e(C,Ie),D(Sa,Ie,null),e(Ie,Eg),e(Ie,ts),e(ts,wg),e(Ie,kg),D(ao,Ie,null),e(Ie,Ag),D(no,Ie,null),e(C,xg),e(C,ro),D(Ca,ro,null),e(ro,Hg),e(ro,os),e(os,Dg),e(C,qg),e(C,so),D(Ma,so,null),e(so,Ig),e(so,as),e(as,Ng),e(C,jg),e(C,Ze),D(Ua,Ze,null),e(Ze,Fg),e(Ze,ns),e(ns,Tg),e(Ze,Pg),D(io,Ze,null),e(C,Og),e(C,Ne),D(Va,Ne,null),e(Ne,Rg),e(Ne,rs),e(rs,Lg),e(Ne,Sg),e(Ne,ss),e(ss,Cg),e(Ne,Mg),D(co,Ne,null),e(C,Ug),e(C,je),D(za,je,null),e(je,Vg),e(je,is),e(is,zg),e(je,Wg),e(je,Wa),e(Wa,Gg),e(Wa,Ga),e(Ga,Bg),e(Wa,Kg),e(je,Jg),D(lo,je,null),e(C,Qg),e(C,Fe),D(Ba,Fe,null),e(Fe,Xg),e(Fe,cs),e(cs,Yg),e(Fe,Zg),D(po,Fe,null),e(Fe,eh),D(go,Fe,null),e(C,th),e(C,et),D(Ka,et,null),e(et,oh),e(et,ls),e(ls,ah),e(et,nh),D(ho,et,null),e(C,rh),e(C,uo),D(Ja,uo,null),e(uo,sh),e(uo,ps),e(ps,ih),e(C,ch),e(C,Te),D(Qa,Te,null),e(Te,lh),e(Te,gs),e(gs,ph),e(Te,gh),e(Te,hs),e(hs,hh),e(Te,dh),D(fo,Te,null),e(C,uh),e(C,mo),D(Xa,mo,null),e(mo,fh),e(mo,ds),e(ds,mh),e(C,_h),e(C,tt),D(Ya,tt,null),e(tt,bh),e(tt,us),e(us,vh),e(tt,$h),D(_o,tt,null),e(C,yh),e(C,be),D(Za,be,null),e(be,Eh),e(be,fs),e(fs,wh),e(be,kh),D(bo,be,null),e(be,Ah),D(vo,be,null),e(be,xh),D($o,be,null),e(C,Hh),e(C,se),D(en,se,null),e(se,Dh),e(se,ms),e(ms,qh),e(se,Ih),e(se,_s),e(_s,Nh),e(se,jh),e(se,ue),e(ue,Fh),e(ue,bs),e(bs,Th),e(ue,Ph),e(ue,vs),e(vs,Oh),e(ue,Rh),e(ue,tn),e(tn,Lh),e(ue,Sh),e(ue,$s),e($s,Ch),e(ue,Mh),e(ue,ys),e(ys,Uh),e(ue,Vh),e(se,zh),e(se,on),e(on,Wh),e(on,Es),e(Es,Gh),e(on,Bh),e(se,Kh),D(yo,se,null),e(se,Jh),D(Eo,se,null),e(se,Qh),D(wo,se,null),e(C,Xh),e(C,ko),D(an,ko,null),e(ko,Yh),e(ko,ws),e(ws,Zh),$(o,Si,E),$(o,ht,E),e(ht,Ao),e(Ao,ks),D(nn,ks,null),e(ht,ed),e(ht,As),e(As,td),$(o,Ci,E),$(o,dt,E),D(rn,dt,null),e(dt,od),e(dt,xs),e(xs,ad),$(o,Mi,E),$(o,ut,E),e(ut,xo),e(xo,Hs),D(sn,Hs,null),e(ut,nd),e(ut,Ds),e(Ds,rd),$(o,Ui,E),$(o,ft,E),D(cn,ft,null),e(ft,sd),e(ft,qs),e(qs,id),$(o,Vi,E),$(o,mt,E),e(mt,Ho),e(Ho,Is),D(ln,Is,null),e(mt,cd),e(mt,Ns),e(Ns,ld),$(o,zi,E),$(o,Re,E),D(pn,Re,null),e(Re,pd),e(Re,js),e(js,gd),e(Re,hd),e(Re,Fs),e(Fs,dd),$(o,Wi,E),$(o,_t,E),e(_t,Do),e(Do,Ts),D(gn,Ts,null),e(_t,ud),e(_t,Ps),e(Ps,fd),$(o,Gi,E),$(o,bt,E),D(hn,bt,null),e(bt,md),e(bt,Os),e(Os,_d),$(o,Bi,E),$(o,vt,E),e(vt,qo),e(qo,Rs),D(dn,Rs,null),e(vt,bd),e(vt,Ls),e(Ls,vd),$(o,Ki,E),$(o,Le,E),D(un,Le,null),e(Le,$d),e(Le,Ss),e(Ss,yd),e(Le,Ed),e(Le,fn),e(fn,wd),e(fn,nr),e(nr,kd),e(fn,Ad),$(o,Ji,E),$(o,$t,E),e($t,Io),e(Io,Cs),D(mn,Cs,null),e($t,xd),e($t,rr),e(rr,Ms),e(Ms,Hd),e(rr,Dd),$(o,Qi,E),$(o,No,E),e(No,qd),e(No,Us),e(Us,Id),e(No,Nd),$(o,Xi,E),$(o,$e,E),D(_n,$e,null),e($e,jd),e($e,Vs),e(Vs,Fd),e($e,Td),e($e,ot),D(bn,ot,null),e(ot,Pd),e(ot,vn),e(vn,Od),e(vn,zs),e(zs,Rd),e(vn,Ld),e(ot,Sd),D(jo,ot,null),e($e,Cd),e($e,at),D($n,at,null),e(at,Md),e(at,sr),e(sr,Ud),e(sr,Ws),e(Ws,Vd),e(at,zd),e(at,ir),e(ir,Wd),e(ir,Gs),e(Gs,Gd),$(o,Yi,E),$(o,yt,E),D(yn,yt,null),e(yt,Bd),e(yt,Bs),e(Bs,Kd),$(o,Zi,E),$(o,Et,E),e(Et,Fo),e(Fo,Ks),D(En,Ks,null),e(Et,Jd),e(Et,Js),e(Js,Qd),$(o,ec,E),$(o,wn,E),e(wn,Qs),e(Qs,Xd),e(wn,Yd),$(o,tc,E),$(o,To,E),e(To,Zd),e(To,cr),e(cr,eu),e(To,tu),$(o,oc,E),$(o,ye,E),D(kn,ye,null),e(ye,ou),e(ye,Po),D(An,Po,null),e(Po,au),e(Po,Xs),e(Xs,nu),e(ye,ru),e(ye,nt),D(xn,nt,null),e(nt,su),e(nt,Ys),e(Ys,iu),e(nt,cu),e(nt,Hn),e(Hn,lu),e(Hn,Zs),e(Zs,pu),e(Hn,gu),e(ye,hu),e(ye,Oo),D(Dn,Oo,null),e(Oo,du),e(Oo,ei),e(ei,uu),$(o,ac,E),$(o,wt,E),e(wt,Ro),e(Ro,ti),D(qn,ti,null),e(wt,fu),e(wt,oi),e(oi,mu),$(o,nc,E),$(o,Lo,E),e(Lo,_u),e(Lo,ai),e(ai,bu),e(Lo,vu),$(o,rc,E),$(o,kt,E),e(kt,So),e(So,ni),D(In,ni,null),e(kt,$u),e(kt,ri),e(ri,yu),$(o,sc,E),$(o,Se,E),D(Nn,Se,null),e(Se,Eu),e(Se,si),e(si,wu),e(Se,ku),D(Co,Se,null),$(o,ic,E),$(o,At,E),e(At,Mo),e(Mo,ii),D(jn,ii,null),e(At,Au),e(At,ci),e(ci,xu),$(o,cc,E),$(o,Ce,E),D(Fn,Ce,null),e(Ce,Hu),e(Ce,li),e(li,Du),e(Ce,qu),D(Uo,Ce,null),$(o,lc,E),$(o,xt,E),e(xt,Vo),e(Vo,pi),D(Tn,pi,null),e(xt,Iu),e(xt,gi),e(gi,Nu),$(o,pc,E),$(o,Me,E),D(Pn,Me,null),e(Me,ju),e(Me,hi),e(hi,Fu),e(Me,Tu),D(zo,Me,null),$(o,gc,E),$(o,Ht,E),e(Ht,Wo),e(Wo,di),D(On,di,null),e(Ht,Pu),e(Ht,ui),e(ui,Ou),$(o,hc,E),$(o,Ue,E),D(Rn,Ue,null),e(Ue,Ru),e(Ue,fi),e(fi,Lu),e(Ue,Su),D(Go,Ue,null),dc=!0},p(o,[E]){const Ln={};E&2&&(Ln.$$scope={dirty:E,ctx:o}),qt.$set(Ln);const mi={};E&2&&(mi.$$scope={dirty:E,ctx:o}),It.$set(mi);const _i={};E&2&&(_i.$$scope={dirty:E,ctx:o}),Nt.$set(_i);const bi={};E&2&&(bi.$$scope={dirty:E,ctx:o}),jt.$set(bi);const Sn={};E&2&&(Sn.$$scope={dirty:E,ctx:o}),Tt.$set(Sn);const vi={};E&2&&(vi.$$scope={dirty:E,ctx:o}),Pt.$set(vi);const Cn={};E&2&&(Cn.$$scope={dirty:E,ctx:o}),Ot.$set(Cn);const $i={};E&2&&($i.$$scope={dirty:E,ctx:o}),Rt.$set($i);const yi={};E&2&&(yi.$$scope={dirty:E,ctx:o}),Ct.$set(yi);const Mn={};E&2&&(Mn.$$scope={dirty:E,ctx:o}),Ut.$set(Mn);const Ei={};E&2&&(Ei.$$scope={dirty:E,ctx:o}),Vt.$set(Ei);const Ve={};E&2&&(Ve.$$scope={dirty:E,ctx:o}),Wt.$set(Ve);const wi={};E&2&&(wi.$$scope={dirty:E,ctx:o}),Bt.$set(wi);const ki={};E&2&&(ki.$$scope={dirty:E,ctx:o}),Qt.$set(ki);const Ai={};E&2&&(Ai.$$scope={dirty:E,ctx:o}),Xt.$set(Ai);const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),Yt.$set(Un);const xi={};E&2&&(xi.$$scope={dirty:E,ctx:o}),Zt.$set(xi);const Hi={};E&2&&(Hi.$$scope={dirty:E,ctx:o}),eo.$set(Hi);const Di={};E&2&&(Di.$$scope={dirty:E,ctx:o}),to.$set(Di);const z={};E&2&&(z.$$scope={dirty:E,ctx:o}),ao.$set(z);const ze={};E&2&&(ze.$$scope={dirty:E,ctx:o}),no.$set(ze);const qi={};E&2&&(qi.$$scope={dirty:E,ctx:o}),io.$set(qi);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),co.$set(We);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),lo.$set(Ii);const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),po.$set(Vn);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),go.$set(zn);const Ni={};E&2&&(Ni.$$scope={dirty:E,ctx:o}),ho.$set(Ni);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),fo.$set(Ge);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),_o.$set(ji);const fe={};E&2&&(fe.$$scope={dirty:E,ctx:o}),bo.$set(fe);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),vo.$set(Fi);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),$o.$set(Wn);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),yo.$set(Ti);const Gn={};E&2&&(Gn.$$scope={dirty:E,ctx:o}),Eo.$set(Gn);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),wo.$set(Pi);const lr={};E&2&&(lr.$$scope={dirty:E,ctx:o}),jo.$set(lr);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),Co.$set(Oi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),Uo.$set(me);const Bn={};E&2&&(Bn.$$scope={dirty:E,ctx:o}),zo.$set(Bn);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),Go.$set(Ri)},i(o){dc||(q(s.$$.fragment,o),q(S.$$.fragment,o),q(X.$$.fragment,o),q(Oe.$$.fragment,o),q(ia.$$.fragment,o),q(ca.$$.fragment,o),q(la.$$.fragment,o),q(qt.$$.fragment,o),q(It.$$.fragment,o),q(pa.$$.fragment,o),q(Nt.$$.fragment,o),q(jt.$$.fragment,o),q(ga.$$.fragment,o),q(da.$$.fragment,o),q(Tt.$$.fragment,o),q(Pt.$$.fragment,o),q(ua.$$.fragment,o),q(Ot.$$.fragment,o),q(_a.$$.fragment,o),q(Rt.$$.fragment,o),q(ya.$$.fragment,o),q(Ea.$$.fragment,o),q(wa.$$.fragment,o),q(Ct.$$.fragment,o),q(ka.$$.fragment,o),q(Aa.$$.fragment,o),q(Ut.$$.fragment,o),q(xa.$$.fragment,o),q(Da.$$.fragment,o),q(Vt.$$.fragment,o),q(qa.$$.fragment,o),q(Ia.$$.fragment,o),q(Wt.$$.fragment,o),q(Na.$$.fragment,o),q(ja.$$.fragment,o),q(Bt.$$.fragment,o),q(Fa.$$.fragment,o),q(Ta.$$.fragment,o),q(Pa.$$.fragment,o),q(Qt.$$.fragment,o),q(Xt.$$.fragment,o),q(Oa.$$.fragment,o),q(Yt.$$.fragment,o),q(Zt.$$.fragment,o),q(Ra.$$.fragment,o),q(eo.$$.fragment,o),q(to.$$.fragment,o),q(La.$$.fragment,o),q(Sa.$$.fragment,o),q(ao.$$.fragment,o),q(no.$$.fragment,o),q(Ca.$$.fragment,o),q(Ma.$$.fragment,o),q(Ua.$$.fragment,o),q(io.$$.fragment,o),q(Va.$$.fragment,o),q(co.$$.fragment,o),q(za.$$.fragment,o),q(lo.$$.fragment,o),q(Ba.$$.fragment,o),q(po.$$.fragment,o),q(go.$$.fragment,o),q(Ka.$$.fragment,o),q(ho.$$.fragment,o),q(Ja.$$.fragment,o),q(Qa.$$.fragment,o),q(fo.$$.fragment,o),q(Xa.$$.fragment,o),q(Ya.$$.fragment,o),q(_o.$$.fragment,o),q(Za.$$.fragment,o),q(bo.$$.fragment,o),q(vo.$$.fragment,o),q($o.$$.fragment,o),q(en.$$.fragment,o),q(yo.$$.fragment,o),q(Eo.$$.fragment,o),q(wo.$$.fragment,o),q(an.$$.fragment,o),q(nn.$$.fragment,o),q(rn.$$.fragment,o),q(sn.$$.fragment,o),q(cn.$$.fragment,o),q(ln.$$.fragment,o),q(pn.$$.fragment,o),q(gn.$$.fragment,o),q(hn.$$.fragment,o),q(dn.$$.fragment,o),q(un.$$.fragment,o),q(mn.$$.fragment,o),q(_n.$$.fragment,o),q(bn.$$.fragment,o),q(jo.$$.fragment,o),q($n.$$.fragment,o),q(yn.$$.fragment,o),q(En.$$.fragment,o),q(kn.$$.fragment,o),q(An.$$.fragment,o),q(xn.$$.fragment,o),q(Dn.$$.fragment,o),q(qn.$$.fragment,o),q(In.$$.fragment,o),q(Nn.$$.fragment,o),q(Co.$$.fragment,o),q(jn.$$.fragment,o),q(Fn.$$.fragment,o),q(Uo.$$.fragment,o),q(Tn.$$.fragment,o),q(Pn.$$.fragment,o),q(zo.$$.fragment,o),q(On.$$.fragment,o),q(Rn.$$.fragment,o),q(Go.$$.fragment,o),dc=!0)},o(o){I(s.$$.fragment,o),I(S.$$.fragment,o),I(X.$$.fragment,o),I(Oe.$$.fragment,o),I(ia.$$.fragment,o),I(ca.$$.fragment,o),I(la.$$.fragment,o),I(qt.$$.fragment,o),I(It.$$.fragment,o),I(pa.$$.fragment,o),I(Nt.$$.fragment,o),I(jt.$$.fragment,o),I(ga.$$.fragment,o),I(da.$$.fragment,o),I(Tt.$$.fragment,o),I(Pt.$$.fragment,o),I(ua.$$.fragment,o),I(Ot.$$.fragment,o),I(_a.$$.fragment,o),I(Rt.$$.fragment,o),I(ya.$$.fragment,o),I(Ea.$$.fragment,o),I(wa.$$.fragment,o),I(Ct.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(Ut.$$.fragment,o),I(xa.$$.fragment,o),I(Da.$$.fragment,o),I(Vt.$$.fragment,o),I(qa.$$.fragment,o),I(Ia.$$.fragment,o),I(Wt.$$.fragment,o),I(Na.$$.fragment,o),I(ja.$$.fragment,o),I(Bt.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(Pa.$$.fragment,o),I(Qt.$$.fragment,o),I(Xt.$$.fragment,o),I(Oa.$$.fragment,o),I(Yt.$$.fragment,o),I(Zt.$$.fragment,o),I(Ra.$$.fragment,o),I(eo.$$.fragment,o),I(to.$$.fragment,o),I(La.$$.fragment,o),I(Sa.$$.fragment,o),I(ao.$$.fragment,o),I(no.$$.fragment,o),I(Ca.$$.fragment,o),I(Ma.$$.fragment,o),I(Ua.$$.fragment,o),I(io.$$.fragment,o),I(Va.$$.fragment,o),I(co.$$.fragment,o),I(za.$$.fragment,o),I(lo.$$.fragment,o),I(Ba.$$.fragment,o),I(po.$$.fragment,o),I(go.$$.fragment,o),I(Ka.$$.fragment,o),I(ho.$$.fragment,o),I(Ja.$$.fragment,o),I(Qa.$$.fragment,o),I(fo.$$.fragment,o),I(Xa.$$.fragment,o),I(Ya.$$.fragment,o),I(_o.$$.fragment,o),I(Za.$$.fragment,o),I(bo.$$.fragment,o),I(vo.$$.fragment,o),I($o.$$.fragment,o),I(en.$$.fragment,o),I(yo.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(rn.$$.fragment,o),I(sn.$$.fragment,o),I(cn.$$.fragment,o),I(ln.$$.fragment,o),I(pn.$$.fragment,o),I(gn.$$.fragment,o),I(hn.$$.fragment,o),I(dn.$$.fragment,o),I(un.$$.fragment,o),I(mn.$$.fragment,o),I(_n.$$.fragment,o),I(bn.$$.fragment,o),I(jo.$$.fragment,o),I($n.$$.fragment,o),I(yn.$$.fragment,o),I(En.$$.fragment,o),I(kn.$$.fragment,o),I(An.$$.fragment,o),I(xn.$$.fragment,o),I(Dn.$$.fragment,o),I(qn.$$.fragment,o),I(In.$$.fragment,o),I(Nn.$$.fragment,o),I(Co.$$.fragment,o),I(jn.$$.fragment,o),I(Fn.$$.fragment,o),I(Uo.$$.fragment,o),I(Tn.$$.fragment,o),I(Pn.$$.fragment,o),I(zo.$$.fragment,o),I(On.$$.fragment,o),I(Rn.$$.fragment,o),I(Go.$$.fragment,o),dc=!1},d(o){t(p),o&&t(b),o&&t(f),N(s),o&&t(j),o&&t(w),o&&t(R),o&&t(_),o&&t(K),o&&t(G),o&&t(V),N(S,o),o&&t(Y),o&&t(te),o&&t(B),N(X,o),o&&t(oe),o&&t(ne),o&&t(ra),N(Oe,o),o&&t(sa),o&&t(gt),N(ia),o&&t(Li),o&&t(C),N(ca),N(la),N(qt),N(It),N(pa),N(Nt),N(jt),N(ga),N(da),N(Tt),N(Pt),N(ua),N(Ot),N(_a),N(Rt),N(ya),N(Ea),N(wa),N(Ct),N(ka),N(Aa),N(Ut),N(xa),N(Da),N(Vt),N(qa),N(Ia),N(Wt),N(Na),N(ja),N(Bt),N(Fa),N(Ta),N(Pa),N(Qt),N(Xt),N(Oa),N(Yt),N(Zt),N(Ra),N(eo),N(to),N(La),N(Sa),N(ao),N(no),N(Ca),N(Ma),N(Ua),N(io),N(Va),N(co),N(za),N(lo),N(Ba),N(po),N(go),N(Ka),N(ho),N(Ja),N(Qa),N(fo),N(Xa),N(Ya),N(_o),N(Za),N(bo),N(vo),N($o),N(en),N(yo),N(Eo),N(wo),N(an),o&&t(Si),o&&t(ht),N(nn),o&&t(Ci),o&&t(dt),N(rn),o&&t(Mi),o&&t(ut),N(sn),o&&t(Ui),o&&t(ft),N(cn),o&&t(Vi),o&&t(mt),N(ln),o&&t(zi),o&&t(Re),N(pn),o&&t(Wi),o&&t(_t),N(gn),o&&t(Gi),o&&t(bt),N(hn),o&&t(Bi),o&&t(vt),N(dn),o&&t(Ki),o&&t(Le),N(un),o&&t(Ji),o&&t($t),N(mn),o&&t(Qi),o&&t(No),o&&t(Xi),o&&t($e),N(_n),N(bn),N(jo),N($n),o&&t(Yi),o&&t(yt),N(yn),o&&t(Zi),o&&t(Et),N(En),o&&t(ec),o&&t(wn),o&&t(tc),o&&t(To),o&&t(oc),o&&t(ye),N(kn),N(An),N(xn),N(Dn),o&&t(ac),o&&t(wt),N(qn),o&&t(nc),o&&t(Lo),o&&t(rc),o&&t(kt),N(In),o&&t(sc),o&&t(Se),N(Nn),N(Co),o&&t(ic),o&&t(At),N(jn),o&&t(cc),o&&t(Ce),N(Fn),N(Uo),o&&t(lc),o&&t(xt),N(Tn),o&&t(pc),o&&t(Me),N(Pn),N(zo),o&&t(gc),o&&t(Ht),N(On),o&&t(hc),o&&t(Ue),N(Rn),N(Go)}}}const C_={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function M_(M){return Ym(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class K_ extends Km{constructor(p){super();Jm(this,p,M_,S_,Qm,{})}}export{K_ as default,C_ as metadata};
