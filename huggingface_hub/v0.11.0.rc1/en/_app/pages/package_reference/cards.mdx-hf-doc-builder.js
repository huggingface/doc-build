import{S as _i,i as bi,s as vi,e as n,k as c,w as x,t as d,M as xi,c as r,d as t,m as p,a as o,x as $,h as g,b as l,G as a,g as u,y,q as j,o as w,B as D,v as $i,L as oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as fi}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as M}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function yi(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function ji(E){let h,v,_,i,b,s,f;return{c(){h=d(`Raises the following error:
`),v=n("ul"),_=n("li"),i=n("a"),b=n("code"),s=d("ValueError"),f=d(`
when the content of the repo card metadata is not a dictionary.`),this.h()},l(A){h=g(A,`Raises the following error:
`),v=r(A,"UL",{});var T=o(v);_=r(T,"LI",{});var q=o(_);i=r(q,"A",{href:!0,rel:!0});var k=o(i);b=r(k,"CODE",{});var Z=o(b);s=g(Z,"ValueError"),Z.forEach(t),k.forEach(t),f=g(q,`
when the content of the repo card metadata is not a dictionary.`),q.forEach(t),T.forEach(t),this.h()},h(){l(i,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),l(i,"rel","nofollow")},m(A,T){u(A,h,T),u(A,v,T),a(v,_),a(_,i),a(i,b),a(b,s),a(_,f)},d(A){A&&t(h),A&&t(v)}}}function wi(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
card = RepoCard.load("nateraw/food")
assert card.data.tags == ["generated_from_trainer", "image-classification", "pytorch"]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard.load(<span class="hljs-string">&quot;nateraw/food&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> card.data.tags == [<span class="hljs-string">&quot;generated_from_trainer&quot;</span>, <span class="hljs-string">&quot;image-classification&quot;</span>, <span class="hljs-string">&quot;pytorch&quot;</span>]
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Di(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard import RepoCard
card = RepoCard("---\\nlanguage: en\\n---\\n# This is a test repo card")
card.save("/tmp/test.md")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.repocard <span class="hljs-keyword">import</span> RepoCard
<span class="hljs-meta">&gt;&gt;&gt; </span>card = RepoCard(<span class="hljs-string">&quot;---\\nlanguage: en\\n---\\n# This is a test repo card&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>card.save(<span class="hljs-string">&quot;/tmp/test.md&quot;</span>)
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Ei(E){let h,v,_,i,b,s,f,A,T,q,k,Z,B;return{c(){h=d(`Raises the following errors:
`),v=n("ul"),_=n("li"),i=n("a"),b=n("code"),s=d("ValueError"),f=d(`
if the card fails validation checks.`),A=c(),T=n("li"),q=n("a"),k=n("code"),Z=d("HTTPError"),B=d(`
if the request to the Hub API fails for any other reason.`),this.h()},l(H){h=g(H,`Raises the following errors:
`),v=r(H,"UL",{});var z=o(v);_=r(z,"LI",{});var ee=o(_);i=r(ee,"A",{href:!0,rel:!0});var at=o(i);b=r(at,"CODE",{});var tt=o(b);s=g(tt,"ValueError"),tt.forEach(t),at.forEach(t),f=g(ee,`
if the card fails validation checks.`),ee.forEach(t),A=p(z),T=r(z,"LI",{});var Ce=o(T);q=r(Ce,"A",{href:!0,rel:!0});var I=o(q);k=r(I,"CODE",{});var J=o(k);Z=g(J,"HTTPError"),J.forEach(t),I.forEach(t),B=g(Ce,`
if the request to the Hub API fails for any other reason.`),Ce.forEach(t),z.forEach(t),this.h()},h(){l(i,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),l(i,"rel","nofollow"),l(q,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),l(q,"rel","nofollow")},m(H,z){u(H,h,z),u(H,v,z),a(v,_),a(_,i),a(i,b),a(b,s),a(_,f),a(v,A),a(v,T),a(T,q),a(q,k),a(k,Z),a(T,B)},d(H){H&&t(h),H&&t(v)}}}function Ci(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import ModelCard, ModelCardData, EvalResult

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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function ki(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import ModelCardData
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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Ri(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import DatasetCard, DatasetCardData

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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Ai(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard_data import model_index_to_eval_results
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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Ti(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub.repocard_data import eval_results_to_model_index, EvalResult
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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function qi(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import metadata_eval_result
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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Mi(E){let h,v,_,i,b;return i=new le({props:{code:`from huggingface_hub import metadata_update
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
`}}),{c(){h=n("p"),v=d("Example:"),_=c(),x(i.$$.fragment)},l(s){h=r(s,"P",{});var f=o(h);v=g(f,"Example:"),f.forEach(t),_=p(s),$(i.$$.fragment,s)},m(s,f){u(s,h,f),a(h,v),u(s,_,f),y(i,s,f),b=!0},p:oe,i(s){b||(j(i.$$.fragment,s),b=!0)},o(s){w(i.$$.fragment,s),b=!1},d(s){s&&t(h),s&&t(_),D(i,s)}}}function Ni(E){let h,v,_,i,b,s,f,A,T,q,k,Z,B,H,z,ee,at,tt,Ce,I,J,wt,ca,En,Dt,Cn,Cs,O,kn,Et,Rn,An,st,Tn,qn,nt,Mn,Nn,ks,R,pa,Pn,F,da,Ln,Ct,Hn,In,ke,On,Re,Fn,ae,ga,Un,kt,Sn,Vn,Rt,Bn,zn,te,ha,Jn,At,Wn,Gn,Ae,Yn,Te,ma,Kn,Tt,Qn,Xn,se,ua,Zn,qt,er,ar,qe,tr,ne,fa,sr,_a,nr,rt,rr,or,lr,Me,Rs,ie,Ne,Mt,ba,ir,Nt,cr,As,U,pr,ot,dr,gr,lt,hr,mr,it,ur,fr,Ts,W,va,_r,Pe,xa,br,Pt,vr,xr,Le,$a,$r,Lt,yr,qs,ce,He,Ht,ya,jr,It,wr,Ms,pe,Ie,Ot,ja,Dr,Ft,Er,Ns,de,wa,Cr,S,Da,kr,ct,Rr,Ea,Ar,Tr,Ut,qr,Mr,Oe,Ps,ge,Fe,St,Ca,Nr,Vt,Pr,Ls,G,ka,Lr,Bt,Hr,Ir,Ue,Hs,he,Se,zt,Ra,Or,Jt,Fr,Is,pt,Ur,Os,me,Ve,Wt,Aa,Sr,Gt,Vr,Fs,ue,Ta,Br,V,qa,zr,dt,Jr,Ma,Wr,Gr,Yt,Yr,Kr,Be,Us,fe,ze,Kt,Na,Qr,Qt,Xr,Ss,_e,Pa,Zr,Xt,eo,Vs,be,Je,Zt,La,ao,es,to,Bs,ve,We,as,Ha,so,ts,no,zs,P,Ia,ro,ss,oo,lo,Oa,io,Fa,co,po,go,Ge,Ua,ho,xe,mo,ns,uo,fo,rs,_o,bo,Js,$e,Ye,os,Sa,vo,ls,xo,Ws,L,Va,$o,Ba,yo,is,jo,wo,Do,gt,Eo,za,Co,ko,Ke,Gs,ye,Qe,cs,Ja,Ro,ps,Ao,Ys,Y,Wa,To,Ga,qo,ds,Mo,No,Po,Xe,Ks,je,Ze,gs,Ya,Lo,hs,Ho,Qs,K,Ka,Io,ms,Oo,Fo,ea,Xs,we,aa,us,Qa,Uo,fs,So,Zs,Q,Xa,Vo,De,Bo,_s,zo,Jo,bs,Wo,Go,Yo,ta,en;return s=new M({}),ca=new M({}),pa=new C({props:{name:"class huggingface_hub.repocard.RepoCard",anchor:"huggingface_hub.repocard.RepoCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L45"}}),da=new C({props:{name:"__init__",anchor:"huggingface_hub.repocard.RepoCard.__init__",parameters:[{name:"content",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.__init__.content",description:"<strong>content</strong> (<code>str</code>) &#x2014; The content of the Markdown file.",name:"content"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L50"}}),ke=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.__init__.example",$$slots:{default:[yi]},$$scope:{ctx:E}}}),Re=new fi({props:{$$slots:{default:[ji]},$$scope:{ctx:E}}}),ga=new C({props:{name:"from_template",anchor:"huggingface_hub.repocard.RepoCard.from_template",parameters:[{name:"card_data",val:": CardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.CardData</code>) &#x2014;
A huggingface_hub.CardData instance containing the metadata you want to include in the YAML
header of the repo card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.repocard.RepoCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L296",returnDescription:`
<p>A RepoCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.repocard.RepoCard"
>huggingface_hub.repocard.RepoCard</a></p>
`}}),ha=new C({props:{name:"load",anchor:"huggingface_hub.repocard.RepoCard.load",parameters:[{name:"repo_id_or_path",val:": typing.Union[str, pathlib.Path]"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.load.repo_id_or_path",description:`<strong>repo_id_or_path</strong> (<code>Union[str, Path]</code>) &#x2014;
The repo ID associated with a Hugging Face Hub repo or a local filepath.`,name:"repo_id_or_path"},{anchor:"huggingface_hub.repocard.RepoCard.load.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The type of Hugging Face repo to push to. Defaults to None, which will use
use &#x201C;model&#x201D;. Other options are &#x201C;dataset&#x201D; and &#x201C;space&#x201D;. Not used when loading from
a local filepath. If this is called from a child class, the default value will be
the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"},{anchor:"huggingface_hub.repocard.RepoCard.load.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>huggingface_hub.HfApi.login</code> method. Will default to
the stored token.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L140",returnDescription:`
<p>The RepoCard (or subclass) initialized from the repo\u2019s
README.md file or filepath.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.repocard.RepoCard"
>huggingface_hub.repocard.RepoCard</a></p>
`}}),Ae=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.load.example",$$slots:{default:[wi]},$$scope:{ctx:E}}}),ma=new C({props:{name:"push_to_hub",anchor:"huggingface_hub.repocard.RepoCard.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L233",returnDescription:`
<p>URL of the commit which updated the card metadata.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ua=new C({props:{name:"save",anchor:"huggingface_hub.repocard.RepoCard.save",parameters:[{name:"filepath",val:": typing.Union[pathlib.Path, str]"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.save.filepath",description:"<strong>filepath</strong> (<code>Union[Path, str]</code>) &#x2014; Filepath to the markdown file to save.",name:"filepath"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L122"}}),qe=new re({props:{anchor:"huggingface_hub.repocard.RepoCard.save.example",$$slots:{default:[Di]},$$scope:{ctx:E}}}),fa=new C({props:{name:"validate",anchor:"huggingface_hub.repocard.RepoCard.validate",parameters:[{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.repocard.RepoCard.validate.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;model&#x201D;) &#x2014;
The type of Hugging Face repo to push to. Options are &#x201C;model&#x201D;, &#x201C;dataset&#x201D;, and &#x201C;space&#x201D;.
If this function is called from a child class, the default will be the child class&#x2019;s <code>repo_type</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L192"}}),Me=new fi({props:{$$slots:{default:[Ei]},$$scope:{ctx:E}}}),ba=new M({}),va=new C({props:{name:"class huggingface_hub.CardData",anchor:"huggingface_hub.CardData",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L138"}}),xa=new C({props:{name:"to_dict",anchor:"huggingface_hub.CardData.to_dict",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L142",returnDescription:`
<p>CardData represented as a dictionary ready to be dumped to a YAML
block for inclusion in a README.md file.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),$a=new C({props:{name:"to_yaml",anchor:"huggingface_hub.CardData.to_yaml",parameters:[{name:"line_break",val:" = None"}],parametersDescription:[{anchor:"huggingface_hub.CardData.to_yaml.line_break",description:`<strong>line_break</strong> (str, <em>optional</em>) &#x2014;
The line break to use when dumping to yaml.`,name:"line_break"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L162",returnDescription:`
<p>CardData represented as a YAML block.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ya=new M({}),ja=new M({}),wa=new C({props:{name:"class huggingface_hub.ModelCard",anchor:"huggingface_hub.ModelCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L336"}}),Da=new C({props:{name:"from_template",anchor:"huggingface_hub.ModelCard.from_template",parameters:[{name:"card_data",val:": ModelCardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.ModelCardData</code>) &#x2014;
A huggingface_hub.ModelCardData instance containing the metadata you want to include in the YAML
header of the model card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.ModelCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L341",returnDescription:`
<p>A ModelCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.ModelCard"
>huggingface_hub.ModelCard</a></p>
`}}),Oe=new re({props:{anchor:"huggingface_hub.ModelCard.from_template.example",$$slots:{default:[Ci]},$$scope:{ctx:E}}}),Ca=new M({}),ka=new C({props:{name:"class huggingface_hub.ModelCardData",anchor:"huggingface_hub.ModelCardData",parameters:[{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"license",val:": typing.Optional[str] = None"},{name:"library_name",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.Optional[typing.List[str]] = None"},{name:"datasets",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"metrics",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"eval_results",val:": typing.Optional[typing.List[huggingface_hub.repocard_data.EvalResult]] = None"},{name:"model_name",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelCardData.language",description:`<strong>language</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
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
<code>model_name</code> is used to as a name on PapersWithCode&#x2019;s leaderboards. Defaults to <code>None</code>.`,name:"eval_results"},{anchor:"huggingface_hub.ModelCardData.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A name for this model. It is used along with
<code>eval_results</code> to construct the <code>model-index</code> within the card&#x2019;s metadata. The name
you supply here is what will be used on PapersWithCode&#x2019;s leaderboards. If None is provided
then the repo name is used as a default. Defaults to None.`,name:"model_name"},{anchor:"huggingface_hub.ModelCardData.kwargs",description:`<strong>kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Additional metadata that will be added to the model card. Defaults to None.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L178"}}),Ue=new re({props:{anchor:"huggingface_hub.ModelCardData.example",$$slots:{default:[ki]},$$scope:{ctx:E}}}),Ra=new M({}),Aa=new M({}),Ta=new C({props:{name:"class huggingface_hub.DatasetCard",anchor:"huggingface_hub.DatasetCard",parameters:[{name:"content",val:": str"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L416"}}),qa=new C({props:{name:"from_template",anchor:"huggingface_hub.DatasetCard.from_template",parameters:[{name:"card_data",val:": DatasetCardData"},{name:"template_path",val:": typing.Optional[str] = None"},{name:"**template_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.DatasetCard.from_template.card_data",description:`<strong>card_data</strong> (<code>huggingface_hub.DatasetCardData</code>) &#x2014;
A huggingface_hub.DatasetCardData instance containing the metadata you want to include in the YAML
header of the dataset card on the Hugging Face Hub.`,name:"card_data"},{anchor:"huggingface_hub.DatasetCard.from_template.template_path",description:`<strong>template_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to a markdown file with optional Jinja template variables that can be filled
in with <code>template_kwargs</code>. Defaults to the default template.`,name:"template_path"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L421",returnDescription:`
<p>A DatasetCard instance with the specified card data and content from the
template.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.DatasetCard"
>huggingface_hub.DatasetCard</a></p>
`}}),Be=new re({props:{anchor:"huggingface_hub.DatasetCard.from_template.example",$$slots:{default:[Ri]},$$scope:{ctx:E}}}),Na=new M({}),Pa=new C({props:{name:"class huggingface_hub.DatasetCardData",anchor:"huggingface_hub.DatasetCardData",parameters:[{name:"language",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"license",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"annotations_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"language_creators",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"multilinguality",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"size_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"source_datasets",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_categories",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"task_ids",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"paperswithcode_id",val:": typing.Optional[str] = None"},{name:"pretty_name",val:": typing.Optional[str] = None"},{name:"train_eval_index",val:": typing.Optional[typing.Dict] = None"},{name:"configs",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.DatasetCardData.language",description:`<strong>language</strong> (<code>Union[str, List[str]]</code>, <em>optional</em>) &#x2014;
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
A list of the available dataset configs for the dataset.`,name:"configs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L279"}}),La=new M({}),Ha=new M({}),Ia=new C({props:{name:"class huggingface_hub.EvalResult",anchor:"huggingface_hub.EvalResult",parameters:[{name:"task_type",val:": str"},{name:"dataset_type",val:": str"},{name:"dataset_name",val:": str"},{name:"metric_type",val:": str"},{name:"metric_value",val:": typing.Any"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"dataset_config",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"dataset_revision",val:": typing.Optional[str] = None"},{name:"dataset_args",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"metric_name",val:": typing.Optional[str] = None"},{name:"metric_config",val:": typing.Optional[str] = None"},{name:"metric_args",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"verified",val:": typing.Optional[bool] = None"},{name:"verify_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.EvalResult.task_type",description:`<strong>task_type</strong> (<code>str</code>) &#x2014;
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
Indicates whether the metrics originate from Hugging Face&#x2019;s <a href="https://huggingface.co/spaces/autoevaluate/model-evaluator" rel="nofollow">evaluation service</a> or not. Automatically computed by Hugging Face, do not set.`,name:"verified"},{anchor:"huggingface_hub.EvalResult.verify_token",description:`<strong>verify_token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A JSON Web Token that is used to verify whether the metrics originate from Hugging Face&#x2019;s <a href="https://huggingface.co/spaces/autoevaluate/model-evaluator" rel="nofollow">evaluation service</a> or not.`,name:"verify_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L15"}}),Ua=new C({props:{name:"is_equal_except_value",anchor:"huggingface_hub.EvalResult.is_equal_except_value",parameters:[{name:"other",val:": EvalResult"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L124"}}),Sa=new M({}),Va=new C({props:{name:"huggingface_hub.repocard_data.model_index_to_eval_results",anchor:"huggingface_hub.repocard_data.model_index_to_eval_results",parameters:[{name:"model_index",val:": typing.List[typing.Dict[str, typing.Any]]"}],parametersDescription:[{anchor:"huggingface_hub.repocard_data.model_index_to_eval_results.model_index",description:`<strong>model_index</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
A model index data structure, likely coming from a README.md file on the
Hugging Face Hub.`,name:"model_index"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L358",returnDescription:`
<p>The name of the model as found in the model index. This is used as the
identifier for the model on leaderboards like PapersWithCode.
eval_results (<code>List[EvalResult]</code>):
A list of <code>huggingface_hub.EvalResult</code> objects containing the metrics
reported in the provided model_index.</p>
`,returnType:`
<p>model_name (<code>str</code>)</p>
`}}),Ke=new re({props:{anchor:"huggingface_hub.repocard_data.model_index_to_eval_results.example",$$slots:{default:[Ai]},$$scope:{ctx:E}}}),Ja=new M({}),Wa=new C({props:{name:"huggingface_hub.repocard_data.eval_results_to_model_index",anchor:"huggingface_hub.repocard_data.eval_results_to_model_index",parameters:[{name:"model_name",val:": str"},{name:"eval_results",val:": typing.List[huggingface_hub.repocard_data.EvalResult]"}],parametersDescription:[{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.model_name",description:`<strong>model_name</strong> (<code>str</code>) &#x2014;
Name of the model (ex. &#x201C;my-cool-model&#x201D;). This is used as the identifier
for the model on leaderboards like PapersWithCode.`,name:"model_name"},{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.eval_results",description:`<strong>eval_results</strong> (<code>List[EvalResult]</code>) &#x2014;
List of <code>huggingface_hub.EvalResult</code> objects containing the metrics to be
reported in the model-index.`,name:"eval_results"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard_data.py#L476",returnDescription:`
<p>The eval_results converted to a model-index.</p>
`,returnType:`
<p>model_index (<code>List[Dict[str, Any]]</code>)</p>
`}}),Xe=new re({props:{anchor:"huggingface_hub.repocard_data.eval_results_to_model_index.example",$$slots:{default:[Ti]},$$scope:{ctx:E}}}),Ya=new M({}),Ka=new C({props:{name:"huggingface_hub.metadata_eval_result",anchor:"huggingface_hub.metadata_eval_result",parameters:[{name:"model_pretty_name",val:": str"},{name:"task_pretty_name",val:": str"},{name:"task_id",val:": str"},{name:"metrics_pretty_name",val:": str"},{name:"metrics_id",val:": str"},{name:"metrics_value",val:": typing.Any"},{name:"dataset_pretty_name",val:": str"},{name:"dataset_id",val:": str"},{name:"metrics_config",val:": typing.Optional[str] = None"},{name:"metrics_verified",val:": bool = False"},{name:"dataset_config",val:": typing.Optional[str] = None"},{name:"dataset_split",val:": typing.Optional[str] = None"},{name:"dataset_revision",val:": typing.Optional[str] = None"},{name:"metrics_verification_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.metadata_eval_result.model_pretty_name",description:`<strong>model_pretty_name</strong> (<code>str</code>) &#x2014;
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
Indicates whether the metrics originate from Hugging Face&#x2019;s <a href="https://huggingface.co/spaces/autoevaluate/model-evaluator" rel="nofollow">evaluation service</a> or not. Automatically computed by Hugging Face, do not set.`,name:"metrics_verified"},{anchor:"huggingface_hub.metadata_eval_result.dataset_config",description:`<strong>dataset_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: fr. The name of the dataset configuration used in <code>load_dataset()</code>.`,name:"dataset_config"},{anchor:"huggingface_hub.metadata_eval_result.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: test. The name of the dataset split used in <code>load_dataset()</code>.`,name:"dataset_split"},{anchor:"huggingface_hub.metadata_eval_result.dataset_revision",description:`<strong>dataset_revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Example: 5503434ddd753f426f4b38109466949a1217c2bb. The name of the dataset dataset revision
used in <code>load_dataset()</code>.`,name:"dataset_revision"},{anchor:"huggingface_hub.metadata_eval_result.metrics_verification_token",description:`<strong>metrics_verification_token</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
A JSON Web Token that is used to verify whether the metrics originate from Hugging Face&#x2019;s <a href="https://huggingface.co/spaces/autoevaluate/model-evaluator" rel="nofollow">evaluation service</a> or not.`,name:"metrics_verification_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L551",returnDescription:`
<p>a metadata dict with the result from a model evaluated on a dataset.</p>
`,returnType:`
<p><code>dict</code></p>
`}}),ea=new re({props:{anchor:"huggingface_hub.metadata_eval_result.example",$$slots:{default:[qi]},$$scope:{ctx:E}}}),Qa=new M({}),Xa=new C({props:{name:"huggingface_hub.metadata_update",anchor:"huggingface_hub.metadata_update",parameters:[{name:"repo_id",val:": str"},{name:"metadata",val:": typing.Dict"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"overwrite",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": bool = False"},{name:"parent_commit",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.metadata_update.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
especially useful if the repo is updated / committed to concurrently.`,name:"parent_commit"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/repocard.py#L680",returnDescription:`
<p>URL of the commit which updated the card metadata.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ta=new re({props:{anchor:"huggingface_hub.metadata_update.example",$$slots:{default:[Mi]},$$scope:{ctx:E}}}),{c(){h=n("meta"),v=c(),_=n("h1"),i=n("a"),b=n("span"),x(s.$$.fragment),f=c(),A=n("span"),T=d("Repository Cards"),q=c(),k=n("p"),Z=d(`The huggingface_hub library provides a Python interface to create, share, and update Model/Dataset Cards.
Visit the `),B=n("a"),H=d("dedicated documentation page"),z=d(` for a deeper view of what
Model Cards on the Hub are, and how they work under the hood. You can also check out our `),ee=n("a"),at=d("Model Cards guide"),tt=d(` to
get a feel for how you would use these utilities in your own projects.`),Ce=c(),I=n("h2"),J=n("a"),wt=n("span"),x(ca.$$.fragment),En=c(),Dt=n("span"),Cn=d("Repo Card"),Cs=c(),O=n("p"),kn=d("The "),Et=n("code"),Rn=d("RepoCard"),An=d(" object is the parent class of "),st=n("a"),Tn=d("ModelCard"),qn=d(" and "),nt=n("a"),Mn=d("DatasetCard"),Nn=d("."),ks=c(),R=n("div"),x(pa.$$.fragment),Pn=c(),F=n("div"),x(da.$$.fragment),Ln=c(),Ct=n("p"),Hn=d(`Initialize a RepoCard from string content. The content should be a
Markdown file with a YAML block at the beginning and a Markdown body.`),In=c(),x(ke.$$.fragment),On=c(),x(Re.$$.fragment),Fn=c(),ae=n("div"),x(ga.$$.fragment),Un=c(),kt=n("p"),Sn=d("Initialize a RepoCard from a template. By default, it uses the default template."),Vn=c(),Rt=n("p"),Bn=d("Templates are Jinja2 templates that can be customized by passing keyword arguments."),zn=c(),te=n("div"),x(ha.$$.fragment),Jn=c(),At=n("p"),Wn=d("Initialize a RepoCard from a Hugging Face Hub repo\u2019s README.md or a local filepath."),Gn=c(),x(Ae.$$.fragment),Yn=c(),Te=n("div"),x(ma.$$.fragment),Kn=c(),Tt=n("p"),Qn=d("Push a RepoCard to a Hugging Face Hub repo."),Xn=c(),se=n("div"),x(ua.$$.fragment),Zn=c(),qt=n("p"),er=d("Save a RepoCard to a file."),ar=c(),x(qe.$$.fragment),tr=c(),ne=n("div"),x(fa.$$.fragment),sr=c(),_a=n("p"),nr=d(`Validates card against Hugging Face Hub\u2019s card validation logic.
Using this function requires access to the internet, so it is only called
internally by `),rt=n("a"),rr=d("huggingface_hub.repocard.RepoCard.push_to_hub()"),or=d("."),lr=c(),x(Me.$$.fragment),Rs=c(),ie=n("h2"),Ne=n("a"),Mt=n("span"),x(ba.$$.fragment),ir=c(),Nt=n("span"),cr=d("Card Data"),As=c(),U=n("p"),pr=d("The "),ot=n("a"),dr=d("CardData"),gr=d(" object is the parent class of "),lt=n("a"),hr=d("ModelCardData"),mr=d(" and "),it=n("a"),ur=d("DatasetCardData"),fr=d("."),Ts=c(),W=n("div"),x(va.$$.fragment),_r=c(),Pe=n("div"),x(xa.$$.fragment),br=c(),Pt=n("p"),vr=d("Converts CardData to a dict."),xr=c(),Le=n("div"),x($a.$$.fragment),$r=c(),Lt=n("p"),yr=d("Dumps CardData to a YAML block for inclusion in a README.md file."),qs=c(),ce=n("h2"),He=n("a"),Ht=n("span"),x(ya.$$.fragment),jr=c(),It=n("span"),wr=d("Model Cards"),Ms=c(),pe=n("h3"),Ie=n("a"),Ot=n("span"),x(ja.$$.fragment),Dr=c(),Ft=n("span"),Er=d("ModelCard"),Ns=c(),de=n("div"),x(wa.$$.fragment),Cr=c(),S=n("div"),x(Da.$$.fragment),kr=c(),ct=n("p"),Rr=d(`Initialize a ModelCard from a template. By default, it uses the default template, which can be found here:
`),Ea=n("a"),Ar=d("https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),Tr=c(),Ut=n("p"),qr=d("Templates are Jinja2 templates that can be customized by passing keyword arguments."),Mr=c(),x(Oe.$$.fragment),Ps=c(),ge=n("h3"),Fe=n("a"),St=n("span"),x(Ca.$$.fragment),Nr=c(),Vt=n("span"),Pr=d("ModelCardData"),Ls=c(),G=n("div"),x(ka.$$.fragment),Lr=c(),Bt=n("p"),Hr=d("Model Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),Ir=c(),x(Ue.$$.fragment),Hs=c(),he=n("h2"),Se=n("a"),zt=n("span"),x(Ra.$$.fragment),Or=c(),Jt=n("span"),Fr=d("Dataset Cards"),Is=c(),pt=n("p"),Ur=d("Dataset cards are also known as Data Cards in the ML Community."),Os=c(),me=n("h3"),Ve=n("a"),Wt=n("span"),x(Aa.$$.fragment),Sr=c(),Gt=n("span"),Vr=d("DatasetCard"),Fs=c(),ue=n("div"),x(Ta.$$.fragment),Br=c(),V=n("div"),x(qa.$$.fragment),zr=c(),dt=n("p"),Jr=d(`Initialize a DatasetCard from a template. By default, it uses the default template, which can be found here:
`),Ma=n("a"),Wr=d("https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),Gr=c(),Yt=n("p"),Yr=d("Templates are Jinja2 templates that can be customized by passing keyword arguments."),Kr=c(),x(Be.$$.fragment),Us=c(),fe=n("h3"),ze=n("a"),Kt=n("span"),x(Na.$$.fragment),Qr=c(),Qt=n("span"),Xr=d("DatasetCardData"),Ss=c(),_e=n("div"),x(Pa.$$.fragment),Zr=c(),Xt=n("p"),eo=d("Dataset Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),Vs=c(),be=n("h2"),Je=n("a"),Zt=n("span"),x(La.$$.fragment),ao=c(),es=n("span"),to=d("Utilities"),Bs=c(),ve=n("h3"),We=n("a"),as=n("span"),x(Ha.$$.fragment),so=c(),ts=n("span"),no=d("EvalResult"),zs=c(),P=n("div"),x(Ia.$$.fragment),ro=c(),ss=n("p"),oo=d("Flattened representation of individual evaluation results found in model-index of Model Cards."),lo=c(),Oa=n("p"),io=d("For more information on the model-index spec, see "),Fa=n("a"),co=d("https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),po=d("."),go=c(),Ge=n("div"),x(Ua.$$.fragment),ho=c(),xe=n("p"),mo=d("Return True if "),ns=n("code"),uo=d("self"),fo=d(" and "),rs=n("code"),_o=d("other"),bo=d(` describe exactly the same metric but with a
different value.`),Js=c(),$e=n("h3"),Ye=n("a"),os=n("span"),x(Sa.$$.fragment),vo=c(),ls=n("span"),xo=d("model_index_to_eval_results"),Ws=c(),L=n("div"),x(Va.$$.fragment),$o=c(),Ba=n("p"),yo=d("Takes in a model index and returns the model name and a list of "),is=n("code"),jo=d("huggingface_hub.EvalResult"),wo=d(" objects."),Do=c(),gt=n("p"),Eo=d(`A detailed spec of the model index can be found here:
`),za=n("a"),Co=d("https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),ko=c(),x(Ke.$$.fragment),Gs=c(),ye=n("h3"),Qe=n("a"),cs=n("span"),x(Ja.$$.fragment),Ro=c(),ps=n("span"),Ao=d("eval_results_to_model_index"),Ys=c(),Y=n("div"),x(Wa.$$.fragment),To=c(),Ga=n("p"),qo=d("Takes in given model name and list of "),ds=n("code"),Mo=d("huggingface_hub.EvalResult"),No=d(` and returns a
valid model-index that will be compatible with the format expected by the
Hugging Face Hub.`),Po=c(),x(Xe.$$.fragment),Ks=c(),je=n("h3"),Ze=n("a"),gs=n("span"),x(Ya.$$.fragment),Lo=c(),hs=n("span"),Ho=d("metadata_eval_result"),Qs=c(),K=n("div"),x(Ka.$$.fragment),Io=c(),ms=n("p"),Oo=d("Creates a metadata dict with the result from a model evaluated on a dataset."),Fo=c(),x(ea.$$.fragment),Xs=c(),we=n("h3"),aa=n("a"),us=n("span"),x(Qa.$$.fragment),Uo=c(),fs=n("span"),So=d("metadata_update"),Zs=c(),Q=n("div"),x(Xa.$$.fragment),Vo=c(),De=n("p"),Bo=d(`Updates the metadata in the README.md of a repository on the Hugging Face Hub.
If the README.md file doesn\u2019t exist yet, a new one is created with metadata and an
the default ModelCard or DatasetCard template. For `),_s=n("code"),zo=d("space"),Jo=d(` repo, an error is thrown
as a Space cannot exist without a `),bs=n("code"),Wo=d("README.md"),Go=d(" file."),Yo=c(),x(ta.$$.fragment),this.h()},l(e){const m=xi('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),v=p(e),_=r(e,"H1",{class:!0});var Za=o(_);i=r(Za,"A",{id:!0,class:!0,href:!0});var vs=o(i);b=r(vs,"SPAN",{});var xs=o(b);$(s.$$.fragment,xs),xs.forEach(t),vs.forEach(t),f=p(Za),A=r(Za,"SPAN",{});var $s=o(A);T=g($s,"Repository Cards"),$s.forEach(t),Za.forEach(t),q=p(e),k=r(e,"P",{});var Ee=o(k);Z=g(Ee,`The huggingface_hub library provides a Python interface to create, share, and update Model/Dataset Cards.
Visit the `),B=r(Ee,"A",{href:!0,rel:!0});var ys=o(B);H=g(ys,"dedicated documentation page"),ys.forEach(t),z=g(Ee,` for a deeper view of what
Model Cards on the Hub are, and how they work under the hood. You can also check out our `),ee=r(Ee,"A",{href:!0});var js=o(ee);at=g(js,"Model Cards guide"),js.forEach(t),tt=g(Ee,` to
get a feel for how you would use these utilities in your own projects.`),Ee.forEach(t),Ce=p(e),I=r(e,"H2",{class:!0});var et=o(I);J=r(et,"A",{id:!0,class:!0,href:!0});var ws=o(J);wt=r(ws,"SPAN",{});var Ds=o(wt);$(ca.$$.fragment,Ds),Ds.forEach(t),ws.forEach(t),En=p(et),Dt=r(et,"SPAN",{});var Es=o(Dt);Cn=g(Es,"Repo Card"),Es.forEach(t),et.forEach(t),Cs=p(e),O=r(e,"P",{});var X=o(O);kn=g(X,"The "),Et=r(X,"CODE",{});var Zo=o(Et);Rn=g(Zo,"RepoCard"),Zo.forEach(t),An=g(X," object is the parent class of "),st=r(X,"A",{href:!0});var el=o(st);Tn=g(el,"ModelCard"),el.forEach(t),qn=g(X," and "),nt=r(X,"A",{href:!0});var al=o(nt);Mn=g(al,"DatasetCard"),al.forEach(t),Nn=g(X,"."),X.forEach(t),ks=p(e),R=r(e,"DIV",{class:!0});var N=o(R);$(pa.$$.fragment,N),Pn=p(N),F=r(N,"DIV",{class:!0});var sa=o(F);$(da.$$.fragment,sa),Ln=p(sa),Ct=r(sa,"P",{});var tl=o(Ct);Hn=g(tl,`Initialize a RepoCard from string content. The content should be a
Markdown file with a YAML block at the beginning and a Markdown body.`),tl.forEach(t),In=p(sa),$(ke.$$.fragment,sa),On=p(sa),$(Re.$$.fragment,sa),sa.forEach(t),Fn=p(N),ae=r(N,"DIV",{class:!0});var ht=o(ae);$(ga.$$.fragment,ht),Un=p(ht),kt=r(ht,"P",{});var sl=o(kt);Sn=g(sl,"Initialize a RepoCard from a template. By default, it uses the default template."),sl.forEach(t),Vn=p(ht),Rt=r(ht,"P",{});var nl=o(Rt);Bn=g(nl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),nl.forEach(t),ht.forEach(t),zn=p(N),te=r(N,"DIV",{class:!0});var mt=o(te);$(ha.$$.fragment,mt),Jn=p(mt),At=r(mt,"P",{});var rl=o(At);Wn=g(rl,"Initialize a RepoCard from a Hugging Face Hub repo\u2019s README.md or a local filepath."),rl.forEach(t),Gn=p(mt),$(Ae.$$.fragment,mt),mt.forEach(t),Yn=p(N),Te=r(N,"DIV",{class:!0});var an=o(Te);$(ma.$$.fragment,an),Kn=p(an),Tt=r(an,"P",{});var ol=o(Tt);Qn=g(ol,"Push a RepoCard to a Hugging Face Hub repo."),ol.forEach(t),an.forEach(t),Xn=p(N),se=r(N,"DIV",{class:!0});var ut=o(se);$(ua.$$.fragment,ut),Zn=p(ut),qt=r(ut,"P",{});var ll=o(qt);er=g(ll,"Save a RepoCard to a file."),ll.forEach(t),ar=p(ut),$(qe.$$.fragment,ut),ut.forEach(t),tr=p(N),ne=r(N,"DIV",{class:!0});var ft=o(ne);$(fa.$$.fragment,ft),sr=p(ft),_a=r(ft,"P",{});var tn=o(_a);nr=g(tn,`Validates card against Hugging Face Hub\u2019s card validation logic.
Using this function requires access to the internet, so it is only called
internally by `),rt=r(tn,"A",{href:!0});var il=o(rt);rr=g(il,"huggingface_hub.repocard.RepoCard.push_to_hub()"),il.forEach(t),or=g(tn,"."),tn.forEach(t),lr=p(ft),$(Me.$$.fragment,ft),ft.forEach(t),N.forEach(t),Rs=p(e),ie=r(e,"H2",{class:!0});var sn=o(ie);Ne=r(sn,"A",{id:!0,class:!0,href:!0});var cl=o(Ne);Mt=r(cl,"SPAN",{});var pl=o(Mt);$(ba.$$.fragment,pl),pl.forEach(t),cl.forEach(t),ir=p(sn),Nt=r(sn,"SPAN",{});var dl=o(Nt);cr=g(dl,"Card Data"),dl.forEach(t),sn.forEach(t),As=p(e),U=r(e,"P",{});var na=o(U);pr=g(na,"The "),ot=r(na,"A",{href:!0});var gl=o(ot);dr=g(gl,"CardData"),gl.forEach(t),gr=g(na," object is the parent class of "),lt=r(na,"A",{href:!0});var hl=o(lt);hr=g(hl,"ModelCardData"),hl.forEach(t),mr=g(na," and "),it=r(na,"A",{href:!0});var ml=o(it);ur=g(ml,"DatasetCardData"),ml.forEach(t),fr=g(na,"."),na.forEach(t),Ts=p(e),W=r(e,"DIV",{class:!0});var _t=o(W);$(va.$$.fragment,_t),_r=p(_t),Pe=r(_t,"DIV",{class:!0});var nn=o(Pe);$(xa.$$.fragment,nn),br=p(nn),Pt=r(nn,"P",{});var ul=o(Pt);vr=g(ul,"Converts CardData to a dict."),ul.forEach(t),nn.forEach(t),xr=p(_t),Le=r(_t,"DIV",{class:!0});var rn=o(Le);$($a.$$.fragment,rn),$r=p(rn),Lt=r(rn,"P",{});var fl=o(Lt);yr=g(fl,"Dumps CardData to a YAML block for inclusion in a README.md file."),fl.forEach(t),rn.forEach(t),_t.forEach(t),qs=p(e),ce=r(e,"H2",{class:!0});var on=o(ce);He=r(on,"A",{id:!0,class:!0,href:!0});var _l=o(He);Ht=r(_l,"SPAN",{});var bl=o(Ht);$(ya.$$.fragment,bl),bl.forEach(t),_l.forEach(t),jr=p(on),It=r(on,"SPAN",{});var vl=o(It);wr=g(vl,"Model Cards"),vl.forEach(t),on.forEach(t),Ms=p(e),pe=r(e,"H3",{class:!0});var ln=o(pe);Ie=r(ln,"A",{id:!0,class:!0,href:!0});var xl=o(Ie);Ot=r(xl,"SPAN",{});var $l=o(Ot);$(ja.$$.fragment,$l),$l.forEach(t),xl.forEach(t),Dr=p(ln),Ft=r(ln,"SPAN",{});var yl=o(Ft);Er=g(yl,"ModelCard"),yl.forEach(t),ln.forEach(t),Ns=p(e),de=r(e,"DIV",{class:!0});var cn=o(de);$(wa.$$.fragment,cn),Cr=p(cn),S=r(cn,"DIV",{class:!0});var ra=o(S);$(Da.$$.fragment,ra),kr=p(ra),ct=r(ra,"P",{});var Ko=o(ct);Rr=g(Ko,`Initialize a ModelCard from a template. By default, it uses the default template, which can be found here:
`),Ea=r(Ko,"A",{href:!0,rel:!0});var jl=o(Ea);Ar=g(jl,"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),jl.forEach(t),Ko.forEach(t),Tr=p(ra),Ut=r(ra,"P",{});var wl=o(Ut);qr=g(wl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),wl.forEach(t),Mr=p(ra),$(Oe.$$.fragment,ra),ra.forEach(t),cn.forEach(t),Ps=p(e),ge=r(e,"H3",{class:!0});var pn=o(ge);Fe=r(pn,"A",{id:!0,class:!0,href:!0});var Dl=o(Fe);St=r(Dl,"SPAN",{});var El=o(St);$(Ca.$$.fragment,El),El.forEach(t),Dl.forEach(t),Nr=p(pn),Vt=r(pn,"SPAN",{});var Cl=o(Vt);Pr=g(Cl,"ModelCardData"),Cl.forEach(t),pn.forEach(t),Ls=p(e),G=r(e,"DIV",{class:!0});var bt=o(G);$(ka.$$.fragment,bt),Lr=p(bt),Bt=r(bt,"P",{});var kl=o(Bt);Hr=g(kl,"Model Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),kl.forEach(t),Ir=p(bt),$(Ue.$$.fragment,bt),bt.forEach(t),Hs=p(e),he=r(e,"H2",{class:!0});var dn=o(he);Se=r(dn,"A",{id:!0,class:!0,href:!0});var Rl=o(Se);zt=r(Rl,"SPAN",{});var Al=o(zt);$(Ra.$$.fragment,Al),Al.forEach(t),Rl.forEach(t),Or=p(dn),Jt=r(dn,"SPAN",{});var Tl=o(Jt);Fr=g(Tl,"Dataset Cards"),Tl.forEach(t),dn.forEach(t),Is=p(e),pt=r(e,"P",{});var ql=o(pt);Ur=g(ql,"Dataset cards are also known as Data Cards in the ML Community."),ql.forEach(t),Os=p(e),me=r(e,"H3",{class:!0});var gn=o(me);Ve=r(gn,"A",{id:!0,class:!0,href:!0});var Ml=o(Ve);Wt=r(Ml,"SPAN",{});var Nl=o(Wt);$(Aa.$$.fragment,Nl),Nl.forEach(t),Ml.forEach(t),Sr=p(gn),Gt=r(gn,"SPAN",{});var Pl=o(Gt);Vr=g(Pl,"DatasetCard"),Pl.forEach(t),gn.forEach(t),Fs=p(e),ue=r(e,"DIV",{class:!0});var hn=o(ue);$(Ta.$$.fragment,hn),Br=p(hn),V=r(hn,"DIV",{class:!0});var oa=o(V);$(qa.$$.fragment,oa),zr=p(oa),dt=r(oa,"P",{});var Qo=o(dt);Jr=g(Qo,`Initialize a DatasetCard from a template. By default, it uses the default template, which can be found here:
`),Ma=r(Qo,"A",{href:!0,rel:!0});var Ll=o(Ma);Wr=g(Ll,"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),Ll.forEach(t),Qo.forEach(t),Gr=p(oa),Yt=r(oa,"P",{});var Hl=o(Yt);Yr=g(Hl,"Templates are Jinja2 templates that can be customized by passing keyword arguments."),Hl.forEach(t),Kr=p(oa),$(Be.$$.fragment,oa),oa.forEach(t),hn.forEach(t),Us=p(e),fe=r(e,"H3",{class:!0});var mn=o(fe);ze=r(mn,"A",{id:!0,class:!0,href:!0});var Il=o(ze);Kt=r(Il,"SPAN",{});var Ol=o(Kt);$(Na.$$.fragment,Ol),Ol.forEach(t),Il.forEach(t),Qr=p(mn),Qt=r(mn,"SPAN",{});var Fl=o(Qt);Xr=g(Fl,"DatasetCardData"),Fl.forEach(t),mn.forEach(t),Ss=p(e),_e=r(e,"DIV",{class:!0});var un=o(_e);$(Pa.$$.fragment,un),Zr=p(un),Xt=r(un,"P",{});var Ul=o(Xt);eo=g(Ul,"Dataset Card Metadata that is used by Hugging Face Hub when included at the top of your README.md"),Ul.forEach(t),un.forEach(t),Vs=p(e),be=r(e,"H2",{class:!0});var fn=o(be);Je=r(fn,"A",{id:!0,class:!0,href:!0});var Sl=o(Je);Zt=r(Sl,"SPAN",{});var Vl=o(Zt);$(La.$$.fragment,Vl),Vl.forEach(t),Sl.forEach(t),ao=p(fn),es=r(fn,"SPAN",{});var Bl=o(es);to=g(Bl,"Utilities"),Bl.forEach(t),fn.forEach(t),Bs=p(e),ve=r(e,"H3",{class:!0});var _n=o(ve);We=r(_n,"A",{id:!0,class:!0,href:!0});var zl=o(We);as=r(zl,"SPAN",{});var Jl=o(as);$(Ha.$$.fragment,Jl),Jl.forEach(t),zl.forEach(t),so=p(_n),ts=r(_n,"SPAN",{});var Wl=o(ts);no=g(Wl,"EvalResult"),Wl.forEach(t),_n.forEach(t),zs=p(e),P=r(e,"DIV",{class:!0});var la=o(P);$(Ia.$$.fragment,la),ro=p(la),ss=r(la,"P",{});var Gl=o(ss);oo=g(Gl,"Flattened representation of individual evaluation results found in model-index of Model Cards."),Gl.forEach(t),lo=p(la),Oa=r(la,"P",{});var bn=o(Oa);io=g(bn,"For more information on the model-index spec, see "),Fa=r(bn,"A",{href:!0,rel:!0});var Yl=o(Fa);co=g(Yl,"https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),Yl.forEach(t),po=g(bn,"."),bn.forEach(t),go=p(la),Ge=r(la,"DIV",{class:!0});var vn=o(Ge);$(Ua.$$.fragment,vn),ho=p(vn),xe=r(vn,"P",{});var vt=o(xe);mo=g(vt,"Return True if "),ns=r(vt,"CODE",{});var Kl=o(ns);uo=g(Kl,"self"),Kl.forEach(t),fo=g(vt," and "),rs=r(vt,"CODE",{});var Ql=o(rs);_o=g(Ql,"other"),Ql.forEach(t),bo=g(vt,` describe exactly the same metric but with a
different value.`),vt.forEach(t),vn.forEach(t),la.forEach(t),Js=p(e),$e=r(e,"H3",{class:!0});var xn=o($e);Ye=r(xn,"A",{id:!0,class:!0,href:!0});var Xl=o(Ye);os=r(Xl,"SPAN",{});var Zl=o(os);$(Sa.$$.fragment,Zl),Zl.forEach(t),Xl.forEach(t),vo=p(xn),ls=r(xn,"SPAN",{});var ei=o(ls);xo=g(ei,"model_index_to_eval_results"),ei.forEach(t),xn.forEach(t),Ws=p(e),L=r(e,"DIV",{class:!0});var ia=o(L);$(Va.$$.fragment,ia),$o=p(ia),Ba=r(ia,"P",{});var $n=o(Ba);yo=g($n,"Takes in a model index and returns the model name and a list of "),is=r($n,"CODE",{});var ai=o(is);jo=g(ai,"huggingface_hub.EvalResult"),ai.forEach(t),wo=g($n," objects."),$n.forEach(t),Do=p(ia),gt=r(ia,"P",{});var Xo=o(gt);Eo=g(Xo,`A detailed spec of the model index can be found here:
`),za=r(Xo,"A",{href:!0,rel:!0});var ti=o(za);Co=g(ti,"https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),ti.forEach(t),Xo.forEach(t),ko=p(ia),$(Ke.$$.fragment,ia),ia.forEach(t),Gs=p(e),ye=r(e,"H3",{class:!0});var yn=o(ye);Qe=r(yn,"A",{id:!0,class:!0,href:!0});var si=o(Qe);cs=r(si,"SPAN",{});var ni=o(cs);$(Ja.$$.fragment,ni),ni.forEach(t),si.forEach(t),Ro=p(yn),ps=r(yn,"SPAN",{});var ri=o(ps);Ao=g(ri,"eval_results_to_model_index"),ri.forEach(t),yn.forEach(t),Ys=p(e),Y=r(e,"DIV",{class:!0});var xt=o(Y);$(Wa.$$.fragment,xt),To=p(xt),Ga=r(xt,"P",{});var jn=o(Ga);qo=g(jn,"Takes in given model name and list of "),ds=r(jn,"CODE",{});var oi=o(ds);Mo=g(oi,"huggingface_hub.EvalResult"),oi.forEach(t),No=g(jn,` and returns a
valid model-index that will be compatible with the format expected by the
Hugging Face Hub.`),jn.forEach(t),Po=p(xt),$(Xe.$$.fragment,xt),xt.forEach(t),Ks=p(e),je=r(e,"H3",{class:!0});var wn=o(je);Ze=r(wn,"A",{id:!0,class:!0,href:!0});var li=o(Ze);gs=r(li,"SPAN",{});var ii=o(gs);$(Ya.$$.fragment,ii),ii.forEach(t),li.forEach(t),Lo=p(wn),hs=r(wn,"SPAN",{});var ci=o(hs);Ho=g(ci,"metadata_eval_result"),ci.forEach(t),wn.forEach(t),Qs=p(e),K=r(e,"DIV",{class:!0});var $t=o(K);$(Ka.$$.fragment,$t),Io=p($t),ms=r($t,"P",{});var pi=o(ms);Oo=g(pi,"Creates a metadata dict with the result from a model evaluated on a dataset."),pi.forEach(t),Fo=p($t),$(ea.$$.fragment,$t),$t.forEach(t),Xs=p(e),we=r(e,"H3",{class:!0});var Dn=o(we);aa=r(Dn,"A",{id:!0,class:!0,href:!0});var di=o(aa);us=r(di,"SPAN",{});var gi=o(us);$(Qa.$$.fragment,gi),gi.forEach(t),di.forEach(t),Uo=p(Dn),fs=r(Dn,"SPAN",{});var hi=o(fs);So=g(hi,"metadata_update"),hi.forEach(t),Dn.forEach(t),Zs=p(e),Q=r(e,"DIV",{class:!0});var yt=o(Q);$(Xa.$$.fragment,yt),Vo=p(yt),De=r(yt,"P",{});var jt=o(De);Bo=g(jt,`Updates the metadata in the README.md of a repository on the Hugging Face Hub.
If the README.md file doesn\u2019t exist yet, a new one is created with metadata and an
the default ModelCard or DatasetCard template. For `),_s=r(jt,"CODE",{});var mi=o(_s);zo=g(mi,"space"),mi.forEach(t),Jo=g(jt,` repo, an error is thrown
as a Space cannot exist without a `),bs=r(jt,"CODE",{});var ui=o(bs);Wo=g(ui,"README.md"),ui.forEach(t),Go=g(jt," file."),jt.forEach(t),Yo=p(yt),$(ta.$$.fragment,yt),yt.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Pi)),l(i,"id","repository-cards"),l(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(i,"href","#repository-cards"),l(_,"class","relative group"),l(B,"href","https://huggingface.co/docs/hub/models-cards"),l(B,"rel","nofollow"),l(ee,"href","../how-to-model-cards"),l(J,"id","huggingface_hub.repocard.RepoCard"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#huggingface_hub.repocard.RepoCard"),l(I,"class","relative group"),l(st,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.ModelCard"),l(nt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.DatasetCard"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.repocard.RepoCard.push_to_hub"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ne,"id","huggingface_hub.CardData"),l(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ne,"href","#huggingface_hub.CardData"),l(ie,"class","relative group"),l(ot,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.CardData"),l(lt,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.ModelCardData"),l(it,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/cards#huggingface_hub.DatasetCardData"),l(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(He,"id","model-cards"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#model-cards"),l(ce,"class","relative group"),l(Ie,"id","huggingface_hub.ModelCard"),l(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ie,"href","#huggingface_hub.ModelCard"),l(pe,"class","relative group"),l(Ea,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md"),l(Ea,"rel","nofollow"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Fe,"id","huggingface_hub.ModelCardData"),l(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Fe,"href","#huggingface_hub.ModelCardData"),l(ge,"class","relative group"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Se,"id","dataset-cards"),l(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Se,"href","#dataset-cards"),l(he,"class","relative group"),l(Ve,"id","huggingface_hub.DatasetCard"),l(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ve,"href","#huggingface_hub.DatasetCard"),l(me,"class","relative group"),l(Ma,"href","https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md"),l(Ma,"rel","nofollow"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ze,"id","huggingface_hub.DatasetCardData"),l(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ze,"href","#huggingface_hub.DatasetCardData"),l(fe,"class","relative group"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","utilities"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#utilities"),l(be,"class","relative group"),l(We,"id","huggingface_hub.EvalResult"),l(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(We,"href","#huggingface_hub.EvalResult"),l(ve,"class","relative group"),l(Fa,"href","https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),l(Fa,"rel","nofollow"),l(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ye,"id","huggingface_hub.repocard_data.model_index_to_eval_results"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#huggingface_hub.repocard_data.model_index_to_eval_results"),l($e,"class","relative group"),l(za,"href","https://github.com/huggingface/hub-docs/blob/main/modelcard.md?plain=1"),l(za,"rel","nofollow"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Qe,"id","huggingface_hub.repocard_data.eval_results_to_model_index"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#huggingface_hub.repocard_data.eval_results_to_model_index"),l(ye,"class","relative group"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","huggingface_hub.metadata_eval_result"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#huggingface_hub.metadata_eval_result"),l(je,"class","relative group"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(aa,"id","huggingface_hub.metadata_update"),l(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(aa,"href","#huggingface_hub.metadata_update"),l(we,"class","relative group"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){a(document.head,h),u(e,v,m),u(e,_,m),a(_,i),a(i,b),y(s,b,null),a(_,f),a(_,A),a(A,T),u(e,q,m),u(e,k,m),a(k,Z),a(k,B),a(B,H),a(k,z),a(k,ee),a(ee,at),a(k,tt),u(e,Ce,m),u(e,I,m),a(I,J),a(J,wt),y(ca,wt,null),a(I,En),a(I,Dt),a(Dt,Cn),u(e,Cs,m),u(e,O,m),a(O,kn),a(O,Et),a(Et,Rn),a(O,An),a(O,st),a(st,Tn),a(O,qn),a(O,nt),a(nt,Mn),a(O,Nn),u(e,ks,m),u(e,R,m),y(pa,R,null),a(R,Pn),a(R,F),y(da,F,null),a(F,Ln),a(F,Ct),a(Ct,Hn),a(F,In),y(ke,F,null),a(F,On),y(Re,F,null),a(R,Fn),a(R,ae),y(ga,ae,null),a(ae,Un),a(ae,kt),a(kt,Sn),a(ae,Vn),a(ae,Rt),a(Rt,Bn),a(R,zn),a(R,te),y(ha,te,null),a(te,Jn),a(te,At),a(At,Wn),a(te,Gn),y(Ae,te,null),a(R,Yn),a(R,Te),y(ma,Te,null),a(Te,Kn),a(Te,Tt),a(Tt,Qn),a(R,Xn),a(R,se),y(ua,se,null),a(se,Zn),a(se,qt),a(qt,er),a(se,ar),y(qe,se,null),a(R,tr),a(R,ne),y(fa,ne,null),a(ne,sr),a(ne,_a),a(_a,nr),a(_a,rt),a(rt,rr),a(_a,or),a(ne,lr),y(Me,ne,null),u(e,Rs,m),u(e,ie,m),a(ie,Ne),a(Ne,Mt),y(ba,Mt,null),a(ie,ir),a(ie,Nt),a(Nt,cr),u(e,As,m),u(e,U,m),a(U,pr),a(U,ot),a(ot,dr),a(U,gr),a(U,lt),a(lt,hr),a(U,mr),a(U,it),a(it,ur),a(U,fr),u(e,Ts,m),u(e,W,m),y(va,W,null),a(W,_r),a(W,Pe),y(xa,Pe,null),a(Pe,br),a(Pe,Pt),a(Pt,vr),a(W,xr),a(W,Le),y($a,Le,null),a(Le,$r),a(Le,Lt),a(Lt,yr),u(e,qs,m),u(e,ce,m),a(ce,He),a(He,Ht),y(ya,Ht,null),a(ce,jr),a(ce,It),a(It,wr),u(e,Ms,m),u(e,pe,m),a(pe,Ie),a(Ie,Ot),y(ja,Ot,null),a(pe,Dr),a(pe,Ft),a(Ft,Er),u(e,Ns,m),u(e,de,m),y(wa,de,null),a(de,Cr),a(de,S),y(Da,S,null),a(S,kr),a(S,ct),a(ct,Rr),a(ct,Ea),a(Ea,Ar),a(S,Tr),a(S,Ut),a(Ut,qr),a(S,Mr),y(Oe,S,null),u(e,Ps,m),u(e,ge,m),a(ge,Fe),a(Fe,St),y(Ca,St,null),a(ge,Nr),a(ge,Vt),a(Vt,Pr),u(e,Ls,m),u(e,G,m),y(ka,G,null),a(G,Lr),a(G,Bt),a(Bt,Hr),a(G,Ir),y(Ue,G,null),u(e,Hs,m),u(e,he,m),a(he,Se),a(Se,zt),y(Ra,zt,null),a(he,Or),a(he,Jt),a(Jt,Fr),u(e,Is,m),u(e,pt,m),a(pt,Ur),u(e,Os,m),u(e,me,m),a(me,Ve),a(Ve,Wt),y(Aa,Wt,null),a(me,Sr),a(me,Gt),a(Gt,Vr),u(e,Fs,m),u(e,ue,m),y(Ta,ue,null),a(ue,Br),a(ue,V),y(qa,V,null),a(V,zr),a(V,dt),a(dt,Jr),a(dt,Ma),a(Ma,Wr),a(V,Gr),a(V,Yt),a(Yt,Yr),a(V,Kr),y(Be,V,null),u(e,Us,m),u(e,fe,m),a(fe,ze),a(ze,Kt),y(Na,Kt,null),a(fe,Qr),a(fe,Qt),a(Qt,Xr),u(e,Ss,m),u(e,_e,m),y(Pa,_e,null),a(_e,Zr),a(_e,Xt),a(Xt,eo),u(e,Vs,m),u(e,be,m),a(be,Je),a(Je,Zt),y(La,Zt,null),a(be,ao),a(be,es),a(es,to),u(e,Bs,m),u(e,ve,m),a(ve,We),a(We,as),y(Ha,as,null),a(ve,so),a(ve,ts),a(ts,no),u(e,zs,m),u(e,P,m),y(Ia,P,null),a(P,ro),a(P,ss),a(ss,oo),a(P,lo),a(P,Oa),a(Oa,io),a(Oa,Fa),a(Fa,co),a(Oa,po),a(P,go),a(P,Ge),y(Ua,Ge,null),a(Ge,ho),a(Ge,xe),a(xe,mo),a(xe,ns),a(ns,uo),a(xe,fo),a(xe,rs),a(rs,_o),a(xe,bo),u(e,Js,m),u(e,$e,m),a($e,Ye),a(Ye,os),y(Sa,os,null),a($e,vo),a($e,ls),a(ls,xo),u(e,Ws,m),u(e,L,m),y(Va,L,null),a(L,$o),a(L,Ba),a(Ba,yo),a(Ba,is),a(is,jo),a(Ba,wo),a(L,Do),a(L,gt),a(gt,Eo),a(gt,za),a(za,Co),a(L,ko),y(Ke,L,null),u(e,Gs,m),u(e,ye,m),a(ye,Qe),a(Qe,cs),y(Ja,cs,null),a(ye,Ro),a(ye,ps),a(ps,Ao),u(e,Ys,m),u(e,Y,m),y(Wa,Y,null),a(Y,To),a(Y,Ga),a(Ga,qo),a(Ga,ds),a(ds,Mo),a(Ga,No),a(Y,Po),y(Xe,Y,null),u(e,Ks,m),u(e,je,m),a(je,Ze),a(Ze,gs),y(Ya,gs,null),a(je,Lo),a(je,hs),a(hs,Ho),u(e,Qs,m),u(e,K,m),y(Ka,K,null),a(K,Io),a(K,ms),a(ms,Oo),a(K,Fo),y(ea,K,null),u(e,Xs,m),u(e,we,m),a(we,aa),a(aa,us),y(Qa,us,null),a(we,Uo),a(we,fs),a(fs,So),u(e,Zs,m),u(e,Q,m),y(Xa,Q,null),a(Q,Vo),a(Q,De),a(De,Bo),a(De,_s),a(_s,zo),a(De,Jo),a(De,bs),a(bs,Wo),a(De,Go),a(Q,Yo),y(ta,Q,null),en=!0},p(e,[m]){const Za={};m&2&&(Za.$$scope={dirty:m,ctx:e}),ke.$set(Za);const vs={};m&2&&(vs.$$scope={dirty:m,ctx:e}),Re.$set(vs);const xs={};m&2&&(xs.$$scope={dirty:m,ctx:e}),Ae.$set(xs);const $s={};m&2&&($s.$$scope={dirty:m,ctx:e}),qe.$set($s);const Ee={};m&2&&(Ee.$$scope={dirty:m,ctx:e}),Me.$set(Ee);const ys={};m&2&&(ys.$$scope={dirty:m,ctx:e}),Oe.$set(ys);const js={};m&2&&(js.$$scope={dirty:m,ctx:e}),Ue.$set(js);const et={};m&2&&(et.$$scope={dirty:m,ctx:e}),Be.$set(et);const ws={};m&2&&(ws.$$scope={dirty:m,ctx:e}),Ke.$set(ws);const Ds={};m&2&&(Ds.$$scope={dirty:m,ctx:e}),Xe.$set(Ds);const Es={};m&2&&(Es.$$scope={dirty:m,ctx:e}),ea.$set(Es);const X={};m&2&&(X.$$scope={dirty:m,ctx:e}),ta.$set(X)},i(e){en||(j(s.$$.fragment,e),j(ca.$$.fragment,e),j(pa.$$.fragment,e),j(da.$$.fragment,e),j(ke.$$.fragment,e),j(Re.$$.fragment,e),j(ga.$$.fragment,e),j(ha.$$.fragment,e),j(Ae.$$.fragment,e),j(ma.$$.fragment,e),j(ua.$$.fragment,e),j(qe.$$.fragment,e),j(fa.$$.fragment,e),j(Me.$$.fragment,e),j(ba.$$.fragment,e),j(va.$$.fragment,e),j(xa.$$.fragment,e),j($a.$$.fragment,e),j(ya.$$.fragment,e),j(ja.$$.fragment,e),j(wa.$$.fragment,e),j(Da.$$.fragment,e),j(Oe.$$.fragment,e),j(Ca.$$.fragment,e),j(ka.$$.fragment,e),j(Ue.$$.fragment,e),j(Ra.$$.fragment,e),j(Aa.$$.fragment,e),j(Ta.$$.fragment,e),j(qa.$$.fragment,e),j(Be.$$.fragment,e),j(Na.$$.fragment,e),j(Pa.$$.fragment,e),j(La.$$.fragment,e),j(Ha.$$.fragment,e),j(Ia.$$.fragment,e),j(Ua.$$.fragment,e),j(Sa.$$.fragment,e),j(Va.$$.fragment,e),j(Ke.$$.fragment,e),j(Ja.$$.fragment,e),j(Wa.$$.fragment,e),j(Xe.$$.fragment,e),j(Ya.$$.fragment,e),j(Ka.$$.fragment,e),j(ea.$$.fragment,e),j(Qa.$$.fragment,e),j(Xa.$$.fragment,e),j(ta.$$.fragment,e),en=!0)},o(e){w(s.$$.fragment,e),w(ca.$$.fragment,e),w(pa.$$.fragment,e),w(da.$$.fragment,e),w(ke.$$.fragment,e),w(Re.$$.fragment,e),w(ga.$$.fragment,e),w(ha.$$.fragment,e),w(Ae.$$.fragment,e),w(ma.$$.fragment,e),w(ua.$$.fragment,e),w(qe.$$.fragment,e),w(fa.$$.fragment,e),w(Me.$$.fragment,e),w(ba.$$.fragment,e),w(va.$$.fragment,e),w(xa.$$.fragment,e),w($a.$$.fragment,e),w(ya.$$.fragment,e),w(ja.$$.fragment,e),w(wa.$$.fragment,e),w(Da.$$.fragment,e),w(Oe.$$.fragment,e),w(Ca.$$.fragment,e),w(ka.$$.fragment,e),w(Ue.$$.fragment,e),w(Ra.$$.fragment,e),w(Aa.$$.fragment,e),w(Ta.$$.fragment,e),w(qa.$$.fragment,e),w(Be.$$.fragment,e),w(Na.$$.fragment,e),w(Pa.$$.fragment,e),w(La.$$.fragment,e),w(Ha.$$.fragment,e),w(Ia.$$.fragment,e),w(Ua.$$.fragment,e),w(Sa.$$.fragment,e),w(Va.$$.fragment,e),w(Ke.$$.fragment,e),w(Ja.$$.fragment,e),w(Wa.$$.fragment,e),w(Xe.$$.fragment,e),w(Ya.$$.fragment,e),w(Ka.$$.fragment,e),w(ea.$$.fragment,e),w(Qa.$$.fragment,e),w(Xa.$$.fragment,e),w(ta.$$.fragment,e),en=!1},d(e){t(h),e&&t(v),e&&t(_),D(s),e&&t(q),e&&t(k),e&&t(Ce),e&&t(I),D(ca),e&&t(Cs),e&&t(O),e&&t(ks),e&&t(R),D(pa),D(da),D(ke),D(Re),D(ga),D(ha),D(Ae),D(ma),D(ua),D(qe),D(fa),D(Me),e&&t(Rs),e&&t(ie),D(ba),e&&t(As),e&&t(U),e&&t(Ts),e&&t(W),D(va),D(xa),D($a),e&&t(qs),e&&t(ce),D(ya),e&&t(Ms),e&&t(pe),D(ja),e&&t(Ns),e&&t(de),D(wa),D(Da),D(Oe),e&&t(Ps),e&&t(ge),D(Ca),e&&t(Ls),e&&t(G),D(ka),D(Ue),e&&t(Hs),e&&t(he),D(Ra),e&&t(Is),e&&t(pt),e&&t(Os),e&&t(me),D(Aa),e&&t(Fs),e&&t(ue),D(Ta),D(qa),D(Be),e&&t(Us),e&&t(fe),D(Na),e&&t(Ss),e&&t(_e),D(Pa),e&&t(Vs),e&&t(be),D(La),e&&t(Bs),e&&t(ve),D(Ha),e&&t(zs),e&&t(P),D(Ia),D(Ua),e&&t(Js),e&&t($e),D(Sa),e&&t(Ws),e&&t(L),D(Va),D(Ke),e&&t(Gs),e&&t(ye),D(Ja),e&&t(Ys),e&&t(Y),D(Wa),D(Xe),e&&t(Ks),e&&t(je),D(Ya),e&&t(Qs),e&&t(K),D(Ka),D(ea),e&&t(Xs),e&&t(we),D(Qa),e&&t(Zs),e&&t(Q),D(Xa),D(ta)}}}const Pi={local:"repository-cards",sections:[{local:"huggingface_hub.repocard.RepoCard",title:"Repo Card"},{local:"huggingface_hub.CardData",title:"Card Data"},{local:"model-cards",sections:[{local:"huggingface_hub.ModelCard",title:"ModelCard"},{local:"huggingface_hub.ModelCardData",title:"ModelCardData"}],title:"Model Cards"},{local:"dataset-cards",sections:[{local:"huggingface_hub.DatasetCard",title:"DatasetCard"},{local:"huggingface_hub.DatasetCardData",title:"DatasetCardData"}],title:"Dataset Cards"},{local:"utilities",sections:[{local:"huggingface_hub.EvalResult",title:"EvalResult"},{local:"huggingface_hub.repocard_data.model_index_to_eval_results",title:"model_index_to_eval_results"},{local:"huggingface_hub.repocard_data.eval_results_to_model_index",title:"eval_results_to_model_index"},{local:"huggingface_hub.metadata_eval_result",title:"metadata_eval_result"},{local:"huggingface_hub.metadata_update",title:"metadata_update"}],title:"Utilities"}],title:"Repository Cards"};function Li(E){return $i(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vi extends _i{constructor(h){super();bi(this,h,Li,Ni,vi,{})}}export{Vi as default,Pi as metadata};
