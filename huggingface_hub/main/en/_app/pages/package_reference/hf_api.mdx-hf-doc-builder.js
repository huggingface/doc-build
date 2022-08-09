import{S as kg,i as Ag,s as xg,e as a,k as g,w as q,t as l,M as Hg,c as n,d as t,m as h,a as s,x as j,h as c,b as $,G as e,g as w,y as N,q as I,o as F,B as T,v as Dg,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as ee}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _p}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as de}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function qg(z){let p,v,f,i,d;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function jg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Ng(z){let p,v,f,i,d;return i=new re({props:{code:`
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Ig(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Fg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Tg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Pg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Lg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G,y,C,S,X,te,Y,J,Z,ae,B;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),y=g(),C=a("li"),S=a("a"),X=l("RevisionNotFoundError"),te=l(`
If the revision to download from cannot be found.`),Y=g(),J=a("li"),Z=a("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=n(Q,"P",{});var oe=s(p);v=c(oe,"Raises the following errors:"),oe.forEach(t),f=h(Q),i=n(Q,"UL",{});var ne=s(i);d=n(ne,"LI",{});var Ce=s(d);r=n(Ce,"A",{href:!0,rel:!0});var fe=s(r);u=n(fe,"CODE",{});var Xe=s(u);D=c(Xe,"HTTPError"),Xe.forEach(t),fe.forEach(t),_=c(Ce,`
if the HuggingFace API returned an error`),Ce.forEach(t),x=h(ne),E=n(ne,"LI",{});var Me=s(E);b=n(Me,"A",{href:!0,rel:!0});var Ne=s(b);k=n(Ne,"CODE",{});var M=s(k);P=c(M,"ValueError"),M.forEach(t),Ne.forEach(t),L=c(Me,`
if some parameter value is invalid`),Me.forEach(t),O=h(ne),m=n(ne,"LI",{});var be=s(m);H=n(be,"A",{href:!0});var Ha=s(H);V=c(Ha,"RepositoryNotFoundError"),Ha.forEach(t),U=c(be,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(be,"CODE",{});var pe=s(R);K=c(pe,"private"),pe.forEach(t),G=c(be," and you do not have access."),be.forEach(t),y=h(ne),C=n(ne,"LI",{});var Ie=s(C);S=n(Ie,"A",{href:!0});var Da=s(S);X=c(Da,"RevisionNotFoundError"),Da.forEach(t),te=c(Ie,`
If the revision to download from cannot be found.`),Ie.forEach(t),Y=h(ne),J=n(ne,"LI",{});var Ye=s(J);Z=n(Ye,"A",{href:!0});var qa=s(Z);ae=c(qa,"EntryNotFoundError"),qa.forEach(t),B=c(Ye,`
If the file to download cannot be found.`),Ye.forEach(t),ne.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(Z,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,oe){w(Q,p,oe),e(p,v),w(Q,f,oe),w(Q,i,oe),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G),e(i,y),e(i,C),e(C,S),e(S,X),e(C,te),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function Og(z){let p,v,f,i,d,r,u,D,_,x,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var k=s(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=n(b,"UL",{});var P=s(i);d=n(P,"LI",{});var L=s(d);r=n(L,"A",{href:!0});var O=s(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),D=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);x=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Rg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Sg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Cg(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),v=l("Collecting all discussions of a repo in a list:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Mg(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),v=l("Iterating over discussions of a repo:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Ug(z){let p;return{c(){p=l("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(v){p=c(v,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(v,f){w(v,p,f)},d(v){v&&t(p)}}}function Vg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function zg(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("filter"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function Wg(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("search"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function Gg(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("filter"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function Bg(z){let p,v,f,i,d,r,u,D;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("search"),d=l(" argument:"),r=g(),q(u.$$.fragment)},l(_){p=n(_,"P",{});var x=s(p);v=c(x,"Example usage with the "),f=n(x,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),d=c(x," argument:"),x.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,x){w(_,p,x),e(p,v),e(p,f),e(f,i),e(p,d),w(_,r,x),N(u,_,x),D=!0},p:ue,i(_){D||(I(u.$$.fragment,_),D=!0)},o(_){F(u.$$.fragment,_),D=!1},d(_){_&&t(p),_&&t(r),T(u,_)}}}function Kg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Jg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Qg(z){let p,v,f,i,d,r,u,D,_,x,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var k=s(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=n(b,"UL",{});var P=s(i);d=n(P,"LI",{});var L=s(d);r=n(L,"A",{href:!0});var O=s(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),D=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);x=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Xg(z){let p,v,f,i,d;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function Yg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var C=s(p);v=c(C,"Raises the following errors:"),C.forEach(t),f=h(y),i=n(y,"UL",{});var S=s(i);d=n(S,"LI",{});var X=s(d);r=n(X,"A",{href:!0,rel:!0});var te=s(r);u=n(te,"CODE",{});var Y=s(u);D=c(Y,"HTTPError"),Y.forEach(t),te.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),x=h(S),E=n(S,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);k=n(Z,"CODE",{});var ae=s(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(S),m=n(S,"LI",{});var B=s(m);H=n(B,"A",{href:!0});var Q=s(H);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(B,"CODE",{});var oe=s(R);K=c(oe,"private"),oe.forEach(t),G=c(B," and you do not have access."),B.forEach(t),S.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,C){w(y,p,C),e(p,v),w(y,f,C),w(y,i,C),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Zg(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function eh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),b=g(),k=a("li"),P=a("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var H=s(p);v=c(H,"Raises the following errors:"),H.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);d=n(V,"LI",{});var U=s(d);r=n(U,"A",{href:!0});var R=s(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),D=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(U,"CODE",{});var K=s(_);x=c(K,"private"),K.forEach(t),E=c(U," and you do not have access."),U.forEach(t),b=h(V),k=n(V,"LI",{});var G=s(k);P=n(G,"A",{href:!0});var y=s(P);L=c(y,"RevisionNotFoundError"),y.forEach(t),O=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,H){w(m,p,H),e(p,v),w(m,f,H),w(m,i,H),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function th(z){let p,v,f,i,d,r,u,D,_,x,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=l("RepositoryNotFoundError"),D=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),x=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var k=s(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=n(b,"UL",{});var P=s(i);d=n(P,"LI",{});var L=s(d);r=n(L,"A",{href:!0});var O=s(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),D=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);x=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,d),e(d,r),e(r,u),e(d,D),e(d,_),e(_,x),e(d,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function oh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G,y,C,S,X,te;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=g(),m=a("li"),H=a("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a("code"),K=l("private"),G=l(" and you do not have access."),y=g(),C=a("li"),S=a("a"),X=l("RevisionNotFoundError"),te=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=n(Y,"P",{});var J=s(p);v=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=n(Y,"UL",{});var Z=s(i);d=n(Z,"LI",{});var ae=s(d);r=n(ae,"A",{href:!0,rel:!0});var B=s(r);u=n(B,"CODE",{});var Q=s(u);D=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),x=h(Z),E=n(Z,"LI",{});var oe=s(E);b=n(oe,"A",{href:!0,rel:!0});var ne=s(b);k=n(ne,"CODE",{});var Ce=s(k);P=c(Ce,"ValueError"),Ce.forEach(t),ne.forEach(t),L=c(oe,`
if some parameter value is invalid`),oe.forEach(t),O=h(Z),m=n(Z,"LI",{});var fe=s(m);H=n(fe,"A",{href:!0});var Xe=s(H);V=c(Xe,"RepositoryNotFoundError"),Xe.forEach(t),U=c(fe,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=n(fe,"CODE",{});var Me=s(R);K=c(Me,"private"),Me.forEach(t),G=c(fe," and you do not have access."),fe.forEach(t),y=h(Z),C=n(Z,"LI",{});var Ne=s(C);S=n(Ne,"A",{href:!0});var M=s(S);X=c(M,"RevisionNotFoundError"),M.forEach(t),te=c(Ne,`
If the revision to download from cannot be found.`),Ne.forEach(t),Z.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(H,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(S,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){w(Y,p,J),e(p,v),w(Y,f,J),w(Y,i,J),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L),e(i,O),e(i,m),e(m,H),e(H,V),e(m,U),e(m,R),e(R,K),e(m,G),e(i,y),e(i,C),e(C,S),e(S,X),e(C,te)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function ah(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),v=l("Example usage:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function nh(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L;return{c(){p=a("p"),v=l("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),u=a("code"),D=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),x=g(),E=a("li"),b=a("a"),k=a("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(O){p=n(O,"P",{});var m=s(p);v=c(m,"Raises the following errors:"),m.forEach(t),f=h(O),i=n(O,"UL",{});var H=s(i);d=n(H,"LI",{});var V=s(d);r=n(V,"A",{href:!0,rel:!0});var U=s(r);u=n(U,"CODE",{});var R=s(u);D=c(R,"HTTPError"),R.forEach(t),U.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),x=h(H),E=n(H,"LI",{});var K=s(E);b=n(K,"A",{href:!0,rel:!0});var G=s(b);k=n(G,"CODE",{});var y=s(k);P=c(y,"ValueError"),y.forEach(t),G.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),H.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow")},m(O,m){w(O,p,m),e(p,v),w(O,f,m),w(O,i,m),e(i,d),e(d,r),e(r,u),e(u,D),e(d,_),e(i,x),e(i,E),e(E,b),e(b,k),e(k,P),e(E,L)},d(O){O&&t(p),O&&t(f),O&&t(i)}}}function sh(z){let p,v,f,i,d;return i=new re({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),v=l("Example usage:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function rh(z){let p,v,f,i,d;return i=new re({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),v=l("Examples:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function ih(z){let p,v;return p=new re({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){q(p.$$.fragment)},l(f){j(p.$$.fragment,f)},m(f,i){N(p,f,i),v=!0},p:ue,i(f){v||(I(p.$$.fragment,f),v=!0)},o(f){F(p.$$.fragment,f),v=!1},d(f){T(p,f)}}}function lh(z){let p,v,f,i,d;return i=new re({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),v=l("Example:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function ch(z){let p,v,f,i,d;return i=new re({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),v=l("Example:"),f=g(),q(i.$$.fragment)},l(r){p=n(r,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),N(i,r,u),d=!0},p:ue,i(r){d||(I(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),T(i,r)}}}function ph(z){let p,v,f,i,d,r,u,D,_,x,E,b,k,P,L,O,m,H,V,U,R,K,G,y,C,S,X,te,Y,J,Z,ae,B,Q,oe,ne,Ce,fe,Xe,Me,Ne,M,be,Ha,pe,Ie,Da,Ye,qa,ir,nt,lr,st,cr,$e,ho,pr,Za,gr,hr,rt,dr,it,ur,lt,uo,fr,en,mr,_r,ie,fo,br,tn,vr,$r,mo,yr,on,Er,wr,kr,_o,Ar,ja,xr,Hr,Dr,Na,qr,Ia,jr,Nr,ct,Ir,le,bo,Fr,vo,Tr,an,Pr,Lr,Or,$o,Rr,Fa,Sr,Cr,Mr,yo,Ur,nn,Vr,zr,Wr,Ta,Gr,Pa,Br,Kr,pt,Jr,gt,Eo,Qr,sn,Xr,Yr,ye,wo,Zr,rn,ei,ti,ln,oi,ai,ht,ni,Ue,ko,si,cn,ri,ii,dt,li,Ve,Ao,ci,pn,pi,gi,ut,hi,ze,xo,di,gn,ui,fi,ft,mi,mt,Ho,_i,hn,bi,vi,Ee,Do,$i,dn,yi,Ei,La,wi,Oa,ki,Ai,_t,xi,bt,qo,Hi,un,Di,qi,vt,jo,ji,fn,Ni,Ii,me,No,Fi,mn,Ti,Pi,_n,Li,Oi,$t,Ri,yt,Si,we,Io,Ci,bn,Mi,Ui,Et,Vi,wt,zi,ke,Fo,Wi,vn,Gi,Bi,kt,Ki,At,Ji,xt,To,Qi,$n,Xi,Yi,_e,Po,Zi,yn,el,tl,Lo,ol,Ra,al,nl,sl,Ht,rl,Dt,il,qt,Oo,ll,En,cl,pl,jt,Ro,gl,wn,hl,dl,We,So,ul,kn,fl,ml,Nt,_l,Ae,Co,bl,An,vl,$l,xn,yl,El,It,wl,xe,Mo,kl,Hn,Al,xl,Uo,Hl,Vo,Dl,ql,jl,Ft,Nl,He,zo,Il,Dn,Fl,Tl,Tt,Pl,Pt,Ll,Ge,Wo,Ol,qn,Rl,Sl,Lt,Cl,Ot,Go,Ml,jn,Ul,Vl,De,Bo,zl,Nn,Wl,Gl,In,Bl,Kl,Rt,Jl,St,Ko,Ql,Fn,Xl,Yl,Be,Jo,Zl,Tn,ec,tc,Ct,oc,qe,Qo,ac,Pn,nc,sc,Mt,rc,Ut,ic,ce,Xo,lc,Ln,cc,pc,On,gc,hc,Yo,dc,Rn,uc,fc,mc,Vt,_c,zt,bc,Wt,Zo,vc,Sn,$c,ws,Ze,ea,yc,Cn,Ec,ks,et,ta,wc,Mn,kc,As,Fe,oa,Ac,Un,xc,Hc,Vn,Dc,xs,tt,aa,qc,zn,jc,Hs,ot,Gt,Wn,na,Nc,Gn,Ic,Ds,sa,Bn,Fc,Tc,qs,Bt,Pc,Sa,Lc,Oc,js,ve,ra,Rc,Kt,ia,Sc,Kn,Cc,Mc,Ke,la,Uc,Jn,Vc,zc,ca,Wc,Qn,Gc,Bc,Kc,Jt,pa,Jc,Xn,Qc,Ns,at,Qt,Yn,ga,Xc,Zn,Yc,Is,Xt,Zc,es,ep,tp,Fs,Te,ha,op,ts,ap,np,Yt,Ts,Pe,da,sp,os,rp,ip,Zt,Ps,Le,ua,lp,as,cp,pp,eo,Ls,Oe,fa,gp,ns,hp,dp,to,Os;return r=new _p({}),S=new re({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new re({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),be=new ee({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L602"}}),Ie=new ee({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2911",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),nt=new de({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[qg]},$$scope:{ctx:z}}}),st=new se({props:{$$slots:{default:[jg]},$$scope:{ctx:z}}}),ho=new ee({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2770",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),rt=new de({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Ng]},$$scope:{ctx:z}}}),it=new se({props:{$$slots:{default:[Ig]},$$scope:{ctx:z}}}),uo=new ee({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
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
`}}),fo=new ee({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2595"}}),ct=new se({props:{$$slots:{default:[Fg]},$$scope:{ctx:z}}}),bo=new ee({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2683"}}),pt=new se({props:{$$slots:{default:[Tg]},$$scope:{ctx:z}}}),Eo=new ee({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),wo=new ee({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),ht=new se({props:{$$slots:{default:[Pg]},$$scope:{ctx:z}}}),ko=new ee({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2315"}}),dt=new se({props:{$$slots:{default:[Lg]},$$scope:{ctx:z}}}),Ao=new ee({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1651"}}),ut=new se({props:{$$slots:{default:[Og]},$$scope:{ctx:z}}}),xo=new ee({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3037",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),ft=new se({props:{$$slots:{default:[Rg]},$$scope:{ctx:z}}}),Ho=new ee({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L723"}}),Do=new ee({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2506"}}),_t=new se({props:{$$slots:{default:[Sg]},$$scope:{ctx:z}}}),qo=new ee({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2393",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),jo=new ee({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L715"}}),No=new ee({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2427",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),$t=new de({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[Cg]},$$scope:{ctx:z}}}),yt=new de({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[Mg]},$$scope:{ctx:z}}}),Io=new ee({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3093",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Et=new se({props:{warning:!0,$$slots:{default:[Ug]},$$scope:{ctx:z}}}),wt=new se({props:{$$slots:{default:[Vg]},$$scope:{ctx:z}}}),Fo=new ee({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L943"}}),kt=new de({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[zg]},$$scope:{ctx:z}}}),At=new de({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Wg]},$$scope:{ctx:z}}}),To=new ee({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1108",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Po=new ee({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L733"}}),Ht=new de({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Gg]},$$scope:{ctx:z}}}),Dt=new de({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Bg]},$$scope:{ctx:z}}}),Oo=new ee({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Ro=new ee({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
`}}),So=new ee({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2985",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Nt=new se({props:{$$slots:{default:[Kg]},$$scope:{ctx:z}}}),Co=new ee({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),It=new se({props:{$$slots:{default:[Jg]},$$scope:{ctx:z}}}),Mo=new ee({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1817"}}),Ft=new se({props:{$$slots:{default:[Qg]},$$scope:{ctx:z}}}),zo=new ee({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2845",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Tt=new de({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[Xg]},$$scope:{ctx:z}}}),Pt=new se({props:{$$slots:{default:[Yg]},$$scope:{ctx:z}}}),Wo=new ee({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Lt=new se({props:{$$slots:{default:[Zg]},$$scope:{ctx:z}}}),Go=new ee({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L696"}}),Bo=new ee({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Rt=new se({props:{$$slots:{default:[eh]},$$scope:{ctx:z}}}),Ko=new ee({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L708"}}),Jo=new ee({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
`}}),Ct=new se({props:{$$slots:{default:[th]},$$scope:{ctx:z}}}),Qo=new ee({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2024",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Mt=new se({props:{$$slots:{default:[oh]},$$scope:{ctx:z}}}),Ut=new de({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[ah]},$$scope:{ctx:z}}}),Xo=new ee({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2171",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Vt=new se({props:{$$slots:{default:[nh]},$$scope:{ctx:z}}}),zt=new de({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[sh]},$$scope:{ctx:z}}}),Zo=new ee({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L606"}}),ea=new ee({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model.`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L223"}}),ta=new ee({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L291"}}),oa=new ee({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L365"}}),aa=new ee({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"size",val:": typing.Optional[int] = None"},{name:"blobId",val:": typing.Optional[str] = None"},{name:"lfs",val:": typing.Optional[huggingface_hub.hf_api.BlobLfsInfo] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>BlobLfsInfo</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata. This attribute is present when<code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code> and the file is stored with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L177"}}),na=new _p({}),ra=new ee({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3155"}}),ia=new ee({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3192"}}),la=new ee({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3171",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),pa=new ee({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3158"}}),ga=new _p({}),ha=new ee({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Yt=new de({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[rh]},$$scope:{ctx:z}}}),da=new ee({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Zt=new de({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[ih]},$$scope:{ctx:z}}}),ua=new ee({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L490"}}),eo=new de({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[lh]},$$scope:{ctx:z}}}),fa=new ee({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L452"}}),to=new de({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[ch]},$$scope:{ctx:z}}}),{c(){p=a("meta"),v=g(),f=a("h1"),i=a("a"),d=a("span"),q(r.$$.fragment),u=g(),D=a("span"),_=l("Hugging Face Hub API"),x=g(),E=a("p"),b=l("Below is the documentation for the "),k=a("code"),P=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=g(),m=a("p"),H=l("All methods from the "),V=a("code"),U=l("HfApi"),R=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=g(),G=a("p"),y=l("The following approach uses the method from the root of the package:"),C=g(),q(S.$$.fragment),X=g(),te=a("p"),Y=l("The following approach uses the "),J=a("code"),Z=l("HfApi"),ae=l(" class:"),B=g(),q(Q.$$.fragment),oe=g(),ne=a("p"),Ce=l("Using the "),fe=a("code"),Xe=l("HfApi"),Me=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Ne=g(),M=a("div"),q(be.$$.fragment),Ha=g(),pe=a("div"),q(Ie.$$.fragment),Da=g(),Ye=a("p"),qa=l("Closes or re-opens a Discussion or Pull Request."),ir=g(),q(nt.$$.fragment),lr=g(),q(st.$$.fragment),cr=g(),$e=a("div"),q(ho.$$.fragment),pr=g(),Za=a("p"),gr=l("Creates a new comment on the given Discussion."),hr=g(),q(rt.$$.fragment),dr=g(),q(it.$$.fragment),ur=g(),lt=a("div"),q(uo.$$.fragment),fr=g(),en=a("p"),mr=l("Creates a commit in the given repo, deleting & uploading files as needed."),_r=g(),ie=a("div"),q(fo.$$.fragment),br=g(),tn=a("p"),vr=l("Creates a Discussion or Pull Request."),$r=g(),mo=a("p"),yr=l("Pull Requests created programmatically will be in "),on=a("code"),Er=l('"draft"'),wr=l(" status."),kr=g(),_o=a("p"),Ar=l("Creating a Pull Request with changes can also be done at once with "),ja=a("a"),xr=l("HfApi.create_commit()"),Hr=l("."),Dr=g(),Na=a("p"),qr=l("Returns: "),Ia=a("a"),jr=l("DiscussionWithDetails"),Nr=g(),q(ct.$$.fragment),Ir=g(),le=a("div"),q(bo.$$.fragment),Fr=g(),vo=a("p"),Tr=l("Creates a Pull Request . Pull Requests created programmatically will be in "),an=a("code"),Pr=l('"draft"'),Lr=l(" status."),Or=g(),$o=a("p"),Rr=l("Creating a Pull Request with changes can also be done at once with "),Fa=a("a"),Sr=l("HfApi.create_commit()"),Cr=l(";"),Mr=g(),yo=a("p"),Ur=l("This is a wrapper around "),nn=a("code"),Vr=l("HfApi.create_discusssion"),zr=l("."),Wr=g(),Ta=a("p"),Gr=l("Returns: "),Pa=a("a"),Br=l("DiscussionWithDetails"),Kr=g(),q(pt.$$.fragment),Jr=g(),gt=a("div"),q(Eo.$$.fragment),Qr=g(),sn=a("p"),Xr=l("Create an empty repo on the HuggingFace Hub."),Yr=g(),ye=a("div"),q(wo.$$.fragment),Zr=g(),rn=a("p"),ei=l("Get info on one specific dataset on huggingface.co."),ti=g(),ln=a("p"),oi=l("Dataset can be private if you pass an acceptable token."),ai=g(),q(ht.$$.fragment),ni=g(),Ue=a("div"),q(ko.$$.fragment),si=g(),cn=a("p"),ri=l("Deletes a file in the given repo."),ii=g(),q(dt.$$.fragment),li=g(),Ve=a("div"),q(Ao.$$.fragment),ci=g(),pn=a("p"),pi=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),gi=g(),q(ut.$$.fragment),hi=g(),ze=a("div"),q(xo.$$.fragment),di=g(),gn=a("p"),ui=l("Edits a comment on a Discussion / Pull Request."),fi=g(),q(ft.$$.fragment),mi=g(),mt=a("div"),q(Ho.$$.fragment),_i=g(),hn=a("p"),bi=l("Gets all valid dataset tags as a nested namespace object."),vi=g(),Ee=a("div"),q(Do.$$.fragment),$i=g(),dn=a("p"),yi=l("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Ei=g(),La=a("p"),wi=l("Returns: "),Oa=a("a"),ki=l("DiscussionWithDetails"),Ai=g(),q(_t.$$.fragment),xi=g(),bt=a("div"),q(qo.$$.fragment),Hi=g(),un=a("p"),Di=l(`Returns the repository name for a given model ID and optional
organization.`),qi=g(),vt=a("div"),q(jo.$$.fragment),ji=g(),fn=a("p"),Ni=l("Gets all valid model tags as a nested namespace object"),Ii=g(),me=a("div"),q(No.$$.fragment),Fi=g(),mn=a("p"),Ti=l("Fetches Discussions and Pull Requests for the given repo."),Pi=g(),_n=a("p"),Li=l("Example:"),Oi=g(),q($t.$$.fragment),Ri=g(),q(yt.$$.fragment),Si=g(),we=a("div"),q(Io.$$.fragment),Ci=g(),bn=a("p"),Mi=l("Hides a comment on a Discussion / Pull Request."),Ui=g(),q(Et.$$.fragment),Vi=g(),q(wt.$$.fragment),zi=g(),ke=a("div"),q(Fo.$$.fragment),Wi=g(),vn=a("p"),Gi=l("Get the public list of all the datasets on huggingface.co"),Bi=g(),q(kt.$$.fragment),Ki=g(),q(At.$$.fragment),Ji=g(),xt=a("div"),q(To.$$.fragment),Qi=g(),$n=a("p"),Xi=l("Get the public list of all the metrics on huggingface.co"),Yi=g(),_e=a("div"),q(Po.$$.fragment),Zi=g(),yn=a("p"),el=l("Get the public list of all the models on huggingface.co"),tl=g(),Lo=a("p"),ol=l("Returns: List of "),Ra=a("a"),al=l("huggingface_hub.hf_api.ModelInfo"),nl=l(" objects"),sl=g(),q(Ht.$$.fragment),rl=g(),q(Dt.$$.fragment),il=g(),qt=a("div"),q(Oo.$$.fragment),ll=g(),En=a("p"),cl=l("Get the list of files in a given repo."),pl=g(),jt=a("div"),q(Ro.$$.fragment),gl=g(),wn=a("p"),hl=l("Get the public list of all Spaces on huggingface.co"),dl=g(),We=a("div"),q(So.$$.fragment),ul=g(),kn=a("p"),fl=l("Merges a Pull Request."),ml=g(),q(Nt.$$.fragment),_l=g(),Ae=a("div"),q(Co.$$.fragment),bl=g(),An=a("p"),vl=l("Get info on one specific model on huggingface.co"),$l=g(),xn=a("p"),yl=l("Model can be private if you pass an acceptable token or are logged in."),El=g(),q(It.$$.fragment),wl=g(),xe=a("div"),q(Mo.$$.fragment),kl=g(),Hn=a("p"),Al=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),xl=g(),Uo=a("p"),Hl=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Vo=a("a"),Dl=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ql=l("."),jl=g(),q(Ft.$$.fragment),Nl=g(),He=a("div"),q(zo.$$.fragment),Il=g(),Dn=a("p"),Fl=l("Renames a Discussion."),Tl=g(),q(Tt.$$.fragment),Pl=g(),q(Pt.$$.fragment),Ll=g(),Ge=a("div"),q(Wo.$$.fragment),Ol=g(),qn=a("p"),Rl=l("Get the info object for a given repo of a given type."),Sl=g(),q(Lt.$$.fragment),Cl=g(),Ot=a("div"),q(Go.$$.fragment),Ml=g(),jn=a("p"),Ul=l(`Saves the passed access token so git can correctly authenticate the
user.`),Vl=g(),De=a("div"),q(Bo.$$.fragment),zl=g(),Nn=a("p"),Wl=l("Get info on one specific Space on huggingface.co."),Gl=g(),In=a("p"),Bl=l("Space can be private if you pass an acceptable token."),Kl=g(),q(Rt.$$.fragment),Jl=g(),St=a("div"),q(Ko.$$.fragment),Ql=g(),Fn=a("p"),Xl=l("Resets the user\u2019s access token."),Yl=g(),Be=a("div"),q(Jo.$$.fragment),Zl=g(),Tn=a("p"),ec=l("Update the visibility setting of a repository."),tc=g(),q(Ct.$$.fragment),oc=g(),qe=a("div"),q(Qo.$$.fragment),ac=g(),Pn=a("p"),nc=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),sc=g(),q(Mt.$$.fragment),rc=g(),q(Ut.$$.fragment),ic=g(),ce=a("div"),q(Xo.$$.fragment),lc=g(),Ln=a("p"),cc=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),pc=g(),On=a("p"),gc=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),hc=g(),Yo=a("p"),dc=l("Uses "),Rn=a("code"),uc=l("HfApi.create_commit"),fc=l(" under the hood."),mc=g(),q(Vt.$$.fragment),_c=g(),q(zt.$$.fragment),bc=g(),Wt=a("div"),q(Zo.$$.fragment),vc=g(),Sn=a("p"),$c=l("Call HF API to know \u201Cwhoami\u201D."),ws=g(),Ze=a("div"),q(ea.$$.fragment),yc=g(),Cn=a("p"),Ec=l("Info about a model accessible from huggingface.co"),ks=g(),et=a("div"),q(ta.$$.fragment),wc=g(),Mn=a("p"),kc=l("Info about a dataset accessible from huggingface.co"),As=g(),Fe=a("div"),q(oa.$$.fragment),Ac=g(),Un=a("p"),xc=l("Info about a Space accessible from huggingface.co"),Hc=g(),Vn=a("p"),Dc=l(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),xs=g(),tt=a("div"),q(aa.$$.fragment),qc=g(),zn=a("p"),jc=l(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Hs=g(),ot=a("h2"),Gt=a("a"),Wn=a("span"),q(na.$$.fragment),Nc=g(),Gn=a("span"),Ic=l("Hugging Face local storage"),Ds=g(),sa=a("p"),Bn=a("code"),Fc=l("huggingface_hub"),Tc=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),qs=g(),Bt=a("p"),Pc=l("It does this using the "),Sa=a("a"),Lc=l("HfFolder"),Oc=l(" utility, which saves data at the root of the user."),js=g(),ve=a("div"),q(ra.$$.fragment),Rc=g(),Kt=a("div"),q(ia.$$.fragment),Sc=g(),Kn=a("p"),Cc=l("Deletes the token from storage. Does not fail if token does not exist."),Mc=g(),Ke=a("div"),q(la.$$.fragment),Uc=g(),Jn=a("p"),Vc=l("Get token or None if not existent."),zc=g(),ca=a("p"),Wc=l("Note that a token can be also provided using the "),Qn=a("code"),Gc=l("HUGGING_FACE_HUB_TOKEN"),Bc=l(`
environment variable.`),Kc=g(),Jt=a("div"),q(pa.$$.fragment),Jc=g(),Xn=a("p"),Qc=l("Save token, creating folder as needed."),Ns=g(),at=a("h2"),Qt=a("a"),Yn=a("span"),q(ga.$$.fragment),Xc=g(),Zn=a("span"),Yc=l("Filtering helpers"),Is=g(),Xt=a("p"),Zc=l("Some helpers to filter repositories on the Hub are available in the "),es=a("code"),ep=l("huggingface_hub"),tp=l(" package."),Fs=g(),Te=a("div"),q(ha.$$.fragment),op=g(),ts=a("p"),ap=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),np=g(),q(Yt.$$.fragment),Ts=g(),Pe=a("div"),q(da.$$.fragment),sp=g(),os=a("p"),rp=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ip=g(),q(Zt.$$.fragment),Ps=g(),Le=a("div"),q(ua.$$.fragment),lp=g(),as=a("p"),cp=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),pp=g(),q(eo.$$.fragment),Ls=g(),Oe=a("div"),q(fa.$$.fragment),gp=g(),ns=a("p"),hp=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),dp=g(),q(to.$$.fragment),this.h()},l(o){const A=Hg('[data-svelte="svelte-1phssyn"]',document.head);p=n(A,"META",{name:!0,content:!0}),A.forEach(t),v=h(o),f=n(o,"H1",{class:!0});var ma=s(f);i=n(ma,"A",{id:!0,class:!0,href:!0});var ss=s(i);d=n(ss,"SPAN",{});var rs=s(d);j(r.$$.fragment,rs),rs.forEach(t),ss.forEach(t),u=h(ma),D=n(ma,"SPAN",{});var is=s(D);_=c(is,"Hugging Face Hub API"),is.forEach(t),ma.forEach(t),x=h(o),E=n(o,"P",{});var _a=s(E);b=c(_a,"Below is the documentation for the "),k=n(_a,"CODE",{});var ls=s(k);P=c(ls,"HfApi"),ls.forEach(t),L=c(_a,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),_a.forEach(t),O=h(o),m=n(o,"P",{});var ba=s(m);H=c(ba,"All methods from the "),V=n(ba,"CODE",{});var cs=s(V);U=c(cs,"HfApi"),cs.forEach(t),R=c(ba,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),ba.forEach(t),K=h(o),G=n(o,"P",{});var ps=s(G);y=c(ps,"The following approach uses the method from the root of the package:"),ps.forEach(t),C=h(o),j(S.$$.fragment,o),X=h(o),te=n(o,"P",{});var va=s(te);Y=c(va,"The following approach uses the "),J=n(va,"CODE",{});var gs=s(J);Z=c(gs,"HfApi"),gs.forEach(t),ae=c(va," class:"),va.forEach(t),B=h(o),j(Q.$$.fragment,o),oe=h(o),ne=n(o,"P",{});var $a=s(ne);Ce=c($a,"Using the "),fe=n($a,"CODE",{});var hs=s(fe);Xe=c(hs,"HfApi"),hs.forEach(t),Me=c($a," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),$a.forEach(t),Ne=h(o),M=n(o,"DIV",{class:!0});var W=s(M);j(be.$$.fragment,W),Ha=h(W),pe=n(W,"DIV",{class:!0});var Re=s(pe);j(Ie.$$.fragment,Re),Da=h(Re),Ye=n(Re,"P",{});var ds=s(Ye);qa=c(ds,"Closes or re-opens a Discussion or Pull Request."),ds.forEach(t),ir=h(Re),j(nt.$$.fragment,Re),lr=h(Re),j(st.$$.fragment,Re),Re.forEach(t),cr=h(W),$e=n(W,"DIV",{class:!0});var Se=s($e);j(ho.$$.fragment,Se),pr=h(Se),Za=n(Se,"P",{});var us=s(Za);gr=c(us,"Creates a new comment on the given Discussion."),us.forEach(t),hr=h(Se),j(rt.$$.fragment,Se),dr=h(Se),j(it.$$.fragment,Se),Se.forEach(t),ur=h(W),lt=n(W,"DIV",{class:!0});var ya=s(lt);j(uo.$$.fragment,ya),fr=h(ya),en=n(ya,"P",{});var fs=s(en);mr=c(fs,"Creates a commit in the given repo, deleting & uploading files as needed."),fs.forEach(t),ya.forEach(t),_r=h(W),ie=n(W,"DIV",{class:!0});var ge=s(ie);j(fo.$$.fragment,ge),br=h(ge),tn=n(ge,"P",{});var ms=s(tn);vr=c(ms,"Creates a Discussion or Pull Request."),ms.forEach(t),$r=h(ge),mo=n(ge,"P",{});var Ea=s(mo);yr=c(Ea,"Pull Requests created programmatically will be in "),on=n(Ea,"CODE",{});var _s=s(on);Er=c(_s,'"draft"'),_s.forEach(t),wr=c(Ea," status."),Ea.forEach(t),kr=h(ge),_o=n(ge,"P",{});var wa=s(_o);Ar=c(wa,"Creating a Pull Request with changes can also be done at once with "),ja=n(wa,"A",{href:!0});var bs=s(ja);xr=c(bs,"HfApi.create_commit()"),bs.forEach(t),Hr=c(wa,"."),wa.forEach(t),Dr=h(ge),Na=n(ge,"P",{});var Ca=s(Na);qr=c(Ca,"Returns: "),Ia=n(Ca,"A",{href:!0});var vs=s(Ia);jr=c(vs,"DiscussionWithDetails"),vs.forEach(t),Ca.forEach(t),Nr=h(ge),j(ct.$$.fragment,ge),ge.forEach(t),Ir=h(W),le=n(W,"DIV",{class:!0});var he=s(le);j(bo.$$.fragment,he),Fr=h(he),vo=n(he,"P",{});var ka=s(vo);Tr=c(ka,"Creates a Pull Request . Pull Requests created programmatically will be in "),an=n(ka,"CODE",{});var $s=s(an);Pr=c($s,'"draft"'),$s.forEach(t),Lr=c(ka," status."),ka.forEach(t),Or=h(he),$o=n(he,"P",{});var Aa=s($o);Rr=c(Aa,"Creating a Pull Request with changes can also be done at once with "),Fa=n(Aa,"A",{href:!0});var ys=s(Fa);Sr=c(ys,"HfApi.create_commit()"),ys.forEach(t),Cr=c(Aa,";"),Aa.forEach(t),Mr=h(he),yo=n(he,"P",{});var xa=s(yo);Ur=c(xa,"This is a wrapper around "),nn=n(xa,"CODE",{});var Es=s(nn);Vr=c(Es,"HfApi.create_discusssion"),Es.forEach(t),zr=c(xa,"."),xa.forEach(t),Wr=h(he),Ta=n(he,"P",{});var up=s(Ta);Gr=c(up,"Returns: "),Pa=n(up,"A",{href:!0});var bp=s(Pa);Br=c(bp,"DiscussionWithDetails"),bp.forEach(t),up.forEach(t),Kr=h(he),j(pt.$$.fragment,he),he.forEach(t),Jr=h(W),gt=n(W,"DIV",{class:!0});var Rs=s(gt);j(Eo.$$.fragment,Rs),Qr=h(Rs),sn=n(Rs,"P",{});var vp=s(sn);Xr=c(vp,"Create an empty repo on the HuggingFace Hub."),vp.forEach(t),Rs.forEach(t),Yr=h(W),ye=n(W,"DIV",{class:!0});var oo=s(ye);j(wo.$$.fragment,oo),Zr=h(oo),rn=n(oo,"P",{});var $p=s(rn);ei=c($p,"Get info on one specific dataset on huggingface.co."),$p.forEach(t),ti=h(oo),ln=n(oo,"P",{});var yp=s(ln);oi=c(yp,"Dataset can be private if you pass an acceptable token."),yp.forEach(t),ai=h(oo),j(ht.$$.fragment,oo),oo.forEach(t),ni=h(W),Ue=n(W,"DIV",{class:!0});var Ma=s(Ue);j(ko.$$.fragment,Ma),si=h(Ma),cn=n(Ma,"P",{});var Ep=s(cn);ri=c(Ep,"Deletes a file in the given repo."),Ep.forEach(t),ii=h(Ma),j(dt.$$.fragment,Ma),Ma.forEach(t),li=h(W),Ve=n(W,"DIV",{class:!0});var Ua=s(Ve);j(Ao.$$.fragment,Ua),ci=h(Ua),pn=n(Ua,"P",{});var wp=s(pn);pi=c(wp,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),wp.forEach(t),gi=h(Ua),j(ut.$$.fragment,Ua),Ua.forEach(t),hi=h(W),ze=n(W,"DIV",{class:!0});var Va=s(ze);j(xo.$$.fragment,Va),di=h(Va),gn=n(Va,"P",{});var kp=s(gn);ui=c(kp,"Edits a comment on a Discussion / Pull Request."),kp.forEach(t),fi=h(Va),j(ft.$$.fragment,Va),Va.forEach(t),mi=h(W),mt=n(W,"DIV",{class:!0});var Ss=s(mt);j(Ho.$$.fragment,Ss),_i=h(Ss),hn=n(Ss,"P",{});var Ap=s(hn);bi=c(Ap,"Gets all valid dataset tags as a nested namespace object."),Ap.forEach(t),Ss.forEach(t),vi=h(W),Ee=n(W,"DIV",{class:!0});var ao=s(Ee);j(Do.$$.fragment,ao),$i=h(ao),dn=n(ao,"P",{});var xp=s(dn);yi=c(xp,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),xp.forEach(t),Ei=h(ao),La=n(ao,"P",{});var fp=s(La);wi=c(fp,"Returns: "),Oa=n(fp,"A",{href:!0});var Hp=s(Oa);ki=c(Hp,"DiscussionWithDetails"),Hp.forEach(t),fp.forEach(t),Ai=h(ao),j(_t.$$.fragment,ao),ao.forEach(t),xi=h(W),bt=n(W,"DIV",{class:!0});var Cs=s(bt);j(qo.$$.fragment,Cs),Hi=h(Cs),un=n(Cs,"P",{});var Dp=s(un);Di=c(Dp,`Returns the repository name for a given model ID and optional
organization.`),Dp.forEach(t),Cs.forEach(t),qi=h(W),vt=n(W,"DIV",{class:!0});var Ms=s(vt);j(jo.$$.fragment,Ms),ji=h(Ms),fn=n(Ms,"P",{});var qp=s(fn);Ni=c(qp,"Gets all valid model tags as a nested namespace object"),qp.forEach(t),Ms.forEach(t),Ii=h(W),me=n(W,"DIV",{class:!0});var Je=s(me);j(No.$$.fragment,Je),Fi=h(Je),mn=n(Je,"P",{});var jp=s(mn);Ti=c(jp,"Fetches Discussions and Pull Requests for the given repo."),jp.forEach(t),Pi=h(Je),_n=n(Je,"P",{});var Np=s(_n);Li=c(Np,"Example:"),Np.forEach(t),Oi=h(Je),j($t.$$.fragment,Je),Ri=h(Je),j(yt.$$.fragment,Je),Je.forEach(t),Si=h(W),we=n(W,"DIV",{class:!0});var no=s(we);j(Io.$$.fragment,no),Ci=h(no),bn=n(no,"P",{});var Ip=s(bn);Mi=c(Ip,"Hides a comment on a Discussion / Pull Request."),Ip.forEach(t),Ui=h(no),j(Et.$$.fragment,no),Vi=h(no),j(wt.$$.fragment,no),no.forEach(t),zi=h(W),ke=n(W,"DIV",{class:!0});var so=s(ke);j(Fo.$$.fragment,so),Wi=h(so),vn=n(so,"P",{});var Fp=s(vn);Gi=c(Fp,"Get the public list of all the datasets on huggingface.co"),Fp.forEach(t),Bi=h(so),j(kt.$$.fragment,so),Ki=h(so),j(At.$$.fragment,so),so.forEach(t),Ji=h(W),xt=n(W,"DIV",{class:!0});var Us=s(xt);j(To.$$.fragment,Us),Qi=h(Us),$n=n(Us,"P",{});var Tp=s($n);Xi=c(Tp,"Get the public list of all the metrics on huggingface.co"),Tp.forEach(t),Us.forEach(t),Yi=h(W),_e=n(W,"DIV",{class:!0});var Qe=s(_e);j(Po.$$.fragment,Qe),Zi=h(Qe),yn=n(Qe,"P",{});var Pp=s(yn);el=c(Pp,"Get the public list of all the models on huggingface.co"),Pp.forEach(t),tl=h(Qe),Lo=n(Qe,"P",{});var Vs=s(Lo);ol=c(Vs,"Returns: List of "),Ra=n(Vs,"A",{href:!0});var Lp=s(Ra);al=c(Lp,"huggingface_hub.hf_api.ModelInfo"),Lp.forEach(t),nl=c(Vs," objects"),Vs.forEach(t),sl=h(Qe),j(Ht.$$.fragment,Qe),rl=h(Qe),j(Dt.$$.fragment,Qe),Qe.forEach(t),il=h(W),qt=n(W,"DIV",{class:!0});var zs=s(qt);j(Oo.$$.fragment,zs),ll=h(zs),En=n(zs,"P",{});var Op=s(En);cl=c(Op,"Get the list of files in a given repo."),Op.forEach(t),zs.forEach(t),pl=h(W),jt=n(W,"DIV",{class:!0});var Ws=s(jt);j(Ro.$$.fragment,Ws),gl=h(Ws),wn=n(Ws,"P",{});var Rp=s(wn);hl=c(Rp,"Get the public list of all Spaces on huggingface.co"),Rp.forEach(t),Ws.forEach(t),dl=h(W),We=n(W,"DIV",{class:!0});var za=s(We);j(So.$$.fragment,za),ul=h(za),kn=n(za,"P",{});var Sp=s(kn);fl=c(Sp,"Merges a Pull Request."),Sp.forEach(t),ml=h(za),j(Nt.$$.fragment,za),za.forEach(t),_l=h(W),Ae=n(W,"DIV",{class:!0});var ro=s(Ae);j(Co.$$.fragment,ro),bl=h(ro),An=n(ro,"P",{});var Cp=s(An);vl=c(Cp,"Get info on one specific model on huggingface.co"),Cp.forEach(t),$l=h(ro),xn=n(ro,"P",{});var Mp=s(xn);yl=c(Mp,"Model can be private if you pass an acceptable token or are logged in."),Mp.forEach(t),El=h(ro),j(It.$$.fragment,ro),ro.forEach(t),wl=h(W),xe=n(W,"DIV",{class:!0});var io=s(xe);j(Mo.$$.fragment,io),kl=h(io),Hn=n(io,"P",{});var Up=s(Hn);Al=c(Up,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Up.forEach(t),xl=h(io),Uo=n(io,"P",{});var Gs=s(Uo);Hl=c(Gs,`Note there are certain limitations. For more information about moving
repositories, please see
`),Vo=n(Gs,"A",{href:!0,rel:!0});var Vp=s(Vo);Dl=c(Vp,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Vp.forEach(t),ql=c(Gs,"."),Gs.forEach(t),jl=h(io),j(Ft.$$.fragment,io),io.forEach(t),Nl=h(W),He=n(W,"DIV",{class:!0});var lo=s(He);j(zo.$$.fragment,lo),Il=h(lo),Dn=n(lo,"P",{});var zp=s(Dn);Fl=c(zp,"Renames a Discussion."),zp.forEach(t),Tl=h(lo),j(Tt.$$.fragment,lo),Pl=h(lo),j(Pt.$$.fragment,lo),lo.forEach(t),Ll=h(W),Ge=n(W,"DIV",{class:!0});var Wa=s(Ge);j(Wo.$$.fragment,Wa),Ol=h(Wa),qn=n(Wa,"P",{});var Wp=s(qn);Rl=c(Wp,"Get the info object for a given repo of a given type."),Wp.forEach(t),Sl=h(Wa),j(Lt.$$.fragment,Wa),Wa.forEach(t),Cl=h(W),Ot=n(W,"DIV",{class:!0});var Bs=s(Ot);j(Go.$$.fragment,Bs),Ml=h(Bs),jn=n(Bs,"P",{});var Gp=s(jn);Ul=c(Gp,`Saves the passed access token so git can correctly authenticate the
user.`),Gp.forEach(t),Bs.forEach(t),Vl=h(W),De=n(W,"DIV",{class:!0});var co=s(De);j(Bo.$$.fragment,co),zl=h(co),Nn=n(co,"P",{});var Bp=s(Nn);Wl=c(Bp,"Get info on one specific Space on huggingface.co."),Bp.forEach(t),Gl=h(co),In=n(co,"P",{});var Kp=s(In);Bl=c(Kp,"Space can be private if you pass an acceptable token."),Kp.forEach(t),Kl=h(co),j(Rt.$$.fragment,co),co.forEach(t),Jl=h(W),St=n(W,"DIV",{class:!0});var Ks=s(St);j(Ko.$$.fragment,Ks),Ql=h(Ks),Fn=n(Ks,"P",{});var Jp=s(Fn);Xl=c(Jp,"Resets the user\u2019s access token."),Jp.forEach(t),Ks.forEach(t),Yl=h(W),Be=n(W,"DIV",{class:!0});var Ga=s(Be);j(Jo.$$.fragment,Ga),Zl=h(Ga),Tn=n(Ga,"P",{});var Qp=s(Tn);ec=c(Qp,"Update the visibility setting of a repository."),Qp.forEach(t),tc=h(Ga),j(Ct.$$.fragment,Ga),Ga.forEach(t),oc=h(W),qe=n(W,"DIV",{class:!0});var po=s(qe);j(Qo.$$.fragment,po),ac=h(po),Pn=n(po,"P",{});var Xp=s(Pn);nc=c(Xp,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Xp.forEach(t),sc=h(po),j(Mt.$$.fragment,po),rc=h(po),j(Ut.$$.fragment,po),po.forEach(t),ic=h(W),ce=n(W,"DIV",{class:!0});var je=s(ce);j(Xo.$$.fragment,je),lc=h(je),Ln=n(je,"P",{});var Yp=s(Ln);cc=c(Yp,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Yp.forEach(t),pc=h(je),On=n(je,"P",{});var Zp=s(On);gc=c(Zp,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Zp.forEach(t),hc=h(je),Yo=n(je,"P",{});var Js=s(Yo);dc=c(Js,"Uses "),Rn=n(Js,"CODE",{});var eg=s(Rn);uc=c(eg,"HfApi.create_commit"),eg.forEach(t),fc=c(Js," under the hood."),Js.forEach(t),mc=h(je),j(Vt.$$.fragment,je),_c=h(je),j(zt.$$.fragment,je),je.forEach(t),bc=h(W),Wt=n(W,"DIV",{class:!0});var Qs=s(Wt);j(Zo.$$.fragment,Qs),vc=h(Qs),Sn=n(Qs,"P",{});var tg=s(Sn);$c=c(tg,"Call HF API to know \u201Cwhoami\u201D."),tg.forEach(t),Qs.forEach(t),W.forEach(t),ws=h(o),Ze=n(o,"DIV",{class:!0});var Xs=s(Ze);j(ea.$$.fragment,Xs),yc=h(Xs),Cn=n(Xs,"P",{});var og=s(Cn);Ec=c(og,"Info about a model accessible from huggingface.co"),og.forEach(t),Xs.forEach(t),ks=h(o),et=n(o,"DIV",{class:!0});var Ys=s(et);j(ta.$$.fragment,Ys),wc=h(Ys),Mn=n(Ys,"P",{});var ag=s(Mn);kc=c(ag,"Info about a dataset accessible from huggingface.co"),ag.forEach(t),Ys.forEach(t),As=h(o),Fe=n(o,"DIV",{class:!0});var Ba=s(Fe);j(oa.$$.fragment,Ba),Ac=h(Ba),Un=n(Ba,"P",{});var ng=s(Un);xc=c(ng,"Info about a Space accessible from huggingface.co"),ng.forEach(t),Hc=h(Ba),Vn=n(Ba,"P",{});var sg=s(Vn);Dc=c(sg,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),sg.forEach(t),Ba.forEach(t),xs=h(o),tt=n(o,"DIV",{class:!0});var Zs=s(tt);j(aa.$$.fragment,Zs),qc=h(Zs),zn=n(Zs,"P",{});var rg=s(zn);jc=c(rg,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),rg.forEach(t),Zs.forEach(t),Hs=h(o),ot=n(o,"H2",{class:!0});var er=s(ot);Gt=n(er,"A",{id:!0,class:!0,href:!0});var ig=s(Gt);Wn=n(ig,"SPAN",{});var lg=s(Wn);j(na.$$.fragment,lg),lg.forEach(t),ig.forEach(t),Nc=h(er),Gn=n(er,"SPAN",{});var cg=s(Gn);Ic=c(cg,"Hugging Face local storage"),cg.forEach(t),er.forEach(t),Ds=h(o),sa=n(o,"P",{});var mp=s(sa);Bn=n(mp,"CODE",{});var pg=s(Bn);Fc=c(pg,"huggingface_hub"),pg.forEach(t),Tc=c(mp,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),mp.forEach(t),qs=h(o),Bt=n(o,"P",{});var tr=s(Bt);Pc=c(tr,"It does this using the "),Sa=n(tr,"A",{href:!0});var gg=s(Sa);Lc=c(gg,"HfFolder"),gg.forEach(t),Oc=c(tr," utility, which saves data at the root of the user."),tr.forEach(t),js=h(o),ve=n(o,"DIV",{class:!0});var go=s(ve);j(ra.$$.fragment,go),Rc=h(go),Kt=n(go,"DIV",{class:!0});var or=s(Kt);j(ia.$$.fragment,or),Sc=h(or),Kn=n(or,"P",{});var hg=s(Kn);Cc=c(hg,"Deletes the token from storage. Does not fail if token does not exist."),hg.forEach(t),or.forEach(t),Mc=h(go),Ke=n(go,"DIV",{class:!0});var Ka=s(Ke);j(la.$$.fragment,Ka),Uc=h(Ka),Jn=n(Ka,"P",{});var dg=s(Jn);Vc=c(dg,"Get token or None if not existent."),dg.forEach(t),zc=h(Ka),ca=n(Ka,"P",{});var ar=s(ca);Wc=c(ar,"Note that a token can be also provided using the "),Qn=n(ar,"CODE",{});var ug=s(Qn);Gc=c(ug,"HUGGING_FACE_HUB_TOKEN"),ug.forEach(t),Bc=c(ar,`
environment variable.`),ar.forEach(t),Ka.forEach(t),Kc=h(go),Jt=n(go,"DIV",{class:!0});var nr=s(Jt);j(pa.$$.fragment,nr),Jc=h(nr),Xn=n(nr,"P",{});var fg=s(Xn);Qc=c(fg,"Save token, creating folder as needed."),fg.forEach(t),nr.forEach(t),go.forEach(t),Ns=h(o),at=n(o,"H2",{class:!0});var sr=s(at);Qt=n(sr,"A",{id:!0,class:!0,href:!0});var mg=s(Qt);Yn=n(mg,"SPAN",{});var _g=s(Yn);j(ga.$$.fragment,_g),_g.forEach(t),mg.forEach(t),Xc=h(sr),Zn=n(sr,"SPAN",{});var bg=s(Zn);Yc=c(bg,"Filtering helpers"),bg.forEach(t),sr.forEach(t),Is=h(o),Xt=n(o,"P",{});var rr=s(Xt);Zc=c(rr,"Some helpers to filter repositories on the Hub are available in the "),es=n(rr,"CODE",{});var vg=s(es);ep=c(vg,"huggingface_hub"),vg.forEach(t),tp=c(rr," package."),rr.forEach(t),Fs=h(o),Te=n(o,"DIV",{class:!0});var Ja=s(Te);j(ha.$$.fragment,Ja),op=h(Ja),ts=n(Ja,"P",{});var $g=s(ts);ap=c($g,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),$g.forEach(t),np=h(Ja),j(Yt.$$.fragment,Ja),Ja.forEach(t),Ts=h(o),Pe=n(o,"DIV",{class:!0});var Qa=s(Pe);j(da.$$.fragment,Qa),sp=h(Qa),os=n(Qa,"P",{});var yg=s(os);rp=c(yg,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yg.forEach(t),ip=h(Qa),j(Zt.$$.fragment,Qa),Qa.forEach(t),Ps=h(o),Le=n(o,"DIV",{class:!0});var Xa=s(Le);j(ua.$$.fragment,Xa),lp=h(Xa),as=n(Xa,"P",{});var Eg=s(as);cp=c(Eg,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Eg.forEach(t),pp=h(Xa),j(eo.$$.fragment,Xa),Xa.forEach(t),Ls=h(o),Oe=n(o,"DIV",{class:!0});var Ya=s(Oe);j(fa.$$.fragment,Ya),gp=h(Ya),ns=n(Ya,"P",{});var wg=s(ns);hp=c(wg,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),wg.forEach(t),dp=h(Ya),j(to.$$.fragment,Ya),Ya.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(gh)),$(i,"id","huggingface_hub.HfApi"),$(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(i,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ja,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(Ia,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Fa,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(Pa,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oa,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ra,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),$(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Vo,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(Vo,"rel","nofollow"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Gt,"id","huggingface_hub.HfFolder"),$(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Gt,"href","#huggingface_hub.HfFolder"),$(ot,"class","relative group"),$(Sa,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Qt,"id","huggingface_hub.DatasetFilter"),$(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Qt,"href","#huggingface_hub.DatasetFilter"),$(at,"class","relative group"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,A){e(document.head,p),w(o,v,A),w(o,f,A),e(f,i),e(i,d),N(r,d,null),e(f,u),e(f,D),e(D,_),w(o,x,A),w(o,E,A),e(E,b),e(E,k),e(k,P),e(E,L),w(o,O,A),w(o,m,A),e(m,H),e(m,V),e(V,U),e(m,R),w(o,K,A),w(o,G,A),e(G,y),w(o,C,A),N(S,o,A),w(o,X,A),w(o,te,A),e(te,Y),e(te,J),e(J,Z),e(te,ae),w(o,B,A),N(Q,o,A),w(o,oe,A),w(o,ne,A),e(ne,Ce),e(ne,fe),e(fe,Xe),e(ne,Me),w(o,Ne,A),w(o,M,A),N(be,M,null),e(M,Ha),e(M,pe),N(Ie,pe,null),e(pe,Da),e(pe,Ye),e(Ye,qa),e(pe,ir),N(nt,pe,null),e(pe,lr),N(st,pe,null),e(M,cr),e(M,$e),N(ho,$e,null),e($e,pr),e($e,Za),e(Za,gr),e($e,hr),N(rt,$e,null),e($e,dr),N(it,$e,null),e(M,ur),e(M,lt),N(uo,lt,null),e(lt,fr),e(lt,en),e(en,mr),e(M,_r),e(M,ie),N(fo,ie,null),e(ie,br),e(ie,tn),e(tn,vr),e(ie,$r),e(ie,mo),e(mo,yr),e(mo,on),e(on,Er),e(mo,wr),e(ie,kr),e(ie,_o),e(_o,Ar),e(_o,ja),e(ja,xr),e(_o,Hr),e(ie,Dr),e(ie,Na),e(Na,qr),e(Na,Ia),e(Ia,jr),e(ie,Nr),N(ct,ie,null),e(M,Ir),e(M,le),N(bo,le,null),e(le,Fr),e(le,vo),e(vo,Tr),e(vo,an),e(an,Pr),e(vo,Lr),e(le,Or),e(le,$o),e($o,Rr),e($o,Fa),e(Fa,Sr),e($o,Cr),e(le,Mr),e(le,yo),e(yo,Ur),e(yo,nn),e(nn,Vr),e(yo,zr),e(le,Wr),e(le,Ta),e(Ta,Gr),e(Ta,Pa),e(Pa,Br),e(le,Kr),N(pt,le,null),e(M,Jr),e(M,gt),N(Eo,gt,null),e(gt,Qr),e(gt,sn),e(sn,Xr),e(M,Yr),e(M,ye),N(wo,ye,null),e(ye,Zr),e(ye,rn),e(rn,ei),e(ye,ti),e(ye,ln),e(ln,oi),e(ye,ai),N(ht,ye,null),e(M,ni),e(M,Ue),N(ko,Ue,null),e(Ue,si),e(Ue,cn),e(cn,ri),e(Ue,ii),N(dt,Ue,null),e(M,li),e(M,Ve),N(Ao,Ve,null),e(Ve,ci),e(Ve,pn),e(pn,pi),e(Ve,gi),N(ut,Ve,null),e(M,hi),e(M,ze),N(xo,ze,null),e(ze,di),e(ze,gn),e(gn,ui),e(ze,fi),N(ft,ze,null),e(M,mi),e(M,mt),N(Ho,mt,null),e(mt,_i),e(mt,hn),e(hn,bi),e(M,vi),e(M,Ee),N(Do,Ee,null),e(Ee,$i),e(Ee,dn),e(dn,yi),e(Ee,Ei),e(Ee,La),e(La,wi),e(La,Oa),e(Oa,ki),e(Ee,Ai),N(_t,Ee,null),e(M,xi),e(M,bt),N(qo,bt,null),e(bt,Hi),e(bt,un),e(un,Di),e(M,qi),e(M,vt),N(jo,vt,null),e(vt,ji),e(vt,fn),e(fn,Ni),e(M,Ii),e(M,me),N(No,me,null),e(me,Fi),e(me,mn),e(mn,Ti),e(me,Pi),e(me,_n),e(_n,Li),e(me,Oi),N($t,me,null),e(me,Ri),N(yt,me,null),e(M,Si),e(M,we),N(Io,we,null),e(we,Ci),e(we,bn),e(bn,Mi),e(we,Ui),N(Et,we,null),e(we,Vi),N(wt,we,null),e(M,zi),e(M,ke),N(Fo,ke,null),e(ke,Wi),e(ke,vn),e(vn,Gi),e(ke,Bi),N(kt,ke,null),e(ke,Ki),N(At,ke,null),e(M,Ji),e(M,xt),N(To,xt,null),e(xt,Qi),e(xt,$n),e($n,Xi),e(M,Yi),e(M,_e),N(Po,_e,null),e(_e,Zi),e(_e,yn),e(yn,el),e(_e,tl),e(_e,Lo),e(Lo,ol),e(Lo,Ra),e(Ra,al),e(Lo,nl),e(_e,sl),N(Ht,_e,null),e(_e,rl),N(Dt,_e,null),e(M,il),e(M,qt),N(Oo,qt,null),e(qt,ll),e(qt,En),e(En,cl),e(M,pl),e(M,jt),N(Ro,jt,null),e(jt,gl),e(jt,wn),e(wn,hl),e(M,dl),e(M,We),N(So,We,null),e(We,ul),e(We,kn),e(kn,fl),e(We,ml),N(Nt,We,null),e(M,_l),e(M,Ae),N(Co,Ae,null),e(Ae,bl),e(Ae,An),e(An,vl),e(Ae,$l),e(Ae,xn),e(xn,yl),e(Ae,El),N(It,Ae,null),e(M,wl),e(M,xe),N(Mo,xe,null),e(xe,kl),e(xe,Hn),e(Hn,Al),e(xe,xl),e(xe,Uo),e(Uo,Hl),e(Uo,Vo),e(Vo,Dl),e(Uo,ql),e(xe,jl),N(Ft,xe,null),e(M,Nl),e(M,He),N(zo,He,null),e(He,Il),e(He,Dn),e(Dn,Fl),e(He,Tl),N(Tt,He,null),e(He,Pl),N(Pt,He,null),e(M,Ll),e(M,Ge),N(Wo,Ge,null),e(Ge,Ol),e(Ge,qn),e(qn,Rl),e(Ge,Sl),N(Lt,Ge,null),e(M,Cl),e(M,Ot),N(Go,Ot,null),e(Ot,Ml),e(Ot,jn),e(jn,Ul),e(M,Vl),e(M,De),N(Bo,De,null),e(De,zl),e(De,Nn),e(Nn,Wl),e(De,Gl),e(De,In),e(In,Bl),e(De,Kl),N(Rt,De,null),e(M,Jl),e(M,St),N(Ko,St,null),e(St,Ql),e(St,Fn),e(Fn,Xl),e(M,Yl),e(M,Be),N(Jo,Be,null),e(Be,Zl),e(Be,Tn),e(Tn,ec),e(Be,tc),N(Ct,Be,null),e(M,oc),e(M,qe),N(Qo,qe,null),e(qe,ac),e(qe,Pn),e(Pn,nc),e(qe,sc),N(Mt,qe,null),e(qe,rc),N(Ut,qe,null),e(M,ic),e(M,ce),N(Xo,ce,null),e(ce,lc),e(ce,Ln),e(Ln,cc),e(ce,pc),e(ce,On),e(On,gc),e(ce,hc),e(ce,Yo),e(Yo,dc),e(Yo,Rn),e(Rn,uc),e(Yo,fc),e(ce,mc),N(Vt,ce,null),e(ce,_c),N(zt,ce,null),e(M,bc),e(M,Wt),N(Zo,Wt,null),e(Wt,vc),e(Wt,Sn),e(Sn,$c),w(o,ws,A),w(o,Ze,A),N(ea,Ze,null),e(Ze,yc),e(Ze,Cn),e(Cn,Ec),w(o,ks,A),w(o,et,A),N(ta,et,null),e(et,wc),e(et,Mn),e(Mn,kc),w(o,As,A),w(o,Fe,A),N(oa,Fe,null),e(Fe,Ac),e(Fe,Un),e(Un,xc),e(Fe,Hc),e(Fe,Vn),e(Vn,Dc),w(o,xs,A),w(o,tt,A),N(aa,tt,null),e(tt,qc),e(tt,zn),e(zn,jc),w(o,Hs,A),w(o,ot,A),e(ot,Gt),e(Gt,Wn),N(na,Wn,null),e(ot,Nc),e(ot,Gn),e(Gn,Ic),w(o,Ds,A),w(o,sa,A),e(sa,Bn),e(Bn,Fc),e(sa,Tc),w(o,qs,A),w(o,Bt,A),e(Bt,Pc),e(Bt,Sa),e(Sa,Lc),e(Bt,Oc),w(o,js,A),w(o,ve,A),N(ra,ve,null),e(ve,Rc),e(ve,Kt),N(ia,Kt,null),e(Kt,Sc),e(Kt,Kn),e(Kn,Cc),e(ve,Mc),e(ve,Ke),N(la,Ke,null),e(Ke,Uc),e(Ke,Jn),e(Jn,Vc),e(Ke,zc),e(Ke,ca),e(ca,Wc),e(ca,Qn),e(Qn,Gc),e(ca,Bc),e(ve,Kc),e(ve,Jt),N(pa,Jt,null),e(Jt,Jc),e(Jt,Xn),e(Xn,Qc),w(o,Ns,A),w(o,at,A),e(at,Qt),e(Qt,Yn),N(ga,Yn,null),e(at,Xc),e(at,Zn),e(Zn,Yc),w(o,Is,A),w(o,Xt,A),e(Xt,Zc),e(Xt,es),e(es,ep),e(Xt,tp),w(o,Fs,A),w(o,Te,A),N(ha,Te,null),e(Te,op),e(Te,ts),e(ts,ap),e(Te,np),N(Yt,Te,null),w(o,Ts,A),w(o,Pe,A),N(da,Pe,null),e(Pe,sp),e(Pe,os),e(os,rp),e(Pe,ip),N(Zt,Pe,null),w(o,Ps,A),w(o,Le,A),N(ua,Le,null),e(Le,lp),e(Le,as),e(as,cp),e(Le,pp),N(eo,Le,null),w(o,Ls,A),w(o,Oe,A),N(fa,Oe,null),e(Oe,gp),e(Oe,ns),e(ns,hp),e(Oe,dp),N(to,Oe,null),Os=!0},p(o,[A]){const ma={};A&2&&(ma.$$scope={dirty:A,ctx:o}),nt.$set(ma);const ss={};A&2&&(ss.$$scope={dirty:A,ctx:o}),st.$set(ss);const rs={};A&2&&(rs.$$scope={dirty:A,ctx:o}),rt.$set(rs);const is={};A&2&&(is.$$scope={dirty:A,ctx:o}),it.$set(is);const _a={};A&2&&(_a.$$scope={dirty:A,ctx:o}),ct.$set(_a);const ls={};A&2&&(ls.$$scope={dirty:A,ctx:o}),pt.$set(ls);const ba={};A&2&&(ba.$$scope={dirty:A,ctx:o}),ht.$set(ba);const cs={};A&2&&(cs.$$scope={dirty:A,ctx:o}),dt.$set(cs);const ps={};A&2&&(ps.$$scope={dirty:A,ctx:o}),ut.$set(ps);const va={};A&2&&(va.$$scope={dirty:A,ctx:o}),ft.$set(va);const gs={};A&2&&(gs.$$scope={dirty:A,ctx:o}),_t.$set(gs);const $a={};A&2&&($a.$$scope={dirty:A,ctx:o}),$t.$set($a);const hs={};A&2&&(hs.$$scope={dirty:A,ctx:o}),yt.$set(hs);const W={};A&2&&(W.$$scope={dirty:A,ctx:o}),Et.$set(W);const Re={};A&2&&(Re.$$scope={dirty:A,ctx:o}),wt.$set(Re);const ds={};A&2&&(ds.$$scope={dirty:A,ctx:o}),kt.$set(ds);const Se={};A&2&&(Se.$$scope={dirty:A,ctx:o}),At.$set(Se);const us={};A&2&&(us.$$scope={dirty:A,ctx:o}),Ht.$set(us);const ya={};A&2&&(ya.$$scope={dirty:A,ctx:o}),Dt.$set(ya);const fs={};A&2&&(fs.$$scope={dirty:A,ctx:o}),Nt.$set(fs);const ge={};A&2&&(ge.$$scope={dirty:A,ctx:o}),It.$set(ge);const ms={};A&2&&(ms.$$scope={dirty:A,ctx:o}),Ft.$set(ms);const Ea={};A&2&&(Ea.$$scope={dirty:A,ctx:o}),Tt.$set(Ea);const _s={};A&2&&(_s.$$scope={dirty:A,ctx:o}),Pt.$set(_s);const wa={};A&2&&(wa.$$scope={dirty:A,ctx:o}),Lt.$set(wa);const bs={};A&2&&(bs.$$scope={dirty:A,ctx:o}),Rt.$set(bs);const Ca={};A&2&&(Ca.$$scope={dirty:A,ctx:o}),Ct.$set(Ca);const vs={};A&2&&(vs.$$scope={dirty:A,ctx:o}),Mt.$set(vs);const he={};A&2&&(he.$$scope={dirty:A,ctx:o}),Ut.$set(he);const ka={};A&2&&(ka.$$scope={dirty:A,ctx:o}),Vt.$set(ka);const $s={};A&2&&($s.$$scope={dirty:A,ctx:o}),zt.$set($s);const Aa={};A&2&&(Aa.$$scope={dirty:A,ctx:o}),Yt.$set(Aa);const ys={};A&2&&(ys.$$scope={dirty:A,ctx:o}),Zt.$set(ys);const xa={};A&2&&(xa.$$scope={dirty:A,ctx:o}),eo.$set(xa);const Es={};A&2&&(Es.$$scope={dirty:A,ctx:o}),to.$set(Es)},i(o){Os||(I(r.$$.fragment,o),I(S.$$.fragment,o),I(Q.$$.fragment,o),I(be.$$.fragment,o),I(Ie.$$.fragment,o),I(nt.$$.fragment,o),I(st.$$.fragment,o),I(ho.$$.fragment,o),I(rt.$$.fragment,o),I(it.$$.fragment,o),I(uo.$$.fragment,o),I(fo.$$.fragment,o),I(ct.$$.fragment,o),I(bo.$$.fragment,o),I(pt.$$.fragment,o),I(Eo.$$.fragment,o),I(wo.$$.fragment,o),I(ht.$$.fragment,o),I(ko.$$.fragment,o),I(dt.$$.fragment,o),I(Ao.$$.fragment,o),I(ut.$$.fragment,o),I(xo.$$.fragment,o),I(ft.$$.fragment,o),I(Ho.$$.fragment,o),I(Do.$$.fragment,o),I(_t.$$.fragment,o),I(qo.$$.fragment,o),I(jo.$$.fragment,o),I(No.$$.fragment,o),I($t.$$.fragment,o),I(yt.$$.fragment,o),I(Io.$$.fragment,o),I(Et.$$.fragment,o),I(wt.$$.fragment,o),I(Fo.$$.fragment,o),I(kt.$$.fragment,o),I(At.$$.fragment,o),I(To.$$.fragment,o),I(Po.$$.fragment,o),I(Ht.$$.fragment,o),I(Dt.$$.fragment,o),I(Oo.$$.fragment,o),I(Ro.$$.fragment,o),I(So.$$.fragment,o),I(Nt.$$.fragment,o),I(Co.$$.fragment,o),I(It.$$.fragment,o),I(Mo.$$.fragment,o),I(Ft.$$.fragment,o),I(zo.$$.fragment,o),I(Tt.$$.fragment,o),I(Pt.$$.fragment,o),I(Wo.$$.fragment,o),I(Lt.$$.fragment,o),I(Go.$$.fragment,o),I(Bo.$$.fragment,o),I(Rt.$$.fragment,o),I(Ko.$$.fragment,o),I(Jo.$$.fragment,o),I(Ct.$$.fragment,o),I(Qo.$$.fragment,o),I(Mt.$$.fragment,o),I(Ut.$$.fragment,o),I(Xo.$$.fragment,o),I(Vt.$$.fragment,o),I(zt.$$.fragment,o),I(Zo.$$.fragment,o),I(ea.$$.fragment,o),I(ta.$$.fragment,o),I(oa.$$.fragment,o),I(aa.$$.fragment,o),I(na.$$.fragment,o),I(ra.$$.fragment,o),I(ia.$$.fragment,o),I(la.$$.fragment,o),I(pa.$$.fragment,o),I(ga.$$.fragment,o),I(ha.$$.fragment,o),I(Yt.$$.fragment,o),I(da.$$.fragment,o),I(Zt.$$.fragment,o),I(ua.$$.fragment,o),I(eo.$$.fragment,o),I(fa.$$.fragment,o),I(to.$$.fragment,o),Os=!0)},o(o){F(r.$$.fragment,o),F(S.$$.fragment,o),F(Q.$$.fragment,o),F(be.$$.fragment,o),F(Ie.$$.fragment,o),F(nt.$$.fragment,o),F(st.$$.fragment,o),F(ho.$$.fragment,o),F(rt.$$.fragment,o),F(it.$$.fragment,o),F(uo.$$.fragment,o),F(fo.$$.fragment,o),F(ct.$$.fragment,o),F(bo.$$.fragment,o),F(pt.$$.fragment,o),F(Eo.$$.fragment,o),F(wo.$$.fragment,o),F(ht.$$.fragment,o),F(ko.$$.fragment,o),F(dt.$$.fragment,o),F(Ao.$$.fragment,o),F(ut.$$.fragment,o),F(xo.$$.fragment,o),F(ft.$$.fragment,o),F(Ho.$$.fragment,o),F(Do.$$.fragment,o),F(_t.$$.fragment,o),F(qo.$$.fragment,o),F(jo.$$.fragment,o),F(No.$$.fragment,o),F($t.$$.fragment,o),F(yt.$$.fragment,o),F(Io.$$.fragment,o),F(Et.$$.fragment,o),F(wt.$$.fragment,o),F(Fo.$$.fragment,o),F(kt.$$.fragment,o),F(At.$$.fragment,o),F(To.$$.fragment,o),F(Po.$$.fragment,o),F(Ht.$$.fragment,o),F(Dt.$$.fragment,o),F(Oo.$$.fragment,o),F(Ro.$$.fragment,o),F(So.$$.fragment,o),F(Nt.$$.fragment,o),F(Co.$$.fragment,o),F(It.$$.fragment,o),F(Mo.$$.fragment,o),F(Ft.$$.fragment,o),F(zo.$$.fragment,o),F(Tt.$$.fragment,o),F(Pt.$$.fragment,o),F(Wo.$$.fragment,o),F(Lt.$$.fragment,o),F(Go.$$.fragment,o),F(Bo.$$.fragment,o),F(Rt.$$.fragment,o),F(Ko.$$.fragment,o),F(Jo.$$.fragment,o),F(Ct.$$.fragment,o),F(Qo.$$.fragment,o),F(Mt.$$.fragment,o),F(Ut.$$.fragment,o),F(Xo.$$.fragment,o),F(Vt.$$.fragment,o),F(zt.$$.fragment,o),F(Zo.$$.fragment,o),F(ea.$$.fragment,o),F(ta.$$.fragment,o),F(oa.$$.fragment,o),F(aa.$$.fragment,o),F(na.$$.fragment,o),F(ra.$$.fragment,o),F(ia.$$.fragment,o),F(la.$$.fragment,o),F(pa.$$.fragment,o),F(ga.$$.fragment,o),F(ha.$$.fragment,o),F(Yt.$$.fragment,o),F(da.$$.fragment,o),F(Zt.$$.fragment,o),F(ua.$$.fragment,o),F(eo.$$.fragment,o),F(fa.$$.fragment,o),F(to.$$.fragment,o),Os=!1},d(o){t(p),o&&t(v),o&&t(f),T(r),o&&t(x),o&&t(E),o&&t(O),o&&t(m),o&&t(K),o&&t(G),o&&t(C),T(S,o),o&&t(X),o&&t(te),o&&t(B),T(Q,o),o&&t(oe),o&&t(ne),o&&t(Ne),o&&t(M),T(be),T(Ie),T(nt),T(st),T(ho),T(rt),T(it),T(uo),T(fo),T(ct),T(bo),T(pt),T(Eo),T(wo),T(ht),T(ko),T(dt),T(Ao),T(ut),T(xo),T(ft),T(Ho),T(Do),T(_t),T(qo),T(jo),T(No),T($t),T(yt),T(Io),T(Et),T(wt),T(Fo),T(kt),T(At),T(To),T(Po),T(Ht),T(Dt),T(Oo),T(Ro),T(So),T(Nt),T(Co),T(It),T(Mo),T(Ft),T(zo),T(Tt),T(Pt),T(Wo),T(Lt),T(Go),T(Bo),T(Rt),T(Ko),T(Jo),T(Ct),T(Qo),T(Mt),T(Ut),T(Xo),T(Vt),T(zt),T(Zo),o&&t(ws),o&&t(Ze),T(ea),o&&t(ks),o&&t(et),T(ta),o&&t(As),o&&t(Fe),T(oa),o&&t(xs),o&&t(tt),T(aa),o&&t(Hs),o&&t(ot),T(na),o&&t(Ds),o&&t(sa),o&&t(qs),o&&t(Bt),o&&t(js),o&&t(ve),T(ra),T(ia),T(la),T(pa),o&&t(Ns),o&&t(at),T(ga),o&&t(Is),o&&t(Xt),o&&t(Fs),o&&t(Te),T(ha),T(Yt),o&&t(Ts),o&&t(Pe),T(da),T(Zt),o&&t(Ps),o&&t(Le),T(ua),T(eo),o&&t(Ls),o&&t(Oe),T(fa),T(to)}}}const gh={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function hh(z){return Dg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vh extends kg{constructor(p){super();Ag(this,p,hh,ph,xg,{})}}export{vh as default,gh as metadata};
