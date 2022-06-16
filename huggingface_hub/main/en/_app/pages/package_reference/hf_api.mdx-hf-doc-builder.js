import{S as Rr,i as Sr,s as Ur,e as o,k as p,w as j,t as g,M as Cr,c as n,d as t,m as h,a as s,x as H,h as c,b as w,G as e,g as b,y as F,q as D,o as N,B as q,v as zr,L as Oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Te}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as we}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Zs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Pe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vr(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),k=p(),E=o("li"),L=o("a"),T=g("RevisionNotFoundError"),R=g(`
If the revision to download from cannot be found.`),this.h()},l(_){i=n(_,"P",{});var P=s(i);$=c(P,"Raises the following errors:"),P.forEach(t),u=h(_),l=n(_,"UL",{});var U=s(l);d=n(U,"LI",{});var S=s(d);r=n(S,"A",{href:!0});var V=s(r);m=c(V,"RepositoryNotFoundError"),V.forEach(t),x=c(S,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(S,"CODE",{});var G=s(f);y=c(G,"private"),G.forEach(t),A=c(S," and you do not have access."),S.forEach(t),k=h(U),E=n(U,"LI",{});var C=s(E);L=n(C,"A",{href:!0});var W=s(L);T=c(W,"RevisionNotFoundError"),W.forEach(t),R=c(C,`
If the revision to download from cannot be found.`),C.forEach(t),U.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(L,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){b(_,i,P),e(i,$),b(_,u,P),b(_,l,P),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A),e(l,k),e(l,E),e(E,L),e(L,T),e(E,R)},d(_){_&&t(i),_&&t(u),_&&t(l)}}}function Gr(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R,_,P,U,S,V,G,C,W,Z,J,se,ee,Q,X,Y,de,fe;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=o("code"),x=g("HTTPError"),f=g(`
if the HuggingFace API returned an error`),y=p(),A=o("li"),k=o("a"),E=o("code"),L=g("ValueError"),T=g(`
if some parameter value is invalid`),R=p(),_=o("li"),P=o("a"),U=g("RepositoryNotFoundError"),S=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=o("code"),G=g("private"),C=g(" and you do not have access."),W=p(),Z=o("li"),J=o("a"),se=g("RevisionNotFoundError"),ee=g(`
If the revision to download from cannot be found.`),Q=p(),X=o("li"),Y=o("a"),de=g("EntryNotFoundError"),fe=g(`
If the file to download cannot be found.`),this.h()},l(B){i=n(B,"P",{});var te=s(i);$=c(te,"Raises the following errors:"),te.forEach(t),u=h(B),l=n(B,"UL",{});var K=s(l);d=n(K,"LI",{});var Ee=s(d);r=n(Ee,"A",{href:!0,rel:!0});var ae=s(r);m=n(ae,"CODE",{});var Ne=s(m);x=c(Ne,"HTTPError"),Ne.forEach(t),ae.forEach(t),f=c(Ee,`
if the HuggingFace API returned an error`),Ee.forEach(t),y=h(K),A=n(K,"LI",{});var Ae=s(A);k=n(Ae,"A",{href:!0,rel:!0});var ue=s(k);E=n(ue,"CODE",{});var I=s(E);L=c(I,"ValueError"),I.forEach(t),ue.forEach(t),T=c(Ae,`
if some parameter value is invalid`),Ae.forEach(t),R=h(K),_=n(K,"LI",{});var oe=s(_);P=n(oe,"A",{href:!0});var la=s(P);U=c(la,"RepositoryNotFoundError"),la.forEach(t),S=c(oe,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(oe,"CODE",{});var me=s(V);G=c(me,"private"),me.forEach(t),C=c(oe," and you do not have access."),oe.forEach(t),W=h(K),Z=n(K,"LI",{});var _e=s(Z);J=n(_e,"A",{href:!0});var ga=s(J);se=c(ga,"RevisionNotFoundError"),ga.forEach(t),ee=c(_e,`
If the revision to download from cannot be found.`),_e.forEach(t),Q=h(K),X=n(K,"LI",{});var qe=s(X);Y=n(qe,"A",{href:!0});var ca=s(Y);de=c(ca,"EntryNotFoundError"),ca.forEach(t),fe=c(qe,`
If the file to download cannot be found.`),qe.forEach(t),K.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),w(Y,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,te){b(B,i,te),e(i,$),b(B,u,te),b(B,l,te),e(l,d),e(d,r),e(r,m),e(m,x),e(d,f),e(l,y),e(l,A),e(A,k),e(k,E),e(E,L),e(A,T),e(l,R),e(l,_),e(_,P),e(P,U),e(_,S),e(_,V),e(V,G),e(_,C),e(l,W),e(l,Z),e(Z,J),e(J,se),e(Z,ee),e(l,Q),e(l,X),e(X,Y),e(Y,de),e(X,fe)},d(B){B&&t(i),B&&t(u),B&&t(l)}}}function Wr(M){let i,$,u,l,d,r,m,x,f,y,A;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),this.h()},l(k){i=n(k,"P",{});var E=s(i);$=c(E,"Raises the following errors:"),E.forEach(t),u=h(k),l=n(k,"UL",{});var L=s(l);d=n(L,"LI",{});var T=s(d);r=n(T,"A",{href:!0});var R=s(r);m=c(R,"RepositoryNotFoundError"),R.forEach(t),x=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(T,"CODE",{});var _=s(f);y=c(_,"private"),_.forEach(t),A=c(T," and you do not have access."),T.forEach(t),L.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){b(k,i,E),e(i,$),b(k,u,E),b(k,l,E),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A)},d(k){k&&t(i),k&&t(u),k&&t(l)}}}function Br(M){let i,$,u,l,d,r,m,x;return m=new we({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=o("p"),$=g("Example usage with the "),u=o("code"),l=g("filter"),d=g(" argument:"),r=p(),j(m.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);$=c(y,"Example usage with the "),u=n(y,"CODE",{});var A=s(u);l=c(A,"filter"),A.forEach(t),d=c(y," argument:"),y.forEach(t),r=h(f),H(m.$$.fragment,f)},m(f,y){b(f,i,y),e(i,$),e(i,u),e(u,l),e(i,d),b(f,r,y),F(m,f,y),x=!0},p:Oe,i(f){x||(D(m.$$.fragment,f),x=!0)},o(f){N(m.$$.fragment,f),x=!1},d(f){f&&t(i),f&&t(r),q(m,f)}}}function Kr(M){let i,$,u,l,d,r,m,x;return m=new we({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),$=g("Example usage with the "),u=o("code"),l=g("search"),d=g(" argument:"),r=p(),j(m.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);$=c(y,"Example usage with the "),u=n(y,"CODE",{});var A=s(u);l=c(A,"search"),A.forEach(t),d=c(y," argument:"),y.forEach(t),r=h(f),H(m.$$.fragment,f)},m(f,y){b(f,i,y),e(i,$),e(i,u),e(u,l),e(i,d),b(f,r,y),F(m,f,y),x=!0},p:Oe,i(f){x||(D(m.$$.fragment,f),x=!0)},o(f){N(m.$$.fragment,f),x=!1},d(f){f&&t(i),f&&t(r),q(m,f)}}}function Jr(M){let i,$,u,l,d,r,m,x;return m=new we({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=o("p"),$=g("Example usage with the "),u=o("code"),l=g("filter"),d=g(" argument:"),r=p(),j(m.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);$=c(y,"Example usage with the "),u=n(y,"CODE",{});var A=s(u);l=c(A,"filter"),A.forEach(t),d=c(y," argument:"),y.forEach(t),r=h(f),H(m.$$.fragment,f)},m(f,y){b(f,i,y),e(i,$),e(i,u),e(u,l),e(i,d),b(f,r,y),F(m,f,y),x=!0},p:Oe,i(f){x||(D(m.$$.fragment,f),x=!0)},o(f){N(m.$$.fragment,f),x=!1},d(f){f&&t(i),f&&t(r),q(m,f)}}}function Qr(M){let i,$,u,l,d,r,m,x;return m=new we({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),$=g("Example usage with the "),u=o("code"),l=g("search"),d=g(" argument:"),r=p(),j(m.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);$=c(y,"Example usage with the "),u=n(y,"CODE",{});var A=s(u);l=c(A,"search"),A.forEach(t),d=c(y," argument:"),y.forEach(t),r=h(f),H(m.$$.fragment,f)},m(f,y){b(f,i,y),e(i,$),e(i,u),e(u,l),e(i,d),b(f,r,y),F(m,f,y),x=!0},p:Oe,i(f){x||(D(m.$$.fragment,f),x=!0)},o(f){N(m.$$.fragment,f),x=!1},d(f){f&&t(i),f&&t(r),q(m,f)}}}function Xr(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),k=p(),E=o("li"),L=o("a"),T=g("RevisionNotFoundError"),R=g(`
If the revision to download from cannot be found.`),this.h()},l(_){i=n(_,"P",{});var P=s(i);$=c(P,"Raises the following errors:"),P.forEach(t),u=h(_),l=n(_,"UL",{});var U=s(l);d=n(U,"LI",{});var S=s(d);r=n(S,"A",{href:!0});var V=s(r);m=c(V,"RepositoryNotFoundError"),V.forEach(t),x=c(S,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(S,"CODE",{});var G=s(f);y=c(G,"private"),G.forEach(t),A=c(S," and you do not have access."),S.forEach(t),k=h(U),E=n(U,"LI",{});var C=s(E);L=n(C,"A",{href:!0});var W=s(L);T=c(W,"RevisionNotFoundError"),W.forEach(t),R=c(C,`
If the revision to download from cannot be found.`),C.forEach(t),U.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(L,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){b(_,i,P),e(i,$),b(_,u,P),b(_,l,P),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A),e(l,k),e(l,E),e(E,L),e(L,T),e(E,R)},d(_){_&&t(i),_&&t(u),_&&t(l)}}}function Yr(M){let i,$,u,l,d,r,m,x,f,y,A;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),this.h()},l(k){i=n(k,"P",{});var E=s(i);$=c(E,"Raises the following errors:"),E.forEach(t),u=h(k),l=n(k,"UL",{});var L=s(l);d=n(L,"LI",{});var T=s(d);r=n(T,"A",{href:!0});var R=s(r);m=c(R,"RepositoryNotFoundError"),R.forEach(t),x=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(T,"CODE",{});var _=s(f);y=c(_,"private"),_.forEach(t),A=c(T," and you do not have access."),T.forEach(t),L.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){b(k,i,E),e(i,$),b(k,u,E),b(k,l,E),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A)},d(k){k&&t(i),k&&t(u),k&&t(l)}}}function Zr(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),k=p(),E=o("li"),L=o("a"),T=g("RevisionNotFoundError"),R=g(`
If the revision to download from cannot be found.`),this.h()},l(_){i=n(_,"P",{});var P=s(i);$=c(P,"Raises the following errors:"),P.forEach(t),u=h(_),l=n(_,"UL",{});var U=s(l);d=n(U,"LI",{});var S=s(d);r=n(S,"A",{href:!0});var V=s(r);m=c(V,"RepositoryNotFoundError"),V.forEach(t),x=c(S,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(S,"CODE",{});var G=s(f);y=c(G,"private"),G.forEach(t),A=c(S," and you do not have access."),S.forEach(t),k=h(U),E=n(U,"LI",{});var C=s(E);L=n(C,"A",{href:!0});var W=s(L);T=c(W,"RevisionNotFoundError"),W.forEach(t),R=c(C,`
If the revision to download from cannot be found.`),C.forEach(t),U.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(L,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){b(_,i,P),e(i,$),b(_,u,P),b(_,l,P),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A),e(l,k),e(l,E),e(E,L),e(L,T),e(E,R)},d(_){_&&t(i),_&&t(u),_&&t(l)}}}function ei(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),k=p(),E=o("li"),L=o("a"),T=g("RevisionNotFoundError"),R=g(`
If the revision to download from cannot be found.`),this.h()},l(_){i=n(_,"P",{});var P=s(i);$=c(P,"Raises the following errors:"),P.forEach(t),u=h(_),l=n(_,"UL",{});var U=s(l);d=n(U,"LI",{});var S=s(d);r=n(S,"A",{href:!0});var V=s(r);m=c(V,"RepositoryNotFoundError"),V.forEach(t),x=c(S,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(S,"CODE",{});var G=s(f);y=c(G,"private"),G.forEach(t),A=c(S," and you do not have access."),S.forEach(t),k=h(U),E=n(U,"LI",{});var C=s(E);L=n(C,"A",{href:!0});var W=s(L);T=c(W,"RevisionNotFoundError"),W.forEach(t),R=c(C,`
If the revision to download from cannot be found.`),C.forEach(t),U.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(L,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){b(_,i,P),e(i,$),b(_,u,P),b(_,l,P),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A),e(l,k),e(l,E),e(E,L),e(L,T),e(E,R)},d(_){_&&t(i),_&&t(u),_&&t(l)}}}function ti(M){let i,$,u,l,d,r,m,x,f,y,A;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=g("RepositoryNotFoundError"),x=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=o("code"),y=g("private"),A=g(" and you do not have access."),this.h()},l(k){i=n(k,"P",{});var E=s(i);$=c(E,"Raises the following errors:"),E.forEach(t),u=h(k),l=n(k,"UL",{});var L=s(l);d=n(L,"LI",{});var T=s(d);r=n(T,"A",{href:!0});var R=s(r);m=c(R,"RepositoryNotFoundError"),R.forEach(t),x=c(T,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(T,"CODE",{});var _=s(f);y=c(_,"private"),_.forEach(t),A=c(T," and you do not have access."),T.forEach(t),L.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){b(k,i,E),e(i,$),b(k,u,E),b(k,l,E),e(l,d),e(d,r),e(r,m),e(d,x),e(d,f),e(f,y),e(d,A)},d(k){k&&t(i),k&&t(u),k&&t(l)}}}function ai(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R,_,P,U,S,V,G,C,W,Z,J,se,ee;return{c(){i=o("p"),$=g("Raises the following errors:"),u=p(),l=o("ul"),d=o("li"),r=o("a"),m=o("code"),x=g("HTTPError"),f=g(`
if the HuggingFace API returned an error`),y=p(),A=o("li"),k=o("a"),E=o("code"),L=g("ValueError"),T=g(`
if some parameter value is invalid`),R=p(),_=o("li"),P=o("a"),U=g("RepositoryNotFoundError"),S=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=o("code"),G=g("private"),C=g(" and you do not have access."),W=p(),Z=o("li"),J=o("a"),se=g("RevisionNotFoundError"),ee=g(`
If the revision to download from cannot be found.`),this.h()},l(Q){i=n(Q,"P",{});var X=s(i);$=c(X,"Raises the following errors:"),X.forEach(t),u=h(Q),l=n(Q,"UL",{});var Y=s(l);d=n(Y,"LI",{});var de=s(d);r=n(de,"A",{href:!0,rel:!0});var fe=s(r);m=n(fe,"CODE",{});var B=s(m);x=c(B,"HTTPError"),B.forEach(t),fe.forEach(t),f=c(de,`
if the HuggingFace API returned an error`),de.forEach(t),y=h(Y),A=n(Y,"LI",{});var te=s(A);k=n(te,"A",{href:!0,rel:!0});var K=s(k);E=n(K,"CODE",{});var Ee=s(E);L=c(Ee,"ValueError"),Ee.forEach(t),K.forEach(t),T=c(te,`
if some parameter value is invalid`),te.forEach(t),R=h(Y),_=n(Y,"LI",{});var ae=s(_);P=n(ae,"A",{href:!0});var Ne=s(P);U=c(Ne,"RepositoryNotFoundError"),Ne.forEach(t),S=c(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var Ae=s(V);G=c(Ae,"private"),Ae.forEach(t),C=c(ae," and you do not have access."),ae.forEach(t),W=h(Y),Z=n(Y,"LI",{});var ue=s(Z);J=n(ue,"A",{href:!0});var I=s(J);se=c(I,"RevisionNotFoundError"),I.forEach(t),ee=c(ue,`
If the revision to download from cannot be found.`),ue.forEach(t),Y.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(P,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){b(Q,i,X),e(i,$),b(Q,u,X),b(Q,l,X),e(l,d),e(d,r),e(r,m),e(m,x),e(d,f),e(l,y),e(l,A),e(A,k),e(k,E),e(E,L),e(A,T),e(l,R),e(l,_),e(_,P),e(P,U),e(_,S),e(_,V),e(V,G),e(_,C),e(l,W),e(l,Z),e(Z,J),e(J,se),e(Z,ee)},d(Q){Q&&t(i),Q&&t(u),Q&&t(l)}}}function oi(M){let i,$,u,l,d;return l=new we({props:{code:`with open("./local/filepath", "rb") as fobj:
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
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;./local/filepath&quot;</span>, <span class="hljs-string">&quot;rb&quot;</span>) <span class="hljs-keyword">as</span> fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=o("p"),$=g("Example usage:"),u=p(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var m=s(i);$=c(m,"Example usage:"),m.forEach(t),u=h(r),H(l.$$.fragment,r)},m(r,m){b(r,i,m),e(i,$),b(r,u,m),F(l,r,m),d=!0},p:Oe,i(r){d||(D(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(i),r&&t(u),q(l,r)}}}function ni(M){let i,$,u,l,d;return l=new we({props:{code:`from huggingface_hub import DatasetFilter

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
new_filter = DatasetFilter(multilinguality="yes")

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(multilinguality=<span class="hljs-string">&quot;yes&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using size_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(size_categories=<span class="hljs-string">&quot;100K&lt;n&lt;1M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_categories=<span class="hljs-string">&quot;audio_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=o("p"),$=g("Examples:"),u=p(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var m=s(i);$=c(m,"Examples:"),m.forEach(t),u=h(r),H(l.$$.fragment,r)},m(r,m){b(r,i,m),e(i,$),b(r,u,m),F(l,r,m),d=!0},p:Oe,i(r){d||(D(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(i),r&&t(u),q(l,r)}}}function si(M){let i,$;return i=new we({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(i.$$.fragment)},l(u){H(i.$$.fragment,u)},m(u,l){F(i,u,l),$=!0},p:Oe,i(u){$||(D(i.$$.fragment,u),$=!0)},o(u){N(i.$$.fragment,u),$=!1},d(u){q(i,u)}}}function ri(M){let i,$,u,l,d;return l=new we({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),$=g("Example:"),u=p(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var m=s(i);$=c(m,"Example:"),m.forEach(t),u=h(r),H(l.$$.fragment,r)},m(r,m){b(r,i,m),e(i,$),b(r,u,m),F(l,r,m),d=!0},p:Oe,i(r){d||(D(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(i),r&&t(u),q(l,r)}}}function ii(M){let i,$,u,l,d;return l=new we({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),$=g("Example:"),u=p(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var m=s(i);$=c(m,"Example:"),m.forEach(t),u=h(r),H(l.$$.fragment,r)},m(r,m){b(r,i,m),e(i,$),b(r,u,m),F(l,r,m),d=!0},p:Oe,i(r){d||(D(l.$$.fragment,r),d=!0)},o(r){N(l.$$.fragment,r),d=!1},d(r){r&&t(i),r&&t(u),q(l,r)}}}function li(M){let i,$,u,l,d,r,m,x,f,y,A,k,E,L,T,R,_,P,U,S,V,G,C,W,Z,J,se,ee,Q,X,Y,de,fe,B,te,K,Ee,ae,Ne,Ae,ue,I,oe,la,me,_e,ga,qe,ca,Uo,re,wt,Co,ya,zo,Vo,ka,Go,Wo,Me,Bo,xe,Et,Ko,wa,Jo,Qo,Re,Xo,je,At,Yo,Ea,Zo,en,Se,tn,Ue,xt,an,Aa,on,nn,Ce,jt,sn,xa,rn,ln,ze,Ht,gn,ja,cn,pn,ie,Ft,hn,Ha,dn,fn,Ve,un,Ge,mn,We,Dt,_n,Fa,bn,vn,le,Nt,$n,Da,yn,kn,Be,wn,Ke,En,Je,qt,An,Na,xn,jn,ge,It,Hn,qa,Fn,Dn,Ia,Nn,qn,Qe,In,ce,Lt,Ln,La,Tn,Pn,Tt,On,Pt,Mn,Rn,Sn,Xe,Un,He,Ot,Cn,Ta,zn,Vn,Ye,Gn,Ze,Mt,Wn,Pa,Bn,Kn,pe,Rt,Jn,Oa,Qn,Xn,Ma,Yn,Zn,et,es,tt,St,ts,Ra,as,os,Fe,Ut,ns,Sa,ss,rs,at,is,he,Ct,ls,Ua,gs,cs,ot,ps,nt,hs,st,zt,ds,Ca,fs,fo,Ie,rt,za,Vt,us,Va,ms,uo,Gt,Ga,_s,bs,mo,it,vs,pa,$s,ys,_o,ne,Wt,ks,lt,Bt,ws,Wa,Es,As,De,Kt,xs,Ba,js,Hs,Jt,Fs,Ka,Ds,Ns,qs,gt,Qt,Is,Ja,Ls,bo,Le,ct,Qa,Xt,Ts,Xa,Ps,vo,pt,Os,Ya,Ms,Rs,$o,be,Yt,Ss,Za,Us,Cs,ht,yo,ve,Zt,zs,eo,Vs,Gs,dt,ko,$e,ea,Ws,to,Bs,Ks,ft,wo,ye,ta,Js,ao,Qs,Xs,ut,Eo;return r=new Zs({}),J=new we({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new we({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),oe=new z({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L550"}}),_e=new z({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1332",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),wt=new z({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1129",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),Me=new Te({props:{$$slots:{default:[Vr]},$$scope:{ctx:M}}}),Et=new z({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1856"}}),Re=new Te({props:{$$slots:{default:[Gr]},$$scope:{ctx:M}}}),At=new z({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1462"}}),Se=new Te({props:{$$slots:{default:[Wr]},$$scope:{ctx:M}}}),xt=new z({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L671"}}),jt=new z({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1921",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ht=new z({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L663"}}),Ft=new z({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L889"}}),Ve=new Pe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Br]},$$scope:{ctx:M}}}),Ge=new Pe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Kr]},$$scope:{ctx:M}}}),Dt=new z({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1054",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Nt=new z({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L681"}}),Be=new Pe({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Jr]},$$scope:{ctx:M}}}),Ke=new Pe({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Qr]},$$scope:{ctx:M}}}),qt=new z({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1292",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),It=new z({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1068",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),Qe=new Te({props:{$$slots:{default:[Xr]},$$scope:{ctx:M}}}),Lt=new z({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1637"}}),Xe=new Te({props:{$$slots:{default:[Yr]},$$scope:{ctx:M}}}),Ot=new z({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1237",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),Ye=new Te({props:{$$slots:{default:[Zr]},$$scope:{ctx:M}}}),Mt=new z({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L644"}}),Rt=new z({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1183",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),et=new Te({props:{$$slots:{default:[ei]},$$scope:{ctx:M}}}),St=new z({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L656"}}),Ut=new z({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1562",returnDescription:`
<p>The HTTP response in json.</p>
`}}),at=new Te({props:{$$slots:{default:[ti]},$$scope:{ctx:M}}}),Ct=new z({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.IO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Changing this value has no effect.`,name:"identical_ok"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1715",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ot=new Te({props:{$$slots:{default:[ai]},$$scope:{ctx:M}}}),nt=new Pe({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[oi]},$$scope:{ctx:M}}}),zt=new z({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L554"}}),Vt=new Zs({}),Wt=new z({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1956"}}),Bt=new z({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1993"}}),Kt=new z({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1972",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Qt=new z({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1959"}}),Xt=new Zs({}),Yt=new z({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),ht=new Pe({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[ni]},$$scope:{ctx:M}}}),Zt=new z({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),dt=new Pe({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[si]},$$scope:{ctx:M}}}),ea=new z({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L438"}}),ft=new Pe({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[ri]},$$scope:{ctx:M}}}),ta=new z({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L400"}}),ut=new Pe({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[ii]},$$scope:{ctx:M}}}),{c(){i=o("meta"),$=p(),u=o("h1"),l=o("a"),d=o("span"),j(r.$$.fragment),m=p(),x=o("span"),f=g("Hugging Face Hub API"),y=p(),A=o("p"),k=g("Below is the documentation for the "),E=o("code"),L=g("HfApi"),T=g(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=p(),_=o("p"),P=g("All methods from the "),U=o("code"),S=g("HfApi"),V=g(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),G=p(),C=o("p"),W=g("The following approach uses the method from the root of the package:"),Z=p(),j(J.$$.fragment),se=p(),ee=o("p"),Q=g("The following approach uses the "),X=o("code"),Y=g("HfApi"),de=g(" class:"),fe=p(),j(B.$$.fragment),te=p(),K=o("p"),Ee=g("Using the "),ae=o("code"),Ne=g("HfApi"),Ae=g(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ue=p(),I=o("div"),j(oe.$$.fragment),la=p(),me=o("div"),j(_e.$$.fragment),ga=p(),qe=o("p"),ca=g("Create an empty repo on the HuggingFace Hub."),Uo=p(),re=o("div"),j(wt.$$.fragment),Co=p(),ya=o("p"),zo=g("Get info on one specific dataset on huggingface.co."),Vo=p(),ka=o("p"),Go=g("Dataset can be private if you pass an acceptable token."),Wo=p(),j(Me.$$.fragment),Bo=p(),xe=o("div"),j(Et.$$.fragment),Ko=p(),wa=o("p"),Jo=g("Deletes a file in the given repo."),Qo=p(),j(Re.$$.fragment),Xo=p(),je=o("div"),j(At.$$.fragment),Yo=p(),Ea=o("p"),Zo=g("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),en=p(),j(Se.$$.fragment),tn=p(),Ue=o("div"),j(xt.$$.fragment),an=p(),Aa=o("p"),on=g("Gets all valid dataset tags as a nested namespace object."),nn=p(),Ce=o("div"),j(jt.$$.fragment),sn=p(),xa=o("p"),rn=g(`Returns the repository name for a given model ID and optional
organization.`),ln=p(),ze=o("div"),j(Ht.$$.fragment),gn=p(),ja=o("p"),cn=g("Gets all valid model tags as a nested namespace object"),pn=p(),ie=o("div"),j(Ft.$$.fragment),hn=p(),Ha=o("p"),dn=g("Get the public list of all the datasets on huggingface.co"),fn=p(),j(Ve.$$.fragment),un=p(),j(Ge.$$.fragment),mn=p(),We=o("div"),j(Dt.$$.fragment),_n=p(),Fa=o("p"),bn=g("Get the public list of all the metrics on huggingface.co"),vn=p(),le=o("div"),j(Nt.$$.fragment),$n=p(),Da=o("p"),yn=g("Get the public list of all the models on huggingface.co"),kn=p(),j(Be.$$.fragment),wn=p(),j(Ke.$$.fragment),En=p(),Je=o("div"),j(qt.$$.fragment),An=p(),Na=o("p"),xn=g("Get the list of files in a given repo."),jn=p(),ge=o("div"),j(It.$$.fragment),Hn=p(),qa=o("p"),Fn=g("Get info on one specific model on huggingface.co"),Dn=p(),Ia=o("p"),Nn=g("Model can be private if you pass an acceptable token or are logged in."),qn=p(),j(Qe.$$.fragment),In=p(),ce=o("div"),j(Lt.$$.fragment),Ln=p(),La=o("p"),Tn=g("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Pn=p(),Tt=o("p"),On=g(`Note there are certain limitations. For more information about moving
repositories, please see
`),Pt=o("a"),Mn=g("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Rn=g("."),Sn=p(),j(Xe.$$.fragment),Un=p(),He=o("div"),j(Ot.$$.fragment),Cn=p(),Ta=o("p"),zn=g("Get the info object for a given repo of a given type."),Vn=p(),j(Ye.$$.fragment),Gn=p(),Ze=o("div"),j(Mt.$$.fragment),Wn=p(),Pa=o("p"),Bn=g(`Saves the passed access token so git can correctly authenticate the
user.`),Kn=p(),pe=o("div"),j(Rt.$$.fragment),Jn=p(),Oa=o("p"),Qn=g("Get info on one specific Space on huggingface.co."),Xn=p(),Ma=o("p"),Yn=g("Space can be private if you pass an acceptable token."),Zn=p(),j(et.$$.fragment),es=p(),tt=o("div"),j(St.$$.fragment),ts=p(),Ra=o("p"),as=g("Resets the user\u2019s access token."),os=p(),Fe=o("div"),j(Ut.$$.fragment),ns=p(),Sa=o("p"),ss=g("Update the visibility setting of a repository."),rs=p(),j(at.$$.fragment),is=p(),he=o("div"),j(Ct.$$.fragment),ls=p(),Ua=o("p"),gs=g(`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),cs=p(),j(ot.$$.fragment),ps=p(),j(nt.$$.fragment),hs=p(),st=o("div"),j(zt.$$.fragment),ds=p(),Ca=o("p"),fs=g("Call HF API to know \u201Cwhoami\u201D."),fo=p(),Ie=o("h2"),rt=o("a"),za=o("span"),j(Vt.$$.fragment),us=p(),Va=o("span"),ms=g("Hugging Face local storage"),uo=p(),Gt=o("p"),Ga=o("code"),_s=g("huggingface_hub"),bs=g(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),mo=p(),it=o("p"),vs=g("It does this using the "),pa=o("a"),$s=g("HfFolder"),ys=g(" utility, which saves data at the root of the user."),_o=p(),ne=o("div"),j(Wt.$$.fragment),ks=p(),lt=o("div"),j(Bt.$$.fragment),ws=p(),Wa=o("p"),Es=g("Deletes the token from storage. Does not fail if token does not exist."),As=p(),De=o("div"),j(Kt.$$.fragment),xs=p(),Ba=o("p"),js=g("Get token or None if not existent."),Hs=p(),Jt=o("p"),Fs=g("Note that a token can be also provided using the "),Ka=o("code"),Ds=g("HUGGING_FACE_HUB_TOKEN"),Ns=g(`
environment variable.`),qs=p(),gt=o("div"),j(Qt.$$.fragment),Is=p(),Ja=o("p"),Ls=g("Save token, creating folder as needed."),bo=p(),Le=o("h2"),ct=o("a"),Qa=o("span"),j(Xt.$$.fragment),Ts=p(),Xa=o("span"),Ps=g("Filtering helpers"),vo=p(),pt=o("p"),Os=g("Some helpers to filter repositories on the Hub are available in the "),Ya=o("code"),Ms=g("huggingface_hub"),Rs=g(" package."),$o=p(),be=o("div"),j(Yt.$$.fragment),Ss=p(),Za=o("p"),Us=g(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Cs=p(),j(ht.$$.fragment),yo=p(),ve=o("div"),j(Zt.$$.fragment),zs=p(),eo=o("p"),Vs=g(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Gs=p(),j(dt.$$.fragment),ko=p(),$e=o("div"),j(ea.$$.fragment),Ws=p(),to=o("p"),Bs=g(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ks=p(),j(ft.$$.fragment),wo=p(),ye=o("div"),j(ta.$$.fragment),Js=p(),ao=o("p"),Qs=g(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Xs=p(),j(ut.$$.fragment),this.h()},l(a){const v=Cr('[data-svelte="svelte-1phssyn"]',document.head);i=n(v,"META",{name:!0,content:!0}),v.forEach(t),$=h(a),u=n(a,"H1",{class:!0});var aa=s(u);l=n(aa,"A",{id:!0,class:!0,href:!0});var oo=s(l);d=n(oo,"SPAN",{});var no=s(d);H(r.$$.fragment,no),no.forEach(t),oo.forEach(t),m=h(aa),x=n(aa,"SPAN",{});var so=s(x);f=c(so,"Hugging Face Hub API"),so.forEach(t),aa.forEach(t),y=h(a),A=n(a,"P",{});var oa=s(A);k=c(oa,"Below is the documentation for the "),E=n(oa,"CODE",{});var ro=s(E);L=c(ro,"HfApi"),ro.forEach(t),T=c(oa,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),oa.forEach(t),R=h(a),_=n(a,"P",{});var na=s(_);P=c(na,"All methods from the "),U=n(na,"CODE",{});var io=s(U);S=c(io,"HfApi"),io.forEach(t),V=c(na,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),na.forEach(t),G=h(a),C=n(a,"P",{});var lo=s(C);W=c(lo,"The following approach uses the method from the root of the package:"),lo.forEach(t),Z=h(a),H(J.$$.fragment,a),se=h(a),ee=n(a,"P",{});var sa=s(ee);Q=c(sa,"The following approach uses the "),X=n(sa,"CODE",{});var go=s(X);Y=c(go,"HfApi"),go.forEach(t),de=c(sa," class:"),sa.forEach(t),fe=h(a),H(B.$$.fragment,a),te=h(a),K=n(a,"P",{});var ra=s(K);Ee=c(ra,"Using the "),ae=n(ra,"CODE",{});var co=s(ae);Ne=c(co,"HfApi"),co.forEach(t),Ae=c(ra," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ra.forEach(t),ue=h(a),I=n(a,"DIV",{class:!0});var O=s(I);H(oe.$$.fragment,O),la=h(O),me=n(O,"DIV",{class:!0});var ia=s(me);H(_e.$$.fragment,ia),ga=h(ia),qe=n(ia,"P",{});var po=s(qe);ca=c(po,"Create an empty repo on the HuggingFace Hub."),po.forEach(t),ia.forEach(t),Uo=h(O),re=n(O,"DIV",{class:!0});var ke=s(re);H(wt.$$.fragment,ke),Co=h(ke),ya=n(ke,"P",{});var ho=s(ya);zo=c(ho,"Get info on one specific dataset on huggingface.co."),ho.forEach(t),Vo=h(ke),ka=n(ke,"P",{});var er=s(ka);Go=c(er,"Dataset can be private if you pass an acceptable token."),er.forEach(t),Wo=h(ke),H(Me.$$.fragment,ke),ke.forEach(t),Bo=h(O),xe=n(O,"DIV",{class:!0});var ha=s(xe);H(Et.$$.fragment,ha),Ko=h(ha),wa=n(ha,"P",{});var tr=s(wa);Jo=c(tr,"Deletes a file in the given repo."),tr.forEach(t),Qo=h(ha),H(Re.$$.fragment,ha),ha.forEach(t),Xo=h(O),je=n(O,"DIV",{class:!0});var da=s(je);H(At.$$.fragment,da),Yo=h(da),Ea=n(da,"P",{});var ar=s(Ea);Zo=c(ar,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),ar.forEach(t),en=h(da),H(Se.$$.fragment,da),da.forEach(t),tn=h(O),Ue=n(O,"DIV",{class:!0});var Ao=s(Ue);H(xt.$$.fragment,Ao),an=h(Ao),Aa=n(Ao,"P",{});var or=s(Aa);on=c(or,"Gets all valid dataset tags as a nested namespace object."),or.forEach(t),Ao.forEach(t),nn=h(O),Ce=n(O,"DIV",{class:!0});var xo=s(Ce);H(jt.$$.fragment,xo),sn=h(xo),xa=n(xo,"P",{});var nr=s(xa);rn=c(nr,`Returns the repository name for a given model ID and optional
organization.`),nr.forEach(t),xo.forEach(t),ln=h(O),ze=n(O,"DIV",{class:!0});var jo=s(ze);H(Ht.$$.fragment,jo),gn=h(jo),ja=n(jo,"P",{});var sr=s(ja);cn=c(sr,"Gets all valid model tags as a nested namespace object"),sr.forEach(t),jo.forEach(t),pn=h(O),ie=n(O,"DIV",{class:!0});var mt=s(ie);H(Ft.$$.fragment,mt),hn=h(mt),Ha=n(mt,"P",{});var rr=s(Ha);dn=c(rr,"Get the public list of all the datasets on huggingface.co"),rr.forEach(t),fn=h(mt),H(Ve.$$.fragment,mt),un=h(mt),H(Ge.$$.fragment,mt),mt.forEach(t),mn=h(O),We=n(O,"DIV",{class:!0});var Ho=s(We);H(Dt.$$.fragment,Ho),_n=h(Ho),Fa=n(Ho,"P",{});var ir=s(Fa);bn=c(ir,"Get the public list of all the metrics on huggingface.co"),ir.forEach(t),Ho.forEach(t),vn=h(O),le=n(O,"DIV",{class:!0});var _t=s(le);H(Nt.$$.fragment,_t),$n=h(_t),Da=n(_t,"P",{});var lr=s(Da);yn=c(lr,"Get the public list of all the models on huggingface.co"),lr.forEach(t),kn=h(_t),H(Be.$$.fragment,_t),wn=h(_t),H(Ke.$$.fragment,_t),_t.forEach(t),En=h(O),Je=n(O,"DIV",{class:!0});var Fo=s(Je);H(qt.$$.fragment,Fo),An=h(Fo),Na=n(Fo,"P",{});var gr=s(Na);xn=c(gr,"Get the list of files in a given repo."),gr.forEach(t),Fo.forEach(t),jn=h(O),ge=n(O,"DIV",{class:!0});var bt=s(ge);H(It.$$.fragment,bt),Hn=h(bt),qa=n(bt,"P",{});var cr=s(qa);Fn=c(cr,"Get info on one specific model on huggingface.co"),cr.forEach(t),Dn=h(bt),Ia=n(bt,"P",{});var pr=s(Ia);Nn=c(pr,"Model can be private if you pass an acceptable token or are logged in."),pr.forEach(t),qn=h(bt),H(Qe.$$.fragment,bt),bt.forEach(t),In=h(O),ce=n(O,"DIV",{class:!0});var vt=s(ce);H(Lt.$$.fragment,vt),Ln=h(vt),La=n(vt,"P",{});var hr=s(La);Tn=c(hr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),hr.forEach(t),Pn=h(vt),Tt=n(vt,"P",{});var Do=s(Tt);On=c(Do,`Note there are certain limitations. For more information about moving
repositories, please see
`),Pt=n(Do,"A",{href:!0,rel:!0});var dr=s(Pt);Mn=c(dr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),dr.forEach(t),Rn=c(Do,"."),Do.forEach(t),Sn=h(vt),H(Xe.$$.fragment,vt),vt.forEach(t),Un=h(O),He=n(O,"DIV",{class:!0});var fa=s(He);H(Ot.$$.fragment,fa),Cn=h(fa),Ta=n(fa,"P",{});var fr=s(Ta);zn=c(fr,"Get the info object for a given repo of a given type."),fr.forEach(t),Vn=h(fa),H(Ye.$$.fragment,fa),fa.forEach(t),Gn=h(O),Ze=n(O,"DIV",{class:!0});var No=s(Ze);H(Mt.$$.fragment,No),Wn=h(No),Pa=n(No,"P",{});var ur=s(Pa);Bn=c(ur,`Saves the passed access token so git can correctly authenticate the
user.`),ur.forEach(t),No.forEach(t),Kn=h(O),pe=n(O,"DIV",{class:!0});var $t=s(pe);H(Rt.$$.fragment,$t),Jn=h($t),Oa=n($t,"P",{});var mr=s(Oa);Qn=c(mr,"Get info on one specific Space on huggingface.co."),mr.forEach(t),Xn=h($t),Ma=n($t,"P",{});var _r=s(Ma);Yn=c(_r,"Space can be private if you pass an acceptable token."),_r.forEach(t),Zn=h($t),H(et.$$.fragment,$t),$t.forEach(t),es=h(O),tt=n(O,"DIV",{class:!0});var qo=s(tt);H(St.$$.fragment,qo),ts=h(qo),Ra=n(qo,"P",{});var br=s(Ra);as=c(br,"Resets the user\u2019s access token."),br.forEach(t),qo.forEach(t),os=h(O),Fe=n(O,"DIV",{class:!0});var ua=s(Fe);H(Ut.$$.fragment,ua),ns=h(ua),Sa=n(ua,"P",{});var vr=s(Sa);ss=c(vr,"Update the visibility setting of a repository."),vr.forEach(t),rs=h(ua),H(at.$$.fragment,ua),ua.forEach(t),is=h(O),he=n(O,"DIV",{class:!0});var yt=s(he);H(Ct.$$.fragment,yt),ls=h(yt),Ua=n(yt,"P",{});var $r=s(Ua);gs=c($r,`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),$r.forEach(t),cs=h(yt),H(ot.$$.fragment,yt),ps=h(yt),H(nt.$$.fragment,yt),yt.forEach(t),hs=h(O),st=n(O,"DIV",{class:!0});var Io=s(st);H(zt.$$.fragment,Io),ds=h(Io),Ca=n(Io,"P",{});var yr=s(Ca);fs=c(yr,"Call HF API to know \u201Cwhoami\u201D."),yr.forEach(t),Io.forEach(t),O.forEach(t),fo=h(a),Ie=n(a,"H2",{class:!0});var Lo=s(Ie);rt=n(Lo,"A",{id:!0,class:!0,href:!0});var kr=s(rt);za=n(kr,"SPAN",{});var wr=s(za);H(Vt.$$.fragment,wr),wr.forEach(t),kr.forEach(t),us=h(Lo),Va=n(Lo,"SPAN",{});var Er=s(Va);ms=c(Er,"Hugging Face local storage"),Er.forEach(t),Lo.forEach(t),uo=h(a),Gt=n(a,"P",{});var Ys=s(Gt);Ga=n(Ys,"CODE",{});var Ar=s(Ga);_s=c(Ar,"huggingface_hub"),Ar.forEach(t),bs=c(Ys,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ys.forEach(t),mo=h(a),it=n(a,"P",{});var To=s(it);vs=c(To,"It does this using the "),pa=n(To,"A",{href:!0});var xr=s(pa);$s=c(xr,"HfFolder"),xr.forEach(t),ys=c(To," utility, which saves data at the root of the user."),To.forEach(t),_o=h(a),ne=n(a,"DIV",{class:!0});var kt=s(ne);H(Wt.$$.fragment,kt),ks=h(kt),lt=n(kt,"DIV",{class:!0});var Po=s(lt);H(Bt.$$.fragment,Po),ws=h(Po),Wa=n(Po,"P",{});var jr=s(Wa);Es=c(jr,"Deletes the token from storage. Does not fail if token does not exist."),jr.forEach(t),Po.forEach(t),As=h(kt),De=n(kt,"DIV",{class:!0});var ma=s(De);H(Kt.$$.fragment,ma),xs=h(ma),Ba=n(ma,"P",{});var Hr=s(Ba);js=c(Hr,"Get token or None if not existent."),Hr.forEach(t),Hs=h(ma),Jt=n(ma,"P",{});var Oo=s(Jt);Fs=c(Oo,"Note that a token can be also provided using the "),Ka=n(Oo,"CODE",{});var Fr=s(Ka);Ds=c(Fr,"HUGGING_FACE_HUB_TOKEN"),Fr.forEach(t),Ns=c(Oo,`
environment variable.`),Oo.forEach(t),ma.forEach(t),qs=h(kt),gt=n(kt,"DIV",{class:!0});var Mo=s(gt);H(Qt.$$.fragment,Mo),Is=h(Mo),Ja=n(Mo,"P",{});var Dr=s(Ja);Ls=c(Dr,"Save token, creating folder as needed."),Dr.forEach(t),Mo.forEach(t),kt.forEach(t),bo=h(a),Le=n(a,"H2",{class:!0});var Ro=s(Le);ct=n(Ro,"A",{id:!0,class:!0,href:!0});var Nr=s(ct);Qa=n(Nr,"SPAN",{});var qr=s(Qa);H(Xt.$$.fragment,qr),qr.forEach(t),Nr.forEach(t),Ts=h(Ro),Xa=n(Ro,"SPAN",{});var Ir=s(Xa);Ps=c(Ir,"Filtering helpers"),Ir.forEach(t),Ro.forEach(t),vo=h(a),pt=n(a,"P",{});var So=s(pt);Os=c(So,"Some helpers to filter repositories on the Hub are available in the "),Ya=n(So,"CODE",{});var Lr=s(Ya);Ms=c(Lr,"huggingface_hub"),Lr.forEach(t),Rs=c(So," package."),So.forEach(t),$o=h(a),be=n(a,"DIV",{class:!0});var _a=s(be);H(Yt.$$.fragment,_a),Ss=h(_a),Za=n(_a,"P",{});var Tr=s(Za);Us=c(Tr,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Tr.forEach(t),Cs=h(_a),H(ht.$$.fragment,_a),_a.forEach(t),yo=h(a),ve=n(a,"DIV",{class:!0});var ba=s(ve);H(Zt.$$.fragment,ba),zs=h(ba),eo=n(ba,"P",{});var Pr=s(eo);Vs=c(Pr,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Pr.forEach(t),Gs=h(ba),H(dt.$$.fragment,ba),ba.forEach(t),ko=h(a),$e=n(a,"DIV",{class:!0});var va=s($e);H(ea.$$.fragment,va),Ws=h(va),to=n(va,"P",{});var Or=s(to);Bs=c(Or,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Or.forEach(t),Ks=h(va),H(ft.$$.fragment,va),va.forEach(t),wo=h(a),ye=n(a,"DIV",{class:!0});var $a=s(ye);H(ta.$$.fragment,$a),Js=h($a),ao=n($a,"P",{});var Mr=s(ao);Qs=c(Mr,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Mr.forEach(t),Xs=h($a),H(ut.$$.fragment,$a),$a.forEach(t),this.h()},h(){w(i,"name","hf:doc:metadata"),w(i,"content",JSON.stringify(gi)),w(l,"id","huggingface_hub.HfApi"),w(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(l,"href","#huggingface_hub.HfApi"),w(u,"class","relative group"),w(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Pt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),w(Pt,"rel","nofollow"),w(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(rt,"id","huggingface_hub.HfFolder"),w(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(rt,"href","#huggingface_hub.HfFolder"),w(Ie,"class","relative group"),w(pa,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),w(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ct,"id","huggingface_hub.DatasetFilter"),w(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ct,"href","#huggingface_hub.DatasetFilter"),w(Le,"class","relative group"),w(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(a,v){e(document.head,i),b(a,$,v),b(a,u,v),e(u,l),e(l,d),F(r,d,null),e(u,m),e(u,x),e(x,f),b(a,y,v),b(a,A,v),e(A,k),e(A,E),e(E,L),e(A,T),b(a,R,v),b(a,_,v),e(_,P),e(_,U),e(U,S),e(_,V),b(a,G,v),b(a,C,v),e(C,W),b(a,Z,v),F(J,a,v),b(a,se,v),b(a,ee,v),e(ee,Q),e(ee,X),e(X,Y),e(ee,de),b(a,fe,v),F(B,a,v),b(a,te,v),b(a,K,v),e(K,Ee),e(K,ae),e(ae,Ne),e(K,Ae),b(a,ue,v),b(a,I,v),F(oe,I,null),e(I,la),e(I,me),F(_e,me,null),e(me,ga),e(me,qe),e(qe,ca),e(I,Uo),e(I,re),F(wt,re,null),e(re,Co),e(re,ya),e(ya,zo),e(re,Vo),e(re,ka),e(ka,Go),e(re,Wo),F(Me,re,null),e(I,Bo),e(I,xe),F(Et,xe,null),e(xe,Ko),e(xe,wa),e(wa,Jo),e(xe,Qo),F(Re,xe,null),e(I,Xo),e(I,je),F(At,je,null),e(je,Yo),e(je,Ea),e(Ea,Zo),e(je,en),F(Se,je,null),e(I,tn),e(I,Ue),F(xt,Ue,null),e(Ue,an),e(Ue,Aa),e(Aa,on),e(I,nn),e(I,Ce),F(jt,Ce,null),e(Ce,sn),e(Ce,xa),e(xa,rn),e(I,ln),e(I,ze),F(Ht,ze,null),e(ze,gn),e(ze,ja),e(ja,cn),e(I,pn),e(I,ie),F(Ft,ie,null),e(ie,hn),e(ie,Ha),e(Ha,dn),e(ie,fn),F(Ve,ie,null),e(ie,un),F(Ge,ie,null),e(I,mn),e(I,We),F(Dt,We,null),e(We,_n),e(We,Fa),e(Fa,bn),e(I,vn),e(I,le),F(Nt,le,null),e(le,$n),e(le,Da),e(Da,yn),e(le,kn),F(Be,le,null),e(le,wn),F(Ke,le,null),e(I,En),e(I,Je),F(qt,Je,null),e(Je,An),e(Je,Na),e(Na,xn),e(I,jn),e(I,ge),F(It,ge,null),e(ge,Hn),e(ge,qa),e(qa,Fn),e(ge,Dn),e(ge,Ia),e(Ia,Nn),e(ge,qn),F(Qe,ge,null),e(I,In),e(I,ce),F(Lt,ce,null),e(ce,Ln),e(ce,La),e(La,Tn),e(ce,Pn),e(ce,Tt),e(Tt,On),e(Tt,Pt),e(Pt,Mn),e(Tt,Rn),e(ce,Sn),F(Xe,ce,null),e(I,Un),e(I,He),F(Ot,He,null),e(He,Cn),e(He,Ta),e(Ta,zn),e(He,Vn),F(Ye,He,null),e(I,Gn),e(I,Ze),F(Mt,Ze,null),e(Ze,Wn),e(Ze,Pa),e(Pa,Bn),e(I,Kn),e(I,pe),F(Rt,pe,null),e(pe,Jn),e(pe,Oa),e(Oa,Qn),e(pe,Xn),e(pe,Ma),e(Ma,Yn),e(pe,Zn),F(et,pe,null),e(I,es),e(I,tt),F(St,tt,null),e(tt,ts),e(tt,Ra),e(Ra,as),e(I,os),e(I,Fe),F(Ut,Fe,null),e(Fe,ns),e(Fe,Sa),e(Sa,ss),e(Fe,rs),F(at,Fe,null),e(I,is),e(I,he),F(Ct,he,null),e(he,ls),e(he,Ua),e(Ua,gs),e(he,cs),F(ot,he,null),e(he,ps),F(nt,he,null),e(I,hs),e(I,st),F(zt,st,null),e(st,ds),e(st,Ca),e(Ca,fs),b(a,fo,v),b(a,Ie,v),e(Ie,rt),e(rt,za),F(Vt,za,null),e(Ie,us),e(Ie,Va),e(Va,ms),b(a,uo,v),b(a,Gt,v),e(Gt,Ga),e(Ga,_s),e(Gt,bs),b(a,mo,v),b(a,it,v),e(it,vs),e(it,pa),e(pa,$s),e(it,ys),b(a,_o,v),b(a,ne,v),F(Wt,ne,null),e(ne,ks),e(ne,lt),F(Bt,lt,null),e(lt,ws),e(lt,Wa),e(Wa,Es),e(ne,As),e(ne,De),F(Kt,De,null),e(De,xs),e(De,Ba),e(Ba,js),e(De,Hs),e(De,Jt),e(Jt,Fs),e(Jt,Ka),e(Ka,Ds),e(Jt,Ns),e(ne,qs),e(ne,gt),F(Qt,gt,null),e(gt,Is),e(gt,Ja),e(Ja,Ls),b(a,bo,v),b(a,Le,v),e(Le,ct),e(ct,Qa),F(Xt,Qa,null),e(Le,Ts),e(Le,Xa),e(Xa,Ps),b(a,vo,v),b(a,pt,v),e(pt,Os),e(pt,Ya),e(Ya,Ms),e(pt,Rs),b(a,$o,v),b(a,be,v),F(Yt,be,null),e(be,Ss),e(be,Za),e(Za,Us),e(be,Cs),F(ht,be,null),b(a,yo,v),b(a,ve,v),F(Zt,ve,null),e(ve,zs),e(ve,eo),e(eo,Vs),e(ve,Gs),F(dt,ve,null),b(a,ko,v),b(a,$e,v),F(ea,$e,null),e($e,Ws),e($e,to),e(to,Bs),e($e,Ks),F(ft,$e,null),b(a,wo,v),b(a,ye,v),F(ta,ye,null),e(ye,Js),e(ye,ao),e(ao,Qs),e(ye,Xs),F(ut,ye,null),Eo=!0},p(a,[v]){const aa={};v&2&&(aa.$$scope={dirty:v,ctx:a}),Me.$set(aa);const oo={};v&2&&(oo.$$scope={dirty:v,ctx:a}),Re.$set(oo);const no={};v&2&&(no.$$scope={dirty:v,ctx:a}),Se.$set(no);const so={};v&2&&(so.$$scope={dirty:v,ctx:a}),Ve.$set(so);const oa={};v&2&&(oa.$$scope={dirty:v,ctx:a}),Ge.$set(oa);const ro={};v&2&&(ro.$$scope={dirty:v,ctx:a}),Be.$set(ro);const na={};v&2&&(na.$$scope={dirty:v,ctx:a}),Ke.$set(na);const io={};v&2&&(io.$$scope={dirty:v,ctx:a}),Qe.$set(io);const lo={};v&2&&(lo.$$scope={dirty:v,ctx:a}),Xe.$set(lo);const sa={};v&2&&(sa.$$scope={dirty:v,ctx:a}),Ye.$set(sa);const go={};v&2&&(go.$$scope={dirty:v,ctx:a}),et.$set(go);const ra={};v&2&&(ra.$$scope={dirty:v,ctx:a}),at.$set(ra);const co={};v&2&&(co.$$scope={dirty:v,ctx:a}),ot.$set(co);const O={};v&2&&(O.$$scope={dirty:v,ctx:a}),nt.$set(O);const ia={};v&2&&(ia.$$scope={dirty:v,ctx:a}),ht.$set(ia);const po={};v&2&&(po.$$scope={dirty:v,ctx:a}),dt.$set(po);const ke={};v&2&&(ke.$$scope={dirty:v,ctx:a}),ft.$set(ke);const ho={};v&2&&(ho.$$scope={dirty:v,ctx:a}),ut.$set(ho)},i(a){Eo||(D(r.$$.fragment,a),D(J.$$.fragment,a),D(B.$$.fragment,a),D(oe.$$.fragment,a),D(_e.$$.fragment,a),D(wt.$$.fragment,a),D(Me.$$.fragment,a),D(Et.$$.fragment,a),D(Re.$$.fragment,a),D(At.$$.fragment,a),D(Se.$$.fragment,a),D(xt.$$.fragment,a),D(jt.$$.fragment,a),D(Ht.$$.fragment,a),D(Ft.$$.fragment,a),D(Ve.$$.fragment,a),D(Ge.$$.fragment,a),D(Dt.$$.fragment,a),D(Nt.$$.fragment,a),D(Be.$$.fragment,a),D(Ke.$$.fragment,a),D(qt.$$.fragment,a),D(It.$$.fragment,a),D(Qe.$$.fragment,a),D(Lt.$$.fragment,a),D(Xe.$$.fragment,a),D(Ot.$$.fragment,a),D(Ye.$$.fragment,a),D(Mt.$$.fragment,a),D(Rt.$$.fragment,a),D(et.$$.fragment,a),D(St.$$.fragment,a),D(Ut.$$.fragment,a),D(at.$$.fragment,a),D(Ct.$$.fragment,a),D(ot.$$.fragment,a),D(nt.$$.fragment,a),D(zt.$$.fragment,a),D(Vt.$$.fragment,a),D(Wt.$$.fragment,a),D(Bt.$$.fragment,a),D(Kt.$$.fragment,a),D(Qt.$$.fragment,a),D(Xt.$$.fragment,a),D(Yt.$$.fragment,a),D(ht.$$.fragment,a),D(Zt.$$.fragment,a),D(dt.$$.fragment,a),D(ea.$$.fragment,a),D(ft.$$.fragment,a),D(ta.$$.fragment,a),D(ut.$$.fragment,a),Eo=!0)},o(a){N(r.$$.fragment,a),N(J.$$.fragment,a),N(B.$$.fragment,a),N(oe.$$.fragment,a),N(_e.$$.fragment,a),N(wt.$$.fragment,a),N(Me.$$.fragment,a),N(Et.$$.fragment,a),N(Re.$$.fragment,a),N(At.$$.fragment,a),N(Se.$$.fragment,a),N(xt.$$.fragment,a),N(jt.$$.fragment,a),N(Ht.$$.fragment,a),N(Ft.$$.fragment,a),N(Ve.$$.fragment,a),N(Ge.$$.fragment,a),N(Dt.$$.fragment,a),N(Nt.$$.fragment,a),N(Be.$$.fragment,a),N(Ke.$$.fragment,a),N(qt.$$.fragment,a),N(It.$$.fragment,a),N(Qe.$$.fragment,a),N(Lt.$$.fragment,a),N(Xe.$$.fragment,a),N(Ot.$$.fragment,a),N(Ye.$$.fragment,a),N(Mt.$$.fragment,a),N(Rt.$$.fragment,a),N(et.$$.fragment,a),N(St.$$.fragment,a),N(Ut.$$.fragment,a),N(at.$$.fragment,a),N(Ct.$$.fragment,a),N(ot.$$.fragment,a),N(nt.$$.fragment,a),N(zt.$$.fragment,a),N(Vt.$$.fragment,a),N(Wt.$$.fragment,a),N(Bt.$$.fragment,a),N(Kt.$$.fragment,a),N(Qt.$$.fragment,a),N(Xt.$$.fragment,a),N(Yt.$$.fragment,a),N(ht.$$.fragment,a),N(Zt.$$.fragment,a),N(dt.$$.fragment,a),N(ea.$$.fragment,a),N(ft.$$.fragment,a),N(ta.$$.fragment,a),N(ut.$$.fragment,a),Eo=!1},d(a){t(i),a&&t($),a&&t(u),q(r),a&&t(y),a&&t(A),a&&t(R),a&&t(_),a&&t(G),a&&t(C),a&&t(Z),q(J,a),a&&t(se),a&&t(ee),a&&t(fe),q(B,a),a&&t(te),a&&t(K),a&&t(ue),a&&t(I),q(oe),q(_e),q(wt),q(Me),q(Et),q(Re),q(At),q(Se),q(xt),q(jt),q(Ht),q(Ft),q(Ve),q(Ge),q(Dt),q(Nt),q(Be),q(Ke),q(qt),q(It),q(Qe),q(Lt),q(Xe),q(Ot),q(Ye),q(Mt),q(Rt),q(et),q(St),q(Ut),q(at),q(Ct),q(ot),q(nt),q(zt),a&&t(fo),a&&t(Ie),q(Vt),a&&t(uo),a&&t(Gt),a&&t(mo),a&&t(it),a&&t(_o),a&&t(ne),q(Wt),q(Bt),q(Kt),q(Qt),a&&t(bo),a&&t(Le),q(Xt),a&&t(vo),a&&t(pt),a&&t($o),a&&t(be),q(Yt),q(ht),a&&t(yo),a&&t(ve),q(Zt),q(dt),a&&t(ko),a&&t($e),q(ea),q(ft),a&&t(wo),a&&t(ye),q(ta),q(ut)}}}const gi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function ci(M){return zr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _i extends Rr{constructor(i){super();Sr(this,i,ci,li,Ur,{})}}export{_i as default,gi as metadata};
