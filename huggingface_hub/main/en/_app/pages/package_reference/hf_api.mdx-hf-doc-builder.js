import{S as _i,i as bi,s as vi,e as a,k as g,w as j,t as c,M as $i,c as n,d as t,m as h,a as s,x,h as p,b as w,G as e,g as v,y as H,q,o as F,B as D,v as yi,L as Le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Te}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Hr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ki(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=c("RevisionNotFoundError"),O=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var L=s(l);b=p(L,"Raises the following errors:"),L.forEach(t),f=h(_),i=n(_,"UL",{});var S=s(i);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=p(G,"private"),G.forEach(t),A=p(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=p(W,"RevisionNotFoundError"),W.forEach(t),O=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,l,L),e(l,b),v(_,f,L),v(_,i,L),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(i,k),e(i,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function wi(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O,_,L,S,M,V,G,C,W,Z,J,re,ee,Q,X,Y,me,_e;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=g(),A=a("li"),k=a("a"),E=a("code"),I=c("ValueError"),P=c(`
if some parameter value is invalid`),O=g(),_=a("li"),L=a("a"),S=c("RepositoryNotFoundError"),M=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),G=c("private"),C=c(" and you do not have access."),W=g(),Z=a("li"),J=a("a"),re=c("RevisionNotFoundError"),ee=c(`
If the revision to download from cannot be found.`),Q=g(),X=a("li"),Y=a("a"),me=c("EntryNotFoundError"),_e=c(`
If the file to download cannot be found.`),this.h()},l(B){l=n(B,"P",{});var oe=s(l);b=p(oe,"Raises the following errors:"),oe.forEach(t),f=h(B),i=n(B,"UL",{});var K=s(i);d=n(K,"LI",{});var je=s(d);r=n(je,"A",{href:!0,rel:!0});var ae=s(r);m=n(ae,"CODE",{});var Pe=s(m);N=p(Pe,"HTTPError"),Pe.forEach(t),ae.forEach(t),u=p(je,`
if the HuggingFace API returned an error`),je.forEach(t),y=h(K),A=n(K,"LI",{});var xe=s(A);k=n(xe,"A",{href:!0,rel:!0});var be=s(k);E=n(be,"CODE",{});var T=s(E);I=p(T,"ValueError"),T.forEach(t),be.forEach(t),P=p(xe,`
if some parameter value is invalid`),xe.forEach(t),O=h(K),_=n(K,"LI",{});var ne=s(_);L=n(ne,"A",{href:!0});var bo=s(L);S=p(bo,"RepositoryNotFoundError"),bo.forEach(t),M=p(ne,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ne,"CODE",{});var ve=s(V);G=p(ve,"private"),ve.forEach(t),C=p(ne," and you do not have access."),ne.forEach(t),W=h(K),Z=n(K,"LI",{});var $e=s(Z);J=n($e,"A",{href:!0});var vo=s(J);re=p(vo,"RevisionNotFoundError"),vo.forEach(t),ee=p($e,`
If the revision to download from cannot be found.`),$e.forEach(t),Q=h(K),X=n(K,"LI",{});var Oe=s(X);Y=n(Oe,"A",{href:!0});var $o=s(Y);me=p($o,"EntryNotFoundError"),$o.forEach(t),_e=p(Oe,`
If the file to download cannot be found.`),Oe.forEach(t),K.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(L,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),w(Y,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){v(B,l,oe),e(l,b),v(B,f,oe),v(B,i,oe),e(i,d),e(d,r),e(r,m),e(m,N),e(d,u),e(i,y),e(i,A),e(A,k),e(k,E),e(E,I),e(A,P),e(i,O),e(i,_),e(_,L),e(L,S),e(_,M),e(_,V),e(V,G),e(_,C),e(i,W),e(i,Z),e(Z,J),e(J,re),e(Z,ee),e(i,Q),e(i,X),e(X,Y),e(Y,me),e(X,_e)},d(B){B&&t(l),B&&t(f),B&&t(i)}}}function Ei(U){let l,b,f,i,d,r,m,N,u,y,A;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),this.h()},l(k){l=n(k,"P",{});var E=s(l);b=p(E,"Raises the following errors:"),E.forEach(t),f=h(k),i=n(k,"UL",{});var I=s(i);d=n(I,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var O=s(r);m=p(O,"RepositoryNotFoundError"),O.forEach(t),N=p(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(P,"CODE",{});var _=s(u);y=p(_,"private"),_.forEach(t),A=p(P," and you do not have access."),P.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){v(k,l,E),e(l,b),v(k,f,E),v(k,i,E),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A)},d(k){k&&t(l),k&&t(f),k&&t(i)}}}function Ai(U){let l,b,f,i,d,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("filter"),d=c(" argument:"),r=g(),j(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);i=p(A,"filter"),A.forEach(t),d=p(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,d),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function ji(U){let l,b,f,i,d,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("search"),d=c(" argument:"),r=g(),j(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);i=p(A,"search"),A.forEach(t),d=p(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,d),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function xi(U){let l,b,f,i,d,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("filter"),d=c(" argument:"),r=g(),j(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);i=p(A,"filter"),A.forEach(t),d=p(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,d),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function Hi(U){let l,b,f,i,d,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("search"),d=c(" argument:"),r=g(),j(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);i=p(A,"search"),A.forEach(t),d=p(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,d),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function qi(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=c("RevisionNotFoundError"),O=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var L=s(l);b=p(L,"Raises the following errors:"),L.forEach(t),f=h(_),i=n(_,"UL",{});var S=s(i);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=p(G,"private"),G.forEach(t),A=p(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=p(W,"RevisionNotFoundError"),W.forEach(t),O=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,l,L),e(l,b),v(_,f,L),v(_,i,L),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(i,k),e(i,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Fi(U){let l,b,f,i,d,r,m,N,u,y,A;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),this.h()},l(k){l=n(k,"P",{});var E=s(l);b=p(E,"Raises the following errors:"),E.forEach(t),f=h(k),i=n(k,"UL",{});var I=s(i);d=n(I,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var O=s(r);m=p(O,"RepositoryNotFoundError"),O.forEach(t),N=p(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(P,"CODE",{});var _=s(u);y=p(_,"private"),_.forEach(t),A=p(P," and you do not have access."),P.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){v(k,l,E),e(l,b),v(k,f,E),v(k,i,E),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A)},d(k){k&&t(l),k&&t(f),k&&t(i)}}}function Di(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=c("RevisionNotFoundError"),O=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var L=s(l);b=p(L,"Raises the following errors:"),L.forEach(t),f=h(_),i=n(_,"UL",{});var S=s(i);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=p(G,"private"),G.forEach(t),A=p(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=p(W,"RevisionNotFoundError"),W.forEach(t),O=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,l,L),e(l,b),v(_,f,L),v(_,i,L),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(i,k),e(i,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Ni(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=c("RevisionNotFoundError"),O=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var L=s(l);b=p(L,"Raises the following errors:"),L.forEach(t),f=h(_),i=n(_,"UL",{});var S=s(i);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=p(G,"private"),G.forEach(t),A=p(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=p(W,"RevisionNotFoundError"),W.forEach(t),O=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,l,L),e(l,b),v(_,f,L),v(_,i,L),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(i,k),e(i,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Ti(U){let l,b,f,i,d,r,m,N,u,y,A;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),A=c(" and you do not have access."),this.h()},l(k){l=n(k,"P",{});var E=s(l);b=p(E,"Raises the following errors:"),E.forEach(t),f=h(k),i=n(k,"UL",{});var I=s(i);d=n(I,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var O=s(r);m=p(O,"RepositoryNotFoundError"),O.forEach(t),N=p(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(P,"CODE",{});var _=s(u);y=p(_,"private"),_.forEach(t),A=p(P," and you do not have access."),P.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){v(k,l,E),e(l,b),v(k,f,E),v(k,i,E),e(i,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A)},d(k){k&&t(l),k&&t(f),k&&t(i)}}}function Ii(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O,_,L,S,M,V,G,C,W,Z,J,re,ee;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=g(),A=a("li"),k=a("a"),E=a("code"),I=c("ValueError"),P=c(`
if some parameter value is invalid`),O=g(),_=a("li"),L=a("a"),S=c("RepositoryNotFoundError"),M=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),G=c("private"),C=c(" and you do not have access."),W=g(),Z=a("li"),J=a("a"),re=c("RevisionNotFoundError"),ee=c(`
If the revision to download from cannot be found.`),this.h()},l(Q){l=n(Q,"P",{});var X=s(l);b=p(X,"Raises the following errors:"),X.forEach(t),f=h(Q),i=n(Q,"UL",{});var Y=s(i);d=n(Y,"LI",{});var me=s(d);r=n(me,"A",{href:!0,rel:!0});var _e=s(r);m=n(_e,"CODE",{});var B=s(m);N=p(B,"HTTPError"),B.forEach(t),_e.forEach(t),u=p(me,`
if the HuggingFace API returned an error`),me.forEach(t),y=h(Y),A=n(Y,"LI",{});var oe=s(A);k=n(oe,"A",{href:!0,rel:!0});var K=s(k);E=n(K,"CODE",{});var je=s(E);I=p(je,"ValueError"),je.forEach(t),K.forEach(t),P=p(oe,`
if some parameter value is invalid`),oe.forEach(t),O=h(Y),_=n(Y,"LI",{});var ae=s(_);L=n(ae,"A",{href:!0});var Pe=s(L);S=p(Pe,"RepositoryNotFoundError"),Pe.forEach(t),M=p(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var xe=s(V);G=p(xe,"private"),xe.forEach(t),C=p(ae," and you do not have access."),ae.forEach(t),W=h(Y),Z=n(Y,"LI",{});var be=s(Z);J=n(be,"A",{href:!0});var T=s(J);re=p(T,"RevisionNotFoundError"),T.forEach(t),ee=p(be,`
If the revision to download from cannot be found.`),be.forEach(t),Y.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(L,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){v(Q,l,X),e(l,b),v(Q,f,X),v(Q,i,X),e(i,d),e(d,r),e(r,m),e(m,N),e(d,u),e(i,y),e(i,A),e(A,k),e(k,E),e(E,I),e(A,P),e(i,O),e(i,_),e(_,L),e(L,S),e(_,M),e(_,V),e(V,G),e(_,C),e(i,W),e(i,Z),e(Z,J),e(J,re),e(Z,ee)},d(Q){Q&&t(l),Q&&t(f),Q&&t(i)}}}function Li(U){let l,b,f,i,d;return i=new fe({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    path_or_fileobj=<span class="hljs-string">&quot;.\\\\local\\\\file\\\\path&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-model&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){l=a("p"),b=c("Example usage:"),f=g(),j(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example usage:"),m.forEach(t),f=h(r),x(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),d=!0},p:Le,i(r){d||(q(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Pi(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=g(),A=a("li"),k=a("a"),E=a("code"),I=c("ValueError"),P=c(`
if some parameter value is invalid`),this.h()},l(O){l=n(O,"P",{});var _=s(l);b=p(_,"Raises the following errors:"),_.forEach(t),f=h(O),i=n(O,"UL",{});var L=s(i);d=n(L,"LI",{});var S=s(d);r=n(S,"A",{href:!0,rel:!0});var M=s(r);m=n(M,"CODE",{});var V=s(m);N=p(V,"HTTPError"),V.forEach(t),M.forEach(t),u=p(S,`
if the HuggingFace API returned an error`),S.forEach(t),y=h(L),A=n(L,"LI",{});var G=s(A);k=n(G,"A",{href:!0,rel:!0});var C=s(k);E=n(C,"CODE",{});var W=s(E);I=p(W,"ValueError"),W.forEach(t),C.forEach(t),P=p(G,`
if some parameter value is invalid`),G.forEach(t),L.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow")},m(O,_){v(O,l,_),e(l,b),v(O,f,_),v(O,i,_),e(i,d),e(d,r),e(r,m),e(m,N),e(d,u),e(i,y),e(i,A),e(A,k),e(k,E),e(E,I),e(A,P)},d(O){O&&t(l),O&&t(f),O&&t(i)}}}function Oi(U){let l,b,f,i,d;return i=new fe({props:{code:`upload_file(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
)

upload_file(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
    create_pr=True,
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/main/remote/experiment/checkpoints&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/refs%2Fpr%2F1/remote/experiment/checkpoints&quot;</span>
`}}),{c(){l=a("p"),b=c("Example usage:"),f=g(),j(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example usage:"),m.forEach(t),f=h(r),x(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),d=!0},p:Le,i(r){d||(q(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Ri(U){let l,b,f,i,d;return i=new fe({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){l=a("p"),b=c("Examples:"),f=g(),j(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Examples:"),m.forEach(t),f=h(r),x(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),d=!0},p:Le,i(r){d||(q(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Ui(U){let l,b;return l=new fe({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(l.$$.fragment)},l(f){x(l.$$.fragment,f)},m(f,i){H(l,f,i),b=!0},p:Le,i(f){b||(q(l.$$.fragment,f),b=!0)},o(f){F(l.$$.fragment,f),b=!1},d(f){D(l,f)}}}function Mi(U){let l,b,f,i,d;return i=new fe({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){l=a("p"),b=c("Example:"),f=g(),j(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example:"),m.forEach(t),f=h(r),x(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),d=!0},p:Le,i(r){d||(q(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Si(U){let l,b,f,i,d;return i=new fe({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){l=a("p"),b=c("Example:"),f=g(),j(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example:"),m.forEach(t),f=h(r),x(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),d=!0},p:Le,i(r){d||(q(i.$$.fragment,r),d=!0)},o(r){F(i.$$.fragment,r),d=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Ci(U){let l,b,f,i,d,r,m,N,u,y,A,k,E,I,P,O,_,L,S,M,V,G,C,W,Z,J,re,ee,Q,X,Y,me,_e,B,oe,K,je,ae,Pe,xe,be,T,ne,bo,ve,$e,vo,Oe,$o,on,Me,Ht,an,Do,nn,sn,ie,qt,rn,No,ln,cn,To,pn,gn,Se,hn,He,Ft,dn,Io,un,fn,Ce,mn,qe,Dt,_n,Lo,bn,vn,ze,$n,Ve,Nt,yn,Po,kn,wn,Ge,Tt,En,Oo,An,jn,We,It,xn,Ro,Hn,qn,le,Lt,Fn,Uo,Dn,Nn,Be,Tn,Ke,In,Je,Pt,Ln,Mo,Pn,On,ce,Ot,Rn,So,Un,Mn,Qe,Sn,Xe,Cn,Ye,Rt,zn,Co,Vn,Gn,pe,Ut,Wn,zo,Bn,Kn,Vo,Jn,Qn,Ze,Xn,ge,Mt,Yn,Go,Zn,es,St,ts,Ct,os,as,ns,et,ss,Fe,zt,rs,Wo,is,ls,tt,cs,ot,Vt,ps,Bo,gs,hs,he,Gt,ds,Ko,us,fs,Jo,ms,_s,at,bs,nt,Wt,vs,Qo,$s,ys,De,Bt,ks,Xo,ws,Es,st,As,de,Kt,js,Yo,xs,Hs,rt,qs,it,Fs,te,Jt,Ds,Zo,Ns,Ts,ea,Is,Ls,Qt,Ps,ta,Os,Rs,Us,lt,Ms,ct,Ss,pt,Xt,Cs,oa,zs,Ha,Re,gt,aa,Yt,Vs,na,Gs,qa,Zt,sa,Ws,Bs,Fa,ht,Ks,yo,Js,Qs,Da,se,eo,Xs,dt,to,Ys,ra,Zs,er,Ne,oo,tr,ia,or,ar,ao,nr,la,sr,rr,ir,ut,no,lr,ca,cr,Na,Ue,ft,pa,so,pr,ga,gr,Ta,mt,hr,ha,dr,ur,Ia,ye,ro,fr,da,mr,_r,_t,La,ke,io,br,ua,vr,$r,bt,Pa,we,lo,yr,fa,kr,wr,vt,Oa,Ee,co,Er,ma,Ar,jr,$t,Ra;return r=new Hr({}),J=new fe({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new fe({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ne=new z({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L561"}}),$e=new z({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which the commit will be created, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<code>Iterable</code> of <code>CommitOperation</code>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><code>CommitOperationAdd</code> to upload a file</li>
<li><code>CommitOperationDelete</code> to delete a file</li>
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1726",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Ht=new z({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1343",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),qt=new z({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1140",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),Se=new Te({props:{$$slots:{default:[ki]},$$scope:{ctx:U}}}),Ft=new z({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2136"}}),Ce=new Te({props:{$$slots:{default:[wi]},$$scope:{ctx:U}}}),Dt=new z({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1473"}}),ze=new Te({props:{$$slots:{default:[Ei]},$$scope:{ctx:U}}}),Nt=new z({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L682"}}),Tt=new z({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2214",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),It=new z({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L674"}}),Lt=new z({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L900"}}),Be=new Ie({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Ai]},$$scope:{ctx:U}}}),Ke=new Ie({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[ji]},$$scope:{ctx:U}}}),Pt=new z({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1065",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ot=new z({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L692"}}),Qe=new Ie({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[xi]},$$scope:{ctx:U}}}),Xe=new Ie({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Hi]},$$scope:{ctx:U}}}),Rt=new z({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1303",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ut=new z({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1079",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),Ze=new Te({props:{$$slots:{default:[qi]},$$scope:{ctx:U}}}),Mt=new z({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1648"}}),et=new Te({props:{$$slots:{default:[Fi]},$$scope:{ctx:U}}}),zt=new z({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1248",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),tt=new Te({props:{$$slots:{default:[Di]},$$scope:{ctx:U}}}),Vt=new z({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L655"}}),Gt=new z({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1194",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),at=new Te({props:{$$slots:{default:[Ni]},$$scope:{ctx:U}}}),Wt=new z({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L667"}}),Bt=new z({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1573",returnDescription:`
<p>The HTTP response in json.</p>
`}}),st=new Te({props:{$$slots:{default:[Ti]},$$scope:{ctx:U}}}),Kt=new z({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1847",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),rt=new Te({props:{$$slots:{default:[Ii]},$$scope:{ctx:U}}}),it=new Ie({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Li]},$$scope:{ctx:U}}}),Jt=new z({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1992",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),lt=new Te({props:{$$slots:{default:[Pi]},$$scope:{ctx:U}}}),ct=new Ie({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Oi]},$$scope:{ctx:U}}}),Xt=new z({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L565"}}),Yt=new Hr({}),eo=new z({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2249"}}),to=new z({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2286"}}),oo=new z({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2265",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),no=new z({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2252"}}),so=new Hr({}),ro=new z({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),_t=new Ie({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Ri]},$$scope:{ctx:U}}}),io=new z({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),bt=new Ie({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Ui]},$$scope:{ctx:U}}}),lo=new z({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L449"}}),vt=new Ie({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Mi]},$$scope:{ctx:U}}}),co=new z({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L411"}}),$t=new Ie({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Si]},$$scope:{ctx:U}}}),{c(){l=a("meta"),b=g(),f=a("h1"),i=a("a"),d=a("span"),j(r.$$.fragment),m=g(),N=a("span"),u=c("Hugging Face Hub API"),y=g(),A=a("p"),k=c("Below is the documentation for the "),E=a("code"),I=c("HfApi"),P=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=g(),_=a("p"),L=c("All methods from the "),S=a("code"),M=c("HfApi"),V=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),G=g(),C=a("p"),W=c("The following approach uses the method from the root of the package:"),Z=g(),j(J.$$.fragment),re=g(),ee=a("p"),Q=c("The following approach uses the "),X=a("code"),Y=c("HfApi"),me=c(" class:"),_e=g(),j(B.$$.fragment),oe=g(),K=a("p"),je=c("Using the "),ae=a("code"),Pe=c("HfApi"),xe=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),be=g(),T=a("div"),j(ne.$$.fragment),bo=g(),ve=a("div"),j($e.$$.fragment),vo=g(),Oe=a("p"),$o=c("Creates a commit in the given repo, deleting & uploading files as needed."),on=g(),Me=a("div"),j(Ht.$$.fragment),an=g(),Do=a("p"),nn=c("Create an empty repo on the HuggingFace Hub."),sn=g(),ie=a("div"),j(qt.$$.fragment),rn=g(),No=a("p"),ln=c("Get info on one specific dataset on huggingface.co."),cn=g(),To=a("p"),pn=c("Dataset can be private if you pass an acceptable token."),gn=g(),j(Se.$$.fragment),hn=g(),He=a("div"),j(Ft.$$.fragment),dn=g(),Io=a("p"),un=c("Deletes a file in the given repo."),fn=g(),j(Ce.$$.fragment),mn=g(),qe=a("div"),j(Dt.$$.fragment),_n=g(),Lo=a("p"),bn=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),vn=g(),j(ze.$$.fragment),$n=g(),Ve=a("div"),j(Nt.$$.fragment),yn=g(),Po=a("p"),kn=c("Gets all valid dataset tags as a nested namespace object."),wn=g(),Ge=a("div"),j(Tt.$$.fragment),En=g(),Oo=a("p"),An=c(`Returns the repository name for a given model ID and optional
organization.`),jn=g(),We=a("div"),j(It.$$.fragment),xn=g(),Ro=a("p"),Hn=c("Gets all valid model tags as a nested namespace object"),qn=g(),le=a("div"),j(Lt.$$.fragment),Fn=g(),Uo=a("p"),Dn=c("Get the public list of all the datasets on huggingface.co"),Nn=g(),j(Be.$$.fragment),Tn=g(),j(Ke.$$.fragment),In=g(),Je=a("div"),j(Pt.$$.fragment),Ln=g(),Mo=a("p"),Pn=c("Get the public list of all the metrics on huggingface.co"),On=g(),ce=a("div"),j(Ot.$$.fragment),Rn=g(),So=a("p"),Un=c("Get the public list of all the models on huggingface.co"),Mn=g(),j(Qe.$$.fragment),Sn=g(),j(Xe.$$.fragment),Cn=g(),Ye=a("div"),j(Rt.$$.fragment),zn=g(),Co=a("p"),Vn=c("Get the list of files in a given repo."),Gn=g(),pe=a("div"),j(Ut.$$.fragment),Wn=g(),zo=a("p"),Bn=c("Get info on one specific model on huggingface.co"),Kn=g(),Vo=a("p"),Jn=c("Model can be private if you pass an acceptable token or are logged in."),Qn=g(),j(Ze.$$.fragment),Xn=g(),ge=a("div"),j(Mt.$$.fragment),Yn=g(),Go=a("p"),Zn=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),es=g(),St=a("p"),ts=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ct=a("a"),os=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),as=c("."),ns=g(),j(et.$$.fragment),ss=g(),Fe=a("div"),j(zt.$$.fragment),rs=g(),Wo=a("p"),is=c("Get the info object for a given repo of a given type."),ls=g(),j(tt.$$.fragment),cs=g(),ot=a("div"),j(Vt.$$.fragment),ps=g(),Bo=a("p"),gs=c(`Saves the passed access token so git can correctly authenticate the
user.`),hs=g(),he=a("div"),j(Gt.$$.fragment),ds=g(),Ko=a("p"),us=c("Get info on one specific Space on huggingface.co."),fs=g(),Jo=a("p"),ms=c("Space can be private if you pass an acceptable token."),_s=g(),j(at.$$.fragment),bs=g(),nt=a("div"),j(Wt.$$.fragment),vs=g(),Qo=a("p"),$s=c("Resets the user\u2019s access token."),ys=g(),De=a("div"),j(Bt.$$.fragment),ks=g(),Xo=a("p"),ws=c("Update the visibility setting of a repository."),Es=g(),j(st.$$.fragment),As=g(),de=a("div"),j(Kt.$$.fragment),js=g(),Yo=a("p"),xs=c(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Hs=g(),j(rt.$$.fragment),qs=g(),j(it.$$.fragment),Fs=g(),te=a("div"),j(Jt.$$.fragment),Ds=g(),Zo=a("p"),Ns=c(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ts=g(),ea=a("p"),Is=c(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Ls=g(),Qt=a("p"),Ps=c("Uses "),ta=a("code"),Os=c("HfApi.create_commit"),Rs=c(" under the hood."),Us=g(),j(lt.$$.fragment),Ms=g(),j(ct.$$.fragment),Ss=g(),pt=a("div"),j(Xt.$$.fragment),Cs=g(),oa=a("p"),zs=c("Call HF API to know \u201Cwhoami\u201D."),Ha=g(),Re=a("h2"),gt=a("a"),aa=a("span"),j(Yt.$$.fragment),Vs=g(),na=a("span"),Gs=c("Hugging Face local storage"),qa=g(),Zt=a("p"),sa=a("code"),Ws=c("huggingface_hub"),Bs=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Fa=g(),ht=a("p"),Ks=c("It does this using the "),yo=a("a"),Js=c("HfFolder"),Qs=c(" utility, which saves data at the root of the user."),Da=g(),se=a("div"),j(eo.$$.fragment),Xs=g(),dt=a("div"),j(to.$$.fragment),Ys=g(),ra=a("p"),Zs=c("Deletes the token from storage. Does not fail if token does not exist."),er=g(),Ne=a("div"),j(oo.$$.fragment),tr=g(),ia=a("p"),or=c("Get token or None if not existent."),ar=g(),ao=a("p"),nr=c("Note that a token can be also provided using the "),la=a("code"),sr=c("HUGGING_FACE_HUB_TOKEN"),rr=c(`
environment variable.`),ir=g(),ut=a("div"),j(no.$$.fragment),lr=g(),ca=a("p"),cr=c("Save token, creating folder as needed."),Na=g(),Ue=a("h2"),ft=a("a"),pa=a("span"),j(so.$$.fragment),pr=g(),ga=a("span"),gr=c("Filtering helpers"),Ta=g(),mt=a("p"),hr=c("Some helpers to filter repositories on the Hub are available in the "),ha=a("code"),dr=c("huggingface_hub"),ur=c(" package."),Ia=g(),ye=a("div"),j(ro.$$.fragment),fr=g(),da=a("p"),mr=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),_r=g(),j(_t.$$.fragment),La=g(),ke=a("div"),j(io.$$.fragment),br=g(),ua=a("p"),vr=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),$r=g(),j(bt.$$.fragment),Pa=g(),we=a("div"),j(lo.$$.fragment),yr=g(),fa=a("p"),kr=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),wr=g(),j(vt.$$.fragment),Oa=g(),Ee=a("div"),j(co.$$.fragment),Er=g(),ma=a("p"),Ar=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),jr=g(),j($t.$$.fragment),this.h()},l(o){const $=$i('[data-svelte="svelte-1phssyn"]',document.head);l=n($,"META",{name:!0,content:!0}),$.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var po=s(f);i=n(po,"A",{id:!0,class:!0,href:!0});var _a=s(i);d=n(_a,"SPAN",{});var ba=s(d);x(r.$$.fragment,ba),ba.forEach(t),_a.forEach(t),m=h(po),N=n(po,"SPAN",{});var va=s(N);u=p(va,"Hugging Face Hub API"),va.forEach(t),po.forEach(t),y=h(o),A=n(o,"P",{});var go=s(A);k=p(go,"Below is the documentation for the "),E=n(go,"CODE",{});var $a=s(E);I=p($a,"HfApi"),$a.forEach(t),P=p(go,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),go.forEach(t),O=h(o),_=n(o,"P",{});var ho=s(_);L=p(ho,"All methods from the "),S=n(ho,"CODE",{});var ya=s(S);M=p(ya,"HfApi"),ya.forEach(t),V=p(ho,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),ho.forEach(t),G=h(o),C=n(o,"P",{});var ka=s(C);W=p(ka,"The following approach uses the method from the root of the package:"),ka.forEach(t),Z=h(o),x(J.$$.fragment,o),re=h(o),ee=n(o,"P",{});var uo=s(ee);Q=p(uo,"The following approach uses the "),X=n(uo,"CODE",{});var wa=s(X);Y=p(wa,"HfApi"),wa.forEach(t),me=p(uo," class:"),uo.forEach(t),_e=h(o),x(B.$$.fragment,o),oe=h(o),K=n(o,"P",{});var fo=s(K);je=p(fo,"Using the "),ae=n(fo,"CODE",{});var Ea=s(ae);Pe=p(Ea,"HfApi"),Ea.forEach(t),xe=p(fo," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),fo.forEach(t),be=h(o),T=n(o,"DIV",{class:!0});var R=s(T);x(ne.$$.fragment,R),bo=h(R),ve=n(R,"DIV",{class:!0});var mo=s(ve);x($e.$$.fragment,mo),vo=h(mo),Oe=n(mo,"P",{});var Aa=s(Oe);$o=p(Aa,"Creates a commit in the given repo, deleting & uploading files as needed."),Aa.forEach(t),mo.forEach(t),on=h(R),Me=n(R,"DIV",{class:!0});var _o=s(Me);x(Ht.$$.fragment,_o),an=h(_o),Do=n(_o,"P",{});var ja=s(Do);nn=p(ja,"Create an empty repo on the HuggingFace Hub."),ja.forEach(t),_o.forEach(t),sn=h(R),ie=n(R,"DIV",{class:!0});var Ae=s(ie);x(qt.$$.fragment,Ae),rn=h(Ae),No=n(Ae,"P",{});var xa=s(No);ln=p(xa,"Get info on one specific dataset on huggingface.co."),xa.forEach(t),cn=h(Ae),To=n(Ae,"P",{});var qr=s(To);pn=p(qr,"Dataset can be private if you pass an acceptable token."),qr.forEach(t),gn=h(Ae),x(Se.$$.fragment,Ae),Ae.forEach(t),hn=h(R),He=n(R,"DIV",{class:!0});var ko=s(He);x(Ft.$$.fragment,ko),dn=h(ko),Io=n(ko,"P",{});var Fr=s(Io);un=p(Fr,"Deletes a file in the given repo."),Fr.forEach(t),fn=h(ko),x(Ce.$$.fragment,ko),ko.forEach(t),mn=h(R),qe=n(R,"DIV",{class:!0});var wo=s(qe);x(Dt.$$.fragment,wo),_n=h(wo),Lo=n(wo,"P",{});var Dr=s(Lo);bn=p(Dr,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Dr.forEach(t),vn=h(wo),x(ze.$$.fragment,wo),wo.forEach(t),$n=h(R),Ve=n(R,"DIV",{class:!0});var Ua=s(Ve);x(Nt.$$.fragment,Ua),yn=h(Ua),Po=n(Ua,"P",{});var Nr=s(Po);kn=p(Nr,"Gets all valid dataset tags as a nested namespace object."),Nr.forEach(t),Ua.forEach(t),wn=h(R),Ge=n(R,"DIV",{class:!0});var Ma=s(Ge);x(Tt.$$.fragment,Ma),En=h(Ma),Oo=n(Ma,"P",{});var Tr=s(Oo);An=p(Tr,`Returns the repository name for a given model ID and optional
organization.`),Tr.forEach(t),Ma.forEach(t),jn=h(R),We=n(R,"DIV",{class:!0});var Sa=s(We);x(It.$$.fragment,Sa),xn=h(Sa),Ro=n(Sa,"P",{});var Ir=s(Ro);Hn=p(Ir,"Gets all valid model tags as a nested namespace object"),Ir.forEach(t),Sa.forEach(t),qn=h(R),le=n(R,"DIV",{class:!0});var yt=s(le);x(Lt.$$.fragment,yt),Fn=h(yt),Uo=n(yt,"P",{});var Lr=s(Uo);Dn=p(Lr,"Get the public list of all the datasets on huggingface.co"),Lr.forEach(t),Nn=h(yt),x(Be.$$.fragment,yt),Tn=h(yt),x(Ke.$$.fragment,yt),yt.forEach(t),In=h(R),Je=n(R,"DIV",{class:!0});var Ca=s(Je);x(Pt.$$.fragment,Ca),Ln=h(Ca),Mo=n(Ca,"P",{});var Pr=s(Mo);Pn=p(Pr,"Get the public list of all the metrics on huggingface.co"),Pr.forEach(t),Ca.forEach(t),On=h(R),ce=n(R,"DIV",{class:!0});var kt=s(ce);x(Ot.$$.fragment,kt),Rn=h(kt),So=n(kt,"P",{});var Or=s(So);Un=p(Or,"Get the public list of all the models on huggingface.co"),Or.forEach(t),Mn=h(kt),x(Qe.$$.fragment,kt),Sn=h(kt),x(Xe.$$.fragment,kt),kt.forEach(t),Cn=h(R),Ye=n(R,"DIV",{class:!0});var za=s(Ye);x(Rt.$$.fragment,za),zn=h(za),Co=n(za,"P",{});var Rr=s(Co);Vn=p(Rr,"Get the list of files in a given repo."),Rr.forEach(t),za.forEach(t),Gn=h(R),pe=n(R,"DIV",{class:!0});var wt=s(pe);x(Ut.$$.fragment,wt),Wn=h(wt),zo=n(wt,"P",{});var Ur=s(zo);Bn=p(Ur,"Get info on one specific model on huggingface.co"),Ur.forEach(t),Kn=h(wt),Vo=n(wt,"P",{});var Mr=s(Vo);Jn=p(Mr,"Model can be private if you pass an acceptable token or are logged in."),Mr.forEach(t),Qn=h(wt),x(Ze.$$.fragment,wt),wt.forEach(t),Xn=h(R),ge=n(R,"DIV",{class:!0});var Et=s(ge);x(Mt.$$.fragment,Et),Yn=h(Et),Go=n(Et,"P",{});var Sr=s(Go);Zn=p(Sr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Sr.forEach(t),es=h(Et),St=n(Et,"P",{});var Va=s(St);ts=p(Va,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ct=n(Va,"A",{href:!0,rel:!0});var Cr=s(Ct);os=p(Cr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Cr.forEach(t),as=p(Va,"."),Va.forEach(t),ns=h(Et),x(et.$$.fragment,Et),Et.forEach(t),ss=h(R),Fe=n(R,"DIV",{class:!0});var Eo=s(Fe);x(zt.$$.fragment,Eo),rs=h(Eo),Wo=n(Eo,"P",{});var zr=s(Wo);is=p(zr,"Get the info object for a given repo of a given type."),zr.forEach(t),ls=h(Eo),x(tt.$$.fragment,Eo),Eo.forEach(t),cs=h(R),ot=n(R,"DIV",{class:!0});var Ga=s(ot);x(Vt.$$.fragment,Ga),ps=h(Ga),Bo=n(Ga,"P",{});var Vr=s(Bo);gs=p(Vr,`Saves the passed access token so git can correctly authenticate the
user.`),Vr.forEach(t),Ga.forEach(t),hs=h(R),he=n(R,"DIV",{class:!0});var At=s(he);x(Gt.$$.fragment,At),ds=h(At),Ko=n(At,"P",{});var Gr=s(Ko);us=p(Gr,"Get info on one specific Space on huggingface.co."),Gr.forEach(t),fs=h(At),Jo=n(At,"P",{});var Wr=s(Jo);ms=p(Wr,"Space can be private if you pass an acceptable token."),Wr.forEach(t),_s=h(At),x(at.$$.fragment,At),At.forEach(t),bs=h(R),nt=n(R,"DIV",{class:!0});var Wa=s(nt);x(Wt.$$.fragment,Wa),vs=h(Wa),Qo=n(Wa,"P",{});var Br=s(Qo);$s=p(Br,"Resets the user\u2019s access token."),Br.forEach(t),Wa.forEach(t),ys=h(R),De=n(R,"DIV",{class:!0});var Ao=s(De);x(Bt.$$.fragment,Ao),ks=h(Ao),Xo=n(Ao,"P",{});var Kr=s(Xo);ws=p(Kr,"Update the visibility setting of a repository."),Kr.forEach(t),Es=h(Ao),x(st.$$.fragment,Ao),Ao.forEach(t),As=h(R),de=n(R,"DIV",{class:!0});var jt=s(de);x(Kt.$$.fragment,jt),js=h(jt),Yo=n(jt,"P",{});var Jr=s(Yo);xs=p(Jr,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Jr.forEach(t),Hs=h(jt),x(rt.$$.fragment,jt),qs=h(jt),x(it.$$.fragment,jt),jt.forEach(t),Fs=h(R),te=n(R,"DIV",{class:!0});var ue=s(te);x(Jt.$$.fragment,ue),Ds=h(ue),Zo=n(ue,"P",{});var Qr=s(Zo);Ns=p(Qr,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Qr.forEach(t),Ts=h(ue),ea=n(ue,"P",{});var Xr=s(ea);Is=p(Xr,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Xr.forEach(t),Ls=h(ue),Qt=n(ue,"P",{});var Ba=s(Qt);Ps=p(Ba,"Uses "),ta=n(Ba,"CODE",{});var Yr=s(ta);Os=p(Yr,"HfApi.create_commit"),Yr.forEach(t),Rs=p(Ba," under the hood."),Ba.forEach(t),Us=h(ue),x(lt.$$.fragment,ue),Ms=h(ue),x(ct.$$.fragment,ue),ue.forEach(t),Ss=h(R),pt=n(R,"DIV",{class:!0});var Ka=s(pt);x(Xt.$$.fragment,Ka),Cs=h(Ka),oa=n(Ka,"P",{});var Zr=s(oa);zs=p(Zr,"Call HF API to know \u201Cwhoami\u201D."),Zr.forEach(t),Ka.forEach(t),R.forEach(t),Ha=h(o),Re=n(o,"H2",{class:!0});var Ja=s(Re);gt=n(Ja,"A",{id:!0,class:!0,href:!0});var ei=s(gt);aa=n(ei,"SPAN",{});var ti=s(aa);x(Yt.$$.fragment,ti),ti.forEach(t),ei.forEach(t),Vs=h(Ja),na=n(Ja,"SPAN",{});var oi=s(na);Gs=p(oi,"Hugging Face local storage"),oi.forEach(t),Ja.forEach(t),qa=h(o),Zt=n(o,"P",{});var xr=s(Zt);sa=n(xr,"CODE",{});var ai=s(sa);Ws=p(ai,"huggingface_hub"),ai.forEach(t),Bs=p(xr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),xr.forEach(t),Fa=h(o),ht=n(o,"P",{});var Qa=s(ht);Ks=p(Qa,"It does this using the "),yo=n(Qa,"A",{href:!0});var ni=s(yo);Js=p(ni,"HfFolder"),ni.forEach(t),Qs=p(Qa," utility, which saves data at the root of the user."),Qa.forEach(t),Da=h(o),se=n(o,"DIV",{class:!0});var xt=s(se);x(eo.$$.fragment,xt),Xs=h(xt),dt=n(xt,"DIV",{class:!0});var Xa=s(dt);x(to.$$.fragment,Xa),Ys=h(Xa),ra=n(Xa,"P",{});var si=s(ra);Zs=p(si,"Deletes the token from storage. Does not fail if token does not exist."),si.forEach(t),Xa.forEach(t),er=h(xt),Ne=n(xt,"DIV",{class:!0});var jo=s(Ne);x(oo.$$.fragment,jo),tr=h(jo),ia=n(jo,"P",{});var ri=s(ia);or=p(ri,"Get token or None if not existent."),ri.forEach(t),ar=h(jo),ao=n(jo,"P",{});var Ya=s(ao);nr=p(Ya,"Note that a token can be also provided using the "),la=n(Ya,"CODE",{});var ii=s(la);sr=p(ii,"HUGGING_FACE_HUB_TOKEN"),ii.forEach(t),rr=p(Ya,`
environment variable.`),Ya.forEach(t),jo.forEach(t),ir=h(xt),ut=n(xt,"DIV",{class:!0});var Za=s(ut);x(no.$$.fragment,Za),lr=h(Za),ca=n(Za,"P",{});var li=s(ca);cr=p(li,"Save token, creating folder as needed."),li.forEach(t),Za.forEach(t),xt.forEach(t),Na=h(o),Ue=n(o,"H2",{class:!0});var en=s(Ue);ft=n(en,"A",{id:!0,class:!0,href:!0});var ci=s(ft);pa=n(ci,"SPAN",{});var pi=s(pa);x(so.$$.fragment,pi),pi.forEach(t),ci.forEach(t),pr=h(en),ga=n(en,"SPAN",{});var gi=s(ga);gr=p(gi,"Filtering helpers"),gi.forEach(t),en.forEach(t),Ta=h(o),mt=n(o,"P",{});var tn=s(mt);hr=p(tn,"Some helpers to filter repositories on the Hub are available in the "),ha=n(tn,"CODE",{});var hi=s(ha);dr=p(hi,"huggingface_hub"),hi.forEach(t),ur=p(tn," package."),tn.forEach(t),Ia=h(o),ye=n(o,"DIV",{class:!0});var xo=s(ye);x(ro.$$.fragment,xo),fr=h(xo),da=n(xo,"P",{});var di=s(da);mr=p(di,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),di.forEach(t),_r=h(xo),x(_t.$$.fragment,xo),xo.forEach(t),La=h(o),ke=n(o,"DIV",{class:!0});var Ho=s(ke);x(io.$$.fragment,Ho),br=h(Ho),ua=n(Ho,"P",{});var ui=s(ua);vr=p(ui,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ui.forEach(t),$r=h(Ho),x(bt.$$.fragment,Ho),Ho.forEach(t),Pa=h(o),we=n(o,"DIV",{class:!0});var qo=s(we);x(lo.$$.fragment,qo),yr=h(qo),fa=n(qo,"P",{});var fi=s(fa);kr=p(fi,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),fi.forEach(t),wr=h(qo),x(vt.$$.fragment,qo),qo.forEach(t),Oa=h(o),Ee=n(o,"DIV",{class:!0});var Fo=s(Ee);x(co.$$.fragment,Fo),Er=h(Fo),ma=n(Fo,"P",{});var mi=s(ma);Ar=p(mi,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),mi.forEach(t),jr=h(Fo),x($t.$$.fragment,Fo),Fo.forEach(t),this.h()},h(){w(l,"name","hf:doc:metadata"),w(l,"content",JSON.stringify(zi)),w(i,"id","huggingface_hub.HfApi"),w(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(i,"href","#huggingface_hub.HfApi"),w(f,"class","relative group"),w(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ct,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),w(Ct,"rel","nofollow"),w(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(gt,"id","huggingface_hub.HfFolder"),w(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(gt,"href","#huggingface_hub.HfFolder"),w(Re,"class","relative group"),w(yo,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),w(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ft,"id","huggingface_hub.DatasetFilter"),w(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ft,"href","#huggingface_hub.DatasetFilter"),w(Ue,"class","relative group"),w(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,$){e(document.head,l),v(o,b,$),v(o,f,$),e(f,i),e(i,d),H(r,d,null),e(f,m),e(f,N),e(N,u),v(o,y,$),v(o,A,$),e(A,k),e(A,E),e(E,I),e(A,P),v(o,O,$),v(o,_,$),e(_,L),e(_,S),e(S,M),e(_,V),v(o,G,$),v(o,C,$),e(C,W),v(o,Z,$),H(J,o,$),v(o,re,$),v(o,ee,$),e(ee,Q),e(ee,X),e(X,Y),e(ee,me),v(o,_e,$),H(B,o,$),v(o,oe,$),v(o,K,$),e(K,je),e(K,ae),e(ae,Pe),e(K,xe),v(o,be,$),v(o,T,$),H(ne,T,null),e(T,bo),e(T,ve),H($e,ve,null),e(ve,vo),e(ve,Oe),e(Oe,$o),e(T,on),e(T,Me),H(Ht,Me,null),e(Me,an),e(Me,Do),e(Do,nn),e(T,sn),e(T,ie),H(qt,ie,null),e(ie,rn),e(ie,No),e(No,ln),e(ie,cn),e(ie,To),e(To,pn),e(ie,gn),H(Se,ie,null),e(T,hn),e(T,He),H(Ft,He,null),e(He,dn),e(He,Io),e(Io,un),e(He,fn),H(Ce,He,null),e(T,mn),e(T,qe),H(Dt,qe,null),e(qe,_n),e(qe,Lo),e(Lo,bn),e(qe,vn),H(ze,qe,null),e(T,$n),e(T,Ve),H(Nt,Ve,null),e(Ve,yn),e(Ve,Po),e(Po,kn),e(T,wn),e(T,Ge),H(Tt,Ge,null),e(Ge,En),e(Ge,Oo),e(Oo,An),e(T,jn),e(T,We),H(It,We,null),e(We,xn),e(We,Ro),e(Ro,Hn),e(T,qn),e(T,le),H(Lt,le,null),e(le,Fn),e(le,Uo),e(Uo,Dn),e(le,Nn),H(Be,le,null),e(le,Tn),H(Ke,le,null),e(T,In),e(T,Je),H(Pt,Je,null),e(Je,Ln),e(Je,Mo),e(Mo,Pn),e(T,On),e(T,ce),H(Ot,ce,null),e(ce,Rn),e(ce,So),e(So,Un),e(ce,Mn),H(Qe,ce,null),e(ce,Sn),H(Xe,ce,null),e(T,Cn),e(T,Ye),H(Rt,Ye,null),e(Ye,zn),e(Ye,Co),e(Co,Vn),e(T,Gn),e(T,pe),H(Ut,pe,null),e(pe,Wn),e(pe,zo),e(zo,Bn),e(pe,Kn),e(pe,Vo),e(Vo,Jn),e(pe,Qn),H(Ze,pe,null),e(T,Xn),e(T,ge),H(Mt,ge,null),e(ge,Yn),e(ge,Go),e(Go,Zn),e(ge,es),e(ge,St),e(St,ts),e(St,Ct),e(Ct,os),e(St,as),e(ge,ns),H(et,ge,null),e(T,ss),e(T,Fe),H(zt,Fe,null),e(Fe,rs),e(Fe,Wo),e(Wo,is),e(Fe,ls),H(tt,Fe,null),e(T,cs),e(T,ot),H(Vt,ot,null),e(ot,ps),e(ot,Bo),e(Bo,gs),e(T,hs),e(T,he),H(Gt,he,null),e(he,ds),e(he,Ko),e(Ko,us),e(he,fs),e(he,Jo),e(Jo,ms),e(he,_s),H(at,he,null),e(T,bs),e(T,nt),H(Wt,nt,null),e(nt,vs),e(nt,Qo),e(Qo,$s),e(T,ys),e(T,De),H(Bt,De,null),e(De,ks),e(De,Xo),e(Xo,ws),e(De,Es),H(st,De,null),e(T,As),e(T,de),H(Kt,de,null),e(de,js),e(de,Yo),e(Yo,xs),e(de,Hs),H(rt,de,null),e(de,qs),H(it,de,null),e(T,Fs),e(T,te),H(Jt,te,null),e(te,Ds),e(te,Zo),e(Zo,Ns),e(te,Ts),e(te,ea),e(ea,Is),e(te,Ls),e(te,Qt),e(Qt,Ps),e(Qt,ta),e(ta,Os),e(Qt,Rs),e(te,Us),H(lt,te,null),e(te,Ms),H(ct,te,null),e(T,Ss),e(T,pt),H(Xt,pt,null),e(pt,Cs),e(pt,oa),e(oa,zs),v(o,Ha,$),v(o,Re,$),e(Re,gt),e(gt,aa),H(Yt,aa,null),e(Re,Vs),e(Re,na),e(na,Gs),v(o,qa,$),v(o,Zt,$),e(Zt,sa),e(sa,Ws),e(Zt,Bs),v(o,Fa,$),v(o,ht,$),e(ht,Ks),e(ht,yo),e(yo,Js),e(ht,Qs),v(o,Da,$),v(o,se,$),H(eo,se,null),e(se,Xs),e(se,dt),H(to,dt,null),e(dt,Ys),e(dt,ra),e(ra,Zs),e(se,er),e(se,Ne),H(oo,Ne,null),e(Ne,tr),e(Ne,ia),e(ia,or),e(Ne,ar),e(Ne,ao),e(ao,nr),e(ao,la),e(la,sr),e(ao,rr),e(se,ir),e(se,ut),H(no,ut,null),e(ut,lr),e(ut,ca),e(ca,cr),v(o,Na,$),v(o,Ue,$),e(Ue,ft),e(ft,pa),H(so,pa,null),e(Ue,pr),e(Ue,ga),e(ga,gr),v(o,Ta,$),v(o,mt,$),e(mt,hr),e(mt,ha),e(ha,dr),e(mt,ur),v(o,Ia,$),v(o,ye,$),H(ro,ye,null),e(ye,fr),e(ye,da),e(da,mr),e(ye,_r),H(_t,ye,null),v(o,La,$),v(o,ke,$),H(io,ke,null),e(ke,br),e(ke,ua),e(ua,vr),e(ke,$r),H(bt,ke,null),v(o,Pa,$),v(o,we,$),H(lo,we,null),e(we,yr),e(we,fa),e(fa,kr),e(we,wr),H(vt,we,null),v(o,Oa,$),v(o,Ee,$),H(co,Ee,null),e(Ee,Er),e(Ee,ma),e(ma,Ar),e(Ee,jr),H($t,Ee,null),Ra=!0},p(o,[$]){const po={};$&2&&(po.$$scope={dirty:$,ctx:o}),Se.$set(po);const _a={};$&2&&(_a.$$scope={dirty:$,ctx:o}),Ce.$set(_a);const ba={};$&2&&(ba.$$scope={dirty:$,ctx:o}),ze.$set(ba);const va={};$&2&&(va.$$scope={dirty:$,ctx:o}),Be.$set(va);const go={};$&2&&(go.$$scope={dirty:$,ctx:o}),Ke.$set(go);const $a={};$&2&&($a.$$scope={dirty:$,ctx:o}),Qe.$set($a);const ho={};$&2&&(ho.$$scope={dirty:$,ctx:o}),Xe.$set(ho);const ya={};$&2&&(ya.$$scope={dirty:$,ctx:o}),Ze.$set(ya);const ka={};$&2&&(ka.$$scope={dirty:$,ctx:o}),et.$set(ka);const uo={};$&2&&(uo.$$scope={dirty:$,ctx:o}),tt.$set(uo);const wa={};$&2&&(wa.$$scope={dirty:$,ctx:o}),at.$set(wa);const fo={};$&2&&(fo.$$scope={dirty:$,ctx:o}),st.$set(fo);const Ea={};$&2&&(Ea.$$scope={dirty:$,ctx:o}),rt.$set(Ea);const R={};$&2&&(R.$$scope={dirty:$,ctx:o}),it.$set(R);const mo={};$&2&&(mo.$$scope={dirty:$,ctx:o}),lt.$set(mo);const Aa={};$&2&&(Aa.$$scope={dirty:$,ctx:o}),ct.$set(Aa);const _o={};$&2&&(_o.$$scope={dirty:$,ctx:o}),_t.$set(_o);const ja={};$&2&&(ja.$$scope={dirty:$,ctx:o}),bt.$set(ja);const Ae={};$&2&&(Ae.$$scope={dirty:$,ctx:o}),vt.$set(Ae);const xa={};$&2&&(xa.$$scope={dirty:$,ctx:o}),$t.$set(xa)},i(o){Ra||(q(r.$$.fragment,o),q(J.$$.fragment,o),q(B.$$.fragment,o),q(ne.$$.fragment,o),q($e.$$.fragment,o),q(Ht.$$.fragment,o),q(qt.$$.fragment,o),q(Se.$$.fragment,o),q(Ft.$$.fragment,o),q(Ce.$$.fragment,o),q(Dt.$$.fragment,o),q(ze.$$.fragment,o),q(Nt.$$.fragment,o),q(Tt.$$.fragment,o),q(It.$$.fragment,o),q(Lt.$$.fragment,o),q(Be.$$.fragment,o),q(Ke.$$.fragment,o),q(Pt.$$.fragment,o),q(Ot.$$.fragment,o),q(Qe.$$.fragment,o),q(Xe.$$.fragment,o),q(Rt.$$.fragment,o),q(Ut.$$.fragment,o),q(Ze.$$.fragment,o),q(Mt.$$.fragment,o),q(et.$$.fragment,o),q(zt.$$.fragment,o),q(tt.$$.fragment,o),q(Vt.$$.fragment,o),q(Gt.$$.fragment,o),q(at.$$.fragment,o),q(Wt.$$.fragment,o),q(Bt.$$.fragment,o),q(st.$$.fragment,o),q(Kt.$$.fragment,o),q(rt.$$.fragment,o),q(it.$$.fragment,o),q(Jt.$$.fragment,o),q(lt.$$.fragment,o),q(ct.$$.fragment,o),q(Xt.$$.fragment,o),q(Yt.$$.fragment,o),q(eo.$$.fragment,o),q(to.$$.fragment,o),q(oo.$$.fragment,o),q(no.$$.fragment,o),q(so.$$.fragment,o),q(ro.$$.fragment,o),q(_t.$$.fragment,o),q(io.$$.fragment,o),q(bt.$$.fragment,o),q(lo.$$.fragment,o),q(vt.$$.fragment,o),q(co.$$.fragment,o),q($t.$$.fragment,o),Ra=!0)},o(o){F(r.$$.fragment,o),F(J.$$.fragment,o),F(B.$$.fragment,o),F(ne.$$.fragment,o),F($e.$$.fragment,o),F(Ht.$$.fragment,o),F(qt.$$.fragment,o),F(Se.$$.fragment,o),F(Ft.$$.fragment,o),F(Ce.$$.fragment,o),F(Dt.$$.fragment,o),F(ze.$$.fragment,o),F(Nt.$$.fragment,o),F(Tt.$$.fragment,o),F(It.$$.fragment,o),F(Lt.$$.fragment,o),F(Be.$$.fragment,o),F(Ke.$$.fragment,o),F(Pt.$$.fragment,o),F(Ot.$$.fragment,o),F(Qe.$$.fragment,o),F(Xe.$$.fragment,o),F(Rt.$$.fragment,o),F(Ut.$$.fragment,o),F(Ze.$$.fragment,o),F(Mt.$$.fragment,o),F(et.$$.fragment,o),F(zt.$$.fragment,o),F(tt.$$.fragment,o),F(Vt.$$.fragment,o),F(Gt.$$.fragment,o),F(at.$$.fragment,o),F(Wt.$$.fragment,o),F(Bt.$$.fragment,o),F(st.$$.fragment,o),F(Kt.$$.fragment,o),F(rt.$$.fragment,o),F(it.$$.fragment,o),F(Jt.$$.fragment,o),F(lt.$$.fragment,o),F(ct.$$.fragment,o),F(Xt.$$.fragment,o),F(Yt.$$.fragment,o),F(eo.$$.fragment,o),F(to.$$.fragment,o),F(oo.$$.fragment,o),F(no.$$.fragment,o),F(so.$$.fragment,o),F(ro.$$.fragment,o),F(_t.$$.fragment,o),F(io.$$.fragment,o),F(bt.$$.fragment,o),F(lo.$$.fragment,o),F(vt.$$.fragment,o),F(co.$$.fragment,o),F($t.$$.fragment,o),Ra=!1},d(o){t(l),o&&t(b),o&&t(f),D(r),o&&t(y),o&&t(A),o&&t(O),o&&t(_),o&&t(G),o&&t(C),o&&t(Z),D(J,o),o&&t(re),o&&t(ee),o&&t(_e),D(B,o),o&&t(oe),o&&t(K),o&&t(be),o&&t(T),D(ne),D($e),D(Ht),D(qt),D(Se),D(Ft),D(Ce),D(Dt),D(ze),D(Nt),D(Tt),D(It),D(Lt),D(Be),D(Ke),D(Pt),D(Ot),D(Qe),D(Xe),D(Rt),D(Ut),D(Ze),D(Mt),D(et),D(zt),D(tt),D(Vt),D(Gt),D(at),D(Wt),D(Bt),D(st),D(Kt),D(rt),D(it),D(Jt),D(lt),D(ct),D(Xt),o&&t(Ha),o&&t(Re),D(Yt),o&&t(qa),o&&t(Zt),o&&t(Fa),o&&t(ht),o&&t(Da),o&&t(se),D(eo),D(to),D(oo),D(no),o&&t(Na),o&&t(Ue),D(so),o&&t(Ta),o&&t(mt),o&&t(Ia),o&&t(ye),D(ro),D(_t),o&&t(La),o&&t(ke),D(io),D(bt),o&&t(Pa),o&&t(we),D(lo),D(vt),o&&t(Oa),o&&t(Ee),D(co),D($t)}}}const zi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Vi(U){return yi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xi extends _i{constructor(l){super();bi(this,l,Vi,Ci,vi,{})}}export{Xi as default,zi as metadata};
