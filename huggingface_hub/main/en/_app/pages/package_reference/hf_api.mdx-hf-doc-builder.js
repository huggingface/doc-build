import{S as Vu,i as zu,s as Wu,e as o,k as g,w as j,t as r,M as Gu,c as a,d as t,m as d,a as n,x as I,h as i,b as $,G as e,g as E,y as N,q as F,o as T,B as P,v as Bu,L as de}from"../../chunks/vendor-hf-doc-builder.js";import{T as ne}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Fi}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ku(U){let p,_,f,c,h;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),_=r("Examples:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Examples:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function Ju(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Qu(U){let p,_,f,c,h;return c=new ie({props:{code:`
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
`}}),{c(){p=o("p"),_=r("Examples:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Examples:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function Xu(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function Yu(U){let p,_,f,c,h,l,u,q,b,x,y,v,k;return{c(){p=o("p"),_=o("code"),f=r("create_commit"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=o("code"),l=r("repo_id"),u=r(` and
`),q=o("code"),b=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),y=o("a"),v=r("create_repo()"),k=r("."),this.h()},l(O){p=a(O,"P",{});var H=n(p);_=a(H,"CODE",{});var L=n(_);f=i(L,"create_commit"),L.forEach(t),c=i(H,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=a(H,"CODE",{});var m=n(h);l=i(m,"repo_id"),m.forEach(t),u=i(H,` and
`),q=a(H,"CODE",{});var D=n(q);b=i(D,"repo_type"),D.forEach(t),x=i(H,` are set correctly. If repo does not exist, create it first using
`),y=a(H,"A",{href:!0});var S=n(y);v=i(S,"create_repo()"),S.forEach(t),k=i(H,"."),H.forEach(t),this.h()},h(){$(y,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,H){E(O,p,H),e(p,_),e(_,f),e(p,c),e(p,h),e(h,l),e(p,u),e(p,q),e(q,b),e(p,x),e(p,y),e(y,v),e(p,k)},d(O){O&&t(p)}}}function Zu(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function ef(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function tf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),v=g(),k=o("li"),O=o("a"),H=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=n(p);_=i(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var S=n(c);h=a(S,"LI",{});var z=n(h);l=a(z,"A",{href:!0});var R=n(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),q=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(z,"CODE",{});var K=n(b);x=i(K,"private"),K.forEach(t),y=i(z," and you do not have access."),z.forEach(t),v=d(S),k=a(S,"LI",{});var G=n(k);O=a(G,"A",{href:!0});var A=n(O);H=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){E(m,p,D),e(p,_),E(m,f,D),E(m,c,D),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y),e(c,v),e(c,k),e(k,O),e(O,H),e(k,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function of(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=o("li"),C=o("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),Z=g(),J=o("li"),ee=o("a"),ae=r("EntryNotFoundError"),B=r(`
If the file to download cannot be found.`),this.h()},l(X){p=a(X,"P",{});var oe=n(p);_=i(oe,"Raises the following errors:"),oe.forEach(t),f=d(X),c=a(X,"UL",{});var se=n(c);h=a(se,"LI",{});var We=n(h);l=a(We,"A",{href:!0,rel:!0});var be=n(l);u=a(be,"CODE",{});var ct=n(u);q=i(ct,"HTTPError"),ct.forEach(t),be.forEach(t),b=i(We,`
if the HuggingFace API returned an error`),We.forEach(t),x=d(se),y=a(se,"LI",{});var Ge=n(y);v=a(Ge,"A",{href:!0,rel:!0});var Oe=n(v);k=a(Oe,"CODE",{});var V=n(k);O=i(V,"ValueError"),V.forEach(t),Oe.forEach(t),H=i(Ge,`
if some parameter value is invalid`),Ge.forEach(t),L=d(se),m=a(se,"LI",{});var ke=n(m);D=a(ke,"A",{href:!0});var pn=n(D);S=i(pn,"RepositoryNotFoundError"),pn.forEach(t),z=i(ke,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(ke,"CODE",{});var he=n(R);K=i(he,"private"),he.forEach(t),G=i(ke," and you do not have access."),ke.forEach(t),A=d(se),M=a(se,"LI",{});var Le=n(M);C=a(Le,"A",{href:!0});var gn=n(C);Y=i(gn,"RevisionNotFoundError"),gn.forEach(t),te=i(Le,`
If the revision to download from cannot be found.`),Le.forEach(t),Z=d(se),J=a(se,"LI",{});var pt=n(J);ee=a(pt,"A",{href:!0});var dn=n(ee);ae=i(dn,"EntryNotFoundError"),dn.forEach(t),B=i(pt,`
If the file to download cannot be found.`),pt.forEach(t),se.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){E(X,p,oe),e(p,_),E(X,f,oe),E(X,c,oe),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function af(U){let p,_,f,c,h,l,u,q,b,x,y;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),this.h()},l(v){p=a(v,"P",{});var k=n(p);_=i(k,"Raises the following errors:"),k.forEach(t),f=d(v),c=a(v,"UL",{});var O=n(c);h=a(O,"LI",{});var H=n(h);l=a(H,"A",{href:!0});var L=n(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),q=i(H,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(H,"CODE",{});var m=n(b);x=i(m,"private"),m.forEach(t),y=i(H," and you do not have access."),H.forEach(t),O.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(v,k){E(v,p,k),e(p,_),E(v,f,k),E(v,c,k),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function nf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function sf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function rf(U){let p,_,f,c,h;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=o("p"),_=r("Collecting all discussions of a repo in a list:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function lf(U){let p,_,f,c,h;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=o("p"),_=r("Iterating over discussions of a repo:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Iterating over discussions of a repo:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function cf(U){let p;return{c(){p=r("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(_){p=i(_,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(_,f){E(_,p,f)},d(_){_&&t(p)}}}function pf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function gf(U){let p,_,f,c,h,l,u,q;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),_=r("Example usage with the "),f=o("code"),c=r("filter"),h=r(" argument:"),l=g(),j(u.$$.fragment)},l(b){p=a(b,"P",{});var x=n(p);_=i(x,"Example usage with the "),f=a(x,"CODE",{});var y=n(f);c=i(y,"filter"),y.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(b),I(u.$$.fragment,b)},m(b,x){E(b,p,x),e(p,_),e(p,f),e(f,c),e(p,h),E(b,l,x),N(u,b,x),q=!0},p:de,i(b){q||(F(u.$$.fragment,b),q=!0)},o(b){T(u.$$.fragment,b),q=!1},d(b){b&&t(p),b&&t(l),P(u,b)}}}function df(U){let p,_,f,c,h,l,u,q;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),_=r("Example usage with the "),f=o("code"),c=r("search"),h=r(" argument:"),l=g(),j(u.$$.fragment)},l(b){p=a(b,"P",{});var x=n(p);_=i(x,"Example usage with the "),f=a(x,"CODE",{});var y=n(f);c=i(y,"search"),y.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(b),I(u.$$.fragment,b)},m(b,x){E(b,p,x),e(p,_),e(p,f),e(f,c),e(p,h),E(b,l,x),N(u,b,x),q=!0},p:de,i(b){q||(F(u.$$.fragment,b),q=!0)},o(b){T(u.$$.fragment,b),q=!1},d(b){b&&t(p),b&&t(l),P(u,b)}}}function hf(U){let p,_,f,c,h,l,u,q;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),_=r("Example usage with the "),f=o("code"),c=r("filter"),h=r(" argument:"),l=g(),j(u.$$.fragment)},l(b){p=a(b,"P",{});var x=n(p);_=i(x,"Example usage with the "),f=a(x,"CODE",{});var y=n(f);c=i(y,"filter"),y.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(b),I(u.$$.fragment,b)},m(b,x){E(b,p,x),e(p,_),e(p,f),e(f,c),e(p,h),E(b,l,x),N(u,b,x),q=!0},p:de,i(b){q||(F(u.$$.fragment,b),q=!0)},o(b){T(u.$$.fragment,b),q=!1},d(b){b&&t(p),b&&t(l),P(u,b)}}}function uf(U){let p,_,f,c,h,l,u,q;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),_=r("Example usage with the "),f=o("code"),c=r("search"),h=r(" argument:"),l=g(),j(u.$$.fragment)},l(b){p=a(b,"P",{});var x=n(p);_=i(x,"Example usage with the "),f=a(x,"CODE",{});var y=n(f);c=i(y,"search"),y.forEach(t),h=i(x," argument:"),x.forEach(t),l=d(b),I(u.$$.fragment,b)},m(b,x){E(b,p,x),e(p,_),e(p,f),e(f,c),e(p,h),E(b,l,x),N(u,b,x),q=!0},p:de,i(b){q||(F(u.$$.fragment,b),q=!0)},o(b){T(u.$$.fragment,b),q=!1},d(b){b&&t(p),b&&t(l),P(u,b)}}}function ff(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function mf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),v=g(),k=o("li"),O=o("a"),H=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=n(p);_=i(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var S=n(c);h=a(S,"LI",{});var z=n(h);l=a(z,"A",{href:!0});var R=n(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),q=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(z,"CODE",{});var K=n(b);x=i(K,"private"),K.forEach(t),y=i(z," and you do not have access."),z.forEach(t),v=d(S),k=a(S,"LI",{});var G=n(k);O=a(G,"A",{href:!0});var A=n(O);H=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){E(m,p,D),e(p,_),E(m,f,D),E(m,c,D),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y),e(c,v),e(c,k),e(k,O),e(O,H),e(k,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function _f(U){let p,_,f,c,h,l,u,q,b,x,y;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),this.h()},l(v){p=a(v,"P",{});var k=n(p);_=i(k,"Raises the following errors:"),k.forEach(t),f=d(v),c=a(v,"UL",{});var O=n(c);h=a(O,"LI",{});var H=n(h);l=a(H,"A",{href:!0});var L=n(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),q=i(H,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(H,"CODE",{});var m=n(b);x=i(m,"private"),m.forEach(t),y=i(H," and you do not have access."),H.forEach(t),O.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(v,k){E(v,p,k),e(p,_),E(v,f,k),E(v,c,k),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function bf(U){let p,_,f,c,h;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),_=r("Examples:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Examples:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function vf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),this.h()},l(A){p=a(A,"P",{});var M=n(p);_=i(M,"Raises the following errors:"),M.forEach(t),f=d(A),c=a(A,"UL",{});var C=n(c);h=a(C,"LI",{});var Y=n(h);l=a(Y,"A",{href:!0,rel:!0});var te=n(l);u=a(te,"CODE",{});var Z=n(u);q=i(Z,"HTTPError"),Z.forEach(t),te.forEach(t),b=i(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),y=a(C,"LI",{});var J=n(y);v=a(J,"A",{href:!0,rel:!0});var ee=n(v);k=a(ee,"CODE",{});var ae=n(k);O=i(ae,"ValueError"),ae.forEach(t),ee.forEach(t),H=i(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=n(m);D=a(B,"A",{href:!0});var X=n(D);S=i(X,"RepositoryNotFoundError"),X.forEach(t),z=i(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=n(R);K=i(oe,"private"),oe.forEach(t),G=i(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(A,M){E(A,p,M),e(p,_),E(A,f,M),E(A,c,M),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G)},d(A){A&&t(p),A&&t(f),A&&t(c)}}}function $f(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),v=g(),k=o("li"),O=o("a"),H=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=n(p);_=i(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var S=n(c);h=a(S,"LI",{});var z=n(h);l=a(z,"A",{href:!0});var R=n(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),q=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(z,"CODE",{});var K=n(b);x=i(K,"private"),K.forEach(t),y=i(z," and you do not have access."),z.forEach(t),v=d(S),k=a(S,"LI",{});var G=n(k);O=a(G,"A",{href:!0});var A=n(O);H=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){E(m,p,D),e(p,_),E(m,f,D),E(m,c,D),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y),e(c,v),e(c,k),e(k,O),e(O,H),e(k,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function yf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),v=g(),k=o("li"),O=o("a"),H=r("RevisionNotFoundError"),L=r(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=n(p);_=i(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var S=n(c);h=a(S,"LI",{});var z=n(h);l=a(z,"A",{href:!0});var R=n(l);u=i(R,"RepositoryNotFoundError"),R.forEach(t),q=i(z,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(z,"CODE",{});var K=n(b);x=i(K,"private"),K.forEach(t),y=i(z," and you do not have access."),z.forEach(t),v=d(S),k=a(S,"LI",{});var G=n(k);O=a(G,"A",{href:!0});var A=n(O);H=i(A,"RevisionNotFoundError"),A.forEach(t),L=i(G,`
If the revision to download from cannot be found.`),G.forEach(t),S.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){E(m,p,D),e(p,_),E(m,f,D),E(m,c,D),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y),e(c,v),e(c,k),e(k,O),e(O,H),e(k,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function Ef(U){let p,_,f,c,h,l,u,q,b,x,y;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=r("RepositoryNotFoundError"),q=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=o("code"),x=r("private"),y=r(" and you do not have access."),this.h()},l(v){p=a(v,"P",{});var k=n(p);_=i(k,"Raises the following errors:"),k.forEach(t),f=d(v),c=a(v,"UL",{});var O=n(c);h=a(O,"LI",{});var H=n(h);l=a(H,"A",{href:!0});var L=n(l);u=i(L,"RepositoryNotFoundError"),L.forEach(t),q=i(H,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),b=a(H,"CODE",{});var m=n(b);x=i(m,"private"),m.forEach(t),y=i(H," and you do not have access."),H.forEach(t),O.forEach(t),this.h()},h(){$(l,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(v,k){E(v,p,k),e(p,_),E(v,f,k),E(v,c,k),e(c,h),e(h,l),e(l,u),e(h,q),e(h,b),e(b,x),e(h,y)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function kf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G,A,M,C,Y,te;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),S=r("RepositoryNotFoundError"),z=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=r("private"),G=r(" and you do not have access."),A=g(),M=o("li"),C=o("a"),Y=r("RevisionNotFoundError"),te=r(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=a(Z,"P",{});var J=n(p);_=i(J,"Raises the following errors:"),J.forEach(t),f=d(Z),c=a(Z,"UL",{});var ee=n(c);h=a(ee,"LI",{});var ae=n(h);l=a(ae,"A",{href:!0,rel:!0});var B=n(l);u=a(B,"CODE",{});var X=n(u);q=i(X,"HTTPError"),X.forEach(t),B.forEach(t),b=i(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=d(ee),y=a(ee,"LI",{});var oe=n(y);v=a(oe,"A",{href:!0,rel:!0});var se=n(v);k=a(se,"CODE",{});var We=n(k);O=i(We,"ValueError"),We.forEach(t),se.forEach(t),H=i(oe,`
if some parameter value is invalid`),oe.forEach(t),L=d(ee),m=a(ee,"LI",{});var be=n(m);D=a(be,"A",{href:!0});var ct=n(D);S=i(ct,"RepositoryNotFoundError"),ct.forEach(t),z=i(be,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(be,"CODE",{});var Ge=n(R);K=i(Ge,"private"),Ge.forEach(t),G=i(be," and you do not have access."),be.forEach(t),A=d(ee),M=a(ee,"LI",{});var Oe=n(M);C=a(Oe,"A",{href:!0});var V=n(C);Y=i(V,"RevisionNotFoundError"),V.forEach(t),te=i(Oe,`
If the revision to download from cannot be found.`),Oe.forEach(t),ee.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){E(Z,p,J),e(p,_),E(Z,f,J),E(Z,c,J),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H),e(c,L),e(c,m),e(m,D),e(D,S),e(m,z),e(m,R),e(R,K),e(m,G),e(c,A),e(c,M),e(M,C),e(C,Y),e(M,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function wf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k;return{c(){p=o("p"),_=o("code"),f=r("upload_file"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=o("code"),l=r("repo_id"),u=r(` and
`),q=o("code"),b=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),y=o("a"),v=r("create_repo()"),k=r("."),this.h()},l(O){p=a(O,"P",{});var H=n(p);_=a(H,"CODE",{});var L=n(_);f=i(L,"upload_file"),L.forEach(t),c=i(H,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=a(H,"CODE",{});var m=n(h);l=i(m,"repo_id"),m.forEach(t),u=i(H,` and
`),q=a(H,"CODE",{});var D=n(q);b=i(D,"repo_type"),D.forEach(t),x=i(H,` are set correctly. If repo does not exist, create it first using
`),y=a(H,"A",{href:!0});var S=n(y);v=i(S,"create_repo()"),S.forEach(t),k=i(H,"."),H.forEach(t),this.h()},h(){$(y,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,H){E(O,p,H),e(p,_),e(_,f),e(p,c),e(p,h),e(h,l),e(p,u),e(p,q),e(q,b),e(p,x),e(p,y),e(y,v),e(p,k)},d(O){O&&t(p)}}}function Af(U){let p,_,f,c,h;return c=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),_=r("Example:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Example:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function xf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H;return{c(){p=o("p"),_=r("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),l=o("a"),u=o("code"),q=r("HTTPError"),b=r(`
if the HuggingFace API returned an error`),x=g(),y=o("li"),v=o("a"),k=o("code"),O=r("ValueError"),H=r(`
if some parameter value is invalid`),this.h()},l(L){p=a(L,"P",{});var m=n(p);_=i(m,"Raises the following errors:"),m.forEach(t),f=d(L),c=a(L,"UL",{});var D=n(c);h=a(D,"LI",{});var S=n(h);l=a(S,"A",{href:!0,rel:!0});var z=n(l);u=a(z,"CODE",{});var R=n(u);q=i(R,"HTTPError"),R.forEach(t),z.forEach(t),b=i(S,`
if the HuggingFace API returned an error`),S.forEach(t),x=d(D),y=a(D,"LI",{});var K=n(y);v=a(K,"A",{href:!0,rel:!0});var G=n(v);k=a(G,"CODE",{});var A=n(k);O=i(A,"ValueError"),A.forEach(t),G.forEach(t),H=i(K,`
if some parameter value is invalid`),K.forEach(t),D.forEach(t),this.h()},h(){$(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(l,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow")},m(L,m){E(L,p,m),e(p,_),E(L,f,m),E(L,c,m),e(c,h),e(h,l),e(l,u),e(u,q),e(h,b),e(c,x),e(c,y),e(y,v),e(v,k),e(k,O),e(y,H)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function Df(U){let p,_,f,c,h,l,u,q,b,x,y,v,k;return{c(){p=o("p"),_=o("code"),f=r("upload_folder"),c=r(` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=o("code"),l=r("repo_id"),u=r(` and
`),q=o("code"),b=r("repo_type"),x=r(` are set correctly. If repo does not exist, create it first using
`),y=o("a"),v=r("create_repo()"),k=r("."),this.h()},l(O){p=a(O,"P",{});var H=n(p);_=a(H,"CODE",{});var L=n(_);f=i(L,"upload_folder"),L.forEach(t),c=i(H,` assumes that the repo already exists on the Hub. If you get a
Client error 404, please make sure you are authenticated and that `),h=a(H,"CODE",{});var m=n(h);l=i(m,"repo_id"),m.forEach(t),u=i(H,` and
`),q=a(H,"CODE",{});var D=n(q);b=i(D,"repo_type"),D.forEach(t),x=i(H,` are set correctly. If repo does not exist, create it first using
`),y=a(H,"A",{href:!0});var S=n(y);v=i(S,"create_repo()"),S.forEach(t),k=i(H,"."),H.forEach(t),this.h()},h(){$(y,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo")},m(O,H){E(O,p,H),e(p,_),e(_,f),e(p,c),e(p,h),e(h,l),e(p,u),e(p,q),e(q,b),e(p,x),e(p,y),e(y,v),e(p,k)},d(O){O&&t(p)}}}function Hf(U){let p,_,f,c,h;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=o("p"),_=r("Example:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Example:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function qf(U){let p,_,f,c,h;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=o("p"),_=r("Example:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Example:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function jf(U){let p,_,f,c,h;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),_=r("Examples:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Examples:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function If(U){let p,_;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(p.$$.fragment)},l(f){I(p.$$.fragment,f)},m(f,c){N(p,f,c),_=!0},p:de,i(f){_||(F(p.$$.fragment,f),_=!0)},o(f){T(p.$$.fragment,f),_=!1},d(f){P(p,f)}}}function Nf(U){let p,_,f,c,h;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),_=r("Example:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Example:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function Ff(U){let p,_,f,c,h;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),_=r("Example:"),f=g(),j(c.$$.fragment)},l(l){p=a(l,"P",{});var u=n(p);_=i(u,"Example:"),u.forEach(t),f=d(l),I(c.$$.fragment,l)},m(l,u){E(l,p,u),e(p,_),E(l,f,u),N(c,l,u),h=!0},p:de,i(l){h||(F(c.$$.fragment,l),h=!0)},o(l){T(c.$$.fragment,l),h=!1},d(l){l&&t(p),l&&t(f),P(c,l)}}}function Tf(U){let p,_,f,c,h,l,u,q,b,x,y,v,k,O,H,L,m,D,S,z,R,K,G,A,M,C,Y,te,Z,J,ee,ae,B,X,oe,se,We,be,ct,Ge,Oe,V,ke,pn,he,Le,gn,pt,dn,Ti,yt,Pi,Et,Oi,Ae,Po,Li,Vn,Ri,Ci,kt,Si,wt,Mi,Be,Oo,Ui,zn,Vi,zi,At,Wi,le,Lo,Gi,Wn,Bi,Ki,Ro,Ji,Gn,Qi,Xi,Yi,Co,Zi,hn,el,tl,ol,un,al,fn,nl,sl,xt,rl,ce,So,il,Mo,ll,Bn,cl,pl,gl,Uo,dl,mn,hl,ul,fl,Vo,ml,Kn,_l,bl,vl,_n,$l,bn,yl,El,Dt,kl,Ht,zo,wl,Jn,Al,xl,xe,Wo,Dl,Qn,Hl,ql,Xn,jl,Il,qt,Nl,Ke,Go,Fl,Yn,Tl,Pl,jt,Ol,Je,Bo,Ll,Zn,Rl,Cl,It,Sl,Qe,Ko,Ml,es,Ul,Vl,Nt,zl,Ft,Jo,Wl,ts,Gl,Bl,De,Qo,Kl,os,Jl,Ql,vn,Xl,$n,Yl,Zl,Tt,ec,Pt,Xo,tc,as,oc,ac,Ot,Yo,nc,ns,sc,rc,ve,Zo,ic,ss,lc,cc,rs,pc,gc,Lt,dc,Rt,hc,He,ea,uc,is,fc,mc,Ct,_c,St,bc,qe,ta,vc,ls,$c,yc,Mt,Ec,Ut,kc,Vt,oa,wc,cs,Ac,xc,$e,aa,Dc,ps,Hc,qc,na,jc,yn,Ic,Nc,Fc,zt,Tc,Wt,Pc,Gt,sa,Oc,gs,Lc,Rc,Bt,ra,Cc,ds,Sc,Mc,Xe,ia,Uc,hs,Vc,zc,Kt,Wc,je,la,Gc,us,Bc,Kc,fs,Jc,Qc,Jt,Xc,Ie,ca,Yc,ms,Zc,ep,pa,tp,ga,op,ap,np,Qt,sp,Ne,da,rp,_s,ip,lp,Xt,cp,Yt,pp,Ye,ha,gp,bs,dp,hp,Zt,up,eo,ua,fp,vs,mp,_p,Fe,fa,bp,$s,vp,$p,ys,yp,Ep,to,kp,oo,ma,wp,Es,Ap,xp,Ze,_a,Dp,ks,Hp,qp,ao,jp,ye,ba,Ip,ws,Np,Fp,no,Tp,so,Pp,ro,Op,re,va,Lp,As,Rp,Cp,xs,Sp,Mp,ue,Up,Ds,Vp,zp,Hs,Wp,Gp,$a,Bp,Kp,qs,Jp,Qp,js,Xp,Yp,Zp,ya,eg,Is,tg,og,ag,io,ng,lo,sg,co,rg,po,Ea,ig,Ns,lg,Rr,gt,ka,cg,Fs,pg,Cr,dt,wa,gg,Ts,dg,Sr,Re,Aa,hg,Ps,ug,fg,Os,mg,Mr,ht,xa,_g,Ls,bg,Ur,ut,go,Rs,Da,vg,En,Cs,$g,yg,Vr,ho,Eg,Ss,kg,wg,zr,fe,Ha,Ag,Ms,xg,Dg,Ee,qa,Hg,ja,qg,Us,jg,Ig,Ng,Ia,Fg,Vs,Tg,Pg,Og,Na,Lg,zs,Rg,Cg,Sg,uo,Mg,et,Fa,Ug,kn,Vg,Ws,zg,Wg,wn,Gg,Gs,Bg,Kg,Te,Ta,Jg,Pa,Qg,Bs,Xg,Yg,Zg,ft,tt,ed,Ks,td,od,Js,ad,nd,Qs,sd,rd,Oa,id,Xs,ld,cd,pd,ot,gd,Ys,dd,hd,Zs,ud,fd,er,md,_d,mt,bd,tr,vd,$d,or,yd,Ed,Wr,_t,La,kd,ar,wd,Gr,bt,fo,nr,Ra,Ad,sr,xd,Br,Ca,rr,Dd,Hd,Kr,mo,qd,An,jd,Id,Jr,we,Sa,Nd,_o,Ma,Fd,ir,Td,Pd,at,Ua,Od,lr,Ld,Rd,Va,Cd,cr,Sd,Md,Ud,bo,za,Vd,pr,zd,Qr,vt,vo,gr,Wa,Wd,dr,Gd,Xr,$o,Bd,hr,Kd,Jd,Yr,Ce,Ga,Qd,ur,Xd,Yd,yo,Zr,Se,Ba,Zd,fr,eh,th,Eo,ei,Me,Ka,oh,mr,ah,nh,ko,ti,Ue,Ja,sh,_r,rh,ih,wo,oi;return l=new Fi({}),C=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ke=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L603"}}),Le=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3072",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),yt=new ge({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Ku]},$$scope:{ctx:U}}}),Et=new ne({props:{$$slots:{default:[Ju]},$$scope:{ctx:U}}}),Po=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2929",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),kt=new ge({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Qu]},$$scope:{ctx:U}}}),wt=new ne({props:{$$slots:{default:[Xu]},$$scope:{ctx:U}}}),Oo=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1943",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
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
`}}),At=new ne({props:{warning:!0,$$slots:{default:[Yu]},$$scope:{ctx:U}}}),Lo=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_discussion.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_discussion.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_discussion.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the Pull Request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_discussion.pull_request",description:`<strong>pull_request</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to create a Pull Request or discussion. If <code>True</code>, creates a Pull Request.
If <code>False</code>, creates a discussion. Defaults to <code>False</code>.`,name:"pull_request"},{anchor:"huggingface_hub.HfApi.create_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2752"}}),xt=new ne({props:{$$slots:{default:[Zu]},$$scope:{ctx:U}}}),So=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_pull_request.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_pull_request.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_pull_request.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the Pull Request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2841"}}),Dt=new ne({props:{$$slots:{default:[ef]},$$scope:{ctx:U}}}),zo=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1566",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Wo=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1312",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>hf_api.DatasetInfo</a></p>
`}}),qt=new ne({props:{$$slots:{default:[tf]},$$scope:{ctx:U}}}),Go=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2444"}}),jt=new ne({props:{$$slots:{default:[of]},$$scope:{ctx:U}}}),Bo=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1697"}}),It=new ne({props:{$$slots:{default:[af]},$$scope:{ctx:U}}}),Ko=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3200",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Nt=new ne({props:{$$slots:{default:[nf]},$$scope:{ctx:U}}}),Jo=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L747"}}),Qo=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2662"}}),Tt=new ne({props:{$$slots:{default:[sf]},$$scope:{ctx:U}}}),Xo=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Deprecated in favor of <code>use_auth_token</code>. Will be removed in 0.12.0.
The Hugging Face authentication token`,name:"token"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2532",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Yo=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L739"}}),Zo=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2582",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Lt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[rf]},$$scope:{ctx:U}}}),Rt=new ge({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[lf]},$$scope:{ctx:U}}}),ea=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3257",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ct=new ne({props:{warning:!0,$$slots:{default:[cf]},$$scope:{ctx:U}}}),St=new ne({props:{$$slots:{default:[pf]},$$scope:{ctx:U}}}),ta=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L968"}}),Mt=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[gf]},$$scope:{ctx:U}}}),Ut=new ge({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[df]},$$scope:{ctx:U}}}),oa=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1134",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),aa=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L757"}}),zt=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[hf]},$$scope:{ctx:U}}}),Wt=new ge({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[uf]},$$scope:{ctx:U}}}),sa=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1518",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),ra=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1148",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),ia=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3147",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Kt=new ne({props:{$$slots:{default:[ff]},$$scope:{ctx:U}}}),la=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1234",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),Jt=new ne({props:{$$slots:{default:[mf]},$$scope:{ctx:U}}}),ca=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1865"}}),Qt=new ne({props:{$$slots:{default:[_f]},$$scope:{ctx:U}}}),da=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3005",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Xt=new ge({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[bf]},$$scope:{ctx:U}}}),Yt=new ne({props:{$$slots:{default:[vf]},$$scope:{ctx:U}}}),ha=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1449",returnDescription:`
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
`}}),Zt=new ne({props:{$$slots:{default:[$f]},$$scope:{ctx:U}}}),ua=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L720"}}),fa=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"},{name:"use_auth_token",val:": typing.Union[str, bool, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1381",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>SpaceInfo</a></p>
`}}),to=new ne({props:{$$slots:{default:[yf]},$$scope:{ctx:U}}}),ma=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L732"}}),_a=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1789",returnDescription:`
<p>The HTTP response in json.</p>
`}}),ao=new ne({props:{$$slots:{default:[Ef]},$$scope:{ctx:U}}}),ba=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2124",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),no=new ne({props:{$$slots:{default:[kf]},$$scope:{ctx:U}}}),so=new ne({props:{warning:!0,$$slots:{default:[wf]},$$scope:{ctx:U}}}),ro=new ge({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Af]},$$scope:{ctx:U}}}),va=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2284",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),io=new ne({props:{$$slots:{default:[xf]},$$scope:{ctx:U}}}),lo=new ne({props:{warning:!0,$$slots:{default:[Df]},$$scope:{ctx:U}}}),co=new ge({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Hf]},$$scope:{ctx:U}}}),Ea=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L607"}}),ka=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"securityStatus",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L219"}}),wa=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L292"}}),Aa=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": bool = False"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L366"}}),xa=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L173"}}),Da=new Fi({}),Ha=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L43"}}),qa=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L115"}}),uo=new ge({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[qf]},$$scope:{ctx:U}}}),Fa=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L150"}}),Ta=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L65"}}),La=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L28"}}),Ra=new Fi({}),Sa=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3320"}}),Ma=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3357"}}),Ua=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3336",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),za=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3323"}}),Wa=new Fi({}),Ga=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),yo=new ge({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[jf]},$$scope:{ctx:U}}}),Ba=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),Eo=new ge({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[If]},$$scope:{ctx:U}}}),Ka=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L491"}}),ko=new ge({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Nf]},$$scope:{ctx:U}}}),Ja=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L453"}}),wo=new ge({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Ff]},$$scope:{ctx:U}}}),{c(){p=o("meta"),_=g(),f=o("h1"),c=o("a"),h=o("span"),j(l.$$.fragment),u=g(),q=o("span"),b=r("Hugging Face Hub API"),x=g(),y=o("p"),v=r("Below is the documentation for the "),k=o("code"),O=r("HfApi"),H=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),m=o("p"),D=r("All methods from the "),S=o("code"),z=r("HfApi"),R=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=o("p"),A=r("The following approach uses the method from the root of the package:"),M=g(),j(C.$$.fragment),Y=g(),te=o("p"),Z=r("The following approach uses the "),J=o("code"),ee=r("HfApi"),ae=r(" class:"),B=g(),j(X.$$.fragment),oe=g(),se=o("p"),We=r("Using the "),be=o("code"),ct=r("HfApi"),Ge=r(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Oe=g(),V=o("div"),j(ke.$$.fragment),pn=g(),he=o("div"),j(Le.$$.fragment),gn=g(),pt=o("p"),dn=r("Closes or re-opens a Discussion or Pull Request."),Ti=g(),j(yt.$$.fragment),Pi=g(),j(Et.$$.fragment),Oi=g(),Ae=o("div"),j(Po.$$.fragment),Li=g(),Vn=o("p"),Ri=r("Creates a new comment on the given Discussion."),Ci=g(),j(kt.$$.fragment),Si=g(),j(wt.$$.fragment),Mi=g(),Be=o("div"),j(Oo.$$.fragment),Ui=g(),zn=o("p"),Vi=r("Creates a commit in the given repo, deleting & uploading files as needed."),zi=g(),j(At.$$.fragment),Wi=g(),le=o("div"),j(Lo.$$.fragment),Gi=g(),Wn=o("p"),Bi=r("Creates a Discussion or Pull Request."),Ki=g(),Ro=o("p"),Ji=r("Pull Requests created programmatically will be in "),Gn=o("code"),Qi=r('"draft"'),Xi=r(" status."),Yi=g(),Co=o("p"),Zi=r("Creating a Pull Request with changes can also be done at once with "),hn=o("a"),el=r("HfApi.create_commit()"),tl=r("."),ol=g(),un=o("p"),al=r("Returns: "),fn=o("a"),nl=r("DiscussionWithDetails"),sl=g(),j(xt.$$.fragment),rl=g(),ce=o("div"),j(So.$$.fragment),il=g(),Mo=o("p"),ll=r("Creates a Pull Request . Pull Requests created programmatically will be in "),Bn=o("code"),cl=r('"draft"'),pl=r(" status."),gl=g(),Uo=o("p"),dl=r("Creating a Pull Request with changes can also be done at once with "),mn=o("a"),hl=r("HfApi.create_commit()"),ul=r(";"),fl=g(),Vo=o("p"),ml=r("This is a wrapper around "),Kn=o("code"),_l=r("HfApi.create_discusssion"),bl=r("."),vl=g(),_n=o("p"),$l=r("Returns: "),bn=o("a"),yl=r("DiscussionWithDetails"),El=g(),j(Dt.$$.fragment),kl=g(),Ht=o("div"),j(zo.$$.fragment),wl=g(),Jn=o("p"),Al=r("Create an empty repo on the HuggingFace Hub."),xl=g(),xe=o("div"),j(Wo.$$.fragment),Dl=g(),Qn=o("p"),Hl=r("Get info on one specific dataset on huggingface.co."),ql=g(),Xn=o("p"),jl=r("Dataset can be private if you pass an acceptable token."),Il=g(),j(qt.$$.fragment),Nl=g(),Ke=o("div"),j(Go.$$.fragment),Fl=g(),Yn=o("p"),Tl=r("Deletes a file in the given repo."),Pl=g(),j(jt.$$.fragment),Ol=g(),Je=o("div"),j(Bo.$$.fragment),Ll=g(),Zn=o("p"),Rl=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Cl=g(),j(It.$$.fragment),Sl=g(),Qe=o("div"),j(Ko.$$.fragment),Ml=g(),es=o("p"),Ul=r("Edits a comment on a Discussion / Pull Request."),Vl=g(),j(Nt.$$.fragment),zl=g(),Ft=o("div"),j(Jo.$$.fragment),Wl=g(),ts=o("p"),Gl=r("Gets all valid dataset tags as a nested namespace object."),Bl=g(),De=o("div"),j(Qo.$$.fragment),Kl=g(),os=o("p"),Jl=r("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Ql=g(),vn=o("p"),Xl=r("Returns: "),$n=o("a"),Yl=r("DiscussionWithDetails"),Zl=g(),j(Tt.$$.fragment),ec=g(),Pt=o("div"),j(Xo.$$.fragment),tc=g(),as=o("p"),oc=r(`Returns the repository name for a given model ID and optional
organization.`),ac=g(),Ot=o("div"),j(Yo.$$.fragment),nc=g(),ns=o("p"),sc=r("Gets all valid model tags as a nested namespace object"),rc=g(),ve=o("div"),j(Zo.$$.fragment),ic=g(),ss=o("p"),lc=r("Fetches Discussions and Pull Requests for the given repo."),cc=g(),rs=o("p"),pc=r("Example:"),gc=g(),j(Lt.$$.fragment),dc=g(),j(Rt.$$.fragment),hc=g(),He=o("div"),j(ea.$$.fragment),uc=g(),is=o("p"),fc=r("Hides a comment on a Discussion / Pull Request."),mc=g(),j(Ct.$$.fragment),_c=g(),j(St.$$.fragment),bc=g(),qe=o("div"),j(ta.$$.fragment),vc=g(),ls=o("p"),$c=r("Get the public list of all the datasets on huggingface.co"),yc=g(),j(Mt.$$.fragment),Ec=g(),j(Ut.$$.fragment),kc=g(),Vt=o("div"),j(oa.$$.fragment),wc=g(),cs=o("p"),Ac=r("Get the public list of all the metrics on huggingface.co"),xc=g(),$e=o("div"),j(aa.$$.fragment),Dc=g(),ps=o("p"),Hc=r("Get the public list of all the models on huggingface.co"),qc=g(),na=o("p"),jc=r("Returns: List of "),yn=o("a"),Ic=r("huggingface_hub.hf_api.ModelInfo"),Nc=r(" objects"),Fc=g(),j(zt.$$.fragment),Tc=g(),j(Wt.$$.fragment),Pc=g(),Gt=o("div"),j(sa.$$.fragment),Oc=g(),gs=o("p"),Lc=r("Get the list of files in a given repo."),Rc=g(),Bt=o("div"),j(ra.$$.fragment),Cc=g(),ds=o("p"),Sc=r("Get the public list of all Spaces on huggingface.co"),Mc=g(),Xe=o("div"),j(ia.$$.fragment),Uc=g(),hs=o("p"),Vc=r("Merges a Pull Request."),zc=g(),j(Kt.$$.fragment),Wc=g(),je=o("div"),j(la.$$.fragment),Gc=g(),us=o("p"),Bc=r("Get info on one specific model on huggingface.co"),Kc=g(),fs=o("p"),Jc=r("Model can be private if you pass an acceptable token or are logged in."),Qc=g(),j(Jt.$$.fragment),Xc=g(),Ie=o("div"),j(ca.$$.fragment),Yc=g(),ms=o("p"),Zc=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ep=g(),pa=o("p"),tp=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),ga=o("a"),op=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ap=r("."),np=g(),j(Qt.$$.fragment),sp=g(),Ne=o("div"),j(da.$$.fragment),rp=g(),_s=o("p"),ip=r("Renames a Discussion."),lp=g(),j(Xt.$$.fragment),cp=g(),j(Yt.$$.fragment),pp=g(),Ye=o("div"),j(ha.$$.fragment),gp=g(),bs=o("p"),dp=r("Get the info object for a given repo of a given type."),hp=g(),j(Zt.$$.fragment),up=g(),eo=o("div"),j(ua.$$.fragment),fp=g(),vs=o("p"),mp=r(`Saves the passed access token so git can correctly authenticate the
user.`),_p=g(),Fe=o("div"),j(fa.$$.fragment),bp=g(),$s=o("p"),vp=r("Get info on one specific Space on huggingface.co."),$p=g(),ys=o("p"),yp=r("Space can be private if you pass an acceptable token."),Ep=g(),j(to.$$.fragment),kp=g(),oo=o("div"),j(ma.$$.fragment),wp=g(),Es=o("p"),Ap=r("Resets the user\u2019s access token."),xp=g(),Ze=o("div"),j(_a.$$.fragment),Dp=g(),ks=o("p"),Hp=r("Update the visibility setting of a repository."),qp=g(),j(ao.$$.fragment),jp=g(),ye=o("div"),j(ba.$$.fragment),Ip=g(),ws=o("p"),Np=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Fp=g(),j(no.$$.fragment),Tp=g(),j(so.$$.fragment),Pp=g(),j(ro.$$.fragment),Op=g(),re=o("div"),j(va.$$.fragment),Lp=g(),As=o("p"),Rp=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Cp=g(),xs=o("p"),Sp=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Mp=g(),ue=o("p"),Up=r("Use the "),Ds=o("code"),Vp=r("allow_patterns"),zp=r(" and "),Hs=o("code"),Wp=r("ignore_patterns"),Gp=r(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),$a=o("a"),Bp=r("here"),Kp=r(`. If both
`),qs=o("code"),Jp=r("allow_patterns"),Qp=r(" and "),js=o("code"),Xp=r("ignore_patterns"),Yp=r(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Zp=g(),ya=o("p"),eg=r("Uses "),Is=o("code"),tg=r("HfApi.create_commit"),og=r(" under the hood."),ag=g(),j(io.$$.fragment),ng=g(),j(lo.$$.fragment),sg=g(),j(co.$$.fragment),rg=g(),po=o("div"),j(Ea.$$.fragment),ig=g(),Ns=o("p"),lg=r("Call HF API to know \u201Cwhoami\u201D."),Rr=g(),gt=o("div"),j(ka.$$.fragment),cg=g(),Fs=o("p"),pg=r("Info about a model accessible from huggingface.co"),Cr=g(),dt=o("div"),j(wa.$$.fragment),gg=g(),Ts=o("p"),dg=r("Info about a dataset accessible from huggingface.co"),Sr=g(),Re=o("div"),j(Aa.$$.fragment),hg=g(),Ps=o("p"),ug=r("Info about a Space accessible from huggingface.co"),fg=g(),Os=o("p"),mg=r(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Mr=g(),ht=o("div"),j(xa.$$.fragment),_g=g(),Ls=o("p"),bg=r(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Ur=g(),ut=o("h2"),go=o("a"),Rs=o("span"),j(Da.$$.fragment),vg=g(),En=o("span"),Cs=o("code"),$g=r("create_commit"),yg=r(" API"),Vr=g(),ho=o("p"),Eg=r("Below are the supported values for "),Ss=o("code"),kg=r("CommitOperation()"),wg=r(":"),zr=g(),fe=o("div"),j(Ha.$$.fragment),Ag=g(),Ms=o("p"),xg=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),Dg=g(),Ee=o("div"),j(qa.$$.fragment),Hg=g(),ja=o("p"),qg=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Us=o("code"),jg=r("path_or_fileobj"),Ig=r("."),Ng=g(),Ia=o("p"),Fg=r("Triggers "),Vs=o("code"),Tg=r("self.validate"),Pg=r("."),Og=g(),Na=o("p"),Lg=r("Raises: "),zs=o("code"),Rg=r("ValueError"),Cg=r(" if self.validate fails"),Sg=g(),j(uo.$$.fragment),Mg=g(),et=o("div"),j(Fa.$$.fragment),Ug=g(),kn=o("p"),Vg=r("The base64-encoded content of "),Ws=o("code"),zg=r("path_or_fileobj"),Wg=g(),wn=o("p"),Gg=r("Returns: "),Gs=o("code"),Bg=r("bytes"),Kg=g(),Te=o("div"),j(Ta.$$.fragment),Jg=g(),Pa=o("p"),Qg=r("Ensures "),Bs=o("code"),Xg=r("path_or_fileobj"),Yg=r(" is valid:"),Zg=g(),ft=o("ul"),tt=o("li"),ed=r("Ensures it is either a "),Ks=o("code"),td=r("str"),od=r(", "),Js=o("code"),ad=r("bytes"),nd=r(" or an instance of "),Qs=o("code"),sd=r("io.BufferedIOBase"),rd=g(),Oa=o("li"),id=r("If it is a "),Xs=o("code"),ld=r("str"),cd=r(", ensure that it is a file path and that the file exists"),pd=g(),ot=o("li"),gd=r("If it is an instance of "),Ys=o("code"),dd=r("io.BufferedIOBase"),hd=r(", ensures it supports "),Zs=o("code"),ud=r("seek()"),fd=r(" and "),er=o("code"),md=r("tell()"),_d=g(),mt=o("p"),bd=r("Raises: "),tr=o("code"),vd=r("ValueError"),$d=r(" if "),or=o("code"),yd=r("path_or_fileobj"),Ed=r(" is not valid"),Wr=g(),_t=o("div"),j(La.$$.fragment),kd=g(),ar=o("p"),wd=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),Gr=g(),bt=o("h2"),fo=o("a"),nr=o("span"),j(Ra.$$.fragment),Ad=g(),sr=o("span"),xd=r("Hugging Face local storage"),Br=g(),Ca=o("p"),rr=o("code"),Dd=r("huggingface_hub"),Hd=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Kr=g(),mo=o("p"),qd=r("It does this using the "),An=o("a"),jd=r("HfFolder"),Id=r(" utility, which saves data at the root of the user."),Jr=g(),we=o("div"),j(Sa.$$.fragment),Nd=g(),_o=o("div"),j(Ma.$$.fragment),Fd=g(),ir=o("p"),Td=r("Deletes the token from storage. Does not fail if token does not exist."),Pd=g(),at=o("div"),j(Ua.$$.fragment),Od=g(),lr=o("p"),Ld=r("Get token or None if not existent."),Rd=g(),Va=o("p"),Cd=r(`Note that a token can be also provided using the
`),cr=o("code"),Sd=r("HUGGING_FACE_HUB_TOKEN"),Md=r(" environment variable."),Ud=g(),bo=o("div"),j(za.$$.fragment),Vd=g(),pr=o("p"),zd=r("Save token, creating folder as needed."),Qr=g(),vt=o("h2"),vo=o("a"),gr=o("span"),j(Wa.$$.fragment),Wd=g(),dr=o("span"),Gd=r("Filtering helpers"),Xr=g(),$o=o("p"),Bd=r("Some helpers to filter repositories on the Hub are available in the "),hr=o("code"),Kd=r("huggingface_hub"),Jd=r(" package."),Yr=g(),Ce=o("div"),j(Ga.$$.fragment),Qd=g(),ur=o("p"),Xd=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Yd=g(),j(yo.$$.fragment),Zr=g(),Se=o("div"),j(Ba.$$.fragment),Zd=g(),fr=o("p"),eh=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),th=g(),j(Eo.$$.fragment),ei=g(),Me=o("div"),j(Ka.$$.fragment),oh=g(),mr=o("p"),ah=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),nh=g(),j(ko.$$.fragment),ti=g(),Ue=o("div"),j(Ja.$$.fragment),sh=g(),_r=o("p"),rh=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ih=g(),j(wo.$$.fragment),this.h()},l(s){const w=Gu('[data-svelte="svelte-1phssyn"]',document.head);p=a(w,"META",{name:!0,content:!0}),w.forEach(t),_=d(s),f=a(s,"H1",{class:!0});var Qa=n(f);c=a(Qa,"A",{id:!0,class:!0,href:!0});var br=n(c);h=a(br,"SPAN",{});var vr=n(h);I(l.$$.fragment,vr),vr.forEach(t),br.forEach(t),u=d(Qa),q=a(Qa,"SPAN",{});var $r=n(q);b=i($r,"Hugging Face Hub API"),$r.forEach(t),Qa.forEach(t),x=d(s),y=a(s,"P",{});var Xa=n(y);v=i(Xa,"Below is the documentation for the "),k=a(Xa,"CODE",{});var yr=n(k);O=i(yr,"HfApi"),yr.forEach(t),H=i(Xa,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Xa.forEach(t),L=d(s),m=a(s,"P",{});var Ya=n(m);D=i(Ya,"All methods from the "),S=a(Ya,"CODE",{});var Er=n(S);z=i(Er,"HfApi"),Er.forEach(t),R=i(Ya,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Ya.forEach(t),K=d(s),G=a(s,"P",{});var kr=n(G);A=i(kr,"The following approach uses the method from the root of the package:"),kr.forEach(t),M=d(s),I(C.$$.fragment,s),Y=d(s),te=a(s,"P",{});var Za=n(te);Z=i(Za,"The following approach uses the "),J=a(Za,"CODE",{});var wr=n(J);ee=i(wr,"HfApi"),wr.forEach(t),ae=i(Za," class:"),Za.forEach(t),B=d(s),I(X.$$.fragment,s),oe=d(s),se=a(s,"P",{});var en=n(se);We=i(en,"Using the "),be=a(en,"CODE",{});var Ar=n(be);ct=i(Ar,"HfApi"),Ar.forEach(t),Ge=i(en," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),en.forEach(t),Oe=d(s),V=a(s,"DIV",{class:!0});var W=n(V);I(ke.$$.fragment,W),pn=d(W),he=a(W,"DIV",{class:!0});var Ve=n(he);I(Le.$$.fragment,Ve),gn=d(Ve),pt=a(Ve,"P",{});var xr=n(pt);dn=i(xr,"Closes or re-opens a Discussion or Pull Request."),xr.forEach(t),Ti=d(Ve),I(yt.$$.fragment,Ve),Pi=d(Ve),I(Et.$$.fragment,Ve),Ve.forEach(t),Oi=d(W),Ae=a(W,"DIV",{class:!0});var ze=n(Ae);I(Po.$$.fragment,ze),Li=d(ze),Vn=a(ze,"P",{});var Dr=n(Vn);Ri=i(Dr,"Creates a new comment on the given Discussion."),Dr.forEach(t),Ci=d(ze),I(kt.$$.fragment,ze),Si=d(ze),I(wt.$$.fragment,ze),ze.forEach(t),Mi=d(W),Be=a(W,"DIV",{class:!0});var $t=n(Be);I(Oo.$$.fragment,$t),Ui=d($t),zn=a($t,"P",{});var Hr=n(zn);Vi=i(Hr,"Creates a commit in the given repo, deleting & uploading files as needed."),Hr.forEach(t),zi=d($t),I(At.$$.fragment,$t),$t.forEach(t),Wi=d(W),le=a(W,"DIV",{class:!0});var me=n(le);I(Lo.$$.fragment,me),Gi=d(me),Wn=a(me,"P",{});var qr=n(Wn);Bi=i(qr,"Creates a Discussion or Pull Request."),qr.forEach(t),Ki=d(me),Ro=a(me,"P",{});var tn=n(Ro);Ji=i(tn,"Pull Requests created programmatically will be in "),Gn=a(tn,"CODE",{});var jr=n(Gn);Qi=i(jr,'"draft"'),jr.forEach(t),Xi=i(tn," status."),tn.forEach(t),Yi=d(me),Co=a(me,"P",{});var on=n(Co);Zi=i(on,"Creating a Pull Request with changes can also be done at once with "),hn=a(on,"A",{href:!0});var Ir=n(hn);el=i(Ir,"HfApi.create_commit()"),Ir.forEach(t),tl=i(on,"."),on.forEach(t),ol=d(me),un=a(me,"P",{});var xn=n(un);al=i(xn,"Returns: "),fn=a(xn,"A",{href:!0});var Nr=n(fn);nl=i(Nr,"DiscussionWithDetails"),Nr.forEach(t),xn.forEach(t),sl=d(me),I(xt.$$.fragment,me),me.forEach(t),rl=d(W),ce=a(W,"DIV",{class:!0});var _e=n(ce);I(So.$$.fragment,_e),il=d(_e),Mo=a(_e,"P",{});var an=n(Mo);ll=i(an,"Creates a Pull Request . Pull Requests created programmatically will be in "),Bn=a(an,"CODE",{});var Fr=n(Bn);cl=i(Fr,'"draft"'),Fr.forEach(t),pl=i(an," status."),an.forEach(t),gl=d(_e),Uo=a(_e,"P",{});var nn=n(Uo);dl=i(nn,"Creating a Pull Request with changes can also be done at once with "),mn=a(nn,"A",{href:!0});var Tr=n(mn);hl=i(Tr,"HfApi.create_commit()"),Tr.forEach(t),ul=i(nn,";"),nn.forEach(t),fl=d(_e),Vo=a(_e,"P",{});var sn=n(Vo);ml=i(sn,"This is a wrapper around "),Kn=a(sn,"CODE",{});var Pr=n(Kn);_l=i(Pr,"HfApi.create_discusssion"),Pr.forEach(t),bl=i(sn,"."),sn.forEach(t),vl=d(_e),_n=a(_e,"P",{});var Dn=n(_n);$l=i(Dn,"Returns: "),bn=a(Dn,"A",{href:!0});var Or=n(bn);yl=i(Or,"DiscussionWithDetails"),Or.forEach(t),Dn.forEach(t),El=d(_e),I(Dt.$$.fragment,_e),_e.forEach(t),kl=d(W),Ht=a(W,"DIV",{class:!0});var rn=n(Ht);I(zo.$$.fragment,rn),wl=d(rn),Jn=a(rn,"P",{});var Lr=n(Jn);Al=i(Lr,"Create an empty repo on the HuggingFace Hub."),Lr.forEach(t),rn.forEach(t),xl=d(W),xe=a(W,"DIV",{class:!0});var Ao=n(xe);I(Wo.$$.fragment,Ao),Dl=d(Ao),Qn=a(Ao,"P",{});var hh=n(Qn);Hl=i(hh,"Get info on one specific dataset on huggingface.co."),hh.forEach(t),ql=d(Ao),Xn=a(Ao,"P",{});var uh=n(Xn);jl=i(uh,"Dataset can be private if you pass an acceptable token."),uh.forEach(t),Il=d(Ao),I(qt.$$.fragment,Ao),Ao.forEach(t),Nl=d(W),Ke=a(W,"DIV",{class:!0});var Hn=n(Ke);I(Go.$$.fragment,Hn),Fl=d(Hn),Yn=a(Hn,"P",{});var fh=n(Yn);Tl=i(fh,"Deletes a file in the given repo."),fh.forEach(t),Pl=d(Hn),I(jt.$$.fragment,Hn),Hn.forEach(t),Ol=d(W),Je=a(W,"DIV",{class:!0});var qn=n(Je);I(Bo.$$.fragment,qn),Ll=d(qn),Zn=a(qn,"P",{});var mh=n(Zn);Rl=i(mh,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),mh.forEach(t),Cl=d(qn),I(It.$$.fragment,qn),qn.forEach(t),Sl=d(W),Qe=a(W,"DIV",{class:!0});var jn=n(Qe);I(Ko.$$.fragment,jn),Ml=d(jn),es=a(jn,"P",{});var _h=n(es);Ul=i(_h,"Edits a comment on a Discussion / Pull Request."),_h.forEach(t),Vl=d(jn),I(Nt.$$.fragment,jn),jn.forEach(t),zl=d(W),Ft=a(W,"DIV",{class:!0});var ai=n(Ft);I(Jo.$$.fragment,ai),Wl=d(ai),ts=a(ai,"P",{});var bh=n(ts);Gl=i(bh,"Gets all valid dataset tags as a nested namespace object."),bh.forEach(t),ai.forEach(t),Bl=d(W),De=a(W,"DIV",{class:!0});var xo=n(De);I(Qo.$$.fragment,xo),Kl=d(xo),os=a(xo,"P",{});var vh=n(os);Jl=i(vh,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),vh.forEach(t),Ql=d(xo),vn=a(xo,"P",{});var lh=n(vn);Xl=i(lh,"Returns: "),$n=a(lh,"A",{href:!0});var $h=n($n);Yl=i($h,"DiscussionWithDetails"),$h.forEach(t),lh.forEach(t),Zl=d(xo),I(Tt.$$.fragment,xo),xo.forEach(t),ec=d(W),Pt=a(W,"DIV",{class:!0});var ni=n(Pt);I(Xo.$$.fragment,ni),tc=d(ni),as=a(ni,"P",{});var yh=n(as);oc=i(yh,`Returns the repository name for a given model ID and optional
organization.`),yh.forEach(t),ni.forEach(t),ac=d(W),Ot=a(W,"DIV",{class:!0});var si=n(Ot);I(Yo.$$.fragment,si),nc=d(si),ns=a(si,"P",{});var Eh=n(ns);sc=i(Eh,"Gets all valid model tags as a nested namespace object"),Eh.forEach(t),si.forEach(t),rc=d(W),ve=a(W,"DIV",{class:!0});var nt=n(ve);I(Zo.$$.fragment,nt),ic=d(nt),ss=a(nt,"P",{});var kh=n(ss);lc=i(kh,"Fetches Discussions and Pull Requests for the given repo."),kh.forEach(t),cc=d(nt),rs=a(nt,"P",{});var wh=n(rs);pc=i(wh,"Example:"),wh.forEach(t),gc=d(nt),I(Lt.$$.fragment,nt),dc=d(nt),I(Rt.$$.fragment,nt),nt.forEach(t),hc=d(W),He=a(W,"DIV",{class:!0});var Do=n(He);I(ea.$$.fragment,Do),uc=d(Do),is=a(Do,"P",{});var Ah=n(is);fc=i(Ah,"Hides a comment on a Discussion / Pull Request."),Ah.forEach(t),mc=d(Do),I(Ct.$$.fragment,Do),_c=d(Do),I(St.$$.fragment,Do),Do.forEach(t),bc=d(W),qe=a(W,"DIV",{class:!0});var Ho=n(qe);I(ta.$$.fragment,Ho),vc=d(Ho),ls=a(Ho,"P",{});var xh=n(ls);$c=i(xh,"Get the public list of all the datasets on huggingface.co"),xh.forEach(t),yc=d(Ho),I(Mt.$$.fragment,Ho),Ec=d(Ho),I(Ut.$$.fragment,Ho),Ho.forEach(t),kc=d(W),Vt=a(W,"DIV",{class:!0});var ri=n(Vt);I(oa.$$.fragment,ri),wc=d(ri),cs=a(ri,"P",{});var Dh=n(cs);Ac=i(Dh,"Get the public list of all the metrics on huggingface.co"),Dh.forEach(t),ri.forEach(t),xc=d(W),$e=a(W,"DIV",{class:!0});var st=n($e);I(aa.$$.fragment,st),Dc=d(st),ps=a(st,"P",{});var Hh=n(ps);Hc=i(Hh,"Get the public list of all the models on huggingface.co"),Hh.forEach(t),qc=d(st),na=a(st,"P",{});var ii=n(na);jc=i(ii,"Returns: List of "),yn=a(ii,"A",{href:!0});var qh=n(yn);Ic=i(qh,"huggingface_hub.hf_api.ModelInfo"),qh.forEach(t),Nc=i(ii," objects"),ii.forEach(t),Fc=d(st),I(zt.$$.fragment,st),Tc=d(st),I(Wt.$$.fragment,st),st.forEach(t),Pc=d(W),Gt=a(W,"DIV",{class:!0});var li=n(Gt);I(sa.$$.fragment,li),Oc=d(li),gs=a(li,"P",{});var jh=n(gs);Lc=i(jh,"Get the list of files in a given repo."),jh.forEach(t),li.forEach(t),Rc=d(W),Bt=a(W,"DIV",{class:!0});var ci=n(Bt);I(ra.$$.fragment,ci),Cc=d(ci),ds=a(ci,"P",{});var Ih=n(ds);Sc=i(Ih,"Get the public list of all Spaces on huggingface.co"),Ih.forEach(t),ci.forEach(t),Mc=d(W),Xe=a(W,"DIV",{class:!0});var In=n(Xe);I(ia.$$.fragment,In),Uc=d(In),hs=a(In,"P",{});var Nh=n(hs);Vc=i(Nh,"Merges a Pull Request."),Nh.forEach(t),zc=d(In),I(Kt.$$.fragment,In),In.forEach(t),Wc=d(W),je=a(W,"DIV",{class:!0});var qo=n(je);I(la.$$.fragment,qo),Gc=d(qo),us=a(qo,"P",{});var Fh=n(us);Bc=i(Fh,"Get info on one specific model on huggingface.co"),Fh.forEach(t),Kc=d(qo),fs=a(qo,"P",{});var Th=n(fs);Jc=i(Th,"Model can be private if you pass an acceptable token or are logged in."),Th.forEach(t),Qc=d(qo),I(Jt.$$.fragment,qo),qo.forEach(t),Xc=d(W),Ie=a(W,"DIV",{class:!0});var jo=n(Ie);I(ca.$$.fragment,jo),Yc=d(jo),ms=a(jo,"P",{});var Ph=n(ms);Zc=i(Ph,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ph.forEach(t),ep=d(jo),pa=a(jo,"P",{});var pi=n(pa);tp=i(pi,`Note there are certain limitations. For more information about moving
repositories, please see
`),ga=a(pi,"A",{href:!0,rel:!0});var Oh=n(ga);op=i(Oh,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Oh.forEach(t),ap=i(pi,"."),pi.forEach(t),np=d(jo),I(Qt.$$.fragment,jo),jo.forEach(t),sp=d(W),Ne=a(W,"DIV",{class:!0});var Io=n(Ne);I(da.$$.fragment,Io),rp=d(Io),_s=a(Io,"P",{});var Lh=n(_s);ip=i(Lh,"Renames a Discussion."),Lh.forEach(t),lp=d(Io),I(Xt.$$.fragment,Io),cp=d(Io),I(Yt.$$.fragment,Io),Io.forEach(t),pp=d(W),Ye=a(W,"DIV",{class:!0});var Nn=n(Ye);I(ha.$$.fragment,Nn),gp=d(Nn),bs=a(Nn,"P",{});var Rh=n(bs);dp=i(Rh,"Get the info object for a given repo of a given type."),Rh.forEach(t),hp=d(Nn),I(Zt.$$.fragment,Nn),Nn.forEach(t),up=d(W),eo=a(W,"DIV",{class:!0});var gi=n(eo);I(ua.$$.fragment,gi),fp=d(gi),vs=a(gi,"P",{});var Ch=n(vs);mp=i(Ch,`Saves the passed access token so git can correctly authenticate the
user.`),Ch.forEach(t),gi.forEach(t),_p=d(W),Fe=a(W,"DIV",{class:!0});var No=n(Fe);I(fa.$$.fragment,No),bp=d(No),$s=a(No,"P",{});var Sh=n($s);vp=i(Sh,"Get info on one specific Space on huggingface.co."),Sh.forEach(t),$p=d(No),ys=a(No,"P",{});var Mh=n(ys);yp=i(Mh,"Space can be private if you pass an acceptable token."),Mh.forEach(t),Ep=d(No),I(to.$$.fragment,No),No.forEach(t),kp=d(W),oo=a(W,"DIV",{class:!0});var di=n(oo);I(ma.$$.fragment,di),wp=d(di),Es=a(di,"P",{});var Uh=n(Es);Ap=i(Uh,"Resets the user\u2019s access token."),Uh.forEach(t),di.forEach(t),xp=d(W),Ze=a(W,"DIV",{class:!0});var Fn=n(Ze);I(_a.$$.fragment,Fn),Dp=d(Fn),ks=a(Fn,"P",{});var Vh=n(ks);Hp=i(Vh,"Update the visibility setting of a repository."),Vh.forEach(t),qp=d(Fn),I(ao.$$.fragment,Fn),Fn.forEach(t),jp=d(W),ye=a(W,"DIV",{class:!0});var rt=n(ye);I(ba.$$.fragment,rt),Ip=d(rt),ws=a(rt,"P",{});var zh=n(ws);Np=i(zh,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),zh.forEach(t),Fp=d(rt),I(no.$$.fragment,rt),Tp=d(rt),I(so.$$.fragment,rt),Pp=d(rt),I(ro.$$.fragment,rt),rt.forEach(t),Op=d(W),re=a(W,"DIV",{class:!0});var pe=n(re);I(va.$$.fragment,pe),Lp=d(pe),As=a(pe,"P",{});var Wh=n(As);Rp=i(Wh,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Wh.forEach(t),Cp=d(pe),xs=a(pe,"P",{});var Gh=n(xs);Sp=i(Gh,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Gh.forEach(t),Mp=d(pe),ue=a(pe,"P",{});var Pe=n(ue);Up=i(Pe,"Use the "),Ds=a(Pe,"CODE",{});var Bh=n(Ds);Vp=i(Bh,"allow_patterns"),Bh.forEach(t),zp=i(Pe," and "),Hs=a(Pe,"CODE",{});var Kh=n(Hs);Wp=i(Kh,"ignore_patterns"),Kh.forEach(t),Gp=i(Pe,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),$a=a(Pe,"A",{href:!0,rel:!0});var Jh=n($a);Bp=i(Jh,"here"),Jh.forEach(t),Kp=i(Pe,`. If both
`),qs=a(Pe,"CODE",{});var Qh=n(qs);Jp=i(Qh,"allow_patterns"),Qh.forEach(t),Qp=i(Pe," and "),js=a(Pe,"CODE",{});var Xh=n(js);Xp=i(Xh,"ignore_patterns"),Xh.forEach(t),Yp=i(Pe,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Pe.forEach(t),Zp=d(pe),ya=a(pe,"P",{});var hi=n(ya);eg=i(hi,"Uses "),Is=a(hi,"CODE",{});var Yh=n(Is);tg=i(Yh,"HfApi.create_commit"),Yh.forEach(t),og=i(hi," under the hood."),hi.forEach(t),ag=d(pe),I(io.$$.fragment,pe),ng=d(pe),I(lo.$$.fragment,pe),sg=d(pe),I(co.$$.fragment,pe),pe.forEach(t),rg=d(W),po=a(W,"DIV",{class:!0});var ui=n(po);I(Ea.$$.fragment,ui),ig=d(ui),Ns=a(ui,"P",{});var Zh=n(Ns);lg=i(Zh,"Call HF API to know \u201Cwhoami\u201D."),Zh.forEach(t),ui.forEach(t),W.forEach(t),Rr=d(s),gt=a(s,"DIV",{class:!0});var fi=n(gt);I(ka.$$.fragment,fi),cg=d(fi),Fs=a(fi,"P",{});var eu=n(Fs);pg=i(eu,"Info about a model accessible from huggingface.co"),eu.forEach(t),fi.forEach(t),Cr=d(s),dt=a(s,"DIV",{class:!0});var mi=n(dt);I(wa.$$.fragment,mi),gg=d(mi),Ts=a(mi,"P",{});var tu=n(Ts);dg=i(tu,"Info about a dataset accessible from huggingface.co"),tu.forEach(t),mi.forEach(t),Sr=d(s),Re=a(s,"DIV",{class:!0});var Tn=n(Re);I(Aa.$$.fragment,Tn),hg=d(Tn),Ps=a(Tn,"P",{});var ou=n(Ps);ug=i(ou,"Info about a Space accessible from huggingface.co"),ou.forEach(t),fg=d(Tn),Os=a(Tn,"P",{});var au=n(Os);mg=i(au,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),au.forEach(t),Tn.forEach(t),Mr=d(s),ht=a(s,"DIV",{class:!0});var _i=n(ht);I(xa.$$.fragment,_i),_g=d(_i),Ls=a(_i,"P",{});var nu=n(Ls);bg=i(nu,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),nu.forEach(t),_i.forEach(t),Ur=d(s),ut=a(s,"H2",{class:!0});var bi=n(ut);go=a(bi,"A",{id:!0,class:!0,href:!0});var su=n(go);Rs=a(su,"SPAN",{});var ru=n(Rs);I(Da.$$.fragment,ru),ru.forEach(t),su.forEach(t),vg=d(bi),En=a(bi,"SPAN",{});var ch=n(En);Cs=a(ch,"CODE",{});var iu=n(Cs);$g=i(iu,"create_commit"),iu.forEach(t),yg=i(ch," API"),ch.forEach(t),bi.forEach(t),Vr=d(s),ho=a(s,"P",{});var vi=n(ho);Eg=i(vi,"Below are the supported values for "),Ss=a(vi,"CODE",{});var lu=n(Ss);kg=i(lu,"CommitOperation()"),lu.forEach(t),wg=i(vi,":"),vi.forEach(t),zr=d(s),fe=a(s,"DIV",{class:!0});var it=n(fe);I(Ha.$$.fragment,it),Ag=d(it),Ms=a(it,"P",{});var cu=n(Ms);xg=i(cu,`Data structure holding necessary info to upload a file
to a repository on the Hub`),cu.forEach(t),Dg=d(it),Ee=a(it,"DIV",{class:!0});var lt=n(Ee);I(qa.$$.fragment,lt),Hg=d(lt),ja=a(lt,"P",{});var $i=n(ja);qg=i($i,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Us=a($i,"CODE",{});var pu=n(Us);jg=i(pu,"path_or_fileobj"),pu.forEach(t),Ig=i($i,"."),$i.forEach(t),Ng=d(lt),Ia=a(lt,"P",{});var yi=n(Ia);Fg=i(yi,"Triggers "),Vs=a(yi,"CODE",{});var gu=n(Vs);Tg=i(gu,"self.validate"),gu.forEach(t),Pg=i(yi,"."),yi.forEach(t),Og=d(lt),Na=a(lt,"P",{});var Ei=n(Na);Lg=i(Ei,"Raises: "),zs=a(Ei,"CODE",{});var du=n(zs);Rg=i(du,"ValueError"),du.forEach(t),Cg=i(Ei," if self.validate fails"),Ei.forEach(t),Sg=d(lt),I(uo.$$.fragment,lt),lt.forEach(t),Mg=d(it),et=a(it,"DIV",{class:!0});var Pn=n(et);I(Fa.$$.fragment,Pn),Ug=d(Pn),kn=a(Pn,"P",{});var ph=n(kn);Vg=i(ph,"The base64-encoded content of "),Ws=a(ph,"CODE",{});var hu=n(Ws);zg=i(hu,"path_or_fileobj"),hu.forEach(t),ph.forEach(t),Wg=d(Pn),wn=a(Pn,"P",{});var gh=n(wn);Gg=i(gh,"Returns: "),Gs=a(gh,"CODE",{});var uu=n(Gs);Bg=i(uu,"bytes"),uu.forEach(t),gh.forEach(t),Pn.forEach(t),Kg=d(it),Te=a(it,"DIV",{class:!0});var Fo=n(Te);I(Ta.$$.fragment,Fo),Jg=d(Fo),Pa=a(Fo,"P",{});var ki=n(Pa);Qg=i(ki,"Ensures "),Bs=a(ki,"CODE",{});var fu=n(Bs);Xg=i(fu,"path_or_fileobj"),fu.forEach(t),Yg=i(ki," is valid:"),ki.forEach(t),Zg=d(Fo),ft=a(Fo,"UL",{});var On=n(ft);tt=a(On,"LI",{});var ln=n(tt);ed=i(ln,"Ensures it is either a "),Ks=a(ln,"CODE",{});var mu=n(Ks);td=i(mu,"str"),mu.forEach(t),od=i(ln,", "),Js=a(ln,"CODE",{});var _u=n(Js);ad=i(_u,"bytes"),_u.forEach(t),nd=i(ln," or an instance of "),Qs=a(ln,"CODE",{});var bu=n(Qs);sd=i(bu,"io.BufferedIOBase"),bu.forEach(t),ln.forEach(t),rd=d(On),Oa=a(On,"LI",{});var wi=n(Oa);id=i(wi,"If it is a "),Xs=a(wi,"CODE",{});var vu=n(Xs);ld=i(vu,"str"),vu.forEach(t),cd=i(wi,", ensure that it is a file path and that the file exists"),wi.forEach(t),pd=d(On),ot=a(On,"LI",{});var cn=n(ot);gd=i(cn,"If it is an instance of "),Ys=a(cn,"CODE",{});var $u=n(Ys);dd=i($u,"io.BufferedIOBase"),$u.forEach(t),hd=i(cn,", ensures it supports "),Zs=a(cn,"CODE",{});var yu=n(Zs);ud=i(yu,"seek()"),yu.forEach(t),fd=i(cn," and "),er=a(cn,"CODE",{});var Eu=n(er);md=i(Eu,"tell()"),Eu.forEach(t),cn.forEach(t),On.forEach(t),_d=d(Fo),mt=a(Fo,"P",{});var Ln=n(mt);bd=i(Ln,"Raises: "),tr=a(Ln,"CODE",{});var ku=n(tr);vd=i(ku,"ValueError"),ku.forEach(t),$d=i(Ln," if "),or=a(Ln,"CODE",{});var wu=n(or);yd=i(wu,"path_or_fileobj"),wu.forEach(t),Ed=i(Ln," is not valid"),Ln.forEach(t),Fo.forEach(t),it.forEach(t),Wr=d(s),_t=a(s,"DIV",{class:!0});var Ai=n(_t);I(La.$$.fragment,Ai),kd=d(Ai),ar=a(Ai,"P",{});var Au=n(ar);wd=i(Au,`Data structure holding necessary info to delete
a file from a repository on the Hub`),Au.forEach(t),Ai.forEach(t),Gr=d(s),bt=a(s,"H2",{class:!0});var xi=n(bt);fo=a(xi,"A",{id:!0,class:!0,href:!0});var xu=n(fo);nr=a(xu,"SPAN",{});var Du=n(nr);I(Ra.$$.fragment,Du),Du.forEach(t),xu.forEach(t),Ad=d(xi),sr=a(xi,"SPAN",{});var Hu=n(sr);xd=i(Hu,"Hugging Face local storage"),Hu.forEach(t),xi.forEach(t),Br=d(s),Ca=a(s,"P",{});var dh=n(Ca);rr=a(dh,"CODE",{});var qu=n(rr);Dd=i(qu,"huggingface_hub"),qu.forEach(t),Hd=i(dh,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),dh.forEach(t),Kr=d(s),mo=a(s,"P",{});var Di=n(mo);qd=i(Di,"It does this using the "),An=a(Di,"A",{href:!0});var ju=n(An);jd=i(ju,"HfFolder"),ju.forEach(t),Id=i(Di," utility, which saves data at the root of the user."),Di.forEach(t),Jr=d(s),we=a(s,"DIV",{class:!0});var To=n(we);I(Sa.$$.fragment,To),Nd=d(To),_o=a(To,"DIV",{class:!0});var Hi=n(_o);I(Ma.$$.fragment,Hi),Fd=d(Hi),ir=a(Hi,"P",{});var Iu=n(ir);Td=i(Iu,"Deletes the token from storage. Does not fail if token does not exist."),Iu.forEach(t),Hi.forEach(t),Pd=d(To),at=a(To,"DIV",{class:!0});var Rn=n(at);I(Ua.$$.fragment,Rn),Od=d(Rn),lr=a(Rn,"P",{});var Nu=n(lr);Ld=i(Nu,"Get token or None if not existent."),Nu.forEach(t),Rd=d(Rn),Va=a(Rn,"P",{});var qi=n(Va);Cd=i(qi,`Note that a token can be also provided using the
`),cr=a(qi,"CODE",{});var Fu=n(cr);Sd=i(Fu,"HUGGING_FACE_HUB_TOKEN"),Fu.forEach(t),Md=i(qi," environment variable."),qi.forEach(t),Rn.forEach(t),Ud=d(To),bo=a(To,"DIV",{class:!0});var ji=n(bo);I(za.$$.fragment,ji),Vd=d(ji),pr=a(ji,"P",{});var Tu=n(pr);zd=i(Tu,"Save token, creating folder as needed."),Tu.forEach(t),ji.forEach(t),To.forEach(t),Qr=d(s),vt=a(s,"H2",{class:!0});var Ii=n(vt);vo=a(Ii,"A",{id:!0,class:!0,href:!0});var Pu=n(vo);gr=a(Pu,"SPAN",{});var Ou=n(gr);I(Wa.$$.fragment,Ou),Ou.forEach(t),Pu.forEach(t),Wd=d(Ii),dr=a(Ii,"SPAN",{});var Lu=n(dr);Gd=i(Lu,"Filtering helpers"),Lu.forEach(t),Ii.forEach(t),Xr=d(s),$o=a(s,"P",{});var Ni=n($o);Bd=i(Ni,"Some helpers to filter repositories on the Hub are available in the "),hr=a(Ni,"CODE",{});var Ru=n(hr);Kd=i(Ru,"huggingface_hub"),Ru.forEach(t),Jd=i(Ni," package."),Ni.forEach(t),Yr=d(s),Ce=a(s,"DIV",{class:!0});var Cn=n(Ce);I(Ga.$$.fragment,Cn),Qd=d(Cn),ur=a(Cn,"P",{});var Cu=n(ur);Xd=i(Cu,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Cu.forEach(t),Yd=d(Cn),I(yo.$$.fragment,Cn),Cn.forEach(t),Zr=d(s),Se=a(s,"DIV",{class:!0});var Sn=n(Se);I(Ba.$$.fragment,Sn),Zd=d(Sn),fr=a(Sn,"P",{});var Su=n(fr);eh=i(Su,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Su.forEach(t),th=d(Sn),I(Eo.$$.fragment,Sn),Sn.forEach(t),ei=d(s),Me=a(s,"DIV",{class:!0});var Mn=n(Me);I(Ka.$$.fragment,Mn),oh=d(Mn),mr=a(Mn,"P",{});var Mu=n(mr);ah=i(Mu,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Mu.forEach(t),nh=d(Mn),I(ko.$$.fragment,Mn),Mn.forEach(t),ti=d(s),Ue=a(s,"DIV",{class:!0});var Un=n(Ue);I(Ja.$$.fragment,Un),sh=d(Un),_r=a(Un,"P",{});var Uu=n(_r);rh=i(Uu,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Uu.forEach(t),ih=d(Un),I(wo.$$.fragment,Un),Un.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(Pf)),$(c,"id","huggingface_hub.HfApi"),$(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(c,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(hn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(fn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(mn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(bn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($n,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(yn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ga,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(ga,"rel","nofollow"),$(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($a,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),$($a,"rel","nofollow"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(go,"id","huggingface_hub.CommitOperationAdd"),$(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(go,"href","#huggingface_hub.CommitOperationAdd"),$(ut,"class","relative group"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(fo,"id","huggingface_hub.HfFolder"),$(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(fo,"href","#huggingface_hub.HfFolder"),$(bt,"class","relative group"),$(An,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(vo,"id","huggingface_hub.DatasetFilter"),$(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(vo,"href","#huggingface_hub.DatasetFilter"),$(vt,"class","relative group"),$(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,w){e(document.head,p),E(s,_,w),E(s,f,w),e(f,c),e(c,h),N(l,h,null),e(f,u),e(f,q),e(q,b),E(s,x,w),E(s,y,w),e(y,v),e(y,k),e(k,O),e(y,H),E(s,L,w),E(s,m,w),e(m,D),e(m,S),e(S,z),e(m,R),E(s,K,w),E(s,G,w),e(G,A),E(s,M,w),N(C,s,w),E(s,Y,w),E(s,te,w),e(te,Z),e(te,J),e(J,ee),e(te,ae),E(s,B,w),N(X,s,w),E(s,oe,w),E(s,se,w),e(se,We),e(se,be),e(be,ct),e(se,Ge),E(s,Oe,w),E(s,V,w),N(ke,V,null),e(V,pn),e(V,he),N(Le,he,null),e(he,gn),e(he,pt),e(pt,dn),e(he,Ti),N(yt,he,null),e(he,Pi),N(Et,he,null),e(V,Oi),e(V,Ae),N(Po,Ae,null),e(Ae,Li),e(Ae,Vn),e(Vn,Ri),e(Ae,Ci),N(kt,Ae,null),e(Ae,Si),N(wt,Ae,null),e(V,Mi),e(V,Be),N(Oo,Be,null),e(Be,Ui),e(Be,zn),e(zn,Vi),e(Be,zi),N(At,Be,null),e(V,Wi),e(V,le),N(Lo,le,null),e(le,Gi),e(le,Wn),e(Wn,Bi),e(le,Ki),e(le,Ro),e(Ro,Ji),e(Ro,Gn),e(Gn,Qi),e(Ro,Xi),e(le,Yi),e(le,Co),e(Co,Zi),e(Co,hn),e(hn,el),e(Co,tl),e(le,ol),e(le,un),e(un,al),e(un,fn),e(fn,nl),e(le,sl),N(xt,le,null),e(V,rl),e(V,ce),N(So,ce,null),e(ce,il),e(ce,Mo),e(Mo,ll),e(Mo,Bn),e(Bn,cl),e(Mo,pl),e(ce,gl),e(ce,Uo),e(Uo,dl),e(Uo,mn),e(mn,hl),e(Uo,ul),e(ce,fl),e(ce,Vo),e(Vo,ml),e(Vo,Kn),e(Kn,_l),e(Vo,bl),e(ce,vl),e(ce,_n),e(_n,$l),e(_n,bn),e(bn,yl),e(ce,El),N(Dt,ce,null),e(V,kl),e(V,Ht),N(zo,Ht,null),e(Ht,wl),e(Ht,Jn),e(Jn,Al),e(V,xl),e(V,xe),N(Wo,xe,null),e(xe,Dl),e(xe,Qn),e(Qn,Hl),e(xe,ql),e(xe,Xn),e(Xn,jl),e(xe,Il),N(qt,xe,null),e(V,Nl),e(V,Ke),N(Go,Ke,null),e(Ke,Fl),e(Ke,Yn),e(Yn,Tl),e(Ke,Pl),N(jt,Ke,null),e(V,Ol),e(V,Je),N(Bo,Je,null),e(Je,Ll),e(Je,Zn),e(Zn,Rl),e(Je,Cl),N(It,Je,null),e(V,Sl),e(V,Qe),N(Ko,Qe,null),e(Qe,Ml),e(Qe,es),e(es,Ul),e(Qe,Vl),N(Nt,Qe,null),e(V,zl),e(V,Ft),N(Jo,Ft,null),e(Ft,Wl),e(Ft,ts),e(ts,Gl),e(V,Bl),e(V,De),N(Qo,De,null),e(De,Kl),e(De,os),e(os,Jl),e(De,Ql),e(De,vn),e(vn,Xl),e(vn,$n),e($n,Yl),e(De,Zl),N(Tt,De,null),e(V,ec),e(V,Pt),N(Xo,Pt,null),e(Pt,tc),e(Pt,as),e(as,oc),e(V,ac),e(V,Ot),N(Yo,Ot,null),e(Ot,nc),e(Ot,ns),e(ns,sc),e(V,rc),e(V,ve),N(Zo,ve,null),e(ve,ic),e(ve,ss),e(ss,lc),e(ve,cc),e(ve,rs),e(rs,pc),e(ve,gc),N(Lt,ve,null),e(ve,dc),N(Rt,ve,null),e(V,hc),e(V,He),N(ea,He,null),e(He,uc),e(He,is),e(is,fc),e(He,mc),N(Ct,He,null),e(He,_c),N(St,He,null),e(V,bc),e(V,qe),N(ta,qe,null),e(qe,vc),e(qe,ls),e(ls,$c),e(qe,yc),N(Mt,qe,null),e(qe,Ec),N(Ut,qe,null),e(V,kc),e(V,Vt),N(oa,Vt,null),e(Vt,wc),e(Vt,cs),e(cs,Ac),e(V,xc),e(V,$e),N(aa,$e,null),e($e,Dc),e($e,ps),e(ps,Hc),e($e,qc),e($e,na),e(na,jc),e(na,yn),e(yn,Ic),e(na,Nc),e($e,Fc),N(zt,$e,null),e($e,Tc),N(Wt,$e,null),e(V,Pc),e(V,Gt),N(sa,Gt,null),e(Gt,Oc),e(Gt,gs),e(gs,Lc),e(V,Rc),e(V,Bt),N(ra,Bt,null),e(Bt,Cc),e(Bt,ds),e(ds,Sc),e(V,Mc),e(V,Xe),N(ia,Xe,null),e(Xe,Uc),e(Xe,hs),e(hs,Vc),e(Xe,zc),N(Kt,Xe,null),e(V,Wc),e(V,je),N(la,je,null),e(je,Gc),e(je,us),e(us,Bc),e(je,Kc),e(je,fs),e(fs,Jc),e(je,Qc),N(Jt,je,null),e(V,Xc),e(V,Ie),N(ca,Ie,null),e(Ie,Yc),e(Ie,ms),e(ms,Zc),e(Ie,ep),e(Ie,pa),e(pa,tp),e(pa,ga),e(ga,op),e(pa,ap),e(Ie,np),N(Qt,Ie,null),e(V,sp),e(V,Ne),N(da,Ne,null),e(Ne,rp),e(Ne,_s),e(_s,ip),e(Ne,lp),N(Xt,Ne,null),e(Ne,cp),N(Yt,Ne,null),e(V,pp),e(V,Ye),N(ha,Ye,null),e(Ye,gp),e(Ye,bs),e(bs,dp),e(Ye,hp),N(Zt,Ye,null),e(V,up),e(V,eo),N(ua,eo,null),e(eo,fp),e(eo,vs),e(vs,mp),e(V,_p),e(V,Fe),N(fa,Fe,null),e(Fe,bp),e(Fe,$s),e($s,vp),e(Fe,$p),e(Fe,ys),e(ys,yp),e(Fe,Ep),N(to,Fe,null),e(V,kp),e(V,oo),N(ma,oo,null),e(oo,wp),e(oo,Es),e(Es,Ap),e(V,xp),e(V,Ze),N(_a,Ze,null),e(Ze,Dp),e(Ze,ks),e(ks,Hp),e(Ze,qp),N(ao,Ze,null),e(V,jp),e(V,ye),N(ba,ye,null),e(ye,Ip),e(ye,ws),e(ws,Np),e(ye,Fp),N(no,ye,null),e(ye,Tp),N(so,ye,null),e(ye,Pp),N(ro,ye,null),e(V,Op),e(V,re),N(va,re,null),e(re,Lp),e(re,As),e(As,Rp),e(re,Cp),e(re,xs),e(xs,Sp),e(re,Mp),e(re,ue),e(ue,Up),e(ue,Ds),e(Ds,Vp),e(ue,zp),e(ue,Hs),e(Hs,Wp),e(ue,Gp),e(ue,$a),e($a,Bp),e(ue,Kp),e(ue,qs),e(qs,Jp),e(ue,Qp),e(ue,js),e(js,Xp),e(ue,Yp),e(re,Zp),e(re,ya),e(ya,eg),e(ya,Is),e(Is,tg),e(ya,og),e(re,ag),N(io,re,null),e(re,ng),N(lo,re,null),e(re,sg),N(co,re,null),e(V,rg),e(V,po),N(Ea,po,null),e(po,ig),e(po,Ns),e(Ns,lg),E(s,Rr,w),E(s,gt,w),N(ka,gt,null),e(gt,cg),e(gt,Fs),e(Fs,pg),E(s,Cr,w),E(s,dt,w),N(wa,dt,null),e(dt,gg),e(dt,Ts),e(Ts,dg),E(s,Sr,w),E(s,Re,w),N(Aa,Re,null),e(Re,hg),e(Re,Ps),e(Ps,ug),e(Re,fg),e(Re,Os),e(Os,mg),E(s,Mr,w),E(s,ht,w),N(xa,ht,null),e(ht,_g),e(ht,Ls),e(Ls,bg),E(s,Ur,w),E(s,ut,w),e(ut,go),e(go,Rs),N(Da,Rs,null),e(ut,vg),e(ut,En),e(En,Cs),e(Cs,$g),e(En,yg),E(s,Vr,w),E(s,ho,w),e(ho,Eg),e(ho,Ss),e(Ss,kg),e(ho,wg),E(s,zr,w),E(s,fe,w),N(Ha,fe,null),e(fe,Ag),e(fe,Ms),e(Ms,xg),e(fe,Dg),e(fe,Ee),N(qa,Ee,null),e(Ee,Hg),e(Ee,ja),e(ja,qg),e(ja,Us),e(Us,jg),e(ja,Ig),e(Ee,Ng),e(Ee,Ia),e(Ia,Fg),e(Ia,Vs),e(Vs,Tg),e(Ia,Pg),e(Ee,Og),e(Ee,Na),e(Na,Lg),e(Na,zs),e(zs,Rg),e(Na,Cg),e(Ee,Sg),N(uo,Ee,null),e(fe,Mg),e(fe,et),N(Fa,et,null),e(et,Ug),e(et,kn),e(kn,Vg),e(kn,Ws),e(Ws,zg),e(et,Wg),e(et,wn),e(wn,Gg),e(wn,Gs),e(Gs,Bg),e(fe,Kg),e(fe,Te),N(Ta,Te,null),e(Te,Jg),e(Te,Pa),e(Pa,Qg),e(Pa,Bs),e(Bs,Xg),e(Pa,Yg),e(Te,Zg),e(Te,ft),e(ft,tt),e(tt,ed),e(tt,Ks),e(Ks,td),e(tt,od),e(tt,Js),e(Js,ad),e(tt,nd),e(tt,Qs),e(Qs,sd),e(ft,rd),e(ft,Oa),e(Oa,id),e(Oa,Xs),e(Xs,ld),e(Oa,cd),e(ft,pd),e(ft,ot),e(ot,gd),e(ot,Ys),e(Ys,dd),e(ot,hd),e(ot,Zs),e(Zs,ud),e(ot,fd),e(ot,er),e(er,md),e(Te,_d),e(Te,mt),e(mt,bd),e(mt,tr),e(tr,vd),e(mt,$d),e(mt,or),e(or,yd),e(mt,Ed),E(s,Wr,w),E(s,_t,w),N(La,_t,null),e(_t,kd),e(_t,ar),e(ar,wd),E(s,Gr,w),E(s,bt,w),e(bt,fo),e(fo,nr),N(Ra,nr,null),e(bt,Ad),e(bt,sr),e(sr,xd),E(s,Br,w),E(s,Ca,w),e(Ca,rr),e(rr,Dd),e(Ca,Hd),E(s,Kr,w),E(s,mo,w),e(mo,qd),e(mo,An),e(An,jd),e(mo,Id),E(s,Jr,w),E(s,we,w),N(Sa,we,null),e(we,Nd),e(we,_o),N(Ma,_o,null),e(_o,Fd),e(_o,ir),e(ir,Td),e(we,Pd),e(we,at),N(Ua,at,null),e(at,Od),e(at,lr),e(lr,Ld),e(at,Rd),e(at,Va),e(Va,Cd),e(Va,cr),e(cr,Sd),e(Va,Md),e(we,Ud),e(we,bo),N(za,bo,null),e(bo,Vd),e(bo,pr),e(pr,zd),E(s,Qr,w),E(s,vt,w),e(vt,vo),e(vo,gr),N(Wa,gr,null),e(vt,Wd),e(vt,dr),e(dr,Gd),E(s,Xr,w),E(s,$o,w),e($o,Bd),e($o,hr),e(hr,Kd),e($o,Jd),E(s,Yr,w),E(s,Ce,w),N(Ga,Ce,null),e(Ce,Qd),e(Ce,ur),e(ur,Xd),e(Ce,Yd),N(yo,Ce,null),E(s,Zr,w),E(s,Se,w),N(Ba,Se,null),e(Se,Zd),e(Se,fr),e(fr,eh),e(Se,th),N(Eo,Se,null),E(s,ei,w),E(s,Me,w),N(Ka,Me,null),e(Me,oh),e(Me,mr),e(mr,ah),e(Me,nh),N(ko,Me,null),E(s,ti,w),E(s,Ue,w),N(Ja,Ue,null),e(Ue,sh),e(Ue,_r),e(_r,rh),e(Ue,ih),N(wo,Ue,null),oi=!0},p(s,[w]){const Qa={};w&2&&(Qa.$$scope={dirty:w,ctx:s}),yt.$set(Qa);const br={};w&2&&(br.$$scope={dirty:w,ctx:s}),Et.$set(br);const vr={};w&2&&(vr.$$scope={dirty:w,ctx:s}),kt.$set(vr);const $r={};w&2&&($r.$$scope={dirty:w,ctx:s}),wt.$set($r);const Xa={};w&2&&(Xa.$$scope={dirty:w,ctx:s}),At.$set(Xa);const yr={};w&2&&(yr.$$scope={dirty:w,ctx:s}),xt.$set(yr);const Ya={};w&2&&(Ya.$$scope={dirty:w,ctx:s}),Dt.$set(Ya);const Er={};w&2&&(Er.$$scope={dirty:w,ctx:s}),qt.$set(Er);const kr={};w&2&&(kr.$$scope={dirty:w,ctx:s}),jt.$set(kr);const Za={};w&2&&(Za.$$scope={dirty:w,ctx:s}),It.$set(Za);const wr={};w&2&&(wr.$$scope={dirty:w,ctx:s}),Nt.$set(wr);const en={};w&2&&(en.$$scope={dirty:w,ctx:s}),Tt.$set(en);const Ar={};w&2&&(Ar.$$scope={dirty:w,ctx:s}),Lt.$set(Ar);const W={};w&2&&(W.$$scope={dirty:w,ctx:s}),Rt.$set(W);const Ve={};w&2&&(Ve.$$scope={dirty:w,ctx:s}),Ct.$set(Ve);const xr={};w&2&&(xr.$$scope={dirty:w,ctx:s}),St.$set(xr);const ze={};w&2&&(ze.$$scope={dirty:w,ctx:s}),Mt.$set(ze);const Dr={};w&2&&(Dr.$$scope={dirty:w,ctx:s}),Ut.$set(Dr);const $t={};w&2&&($t.$$scope={dirty:w,ctx:s}),zt.$set($t);const Hr={};w&2&&(Hr.$$scope={dirty:w,ctx:s}),Wt.$set(Hr);const me={};w&2&&(me.$$scope={dirty:w,ctx:s}),Kt.$set(me);const qr={};w&2&&(qr.$$scope={dirty:w,ctx:s}),Jt.$set(qr);const tn={};w&2&&(tn.$$scope={dirty:w,ctx:s}),Qt.$set(tn);const jr={};w&2&&(jr.$$scope={dirty:w,ctx:s}),Xt.$set(jr);const on={};w&2&&(on.$$scope={dirty:w,ctx:s}),Yt.$set(on);const Ir={};w&2&&(Ir.$$scope={dirty:w,ctx:s}),Zt.$set(Ir);const xn={};w&2&&(xn.$$scope={dirty:w,ctx:s}),to.$set(xn);const Nr={};w&2&&(Nr.$$scope={dirty:w,ctx:s}),ao.$set(Nr);const _e={};w&2&&(_e.$$scope={dirty:w,ctx:s}),no.$set(_e);const an={};w&2&&(an.$$scope={dirty:w,ctx:s}),so.$set(an);const Fr={};w&2&&(Fr.$$scope={dirty:w,ctx:s}),ro.$set(Fr);const nn={};w&2&&(nn.$$scope={dirty:w,ctx:s}),io.$set(nn);const Tr={};w&2&&(Tr.$$scope={dirty:w,ctx:s}),lo.$set(Tr);const sn={};w&2&&(sn.$$scope={dirty:w,ctx:s}),co.$set(sn);const Pr={};w&2&&(Pr.$$scope={dirty:w,ctx:s}),uo.$set(Pr);const Dn={};w&2&&(Dn.$$scope={dirty:w,ctx:s}),yo.$set(Dn);const Or={};w&2&&(Or.$$scope={dirty:w,ctx:s}),Eo.$set(Or);const rn={};w&2&&(rn.$$scope={dirty:w,ctx:s}),ko.$set(rn);const Lr={};w&2&&(Lr.$$scope={dirty:w,ctx:s}),wo.$set(Lr)},i(s){oi||(F(l.$$.fragment,s),F(C.$$.fragment,s),F(X.$$.fragment,s),F(ke.$$.fragment,s),F(Le.$$.fragment,s),F(yt.$$.fragment,s),F(Et.$$.fragment,s),F(Po.$$.fragment,s),F(kt.$$.fragment,s),F(wt.$$.fragment,s),F(Oo.$$.fragment,s),F(At.$$.fragment,s),F(Lo.$$.fragment,s),F(xt.$$.fragment,s),F(So.$$.fragment,s),F(Dt.$$.fragment,s),F(zo.$$.fragment,s),F(Wo.$$.fragment,s),F(qt.$$.fragment,s),F(Go.$$.fragment,s),F(jt.$$.fragment,s),F(Bo.$$.fragment,s),F(It.$$.fragment,s),F(Ko.$$.fragment,s),F(Nt.$$.fragment,s),F(Jo.$$.fragment,s),F(Qo.$$.fragment,s),F(Tt.$$.fragment,s),F(Xo.$$.fragment,s),F(Yo.$$.fragment,s),F(Zo.$$.fragment,s),F(Lt.$$.fragment,s),F(Rt.$$.fragment,s),F(ea.$$.fragment,s),F(Ct.$$.fragment,s),F(St.$$.fragment,s),F(ta.$$.fragment,s),F(Mt.$$.fragment,s),F(Ut.$$.fragment,s),F(oa.$$.fragment,s),F(aa.$$.fragment,s),F(zt.$$.fragment,s),F(Wt.$$.fragment,s),F(sa.$$.fragment,s),F(ra.$$.fragment,s),F(ia.$$.fragment,s),F(Kt.$$.fragment,s),F(la.$$.fragment,s),F(Jt.$$.fragment,s),F(ca.$$.fragment,s),F(Qt.$$.fragment,s),F(da.$$.fragment,s),F(Xt.$$.fragment,s),F(Yt.$$.fragment,s),F(ha.$$.fragment,s),F(Zt.$$.fragment,s),F(ua.$$.fragment,s),F(fa.$$.fragment,s),F(to.$$.fragment,s),F(ma.$$.fragment,s),F(_a.$$.fragment,s),F(ao.$$.fragment,s),F(ba.$$.fragment,s),F(no.$$.fragment,s),F(so.$$.fragment,s),F(ro.$$.fragment,s),F(va.$$.fragment,s),F(io.$$.fragment,s),F(lo.$$.fragment,s),F(co.$$.fragment,s),F(Ea.$$.fragment,s),F(ka.$$.fragment,s),F(wa.$$.fragment,s),F(Aa.$$.fragment,s),F(xa.$$.fragment,s),F(Da.$$.fragment,s),F(Ha.$$.fragment,s),F(qa.$$.fragment,s),F(uo.$$.fragment,s),F(Fa.$$.fragment,s),F(Ta.$$.fragment,s),F(La.$$.fragment,s),F(Ra.$$.fragment,s),F(Sa.$$.fragment,s),F(Ma.$$.fragment,s),F(Ua.$$.fragment,s),F(za.$$.fragment,s),F(Wa.$$.fragment,s),F(Ga.$$.fragment,s),F(yo.$$.fragment,s),F(Ba.$$.fragment,s),F(Eo.$$.fragment,s),F(Ka.$$.fragment,s),F(ko.$$.fragment,s),F(Ja.$$.fragment,s),F(wo.$$.fragment,s),oi=!0)},o(s){T(l.$$.fragment,s),T(C.$$.fragment,s),T(X.$$.fragment,s),T(ke.$$.fragment,s),T(Le.$$.fragment,s),T(yt.$$.fragment,s),T(Et.$$.fragment,s),T(Po.$$.fragment,s),T(kt.$$.fragment,s),T(wt.$$.fragment,s),T(Oo.$$.fragment,s),T(At.$$.fragment,s),T(Lo.$$.fragment,s),T(xt.$$.fragment,s),T(So.$$.fragment,s),T(Dt.$$.fragment,s),T(zo.$$.fragment,s),T(Wo.$$.fragment,s),T(qt.$$.fragment,s),T(Go.$$.fragment,s),T(jt.$$.fragment,s),T(Bo.$$.fragment,s),T(It.$$.fragment,s),T(Ko.$$.fragment,s),T(Nt.$$.fragment,s),T(Jo.$$.fragment,s),T(Qo.$$.fragment,s),T(Tt.$$.fragment,s),T(Xo.$$.fragment,s),T(Yo.$$.fragment,s),T(Zo.$$.fragment,s),T(Lt.$$.fragment,s),T(Rt.$$.fragment,s),T(ea.$$.fragment,s),T(Ct.$$.fragment,s),T(St.$$.fragment,s),T(ta.$$.fragment,s),T(Mt.$$.fragment,s),T(Ut.$$.fragment,s),T(oa.$$.fragment,s),T(aa.$$.fragment,s),T(zt.$$.fragment,s),T(Wt.$$.fragment,s),T(sa.$$.fragment,s),T(ra.$$.fragment,s),T(ia.$$.fragment,s),T(Kt.$$.fragment,s),T(la.$$.fragment,s),T(Jt.$$.fragment,s),T(ca.$$.fragment,s),T(Qt.$$.fragment,s),T(da.$$.fragment,s),T(Xt.$$.fragment,s),T(Yt.$$.fragment,s),T(ha.$$.fragment,s),T(Zt.$$.fragment,s),T(ua.$$.fragment,s),T(fa.$$.fragment,s),T(to.$$.fragment,s),T(ma.$$.fragment,s),T(_a.$$.fragment,s),T(ao.$$.fragment,s),T(ba.$$.fragment,s),T(no.$$.fragment,s),T(so.$$.fragment,s),T(ro.$$.fragment,s),T(va.$$.fragment,s),T(io.$$.fragment,s),T(lo.$$.fragment,s),T(co.$$.fragment,s),T(Ea.$$.fragment,s),T(ka.$$.fragment,s),T(wa.$$.fragment,s),T(Aa.$$.fragment,s),T(xa.$$.fragment,s),T(Da.$$.fragment,s),T(Ha.$$.fragment,s),T(qa.$$.fragment,s),T(uo.$$.fragment,s),T(Fa.$$.fragment,s),T(Ta.$$.fragment,s),T(La.$$.fragment,s),T(Ra.$$.fragment,s),T(Sa.$$.fragment,s),T(Ma.$$.fragment,s),T(Ua.$$.fragment,s),T(za.$$.fragment,s),T(Wa.$$.fragment,s),T(Ga.$$.fragment,s),T(yo.$$.fragment,s),T(Ba.$$.fragment,s),T(Eo.$$.fragment,s),T(Ka.$$.fragment,s),T(ko.$$.fragment,s),T(Ja.$$.fragment,s),T(wo.$$.fragment,s),oi=!1},d(s){t(p),s&&t(_),s&&t(f),P(l),s&&t(x),s&&t(y),s&&t(L),s&&t(m),s&&t(K),s&&t(G),s&&t(M),P(C,s),s&&t(Y),s&&t(te),s&&t(B),P(X,s),s&&t(oe),s&&t(se),s&&t(Oe),s&&t(V),P(ke),P(Le),P(yt),P(Et),P(Po),P(kt),P(wt),P(Oo),P(At),P(Lo),P(xt),P(So),P(Dt),P(zo),P(Wo),P(qt),P(Go),P(jt),P(Bo),P(It),P(Ko),P(Nt),P(Jo),P(Qo),P(Tt),P(Xo),P(Yo),P(Zo),P(Lt),P(Rt),P(ea),P(Ct),P(St),P(ta),P(Mt),P(Ut),P(oa),P(aa),P(zt),P(Wt),P(sa),P(ra),P(ia),P(Kt),P(la),P(Jt),P(ca),P(Qt),P(da),P(Xt),P(Yt),P(ha),P(Zt),P(ua),P(fa),P(to),P(ma),P(_a),P(ao),P(ba),P(no),P(so),P(ro),P(va),P(io),P(lo),P(co),P(Ea),s&&t(Rr),s&&t(gt),P(ka),s&&t(Cr),s&&t(dt),P(wa),s&&t(Sr),s&&t(Re),P(Aa),s&&t(Mr),s&&t(ht),P(xa),s&&t(Ur),s&&t(ut),P(Da),s&&t(Vr),s&&t(ho),s&&t(zr),s&&t(fe),P(Ha),P(qa),P(uo),P(Fa),P(Ta),s&&t(Wr),s&&t(_t),P(La),s&&t(Gr),s&&t(bt),P(Ra),s&&t(Br),s&&t(Ca),s&&t(Kr),s&&t(mo),s&&t(Jr),s&&t(we),P(Sa),P(Ma),P(Ua),P(za),s&&t(Qr),s&&t(vt),P(Wa),s&&t(Xr),s&&t($o),s&&t(Yr),s&&t(Ce),P(Ga),P(yo),s&&t(Zr),s&&t(Se),P(Ba),P(Eo),s&&t(ei),s&&t(Me),P(Ka),P(ko),s&&t(ti),s&&t(Ue),P(Ja),P(wo)}}}const Pf={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Of(U){return Bu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vf extends Vu{constructor(p){super();zu(this,p,Of,Tf,Wu,{})}}export{Vf as default,Pf as metadata};
