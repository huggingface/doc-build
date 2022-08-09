import{S as Pp,i as Ip,s as Lp,e as a,k as d,w as D,t as l,M as Rp,c as n,d as t,m as h,a as s,x as j,h as c,b as $,G as e,g as k,y as N,q as F,o as T,B as P,v as Op,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Tc}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Cp(z){let p,v,f,i,g;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function Sp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Up(z){let p,v,f,i,g;return i=new re({props:{code:`
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function Mp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Vp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function zp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Wp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=a("li"),I=a("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);g=n(V,"LI",{});var M=s(g);o=n(M,"A",{href:!0});var O=s(o);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=n(V,"LI",{});var G=s(w);I=n(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Gp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G,y,S,C,X,ee,Y,J,Z,ae,B;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),y=d(),S=a("li"),C=a("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),Y=d(),J=a("li"),Z=a("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=n(Q,"P",{});var te=s(p);v=c(te,"Raises the following errors:"),te.forEach(t),f=h(Q),i=n(Q,"UL",{});var ne=s(i);g=n(ne,"LI",{});var Ce=s(g);o=n(Ce,"A",{href:!0,rel:!0});var fe=s(o);u=n(fe,"CODE",{});var Je=s(u);q=c(Je,"HTTPError"),Je.forEach(t),fe.forEach(t),_=c(Ce,`
if the HuggingFace API returned an error`),Ce.forEach(t),A=h(ne),E=n(ne,"LI",{});var Se=s(E);b=n(Se,"A",{href:!0,rel:!0});var Ne=s(b);w=n(Ne,"CODE",{});var U=s(w);I=c(U,"ValueError"),U.forEach(t),Ne.forEach(t),L=c(Se,`
if some parameter value is invalid`),Se.forEach(t),R=h(ne),m=n(ne,"LI",{});var _e=s(m);x=n(_e,"A",{href:!0});var ba=s(x);V=c(ba,"RepositoryNotFoundError"),ba.forEach(t),M=c(_e,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(_e,"CODE",{});var pe=s(O);K=c(pe,"private"),pe.forEach(t),G=c(_e," and you do not have access."),_e.forEach(t),y=h(ne),S=n(ne,"LI",{});var Fe=s(S);C=n(Fe,"A",{href:!0});var va=s(C);X=c(va,"RevisionNotFoundError"),va.forEach(t),ee=c(Fe,`
If the revision to download from cannot be found.`),Fe.forEach(t),Y=h(ne),J=n(ne,"LI",{});var Qe=s(J);Z=n(Qe,"A",{href:!0});var $a=s(Z);ae=c($a,"EntryNotFoundError"),$a.forEach(t),B=c(Qe,`
If the file to download cannot be found.`),Qe.forEach(t),ne.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(Z,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,te){k(Q,p,te),e(p,v),k(Q,f,te),k(Q,i,te),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G),e(i,y),e(i,S),e(S,C),e(C,X),e(S,ee),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function Bp(z){let p,v,f,i,g,o,u,q,_,A,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var w=s(p);v=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=n(b,"UL",{});var I=s(i);g=n(I,"LI",{});var L=s(g);o=n(L,"A",{href:!0});var R=s(o);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,v),k(b,f,w),k(b,i,w),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Kp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Jp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Qp(z){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=a("p"),v=l("Collecting all discussions of a repo in a list:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function Xp(z){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=a("p"),v=l("Iterating over discussions of a repo:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function Yp(z){let p;return{c(){p=l("Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},l(v){p=c(v,"Hidden comments' content cannot be retrieved anymore. Hiding a comment is irreversible.")},m(v,f){k(v,p,f)},d(v){v&&t(p)}}}function Zp(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function eg(z){let p,v,f,i,g,o,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("filter"),g=l(" argument:"),o=d(),D(u.$$.fragment)},l(_){p=n(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=n(A,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),o=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,o,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(o),P(u,_)}}}function tg(z){let p,v,f,i,g,o,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("search"),g=l(" argument:"),o=d(),D(u.$$.fragment)},l(_){p=n(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=n(A,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),o=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,o,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(o),P(u,_)}}}function og(z){let p,v,f,i,g,o,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("filter"),g=l(" argument:"),o=d(),D(u.$$.fragment)},l(_){p=n(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=n(A,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),o=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,o,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(o),P(u,_)}}}function ag(z){let p,v,f,i,g,o,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),v=l("Example usage with the "),f=a("code"),i=l("search"),g=l(" argument:"),o=d(),D(u.$$.fragment)},l(_){p=n(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=n(A,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),o=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,o,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(o),P(u,_)}}}function ng(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function sg(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=a("li"),I=a("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);g=n(V,"LI",{});var M=s(g);o=n(M,"A",{href:!0});var O=s(o);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=n(V,"LI",{});var G=s(w);I=n(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function rg(z){let p,v,f,i,g,o,u,q,_,A,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var w=s(p);v=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=n(b,"UL",{});var I=s(i);g=n(I,"LI",{});var L=s(g);o=n(L,"A",{href:!0});var R=s(o);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,v),k(b,f,w),k(b,i,w),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function ig(z){let p,v,f,i,g;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=a("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function lg(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=n(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=n(y,"UL",{});var C=s(i);g=n(C,"LI",{});var X=s(g);o=n(X,"A",{href:!0,rel:!0});var ee=s(o);u=n(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=n(C,"LI",{});var J=s(E);b=n(J,"A",{href:!0,rel:!0});var Z=s(b);w=n(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=n(C,"LI",{});var B=s(m);x=n(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function cg(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=a("li"),I=a("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);g=n(V,"LI",{});var M=s(g);o=n(M,"A",{href:!0});var O=s(o);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=n(V,"LI",{});var G=s(w);I=n(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function pg(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=a("li"),I=a("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=n(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=n(m,"UL",{});var V=s(i);g=n(V,"LI",{});var M=s(g);o=n(M,"A",{href:!0});var O=s(o);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=n(V,"LI",{});var G=s(w);I=n(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function gg(z){let p,v,f,i,g,o,u,q,_,A,E;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=n(b,"P",{});var w=s(p);v=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=n(b,"UL",{});var I=s(i);g=n(I,"LI",{});var L=s(g);o=n(L,"A",{href:!0});var R=s(o);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=n(L,"CODE",{});var m=s(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){$(o,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,v),k(b,f,w),k(b,i,w),e(i,g),e(g,o),e(o,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function dg(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G,y,S,C,X,ee;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=a("li"),x=a("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a("code"),K=l("private"),G=l(" and you do not have access."),y=d(),S=a("li"),C=a("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=n(Y,"P",{});var J=s(p);v=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=n(Y,"UL",{});var Z=s(i);g=n(Z,"LI",{});var ae=s(g);o=n(ae,"A",{href:!0,rel:!0});var B=s(o);u=n(B,"CODE",{});var Q=s(u);q=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),A=h(Z),E=n(Z,"LI",{});var te=s(E);b=n(te,"A",{href:!0,rel:!0});var ne=s(b);w=n(ne,"CODE",{});var Ce=s(w);I=c(Ce,"ValueError"),Ce.forEach(t),ne.forEach(t),L=c(te,`
if some parameter value is invalid`),te.forEach(t),R=h(Z),m=n(Z,"LI",{});var fe=s(m);x=n(fe,"A",{href:!0});var Je=s(x);V=c(Je,"RepositoryNotFoundError"),Je.forEach(t),M=c(fe,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=n(fe,"CODE",{});var Se=s(O);K=c(Se,"private"),Se.forEach(t),G=c(fe," and you do not have access."),fe.forEach(t),y=h(Z),S=n(Z,"LI",{});var Ne=s(S);C=n(Ne,"A",{href:!0});var U=s(C);X=c(U,"RevisionNotFoundError"),U.forEach(t),ee=c(Ne,`
If the revision to download from cannot be found.`),Ne.forEach(t),Z.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){k(Y,p,J),e(p,v),k(Y,f,J),k(Y,i,J),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G),e(i,y),e(i,S),e(S,C),e(C,X),e(S,ee)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function hg(z){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import upload_file

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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),v=l("Example usage:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function ug(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L;return{c(){p=a("p"),v=l("Raises the following errors:"),f=d(),i=a("ul"),g=a("li"),o=a("a"),u=a("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=a("li"),b=a("a"),w=a("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(R){p=n(R,"P",{});var m=s(p);v=c(m,"Raises the following errors:"),m.forEach(t),f=h(R),i=n(R,"UL",{});var x=s(i);g=n(x,"LI",{});var V=s(g);o=n(V,"A",{href:!0,rel:!0});var M=s(o);u=n(M,"CODE",{});var O=s(u);q=c(O,"HTTPError"),O.forEach(t),M.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),A=h(x),E=n(x,"LI",{});var K=s(E);b=n(K,"A",{href:!0,rel:!0});var G=s(b);w=n(G,"CODE",{});var y=s(w);I=c(y,"ValueError"),y.forEach(t),G.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),x.forEach(t),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow")},m(R,m){k(R,p,m),e(p,v),k(R,f,m),k(R,i,m),e(i,g),e(g,o),e(o,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L)},d(R){R&&t(p),R&&t(f),R&&t(i)}}}function fg(z){let p,v,f,i,g;return i=new re({props:{code:`upload_folder(
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
`}}),{c(){p=a("p"),v=l("Example usage:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function mg(z){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function _g(z){let p,v;return p=new re({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){j(p.$$.fragment,f)},m(f,i){N(p,f,i),v=!0},p:ue,i(f){v||(F(p.$$.fragment,f),v=!0)},o(f){T(p.$$.fragment,f),v=!1},d(f){P(p,f)}}}function bg(z){let p,v,f,i,g;return i=new re({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),v=l("Example:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function vg(z){let p,v,f,i,g;return i=new re({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),v=l("Example:"),f=d(),D(i.$$.fragment)},l(o){p=n(o,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(o),j(i.$$.fragment,o)},m(o,u){k(o,p,u),e(p,v),k(o,f,u),N(i,o,u),g=!0},p:ue,i(o){g||(F(i.$$.fragment,o),g=!0)},o(o){T(i.$$.fragment,o),g=!1},d(o){o&&t(p),o&&t(f),P(i,o)}}}function $g(z){let p,v,f,i,g,o,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G,y,S,C,X,ee,Y,J,Z,ae,B,Q,te,ne,Ce,fe,Je,Se,Ne,U,_e,ba,pe,Fe,va,Qe,$a,Rs,Ze,Os,et,Cs,ve,lo,Ss,Ma,Us,Ms,tt,Vs,ot,zs,at,co,Ws,Va,Gs,Bs,ie,po,Ks,za,Js,Qs,go,Xs,Wa,Ys,Zs,er,ho,tr,ya,or,ar,nr,Ea,sr,wa,rr,ir,nt,lr,le,uo,cr,fo,pr,Ga,gr,dr,hr,mo,ur,ka,fr,mr,_r,_o,br,Ba,vr,$r,yr,Aa,Er,xa,wr,kr,st,Ar,rt,bo,xr,Ka,Hr,qr,$e,vo,Dr,Ja,jr,Nr,Qa,Fr,Tr,it,Pr,Ue,$o,Ir,Xa,Lr,Rr,lt,Or,Me,yo,Cr,Ya,Sr,Ur,ct,Mr,Ve,Eo,Vr,Za,zr,Wr,pt,Gr,gt,wo,Br,en,Kr,Jr,ye,ko,Qr,tn,Xr,Yr,Ha,Zr,qa,ei,ti,dt,oi,ht,Ao,ai,on,ni,si,ut,xo,ri,an,ii,li,me,Ho,ci,nn,pi,gi,sn,di,hi,ft,ui,mt,fi,Ee,qo,mi,rn,_i,bi,_t,vi,bt,$i,we,Do,yi,ln,Ei,wi,vt,ki,$t,Ai,yt,jo,xi,cn,Hi,qi,ke,No,Di,pn,ji,Ni,Et,Fi,wt,Ti,kt,Fo,Pi,gn,Ii,Li,At,To,Ri,dn,Oi,Ci,ze,Po,Si,hn,Ui,Mi,xt,Vi,Ae,Io,zi,un,Wi,Gi,fn,Bi,Ki,Ht,Ji,xe,Lo,Qi,mn,Xi,Yi,Ro,Zi,Oo,el,tl,ol,qt,al,He,Co,nl,_n,sl,rl,Dt,il,jt,ll,We,So,cl,bn,pl,gl,Nt,dl,Ft,Uo,hl,vn,ul,fl,qe,Mo,ml,$n,_l,bl,yn,vl,$l,Tt,yl,Pt,Vo,El,En,wl,kl,Ge,zo,Al,wn,xl,Hl,It,ql,De,Wo,Dl,kn,jl,Nl,Lt,Fl,Rt,Tl,ce,Go,Pl,An,Il,Ll,xn,Rl,Ol,Bo,Cl,Hn,Sl,Ul,Ml,Ot,Vl,Ct,zl,St,Ko,Wl,qn,Gl,is,Xe,Ut,Dn,Jo,Bl,jn,Kl,ls,Qo,Nn,Jl,Ql,cs,Mt,Xl,Da,Yl,Zl,ps,be,Xo,ec,Vt,Yo,tc,Fn,oc,ac,Be,Zo,nc,Tn,sc,rc,ea,ic,Pn,lc,cc,pc,zt,ta,gc,In,dc,gs,Ye,Wt,Ln,oa,hc,Rn,uc,ds,Gt,fc,On,mc,_c,hs,Te,aa,bc,Cn,vc,$c,Bt,us,Pe,na,yc,Sn,Ec,wc,Kt,fs,Ie,sa,kc,Un,Ac,xc,Jt,ms,Le,ra,Hc,Mn,qc,Dc,Qt,_s;return o=new Tc({}),C=new re({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new re({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),_e=new oe({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L573"}}),Fe=new oe({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2836",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Ze=new he({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Cp]},$$scope:{ctx:z}}}),et=new se({props:{$$slots:{default:[Sp]},$$scope:{ctx:z}}}),lo=new oe({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2695",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),tt=new he({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Up]},$$scope:{ctx:z}}}),ot=new se({props:{$$slots:{default:[Mp]},$$scope:{ctx:z}}}),co=new oe({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1820",returnDescription:`
<p>If <em>create_pr</em> is <em>True</em>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <em>None</em>.</p>
`,returnType:`
<p><em>str</em> or <em>None</em></p>
`}}),po=new oe({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2520"}}),nt=new se({props:{$$slots:{default:[Vp]},$$scope:{ctx:z}}}),uo=new oe({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2608"}}),st=new se({props:{$$slots:{default:[zp]},$$scope:{ctx:z}}}),bo=new oe({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1446",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),vo=new oe({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1239",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),it=new se({props:{$$slots:{default:[Wp]},$$scope:{ctx:z}}}),$o=new oe({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2240"}}),lt=new se({props:{$$slots:{default:[Gp]},$$scope:{ctx:z}}}),yo=new oe({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1576"}}),ct=new se({props:{$$slots:{default:[Bp]},$$scope:{ctx:z}}}),Eo=new oe({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2962",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),pt=new se({props:{$$slots:{default:[Kp]},$$scope:{ctx:z}}}),wo=new oe({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L694"}}),ko=new oe({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2431"}}),dt=new se({props:{$$slots:{default:[Jp]},$$scope:{ctx:z}}}),Ao=new oe({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2318",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),xo=new oe({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L686"}}),Ho=new oe({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2352",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),ft=new he({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[Qp]},$$scope:{ctx:z}}}),mt=new he({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[Xp]},$$scope:{ctx:z}}}),qo=new oe({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3018",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),_t=new se({props:{warning:!0,$$slots:{default:[Yp]},$$scope:{ctx:z}}}),bt=new se({props:{$$slots:{default:[Zp]},$$scope:{ctx:z}}}),Do=new oe({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <code>DatasetInfo</code> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L912"}}),vt=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[eg]},$$scope:{ctx:z}}}),$t=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[tg]},$$scope:{ctx:z}}}),jo=new oe({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1077",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),No=new oe({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_models.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author (user or organization) of the
returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_models.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models Example
usage:`,name:"search"},{anchor:"huggingface_hub.HfApi.list_models.emissions_thresholds",description:`<strong>emissions_thresholds</strong> (<code>Tuple</code>, <em>optional</em>) &#x2014;
A tuple of two ints or floats representing a minimum and maximum
carbon footprint to filter the resulting models with in grams.`,name:"emissions_thresholds"},{anchor:"huggingface_hub.HfApi.list_models.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting models. Possible values
are the properties of the <code>ModelInfo</code> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_models.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L704"}}),Et=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[og]},$$scope:{ctx:z}}}),wt=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[ag]},$$scope:{ctx:z}}}),Fo=new oe({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1406",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),To=new oe({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string tag or list of tags that can be used to identify Spaces on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_spaces.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned Spaces.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_spaces.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned Spaces.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_spaces.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting Spaces. Possible
values are the properties of the <code>SpaceInfo</code> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_spaces.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1091",returnDescription:`
<p>a list of <code>SpaceInfo</code> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Po=new oe({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2910",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),xt=new se({props:{$$slots:{default:[ng]},$$scope:{ctx:z}}}),Io=new oe({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1176",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),Ht=new se({props:{$$slots:{default:[sg]},$$scope:{ctx:z}}}),Lo=new oe({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1742"}}),qt=new se({props:{$$slots:{default:[rg]},$$scope:{ctx:z}}}),Co=new oe({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2770",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Dt=new he({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[ig]},$$scope:{ctx:z}}}),jt=new se({props:{$$slots:{default:[lg]},$$scope:{ctx:z}}}),So=new oe({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1351",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),Nt=new se({props:{$$slots:{default:[cg]},$$scope:{ctx:z}}}),Uo=new oe({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L667"}}),Mo=new oe({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1295",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),Tt=new se({props:{$$slots:{default:[pg]},$$scope:{ctx:z}}}),Vo=new oe({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L679"}}),zo=new oe({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1667",returnDescription:`
<p>The HTTP response in json.</p>
`}}),It=new se({props:{$$slots:{default:[gg]},$$scope:{ctx:z}}}),Wo=new oe({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1949",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Lt=new se({props:{$$slots:{default:[dg]},$$scope:{ctx:z}}}),Rt=new he({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[hg]},$$scope:{ctx:z}}}),Go=new oe({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2096",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ot=new se({props:{$$slots:{default:[ug]},$$scope:{ctx:z}}}),Ct=new he({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[fg]},$$scope:{ctx:z}}}),Ko=new oe({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L577"}}),Jo=new Tc({}),Xo=new oe({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3080"}}),Yo=new oe({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3117"}}),Zo=new oe({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3096",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),ta=new oe({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L3083"}}),oa=new Tc({}),aa=new oe({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Bt=new he({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[mg]},$$scope:{ctx:z}}}),na=new oe({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Kt=new he({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[_g]},$$scope:{ctx:z}}}),sa=new oe({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L461"}}),Jt=new he({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[bg]},$$scope:{ctx:z}}}),ra=new oe({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L423"}}),Qt=new he({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[vg]},$$scope:{ctx:z}}}),{c(){p=a("meta"),v=d(),f=a("h1"),i=a("a"),g=a("span"),D(o.$$.fragment),u=d(),q=a("span"),_=l("Hugging Face Hub API"),A=d(),E=a("p"),b=l("Below is the documentation for the "),w=a("code"),I=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=d(),m=a("p"),x=l("All methods from the "),V=a("code"),M=l("HfApi"),O=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=d(),G=a("p"),y=l("The following approach uses the method from the root of the package:"),S=d(),D(C.$$.fragment),X=d(),ee=a("p"),Y=l("The following approach uses the "),J=a("code"),Z=l("HfApi"),ae=l(" class:"),B=d(),D(Q.$$.fragment),te=d(),ne=a("p"),Ce=l("Using the "),fe=a("code"),Je=l("HfApi"),Se=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Ne=d(),U=a("div"),D(_e.$$.fragment),ba=d(),pe=a("div"),D(Fe.$$.fragment),va=d(),Qe=a("p"),$a=l("Closes or re-opens a Discussion or Pull Request."),Rs=d(),D(Ze.$$.fragment),Os=d(),D(et.$$.fragment),Cs=d(),ve=a("div"),D(lo.$$.fragment),Ss=d(),Ma=a("p"),Us=l("Creates a new comment on the given Discussion."),Ms=d(),D(tt.$$.fragment),Vs=d(),D(ot.$$.fragment),zs=d(),at=a("div"),D(co.$$.fragment),Ws=d(),Va=a("p"),Gs=l("Creates a commit in the given repo, deleting & uploading files as needed."),Bs=d(),ie=a("div"),D(po.$$.fragment),Ks=d(),za=a("p"),Js=l("Creates a Discussion or Pull Request."),Qs=d(),go=a("p"),Xs=l("Pull Requests created programmatically will be in "),Wa=a("code"),Ys=l('"draft"'),Zs=l(" status."),er=d(),ho=a("p"),tr=l("Creating a Pull Request with changes can also be done at once with "),ya=a("a"),or=l("HfApi.create_commit()"),ar=l("."),nr=d(),Ea=a("p"),sr=l("Returns: "),wa=a("a"),rr=l("DiscussionWithDetails"),ir=d(),D(nt.$$.fragment),lr=d(),le=a("div"),D(uo.$$.fragment),cr=d(),fo=a("p"),pr=l("Creates a Pull Request . Pull Requests created programmatically will be in "),Ga=a("code"),gr=l('"draft"'),dr=l(" status."),hr=d(),mo=a("p"),ur=l("Creating a Pull Request with changes can also be done at once with "),ka=a("a"),fr=l("HfApi.create_commit()"),mr=l(";"),_r=d(),_o=a("p"),br=l("This is a wrapper around "),Ba=a("code"),vr=l("HfApi.create_discusssion"),$r=l("."),yr=d(),Aa=a("p"),Er=l("Returns: "),xa=a("a"),wr=l("DiscussionWithDetails"),kr=d(),D(st.$$.fragment),Ar=d(),rt=a("div"),D(bo.$$.fragment),xr=d(),Ka=a("p"),Hr=l("Create an empty repo on the HuggingFace Hub."),qr=d(),$e=a("div"),D(vo.$$.fragment),Dr=d(),Ja=a("p"),jr=l("Get info on one specific dataset on huggingface.co."),Nr=d(),Qa=a("p"),Fr=l("Dataset can be private if you pass an acceptable token."),Tr=d(),D(it.$$.fragment),Pr=d(),Ue=a("div"),D($o.$$.fragment),Ir=d(),Xa=a("p"),Lr=l("Deletes a file in the given repo."),Rr=d(),D(lt.$$.fragment),Or=d(),Me=a("div"),D(yo.$$.fragment),Cr=d(),Ya=a("p"),Sr=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ur=d(),D(ct.$$.fragment),Mr=d(),Ve=a("div"),D(Eo.$$.fragment),Vr=d(),Za=a("p"),zr=l("Edits a comment on a Discussion / Pull Request."),Wr=d(),D(pt.$$.fragment),Gr=d(),gt=a("div"),D(wo.$$.fragment),Br=d(),en=a("p"),Kr=l("Gets all valid dataset tags as a nested namespace object."),Jr=d(),ye=a("div"),D(ko.$$.fragment),Qr=d(),tn=a("p"),Xr=l("Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Yr=d(),Ha=a("p"),Zr=l("Returns: "),qa=a("a"),ei=l("DiscussionWithDetails"),ti=d(),D(dt.$$.fragment),oi=d(),ht=a("div"),D(Ao.$$.fragment),ai=d(),on=a("p"),ni=l(`Returns the repository name for a given model ID and optional
organization.`),si=d(),ut=a("div"),D(xo.$$.fragment),ri=d(),an=a("p"),ii=l("Gets all valid model tags as a nested namespace object"),li=d(),me=a("div"),D(Ho.$$.fragment),ci=d(),nn=a("p"),pi=l("Fetches Discussions and Pull Requests for the given repo."),gi=d(),sn=a("p"),di=l("Example:"),hi=d(),D(ft.$$.fragment),ui=d(),D(mt.$$.fragment),fi=d(),Ee=a("div"),D(qo.$$.fragment),mi=d(),rn=a("p"),_i=l("Hides a comment on a Discussion / Pull Request."),bi=d(),D(_t.$$.fragment),vi=d(),D(bt.$$.fragment),$i=d(),we=a("div"),D(Do.$$.fragment),yi=d(),ln=a("p"),Ei=l("Get the public list of all the datasets on huggingface.co"),wi=d(),D(vt.$$.fragment),ki=d(),D($t.$$.fragment),Ai=d(),yt=a("div"),D(jo.$$.fragment),xi=d(),cn=a("p"),Hi=l("Get the public list of all the metrics on huggingface.co"),qi=d(),ke=a("div"),D(No.$$.fragment),Di=d(),pn=a("p"),ji=l("Get the public list of all the models on huggingface.co"),Ni=d(),D(Et.$$.fragment),Fi=d(),D(wt.$$.fragment),Ti=d(),kt=a("div"),D(Fo.$$.fragment),Pi=d(),gn=a("p"),Ii=l("Get the list of files in a given repo."),Li=d(),At=a("div"),D(To.$$.fragment),Ri=d(),dn=a("p"),Oi=l("Get the public list of all Spaces on huggingface.co"),Ci=d(),ze=a("div"),D(Po.$$.fragment),Si=d(),hn=a("p"),Ui=l("Merges a Pull Request."),Mi=d(),D(xt.$$.fragment),Vi=d(),Ae=a("div"),D(Io.$$.fragment),zi=d(),un=a("p"),Wi=l("Get info on one specific model on huggingface.co"),Gi=d(),fn=a("p"),Bi=l("Model can be private if you pass an acceptable token or are logged in."),Ki=d(),D(Ht.$$.fragment),Ji=d(),xe=a("div"),D(Lo.$$.fragment),Qi=d(),mn=a("p"),Xi=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Yi=d(),Ro=a("p"),Zi=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Oo=a("a"),el=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),tl=l("."),ol=d(),D(qt.$$.fragment),al=d(),He=a("div"),D(Co.$$.fragment),nl=d(),_n=a("p"),sl=l("Renames a Discussion."),rl=d(),D(Dt.$$.fragment),il=d(),D(jt.$$.fragment),ll=d(),We=a("div"),D(So.$$.fragment),cl=d(),bn=a("p"),pl=l("Get the info object for a given repo of a given type."),gl=d(),D(Nt.$$.fragment),dl=d(),Ft=a("div"),D(Uo.$$.fragment),hl=d(),vn=a("p"),ul=l(`Saves the passed access token so git can correctly authenticate the
user.`),fl=d(),qe=a("div"),D(Mo.$$.fragment),ml=d(),$n=a("p"),_l=l("Get info on one specific Space on huggingface.co."),bl=d(),yn=a("p"),vl=l("Space can be private if you pass an acceptable token."),$l=d(),D(Tt.$$.fragment),yl=d(),Pt=a("div"),D(Vo.$$.fragment),El=d(),En=a("p"),wl=l("Resets the user\u2019s access token."),kl=d(),Ge=a("div"),D(zo.$$.fragment),Al=d(),wn=a("p"),xl=l("Update the visibility setting of a repository."),Hl=d(),D(It.$$.fragment),ql=d(),De=a("div"),D(Wo.$$.fragment),Dl=d(),kn=a("p"),jl=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Nl=d(),D(Lt.$$.fragment),Fl=d(),D(Rt.$$.fragment),Tl=d(),ce=a("div"),D(Go.$$.fragment),Pl=d(),An=a("p"),Il=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ll=d(),xn=a("p"),Rl=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Ol=d(),Bo=a("p"),Cl=l("Uses "),Hn=a("code"),Sl=l("HfApi.create_commit"),Ul=l(" under the hood."),Ml=d(),D(Ot.$$.fragment),Vl=d(),D(Ct.$$.fragment),zl=d(),St=a("div"),D(Ko.$$.fragment),Wl=d(),qn=a("p"),Gl=l("Call HF API to know \u201Cwhoami\u201D."),is=d(),Xe=a("h2"),Ut=a("a"),Dn=a("span"),D(Jo.$$.fragment),Bl=d(),jn=a("span"),Kl=l("Hugging Face local storage"),ls=d(),Qo=a("p"),Nn=a("code"),Jl=l("huggingface_hub"),Ql=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),cs=d(),Mt=a("p"),Xl=l("It does this using the "),Da=a("a"),Yl=l("HfFolder"),Zl=l(" utility, which saves data at the root of the user."),ps=d(),be=a("div"),D(Xo.$$.fragment),ec=d(),Vt=a("div"),D(Yo.$$.fragment),tc=d(),Fn=a("p"),oc=l("Deletes the token from storage. Does not fail if token does not exist."),ac=d(),Be=a("div"),D(Zo.$$.fragment),nc=d(),Tn=a("p"),sc=l("Get token or None if not existent."),rc=d(),ea=a("p"),ic=l("Note that a token can be also provided using the "),Pn=a("code"),lc=l("HUGGING_FACE_HUB_TOKEN"),cc=l(`
environment variable.`),pc=d(),zt=a("div"),D(ta.$$.fragment),gc=d(),In=a("p"),dc=l("Save token, creating folder as needed."),gs=d(),Ye=a("h2"),Wt=a("a"),Ln=a("span"),D(oa.$$.fragment),hc=d(),Rn=a("span"),uc=l("Filtering helpers"),ds=d(),Gt=a("p"),fc=l("Some helpers to filter repositories on the Hub are available in the "),On=a("code"),mc=l("huggingface_hub"),_c=l(" package."),hs=d(),Te=a("div"),D(aa.$$.fragment),bc=d(),Cn=a("p"),vc=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),$c=d(),D(Bt.$$.fragment),us=d(),Pe=a("div"),D(na.$$.fragment),yc=d(),Sn=a("p"),Ec=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),wc=d(),D(Kt.$$.fragment),fs=d(),Ie=a("div"),D(sa.$$.fragment),kc=d(),Un=a("p"),Ac=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),xc=d(),D(Jt.$$.fragment),ms=d(),Le=a("div"),D(ra.$$.fragment),Hc=d(),Mn=a("p"),qc=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Dc=d(),D(Qt.$$.fragment),this.h()},l(r){const H=Rp('[data-svelte="svelte-1phssyn"]',document.head);p=n(H,"META",{name:!0,content:!0}),H.forEach(t),v=h(r),f=n(r,"H1",{class:!0});var ia=s(f);i=n(ia,"A",{id:!0,class:!0,href:!0});var Vn=s(i);g=n(Vn,"SPAN",{});var zn=s(g);j(o.$$.fragment,zn),zn.forEach(t),Vn.forEach(t),u=h(ia),q=n(ia,"SPAN",{});var Wn=s(q);_=c(Wn,"Hugging Face Hub API"),Wn.forEach(t),ia.forEach(t),A=h(r),E=n(r,"P",{});var la=s(E);b=c(la,"Below is the documentation for the "),w=n(la,"CODE",{});var Gn=s(w);I=c(Gn,"HfApi"),Gn.forEach(t),L=c(la,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),la.forEach(t),R=h(r),m=n(r,"P",{});var ca=s(m);x=c(ca,"All methods from the "),V=n(ca,"CODE",{});var Bn=s(V);M=c(Bn,"HfApi"),Bn.forEach(t),O=c(ca,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),ca.forEach(t),K=h(r),G=n(r,"P",{});var Kn=s(G);y=c(Kn,"The following approach uses the method from the root of the package:"),Kn.forEach(t),S=h(r),j(C.$$.fragment,r),X=h(r),ee=n(r,"P",{});var pa=s(ee);Y=c(pa,"The following approach uses the "),J=n(pa,"CODE",{});var Jn=s(J);Z=c(Jn,"HfApi"),Jn.forEach(t),ae=c(pa," class:"),pa.forEach(t),B=h(r),j(Q.$$.fragment,r),te=h(r),ne=n(r,"P",{});var ga=s(ne);Ce=c(ga,"Using the "),fe=n(ga,"CODE",{});var Qn=s(fe);Je=c(Qn,"HfApi"),Qn.forEach(t),Se=c(ga," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ga.forEach(t),Ne=h(r),U=n(r,"DIV",{class:!0});var W=s(U);j(_e.$$.fragment,W),ba=h(W),pe=n(W,"DIV",{class:!0});var Re=s(pe);j(Fe.$$.fragment,Re),va=h(Re),Qe=n(Re,"P",{});var Xn=s(Qe);$a=c(Xn,"Closes or re-opens a Discussion or Pull Request."),Xn.forEach(t),Rs=h(Re),j(Ze.$$.fragment,Re),Os=h(Re),j(et.$$.fragment,Re),Re.forEach(t),Cs=h(W),ve=n(W,"DIV",{class:!0});var Oe=s(ve);j(lo.$$.fragment,Oe),Ss=h(Oe),Ma=n(Oe,"P",{});var Yn=s(Ma);Us=c(Yn,"Creates a new comment on the given Discussion."),Yn.forEach(t),Ms=h(Oe),j(tt.$$.fragment,Oe),Vs=h(Oe),j(ot.$$.fragment,Oe),Oe.forEach(t),zs=h(W),at=n(W,"DIV",{class:!0});var da=s(at);j(co.$$.fragment,da),Ws=h(da),Va=n(da,"P",{});var Zn=s(Va);Gs=c(Zn,"Creates a commit in the given repo, deleting & uploading files as needed."),Zn.forEach(t),da.forEach(t),Bs=h(W),ie=n(W,"DIV",{class:!0});var ge=s(ie);j(po.$$.fragment,ge),Ks=h(ge),za=n(ge,"P",{});var es=s(za);Js=c(es,"Creates a Discussion or Pull Request."),es.forEach(t),Qs=h(ge),go=n(ge,"P",{});var ha=s(go);Xs=c(ha,"Pull Requests created programmatically will be in "),Wa=n(ha,"CODE",{});var ts=s(Wa);Ys=c(ts,'"draft"'),ts.forEach(t),Zs=c(ha," status."),ha.forEach(t),er=h(ge),ho=n(ge,"P",{});var ua=s(ho);tr=c(ua,"Creating a Pull Request with changes can also be done at once with "),ya=n(ua,"A",{href:!0});var os=s(ya);or=c(os,"HfApi.create_commit()"),os.forEach(t),ar=c(ua,"."),ua.forEach(t),nr=h(ge),Ea=n(ge,"P",{});var ja=s(Ea);sr=c(ja,"Returns: "),wa=n(ja,"A",{href:!0});var as=s(wa);rr=c(as,"DiscussionWithDetails"),as.forEach(t),ja.forEach(t),ir=h(ge),j(nt.$$.fragment,ge),ge.forEach(t),lr=h(W),le=n(W,"DIV",{class:!0});var de=s(le);j(uo.$$.fragment,de),cr=h(de),fo=n(de,"P",{});var fa=s(fo);pr=c(fa,"Creates a Pull Request . Pull Requests created programmatically will be in "),Ga=n(fa,"CODE",{});var ns=s(Ga);gr=c(ns,'"draft"'),ns.forEach(t),dr=c(fa," status."),fa.forEach(t),hr=h(de),mo=n(de,"P",{});var ma=s(mo);ur=c(ma,"Creating a Pull Request with changes can also be done at once with "),ka=n(ma,"A",{href:!0});var ss=s(ka);fr=c(ss,"HfApi.create_commit()"),ss.forEach(t),mr=c(ma,";"),ma.forEach(t),_r=h(de),_o=n(de,"P",{});var _a=s(_o);br=c(_a,"This is a wrapper around "),Ba=n(_a,"CODE",{});var rs=s(Ba);vr=c(rs,"HfApi.create_discusssion"),rs.forEach(t),$r=c(_a,"."),_a.forEach(t),yr=h(de),Aa=n(de,"P",{});var jc=s(Aa);Er=c(jc,"Returns: "),xa=n(jc,"A",{href:!0});var Pc=s(xa);wr=c(Pc,"DiscussionWithDetails"),Pc.forEach(t),jc.forEach(t),kr=h(de),j(st.$$.fragment,de),de.forEach(t),Ar=h(W),rt=n(W,"DIV",{class:!0});var bs=s(rt);j(bo.$$.fragment,bs),xr=h(bs),Ka=n(bs,"P",{});var Ic=s(Ka);Hr=c(Ic,"Create an empty repo on the HuggingFace Hub."),Ic.forEach(t),bs.forEach(t),qr=h(W),$e=n(W,"DIV",{class:!0});var Xt=s($e);j(vo.$$.fragment,Xt),Dr=h(Xt),Ja=n(Xt,"P",{});var Lc=s(Ja);jr=c(Lc,"Get info on one specific dataset on huggingface.co."),Lc.forEach(t),Nr=h(Xt),Qa=n(Xt,"P",{});var Rc=s(Qa);Fr=c(Rc,"Dataset can be private if you pass an acceptable token."),Rc.forEach(t),Tr=h(Xt),j(it.$$.fragment,Xt),Xt.forEach(t),Pr=h(W),Ue=n(W,"DIV",{class:!0});var Na=s(Ue);j($o.$$.fragment,Na),Ir=h(Na),Xa=n(Na,"P",{});var Oc=s(Xa);Lr=c(Oc,"Deletes a file in the given repo."),Oc.forEach(t),Rr=h(Na),j(lt.$$.fragment,Na),Na.forEach(t),Or=h(W),Me=n(W,"DIV",{class:!0});var Fa=s(Me);j(yo.$$.fragment,Fa),Cr=h(Fa),Ya=n(Fa,"P",{});var Cc=s(Ya);Sr=c(Cc,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Cc.forEach(t),Ur=h(Fa),j(ct.$$.fragment,Fa),Fa.forEach(t),Mr=h(W),Ve=n(W,"DIV",{class:!0});var Ta=s(Ve);j(Eo.$$.fragment,Ta),Vr=h(Ta),Za=n(Ta,"P",{});var Sc=s(Za);zr=c(Sc,"Edits a comment on a Discussion / Pull Request."),Sc.forEach(t),Wr=h(Ta),j(pt.$$.fragment,Ta),Ta.forEach(t),Gr=h(W),gt=n(W,"DIV",{class:!0});var vs=s(gt);j(wo.$$.fragment,vs),Br=h(vs),en=n(vs,"P",{});var Uc=s(en);Kr=c(Uc,"Gets all valid dataset tags as a nested namespace object."),Uc.forEach(t),vs.forEach(t),Jr=h(W),ye=n(W,"DIV",{class:!0});var Yt=s(ye);j(ko.$$.fragment,Yt),Qr=h(Yt),tn=n(Yt,"P",{});var Mc=s(tn);Xr=c(Mc,"Fetches a Discussion\u2019s / Pull Request \u2018s details from the Hub."),Mc.forEach(t),Yr=h(Yt),Ha=n(Yt,"P",{});var Nc=s(Ha);Zr=c(Nc,"Returns: "),qa=n(Nc,"A",{href:!0});var Vc=s(qa);ei=c(Vc,"DiscussionWithDetails"),Vc.forEach(t),Nc.forEach(t),ti=h(Yt),j(dt.$$.fragment,Yt),Yt.forEach(t),oi=h(W),ht=n(W,"DIV",{class:!0});var $s=s(ht);j(Ao.$$.fragment,$s),ai=h($s),on=n($s,"P",{});var zc=s(on);ni=c(zc,`Returns the repository name for a given model ID and optional
organization.`),zc.forEach(t),$s.forEach(t),si=h(W),ut=n(W,"DIV",{class:!0});var ys=s(ut);j(xo.$$.fragment,ys),ri=h(ys),an=n(ys,"P",{});var Wc=s(an);ii=c(Wc,"Gets all valid model tags as a nested namespace object"),Wc.forEach(t),ys.forEach(t),li=h(W),me=n(W,"DIV",{class:!0});var Ke=s(me);j(Ho.$$.fragment,Ke),ci=h(Ke),nn=n(Ke,"P",{});var Gc=s(nn);pi=c(Gc,"Fetches Discussions and Pull Requests for the given repo."),Gc.forEach(t),gi=h(Ke),sn=n(Ke,"P",{});var Bc=s(sn);di=c(Bc,"Example:"),Bc.forEach(t),hi=h(Ke),j(ft.$$.fragment,Ke),ui=h(Ke),j(mt.$$.fragment,Ke),Ke.forEach(t),fi=h(W),Ee=n(W,"DIV",{class:!0});var Zt=s(Ee);j(qo.$$.fragment,Zt),mi=h(Zt),rn=n(Zt,"P",{});var Kc=s(rn);_i=c(Kc,"Hides a comment on a Discussion / Pull Request."),Kc.forEach(t),bi=h(Zt),j(_t.$$.fragment,Zt),vi=h(Zt),j(bt.$$.fragment,Zt),Zt.forEach(t),$i=h(W),we=n(W,"DIV",{class:!0});var eo=s(we);j(Do.$$.fragment,eo),yi=h(eo),ln=n(eo,"P",{});var Jc=s(ln);Ei=c(Jc,"Get the public list of all the datasets on huggingface.co"),Jc.forEach(t),wi=h(eo),j(vt.$$.fragment,eo),ki=h(eo),j($t.$$.fragment,eo),eo.forEach(t),Ai=h(W),yt=n(W,"DIV",{class:!0});var Es=s(yt);j(jo.$$.fragment,Es),xi=h(Es),cn=n(Es,"P",{});var Qc=s(cn);Hi=c(Qc,"Get the public list of all the metrics on huggingface.co"),Qc.forEach(t),Es.forEach(t),qi=h(W),ke=n(W,"DIV",{class:!0});var to=s(ke);j(No.$$.fragment,to),Di=h(to),pn=n(to,"P",{});var Xc=s(pn);ji=c(Xc,"Get the public list of all the models on huggingface.co"),Xc.forEach(t),Ni=h(to),j(Et.$$.fragment,to),Fi=h(to),j(wt.$$.fragment,to),to.forEach(t),Ti=h(W),kt=n(W,"DIV",{class:!0});var ws=s(kt);j(Fo.$$.fragment,ws),Pi=h(ws),gn=n(ws,"P",{});var Yc=s(gn);Ii=c(Yc,"Get the list of files in a given repo."),Yc.forEach(t),ws.forEach(t),Li=h(W),At=n(W,"DIV",{class:!0});var ks=s(At);j(To.$$.fragment,ks),Ri=h(ks),dn=n(ks,"P",{});var Zc=s(dn);Oi=c(Zc,"Get the public list of all Spaces on huggingface.co"),Zc.forEach(t),ks.forEach(t),Ci=h(W),ze=n(W,"DIV",{class:!0});var Pa=s(ze);j(Po.$$.fragment,Pa),Si=h(Pa),hn=n(Pa,"P",{});var ep=s(hn);Ui=c(ep,"Merges a Pull Request."),ep.forEach(t),Mi=h(Pa),j(xt.$$.fragment,Pa),Pa.forEach(t),Vi=h(W),Ae=n(W,"DIV",{class:!0});var oo=s(Ae);j(Io.$$.fragment,oo),zi=h(oo),un=n(oo,"P",{});var tp=s(un);Wi=c(tp,"Get info on one specific model on huggingface.co"),tp.forEach(t),Gi=h(oo),fn=n(oo,"P",{});var op=s(fn);Bi=c(op,"Model can be private if you pass an acceptable token or are logged in."),op.forEach(t),Ki=h(oo),j(Ht.$$.fragment,oo),oo.forEach(t),Ji=h(W),xe=n(W,"DIV",{class:!0});var ao=s(xe);j(Lo.$$.fragment,ao),Qi=h(ao),mn=n(ao,"P",{});var ap=s(mn);Xi=c(ap,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ap.forEach(t),Yi=h(ao),Ro=n(ao,"P",{});var As=s(Ro);Zi=c(As,`Note there are certain limitations. For more information about moving
repositories, please see
`),Oo=n(As,"A",{href:!0,rel:!0});var np=s(Oo);el=c(np,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),np.forEach(t),tl=c(As,"."),As.forEach(t),ol=h(ao),j(qt.$$.fragment,ao),ao.forEach(t),al=h(W),He=n(W,"DIV",{class:!0});var no=s(He);j(Co.$$.fragment,no),nl=h(no),_n=n(no,"P",{});var sp=s(_n);sl=c(sp,"Renames a Discussion."),sp.forEach(t),rl=h(no),j(Dt.$$.fragment,no),il=h(no),j(jt.$$.fragment,no),no.forEach(t),ll=h(W),We=n(W,"DIV",{class:!0});var Ia=s(We);j(So.$$.fragment,Ia),cl=h(Ia),bn=n(Ia,"P",{});var rp=s(bn);pl=c(rp,"Get the info object for a given repo of a given type."),rp.forEach(t),gl=h(Ia),j(Nt.$$.fragment,Ia),Ia.forEach(t),dl=h(W),Ft=n(W,"DIV",{class:!0});var xs=s(Ft);j(Uo.$$.fragment,xs),hl=h(xs),vn=n(xs,"P",{});var ip=s(vn);ul=c(ip,`Saves the passed access token so git can correctly authenticate the
user.`),ip.forEach(t),xs.forEach(t),fl=h(W),qe=n(W,"DIV",{class:!0});var so=s(qe);j(Mo.$$.fragment,so),ml=h(so),$n=n(so,"P",{});var lp=s($n);_l=c(lp,"Get info on one specific Space on huggingface.co."),lp.forEach(t),bl=h(so),yn=n(so,"P",{});var cp=s(yn);vl=c(cp,"Space can be private if you pass an acceptable token."),cp.forEach(t),$l=h(so),j(Tt.$$.fragment,so),so.forEach(t),yl=h(W),Pt=n(W,"DIV",{class:!0});var Hs=s(Pt);j(Vo.$$.fragment,Hs),El=h(Hs),En=n(Hs,"P",{});var pp=s(En);wl=c(pp,"Resets the user\u2019s access token."),pp.forEach(t),Hs.forEach(t),kl=h(W),Ge=n(W,"DIV",{class:!0});var La=s(Ge);j(zo.$$.fragment,La),Al=h(La),wn=n(La,"P",{});var gp=s(wn);xl=c(gp,"Update the visibility setting of a repository."),gp.forEach(t),Hl=h(La),j(It.$$.fragment,La),La.forEach(t),ql=h(W),De=n(W,"DIV",{class:!0});var ro=s(De);j(Wo.$$.fragment,ro),Dl=h(ro),kn=n(ro,"P",{});var dp=s(kn);jl=c(dp,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),dp.forEach(t),Nl=h(ro),j(Lt.$$.fragment,ro),Fl=h(ro),j(Rt.$$.fragment,ro),ro.forEach(t),Tl=h(W),ce=n(W,"DIV",{class:!0});var je=s(ce);j(Go.$$.fragment,je),Pl=h(je),An=n(je,"P",{});var hp=s(An);Il=c(hp,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),hp.forEach(t),Ll=h(je),xn=n(je,"P",{});var up=s(xn);Rl=c(up,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),up.forEach(t),Ol=h(je),Bo=n(je,"P",{});var qs=s(Bo);Cl=c(qs,"Uses "),Hn=n(qs,"CODE",{});var fp=s(Hn);Sl=c(fp,"HfApi.create_commit"),fp.forEach(t),Ul=c(qs," under the hood."),qs.forEach(t),Ml=h(je),j(Ot.$$.fragment,je),Vl=h(je),j(Ct.$$.fragment,je),je.forEach(t),zl=h(W),St=n(W,"DIV",{class:!0});var Ds=s(St);j(Ko.$$.fragment,Ds),Wl=h(Ds),qn=n(Ds,"P",{});var mp=s(qn);Gl=c(mp,"Call HF API to know \u201Cwhoami\u201D."),mp.forEach(t),Ds.forEach(t),W.forEach(t),is=h(r),Xe=n(r,"H2",{class:!0});var js=s(Xe);Ut=n(js,"A",{id:!0,class:!0,href:!0});var _p=s(Ut);Dn=n(_p,"SPAN",{});var bp=s(Dn);j(Jo.$$.fragment,bp),bp.forEach(t),_p.forEach(t),Bl=h(js),jn=n(js,"SPAN",{});var vp=s(jn);Kl=c(vp,"Hugging Face local storage"),vp.forEach(t),js.forEach(t),ls=h(r),Qo=n(r,"P",{});var Fc=s(Qo);Nn=n(Fc,"CODE",{});var $p=s(Nn);Jl=c($p,"huggingface_hub"),$p.forEach(t),Ql=c(Fc,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Fc.forEach(t),cs=h(r),Mt=n(r,"P",{});var Ns=s(Mt);Xl=c(Ns,"It does this using the "),Da=n(Ns,"A",{href:!0});var yp=s(Da);Yl=c(yp,"HfFolder"),yp.forEach(t),Zl=c(Ns," utility, which saves data at the root of the user."),Ns.forEach(t),ps=h(r),be=n(r,"DIV",{class:!0});var io=s(be);j(Xo.$$.fragment,io),ec=h(io),Vt=n(io,"DIV",{class:!0});var Fs=s(Vt);j(Yo.$$.fragment,Fs),tc=h(Fs),Fn=n(Fs,"P",{});var Ep=s(Fn);oc=c(Ep,"Deletes the token from storage. Does not fail if token does not exist."),Ep.forEach(t),Fs.forEach(t),ac=h(io),Be=n(io,"DIV",{class:!0});var Ra=s(Be);j(Zo.$$.fragment,Ra),nc=h(Ra),Tn=n(Ra,"P",{});var wp=s(Tn);sc=c(wp,"Get token or None if not existent."),wp.forEach(t),rc=h(Ra),ea=n(Ra,"P",{});var Ts=s(ea);ic=c(Ts,"Note that a token can be also provided using the "),Pn=n(Ts,"CODE",{});var kp=s(Pn);lc=c(kp,"HUGGING_FACE_HUB_TOKEN"),kp.forEach(t),cc=c(Ts,`
environment variable.`),Ts.forEach(t),Ra.forEach(t),pc=h(io),zt=n(io,"DIV",{class:!0});var Ps=s(zt);j(ta.$$.fragment,Ps),gc=h(Ps),In=n(Ps,"P",{});var Ap=s(In);dc=c(Ap,"Save token, creating folder as needed."),Ap.forEach(t),Ps.forEach(t),io.forEach(t),gs=h(r),Ye=n(r,"H2",{class:!0});var Is=s(Ye);Wt=n(Is,"A",{id:!0,class:!0,href:!0});var xp=s(Wt);Ln=n(xp,"SPAN",{});var Hp=s(Ln);j(oa.$$.fragment,Hp),Hp.forEach(t),xp.forEach(t),hc=h(Is),Rn=n(Is,"SPAN",{});var qp=s(Rn);uc=c(qp,"Filtering helpers"),qp.forEach(t),Is.forEach(t),ds=h(r),Gt=n(r,"P",{});var Ls=s(Gt);fc=c(Ls,"Some helpers to filter repositories on the Hub are available in the "),On=n(Ls,"CODE",{});var Dp=s(On);mc=c(Dp,"huggingface_hub"),Dp.forEach(t),_c=c(Ls," package."),Ls.forEach(t),hs=h(r),Te=n(r,"DIV",{class:!0});var Oa=s(Te);j(aa.$$.fragment,Oa),bc=h(Oa),Cn=n(Oa,"P",{});var jp=s(Cn);vc=c(jp,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),jp.forEach(t),$c=h(Oa),j(Bt.$$.fragment,Oa),Oa.forEach(t),us=h(r),Pe=n(r,"DIV",{class:!0});var Ca=s(Pe);j(na.$$.fragment,Ca),yc=h(Ca),Sn=n(Ca,"P",{});var Np=s(Sn);Ec=c(Np,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Np.forEach(t),wc=h(Ca),j(Kt.$$.fragment,Ca),Ca.forEach(t),fs=h(r),Ie=n(r,"DIV",{class:!0});var Sa=s(Ie);j(sa.$$.fragment,Sa),kc=h(Sa),Un=n(Sa,"P",{});var Fp=s(Un);Ac=c(Fp,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Fp.forEach(t),xc=h(Sa),j(Jt.$$.fragment,Sa),Sa.forEach(t),ms=h(r),Le=n(r,"DIV",{class:!0});var Ua=s(Le);j(ra.$$.fragment,Ua),Hc=h(Ua),Mn=n(Ua,"P",{});var Tp=s(Mn);qc=c(Tp,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Tp.forEach(t),Dc=h(Ua),j(Qt.$$.fragment,Ua),Ua.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(yg)),$(i,"id","huggingface_hub.HfApi"),$(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(i,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ya,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(wa,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ka,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(xa,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qa,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oo,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(Oo,"rel","nofollow"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ut,"id","huggingface_hub.HfFolder"),$(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Ut,"href","#huggingface_hub.HfFolder"),$(Xe,"class","relative group"),$(Da,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Wt,"id","huggingface_hub.DatasetFilter"),$(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Wt,"href","#huggingface_hub.DatasetFilter"),$(Ye,"class","relative group"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,H){e(document.head,p),k(r,v,H),k(r,f,H),e(f,i),e(i,g),N(o,g,null),e(f,u),e(f,q),e(q,_),k(r,A,H),k(r,E,H),e(E,b),e(E,w),e(w,I),e(E,L),k(r,R,H),k(r,m,H),e(m,x),e(m,V),e(V,M),e(m,O),k(r,K,H),k(r,G,H),e(G,y),k(r,S,H),N(C,r,H),k(r,X,H),k(r,ee,H),e(ee,Y),e(ee,J),e(J,Z),e(ee,ae),k(r,B,H),N(Q,r,H),k(r,te,H),k(r,ne,H),e(ne,Ce),e(ne,fe),e(fe,Je),e(ne,Se),k(r,Ne,H),k(r,U,H),N(_e,U,null),e(U,ba),e(U,pe),N(Fe,pe,null),e(pe,va),e(pe,Qe),e(Qe,$a),e(pe,Rs),N(Ze,pe,null),e(pe,Os),N(et,pe,null),e(U,Cs),e(U,ve),N(lo,ve,null),e(ve,Ss),e(ve,Ma),e(Ma,Us),e(ve,Ms),N(tt,ve,null),e(ve,Vs),N(ot,ve,null),e(U,zs),e(U,at),N(co,at,null),e(at,Ws),e(at,Va),e(Va,Gs),e(U,Bs),e(U,ie),N(po,ie,null),e(ie,Ks),e(ie,za),e(za,Js),e(ie,Qs),e(ie,go),e(go,Xs),e(go,Wa),e(Wa,Ys),e(go,Zs),e(ie,er),e(ie,ho),e(ho,tr),e(ho,ya),e(ya,or),e(ho,ar),e(ie,nr),e(ie,Ea),e(Ea,sr),e(Ea,wa),e(wa,rr),e(ie,ir),N(nt,ie,null),e(U,lr),e(U,le),N(uo,le,null),e(le,cr),e(le,fo),e(fo,pr),e(fo,Ga),e(Ga,gr),e(fo,dr),e(le,hr),e(le,mo),e(mo,ur),e(mo,ka),e(ka,fr),e(mo,mr),e(le,_r),e(le,_o),e(_o,br),e(_o,Ba),e(Ba,vr),e(_o,$r),e(le,yr),e(le,Aa),e(Aa,Er),e(Aa,xa),e(xa,wr),e(le,kr),N(st,le,null),e(U,Ar),e(U,rt),N(bo,rt,null),e(rt,xr),e(rt,Ka),e(Ka,Hr),e(U,qr),e(U,$e),N(vo,$e,null),e($e,Dr),e($e,Ja),e(Ja,jr),e($e,Nr),e($e,Qa),e(Qa,Fr),e($e,Tr),N(it,$e,null),e(U,Pr),e(U,Ue),N($o,Ue,null),e(Ue,Ir),e(Ue,Xa),e(Xa,Lr),e(Ue,Rr),N(lt,Ue,null),e(U,Or),e(U,Me),N(yo,Me,null),e(Me,Cr),e(Me,Ya),e(Ya,Sr),e(Me,Ur),N(ct,Me,null),e(U,Mr),e(U,Ve),N(Eo,Ve,null),e(Ve,Vr),e(Ve,Za),e(Za,zr),e(Ve,Wr),N(pt,Ve,null),e(U,Gr),e(U,gt),N(wo,gt,null),e(gt,Br),e(gt,en),e(en,Kr),e(U,Jr),e(U,ye),N(ko,ye,null),e(ye,Qr),e(ye,tn),e(tn,Xr),e(ye,Yr),e(ye,Ha),e(Ha,Zr),e(Ha,qa),e(qa,ei),e(ye,ti),N(dt,ye,null),e(U,oi),e(U,ht),N(Ao,ht,null),e(ht,ai),e(ht,on),e(on,ni),e(U,si),e(U,ut),N(xo,ut,null),e(ut,ri),e(ut,an),e(an,ii),e(U,li),e(U,me),N(Ho,me,null),e(me,ci),e(me,nn),e(nn,pi),e(me,gi),e(me,sn),e(sn,di),e(me,hi),N(ft,me,null),e(me,ui),N(mt,me,null),e(U,fi),e(U,Ee),N(qo,Ee,null),e(Ee,mi),e(Ee,rn),e(rn,_i),e(Ee,bi),N(_t,Ee,null),e(Ee,vi),N(bt,Ee,null),e(U,$i),e(U,we),N(Do,we,null),e(we,yi),e(we,ln),e(ln,Ei),e(we,wi),N(vt,we,null),e(we,ki),N($t,we,null),e(U,Ai),e(U,yt),N(jo,yt,null),e(yt,xi),e(yt,cn),e(cn,Hi),e(U,qi),e(U,ke),N(No,ke,null),e(ke,Di),e(ke,pn),e(pn,ji),e(ke,Ni),N(Et,ke,null),e(ke,Fi),N(wt,ke,null),e(U,Ti),e(U,kt),N(Fo,kt,null),e(kt,Pi),e(kt,gn),e(gn,Ii),e(U,Li),e(U,At),N(To,At,null),e(At,Ri),e(At,dn),e(dn,Oi),e(U,Ci),e(U,ze),N(Po,ze,null),e(ze,Si),e(ze,hn),e(hn,Ui),e(ze,Mi),N(xt,ze,null),e(U,Vi),e(U,Ae),N(Io,Ae,null),e(Ae,zi),e(Ae,un),e(un,Wi),e(Ae,Gi),e(Ae,fn),e(fn,Bi),e(Ae,Ki),N(Ht,Ae,null),e(U,Ji),e(U,xe),N(Lo,xe,null),e(xe,Qi),e(xe,mn),e(mn,Xi),e(xe,Yi),e(xe,Ro),e(Ro,Zi),e(Ro,Oo),e(Oo,el),e(Ro,tl),e(xe,ol),N(qt,xe,null),e(U,al),e(U,He),N(Co,He,null),e(He,nl),e(He,_n),e(_n,sl),e(He,rl),N(Dt,He,null),e(He,il),N(jt,He,null),e(U,ll),e(U,We),N(So,We,null),e(We,cl),e(We,bn),e(bn,pl),e(We,gl),N(Nt,We,null),e(U,dl),e(U,Ft),N(Uo,Ft,null),e(Ft,hl),e(Ft,vn),e(vn,ul),e(U,fl),e(U,qe),N(Mo,qe,null),e(qe,ml),e(qe,$n),e($n,_l),e(qe,bl),e(qe,yn),e(yn,vl),e(qe,$l),N(Tt,qe,null),e(U,yl),e(U,Pt),N(Vo,Pt,null),e(Pt,El),e(Pt,En),e(En,wl),e(U,kl),e(U,Ge),N(zo,Ge,null),e(Ge,Al),e(Ge,wn),e(wn,xl),e(Ge,Hl),N(It,Ge,null),e(U,ql),e(U,De),N(Wo,De,null),e(De,Dl),e(De,kn),e(kn,jl),e(De,Nl),N(Lt,De,null),e(De,Fl),N(Rt,De,null),e(U,Tl),e(U,ce),N(Go,ce,null),e(ce,Pl),e(ce,An),e(An,Il),e(ce,Ll),e(ce,xn),e(xn,Rl),e(ce,Ol),e(ce,Bo),e(Bo,Cl),e(Bo,Hn),e(Hn,Sl),e(Bo,Ul),e(ce,Ml),N(Ot,ce,null),e(ce,Vl),N(Ct,ce,null),e(U,zl),e(U,St),N(Ko,St,null),e(St,Wl),e(St,qn),e(qn,Gl),k(r,is,H),k(r,Xe,H),e(Xe,Ut),e(Ut,Dn),N(Jo,Dn,null),e(Xe,Bl),e(Xe,jn),e(jn,Kl),k(r,ls,H),k(r,Qo,H),e(Qo,Nn),e(Nn,Jl),e(Qo,Ql),k(r,cs,H),k(r,Mt,H),e(Mt,Xl),e(Mt,Da),e(Da,Yl),e(Mt,Zl),k(r,ps,H),k(r,be,H),N(Xo,be,null),e(be,ec),e(be,Vt),N(Yo,Vt,null),e(Vt,tc),e(Vt,Fn),e(Fn,oc),e(be,ac),e(be,Be),N(Zo,Be,null),e(Be,nc),e(Be,Tn),e(Tn,sc),e(Be,rc),e(Be,ea),e(ea,ic),e(ea,Pn),e(Pn,lc),e(ea,cc),e(be,pc),e(be,zt),N(ta,zt,null),e(zt,gc),e(zt,In),e(In,dc),k(r,gs,H),k(r,Ye,H),e(Ye,Wt),e(Wt,Ln),N(oa,Ln,null),e(Ye,hc),e(Ye,Rn),e(Rn,uc),k(r,ds,H),k(r,Gt,H),e(Gt,fc),e(Gt,On),e(On,mc),e(Gt,_c),k(r,hs,H),k(r,Te,H),N(aa,Te,null),e(Te,bc),e(Te,Cn),e(Cn,vc),e(Te,$c),N(Bt,Te,null),k(r,us,H),k(r,Pe,H),N(na,Pe,null),e(Pe,yc),e(Pe,Sn),e(Sn,Ec),e(Pe,wc),N(Kt,Pe,null),k(r,fs,H),k(r,Ie,H),N(sa,Ie,null),e(Ie,kc),e(Ie,Un),e(Un,Ac),e(Ie,xc),N(Jt,Ie,null),k(r,ms,H),k(r,Le,H),N(ra,Le,null),e(Le,Hc),e(Le,Mn),e(Mn,qc),e(Le,Dc),N(Qt,Le,null),_s=!0},p(r,[H]){const ia={};H&2&&(ia.$$scope={dirty:H,ctx:r}),Ze.$set(ia);const Vn={};H&2&&(Vn.$$scope={dirty:H,ctx:r}),et.$set(Vn);const zn={};H&2&&(zn.$$scope={dirty:H,ctx:r}),tt.$set(zn);const Wn={};H&2&&(Wn.$$scope={dirty:H,ctx:r}),ot.$set(Wn);const la={};H&2&&(la.$$scope={dirty:H,ctx:r}),nt.$set(la);const Gn={};H&2&&(Gn.$$scope={dirty:H,ctx:r}),st.$set(Gn);const ca={};H&2&&(ca.$$scope={dirty:H,ctx:r}),it.$set(ca);const Bn={};H&2&&(Bn.$$scope={dirty:H,ctx:r}),lt.$set(Bn);const Kn={};H&2&&(Kn.$$scope={dirty:H,ctx:r}),ct.$set(Kn);const pa={};H&2&&(pa.$$scope={dirty:H,ctx:r}),pt.$set(pa);const Jn={};H&2&&(Jn.$$scope={dirty:H,ctx:r}),dt.$set(Jn);const ga={};H&2&&(ga.$$scope={dirty:H,ctx:r}),ft.$set(ga);const Qn={};H&2&&(Qn.$$scope={dirty:H,ctx:r}),mt.$set(Qn);const W={};H&2&&(W.$$scope={dirty:H,ctx:r}),_t.$set(W);const Re={};H&2&&(Re.$$scope={dirty:H,ctx:r}),bt.$set(Re);const Xn={};H&2&&(Xn.$$scope={dirty:H,ctx:r}),vt.$set(Xn);const Oe={};H&2&&(Oe.$$scope={dirty:H,ctx:r}),$t.$set(Oe);const Yn={};H&2&&(Yn.$$scope={dirty:H,ctx:r}),Et.$set(Yn);const da={};H&2&&(da.$$scope={dirty:H,ctx:r}),wt.$set(da);const Zn={};H&2&&(Zn.$$scope={dirty:H,ctx:r}),xt.$set(Zn);const ge={};H&2&&(ge.$$scope={dirty:H,ctx:r}),Ht.$set(ge);const es={};H&2&&(es.$$scope={dirty:H,ctx:r}),qt.$set(es);const ha={};H&2&&(ha.$$scope={dirty:H,ctx:r}),Dt.$set(ha);const ts={};H&2&&(ts.$$scope={dirty:H,ctx:r}),jt.$set(ts);const ua={};H&2&&(ua.$$scope={dirty:H,ctx:r}),Nt.$set(ua);const os={};H&2&&(os.$$scope={dirty:H,ctx:r}),Tt.$set(os);const ja={};H&2&&(ja.$$scope={dirty:H,ctx:r}),It.$set(ja);const as={};H&2&&(as.$$scope={dirty:H,ctx:r}),Lt.$set(as);const de={};H&2&&(de.$$scope={dirty:H,ctx:r}),Rt.$set(de);const fa={};H&2&&(fa.$$scope={dirty:H,ctx:r}),Ot.$set(fa);const ns={};H&2&&(ns.$$scope={dirty:H,ctx:r}),Ct.$set(ns);const ma={};H&2&&(ma.$$scope={dirty:H,ctx:r}),Bt.$set(ma);const ss={};H&2&&(ss.$$scope={dirty:H,ctx:r}),Kt.$set(ss);const _a={};H&2&&(_a.$$scope={dirty:H,ctx:r}),Jt.$set(_a);const rs={};H&2&&(rs.$$scope={dirty:H,ctx:r}),Qt.$set(rs)},i(r){_s||(F(o.$$.fragment,r),F(C.$$.fragment,r),F(Q.$$.fragment,r),F(_e.$$.fragment,r),F(Fe.$$.fragment,r),F(Ze.$$.fragment,r),F(et.$$.fragment,r),F(lo.$$.fragment,r),F(tt.$$.fragment,r),F(ot.$$.fragment,r),F(co.$$.fragment,r),F(po.$$.fragment,r),F(nt.$$.fragment,r),F(uo.$$.fragment,r),F(st.$$.fragment,r),F(bo.$$.fragment,r),F(vo.$$.fragment,r),F(it.$$.fragment,r),F($o.$$.fragment,r),F(lt.$$.fragment,r),F(yo.$$.fragment,r),F(ct.$$.fragment,r),F(Eo.$$.fragment,r),F(pt.$$.fragment,r),F(wo.$$.fragment,r),F(ko.$$.fragment,r),F(dt.$$.fragment,r),F(Ao.$$.fragment,r),F(xo.$$.fragment,r),F(Ho.$$.fragment,r),F(ft.$$.fragment,r),F(mt.$$.fragment,r),F(qo.$$.fragment,r),F(_t.$$.fragment,r),F(bt.$$.fragment,r),F(Do.$$.fragment,r),F(vt.$$.fragment,r),F($t.$$.fragment,r),F(jo.$$.fragment,r),F(No.$$.fragment,r),F(Et.$$.fragment,r),F(wt.$$.fragment,r),F(Fo.$$.fragment,r),F(To.$$.fragment,r),F(Po.$$.fragment,r),F(xt.$$.fragment,r),F(Io.$$.fragment,r),F(Ht.$$.fragment,r),F(Lo.$$.fragment,r),F(qt.$$.fragment,r),F(Co.$$.fragment,r),F(Dt.$$.fragment,r),F(jt.$$.fragment,r),F(So.$$.fragment,r),F(Nt.$$.fragment,r),F(Uo.$$.fragment,r),F(Mo.$$.fragment,r),F(Tt.$$.fragment,r),F(Vo.$$.fragment,r),F(zo.$$.fragment,r),F(It.$$.fragment,r),F(Wo.$$.fragment,r),F(Lt.$$.fragment,r),F(Rt.$$.fragment,r),F(Go.$$.fragment,r),F(Ot.$$.fragment,r),F(Ct.$$.fragment,r),F(Ko.$$.fragment,r),F(Jo.$$.fragment,r),F(Xo.$$.fragment,r),F(Yo.$$.fragment,r),F(Zo.$$.fragment,r),F(ta.$$.fragment,r),F(oa.$$.fragment,r),F(aa.$$.fragment,r),F(Bt.$$.fragment,r),F(na.$$.fragment,r),F(Kt.$$.fragment,r),F(sa.$$.fragment,r),F(Jt.$$.fragment,r),F(ra.$$.fragment,r),F(Qt.$$.fragment,r),_s=!0)},o(r){T(o.$$.fragment,r),T(C.$$.fragment,r),T(Q.$$.fragment,r),T(_e.$$.fragment,r),T(Fe.$$.fragment,r),T(Ze.$$.fragment,r),T(et.$$.fragment,r),T(lo.$$.fragment,r),T(tt.$$.fragment,r),T(ot.$$.fragment,r),T(co.$$.fragment,r),T(po.$$.fragment,r),T(nt.$$.fragment,r),T(uo.$$.fragment,r),T(st.$$.fragment,r),T(bo.$$.fragment,r),T(vo.$$.fragment,r),T(it.$$.fragment,r),T($o.$$.fragment,r),T(lt.$$.fragment,r),T(yo.$$.fragment,r),T(ct.$$.fragment,r),T(Eo.$$.fragment,r),T(pt.$$.fragment,r),T(wo.$$.fragment,r),T(ko.$$.fragment,r),T(dt.$$.fragment,r),T(Ao.$$.fragment,r),T(xo.$$.fragment,r),T(Ho.$$.fragment,r),T(ft.$$.fragment,r),T(mt.$$.fragment,r),T(qo.$$.fragment,r),T(_t.$$.fragment,r),T(bt.$$.fragment,r),T(Do.$$.fragment,r),T(vt.$$.fragment,r),T($t.$$.fragment,r),T(jo.$$.fragment,r),T(No.$$.fragment,r),T(Et.$$.fragment,r),T(wt.$$.fragment,r),T(Fo.$$.fragment,r),T(To.$$.fragment,r),T(Po.$$.fragment,r),T(xt.$$.fragment,r),T(Io.$$.fragment,r),T(Ht.$$.fragment,r),T(Lo.$$.fragment,r),T(qt.$$.fragment,r),T(Co.$$.fragment,r),T(Dt.$$.fragment,r),T(jt.$$.fragment,r),T(So.$$.fragment,r),T(Nt.$$.fragment,r),T(Uo.$$.fragment,r),T(Mo.$$.fragment,r),T(Tt.$$.fragment,r),T(Vo.$$.fragment,r),T(zo.$$.fragment,r),T(It.$$.fragment,r),T(Wo.$$.fragment,r),T(Lt.$$.fragment,r),T(Rt.$$.fragment,r),T(Go.$$.fragment,r),T(Ot.$$.fragment,r),T(Ct.$$.fragment,r),T(Ko.$$.fragment,r),T(Jo.$$.fragment,r),T(Xo.$$.fragment,r),T(Yo.$$.fragment,r),T(Zo.$$.fragment,r),T(ta.$$.fragment,r),T(oa.$$.fragment,r),T(aa.$$.fragment,r),T(Bt.$$.fragment,r),T(na.$$.fragment,r),T(Kt.$$.fragment,r),T(sa.$$.fragment,r),T(Jt.$$.fragment,r),T(ra.$$.fragment,r),T(Qt.$$.fragment,r),_s=!1},d(r){t(p),r&&t(v),r&&t(f),P(o),r&&t(A),r&&t(E),r&&t(R),r&&t(m),r&&t(K),r&&t(G),r&&t(S),P(C,r),r&&t(X),r&&t(ee),r&&t(B),P(Q,r),r&&t(te),r&&t(ne),r&&t(Ne),r&&t(U),P(_e),P(Fe),P(Ze),P(et),P(lo),P(tt),P(ot),P(co),P(po),P(nt),P(uo),P(st),P(bo),P(vo),P(it),P($o),P(lt),P(yo),P(ct),P(Eo),P(pt),P(wo),P(ko),P(dt),P(Ao),P(xo),P(Ho),P(ft),P(mt),P(qo),P(_t),P(bt),P(Do),P(vt),P($t),P(jo),P(No),P(Et),P(wt),P(Fo),P(To),P(Po),P(xt),P(Io),P(Ht),P(Lo),P(qt),P(Co),P(Dt),P(jt),P(So),P(Nt),P(Uo),P(Mo),P(Tt),P(Vo),P(zo),P(It),P(Wo),P(Lt),P(Rt),P(Go),P(Ot),P(Ct),P(Ko),r&&t(is),r&&t(Xe),P(Jo),r&&t(ls),r&&t(Qo),r&&t(cs),r&&t(Mt),r&&t(ps),r&&t(be),P(Xo),P(Yo),P(Zo),P(ta),r&&t(gs),r&&t(Ye),P(oa),r&&t(ds),r&&t(Gt),r&&t(hs),r&&t(Te),P(aa),P(Bt),r&&t(us),r&&t(Pe),P(na),P(Kt),r&&t(fs),r&&t(Ie),P(sa),P(Jt),r&&t(ms),r&&t(Le),P(ra),P(Qt)}}}const yg={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Eg(z){return Op(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dg extends Pp{constructor(p){super();Ip(this,p,Eg,$g,Lp,{})}}export{Dg as default,yg as metadata};
