import{S as Lu,i as Ru,s as Cu,e as o,k as g,w as H,t as i,M as Su,c as a,d as t,m as d,a as s,x as q,h as l,b,G as e,g as y,y as j,q as I,o as N,B as F,v as Mu,L as ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Hi}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Uu(U){let p,v,f,c,h;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),v=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Vu(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function zu(U){let p,v,f,c,h;return c=new ie({props:{code:`
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
`}}),{c(){p=o("p"),v=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Wu(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Gu(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Bu(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Ku(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),$=g(),A=o("li"),P=o("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=s(p);v=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var z=s(c);h=a(z,"LI",{});var V=s(h);r=a(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),$=d(z),A=a(z,"LI",{});var G=s(A);P=a(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),b(P,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,v),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,$),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function Ju(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G,E,S,C,Y,te,Z,J,ee,ae,B;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),E=g(),S=o("li"),C=o("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),Z=g(),J=o("li"),ee=o("a"),ae=i("EntryNotFoundError"),B=i(`
If the file to download cannot be found.`),this.h()},l(X){p=a(X,"P",{});var oe=s(p);v=l(oe,"Raises the following errors:"),oe.forEach(t),f=d(X),c=a(X,"UL",{});var ne=s(c);h=a(ne,"LI",{});var We=s(h);r=a(We,"A",{href:!0,rel:!0});var _e=s(r);u=a(_e,"CODE",{});var it=s(u);T=l(it,"HTTPError"),it.forEach(t),_e.forEach(t),_=l(We,`
if the HuggingFace API returned an error`),We.forEach(t),x=d(ne),w=a(ne,"LI",{});var Ge=s(w);$=a(Ge,"A",{href:!0,rel:!0});var Oe=s($);A=a(Oe,"CODE",{});var M=s(A);P=l(M,"ValueError"),M.forEach(t),Oe.forEach(t),O=l(Ge,`
if some parameter value is invalid`),Ge.forEach(t),L=d(ne),m=a(ne,"LI",{});var Ee=s(m);D=a(Ee,"A",{href:!0});var sn=s(D);z=l(sn,"RepositoryNotFoundError"),sn.forEach(t),V=l(Ee,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(Ee,"CODE",{});var de=s(R);K=l(de,"private"),de.forEach(t),G=l(Ee," and you do not have access."),Ee.forEach(t),E=d(ne),S=a(ne,"LI",{});var Le=s(S);C=a(Le,"A",{href:!0});var rn=s(C);Y=l(rn,"RevisionNotFoundError"),rn.forEach(t),te=l(Le,`
If the revision to download from cannot be found.`),Le.forEach(t),Z=d(ne),J=a(ne,"LI",{});var lt=s(J);ee=a(lt,"A",{href:!0});var ln=s(ee);ae=l(ln,"EntryNotFoundError"),ln.forEach(t),B=l(lt,`
If the file to download cannot be found.`),lt.forEach(t),ne.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),b(C,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),b(ee,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(X,oe){y(X,p,oe),e(p,v),y(X,f,oe),y(X,c,oe),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G),e(c,E),e(c,S),e(S,C),e(C,Y),e(S,te),e(c,Z),e(c,J),e(J,ee),e(ee,ae),e(J,B)},d(X){X&&t(p),X&&t(f),X&&t(c)}}}function Qu(U){let p,v,f,c,h,r,u,T,_,x,w;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l($){p=a($,"P",{});var A=s(p);v=l(A,"Raises the following errors:"),A.forEach(t),f=d($),c=a($,"UL",{});var P=s(c);h=a(P,"LI",{});var O=s(h);r=a(O,"A",{href:!0});var L=s(r);u=l(L,"RepositoryNotFoundError"),L.forEach(t),T=l(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(O,"CODE",{});var m=s(_);x=l(m,"private"),m.forEach(t),w=l(O," and you do not have access."),O.forEach(t),P.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,A){y($,p,A),e(p,v),y($,f,A),y($,c,A),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w)},d($){$&&t(p),$&&t(f),$&&t(c)}}}function Xu(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Yu(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Zu(U){let p,v,f,c,h;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=o("p"),v=i("Collecting all discussions of a repo in a list:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function ef(U){let p,v,f,c,h;return c=new ie({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=o("p"),v=i("Iterating over discussions of a repo:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Iterating over discussions of a repo:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function tf(U){let p;return{c(){p=i("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(v){p=l(v,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(v,f){y(v,p,f)},d(v){v&&t(p)}}}function of(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function af(U){let p,v,f,c,h,r,u,T;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),v=i("Example usage with the "),f=o("code"),c=i("filter"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=a(_,"P",{});var x=s(p);v=l(x,"Example usage with the "),f=a(x,"CODE",{});var w=s(f);c=l(w,"filter"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,v),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function nf(U){let p,v,f,c,h,r,u,T;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),v=i("Example usage with the "),f=o("code"),c=i("search"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=a(_,"P",{});var x=s(p);v=l(x,"Example usage with the "),f=a(x,"CODE",{});var w=s(f);c=l(w,"search"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,v),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function sf(U){let p,v,f,c,h,r,u,T;return u=new ie({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),v=i("Example usage with the "),f=o("code"),c=i("filter"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=a(_,"P",{});var x=s(p);v=l(x,"Example usage with the "),f=a(x,"CODE",{});var w=s(f);c=l(w,"filter"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,v),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function rf(U){let p,v,f,c,h,r,u,T;return u=new ie({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),v=i("Example usage with the "),f=o("code"),c=i("search"),h=i(" argument:"),r=g(),H(u.$$.fragment)},l(_){p=a(_,"P",{});var x=s(p);v=l(x,"Example usage with the "),f=a(x,"CODE",{});var w=s(f);c=l(w,"search"),w.forEach(t),h=l(x," argument:"),x.forEach(t),r=d(_),q(u.$$.fragment,_)},m(_,x){y(_,p,x),e(p,v),e(p,f),e(f,c),e(p,h),y(_,r,x),j(u,_,x),T=!0},p:ge,i(_){T||(I(u.$$.fragment,_),T=!0)},o(_){N(u.$$.fragment,_),T=!1},d(_){_&&t(p),_&&t(r),F(u,_)}}}function lf(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function cf(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),$=g(),A=o("li"),P=o("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=s(p);v=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var z=s(c);h=a(z,"LI",{});var V=s(h);r=a(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),$=d(z),A=a(z,"LI",{});var G=s(A);P=a(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),b(P,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,v),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,$),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function pf(U){let p,v,f,c,h,r,u,T,_,x,w;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l($){p=a($,"P",{});var A=s(p);v=l(A,"Raises the following errors:"),A.forEach(t),f=d($),c=a($,"UL",{});var P=s(c);h=a(P,"LI",{});var O=s(h);r=a(O,"A",{href:!0});var L=s(r);u=l(L,"RepositoryNotFoundError"),L.forEach(t),T=l(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(O,"CODE",{});var m=s(_);x=l(m,"private"),m.forEach(t),w=l(O," and you do not have access."),O.forEach(t),P.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,A){y($,p,A),e(p,v),y($,f,A),y($,c,A),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w)},d($){$&&t(p),$&&t(f),$&&t(c)}}}function gf(U){let p,v,f,c,h;return c=new ie({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),v=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function df(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var S=s(p);v=l(S,"Raises the following errors:"),S.forEach(t),f=d(E),c=a(E,"UL",{});var C=s(c);h=a(C,"LI",{});var Y=s(h);r=a(Y,"A",{href:!0,rel:!0});var te=s(r);u=a(te,"CODE",{});var Z=s(u);T=l(Z,"HTTPError"),Z.forEach(t),te.forEach(t),_=l(Y,`
if the HuggingFace API returned an error`),Y.forEach(t),x=d(C),w=a(C,"LI",{});var J=s(w);$=a(J,"A",{href:!0,rel:!0});var ee=s($);A=a(ee,"CODE",{});var ae=s(A);P=l(ae,"ValueError"),ae.forEach(t),ee.forEach(t),O=l(J,`
if some parameter value is invalid`),J.forEach(t),L=d(C),m=a(C,"LI",{});var B=s(m);D=a(B,"A",{href:!0});var X=s(D);z=l(X,"RepositoryNotFoundError"),X.forEach(t),V=l(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var oe=s(R);K=l(oe,"private"),oe.forEach(t),G=l(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,S){y(E,p,S),e(p,v),y(E,f,S),y(E,c,S),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function hf(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),$=g(),A=o("li"),P=o("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=s(p);v=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var z=s(c);h=a(z,"LI",{});var V=s(h);r=a(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),$=d(z),A=a(z,"LI",{});var G=s(A);P=a(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),b(P,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,v),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,$),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function uf(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),$=g(),A=o("li"),P=o("a"),O=i("RevisionNotFoundError"),L=i(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var D=s(p);v=l(D,"Raises the following errors:"),D.forEach(t),f=d(m),c=a(m,"UL",{});var z=s(c);h=a(z,"LI",{});var V=s(h);r=a(V,"A",{href:!0});var R=s(r);u=l(R,"RepositoryNotFoundError"),R.forEach(t),T=l(V,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(V,"CODE",{});var K=s(_);x=l(K,"private"),K.forEach(t),w=l(V," and you do not have access."),V.forEach(t),$=d(z),A=a(z,"LI",{});var G=s(A);P=a(G,"A",{href:!0});var E=s(P);O=l(E,"RevisionNotFoundError"),E.forEach(t),L=l(G,`
If the revision to download from cannot be found.`),G.forEach(t),z.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),b(P,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,D){y(m,p,D),e(p,v),y(m,f,D),y(m,c,D),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w),e(c,$),e(c,A),e(A,P),e(P,O),e(A,L)},d(m){m&&t(p),m&&t(f),m&&t(c)}}}function ff(U){let p,v,f,c,h,r,u,T,_,x,w;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=i("RepositoryNotFoundError"),T=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),x=i("private"),w=i(" and you do not have access."),this.h()},l($){p=a($,"P",{});var A=s(p);v=l(A,"Raises the following errors:"),A.forEach(t),f=d($),c=a($,"UL",{});var P=s(c);h=a(P,"LI",{});var O=s(h);r=a(O,"A",{href:!0});var L=s(r);u=l(L,"RepositoryNotFoundError"),L.forEach(t),T=l(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(O,"CODE",{});var m=s(_);x=l(m,"private"),m.forEach(t),w=l(O," and you do not have access."),O.forEach(t),P.forEach(t),this.h()},h(){b(r,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,A){y($,p,A),e(p,v),y($,f,A),y($,c,A),e(c,h),e(h,r),e(r,u),e(h,T),e(h,_),e(_,x),e(h,w)},d($){$&&t(p),$&&t(f),$&&t(c)}}}function mf(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G,E,S,C,Y,te;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),L=g(),m=o("li"),D=o("a"),z=i("RepositoryNotFoundError"),V=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=i("private"),G=i(" and you do not have access."),E=g(),S=o("li"),C=o("a"),Y=i("RevisionNotFoundError"),te=i(`
If the revision to download from cannot be found.`),this.h()},l(Z){p=a(Z,"P",{});var J=s(p);v=l(J,"Raises the following errors:"),J.forEach(t),f=d(Z),c=a(Z,"UL",{});var ee=s(c);h=a(ee,"LI",{});var ae=s(h);r=a(ae,"A",{href:!0,rel:!0});var B=s(r);u=a(B,"CODE",{});var X=s(u);T=l(X,"HTTPError"),X.forEach(t),B.forEach(t),_=l(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=d(ee),w=a(ee,"LI",{});var oe=s(w);$=a(oe,"A",{href:!0,rel:!0});var ne=s($);A=a(ne,"CODE",{});var We=s(A);P=l(We,"ValueError"),We.forEach(t),ne.forEach(t),O=l(oe,`
if some parameter value is invalid`),oe.forEach(t),L=d(ee),m=a(ee,"LI",{});var _e=s(m);D=a(_e,"A",{href:!0});var it=s(D);z=l(it,"RepositoryNotFoundError"),it.forEach(t),V=l(_e,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(_e,"CODE",{});var Ge=s(R);K=l(Ge,"private"),Ge.forEach(t),G=l(_e," and you do not have access."),_e.forEach(t),E=d(ee),S=a(ee,"LI",{});var Oe=s(S);C=a(Oe,"A",{href:!0});var M=s(C);Y=l(M,"RevisionNotFoundError"),M.forEach(t),te=l(Oe,`
If the revision to download from cannot be found.`),Oe.forEach(t),ee.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow"),b(D,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),b(C,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Z,J){y(Z,p,J),e(p,v),y(Z,f,J),y(Z,c,J),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O),e(c,L),e(c,m),e(m,D),e(D,z),e(m,V),e(m,R),e(R,K),e(m,G),e(c,E),e(c,S),e(S,C),e(C,Y),e(S,te)},d(Z){Z&&t(p),Z&&t(f),Z&&t(c)}}}function _f(U){let p,v,f,c,h;return c=new ie({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),v=i("Example usage:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Example usage:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function bf(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O;return{c(){p=o("p"),v=i("Raises the following errors:"),f=g(),c=o("ul"),h=o("li"),r=o("a"),u=o("code"),T=i("HTTPError"),_=i(`
if the HuggingFace API returned an error`),x=g(),w=o("li"),$=o("a"),A=o("code"),P=i("ValueError"),O=i(`
if some parameter value is invalid`),this.h()},l(L){p=a(L,"P",{});var m=s(p);v=l(m,"Raises the following errors:"),m.forEach(t),f=d(L),c=a(L,"UL",{});var D=s(c);h=a(D,"LI",{});var z=s(h);r=a(z,"A",{href:!0,rel:!0});var V=s(r);u=a(V,"CODE",{});var R=s(u);T=l(R,"HTTPError"),R.forEach(t),V.forEach(t),_=l(z,`
if the HuggingFace API returned an error`),z.forEach(t),x=d(D),w=a(D,"LI",{});var K=s(w);$=a(K,"A",{href:!0,rel:!0});var G=s($);A=a(G,"CODE",{});var E=s(A);P=l(E,"ValueError"),E.forEach(t),G.forEach(t),O=l(K,`
if some parameter value is invalid`),K.forEach(t),D.forEach(t),this.h()},h(){b(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),b(r,"rel","nofollow"),b($,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),b($,"rel","nofollow")},m(L,m){y(L,p,m),e(p,v),y(L,f,m),y(L,c,m),e(c,h),e(h,r),e(r,u),e(u,T),e(h,_),e(c,x),e(c,w),e(w,$),e($,A),e(A,P),e(w,O)},d(L){L&&t(p),L&&t(f),L&&t(c)}}}function vf(U){let p,v,f,c,h;return c=new ie({props:{code:`upload_folder(
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
`}}),{c(){p=o("p"),v=i("Example usage:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Example usage:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function $f(U){let p,v,f,c,h;return c=new ie({props:{code:`operation = CommitOperationAdd(
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
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=o("p"),v=i("Example:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Example:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function yf(U){let p,v,f,c,h;return c=new ie({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),v=i("Examples:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Examples:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Ef(U){let p,v;return p=new ie({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){H(p.$$.fragment)},l(f){q(p.$$.fragment,f)},m(f,c){j(p,f,c),v=!0},p:ge,i(f){v||(I(p.$$.fragment,f),v=!0)},o(f){N(p.$$.fragment,f),v=!1},d(f){F(p,f)}}}function wf(U){let p,v,f,c,h;return c=new ie({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),v=i("Example:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Example:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function kf(U){let p,v,f,c,h;return c=new ie({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),v=i("Example:"),f=g(),H(c.$$.fragment)},l(r){p=a(r,"P",{});var u=s(p);v=l(u,"Example:"),u.forEach(t),f=d(r),q(c.$$.fragment,r)},m(r,u){y(r,p,u),e(p,v),y(r,f,u),j(c,r,u),h=!0},p:ge,i(r){h||(I(c.$$.fragment,r),h=!0)},o(r){N(c.$$.fragment,r),h=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function Af(U){let p,v,f,c,h,r,u,T,_,x,w,$,A,P,O,L,m,D,z,V,R,K,G,E,S,C,Y,te,Z,J,ee,ae,B,X,oe,ne,We,_e,it,Ge,Oe,M,Ee,sn,de,Le,rn,lt,ln,qi,bt,ji,vt,Ii,ke,Io,Ni,Cn,Fi,Ti,$t,Pi,yt,Oi,Et,No,Li,Sn,Ri,Ci,le,Fo,Si,Mn,Mi,Ui,To,Vi,Un,zi,Wi,Gi,Po,Bi,cn,Ki,Ji,Qi,pn,Xi,gn,Yi,Zi,wt,el,ce,Oo,tl,Lo,ol,Vn,al,nl,sl,Ro,rl,dn,il,ll,cl,Co,pl,zn,gl,dl,hl,hn,ul,un,fl,ml,kt,_l,At,So,bl,Wn,vl,$l,Ae,Mo,yl,Gn,El,wl,Bn,kl,Al,xt,xl,Be,Uo,Dl,Kn,Hl,ql,Dt,jl,Ke,Vo,Il,Jn,Nl,Fl,Ht,Tl,Je,zo,Pl,Qn,Ol,Ll,qt,Rl,jt,Wo,Cl,Xn,Sl,Ml,xe,Go,Ul,Yn,Vl,zl,fn,Wl,mn,Gl,Bl,It,Kl,Nt,Bo,Jl,Zn,Ql,Xl,Ft,Ko,Yl,es,Zl,ec,be,Jo,tc,ts,oc,ac,os,nc,sc,Tt,rc,Pt,ic,De,Qo,lc,as,cc,pc,Ot,gc,Lt,dc,He,Xo,hc,ns,uc,fc,Rt,mc,Ct,_c,St,Yo,bc,ss,vc,$c,ve,Zo,yc,rs,Ec,wc,ea,kc,_n,Ac,xc,Dc,Mt,Hc,Ut,qc,Vt,ta,jc,is,Ic,Nc,zt,oa,Fc,ls,Tc,Pc,Qe,aa,Oc,cs,Lc,Rc,Wt,Cc,qe,na,Sc,ps,Mc,Uc,gs,Vc,zc,Gt,Wc,je,sa,Gc,ds,Bc,Kc,ra,Jc,ia,Qc,Xc,Yc,Bt,Zc,Ie,la,ep,hs,tp,op,Kt,ap,Jt,np,Xe,ca,sp,us,rp,ip,Qt,lp,Xt,pa,cp,fs,pp,gp,Ne,ga,dp,ms,hp,up,_s,fp,mp,Yt,_p,Zt,da,bp,bs,vp,$p,Ye,ha,yp,vs,Ep,wp,eo,kp,Fe,ua,Ap,$s,xp,Dp,to,Hp,oo,qp,re,fa,jp,ys,Ip,Np,Es,Fp,Tp,he,Pp,ws,Op,Lp,ks,Rp,Cp,ma,Sp,Mp,As,Up,Vp,xs,zp,Wp,Gp,_a,Bp,Ds,Kp,Jp,Qp,ao,Xp,no,Yp,so,ba,Zp,Hs,eg,Nr,ct,va,tg,qs,og,Fr,pt,$a,ag,js,ng,Tr,Re,ya,sg,Is,rg,ig,Ns,lg,Pr,gt,Ea,cg,Fs,pg,Or,dt,ro,Ts,wa,gg,bn,Ps,dg,hg,Lr,io,ug,Os,fg,mg,Rr,ue,ka,_g,Ls,bg,vg,$e,Aa,$g,xa,yg,Rs,Eg,wg,kg,Da,Ag,Cs,xg,Dg,Hg,Ha,qg,Ss,jg,Ig,Ng,lo,Fg,Ze,qa,Tg,vn,Pg,Ms,Og,Lg,$n,Rg,Us,Cg,Sg,Te,ja,Mg,Ia,Ug,Vs,Vg,zg,Wg,ht,et,Gg,zs,Bg,Kg,Ws,Jg,Qg,Gs,Xg,Yg,Na,Zg,Bs,ed,td,od,tt,ad,Ks,nd,sd,Js,rd,id,Qs,ld,cd,ut,pd,Xs,gd,dd,Ys,hd,ud,Cr,ft,Fa,fd,Zs,md,Sr,mt,co,er,Ta,_d,tr,bd,Mr,Pa,or,vd,$d,Ur,po,yd,yn,Ed,wd,Vr,we,Oa,kd,go,La,Ad,ar,xd,Dd,ot,Ra,Hd,nr,qd,jd,Ca,Id,sr,Nd,Fd,Td,ho,Sa,Pd,rr,Od,zr,_t,uo,ir,Ma,Ld,lr,Rd,Wr,fo,Cd,cr,Sd,Md,Gr,Ce,Ua,Ud,pr,Vd,zd,mo,Br,Se,Va,Wd,gr,Gd,Bd,_o,Kr,Me,za,Kd,dr,Jd,Qd,bo,Jr,Ue,Wa,Xd,hr,Yd,Zd,vo,Qr;return r=new Hi({}),C=new ie({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),X=new ie({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),Ee=new Q({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L602"}}),Le=new Q({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2960",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),bt=new pe({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Uu]},$$scope:{ctx:U}}}),vt=new se({props:{$$slots:{default:[Vu]},$$scope:{ctx:U}}}),Io=new Q({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2819",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),$t=new pe({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[zu]},$$scope:{ctx:U}}}),yt=new se({props:{$$slots:{default:[Wu]},$$scope:{ctx:U}}}),No=new Q({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
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
if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1895",returnDescription:`
<p>If <em>create_pr</em> is <em>True</em>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <em>None</em>.</p>
`,returnType:`
<p><em>str</em> or <em>None</em></p>
`}}),Fo=new Q({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2644"}}),wt=new se({props:{$$slots:{default:[Gu]},$$scope:{ctx:U}}}),Oo=new Q({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2732"}}),kt=new se({props:{$$slots:{default:[Bu]},$$scope:{ctx:U}}}),So=new Q({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1521",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Mo=new Q({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.dataset_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1281",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a></p>
`}}),xt=new se({props:{$$slots:{default:[Ku]},$$scope:{ctx:U}}}),Uo=new Q({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2355"}}),Dt=new se({props:{$$slots:{default:[Ju]},$$scope:{ctx:U}}}),Vo=new Q({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1651"}}),Ht=new se({props:{$$slots:{default:[Qu]},$$scope:{ctx:U}}}),zo=new Q({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3086",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),qt=new se({props:{$$slots:{default:[Xu]},$$scope:{ctx:U}}}),Wo=new Q({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L723"}}),Go=new Q({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2555"}}),It=new se({props:{$$slots:{default:[Yu]},$$scope:{ctx:U}}}),Bo=new Q({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2442",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ko=new Q({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L715"}}),Jo=new Q({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2476",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),Tt=new pe({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[Zu]},$$scope:{ctx:U}}}),Pt=new pe({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[ef]},$$scope:{ctx:U}}}),Qo=new Q({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3142",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ot=new se({props:{warning:!0,$$slots:{default:[tf]},$$scope:{ctx:U}}}),Lt=new se({props:{$$slots:{default:[of]},$$scope:{ctx:U}}}),Xo=new Q({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo">huggingface_hub.hf_api.DatasetInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L943"}}),Rt=new pe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[af]},$$scope:{ctx:U}}}),Ct=new pe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[nf]},$$scope:{ctx:U}}}),Yo=new Q({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1108",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Zo=new Q({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_models.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author (user or organization) of the
returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_models.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models Example
usage:`,name:"search"},{anchor:"huggingface_hub.HfApi.list_models.emissions_thresholds",description:`<strong>emissions_thresholds</strong> (<code>Tuple</code>, <em>optional</em>) &#x2014;
A tuple of two ints or floats representing a minimum and maximum
carbon footprint to filter the resulting models with in grams.`,name:"emissions_thresholds"},{anchor:"huggingface_hub.HfApi.list_models.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting models. Possible values
are the properties of the <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo">huggingface_hub.hf_api.ModelInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_models.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L733"}}),Mt=new pe({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[sf]},$$scope:{ctx:U}}}),Ut=new pe({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[rf]},$$scope:{ctx:U}}}),ta=new Q({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1481",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),oa=new Q({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string tag or list of tags that can be used to identify Spaces on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_spaces.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned Spaces.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_spaces.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned Spaces.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_spaces.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting Spaces. Possible
values are the properties of the <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo">huggingface_hub.hf_api.SpaceInfo</a>\` class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_spaces.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1122",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),aa=new Q({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3034",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Wt=new se({props:{$$slots:{default:[lf]},$$scope:{ctx:U}}}),na=new Q({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1207",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),Gt=new se({props:{$$slots:{default:[cf]},$$scope:{ctx:U}}}),sa=new Q({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1817"}}),Bt=new se({props:{$$slots:{default:[pf]},$$scope:{ctx:U}}}),la=new Q({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2894",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Kt=new pe({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[gf]},$$scope:{ctx:U}}}),Jt=new se({props:{$$slots:{default:[df]},$$scope:{ctx:U}}}),ca=new Q({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1409",returnDescription:`
<p>The repository information, as a
<a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a>, <a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a>
or <a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> object.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),Qt=new se({props:{$$slots:{default:[hf]},$$scope:{ctx:U}}}),pa=new Q({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L696"}}),ga=new Q({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1345",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a></p>
`}}),Yt=new se({props:{$$slots:{default:[uf]},$$scope:{ctx:U}}}),da=new Q({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L708"}}),ha=new Q({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L1742",returnDescription:`
<p>The HTTP response in json.</p>
`}}),eo=new se({props:{$$slots:{default:[ff]},$$scope:{ctx:U}}}),ua=new Q({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2055",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),to=new se({props:{$$slots:{default:[mf]},$$scope:{ctx:U}}}),oo=new pe({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[_f]},$$scope:{ctx:U}}}),fa=new Q({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
If provided, files matching any of the patterns are not uploaded.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L2205",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ao=new se({props:{$$slots:{default:[bf]},$$scope:{ctx:U}}}),no=new pe({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[vf]},$$scope:{ctx:U}}}),ba=new Q({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L606"}}),va=new Q({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L223"}}),$a=new Q({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of dataset repository.`,name:"id"},{anchor:"huggingface_hub.hf_api.DatasetInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.DatasetInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.DatasetInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.DatasetInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a> objects that constitute the dataset.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.DatasetInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.DatasetInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.DatasetInfo.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Description of the dataset`,name:"description"},{anchor:"huggingface_hub.hf_api.DatasetInfo.citation",description:`<strong>citation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dataset citation`,name:"citation"},{anchor:"huggingface_hub.hf_api.DatasetInfo.cardData",description:`<strong>cardData</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Metadata of the model card as a dictionary.`,name:"cardData"},{anchor:"huggingface_hub.hf_api.DatasetInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L291"}}),ya=new Q({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L365"}}),Ea=new Q({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L177"}}),wa=new Hi({}),ka=new Q({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/_commit_api.py#L51"}}),Aa=new Q({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/_commit_api.py#L123"}}),lo=new pe({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[$f]},$$scope:{ctx:U}}}),qa=new Q({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/_commit_api.py#L158"}}),ja=new Q({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/_commit_api.py#L73"}}),Fa=new Q({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/_commit_api.py#L36"}}),Ta=new Hi({}),Oa=new Q({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3204"}}),La=new Q({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3241"}}),Ra=new Q({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3220",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Sa=new Q({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L3207"}}),Ma=new Hi({}),Ua=new Q({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/utils/endpoint_helpers.py#L66"}}),mo=new pe({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[yf]},$$scope:{ctx:U}}}),Va=new Q({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/utils/endpoint_helpers.py#L152"}}),_o=new pe({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Ef]},$$scope:{ctx:U}}}),za=new Q({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L490"}}),bo=new pe({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[wf]},$$scope:{ctx:U}}}),Wa=new Q({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.9.0.rc0/src/huggingface_hub/hf_api.py#L452"}}),vo=new pe({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[kf]},$$scope:{ctx:U}}}),{c(){p=o("meta"),v=g(),f=o("h1"),c=o("a"),h=o("span"),H(r.$$.fragment),u=g(),T=o("span"),_=i("Hugging Face Hub API"),x=g(),w=o("p"),$=i("Below is the documentation for the "),A=o("code"),P=i("HfApi"),O=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),L=g(),m=o("p"),D=i("All methods from the "),z=o("code"),V=i("HfApi"),R=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=o("p"),E=i("The following approach uses the method from the root of the package:"),S=g(),H(C.$$.fragment),Y=g(),te=o("p"),Z=i("The following approach uses the "),J=o("code"),ee=i("HfApi"),ae=i(" class:"),B=g(),H(X.$$.fragment),oe=g(),ne=o("p"),We=i("Using the "),_e=o("code"),it=i("HfApi"),Ge=i(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Oe=g(),M=o("div"),H(Ee.$$.fragment),sn=g(),de=o("div"),H(Le.$$.fragment),rn=g(),lt=o("p"),ln=i("Closes or re-opens a Discussion or Pull Request."),qi=g(),H(bt.$$.fragment),ji=g(),H(vt.$$.fragment),Ii=g(),ke=o("div"),H(Io.$$.fragment),Ni=g(),Cn=o("p"),Fi=i("Creates a new comment on the given Discussion."),Ti=g(),H($t.$$.fragment),Pi=g(),H(yt.$$.fragment),Oi=g(),Et=o("div"),H(No.$$.fragment),Li=g(),Sn=o("p"),Ri=i("Creates a commit in the given repo, deleting & uploading files as needed."),Ci=g(),le=o("div"),H(Fo.$$.fragment),Si=g(),Mn=o("p"),Mi=i("Creates a Discussion or Pull Request."),Ui=g(),To=o("p"),Vi=i("Pull Requests created programmatically will be in "),Un=o("code"),zi=i('"draft"'),Wi=i(" status."),Gi=g(),Po=o("p"),Bi=i("Creating a Pull Request with changes can also be done at once with "),cn=o("a"),Ki=i("HfApi.create_commit()"),Ji=i("."),Qi=g(),pn=o("p"),Xi=i("Returns: "),gn=o("a"),Yi=i("DiscussionWithDetails"),Zi=g(),H(wt.$$.fragment),el=g(),ce=o("div"),H(Oo.$$.fragment),tl=g(),Lo=o("p"),ol=i("Creates a Pull Request . Pull Requests created programmatically will be in "),Vn=o("code"),al=i('"draft"'),nl=i(" status."),sl=g(),Ro=o("p"),rl=i("Creating a Pull Request with changes can also be done at once with "),dn=o("a"),il=i("HfApi.create_commit()"),ll=i(";"),cl=g(),Co=o("p"),pl=i("This is a wrapper around "),zn=o("code"),gl=i("HfApi.create_discusssion"),dl=i("."),hl=g(),hn=o("p"),ul=i("Returns: "),un=o("a"),fl=i("DiscussionWithDetails"),ml=g(),H(kt.$$.fragment),_l=g(),At=o("div"),H(So.$$.fragment),bl=g(),Wn=o("p"),vl=i("Create an empty repo on the HuggingFace Hub."),$l=g(),Ae=o("div"),H(Mo.$$.fragment),yl=g(),Gn=o("p"),El=i("Get info on one specific dataset on huggingface.co."),wl=g(),Bn=o("p"),kl=i("Dataset can be private if you pass an acceptable token."),Al=g(),H(xt.$$.fragment),xl=g(),Be=o("div"),H(Uo.$$.fragment),Dl=g(),Kn=o("p"),Hl=i("Deletes a file in the given repo."),ql=g(),H(Dt.$$.fragment),jl=g(),Ke=o("div"),H(Vo.$$.fragment),Il=g(),Jn=o("p"),Nl=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Fl=g(),H(Ht.$$.fragment),Tl=g(),Je=o("div"),H(zo.$$.fragment),Pl=g(),Qn=o("p"),Ol=i("Edits a comment on a Discussion / Pull Request."),Ll=g(),H(qt.$$.fragment),Rl=g(),jt=o("div"),H(Wo.$$.fragment),Cl=g(),Xn=o("p"),Sl=i("Gets all valid dataset tags as a nested namespace object."),Ml=g(),xe=o("div"),H(Go.$$.fragment),Ul=g(),Yn=o("p"),Vl=i("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),zl=g(),fn=o("p"),Wl=i("Returns: "),mn=o("a"),Gl=i("DiscussionWithDetails"),Bl=g(),H(It.$$.fragment),Kl=g(),Nt=o("div"),H(Bo.$$.fragment),Jl=g(),Zn=o("p"),Ql=i(`Returns the repository name for a given model ID and optional
organization.`),Xl=g(),Ft=o("div"),H(Ko.$$.fragment),Yl=g(),es=o("p"),Zl=i("Gets all valid model tags as a nested namespace object"),ec=g(),be=o("div"),H(Jo.$$.fragment),tc=g(),ts=o("p"),oc=i("Fetches Discussions and Pull Requests for the given repo."),ac=g(),os=o("p"),nc=i("Example:"),sc=g(),H(Tt.$$.fragment),rc=g(),H(Pt.$$.fragment),ic=g(),De=o("div"),H(Qo.$$.fragment),lc=g(),as=o("p"),cc=i("Hides a comment on a Discussion / Pull Request."),pc=g(),H(Ot.$$.fragment),gc=g(),H(Lt.$$.fragment),dc=g(),He=o("div"),H(Xo.$$.fragment),hc=g(),ns=o("p"),uc=i("Get the public list of all the datasets on huggingface.co"),fc=g(),H(Rt.$$.fragment),mc=g(),H(Ct.$$.fragment),_c=g(),St=o("div"),H(Yo.$$.fragment),bc=g(),ss=o("p"),vc=i("Get the public list of all the metrics on huggingface.co"),$c=g(),ve=o("div"),H(Zo.$$.fragment),yc=g(),rs=o("p"),Ec=i("Get the public list of all the models on huggingface.co"),wc=g(),ea=o("p"),kc=i("Returns: List of "),_n=o("a"),Ac=i("huggingface_hub.hf_api.ModelInfo"),xc=i(" objects"),Dc=g(),H(Mt.$$.fragment),Hc=g(),H(Ut.$$.fragment),qc=g(),Vt=o("div"),H(ta.$$.fragment),jc=g(),is=o("p"),Ic=i("Get the list of files in a given repo."),Nc=g(),zt=o("div"),H(oa.$$.fragment),Fc=g(),ls=o("p"),Tc=i("Get the public list of all Spaces on huggingface.co"),Pc=g(),Qe=o("div"),H(aa.$$.fragment),Oc=g(),cs=o("p"),Lc=i("Merges a Pull Request."),Rc=g(),H(Wt.$$.fragment),Cc=g(),qe=o("div"),H(na.$$.fragment),Sc=g(),ps=o("p"),Mc=i("Get info on one specific model on huggingface.co"),Uc=g(),gs=o("p"),Vc=i("Model can be private if you pass an acceptable token or are logged in."),zc=g(),H(Gt.$$.fragment),Wc=g(),je=o("div"),H(sa.$$.fragment),Gc=g(),ds=o("p"),Bc=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Kc=g(),ra=o("p"),Jc=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),ia=o("a"),Qc=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Xc=i("."),Yc=g(),H(Bt.$$.fragment),Zc=g(),Ie=o("div"),H(la.$$.fragment),ep=g(),hs=o("p"),tp=i("Renames a Discussion."),op=g(),H(Kt.$$.fragment),ap=g(),H(Jt.$$.fragment),np=g(),Xe=o("div"),H(ca.$$.fragment),sp=g(),us=o("p"),rp=i("Get the info object for a given repo of a given type."),ip=g(),H(Qt.$$.fragment),lp=g(),Xt=o("div"),H(pa.$$.fragment),cp=g(),fs=o("p"),pp=i(`Saves the passed access token so git can correctly authenticate the
user.`),gp=g(),Ne=o("div"),H(ga.$$.fragment),dp=g(),ms=o("p"),hp=i("Get info on one specific Space on huggingface.co."),up=g(),_s=o("p"),fp=i("Space can be private if you pass an acceptable token."),mp=g(),H(Yt.$$.fragment),_p=g(),Zt=o("div"),H(da.$$.fragment),bp=g(),bs=o("p"),vp=i("Resets the user\u2019s access token."),$p=g(),Ye=o("div"),H(ha.$$.fragment),yp=g(),vs=o("p"),Ep=i("Update the visibility setting of a repository."),wp=g(),H(eo.$$.fragment),kp=g(),Fe=o("div"),H(ua.$$.fragment),Ap=g(),$s=o("p"),xp=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Dp=g(),H(to.$$.fragment),Hp=g(),H(oo.$$.fragment),qp=g(),re=o("div"),H(fa.$$.fragment),jp=g(),ys=o("p"),Ip=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Np=g(),Es=o("p"),Fp=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Tp=g(),he=o("p"),Pp=i("Use the "),ws=o("code"),Op=i("allow_patterns"),Lp=i(" and "),ks=o("code"),Rp=i("ignore_patterns"),Cp=i(` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),ma=o("a"),Sp=i("here"),Mp=i(`. If both
`),As=o("code"),Up=i("allow_patterns"),Vp=i(" and "),xs=o("code"),zp=i("ignore_patterns"),Wp=i(` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Gp=g(),_a=o("p"),Bp=i("Uses "),Ds=o("code"),Kp=i("HfApi.create_commit"),Jp=i(" under the hood."),Qp=g(),H(ao.$$.fragment),Xp=g(),H(no.$$.fragment),Yp=g(),so=o("div"),H(ba.$$.fragment),Zp=g(),Hs=o("p"),eg=i("Call HF API to know \u201Cwhoami\u201D."),Nr=g(),ct=o("div"),H(va.$$.fragment),tg=g(),qs=o("p"),og=i("Info about a model accessible from huggingface.co"),Fr=g(),pt=o("div"),H($a.$$.fragment),ag=g(),js=o("p"),ng=i("Info about a dataset accessible from huggingface.co"),Tr=g(),Re=o("div"),H(ya.$$.fragment),sg=g(),Is=o("p"),rg=i("Info about a Space accessible from huggingface.co"),ig=g(),Ns=o("p"),lg=i(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Pr=g(),gt=o("div"),H(Ea.$$.fragment),cg=g(),Fs=o("p"),pg=i(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Or=g(),dt=o("h2"),ro=o("a"),Ts=o("span"),H(wa.$$.fragment),gg=g(),bn=o("span"),Ps=o("code"),dg=i("create_commit"),hg=i(" API"),Lr=g(),io=o("p"),ug=i("Below are the supported values for "),Os=o("code"),fg=i("CommitOperation()"),mg=i(":"),Rr=g(),ue=o("div"),H(ka.$$.fragment),_g=g(),Ls=o("p"),bg=i(`Data structure holding necessary info to upload a file
to a repository on the Hub`),vg=g(),$e=o("div"),H(Aa.$$.fragment),$g=g(),xa=o("p"),yg=i(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Rs=o("code"),Eg=i("path_or_fileobj"),wg=i("."),kg=g(),Da=o("p"),Ag=i("Triggers "),Cs=o("code"),xg=i("self.validate"),Dg=i("."),Hg=g(),Ha=o("p"),qg=i("Raises: "),Ss=o("code"),jg=i("ValueError"),Ig=i(" if self.validate fails"),Ng=g(),H(lo.$$.fragment),Fg=g(),Ze=o("div"),H(qa.$$.fragment),Tg=g(),vn=o("p"),Pg=i("The base64-encoded content of "),Ms=o("code"),Og=i("path_or_fileobj"),Lg=g(),$n=o("p"),Rg=i("Returns: "),Us=o("code"),Cg=i("bytes"),Sg=g(),Te=o("div"),H(ja.$$.fragment),Mg=g(),Ia=o("p"),Ug=i("Ensures "),Vs=o("code"),Vg=i("path_or_fileobj"),zg=i(" is valid:"),Wg=g(),ht=o("ul"),et=o("li"),Gg=i("Ensures it is either a "),zs=o("code"),Bg=i("str"),Kg=i(", "),Ws=o("code"),Jg=i("bytes"),Qg=i(" or an instance of "),Gs=o("code"),Xg=i("io.BufferedIOBase"),Yg=g(),Na=o("li"),Zg=i("If it is a "),Bs=o("code"),ed=i("str"),td=i(", ensure that it is a file path and that the file exists"),od=g(),tt=o("li"),ad=i("If it is an instance of "),Ks=o("code"),nd=i("io.BufferedIOBase"),sd=i(", ensures it supports "),Js=o("code"),rd=i("seek()"),id=i(" and "),Qs=o("code"),ld=i("tell()"),cd=g(),ut=o("p"),pd=i("Raises: "),Xs=o("code"),gd=i("ValueError"),dd=i(" if "),Ys=o("code"),hd=i("path_or_fileobj"),ud=i(" is not valid"),Cr=g(),ft=o("div"),H(Fa.$$.fragment),fd=g(),Zs=o("p"),md=i(`Data structure holding necessary info to delete
a file from a repository on the Hub`),Sr=g(),mt=o("h2"),co=o("a"),er=o("span"),H(Ta.$$.fragment),_d=g(),tr=o("span"),bd=i("Hugging Face local storage"),Mr=g(),Pa=o("p"),or=o("code"),vd=i("huggingface_hub"),$d=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ur=g(),po=o("p"),yd=i("It does this using the "),yn=o("a"),Ed=i("HfFolder"),wd=i(" utility, which saves data at the root of the user."),Vr=g(),we=o("div"),H(Oa.$$.fragment),kd=g(),go=o("div"),H(La.$$.fragment),Ad=g(),ar=o("p"),xd=i("Deletes the token from storage. Does not fail if token does not exist."),Dd=g(),ot=o("div"),H(Ra.$$.fragment),Hd=g(),nr=o("p"),qd=i("Get token or None if not existent."),jd=g(),Ca=o("p"),Id=i(`Note that a token can be also provided using the
`),sr=o("code"),Nd=i("HUGGING_FACE_HUB_TOKEN"),Fd=i(" environment variable."),Td=g(),ho=o("div"),H(Sa.$$.fragment),Pd=g(),rr=o("p"),Od=i("Save token, creating folder as needed."),zr=g(),_t=o("h2"),uo=o("a"),ir=o("span"),H(Ma.$$.fragment),Ld=g(),lr=o("span"),Rd=i("Filtering helpers"),Wr=g(),fo=o("p"),Cd=i("Some helpers to filter repositories on the Hub are available in the "),cr=o("code"),Sd=i("huggingface_hub"),Md=i(" package."),Gr=g(),Ce=o("div"),H(Ua.$$.fragment),Ud=g(),pr=o("p"),Vd=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),zd=g(),H(mo.$$.fragment),Br=g(),Se=o("div"),H(Va.$$.fragment),Wd=g(),gr=o("p"),Gd=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Bd=g(),H(_o.$$.fragment),Kr=g(),Me=o("div"),H(za.$$.fragment),Kd=g(),dr=o("p"),Jd=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Qd=g(),H(bo.$$.fragment),Jr=g(),Ue=o("div"),H(Wa.$$.fragment),Xd=g(),hr=o("p"),Yd=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Zd=g(),H(vo.$$.fragment),this.h()},l(n){const k=Su('[data-svelte="svelte-1phssyn"]',document.head);p=a(k,"META",{name:!0,content:!0}),k.forEach(t),v=d(n),f=a(n,"H1",{class:!0});var Ga=s(f);c=a(Ga,"A",{id:!0,class:!0,href:!0});var ur=s(c);h=a(ur,"SPAN",{});var fr=s(h);q(r.$$.fragment,fr),fr.forEach(t),ur.forEach(t),u=d(Ga),T=a(Ga,"SPAN",{});var mr=s(T);_=l(mr,"Hugging Face Hub API"),mr.forEach(t),Ga.forEach(t),x=d(n),w=a(n,"P",{});var Ba=s(w);$=l(Ba,"Below is the documentation for the "),A=a(Ba,"CODE",{});var _r=s(A);P=l(_r,"HfApi"),_r.forEach(t),O=l(Ba,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Ba.forEach(t),L=d(n),m=a(n,"P",{});var Ka=s(m);D=l(Ka,"All methods from the "),z=a(Ka,"CODE",{});var br=s(z);V=l(br,"HfApi"),br.forEach(t),R=l(Ka,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Ka.forEach(t),K=d(n),G=a(n,"P",{});var vr=s(G);E=l(vr,"The following approach uses the method from the root of the package:"),vr.forEach(t),S=d(n),q(C.$$.fragment,n),Y=d(n),te=a(n,"P",{});var Ja=s(te);Z=l(Ja,"The following approach uses the "),J=a(Ja,"CODE",{});var $r=s(J);ee=l($r,"HfApi"),$r.forEach(t),ae=l(Ja," class:"),Ja.forEach(t),B=d(n),q(X.$$.fragment,n),oe=d(n),ne=a(n,"P",{});var Qa=s(ne);We=l(Qa,"Using the "),_e=a(Qa,"CODE",{});var yr=s(_e);it=l(yr,"HfApi"),yr.forEach(t),Ge=l(Qa," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Qa.forEach(t),Oe=d(n),M=a(n,"DIV",{class:!0});var W=s(M);q(Ee.$$.fragment,W),sn=d(W),de=a(W,"DIV",{class:!0});var Ve=s(de);q(Le.$$.fragment,Ve),rn=d(Ve),lt=a(Ve,"P",{});var Er=s(lt);ln=l(Er,"Closes or re-opens a Discussion or Pull Request."),Er.forEach(t),qi=d(Ve),q(bt.$$.fragment,Ve),ji=d(Ve),q(vt.$$.fragment,Ve),Ve.forEach(t),Ii=d(W),ke=a(W,"DIV",{class:!0});var ze=s(ke);q(Io.$$.fragment,ze),Ni=d(ze),Cn=a(ze,"P",{});var wr=s(Cn);Fi=l(wr,"Creates a new comment on the given Discussion."),wr.forEach(t),Ti=d(ze),q($t.$$.fragment,ze),Pi=d(ze),q(yt.$$.fragment,ze),ze.forEach(t),Oi=d(W),Et=a(W,"DIV",{class:!0});var Xa=s(Et);q(No.$$.fragment,Xa),Li=d(Xa),Sn=a(Xa,"P",{});var kr=s(Sn);Ri=l(kr,"Creates a commit in the given repo, deleting & uploading files as needed."),kr.forEach(t),Xa.forEach(t),Ci=d(W),le=a(W,"DIV",{class:!0});var fe=s(le);q(Fo.$$.fragment,fe),Si=d(fe),Mn=a(fe,"P",{});var Ar=s(Mn);Mi=l(Ar,"Creates a Discussion or Pull Request."),Ar.forEach(t),Ui=d(fe),To=a(fe,"P",{});var Ya=s(To);Vi=l(Ya,"Pull Requests created programmatically will be in "),Un=a(Ya,"CODE",{});var xr=s(Un);zi=l(xr,'"draft"'),xr.forEach(t),Wi=l(Ya," status."),Ya.forEach(t),Gi=d(fe),Po=a(fe,"P",{});var Za=s(Po);Bi=l(Za,"Creating a Pull Request with changes can also be done at once with "),cn=a(Za,"A",{href:!0});var Dr=s(cn);Ki=l(Dr,"HfApi.create_commit()"),Dr.forEach(t),Ji=l(Za,"."),Za.forEach(t),Qi=d(fe),pn=a(fe,"P",{});var En=s(pn);Xi=l(En,"Returns: "),gn=a(En,"A",{href:!0});var Hr=s(gn);Yi=l(Hr,"DiscussionWithDetails"),Hr.forEach(t),En.forEach(t),Zi=d(fe),q(wt.$$.fragment,fe),fe.forEach(t),el=d(W),ce=a(W,"DIV",{class:!0});var me=s(ce);q(Oo.$$.fragment,me),tl=d(me),Lo=a(me,"P",{});var en=s(Lo);ol=l(en,"Creates a Pull Request . Pull Requests created programmatically will be in "),Vn=a(en,"CODE",{});var qr=s(Vn);al=l(qr,'"draft"'),qr.forEach(t),nl=l(en," status."),en.forEach(t),sl=d(me),Ro=a(me,"P",{});var tn=s(Ro);rl=l(tn,"Creating a Pull Request with changes can also be done at once with "),dn=a(tn,"A",{href:!0});var jr=s(dn);il=l(jr,"HfApi.create_commit()"),jr.forEach(t),ll=l(tn,";"),tn.forEach(t),cl=d(me),Co=a(me,"P",{});var on=s(Co);pl=l(on,"This is a wrapper around "),zn=a(on,"CODE",{});var Ir=s(zn);gl=l(Ir,"HfApi.create_discusssion"),Ir.forEach(t),dl=l(on,"."),on.forEach(t),hl=d(me),hn=a(me,"P",{});var wn=s(hn);ul=l(wn,"Returns: "),un=a(wn,"A",{href:!0});var sh=s(un);fl=l(sh,"DiscussionWithDetails"),sh.forEach(t),wn.forEach(t),ml=d(me),q(kt.$$.fragment,me),me.forEach(t),_l=d(W),At=a(W,"DIV",{class:!0});var Xr=s(At);q(So.$$.fragment,Xr),bl=d(Xr),Wn=a(Xr,"P",{});var rh=s(Wn);vl=l(rh,"Create an empty repo on the HuggingFace Hub."),rh.forEach(t),Xr.forEach(t),$l=d(W),Ae=a(W,"DIV",{class:!0});var $o=s(Ae);q(Mo.$$.fragment,$o),yl=d($o),Gn=a($o,"P",{});var ih=s(Gn);El=l(ih,"Get info on one specific dataset on huggingface.co."),ih.forEach(t),wl=d($o),Bn=a($o,"P",{});var lh=s(Bn);kl=l(lh,"Dataset can be private if you pass an acceptable token."),lh.forEach(t),Al=d($o),q(xt.$$.fragment,$o),$o.forEach(t),xl=d(W),Be=a(W,"DIV",{class:!0});var kn=s(Be);q(Uo.$$.fragment,kn),Dl=d(kn),Kn=a(kn,"P",{});var ch=s(Kn);Hl=l(ch,"Deletes a file in the given repo."),ch.forEach(t),ql=d(kn),q(Dt.$$.fragment,kn),kn.forEach(t),jl=d(W),Ke=a(W,"DIV",{class:!0});var An=s(Ke);q(Vo.$$.fragment,An),Il=d(An),Jn=a(An,"P",{});var ph=s(Jn);Nl=l(ph,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),ph.forEach(t),Fl=d(An),q(Ht.$$.fragment,An),An.forEach(t),Tl=d(W),Je=a(W,"DIV",{class:!0});var xn=s(Je);q(zo.$$.fragment,xn),Pl=d(xn),Qn=a(xn,"P",{});var gh=s(Qn);Ol=l(gh,"Edits a comment on a Discussion / Pull Request."),gh.forEach(t),Ll=d(xn),q(qt.$$.fragment,xn),xn.forEach(t),Rl=d(W),jt=a(W,"DIV",{class:!0});var Yr=s(jt);q(Wo.$$.fragment,Yr),Cl=d(Yr),Xn=a(Yr,"P",{});var dh=s(Xn);Sl=l(dh,"Gets all valid dataset tags as a nested namespace object."),dh.forEach(t),Yr.forEach(t),Ml=d(W),xe=a(W,"DIV",{class:!0});var yo=s(xe);q(Go.$$.fragment,yo),Ul=d(yo),Yn=a(yo,"P",{});var hh=s(Yn);Vl=l(hh,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),hh.forEach(t),zl=d(yo),fn=a(yo,"P",{});var eh=s(fn);Wl=l(eh,"Returns: "),mn=a(eh,"A",{href:!0});var uh=s(mn);Gl=l(uh,"DiscussionWithDetails"),uh.forEach(t),eh.forEach(t),Bl=d(yo),q(It.$$.fragment,yo),yo.forEach(t),Kl=d(W),Nt=a(W,"DIV",{class:!0});var Zr=s(Nt);q(Bo.$$.fragment,Zr),Jl=d(Zr),Zn=a(Zr,"P",{});var fh=s(Zn);Ql=l(fh,`Returns the repository name for a given model ID and optional
organization.`),fh.forEach(t),Zr.forEach(t),Xl=d(W),Ft=a(W,"DIV",{class:!0});var ei=s(Ft);q(Ko.$$.fragment,ei),Yl=d(ei),es=a(ei,"P",{});var mh=s(es);Zl=l(mh,"Gets all valid model tags as a nested namespace object"),mh.forEach(t),ei.forEach(t),ec=d(W),be=a(W,"DIV",{class:!0});var at=s(be);q(Jo.$$.fragment,at),tc=d(at),ts=a(at,"P",{});var _h=s(ts);oc=l(_h,"Fetches Discussions and Pull Requests for the given repo."),_h.forEach(t),ac=d(at),os=a(at,"P",{});var bh=s(os);nc=l(bh,"Example:"),bh.forEach(t),sc=d(at),q(Tt.$$.fragment,at),rc=d(at),q(Pt.$$.fragment,at),at.forEach(t),ic=d(W),De=a(W,"DIV",{class:!0});var Eo=s(De);q(Qo.$$.fragment,Eo),lc=d(Eo),as=a(Eo,"P",{});var vh=s(as);cc=l(vh,"Hides a comment on a Discussion / Pull Request."),vh.forEach(t),pc=d(Eo),q(Ot.$$.fragment,Eo),gc=d(Eo),q(Lt.$$.fragment,Eo),Eo.forEach(t),dc=d(W),He=a(W,"DIV",{class:!0});var wo=s(He);q(Xo.$$.fragment,wo),hc=d(wo),ns=a(wo,"P",{});var $h=s(ns);uc=l($h,"Get the public list of all the datasets on huggingface.co"),$h.forEach(t),fc=d(wo),q(Rt.$$.fragment,wo),mc=d(wo),q(Ct.$$.fragment,wo),wo.forEach(t),_c=d(W),St=a(W,"DIV",{class:!0});var ti=s(St);q(Yo.$$.fragment,ti),bc=d(ti),ss=a(ti,"P",{});var yh=s(ss);vc=l(yh,"Get the public list of all the metrics on huggingface.co"),yh.forEach(t),ti.forEach(t),$c=d(W),ve=a(W,"DIV",{class:!0});var nt=s(ve);q(Zo.$$.fragment,nt),yc=d(nt),rs=a(nt,"P",{});var Eh=s(rs);Ec=l(Eh,"Get the public list of all the models on huggingface.co"),Eh.forEach(t),wc=d(nt),ea=a(nt,"P",{});var oi=s(ea);kc=l(oi,"Returns: List of "),_n=a(oi,"A",{href:!0});var wh=s(_n);Ac=l(wh,"huggingface_hub.hf_api.ModelInfo"),wh.forEach(t),xc=l(oi," objects"),oi.forEach(t),Dc=d(nt),q(Mt.$$.fragment,nt),Hc=d(nt),q(Ut.$$.fragment,nt),nt.forEach(t),qc=d(W),Vt=a(W,"DIV",{class:!0});var ai=s(Vt);q(ta.$$.fragment,ai),jc=d(ai),is=a(ai,"P",{});var kh=s(is);Ic=l(kh,"Get the list of files in a given repo."),kh.forEach(t),ai.forEach(t),Nc=d(W),zt=a(W,"DIV",{class:!0});var ni=s(zt);q(oa.$$.fragment,ni),Fc=d(ni),ls=a(ni,"P",{});var Ah=s(ls);Tc=l(Ah,"Get the public list of all Spaces on huggingface.co"),Ah.forEach(t),ni.forEach(t),Pc=d(W),Qe=a(W,"DIV",{class:!0});var Dn=s(Qe);q(aa.$$.fragment,Dn),Oc=d(Dn),cs=a(Dn,"P",{});var xh=s(cs);Lc=l(xh,"Merges a Pull Request."),xh.forEach(t),Rc=d(Dn),q(Wt.$$.fragment,Dn),Dn.forEach(t),Cc=d(W),qe=a(W,"DIV",{class:!0});var ko=s(qe);q(na.$$.fragment,ko),Sc=d(ko),ps=a(ko,"P",{});var Dh=s(ps);Mc=l(Dh,"Get info on one specific model on huggingface.co"),Dh.forEach(t),Uc=d(ko),gs=a(ko,"P",{});var Hh=s(gs);Vc=l(Hh,"Model can be private if you pass an acceptable token or are logged in."),Hh.forEach(t),zc=d(ko),q(Gt.$$.fragment,ko),ko.forEach(t),Wc=d(W),je=a(W,"DIV",{class:!0});var Ao=s(je);q(sa.$$.fragment,Ao),Gc=d(Ao),ds=a(Ao,"P",{});var qh=s(ds);Bc=l(qh,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),qh.forEach(t),Kc=d(Ao),ra=a(Ao,"P",{});var si=s(ra);Jc=l(si,`Note there are certain limitations. For more information about moving
repositories, please see
`),ia=a(si,"A",{href:!0,rel:!0});var jh=s(ia);Qc=l(jh,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),jh.forEach(t),Xc=l(si,"."),si.forEach(t),Yc=d(Ao),q(Bt.$$.fragment,Ao),Ao.forEach(t),Zc=d(W),Ie=a(W,"DIV",{class:!0});var xo=s(Ie);q(la.$$.fragment,xo),ep=d(xo),hs=a(xo,"P",{});var Ih=s(hs);tp=l(Ih,"Renames a Discussion."),Ih.forEach(t),op=d(xo),q(Kt.$$.fragment,xo),ap=d(xo),q(Jt.$$.fragment,xo),xo.forEach(t),np=d(W),Xe=a(W,"DIV",{class:!0});var Hn=s(Xe);q(ca.$$.fragment,Hn),sp=d(Hn),us=a(Hn,"P",{});var Nh=s(us);rp=l(Nh,"Get the info object for a given repo of a given type."),Nh.forEach(t),ip=d(Hn),q(Qt.$$.fragment,Hn),Hn.forEach(t),lp=d(W),Xt=a(W,"DIV",{class:!0});var ri=s(Xt);q(pa.$$.fragment,ri),cp=d(ri),fs=a(ri,"P",{});var Fh=s(fs);pp=l(Fh,`Saves the passed access token so git can correctly authenticate the
user.`),Fh.forEach(t),ri.forEach(t),gp=d(W),Ne=a(W,"DIV",{class:!0});var Do=s(Ne);q(ga.$$.fragment,Do),dp=d(Do),ms=a(Do,"P",{});var Th=s(ms);hp=l(Th,"Get info on one specific Space on huggingface.co."),Th.forEach(t),up=d(Do),_s=a(Do,"P",{});var Ph=s(_s);fp=l(Ph,"Space can be private if you pass an acceptable token."),Ph.forEach(t),mp=d(Do),q(Yt.$$.fragment,Do),Do.forEach(t),_p=d(W),Zt=a(W,"DIV",{class:!0});var ii=s(Zt);q(da.$$.fragment,ii),bp=d(ii),bs=a(ii,"P",{});var Oh=s(bs);vp=l(Oh,"Resets the user\u2019s access token."),Oh.forEach(t),ii.forEach(t),$p=d(W),Ye=a(W,"DIV",{class:!0});var qn=s(Ye);q(ha.$$.fragment,qn),yp=d(qn),vs=a(qn,"P",{});var Lh=s(vs);Ep=l(Lh,"Update the visibility setting of a repository."),Lh.forEach(t),wp=d(qn),q(eo.$$.fragment,qn),qn.forEach(t),kp=d(W),Fe=a(W,"DIV",{class:!0});var Ho=s(Fe);q(ua.$$.fragment,Ho),Ap=d(Ho),$s=a(Ho,"P",{});var Rh=s($s);xp=l(Rh,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Rh.forEach(t),Dp=d(Ho),q(to.$$.fragment,Ho),Hp=d(Ho),q(oo.$$.fragment,Ho),Ho.forEach(t),qp=d(W),re=a(W,"DIV",{class:!0});var ye=s(re);q(fa.$$.fragment,ye),jp=d(ye),ys=a(ye,"P",{});var Ch=s(ys);Ip=l(Ch,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ch.forEach(t),Np=d(ye),Es=a(ye,"P",{});var Sh=s(Es);Fp=l(Sh,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Sh.forEach(t),Tp=d(ye),he=a(ye,"P",{});var Pe=s(he);Pp=l(Pe,"Use the "),ws=a(Pe,"CODE",{});var Mh=s(ws);Op=l(Mh,"allow_patterns"),Mh.forEach(t),Lp=l(Pe," and "),ks=a(Pe,"CODE",{});var Uh=s(ks);Rp=l(Uh,"ignore_patterns"),Uh.forEach(t),Cp=l(Pe,` arguments to specify which files
to upload. These parameters accept either a single pattern or a list of
patterns. Patterns are Standard Wildcards (globbing patterns) as documented
`),ma=a(Pe,"A",{href:!0,rel:!0});var Vh=s(ma);Sp=l(Vh,"here"),Vh.forEach(t),Mp=l(Pe,`. If both
`),As=a(Pe,"CODE",{});var zh=s(As);Up=l(zh,"allow_patterns"),zh.forEach(t),Vp=l(Pe," and "),xs=a(Pe,"CODE",{});var Wh=s(xs);zp=l(Wh,"ignore_patterns"),Wh.forEach(t),Wp=l(Pe,` are provided, both constraints apply. By
default, all files from the folder are uploaded.`),Pe.forEach(t),Gp=d(ye),_a=a(ye,"P",{});var li=s(_a);Bp=l(li,"Uses "),Ds=a(li,"CODE",{});var Gh=s(Ds);Kp=l(Gh,"HfApi.create_commit"),Gh.forEach(t),Jp=l(li," under the hood."),li.forEach(t),Qp=d(ye),q(ao.$$.fragment,ye),Xp=d(ye),q(no.$$.fragment,ye),ye.forEach(t),Yp=d(W),so=a(W,"DIV",{class:!0});var ci=s(so);q(ba.$$.fragment,ci),Zp=d(ci),Hs=a(ci,"P",{});var Bh=s(Hs);eg=l(Bh,"Call HF API to know \u201Cwhoami\u201D."),Bh.forEach(t),ci.forEach(t),W.forEach(t),Nr=d(n),ct=a(n,"DIV",{class:!0});var pi=s(ct);q(va.$$.fragment,pi),tg=d(pi),qs=a(pi,"P",{});var Kh=s(qs);og=l(Kh,"Info about a model accessible from huggingface.co"),Kh.forEach(t),pi.forEach(t),Fr=d(n),pt=a(n,"DIV",{class:!0});var gi=s(pt);q($a.$$.fragment,gi),ag=d(gi),js=a(gi,"P",{});var Jh=s(js);ng=l(Jh,"Info about a dataset accessible from huggingface.co"),Jh.forEach(t),gi.forEach(t),Tr=d(n),Re=a(n,"DIV",{class:!0});var jn=s(Re);q(ya.$$.fragment,jn),sg=d(jn),Is=a(jn,"P",{});var Qh=s(Is);rg=l(Qh,"Info about a Space accessible from huggingface.co"),Qh.forEach(t),ig=d(jn),Ns=a(jn,"P",{});var Xh=s(Ns);lg=l(Xh,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Xh.forEach(t),jn.forEach(t),Pr=d(n),gt=a(n,"DIV",{class:!0});var di=s(gt);q(Ea.$$.fragment,di),cg=d(di),Fs=a(di,"P",{});var Yh=s(Fs);pg=l(Yh,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Yh.forEach(t),di.forEach(t),Or=d(n),dt=a(n,"H2",{class:!0});var hi=s(dt);ro=a(hi,"A",{id:!0,class:!0,href:!0});var Zh=s(ro);Ts=a(Zh,"SPAN",{});var eu=s(Ts);q(wa.$$.fragment,eu),eu.forEach(t),Zh.forEach(t),gg=d(hi),bn=a(hi,"SPAN",{});var th=s(bn);Ps=a(th,"CODE",{});var tu=s(Ps);dg=l(tu,"create_commit"),tu.forEach(t),hg=l(th," API"),th.forEach(t),hi.forEach(t),Lr=d(n),io=a(n,"P",{});var ui=s(io);ug=l(ui,"Below are the supported values for "),Os=a(ui,"CODE",{});var ou=s(Os);fg=l(ou,"CommitOperation()"),ou.forEach(t),mg=l(ui,":"),ui.forEach(t),Rr=d(n),ue=a(n,"DIV",{class:!0});var st=s(ue);q(ka.$$.fragment,st),_g=d(st),Ls=a(st,"P",{});var au=s(Ls);bg=l(au,`Data structure holding necessary info to upload a file
to a repository on the Hub`),au.forEach(t),vg=d(st),$e=a(st,"DIV",{class:!0});var rt=s($e);q(Aa.$$.fragment,rt),$g=d(rt),xa=a(rt,"P",{});var fi=s(xa);yg=l(fi,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Rs=a(fi,"CODE",{});var nu=s(Rs);Eg=l(nu,"path_or_fileobj"),nu.forEach(t),wg=l(fi,"."),fi.forEach(t),kg=d(rt),Da=a(rt,"P",{});var mi=s(Da);Ag=l(mi,"Triggers "),Cs=a(mi,"CODE",{});var su=s(Cs);xg=l(su,"self.validate"),su.forEach(t),Dg=l(mi,"."),mi.forEach(t),Hg=d(rt),Ha=a(rt,"P",{});var _i=s(Ha);qg=l(_i,"Raises: "),Ss=a(_i,"CODE",{});var ru=s(Ss);jg=l(ru,"ValueError"),ru.forEach(t),Ig=l(_i," if self.validate fails"),_i.forEach(t),Ng=d(rt),q(lo.$$.fragment,rt),rt.forEach(t),Fg=d(st),Ze=a(st,"DIV",{class:!0});var In=s(Ze);q(qa.$$.fragment,In),Tg=d(In),vn=a(In,"P",{});var oh=s(vn);Pg=l(oh,"The base64-encoded content of "),Ms=a(oh,"CODE",{});var iu=s(Ms);Og=l(iu,"path_or_fileobj"),iu.forEach(t),oh.forEach(t),Lg=d(In),$n=a(In,"P",{});var ah=s($n);Rg=l(ah,"Returns: "),Us=a(ah,"CODE",{});var lu=s(Us);Cg=l(lu,"bytes"),lu.forEach(t),ah.forEach(t),In.forEach(t),Sg=d(st),Te=a(st,"DIV",{class:!0});var qo=s(Te);q(ja.$$.fragment,qo),Mg=d(qo),Ia=a(qo,"P",{});var bi=s(Ia);Ug=l(bi,"Ensures "),Vs=a(bi,"CODE",{});var cu=s(Vs);Vg=l(cu,"path_or_fileobj"),cu.forEach(t),zg=l(bi," is valid:"),bi.forEach(t),Wg=d(qo),ht=a(qo,"UL",{});var Nn=s(ht);et=a(Nn,"LI",{});var an=s(et);Gg=l(an,"Ensures it is either a "),zs=a(an,"CODE",{});var pu=s(zs);Bg=l(pu,"str"),pu.forEach(t),Kg=l(an,", "),Ws=a(an,"CODE",{});var gu=s(Ws);Jg=l(gu,"bytes"),gu.forEach(t),Qg=l(an," or an instance of "),Gs=a(an,"CODE",{});var du=s(Gs);Xg=l(du,"io.BufferedIOBase"),du.forEach(t),an.forEach(t),Yg=d(Nn),Na=a(Nn,"LI",{});var vi=s(Na);Zg=l(vi,"If it is a "),Bs=a(vi,"CODE",{});var hu=s(Bs);ed=l(hu,"str"),hu.forEach(t),td=l(vi,", ensure that it is a file path and that the file exists"),vi.forEach(t),od=d(Nn),tt=a(Nn,"LI",{});var nn=s(tt);ad=l(nn,"If it is an instance of "),Ks=a(nn,"CODE",{});var uu=s(Ks);nd=l(uu,"io.BufferedIOBase"),uu.forEach(t),sd=l(nn,", ensures it supports "),Js=a(nn,"CODE",{});var fu=s(Js);rd=l(fu,"seek()"),fu.forEach(t),id=l(nn," and "),Qs=a(nn,"CODE",{});var mu=s(Qs);ld=l(mu,"tell()"),mu.forEach(t),nn.forEach(t),Nn.forEach(t),cd=d(qo),ut=a(qo,"P",{});var Fn=s(ut);pd=l(Fn,"Raises: "),Xs=a(Fn,"CODE",{});var _u=s(Xs);gd=l(_u,"ValueError"),_u.forEach(t),dd=l(Fn," if "),Ys=a(Fn,"CODE",{});var bu=s(Ys);hd=l(bu,"path_or_fileobj"),bu.forEach(t),ud=l(Fn," is not valid"),Fn.forEach(t),qo.forEach(t),st.forEach(t),Cr=d(n),ft=a(n,"DIV",{class:!0});var $i=s(ft);q(Fa.$$.fragment,$i),fd=d($i),Zs=a($i,"P",{});var vu=s(Zs);md=l(vu,`Data structure holding necessary info to delete
a file from a repository on the Hub`),vu.forEach(t),$i.forEach(t),Sr=d(n),mt=a(n,"H2",{class:!0});var yi=s(mt);co=a(yi,"A",{id:!0,class:!0,href:!0});var $u=s(co);er=a($u,"SPAN",{});var yu=s(er);q(Ta.$$.fragment,yu),yu.forEach(t),$u.forEach(t),_d=d(yi),tr=a(yi,"SPAN",{});var Eu=s(tr);bd=l(Eu,"Hugging Face local storage"),Eu.forEach(t),yi.forEach(t),Mr=d(n),Pa=a(n,"P",{});var nh=s(Pa);or=a(nh,"CODE",{});var wu=s(or);vd=l(wu,"huggingface_hub"),wu.forEach(t),$d=l(nh,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),nh.forEach(t),Ur=d(n),po=a(n,"P",{});var Ei=s(po);yd=l(Ei,"It does this using the "),yn=a(Ei,"A",{href:!0});var ku=s(yn);Ed=l(ku,"HfFolder"),ku.forEach(t),wd=l(Ei," utility, which saves data at the root of the user."),Ei.forEach(t),Vr=d(n),we=a(n,"DIV",{class:!0});var jo=s(we);q(Oa.$$.fragment,jo),kd=d(jo),go=a(jo,"DIV",{class:!0});var wi=s(go);q(La.$$.fragment,wi),Ad=d(wi),ar=a(wi,"P",{});var Au=s(ar);xd=l(Au,"Deletes the token from storage. Does not fail if token does not exist."),Au.forEach(t),wi.forEach(t),Dd=d(jo),ot=a(jo,"DIV",{class:!0});var Tn=s(ot);q(Ra.$$.fragment,Tn),Hd=d(Tn),nr=a(Tn,"P",{});var xu=s(nr);qd=l(xu,"Get token or None if not existent."),xu.forEach(t),jd=d(Tn),Ca=a(Tn,"P",{});var ki=s(Ca);Id=l(ki,`Note that a token can be also provided using the
`),sr=a(ki,"CODE",{});var Du=s(sr);Nd=l(Du,"HUGGING_FACE_HUB_TOKEN"),Du.forEach(t),Fd=l(ki," environment variable."),ki.forEach(t),Tn.forEach(t),Td=d(jo),ho=a(jo,"DIV",{class:!0});var Ai=s(ho);q(Sa.$$.fragment,Ai),Pd=d(Ai),rr=a(Ai,"P",{});var Hu=s(rr);Od=l(Hu,"Save token, creating folder as needed."),Hu.forEach(t),Ai.forEach(t),jo.forEach(t),zr=d(n),_t=a(n,"H2",{class:!0});var xi=s(_t);uo=a(xi,"A",{id:!0,class:!0,href:!0});var qu=s(uo);ir=a(qu,"SPAN",{});var ju=s(ir);q(Ma.$$.fragment,ju),ju.forEach(t),qu.forEach(t),Ld=d(xi),lr=a(xi,"SPAN",{});var Iu=s(lr);Rd=l(Iu,"Filtering helpers"),Iu.forEach(t),xi.forEach(t),Wr=d(n),fo=a(n,"P",{});var Di=s(fo);Cd=l(Di,"Some helpers to filter repositories on the Hub are available in the "),cr=a(Di,"CODE",{});var Nu=s(cr);Sd=l(Nu,"huggingface_hub"),Nu.forEach(t),Md=l(Di," package."),Di.forEach(t),Gr=d(n),Ce=a(n,"DIV",{class:!0});var Pn=s(Ce);q(Ua.$$.fragment,Pn),Ud=d(Pn),pr=a(Pn,"P",{});var Fu=s(pr);Vd=l(Fu,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Fu.forEach(t),zd=d(Pn),q(mo.$$.fragment,Pn),Pn.forEach(t),Br=d(n),Se=a(n,"DIV",{class:!0});var On=s(Se);q(Va.$$.fragment,On),Wd=d(On),gr=a(On,"P",{});var Tu=s(gr);Gd=l(Tu,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Tu.forEach(t),Bd=d(On),q(_o.$$.fragment,On),On.forEach(t),Kr=d(n),Me=a(n,"DIV",{class:!0});var Ln=s(Me);q(za.$$.fragment,Ln),Kd=d(Ln),dr=a(Ln,"P",{});var Pu=s(dr);Jd=l(Pu,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Pu.forEach(t),Qd=d(Ln),q(bo.$$.fragment,Ln),Ln.forEach(t),Jr=d(n),Ue=a(n,"DIV",{class:!0});var Rn=s(Ue);q(Wa.$$.fragment,Rn),Xd=d(Rn),hr=a(Rn,"P",{});var Ou=s(hr);Yd=l(Ou,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ou.forEach(t),Zd=d(Rn),q(vo.$$.fragment,Rn),Rn.forEach(t),this.h()},h(){b(p,"name","hf:doc:metadata"),b(p,"content",JSON.stringify(xf)),b(c,"id","huggingface_hub.HfApi"),b(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(c,"href","#huggingface_hub.HfApi"),b(f,"class","relative group"),b(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(cn,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),b(gn,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),b(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(dn,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),b(un,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),b(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mn,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),b(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(_n,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),b(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ia,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),b(ia,"rel","nofollow"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ma,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),b(ma,"rel","nofollow"),b(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ro,"id","huggingface_hub.CommitOperationAdd"),b(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ro,"href","#huggingface_hub.CommitOperationAdd"),b(dt,"class","relative group"),b($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(co,"id","huggingface_hub.HfFolder"),b(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(co,"href","#huggingface_hub.HfFolder"),b(mt,"class","relative group"),b(yn,"href","/docs/huggingface_hub/v0.9.0.rc0/en/package_reference/hf_api#huggingface_hub.HfFolder"),b(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(uo,"id","huggingface_hub.DatasetFilter"),b(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(uo,"href","#huggingface_hub.DatasetFilter"),b(_t,"class","relative group"),b(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,k){e(document.head,p),y(n,v,k),y(n,f,k),e(f,c),e(c,h),j(r,h,null),e(f,u),e(f,T),e(T,_),y(n,x,k),y(n,w,k),e(w,$),e(w,A),e(A,P),e(w,O),y(n,L,k),y(n,m,k),e(m,D),e(m,z),e(z,V),e(m,R),y(n,K,k),y(n,G,k),e(G,E),y(n,S,k),j(C,n,k),y(n,Y,k),y(n,te,k),e(te,Z),e(te,J),e(J,ee),e(te,ae),y(n,B,k),j(X,n,k),y(n,oe,k),y(n,ne,k),e(ne,We),e(ne,_e),e(_e,it),e(ne,Ge),y(n,Oe,k),y(n,M,k),j(Ee,M,null),e(M,sn),e(M,de),j(Le,de,null),e(de,rn),e(de,lt),e(lt,ln),e(de,qi),j(bt,de,null),e(de,ji),j(vt,de,null),e(M,Ii),e(M,ke),j(Io,ke,null),e(ke,Ni),e(ke,Cn),e(Cn,Fi),e(ke,Ti),j($t,ke,null),e(ke,Pi),j(yt,ke,null),e(M,Oi),e(M,Et),j(No,Et,null),e(Et,Li),e(Et,Sn),e(Sn,Ri),e(M,Ci),e(M,le),j(Fo,le,null),e(le,Si),e(le,Mn),e(Mn,Mi),e(le,Ui),e(le,To),e(To,Vi),e(To,Un),e(Un,zi),e(To,Wi),e(le,Gi),e(le,Po),e(Po,Bi),e(Po,cn),e(cn,Ki),e(Po,Ji),e(le,Qi),e(le,pn),e(pn,Xi),e(pn,gn),e(gn,Yi),e(le,Zi),j(wt,le,null),e(M,el),e(M,ce),j(Oo,ce,null),e(ce,tl),e(ce,Lo),e(Lo,ol),e(Lo,Vn),e(Vn,al),e(Lo,nl),e(ce,sl),e(ce,Ro),e(Ro,rl),e(Ro,dn),e(dn,il),e(Ro,ll),e(ce,cl),e(ce,Co),e(Co,pl),e(Co,zn),e(zn,gl),e(Co,dl),e(ce,hl),e(ce,hn),e(hn,ul),e(hn,un),e(un,fl),e(ce,ml),j(kt,ce,null),e(M,_l),e(M,At),j(So,At,null),e(At,bl),e(At,Wn),e(Wn,vl),e(M,$l),e(M,Ae),j(Mo,Ae,null),e(Ae,yl),e(Ae,Gn),e(Gn,El),e(Ae,wl),e(Ae,Bn),e(Bn,kl),e(Ae,Al),j(xt,Ae,null),e(M,xl),e(M,Be),j(Uo,Be,null),e(Be,Dl),e(Be,Kn),e(Kn,Hl),e(Be,ql),j(Dt,Be,null),e(M,jl),e(M,Ke),j(Vo,Ke,null),e(Ke,Il),e(Ke,Jn),e(Jn,Nl),e(Ke,Fl),j(Ht,Ke,null),e(M,Tl),e(M,Je),j(zo,Je,null),e(Je,Pl),e(Je,Qn),e(Qn,Ol),e(Je,Ll),j(qt,Je,null),e(M,Rl),e(M,jt),j(Wo,jt,null),e(jt,Cl),e(jt,Xn),e(Xn,Sl),e(M,Ml),e(M,xe),j(Go,xe,null),e(xe,Ul),e(xe,Yn),e(Yn,Vl),e(xe,zl),e(xe,fn),e(fn,Wl),e(fn,mn),e(mn,Gl),e(xe,Bl),j(It,xe,null),e(M,Kl),e(M,Nt),j(Bo,Nt,null),e(Nt,Jl),e(Nt,Zn),e(Zn,Ql),e(M,Xl),e(M,Ft),j(Ko,Ft,null),e(Ft,Yl),e(Ft,es),e(es,Zl),e(M,ec),e(M,be),j(Jo,be,null),e(be,tc),e(be,ts),e(ts,oc),e(be,ac),e(be,os),e(os,nc),e(be,sc),j(Tt,be,null),e(be,rc),j(Pt,be,null),e(M,ic),e(M,De),j(Qo,De,null),e(De,lc),e(De,as),e(as,cc),e(De,pc),j(Ot,De,null),e(De,gc),j(Lt,De,null),e(M,dc),e(M,He),j(Xo,He,null),e(He,hc),e(He,ns),e(ns,uc),e(He,fc),j(Rt,He,null),e(He,mc),j(Ct,He,null),e(M,_c),e(M,St),j(Yo,St,null),e(St,bc),e(St,ss),e(ss,vc),e(M,$c),e(M,ve),j(Zo,ve,null),e(ve,yc),e(ve,rs),e(rs,Ec),e(ve,wc),e(ve,ea),e(ea,kc),e(ea,_n),e(_n,Ac),e(ea,xc),e(ve,Dc),j(Mt,ve,null),e(ve,Hc),j(Ut,ve,null),e(M,qc),e(M,Vt),j(ta,Vt,null),e(Vt,jc),e(Vt,is),e(is,Ic),e(M,Nc),e(M,zt),j(oa,zt,null),e(zt,Fc),e(zt,ls),e(ls,Tc),e(M,Pc),e(M,Qe),j(aa,Qe,null),e(Qe,Oc),e(Qe,cs),e(cs,Lc),e(Qe,Rc),j(Wt,Qe,null),e(M,Cc),e(M,qe),j(na,qe,null),e(qe,Sc),e(qe,ps),e(ps,Mc),e(qe,Uc),e(qe,gs),e(gs,Vc),e(qe,zc),j(Gt,qe,null),e(M,Wc),e(M,je),j(sa,je,null),e(je,Gc),e(je,ds),e(ds,Bc),e(je,Kc),e(je,ra),e(ra,Jc),e(ra,ia),e(ia,Qc),e(ra,Xc),e(je,Yc),j(Bt,je,null),e(M,Zc),e(M,Ie),j(la,Ie,null),e(Ie,ep),e(Ie,hs),e(hs,tp),e(Ie,op),j(Kt,Ie,null),e(Ie,ap),j(Jt,Ie,null),e(M,np),e(M,Xe),j(ca,Xe,null),e(Xe,sp),e(Xe,us),e(us,rp),e(Xe,ip),j(Qt,Xe,null),e(M,lp),e(M,Xt),j(pa,Xt,null),e(Xt,cp),e(Xt,fs),e(fs,pp),e(M,gp),e(M,Ne),j(ga,Ne,null),e(Ne,dp),e(Ne,ms),e(ms,hp),e(Ne,up),e(Ne,_s),e(_s,fp),e(Ne,mp),j(Yt,Ne,null),e(M,_p),e(M,Zt),j(da,Zt,null),e(Zt,bp),e(Zt,bs),e(bs,vp),e(M,$p),e(M,Ye),j(ha,Ye,null),e(Ye,yp),e(Ye,vs),e(vs,Ep),e(Ye,wp),j(eo,Ye,null),e(M,kp),e(M,Fe),j(ua,Fe,null),e(Fe,Ap),e(Fe,$s),e($s,xp),e(Fe,Dp),j(to,Fe,null),e(Fe,Hp),j(oo,Fe,null),e(M,qp),e(M,re),j(fa,re,null),e(re,jp),e(re,ys),e(ys,Ip),e(re,Np),e(re,Es),e(Es,Fp),e(re,Tp),e(re,he),e(he,Pp),e(he,ws),e(ws,Op),e(he,Lp),e(he,ks),e(ks,Rp),e(he,Cp),e(he,ma),e(ma,Sp),e(he,Mp),e(he,As),e(As,Up),e(he,Vp),e(he,xs),e(xs,zp),e(he,Wp),e(re,Gp),e(re,_a),e(_a,Bp),e(_a,Ds),e(Ds,Kp),e(_a,Jp),e(re,Qp),j(ao,re,null),e(re,Xp),j(no,re,null),e(M,Yp),e(M,so),j(ba,so,null),e(so,Zp),e(so,Hs),e(Hs,eg),y(n,Nr,k),y(n,ct,k),j(va,ct,null),e(ct,tg),e(ct,qs),e(qs,og),y(n,Fr,k),y(n,pt,k),j($a,pt,null),e(pt,ag),e(pt,js),e(js,ng),y(n,Tr,k),y(n,Re,k),j(ya,Re,null),e(Re,sg),e(Re,Is),e(Is,rg),e(Re,ig),e(Re,Ns),e(Ns,lg),y(n,Pr,k),y(n,gt,k),j(Ea,gt,null),e(gt,cg),e(gt,Fs),e(Fs,pg),y(n,Or,k),y(n,dt,k),e(dt,ro),e(ro,Ts),j(wa,Ts,null),e(dt,gg),e(dt,bn),e(bn,Ps),e(Ps,dg),e(bn,hg),y(n,Lr,k),y(n,io,k),e(io,ug),e(io,Os),e(Os,fg),e(io,mg),y(n,Rr,k),y(n,ue,k),j(ka,ue,null),e(ue,_g),e(ue,Ls),e(Ls,bg),e(ue,vg),e(ue,$e),j(Aa,$e,null),e($e,$g),e($e,xa),e(xa,yg),e(xa,Rs),e(Rs,Eg),e(xa,wg),e($e,kg),e($e,Da),e(Da,Ag),e(Da,Cs),e(Cs,xg),e(Da,Dg),e($e,Hg),e($e,Ha),e(Ha,qg),e(Ha,Ss),e(Ss,jg),e(Ha,Ig),e($e,Ng),j(lo,$e,null),e(ue,Fg),e(ue,Ze),j(qa,Ze,null),e(Ze,Tg),e(Ze,vn),e(vn,Pg),e(vn,Ms),e(Ms,Og),e(Ze,Lg),e(Ze,$n),e($n,Rg),e($n,Us),e(Us,Cg),e(ue,Sg),e(ue,Te),j(ja,Te,null),e(Te,Mg),e(Te,Ia),e(Ia,Ug),e(Ia,Vs),e(Vs,Vg),e(Ia,zg),e(Te,Wg),e(Te,ht),e(ht,et),e(et,Gg),e(et,zs),e(zs,Bg),e(et,Kg),e(et,Ws),e(Ws,Jg),e(et,Qg),e(et,Gs),e(Gs,Xg),e(ht,Yg),e(ht,Na),e(Na,Zg),e(Na,Bs),e(Bs,ed),e(Na,td),e(ht,od),e(ht,tt),e(tt,ad),e(tt,Ks),e(Ks,nd),e(tt,sd),e(tt,Js),e(Js,rd),e(tt,id),e(tt,Qs),e(Qs,ld),e(Te,cd),e(Te,ut),e(ut,pd),e(ut,Xs),e(Xs,gd),e(ut,dd),e(ut,Ys),e(Ys,hd),e(ut,ud),y(n,Cr,k),y(n,ft,k),j(Fa,ft,null),e(ft,fd),e(ft,Zs),e(Zs,md),y(n,Sr,k),y(n,mt,k),e(mt,co),e(co,er),j(Ta,er,null),e(mt,_d),e(mt,tr),e(tr,bd),y(n,Mr,k),y(n,Pa,k),e(Pa,or),e(or,vd),e(Pa,$d),y(n,Ur,k),y(n,po,k),e(po,yd),e(po,yn),e(yn,Ed),e(po,wd),y(n,Vr,k),y(n,we,k),j(Oa,we,null),e(we,kd),e(we,go),j(La,go,null),e(go,Ad),e(go,ar),e(ar,xd),e(we,Dd),e(we,ot),j(Ra,ot,null),e(ot,Hd),e(ot,nr),e(nr,qd),e(ot,jd),e(ot,Ca),e(Ca,Id),e(Ca,sr),e(sr,Nd),e(Ca,Fd),e(we,Td),e(we,ho),j(Sa,ho,null),e(ho,Pd),e(ho,rr),e(rr,Od),y(n,zr,k),y(n,_t,k),e(_t,uo),e(uo,ir),j(Ma,ir,null),e(_t,Ld),e(_t,lr),e(lr,Rd),y(n,Wr,k),y(n,fo,k),e(fo,Cd),e(fo,cr),e(cr,Sd),e(fo,Md),y(n,Gr,k),y(n,Ce,k),j(Ua,Ce,null),e(Ce,Ud),e(Ce,pr),e(pr,Vd),e(Ce,zd),j(mo,Ce,null),y(n,Br,k),y(n,Se,k),j(Va,Se,null),e(Se,Wd),e(Se,gr),e(gr,Gd),e(Se,Bd),j(_o,Se,null),y(n,Kr,k),y(n,Me,k),j(za,Me,null),e(Me,Kd),e(Me,dr),e(dr,Jd),e(Me,Qd),j(bo,Me,null),y(n,Jr,k),y(n,Ue,k),j(Wa,Ue,null),e(Ue,Xd),e(Ue,hr),e(hr,Yd),e(Ue,Zd),j(vo,Ue,null),Qr=!0},p(n,[k]){const Ga={};k&2&&(Ga.$$scope={dirty:k,ctx:n}),bt.$set(Ga);const ur={};k&2&&(ur.$$scope={dirty:k,ctx:n}),vt.$set(ur);const fr={};k&2&&(fr.$$scope={dirty:k,ctx:n}),$t.$set(fr);const mr={};k&2&&(mr.$$scope={dirty:k,ctx:n}),yt.$set(mr);const Ba={};k&2&&(Ba.$$scope={dirty:k,ctx:n}),wt.$set(Ba);const _r={};k&2&&(_r.$$scope={dirty:k,ctx:n}),kt.$set(_r);const Ka={};k&2&&(Ka.$$scope={dirty:k,ctx:n}),xt.$set(Ka);const br={};k&2&&(br.$$scope={dirty:k,ctx:n}),Dt.$set(br);const vr={};k&2&&(vr.$$scope={dirty:k,ctx:n}),Ht.$set(vr);const Ja={};k&2&&(Ja.$$scope={dirty:k,ctx:n}),qt.$set(Ja);const $r={};k&2&&($r.$$scope={dirty:k,ctx:n}),It.$set($r);const Qa={};k&2&&(Qa.$$scope={dirty:k,ctx:n}),Tt.$set(Qa);const yr={};k&2&&(yr.$$scope={dirty:k,ctx:n}),Pt.$set(yr);const W={};k&2&&(W.$$scope={dirty:k,ctx:n}),Ot.$set(W);const Ve={};k&2&&(Ve.$$scope={dirty:k,ctx:n}),Lt.$set(Ve);const Er={};k&2&&(Er.$$scope={dirty:k,ctx:n}),Rt.$set(Er);const ze={};k&2&&(ze.$$scope={dirty:k,ctx:n}),Ct.$set(ze);const wr={};k&2&&(wr.$$scope={dirty:k,ctx:n}),Mt.$set(wr);const Xa={};k&2&&(Xa.$$scope={dirty:k,ctx:n}),Ut.$set(Xa);const kr={};k&2&&(kr.$$scope={dirty:k,ctx:n}),Wt.$set(kr);const fe={};k&2&&(fe.$$scope={dirty:k,ctx:n}),Gt.$set(fe);const Ar={};k&2&&(Ar.$$scope={dirty:k,ctx:n}),Bt.$set(Ar);const Ya={};k&2&&(Ya.$$scope={dirty:k,ctx:n}),Kt.$set(Ya);const xr={};k&2&&(xr.$$scope={dirty:k,ctx:n}),Jt.$set(xr);const Za={};k&2&&(Za.$$scope={dirty:k,ctx:n}),Qt.$set(Za);const Dr={};k&2&&(Dr.$$scope={dirty:k,ctx:n}),Yt.$set(Dr);const En={};k&2&&(En.$$scope={dirty:k,ctx:n}),eo.$set(En);const Hr={};k&2&&(Hr.$$scope={dirty:k,ctx:n}),to.$set(Hr);const me={};k&2&&(me.$$scope={dirty:k,ctx:n}),oo.$set(me);const en={};k&2&&(en.$$scope={dirty:k,ctx:n}),ao.$set(en);const qr={};k&2&&(qr.$$scope={dirty:k,ctx:n}),no.$set(qr);const tn={};k&2&&(tn.$$scope={dirty:k,ctx:n}),lo.$set(tn);const jr={};k&2&&(jr.$$scope={dirty:k,ctx:n}),mo.$set(jr);const on={};k&2&&(on.$$scope={dirty:k,ctx:n}),_o.$set(on);const Ir={};k&2&&(Ir.$$scope={dirty:k,ctx:n}),bo.$set(Ir);const wn={};k&2&&(wn.$$scope={dirty:k,ctx:n}),vo.$set(wn)},i(n){Qr||(I(r.$$.fragment,n),I(C.$$.fragment,n),I(X.$$.fragment,n),I(Ee.$$.fragment,n),I(Le.$$.fragment,n),I(bt.$$.fragment,n),I(vt.$$.fragment,n),I(Io.$$.fragment,n),I($t.$$.fragment,n),I(yt.$$.fragment,n),I(No.$$.fragment,n),I(Fo.$$.fragment,n),I(wt.$$.fragment,n),I(Oo.$$.fragment,n),I(kt.$$.fragment,n),I(So.$$.fragment,n),I(Mo.$$.fragment,n),I(xt.$$.fragment,n),I(Uo.$$.fragment,n),I(Dt.$$.fragment,n),I(Vo.$$.fragment,n),I(Ht.$$.fragment,n),I(zo.$$.fragment,n),I(qt.$$.fragment,n),I(Wo.$$.fragment,n),I(Go.$$.fragment,n),I(It.$$.fragment,n),I(Bo.$$.fragment,n),I(Ko.$$.fragment,n),I(Jo.$$.fragment,n),I(Tt.$$.fragment,n),I(Pt.$$.fragment,n),I(Qo.$$.fragment,n),I(Ot.$$.fragment,n),I(Lt.$$.fragment,n),I(Xo.$$.fragment,n),I(Rt.$$.fragment,n),I(Ct.$$.fragment,n),I(Yo.$$.fragment,n),I(Zo.$$.fragment,n),I(Mt.$$.fragment,n),I(Ut.$$.fragment,n),I(ta.$$.fragment,n),I(oa.$$.fragment,n),I(aa.$$.fragment,n),I(Wt.$$.fragment,n),I(na.$$.fragment,n),I(Gt.$$.fragment,n),I(sa.$$.fragment,n),I(Bt.$$.fragment,n),I(la.$$.fragment,n),I(Kt.$$.fragment,n),I(Jt.$$.fragment,n),I(ca.$$.fragment,n),I(Qt.$$.fragment,n),I(pa.$$.fragment,n),I(ga.$$.fragment,n),I(Yt.$$.fragment,n),I(da.$$.fragment,n),I(ha.$$.fragment,n),I(eo.$$.fragment,n),I(ua.$$.fragment,n),I(to.$$.fragment,n),I(oo.$$.fragment,n),I(fa.$$.fragment,n),I(ao.$$.fragment,n),I(no.$$.fragment,n),I(ba.$$.fragment,n),I(va.$$.fragment,n),I($a.$$.fragment,n),I(ya.$$.fragment,n),I(Ea.$$.fragment,n),I(wa.$$.fragment,n),I(ka.$$.fragment,n),I(Aa.$$.fragment,n),I(lo.$$.fragment,n),I(qa.$$.fragment,n),I(ja.$$.fragment,n),I(Fa.$$.fragment,n),I(Ta.$$.fragment,n),I(Oa.$$.fragment,n),I(La.$$.fragment,n),I(Ra.$$.fragment,n),I(Sa.$$.fragment,n),I(Ma.$$.fragment,n),I(Ua.$$.fragment,n),I(mo.$$.fragment,n),I(Va.$$.fragment,n),I(_o.$$.fragment,n),I(za.$$.fragment,n),I(bo.$$.fragment,n),I(Wa.$$.fragment,n),I(vo.$$.fragment,n),Qr=!0)},o(n){N(r.$$.fragment,n),N(C.$$.fragment,n),N(X.$$.fragment,n),N(Ee.$$.fragment,n),N(Le.$$.fragment,n),N(bt.$$.fragment,n),N(vt.$$.fragment,n),N(Io.$$.fragment,n),N($t.$$.fragment,n),N(yt.$$.fragment,n),N(No.$$.fragment,n),N(Fo.$$.fragment,n),N(wt.$$.fragment,n),N(Oo.$$.fragment,n),N(kt.$$.fragment,n),N(So.$$.fragment,n),N(Mo.$$.fragment,n),N(xt.$$.fragment,n),N(Uo.$$.fragment,n),N(Dt.$$.fragment,n),N(Vo.$$.fragment,n),N(Ht.$$.fragment,n),N(zo.$$.fragment,n),N(qt.$$.fragment,n),N(Wo.$$.fragment,n),N(Go.$$.fragment,n),N(It.$$.fragment,n),N(Bo.$$.fragment,n),N(Ko.$$.fragment,n),N(Jo.$$.fragment,n),N(Tt.$$.fragment,n),N(Pt.$$.fragment,n),N(Qo.$$.fragment,n),N(Ot.$$.fragment,n),N(Lt.$$.fragment,n),N(Xo.$$.fragment,n),N(Rt.$$.fragment,n),N(Ct.$$.fragment,n),N(Yo.$$.fragment,n),N(Zo.$$.fragment,n),N(Mt.$$.fragment,n),N(Ut.$$.fragment,n),N(ta.$$.fragment,n),N(oa.$$.fragment,n),N(aa.$$.fragment,n),N(Wt.$$.fragment,n),N(na.$$.fragment,n),N(Gt.$$.fragment,n),N(sa.$$.fragment,n),N(Bt.$$.fragment,n),N(la.$$.fragment,n),N(Kt.$$.fragment,n),N(Jt.$$.fragment,n),N(ca.$$.fragment,n),N(Qt.$$.fragment,n),N(pa.$$.fragment,n),N(ga.$$.fragment,n),N(Yt.$$.fragment,n),N(da.$$.fragment,n),N(ha.$$.fragment,n),N(eo.$$.fragment,n),N(ua.$$.fragment,n),N(to.$$.fragment,n),N(oo.$$.fragment,n),N(fa.$$.fragment,n),N(ao.$$.fragment,n),N(no.$$.fragment,n),N(ba.$$.fragment,n),N(va.$$.fragment,n),N($a.$$.fragment,n),N(ya.$$.fragment,n),N(Ea.$$.fragment,n),N(wa.$$.fragment,n),N(ka.$$.fragment,n),N(Aa.$$.fragment,n),N(lo.$$.fragment,n),N(qa.$$.fragment,n),N(ja.$$.fragment,n),N(Fa.$$.fragment,n),N(Ta.$$.fragment,n),N(Oa.$$.fragment,n),N(La.$$.fragment,n),N(Ra.$$.fragment,n),N(Sa.$$.fragment,n),N(Ma.$$.fragment,n),N(Ua.$$.fragment,n),N(mo.$$.fragment,n),N(Va.$$.fragment,n),N(_o.$$.fragment,n),N(za.$$.fragment,n),N(bo.$$.fragment,n),N(Wa.$$.fragment,n),N(vo.$$.fragment,n),Qr=!1},d(n){t(p),n&&t(v),n&&t(f),F(r),n&&t(x),n&&t(w),n&&t(L),n&&t(m),n&&t(K),n&&t(G),n&&t(S),F(C,n),n&&t(Y),n&&t(te),n&&t(B),F(X,n),n&&t(oe),n&&t(ne),n&&t(Oe),n&&t(M),F(Ee),F(Le),F(bt),F(vt),F(Io),F($t),F(yt),F(No),F(Fo),F(wt),F(Oo),F(kt),F(So),F(Mo),F(xt),F(Uo),F(Dt),F(Vo),F(Ht),F(zo),F(qt),F(Wo),F(Go),F(It),F(Bo),F(Ko),F(Jo),F(Tt),F(Pt),F(Qo),F(Ot),F(Lt),F(Xo),F(Rt),F(Ct),F(Yo),F(Zo),F(Mt),F(Ut),F(ta),F(oa),F(aa),F(Wt),F(na),F(Gt),F(sa),F(Bt),F(la),F(Kt),F(Jt),F(ca),F(Qt),F(pa),F(ga),F(Yt),F(da),F(ha),F(eo),F(ua),F(to),F(oo),F(fa),F(ao),F(no),F(ba),n&&t(Nr),n&&t(ct),F(va),n&&t(Fr),n&&t(pt),F($a),n&&t(Tr),n&&t(Re),F(ya),n&&t(Pr),n&&t(gt),F(Ea),n&&t(Or),n&&t(dt),F(wa),n&&t(Lr),n&&t(io),n&&t(Rr),n&&t(ue),F(ka),F(Aa),F(lo),F(qa),F(ja),n&&t(Cr),n&&t(ft),F(Fa),n&&t(Sr),n&&t(mt),F(Ta),n&&t(Mr),n&&t(Pa),n&&t(Ur),n&&t(po),n&&t(Vr),n&&t(we),F(Oa),F(La),F(Ra),F(Sa),n&&t(zr),n&&t(_t),F(Ma),n&&t(Wr),n&&t(fo),n&&t(Gr),n&&t(Ce),F(Ua),F(mo),n&&t(Br),n&&t(Se),F(Va),F(_o),n&&t(Kr),n&&t(Me),F(za),F(bo),n&&t(Jr),n&&t(Ue),F(Wa),F(vo)}}}const xf={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Df(U){return Mu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tf extends Lu{constructor(p){super();Ru(this,p,Df,Af,Cu,{})}}export{Tf as default,xf as metadata};
