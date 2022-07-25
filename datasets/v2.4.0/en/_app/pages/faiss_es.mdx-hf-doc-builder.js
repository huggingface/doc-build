import{S as Sa,i as Pa,s as La,e as n,k as c,w as u,t as i,M as Aa,c as l,d as e,m as h,a as r,x as m,h as p,b as d,G as t,g as o,y as _,L as Ia,q as f,o as g,B as x,v as Ra}from"../chunks/vendor-hf-doc-builder.js";import{I as Tt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as q}from"../chunks/CodeBlock-hf-doc-builder.js";function za(Ft){let j,Us,v,D,Ls,I,Oe,As,Te,Ws,w,R,Fe,Qe,z,Ne,Be,Ys,_s,Me,Gs,y,S,Is,C,He,Rs,Ue,Js,P,We,O,Ye,Ge,Ks,fs,zs,Je,Vs,T,Xs,F,Cs,Ke,Zs,Q,se,N,B,Ve,gs,Xe,Ze,ee,M,te,H,$,st,Os,et,tt,xs,at,nt,ae,U,ne,W,E,lt,qs,rt,ot,Ts,it,pt,le,Y,re,G,J,dt,js,ct,ht,oe,K,ie,V,X,ut,vs,mt,_t,pe,Z,de,b,L,Fs,ss,ft,Qs,gt,ce,ws,xt,he,A,qt,es,jt,vt,ue,ys,Ns,wt,me,ts,_e,as,ns,yt,$s,$t,Et,fe,ls,ge,rs,k,bt,Bs,kt,Dt,Es,St,Pt,xe,os,qe,is,ps,Lt,Ms,At,It,je,ds,ve,cs,hs,Rt,bs,zt,Ct,we,us,ye,ks,Ot,$e,ms,Ee;return I=new Tt({}),C=new Tt({}),T=new q({props:{code:`from transformers import DPRContextEncoder, DPRContextEncoderTokenizer
import torch
torch.set_grad_enabled(False)
ctx_encoder = DPRContextEncoder.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base")
ctx_tokenizer = DPRContextEncoderTokenizer.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPRContextEncoder, DPRContextEncoderTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.set_grad_enabled(<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ctx_encoder = DPRContextEncoder.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ctx_tokenizer = DPRContextEncoderTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>)`}}),Q=new q({props:{code:`from datasets import load_dataset
ds = load_dataset('crime_and_punish', split='train[:100]')
ds_with_embeddings = ds.map(lambda example: {'embeddings': ctx_encoder(**ctx_tokenizer(example["line"], return_tensors="pt"))[0][0].numpy()})`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings = ds.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> example: {<span class="hljs-string">&#x27;embeddings&#x27;</span>: ctx_encoder(**ctx_tokenizer(example[<span class="hljs-string">&quot;line&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>))[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>].numpy()})`}}),M=new q({props:{code:"ds_with_embeddings.add_faiss_index(column='embeddings')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.add_faiss_index(column=<span class="hljs-string">&#x27;embeddings&#x27;</span>)'}}),U=new q({props:{code:`from transformers import DPRQuestionEncoder, DPRQuestionEncoderTokenizer
q_encoder = DPRQuestionEncoder.from_pretrained("facebook/dpr-question_encoder-single-nq-base")
q_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained("facebook/dpr-question_encoder-single-nq-base")

question = "Is it serious ?"
question_embedding = q_encoder(**q_tokenizer(question, return_tensors="pt"))[0][0].numpy()
scores, retrieved_examples = ds_with_embeddings.get_nearest_examples('embeddings', question_embedding, k=10)
retrieved_examples["line"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPRQuestionEncoder, DPRQuestionEncoderTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>q_encoder = DPRQuestionEncoder.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-question_encoder-single-nq-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>q_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-question_encoder-single-nq-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Is it serious ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_embedding = q_encoder(**q_tokenizer(question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>))[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>].numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = ds_with_embeddings.get_nearest_examples(<span class="hljs-string">&#x27;embeddings&#x27;</span>, question_embedding, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;line&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;_that_ serious? It is not serious at all. It\u2019s simply a fantasy to amuse\\r\\n&#x27;</span>`}}),Y=new q({props:{code:`faiss_index = ds_with_embeddings.get_index('embeddings').faiss_index
limits, distances, indices = faiss_index.range_search(x=question_embedding.reshape(1, -1), thresh=0.95)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>faiss_index = ds_with_embeddings.get_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>).faiss_index
<span class="hljs-meta">&gt;&gt;&gt; </span>limits, distances, indices = faiss_index.range_search(x=question_embedding.reshape(<span class="hljs-number">1</span>, -<span class="hljs-number">1</span>), thresh=<span class="hljs-number">0.95</span>)`}}),K=new q({props:{code:"ds_with_embeddings.save_faiss_index('embeddings', 'my_index.faiss')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.save_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)'}}),Z=new q({props:{code:`ds = load_dataset('crime_and_punish', split='train[:100]')
ds.load_faiss_index('embeddings', 'my_index.faiss')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.load_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)`}}),ss=new Tt({}),ts=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)`}}),ls=new q({props:{code:'squad.add_elasticsearch_index("context", host="localhost", port="9200")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>)'}}),os=new q({props:{code:`query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)
retrieved_examples["title"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;title&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;Computational_complexity_theory&#x27;</span>`}}),ds=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.add_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
squad.get_index("context").es_index_name`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.get_index(<span class="hljs-string">&quot;context&quot;</span>).es_index_name
hf_squad_val_context`}}),us=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.load_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.load_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)`}}),ms=new q({props:{code:`import elasticsearch as es
import elasticsearch.helpers
from elasticsearch import Elasticsearch
es_client = Elasticsearch([{"host": "localhost", "port": "9200"}])  # default client
es_config = {
    "settings": {
        "number_of_shards": 1,
        "analysis": {"analyzer": {"stop_standard": {"type": "standard", " stopwords": "_english_"}}},
    },
    "mappings": {"properties": {"text": {"type": "text", "analyzer": "standard", "similarity": "BM25"}}},
}  # default config
es_index_name = "hf_squad_context"  # name of the index in ElasticSearch
squad.add_elasticsearch_index("context", es_client=es_client, es_config=es_config, es_index_name=es_index_name)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> elasticsearch <span class="hljs-keyword">as</span> es
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> elasticsearch.helpers
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> elasticsearch <span class="hljs-keyword">import</span> Elasticsearch
<span class="hljs-meta">&gt;&gt;&gt; </span>es_client = Elasticsearch([{<span class="hljs-string">&quot;host&quot;</span>: <span class="hljs-string">&quot;localhost&quot;</span>, <span class="hljs-string">&quot;port&quot;</span>: <span class="hljs-string">&quot;9200&quot;</span>}])  <span class="hljs-comment"># default client</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>es_config = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;settings&quot;</span>: {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;number_of_shards&quot;</span>: <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;analysis&quot;</span>: {<span class="hljs-string">&quot;analyzer&quot;</span>: {<span class="hljs-string">&quot;stop_standard&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>, <span class="hljs-string">&quot; stopwords&quot;</span>: <span class="hljs-string">&quot;_english_&quot;</span>}}},
<span class="hljs-meta">... </span>    },
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;mappings&quot;</span>: {<span class="hljs-string">&quot;properties&quot;</span>: {<span class="hljs-string">&quot;text&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;analyzer&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>, <span class="hljs-string">&quot;similarity&quot;</span>: <span class="hljs-string">&quot;BM25&quot;</span>}}},
<span class="hljs-meta">... </span>}  <span class="hljs-comment"># default config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>es_index_name = <span class="hljs-string">&quot;hf_squad_context&quot;</span>  <span class="hljs-comment"># name of the index in ElasticSearch</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, es_client=es_client, es_config=es_config, es_index_name=es_index_name)`}}),{c(){j=n("meta"),Us=c(),v=n("h1"),D=n("a"),Ls=n("span"),u(I.$$.fragment),Oe=c(),As=n("span"),Te=i("Search index"),Ws=c(),w=n("p"),R=n("a"),Fe=i("FAISS"),Qe=i(" and "),z=n("a"),Ne=i("ElasticSearch"),Be=i(" enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Ys=c(),_s=n("p"),Me=i("This guide will show you how to build an index for your dataset that will allow you to search it."),Gs=c(),y=n("h2"),S=n("a"),Is=n("span"),u(C.$$.fragment),He=c(),Rs=n("span"),Ue=i("FAISS"),Js=c(),P=n("p"),We=i("FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),O=n("a"),Ye=i("DPR"),Ge=i(" model."),Ks=c(),fs=n("ol"),zs=n("li"),Je=i("Download the DPR model from \u{1F917} Transformers:"),Vs=c(),u(T.$$.fragment),Xs=c(),F=n("ol"),Cs=n("li"),Ke=i("Load your dataset and compute the vector representations:"),Zs=c(),u(Q.$$.fragment),se=c(),N=n("ol"),B=n("li"),Ve=i("Create the index with "),gs=n("a"),Xe=i("Dataset.add_faiss_index()"),Ze=i(":"),ee=c(),u(M.$$.fragment),te=c(),H=n("ol"),$=n("li"),st=i("Now you can query your dataset with the "),Os=n("code"),et=i("embeddings"),tt=i(" index. Load the DPR Question Encoder, and search for a question with "),xs=n("a"),at=i("Dataset.get_nearest_examples()"),nt=i(":"),ae=c(),u(U.$$.fragment),ne=c(),W=n("ol"),E=n("li"),lt=i("You can access the index with "),qs=n("a"),rt=i("Dataset.get_index()"),ot=i(" and use it for special operations, e.g. query it using "),Ts=n("code"),it=i("range_search"),pt=i(":"),le=c(),u(Y.$$.fragment),re=c(),G=n("ol"),J=n("li"),dt=i("When you are done querying, save the index on disk with "),js=n("a"),ct=i("Dataset.save_faiss_index()"),ht=i(":"),oe=c(),u(K.$$.fragment),ie=c(),V=n("ol"),X=n("li"),ut=i("Reload it at a later time with "),vs=n("a"),mt=i("Dataset.load_faiss_index()"),_t=i(":"),pe=c(),u(Z.$$.fragment),de=c(),b=n("h2"),L=n("a"),Fs=n("span"),u(ss.$$.fragment),ft=c(),Qs=n("span"),gt=i("ElasticSearch"),ce=c(),ws=n("p"),xt=i("Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),he=c(),A=n("p"),qt=i("Start ElasticSearch on your machine, or see the "),es=n("a"),jt=i("ElasticSearch installation guide"),vt=i(" if you don\u2019t already have it installed."),ue=c(),ys=n("ol"),Ns=n("li"),wt=i("Load the dataset you want to index:"),me=c(),u(ts.$$.fragment),_e=c(),as=n("ol"),ns=n("li"),yt=i("Build the index with "),$s=n("a"),$t=i("Dataset.add_elasticsearch_index()"),Et=i(":"),fe=c(),u(ls.$$.fragment),ge=c(),rs=n("ol"),k=n("li"),bt=i("Then you can query the "),Bs=n("code"),kt=i("context"),Dt=i(" index with "),Es=n("a"),St=i("Dataset.get_nearest_examples()"),Pt=i(":"),xe=c(),u(os.$$.fragment),qe=c(),is=n("ol"),ps=n("li"),Lt=i("If you want to reuse the index, define the "),Ms=n("code"),At=i("es_index_name"),It=i(" parameter when you build the index:"),je=c(),u(ds.$$.fragment),ve=c(),cs=n("ol"),hs=n("li"),Rt=i("Reload it later with the index name when you call "),bs=n("a"),zt=i("Dataset.load_elasticsearch_index()"),Ct=i(":"),we=c(),u(us.$$.fragment),ye=c(),ks=n("p"),Ot=i("For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),$e=c(),u(ms.$$.fragment),this.h()},l(s){const a=Aa('[data-svelte="svelte-1phssyn"]',document.head);j=l(a,"META",{name:!0,content:!0}),a.forEach(e),Us=h(s),v=l(s,"H1",{class:!0});var be=r(v);D=l(be,"A",{id:!0,class:!0,href:!0});var Qt=r(D);Ls=l(Qt,"SPAN",{});var Nt=r(Ls);m(I.$$.fragment,Nt),Nt.forEach(e),Qt.forEach(e),Oe=h(be),As=l(be,"SPAN",{});var Bt=r(As);Te=p(Bt,"Search index"),Bt.forEach(e),be.forEach(e),Ws=h(s),w=l(s,"P",{});var Hs=r(w);R=l(Hs,"A",{href:!0,rel:!0});var Mt=r(R);Fe=p(Mt,"FAISS"),Mt.forEach(e),Qe=p(Hs," and "),z=l(Hs,"A",{href:!0,rel:!0});var Ht=r(z);Ne=p(Ht,"ElasticSearch"),Ht.forEach(e),Be=p(Hs," enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Hs.forEach(e),Ys=h(s),_s=l(s,"P",{});var Ut=r(_s);Me=p(Ut,"This guide will show you how to build an index for your dataset that will allow you to search it."),Ut.forEach(e),Gs=h(s),y=l(s,"H2",{class:!0});var ke=r(y);S=l(ke,"A",{id:!0,class:!0,href:!0});var Wt=r(S);Is=l(Wt,"SPAN",{});var Yt=r(Is);m(C.$$.fragment,Yt),Yt.forEach(e),Wt.forEach(e),He=h(ke),Rs=l(ke,"SPAN",{});var Gt=r(Rs);Ue=p(Gt,"FAISS"),Gt.forEach(e),ke.forEach(e),Js=h(s),P=l(s,"P",{});var De=r(P);We=p(De,"FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),O=l(De,"A",{href:!0,rel:!0});var Jt=r(O);Ye=p(Jt,"DPR"),Jt.forEach(e),Ge=p(De," model."),De.forEach(e),Ks=h(s),fs=l(s,"OL",{});var Kt=r(fs);zs=l(Kt,"LI",{});var Vt=r(zs);Je=p(Vt,"Download the DPR model from \u{1F917} Transformers:"),Vt.forEach(e),Kt.forEach(e),Vs=h(s),m(T.$$.fragment,s),Xs=h(s),F=l(s,"OL",{start:!0});var Xt=r(F);Cs=l(Xt,"LI",{});var Zt=r(Cs);Ke=p(Zt,"Load your dataset and compute the vector representations:"),Zt.forEach(e),Xt.forEach(e),Zs=h(s),m(Q.$$.fragment,s),se=h(s),N=l(s,"OL",{start:!0});var sa=r(N);B=l(sa,"LI",{});var Se=r(B);Ve=p(Se,"Create the index with "),gs=l(Se,"A",{href:!0});var ea=r(gs);Xe=p(ea,"Dataset.add_faiss_index()"),ea.forEach(e),Ze=p(Se,":"),Se.forEach(e),sa.forEach(e),ee=h(s),m(M.$$.fragment,s),te=h(s),H=l(s,"OL",{start:!0});var ta=r(H);$=l(ta,"LI",{});var Ds=r($);st=p(Ds,"Now you can query your dataset with the "),Os=l(Ds,"CODE",{});var aa=r(Os);et=p(aa,"embeddings"),aa.forEach(e),tt=p(Ds," index. Load the DPR Question Encoder, and search for a question with "),xs=l(Ds,"A",{href:!0});var na=r(xs);at=p(na,"Dataset.get_nearest_examples()"),na.forEach(e),nt=p(Ds,":"),Ds.forEach(e),ta.forEach(e),ae=h(s),m(U.$$.fragment,s),ne=h(s),W=l(s,"OL",{start:!0});var la=r(W);E=l(la,"LI",{});var Ss=r(E);lt=p(Ss,"You can access the index with "),qs=l(Ss,"A",{href:!0});var ra=r(qs);rt=p(ra,"Dataset.get_index()"),ra.forEach(e),ot=p(Ss," and use it for special operations, e.g. query it using "),Ts=l(Ss,"CODE",{});var oa=r(Ts);it=p(oa,"range_search"),oa.forEach(e),pt=p(Ss,":"),Ss.forEach(e),la.forEach(e),le=h(s),m(Y.$$.fragment,s),re=h(s),G=l(s,"OL",{start:!0});var ia=r(G);J=l(ia,"LI",{});var Pe=r(J);dt=p(Pe,"When you are done querying, save the index on disk with "),js=l(Pe,"A",{href:!0});var pa=r(js);ct=p(pa,"Dataset.save_faiss_index()"),pa.forEach(e),ht=p(Pe,":"),Pe.forEach(e),ia.forEach(e),oe=h(s),m(K.$$.fragment,s),ie=h(s),V=l(s,"OL",{start:!0});var da=r(V);X=l(da,"LI",{});var Le=r(X);ut=p(Le,"Reload it at a later time with "),vs=l(Le,"A",{href:!0});var ca=r(vs);mt=p(ca,"Dataset.load_faiss_index()"),ca.forEach(e),_t=p(Le,":"),Le.forEach(e),da.forEach(e),pe=h(s),m(Z.$$.fragment,s),de=h(s),b=l(s,"H2",{class:!0});var Ae=r(b);L=l(Ae,"A",{id:!0,class:!0,href:!0});var ha=r(L);Fs=l(ha,"SPAN",{});var ua=r(Fs);m(ss.$$.fragment,ua),ua.forEach(e),ha.forEach(e),ft=h(Ae),Qs=l(Ae,"SPAN",{});var ma=r(Qs);gt=p(ma,"ElasticSearch"),ma.forEach(e),Ae.forEach(e),ce=h(s),ws=l(s,"P",{});var _a=r(ws);xt=p(_a,"Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),_a.forEach(e),he=h(s),A=l(s,"P",{});var Ie=r(A);qt=p(Ie,"Start ElasticSearch on your machine, or see the "),es=l(Ie,"A",{href:!0,rel:!0});var fa=r(es);jt=p(fa,"ElasticSearch installation guide"),fa.forEach(e),vt=p(Ie," if you don\u2019t already have it installed."),Ie.forEach(e),ue=h(s),ys=l(s,"OL",{});var ga=r(ys);Ns=l(ga,"LI",{});var xa=r(Ns);wt=p(xa,"Load the dataset you want to index:"),xa.forEach(e),ga.forEach(e),me=h(s),m(ts.$$.fragment,s),_e=h(s),as=l(s,"OL",{start:!0});var qa=r(as);ns=l(qa,"LI",{});var Re=r(ns);yt=p(Re,"Build the index with "),$s=l(Re,"A",{href:!0});var ja=r($s);$t=p(ja,"Dataset.add_elasticsearch_index()"),ja.forEach(e),Et=p(Re,":"),Re.forEach(e),qa.forEach(e),fe=h(s),m(ls.$$.fragment,s),ge=h(s),rs=l(s,"OL",{start:!0});var va=r(rs);k=l(va,"LI",{});var Ps=r(k);bt=p(Ps,"Then you can query the "),Bs=l(Ps,"CODE",{});var wa=r(Bs);kt=p(wa,"context"),wa.forEach(e),Dt=p(Ps," index with "),Es=l(Ps,"A",{href:!0});var ya=r(Es);St=p(ya,"Dataset.get_nearest_examples()"),ya.forEach(e),Pt=p(Ps,":"),Ps.forEach(e),va.forEach(e),xe=h(s),m(os.$$.fragment,s),qe=h(s),is=l(s,"OL",{start:!0});var $a=r(is);ps=l($a,"LI",{});var ze=r(ps);Lt=p(ze,"If you want to reuse the index, define the "),Ms=l(ze,"CODE",{});var Ea=r(Ms);At=p(Ea,"es_index_name"),Ea.forEach(e),It=p(ze," parameter when you build the index:"),ze.forEach(e),$a.forEach(e),je=h(s),m(ds.$$.fragment,s),ve=h(s),cs=l(s,"OL",{start:!0});var ba=r(cs);hs=l(ba,"LI",{});var Ce=r(hs);Rt=p(Ce,"Reload it later with the index name when you call "),bs=l(Ce,"A",{href:!0});var ka=r(bs);zt=p(ka,"Dataset.load_elasticsearch_index()"),ka.forEach(e),Ct=p(Ce,":"),Ce.forEach(e),ba.forEach(e),we=h(s),m(us.$$.fragment,s),ye=h(s),ks=l(s,"P",{});var Da=r(ks);Ot=p(Da,"For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),Da.forEach(e),$e=h(s),m(ms.$$.fragment,s),this.h()},h(){d(j,"name","hf:doc:metadata"),d(j,"content",JSON.stringify(Ca)),d(D,"id","search-index"),d(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(D,"href","#search-index"),d(v,"class","relative group"),d(R,"href","https://github.com/facebookresearch/faiss"),d(R,"rel","nofollow"),d(z,"href","https://www.elastic.co/elasticsearch/"),d(z,"rel","nofollow"),d(S,"id","faiss"),d(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(S,"href","#faiss"),d(y,"class","relative group"),d(O,"href","https://huggingface.co/transformers/model_doc/dpr.html"),d(O,"rel","nofollow"),d(F,"start","2"),d(gs,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.add_faiss_index"),d(N,"start","3"),d(xs,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.get_nearest_examples"),d(H,"start","4"),d(qs,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.get_index"),d(W,"start","5"),d(js,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.save_faiss_index"),d(G,"start","6"),d(vs,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.load_faiss_index"),d(V,"start","7"),d(L,"id","elasticsearch"),d(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(L,"href","#elasticsearch"),d(b,"class","relative group"),d(es,"href","https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html"),d(es,"rel","nofollow"),d($s,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.add_elasticsearch_index"),d(as,"start","2"),d(Es,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.get_nearest_examples"),d(rs,"start","3"),d(is,"start","4"),d(bs,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.load_elasticsearch_index"),d(cs,"start","5")},m(s,a){t(document.head,j),o(s,Us,a),o(s,v,a),t(v,D),t(D,Ls),_(I,Ls,null),t(v,Oe),t(v,As),t(As,Te),o(s,Ws,a),o(s,w,a),t(w,R),t(R,Fe),t(w,Qe),t(w,z),t(z,Ne),t(w,Be),o(s,Ys,a),o(s,_s,a),t(_s,Me),o(s,Gs,a),o(s,y,a),t(y,S),t(S,Is),_(C,Is,null),t(y,He),t(y,Rs),t(Rs,Ue),o(s,Js,a),o(s,P,a),t(P,We),t(P,O),t(O,Ye),t(P,Ge),o(s,Ks,a),o(s,fs,a),t(fs,zs),t(zs,Je),o(s,Vs,a),_(T,s,a),o(s,Xs,a),o(s,F,a),t(F,Cs),t(Cs,Ke),o(s,Zs,a),_(Q,s,a),o(s,se,a),o(s,N,a),t(N,B),t(B,Ve),t(B,gs),t(gs,Xe),t(B,Ze),o(s,ee,a),_(M,s,a),o(s,te,a),o(s,H,a),t(H,$),t($,st),t($,Os),t(Os,et),t($,tt),t($,xs),t(xs,at),t($,nt),o(s,ae,a),_(U,s,a),o(s,ne,a),o(s,W,a),t(W,E),t(E,lt),t(E,qs),t(qs,rt),t(E,ot),t(E,Ts),t(Ts,it),t(E,pt),o(s,le,a),_(Y,s,a),o(s,re,a),o(s,G,a),t(G,J),t(J,dt),t(J,js),t(js,ct),t(J,ht),o(s,oe,a),_(K,s,a),o(s,ie,a),o(s,V,a),t(V,X),t(X,ut),t(X,vs),t(vs,mt),t(X,_t),o(s,pe,a),_(Z,s,a),o(s,de,a),o(s,b,a),t(b,L),t(L,Fs),_(ss,Fs,null),t(b,ft),t(b,Qs),t(Qs,gt),o(s,ce,a),o(s,ws,a),t(ws,xt),o(s,he,a),o(s,A,a),t(A,qt),t(A,es),t(es,jt),t(A,vt),o(s,ue,a),o(s,ys,a),t(ys,Ns),t(Ns,wt),o(s,me,a),_(ts,s,a),o(s,_e,a),o(s,as,a),t(as,ns),t(ns,yt),t(ns,$s),t($s,$t),t(ns,Et),o(s,fe,a),_(ls,s,a),o(s,ge,a),o(s,rs,a),t(rs,k),t(k,bt),t(k,Bs),t(Bs,kt),t(k,Dt),t(k,Es),t(Es,St),t(k,Pt),o(s,xe,a),_(os,s,a),o(s,qe,a),o(s,is,a),t(is,ps),t(ps,Lt),t(ps,Ms),t(Ms,At),t(ps,It),o(s,je,a),_(ds,s,a),o(s,ve,a),o(s,cs,a),t(cs,hs),t(hs,Rt),t(hs,bs),t(bs,zt),t(hs,Ct),o(s,we,a),_(us,s,a),o(s,ye,a),o(s,ks,a),t(ks,Ot),o(s,$e,a),_(ms,s,a),Ee=!0},p:Ia,i(s){Ee||(f(I.$$.fragment,s),f(C.$$.fragment,s),f(T.$$.fragment,s),f(Q.$$.fragment,s),f(M.$$.fragment,s),f(U.$$.fragment,s),f(Y.$$.fragment,s),f(K.$$.fragment,s),f(Z.$$.fragment,s),f(ss.$$.fragment,s),f(ts.$$.fragment,s),f(ls.$$.fragment,s),f(os.$$.fragment,s),f(ds.$$.fragment,s),f(us.$$.fragment,s),f(ms.$$.fragment,s),Ee=!0)},o(s){g(I.$$.fragment,s),g(C.$$.fragment,s),g(T.$$.fragment,s),g(Q.$$.fragment,s),g(M.$$.fragment,s),g(U.$$.fragment,s),g(Y.$$.fragment,s),g(K.$$.fragment,s),g(Z.$$.fragment,s),g(ss.$$.fragment,s),g(ts.$$.fragment,s),g(ls.$$.fragment,s),g(os.$$.fragment,s),g(ds.$$.fragment,s),g(us.$$.fragment,s),g(ms.$$.fragment,s),Ee=!1},d(s){e(j),s&&e(Us),s&&e(v),x(I),s&&e(Ws),s&&e(w),s&&e(Ys),s&&e(_s),s&&e(Gs),s&&e(y),x(C),s&&e(Js),s&&e(P),s&&e(Ks),s&&e(fs),s&&e(Vs),x(T,s),s&&e(Xs),s&&e(F),s&&e(Zs),x(Q,s),s&&e(se),s&&e(N),s&&e(ee),x(M,s),s&&e(te),s&&e(H),s&&e(ae),x(U,s),s&&e(ne),s&&e(W),s&&e(le),x(Y,s),s&&e(re),s&&e(G),s&&e(oe),x(K,s),s&&e(ie),s&&e(V),s&&e(pe),x(Z,s),s&&e(de),s&&e(b),x(ss),s&&e(ce),s&&e(ws),s&&e(he),s&&e(A),s&&e(ue),s&&e(ys),s&&e(me),x(ts,s),s&&e(_e),s&&e(as),s&&e(fe),x(ls,s),s&&e(ge),s&&e(rs),s&&e(xe),x(os,s),s&&e(qe),s&&e(is),s&&e(je),x(ds,s),s&&e(ve),s&&e(cs),s&&e(we),x(us,s),s&&e(ye),s&&e(ks),s&&e($e),x(ms,s)}}}const Ca={local:"search-index",sections:[{local:"faiss",title:"FAISS"},{local:"elasticsearch",title:"ElasticSearch"}],title:"Search index"};function Oa(Ft){return Ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Na extends Sa{constructor(j){super();Pa(this,j,Oa,za,La,{})}}export{Na as default,Ca as metadata};
