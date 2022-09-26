import{S as ai,i as ti,s as si,e as n,k as c,w as x,t as d,M as ni,c as r,d as t,m as p,a as o,x as $,h as g,b as l,G as a,g as u,y,q as j,o as w,B as D,v as ri,L as oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as ei}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as M}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function oi(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
text = '''
---
language: en
license: mit
---
# My repo
'''
card = RepoCard(text)
card.data.to_dict()
card.text
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&#x27;&#x27;&#x27;
<span class="hljs-meta">... </span>---
<span class="hljs-meta">... </span>language: en
<span class="hljs-meta">... </span>license: mit
<span class="hljs-meta">... </span>---
...
<span class="hljs-meta">... </span># My repo
<span class="hljs-meta">... </span>&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard(text)
<span class="hljs-meta">&gt;&gt;&gt; </span>card.data.to_dict()
{<span class="hljs-string">&#x27;language&#x27;</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>: <span class="hljs-string">&#x27;mit&#x27;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>card.text
<span class="hljs-string">&#x27;\\n# My repo\\n&#x27;</span>
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function li(C){let h,v,_,i,b,s,f;return{c(){h=d(`Raises the following error:
`),v=n("ul"),_=n("li"),i=n("a"),b=n("code"),s=d("ValueError"),f=d(`
when the content of the repo card metadata is not a dictionary.`),this.h()},l(A){h=g(A,`Raises the following error:
`),v=r(A,"UL",{});var T=o(v);_=r(T,"LI",{});var q=o(_);i=r(q,"A",{href:!0,rel:!0});var k=o(i);b=r(k,"CODE",{});var Z=o(b);s=g(Z,"ValueError"),Z.forEach(t),k.forEach(t),f=g(q,`
when the content of the repo card metadata is not a dictionary.`),q.forEach(t),T.forEach(t),this.h()},h(){l(i,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),l(i,"rel","nofollow")},m(A,T){u(A,h,T),u(A,v,T),a(v,_),a(_,i),a(i,b),a(b,s),a(_,f)},d(A){A&&t(h),A&&t(v)}}}function ii(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
card = RepoCard.load("nateraw/food")
assert card.data.tags == ["generated_from_trainer", "image-classification", "pytorch"]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard.load(<span class="hljs-string">&quot;nateraw/food&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> card.data.tags == [<span class="hljs-string">&quot;generated_from_trainer&quot;</span>, <span class="hljs-string">&quot;image-classification&quot;</span>, <span class="hljs-string">&quot;pytorch&quot;</span>]
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function ci(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
card = RepoCard("---\\nlanguage: en\\n---\\n# This is a test repo card")
card.save("/tmp/test.md")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard(<span class="hljs-string">&quot;---\\nlanguage: en\\n---\\n# This is a test repo card&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card.save(<span class="hljs-string">&quot;/tmp/test.md&quot;</span>)
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function pi(C){let h,v,_,i,b,s,f,A,T,q,k,Z,V;return{c(){h=d(`Raises the following errors:
`),v=n("ul"),_=n("li"),i=n("a"),b=n("code"),s=d("ValueError"),f=d(`
if the card fails validation checks.`),A=c(),T=n("li"),q=n("a"),k=n("code"),Z=d("HTTPError"),V=d(`
if the request to the Hub API fails for any other reason.`),this.h()},l(L){h=g(L,`Raises the following errors:
`),v=r(L,"UL",{});var B=o(v);_=r(B,"LI",{});var ee=o(_);i=r(ee,"A",{href:!0,rel:!0});var Qa=o(i);b=r(Qa,"CODE",{});var Xa=o(b);s=g(Xa,"ValueError"),Xa.forEach(t),Qa.forEach(t),f=g(ee,`
if the card fails validation checks.`),ee.forEach(t),A=p(B),T=r(B,"LI",{});var Ce=o(T);q=r(Ce,"A",{href:!0,rel:!0});var H=o(q);k=r(H,"CODE",{});var z=o(k);Z=g(z,"HTTPError"),z.forEach(t),H.forEach(t),V=g(Ce,`
if the request to the Hub API fails for any other reason.`),Ce.forEach(t),B.forEach(t),this.h()},h(){l(i,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),l(i,"rel","nofollow"),l(q,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),l(q,"rel","nofollow")},m(L,B){u(L,h,B),u(L,v,B),a(v,_),a(_,i),a(i,b),a(b,s),a(_,f),a(v,A),a(v,T),a(T,q),a(q,k),a(k,Z),a(T,V)},d(L){L&&t(h),L&&t(v)}}}function di(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import ModelCard, ModelCardData, EvalResult

# Using the Default Template
card_data = ModelCardData(
    language='en',
    license='mit',
    library_name='timm',
    tags=['image-classification', 'resnet'],
    datasets='beans',
    metrics=['accuracy'],
)
card = ModelCard.from_template(
    card_data,
    model_description='This model does x + y...'
)

# Including Evaluation Results
card_data = ModelCardData(
    language='en',
    tags=['image-classification', 'resnet'],
    eval_results=[
        EvalResult(
            task_type='image-classification',
            dataset_type='beans',
            dataset_name='Beans',
            metric_type='accuracy',
            metric_value=0.9,
        ),
    ],
    model_name='my-cool-model',
)
card = ModelCard.from_template(card_data)

# Using a Custom Template
card_data = ModelCardData(
    language='en',
    tags=['image-classification', 'resnet']
)
card = ModelCard.from_template(
    card_data=card_data,
    template_path='./src/huggingface_hub/templates/modelcard_template.md',
    custom_template_var='custom value',  # will be replaced in template if it exists
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCard, ModelCardData, EvalResult

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the Default Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
<span class="hljs-meta">... </span>    library_name=<span class="hljs-string">&#x27;timm&#x27;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>],
<span class="hljs-meta">... </span>    datasets=<span class="hljs-string">&#x27;beans&#x27;</span>,
<span class="hljs-meta">... </span>    metrics=[<span class="hljs-string">&#x27;accuracy&#x27;</span>],
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = ModelCard.from_template(
<span class="hljs-meta">... </span>    card_data,
<span class="hljs-meta">... </span>    model_description=<span class="hljs-string">&#x27;This model does x + y...&#x27;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Including Evaluation Results</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>],
<span class="hljs-meta">... </span>    eval_results=[
<span class="hljs-meta">... </span>        EvalResult(
<span class="hljs-meta">... </span>            task_type=<span class="hljs-string">&#x27;image-classification&#x27;</span>,
<span class="hljs-meta">... </span>            dataset_type=<span class="hljs-string">&#x27;beans&#x27;</span>,
<span class="hljs-meta">... </span>            dataset_name=<span class="hljs-string">&#x27;Beans&#x27;</span>,
<span class="hljs-meta">... </span>            metric_type=<span class="hljs-string">&#x27;accuracy&#x27;</span>,
<span class="hljs-meta">... </span>            metric_value=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>        ),
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">... </span>    model_name=<span class="hljs-string">&#x27;my-cool-model&#x27;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = ModelCard.from_template(card_data)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using a Custom Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = ModelCard.from_template(
<span class="hljs-meta">... </span>    card_data=card_data,
<span class="hljs-meta">... </span>    template_path=<span class="hljs-string">&#x27;./src/huggingface_hub/templates/modelcard_template.md&#x27;</span>,
<span class="hljs-meta">... </span>    custom_template_var=<span class="hljs-string">&#x27;custom value&#x27;</span>,  <span class="hljs-comment"># will be replaced in template if it exists</span>
<span class="hljs-meta">... </span>)
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function gi(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import ModelCardData
card_data = ModelCardData(
    language="en",
    license="mit",
    library_name="timm",
    tags=['image-classification', 'resnet'],
)
card_data.to_dict()
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelCardData
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = ModelCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&quot;en&quot;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&quot;mit&quot;</span>,
<span class="hljs-meta">... </span>    library_name=<span class="hljs-string">&quot;timm&quot;</span>,
<span class="hljs-meta">... </span>    tags=[<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>],
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data.to_dict()
{<span class="hljs-string">&#x27;language&#x27;</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>: <span class="hljs-string">&#x27;mit&#x27;</span>, <span class="hljs-string">&#x27;library_name&#x27;</span>: <span class="hljs-string">&#x27;timm&#x27;</span>, <span class="hljs-string">&#x27;tags&#x27;</span>: [<span class="hljs-string">&#x27;image-classification&#x27;</span>, <span class="hljs-string">&#x27;resnet&#x27;</span>]}
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function hi(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import DatasetCard, DatasetCardData

# Using the Default Template
card_data = DatasetCardData(
    language='en',
    license='mit',
    annotations_creators='crowdsourced',
    task_categories=['text-classification'],
    task_ids=['sentiment-classification', 'text-scoring'],
    multilinguality='monolingual',
    pretty_name='My Text Classification Dataset',
)
card = DatasetCard.from_template(
    card_data,
    pretty_name=card_data.pretty_name,
)

# Using a Custom Template
card_data = DatasetCardData(
    language='en',
    license='mit',
)
card = DatasetCard.from_template(
    card_data=card_data,
    template_path='./src/huggingface_hub/templates/datasetcard_template.md',
    custom_template_var='custom value',  # will be replaced in template if it exists
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> DatasetCard, DatasetCardData

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the Default Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = DatasetCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
<span class="hljs-meta">... </span>    annotations_creators=<span class="hljs-string">&#x27;crowdsourced&#x27;</span>,
<span class="hljs-meta">... </span>    task_categories=[<span class="hljs-string">&#x27;text-classification&#x27;</span>],
<span class="hljs-meta">... </span>    task_ids=[<span class="hljs-string">&#x27;sentiment-classification&#x27;</span>, <span class="hljs-string">&#x27;text-scoring&#x27;</span>],
<span class="hljs-meta">... </span>    multilinguality=<span class="hljs-string">&#x27;monolingual&#x27;</span>,
<span class="hljs-meta">... </span>    pretty_name=<span class="hljs-string">&#x27;My Text Classification Dataset&#x27;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = DatasetCard.from_template(
<span class="hljs-meta">... </span>    card_data,
<span class="hljs-meta">... </span>    pretty_name=card_data.pretty_name,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using a Custom Template</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>card_data = DatasetCardData(
<span class="hljs-meta">... </span>    language=<span class="hljs-string">&#x27;en&#x27;</span>,
<span class="hljs-meta">... </span>    license=<span class="hljs-string">&#x27;mit&#x27;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card = DatasetCard.from_template(
<span class="hljs-meta">... </span>    card_data=card_data,
<span class="hljs-meta">... </span>    template_path=<span class="hljs-string">&#x27;./src/huggingface_hub/templates/datasetcard_template.md&#x27;</span>,
<span class="hljs-meta">... </span>    custom_template_var=<span class="hljs-string">&#x27;custom value&#x27;</span>,  <span class="hljs-comment"># will be replaced in template if it exists</span>
<span class="hljs-meta">... </span>)
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function mi(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard_data import model_index_to_eval_results
# Define a minimal model index
model_index = [
    {
        "name": "my-cool-model",
        "results": [
            {
                "task": {
                    "type": "image-classification"
                },
                "dataset": {
                    "type": "beans",
                    "name": "Beans"
                },
                "metrics": [
                    {
                        "type": "accuracy",
                        "value": 0.9
                    }
                ]
            }
        ]
    }
]
model_name, eval_results = model_index_to_eval_results(model_index)
model_name
eval_results[0].task_type
eval_results[0].metric_type
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard_data <span class="hljs-keyword">import</span> model_index_to_eval_results
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Define a minimal model index</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_index = [
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;my-cool-model&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;results&quot;</span>: [
<span class="hljs-meta">... </span>            {
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;task&quot;</span>: {
<span class="hljs-meta">... </span>                    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;image-classification&quot;</span>
<span class="hljs-meta">... </span>                },
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;dataset&quot;</span>: {
<span class="hljs-meta">... </span>                    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;beans&quot;</span>,
<span class="hljs-meta">... </span>                    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;Beans&quot;</span>
<span class="hljs-meta">... </span>                },
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;metrics&quot;</span>: [
<span class="hljs-meta">... </span>                    {
<span class="hljs-meta">... </span>                        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;accuracy&quot;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-number">0.9</span>
<span class="hljs-meta">... </span>                    }
<span class="hljs-meta">... </span>                ]
<span class="hljs-meta">... </span>            }
<span class="hljs-meta">... </span>        ]
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name, eval_results = model_index_to_eval_results(model_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name
<span class="hljs-string">&#x27;my-cool-model&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results[<span class="hljs-number">0</span>].task_type
<span class="hljs-string">&#x27;image-classification&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results[<span class="hljs-number">0</span>].metric_type
<span class="hljs-string">&#x27;accuracy&#x27;</span>
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function ui(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard_data import eval_results_to_model_index, EvalResult
# Define minimal eval_results
eval_results = [
    EvalResult(
        task_type="image-classification",  # Required
        dataset_type="beans",  # Required
        dataset_name="Beans",  # Required
        metric_type="accuracy",  # Required
        metric_value=0.9,  # Required
    )
]
eval_results_to_model_index("my-cool-model", eval_results)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard_data <span class="hljs-keyword">import</span> eval_results_to_model_index, EvalResult
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Define minimal eval_results</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results = [
<span class="hljs-meta">... </span>    EvalResult(
<span class="hljs-meta">... </span>        task_type=<span class="hljs-string">&quot;image-classification&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        dataset_type=<span class="hljs-string">&quot;beans&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        dataset_name=<span class="hljs-string">&quot;Beans&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        metric_type=<span class="hljs-string">&quot;accuracy&quot;</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>        metric_value=<span class="hljs-number">0.9</span>,  <span class="hljs-comment"># Required</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>eval_results_to_model_index(<span class="hljs-string">&quot;my-cool-model&quot;</span>, eval_results)
[{<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;my-cool-model&#x27;</span>, <span class="hljs-string">&#x27;results&#x27;</span>: [{<span class="hljs-string">&#x27;task&#x27;</span>: {<span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;image-classification&#x27;</span>}, <span class="hljs-string">&#x27;dataset&#x27;</span>: {<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Beans&#x27;</span>, <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;beans&#x27;</span>}, <span class="hljs-string">&#x27;metrics&#x27;</span>: [{<span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;accuracy&#x27;</span>, <span class="hljs-string">&#x27;value&#x27;</span>: <span class="hljs-number">0.9</span>}]}]}]
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function fi(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import metadata_eval_result
results = metadata_eval_result(
        model_pretty_name="RoBERTa fine-tuned on ReactionGIF",
        task_pretty_name="Text Classification",
        task_id="text-classification",
        metrics_pretty_name="Accuracy",
        metrics_id="accuracy",
        metrics_value=0.2662102282047272,
        dataset_pretty_name="ReactionJPEG",
        dataset_id="julien-c/reactionjpeg",
        dataset_config="default",
        dataset_split="test",
)
results == {
    'model-index': [
        {
            'name': 'RoBERTa fine-tuned on ReactionGIF',
            'results': [
                {
                    'task': {
                        'type': 'text-classification',
                        'name': 'Text Classification'
                    },
                    'dataset': {
                        'name': 'ReactionJPEG',
                        'type': 'julien-c/reactionjpeg',
                        'config': 'default',
                        'split': 'test'
                    },
                    'metrics': [
                        {
                            'type': 'accuracy',
                            'value': 0.2662102282047272,
                            'name': 'Accuracy',
                            'verified': False
                        }
                    ]
                }
            ]
        }
    ]
}
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> metadata_eval_result
<span class="hljs-meta">&gt;&gt;&gt; </span>results = metadata_eval_result(
<span class="hljs-meta">... </span>        model_pretty_name=<span class="hljs-string">&quot;RoBERTa fine-tuned on ReactionGIF&quot;</span>,
<span class="hljs-meta">... </span>        task_pretty_name=<span class="hljs-string">&quot;Text Classification&quot;</span>,
<span class="hljs-meta">... </span>        task_id=<span class="hljs-string">&quot;text-classification&quot;</span>,
<span class="hljs-meta">... </span>        metrics_pretty_name=<span class="hljs-string">&quot;Accuracy&quot;</span>,
<span class="hljs-meta">... </span>        metrics_id=<span class="hljs-string">&quot;accuracy&quot;</span>,
<span class="hljs-meta">... </span>        metrics_value=<span class="hljs-number">0.2662102282047272</span>,
<span class="hljs-meta">... </span>        dataset_pretty_name=<span class="hljs-string">&quot;ReactionJPEG&quot;</span>,
<span class="hljs-meta">... </span>        dataset_id=<span class="hljs-string">&quot;julien-c/reactionjpeg&quot;</span>,
<span class="hljs-meta">... </span>        dataset_config=<span class="hljs-string">&quot;default&quot;</span>,
<span class="hljs-meta">... </span>        dataset_split=<span class="hljs-string">&quot;test&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>results == {
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;model-index&#x27;</span>: [
<span class="hljs-meta">... </span>        {
<span class="hljs-meta">... </span>            <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;RoBERTa fine-tuned on ReactionGIF&#x27;</span>,
<span class="hljs-meta">... </span>            <span class="hljs-string">&#x27;results&#x27;</span>: [
<span class="hljs-meta">... </span>                {
<span class="hljs-meta">... </span>                    <span class="hljs-string">&#x27;task&#x27;</span>: {
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;text-classification&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Text Classification&#x27;</span>
<span class="hljs-meta">... </span>                    },
<span class="hljs-meta">... </span>                    <span class="hljs-string">&#x27;dataset&#x27;</span>: {
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;ReactionJPEG&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;julien-c/reactionjpeg&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;config&#x27;</span>: <span class="hljs-string">&#x27;default&#x27;</span>,
<span class="hljs-meta">... </span>                        <span class="hljs-string">&#x27;split&#x27;</span>: <span class="hljs-string">&#x27;test&#x27;</span>
<span class="hljs-meta">... </span>                    },
<span class="hljs-meta">... </span>                    <span class="hljs-string">&#x27;metrics&#x27;</span>: [
<span class="hljs-meta">... </span>                        {
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;accuracy&#x27;</span>,
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;value&#x27;</span>: <span class="hljs-number">0.2662102282047272</span>,
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Accuracy&#x27;</span>,
<span class="hljs-meta">... </span>                            <span class="hljs-string">&#x27;verified&#x27;</span>: <span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>                        }
<span class="hljs-meta">... </span>                    ]
<span class="hljs-meta">... </span>                }
<span class="hljs-meta">... </span>            ]
<span class="hljs-meta">... </span>        }
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>}
<span class="hljs-literal">True</span>
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function _i(C){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import metadata_update
metadata = {'model-index': [{'name': 'RoBERTa fine-tuned on ReactionGIF',
            'results': [{'dataset': {'name': 'ReactionGIF',
                                     'type': 'julien-c/reactiongif'},
                          'metrics': [{'name': 'Recall',
                                       'type': 'recall',
                                       'value': 0.7762102282047272}],
                         'task': {'name': 'Text Classification',
                                  'type': 'text-classification'}}]}]}
url = metadata_update("hf-internal-testing/reactiongif-roberta-card", metadata)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> metadata_update
<span class="hljs-meta">&gt;&gt;&gt; </span>metadata = {<span class="hljs-string">&#x27;model-index&#x27;</span>: [{<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;RoBERTa fine-tuned on ReactionGIF&#x27;</span>,
<span class="hljs-meta">... </span>            <span class="hljs-string">&#x27;results&#x27;</span>: [{<span class="hljs-string">&#x27;dataset&#x27;</span>: {<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;ReactionGIF&#x27;</span>,
<span class="hljs-meta">... </span>                                     <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;julien-c/reactiongif&#x27;</span>},
<span class="hljs-meta">... </span>                          <span class="hljs-string">&#x27;metrics&#x27;</span>: [{<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Recall&#x27;</span>,
<span class="hljs-meta">... </span>                                       <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;recall&#x27;</span>,
<span class="hljs-meta">... </span>                                       <span class="hljs-string">&#x27;value&#x27;</span>: <span class="hljs-number">0.7762102282047272</span>}],
<span class="hljs-meta">... </span>                         <span class="hljs-string">&#x27;task&#x27;</span>: {<span class="hljs-string">&#x27;name&#x27;</span>: <span class="hljs-string">&#x27;Text Classification&#x27;</span>,
<span class="hljs-meta">... </span>                                  <span class="hljs-string">&#x27;type&#x27;</span>: <span class="hljs-string">&#x27;text-classification&#x27;</span>}}]}]}
<span class="hljs-meta">&gt;&gt;&gt; </span>url = metadata_update(<span class="hljs-string">&quot;hf-internal-testing/reactiongif-roberta-card&quot;</span>, metadata)
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function bi(C){let h,v,_,i,b,s,f,A,T,q,k,Z,V,L,B,ee,Qa,Xa,Ce,H,z,xt,oa,vn,$t,xn,$s,I,$n,yt,yn,jn,Za,wn,Dn,et,Cn,En,ys,R,la,kn,O,ia,Rn,jt,An,Tn,Ee,qn,ke,Mn,ae,ca,Nn,wt,Pn,Ln,Dt,Hn,In,te,pa,On,Ct,Un,Fn,Re,Sn,Ae,da,Vn,Et,Bn,zn,se,ga,Gn,kt,Jn,Wn,Te,Yn,ne,ha,Kn,ma,Qn,at,Xn,Zn,er,qe,js,ie,Me,Rt,ua,ar,At,tr,ws,U,sr,tt,nr,rr,st,or,lr,nt,ir,cr,Ds,G,fa,pr,Ne,_a,dr,Tt,gr,hr,Pe,ba,mr,qt,ur,Cs,ce,Le,Mt,va,fr,Nt,_r,Es,pe,He,Pt,xa,br,Lt,vr,ks,de,$a,xr,F,ya,$r,rt,yr,ja,jr,wr,Ht,Dr,Cr,Ie,Rs,ge,Oe,It,wa,Er,Ot,kr,As,J,Da,Rr,Ut,Ar,Tr,Ue,Ts,he,Fe,Ft,Ca,qr,St,Mr,qs,ot,Nr,Ms,me,Se,Vt,Ea,Pr,Bt,Lr,Ns,ue,ka,Hr,S,Ra,Ir,lt,Or,Aa,Ur,Fr,zt,Sr,Vr,Ve,Ps,fe,Be,Gt,Ta,Br,Jt,zr,Ls,_e,qa,Gr,Wt,Jr,Hs,be,ze,Yt,Ma,Wr,Kt,Yr,Is,ve,Ge,Qt,Na,Kr,Xt,Qr,Os,W,Pa,Xr,Zt,Zr,eo,La,ao,Ha,to,so,Us,xe,Je,es,Ia,no,as,ro,Fs,P,Oa,oo,Ua,lo,ts,io,co,po,it,go,Fa,ho,mo,We,Ss,$e,Ye,ss,Sa,uo,ns,fo,Vs,Y,Va,_o,Ba,bo,rs,vo,xo,$o,Ke,Bs,ye,Qe,os,za,yo,ls,jo,zs,K,Ga,wo,is,Do,Co,Xe,Gs,je,Ze,cs,Ja,Eo,ps,ko,Js,Q,Wa,Ro,we,Ao,ds,To,qo,gs,Mo,No,Po,ea,Ws;return s=new M({}),oa=new M({}),la=new E({props:{name:"class huggingface_hub.repocard.RepoCard",anchor:"huggingface_hub.repocard.RepoCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L44"}}),ia=new E({props:{name:"__init__",anchor:"huggingface_hub.repocard.RepoCard.__init__",parameters:[{name:"content",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.__init__.content",description:"<strong>content</strong> (<code>str</code>) &#x2014; The content of the Markdown file.",name:"content"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L49"}}),Ee=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.__init__.example",$$slots:{default:[oi]},$$scope:{ctx:C}}}),ke=new ei({props:{$$slots:{default:[li]},$$scope:{ctx:C}}}),ca=new E({props:{name:"from_template",anchor:"huggingface_hub.repocard.RepoCard.from_template",parameters:[{name:"card_data",val:": CardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.CardData</code>) &#x2014;
A huggingface_hub.CardData instance containing the metadata you want to include in the YAML
header of the repo card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.repocard.RepoCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L277",returnDescription:`
<p>A RepoCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.repocard.RepoCard"
>huggingface_hub.repocard.RepoCard</a></p>
`}}),pa=new E({props:{name:"load",anchor:"huggingface_hub.repocard.RepoCard.load",parameters:[{name:"repo_id_or_path",val:": typing.Union[str, pathlib.Path]"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.load.repo_id_or_path",description:`<strong>repo_id_or_path</strong> (<code>Union[str, Path]</code>) &#x2014;
The repo ID associated with a Hugging Face Hub repo or a local filepath.`,name:"repo_id_or_path"},{anchor:"huggingface_hub.repocard.RepoCard.load.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The type of Hugging Face repo to push to. Defaults to None, which will use
use &#x201C;model&#x201D;. Other options are &#x201C;dataset&#x201D; and &#x201C;space&#x201D;. Not used when loading from
a local filepath. If this is called from a child class, the default value will be
the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"},{anchor:"huggingface_hub.repocard.RepoCard.load.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>huggingface_hub.HfApi.login</code> method. Will default to
the stored token.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L125",returnDescription:`
<p>The RepoCard (or subclass) initialized from the repo\u2019s
README.md file or filepath.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.repocard.RepoCard"
>huggingface_hub.repocard.RepoCard</a></p>
`}}),Re=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.load.example",$$slots:{default:[ii]},$$scope:{ctx:C}}}),da=new E({props:{name:"push_to_hub",anchor:"huggingface_hub.repocard.RepoCard.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repo ID of the Hugging Face Hub repo to push to. Example: &#x201C;nateraw/food&#x201D;.`,name:"repo_id"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>huggingface_hub.HfApi.login</code> method. Will default to
the stored token.`,name:"token"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;model&#x201D;) &#x2014;
The type of Hugging Face repo to push to. Options are &#x201C;model&#x201D;, &#x201C;dataset&#x201D;, and &#x201C;space&#x201D;. If this
function is called by a child class, it will default to the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit.`,name:"commit_message"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the generated commit.`,name:"commit_description"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the <code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.create_pr",description:`<strong>create_pr</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request with this commit. Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L214",returnDescription:`
<p>URL of the commit which updated the card metadata.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ga=new E({props:{name:"save",anchor:"huggingface_hub.repocard.RepoCard.save",parameters:[{name:"filepath",val:": typing.Union[pathlib.Path, str]"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.save.filepath",description:"<strong>filepath</strong> (<code>Union[Path, str]</code>) &#x2014; Filepath to the markdown file to save.",name:"filepath"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L107"}}),Te=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.save.example",$$slots:{default:[ci]},$$scope:{ctx:C}}}),ha=new E({props:{name:"validate",anchor:"huggingface_hub.repocard.RepoCard.validate",parameters:[{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.validate.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;model&#x201D;) &#x2014;
The type of Hugging Face repo to push to. Options are &#x201C;model&#x201D;, &#x201C;dataset&#x201D;, and &#x201C;space&#x201D;.
If this function is called from a child class, the default will be the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L173"}}),qe=new ei({props:{$$slots:{default:[pi]},$$scope:{ctx:C}}}),ua=new M({}),fa=new E({props:{name:"class huggingface_hub.CardData",anchor:"huggingface_hub.CardData",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L121"}}),_a=new E({props:{name:"to_dict",anchor:"huggingface_hub.CardData.to_dict",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L125",returnDescription:`
<p>CardData represented as a dictionary ready to be dumped to a YAML
block for inclusion in a README.md file.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),ba=new E({props:{name:"to_yaml",anchor:"huggingface_hub.CardData.to_yaml",parameters:[{name:"line_break",val:" = None"}],parametersDescription:[{anchor:"huggingface_hub.CardData.to_yaml.line_break",description:`<strong>line_break</strong> (str, <em>optional</em>) &#x2014;
The line break to use when dumping to yaml.`,name:"line_break"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L145",returnDescription:`
<p>CardData represented as a YAML block.</p>
`,returnType:`
<p><code>str</code></p>
`}}),va=new M({}),xa=new M({}),$a=new E({props:{name:"class huggingface_hub.ModelCard",anchor:"huggingface_hub.ModelCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L317"}}),ya=new E({props:{name:"from_template",anchor:"huggingface_hub.ModelCard.from_template",parameters:[{name:"card_data",val:": ModelCardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.ModelCardData</code>) &#x2014;
A huggingface_hub.ModelCardData instance containing the metadata you want to include in the YAML
header of the model card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.ModelCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L322",returnDescription:`
<p>A ModelCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.ModelCard"
>huggingface_hub.ModelCard</a></p>
`}}),Ie=new re({props:{anchor:"huggingface_hub.ModelCard.from_template.example",$$slots:{default:[di]},$$scope:{ctx:C}}}),wa=new M({}),Da=new E({props:{name:"class huggingface_hub.ModelCardData",anchor:"huggingface_hub.ModelCardData",parameters:[{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"license",val:": typing.Optional[str] = None"},{name:"library_name",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"datasets",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"metrics",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"eval_results",val:": typing.Optional[typing.List[huggingface_hub.repocard_data.EvalResult]] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelCardData.language",description:`<strong>language</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Language of model&#x2019;s training data or metadata. It must be an ISO 639-1, 639-2 or
639-3 code (two/three letters), or a special value like &#x201C;code&#x201D;, &#x201C;multilingual&#x201D;. Defaults to <code>None</code>.`,name:"language"},{anchor:"huggingface_hub.ModelCardData.license",description:`<strong>license</strong> (<code>str</code>, <em>optional</em>) &#x2014;
License of this model. Example: apache-2.0 or any license from
<a href="https://huggingface.co/docs/hub/repositories-licenses" rel="nofollow">https://huggingface.co/docs/hub/repositories-licenses</a>. Defaults to None.`,name:"license"},{anchor:"huggingface_hub.ModelCardData.library_name",description:`<strong>library_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of library used by this model. Example: keras or any library from
<a href="https://github.com/huggingface/hub-docs/blob/main/js/src/lib/interfaces/Libraries.ts" rel="nofollow">https://github.com/huggingface/hub-docs/blob/main/js/src/lib/interfaces/Libraries.ts</a>.
Defaults to None.`,name:"library_name"},{anchor:"huggingface_hub.ModelCardData.tags",description:`<strong>tags</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tags to add to your model that can be used when filtering on the Hugging
Face Hub. Defaults to None.`,name:"tags"},{anchor:"huggingface_hub.ModelCardData.datasets",description:`<strong>datasets</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Dataset or list of datasets that were used to train this model. Should be a dataset ID
found on <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>. Defaults to None.`,name:"datasets"},{anchor:"huggingface_hub.ModelCardData.metrics",description:`<strong>metrics</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
List of metrics used to evaluate this model. Should be a metric name that can be found
at <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>. Example: &#x2018;accuracy&#x2019;. Defaults to None.`,name:"metrics"},{anchor:"huggingface_hub.ModelCardData.eval_results",description:`<strong>eval_results</strong> (<code>Union[List[EvalResult], EvalResult]</code>, <em>optional</em>) &#x2014;
List of <code>huggingface_hub.EvalResult</code> that define evaluation results of the model. If provided,
<code>model_name</code> kwarg must be provided. Defaults to <code>None</code>.`,name:"eval_results"},{anchor:"huggingface_hub.ModelCardData.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A name for this model. Required if you provide <code>eval_results</code>. It is used along with
<code>eval_results</code> to construct the <code>model-index</code> within the card&#x2019;s metadata. The name
you supply here is what will be used on PapersWithCode&#x2019;s leaderboards. Defaults to None.`,name:"model_name"},{anchor:"huggingface_hub.ModelCardData.kwargs",description:`<strong>kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Additional metadata that will be added to the model card. Defaults to None.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L161"}}),Ue=new re({props:{anchor:"huggingface_hub.ModelCardData.example",$$slots:{default:[gi]},$$scope:{ctx:C}}}),Ca=new M({}),Ea=new M({}),ka=new E({props:{name:"class huggingface_hub.DatasetCard",anchor:"huggingface_hub.DatasetCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L397"}}),Ra=new E({props:{name:"from_template",anchor:"huggingface_hub.DatasetCard.from_template",parameters:[{name:"card_data",val:": DatasetCardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.DatasetCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.DatasetCardData</code>) &#x2014;
A huggingface_hub.DatasetCardData instance containing the metadata you want to include in the YAML
header of the dataset card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.DatasetCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L402",returnDescription:`
<p>A DatasetCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.DatasetCard"
>huggingface_hub.DatasetCard</a></p>
`}}),Ve=new re({props:{anchor:"huggingface_hub.DatasetCard.from_template.example",$$slots:{default:[hi]},$$scope:{ctx:C}}}),Ta=new M({}),qa=new E({props:{name:"class huggingface_hub.DatasetCardData",anchor:"huggingface_hub.DatasetCardData",parameters:[{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"license",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"annotations_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"source_datasets",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"paperswithcode_id",val:": typing.Optional[str] = None"},{name:"pretty_name",val:": typing.Optional[str] = None"},{name:"train_eval_index",val:": typing.Optional[typing.Dict] = None"},{name:"configs",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.DatasetCardData.language",description:`<strong>language</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Language of dataset&#x2019;s data or metadata. It must be an ISO 639-1, 639-2 or
639-3 code (two/three letters), or a special value like &#x201C;code&#x201D;, &#x201C;multilingual&#x201D;.`,name:"language"},{anchor:"huggingface_hub.DatasetCardData.license",description:`<strong>license</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
License(s) of this dataset. Example: apache-2.0 or any license from
<a href="https://huggingface.co/docs/hub/repositories-licenses" rel="nofollow">https://huggingface.co/docs/hub/repositories-licenses</a>.`,name:"license"},{anchor:"huggingface_hub.DatasetCardData.annotations_creators",description:`<strong>annotations_creators</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
How the annotations for the dataset were created.
Options are: &#x2018;found&#x2019;, &#x2018;crowdsourced&#x2019;, &#x2018;expert-generated&#x2019;, &#x2018;machine-generated&#x2019;, &#x2018;no-annotation&#x2019;, &#x2018;other&#x2019;.`,name:"annotations_creators"},{anchor:"huggingface_hub.DatasetCardData.language_creators",description:`<strong>language_creators</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
How the text-based data in the dataset was created.
Options are: &#x2018;found&#x2019;, &#x2018;crowdsourced&#x2019;, &#x2018;expert-generated&#x2019;, &#x2018;machine-generated&#x2019;, &#x2018;other&#x2019;`,name:"language_creators"},{anchor:"huggingface_hub.DatasetCardData.multilinguality",description:`<strong>multilinguality</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Whether the dataset is multilingual.
Options are: &#x2018;monolingual&#x2019;, &#x2018;multilingual&#x2019;, &#x2018;translation&#x2019;, &#x2018;other&#x2019;.`,name:"multilinguality"},{anchor:"huggingface_hub.DatasetCardData.size_categories",description:`<strong>size_categories</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
The number of examples in the dataset. Options are: &#x2018;n&lt;1K&#x2019;, &#x2018;1K<n<10k\u2019, \u201810k<n<100k\u2019, \u2018100k<n<1m\u2019, \u20181m<n<10m\u2019, \u201810m<n<100m\u2019, \u2018100m<n<1b\u2019, \u20181b<n<10b\u2019, \u201810b<n<100b\u2019, \u2018100b<n<1t\u2019, \u2018n>1T&#x2019;, and &#x2018;other&#x2019;.</n<10k\u2019,>`,name:"size_categories"},{anchor:"huggingface_hub.DatasetCardData.source_datasets",description:`<strong>source_datasets</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
Indicates whether the dataset is an original dataset or extended from another existing dataset.
Options are: &#x2018;original&#x2019; and &#x2018;extended&#x2019;.`,name:"source_datasets"},{anchor:"huggingface_hub.DatasetCardData.task_categories",description:`<strong>task_categories</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
What categories of task does the dataset support?`,name:"task_categories"},{anchor:"huggingface_hub.DatasetCardData.task_ids",description:`<strong>task_ids</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
What specific tasks does the dataset support?`,name:"task_ids"},{anchor:"huggingface_hub.DatasetCardData.paperswithcode_id",description:`<strong>paperswithcode_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of the dataset on PapersWithCode.`,name:"paperswithcode_id"},{anchor:"huggingface_hub.DatasetCardData.pretty_name",description:`<strong>pretty_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A more human-readable name for the dataset. (ex. &#x201C;Cats vs. Dogs&#x201D;)`,name:"pretty_name"},{anchor:"huggingface_hub.DatasetCardData.train_eval_index",description:`<strong>train_eval_index</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
A dictionary that describes the necessary spec for doing evaluation on the Hub.
If not provided, it will be gathered from the &#x2018;train-eval-index&#x2019; key of the kwargs.`,name:"train_eval_index"},{anchor:"huggingface_hub.DatasetCardData.configs",description:`<strong>configs</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
A list of the available dataset configs for the dataset.`,name:"configs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L261"}}),Ma=new M({}),Na=new M({}),Pa=new E({props:{name:"class huggingface_hub.EvalResult",anchor:"huggingface_hub.EvalResult",parameters:[{name:"task_type",val:": str"},{name:"dataset_type",val:": str"},{name:"dataset_name",val:": str"},{name:"metric_type",val:": str"},{name:"metric_value",val:": typing.Any"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"dataset_config",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"dataset_revision",val:": typing.Optional[str] = None"},{name:"dataset_args",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"metric_name",val:": typing.Optional[str] = None"},{name:"metric_config",val:": typing.Optional[str] = None"},{name:"metric_args",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"verified",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.EvalResult.task_type",description:`<strong>task_type</strong> (<code>str</code>) &#x2014;
The task identifier. Example: &#x201C;image-classification&#x201D;.`,name:"task_type"},{anchor:"huggingface_hub.EvalResult.dataset_type",description:`<strong>dataset_type</strong> (<code>str</code>) &#x2014;
The dataset identifier. Example: &#x201C;common_voice&#x201D;. Use dataset id from <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>.`,name:"dataset_type"},{anchor:"huggingface_hub.EvalResult.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>) &#x2014;
A pretty name for the dataset. Example: &#x201C;Common Voice (French)&#x201C;.`,name:"dataset_name"},{anchor:"huggingface_hub.EvalResult.metric_type",description:`<strong>metric_type</strong> (<code>str</code>) &#x2014;
The metric identifier. Example: &#x201C;wer&#x201D;. Use metric id from <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>.`,name:"metric_type"},{anchor:"huggingface_hub.EvalResult.metric_value",description:`<strong>metric_value</strong> (<code>Any</code>) &#x2014;
The metric value. Example: 0.9 or &#x201C;20.0 &#xB1; 1.2&#x201D;.`,name:"metric_value"},{anchor:"huggingface_hub.EvalResult.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A pretty name for the task. Example: &#x201C;Speech Recognition&#x201D;.`,name:"task_name"},{anchor:"huggingface_hub.EvalResult.dataset_config",description:`<strong>dataset_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the dataset configuration used in <code>load_dataset()</code>.
Example: fr in <code>load_dataset(&quot;common_voice&quot;, &quot;fr&quot;)</code>. See the <code>datasets</code> docs for more info:
<a href="https://hf.co/docs/datasets/package_reference/loading_methods#datasets.load_dataset.name" rel="nofollow">https://hf.co/docs/datasets/package_reference/loading_methods#datasets.load_dataset.name</a>`,name:"dataset_config"},{anchor:"huggingface_hub.EvalResult.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The split used in <code>load_dataset()</code>. Example: &#x201C;test&#x201D;.`,name:"dataset_split"},{anchor:"huggingface_hub.EvalResult.dataset_revision",description:`<strong>dataset_revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision (AKA Git Sha) of the dataset used in <code>load_dataset()</code>.
Example: 5503434ddd753f426f4b38109466949a1217c2bb`,name:"dataset_revision"},{anchor:"huggingface_hub.EvalResult.dataset_args",description:`<strong>dataset_args</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The arguments passed during <code>Metric.compute()</code>. Example for <code>bleu</code>: <code>{&quot;max_order&quot;: 4}</code>`,name:"dataset_args"},{anchor:"huggingface_hub.EvalResult.metric_name",description:`<strong>metric_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A pretty name for the metric. Example: &#x201C;Test WER&#x201D;.`,name:"metric_name"},{anchor:"huggingface_hub.EvalResult.metric_config",description:`<strong>metric_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the metric configuration used in <code>load_metric()</code>.
Example: bleurt-large-512 in <code>load_metric(&quot;bleurt&quot;, &quot;bleurt-large-512&quot;)</code>.
See the <code>datasets</code> docs for more info: <a href="https://huggingface.co/docs/datasets/v2.1.0/en/loading#load-configurations" rel="nofollow">https://huggingface.co/docs/datasets/v2.1.0/en/loading#load-configurations</a>`,name:"metric_config"},{anchor:"huggingface_hub.EvalResult.metric_args",description:`<strong>metric_args</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The arguments passed during <code>Metric.compute()</code>. Example for <code>bleu</code>: max_order: 4`,name:"metric_args"},{anchor:"huggingface_hub.EvalResult.verified",description:`<strong>verified</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If true, indicates that evaluation was generated by Hugging Face (vs. self-reported).`,name:"verified"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L15"}}),Ia=new M({}),Oa=new E({props:{name:"huggingface_hub.repocard_data.model_index_to_eval_results",anchor:"huggingface_hub.repocard_data.model_index_to_eval_results",parameters:[{name:"model_index",val:": typing.List[typing.Dict[str, typing.Any]]"}],parametersDescription:[{anchor:"huggingface_hub.repocard_data.model_index_to_eval_results.model_index",description:`<strong>model_index</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
A model index data structure, likely coming from a README.md file on the
Hugging Face Hub.`,name:"model_index"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L340",returnDescription:`
<p>The name of the model as found in the model index. This is used as the
identifier for the model on leaderboards like PapersWithCode.
eval_results (<code>List[EvalResult]</code>):
A list of <code>huggingface_hub.EvalResult</code> objects containing the metrics
reported in the provided model_index.</p>
`,returnType:`
<p>model_name (<code>str</code>)</p>
`}}),We=new re({props:{anchor:"huggingface_hub.repocard_data.model_index_to_eval_results.example",$$slots:{default:[mi]},$$scope:{ctx:C}}}),Sa=new M({}),Va=new E({props:{name:"huggingface_hub.repocard_data.eval_results_to_model_index",anchor:"huggingface_hub.repocard_data.eval_results_to_model_index",parameters:[{name:"model_name",val:": str"},{name:"eval_results",val:": typing.List[huggingface_hub.repocard_data.EvalResult]"}],parametersDescription:[{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.model_name",description:`<strong>model_name</strong> (<code>str</code>) &#x2014;
Name of the model (ex. &#x201C;my-cool-model&#x201D;). This is used as the identifier
for the model on leaderboards like PapersWithCode.`,name:"model_name"},{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.eval_results",description:`<strong>eval_results</strong> (<code>List[EvalResult]</code>) &#x2014;
List of <code>huggingface_hub.EvalResult</code> objects containing the metrics to be
reported in the model-index.`,name:"eval_results"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard_data.py#L456",returnDescription:`
<p>The eval_results converted to a model-index.</p>
`,returnType:`
<p>model_index (<code>List[Dict[str, Any]]</code>)</p>
`}}),Ke=new re({props:{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.example",$$slots:{default:[ui]},$$scope:{ctx:C}}}),za=new M({}),Ga=new E({props:{name:"huggingface_hub.metadata_eval_result",anchor:"huggingface_hub.metadata_eval_result",parameters:[{name:"model_pretty_name",val:": str"},{name:"task_pretty_name",val:": str"},{name:"task_id",val:": str"},{name:"metrics_pretty_name",val:": str"},{name:"metrics_id",val:": str"},{name:"metrics_value",val:": typing.Any"},{name:"dataset_pretty_name",val:": str"},{name:"dataset_id",val:": str"},{name:"metrics_config",val:": typing.Optional[str] = None"},{name:"metrics_verified",val:": typing.Optional[bool] = False"},{name:"dataset_config",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"dataset_revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.metadata_eval_result.model_pretty_name",description:`<strong>model_pretty_name</strong> (<code>str</code>) &#x2014;
The name of the model in natural language.`,name:"model_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.task_pretty_name",description:`<strong>task_pretty_name</strong> (<code>str</code>) &#x2014;
The name of a task in natural language.`,name:"task_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.task_id",description:`<strong>task_id</strong> (<code>str</code>) &#x2014;
Example: automatic-speech-recognition. A task id.`,name:"task_id"},{anchor:"huggingface_hub.metadata_eval_result.metrics_pretty_name",description:`<strong>metrics_pretty_name</strong> (<code>str</code>) &#x2014;
A name for the metric in natural language. Example: Test WER.`,name:"metrics_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.metrics_id",description:`<strong>metrics_id</strong> (<code>str</code>) &#x2014;
Example: wer. A metric id from <a href="https://hf.co/metrics" rel="nofollow">https://hf.co/metrics</a>.`,name:"metrics_id"},{anchor:"huggingface_hub.metadata_eval_result.metrics_value",description:`<strong>metrics_value</strong> (<code>Any</code>) &#x2014;
The value from the metric. Example: 20.0 or &#x201C;20.0 &#xB1; 1.2&#x201D;.`,name:"metrics_value"},{anchor:"huggingface_hub.metadata_eval_result.dataset_pretty_name",description:`<strong>dataset_pretty_name</strong> (<code>str</code>) &#x2014;
The name of the dataset in natural language.`,name:"dataset_pretty_name"},{anchor:"huggingface_hub.metadata_eval_result.dataset_id",description:`<strong>dataset_id</strong> (<code>str</code>) &#x2014;
Example: common_voice. A dataset id from <a href="https://hf.co/datasets" rel="nofollow">https://hf.co/datasets</a>.`,name:"dataset_id"},{anchor:"huggingface_hub.metadata_eval_result.metrics_config",description:`<strong>metrics_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the metric configuration used in <code>load_metric()</code>.
Example: bleurt-large-512 in <code>load_metric(&quot;bleurt&quot;, &quot;bleurt-large-512&quot;)</code>.`,name:"metrics_config"},{anchor:"huggingface_hub.metadata_eval_result.metrics_verified",description:`<strong>metrics_verified</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If true, indicates that evaluation was generated by Hugging Face (vs. self-reported).
If a user tries to push self-reported metric results with verified=True, the push
will be rejected.`,name:"metrics_verified"},{anchor:"huggingface_hub.metadata_eval_result.dataset_config",description:`<strong>dataset_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: fr. The name of the dataset configuration used in <code>load_dataset()</code>.`,name:"dataset_config"},{anchor:"huggingface_hub.metadata_eval_result.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: test. The name of the dataset split used in <code>load_dataset()</code>.`,name:"dataset_split"},{anchor:"huggingface_hub.metadata_eval_result.dataset_revision",description:`<strong>dataset_revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: 5503434ddd753f426f4b38109466949a1217c2bb. The name of the dataset dataset revision
used in <code>load_dataset()</code>.`,name:"dataset_revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L532",returnDescription:`
<p>a metadata dict with the result from a model evaluated on a dataset.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),Xe=new re({props:{anchor:"huggingface_hub.metadata_eval_result.example",$$slots:{default:[fi]},$$scope:{ctx:C}}}),Ja=new M({}),Wa=new E({props:{name:"huggingface_hub.metadata_update",anchor:"huggingface_hub.metadata_update",parameters:[{name:"repo_id",val:": str"},{name:"metadata",val:": typing.Dict"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"overwrite",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": bool = False"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.metadata_update.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The name of the repository.`,name:"repo_id"},{anchor:"huggingface_hub.metadata_update.metadata",description:`<strong>metadata</strong> (<code>dict</code>) &#x2014;
A dictionary containing the metadata to be updated.`,name:"metadata"},{anchor:"huggingface_hub.metadata_update.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if updating to a dataset or space,
<code>None</code> or <code>&quot;model&quot;</code> if updating to a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.metadata_update.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code> an existing field can be overwritten, otherwise
attempting to overwrite an existing field will cause an error.`,name:"overwrite"},{anchor:"huggingface_hub.metadata_update.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token.`,name:"token"},{anchor:"huggingface_hub.metadata_update.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Update metadata with huggingface_hub&quot;</code>`,name:"commit_message"},{anchor:"huggingface_hub.metadata_update.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.metadata_update.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.metadata_update.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.metadata_update.parent_commit",description:`<strong>parent_commit</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The OID / SHA of the parent commit, as a hexadecimal string. Shorthands (7 first characters) are also supported.
If specified and <code>create_pr</code> is <code>False</code>, the commit will fail if <code>revision</code> does not point to <code>parent_commit</code>.
If specified and <code>create_pr</code> is <code>True</code>, the pull request will be created from <code>parent_commit</code>.
Specifying <code>parent_commit</code> ensures the repo has not changed before committing the changes, and can be
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0.rc0/src/huggingface_hub/repocard.py#L657",returnDescription:`
<p>URL of the commit which updated the card metadata.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ea=new re({props:{anchor:"huggingface_hub.metadata_update.example",$$slots:{default:[_i]},$$scope:{ctx:C}}}),{c(){h=n("meta"),v=c(),_=n("h1"),i=n("a"),b=n("span"),x(s.$$.fragment),f=c(),A=n("span"),T=d("Repository Cards"),q=c(),k=n("p"),Z=d(`The huggingface_hub library provides a Python interface to create, share, and update Model/Dataset Cards.
Visit the `),V=n("a"),L=d("dedicated documentation page"),B=d(` for a deeper view of what
Model Cards on the Hub are, and how they work under the hood. You can also check out our `),ee=n("a"),Qa=d("Model Cards guide"),Xa=d(` to
get a feel for how you would use these utilities in your own projects.`),Ce=c(),H=n("h2"),z=n("a"),xt=n("span"),x(oa.$$.fragment),vn=c(),$t=n("span"),xn=d("Repo Card"),$s=c(),I=n("p"),$n=d("The "),yt=n("code"),yn=d("RepoCard"),jn=d(" object is the parent class of "),Za=n("a"),wn=d("ModelCard"),Dn=d(" and "),et=n("a"),Cn=d("DatasetCard"),En=d("."),ys=c(),R=n("div"),x(la.$$.fragment),kn=c(),O=n("div"),x(ia.$$.fragment),Rn=c(),jt=n("p"),An=d(`Initialize a RepoCard from string content. The content should be a
Markdown file with a YAML block at the beginning and a Markdown body.`),Tn=c(),x(Ee.$$.fragment),qn=c(),x(ke.$$.fragment),Mn=c(),ae=n("div"),x(ca.$$.fragment),Nn=c(),wt=n("p"),Pn=d("Initialize a RepoCard from a template. By default, it uses the default template."),Ln=c(),Dt=n("p"),Hn=d("Templates are Jinja2 templates that can be customized by passing keyword arguments."),In=c(),te=n("div"),x(pa.$$.fragment),On=c(),Ct=n("p"),Un=d("Initialize a RepoCard from a Hugging Face Hub repo\u2019s README.md or a local filepath."),Fn=c(),x(Re.$$.fragment),Sn=c(),Ae=n("div"),x(da.$$.fragment),Vn=c(),Et=n("p"),Bn=d("Push a RepoCard to a Hugging Face Hub repo."),zn=c(),se=n("div"),x(ga.$$.fragment),Gn=c(),kt=n("p"),Jn=d("Save a RepoCard to a file."),Wn=c(),x(Te.$$.fragment),Yn=c(),ne=n("div"),x(ha.$$.fragment),Kn=c(),ma=n("p"),Qn=d(`Validates card against Hugging Face Hub\u2019s card validation logic.
Using this function requires access to the internet, so it is only called
internally by `),at=n("a"),Xn=d("huggingface_hub.repocard.RepoCard.push_to_hub()"),Zn=d("."),er=c(),x(qe.$$.fragment),js=c(),ie=n("h2"),Me=n("a"),Rt=n("span"),x(ua.$$.fragment),ar=c(),At=n("span"),tr=d("Card Data"),ws=c(),U=n("p"),sr=d("The "),tt=n("a"),nr=d("CardData"),rr=d(" object is the parent class of "),st=n("a"),or=d("ModelCardData"),lr=d(" and "),nt=n("a"),ir=d("DatasetCardData"),cr=d("."),Ds=c(),G=n("div"),x(fa.$$.fragment),pr=c(),Ne=n("div"),x(_a.$$.fragment),dr=c(),Tt=n("p"),gr=d("Converts CardData to a dict."),hr=c(),Pe=n("div"),x(ba.$$.fragment),mr=c(),qt=n("p"),ur=d("Dumps CardData to a YAML block for inclusion in a README.md file."),Cs=c(),ce=n("h2"),Le=n("a"),Mt=n("span"),x(va.$$.fragment),fr=c(),Nt=n("span"),_r=d("Model Cards"),Es=c(),pe=n("h3"),He=n("a"),Pt=n("span"),x(xa.$$.fragment),br=c(),Lt=n("span"),vr=d("ModelCard"),ks=c(),de=n("div"),x($a.$$.fragment),xr=c(),F=n("div"),x(ya.$$.fragment),$r=c(),rt=n("p"),yr=d(`Initialize a ModelCard from a template. By default, it uses the default template, which can be found here:
`),ja=n("a"),jr=d("https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),wr=c(),Ht=n("p"),Dr=d("Templates are Jinja2 templates that can be customized by passing keyword arguments."),Cr=c(),x(Ie.$$.fragment),Rs=c(),ge=n("h3"),Oe=n("a"),It=n("span"),x(wa.$$.fragment),Er=c(),Ot=n("span"),kr=d("ModelCardData"),As=c(),J=n("div"),x(Da.$$.fragment),Rr=c(),Ut=n("p"),Ar=d("Model Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),Tr=c(),x(Ue.$$.fragment),Ts=c(),he=n("h2"),Fe=n("a"),Ft=n("span"),x(Ca.$$.fragment),qr=c(),St=n("span"),Mr=d("Dataset Cards"),qs=c(),ot=n("p"),Nr=d("Dataset cards are also known as Data Cards in the ML Community."),Ms=c(),me=n("h3"),Se=n("a"),Vt=n("span"),x(Ea.$$.fragment),Pr=c(),Bt=n("span"),Lr=d("DatasetCard"),Ns=c(),ue=n("div"),x(ka.$$.fragment),Hr=c(),S=n("div"),x(Ra.$$.fragment),Ir=c(),lt=n("p"),Or=d(`Initialize a DatasetCard from a template. By default, it uses the default template, which can be found here:
`),Aa=n("a"),Ur=d("https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),Fr=c(),zt=n("p"),Sr=d("Templates are Jinja2 templates that can be customized by passing keyword arguments."),Vr=c(),x(Ve.$$.fragment),Ps=c(),fe=n("h3"),Be=n("a"),Gt=n("span"),x(Ta.$$.fragment),Br=c(),Jt=n("span"),zr=d("DatasetCardData"),Ls=c(),_e=n("div"),x(qa.$$.fragment),Gr=c(),Wt=n("p"),Jr=d("Dataset Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),Hs=c(),be=n("h2"),ze=n("a"),Yt=n("span"),x(Ma.$$.fragment),Wr=c(),Kt=n("span"),Yr=d("Utilities"),Is=c(),ve=n("h3"),Ge=n("a"),Qt=n("span"),x(Na.$$.fragment),Kr=c(),Xt=n("span"),Qr=d("EvalResult"),Os=c(),W=n("div"),x(Pa.$$.fragment),Xr=c(),Zt=n("p"),Zr=d("Flattened representation of individual evaluation results found in model-index of Model Cards."),eo=c(),La=n("p"),ao=d("For more information on the model-index spec, see "),Ha=n("a"),to=d("https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),so=d("."),Us=c(),xe=n("h3"),Je=n("a"),es=n("span"),x(Ia.$$.fragment),no=c(),as=n("span"),ro=d("model_index_to_eval_results"),Fs=c(),P=n("div"),x(Oa.$$.fragment),oo=c(),Ua=n("p"),lo=d("Takes in a model index and returns the model name and a list of "),ts=n("code"),io=d("huggingface_hub.EvalResult"),co=d(" objects."),po=c(),it=n("p"),go=d(`A detailed spec of the model index can be found here:
`),Fa=n("a"),ho=d("https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),mo=c(),x(We.$$.fragment),Ss=c(),$e=n("h3"),Ye=n("a"),ss=n("span"),x(Sa.$$.fragment),uo=c(),ns=n("span"),fo=d("eval_results_to_model_index"),Vs=c(),Y=n("div"),x(Va.$$.fragment),_o=c(),Ba=n("p"),bo=d("Takes in given model name and list of "),rs=n("code"),vo=d("huggingface_hub.EvalResult"),xo=d(` and returns a
valid model-index that will be compatible with the format expected by the
Hugging Face Hub.`),$o=c(),x(Ke.$$.fragment),Bs=c(),ye=n("h3"),Qe=n("a"),os=n("span"),x(za.$$.fragment),yo=c(),ls=n("span"),jo=d("metadata_eval_result"),zs=c(),K=n("div"),x(Ga.$$.fragment),wo=c(),is=n("p"),Do=d("Creates a metadata dict with the result from a model evaluated on a dataset."),Co=c(),x(Xe.$$.fragment),Gs=c(),je=n("h3"),Ze=n("a"),cs=n("span"),x(Ja.$$.fragment),Eo=c(),ps=n("span"),ko=d("metadata_update"),Js=c(),Q=n("div"),x(Wa.$$.fragment),Ro=c(),we=n("p"),Ao=d(`Updates the metadata in the README.md of a repository on the Hugging Face Hub.
If the README.md file doesn\u2019t exist yet, a new one is created with metadata and an
the default ModelCard or DatasetCard template. For `),ds=n("code"),To=d("space"),qo=d(` repo, an error is thrown
as a Space cannot exist without a `),gs=n("code"),Mo=d("README.md"),No=d(" file."),Po=c(),x(ea.$$.fragment),this.h()},l(e){const m=ni('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),v=p(e),_=r(e,"H1",{class:!0});var Ya=o(_);i=r(Ya,"A",{id:!0,class:!0,href:!0});var hs=o(i);b=r(hs,"SPAN",{});var ms=o(b);$(s.$$.fragment,ms),ms.forEach(t),hs.forEach(t),f=p(Ya),A=r(Ya,"SPAN",{});var us=o(A);T=g(us,"Repository Cards"),us.forEach(t),Ya.forEach(t),q=p(e),k=r(e,"P",{});var De=o(k);Z=g(De,`The huggingface_hub library provides a Python interface to create, share, and update Model/Dataset Cards.
Visit the `),V=r(De,"A",{href:!0,rel:!0});var fs=o(V);L=g(fs,"dedicated documentation page"),fs.forEach(t),B=g(De,` for a deeper view of what
Model Cards on the Hub are, and how they work under the hood. You can also check out our `),ee=r(De,"A",{href:!0});var _s=o(ee);Qa=g(_s,"Model Cards guide"),_s.forEach(t),Xa=g(De,` to
get a feel for how you would use these utilities in your own projects.`),De.forEach(t),Ce=p(e),H=r(e,"H2",{class:!0});var Ka=o(H);z=r(Ka,"A",{id:!0,class:!0,href:!0});var bs=o(z);xt=r(bs,"SPAN",{});var vs=o(xt);$(oa.$$.fragment,vs),vs.forEach(t),bs.forEach(t),vn=p(Ka),$t=r(Ka,"SPAN",{});var xs=o($t);xn=g(xs,"Repo Card"),xs.forEach(t),Ka.forEach(t),$s=p(e),I=r(e,"P",{});var X=o(I);$n=g(X,"The "),yt=r(X,"CODE",{});var Oo=o(yt);yn=g(Oo,"RepoCard"),Oo.forEach(t),jn=g(X," object is the parent class of "),Za=r(X,"A",{href:!0});var Uo=o(Za);wn=g(Uo,"ModelCard"),Uo.forEach(t),Dn=g(X," and "),et=r(X,"A",{href:!0});var Fo=o(et);Cn=g(Fo,"DatasetCard"),Fo.forEach(t),En=g(X,"."),X.forEach(t),ys=p(e),R=r(e,"DIV",{class:!0});var N=o(R);$(la.$$.fragment,N),kn=p(N),O=r(N,"DIV",{class:!0});var aa=o(O);$(ia.$$.fragment,aa),Rn=p(aa),jt=r(aa,"P",{});var So=o(jt);An=g(So,`Initialize a RepoCard from string content. The content should be a
Markdown file with a YAML block at the beginning and a Markdown body.`),So.forEach(t),Tn=p(aa),$(Ee.$$.fragment,aa),qn=p(aa),$(ke.$$.fragment,aa),aa.forEach(t),Mn=p(N),ae=r(N,"DIV",{class:!0});var ct=o(ae);$(ca.$$.fragment,ct),Nn=p(ct),wt=r(ct,"P",{});var Vo=o(wt);Pn=g(Vo,"Initialize a RepoCard from a template. By default, it uses the default template."),Vo.forEach(t),Ln=p(ct),Dt=r(ct,"P",{});var Bo=o(Dt);Hn=g(Bo,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),Bo.forEach(t),ct.forEach(t),In=p(N),te=r(N,"DIV",{class:!0});var pt=o(te);$(pa.$$.fragment,pt),On=p(pt),Ct=r(pt,"P",{});var zo=o(Ct);Un=g(zo,"Initialize a RepoCard from a Hugging Face Hub repo\u2019s README.md or a local filepath."),zo.forEach(t),Fn=p(pt),$(Re.$$.fragment,pt),pt.forEach(t),Sn=p(N),Ae=r(N,"DIV",{class:!0});var Ys=o(Ae);$(da.$$.fragment,Ys),Vn=p(Ys),Et=r(Ys,"P",{});var Go=o(Et);Bn=g(Go,"Push a RepoCard to a Hugging Face Hub repo."),Go.forEach(t),Ys.forEach(t),zn=p(N),se=r(N,"DIV",{class:!0});var dt=o(se);$(ga.$$.fragment,dt),Gn=p(dt),kt=r(dt,"P",{});var Jo=o(kt);Jn=g(Jo,"Save a RepoCard to a file."),Jo.forEach(t),Wn=p(dt),$(Te.$$.fragment,dt),dt.forEach(t),Yn=p(N),ne=r(N,"DIV",{class:!0});var gt=o(ne);$(ha.$$.fragment,gt),Kn=p(gt),ma=r(gt,"P",{});var Ks=o(ma);Qn=g(Ks,`Validates card against Hugging Face Hub\u2019s card validation logic.
Using this function requires access to the internet, so it is only called
internally by `),at=r(Ks,"A",{href:!0});var Wo=o(at);Xn=g(Wo,"huggingface_hub.repocard.RepoCard.push_to_hub()"),Wo.forEach(t),Zn=g(Ks,"."),Ks.forEach(t),er=p(gt),$(qe.$$.fragment,gt),gt.forEach(t),N.forEach(t),js=p(e),ie=r(e,"H2",{class:!0});var Qs=o(ie);Me=r(Qs,"A",{id:!0,class:!0,href:!0});var Yo=o(Me);Rt=r(Yo,"SPAN",{});var Ko=o(Rt);$(ua.$$.fragment,Ko),Ko.forEach(t),Yo.forEach(t),ar=p(Qs),At=r(Qs,"SPAN",{});var Qo=o(At);tr=g(Qo,"Card Data"),Qo.forEach(t),Qs.forEach(t),ws=p(e),U=r(e,"P",{});var ta=o(U);sr=g(ta,"The "),tt=r(ta,"A",{href:!0});var Xo=o(tt);nr=g(Xo,"CardData"),Xo.forEach(t),rr=g(ta," object is the parent class of "),st=r(ta,"A",{href:!0});var Zo=o(st);or=g(Zo,"ModelCardData"),Zo.forEach(t),lr=g(ta," and "),nt=r(ta,"A",{href:!0});var el=o(nt);ir=g(el,"DatasetCardData"),el.forEach(t),cr=g(ta,"."),ta.forEach(t),Ds=p(e),G=r(e,"DIV",{class:!0});var ht=o(G);$(fa.$$.fragment,ht),pr=p(ht),Ne=r(ht,"DIV",{class:!0});var Xs=o(Ne);$(_a.$$.fragment,Xs),dr=p(Xs),Tt=r(Xs,"P",{});var al=o(Tt);gr=g(al,"Converts CardData to a dict."),al.forEach(t),Xs.forEach(t),hr=p(ht),Pe=r(ht,"DIV",{class:!0});var Zs=o(Pe);$(ba.$$.fragment,Zs),mr=p(Zs),qt=r(Zs,"P",{});var tl=o(qt);ur=g(tl,"Dumps CardData to a YAML block for inclusion in a README.md file."),tl.forEach(t),Zs.forEach(t),ht.forEach(t),Cs=p(e),ce=r(e,"H2",{class:!0});var en=o(ce);Le=r(en,"A",{id:!0,class:!0,href:!0});var sl=o(Le);Mt=r(sl,"SPAN",{});var nl=o(Mt);$(va.$$.fragment,nl),nl.forEach(t),sl.forEach(t),fr=p(en),Nt=r(en,"SPAN",{});var rl=o(Nt);_r=g(rl,"Model Cards"),rl.forEach(t),en.forEach(t),Es=p(e),pe=r(e,"H3",{class:!0});var an=o(pe);He=r(an,"A",{id:!0,class:!0,href:!0});var ol=o(He);Pt=r(ol,"SPAN",{});var ll=o(Pt);$(xa.$$.fragment,ll),ll.forEach(t),ol.forEach(t),br=p(an),Lt=r(an,"SPAN",{});var il=o(Lt);vr=g(il,"ModelCard"),il.forEach(t),an.forEach(t),ks=p(e),de=r(e,"DIV",{class:!0});var tn=o(de);$($a.$$.fragment,tn),xr=p(tn),F=r(tn,"DIV",{class:!0});var sa=o(F);$(ya.$$.fragment,sa),$r=p(sa),rt=r(sa,"P",{});var Lo=o(rt);yr=g(Lo,`Initialize a ModelCard from a template. By default, it uses the default template, which can be found here:
`),ja=r(Lo,"A",{href:!0,rel:!0});var cl=o(ja);jr=g(cl,"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),cl.forEach(t),Lo.forEach(t),wr=p(sa),Ht=r(sa,"P",{});var pl=o(Ht);Dr=g(pl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),pl.forEach(t),Cr=p(sa),$(Ie.$$.fragment,sa),sa.forEach(t),tn.forEach(t),Rs=p(e),ge=r(e,"H3",{class:!0});var sn=o(ge);Oe=r(sn,"A",{id:!0,class:!0,href:!0});var dl=o(Oe);It=r(dl,"SPAN",{});var gl=o(It);$(wa.$$.fragment,gl),gl.forEach(t),dl.forEach(t),Er=p(sn),Ot=r(sn,"SPAN",{});var hl=o(Ot);kr=g(hl,"ModelCardData"),hl.forEach(t),sn.forEach(t),As=p(e),J=r(e,"DIV",{class:!0});var mt=o(J);$(Da.$$.fragment,mt),Rr=p(mt),Ut=r(mt,"P",{});var ml=o(Ut);Ar=g(ml,"Model Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),ml.forEach(t),Tr=p(mt),$(Ue.$$.fragment,mt),mt.forEach(t),Ts=p(e),he=r(e,"H2",{class:!0});var nn=o(he);Fe=r(nn,"A",{id:!0,class:!0,href:!0});var ul=o(Fe);Ft=r(ul,"SPAN",{});var fl=o(Ft);$(Ca.$$.fragment,fl),fl.forEach(t),ul.forEach(t),qr=p(nn),St=r(nn,"SPAN",{});var _l=o(St);Mr=g(_l,"Dataset Cards"),_l.forEach(t),nn.forEach(t),qs=p(e),ot=r(e,"P",{});var bl=o(ot);Nr=g(bl,"Dataset cards are also known as Data Cards in the ML Community."),bl.forEach(t),Ms=p(e),me=r(e,"H3",{class:!0});var rn=o(me);Se=r(rn,"A",{id:!0,class:!0,href:!0});var vl=o(Se);Vt=r(vl,"SPAN",{});var xl=o(Vt);$(Ea.$$.fragment,xl),xl.forEach(t),vl.forEach(t),Pr=p(rn),Bt=r(rn,"SPAN",{});var $l=o(Bt);Lr=g($l,"DatasetCard"),$l.forEach(t),rn.forEach(t),Ns=p(e),ue=r(e,"DIV",{class:!0});var on=o(ue);$(ka.$$.fragment,on),Hr=p(on),S=r(on,"DIV",{class:!0});var na=o(S);$(Ra.$$.fragment,na),Ir=p(na),lt=r(na,"P",{});var Ho=o(lt);Or=g(Ho,`Initialize a DatasetCard from a template. By default, it uses the default template, which can be found here:
`),Aa=r(Ho,"A",{href:!0,rel:!0});var yl=o(Aa);Ur=g(yl,"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),yl.forEach(t),Ho.forEach(t),Fr=p(na),zt=r(na,"P",{});var jl=o(zt);Sr=g(jl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),jl.forEach(t),Vr=p(na),$(Ve.$$.fragment,na),na.forEach(t),on.forEach(t),Ps=p(e),fe=r(e,"H3",{class:!0});var ln=o(fe);Be=r(ln,"A",{id:!0,class:!0,href:!0});var wl=o(Be);Gt=r(wl,"SPAN",{});var Dl=o(Gt);$(Ta.$$.fragment,Dl),Dl.forEach(t),wl.forEach(t),Br=p(ln),Jt=r(ln,"SPAN",{});var Cl=o(Jt);zr=g(Cl,"DatasetCardData"),Cl.forEach(t),ln.forEach(t),Ls=p(e),_e=r(e,"DIV",{class:!0});var cn=o(_e);$(qa.$$.fragment,cn),Gr=p(cn),Wt=r(cn,"P",{});var El=o(Wt);Jr=g(El,"Dataset Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),El.forEach(t),cn.forEach(t),Hs=p(e),be=r(e,"H2",{class:!0});var pn=o(be);ze=r(pn,"A",{id:!0,class:!0,href:!0});var kl=o(ze);Yt=r(kl,"SPAN",{});var Rl=o(Yt);$(Ma.$$.fragment,Rl),Rl.forEach(t),kl.forEach(t),Wr=p(pn),Kt=r(pn,"SPAN",{});var Al=o(Kt);Yr=g(Al,"Utilities"),Al.forEach(t),pn.forEach(t),Is=p(e),ve=r(e,"H3",{class:!0});var dn=o(ve);Ge=r(dn,"A",{id:!0,class:!0,href:!0});var Tl=o(Ge);Qt=r(Tl,"SPAN",{});var ql=o(Qt);$(Na.$$.fragment,ql),ql.forEach(t),Tl.forEach(t),Kr=p(dn),Xt=r(dn,"SPAN",{});var Ml=o(Xt);Qr=g(Ml,"EvalResult"),Ml.forEach(t),dn.forEach(t),Os=p(e),W=r(e,"DIV",{class:!0});var ut=o(W);$(Pa.$$.fragment,ut),Xr=p(ut),Zt=r(ut,"P",{});var Nl=o(Zt);Zr=g(Nl,"Flattened representation of individual evaluation results found in model-index of Model Cards."),Nl.forEach(t),eo=p(ut),La=r(ut,"P",{});var gn=o(La);ao=g(gn,"For more information on the model-index spec, see "),Ha=r(gn,"A",{href:!0,rel:!0});var Pl=o(Ha);to=g(Pl,"https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),Pl.forEach(t),so=g(gn,"."),gn.forEach(t),ut.forEach(t),Us=p(e),xe=r(e,"H3",{class:!0});var hn=o(xe);Je=r(hn,"A",{id:!0,class:!0,href:!0});var Ll=o(Je);es=r(Ll,"SPAN",{});var Hl=o(es);$(Ia.$$.fragment,Hl),Hl.forEach(t),Ll.forEach(t),no=p(hn),as=r(hn,"SPAN",{});var Il=o(as);ro=g(Il,"model_index_to_eval_results"),Il.forEach(t),hn.forEach(t),Fs=p(e),P=r(e,"DIV",{class:!0});var ra=o(P);$(Oa.$$.fragment,ra),oo=p(ra),Ua=r(ra,"P",{});var mn=o(Ua);lo=g(mn,"Takes in a model index and returns the model name and a list of "),ts=r(mn,"CODE",{});var Ol=o(ts);io=g(Ol,"huggingface_hub.EvalResult"),Ol.forEach(t),co=g(mn," objects."),mn.forEach(t),po=p(ra),it=r(ra,"P",{});var Io=o(it);go=g(Io,`A detailed spec of the model index can be found here:
`),Fa=r(Io,"A",{href:!0,rel:!0});var Ul=o(Fa);ho=g(Ul,"https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),Ul.forEach(t),Io.forEach(t),mo=p(ra),$(We.$$.fragment,ra),ra.forEach(t),Ss=p(e),$e=r(e,"H3",{class:!0});var un=o($e);Ye=r(un,"A",{id:!0,class:!0,href:!0});var Fl=o(Ye);ss=r(Fl,"SPAN",{});var Sl=o(ss);$(Sa.$$.fragment,Sl),Sl.forEach(t),Fl.forEach(t),uo=p(un),ns=r(un,"SPAN",{});var Vl=o(ns);fo=g(Vl,"eval_results_to_model_index"),Vl.forEach(t),un.forEach(t),Vs=p(e),Y=r(e,"DIV",{class:!0});var ft=o(Y);$(Va.$$.fragment,ft),_o=p(ft),Ba=r(ft,"P",{});var fn=o(Ba);bo=g(fn,"Takes in given model name and list of "),rs=r(fn,"CODE",{});var Bl=o(rs);vo=g(Bl,"huggingface_hub.EvalResult"),Bl.forEach(t),xo=g(fn,` and returns a
valid model-index that will be compatible with the format expected by the
Hugging Face Hub.`),fn.forEach(t),$o=p(ft),$(Ke.$$.fragment,ft),ft.forEach(t),Bs=p(e),ye=r(e,"H3",{class:!0});var _n=o(ye);Qe=r(_n,"A",{id:!0,class:!0,href:!0});var zl=o(Qe);os=r(zl,"SPAN",{});var Gl=o(os);$(za.$$.fragment,Gl),Gl.forEach(t),zl.forEach(t),yo=p(_n),ls=r(_n,"SPAN",{});var Jl=o(ls);jo=g(Jl,"metadata_eval_result"),Jl.forEach(t),_n.forEach(t),zs=p(e),K=r(e,"DIV",{class:!0});var _t=o(K);$(Ga.$$.fragment,_t),wo=p(_t),is=r(_t,"P",{});var Wl=o(is);Do=g(Wl,"Creates a metadata dict with the result from a model evaluated on a dataset."),Wl.forEach(t),Co=p(_t),$(Xe.$$.fragment,_t),_t.forEach(t),Gs=p(e),je=r(e,"H3",{class:!0});var bn=o(je);Ze=r(bn,"A",{id:!0,class:!0,href:!0});var Yl=o(Ze);cs=r(Yl,"SPAN",{});var Kl=o(cs);$(Ja.$$.fragment,Kl),Kl.forEach(t),Yl.forEach(t),Eo=p(bn),ps=r(bn,"SPAN",{});var Ql=o(ps);ko=g(Ql,"metadata_update"),Ql.forEach(t),bn.forEach(t),Js=p(e),Q=r(e,"DIV",{class:!0});var bt=o(Q);$(Wa.$$.fragment,bt),Ro=p(bt),we=r(bt,"P",{});var vt=o(we);Ao=g(vt,`Updates the metadata in the README.md of a repository on the Hugging Face Hub.
If the README.md file doesn\u2019t exist yet, a new one is created with metadata and an
the default ModelCard or DatasetCard template. For `),ds=r(vt,"CODE",{});var Xl=o(ds);To=g(Xl,"space"),Xl.forEach(t),qo=g(vt,` repo, an error is thrown
as a Space cannot exist without a `),gs=r(vt,"CODE",{});var Zl=o(gs);Mo=g(Zl,"README.md"),Zl.forEach(t),No=g(vt," file."),vt.forEach(t),Po=p(bt),$(ea.$$.fragment,bt),bt.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(vi)),l(i,"id","repository-cards"),l(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(i,"href","#repository-cards"),l(_,"class","relative group"),l(V,"href","https://huggingface.co/docs/hub/models-cards"),l(V,"rel","nofollow"),l(ee,"href","../how-to-model-cards"),l(z,"id","huggingface_hub.repocard.RepoCard"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#huggingface_hub.repocard.RepoCard"),l(H,"class","relative group"),l(Za,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.ModelCard"),l(et,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.DatasetCard"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.repocard.RepoCard.push_to_hub"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Me,"id","huggingface_hub.CardData"),l(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Me,"href","#huggingface_hub.CardData"),l(ie,"class","relative group"),l(tt,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.CardData"),l(st,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.ModelCardData"),l(nt,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/cards#huggingface_hub.DatasetCardData"),l(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Le,"id","model-cards"),l(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Le,"href","#model-cards"),l(ce,"class","relative group"),l(He,"id","huggingface_hub.ModelCard"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#huggingface_hub.ModelCard"),l(pe,"class","relative group"),l(ja,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),l(ja,"rel","nofollow"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Oe,"id","huggingface_hub.ModelCardData"),l(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Oe,"href","#huggingface_hub.ModelCardData"),l(ge,"class","relative group"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Fe,"id","dataset-cards"),l(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Fe,"href","#dataset-cards"),l(he,"class","relative group"),l(Se,"id","huggingface_hub.DatasetCard"),l(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Se,"href","#huggingface_hub.DatasetCard"),l(me,"class","relative group"),l(Aa,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),l(Aa,"rel","nofollow"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Be,"id","huggingface_hub.DatasetCardData"),l(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Be,"href","#huggingface_hub.DatasetCardData"),l(fe,"class","relative group"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ze,"id","utilities"),l(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ze,"href","#utilities"),l(be,"class","relative group"),l(Ge,"id","huggingface_hub.EvalResult"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#huggingface_hub.EvalResult"),l(ve,"class","relative group"),l(Ha,"href","https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),l(Ha,"rel","nofollow"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","huggingface_hub.repocard_data.model_index_to_eval_results"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#huggingface_hub.repocard_data.model_index_to_eval_results"),l(xe,"class","relative group"),l(Fa,"href","https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),l(Fa,"rel","nofollow"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ye,"id","huggingface_hub.repocard_data.eval_results_to_model_index"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#huggingface_hub.repocard_data.eval_results_to_model_index"),l($e,"class","relative group"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Qe,"id","huggingface_hub.metadata_eval_result"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#huggingface_hub.metadata_eval_result"),l(ye,"class","relative group"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","huggingface_hub.metadata_update"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#huggingface_hub.metadata_update"),l(je,"class","relative group"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){a(document.head,h),u(e,v,m),u(e,_,m),a(_,i),a(i,b),y(s,b,null),a(_,f),a(_,A),a(A,T),u(e,q,m),u(e,k,m),a(k,Z),a(k,V),a(V,L),a(k,B),a(k,ee),a(ee,Qa),a(k,Xa),u(e,Ce,m),u(e,H,m),a(H,z),a(z,xt),y(oa,xt,null),a(H,vn),a(H,$t),a($t,xn),u(e,$s,m),u(e,I,m),a(I,$n),a(I,yt),a(yt,yn),a(I,jn),a(I,Za),a(Za,wn),a(I,Dn),a(I,et),a(et,Cn),a(I,En),u(e,ys,m),u(e,R,m),y(la,R,null),a(R,kn),a(R,O),y(ia,O,null),a(O,Rn),a(O,jt),a(jt,An),a(O,Tn),y(Ee,O,null),a(O,qn),y(ke,O,null),a(R,Mn),a(R,ae),y(ca,ae,null),a(ae,Nn),a(ae,wt),a(wt,Pn),a(ae,Ln),a(ae,Dt),a(Dt,Hn),a(R,In),a(R,te),y(pa,te,null),a(te,On),a(te,Ct),a(Ct,Un),a(te,Fn),y(Re,te,null),a(R,Sn),a(R,Ae),y(da,Ae,null),a(Ae,Vn),a(Ae,Et),a(Et,Bn),a(R,zn),a(R,se),y(ga,se,null),a(se,Gn),a(se,kt),a(kt,Jn),a(se,Wn),y(Te,se,null),a(R,Yn),a(R,ne),y(ha,ne,null),a(ne,Kn),a(ne,ma),a(ma,Qn),a(ma,at),a(at,Xn),a(ma,Zn),a(ne,er),y(qe,ne,null),u(e,js,m),u(e,ie,m),a(ie,Me),a(Me,Rt),y(ua,Rt,null),a(ie,ar),a(ie,At),a(At,tr),u(e,ws,m),u(e,U,m),a(U,sr),a(U,tt),a(tt,nr),a(U,rr),a(U,st),a(st,or),a(U,lr),a(U,nt),a(nt,ir),a(U,cr),u(e,Ds,m),u(e,G,m),y(fa,G,null),a(G,pr),a(G,Ne),y(_a,Ne,null),a(Ne,dr),a(Ne,Tt),a(Tt,gr),a(G,hr),a(G,Pe),y(ba,Pe,null),a(Pe,mr),a(Pe,qt),a(qt,ur),u(e,Cs,m),u(e,ce,m),a(ce,Le),a(Le,Mt),y(va,Mt,null),a(ce,fr),a(ce,Nt),a(Nt,_r),u(e,Es,m),u(e,pe,m),a(pe,He),a(He,Pt),y(xa,Pt,null),a(pe,br),a(pe,Lt),a(Lt,vr),u(e,ks,m),u(e,de,m),y($a,de,null),a(de,xr),a(de,F),y(ya,F,null),a(F,$r),a(F,rt),a(rt,yr),a(rt,ja),a(ja,jr),a(F,wr),a(F,Ht),a(Ht,Dr),a(F,Cr),y(Ie,F,null),u(e,Rs,m),u(e,ge,m),a(ge,Oe),a(Oe,It),y(wa,It,null),a(ge,Er),a(ge,Ot),a(Ot,kr),u(e,As,m),u(e,J,m),y(Da,J,null),a(J,Rr),a(J,Ut),a(Ut,Ar),a(J,Tr),y(Ue,J,null),u(e,Ts,m),u(e,he,m),a(he,Fe),a(Fe,Ft),y(Ca,Ft,null),a(he,qr),a(he,St),a(St,Mr),u(e,qs,m),u(e,ot,m),a(ot,Nr),u(e,Ms,m),u(e,me,m),a(me,Se),a(Se,Vt),y(Ea,Vt,null),a(me,Pr),a(me,Bt),a(Bt,Lr),u(e,Ns,m),u(e,ue,m),y(ka,ue,null),a(ue,Hr),a(ue,S),y(Ra,S,null),a(S,Ir),a(S,lt),a(lt,Or),a(lt,Aa),a(Aa,Ur),a(S,Fr),a(S,zt),a(zt,Sr),a(S,Vr),y(Ve,S,null),u(e,Ps,m),u(e,fe,m),a(fe,Be),a(Be,Gt),y(Ta,Gt,null),a(fe,Br),a(fe,Jt),a(Jt,zr),u(e,Ls,m),u(e,_e,m),y(qa,_e,null),a(_e,Gr),a(_e,Wt),a(Wt,Jr),u(e,Hs,m),u(e,be,m),a(be,ze),a(ze,Yt),y(Ma,Yt,null),a(be,Wr),a(be,Kt),a(Kt,Yr),u(e,Is,m),u(e,ve,m),a(ve,Ge),a(Ge,Qt),y(Na,Qt,null),a(ve,Kr),a(ve,Xt),a(Xt,Qr),u(e,Os,m),u(e,W,m),y(Pa,W,null),a(W,Xr),a(W,Zt),a(Zt,Zr),a(W,eo),a(W,La),a(La,ao),a(La,Ha),a(Ha,to),a(La,so),u(e,Us,m),u(e,xe,m),a(xe,Je),a(Je,es),y(Ia,es,null),a(xe,no),a(xe,as),a(as,ro),u(e,Fs,m),u(e,P,m),y(Oa,P,null),a(P,oo),a(P,Ua),a(Ua,lo),a(Ua,ts),a(ts,io),a(Ua,co),a(P,po),a(P,it),a(it,go),a(it,Fa),a(Fa,ho),a(P,mo),y(We,P,null),u(e,Ss,m),u(e,$e,m),a($e,Ye),a(Ye,ss),y(Sa,ss,null),a($e,uo),a($e,ns),a(ns,fo),u(e,Vs,m),u(e,Y,m),y(Va,Y,null),a(Y,_o),a(Y,Ba),a(Ba,bo),a(Ba,rs),a(rs,vo),a(Ba,xo),a(Y,$o),y(Ke,Y,null),u(e,Bs,m),u(e,ye,m),a(ye,Qe),a(Qe,os),y(za,os,null),a(ye,yo),a(ye,ls),a(ls,jo),u(e,zs,m),u(e,K,m),y(Ga,K,null),a(K,wo),a(K,is),a(is,Do),a(K,Co),y(Xe,K,null),u(e,Gs,m),u(e,je,m),a(je,Ze),a(Ze,cs),y(Ja,cs,null),a(je,Eo),a(je,ps),a(ps,ko),u(e,Js,m),u(e,Q,m),y(Wa,Q,null),a(Q,Ro),a(Q,we),a(we,Ao),a(we,ds),a(ds,To),a(we,qo),a(we,gs),a(gs,Mo),a(we,No),a(Q,Po),y(ea,Q,null),Ws=!0},p(e,[m]){const Ya={};m&2&&(Ya.$$scope={dirty:m,ctx:e}),Ee.$set(Ya);const hs={};m&2&&(hs.$$scope={dirty:m,ctx:e}),ke.$set(hs);const ms={};m&2&&(ms.$$scope={dirty:m,ctx:e}),Re.$set(ms);const us={};m&2&&(us.$$scope={dirty:m,ctx:e}),Te.$set(us);const De={};m&2&&(De.$$scope={dirty:m,ctx:e}),qe.$set(De);const fs={};m&2&&(fs.$$scope={dirty:m,ctx:e}),Ie.$set(fs);const _s={};m&2&&(_s.$$scope={dirty:m,ctx:e}),Ue.$set(_s);const Ka={};m&2&&(Ka.$$scope={dirty:m,ctx:e}),Ve.$set(Ka);const bs={};m&2&&(bs.$$scope={dirty:m,ctx:e}),We.$set(bs);const vs={};m&2&&(vs.$$scope={dirty:m,ctx:e}),Ke.$set(vs);const xs={};m&2&&(xs.$$scope={dirty:m,ctx:e}),Xe.$set(xs);const X={};m&2&&(X.$$scope={dirty:m,ctx:e}),ea.$set(X)},i(e){Ws||(j(s.$$.fragment,e),j(oa.$$.fragment,e),j(la.$$.fragment,e),j(ia.$$.fragment,e),j(Ee.$$.fragment,e),j(ke.$$.fragment,e),j(ca.$$.fragment,e),j(pa.$$.fragment,e),j(Re.$$.fragment,e),j(da.$$.fragment,e),j(ga.$$.fragment,e),j(Te.$$.fragment,e),j(ha.$$.fragment,e),j(qe.$$.fragment,e),j(ua.$$.fragment,e),j(fa.$$.fragment,e),j(_a.$$.fragment,e),j(ba.$$.fragment,e),j(va.$$.fragment,e),j(xa.$$.fragment,e),j($a.$$.fragment,e),j(ya.$$.fragment,e),j(Ie.$$.fragment,e),j(wa.$$.fragment,e),j(Da.$$.fragment,e),j(Ue.$$.fragment,e),j(Ca.$$.fragment,e),j(Ea.$$.fragment,e),j(ka.$$.fragment,e),j(Ra.$$.fragment,e),j(Ve.$$.fragment,e),j(Ta.$$.fragment,e),j(qa.$$.fragment,e),j(Ma.$$.fragment,e),j(Na.$$.fragment,e),j(Pa.$$.fragment,e),j(Ia.$$.fragment,e),j(Oa.$$.fragment,e),j(We.$$.fragment,e),j(Sa.$$.fragment,e),j(Va.$$.fragment,e),j(Ke.$$.fragment,e),j(za.$$.fragment,e),j(Ga.$$.fragment,e),j(Xe.$$.fragment,e),j(Ja.$$.fragment,e),j(Wa.$$.fragment,e),j(ea.$$.fragment,e),Ws=!0)},o(e){w(s.$$.fragment,e),w(oa.$$.fragment,e),w(la.$$.fragment,e),w(ia.$$.fragment,e),w(Ee.$$.fragment,e),w(ke.$$.fragment,e),w(ca.$$.fragment,e),w(pa.$$.fragment,e),w(Re.$$.fragment,e),w(da.$$.fragment,e),w(ga.$$.fragment,e),w(Te.$$.fragment,e),w(ha.$$.fragment,e),w(qe.$$.fragment,e),w(ua.$$.fragment,e),w(fa.$$.fragment,e),w(_a.$$.fragment,e),w(ba.$$.fragment,e),w(va.$$.fragment,e),w(xa.$$.fragment,e),w($a.$$.fragment,e),w(ya.$$.fragment,e),w(Ie.$$.fragment,e),w(wa.$$.fragment,e),w(Da.$$.fragment,e),w(Ue.$$.fragment,e),w(Ca.$$.fragment,e),w(Ea.$$.fragment,e),w(ka.$$.fragment,e),w(Ra.$$.fragment,e),w(Ve.$$.fragment,e),w(Ta.$$.fragment,e),w(qa.$$.fragment,e),w(Ma.$$.fragment,e),w(Na.$$.fragment,e),w(Pa.$$.fragment,e),w(Ia.$$.fragment,e),w(Oa.$$.fragment,e),w(We.$$.fragment,e),w(Sa.$$.fragment,e),w(Va.$$.fragment,e),w(Ke.$$.fragment,e),w(za.$$.fragment,e),w(Ga.$$.fragment,e),w(Xe.$$.fragment,e),w(Ja.$$.fragment,e),w(Wa.$$.fragment,e),w(ea.$$.fragment,e),Ws=!1},d(e){t(h),e&&t(v),e&&t(_),D(s),e&&t(q),e&&t(k),e&&t(Ce),e&&t(H),D(oa),e&&t($s),e&&t(I),e&&t(ys),e&&t(R),D(la),D(ia),D(Ee),D(ke),D(ca),D(pa),D(Re),D(da),D(ga),D(Te),D(ha),D(qe),e&&t(js),e&&t(ie),D(ua),e&&t(ws),e&&t(U),e&&t(Ds),e&&t(G),D(fa),D(_a),D(ba),e&&t(Cs),e&&t(ce),D(va),e&&t(Es),e&&t(pe),D(xa),e&&t(ks),e&&t(de),D($a),D(ya),D(Ie),e&&t(Rs),e&&t(ge),D(wa),e&&t(As),e&&t(J),D(Da),D(Ue),e&&t(Ts),e&&t(he),D(Ca),e&&t(qs),e&&t(ot),e&&t(Ms),e&&t(me),D(Ea),e&&t(Ns),e&&t(ue),D(ka),D(Ra),D(Ve),e&&t(Ps),e&&t(fe),D(Ta),e&&t(Ls),e&&t(_e),D(qa),e&&t(Hs),e&&t(be),D(Ma),e&&t(Is),e&&t(ve),D(Na),e&&t(Os),e&&t(W),D(Pa),e&&t(Us),e&&t(xe),D(Ia),e&&t(Fs),e&&t(P),D(Oa),D(We),e&&t(Ss),e&&t($e),D(Sa),e&&t(Vs),e&&t(Y),D(Va),D(Ke),e&&t(Bs),e&&t(ye),D(za),e&&t(zs),e&&t(K),D(Ga),D(Xe),e&&t(Gs),e&&t(je),D(Ja),e&&t(Js),e&&t(Q),D(Wa),D(ea)}}}const vi={local:"repository-cards",sections:[{local:"huggingface_hub.repocard.RepoCard",title:"Repo Card"},{local:"huggingface_hub.CardData",title:"Card Data"},{local:"model-cards",sections:[{local:"huggingface_hub.ModelCard",title:"ModelCard"},{local:"huggingface_hub.ModelCardData",title:"ModelCardData"}],title:"Model Cards"},{local:"dataset-cards",sections:[{local:"huggingface_hub.DatasetCard",title:"DatasetCard"},{local:"huggingface_hub.DatasetCardData",title:"DatasetCardData"}],title:"Dataset Cards"},{local:"utilities",sections:[{local:"huggingface_hub.EvalResult",title:"EvalResult"},{local:"huggingface_hub.repocard_data.model_index_to_eval_results",title:"model_index_to_eval_results"},{local:"huggingface_hub.repocard_data.eval_results_to_model_index",title:"eval_results_to_model_index"},{local:"huggingface_hub.metadata_eval_result",title:"metadata_eval_result"},{local:"huggingface_hub.metadata_update",title:"metadata_update"}],title:"Utilities"}],title:"Repository Cards"};function xi(C){return ri(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ei extends ai{constructor(h){super();ti(this,h,xi,bi,si,{})}}export{Ei as default,vi as metadata};
