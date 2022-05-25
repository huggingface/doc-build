import{S as Br,i as Kr,s as Jr,e as n,k as l,w as k,t as c,M as Qr,c as o,d as a,m as g,a as s,x as w,h as p,b as y,G as e,g as b,y as A,q as j,o as H,B as x,v as Xr,L as de}from"../../chunks/vendor-hf-doc-builder.js";import{T as Qa}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Z}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as nr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yr(P){let i,$,d,f,m,r,h,q,u,v,F,L,M,O,S;return{c(){i=n("p"),$=c("Raises the following errors:"),d=l(),f=n("ul"),m=n("li"),r=n("a"),h=n("code"),q=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),v=l(),F=n("li"),L=n("a"),M=n("code"),O=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(T){i=o(T,"P",{});var I=s(i);$=p(I,"Raises the following errors:"),I.forEach(a),d=g(T),f=o(T,"UL",{});var U=s(f);m=o(U,"LI",{});var C=s(m);r=o(C,"A",{href:!0,rel:!0});var ie=s(r);h=o(ie,"CODE",{});var le=s(h);q=p(le,"HTTPError"),le.forEach(a),ie.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),v=g(U),F=o(U,"LI",{});var V=s(F);L=o(V,"A",{href:!0,rel:!0});var G=s(L);M=o(G,"CODE",{});var ge=s(M);O=p(ge,"ValueError"),ge.forEach(a),G.forEach(a),S=p(V,`
if some parameter value is invalid`),V.forEach(a),U.forEach(a),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(L,"rel","nofollow")},m(T,I){b(T,i,I),e(i,$),b(T,d,I),b(T,f,I),e(f,m),e(m,r),e(r,h),e(h,q),e(m,u),e(f,v),e(f,F),e(F,L),e(L,M),e(M,O),e(F,S)},d(T){T&&a(i),T&&a(d),T&&a(f)}}}function Zr(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=n("p"),$=c("Example usage with the "),d=n("code"),f=c("filter"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=o(u,"P",{});var v=s(i);$=p(v,"Example usage with the "),d=o(v,"CODE",{});var F=s(d);f=p(F,"filter"),F.forEach(a),m=p(v," argument:"),v.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,v){b(u,i,v),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,v),A(h,u,v),q=!0},p:de,i(u){q||(j(h.$$.fragment,u),q=!0)},o(u){H(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),x(h,u)}}}function ei(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=n("p"),$=c("Example usage with the "),d=n("code"),f=c("search"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=o(u,"P",{});var v=s(i);$=p(v,"Example usage with the "),d=o(v,"CODE",{});var F=s(d);f=p(F,"search"),F.forEach(a),m=p(v," argument:"),v.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,v){b(u,i,v),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,v),A(h,u,v),q=!0},p:de,i(u){q||(j(h.$$.fragment,u),q=!0)},o(u){H(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),x(h,u)}}}function ti(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=n("p"),$=c("Example usage with the "),d=n("code"),f=c("filter"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=o(u,"P",{});var v=s(i);$=p(v,"Example usage with the "),d=o(v,"CODE",{});var F=s(d);f=p(F,"filter"),F.forEach(a),m=p(v," argument:"),v.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,v){b(u,i,v),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,v),A(h,u,v),q=!0},p:de,i(u){q||(j(h.$$.fragment,u),q=!0)},o(u){H(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),x(h,u)}}}function ai(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=n("p"),$=c("Example usage with the "),d=n("code"),f=c("search"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=o(u,"P",{});var v=s(i);$=p(v,"Example usage with the "),d=o(v,"CODE",{});var F=s(d);f=p(F,"search"),F.forEach(a),m=p(v," argument:"),v.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,v){b(u,i,v),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,v),A(h,u,v),q=!0},p:de,i(u){q||(j(h.$$.fragment,u),q=!0)},o(u){H(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),x(h,u)}}}function ni(P){let i,$,d,f,m;return{c(){i=n("p"),$=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),d=n("a"),f=c("HfApi.set_access_token()"),m=c(" instead."),this.h()},l(r){i=o(r,"P",{});var h=s(i);$=p(h,`Warning: Deprecated, will be removed in v0.8. Please use
`),d=o(h,"A",{href:!0});var q=s(d);f=p(q,"HfApi.set_access_token()"),q.forEach(a),m=p(h," instead."),h.forEach(a),this.h()},h(){y(d,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(r,h){b(r,i,h),e(i,$),e(i,d),e(d,f),e(i,m)},d(r){r&&a(i)}}}function oi(P){let i,$,d,f,m,r,h,q,u;return{c(){i=n("p"),$=c("Raises the following errors:"),d=l(),f=n("ul"),m=n("li"),r=n("a"),h=n("code"),q=c("HTTPError"),u=c(`
if credentials are invalid`),this.h()},l(v){i=o(v,"P",{});var F=s(i);$=p(F,"Raises the following errors:"),F.forEach(a),d=g(v),f=o(v,"UL",{});var L=s(f);m=o(L,"LI",{});var M=s(m);r=o(M,"A",{href:!0,rel:!0});var O=s(r);h=o(O,"CODE",{});var S=s(h);q=p(S,"HTTPError"),S.forEach(a),O.forEach(a),u=p(M,`
if credentials are invalid`),M.forEach(a),L.forEach(a),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow")},m(v,F){b(v,i,F),e(i,$),b(v,d,F),b(v,f,F),e(f,m),e(m,r),e(r,h),e(h,q),e(m,u)},d(v){v&&a(i),v&&a(d),v&&a(f)}}}function si(P){let i,$,d,f,m;return{c(){i=n("p"),$=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),d=n("a"),f=c("HfApi.unset_access_token()"),m=c(" instead."),this.h()},l(r){i=o(r,"P",{});var h=s(i);$=p(h,`Warning: Deprecated, will be removed in v0.8. Please use
`),d=o(h,"A",{href:!0});var q=s(d);f=p(q,"HfApi.unset_access_token()"),q.forEach(a),m=p(h," instead."),h.forEach(a),this.h()},h(){y(d,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(r,h){b(r,i,h),e(i,$),e(i,d),e(d,f),e(i,m)},d(r){r&&a(i)}}}function ri(P){let i,$,d,f,m,r,h,q,u,v,F,L,M,O,S;return{c(){i=n("p"),$=c("Raises the following errors:"),d=l(),f=n("ul"),m=n("li"),r=n("a"),h=n("code"),q=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),v=l(),F=n("li"),L=n("a"),M=n("code"),O=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(T){i=o(T,"P",{});var I=s(i);$=p(I,"Raises the following errors:"),I.forEach(a),d=g(T),f=o(T,"UL",{});var U=s(f);m=o(U,"LI",{});var C=s(m);r=o(C,"A",{href:!0,rel:!0});var ie=s(r);h=o(ie,"CODE",{});var le=s(h);q=p(le,"HTTPError"),le.forEach(a),ie.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),v=g(U),F=o(U,"LI",{});var V=s(F);L=o(V,"A",{href:!0,rel:!0});var G=s(L);M=o(G,"CODE",{});var ge=s(M);O=p(ge,"ValueError"),ge.forEach(a),G.forEach(a),S=p(V,`
if some parameter value is invalid`),V.forEach(a),U.forEach(a),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(L,"rel","nofollow")},m(T,I){b(T,i,I),e(i,$),b(T,d,I),b(T,f,I),e(f,m),e(m,r),e(r,h),e(h,q),e(m,u),e(f,v),e(f,F),e(F,L),e(L,M),e(M,O),e(F,S)},d(T){T&&a(i),T&&a(d),T&&a(f)}}}function ii(P){let i,$,d,f,m;return f=new Z({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=n("p"),$=c("Example usage:"),d=l(),k(f.$$.fragment)},l(r){i=o(r,"P",{});var h=s(i);$=p(h,"Example usage:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:de,i(r){m||(j(f.$$.fragment,r),m=!0)},o(r){H(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),x(f,r)}}}function li(P){let i,$,d,f,m;return f=new Z({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=n("p"),$=c("Examples:"),d=l(),k(f.$$.fragment)},l(r){i=o(r,"P",{});var h=s(i);$=p(h,"Examples:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:de,i(r){m||(j(f.$$.fragment,r),m=!0)},o(r){H(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),x(f,r)}}}function gi(P){let i,$;return i=new Z({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){k(i.$$.fragment)},l(d){w(i.$$.fragment,d)},m(d,f){A(i,d,f),$=!0},p:de,i(d){$||(j(i.$$.fragment,d),$=!0)},o(d){H(i.$$.fragment,d),$=!1},d(d){x(i,d)}}}function ci(P){let i,$,d,f,m;return f=new Z({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=n("p"),$=c("Example:"),d=l(),k(f.$$.fragment)},l(r){i=o(r,"P",{});var h=s(i);$=p(h,"Example:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:de,i(r){m||(j(f.$$.fragment,r),m=!0)},o(r){H(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),x(f,r)}}}function pi(P){let i,$,d,f,m;return f=new Z({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=n("p"),$=c("Example:"),d=l(),k(f.$$.fragment)},l(r){i=o(r,"P",{});var h=s(i);$=p(h,"Example:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:de,i(r){m||(j(f.$$.fragment,r),m=!0)},o(r){H(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),x(f,r)}}}function hi(P){let i,$,d,f,m,r,h,q,u,v,F,L,M,O,S,T,I,U,C,ie,le,V,G,ge,Xa,Ze,Ya,fe,Tn,ta,Ln,In,Za,et,en,ue,Mn,aa,On,Sn,tn,D,tt,Un,me,at,Cn,na,zn,Vn,ee,nt,Gn,oa,Wn,Rn,sa,Bn,Kn,te,ot,Jn,ra,Qn,Xn,_e,Yn,be,st,Zn,ia,eo,to,$e,rt,ao,la,no,oo,ve,it,so,ga,ro,io,ye,lt,lo,ca,go,co,W,gt,po,pa,ho,fo,ke,uo,we,mo,Ae,ct,_o,ha,bo,$o,R,pt,vo,da,yo,ko,je,wo,He,Ao,xe,ht,jo,fa,Ho,xo,B,dt,Do,ua,Eo,qo,De,Fo,Ee,No,ae,ft,Po,ma,To,Lo,qe,Io,ne,ut,Mo,_a,Oo,So,ba,Uo,Co,oe,mt,zo,$a,Vo,Go,_t,Wo,bt,Ro,Bo,Ko,Fe,$t,Jo,va,Qo,Xo,Ne,vt,Yo,ya,Zo,es,se,yt,ts,ka,as,ns,wa,os,ss,Pe,kt,rs,Aa,is,ls,Te,wt,gs,ja,cs,ps,K,At,hs,Ha,ds,fs,Le,us,Ie,ms,Me,jt,_s,xa,bs,an,ce,Oe,Da,Ht,$s,Ea,vs,nn,xt,qa,ys,ks,on,Se,ws,Vt,As,js,sn,z,Dt,Hs,Ue,Et,xs,Fa,Ds,Es,re,qt,qs,Na,Fs,Ns,Ft,Ps,Pa,Ts,Ls,Is,Ce,Nt,Ms,Ta,Os,rn,pe,ze,La,Pt,Ss,Ia,Us,ln,Ve,Cs,Ma,zs,Vs,gn,J,Tt,Gs,Oa,Ws,Rs,Ge,cn,Q,Lt,Bs,Sa,Ks,Js,We,pn,X,It,Qs,Ua,Xs,Ys,Re,hn,Y,Mt,Zs,Ca,er,tr,Be,dn;return r=new nr({}),Ze=new Z({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),et=new Z({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),tt=new N({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L553"}}),at=new N({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1372",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),nt=new N({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1201",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),ot=new N({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1873"}}),_e=new Qa({props:{$$slots:{default:[Yr]},$$scope:{ctx:P}}}),st=new N({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1502"}}),rt=new N({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L752"}}),it=new N({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1932",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),lt=new N({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L744"}}),gt=new N({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L971"}}),ke=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Zr]},$$scope:{ctx:P}}}),we=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[ei]},$$scope:{ctx:P}}}),ct=new N({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1137",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),pt=new N({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L762"}}),je=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[ti]},$$scope:{ctx:P}}}),He=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[ai]},$$scope:{ctx:P}}}),ht=new N({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1331",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),dt=new N({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L557",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),De=new Qa({props:{$$slots:{default:[ni]},$$scope:{ctx:P}}}),Ee=new Qa({props:{$$slots:{default:[oi]},$$scope:{ctx:P}}}),ft=new N({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L689"}}),qe=new Qa({props:{$$slots:{default:[si]},$$scope:{ctx:P}}}),ut=new N({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1151",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),mt=new N({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1659"}}),$t=new N({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1287",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),vt=new N({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L725"}}),yt=new N({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1244",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),kt=new N({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L737"}}),wt=new N({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1593",returnDescription:`
<p>The HTTP response in json.</p>
`}}),At=new N({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.IO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": bool = True"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
When set to false, will raise an <a href="https://2.python-requests.org/en/master/api/#requests.HTTPError" rel="nofollow">HTTPError</a>
when the file you&#x2019;re trying to upload already exists on the hub
and its content did not change.`,name:"identical_ok"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1729",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Le=new Qa({props:{$$slots:{default:[ri]},$$scope:{ctx:P}}}),Ie=new he({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[ii]},$$scope:{ctx:P}}}),jt=new N({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L599"}}),Ht=new nr({}),Dt=new N({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1968"}}),Et=new N({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L2005"}}),qt=new N({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1984",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Nt=new N({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L1971"}}),Pt=new nr({}),Tt=new N({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Ge=new he({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[li]},$$scope:{ctx:P}}}),Lt=new N({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),We=new he({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[gi]},$$scope:{ctx:P}}}),It=new N({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L441"}}),Re=new he({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[ci]},$$scope:{ctx:P}}}),Mt=new N({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/hf_api.py#L403"}}),Be=new he({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[pi]},$$scope:{ctx:P}}}),{c(){i=n("meta"),$=l(),d=n("h1"),f=n("a"),m=n("span"),k(r.$$.fragment),h=l(),q=n("span"),u=c("Hugging Face Hub API"),v=l(),F=n("p"),L=c("Below is the documentation for the "),M=n("code"),O=c("HfApi"),S=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),T=l(),I=n("p"),U=c("All methods from the "),C=n("code"),ie=c("HfApi"),le=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),V=l(),G=n("p"),ge=c("The following approach uses the method from the root of the package:"),Xa=l(),k(Ze.$$.fragment),Ya=l(),fe=n("p"),Tn=c("The following approach uses the "),ta=n("code"),Ln=c("HfApi"),In=c(" class:"),Za=l(),k(et.$$.fragment),en=l(),ue=n("p"),Mn=c("Using the "),aa=n("code"),On=c("HfApi"),Sn=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),tn=l(),D=n("div"),k(tt.$$.fragment),Un=l(),me=n("div"),k(at.$$.fragment),Cn=l(),na=n("p"),zn=c("Create an empty repo on the HuggingFace Hub."),Vn=l(),ee=n("div"),k(nt.$$.fragment),Gn=l(),oa=n("p"),Wn=c("Get info on one specific dataset on huggingface.co."),Rn=l(),sa=n("p"),Bn=c("Dataset can be private if you pass an acceptable token."),Kn=l(),te=n("div"),k(ot.$$.fragment),Jn=l(),ra=n("p"),Qn=c("Deletes a file in the given repo."),Xn=l(),k(_e.$$.fragment),Yn=l(),be=n("div"),k(st.$$.fragment),Zn=l(),ia=n("p"),eo=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),to=l(),$e=n("div"),k(rt.$$.fragment),ao=l(),la=n("p"),no=c("Gets all valid dataset tags as a nested namespace object."),oo=l(),ve=n("div"),k(it.$$.fragment),so=l(),ga=n("p"),ro=c(`Returns the repository name for a given model ID and optional
organization.`),io=l(),ye=n("div"),k(lt.$$.fragment),lo=l(),ca=n("p"),go=c("Gets all valid model tags as a nested namespace object"),co=l(),W=n("div"),k(gt.$$.fragment),po=l(),pa=n("p"),ho=c("Get the public list of all the datasets on huggingface.co"),fo=l(),k(ke.$$.fragment),uo=l(),k(we.$$.fragment),mo=l(),Ae=n("div"),k(ct.$$.fragment),_o=l(),ha=n("p"),bo=c("Get the public list of all the metrics on huggingface.co"),$o=l(),R=n("div"),k(pt.$$.fragment),vo=l(),da=n("p"),yo=c("Get the public list of all the models on huggingface.co"),ko=l(),k(je.$$.fragment),wo=l(),k(He.$$.fragment),Ao=l(),xe=n("div"),k(ht.$$.fragment),jo=l(),fa=n("p"),Ho=c("Get the list of files in a given repo."),xo=l(),B=n("div"),k(dt.$$.fragment),Do=l(),ua=n("p"),Eo=c("Call HF API to sign in a user and get a token if credentials are valid."),qo=l(),k(De.$$.fragment),Fo=l(),k(Ee.$$.fragment),No=l(),ae=n("div"),k(ft.$$.fragment),Po=l(),ma=n("p"),To=c("Call HF API to log out."),Lo=l(),k(qe.$$.fragment),Io=l(),ne=n("div"),k(ut.$$.fragment),Mo=l(),_a=n("p"),Oo=c("Get info on one specific model on huggingface.co"),So=l(),ba=n("p"),Uo=c("Model can be private if you pass an acceptable token or are logged in."),Co=l(),oe=n("div"),k(mt.$$.fragment),zo=l(),$a=n("p"),Vo=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Go=l(),_t=n("p"),Wo=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),bt=n("a"),Ro=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Bo=c("."),Ko=l(),Fe=n("div"),k($t.$$.fragment),Jo=l(),va=n("p"),Qo=c("Get the info object for a given repo of a given type."),Xo=l(),Ne=n("div"),k(vt.$$.fragment),Yo=l(),ya=n("p"),Zo=c(`Saves the passed access token so git can correctly authenticate the
user.`),es=l(),se=n("div"),k(yt.$$.fragment),ts=l(),ka=n("p"),as=c("Get info on one specific Space on huggingface.co."),ns=l(),wa=n("p"),os=c("Space can be private if you pass an acceptable token."),ss=l(),Pe=n("div"),k(kt.$$.fragment),rs=l(),Aa=n("p"),is=c("Resets the user\u2019s access token."),ls=l(),Te=n("div"),k(wt.$$.fragment),gs=l(),ja=n("p"),cs=c("Update the visibility setting of a repository."),ps=l(),K=n("div"),k(At.$$.fragment),hs=l(),Ha=n("p"),ds=c(`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),fs=l(),k(Le.$$.fragment),us=l(),k(Ie.$$.fragment),ms=l(),Me=n("div"),k(jt.$$.fragment),_s=l(),xa=n("p"),bs=c("Call HF API to know \u201Cwhoami\u201D."),an=l(),ce=n("h2"),Oe=n("a"),Da=n("span"),k(Ht.$$.fragment),$s=l(),Ea=n("span"),vs=c("Hugging Face local storage"),nn=l(),xt=n("p"),qa=n("code"),ys=c("huggingface_hub"),ks=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),on=l(),Se=n("p"),ws=c("It does this using the "),Vt=n("a"),As=c("HfFolder"),js=c(" utility, which saves data at the root of the user."),sn=l(),z=n("div"),k(Dt.$$.fragment),Hs=l(),Ue=n("div"),k(Et.$$.fragment),xs=l(),Fa=n("p"),Ds=c("Deletes the token from storage. Does not fail if token does not exist."),Es=l(),re=n("div"),k(qt.$$.fragment),qs=l(),Na=n("p"),Fs=c("Get token or None if not existent."),Ns=l(),Ft=n("p"),Ps=c("Note that a token can be also provided using the "),Pa=n("code"),Ts=c("HUGGING_FACE_HUB_TOKEN"),Ls=c(`
environment variable.`),Is=l(),Ce=n("div"),k(Nt.$$.fragment),Ms=l(),Ta=n("p"),Os=c("Save token, creating folder as needed."),rn=l(),pe=n("h2"),ze=n("a"),La=n("span"),k(Pt.$$.fragment),Ss=l(),Ia=n("span"),Us=c("Filtering helpers"),ln=l(),Ve=n("p"),Cs=c("Some helpers to filter repositories on the Hub are available in the "),Ma=n("code"),zs=c("huggingface_hub"),Vs=c(" package."),gn=l(),J=n("div"),k(Tt.$$.fragment),Gs=l(),Oa=n("p"),Ws=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Rs=l(),k(Ge.$$.fragment),cn=l(),Q=n("div"),k(Lt.$$.fragment),Bs=l(),Sa=n("p"),Ks=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Js=l(),k(We.$$.fragment),pn=l(),X=n("div"),k(It.$$.fragment),Qs=l(),Ua=n("p"),Xs=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ys=l(),k(Re.$$.fragment),hn=l(),Y=n("div"),k(Mt.$$.fragment),Zs=l(),Ca=n("p"),er=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),tr=l(),k(Be.$$.fragment),this.h()},l(t){const _=Qr('[data-svelte="svelte-1phssyn"]',document.head);i=o(_,"META",{name:!0,content:!0}),_.forEach(a),$=g(t),d=o(t,"H1",{class:!0});var Ot=s(d);f=o(Ot,"A",{id:!0,class:!0,href:!0});var za=s(f);m=o(za,"SPAN",{});var Va=s(m);w(r.$$.fragment,Va),Va.forEach(a),za.forEach(a),h=g(Ot),q=o(Ot,"SPAN",{});var Ga=s(q);u=p(Ga,"Hugging Face Hub API"),Ga.forEach(a),Ot.forEach(a),v=g(t),F=o(t,"P",{});var St=s(F);L=p(St,"Below is the documentation for the "),M=o(St,"CODE",{});var Wa=s(M);O=p(Wa,"HfApi"),Wa.forEach(a),S=p(St,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),St.forEach(a),T=g(t),I=o(t,"P",{});var Ut=s(I);U=p(Ut,"All methods from the "),C=o(Ut,"CODE",{});var Ra=s(C);ie=p(Ra,"HfApi"),Ra.forEach(a),le=p(Ut,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Ut.forEach(a),V=g(t),G=o(t,"P",{});var Ba=s(G);ge=p(Ba,"The following approach uses the method from the root of the package:"),Ba.forEach(a),Xa=g(t),w(Ze.$$.fragment,t),Ya=g(t),fe=o(t,"P",{});var Ct=s(fe);Tn=p(Ct,"The following approach uses the "),ta=o(Ct,"CODE",{});var Ka=s(ta);Ln=p(Ka,"HfApi"),Ka.forEach(a),In=p(Ct," class:"),Ct.forEach(a),Za=g(t),w(et.$$.fragment,t),en=g(t),ue=o(t,"P",{});var zt=s(ue);Mn=p(zt,"Using the "),aa=o(zt,"CODE",{});var Ja=s(aa);On=p(Ja,"HfApi"),Ja.forEach(a),Sn=p(zt," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),zt.forEach(a),tn=g(t),D=o(t,"DIV",{class:!0});var E=s(D);w(tt.$$.fragment,E),Un=g(E),me=o(E,"DIV",{class:!0});var fn=s(me);w(at.$$.fragment,fn),Cn=g(fn),na=o(fn,"P",{});var or=s(na);zn=p(or,"Create an empty repo on the HuggingFace Hub."),or.forEach(a),fn.forEach(a),Vn=g(E),ee=o(E,"DIV",{class:!0});var Gt=s(ee);w(nt.$$.fragment,Gt),Gn=g(Gt),oa=o(Gt,"P",{});var sr=s(oa);Wn=p(sr,"Get info on one specific dataset on huggingface.co."),sr.forEach(a),Rn=g(Gt),sa=o(Gt,"P",{});var rr=s(sa);Bn=p(rr,"Dataset can be private if you pass an acceptable token."),rr.forEach(a),Gt.forEach(a),Kn=g(E),te=o(E,"DIV",{class:!0});var Wt=s(te);w(ot.$$.fragment,Wt),Jn=g(Wt),ra=o(Wt,"P",{});var ir=s(ra);Qn=p(ir,"Deletes a file in the given repo."),ir.forEach(a),Xn=g(Wt),w(_e.$$.fragment,Wt),Wt.forEach(a),Yn=g(E),be=o(E,"DIV",{class:!0});var un=s(be);w(st.$$.fragment,un),Zn=g(un),ia=o(un,"P",{});var lr=s(ia);eo=p(lr,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),lr.forEach(a),un.forEach(a),to=g(E),$e=o(E,"DIV",{class:!0});var mn=s($e);w(rt.$$.fragment,mn),ao=g(mn),la=o(mn,"P",{});var gr=s(la);no=p(gr,"Gets all valid dataset tags as a nested namespace object."),gr.forEach(a),mn.forEach(a),oo=g(E),ve=o(E,"DIV",{class:!0});var _n=s(ve);w(it.$$.fragment,_n),so=g(_n),ga=o(_n,"P",{});var cr=s(ga);ro=p(cr,`Returns the repository name for a given model ID and optional
organization.`),cr.forEach(a),_n.forEach(a),io=g(E),ye=o(E,"DIV",{class:!0});var bn=s(ye);w(lt.$$.fragment,bn),lo=g(bn),ca=o(bn,"P",{});var pr=s(ca);go=p(pr,"Gets all valid model tags as a nested namespace object"),pr.forEach(a),bn.forEach(a),co=g(E),W=o(E,"DIV",{class:!0});var Ke=s(W);w(gt.$$.fragment,Ke),po=g(Ke),pa=o(Ke,"P",{});var hr=s(pa);ho=p(hr,"Get the public list of all the datasets on huggingface.co"),hr.forEach(a),fo=g(Ke),w(ke.$$.fragment,Ke),uo=g(Ke),w(we.$$.fragment,Ke),Ke.forEach(a),mo=g(E),Ae=o(E,"DIV",{class:!0});var $n=s(Ae);w(ct.$$.fragment,$n),_o=g($n),ha=o($n,"P",{});var dr=s(ha);bo=p(dr,"Get the public list of all the metrics on huggingface.co"),dr.forEach(a),$n.forEach(a),$o=g(E),R=o(E,"DIV",{class:!0});var Je=s(R);w(pt.$$.fragment,Je),vo=g(Je),da=o(Je,"P",{});var fr=s(da);yo=p(fr,"Get the public list of all the models on huggingface.co"),fr.forEach(a),ko=g(Je),w(je.$$.fragment,Je),wo=g(Je),w(He.$$.fragment,Je),Je.forEach(a),Ao=g(E),xe=o(E,"DIV",{class:!0});var vn=s(xe);w(ht.$$.fragment,vn),jo=g(vn),fa=o(vn,"P",{});var ur=s(fa);Ho=p(ur,"Get the list of files in a given repo."),ur.forEach(a),vn.forEach(a),xo=g(E),B=o(E,"DIV",{class:!0});var Qe=s(B);w(dt.$$.fragment,Qe),Do=g(Qe),ua=o(Qe,"P",{});var mr=s(ua);Eo=p(mr,"Call HF API to sign in a user and get a token if credentials are valid."),mr.forEach(a),qo=g(Qe),w(De.$$.fragment,Qe),Fo=g(Qe),w(Ee.$$.fragment,Qe),Qe.forEach(a),No=g(E),ae=o(E,"DIV",{class:!0});var Rt=s(ae);w(ft.$$.fragment,Rt),Po=g(Rt),ma=o(Rt,"P",{});var _r=s(ma);To=p(_r,"Call HF API to log out."),_r.forEach(a),Lo=g(Rt),w(qe.$$.fragment,Rt),Rt.forEach(a),Io=g(E),ne=o(E,"DIV",{class:!0});var Bt=s(ne);w(ut.$$.fragment,Bt),Mo=g(Bt),_a=o(Bt,"P",{});var br=s(_a);Oo=p(br,"Get info on one specific model on huggingface.co"),br.forEach(a),So=g(Bt),ba=o(Bt,"P",{});var $r=s(ba);Uo=p($r,"Model can be private if you pass an acceptable token or are logged in."),$r.forEach(a),Bt.forEach(a),Co=g(E),oe=o(E,"DIV",{class:!0});var Kt=s(oe);w(mt.$$.fragment,Kt),zo=g(Kt),$a=o(Kt,"P",{});var vr=s($a);Vo=p(vr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),vr.forEach(a),Go=g(Kt),_t=o(Kt,"P",{});var yn=s(_t);Wo=p(yn,`Note there are certain limitations. For more information about moving
repositories, please see
`),bt=o(yn,"A",{href:!0,rel:!0});var yr=s(bt);Ro=p(yr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),yr.forEach(a),Bo=p(yn,"."),yn.forEach(a),Kt.forEach(a),Ko=g(E),Fe=o(E,"DIV",{class:!0});var kn=s(Fe);w($t.$$.fragment,kn),Jo=g(kn),va=o(kn,"P",{});var kr=s(va);Qo=p(kr,"Get the info object for a given repo of a given type."),kr.forEach(a),kn.forEach(a),Xo=g(E),Ne=o(E,"DIV",{class:!0});var wn=s(Ne);w(vt.$$.fragment,wn),Yo=g(wn),ya=o(wn,"P",{});var wr=s(ya);Zo=p(wr,`Saves the passed access token so git can correctly authenticate the
user.`),wr.forEach(a),wn.forEach(a),es=g(E),se=o(E,"DIV",{class:!0});var Jt=s(se);w(yt.$$.fragment,Jt),ts=g(Jt),ka=o(Jt,"P",{});var Ar=s(ka);as=p(Ar,"Get info on one specific Space on huggingface.co."),Ar.forEach(a),ns=g(Jt),wa=o(Jt,"P",{});var jr=s(wa);os=p(jr,"Space can be private if you pass an acceptable token."),jr.forEach(a),Jt.forEach(a),ss=g(E),Pe=o(E,"DIV",{class:!0});var An=s(Pe);w(kt.$$.fragment,An),rs=g(An),Aa=o(An,"P",{});var Hr=s(Aa);is=p(Hr,"Resets the user\u2019s access token."),Hr.forEach(a),An.forEach(a),ls=g(E),Te=o(E,"DIV",{class:!0});var jn=s(Te);w(wt.$$.fragment,jn),gs=g(jn),ja=o(jn,"P",{});var xr=s(ja);cs=p(xr,"Update the visibility setting of a repository."),xr.forEach(a),jn.forEach(a),ps=g(E),K=o(E,"DIV",{class:!0});var Xe=s(K);w(At.$$.fragment,Xe),hs=g(Xe),Ha=o(Xe,"P",{});var Dr=s(Ha);ds=p(Dr,`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Dr.forEach(a),fs=g(Xe),w(Le.$$.fragment,Xe),us=g(Xe),w(Ie.$$.fragment,Xe),Xe.forEach(a),ms=g(E),Me=o(E,"DIV",{class:!0});var Hn=s(Me);w(jt.$$.fragment,Hn),_s=g(Hn),xa=o(Hn,"P",{});var Er=s(xa);bs=p(Er,"Call HF API to know \u201Cwhoami\u201D."),Er.forEach(a),Hn.forEach(a),E.forEach(a),an=g(t),ce=o(t,"H2",{class:!0});var xn=s(ce);Oe=o(xn,"A",{id:!0,class:!0,href:!0});var qr=s(Oe);Da=o(qr,"SPAN",{});var Fr=s(Da);w(Ht.$$.fragment,Fr),Fr.forEach(a),qr.forEach(a),$s=g(xn),Ea=o(xn,"SPAN",{});var Nr=s(Ea);vs=p(Nr,"Hugging Face local storage"),Nr.forEach(a),xn.forEach(a),nn=g(t),xt=o(t,"P",{});var ar=s(xt);qa=o(ar,"CODE",{});var Pr=s(qa);ys=p(Pr,"huggingface_hub"),Pr.forEach(a),ks=p(ar,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),ar.forEach(a),on=g(t),Se=o(t,"P",{});var Dn=s(Se);ws=p(Dn,"It does this using the "),Vt=o(Dn,"A",{href:!0});var Tr=s(Vt);As=p(Tr,"HfFolder"),Tr.forEach(a),js=p(Dn," utility, which saves data at the root of the user."),Dn.forEach(a),sn=g(t),z=o(t,"DIV",{class:!0});var Ye=s(z);w(Dt.$$.fragment,Ye),Hs=g(Ye),Ue=o(Ye,"DIV",{class:!0});var En=s(Ue);w(Et.$$.fragment,En),xs=g(En),Fa=o(En,"P",{});var Lr=s(Fa);Ds=p(Lr,"Deletes the token from storage. Does not fail if token does not exist."),Lr.forEach(a),En.forEach(a),Es=g(Ye),re=o(Ye,"DIV",{class:!0});var Qt=s(re);w(qt.$$.fragment,Qt),qs=g(Qt),Na=o(Qt,"P",{});var Ir=s(Na);Fs=p(Ir,"Get token or None if not existent."),Ir.forEach(a),Ns=g(Qt),Ft=o(Qt,"P",{});var qn=s(Ft);Ps=p(qn,"Note that a token can be also provided using the "),Pa=o(qn,"CODE",{});var Mr=s(Pa);Ts=p(Mr,"HUGGING_FACE_HUB_TOKEN"),Mr.forEach(a),Ls=p(qn,`
environment variable.`),qn.forEach(a),Qt.forEach(a),Is=g(Ye),Ce=o(Ye,"DIV",{class:!0});var Fn=s(Ce);w(Nt.$$.fragment,Fn),Ms=g(Fn),Ta=o(Fn,"P",{});var Or=s(Ta);Os=p(Or,"Save token, creating folder as needed."),Or.forEach(a),Fn.forEach(a),Ye.forEach(a),rn=g(t),pe=o(t,"H2",{class:!0});var Nn=s(pe);ze=o(Nn,"A",{id:!0,class:!0,href:!0});var Sr=s(ze);La=o(Sr,"SPAN",{});var Ur=s(La);w(Pt.$$.fragment,Ur),Ur.forEach(a),Sr.forEach(a),Ss=g(Nn),Ia=o(Nn,"SPAN",{});var Cr=s(Ia);Us=p(Cr,"Filtering helpers"),Cr.forEach(a),Nn.forEach(a),ln=g(t),Ve=o(t,"P",{});var Pn=s(Ve);Cs=p(Pn,"Some helpers to filter repositories on the Hub are available in the "),Ma=o(Pn,"CODE",{});var zr=s(Ma);zs=p(zr,"huggingface_hub"),zr.forEach(a),Vs=p(Pn," package."),Pn.forEach(a),gn=g(t),J=o(t,"DIV",{class:!0});var Xt=s(J);w(Tt.$$.fragment,Xt),Gs=g(Xt),Oa=o(Xt,"P",{});var Vr=s(Oa);Ws=p(Vr,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Vr.forEach(a),Rs=g(Xt),w(Ge.$$.fragment,Xt),Xt.forEach(a),cn=g(t),Q=o(t,"DIV",{class:!0});var Yt=s(Q);w(Lt.$$.fragment,Yt),Bs=g(Yt),Sa=o(Yt,"P",{});var Gr=s(Sa);Ks=p(Gr,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Gr.forEach(a),Js=g(Yt),w(We.$$.fragment,Yt),Yt.forEach(a),pn=g(t),X=o(t,"DIV",{class:!0});var Zt=s(X);w(It.$$.fragment,Zt),Qs=g(Zt),Ua=o(Zt,"P",{});var Wr=s(Ua);Xs=p(Wr,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Wr.forEach(a),Ys=g(Zt),w(Re.$$.fragment,Zt),Zt.forEach(a),hn=g(t),Y=o(t,"DIV",{class:!0});var ea=s(Y);w(Mt.$$.fragment,ea),Zs=g(ea),Ca=o(ea,"P",{});var Rr=s(Ca);er=p(Rr,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Rr.forEach(a),tr=g(ea),w(Be.$$.fragment,ea),ea.forEach(a),this.h()},h(){y(i,"name","hf:doc:metadata"),y(i,"content",JSON.stringify(di)),y(f,"id","huggingface_hub.HfApi"),y(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(f,"href","#huggingface_hub.HfApi"),y(d,"class","relative group"),y(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(bt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),y(bt,"rel","nofollow"),y(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Oe,"id","huggingface_hub.HfFolder"),y(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(Oe,"href","#huggingface_hub.HfFolder"),y(ce,"class","relative group"),y(Vt,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfFolder"),y(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ze,"id","huggingface_hub.DatasetFilter"),y(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(ze,"href","#huggingface_hub.DatasetFilter"),y(pe,"class","relative group"),y(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,i),b(t,$,_),b(t,d,_),e(d,f),e(f,m),A(r,m,null),e(d,h),e(d,q),e(q,u),b(t,v,_),b(t,F,_),e(F,L),e(F,M),e(M,O),e(F,S),b(t,T,_),b(t,I,_),e(I,U),e(I,C),e(C,ie),e(I,le),b(t,V,_),b(t,G,_),e(G,ge),b(t,Xa,_),A(Ze,t,_),b(t,Ya,_),b(t,fe,_),e(fe,Tn),e(fe,ta),e(ta,Ln),e(fe,In),b(t,Za,_),A(et,t,_),b(t,en,_),b(t,ue,_),e(ue,Mn),e(ue,aa),e(aa,On),e(ue,Sn),b(t,tn,_),b(t,D,_),A(tt,D,null),e(D,Un),e(D,me),A(at,me,null),e(me,Cn),e(me,na),e(na,zn),e(D,Vn),e(D,ee),A(nt,ee,null),e(ee,Gn),e(ee,oa),e(oa,Wn),e(ee,Rn),e(ee,sa),e(sa,Bn),e(D,Kn),e(D,te),A(ot,te,null),e(te,Jn),e(te,ra),e(ra,Qn),e(te,Xn),A(_e,te,null),e(D,Yn),e(D,be),A(st,be,null),e(be,Zn),e(be,ia),e(ia,eo),e(D,to),e(D,$e),A(rt,$e,null),e($e,ao),e($e,la),e(la,no),e(D,oo),e(D,ve),A(it,ve,null),e(ve,so),e(ve,ga),e(ga,ro),e(D,io),e(D,ye),A(lt,ye,null),e(ye,lo),e(ye,ca),e(ca,go),e(D,co),e(D,W),A(gt,W,null),e(W,po),e(W,pa),e(pa,ho),e(W,fo),A(ke,W,null),e(W,uo),A(we,W,null),e(D,mo),e(D,Ae),A(ct,Ae,null),e(Ae,_o),e(Ae,ha),e(ha,bo),e(D,$o),e(D,R),A(pt,R,null),e(R,vo),e(R,da),e(da,yo),e(R,ko),A(je,R,null),e(R,wo),A(He,R,null),e(D,Ao),e(D,xe),A(ht,xe,null),e(xe,jo),e(xe,fa),e(fa,Ho),e(D,xo),e(D,B),A(dt,B,null),e(B,Do),e(B,ua),e(ua,Eo),e(B,qo),A(De,B,null),e(B,Fo),A(Ee,B,null),e(D,No),e(D,ae),A(ft,ae,null),e(ae,Po),e(ae,ma),e(ma,To),e(ae,Lo),A(qe,ae,null),e(D,Io),e(D,ne),A(ut,ne,null),e(ne,Mo),e(ne,_a),e(_a,Oo),e(ne,So),e(ne,ba),e(ba,Uo),e(D,Co),e(D,oe),A(mt,oe,null),e(oe,zo),e(oe,$a),e($a,Vo),e(oe,Go),e(oe,_t),e(_t,Wo),e(_t,bt),e(bt,Ro),e(_t,Bo),e(D,Ko),e(D,Fe),A($t,Fe,null),e(Fe,Jo),e(Fe,va),e(va,Qo),e(D,Xo),e(D,Ne),A(vt,Ne,null),e(Ne,Yo),e(Ne,ya),e(ya,Zo),e(D,es),e(D,se),A(yt,se,null),e(se,ts),e(se,ka),e(ka,as),e(se,ns),e(se,wa),e(wa,os),e(D,ss),e(D,Pe),A(kt,Pe,null),e(Pe,rs),e(Pe,Aa),e(Aa,is),e(D,ls),e(D,Te),A(wt,Te,null),e(Te,gs),e(Te,ja),e(ja,cs),e(D,ps),e(D,K),A(At,K,null),e(K,hs),e(K,Ha),e(Ha,ds),e(K,fs),A(Le,K,null),e(K,us),A(Ie,K,null),e(D,ms),e(D,Me),A(jt,Me,null),e(Me,_s),e(Me,xa),e(xa,bs),b(t,an,_),b(t,ce,_),e(ce,Oe),e(Oe,Da),A(Ht,Da,null),e(ce,$s),e(ce,Ea),e(Ea,vs),b(t,nn,_),b(t,xt,_),e(xt,qa),e(qa,ys),e(xt,ks),b(t,on,_),b(t,Se,_),e(Se,ws),e(Se,Vt),e(Vt,As),e(Se,js),b(t,sn,_),b(t,z,_),A(Dt,z,null),e(z,Hs),e(z,Ue),A(Et,Ue,null),e(Ue,xs),e(Ue,Fa),e(Fa,Ds),e(z,Es),e(z,re),A(qt,re,null),e(re,qs),e(re,Na),e(Na,Fs),e(re,Ns),e(re,Ft),e(Ft,Ps),e(Ft,Pa),e(Pa,Ts),e(Ft,Ls),e(z,Is),e(z,Ce),A(Nt,Ce,null),e(Ce,Ms),e(Ce,Ta),e(Ta,Os),b(t,rn,_),b(t,pe,_),e(pe,ze),e(ze,La),A(Pt,La,null),e(pe,Ss),e(pe,Ia),e(Ia,Us),b(t,ln,_),b(t,Ve,_),e(Ve,Cs),e(Ve,Ma),e(Ma,zs),e(Ve,Vs),b(t,gn,_),b(t,J,_),A(Tt,J,null),e(J,Gs),e(J,Oa),e(Oa,Ws),e(J,Rs),A(Ge,J,null),b(t,cn,_),b(t,Q,_),A(Lt,Q,null),e(Q,Bs),e(Q,Sa),e(Sa,Ks),e(Q,Js),A(We,Q,null),b(t,pn,_),b(t,X,_),A(It,X,null),e(X,Qs),e(X,Ua),e(Ua,Xs),e(X,Ys),A(Re,X,null),b(t,hn,_),b(t,Y,_),A(Mt,Y,null),e(Y,Zs),e(Y,Ca),e(Ca,er),e(Y,tr),A(Be,Y,null),dn=!0},p(t,[_]){const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:t}),_e.$set(Ot);const za={};_&2&&(za.$$scope={dirty:_,ctx:t}),ke.$set(za);const Va={};_&2&&(Va.$$scope={dirty:_,ctx:t}),we.$set(Va);const Ga={};_&2&&(Ga.$$scope={dirty:_,ctx:t}),je.$set(Ga);const St={};_&2&&(St.$$scope={dirty:_,ctx:t}),He.$set(St);const Wa={};_&2&&(Wa.$$scope={dirty:_,ctx:t}),De.$set(Wa);const Ut={};_&2&&(Ut.$$scope={dirty:_,ctx:t}),Ee.$set(Ut);const Ra={};_&2&&(Ra.$$scope={dirty:_,ctx:t}),qe.$set(Ra);const Ba={};_&2&&(Ba.$$scope={dirty:_,ctx:t}),Le.$set(Ba);const Ct={};_&2&&(Ct.$$scope={dirty:_,ctx:t}),Ie.$set(Ct);const Ka={};_&2&&(Ka.$$scope={dirty:_,ctx:t}),Ge.$set(Ka);const zt={};_&2&&(zt.$$scope={dirty:_,ctx:t}),We.$set(zt);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:t}),Re.$set(Ja);const E={};_&2&&(E.$$scope={dirty:_,ctx:t}),Be.$set(E)},i(t){dn||(j(r.$$.fragment,t),j(Ze.$$.fragment,t),j(et.$$.fragment,t),j(tt.$$.fragment,t),j(at.$$.fragment,t),j(nt.$$.fragment,t),j(ot.$$.fragment,t),j(_e.$$.fragment,t),j(st.$$.fragment,t),j(rt.$$.fragment,t),j(it.$$.fragment,t),j(lt.$$.fragment,t),j(gt.$$.fragment,t),j(ke.$$.fragment,t),j(we.$$.fragment,t),j(ct.$$.fragment,t),j(pt.$$.fragment,t),j(je.$$.fragment,t),j(He.$$.fragment,t),j(ht.$$.fragment,t),j(dt.$$.fragment,t),j(De.$$.fragment,t),j(Ee.$$.fragment,t),j(ft.$$.fragment,t),j(qe.$$.fragment,t),j(ut.$$.fragment,t),j(mt.$$.fragment,t),j($t.$$.fragment,t),j(vt.$$.fragment,t),j(yt.$$.fragment,t),j(kt.$$.fragment,t),j(wt.$$.fragment,t),j(At.$$.fragment,t),j(Le.$$.fragment,t),j(Ie.$$.fragment,t),j(jt.$$.fragment,t),j(Ht.$$.fragment,t),j(Dt.$$.fragment,t),j(Et.$$.fragment,t),j(qt.$$.fragment,t),j(Nt.$$.fragment,t),j(Pt.$$.fragment,t),j(Tt.$$.fragment,t),j(Ge.$$.fragment,t),j(Lt.$$.fragment,t),j(We.$$.fragment,t),j(It.$$.fragment,t),j(Re.$$.fragment,t),j(Mt.$$.fragment,t),j(Be.$$.fragment,t),dn=!0)},o(t){H(r.$$.fragment,t),H(Ze.$$.fragment,t),H(et.$$.fragment,t),H(tt.$$.fragment,t),H(at.$$.fragment,t),H(nt.$$.fragment,t),H(ot.$$.fragment,t),H(_e.$$.fragment,t),H(st.$$.fragment,t),H(rt.$$.fragment,t),H(it.$$.fragment,t),H(lt.$$.fragment,t),H(gt.$$.fragment,t),H(ke.$$.fragment,t),H(we.$$.fragment,t),H(ct.$$.fragment,t),H(pt.$$.fragment,t),H(je.$$.fragment,t),H(He.$$.fragment,t),H(ht.$$.fragment,t),H(dt.$$.fragment,t),H(De.$$.fragment,t),H(Ee.$$.fragment,t),H(ft.$$.fragment,t),H(qe.$$.fragment,t),H(ut.$$.fragment,t),H(mt.$$.fragment,t),H($t.$$.fragment,t),H(vt.$$.fragment,t),H(yt.$$.fragment,t),H(kt.$$.fragment,t),H(wt.$$.fragment,t),H(At.$$.fragment,t),H(Le.$$.fragment,t),H(Ie.$$.fragment,t),H(jt.$$.fragment,t),H(Ht.$$.fragment,t),H(Dt.$$.fragment,t),H(Et.$$.fragment,t),H(qt.$$.fragment,t),H(Nt.$$.fragment,t),H(Pt.$$.fragment,t),H(Tt.$$.fragment,t),H(Ge.$$.fragment,t),H(Lt.$$.fragment,t),H(We.$$.fragment,t),H(It.$$.fragment,t),H(Re.$$.fragment,t),H(Mt.$$.fragment,t),H(Be.$$.fragment,t),dn=!1},d(t){a(i),t&&a($),t&&a(d),x(r),t&&a(v),t&&a(F),t&&a(T),t&&a(I),t&&a(V),t&&a(G),t&&a(Xa),x(Ze,t),t&&a(Ya),t&&a(fe),t&&a(Za),x(et,t),t&&a(en),t&&a(ue),t&&a(tn),t&&a(D),x(tt),x(at),x(nt),x(ot),x(_e),x(st),x(rt),x(it),x(lt),x(gt),x(ke),x(we),x(ct),x(pt),x(je),x(He),x(ht),x(dt),x(De),x(Ee),x(ft),x(qe),x(ut),x(mt),x($t),x(vt),x(yt),x(kt),x(wt),x(At),x(Le),x(Ie),x(jt),t&&a(an),t&&a(ce),x(Ht),t&&a(nn),t&&a(xt),t&&a(on),t&&a(Se),t&&a(sn),t&&a(z),x(Dt),x(Et),x(qt),x(Nt),t&&a(rn),t&&a(pe),x(Pt),t&&a(ln),t&&a(Ve),t&&a(gn),t&&a(J),x(Tt),x(Ge),t&&a(cn),t&&a(Q),x(Lt),x(We),t&&a(pn),t&&a(X),x(It),x(Re),t&&a(hn),t&&a(Y),x(Mt),x(Be)}}}const di={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function fi(P){return Xr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yi extends Br{constructor(i){super();Kr(this,i,fi,hi,Jr,{})}}export{yi as default,di as metadata};
