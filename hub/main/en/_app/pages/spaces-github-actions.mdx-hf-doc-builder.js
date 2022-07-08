import{S as Ys,i as Js,s as Qs,e as r,k as c,w as I,t as n,N as Vs,c as o,d as a,m as h,a as p,x as B,h as l,b as m,G as t,g as i,y as q,L as Ws,q as K,o as z,B as D,v as Xs}from"../chunks/vendor-hf-doc-builder.js";import{I as Zs}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as os}from"../chunks/CodeBlock-hf-doc-builder.js";function sa(Cs){let y,Y,g,_,P,d,ps,M,is,J,f,cs,R,hs,us,E,fs,ms,Q,F,ys,V,v,W,H,gs,X,$,Z,G,js,ss,w,j,_s,T,ws,bs,O,ds,Es,vs,u,$s,A,As,ks,U,Ss,Fs,x,Hs,Gs,as,k,ts,N,Ns,es,S,ns;return d=new Zs({}),v=new os({props:{code:"git remote add space https://huggingface.co/spaces/FULL_SPACE_NAME",highlighted:"git remote add space https://huggingface.co/spaces/FULL_SPACE_NAME"}}),$=new os({props:{code:"git push --force space main",highlighted:"git push --force space main"}}),k=new os({props:{code:`name: Sync to Hugging Face hub
on:
  push:
    branches: [main]

  # to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  sync-to-hub:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: Push to hub
        env:
          HF_TOKEN: \${{ secrets.HF_TOKEN }}
        run: git push https://HF_USERNAME:$HF_TOKEN@huggingface.co/spaces/FULL_SPACE_NAME main`,highlighted:`<span class="hljs-attr">name:</span> <span class="hljs-string">Sync</span> <span class="hljs-string">to</span> <span class="hljs-string">Hugging</span> <span class="hljs-string">Face</span> <span class="hljs-string">hub</span>
<span class="hljs-attr">on:</span>
  <span class="hljs-attr">push:</span>
    <span class="hljs-attr">branches:</span> [<span class="hljs-string">main</span>]

  <span class="hljs-comment"># to run this workflow manually from the Actions tab</span>
  <span class="hljs-attr">workflow_dispatch:</span>

<span class="hljs-attr">jobs:</span>
  <span class="hljs-attr">sync-to-hub:</span>
    <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>
    <span class="hljs-attr">steps:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">fetch-depth:</span> <span class="hljs-number">0</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Push</span> <span class="hljs-string">to</span> <span class="hljs-string">hub</span>
        <span class="hljs-attr">env:</span>
          <span class="hljs-attr">HF_TOKEN:</span> <span class="hljs-string">\${{</span> <span class="hljs-string">secrets.HF_TOKEN</span> <span class="hljs-string">}}</span>
        <span class="hljs-attr">run:</span> <span class="hljs-string">git</span> <span class="hljs-string">push</span> <span class="hljs-string">https://HF_USERNAME:$HF_TOKEN@huggingface.co/spaces/FULL_SPACE_NAME</span> <span class="hljs-string">main</span>`}}),S=new os({props:{code:`name: Check file size
on:               # or directly \`on: [push]\` to run the action on every push on any branch
  pull_request:
    branches: [main]

  # to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  sync-to-hub:
    runs-on: ubuntu-latest
    steps:
      - name: Check large files
        uses: ActionsDesk/lfs-warning@v2.0
        with:
          filesizelimit: 10485760 # this is 10MB so we can sync to HF Spaces`,highlighted:`<span class="hljs-attr">name:</span> <span class="hljs-string">Check</span> <span class="hljs-string">file</span> <span class="hljs-string">size</span>
<span class="hljs-attr">on:</span>               <span class="hljs-comment"># or directly \`on: [push]\` to run the action on every push on any branch</span>
  <span class="hljs-attr">pull_request:</span>
    <span class="hljs-attr">branches:</span> [<span class="hljs-string">main</span>]

  <span class="hljs-comment"># to run this workflow manually from the Actions tab</span>
  <span class="hljs-attr">workflow_dispatch:</span>

<span class="hljs-attr">jobs:</span>
  <span class="hljs-attr">sync-to-hub:</span>
    <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>
    <span class="hljs-attr">steps:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Check</span> <span class="hljs-string">large</span> <span class="hljs-string">files</span>
        <span class="hljs-attr">uses:</span> <span class="hljs-string">ActionsDesk/lfs-warning@v2.0</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">filesizelimit:</span> <span class="hljs-number">10485760</span> <span class="hljs-comment"># this is 10MB so we can sync to HF Spaces</span>`}}),{c(){y=r("meta"),Y=c(),g=r("h1"),_=r("a"),P=r("span"),I(d.$$.fragment),ps=c(),M=r("span"),is=n("Managing Spaces with Github Actions"),J=c(),f=r("p"),cs=n("You can keep your app in sync with your GitHub repository with "),R=r("strong"),hs=n("Github Actions"),us=n(". Remember that for files larger than 10MB, Spaces requires Git-LFS. If you don\u2019t want to use Git-LFS, you may need to review your files and check your history. Use a tool like "),E=r("a"),fs=n("BFG Repo-Cleaner"),ms=n(" to remove any large files from your history. BFG Repo-Cleaner will keep a local copy of your repository as a backup."),Q=c(),F=r("p"),ys=n("First, you should set up your GitHub repository and Spaces app together. Add your Spaces app as an additional remote to your existing Git repository."),V=c(),I(v.$$.fragment),W=c(),H=r("p"),gs=n("Then force push to sync everything for the first time:"),X=c(),I($.$$.fragment),Z=c(),G=r("p"),js=n("Next, set up a GitHub Action to push your main branch to Spaces. In the example below:"),ss=c(),w=r("ul"),j=r("li"),_s=n("Replace "),T=r("code"),ws=n("HF_USERNAME"),bs=n(" with your username and "),O=r("code"),ds=n("FULL_SPACE_NAME"),Es=n(" with your Space name."),vs=c(),u=r("li"),$s=n("Create a "),A=r("a"),As=n("Github secret"),ks=n(" with your "),U=r("code"),Ss=n("HF_TOKEN"),Fs=n(". You can find your Hugging Face API token under "),x=r("strong"),Hs=n("API Tokens"),Gs=n(" on your Hugging Face profile."),as=c(),I(k.$$.fragment),ts=c(),N=r("p"),Ns=n("Finally, create an Action that automatically checks the file size of any new pull request:"),es=c(),I(S.$$.fragment),this.h()},l(s){const e=Vs('[data-svelte="svelte-1phssyn"]',document.head);y=o(e,"META",{name:!0,content:!0}),e.forEach(a),Y=h(s),g=o(s,"H1",{class:!0});var ls=p(g);_=o(ls,"A",{id:!0,class:!0,href:!0});var Ls=p(_);P=o(Ls,"SPAN",{});var Ps=p(P);B(d.$$.fragment,Ps),Ps.forEach(a),Ls.forEach(a),ps=h(ls),M=o(ls,"SPAN",{});var Ms=p(M);is=l(Ms,"Managing Spaces with Github Actions"),Ms.forEach(a),ls.forEach(a),J=h(s),f=o(s,"P",{});var C=p(f);cs=l(C,"You can keep your app in sync with your GitHub repository with "),R=o(C,"STRONG",{});var Rs=p(R);hs=l(Rs,"Github Actions"),Rs.forEach(a),us=l(C,". Remember that for files larger than 10MB, Spaces requires Git-LFS. If you don\u2019t want to use Git-LFS, you may need to review your files and check your history. Use a tool like "),E=o(C,"A",{href:!0,rel:!0});var Ts=p(E);fs=l(Ts,"BFG Repo-Cleaner"),Ts.forEach(a),ms=l(C," to remove any large files from your history. BFG Repo-Cleaner will keep a local copy of your repository as a backup."),C.forEach(a),Q=h(s),F=o(s,"P",{});var Os=p(F);ys=l(Os,"First, you should set up your GitHub repository and Spaces app together. Add your Spaces app as an additional remote to your existing Git repository."),Os.forEach(a),V=h(s),B(v.$$.fragment,s),W=h(s),H=o(s,"P",{});var Us=p(H);gs=l(Us,"Then force push to sync everything for the first time:"),Us.forEach(a),X=h(s),B($.$$.fragment,s),Z=h(s),G=o(s,"P",{});var xs=p(G);js=l(xs,"Next, set up a GitHub Action to push your main branch to Spaces. In the example below:"),xs.forEach(a),ss=h(s),w=o(s,"UL",{});var rs=p(w);j=o(rs,"LI",{});var L=p(j);_s=l(L,"Replace "),T=o(L,"CODE",{});var Is=p(T);ws=l(Is,"HF_USERNAME"),Is.forEach(a),bs=l(L," with your username and "),O=o(L,"CODE",{});var Bs=p(O);ds=l(Bs,"FULL_SPACE_NAME"),Bs.forEach(a),Es=l(L," with your Space name."),L.forEach(a),vs=h(rs),u=o(rs,"LI",{});var b=p(u);$s=l(b,"Create a "),A=o(b,"A",{href:!0,rel:!0});var qs=p(A);As=l(qs,"Github secret"),qs.forEach(a),ks=l(b," with your "),U=o(b,"CODE",{});var Ks=p(U);Ss=l(Ks,"HF_TOKEN"),Ks.forEach(a),Fs=l(b,". You can find your Hugging Face API token under "),x=o(b,"STRONG",{});var zs=p(x);Hs=l(zs,"API Tokens"),zs.forEach(a),Gs=l(b," on your Hugging Face profile."),b.forEach(a),rs.forEach(a),as=h(s),B(k.$$.fragment,s),ts=h(s),N=o(s,"P",{});var Ds=p(N);Ns=l(Ds,"Finally, create an Action that automatically checks the file size of any new pull request:"),Ds.forEach(a),es=h(s),B(S.$$.fragment,s),this.h()},h(){m(y,"name","hf:doc:metadata"),m(y,"content",JSON.stringify(aa)),m(_,"id","managing-spaces-with-github-actions"),m(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_,"href","#managing-spaces-with-github-actions"),m(g,"class","relative group"),m(E,"href","https://rtyley.github.io/bfg-repo-cleaner/"),m(E,"rel","nofollow"),m(A,"href","https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-environment"),m(A,"rel","nofollow")},m(s,e){t(document.head,y),i(s,Y,e),i(s,g,e),t(g,_),t(_,P),q(d,P,null),t(g,ps),t(g,M),t(M,is),i(s,J,e),i(s,f,e),t(f,cs),t(f,R),t(R,hs),t(f,us),t(f,E),t(E,fs),t(f,ms),i(s,Q,e),i(s,F,e),t(F,ys),i(s,V,e),q(v,s,e),i(s,W,e),i(s,H,e),t(H,gs),i(s,X,e),q($,s,e),i(s,Z,e),i(s,G,e),t(G,js),i(s,ss,e),i(s,w,e),t(w,j),t(j,_s),t(j,T),t(T,ws),t(j,bs),t(j,O),t(O,ds),t(j,Es),t(w,vs),t(w,u),t(u,$s),t(u,A),t(A,As),t(u,ks),t(u,U),t(U,Ss),t(u,Fs),t(u,x),t(x,Hs),t(u,Gs),i(s,as,e),q(k,s,e),i(s,ts,e),i(s,N,e),t(N,Ns),i(s,es,e),q(S,s,e),ns=!0},p:Ws,i(s){ns||(K(d.$$.fragment,s),K(v.$$.fragment,s),K($.$$.fragment,s),K(k.$$.fragment,s),K(S.$$.fragment,s),ns=!0)},o(s){z(d.$$.fragment,s),z(v.$$.fragment,s),z($.$$.fragment,s),z(k.$$.fragment,s),z(S.$$.fragment,s),ns=!1},d(s){a(y),s&&a(Y),s&&a(g),D(d),s&&a(J),s&&a(f),s&&a(Q),s&&a(F),s&&a(V),D(v,s),s&&a(W),s&&a(H),s&&a(X),D($,s),s&&a(Z),s&&a(G),s&&a(ss),s&&a(w),s&&a(as),D(k,s),s&&a(ts),s&&a(N),s&&a(es),D(S,s)}}}const aa={local:"managing-spaces-with-github-actions",title:"Managing Spaces with Github Actions"};function ta(Cs){return Xs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ra extends Ys{constructor(y){super();Js(this,y,ta,sa,Qs,{})}}export{ra as default,aa as metadata};
