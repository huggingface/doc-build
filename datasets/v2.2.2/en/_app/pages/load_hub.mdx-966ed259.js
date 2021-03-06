import{S as rt,i as it,s as pt,e as n,k as h,w as b,t as r,M as ot,c as l,d as a,m as d,a as p,x as w,h as i,b as c,F as t,g as o,y as $,q as v,o as y,B as k,v as ct}from"../chunks/vendor-8138ceec.js";import{T as ht}from"../chunks/Tip-12722dfc.js";import{I as Xs}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as ns}from"../chunks/CodeBlock-fc89709f.js";function dt(vs){let u,H,f,x,S,g,V,P;return{c(){u=n("p"),H=r("Take a look at "),f=n("a"),x=r("DatasetInfo"),S=r(" for a full list of attributes you can use with "),g=n("code"),V=r("dataset_builder"),P=r("."),this.h()},l(A){u=l(A,"P",{});var m=p(u);H=i(m,"Take a look at "),f=l(m,"A",{href:!0});var E=p(f);x=i(E,"DatasetInfo"),E.forEach(a),S=i(m," for a full list of attributes you can use with "),g=l(m,"CODE",{});var ls=p(g);V=i(ls,"dataset_builder"),ls.forEach(a),P=i(m,"."),m.forEach(a),this.h()},h(){c(f,"href","/docs/datasets/v2.2.2/en/package_reference/main_classes#datasets.DatasetInfo")},m(A,m){o(A,u,m),t(u,H),t(u,f),t(f,x),t(u,S),t(u,g),t(g,V),t(u,P)},d(A){A&&a(u)}}}function ut(vs){let u,H,f,x,S,g,V,P,A,m,E,ls,z,Zs,sa,ys,D,C,ds,R,aa,us,ta,ks,I,ea,rs,na,la,Es,Y,Ss,T,Ps,L,ra,is,ia,pa,As,J,Ds,q,M,fs,K,oa,gs,ca,qs,_,ha,Q,da,ua,ms,fa,ga,xs,ma,xa,Ns,U,_a,ps,ja,ba,Hs,W,Cs,os,wa,Is,X,Ts,cs,$a,Ls,Z,Ms,N,O,_s,ss,va,js,ya,Us,j,ka,bs,Ea,Sa,ws,Pa,Aa,$s,Da,qa,Os,as,Bs,B,Na,hs,Ha,Ca,Fs,ts,Gs;return g=new Xs({}),R=new Xs({}),Y=new ns({props:{code:`from datasets import load_dataset_builder
dataset_builder = load_dataset_builder('imdb')
print(dataset_builder.cache_dir)
print(dataset_builder.info.features)
print(dataset_builder.info.splits)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset_builder
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_builder = load_dataset_builder(<span class="hljs-string">&#x27;imdb&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset_builder.cache_dir)
/Users/thomwolf/.cache/huggingface/datasets/imdb/plain_text/<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>/fdc76b18d5506f14b0646729b8d371880ef1bc48a26d00835a7f3da44004b676
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset_builder.info.features)
{<span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;neg&#x27;</span>, <span class="hljs-string">&#x27;pos&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset_builder.info.splits)
{<span class="hljs-string">&#x27;train&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;train&#x27;</span>, num_bytes=<span class="hljs-number">33432835</span>, num_examples=<span class="hljs-number">25000</span>, dataset_name=<span class="hljs-string">&#x27;imdb&#x27;</span>), <span class="hljs-string">&#x27;test&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;test&#x27;</span>, num_bytes=<span class="hljs-number">32650697</span>, num_examples=<span class="hljs-number">25000</span>, dataset_name=<span class="hljs-string">&#x27;imdb&#x27;</span>), <span class="hljs-string">&#x27;unsupervised&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;unsupervised&#x27;</span>, num_bytes=<span class="hljs-number">67106814</span>, num_examples=<span class="hljs-number">50000</span>, dataset_name=<span class="hljs-string">&#x27;imdb&#x27;</span>)}`}}),T=new ht({props:{$$slots:{default:[dt]},$$scope:{ctx:vs}}}),J=new ns({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)`}}),K=new Xs({}),W=new ns({props:{code:`from datasets import get_dataset_config_names

configs = get_dataset_config_names("glue")
print(configs)
# ['cola', 'sst2', 'mrpc', 'qqp', 'stsb', 'mnli', 'mnli_mismatched', 'mnli_matched', 'qnli', 'rte', 'wnli', 'ax']`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> get_dataset_config_names

configs = get_dataset_config_names(<span class="hljs-string">&quot;glue&quot;</span>)
<span class="hljs-built_in">print</span>(configs)
<span class="hljs-comment"># [&#x27;cola&#x27;, &#x27;sst2&#x27;, &#x27;mrpc&#x27;, &#x27;qqp&#x27;, &#x27;stsb&#x27;, &#x27;mnli&#x27;, &#x27;mnli_mismatched&#x27;, &#x27;mnli_matched&#x27;, &#x27;qnli&#x27;, &#x27;rte&#x27;, &#x27;wnli&#x27;, &#x27;ax&#x27;]</span>`}}),X=new ns({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>)
ValueError: Config name <span class="hljs-keyword">is</span> missing.
Please pick one among the available configs: [<span class="hljs-string">&#x27;cola&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, <span class="hljs-string">&#x27;qqp&#x27;</span>, <span class="hljs-string">&#x27;stsb&#x27;</span>, <span class="hljs-string">&#x27;mnli&#x27;</span>, <span class="hljs-string">&#x27;mnli_mismatched&#x27;</span>, <span class="hljs-string">&#x27;mnli_matched&#x27;</span>, <span class="hljs-string">&#x27;qnli&#x27;</span>, <span class="hljs-string">&#x27;rte&#x27;</span>, <span class="hljs-string">&#x27;wnli&#x27;</span>, <span class="hljs-string">&#x27;ax&#x27;</span>]
Example of usage:
        *load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;cola&#x27;</span>)*`}}),Z=new ns({props:{code:`dataset = load_dataset('glue', 'sst2')
print(dataset)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>)
Downloading <span class="hljs-keyword">and</span> preparing dataset glue/sst2 (download: <span class="hljs-number">7.09</span> MiB, generated: <span class="hljs-number">4.81</span> MiB, total: <span class="hljs-number">11.90</span> MiB) to /Users/thomwolf/.cache/huggingface/datasets/glue/sst2/<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>...
Downloading: <span class="hljs-number">100</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| <span class="hljs-number">7.44</span>M/<span class="hljs-number">7.44</span>M [<span class="hljs-number">00</span>:01&lt;<span class="hljs-number">00</span>:<span class="hljs-number">00</span>, <span class="hljs-number">7.03</span>MB/s]
Dataset glue downloaded <span class="hljs-keyword">and</span> prepared to /Users/thomwolf/.cache/huggingface/datasets/glue/sst2/<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>. Subsequent calls will reuse this data.
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset)
{<span class="hljs-string">&#x27;train&#x27;</span>: Dataset(schema: {<span class="hljs-string">&#x27;sentence&#x27;</span>: <span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;int64&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-string">&#x27;int32&#x27;</span>}, num_rows: <span class="hljs-number">67349</span>),
    <span class="hljs-string">&#x27;validation&#x27;</span>: Dataset(schema: {<span class="hljs-string">&#x27;sentence&#x27;</span>: <span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;int64&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-string">&#x27;int32&#x27;</span>}, num_rows: <span class="hljs-number">872</span>),
    <span class="hljs-string">&#x27;test&#x27;</span>: Dataset(schema: {<span class="hljs-string">&#x27;sentence&#x27;</span>: <span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;int64&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-string">&#x27;int32&#x27;</span>}, num_rows: <span class="hljs-number">1821</span>)
}`}}),ss=new Xs({}),as=new ns({props:{code:`from datasets import load_dataset
datasets = load_dataset('glue', 'mrpc')
print(datasets)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>datasets = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(datasets)
{train: Dataset({
    features: [<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>],
    num_rows: <span class="hljs-number">3668</span>
})
validation: Dataset({
    features: [<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>],
    num_rows: <span class="hljs-number">408</span>
})
test: Dataset({
    features: [<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>],
    num_rows: <span class="hljs-number">1725</span>
})
}`}}),ts=new ns({props:{code:`from datasets import get_dataset_split_names
get_dataset_split_names('sent_comp')
get_dataset_split_names('glue', 'cola')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> get_dataset_split_names
<span class="hljs-meta">&gt;&gt;&gt; </span>get_dataset_split_names(<span class="hljs-string">&#x27;sent_comp&#x27;</span>)
[<span class="hljs-string">&#x27;validation&#x27;</span>, <span class="hljs-string">&#x27;train&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>get_dataset_split_names(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;cola&#x27;</span>)
[<span class="hljs-string">&#x27;test&#x27;</span>, <span class="hljs-string">&#x27;train&#x27;</span>, <span class="hljs-string">&#x27;validation&#x27;</span>]`}}),{c(){u=n("meta"),H=h(),f=n("h1"),x=n("a"),S=n("span"),b(g.$$.fragment),V=h(),P=n("span"),A=r("Hugging Face Hub"),m=h(),E=n("p"),ls=r("Now that you are all setup, the first step is to load a dataset. The easiest way to load a dataset is from the "),z=n("a"),Zs=r("Hugging Face Hub"),sa=r(". There are already over 6000 datasets in over 100 languages on the Hub. Choose from a wide category of datasets to use for NLP tasks like question answering, summarization, machine translation, and language modeling."),ys=h(),D=n("h2"),C=n("a"),ds=n("span"),b(R.$$.fragment),aa=h(),us=n("span"),ta=r("Load a dataset"),ks=h(),I=n("p"),ea=r("Before you take the time to download a dataset, it is often helpful to quickly get all the relevant information about a dataset. The "),rs=n("a"),na=r("load_dataset_builder()"),la=r(" method allows you to inspect the attributes of a dataset without downloading it."),Es=h(),b(Y.$$.fragment),Ss=h(),b(T.$$.fragment),Ps=h(),L=n("p"),ra=r("Once you are happy with the dataset you want, load it in a single line with "),is=n("a"),ia=r("load_dataset()"),pa=r(":"),As=h(),b(J.$$.fragment),Ds=h(),q=n("h2"),M=n("a"),fs=n("span"),b(K.$$.fragment),oa=h(),gs=n("span"),ca=r("Select a configuration"),qs=h(),_=n("p"),ha=r("Some datasets, like the "),Q=n("a"),da=r("General Language Understanding Evaluation (GLUE)"),ua=r(" benchmark, are actually made up of several datasets. These sub-datasets are called "),ms=n("strong"),fa=r("configurations"),ga=r(", and you must explicitly select one when you load the dataset. If you don\u2019t provide a configuration name, \u{1F917} Datasets will raise a "),xs=n("code"),ma=r("ValueError"),xa=r(" and remind you to select a configuration."),Ns=h(),U=n("p"),_a=r("Use the "),ps=n("a"),ja=r("get_dataset_config_names()"),ba=r(" function to retrieve a list of all the possible configurations available to your dataset:"),Hs=h(),b(W.$$.fragment),Cs=h(),os=n("p"),wa=r("\u274C Incorrect way to load a configuration:"),Is=h(),b(X.$$.fragment),Ts=h(),cs=n("p"),$a=r("\u2705 Correct way to load a configuration:"),Ls=h(),b(Z.$$.fragment),Ms=h(),N=n("h2"),O=n("a"),_s=n("span"),b(ss.$$.fragment),va=h(),js=n("span"),ya=r("Select a split"),Us=h(),j=n("p"),ka=r("A split is a specific subset of the dataset like "),bs=n("code"),Ea=r("train"),Sa=r(" and "),ws=n("code"),Pa=r("test"),Aa=r(". Make sure you select a split when you load a dataset. If you don\u2019t supply a "),$s=n("code"),Da=r("split"),qa=r(" argument, \u{1F917} Datasets will only return a dictionary containing the subsets of the dataset."),Os=h(),b(as.$$.fragment),Bs=h(),B=n("p"),Na=r("You can list the split names for a dataset, or a specific configuration, with the "),hs=n("a"),Ha=r("get_dataset_split_names()"),Ca=r(" method:"),Fs=h(),b(ts.$$.fragment),this.h()},l(s){const e=ot('[data-svelte="svelte-1phssyn"]',document.head);u=l(e,"META",{name:!0,content:!0}),e.forEach(a),H=d(s),f=l(s,"H1",{class:!0});var es=p(f);x=l(es,"A",{id:!0,class:!0,href:!0});var Ia=p(x);S=l(Ia,"SPAN",{});var Ta=p(S);w(g.$$.fragment,Ta),Ta.forEach(a),Ia.forEach(a),V=d(es),P=l(es,"SPAN",{});var La=p(P);A=i(La,"Hugging Face Hub"),La.forEach(a),es.forEach(a),m=d(s),E=l(s,"P",{});var Vs=p(E);ls=i(Vs,"Now that you are all setup, the first step is to load a dataset. The easiest way to load a dataset is from the "),z=l(Vs,"A",{href:!0,rel:!0});var Ma=p(z);Zs=i(Ma,"Hugging Face Hub"),Ma.forEach(a),sa=i(Vs,". There are already over 6000 datasets in over 100 languages on the Hub. Choose from a wide category of datasets to use for NLP tasks like question answering, summarization, machine translation, and language modeling."),Vs.forEach(a),ys=d(s),D=l(s,"H2",{class:!0});var zs=p(D);C=l(zs,"A",{id:!0,class:!0,href:!0});var Ua=p(C);ds=l(Ua,"SPAN",{});var Oa=p(ds);w(R.$$.fragment,Oa),Oa.forEach(a),Ua.forEach(a),aa=d(zs),us=l(zs,"SPAN",{});var Ba=p(us);ta=i(Ba,"Load a dataset"),Ba.forEach(a),zs.forEach(a),ks=d(s),I=l(s,"P",{});var Rs=p(I);ea=i(Rs,"Before you take the time to download a dataset, it is often helpful to quickly get all the relevant information about a dataset. The "),rs=l(Rs,"A",{href:!0});var Fa=p(rs);na=i(Fa,"load_dataset_builder()"),Fa.forEach(a),la=i(Rs," method allows you to inspect the attributes of a dataset without downloading it."),Rs.forEach(a),Es=d(s),w(Y.$$.fragment,s),Ss=d(s),w(T.$$.fragment,s),Ps=d(s),L=l(s,"P",{});var Ys=p(L);ra=i(Ys,"Once you are happy with the dataset you want, load it in a single line with "),is=l(Ys,"A",{href:!0});var Ga=p(is);ia=i(Ga,"load_dataset()"),Ga.forEach(a),pa=i(Ys,":"),Ys.forEach(a),As=d(s),w(J.$$.fragment,s),Ds=d(s),q=l(s,"H2",{class:!0});var Js=p(q);M=l(Js,"A",{id:!0,class:!0,href:!0});var Va=p(M);fs=l(Va,"SPAN",{});var za=p(fs);w(K.$$.fragment,za),za.forEach(a),Va.forEach(a),oa=d(Js),gs=l(Js,"SPAN",{});var Ra=p(gs);ca=i(Ra,"Select a configuration"),Ra.forEach(a),Js.forEach(a),qs=d(s),_=l(s,"P",{});var F=p(_);ha=i(F,"Some datasets, like the "),Q=l(F,"A",{href:!0,rel:!0});var Ya=p(Q);da=i(Ya,"General Language Understanding Evaluation (GLUE)"),Ya.forEach(a),ua=i(F," benchmark, are actually made up of several datasets. These sub-datasets are called "),ms=l(F,"STRONG",{});var Ja=p(ms);fa=i(Ja,"configurations"),Ja.forEach(a),ga=i(F,", and you must explicitly select one when you load the dataset. If you don\u2019t provide a configuration name, \u{1F917} Datasets will raise a "),xs=l(F,"CODE",{});var Ka=p(xs);ma=i(Ka,"ValueError"),Ka.forEach(a),xa=i(F," and remind you to select a configuration."),F.forEach(a),Ns=d(s),U=l(s,"P",{});var Ks=p(U);_a=i(Ks,"Use the "),ps=l(Ks,"A",{href:!0});var Qa=p(ps);ja=i(Qa,"get_dataset_config_names()"),Qa.forEach(a),ba=i(Ks," function to retrieve a list of all the possible configurations available to your dataset:"),Ks.forEach(a),Hs=d(s),w(W.$$.fragment,s),Cs=d(s),os=l(s,"P",{});var Wa=p(os);wa=i(Wa,"\u274C Incorrect way to load a configuration:"),Wa.forEach(a),Is=d(s),w(X.$$.fragment,s),Ts=d(s),cs=l(s,"P",{});var Xa=p(cs);$a=i(Xa,"\u2705 Correct way to load a configuration:"),Xa.forEach(a),Ls=d(s),w(Z.$$.fragment,s),Ms=d(s),N=l(s,"H2",{class:!0});var Qs=p(N);O=l(Qs,"A",{id:!0,class:!0,href:!0});var Za=p(O);_s=l(Za,"SPAN",{});var st=p(_s);w(ss.$$.fragment,st),st.forEach(a),Za.forEach(a),va=d(Qs),js=l(Qs,"SPAN",{});var at=p(js);ya=i(at,"Select a split"),at.forEach(a),Qs.forEach(a),Us=d(s),j=l(s,"P",{});var G=p(j);ka=i(G,"A split is a specific subset of the dataset like "),bs=l(G,"CODE",{});var tt=p(bs);Ea=i(tt,"train"),tt.forEach(a),Sa=i(G," and "),ws=l(G,"CODE",{});var et=p(ws);Pa=i(et,"test"),et.forEach(a),Aa=i(G,". Make sure you select a split when you load a dataset. If you don\u2019t supply a "),$s=l(G,"CODE",{});var nt=p($s);Da=i(nt,"split"),nt.forEach(a),qa=i(G," argument, \u{1F917} Datasets will only return a dictionary containing the subsets of the dataset."),G.forEach(a),Os=d(s),w(as.$$.fragment,s),Bs=d(s),B=l(s,"P",{});var Ws=p(B);Na=i(Ws,"You can list the split names for a dataset, or a specific configuration, with the "),hs=l(Ws,"A",{href:!0});var lt=p(hs);Ha=i(lt,"get_dataset_split_names()"),lt.forEach(a),Ca=i(Ws," method:"),Ws.forEach(a),Fs=d(s),w(ts.$$.fragment,s),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(ft)),c(x,"id","hugging-face-hub"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#hugging-face-hub"),c(f,"class","relative group"),c(z,"href","https://huggingface.co/datasets"),c(z,"rel","nofollow"),c(C,"id","load-a-dataset"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#load-a-dataset"),c(D,"class","relative group"),c(rs,"href","/docs/datasets/v2.2.2/en/package_reference/loading_methods#datasets.load_dataset_builder"),c(is,"href","/docs/datasets/v2.2.2/en/package_reference/loading_methods#datasets.load_dataset"),c(M,"id","select-a-configuration"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#select-a-configuration"),c(q,"class","relative group"),c(Q,"href","https://huggingface.co/datasets/glue"),c(Q,"rel","nofollow"),c(ps,"href","/docs/datasets/v2.2.2/en/package_reference/loading_methods#datasets.get_dataset_config_names"),c(O,"id","select-a-split"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#select-a-split"),c(N,"class","relative group"),c(hs,"href","/docs/datasets/v2.2.2/en/package_reference/loading_methods#datasets.get_dataset_split_names")},m(s,e){t(document.head,u),o(s,H,e),o(s,f,e),t(f,x),t(x,S),$(g,S,null),t(f,V),t(f,P),t(P,A),o(s,m,e),o(s,E,e),t(E,ls),t(E,z),t(z,Zs),t(E,sa),o(s,ys,e),o(s,D,e),t(D,C),t(C,ds),$(R,ds,null),t(D,aa),t(D,us),t(us,ta),o(s,ks,e),o(s,I,e),t(I,ea),t(I,rs),t(rs,na),t(I,la),o(s,Es,e),$(Y,s,e),o(s,Ss,e),$(T,s,e),o(s,Ps,e),o(s,L,e),t(L,ra),t(L,is),t(is,ia),t(L,pa),o(s,As,e),$(J,s,e),o(s,Ds,e),o(s,q,e),t(q,M),t(M,fs),$(K,fs,null),t(q,oa),t(q,gs),t(gs,ca),o(s,qs,e),o(s,_,e),t(_,ha),t(_,Q),t(Q,da),t(_,ua),t(_,ms),t(ms,fa),t(_,ga),t(_,xs),t(xs,ma),t(_,xa),o(s,Ns,e),o(s,U,e),t(U,_a),t(U,ps),t(ps,ja),t(U,ba),o(s,Hs,e),$(W,s,e),o(s,Cs,e),o(s,os,e),t(os,wa),o(s,Is,e),$(X,s,e),o(s,Ts,e),o(s,cs,e),t(cs,$a),o(s,Ls,e),$(Z,s,e),o(s,Ms,e),o(s,N,e),t(N,O),t(O,_s),$(ss,_s,null),t(N,va),t(N,js),t(js,ya),o(s,Us,e),o(s,j,e),t(j,ka),t(j,bs),t(bs,Ea),t(j,Sa),t(j,ws),t(ws,Pa),t(j,Aa),t(j,$s),t($s,Da),t(j,qa),o(s,Os,e),$(as,s,e),o(s,Bs,e),o(s,B,e),t(B,Na),t(B,hs),t(hs,Ha),t(B,Ca),o(s,Fs,e),$(ts,s,e),Gs=!0},p(s,[e]){const es={};e&2&&(es.$$scope={dirty:e,ctx:s}),T.$set(es)},i(s){Gs||(v(g.$$.fragment,s),v(R.$$.fragment,s),v(Y.$$.fragment,s),v(T.$$.fragment,s),v(J.$$.fragment,s),v(K.$$.fragment,s),v(W.$$.fragment,s),v(X.$$.fragment,s),v(Z.$$.fragment,s),v(ss.$$.fragment,s),v(as.$$.fragment,s),v(ts.$$.fragment,s),Gs=!0)},o(s){y(g.$$.fragment,s),y(R.$$.fragment,s),y(Y.$$.fragment,s),y(T.$$.fragment,s),y(J.$$.fragment,s),y(K.$$.fragment,s),y(W.$$.fragment,s),y(X.$$.fragment,s),y(Z.$$.fragment,s),y(ss.$$.fragment,s),y(as.$$.fragment,s),y(ts.$$.fragment,s),Gs=!1},d(s){a(u),s&&a(H),s&&a(f),k(g),s&&a(m),s&&a(E),s&&a(ys),s&&a(D),k(R),s&&a(ks),s&&a(I),s&&a(Es),k(Y,s),s&&a(Ss),k(T,s),s&&a(Ps),s&&a(L),s&&a(As),k(J,s),s&&a(Ds),s&&a(q),k(K),s&&a(qs),s&&a(_),s&&a(Ns),s&&a(U),s&&a(Hs),k(W,s),s&&a(Cs),s&&a(os),s&&a(Is),k(X,s),s&&a(Ts),s&&a(cs),s&&a(Ls),k(Z,s),s&&a(Ms),s&&a(N),k(ss),s&&a(Us),s&&a(j),s&&a(Os),k(as,s),s&&a(Bs),s&&a(B),s&&a(Fs),k(ts,s)}}}const ft={local:"hugging-face-hub",sections:[{local:"load-a-dataset",title:"Load a dataset"},{local:"select-a-configuration",title:"Select a configuration"},{local:"select-a-split",title:"Select a split"}],title:"Hugging Face Hub"};function gt(vs){return ct(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bt extends rt{constructor(u){super();it(this,u,gt,ut,pt,{})}}export{bt as default,ft as metadata};
