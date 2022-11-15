import{S as ru,i as cu,s as hu,e as l,k as h,w as p,t as s,M as du,c as n,d as t,m as d,a as i,x as u,h as o,b as f,T as fu,G as a,g as c,y as m,q as b,o as g,B as v,v as pu}from"../chunks/vendor-hf-doc-builder.js";import{T as wd}from"../chunks/Tip-hf-doc-builder.js";import{I}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as D}from"../chunks/CodeBlock-hf-doc-builder.js";function uu(_e){let w,$,y,E;return{c(){w=l("p"),$=l("a"),y=s("cached_assets_path()"),E=s(` is the recommended way to store assets but is not mandatory. If
your library already uses its own cache, feel free to use it!`),this.h()},l(k){w=n(k,"P",{});var _=i(w);$=n(_,"A",{href:!0});var C=i($);y=o(C,"cached_assets_path()"),C.forEach(t),E=o(_,` is the recommended way to store assets but is not mandatory. If
your library already uses its own cache, feel free to use it!`),_.forEach(t),this.h()},h(){f($,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.cached_assets_path")},m(k,_){c(k,w,_),a(w,$),a($,y),a(w,E)},d(k){k&&t(w)}}}function mu(_e){let w,$,y,E,k,_,C,S;return{c(){w=l("p"),$=s(`Revision hashes are unique across all repositories. This means you don\u2019t need to
provide any `),y=l("code"),E=s("repo_id"),k=s(" or "),_=l("code"),C=s("repo_type"),S=s(" when removing revisions.")},l(ae){w=n(ae,"P",{});var P=i(w);$=o(P,`Revision hashes are unique across all repositories. This means you don\u2019t need to
provide any `),y=n(P,"CODE",{});var Qa=i(y);E=o(Qa,"repo_id"),Qa.forEach(t),k=o(P," or "),_=n(P,"CODE",{});var Za=i(_);C=o(Za,"repo_type"),Za.forEach(t),S=o(P," when removing revisions."),P.forEach(t)},m(ae,P){c(ae,w,P),a(w,$),a(w,y),a(y,E),a(w,k),a(w,_),a(_,C),a(w,S)},d(ae){ae&&t(w)}}}function bu(_e){let w,$,y,E,k;return{c(){w=l("p"),$=s(`If a revision is not found in the cache, it will be silently ignored. Besides, if a file
or folder cannot be found while trying to delete it, a warning will be logged but no
error is thrown. The deletion continues for other paths contained in the
`),y=l("a"),E=s("DeleteCacheStrategy"),k=s(" object."),this.h()},l(_){w=n(_,"P",{});var C=i(w);$=o(C,`If a revision is not found in the cache, it will be silently ignored. Besides, if a file
or folder cannot be found while trying to delete it, a warning will be logged but no
error is thrown. The deletion continues for other paths contained in the
`),y=n(C,"A",{href:!0});var S=i(y);E=o(S,"DeleteCacheStrategy"),S.forEach(t),k=o(C," object."),C.forEach(t),this.h()},h(){f(y,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.DeleteCacheStrategy")},m(_,C){c(_,w,C),a(w,$),a(w,y),a(y,E),a(w,k)},d(_){_&&t(w)}}}function gu(_e){let w,$,y,E,k,_,C,S,ae,P,Qa,Za,To,te,Ee,Lt,ia,Wn,Mt,zn,jo,Xa,Yn,Oo,et,Jn,xo,ra,Ho,T,Vn,Ft,Qn,Zn,Gt,Xn,ei,Ut,ai,ti,qt,si,oi,No,at,li,Ro,ca,Lo,tt,ni,Mo,st,ii,Fo,ha,Go,ot,ri,Uo,se,$e,Bt,da,ci,Kt,hi,qo,j,di,Wt,fi,pi,zt,ui,mi,Yt,bi,gi,Jt,vi,wi,Bo,N,yi,Vt,_i,Ei,Qt,$i,ki,Zt,Ii,Ci,Ko,R,Di,Xt,Ai,Si,es,Pi,Ti,as,ji,Oi,Wo,oe,ke,ts,fa,xi,ss,Hi,zo,Ie,Ni,os,Ri,Li,Yo,le,Ce,ls,pa,Mi,ns,Fi,Jo,De,Gi,is,Ui,qi,Vo,A,Bi,rs,Ki,Wi,cs,zi,Yi,hs,Ji,Vi,ds,Qi,Zi,fs,Xi,er,Qo,K,ar,ps,tr,sr,us,or,lr,Zo,ua,Xo,Ae,nr,ms,ir,rr,el,Se,cr,bs,hr,dr,al,ne,Pe,gs,ma,fr,vs,pr,tl,lt,ur,sl,ba,ol,ie,Te,ws,ga,mr,ys,br,ll,O,gr,_s,vr,wr,Es,yr,_r,$s,Er,$r,ks,kr,Ir,nl,je,Cr,va,Dr,Ar,il,Oe,Sr,Is,Pr,Tr,rl,re,xe,Cs,wa,jr,Ds,Or,cl,x,xr,As,Hr,Nr,Ss,Rr,Lr,nt,Mr,Fr,Ps,Gr,Ur,hl,ya,dl,He,fl,ce,Ne,Ts,_a,qr,js,Br,pl,it,Kr,ul,Ea,ml,he,Re,Os,$a,Wr,xs,zr,bl,W,Yr,Hs,Jr,Vr,Ns,Qr,Zr,gl,de,Le,Rs,ka,Xr,Ls,ec,vl,z,ac,Ms,tc,sc,Fs,oc,lc,wl,rt,nc,yl,Ia,_l,Y,ic,Gs,rc,cc,Us,hc,dc,El,Ca,$l,fe,Me,qs,Da,fc,Bs,pc,kl,Fe,uc,Ks,mc,bc,Il,Aa,Cl,pe,Ge,Ws,Sa,gc,zs,vc,Dl,Ue,wc,ct,yc,_c,Al,ht,Ec,Sl,L,Pa,dt,$c,kc,ft,Ic,Cc,pt,ut,Dc,Ac,Sc,mt,bt,Pc,Tc,jc,gt,vt,Oc,xc,Pl,wt,Hc,Tl,Ta,jl,ue,qe,Ys,ja,Nc,Js,Rc,Ol,M,Lc,Vs,Mc,Fc,yt,Gc,Uc,_t,qc,Bc,xl,me,Be,Qs,Oa,Kc,Zs,Wc,Hl,J,zc,Et,Yc,Jc,$t,Vc,Qc,Nl,kt,Zc,Rl,F,xa,Xc,Xs,eh,ah,th,eo,sh,oh,Ha,lh,ao,nh,ih,rh,to,ch,Ll,Ke,Ml,We,Fl,be,ze,so,Na,hh,oo,dh,Gl,G,fh,lo,ph,uh,no,mh,bh,io,gh,vh,Ul,ge,Ye,ro,Ra,wh,co,yh,ql,It,_h,Bl,La,Kl,Ct,Eh,Wl,Ma,zl,Dt,$h,Yl,Fa,ho,yd,Jl,At,kh,Vl,H,ve,Ih,fo,Ch,Dh,po,Ah,Sh,Ph,Ga,Th,uo,jh,Oh,xh,mo,Hh,Nh,Ua,Rh,bo,Lh,Mh,Fh,qa,Gh,go,Uh,qh,Ql,U,Bh,vo,Kh,Wh,wo,zh,Yh,yo,Jh,Vh,Zl,Ba,Xl,we,Je,_o,Ka,Qh,Eo,Zh,en,St,Xh,an,Ve,ed,$o,ad,td,tn,q,sd,ko,od,ld,Io,nd,id,Co,rd,cd,sn,Wa,on,Pt,hd,ln,za,nn,ye,Qe,Do,Ya,dd,Ao,fd,rn,Ze,pd,Tt,ud,md,cn,Ja,hn;return _=new I({}),ia=new I({}),ra=new D({props:{code:`<CACHE_DIR>
\u251C\u2500 <MODELS>
\u251C\u2500 <DATASETS>
\u251C\u2500 <SPACES>`,highlighted:`<span class="hljs-tag">&lt;<span class="hljs-name">CACHE_DIR</span>&gt;</span>
\u251C\u2500 <span class="hljs-tag">&lt;<span class="hljs-name">MODELS</span>&gt;</span>
\u251C\u2500 <span class="hljs-tag">&lt;<span class="hljs-name">DATASETS</span>&gt;</span>
\u251C\u2500 <span class="hljs-tag">&lt;<span class="hljs-name">SPACES</span>&gt;</span>`}}),ca=new D({props:{code:`<CACHE_DIR>
\u251C\u2500 models--julien-c--EsperBERTo-small
\u251C\u2500 models--lysandrejik--arxiv-nlp
\u251C\u2500 models--bert-base-cased
\u251C\u2500 datasets--glue
\u251C\u2500 datasets--huggingface--DataMeasurementsFiles
\u251C\u2500 spaces--dalle-mini--dalle-mini`,highlighted:`&lt;<span class="hljs-comment">CACHE_DIR</span>&gt;
<span class="hljs-comment">\u251C\u2500</span> <span class="hljs-comment">models</span>--<span class="hljs-comment">julien</span><span class="hljs-literal">-</span><span class="hljs-comment">c</span>--<span class="hljs-comment">EsperBERTo</span><span class="hljs-literal">-</span><span class="hljs-comment">small</span>
<span class="hljs-comment">\u251C\u2500</span> <span class="hljs-comment">models</span>--<span class="hljs-comment">lysandrejik</span>--<span class="hljs-comment">arxiv</span><span class="hljs-literal">-</span><span class="hljs-comment">nlp</span>
<span class="hljs-comment">\u251C\u2500</span> <span class="hljs-comment">models</span>--<span class="hljs-comment">bert</span><span class="hljs-literal">-</span><span class="hljs-comment">base</span><span class="hljs-literal">-</span><span class="hljs-comment">cased</span>
<span class="hljs-comment">\u251C\u2500</span> <span class="hljs-comment">datasets</span>--<span class="hljs-comment">glue</span>
<span class="hljs-comment">\u251C\u2500</span> <span class="hljs-comment">datasets</span>--<span class="hljs-comment">huggingface</span>--<span class="hljs-comment">DataMeasurementsFiles</span>
<span class="hljs-comment">\u251C\u2500</span> <span class="hljs-comment">spaces</span>--<span class="hljs-comment">dalle</span><span class="hljs-literal">-</span><span class="hljs-comment">mini</span>--<span class="hljs-comment">dalle</span><span class="hljs-literal">-</span><span class="hljs-comment">mini</span>`}}),ha=new D({props:{code:`<CACHE_DIR>
\u251C\u2500 datasets--glue
\u2502  \u251C\u2500 refs
\u2502  \u251C\u2500 blobs
\u2502  \u251C\u2500 snapshots
...`,highlighted:`&lt;CACHE_DIR&gt;
\u251C\u2500 datasets<span class="hljs-params">--glue</span>
\u2502  \u251C\u2500 refs
\u2502  \u251C\u2500 blobs
\u2502  \u251C\u2500 snapshots
<span class="hljs-string">...</span>`}}),da=new I({}),fa=new I({}),pa=new I({}),ua=new D({props:{code:"<CACHE_DIR>/<REPO_NAME>/snapshots/aaaaaa/README.md",highlighted:'&lt;CACHE_DIR&gt;<span class="hljs-regexp">/&lt;REPO_NAME&gt;/</span>snapshots<span class="hljs-regexp">/aaaaaa/</span>README.md'}}),ma=new I({}),ba=new D({props:{code:`    [  96]  .
    \u2514\u2500\u2500 [ 160]  models--julien-c--EsperBERTo-small
        \u251C\u2500\u2500 [ 160]  blobs
        \u2502   \u251C\u2500\u2500 [321M]  403450e234d65943a7dcf7e05a771ce3c92faa84dd07db4ac20f592037a1e4bd
        \u2502   \u251C\u2500\u2500 [ 398]  7cb18dc9bafbfcf74629a4b760af1b160957a83e
        \u2502   \u2514\u2500\u2500 [1.4K]  d7edf6bd2a681fb0175f7735299831ee1b22b812
        \u251C\u2500\u2500 [  96]  refs
        \u2502   \u2514\u2500\u2500 [  40]  main
        \u2514\u2500\u2500 [ 128]  snapshots
            \u251C\u2500\u2500 [ 128]  2439f60ef33a0d46d85da5001d52aeda5b00ce9f
            \u2502   \u251C\u2500\u2500 [  52]  README.md -> ../../blobs/d7edf6bd2a681fb0175f7735299831ee1b22b812
            \u2502   \u2514\u2500\u2500 [  76]  pytorch_model.bin -> ../../blobs/403450e234d65943a7dcf7e05a771ce3c92faa84dd07db4ac20f592037a1e4bd
            \u2514\u2500\u2500 [ 128]  bbc77c8132af1cc5cf678da3f1ddf2de43606d48
                \u251C\u2500\u2500 [  52]  README.md -> ../../blobs/7cb18dc9bafbfcf74629a4b760af1b160957a83e
                \u2514\u2500\u2500 [  76]  pytorch_model.bin -> ../../blobs/403450e234d65943a7dcf7e05a771ce3c92faa84dd07db4ac20f592037a1e4bd`,highlighted:`    [  96]  .
    \u2514\u2500\u2500 [ 160]  models--julien-c--EsperBERTo-small
        \u251C\u2500\u2500 [ 160]  blobs
        \u2502   \u251C\u2500\u2500 [321M]  403450e234d65943a7dcf7e05a771ce3c92faa84dd07db4ac20f592037a1e4bd
        \u2502   \u251C\u2500\u2500 [ 398]  7cb18dc9bafbfcf74629a4b760af1b160957a83e
        \u2502   \u2514\u2500\u2500 [1.4K]  d7edf6bd2a681fb0175f7735299831ee1b22b812
        \u251C\u2500\u2500 [  96]  refs
        \u2502   \u2514\u2500\u2500 [  40]  main
        \u2514\u2500\u2500 [ 128]  snapshots
            \u251C\u2500\u2500 [ 128]  2439f60ef33a0d46d85da5001d52aeda5b00ce9f
            \u2502   \u251C\u2500\u2500 [  52]  README.md -&gt; ../../blobs/d7edf6bd2a681fb0175f7735299831ee1b22b812
            \u2502   \u2514\u2500\u2500 [  76]  pytorch_model.bin -&gt; ../../blobs/403450e234d65943a7dcf7e05a771ce3c92faa84dd07db4ac20f592037a1e4bd
            \u2514\u2500\u2500 [ 128]  bbc77c8132af1cc5cf678da3f1ddf2de43606d48
                \u251C\u2500\u2500 [  52]  README.md -&gt; ../../blobs/7cb18dc9bafbfcf74629a4b760af1b160957a83e
                \u2514\u2500\u2500 [  76]  pytorch_model.bin -&gt; ../../blobs/403450e234d65943a7dcf7e05a771ce3c92faa84dd07db4ac20f592037a1e4bd`}}),ga=new I({}),wa=new I({}),ya=new D({props:{code:`from huggingface_hub import cached_assets_path

assets_path = cached_assets_path(library_name="datasets", namespace="SQuAD", subfolder="download")
something_path = assets_path / "something.json" # Do anything you like in your assets folder !`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> cached_assets_path

assets_path = cached_assets_path(library_name=<span class="hljs-string">&quot;datasets&quot;</span>, namespace=<span class="hljs-string">&quot;SQuAD&quot;</span>, subfolder=<span class="hljs-string">&quot;download&quot;</span>)
something_path = assets_path / <span class="hljs-string">&quot;something.json&quot;</span> <span class="hljs-comment"># Do anything you like in your assets folder !</span>`}}),He=new wd({props:{$$slots:{default:[uu]},$$scope:{ctx:_e}}}),_a=new I({}),Ea=new D({props:{code:`    assets/
    \u2514\u2500\u2500 datasets/
    \u2502   \u251C\u2500\u2500 SQuAD/
    \u2502   \u2502   \u251C\u2500\u2500 downloaded/
    \u2502   \u2502   \u251C\u2500\u2500 extracted/
    \u2502   \u2502   \u2514\u2500\u2500 processed/
    \u2502   \u251C\u2500\u2500 Helsinki-NLP--tatoeba_mt/
    \u2502       \u251C\u2500\u2500 downloaded/
    \u2502       \u251C\u2500\u2500 extracted/
    \u2502       \u2514\u2500\u2500 processed/
    \u2514\u2500\u2500 transformers/
        \u251C\u2500\u2500 default/
        \u2502   \u251C\u2500\u2500 something/
        \u251C\u2500\u2500 bert-base-cased/
        \u2502   \u251C\u2500\u2500 default/
        \u2502   \u2514\u2500\u2500 training/
    hub/
    \u2514\u2500\u2500 models--julien-c--EsperBERTo-small/
        \u251C\u2500\u2500 blobs/
        \u2502   \u251C\u2500\u2500 (...)
        \u2502   \u251C\u2500\u2500 (...)
        \u251C\u2500\u2500 refs/
        \u2502   \u2514\u2500\u2500 (...)
        \u2514\u2500\u2500 [ 128]  snapshots/
            \u251C\u2500\u2500 2439f60ef33a0d46d85da5001d52aeda5b00ce9f/
            \u2502   \u251C\u2500\u2500 (...)
            \u2514\u2500\u2500 bbc77c8132af1cc5cf678da3f1ddf2de43606d48/
                \u2514\u2500\u2500 (...)`,highlighted:`    assets/
    \u2514\u2500\u2500 datasets/
    \u2502   \u251C\u2500\u2500 SQuAD/
    \u2502   \u2502   \u251C\u2500\u2500 downloaded/
    \u2502   \u2502   \u251C\u2500\u2500 extracted/
    \u2502   \u2502   \u2514\u2500\u2500 processed/
    \u2502   \u251C\u2500\u2500 Helsinki-NLP--tatoeba_mt/
    \u2502       \u251C\u2500\u2500 downloaded/
    \u2502       \u251C\u2500\u2500 extracted/
    \u2502       \u2514\u2500\u2500 processed/
    \u2514\u2500\u2500 transformers/
        \u251C\u2500\u2500 default/
        \u2502   \u251C\u2500\u2500 something/
        \u251C\u2500\u2500 bert-base-cased/
        \u2502   \u251C\u2500\u2500 default/
        \u2502   \u2514\u2500\u2500 training/
    hub/
    \u2514\u2500\u2500 models--julien-c--EsperBERTo-small/
        \u251C\u2500\u2500 blobs/
        \u2502   \u251C\u2500\u2500 (...)
        \u2502   \u251C\u2500\u2500 (...)
        \u251C\u2500\u2500 refs/
        \u2502   \u2514\u2500\u2500 (...)
        \u2514\u2500\u2500 [ 128]  snapshots/
            \u251C\u2500\u2500 2439f60ef33a0d46d85da5001d52aeda5b00ce9f/
            \u2502   \u251C\u2500\u2500 (...)
            \u2514\u2500\u2500 bbc77c8132af1cc5cf678da3f1ddf2de43606d48/
                \u2514\u2500\u2500 (...)`}}),$a=new I({}),ka=new I({}),Ia=new D({props:{code:`\u279C huggingface-cli scan-cache
REPO ID                     REPO TYPE SIZE ON DISK NB FILES LAST_ACCESSED LAST_MODIFIED REFS                LOCAL PATH
--------------------------- --------- ------------ -------- ------------- ------------- ------------------- -------------------------------------------------------------------------
glue                        dataset         116.3K       15 4 days ago    4 days ago    2.4.0, main, 1.17.0 /home/wauplin/.cache/huggingface/hub/datasets--glue
google/fleurs               dataset          64.9M        6 1 week ago    1 week ago    refs/pr/1, main     /home/wauplin/.cache/huggingface/hub/datasets--google--fleurs
Jean-Baptiste/camembert-ner model           441.0M        7 2 weeks ago   16 hours ago  main                /home/wauplin/.cache/huggingface/hub/models--Jean-Baptiste--camembert-ner
bert-base-cased             model             1.9G       13 1 week ago    2 years ago                       /home/wauplin/.cache/huggingface/hub/models--bert-base-cased
t5-base                     model            10.1K        3 3 months ago  3 months ago  main                /home/wauplin/.cache/huggingface/hub/models--t5-base
t5-small                    model           970.7M       11 3 days ago    3 days ago    refs/pr/1, main     /home/wauplin/.cache/huggingface/hub/models--t5-small

Done in 0.0s. Scanned 6 repo(s) for a total of 3.4G.
Got 1 warning(s) while scanning. Use -vvv to print details.`,highlighted:`\u279C huggingface-cli scan-cache
REPO ID                     REPO TYPE SIZE ON DISK NB FILES LAST_ACCESSED LAST_MODIFIED REFS                LOCAL PATH
--------------------------- --------- ------------ -------- ------------- ------------- ------------------- -------------------------------------------------------------------------
glue                        dataset         116.3K       15 4 days ago    4 days ago    2.4.0, main, 1.17.0 /home/wauplin/.cache/huggingface/hub/datasets--glue
google/fleurs               dataset          64.9M        6 1 week ago    1 week ago    refs/pr/1, main     /home/wauplin/.cache/huggingface/hub/datasets--google--fleurs
Jean-Baptiste/camembert-ner model           441.0M        7 2 weeks ago   16 hours ago  main                /home/wauplin/.cache/huggingface/hub/models--Jean-Baptiste--camembert-ner
bert-base-cased             model             1.9G       13 1 week ago    2 years ago                       /home/wauplin/.cache/huggingface/hub/models--bert-base-cased
t5-base                     model            10.1K        3 3 months ago  3 months ago  main                /home/wauplin/.cache/huggingface/hub/models--t5-base
t5-small                    model           970.7M       11 3 days ago    3 days ago    refs/pr/1, main     /home/wauplin/.cache/huggingface/hub/models--t5-small

Done in 0.0s. Scanned 6 repo(s) for a total of 3.4G.
Got 1 warning(s) while scanning. Use -vvv to print details.`}}),Ca=new D({props:{code:`\u279C huggingface-cli scan-cache -v
REPO ID                     REPO TYPE REVISION                                 SIZE ON DISK NB FILES LAST_MODIFIED REFS        LOCAL PATH
--------------------------- --------- ---------------------------------------- ------------ -------- ------------- ----------- ----------------------------------------------------------------------------------------------------------------------------
glue                        dataset   9338f7b671827df886678df2bdd7cc7b4f36dffd        97.7K       14 4 days ago    main, 2.4.0 /home/wauplin/.cache/huggingface/hub/datasets--glue/snapshots/9338f7b671827df886678df2bdd7cc7b4f36dffd
glue                        dataset   f021ae41c879fcabcf823648ec685e3fead91fe7        97.8K       14 1 week ago    1.17.0      /home/wauplin/.cache/huggingface/hub/datasets--glue/snapshots/f021ae41c879fcabcf823648ec685e3fead91fe7
google/fleurs               dataset   129b6e96cf1967cd5d2b9b6aec75ce6cce7c89e8        25.4K        3 2 weeks ago   refs/pr/1   /home/wauplin/.cache/huggingface/hub/datasets--google--fleurs/snapshots/129b6e96cf1967cd5d2b9b6aec75ce6cce7c89e8
google/fleurs               dataset   24f85a01eb955224ca3946e70050869c56446805        64.9M        4 1 week ago    main        /home/wauplin/.cache/huggingface/hub/datasets--google--fleurs/snapshots/24f85a01eb955224ca3946e70050869c56446805
Jean-Baptiste/camembert-ner model     dbec8489a1c44ecad9da8a9185115bccabd799fe       441.0M        7 16 hours ago  main        /home/wauplin/.cache/huggingface/hub/models--Jean-Baptiste--camembert-ner/snapshots/dbec8489a1c44ecad9da8a9185115bccabd799fe
bert-base-cased             model     378aa1bda6387fd00e824948ebe3488630ad8565         1.5G        9 2 years ago               /home/wauplin/.cache/huggingface/hub/models--bert-base-cased/snapshots/378aa1bda6387fd00e824948ebe3488630ad8565
bert-base-cased             model     a8d257ba9925ef39f3036bfc338acf5283c512d9         1.4G        9 3 days ago    main        /home/wauplin/.cache/huggingface/hub/models--bert-base-cased/snapshots/a8d257ba9925ef39f3036bfc338acf5283c512d9
t5-base                     model     23aa4f41cb7c08d4b05c8f327b22bfa0eb8c7ad9        10.1K        3 1 week ago    main        /home/wauplin/.cache/huggingface/hub/models--t5-base/snapshots/23aa4f41cb7c08d4b05c8f327b22bfa0eb8c7ad9
t5-small                    model     98ffebbb27340ec1b1abd7c45da12c253ee1882a       726.2M        6 1 week ago    refs/pr/1   /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/98ffebbb27340ec1b1abd7c45da12c253ee1882a
t5-small                    model     d0a119eedb3718e34c648e594394474cf95e0617       485.8M        6 4 weeks ago               /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d0a119eedb3718e34c648e594394474cf95e0617
t5-small                    model     d78aea13fa7ecd06c29e3e46195d6341255065d5       970.7M        9 1 week ago    main        /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d78aea13fa7ecd06c29e3e46195d6341255065d5

Done in 0.0s. Scanned 6 repo(s) for a total of 3.4G.
Got 1 warning(s) while scanning. Use -vvv to print details.`,highlighted:`\u279C huggingface-cli scan-cache -v
REPO ID                     REPO TYPE REVISION                                 SIZE ON DISK NB FILES LAST_MODIFIED REFS        LOCAL PATH
--------------------------- --------- ---------------------------------------- ------------ -------- ------------- ----------- ----------------------------------------------------------------------------------------------------------------------------
glue                        dataset   9338f7b671827df886678df2bdd7cc7b4f36dffd        97.7K       14 4 days ago    main, 2.4.0 /home/wauplin/.cache/huggingface/hub/datasets--glue/snapshots/9338f7b671827df886678df2bdd7cc7b4f36dffd
glue                        dataset   f021ae41c879fcabcf823648ec685e3fead91fe7        97.8K       14 1 week ago    1.17.0      /home/wauplin/.cache/huggingface/hub/datasets--glue/snapshots/f021ae41c879fcabcf823648ec685e3fead91fe7
google/fleurs               dataset   129b6e96cf1967cd5d2b9b6aec75ce6cce7c89e8        25.4K        3 2 weeks ago   refs/pr/1   /home/wauplin/.cache/huggingface/hub/datasets--google--fleurs/snapshots/129b6e96cf1967cd5d2b9b6aec75ce6cce7c89e8
google/fleurs               dataset   24f85a01eb955224ca3946e70050869c56446805        64.9M        4 1 week ago    main        /home/wauplin/.cache/huggingface/hub/datasets--google--fleurs/snapshots/24f85a01eb955224ca3946e70050869c56446805
Jean-Baptiste/camembert-ner model     dbec8489a1c44ecad9da8a9185115bccabd799fe       441.0M        7 16 hours ago  main        /home/wauplin/.cache/huggingface/hub/models--Jean-Baptiste--camembert-ner/snapshots/dbec8489a1c44ecad9da8a9185115bccabd799fe
bert-base-cased             model     378aa1bda6387fd00e824948ebe3488630ad8565         1.5G        9 2 years ago               /home/wauplin/.cache/huggingface/hub/models--bert-base-cased/snapshots/378aa1bda6387fd00e824948ebe3488630ad8565
bert-base-cased             model     a8d257ba9925ef39f3036bfc338acf5283c512d9         1.4G        9 3 days ago    main        /home/wauplin/.cache/huggingface/hub/models--bert-base-cased/snapshots/a8d257ba9925ef39f3036bfc338acf5283c512d9
t5-base                     model     23aa4f41cb7c08d4b05c8f327b22bfa0eb8c7ad9        10.1K        3 1 week ago    main        /home/wauplin/.cache/huggingface/hub/models--t5-base/snapshots/23aa4f41cb7c08d4b05c8f327b22bfa0eb8c7ad9
t5-small                    model     98ffebbb27340ec1b1abd7c45da12c253ee1882a       726.2M        6 1 week ago    refs/pr/1   /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/98ffebbb27340ec1b1abd7c45da12c253ee1882a
t5-small                    model     d0a119eedb3718e34c648e594394474cf95e0617       485.8M        6 4 weeks ago               /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d0a119eedb3718e34c648e594394474cf95e0617
t5-small                    model     d78aea13fa7ecd06c29e3e46195d6341255065d5       970.7M        9 1 week ago    main        /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d78aea13fa7ecd06c29e3e46195d6341255065d5

Done in 0.0s. Scanned 6 repo(s) for a total of 3.4G.
Got 1 warning(s) while scanning. Use -vvv to print details.`}}),Da=new I({}),Aa=new D({props:{code:`\u279C eval "huggingface-cli scan-cache -v" | grep "t5-small"
t5-small                    model     98ffebbb27340ec1b1abd7c45da12c253ee1882a       726.2M        6 1 week ago    refs/pr/1   /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/98ffebbb27340ec1b1abd7c45da12c253ee1882a
t5-small                    model     d0a119eedb3718e34c648e594394474cf95e0617       485.8M        6 4 weeks ago               /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d0a119eedb3718e34c648e594394474cf95e0617
t5-small                    model     d78aea13fa7ecd06c29e3e46195d6341255065d5       970.7M        9 1 week ago    main        /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d78aea13fa7ecd06c29e3e46195d6341255065d5`,highlighted:`\u279C eval &quot;huggingface-cli scan-cache -v&quot; | grep &quot;t5-small&quot;
t5-small                    model     98ffebbb27340ec1b1abd7c45da12c253ee1882a       726.2M        6 1 week ago    refs/pr/1   /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/98ffebbb27340ec1b1abd7c45da12c253ee1882a
t5-small                    model     d0a119eedb3718e34c648e594394474cf95e0617       485.8M        6 4 weeks ago               /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d0a119eedb3718e34c648e594394474cf95e0617
t5-small                    model     d78aea13fa7ecd06c29e3e46195d6341255065d5       970.7M        9 1 week ago    main        /home/wauplin/.cache/huggingface/hub/models--t5-small/snapshots/d78aea13fa7ecd06c29e3e46195d6341255065d5`}}),Sa=new I({}),Ta=new D({props:{code:`from huggingface_hub import scan_cache_dir

hf_cache_info = scan_cache_dir()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> scan_cache_dir

<span class="hljs-meta">&gt;&gt;&gt; </span>hf_cache_info = scan_cache_dir()
HFCacheInfo(
    size_on_disk=<span class="hljs-number">3398085269</span>,
    repos=<span class="hljs-built_in">frozenset</span>({
        CachedRepoInfo(
            repo_id=<span class="hljs-string">&#x27;t5-small&#x27;</span>,
            repo_type=<span class="hljs-string">&#x27;model&#x27;</span>,
            repo_path=PosixPath(...),
            size_on_disk=<span class="hljs-number">970726914</span>,
            nb_files=<span class="hljs-number">11</span>,
            last_accessed=<span class="hljs-number">1662971707.3567169</span>,
            last_modified=<span class="hljs-number">1662971107.3567169</span>,
            revisions=<span class="hljs-built_in">frozenset</span>({
                CachedRevisionInfo(
                    commit_hash=<span class="hljs-string">&#x27;d78aea13fa7ecd06c29e3e46195d6341255065d5&#x27;</span>,
                    size_on_disk=<span class="hljs-number">970726339</span>,
                    snapshot_path=PosixPath(...),
                    <span class="hljs-comment"># No \`last_accessed\` as blobs are shared among revisions</span>
                    last_modified=<span class="hljs-number">1662971107.3567169</span>,
                    files=<span class="hljs-built_in">frozenset</span>({
                        CachedFileInfo(
                            file_name=<span class="hljs-string">&#x27;config.json&#x27;</span>,
                            size_on_disk=<span class="hljs-number">1197</span>
                            file_path=PosixPath(...),
                            blob_path=PosixPath(...),
                            blob_last_accessed=<span class="hljs-number">1662971707.3567169</span>,
                            blob_last_modified=<span class="hljs-number">1662971107.3567169</span>,
                        ),
                        CachedFileInfo(...),
                        ...
                    }),
                ),
                CachedRevisionInfo(...),
                ...
            }),
        ),
        CachedRepoInfo(...),
        ...
    }),
    warnings=[
        CorruptedCacheException(<span class="hljs-string">&quot;Snapshots dir doesn&#x27;t exist in cached repo: ...&quot;</span>),
        CorruptedCacheException(...),
        ...
    ],
)`}}),ja=new I({}),Oa=new I({}),Ke=new wd({props:{$$slots:{default:[mu]},$$scope:{ctx:_e}}}),We=new wd({props:{warning:!0,$$slots:{default:[bu]},$$scope:{ctx:_e}}}),Na=new I({}),Ra=new I({}),La=new D({props:{code:'pip install huggingface_hub["cli"]',highlighted:'pip <span class="hljs-keyword">install</span> huggingface_hub[<span class="hljs-string">&quot;cli&quot;</span>]'}}),Ma=new D({props:{code:"huggingface-cli delete-cache",highlighted:'huggingface-cli <span class="hljs-keyword">delete</span>-<span class="hljs-keyword">cache</span>'}}),Ba=new D({props:{code:`\u2717 huggingface-cli delete-cache --dir ~/.cache/huggingface/hub
? Select revisions to delete: 2 revision(s) selected.
? 2 revisions selected counting for 3.1G. Confirm deletion ? Yes
Start deletion.
Done. Deleted 1 repo(s) and 0 revision(s) for a total of 3.1G.`,highlighted:`\u2717 huggingface-cli delete-cache --dir ~/.cache/huggingface/hub
? Select revisions to delete: 2 revision(s) selected.
? 2 revisions selected counting for 3.1G. Confirm deletion ? Yes
Start deletion.
Done. Deleted 1 repo(s) and 0 revision(s) for a total of 3.1G.`}}),Ka=new I({}),Wa=new D({props:{code:"huggingface-cli delete-cache --disable-tui",highlighted:"huggingface-cli delete-cache --disable-tui"}}),za=new D({props:{code:`# INSTRUCTIONS
# ------------
# This is a temporary file created by running \`huggingface-cli delete-cache\` with the
# \`--disable-tui\` option. It contains a set of revisions that can be deleted from your
# local cache directory.
#
# Please manually review the revisions you want to delete:
#   - Revision hashes can be commented out with '#'.
#   - Only non-commented revisions in this file will be deleted.
#   - Revision hashes that are removed from this file are ignored as well.
#   - If \`CANCEL_DELETION\` line is uncommented, the all cache deletion is cancelled and
#     no changes will be applied.
#
# Once you've manually reviewed this file, please confirm deletion in the terminal. This
# file will be automatically removed once done.
# ------------

# KILL SWITCH
# ------------
# Un-comment following line to completely cancel the deletion process
# CANCEL_DELETION
# ------------

# REVISIONS
# ------------
# Dataset chrisjay/crowd-speech-africa (761.7M, used 5 days ago)
    ebedcd8c55c90d39fd27126d29d8484566cd27ca # Refs: main # modified 5 days ago

# Dataset oscar (3.3M, used 4 days ago)
#    916f956518279c5e60c63902ebdf3ddf9fa9d629 # Refs: main # modified 4 days ago

# Dataset wikiann (804.1K, used 2 weeks ago)
    89d089624b6323d69dcd9e5eb2def0551887a73a # Refs: main # modified 2 weeks ago

# Dataset z-uo/male-LJSpeech-italian (5.5G, used 5 days ago)
#    9cfa5647b32c0a30d0adfca06bf198d82192a0d1 # Refs: main # modified 5 days ago`,highlighted:`# INSTRUCTIONS
# ------------
# This is a temporary file created by running \`huggingface-cli delete-cache\` with the
# \`--disable-tui\` option. It contains a set of revisions that can be deleted from your
# local cache directory.
#
# Please manually review the revisions you want to delete:
#   - Revision hashes can be commented out with &#x27;#&#x27;.
#   - Only non-commented revisions in this file will be deleted.
#   - Revision hashes that are removed from this file are ignored as well.
#   - If \`CANCEL_DELETION\` line is uncommented, the all cache deletion is cancelled and
#     no changes will be applied.
#
# Once you&#x27;ve manually reviewed this file, please confirm deletion in the terminal. This
# file will be automatically removed once done.
# ------------

# KILL SWITCH
# ------------
# Un-comment following line to completely cancel the deletion process
# CANCEL_DELETION
# ------------

# REVISIONS
# ------------
# Dataset chrisjay/crowd-speech-africa (761.7M, used 5 days ago)
    ebedcd8c55c90d39fd27126d29d8484566cd27ca # Refs: main # modified 5 days ago

# Dataset oscar (3.3M, used 4 days ago)
#    916f956518279c5e60c63902ebdf3ddf9fa9d629 # Refs: main # modified 4 days ago

# Dataset wikiann (804.1K, used 2 weeks ago)
    89d089624b6323d69dcd9e5eb2def0551887a73a # Refs: main # modified 2 weeks ago

# Dataset z-uo/male-LJSpeech-italian (5.5G, used 5 days ago)
#    9cfa5647b32c0a30d0adfca06bf198d82192a0d1 # Refs: main # modified 5 days ago`}}),Ya=new I({}),Ja=new D({props:{code:`from huggingface_hub import scan_cache_dir

delete_strategy = scan_cache_dir().delete_revisions(
    "81fd1d6e7847c99f5862c9fb81387956d99ec7aa"
    "e2983b237dccf3ab4937c97fa717319a9ca1a96d",
    "6c0e6080953db56375760c0471a8c5f2929baf11",
)
print("Will free " + delete_strategy.expected_freed_size_str)

delete_strategy.execute()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> scan_cache_dir

<span class="hljs-meta">&gt;&gt;&gt; </span>delete_strategy = scan_cache_dir().delete_revisions(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;81fd1d6e7847c99f5862c9fb81387956d99ec7aa&quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;e2983b237dccf3ab4937c97fa717319a9ca1a96d&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;6c0e6080953db56375760c0471a8c5f2929baf11&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Will free &quot;</span> + delete_strategy.expected_freed_size_str)
Will free <span class="hljs-number">8.6</span>G

<span class="hljs-meta">&gt;&gt;&gt; </span>delete_strategy.execute()
Cache deletion done. Saved <span class="hljs-number">8.6</span>G.`}}),{c(){w=l("meta"),$=h(),y=l("h1"),E=l("a"),k=l("span"),p(_.$$.fragment),C=h(),S=l("span"),ae=s("Manage "),P=l("code"),Qa=s("huggingface_hub"),Za=s(" cache-system"),To=h(),te=l("h2"),Ee=l("a"),Lt=l("span"),p(ia.$$.fragment),Wn=h(),Mt=l("span"),zn=s("Understand caching"),jo=h(),Xa=l("p"),Yn=s(`The Hugging Face Hub cache-system is designed to be the central cache shared across libraries
that depend on the Hub. It has been updated in v0.8.0 to prevent re-downloading same files
between revisions.`),Oo=h(),et=l("p"),Jn=s("The caching system is designed as follows:"),xo=h(),p(ra.$$.fragment),Ho=h(),T=l("p"),Vn=s("The "),Ft=l("code"),Qn=s("<CACHE_DIR>"),Zn=s(` is usually your user\u2019s home directory. However, it is customizable with the
`),Gt=l("code"),Xn=s("cache_dir"),ei=s(" argument on all methods, or by specifying either "),Ut=l("code"),ai=s("HF_HOME"),ti=s(` or
`),qt=l("code"),si=s("HUGGINGFACE_HUB_CACHE"),oi=s(" environment variable."),No=h(),at=l("p"),li=s(`Models, datasets and spaces share a common root. Each of these repositories contains the
repository type, the namespace (organization or username) if it exists and the
repository name:`),Ro=h(),p(ca.$$.fragment),Lo=h(),tt=l("p"),ni=s(`It is within these folders that all files will now be downloaded from the Hub. Caching ensures that
a file isn\u2019t downloaded twice if it already exists and wasn\u2019t updated; but if it was updated,
and you\u2019re asking for the latest file, then it will download the latest file (while keeping
the previous file intact in case you need it again).`),Mo=h(),st=l("p"),ii=s("In order to achieve this, all folders contain the same skeleton:"),Fo=h(),p(ha.$$.fragment),Go=h(),ot=l("p"),ri=s("Each folder is designed to contain the following:"),Uo=h(),se=l("h3"),$e=l("a"),Bt=l("span"),p(da.$$.fragment),ci=h(),Kt=l("span"),hi=s("Refs"),qo=h(),j=l("p"),di=s("The "),Wt=l("code"),fi=s("refs"),pi=s(` folder contains files which indicates the latest revision of the given reference. For example,
if we have previously fetched a file from the `),zt=l("code"),ui=s("main"),mi=s(" branch of a repository, the "),Yt=l("code"),bi=s("refs"),gi=s(`
folder will contain a file named `),Jt=l("code"),vi=s("main"),wi=s(", which will itself contain the commit identifier of the current head."),Bo=h(),N=l("p"),yi=s("If the latest commit of "),Vt=l("code"),_i=s("main"),Ei=s(" has "),Qt=l("code"),$i=s("aaaaaa"),ki=s(" as identifier, then it will contain "),Zt=l("code"),Ii=s("aaaaaa"),Ci=s("."),Ko=h(),R=l("p"),Di=s("If that same branch gets updated with a new commit, that has "),Xt=l("code"),Ai=s("bbbbbb"),Si=s(` as an identifier, then
re-downloading a file from that reference will update the `),es=l("code"),Pi=s("refs/main"),Ti=s(" file to contain "),as=l("code"),ji=s("bbbbbb"),Oi=s("."),Wo=h(),oe=l("h3"),ke=l("a"),ts=l("span"),p(fa.$$.fragment),xi=h(),ss=l("span"),Hi=s("Blobs"),zo=h(),Ie=l("p"),Ni=s("The "),os=l("code"),Ri=s("blobs"),Li=s(" folder contains the actual files that we have downloaded. The name of each file is their hash."),Yo=h(),le=l("h3"),Ce=l("a"),ls=l("span"),p(pa.$$.fragment),Mi=h(),ns=l("span"),Fi=s("Snapshots"),Jo=h(),De=l("p"),Gi=s("The "),is=l("code"),Ui=s("snapshots"),qi=s(` folder contains symlinks to the blobs mentioned above. It is itself made up of several folders:
one per known revision!`),Vo=h(),A=l("p"),Bi=s("In the explanation above, we had initially fetched a file from the "),rs=l("code"),Ki=s("aaaaaa"),Wi=s(` revision, before fetching a file from
the `),cs=l("code"),zi=s("bbbbbb"),Yi=s(" revision. In this situation, we would now have two folders in the "),hs=l("code"),Ji=s("snapshots"),Vi=s(" folder: "),ds=l("code"),Qi=s("aaaaaa"),Zi=s(`
and `),fs=l("code"),Xi=s("bbbbbb"),er=s("."),Qo=h(),K=l("p"),ar=s(`In each of these folders, live symlinks that have the names of the files that we have downloaded. For example,
if we had downloaded the `),ps=l("code"),tr=s("README.md"),sr=s(" file at revision "),us=l("code"),or=s("aaaaaa"),lr=s(", we would have the following path:"),Zo=h(),p(ua.$$.fragment),Xo=h(),Ae=l("p"),nr=s("That "),ms=l("code"),ir=s("README.md"),rr=s(" file is actually a symlink linking to the blob that has the hash of the file."),el=h(),Se=l("p"),cr=s(`By creating the skeleton this way we open the mechanism to file sharing: if the same file was fetched in
revision `),bs=l("code"),hr=s("bbbbbb"),dr=s(", it would have the same hash and the file would not need to be re-downloaded."),al=h(),ne=l("h3"),Pe=l("a"),gs=l("span"),p(ma.$$.fragment),fr=h(),vs=l("span"),pr=s("In practice"),tl=h(),lt=l("p"),ur=s("In practice, your cache should look like the following tree:"),sl=h(),p(ba.$$.fragment),ol=h(),ie=l("h3"),Te=l("a"),ws=l("span"),p(ga.$$.fragment),mr=h(),ys=l("span"),br=s("Limitations"),ll=h(),O=l("p"),gr=s("In order to have an efficient cache-system, "),_s=l("code"),vr=s("huggingface-hub"),wr=s(` uses symlinks. However,
symlinks are not supported on all machines. This is a known limitation especially on
Windows. When this is the case, `),Es=l("code"),yr=s("huggingface_hub"),_r=s(" do not use the "),$s=l("code"),Er=s("blobs/"),$r=s(` directory but
directly stores the files in the `),ks=l("code"),kr=s("snapshots/"),Ir=s(` directory instead. This workaround allows
users to download and cache files from the Hub exactly the same way. Tools to inspect
and delete the cache (see below) are also supported. However, the cache-system is less
efficient as a single file might be downloaded several times if multiple revisions of
the same repo is downloaded.`),nl=h(),je=l("p"),Cr=s(`If you want to benefit from the symlink-based cache-system on a Windows machine, you
either need to `),va=l("a"),Dr=s("activate Developer Mode"),Ar=s(`
or to run Python as an administrator.`),il=h(),Oe=l("p"),Sr=s(`When symlinks are not supported, a warning message is displayed to the user to alert
them they are using a degraded version of the cache-system. This warning can be disabled
by setting the `),Is=l("code"),Pr=s("HF_HUB_DISABLE_SYMLINKS_WARNING"),Tr=s(" environment variable to true."),rl=h(),re=l("h2"),xe=l("a"),Cs=l("span"),p(wa.$$.fragment),jr=h(),Ds=l("span"),Or=s("Caching assets"),cl=h(),x=l("p"),xr=s(`In addition to caching files from the Hub, downstream libraries often requires to cache
other files related to HF but not handled directly by `),As=l("code"),Hr=s("huggingface_hub"),Nr=s(` (example: file
downloaded from GitHub, preprocessed data, logs,\u2026). In order to cache those files,
called `),Ss=l("code"),Rr=s("assets"),Lr=s(", one can use "),nt=l("a"),Mr=s("cached_assets_path()"),Fr=s(`. This small helper generates paths
in the HF cache in a unified way based on the name of the library requesting it and
optionally on a namespace and a subfolder name. The goal is to let every downstream
libraries manage its assets its own way (e.g. no rule on the structure) as long as it
stays in the right assets folder. Those libraries can then leverage tools from
`),Ps=l("code"),Gr=s("huggingface_hub"),Ur=s(` to manage the cache, in particular scanning and deleting parts of the
assets from a CLI command.`),hl=h(),p(ya.$$.fragment),dl=h(),p(He.$$.fragment),fl=h(),ce=l("h3"),Ne=l("a"),Ts=l("span"),p(_a.$$.fragment),qr=h(),js=l("span"),Br=s("Assets in practice"),pl=h(),it=l("p"),Kr=s("In practice, your assets cache should look like the following tree:"),ul=h(),p(Ea.$$.fragment),ml=h(),he=l("h2"),Re=l("a"),Os=l("span"),p($a.$$.fragment),Wr=h(),xs=l("span"),zr=s("Scan your cache"),bl=h(),W=l("p"),Yr=s(`At the moment, cached files are never deleted from your local directory: when you download
a new revision of a branch, previous files are kept in case you need them again.
Therefore it can be useful to scan your cache directory in order to know which repos
and revisions are taking the most disk space. `),Hs=l("code"),Jr=s("huggingface_hub"),Vr=s(` provides an helper to
do so that can be used via `),Ns=l("code"),Qr=s("huggingface-cli"),Zr=s(" or in a python script."),gl=h(),de=l("h3"),Le=l("a"),Rs=l("span"),p(ka.$$.fragment),Xr=h(),Ls=l("span"),ec=s("Scan cache from the terminal"),vl=h(),z=l("p"),ac=s("The easiest way to scan your HF cache-system is to use the "),Ms=l("code"),tc=s("scan-cache"),sc=s(` command from
`),Fs=l("code"),oc=s("huggingface-cli"),lc=s(` tool. This command scans the cache and prints a report with information
like repo id, repo type, disk usage, refs and full local path.`),wl=h(),rt=l("p"),nc=s(`The snippet below shows a scan report in a folder in which 4 models and 2 datasets are
cached.`),yl=h(),p(Ia.$$.fragment),_l=h(),Y=l("p"),ic=s("To get a more detailed report, use the "),Gs=l("code"),rc=s("--verbose"),cc=s(` option. For each repo, you get a
list of all revisions that have been downloaded. As explained above, the files that don\u2019t
change between 2 revisions are shared thanks to the symlinks. This means that the size of
the repo on disk is expected to be less than the sum of the size of each of its revisions.
For example, here `),Us=l("code"),hc=s("bert-base-cased"),dc=s(` has 2 revisions of 1.4G and 1.5G but the total disk
usage is only 1.9G.`),El=h(),p(Ca.$$.fragment),$l=h(),fe=l("h4"),Me=l("a"),qs=l("span"),p(Da.$$.fragment),fc=h(),Bs=l("span"),pc=s("Grep example"),kl=h(),Fe=l("p"),uc=s("Since the output is in tabular format, you can combine it with any "),Ks=l("code"),mc=s("grep"),bc=s(`-like tools to
filter the entries. Here is an example to filter only revisions from the \u201Ct5-small\u201D
model on a Unix-based machine.`),Il=h(),p(Aa.$$.fragment),Cl=h(),pe=l("h3"),Ge=l("a"),Ws=l("span"),p(Sa.$$.fragment),gc=h(),zs=l("span"),vc=s("Scan cache from Python"),Dl=h(),Ue=l("p"),wc=s("For a more advanced usage, use "),ct=l("a"),yc=s("scan_cache_dir()"),_c=s(` which is the python utility called by
the CLI tool.`),Al=h(),ht=l("p"),Ec=s("You can use it to get a detailed report structured around 4 dataclasses:"),Sl=h(),L=l("ul"),Pa=l("li"),dt=l("a"),$c=s("HFCacheInfo"),kc=s(": complete report returned by "),ft=l("a"),Ic=s("scan_cache_dir()"),Cc=h(),pt=l("li"),ut=l("a"),Dc=s("CachedRepoInfo"),Ac=s(": information about a cached repo"),Sc=h(),mt=l("li"),bt=l("a"),Pc=s("CachedRevisionInfo"),Tc=s(": information about a cached revision (e.g. \u201Csnapshot\u201D) inside a repo"),jc=h(),gt=l("li"),vt=l("a"),Oc=s("CachedFileInfo"),xc=s(": information about a cached file in a snapshot"),Pl=h(),wt=l("p"),Hc=s("Here is a simple usage example. See reference for details."),Tl=h(),p(Ta.$$.fragment),jl=h(),ue=l("h2"),qe=l("a"),Ys=l("span"),p(ja.$$.fragment),Nc=h(),Js=l("span"),Rc=s("Clean your cache"),Ol=h(),M=l("p"),Lc=s(`Scanning your cache is interesting but what you really want to do next is usually to
delete some portions to free up some space on your drive. This is possible using the
`),Vs=l("code"),Mc=s("delete-cache"),Fc=s(` CLI command. One can also programmatically use the
`),yt=l("a"),Gc=s("delete_revisions()"),Uc=s(" helper from "),_t=l("a"),qc=s("HFCacheInfo"),Bc=s(` object returned when
scanning the cache.`),xl=h(),me=l("h3"),Be=l("a"),Qs=l("span"),p(Oa.$$.fragment),Kc=h(),Zs=l("span"),Wc=s("Delete strategy"),Hl=h(),J=l("p"),zc=s(`To delete some cache, you need to pass a list of revisions to delete. The tool will
define a strategy to free up the space based on this list. It returns a
`),Et=l("a"),Yc=s("DeleteCacheStrategy"),Jc=s(` object that describes which files and folders will be deleted.
The `),$t=l("a"),Vc=s("DeleteCacheStrategy"),Qc=s(` allows give you how much space is expected to be freed.
Once you agree with the deletion, you must execute it to make the deletion effective. In
order to avoid discrepancies, you cannot edit a strategy object manually.`),Nl=h(),kt=l("p"),Zc=s("The strategy to delete revisions is the following:"),Rl=h(),F=l("ul"),xa=l("li"),Xc=s("the "),Xs=l("code"),eh=s("snapshot"),ah=s(" folder containing the revision symlinks is deleted."),th=h(),eo=l("li"),sh=s("blobs files that are targeted only by revisions to be deleted are deleted as well."),oh=h(),Ha=l("li"),lh=s("if a revision is linked to 1 or more "),ao=l("code"),nh=s("refs"),ih=s(", references are deleted."),rh=h(),to=l("li"),ch=s("if all revisions from a repo are deleted, the entire cached repository is deleted."),Ll=h(),p(Ke.$$.fragment),Ml=h(),p(We.$$.fragment),Fl=h(),be=l("h3"),ze=l("a"),so=l("span"),p(Na.$$.fragment),hh=h(),oo=l("span"),dh=s("Clean cache from the terminal"),Gl=h(),G=l("p"),fh=s(`The easiest way to delete some revisions from your HF cache-system is to use the
`),lo=l("code"),ph=s("delete-cache"),uh=s(" command from "),no=l("code"),mh=s("huggingface-cli"),bh=s(` tool. The command has two modes. By
default, a TUI (Terminal User Interface) is displayed to the user to select which
revisions to delete. This TUI is currently in beta as it has not been tested on all
platforms. If the TUI doesn\u2019t work on your machine, you can disable it using the
`),io=l("code"),gh=s("--disable-tui"),vh=s(" flag."),Ul=h(),ge=l("h4"),Ye=l("a"),ro=l("span"),p(Ra.$$.fragment),wh=h(),co=l("span"),yh=s("Using the TUI"),ql=h(),It=l("p"),_h=s(`This is the default mode. To use it, you first need to install extra dependencies by
running the following command:`),Bl=h(),p(La.$$.fragment),Kl=h(),Ct=l("p"),Eh=s("Then run the command:"),Wl=h(),p(Ma.$$.fragment),zl=h(),Dt=l("p"),$h=s("You should now see a list of revisions that you can select/deselect:"),Yl=h(),Fa=l("div"),ho=l("img"),Jl=h(),At=l("p"),kh=s("Instructions:"),Vl=h(),H=l("ul"),ve=l("li"),Ih=s("Press keyboard arrow keys "),fo=l("code"),Ch=s("<up>"),Dh=s(" and "),po=l("code"),Ah=s("<down>"),Sh=s(" to move the cursor."),Ph=h(),Ga=l("li"),Th=s("Press "),uo=l("code"),jh=s("<space>"),Oh=s(" to toggle (select/unselect) an item."),xh=h(),mo=l("li"),Hh=s(`When a revision is selected, the first line is updated to show you how much space
will be freed.`),Nh=h(),Ua=l("li"),Rh=s("Press "),bo=l("code"),Lh=s("<enter>"),Mh=s(" to confirm your selection."),Fh=h(),qa=l("li"),Gh=s(`If you want to cancel the operation and quit, you can select the first item
(\u201CNone of the following\u201D). If this item is selected, the delete process will be
cancelled, no matter what other items are selected. Otherwise you can also press
`),go=l("code"),Uh=s("<ctrl+c>"),qh=s(" to quit the TUI."),Ql=h(),U=l("p"),Bh=s("Once you\u2019ve selected the revisions you want to delete and pressed "),vo=l("code"),Kh=s("<enter>"),Wh=s(`, a last
confirmation message will be prompted. Press `),wo=l("code"),zh=s("<enter>"),Yh=s(` again and the deletion will be
effective. If you want to cancel, enter `),yo=l("code"),Jh=s("n"),Vh=s("."),Zl=h(),p(Ba.$$.fragment),Xl=h(),we=l("h4"),Je=l("a"),_o=l("span"),p(Ka.$$.fragment),Qh=h(),Eo=l("span"),Zh=s("Without TUI"),en=h(),St=l("p"),Xh=s(`As mentioned above, the TUI mode is currently in beta and is optional. It may be the
case that it doesn\u2019t work on your machine or that you don\u2019t find it convenient.`),an=h(),Ve=l("p"),ed=s("Another approach is to use the "),$o=l("code"),ad=s("--disable-tui"),td=s(` flag. The process is very similar as you
will be asked to manually review the list of revisions to delete. However, this manual
step will not take place in the terminal directly but in a temporary file generated on
the fly and that you can manually edit.`),tn=h(),q=l("p"),sd=s(`This file has all the instructions you need in the header. Open it in your favorite text
editor. To select/deselect a revision, simply comment/uncomment it with a `),ko=l("code"),od=s("#"),ld=s(`. Once the
manual review is done and the file is edited, you can save it. Go back to your terminal
and press `),Io=l("code"),nd=s("<enter>"),id=s(`. By default it will compute how much space would be freed with the
updated list of revisions. You can continue to edit the file or confirm with `),Co=l("code"),rd=s('"y"'),cd=s("."),sn=h(),p(Wa.$$.fragment),on=h(),Pt=l("p"),hd=s("Example of command file:"),ln=h(),p(za.$$.fragment),nn=h(),ye=l("h3"),Qe=l("a"),Do=l("span"),p(Ya.$$.fragment),dd=h(),Ao=l("span"),fd=s("Clean cache from Python"),rn=h(),Ze=l("p"),pd=s("For more flexibility, you can also use the "),Tt=l("a"),ud=s("delete_revisions()"),md=s(` method
programmatically. Here is a simple example. See reference for details.`),cn=h(),p(Ja.$$.fragment),this.h()},l(e){const r=du('[data-svelte="svelte-1phssyn"]',document.head);w=n(r,"META",{name:!0,content:!0}),r.forEach(t),$=d(e),y=n(e,"H1",{class:!0});var Va=i(y);E=n(Va,"A",{id:!0,class:!0,href:!0});var So=i(E);k=n(So,"SPAN",{});var Po=i(k);u(_.$$.fragment,Po),Po.forEach(t),So.forEach(t),C=d(Va),S=n(Va,"SPAN",{});var dn=i(S);ae=o(dn,"Manage "),P=n(dn,"CODE",{});var _d=i(P);Qa=o(_d,"huggingface_hub"),_d.forEach(t),Za=o(dn," cache-system"),dn.forEach(t),Va.forEach(t),To=d(e),te=n(e,"H2",{class:!0});var fn=i(te);Ee=n(fn,"A",{id:!0,class:!0,href:!0});var Ed=i(Ee);Lt=n(Ed,"SPAN",{});var $d=i(Lt);u(ia.$$.fragment,$d),$d.forEach(t),Ed.forEach(t),Wn=d(fn),Mt=n(fn,"SPAN",{});var kd=i(Mt);zn=o(kd,"Understand caching"),kd.forEach(t),fn.forEach(t),jo=d(e),Xa=n(e,"P",{});var Id=i(Xa);Yn=o(Id,`The Hugging Face Hub cache-system is designed to be the central cache shared across libraries
that depend on the Hub. It has been updated in v0.8.0 to prevent re-downloading same files
between revisions.`),Id.forEach(t),Oo=d(e),et=n(e,"P",{});var Cd=i(et);Jn=o(Cd,"The caching system is designed as follows:"),Cd.forEach(t),xo=d(e),u(ra.$$.fragment,e),Ho=d(e),T=n(e,"P",{});var V=i(T);Vn=o(V,"The "),Ft=n(V,"CODE",{});var Dd=i(Ft);Qn=o(Dd,"<CACHE_DIR>"),Dd.forEach(t),Zn=o(V,` is usually your user\u2019s home directory. However, it is customizable with the
`),Gt=n(V,"CODE",{});var Ad=i(Gt);Xn=o(Ad,"cache_dir"),Ad.forEach(t),ei=o(V," argument on all methods, or by specifying either "),Ut=n(V,"CODE",{});var Sd=i(Ut);ai=o(Sd,"HF_HOME"),Sd.forEach(t),ti=o(V,` or
`),qt=n(V,"CODE",{});var Pd=i(qt);si=o(Pd,"HUGGINGFACE_HUB_CACHE"),Pd.forEach(t),oi=o(V," environment variable."),V.forEach(t),No=d(e),at=n(e,"P",{});var Td=i(at);li=o(Td,`Models, datasets and spaces share a common root. Each of these repositories contains the
repository type, the namespace (organization or username) if it exists and the
repository name:`),Td.forEach(t),Ro=d(e),u(ca.$$.fragment,e),Lo=d(e),tt=n(e,"P",{});var jd=i(tt);ni=o(jd,`It is within these folders that all files will now be downloaded from the Hub. Caching ensures that
a file isn\u2019t downloaded twice if it already exists and wasn\u2019t updated; but if it was updated,
and you\u2019re asking for the latest file, then it will download the latest file (while keeping
the previous file intact in case you need it again).`),jd.forEach(t),Mo=d(e),st=n(e,"P",{});var Od=i(st);ii=o(Od,"In order to achieve this, all folders contain the same skeleton:"),Od.forEach(t),Fo=d(e),u(ha.$$.fragment,e),Go=d(e),ot=n(e,"P",{});var xd=i(ot);ri=o(xd,"Each folder is designed to contain the following:"),xd.forEach(t),Uo=d(e),se=n(e,"H3",{class:!0});var pn=i(se);$e=n(pn,"A",{id:!0,class:!0,href:!0});var Hd=i($e);Bt=n(Hd,"SPAN",{});var Nd=i(Bt);u(da.$$.fragment,Nd),Nd.forEach(t),Hd.forEach(t),ci=d(pn),Kt=n(pn,"SPAN",{});var Rd=i(Kt);hi=o(Rd,"Refs"),Rd.forEach(t),pn.forEach(t),qo=d(e),j=n(e,"P",{});var Q=i(j);di=o(Q,"The "),Wt=n(Q,"CODE",{});var Ld=i(Wt);fi=o(Ld,"refs"),Ld.forEach(t),pi=o(Q,` folder contains files which indicates the latest revision of the given reference. For example,
if we have previously fetched a file from the `),zt=n(Q,"CODE",{});var Md=i(zt);ui=o(Md,"main"),Md.forEach(t),mi=o(Q," branch of a repository, the "),Yt=n(Q,"CODE",{});var Fd=i(Yt);bi=o(Fd,"refs"),Fd.forEach(t),gi=o(Q,`
folder will contain a file named `),Jt=n(Q,"CODE",{});var Gd=i(Jt);vi=o(Gd,"main"),Gd.forEach(t),wi=o(Q,", which will itself contain the commit identifier of the current head."),Q.forEach(t),Bo=d(e),N=n(e,"P",{});var Xe=i(N);yi=o(Xe,"If the latest commit of "),Vt=n(Xe,"CODE",{});var Ud=i(Vt);_i=o(Ud,"main"),Ud.forEach(t),Ei=o(Xe," has "),Qt=n(Xe,"CODE",{});var qd=i(Qt);$i=o(qd,"aaaaaa"),qd.forEach(t),ki=o(Xe," as identifier, then it will contain "),Zt=n(Xe,"CODE",{});var Bd=i(Zt);Ii=o(Bd,"aaaaaa"),Bd.forEach(t),Ci=o(Xe,"."),Xe.forEach(t),Ko=d(e),R=n(e,"P",{});var ea=i(R);Di=o(ea,"If that same branch gets updated with a new commit, that has "),Xt=n(ea,"CODE",{});var Kd=i(Xt);Ai=o(Kd,"bbbbbb"),Kd.forEach(t),Si=o(ea,` as an identifier, then
re-downloading a file from that reference will update the `),es=n(ea,"CODE",{});var Wd=i(es);Pi=o(Wd,"refs/main"),Wd.forEach(t),Ti=o(ea," file to contain "),as=n(ea,"CODE",{});var zd=i(as);ji=o(zd,"bbbbbb"),zd.forEach(t),Oi=o(ea,"."),ea.forEach(t),Wo=d(e),oe=n(e,"H3",{class:!0});var un=i(oe);ke=n(un,"A",{id:!0,class:!0,href:!0});var Yd=i(ke);ts=n(Yd,"SPAN",{});var Jd=i(ts);u(fa.$$.fragment,Jd),Jd.forEach(t),Yd.forEach(t),xi=d(un),ss=n(un,"SPAN",{});var Vd=i(ss);Hi=o(Vd,"Blobs"),Vd.forEach(t),un.forEach(t),zo=d(e),Ie=n(e,"P",{});var mn=i(Ie);Ni=o(mn,"The "),os=n(mn,"CODE",{});var Qd=i(os);Ri=o(Qd,"blobs"),Qd.forEach(t),Li=o(mn," folder contains the actual files that we have downloaded. The name of each file is their hash."),mn.forEach(t),Yo=d(e),le=n(e,"H3",{class:!0});var bn=i(le);Ce=n(bn,"A",{id:!0,class:!0,href:!0});var Zd=i(Ce);ls=n(Zd,"SPAN",{});var Xd=i(ls);u(pa.$$.fragment,Xd),Xd.forEach(t),Zd.forEach(t),Mi=d(bn),ns=n(bn,"SPAN",{});var ef=i(ns);Fi=o(ef,"Snapshots"),ef.forEach(t),bn.forEach(t),Jo=d(e),De=n(e,"P",{});var gn=i(De);Gi=o(gn,"The "),is=n(gn,"CODE",{});var af=i(is);Ui=o(af,"snapshots"),af.forEach(t),qi=o(gn,` folder contains symlinks to the blobs mentioned above. It is itself made up of several folders:
one per known revision!`),gn.forEach(t),Vo=d(e),A=n(e,"P",{});var B=i(A);Bi=o(B,"In the explanation above, we had initially fetched a file from the "),rs=n(B,"CODE",{});var tf=i(rs);Ki=o(tf,"aaaaaa"),tf.forEach(t),Wi=o(B,` revision, before fetching a file from
the `),cs=n(B,"CODE",{});var sf=i(cs);zi=o(sf,"bbbbbb"),sf.forEach(t),Yi=o(B," revision. In this situation, we would now have two folders in the "),hs=n(B,"CODE",{});var of=i(hs);Ji=o(of,"snapshots"),of.forEach(t),Vi=o(B," folder: "),ds=n(B,"CODE",{});var lf=i(ds);Qi=o(lf,"aaaaaa"),lf.forEach(t),Zi=o(B,`
and `),fs=n(B,"CODE",{});var nf=i(fs);Xi=o(nf,"bbbbbb"),nf.forEach(t),er=o(B,"."),B.forEach(t),Qo=d(e),K=n(e,"P",{});var jt=i(K);ar=o(jt,`In each of these folders, live symlinks that have the names of the files that we have downloaded. For example,
if we had downloaded the `),ps=n(jt,"CODE",{});var rf=i(ps);tr=o(rf,"README.md"),rf.forEach(t),sr=o(jt," file at revision "),us=n(jt,"CODE",{});var cf=i(us);or=o(cf,"aaaaaa"),cf.forEach(t),lr=o(jt,", we would have the following path:"),jt.forEach(t),Zo=d(e),u(ua.$$.fragment,e),Xo=d(e),Ae=n(e,"P",{});var vn=i(Ae);nr=o(vn,"That "),ms=n(vn,"CODE",{});var hf=i(ms);ir=o(hf,"README.md"),hf.forEach(t),rr=o(vn," file is actually a symlink linking to the blob that has the hash of the file."),vn.forEach(t),el=d(e),Se=n(e,"P",{});var wn=i(Se);cr=o(wn,`By creating the skeleton this way we open the mechanism to file sharing: if the same file was fetched in
revision `),bs=n(wn,"CODE",{});var df=i(bs);hr=o(df,"bbbbbb"),df.forEach(t),dr=o(wn,", it would have the same hash and the file would not need to be re-downloaded."),wn.forEach(t),al=d(e),ne=n(e,"H3",{class:!0});var yn=i(ne);Pe=n(yn,"A",{id:!0,class:!0,href:!0});var ff=i(Pe);gs=n(ff,"SPAN",{});var pf=i(gs);u(ma.$$.fragment,pf),pf.forEach(t),ff.forEach(t),fr=d(yn),vs=n(yn,"SPAN",{});var uf=i(vs);pr=o(uf,"In practice"),uf.forEach(t),yn.forEach(t),tl=d(e),lt=n(e,"P",{});var mf=i(lt);ur=o(mf,"In practice, your cache should look like the following tree:"),mf.forEach(t),sl=d(e),u(ba.$$.fragment,e),ol=d(e),ie=n(e,"H3",{class:!0});var _n=i(ie);Te=n(_n,"A",{id:!0,class:!0,href:!0});var bf=i(Te);ws=n(bf,"SPAN",{});var gf=i(ws);u(ga.$$.fragment,gf),gf.forEach(t),bf.forEach(t),mr=d(_n),ys=n(_n,"SPAN",{});var vf=i(ys);br=o(vf,"Limitations"),vf.forEach(t),_n.forEach(t),ll=d(e),O=n(e,"P",{});var Z=i(O);gr=o(Z,"In order to have an efficient cache-system, "),_s=n(Z,"CODE",{});var wf=i(_s);vr=o(wf,"huggingface-hub"),wf.forEach(t),wr=o(Z,` uses symlinks. However,
symlinks are not supported on all machines. This is a known limitation especially on
Windows. When this is the case, `),Es=n(Z,"CODE",{});var yf=i(Es);yr=o(yf,"huggingface_hub"),yf.forEach(t),_r=o(Z," do not use the "),$s=n(Z,"CODE",{});var _f=i($s);Er=o(_f,"blobs/"),_f.forEach(t),$r=o(Z,` directory but
directly stores the files in the `),ks=n(Z,"CODE",{});var Ef=i(ks);kr=o(Ef,"snapshots/"),Ef.forEach(t),Ir=o(Z,` directory instead. This workaround allows
users to download and cache files from the Hub exactly the same way. Tools to inspect
and delete the cache (see below) are also supported. However, the cache-system is less
efficient as a single file might be downloaded several times if multiple revisions of
the same repo is downloaded.`),Z.forEach(t),nl=d(e),je=n(e,"P",{});var En=i(je);Cr=o(En,`If you want to benefit from the symlink-based cache-system on a Windows machine, you
either need to `),va=n(En,"A",{href:!0,rel:!0});var $f=i(va);Dr=o($f,"activate Developer Mode"),$f.forEach(t),Ar=o(En,`
or to run Python as an administrator.`),En.forEach(t),il=d(e),Oe=n(e,"P",{});var $n=i(Oe);Sr=o($n,`When symlinks are not supported, a warning message is displayed to the user to alert
them they are using a degraded version of the cache-system. This warning can be disabled
by setting the `),Is=n($n,"CODE",{});var kf=i(Is);Pr=o(kf,"HF_HUB_DISABLE_SYMLINKS_WARNING"),kf.forEach(t),Tr=o($n," environment variable to true."),$n.forEach(t),rl=d(e),re=n(e,"H2",{class:!0});var kn=i(re);xe=n(kn,"A",{id:!0,class:!0,href:!0});var If=i(xe);Cs=n(If,"SPAN",{});var Cf=i(Cs);u(wa.$$.fragment,Cf),Cf.forEach(t),If.forEach(t),jr=d(kn),Ds=n(kn,"SPAN",{});var Df=i(Ds);Or=o(Df,"Caching assets"),Df.forEach(t),kn.forEach(t),cl=d(e),x=n(e,"P",{});var X=i(x);xr=o(X,`In addition to caching files from the Hub, downstream libraries often requires to cache
other files related to HF but not handled directly by `),As=n(X,"CODE",{});var Af=i(As);Hr=o(Af,"huggingface_hub"),Af.forEach(t),Nr=o(X,` (example: file
downloaded from GitHub, preprocessed data, logs,\u2026). In order to cache those files,
called `),Ss=n(X,"CODE",{});var Sf=i(Ss);Rr=o(Sf,"assets"),Sf.forEach(t),Lr=o(X,", one can use "),nt=n(X,"A",{href:!0});var Pf=i(nt);Mr=o(Pf,"cached_assets_path()"),Pf.forEach(t),Fr=o(X,`. This small helper generates paths
in the HF cache in a unified way based on the name of the library requesting it and
optionally on a namespace and a subfolder name. The goal is to let every downstream
libraries manage its assets its own way (e.g. no rule on the structure) as long as it
stays in the right assets folder. Those libraries can then leverage tools from
`),Ps=n(X,"CODE",{});var Tf=i(Ps);Gr=o(Tf,"huggingface_hub"),Tf.forEach(t),Ur=o(X,` to manage the cache, in particular scanning and deleting parts of the
assets from a CLI command.`),X.forEach(t),hl=d(e),u(ya.$$.fragment,e),dl=d(e),u(He.$$.fragment,e),fl=d(e),ce=n(e,"H3",{class:!0});var In=i(ce);Ne=n(In,"A",{id:!0,class:!0,href:!0});var jf=i(Ne);Ts=n(jf,"SPAN",{});var Of=i(Ts);u(_a.$$.fragment,Of),Of.forEach(t),jf.forEach(t),qr=d(In),js=n(In,"SPAN",{});var xf=i(js);Br=o(xf,"Assets in practice"),xf.forEach(t),In.forEach(t),pl=d(e),it=n(e,"P",{});var Hf=i(it);Kr=o(Hf,"In practice, your assets cache should look like the following tree:"),Hf.forEach(t),ul=d(e),u(Ea.$$.fragment,e),ml=d(e),he=n(e,"H2",{class:!0});var Cn=i(he);Re=n(Cn,"A",{id:!0,class:!0,href:!0});var Nf=i(Re);Os=n(Nf,"SPAN",{});var Rf=i(Os);u($a.$$.fragment,Rf),Rf.forEach(t),Nf.forEach(t),Wr=d(Cn),xs=n(Cn,"SPAN",{});var Lf=i(xs);zr=o(Lf,"Scan your cache"),Lf.forEach(t),Cn.forEach(t),bl=d(e),W=n(e,"P",{});var Ot=i(W);Yr=o(Ot,`At the moment, cached files are never deleted from your local directory: when you download
a new revision of a branch, previous files are kept in case you need them again.
Therefore it can be useful to scan your cache directory in order to know which repos
and revisions are taking the most disk space. `),Hs=n(Ot,"CODE",{});var Mf=i(Hs);Jr=o(Mf,"huggingface_hub"),Mf.forEach(t),Vr=o(Ot,` provides an helper to
do so that can be used via `),Ns=n(Ot,"CODE",{});var Ff=i(Ns);Qr=o(Ff,"huggingface-cli"),Ff.forEach(t),Zr=o(Ot," or in a python script."),Ot.forEach(t),gl=d(e),de=n(e,"H3",{class:!0});var Dn=i(de);Le=n(Dn,"A",{id:!0,class:!0,href:!0});var Gf=i(Le);Rs=n(Gf,"SPAN",{});var Uf=i(Rs);u(ka.$$.fragment,Uf),Uf.forEach(t),Gf.forEach(t),Xr=d(Dn),Ls=n(Dn,"SPAN",{});var qf=i(Ls);ec=o(qf,"Scan cache from the terminal"),qf.forEach(t),Dn.forEach(t),vl=d(e),z=n(e,"P",{});var xt=i(z);ac=o(xt,"The easiest way to scan your HF cache-system is to use the "),Ms=n(xt,"CODE",{});var Bf=i(Ms);tc=o(Bf,"scan-cache"),Bf.forEach(t),sc=o(xt,` command from
`),Fs=n(xt,"CODE",{});var Kf=i(Fs);oc=o(Kf,"huggingface-cli"),Kf.forEach(t),lc=o(xt,` tool. This command scans the cache and prints a report with information
like repo id, repo type, disk usage, refs and full local path.`),xt.forEach(t),wl=d(e),rt=n(e,"P",{});var Wf=i(rt);nc=o(Wf,`The snippet below shows a scan report in a folder in which 4 models and 2 datasets are
cached.`),Wf.forEach(t),yl=d(e),u(Ia.$$.fragment,e),_l=d(e),Y=n(e,"P",{});var Ht=i(Y);ic=o(Ht,"To get a more detailed report, use the "),Gs=n(Ht,"CODE",{});var zf=i(Gs);rc=o(zf,"--verbose"),zf.forEach(t),cc=o(Ht,` option. For each repo, you get a
list of all revisions that have been downloaded. As explained above, the files that don\u2019t
change between 2 revisions are shared thanks to the symlinks. This means that the size of
the repo on disk is expected to be less than the sum of the size of each of its revisions.
For example, here `),Us=n(Ht,"CODE",{});var Yf=i(Us);hc=o(Yf,"bert-base-cased"),Yf.forEach(t),dc=o(Ht,` has 2 revisions of 1.4G and 1.5G but the total disk
usage is only 1.9G.`),Ht.forEach(t),El=d(e),u(Ca.$$.fragment,e),$l=d(e),fe=n(e,"H4",{class:!0});var An=i(fe);Me=n(An,"A",{id:!0,class:!0,href:!0});var Jf=i(Me);qs=n(Jf,"SPAN",{});var Vf=i(qs);u(Da.$$.fragment,Vf),Vf.forEach(t),Jf.forEach(t),fc=d(An),Bs=n(An,"SPAN",{});var Qf=i(Bs);pc=o(Qf,"Grep example"),Qf.forEach(t),An.forEach(t),kl=d(e),Fe=n(e,"P",{});var Sn=i(Fe);uc=o(Sn,"Since the output is in tabular format, you can combine it with any "),Ks=n(Sn,"CODE",{});var Zf=i(Ks);mc=o(Zf,"grep"),Zf.forEach(t),bc=o(Sn,`-like tools to
filter the entries. Here is an example to filter only revisions from the \u201Ct5-small\u201D
model on a Unix-based machine.`),Sn.forEach(t),Il=d(e),u(Aa.$$.fragment,e),Cl=d(e),pe=n(e,"H3",{class:!0});var Pn=i(pe);Ge=n(Pn,"A",{id:!0,class:!0,href:!0});var Xf=i(Ge);Ws=n(Xf,"SPAN",{});var ep=i(Ws);u(Sa.$$.fragment,ep),ep.forEach(t),Xf.forEach(t),gc=d(Pn),zs=n(Pn,"SPAN",{});var ap=i(zs);vc=o(ap,"Scan cache from Python"),ap.forEach(t),Pn.forEach(t),Dl=d(e),Ue=n(e,"P",{});var Tn=i(Ue);wc=o(Tn,"For a more advanced usage, use "),ct=n(Tn,"A",{href:!0});var tp=i(ct);yc=o(tp,"scan_cache_dir()"),tp.forEach(t),_c=o(Tn,` which is the python utility called by
the CLI tool.`),Tn.forEach(t),Al=d(e),ht=n(e,"P",{});var sp=i(ht);Ec=o(sp,"You can use it to get a detailed report structured around 4 dataclasses:"),sp.forEach(t),Sl=d(e),L=n(e,"UL",{});var aa=i(L);Pa=n(aa,"LI",{});var jn=i(Pa);dt=n(jn,"A",{href:!0});var op=i(dt);$c=o(op,"HFCacheInfo"),op.forEach(t),kc=o(jn,": complete report returned by "),ft=n(jn,"A",{href:!0});var lp=i(ft);Ic=o(lp,"scan_cache_dir()"),lp.forEach(t),jn.forEach(t),Cc=d(aa),pt=n(aa,"LI",{});var bd=i(pt);ut=n(bd,"A",{href:!0});var np=i(ut);Dc=o(np,"CachedRepoInfo"),np.forEach(t),Ac=o(bd,": information about a cached repo"),bd.forEach(t),Sc=d(aa),mt=n(aa,"LI",{});var gd=i(mt);bt=n(gd,"A",{href:!0});var ip=i(bt);Pc=o(ip,"CachedRevisionInfo"),ip.forEach(t),Tc=o(gd,": information about a cached revision (e.g. \u201Csnapshot\u201D) inside a repo"),gd.forEach(t),jc=d(aa),gt=n(aa,"LI",{});var vd=i(gt);vt=n(vd,"A",{href:!0});var rp=i(vt);Oc=o(rp,"CachedFileInfo"),rp.forEach(t),xc=o(vd,": information about a cached file in a snapshot"),vd.forEach(t),aa.forEach(t),Pl=d(e),wt=n(e,"P",{});var cp=i(wt);Hc=o(cp,"Here is a simple usage example. See reference for details."),cp.forEach(t),Tl=d(e),u(Ta.$$.fragment,e),jl=d(e),ue=n(e,"H2",{class:!0});var On=i(ue);qe=n(On,"A",{id:!0,class:!0,href:!0});var hp=i(qe);Ys=n(hp,"SPAN",{});var dp=i(Ys);u(ja.$$.fragment,dp),dp.forEach(t),hp.forEach(t),Nc=d(On),Js=n(On,"SPAN",{});var fp=i(Js);Rc=o(fp,"Clean your cache"),fp.forEach(t),On.forEach(t),Ol=d(e),M=n(e,"P",{});var ta=i(M);Lc=o(ta,`Scanning your cache is interesting but what you really want to do next is usually to
delete some portions to free up some space on your drive. This is possible using the
`),Vs=n(ta,"CODE",{});var pp=i(Vs);Mc=o(pp,"delete-cache"),pp.forEach(t),Fc=o(ta,` CLI command. One can also programmatically use the
`),yt=n(ta,"A",{href:!0});var up=i(yt);Gc=o(up,"delete_revisions()"),up.forEach(t),Uc=o(ta," helper from "),_t=n(ta,"A",{href:!0});var mp=i(_t);qc=o(mp,"HFCacheInfo"),mp.forEach(t),Bc=o(ta,` object returned when
scanning the cache.`),ta.forEach(t),xl=d(e),me=n(e,"H3",{class:!0});var xn=i(me);Be=n(xn,"A",{id:!0,class:!0,href:!0});var bp=i(Be);Qs=n(bp,"SPAN",{});var gp=i(Qs);u(Oa.$$.fragment,gp),gp.forEach(t),bp.forEach(t),Kc=d(xn),Zs=n(xn,"SPAN",{});var vp=i(Zs);Wc=o(vp,"Delete strategy"),vp.forEach(t),xn.forEach(t),Hl=d(e),J=n(e,"P",{});var Nt=i(J);zc=o(Nt,`To delete some cache, you need to pass a list of revisions to delete. The tool will
define a strategy to free up the space based on this list. It returns a
`),Et=n(Nt,"A",{href:!0});var wp=i(Et);Yc=o(wp,"DeleteCacheStrategy"),wp.forEach(t),Jc=o(Nt,` object that describes which files and folders will be deleted.
The `),$t=n(Nt,"A",{href:!0});var yp=i($t);Vc=o(yp,"DeleteCacheStrategy"),yp.forEach(t),Qc=o(Nt,` allows give you how much space is expected to be freed.
Once you agree with the deletion, you must execute it to make the deletion effective. In
order to avoid discrepancies, you cannot edit a strategy object manually.`),Nt.forEach(t),Nl=d(e),kt=n(e,"P",{});var _p=i(kt);Zc=o(_p,"The strategy to delete revisions is the following:"),_p.forEach(t),Rl=d(e),F=n(e,"UL",{});var sa=i(F);xa=n(sa,"LI",{});var Hn=i(xa);Xc=o(Hn,"the "),Xs=n(Hn,"CODE",{});var Ep=i(Xs);eh=o(Ep,"snapshot"),Ep.forEach(t),ah=o(Hn," folder containing the revision symlinks is deleted."),Hn.forEach(t),th=d(sa),eo=n(sa,"LI",{});var $p=i(eo);sh=o($p,"blobs files that are targeted only by revisions to be deleted are deleted as well."),$p.forEach(t),oh=d(sa),Ha=n(sa,"LI",{});var Nn=i(Ha);lh=o(Nn,"if a revision is linked to 1 or more "),ao=n(Nn,"CODE",{});var kp=i(ao);nh=o(kp,"refs"),kp.forEach(t),ih=o(Nn,", references are deleted."),Nn.forEach(t),rh=d(sa),to=n(sa,"LI",{});var Ip=i(to);ch=o(Ip,"if all revisions from a repo are deleted, the entire cached repository is deleted."),Ip.forEach(t),sa.forEach(t),Ll=d(e),u(Ke.$$.fragment,e),Ml=d(e),u(We.$$.fragment,e),Fl=d(e),be=n(e,"H3",{class:!0});var Rn=i(be);ze=n(Rn,"A",{id:!0,class:!0,href:!0});var Cp=i(ze);so=n(Cp,"SPAN",{});var Dp=i(so);u(Na.$$.fragment,Dp),Dp.forEach(t),Cp.forEach(t),hh=d(Rn),oo=n(Rn,"SPAN",{});var Ap=i(oo);dh=o(Ap,"Clean cache from the terminal"),Ap.forEach(t),Rn.forEach(t),Gl=d(e),G=n(e,"P",{});var oa=i(G);fh=o(oa,`The easiest way to delete some revisions from your HF cache-system is to use the
`),lo=n(oa,"CODE",{});var Sp=i(lo);ph=o(Sp,"delete-cache"),Sp.forEach(t),uh=o(oa," command from "),no=n(oa,"CODE",{});var Pp=i(no);mh=o(Pp,"huggingface-cli"),Pp.forEach(t),bh=o(oa,` tool. The command has two modes. By
default, a TUI (Terminal User Interface) is displayed to the user to select which
revisions to delete. This TUI is currently in beta as it has not been tested on all
platforms. If the TUI doesn\u2019t work on your machine, you can disable it using the
`),io=n(oa,"CODE",{});var Tp=i(io);gh=o(Tp,"--disable-tui"),Tp.forEach(t),vh=o(oa," flag."),oa.forEach(t),Ul=d(e),ge=n(e,"H4",{class:!0});var Ln=i(ge);Ye=n(Ln,"A",{id:!0,class:!0,href:!0});var jp=i(Ye);ro=n(jp,"SPAN",{});var Op=i(ro);u(Ra.$$.fragment,Op),Op.forEach(t),jp.forEach(t),wh=d(Ln),co=n(Ln,"SPAN",{});var xp=i(co);yh=o(xp,"Using the TUI"),xp.forEach(t),Ln.forEach(t),ql=d(e),It=n(e,"P",{});var Hp=i(It);_h=o(Hp,`This is the default mode. To use it, you first need to install extra dependencies by
running the following command:`),Hp.forEach(t),Bl=d(e),u(La.$$.fragment,e),Kl=d(e),Ct=n(e,"P",{});var Np=i(Ct);Eh=o(Np,"Then run the command:"),Np.forEach(t),Wl=d(e),u(Ma.$$.fragment,e),zl=d(e),Dt=n(e,"P",{});var Rp=i(Dt);$h=o(Rp,"You should now see a list of revisions that you can select/deselect:"),Rp.forEach(t),Yl=d(e),Fa=n(e,"DIV",{class:!0});var Lp=i(Fa);ho=n(Lp,"IMG",{src:!0}),Lp.forEach(t),Jl=d(e),At=n(e,"P",{});var Mp=i(At);kh=o(Mp,"Instructions:"),Mp.forEach(t),Vl=d(e),H=n(e,"UL",{});var ee=i(H);ve=n(ee,"LI",{});var Rt=i(ve);Ih=o(Rt,"Press keyboard arrow keys "),fo=n(Rt,"CODE",{});var Fp=i(fo);Ch=o(Fp,"<up>"),Fp.forEach(t),Dh=o(Rt," and "),po=n(Rt,"CODE",{});var Gp=i(po);Ah=o(Gp,"<down>"),Gp.forEach(t),Sh=o(Rt," to move the cursor."),Rt.forEach(t),Ph=d(ee),Ga=n(ee,"LI",{});var Mn=i(Ga);Th=o(Mn,"Press "),uo=n(Mn,"CODE",{});var Up=i(uo);jh=o(Up,"<space>"),Up.forEach(t),Oh=o(Mn," to toggle (select/unselect) an item."),Mn.forEach(t),xh=d(ee),mo=n(ee,"LI",{});var qp=i(mo);Hh=o(qp,`When a revision is selected, the first line is updated to show you how much space
will be freed.`),qp.forEach(t),Nh=d(ee),Ua=n(ee,"LI",{});var Fn=i(Ua);Rh=o(Fn,"Press "),bo=n(Fn,"CODE",{});var Bp=i(bo);Lh=o(Bp,"<enter>"),Bp.forEach(t),Mh=o(Fn," to confirm your selection."),Fn.forEach(t),Fh=d(ee),qa=n(ee,"LI",{});var Gn=i(qa);Gh=o(Gn,`If you want to cancel the operation and quit, you can select the first item
(\u201CNone of the following\u201D). If this item is selected, the delete process will be
cancelled, no matter what other items are selected. Otherwise you can also press
`),go=n(Gn,"CODE",{});var Kp=i(go);Uh=o(Kp,"<ctrl+c>"),Kp.forEach(t),qh=o(Gn," to quit the TUI."),Gn.forEach(t),ee.forEach(t),Ql=d(e),U=n(e,"P",{});var la=i(U);Bh=o(la,"Once you\u2019ve selected the revisions you want to delete and pressed "),vo=n(la,"CODE",{});var Wp=i(vo);Kh=o(Wp,"<enter>"),Wp.forEach(t),Wh=o(la,`, a last
confirmation message will be prompted. Press `),wo=n(la,"CODE",{});var zp=i(wo);zh=o(zp,"<enter>"),zp.forEach(t),Yh=o(la,` again and the deletion will be
effective. If you want to cancel, enter `),yo=n(la,"CODE",{});var Yp=i(yo);Jh=o(Yp,"n"),Yp.forEach(t),Vh=o(la,"."),la.forEach(t),Zl=d(e),u(Ba.$$.fragment,e),Xl=d(e),we=n(e,"H4",{class:!0});var Un=i(we);Je=n(Un,"A",{id:!0,class:!0,href:!0});var Jp=i(Je);_o=n(Jp,"SPAN",{});var Vp=i(_o);u(Ka.$$.fragment,Vp),Vp.forEach(t),Jp.forEach(t),Qh=d(Un),Eo=n(Un,"SPAN",{});var Qp=i(Eo);Zh=o(Qp,"Without TUI"),Qp.forEach(t),Un.forEach(t),en=d(e),St=n(e,"P",{});var Zp=i(St);Xh=o(Zp,`As mentioned above, the TUI mode is currently in beta and is optional. It may be the
case that it doesn\u2019t work on your machine or that you don\u2019t find it convenient.`),Zp.forEach(t),an=d(e),Ve=n(e,"P",{});var qn=i(Ve);ed=o(qn,"Another approach is to use the "),$o=n(qn,"CODE",{});var Xp=i($o);ad=o(Xp,"--disable-tui"),Xp.forEach(t),td=o(qn,` flag. The process is very similar as you
will be asked to manually review the list of revisions to delete. However, this manual
step will not take place in the terminal directly but in a temporary file generated on
the fly and that you can manually edit.`),qn.forEach(t),tn=d(e),q=n(e,"P",{});var na=i(q);sd=o(na,`This file has all the instructions you need in the header. Open it in your favorite text
editor. To select/deselect a revision, simply comment/uncomment it with a `),ko=n(na,"CODE",{});var eu=i(ko);od=o(eu,"#"),eu.forEach(t),ld=o(na,`. Once the
manual review is done and the file is edited, you can save it. Go back to your terminal
and press `),Io=n(na,"CODE",{});var au=i(Io);nd=o(au,"<enter>"),au.forEach(t),id=o(na,`. By default it will compute how much space would be freed with the
updated list of revisions. You can continue to edit the file or confirm with `),Co=n(na,"CODE",{});var tu=i(Co);rd=o(tu,'"y"'),tu.forEach(t),cd=o(na,"."),na.forEach(t),sn=d(e),u(Wa.$$.fragment,e),on=d(e),Pt=n(e,"P",{});var su=i(Pt);hd=o(su,"Example of command file:"),su.forEach(t),ln=d(e),u(za.$$.fragment,e),nn=d(e),ye=n(e,"H3",{class:!0});var Bn=i(ye);Qe=n(Bn,"A",{id:!0,class:!0,href:!0});var ou=i(Qe);Do=n(ou,"SPAN",{});var lu=i(Do);u(Ya.$$.fragment,lu),lu.forEach(t),ou.forEach(t),dd=d(Bn),Ao=n(Bn,"SPAN",{});var nu=i(Ao);fd=o(nu,"Clean cache from Python"),nu.forEach(t),Bn.forEach(t),rn=d(e),Ze=n(e,"P",{});var Kn=i(Ze);pd=o(Kn,"For more flexibility, you can also use the "),Tt=n(Kn,"A",{href:!0});var iu=i(Tt);ud=o(iu,"delete_revisions()"),iu.forEach(t),md=o(Kn,` method
programmatically. Here is a simple example. See reference for details.`),Kn.forEach(t),cn=d(e),u(Ja.$$.fragment,e),this.h()},h(){f(w,"name","hf:doc:metadata"),f(w,"content",JSON.stringify(vu)),f(E,"id","manage-huggingfacehub-cachesystem"),f(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(E,"href","#manage-huggingfacehub-cachesystem"),f(y,"class","relative group"),f(Ee,"id","understand-caching"),f(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ee,"href","#understand-caching"),f(te,"class","relative group"),f($e,"id","refs"),f($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($e,"href","#refs"),f(se,"class","relative group"),f(ke,"id","blobs"),f(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ke,"href","#blobs"),f(oe,"class","relative group"),f(Ce,"id","snapshots"),f(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ce,"href","#snapshots"),f(le,"class","relative group"),f(Pe,"id","in-practice"),f(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pe,"href","#in-practice"),f(ne,"class","relative group"),f(Te,"id","limitations"),f(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Te,"href","#limitations"),f(ie,"class","relative group"),f(va,"href","https://docs.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development"),f(va,"rel","nofollow"),f(xe,"id","caching-assets"),f(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xe,"href","#caching-assets"),f(re,"class","relative group"),f(nt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.cached_assets_path"),f(Ne,"id","assets-in-practice"),f(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ne,"href","#assets-in-practice"),f(ce,"class","relative group"),f(Re,"id","scan-your-cache"),f(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Re,"href","#scan-your-cache"),f(he,"class","relative group"),f(Le,"id","scan-cache-from-the-terminal"),f(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Le,"href","#scan-cache-from-the-terminal"),f(de,"class","relative group"),f(Me,"id","grep-example"),f(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Me,"href","#grep-example"),f(fe,"class","relative group"),f(Ge,"id","scan-cache-from-python"),f(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ge,"href","#scan-cache-from-python"),f(pe,"class","relative group"),f(ct,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.scan_cache_dir"),f(dt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.HFCacheInfo"),f(ft,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.scan_cache_dir"),f(ut,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.CachedRepoInfo"),f(bt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.CachedRevisionInfo"),f(vt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.CachedFileInfo"),f(qe,"id","clean-your-cache"),f(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qe,"href","#clean-your-cache"),f(ue,"class","relative group"),f(yt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.HFCacheInfo.delete_revisions"),f(_t,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.HFCacheInfo"),f(Be,"id","delete-strategy"),f(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Be,"href","#delete-strategy"),f(me,"class","relative group"),f(Et,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.DeleteCacheStrategy"),f($t,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.DeleteCacheStrategy"),f(ze,"id","clean-cache-from-the-terminal"),f(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ze,"href","#clean-cache-from-the-terminal"),f(be,"class","relative group"),f(Ye,"id","using-the-tui"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#using-the-tui"),f(ge,"class","relative group"),fu(ho.src,yd="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/delete-cache-tui.png")||f(ho,"src",yd),f(Fa,"class","flex justify-center"),f(Je,"id","without-tui"),f(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Je,"href","#without-tui"),f(we,"class","relative group"),f(Qe,"id","clean-cache-from-python"),f(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qe,"href","#clean-cache-from-python"),f(ye,"class","relative group"),f(Tt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cache#huggingface_hub.HFCacheInfo.delete_revisions")},m(e,r){a(document.head,w),c(e,$,r),c(e,y,r),a(y,E),a(E,k),m(_,k,null),a(y,C),a(y,S),a(S,ae),a(S,P),a(P,Qa),a(S,Za),c(e,To,r),c(e,te,r),a(te,Ee),a(Ee,Lt),m(ia,Lt,null),a(te,Wn),a(te,Mt),a(Mt,zn),c(e,jo,r),c(e,Xa,r),a(Xa,Yn),c(e,Oo,r),c(e,et,r),a(et,Jn),c(e,xo,r),m(ra,e,r),c(e,Ho,r),c(e,T,r),a(T,Vn),a(T,Ft),a(Ft,Qn),a(T,Zn),a(T,Gt),a(Gt,Xn),a(T,ei),a(T,Ut),a(Ut,ai),a(T,ti),a(T,qt),a(qt,si),a(T,oi),c(e,No,r),c(e,at,r),a(at,li),c(e,Ro,r),m(ca,e,r),c(e,Lo,r),c(e,tt,r),a(tt,ni),c(e,Mo,r),c(e,st,r),a(st,ii),c(e,Fo,r),m(ha,e,r),c(e,Go,r),c(e,ot,r),a(ot,ri),c(e,Uo,r),c(e,se,r),a(se,$e),a($e,Bt),m(da,Bt,null),a(se,ci),a(se,Kt),a(Kt,hi),c(e,qo,r),c(e,j,r),a(j,di),a(j,Wt),a(Wt,fi),a(j,pi),a(j,zt),a(zt,ui),a(j,mi),a(j,Yt),a(Yt,bi),a(j,gi),a(j,Jt),a(Jt,vi),a(j,wi),c(e,Bo,r),c(e,N,r),a(N,yi),a(N,Vt),a(Vt,_i),a(N,Ei),a(N,Qt),a(Qt,$i),a(N,ki),a(N,Zt),a(Zt,Ii),a(N,Ci),c(e,Ko,r),c(e,R,r),a(R,Di),a(R,Xt),a(Xt,Ai),a(R,Si),a(R,es),a(es,Pi),a(R,Ti),a(R,as),a(as,ji),a(R,Oi),c(e,Wo,r),c(e,oe,r),a(oe,ke),a(ke,ts),m(fa,ts,null),a(oe,xi),a(oe,ss),a(ss,Hi),c(e,zo,r),c(e,Ie,r),a(Ie,Ni),a(Ie,os),a(os,Ri),a(Ie,Li),c(e,Yo,r),c(e,le,r),a(le,Ce),a(Ce,ls),m(pa,ls,null),a(le,Mi),a(le,ns),a(ns,Fi),c(e,Jo,r),c(e,De,r),a(De,Gi),a(De,is),a(is,Ui),a(De,qi),c(e,Vo,r),c(e,A,r),a(A,Bi),a(A,rs),a(rs,Ki),a(A,Wi),a(A,cs),a(cs,zi),a(A,Yi),a(A,hs),a(hs,Ji),a(A,Vi),a(A,ds),a(ds,Qi),a(A,Zi),a(A,fs),a(fs,Xi),a(A,er),c(e,Qo,r),c(e,K,r),a(K,ar),a(K,ps),a(ps,tr),a(K,sr),a(K,us),a(us,or),a(K,lr),c(e,Zo,r),m(ua,e,r),c(e,Xo,r),c(e,Ae,r),a(Ae,nr),a(Ae,ms),a(ms,ir),a(Ae,rr),c(e,el,r),c(e,Se,r),a(Se,cr),a(Se,bs),a(bs,hr),a(Se,dr),c(e,al,r),c(e,ne,r),a(ne,Pe),a(Pe,gs),m(ma,gs,null),a(ne,fr),a(ne,vs),a(vs,pr),c(e,tl,r),c(e,lt,r),a(lt,ur),c(e,sl,r),m(ba,e,r),c(e,ol,r),c(e,ie,r),a(ie,Te),a(Te,ws),m(ga,ws,null),a(ie,mr),a(ie,ys),a(ys,br),c(e,ll,r),c(e,O,r),a(O,gr),a(O,_s),a(_s,vr),a(O,wr),a(O,Es),a(Es,yr),a(O,_r),a(O,$s),a($s,Er),a(O,$r),a(O,ks),a(ks,kr),a(O,Ir),c(e,nl,r),c(e,je,r),a(je,Cr),a(je,va),a(va,Dr),a(je,Ar),c(e,il,r),c(e,Oe,r),a(Oe,Sr),a(Oe,Is),a(Is,Pr),a(Oe,Tr),c(e,rl,r),c(e,re,r),a(re,xe),a(xe,Cs),m(wa,Cs,null),a(re,jr),a(re,Ds),a(Ds,Or),c(e,cl,r),c(e,x,r),a(x,xr),a(x,As),a(As,Hr),a(x,Nr),a(x,Ss),a(Ss,Rr),a(x,Lr),a(x,nt),a(nt,Mr),a(x,Fr),a(x,Ps),a(Ps,Gr),a(x,Ur),c(e,hl,r),m(ya,e,r),c(e,dl,r),m(He,e,r),c(e,fl,r),c(e,ce,r),a(ce,Ne),a(Ne,Ts),m(_a,Ts,null),a(ce,qr),a(ce,js),a(js,Br),c(e,pl,r),c(e,it,r),a(it,Kr),c(e,ul,r),m(Ea,e,r),c(e,ml,r),c(e,he,r),a(he,Re),a(Re,Os),m($a,Os,null),a(he,Wr),a(he,xs),a(xs,zr),c(e,bl,r),c(e,W,r),a(W,Yr),a(W,Hs),a(Hs,Jr),a(W,Vr),a(W,Ns),a(Ns,Qr),a(W,Zr),c(e,gl,r),c(e,de,r),a(de,Le),a(Le,Rs),m(ka,Rs,null),a(de,Xr),a(de,Ls),a(Ls,ec),c(e,vl,r),c(e,z,r),a(z,ac),a(z,Ms),a(Ms,tc),a(z,sc),a(z,Fs),a(Fs,oc),a(z,lc),c(e,wl,r),c(e,rt,r),a(rt,nc),c(e,yl,r),m(Ia,e,r),c(e,_l,r),c(e,Y,r),a(Y,ic),a(Y,Gs),a(Gs,rc),a(Y,cc),a(Y,Us),a(Us,hc),a(Y,dc),c(e,El,r),m(Ca,e,r),c(e,$l,r),c(e,fe,r),a(fe,Me),a(Me,qs),m(Da,qs,null),a(fe,fc),a(fe,Bs),a(Bs,pc),c(e,kl,r),c(e,Fe,r),a(Fe,uc),a(Fe,Ks),a(Ks,mc),a(Fe,bc),c(e,Il,r),m(Aa,e,r),c(e,Cl,r),c(e,pe,r),a(pe,Ge),a(Ge,Ws),m(Sa,Ws,null),a(pe,gc),a(pe,zs),a(zs,vc),c(e,Dl,r),c(e,Ue,r),a(Ue,wc),a(Ue,ct),a(ct,yc),a(Ue,_c),c(e,Al,r),c(e,ht,r),a(ht,Ec),c(e,Sl,r),c(e,L,r),a(L,Pa),a(Pa,dt),a(dt,$c),a(Pa,kc),a(Pa,ft),a(ft,Ic),a(L,Cc),a(L,pt),a(pt,ut),a(ut,Dc),a(pt,Ac),a(L,Sc),a(L,mt),a(mt,bt),a(bt,Pc),a(mt,Tc),a(L,jc),a(L,gt),a(gt,vt),a(vt,Oc),a(gt,xc),c(e,Pl,r),c(e,wt,r),a(wt,Hc),c(e,Tl,r),m(Ta,e,r),c(e,jl,r),c(e,ue,r),a(ue,qe),a(qe,Ys),m(ja,Ys,null),a(ue,Nc),a(ue,Js),a(Js,Rc),c(e,Ol,r),c(e,M,r),a(M,Lc),a(M,Vs),a(Vs,Mc),a(M,Fc),a(M,yt),a(yt,Gc),a(M,Uc),a(M,_t),a(_t,qc),a(M,Bc),c(e,xl,r),c(e,me,r),a(me,Be),a(Be,Qs),m(Oa,Qs,null),a(me,Kc),a(me,Zs),a(Zs,Wc),c(e,Hl,r),c(e,J,r),a(J,zc),a(J,Et),a(Et,Yc),a(J,Jc),a(J,$t),a($t,Vc),a(J,Qc),c(e,Nl,r),c(e,kt,r),a(kt,Zc),c(e,Rl,r),c(e,F,r),a(F,xa),a(xa,Xc),a(xa,Xs),a(Xs,eh),a(xa,ah),a(F,th),a(F,eo),a(eo,sh),a(F,oh),a(F,Ha),a(Ha,lh),a(Ha,ao),a(ao,nh),a(Ha,ih),a(F,rh),a(F,to),a(to,ch),c(e,Ll,r),m(Ke,e,r),c(e,Ml,r),m(We,e,r),c(e,Fl,r),c(e,be,r),a(be,ze),a(ze,so),m(Na,so,null),a(be,hh),a(be,oo),a(oo,dh),c(e,Gl,r),c(e,G,r),a(G,fh),a(G,lo),a(lo,ph),a(G,uh),a(G,no),a(no,mh),a(G,bh),a(G,io),a(io,gh),a(G,vh),c(e,Ul,r),c(e,ge,r),a(ge,Ye),a(Ye,ro),m(Ra,ro,null),a(ge,wh),a(ge,co),a(co,yh),c(e,ql,r),c(e,It,r),a(It,_h),c(e,Bl,r),m(La,e,r),c(e,Kl,r),c(e,Ct,r),a(Ct,Eh),c(e,Wl,r),m(Ma,e,r),c(e,zl,r),c(e,Dt,r),a(Dt,$h),c(e,Yl,r),c(e,Fa,r),a(Fa,ho),c(e,Jl,r),c(e,At,r),a(At,kh),c(e,Vl,r),c(e,H,r),a(H,ve),a(ve,Ih),a(ve,fo),a(fo,Ch),a(ve,Dh),a(ve,po),a(po,Ah),a(ve,Sh),a(H,Ph),a(H,Ga),a(Ga,Th),a(Ga,uo),a(uo,jh),a(Ga,Oh),a(H,xh),a(H,mo),a(mo,Hh),a(H,Nh),a(H,Ua),a(Ua,Rh),a(Ua,bo),a(bo,Lh),a(Ua,Mh),a(H,Fh),a(H,qa),a(qa,Gh),a(qa,go),a(go,Uh),a(qa,qh),c(e,Ql,r),c(e,U,r),a(U,Bh),a(U,vo),a(vo,Kh),a(U,Wh),a(U,wo),a(wo,zh),a(U,Yh),a(U,yo),a(yo,Jh),a(U,Vh),c(e,Zl,r),m(Ba,e,r),c(e,Xl,r),c(e,we,r),a(we,Je),a(Je,_o),m(Ka,_o,null),a(we,Qh),a(we,Eo),a(Eo,Zh),c(e,en,r),c(e,St,r),a(St,Xh),c(e,an,r),c(e,Ve,r),a(Ve,ed),a(Ve,$o),a($o,ad),a(Ve,td),c(e,tn,r),c(e,q,r),a(q,sd),a(q,ko),a(ko,od),a(q,ld),a(q,Io),a(Io,nd),a(q,id),a(q,Co),a(Co,rd),a(q,cd),c(e,sn,r),m(Wa,e,r),c(e,on,r),c(e,Pt,r),a(Pt,hd),c(e,ln,r),m(za,e,r),c(e,nn,r),c(e,ye,r),a(ye,Qe),a(Qe,Do),m(Ya,Do,null),a(ye,dd),a(ye,Ao),a(Ao,fd),c(e,rn,r),c(e,Ze,r),a(Ze,pd),a(Ze,Tt),a(Tt,ud),a(Ze,md),c(e,cn,r),m(Ja,e,r),hn=!0},p(e,[r]){const Va={};r&2&&(Va.$$scope={dirty:r,ctx:e}),He.$set(Va);const So={};r&2&&(So.$$scope={dirty:r,ctx:e}),Ke.$set(So);const Po={};r&2&&(Po.$$scope={dirty:r,ctx:e}),We.$set(Po)},i(e){hn||(b(_.$$.fragment,e),b(ia.$$.fragment,e),b(ra.$$.fragment,e),b(ca.$$.fragment,e),b(ha.$$.fragment,e),b(da.$$.fragment,e),b(fa.$$.fragment,e),b(pa.$$.fragment,e),b(ua.$$.fragment,e),b(ma.$$.fragment,e),b(ba.$$.fragment,e),b(ga.$$.fragment,e),b(wa.$$.fragment,e),b(ya.$$.fragment,e),b(He.$$.fragment,e),b(_a.$$.fragment,e),b(Ea.$$.fragment,e),b($a.$$.fragment,e),b(ka.$$.fragment,e),b(Ia.$$.fragment,e),b(Ca.$$.fragment,e),b(Da.$$.fragment,e),b(Aa.$$.fragment,e),b(Sa.$$.fragment,e),b(Ta.$$.fragment,e),b(ja.$$.fragment,e),b(Oa.$$.fragment,e),b(Ke.$$.fragment,e),b(We.$$.fragment,e),b(Na.$$.fragment,e),b(Ra.$$.fragment,e),b(La.$$.fragment,e),b(Ma.$$.fragment,e),b(Ba.$$.fragment,e),b(Ka.$$.fragment,e),b(Wa.$$.fragment,e),b(za.$$.fragment,e),b(Ya.$$.fragment,e),b(Ja.$$.fragment,e),hn=!0)},o(e){g(_.$$.fragment,e),g(ia.$$.fragment,e),g(ra.$$.fragment,e),g(ca.$$.fragment,e),g(ha.$$.fragment,e),g(da.$$.fragment,e),g(fa.$$.fragment,e),g(pa.$$.fragment,e),g(ua.$$.fragment,e),g(ma.$$.fragment,e),g(ba.$$.fragment,e),g(ga.$$.fragment,e),g(wa.$$.fragment,e),g(ya.$$.fragment,e),g(He.$$.fragment,e),g(_a.$$.fragment,e),g(Ea.$$.fragment,e),g($a.$$.fragment,e),g(ka.$$.fragment,e),g(Ia.$$.fragment,e),g(Ca.$$.fragment,e),g(Da.$$.fragment,e),g(Aa.$$.fragment,e),g(Sa.$$.fragment,e),g(Ta.$$.fragment,e),g(ja.$$.fragment,e),g(Oa.$$.fragment,e),g(Ke.$$.fragment,e),g(We.$$.fragment,e),g(Na.$$.fragment,e),g(Ra.$$.fragment,e),g(La.$$.fragment,e),g(Ma.$$.fragment,e),g(Ba.$$.fragment,e),g(Ka.$$.fragment,e),g(Wa.$$.fragment,e),g(za.$$.fragment,e),g(Ya.$$.fragment,e),g(Ja.$$.fragment,e),hn=!1},d(e){t(w),e&&t($),e&&t(y),v(_),e&&t(To),e&&t(te),v(ia),e&&t(jo),e&&t(Xa),e&&t(Oo),e&&t(et),e&&t(xo),v(ra,e),e&&t(Ho),e&&t(T),e&&t(No),e&&t(at),e&&t(Ro),v(ca,e),e&&t(Lo),e&&t(tt),e&&t(Mo),e&&t(st),e&&t(Fo),v(ha,e),e&&t(Go),e&&t(ot),e&&t(Uo),e&&t(se),v(da),e&&t(qo),e&&t(j),e&&t(Bo),e&&t(N),e&&t(Ko),e&&t(R),e&&t(Wo),e&&t(oe),v(fa),e&&t(zo),e&&t(Ie),e&&t(Yo),e&&t(le),v(pa),e&&t(Jo),e&&t(De),e&&t(Vo),e&&t(A),e&&t(Qo),e&&t(K),e&&t(Zo),v(ua,e),e&&t(Xo),e&&t(Ae),e&&t(el),e&&t(Se),e&&t(al),e&&t(ne),v(ma),e&&t(tl),e&&t(lt),e&&t(sl),v(ba,e),e&&t(ol),e&&t(ie),v(ga),e&&t(ll),e&&t(O),e&&t(nl),e&&t(je),e&&t(il),e&&t(Oe),e&&t(rl),e&&t(re),v(wa),e&&t(cl),e&&t(x),e&&t(hl),v(ya,e),e&&t(dl),v(He,e),e&&t(fl),e&&t(ce),v(_a),e&&t(pl),e&&t(it),e&&t(ul),v(Ea,e),e&&t(ml),e&&t(he),v($a),e&&t(bl),e&&t(W),e&&t(gl),e&&t(de),v(ka),e&&t(vl),e&&t(z),e&&t(wl),e&&t(rt),e&&t(yl),v(Ia,e),e&&t(_l),e&&t(Y),e&&t(El),v(Ca,e),e&&t($l),e&&t(fe),v(Da),e&&t(kl),e&&t(Fe),e&&t(Il),v(Aa,e),e&&t(Cl),e&&t(pe),v(Sa),e&&t(Dl),e&&t(Ue),e&&t(Al),e&&t(ht),e&&t(Sl),e&&t(L),e&&t(Pl),e&&t(wt),e&&t(Tl),v(Ta,e),e&&t(jl),e&&t(ue),v(ja),e&&t(Ol),e&&t(M),e&&t(xl),e&&t(me),v(Oa),e&&t(Hl),e&&t(J),e&&t(Nl),e&&t(kt),e&&t(Rl),e&&t(F),e&&t(Ll),v(Ke,e),e&&t(Ml),v(We,e),e&&t(Fl),e&&t(be),v(Na),e&&t(Gl),e&&t(G),e&&t(Ul),e&&t(ge),v(Ra),e&&t(ql),e&&t(It),e&&t(Bl),v(La,e),e&&t(Kl),e&&t(Ct),e&&t(Wl),v(Ma,e),e&&t(zl),e&&t(Dt),e&&t(Yl),e&&t(Fa),e&&t(Jl),e&&t(At),e&&t(Vl),e&&t(H),e&&t(Ql),e&&t(U),e&&t(Zl),v(Ba,e),e&&t(Xl),e&&t(we),v(Ka),e&&t(en),e&&t(St),e&&t(an),e&&t(Ve),e&&t(tn),e&&t(q),e&&t(sn),v(Wa,e),e&&t(on),e&&t(Pt),e&&t(ln),v(za,e),e&&t(nn),e&&t(ye),v(Ya),e&&t(rn),e&&t(Ze),e&&t(cn),v(Ja,e)}}}const vu={local:"manage-huggingfacehub-cachesystem",sections:[{local:"understand-caching",sections:[{local:"refs",title:"Refs"},{local:"blobs",title:"Blobs"},{local:"snapshots",title:"Snapshots"},{local:"in-practice",title:"In practice"},{local:"limitations",title:"Limitations"}],title:"Understand caching"},{local:"caching-assets",sections:[{local:"assets-in-practice",title:"Assets in practice"}],title:"Caching assets"},{local:"scan-your-cache",sections:[{local:"scan-cache-from-the-terminal",sections:[{local:"grep-example",title:"Grep example"}],title:"Scan cache from the terminal"},{local:"scan-cache-from-python",title:"Scan cache from Python"}],title:"Scan your cache"},{local:"clean-your-cache",sections:[{local:"delete-strategy",title:"Delete strategy"},{local:"clean-cache-from-the-terminal",sections:[{local:"using-the-tui",title:"Using the TUI"},{local:"without-tui",title:"Without TUI"}],title:"Clean cache from the terminal"},{local:"clean-cache-from-python",title:"Clean cache from Python"}],title:"Clean your cache"}],title:"Manage `huggingface_hub` cache-system"};function wu(_e){return pu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ku extends ru{constructor(w){super();cu(this,w,wu,gu,hu,{})}}export{ku as default,vu as metadata};
