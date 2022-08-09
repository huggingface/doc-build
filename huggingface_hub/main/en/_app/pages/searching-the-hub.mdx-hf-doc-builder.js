import{S as Ar,i as Tr,s as Pr,e as r,k as h,w as u,t as s,M as Sr,c as n,d as a,m as f,a as o,x as g,h as l,b as p,T as kr,G as t,g as c,y as m,L as Dr,q as d,o as _,B as b,v as Fr}from"../chunks/vendor-hf-doc-builder.js";import{I as Ba}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as y}from"../chunks/CodeBlock-hf-doc-builder.js";function Mr(ii){let M,Ra,C,N,Xe,Z,Vt,Ze,es,Ga,L,as,Ve,ts,ss,Ja,I,z,ea,V,ls,aa,is,Ua,ee,ta,rs,ns,Wa,ae,Ya,K,os,ye,cs,hs,Qa,te,Xa,xe,fs,Za,B,sa,we,ps,us,la,$e,gs,Va,Ee,ms,et,x,ia,ra,ds,_s,na,oa,bs,vs,ca,ha,ys,xs,fa,ws,at,w,$s,pa,Es,js,ua,ks,As,ga,Ts,Ps,tt,H,R,ma,se,Ss,da,Ds,st,v,Fs,_a,Ms,Cs,ba,Is,Hs,je,Os,qs,ke,Ns,Ls,lt,le,it,E,zs,va,Ks,Bs,ya,Rs,Gs,rt,O,G,xa,ie,Js,wa,Us,nt,Ae,Ws,ot,Te,re,Ys,$a,Qs,Xs,ct,J,Zs,Ea,Vs,el,ht,ne,ft,j,al,ja,tl,sl,ka,ll,il,pt,U,rl,Aa,nl,ol,ut,oe,gt,k,cl,Ta,hl,fl,Pa,pl,ul,mt,ce,dt,A,gl,Sa,ml,dl,Da,_l,bl,_t,Pe,Se,ri,bt,De,Fe,ni,vt,T,vl,Me,yl,xl,Ce,wl,$l,yt,he,xt,W,El,Fa,jl,kl,wt,fe,$t,q,Y,Ma,pe,Al,Ca,Tl,Et,Ie,Pl,jt,He,Sl,kt,Oe,ue,Dl,Ia,Fl,Ml,At,P,Cl,qe,Il,Hl,Ne,Ol,ql,Tt,ge,Pt,$,Ha,Nl,Ll,Oa,zl,Kl,qa,Bl,Rl,St,me,Dt,S,Gl,Na,Jl,Ul,La,Wl,Yl,Ft,D,Ql,za,Xl,Zl,Ka,Vl,ei,Mt,de,Ct,Le,ai,It,_e,Ht,ze,ti,Ot,be,qt,Ke,si,Nt;return Z=new Ba({}),V=new Ba({}),ae=new y({props:{code:"pip install huggingface_hub",highlighted:"pip install huggingface_hub"}}),te=new y({props:{code:`from huggingface_hub import HfApi
api = HfApi()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()`}}),se=new Ba({}),le=new y({props:{code:`from huggingface_hub import ModelSearchArguments, DatasetSearchArguments

model_args = ModelSearchArguments()
dataset_args = DatasetSearchArguments()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelSearchArguments, DatasetSearchArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>model_args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_args = DatasetSearchArguments()`}}),ie=new Ba({}),ne=new y({props:{code:"model_args",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_args
Available Attributes <span class="hljs-keyword">or</span> Keys:
 * author
 * dataset
 * language
 * library
 * license
 * model_name
 * pipeline_tag`}}),oe=new y({props:{code:"model_args.library",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_args.library
Available Attributes <span class="hljs-keyword">or</span> Keys:
 * AdapterTransformers
 * Asteroid
 * ESPnet
 * Fairseq
 * Flair
 * JAX
 * Joblib
 * Keras
 * ONNX
 * PyTorch
 * Rust
 * Scikit_learn
 * SentenceTransformers
 * Stable_Baselines3 (Key only)
 * Stanza
 * TFLite
 * TensorBoard
 * TensorFlow
 * TensorFlowTTS
 * Timm
 * Transformers
 * allenNLP
 * fastText
 * fastai
 * pyannote_audio
 * spaCy
 * speechbrain`}}),ce=new y({props:{code:"model_args.library.PyTorch",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_args.library.PyTorch
<span class="hljs-string">&#x27;pytorch&#x27;</span>`}}),he=new y({props:{code:`from huggingface_hub import ModelFilter, DatasetFilter

filt = ModelFilter(
    task=model_args.pipeline_tag.TextClassification, 
    trained_dataset=dataset_args.dataset_name.glue, 
    library=model_args.library.PyTorch
)
api.list_models(filter=filt)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelFilter, DatasetFilter

<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(
<span class="hljs-meta">... </span>    task=model_args.pipeline_tag.TextClassification, 
<span class="hljs-meta">... </span>    trained_dataset=dataset_args.dataset_name.glue, 
<span class="hljs-meta">... </span>    library=model_args.library.PyTorch
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)[<span class="hljs-number">0</span>]
ModelInfo: {
	modelId: Jiva/xlm-roberta-large-it-mnli
	sha: c6e64469ec4aa17fedbd1b2522256f90a90b5b86
	lastModified: <span class="hljs-number">2021</span>-<span class="hljs-number">12</span>-10T14:<span class="hljs-number">56</span>:<span class="hljs-number">38.000</span>Z
	tags: [<span class="hljs-string">&#x27;pytorch&#x27;</span>, <span class="hljs-string">&#x27;xlm-roberta&#x27;</span>, <span class="hljs-string">&#x27;text-classification&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&#x27;dataset:multi_nli&#x27;</span>, <span class="hljs-string">&#x27;dataset:glue&#x27;</span>, <span class="hljs-string">&#x27;arxiv:1911.02116&#x27;</span>, <span class="hljs-string">&#x27;transformers&#x27;</span>, <span class="hljs-string">&#x27;tensorflow&#x27;</span>, <span class="hljs-string">&#x27;license:mit&#x27;</span>, <span class="hljs-string">&#x27;zero-shot-classification&#x27;</span>]
	pipeline_tag: zero-shot-classification
	siblings: [ModelFile(rfilename=<span class="hljs-string">&#x27;.gitattributes&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;README.md&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;config.json&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;pytorch_model.bin&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;sentencepiece.bpe.model&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;special_tokens_map.json&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;tokenizer.json&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;tokenizer_config.json&#x27;</span>)]
	config: <span class="hljs-literal">None</span>
	<span class="hljs-built_in">id</span>: Jiva/xlm-roberta-large-it-mnli
	private: <span class="hljs-literal">False</span>
	downloads: <span class="hljs-number">11061</span>
	library_name: transformers
	likes: <span class="hljs-number">1</span>
}`}}),fe=new y({props:{code:`filt = ModelFilter(
    task=model_args.pipeline_tag.TextClassification, 
    library=[model_args.library.PyTorch, model_args.library.TensorFlow]
)
api.list_models(filter=filt)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(
<span class="hljs-meta">... </span>    task=model_args.pipeline_tag.TextClassification, 
<span class="hljs-meta">... </span>    library=[model_args.library.PyTorch, model_args.library.TensorFlow]
<span class="hljs-meta">&gt;&gt;&gt; </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)[<span class="hljs-number">0</span>]
ModelInfo: {
	modelId: distilbert-base-uncased-finetuned-sst-<span class="hljs-number">2</span>-english
	sha: ada5cc01a40ea664f0a490d0b5f88c97ab460470
	lastModified: <span class="hljs-number">2022</span>-03-22T19:<span class="hljs-number">47</span>:<span class="hljs-number">08.000</span>Z
	tags: [<span class="hljs-string">&#x27;pytorch&#x27;</span>, <span class="hljs-string">&#x27;tf&#x27;</span>, <span class="hljs-string">&#x27;rust&#x27;</span>, <span class="hljs-string">&#x27;distilbert&#x27;</span>, <span class="hljs-string">&#x27;text-classification&#x27;</span>, <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-string">&#x27;dataset:sst-2&#x27;</span>, <span class="hljs-string">&#x27;transformers&#x27;</span>, <span class="hljs-string">&#x27;license:apache-2.0&#x27;</span>, <span class="hljs-string">&#x27;infinity_compatible&#x27;</span>]
	pipeline_tag: text-classification
	siblings: [ModelFile(rfilename=<span class="hljs-string">&#x27;.gitattributes&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;README.md&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;config.json&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;map.jpeg&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;pytorch_model.bin&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;rust_model.ot&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;tf_model.h5&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;tokenizer_config.json&#x27;</span>), ModelFile(rfilename=<span class="hljs-string">&#x27;vocab.txt&#x27;</span>)]
	config: <span class="hljs-literal">None</span>
	<span class="hljs-built_in">id</span>: distilbert-base-uncased-finetuned-sst-<span class="hljs-number">2</span>-english
	private: <span class="hljs-literal">False</span>
	downloads: <span class="hljs-number">3917525</span>
	library_name: transformers
	likes: <span class="hljs-number">49</span>
}`}}),pe=new Ba({}),ge=new y({props:{code:`dataset_args = DatasetSearchArguments()
dataset_args`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_args
Available Attributes <span class="hljs-keyword">or</span> Keys:
 * author
 * benchmark
 * dataset_name
 * language_creators
 * languages
 * licenses
 * multilinguality
 * size_categories
 * task_categories
 * task_ids`}}),me=new y({props:{code:"dataset_args.task_categories",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_args.task_categories
Available Attributes <span class="hljs-keyword">or</span> Keys:
 * CodeGeneration
 * Evaluationoflanguagemodels
 * InclusiveLanguage
 * InformationRetrieval
 * SemanticSearch
 * Summarization
 * Text2Textgeneration (Key only)
 * TextNeutralization
 * TokenClassification
 * Translation
 * audio_classification
 * automatic_speech_recognition
 * caption_retrieval
 * code_generation
 * computer_vision
 * conditional_text_generation
 * conversational
 * cross_language_transcription
 * crowdsourced
 * dialogue_system
 * entity_extraction
 * feature_extraction
 * fill_mask
 * generative_modelling
 * gpt_3 (Key only)
 * grammaticalerrorcorrection
 * image
 * image_captioning
 * image_classification
 * image_retrieval
 * image_segmentation
 * image_to_text
 * information_retrieval
 * language_modeling
 * machine_translation
 * multiple_choice
 * named_entity_disambiguation
 * named_entity_recognition
 * natural_language_inference
 * news_classification
 * object_detection
 * other
 * other_test
 * other_text_search
 * paraphrase
 * paraphrasedetection
 * query_paraphrasing
 * question_answering
 * question_generation
 * question_pairing
 * sentiment_analysis
 * sequence2sequence (Key only)
 * sequence_modeling
 * speech_processing
 * structure_prediction
 * summarization
 * table_to_text
 * tabular_to_text
 * text2text_generation (Key only)
 * text_classification
 * text_generation
 * text_generation_other_code_modeling
 * text_generation_other_common_sense_inference
 * text_generation_other_discourse_analysis
 * text_regression
 * text_retrieval
 * text_scoring
 * text_to_structured
 * text_to_tabular
 * textual_entailment
 * time_series_forecasting
 * token_classification
 * transkation
 * translation
 * tts
 * unpaired_image_to_image_translation
 * zero_shot_information_retrieval
 * zero_shot_retrieval`}}),de=new y({props:{code:'"en" in dataset_args.languages',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-string">&quot;en&quot;</span> <span class="hljs-keyword">in</span> dataset_args.languages
<span class="hljs-literal">True</span>`}}),_e=new y({props:{code:`filt = DatasetFilter(
   languages=dataset_args.languages.en,
   task_categories=dataset_args.task_categories.text_classification
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(
<span class="hljs-meta">... </span>   languages=dataset_args.languages.en,
<span class="hljs-meta">... </span>   task_categories=dataset_args.task_categories.text_classification
<span class="hljs-meta">... </span>)`}}),be=new y({props:{code:"api.list_datasets(filter=filt)[0]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)[<span class="hljs-number">0</span>]
DatasetInfo: {
    <span class="hljs-built_in">id</span>: Abirate/english_quotes
    lastModified: <span class="hljs-literal">None</span>
    tags: [<span class="hljs-string">&#x27;annotations_creators:expert-generated&#x27;</span>, <span class="hljs-string">&#x27;language_creators:expert-generated&#x27;</span>, <span class="hljs-string">&#x27;language_creators:crowdsourced&#x27;</span>, <span class="hljs-string">&#x27;languages:en&#x27;</span>, <span class="hljs-string">&#x27;multilinguality:monolingual&#x27;</span>, <span class="hljs-string">&#x27;source_datasets:original&#x27;</span>, <span class="hljs-string">&#x27;task_categories:text-classification&#x27;</span>, <span class="hljs-string">&#x27;task_ids:multi-label-classification&#x27;</span>]
    private: <span class="hljs-literal">False</span>
    author: Abirate
    description: <span class="hljs-literal">None</span>
    citation: <span class="hljs-literal">None</span>
    cardData: <span class="hljs-literal">None</span>
    siblings: <span class="hljs-literal">None</span>
    gated: <span class="hljs-literal">False</span>
}`}}),{c(){M=r("meta"),Ra=h(),C=r("h1"),N=r("a"),Xe=r("span"),u(Z.$$.fragment),Vt=h(),Ze=r("span"),es=s("Searching the Hub Efficiently with Python"),Ga=h(),L=r("p"),as=s("In this tutorial, we will explore how to interact and explore the Hugging Face Hub with the "),Ve=r("code"),ts=s("huggingface_hub"),ss=s(" library to help find available models and datasets quickly."),Ja=h(),I=r("h2"),z=r("a"),ea=r("span"),u(V.$$.fragment),ls=h(),aa=r("span"),is=s("The Basics"),Ua=h(),ee=r("p"),ta=r("code"),rs=s("huggingface_hub"),ns=s(" is a Python library that allows anyone to freely extract useful information from the Hub, as well as downloading and publishing models. You can install it with:"),Wa=h(),u(ae.$$.fragment),Ya=h(),K=r("p"),os=s("It comes packaged with an interface that can interact with the Hub in the "),ye=r("a"),cs=s("HfApi"),hs=s(" class:"),Qa=h(),u(te.$$.fragment),Xa=h(),xe=r("p"),fs=s("This class lets you perform a variety of operations that interact with the raw Hub API. We\u2019ll be focusing on two specific functions:"),Za=h(),B=r("ul"),sa=r("li"),we=r("a"),ps=s("list_models()"),us=h(),la=r("li"),$e=r("a"),gs=s("list_datasets()"),Va=h(),Ee=r("p"),ms=s("If you look at what can be passed into each function, you will find the parameter list looks something like:"),et=h(),x=r("ul"),ia=r("li"),ra=r("code"),ds=s("filter"),_s=h(),na=r("li"),oa=r("code"),bs=s("author"),vs=h(),ca=r("li"),ha=r("code"),ys=s("search"),xs=h(),fa=r("li"),ws=s("\u2026"),at=h(),w=r("p"),$s=s("Two of these parameters are intuitive ("),pa=r("code"),Es=s("author"),js=s(" and "),ua=r("code"),ks=s("search"),As=s("), but what about that "),ga=r("code"),Ts=s("filter"),Ps=s("? \u{1F914} Let\u2019s dive into a few helpers quickly and revisit that question."),tt=h(),H=r("h2"),R=r("a"),ma=r("span"),u(se.$$.fragment),Ss=h(),da=r("span"),Ds=s("Search Parameters"),st=h(),v=r("p"),Fs=s("The "),_a=r("code"),Ms=s("huggingface_hub"),Cs=s(" provides a user-friendly interface to know what exactly can be passed into this "),ba=r("code"),Is=s("filter"),Hs=s(" parameter through the "),je=r("a"),Os=s("ModelSearchArguments"),qs=s(" and "),ke=r("a"),Ns=s("DatasetSearchArguments"),Ls=s(" classes:"),lt=h(),u(le.$$.fragment),it=h(),E=r("p"),zs=s("These are nested namespace objects that have "),va=r("strong"),Ks=s("every single option"),Bs=s(" available on the Hub and that will return what should be passed to "),ya=r("code"),Rs=s("filter"),Gs=s(". The best of all is: it has tab completion \u{1F38A} ."),rt=h(),O=r("h2"),G=r("a"),xa=r("span"),u(ie.$$.fragment),Js=h(),wa=r("span"),Us=s("Searching for a Model"),nt=h(),Ae=r("p"),Ws=s("Let\u2019s pose a problem that would be complicated to solve without access to this information:"),ot=h(),Te=r("blockquote"),re=r("p"),Ys=s("I want to search the Hub for all PyTorch models trained on the "),$a=r("code"),Qs=s("glue"),Xs=s(" dataset that can do Text Classification."),ct=h(),J=r("p"),Zs=s("If you check what is available in "),Ea=r("code"),Vs=s("model_args"),el=s(" by checking it\u2019s output, you will find:"),ht=h(),u(ne.$$.fragment),ft=h(),j=r("p"),al=s("It has a variety of attributes or keys available to you. This is because it is both an object and a dictionary, so you can either do "),ja=r("code"),tl=s('model_args["author"]'),sl=s(" or "),ka=r("code"),ll=s("model_args.author"),il=s(". For this tutorial, let\u2019s follow the latter format."),pt=h(),U=r("p"),rl=s("The first criteria is getting all PyTorch models. This would be found under the "),Aa=r("code"),nl=s("library"),ol=s(" attribute, so let\u2019s see if it is there:"),ut=h(),u(oe.$$.fragment),gt=h(),k=r("p"),cl=s("It is! The "),Ta=r("code"),hl=s("PyTorch"),fl=s(" name is there, so you\u2019ll need to use "),Pa=r("code"),pl=s("model_args.library.PyTorch"),ul=s(":"),mt=h(),u(ce.$$.fragment),dt=h(),A=r("p"),gl=s("Below is an animation repeating the process for finding both the "),Sa=r("code"),ml=s("Text Classification"),dl=s(" and "),Da=r("code"),_l=s("glue"),bl=s(" requirements:"),_t=h(),Pe=r("p"),Se=r("img"),bt=h(),De=r("p"),Fe=r("img"),vt=h(),T=r("p"),vl=s("Now that all the pieces are there, the last step is to combine them all for something the API can use through the "),Me=r("a"),yl=s("ModelFilter"),xl=s(" and "),Ce=r("a"),wl=s("DatasetFilter"),$l=s(" classes. The classes transform the outputs of the previous step into something the API can use conveniently:"),yt=h(),u(he.$$.fragment),xt=h(),W=r("p"),El=s("As you can see, it found the models that fit all the criteria. You can even take it further by passing in an array for each of the parameters from before. For example, let\u2019s take a look for the same configuration, but also include "),Fa=r("code"),jl=s("TensorFlow"),kl=s(" in the filter:"),wt=h(),u(fe.$$.fragment),$t=h(),q=r("h2"),Y=r("a"),Ma=r("span"),u(pe.$$.fragment),Al=h(),Ca=r("span"),Tl=s("Searching for a Dataset"),Et=h(),Ie=r("p"),Pl=s("Similarly to finding a model, you can find a dataset easily by following the same steps."),jt=h(),He=r("p"),Sl=s("The new scenario will be:"),kt=h(),Oe=r("blockquote"),ue=r("p"),Dl=s("I want to search the Hub for all datasets that can be used for "),Ia=r("code"),Fl=s("text_classification"),Ml=s(" and are in English."),At=h(),P=r("p"),Cl=s("First, you should look at what is available in the "),qe=r("a"),Il=s("DatasetSearchArguments"),Hl=s(", similar to the "),Ne=r("a"),Ol=s("ModelSearchArguments"),ql=s(":"),Tt=h(),u(ge.$$.fragment),Pt=h(),$=r("p"),Ha=r("code"),Nl=s("text_classification"),Ll=s(" is a "),Oa=r("em"),zl=s("task"),Kl=s(", so first you should check "),qa=r("code"),Bl=s("task_categories"),Rl=s(":"),St=h(),u(me.$$.fragment),Dt=h(),S=r("p"),Gl=s("There you will find "),Na=r("code"),Jl=s("text_classification"),Ul=s(", so you should use "),La=r("code"),Wl=s("dataset_args.task_categories.text_classification"),Yl=s("."),Ft=h(),D=r("p"),Ql=s("Next we need to find the proper language. There is a "),za=r("code"),Xl=s("languages"),Zl=s(" property we can check. These are two-letter language codes, so you should check if it has "),Ka=r("code"),Vl=s("en"),ei=s(":"),Mt=h(),u(de.$$.fragment),Ct=h(),Le=r("p"),ai=s("Now that the pieces are found, you can write a filter:"),It=h(),u(_e.$$.fragment),Ht=h(),ze=r("p"),ti=s("And search the API!"),Ot=h(),u(be.$$.fragment),qt=h(),Ke=r("p"),si=s("With these two functionalities combined, you can search for all available parameters and tags within the Hub to search for with ease for both Datasets and Models!"),this.h()},l(e){const i=Sr('[data-svelte="svelte-1phssyn"]',document.head);M=n(i,"META",{name:!0,content:!0}),i.forEach(a),Ra=f(e),C=n(e,"H1",{class:!0});var Lt=o(C);N=n(Lt,"A",{id:!0,class:!0,href:!0});var oi=o(N);Xe=n(oi,"SPAN",{});var ci=o(Xe);g(Z.$$.fragment,ci),ci.forEach(a),oi.forEach(a),Vt=f(Lt),Ze=n(Lt,"SPAN",{});var hi=o(Ze);es=l(hi,"Searching the Hub Efficiently with Python"),hi.forEach(a),Lt.forEach(a),Ga=f(e),L=n(e,"P",{});var zt=o(L);as=l(zt,"In this tutorial, we will explore how to interact and explore the Hugging Face Hub with the "),Ve=n(zt,"CODE",{});var fi=o(Ve);ts=l(fi,"huggingface_hub"),fi.forEach(a),ss=l(zt," library to help find available models and datasets quickly."),zt.forEach(a),Ja=f(e),I=n(e,"H2",{class:!0});var Kt=o(I);z=n(Kt,"A",{id:!0,class:!0,href:!0});var pi=o(z);ea=n(pi,"SPAN",{});var ui=o(ea);g(V.$$.fragment,ui),ui.forEach(a),pi.forEach(a),ls=f(Kt),aa=n(Kt,"SPAN",{});var gi=o(aa);is=l(gi,"The Basics"),gi.forEach(a),Kt.forEach(a),Ua=f(e),ee=n(e,"P",{});var li=o(ee);ta=n(li,"CODE",{});var mi=o(ta);rs=l(mi,"huggingface_hub"),mi.forEach(a),ns=l(li," is a Python library that allows anyone to freely extract useful information from the Hub, as well as downloading and publishing models. You can install it with:"),li.forEach(a),Wa=f(e),g(ae.$$.fragment,e),Ya=f(e),K=n(e,"P",{});var Bt=o(K);os=l(Bt,"It comes packaged with an interface that can interact with the Hub in the "),ye=n(Bt,"A",{href:!0});var di=o(ye);cs=l(di,"HfApi"),di.forEach(a),hs=l(Bt," class:"),Bt.forEach(a),Qa=f(e),g(te.$$.fragment,e),Xa=f(e),xe=n(e,"P",{});var _i=o(xe);fs=l(_i,"This class lets you perform a variety of operations that interact with the raw Hub API. We\u2019ll be focusing on two specific functions:"),_i.forEach(a),Za=f(e),B=n(e,"UL",{});var Rt=o(B);sa=n(Rt,"LI",{});var bi=o(sa);we=n(bi,"A",{href:!0});var vi=o(we);ps=l(vi,"list_models()"),vi.forEach(a),bi.forEach(a),us=f(Rt),la=n(Rt,"LI",{});var yi=o(la);$e=n(yi,"A",{href:!0});var xi=o($e);gs=l(xi,"list_datasets()"),xi.forEach(a),yi.forEach(a),Rt.forEach(a),Va=f(e),Ee=n(e,"P",{});var wi=o(Ee);ms=l(wi,"If you look at what can be passed into each function, you will find the parameter list looks something like:"),wi.forEach(a),et=f(e),x=n(e,"UL",{});var Q=o(x);ia=n(Q,"LI",{});var $i=o(ia);ra=n($i,"CODE",{});var Ei=o(ra);ds=l(Ei,"filter"),Ei.forEach(a),$i.forEach(a),_s=f(Q),na=n(Q,"LI",{});var ji=o(na);oa=n(ji,"CODE",{});var ki=o(oa);bs=l(ki,"author"),ki.forEach(a),ji.forEach(a),vs=f(Q),ca=n(Q,"LI",{});var Ai=o(ca);ha=n(Ai,"CODE",{});var Ti=o(ha);ys=l(Ti,"search"),Ti.forEach(a),Ai.forEach(a),xs=f(Q),fa=n(Q,"LI",{});var Pi=o(fa);ws=l(Pi,"\u2026"),Pi.forEach(a),Q.forEach(a),at=f(e),w=n(e,"P",{});var X=o(w);$s=l(X,"Two of these parameters are intuitive ("),pa=n(X,"CODE",{});var Si=o(pa);Es=l(Si,"author"),Si.forEach(a),js=l(X," and "),ua=n(X,"CODE",{});var Di=o(ua);ks=l(Di,"search"),Di.forEach(a),As=l(X,"), but what about that "),ga=n(X,"CODE",{});var Fi=o(ga);Ts=l(Fi,"filter"),Fi.forEach(a),Ps=l(X,"? \u{1F914} Let\u2019s dive into a few helpers quickly and revisit that question."),X.forEach(a),tt=f(e),H=n(e,"H2",{class:!0});var Gt=o(H);R=n(Gt,"A",{id:!0,class:!0,href:!0});var Mi=o(R);ma=n(Mi,"SPAN",{});var Ci=o(ma);g(se.$$.fragment,Ci),Ci.forEach(a),Mi.forEach(a),Ss=f(Gt),da=n(Gt,"SPAN",{});var Ii=o(da);Ds=l(Ii,"Search Parameters"),Ii.forEach(a),Gt.forEach(a),st=f(e),v=n(e,"P",{});var F=o(v);Fs=l(F,"The "),_a=n(F,"CODE",{});var Hi=o(_a);Ms=l(Hi,"huggingface_hub"),Hi.forEach(a),Cs=l(F," provides a user-friendly interface to know what exactly can be passed into this "),ba=n(F,"CODE",{});var Oi=o(ba);Is=l(Oi,"filter"),Oi.forEach(a),Hs=l(F," parameter through the "),je=n(F,"A",{href:!0});var qi=o(je);Os=l(qi,"ModelSearchArguments"),qi.forEach(a),qs=l(F," and "),ke=n(F,"A",{href:!0});var Ni=o(ke);Ns=l(Ni,"DatasetSearchArguments"),Ni.forEach(a),Ls=l(F," classes:"),F.forEach(a),lt=f(e),g(le.$$.fragment,e),it=f(e),E=n(e,"P",{});var Be=o(E);zs=l(Be,"These are nested namespace objects that have "),va=n(Be,"STRONG",{});var Li=o(va);Ks=l(Li,"every single option"),Li.forEach(a),Bs=l(Be," available on the Hub and that will return what should be passed to "),ya=n(Be,"CODE",{});var zi=o(ya);Rs=l(zi,"filter"),zi.forEach(a),Gs=l(Be,". The best of all is: it has tab completion \u{1F38A} ."),Be.forEach(a),rt=f(e),O=n(e,"H2",{class:!0});var Jt=o(O);G=n(Jt,"A",{id:!0,class:!0,href:!0});var Ki=o(G);xa=n(Ki,"SPAN",{});var Bi=o(xa);g(ie.$$.fragment,Bi),Bi.forEach(a),Ki.forEach(a),Js=f(Jt),wa=n(Jt,"SPAN",{});var Ri=o(wa);Us=l(Ri,"Searching for a Model"),Ri.forEach(a),Jt.forEach(a),nt=f(e),Ae=n(e,"P",{});var Gi=o(Ae);Ws=l(Gi,"Let\u2019s pose a problem that would be complicated to solve without access to this information:"),Gi.forEach(a),ot=f(e),Te=n(e,"BLOCKQUOTE",{});var Ji=o(Te);re=n(Ji,"P",{});var Ut=o(re);Ys=l(Ut,"I want to search the Hub for all PyTorch models trained on the "),$a=n(Ut,"CODE",{});var Ui=o($a);Qs=l(Ui,"glue"),Ui.forEach(a),Xs=l(Ut," dataset that can do Text Classification."),Ut.forEach(a),Ji.forEach(a),ct=f(e),J=n(e,"P",{});var Wt=o(J);Zs=l(Wt,"If you check what is available in "),Ea=n(Wt,"CODE",{});var Wi=o(Ea);Vs=l(Wi,"model_args"),Wi.forEach(a),el=l(Wt," by checking it\u2019s output, you will find:"),Wt.forEach(a),ht=f(e),g(ne.$$.fragment,e),ft=f(e),j=n(e,"P",{});var Re=o(j);al=l(Re,"It has a variety of attributes or keys available to you. This is because it is both an object and a dictionary, so you can either do "),ja=n(Re,"CODE",{});var Yi=o(ja);tl=l(Yi,'model_args["author"]'),Yi.forEach(a),sl=l(Re," or "),ka=n(Re,"CODE",{});var Qi=o(ka);ll=l(Qi,"model_args.author"),Qi.forEach(a),il=l(Re,". For this tutorial, let\u2019s follow the latter format."),Re.forEach(a),pt=f(e),U=n(e,"P",{});var Yt=o(U);rl=l(Yt,"The first criteria is getting all PyTorch models. This would be found under the "),Aa=n(Yt,"CODE",{});var Xi=o(Aa);nl=l(Xi,"library"),Xi.forEach(a),ol=l(Yt," attribute, so let\u2019s see if it is there:"),Yt.forEach(a),ut=f(e),g(oe.$$.fragment,e),gt=f(e),k=n(e,"P",{});var Ge=o(k);cl=l(Ge,"It is! The "),Ta=n(Ge,"CODE",{});var Zi=o(Ta);hl=l(Zi,"PyTorch"),Zi.forEach(a),fl=l(Ge," name is there, so you\u2019ll need to use "),Pa=n(Ge,"CODE",{});var Vi=o(Pa);pl=l(Vi,"model_args.library.PyTorch"),Vi.forEach(a),ul=l(Ge,":"),Ge.forEach(a),mt=f(e),g(ce.$$.fragment,e),dt=f(e),A=n(e,"P",{});var Je=o(A);gl=l(Je,"Below is an animation repeating the process for finding both the "),Sa=n(Je,"CODE",{});var er=o(Sa);ml=l(er,"Text Classification"),er.forEach(a),dl=l(Je," and "),Da=n(Je,"CODE",{});var ar=o(Da);_l=l(ar,"glue"),ar.forEach(a),bl=l(Je," requirements:"),Je.forEach(a),_t=f(e),Pe=n(e,"P",{});var tr=o(Pe);Se=n(tr,"IMG",{src:!0,alt:!0}),tr.forEach(a),bt=f(e),De=n(e,"P",{});var sr=o(De);Fe=n(sr,"IMG",{src:!0,alt:!0}),sr.forEach(a),vt=f(e),T=n(e,"P",{});var Ue=o(T);vl=l(Ue,"Now that all the pieces are there, the last step is to combine them all for something the API can use through the "),Me=n(Ue,"A",{href:!0});var lr=o(Me);yl=l(lr,"ModelFilter"),lr.forEach(a),xl=l(Ue," and "),Ce=n(Ue,"A",{href:!0});var ir=o(Ce);wl=l(ir,"DatasetFilter"),ir.forEach(a),$l=l(Ue," classes. The classes transform the outputs of the previous step into something the API can use conveniently:"),Ue.forEach(a),yt=f(e),g(he.$$.fragment,e),xt=f(e),W=n(e,"P",{});var Qt=o(W);El=l(Qt,"As you can see, it found the models that fit all the criteria. You can even take it further by passing in an array for each of the parameters from before. For example, let\u2019s take a look for the same configuration, but also include "),Fa=n(Qt,"CODE",{});var rr=o(Fa);jl=l(rr,"TensorFlow"),rr.forEach(a),kl=l(Qt," in the filter:"),Qt.forEach(a),wt=f(e),g(fe.$$.fragment,e),$t=f(e),q=n(e,"H2",{class:!0});var Xt=o(q);Y=n(Xt,"A",{id:!0,class:!0,href:!0});var nr=o(Y);Ma=n(nr,"SPAN",{});var or=o(Ma);g(pe.$$.fragment,or),or.forEach(a),nr.forEach(a),Al=f(Xt),Ca=n(Xt,"SPAN",{});var cr=o(Ca);Tl=l(cr,"Searching for a Dataset"),cr.forEach(a),Xt.forEach(a),Et=f(e),Ie=n(e,"P",{});var hr=o(Ie);Pl=l(hr,"Similarly to finding a model, you can find a dataset easily by following the same steps."),hr.forEach(a),jt=f(e),He=n(e,"P",{});var fr=o(He);Sl=l(fr,"The new scenario will be:"),fr.forEach(a),kt=f(e),Oe=n(e,"BLOCKQUOTE",{});var pr=o(Oe);ue=n(pr,"P",{});var Zt=o(ue);Dl=l(Zt,"I want to search the Hub for all datasets that can be used for "),Ia=n(Zt,"CODE",{});var ur=o(Ia);Fl=l(ur,"text_classification"),ur.forEach(a),Ml=l(Zt," and are in English."),Zt.forEach(a),pr.forEach(a),At=f(e),P=n(e,"P",{});var We=o(P);Cl=l(We,"First, you should look at what is available in the "),qe=n(We,"A",{href:!0});var gr=o(qe);Il=l(gr,"DatasetSearchArguments"),gr.forEach(a),Hl=l(We,", similar to the "),Ne=n(We,"A",{href:!0});var mr=o(Ne);Ol=l(mr,"ModelSearchArguments"),mr.forEach(a),ql=l(We,":"),We.forEach(a),Tt=f(e),g(ge.$$.fragment,e),Pt=f(e),$=n(e,"P",{});var ve=o($);Ha=n(ve,"CODE",{});var dr=o(Ha);Nl=l(dr,"text_classification"),dr.forEach(a),Ll=l(ve," is a "),Oa=n(ve,"EM",{});var _r=o(Oa);zl=l(_r,"task"),_r.forEach(a),Kl=l(ve,", so first you should check "),qa=n(ve,"CODE",{});var br=o(qa);Bl=l(br,"task_categories"),br.forEach(a),Rl=l(ve,":"),ve.forEach(a),St=f(e),g(me.$$.fragment,e),Dt=f(e),S=n(e,"P",{});var Ye=o(S);Gl=l(Ye,"There you will find "),Na=n(Ye,"CODE",{});var vr=o(Na);Jl=l(vr,"text_classification"),vr.forEach(a),Ul=l(Ye,", so you should use "),La=n(Ye,"CODE",{});var yr=o(La);Wl=l(yr,"dataset_args.task_categories.text_classification"),yr.forEach(a),Yl=l(Ye,"."),Ye.forEach(a),Ft=f(e),D=n(e,"P",{});var Qe=o(D);Ql=l(Qe,"Next we need to find the proper language. There is a "),za=n(Qe,"CODE",{});var xr=o(za);Xl=l(xr,"languages"),xr.forEach(a),Zl=l(Qe," property we can check. These are two-letter language codes, so you should check if it has "),Ka=n(Qe,"CODE",{});var wr=o(Ka);Vl=l(wr,"en"),wr.forEach(a),ei=l(Qe,":"),Qe.forEach(a),Mt=f(e),g(de.$$.fragment,e),Ct=f(e),Le=n(e,"P",{});var $r=o(Le);ai=l($r,"Now that the pieces are found, you can write a filter:"),$r.forEach(a),It=f(e),g(_e.$$.fragment,e),Ht=f(e),ze=n(e,"P",{});var Er=o(ze);ti=l(Er,"And search the API!"),Er.forEach(a),Ot=f(e),g(be.$$.fragment,e),qt=f(e),Ke=n(e,"P",{});var jr=o(Ke);si=l(jr,"With these two functionalities combined, you can search for all available parameters and tags within the Hub to search for with ease for both Datasets and Models!"),jr.forEach(a),this.h()},h(){p(M,"name","hf:doc:metadata"),p(M,"content",JSON.stringify(Cr)),p(N,"id","searching-the-hub-efficiently-with-python"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#searching-the-hub-efficiently-with-python"),p(C,"class","relative group"),p(z,"id","the-basics"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#the-basics"),p(I,"class","relative group"),p(ye,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),p(we,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.list_models"),p($e,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.list_datasets"),p(R,"id","search-parameters"),p(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(R,"href","#search-parameters"),p(H,"class","relative group"),p(je,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelSearchArguments"),p(ke,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetSearchArguments"),p(G,"id","searching-for-a-model"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#searching-for-a-model"),p(O,"class","relative group"),kr(Se.src,ri="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/search_text_classification.gif")||p(Se,"src",ri),p(Se,"alt","Animation exploring `model_args.pipeline_tag`"),kr(Fe.src,ni="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/search_glue.gif")||p(Fe,"src",ni),p(Fe,"alt","Animation exploring `model_args.dataset`"),p(Me,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelFilter"),p(Ce,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetFilter"),p(Y,"id","searching-for-a-dataset"),p(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Y,"href","#searching-for-a-dataset"),p(q,"class","relative group"),p(qe,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.DatasetSearchArguments"),p(Ne,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.ModelSearchArguments")},m(e,i){t(document.head,M),c(e,Ra,i),c(e,C,i),t(C,N),t(N,Xe),m(Z,Xe,null),t(C,Vt),t(C,Ze),t(Ze,es),c(e,Ga,i),c(e,L,i),t(L,as),t(L,Ve),t(Ve,ts),t(L,ss),c(e,Ja,i),c(e,I,i),t(I,z),t(z,ea),m(V,ea,null),t(I,ls),t(I,aa),t(aa,is),c(e,Ua,i),c(e,ee,i),t(ee,ta),t(ta,rs),t(ee,ns),c(e,Wa,i),m(ae,e,i),c(e,Ya,i),c(e,K,i),t(K,os),t(K,ye),t(ye,cs),t(K,hs),c(e,Qa,i),m(te,e,i),c(e,Xa,i),c(e,xe,i),t(xe,fs),c(e,Za,i),c(e,B,i),t(B,sa),t(sa,we),t(we,ps),t(B,us),t(B,la),t(la,$e),t($e,gs),c(e,Va,i),c(e,Ee,i),t(Ee,ms),c(e,et,i),c(e,x,i),t(x,ia),t(ia,ra),t(ra,ds),t(x,_s),t(x,na),t(na,oa),t(oa,bs),t(x,vs),t(x,ca),t(ca,ha),t(ha,ys),t(x,xs),t(x,fa),t(fa,ws),c(e,at,i),c(e,w,i),t(w,$s),t(w,pa),t(pa,Es),t(w,js),t(w,ua),t(ua,ks),t(w,As),t(w,ga),t(ga,Ts),t(w,Ps),c(e,tt,i),c(e,H,i),t(H,R),t(R,ma),m(se,ma,null),t(H,Ss),t(H,da),t(da,Ds),c(e,st,i),c(e,v,i),t(v,Fs),t(v,_a),t(_a,Ms),t(v,Cs),t(v,ba),t(ba,Is),t(v,Hs),t(v,je),t(je,Os),t(v,qs),t(v,ke),t(ke,Ns),t(v,Ls),c(e,lt,i),m(le,e,i),c(e,it,i),c(e,E,i),t(E,zs),t(E,va),t(va,Ks),t(E,Bs),t(E,ya),t(ya,Rs),t(E,Gs),c(e,rt,i),c(e,O,i),t(O,G),t(G,xa),m(ie,xa,null),t(O,Js),t(O,wa),t(wa,Us),c(e,nt,i),c(e,Ae,i),t(Ae,Ws),c(e,ot,i),c(e,Te,i),t(Te,re),t(re,Ys),t(re,$a),t($a,Qs),t(re,Xs),c(e,ct,i),c(e,J,i),t(J,Zs),t(J,Ea),t(Ea,Vs),t(J,el),c(e,ht,i),m(ne,e,i),c(e,ft,i),c(e,j,i),t(j,al),t(j,ja),t(ja,tl),t(j,sl),t(j,ka),t(ka,ll),t(j,il),c(e,pt,i),c(e,U,i),t(U,rl),t(U,Aa),t(Aa,nl),t(U,ol),c(e,ut,i),m(oe,e,i),c(e,gt,i),c(e,k,i),t(k,cl),t(k,Ta),t(Ta,hl),t(k,fl),t(k,Pa),t(Pa,pl),t(k,ul),c(e,mt,i),m(ce,e,i),c(e,dt,i),c(e,A,i),t(A,gl),t(A,Sa),t(Sa,ml),t(A,dl),t(A,Da),t(Da,_l),t(A,bl),c(e,_t,i),c(e,Pe,i),t(Pe,Se),c(e,bt,i),c(e,De,i),t(De,Fe),c(e,vt,i),c(e,T,i),t(T,vl),t(T,Me),t(Me,yl),t(T,xl),t(T,Ce),t(Ce,wl),t(T,$l),c(e,yt,i),m(he,e,i),c(e,xt,i),c(e,W,i),t(W,El),t(W,Fa),t(Fa,jl),t(W,kl),c(e,wt,i),m(fe,e,i),c(e,$t,i),c(e,q,i),t(q,Y),t(Y,Ma),m(pe,Ma,null),t(q,Al),t(q,Ca),t(Ca,Tl),c(e,Et,i),c(e,Ie,i),t(Ie,Pl),c(e,jt,i),c(e,He,i),t(He,Sl),c(e,kt,i),c(e,Oe,i),t(Oe,ue),t(ue,Dl),t(ue,Ia),t(Ia,Fl),t(ue,Ml),c(e,At,i),c(e,P,i),t(P,Cl),t(P,qe),t(qe,Il),t(P,Hl),t(P,Ne),t(Ne,Ol),t(P,ql),c(e,Tt,i),m(ge,e,i),c(e,Pt,i),c(e,$,i),t($,Ha),t(Ha,Nl),t($,Ll),t($,Oa),t(Oa,zl),t($,Kl),t($,qa),t(qa,Bl),t($,Rl),c(e,St,i),m(me,e,i),c(e,Dt,i),c(e,S,i),t(S,Gl),t(S,Na),t(Na,Jl),t(S,Ul),t(S,La),t(La,Wl),t(S,Yl),c(e,Ft,i),c(e,D,i),t(D,Ql),t(D,za),t(za,Xl),t(D,Zl),t(D,Ka),t(Ka,Vl),t(D,ei),c(e,Mt,i),m(de,e,i),c(e,Ct,i),c(e,Le,i),t(Le,ai),c(e,It,i),m(_e,e,i),c(e,Ht,i),c(e,ze,i),t(ze,ti),c(e,Ot,i),m(be,e,i),c(e,qt,i),c(e,Ke,i),t(Ke,si),Nt=!0},p:Dr,i(e){Nt||(d(Z.$$.fragment,e),d(V.$$.fragment,e),d(ae.$$.fragment,e),d(te.$$.fragment,e),d(se.$$.fragment,e),d(le.$$.fragment,e),d(ie.$$.fragment,e),d(ne.$$.fragment,e),d(oe.$$.fragment,e),d(ce.$$.fragment,e),d(he.$$.fragment,e),d(fe.$$.fragment,e),d(pe.$$.fragment,e),d(ge.$$.fragment,e),d(me.$$.fragment,e),d(de.$$.fragment,e),d(_e.$$.fragment,e),d(be.$$.fragment,e),Nt=!0)},o(e){_(Z.$$.fragment,e),_(V.$$.fragment,e),_(ae.$$.fragment,e),_(te.$$.fragment,e),_(se.$$.fragment,e),_(le.$$.fragment,e),_(ie.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ce.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),_(pe.$$.fragment,e),_(ge.$$.fragment,e),_(me.$$.fragment,e),_(de.$$.fragment,e),_(_e.$$.fragment,e),_(be.$$.fragment,e),Nt=!1},d(e){a(M),e&&a(Ra),e&&a(C),b(Z),e&&a(Ga),e&&a(L),e&&a(Ja),e&&a(I),b(V),e&&a(Ua),e&&a(ee),e&&a(Wa),b(ae,e),e&&a(Ya),e&&a(K),e&&a(Qa),b(te,e),e&&a(Xa),e&&a(xe),e&&a(Za),e&&a(B),e&&a(Va),e&&a(Ee),e&&a(et),e&&a(x),e&&a(at),e&&a(w),e&&a(tt),e&&a(H),b(se),e&&a(st),e&&a(v),e&&a(lt),b(le,e),e&&a(it),e&&a(E),e&&a(rt),e&&a(O),b(ie),e&&a(nt),e&&a(Ae),e&&a(ot),e&&a(Te),e&&a(ct),e&&a(J),e&&a(ht),b(ne,e),e&&a(ft),e&&a(j),e&&a(pt),e&&a(U),e&&a(ut),b(oe,e),e&&a(gt),e&&a(k),e&&a(mt),b(ce,e),e&&a(dt),e&&a(A),e&&a(_t),e&&a(Pe),e&&a(bt),e&&a(De),e&&a(vt),e&&a(T),e&&a(yt),b(he,e),e&&a(xt),e&&a(W),e&&a(wt),b(fe,e),e&&a($t),e&&a(q),b(pe),e&&a(Et),e&&a(Ie),e&&a(jt),e&&a(He),e&&a(kt),e&&a(Oe),e&&a(At),e&&a(P),e&&a(Tt),b(ge,e),e&&a(Pt),e&&a($),e&&a(St),b(me,e),e&&a(Dt),e&&a(S),e&&a(Ft),e&&a(D),e&&a(Mt),b(de,e),e&&a(Ct),e&&a(Le),e&&a(It),b(_e,e),e&&a(Ht),e&&a(ze),e&&a(Ot),b(be,e),e&&a(qt),e&&a(Ke)}}}const Cr={local:"searching-the-hub-efficiently-with-python",sections:[{local:"the-basics",title:"The Basics"},{local:"search-parameters",title:"Search Parameters"},{local:"searching-for-a-model",title:"Searching for a Model"},{local:"searching-for-a-dataset",title:"Searching for a Dataset"}],title:"Searching the Hub Efficiently with Python"};function Ir(ii){return Fr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nr extends Ar{constructor(M){super();Tr(this,M,Ir,Mr,Pr,{})}}export{Nr as default,Cr as metadata};
