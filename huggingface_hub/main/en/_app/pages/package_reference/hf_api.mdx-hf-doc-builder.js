import{S as hu,i as uu,s as fu,e as a,k as g,w as H,t as i,M as mu,c as n,d as t,m as d,a as s,x as q,h as l,b as $,G as e,g as y,y as j,q as I,o as N,B as F,v as _u,L as ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as yi}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bu(U){let p,b,f,c,h;return c=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function vu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function $u(U){let p,b,f,c,h;return c=new re({props:{code:`
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function yu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Eu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function wu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function ku(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),v=g(),A=a("li"),P=a("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var D=s(p);b=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=n(m,"UL",{});var z=s(c);h=n(z,"LI",{});var V=s(h);r=n(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),v=d(z),A=n(z,"LI",{});var G=s(A);P=n(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,b),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,v),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function Au(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G,E,S,C,Y,te,Z,J,ee,ae,B;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),E=g(),S=a("li"),C=a("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),Z=g(),J=a("li"),ee=a("a"),ae=i("EntryNotFoundError"),B=i(`
If the file to download cannot be found.`),this.h()},l(X){p=n(X,"P",{});var oe=s(p);b=l(oe,"Raises the following errors:"),oe.forEach(t),f=d(X),c=n(X,"UL",{});var ne=s(c);h=n(ne,"LI",{});var Ve=s(h);r=n(Ve,"A",{href:!0,rel:!0});var me=s(r);u=n(me,"CODE",{});var st=s(u);T=l(st,"HTTPError"),st.forEach(t),me.forEach(t),_=l(Ve,`
if the HuggingFace API returned an error`),Ve.forEach(t),x=d(ne),w=n(ne,"LI",{});var ze=s(w);v=n(ze,"A",{href:!0,rel:!0});var Te=s(v);A=n(Te,"CODE",{});var M=s(A);P=l(M,"ValueError"),M.forEach(t),Te.forEach(t),O=l(ze,`
if some parameter value is invalid`),ze.forEach(t),L=d(ne),m=n(ne,"LI",{});var $e=s(m);D=n($e,"A",{href:!0});var on=s(D);z=l(on,"RepositoryNotFoundError"),on.forEach(t),V=l($e,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n($e,"CODE",{});var de=s(R);K=l(de,"private"),de.forEach(t),G=l($e," and you do not have access."),$e.forEach(t),E=d(ne),S=n(ne,"LI",{});var Pe=s(S);C=n(Pe,"A",{href:!0});var an=s(C);Y=l(an,"RevisionNotFoundError"),an.forEach(t),te=l(Pe,`
If the revision to download from cannot be found.`),Pe.forEach(t),Z=d(ne),J=n(ne,"LI",{});var rt=s(J);ee=n(rt,"A",{href:!0});var nn=s(ee);ae=l(nn,"EntryNotFoundError"),nn.forEach(t),B=l(rt,`
If the file to download cannot be found.`),rt.forEach(t),ne.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(ee,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){y(X,p,oe),e(p,b),y(X,f,oe),y(X,c,oe),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G),e(c,E),e(c,S),e(S,C),e(C,Y),e(S,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function xu(U){let p,b,f,c,h,r,u,T,_,x,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l(v){p=n(v,"P",{});var A=s(p);b=l(A,"Raises the following errors:"),A.forEach(t),f=d(v),c=n(v,"UL",{});var P=s(c);h=n(P,"LI",{});var O=s(h);r=n(O,"A",{href:!0});var L=s(r);u=l(L,"RepositoryNotFoundError"),L.forEach(t),T=l(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(O,"CODE",{});var m=s(_);x=l(m,"private"),m.forEach(t),w=l(O," and you do not have access."),O.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(v,A){y(v,p,A),e(p,b),y(v,f,A),y(v,c,A),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function Du(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Hu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function qu(U){let p,b,f,c,h;return c=new re({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),b=i("Collecting all discussions of a repo in a list:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function ju(U){let p,b,f,c,h;return c=new re({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),b=i("Iterating over discussions of a repo:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Iterating over discussions of a repo:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Iu(U){let p;return{c(){p=i("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(b){p=l(b,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(b,f){y(b,p,f)},d(b){b&&t(p)}}}function Nu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Fu(U){let p,b,f,c,h,r,u,T;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("filter"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);b=l(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=l(w,"filter"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,b),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function Tu(U){let p,b,f,c,h,r,u,T;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("search"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);b=l(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=l(w,"search"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,b),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function Pu(U){let p,b,f,c,h,r,u,T;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("filter"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);b=l(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=l(w,"filter"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,b),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function Ou(U){let p,b,f,c,h,r,u,T;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("search"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);b=l(x,"Example usage with the "),f=n(x,"CODE",{});var w=s(f);c=l(w,"search"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,b),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function Lu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Ru(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),v=g(),A=a("li"),P=a("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var D=s(p);b=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=n(m,"UL",{});var z=s(c);h=n(z,"LI",{});var V=s(h);r=n(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),v=d(z),A=n(z,"LI",{});var G=s(A);P=n(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,b),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,v),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function Cu(U){let p,b,f,c,h,r,u,T,_,x,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l(v){p=n(v,"P",{});var A=s(p);b=l(A,"Raises the following errors:"),A.forEach(t),f=d(v),c=n(v,"UL",{});var P=s(c);h=n(P,"LI",{});var O=s(h);r=n(O,"A",{href:!0});var L=s(r);u=l(L,"RepositoryNotFoundError"),L.forEach(t),T=l(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(O,"CODE",{});var m=s(_);x=l(m,"private"),m.forEach(t),w=l(O," and you do not have access."),O.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(v,A){y(v,p,A),e(p,b),y(v,f,A),y(v,c,A),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function Su(U){let p,b,f,c,h;return c=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Mu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var S=s(p);b=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=n(E,"UL",{});var C=s(c);h=n(C,"LI",{});var Y=s(h);r=n(Y,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=n(C,"LI",{});var J=s(w);v=n(J,"A",{href:!0,rel:!0});var ee=s(v);A=n(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=n(C,"LI",{});var B=s(m);D=n(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,b),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Uu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),v=g(),A=a("li"),P=a("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var D=s(p);b=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=n(m,"UL",{});var z=s(c);h=n(z,"LI",{});var V=s(h);r=n(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),v=d(z),A=n(z,"LI",{});var G=s(A);P=n(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,b),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,v),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function Vu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),v=g(),A=a("li"),P=a("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var D=s(p);b=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=n(m,"UL",{});var z=s(c);h=n(z,"LI",{});var V=s(h);r=n(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),v=d(z),A=n(z,"LI",{});var G=s(A);P=n(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,b),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,v),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function zu(U){let p,b,f,c,h,r,u,T,_,x,w;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l(v){p=n(v,"P",{});var A=s(p);b=l(A,"Raises the following errors:"),A.forEach(t),f=d(v),c=n(v,"UL",{});var P=s(c);h=n(P,"LI",{});var O=s(h);r=n(O,"A",{href:!0});var L=s(r);u=l(L,"RepositoryNotFoundError"),L.forEach(t),T=l(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(O,"CODE",{});var m=s(_);x=l(m,"private"),m.forEach(t),w=l(O," and you do not have access."),O.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(v,A){y(v,p,A),e(p,b),y(v,f,A),y(v,c,A),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function Wu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G,E,S,C,Y,te;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=a("li"),D=a("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=i("private"),G=i(" and you do not have access."),E=g(),S=a("li"),C=a("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=n(Z,"P",{});var J=s(p);b=l(J,"Raises the following errors:"),J.forEach(t),f=d(Z),c=n(Z,"UL",{});var ee=s(c);h=n(ee,"LI",{});var ae=s(h);r=n(ae,"A",{href:!0,rel:!0});var B=s(r);u=n(B,"CODE",{});var X=s(u);T=l(X,"HTTPError"),X.forEach(t),B.forEach(t),_=l(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=d(ee),w=n(ee,"LI",{});var oe=s(w);v=n(oe,"A",{href:!0,rel:!0});var ne=s(v);A=n(ne,"CODE",{});var Ve=s(A);P=l(Ve,"ValueError"),Ve.forEach(t),ne.forEach(t),O=l(oe,`
if some parameter value is invalid`),oe.forEach(t),L=d(ee),m=n(ee,"LI",{});var me=s(m);D=n(me,"A",{href:!0});var st=s(D);z=l(st,"RepositoryNotFoundError"),st.forEach(t),V=l(me,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(me,"CODE",{});var ze=s(R);K=l(ze,"private"),ze.forEach(t),G=l(me," and you do not have access."),me.forEach(t),E=d(ee),S=n(ee,"LI",{});var Te=s(S);C=n(Te,"A",{href:!0});var M=s(C);Y=l(M,"RevisionNotFoundError"),M.forEach(t),te=l(Te,`
If the revision to download from cannot be found.`),Te.forEach(t),ee.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow"),$(D,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){y(Z,p,J),e(p,b),y(Z,f,J),y(Z,c,J),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G),e(c,E),e(c,S),e(S,C),e(C,Y),e(S,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function Gu(U){let p,b,f,c,h;return c=new re({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=i("Example usage:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Example usage:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Bu(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),h=a("li"),r=a("a"),u=a("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=a("li"),v=a("a"),A=a("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),this.h()},l(L){p=n(L,"P",{});var m=s(p);b=l(m,"Raises the following errors:"),m.forEach(t),f=d(L),c=n(L,"UL",{});var D=s(c);h=n(D,"LI",{});var z=s(h);r=n(z,"A",{href:!0,rel:!0});var V=s(r);u=n(V,"CODE",{});var R=s(u);T=l(R,"HTTPError"),R.forEach(t),V.forEach(t),_=l(z,`
if the HuggingFace API returned an error`),z.forEach(t),x=d(D),w=n(D,"LI",{});var K=s(w);v=n(K,"A",{href:!0,rel:!0});var G=s(v);A=n(G,"CODE",{});var E=s(A);P=l(E,"ValueError"),E.forEach(t),G.forEach(t),O=l(K,`
if some parameter value is invalid`),K.forEach(t),D.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(v,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(v,"rel","nofollow")},m(L,m){y(L,p,m),e(p,b),y(L,f,m),y(L,c,m),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,v),e(v,A),e(A,P),e(w,O)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function Ku(U){let p,b,f,c,h;return c=new re({props:{code:`upload_folder(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
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
`}}),{c(){p=a("p"),b=i("Example usage:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Example usage:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Ju(U){let p,b,f,c,h;return c=new re({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Example:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Qu(U){let p,b,f,c,h;return c=new re({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Xu(U){let p,b;return p=new re({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){H(p.$$.fragment)},l(f){q(p.$$.fragment,f)},m(f,c){j(p,f,c),b=!0},p:ge,i(f){b||(I(p.$$.fragment,f),b=!0)},o(f){N(p.$$.fragment,f),b=!1},d(f){F(p,f)}}}function Yu(U){let p,b,f,c,h;return c=new re({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Example:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Zu(U){let p,b,f,c,h;return c=new re({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),H(c.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);b=l(u,"Example:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,b),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function ef(U){let p,b,f,c,h,r,u,T,_,x,w,v,A,P,O,L,m,D,z,V,R,K,G,E,S,C,Y,te,Z,J,ee,ae,B,X,oe,ne,Ve,me,st,ze,Te,M,$e,on,de,Pe,an,rt,nn,Ei,mt,wi,_t,ki,Ee,qo,Ai,On,xi,Di,bt,Hi,vt,qi,$t,jo,ji,Ln,Ii,Ni,ie,Io,Fi,Rn,Ti,Pi,No,Oi,Cn,Li,Ri,Ci,Fo,Si,sn,Mi,Ui,Vi,rn,zi,ln,Wi,Gi,yt,Bi,le,To,Ki,Po,Ji,Sn,Qi,Xi,Yi,Oo,Zi,cn,el,tl,ol,Lo,al,Mn,nl,sl,rl,pn,il,gn,ll,cl,Et,pl,wt,Ro,gl,Un,dl,hl,we,Co,ul,Vn,fl,ml,zn,_l,bl,kt,vl,We,So,$l,Wn,yl,El,At,wl,Ge,Mo,kl,Gn,Al,xl,xt,Dl,Be,Uo,Hl,Bn,ql,jl,Dt,Il,Ht,Vo,Nl,Kn,Fl,Tl,ke,zo,Pl,Jn,Ol,Ll,dn,Rl,hn,Cl,Sl,qt,Ml,jt,Wo,Ul,Qn,Vl,zl,It,Go,Wl,Xn,Gl,Bl,_e,Bo,Kl,Yn,Jl,Ql,Zn,Xl,Yl,Nt,Zl,Ft,ec,Ae,Ko,tc,es,oc,ac,Tt,nc,Pt,sc,xe,Jo,rc,ts,ic,lc,Ot,cc,Lt,pc,Rt,Qo,gc,os,dc,hc,be,Xo,uc,as,fc,mc,Yo,_c,un,bc,vc,$c,Ct,yc,St,Ec,Mt,Zo,wc,ns,kc,Ac,Ut,ea,xc,ss,Dc,Hc,Ke,ta,qc,rs,jc,Ic,Vt,Nc,De,oa,Fc,is,Tc,Pc,ls,Oc,Lc,zt,Rc,He,aa,Cc,cs,Sc,Mc,na,Uc,sa,Vc,zc,Wc,Wt,Gc,qe,ra,Bc,ps,Kc,Jc,Gt,Qc,Bt,Xc,Je,ia,Yc,gs,Zc,ep,Kt,tp,Jt,la,op,ds,ap,np,je,ca,sp,hs,rp,ip,us,lp,cp,Qt,pp,Xt,pa,gp,fs,dp,hp,Qe,ga,up,ms,fp,mp,Yt,_p,Ie,da,bp,_s,vp,$p,Zt,yp,eo,Ep,ce,ha,wp,bs,kp,Ap,vs,xp,Dp,ua,Hp,$s,qp,jp,Ip,to,Np,oo,Fp,ao,fa,Tp,ys,Pp,Ar,it,ma,Op,Es,Lp,xr,lt,_a,Rp,ws,Cp,Dr,Oe,ba,Sp,ks,Mp,Up,As,Vp,Hr,ct,va,zp,xs,Wp,qr,pt,no,Ds,$a,Gp,fn,Hs,Bp,Kp,jr,so,Jp,qs,Qp,Xp,Ir,he,ya,Yp,js,Zp,eg,ve,Ea,tg,wa,og,Is,ag,ng,sg,ka,rg,Ns,ig,lg,cg,Aa,pg,Fs,gg,dg,hg,ro,ug,Xe,xa,fg,mn,mg,Ts,_g,bg,_n,vg,Ps,$g,yg,Ne,Da,Eg,Ha,wg,Os,kg,Ag,xg,gt,Ye,Dg,Ls,Hg,qg,Rs,jg,Ig,Cs,Ng,Fg,qa,Tg,Ss,Pg,Og,Lg,Ze,Rg,Ms,Cg,Sg,Us,Mg,Ug,Vs,Vg,zg,dt,Wg,zs,Gg,Bg,Ws,Kg,Jg,Nr,ht,ja,Qg,Gs,Xg,Fr,ut,io,Bs,Ia,Yg,Ks,Zg,Tr,Na,Js,ed,td,Pr,lo,od,bn,ad,nd,Or,ye,Fa,sd,co,Ta,rd,Qs,id,ld,et,Pa,cd,Xs,pd,gd,Oa,dd,Ys,hd,ud,fd,po,La,md,Zs,_d,Lr,ft,go,er,Ra,bd,tr,vd,Rr,ho,$d,or,yd,Ed,Cr,Le,Ca,wd,ar,kd,Ad,uo,Sr,Re,Sa,xd,nr,Dd,Hd,fo,Mr,Ce,Ma,qd,sr,jd,Id,mo,Ur,Se,Ua,Nd,rr,Fd,Td,_o,Vr;return r=new yi({}),C=new re({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new re({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),$e=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L603"}}),Pe=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2965",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),mt=new pe({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[bu]},$$scope:{ctx:U}}}),_t=new se({props:{$$slots:{default:[vu]},$$scope:{ctx:U}}}),qo=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2824",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),bt=new pe({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[$u]},$$scope:{ctx:U}}}),vt=new se({props:{$$slots:{default:[yu]},$$scope:{ctx:U}}}),jo=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
The repository in which the commit will be created, for example:
<em>&#x201C;username/custom_transformers&#x201D;</em>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<em>Iterable</em> of [<em>~huggingface_hub.hf_api.CommitOperation</em>]) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li>[<em>~huggingface_hub.hf_api.CommitOperationAdd</em>] to upload a file</li>
<li>[<em>~huggingface_hub.hf_api.CommitOperationDelete</em>] to delete a file</li>
</ul>`,name:"operations"},{anchor:"huggingface_hub.HfApi.create_commit.commit_message",description:`<strong>commit_message</strong> (<em>str</em>) &#x2014;
The summary (first line) of the commit that will be created.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.create_commit.commit_description",description:`<strong>commit_description</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The description of the commit that will be created`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.create_commit.token",description:`<strong>token</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Authentication token, obtained with <em>HfApi.login</em> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_commit.repo_type",description:`<strong>repo_type</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Set to <em>&#x201C;dataset&#x201D;</em> or <em>&#x201C;space&#x201D;</em> if uploading to a dataset or
space, <em>None</em> or <em>&#x201C;model&#x201D;</em> if uploading to a model. Default is
<em>None</em>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_commit.revision",description:`<strong>revision</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<em>&#x201C;main&#x201D;</em> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_commit.create_pr",description:`<strong>create_pr</strong> (<em>boolean</em>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <em>revision</em> with that commit.
Defaults to <em>False</em>. If set to <em>True</em>, this function will return the URL
to the newly created Pull Request on the Hub.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.create_commit.num_threads",description:`<strong>num_threads</strong> (<em>int</em>, <em>optional</em>) &#x2014;
Number of concurrent threads for uploading files. Defaults to 5.
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"},{anchor:"huggingface_hub.HfApi.create_commit.parent_commit",description:`<strong>parent_commit</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string.
Shorthands (7 first characters) are also supported.If specified and <em>create_pr</em> is <em>False</em>,
the commit will fail if <em>revision</em> does not point to <em>parent_commit</em>. If specified and <em>create_pr</em>
is <em>True</em>, the pull request will be created from <em>parent_commit</em>. Specifying <em>parent_commit</em>
ensures the repo has not changed before committing the changes, and can be especially useful
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1896",returnDescription:`
<p>If <em>create_pr</em> is <em>True</em>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <em>None</em>.</p>
`,returnType:`
<p><em>str</em> or <em>None</em></p>
`}}),Io=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2649"}}),yt=new se({props:{$$slots:{default:[Eu]},$$scope:{ctx:U}}}),To=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2737"}}),Et=new se({props:{$$slots:{default:[wu]},$$scope:{ctx:U}}}),Ro=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1522",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Co=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.dataset_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1282",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a></p>
`}}),kt=new se({props:{$$slots:{default:[ku]},$$scope:{ctx:U}}}),So=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2360"}}),At=new se({props:{$$slots:{default:[Au]},$$scope:{ctx:U}}}),Mo=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1652"}}),xt=new se({props:{$$slots:{default:[xu]},$$scope:{ctx:U}}}),Uo=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Dt=new se({props:{$$slots:{default:[Du]},$$scope:{ctx:U}}}),Vo=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L724"}}),zo=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2560"}}),qt=new se({props:{$$slots:{default:[Hu]},$$scope:{ctx:U}}}),Wo=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2447",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Go=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L716"}}),Bo=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2481",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Nt=new pe({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[qu]},$$scope:{ctx:U}}}),Ft=new pe({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[ju]},$$scope:{ctx:U}}}),Ko=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3147",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Tt=new se({props:{warning:!0,$$slots:{default:[Iu]},$$scope:{ctx:U}}}),Pt=new se({props:{$$slots:{default:[Nu]},$$scope:{ctx:U}}}),Jo=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L944"}}),Ot=new pe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Fu]},$$scope:{ctx:U}}}),Lt=new pe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Tu]},$$scope:{ctx:U}}}),Qo=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1109",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Xo=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L734"}}),Ct=new pe({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Pu]},$$scope:{ctx:U}}}),St=new pe({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Ou]},$$scope:{ctx:U}}}),Zo=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1482",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),ea=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1123",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),ta=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3039",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Vt=new se({props:{$$slots:{default:[Lu]},$$scope:{ctx:U}}}),oa=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1208",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),zt=new se({props:{$$slots:{default:[Ru]},$$scope:{ctx:U}}}),aa=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1818"}}),Wt=new se({props:{$$slots:{default:[Cu]},$$scope:{ctx:U}}}),ra=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2899",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Gt=new pe({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[Su]},$$scope:{ctx:U}}}),Bt=new se({props:{$$slots:{default:[Mu]},$$scope:{ctx:U}}}),ia=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1410",returnDescription:`
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
`}}),Kt=new se({props:{$$slots:{default:[Uu]},$$scope:{ctx:U}}}),la=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L697"}}),ca=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1346",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a></p>
`}}),Qt=new se({props:{$$slots:{default:[Vu]},$$scope:{ctx:U}}}),pa=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L709"}}),ga=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1743",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Yt=new se({props:{$$slots:{default:[zu]},$$scope:{ctx:U}}}),da=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2051",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Zt=new se({props:{$$slots:{default:[Wu]},$$scope:{ctx:U}}}),eo=new pe({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Gu]},$$scope:{ctx:U}}}),ha=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository to which the file will be uploaded, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_folder.folder_path",description:`<strong>folder_path</strong> (<code>str</code>) &#x2014;
Path to the folder to upload on the local file system`,name:"folder_path"},{anchor:"huggingface_hub.HfApi.upload_folder.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative path of the directory in the repo, for example:
<code>&quot;checkpoints/1fec34a/results&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.upload_folder.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2207",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),to=new se({props:{$$slots:{default:[Bu]},$$scope:{ctx:U}}}),oo=new pe({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Ku]},$$scope:{ctx:U}}}),fa=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L607"}}),ma=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L224"}}),_a=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of dataset repository.`,name:"id"},{anchor:"huggingface_hub.hf_api.DatasetInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.DatasetInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.DatasetInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.DatasetInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a> objects that constitute the dataset.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.DatasetInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.DatasetInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.DatasetInfo.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Description of the dataset`,name:"description"},{anchor:"huggingface_hub.hf_api.DatasetInfo.citation",description:`<strong>citation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dataset citation`,name:"citation"},{anchor:"huggingface_hub.hf_api.DatasetInfo.cardData",description:`<strong>cardData</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Metadata of the model card as a dictionary.`,name:"cardData"},{anchor:"huggingface_hub.hf_api.DatasetInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L292"}}),ba=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L366"}}),va=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L178"}}),$a=new yi({}),ya=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L51"}}),Ea=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L123"}}),ro=new pe({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[Ju]},$$scope:{ctx:U}}}),xa=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L158"}}),Da=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L73"}}),ja=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/_commit_api.py#L36"}}),Ia=new yi({}),Fa=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3209"}}),Ta=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3246"}}),Pa=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3225",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),La=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3212"}}),Ra=new yi({}),Ca=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),uo=new pe({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Qu]},$$scope:{ctx:U}}}),Sa=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),fo=new pe({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Xu]},$$scope:{ctx:U}}}),Ma=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L491"}}),mo=new pe({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Yu]},$$scope:{ctx:U}}}),Ua=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L453"}}),_o=new pe({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Zu]},$$scope:{ctx:U}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),h=a("span"),H(r.$$.fragment),u=g(),T=a("span"),_=i("Hugging Face Hub API"),x=g(),w=a("p"),v=i("Below is the documentation for the "),A=a("code"),P=i("HfApi"),O=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),m=a("p"),D=i("All methods from the "),z=a("code"),V=i("HfApi"),R=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),E=i("The following approach uses the method from the root of the package:"),S=g(),H(C.$$.fragment),Y=g(),te=a("p"),Z=i("The following approach uses the "),J=a("code"),ee=i("HfApi"),ae=i(" class:"),B=g(),H(X.$$.fragment),oe=g(),ne=a("p"),Ve=i("Using the "),me=a("code"),st=i("HfApi"),ze=i(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Te=g(),M=a("div"),H($e.$$.fragment),on=g(),de=a("div"),H(Pe.$$.fragment),an=g(),rt=a("p"),nn=i("Closes or re-opens a Discussion or Pull Request."),Ei=g(),H(mt.$$.fragment),wi=g(),H(_t.$$.fragment),ki=g(),Ee=a("div"),H(qo.$$.fragment),Ai=g(),On=a("p"),xi=i("Creates a new comment on the given Discussion."),Di=g(),H(bt.$$.fragment),Hi=g(),H(vt.$$.fragment),qi=g(),$t=a("div"),H(jo.$$.fragment),ji=g(),Ln=a("p"),Ii=i("Creates a commit in the given repo, deleting & uploading files as needed."),Ni=g(),ie=a("div"),H(Io.$$.fragment),Fi=g(),Rn=a("p"),Ti=i("Creates a Discussion or Pull Request."),Pi=g(),No=a("p"),Oi=i("Pull Requests created programmatically will be in "),Cn=a("code"),Li=i('"draft"'),Ri=i(" status."),Ci=g(),Fo=a("p"),Si=i("Creating a Pull Request with changes can also be done at once with "),sn=a("a"),Mi=i("HfApi.create_commit()"),Ui=i("."),Vi=g(),rn=a("p"),zi=i("Returns: "),ln=a("a"),Wi=i("DiscussionWithDetails"),Gi=g(),H(yt.$$.fragment),Bi=g(),le=a("div"),H(To.$$.fragment),Ki=g(),Po=a("p"),Ji=i("Creates a Pull Request . Pull Requests created programmatically will be in "),Sn=a("code"),Qi=i('"draft"'),Xi=i(" status."),Yi=g(),Oo=a("p"),Zi=i("Creating a Pull Request with changes can also be done at once with "),cn=a("a"),el=i("HfApi.create_commit()"),tl=i(";"),ol=g(),Lo=a("p"),al=i("This is a wrapper around "),Mn=a("code"),nl=i("HfApi.create_discusssion"),sl=i("."),rl=g(),pn=a("p"),il=i("Returns: "),gn=a("a"),ll=i("DiscussionWithDetails"),cl=g(),H(Et.$$.fragment),pl=g(),wt=a("div"),H(Ro.$$.fragment),gl=g(),Un=a("p"),dl=i("Create an empty repo on the HuggingFace Hub."),hl=g(),we=a("div"),H(Co.$$.fragment),ul=g(),Vn=a("p"),fl=i("Get info on one specific dataset on huggingface.co."),ml=g(),zn=a("p"),_l=i("Dataset can be private if you pass an acceptable token."),bl=g(),H(kt.$$.fragment),vl=g(),We=a("div"),H(So.$$.fragment),$l=g(),Wn=a("p"),yl=i("Deletes a file in the given repo."),El=g(),H(At.$$.fragment),wl=g(),Ge=a("div"),H(Mo.$$.fragment),kl=g(),Gn=a("p"),Al=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),xl=g(),H(xt.$$.fragment),Dl=g(),Be=a("div"),H(Uo.$$.fragment),Hl=g(),Bn=a("p"),ql=i("Edits a comment on a Discussion / Pull Request."),jl=g(),H(Dt.$$.fragment),Il=g(),Ht=a("div"),H(Vo.$$.fragment),Nl=g(),Kn=a("p"),Fl=i("Gets all valid dataset tags as a nested namespace object."),Tl=g(),ke=a("div"),H(zo.$$.fragment),Pl=g(),Jn=a("p"),Ol=i("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Ll=g(),dn=a("p"),Rl=i("Returns: "),hn=a("a"),Cl=i("DiscussionWithDetails"),Sl=g(),H(qt.$$.fragment),Ml=g(),jt=a("div"),H(Wo.$$.fragment),Ul=g(),Qn=a("p"),Vl=i(`Returns the repository name for a given model ID and optional
organization.`),zl=g(),It=a("div"),H(Go.$$.fragment),Wl=g(),Xn=a("p"),Gl=i("Gets all valid model tags as a nested namespace object"),Bl=g(),_e=a("div"),H(Bo.$$.fragment),Kl=g(),Yn=a("p"),Jl=i("Fetches Discussions and Pull Requests for the given repo."),Ql=g(),Zn=a("p"),Xl=i("Example:"),Yl=g(),H(Nt.$$.fragment),Zl=g(),H(Ft.$$.fragment),ec=g(),Ae=a("div"),H(Ko.$$.fragment),tc=g(),es=a("p"),oc=i("Hides a comment on a Discussion / Pull Request."),ac=g(),H(Tt.$$.fragment),nc=g(),H(Pt.$$.fragment),sc=g(),xe=a("div"),H(Jo.$$.fragment),rc=g(),ts=a("p"),ic=i("Get the public list of all the datasets on huggingface.co"),lc=g(),H(Ot.$$.fragment),cc=g(),H(Lt.$$.fragment),pc=g(),Rt=a("div"),H(Qo.$$.fragment),gc=g(),os=a("p"),dc=i("Get the public list of all the metrics on huggingface.co"),hc=g(),be=a("div"),H(Xo.$$.fragment),uc=g(),as=a("p"),fc=i("Get the public list of all the models on huggingface.co"),mc=g(),Yo=a("p"),_c=i("Returns: List of "),un=a("a"),bc=i("huggingface_hub.hf_api.ModelInfo"),vc=i(" objects"),$c=g(),H(Ct.$$.fragment),yc=g(),H(St.$$.fragment),Ec=g(),Mt=a("div"),H(Zo.$$.fragment),wc=g(),ns=a("p"),kc=i("Get the list of files in a given repo."),Ac=g(),Ut=a("div"),H(ea.$$.fragment),xc=g(),ss=a("p"),Dc=i("Get the public list of all Spaces on huggingface.co"),Hc=g(),Ke=a("div"),H(ta.$$.fragment),qc=g(),rs=a("p"),jc=i("Merges a Pull Request."),Ic=g(),H(Vt.$$.fragment),Nc=g(),De=a("div"),H(oa.$$.fragment),Fc=g(),is=a("p"),Tc=i("Get info on one specific model on huggingface.co"),Pc=g(),ls=a("p"),Oc=i("Model can be private if you pass an acceptable token or are logged in."),Lc=g(),H(zt.$$.fragment),Rc=g(),He=a("div"),H(aa.$$.fragment),Cc=g(),cs=a("p"),Sc=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Mc=g(),na=a("p"),Uc=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),sa=a("a"),Vc=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),zc=i("."),Wc=g(),H(Wt.$$.fragment),Gc=g(),qe=a("div"),H(ra.$$.fragment),Bc=g(),ps=a("p"),Kc=i("Renames a Discussion."),Jc=g(),H(Gt.$$.fragment),Qc=g(),H(Bt.$$.fragment),Xc=g(),Je=a("div"),H(ia.$$.fragment),Yc=g(),gs=a("p"),Zc=i("Get the info object for a given repo of a given type."),ep=g(),H(Kt.$$.fragment),tp=g(),Jt=a("div"),H(la.$$.fragment),op=g(),ds=a("p"),ap=i(`Saves the passed access token so git can correctly authenticate the
user.`),np=g(),je=a("div"),H(ca.$$.fragment),sp=g(),hs=a("p"),rp=i("Get info on one specific Space on huggingface.co."),ip=g(),us=a("p"),lp=i("Space can be private if you pass an acceptable token."),cp=g(),H(Qt.$$.fragment),pp=g(),Xt=a("div"),H(pa.$$.fragment),gp=g(),fs=a("p"),dp=i("Resets the user\u2019s access token."),hp=g(),Qe=a("div"),H(ga.$$.fragment),up=g(),ms=a("p"),fp=i("Update the visibility setting of a repository."),mp=g(),H(Yt.$$.fragment),_p=g(),Ie=a("div"),H(da.$$.fragment),bp=g(),_s=a("p"),vp=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),$p=g(),H(Zt.$$.fragment),yp=g(),H(eo.$$.fragment),Ep=g(),ce=a("div"),H(ha.$$.fragment),wp=g(),bs=a("p"),kp=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ap=g(),vs=a("p"),xp=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Dp=g(),ua=a("p"),Hp=i("Uses "),$s=a("code"),qp=i("HfApi.create_commit"),jp=i(" under the hood."),Ip=g(),H(to.$$.fragment),Np=g(),H(oo.$$.fragment),Fp=g(),ao=a("div"),H(fa.$$.fragment),Tp=g(),ys=a("p"),Pp=i("Call HF API to know \u201Cwhoami\u201D."),Ar=g(),it=a("div"),H(ma.$$.fragment),Op=g(),Es=a("p"),Lp=i("Info about a model accessible from huggingface.co"),xr=g(),lt=a("div"),H(_a.$$.fragment),Rp=g(),ws=a("p"),Cp=i("Info about a dataset accessible from huggingface.co"),Dr=g(),Oe=a("div"),H(ba.$$.fragment),Sp=g(),ks=a("p"),Mp=i("Info about a Space accessible from huggingface.co"),Up=g(),As=a("p"),Vp=i(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Hr=g(),ct=a("div"),H(va.$$.fragment),zp=g(),xs=a("p"),Wp=i(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),qr=g(),pt=a("h2"),no=a("a"),Ds=a("span"),H($a.$$.fragment),Gp=g(),fn=a("span"),Hs=a("code"),Bp=i("create_commit"),Kp=i(" API"),jr=g(),so=a("p"),Jp=i("Below are the supported values for "),qs=a("code"),Qp=i("CommitOperation()"),Xp=i(":"),Ir=g(),he=a("div"),H(ya.$$.fragment),Yp=g(),js=a("p"),Zp=i(`Data structure holding necessary info to upload a file
to a repository on the Hub`),eg=g(),ve=a("div"),H(Ea.$$.fragment),tg=g(),wa=a("p"),og=i(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Is=a("code"),ag=i("path_or_fileobj"),ng=i("."),sg=g(),ka=a("p"),rg=i("Triggers "),Ns=a("code"),ig=i("self.validate"),lg=i("."),cg=g(),Aa=a("p"),pg=i("Raises: "),Fs=a("code"),gg=i("ValueError"),dg=i(" if self.validate fails"),hg=g(),H(ro.$$.fragment),ug=g(),Xe=a("div"),H(xa.$$.fragment),fg=g(),mn=a("p"),mg=i("The base64-encoded content of "),Ts=a("code"),_g=i("path_or_fileobj"),bg=g(),_n=a("p"),vg=i("Returns: "),Ps=a("code"),$g=i("bytes"),yg=g(),Ne=a("div"),H(Da.$$.fragment),Eg=g(),Ha=a("p"),wg=i("Ensures "),Os=a("code"),kg=i("path_or_fileobj"),Ag=i(" is valid:"),xg=g(),gt=a("ul"),Ye=a("li"),Dg=i("Ensures it is either a "),Ls=a("code"),Hg=i("str"),qg=i(", "),Rs=a("code"),jg=i("bytes"),Ig=i(" or an instance of "),Cs=a("code"),Ng=i("io.BufferedIOBase"),Fg=g(),qa=a("li"),Tg=i("If it is a "),Ss=a("code"),Pg=i("str"),Og=i(", ensure that it is a file path and that the file exists"),Lg=g(),Ze=a("li"),Rg=i("If it is an instance of "),Ms=a("code"),Cg=i("io.BufferedIOBase"),Sg=i(", ensures it supports "),Us=a("code"),Mg=i("seek()"),Ug=i(" and "),Vs=a("code"),Vg=i("tell()"),zg=g(),dt=a("p"),Wg=i("Raises: "),zs=a("code"),Gg=i("ValueError"),Bg=i(" if "),Ws=a("code"),Kg=i("path_or_fileobj"),Jg=i(" is not valid"),Nr=g(),ht=a("div"),H(ja.$$.fragment),Qg=g(),Gs=a("p"),Xg=i(`Data structure holding necessary info to delete
a file from a repository on the Hub`),Fr=g(),ut=a("h2"),io=a("a"),Bs=a("span"),H(Ia.$$.fragment),Yg=g(),Ks=a("span"),Zg=i("Hugging Face local storage"),Tr=g(),Na=a("p"),Js=a("code"),ed=i("huggingface_hub"),td=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Pr=g(),lo=a("p"),od=i("It does this using the "),bn=a("a"),ad=i("HfFolder"),nd=i(" utility, which saves data at the root of the user."),Or=g(),ye=a("div"),H(Fa.$$.fragment),sd=g(),co=a("div"),H(Ta.$$.fragment),rd=g(),Qs=a("p"),id=i("Deletes the token from storage. Does not fail if token does not exist."),ld=g(),et=a("div"),H(Pa.$$.fragment),cd=g(),Xs=a("p"),pd=i("Get token or None if not existent."),gd=g(),Oa=a("p"),dd=i("Note that a token can be also provided using the "),Ys=a("code"),hd=i("HUGGING_FACE_HUB_TOKEN"),ud=i(`
environment variable.`),fd=g(),po=a("div"),H(La.$$.fragment),md=g(),Zs=a("p"),_d=i("Save token, creating folder as needed."),Lr=g(),ft=a("h2"),go=a("a"),er=a("span"),H(Ra.$$.fragment),bd=g(),tr=a("span"),vd=i("Filtering helpers"),Rr=g(),ho=a("p"),$d=i("Some helpers to filter repositories on the Hub are available in the "),or=a("code"),yd=i("huggingface_hub"),Ed=i(" package."),Cr=g(),Le=a("div"),H(Ca.$$.fragment),wd=g(),ar=a("p"),kd=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ad=g(),H(uo.$$.fragment),Sr=g(),Re=a("div"),H(Sa.$$.fragment),xd=g(),nr=a("p"),Dd=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Hd=g(),H(fo.$$.fragment),Mr=g(),Ce=a("div"),H(Ma.$$.fragment),qd=g(),sr=a("p"),jd=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Id=g(),H(mo.$$.fragment),Ur=g(),Se=a("div"),H(Ua.$$.fragment),Nd=g(),rr=a("p"),Fd=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Td=g(),H(_o.$$.fragment),this.h()},l(o){const k=mu('[data-svelte="svelte-1phssyn"]',document.head);p=n(k,"META",{name:!0,content:!0}),k.forEach(t),b=d(o),f=n(o,"H1",{class:!0});var Va=s(f);c=n(Va,"A",{id:!0,class:!0,href:!0});var ir=s(c);h=n(ir,"SPAN",{});var lr=s(h);q(r.$$.fragment,lr),lr.forEach(t),ir.forEach(t),u=d(Va),T=n(Va,"SPAN",{});var cr=s(T);_=l(cr,"Hugging Face Hub API"),cr.forEach(t),Va.forEach(t),x=d(o),w=n(o,"P",{});var za=s(w);v=l(za,"Below is the documentation for the "),A=n(za,"CODE",{});var pr=s(A);P=l(pr,"HfApi"),pr.forEach(t),O=l(za,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),za.forEach(t),L=d(o),m=n(o,"P",{});var Wa=s(m);D=l(Wa,"All methods from the "),z=n(Wa,"CODE",{});var gr=s(z);V=l(gr,"HfApi"),gr.forEach(t),R=l(Wa,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Wa.forEach(t),K=d(o),G=n(o,"P",{});var dr=s(G);E=l(dr,"The following approach uses the method from the root of the package:"),dr.forEach(t),S=d(o),q(C.$$.fragment,o),Y=d(o),te=n(o,"P",{});var Ga=s(te);Z=l(Ga,"The following approach uses the "),J=n(Ga,"CODE",{});var hr=s(J);ee=l(hr,"HfApi"),hr.forEach(t),ae=l(Ga," class:"),Ga.forEach(t),B=d(o),q(X.$$.fragment,o),oe=d(o),ne=n(o,"P",{});var Ba=s(ne);Ve=l(Ba,"Using the "),me=n(Ba,"CODE",{});var ur=s(me);st=l(ur,"HfApi"),ur.forEach(t),ze=l(Ba," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Ba.forEach(t),Te=d(o),M=n(o,"DIV",{class:!0});var W=s(M);q($e.$$.fragment,W),on=d(W),de=n(W,"DIV",{class:!0});var Me=s(de);q(Pe.$$.fragment,Me),an=d(Me),rt=n(Me,"P",{});var fr=s(rt);nn=l(fr,"Closes or re-opens a Discussion or Pull Request."),fr.forEach(t),Ei=d(Me),q(mt.$$.fragment,Me),wi=d(Me),q(_t.$$.fragment,Me),Me.forEach(t),ki=d(W),Ee=n(W,"DIV",{class:!0});var Ue=s(Ee);q(qo.$$.fragment,Ue),Ai=d(Ue),On=n(Ue,"P",{});var mr=s(On);xi=l(mr,"Creates a new comment on the given Discussion."),mr.forEach(t),Di=d(Ue),q(bt.$$.fragment,Ue),Hi=d(Ue),q(vt.$$.fragment,Ue),Ue.forEach(t),qi=d(W),$t=n(W,"DIV",{class:!0});var Ka=s($t);q(jo.$$.fragment,Ka),ji=d(Ka),Ln=n(Ka,"P",{});var _r=s(Ln);Ii=l(_r,"Creates a commit in the given repo, deleting & uploading files as needed."),_r.forEach(t),Ka.forEach(t),Ni=d(W),ie=n(W,"DIV",{class:!0});var ue=s(ie);q(Io.$$.fragment,ue),Fi=d(ue),Rn=n(ue,"P",{});var br=s(Rn);Ti=l(br,"Creates a Discussion or Pull Request."),br.forEach(t),Pi=d(ue),No=n(ue,"P",{});var Ja=s(No);Oi=l(Ja,"Pull Requests created programmatically will be in "),Cn=n(Ja,"CODE",{});var vr=s(Cn);Li=l(vr,'"draft"'),vr.forEach(t),Ri=l(Ja," status."),Ja.forEach(t),Ci=d(ue),Fo=n(ue,"P",{});var Qa=s(Fo);Si=l(Qa,"Creating a Pull Request with changes can also be done at once with "),sn=n(Qa,"A",{href:!0});var $r=s(sn);Mi=l($r,"HfApi.create_commit()"),$r.forEach(t),Ui=l(Qa,"."),Qa.forEach(t),Vi=d(ue),rn=n(ue,"P",{});var vn=s(rn);zi=l(vn,"Returns: "),ln=n(vn,"A",{href:!0});var yr=s(ln);Wi=l(yr,"DiscussionWithDetails"),yr.forEach(t),vn.forEach(t),Gi=d(ue),q(yt.$$.fragment,ue),ue.forEach(t),Bi=d(W),le=n(W,"DIV",{class:!0});var fe=s(le);q(To.$$.fragment,fe),Ki=d(fe),Po=n(fe,"P",{});var Xa=s(Po);Ji=l(Xa,"Creates a Pull Request . Pull Requests created programmatically will be in "),Sn=n(Xa,"CODE",{});var Er=s(Sn);Qi=l(Er,'"draft"'),Er.forEach(t),Xi=l(Xa," status."),Xa.forEach(t),Yi=d(fe),Oo=n(fe,"P",{});var Ya=s(Oo);Zi=l(Ya,"Creating a Pull Request with changes can also be done at once with "),cn=n(Ya,"A",{href:!0});var wr=s(cn);el=l(wr,"HfApi.create_commit()"),wr.forEach(t),tl=l(Ya,";"),Ya.forEach(t),ol=d(fe),Lo=n(fe,"P",{});var Za=s(Lo);al=l(Za,"This is a wrapper around "),Mn=n(Za,"CODE",{});var kr=s(Mn);nl=l(kr,"HfApi.create_discusssion"),kr.forEach(t),sl=l(Za,"."),Za.forEach(t),rl=d(fe),pn=n(fe,"P",{});var $n=s(pn);il=l($n,"Returns: "),gn=n($n,"A",{href:!0});var Sd=s(gn);ll=l(Sd,"DiscussionWithDetails"),Sd.forEach(t),$n.forEach(t),cl=d(fe),q(Et.$$.fragment,fe),fe.forEach(t),pl=d(W),wt=n(W,"DIV",{class:!0});var zr=s(wt);q(Ro.$$.fragment,zr),gl=d(zr),Un=n(zr,"P",{});var Md=s(Un);dl=l(Md,"Create an empty repo on the HuggingFace Hub."),Md.forEach(t),zr.forEach(t),hl=d(W),we=n(W,"DIV",{class:!0});var bo=s(we);q(Co.$$.fragment,bo),ul=d(bo),Vn=n(bo,"P",{});var Ud=s(Vn);fl=l(Ud,"Get info on one specific dataset on huggingface.co."),Ud.forEach(t),ml=d(bo),zn=n(bo,"P",{});var Vd=s(zn);_l=l(Vd,"Dataset can be private if you pass an acceptable token."),Vd.forEach(t),bl=d(bo),q(kt.$$.fragment,bo),bo.forEach(t),vl=d(W),We=n(W,"DIV",{class:!0});var yn=s(We);q(So.$$.fragment,yn),$l=d(yn),Wn=n(yn,"P",{});var zd=s(Wn);yl=l(zd,"Deletes a file in the given repo."),zd.forEach(t),El=d(yn),q(At.$$.fragment,yn),yn.forEach(t),wl=d(W),Ge=n(W,"DIV",{class:!0});var En=s(Ge);q(Mo.$$.fragment,En),kl=d(En),Gn=n(En,"P",{});var Wd=s(Gn);Al=l(Wd,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Wd.forEach(t),xl=d(En),q(xt.$$.fragment,En),En.forEach(t),Dl=d(W),Be=n(W,"DIV",{class:!0});var wn=s(Be);q(Uo.$$.fragment,wn),Hl=d(wn),Bn=n(wn,"P",{});var Gd=s(Bn);ql=l(Gd,"Edits a comment on a Discussion / Pull Request."),Gd.forEach(t),jl=d(wn),q(Dt.$$.fragment,wn),wn.forEach(t),Il=d(W),Ht=n(W,"DIV",{class:!0});var Wr=s(Ht);q(Vo.$$.fragment,Wr),Nl=d(Wr),Kn=n(Wr,"P",{});var Bd=s(Kn);Fl=l(Bd,"Gets all valid dataset tags as a nested namespace object."),Bd.forEach(t),Wr.forEach(t),Tl=d(W),ke=n(W,"DIV",{class:!0});var vo=s(ke);q(zo.$$.fragment,vo),Pl=d(vo),Jn=n(vo,"P",{});var Kd=s(Jn);Ol=l(Kd,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Kd.forEach(t),Ll=d(vo),dn=n(vo,"P",{});var Pd=s(dn);Rl=l(Pd,"Returns: "),hn=n(Pd,"A",{href:!0});var Jd=s(hn);Cl=l(Jd,"DiscussionWithDetails"),Jd.forEach(t),Pd.forEach(t),Sl=d(vo),q(qt.$$.fragment,vo),vo.forEach(t),Ml=d(W),jt=n(W,"DIV",{class:!0});var Gr=s(jt);q(Wo.$$.fragment,Gr),Ul=d(Gr),Qn=n(Gr,"P",{});var Qd=s(Qn);Vl=l(Qd,`Returns the repository name for a given model ID and optional
organization.`),Qd.forEach(t),Gr.forEach(t),zl=d(W),It=n(W,"DIV",{class:!0});var Br=s(It);q(Go.$$.fragment,Br),Wl=d(Br),Xn=n(Br,"P",{});var Xd=s(Xn);Gl=l(Xd,"Gets all valid model tags as a nested namespace object"),Xd.forEach(t),Br.forEach(t),Bl=d(W),_e=n(W,"DIV",{class:!0});var tt=s(_e);q(Bo.$$.fragment,tt),Kl=d(tt),Yn=n(tt,"P",{});var Yd=s(Yn);Jl=l(Yd,"Fetches Discussions and Pull Requests for the given repo."),Yd.forEach(t),Ql=d(tt),Zn=n(tt,"P",{});var Zd=s(Zn);Xl=l(Zd,"Example:"),Zd.forEach(t),Yl=d(tt),q(Nt.$$.fragment,tt),Zl=d(tt),q(Ft.$$.fragment,tt),tt.forEach(t),ec=d(W),Ae=n(W,"DIV",{class:!0});var $o=s(Ae);q(Ko.$$.fragment,$o),tc=d($o),es=n($o,"P",{});var eh=s(es);oc=l(eh,"Hides a comment on a Discussion / Pull Request."),eh.forEach(t),ac=d($o),q(Tt.$$.fragment,$o),nc=d($o),q(Pt.$$.fragment,$o),$o.forEach(t),sc=d(W),xe=n(W,"DIV",{class:!0});var yo=s(xe);q(Jo.$$.fragment,yo),rc=d(yo),ts=n(yo,"P",{});var th=s(ts);ic=l(th,"Get the public list of all the datasets on huggingface.co"),th.forEach(t),lc=d(yo),q(Ot.$$.fragment,yo),cc=d(yo),q(Lt.$$.fragment,yo),yo.forEach(t),pc=d(W),Rt=n(W,"DIV",{class:!0});var Kr=s(Rt);q(Qo.$$.fragment,Kr),gc=d(Kr),os=n(Kr,"P",{});var oh=s(os);dc=l(oh,"Get the public list of all the metrics on huggingface.co"),oh.forEach(t),Kr.forEach(t),hc=d(W),be=n(W,"DIV",{class:!0});var ot=s(be);q(Xo.$$.fragment,ot),uc=d(ot),as=n(ot,"P",{});var ah=s(as);fc=l(ah,"Get the public list of all the models on huggingface.co"),ah.forEach(t),mc=d(ot),Yo=n(ot,"P",{});var Jr=s(Yo);_c=l(Jr,"Returns: List of "),un=n(Jr,"A",{href:!0});var nh=s(un);bc=l(nh,"huggingface_hub.hf_api.ModelInfo"),nh.forEach(t),vc=l(Jr," objects"),Jr.forEach(t),$c=d(ot),q(Ct.$$.fragment,ot),yc=d(ot),q(St.$$.fragment,ot),ot.forEach(t),Ec=d(W),Mt=n(W,"DIV",{class:!0});var Qr=s(Mt);q(Zo.$$.fragment,Qr),wc=d(Qr),ns=n(Qr,"P",{});var sh=s(ns);kc=l(sh,"Get the list of files in a given repo."),sh.forEach(t),Qr.forEach(t),Ac=d(W),Ut=n(W,"DIV",{class:!0});var Xr=s(Ut);q(ea.$$.fragment,Xr),xc=d(Xr),ss=n(Xr,"P",{});var rh=s(ss);Dc=l(rh,"Get the public list of all Spaces on huggingface.co"),rh.forEach(t),Xr.forEach(t),Hc=d(W),Ke=n(W,"DIV",{class:!0});var kn=s(Ke);q(ta.$$.fragment,kn),qc=d(kn),rs=n(kn,"P",{});var ih=s(rs);jc=l(ih,"Merges a Pull Request."),ih.forEach(t),Ic=d(kn),q(Vt.$$.fragment,kn),kn.forEach(t),Nc=d(W),De=n(W,"DIV",{class:!0});var Eo=s(De);q(oa.$$.fragment,Eo),Fc=d(Eo),is=n(Eo,"P",{});var lh=s(is);Tc=l(lh,"Get info on one specific model on huggingface.co"),lh.forEach(t),Pc=d(Eo),ls=n(Eo,"P",{});var ch=s(ls);Oc=l(ch,"Model can be private if you pass an acceptable token or are logged in."),ch.forEach(t),Lc=d(Eo),q(zt.$$.fragment,Eo),Eo.forEach(t),Rc=d(W),He=n(W,"DIV",{class:!0});var wo=s(He);q(aa.$$.fragment,wo),Cc=d(wo),cs=n(wo,"P",{});var ph=s(cs);Sc=l(ph,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ph.forEach(t),Mc=d(wo),na=n(wo,"P",{});var Yr=s(na);Uc=l(Yr,`Note there are certain limitations. For more information about moving
repositories, please see
`),sa=n(Yr,"A",{href:!0,rel:!0});var gh=s(sa);Vc=l(gh,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),gh.forEach(t),zc=l(Yr,"."),Yr.forEach(t),Wc=d(wo),q(Wt.$$.fragment,wo),wo.forEach(t),Gc=d(W),qe=n(W,"DIV",{class:!0});var ko=s(qe);q(ra.$$.fragment,ko),Bc=d(ko),ps=n(ko,"P",{});var dh=s(ps);Kc=l(dh,"Renames a Discussion."),dh.forEach(t),Jc=d(ko),q(Gt.$$.fragment,ko),Qc=d(ko),q(Bt.$$.fragment,ko),ko.forEach(t),Xc=d(W),Je=n(W,"DIV",{class:!0});var An=s(Je);q(ia.$$.fragment,An),Yc=d(An),gs=n(An,"P",{});var hh=s(gs);Zc=l(hh,"Get the info object for a given repo of a given type."),hh.forEach(t),ep=d(An),q(Kt.$$.fragment,An),An.forEach(t),tp=d(W),Jt=n(W,"DIV",{class:!0});var Zr=s(Jt);q(la.$$.fragment,Zr),op=d(Zr),ds=n(Zr,"P",{});var uh=s(ds);ap=l(uh,`Saves the passed access token so git can correctly authenticate the
user.`),uh.forEach(t),Zr.forEach(t),np=d(W),je=n(W,"DIV",{class:!0});var Ao=s(je);q(ca.$$.fragment,Ao),sp=d(Ao),hs=n(Ao,"P",{});var fh=s(hs);rp=l(fh,"Get info on one specific Space on huggingface.co."),fh.forEach(t),ip=d(Ao),us=n(Ao,"P",{});var mh=s(us);lp=l(mh,"Space can be private if you pass an acceptable token."),mh.forEach(t),cp=d(Ao),q(Qt.$$.fragment,Ao),Ao.forEach(t),pp=d(W),Xt=n(W,"DIV",{class:!0});var ei=s(Xt);q(pa.$$.fragment,ei),gp=d(ei),fs=n(ei,"P",{});var _h=s(fs);dp=l(_h,"Resets the user\u2019s access token."),_h.forEach(t),ei.forEach(t),hp=d(W),Qe=n(W,"DIV",{class:!0});var xn=s(Qe);q(ga.$$.fragment,xn),up=d(xn),ms=n(xn,"P",{});var bh=s(ms);fp=l(bh,"Update the visibility setting of a repository."),bh.forEach(t),mp=d(xn),q(Yt.$$.fragment,xn),xn.forEach(t),_p=d(W),Ie=n(W,"DIV",{class:!0});var xo=s(Ie);q(da.$$.fragment,xo),bp=d(xo),_s=n(xo,"P",{});var vh=s(_s);vp=l(vh,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),vh.forEach(t),$p=d(xo),q(Zt.$$.fragment,xo),yp=d(xo),q(eo.$$.fragment,xo),xo.forEach(t),Ep=d(W),ce=n(W,"DIV",{class:!0});var Fe=s(ce);q(ha.$$.fragment,Fe),wp=d(Fe),bs=n(Fe,"P",{});var $h=s(bs);kp=l($h,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),$h.forEach(t),Ap=d(Fe),vs=n(Fe,"P",{});var yh=s(vs);xp=l(yh,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),yh.forEach(t),Dp=d(Fe),ua=n(Fe,"P",{});var ti=s(ua);Hp=l(ti,"Uses "),$s=n(ti,"CODE",{});var Eh=s($s);qp=l(Eh,"HfApi.create_commit"),Eh.forEach(t),jp=l(ti," under the hood."),ti.forEach(t),Ip=d(Fe),q(to.$$.fragment,Fe),Np=d(Fe),q(oo.$$.fragment,Fe),Fe.forEach(t),Fp=d(W),ao=n(W,"DIV",{class:!0});var oi=s(ao);q(fa.$$.fragment,oi),Tp=d(oi),ys=n(oi,"P",{});var wh=s(ys);Pp=l(wh,"Call HF API to know \u201Cwhoami\u201D."),wh.forEach(t),oi.forEach(t),W.forEach(t),Ar=d(o),it=n(o,"DIV",{class:!0});var ai=s(it);q(ma.$$.fragment,ai),Op=d(ai),Es=n(ai,"P",{});var kh=s(Es);Lp=l(kh,"Info about a model accessible from huggingface.co"),kh.forEach(t),ai.forEach(t),xr=d(o),lt=n(o,"DIV",{class:!0});var ni=s(lt);q(_a.$$.fragment,ni),Rp=d(ni),ws=n(ni,"P",{});var Ah=s(ws);Cp=l(Ah,"Info about a dataset accessible from huggingface.co"),Ah.forEach(t),ni.forEach(t),Dr=d(o),Oe=n(o,"DIV",{class:!0});var Dn=s(Oe);q(ba.$$.fragment,Dn),Sp=d(Dn),ks=n(Dn,"P",{});var xh=s(ks);Mp=l(xh,"Info about a Space accessible from huggingface.co"),xh.forEach(t),Up=d(Dn),As=n(Dn,"P",{});var Dh=s(As);Vp=l(Dh,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Dh.forEach(t),Dn.forEach(t),Hr=d(o),ct=n(o,"DIV",{class:!0});var si=s(ct);q(va.$$.fragment,si),zp=d(si),xs=n(si,"P",{});var Hh=s(xs);Wp=l(Hh,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Hh.forEach(t),si.forEach(t),qr=d(o),pt=n(o,"H2",{class:!0});var ri=s(pt);no=n(ri,"A",{id:!0,class:!0,href:!0});var qh=s(no);Ds=n(qh,"SPAN",{});var jh=s(Ds);q($a.$$.fragment,jh),jh.forEach(t),qh.forEach(t),Gp=d(ri),fn=n(ri,"SPAN",{});var Od=s(fn);Hs=n(Od,"CODE",{});var Ih=s(Hs);Bp=l(Ih,"create_commit"),Ih.forEach(t),Kp=l(Od," API"),Od.forEach(t),ri.forEach(t),jr=d(o),so=n(o,"P",{});var ii=s(so);Jp=l(ii,"Below are the supported values for "),qs=n(ii,"CODE",{});var Nh=s(qs);Qp=l(Nh,"CommitOperation()"),Nh.forEach(t),Xp=l(ii,":"),ii.forEach(t),Ir=d(o),he=n(o,"DIV",{class:!0});var at=s(he);q(ya.$$.fragment,at),Yp=d(at),js=n(at,"P",{});var Fh=s(js);Zp=l(Fh,`Data structure holding necessary info to upload a file
to a repository on the Hub`),Fh.forEach(t),eg=d(at),ve=n(at,"DIV",{class:!0});var nt=s(ve);q(Ea.$$.fragment,nt),tg=d(nt),wa=n(nt,"P",{});var li=s(wa);og=l(li,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Is=n(li,"CODE",{});var Th=s(Is);ag=l(Th,"path_or_fileobj"),Th.forEach(t),ng=l(li,"."),li.forEach(t),sg=d(nt),ka=n(nt,"P",{});var ci=s(ka);rg=l(ci,"Triggers "),Ns=n(ci,"CODE",{});var Ph=s(Ns);ig=l(Ph,"self.validate"),Ph.forEach(t),lg=l(ci,"."),ci.forEach(t),cg=d(nt),Aa=n(nt,"P",{});var pi=s(Aa);pg=l(pi,"Raises: "),Fs=n(pi,"CODE",{});var Oh=s(Fs);gg=l(Oh,"ValueError"),Oh.forEach(t),dg=l(pi," if self.validate fails"),pi.forEach(t),hg=d(nt),q(ro.$$.fragment,nt),nt.forEach(t),ug=d(at),Xe=n(at,"DIV",{class:!0});var Hn=s(Xe);q(xa.$$.fragment,Hn),fg=d(Hn),mn=n(Hn,"P",{});var Ld=s(mn);mg=l(Ld,"The base64-encoded content of "),Ts=n(Ld,"CODE",{});var Lh=s(Ts);_g=l(Lh,"path_or_fileobj"),Lh.forEach(t),Ld.forEach(t),bg=d(Hn),_n=n(Hn,"P",{});var Rd=s(_n);vg=l(Rd,"Returns: "),Ps=n(Rd,"CODE",{});var Rh=s(Ps);$g=l(Rh,"bytes"),Rh.forEach(t),Rd.forEach(t),Hn.forEach(t),yg=d(at),Ne=n(at,"DIV",{class:!0});var Do=s(Ne);q(Da.$$.fragment,Do),Eg=d(Do),Ha=n(Do,"P",{});var gi=s(Ha);wg=l(gi,"Ensures "),Os=n(gi,"CODE",{});var Ch=s(Os);kg=l(Ch,"path_or_fileobj"),Ch.forEach(t),Ag=l(gi," is valid:"),gi.forEach(t),xg=d(Do),gt=n(Do,"UL",{});var qn=s(gt);Ye=n(qn,"LI",{});var en=s(Ye);Dg=l(en,"Ensures it is either a "),Ls=n(en,"CODE",{});var Sh=s(Ls);Hg=l(Sh,"str"),Sh.forEach(t),qg=l(en,", "),Rs=n(en,"CODE",{});var Mh=s(Rs);jg=l(Mh,"bytes"),Mh.forEach(t),Ig=l(en," or an instance of "),Cs=n(en,"CODE",{});var Uh=s(Cs);Ng=l(Uh,"io.BufferedIOBase"),Uh.forEach(t),en.forEach(t),Fg=d(qn),qa=n(qn,"LI",{});var di=s(qa);Tg=l(di,"If it is a "),Ss=n(di,"CODE",{});var Vh=s(Ss);Pg=l(Vh,"str"),Vh.forEach(t),Og=l(di,", ensure that it is a file path and that the file exists"),di.forEach(t),Lg=d(qn),Ze=n(qn,"LI",{});var tn=s(Ze);Rg=l(tn,"If it is an instance of "),Ms=n(tn,"CODE",{});var zh=s(Ms);Cg=l(zh,"io.BufferedIOBase"),zh.forEach(t),Sg=l(tn,", ensures it supports "),Us=n(tn,"CODE",{});var Wh=s(Us);Mg=l(Wh,"seek()"),Wh.forEach(t),Ug=l(tn," and "),Vs=n(tn,"CODE",{});var Gh=s(Vs);Vg=l(Gh,"tell()"),Gh.forEach(t),tn.forEach(t),qn.forEach(t),zg=d(Do),dt=n(Do,"P",{});var jn=s(dt);Wg=l(jn,"Raises: "),zs=n(jn,"CODE",{});var Bh=s(zs);Gg=l(Bh,"ValueError"),Bh.forEach(t),Bg=l(jn," if "),Ws=n(jn,"CODE",{});var Kh=s(Ws);Kg=l(Kh,"path_or_fileobj"),Kh.forEach(t),Jg=l(jn," is not valid"),jn.forEach(t),Do.forEach(t),at.forEach(t),Nr=d(o),ht=n(o,"DIV",{class:!0});var hi=s(ht);q(ja.$$.fragment,hi),Qg=d(hi),Gs=n(hi,"P",{});var Jh=s(Gs);Xg=l(Jh,`Data structure holding necessary info to delete
a file from a repository on the Hub`),Jh.forEach(t),hi.forEach(t),Fr=d(o),ut=n(o,"H2",{class:!0});var ui=s(ut);io=n(ui,"A",{id:!0,class:!0,href:!0});var Qh=s(io);Bs=n(Qh,"SPAN",{});var Xh=s(Bs);q(Ia.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),Yg=d(ui),Ks=n(ui,"SPAN",{});var Yh=s(Ks);Zg=l(Yh,"Hugging Face local storage"),Yh.forEach(t),ui.forEach(t),Tr=d(o),Na=n(o,"P",{});var Cd=s(Na);Js=n(Cd,"CODE",{});var Zh=s(Js);ed=l(Zh,"huggingface_hub"),Zh.forEach(t),td=l(Cd,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Cd.forEach(t),Pr=d(o),lo=n(o,"P",{});var fi=s(lo);od=l(fi,"It does this using the "),bn=n(fi,"A",{href:!0});var eu=s(bn);ad=l(eu,"HfFolder"),eu.forEach(t),nd=l(fi," utility, which saves data at the root of the user."),fi.forEach(t),Or=d(o),ye=n(o,"DIV",{class:!0});var Ho=s(ye);q(Fa.$$.fragment,Ho),sd=d(Ho),co=n(Ho,"DIV",{class:!0});var mi=s(co);q(Ta.$$.fragment,mi),rd=d(mi),Qs=n(mi,"P",{});var tu=s(Qs);id=l(tu,"Deletes the token from storage. Does not fail if token does not exist."),tu.forEach(t),mi.forEach(t),ld=d(Ho),et=n(Ho,"DIV",{class:!0});var In=s(et);q(Pa.$$.fragment,In),cd=d(In),Xs=n(In,"P",{});var ou=s(Xs);pd=l(ou,"Get token or None if not existent."),ou.forEach(t),gd=d(In),Oa=n(In,"P",{});var _i=s(Oa);dd=l(_i,"Note that a token can be also provided using the "),Ys=n(_i,"CODE",{});var au=s(Ys);hd=l(au,"HUGGING_FACE_HUB_TOKEN"),au.forEach(t),ud=l(_i,`
environment variable.`),_i.forEach(t),In.forEach(t),fd=d(Ho),po=n(Ho,"DIV",{class:!0});var bi=s(po);q(La.$$.fragment,bi),md=d(bi),Zs=n(bi,"P",{});var nu=s(Zs);_d=l(nu,"Save token, creating folder as needed."),nu.forEach(t),bi.forEach(t),Ho.forEach(t),Lr=d(o),ft=n(o,"H2",{class:!0});var vi=s(ft);go=n(vi,"A",{id:!0,class:!0,href:!0});var su=s(go);er=n(su,"SPAN",{});var ru=s(er);q(Ra.$$.fragment,ru),ru.forEach(t),su.forEach(t),bd=d(vi),tr=n(vi,"SPAN",{});var iu=s(tr);vd=l(iu,"Filtering helpers"),iu.forEach(t),vi.forEach(t),Rr=d(o),ho=n(o,"P",{});var $i=s(ho);$d=l($i,"Some helpers to filter repositories on the Hub are available in the "),or=n($i,"CODE",{});var lu=s(or);yd=l(lu,"huggingface_hub"),lu.forEach(t),Ed=l($i," package."),$i.forEach(t),Cr=d(o),Le=n(o,"DIV",{class:!0});var Nn=s(Le);q(Ca.$$.fragment,Nn),wd=d(Nn),ar=n(Nn,"P",{});var cu=s(ar);kd=l(cu,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),cu.forEach(t),Ad=d(Nn),q(uo.$$.fragment,Nn),Nn.forEach(t),Sr=d(o),Re=n(o,"DIV",{class:!0});var Fn=s(Re);q(Sa.$$.fragment,Fn),xd=d(Fn),nr=n(Fn,"P",{});var pu=s(nr);Dd=l(pu,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),pu.forEach(t),Hd=d(Fn),q(fo.$$.fragment,Fn),Fn.forEach(t),Mr=d(o),Ce=n(o,"DIV",{class:!0});var Tn=s(Ce);q(Ma.$$.fragment,Tn),qd=d(Tn),sr=n(Tn,"P",{});var gu=s(sr);jd=l(gu,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),gu.forEach(t),Id=d(Tn),q(mo.$$.fragment,Tn),Tn.forEach(t),Ur=d(o),Se=n(o,"DIV",{class:!0});var Pn=s(Se);q(Ua.$$.fragment,Pn),Nd=d(Pn),rr=n(Pn,"P",{});var du=s(rr);Fd=l(du,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),du.forEach(t),Td=d(Pn),q(_o.$$.fragment,Pn),Pn.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(tf)),$(c,"id","huggingface_hub.HfApi"),$(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(c,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(sn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(ln,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(cn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(gn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(hn,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(un,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(sa,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(sa,"rel","nofollow"),$(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(no,"id","huggingface_hub.CommitOperationAdd"),$(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(no,"href","#huggingface_hub.CommitOperationAdd"),$(pt,"class","relative group"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(io,"id","huggingface_hub.HfFolder"),$(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(io,"href","#huggingface_hub.HfFolder"),$(ut,"class","relative group"),$(bn,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(go,"id","huggingface_hub.DatasetFilter"),$(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(go,"href","#huggingface_hub.DatasetFilter"),$(ft,"class","relative group"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,p),y(o,b,k),y(o,f,k),e(f,c),e(c,h),j(r,h,null),e(f,u),e(f,T),e(T,_),y(o,x,k),y(o,w,k),e(w,v),e(w,A),e(A,P),e(w,O),y(o,L,k),y(o,m,k),e(m,D),e(m,z),e(z,V),e(m,R),y(o,K,k),y(o,G,k),e(G,E),y(o,S,k),j(C,o,k),y(o,Y,k),y(o,te,k),e(te,Z),e(te,J),e(J,ee),e(te,ae),y(o,B,k),j(X,o,k),y(o,oe,k),y(o,ne,k),e(ne,Ve),e(ne,me),e(me,st),e(ne,ze),y(o,Te,k),y(o,M,k),j($e,M,null),e(M,on),e(M,de),j(Pe,de,null),e(de,an),e(de,rt),e(rt,nn),e(de,Ei),j(mt,de,null),e(de,wi),j(_t,de,null),e(M,ki),e(M,Ee),j(qo,Ee,null),e(Ee,Ai),e(Ee,On),e(On,xi),e(Ee,Di),j(bt,Ee,null),e(Ee,Hi),j(vt,Ee,null),e(M,qi),e(M,$t),j(jo,$t,null),e($t,ji),e($t,Ln),e(Ln,Ii),e(M,Ni),e(M,ie),j(Io,ie,null),e(ie,Fi),e(ie,Rn),e(Rn,Ti),e(ie,Pi),e(ie,No),e(No,Oi),e(No,Cn),e(Cn,Li),e(No,Ri),e(ie,Ci),e(ie,Fo),e(Fo,Si),e(Fo,sn),e(sn,Mi),e(Fo,Ui),e(ie,Vi),e(ie,rn),e(rn,zi),e(rn,ln),e(ln,Wi),e(ie,Gi),j(yt,ie,null),e(M,Bi),e(M,le),j(To,le,null),e(le,Ki),e(le,Po),e(Po,Ji),e(Po,Sn),e(Sn,Qi),e(Po,Xi),e(le,Yi),e(le,Oo),e(Oo,Zi),e(Oo,cn),e(cn,el),e(Oo,tl),e(le,ol),e(le,Lo),e(Lo,al),e(Lo,Mn),e(Mn,nl),e(Lo,sl),e(le,rl),e(le,pn),e(pn,il),e(pn,gn),e(gn,ll),e(le,cl),j(Et,le,null),e(M,pl),e(M,wt),j(Ro,wt,null),e(wt,gl),e(wt,Un),e(Un,dl),e(M,hl),e(M,we),j(Co,we,null),e(we,ul),e(we,Vn),e(Vn,fl),e(we,ml),e(we,zn),e(zn,_l),e(we,bl),j(kt,we,null),e(M,vl),e(M,We),j(So,We,null),e(We,$l),e(We,Wn),e(Wn,yl),e(We,El),j(At,We,null),e(M,wl),e(M,Ge),j(Mo,Ge,null),e(Ge,kl),e(Ge,Gn),e(Gn,Al),e(Ge,xl),j(xt,Ge,null),e(M,Dl),e(M,Be),j(Uo,Be,null),e(Be,Hl),e(Be,Bn),e(Bn,ql),e(Be,jl),j(Dt,Be,null),e(M,Il),e(M,Ht),j(Vo,Ht,null),e(Ht,Nl),e(Ht,Kn),e(Kn,Fl),e(M,Tl),e(M,ke),j(zo,ke,null),e(ke,Pl),e(ke,Jn),e(Jn,Ol),e(ke,Ll),e(ke,dn),e(dn,Rl),e(dn,hn),e(hn,Cl),e(ke,Sl),j(qt,ke,null),e(M,Ml),e(M,jt),j(Wo,jt,null),e(jt,Ul),e(jt,Qn),e(Qn,Vl),e(M,zl),e(M,It),j(Go,It,null),e(It,Wl),e(It,Xn),e(Xn,Gl),e(M,Bl),e(M,_e),j(Bo,_e,null),e(_e,Kl),e(_e,Yn),e(Yn,Jl),e(_e,Ql),e(_e,Zn),e(Zn,Xl),e(_e,Yl),j(Nt,_e,null),e(_e,Zl),j(Ft,_e,null),e(M,ec),e(M,Ae),j(Ko,Ae,null),e(Ae,tc),e(Ae,es),e(es,oc),e(Ae,ac),j(Tt,Ae,null),e(Ae,nc),j(Pt,Ae,null),e(M,sc),e(M,xe),j(Jo,xe,null),e(xe,rc),e(xe,ts),e(ts,ic),e(xe,lc),j(Ot,xe,null),e(xe,cc),j(Lt,xe,null),e(M,pc),e(M,Rt),j(Qo,Rt,null),e(Rt,gc),e(Rt,os),e(os,dc),e(M,hc),e(M,be),j(Xo,be,null),e(be,uc),e(be,as),e(as,fc),e(be,mc),e(be,Yo),e(Yo,_c),e(Yo,un),e(un,bc),e(Yo,vc),e(be,$c),j(Ct,be,null),e(be,yc),j(St,be,null),e(M,Ec),e(M,Mt),j(Zo,Mt,null),e(Mt,wc),e(Mt,ns),e(ns,kc),e(M,Ac),e(M,Ut),j(ea,Ut,null),e(Ut,xc),e(Ut,ss),e(ss,Dc),e(M,Hc),e(M,Ke),j(ta,Ke,null),e(Ke,qc),e(Ke,rs),e(rs,jc),e(Ke,Ic),j(Vt,Ke,null),e(M,Nc),e(M,De),j(oa,De,null),e(De,Fc),e(De,is),e(is,Tc),e(De,Pc),e(De,ls),e(ls,Oc),e(De,Lc),j(zt,De,null),e(M,Rc),e(M,He),j(aa,He,null),e(He,Cc),e(He,cs),e(cs,Sc),e(He,Mc),e(He,na),e(na,Uc),e(na,sa),e(sa,Vc),e(na,zc),e(He,Wc),j(Wt,He,null),e(M,Gc),e(M,qe),j(ra,qe,null),e(qe,Bc),e(qe,ps),e(ps,Kc),e(qe,Jc),j(Gt,qe,null),e(qe,Qc),j(Bt,qe,null),e(M,Xc),e(M,Je),j(ia,Je,null),e(Je,Yc),e(Je,gs),e(gs,Zc),e(Je,ep),j(Kt,Je,null),e(M,tp),e(M,Jt),j(la,Jt,null),e(Jt,op),e(Jt,ds),e(ds,ap),e(M,np),e(M,je),j(ca,je,null),e(je,sp),e(je,hs),e(hs,rp),e(je,ip),e(je,us),e(us,lp),e(je,cp),j(Qt,je,null),e(M,pp),e(M,Xt),j(pa,Xt,null),e(Xt,gp),e(Xt,fs),e(fs,dp),e(M,hp),e(M,Qe),j(ga,Qe,null),e(Qe,up),e(Qe,ms),e(ms,fp),e(Qe,mp),j(Yt,Qe,null),e(M,_p),e(M,Ie),j(da,Ie,null),e(Ie,bp),e(Ie,_s),e(_s,vp),e(Ie,$p),j(Zt,Ie,null),e(Ie,yp),j(eo,Ie,null),e(M,Ep),e(M,ce),j(ha,ce,null),e(ce,wp),e(ce,bs),e(bs,kp),e(ce,Ap),e(ce,vs),e(vs,xp),e(ce,Dp),e(ce,ua),e(ua,Hp),e(ua,$s),e($s,qp),e(ua,jp),e(ce,Ip),j(to,ce,null),e(ce,Np),j(oo,ce,null),e(M,Fp),e(M,ao),j(fa,ao,null),e(ao,Tp),e(ao,ys),e(ys,Pp),y(o,Ar,k),y(o,it,k),j(ma,it,null),e(it,Op),e(it,Es),e(Es,Lp),y(o,xr,k),y(o,lt,k),j(_a,lt,null),e(lt,Rp),e(lt,ws),e(ws,Cp),y(o,Dr,k),y(o,Oe,k),j(ba,Oe,null),e(Oe,Sp),e(Oe,ks),e(ks,Mp),e(Oe,Up),e(Oe,As),e(As,Vp),y(o,Hr,k),y(o,ct,k),j(va,ct,null),e(ct,zp),e(ct,xs),e(xs,Wp),y(o,qr,k),y(o,pt,k),e(pt,no),e(no,Ds),j($a,Ds,null),e(pt,Gp),e(pt,fn),e(fn,Hs),e(Hs,Bp),e(fn,Kp),y(o,jr,k),y(o,so,k),e(so,Jp),e(so,qs),e(qs,Qp),e(so,Xp),y(o,Ir,k),y(o,he,k),j(ya,he,null),e(he,Yp),e(he,js),e(js,Zp),e(he,eg),e(he,ve),j(Ea,ve,null),e(ve,tg),e(ve,wa),e(wa,og),e(wa,Is),e(Is,ag),e(wa,ng),e(ve,sg),e(ve,ka),e(ka,rg),e(ka,Ns),e(Ns,ig),e(ka,lg),e(ve,cg),e(ve,Aa),e(Aa,pg),e(Aa,Fs),e(Fs,gg),e(Aa,dg),e(ve,hg),j(ro,ve,null),e(he,ug),e(he,Xe),j(xa,Xe,null),e(Xe,fg),e(Xe,mn),e(mn,mg),e(mn,Ts),e(Ts,_g),e(Xe,bg),e(Xe,_n),e(_n,vg),e(_n,Ps),e(Ps,$g),e(he,yg),e(he,Ne),j(Da,Ne,null),e(Ne,Eg),e(Ne,Ha),e(Ha,wg),e(Ha,Os),e(Os,kg),e(Ha,Ag),e(Ne,xg),e(Ne,gt),e(gt,Ye),e(Ye,Dg),e(Ye,Ls),e(Ls,Hg),e(Ye,qg),e(Ye,Rs),e(Rs,jg),e(Ye,Ig),e(Ye,Cs),e(Cs,Ng),e(gt,Fg),e(gt,qa),e(qa,Tg),e(qa,Ss),e(Ss,Pg),e(qa,Og),e(gt,Lg),e(gt,Ze),e(Ze,Rg),e(Ze,Ms),e(Ms,Cg),e(Ze,Sg),e(Ze,Us),e(Us,Mg),e(Ze,Ug),e(Ze,Vs),e(Vs,Vg),e(Ne,zg),e(Ne,dt),e(dt,Wg),e(dt,zs),e(zs,Gg),e(dt,Bg),e(dt,Ws),e(Ws,Kg),e(dt,Jg),y(o,Nr,k),y(o,ht,k),j(ja,ht,null),e(ht,Qg),e(ht,Gs),e(Gs,Xg),y(o,Fr,k),y(o,ut,k),e(ut,io),e(io,Bs),j(Ia,Bs,null),e(ut,Yg),e(ut,Ks),e(Ks,Zg),y(o,Tr,k),y(o,Na,k),e(Na,Js),e(Js,ed),e(Na,td),y(o,Pr,k),y(o,lo,k),e(lo,od),e(lo,bn),e(bn,ad),e(lo,nd),y(o,Or,k),y(o,ye,k),j(Fa,ye,null),e(ye,sd),e(ye,co),j(Ta,co,null),e(co,rd),e(co,Qs),e(Qs,id),e(ye,ld),e(ye,et),j(Pa,et,null),e(et,cd),e(et,Xs),e(Xs,pd),e(et,gd),e(et,Oa),e(Oa,dd),e(Oa,Ys),e(Ys,hd),e(Oa,ud),e(ye,fd),e(ye,po),j(La,po,null),e(po,md),e(po,Zs),e(Zs,_d),y(o,Lr,k),y(o,ft,k),e(ft,go),e(go,er),j(Ra,er,null),e(ft,bd),e(ft,tr),e(tr,vd),y(o,Rr,k),y(o,ho,k),e(ho,$d),e(ho,or),e(or,yd),e(ho,Ed),y(o,Cr,k),y(o,Le,k),j(Ca,Le,null),e(Le,wd),e(Le,ar),e(ar,kd),e(Le,Ad),j(uo,Le,null),y(o,Sr,k),y(o,Re,k),j(Sa,Re,null),e(Re,xd),e(Re,nr),e(nr,Dd),e(Re,Hd),j(fo,Re,null),y(o,Mr,k),y(o,Ce,k),j(Ma,Ce,null),e(Ce,qd),e(Ce,sr),e(sr,jd),e(Ce,Id),j(mo,Ce,null),y(o,Ur,k),y(o,Se,k),j(Ua,Se,null),e(Se,Nd),e(Se,rr),e(rr,Fd),e(Se,Td),j(_o,Se,null),Vr=!0},p(o,[k]){const Va={};k&2&&(Va.$$scope={dirty:k,ctx:o}),mt.$set(Va);const ir={};k&2&&(ir.$$scope={dirty:k,ctx:o}),_t.$set(ir);const lr={};k&2&&(lr.$$scope={dirty:k,ctx:o}),bt.$set(lr);const cr={};k&2&&(cr.$$scope={dirty:k,ctx:o}),vt.$set(cr);const za={};k&2&&(za.$$scope={dirty:k,ctx:o}),yt.$set(za);const pr={};k&2&&(pr.$$scope={dirty:k,ctx:o}),Et.$set(pr);const Wa={};k&2&&(Wa.$$scope={dirty:k,ctx:o}),kt.$set(Wa);const gr={};k&2&&(gr.$$scope={dirty:k,ctx:o}),At.$set(gr);const dr={};k&2&&(dr.$$scope={dirty:k,ctx:o}),xt.$set(dr);const Ga={};k&2&&(Ga.$$scope={dirty:k,ctx:o}),Dt.$set(Ga);const hr={};k&2&&(hr.$$scope={dirty:k,ctx:o}),qt.$set(hr);const Ba={};k&2&&(Ba.$$scope={dirty:k,ctx:o}),Nt.$set(Ba);const ur={};k&2&&(ur.$$scope={dirty:k,ctx:o}),Ft.$set(ur);const W={};k&2&&(W.$$scope={dirty:k,ctx:o}),Tt.$set(W);const Me={};k&2&&(Me.$$scope={dirty:k,ctx:o}),Pt.$set(Me);const fr={};k&2&&(fr.$$scope={dirty:k,ctx:o}),Ot.$set(fr);const Ue={};k&2&&(Ue.$$scope={dirty:k,ctx:o}),Lt.$set(Ue);const mr={};k&2&&(mr.$$scope={dirty:k,ctx:o}),Ct.$set(mr);const Ka={};k&2&&(Ka.$$scope={dirty:k,ctx:o}),St.$set(Ka);const _r={};k&2&&(_r.$$scope={dirty:k,ctx:o}),Vt.$set(_r);const ue={};k&2&&(ue.$$scope={dirty:k,ctx:o}),zt.$set(ue);const br={};k&2&&(br.$$scope={dirty:k,ctx:o}),Wt.$set(br);const Ja={};k&2&&(Ja.$$scope={dirty:k,ctx:o}),Gt.$set(Ja);const vr={};k&2&&(vr.$$scope={dirty:k,ctx:o}),Bt.$set(vr);const Qa={};k&2&&(Qa.$$scope={dirty:k,ctx:o}),Kt.$set(Qa);const $r={};k&2&&($r.$$scope={dirty:k,ctx:o}),Qt.$set($r);const vn={};k&2&&(vn.$$scope={dirty:k,ctx:o}),Yt.$set(vn);const yr={};k&2&&(yr.$$scope={dirty:k,ctx:o}),Zt.$set(yr);const fe={};k&2&&(fe.$$scope={dirty:k,ctx:o}),eo.$set(fe);const Xa={};k&2&&(Xa.$$scope={dirty:k,ctx:o}),to.$set(Xa);const Er={};k&2&&(Er.$$scope={dirty:k,ctx:o}),oo.$set(Er);const Ya={};k&2&&(Ya.$$scope={dirty:k,ctx:o}),ro.$set(Ya);const wr={};k&2&&(wr.$$scope={dirty:k,ctx:o}),uo.$set(wr);const Za={};k&2&&(Za.$$scope={dirty:k,ctx:o}),fo.$set(Za);const kr={};k&2&&(kr.$$scope={dirty:k,ctx:o}),mo.$set(kr);const $n={};k&2&&($n.$$scope={dirty:k,ctx:o}),_o.$set($n)},i(o){Vr||(I(r.$$.fragment,o),I(C.$$.fragment,o),I(X.$$.fragment,o),I($e.$$.fragment,o),I(Pe.$$.fragment,o),I(mt.$$.fragment,o),I(_t.$$.fragment,o),I(qo.$$.fragment,o),I(bt.$$.fragment,o),I(vt.$$.fragment,o),I(jo.$$.fragment,o),I(Io.$$.fragment,o),I(yt.$$.fragment,o),I(To.$$.fragment,o),I(Et.$$.fragment,o),I(Ro.$$.fragment,o),I(Co.$$.fragment,o),I(kt.$$.fragment,o),I(So.$$.fragment,o),I(At.$$.fragment,o),I(Mo.$$.fragment,o),I(xt.$$.fragment,o),I(Uo.$$.fragment,o),I(Dt.$$.fragment,o),I(Vo.$$.fragment,o),I(zo.$$.fragment,o),I(qt.$$.fragment,o),I(Wo.$$.fragment,o),I(Go.$$.fragment,o),I(Bo.$$.fragment,o),I(Nt.$$.fragment,o),I(Ft.$$.fragment,o),I(Ko.$$.fragment,o),I(Tt.$$.fragment,o),I(Pt.$$.fragment,o),I(Jo.$$.fragment,o),I(Ot.$$.fragment,o),I(Lt.$$.fragment,o),I(Qo.$$.fragment,o),I(Xo.$$.fragment,o),I(Ct.$$.fragment,o),I(St.$$.fragment,o),I(Zo.$$.fragment,o),I(ea.$$.fragment,o),I(ta.$$.fragment,o),I(Vt.$$.fragment,o),I(oa.$$.fragment,o),I(zt.$$.fragment,o),I(aa.$$.fragment,o),I(Wt.$$.fragment,o),I(ra.$$.fragment,o),I(Gt.$$.fragment,o),I(Bt.$$.fragment,o),I(ia.$$.fragment,o),I(Kt.$$.fragment,o),I(la.$$.fragment,o),I(ca.$$.fragment,o),I(Qt.$$.fragment,o),I(pa.$$.fragment,o),I(ga.$$.fragment,o),I(Yt.$$.fragment,o),I(da.$$.fragment,o),I(Zt.$$.fragment,o),I(eo.$$.fragment,o),I(ha.$$.fragment,o),I(to.$$.fragment,o),I(oo.$$.fragment,o),I(fa.$$.fragment,o),I(ma.$$.fragment,o),I(_a.$$.fragment,o),I(ba.$$.fragment,o),I(va.$$.fragment,o),I($a.$$.fragment,o),I(ya.$$.fragment,o),I(Ea.$$.fragment,o),I(ro.$$.fragment,o),I(xa.$$.fragment,o),I(Da.$$.fragment,o),I(ja.$$.fragment,o),I(Ia.$$.fragment,o),I(Fa.$$.fragment,o),I(Ta.$$.fragment,o),I(Pa.$$.fragment,o),I(La.$$.fragment,o),I(Ra.$$.fragment,o),I(Ca.$$.fragment,o),I(uo.$$.fragment,o),I(Sa.$$.fragment,o),I(fo.$$.fragment,o),I(Ma.$$.fragment,o),I(mo.$$.fragment,o),I(Ua.$$.fragment,o),I(_o.$$.fragment,o),Vr=!0)},o(o){N(r.$$.fragment,o),N(C.$$.fragment,o),N(X.$$.fragment,o),N($e.$$.fragment,o),N(Pe.$$.fragment,o),N(mt.$$.fragment,o),N(_t.$$.fragment,o),N(qo.$$.fragment,o),N(bt.$$.fragment,o),N(vt.$$.fragment,o),N(jo.$$.fragment,o),N(Io.$$.fragment,o),N(yt.$$.fragment,o),N(To.$$.fragment,o),N(Et.$$.fragment,o),N(Ro.$$.fragment,o),N(Co.$$.fragment,o),N(kt.$$.fragment,o),N(So.$$.fragment,o),N(At.$$.fragment,o),N(Mo.$$.fragment,o),N(xt.$$.fragment,o),N(Uo.$$.fragment,o),N(Dt.$$.fragment,o),N(Vo.$$.fragment,o),N(zo.$$.fragment,o),N(qt.$$.fragment,o),N(Wo.$$.fragment,o),N(Go.$$.fragment,o),N(Bo.$$.fragment,o),N(Nt.$$.fragment,o),N(Ft.$$.fragment,o),N(Ko.$$.fragment,o),N(Tt.$$.fragment,o),N(Pt.$$.fragment,o),N(Jo.$$.fragment,o),N(Ot.$$.fragment,o),N(Lt.$$.fragment,o),N(Qo.$$.fragment,o),N(Xo.$$.fragment,o),N(Ct.$$.fragment,o),N(St.$$.fragment,o),N(Zo.$$.fragment,o),N(ea.$$.fragment,o),N(ta.$$.fragment,o),N(Vt.$$.fragment,o),N(oa.$$.fragment,o),N(zt.$$.fragment,o),N(aa.$$.fragment,o),N(Wt.$$.fragment,o),N(ra.$$.fragment,o),N(Gt.$$.fragment,o),N(Bt.$$.fragment,o),N(ia.$$.fragment,o),N(Kt.$$.fragment,o),N(la.$$.fragment,o),N(ca.$$.fragment,o),N(Qt.$$.fragment,o),N(pa.$$.fragment,o),N(ga.$$.fragment,o),N(Yt.$$.fragment,o),N(da.$$.fragment,o),N(Zt.$$.fragment,o),N(eo.$$.fragment,o),N(ha.$$.fragment,o),N(to.$$.fragment,o),N(oo.$$.fragment,o),N(fa.$$.fragment,o),N(ma.$$.fragment,o),N(_a.$$.fragment,o),N(ba.$$.fragment,o),N(va.$$.fragment,o),N($a.$$.fragment,o),N(ya.$$.fragment,o),N(Ea.$$.fragment,o),N(ro.$$.fragment,o),N(xa.$$.fragment,o),N(Da.$$.fragment,o),N(ja.$$.fragment,o),N(Ia.$$.fragment,o),N(Fa.$$.fragment,o),N(Ta.$$.fragment,o),N(Pa.$$.fragment,o),N(La.$$.fragment,o),N(Ra.$$.fragment,o),N(Ca.$$.fragment,o),N(uo.$$.fragment,o),N(Sa.$$.fragment,o),N(fo.$$.fragment,o),N(Ma.$$.fragment,o),N(mo.$$.fragment,o),N(Ua.$$.fragment,o),N(_o.$$.fragment,o),Vr=!1},d(o){t(p),o&&t(b),o&&t(f),F(r),o&&t(x),o&&t(w),o&&t(L),o&&t(m),o&&t(K),o&&t(G),o&&t(S),F(C,o),o&&t(Y),o&&t(te),o&&t(B),F(X,o),o&&t(oe),o&&t(ne),o&&t(Te),o&&t(M),F($e),F(Pe),F(mt),F(_t),F(qo),F(bt),F(vt),F(jo),F(Io),F(yt),F(To),F(Et),F(Ro),F(Co),F(kt),F(So),F(At),F(Mo),F(xt),F(Uo),F(Dt),F(Vo),F(zo),F(qt),F(Wo),F(Go),F(Bo),F(Nt),F(Ft),F(Ko),F(Tt),F(Pt),F(Jo),F(Ot),F(Lt),F(Qo),F(Xo),F(Ct),F(St),F(Zo),F(ea),F(ta),F(Vt),F(oa),F(zt),F(aa),F(Wt),F(ra),F(Gt),F(Bt),F(ia),F(Kt),F(la),F(ca),F(Qt),F(pa),F(ga),F(Yt),F(da),F(Zt),F(eo),F(ha),F(to),F(oo),F(fa),o&&t(Ar),o&&t(it),F(ma),o&&t(xr),o&&t(lt),F(_a),o&&t(Dr),o&&t(Oe),F(ba),o&&t(Hr),o&&t(ct),F(va),o&&t(qr),o&&t(pt),F($a),o&&t(jr),o&&t(so),o&&t(Ir),o&&t(he),F(ya),F(Ea),F(ro),F(xa),F(Da),o&&t(Nr),o&&t(ht),F(ja),o&&t(Fr),o&&t(ut),F(Ia),o&&t(Tr),o&&t(Na),o&&t(Pr),o&&t(lo),o&&t(Or),o&&t(ye),F(Fa),F(Ta),F(Pa),F(La),o&&t(Lr),o&&t(ft),F(Ra),o&&t(Rr),o&&t(ho),o&&t(Cr),o&&t(Le),F(Ca),F(uo),o&&t(Sr),o&&t(Re),F(Sa),F(fo),o&&t(Mr),o&&t(Ce),F(Ma),F(mo),o&&t(Ur),o&&t(Se),F(Ua),F(_o)}}}const tf={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function of(U){return _u(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pf extends hu{constructor(p){super();uu(this,p,of,ef,fu,{})}}export{pf as default,tf as metadata};
