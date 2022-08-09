import{S as Bg,i as Kg,s as Jg,e as a,k as g,w as q,t as l,M as Qg,c as n,d as t,m as h,a as s,x as j,h as c,b as $,G as e,g as w,y as N,q as I,o as F,B as T,v as Xg,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as ee}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Op}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as de}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yg(z){let p,v,f,i,d;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Zg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function eh(z){let p,v,f,i,d;return i=new re({props:{code:`
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function th(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function oh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function ah(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function nh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function sh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G,y,C,S,X,te,Y,J,Z,ae,B;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),y=g(),C=a("li"),S=a("a"),X=l("RevisionNotFoundError"),te=l(`
If the revision to download from cannot be found.`),Y=g(),J=a("li"),Z=a("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=n(Q,"P",{});var oe=s(p);v=c(oe,"Raises the following errors:"),oe.forEach(t),f=h(Q),i=n(Q,"UL",{});var ne=s(i);d=n(ne,"LI",{});var Ue=s(d);r=n(Ue,"A",{href:!0,rel:!0});var fe=s(r);u=n(fe,"CODE",{});var et=s(u);D=c(et,"HTTPError"),et.forEach(t),fe.forEach(t),_=c(Ue,`
if the HuggingFace API returned an error`),Ue.forEach(t),x=h(ne),E=n(ne,"LI",{});var Ve=s(E);b=n(Ve,"A",{href:!0,rel:!0});var Fe=s(b);k=n(Fe,"CODE",{});var M=s(k);P=c(M,"ValueError"),M.forEach(t),Fe.forEach(t),L=c(Ve,`
if some parameter value is invalid`),Ve.forEach(t),O=h(ne),m=n(ne,"LI",{});var $e=s(m);H=n($e,"A",{href:!0});var xa=s(H);V=c(xa,"RepositoryNotFoundError"),xa.forEach(t),U=c($e,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n($e,"CODE",{});var pe=s(R);K=c(pe,"private"),pe.forEach(t),G=c($e," and you do not have access."),$e.forEach(t),y=h(ne),C=n(ne,"LI",{});var Te=s(C);S=n(Te,"A",{href:!0});var Ha=s(S);X=c(Ha,"RevisionNotFoundError"),Ha.forEach(t),te=c(Te,`
If the revision to download from cannot be found.`),Te.forEach(t),Y=h(ne),J=n(ne,"LI",{});var tt=s(J);Z=n(tt,"A",{href:!0});var Da=s(Z);ae=c(Da,"EntryNotFoundError"),Da.forEach(t),B=c(tt,`
If the file to download cannot be found.`),tt.forEach(t),ne.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(Z,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,oe){w(Q,p,oe),e(p,v),w(Q,f,oe),w(Q,i,oe),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G),e(i,y),e(i,C),e(C,S),e(S,X),e(C,te),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function rh(z){let p,v,f,i,d,r,u,D,_,x,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var k=s(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=n(b,"UL",{});var P=s(i);d=n(P,"LI",{});var L=s(d);r=n(L,"A",{href:!0});var O=s(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),D=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);x=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function ih(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function lh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function ch(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),v=l("Collecting all discussions of a repo in a list:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function ph(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),v=l("Iterating over discussions of a repo:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function gh(z){let p;return{c(){p=l("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(v){p=c(v,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(v,f){w(v,p,f)},d(v){v&&t(p)}}}function hh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function dh(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("filter"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function uh(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("search"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function fh(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("filter"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function mh(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("search"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function _h(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function bh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function vh(z){let p,v,f,i,d,r,u,D,_,x,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var k=s(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=n(b,"UL",{});var P=s(i);d=n(P,"LI",{});var L=s(d);r=n(L,"A",{href:!0});var O=s(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),D=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);x=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function $h(z){let p,v,f,i,d;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function yh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Eh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function wh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function kh(z){let p,v,f,i,d,r,u,D,_,x,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var k=s(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=n(b,"UL",{});var P=s(i);d=n(P,"LI",{});var L=s(d);r=n(L,"A",{href:!0});var O=s(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),D=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);x=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Ah(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G,y,C,S,X,te;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),y=g(),C=a("li"),S=a("a"),X=l("RevisionNotFoundError"),te=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=n(Y,"P",{});var J=s(p);v=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=n(Y,"UL",{});var Z=s(i);d=n(Z,"LI",{});var ae=s(d);r=n(ae,"A",{href:!0,rel:!0});var B=s(r);u=n(B,"CODE",{});var Q=s(u);D=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(Z),E=n(Z,"LI",{});var oe=s(E);b=n(oe,"A",{href:!0,rel:!0});var ne=s(b);k=n(ne,"CODE",{});var Ue=s(k);P=c(Ue,"ValueError"),Ue.forEach(t),ne.forEach(t),L=c(oe,`
if some parameter value is invalid`),oe.forEach(t),O=h(Z),m=n(Z,"LI",{});var fe=s(m);H=n(fe,"A",{href:!0});var et=s(H);V=c(et,"RepositoryNotFoundError"),et.forEach(t),U=c(fe,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(fe,"CODE",{});var Ve=s(R);K=c(Ve,"private"),Ve.forEach(t),G=c(fe," and you do not have access."),fe.forEach(t),y=h(Z),C=n(Z,"LI",{});var Fe=s(C);S=n(Fe,"A",{href:!0});var M=s(S);X=c(M,"RevisionNotFoundError"),M.forEach(t),te=c(Fe,`
If the revision to download from cannot be found.`),Fe.forEach(t),Z.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){w(Y,p,J),e(p,v),w(Y,f,J),w(Y,i,J),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G),e(i,y),e(i,C),e(C,S),e(S,X),e(C,te)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function xh(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),v=l("Example usage:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Hh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(O){p=n(O,"P",{});var m=s(p);v=c(m,"Raises the following errors:"),m.forEach(t),f=h(O),i=n(O,"UL",{});var H=s(i);d=n(H,"LI",{});var V=s(d);r=n(V,"A",{href:!0,rel:!0});var U=s(r);u=n(U,"CODE",{});var R=s(u);D=c(R,"HTTPError"),R.forEach(t),U.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),x=h(H),E=n(H,"LI",{});var K=s(E);b=n(K,"A",{href:!0,rel:!0});var G=s(b);k=n(G,"CODE",{});var y=s(k);P=c(y,"ValueError"),y.forEach(t),G.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),H.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow")},m(O,m){w(O,p,m),e(p,v),w(O,f,m),w(O,i,m),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L)},d(O){O&&t(p),O&&t(f),O&&t(i)}}}function Dh(z){let p,v,f,i,d;return i=new re({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),v=l("Example usage:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function qh(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function jh(z){let p,v;return p=new re({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){q(p.$$.fragment)},l(f){j(p.$$.fragment,f)},m(f,i){N(p,f,i),v=!0},p:ue,i(f){v||(I(p.$$.fragment,f),v=!0)},o(f){F(p.$$.fragment,f),v=!1},d(f){T(p,f)}}}function Nh(z){let p,v,f,i,d;return i=new re({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),v=l("Example:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Ih(z){let p,v,f,i,d;return i=new re({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),v=l("Example:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Fh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G,y,C,S,X,te,Y,J,Z,ae,B,Q,oe,ne,Ue,fe,et,Ve,Fe,M,$e,xa,pe,Te,Ha,tt,Da,mr,lt,_r,ct,br,Ee,mo,vr,Ya,$r,yr,pt,Er,gt,wr,ze,_o,kr,Za,Ar,xr,me,Hr,en,Dr,qr,tn,jr,Nr,on,Ir,Fr,an,Tr,Pr,nn,Lr,Or,ie,bo,Rr,sn,Sr,Cr,vo,Mr,rn,Ur,Vr,zr,$o,Wr,qa,Gr,Br,Kr,ja,Jr,Na,Qr,Xr,ht,Yr,le,yo,Zr,Eo,ei,ln,ti,oi,ai,wo,ni,Ia,si,ri,ii,ko,li,cn,ci,pi,gi,Fa,hi,Ta,di,ui,dt,fi,ut,Ao,mi,pn,_i,bi,we,xo,vi,gn,$i,yi,hn,Ei,wi,ft,ki,We,Ho,Ai,dn,xi,Hi,mt,Di,Ge,Do,qi,un,ji,Ni,_t,Ii,Be,qo,Fi,fn,Ti,Pi,bt,Li,vt,jo,Oi,mn,Ri,Si,ke,No,Ci,_n,Mi,Ui,Pa,Vi,La,zi,Wi,$t,Gi,yt,Io,Bi,bn,Ki,Ji,Et,Fo,Qi,vn,Xi,Yi,_e,To,Zi,$n,el,tl,yn,ol,al,wt,nl,kt,sl,Ae,Po,rl,En,il,ll,At,cl,xt,pl,xe,Lo,gl,wn,hl,dl,Ht,ul,Dt,fl,qt,Oo,ml,kn,_l,bl,be,Ro,vl,An,$l,yl,So,El,Oa,wl,kl,Al,jt,xl,Nt,Hl,It,Co,Dl,xn,ql,jl,Ft,Mo,Nl,Hn,Il,Fl,Ke,Uo,Tl,Dn,Pl,Ll,Tt,Ol,He,Vo,Rl,qn,Sl,Cl,jn,Ml,Ul,Pt,Vl,De,zo,zl,Nn,Wl,Gl,Wo,Bl,Go,Kl,Jl,Ql,Lt,Xl,qe,Bo,Yl,In,Zl,ec,Ot,tc,Rt,oc,Je,Ko,ac,Fn,nc,sc,St,rc,Ct,Jo,ic,Tn,lc,cc,je,Qo,pc,Pn,gc,hc,Ln,dc,uc,Mt,fc,Ut,Xo,mc,On,_c,bc,Qe,Yo,vc,Rn,$c,yc,Vt,Ec,Ne,Zo,wc,Sn,kc,Ac,zt,xc,Wt,Hc,ce,ea,Dc,Cn,qc,jc,Mn,Nc,Ic,ta,Fc,Un,Tc,Pc,Lc,Gt,Oc,Bt,Rc,Kt,oa,Sc,Vn,Cc,qs,ot,aa,Mc,zn,Uc,js,at,na,Vc,Wn,zc,Ns,Pe,sa,Wc,Gn,Gc,Bc,Bn,Kc,Is,nt,ra,Jc,Kn,Qc,Fs,st,Jt,Jn,ia,Xc,Qn,Yc,Ts,la,Xn,Zc,ep,Ps,Qt,tp,Ra,op,ap,Ls,ye,ca,np,Xt,pa,sp,Yn,rp,ip,Xe,ga,lp,Zn,cp,pp,ha,gp,es,hp,dp,up,Yt,da,fp,ts,mp,Os,rt,Zt,os,ua,_p,as,bp,Rs,eo,vp,ns,$p,yp,Ss,Le,fa,Ep,ss,wp,kp,to,Cs,Oe,ma,Ap,rs,xp,Hp,oo,Ms,Re,_a,Dp,is,qp,jp,ao,Us,Se,ba,Np,ls,Ip,Fp,no,Vs;return r=new Op({}),S=new re({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new re({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),$e=new ee({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L602"}}),Te=new ee({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2916",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),lt=new de({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Yg]},$$scope:{ctx:z}}}),ct=new se({props:{$$slots:{default:[Zg]},$$scope:{ctx:z}}}),mo=new ee({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2775",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),pt=new de({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[eh]},$$scope:{ctx:z}}}),gt=new se({props:{$$slots:{default:[th]},$$scope:{ctx:z}}}),_o=new ee({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
The repository in which the commit will be created, for example:
<em>&#x201C;username/custom_transformers&#x201D;</em>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<em>Iterable</em> of <em>CommitOperation</em>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><em>CommitOperationAdd</em> to upload a file</li>
<li><em>CommitOperationDelete</em> to delete a file</li>
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1895",returnDescription:`
<p>If <em>create_pr</em> is <em>True</em>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <em>None</em>.</p>
`,returnType:`
<p><em>str</em> or <em>None</em></p>
`}}),bo=new ee({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2600"}}),ht=new se({props:{$$slots:{default:[oh]},$$scope:{ctx:z}}}),yo=new ee({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2688"}}),dt=new se({props:{$$slots:{default:[ah]},$$scope:{ctx:z}}}),Ao=new ee({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1521",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),xo=new ee({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.dataset_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1281",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a></p>
`}}),ft=new se({props:{$$slots:{default:[nh]},$$scope:{ctx:z}}}),Ho=new ee({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2320"}}),mt=new se({props:{$$slots:{default:[sh]},$$scope:{ctx:z}}}),Do=new ee({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1651"}}),_t=new se({props:{$$slots:{default:[rh]},$$scope:{ctx:z}}}),qo=new ee({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3042",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),bt=new se({props:{$$slots:{default:[ih]},$$scope:{ctx:z}}}),jo=new ee({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L723"}}),No=new ee({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2511"}}),$t=new se({props:{$$slots:{default:[lh]},$$scope:{ctx:z}}}),Io=new ee({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2398",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Fo=new ee({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L715"}}),To=new ee({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2432",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),wt=new de({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[ch]},$$scope:{ctx:z}}}),kt=new de({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[ph]},$$scope:{ctx:z}}}),Po=new ee({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3098",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),At=new se({props:{warning:!0,$$slots:{default:[gh]},$$scope:{ctx:z}}}),xt=new se({props:{$$slots:{default:[hh]},$$scope:{ctx:z}}}),Lo=new ee({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L943"}}),Ht=new de({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[dh]},$$scope:{ctx:z}}}),Dt=new de({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[uh]},$$scope:{ctx:z}}}),Oo=new ee({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1108",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ro=new ee({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L733"}}),jt=new de({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[fh]},$$scope:{ctx:z}}}),Nt=new de({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[mh]},$$scope:{ctx:z}}}),Co=new ee({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1481",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Mo=new ee({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1122",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Uo=new ee({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2990",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Tt=new se({props:{$$slots:{default:[_h]},$$scope:{ctx:z}}}),Vo=new ee({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1207",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),Pt=new se({props:{$$slots:{default:[bh]},$$scope:{ctx:z}}}),zo=new ee({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1817"}}),Lt=new se({props:{$$slots:{default:[vh]},$$scope:{ctx:z}}}),Bo=new ee({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2850",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Ot=new de({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[$h]},$$scope:{ctx:z}}}),Rt=new se({props:{$$slots:{default:[yh]},$$scope:{ctx:z}}}),Ko=new ee({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1409",returnDescription:`
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
`}}),St=new se({props:{$$slots:{default:[Eh]},$$scope:{ctx:z}}}),Jo=new ee({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L696"}}),Qo=new ee({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1345",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a></p>
`}}),Mt=new se({props:{$$slots:{default:[wh]},$$scope:{ctx:z}}}),Xo=new ee({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L708"}}),Yo=new ee({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1742",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Vt=new se({props:{$$slots:{default:[kh]},$$scope:{ctx:z}}}),Zo=new ee({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2029",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),zt=new se({props:{$$slots:{default:[Ah]},$$scope:{ctx:z}}}),Wt=new de({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[xh]},$$scope:{ctx:z}}}),ea=new ee({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2176",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Gt=new se({props:{$$slots:{default:[Hh]},$$scope:{ctx:z}}}),Bt=new de({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Dh]},$$scope:{ctx:z}}}),oa=new ee({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L606"}}),aa=new ee({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L223"}}),na=new ee({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L291"}}),sa=new ee({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L365"}}),ra=new ee({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L177"}}),ia=new Op({}),ca=new ee({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3160"}}),pa=new ee({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3197"}}),ga=new ee({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3176",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),da=new ee({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3163"}}),ua=new Op({}),fa=new ee({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),to=new de({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[qh]},$$scope:{ctx:z}}}),ma=new ee({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),oo=new de({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[jh]},$$scope:{ctx:z}}}),_a=new ee({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L490"}}),ao=new de({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Nh]},$$scope:{ctx:z}}}),ba=new ee({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L452"}}),no=new de({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Ih]},$$scope:{ctx:z}}}),{c(){p=a("meta"),v=g(),f=a("h1"),i=a("a"),d=a("span"),q(r.$$.fragment),u=g(),D=a("span"),_=l("Hugging Face Hub API"),x=g(),E=a("p"),b=l("Below is the documentation for the "),k=a("code"),P=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=g(),m=a("p"),H=l("All methods from the "),V=a("code"),U=l("HfApi"),R=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),y=l("The following approach uses the method from the root of the package:"),C=g(),q(S.$$.fragment),X=g(),te=a("p"),Y=l("The following approach uses the "),J=a("code"),Z=l("HfApi"),ae=l(" class:"),B=g(),q(Q.$$.fragment),oe=g(),ne=a("p"),Ue=l("Using the "),fe=a("code"),et=l("HfApi"),Ve=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Fe=g(),M=a("div"),q($e.$$.fragment),xa=g(),pe=a("div"),q(Te.$$.fragment),Ha=g(),tt=a("p"),Da=l("Closes or re-opens a Discussion or Pull Request."),mr=g(),q(lt.$$.fragment),_r=g(),q(ct.$$.fragment),br=g(),Ee=a("div"),q(mo.$$.fragment),vr=g(),Ya=a("p"),$r=l("Creates a new comment on the given Discussion."),yr=g(),q(pt.$$.fragment),Er=g(),q(gt.$$.fragment),wr=g(),ze=a("div"),q(_o.$$.fragment),kr=g(),Za=a("p"),Ar=l("Creates a commit in the given repo, deleting & uploading files as needed."),xr=g(),me=a("p"),Hr=l("Raises: "),en=a("em"),Dr=l("ValueError"),qr=l(" if "),tn=a("em"),jr=l("create_pr"),Nr=l(" is "),on=a("em"),Ir=l("True"),Fr=l(" and revision is neither "),an=a("em"),Tr=l("None"),Pr=l(" nor "),nn=a("em"),Lr=l("\u201Cmain\u201D"),Or=g(),ie=a("div"),q(bo.$$.fragment),Rr=g(),sn=a("p"),Sr=l("Creates a Discussion or Pull Request."),Cr=g(),vo=a("p"),Mr=l("Pull Requests created programmatically will be in "),rn=a("code"),Ur=l('"draft"'),Vr=l(" status."),zr=g(),$o=a("p"),Wr=l("Creating a Pull Request with changes can also be done at once with "),qa=a("a"),Gr=l("HfApi.create_commit()"),Br=l("."),Kr=g(),ja=a("p"),Jr=l("Returns: "),Na=a("a"),Qr=l("DiscussionWithDetails"),Xr=g(),q(ht.$$.fragment),Yr=g(),le=a("div"),q(yo.$$.fragment),Zr=g(),Eo=a("p"),ei=l("Creates a Pull Request . Pull Requests created programmatically will be in "),ln=a("code"),ti=l('"draft"'),oi=l(" status."),ai=g(),wo=a("p"),ni=l("Creating a Pull Request with changes can also be done at once with "),Ia=a("a"),si=l("HfApi.create_commit()"),ri=l(";"),ii=g(),ko=a("p"),li=l("This is a wrapper around "),cn=a("code"),ci=l("HfApi.create_discusssion"),pi=l("."),gi=g(),Fa=a("p"),hi=l("Returns: "),Ta=a("a"),di=l("DiscussionWithDetails"),ui=g(),q(dt.$$.fragment),fi=g(),ut=a("div"),q(Ao.$$.fragment),mi=g(),pn=a("p"),_i=l("Create an empty repo on the HuggingFace Hub."),bi=g(),we=a("div"),q(xo.$$.fragment),vi=g(),gn=a("p"),$i=l("Get info on one specific dataset on huggingface.co."),yi=g(),hn=a("p"),Ei=l("Dataset can be private if you pass an acceptable token."),wi=g(),q(ft.$$.fragment),ki=g(),We=a("div"),q(Ho.$$.fragment),Ai=g(),dn=a("p"),xi=l("Deletes a file in the given repo."),Hi=g(),q(mt.$$.fragment),Di=g(),Ge=a("div"),q(Do.$$.fragment),qi=g(),un=a("p"),ji=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ni=g(),q(_t.$$.fragment),Ii=g(),Be=a("div"),q(qo.$$.fragment),Fi=g(),fn=a("p"),Ti=l("Edits a comment on a Discussion / Pull Request."),Pi=g(),q(bt.$$.fragment),Li=g(),vt=a("div"),q(jo.$$.fragment),Oi=g(),mn=a("p"),Ri=l("Gets all valid dataset tags as a nested namespace object."),Si=g(),ke=a("div"),q(No.$$.fragment),Ci=g(),_n=a("p"),Mi=l("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Ui=g(),Pa=a("p"),Vi=l("Returns: "),La=a("a"),zi=l("DiscussionWithDetails"),Wi=g(),q($t.$$.fragment),Gi=g(),yt=a("div"),q(Io.$$.fragment),Bi=g(),bn=a("p"),Ki=l(`Returns the repository name for a given model ID and optional
organization.`),Ji=g(),Et=a("div"),q(Fo.$$.fragment),Qi=g(),vn=a("p"),Xi=l("Gets all valid model tags as a nested namespace object"),Yi=g(),_e=a("div"),q(To.$$.fragment),Zi=g(),$n=a("p"),el=l("Fetches Discussions and Pull Requests for the given repo."),tl=g(),yn=a("p"),ol=l("Example:"),al=g(),q(wt.$$.fragment),nl=g(),q(kt.$$.fragment),sl=g(),Ae=a("div"),q(Po.$$.fragment),rl=g(),En=a("p"),il=l("Hides a comment on a Discussion / Pull Request."),ll=g(),q(At.$$.fragment),cl=g(),q(xt.$$.fragment),pl=g(),xe=a("div"),q(Lo.$$.fragment),gl=g(),wn=a("p"),hl=l("Get the public list of all the datasets on huggingface.co"),dl=g(),q(Ht.$$.fragment),ul=g(),q(Dt.$$.fragment),fl=g(),qt=a("div"),q(Oo.$$.fragment),ml=g(),kn=a("p"),_l=l("Get the public list of all the metrics on huggingface.co"),bl=g(),be=a("div"),q(Ro.$$.fragment),vl=g(),An=a("p"),$l=l("Get the public list of all the models on huggingface.co"),yl=g(),So=a("p"),El=l("Returns: List of "),Oa=a("a"),wl=l("huggingface_hub.hf_api.ModelInfo"),kl=l(" objects"),Al=g(),q(jt.$$.fragment),xl=g(),q(Nt.$$.fragment),Hl=g(),It=a("div"),q(Co.$$.fragment),Dl=g(),xn=a("p"),ql=l("Get the list of files in a given repo."),jl=g(),Ft=a("div"),q(Mo.$$.fragment),Nl=g(),Hn=a("p"),Il=l("Get the public list of all Spaces on huggingface.co"),Fl=g(),Ke=a("div"),q(Uo.$$.fragment),Tl=g(),Dn=a("p"),Pl=l("Merges a Pull Request."),Ll=g(),q(Tt.$$.fragment),Ol=g(),He=a("div"),q(Vo.$$.fragment),Rl=g(),qn=a("p"),Sl=l("Get info on one specific model on huggingface.co"),Cl=g(),jn=a("p"),Ml=l("Model can be private if you pass an acceptable token or are logged in."),Ul=g(),q(Pt.$$.fragment),Vl=g(),De=a("div"),q(zo.$$.fragment),zl=g(),Nn=a("p"),Wl=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Gl=g(),Wo=a("p"),Bl=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Go=a("a"),Kl=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Jl=l("."),Ql=g(),q(Lt.$$.fragment),Xl=g(),qe=a("div"),q(Bo.$$.fragment),Yl=g(),In=a("p"),Zl=l("Renames a Discussion."),ec=g(),q(Ot.$$.fragment),tc=g(),q(Rt.$$.fragment),oc=g(),Je=a("div"),q(Ko.$$.fragment),ac=g(),Fn=a("p"),nc=l("Get the info object for a given repo of a given type."),sc=g(),q(St.$$.fragment),rc=g(),Ct=a("div"),q(Jo.$$.fragment),ic=g(),Tn=a("p"),lc=l(`Saves the passed access token so git can correctly authenticate the
user.`),cc=g(),je=a("div"),q(Qo.$$.fragment),pc=g(),Pn=a("p"),gc=l("Get info on one specific Space on huggingface.co."),hc=g(),Ln=a("p"),dc=l("Space can be private if you pass an acceptable token."),uc=g(),q(Mt.$$.fragment),fc=g(),Ut=a("div"),q(Xo.$$.fragment),mc=g(),On=a("p"),_c=l("Resets the user\u2019s access token."),bc=g(),Qe=a("div"),q(Yo.$$.fragment),vc=g(),Rn=a("p"),$c=l("Update the visibility setting of a repository."),yc=g(),q(Vt.$$.fragment),Ec=g(),Ne=a("div"),q(Zo.$$.fragment),wc=g(),Sn=a("p"),kc=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ac=g(),q(zt.$$.fragment),xc=g(),q(Wt.$$.fragment),Hc=g(),ce=a("div"),q(ea.$$.fragment),Dc=g(),Cn=a("p"),qc=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),jc=g(),Mn=a("p"),Nc=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Ic=g(),ta=a("p"),Fc=l("Uses "),Un=a("code"),Tc=l("HfApi.create_commit"),Pc=l(" under the hood."),Lc=g(),q(Gt.$$.fragment),Oc=g(),q(Bt.$$.fragment),Rc=g(),Kt=a("div"),q(oa.$$.fragment),Sc=g(),Vn=a("p"),Cc=l("Call HF API to know \u201Cwhoami\u201D."),qs=g(),ot=a("div"),q(aa.$$.fragment),Mc=g(),zn=a("p"),Uc=l("Info about a model accessible from huggingface.co"),js=g(),at=a("div"),q(na.$$.fragment),Vc=g(),Wn=a("p"),zc=l("Info about a dataset accessible from huggingface.co"),Ns=g(),Pe=a("div"),q(sa.$$.fragment),Wc=g(),Gn=a("p"),Gc=l("Info about a Space accessible from huggingface.co"),Bc=g(),Bn=a("p"),Kc=l(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Is=g(),nt=a("div"),q(ra.$$.fragment),Jc=g(),Kn=a("p"),Qc=l(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Fs=g(),st=a("h2"),Jt=a("a"),Jn=a("span"),q(ia.$$.fragment),Xc=g(),Qn=a("span"),Yc=l("Hugging Face local storage"),Ts=g(),la=a("p"),Xn=a("code"),Zc=l("huggingface_hub"),ep=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ps=g(),Qt=a("p"),tp=l("It does this using the "),Ra=a("a"),op=l("HfFolder"),ap=l(" utility, which saves data at the root of the user."),Ls=g(),ye=a("div"),q(ca.$$.fragment),np=g(),Xt=a("div"),q(pa.$$.fragment),sp=g(),Yn=a("p"),rp=l("Deletes the token from storage. Does not fail if token does not exist."),ip=g(),Xe=a("div"),q(ga.$$.fragment),lp=g(),Zn=a("p"),cp=l("Get token or None if not existent."),pp=g(),ha=a("p"),gp=l("Note that a token can be also provided using the "),es=a("code"),hp=l("HUGGING_FACE_HUB_TOKEN"),dp=l(`
environment variable.`),up=g(),Yt=a("div"),q(da.$$.fragment),fp=g(),ts=a("p"),mp=l("Save token, creating folder as needed."),Os=g(),rt=a("h2"),Zt=a("a"),os=a("span"),q(ua.$$.fragment),_p=g(),as=a("span"),bp=l("Filtering helpers"),Rs=g(),eo=a("p"),vp=l("Some helpers to filter repositories on the Hub are available in the "),ns=a("code"),$p=l("huggingface_hub"),yp=l(" package."),Ss=g(),Le=a("div"),q(fa.$$.fragment),Ep=g(),ss=a("p"),wp=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),kp=g(),q(to.$$.fragment),Cs=g(),Oe=a("div"),q(ma.$$.fragment),Ap=g(),rs=a("p"),xp=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Hp=g(),q(oo.$$.fragment),Ms=g(),Re=a("div"),q(_a.$$.fragment),Dp=g(),is=a("p"),qp=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),jp=g(),q(ao.$$.fragment),Us=g(),Se=a("div"),q(ba.$$.fragment),Np=g(),ls=a("p"),Ip=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Fp=g(),q(no.$$.fragment),this.h()},l(o){const A=Qg('[data-svelte="svelte-1phssyn"]',document.head);p=n(A,"META",{name:!0,content:!0}),A.forEach(t),v=h(o),f=n(o,"H1",{class:!0});var va=s(f);i=n(va,"A",{id:!0,class:!0,href:!0});var cs=s(i);d=n(cs,"SPAN",{});var ps=s(d);j(r.$$.fragment,ps),ps.forEach(t),cs.forEach(t),u=h(va),D=n(va,"SPAN",{});var gs=s(D);_=c(gs,"Hugging Face Hub API"),gs.forEach(t),va.forEach(t),x=h(o),E=n(o,"P",{});var $a=s(E);b=c($a,"Below is the documentation for the "),k=n($a,"CODE",{});var hs=s(k);P=c(hs,"HfApi"),hs.forEach(t),L=c($a,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),$a.forEach(t),O=h(o),m=n(o,"P",{});var ya=s(m);H=c(ya,"All methods from the "),V=n(ya,"CODE",{});var ds=s(V);U=c(ds,"HfApi"),ds.forEach(t),R=c(ya,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),ya.forEach(t),K=h(o),G=n(o,"P",{});var us=s(G);y=c(us,"The following approach uses the method from the root of the package:"),us.forEach(t),C=h(o),j(S.$$.fragment,o),X=h(o),te=n(o,"P",{});var Ea=s(te);Y=c(Ea,"The following approach uses the "),J=n(Ea,"CODE",{});var fs=s(J);Z=c(fs,"HfApi"),fs.forEach(t),ae=c(Ea," class:"),Ea.forEach(t),B=h(o),j(Q.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var wa=s(ne);Ue=c(wa,"Using the "),fe=n(wa,"CODE",{});var ms=s(fe);et=c(ms,"HfApi"),ms.forEach(t),Ve=c(wa," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),wa.forEach(t),Fe=h(o),M=n(o,"DIV",{class:!0});var W=s(M);j($e.$$.fragment,W),xa=h(W),pe=n(W,"DIV",{class:!0});var Ce=s(pe);j(Te.$$.fragment,Ce),Ha=h(Ce),tt=n(Ce,"P",{});var _s=s(tt);Da=c(_s,"Closes or re-opens a Discussion or Pull Request."),_s.forEach(t),mr=h(Ce),j(lt.$$.fragment,Ce),_r=h(Ce),j(ct.$$.fragment,Ce),Ce.forEach(t),br=h(W),Ee=n(W,"DIV",{class:!0});var Me=s(Ee);j(mo.$$.fragment,Me),vr=h(Me),Ya=n(Me,"P",{});var bs=s(Ya);$r=c(bs,"Creates a new comment on the given Discussion."),bs.forEach(t),yr=h(Me),j(pt.$$.fragment,Me),Er=h(Me),j(gt.$$.fragment,Me),Me.forEach(t),wr=h(W),ze=n(W,"DIV",{class:!0});var it=s(ze);j(_o.$$.fragment,it),kr=h(it),Za=n(it,"P",{});var vs=s(Za);Ar=c(vs,"Creates a commit in the given repo, deleting & uploading files as needed."),vs.forEach(t),xr=h(it),me=n(it,"P",{});var ve=s(me);Hr=c(ve,"Raises: "),en=n(ve,"EM",{});var $s=s(en);Dr=c($s,"ValueError"),$s.forEach(t),qr=c(ve," if "),tn=n(ve,"EM",{});var ys=s(tn);jr=c(ys,"create_pr"),ys.forEach(t),Nr=c(ve," is "),on=n(ve,"EM",{});var Es=s(on);Ir=c(Es,"True"),Es.forEach(t),Fr=c(ve," and revision is neither "),an=n(ve,"EM",{});var ws=s(an);Tr=c(ws,"None"),ws.forEach(t),Pr=c(ve," nor "),nn=n(ve,"EM",{});var ks=s(nn);Lr=c(ks,"\u201Cmain\u201D"),ks.forEach(t),ve.forEach(t),it.forEach(t),Or=h(W),ie=n(W,"DIV",{class:!0});var ge=s(ie);j(bo.$$.fragment,ge),Rr=h(ge),sn=n(ge,"P",{});var As=s(sn);Sr=c(As,"Creates a Discussion or Pull Request."),As.forEach(t),Cr=h(ge),vo=n(ge,"P",{});var ka=s(vo);Mr=c(ka,"Pull Requests created programmatically will be in "),rn=n(ka,"CODE",{});var xs=s(rn);Ur=c(xs,'"draft"'),xs.forEach(t),Vr=c(ka," status."),ka.forEach(t),zr=h(ge),$o=n(ge,"P",{});var Aa=s($o);Wr=c(Aa,"Creating a Pull Request with changes can also be done at once with "),qa=n(Aa,"A",{href:!0});var Hs=s(qa);Gr=c(Hs,"HfApi.create_commit()"),Hs.forEach(t),Br=c(Aa,"."),Aa.forEach(t),Kr=h(ge),ja=n(ge,"P",{});var Sa=s(ja);Jr=c(Sa,"Returns: "),Na=n(Sa,"A",{href:!0});var Ds=s(Na);Qr=c(Ds,"DiscussionWithDetails"),Ds.forEach(t),Sa.forEach(t),Xr=h(ge),j(ht.$$.fragment,ge),ge.forEach(t),Yr=h(W),le=n(W,"DIV",{class:!0});var he=s(le);j(yo.$$.fragment,he),Zr=h(he),Eo=n(he,"P",{});var zs=s(Eo);ei=c(zs,"Creates a Pull Request . Pull Requests created programmatically will be in "),ln=n(zs,"CODE",{});var Rp=s(ln);ti=c(Rp,'"draft"'),Rp.forEach(t),oi=c(zs," status."),zs.forEach(t),ai=h(he),wo=n(he,"P",{});var Ws=s(wo);ni=c(Ws,"Creating a Pull Request with changes can also be done at once with "),Ia=n(Ws,"A",{href:!0});var Sp=s(Ia);si=c(Sp,"HfApi.create_commit()"),Sp.forEach(t),ri=c(Ws,";"),Ws.forEach(t),ii=h(he),ko=n(he,"P",{});var Gs=s(ko);li=c(Gs,"This is a wrapper around "),cn=n(Gs,"CODE",{});var Cp=s(cn);ci=c(Cp,"HfApi.create_discusssion"),Cp.forEach(t),pi=c(Gs,"."),Gs.forEach(t),gi=h(he),Fa=n(he,"P",{});var Tp=s(Fa);hi=c(Tp,"Returns: "),Ta=n(Tp,"A",{href:!0});var Mp=s(Ta);di=c(Mp,"DiscussionWithDetails"),Mp.forEach(t),Tp.forEach(t),ui=h(he),j(dt.$$.fragment,he),he.forEach(t),fi=h(W),ut=n(W,"DIV",{class:!0});var Bs=s(ut);j(Ao.$$.fragment,Bs),mi=h(Bs),pn=n(Bs,"P",{});var Up=s(pn);_i=c(Up,"Create an empty repo on the HuggingFace Hub."),Up.forEach(t),Bs.forEach(t),bi=h(W),we=n(W,"DIV",{class:!0});var so=s(we);j(xo.$$.fragment,so),vi=h(so),gn=n(so,"P",{});var Vp=s(gn);$i=c(Vp,"Get info on one specific dataset on huggingface.co."),Vp.forEach(t),yi=h(so),hn=n(so,"P",{});var zp=s(hn);Ei=c(zp,"Dataset can be private if you pass an acceptable token."),zp.forEach(t),wi=h(so),j(ft.$$.fragment,so),so.forEach(t),ki=h(W),We=n(W,"DIV",{class:!0});var Ca=s(We);j(Ho.$$.fragment,Ca),Ai=h(Ca),dn=n(Ca,"P",{});var Wp=s(dn);xi=c(Wp,"Deletes a file in the given repo."),Wp.forEach(t),Hi=h(Ca),j(mt.$$.fragment,Ca),Ca.forEach(t),Di=h(W),Ge=n(W,"DIV",{class:!0});var Ma=s(Ge);j(Do.$$.fragment,Ma),qi=h(Ma),un=n(Ma,"P",{});var Gp=s(un);ji=c(Gp,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Gp.forEach(t),Ni=h(Ma),j(_t.$$.fragment,Ma),Ma.forEach(t),Ii=h(W),Be=n(W,"DIV",{class:!0});var Ua=s(Be);j(qo.$$.fragment,Ua),Fi=h(Ua),fn=n(Ua,"P",{});var Bp=s(fn);Ti=c(Bp,"Edits a comment on a Discussion / Pull Request."),Bp.forEach(t),Pi=h(Ua),j(bt.$$.fragment,Ua),Ua.forEach(t),Li=h(W),vt=n(W,"DIV",{class:!0});var Ks=s(vt);j(jo.$$.fragment,Ks),Oi=h(Ks),mn=n(Ks,"P",{});var Kp=s(mn);Ri=c(Kp,"Gets all valid dataset tags as a nested namespace object."),Kp.forEach(t),Ks.forEach(t),Si=h(W),ke=n(W,"DIV",{class:!0});var ro=s(ke);j(No.$$.fragment,ro),Ci=h(ro),_n=n(ro,"P",{});var Jp=s(_n);Mi=c(Jp,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Jp.forEach(t),Ui=h(ro),Pa=n(ro,"P",{});var Pp=s(Pa);Vi=c(Pp,"Returns: "),La=n(Pp,"A",{href:!0});var Qp=s(La);zi=c(Qp,"DiscussionWithDetails"),Qp.forEach(t),Pp.forEach(t),Wi=h(ro),j($t.$$.fragment,ro),ro.forEach(t),Gi=h(W),yt=n(W,"DIV",{class:!0});var Js=s(yt);j(Io.$$.fragment,Js),Bi=h(Js),bn=n(Js,"P",{});var Xp=s(bn);Ki=c(Xp,`Returns the repository name for a given model ID and optional
organization.`),Xp.forEach(t),Js.forEach(t),Ji=h(W),Et=n(W,"DIV",{class:!0});var Qs=s(Et);j(Fo.$$.fragment,Qs),Qi=h(Qs),vn=n(Qs,"P",{});var Yp=s(vn);Xi=c(Yp,"Gets all valid model tags as a nested namespace object"),Yp.forEach(t),Qs.forEach(t),Yi=h(W),_e=n(W,"DIV",{class:!0});var Ye=s(_e);j(To.$$.fragment,Ye),Zi=h(Ye),$n=n(Ye,"P",{});var Zp=s($n);el=c(Zp,"Fetches Discussions and Pull Requests for the given repo."),Zp.forEach(t),tl=h(Ye),yn=n(Ye,"P",{});var eg=s(yn);ol=c(eg,"Example:"),eg.forEach(t),al=h(Ye),j(wt.$$.fragment,Ye),nl=h(Ye),j(kt.$$.fragment,Ye),Ye.forEach(t),sl=h(W),Ae=n(W,"DIV",{class:!0});var io=s(Ae);j(Po.$$.fragment,io),rl=h(io),En=n(io,"P",{});var tg=s(En);il=c(tg,"Hides a comment on a Discussion / Pull Request."),tg.forEach(t),ll=h(io),j(At.$$.fragment,io),cl=h(io),j(xt.$$.fragment,io),io.forEach(t),pl=h(W),xe=n(W,"DIV",{class:!0});var lo=s(xe);j(Lo.$$.fragment,lo),gl=h(lo),wn=n(lo,"P",{});var og=s(wn);hl=c(og,"Get the public list of all the datasets on huggingface.co"),og.forEach(t),dl=h(lo),j(Ht.$$.fragment,lo),ul=h(lo),j(Dt.$$.fragment,lo),lo.forEach(t),fl=h(W),qt=n(W,"DIV",{class:!0});var Xs=s(qt);j(Oo.$$.fragment,Xs),ml=h(Xs),kn=n(Xs,"P",{});var ag=s(kn);_l=c(ag,"Get the public list of all the metrics on huggingface.co"),ag.forEach(t),Xs.forEach(t),bl=h(W),be=n(W,"DIV",{class:!0});var Ze=s(be);j(Ro.$$.fragment,Ze),vl=h(Ze),An=n(Ze,"P",{});var ng=s(An);$l=c(ng,"Get the public list of all the models on huggingface.co"),ng.forEach(t),yl=h(Ze),So=n(Ze,"P",{});var Ys=s(So);El=c(Ys,"Returns: List of "),Oa=n(Ys,"A",{href:!0});var sg=s(Oa);wl=c(sg,"huggingface_hub.hf_api.ModelInfo"),sg.forEach(t),kl=c(Ys," objects"),Ys.forEach(t),Al=h(Ze),j(jt.$$.fragment,Ze),xl=h(Ze),j(Nt.$$.fragment,Ze),Ze.forEach(t),Hl=h(W),It=n(W,"DIV",{class:!0});var Zs=s(It);j(Co.$$.fragment,Zs),Dl=h(Zs),xn=n(Zs,"P",{});var rg=s(xn);ql=c(rg,"Get the list of files in a given repo."),rg.forEach(t),Zs.forEach(t),jl=h(W),Ft=n(W,"DIV",{class:!0});var er=s(Ft);j(Mo.$$.fragment,er),Nl=h(er),Hn=n(er,"P",{});var ig=s(Hn);Il=c(ig,"Get the public list of all Spaces on huggingface.co"),ig.forEach(t),er.forEach(t),Fl=h(W),Ke=n(W,"DIV",{class:!0});var Va=s(Ke);j(Uo.$$.fragment,Va),Tl=h(Va),Dn=n(Va,"P",{});var lg=s(Dn);Pl=c(lg,"Merges a Pull Request."),lg.forEach(t),Ll=h(Va),j(Tt.$$.fragment,Va),Va.forEach(t),Ol=h(W),He=n(W,"DIV",{class:!0});var co=s(He);j(Vo.$$.fragment,co),Rl=h(co),qn=n(co,"P",{});var cg=s(qn);Sl=c(cg,"Get info on one specific model on huggingface.co"),cg.forEach(t),Cl=h(co),jn=n(co,"P",{});var pg=s(jn);Ml=c(pg,"Model can be private if you pass an acceptable token or are logged in."),pg.forEach(t),Ul=h(co),j(Pt.$$.fragment,co),co.forEach(t),Vl=h(W),De=n(W,"DIV",{class:!0});var po=s(De);j(zo.$$.fragment,po),zl=h(po),Nn=n(po,"P",{});var gg=s(Nn);Wl=c(gg,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),gg.forEach(t),Gl=h(po),Wo=n(po,"P",{});var tr=s(Wo);Bl=c(tr,`Note there are certain limitations. For more information about moving
repositories, please see
`),Go=n(tr,"A",{href:!0,rel:!0});var hg=s(Go);Kl=c(hg,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),hg.forEach(t),Jl=c(tr,"."),tr.forEach(t),Ql=h(po),j(Lt.$$.fragment,po),po.forEach(t),Xl=h(W),qe=n(W,"DIV",{class:!0});var go=s(qe);j(Bo.$$.fragment,go),Yl=h(go),In=n(go,"P",{});var dg=s(In);Zl=c(dg,"Renames a Discussion."),dg.forEach(t),ec=h(go),j(Ot.$$.fragment,go),tc=h(go),j(Rt.$$.fragment,go),go.forEach(t),oc=h(W),Je=n(W,"DIV",{class:!0});var za=s(Je);j(Ko.$$.fragment,za),ac=h(za),Fn=n(za,"P",{});var ug=s(Fn);nc=c(ug,"Get the info object for a given repo of a given type."),ug.forEach(t),sc=h(za),j(St.$$.fragment,za),za.forEach(t),rc=h(W),Ct=n(W,"DIV",{class:!0});var or=s(Ct);j(Jo.$$.fragment,or),ic=h(or),Tn=n(or,"P",{});var fg=s(Tn);lc=c(fg,`Saves the passed access token so git can correctly authenticate the
user.`),fg.forEach(t),or.forEach(t),cc=h(W),je=n(W,"DIV",{class:!0});var ho=s(je);j(Qo.$$.fragment,ho),pc=h(ho),Pn=n(ho,"P",{});var mg=s(Pn);gc=c(mg,"Get info on one specific Space on huggingface.co."),mg.forEach(t),hc=h(ho),Ln=n(ho,"P",{});var _g=s(Ln);dc=c(_g,"Space can be private if you pass an acceptable token."),_g.forEach(t),uc=h(ho),j(Mt.$$.fragment,ho),ho.forEach(t),fc=h(W),Ut=n(W,"DIV",{class:!0});var ar=s(Ut);j(Xo.$$.fragment,ar),mc=h(ar),On=n(ar,"P",{});var bg=s(On);_c=c(bg,"Resets the user\u2019s access token."),bg.forEach(t),ar.forEach(t),bc=h(W),Qe=n(W,"DIV",{class:!0});var Wa=s(Qe);j(Yo.$$.fragment,Wa),vc=h(Wa),Rn=n(Wa,"P",{});var vg=s(Rn);$c=c(vg,"Update the visibility setting of a repository."),vg.forEach(t),yc=h(Wa),j(Vt.$$.fragment,Wa),Wa.forEach(t),Ec=h(W),Ne=n(W,"DIV",{class:!0});var uo=s(Ne);j(Zo.$$.fragment,uo),wc=h(uo),Sn=n(uo,"P",{});var $g=s(Sn);kc=c($g,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),$g.forEach(t),Ac=h(uo),j(zt.$$.fragment,uo),xc=h(uo),j(Wt.$$.fragment,uo),uo.forEach(t),Hc=h(W),ce=n(W,"DIV",{class:!0});var Ie=s(ce);j(ea.$$.fragment,Ie),Dc=h(Ie),Cn=n(Ie,"P",{});var yg=s(Cn);qc=c(yg,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),yg.forEach(t),jc=h(Ie),Mn=n(Ie,"P",{});var Eg=s(Mn);Nc=c(Eg,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Eg.forEach(t),Ic=h(Ie),ta=n(Ie,"P",{});var nr=s(ta);Fc=c(nr,"Uses "),Un=n(nr,"CODE",{});var wg=s(Un);Tc=c(wg,"HfApi.create_commit"),wg.forEach(t),Pc=c(nr," under the hood."),nr.forEach(t),Lc=h(Ie),j(Gt.$$.fragment,Ie),Oc=h(Ie),j(Bt.$$.fragment,Ie),Ie.forEach(t),Rc=h(W),Kt=n(W,"DIV",{class:!0});var sr=s(Kt);j(oa.$$.fragment,sr),Sc=h(sr),Vn=n(sr,"P",{});var kg=s(Vn);Cc=c(kg,"Call HF API to know \u201Cwhoami\u201D."),kg.forEach(t),sr.forEach(t),W.forEach(t),qs=h(o),ot=n(o,"DIV",{class:!0});var rr=s(ot);j(aa.$$.fragment,rr),Mc=h(rr),zn=n(rr,"P",{});var Ag=s(zn);Uc=c(Ag,"Info about a model accessible from huggingface.co"),Ag.forEach(t),rr.forEach(t),js=h(o),at=n(o,"DIV",{class:!0});var ir=s(at);j(na.$$.fragment,ir),Vc=h(ir),Wn=n(ir,"P",{});var xg=s(Wn);zc=c(xg,"Info about a dataset accessible from huggingface.co"),xg.forEach(t),ir.forEach(t),Ns=h(o),Pe=n(o,"DIV",{class:!0});var Ga=s(Pe);j(sa.$$.fragment,Ga),Wc=h(Ga),Gn=n(Ga,"P",{});var Hg=s(Gn);Gc=c(Hg,"Info about a Space accessible from huggingface.co"),Hg.forEach(t),Bc=h(Ga),Bn=n(Ga,"P",{});var Dg=s(Bn);Kc=c(Dg,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Dg.forEach(t),Ga.forEach(t),Is=h(o),nt=n(o,"DIV",{class:!0});var lr=s(nt);j(ra.$$.fragment,lr),Jc=h(lr),Kn=n(lr,"P",{});var qg=s(Kn);Qc=c(qg,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),qg.forEach(t),lr.forEach(t),Fs=h(o),st=n(o,"H2",{class:!0});var cr=s(st);Jt=n(cr,"A",{id:!0,class:!0,href:!0});var jg=s(Jt);Jn=n(jg,"SPAN",{});var Ng=s(Jn);j(ia.$$.fragment,Ng),Ng.forEach(t),jg.forEach(t),Xc=h(cr),Qn=n(cr,"SPAN",{});var Ig=s(Qn);Yc=c(Ig,"Hugging Face local storage"),Ig.forEach(t),cr.forEach(t),Ts=h(o),la=n(o,"P",{});var Lp=s(la);Xn=n(Lp,"CODE",{});var Fg=s(Xn);Zc=c(Fg,"huggingface_hub"),Fg.forEach(t),ep=c(Lp,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Lp.forEach(t),Ps=h(o),Qt=n(o,"P",{});var pr=s(Qt);tp=c(pr,"It does this using the "),Ra=n(pr,"A",{href:!0});var Tg=s(Ra);op=c(Tg,"HfFolder"),Tg.forEach(t),ap=c(pr," utility, which saves data at the root of the user."),pr.forEach(t),Ls=h(o),ye=n(o,"DIV",{class:!0});var fo=s(ye);j(ca.$$.fragment,fo),np=h(fo),Xt=n(fo,"DIV",{class:!0});var gr=s(Xt);j(pa.$$.fragment,gr),sp=h(gr),Yn=n(gr,"P",{});var Pg=s(Yn);rp=c(Pg,"Deletes the token from storage. Does not fail if token does not exist."),Pg.forEach(t),gr.forEach(t),ip=h(fo),Xe=n(fo,"DIV",{class:!0});var Ba=s(Xe);j(ga.$$.fragment,Ba),lp=h(Ba),Zn=n(Ba,"P",{});var Lg=s(Zn);cp=c(Lg,"Get token or None if not existent."),Lg.forEach(t),pp=h(Ba),ha=n(Ba,"P",{});var hr=s(ha);gp=c(hr,"Note that a token can be also provided using the "),es=n(hr,"CODE",{});var Og=s(es);hp=c(Og,"HUGGING_FACE_HUB_TOKEN"),Og.forEach(t),dp=c(hr,`
environment variable.`),hr.forEach(t),Ba.forEach(t),up=h(fo),Yt=n(fo,"DIV",{class:!0});var dr=s(Yt);j(da.$$.fragment,dr),fp=h(dr),ts=n(dr,"P",{});var Rg=s(ts);mp=c(Rg,"Save token, creating folder as needed."),Rg.forEach(t),dr.forEach(t),fo.forEach(t),Os=h(o),rt=n(o,"H2",{class:!0});var ur=s(rt);Zt=n(ur,"A",{id:!0,class:!0,href:!0});var Sg=s(Zt);os=n(Sg,"SPAN",{});var Cg=s(os);j(ua.$$.fragment,Cg),Cg.forEach(t),Sg.forEach(t),_p=h(ur),as=n(ur,"SPAN",{});var Mg=s(as);bp=c(Mg,"Filtering helpers"),Mg.forEach(t),ur.forEach(t),Rs=h(o),eo=n(o,"P",{});var fr=s(eo);vp=c(fr,"Some helpers to filter repositories on the Hub are available in the "),ns=n(fr,"CODE",{});var Ug=s(ns);$p=c(Ug,"huggingface_hub"),Ug.forEach(t),yp=c(fr," package."),fr.forEach(t),Ss=h(o),Le=n(o,"DIV",{class:!0});var Ka=s(Le);j(fa.$$.fragment,Ka),Ep=h(Ka),ss=n(Ka,"P",{});var Vg=s(ss);wp=c(Vg,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Vg.forEach(t),kp=h(Ka),j(to.$$.fragment,Ka),Ka.forEach(t),Cs=h(o),Oe=n(o,"DIV",{class:!0});var Ja=s(Oe);j(ma.$$.fragment,Ja),Ap=h(Ja),rs=n(Ja,"P",{});var zg=s(rs);xp=c(zg,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),zg.forEach(t),Hp=h(Ja),j(oo.$$.fragment,Ja),Ja.forEach(t),Ms=h(o),Re=n(o,"DIV",{class:!0});var Qa=s(Re);j(_a.$$.fragment,Qa),Dp=h(Qa),is=n(Qa,"P",{});var Wg=s(is);qp=c(Wg,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Wg.forEach(t),jp=h(Qa),j(ao.$$.fragment,Qa),Qa.forEach(t),Us=h(o),Se=n(o,"DIV",{class:!0});var Xa=s(Se);j(ba.$$.fragment,Xa),Np=h(Xa),ls=n(Xa,"P",{});var Gg=s(ls);Ip=c(Gg,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Gg.forEach(t),Fp=h(Xa),j(no.$$.fragment,Xa),Xa.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(Th)),$(i,"id","huggingface_hub.HfApi"),$(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(i,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qa,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(Na,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ia,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(Ta,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(La,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oa,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Go,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(Go,"rel","nofollow"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Jt,"id","huggingface_hub.HfFolder"),$(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Jt,"href","#huggingface_hub.HfFolder"),$(st,"class","relative group"),$(Ra,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Zt,"id","huggingface_hub.DatasetFilter"),$(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Zt,"href","#huggingface_hub.DatasetFilter"),$(rt,"class","relative group"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,A){e(document.head,p),w(o,v,A),w(o,f,A),e(f,i),e(i,d),N(r,d,null),e(f,u),e(f,D),e(D,_),w(o,x,A),w(o,E,A),e(E,b),e(E,k),e(k,P),e(E,L),w(o,O,A),w(o,m,A),e(m,H),e(m,V),e(V,U),e(m,R),w(o,K,A),w(o,G,A),e(G,y),w(o,C,A),N(S,o,A),w(o,X,A),w(o,te,A),e(te,Y),e(te,J),e(J,Z),e(te,ae),w(o,B,A),N(Q,o,A),w(o,oe,A),w(o,ne,A),e(ne,Ue),e(ne,fe),e(fe,et),e(ne,Ve),w(o,Fe,A),w(o,M,A),N($e,M,null),e(M,xa),e(M,pe),N(Te,pe,null),e(pe,Ha),e(pe,tt),e(tt,Da),e(pe,mr),N(lt,pe,null),e(pe,_r),N(ct,pe,null),e(M,br),e(M,Ee),N(mo,Ee,null),e(Ee,vr),e(Ee,Ya),e(Ya,$r),e(Ee,yr),N(pt,Ee,null),e(Ee,Er),N(gt,Ee,null),e(M,wr),e(M,ze),N(_o,ze,null),e(ze,kr),e(ze,Za),e(Za,Ar),e(ze,xr),e(ze,me),e(me,Hr),e(me,en),e(en,Dr),e(me,qr),e(me,tn),e(tn,jr),e(me,Nr),e(me,on),e(on,Ir),e(me,Fr),e(me,an),e(an,Tr),e(me,Pr),e(me,nn),e(nn,Lr),e(M,Or),e(M,ie),N(bo,ie,null),e(ie,Rr),e(ie,sn),e(sn,Sr),e(ie,Cr),e(ie,vo),e(vo,Mr),e(vo,rn),e(rn,Ur),e(vo,Vr),e(ie,zr),e(ie,$o),e($o,Wr),e($o,qa),e(qa,Gr),e($o,Br),e(ie,Kr),e(ie,ja),e(ja,Jr),e(ja,Na),e(Na,Qr),e(ie,Xr),N(ht,ie,null),e(M,Yr),e(M,le),N(yo,le,null),e(le,Zr),e(le,Eo),e(Eo,ei),e(Eo,ln),e(ln,ti),e(Eo,oi),e(le,ai),e(le,wo),e(wo,ni),e(wo,Ia),e(Ia,si),e(wo,ri),e(le,ii),e(le,ko),e(ko,li),e(ko,cn),e(cn,ci),e(ko,pi),e(le,gi),e(le,Fa),e(Fa,hi),e(Fa,Ta),e(Ta,di),e(le,ui),N(dt,le,null),e(M,fi),e(M,ut),N(Ao,ut,null),e(ut,mi),e(ut,pn),e(pn,_i),e(M,bi),e(M,we),N(xo,we,null),e(we,vi),e(we,gn),e(gn,$i),e(we,yi),e(we,hn),e(hn,Ei),e(we,wi),N(ft,we,null),e(M,ki),e(M,We),N(Ho,We,null),e(We,Ai),e(We,dn),e(dn,xi),e(We,Hi),N(mt,We,null),e(M,Di),e(M,Ge),N(Do,Ge,null),e(Ge,qi),e(Ge,un),e(un,ji),e(Ge,Ni),N(_t,Ge,null),e(M,Ii),e(M,Be),N(qo,Be,null),e(Be,Fi),e(Be,fn),e(fn,Ti),e(Be,Pi),N(bt,Be,null),e(M,Li),e(M,vt),N(jo,vt,null),e(vt,Oi),e(vt,mn),e(mn,Ri),e(M,Si),e(M,ke),N(No,ke,null),e(ke,Ci),e(ke,_n),e(_n,Mi),e(ke,Ui),e(ke,Pa),e(Pa,Vi),e(Pa,La),e(La,zi),e(ke,Wi),N($t,ke,null),e(M,Gi),e(M,yt),N(Io,yt,null),e(yt,Bi),e(yt,bn),e(bn,Ki),e(M,Ji),e(M,Et),N(Fo,Et,null),e(Et,Qi),e(Et,vn),e(vn,Xi),e(M,Yi),e(M,_e),N(To,_e,null),e(_e,Zi),e(_e,$n),e($n,el),e(_e,tl),e(_e,yn),e(yn,ol),e(_e,al),N(wt,_e,null),e(_e,nl),N(kt,_e,null),e(M,sl),e(M,Ae),N(Po,Ae,null),e(Ae,rl),e(Ae,En),e(En,il),e(Ae,ll),N(At,Ae,null),e(Ae,cl),N(xt,Ae,null),e(M,pl),e(M,xe),N(Lo,xe,null),e(xe,gl),e(xe,wn),e(wn,hl),e(xe,dl),N(Ht,xe,null),e(xe,ul),N(Dt,xe,null),e(M,fl),e(M,qt),N(Oo,qt,null),e(qt,ml),e(qt,kn),e(kn,_l),e(M,bl),e(M,be),N(Ro,be,null),e(be,vl),e(be,An),e(An,$l),e(be,yl),e(be,So),e(So,El),e(So,Oa),e(Oa,wl),e(So,kl),e(be,Al),N(jt,be,null),e(be,xl),N(Nt,be,null),e(M,Hl),e(M,It),N(Co,It,null),e(It,Dl),e(It,xn),e(xn,ql),e(M,jl),e(M,Ft),N(Mo,Ft,null),e(Ft,Nl),e(Ft,Hn),e(Hn,Il),e(M,Fl),e(M,Ke),N(Uo,Ke,null),e(Ke,Tl),e(Ke,Dn),e(Dn,Pl),e(Ke,Ll),N(Tt,Ke,null),e(M,Ol),e(M,He),N(Vo,He,null),e(He,Rl),e(He,qn),e(qn,Sl),e(He,Cl),e(He,jn),e(jn,Ml),e(He,Ul),N(Pt,He,null),e(M,Vl),e(M,De),N(zo,De,null),e(De,zl),e(De,Nn),e(Nn,Wl),e(De,Gl),e(De,Wo),e(Wo,Bl),e(Wo,Go),e(Go,Kl),e(Wo,Jl),e(De,Ql),N(Lt,De,null),e(M,Xl),e(M,qe),N(Bo,qe,null),e(qe,Yl),e(qe,In),e(In,Zl),e(qe,ec),N(Ot,qe,null),e(qe,tc),N(Rt,qe,null),e(M,oc),e(M,Je),N(Ko,Je,null),e(Je,ac),e(Je,Fn),e(Fn,nc),e(Je,sc),N(St,Je,null),e(M,rc),e(M,Ct),N(Jo,Ct,null),e(Ct,ic),e(Ct,Tn),e(Tn,lc),e(M,cc),e(M,je),N(Qo,je,null),e(je,pc),e(je,Pn),e(Pn,gc),e(je,hc),e(je,Ln),e(Ln,dc),e(je,uc),N(Mt,je,null),e(M,fc),e(M,Ut),N(Xo,Ut,null),e(Ut,mc),e(Ut,On),e(On,_c),e(M,bc),e(M,Qe),N(Yo,Qe,null),e(Qe,vc),e(Qe,Rn),e(Rn,$c),e(Qe,yc),N(Vt,Qe,null),e(M,Ec),e(M,Ne),N(Zo,Ne,null),e(Ne,wc),e(Ne,Sn),e(Sn,kc),e(Ne,Ac),N(zt,Ne,null),e(Ne,xc),N(Wt,Ne,null),e(M,Hc),e(M,ce),N(ea,ce,null),e(ce,Dc),e(ce,Cn),e(Cn,qc),e(ce,jc),e(ce,Mn),e(Mn,Nc),e(ce,Ic),e(ce,ta),e(ta,Fc),e(ta,Un),e(Un,Tc),e(ta,Pc),e(ce,Lc),N(Gt,ce,null),e(ce,Oc),N(Bt,ce,null),e(M,Rc),e(M,Kt),N(oa,Kt,null),e(Kt,Sc),e(Kt,Vn),e(Vn,Cc),w(o,qs,A),w(o,ot,A),N(aa,ot,null),e(ot,Mc),e(ot,zn),e(zn,Uc),w(o,js,A),w(o,at,A),N(na,at,null),e(at,Vc),e(at,Wn),e(Wn,zc),w(o,Ns,A),w(o,Pe,A),N(sa,Pe,null),e(Pe,Wc),e(Pe,Gn),e(Gn,Gc),e(Pe,Bc),e(Pe,Bn),e(Bn,Kc),w(o,Is,A),w(o,nt,A),N(ra,nt,null),e(nt,Jc),e(nt,Kn),e(Kn,Qc),w(o,Fs,A),w(o,st,A),e(st,Jt),e(Jt,Jn),N(ia,Jn,null),e(st,Xc),e(st,Qn),e(Qn,Yc),w(o,Ts,A),w(o,la,A),e(la,Xn),e(Xn,Zc),e(la,ep),w(o,Ps,A),w(o,Qt,A),e(Qt,tp),e(Qt,Ra),e(Ra,op),e(Qt,ap),w(o,Ls,A),w(o,ye,A),N(ca,ye,null),e(ye,np),e(ye,Xt),N(pa,Xt,null),e(Xt,sp),e(Xt,Yn),e(Yn,rp),e(ye,ip),e(ye,Xe),N(ga,Xe,null),e(Xe,lp),e(Xe,Zn),e(Zn,cp),e(Xe,pp),e(Xe,ha),e(ha,gp),e(ha,es),e(es,hp),e(ha,dp),e(ye,up),e(ye,Yt),N(da,Yt,null),e(Yt,fp),e(Yt,ts),e(ts,mp),w(o,Os,A),w(o,rt,A),e(rt,Zt),e(Zt,os),N(ua,os,null),e(rt,_p),e(rt,as),e(as,bp),w(o,Rs,A),w(o,eo,A),e(eo,vp),e(eo,ns),e(ns,$p),e(eo,yp),w(o,Ss,A),w(o,Le,A),N(fa,Le,null),e(Le,Ep),e(Le,ss),e(ss,wp),e(Le,kp),N(to,Le,null),w(o,Cs,A),w(o,Oe,A),N(ma,Oe,null),e(Oe,Ap),e(Oe,rs),e(rs,xp),e(Oe,Hp),N(oo,Oe,null),w(o,Ms,A),w(o,Re,A),N(_a,Re,null),e(Re,Dp),e(Re,is),e(is,qp),e(Re,jp),N(ao,Re,null),w(o,Us,A),w(o,Se,A),N(ba,Se,null),e(Se,Np),e(Se,ls),e(ls,Ip),e(Se,Fp),N(no,Se,null),Vs=!0},p(o,[A]){const va={};A&2&&(va.$$scope={dirty:A,ctx:o}),lt.$set(va);const cs={};A&2&&(cs.$$scope={dirty:A,ctx:o}),ct.$set(cs);const ps={};A&2&&(ps.$$scope={dirty:A,ctx:o}),pt.$set(ps);const gs={};A&2&&(gs.$$scope={dirty:A,ctx:o}),gt.$set(gs);const $a={};A&2&&($a.$$scope={dirty:A,ctx:o}),ht.$set($a);const hs={};A&2&&(hs.$$scope={dirty:A,ctx:o}),dt.$set(hs);const ya={};A&2&&(ya.$$scope={dirty:A,ctx:o}),ft.$set(ya);const ds={};A&2&&(ds.$$scope={dirty:A,ctx:o}),mt.$set(ds);const us={};A&2&&(us.$$scope={dirty:A,ctx:o}),_t.$set(us);const Ea={};A&2&&(Ea.$$scope={dirty:A,ctx:o}),bt.$set(Ea);const fs={};A&2&&(fs.$$scope={dirty:A,ctx:o}),$t.$set(fs);const wa={};A&2&&(wa.$$scope={dirty:A,ctx:o}),wt.$set(wa);const ms={};A&2&&(ms.$$scope={dirty:A,ctx:o}),kt.$set(ms);const W={};A&2&&(W.$$scope={dirty:A,ctx:o}),At.$set(W);const Ce={};A&2&&(Ce.$$scope={dirty:A,ctx:o}),xt.$set(Ce);const _s={};A&2&&(_s.$$scope={dirty:A,ctx:o}),Ht.$set(_s);const Me={};A&2&&(Me.$$scope={dirty:A,ctx:o}),Dt.$set(Me);const bs={};A&2&&(bs.$$scope={dirty:A,ctx:o}),jt.$set(bs);const it={};A&2&&(it.$$scope={dirty:A,ctx:o}),Nt.$set(it);const vs={};A&2&&(vs.$$scope={dirty:A,ctx:o}),Tt.$set(vs);const ve={};A&2&&(ve.$$scope={dirty:A,ctx:o}),Pt.$set(ve);const $s={};A&2&&($s.$$scope={dirty:A,ctx:o}),Lt.$set($s);const ys={};A&2&&(ys.$$scope={dirty:A,ctx:o}),Ot.$set(ys);const Es={};A&2&&(Es.$$scope={dirty:A,ctx:o}),Rt.$set(Es);const ws={};A&2&&(ws.$$scope={dirty:A,ctx:o}),St.$set(ws);const ks={};A&2&&(ks.$$scope={dirty:A,ctx:o}),Mt.$set(ks);const ge={};A&2&&(ge.$$scope={dirty:A,ctx:o}),Vt.$set(ge);const As={};A&2&&(As.$$scope={dirty:A,ctx:o}),zt.$set(As);const ka={};A&2&&(ka.$$scope={dirty:A,ctx:o}),Wt.$set(ka);const xs={};A&2&&(xs.$$scope={dirty:A,ctx:o}),Gt.$set(xs);const Aa={};A&2&&(Aa.$$scope={dirty:A,ctx:o}),Bt.$set(Aa);const Hs={};A&2&&(Hs.$$scope={dirty:A,ctx:o}),to.$set(Hs);const Sa={};A&2&&(Sa.$$scope={dirty:A,ctx:o}),oo.$set(Sa);const Ds={};A&2&&(Ds.$$scope={dirty:A,ctx:o}),ao.$set(Ds);const he={};A&2&&(he.$$scope={dirty:A,ctx:o}),no.$set(he)},i(o){Vs||(I(r.$$.fragment,o),I(S.$$.fragment,o),I(Q.$$.fragment,o),I($e.$$.fragment,o),I(Te.$$.fragment,o),I(lt.$$.fragment,o),I(ct.$$.fragment,o),I(mo.$$.fragment,o),I(pt.$$.fragment,o),I(gt.$$.fragment,o),I(_o.$$.fragment,o),I(bo.$$.fragment,o),I(ht.$$.fragment,o),I(yo.$$.fragment,o),I(dt.$$.fragment,o),I(Ao.$$.fragment,o),I(xo.$$.fragment,o),I(ft.$$.fragment,o),I(Ho.$$.fragment,o),I(mt.$$.fragment,o),I(Do.$$.fragment,o),I(_t.$$.fragment,o),I(qo.$$.fragment,o),I(bt.$$.fragment,o),I(jo.$$.fragment,o),I(No.$$.fragment,o),I($t.$$.fragment,o),I(Io.$$.fragment,o),I(Fo.$$.fragment,o),I(To.$$.fragment,o),I(wt.$$.fragment,o),I(kt.$$.fragment,o),I(Po.$$.fragment,o),I(At.$$.fragment,o),I(xt.$$.fragment,o),I(Lo.$$.fragment,o),I(Ht.$$.fragment,o),I(Dt.$$.fragment,o),I(Oo.$$.fragment,o),I(Ro.$$.fragment,o),I(jt.$$.fragment,o),I(Nt.$$.fragment,o),I(Co.$$.fragment,o),I(Mo.$$.fragment,o),I(Uo.$$.fragment,o),I(Tt.$$.fragment,o),I(Vo.$$.fragment,o),I(Pt.$$.fragment,o),I(zo.$$.fragment,o),I(Lt.$$.fragment,o),I(Bo.$$.fragment,o),I(Ot.$$.fragment,o),I(Rt.$$.fragment,o),I(Ko.$$.fragment,o),I(St.$$.fragment,o),I(Jo.$$.fragment,o),I(Qo.$$.fragment,o),I(Mt.$$.fragment,o),I(Xo.$$.fragment,o),I(Yo.$$.fragment,o),I(Vt.$$.fragment,o),I(Zo.$$.fragment,o),I(zt.$$.fragment,o),I(Wt.$$.fragment,o),I(ea.$$.fragment,o),I(Gt.$$.fragment,o),I(Bt.$$.fragment,o),I(oa.$$.fragment,o),I(aa.$$.fragment,o),I(na.$$.fragment,o),I(sa.$$.fragment,o),I(ra.$$.fragment,o),I(ia.$$.fragment,o),I(ca.$$.fragment,o),I(pa.$$.fragment,o),I(ga.$$.fragment,o),I(da.$$.fragment,o),I(ua.$$.fragment,o),I(fa.$$.fragment,o),I(to.$$.fragment,o),I(ma.$$.fragment,o),I(oo.$$.fragment,o),I(_a.$$.fragment,o),I(ao.$$.fragment,o),I(ba.$$.fragment,o),I(no.$$.fragment,o),Vs=!0)},o(o){F(r.$$.fragment,o),F(S.$$.fragment,o),F(Q.$$.fragment,o),F($e.$$.fragment,o),F(Te.$$.fragment,o),F(lt.$$.fragment,o),F(ct.$$.fragment,o),F(mo.$$.fragment,o),F(pt.$$.fragment,o),F(gt.$$.fragment,o),F(_o.$$.fragment,o),F(bo.$$.fragment,o),F(ht.$$.fragment,o),F(yo.$$.fragment,o),F(dt.$$.fragment,o),F(Ao.$$.fragment,o),F(xo.$$.fragment,o),F(ft.$$.fragment,o),F(Ho.$$.fragment,o),F(mt.$$.fragment,o),F(Do.$$.fragment,o),F(_t.$$.fragment,o),F(qo.$$.fragment,o),F(bt.$$.fragment,o),F(jo.$$.fragment,o),F(No.$$.fragment,o),F($t.$$.fragment,o),F(Io.$$.fragment,o),F(Fo.$$.fragment,o),F(To.$$.fragment,o),F(wt.$$.fragment,o),F(kt.$$.fragment,o),F(Po.$$.fragment,o),F(At.$$.fragment,o),F(xt.$$.fragment,o),F(Lo.$$.fragment,o),F(Ht.$$.fragment,o),F(Dt.$$.fragment,o),F(Oo.$$.fragment,o),F(Ro.$$.fragment,o),F(jt.$$.fragment,o),F(Nt.$$.fragment,o),F(Co.$$.fragment,o),F(Mo.$$.fragment,o),F(Uo.$$.fragment,o),F(Tt.$$.fragment,o),F(Vo.$$.fragment,o),F(Pt.$$.fragment,o),F(zo.$$.fragment,o),F(Lt.$$.fragment,o),F(Bo.$$.fragment,o),F(Ot.$$.fragment,o),F(Rt.$$.fragment,o),F(Ko.$$.fragment,o),F(St.$$.fragment,o),F(Jo.$$.fragment,o),F(Qo.$$.fragment,o),F(Mt.$$.fragment,o),F(Xo.$$.fragment,o),F(Yo.$$.fragment,o),F(Vt.$$.fragment,o),F(Zo.$$.fragment,o),F(zt.$$.fragment,o),F(Wt.$$.fragment,o),F(ea.$$.fragment,o),F(Gt.$$.fragment,o),F(Bt.$$.fragment,o),F(oa.$$.fragment,o),F(aa.$$.fragment,o),F(na.$$.fragment,o),F(sa.$$.fragment,o),F(ra.$$.fragment,o),F(ia.$$.fragment,o),F(ca.$$.fragment,o),F(pa.$$.fragment,o),F(ga.$$.fragment,o),F(da.$$.fragment,o),F(ua.$$.fragment,o),F(fa.$$.fragment,o),F(to.$$.fragment,o),F(ma.$$.fragment,o),F(oo.$$.fragment,o),F(_a.$$.fragment,o),F(ao.$$.fragment,o),F(ba.$$.fragment,o),F(no.$$.fragment,o),Vs=!1},d(o){t(p),o&&t(v),o&&t(f),T(r),o&&t(x),o&&t(E),o&&t(O),o&&t(m),o&&t(K),o&&t(G),o&&t(C),T(S,o),o&&t(X),o&&t(te),o&&t(B),T(Q,o),o&&t(oe),o&&t(ne),o&&t(Fe),o&&t(M),T($e),T(Te),T(lt),T(ct),T(mo),T(pt),T(gt),T(_o),T(bo),T(ht),T(yo),T(dt),T(Ao),T(xo),T(ft),T(Ho),T(mt),T(Do),T(_t),T(qo),T(bt),T(jo),T(No),T($t),T(Io),T(Fo),T(To),T(wt),T(kt),T(Po),T(At),T(xt),T(Lo),T(Ht),T(Dt),T(Oo),T(Ro),T(jt),T(Nt),T(Co),T(Mo),T(Uo),T(Tt),T(Vo),T(Pt),T(zo),T(Lt),T(Bo),T(Ot),T(Rt),T(Ko),T(St),T(Jo),T(Qo),T(Mt),T(Xo),T(Yo),T(Vt),T(Zo),T(zt),T(Wt),T(ea),T(Gt),T(Bt),T(oa),o&&t(qs),o&&t(ot),T(aa),o&&t(js),o&&t(at),T(na),o&&t(Ns),o&&t(Pe),T(sa),o&&t(Is),o&&t(nt),T(ra),o&&t(Fs),o&&t(st),T(ia),o&&t(Ts),o&&t(la),o&&t(Ps),o&&t(Qt),o&&t(Ls),o&&t(ye),T(ca),T(pa),T(ga),T(da),o&&t(Os),o&&t(rt),T(ua),o&&t(Rs),o&&t(eo),o&&t(Ss),o&&t(Le),T(fa),T(to),o&&t(Cs),o&&t(Oe),T(ma),T(oo),o&&t(Ms),o&&t(Re),T(_a),T(ao),o&&t(Us),o&&t(Se),T(ba),T(no)}}}const Th={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Ph(z){return Xg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uh extends Bg{constructor(p){super();Kg(this,p,Ph,Fh,Jg,{})}}export{Uh as default,Th as metadata};
