import{S as ii,i as li,s as gi,e as o,k as h,w as j,t as g,M as ci,c as n,d as t,m as d,a as s,x as H,h as c,b as k,G as e,g as v,y as F,q as D,o as N,B as q,v as pi,L as Ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as yr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hi(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),w=h(),A=o("li"),T=o("a"),P=g("RevisionNotFoundError"),M=g(`
If the revision to download from cannot be found.`),this.h()},l(y){i=n(y,"P",{});var O=s(i);_=c(O,"Raises the following errors:"),O.forEach(t),f=d(y),l=n(y,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=c(V,"RepositoryNotFoundError"),V.forEach(t),E=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);b=c(G,"private"),G.forEach(t),x=c(U," and you do not have access."),U.forEach(t),w=d(S),A=n(S,"LI",{});var z=s(A);T=n(z,"A",{href:!0});var W=s(T);P=c(W,"RevisionNotFoundError"),W.forEach(t),M=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),S.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),k(T,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(y,O){v(y,i,O),e(i,_),v(y,f,O),v(y,l,O),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x),e(l,w),e(l,A),e(A,T),e(T,P),e(A,M)},d(y){y&&t(i),y&&t(f),y&&t(l)}}}function di(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M,y,O,S,U,V,G,z,W,Z,J,se,ee,Q,X,Y,ue,me;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=o("code"),E=g("HTTPError"),m=g(`
if the HuggingFace API returned an error`),b=h(),x=o("li"),w=o("a"),A=o("code"),T=g("ValueError"),P=g(`
if some parameter value is invalid`),M=h(),y=o("li"),O=o("a"),S=g("RepositoryNotFoundError"),U=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=o("code"),G=g("private"),z=g(" and you do not have access."),W=h(),Z=o("li"),J=o("a"),se=g("RevisionNotFoundError"),ee=g(`
If the revision to download from cannot be found.`),Q=h(),X=o("li"),Y=o("a"),ue=g("EntryNotFoundError"),me=g(`
If the file to download cannot be found.`),this.h()},l(B){i=n(B,"P",{});var te=s(i);_=c(te,"Raises the following errors:"),te.forEach(t),f=d(B),l=n(B,"UL",{});var K=s(l);p=n(K,"LI",{});var xe=s(p);r=n(xe,"A",{href:!0,rel:!0});var ae=s(r);u=n(ae,"CODE",{});var Te=s(u);E=c(Te,"HTTPError"),Te.forEach(t),ae.forEach(t),m=c(xe,`
if the HuggingFace API returned an error`),xe.forEach(t),b=d(K),x=n(K,"LI",{});var je=s(x);w=n(je,"A",{href:!0,rel:!0});var _e=s(w);A=n(_e,"CODE",{});var I=s(A);T=c(I,"ValueError"),I.forEach(t),_e.forEach(t),P=c(je,`
if some parameter value is invalid`),je.forEach(t),M=d(K),y=n(K,"LI",{});var oe=s(y);O=n(oe,"A",{href:!0});var _a=s(O);S=c(_a,"RepositoryNotFoundError"),_a.forEach(t),U=c(oe,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(oe,"CODE",{});var be=s(V);G=c(be,"private"),be.forEach(t),z=c(oe," and you do not have access."),oe.forEach(t),W=d(K),Z=n(K,"LI",{});var $e=s(Z);J=n($e,"A",{href:!0});var ba=s(J);se=c(ba,"RevisionNotFoundError"),ba.forEach(t),ee=c($e,`
If the revision to download from cannot be found.`),$e.forEach(t),Q=d(K),X=n(K,"LI",{});var Le=s(X);Y=n(Le,"A",{href:!0});var $a=s(Y);ue=c($a,"EntryNotFoundError"),$a.forEach(t),me=c(Le,`
If the file to download cannot be found.`),Le.forEach(t),K.forEach(t),this.h()},h(){k(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),k(r,"rel","nofollow"),k(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),k(w,"rel","nofollow"),k(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),k(J,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),k(Y,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,te){v(B,i,te),e(i,_),v(B,f,te),v(B,l,te),e(l,p),e(p,r),e(r,u),e(u,E),e(p,m),e(l,b),e(l,x),e(x,w),e(w,A),e(A,T),e(x,P),e(l,M),e(l,y),e(y,O),e(O,S),e(y,U),e(y,V),e(V,G),e(y,z),e(l,W),e(l,Z),e(Z,J),e(J,se),e(Z,ee),e(l,Q),e(l,X),e(X,Y),e(Y,ue),e(X,me)},d(B){B&&t(i),B&&t(f),B&&t(l)}}}function fi(R){let i,_,f,l,p,r,u,E,m,b,x;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),this.h()},l(w){i=n(w,"P",{});var A=s(i);_=c(A,"Raises the following errors:"),A.forEach(t),f=d(w),l=n(w,"UL",{});var T=s(l);p=n(T,"LI",{});var P=s(p);r=n(P,"A",{href:!0});var M=s(r);u=c(M,"RepositoryNotFoundError"),M.forEach(t),E=c(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(P,"CODE",{});var y=s(m);b=c(y,"private"),y.forEach(t),x=c(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,A){v(w,i,A),e(i,_),v(w,f,A),v(w,l,A),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x)},d(w){w&&t(i),w&&t(f),w&&t(l)}}}function ui(R){let i,_,f,l,p,r,u,E;return u=new Ae({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=o("p"),_=g("Example usage with the "),f=o("code"),l=g("filter"),p=g(" argument:"),r=h(),j(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=c(b,"Example usage with the "),f=n(b,"CODE",{});var x=s(f);l=c(x,"filter"),x.forEach(t),p=c(b," argument:"),b.forEach(t),r=d(m),H(u.$$.fragment,m)},m(m,b){v(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),v(m,r,b),F(u,m,b),E=!0},p:Ue,i(m){E||(D(u.$$.fragment,m),E=!0)},o(m){N(u.$$.fragment,m),E=!1},d(m){m&&t(i),m&&t(r),q(u,m)}}}function mi(R){let i,_,f,l,p,r,u,E;return u=new Ae({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),_=g("Example usage with the "),f=o("code"),l=g("search"),p=g(" argument:"),r=h(),j(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=c(b,"Example usage with the "),f=n(b,"CODE",{});var x=s(f);l=c(x,"search"),x.forEach(t),p=c(b," argument:"),b.forEach(t),r=d(m),H(u.$$.fragment,m)},m(m,b){v(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),v(m,r,b),F(u,m,b),E=!0},p:Ue,i(m){E||(D(u.$$.fragment,m),E=!0)},o(m){N(u.$$.fragment,m),E=!1},d(m){m&&t(i),m&&t(r),q(u,m)}}}function _i(R){let i,_,f,l,p,r,u,E;return u=new Ae({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=o("p"),_=g("Example usage with the "),f=o("code"),l=g("filter"),p=g(" argument:"),r=h(),j(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=c(b,"Example usage with the "),f=n(b,"CODE",{});var x=s(f);l=c(x,"filter"),x.forEach(t),p=c(b," argument:"),b.forEach(t),r=d(m),H(u.$$.fragment,m)},m(m,b){v(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),v(m,r,b),F(u,m,b),E=!0},p:Ue,i(m){E||(D(u.$$.fragment,m),E=!0)},o(m){N(u.$$.fragment,m),E=!1},d(m){m&&t(i),m&&t(r),q(u,m)}}}function bi(R){let i,_,f,l,p,r,u,E;return u=new Ae({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),_=g("Example usage with the "),f=o("code"),l=g("search"),p=g(" argument:"),r=h(),j(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=c(b,"Example usage with the "),f=n(b,"CODE",{});var x=s(f);l=c(x,"search"),x.forEach(t),p=c(b," argument:"),b.forEach(t),r=d(m),H(u.$$.fragment,m)},m(m,b){v(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),v(m,r,b),F(u,m,b),E=!0},p:Ue,i(m){E||(D(u.$$.fragment,m),E=!0)},o(m){N(u.$$.fragment,m),E=!1},d(m){m&&t(i),m&&t(r),q(u,m)}}}function $i(R){let i,_,f,l,p;return{c(){i=o("p"),_=g(`Warning: Deprecated, will be removed in v0.8. Please use
`),f=o("a"),l=g("HfApi.set_access_token()"),p=g(" instead."),this.h()},l(r){i=n(r,"P",{});var u=s(i);_=c(u,`Warning: Deprecated, will be removed in v0.8. Please use
`),f=n(u,"A",{href:!0});var E=s(f);l=c(E,"HfApi.set_access_token()"),E.forEach(t),p=c(u," instead."),u.forEach(t),this.h()},h(){k(f,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(r,u){v(r,i,u),e(i,_),e(i,f),e(f,l),e(i,p)},d(r){r&&t(i)}}}function vi(R){let i,_,f,l,p,r,u,E,m;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=o("code"),E=g("HTTPError"),m=g(`
if credentials are invalid`),this.h()},l(b){i=n(b,"P",{});var x=s(i);_=c(x,"Raises the following errors:"),x.forEach(t),f=d(b),l=n(b,"UL",{});var w=s(l);p=n(w,"LI",{});var A=s(p);r=n(A,"A",{href:!0,rel:!0});var T=s(r);u=n(T,"CODE",{});var P=s(u);E=c(P,"HTTPError"),P.forEach(t),T.forEach(t),m=c(A,`
if credentials are invalid`),A.forEach(t),w.forEach(t),this.h()},h(){k(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),k(r,"rel","nofollow")},m(b,x){v(b,i,x),e(i,_),v(b,f,x),v(b,l,x),e(l,p),e(p,r),e(r,u),e(u,E),e(p,m)},d(b){b&&t(i),b&&t(f),b&&t(l)}}}function yi(R){let i,_,f,l,p;return{c(){i=o("p"),_=g(`Warning: Deprecated, will be removed in v0.8. Please use
`),f=o("a"),l=g("HfApi.unset_access_token()"),p=g(" instead."),this.h()},l(r){i=n(r,"P",{});var u=s(i);_=c(u,`Warning: Deprecated, will be removed in v0.8. Please use
`),f=n(u,"A",{href:!0});var E=s(f);l=c(E,"HfApi.unset_access_token()"),E.forEach(t),p=c(u," instead."),u.forEach(t),this.h()},h(){k(f,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(r,u){v(r,i,u),e(i,_),e(i,f),e(f,l),e(i,p)},d(r){r&&t(i)}}}function ki(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),w=h(),A=o("li"),T=o("a"),P=g("RevisionNotFoundError"),M=g(`
If the revision to download from cannot be found.`),this.h()},l(y){i=n(y,"P",{});var O=s(i);_=c(O,"Raises the following errors:"),O.forEach(t),f=d(y),l=n(y,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=c(V,"RepositoryNotFoundError"),V.forEach(t),E=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);b=c(G,"private"),G.forEach(t),x=c(U," and you do not have access."),U.forEach(t),w=d(S),A=n(S,"LI",{});var z=s(A);T=n(z,"A",{href:!0});var W=s(T);P=c(W,"RevisionNotFoundError"),W.forEach(t),M=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),S.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),k(T,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(y,O){v(y,i,O),e(i,_),v(y,f,O),v(y,l,O),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x),e(l,w),e(l,A),e(A,T),e(T,P),e(A,M)},d(y){y&&t(i),y&&t(f),y&&t(l)}}}function wi(R){let i,_,f,l,p,r,u,E,m,b,x;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),this.h()},l(w){i=n(w,"P",{});var A=s(i);_=c(A,"Raises the following errors:"),A.forEach(t),f=d(w),l=n(w,"UL",{});var T=s(l);p=n(T,"LI",{});var P=s(p);r=n(P,"A",{href:!0});var M=s(r);u=c(M,"RepositoryNotFoundError"),M.forEach(t),E=c(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(P,"CODE",{});var y=s(m);b=c(y,"private"),y.forEach(t),x=c(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,A){v(w,i,A),e(i,_),v(w,f,A),v(w,l,A),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x)},d(w){w&&t(i),w&&t(f),w&&t(l)}}}function Ei(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),w=h(),A=o("li"),T=o("a"),P=g("RevisionNotFoundError"),M=g(`
If the revision to download from cannot be found.`),this.h()},l(y){i=n(y,"P",{});var O=s(i);_=c(O,"Raises the following errors:"),O.forEach(t),f=d(y),l=n(y,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=c(V,"RepositoryNotFoundError"),V.forEach(t),E=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);b=c(G,"private"),G.forEach(t),x=c(U," and you do not have access."),U.forEach(t),w=d(S),A=n(S,"LI",{});var z=s(A);T=n(z,"A",{href:!0});var W=s(T);P=c(W,"RevisionNotFoundError"),W.forEach(t),M=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),S.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),k(T,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(y,O){v(y,i,O),e(i,_),v(y,f,O),v(y,l,O),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x),e(l,w),e(l,A),e(A,T),e(T,P),e(A,M)},d(y){y&&t(i),y&&t(f),y&&t(l)}}}function Ai(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),w=h(),A=o("li"),T=o("a"),P=g("RevisionNotFoundError"),M=g(`
If the revision to download from cannot be found.`),this.h()},l(y){i=n(y,"P",{});var O=s(i);_=c(O,"Raises the following errors:"),O.forEach(t),f=d(y),l=n(y,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=c(V,"RepositoryNotFoundError"),V.forEach(t),E=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);b=c(G,"private"),G.forEach(t),x=c(U," and you do not have access."),U.forEach(t),w=d(S),A=n(S,"LI",{});var z=s(A);T=n(z,"A",{href:!0});var W=s(T);P=c(W,"RevisionNotFoundError"),W.forEach(t),M=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),S.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),k(T,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(y,O){v(y,i,O),e(i,_),v(y,f,O),v(y,l,O),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x),e(l,w),e(l,A),e(A,T),e(T,P),e(A,M)},d(y){y&&t(i),y&&t(f),y&&t(l)}}}function xi(R){let i,_,f,l,p,r,u,E,m,b,x;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=g("RepositoryNotFoundError"),E=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=o("code"),b=g("private"),x=g(" and you do not have access."),this.h()},l(w){i=n(w,"P",{});var A=s(i);_=c(A,"Raises the following errors:"),A.forEach(t),f=d(w),l=n(w,"UL",{});var T=s(l);p=n(T,"LI",{});var P=s(p);r=n(P,"A",{href:!0});var M=s(r);u=c(M,"RepositoryNotFoundError"),M.forEach(t),E=c(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(P,"CODE",{});var y=s(m);b=c(y,"private"),y.forEach(t),x=c(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){k(r,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,A){v(w,i,A),e(i,_),v(w,f,A),v(w,l,A),e(l,p),e(p,r),e(r,u),e(p,E),e(p,m),e(m,b),e(p,x)},d(w){w&&t(i),w&&t(f),w&&t(l)}}}function ji(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M,y,O,S,U,V,G,z,W,Z,J,se,ee;return{c(){i=o("p"),_=g("Raises the following errors:"),f=h(),l=o("ul"),p=o("li"),r=o("a"),u=o("code"),E=g("HTTPError"),m=g(`
if the HuggingFace API returned an error`),b=h(),x=o("li"),w=o("a"),A=o("code"),T=g("ValueError"),P=g(`
if some parameter value is invalid`),M=h(),y=o("li"),O=o("a"),S=g("RepositoryNotFoundError"),U=g(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=o("code"),G=g("private"),z=g(" and you do not have access."),W=h(),Z=o("li"),J=o("a"),se=g("RevisionNotFoundError"),ee=g(`
If the revision to download from cannot be found.`),this.h()},l(Q){i=n(Q,"P",{});var X=s(i);_=c(X,"Raises the following errors:"),X.forEach(t),f=d(Q),l=n(Q,"UL",{});var Y=s(l);p=n(Y,"LI",{});var ue=s(p);r=n(ue,"A",{href:!0,rel:!0});var me=s(r);u=n(me,"CODE",{});var B=s(u);E=c(B,"HTTPError"),B.forEach(t),me.forEach(t),m=c(ue,`
if the HuggingFace API returned an error`),ue.forEach(t),b=d(Y),x=n(Y,"LI",{});var te=s(x);w=n(te,"A",{href:!0,rel:!0});var K=s(w);A=n(K,"CODE",{});var xe=s(A);T=c(xe,"ValueError"),xe.forEach(t),K.forEach(t),P=c(te,`
if some parameter value is invalid`),te.forEach(t),M=d(Y),y=n(Y,"LI",{});var ae=s(y);O=n(ae,"A",{href:!0});var Te=s(O);S=c(Te,"RepositoryNotFoundError"),Te.forEach(t),U=c(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var je=s(V);G=c(je,"private"),je.forEach(t),z=c(ae," and you do not have access."),ae.forEach(t),W=d(Y),Z=n(Y,"LI",{});var _e=s(Z);J=n(_e,"A",{href:!0});var I=s(J);se=c(I,"RevisionNotFoundError"),I.forEach(t),ee=c(_e,`
If the revision to download from cannot be found.`),_e.forEach(t),Y.forEach(t),this.h()},h(){k(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),k(r,"rel","nofollow"),k(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),k(w,"rel","nofollow"),k(O,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),k(J,"href","/docs/huggingface_hub/main/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){v(Q,i,X),e(i,_),v(Q,f,X),v(Q,l,X),e(l,p),e(p,r),e(r,u),e(u,E),e(p,m),e(l,b),e(l,x),e(x,w),e(w,A),e(A,T),e(x,P),e(l,M),e(l,y),e(y,O),e(O,S),e(y,U),e(y,V),e(V,G),e(y,z),e(l,W),e(l,Z),e(Z,J),e(J,se),e(Z,ee)},d(Q){Q&&t(i),Q&&t(f),Q&&t(l)}}}function Hi(R){let i,_,f,l,p;return l=new Ae({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=o("p"),_=g("Example usage:"),f=h(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=c(u,"Example usage:"),u.forEach(t),f=d(r),H(l.$$.fragment,r)},m(r,u){v(r,i,u),e(i,_),v(r,f,u),F(l,r,u),p=!0},p:Ue,i(r){p||(D(l.$$.fragment,r),p=!0)},o(r){N(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),q(l,r)}}}function Fi(R){let i,_,f,l,p;return l=new Ae({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=o("p"),_=g("Examples:"),f=h(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=c(u,"Examples:"),u.forEach(t),f=d(r),H(l.$$.fragment,r)},m(r,u){v(r,i,u),e(i,_),v(r,f,u),F(l,r,u),p=!0},p:Ue,i(r){p||(D(l.$$.fragment,r),p=!0)},o(r){N(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),q(l,r)}}}function Di(R){let i,_;return i=new Ae({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(i.$$.fragment)},l(f){H(i.$$.fragment,f)},m(f,l){F(i,f,l),_=!0},p:Ue,i(f){_||(D(i.$$.fragment,f),_=!0)},o(f){N(i.$$.fragment,f),_=!1},d(f){q(i,f)}}}function Ni(R){let i,_,f,l,p;return l=new Ae({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),_=g("Example:"),f=h(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=c(u,"Example:"),u.forEach(t),f=d(r),H(l.$$.fragment,r)},m(r,u){v(r,i,u),e(i,_),v(r,f,u),F(l,r,u),p=!0},p:Ue,i(r){p||(D(l.$$.fragment,r),p=!0)},o(r){N(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),q(l,r)}}}function qi(R){let i,_,f,l,p;return l=new Ae({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),_=g("Example:"),f=h(),j(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=c(u,"Example:"),u.forEach(t),f=d(r),H(l.$$.fragment,r)},m(r,u){v(r,i,u),e(i,_),v(r,f,u),F(l,r,u),p=!0},p:Ue,i(r){p||(D(l.$$.fragment,r),p=!0)},o(r){N(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),q(l,r)}}}function Ii(R){let i,_,f,l,p,r,u,E,m,b,x,w,A,T,P,M,y,O,S,U,V,G,z,W,Z,J,se,ee,Q,X,Y,ue,me,B,te,K,xe,ae,Te,je,_e,I,oe,_a,be,$e,ba,Le,$a,en,re,Dt,tn,Da,an,on,Na,nn,sn,Se,rn,He,Nt,ln,qa,gn,cn,Ce,pn,Fe,qt,hn,Ia,dn,fn,ze,un,Ve,It,mn,Ta,_n,bn,Ge,Tt,$n,La,vn,yn,We,Lt,kn,Pa,wn,En,ie,Pt,An,Oa,xn,jn,Be,Hn,Ke,Fn,Je,Ot,Dn,Ra,Nn,qn,le,Rt,In,Ma,Tn,Ln,Qe,Pn,Xe,On,Ye,Mt,Rn,Ua,Mn,Un,ge,Ut,Sn,Sa,Cn,zn,Ze,Vn,et,Gn,De,St,Wn,Ca,Bn,Kn,tt,Jn,ce,Ct,Qn,za,Xn,Yn,Va,Zn,es,at,ts,pe,zt,as,Ga,os,ns,Vt,ss,Gt,rs,is,ls,ot,gs,Ne,Wt,cs,Wa,ps,hs,nt,ds,st,Bt,fs,Ba,us,ms,he,Kt,_s,Ka,bs,$s,Ja,vs,ys,rt,ks,it,Jt,ws,Qa,Es,As,qe,Qt,xs,Xa,js,Hs,lt,Fs,de,Xt,Ds,Ya,Ns,qs,gt,Is,ct,Ts,pt,Yt,Ls,Za,Ps,jo,Pe,ht,eo,Zt,Os,to,Rs,Ho,ea,ao,Ms,Us,Fo,dt,Ss,va,Cs,zs,Do,ne,ta,Vs,ft,aa,Gs,oo,Ws,Bs,Ie,oa,Ks,no,Js,Qs,na,Xs,so,Ys,Zs,er,ut,sa,tr,ro,ar,No,Oe,mt,io,ra,or,lo,nr,qo,_t,sr,go,rr,ir,Io,ve,ia,lr,co,gr,cr,bt,To,ye,la,pr,po,hr,dr,$t,Lo,ke,ga,fr,ho,ur,mr,vt,Po,we,ca,_r,fo,br,$r,yt,Oo;return r=new yr({}),J=new Ae({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new Ae({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),oe=new C({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L554"}}),$e=new C({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1421",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Dt=new C({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1214",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),Se=new fe({props:{$$slots:{default:[hi]},$$scope:{ctx:R}}}),Nt=new C({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1951"}}),Ce=new fe({props:{$$slots:{default:[di]},$$scope:{ctx:R}}}),qt=new C({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1551"}}),ze=new fe({props:{$$slots:{default:[fi]},$$scope:{ctx:R}}}),It=new C({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L753"}}),Tt=new C({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2017",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Lt=new C({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L745"}}),Pt=new C({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L972"}}),Be=new Me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[ui]},$$scope:{ctx:R}}}),Ke=new Me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[mi]},$$scope:{ctx:R}}}),Ot=new C({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1138",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Rt=new C({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L763"}}),Qe=new Me({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[_i]},$$scope:{ctx:R}}}),Xe=new Me({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[bi]},$$scope:{ctx:R}}}),Mt=new C({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1380",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ut=new C({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L558",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ze=new fe({props:{$$slots:{default:[$i]},$$scope:{ctx:R}}}),et=new fe({props:{$$slots:{default:[vi]},$$scope:{ctx:R}}}),St=new C({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L690"}}),tt=new fe({props:{$$slots:{default:[yi]},$$scope:{ctx:R}}}),Ct=new C({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1152",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),at=new fe({props:{$$slots:{default:[ki]},$$scope:{ctx:R}}}),zt=new C({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1730"}}),ot=new fe({props:{$$slots:{default:[wi]},$$scope:{ctx:R}}}),Wt=new C({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1324",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),nt=new fe({props:{$$slots:{default:[Ei]},$$scope:{ctx:R}}}),Bt=new C({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L726"}}),Kt=new C({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1269",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),rt=new fe({props:{$$slots:{default:[Ai]},$$scope:{ctx:R}}}),Jt=new C({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L738"}}),Qt=new C({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1654",returnDescription:`
<p>The HTTP response in json.</p>
`}}),lt=new fe({props:{$$slots:{default:[xi]},$$scope:{ctx:R}}}),Xt=new C({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.IO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Changing this value has no effect.`,name:"identical_ok"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1809",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),gt=new fe({props:{$$slots:{default:[ji]},$$scope:{ctx:R}}}),ct=new Me({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Hi]},$$scope:{ctx:R}}}),Yt=new C({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L600"}}),Zt=new yr({}),ta=new C({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2053"}}),aa=new C({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2090"}}),oa=new C({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2069",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),sa=new C({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2056"}}),ra=new yr({}),ia=new C({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),bt=new Me({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Fi]},$$scope:{ctx:R}}}),la=new C({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),$t=new Me({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Di]},$$scope:{ctx:R}}}),ga=new C({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L442"}}),vt=new Me({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Ni]},$$scope:{ctx:R}}}),ca=new C({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L404"}}),yt=new Me({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[qi]},$$scope:{ctx:R}}}),{c(){i=o("meta"),_=h(),f=o("h1"),l=o("a"),p=o("span"),j(r.$$.fragment),u=h(),E=o("span"),m=g("Hugging Face Hub API"),b=h(),x=o("p"),w=g("Below is the documentation for the "),A=o("code"),T=g("HfApi"),P=g(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),M=h(),y=o("p"),O=g("All methods from the "),S=o("code"),U=g("HfApi"),V=g(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),G=h(),z=o("p"),W=g("The following approach uses the method from the root of the package:"),Z=h(),j(J.$$.fragment),se=h(),ee=o("p"),Q=g("The following approach uses the "),X=o("code"),Y=g("HfApi"),ue=g(" class:"),me=h(),j(B.$$.fragment),te=h(),K=o("p"),xe=g("Using the "),ae=o("code"),Te=g("HfApi"),je=g(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),_e=h(),I=o("div"),j(oe.$$.fragment),_a=h(),be=o("div"),j($e.$$.fragment),ba=h(),Le=o("p"),$a=g("Create an empty repo on the HuggingFace Hub."),en=h(),re=o("div"),j(Dt.$$.fragment),tn=h(),Da=o("p"),an=g("Get info on one specific dataset on huggingface.co."),on=h(),Na=o("p"),nn=g("Dataset can be private if you pass an acceptable token."),sn=h(),j(Se.$$.fragment),rn=h(),He=o("div"),j(Nt.$$.fragment),ln=h(),qa=o("p"),gn=g("Deletes a file in the given repo."),cn=h(),j(Ce.$$.fragment),pn=h(),Fe=o("div"),j(qt.$$.fragment),hn=h(),Ia=o("p"),dn=g("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),fn=h(),j(ze.$$.fragment),un=h(),Ve=o("div"),j(It.$$.fragment),mn=h(),Ta=o("p"),_n=g("Gets all valid dataset tags as a nested namespace object."),bn=h(),Ge=o("div"),j(Tt.$$.fragment),$n=h(),La=o("p"),vn=g(`Returns the repository name for a given model ID and optional
organization.`),yn=h(),We=o("div"),j(Lt.$$.fragment),kn=h(),Pa=o("p"),wn=g("Gets all valid model tags as a nested namespace object"),En=h(),ie=o("div"),j(Pt.$$.fragment),An=h(),Oa=o("p"),xn=g("Get the public list of all the datasets on huggingface.co"),jn=h(),j(Be.$$.fragment),Hn=h(),j(Ke.$$.fragment),Fn=h(),Je=o("div"),j(Ot.$$.fragment),Dn=h(),Ra=o("p"),Nn=g("Get the public list of all the metrics on huggingface.co"),qn=h(),le=o("div"),j(Rt.$$.fragment),In=h(),Ma=o("p"),Tn=g("Get the public list of all the models on huggingface.co"),Ln=h(),j(Qe.$$.fragment),Pn=h(),j(Xe.$$.fragment),On=h(),Ye=o("div"),j(Mt.$$.fragment),Rn=h(),Ua=o("p"),Mn=g("Get the list of files in a given repo."),Un=h(),ge=o("div"),j(Ut.$$.fragment),Sn=h(),Sa=o("p"),Cn=g("Call HF API to sign in a user and get a token if credentials are valid."),zn=h(),j(Ze.$$.fragment),Vn=h(),j(et.$$.fragment),Gn=h(),De=o("div"),j(St.$$.fragment),Wn=h(),Ca=o("p"),Bn=g("Call HF API to log out."),Kn=h(),j(tt.$$.fragment),Jn=h(),ce=o("div"),j(Ct.$$.fragment),Qn=h(),za=o("p"),Xn=g("Get info on one specific model on huggingface.co"),Yn=h(),Va=o("p"),Zn=g("Model can be private if you pass an acceptable token or are logged in."),es=h(),j(at.$$.fragment),ts=h(),pe=o("div"),j(zt.$$.fragment),as=h(),Ga=o("p"),os=g("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ns=h(),Vt=o("p"),ss=g(`Note there are certain limitations. For more information about moving
repositories, please see
`),Gt=o("a"),rs=g("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),is=g("."),ls=h(),j(ot.$$.fragment),gs=h(),Ne=o("div"),j(Wt.$$.fragment),cs=h(),Wa=o("p"),ps=g("Get the info object for a given repo of a given type."),hs=h(),j(nt.$$.fragment),ds=h(),st=o("div"),j(Bt.$$.fragment),fs=h(),Ba=o("p"),us=g(`Saves the passed access token so git can correctly authenticate the
user.`),ms=h(),he=o("div"),j(Kt.$$.fragment),_s=h(),Ka=o("p"),bs=g("Get info on one specific Space on huggingface.co."),$s=h(),Ja=o("p"),vs=g("Space can be private if you pass an acceptable token."),ys=h(),j(rt.$$.fragment),ks=h(),it=o("div"),j(Jt.$$.fragment),ws=h(),Qa=o("p"),Es=g("Resets the user\u2019s access token."),As=h(),qe=o("div"),j(Qt.$$.fragment),xs=h(),Xa=o("p"),js=g("Update the visibility setting of a repository."),Hs=h(),j(lt.$$.fragment),Fs=h(),de=o("div"),j(Xt.$$.fragment),Ds=h(),Ya=o("p"),Ns=g(`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),qs=h(),j(gt.$$.fragment),Is=h(),j(ct.$$.fragment),Ts=h(),pt=o("div"),j(Yt.$$.fragment),Ls=h(),Za=o("p"),Ps=g("Call HF API to know \u201Cwhoami\u201D."),jo=h(),Pe=o("h2"),ht=o("a"),eo=o("span"),j(Zt.$$.fragment),Os=h(),to=o("span"),Rs=g("Hugging Face local storage"),Ho=h(),ea=o("p"),ao=o("code"),Ms=g("huggingface_hub"),Us=g(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Fo=h(),dt=o("p"),Ss=g("It does this using the "),va=o("a"),Cs=g("HfFolder"),zs=g(" utility, which saves data at the root of the user."),Do=h(),ne=o("div"),j(ta.$$.fragment),Vs=h(),ft=o("div"),j(aa.$$.fragment),Gs=h(),oo=o("p"),Ws=g("Deletes the token from storage. Does not fail if token does not exist."),Bs=h(),Ie=o("div"),j(oa.$$.fragment),Ks=h(),no=o("p"),Js=g("Get token or None if not existent."),Qs=h(),na=o("p"),Xs=g("Note that a token can be also provided using the "),so=o("code"),Ys=g("HUGGING_FACE_HUB_TOKEN"),Zs=g(`
environment variable.`),er=h(),ut=o("div"),j(sa.$$.fragment),tr=h(),ro=o("p"),ar=g("Save token, creating folder as needed."),No=h(),Oe=o("h2"),mt=o("a"),io=o("span"),j(ra.$$.fragment),or=h(),lo=o("span"),nr=g("Filtering helpers"),qo=h(),_t=o("p"),sr=g("Some helpers to filter repositories on the Hub are available in the "),go=o("code"),rr=g("huggingface_hub"),ir=g(" package."),Io=h(),ve=o("div"),j(ia.$$.fragment),lr=h(),co=o("p"),gr=g(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),cr=h(),j(bt.$$.fragment),To=h(),ye=o("div"),j(la.$$.fragment),pr=h(),po=o("p"),hr=g(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),dr=h(),j($t.$$.fragment),Lo=h(),ke=o("div"),j(ga.$$.fragment),fr=h(),ho=o("p"),ur=g(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),mr=h(),j(vt.$$.fragment),Po=h(),we=o("div"),j(ca.$$.fragment),_r=h(),fo=o("p"),br=g(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),$r=h(),j(yt.$$.fragment),this.h()},l(a){const $=ci('[data-svelte="svelte-1phssyn"]',document.head);i=n($,"META",{name:!0,content:!0}),$.forEach(t),_=d(a),f=n(a,"H1",{class:!0});var pa=s(f);l=n(pa,"A",{id:!0,class:!0,href:!0});var uo=s(l);p=n(uo,"SPAN",{});var mo=s(p);H(r.$$.fragment,mo),mo.forEach(t),uo.forEach(t),u=d(pa),E=n(pa,"SPAN",{});var _o=s(E);m=c(_o,"Hugging Face Hub API"),_o.forEach(t),pa.forEach(t),b=d(a),x=n(a,"P",{});var ha=s(x);w=c(ha,"Below is the documentation for the "),A=n(ha,"CODE",{});var bo=s(A);T=c(bo,"HfApi"),bo.forEach(t),P=c(ha,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),ha.forEach(t),M=d(a),y=n(a,"P",{});var da=s(y);O=c(da,"All methods from the "),S=n(da,"CODE",{});var $o=s(S);U=c($o,"HfApi"),$o.forEach(t),V=c(da,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),da.forEach(t),G=d(a),z=n(a,"P",{});var vo=s(z);W=c(vo,"The following approach uses the method from the root of the package:"),vo.forEach(t),Z=d(a),H(J.$$.fragment,a),se=d(a),ee=n(a,"P",{});var fa=s(ee);Q=c(fa,"The following approach uses the "),X=n(fa,"CODE",{});var yo=s(X);Y=c(yo,"HfApi"),yo.forEach(t),ue=c(fa," class:"),fa.forEach(t),me=d(a),H(B.$$.fragment,a),te=d(a),K=n(a,"P",{});var ua=s(K);xe=c(ua,"Using the "),ae=n(ua,"CODE",{});var ko=s(ae);Te=c(ko,"HfApi"),ko.forEach(t),je=c(ua," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ua.forEach(t),_e=d(a),I=n(a,"DIV",{class:!0});var L=s(I);H(oe.$$.fragment,L),_a=d(L),be=n(L,"DIV",{class:!0});var ma=s(be);H($e.$$.fragment,ma),ba=d(ma),Le=n(ma,"P",{});var wo=s(Le);$a=c(wo,"Create an empty repo on the HuggingFace Hub."),wo.forEach(t),ma.forEach(t),en=d(L),re=n(L,"DIV",{class:!0});var Ee=s(re);H(Dt.$$.fragment,Ee),tn=d(Ee),Da=n(Ee,"P",{});var Eo=s(Da);an=c(Eo,"Get info on one specific dataset on huggingface.co."),Eo.forEach(t),on=d(Ee),Na=n(Ee,"P",{});var Ao=s(Na);nn=c(Ao,"Dataset can be private if you pass an acceptable token."),Ao.forEach(t),sn=d(Ee),H(Se.$$.fragment,Ee),Ee.forEach(t),rn=d(L),He=n(L,"DIV",{class:!0});var Re=s(He);H(Nt.$$.fragment,Re),ln=d(Re),qa=n(Re,"P",{});var xo=s(qa);gn=c(xo,"Deletes a file in the given repo."),xo.forEach(t),cn=d(Re),H(Ce.$$.fragment,Re),Re.forEach(t),pn=d(L),Fe=n(L,"DIV",{class:!0});var ya=s(Fe);H(qt.$$.fragment,ya),hn=d(ya),Ia=n(ya,"P",{});var kr=s(Ia);dn=c(kr,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),kr.forEach(t),fn=d(ya),H(ze.$$.fragment,ya),ya.forEach(t),un=d(L),Ve=n(L,"DIV",{class:!0});var Ro=s(Ve);H(It.$$.fragment,Ro),mn=d(Ro),Ta=n(Ro,"P",{});var wr=s(Ta);_n=c(wr,"Gets all valid dataset tags as a nested namespace object."),wr.forEach(t),Ro.forEach(t),bn=d(L),Ge=n(L,"DIV",{class:!0});var Mo=s(Ge);H(Tt.$$.fragment,Mo),$n=d(Mo),La=n(Mo,"P",{});var Er=s(La);vn=c(Er,`Returns the repository name for a given model ID and optional
organization.`),Er.forEach(t),Mo.forEach(t),yn=d(L),We=n(L,"DIV",{class:!0});var Uo=s(We);H(Lt.$$.fragment,Uo),kn=d(Uo),Pa=n(Uo,"P",{});var Ar=s(Pa);wn=c(Ar,"Gets all valid model tags as a nested namespace object"),Ar.forEach(t),Uo.forEach(t),En=d(L),ie=n(L,"DIV",{class:!0});var kt=s(ie);H(Pt.$$.fragment,kt),An=d(kt),Oa=n(kt,"P",{});var xr=s(Oa);xn=c(xr,"Get the public list of all the datasets on huggingface.co"),xr.forEach(t),jn=d(kt),H(Be.$$.fragment,kt),Hn=d(kt),H(Ke.$$.fragment,kt),kt.forEach(t),Fn=d(L),Je=n(L,"DIV",{class:!0});var So=s(Je);H(Ot.$$.fragment,So),Dn=d(So),Ra=n(So,"P",{});var jr=s(Ra);Nn=c(jr,"Get the public list of all the metrics on huggingface.co"),jr.forEach(t),So.forEach(t),qn=d(L),le=n(L,"DIV",{class:!0});var wt=s(le);H(Rt.$$.fragment,wt),In=d(wt),Ma=n(wt,"P",{});var Hr=s(Ma);Tn=c(Hr,"Get the public list of all the models on huggingface.co"),Hr.forEach(t),Ln=d(wt),H(Qe.$$.fragment,wt),Pn=d(wt),H(Xe.$$.fragment,wt),wt.forEach(t),On=d(L),Ye=n(L,"DIV",{class:!0});var Co=s(Ye);H(Mt.$$.fragment,Co),Rn=d(Co),Ua=n(Co,"P",{});var Fr=s(Ua);Mn=c(Fr,"Get the list of files in a given repo."),Fr.forEach(t),Co.forEach(t),Un=d(L),ge=n(L,"DIV",{class:!0});var Et=s(ge);H(Ut.$$.fragment,Et),Sn=d(Et),Sa=n(Et,"P",{});var Dr=s(Sa);Cn=c(Dr,"Call HF API to sign in a user and get a token if credentials are valid."),Dr.forEach(t),zn=d(Et),H(Ze.$$.fragment,Et),Vn=d(Et),H(et.$$.fragment,Et),Et.forEach(t),Gn=d(L),De=n(L,"DIV",{class:!0});var ka=s(De);H(St.$$.fragment,ka),Wn=d(ka),Ca=n(ka,"P",{});var Nr=s(Ca);Bn=c(Nr,"Call HF API to log out."),Nr.forEach(t),Kn=d(ka),H(tt.$$.fragment,ka),ka.forEach(t),Jn=d(L),ce=n(L,"DIV",{class:!0});var At=s(ce);H(Ct.$$.fragment,At),Qn=d(At),za=n(At,"P",{});var qr=s(za);Xn=c(qr,"Get info on one specific model on huggingface.co"),qr.forEach(t),Yn=d(At),Va=n(At,"P",{});var Ir=s(Va);Zn=c(Ir,"Model can be private if you pass an acceptable token or are logged in."),Ir.forEach(t),es=d(At),H(at.$$.fragment,At),At.forEach(t),ts=d(L),pe=n(L,"DIV",{class:!0});var xt=s(pe);H(zt.$$.fragment,xt),as=d(xt),Ga=n(xt,"P",{});var Tr=s(Ga);os=c(Tr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Tr.forEach(t),ns=d(xt),Vt=n(xt,"P",{});var zo=s(Vt);ss=c(zo,`Note there are certain limitations. For more information about moving
repositories, please see
`),Gt=n(zo,"A",{href:!0,rel:!0});var Lr=s(Gt);rs=c(Lr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Lr.forEach(t),is=c(zo,"."),zo.forEach(t),ls=d(xt),H(ot.$$.fragment,xt),xt.forEach(t),gs=d(L),Ne=n(L,"DIV",{class:!0});var wa=s(Ne);H(Wt.$$.fragment,wa),cs=d(wa),Wa=n(wa,"P",{});var Pr=s(Wa);ps=c(Pr,"Get the info object for a given repo of a given type."),Pr.forEach(t),hs=d(wa),H(nt.$$.fragment,wa),wa.forEach(t),ds=d(L),st=n(L,"DIV",{class:!0});var Vo=s(st);H(Bt.$$.fragment,Vo),fs=d(Vo),Ba=n(Vo,"P",{});var Or=s(Ba);us=c(Or,`Saves the passed access token so git can correctly authenticate the
user.`),Or.forEach(t),Vo.forEach(t),ms=d(L),he=n(L,"DIV",{class:!0});var jt=s(he);H(Kt.$$.fragment,jt),_s=d(jt),Ka=n(jt,"P",{});var Rr=s(Ka);bs=c(Rr,"Get info on one specific Space on huggingface.co."),Rr.forEach(t),$s=d(jt),Ja=n(jt,"P",{});var Mr=s(Ja);vs=c(Mr,"Space can be private if you pass an acceptable token."),Mr.forEach(t),ys=d(jt),H(rt.$$.fragment,jt),jt.forEach(t),ks=d(L),it=n(L,"DIV",{class:!0});var Go=s(it);H(Jt.$$.fragment,Go),ws=d(Go),Qa=n(Go,"P",{});var Ur=s(Qa);Es=c(Ur,"Resets the user\u2019s access token."),Ur.forEach(t),Go.forEach(t),As=d(L),qe=n(L,"DIV",{class:!0});var Ea=s(qe);H(Qt.$$.fragment,Ea),xs=d(Ea),Xa=n(Ea,"P",{});var Sr=s(Xa);js=c(Sr,"Update the visibility setting of a repository."),Sr.forEach(t),Hs=d(Ea),H(lt.$$.fragment,Ea),Ea.forEach(t),Fs=d(L),de=n(L,"DIV",{class:!0});var Ht=s(de);H(Xt.$$.fragment,Ht),Ds=d(Ht),Ya=n(Ht,"P",{});var Cr=s(Ya);Ns=c(Cr,`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Cr.forEach(t),qs=d(Ht),H(gt.$$.fragment,Ht),Is=d(Ht),H(ct.$$.fragment,Ht),Ht.forEach(t),Ts=d(L),pt=n(L,"DIV",{class:!0});var Wo=s(pt);H(Yt.$$.fragment,Wo),Ls=d(Wo),Za=n(Wo,"P",{});var zr=s(Za);Ps=c(zr,"Call HF API to know \u201Cwhoami\u201D."),zr.forEach(t),Wo.forEach(t),L.forEach(t),jo=d(a),Pe=n(a,"H2",{class:!0});var Bo=s(Pe);ht=n(Bo,"A",{id:!0,class:!0,href:!0});var Vr=s(ht);eo=n(Vr,"SPAN",{});var Gr=s(eo);H(Zt.$$.fragment,Gr),Gr.forEach(t),Vr.forEach(t),Os=d(Bo),to=n(Bo,"SPAN",{});var Wr=s(to);Rs=c(Wr,"Hugging Face local storage"),Wr.forEach(t),Bo.forEach(t),Ho=d(a),ea=n(a,"P",{});var vr=s(ea);ao=n(vr,"CODE",{});var Br=s(ao);Ms=c(Br,"huggingface_hub"),Br.forEach(t),Us=c(vr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),vr.forEach(t),Fo=d(a),dt=n(a,"P",{});var Ko=s(dt);Ss=c(Ko,"It does this using the "),va=n(Ko,"A",{href:!0});var Kr=s(va);Cs=c(Kr,"HfFolder"),Kr.forEach(t),zs=c(Ko," utility, which saves data at the root of the user."),Ko.forEach(t),Do=d(a),ne=n(a,"DIV",{class:!0});var Ft=s(ne);H(ta.$$.fragment,Ft),Vs=d(Ft),ft=n(Ft,"DIV",{class:!0});var Jo=s(ft);H(aa.$$.fragment,Jo),Gs=d(Jo),oo=n(Jo,"P",{});var Jr=s(oo);Ws=c(Jr,"Deletes the token from storage. Does not fail if token does not exist."),Jr.forEach(t),Jo.forEach(t),Bs=d(Ft),Ie=n(Ft,"DIV",{class:!0});var Aa=s(Ie);H(oa.$$.fragment,Aa),Ks=d(Aa),no=n(Aa,"P",{});var Qr=s(no);Js=c(Qr,"Get token or None if not existent."),Qr.forEach(t),Qs=d(Aa),na=n(Aa,"P",{});var Qo=s(na);Xs=c(Qo,"Note that a token can be also provided using the "),so=n(Qo,"CODE",{});var Xr=s(so);Ys=c(Xr,"HUGGING_FACE_HUB_TOKEN"),Xr.forEach(t),Zs=c(Qo,`
environment variable.`),Qo.forEach(t),Aa.forEach(t),er=d(Ft),ut=n(Ft,"DIV",{class:!0});var Xo=s(ut);H(sa.$$.fragment,Xo),tr=d(Xo),ro=n(Xo,"P",{});var Yr=s(ro);ar=c(Yr,"Save token, creating folder as needed."),Yr.forEach(t),Xo.forEach(t),Ft.forEach(t),No=d(a),Oe=n(a,"H2",{class:!0});var Yo=s(Oe);mt=n(Yo,"A",{id:!0,class:!0,href:!0});var Zr=s(mt);io=n(Zr,"SPAN",{});var ei=s(io);H(ra.$$.fragment,ei),ei.forEach(t),Zr.forEach(t),or=d(Yo),lo=n(Yo,"SPAN",{});var ti=s(lo);nr=c(ti,"Filtering helpers"),ti.forEach(t),Yo.forEach(t),qo=d(a),_t=n(a,"P",{});var Zo=s(_t);sr=c(Zo,"Some helpers to filter repositories on the Hub are available in the "),go=n(Zo,"CODE",{});var ai=s(go);rr=c(ai,"huggingface_hub"),ai.forEach(t),ir=c(Zo," package."),Zo.forEach(t),Io=d(a),ve=n(a,"DIV",{class:!0});var xa=s(ve);H(ia.$$.fragment,xa),lr=d(xa),co=n(xa,"P",{});var oi=s(co);gr=c(oi,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),oi.forEach(t),cr=d(xa),H(bt.$$.fragment,xa),xa.forEach(t),To=d(a),ye=n(a,"DIV",{class:!0});var ja=s(ye);H(la.$$.fragment,ja),pr=d(ja),po=n(ja,"P",{});var ni=s(po);hr=c(ni,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ni.forEach(t),dr=d(ja),H($t.$$.fragment,ja),ja.forEach(t),Lo=d(a),ke=n(a,"DIV",{class:!0});var Ha=s(ke);H(ga.$$.fragment,Ha),fr=d(Ha),ho=n(Ha,"P",{});var si=s(ho);ur=c(si,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),si.forEach(t),mr=d(Ha),H(vt.$$.fragment,Ha),Ha.forEach(t),Po=d(a),we=n(a,"DIV",{class:!0});var Fa=s(we);H(ca.$$.fragment,Fa),_r=d(Fa),fo=n(Fa,"P",{});var ri=s(fo);br=c(ri,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ri.forEach(t),$r=d(Fa),H(yt.$$.fragment,Fa),Fa.forEach(t),this.h()},h(){k(i,"name","hf:doc:metadata"),k(i,"content",JSON.stringify(Ti)),k(l,"id","huggingface_hub.HfApi"),k(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(l,"href","#huggingface_hub.HfApi"),k(f,"class","relative group"),k(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Gt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),k(Gt,"rel","nofollow"),k(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ht,"id","huggingface_hub.HfFolder"),k(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ht,"href","#huggingface_hub.HfFolder"),k(Pe,"class","relative group"),k(va,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(mt,"id","huggingface_hub.DatasetFilter"),k(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(mt,"href","#huggingface_hub.DatasetFilter"),k(Oe,"class","relative group"),k(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(a,$){e(document.head,i),v(a,_,$),v(a,f,$),e(f,l),e(l,p),F(r,p,null),e(f,u),e(f,E),e(E,m),v(a,b,$),v(a,x,$),e(x,w),e(x,A),e(A,T),e(x,P),v(a,M,$),v(a,y,$),e(y,O),e(y,S),e(S,U),e(y,V),v(a,G,$),v(a,z,$),e(z,W),v(a,Z,$),F(J,a,$),v(a,se,$),v(a,ee,$),e(ee,Q),e(ee,X),e(X,Y),e(ee,ue),v(a,me,$),F(B,a,$),v(a,te,$),v(a,K,$),e(K,xe),e(K,ae),e(ae,Te),e(K,je),v(a,_e,$),v(a,I,$),F(oe,I,null),e(I,_a),e(I,be),F($e,be,null),e(be,ba),e(be,Le),e(Le,$a),e(I,en),e(I,re),F(Dt,re,null),e(re,tn),e(re,Da),e(Da,an),e(re,on),e(re,Na),e(Na,nn),e(re,sn),F(Se,re,null),e(I,rn),e(I,He),F(Nt,He,null),e(He,ln),e(He,qa),e(qa,gn),e(He,cn),F(Ce,He,null),e(I,pn),e(I,Fe),F(qt,Fe,null),e(Fe,hn),e(Fe,Ia),e(Ia,dn),e(Fe,fn),F(ze,Fe,null),e(I,un),e(I,Ve),F(It,Ve,null),e(Ve,mn),e(Ve,Ta),e(Ta,_n),e(I,bn),e(I,Ge),F(Tt,Ge,null),e(Ge,$n),e(Ge,La),e(La,vn),e(I,yn),e(I,We),F(Lt,We,null),e(We,kn),e(We,Pa),e(Pa,wn),e(I,En),e(I,ie),F(Pt,ie,null),e(ie,An),e(ie,Oa),e(Oa,xn),e(ie,jn),F(Be,ie,null),e(ie,Hn),F(Ke,ie,null),e(I,Fn),e(I,Je),F(Ot,Je,null),e(Je,Dn),e(Je,Ra),e(Ra,Nn),e(I,qn),e(I,le),F(Rt,le,null),e(le,In),e(le,Ma),e(Ma,Tn),e(le,Ln),F(Qe,le,null),e(le,Pn),F(Xe,le,null),e(I,On),e(I,Ye),F(Mt,Ye,null),e(Ye,Rn),e(Ye,Ua),e(Ua,Mn),e(I,Un),e(I,ge),F(Ut,ge,null),e(ge,Sn),e(ge,Sa),e(Sa,Cn),e(ge,zn),F(Ze,ge,null),e(ge,Vn),F(et,ge,null),e(I,Gn),e(I,De),F(St,De,null),e(De,Wn),e(De,Ca),e(Ca,Bn),e(De,Kn),F(tt,De,null),e(I,Jn),e(I,ce),F(Ct,ce,null),e(ce,Qn),e(ce,za),e(za,Xn),e(ce,Yn),e(ce,Va),e(Va,Zn),e(ce,es),F(at,ce,null),e(I,ts),e(I,pe),F(zt,pe,null),e(pe,as),e(pe,Ga),e(Ga,os),e(pe,ns),e(pe,Vt),e(Vt,ss),e(Vt,Gt),e(Gt,rs),e(Vt,is),e(pe,ls),F(ot,pe,null),e(I,gs),e(I,Ne),F(Wt,Ne,null),e(Ne,cs),e(Ne,Wa),e(Wa,ps),e(Ne,hs),F(nt,Ne,null),e(I,ds),e(I,st),F(Bt,st,null),e(st,fs),e(st,Ba),e(Ba,us),e(I,ms),e(I,he),F(Kt,he,null),e(he,_s),e(he,Ka),e(Ka,bs),e(he,$s),e(he,Ja),e(Ja,vs),e(he,ys),F(rt,he,null),e(I,ks),e(I,it),F(Jt,it,null),e(it,ws),e(it,Qa),e(Qa,Es),e(I,As),e(I,qe),F(Qt,qe,null),e(qe,xs),e(qe,Xa),e(Xa,js),e(qe,Hs),F(lt,qe,null),e(I,Fs),e(I,de),F(Xt,de,null),e(de,Ds),e(de,Ya),e(Ya,Ns),e(de,qs),F(gt,de,null),e(de,Is),F(ct,de,null),e(I,Ts),e(I,pt),F(Yt,pt,null),e(pt,Ls),e(pt,Za),e(Za,Ps),v(a,jo,$),v(a,Pe,$),e(Pe,ht),e(ht,eo),F(Zt,eo,null),e(Pe,Os),e(Pe,to),e(to,Rs),v(a,Ho,$),v(a,ea,$),e(ea,ao),e(ao,Ms),e(ea,Us),v(a,Fo,$),v(a,dt,$),e(dt,Ss),e(dt,va),e(va,Cs),e(dt,zs),v(a,Do,$),v(a,ne,$),F(ta,ne,null),e(ne,Vs),e(ne,ft),F(aa,ft,null),e(ft,Gs),e(ft,oo),e(oo,Ws),e(ne,Bs),e(ne,Ie),F(oa,Ie,null),e(Ie,Ks),e(Ie,no),e(no,Js),e(Ie,Qs),e(Ie,na),e(na,Xs),e(na,so),e(so,Ys),e(na,Zs),e(ne,er),e(ne,ut),F(sa,ut,null),e(ut,tr),e(ut,ro),e(ro,ar),v(a,No,$),v(a,Oe,$),e(Oe,mt),e(mt,io),F(ra,io,null),e(Oe,or),e(Oe,lo),e(lo,nr),v(a,qo,$),v(a,_t,$),e(_t,sr),e(_t,go),e(go,rr),e(_t,ir),v(a,Io,$),v(a,ve,$),F(ia,ve,null),e(ve,lr),e(ve,co),e(co,gr),e(ve,cr),F(bt,ve,null),v(a,To,$),v(a,ye,$),F(la,ye,null),e(ye,pr),e(ye,po),e(po,hr),e(ye,dr),F($t,ye,null),v(a,Lo,$),v(a,ke,$),F(ga,ke,null),e(ke,fr),e(ke,ho),e(ho,ur),e(ke,mr),F(vt,ke,null),v(a,Po,$),v(a,we,$),F(ca,we,null),e(we,_r),e(we,fo),e(fo,br),e(we,$r),F(yt,we,null),Oo=!0},p(a,[$]){const pa={};$&2&&(pa.$$scope={dirty:$,ctx:a}),Se.$set(pa);const uo={};$&2&&(uo.$$scope={dirty:$,ctx:a}),Ce.$set(uo);const mo={};$&2&&(mo.$$scope={dirty:$,ctx:a}),ze.$set(mo);const _o={};$&2&&(_o.$$scope={dirty:$,ctx:a}),Be.$set(_o);const ha={};$&2&&(ha.$$scope={dirty:$,ctx:a}),Ke.$set(ha);const bo={};$&2&&(bo.$$scope={dirty:$,ctx:a}),Qe.$set(bo);const da={};$&2&&(da.$$scope={dirty:$,ctx:a}),Xe.$set(da);const $o={};$&2&&($o.$$scope={dirty:$,ctx:a}),Ze.$set($o);const vo={};$&2&&(vo.$$scope={dirty:$,ctx:a}),et.$set(vo);const fa={};$&2&&(fa.$$scope={dirty:$,ctx:a}),tt.$set(fa);const yo={};$&2&&(yo.$$scope={dirty:$,ctx:a}),at.$set(yo);const ua={};$&2&&(ua.$$scope={dirty:$,ctx:a}),ot.$set(ua);const ko={};$&2&&(ko.$$scope={dirty:$,ctx:a}),nt.$set(ko);const L={};$&2&&(L.$$scope={dirty:$,ctx:a}),rt.$set(L);const ma={};$&2&&(ma.$$scope={dirty:$,ctx:a}),lt.$set(ma);const wo={};$&2&&(wo.$$scope={dirty:$,ctx:a}),gt.$set(wo);const Ee={};$&2&&(Ee.$$scope={dirty:$,ctx:a}),ct.$set(Ee);const Eo={};$&2&&(Eo.$$scope={dirty:$,ctx:a}),bt.$set(Eo);const Ao={};$&2&&(Ao.$$scope={dirty:$,ctx:a}),$t.$set(Ao);const Re={};$&2&&(Re.$$scope={dirty:$,ctx:a}),vt.$set(Re);const xo={};$&2&&(xo.$$scope={dirty:$,ctx:a}),yt.$set(xo)},i(a){Oo||(D(r.$$.fragment,a),D(J.$$.fragment,a),D(B.$$.fragment,a),D(oe.$$.fragment,a),D($e.$$.fragment,a),D(Dt.$$.fragment,a),D(Se.$$.fragment,a),D(Nt.$$.fragment,a),D(Ce.$$.fragment,a),D(qt.$$.fragment,a),D(ze.$$.fragment,a),D(It.$$.fragment,a),D(Tt.$$.fragment,a),D(Lt.$$.fragment,a),D(Pt.$$.fragment,a),D(Be.$$.fragment,a),D(Ke.$$.fragment,a),D(Ot.$$.fragment,a),D(Rt.$$.fragment,a),D(Qe.$$.fragment,a),D(Xe.$$.fragment,a),D(Mt.$$.fragment,a),D(Ut.$$.fragment,a),D(Ze.$$.fragment,a),D(et.$$.fragment,a),D(St.$$.fragment,a),D(tt.$$.fragment,a),D(Ct.$$.fragment,a),D(at.$$.fragment,a),D(zt.$$.fragment,a),D(ot.$$.fragment,a),D(Wt.$$.fragment,a),D(nt.$$.fragment,a),D(Bt.$$.fragment,a),D(Kt.$$.fragment,a),D(rt.$$.fragment,a),D(Jt.$$.fragment,a),D(Qt.$$.fragment,a),D(lt.$$.fragment,a),D(Xt.$$.fragment,a),D(gt.$$.fragment,a),D(ct.$$.fragment,a),D(Yt.$$.fragment,a),D(Zt.$$.fragment,a),D(ta.$$.fragment,a),D(aa.$$.fragment,a),D(oa.$$.fragment,a),D(sa.$$.fragment,a),D(ra.$$.fragment,a),D(ia.$$.fragment,a),D(bt.$$.fragment,a),D(la.$$.fragment,a),D($t.$$.fragment,a),D(ga.$$.fragment,a),D(vt.$$.fragment,a),D(ca.$$.fragment,a),D(yt.$$.fragment,a),Oo=!0)},o(a){N(r.$$.fragment,a),N(J.$$.fragment,a),N(B.$$.fragment,a),N(oe.$$.fragment,a),N($e.$$.fragment,a),N(Dt.$$.fragment,a),N(Se.$$.fragment,a),N(Nt.$$.fragment,a),N(Ce.$$.fragment,a),N(qt.$$.fragment,a),N(ze.$$.fragment,a),N(It.$$.fragment,a),N(Tt.$$.fragment,a),N(Lt.$$.fragment,a),N(Pt.$$.fragment,a),N(Be.$$.fragment,a),N(Ke.$$.fragment,a),N(Ot.$$.fragment,a),N(Rt.$$.fragment,a),N(Qe.$$.fragment,a),N(Xe.$$.fragment,a),N(Mt.$$.fragment,a),N(Ut.$$.fragment,a),N(Ze.$$.fragment,a),N(et.$$.fragment,a),N(St.$$.fragment,a),N(tt.$$.fragment,a),N(Ct.$$.fragment,a),N(at.$$.fragment,a),N(zt.$$.fragment,a),N(ot.$$.fragment,a),N(Wt.$$.fragment,a),N(nt.$$.fragment,a),N(Bt.$$.fragment,a),N(Kt.$$.fragment,a),N(rt.$$.fragment,a),N(Jt.$$.fragment,a),N(Qt.$$.fragment,a),N(lt.$$.fragment,a),N(Xt.$$.fragment,a),N(gt.$$.fragment,a),N(ct.$$.fragment,a),N(Yt.$$.fragment,a),N(Zt.$$.fragment,a),N(ta.$$.fragment,a),N(aa.$$.fragment,a),N(oa.$$.fragment,a),N(sa.$$.fragment,a),N(ra.$$.fragment,a),N(ia.$$.fragment,a),N(bt.$$.fragment,a),N(la.$$.fragment,a),N($t.$$.fragment,a),N(ga.$$.fragment,a),N(vt.$$.fragment,a),N(ca.$$.fragment,a),N(yt.$$.fragment,a),Oo=!1},d(a){t(i),a&&t(_),a&&t(f),q(r),a&&t(b),a&&t(x),a&&t(M),a&&t(y),a&&t(G),a&&t(z),a&&t(Z),q(J,a),a&&t(se),a&&t(ee),a&&t(me),q(B,a),a&&t(te),a&&t(K),a&&t(_e),a&&t(I),q(oe),q($e),q(Dt),q(Se),q(Nt),q(Ce),q(qt),q(ze),q(It),q(Tt),q(Lt),q(Pt),q(Be),q(Ke),q(Ot),q(Rt),q(Qe),q(Xe),q(Mt),q(Ut),q(Ze),q(et),q(St),q(tt),q(Ct),q(at),q(zt),q(ot),q(Wt),q(nt),q(Bt),q(Kt),q(rt),q(Jt),q(Qt),q(lt),q(Xt),q(gt),q(ct),q(Yt),a&&t(jo),a&&t(Pe),q(Zt),a&&t(Ho),a&&t(ea),a&&t(Fo),a&&t(dt),a&&t(Do),a&&t(ne),q(ta),q(aa),q(oa),q(sa),a&&t(No),a&&t(Oe),q(ra),a&&t(qo),a&&t(_t),a&&t(Io),a&&t(ve),q(ia),q(bt),a&&t(To),a&&t(ye),q(la),q($t),a&&t(Lo),a&&t(ke),q(ga),q(vt),a&&t(Po),a&&t(we),q(ca),q(yt)}}}const Ti={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Li(R){return pi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ci extends ii{constructor(i){super();li(this,i,Li,Ii,gi,{})}}export{Ci as default,Ti as metadata};
