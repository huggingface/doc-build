import{S as b_,i as v_,s as $_,e as a,k as g,w as D,t as r,M as y_,c as n,d as t,m as h,a as s,x as H,h as i,b as m,G as e,g as $,y as q,q as I,o as j,B as N,v as E_,L as he}from"../../chunks/vendor-hf-doc-builder.js";import{T as ne}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ke}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function w_(U){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function k_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function A_(U){let p,b,f,c,d;return c=new ie({props:{code:`
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function x_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function D_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"create_commit"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function H_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function q_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function I_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var V=s(d);l=n(V,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(V,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(V," and you do not have access."),V.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function j_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(X),c=n(X,"UL",{});var se=s(c);d=n(se,"LI",{});var Be=s(d);l=n(Be,"A",{href:!0,rel:!0});var be=s(l);u=n(be,"CODE",{});var ht=s(u);P=i(ht,"HTTPError"),ht.forEach(t),be.forEach(t),v=i(Be,`
if the HuggingFace API returned an error`),Be.forEach(t),x=h(se),w=n(se,"LI",{});var Ke=s(w);y=n(Ke,"A",{href:!0,rel:!0});var Re=s(y);k=n(Re,"CODE",{});var de=s(k);O=i(de,"ValueError"),de.forEach(t),Re.forEach(t),T=i(Ke,`
if some parameter value is invalid`),Ke.forEach(t),L=h(se),_=n(se,"LI",{});var ve=s(_);F=n(ve,"A",{href:!0});var Nt=s(F);S=i(Nt,"RepositoryNotFoundError"),Nt.forEach(t),V=i(ve,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(ve,"CODE",{});var Je=s(R);K=i(Je,"private"),Je.forEach(t),G=i(ve," and you do not have access."),ve.forEach(t),A=h(se),M=n(se,"LI",{});var aa=s(M);C=n(aa,"A",{href:!0});var Ft=s(C);Y=i(Ft,"RevisionNotFoundError"),Ft.forEach(t),te=i(aa,`
If the revision to download from cannot be found.`),aa.forEach(t),Z=h(se),J=n(se,"LI",{});var na=s(J);ee=n(na,"A",{href:!0});var sa=s(ee);ae=i(sa,"EntryNotFoundError"),sa.forEach(t),B=i(na,`
If the file to download cannot be found.`),na.forEach(t),se.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),m(ee,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){$(X,p,oe),e(p,b),$(X,f,oe),$(X,c,oe),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function N_(U){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function F_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function T_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function P_(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=r("Collecting all discussions of a repo in a list:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function O_(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=r("Iterating over discussions of a repo:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function L_(U){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=i(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){$(b,p,f)},d(b){b&&t(p)}}}function R_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function C_(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function S_(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function M_(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"filter"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function U_(U){let p,b,f,c,d,l,u,P;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),D(u.$$.fragment)},l(v){p=n(v,"P",{});var x=s(p);b=i(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=i(w,"search"),w.forEach(t),d=i(x," argument:"),x.forEach(t),l=h(v),H(u.$$.fragment,v)},m(v,x){$(v,p,x),e(p,b),e(p,f),e(f,c),e(p,d),$(v,l,x),q(u,v,x),P=!0},p:he,i(v){P||(I(u.$$.fragment,v),P=!0)},o(v){j(u.$$.fragment,v),P=!1},d(v){v&&t(p),v&&t(l),N(u,v)}}}function V_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function z_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var V=s(d);l=n(V,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(V,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(V," and you do not have access."),V.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function W_(U){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function G_(U){let p,b,f,c,d;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function B_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=n(A,"P",{});var M=s(p);b=i(M,"Raises the following errors:"),M.forEach(t),f=h(A),c=n(A,"UL",{});var C=s(c);d=n(C,"LI",{});var Y=s(d);l=n(Y,"A",{href:!0,rel:!0});var te=s(l);u=n(te,"CODE",{});var Z=s(u);P=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),v=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=h(C),w=n(C,"LI",{});var J=s(w);y=n(J,"A",{href:!0,rel:!0});var ee=s(y);k=n(ee,"CODE",{});var ae=s(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),T=i(J,`
if some parameter value is invalid`),J.forEach(t),L=h(C),_=n(C,"LI",{});var B=s(_);F=n(B,"A",{href:!0});var X=s(F);S=i(X,"RepositoryNotFoundError"),X.forEach(t),V=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){$(A,p,M),e(p,b),$(A,f,M),$(A,c,M),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function K_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var V=s(d);l=n(V,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(V,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(V," and you do not have access."),V.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function J_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),y=g(),k=a("li"),O=a("a"),T=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var F=s(p);b=i(F,"Raises the following errors:"),F.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var V=s(d);l=n(V,"A",{href:!0});var R=s(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),P=i(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(V,"CODE",{});var K=s(v);x=i(K,"private"),K.forEach(t),w=i(V," and you do not have access."),V.forEach(t),y=h(S),k=n(S,"LI",{});var G=s(k);O=n(G,"A",{href:!0});var A=s(O);T=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(O,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,F){$(_,p,F),e(p,b),$(_,f,F),$(_,c,F),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w),e(c,y),e(c,k),e(k,O),e(O,T),e(k,L)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Q_(U){let p,b,f,c,d,l,u,P,v,x,w;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),P=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=a("code"),x=r("private"),w=r(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var k=s(p);b=i(k,"Raises the following errors:"),k.forEach(t),f=h(y),c=n(y,"UL",{});var O=s(c);d=n(O,"LI",{});var T=s(d);l=n(T,"A",{href:!0});var L=s(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),P=i(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),v=n(T,"CODE",{});var _=s(v);x=i(_,"private"),_.forEach(t),w=i(T," and you do not have access."),T.forEach(t),O.forEach(t),this.h()},h(){m(l,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,k){$(y,p,k),e(p,b),$(y,f,k),$(y,c,k),e(c,d),e(d,l),e(l,u),e(d,P),e(d,v),e(v,x),e(d,w)},d(y){y&&t(p),y&&t(f),y&&t(c)}}}function X_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G,A,M,C,Y,te;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),L=g(),_=a("li"),F=a("a"),S=r("RepositoryNotFoundError"),V=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=a("li"),C=a("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=i(J,"Raises the following errors:"),J.forEach(t),f=h(Z),c=n(Z,"UL",{});var ee=s(c);d=n(ee,"LI",{});var ae=s(d);l=n(ae,"A",{href:!0,rel:!0});var B=s(l);u=n(B,"CODE",{});var X=s(u);P=i(X,"HTTPError"),X.forEach(t),B.forEach(t),v=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(ee),w=n(ee,"LI",{});var oe=s(w);y=n(oe,"A",{href:!0,rel:!0});var se=s(y);k=n(se,"CODE",{});var Be=s(k);O=i(Be,"ValueError"),Be.forEach(t),se.forEach(t),T=i(oe,`
if some parameter value is invalid`),oe.forEach(t),L=h(ee),_=n(ee,"LI",{});var be=s(_);F=n(be,"A",{href:!0});var ht=s(F);S=i(ht,"RepositoryNotFoundError"),ht.forEach(t),V=i(be,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(be,"CODE",{});var Ke=s(R);K=i(Ke,"private"),Ke.forEach(t),G=i(be," and you do not have access."),be.forEach(t),A=h(ee),M=n(ee,"LI",{});var Re=s(M);C=n(Re,"A",{href:!0});var de=s(C);Y=i(de,"RevisionNotFoundError"),de.forEach(t),te=i(Re,`
If the revision to download from cannot be found.`),Re.forEach(t),ee.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow"),m(F,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),m(C,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){$(Z,p,J),e(p,b),$(Z,f,J),$(Z,c,J),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T),e(c,L),e(c,_),e(_,F),e(F,S),e(_,V),e(_,R),e(R,K),e(_,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function Y_(U){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_file"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function Z_(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function eb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T;return{c(){p=a("p"),b=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),P=r("HTTPError"),v=r(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),y=a("a"),k=a("code"),O=r("ValueError"),T=r(`
if some parameter value is invalid`),this.h()},l(L){p=n(L,"P",{});var _=s(p);b=i(_,"Raises the following errors:"),_.forEach(t),f=h(L),c=n(L,"UL",{});var F=s(c);d=n(F,"LI",{});var S=s(d);l=n(S,"A",{href:!0,rel:!0});var V=s(l);u=n(V,"CODE",{});var R=s(u);P=i(R,"HTTPError"),R.forEach(t),V.forEach(t),v=i(S,`
if the HuggingFace API returned an error`),S.forEach(t),x=h(F),w=n(F,"LI",{});var K=s(w);y=n(K,"A",{href:!0,rel:!0});var G=s(y);k=n(G,"CODE",{});var A=s(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),T=i(K,`
if some parameter value is invalid`),K.forEach(t),F.forEach(t),this.h()},h(){m(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),m(l,"rel","nofollow"),m(y,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),m(y,"rel","nofollow")},m(L,_){$(L,p,_),e(p,b),$(L,f,_),$(L,c,_),e(c,d),e(d,l),e(l,u),e(u,P),e(d,v),e(c,x),e(c,w),e(w,y),e(y,k),e(k,O),e(w,T)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function tb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k;return{c(){p=a("p"),b=a("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=a("code"),l=r("repo_id"),u=r(` and
`),P=a("code"),v=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),w=a("a"),y=r("create_repo()"),k=r("."),this.h()},l(O){p=n(O,"P",{});var T=s(p);b=n(T,"CODE",{});var L=s(b);f=i(L,"upload_folder"),L.forEach(t),c=i(T,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),d=n(T,"CODE",{});var _=s(d);l=i(_,"repo_id"),_.forEach(t),u=i(T,` and
`),P=n(T,"CODE",{});var F=s(P);v=i(F,"repo_type"),F.forEach(t),x=i(T,` are set correctly. If repo does not exist, create it first using
`),w=n(T,"A",{href:!0});var S=s(w);y=i(S,"create_repo()"),S.forEach(t),k=i(T,"."),T.forEach(t),this.h()},h(){m(w,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,T){$(O,p,T),e(p,b),e(b,f),e(p,c),e(p,d),e(d,l),e(p,u),e(p,P),e(P,v),e(p,x),e(p,w),e(w,y),e(p,k)},d(O){O&&t(p)}}}function ob(U){let p,b,f,c,d;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function ab(U){let p,b,f,c,d;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function nb(U){let p,b,f,c,d;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=r("Examples:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Examples:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function sb(U){let p,b;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){H(p.$$.fragment,f)},m(f,c){q(p,f,c),b=!0},p:he,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){j(p.$$.fragment,f),b=!1},d(f){N(p,f)}}}function rb(U){let p,b,f,c,d;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function ib(U){let p,b,f,c,d;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=r("Example:"),f=g(),D(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);b=i(u,"Example:"),u.forEach(t),f=h(l),H(c.$$.fragment,l)},m(l,u){$(l,p,u),e(p,b),$(l,f,u),q(c,l,u),d=!0},p:he,i(l){d||(I(c.$$.fragment,l),d=!0)},o(l){j(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),N(c,l)}}}function lb(U){let p,b,f,c,d,l,u,P,v,x,w,y,k,O,T,L,_,F,S,V,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B,X,oe,se,Be,be,ht,Ke,Re,de,ve,Nt,Je,aa,Ft,na,sa,z,ra,ac,xe,ia,nc,As,sc,rc,Tt,ic,Pt,lc,De,la,cc,xs,pc,gc,Ot,hc,Lt,dc,Qe,ca,uc,Ds,fc,mc,Rt,_c,le,pa,bc,Hs,vc,$c,ga,yc,qs,Ec,wc,kc,ha,Ac,Kn,xc,Dc,Hc,Jn,qc,Qn,Ic,jc,Ct,Nc,ce,da,Fc,ua,Tc,Is,Pc,Oc,Lc,fa,Rc,Xn,Cc,Sc,Mc,ma,Uc,js,Vc,zc,Wc,Yn,Gc,Zn,Bc,Kc,St,Jc,Mt,_a,Qc,Ns,Xc,Yc,He,ba,Zc,Fs,ep,tp,Ts,op,ap,Ut,np,Xe,va,sp,Ps,rp,ip,Vt,lp,Ye,$a,cp,Os,pp,gp,zt,hp,Ze,ya,dp,Ls,up,fp,Wt,mp,Gt,Ea,_p,Rs,bp,vp,qe,wa,$p,Cs,yp,Ep,es,wp,ts,kp,Ap,Bt,xp,Kt,ka,Dp,Ss,Hp,qp,Jt,Aa,Ip,Ms,jp,Np,$e,xa,Fp,Us,Tp,Pp,Vs,Op,Lp,Qt,Rp,Xt,Cp,Ie,Da,Sp,zs,Mp,Up,Yt,Vp,Zt,zp,je,Ha,Wp,Ws,Gp,Bp,eo,Kp,to,Jp,oo,qa,Qp,Gs,Xp,Yp,ye,Ia,Zp,Bs,eg,tg,ja,og,os,ag,ng,sg,ao,rg,no,ig,so,Na,lg,Ks,cg,pg,ro,Fa,gg,Js,hg,dg,et,Ta,ug,Qs,fg,mg,io,_g,Ne,Pa,bg,Xs,vg,$g,Ys,yg,Eg,lo,wg,Fe,Oa,kg,Zs,Ag,xg,La,Dg,Ra,Hg,qg,Ig,co,jg,Te,Ca,Ng,er,Fg,Tg,po,Pg,go,Og,tt,Sa,Lg,tr,Rg,Cg,ho,Sg,uo,Ma,Mg,or,Ug,Vg,Pe,Ua,zg,ar,Wg,Gg,nr,Bg,Kg,fo,Jg,mo,Va,Qg,sr,Xg,Yg,ot,za,Zg,rr,eh,th,_o,oh,Ee,Wa,ah,ir,nh,sh,bo,rh,vo,ih,$o,lh,re,Ga,ch,lr,ph,gh,cr,hh,dh,ue,uh,pr,fh,mh,gr,_h,bh,Ba,vh,$h,hr,yh,Eh,dr,wh,kh,Ah,Ka,xh,ur,Dh,Hh,qh,yo,Ih,Eo,jh,wo,Nh,ko,Ja,Fh,fr,Th,Mi,dt,Ao,mr,Qa,Ph,_r,Oh,Ui,ut,Xa,Lh,br,Rh,Vi,ft,xo,vr,Ya,Ch,$r,Sh,zi,mt,Za,Mh,yr,Uh,Wi,_t,Do,Er,en,Vh,wr,zh,Gi,Ce,tn,Wh,kr,Gh,Bh,Ar,Kh,Bi,bt,Ho,xr,on,Jh,Dr,Qh,Ki,vt,an,Xh,Hr,Yh,Ji,$t,qo,qr,nn,Zh,Ir,ed,Qi,Se,sn,td,jr,od,ad,rn,nd,as,sd,rd,Xi,yt,Io,Nr,ln,id,ns,Fr,ld,cd,Yi,jo,pd,Tr,gd,hd,Zi,fe,cn,dd,Pr,ud,fd,we,pn,md,gn,_d,Or,bd,vd,$d,hn,yd,Lr,Ed,wd,kd,dn,Ad,Rr,xd,Dd,Hd,No,qd,at,un,Id,ss,jd,Cr,Nd,Fd,rs,Td,Sr,Pd,Od,Oe,fn,Ld,mn,Rd,Mr,Cd,Sd,Md,Et,nt,Ud,Ur,Vd,zd,Vr,Wd,Gd,zr,Bd,Kd,_n,Jd,Wr,Qd,Xd,Yd,st,Zd,Gr,eu,tu,Br,ou,au,Kr,nu,su,wt,ru,Jr,iu,lu,Qr,cu,pu,el,kt,bn,gu,Xr,hu,tl,At,Fo,Yr,vn,du,Zr,uu,ol,$n,ei,fu,mu,al,To,_u,is,bu,vu,nl,Ae,yn,$u,Po,En,yu,ti,Eu,wu,rt,wn,ku,oi,Au,xu,kn,Du,ai,Hu,qu,Iu,Oo,An,ju,ni,Nu,sl,xt,Lo,si,xn,Fu,ri,Tu,rl,Ro,Pu,ii,Ou,Lu,il,Dt,Co,li,Dn,Ru,ci,Cu,ll,Me,Hn,Su,pi,Mu,Uu,So,cl,Ht,Mo,gi,qn,Vu,hi,zu,pl,Ue,In,Wu,di,Gu,Bu,Uo,gl,qt,Vo,ui,jn,Ku,fi,Ju,hl,Ve,Nn,Qu,mi,Xu,Yu,zo,dl,It,Wo,_i,Fn,Zu,bi,ef,ul,ze,Tn,tf,vi,of,af,Go,fl;return l=new ke({}),C=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),Je=new ke({}),ra=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L661"}}),ia=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L3018",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Tt=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[w_]},$$scope:{ctx:U}}}),Pt=new ne({props:{$$slots:{default:[k_]},$$scope:{ctx:U}}}),la=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2875",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ot=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[A_]},$$scope:{ctx:U}}}),Lt=new ne({props:{$$slots:{default:[x_]},$$scope:{ctx:U}}}),ca=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which the commit will be created, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<code>Iterable</code> of <code>CommitOperation()</code>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.CommitOperationAdd">CommitOperationAdd</a> to upload a file</li>
<li><a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.CommitOperationDelete">CommitOperationDelete</a> to delete a file</li>
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1896",returnDescription:`
<p>Instance of <a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.CommitInfo"
>CommitInfo</a> containing information about the newly
created commit (commit hash, commit url, pr url, commit message,\u2026).</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.CommitInfo"
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
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a> \u2014
If repository is not found (error 404): wrong repo_id/repo_type, private
but not authenticated or repo does not exist.</li>
</ul>
`,raiseType:`
<p><code>ValueError</code> or <a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"
>RepositoryNotFoundError</a></p>
`}}),Rt=new ne({props:{warning:!0,$$slots:{default:[D_]},$$scope:{ctx:U}}}),pa=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str]"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2702"}}),Ct=new ne({props:{$$slots:{default:[H_]},$$scope:{ctx:U}}}),da=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": typing.Optional[str]"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2791"}}),St=new ne({props:{$$slots:{default:[q_]},$$scope:{ctx:U}}}),_a=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1548",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ba=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1293",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),Ut=new ne({props:{$$slots:{default:[I_]},$$scope:{ctx:U}}}),va=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2404"}}),Vt=new ne({props:{$$slots:{default:[j_]},$$scope:{ctx:U}}}),$a=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1672"}}),zt=new ne({props:{$$slots:{default:[N_]},$$scope:{ctx:U}}}),ya=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L3146",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Wt=new ne({props:{$$slots:{default:[F_]},$$scope:{ctx:U}}}),Ea=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L736"}}),wa=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2617"}}),Bt=new ne({props:{$$slots:{default:[T_]},$$scope:{ctx:U}}}),ka=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
The Hugging Face authentication token`,name:"token"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2492",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Aa=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L728"}}),xa=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2539",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Qt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[P_]},$$scope:{ctx:U}}}),Xt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[O_]},$$scope:{ctx:U}}}),Da=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": typing.Optional[str]"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L3203",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Yt=new ne({props:{warning:!0,$$slots:{default:[L_]},$$scope:{ctx:U}}}),Zt=new ne({props:{$$slots:{default:[R_]},$$scope:{ctx:U}}}),Ha=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo">huggingface_hub.hf_api.DatasetInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L954"}}),eo=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[C_]},$$scope:{ctx:U}}}),to=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[S_]},$$scope:{ctx:U}}}),qa=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1117",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ia=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_models.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author (user or organization) of the
returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_models.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models Example
usage:`,name:"search"},{anchor:"huggingface_hub.HfApi.list_models.emissions_thresholds",description:`<strong>emissions_thresholds</strong> (<code>Tuple</code>, <em>optional</em>) &#x2014;
A tuple of two ints or floats representing a minimum and maximum
carbon footprint to filter the resulting models with in grams.`,name:"emissions_thresholds"},{anchor:"huggingface_hub.HfApi.list_models.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting models. Possible values
are the properties of the <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo">huggingface_hub.hf_api.ModelInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_models.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L746"}}),ao=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[M_]},$$scope:{ctx:U}}}),no=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[U_]},$$scope:{ctx:U}}}),Na=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1500",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Fa=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string tag or list of tags that can be used to identify Spaces on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_spaces.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned Spaces.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_spaces.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned Spaces.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_spaces.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting Spaces. Possible
values are the properties of the <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo">huggingface_hub.hf_api.SpaceInfo</a>\` class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_spaces.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1131",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Ta=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": typing.Optional[str]"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L3093",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),io=new ne({props:{$$slots:{default:[V_]},$$scope:{ctx:U}}}),Pa=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1214",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),lo=new ne({props:{$$slots:{default:[z_]},$$scope:{ctx:U}}}),Oa=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1824"}}),co=new ne({props:{$$slots:{default:[W_]},$$scope:{ctx:U}}}),Ca=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2951",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),po=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[G_]},$$scope:{ctx:U}}}),go=new ne({props:{$$slots:{default:[B_]},$$scope:{ctx:U}}}),Sa=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1431",returnDescription:`
<p>The repository information, as a
<a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a>, <a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a>
or <a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> object.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),ho=new ne({props:{$$slots:{default:[K_]},$$scope:{ctx:U}}}),Ma=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L709"}}),Ua=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1362",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),fo=new ne({props:{$$slots:{default:[J_]},$$scope:{ctx:U}}}),Va=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L721"}}),za=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L1757",returnDescription:`
<p>The HTTP response in json.</p>
`}}),_o=new ne({props:{$$slots:{default:[Q_]},$$scope:{ctx:U}}}),Wa=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2084",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),bo=new ne({props:{$$slots:{default:[X_]},$$scope:{ctx:U}}}),vo=new ne({props:{warning:!0,$$slots:{default:[Y_]},$$scope:{ctx:U}}}),$o=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Z_]},$$scope:{ctx:U}}}),Ga=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L2244",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),yo=new ne({props:{$$slots:{default:[eb]},$$scope:{ctx:U}}}),Eo=new ne({props:{warning:!0,$$slots:{default:[tb]},$$scope:{ctx:U}}}),wo=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[ob]},$$scope:{ctx:U}}}),Ja=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L665"}}),Qa=new ke({}),Xa=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.securityStatus",description:`<strong>securityStatus</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Security status of the model.
Example: <code>{&quot;containsInfected&quot;: False}</code>`,name:"securityStatus"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L277"}}),Ya=new ke({}),Za=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of dataset repository.`,name:"id"},{anchor:"huggingface_hub.hf_api.DatasetInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.DatasetInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.DatasetInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.DatasetInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a> objects that constitute the dataset.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.DatasetInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.DatasetInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.DatasetInfo.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Description of the dataset`,name:"description"},{anchor:"huggingface_hub.hf_api.DatasetInfo.citation",description:`<strong>citation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dataset citation`,name:"citation"},{anchor:"huggingface_hub.hf_api.DatasetInfo.cardData",description:`<strong>cardData</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Metadata of the model card as a dictionary.`,name:"cardData"},{anchor:"huggingface_hub.hf_api.DatasetInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L350"}}),en=new ke({}),tn=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L424"}}),on=new ke({}),an=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L231"}}),nn=new ke({}),sn=new Q({props:{name:"class huggingface_hub.CommitInfo",anchor:"huggingface_hub.CommitInfo",parameters:[{name:"commit_url",val:": str"},{name:"commit_message",val:": str"},{name:"commit_description",val:": str"},{name:"oid",val:": str"},{name:"pr_url",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.CommitInfo.commit_url",description:`<strong>commit_url</strong> (<code>str</code>) &#x2014;
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
<a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details">get_discussion_details()</a>. Example: <code>1</code>.`,name:"pr_num"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L176"}}),ln=new ke({}),cn=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/_commit_api.py#L43"}}),pn=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/_commit_api.py#L115"}}),No=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[ab]},$$scope:{ctx:U}}}),un=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/_commit_api.py#L150"}}),fn=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/_commit_api.py#L65"}}),bn=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/_commit_api.py#L28"}}),vn=new ke({}),yn=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/utils/_hf_folder.py#L21"}}),En=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/utils/_hf_folder.py#L56"}}),wn=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/utils/_hf_folder.py#L37",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),An=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/utils/_hf_folder.py#L24"}}),xn=new ke({}),Dn=new ke({}),Hn=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),So=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[nb]},$$scope:{ctx:U}}}),qn=new ke({}),In=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Uo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[sb]},$$scope:{ctx:U}}}),jn=new ke({}),Nn=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L549"}}),zo=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[rb]},$$scope:{ctx:U}}}),Fn=new ke({}),Tn=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/hf_api.py#L511"}}),Go=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[ib]},$$scope:{ctx:U}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),D(l.$$.fragment),u=g(),P=a("span"),v=r("Hugging Face Hub API"),x=g(),w=a("p"),y=r("Below is the documentation for the "),k=a("code"),O=r("HfApi"),T=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),_=a("p"),F=r("All methods from the "),S=a("code"),V=r("HfApi"),R=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),A=r("The following approach uses the method from the root of the package:"),M=g(),D(C.$$.fragment),Y=g(),te=a("p"),Z=r("The following approach uses the "),J=a("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),D(X.$$.fragment),oe=g(),se=a("p"),Be=r("Using the "),be=a("code"),ht=r("HfApi"),Ke=r(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Re=g(),de=a("h3"),ve=a("a"),Nt=a("span"),D(Je.$$.fragment),aa=g(),Ft=a("span"),na=r("HfApi"),sa=g(),z=a("div"),D(ra.$$.fragment),ac=g(),xe=a("div"),D(ia.$$.fragment),nc=g(),As=a("p"),sc=r("Closes or re-opens a Discussion or Pull Request."),rc=g(),D(Tt.$$.fragment),ic=g(),D(Pt.$$.fragment),lc=g(),De=a("div"),D(la.$$.fragment),cc=g(),xs=a("p"),pc=r("Creates a new comment on the given Discussion."),gc=g(),D(Ot.$$.fragment),hc=g(),D(Lt.$$.fragment),dc=g(),Qe=a("div"),D(ca.$$.fragment),uc=g(),Ds=a("p"),fc=r("Creates a commit in the given repo, deleting & uploading files as needed."),mc=g(),D(Rt.$$.fragment),_c=g(),le=a("div"),D(pa.$$.fragment),bc=g(),Hs=a("p"),vc=r("Creates a Discussion or Pull Request."),$c=g(),ga=a("p"),yc=r("Pull Requests created programmatically will be in "),qs=a("code"),Ec=r('"draft"'),wc=r(" status."),kc=g(),ha=a("p"),Ac=r("Creating a Pull Request with changes can also be done at once with "),Kn=a("a"),xc=r("HfApi.create_commit()"),Dc=r("."),Hc=g(),Jn=a("p"),qc=r("Returns: "),Qn=a("a"),Ic=r("DiscussionWithDetails"),jc=g(),D(Ct.$$.fragment),Nc=g(),ce=a("div"),D(da.$$.fragment),Fc=g(),ua=a("p"),Tc=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Is=a("code"),Pc=r('"draft"'),Oc=r(" status."),Lc=g(),fa=a("p"),Rc=r("Creating a Pull Request with changes can also be done at once with "),Xn=a("a"),Cc=r("HfApi.create_commit()"),Sc=r(";"),Mc=g(),ma=a("p"),Uc=r("This is a wrapper around "),js=a("code"),Vc=r("HfApi.create_discusssion"),zc=r("."),Wc=g(),Yn=a("p"),Gc=r("Returns: "),Zn=a("a"),Bc=r("DiscussionWithDetails"),Kc=g(),D(St.$$.fragment),Jc=g(),Mt=a("div"),D(_a.$$.fragment),Qc=g(),Ns=a("p"),Xc=r("Create an empty repo on the HuggingFace Hub."),Yc=g(),He=a("div"),D(ba.$$.fragment),Zc=g(),Fs=a("p"),ep=r("Get info on one specific dataset on huggingface.co."),tp=g(),Ts=a("p"),op=r("Dataset can be private if you pass an acceptable token."),ap=g(),D(Ut.$$.fragment),np=g(),Xe=a("div"),D(va.$$.fragment),sp=g(),Ps=a("p"),rp=r("Deletes a file in the given repo."),ip=g(),D(Vt.$$.fragment),lp=g(),Ye=a("div"),D($a.$$.fragment),cp=g(),Os=a("p"),pp=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),gp=g(),D(zt.$$.fragment),hp=g(),Ze=a("div"),D(ya.$$.fragment),dp=g(),Ls=a("p"),up=r("Edits a comment on a Discussion / Pull Request."),fp=g(),D(Wt.$$.fragment),mp=g(),Gt=a("div"),D(Ea.$$.fragment),_p=g(),Rs=a("p"),bp=r("Gets all valid dataset tags as a nested namespace object."),vp=g(),qe=a("div"),D(wa.$$.fragment),$p=g(),Cs=a("p"),yp=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Ep=g(),es=a("p"),wp=r("Returns: "),ts=a("a"),kp=r("DiscussionWithDetails"),Ap=g(),D(Bt.$$.fragment),xp=g(),Kt=a("div"),D(ka.$$.fragment),Dp=g(),Ss=a("p"),Hp=r(`Returns the repository name for a given model ID and optional
organization.`),qp=g(),Jt=a("div"),D(Aa.$$.fragment),Ip=g(),Ms=a("p"),jp=r("Gets all valid model tags as a nested namespace object"),Np=g(),$e=a("div"),D(xa.$$.fragment),Fp=g(),Us=a("p"),Tp=r("Fetches Discussions and Pull Requests for the given repo."),Pp=g(),Vs=a("p"),Op=r("Example:"),Lp=g(),D(Qt.$$.fragment),Rp=g(),D(Xt.$$.fragment),Cp=g(),Ie=a("div"),D(Da.$$.fragment),Sp=g(),zs=a("p"),Mp=r("Hides a comment on a Discussion / Pull Request."),Up=g(),D(Yt.$$.fragment),Vp=g(),D(Zt.$$.fragment),zp=g(),je=a("div"),D(Ha.$$.fragment),Wp=g(),Ws=a("p"),Gp=r("Get the public list of all the datasets on huggingface.co"),Bp=g(),D(eo.$$.fragment),Kp=g(),D(to.$$.fragment),Jp=g(),oo=a("div"),D(qa.$$.fragment),Qp=g(),Gs=a("p"),Xp=r("Get the public list of all the metrics on huggingface.co"),Yp=g(),ye=a("div"),D(Ia.$$.fragment),Zp=g(),Bs=a("p"),eg=r("Get the public list of all the models on huggingface.co"),tg=g(),ja=a("p"),og=r("Returns: List of "),os=a("a"),ag=r("huggingface_hub.hf_api.ModelInfo"),ng=r(" objects"),sg=g(),D(ao.$$.fragment),rg=g(),D(no.$$.fragment),ig=g(),so=a("div"),D(Na.$$.fragment),lg=g(),Ks=a("p"),cg=r("Get the list of files in a given repo."),pg=g(),ro=a("div"),D(Fa.$$.fragment),gg=g(),Js=a("p"),hg=r("Get the public list of all Spaces on huggingface.co"),dg=g(),et=a("div"),D(Ta.$$.fragment),ug=g(),Qs=a("p"),fg=r("Merges a Pull Request."),mg=g(),D(io.$$.fragment),_g=g(),Ne=a("div"),D(Pa.$$.fragment),bg=g(),Xs=a("p"),vg=r("Get info on one specific model on huggingface.co"),$g=g(),Ys=a("p"),yg=r("Model can be private if you pass an acceptable token or are logged in."),Eg=g(),D(lo.$$.fragment),wg=g(),Fe=a("div"),D(Oa.$$.fragment),kg=g(),Zs=a("p"),Ag=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),xg=g(),La=a("p"),Dg=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ra=a("a"),Hg=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),qg=r("."),Ig=g(),D(co.$$.fragment),jg=g(),Te=a("div"),D(Ca.$$.fragment),Ng=g(),er=a("p"),Fg=r("Renames a Discussion."),Tg=g(),D(po.$$.fragment),Pg=g(),D(go.$$.fragment),Og=g(),tt=a("div"),D(Sa.$$.fragment),Lg=g(),tr=a("p"),Rg=r("Get the info object for a given repo of a given type."),Cg=g(),D(ho.$$.fragment),Sg=g(),uo=a("div"),D(Ma.$$.fragment),Mg=g(),or=a("p"),Ug=r(`Saves the passed access token so git can correctly authenticate the
user.`),Vg=g(),Pe=a("div"),D(Ua.$$.fragment),zg=g(),ar=a("p"),Wg=r("Get info on one specific Space on huggingface.co."),Gg=g(),nr=a("p"),Bg=r("Space can be private if you pass an acceptable token."),Kg=g(),D(fo.$$.fragment),Jg=g(),mo=a("div"),D(Va.$$.fragment),Qg=g(),sr=a("p"),Xg=r("Resets the user\u2019s access token."),Yg=g(),ot=a("div"),D(za.$$.fragment),Zg=g(),rr=a("p"),eh=r("Update the visibility setting of a repository."),th=g(),D(_o.$$.fragment),oh=g(),Ee=a("div"),D(Wa.$$.fragment),ah=g(),ir=a("p"),nh=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),sh=g(),D(bo.$$.fragment),rh=g(),D(vo.$$.fragment),ih=g(),D($o.$$.fragment),lh=g(),re=a("div"),D(Ga.$$.fragment),ch=g(),lr=a("p"),ph=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),gh=g(),cr=a("p"),hh=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),dh=g(),ue=a("p"),uh=r("Use the "),pr=a("code"),fh=r("allow_patterns"),mh=r(" and "),gr=a("code"),_h=r("ignore_patterns"),bh=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Ba=a("a"),vh=r("here"),$h=r(`. If both
`),hr=a("code"),yh=r("allow_patterns"),Eh=r(" and "),dr=a("code"),wh=r("ignore_patterns"),kh=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Ah=g(),Ka=a("p"),xh=r("Uses "),ur=a("code"),Dh=r("HfApi.create_commit"),Hh=r(" under the hood."),qh=g(),D(yo.$$.fragment),Ih=g(),D(Eo.$$.fragment),jh=g(),D(wo.$$.fragment),Nh=g(),ko=a("div"),D(Ja.$$.fragment),Fh=g(),fr=a("p"),Th=r("Call HF API to know \u201Cwhoami\u201D."),Mi=g(),dt=a("h3"),Ao=a("a"),mr=a("span"),D(Qa.$$.fragment),Ph=g(),_r=a("span"),Oh=r("ModelInfo"),Ui=g(),ut=a("div"),D(Xa.$$.fragment),Lh=g(),br=a("p"),Rh=r("Info about a model accessible from huggingface.co"),Vi=g(),ft=a("h3"),xo=a("a"),vr=a("span"),D(Ya.$$.fragment),Ch=g(),$r=a("span"),Sh=r("DatasetInfo"),zi=g(),mt=a("div"),D(Za.$$.fragment),Mh=g(),yr=a("p"),Uh=r("Info about a dataset accessible from huggingface.co"),Wi=g(),_t=a("h3"),Do=a("a"),Er=a("span"),D(en.$$.fragment),Vh=g(),wr=a("span"),zh=r("SpaceInfo"),Gi=g(),Ce=a("div"),D(tn.$$.fragment),Wh=g(),kr=a("p"),Gh=r("Info about a Space accessible from huggingface.co"),Bh=g(),Ar=a("p"),Kh=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Bi=g(),bt=a("h3"),Ho=a("a"),xr=a("span"),D(on.$$.fragment),Jh=g(),Dr=a("span"),Qh=r("RepoFile"),Ki=g(),vt=a("div"),D(an.$$.fragment),Xh=g(),Hr=a("p"),Yh=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Ji=g(),$t=a("h3"),qo=a("a"),qr=a("span"),D(nn.$$.fragment),Zh=g(),Ir=a("span"),ed=r("CommitInfo"),Qi=g(),Se=a("div"),D(sn.$$.fragment),td=g(),jr=a("p"),od=r("Data structure containing information about a newly created commit."),ad=g(),rn=a("p"),nd=r("Returned by "),as=a("a"),sd=r("create_commit()"),rd=r("."),Xi=g(),yt=a("h2"),Io=a("a"),Nr=a("span"),D(ln.$$.fragment),id=g(),ns=a("span"),Fr=a("code"),ld=r("create_commit"),cd=r(" API"),Yi=g(),jo=a("p"),pd=r("Below are the supported values for "),Tr=a("code"),gd=r("CommitOperation()"),hd=r(":"),Zi=g(),fe=a("div"),D(cn.$$.fragment),dd=g(),Pr=a("p"),ud=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),fd=g(),we=a("div"),D(pn.$$.fragment),md=g(),gn=a("p"),_d=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Or=a("code"),bd=r("path_or_fileobj"),vd=r("."),$d=g(),hn=a("p"),yd=r("Triggers "),Lr=a("code"),Ed=r("self.validate"),wd=r("."),kd=g(),dn=a("p"),Ad=r("Raises: "),Rr=a("code"),xd=r("ValueError"),Dd=r(" if self.validate fails"),Hd=g(),D(No.$$.fragment),qd=g(),at=a("div"),D(un.$$.fragment),Id=g(),ss=a("p"),jd=r("The base64-encoded content of "),Cr=a("code"),Nd=r("path_or_fileobj"),Fd=g(),rs=a("p"),Td=r("Returns: "),Sr=a("code"),Pd=r("bytes"),Od=g(),Oe=a("div"),D(fn.$$.fragment),Ld=g(),mn=a("p"),Rd=r("Ensures "),Mr=a("code"),Cd=r("path_or_fileobj"),Sd=r(" is valid:"),Md=g(),Et=a("ul"),nt=a("li"),Ud=r("Ensures it is either a "),Ur=a("code"),Vd=r("str"),zd=r(", "),Vr=a("code"),Wd=r("bytes"),Gd=r(" or an instance of "),zr=a("code"),Bd=r("io.BufferedIOBase"),Kd=g(),_n=a("li"),Jd=r("If it is a "),Wr=a("code"),Qd=r("str"),Xd=r(", ensure that it is a file path and that the file exists"),Yd=g(),st=a("li"),Zd=r("If it is an instance of "),Gr=a("code"),eu=r("io.BufferedIOBase"),tu=r(", ensures it supports "),Br=a("code"),ou=r("seek()"),au=r(" and "),Kr=a("code"),nu=r("tell()"),su=g(),wt=a("p"),ru=r("Raises: "),Jr=a("code"),iu=r("ValueError"),lu=r(" if "),Qr=a("code"),cu=r("path_or_fileobj"),pu=r(" is not valid"),el=g(),kt=a("div"),D(bn.$$.fragment),gu=g(),Xr=a("p"),hu=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),tl=g(),At=a("h2"),Fo=a("a"),Yr=a("span"),D(vn.$$.fragment),du=g(),Zr=a("span"),uu=r("Hugging Face local storage"),ol=g(),$n=a("p"),ei=a("code"),fu=r("huggingface_hub"),mu=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),al=g(),To=a("p"),_u=r("It does this using the "),is=a("a"),bu=r("HfFolder"),vu=r(" utility, which saves data at the root of the user."),nl=g(),Ae=a("div"),D(yn.$$.fragment),$u=g(),Po=a("div"),D(En.$$.fragment),yu=g(),ti=a("p"),Eu=r("Deletes the token from storage. Does not fail if token does not exist."),wu=g(),rt=a("div"),D(wn.$$.fragment),ku=g(),oi=a("p"),Au=r("Get token or None if not existent."),xu=g(),kn=a("p"),Du=r(`Note that a token can be also provided using the
`),ai=a("code"),Hu=r("HUGGING_FACE_HUB_TOKEN"),qu=r(" environment variable."),Iu=g(),Oo=a("div"),D(An.$$.fragment),ju=g(),ni=a("p"),Nu=r("Save token, creating folder as needed."),sl=g(),xt=a("h2"),Lo=a("a"),si=a("span"),D(xn.$$.fragment),Fu=g(),ri=a("span"),Tu=r("Filtering helpers"),rl=g(),Ro=a("p"),Pu=r("Some helpers to filter repositories on the Hub are available in the "),ii=a("code"),Ou=r("huggingface_hub"),Lu=r(" package."),il=g(),Dt=a("h3"),Co=a("a"),li=a("span"),D(Dn.$$.fragment),Ru=g(),ci=a("span"),Cu=r("DatasetFilter"),ll=g(),Me=a("div"),D(Hn.$$.fragment),Su=g(),pi=a("p"),Mu=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Uu=g(),D(So.$$.fragment),cl=g(),Ht=a("h3"),Mo=a("a"),gi=a("span"),D(qn.$$.fragment),Vu=g(),hi=a("span"),zu=r("ModelFilter"),pl=g(),Ue=a("div"),D(In.$$.fragment),Wu=g(),di=a("p"),Gu=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Bu=g(),D(Uo.$$.fragment),gl=g(),qt=a("h3"),Vo=a("a"),ui=a("span"),D(jn.$$.fragment),Ku=g(),fi=a("span"),Ju=r("DatasetSearchArguments"),hl=g(),Ve=a("div"),D(Nn.$$.fragment),Qu=g(),mi=a("p"),Xu=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Yu=g(),D(zo.$$.fragment),dl=g(),It=a("h3"),Wo=a("a"),_i=a("span"),D(Fn.$$.fragment),Zu=g(),bi=a("span"),ef=r("ModelSearchArguments"),ul=g(),ze=a("div"),D(Tn.$$.fragment),tf=g(),vi=a("p"),of=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),af=g(),D(Go.$$.fragment),this.h()},l(o){const E=y_('[data-svelte="svelte-1phssyn"]',document.head);p=n(E,"META",{name:!0,content:!0}),E.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var Pn=s(f);c=n(Pn,"A",{id:!0,class:!0,href:!0});var $i=s(c);d=n($i,"SPAN",{});var yi=s(d);H(l.$$.fragment,yi),yi.forEach(t),$i.forEach(t),u=h(Pn),P=n(Pn,"SPAN",{});var Ei=s(P);v=i(Ei,"Hugging Face Hub API"),Ei.forEach(t),Pn.forEach(t),x=h(o),w=n(o,"P",{});var On=s(w);y=i(On,"Below is the documentation for the "),k=n(On,"CODE",{});var wi=s(k);O=i(wi,"HfApi"),wi.forEach(t),T=i(On,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),On.forEach(t),L=h(o),_=n(o,"P",{});var Ln=s(_);F=i(Ln,"All methods from the "),S=n(Ln,"CODE",{});var ki=s(S);V=i(ki,"HfApi"),ki.forEach(t),R=i(Ln,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Ln.forEach(t),K=h(o),G=n(o,"P",{});var Ai=s(G);A=i(Ai,"The following approach uses the method from the root of the package:"),Ai.forEach(t),M=h(o),H(C.$$.fragment,o),Y=h(o),te=n(o,"P",{});var Rn=s(te);Z=i(Rn,"The following approach uses the "),J=n(Rn,"CODE",{});var xi=s(J);ee=i(xi,"HfApi"),xi.forEach(t),ae=i(Rn," class:"),Rn.forEach(t),B=h(o),H(X.$$.fragment,o),oe=h(o),se=n(o,"P",{});var Cn=s(se);Be=i(Cn,"Using the "),be=n(Cn,"CODE",{});var Di=s(be);ht=i(Di,"HfApi"),Di.forEach(t),Ke=i(Cn," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Cn.forEach(t),Re=h(o),de=n(o,"H3",{class:!0});var Sn=s(de);ve=n(Sn,"A",{id:!0,class:!0,href:!0});var Hi=s(ve);Nt=n(Hi,"SPAN",{});var qi=s(Nt);H(Je.$$.fragment,qi),qi.forEach(t),Hi.forEach(t),aa=h(Sn),Ft=n(Sn,"SPAN",{});var Ii=s(Ft);na=i(Ii,"HfApi"),Ii.forEach(t),Sn.forEach(t),sa=h(o),z=n(o,"DIV",{class:!0});var W=s(z);H(ra.$$.fragment,W),ac=h(W),xe=n(W,"DIV",{class:!0});var We=s(xe);H(ia.$$.fragment,We),nc=h(We),As=n(We,"P",{});var ji=s(As);sc=i(ji,"Closes or re-opens a Discussion or Pull Request."),ji.forEach(t),rc=h(We),H(Tt.$$.fragment,We),ic=h(We),H(Pt.$$.fragment,We),We.forEach(t),lc=h(W),De=n(W,"DIV",{class:!0});var Ge=s(De);H(la.$$.fragment,Ge),cc=h(Ge),xs=n(Ge,"P",{});var Ni=s(xs);pc=i(Ni,"Creates a new comment on the given Discussion."),Ni.forEach(t),gc=h(Ge),H(Ot.$$.fragment,Ge),hc=h(Ge),H(Lt.$$.fragment,Ge),Ge.forEach(t),dc=h(W),Qe=n(W,"DIV",{class:!0});var jt=s(Qe);H(ca.$$.fragment,jt),uc=h(jt),Ds=n(jt,"P",{});var Fi=s(Ds);fc=i(Fi,"Creates a commit in the given repo, deleting & uploading files as needed."),Fi.forEach(t),mc=h(jt),H(Rt.$$.fragment,jt),jt.forEach(t),_c=h(W),le=n(W,"DIV",{class:!0});var me=s(le);H(pa.$$.fragment,me),bc=h(me),Hs=n(me,"P",{});var Ti=s(Hs);vc=i(Ti,"Creates a Discussion or Pull Request."),Ti.forEach(t),$c=h(me),ga=n(me,"P",{});var Mn=s(ga);yc=i(Mn,"Pull Requests created programmatically will be in "),qs=n(Mn,"CODE",{});var Pi=s(qs);Ec=i(Pi,'"draft"'),Pi.forEach(t),wc=i(Mn," status."),Mn.forEach(t),kc=h(me),ha=n(me,"P",{});var Un=s(ha);Ac=i(Un,"Creating a Pull Request with changes can also be done at once with "),Kn=n(Un,"A",{href:!0});var Oi=s(Kn);xc=i(Oi,"HfApi.create_commit()"),Oi.forEach(t),Dc=i(Un,"."),Un.forEach(t),Hc=h(me),Jn=n(me,"P",{});var ls=s(Jn);qc=i(ls,"Returns: "),Qn=n(ls,"A",{href:!0});var Li=s(Qn);Ic=i(Li,"DiscussionWithDetails"),Li.forEach(t),ls.forEach(t),jc=h(me),H(Ct.$$.fragment,me),me.forEach(t),Nc=h(W),ce=n(W,"DIV",{class:!0});var _e=s(ce);H(da.$$.fragment,_e),Fc=h(_e),ua=n(_e,"P",{});var Vn=s(ua);Tc=i(Vn,"Creates a Pull Request . Pull Requests created programmatically will be in "),Is=n(Vn,"CODE",{});var Ri=s(Is);Pc=i(Ri,'"draft"'),Ri.forEach(t),Oc=i(Vn," status."),Vn.forEach(t),Lc=h(_e),fa=n(_e,"P",{});var zn=s(fa);Rc=i(zn,"Creating a Pull Request with changes can also be done at once with "),Xn=n(zn,"A",{href:!0});var Ci=s(Xn);Cc=i(Ci,"HfApi.create_commit()"),Ci.forEach(t),Sc=i(zn,";"),zn.forEach(t),Mc=h(_e),ma=n(_e,"P",{});var Wn=s(ma);Uc=i(Wn,"This is a wrapper around "),js=n(Wn,"CODE",{});var Si=s(js);Vc=i(Si,"HfApi.create_discusssion"),Si.forEach(t),zc=i(Wn,"."),Wn.forEach(t),Wc=h(_e),Yn=n(_e,"P",{});var nf=s(Yn);Gc=i(nf,"Returns: "),Zn=n(nf,"A",{href:!0});var gf=s(Zn);Bc=i(gf,"DiscussionWithDetails"),gf.forEach(t),nf.forEach(t),Kc=h(_e),H(St.$$.fragment,_e),_e.forEach(t),Jc=h(W),Mt=n(W,"DIV",{class:!0});var ml=s(Mt);H(_a.$$.fragment,ml),Qc=h(ml),Ns=n(ml,"P",{});var hf=s(Ns);Xc=i(hf,"Create an empty repo on the HuggingFace Hub."),hf.forEach(t),ml.forEach(t),Yc=h(W),He=n(W,"DIV",{class:!0});var Bo=s(He);H(ba.$$.fragment,Bo),Zc=h(Bo),Fs=n(Bo,"P",{});var df=s(Fs);ep=i(df,"Get info on one specific dataset on huggingface.co."),df.forEach(t),tp=h(Bo),Ts=n(Bo,"P",{});var uf=s(Ts);op=i(uf,"Dataset can be private if you pass an acceptable token."),uf.forEach(t),ap=h(Bo),H(Ut.$$.fragment,Bo),Bo.forEach(t),np=h(W),Xe=n(W,"DIV",{class:!0});var cs=s(Xe);H(va.$$.fragment,cs),sp=h(cs),Ps=n(cs,"P",{});var ff=s(Ps);rp=i(ff,"Deletes a file in the given repo."),ff.forEach(t),ip=h(cs),H(Vt.$$.fragment,cs),cs.forEach(t),lp=h(W),Ye=n(W,"DIV",{class:!0});var ps=s(Ye);H($a.$$.fragment,ps),cp=h(ps),Os=n(ps,"P",{});var mf=s(Os);pp=i(mf,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),mf.forEach(t),gp=h(ps),H(zt.$$.fragment,ps),ps.forEach(t),hp=h(W),Ze=n(W,"DIV",{class:!0});var gs=s(Ze);H(ya.$$.fragment,gs),dp=h(gs),Ls=n(gs,"P",{});var _f=s(Ls);up=i(_f,"Edits a comment on a Discussion / Pull Request."),_f.forEach(t),fp=h(gs),H(Wt.$$.fragment,gs),gs.forEach(t),mp=h(W),Gt=n(W,"DIV",{class:!0});var _l=s(Gt);H(Ea.$$.fragment,_l),_p=h(_l),Rs=n(_l,"P",{});var bf=s(Rs);bp=i(bf,"Gets all valid dataset tags as a nested namespace object."),bf.forEach(t),_l.forEach(t),vp=h(W),qe=n(W,"DIV",{class:!0});var Ko=s(qe);H(wa.$$.fragment,Ko),$p=h(Ko),Cs=n(Ko,"P",{});var vf=s(Cs);yp=i(vf,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),vf.forEach(t),Ep=h(Ko),es=n(Ko,"P",{});var sf=s(es);wp=i(sf,"Returns: "),ts=n(sf,"A",{href:!0});var $f=s(ts);kp=i($f,"DiscussionWithDetails"),$f.forEach(t),sf.forEach(t),Ap=h(Ko),H(Bt.$$.fragment,Ko),Ko.forEach(t),xp=h(W),Kt=n(W,"DIV",{class:!0});var bl=s(Kt);H(ka.$$.fragment,bl),Dp=h(bl),Ss=n(bl,"P",{});var yf=s(Ss);Hp=i(yf,`Returns the repository name for a given model ID and optional
organization.`),yf.forEach(t),bl.forEach(t),qp=h(W),Jt=n(W,"DIV",{class:!0});var vl=s(Jt);H(Aa.$$.fragment,vl),Ip=h(vl),Ms=n(vl,"P",{});var Ef=s(Ms);jp=i(Ef,"Gets all valid model tags as a nested namespace object"),Ef.forEach(t),vl.forEach(t),Np=h(W),$e=n(W,"DIV",{class:!0});var it=s($e);H(xa.$$.fragment,it),Fp=h(it),Us=n(it,"P",{});var wf=s(Us);Tp=i(wf,"Fetches Discussions and Pull Requests for the given repo."),wf.forEach(t),Pp=h(it),Vs=n(it,"P",{});var kf=s(Vs);Op=i(kf,"Example:"),kf.forEach(t),Lp=h(it),H(Qt.$$.fragment,it),Rp=h(it),H(Xt.$$.fragment,it),it.forEach(t),Cp=h(W),Ie=n(W,"DIV",{class:!0});var Jo=s(Ie);H(Da.$$.fragment,Jo),Sp=h(Jo),zs=n(Jo,"P",{});var Af=s(zs);Mp=i(Af,"Hides a comment on a Discussion / Pull Request."),Af.forEach(t),Up=h(Jo),H(Yt.$$.fragment,Jo),Vp=h(Jo),H(Zt.$$.fragment,Jo),Jo.forEach(t),zp=h(W),je=n(W,"DIV",{class:!0});var Qo=s(je);H(Ha.$$.fragment,Qo),Wp=h(Qo),Ws=n(Qo,"P",{});var xf=s(Ws);Gp=i(xf,"Get the public list of all the datasets on huggingface.co"),xf.forEach(t),Bp=h(Qo),H(eo.$$.fragment,Qo),Kp=h(Qo),H(to.$$.fragment,Qo),Qo.forEach(t),Jp=h(W),oo=n(W,"DIV",{class:!0});var $l=s(oo);H(qa.$$.fragment,$l),Qp=h($l),Gs=n($l,"P",{});var Df=s(Gs);Xp=i(Df,"Get the public list of all the metrics on huggingface.co"),Df.forEach(t),$l.forEach(t),Yp=h(W),ye=n(W,"DIV",{class:!0});var lt=s(ye);H(Ia.$$.fragment,lt),Zp=h(lt),Bs=n(lt,"P",{});var Hf=s(Bs);eg=i(Hf,"Get the public list of all the models on huggingface.co"),Hf.forEach(t),tg=h(lt),ja=n(lt,"P",{});var yl=s(ja);og=i(yl,"Returns: List of "),os=n(yl,"A",{href:!0});var qf=s(os);ag=i(qf,"huggingface_hub.hf_api.ModelInfo"),qf.forEach(t),ng=i(yl," objects"),yl.forEach(t),sg=h(lt),H(ao.$$.fragment,lt),rg=h(lt),H(no.$$.fragment,lt),lt.forEach(t),ig=h(W),so=n(W,"DIV",{class:!0});var El=s(so);H(Na.$$.fragment,El),lg=h(El),Ks=n(El,"P",{});var If=s(Ks);cg=i(If,"Get the list of files in a given repo."),If.forEach(t),El.forEach(t),pg=h(W),ro=n(W,"DIV",{class:!0});var wl=s(ro);H(Fa.$$.fragment,wl),gg=h(wl),Js=n(wl,"P",{});var jf=s(Js);hg=i(jf,"Get the public list of all Spaces on huggingface.co"),jf.forEach(t),wl.forEach(t),dg=h(W),et=n(W,"DIV",{class:!0});var hs=s(et);H(Ta.$$.fragment,hs),ug=h(hs),Qs=n(hs,"P",{});var Nf=s(Qs);fg=i(Nf,"Merges a Pull Request."),Nf.forEach(t),mg=h(hs),H(io.$$.fragment,hs),hs.forEach(t),_g=h(W),Ne=n(W,"DIV",{class:!0});var Xo=s(Ne);H(Pa.$$.fragment,Xo),bg=h(Xo),Xs=n(Xo,"P",{});var Ff=s(Xs);vg=i(Ff,"Get info on one specific model on huggingface.co"),Ff.forEach(t),$g=h(Xo),Ys=n(Xo,"P",{});var Tf=s(Ys);yg=i(Tf,"Model can be private if you pass an acceptable token or are logged in."),Tf.forEach(t),Eg=h(Xo),H(lo.$$.fragment,Xo),Xo.forEach(t),wg=h(W),Fe=n(W,"DIV",{class:!0});var Yo=s(Fe);H(Oa.$$.fragment,Yo),kg=h(Yo),Zs=n(Yo,"P",{});var Pf=s(Zs);Ag=i(Pf,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Pf.forEach(t),xg=h(Yo),La=n(Yo,"P",{});var kl=s(La);Dg=i(kl,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ra=n(kl,"A",{href:!0,rel:!0});var Of=s(Ra);Hg=i(Of,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Of.forEach(t),qg=i(kl,"."),kl.forEach(t),Ig=h(Yo),H(co.$$.fragment,Yo),Yo.forEach(t),jg=h(W),Te=n(W,"DIV",{class:!0});var Zo=s(Te);H(Ca.$$.fragment,Zo),Ng=h(Zo),er=n(Zo,"P",{});var Lf=s(er);Fg=i(Lf,"Renames a Discussion."),Lf.forEach(t),Tg=h(Zo),H(po.$$.fragment,Zo),Pg=h(Zo),H(go.$$.fragment,Zo),Zo.forEach(t),Og=h(W),tt=n(W,"DIV",{class:!0});var ds=s(tt);H(Sa.$$.fragment,ds),Lg=h(ds),tr=n(ds,"P",{});var Rf=s(tr);Rg=i(Rf,"Get the info object for a given repo of a given type."),Rf.forEach(t),Cg=h(ds),H(ho.$$.fragment,ds),ds.forEach(t),Sg=h(W),uo=n(W,"DIV",{class:!0});var Al=s(uo);H(Ma.$$.fragment,Al),Mg=h(Al),or=n(Al,"P",{});var Cf=s(or);Ug=i(Cf,`Saves the passed access token so git can correctly authenticate the
user.`),Cf.forEach(t),Al.forEach(t),Vg=h(W),Pe=n(W,"DIV",{class:!0});var ea=s(Pe);H(Ua.$$.fragment,ea),zg=h(ea),ar=n(ea,"P",{});var Sf=s(ar);Wg=i(Sf,"Get info on one specific Space on huggingface.co."),Sf.forEach(t),Gg=h(ea),nr=n(ea,"P",{});var Mf=s(nr);Bg=i(Mf,"Space can be private if you pass an acceptable token."),Mf.forEach(t),Kg=h(ea),H(fo.$$.fragment,ea),ea.forEach(t),Jg=h(W),mo=n(W,"DIV",{class:!0});var xl=s(mo);H(Va.$$.fragment,xl),Qg=h(xl),sr=n(xl,"P",{});var Uf=s(sr);Xg=i(Uf,"Resets the user\u2019s access token."),Uf.forEach(t),xl.forEach(t),Yg=h(W),ot=n(W,"DIV",{class:!0});var us=s(ot);H(za.$$.fragment,us),Zg=h(us),rr=n(us,"P",{});var Vf=s(rr);eh=i(Vf,"Update the visibility setting of a repository."),Vf.forEach(t),th=h(us),H(_o.$$.fragment,us),us.forEach(t),oh=h(W),Ee=n(W,"DIV",{class:!0});var ct=s(Ee);H(Wa.$$.fragment,ct),ah=h(ct),ir=n(ct,"P",{});var zf=s(ir);nh=i(zf,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),zf.forEach(t),sh=h(ct),H(bo.$$.fragment,ct),rh=h(ct),H(vo.$$.fragment,ct),ih=h(ct),H($o.$$.fragment,ct),ct.forEach(t),lh=h(W),re=n(W,"DIV",{class:!0});var pe=s(re);H(Ga.$$.fragment,pe),ch=h(pe),lr=n(pe,"P",{});var Wf=s(lr);ph=i(Wf,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Wf.forEach(t),gh=h(pe),cr=n(pe,"P",{});var Gf=s(cr);hh=i(Gf,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Gf.forEach(t),dh=h(pe),ue=n(pe,"P",{});var Le=s(ue);uh=i(Le,"Use the "),pr=n(Le,"CODE",{});var Bf=s(pr);fh=i(Bf,"allow_patterns"),Bf.forEach(t),mh=i(Le," and "),gr=n(Le,"CODE",{});var Kf=s(gr);_h=i(Kf,"ignore_patterns"),Kf.forEach(t),bh=i(Le,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),Ba=n(Le,"A",{href:!0,rel:!0});var Jf=s(Ba);vh=i(Jf,"here"),Jf.forEach(t),$h=i(Le,`. If both
`),hr=n(Le,"CODE",{});var Qf=s(hr);yh=i(Qf,"allow_patterns"),Qf.forEach(t),Eh=i(Le," and "),dr=n(Le,"CODE",{});var Xf=s(dr);wh=i(Xf,"ignore_patterns"),Xf.forEach(t),kh=i(Le,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Le.forEach(t),Ah=h(pe),Ka=n(pe,"P",{});var Dl=s(Ka);xh=i(Dl,"Uses "),ur=n(Dl,"CODE",{});var Yf=s(ur);Dh=i(Yf,"HfApi.create_commit"),Yf.forEach(t),Hh=i(Dl," under the hood."),Dl.forEach(t),qh=h(pe),H(yo.$$.fragment,pe),Ih=h(pe),H(Eo.$$.fragment,pe),jh=h(pe),H(wo.$$.fragment,pe),pe.forEach(t),Nh=h(W),ko=n(W,"DIV",{class:!0});var Hl=s(ko);H(Ja.$$.fragment,Hl),Fh=h(Hl),fr=n(Hl,"P",{});var Zf=s(fr);Th=i(Zf,"Call HF API to know \u201Cwhoami\u201D."),Zf.forEach(t),Hl.forEach(t),W.forEach(t),Mi=h(o),dt=n(o,"H3",{class:!0});var ql=s(dt);Ao=n(ql,"A",{id:!0,class:!0,href:!0});var em=s(Ao);mr=n(em,"SPAN",{});var tm=s(mr);H(Qa.$$.fragment,tm),tm.forEach(t),em.forEach(t),Ph=h(ql),_r=n(ql,"SPAN",{});var om=s(_r);Oh=i(om,"ModelInfo"),om.forEach(t),ql.forEach(t),Ui=h(o),ut=n(o,"DIV",{class:!0});var Il=s(ut);H(Xa.$$.fragment,Il),Lh=h(Il),br=n(Il,"P",{});var am=s(br);Rh=i(am,"Info about a model accessible from huggingface.co"),am.forEach(t),Il.forEach(t),Vi=h(o),ft=n(o,"H3",{class:!0});var jl=s(ft);xo=n(jl,"A",{id:!0,class:!0,href:!0});var nm=s(xo);vr=n(nm,"SPAN",{});var sm=s(vr);H(Ya.$$.fragment,sm),sm.forEach(t),nm.forEach(t),Ch=h(jl),$r=n(jl,"SPAN",{});var rm=s($r);Sh=i(rm,"DatasetInfo"),rm.forEach(t),jl.forEach(t),zi=h(o),mt=n(o,"DIV",{class:!0});var Nl=s(mt);H(Za.$$.fragment,Nl),Mh=h(Nl),yr=n(Nl,"P",{});var im=s(yr);Uh=i(im,"Info about a dataset accessible from huggingface.co"),im.forEach(t),Nl.forEach(t),Wi=h(o),_t=n(o,"H3",{class:!0});var Fl=s(_t);Do=n(Fl,"A",{id:!0,class:!0,href:!0});var lm=s(Do);Er=n(lm,"SPAN",{});var cm=s(Er);H(en.$$.fragment,cm),cm.forEach(t),lm.forEach(t),Vh=h(Fl),wr=n(Fl,"SPAN",{});var pm=s(wr);zh=i(pm,"SpaceInfo"),pm.forEach(t),Fl.forEach(t),Gi=h(o),Ce=n(o,"DIV",{class:!0});var fs=s(Ce);H(tn.$$.fragment,fs),Wh=h(fs),kr=n(fs,"P",{});var gm=s(kr);Gh=i(gm,"Info about a Space accessible from huggingface.co"),gm.forEach(t),Bh=h(fs),Ar=n(fs,"P",{});var hm=s(Ar);Kh=i(hm,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),hm.forEach(t),fs.forEach(t),Bi=h(o),bt=n(o,"H3",{class:!0});var Tl=s(bt);Ho=n(Tl,"A",{id:!0,class:!0,href:!0});var dm=s(Ho);xr=n(dm,"SPAN",{});var um=s(xr);H(on.$$.fragment,um),um.forEach(t),dm.forEach(t),Jh=h(Tl),Dr=n(Tl,"SPAN",{});var fm=s(Dr);Qh=i(fm,"RepoFile"),fm.forEach(t),Tl.forEach(t),Ki=h(o),vt=n(o,"DIV",{class:!0});var Pl=s(vt);H(an.$$.fragment,Pl),Xh=h(Pl),Hr=n(Pl,"P",{});var mm=s(Hr);Yh=i(mm,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),mm.forEach(t),Pl.forEach(t),Ji=h(o),$t=n(o,"H3",{class:!0});var Ol=s($t);qo=n(Ol,"A",{id:!0,class:!0,href:!0});var _m=s(qo);qr=n(_m,"SPAN",{});var bm=s(qr);H(nn.$$.fragment,bm),bm.forEach(t),_m.forEach(t),Zh=h(Ol),Ir=n(Ol,"SPAN",{});var vm=s(Ir);ed=i(vm,"CommitInfo"),vm.forEach(t),Ol.forEach(t),Qi=h(o),Se=n(o,"DIV",{class:!0});var ms=s(Se);H(sn.$$.fragment,ms),td=h(ms),jr=n(ms,"P",{});var $m=s(jr);od=i($m,"Data structure containing information about a newly created commit."),$m.forEach(t),ad=h(ms),rn=n(ms,"P",{});var Ll=s(rn);nd=i(Ll,"Returned by "),as=n(Ll,"A",{href:!0});var ym=s(as);sd=i(ym,"create_commit()"),ym.forEach(t),rd=i(Ll,"."),Ll.forEach(t),ms.forEach(t),Xi=h(o),yt=n(o,"H2",{class:!0});var Rl=s(yt);Io=n(Rl,"A",{id:!0,class:!0,href:!0});var Em=s(Io);Nr=n(Em,"SPAN",{});var wm=s(Nr);H(ln.$$.fragment,wm),wm.forEach(t),Em.forEach(t),id=h(Rl),ns=n(Rl,"SPAN",{});var rf=s(ns);Fr=n(rf,"CODE",{});var km=s(Fr);ld=i(km,"create_commit"),km.forEach(t),cd=i(rf," API"),rf.forEach(t),Rl.forEach(t),Yi=h(o),jo=n(o,"P",{});var Cl=s(jo);pd=i(Cl,"Below are the supported values for "),Tr=n(Cl,"CODE",{});var Am=s(Tr);gd=i(Am,"CommitOperation()"),Am.forEach(t),hd=i(Cl,":"),Cl.forEach(t),Zi=h(o),fe=n(o,"DIV",{class:!0});var pt=s(fe);H(cn.$$.fragment,pt),dd=h(pt),Pr=n(pt,"P",{});var xm=s(Pr);ud=i(xm,`Data structure holding necessary info to upload a file
to a repository on the Hub`),xm.forEach(t),fd=h(pt),we=n(pt,"DIV",{class:!0});var gt=s(we);H(pn.$$.fragment,gt),md=h(gt),gn=n(gt,"P",{});var Sl=s(gn);_d=i(Sl,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Or=n(Sl,"CODE",{});var Dm=s(Or);bd=i(Dm,"path_or_fileobj"),Dm.forEach(t),vd=i(Sl,"."),Sl.forEach(t),$d=h(gt),hn=n(gt,"P",{});var Ml=s(hn);yd=i(Ml,"Triggers "),Lr=n(Ml,"CODE",{});var Hm=s(Lr);Ed=i(Hm,"self.validate"),Hm.forEach(t),wd=i(Ml,"."),Ml.forEach(t),kd=h(gt),dn=n(gt,"P",{});var Ul=s(dn);Ad=i(Ul,"Raises: "),Rr=n(Ul,"CODE",{});var qm=s(Rr);xd=i(qm,"ValueError"),qm.forEach(t),Dd=i(Ul," if self.validate fails"),Ul.forEach(t),Hd=h(gt),H(No.$$.fragment,gt),gt.forEach(t),qd=h(pt),at=n(pt,"DIV",{class:!0});var _s=s(at);H(un.$$.fragment,_s),Id=h(_s),ss=n(_s,"P",{});var lf=s(ss);jd=i(lf,"The base64-encoded content of "),Cr=n(lf,"CODE",{});var Im=s(Cr);Nd=i(Im,"path_or_fileobj"),Im.forEach(t),lf.forEach(t),Fd=h(_s),rs=n(_s,"P",{});var cf=s(rs);Td=i(cf,"Returns: "),Sr=n(cf,"CODE",{});var jm=s(Sr);Pd=i(jm,"bytes"),jm.forEach(t),cf.forEach(t),_s.forEach(t),Od=h(pt),Oe=n(pt,"DIV",{class:!0});var ta=s(Oe);H(fn.$$.fragment,ta),Ld=h(ta),mn=n(ta,"P",{});var Vl=s(mn);Rd=i(Vl,"Ensures "),Mr=n(Vl,"CODE",{});var Nm=s(Mr);Cd=i(Nm,"path_or_fileobj"),Nm.forEach(t),Sd=i(Vl," is valid:"),Vl.forEach(t),Md=h(ta),Et=n(ta,"UL",{});var bs=s(Et);nt=n(bs,"LI",{});var Gn=s(nt);Ud=i(Gn,"Ensures it is either a "),Ur=n(Gn,"CODE",{});var Fm=s(Ur);Vd=i(Fm,"str"),Fm.forEach(t),zd=i(Gn,", "),Vr=n(Gn,"CODE",{});var Tm=s(Vr);Wd=i(Tm,"bytes"),Tm.forEach(t),Gd=i(Gn," or an instance of "),zr=n(Gn,"CODE",{});var Pm=s(zr);Bd=i(Pm,"io.BufferedIOBase"),Pm.forEach(t),Gn.forEach(t),Kd=h(bs),_n=n(bs,"LI",{});var zl=s(_n);Jd=i(zl,"If it is a "),Wr=n(zl,"CODE",{});var Om=s(Wr);Qd=i(Om,"str"),Om.forEach(t),Xd=i(zl,", ensure that it is a file path and that the file exists"),zl.forEach(t),Yd=h(bs),st=n(bs,"LI",{});var Bn=s(st);Zd=i(Bn,"If it is an instance of "),Gr=n(Bn,"CODE",{});var Lm=s(Gr);eu=i(Lm,"io.BufferedIOBase"),Lm.forEach(t),tu=i(Bn,", ensures it supports "),Br=n(Bn,"CODE",{});var Rm=s(Br);ou=i(Rm,"seek()"),Rm.forEach(t),au=i(Bn," and "),Kr=n(Bn,"CODE",{});var Cm=s(Kr);nu=i(Cm,"tell()"),Cm.forEach(t),Bn.forEach(t),bs.forEach(t),su=h(ta),wt=n(ta,"P",{});var vs=s(wt);ru=i(vs,"Raises: "),Jr=n(vs,"CODE",{});var Sm=s(Jr);iu=i(Sm,"ValueError"),Sm.forEach(t),lu=i(vs," if "),Qr=n(vs,"CODE",{});var Mm=s(Qr);cu=i(Mm,"path_or_fileobj"),Mm.forEach(t),pu=i(vs," is not valid"),vs.forEach(t),ta.forEach(t),pt.forEach(t),el=h(o),kt=n(o,"DIV",{class:!0});var Wl=s(kt);H(bn.$$.fragment,Wl),gu=h(Wl),Xr=n(Wl,"P",{});var Um=s(Xr);hu=i(Um,`Data structure holding necessary info to delete
a file from a repository on the Hub`),Um.forEach(t),Wl.forEach(t),tl=h(o),At=n(o,"H2",{class:!0});var Gl=s(At);Fo=n(Gl,"A",{id:!0,class:!0,href:!0});var Vm=s(Fo);Yr=n(Vm,"SPAN",{});var zm=s(Yr);H(vn.$$.fragment,zm),zm.forEach(t),Vm.forEach(t),du=h(Gl),Zr=n(Gl,"SPAN",{});var Wm=s(Zr);uu=i(Wm,"Hugging Face local storage"),Wm.forEach(t),Gl.forEach(t),ol=h(o),$n=n(o,"P",{});var pf=s($n);ei=n(pf,"CODE",{});var Gm=s(ei);fu=i(Gm,"huggingface_hub"),Gm.forEach(t),mu=i(pf,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),pf.forEach(t),al=h(o),To=n(o,"P",{});var Bl=s(To);_u=i(Bl,"It does this using the "),is=n(Bl,"A",{href:!0});var Bm=s(is);bu=i(Bm,"HfFolder"),Bm.forEach(t),vu=i(Bl," utility, which saves data at the root of the user."),Bl.forEach(t),nl=h(o),Ae=n(o,"DIV",{class:!0});var oa=s(Ae);H(yn.$$.fragment,oa),$u=h(oa),Po=n(oa,"DIV",{class:!0});var Kl=s(Po);H(En.$$.fragment,Kl),yu=h(Kl),ti=n(Kl,"P",{});var Km=s(ti);Eu=i(Km,"Deletes the token from storage. Does not fail if token does not exist."),Km.forEach(t),Kl.forEach(t),wu=h(oa),rt=n(oa,"DIV",{class:!0});var $s=s(rt);H(wn.$$.fragment,$s),ku=h($s),oi=n($s,"P",{});var Jm=s(oi);Au=i(Jm,"Get token or None if not existent."),Jm.forEach(t),xu=h($s),kn=n($s,"P",{});var Jl=s(kn);Du=i(Jl,`Note that a token can be also provided using the
`),ai=n(Jl,"CODE",{});var Qm=s(ai);Hu=i(Qm,"HUGGING_FACE_HUB_TOKEN"),Qm.forEach(t),qu=i(Jl," environment variable."),Jl.forEach(t),$s.forEach(t),Iu=h(oa),Oo=n(oa,"DIV",{class:!0});var Ql=s(Oo);H(An.$$.fragment,Ql),ju=h(Ql),ni=n(Ql,"P",{});var Xm=s(ni);Nu=i(Xm,"Save token, creating folder as needed."),Xm.forEach(t),Ql.forEach(t),oa.forEach(t),sl=h(o),xt=n(o,"H2",{class:!0});var Xl=s(xt);Lo=n(Xl,"A",{id:!0,class:!0,href:!0});var Ym=s(Lo);si=n(Ym,"SPAN",{});var Zm=s(si);H(xn.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),Fu=h(Xl),ri=n(Xl,"SPAN",{});var e_=s(ri);Tu=i(e_,"Filtering helpers"),e_.forEach(t),Xl.forEach(t),rl=h(o),Ro=n(o,"P",{});var Yl=s(Ro);Pu=i(Yl,"Some helpers to filter repositories on the Hub are available in the "),ii=n(Yl,"CODE",{});var t_=s(ii);Ou=i(t_,"huggingface_hub"),t_.forEach(t),Lu=i(Yl," package."),Yl.forEach(t),il=h(o),Dt=n(o,"H3",{class:!0});var Zl=s(Dt);Co=n(Zl,"A",{id:!0,class:!0,href:!0});var o_=s(Co);li=n(o_,"SPAN",{});var a_=s(li);H(Dn.$$.fragment,a_),a_.forEach(t),o_.forEach(t),Ru=h(Zl),ci=n(Zl,"SPAN",{});var n_=s(ci);Cu=i(n_,"DatasetFilter"),n_.forEach(t),Zl.forEach(t),ll=h(o),Me=n(o,"DIV",{class:!0});var ys=s(Me);H(Hn.$$.fragment,ys),Su=h(ys),pi=n(ys,"P",{});var s_=s(pi);Mu=i(s_,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),s_.forEach(t),Uu=h(ys),H(So.$$.fragment,ys),ys.forEach(t),cl=h(o),Ht=n(o,"H3",{class:!0});var ec=s(Ht);Mo=n(ec,"A",{id:!0,class:!0,href:!0});var r_=s(Mo);gi=n(r_,"SPAN",{});var i_=s(gi);H(qn.$$.fragment,i_),i_.forEach(t),r_.forEach(t),Vu=h(ec),hi=n(ec,"SPAN",{});var l_=s(hi);zu=i(l_,"ModelFilter"),l_.forEach(t),ec.forEach(t),pl=h(o),Ue=n(o,"DIV",{class:!0});var Es=s(Ue);H(In.$$.fragment,Es),Wu=h(Es),di=n(Es,"P",{});var c_=s(di);Gu=i(c_,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),c_.forEach(t),Bu=h(Es),H(Uo.$$.fragment,Es),Es.forEach(t),gl=h(o),qt=n(o,"H3",{class:!0});var tc=s(qt);Vo=n(tc,"A",{id:!0,class:!0,href:!0});var p_=s(Vo);ui=n(p_,"SPAN",{});var g_=s(ui);H(jn.$$.fragment,g_),g_.forEach(t),p_.forEach(t),Ku=h(tc),fi=n(tc,"SPAN",{});var h_=s(fi);Ju=i(h_,"DatasetSearchArguments"),h_.forEach(t),tc.forEach(t),hl=h(o),Ve=n(o,"DIV",{class:!0});var ws=s(Ve);H(Nn.$$.fragment,ws),Qu=h(ws),mi=n(ws,"P",{});var d_=s(mi);Xu=i(d_,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),d_.forEach(t),Yu=h(ws),H(zo.$$.fragment,ws),ws.forEach(t),dl=h(o),It=n(o,"H3",{class:!0});var oc=s(It);Wo=n(oc,"A",{id:!0,class:!0,href:!0});var u_=s(Wo);_i=n(u_,"SPAN",{});var f_=s(_i);H(Fn.$$.fragment,f_),f_.forEach(t),u_.forEach(t),Zu=h(oc),bi=n(oc,"SPAN",{});var m_=s(bi);ef=i(m_,"ModelSearchArguments"),m_.forEach(t),oc.forEach(t),ul=h(o),ze=n(o,"DIV",{class:!0});var ks=s(ze);H(Tn.$$.fragment,ks),tf=h(ks),vi=n(ks,"P",{});var __=s(vi);of=i(__,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),__.forEach(t),af=h(ks),H(Go.$$.fragment,ks),ks.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(cb)),m(c,"id","hugging-face-hub-api"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#hugging-face-hub-api"),m(f,"class","relative group"),m(ve,"id","huggingface_hub.HfApi"),m(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ve,"href","#huggingface_hub.HfApi"),m(de,"class","relative group"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kn,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Qn,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xn,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Zn,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ts,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(os,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ra,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),m(Ra,"rel","nofollow"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ba,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),m(Ba,"rel","nofollow"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ao,"id","huggingface_hub.hf_api.ModelInfo"),m(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ao,"href","#huggingface_hub.hf_api.ModelInfo"),m(dt,"class","relative group"),m(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","huggingface_hub.hf_api.DatasetInfo"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#huggingface_hub.hf_api.DatasetInfo"),m(ft,"class","relative group"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","huggingface_hub.hf_api.SpaceInfo"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#huggingface_hub.hf_api.SpaceInfo"),m(_t,"class","relative group"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","huggingface_hub.hf_api.RepoFile"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#huggingface_hub.hf_api.RepoFile"),m(bt,"class","relative group"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qo,"id","huggingface_hub.CommitInfo"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#huggingface_hub.CommitInfo"),m($t,"class","relative group"),m(as,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","huggingface_hub.CommitOperationAdd"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#huggingface_hub.CommitOperationAdd"),m(yt,"class","relative group"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","huggingface_hub.HfFolder"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#huggingface_hub.HfFolder"),m(At,"class","relative group"),m(is,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/hf_api#huggingface_hub.HfFolder"),m(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","filtering-helpers"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#filtering-helpers"),m(xt,"class","relative group"),m(Co,"id","huggingface_hub.DatasetFilter"),m(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Co,"href","#huggingface_hub.DatasetFilter"),m(Dt,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mo,"id","huggingface_hub.ModelFilter"),m(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Mo,"href","#huggingface_hub.ModelFilter"),m(Ht,"class","relative group"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","huggingface_hub.DatasetSearchArguments"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#huggingface_hub.DatasetSearchArguments"),m(qt,"class","relative group"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","huggingface_hub.ModelSearchArguments"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#huggingface_hub.ModelSearchArguments"),m(It,"class","relative group"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,E){e(document.head,p),$(o,b,E),$(o,f,E),e(f,c),e(c,d),q(l,d,null),e(f,u),e(f,P),e(P,v),$(o,x,E),$(o,w,E),e(w,y),e(w,k),e(k,O),e(w,T),$(o,L,E),$(o,_,E),e(_,F),e(_,S),e(S,V),e(_,R),$(o,K,E),$(o,G,E),e(G,A),$(o,M,E),q(C,o,E),$(o,Y,E),$(o,te,E),e(te,Z),e(te,J),e(J,ee),e(te,ae),$(o,B,E),q(X,o,E),$(o,oe,E),$(o,se,E),e(se,Be),e(se,be),e(be,ht),e(se,Ke),$(o,Re,E),$(o,de,E),e(de,ve),e(ve,Nt),q(Je,Nt,null),e(de,aa),e(de,Ft),e(Ft,na),$(o,sa,E),$(o,z,E),q(ra,z,null),e(z,ac),e(z,xe),q(ia,xe,null),e(xe,nc),e(xe,As),e(As,sc),e(xe,rc),q(Tt,xe,null),e(xe,ic),q(Pt,xe,null),e(z,lc),e(z,De),q(la,De,null),e(De,cc),e(De,xs),e(xs,pc),e(De,gc),q(Ot,De,null),e(De,hc),q(Lt,De,null),e(z,dc),e(z,Qe),q(ca,Qe,null),e(Qe,uc),e(Qe,Ds),e(Ds,fc),e(Qe,mc),q(Rt,Qe,null),e(z,_c),e(z,le),q(pa,le,null),e(le,bc),e(le,Hs),e(Hs,vc),e(le,$c),e(le,ga),e(ga,yc),e(ga,qs),e(qs,Ec),e(ga,wc),e(le,kc),e(le,ha),e(ha,Ac),e(ha,Kn),e(Kn,xc),e(ha,Dc),e(le,Hc),e(le,Jn),e(Jn,qc),e(Jn,Qn),e(Qn,Ic),e(le,jc),q(Ct,le,null),e(z,Nc),e(z,ce),q(da,ce,null),e(ce,Fc),e(ce,ua),e(ua,Tc),e(ua,Is),e(Is,Pc),e(ua,Oc),e(ce,Lc),e(ce,fa),e(fa,Rc),e(fa,Xn),e(Xn,Cc),e(fa,Sc),e(ce,Mc),e(ce,ma),e(ma,Uc),e(ma,js),e(js,Vc),e(ma,zc),e(ce,Wc),e(ce,Yn),e(Yn,Gc),e(Yn,Zn),e(Zn,Bc),e(ce,Kc),q(St,ce,null),e(z,Jc),e(z,Mt),q(_a,Mt,null),e(Mt,Qc),e(Mt,Ns),e(Ns,Xc),e(z,Yc),e(z,He),q(ba,He,null),e(He,Zc),e(He,Fs),e(Fs,ep),e(He,tp),e(He,Ts),e(Ts,op),e(He,ap),q(Ut,He,null),e(z,np),e(z,Xe),q(va,Xe,null),e(Xe,sp),e(Xe,Ps),e(Ps,rp),e(Xe,ip),q(Vt,Xe,null),e(z,lp),e(z,Ye),q($a,Ye,null),e(Ye,cp),e(Ye,Os),e(Os,pp),e(Ye,gp),q(zt,Ye,null),e(z,hp),e(z,Ze),q(ya,Ze,null),e(Ze,dp),e(Ze,Ls),e(Ls,up),e(Ze,fp),q(Wt,Ze,null),e(z,mp),e(z,Gt),q(Ea,Gt,null),e(Gt,_p),e(Gt,Rs),e(Rs,bp),e(z,vp),e(z,qe),q(wa,qe,null),e(qe,$p),e(qe,Cs),e(Cs,yp),e(qe,Ep),e(qe,es),e(es,wp),e(es,ts),e(ts,kp),e(qe,Ap),q(Bt,qe,null),e(z,xp),e(z,Kt),q(ka,Kt,null),e(Kt,Dp),e(Kt,Ss),e(Ss,Hp),e(z,qp),e(z,Jt),q(Aa,Jt,null),e(Jt,Ip),e(Jt,Ms),e(Ms,jp),e(z,Np),e(z,$e),q(xa,$e,null),e($e,Fp),e($e,Us),e(Us,Tp),e($e,Pp),e($e,Vs),e(Vs,Op),e($e,Lp),q(Qt,$e,null),e($e,Rp),q(Xt,$e,null),e(z,Cp),e(z,Ie),q(Da,Ie,null),e(Ie,Sp),e(Ie,zs),e(zs,Mp),e(Ie,Up),q(Yt,Ie,null),e(Ie,Vp),q(Zt,Ie,null),e(z,zp),e(z,je),q(Ha,je,null),e(je,Wp),e(je,Ws),e(Ws,Gp),e(je,Bp),q(eo,je,null),e(je,Kp),q(to,je,null),e(z,Jp),e(z,oo),q(qa,oo,null),e(oo,Qp),e(oo,Gs),e(Gs,Xp),e(z,Yp),e(z,ye),q(Ia,ye,null),e(ye,Zp),e(ye,Bs),e(Bs,eg),e(ye,tg),e(ye,ja),e(ja,og),e(ja,os),e(os,ag),e(ja,ng),e(ye,sg),q(ao,ye,null),e(ye,rg),q(no,ye,null),e(z,ig),e(z,so),q(Na,so,null),e(so,lg),e(so,Ks),e(Ks,cg),e(z,pg),e(z,ro),q(Fa,ro,null),e(ro,gg),e(ro,Js),e(Js,hg),e(z,dg),e(z,et),q(Ta,et,null),e(et,ug),e(et,Qs),e(Qs,fg),e(et,mg),q(io,et,null),e(z,_g),e(z,Ne),q(Pa,Ne,null),e(Ne,bg),e(Ne,Xs),e(Xs,vg),e(Ne,$g),e(Ne,Ys),e(Ys,yg),e(Ne,Eg),q(lo,Ne,null),e(z,wg),e(z,Fe),q(Oa,Fe,null),e(Fe,kg),e(Fe,Zs),e(Zs,Ag),e(Fe,xg),e(Fe,La),e(La,Dg),e(La,Ra),e(Ra,Hg),e(La,qg),e(Fe,Ig),q(co,Fe,null),e(z,jg),e(z,Te),q(Ca,Te,null),e(Te,Ng),e(Te,er),e(er,Fg),e(Te,Tg),q(po,Te,null),e(Te,Pg),q(go,Te,null),e(z,Og),e(z,tt),q(Sa,tt,null),e(tt,Lg),e(tt,tr),e(tr,Rg),e(tt,Cg),q(ho,tt,null),e(z,Sg),e(z,uo),q(Ma,uo,null),e(uo,Mg),e(uo,or),e(or,Ug),e(z,Vg),e(z,Pe),q(Ua,Pe,null),e(Pe,zg),e(Pe,ar),e(ar,Wg),e(Pe,Gg),e(Pe,nr),e(nr,Bg),e(Pe,Kg),q(fo,Pe,null),e(z,Jg),e(z,mo),q(Va,mo,null),e(mo,Qg),e(mo,sr),e(sr,Xg),e(z,Yg),e(z,ot),q(za,ot,null),e(ot,Zg),e(ot,rr),e(rr,eh),e(ot,th),q(_o,ot,null),e(z,oh),e(z,Ee),q(Wa,Ee,null),e(Ee,ah),e(Ee,ir),e(ir,nh),e(Ee,sh),q(bo,Ee,null),e(Ee,rh),q(vo,Ee,null),e(Ee,ih),q($o,Ee,null),e(z,lh),e(z,re),q(Ga,re,null),e(re,ch),e(re,lr),e(lr,ph),e(re,gh),e(re,cr),e(cr,hh),e(re,dh),e(re,ue),e(ue,uh),e(ue,pr),e(pr,fh),e(ue,mh),e(ue,gr),e(gr,_h),e(ue,bh),e(ue,Ba),e(Ba,vh),e(ue,$h),e(ue,hr),e(hr,yh),e(ue,Eh),e(ue,dr),e(dr,wh),e(ue,kh),e(re,Ah),e(re,Ka),e(Ka,xh),e(Ka,ur),e(ur,Dh),e(Ka,Hh),e(re,qh),q(yo,re,null),e(re,Ih),q(Eo,re,null),e(re,jh),q(wo,re,null),e(z,Nh),e(z,ko),q(Ja,ko,null),e(ko,Fh),e(ko,fr),e(fr,Th),$(o,Mi,E),$(o,dt,E),e(dt,Ao),e(Ao,mr),q(Qa,mr,null),e(dt,Ph),e(dt,_r),e(_r,Oh),$(o,Ui,E),$(o,ut,E),q(Xa,ut,null),e(ut,Lh),e(ut,br),e(br,Rh),$(o,Vi,E),$(o,ft,E),e(ft,xo),e(xo,vr),q(Ya,vr,null),e(ft,Ch),e(ft,$r),e($r,Sh),$(o,zi,E),$(o,mt,E),q(Za,mt,null),e(mt,Mh),e(mt,yr),e(yr,Uh),$(o,Wi,E),$(o,_t,E),e(_t,Do),e(Do,Er),q(en,Er,null),e(_t,Vh),e(_t,wr),e(wr,zh),$(o,Gi,E),$(o,Ce,E),q(tn,Ce,null),e(Ce,Wh),e(Ce,kr),e(kr,Gh),e(Ce,Bh),e(Ce,Ar),e(Ar,Kh),$(o,Bi,E),$(o,bt,E),e(bt,Ho),e(Ho,xr),q(on,xr,null),e(bt,Jh),e(bt,Dr),e(Dr,Qh),$(o,Ki,E),$(o,vt,E),q(an,vt,null),e(vt,Xh),e(vt,Hr),e(Hr,Yh),$(o,Ji,E),$(o,$t,E),e($t,qo),e(qo,qr),q(nn,qr,null),e($t,Zh),e($t,Ir),e(Ir,ed),$(o,Qi,E),$(o,Se,E),q(sn,Se,null),e(Se,td),e(Se,jr),e(jr,od),e(Se,ad),e(Se,rn),e(rn,nd),e(rn,as),e(as,sd),e(rn,rd),$(o,Xi,E),$(o,yt,E),e(yt,Io),e(Io,Nr),q(ln,Nr,null),e(yt,id),e(yt,ns),e(ns,Fr),e(Fr,ld),e(ns,cd),$(o,Yi,E),$(o,jo,E),e(jo,pd),e(jo,Tr),e(Tr,gd),e(jo,hd),$(o,Zi,E),$(o,fe,E),q(cn,fe,null),e(fe,dd),e(fe,Pr),e(Pr,ud),e(fe,fd),e(fe,we),q(pn,we,null),e(we,md),e(we,gn),e(gn,_d),e(gn,Or),e(Or,bd),e(gn,vd),e(we,$d),e(we,hn),e(hn,yd),e(hn,Lr),e(Lr,Ed),e(hn,wd),e(we,kd),e(we,dn),e(dn,Ad),e(dn,Rr),e(Rr,xd),e(dn,Dd),e(we,Hd),q(No,we,null),e(fe,qd),e(fe,at),q(un,at,null),e(at,Id),e(at,ss),e(ss,jd),e(ss,Cr),e(Cr,Nd),e(at,Fd),e(at,rs),e(rs,Td),e(rs,Sr),e(Sr,Pd),e(fe,Od),e(fe,Oe),q(fn,Oe,null),e(Oe,Ld),e(Oe,mn),e(mn,Rd),e(mn,Mr),e(Mr,Cd),e(mn,Sd),e(Oe,Md),e(Oe,Et),e(Et,nt),e(nt,Ud),e(nt,Ur),e(Ur,Vd),e(nt,zd),e(nt,Vr),e(Vr,Wd),e(nt,Gd),e(nt,zr),e(zr,Bd),e(Et,Kd),e(Et,_n),e(_n,Jd),e(_n,Wr),e(Wr,Qd),e(_n,Xd),e(Et,Yd),e(Et,st),e(st,Zd),e(st,Gr),e(Gr,eu),e(st,tu),e(st,Br),e(Br,ou),e(st,au),e(st,Kr),e(Kr,nu),e(Oe,su),e(Oe,wt),e(wt,ru),e(wt,Jr),e(Jr,iu),e(wt,lu),e(wt,Qr),e(Qr,cu),e(wt,pu),$(o,el,E),$(o,kt,E),q(bn,kt,null),e(kt,gu),e(kt,Xr),e(Xr,hu),$(o,tl,E),$(o,At,E),e(At,Fo),e(Fo,Yr),q(vn,Yr,null),e(At,du),e(At,Zr),e(Zr,uu),$(o,ol,E),$(o,$n,E),e($n,ei),e(ei,fu),e($n,mu),$(o,al,E),$(o,To,E),e(To,_u),e(To,is),e(is,bu),e(To,vu),$(o,nl,E),$(o,Ae,E),q(yn,Ae,null),e(Ae,$u),e(Ae,Po),q(En,Po,null),e(Po,yu),e(Po,ti),e(ti,Eu),e(Ae,wu),e(Ae,rt),q(wn,rt,null),e(rt,ku),e(rt,oi),e(oi,Au),e(rt,xu),e(rt,kn),e(kn,Du),e(kn,ai),e(ai,Hu),e(kn,qu),e(Ae,Iu),e(Ae,Oo),q(An,Oo,null),e(Oo,ju),e(Oo,ni),e(ni,Nu),$(o,sl,E),$(o,xt,E),e(xt,Lo),e(Lo,si),q(xn,si,null),e(xt,Fu),e(xt,ri),e(ri,Tu),$(o,rl,E),$(o,Ro,E),e(Ro,Pu),e(Ro,ii),e(ii,Ou),e(Ro,Lu),$(o,il,E),$(o,Dt,E),e(Dt,Co),e(Co,li),q(Dn,li,null),e(Dt,Ru),e(Dt,ci),e(ci,Cu),$(o,ll,E),$(o,Me,E),q(Hn,Me,null),e(Me,Su),e(Me,pi),e(pi,Mu),e(Me,Uu),q(So,Me,null),$(o,cl,E),$(o,Ht,E),e(Ht,Mo),e(Mo,gi),q(qn,gi,null),e(Ht,Vu),e(Ht,hi),e(hi,zu),$(o,pl,E),$(o,Ue,E),q(In,Ue,null),e(Ue,Wu),e(Ue,di),e(di,Gu),e(Ue,Bu),q(Uo,Ue,null),$(o,gl,E),$(o,qt,E),e(qt,Vo),e(Vo,ui),q(jn,ui,null),e(qt,Ku),e(qt,fi),e(fi,Ju),$(o,hl,E),$(o,Ve,E),q(Nn,Ve,null),e(Ve,Qu),e(Ve,mi),e(mi,Xu),e(Ve,Yu),q(zo,Ve,null),$(o,dl,E),$(o,It,E),e(It,Wo),e(Wo,_i),q(Fn,_i,null),e(It,Zu),e(It,bi),e(bi,ef),$(o,ul,E),$(o,ze,E),q(Tn,ze,null),e(ze,tf),e(ze,vi),e(vi,of),e(ze,af),q(Go,ze,null),fl=!0},p(o,[E]){const Pn={};E&2&&(Pn.$$scope={dirty:E,ctx:o}),Tt.$set(Pn);const $i={};E&2&&($i.$$scope={dirty:E,ctx:o}),Pt.$set($i);const yi={};E&2&&(yi.$$scope={dirty:E,ctx:o}),Ot.$set(yi);const Ei={};E&2&&(Ei.$$scope={dirty:E,ctx:o}),Lt.$set(Ei);const On={};E&2&&(On.$$scope={dirty:E,ctx:o}),Rt.$set(On);const wi={};E&2&&(wi.$$scope={dirty:E,ctx:o}),Ct.$set(wi);const Ln={};E&2&&(Ln.$$scope={dirty:E,ctx:o}),St.$set(Ln);const ki={};E&2&&(ki.$$scope={dirty:E,ctx:o}),Ut.$set(ki);const Ai={};E&2&&(Ai.$$scope={dirty:E,ctx:o}),Vt.$set(Ai);const Rn={};E&2&&(Rn.$$scope={dirty:E,ctx:o}),zt.$set(Rn);const xi={};E&2&&(xi.$$scope={dirty:E,ctx:o}),Wt.$set(xi);const Cn={};E&2&&(Cn.$$scope={dirty:E,ctx:o}),Bt.$set(Cn);const Di={};E&2&&(Di.$$scope={dirty:E,ctx:o}),Qt.$set(Di);const Sn={};E&2&&(Sn.$$scope={dirty:E,ctx:o}),Xt.$set(Sn);const Hi={};E&2&&(Hi.$$scope={dirty:E,ctx:o}),Yt.$set(Hi);const qi={};E&2&&(qi.$$scope={dirty:E,ctx:o}),Zt.$set(qi);const Ii={};E&2&&(Ii.$$scope={dirty:E,ctx:o}),eo.$set(Ii);const W={};E&2&&(W.$$scope={dirty:E,ctx:o}),to.$set(W);const We={};E&2&&(We.$$scope={dirty:E,ctx:o}),ao.$set(We);const ji={};E&2&&(ji.$$scope={dirty:E,ctx:o}),no.$set(ji);const Ge={};E&2&&(Ge.$$scope={dirty:E,ctx:o}),io.$set(Ge);const Ni={};E&2&&(Ni.$$scope={dirty:E,ctx:o}),lo.$set(Ni);const jt={};E&2&&(jt.$$scope={dirty:E,ctx:o}),co.$set(jt);const Fi={};E&2&&(Fi.$$scope={dirty:E,ctx:o}),po.$set(Fi);const me={};E&2&&(me.$$scope={dirty:E,ctx:o}),go.$set(me);const Ti={};E&2&&(Ti.$$scope={dirty:E,ctx:o}),ho.$set(Ti);const Mn={};E&2&&(Mn.$$scope={dirty:E,ctx:o}),fo.$set(Mn);const Pi={};E&2&&(Pi.$$scope={dirty:E,ctx:o}),_o.$set(Pi);const Un={};E&2&&(Un.$$scope={dirty:E,ctx:o}),bo.$set(Un);const Oi={};E&2&&(Oi.$$scope={dirty:E,ctx:o}),vo.$set(Oi);const ls={};E&2&&(ls.$$scope={dirty:E,ctx:o}),$o.$set(ls);const Li={};E&2&&(Li.$$scope={dirty:E,ctx:o}),yo.$set(Li);const _e={};E&2&&(_e.$$scope={dirty:E,ctx:o}),Eo.$set(_e);const Vn={};E&2&&(Vn.$$scope={dirty:E,ctx:o}),wo.$set(Vn);const Ri={};E&2&&(Ri.$$scope={dirty:E,ctx:o}),No.$set(Ri);const zn={};E&2&&(zn.$$scope={dirty:E,ctx:o}),So.$set(zn);const Ci={};E&2&&(Ci.$$scope={dirty:E,ctx:o}),Uo.$set(Ci);const Wn={};E&2&&(Wn.$$scope={dirty:E,ctx:o}),zo.$set(Wn);const Si={};E&2&&(Si.$$scope={dirty:E,ctx:o}),Go.$set(Si)},i(o){fl||(I(l.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I(Je.$$.fragment,o),I(ra.$$.fragment,o),I(ia.$$.fragment,o),I(Tt.$$.fragment,o),I(Pt.$$.fragment,o),I(la.$$.fragment,o),I(Ot.$$.fragment,o),I(Lt.$$.fragment,o),I(ca.$$.fragment,o),I(Rt.$$.fragment,o),I(pa.$$.fragment,o),I(Ct.$$.fragment,o),I(da.$$.fragment,o),I(St.$$.fragment,o),I(_a.$$.fragment,o),I(ba.$$.fragment,o),I(Ut.$$.fragment,o),I(va.$$.fragment,o),I(Vt.$$.fragment,o),I($a.$$.fragment,o),I(zt.$$.fragment,o),I(ya.$$.fragment,o),I(Wt.$$.fragment,o),I(Ea.$$.fragment,o),I(wa.$$.fragment,o),I(Bt.$$.fragment,o),I(ka.$$.fragment,o),I(Aa.$$.fragment,o),I(xa.$$.fragment,o),I(Qt.$$.fragment,o),I(Xt.$$.fragment,o),I(Da.$$.fragment,o),I(Yt.$$.fragment,o),I(Zt.$$.fragment,o),I(Ha.$$.fragment,o),I(eo.$$.fragment,o),I(to.$$.fragment,o),I(qa.$$.fragment,o),I(Ia.$$.fragment,o),I(ao.$$.fragment,o),I(no.$$.fragment,o),I(Na.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(io.$$.fragment,o),I(Pa.$$.fragment,o),I(lo.$$.fragment,o),I(Oa.$$.fragment,o),I(co.$$.fragment,o),I(Ca.$$.fragment,o),I(po.$$.fragment,o),I(go.$$.fragment,o),I(Sa.$$.fragment,o),I(ho.$$.fragment,o),I(Ma.$$.fragment,o),I(Ua.$$.fragment,o),I(fo.$$.fragment,o),I(Va.$$.fragment,o),I(za.$$.fragment,o),I(_o.$$.fragment,o),I(Wa.$$.fragment,o),I(bo.$$.fragment,o),I(vo.$$.fragment,o),I($o.$$.fragment,o),I(Ga.$$.fragment,o),I(yo.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(Ja.$$.fragment,o),I(Qa.$$.fragment,o),I(Xa.$$.fragment,o),I(Ya.$$.fragment,o),I(Za.$$.fragment,o),I(en.$$.fragment,o),I(tn.$$.fragment,o),I(on.$$.fragment,o),I(an.$$.fragment,o),I(nn.$$.fragment,o),I(sn.$$.fragment,o),I(ln.$$.fragment,o),I(cn.$$.fragment,o),I(pn.$$.fragment,o),I(No.$$.fragment,o),I(un.$$.fragment,o),I(fn.$$.fragment,o),I(bn.$$.fragment,o),I(vn.$$.fragment,o),I(yn.$$.fragment,o),I(En.$$.fragment,o),I(wn.$$.fragment,o),I(An.$$.fragment,o),I(xn.$$.fragment,o),I(Dn.$$.fragment,o),I(Hn.$$.fragment,o),I(So.$$.fragment,o),I(qn.$$.fragment,o),I(In.$$.fragment,o),I(Uo.$$.fragment,o),I(jn.$$.fragment,o),I(Nn.$$.fragment,o),I(zo.$$.fragment,o),I(Fn.$$.fragment,o),I(Tn.$$.fragment,o),I(Go.$$.fragment,o),fl=!0)},o(o){j(l.$$.fragment,o),j(C.$$.fragment,o),j(X.$$.fragment,o),j(Je.$$.fragment,o),j(ra.$$.fragment,o),j(ia.$$.fragment,o),j(Tt.$$.fragment,o),j(Pt.$$.fragment,o),j(la.$$.fragment,o),j(Ot.$$.fragment,o),j(Lt.$$.fragment,o),j(ca.$$.fragment,o),j(Rt.$$.fragment,o),j(pa.$$.fragment,o),j(Ct.$$.fragment,o),j(da.$$.fragment,o),j(St.$$.fragment,o),j(_a.$$.fragment,o),j(ba.$$.fragment,o),j(Ut.$$.fragment,o),j(va.$$.fragment,o),j(Vt.$$.fragment,o),j($a.$$.fragment,o),j(zt.$$.fragment,o),j(ya.$$.fragment,o),j(Wt.$$.fragment,o),j(Ea.$$.fragment,o),j(wa.$$.fragment,o),j(Bt.$$.fragment,o),j(ka.$$.fragment,o),j(Aa.$$.fragment,o),j(xa.$$.fragment,o),j(Qt.$$.fragment,o),j(Xt.$$.fragment,o),j(Da.$$.fragment,o),j(Yt.$$.fragment,o),j(Zt.$$.fragment,o),j(Ha.$$.fragment,o),j(eo.$$.fragment,o),j(to.$$.fragment,o),j(qa.$$.fragment,o),j(Ia.$$.fragment,o),j(ao.$$.fragment,o),j(no.$$.fragment,o),j(Na.$$.fragment,o),j(Fa.$$.fragment,o),j(Ta.$$.fragment,o),j(io.$$.fragment,o),j(Pa.$$.fragment,o),j(lo.$$.fragment,o),j(Oa.$$.fragment,o),j(co.$$.fragment,o),j(Ca.$$.fragment,o),j(po.$$.fragment,o),j(go.$$.fragment,o),j(Sa.$$.fragment,o),j(ho.$$.fragment,o),j(Ma.$$.fragment,o),j(Ua.$$.fragment,o),j(fo.$$.fragment,o),j(Va.$$.fragment,o),j(za.$$.fragment,o),j(_o.$$.fragment,o),j(Wa.$$.fragment,o),j(bo.$$.fragment,o),j(vo.$$.fragment,o),j($o.$$.fragment,o),j(Ga.$$.fragment,o),j(yo.$$.fragment,o),j(Eo.$$.fragment,o),j(wo.$$.fragment,o),j(Ja.$$.fragment,o),j(Qa.$$.fragment,o),j(Xa.$$.fragment,o),j(Ya.$$.fragment,o),j(Za.$$.fragment,o),j(en.$$.fragment,o),j(tn.$$.fragment,o),j(on.$$.fragment,o),j(an.$$.fragment,o),j(nn.$$.fragment,o),j(sn.$$.fragment,o),j(ln.$$.fragment,o),j(cn.$$.fragment,o),j(pn.$$.fragment,o),j(No.$$.fragment,o),j(un.$$.fragment,o),j(fn.$$.fragment,o),j(bn.$$.fragment,o),j(vn.$$.fragment,o),j(yn.$$.fragment,o),j(En.$$.fragment,o),j(wn.$$.fragment,o),j(An.$$.fragment,o),j(xn.$$.fragment,o),j(Dn.$$.fragment,o),j(Hn.$$.fragment,o),j(So.$$.fragment,o),j(qn.$$.fragment,o),j(In.$$.fragment,o),j(Uo.$$.fragment,o),j(jn.$$.fragment,o),j(Nn.$$.fragment,o),j(zo.$$.fragment,o),j(Fn.$$.fragment,o),j(Tn.$$.fragment,o),j(Go.$$.fragment,o),fl=!1},d(o){t(p),o&&t(b),o&&t(f),N(l),o&&t(x),o&&t(w),o&&t(L),o&&t(_),o&&t(K),o&&t(G),o&&t(M),N(C,o),o&&t(Y),o&&t(te),o&&t(B),N(X,o),o&&t(oe),o&&t(se),o&&t(Re),o&&t(de),N(Je),o&&t(sa),o&&t(z),N(ra),N(ia),N(Tt),N(Pt),N(la),N(Ot),N(Lt),N(ca),N(Rt),N(pa),N(Ct),N(da),N(St),N(_a),N(ba),N(Ut),N(va),N(Vt),N($a),N(zt),N(ya),N(Wt),N(Ea),N(wa),N(Bt),N(ka),N(Aa),N(xa),N(Qt),N(Xt),N(Da),N(Yt),N(Zt),N(Ha),N(eo),N(to),N(qa),N(Ia),N(ao),N(no),N(Na),N(Fa),N(Ta),N(io),N(Pa),N(lo),N(Oa),N(co),N(Ca),N(po),N(go),N(Sa),N(ho),N(Ma),N(Ua),N(fo),N(Va),N(za),N(_o),N(Wa),N(bo),N(vo),N($o),N(Ga),N(yo),N(Eo),N(wo),N(Ja),o&&t(Mi),o&&t(dt),N(Qa),o&&t(Ui),o&&t(ut),N(Xa),o&&t(Vi),o&&t(ft),N(Ya),o&&t(zi),o&&t(mt),N(Za),o&&t(Wi),o&&t(_t),N(en),o&&t(Gi),o&&t(Ce),N(tn),o&&t(Bi),o&&t(bt),N(on),o&&t(Ki),o&&t(vt),N(an),o&&t(Ji),o&&t($t),N(nn),o&&t(Qi),o&&t(Se),N(sn),o&&t(Xi),o&&t(yt),N(ln),o&&t(Yi),o&&t(jo),o&&t(Zi),o&&t(fe),N(cn),N(pn),N(No),N(un),N(fn),o&&t(el),o&&t(kt),N(bn),o&&t(tl),o&&t(At),N(vn),o&&t(ol),o&&t($n),o&&t(al),o&&t(To),o&&t(nl),o&&t(Ae),N(yn),N(En),N(wn),N(An),o&&t(sl),o&&t(xt),N(xn),o&&t(rl),o&&t(Ro),o&&t(il),o&&t(Dt),N(Dn),o&&t(ll),o&&t(Me),N(Hn),N(So),o&&t(cl),o&&t(Ht),N(qn),o&&t(pl),o&&t(Ue),N(In),N(Uo),o&&t(gl),o&&t(qt),N(jn),o&&t(hl),o&&t(Ve),N(Nn),N(zo),o&&t(dl),o&&t(It),N(Fn),o&&t(ul),o&&t(ze),N(Tn),N(Go)}}}const cb={local:"hugging-face-hub-api",sections:[{local:null,sections:[{local:"huggingface_hub.HfApi",title:"HfApi"},{local:"huggingface_hub.hf_api.ModelInfo",title:"ModelInfo"},{local:"huggingface_hub.hf_api.DatasetInfo",title:"DatasetInfo"},{local:"huggingface_hub.hf_api.SpaceInfo",title:"SpaceInfo"},{local:"huggingface_hub.hf_api.RepoFile",title:"RepoFile"},{local:"huggingface_hub.CommitInfo",title:"CommitInfo"}],title:null},{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"filtering-helpers",sections:[{local:"huggingface_hub.DatasetFilter",title:"DatasetFilter"},{local:"huggingface_hub.ModelFilter",title:"ModelFilter"},{local:"huggingface_hub.DatasetSearchArguments",title:"DatasetSearchArguments"},{local:"huggingface_hub.ModelSearchArguments",title:"ModelSearchArguments"}],title:"Filtering helpers"}],title:"Hugging Face Hub API"};function pb(U){return E_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _b extends b_{constructor(p){super();v_(this,p,pb,lb,$_,{})}}export{_b as default,cb as metadata};
